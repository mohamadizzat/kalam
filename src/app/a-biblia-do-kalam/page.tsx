'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookText, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { chapters } from '@/lib/data/biblia-do-kalam-chapters'

const PROGRESS_KEY = 'kalam-biblia-progress'

interface ReadingProgress {
  lastChapter: string
  completedChapters: string[]
  scrollPosition: number
}

function loadProgress(): ReadingProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    return raw ? JSON.parse(raw) : { lastChapter: '', completedChapters: [], scrollPosition: 0 }
  } catch {
    return { lastChapter: '', completedChapters: [], scrollPosition: 0 }
  }
}

export default function ABibliaDoKalamPage() {
  const [progress, setProgress] = useState<ReadingProgress>({
    lastChapter: '', completedChapters: [], scrollPosition: 0,
  })

  useEffect(() => { setProgress(loadProgress()) }, [])

  const completedCount = progress.completedChapters.length
  const totalCount = chapters.length

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <p style={{
            fontFamily: 'var(--font-arabic)', fontSize: 28,
            color: 'rgba(201,168,76,0.3)', marginBottom: 12,
          }}>
            كتاب كلام
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 7vw, 44px)',
            fontWeight: 700, color: '#F0EBE2',
            letterSpacing: '-0.02em', marginBottom: 12,
          }}>
            A Bíblia do Kalam
          </h1>
          <p style={{
            fontSize: 16, color: '#B3B0A6', lineHeight: 1.7,
            maxWidth: 480, margin: '0 auto',
          }}>
            25 capítulos entrelaçando as duas escrituras.
            De Adão a Muhammad — a mesma história contada por dois livros.
          </p>
        </motion.div>

        {/* ── Progress bar ── */}
        {completedCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginBottom: 32, padding: '16px 20px', borderRadius: 12,
              background: '#161220', border: '1px solid #272230',
            }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 10,
            }}>
              <span style={{ fontSize: 13, color: '#B3B0A6' }}>
                Progresso de leitura
              </span>
              <span style={{ fontSize: 13, color: '#C9A84C' }}>
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="progress-bar-track" style={{
              height: 4, borderRadius: 2,
              background: '#272230', overflow: 'hidden',
            }}>
              <div className="progress-bar-fill" style={{
                height: '100%', borderRadius: 2,
                background: '#C9A84C',
                width: `${(completedCount / totalCount) * 100}%`,
                transition: 'width 0.5s ease',
              }} />
            </div>
          </motion.div>
        )}

        {/* ── Continue reading ── */}
        {progress.lastChapter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: 24 }}
          >
            <Link
              href={`/a-biblia-do-kalam/${progress.lastChapter}`}
              className="card-hover"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: 20, borderRadius: 16,
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                textDecoration: 'none',
              }}
            >
              <BookText size={22} style={{ color: '#C9A84C', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, color: '#C9A84C', marginBottom: 2 }}>
                  Continuar leitura
                </p>
                <p style={{ fontSize: 15, color: '#F0EBE2', fontWeight: 500 }}>
                  {chapters.find((c) => c.slug === progress.lastChapter)?.title || progress.lastChapter}
                </p>
              </div>
              <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
            </Link>
          </motion.div>
        )}

        {/* ── Chapter list ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {chapters.map((chapter, i) => {
            const isCompleted = progress.completedChapters.includes(chapter.slug)
            return (
              <motion.div
                key={chapter.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
              >
                <Link
                  href={`/a-biblia-do-kalam/${chapter.slug}`}
                  className="card-hover"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 20px', borderRadius: 12,
                    background: '#161220', border: '1px solid #272230',
                    textDecoration: 'none',
                  }}
                >
                  {/* Chapter number */}
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isCompleted ? 'rgba(34,197,94,0.1)' : 'rgba(201,168,76,0.06)',
                    border: `1px solid ${isCompleted ? 'rgba(34,197,94,0.2)' : 'rgba(201,168,76,0.1)'}`,
                    flexShrink: 0,
                  }}>
                    {isCompleted ? (
                      <CheckCircle size={16} style={{ color: '#22c55e' }} />
                    ) : (
                      <span style={{
                        fontFamily: 'var(--font-serif)', fontSize: 14,
                        color: '#C9A84C', fontWeight: 600,
                      }}>
                        {chapter.id}
                      </span>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)', fontSize: 15,
                      color: '#F0EBE2', fontWeight: 500, marginBottom: 2,
                    }}>
                      {chapter.title}
                    </p>
                    <p style={{ fontSize: 12, color: '#7A7870' }}>
                      {chapter.subtitle}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0,
                  }}>
                    <Clock size={12} style={{ color: '#7A7870' }} />
                    <span style={{ fontSize: 11, color: '#7A7870' }}>
                      {chapter.readingTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            textAlign: 'center', padding: '32px 20px',
            borderTop: '1px solid #272230', marginTop: 32,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-arabic)', fontSize: 20,
            color: 'rgba(201,168,76,0.4)', marginBottom: 8,
          }}>
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 15,
            fontStyle: 'italic', color: '#B3B0A6',
          }}>
            &ldquo;Ó meu Senhor, aumenta-me em conhecimento.&rdquo;
          </p>
        </motion.div>

      </div>
    </main>
  )
}
