'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Sun,
  Compass,
  Heart,
  Star,
  Share2,
  GitBranch,
  BookText,
  Info,
} from 'lucide-react'
import { SANCTUARY_VERSES } from '@/lib/data/daily-content'

// ── TYPES ────────────────────────────────────────────────────────────────────

interface StoryHomeProps {
  onNavigate: () => void
}

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── GOLD PARTICLES ───────────────────────────────────────────────────────────

function GoldParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        id: i,
        x: 15 + (i * 70) / 7 + Math.sin(i * 1.3) * 8,
        y: 20 + (i * 60) / 7 + Math.cos(i * 0.9) * 12,
        size: 2 + (i % 3),
        duration: 5 + (i % 4) * 1.5,
        delay: i * 0.7,
        opacity: 0.15 + (i % 3) * 0.1,
      })),
    []
  )

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.5, 0],
            scale: [0, 1, 1.2, 0],
            y: [0, -30, -60, -90],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(201,168,76,${p.opacity + 0.2}) 0%, rgba(201,168,76,0) 70%)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,${p.opacity * 0.5})`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.02) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}

// ── FADE VARIANT ─────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

// ── PATH CARDS DATA ──────────────────────────────────────────────────────────

const PATHS = [
  {
    icon: Info,
    title: 'Sou curioso sobre o Islã',
    description: 'Descubra o Islam como sistema de vida',
    href: '/o-sistema',
    persona: 'curious',
  },
  {
    icon: BookOpen,
    title: 'Quero ler o Alcorão',
    description: '114 suratas com tradução e contexto',
    href: '/a-palavra',
    persona: 'reader',
  },
  {
    icon: GitBranch,
    title: 'Venho da Bíblia',
    description: 'Estudo comparativo Bíblia × Alcorão',
    href: '/a-ponte',
    persona: 'bridge',
  },
] as const

// ── EXPLORE PORTALS DATA ─────────────────────────────────────────────────────

const PORTALS = [
  { icon: BookOpen, label: 'A Palavra', hint: 'Para quem quer ler e estudar', stat: '114 Suratas', href: '/a-palavra' },
  { icon: Sun, label: 'A Presença', hint: 'Para quem quer praticar', stat: '99 Nomes', href: '/a-presenca' },
  { icon: Compass, label: 'A Jornada', hint: 'Para quem quer aprender', stat: 'Trilhas guiadas', href: '/a-jornada' },
  { icon: Heart, label: 'A Alma', hint: 'Seu espaço de reflexão', stat: 'Diário pessoal', href: '/a-alma' },
  { icon: Star, label: 'Kids', hint: 'Para crianças', stat: 'Conteúdo infantil', href: '/kids' },
] as const

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function StoryHome({ onNavigate }: StoryHomeProps) {
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')
  const [verseIndex, setVerseIndex] = useState(0)

  useEffect(() => {
    const day = new Date().getDate()
    setVerseIndex((day - 1) % SANCTUARY_VERSES.length)
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]

  const handleShare = useCallback(async () => {
    const text = `"${verse.translation}"\n\n${verse.arabic}\n\n— ${verse.surahRef}\n\nKALAM — Deus. Todo dia.`

    if (navigator.share) {
      try {
        await navigator.share({ title: 'KALAM — Versículo do Dia', text })
        return
      } catch {
        // fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2000)
    } catch {
      // clipboard also failed
    }
  }, [verse])

  const handlePathClick = (persona: string) => {
    try {
      localStorage.setItem('kalam-persona', persona)
    } catch {
      // ignore
    }
    onNavigate()
  }

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Welcome Hero (~40vh)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '64px 24px 48px',
          position: 'relative',
        }}
      >
        <GoldParticles />

        <motion.p
          {...fadeUp}
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 80,
            color: T.gold,
            lineHeight: 1.2,
            marginBottom: 8,
            zIndex: 1,
          }}
        >
          كلام
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 32,
            color: T.text,
            letterSpacing: '0.12em',
            marginBottom: 12,
            zIndex: 1,
          }}
        >
          KALAM
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 16,
            color: T.secondary,
            marginBottom: 10,
            zIndex: 1,
          }}
        >
          Deus. Todo dia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: T.muted,
            maxWidth: 340,
            lineHeight: 1.6,
            zIndex: 1,
          }}
        >
          Seu companheiro espiritual para explorar a fé com profundidade.
        </motion.p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — "O que é o Kalam?" card
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 48px' }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: '28px 24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(201,168,76,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookOpen size={18} style={{ color: T.gold }} />
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: T.text, fontWeight: 500 }}>
              O que é o Kalam?
            </p>
          </div>

          <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.7, marginBottom: 20 }}>
            Kalam em árabe significa &ldquo;A Palavra&rdquo;. Este é um projeto cultural e espiritual
            que acredita que a mensagem islâmica merece ser conhecida — com respeito, profundidade e beleza.
          </p>

          {/* "Não é" list */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 12, color: T.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              Não é
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 13, color: T.secondary }}>
                <span style={{ color: '#e05252', marginRight: 8 }}>&#10007;</span>
                Um site de conversão
              </p>
              <p style={{ fontSize: 13, color: T.secondary }}>
                <span style={{ color: '#e05252', marginRight: 8 }}>&#10007;</span>
                Uma simplificação da fé
              </p>
            </div>
          </div>

          {/* "É" list */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: T.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              É
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 13, color: T.secondary }}>
                <span style={{ color: T.gold, marginRight: 8 }}>&#10003;</span>
                Um companheiro de estudo
              </p>
              <p style={{ fontSize: 13, color: T.secondary }}>
                <span style={{ color: T.gold, marginRight: 8 }}>&#10003;</span>
                Uma ponte entre tradições
              </p>
            </div>
          </div>

          <Link
            href="/sobre"
            style={{
              fontSize: 13,
              color: T.gold,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            Conhecer mais sobre o Kalam <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Versículo do Dia (compact card)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 48px' }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 20,
            padding: 32,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              color: T.muted,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Versículo do Dia
          </p>

          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              direction: 'rtl',
              fontSize: 'clamp(28px, 6vw, 44px)',
              lineHeight: 1.7,
              color: T.gold,
              marginBottom: 16,
            }}
          >
            {verse.arabic}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.8,
              color: T.text,
              maxWidth: 480,
              margin: '0 auto 12px',
            }}
          >
            &ldquo;{verse.translation}&rdquo;
          </p>

          <p style={{ fontSize: 13, color: T.muted, marginBottom: 20 }}>
            &mdash; {verse.surahRef}
          </p>

          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 18px',
              borderRadius: 999,
              border: `1px solid rgba(201,168,76,0.15)`,
              background: 'rgba(201,168,76,0.06)',
              color: shareState === 'copied' ? T.gold : T.muted,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <Share2 size={14} />
            {shareState === 'copied' ? 'Copiado!' : 'Compartilhar'}
          </button>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — "Por onde começar?" — 3 path cards
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 48px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            color: T.text,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Por onde começar?
        </p>

        <div style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PATHS.map((path, i) => (
            <motion.div
              key={path.persona}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={path.href}
                onClick={() => handlePathClick(path.persona)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: 20,
                  borderRadius: 12,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <path.icon size={20} style={{ color: T.gold }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 15, color: T.text, fontWeight: 500 }}>{path.title}</p>
                  <p style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>{path.description}</p>
                </div>
                <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Conteúdo em Destaque (prominent)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ padding: '0 24px 48px' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Destaque
        </p>

        <div style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link
            href="/a-ponte"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 24,
              borderRadius: 16,
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.1)',
                flexShrink: 0,
              }}
            >
              <GitBranch size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                A Ponte
              </p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>
                Bíblia &times; Alcorão &mdash; 17 profetas, 20 temas, estudo comparativo
              </p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </Link>

          <Link
            href="/a-biblia-do-kalam"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 24,
              borderRadius: 16,
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.12)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.08)',
                flexShrink: 0,
              }}
            >
              <BookText size={22} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                A Bíblia do Kalam
              </p>
              <p style={{ fontSize: 13, color: T.secondary, marginTop: 2 }}>
                25 capítulos entrelaçando as duas escrituras
              </p>
            </div>
            <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
          </Link>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — Explorar (portal grid with hints)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ padding: '0 24px 48px' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Explorar
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            maxWidth: 520,
            margin: '0 auto',
          }}
        >
          {PORTALS.map((portal, i) => (
            <motion.div
              key={portal.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={i === PORTALS.length - 1 ? { gridColumn: 'span 2' } : undefined}
            >
              <Link
                href={portal.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px 16px',
                  borderRadius: 16,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  textDecoration: 'none',
                  textAlign: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(201,168,76,0.08)',
                    marginBottom: 4,
                  }}
                >
                  <portal.icon size={22} style={{ color: T.gold }} />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: T.text, fontWeight: 500 }}>
                  {portal.label}
                </span>
                <span style={{ fontSize: 12, color: T.secondary, lineHeight: 1.4 }}>
                  {portal.hint}
                </span>
                <span style={{ fontSize: 11, color: T.muted, letterSpacing: '0.05em' }}>
                  {portal.stat}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — Footer
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '32px 24px 64px',
          borderTop: `1px solid ${T.border}`,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <Link
          href="/comecar"
          style={{
            fontSize: 14,
            color: T.gold,
            textDecoration: 'none',
          }}
        >
          Ainda não sabe por onde começar?
        </Link>

        <Link
          href="/mapa"
          style={{
            fontSize: 13,
            color: T.muted,
            textDecoration: 'none',
          }}
        >
          Ver mapa de conteúdo
        </Link>

        <div style={{ marginTop: 16 }}>
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 28,
              color: T.gold,
              marginBottom: 4,
            }}
          >
            اقْرَأْ
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 14,
              color: T.muted,
            }}
          >
            Lê!
          </p>
        </div>
      </section>
    </main>
  )
}
