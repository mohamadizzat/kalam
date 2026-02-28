import { glossary, type GlossaryTerm } from '@/lib/data/glossary'

export type GlossaryMatch = {
  term: string
  index: number
  length: number
  glossaryEntry: GlossaryTerm
}

// Pre-build a regex from all glossary terms, sorted longest-first to avoid partial matches
const sortedTerms = [...glossary]
  .sort((a, b) => b.term.length - a.term.length)

// Escape regex special characters in terms
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Build a single regex that matches any glossary term as a whole word (case-insensitive)
const termPattern = sortedTerms
  .map(t => escapeRegex(t.term))
  .join('|')

const glossaryRegex = new RegExp(`\\b(${termPattern})\\b`, 'gi')

// Map for fast lookup (lowercase term -> GlossaryTerm)
const termLookup = new Map<string, GlossaryTerm>()
for (const entry of glossary) {
  termLookup.set(entry.term.toLowerCase(), entry)
}

/**
 * Find all glossary terms in a text string.
 * Returns matches sorted by their position in the text.
 * Only matches whole words, case-insensitive.
 */
export function findGlossaryTerms(text: string): GlossaryMatch[] {
  if (!text || text.length === 0) return []

  const matches: GlossaryMatch[] = []
  const seenTerms = new Set<string>()

  // Reset regex state
  glossaryRegex.lastIndex = 0

  let match: RegExpExecArray | null
  while ((match = glossaryRegex.exec(text)) !== null) {
    const matchedText = match[1]
    const termKey = matchedText.toLowerCase()

    // Only include first occurrence of each term
    if (seenTerms.has(termKey)) continue
    seenTerms.add(termKey)

    const entry = termLookup.get(termKey)
    if (entry) {
      matches.push({
        term: matchedText,
        index: match.index,
        length: matchedText.length,
        glossaryEntry: entry,
      })
    }
  }

  // Sort by position in text
  matches.sort((a, b) => a.index - b.index)

  return matches
}
