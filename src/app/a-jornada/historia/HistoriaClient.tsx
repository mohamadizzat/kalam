'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { timeline, categoryLabels, categoryColors } from '@/lib/data/history-timeline'
import type { TimelineEvent } from '@/lib/data/history-timeline'
import { BlurFade } from '@/components/effects/BlurFade'

const categories: Array<TimelineEvent['category'] | 'all'> = ['all', 'prophet', 'expansion', 'knowledge', 'culture', 'modern']

const categoryFilterLabels: Record<string, string> = {
  all: 'Todos',
  prophet: 'Profeta',
  expansion: 'Expansao',
  knowledge: 'Conhecimento',
  culture: 'Cultura',
  modern: 'Moderno',
}

export default function HistoriaClient() {
  const [filter, setFilter] = useState<TimelineEvent['category'] | 'all'>('all')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filtered = filter === 'all' ? timeline : timeline.filter(e => e.category === filter)

  return (
    <div style={{ minHeight: '100vh', background: '#0D0B12', paddingTop: 64 }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(48px, 6vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          {/* Back link */}
          <BlurFade delay={0}>
            <Link href="/a-jornada" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#7A7870',
              textDecoration: 'none',
              marginBottom: 32,
            }}>
              <ArrowLeft size={14} />
              A Jornada
            </Link>
          </BlurFade>

          {/* Eyebrow */}
          <BlurFade delay={0.05}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              Historia do Islam
            </p>
          </BlurFade>

          {/* Arabic */}
          <BlurFade delay={0.1}>
            <div style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(42px, 7vw, 72px)',
              color: '#C9A84C',
              direction: 'rtl',
              marginBottom: 24,
              lineHeight: 1.2,
              textShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1)',
            }}>
              التاريخ
            </div>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 20,
            }}>
              Linha do{' '}
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                Tempo
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#B3B0A6',
              maxWidth: 560,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              De uma caverna no deserto ate 1.8 bilhao de pessoas. Catorze seculos de revelacao,
              conhecimento, imperio e legado — numa unica linha.
            </p>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.4}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section style={{ padding: '0 24px 48px' }}>
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
        }}>
          {categories.map(cat => {
            const isActive = filter === cat
            const color = cat === 'all' ? '#C9A84C' : categoryColors[cat]
            return (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setExpandedIndex(null) }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: isActive ? color : '#7A7870',
                  background: isActive ? `${color}10` : 'transparent',
                  border: `1px solid ${isActive ? `${color}40` : '#272230'}`,
                  borderRadius: 6,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {categoryFilterLabels[cat]}
              </button>
            )
          })}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, rgba(201,168,76,0.3), #272230 30%, #272230 70%, rgba(201,168,76,0.3))',
          }} />

          {/* Events */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {filtered.map((event, i) => {
              const isExpanded = expandedIndex === i
              const dotColor = event.significance === 'high'
                ? '#C9A84C'
                : '#7A7870'
              const catColor = categoryColors[event.category]

              return (
                <motion.div
                  key={`${event.year}-${event.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.3), ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ position: 'relative', paddingLeft: 56, paddingBottom: 8, paddingTop: 8 }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: event.significance === 'high' ? 17 : 19,
                    top: 16,
                    width: event.significance === 'high' ? 16 : 12,
                    height: event.significance === 'high' ? 16 : 12,
                    borderRadius: '50%',
                    background: dotColor,
                    border: event.significance === 'high'
                      ? '3px solid #0D0B12'
                      : '2px solid #0D0B12',
                    boxShadow: event.significance === 'high'
                      ? `0 0 12px ${dotColor}50`
                      : 'none',
                    zIndex: 2,
                  }} />

                  {/* Card */}
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    style={{
                      padding: '20px 24px',
                      borderRadius: 12,
                      background: isExpanded ? '#161220' : 'transparent',
                      border: isExpanded ? '1px solid #272230' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Year + Category */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 8,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '1px',
                        color: event.significance === 'high' ? '#C9A84C' : '#7A7870',
                      }}>
                        {event.year} {event.era}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 9,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: catColor,
                        background: `${catColor}10`,
                        border: `1px solid ${catColor}25`,
                        borderRadius: 3,
                        padding: '2px 8px',
                      }}>
                        {categoryLabels[event.category]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#F0EBE2',
                      lineHeight: 1.3,
                      marginBottom: isExpanded ? 12 : 0,
                    }}>
                      {event.title}
                    </h3>

                    {/* Description (expand) */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: 14,
                            lineHeight: 1.8,
                            color: '#B3B0A6',
                          }}>
                            {event.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM ── */}
      <section style={{
        padding: 'clamp(32px, 4vw, 48px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 40,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#B3B0A6',
            maxWidth: 500,
            margin: '0 auto 32px',
            lineHeight: 1.6,
          }}>
            Catorze seculos. Uma mensagem.
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <Link
            href="/a-jornada"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 2,
              padding: '14px 36px',
              transition: 'all 0.3s ease',
            }}
          >
            Voltar a Jornada
          </Link>
        </BlurFade>
      </section>
    </div>
  )
}
