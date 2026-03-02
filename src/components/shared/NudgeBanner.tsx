'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Flame, Route, Heart, Trophy, Sparkles, X } from 'lucide-react'
import { useNudge } from '@/lib/hooks/useNudge'
import type { NudgeType } from '@/lib/reengagement-engine'

// ── DESIGN TOKENS ─────────────────────────────────────────────────────────────

const TOKENS = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── ICON MAP ──────────────────────────────────────────────────────────────────

const ICON_MAP: Record<NudgeType, typeof Flame> = {
  streak_at_risk: Flame,
  incomplete_content: Route,
  welcome_back: Heart,
  milestone_nearby: Trophy,
  daily_suggestion: Sparkles,
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export function NudgeBanner() {
  const { nudge, dismiss } = useNudge()

  if (!nudge) return null

  const Icon = ICON_MAP[nudge.type]

  return (
    <AnimatePresence>
      {nudge && (
        <motion.div
          data-nudge-banner=""
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 2, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 150,
            maxWidth: 400,
            width: 'auto',
          }}
        >
          {/* Mobile override via media query workaround using CSS custom props */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 18px',
              background: TOKENS.surface,
              border: `1px solid ${TOKENS.border}`,
              borderRadius: 16,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {/* Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: 10,
                background: `${TOKENS.gold}15`,
              }}
            >
              <Icon size={16} style={{ color: TOKENS.gold }} />
            </div>

            {/* Message */}
            <span
              style={{
                flex: 1,
                fontSize: 14,
                lineHeight: '20px',
                color: TOKENS.text,
                fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)',
              }}
            >
              {nudge.message}
            </span>

            {/* CTA Button */}
            <Link
              href={nudge.cta.href}
              onClick={dismiss}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 14px',
                background: TOKENS.gold,
                color: TOKENS.bg,
                fontSize: 13,
                fontWeight: 700,
                fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)',
                borderRadius: 10,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '0.85'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '1'
              }}
            >
              {nudge.cta.label}
            </Link>

            {/* Dismiss Button */}
            <button
              onClick={dismiss}
              aria-label="Fechar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${TOKENS.muted}20`,
                border: 'none',
                borderRadius: '50%',
                width: 24,
                height: 24,
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0,
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = `${TOKENS.muted}40`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = `${TOKENS.muted}20`
              }}
            >
              <X size={12} style={{ color: TOKENS.muted }} />
            </button>
          </div>

          {/* Mobile positioning override */}
          <style>{`
            @media (max-width: 640px) {
              [data-nudge-banner] {
                bottom: 80px !important;
                right: 16px !important;
                left: 16px !important;
                max-width: none !important;
                width: auto !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
