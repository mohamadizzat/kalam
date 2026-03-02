'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Copy, Check, X, BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { QUIZ_QUESTIONS, PROPHET_PROFILES, type ProphetProfile } from '@/lib/data/prophet-quiz'

// ── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── Calculate result ────────────────────────────────────────────────────────
function calculateResult(scores: Record<string, number>): ProphetProfile {
  let maxId = 'muhammad'
  let maxScore = 0
  for (const [id, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score
      maxId = id
    }
  }
  return PROPHET_PROFILES[maxId] || PROPHET_PROFILES.muhammad
}

// ── Share Card Modal ────────────────────────────────────────────────────────
function ShareCardModal({
  profile,
  isOpen,
  onClose,
}: {
  profile: ProphetProfile
  isOpen: boolean
  onClose: () => void
}) {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  useEffect(() => {
    if (isOpen) { setCopied(false); setShared(false) }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen, onClose])

  const shareText = `Eu sou ${profile.name}!\n${profile.title}\n\nTraços: ${profile.traits.join(' · ')}\n\nDescubra qual profeta você é → kalambrasil.com/descobrir/qual-profeta-voce-e`

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareText)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = shareText
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [shareText])

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `Eu sou ${profile.name}! | KALAM`, text: shareText })
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        if ((err as DOMException).name !== 'AbortError') handleCopy()
      }
    } else {
      handleCopy()
    }
  }, [shareText, handleCopy, profile.name])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: 420 }}
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                position: 'absolute',
                top: -44,
                right: 0,
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: T.text,
              }}
            >
              <X size={18} />
            </button>

            {/* Card */}
            <div
              style={{
                background: T.bg,
                borderRadius: 20,
                border: `1px solid ${profile.color}33`,
                overflow: 'hidden',
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 60px ${profile.color}10`,
              }}
            >
              <div style={{ height: 3, background: `linear-gradient(90deg, transparent, ${profile.color}, transparent)` }} />
              <div style={{ padding: '36px 28px 28px' }}>
                {/* Ornament */}
                <div style={{ textAlign: 'center', marginBottom: 12, color: profile.color, opacity: 0.4, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
                  Eu sou
                </div>

                {/* Arabic name */}
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  direction: 'rtl',
                  textAlign: 'center',
                  fontSize: 'clamp(40px, 10vw, 64px)',
                  lineHeight: 1.4,
                  color: profile.color,
                  textShadow: `0 0 40px ${profile.color}50`,
                  marginBottom: 8,
                }}>
                  {profile.arabic}
                </p>

                {/* Name + title */}
                <p style={{ textAlign: 'center', fontSize: 20, fontFamily: 'var(--font-serif)', fontWeight: 700, color: T.text, marginBottom: 4 }}>
                  {profile.name}
                </p>
                <p style={{ textAlign: 'center', fontSize: 14, color: profile.color, fontWeight: 500, marginBottom: 20 }}>
                  {profile.title}
                </p>

                {/* Traits */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {profile.traits.map((trait) => (
                    <span
                      key={trait}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 20,
                        background: `${profile.color}15`,
                        border: `1px solid ${profile.color}25`,
                        color: profile.color,
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  borderTop: '1px solid rgba(39,34,48,0.6)',
                }}>
                  <span style={{ fontSize: 12, color: T.muted }}>Qual Profeta Você É?</span>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.gold, opacity: 0.4, fontFamily: 'var(--font-sans)' }}>
                    KALAM
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                onClick={handleCopy}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px 20px',
                  borderRadius: 14,
                  border: `1px solid ${T.border}`,
                  background: T.surface,
                  color: copied ? T.gold : T.text,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={handleShare}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px 20px',
                  borderRadius: 14,
                  border: `1px solid ${profile.color}50`,
                  background: `${profile.color}15`,
                  color: profile.color,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {shared ? <Check size={16} /> : <Share2 size={16} />}
                {shared ? 'Compartilhado!' : 'Compartilhar'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function ProphetQuizClient() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'analyzing' | 'result'>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<ProphetProfile | null>(null)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [shareOpen, setShareOpen] = useState(false)

  const totalQuestions = QUIZ_QUESTIONS.length
  const progress = ((currentQ) / totalQuestions) * 100

  const handleStart = useCallback(() => {
    setPhase('quiz')
    setCurrentQ(0)
    setScores({})
    setResult(null)
  }, [])

  const handleAnswer = useCallback((optionIndex: number) => {
    setSelectedOption(optionIndex)
    const question = QUIZ_QUESTIONS[currentQ]
    const option = question.options[optionIndex]

    // Add scores
    const newScores = { ...scores }
    for (const [prophetId, points] of Object.entries(option.scores)) {
      newScores[prophetId] = (newScores[prophetId] || 0) + points
    }
    setScores(newScores)

    // Auto-advance after short delay
    setTimeout(() => {
      setSelectedOption(null)
      if (currentQ + 1 < totalQuestions) {
        setCurrentQ(currentQ + 1)
      } else {
        // Done — analyze
        setPhase('analyzing')
        setTimeout(() => {
          const prophet = calculateResult(newScores)
          setResult(prophet)
          setPhase('result')
        }, 2500)
      }
    }, 400)
  }, [currentQ, scores, totalQuestions])

  const handleRestart = useCallback(() => {
    setPhase('intro')
    setCurrentQ(0)
    setScores({})
    setResult(null)
    setSelectedOption(null)
  }, [])

  return (
    <div style={{
      minHeight: '100dvh',
      background: T.bg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: result
          ? `radial-gradient(circle, ${result.color}08 0%, transparent 70%)`
          : 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        transition: 'background 0.5s ease',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 520 }}>
        <AnimatePresence mode="wait">
          {/* ── INTRO ── */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: 8 }}>
                <span style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 'clamp(28px, 8vw, 40px)',
                  color: T.gold,
                  textShadow: '0 0 30px rgba(201,168,76,0.2)',
                  display: 'block',
                  marginBottom: 8,
                }}>
                  أي نبي أنت؟
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 6vw, 36px)',
                fontWeight: 700,
                color: T.text,
                lineHeight: 1.2,
                marginBottom: 12,
              }}>
                Qual Profeta Você É?
              </h1>

              <p style={{
                fontSize: 15,
                color: T.secondary,
                lineHeight: 1.6,
                marginBottom: 12,
                maxWidth: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                Responda 7 perguntas e descubra qual profeta tem a personalidade mais parecida com a sua.
              </p>

              <p style={{
                fontSize: 13,
                color: T.muted,
                marginBottom: 36,
              }}>
                8 profetas · 7 perguntas · 2 minutos
              </p>

              <button
                onClick={handleStart}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '18px 40px',
                  borderRadius: 16,
                  border: '1px solid rgba(201,168,76,0.3)',
                  background: 'rgba(201,168,76,0.1)',
                  color: T.gold,
                  fontSize: 17,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Começar
                <ArrowRight size={20} />
              </button>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {phase === 'quiz' && (
            <motion.div
              key={`quiz-${currentQ}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              {/* Progress bar */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: T.muted }}>
                    Pergunta {currentQ + 1} de {totalQuestions}
                  </span>
                  <span style={{ fontSize: 12, color: T.gold }}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <div style={{
                  height: 4,
                  borderRadius: 2,
                  background: T.border,
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: `${((currentQ) / totalQuestions) * 100}%` }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    style={{
                      height: '100%',
                      borderRadius: 2,
                      background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.6))`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(20px, 5vw, 26px)',
                fontWeight: 600,
                color: T.text,
                lineHeight: 1.35,
                marginBottom: 28,
                textAlign: 'center',
              }}>
                {QUIZ_QUESTIONS[currentQ].question}
              </h2>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {QUIZ_QUESTIONS[currentQ].options.map((option, idx) => {
                  const isSelected = selectedOption === idx
                  return (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      onClick={() => selectedOption === null && handleAnswer(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        padding: '18px 20px',
                        borderRadius: 14,
                        border: isSelected ? '1px solid rgba(201,168,76,0.4)' : `1px solid ${T.border}`,
                        background: isSelected ? 'rgba(201,168,76,0.08)' : T.surface,
                        color: isSelected ? T.gold : T.text,
                        fontSize: 15,
                        fontWeight: isSelected ? 500 : 400,
                        cursor: selectedOption === null ? 'pointer' : 'default',
                        transition: 'all 0.2s ease',
                        textAlign: 'left',
                        fontFamily: 'var(--font-sans)',
                        width: '100%',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: isSelected ? 'rgba(201,168,76,0.15)' : `rgba(255,255,255,0.03)`,
                        border: isSelected ? '1px solid rgba(201,168,76,0.3)' : `1px solid ${T.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 600,
                        color: isSelected ? T.gold : T.muted,
                        flexShrink: 0,
                      }}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span style={{ flex: 1 }}>{option.text}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* ── ANALYZING ── */}
          {phase === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '80px 0' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'inline-block', marginBottom: 24 }}
              >
                <Sparkles size={32} style={{ color: T.gold }} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: 20,
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: T.text,
                  marginBottom: 8,
                }}
              >
                Analisando suas respostas...
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ fontSize: 14, color: T.muted }}
              >
                Descobrindo qual profeta combina com você
              </motion.p>
            </motion.div>
          )}

          {/* ── RESULT ── */}
          {phase === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: result.color,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                Você é
              </motion.p>

              {/* Arabic name */}
              <motion.p
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                style={{
                  fontFamily: 'var(--font-arabic)',
                  direction: 'rtl',
                  fontSize: 'clamp(48px, 12vw, 80px)',
                  lineHeight: 1.3,
                  color: result.color,
                  textShadow: `0 0 50px ${result.color}40`,
                  marginBottom: 12,
                }}
              >
                {result.arabic}
              </motion.p>

              {/* Name + title */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: 24,
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: T.text,
                  marginBottom: 4,
                }}
              >
                {result.name}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontSize: 16,
                  color: result.color,
                  fontWeight: 500,
                  marginBottom: 24,
                }}
              >
                {result.title}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: T.secondary,
                  marginBottom: 24,
                  maxWidth: 420,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {result.description}
              </motion.p>

              {/* Traits */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}
              >
                {result.traits.map((trait) => (
                  <span
                    key={trait}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 24,
                      background: `${result.color}12`,
                      border: `1px solid ${result.color}25`,
                      color: result.color,
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </motion.div>

              {/* Verse */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                style={{
                  padding: '20px 24px',
                  borderRadius: 16,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  marginBottom: 28,
                  maxWidth: 420,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: T.secondary,
                  fontStyle: 'italic',
                  marginBottom: 8,
                }}>
                  &ldquo;{result.verse.text}&rdquo;
                </p>
                <p style={{ fontSize: 12, color: T.muted }}>
                  Alcorão {result.verse.ref}
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <button
                  onClick={() => setShareOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '16px 24px',
                    borderRadius: 14,
                    border: `1px solid ${result.color}50`,
                    background: `${result.color}15`,
                    color: result.color,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <Share2 size={18} />
                  Compartilhar resultado
                </button>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={handleRestart}
                    style={{
                      flex: 1,
                      padding: '14px 24px',
                      borderRadius: 14,
                      border: `1px solid ${T.border}`,
                      background: 'transparent',
                      color: T.secondary,
                      fontSize: 14,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    Refazer quiz
                  </button>

                  <Link
                    href={`/os-profetas`}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '14px 24px',
                      borderRadius: 14,
                      border: `1px solid ${T.border}`,
                      background: 'transparent',
                      color: T.secondary,
                      fontSize: 14,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    <BookOpen size={14} />
                    Ver história
                  </Link>
                </div>
              </motion.div>

              {/* Share modal */}
              <ShareCardModal
                profile={result}
                isOpen={shareOpen}
                onClose={() => setShareOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
