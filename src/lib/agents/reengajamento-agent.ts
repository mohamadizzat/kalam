'use client'

// ═══════════════════════════════════════════════════════════════════════
// KALAM — Munadi Agent (Reengajamento)
// Monitora a presença do usuário e avalia quando chamar de volta.
// Conecta ao reengagement-engine.ts existente.
// Detecta: score de engajamento (0-100), status, nudge ativo,
// dias desde última visita, e gera insight personalizado.
// ═══════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { evaluateNudge, type Nudge } from '@/lib/reengagement-engine'

export type EngagementStatus = 'active' | 'at_risk' | 'returning' | 'lost' | 'new'

export interface ReengajamentoStats {
  visitCount: number
  daysSinceLastVisit: number | null
  nudge: Nudge | null
  engagementScore: number   // 0-100
  status: EngagementStatus
  nudgeCount: number        // total de nudges já disparados
  insight: string
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

function readJson<T>(key: string, fallback: T): T {
  try {
    if (typeof window === 'undefined') return fallback
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function daysSince(isoOrDate: string): number {
  try {
    const then = new Date(isoOrDate)
    const now = new Date()
    const thenDay = new Date(then.getFullYear(), then.getMonth(), then.getDate())
    const nowDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return Math.floor((nowDay.getTime() - thenDay.getTime()) / 86400000)
  } catch {
    return Infinity
  }
}

// ── ENGAGEMENT SCORE ─────────────────────────────────────────────────────────
// 0-100 baseado em múltiplos sinais de presença.

function computeEngagementScore(params: {
  visitCount: number
  daysSinceLast: number | null
  journalCount: number
  streakCurrent: number
  nudgeDismissCount: number
}): number {
  const { visitCount, daysSinceLast, journalCount, streakCurrent, nudgeDismissCount } = params

  let score = 0

  // Visit frequency (max 30 pts)
  if (visitCount >= 50) score += 30
  else if (visitCount >= 20) score += 22
  else if (visitCount >= 10) score += 15
  else if (visitCount >= 5) score += 8
  else score += visitCount * 2

  // Recency (max 30 pts) — lower days = more points
  if (daysSinceLast === null) {
    score += 0
  } else if (daysSinceLast === 0) {
    score += 30
  } else if (daysSinceLast <= 1) {
    score += 25
  } else if (daysSinceLast <= 3) {
    score += 18
  } else if (daysSinceLast <= 7) {
    score += 10
  } else if (daysSinceLast <= 14) {
    score += 4
  }

  // Journal activity (max 20 pts)
  if (journalCount >= 20) score += 20
  else if (journalCount >= 10) score += 15
  else if (journalCount >= 5) score += 10
  else score += journalCount

  // Streak (max 15 pts)
  if (streakCurrent >= 14) score += 15
  else if (streakCurrent >= 7) score += 12
  else if (streakCurrent >= 3) score += 8
  else if (streakCurrent >= 1) score += 4

  // Dismissed nudges = actively returning (max 5 pts)
  score += Math.min(nudgeDismissCount * 2, 5)

  return Math.min(Math.round(score), 100)
}

function scoreToStatus(score: number, daysSinceLast: number | null, visitCount: number): EngagementStatus {
  if (visitCount < 3) return 'new'
  if (daysSinceLast !== null && daysSinceLast > 14) return 'lost'
  if (score >= 70) return 'active'
  if (score >= 40) {
    return daysSinceLast !== null && daysSinceLast > 3 ? 'returning' : 'active'
  }
  return 'at_risk'
}

// ── MAIN HOOK ─────────────────────────────────────────────────────────────────

export function useReengajamentoAgent(): { data: ReengajamentoStats | null; loading: boolean } {
  const [data, setData] = useState<ReengajamentoStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ── Read localStorage ─────────────────────────────────────────────────
    const visitCount = parseInt(localStorage.getItem('kalam-visit-count') || '0', 10)
    const lastVisitRaw = localStorage.getItem('kalam-last-visit')
    const nudgeCount = parseInt(localStorage.getItem('kalam-nudge-dismiss-count') || '0', 10)

    const daysSinceLast = lastVisitRaw ? daysSince(lastVisitRaw) : null

    // Journal entries count (cross-signal)
    const journalEntries = readJson<unknown[]>('kalam_journal_entries', [])
    const journalCount = Array.isArray(journalEntries) ? journalEntries.length : 0

    // Streak data
    const streakData = readJson<{ current?: number }>('kalam_streak_data', {})
    const habitStreak = readJson<{ current?: number }>('kalam-habits-streak', {})
    const streakCurrent = Math.max(streakData.current ?? 0, habitStreak.current ?? 0)

    // ── Compute engagement ────────────────────────────────────────────────
    const engagementScore = computeEngagementScore({
      visitCount,
      daysSinceLast,
      journalCount,
      streakCurrent,
      nudgeDismissCount: nudgeCount,
    })

    const status = scoreToStatus(engagementScore, daysSinceLast, visitCount)

    // ── Evaluate nudge (calls the full engine) ────────────────────────────
    let nudge: Nudge | null = null
    try {
      nudge = evaluateNudge()
    } catch {
      nudge = null
    }

    // ── Insight ───────────────────────────────────────────────────────────
    let insight = ''
    switch (status) {
      case 'new':
        insight = 'Começando a te conhecer — continue explorando'
        break
      case 'active':
        insight =
          engagementScore >= 80
            ? `Presença forte — ${visitCount} visitas, score ${engagementScore}`
            : `Engajamento sólido — score ${engagementScore}/100`
        break
      case 'returning':
        insight =
          daysSinceLast !== null
            ? `Voltou depois de ${daysSinceLast} dias — bem-vindo de volta`
            : 'Retornando ao caminho'
        break
      case 'at_risk':
        insight = nudgeCount > 0
          ? `${nudgeCount} vez${nudgeCount > 1 ? 'es' : ''} trouxe você de volta — sempre aqui`
          : 'Pronto pra chamar quando precisar'
        break
      case 'lost':
        insight =
          daysSinceLast !== null
            ? `${daysSinceLast} dias de ausência — mas nunca desistirei`
            : 'Sempre de plantão, esperando você'
        break
    }

    setData({
      visitCount,
      daysSinceLastVisit: daysSinceLast,
      nudge,
      engagementScore,
      status,
      nudgeCount,
      insight,
    })
    setLoading(false)
  }, [])

  return { data, loading }
}
