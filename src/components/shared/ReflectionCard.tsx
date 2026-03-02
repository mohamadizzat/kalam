'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { PenLine, SkipForward } from 'lucide-react'
import type { ReflectionContentType } from '@/lib/data/reflection-templates'
import {
  getReflections,
  dismissReflection,
  refreshReflections,
  type ReflectionContext,
  type ReflectionQuestion,
} from '@/lib/reflection-engine'

/* ─── Design Tokens ─── */
const COLORS = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

/* ─── Props ─── */
interface ReflectionCardProps {
  contentType: ReflectionContentType
  contentId: string
  metadata: Record<string, string>
  persona?: string | null
}

export function ReflectionCard({ contentType, contentId, metadata, persona }: ReflectionCardProps) {
  const [questions, setQuestions] = useState<ReflectionQuestion[]>([])
  const [dismissed, setDismissed] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const ctx: ReflectionContext = {
    contentType,
    contentId,
    metadata,
    persona: persona ?? null,
  }

  useEffect(() => {
    const result = getReflections(ctx)
    setQuestions(result.questions)
    setDismissed(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentType, contentId, refreshKey])

  const handleDismiss = useCallback(() => {
    // Mark current questions as shown
    questions.forEach(q => dismissReflection(q.id))
    // Get fresh questions
    const result = refreshReflections(ctx)
    if (result.questions.length > 0) {
      setRefreshKey(k => k + 1)
    } else {
      setDismissed(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, contentType, contentId])

  if (dismissed || questions.length === 0) return null

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={`reflection-${refreshKey}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        {/* Section label */}
        <p style={{
          fontSize: '11px',
          fontWeight: 600,
          color: COLORS.muted,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '20px',
        }}>
          Momento de Reflexao
        </p>

        {/* Question cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {questions.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4 + i * 0.15,
              }}
              style={{
                background: COLORS.surface,
                borderRadius: '12px',
                borderLeft: `3px solid ${COLORS.gold}`,
                padding: '20px 20px 16px 20px',
                border: `1px solid ${COLORS.border}`,
                borderLeftWidth: '3px',
                borderLeftColor: COLORS.gold,
              }}
            >
              {/* Question text */}
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '16px',
                lineHeight: 1.65,
                color: COLORS.text,
                margin: 0,
              }}>
                {q.text}
              </p>

              {/* Save to Journal link */}
              <div style={{ marginTop: '14px' }}>
                <Link
                  href={`/a-alma/journal?reflection=${encodeURIComponent(q.text)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: COLORS.gold,
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'opacity 0.2s ease',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${COLORS.gold}25`,
                    background: `${COLORS.gold}08`,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8' }}
                >
                  <PenLine size={13} />
                  Salvar no Journal
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dismiss / skip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleDismiss}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: COLORS.muted,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = COLORS.secondary }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = COLORS.muted }}
          >
            <SkipForward size={13} />
            Pular
          </button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}
