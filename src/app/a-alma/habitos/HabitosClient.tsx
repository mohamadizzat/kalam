'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sun,
  BookOpen,
  Clock,
  Heart,
  Moon,
  HandHeart,
  PenLine,
  Flame,
  Trophy,
  Check,
  ChevronLeft,
} from 'lucide-react'
import {
  DEFAULT_HABITS,
  getCheckins,
  toggleHabit,
  getStreak,
  getWeeklyHeatmap,
  getWeeklySummary,
  type DayCheckins,
  type StreakData,
} from '@/lib/habit-engine'

// ═══════════════════════════════════════════════════════════════
// Design Tokens
// ═══════════════════════════════════════════════════════════════

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.3)',
  goldGlow: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

// ═══════════════════════════════════════════════════════════════
// Icon Map
// ═══════════════════════════════════════════════════════════════

const ICON_MAP: Record<string, typeof Sun> = {
  'fajr': Sun,
  'quran-reading': BookOpen,
  'dhikr': Clock,
  'dua-morning': Heart,
  'dua-night': Moon,
  'good-deed': HandHeart,
  'reflection': PenLine,
}

// ═══════════════════════════════════════════════════════════════
// Day labels for heatmap
// ═══════════════════════════════════════════════════════════════

const DAY_LABELS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

// ═══════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════

function getHeatmapColor(percentage: number): string {
  if (percentage <= 0) return T.border
  if (percentage <= 0.33) return 'rgba(201,168,76,0.2)'
  if (percentage <= 0.66) return 'rgba(201,168,76,0.4)'
  if (percentage < 1) return 'rgba(201,168,76,0.7)'
  return T.gold
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
}

function formatTodayLabel(): string {
  const d = new Date()
  return d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
}

// ═══════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════

export function HabitosClient() {
  const [checkins, setCheckins] = useState<DayCheckins>({})
  const [streak, setStreakData] = useState<StreakData>({ current: 0, longest: 0, lastDate: '' })
  const [heatmap, setHeatmap] = useState<{ date: string; percentage: number }[]>([])
  const [weeklySummary, setWeeklySummary] = useState<{ completed: number; total: number; percentage: number }>({ completed: 0, total: 0, percentage: 0 })
  const [toastVerse, setToastVerse] = useState<{ ref: string; text: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  // ── Load on mount ──────────────────────────────────────────
  useEffect(() => {
    setCheckins(getCheckins())
    setStreakData(getStreak())
    setHeatmap(getWeeklyHeatmap())
    setWeeklySummary(getWeeklySummary())
    setMounted(true)
  }, [])

  // ── Toggle handler ─────────────────────────────────────────
  const handleToggle = (habitId: string) => {
    const result = toggleHabit(habitId)
    setCheckins(result.checkins)
    setStreakData(getStreak())
    setHeatmap(getWeeklyHeatmap())
    setWeeklySummary(getWeeklySummary())
    if (result.verse) {
      setToastVerse(result.verse)
      setTimeout(() => setToastVerse(null), 4000)
    }
  }

  // ── Derived values ─────────────────────────────────────────
  const todayCompleted = Object.values(checkins).filter(Boolean).length
  const todayTotal = DEFAULT_HABITS.length
  const todayProgress = todayTotal > 0 ? (todayCompleted / todayTotal) * 100 : 0

  // ── SVG circle progress values ─────────────────────────────
  const circleRadius = 40
  const circleCircumference = 2 * Math.PI * circleRadius
  const circleOffset = circleCircumference - weeklySummary.percentage * circleCircumference

  if (!mounted) {
    return (
      <main style={{ background: T.bg, minHeight: '100vh' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 16 }} />
      </main>
    )
  }

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>
      <div style={{ maxWidth: 500, margin: '0 auto', padding: '48px 16px 100px' }}>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 1. Header                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: 32 }}
        >
          <Link
            href="/a-alma"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: T.muted,
              textDecoration: 'none',
              fontSize: 14,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              marginBottom: 24,
            }}
          >
            <ChevronLeft size={16} />
            A Alma
          </Link>

          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
              fontWeight: 600,
              fontSize: 22,
              color: T.text,
              marginBottom: 6,
              letterSpacing: '-0.02em',
            }}>
              Habitos Espirituais
            </h1>
            <p style={{
              fontFamily: "'Amiri', var(--font-arabic), serif",
              fontSize: 20,
              color: T.gold,
              textShadow: `0 0 20px ${T.goldGlow}`,
              margin: 0,
            }}>
              {'\u0639\u064E\u0627\u062F\u064E\u0627\u062A'}
            </p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 2. Streak Hero                                    */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          style={{
            textAlign: 'center',
            marginBottom: 32,
            padding: '32px 16px',
            borderRadius: 16,
            background: T.surface,
            border: `1px solid ${T.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
            <motion.div
              animate={streak.current > 0 ? { scale: [1, 1.2, 1], rotate: [0, -8, 8, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Flame size={28} style={{ color: T.gold, filter: streak.current > 0 ? `drop-shadow(0 0 8px ${T.goldDim})` : 'none' }} />
            </motion.div>
            <span style={{
              fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
              fontSize: 56,
              fontWeight: 700,
              color: T.gold,
              textShadow: `0 0 30px ${T.goldGlow}, 0 0 60px ${T.goldGlow}`,
              lineHeight: 1,
            }}>
              {streak.current}
            </span>
          </div>

          <p style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: 14,
            color: T.secondary,
            marginBottom: 12,
          }}>
            dias consecutivos
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            {streak.current > 0 && streak.current >= streak.longest && (
              <Trophy size={14} style={{ color: T.gold }} />
            )}
            <span style={{
              fontSize: 13,
              color: T.muted,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}>
              Melhor: {streak.longest} dias
            </span>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 3. Today's Progress Bar                           */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: 32 }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
            <span style={{
              fontSize: 13,
              color: T.muted,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}>
              Hoje: {todayCompleted} de {todayTotal}
            </span>
            <span style={{
              fontSize: 13,
              color: T.gold,
              fontWeight: 600,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}>
              {Math.round(todayProgress)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: 6,
            background: T.border,
            borderRadius: 3,
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${todayProgress}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: T.gold,
                borderRadius: 3,
              }}
            />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 4. Habit Checklist                                */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 16,
          }}>
            <h2 style={{
              fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
              fontSize: 16,
              fontWeight: 600,
              color: T.text,
              margin: 0,
            }}>
              Habitos de Hoje
            </h2>
            <span style={{
              fontSize: 12,
              color: T.muted,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              textTransform: 'capitalize',
            }}>
              {formatTodayLabel()}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DEFAULT_HABITS.map((habit, i) => {
              const isChecked = !!checkins[habit.id]
              const Icon = ICON_MAP[habit.id] || Check

              return (
                <motion.div
                  key={habit.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleToggle(habit.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '16px 14px',
                    borderRadius: 14,
                    background: T.surface,
                    border: isChecked
                      ? `1px solid ${T.goldDim}`
                      : `1px solid ${T.border}`,
                    boxShadow: isChecked ? `0 0 20px ${T.goldGlow}` : 'none',
                    cursor: 'pointer',
                    transition: 'border 0.3s, box-shadow 0.3s',
                    userSelect: 'none' as const,
                  }}
                >
                  {/* Icon circle */}
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: isChecked ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.3s',
                  }}>
                    <Icon
                      size={20}
                      style={{
                        color: isChecked ? T.gold : T.muted,
                        transition: 'color 0.3s',
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: isChecked ? T.secondary : T.text,
                      margin: 0,
                      transition: 'color 0.3s',
                    }}>
                      {habit.name}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 12,
                      color: T.muted,
                      margin: '2px 0 0',
                    }}>
                      {habit.description}
                    </p>
                  </div>

                  {/* Checkbox */}
                  <motion.div
                    animate={isChecked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: isChecked ? 'none' : `2px solid ${T.muted}`,
                      background: isChecked ? T.gold : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 0.3s, border 0.3s',
                    }}
                  >
                    {isChecked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Check size={16} style={{ color: T.bg }} />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 5. Toast Verse                                    */}
        {/* ═══════════════════════════════════════════════════ */}
        <AnimatePresence>
          {toastVerse && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                position: 'fixed',
                bottom: 32,
                left: 16,
                right: 16,
                maxWidth: 468,
                margin: '0 auto',
                padding: '16px 20px',
                borderRadius: 14,
                background: 'rgba(201,168,76,0.12)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${T.goldDim}`,
                zIndex: 100,
              }}
            >
              <p style={{
                fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
                fontSize: 14,
                color: T.text,
                lineHeight: 1.6,
                margin: 0,
                marginBottom: 4,
              }}>
                &ldquo;{toastVerse.text}&rdquo;
              </p>
              <p style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                color: T.gold,
                margin: 0,
              }}>
                Quran {toastVerse.ref}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 6. Heatmap (49 days = 7 weeks)                   */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: 32 }}
        >
          <h2 style={{
            fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
            fontSize: 16,
            fontWeight: 600,
            color: T.text,
            margin: '0 0 16px',
          }}>
            Ultimas 7 Semanas
          </h2>

          {/* Day labels */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 28px)',
            gap: 4,
            justifyContent: 'center',
            marginBottom: 6,
          }}>
            {DAY_LABELS.map((label, i) => (
              <div
                key={`label-${i}`}
                style={{
                  width: 28,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 500,
                  color: T.muted,
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 28px)',
            gap: 4,
            justifyContent: 'center',
          }}>
            {heatmap.map((day, i) => (
              <div
                key={`heatmap-${i}`}
                title={`${formatDate(day.date)} — ${Math.round(day.percentage * 100)}%`}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  background: getHeatmapColor(day.percentage),
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>

          {/* Legend */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 12,
          }}>
            <span style={{ fontSize: 10, color: T.muted, fontFamily: "var(--font-sans), system-ui, sans-serif" }}>Menos</span>
            {[T.border, 'rgba(201,168,76,0.2)', 'rgba(201,168,76,0.4)', 'rgba(201,168,76,0.7)', T.gold].map((color, i) => (
              <div
                key={`legend-${i}`}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: color,
                }}
              />
            ))}
            <span style={{ fontSize: 10, color: T.muted, fontFamily: "var(--font-sans), system-ui, sans-serif" }}>Mais</span>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 7. Weekly Summary Card                            */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: 24,
            borderRadius: 16,
            background: T.surface,
            border: `1px solid ${T.border}`,
            textAlign: 'center',
          }}
        >
          <h2 style={{
            fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
            fontSize: 16,
            fontWeight: 600,
            color: T.text,
            margin: '0 0 20px',
          }}>
            Resumo da Semana
          </h2>

          {/* Circular progress */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <div style={{ position: 'relative', width: 100, height: 100 }}>
              <svg
                width={100}
                height={100}
                viewBox="0 0 100 100"
                style={{ transform: 'rotate(-90deg)' }}
              >
                {/* Background circle */}
                <circle
                  cx={50}
                  cy={50}
                  r={circleRadius}
                  fill="none"
                  stroke={T.border}
                  strokeWidth={6}
                />
                {/* Progress circle */}
                <motion.circle
                  cx={50}
                  cy={50}
                  r={circleRadius}
                  fill="none"
                  stroke={T.gold}
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeDasharray={circleCircumference}
                  initial={{ strokeDashoffset: circleCircumference }}
                  animate={{ strokeDashoffset: circleOffset }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                />
              </svg>
              {/* Percentage text in center */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: T.gold,
                }}>
                  {Math.round(weeklySummary.percentage * 100)}%
                </span>
              </div>
            </div>
          </div>

          <p style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: 14,
            color: T.secondary,
            margin: 0,
          }}>
            {weeklySummary.completed} de {weeklySummary.total} praticas completadas
          </p>
        </motion.div>

      </div>
    </main>
  )
}
