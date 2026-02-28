'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { KidsHeader, KidsArabicWord, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { fivePillarsKids } from '@/lib/data/kids/five-pillars-kids'

export function PilaresIslamKidsClient() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedPillars = progress?.completedPillars ?? []
  const allCompleted = completedPillars.length >= fivePillarsKids.length

  const toggle = (id: number) => {
    setExpandedPillar((prev) => (prev === id ? null : id))
  }

  const handleComplete = (slug: string) => {
    const updated = markComplete('completedPillars', slug, 2)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="🕌"
          title="Pilares do Islam"
          subtitle="Os 5 fundamentos da nossa fe"
          backHref="/kids"
          color="#4ECDC4"
          stars={stars}
        />

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <span style={{ fontSize: '16px' }}>📊</span>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: '#B3B0A6',
          }}>
            {completedPillars.length} de {fivePillarsKids.length} pilares completos
          </p>
          <div style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '4px',
          }}>
            {fivePillarsKids.map((p) => (
              <div
                key={p.id}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: completedPillars.includes(p.slug) ? p.color : '#272230',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* All completed celebration */}
        <AnimatePresence>
          {allCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #4ECDC410, #FFD93D10)',
                border: '1px solid #4ECDC430',
                marginBottom: '24px',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: '36px', display: 'block', marginBottom: '8px' }}>🏆</span>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#F0EBE2',
                marginBottom: '4px',
              }}>
                Parabens! Voce completou todos os 5 Pilares!
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#B3B0A6',
                lineHeight: 1.5,
              }}>
                Agora voce conhece os fundamentos do Islam. Que Allah te abencoe nessa jornada!
              </p>
              {showStars && <KidsStarBurst />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pillars accordion list */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {fivePillarsKids.map((pillar, index) => {
            const isExpanded = expandedPillar === pillar.id
            const isCompleted = completedPillars.includes(pillar.slug)

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${pillar.color}25`,
                  overflow: 'hidden',
                }}>
                  {/* Header - clickable */}
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

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '0 18px 18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}>
                          {/* Divider */}
                          <div style={{
                            height: '1px',
                            background: `${pillar.color}15`,
                          }} />

                          {/* Title + Summary */}
                          <div>
                            <p style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '18px',
                              fontWeight: 700,
                              color: pillar.color,
                              marginBottom: '8px',
                            }}>
                              {pillar.title}
                            </p>
                            <p style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '14px',
                              color: '#B3B0A6',
                              lineHeight: 1.6,
                            }}>
                              {pillar.summary}
                            </p>
                          </div>

                          {/* Steps section */}
                          <div>
                            <p style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#7A7870',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              marginBottom: '10px',
                            }}>
                              Passo a passo
                            </p>
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                            }}>
                              {pillar.steps.map((step, i) => (
                                <div
                                  key={i}
                                  style={{
                                    display: 'flex',
                                    gap: '12px',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    background: '#1C1828',
                                  }}
                                >
                                  <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: `${pillar.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    color: pillar.color,
                                    flexShrink: 0,
                                  }}>
                                    {step.step}
                                  </div>
                                  <div>
                                    <p style={{
                                      fontSize: '14px',
                                      fontWeight: 600,
                                      color: '#F0EBE2',
                                      marginBottom: '2px',
                                    }}>
                                      {step.emoji} {step.title}
                                    </p>
                                    <p style={{
                                      fontSize: '13px',
                                      color: '#B3B0A6',
                                      lineHeight: 1.4,
                                    }}>
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Fun fact box */}
                          <div style={{
                            padding: '14px 16px',
                            borderRadius: '12px',
                            background: `${pillar.color}08`,
                            border: `1px solid ${pillar.color}15`,
                          }}>
                            <p style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: pillar.color,
                              marginBottom: '4px',
                            }}>
                              💡 Curiosidade
                            </p>
                            <p style={{
                              fontSize: '13px',
                              color: '#B3B0A6',
                              lineHeight: 1.5,
                            }}>
                              {pillar.funFact}
                            </p>
                          </div>

                          {/* Verse with KidsArabicWord */}
                          <div>
                            <p style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#7A7870',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              marginBottom: '10px',
                            }}>
                              Versiculo
                            </p>
                            <KidsArabicWord
                              arabic={pillar.verse.arabic}
                              transliteration={pillar.verse.reference}
                              translation={pillar.verse.translation}
                              color={pillar.color}
                              size="small"
                            />
                          </div>

                          {/* Complete button */}
                          <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                          }}>
                            {isCompleted ? (
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '14px',
                                background: `${pillar.color}10`,
                                border: `1px solid ${pillar.color}20`,
                              }}>
                                <span style={{ fontSize: '14px' }}>✅</span>
                                <span style={{
                                  fontFamily: 'var(--font-serif)',
                                  fontSize: '14px',
                                  fontWeight: 600,
                                  color: pillar.color,
                                }}>
                                  Pilar completo!
                                </span>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleComplete(pillar.slug)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  padding: '12px 28px',
                                  borderRadius: '14px',
                                  background: pillar.color,
                                  border: 'none',
                                  cursor: 'pointer',
                                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
                                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                              >
                                <span style={{ fontSize: '14px' }}>⭐</span>
                                <span style={{
                                  fontFamily: 'var(--font-serif)',
                                  fontSize: '14px',
                                  fontWeight: 700,
                                  color: '#0D0B12',
                                }}>
                                  Completar (+2 estrelas)
                                </span>
                              </button>
                            )}
                            {showStars && <KidsStarBurst />}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  )
}
