'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Sun,
  Compass,
  Heart,
  Star,
  Flame,
  BookMarked,
  PenLine,
  GitBranch,
  BookText,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Library,
  Route,
  Calendar,
  Sparkles,
  Mic,
  Clock,
} from 'lucide-react'
import { SANCTUARY_VERSES, NAMES_PREVIEW } from '@/lib/data/daily-content'
import { surpriseFactsData } from '@/content/surpriseFacts'
import { PremiumCard } from '@/components/shared/PremiumCard'
import { SanctuaryHero } from '@/components/home/SanctuaryHero'
import { PersonaBanner } from '@/components/home/PersonaBanner'
import { usePersona } from '@/lib/hooks/usePersona'
import type { PersonaId } from '@/lib/hooks/usePersona'

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

// ── CURATED FACTS FOR CAROUSEL ──────────────────────────────────────────────

const DASHBOARD_FACTS = [
  surpriseFactsData.find(f => f.id === 'sf01')!,
  surpriseFactsData.find(f => f.id === 'sf06')!,
  surpriseFactsData.find(f => f.id === 'sf14')!,
  surpriseFactsData.find(f => f.id === 'sf18')!,
  surpriseFactsData.find(f => f.id === 'sf21')!,
].filter(Boolean)

// ── QUICK ACTIONS BY INTENTION ──────────────────────────────────────────────

const QUICK_ACTIONS = [
  { label: 'Ler o Alcorão', href: '/a-palavra', icon: BookOpen },
  { label: 'Recitação', href: '/a-palavra/recitacao', icon: Mic },
  { label: '99 Nomes', href: '/a-presenca/99-nomes', icon: Sparkles },
  { label: 'Dhikr', href: '/a-presenca/dhikr', icon: Clock },
  { label: 'Journal', href: '/a-alma/journal', icon: PenLine },
  { label: 'Trilhas', href: '/trilhas', icon: Route },
  { label: 'A Ponte', href: '/a-ponte', icon: GitBranch },
  { label: 'Profetas', href: '/os-profetas', icon: Star },
] as const

// ── EXPLORE GRID ────────────────────────────────────────────────────────────

const EXPLORE_SECTIONS = [
  {
    category: 'Descobrir',
    icon: Compass,
    items: [
      { label: 'A Mensagem', href: '/a-mensagem' },
      { label: 'A Ponte', href: '/a-ponte' },
      { label: 'Os Profetas', href: '/os-profetas' },
      { label: 'O Sistema', href: '/o-sistema' },
      { label: 'Biblioteca', href: '/biblioteca' },
    ],
  },
  {
    category: 'Aprender',
    icon: BookOpen,
    items: [
      { label: 'A Palavra', href: '/a-palavra' },
      { label: 'Trilhas', href: '/trilhas' },
      { label: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam' },
    ],
  },
  {
    category: 'Praticar',
    icon: Sun,
    items: [
      { label: 'A Presença', href: '/a-presenca' },
      { label: 'Aya do Dia', href: '/aya-do-dia' },
      { label: 'Recitação', href: '/a-palavra/recitacao' },
      { label: 'Flashcards', href: '/a-presenca/flashcards' },
      { label: 'Dhikr', href: '/a-presenca/dhikr' },
    ],
  },
  {
    category: 'Refletir',
    icon: Heart,
    items: [
      { label: 'A Alma', href: '/a-alma' },
      { label: 'Journal', href: '/a-alma/journal' },
      { label: 'Rotina', href: '/a-alma/rotina' },
    ],
  },
] as const

// ── PERSONA-BASED ORDERING ─────────────────────────────────────────────────

const PERSONA_CATEGORY_ORDER: Record<string, string[]> = {
  curious: ['Descobrir', 'Aprender', 'Praticar', 'Refletir'],
  muslim: ['Aprender', 'Praticar', 'Refletir', 'Descobrir'],
  bible: ['Descobrir', 'Aprender', 'Refletir', 'Praticar'],
  spiritual: ['Refletir', 'Praticar', 'Descobrir', 'Aprender'],
  kids: ['Aprender', 'Descobrir', 'Praticar', 'Refletir'],
}

const PERSONA_QUICK_PRIORITY: Record<string, string[]> = {
  curious: ['/a-mensagem', '/a-ponte', '/os-profetas', '/a-palavra'],
  muslim: ['/a-palavra', '/a-palavra/recitacao', '/a-presenca/dhikr', '/a-presenca/99-nomes'],
  bible: ['/a-ponte', '/a-palavra', '/os-profetas', '/trilhas'],
  spiritual: ['/a-alma/journal', '/a-presenca/dhikr', '/a-presenca/99-nomes', '/a-palavra/recitacao'],
  kids: ['/kids', '/a-palavra', '/trilhas', '/a-presenca/flashcards'],
}

function orderByPersona<T extends { category?: string; href?: string }>(
  items: readonly T[],
  order: string[],
  key: 'category' | 'href'
): T[] {
  const mutable = [...items]
  return mutable.sort((a, b) => {
    const aKey = key === 'category' ? (a as { category: string }).category : (a as { href: string }).href
    const bKey = key === 'category' ? (b as { category: string }).category : (b as { href: string }).href
    const aIdx = order.indexOf(aKey)
    const bIdx = order.indexOf(bKey)
    if (aIdx === -1 && bIdx === -1) return 0
    if (aIdx === -1) return 1
    if (bIdx === -1) return -1
    return aIdx - bIdx
  })
}

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function DashboardHome() {
  const [dateLabel, setDateLabel] = useState('')
  const [greeting, setGreeting] = useState('')
  const [verseIndex, setVerseIndex] = useState(0)
  const [nameOfDay, setNameOfDay] = useState(NAMES_PREVIEW[0])
  const [streak, setStreak] = useState(0)
  const { persona } = usePersona()
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [surahsReadCount, setSurahsReadCount] = useState(0)
  const [journalCount, setJournalCount] = useState(0)
  const [factIndex, setFactIndex] = useState(0)

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
    } catch {}
  }, [])

  // ── Last read + stats ──
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch {}

    try {
      const surahs = localStorage.getItem('kalam-surahs-read')
      if (surahs) {
        const parsed = JSON.parse(surahs)
        setSurahsReadCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch {}

    try {
      const journal = localStorage.getItem('kalam-journal')
      if (journal) {
        const parsed = JSON.parse(journal)
        setJournalCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch {}
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]

  const allStatsZero = streak === 0 && surahsReadCount === 0 && journalCount === 0
  const hasAnyStats = !allStatsZero

  const statsToShow = useMemo(() => {
    const list: Array<{ icon: typeof Flame; value: number; label: string }> = []
    if (streak > 0) list.push({ icon: Flame, value: streak, label: streak === 1 ? 'dia' : 'dias' })
    if (surahsReadCount > 0) list.push({ icon: BookMarked, value: surahsReadCount, label: 'suratas' })
    if (journalCount > 0) list.push({ icon: PenLine, value: journalCount, label: 'reflexões' })
    return list
  }, [streak, surahsReadCount, journalCount])

  // ── Personalized content order ──
  const personalizedSections = useMemo(() => {
    if (!persona) return [...EXPLORE_SECTIONS]
    const order = PERSONA_CATEGORY_ORDER[persona] || PERSONA_CATEGORY_ORDER.curious
    return orderByPersona([...EXPLORE_SECTIONS], order, 'category')
  }, [persona])

  const personalizedActions = useMemo(() => {
    if (!persona) return [...QUICK_ACTIONS]
    const priority = PERSONA_QUICK_PRIORITY[persona] || []
    return orderByPersona([...QUICK_ACTIONS], priority, 'href')
  }, [persona])

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Sanctuary Greeting + Compact Verse + Persona
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '48px 24px 0' }}>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 16 }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 26, color: T.text, fontWeight: 500, marginBottom: 4 }}>
            {greeting}
          </p>
          <p style={{ fontSize: 13, color: T.muted }}>
            {dateLabel || '\u00A0'}
          </p>
        </motion.div>

        {/* Persona Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: 16 }}
        >
          <PersonaBanner persona={persona as PersonaId | null} />
        </motion.div>
      </section>

      {/* Sanctuary Hero — compact mode for dashboard */}
      <SanctuaryHero verse={verse} nameOfDay={nameOfDay} compact />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — Continue Reading
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
          SECTION 3 — Stats
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
              <PremiumCard
                key={stat.label}
                variant="default"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  borderRadius: 12,
                }}
              >
                <stat.icon size={18} style={{ color: T.gold, marginBottom: 8 }} />
                <AnimatedCounter value={stat.value} color={T.gold} />
                <span style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
                  {stat.label}
                </span>
              </PremiumCard>
            ))}
          </div>
        ) : (
          <PremiumCard
            variant="default"
            style={{
              padding: '20px 16px',
              borderRadius: 12,
              textAlign: 'center' as const,
            }}
          >
            <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>
              Seu progresso aparecerá aqui conforme você explorar
            </p>
          </PremiumCard>
        )}
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — Quick Actions (horizontal scroll with icons)
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
          className="hide-scrollbar"
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {personalizedActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '10px 16px',
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
              <action.icon size={14} style={{ color: T.gold }} />
              {action.label}
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Fatos que surpreendem (compact carousel)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '28px 24px 0' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Você sabia?
        </p>

        <PremiumCard
          variant="gold"
          style={{
            borderRadius: 16,
            padding: '20px 18px',
            position: 'relative' as const,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={factIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p style={{ fontSize: 18, marginBottom: 8 }}>
                {DASHBOARD_FACTS[factIndex].reaction}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 15,
                  color: T.text,
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {DASHBOARD_FACTS[factIndex].hook}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div style={{ display: 'flex', gap: 4, marginTop: 14 }}>
            {DASHBOARD_FACTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setFactIndex(i)}
                aria-label={`Fato ${i + 1}`}
                style={{
                  width: i === factIndex ? 16 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === factIndex ? T.gold : 'rgba(201,168,76,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </PremiumCard>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — Featured Content
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
            style={{ textDecoration: 'none' }}
          >
          <PremiumCard variant="featured" spotlight style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 24, borderRadius: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.1)', flexShrink: 0 }}>
              <GitBranch size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>A Ponte</p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>Bíblia &times; Alcorão &mdash; 17 profetas, 20 temas</p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </PremiumCard>
          </Link>

          <Link
            href="/a-biblia-do-kalam"
            style={{ textDecoration: 'none' }}
          >
          <PremiumCard variant="featured" spotlight style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 24, borderRadius: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.08)', flexShrink: 0 }}>
              <BookText size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>A Bíblia do Kalam</p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>25 capítulos entrelaçando as duas escrituras</p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </PremiumCard>
          </Link>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — Explore Grid (by intention)
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 14,
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {personalizedSections.map((section) => (
            <PremiumCard
              key={section.category}
              variant="default"
              spotlight
              style={{
                borderRadius: 14,
                padding: '16px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <section.icon size={14} style={{ color: T.gold }} />
                <p style={{ fontSize: 11, letterSpacing: '0.1em', color: T.gold, textTransform: 'uppercase', fontWeight: 600 }}>
                  {section.category}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: 6,
                      fontSize: 13,
                      textDecoration: 'none',
                      color: T.text,
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.06)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    {item.label}
                    <ArrowRight size={12} style={{ color: T.muted }} />
                  </Link>
                ))}
              </div>
            </PremiumCard>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8 — Footer
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
