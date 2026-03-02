'use client'

import { useState, useEffect } from 'react'
import type { ContentItem, CuradorPick, ContentCategory } from './types'
import type { PersonaId } from '@/lib/hooks/usePersona'
import { personaScore, seededRandom, dateSeed } from './scoring'
import { getKidsContent, getNonKidsContent } from './content-registry'
import { useUserContext } from './user-context'

// ── Constants ────────────────────────────────────────────────────────────────

const CACHE_KEY = 'kalam-curador-pick'

/** Day-of-week theme mapping (0=Sunday) */
const DAY_THEMES: Record<number, ContentCategory> = {
  0: 'alma',       // Sunday
  1: 'palavra',    // Monday
  2: 'profetas',   // Tuesday
  3: 'presenca',   // Wednesday
  4: 'trilhas',    // Thursday
  5: 'ponte',      // Friday
  6: 'descobrir',  // Saturday
}

// ── Scoring helpers ──────────────────────────────────────────────────────────

function dayThemeBonus(item: ContentItem, dayOfWeek: number): number {
  const theme = DAY_THEMES[dayOfWeek]
  return item.category === theme ? 30 : 0
}

function streakDepthBonus(item: ContentItem, streak: number): number {
  if (streak >= 7 && item.depth === 'deep') return 10
  if (streak >= 3 && (item.depth === 'practice' || item.depth === 'deep')) return 5
  return 0
}

function pickTagline(item: ContentItem, dayOfWeek: number, streak: number): string {
  const theme = DAY_THEMES[dayOfWeek]
  if (item.category === theme) return 'Tema do dia'
  if (item.depth === 'deep' && streak >= 7) return 'Pra quem ja esta no ritmo'
  if (item.depth === 'intro') return 'Algo diferente pra hoje'
  return 'Descoberta do dia'
}

// ── Cache helpers ────────────────────────────────────────────────────────────

function readCache(): CuradorPick | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || !parsed.dateKey || !parsed.item) return null
    return parsed as CuradorPick
  } catch {
    return null
  }
}

function writeCache(pick: CuradorPick): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(pick))
  } catch {
    // localStorage full or unavailable — ignore
  }
}

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0]
}

// ── Core pick algorithm ──────────────────────────────────────────────────────

function computePick(
  persona: PersonaId | null,
  isKids: boolean,
  completedContentIds: Set<string>,
  currentStreak: number
): CuradorPick | null {
  const today = getTodayKey()
  const dayOfWeek = new Date().getDay()

  // Build candidate pool
  const allItems = isKids ? getKidsContent() : getNonKidsContent()
  if (allItems.length === 0) return null

  // Prefer unseen items, fallback to all if everything is seen
  let candidates = allItems.filter((item) => !completedContentIds.has(item.id))
  if (candidates.length === 0) candidates = allItems

  // Deterministic seed per user+day
  const seedStr = today + (persona || 'anon')
  const rng = seededRandom(dateSeed(seedStr))

  // Score each candidate
  const scored = candidates.map((item) => {
    const pScore = personaScore(item, persona) * 50
    const themeBonus = dayThemeBonus(item, dayOfWeek)
    const depthBonus = streakDepthBonus(item, currentStreak)
    const randomness = rng() * 20
    const total = pScore + themeBonus + depthBonus + randomness
    return { item, score: total }
  })

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score)

  const winner = scored[0].item
  const tagline = pickTagline(winner, dayOfWeek, currentStreak)

  return {
    item: winner,
    tagline,
    dateKey: today,
  }
}

// ── React Hook ───────────────────────────────────────────────────────────────

export function useCuradorPick(): { pick: CuradorPick | null; loading: boolean } {
  const { persona, isKids, completedContentIds, currentStreak, loading: ctxLoading } = useUserContext()
  const [pick, setPick] = useState<CuradorPick | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (ctxLoading) return

    const today = getTodayKey()

    // 1. Check cache
    const cached = readCache()
    if (cached && cached.dateKey === today) {
      setPick(cached)
      setLoading(false)
      return
    }

    // 2. Compute fresh pick
    const freshPick = computePick(persona, isKids, completedContentIds, currentStreak)
    if (freshPick) {
      writeCache(freshPick)
      setPick(freshPick)
    }

    setLoading(false)
  }, [ctxLoading, persona, isKids, completedContentIds, currentStreak])

  return { pick, loading }
}
