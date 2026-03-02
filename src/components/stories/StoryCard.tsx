'use client'

import { forwardRef } from 'react'
import type { StoryItem } from '@/lib/data/story-content'

// ── Design tokens ────────────────────────────────────────────────────────────

const tokens = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
} as const

// ── Template styles per story type ───────────────────────────────────────────

type TemplateStyle = {
  bg: string
  accent: string
  accentText: string
}

const TEMPLATES: Record<string, TemplateStyle> = {
  verse: {
    bg: 'linear-gradient(160deg, #0D0B12 0%, #1a1530 50%, #0D0B12 100%)',
    accent: tokens.gold,
    accentText: tokens.goldLight,
  },
  fact: {
    bg: 'linear-gradient(160deg, #121025 0%, #1e1640 50%, #0D0B12 100%)',
    accent: '#8B7BE8',
    accentText: '#A99BF0',
  },
  hadith: {
    bg: 'linear-gradient(160deg, #14100D 0%, #1e1610 50%, #0D0B12 100%)',
    accent: '#D4A574',
    accentText: '#E0BB90',
  },
  question: {
    bg: 'linear-gradient(160deg, #0D0B12 0%, #1a0f1f 50%, #0D0B12 100%)',
    accent: '#E06080',
    accentText: '#F08090',
  },
  prophet: {
    bg: 'linear-gradient(160deg, #0B0D14 0%, #101830 50%, #0D0B12 100%)',
    accent: '#5A9BD5',
    accentText: '#7BB5E8',
  },
  ramadan: {
    bg: 'linear-gradient(160deg, #0D0B12 0%, #182010 50%, #0D0B12 100%)',
    accent: '#7BC88C',
    accentText: '#90D8A0',
  },
}

// ── Type labels ──────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  verse: 'VERSO',
  fact: 'FATO',
  hadith: 'HADITH',
  question: 'PERGUNTA',
  prophet: 'PROFETA',
  ramadan: 'RAMADAN',
}

// ── Component ────────────────────────────────────────────────────────────────

interface StoryCardProps {
  story: StoryItem
  size: 'thumbnail' | 'full'
}

export const StoryCard = forwardRef<HTMLDivElement, StoryCardProps>(
  function StoryCard({ story, size }, ref) {
    const template = TEMPLATES[story.type] || TEMPLATES.verse
    const isThumbnail = size === 'thumbnail'

    const width = isThumbnail ? 180 : 540
    const height = isThumbnail ? 320 : 960
    const pad = isThumbnail ? 16 : 40

    return (
      <div
        ref={ref}
        style={{
          width,
          height,
          background: template.bg,
          borderRadius: isThumbnail ? 12 : 16,
          padding: pad,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Top: type badge */}
        <div>
          <span
            style={{
              fontSize: isThumbnail ? 8 : 11,
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: template.accent,
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {TYPE_LABELS[story.type] || 'KALAM'}
          </span>
        </div>

        {/* Center: content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: isThumbnail ? 8 : 20 }}>
          {/* Emoji */}
          {story.emoji && (
            <span style={{ fontSize: isThumbnail ? 20 : 40 }}>
              {story.emoji}
            </span>
          )}

          {/* Arabic (small) */}
          {story.arabic && (
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                direction: 'rtl',
                fontSize: isThumbnail ? 10 : 16,
                lineHeight: 1.8,
                color: `${template.accentText}80`,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: isThumbnail ? 2 : 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {story.arabic}
            </p>
          )}

          {/* Title */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isThumbnail ? 13 : 26,
              fontWeight: 600,
              lineHeight: 1.3,
              color: tokens.text,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: isThumbnail ? 3 : 4,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {story.title}
          </p>

          {/* Content preview */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isThumbnail ? 9 : 15,
              lineHeight: 1.6,
              color: tokens.secondary,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: isThumbnail ? 3 : 6,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {story.content}
          </p>
        </div>

        {/* Bottom: source + branding */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          {story.source && (
            <span
              style={{
                fontSize: isThumbnail ? 7 : 11,
                color: tokens.muted,
                fontFamily: "'Inter', sans-serif",
                maxWidth: '70%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {story.source}
            </span>
          )}
          <span
            style={{
              fontSize: isThumbnail ? 8 : 12,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: `${tokens.gold}66`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            KALAM
          </span>
        </div>
      </div>
    )
  }
)
