'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SURAH_NAMES, TOTAL_AYAHS, getAyahCount } from '@/lib/quran-audio'
import Link from 'next/link'
import {
  ChevronLeft,
  BookOpen,
  Calendar,
  TrendingUp,
  Target,
  Play,
} from 'lucide-react'

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
// Constants
// ═══════════════════════════════════════════════════════════════

const TOTAL_SURAHS = 114
const TOTAL_PAGES = 604
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

// ═══════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════

export function QuranProgressClient() {
  const [surahsRead, setSurahsRead] = useState<Set<number>>(new Set())
  const [ayahsReadCount, setAyahsReadCount] = useState(0)
  const [readingDays, setReadingDays] = useState<string[]>([])
  const [pagesPerDay, setPagesPerDay] = useState(4)
  const [mounted, setMounted] = useState(false)

  // Santuario last position
  const [santuarioLast, setSantuarioLast] = useState<{
    surah: number
    ayah: number
  } | null>(null)

  useEffect(() => {
    setMounted(true)

    // Load surahs read
    try {
      const raw = localStorage.getItem('kalam-surahs-read')
      if (raw) {
        const arr: number[] = JSON.parse(raw)
        setSurahsRead(new Set(arr))
      }
    } catch {}

    // Load ayahs read count
    try {
      const raw = localStorage.getItem('kalam-ayahs-read-count')
      if (raw) setAyahsReadCount(parseInt(raw, 10) || 0)
    } catch {}

    // Load reading days
    try {
      const raw = localStorage.getItem('kalam-reading-days')
      if (raw) setReadingDays(JSON.parse(raw))
    } catch {}

    // Load santuario last
    try {
      const raw = localStorage.getItem('kalam-santuario-last')
      if (raw) setSantuarioLast(JSON.parse(raw))
    } catch {}
  }, [])

  // ── Derived data ──

  const surahPercentage = useMemo(() => {
    if (surahsRead.size === 0) return 0
    return Math.round((surahsRead.size / TOTAL_SURAHS) * 100)
  }, [surahsRead])

  const averagePerDay = useMemo(() => {
    if (readingDays.length === 0) return 0
    return Math.round(ayahsReadCount / readingDays.length)
  }, [ayahsReadCount, readingDays])

  const daysToComplete = useMemo(() => {
    if (pagesPerDay <= 0) return Infinity
    return Math.ceil(TOTAL_PAGES / pagesPerDay)
  }, [pagesPerDay])

  const santuarioSurahName = useMemo(() => {
    if (!santuarioLast) return ''
    const found = SURAH_NAMES.find((s) => s.number === santuarioLast.surah)
    return found ? found.portuguese : `Surah ${santuarioLast.surah}`
  }, [santuarioLast])

  // ── Reading days set for heatmap ──
  const readingDaysSet = useMemo(() => new Set(readingDays), [readingDays])

  // ── Heatmap: build 365 day grid ──
  const heatmapData = useMemo(() => {
    const today = new Date()
    const days: { date: string; read: boolean }[] = []
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().slice(0, 10)
      days.push({ date: dateStr, read: readingDaysSet.has(dateStr) })
    }
    return days
  }, [readingDaysSet])

  // Group heatmap into weeks (columns of 7)
  const heatmapWeeks = useMemo(() => {
    const weeks: { date: string; read: boolean }[][] = []
    // Pad start to align with day of week
    const firstDate = new Date(heatmapData[0].date + 'T12:00:00')
    const startDayOfWeek = firstDate.getDay() // 0=Sun
    const padded = [
      ...Array.from({ length: startDayOfWeek }, () => ({
        date: '',
        read: false,
      })),
      ...heatmapData,
    ]

    for (let i = 0; i < padded.length; i += 7) {
      weeks.push(padded.slice(i, i + 7))
    }
    return weeks
  }, [heatmapData])

  // Month labels for heatmap
  const monthLabels = useMemo(() => {
    const labels: { month: string; col: number }[] = []
    let lastMonth = -1
    heatmapWeeks.forEach((week, colIdx) => {
      for (const day of week) {
        if (!day.date) continue
        const m = new Date(day.date + 'T12:00:00').getMonth()
        if (m !== lastMonth) {
          lastMonth = m
          labels.push({ month: MONTHS[m], col: colIdx })
          break
        }
      }
    })
    return labels
  }, [heatmapWeeks])

  // ── SVG progress ring ──
  const ringSize = 160
  const ringStroke = 10
  const ringRadius = (ringSize - ringStroke) / 2
  const ringCircumference = 2 * Math.PI * ringRadius
  const ringOffset = ringCircumference - (surahPercentage / 100) * ringCircumference

  // ── Loading ──
  if (!mounted) {
    return (
      <div
        style={{
          minHeight: '100dvh',
          background: T.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            border: `2px solid ${T.border}`,
            borderTopColor: T.gold,
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: T.bg,
        color: T.text,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          padding: '0 20px 100px',
        }}
      >
        {/* ══════════════════════════════════════════════════════════ */}
        {/* 1. Header                                                */}
        {/* ══════════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: 20, paddingBottom: 8 }}>
          <Link
            href="/a-palavra"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: T.secondary,
              textDecoration: 'none',
              fontSize: 14,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.gold)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.secondary)}
          >
            <ChevronLeft size={18} />
            A Palavra
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{ textAlign: 'center', marginTop: 20, marginBottom: 32 }}
        >
          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "'Playfair Display', Georgia, serif",
              margin: 0,
              color: T.text,
            }}
          >
            Seu Progresso no Quran
          </h1>
          <p
            style={{
              margin: '6px 0 0',
              fontSize: 22,
              fontFamily: "'Amiri', 'Noto Naskh Arabic', serif",
              color: T.gold,
            }}
          >
            تَقَدُّم
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 2. Overall Progress Ring                                  */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <div style={{ position: 'relative', width: ringSize, height: ringSize }}>
            <svg
              width={ringSize}
              height={ringSize}
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Background circle */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={ringRadius}
                fill="none"
                stroke={T.border}
                strokeWidth={ringStroke}
              />
              {/* Progress circle */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={ringRadius}
                fill="none"
                stroke={T.gold}
                strokeWidth={ringStroke}
                strokeLinecap="round"
                strokeDasharray={ringCircumference}
                strokeDashoffset={ringOffset}
                style={{
                  transition: 'stroke-dashoffset 1s ease',
                  filter: `drop-shadow(0 0 6px ${T.goldDim})`,
                }}
              />
            </svg>
            {/* Center text */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: T.text,
                  lineHeight: 1,
                }}
              >
                {surahPercentage}%
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: T.muted,
                  marginTop: 4,
                }}
              >
                do Quran
              </span>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 3. Stats Grid (2x2)                                      */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            {
              icon: BookOpen,
              label: 'Suratas Lidas',
              value: `${surahsRead.size}/${TOTAL_SURAHS}`,
            },
            {
              icon: Target,
              label: 'Total Ayahs',
              value: ayahsReadCount.toLocaleString('pt-BR'),
            },
            {
              icon: Calendar,
              label: 'Dias Lendo',
              value: readingDays.length.toString(),
            },
            {
              icon: TrendingUp,
              label: 'Media/dia',
              value: `${averagePerDay} ayahs`,
            },
          ].map((stat, i) => {
            const IconComp = stat.icon
            return (
              <div
                key={stat.label}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 14,
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <IconComp size={18} color={T.gold} />
                <span style={{ fontSize: 20, fontWeight: 700, color: T.text }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: 12, color: T.muted }}>{stat.label}</span>
              </div>
            )
          })}
        </motion.div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 4. Continue Reading CTA                                   */}
        {/* ══════════════════════════════════════════════════════════ */}
        {santuarioLast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: 24 }}
          >
            <Link
              href="/a-palavra/santuario"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                textDecoration: 'none',
                background: `linear-gradient(135deg, ${T.gold}22 0%, ${T.gold}0A 100%)`,
                border: `1px solid ${T.goldDim}`,
                borderRadius: 14,
                padding: '16px 18px',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.gold
                e.currentTarget.style.background = `linear-gradient(135deg, ${T.gold}30 0%, ${T.gold}12 100%)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.goldDim
                e.currentTarget.style.background = `linear-gradient(135deg, ${T.gold}22 0%, ${T.gold}0A 100%)`
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: T.goldGlow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Play size={20} color={T.gold} style={{ marginLeft: 2 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 600,
                    color: T.gold,
                  }}
                >
                  Continuar de Onde Parei
                </p>
                <p
                  style={{
                    margin: '2px 0 0',
                    fontSize: 13,
                    color: T.secondary,
                  }}
                >
                  {santuarioSurahName} — Ayah {santuarioLast.ayah}
                </p>
              </div>
              <ChevronLeft
                size={18}
                color={T.muted}
                style={{ transform: 'rotate(180deg)', flexShrink: 0 }}
              />
            </Link>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 5. Khatm Calculator                                       */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 14,
            padding: '18px 18px',
            marginBottom: 24,
          }}
        >
          <p
            style={{
              margin: '0 0 14px',
              fontSize: 14,
              fontWeight: 600,
              color: T.text,
            }}
          >
            Calculadora de Khatm
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <span style={{ fontSize: 13, color: T.secondary, whiteSpace: 'nowrap' }}>
              Paginas/dia:
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <button
                onClick={() => setPagesPerDay((p) => Math.max(1, p - 1))}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px 0 0 8px',
                  border: `1px solid ${T.border}`,
                  background: T.bg,
                  color: T.text,
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = T.goldDim)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = T.border)
                }
              >
                -
              </button>
              <div
                style={{
                  width: 44,
                  height: 34,
                  borderTop: `1px solid ${T.border}`,
                  borderBottom: `1px solid ${T.border}`,
                  background: T.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  color: T.gold,
                }}
              >
                {pagesPerDay}
              </div>
              <button
                onClick={() => setPagesPerDay((p) => Math.min(50, p + 1))}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '0 8px 8px 0',
                  border: `1px solid ${T.border}`,
                  background: T.bg,
                  color: T.text,
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = T.goldDim)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = T.border)
                }
              >
                +
              </button>
            </div>

            <div style={{ flex: 1, textAlign: 'right' }}>
              <span style={{ fontSize: 14, color: T.text }}>
                Complete em{' '}
                <strong style={{ color: T.gold }}>
                  {daysToComplete === Infinity ? '---' : `${daysToComplete} dias`}
                </strong>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 6. Surah Grid (114 mini squares)                          */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: 32 }}
        >
          <p
            style={{
              margin: '0 0 14px',
              fontSize: 14,
              fontWeight: 600,
              color: T.text,
            }}
          >
            114 Suratas
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 4,
            }}
          >
            {SURAH_NAMES.map((surah) => {
              const isRead = surahsRead.has(surah.number)
              return (
                <Link
                  key={surah.number}
                  href={`/a-palavra/${surah.number}`}
                  title={`${surah.number}. ${surah.portuguese} (${surah.arabic})`}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: 4,
                    background: isRead ? T.gold : T.border,
                    display: 'block',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    boxShadow: isRead ? `0 0 4px ${T.goldDim}` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.3)'
                    e.currentTarget.style.boxShadow = isRead
                      ? `0 0 8px ${T.goldDim}`
                      : `0 0 4px ${T.muted}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = isRead
                      ? `0 0 4px ${T.goldDim}`
                      : 'none'
                  }}
                />
              )
            })}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 10,
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: T.border,
                }}
              />
              <span style={{ fontSize: 11, color: T.muted }}>Nao lida</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: T.gold,
                }}
              />
              <span style={{ fontSize: 11, color: T.muted }}>Lida</span>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 7. Annual Heatmap                                         */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          style={{ marginBottom: 32 }}
        >
          <p
            style={{
              margin: '0 0 14px',
              fontSize: 14,
              fontWeight: 600,
              color: T.text,
            }}
          >
            Calendario de Leitura
          </p>

          <div
            style={{
              overflowX: 'auto',
              paddingBottom: 4,
            }}
          >
            {/* Month labels */}
            <div
              style={{
                display: 'flex',
                marginBottom: 4,
                paddingLeft: 0,
                minWidth: heatmapWeeks.length * 14,
              }}
            >
              {monthLabels.map((ml, idx) => (
                <span
                  key={idx}
                  style={{
                    position: 'absolute' as const,
                    left: ml.col * 14,
                    fontSize: 10,
                    color: T.muted,
                  }}
                />
              ))}
            </div>

            {/* Heatmap: relative container for month labels + grid */}
            <div style={{ position: 'relative' }}>
              {/* Month label row */}
              <div
                style={{
                  display: 'flex',
                  height: 16,
                  position: 'relative',
                  minWidth: heatmapWeeks.length * 14,
                }}
              >
                {monthLabels.map((ml, idx) => (
                  <span
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: ml.col * 14,
                      fontSize: 10,
                      color: T.muted,
                      userSelect: 'none',
                    }}
                  >
                    {ml.month}
                  </span>
                ))}
              </div>

              {/* Grid: columns = weeks, rows = days (0=Sun..6=Sat) */}
              <div
                style={{
                  display: 'flex',
                  gap: 2,
                  minWidth: heatmapWeeks.length * 14,
                }}
              >
                {heatmapWeeks.map((week, colIdx) => (
                  <div
                    key={colIdx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    {week.map((day, rowIdx) => {
                      if (!day.date) {
                        return (
                          <div
                            key={rowIdx}
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: 2,
                              background: 'transparent',
                            }}
                          />
                        )
                      }
                      return (
                        <div
                          key={rowIdx}
                          title={day.date}
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 2,
                            background: day.read ? T.gold : T.border,
                            transition: 'transform 0.1s',
                            cursor: 'default',
                            boxShadow: day.read
                              ? `0 0 3px ${T.goldDim}`
                              : 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.5)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'
                          }}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 10,
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: T.border,
                }}
              />
              <span style={{ fontSize: 11, color: T.muted }}>Sem leitura</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: T.gold,
                }}
              />
              <span style={{ fontSize: 11, color: T.muted }}>Leu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
