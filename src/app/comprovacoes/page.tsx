'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, Scale, Filter } from 'lucide-react'
import { scriptureProofs, CATEGORY_META, type ScriptureProof } from '@/lib/data/scripture-proofs'
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

// ── SOURCE BADGE COLORS ──────────────────────────────────────────────────────

const SOURCE_COLORS: Record<string, { color: string; bg: string }> = {
  Torah: { color: '#7BA3E2', bg: 'rgba(123,163,226,0.12)' },
  Salmos: { color: '#B07BE2', bg: 'rgba(176,123,226,0.12)' },
  Evangelhos: { color: '#E27B7B', bg: 'rgba(226,123,123,0.12)' },
  Profetas: { color: '#E2A04C', bg: 'rgba(226,160,76,0.12)' },
}

// ── FILTER CONFIG ────────────────────────────────────────────────────────────

type FilterType = 'all' | ScriptureProof['category']

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'monotheism', label: 'Monoteismo' },
  { key: 'prophets', label: 'Profetas' },
  { key: 'jesus', label: 'Jesus' },
  { key: 'morality', label: 'Moralidade' },
  { key: 'afterlife', label: 'Vida Apos a Morte' },
  { key: 'creation', label: 'Criacao' },
  { key: 'prayer', label: 'Oracao' },
  { key: 'prophecy', label: 'Profecia' },
]

// ── PROOF CARD ───────────────────────────────────────────────────────────────

function ProofCard({ proof, index }: { proof: ScriptureProof; index: number }) {
  const cat = CATEGORY_META[proof.category]

  return (
    <SectionReveal delay={index * 0.04}>
      <div
        style={{
          border: `1px solid ${T.border}`,
          borderRadius: 14,
          overflow: 'hidden',
          background: T.surface,
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = T.border
        }}
      >
        {/* Header */}
        <div style={{ padding: '20px 22px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '3px 12px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.03em',
                color: cat.color,
                background: cat.bg,
              }}
            >
              {cat.label}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 19,
              fontWeight: 700,
              color: T.text,
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {proof.title}
          </h3>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: T.secondary,
              margin: 0,
            }}
          >
            {proof.summary}
          </p>
        </div>

        {/* Quran + Scripture columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 0,
          }}
        >
          {/* Quran Verse */}
          <div
            style={{
              padding: '18px 22px',
              borderTop: `1px solid ${T.border}`,
              background: 'rgba(110,203,138,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 20,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase' as const,
                  color: '#6ECB8A',
                  background: 'rgba(110,203,138,0.12)',
                }}
              >
                Quran
              </span>
              <span style={{ fontSize: 12, color: T.muted }}>{proof.quranVerse.reference}</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-arabic, "Amiri", serif)',
                fontSize: 20,
                lineHeight: 2,
                color: T.text,
                textAlign: 'right' as const,
                direction: 'rtl' as const,
                marginBottom: 10,
              }}
            >
              {proof.quranVerse.arabic}
            </p>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: T.secondary,
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;{proof.quranVerse.translation}&rdquo;
            </p>
          </div>

          {/* Scripture Parallels */}
          <div
            style={{
              padding: '18px 22px',
              borderTop: `1px solid ${T.border}`,
              background: 'rgba(123,163,226,0.02)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {proof.scriptureParallels.map((parallel, i) => {
                const sc = SOURCE_COLORS[parallel.source] || SOURCE_COLORS.Torah
                return (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span
                        style={{
                          padding: '3px 10px',
                          borderRadius: 20,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase' as const,
                          color: sc.color,
                          background: sc.bg,
                        }}
                      >
                        {parallel.source}
                      </span>
                      <span style={{ fontSize: 12, color: T.muted }}>
                        {parallel.book} {parallel.reference}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: T.secondary,
                        fontStyle: 'italic',
                        margin: 0,
                      }}
                    >
                      &ldquo;{parallel.text}&rdquo;
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Convergence + Nuance Footer */}
        <div
          style={{
            padding: '18px 22px',
            borderTop: `1px solid ${T.border}`,
            background: 'rgba(201,168,76,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Scale
              size={16}
              style={{
                color: T.gold,
                marginTop: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: T.text,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {proof.convergenceNote}
              </p>

              {proof.nuanceNote && (
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: T.muted,
                    margin: '10px 0 0',
                    paddingTop: 10,
                    borderTop: `1px solid rgba(39,34,48,0.6)`,
                    fontStyle: 'italic',
                  }}
                >
                  Nuance: {proof.nuanceNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function ComprovacoesPage() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered =
    filter === 'all'
      ? scriptureProofs
      : scriptureProofs.filter((p) => p.category === filter)

  const categories = Object.keys(CATEGORY_META)

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
              Inicio
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
              O Fio que Conecta as{' '}
              <span style={{ color: T.gold }}>Escrituras</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: T.secondary,
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              Versiculo por versiculo. Escritura por escritura. As convergencias que a maioria nunca viu — e as divergencias que o Kalam nao esconde.
            </p>
          </BlurFade>
        </div>
      </section>

      <GoldDivider />

      {/* ── TRANSPARENCY NOTE ──────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <SectionReveal>
          <div
            style={{
              padding: '24px 28px',
              borderRadius: 14,
              border: `1px solid rgba(201,168,76,0.2)`,
              background: 'rgba(201,168,76,0.04)',
              marginBottom: 40,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <BookOpen
                size={20}
                style={{
                  color: T.gold,
                  marginTop: 2,
                  flexShrink: 0,
                }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: T.gold,
                    marginBottom: 8,
                  }}
                >
                  Nota de transparencia
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: T.secondary,
                    margin: 0,
                  }}
                >
                  Cada paralelo aqui e verificavel. Incluimos a referencia exata de cada versiculo para que voce possa conferir nas fontes originais. Onde ha convergencia, mostramos. Onde ha divergencia, explicamos com honestidade. Nenhuma tradicao e simplificada para caber na outra.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── STATS BAR ────────────────────────────────────────── */}
        <SectionReveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
              marginBottom: 40,
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '30', label: 'Paralelos' },
              { value: '4', label: 'Escrituras' },
              { value: '8', label: 'Categorias' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 28,
                    fontWeight: 700,
                    color: T.gold,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    margin: '6px 0 0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* ── FILTER TABS ──────────────────────────────────────── */}
        <SectionReveal delay={0.15}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            <Filter size={14} style={{ color: T.muted, flexShrink: 0 }} />
            {FILTERS.map(({ key, label }) => {
              const isActive = filter === key
              const catMeta = key !== 'all' ? CATEGORY_META[key] : null

              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 20,
                    border: `1px solid ${isActive ? (catMeta?.color || T.gold) : T.border}`,
                    background: isActive
                      ? (catMeta?.bg || 'rgba(201,168,76,0.10)')
                      : 'transparent',
                    color: isActive ? (catMeta?.color || T.gold) : T.muted,
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </SectionReveal>

        {/* ── PROOFS GRID ──────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: 20,
              marginBottom: 80,
            }}
          >
            {/* Responsive: 2 cols on desktop via CSS media query workaround with max-width */}
            <style>{`
              @media (min-width: 768px) {
                .comprovacoes-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
            `}</style>
            <div
              className="comprovacoes-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 20,
              }}
            >
              {filtered.map((proof, i) => (
                <ProofCard key={proof.id} proof={proof} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: T.muted,
                  fontSize: 14,
                }}
              >
                Nenhuma comprovacao nesta categoria.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

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
              As escrituras convergem mais do que divergem.
            </p>
            <p
              style={{
                fontSize: 14,
                color: T.muted,
                marginBottom: 24,
              }}
            >
              Explore a ponte entre as tradicoes e conheca os profetas que as conectam.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/a-ponte"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.10)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  color: T.gold,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                A Ponte
              </Link>
              <Link
                href="/os-profetas"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.10)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  color: T.gold,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                Os Profetas
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
