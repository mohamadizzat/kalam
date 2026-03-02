'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  EMOTIONS,
  MOOD_PRACTICES,
  saveMoodEntry,
  getRecentMoods,
  type MoodLogEntry,
} from '@/lib/data/mood-practices'
import Link from 'next/link'
import {
  ChevronLeft,
  Clock,
  BookOpen,
  Heart,
  Sparkles,
  PenLine,
  Languages,
  Sun,
  Search,
  MessageCircle,
  BookMarked,
  Calendar,
  ArrowRight,
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
// Icon Map
// ═══════════════════════════════════════════════════════════════

const PRACTICE_ICONS: Record<string, typeof Clock> = {
  Clock,
  BookOpen,
  Heart,
  Sparkles,
  PenLine,
  Languages,
  Sun,
  Search,
  MessageCircle,
  BookMarked,
  Calendar,
}

// ═══════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════

export function MoodClient() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [recentMoods, setRecentMoods] = useState<MoodLogEntry[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setRecentMoods(getRecentMoods(7))
  }, [])

  // Build a 7-day lookup: date string -> mood id
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().slice(0, 10)
  })

  const moodByDay: Record<string, string> = {}
  for (const entry of recentMoods) {
    const dateKey = entry.date.slice(0, 10)
    moodByDay[dateKey] = entry.mood // last mood of the day wins
  }

  function getEmotionColor(moodId: string): string {
    return EMOTIONS.find((e) => e.id === moodId)?.color ?? T.muted
  }

  function getEmotionById(moodId: string) {
    return EMOTIONS.find((e) => e.id === moodId)
  }

  const selectedEmotion = selectedMood ? getEmotionById(selectedMood) : null
  const practices = selectedMood ? MOOD_PRACTICES[selectedMood] ?? [] : []

  function handleSelectMood(moodId: string) {
    setSelectedMood(moodId)
  }

  function handleSelectPractice(practiceName: string) {
    if (selectedMood) {
      saveMoodEntry(selectedMood, practiceName)
      setRecentMoods(getRecentMoods(7))
    }
  }

  function handleBack() {
    setSelectedMood(null)
  }

  const dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

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
          maxWidth: 500,
          margin: '0 auto',
          padding: '0 20px 60px',
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            paddingTop: 20,
            paddingBottom: 8,
          }}
        >
          <Link
            href="/a-alma"
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
            A Alma
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {/* ════════════════════════════════════════════════════════════ */}
          {/* QUESTION SCREEN                                            */}
          {/* ════════════════════════════════════════════════════════════ */}
          {!selectedMood && (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title */}
              <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    margin: 0,
                    lineHeight: 1.3,
                    color: T.text,
                  }}
                >
                  Como voce esta agora?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  style={{
                    color: T.secondary,
                    fontSize: 15,
                    marginTop: 10,
                  }}
                >
                  Selecione o que mais se aproxima do que sente
                </motion.p>
              </div>

              {/* Emotion Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 12,
                }}
              >
                {EMOTIONS.map((emotion, i) => (
                  <motion.button
                    key={emotion.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i + 0.2 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelectMood(emotion.id)}
                    style={{
                      background: T.surface,
                      border: `1px solid ${T.border}`,
                      borderRadius: 14,
                      padding: '18px 8px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      cursor: 'pointer',
                      transition: 'border-color 0.25s, background 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = emotion.color
                      e.currentTarget.style.background = `${emotion.color}10`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = T.border
                      e.currentTarget.style.background = T.surface
                    }}
                  >
                    <span style={{ fontSize: 32, lineHeight: 1 }}>{emotion.emoji}</span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: T.secondary,
                        textAlign: 'center',
                      }}
                    >
                      {emotion.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* ── 7-Day Mood History ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{
                  marginTop: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: T.muted,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Ultimos 7 dias
                </span>
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  {last7Days.map((dateStr, i) => {
                    const mood = moodByDay[dateStr]
                    const color = mood ? getEmotionColor(mood) : T.border
                    const emotion = mood ? getEmotionById(mood) : null
                    const dateObj = new Date(dateStr + 'T12:00:00')
                    const dayLabel = dayLabels[dateObj.getDay()]
                    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}`

                    return (
                      <div
                        key={dateStr}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <span style={{ fontSize: 10, color: T.muted }}>{dayLabel}</span>
                        <div
                          title={
                            emotion
                              ? `${formattedDate} — ${emotion.emoji} ${emotion.label}`
                              : `${formattedDate} — Sem registro`
                          }
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: color,
                            transition: 'transform 0.2s',
                            cursor: 'default',
                            boxShadow: mood ? `0 0 6px ${color}40` : 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.4)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* PRACTICE SCREEN                                            */}
          {/* ════════════════════════════════════════════════════════════ */}
          {selectedMood && selectedEmotion && (
            <motion.div
              key="practices"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back Button */}
              <button
                onClick={handleBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: T.secondary,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: '12px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.secondary)}
              >
                <ChevronLeft size={18} />
                Voltar
              </button>

              {/* Header */}
              <div style={{ marginTop: 16, marginBottom: 28 }}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 36, lineHeight: 1 }}>
                    {selectedEmotion.emoji}
                  </span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: T.muted,
                        fontWeight: 500,
                      }}
                    >
                      Praticas para
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 24,
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: selectedEmotion.color,
                      }}
                    >
                      {selectedEmotion.label}
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Practice Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {practices.map((practice, i) => {
                  const IconComp = PRACTICE_ICONS[practice.icon] || BookOpen

                  return (
                    <motion.div
                      key={practice.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.15 }}
                      style={{
                        background: T.surface,
                        border: `1px solid ${T.border}`,
                        borderRadius: 16,
                        padding: 20,
                        transition: 'border-color 0.25s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = T.goldDim
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = T.border
                      }}
                    >
                      {/* Top Row: Icon + Name + Duration */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          marginBottom: 12,
                        }}
                      >
                        {/* Gold Circle Icon */}
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: '50%',
                            background: T.goldGlow,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconComp size={20} color={T.gold} />
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            style={{
                              margin: 0,
                              fontSize: 16,
                              fontWeight: 600,
                              color: T.text,
                            }}
                          >
                            {practice.name}
                          </h3>
                        </div>

                        {/* Duration Pill */}
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 500,
                            color: T.gold,
                            background: T.goldGlow,
                            padding: '4px 10px',
                            borderRadius: 20,
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                          }}
                        >
                          {practice.duration}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          margin: '0 0 14px',
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: T.secondary,
                        }}
                      >
                        {practice.description}
                      </p>

                      {/* Verse Quote */}
                      <div
                        style={{
                          background: `${T.gold}08`,
                          borderLeft: `2px solid ${T.goldDim}`,
                          padding: '10px 14px',
                          borderRadius: '0 8px 8px 0',
                          marginBottom: 16,
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: 13,
                            fontStyle: 'italic',
                            color: T.gold,
                            lineHeight: 1.5,
                          }}
                        >
                          &ldquo;{practice.verse.text}&rdquo;
                        </p>
                        <p
                          style={{
                            margin: '4px 0 0',
                            fontSize: 11,
                            color: T.muted,
                          }}
                        >
                          Quran {practice.verse.ref}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={practice.href}
                        onClick={() => handleSelectPractice(practice.name)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          color: T.gold,
                          textDecoration: 'none',
                          fontSize: 14,
                          fontWeight: 600,
                          padding: '8px 0',
                          transition: 'gap 0.25s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.gap = '12px'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.gap = '8px'
                        }}
                      >
                        Comecar
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* ── 7-Day Mood History (also on practice screen) ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  marginTop: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: T.muted,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Ultimos 7 dias
                </span>
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  {last7Days.map((dateStr) => {
                    const mood = moodByDay[dateStr]
                    const color = mood ? getEmotionColor(mood) : T.border
                    const emotion = mood ? getEmotionById(mood) : null
                    const dateObj = new Date(dateStr + 'T12:00:00')
                    const dayLabel = dayLabels[dateObj.getDay()]
                    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}`

                    return (
                      <div
                        key={dateStr}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <span style={{ fontSize: 10, color: T.muted }}>{dayLabel}</span>
                        <div
                          title={
                            emotion
                              ? `${formattedDate} — ${emotion.emoji} ${emotion.label}`
                              : `${formattedDate} — Sem registro`
                          }
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: color,
                            boxShadow: mood ? `0 0 6px ${color}40` : 'none',
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
