'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { heroesKids } from '@/lib/data/kids/heroes-kids'

export function HeroisKidsClient() {
  const [selectedHero, setSelectedHero] = useState<string | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedHeroes = progress?.completedHeroes ?? []

  const hero = selectedHero ? heroesKids.find((h) => h.slug === selectedHero) : null

  const handleComplete = () => {
    if (!hero) return
    const updated = markComplete('completedHeroes', hero.slug, 2)
    setProgress(updated)
    setShowStars(true)
  }

  const handleBack = () => {
    setSelectedHero(null)
    setShowStars(false)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <AnimatePresence mode="wait">
          {!hero ? (
            /* ── Hero List View ── */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <KidsHeader
                emoji="🦸"
                title="Herois do Islam"
                subtitle="10 grandes personalidades que mudaram o mundo!"
                backHref="/kids"
                color="#FF8C42"
                stars={stars}
              />

              {/* Heroes Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gap: '10px',
              }}>
                {heroesKids.map((h, i) => {
                  const isCompleted = completedHeroes.includes(h.slug)

                  return (
                    <motion.div
                      key={h.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (i + 1) }}
                    >
                      <button
                        onClick={() => setSelectedHero(h.slug)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '16px',
                          borderRadius: '16px',
                          background: '#161220',
                          border: `1px solid ${h.color}25`,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'border-color 0.2s ease',
                        }}
                      >
                        {/* Emoji circle */}
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '14px',
                          background: `${h.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          flexShrink: 0,
                        }}>
                          {h.emoji}
                        </div>

                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#F0EBE2',
                          }}>
                            {h.name}
                          </p>
                          <p style={{
                            fontSize: '12px',
                            color: '#7A7870',
                            marginTop: '2px',
                          }}>
                            {h.title}
                          </p>
                        </div>

                        {/* Arabic name */}
                        <span style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: '14px',
                          color: `${h.color}60`,
                        }}>
                          {h.arabicName}
                        </span>

                        {/* Completed checkmark */}
                        {isCompleted && (
                          <span style={{ fontSize: '14px', flexShrink: 0 }}>✅</span>
                        )}
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            /* ── Hero Detail View ── */
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Back button */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <button
                  onClick={handleBack}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#7A7870',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                    marginBottom: '20px',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = hero.color }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#7A7870' }}
                >
                  <ArrowLeft size={14} />
                  Voltar
                </button>
              </motion.div>

              {/* Hero emoji */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                style={{ marginBottom: '12px' }}
              >
                <span style={{ fontSize: '48px', display: 'block' }}>{hero.emoji}</span>
              </motion.div>

              {/* Hero name */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#F0EBE2',
                  lineHeight: 1.2,
                  marginBottom: '4px',
                }}
              >
                {hero.name}
              </motion.h1>

              {/* Arabic name */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '18px',
                  color: `${hero.color}80`,
                  marginBottom: '14px',
                }}
              >
                {hero.arabicName}
              </motion.p>

              {/* Era + title badges */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px',
                }}
              >
                <span style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: hero.color,
                  background: `${hero.color}12`,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  border: `1px solid ${hero.color}20`,
                }}>
                  {hero.title}
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#B3B0A6',
                  background: '#272230',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  border: '1px solid #32293E',
                }}>
                  {hero.era}
                </span>
              </motion.div>

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
                style={{
                  fontSize: '14px',
                  color: '#B3B0A6',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                  padding: '16px',
                  borderRadius: '14px',
                  background: '#161220',
                  border: `1px solid ${hero.color}10`,
                }}
              >
                {hero.summary}
              </motion.p>

              {/* Qualities section */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                style={{ marginBottom: '28px' }}
              >
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#7A7870',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}>
                  Qualidades
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {hero.qualities.map((q, i) => (
                    <span key={i} style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: hero.color,
                      background: `${hero.color}12`,
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: `1px solid ${hero.color}20`,
                    }}>
                      {q}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Story section */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
                style={{ marginBottom: '36px' }}
              >
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#7A7870',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '14px',
                }}>
                  A Historia
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  {hero.story.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
                      style={{
                        padding: '20px',
                        borderRadius: '16px',
                        background: '#161220',
                        border: `1px solid ${hero.color}10`,
                      }}
                    >
                      <p style={{
                        fontSize: '14px',
                        color: '#B3B0A6',
                        lineHeight: 1.7,
                      }}>
                        {p}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Complete Button / Completed Message */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + hero.story.length * 0.1 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {completedHeroes.includes(hero.slug) ? (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    background: `${hero.color}10`,
                    border: `1px solid ${hero.color}20`,
                  }}>
                    <span style={{ fontSize: '16px' }}>✅</span>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: hero.color,
                    }}>
                      Heroi completo!
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={handleComplete}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 32px',
                      borderRadius: '16px',
                      background: hero.color,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                  >
                    <span style={{ fontSize: '16px' }}>⭐</span>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#0D0B12',
                    }}>
                      Marcar como lido (+2 estrelas)
                    </span>
                  </button>
                )}

                {/* Star Burst Animation */}
                {showStars && <KidsStarBurst />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  )
}
