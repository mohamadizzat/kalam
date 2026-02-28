'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Sun,
  Compass,
  Heart,
  Sparkles,
  Search,
  Hand,
  Bookmark,
  Flame,
  ArrowRight,
  ArrowLeft,
  X,
} from 'lucide-react'

// ── TYPES ──────────────────────────────────────────────────────────────────────

type Step = {
  id: number
  render: () => React.ReactNode
}

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────────

const C = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldFaint: 'rgba(201,168,76,0.08)',
  goldBorder: 'rgba(201,168,76,0.2)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

// ── SWIPE VARIANTS ─────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
}

// ── GOLD PARTICLES ─────────────────────────────────────────────────────────────

function OnboardingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.3 + 0.1,
    }))
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
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
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
    </div>
  )
}

// ── SPACES DATA ────────────────────────────────────────────────────────────────

const SPACES = [
  { icon: BookOpen, name: 'A Palavra', desc: 'Leia o Alcorão em português e árabe, com contexto e reflexões.' },
  { icon: Sun, name: 'A Presença', desc: 'Dhikr, du\'as, os 99 Nomes de Deus e práticas contemplativas.' },
  { icon: Compass, name: 'A Jornada', desc: 'Trilhas de aprendizado guiadas para cada momento da sua busca.' },
  { icon: Heart, name: 'A Alma', desc: 'Seu diário espiritual, reflexões e cuidado da saúde interior.' },
]

const PATHS = [
  {
    icon: Search,
    label: 'Sou curioso sobre o Islam',
    desc: 'Uma trilha gentil sobre Deus, amor e propósito.',
    href: '/trilhas/deus-e-amor',
  },
  {
    icon: BookOpen,
    label: 'Quero ler o Alcorão',
    desc: 'Comece pela Al-Fatiha, a abertura do Livro.',
    href: '/a-palavra/1',
  },
  {
    icon: Hand,
    label: 'Quero praticar',
    desc: 'Dhikr — lembrança de Deus com o coração.',
    href: '/a-presenca/dhikr',
  },
]

// ── STEP COMPONENTS ────────────────────────────────────────────────────────────

function StepWelcome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>
      {/* Arabic "Kalam" */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(64px, 18vw, 120px)',
          color: C.gold,
          lineHeight: 1.3,
          marginBottom: '8px',
          direction: 'rtl',
          filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.2))',
        }}
      >
        كلام
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(26px, 5vw, 36px)',
          fontWeight: 600,
          color: C.text,
          marginBottom: '16px',
          lineHeight: 1.3,
        }}
      >
        Bem-vindo ao Kalam
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: C.secondary,
          maxWidth: '380px',
        }}
      >
        Seu santuário digital de conexão com Deus.
        Um espaço de paz para ler, aprender, refletir e praticar — no seu ritmo, todos os dias.
      </motion.p>
    </div>
  )
}

function StepSpaces() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: '440px' }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '11px', letterSpacing: '0.2em', color: C.muted, textTransform: 'uppercase', marginBottom: '8px' }}
      >
        Quatro espaços
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 4.5vw, 30px)',
          fontWeight: 600,
          color: C.text,
          marginBottom: '28px',
          lineHeight: 1.3,
        }}
      >
        4 Espaços, 1 Jornada
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        {SPACES.map((space, i) => (
          <motion.div
            key={space.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              padding: '16px',
              borderRadius: '12px',
              background: C.surface,
              border: `1px solid ${C.border}`,
              textAlign: 'left',
            }}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: C.goldFaint, flexShrink: 0,
            }}>
              <space.icon size={20} style={{ color: C.gold }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: C.text, fontFamily: 'var(--font-serif)', marginBottom: '3px' }}>
                {space.name}
              </p>
              <p style={{ fontSize: '13px', color: C.muted, lineHeight: 1.5 }}>
                {space.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StepPaths() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: '440px' }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '11px', letterSpacing: '0.2em', color: C.muted, textTransform: 'uppercase', marginBottom: '8px' }}
      >
        Escolha seu caminho
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 4.5vw, 30px)',
          fontWeight: 600,
          color: C.text,
          marginBottom: '28px',
          lineHeight: 1.3,
        }}
      >
        Por onde começar?
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        {PATHS.map((path, i) => (
          <motion.div
            key={path.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
          >
            <Link
              href={path.href}
              onClick={() => {
                try { localStorage.setItem('kalam-onboarding-done', 'true') } catch {}
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px 16px',
                borderRadius: '12px',
                background: C.surface,
                border: `1px solid ${C.border}`,
                textDecoration: 'none',
                textAlign: 'left',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.goldBorder
                e.currentTarget.style.background = 'rgba(22,18,32,0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border
                e.currentTarget.style.background = C.surface
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: C.goldFaint, flexShrink: 0,
              }}>
                <path.icon size={22} style={{ color: C.gold }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: C.text, marginBottom: '3px' }}>
                  {path.label}
                </p>
                <p style={{ fontSize: '13px', color: C.muted, lineHeight: 1.4 }}>
                  {path.desc}
                </p>
              </div>
              <ArrowRight size={16} style={{ color: C.gold, flexShrink: 0 }} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StepProgress() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '72px', height: '72px', borderRadius: '20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: C.goldFaint,
          border: `1px solid ${C.goldBorder}`,
          marginBottom: '24px',
        }}
      >
        <Bookmark size={32} style={{ color: C.gold }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 4.5vw, 30px)',
          fontWeight: 600,
          color: C.text,
          marginBottom: '20px',
          lineHeight: 1.3,
        }}
      >
        Seu progresso é salvo
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: C.secondary,
          maxWidth: '360px',
          marginBottom: '32px',
        }}
      >
        Tudo fica guardado localmente no seu dispositivo.
        Nenhuma conta necessária.
      </motion.p>

      {/* Feature list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '320px' }}>
        {[
          { icon: Flame, text: 'Sequência de dias ativos' },
          { icon: Bookmark, text: 'Favoritos e marcações' },
          { icon: BookOpen, text: 'Progresso de leitura do Alcorão' },
          { icon: Heart, text: 'Reflexões do seu diário' },
        ].map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textAlign: 'left',
            }}
          >
            <item.icon size={18} style={{ color: C.gold, flexShrink: 0 }} />
            <p style={{ fontSize: '14px', color: C.secondary, lineHeight: 1.5 }}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StepBegin({ onComplete }: { onComplete: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>
      {/* Bismillah */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(48px, 14vw, 88px)',
          color: C.gold,
          lineHeight: 1.4,
          marginBottom: '8px',
          direction: 'rtl',
          filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.2))',
        }}
      >
        بِسْمِ اللَّهِ
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontStyle: 'italic',
          color: C.secondary,
          marginBottom: '8px',
        }}
      >
        Em nome de Deus
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 4.5vw, 30px)',
          fontWeight: 600,
          color: C.text,
          marginBottom: '12px',
          lineHeight: 1.3,
        }}
      >
        Comece agora
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{
          fontSize: '15px',
          color: C.muted,
          marginBottom: '36px',
          maxWidth: '340px',
          lineHeight: 1.6,
        }}
      >
        Cada passo conta. Cada dia é uma oportunidade de se aproximar.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onComplete}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '16px 40px',
          borderRadius: '999px',
          background: `linear-gradient(135deg, ${C.gold}, #A88A3A)`,
          color: '#0D0B12',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '0.02em',
          boxShadow: '0 4px 24px rgba(201,168,76,0.3)',
        }}
      >
        <Sparkles size={18} />
        Entrar no Kalam
      </motion.button>
    </div>
  )
}

// ── MAIN CLIENT COMPONENT ──────────────────────────────────────────────────────

export function ComecarClient() {
  const router = useRouter()
  const [[currentStep, direction], setStep] = useState([0, 0])
  const totalSteps = 5

  // If already onboarded, redirect home
  useEffect(() => {
    try {
      if (localStorage.getItem('kalam-onboarding-done') === 'true') {
        router.replace('/')
      }
    } catch {}
  }, [router])

  const goNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setStep([currentStep + 1, 1])
    }
  }, [currentStep])

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setStep([currentStep - 1, -1])
    }
  }, [currentStep])

  const handleSkip = useCallback(() => {
    try { localStorage.setItem('kalam-onboarding-done', 'true') } catch {}
    router.push('/')
  }, [router])

  const handleComplete = useCallback(() => {
    try { localStorage.setItem('kalam-onboarding-done', 'true') } catch {}
    router.push('/')
  }, [router])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      if (diff > 0 && currentStep < totalSteps - 1) {
        goNext()
      } else if (diff < 0 && currentStep > 0) {
        goPrev()
      }
    }
    setTouchStart(null)
  }, [touchStart, currentStep, goNext, goPrev])

  const steps: Step[] = [
    { id: 0, render: () => <StepWelcome /> },
    { id: 1, render: () => <StepSpaces /> },
    { id: 2, render: () => <StepPaths /> },
    { id: 3, render: () => <StepProgress /> },
    { id: 4, render: () => <StepBegin onComplete={handleComplete} /> },
  ]

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: C.bg,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Background particles */}
      <OnboardingParticles />

      {/* Central glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 40%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Top bar: skip */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '16px 20px',
        position: 'relative',
        zIndex: 10,
      }}>
        {currentStep < totalSteps - 1 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: C.muted,
              fontSize: '14px',
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '8px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = C.secondary }}
            onMouseLeave={(e) => { e.currentTarget.style.color = C.muted }}
          >
            Pular
            <X size={16} />
          </motion.button>
        )}
      </div>

      {/* Step content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden',
      }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxHeight: '100%',
              overflowY: 'auto',
              padding: '0 0 20px 0',
            }}
          >
            {steps[currentStep].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: dots + nav buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '0 24px 40px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === currentStep ? 24 : 8,
                background: i === currentStep ? C.gold : i < currentStep ? 'rgba(201,168,76,0.4)' : C.border,
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: 8,
                borderRadius: 4,
                cursor: 'pointer',
              }}
              onClick={() => setStep([i, i > currentStep ? 1 : -1])}
            />
          ))}
        </div>

        {/* Nav buttons */}
        {currentStep < totalSteps - 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {currentStep > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goPrev}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  color: C.secondary,
                  cursor: 'pointer',
                }}
              >
                <ArrowLeft size={20} />
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={goNext}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '999px',
                background: 'none',
                border: `1px solid ${C.goldBorder}`,
                color: C.gold,
                fontSize: '15px',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.goldFaint }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'none' }}
            >
              Próximo
              <ArrowRight size={16} />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}
