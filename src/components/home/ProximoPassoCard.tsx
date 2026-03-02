'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Compass, ChevronRight } from 'lucide-react'
import { useGuiaAgent } from '@/lib/agents/guia-agent'

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

export function ProximoPassoCard() {
  const { data, loading } = useGuiaAgent()

  // Don't render anything while loading or if no recommendations
  if (loading || data.length === 0) return null

  const top = data[0]
  const extras = data.slice(1, 3)

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
        Proximo Passo
      </p>

      {/* Main recommendation card */}
      <Link
        href={top.item.href}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: 16,
            borderRadius: 14,
            background: T.surface,
            borderLeft: `3px solid ${T.gold}`,
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(22,18,32,0.9)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = T.surface
          }}
        >
          {/* Compass icon */}
          <div style={{ flexShrink: 0 }}>
            <Compass size={18} style={{ color: T.gold }} />
          </div>

          {/* Text content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: 16,
                color: T.text,
                fontWeight: 500,
                lineHeight: 1.3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {top.item.title}
            </p>
            <p
              style={{
                fontSize: 13,
                color: T.secondary,
                marginTop: 3,
                lineHeight: 1.4,
              }}
            >
              {top.reason}
            </p>
          </div>

          {/* Chevron */}
          <div style={{ flexShrink: 0 }}>
            <ChevronRight size={16} style={{ color: T.muted }} />
          </div>
        </div>
      </Link>

      {/* Secondary recommendations as pills */}
      {extras.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 10,
            flexWrap: 'wrap',
          }}
        >
          {extras.map((rec) => (
            <Link
              key={rec.item.id}
              href={rec.item.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 14px',
                borderRadius: 999,
                background: 'rgba(22,18,32,0.6)',
                border: `1px solid ${T.border}`,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                maxWidth: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border
                e.currentTarget.style.background = 'rgba(22,18,32,0.6)'
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: T.secondary,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {rec.item.title}
              </p>
              <ChevronRight
                size={12}
                style={{ color: T.muted, flexShrink: 0 }}
              />
            </Link>
          ))}
        </div>
      )}
    </motion.section>
  )
}
