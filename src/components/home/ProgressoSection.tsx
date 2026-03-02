'use client'

import { motion } from 'framer-motion'
import { useProgressoAgent, getCategoryLabel } from '@/lib/agents/progresso-agent'
import type { ContentCategory } from '@/lib/agents/types'

// ── Design Tokens ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── SVG Progress Circle ──────────────────────────────────────────────────────

function ProgressCircle({ percentage }: { percentage: number }) {
  const size = 56
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={T.border}
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={T.gold}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      {/* Center percentage */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 600,
          color: T.text,
          letterSpacing: '-0.02em',
        }}
      >
        {percentage}%
      </span>
    </div>
  )
}

// ── Flame Icon (inline SVG) ──────────────────────────────────────────────────

function FlameIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.gold}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

// ── Category Progress Bar ────────────────────────────────────────────────────

function CategoryBar({
  category,
  completed,
  total,
  percentage,
}: {
  category: ContentCategory
  completed: number
  total: number
  percentage: number
}) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <span style={{ fontSize: 13, color: T.text, fontWeight: 400 }}>
          {getCategoryLabel(category)}
        </span>
        <span style={{ fontSize: 11, color: T.muted }}>
          {completed}/{total}
        </span>
      </div>
      <div
        style={{
          height: 4,
          borderRadius: 2,
          background: T.border,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            borderRadius: 2,
            background: T.gold,
            transition: 'width 0.8s ease',
          }}
        />
      </div>
    </div>
  )
}

// ── Mini Progress Bar (for milestone) ────────────────────────────────────────

function MiniProgressBar({ progress, target }: { progress: number; target: number }) {
  const pct = target > 0 ? Math.min(Math.round((progress / target) * 100), 100) : 0
  return (
    <div
      style={{
        height: 3,
        borderRadius: 2,
        background: T.border,
        overflow: 'hidden',
        marginTop: 8,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 2,
          background: T.gold,
          transition: 'width 0.8s ease',
        }}
      />
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export function ProgressoSection() {
  const { data, loading } = useProgressoAgent()

  // Don't show if loading or user has no progress yet
  if (loading || data.overall.completed === 0) return null

  // Categories with > 0 completed, sorted by percentage descending, max 4
  const activeCategories = Object.entries(data.byCategory)
    .filter(([, stats]) => stats && stats.completed > 0)
    .sort(([, a], [, b]) => (b?.percentage ?? 0) - (a?.percentage ?? 0))
    .slice(0, 4) as [ContentCategory, { completed: number; total: number; percentage: number }][]

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      style={{ padding: '0 24px' }}
    >
      {/* Section label */}
      <p
        style={{
          fontSize: 11,
          letterSpacing: '0.1em',
          color: T.muted,
          textTransform: 'uppercase',
          marginBottom: 14,
        }}
      >
        Sua Jornada
      </p>

      {/* ── Top row: 3 stat cards ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 10,
          marginBottom: 20,
        }}
      >
        {/* 1. Overall progress circle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 8px',
            borderRadius: 14,
            background: T.surface,
          }}
        >
          <ProgressCircle percentage={data.overall.percentage} />
          <span
            style={{
              fontSize: 11,
              color: T.muted,
              marginTop: 8,
              textAlign: 'center',
            }}
          >
            Progresso
          </span>
        </div>

        {/* 2. Streak display */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 8px',
            borderRadius: 14,
            background: T.surface,
          }}
        >
          <FlameIcon />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: T.text,
              marginTop: 4,
              lineHeight: 1,
            }}
          >
            {data.streak.current}
          </span>
          <span
            style={{
              fontSize: 11,
              color: T.muted,
              marginTop: 4,
              textAlign: 'center',
            }}
          >
            dias
          </span>
        </div>

        {/* 3. Content count */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 8px',
            borderRadius: 14,
            background: T.surface,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: T.text,
              lineHeight: 1,
            }}
          >
            {data.overall.completed}
          </span>
          <span
            style={{
              fontSize: 11,
              color: T.muted,
              marginTop: 6,
              textAlign: 'center',
            }}
          >
            de {data.overall.total}
          </span>
          {/* Subtle bar */}
          <div
            style={{
              width: '80%',
              height: 3,
              borderRadius: 2,
              background: T.border,
              overflow: 'hidden',
              marginTop: 8,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${data.overall.percentage}%`,
                borderRadius: 2,
                background: T.gold,
                transition: 'width 0.8s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Category progress bars ── */}
      {activeCategories.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {activeCategories.map(([cat, stats]) => (
            <CategoryBar
              key={cat}
              category={cat}
              completed={stats.completed}
              total={stats.total}
              percentage={stats.percentage}
            />
          ))}
        </div>
      )}

      {/* ── Next milestone indicator ── */}
      {data.nextMilestone && (
        <div
          style={{
            padding: '12px 14px',
            borderRadius: 10,
            background: 'rgba(22,18,32,0.6)',
            border: `1px solid ${T.border}`,
          }}
        >
          <p
            style={{
              fontSize: 11,
              color: T.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 6,
            }}
          >
            Proximo marco
          </p>
          <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.4 }}>
            {data.nextMilestone.description}
          </p>
          <MiniProgressBar
            progress={data.nextMilestone.progress}
            target={data.nextMilestone.target}
          />
          <p
            style={{
              fontSize: 11,
              color: T.muted,
              marginTop: 5,
              textAlign: 'right',
            }}
          >
            {data.nextMilestone.progress}/{data.nextMilestone.target}
          </p>
        </div>
      )}
    </motion.section>
  )
}
