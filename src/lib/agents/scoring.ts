import type { ContentItem, ContentCategory, ContentDepth } from './types'
import type { PersonaId } from '@/lib/hooks/usePersona'

// Deterministic PRNG (Mulberry32)
export function seededRandom(seed: number): () => number {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Date string → numeric seed
export function dateSeed(dateStr: string): number {
  let hash = 0
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash + dateStr.charCodeAt(i)) | 0
  }
  return hash
}

// Score persona affinity (0-1)
export function personaScore(item: ContentItem, persona: PersonaId | null): number {
  if (!persona) return 0.5
  return item.personaAffinity[persona] ?? 0.5
}

// Category diversity bonus: higher if category not visited recently
export function diversityBonus(
  itemCategory: ContentCategory,
  recentCategories: ContentCategory[]
): number {
  const count = recentCategories.filter((c) => c === itemCategory).length
  if (count === 0) return 1.0
  if (count === 1) return 0.5
  return 0.1
}

// Depth score: boost items at the right depth for user level
export function depthScore(itemDepth: ContentDepth, completedCount: number): number {
  const idealDepth: ContentDepth =
    completedCount < 5
      ? 'intro'
      : completedCount < 15
        ? 'explore'
        : completedCount < 30
          ? 'practice'
          : 'deep'

  if (itemDepth === idealDepth) return 1.0
  const order: ContentDepth[] = ['intro', 'explore', 'practice', 'deep']
  const diff = Math.abs(order.indexOf(itemDepth) - order.indexOf(idealDepth))
  return Math.max(0, 1.0 - diff * 0.3)
}

// Fisher-Yates shuffle with seeded random
export function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Map a pathname to its ContentCategory
export function pathToCategory(path: string): ContentCategory | null {
  if (path.startsWith('/os-profetas')) return 'profetas'
  if (path.startsWith('/a-ponte') || path.startsWith('/comprovacoes')) return 'ponte'
  if (path.startsWith('/a-palavra')) return 'palavra'
  if (path.startsWith('/a-presenca') || path.startsWith('/aya-do-dia')) return 'presenca'
  if (path.startsWith('/a-alma') || path.startsWith('/contemplativo')) return 'alma'
  if (path.startsWith('/trilhas') || path.startsWith('/desafios')) return 'trilhas'
  if (path.startsWith('/descobrir')) return 'descobrir'
  if (path.startsWith('/a-biblia-do-kalam')) return 'biblia'
  if (path.startsWith('/kids')) return 'kids'
  if (path.startsWith('/lideranca-profetica')) return 'lideranca'
  if (path.startsWith('/o-sistema')) return 'sistema'
  if (path.startsWith('/ferramentas')) return 'ferramentas'
  return null
}
