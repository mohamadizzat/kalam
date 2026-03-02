'use client'

import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
// KALAM — Nav Indicators Hook
// Returns visual indicator states for sidebar items
// ═══════════════════════════════════════════════════════════════

interface NavIndicators {
  /** Items that should show a "NOVO" badge */
  novoBadges: Set<string>
  /** Items that should show a progress dot (gold/green) */
  progressDots: Map<string, 'gold' | 'green'>
  /** Items that should show a streak flame */
  streakFlames: Set<string>
}

const NOVO_ITEMS = new Set([
  '/descobrir/seu-nome-em-arabe',
  '/descobrir/qual-profeta-voce-e',
  '/lideranca-profetica',
])

export function useNavIndicators(): NavIndicators {
  const [indicators, setIndicators] = useState<NavIndicators>({
    novoBadges: NOVO_ITEMS,
    progressDots: new Map(),
    streakFlames: new Set(),
  })

  useEffect(() => {
    const progressDots = new Map<string, 'gold' | 'green'>()
    const streakFlames = new Set<string>()

    // Check Quran progress
    try {
      const surahs = localStorage.getItem('kalam-surahs-read')
      if (surahs) {
        const parsed = JSON.parse(surahs)
        const count = Array.isArray(parsed) ? parsed.length : 0
        if (count >= 114) progressDots.set('/a-palavra', 'green')
        else if (count > 0) progressDots.set('/a-palavra', 'gold')
      }
    } catch {}

    // Check trail progress
    try {
      const trails = localStorage.getItem('kalam_trail_progress')
      if (trails) {
        const parsed = JSON.parse(trails)
        const completedCount = Object.values(parsed).filter((v: unknown) => v === 'completed').length
        if (completedCount >= 12) progressDots.set('/trilhas', 'green')
        else if (completedCount > 0) progressDots.set('/trilhas', 'gold')
      }
    } catch {}

    // Check journal streak
    try {
      const streakData = localStorage.getItem('kalam_streak_data')
      if (streakData) {
        const parsed = JSON.parse(streakData)
        if (parsed.currentStreak > 0) {
          streakFlames.add('/a-alma/journal')
        }
      }
    } catch {}

    // Check habits streak
    try {
      const habits = localStorage.getItem('kalam-habits')
      if (habits) {
        const parsed = JSON.parse(habits)
        const hasActiveStreak = Array.isArray(parsed) && parsed.some(
          (h: { streak?: number }) => (h.streak ?? 0) > 0
        )
        if (hasActiveStreak) streakFlames.add('/a-alma/habitos')
      }
    } catch {}

    // Check dismissed NOVO badges
    try {
      const dismissed = localStorage.getItem('kalam-dismissed-novo')
      const dismissedSet = dismissed ? new Set(JSON.parse(dismissed)) : new Set()
      const activeBadges = new Set<string>()
      for (const item of NOVO_ITEMS) {
        if (!dismissedSet.has(item)) activeBadges.add(item)
      }
      setIndicators({ novoBadges: activeBadges, progressDots, streakFlames })
    } catch {
      setIndicators({ novoBadges: NOVO_ITEMS, progressDots, streakFlames })
    }
  }, [])

  return indicators
}
