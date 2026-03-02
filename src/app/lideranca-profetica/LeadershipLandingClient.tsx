'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import type { LeadershipChapter } from '@/lib/data/prophetic-leadership'

// ── Design tokens ────────────────────────────────────────────────────────────
const COLORS = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

function ChapterCard({ chapter, index }: { chapter: LeadershipChapter; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/lideranca-profetica/${chapter.slug}`} style={{ textDecoration: 'none' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          background: COLORS.surface,
          border: hovered
            ? `1px solid rgba(201,168,76,0.35)`
            : `1px solid ${COLORS.border}`,
          borderRadius: 4,
          padding: '36px 32px',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.04)'
            : '0 4px 20px rgba(0,0,0,0.2)',
          overflow: 'hidden',
        }}
      >
        {/* Gold gradient top border on hover */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)'
            : 'transparent',
          transition: 'background 0.4s ease',
        }} />

        {/* Chapter number + reading time */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: COLORS.muted,
          }}>
            Capitulo {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '1.5px',
            color: COLORS.muted,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <Clock size={11} />
            {chapter.readingTime} min
          </span>
        </div>

        {/* Arabic name */}
        <div style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 40,
          color: COLORS.gold,
          direction: 'rtl',
          textAlign: 'right',
          marginBottom: 8,
          lineHeight: 1.3,
          textShadow: hovered ? '0 0 20px rgba(201,168,76,0.2)' : 'none',
          transition: 'text-shadow 0.3s ease',
        }}>
          {chapter.prophetArabic}
        </div>

        {/* Prophet name */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 24,
          fontWeight: 600,
          color: COLORS.text,
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          {chapter.prophetName}
        </h3>

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          color: COLORS.gold,
          marginBottom: 8,
          fontStyle: 'italic',
        }}>
          {chapter.title}
        </p>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: COLORS.secondary,
          lineHeight: 1.65,
          marginBottom: 24,
        }}>
          {chapter.subtitle}
        </p>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: 1,
          background: COLORS.border,
          marginBottom: 20,
        }} />

        {/* Lessons count + CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '1.5px',
            color: COLORS.muted,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            <BookOpen size={12} />
            {chapter.lessons.length} licoes
          </span>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: hovered ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.4)',
            transition: 'color 0.3s ease',
          }}>
            Ler capitulo →
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

export function LeadershipLandingClient({ chapters }: { chapters: LeadershipChapter[] }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.bg,
      paddingBottom: 120,
    }}>
      {/* ── Back button ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '24px 20px 0',
      }}>
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: COLORS.muted,
          transition: 'color 0.2s ease',
        }}>
          <ArrowLeft size={14} />
          Inicio
        </Link>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '60px 20px 0',
          textAlign: 'center',
        }}
      >
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: COLORS.gold,
            marginBottom: 20,
          }}
        >
          Lideranca Profetica
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          8 Licoes dos Maiores Lideres<br />da Historia
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: COLORS.secondary,
            lineHeight: 1.7,
            maxWidth: 640,
            margin: '0 auto 16px',
          }}
        >
          Estrategia, resiliencia, coragem. Os profetas nao foram apenas homens de fe —
          foram os maiores estrategistas, negociadores e construtores que ja pisaram na terra.
          Descubra o que eles ensinam sobre lideranca real.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            width: 60,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
            margin: '32px auto 0',
            transformOrigin: 'center',
          }}
        />
      </motion.div>

      {/* ── Chapters Grid ─────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 960,
        margin: '60px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
        gap: 24,
      }}>
        {chapters.map((chapter, i) => (
          <ChapterCard key={chapter.slug} chapter={chapter} index={i} />
        ))}
      </div>

      {/* ── Bottom quote ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 680,
          margin: '80px auto 0',
          padding: '0 20px',
          textAlign: 'center',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(18px, 3vw, 24px)',
          color: COLORS.text,
          lineHeight: 1.6,
          fontStyle: 'italic',
          marginBottom: 12,
        }}>
          &ldquo;Tivestes no Mensageiro de Deus um belo modelo para quem espera em Deus e no Ultimo Dia e lembra de Deus com frequencia.&rdquo;
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: COLORS.gold,
          letterSpacing: '1px',
        }}>
          Al-Ahzab 33:21
        </p>
      </motion.div>
    </div>
  )
}
