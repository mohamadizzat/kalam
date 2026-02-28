'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { getProgress, markComplete } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { quranKids } from '@/lib/data/kids/quran-kids'

export function QuranKidsClient() {
  const [expandedSurah, setExpandedSurah] = useState<number | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedSurahs = progress?.completedSurahs ?? []

  function toggleSurah(id: number) {
    setExpandedSurah((prev) => (prev === id ? null : id))
  }

  function handleComplete(surahName: string) {
    if (completedSurahs.includes(surahName)) return

    const updated = markComplete('completedSurahs', surahName, 3)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="📖"
          title="Quran Kids"
          subtitle="15 suratas para aprender e memorizar!"
          backHref="/kids"
          color="#FF8C42"
          stars={stars}
        />

        {/* Surah list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {quranKids.map((surah, i) => {
            const isExpanded = expandedSurah === surah.id
            const isCompleted = completedSurahs.includes(surah.name)

            return (
              <motion.div
                key={surah.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (i + 1) }}
                style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${surah.color}25`,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggleSurah(surah.id)}
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
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${surah.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {surah.emoji}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {surah.name}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '2px',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-arabic)',
                        fontSize: '13px',
                        color: `${surah.color}70`,
                      }}>
                        {surah.arabicName}
                      </span>
                      <span style={{ fontSize: '11px', color: '#7A7870' }}>
                        · {surah.meaning}
                      </span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#7A7870',
                    background: '#272230',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    flexShrink: 0,
                  }}>
                    {surah.versesCount}v
                  </span>

                  {isCompleted && (
                    <span style={{ fontSize: '14px', flexShrink: 0 }}>✅</span>
                  )}

                  <ChevronDown
                    size={16}
                    color="#7A7870"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
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
                      <div style={{ padding: '0 16px 16px' }}>
                        {/* Verses */}
                        {surah.verses.map((verse, vi) => (
                          <motion.div
                            key={verse.number}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: vi * 0.05 }}
                            style={{
                              padding: '16px',
                              borderRadius: '12px',
                              background: '#1C1828',
                              marginBottom: '8px',
                            }}
                          >
                            {/* Verse number */}
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '12px',
                            }}>
                              <span style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '6px',
                                background: `${surah.color}15`,
                                color: surah.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 700,
                              }}>
                                {verse.number}
                              </span>
                            </div>

                            {/* Arabic */}
                            <p style={{
                              fontFamily: 'var(--font-arabic)',
                              fontSize: '28px',
                              color: surah.color,
                              direction: 'rtl',
                              lineHeight: 2,
                              marginBottom: '12px',
                              textAlign: 'center',
                            }}>
                              {verse.arabic}
                            </p>

                            {/* Transliteration */}
                            <p style={{
                              fontSize: '14px',
                              color: '#B3B0A6',
                              fontStyle: 'italic',
                              textAlign: 'center',
                              marginBottom: '6px',
                            }}>
                              {verse.transliteration}
                            </p>

                            {/* Translation */}
                            <p style={{
                              fontSize: '13px',
                              color: '#7A7870',
                              textAlign: 'center',
                              lineHeight: 1.5,
                            }}>
                              {verse.translation}
                            </p>
                          </motion.div>
                        ))}

                        {/* Lesson box */}
                        <div style={{
                          padding: '14px 16px',
                          borderRadius: '12px',
                          background: `${surah.color}10`,
                          border: `1px solid ${surah.color}20`,
                          marginTop: '8px',
                          marginBottom: '12px',
                        }}>
                          <p style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: surah.color,
                            marginBottom: '6px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}>
                            Licao
                          </p>
                          <p style={{
                            fontSize: '13px',
                            color: '#B3B0A6',
                            lineHeight: 1.6,
                          }}>
                            {surah.lesson}
                          </p>
                        </div>

                        {/* Complete button */}
                        <div style={{ position: 'relative' }}>
                          <button
                            onClick={() => handleComplete(surah.name)}
                            disabled={isCompleted}
                            style={{
                              width: '100%',
                              padding: '12px',
                              borderRadius: '12px',
                              border: 'none',
                              background: isCompleted ? '#272230' : surah.color,
                              color: isCompleted ? '#7A7870' : '#0D0B12',
                              fontFamily: 'var(--font-serif)',
                              fontSize: '14px',
                              fontWeight: 700,
                              cursor: isCompleted ? 'default' : 'pointer',
                              transition: 'opacity 0.2s ease',
                              opacity: isCompleted ? 0.7 : 1,
                            }}
                          >
                            {isCompleted ? 'Ja aprendi esta surata ✅' : 'Marquei como aprendida ⭐ +3'}
                          </button>
                          {showStars && !isCompleted && <KidsStarBurst />}
                        </div>
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
