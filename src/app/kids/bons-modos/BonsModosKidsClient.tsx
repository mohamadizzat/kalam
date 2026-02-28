'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { adabKids } from '@/lib/data/kids/adab-kids'

export function BonsModosKidsClient() {
  const [expandedAdab, setExpandedAdab] = useState<number | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedAdab = progress?.completedAdab ?? []
  const allCompleted = completedAdab.length >= adabKids.length

  function toggle(id: number) {
    setExpandedAdab((prev) => (prev === id ? null : id))
  }

  function handleComplete(slug: string) {
    const updated = markComplete('completedAdab', slug, 2)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="🌟"
          title="Bons Modos"
          subtitle="12 boas maneiras que o Islam nos ensina!"
          backHref="/kids"
          color="#FF8C42"
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
            {completedAdab.length} de {adabKids.length} bons modos completos
          </p>
          <div style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '4px',
          }}>
            {adabKids.map((a) => (
              <div
                key={a.id}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: completedAdab.includes(a.slug) ? a.color : '#272230',
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
                background: 'linear-gradient(135deg, #FF8C4210, #FFD93D10)',
                border: '1px solid #FF8C4230',
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
                Parabens! Voce aprendeu todos os 12 Bons Modos!
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#B3B0A6',
                lineHeight: 1.5,
              }}>
                Agora pratique todos os dias e seja um exemplo para os outros. Que Allah te abencoe!
              </p>
              {showStars && <KidsStarBurst />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Adab accordion list */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          position: 'relative',
        }}>
          {showStars && !allCompleted && <KidsStarBurst />}

          {adabKids.map((adab, index) => {
            const isExpanded = expandedAdab === adab.id
            const isCompleted = completedAdab.includes(adab.slug)

            return (
              <motion.div
                key={adab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (index + 1) }}
                style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${isExpanded ? `${adab.color}40` : '#272230'}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggle(adab.id)}
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
                    background: `${adab.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    {adab.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {adab.title}
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
                          {adab.summary}
                        </p>

                        {/* How to practice */}
                        <div style={{ marginBottom: '16px' }}>
                          <p style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: '#7A7870',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '10px',
                          }}>
                            Como praticar
                          </p>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                          }}>
                            {adab.howTo.map((step, i) => (
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
                                  background: `${adab.color}15`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '14px',
                                  fontWeight: 700,
                                  color: adab.color,
                                  flexShrink: 0,
                                }}>
                                  {i + 1}
                                </div>
                                <p style={{
                                  fontSize: '13px',
                                  color: '#B3B0A6',
                                  lineHeight: 1.5,
                                  fontFamily: 'var(--font-sans)',
                                  alignSelf: 'center',
                                }}>
                                  {step}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hadith or Verse quote */}
                        <div style={{
                          padding: '16px',
                          borderRadius: '12px',
                          background: '#1C1828',
                          textAlign: 'center',
                          marginBottom: '16px',
                        }}>
                          <p style={{
                            fontSize: '15px',
                            color: '#F0EBE2',
                            fontStyle: 'italic',
                            marginBottom: '8px',
                            lineHeight: 1.6,
                            fontFamily: 'var(--font-serif)',
                          }}>
                            &ldquo;{adab.hadithOrVerse}&rdquo;
                          </p>
                          <p style={{
                            fontSize: '11px',
                            color: '#7A7870',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            — {adab.source}
                          </p>
                        </div>

                        {/* Activity box */}
                        <div style={{
                          padding: '14px 16px',
                          borderRadius: '12px',
                          background: `${adab.color}08`,
                          border: `1px solid ${adab.color}15`,
                          marginBottom: '16px',
                        }}>
                          <p style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: adab.color,
                            marginBottom: '4px',
                            fontFamily: 'var(--font-sans)',
                          }}>
                            🎯 Atividade
                          </p>
                          <p style={{
                            fontSize: '13px',
                            color: '#B3B0A6',
                            lineHeight: 1.5,
                            fontFamily: 'var(--font-sans)',
                          }}>
                            {adab.activity}
                          </p>
                        </div>

                        {/* Complete button */}
                        {!isCompleted ? (
                          <button
                            onClick={() => handleComplete(adab.slug)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              padding: '12px',
                              borderRadius: '12px',
                              background: `${adab.color}15`,
                              border: `1px solid ${adab.color}30`,
                              color: adab.color,
                              fontSize: '14px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              fontFamily: 'var(--font-sans)',
                              transition: 'background 0.2s ease',
                            }}
                          >
                            <span>⭐</span>
                            <span>Aprendi! (+2 estrelas)</span>
                          </button>
                        ) : (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '12px',
                            borderRadius: '12px',
                            background: `${adab.color}10`,
                            border: `1px solid ${adab.color}20`,
                          }}>
                            <span style={{ fontSize: '14px' }}>✅</span>
                            <span style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '14px',
                              fontWeight: 600,
                              color: adab.color,
                            }}>
                              Completo!
                            </span>
                          </div>
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
