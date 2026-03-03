'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, BookText, GitBranch, CheckCircle, Lightbulb, Clock, Check } from 'lucide-react'
import { type NarrativeChapter } from '@/lib/data/biblia-do-kalam-chapters'
import { useAuth } from '@/providers/auth-provider'
import { saveProgressToSupabase } from '@/lib/agents/user-context'

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

const SECTION_PILLS = [
  { id: 'section-biblia', label: 'Na Bíblia' },
  { id: 'section-alcorao', label: 'No Alcorão' },
  { id: 'section-convergencia', label: 'Convergência' },
  { id: 'section-insight', label: 'Insight' },
]

export function ChapterReaderClient({ chapter }: Props) {
  const { user } = useAuth()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMarkedRead, setIsMarkedRead] = useState(false)
  const [showPills, setShowPills] = useState(false)

  // Track scroll progress for floating bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollProgress(progress)
      setShowPills(scrollTop > 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Load initial "read" state + set lastChapter
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY)
      const progress = raw ? JSON.parse(raw) : { lastChapter: '', completedChapters: [], scrollPosition: 0 }
      progress.lastChapter = chapter.slug
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
      if (progress.completedChapters.includes(chapter.slug)) {
        setIsMarkedRead(true)
      }
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

      // Also update kalam_completed_content so Sahabas can see it
      try {
        const completedRaw = localStorage.getItem('kalam_completed_content')
        const completedArr: string[] = completedRaw ? JSON.parse(completedRaw) : []
        const id = `biblia:${chapter.slug}`
        if (!completedArr.includes(id)) {
          completedArr.push(id)
          localStorage.setItem('kalam_completed_content', JSON.stringify(completedArr))
        }
      } catch {}

      // Sync to Supabase for cross-device memory
      if (user?.id) {
        saveProgressToSupabase(user.id, 'biblia', chapter.slug)
      }

      setIsMarkedRead(true)
    } catch {}
  }, [chapter.slug, user])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      {/* Floating reading progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 3, background: 'rgba(39,34,48,0.5)',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #C9A84C, #e0c76e)',
            width: `${scrollProgress * 100}%`,
            boxShadow: '0 0 8px rgba(201,168,76,0.4)',
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Floating section navigation pills */}
      <motion.div
        initial={false}
        animate={{ opacity: showPills ? 1 : 0, y: showPills ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed', top: 10, left: '50%', transform: 'translateX(-50%)',
          zIndex: 99, display: 'flex', gap: 6,
          padding: '6px 10px', borderRadius: 100,
          background: 'rgba(22,18,32,0.95)',
          border: '1px solid #272230',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          pointerEvents: showPills ? 'auto' : 'none',
        }}
      >
        {SECTION_PILLS.map((pill) => (
          <button
            key={pill.id}
            onClick={() => scrollToSection(pill.id)}
            style={{
              padding: '5px 12px', borderRadius: 100, cursor: 'pointer',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-sans)',
              whiteSpace: 'nowrap',
            }}
          >
            {pill.label}
          </button>
        ))}
      </motion.div>

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
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 8, marginBottom: 8, flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#7A7870',
            }}>
              Capítulo {chapter.id} · {chapter.era}
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 11, color: '#C9A84C',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 100, padding: '2px 10px',
            }}>
              <Clock size={10} /> {chapter.readingTime}
            </span>
          </div>
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
          id="section-biblia"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 48, scrollMarginTop: 60 }}
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
          id="section-alcorao"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: 48, scrollMarginTop: 60 }}
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
          id="section-convergencia"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 32, scrollMarginTop: 60 }}
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
          id="section-insight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginBottom: 48, scrollMarginTop: 60 }}
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
          <motion.button
            onClick={markComplete}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, width: '100%', padding: '14px',
              borderRadius: 12, marginBottom: 20,
              background: isMarkedRead ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.06)',
              border: `1px solid ${isMarkedRead ? 'rgba(34,197,94,0.35)' : 'rgba(34,197,94,0.2)'}`,
              color: '#22c55e', fontSize: 14,
              cursor: isMarkedRead ? 'default' : 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.3s ease',
            }}
          >
            {isMarkedRead ? (
              <>
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  <Check size={16} />
                </motion.div>
                <span>Lido!</span>
              </>
            ) : (
              <>
                <CheckCircle size={16} /> Marcar como lido
              </>
            )}
          </motion.button>

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
