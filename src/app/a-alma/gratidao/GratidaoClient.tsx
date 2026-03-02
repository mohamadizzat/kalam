'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Heart, Sparkles, ChevronDown, ChevronUp, Flame } from 'lucide-react'

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

const STORAGE_KEY = 'kalam-gratidao-v1'

interface GratidaoEntry {
  date: string // ISO date string (YYYY-MM-DD)
  items: [string, string, string]
  prompt?: string
}

const DAILY_PROMPTS = [
  'O que você tem que muitas pessoas no mundo não têm?',
  'Quem foi gentil com você recentemente?',
  'O que seu corpo faz por você todos os dias sem pedir nada em troca?',
  'Qual memória te faz sorrir quando você pensa nela?',
  'O que te sustentou nos momentos difíceis?',
  'Qual conhecimento ou habilidade você tem que enriquece sua vida?',
  'O que na natureza te lembra da grandeza de Deus?',
  'Qual relacionamento te fortalece?',
  'O que você aprendeu nos últimos 30 dias?',
  'Qual necessidade básica foi atendida hoje?',
]

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0]
}

function getDailyPrompt(): string {
  const day = new Date().getDay()
  return DAILY_PROMPTS[day % DAILY_PROMPTS.length]
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function calcStreak(entries: GratidaoEntry[]): number {
  if (entries.length === 0) return 0
  const today = getTodayKey()
  const sortedDates = [...new Set(entries.map(e => e.date))].sort().reverse()
  let streak = 0
  let expected = today
  for (const date of sortedDates) {
    if (date === expected) {
      streak++
      const prev = new Date(expected + 'T12:00:00')
      prev.setDate(prev.getDate() - 1)
      expected = prev.toISOString().split('T')[0]
    } else break
  }
  return streak
}

// ── Main component ────────────────────────────────────────────────────────────
export default function GratidaoClient() {
  const [entries, setEntries] = useState<GratidaoEntry[]>([])
  const [todayItems, setTodayItems] = useState<[string, string, string]>(['', '', ''])
  const [saved, setSaved] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const prompt = getDailyPrompt()
  const todayKey = getTodayKey()

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: GratidaoEntry[] = JSON.parse(stored)
        setEntries(parsed)
        const todayEntry = parsed.find(e => e.date === todayKey)
        if (todayEntry) {
          setTodayItems(todayEntry.items)
          setSaved(true)
        }
      }
    } catch {}
  }, [todayKey])

  const handleSave = () => {
    const filled = todayItems.filter(Boolean)
    if (filled.length === 0) return
    const newEntry: GratidaoEntry = { date: todayKey, items: todayItems, prompt }
    const updated = entries.filter(e => e.date !== todayKey).concat(newEntry)
    setEntries(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setSaved(true)
  }

  const streak = calcStreak(entries)
  const history = entries.filter(e => e.date !== todayKey).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14)

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 48px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              href="/a-alma"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: T.muted,
                textDecoration: 'none',
                fontSize: 13,
                marginBottom: 32,
              }}
            >
              <ArrowLeft size={14} />
              A Alma
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <Heart size={24} style={{ color: T.gold }} />
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 5vw, 38px)',
                fontWeight: 700,
                color: T.text,
                marginBottom: 8,
              }}
            >
              Diário de Gratidão
            </h1>
            <p style={{ fontSize: 15, color: T.secondary, maxWidth: 380, margin: '0 auto' }}>
              &ldquo;Se vocês agradecessem, Eu aumentaria para vocês.&rdquo; — Alcorão 14:7
            </p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px 80px' }}>
        {/* ── Streak ────────────────────────────────────── */}
        {streak > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 20px',
              borderRadius: 12,
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.06)',
              marginBottom: 24,
            }}
          >
            <Flame size={16} style={{ color: T.gold }} />
            <span style={{ fontSize: 14, color: T.gold, fontWeight: 600 }}>
              {streak} dia{streak > 1 ? 's' : ''} seguido{streak > 1 ? 's' : ''}
            </span>
            <span style={{ fontSize: 13, color: T.muted, marginLeft: 'auto' }}>
              {entries.length} registros no total
            </span>
          </motion.div>
        )}

        {/* ── Today's entry ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            borderRadius: 16,
            border: `1px solid ${T.border}`,
            background: T.surface,
            padding: '28px 24px',
            marginBottom: 16,
          }}
        >
          <p style={{ fontSize: 12, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
            Hoje — {formatDate(todayKey)}
          </p>

          <div
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.12)',
              marginBottom: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Sparkles size={12} style={{ color: T.gold }} />
              <span style={{ fontSize: 11, color: T.gold, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Reflexão do dia
              </span>
            </div>
            <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.5 }}>{prompt}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {([0, 1, 2] as const).map((i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.1)',
                    border: `1px solid ${todayItems[i] ? 'rgba(201,168,76,0.4)' : T.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 10,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <span style={{ fontSize: 13, color: todayItems[i] ? T.gold : T.muted, fontWeight: 600 }}>
                    {i + 1}
                  </span>
                </div>
                <textarea
                  value={todayItems[i]}
                  onChange={(e) => {
                    const updated = [...todayItems] as [string, string, string]
                    updated[i] = e.target.value
                    setTodayItems(updated)
                    setSaved(false)
                  }}
                  placeholder={
                    i === 0 ? 'Sou grato por...'
                    : i === 1 ? 'Outra bênção...'
                    : 'E também...'
                  }
                  rows={2}
                  style={{
                    flex: 1,
                    background: T.elevated,
                    border: `1px solid ${T.border}`,
                    borderRadius: 10,
                    padding: '10px 14px',
                    color: T.text,
                    fontSize: 14,
                    lineHeight: 1.5,
                    resize: 'none',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <AnimatePresence mode="wait">
              {saved ? (
                <motion.div
                  key="saved"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 24px',
                    borderRadius: 12,
                    border: '1px solid rgba(201,168,76,0.3)',
                    background: 'rgba(201,168,76,0.08)',
                    color: T.gold,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Heart size={14} fill={T.gold} />
                  Gratidão registrada
                </motion.div>
              ) : (
                <motion.button
                  key="save"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  onClick={handleSave}
                  disabled={todayItems.every(s => !s.trim())}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 12,
                    border: '1px solid rgba(201,168,76,0.4)',
                    background: 'rgba(201,168,76,0.12)',
                    color: T.gold,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    opacity: todayItems.every(s => !s.trim()) ? 0.4 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  Salvar gratidão
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── History ───────────────────────────────────── */}
        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <button
              onClick={() => setShowHistory(!showHistory)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: 12,
                border: `1px solid ${T.border}`,
                background: T.surface,
                color: T.secondary,
                fontSize: 14,
                cursor: 'pointer',
                marginBottom: showHistory ? 12 : 0,
              }}
            >
              <span>Últimas {history.length} entradas</span>
              {showHistory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {history.map((entry, idx) => (
                      <motion.div
                        key={entry.date}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        style={{
                          borderRadius: 12,
                          border: `1px solid ${T.border}`,
                          background: T.surface,
                          padding: '16px 20px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 11,
                            color: T.muted,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginBottom: 8,
                          }}
                        >
                          {formatDate(entry.date)}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {entry.items.filter(Boolean).map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                              <span style={{ color: T.gold, fontSize: 12, marginTop: 1 }}>✦</span>
                              <span style={{ fontSize: 13, color: T.secondary, lineHeight: 1.5 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}
