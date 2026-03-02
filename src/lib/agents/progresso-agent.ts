'use client'

import { useState, useEffect, useMemo } from 'react'
import { useUserContext } from './user-context'
import { CONTENT_ITEMS, getKidsContent, getNonKidsContent, CONTENT_BY_CATEGORY } from './content-registry'
import type { ContentCategory, ContentItem, ProgressoData, AgentResult } from './types'

// ────────────────────────────────────────────
// Category display names
// ────────────────────────────────────────────

const CATEGORY_LABELS: Partial<Record<ContentCategory, string>> = {
  profetas: 'Os Profetas',
  ponte: 'A Ponte',
  palavra: 'A Palavra',
  presenca: 'A Presenca',
  alma: 'A Alma',
  trilhas: 'Trilhas',
  biblia: 'A Biblia do Kalam',
  kids: 'Kids',
  lideranca: 'Lideranca Profetica',
  sistema: 'O Sistema',
  descobrir: 'Descobrir',
  ferramentas: 'Ferramentas',
}

export function getCategoryLabel(cat: ContentCategory): string {
  return CATEGORY_LABELS[cat] ?? cat
}

// ────────────────────────────────────────────
// Milestone thresholds
// ────────────────────────────────────────────

const PERCENTAGE_THRESHOLDS = [25, 50, 75, 100]
const STREAK_MILESTONES = [3, 7, 14, 21, 30, 60, 90]
const CONTENT_MILESTONES = [5, 10, 25, 50, 100, 200, 500]

// ────────────────────────────────────────────
// Days active from localStorage visit log
// ────────────────────────────────────────────

function readDaysActive(fallbackEstimate: number): number {
  try {
    const raw = localStorage.getItem('kalam-visit-log')
    if (!raw) return Math.max(fallbackEstimate, 1)
    const dates: string[] = JSON.parse(raw)
    if (!Array.isArray(dates) || dates.length === 0) return Math.max(fallbackEstimate, 1)
    // Deduplicate date strings and count unique days
    const unique = new Set(dates)
    return unique.size
  } catch {
    return Math.max(fallbackEstimate, 1)
  }
}

// ────────────────────────────────────────────
// Group pool items by category
// ────────────────────────────────────────────

function groupByCategory(pool: ContentItem[]): Map<ContentCategory, ContentItem[]> {
  const map = new Map<ContentCategory, ContentItem[]>()
  for (const item of pool) {
    const list = map.get(item.category) || []
    list.push(item)
    map.set(item.category, list)
  }
  return map
}

// ────────────────────────────────────────────
// Find next milestone
// ────────────────────────────────────────────

function findNextMilestone(
  byCategory: ProgressoData['byCategory'],
  completedCount: number,
  currentStreak: number
): ProgressoData['nextMilestone'] {
  type Candidate = { description: string; progress: number; target: number; distance: number }
  const candidates: Candidate[] = []

  // Category percentage milestones
  for (const [cat, stats] of Object.entries(byCategory)) {
    if (!stats || stats.total === 0) continue
    const pct = stats.percentage
    for (const threshold of PERCENTAGE_THRESHOLDS) {
      if (pct < threshold) {
        const targetCount = Math.ceil((threshold / 100) * stats.total)
        candidates.push({
          description: `Complete ${threshold}% de ${getCategoryLabel(cat as ContentCategory)}`,
          progress: stats.completed,
          target: targetCount,
          distance: (targetCount - stats.completed) / stats.total,
        })
        break // only the nearest threshold per category
      }
    }
  }

  // Streak milestones
  for (const target of STREAK_MILESTONES) {
    if (currentStreak < target) {
      candidates.push({
        description: `Streak de ${target} dias`,
        progress: currentStreak,
        target,
        distance: (target - currentStreak) / target,
      })
      break
    }
  }

  // Total content milestones
  for (const target of CONTENT_MILESTONES) {
    if (completedCount < target) {
      candidates.push({
        description: `${target} conteudos explorados`,
        progress: completedCount,
        target,
        distance: (target - completedCount) / target,
      })
      break
    }
  }

  if (candidates.length === 0) return null

  // Pick the closest milestone (smallest distance = most achievable)
  candidates.sort((a, b) => a.distance - b.distance)
  const best = candidates[0]

  return {
    description: best.description,
    progress: best.progress,
    target: best.target,
  }
}

// ────────────────────────────────────────────
// Main hook
// ────────────────────────────────────────────

export function useProgressoAgent(): AgentResult<ProgressoData> {
  const ctx = useUserContext()
  const [lastUpdated, setLastUpdated] = useState(0)

  const data = useMemo<ProgressoData>(() => {
    if (ctx.loading) {
      return {
        overall: { completed: 0, total: 0, percentage: 0 },
        byCategory: {},
        streak: { current: 0, longest: 0, daysActive: 0 },
        nextMilestone: null,
      }
    }

    const {
      isKids,
      completedContentIds,
      completedCount,
      currentStreak,
      longestStreak,
      daysSinceFirstVisit,
    } = ctx

    // 1. Content pool (kids vs non-kids)
    const pool = isKids ? getKidsContent() : getNonKidsContent()
    const totalInPool = pool.length

    // 2. Overall progress
    const overallCompleted = completedCount
    const overallPercentage = totalInPool > 0
      ? Math.round((overallCompleted / totalInPool) * 100)
      : 0

    // 3. Per-category progress
    const grouped = groupByCategory(pool)
    const byCategory: ProgressoData['byCategory'] = {}

    for (const [cat, items] of grouped) {
      const total = items.length
      let completed = 0
      for (const item of items) {
        if (completedContentIds.has(item.id)) completed++
      }
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
      byCategory[cat] = { completed, total, percentage }
    }

    // 4. Streak data
    const daysActive = readDaysActive(daysSinceFirstVisit)

    // 5. Next milestone
    const nextMilestone = findNextMilestone(byCategory, completedCount, currentStreak)

    return {
      overall: {
        completed: overallCompleted,
        total: totalInPool,
        percentage: overallPercentage,
      },
      byCategory,
      streak: {
        current: currentStreak,
        longest: longestStreak,
        daysActive,
      },
      nextMilestone,
    }
  }, [ctx])

  // Track computation timestamp
  useEffect(() => {
    if (data.overall.total > 0) {
      setLastUpdated(Date.now())
    }
  }, [data])

  return {
    data,
    loading: ctx.loading,
    lastUpdated,
  }
}
