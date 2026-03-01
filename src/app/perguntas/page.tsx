'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft, AlertTriangle, HelpCircle, BookOpen } from 'lucide-react'
import { hardQuestionsData } from '@/content/hardQuestions'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── DIFFICULTY CONFIG ────────────────────────────────────────────────────────

const DIFFICULTY = {
  high: { label: 'Alta', color: '#C9A84C', bg: 'rgba(201,168,76,0.12)' },
  medium: { label: 'Média', color: '#B3B0A6', bg: 'rgba(179,176,166,0.10)' },
  low: { label: 'Baixa', color: '#6ECB8A', bg: 'rgba(110,203,138,0.10)' },
} as const

type DifficultyLevel = keyof typeof DIFFICULTY
type FilterType = 'all' | DifficultyLevel

// ── ACCORDION ITEM ───────────────────────────────────────────────────────────

function QuestionItem({
  question,
  directAnswer,
  context,
  islamicScholarship,
  honestConclusion,
  difficulty,
  index,
  isOpen,
  onToggle,
}: {
  question: string
  directAnswer: string
  context: string
  islamicScholarship: string
  honestConclusion: string
  difficulty: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const diff = DIFFICULTY[difficulty as DifficultyLevel] || DIFFICULTY.medium
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(section)) next.delete(section)
      else next.add(section)
      return next
    })
  }

  return (
    <SectionReveal delay={index * 0.05}>
      <div
        style={{
          border: `1px solid ${isOpen ? 'rgba(201,168,76,0.2)' : T.border}`,
          borderRadius: 12,
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
          background: isOpen ? 'rgba(22,18,32,0.6)' : 'transparent',
        }}
      >
        {/* Question header */}
        <button
          onClick={onToggle}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            width: '100%',
            padding: '18px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            color: T.text,
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 28,
              height: 28,
              borderRadius: '50%',
              background: isOpen ? 'rgba(201,168,76,0.12)' : 'rgba(39,34,48,0.5)',
              color: isOpen ? T.gold : T.muted,
              fontSize: 13,
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            {index + 1}
          </span>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 17,
                lineHeight: 1.5,
                color: T.text,
                margin: 0,
              }}
            >
              {question}
            </p>
            <span
              style={{
                display: 'inline-block',
                marginTop: 8,
                padding: '3px 10px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: diff.color,
                background: diff.bg,
              }}
            >
              Dificuldade: {diff.label}
            </span>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              color: isOpen ? T.gold : T.muted,
              marginTop: 2,
              flexShrink: 0,
            }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 20px 24px 60px' }}>
                {/* Direct Answer */}
                <div style={{ marginBottom: 20 }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: T.gold,
                      marginBottom: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <AlertTriangle size={14} />
                    Resposta direta
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: T.text,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {directAnswer}
                  </p>
                </div>

                {/* Collapsible: Context */}
                <CollapsibleSection
                  title="Contexto histórico"
                  icon={<BookOpen size={14} />}
                  content={context}
                  isOpen={expandedSections.has('context')}
                  onToggle={() => toggleSection('context')}
                />

                {/* Collapsible: Scholarship */}
                <CollapsibleSection
                  title="O que dizem os estudiosos"
                  icon={<HelpCircle size={14} />}
                  content={islamicScholarship}
                  isOpen={expandedSections.has('scholarship')}
                  onToggle={() => toggleSection('scholarship')}
                />

                {/* Honest Conclusion — always visible, highlighted */}
                <div
                  style={{
                    marginTop: 16,
                    padding: '16px 18px',
                    borderRadius: 10,
                    borderLeft: `3px solid ${T.gold}`,
                    background: 'rgba(201,168,76,0.04)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: T.gold,
                      marginBottom: 8,
                    }}
                  >
                    Conclusão honesta
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: T.secondary,
                      margin: 0,
                    }}
                  >
                    {honestConclusion}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  )
}

// ── COLLAPSIBLE SECTION ──────────────────────────────────────────────────────

function CollapsibleSection({
  title,
  icon,
  content,
  isOpen,
  onToggle,
}: {
  title: string
  icon: React.ReactNode
  content: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ marginBottom: 8 }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: isOpen ? T.secondary : T.muted,
          fontSize: 13,
          fontWeight: 500,
          padding: '6px 0',
          transition: 'color 0.2s ease',
        }}
      >
        {icon}
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ChevronDown size={12} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: T.muted,
                margin: '4px 0 8px',
                paddingLeft: 20,
              }}
            >
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'high', label: 'Alta' },
  { key: 'medium', label: 'Média' },
  { key: 'low', label: 'Baixa' },
]

export default function PerguntasPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredQuestions =
    filter === 'all'
      ? hardQuestionsData
      : hardQuestionsData.filter((q) => q.difficulty === filter)

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
        {/* Subtle glow */}
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
              O Kalam não foge das
              <br />
              <span style={{ color: T.gold }}>perguntas difíceis.</span>
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
              {hardQuestionsData.length} perguntas. Respostas honestas. Zero simplificação.
            </p>
          </BlurFade>
        </div>
      </section>

      <GoldDivider />

      {/* ── FILTER TABS ──────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <SectionReveal>
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 20,
                  border: `1px solid ${filter === key ? T.gold : T.border}`,
                  background: filter === key ? 'rgba(201,168,76,0.10)' : 'transparent',
                  color: filter === key ? T.gold : T.muted,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* ── QUESTIONS LIST ─────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 80 }}>
          {filteredQuestions.map((q, i) => (
            <QuestionItem
              key={q.id}
              {...q}
              index={i}
              isOpen={openId === q.id}
              onToggle={() => setOpenId(openId === q.id ? null : q.id)}
            />
          ))}

          {filteredQuestions.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: T.muted,
                fontSize: 14,
              }}
            >
              Nenhuma pergunta nesta categoria.
            </div>
          )}
        </div>

        {/* ── FOOTER CTA ─────────────────────────────────────── */}
        <SectionReveal>
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px 80px',
              borderTop: `1px solid ${T.border}`,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                color: T.text,
                marginBottom: 8,
              }}
            >
              Tem uma pergunta que não está aqui?
            </p>
            <p
              style={{
                fontSize: 14,
                color: T.muted,
                marginBottom: 24,
              }}
            >
              Explore mais sobre a mensagem e as conexões entre as tradições.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/a-mensagem"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.10)',
                  border: `1px solid rgba(201,168,76,0.2)`,
                  color: T.gold,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                A Mensagem
              </Link>
              <Link
                href="/a-ponte"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.10)',
                  border: `1px solid rgba(201,168,76,0.2)`,
                  color: T.gold,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                A Ponte
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
