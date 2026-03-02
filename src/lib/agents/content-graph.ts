import type { ContentItem, ContentEdge, EdgeType, ContentDepth } from './types'
import { CONTENT_ITEMS, CONTENT_BY_ID } from './content-registry'

// ---------------------------------------------------------------------------
// Prophet tag set — used to detect prophet-related content
// ---------------------------------------------------------------------------
const PROPHET_TAGS = new Set([
  'ibrahim', 'yusuf', 'musa', 'issa', 'muhammad', 'nuh', 'dawud', 'sulayman',
  'adam', 'ismail', 'ishaq', 'yaqub', 'ayyub', 'yunus', 'harun', 'idris',
  'lut', 'hud', 'salih', 'shuayb', 'dhulkifl', 'ilyas', 'alyasa',
  'zakariyya', 'yahya',
])

// Categories that produce knowledge vs practice content
const PRACTICE_CATEGORIES = new Set(['presenca', 'alma'])
const KNOWLEDGE_CATEGORIES = new Set(['profetas', 'ponte', 'palavra', 'biblia', 'lideranca'])

// Depth ordering for deeper-dive edges
const DEPTH_ORDER: Record<ContentDepth, number> = {
  intro: 0,
  explore: 1,
  practice: 2,
  deep: 3,
}

// ---------------------------------------------------------------------------
// Module-level cache — built lazily on first access
// ---------------------------------------------------------------------------
let _adjacency: Map<string, ContentEdge[]> | null = null

function getAdjacency(): Map<string, ContentEdge[]> {
  if (!_adjacency) {
    _adjacency = buildGraph()
  }
  return _adjacency
}

// ---------------------------------------------------------------------------
// Edge helpers
// ---------------------------------------------------------------------------
function addEdge(
  adj: Map<string, ContentEdge[]>,
  from: string,
  to: string,
  type: EdgeType,
  weight: number,
  bidirectional: boolean,
) {
  if (weight < 0.3) return // skip weak connections
  if (from === to) return

  const forward: ContentEdge = { from, to, type, weight }
  const existing = adj.get(from)
  if (existing) {
    existing.push(forward)
  } else {
    adj.set(from, [forward])
  }

  if (bidirectional) {
    const backward: ContentEdge = { from: to, to: from, type, weight }
    const rev = adj.get(to)
    if (rev) {
      rev.push(backward)
    } else {
      adj.set(to, [backward])
    }
  }
}

// ---------------------------------------------------------------------------
// Graph construction strategies
// ---------------------------------------------------------------------------

/**
 * 1. Tag-Based Edges (same-theme)
 * Group items by tag first, then only compare items within same tag groups.
 * Two items sharing 2+ tags get a same-theme edge.
 */
function buildTagEdges(adj: Map<string, ContentEdge[]>) {
  // Inverted index: tag → item ids
  const tagIndex = new Map<string, string[]>()
  for (const item of CONTENT_ITEMS) {
    for (const tag of item.tags) {
      // Skip prophet tags here — handled by buildProphetEdges
      if (PROPHET_TAGS.has(tag)) continue
      const bucket = tagIndex.get(tag)
      if (bucket) {
        bucket.push(item.id)
      } else {
        tagIndex.set(tag, [item.id])
      }
    }
  }

  // Track pairs already connected to avoid duplicate edges
  const seen = new Set<string>()

  for (const ids of tagIndex.values()) {
    if (ids.length < 2) continue
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const pairKey = ids[i] < ids[j] ? `${ids[i]}|${ids[j]}` : `${ids[j]}|${ids[i]}`
        if (seen.has(pairKey)) continue

        const a = CONTENT_BY_ID.get(ids[i])
        const b = CONTENT_BY_ID.get(ids[j])
        if (!a || !b) continue

        // Count non-prophet tag overlap
        const aTags = new Set(a.tags.filter((t) => !PROPHET_TAGS.has(t)))
        const bTags = b.tags.filter((t) => !PROPHET_TAGS.has(t))
        const overlap = bTags.filter((t) => aTags.has(t)).length

        if (overlap >= 2) {
          seen.add(pairKey)
          const maxLen = Math.max(aTags.size, bTags.length)
          const weight = maxLen > 0 ? overlap / maxLen : 0
          addEdge(adj, a.id, b.id, 'same-theme', weight, true)
        }
      }
    }
  }
}

/**
 * 2. Prophet Edges (same-prophet)
 * Connect items sharing the same prophet tag.
 */
function buildProphetEdges(adj: Map<string, ContentEdge[]>) {
  const prophetIndex = new Map<string, string[]>()
  for (const item of CONTENT_ITEMS) {
    for (const tag of item.tags) {
      if (!PROPHET_TAGS.has(tag)) continue
      const bucket = prophetIndex.get(tag)
      if (bucket) {
        bucket.push(item.id)
      } else {
        prophetIndex.set(tag, [item.id])
      }
    }
  }

  for (const ids of prophetIndex.values()) {
    if (ids.length < 2) continue
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        addEdge(adj, ids[i], ids[j], 'same-prophet', 0.9, true)
      }
    }
  }
}

/**
 * 3. Bridge Edges (bridge)
 * Connect items tagged 'bridge' across categories.
 * Also connect biblia chapters → bridge-themes → scripture-proofs.
 */
function buildBridgeEdges(adj: Map<string, ContentEdge[]>) {
  const bridgeItems = CONTENT_ITEMS.filter((item) => item.tags.includes('bridge'))
  const bibliaItems = CONTENT_ITEMS.filter((item) => item.category === 'biblia')
  const ponteItems = CONTENT_ITEMS.filter((item) => item.category === 'ponte')

  // Connect bridge-tagged items across different categories
  for (let i = 0; i < bridgeItems.length; i++) {
    for (let j = i + 1; j < bridgeItems.length; j++) {
      if (bridgeItems[i].category !== bridgeItems[j].category) {
        addEdge(adj, bridgeItems[i].id, bridgeItems[j].id, 'bridge', 0.8, true)
      }
    }
  }

  // Connect biblia → ponte (scripture proofs / bridge themes)
  for (const bItem of bibliaItems) {
    for (const pItem of ponteItems) {
      // Only connect if they share at least one tag
      const shared = bItem.tags.some((t) => pItem.tags.includes(t))
      if (shared) {
        addEdge(adj, bItem.id, pItem.id, 'bridge', 0.8, true)
      }
    }
  }
}

/**
 * 4. Depth Edges (deeper-dive)
 * Within same category, connect intro → explore → practice → deep.
 * Unidirectional: shallow → deep.
 */
function buildDepthEdges(adj: Map<string, ContentEdge[]>) {
  // Group by category
  const byCategory = new Map<string, ContentItem[]>()
  for (const item of CONTENT_ITEMS) {
    const bucket = byCategory.get(item.category)
    if (bucket) {
      bucket.push(item)
    } else {
      byCategory.set(item.category, [item])
    }
  }

  for (const items of byCategory.values()) {
    if (items.length < 2) continue

    // Sort by depth
    const sorted = [...items].sort(
      (a, b) => DEPTH_ORDER[a.depth] - DEPTH_ORDER[b.depth],
    )

    // Connect adjacent depth levels that share at least one tag
    for (let i = 0; i < sorted.length; i++) {
      for (let j = i + 1; j < sorted.length; j++) {
        const depthA = DEPTH_ORDER[sorted[i].depth]
        const depthB = DEPTH_ORDER[sorted[j].depth]

        // Only connect if depth difference is exactly 1 level
        if (depthB - depthA !== 1) continue

        const shared = sorted[i].tags.some((t) => sorted[j].tags.includes(t))
        if (shared) {
          addEdge(adj, sorted[i].id, sorted[j].id, 'deeper-dive', 0.7, false)
        }
      }
    }
  }
}

/**
 * 5. Practice Edges (practice-after)
 * Connect knowledge content → practice content.
 * Unidirectional: knowledge → practice.
 */
function buildPracticeEdges(adj: Map<string, ContentEdge[]>) {
  const knowledgeItems = CONTENT_ITEMS.filter((item) =>
    KNOWLEDGE_CATEGORIES.has(item.category),
  )
  const practiceItems = CONTENT_ITEMS.filter((item) =>
    PRACTICE_CATEGORIES.has(item.category),
  )

  for (const kItem of knowledgeItems) {
    for (const pItem of practiceItems) {
      const shared = kItem.tags.some((t) => pItem.tags.includes(t))
      if (shared) {
        addEdge(adj, kItem.id, pItem.id, 'practice-after', 0.6, false)
      }
    }
  }
}

/**
 * 6. Complementary Edges (complementary)
 * Connect items from different categories covering similar themes.
 * Only connect if they share 1+ tags and are NOT already connected by other edge types.
 */
function buildComplementaryEdges(adj: Map<string, ContentEdge[]>) {
  // Build set of existing connections to avoid duplicates
  const connected = new Set<string>()
  for (const edges of adj.values()) {
    for (const edge of edges) {
      const key = edge.from < edge.to
        ? `${edge.from}|${edge.to}`
        : `${edge.to}|${edge.from}`
      connected.add(key)
    }
  }

  // Group by tag for efficient lookup (skip prophet tags — already handled)
  const tagIndex = new Map<string, string[]>()
  for (const item of CONTENT_ITEMS) {
    for (const tag of item.tags) {
      if (PROPHET_TAGS.has(tag)) continue
      const bucket = tagIndex.get(tag)
      if (bucket) {
        bucket.push(item.id)
      } else {
        tagIndex.set(tag, [item.id])
      }
    }
  }

  for (const ids of tagIndex.values()) {
    if (ids.length < 2) continue
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const a = CONTENT_BY_ID.get(ids[i])
        const b = CONTENT_BY_ID.get(ids[j])
        if (!a || !b) continue
        if (a.category === b.category) continue // must be different categories

        const key = a.id < b.id ? `${a.id}|${b.id}` : `${b.id}|${a.id}`
        if (connected.has(key)) continue

        connected.add(key)
        addEdge(adj, a.id, b.id, 'complementary', 0.5, true)
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main builder
// ---------------------------------------------------------------------------
function buildGraph(): Map<string, ContentEdge[]> {
  const adj = new Map<string, ContentEdge[]>()

  // Order matters: later strategies skip already-connected pairs
  buildProphetEdges(adj)
  buildTagEdges(adj)
  buildBridgeEdges(adj)
  buildDepthEdges(adj)
  buildPracticeEdges(adj)
  buildComplementaryEdges(adj) // last — skips existing connections

  return adj
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Get all edges for a content item */
export function getRelatedContent(itemId: string): ContentEdge[] {
  return getAdjacency().get(itemId) ?? []
}

/** Get edges of a specific type for a content item */
export function getRelatedByType(itemId: string, type: EdgeType): ContentEdge[] {
  return getRelatedContent(itemId).filter((e) => e.type === type)
}

/**
 * BFS to find all neighbors within maxDepth hops.
 * Returns set of item IDs (excludes the starting item).
 */
export function getNeighbors(itemId: string, maxDepth: number = 2): Set<string> {
  const adj = getAdjacency()
  const visited = new Set<string>()
  const queue: Array<{ id: string; depth: number }> = [{ id: itemId, depth: 0 }]
  visited.add(itemId)

  while (queue.length > 0) {
    const current = queue.shift()!
    if (current.depth >= maxDepth) continue

    const edges = adj.get(current.id) ?? []
    for (const edge of edges) {
      if (!visited.has(edge.to)) {
        visited.add(edge.to)
        queue.push({ id: edge.to, depth: current.depth + 1 })
      }
    }
  }

  // Remove the starting item from results
  visited.delete(itemId)
  return visited
}
