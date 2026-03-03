'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Compass,
  Sun,
  Clock,
  Mic,
  Search,
  Languages,
  Heart,
  BookMarked,
  PenLine,
  Calendar,
  Sparkles,
  Star,
  Layers,
  Scale,
  Timer,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Wand2,
  Headphones,
  GitCompare,
  Map,
  GitBranch,
  Smile,
  CheckSquare,
  Type,
  Calculator,
  CalendarDays,
  UtensilsCrossed,
  Music,
  Brain,
  Image,
  BookOpen,
  Plane,
  BookA,
  FileText,
  HandHeart,
  Handshake,
  Droplets,
  Shirt,
  SmilePlus,
  ListChecks,
  Microscope,
  BookText,
  Target,
  Wallet,
  Shield,
  Crown,
  Hash,
  Sunrise,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'
import { useLocation } from '@/lib/hooks/useLocation'
import {
  TOOLS_CATALOG,
  TOOL_CATEGORIES,
  type ToolCategory,
  type KalamTool,
} from '@/lib/data/tools-catalog'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

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

// ── ICON MAP ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  Sun,
  Clock,
  Mic,
  Search,
  Languages,
  Heart,
  BookMarked,
  PenLine,
  Calendar,
  Sparkles,
  Star,
  Layers,
  Scale,
  Timer,
  Wand2,
  Headphones,
  GitCompare,
  Map,
  GitBranch,
  Smile,
  CheckSquare,
  Type,
  Calculator,
  CalendarDays,
  UtensilsCrossed,
  Music,
  Brain,
  Image,
  BookOpen,
  Plane,
  BookA,
  FileText,
  HandHeart,
  HandshakeIcon: Handshake,
  Droplets,
  Shirt,
  SmilePlus,
  ListChecks,
  Microscope,
  BookText,
  Target,
  Wallet,
  Shield,
  Crown,
  Hash,
  Sunrise,
  Users,
}

// ── PRAYER HELPERS ───────────────────────────────────────────────────────────

const PRAYER_NAMES: Record<string, { arabic: string; meaning: string }> = {
  Fajr: { arabic: '\u0627\u0644\u0641\u062C\u0631', meaning: 'O Despertar' },
  Sunrise: { arabic: '\u0627\u0644\u0634\u0631\u0648\u0642', meaning: 'Nascer do Sol' },
  Dhuhr: { arabic: '\u0627\u0644\u0638\u0647\u0631', meaning: 'O Meio-Dia' },
  Asr: { arabic: '\u0627\u0644\u0639\u0635\u0631', meaning: 'A Tarde' },
  Maghrib: { arabic: '\u0627\u0644\u0645\u063A\u0631\u0628', meaning: 'O Por do Sol' },
  Isha: { arabic: '\u0627\u0644\u0639\u0634\u0627\u0621', meaning: 'A Noite' },
}
const PRAYER_ORDER = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']

function calculateQibla(lat: number, lng: number): number {
  const meccaLat = 21.4225 * (Math.PI / 180)
  const meccaLng = 39.8262 * (Math.PI / 180)
  const userLat = lat * (Math.PI / 180)
  const userLng = lng * (Math.PI / 180)
  const dLng = meccaLng - userLng
  const x = Math.sin(dLng)
  const y = Math.cos(userLat) * Math.tan(meccaLat) - Math.sin(userLat) * Math.cos(dLng)
  let qibla = Math.atan2(x, y) * (180 / Math.PI)
  return (qibla + 360) % 360
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function formatCountdown(diffMinutes: number): string {
  if (diffMinutes < 0) diffMinutes += 24 * 60
  const h = Math.floor(diffMinutes / 60)
  const m = diffMinutes % 60
  if (h === 0) return `${m}min`
  return `${h}h ${m}min`
}

// ── TABS ─────────────────────────────────────────────────────────────────────

const ALL_TABS: { key: ToolCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'pratica', label: 'Prática' },
  { key: 'estudo', label: 'Estudo' },
  { key: 'reflexao', label: 'Reflexão' },
  { key: 'interativo', label: 'Interativo' },
  { key: 'comunidade', label: 'Comunidade' },
]

// ── ROUTINES ─────────────────────────────────────────────────────────────────

const ROUTINES = [
  {
    time: '5 min',
    label: 'Rápida',
    description: 'Verso do dia + dhikr rápido',
    steps: [
      { name: 'Aya do Dia', href: '/aya-do-dia' },
      { name: 'Dhikr', href: '/a-presenca/dhikr' },
    ],
  },
  {
    time: '30 min',
    label: 'Moderada',
    description: 'Recitação + reflexão + journal',
    steps: [
      { name: 'Recitação', href: '/a-palavra/recitacao' },
      { name: 'Flashcards', href: '/a-presenca/flashcards' },
      { name: 'Journal', href: '/a-alma/journal' },
    ],
  },
  {
    time: '1 hora',
    label: 'Completa',
    description: 'Trilha + estudo + plano diário',
    steps: [
      { name: 'Trilhas', href: '/trilhas' },
      { name: 'Estudos', href: '/a-palavra/estudo' },
      { name: 'Plano Diário', href: '/a-jornada/plano-diario' },
    ],
  },
]

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function FerramentasClient() {
  const [activeTab, setActiveTab] = useState<ToolCategory | 'all'>('all')

  const available = TOOLS_CATALOG.filter((t) => t.status === 'available')
  const filtered =
    activeTab === 'all'
      ? TOOLS_CATALOG
      : TOOLS_CATALOG.filter((t) => t.category === activeTab)

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 40px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <Link
              href="/"
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
              Início
            </Link>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 700,
                color: T.text,
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              Suas ferramentas de{' '}
              <span style={{ color: T.gold }}>prática</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: T.secondary,
                maxWidth: 480,
                margin: '0 auto 8px',
              }}
            >
              {available.length} ferramentas disponíveis + {TOOLS_CATALOG.length - available.length} em desenvolvimento
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── FEATURED: PRAYER + QIBLA CARDS ───────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          }}
        >
          <SectionReveal delay={0}>
            <PrayerWidget />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <QiblaWidget />
          </SectionReveal>
        </div>
      </section>

      <GoldDivider />

      {/* ── CATEGORY TABS ────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px 16px' }}>
        <div
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 8,
            scrollbarWidth: 'none',
          }}
        >
          {ALL_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: `1px solid ${activeTab === tab.key ? 'rgba(201,168,76,0.4)' : T.border}`,
                background: activeTab === tab.key ? 'rgba(201,168,76,0.1)' : 'transparent',
                color: activeTab === tab.key ? T.gold : T.muted,
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
              {tab.key !== 'all' && (
                <span style={{ marginLeft: 6, opacity: 0.6 }}>
                  {TOOLS_CATALOG.filter((t) => t.category === tab.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {filtered.map((tool, i) => (
            <SectionReveal key={tool.id} delay={i * 0.03}>
              <ToolCard tool={tool} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* ── ROUTINES ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 24,
              fontWeight: 600,
              color: T.text,
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            Rotinas sugeridas
          </h2>
          <p
            style={{
              fontSize: 14,
              color: T.muted,
              textAlign: 'center',
              marginBottom: 32,
            }}
          >
            Quanto tempo você tem hoje?
          </p>
        </SectionReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {ROUTINES.map((routine, i) => (
            <SectionReveal key={routine.time} delay={i * 0.08}>
              <div
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  padding: '24px 20px',
                  background: T.surface,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      color: T.gold,
                      background: 'rgba(201,168,76,0.12)',
                    }}
                  >
                    {routine.time}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: T.text }}>
                    {routine.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: T.secondary,
                    marginBottom: 16,
                    lineHeight: 1.5,
                  }}
                >
                  {routine.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {routine.steps.map((step) => (
                    <Link
                      key={step.href}
                      href={step.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: 8,
                        background: 'rgba(201,168,76,0.04)',
                        textDecoration: 'none',
                        color: T.secondary,
                        fontSize: 13,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{step.name}</span>
                      <ArrowRight size={14} style={{ color: T.muted }} />
                    </Link>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

// ── PRAYER WIDGET ────────────────────────────────────────────────────────────

function PrayerWidget() {
  const { lat, lng, city, loading: locationLoading } = useLocation()
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; meaning: string } | null>(null)
  const [countdown, setCountdown] = useState('')
  const [prayerLoading, setPrayerLoading] = useState(true)

  const fetchPrayers = useCallback(async (lat: number, lng: number) => {
    try {
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=3`
      )
      if (!res.ok) return
      const data = await res.json()
      const timings = data.data.timings

      const now = new Date()
      const nowMin = now.getHours() * 60 + now.getMinutes()
      let found = false

      for (const key of PRAYER_ORDER) {
        const raw = timings[key]
        const time = raw ? raw.split(' ')[0] : '00:00'
        const pMin = timeToMinutes(time)
        if (pMin > nowMin && !found) {
          found = true
          setNextPrayer({ name: key, time, meaning: PRAYER_NAMES[key].meaning })
        }
      }

      if (!found) {
        const fajr = timings.Fajr?.split(' ')[0] || '05:00'
        setNextPrayer({ name: 'Fajr', time: fajr, meaning: PRAYER_NAMES.Fajr.meaning })
      }
    } finally {
      setPrayerLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!locationLoading) fetchPrayers(lat, lng)
  }, [lat, lng, locationLoading, fetchPrayers])

  useEffect(() => {
    if (!nextPrayer) return
    function tick() {
      const now = new Date()
      const nowMin = now.getHours() * 60 + now.getMinutes()
      let diff = timeToMinutes(nextPrayer!.time) - nowMin
      if (diff < 0) diff += 24 * 60
      setCountdown(formatCountdown(diff))
    }
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [nextPrayer])

  const isLoading = locationLoading || prayerLoading

  return (
    <Link
      href="/a-presenca/salah"
      style={{
        display: 'block',
        padding: '24px',
        borderRadius: 16,
        border: '1px solid rgba(201,168,76,0.2)',
        background: 'rgba(201,168,76,0.04)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'rgba(201,168,76,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sun size={18} style={{ color: T.gold }} />
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: T.text, margin: 0 }}>
            Horários de Oração
          </p>
          <p style={{ fontSize: 12, color: T.muted, margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            <MapPin size={10} /> {isLoading ? '...' : city}
          </p>
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 13, color: T.muted }}>Buscando horários...</p>
      ) : nextPrayer ? (
        <div>
          <p
            style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: T.muted,
              marginBottom: 4,
            }}
          >
            Próxima oração
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: T.gold, margin: '0 0 2px' }}>
            {nextPrayer.name} — {nextPrayer.meaning}
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: T.gold, fontFamily: 'var(--font-serif)' }}>
              {countdown}
            </span>
            <span style={{ fontSize: 13, color: T.muted }}>às {nextPrayer.time}</span>
          </div>
        </div>
      ) : null}

      <p style={{ fontSize: 12, color: T.muted, marginTop: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
        Ver todos os horários <ArrowRight size={12} />
      </p>
    </Link>
  )
}

// ── QIBLA WIDGET ─────────────────────────────────────────────────────────────

function QiblaWidget() {
  const { lat, lng, loading } = useLocation()
  const direction = loading ? 0 : Math.round(calculateQibla(lat, lng))

  return (
    <Link
      href="/a-presenca/salah"
      style={{
        display: 'block',
        padding: '24px',
        borderRadius: 16,
        border: `1px solid ${T.border}`,
        background: T.surface,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'rgba(201,168,76,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Compass size={18} style={{ color: T.gold }} />
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: T.text, margin: 0 }}>
          Direção da Qibla
        </p>
      </div>

      {/* Mini compass */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', width: 80, height: 80 }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke={T.border} strokeWidth="1" />
            <text x="40" y="14" textAnchor="middle" fill={T.gold} fontSize="10" fontWeight="700">N</text>
            <text x="40" y="74" textAnchor="middle" fill={T.muted} fontSize="8">S</text>
            <text x="72" y="43" textAnchor="middle" fill={T.muted} fontSize="8">E</text>
            <text x="8" y="43" textAnchor="middle" fill={T.muted} fontSize="8">O</text>
            <g transform={`rotate(${direction} 40 40)`}>
              <line x1="40" y1="40" x2="40" y2="14" stroke={T.gold} strokeWidth="2" strokeLinecap="round" />
              <polygon points="40,10 37,18 43,18" fill={T.gold} />
            </g>
            <circle cx="40" cy="40" r="3" fill={T.gold} />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: 32, fontWeight: 700, color: T.gold, fontFamily: 'var(--font-serif)', margin: 0 }}>
            {loading ? '...' : `${direction}°`}
          </p>
          <p style={{ fontSize: 13, color: T.muted, margin: 0 }}>do Norte</p>
        </div>
      </div>

      <p style={{ fontSize: 12, color: T.muted, marginTop: 16, display: 'flex', alignItems: 'center', gap: 4 }}>
        Abrir bússola completa <ArrowRight size={12} />
      </p>
    </Link>
  )
}

// ── TOOL CARD ────────────────────────────────────────────────────────────────

function ToolCard({ tool }: { tool: KalamTool }) {
  const cat = TOOL_CATEGORIES[tool.category]
  const Icon = ICON_MAP[tool.icon] || Sparkles
  const isAvailable = tool.status === 'available'

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '20px',
        borderRadius: 12,
        border: `1px solid ${T.border}`,
        background: T.surface,
        height: '100%',
        opacity: isAvailable ? 1 : 0.55,
        transition: 'all 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: 'rgba(201,168,76,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: T.gold,
          }}
        >
          <Icon size={20} />
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              color: cat.color,
              background: cat.bg,
            }}
          >
            {cat.label}
          </span>
          {!isAvailable && (
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                fontSize: 10,
                fontWeight: 600,
                color: T.muted,
                background: 'rgba(122,120,112,0.12)',
              }}
            >
              Em breve
            </span>
          )}
        </div>
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 16,
            fontWeight: 600,
            color: T.text,
            marginBottom: 4,
          }}
        >
          {tool.name}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.5, color: T.muted, margin: 0 }}>
          {tool.description}
        </p>
      </div>
    </div>
  )

  if (isAvailable && tool.href) {
    return (
      <Link href={tool.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {content}
      </Link>
    )
  }

  return content
}
