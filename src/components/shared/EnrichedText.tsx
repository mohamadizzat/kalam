'use client'

import { useMemo, type CSSProperties } from 'react'
import { findGlossaryTerms } from '@/lib/utils/glossary-matcher'
import { GlossaryTooltip } from '@/components/shared/GlossaryTooltip'

type EnrichedTextProps = {
  text: string
  style?: CSSProperties
  className?: string
}

/**
 * Renders text with known Islamic/Arabic glossary terms automatically
 * highlighted with interactive tooltips.
 */
export function EnrichedText({ text, style, className }: EnrichedTextProps) {
  const segments = useMemo(() => {
    if (!text) return [{ type: 'text' as const, value: text }]

    const matches = findGlossaryTerms(text)
    if (matches.length === 0) return [{ type: 'text' as const, value: text }]

    const parts: { type: 'text' | 'term'; value: string; entry?: (typeof matches)[0]['glossaryEntry'] }[] = []
    let lastIndex = 0

    for (const match of matches) {
      // Add plain text before this match
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
      }

      // Add the glossary term
      parts.push({
        type: 'term',
        value: text.slice(match.index, match.index + match.length),
        entry: match.glossaryEntry,
      })

      lastIndex = match.index + match.length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: 'text', value: text.slice(lastIndex) })
    }

    return parts
  }, [text])

  return (
    <span style={style} className={className}>
      {segments.map((segment, i) => {
        if (segment.type === 'term' && segment.entry) {
          return (
            <GlossaryTooltip key={`${segment.value}-${i}`} entry={segment.entry}>
              {segment.value}
            </GlossaryTooltip>
          )
        }
        return <span key={i}>{segment.value}</span>
      })}
    </span>
  )
}
