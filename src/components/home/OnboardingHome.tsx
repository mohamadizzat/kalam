'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, GitBranch, Users, ChevronLeft, ChevronRight } from 'lucide-react'

// ── TYPES ───────────────────────────────────────────────────────────────────────

interface OnboardingHomeProps {
  onComplete: () => void
}

// ── DESIGN TOKENS ───────────────────────────────────────────────────────────────

const C = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldFaint: 'rgba(201,168,76,0.08)',
  goldBorder: 'rgba(201,168,76,0.2)',
  goldSubtle: 'rgba(201,168,76,0.12)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

// ── SLIDE VARIANTS ──────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -280 : 280,
    opacity: 0,
  }),
}

// ── CARD 1: VERSÍCULO ───────────────────────────────────────────────────────────

function CardVersiculo() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '32px 24px',
      width: '100%',
    }}>
      {/* Icon + Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: C.goldFaint,
        }}>
          <BookOpen size={18} style={{ color: C.gold }} />
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontWeight: 600,
          color: C.text,
        }}>
          Um versículo que muda o dia
        </p>
      </div>

      {/* Arabic verse */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-arabic)',
          direction: 'rtl',
          fontSize: 'clamp(28px, 6vw, 40px)',
          lineHeight: 1.8,
          color: C.gold,
          marginBottom: '16px',
          filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.15))',
        }}
      >
        وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ
      </motion.p>

      {/* Translation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '16px',
          lineHeight: 1.7,
          color: C.text,
          fontStyle: 'italic',
          maxWidth: '360px',
          marginBottom: '8px',
        }}
      >
        &ldquo;E quando Meus servos te perguntarem sobre Mim &mdash; Eu estou próximo.&rdquo;
      </motion.p>

      {/* Reference */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        style={{
          fontSize: '13px',
          color: C.muted,
          marginBottom: '20px',
        }}
      >
        &mdash; Al-Baqarah 2:186
      </motion.p>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          fontSize: '12px',
          color: C.secondary,
          background: C.goldFaint,
          padding: '6px 14px',
          borderRadius: '999px',
          border: `1px solid ${C.goldSubtle}`,
        }}
      >
        Todo dia, um verso novo
      </motion.div>
    </div>
  )
}

// ── CARD 2: PONTE ───────────────────────────────────────────────────────────────

function CardPonte() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '32px 24px',
      width: '100%',
    }}>
      {/* Icon + Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: C.goldFaint,
        }}>
          <GitBranch size={18} style={{ color: C.gold }} />
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontWeight: 600,
          color: C.text,
        }}>
          Dois livros, uma ponte
        </p>
      </div>

      {/* Side-by-side comparison */}
      <div style={{
        display: 'flex',
        gap: '12px',
        width: '100%',
        maxWidth: '420px',
        marginBottom: '20px',
      }}>
        {/* Bible side */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            flex: 1,
            padding: '16px 14px',
            borderRadius: '12px',
            background: C.surface,
            border: `1px solid ${C.border}`,
            textAlign: 'left',
          }}
        >
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: C.muted,
            marginBottom: '10px',
            fontFamily: 'var(--font-sans)',
          }}>
            Bíblia
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: C.text,
            fontStyle: 'italic',
            marginBottom: '8px',
          }}>
            &ldquo;No princípio, Deus criou os céus e a terra.&rdquo;
          </p>
          <p style={{
            fontSize: '12px',
            color: C.muted,
          }}>
            Gênesis 1:1
          </p>
        </motion.div>

        {/* Quran side */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flex: 1,
            padding: '16px 14px',
            borderRadius: '12px',
            background: C.goldFaint,
            border: `1px solid ${C.goldSubtle}`,
            textAlign: 'left',
          }}
        >
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: '10px',
            fontFamily: 'var(--font-sans)',
          }}>
            Alcorão
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: C.text,
            fontStyle: 'italic',
            marginBottom: '8px',
          }}>
            &ldquo;Os céus e a terra estavam juntos e Nós os separamos.&rdquo;
          </p>
          <p style={{
            fontSize: '12px',
            color: C.muted,
          }}>
            Al-Anbiya 21:30
          </p>
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          fontSize: '12px',
          color: C.secondary,
          background: C.goldFaint,
          padding: '6px 14px',
          borderRadius: '999px',
          border: `1px solid ${C.goldSubtle}`,
        }}
      >
        Bíblia e Alcorão lado a lado
      </motion.div>
    </div>
  )
}

// ── CARD 3: PROFETAS ────────────────────────────────────────────────────────────

function CardProfetas() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '32px 24px',
      width: '100%',
    }}>
      {/* Icon + Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: C.goldFaint,
        }}>
          <Users size={18} style={{ color: C.gold }} />
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontWeight: 600,
          color: C.text,
        }}>
          Conheça os profetas
        </p>
      </div>

      {/* Prophet card preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          width: '100%',
          maxWidth: '320px',
          padding: '28px 24px',
          borderRadius: '16px',
          background: C.surface,
          border: `1px solid ${C.goldSubtle}`,
          marginBottom: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold glow behind */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Arabic name */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: 'clamp(36px, 8vw, 52px)',
            lineHeight: 1.5,
            color: C.gold,
            marginBottom: '8px',
            position: 'relative',
            zIndex: 1,
            filter: 'drop-shadow(0 0 16px rgba(201,168,76,0.1))',
          }}
        >
          إِبْرَاهِيمُ
        </motion.p>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 600,
            color: C.text,
            marginBottom: '4px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Ibrahim (Abraão)
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            fontSize: '14px',
            color: C.secondary,
            lineHeight: 1.5,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Pai das 3 religiões monoteístas
        </motion.p>
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          fontSize: '12px',
          color: C.secondary,
          background: C.goldFaint,
          padding: '6px 14px',
          borderRadius: '999px',
          border: `1px solid ${C.goldSubtle}`,
        }}
      >
        6 profetas com histórias completas
      </motion.div>
    </div>
  )
}

// ── CARDS ARRAY ─────────────────────────────────────────────────────────────────

const CARDS = [CardVersiculo, CardPonte, CardProfetas]
const TOTAL_CARDS = CARDS.length

// ── MAIN COMPONENT ──────────────────────────────────────────────────────────────

export function OnboardingHome({ onComplete }: OnboardingHomeProps) {
  const [[currentIndex, direction], setStep] = useState([0, 0])
  const [viewedSet, setViewedSet] = useState<Set<number>>(() => new Set([0]))

  const viewedCount = viewedSet.size
  const ctaUnlocked = viewedCount >= 2

  // Navigation
  const goTo = useCallback((index: number) => {
    const dir = index > currentIndex ? 1 : -1
    setStep([index, dir])
    setViewedSet((prev) => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [currentIndex])

  const goNext = useCallback(() => {
    if (currentIndex < TOTAL_CARDS - 1) {
      goTo(currentIndex + 1)
    }
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1)
    }
  }, [currentIndex, goTo])

  // Touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < TOTAL_CARDS - 1) {
        goNext()
      } else if (diff < 0 && currentIndex > 0) {
        goPrev()
      }
    }
    setTouchStart(null)
  }, [touchStart, currentIndex, goNext, goPrev])

  // CTA click
  const handleCTA = useCallback(() => {
    try {
      localStorage.setItem('kalam-onboarding-done', 'true')
    } catch { /* ignore */ }
    onComplete()
  }, [onComplete])

  // Skip click
  const handleSkip = useCallback(() => {
    try {
      localStorage.setItem('kalam-onboarding-done', 'true')
      localStorage.setItem('kalam-banner-dismissed', 'true')
    } catch { /* ignore */ }
    onComplete()
  }, [onComplete])

  const CurrentCard = CARDS[currentIndex]

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100%',
        background: C.surface,
        borderRadius: '20px',
        border: `1px solid ${C.border}`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle top gold line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${C.goldSubtle}, transparent)`,
      }} />

      {/* Step indicator (dots) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        paddingTop: '20px',
      }}>
        {Array.from({ length: TOTAL_CARDS }, (_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            animate={{
              width: i === currentIndex ? 24 : 8,
              background: i === currentIndex ? C.gold : viewedSet.has(i) ? 'rgba(201,168,76,0.4)' : C.border,
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: 8,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label={`Cartão ${i + 1}`}
          />
        ))}
      </div>

      {/* Card area with navigation arrows */}
      <div style={{
        position: 'relative',
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Left arrow */}
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={goPrev}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(22,18,32,0.8)',
              border: `1px solid ${C.border}`,
              color: C.secondary,
              cursor: 'pointer',
              zIndex: 10,
              padding: 0,
            }}
            aria-label="Cartão anterior"
          >
            <ChevronLeft size={18} />
          </motion.button>
        )}

        {/* Right arrow */}
        {currentIndex < TOTAL_CARDS - 1 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={goNext}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(22,18,32,0.8)',
              border: `1px solid ${C.border}`,
              color: C.secondary,
              cursor: 'pointer',
              zIndex: 10,
              padding: 0,
            }}
            aria-label="Próximo cartão"
          >
            <ChevronRight size={18} />
          </motion.button>
        )}

        {/* Animated card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CurrentCard />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: CTA + Skip */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '0 24px 24px',
      }}>
        {/* CTA — fades in when unlocked */}
        <AnimatePresence>
          {ctaUnlocked && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCTA}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '999px',
                background: `linear-gradient(135deg, ${C.gold}, #A88A3A)`,
                color: C.bg,
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.02em',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
            >
              Comece sua jornada
            </motion.button>
          )}
        </AnimatePresence>

        {/* Skip link — always visible */}
        <button
          onClick={handleSkip}
          style={{
            background: 'none',
            border: 'none',
            color: C.muted,
            fontSize: '13px',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            padding: '4px 8px',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C.secondary }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.muted }}
        >
          Pular
        </button>
      </div>
    </div>
  )
}
