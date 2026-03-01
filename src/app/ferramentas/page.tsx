'use client'

import Link from 'next/link'
import {
  Mic,
  Languages,
  Clock,
  Heart,
  Sun,
  BookMarked,
  PenLine,
  Calendar,
  Sparkles,
  Search,
  Timer,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'

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

// ── TOOLS DATA ───────────────────────────────────────────────────────────────

type ToolCategory = 'Prática' | 'Estudo' | 'Reflexão'

interface ToolItem {
  name: string
  description: string
  href: string
  icon: typeof Mic
  category: ToolCategory
}

const TOOLS: ToolItem[] = [
  {
    name: 'Recitação',
    description: 'Ouça o Quran com áudio de recitadores renomados',
    href: '/a-palavra/recitacao',
    icon: Mic,
    category: 'Estudo',
  },
  {
    name: 'Flashcards',
    description: 'Aprenda os 99 Nomes de Allah com cartões interativos',
    href: '/a-presenca/flashcards',
    icon: Languages,
    category: 'Prática',
  },
  {
    name: 'Dhikr',
    description: 'Contador de repetições com vibração e metas diárias',
    href: '/a-presenca/dhikr',
    icon: Clock,
    category: 'Prática',
  },
  {
    name: 'Duas',
    description: 'Súplicas categorizadas com áudio e transliteração',
    href: '/a-presenca/duas',
    icon: Heart,
    category: 'Prática',
  },
  {
    name: 'Salah',
    description: 'Guia completo de oração com passos ilustrados',
    href: '/a-presenca/salah',
    icon: Sun,
    category: 'Prática',
  },
  {
    name: 'Hifz',
    description: 'Memorização do Quran com repetição espaçada',
    href: '/a-palavra/hifz',
    icon: BookMarked,
    category: 'Estudo',
  },
  {
    name: 'Journal',
    description: 'Diário espiritual para reflexões e gratidão',
    href: '/a-alma/journal',
    icon: PenLine,
    category: 'Reflexão',
  },
  {
    name: 'Plano Diário',
    description: 'Monte sua rotina de práticas espirituais',
    href: '/a-jornada/plano-diario',
    icon: Calendar,
    category: 'Reflexão',
  },
  {
    name: 'Quiz Kids',
    description: 'Quiz divertido e educativo para crianças',
    href: '/kids/quiz',
    icon: Sparkles,
    category: 'Estudo',
  },
  {
    name: 'Busca no Quran',
    description: 'Pesquise versículos por tema, surata ou palavra-chave',
    href: '/a-palavra/busca',
    icon: Search,
    category: 'Estudo',
  },
  {
    name: 'Contemplativo',
    description: 'Mixer de áudio com binaural beats, ambient e modos de foco',
    href: '/contemplativo',
    icon: Sparkles,
    category: 'Prática',
  },
]

// ── BADGE COLORS ─────────────────────────────────────────────────────────────

const BADGE: Record<ToolCategory, { color: string; bg: string }> = {
  Prática: { color: '#C9A84C', bg: 'rgba(201,168,76,0.10)' },
  Estudo: { color: '#7BADE2', bg: 'rgba(123,173,226,0.10)' },
  Reflexão: { color: '#B38BDB', bg: 'rgba(179,139,219,0.10)' },
}

// ── ROUTINES ─────────────────────────────────────────────────────────────────

interface Routine {
  time: string
  label: string
  description: string
  steps: { name: string; href: string }[]
  icon: typeof Timer
}

const ROUTINES: Routine[] = [
  {
    time: '5 min',
    label: 'Rápida',
    description: 'Verso do dia + dhikr rápido',
    steps: [
      { name: 'Aya do Dia', href: '/aya-do-dia' },
      { name: 'Dhikr', href: '/a-presenca/dhikr' },
    ],
    icon: Timer,
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
    icon: Timer,
  },
  {
    time: '1 hora',
    label: 'Completa',
    description: 'Trilha + estudo + plano diário',
    steps: [
      { name: 'Trilhas', href: '/trilhas' },
      { name: 'Estudo', href: '/a-palavra/estudo' },
      { name: 'Plano Diário', href: '/a-jornada/plano-diario' },
    ],
    icon: Timer,
  },
]

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function FerramentasPage() {
  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 60px',
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
                marginBottom: 16,
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
                margin: '0 auto',
              }}
            >
              Tudo que você precisa para estudar, praticar e refletir — em um só lugar.
            </p>
          </BlurFade>
        </div>
      </section>

      <GoldDivider />

      {/* ── TOOLS GRID ───────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {TOOLS.map((tool, i) => (
            <SectionReveal key={tool.href} delay={i * 0.04}>
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
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
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
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: T.text,
                    }}
                  >
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

// ── TOOL CARD ────────────────────────────────────────────────────────────────

function ToolCard({ tool }: { tool: ToolItem }) {
  const badge = BADGE[tool.category]
  const Icon = tool.icon

  return (
    <Link
      href={tool.href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '20px',
        borderRadius: 12,
        border: `1px solid ${T.border}`,
        background: T.surface,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = T.border
        e.currentTarget.style.transform = 'translateY(0)'
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
        <span
          style={{
            padding: '3px 10px',
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 600,
            color: badge.color,
            background: badge.bg,
          }}
        >
          {tool.category}
        </span>
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
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: T.muted,
            margin: 0,
          }}
        >
          {tool.description}
        </p>
      </div>
    </Link>
  )
}
