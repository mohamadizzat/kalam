'use client'

import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, BookText, GitBranch, CheckCircle, Lightbulb } from 'lucide-react'
import { type NarrativeChapter } from '@/lib/data/biblia-do-kalam-chapters'

const ponteMap: Record<string, string> = {
  'adam': 'adam',
  'noe': 'nuh',
  'abraao': 'ibrahim',
  'jose': 'yusuf',
  'moises-1': 'musa', 'moises-2': 'musa', 'moises-3': 'musa',
  'davi': 'dawud',
  'salomao': 'sulayman',
  'jonas': 'yunus',
  'jo': 'ayyub',
  'zacarias': 'zakariya',
  'joao-batista': 'yahya',
  'jesus-1': 'isa', 'jesus-2': 'isa', 'jesus-3': 'isa',
  'muhammad-1': 'muhammad', 'muhammad-2': 'muhammad',
  'elias': 'ilyas',
}

const PROGRESS_KEY = 'kalam-biblia-progress'

interface Props {
  chapter: NarrativeChapter
}

export function ChapterReaderClient({ chapter }: Props) {

  // Track reading progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY)
      const progress = raw ? JSON.parse(raw) : { lastChapter: '', completedChapters: [], scrollPosition: 0 }
      progress.lastChapter = chapter.slug
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
    } catch {}
  }, [chapter.slug])

  const markComplete = useCallback(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY)
      const progress = raw ? JSON.parse(raw) : { lastChapter: '', completedChapters: [], scrollPosition: 0 }
      if (!progress.completedChapters.includes(chapter.slug)) {
        progress.completedChapters.push(chapter.slug)
      }
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
    } catch {}
  }, [chapter.slug])

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link href="/a-biblia-do-kalam" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: '#7A7870', textDecoration: 'none', marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> A Bíblia do Kalam
        </Link>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 48 }}
        >
          <p style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#7A7870', marginBottom: 8,
          }}>
            Capítulo {chapter.id} · {chapter.era} · {chapter.readingTime}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 7vw, 40px)',
            fontWeight: 700, color: '#F0EBE2',
            letterSpacing: '-0.02em', marginBottom: 8,
          }}>
            {chapter.title}
          </h1>
          <p style={{ fontSize: 16, color: '#B3B0A6', lineHeight: 1.6 }}>
            {chapter.subtitle}
          </p>
        </motion.div>

        {/* ── Section: Na Bíblia ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
          }}>
            <BookOpen size={20} style={{ color: '#C9A84C' }} />
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 22, color: '#F0EBE2',
            }}>
              Na Bíblia
            </h2>
          </div>
          <div style={{
            fontSize: 16, color: '#F0EBE2', lineHeight: 2,
            fontFamily: 'var(--font-sans)', opacity: 0.9,
            whiteSpace: 'pre-wrap',
          }}>
            {chapter.bibleSection}
          </div>
        </motion.section>

        {/* ── Section: No Alcorão ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
          }}>
            <BookText size={20} style={{ color: '#C9A84C' }} />
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 22, color: '#F0EBE2',
            }}>
              No Alcorão
            </h2>
          </div>
          <div style={{
            fontSize: 16, color: '#F0EBE2', lineHeight: 2,
            fontFamily: 'var(--font-sans)', opacity: 0.9,
            whiteSpace: 'pre-wrap',
          }}>
            {chapter.quranSection}
          </div>
        </motion.section>

        {/* ── Section: Convergence ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 32 }}
        >
          <div style={{
            padding: 24, borderRadius: 16,
            background: 'rgba(34,197,94,0.06)',
            border: '1px solid rgba(34,197,94,0.12)',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 9, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#22c55e',
              background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 100, padding: '3px 10px', marginBottom: 16,
            }}>
              O que as duas escrituras compartilham
            </span>
            <div style={{
              fontSize: 15, color: '#F0EBE2', lineHeight: 1.9,
              whiteSpace: 'pre-wrap', opacity: 0.9,
            }}>
              {chapter.convergenceSection}
            </div>
          </div>
        </motion.section>

        {/* ── Section: Quran Adds ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginBottom: 32 }}
        >
          <div style={{
            padding: 24, borderRadius: 16,
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.12)',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 9, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#3b82f6',
              background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: 100, padding: '3px 10px', marginBottom: 16,
            }}>
              O que o Alcorão acrescenta
            </span>
            <div style={{
              fontSize: 15, color: '#F0EBE2', lineHeight: 1.9,
              whiteSpace: 'pre-wrap', opacity: 0.9,
            }}>
              {chapter.quranAddsSection}
            </div>
          </div>
        </motion.section>

        {/* ── Key Insight ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            padding: 24, borderRadius: 16,
            background: '#161220', border: '1px solid rgba(201,168,76,0.15)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Lightbulb size={18} style={{ color: '#C9A84C' }} />
              <span style={{
                fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#C9A84C',
              }}>
                Insight do capítulo
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 17, fontStyle: 'italic',
              color: '#F0EBE2', lineHeight: 1.7,
            }}>
              {chapter.keyInsight}
            </p>
          </div>
        </motion.section>

        {/* ── Cross-link: A Ponte ── */}
        {ponteMap[chapter.slug] && (
          <div style={{
            marginBottom: 24,
            padding: '16px 20px',
            borderRadius: 12,
            background: '#161220',
            border: '1px solid #272230',
          }}>
            <Link
              href={`/a-ponte/por-profeta/${ponteMap[chapter.slug]}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                color: '#C9A84C',
                textDecoration: 'none',
              }}
            >
              <GitBranch size={14} />
              Explore este tema em A Ponte
            </Link>
          </div>
        )}

        {/* ── Mark complete + Navigation ── */}
        <div style={{ borderTop: '1px solid #272230', paddingTop: 24 }}>
          <button
            onClick={markComplete}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, width: '100%', padding: '14px',
              borderRadius: 12, marginBottom: 20,
              background: 'rgba(34,197,94,0.06)',
              border: '1px solid rgba(34,197,94,0.2)',
              color: '#22c55e', fontSize: 14, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <CheckCircle size={16} /> Marcar como lido
          </button>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          }}>
            {chapter.prevChapterSlug ? (
              <Link href={`/a-biblia-do-kalam/${chapter.prevChapterSlug}`} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, color: '#C9A84C', textDecoration: 'none',
              }}>
                <ArrowLeft size={14} /> Anterior
              </Link>
            ) : <div />}

            {chapter.nextChapterSlug ? (
              <Link href={`/a-biblia-do-kalam/${chapter.nextChapterSlug}`} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, color: '#C9A84C', textDecoration: 'none',
              }}>
                Próximo <ArrowRight size={14} />
              </Link>
            ) : <div />}
          </div>
        </div>

      </div>
    </main>
  )
}
