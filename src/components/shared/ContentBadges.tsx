'use client'

import { Clock } from 'lucide-react'

/* ── Difficulty levels ── */
export type DifficultyLevel = 'iniciante' | 'intermediario' | 'avancado'

const DIFFICULTY_CONFIG: Record<DifficultyLevel, { label: string; color: string; bg: string }> = {
  iniciante: {
    label: 'INICIANTE',
    color: '#4CAF50',
    bg: 'rgba(76,175,80,0.10)',
  },
  intermediario: {
    label: 'INTERMEDIÁRIO',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.10)',
  },
  avancado: {
    label: 'AVANÇADO',
    color: '#9C7CFF',
    bg: 'rgba(156,124,255,0.10)',
  },
}

const badgeBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 8px',
  borderRadius: '100px',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  lineHeight: '18px',
  whiteSpace: 'nowrap' as const,
}

/* ── Reading Time Badge ── */
export function ReadingTimeBadge({ minutes }: { minutes: number }) {
  const label = minutes < 1 ? '< 1 min' : `${minutes} min`

  return (
    <span style={{
      ...badgeBase,
      color: '#7A7870',
      background: 'rgba(122,120,112,0.10)',
    }}>
      <Clock size={10} style={{ flexShrink: 0 }} />
      {label}
    </span>
  )
}

/* ── Difficulty Badge ── */
export function DifficultyBadge({ level }: { level: DifficultyLevel }) {
  const config = DIFFICULTY_CONFIG[level]

  return (
    <span style={{
      ...badgeBase,
      color: config.color,
      background: config.bg,
    }}>
      {config.label}
    </span>
  )
}

/* ── Content Meta (combines both) ── */
export function ContentMeta({
  minutes,
  level,
}: {
  minutes?: number
  level?: DifficultyLevel
}) {
  if (!minutes && !level) return null

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
      {level && <DifficultyBadge level={level} />}
      {minutes !== undefined && <ReadingTimeBadge minutes={minutes} />}
    </div>
  )
}
