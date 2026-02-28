'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, BookOpen, ChevronDown, Lightbulb, X } from 'lucide-react'
import Link from 'next/link'
import { seerahChapters, type SeerahChapter } from '@/lib/data/seerah'
import { BlurFade } from '@/components/effects/BlurFade'

const STORAGE_KEY = 'kalam-seerah-read'

function getReadChapters(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function setReadChapters(slugs: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
  } catch { /* noop */ }
}

export default function SeerahClient() {
  const [readSlugs, setReadSlugs] = useState<string[]>([])
  const [openChapter, setOpenChapter] = useState<string | null>(null)
  const [readingChapter, setReadingChapter] = useState<SeerahChapter | null>(null)

  useEffect(() => {
    setReadSlugs(getReadChapters())
  }, [])

  const toggleRead = useCallback((slug: string) => {
    setReadSlugs(prev => {
      const next = prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
      setReadChapters(next)
      return next
    })
  }, [])

  const markAsRead = useCallback((slug: string) => {
    setReadSlugs(prev => {
      if (prev.includes(slug)) return prev
      const next = [...prev, slug]
      setReadChapters(next)
      return next
    })
  }, [])

  const progress = readSlugs.length
  const total = seerahChapters.length
  const progressPercent = total > 0 ? (progress / total) * 100 : 0

  // Full reading view
  if (readingChapter) {
    return (
      <div style={{ minHeight: '100vh', background: '#0D0B12', paddingTop: 64 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) 24px 120px' }}>

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              markAsRead(readingChapter.slug)
              setReadingChapter(null)
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const,
              color: '#7A7870',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginBottom: 40,
              padding: 0,
            }}
          >
            <ArrowLeft size={14} />
            Voltar aos capitulos
          </motion.button>

          {/* Chapter header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Number badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                color: '#C9A84C',
              }}>
                {readingChapter.number}
              </div>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase' as const,
                color: '#7A7870',
              }}>
                {readingChapter.period}
              </span>
            </div>

            {/* Arabic title */}
            <div style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(36px, 6vw, 56px)',
              color: '#C9A84C',
              direction: 'rtl' as const,
              marginBottom: 16,
              lineHeight: 1.2,
              textShadow: '0 0 40px rgba(201,168,76,0.2)',
            }}>
              {readingChapter.arabicTitle}
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.2,
              marginBottom: 32,
            }}>
              {readingChapter.title}
            </h1>

            {/* Divider */}
            <div style={{
              width: '100%',
              height: 1,
              background: 'linear-gradient(90deg, rgba(201,168,76,0.3), #272230, transparent)',
              marginBottom: 40,
            }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {readingChapter.content.split('\n\n').map((paragraph, pi) => (
              <p key={pi} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                lineHeight: 1.9,
                color: '#B3B0A6',
                marginBottom: 24,
              }}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Key Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginTop: 48 }}
          >
            <div style={{
              width: '100%',
              height: 1,
              background: 'linear-gradient(90deg, #272230, rgba(201,168,76,0.2), #272230)',
              marginBottom: 32,
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 24,
            }}>
              <Lightbulb size={16} style={{ color: '#C9A84C' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase' as const,
                color: '#C9A84C',
              }}>
                Licoes Praticas
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {readingChapter.keyLessons.map((lesson, li) => (
                <div key={li} style={{
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.1)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: '#F0EBE2',
                  }}>
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mark as read + navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: 56,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            {/* Mark read button */}
            <button
              onClick={() => toggleRead(readingChapter.slug)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                color: readSlugs.includes(readingChapter.slug) ? '#C9A84C' : '#B3B0A6',
                background: readSlugs.includes(readingChapter.slug)
                  ? 'rgba(201,168,76,0.1)'
                  : 'rgba(255,255,255,0.03)',
                border: readSlugs.includes(readingChapter.slug)
                  ? '1px solid rgba(201,168,76,0.3)'
                  : '1px solid #272230',
                borderRadius: 10,
                padding: '12px 24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <Check size={16} />
              {readSlugs.includes(readingChapter.slug) ? 'Capitulo lido' : 'Marcar como lido'}
            </button>

            {/* Next chapter */}
            {readingChapter.number < total && (
              <button
                onClick={() => {
                  markAsRead(readingChapter.slug)
                  const next = seerahChapters.find(c => c.number === readingChapter.number + 1)
                  if (next) {
                    setReadingChapter(next)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                  color: '#C9A84C',
                  background: 'none',
                  border: '1px solid rgba(201,168,76,0.25)',
                  borderRadius: 2,
                  padding: '14px 36px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Proximo capitulo
              </button>
            )}
          </motion.div>

        </div>
      </div>
    )
  }

  // Chapter list view
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
              Seerah — A Biografia do Profeta
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
              السيرة النبوية
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
              A vida que mudou{' '}
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                todas as outras.
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
              De orfao em Meca a lider de uma civilizacao. 12 capitulos.
              Uma jornada de fe, dor, coragem e misericordia.
            </p>
          </BlurFade>

          {/* Progress bar */}
          <BlurFade delay={0.4}>
            <div style={{ maxWidth: 400, margin: '0 auto' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  color: '#7A7870',
                }}>
                  {progress}/{total} capitulos lidos
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  color: progress === total ? '#C9A84C' : '#7A7870',
                  fontWeight: progress === total ? 600 : 400,
                }}>
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div style={{
                width: '100%',
                height: 3,
                borderRadius: 2,
                background: '#272230',
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #C9A84C, #D4B85E)',
                  }}
                />
              </div>
            </div>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.5}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
              marginTop: 40,
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {seerahChapters.map((chapter, i) => {
              const isRead = readSlugs.includes(chapter.slug)
              const isOpen = openChapter === chapter.slug

              return (
                <motion.div
                  key={chapter.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div style={{
                    borderRadius: 16,
                    background: '#161220',
                    border: isOpen
                      ? '1px solid rgba(201,168,76,0.25)'
                      : '1px solid #272230',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: isOpen
                      ? '0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,168,76,0.03)'
                      : '0 4px 20px rgba(0,0,0,0.2)',
                  }}>

                    {/* Card header — clickable */}
                    <div
                      onClick={() => setOpenChapter(isOpen ? null : chapter.slug)}
                      style={{
                        padding: '24px 24px 24px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 16,
                      }}
                    >
                      {/* Number circle */}
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: isRead
                          ? 'rgba(201,168,76,0.12)'
                          : 'rgba(255,255,255,0.03)',
                        border: isRead
                          ? '1px solid rgba(201,168,76,0.3)'
                          : '1px solid #272230',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                        marginTop: 2,
                      }}>
                        {isRead ? (
                          <Check size={16} style={{ color: '#C9A84C' }} />
                        ) : (
                          <span style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#7A7870',
                          }}>
                            {chapter.number}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Arabic + period row */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          marginBottom: 6,
                          flexWrap: 'wrap' as const,
                        }}>
                          <span style={{
                            fontFamily: 'var(--font-arabic)',
                            fontSize: 18,
                            color: '#C9A84C',
                            direction: 'rtl' as const,
                            lineHeight: 1.3,
                          }}>
                            {chapter.arabicTitle}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: 10,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase' as const,
                            color: '#7A7870',
                          }}>
                            {chapter.period}
                          </span>
                        </div>

                        {/* Title */}
                        <p style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 17,
                          fontWeight: 600,
                          color: '#F0EBE2',
                          marginBottom: 6,
                          lineHeight: 1.3,
                        }}>
                          {chapter.title}
                        </p>

                        {/* Summary */}
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13,
                          color: '#7A7870',
                          lineHeight: 1.6,
                        }}>
                          {chapter.summary}
                        </p>
                      </div>

                      {/* Expand arrow */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 4,
                        }}
                      >
                        <ChevronDown size={18} style={{ color: '#7A7870' }} />
                      </motion.div>
                    </div>

                    {/* Expanded preview */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ padding: '0 24px 28px 76px' }}>
                            {/* Divider */}
                            <div style={{
                              width: '100%',
                              height: 1,
                              background: 'linear-gradient(90deg, rgba(201,168,76,0.15), #272230)',
                              marginBottom: 20,
                            }} />

                            {/* Preview text */}
                            <p style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: 14,
                              lineHeight: 1.8,
                              color: '#B3B0A6',
                              marginBottom: 20,
                            }}>
                              {chapter.content.split('\n\n')[0].slice(0, 300)}...
                            </p>

                            {/* Lessons count */}
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              marginBottom: 20,
                            }}>
                              <Lightbulb size={13} style={{ color: '#C9A84C', opacity: 0.6 }} />
                              <span style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 12,
                                color: '#7A7870',
                              }}>
                                {chapter.keyLessons.length} licoes praticas
                              </span>
                            </div>

                            {/* Read full chapter button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setReadingChapter(chapter)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                              }}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                fontFamily: 'var(--font-sans)',
                                fontSize: 12,
                                letterSpacing: '2px',
                                textTransform: 'uppercase' as const,
                                color: '#C9A84C',
                                background: 'rgba(201,168,76,0.06)',
                                border: '1px solid rgba(201,168,76,0.2)',
                                borderRadius: 8,
                                padding: '10px 20px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <BookOpen size={14} />
                              Ler capitulo completo
                            </button>
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
            Ele nasceu orfao. Morreu sem nada. E mudou tudo.
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
