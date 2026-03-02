'use client'

import { useState, useEffect, useMemo } from 'react'
import { useUserContext } from './user-context'
import { CONTENT_ITEMS, getKidsContent, getNonKidsContent } from './content-registry'
import { personaScore, diversityBonus, depthScore, pathToCategory } from './scoring'
import type { ContentItem, ContentCategory, GuiaRecommendation, AgentResult } from './types'

// ────────────────────────────────────────────
// Scoring weights
// ────────────────────────────────────────────

const W = {
  PERSONA_MATCH: 40,
  UNSEEN_BONUS: 20,
  SEEN_PENALTY: -30,
  CATEGORY_DIVERSITY: 15,
  DEPTH_PROGRESSION: 15,
  RECENCY_PENALTY: -10,
} as const

const MAX_RECOMMENDATIONS = 5

// ────────────────────────────────────────────
// Reason generator
// ────────────────────────────────────────────

function generateReason(
  item: ContentItem,
  daysSinceFirstVisit: number,
  completedContentIds: Set<string>,
  completedCount: number,
  recentCategories: ContentCategory[]
): string {
  // Brand new user
  if (daysSinceFirstVisit < 3) {
    return 'Ponto de partida ideal'
  }

  // Unseen content
  if (!completedContentIds.has(item.id)) {
    return 'Novo pra voce'
  }

  // Deep content for advanced users
  if (item.depth === 'deep' && completedCount > 30) {
    return 'Pra quem ja se aprofundou'
  }

  // Category diversity — different from recent visits
  if (recentCategories.length > 0 && !recentCategories.includes(item.category)) {
    return 'Algo diferente'
  }

  // Default
  return 'Baseado no seu perfil'
}

// ────────────────────────────────────────────
// Main hook
// ────────────────────────────────────────────

export function useGuiaAgent(): AgentResult<GuiaRecommendation[]> {
  const userCtx = useUserContext()
  const [lastUpdated, setLastUpdated] = useState(0)

  const data = useMemo<GuiaRecommendation[]>(() => {
    if (userCtx.loading) return []

    const {
      persona,
      isKids,
      completedContentIds,
      lastVisitedPaths,
      completedCount,
      daysSinceFirstVisit,
    } = userCtx

    // Pick the right content pool
    const pool: ContentItem[] = isKids ? getKidsContent() : getNonKidsContent()

    // Derive recent categories from visited paths
    const recentCategories: ContentCategory[] = lastVisitedPaths
      .slice(0, 5)
      .map(pathToCategory)
      .filter((c): c is ContentCategory => c !== null)

    const mostRecentCategory = recentCategories[0] ?? null

    // Score each item
    const scored: GuiaRecommendation[] = pool.map((item) => {
      let score = 0

      // 1. Persona match (0-40)
      score += W.PERSONA_MATCH * personaScore(item, persona)

      // 2. Unseen bonus / seen penalty
      if (!completedContentIds.has(item.id)) {
        score += W.UNSEEN_BONUS
      } else {
        score += W.SEEN_PENALTY
      }

      // 3. Category diversity (0-15)
      score += W.CATEGORY_DIVERSITY * diversityBonus(item.category, recentCategories)

      // 4. Depth progression (0-15)
      score += W.DEPTH_PROGRESSION * depthScore(item.depth, completedCount)

      // 5. Recency penalty — same category as most recent visit
      if (mostRecentCategory && item.category === mostRecentCategory) {
        score += W.RECENCY_PENALTY
      }

      const reason = generateReason(
        item,
        daysSinceFirstVisit,
        completedContentIds,
        completedCount,
        recentCategories
      )

      return { item, reason, score }
    })

    // Sort descending by score, take top N
    scored.sort((a, b) => b.score - a.score)

    return scored.slice(0, MAX_RECOMMENDATIONS)
  }, [userCtx])

  // Track when data was last computed
  useEffect(() => {
    if (data.length > 0) {
      setLastUpdated(Date.now())
    }
  }, [data])

  return {
    data,
    loading: userCtx.loading,
    lastUpdated,
  }
}
