'use client'

// ═══════════════════════════════════════════════════════════════════════
// KALAM — Mufakkir Agent (Reflexão)
// Analisa padrões reais no journal e histórico de humor do usuário.
// Detecta: frequência, horário preferido, mood dominante, streak de escrita.
// ═══════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'

export type WritingPattern = 'morning' | 'afternoon' | 'evening' | 'night' | null

export interface ReflexaoStats {
  totalEntries: number
  entriesThisWeek: number
  streakDays: number          // dias consecutivos com entrada
  dominantMood: string | null // mood mais frequente nos últimos 14 dias
  writingPattern: WritingPattern
  insight: string             // frase gerada a partir dos dados reais
  lastEntryDate: string | null
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function readJson<T>(key: string, fallback: T): T {
  try {
    if (typeof window === 'undefined') return fallback
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

type RawEntry = {
  date?: string
  created_at?: string
  mood?: string
  content?: string
  text?: string
}

type RawMood = { mood: string; timestamp?: string; date?: string }

const MOOD_LABELS: Record<string, string> = {
  grateful: 'gratidão',
  peaceful: 'paz',
  hopeful: 'esperança',
  happy: 'alegria',
  sad: 'tristeza',
  anxious: 'ansiedade',
  confused: 'dúvida',
  angry: 'frustração',
  lost: 'busca',
  inspired: 'inspiração',
}

// ── MAIN HOOK ────────────────────────────────────────────────────────────────

export function useReflexaoAgent(): { data: ReflexaoStats | null; loading: boolean } {
  const [data, setData] = useState<ReflexaoStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // kalam-journal (dash) is the key written by JournalClient
    const entries = readJson<RawEntry[]>('kalam-journal', [])
    // kalam-mood-log (dash) is written by saveMoodEntry() in mood-practices.ts
    const moodHistory = readJson<RawMood[]>('kalam-mood-log', [])

    const now = new Date()
    const sevenDaysAgo = new Date(now.getTime() - 7 * 86400000)
    const fourteenDaysAgo = new Date(now.getTime() - 14 * 86400000)

    const totalEntries = entries.length

    // ── Entries this week ──────────────────────────────────────────────────
    const entriesThisWeek = entries.filter((e) => {
      const d = new Date(e.date || e.created_at || 0)
      return !isNaN(d.getTime()) && d >= sevenDaysAgo
    }).length

    // ── Writing time pattern ───────────────────────────────────────────────
    const hours = entries
      .map((e) => {
        const d = new Date(e.date || e.created_at || 0)
        return isNaN(d.getTime()) ? -1 : d.getHours()
      })
      .filter((h) => h >= 0)

    let morning = 0, afternoon = 0, evening = 0, night = 0
    for (const h of hours) {
      if (h >= 5 && h < 12) morning++
      else if (h >= 12 && h < 17) afternoon++
      else if (h >= 17 && h < 22) evening++
      else night++
    }

    let writingPattern: WritingPattern = null
    if (hours.length > 0) {
      const max = Math.max(morning, afternoon, evening, night)
      if (morning === max) writingPattern = 'morning'
      else if (afternoon === max) writingPattern = 'afternoon'
      else if (evening === max) writingPattern = 'evening'
      else writingPattern = 'night'
    }

    // ── Dominant mood (last 14 days) ───────────────────────────────────────
    const recentMoods = moodHistory
      .filter((m) => {
        const d = new Date(m.timestamp || m.date || 0)
        return !isNaN(d.getTime()) && d >= fourteenDaysAgo
      })
      .map((m) => m.mood)

    // Also pull moods from journal entries themselves
    // JournalClient saves `emotion` field (e.g. "Grato", "Em paz") and `content`
    for (const e of entries) {
      if (e.mood) recentMoods.push(e.mood)
      // emotion is the field JournalClient uses
      const rawEmotion = (e as unknown as Record<string, string>).emotion
      if (rawEmotion) recentMoods.push(rawEmotion)
    }

    const moodCounts: Record<string, number> = {}
    for (const mood of recentMoods) {
      if (mood) moodCounts[mood] = (moodCounts[mood] || 0) + 1
    }
    const dominantMood =
      Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || null

    // ── Journal streak (consecutive days with entry) ────────────────────────
    const entryDays = new Set(
      entries.map((e) => {
        const d = new Date(e.date || e.created_at || 0)
        if (isNaN(d.getTime())) return ''
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
      })
    )
    let streakDays = 0
    for (let i = 0; i < 60; i++) {
      const d = new Date(now.getTime() - i * 86400000)
      const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
      if (entryDays.has(key)) streakDays++
      else if (i > 0) break
    }

    // ── Last entry date ────────────────────────────────────────────────────
    const sorted = [...entries].sort(
      (a, b) =>
        new Date(b.date || b.created_at || 0).getTime() -
        new Date(a.date || a.created_at || 0).getTime()
    )
    const lastEntryDate = sorted[0]?.date || sorted[0]?.created_at || null

    // ── Insight generation ─────────────────────────────────────────────────
    let insight = ''
    if (totalEntries === 0) {
      insight = 'Esperando sua primeira reflexão'
    } else if (streakDays >= 14) {
      insight = `${streakDays} dias escrevendo seguido — disciplina rara`
    } else if (streakDays >= 7) {
      insight = `${streakDays} dias consecutivos — você está em ritmo`
    } else if (dominantMood && MOOD_LABELS[dominantMood]) {
      const label = MOOD_LABELS[dominantMood]
      insight =
        entriesThisWeek > 0
          ? `${entriesThisWeek} reflexões essa semana — energia de ${label}`
          : `Seu estado dominante: ${label}`
    } else if (writingPattern === 'morning') {
      insight = `Você começa o dia escrevendo — ${entriesThisWeek} vez${entriesThisWeek !== 1 ? 'es' : ''} essa semana`
    } else if (writingPattern === 'evening' || writingPattern === 'night') {
      insight = `Você reflete à noite — ${totalEntries} entrada${totalEntries !== 1 ? 's' : ''} no total`
    } else {
      insight = `${totalEntries} reflexão${totalEntries !== 1 ? 'ões' : ''} guardada${totalEntries !== 1 ? 's' : ''}`
    }

    setData({
      totalEntries,
      entriesThisWeek,
      streakDays,
      dominantMood,
      writingPattern,
      insight,
      lastEntryDate,
    })
    setLoading(false)
  }, [])

  return { data, loading }
}
