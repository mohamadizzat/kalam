'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { sixPillarsFaithKids } from '@/lib/data/kids/six-pillars-faith-kids'

export function PilaresFaithKidsClient() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedFaithPillars = progress?.completedFaithPillars ?? []

  function toggle(id: number) {
    setExpandedPillar((prev) => (prev === id ? null : id))
  }

  function handleComplete(slug: string) {
    const updated = markComplete('completedFaithPillars', slug, 2)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="💎"
          title="Pilares da Fe"
          subtitle="As 6 crencas essenciais do Islam"
          backHref="/kids"
          color="#A78BFA"
          stars={stars}
        />

        {/* Pillar cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>

          {showStars && <KidsStarBurst />}

          {sixPillarsFaithKids.map((pillar, i) => {
            const isExpanded = expandedPillar === pillar.id
            const isCompleted = completedFaithPillars.includes(pillar.slug)

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (i + 1) }}
                style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${isExpanded ? `${pillar.color}40` : '#272230'}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggle(pillar.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${pillar.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    {pillar.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {pillar.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '13px',
                      color: `${pillar.color}70`,
                    }}>
                      {pillar.arabicName}
                    </p>
                  </div>
                  {isCompleted && <span style={{ fontSize: '14px' }}>✅</span>}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <ChevronDown size={18} color="#7A7870" />
                  </motion.span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 18px 18px', borderTop: '1px solid #272230' }}>
                        {/* Summary */}
                        <p style={{
                          fontSize: '14px',
                          color: '#B3B0A6',
                          lineHeight: 1.6,
                          marginTop: '16px',
                          marginBottom: '16px',
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {pillar.summary}
                        </p>

                        {/* Details cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                          {pillar.details.map((detail, j) => (
                            <div key={j} style={{
                              display: 'flex',
                              gap: '12px',
                              padding: '12px',
                              borderRadius: '12px',
                              background: '#1C1828',
                            }}>
                              <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>
                                {detail.emoji}
                              </span>
                              <div>
                                <p style={{
                                  fontSize: '14px',
                                  fontWeight: 600,
                                  color: '#F0EBE2',
                                  marginBottom: '2px',
                                  fontFamily: 'var(--font-sans)',
                                }}>
                                  {detail.title}
                                </p>
                                <p style={{
                                  fontSize: '13px',
                                  color: '#B3B0A6',
                                  lineHeight: 1.4,
                                  fontFamily: 'var(--font-sans)',
                                }}>
                                  {detail.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Reflection */}
                        <div style={{
                          padding: '14px 16px',
                          borderRadius: '12px',
                          background: `${pillar.color}08`,
                          border: `1px solid ${pillar.color}15`,
                          marginBottom: '16px',
                        }}>
                          <p style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: pillar.color,
                            marginBottom: '4px',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            🤔 Para Refletir
                          </p>
                          <p style={{
                            fontSize: '13px',
                            color: '#B3B0A6',
                            lineHeight: 1.5,
                            fontStyle: 'italic',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            {pillar.reflection}
                          </p>
                        </div>

                        {/* Verse */}
                        <div style={{
                          padding: '16px',
                          borderRadius: '12px',
                          background: '#1C1828',
                          textAlign: 'center',
                          marginBottom: '16px',
                        }}>
                          <p style={{
                            fontFamily: 'var(--font-arabic)',
                            fontSize: '24px',
                            color: pillar.color,
                            direction: 'rtl',
                            lineHeight: 1.8,
                            marginBottom: '8px',
                          }}>
                            {pillar.verse.arabic}
                          </p>
                          <p style={{
                            fontSize: '13px',
                            color: '#F0EBE2',
                            fontStyle: 'italic',
                            marginBottom: '4px',
                            lineHeight: 1.5,
                            fontFamily: 'var(--font-sans)',
                          }}>
                            &ldquo;{pillar.verse.translation}&rdquo;
                          </p>
                          <p style={{
                            fontSize: '11px',
                            color: '#7A7870',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            — {pillar.verse.reference}
                          </p>
                        </div>

                        {/* Complete button */}
                        {!isCompleted ? (
                          <button
                            onClick={() => handleComplete(pillar.slug)}
                            style={{
                              width: '100%',
                              padding: '12px',
                              borderRadius: '12px',
                              background: `${pillar.color}15`,
                              border: `1px solid ${pillar.color}30`,
                              color: pillar.color,
                              fontSize: '14px',
                              fontWeight: 500,
                              cursor: 'pointer',
                              fontFamily: 'var(--font-sans)',
                              transition: 'background 0.2s ease',
                            }}
                          >
                            Completar ⭐
                          </button>
                        ) : (
                          <p style={{
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#45B7A0',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            ✅ Completo!
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  )
}
