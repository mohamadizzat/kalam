'use client'

import { useState, useEffect, useMemo } from 'react'
import { useUserContext } from './user-context'
import { CONTENT_BY_HREF, CONTENT_BY_ID, CONTENT_ITEMS } from './content-registry'
import { getRelatedContent } from './content-graph'
import { personaScore } from './scoring'
import type {
  ContentItem,
  EdgeType,
  ConectorSuggestion,
  ConectorCallout,
  AgentResult,
} from './types'

// ────────────────────────────────────────────
// Constants
// ────────────────────────────────────────────

const MAX_SUGGESTIONS = 3
const MAX_CALLOUTS = 2

// Scoring weights
const W_EDGE = 0.5
const W_PERSONA = 0.3
const W_UNSEEN = 0.2

// ────────────────────────────────────────────
// Reason generator based on edge type
// ────────────────────────────────────────────

function reasonForEdge(edgeType: EdgeType, targetTitle: string): string {
  switch (edgeType) {
    case 'same-prophet':
      return `Mais sobre ${targetTitle}`
    case 'bridge':
      return 'Conexao entre escrituras'
    case 'deeper-dive':
      return 'Aprofunde nesse tema'
    case 'practice-after':
      return 'Coloque em pratica'
    case 'complementary':
      return 'Outra perspectiva'
    case 'same-theme':
      return 'Tema relacionado'
    case 'prerequisite':
      return 'Fundamento importante'
  }
}

// ────────────────────────────────────────────
// Path lookup — exact match, then prefix match
// ────────────────────────────────────────────

function lookupByPath(path: string): ContentItem | undefined {
  // 1. Exact match
  const exact = CONTENT_BY_HREF.get(path)
  if (exact) return exact

  // 2. Prefix match for dynamic routes (e.g. /os-profetas/musa)
  //    Walk from longest prefix to shortest
  const segments = path.split('/').filter(Boolean)
  for (let len = segments.length - 1; len >= 1; len--) {
    const prefix = '/' + segments.slice(0, len).join('/')
    const match = CONTENT_BY_HREF.get(prefix)
    if (match) return match
  }

  // 3. Scan all hrefs for startsWith (covers hash-based hrefs)
  for (const [href, item] of CONTENT_BY_HREF) {
    if (path.startsWith(href) || href.startsWith(path)) {
      return item
    }
  }

  return undefined
}

// ────────────────────────────────────────────
// Callout builder — "Sabia que..." facts
// ────────────────────────────────────────────

function buildCallouts(currentItem: ContentItem): ConectorCallout[] {
  const currentTags = new Set(currentItem.tags)
  const callouts: ConectorCallout[] = []

  // Find surprise-fact items that share tags with the current item
  const factItems = CONTENT_ITEMS.filter(
    (item) =>
      item.type === 'surprise-fact' &&
      item.id !== currentItem.id &&
      item.tags.some((t) => currentTags.has(t))
  )

  for (const fact of factItems) {
    if (callouts.length >= MAX_CALLOUTS) break

    callouts.push({
      text: fact.preview || fact.title,
      href: fact.href,
      type: 'fact',
    })
  }

  // If we didn't find enough facts, look for bridge items with shared tags
  if (callouts.length < MAX_CALLOUTS) {
    const bridgeItems = CONTENT_ITEMS.filter(
      (item) =>
        item.tags.includes('bridge') &&
        item.id !== currentItem.id &&
        item.tags.some((t) => currentTags.has(t) && t !== 'bridge')
    )

    for (const bridge of bridgeItems) {
      if (callouts.length >= MAX_CALLOUTS) break

      // Avoid duplicates
      if (callouts.some((c) => c.href === bridge.href)) continue

      callouts.push({
        text: bridge.preview || bridge.title,
        href: bridge.href,
        type: 'bridge',
      })
    }
  }

  // If still not enough, look for prophet items with shared tags
  if (callouts.length < MAX_CALLOUTS) {
    const prophetItems = CONTENT_ITEMS.filter(
      (item) =>
        (item.type === 'prophet-story' || item.type === 'bridge-prophet') &&
        item.id !== currentItem.id &&
        item.tags.some((t) => currentTags.has(t))
    )

    for (const prophet of prophetItems) {
      if (callouts.length >= MAX_CALLOUTS) break
      if (callouts.some((c) => c.href === prophet.href)) continue

      callouts.push({
        text: prophet.preview || prophet.title,
        href: prophet.href,
        type: 'prophet',
      })
    }
  }

  return callouts
}

// ────────────────────────────────────────────
// Main hook
// ────────────────────────────────────────────

export function useConectorAgent(
  currentPath: string
): AgentResult<{ suggestions: ConectorSuggestion[]; callouts: ConectorCallout[] }> {
  const userCtx = useUserContext()
  const [lastUpdated, setLastUpdated] = useState(0)

  const data = useMemo(() => {
    if (userCtx.loading || !currentPath) {
      return { suggestions: [], callouts: [] }
    }

    const { persona, isKids, completedContentIds } = userCtx

    // 1. Look up the current page in the registry
    const currentItem = lookupByPath(currentPath)
    if (!currentItem) {
      return { suggestions: [], callouts: [] }
    }

    // 2. Get edges from the content graph
    const edges = getRelatedContent(currentItem.id)

    // 3. Build scored suggestions from edges
    const scored: ConectorSuggestion[] = []

    for (const edge of edges) {
      const targetItem = CONTENT_BY_ID.get(edge.to)
      if (!targetItem) continue

      // 4. Filter: skip kids content if !isKids, skip non-kids if isKids
      if (isKids && targetItem.category !== 'kids') continue
      if (!isKids && targetItem.category === 'kids') continue

      // Skip self-references
      if (targetItem.id === currentItem.id) continue

      // 5. Score: edgeWeight * 0.5 + personaScore * 0.3 + unseenBonus(0.2)
      const pScore = personaScore(targetItem, persona)
      const unseenBonus = completedContentIds.has(targetItem.id) ? 0 : W_UNSEEN
      const score = edge.weight * W_EDGE + pScore * W_PERSONA + unseenBonus

      // 6. Generate reason based on edge type
      const reason = reasonForEdge(edge.type, targetItem.title)

      scored.push({
        item: targetItem,
        edgeType: edge.type,
        reason,
        score,
      })
    }

    // Deduplicate by item id — keep highest scored occurrence
    const seen = new Map<string, ConectorSuggestion>()
    for (const s of scored) {
      const existing = seen.get(s.item.id)
      if (!existing || s.score > existing.score) {
        seen.set(s.item.id, s)
      }
    }

    // 7. Sort by score descending, take top 3
    const suggestions = Array.from(seen.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_SUGGESTIONS)

    // 8. Build callouts
    const callouts = buildCallouts(currentItem)

    return { suggestions, callouts }
  }, [currentPath, userCtx])

  // Track when data was last computed
  useEffect(() => {
    if (data.suggestions.length > 0 || data.callouts.length > 0) {
      setLastUpdated(Date.now())
    }
  }, [data])

  return {
    data,
    loading: userCtx.loading,
    lastUpdated,
  }
}
