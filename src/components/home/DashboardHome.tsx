'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Sun,
  Compass,
  Heart,
  Star,
  Share2,
  Flame,
  BookMarked,
  PenLine,
  GitBranch,
  BookText,
  RotateCcw,
} from 'lucide-react'
import { SANCTUARY_VERSES, NAMES_PREVIEW } from '@/lib/data/daily-content'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── TYPES ────────────────────────────────────────────────────────────────────

type LastRead = {
  surah: number
  verse: number
  name: string
}

// ── ANIMATED COUNTER ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, color }: { value: number; color: string }) {
  const [display, setDisplay] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (value <= 0 || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 500
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [value])

  return (
    <span
      style={{
        fontSize: 20,
        fontWeight: 600,
        color,
        fontFamily: 'var(--font-serif)',
      }}
    >
      {display}
    </span>
  )
}

// ── EXPLORE PORTALS DATA ─────────────────────────────────────────────────────

const PORTALS = [
  { icon: BookOpen, label: 'A Palavra', hint: 'Para quem quer ler e estudar', stat: '114 Suratas', href: '/a-palavra' },
  { icon: Sun, label: 'A Presença', hint: 'Para quem quer praticar', stat: '99 Nomes', href: '/a-presenca' },
  { icon: Compass, label: 'A Jornada', hint: 'Para quem quer aprender', stat: 'Trilhas guiadas', href: '/a-jornada' },
  { icon: Heart, label: 'A Alma', hint: 'Seu espaço de reflexão', stat: 'Diário pessoal', href: '/a-alma' },
  { icon: Star, label: 'Kids', hint: 'Para crianças', stat: 'Conteúdo infantil', href: '/kids' },
] as const

// ── QUICK ACTION PILLS ──────────────────────────────────────────────────────

const QUICK_ACTIONS = [
  { label: 'Ler o Alcorão', href: '/a-palavra' },
  { label: '99 Nomes', href: '/a-presenca/99-nomes' },
  { label: 'Trilhas', href: '/trilhas' },
  { label: 'Profetas', href: '/os-profetas' },
  { label: 'A Ponte', href: '/a-ponte' },
  { label: 'O Sistema', href: '/o-sistema' },
  { label: 'Mapa', href: '/mapa' },
] as const

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function DashboardHome() {
  const [dateLabel, setDateLabel] = useState('')
  const [greeting, setGreeting] = useState('')
  const [verseIndex, setVerseIndex] = useState(0)
  const [nameOfDay, setNameOfDay] = useState(NAMES_PREVIEW[0])
  const [streak, setStreak] = useState(0)
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [surahsReadCount, setSurahsReadCount] = useState(0)
  const [journalCount, setJournalCount] = useState(0)
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')

  // ── Init date, greeting, verse ──
  useEffect(() => {
    const now = new Date()
    const hour = now.getHours()

    if (hour >= 5 && hour < 12) setGreeting('Bom dia')
    else if (hour >= 12 && hour < 18) setGreeting('Boa tarde')
    else setGreeting('Boa noite')

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
    ]
    setDateLabel(`${days[now.getDay()]} \u00B7 ${now.getDate()} de ${months[now.getMonth()]}`)

    const day = now.getDate()
    setVerseIndex((day - 1) % SANCTUARY_VERSES.length)
    setNameOfDay(NAMES_PREVIEW[day % NAMES_PREVIEW.length])
  }, [])

  // ── Streak ──
  useEffect(() => {
    try {
      const lastVisit = localStorage.getItem('kalam-last-visit')
      const currentStreak = parseInt(localStorage.getItem('kalam-streak') || '0')
      const today = new Date().toISOString().split('T')[0]

      if (lastVisit !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        const newStreak = lastVisit === yesterday ? currentStreak + 1 : 1
        localStorage.setItem('kalam-streak', String(newStreak))
        localStorage.setItem('kalam-last-visit', today)
        setStreak(newStreak)
      } else {
        setStreak(currentStreak)
      }
    } catch {
      // ignore
    }
  }, [])

  // ── Last read + stats ──
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch {
      // ignore
    }

    try {
      const surahs = localStorage.getItem('kalam-surahs-read')
      if (surahs) {
        const parsed = JSON.parse(surahs)
        setSurahsReadCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch {
      // ignore
    }

    try {
      const journal = localStorage.getItem('kalam-journal')
      if (journal) {
        const parsed = JSON.parse(journal)
        setJournalCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch {
      // ignore
    }
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]

  const handleShare = useCallback(async () => {
    const text = `"${verse.translation}"\n\n${verse.arabic}\n\n— ${verse.surahRef}\n\nKALAM — Deus. Todo dia.`

    if (navigator.share) {
      try {
        await navigator.share({ title: 'KALAM — Versículo do Dia', text })
        return
      } catch {
        // fall through
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2000)
    } catch {
      // clipboard failed
    }
  }, [verse])

  const handleReset = () => {
    try {
      localStorage.removeItem('kalam-onboarding-done')
      window.location.reload()
    } catch {
      // ignore
    }
  }

  const allStatsZero = streak === 0 && surahsReadCount === 0 && journalCount === 0
  const hasAnyStats = !allStatsZero

  const statsToShow = useMemo(() => {
    const list: Array<{ icon: typeof Flame; value: number; label: string }> = []
    if (streak > 0) list.push({ icon: Flame, value: streak, label: streak === 1 ? 'dia' : 'dias' })
    if (surahsReadCount > 0) list.push({ icon: BookMarked, value: surahsReadCount, label: 'suratas' })
    if (journalCount > 0) list.push({ icon: PenLine, value: journalCount, label: 'reflexões' })
    return list
  }, [streak, surahsReadCount, journalCount])

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Smart Greeting + Compact Verse
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '48px 24px 0' }}>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 26, color: T.text, fontWeight: 500, marginBottom: 4 }}>
            {greeting}
          </p>
          <p style={{ fontSize: 13, color: T.muted }}>
            {dateLabel || '\u00A0'}
          </p>
        </motion.div>

        {/* Compact Verse Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 20,
            padding: 24,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              direction: 'rtl',
              fontSize: 'clamp(24px, 5vw, 36px)',
              lineHeight: 1.7,
              color: T.gold,
              marginBottom: 12,
            }}
          >
            {verse.arabic}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 2vw, 17px)',
              lineHeight: 1.8,
              color: T.text,
              maxWidth: 460,
              margin: '0 auto 8px',
            }}
          >
            &ldquo;{verse.translation}&rdquo;
          </p>

          <p style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>
            &mdash; {verse.surahRef}
          </p>

          {/* Name of God (smaller, below verse) */}
          <div
            style={{
              borderTop: `1px solid ${T.border}`,
              paddingTop: 14,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 10, letterSpacing: '0.15em', color: T.muted, textTransform: 'uppercase', marginBottom: 6 }}>
              Nome de Deus &middot; Hoje
            </p>
            <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 22, color: T.gold, marginBottom: 2 }}>
              {nameOfDay.arabic}
            </p>
            <p style={{ fontSize: 13, color: T.secondary }}>
              {nameOfDay.transliteration} &mdash; {nameOfDay.meaning}
            </p>
          </div>

          {/* CTA Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/a-palavra"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                borderRadius: 999,
                border: '1px solid rgba(201,168,76,0.3)',
                color: T.gold,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Abrir a Palavra <ArrowRight size={15} />
            </Link>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 18px',
                borderRadius: 999,
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'rgba(201,168,76,0.06)',
                color: shareState === 'copied' ? T.gold : T.muted,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <Share2 size={14} />
              {shareState === 'copied' ? 'Copiado!' : 'Compartilhar'}
            </button>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — Continue Reading (conditional)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: '16px 24px 0' }}
      >
        {lastRead ? (
          <Link
            href={`/a-palavra/${lastRead.surah}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: 18,
              borderRadius: 12,
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              textDecoration: 'none',
            }}
          >
            <BookOpen size={20} style={{ color: T.gold, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, color: T.text, fontWeight: 500 }}>
                Continuar: {lastRead.name}
              </p>
              <p style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                Versículo {lastRead.verse}
              </p>
            </div>
            <ArrowRight size={15} style={{ color: T.gold, flexShrink: 0 }} />
          </Link>
        ) : (
          <Link
            href="/a-palavra"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: 18,
              borderRadius: 12,
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.1)',
              textDecoration: 'none',
            }}
          >
            <BookOpen size={20} style={{ color: T.muted, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, color: T.secondary }}>
                Comece sua leitura
              </p>
              <p style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                114 suratas te esperam
              </p>
            </div>
            <ArrowRight size={15} style={{ color: T.muted, flexShrink: 0 }} />
          </Link>
        )}
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Stats (conditional)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ padding: '16px 24px 0' }}
      >
        {hasAnyStats ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${statsToShow.length}, 1fr)`,
              gap: 12,
            }}
          >
            {statsToShow.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  borderRadius: 12,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                }}
              >
                <stat.icon size={18} style={{ color: T.gold, marginBottom: 8 }} />
                <AnimatedCounter value={stat.value} color={T.gold} />
                <span style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '20px 16px',
              borderRadius: 12,
              background: T.surface,
              border: `1px solid ${T.border}`,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>
              Seu progresso aparecerá aqui conforme você explorar
            </p>
          </div>
        )}
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — Quick Actions (horizontal scroll)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ padding: '20px 0 0' }}
      >
        <div
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            padding: '0 24px 4px',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          // Hide scrollbar with inline CSS (WebKit)
          className="hide-scrollbar"
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'transparent',
                color: T.secondary,
                fontSize: 13,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Featured Content
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ padding: '32px 24px 0' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Destaque
        </p>

        <div style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link
            href="/a-ponte"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 24,
              borderRadius: 16,
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.1)',
                flexShrink: 0,
              }}
            >
              <GitBranch size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                A Ponte
              </p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>
                Bíblia &times; Alcorão &mdash; 17 profetas, 20 temas, estudo comparativo
              </p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </Link>

          <Link
            href="/a-biblia-do-kalam"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 24,
              borderRadius: 16,
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.12)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.08)',
                flexShrink: 0,
              }}
            >
              <BookText size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                A Bíblia do Kalam
              </p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>
                25 capítulos entrelaçando as duas escrituras
              </p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </Link>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — Portal Grid with hints
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ padding: '32px 24px 0' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Explorar
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            maxWidth: 520,
            margin: '0 auto',
          }}
        >
          {PORTALS.map((portal, i) => (
            <motion.div
              key={portal.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={i === PORTALS.length - 1 ? { gridColumn: 'span 2' } : undefined}
            >
              <Link
                href={portal.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px 16px',
                  borderRadius: 16,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  textDecoration: 'none',
                  textAlign: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(201,168,76,0.08)',
                    marginBottom: 4,
                  }}
                >
                  <portal.icon size={22} style={{ color: T.gold }} />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: T.text, fontWeight: 500 }}>
                  {portal.label}
                </span>
                <span style={{ fontSize: 12, color: T.secondary, lineHeight: 1.4 }}>
                  {portal.hint}
                </span>
                <span style={{ fontSize: 11, color: T.muted, letterSpacing: '0.05em' }}>
                  {portal.stat}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — Footer
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '40px 24px 64px',
          borderTop: `1px solid ${T.border}`,
          marginTop: 32,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <button
          onClick={handleReset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: T.muted,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <RotateCcw size={13} />
          Redescobrir o Kalam
        </button>

        <Link
          href="/sobre"
          style={{
            fontSize: 13,
            color: T.muted,
            textDecoration: 'none',
          }}
        >
          Sobre o Kalam
        </Link>
      </section>
    </main>
  )
}
