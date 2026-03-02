'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  Share2,
  BookOpen,
  ChevronUp,
} from 'lucide-react'
import type { LeadershipChapter } from '@/lib/data/prophetic-leadership'

// ── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#0D0B12',
  surface: '#161220',
  surfaceLight: '#1C1828',
  gold: '#C9A84C',
  goldFade: 'rgba(201,168,76,0.12)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

interface NavChapter {
  slug: string
  prophetName: string
  title: string
}

interface Props {
  chapter: LeadershipChapter
  prevChapter: NavChapter | null
  nextChapter: NavChapter | null
}

// ── Scroll to top button component ──
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 100,
        right: 20,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: C.surface,
        border: `1px solid ${C.border}`,
        color: C.secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <ChevronUp size={18} />
    </motion.button>
  )
}

export function LeadershipClient({ chapter, prevChapter, nextChapter }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [shareMessage, setShareMessage] = useState('')

  // Track scroll progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Share handler
  const handleShare = useCallback(async () => {
    const text = chapter.shareText
    if (navigator.share) {
      try {
        await navigator.share({ text, url: window.location.href })
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(text)
      setShareMessage('Copiado!')
      setTimeout(() => setShareMessage(''), 2000)
    }
  }, [chapter.shareText])

  return (
    <div style={{ minHeight: '100vh', background: C.bg, paddingBottom: 120 }}>
      {/* ── Progress bar ────────────────────────────────────────── */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: C.border,
        zIndex: 100,
      }}>
        <motion.div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${C.gold}, rgba(201,168,76,0.6))`,
            width: `${scrollProgress * 100}%`,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* ── Back nav ────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '24px 20px 0',
      }}>
        <Link href="/lideranca-profetica" style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: C.muted,
          transition: 'color 0.2s ease',
        }}>
          <ArrowLeft size={14} />
          Lideranca Profetica
        </Link>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '48px 20px 0',
          textAlign: 'center',
        }}
      >
        {/* Arabic name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(40px, 7vw, 56px)',
            color: C.gold,
            direction: 'rtl',
            lineHeight: 1.3,
            marginBottom: 12,
            textShadow: '0 0 30px rgba(201,168,76,0.15)',
          }}
        >
          {chapter.prophetArabic}
        </motion.div>

        {/* Prophet name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          {chapter.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: C.secondary,
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {chapter.subtitle}
        </motion.p>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 8,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: C.muted,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            <Clock size={13} />
            {chapter.readingTime} min de leitura
          </span>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: C.muted,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            <BookOpen size={13} />
            {chapter.lessons.length} licoes
          </span>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            width: 60,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            margin: '32px auto 0',
            transformOrigin: 'center',
          }}
        />
      </motion.div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 680,
          margin: '48px auto 0',
          padding: '0 20px',
        }}
      >
        {chapter.intro.split('\n\n').map((paragraph, i) => (
          <p key={i} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: C.secondary,
            lineHeight: 1.8,
            marginBottom: 24,
            textAlign: 'left',
          }}>
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* ── Lessons ─────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 720,
        margin: '48px auto 0',
        padding: '0 20px',
      }}>
        {chapter.lessons.map((lesson, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            style={{ marginBottom: 56 }}
          >
            {/* Lesson number + title */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              marginBottom: 20,
            }}>
              {/* Number circle */}
              <div style={{
                width: 40,
                height: 40,
                minWidth: 40,
                borderRadius: '50%',
                background: C.goldFade,
                border: `1px solid rgba(201,168,76,0.25)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 600,
                color: C.gold,
                marginTop: 2,
              }}>
                {i + 1}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 3vw, 22px)',
                fontWeight: 600,
                color: C.text,
                lineHeight: 1.3,
                margin: 0,
                paddingTop: 6,
              }}>
                {lesson.title}
              </h2>
            </div>

            {/* Lesson description */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: C.secondary,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 56,
            }}>
              {lesson.description}
            </p>

            {/* Quran quote block */}
            <div style={{
              marginLeft: 56,
              marginBottom: 24,
              borderLeft: `3px solid ${C.gold}`,
              paddingLeft: 20,
              paddingTop: 12,
              paddingBottom: 12,
            }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 22,
                color: C.gold,
                direction: 'rtl',
                textAlign: 'right',
                lineHeight: 1.8,
                marginBottom: 12,
              }}>
                {lesson.quranText}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: C.muted,
                letterSpacing: '1px',
              }}>
                {lesson.quranRef}
              </p>
            </div>

            {/* Na Pratica box */}
            <div style={{
              marginLeft: 56,
              background: C.surfaceLight,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: '20px 24px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 12,
              }}>
                <Target size={16} color={C.gold} />
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: C.gold,
                  fontWeight: 600,
                }}>
                  Na Pratica
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: C.secondary,
                lineHeight: 1.75,
                margin: 0,
              }}>
                {lesson.application}
              </p>
            </div>

            {/* Separator between lessons (except last) */}
            {i < chapter.lessons.length - 1 && (
              <div style={{
                width: 40,
                height: 1,
                background: C.border,
                margin: '48px auto 0',
              }} />
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Key Quote ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 680,
          margin: '40px auto 0',
          padding: '48px 20px',
          textAlign: 'center',
        }}
      >
        {/* Gold ornament */}
        <div style={{
          width: 40,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          margin: '0 auto 32px',
        }} />

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(20px, 3.5vw, 28px)',
          color: C.text,
          lineHeight: 1.55,
          fontStyle: 'italic',
          marginBottom: 16,
        }}>
          &ldquo;{chapter.keyQuote.text}&rdquo;
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: C.gold,
          letterSpacing: '1px',
        }}>
          {chapter.keyQuote.ref}
        </p>

        {/* Gold ornament */}
        <div style={{
          width: 40,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          margin: '32px auto 0',
        }} />
      </motion.div>

      {/* ── Share button ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
        }}
      >
        <button
          onClick={handleShare}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: C.gold,
            background: C.goldFade,
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: 6,
            padding: '14px 28px',
            cursor: 'pointer',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
        >
          <Share2 size={15} />
          {shareMessage || 'Compartilhar'}
        </button>
      </motion.div>

      {/* ── Link to full prophet story ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 680,
          margin: '48px auto 0',
          padding: '0 20px',
          textAlign: 'center',
        }}
      >
        <Link
          href={`/os-profetas/${chapter.prophetId}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: C.secondary,
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: '16px 28px',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
        >
          <BookOpen size={15} />
          Conheca a historia completa de {chapter.prophetName}
          <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* ── Chapter Navigation ───────────────────────────────────── */}
      <div style={{
        maxWidth: 720,
        margin: '64px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: prevChapter && nextChapter ? '1fr 1fr' : '1fr',
        gap: 16,
      }}>
        {prevChapter && (
          <NavCard
            direction="prev"
            slug={prevChapter.slug}
            prophetName={prevChapter.prophetName}
            title={prevChapter.title}
          />
        )}
        {nextChapter && (
          <NavCard
            direction="next"
            slug={nextChapter.slug}
            prophetName={nextChapter.prophetName}
            title={nextChapter.title}
          />
        )}
      </div>

      <ScrollToTop />
    </div>
  )
}

// ── Navigation card component ──
function NavCard({
  direction,
  slug,
  prophetName,
  title,
}: {
  direction: 'prev' | 'next'
  slug: string
  prophetName: string
  title: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/lideranca-profetica/${slug}`} style={{ textDecoration: 'none' }}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -2 }}
        style={{
          background: C.surface,
          border: hovered
            ? '1px solid rgba(201,168,76,0.3)'
            : `1px solid ${C.border}`,
          borderRadius: 8,
          padding: '20px 24px',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease',
          textAlign: direction === 'prev' ? 'left' : 'right',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: C.muted,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          justifyContent: direction === 'prev' ? 'flex-start' : 'flex-end',
          marginBottom: 8,
        }}>
          {direction === 'prev' && <ArrowLeft size={12} />}
          {direction === 'prev' ? 'Anterior' : 'Proximo'}
          {direction === 'next' && <ArrowRight size={12} />}
        </span>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          fontWeight: 600,
          color: C.text,
          margin: 0,
          lineHeight: 1.3,
        }}>
          {prophetName}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: C.secondary,
          margin: '4px 0 0',
        }}>
          {title}
        </p>
      </motion.div>
    </Link>
  )
}
