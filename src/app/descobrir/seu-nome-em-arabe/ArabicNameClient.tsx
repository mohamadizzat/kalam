'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Share2, Copy, Check, X, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { ARABIC_NAMES, transliterateToArabic, type ArabicName } from '@/lib/data/arabic-names'

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

// ── Helper: find name ────────────────────────────────────────────────────────
function findName(input: string): { name: ArabicName; isExact: boolean } {
  const normalized = input.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Exact match
  const exact = ARABIC_NAMES.find(n =>
    n.latin.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normalized
  )
  if (exact) return { name: exact, isExact: true }

  // Partial match (starts with)
  const partial = ARABIC_NAMES.find(n =>
    n.latin.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').startsWith(normalized)
  )
  if (partial) return { name: partial, isExact: true }

  // Fallback: transliteration
  const arabic = transliterateToArabic(input)
  return {
    name: {
      latin: input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase(),
      arabic,
      transliteration: input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase(),
      meaning: 'Sonoridade única em árabe',
      origin: 'Adaptação fonética',
      gender: 'U' as const,
    },
    isExact: false,
  }
}

// ── Share Card Modal ────────────────────────────────────────────────────────
function ShareCardModal({
  name,
  isOpen,
  onClose,
}: {
  name: ArabicName
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

  const shareText = `Meu nome em árabe é ${name.arabic} (${name.transliteration})\n\nDescubra o seu → kalambrasil.com/descobrir/seu-nome-em-arabe`

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
        await navigator.share({ title: `${name.latin} em Árabe | KALAM`, text: shareText })
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        if ((err as DOMException).name !== 'AbortError') handleCopy()
      }
    } else {
      handleCopy()
    }
  }, [shareText, handleCopy, name.latin])

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
                border: `1px solid rgba(201,168,76,0.2)`,
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.06)',
              }}
            >
              <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
              <div style={{ padding: '36px 28px 28px' }}>
                {/* Ornament */}
                <div style={{ textAlign: 'center', marginBottom: 20, color: T.gold, opacity: 0.4, fontSize: 20, fontFamily: 'var(--font-arabic)', letterSpacing: 8 }}>
                  &#x2756; &#x2756; &#x2756;
                </div>

                {/* Arabic name */}
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  direction: 'rtl',
                  textAlign: 'center',
                  fontSize: 'clamp(40px, 10vw, 64px)',
                  lineHeight: 1.4,
                  color: T.gold,
                  textShadow: '0 0 40px rgba(201,168,76,0.3)',
                  marginBottom: 8,
                }}>
                  {name.arabic}
                </p>

                {/* Transliteration */}
                <p style={{ textAlign: 'center', fontSize: 18, color: T.text, fontFamily: 'var(--font-serif)', fontWeight: 600, marginBottom: 4 }}>
                  {name.transliteration}
                </p>

                {/* Latin name */}
                <p style={{ textAlign: 'center', fontSize: 14, color: T.muted, marginBottom: 20 }}>
                  {name.latin}
                </p>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '16px 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3))' }} />
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: T.gold, opacity: 0.5 }} />
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.3))' }} />
                </div>

                {/* Meaning */}
                <p style={{ textAlign: 'center', fontSize: 15, lineHeight: 1.75, color: T.secondary, marginBottom: 8 }}>
                  {name.meaning}
                </p>
                <p style={{ textAlign: 'center', fontSize: 12, color: T.muted }}>
                  Origem: {name.origin}
                </p>

                {/* Quran badge */}
                {name.quranRef && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    marginTop: 16,
                    padding: '8px 16px',
                    borderRadius: 20,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.15)',
                  }}>
                    <BookOpen size={14} style={{ color: T.gold }} />
                    <span style={{ fontSize: 12, color: T.gold, fontWeight: 500 }}>
                      Mencionado no Alcorão — {name.quranRef}
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  marginTop: 20,
                  borderTop: '1px solid rgba(39,34,48,0.6)',
                }}>
                  <span style={{ fontSize: 12, color: T.muted }}>Seu Nome em Árabe</span>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.gold, opacity: 0.4, fontFamily: 'var(--font-sans)' }}>
                    KALAM
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
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
                  border: '1px solid rgba(201,168,76,0.3)',
                  background: 'rgba(201,168,76,0.1)',
                  color: T.gold,
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
export default function ArabicNameClient() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<{ name: ArabicName; isExact: boolean } | null>(null)
  const [phase, setPhase] = useState<'input' | 'revealing' | 'revealed'>('input')
  const [shareOpen, setShareOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = useCallback((e?: React.FormEvent) => {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const found = findName(trimmed)
    setResult(found)
    setPhase('revealing')

    // Reveal after animation delay
    setTimeout(() => setPhase('revealed'), 1800)
  }, [input])

  const handleReset = useCallback(() => {
    setInput('')
    setResult(null)
    setPhase('input')
    setTimeout(() => inputRef.current?.focus(), 100)
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
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 480 }}>
        <AnimatePresence mode="wait">
          {/* ── INPUT PHASE ── */}
          {phase === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center' }}
            >
              {/* Title */}
              <div style={{ marginBottom: 8 }}>
                <span style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 'clamp(28px, 8vw, 40px)',
                  color: T.gold,
                  textShadow: '0 0 30px rgba(201,168,76,0.2)',
                  display: 'block',
                  marginBottom: 8,
                }}>
                  اسمك بالعربية
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 6vw, 36px)',
                fontWeight: 700,
                color: T.text,
                lineHeight: 1.2,
                marginBottom: 8,
              }}>
                Seu Nome em Árabe
              </h1>

              <p style={{
                fontSize: 15,
                color: T.secondary,
                lineHeight: 1.6,
                marginBottom: 32,
                maxWidth: 360,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                Descubra como seu nome é escrito em árabe e o que ele significa.
              </p>

              {/* Input form */}
              <form onSubmit={handleSubmit}>
                <div style={{
                  position: 'relative',
                  marginBottom: 16,
                }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite seu nome..."
                    autoComplete="off"
                    autoCapitalize="words"
                    style={{
                      width: '100%',
                      padding: '18px 56px 18px 24px',
                      borderRadius: 16,
                      border: `1px solid ${T.border}`,
                      background: T.surface,
                      color: T.text,
                      fontSize: 18,
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = T.border }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      border: 'none',
                      background: input.trim() ? T.gold : 'rgba(201,168,76,0.2)',
                      color: input.trim() ? T.bg : T.muted,
                      cursor: input.trim() ? 'pointer' : 'default',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>

              {/* Popular names */}
              <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 12, color: T.muted, marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Mais buscados
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                  {['Gabriel', 'Lucas', 'Pedro', 'Maria', 'João', 'Beatriz', 'Rafael', 'Julia'].map((n) => (
                    <button
                      key={n}
                      onClick={() => { setInput(n); setTimeout(() => { const found = findName(n); setResult(found); setPhase('revealing'); setTimeout(() => setPhase('revealed'), 1800) }, 50) }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 20,
                        border: `1px solid ${T.border}`,
                        background: 'transparent',
                        color: T.secondary,
                        fontSize: 13,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── REVEALING PHASE ── */}
          {phase === 'revealing' && result && (
            <motion.div
              key="revealing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '60px 0' }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  direction: 'rtl',
                  fontSize: 'clamp(56px, 15vw, 96px)',
                  lineHeight: 1.3,
                  color: T.gold,
                  textShadow: '0 0 60px rgba(201,168,76,0.4), 0 0 120px rgba(201,168,76,0.15)',
                }}>
                  {result.name.arabic}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Sparkles size={20} style={{ color: T.gold, opacity: 0.5, margin: '16px auto' }} />
              </motion.div>
            </motion.div>
          )}

          {/* ── REVEALED PHASE ── */}
          {phase === 'revealed' && result && (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              {/* Arabic name */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                style={{
                  fontFamily: 'var(--font-arabic)',
                  direction: 'rtl',
                  fontSize: 'clamp(48px, 12vw, 80px)',
                  lineHeight: 1.3,
                  color: T.gold,
                  textShadow: '0 0 50px rgba(201,168,76,0.3)',
                  marginBottom: 12,
                }}
              >
                {result.name.arabic}
              </motion.p>

              {/* Transliteration */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{
                  fontSize: 22,
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: T.text,
                  marginBottom: 4,
                }}
              >
                {result.name.transliteration}
              </motion.p>

              {/* Latin name */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{ fontSize: 14, color: T.muted, marginBottom: 24 }}
              >
                {result.name.latin}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 auto 24px', maxWidth: 280 }}
              >
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3))' }} />
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: T.gold, opacity: 0.5 }} />
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.3))' }} />
              </motion.div>

              {/* Meaning */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <p style={{ fontSize: 17, lineHeight: 1.6, color: T.secondary, marginBottom: 6 }}>
                  {result.name.meaning}
                </p>
                <p style={{ fontSize: 13, color: T.muted, marginBottom: 20 }}>
                  Origem: {result.name.origin}
                </p>
              </motion.div>

              {/* Quran badge */}
              {result.name.quranRef && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 20px',
                    borderRadius: 24,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    marginBottom: 24,
                  }}
                >
                  <BookOpen size={16} style={{ color: T.gold }} />
                  <span style={{ fontSize: 13, color: T.gold, fontWeight: 500 }}>
                    Mencionado no Alcorão — {result.name.quranRef}
                  </span>
                </motion.div>
              )}

              {/* Not exact match notice */}
              {!result.isExact && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    marginBottom: 24,
                    padding: '8px 16px',
                    borderRadius: 12,
                    background: 'rgba(201,168,76,0.04)',
                    display: 'inline-block',
                  }}
                >
                  Resultado aproximado — seu nome tem uma sonoridade única em árabe
                </motion.p>
              )}

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}
              >
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => setShareOpen(true)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '16px 24px',
                      borderRadius: 14,
                      border: '1px solid rgba(201,168,76,0.3)',
                      background: 'rgba(201,168,76,0.1)',
                      color: T.gold,
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    <Share2 size={18} />
                    Compartilhar
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  style={{
                    padding: '14px 24px',
                    borderRadius: 14,
                    border: `1px solid ${T.border}`,
                    background: 'transparent',
                    color: T.secondary,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Descobrir outro nome
                </button>

                {/* CTA to prophet content */}
                {result.name.quranRef && (
                  <Link
                    href="/os-profetas"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '12px 24px',
                      borderRadius: 14,
                      background: 'transparent',
                      color: T.gold,
                      fontSize: 13,
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease',
                      opacity: 0.7,
                    }}
                  >
                    <BookOpen size={14} />
                    {result.name.latin} aparece no Alcorão — descubra por quê
                  </Link>
                )}

                {/* Cross-sell: quiz */}
                <Link
                  href="/descobrir/qual-profeta-voce-e"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '12px 24px',
                    borderRadius: 14,
                    background: 'transparent',
                    color: T.muted,
                    fontSize: 13,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <Sparkles size={14} />
                  Descubra também qual profeta te inspira
                </Link>
              </motion.div>

              {/* Share card modal */}
              <ShareCardModal
                name={result.name}
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
