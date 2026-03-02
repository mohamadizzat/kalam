'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Check } from 'lucide-react'
import type { RamadanDay } from '@/lib/data/ramadan'
import { getPhaseColor, getPhaseRgb } from '@/lib/ramadan-helpers'
import { LailatAlQadrBanner } from './LailatAlQadrBanner'

// ── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  gold: '#C9A84C',
} as const

interface RamadanDailyCardProps {
  ramadanDay: RamadanDay
}

export function RamadanDailyCard({ ramadanDay }: RamadanDailyCardProps) {
  const [isDone, setIsDone] = useState(false)
  const phaseColor = getPhaseColor(ramadanDay.phase)
  const phaseRgb = getPhaseRgb(ramadanDay.phase)

  // Load completion state
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-ramadan-progress')
      if (saved) {
        const data = JSON.parse(saved)
        if (data.year === new Date().getFullYear() && Array.isArray(data.completedDays)) {
          setIsDone(data.completedDays.includes(ramadanDay.day))
        }
      }
    } catch {}
  }, [ramadanDay.day])

  const toggleDone = useCallback(() => {
    try {
      const year = new Date().getFullYear()
      const saved = localStorage.getItem('kalam-ramadan-progress')
      const data = saved ? JSON.parse(saved) : { completedDays: [], year }

      if (data.year !== year) {
        data.completedDays = []
        data.year = year
      }

      const days: number[] = data.completedDays
      const idx = days.indexOf(ramadanDay.day)

      if (idx >= 0) {
        days.splice(idx, 1)
        setIsDone(false)
      } else {
        days.push(ramadanDay.day)
        setIsDone(true)
      }

      localStorage.setItem('kalam-ramadan-progress', JSON.stringify(data))
    } catch {}
  }, [ramadanDay.day])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ padding: '0 24px 32px' }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          background: T.surface,
          border: ramadanDay.isLailatAlQadr
            ? `1px solid ${T.gold}60`
            : `1px solid ${T.border}`,
          borderRadius: 20,
          padding: '28px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Lailat al-Qadr animated border glow */}
        {ramadanDay.isLailatAlQadr && (
          <motion.div
            animate={{
              boxShadow: [
                `0 0 20px rgba(201,168,76,0.1), inset 0 0 20px rgba(201,168,76,0.03)`,
                `0 0 40px rgba(201,168,76,0.2), inset 0 0 30px rgba(201,168,76,0.05)`,
                `0 0 20px rgba(201,168,76,0.1), inset 0 0 20px rgba(201,168,76,0.03)`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 20,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Lailat al-Qadr banner inside card */}
        {ramadanDay.isLailatAlQadr && (
          <LailatAlQadrBanner style={{ marginBottom: 20 }} />
        )}

        {/* Phase + Day header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: phaseColor,
              boxShadow: `0 0 6px ${phaseColor}60`,
            }}
          />
          <p style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            color: phaseColor,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Ramadan — Dia {ramadanDay.day}
          </p>
        </div>

        {/* Theme */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 3vw, 26px)',
            color: T.text,
            fontWeight: 600,
            marginBottom: 20,
            lineHeight: 1.3,
          }}
        >
          {ramadanDay.theme}
        </p>

        {/* Dua */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: 'clamp(18px, 3vw, 22px)',
            lineHeight: 1.9,
            color: T.text,
            textAlign: 'center',
            marginBottom: 8,
          }}>
            {ramadanDay.dua.arabic}
          </p>
          <p style={{
            fontSize: 13,
            color: T.secondary,
            lineHeight: 1.7,
            textAlign: 'center',
            fontStyle: 'italic',
          }}>
            {ramadanDay.dua.translation}
          </p>
        </div>

        {/* Deed — with phase-color left border */}
        <div
          style={{
            borderLeft: `3px solid ${phaseColor}`,
            paddingLeft: 16,
            marginBottom: 18,
          }}
        >
          <p style={{ fontSize: 11, color: phaseColor, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
            Acao do dia
          </p>
          <p style={{ fontSize: 14, color: T.text, lineHeight: 1.7 }}>
            {ramadanDay.deed}
          </p>
        </div>

        {/* Quran reading — pill link */}
        <Link
          href="/a-palavra"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            borderRadius: 999,
            background: `rgba(${phaseRgb},0.08)`,
            border: `1px solid rgba(${phaseRgb},0.2)`,
            textDecoration: 'none',
            marginBottom: 18,
          }}
        >
          <BookOpen size={13} style={{ color: phaseColor }} />
          <span style={{ fontSize: 12, color: phaseColor, fontWeight: 500 }}>
            {ramadanDay.quranReading}
          </span>
        </Link>

        {/* Reflection */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontSize: 14,
            color: T.secondary,
            lineHeight: 1.8,
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)',
          }}>
            {ramadanDay.reflection}
          </p>
        </div>

        {/* Actions row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          {/* Mark as done */}
          <button
            onClick={toggleDone}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              border: isDone ? `1px solid ${phaseColor}50` : `1px solid ${T.border}`,
              background: isDone ? `rgba(${phaseRgb},0.1)` : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: isDone ? phaseColor : T.muted,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <Check size={14} />
            {isDone ? 'Concluido' : 'Marcar como feito'}
          </button>

          {/* Full journey link */}
          <Link
            href="/a-jornada/ramadan"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              color: T.muted,
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Ver jornada completa
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
