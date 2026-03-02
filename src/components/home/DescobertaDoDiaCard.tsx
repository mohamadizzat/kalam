'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useCuradorPick } from '@/lib/agents/curador-agent'

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

// ── Component ────────────────────────────────────────────────────────────────

export function DescobertaDoDiaCard() {
  const { pick, loading } = useCuradorPick()

  if (loading || !pick) return null

  const { item, tagline } = pick

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{ padding: '0 24px' }}
    >
      {/* Section label */}
      <p
        style={{
          fontSize: 11,
          letterSpacing: '0.1em',
          color: T.muted,
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        Descoberta do Dia
      </p>

      {/* Card */}
      <Link href={item.href} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{
            position: 'relative',
            background: T.surface,
            borderRadius: 16,
            padding: 16,
            overflow: 'hidden',
          }}
        >
          {/* Gold gradient top border */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent 0%, ${T.gold} 30%, ${T.gold} 70%, transparent 100%)`,
              opacity: 0.6,
            }}
          />

          {/* Tagline row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 10,
            }}
          >
            <Sparkles size={18} style={{ color: T.gold, flexShrink: 0 }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.08em',
                color: T.gold,
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {tagline}
            </span>
          </div>

          {/* Title */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 16,
              color: T.text,
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: item.preview ? 6 : 0,
            }}
          >
            {item.title}
          </p>

          {/* Preview text (if available) */}
          {item.preview && (
            <p
              style={{
                fontSize: 13,
                color: T.secondary,
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 0,
              }}
            >
              {item.preview}
            </p>
          )}

          {/* Arrow indicator */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 12,
            }}
          >
            <ArrowRight size={16} style={{ color: T.gold, opacity: 0.7 }} />
          </div>
        </div>
      </Link>
    </motion.section>
  )
}
