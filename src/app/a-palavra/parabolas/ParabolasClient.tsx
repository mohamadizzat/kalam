'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Lightbulb, MessageCircle, X } from 'lucide-react'
import { parables, type Parable } from '@/lib/data/parables'

const READ_KEY = 'kalam-parables-read'

export function ParabolasClient() {
  const [selectedParable, setSelectedParable] = useState<Parable | null>(null)
  const [readSlugs, setReadSlugs] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(READ_KEY)
      if (saved) {
        setReadSlugs(new Set(JSON.parse(saved)))
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(READ_KEY, JSON.stringify([...readSlugs]))
    }
  }, [readSlugs, mounted])

  const markAsRead = (slug: string) => {
    setReadSlugs(prev => {
      const next = new Set(prev)
      next.add(slug)
      return next
    })
  }

  const openParable = (p: Parable) => {
    setSelectedParable(p)
    markAsRead(p.slug)
  }

  const readCount = useMemo(() => {
    return parables.filter(p => readSlugs.has(p.slug)).length
  }, [readSlugs])

  const progress = Math.round((readCount / parables.length) * 100)

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        {selectedParable ? (
          <ReadingView
            key="reading"
            parable={selectedParable}
            onBack={() => setSelectedParable(null)}
          />
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ padding: '32px 24px' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <Link
                href="/a-palavra"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: '#161220',
                  border: '1px solid #272230',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                <ArrowLeft size={18} style={{ color: '#B3B0A6' }} />
              </Link>
              <div>
                <h1 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#F0EBE2',
                  margin: 0,
                }}>
                  Parabolas e Historias
                </h1>
              </div>
            </div>

            <p style={{
              color: '#B3B0A6',
              fontSize: '15px',
              marginBottom: '24px',
              paddingLeft: '56px',
            }}>
              15 historias do Quran que transformam o coracao.
            </p>

            {/* Progress bar */}
            <div style={{
              padding: '16px 20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              marginBottom: '28px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 500 }}>
                  {readCount} de {parables.length} lidas
                </span>
                <span style={{ fontSize: '13px', color: '#7A7870' }}>
                  {progress}%
                </span>
              </div>
              <div style={{
                height: '4px',
                borderRadius: '2px',
                background: 'rgba(201,168,76,0.15)',
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, #C9A84C, #E8D48B)',
                  }}
                />
              </div>
            </div>

            {/* Card grid */}
            <div style={{ display: 'grid', gap: '12px' }}>
              {parables.map((parable, index) => {
                const isRead = readSlugs.has(parable.slug)
                return (
                  <motion.button
                    key={parable.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    onClick={() => openParable(parable)}
                    className="card-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 20px',
                      borderRadius: '14px',
                      background: '#161220',
                      border: `1px solid ${isRead ? 'rgba(201,168,76,0.2)' : '#272230'}`,
                      textAlign: 'left',
                      cursor: 'pointer',
                      width: '100%',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {/* Number */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: isRead ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {isRead ? (
                        <CheckCircle size={18} style={{ color: '#C9A84C' }} />
                      ) : (
                        <span style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#C9A84C',
                        }}>
                          {index + 1}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <p style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: '17px',
                          color: '#C9A84C',
                          margin: 0,
                          lineHeight: 1.4,
                        }}>
                          {parable.arabicTitle}
                        </p>
                      </div>
                      <p style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#F0EBE2',
                        margin: 0,
                        marginBottom: '4px',
                      }}>
                        {parable.title}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontSize: '11px',
                          color: '#7A7870',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(122,120,112,0.1)',
                          border: '1px solid rgba(122,120,112,0.15)',
                        }}>
                          {parable.surahRef}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
                  </motion.button>
                )
              })}
            </div>

            {/* Bottom padding for safe area */}
            <div style={{ height: '100px' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function ReadingView({ parable, onBack }: { parable: Parable; onBack: () => void }) {
  const paragraphs = parable.narrative.split('\n\n')

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      style={{ padding: '32px 24px' }}
    >
      {/* Top bar */}
      <button
        onClick={onBack}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: '#161220',
          border: '1px solid #272230',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginBottom: '28px',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <ArrowLeft size={18} style={{ color: '#B3B0A6' }} />
      </button>

      {/* Arabic title */}
      <p style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: '32px',
        color: '#C9A84C',
        textAlign: 'center',
        marginBottom: '8px',
        lineHeight: 1.5,
      }}>
        {parable.arabicTitle}
      </p>

      {/* Title */}
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '26px',
        fontWeight: 700,
        color: '#F0EBE2',
        textAlign: 'center',
        marginBottom: '8px',
      }}>
        {parable.title}
      </h1>

      {/* Surah badge */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{
          fontSize: '12px',
          color: '#C9A84C',
          padding: '4px 14px',
          borderRadius: '8px',
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.2)',
        }}>
          {parable.surahRef}
        </span>
      </div>

      {/* Decorative divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '32px',
      }}>
        <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.2)' }} />
        <BookOpen size={16} style={{ color: '#C9A84C', opacity: 0.5 }} />
        <div style={{ height: '1px', width: '40px', background: 'rgba(201,168,76,0.2)' }} />
      </div>

      {/* Narrative */}
      <div style={{ marginBottom: '36px' }}>
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              lineHeight: 1.85,
              color: '#F0EBE2',
              marginBottom: '20px',
              textAlign: 'justify',
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      {/* Lesson box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        style={{
          padding: '20px',
          borderRadius: '14px',
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.15)',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <Lightbulb size={18} style={{ color: '#C9A84C' }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#C9A84C' }}>Licao</span>
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#F0EBE2',
          margin: 0,
        }}>
          {parable.lesson}
        </p>
      </motion.div>

      {/* Reflection box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        style={{
          padding: '20px',
          borderRadius: '14px',
          background: 'rgba(122,120,112,0.06)',
          border: '1px solid rgba(122,120,112,0.15)',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <MessageCircle size={18} style={{ color: '#B3B0A6' }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#B3B0A6' }}>Reflexao</span>
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#B3B0A6',
          margin: 0,
          fontStyle: 'italic',
        }}>
          {parable.reflection}
        </p>
      </motion.div>

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '12px',
          background: '#161220',
          border: '1px solid #272230',
          color: '#B3B0A6',
          fontSize: '15px',
          fontWeight: 500,
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        Voltar para todas as historias
      </button>

      {/* Bottom safe area */}
      <div style={{ height: '100px' }} />
    </motion.div>
  )
}
