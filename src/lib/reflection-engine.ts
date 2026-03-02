// ═══════════════════════════════════════════════════════════════
// KALAM — Reflection Engine
// Pure function that generates contextual reflection questions
// Pattern: habit-engine.ts (localStorage-based, no hooks)
// ═══════════════════════════════════════════════════════════════

import {
  REFLECTION_TEMPLATES,
  type ReflectionCategory,
  type ReflectionContentType,
  type ReflectionTemplate,
} from '@/lib/data/reflection-templates'

const STORAGE_KEY = 'kalam-reflections-shown'
const MAX_SHOWN_HISTORY = 50

export interface ReflectionContext {
  contentType: ReflectionContentType
  contentId: string
  metadata: Record<string, string>
  persona?: string | null
}

export interface ReflectionQuestion {
  id: string
  text: string
  category: ReflectionCategory
}

export interface ReflectionResult {
  questions: ReflectionQuestion[]
}

// ─── Shown History (localStorage) ──────────────────────────────

function getShownIds(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveShownIds(ids: string[]): void {
  if (typeof window === 'undefined') return
  try {
    // Keep only the last N to prevent unbounded growth
    const trimmed = ids.slice(-MAX_SHOWN_HISTORY)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
  } catch {
    // localStorage full or unavailable — silent fail
  }
}

// ─── Slot Filling ──────────────────────────────────────────────

function fillSlots(template: string, metadata: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, slot) => {
    return metadata[slot] || match
  })
}

function hasAllSlots(template: ReflectionTemplate, metadata: Record<string, string>): boolean {
  return template.slots.every(slot => slot in metadata && metadata[slot].length > 0)
}

// ─── Shuffle (Fisher-Yates) ───────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// ─── Category Diversity ───────────────────────────────────────

function pickDiverse(templates: ReflectionTemplate[], count: number): ReflectionTemplate[] {
  if (templates.length <= count) return templates

  const result: ReflectionTemplate[] = []
  const usedCategories = new Set<ReflectionCategory>()

  // First pass: pick one from each unique category
  for (const t of templates) {
    if (result.length >= count) break
    if (!usedCategories.has(t.category)) {
      usedCategories.add(t.category)
      result.push(t)
    }
  }

  // Second pass: fill remaining slots
  for (const t of templates) {
    if (result.length >= count) break
    if (!result.includes(t)) {
      result.push(t)
    }
  }

  return result
}

// ─── Main Engine ──────────────────────────────────────────────

export function getReflections(ctx: ReflectionContext): ReflectionResult {
  const { contentType, metadata, persona } = ctx

  // 1. Filter templates by content type (+ always include generic)
  const matchingTemplates = REFLECTION_TEMPLATES.filter(
    t => t.contentType === contentType || t.contentType === 'generic'
  )

  // 2. Filter out templates that need slots we don't have
  const fillable = matchingTemplates.filter(t => hasAllSlots(t, metadata))

  // 3. Filter out recently shown (avoid repetition)
  const shownIds = getShownIds()
  const fresh = fillable.filter(t => !shownIds.includes(t.id))

  // 4. If all have been shown, reset and use full pool
  const pool = fresh.length >= 2 ? fresh : fillable

  // 5. Shuffle for randomness
  const shuffled = shuffle(pool)

  // 6. Pick top 2 with category diversity
  const picked = pickDiverse(shuffled, 2)

  // 7. Fill slots and build result
  const isKids = persona === 'kids'
  const questions: ReflectionQuestion[] = picked.map(t => {
    const rawText = (isKids && t.kidsVersion) ? t.kidsVersion : t.template
    const filledText = fillSlots(rawText, metadata)

    return {
      id: t.id,
      text: filledText,
      category: t.category,
    }
  })

  // 8. Track shown IDs
  const newShownIds = [...shownIds, ...questions.map(q => q.id)]
  saveShownIds(newShownIds)

  return { questions }
}

// ─── Dismiss & Refresh ────────────────────────────────────────

export function dismissReflection(templateId: string): void {
  const shownIds = getShownIds()
  if (!shownIds.includes(templateId)) {
    saveShownIds([...shownIds, templateId])
  }
}

export function refreshReflections(ctx: ReflectionContext): ReflectionResult {
  // Called when user hits "Pular" — already saved via dismissReflection,
  // so calling getReflections again will pick fresh ones
  return getReflections(ctx)
}

// ─── Reset (for testing/debug) ────────────────────────────────

export function resetReflectionHistory(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // silent
  }
}
