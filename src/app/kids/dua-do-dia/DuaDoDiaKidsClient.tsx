'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { dailyDuasKids } from '@/lib/data/kids/daily-duas-kids'

export function DuaDoDiaKidsClient() {
  const [expandedDua, setExpandedDua] = useState<number | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedDuas = progress?.completedDuas ?? []

  function toggleDua(id: number) {
    setExpandedDua(expandedDua === id ? null : id)
  }

  function handleComplete(slug: string) {
    const updated = markComplete('completedDuas', slug, 2)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="🤲"
          title="Dua do Dia"
          subtitle="20 duas para cada momento do seu dia!"
          backHref="/kids"
          color="#FF8C42"
          stars={stars}
        />

        {/* Star burst animation */}
        {showStars && <KidsStarBurst />}

        {/* Progress summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: '#B3B0A6',
          }}>
            Duas aprendidas
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            fontWeight: 700,
            color: '#F0EBE2',
          }}>
            {completedDuas.length} / {dailyDuasKids.length}
          </p>
        </motion.div>

        {/* Duas list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {dailyDuasKids.map((dua, i) => {
            const isExpanded = expandedDua === dua.id
            const isCompleted = completedDuas.includes(dua.slug)

            return (
              <motion.div
                key={dua.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.03 * (i + 1) }}
                style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${isExpanded ? `${dua.color}40` : '#272230'}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease',
                }}
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggleDua(dua.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: `${dua.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {dua.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {dua.occasion}
                    </p>
                  </div>
                  {isCompleted && <span style={{ fontSize: '14px' }}>✅</span>}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <ChevronDown size={16} color="#7A7870" />
                  </motion.span>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 16px 16px',
                        borderTop: '1px solid #272230',
                      }}>
                        {/* Arabic */}
                        <p style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: '28px',
                          color: dua.color,
                          direction: 'rtl',
                          lineHeight: 2,
                          textAlign: 'center',
                          marginTop: '16px',
                          marginBottom: '8px',
                        }}>
                          {dua.arabic}
                        </p>

                        {/* Transliteration */}
                        <p style={{
                          fontSize: '14px',
                          color: '#B3B0A6',
                          fontStyle: 'italic',
                          textAlign: 'center',
                          marginBottom: '6px',
                        }}>
                          {dua.transliteration}
                        </p>

                        {/* Translation */}
                        <p style={{
                          fontSize: '14px',
                          color: '#F0EBE2',
                          textAlign: 'center',
                          marginBottom: '16px',
                          lineHeight: 1.5,
                        }}>
                          {dua.translation}
                        </p>

                        {/* When to use */}
                        <div style={{
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: '#1C1828',
                          marginBottom: '8px',
                        }}>
                          <p style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: dua.color,
                            marginBottom: '2px',
                          }}>
                            📍 Quando usar
                          </p>
                          <p style={{ fontSize: '13px', color: '#B3B0A6' }}>
                            {dua.when}
                          </p>
                        </div>

                        {/* Tip */}
                        <div style={{
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: `${dua.color}08`,
                          border: `1px solid ${dua.color}15`,
                          marginBottom: '16px',
                        }}>
                          <p style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: dua.color,
                            marginBottom: '2px',
                          }}>
                            💡 Dica
                          </p>
                          <p style={{ fontSize: '13px', color: '#B3B0A6' }}>
                            {dua.tip}
                          </p>
                        </div>

                        {/* Complete button */}
                        {!isCompleted ? (
                          <button
                            onClick={() => handleComplete(dua.slug)}
                            style={{
                              width: '100%',
                              padding: '12px',
                              borderRadius: '12px',
                              background: `${dua.color}15`,
                              border: `1px solid ${dua.color}30`,
                              color: dua.color,
                              fontSize: '14px',
                              fontWeight: 500,
                              cursor: 'pointer',
                              fontFamily: 'var(--font-sans)',
                            }}
                          >
                            Aprendi esta dua! ⭐
                          </button>
                        ) : (
                          <p style={{
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#45B7A0',
                          }}>
                            ✅ Dua aprendida!
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
