'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  BookOpen,
  CheckSquare,
  Heart,
  Languages,
  Moon,
  TrendingUp,
} from 'lucide-react'

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

// ── QUICK ACCESS FEATURES ────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'santuario',
    label: 'Santuario',
    description: 'Estudo imersivo do Quran',
    href: '/a-palavra/santuario',
    icon: BookOpen,
    color: '#C9A84C',
    emoji: '📖',
  },
  {
    id: 'habitos',
    label: 'Habitos',
    description: 'Suas praticas diarias',
    href: '/a-alma/habitos',
    icon: CheckSquare,
    color: '#4CAF50',
    emoji: '✅',
  },
  {
    id: 'mood',
    label: 'Como Voce Esta',
    description: 'Pratica personalizada',
    href: '/a-alma/como-voce-esta',
    icon: Heart,
    color: '#E07A5F',
    emoji: '💛',
  },
  {
    id: 'arabe',
    label: 'Arabe do Quran',
    description: '300 palavras essenciais',
    href: '/a-presenca/arabe-quran',
    icon: Languages,
    color: '#7BADE2',
    emoji: '🔤',
  },
  {
    id: 'progresso',
    label: 'Meu Progresso',
    description: 'Tracker de leitura',
    href: '/a-palavra/progresso',
    icon: TrendingUp,
    color: '#B38BDB',
    emoji: '📊',
  },
  {
    id: 'sleep',
    label: 'Sleep Stories',
    description: 'Historias para dormir',
    href: '/contemplativo/sleep',
    icon: Moon,
    color: '#6B8F71',
    emoji: '🌙',
  },
]

// ── HIDDEN ROUTES (immersive) ────────────────────────────────────────────────

const HIDDEN_PATTERNS = ['/a-palavra/santuario', '/contemplativo/sleep', '/a-presenca/salah']

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function QuickAccessOrb() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // Close on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const timeout = setTimeout(() => {
      document.addEventListener('click', handleClick)
    }, 100)
    return () => {
      clearTimeout(timeout)
      document.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  const shouldHide = HIDDEN_PATTERNS.some(p => pathname.startsWith(p))
  if (shouldHide || !mounted) return null

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .qa-orb-btn { bottom: 80px !important; right: 16px !important; }
          .qa-panel {
            left: 12px !important;
            right: 12px !important;
            bottom: 80px !important;
            width: auto !important;
            max-width: none !important;
          }
        }
        @media (min-width: 769px) {
          .qa-panel {
            right: 20px !important;
            bottom: 80px !important;
            left: auto !important;
            width: 360px !important;
          }
        }
      `}</style>

      {/* ── ORB BUTTON ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="qa-orb-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
            aria-label="Acesso rapido"
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              zIndex: 150,
              width: 56,
              height: 56,
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'radial-gradient(circle, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.1) 70%)',
              boxShadow: '0 0 24px rgba(201,168,76,0.2), 0 4px 16px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.2)',
                pointerEvents: 'none',
              }}
            />
            {/* Arabic calligraphy icon */}
            <span style={{
              fontFamily: "'Amiri', var(--font-arabic), serif",
              fontSize: 22,
              color: T.gold,
              position: 'relative',
              zIndex: 1,
              textShadow: '0 0 12px rgba(201,168,76,0.3)',
            }}>
              ك
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            className="qa-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              width: 360,
              zIndex: 200,
              background: 'rgba(13,11,18,0.96)',
              border: '1px solid rgba(201,168,76,0.12)',
              borderRadius: 20,
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.05)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 18px 12px',
              borderBottom: `1px solid ${T.border}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: "'Amiri', var(--font-arabic), serif",
                  fontSize: 16,
                  color: T.gold,
                  textShadow: '0 0 10px rgba(201,168,76,0.2)',
                }}>
                  كلام
                </span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 14,
                  color: T.text,
                  fontWeight: 600,
                }}>
                  Acesso Rapido
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: T.muted,
                  padding: 4,
                  display: 'flex',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* 6 Feature Cards — 2x3 grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              padding: '14px 14px 18px',
            }}>
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon
                const isCurrentPage = pathname.startsWith(feature.href)
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={feature.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        padding: '14px 12px',
                        borderRadius: 14,
                        border: `1px solid ${isCurrentPage ? 'rgba(201,168,76,0.25)' : T.border}`,
                        background: isCurrentPage ? 'rgba(201,168,76,0.06)' : T.surface,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        minHeight: 80,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                        e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isCurrentPage ? 'rgba(201,168,76,0.25)' : T.border
                        e.currentTarget.style.background = isCurrentPage ? 'rgba(201,168,76,0.06)' : T.surface
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {/* Icon */}
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${feature.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={16} style={{ color: feature.color }} />
                      </div>

                      {/* Label */}
                      <span style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: T.text,
                        lineHeight: 1.2,
                      }}>
                        {feature.label}
                      </span>

                      {/* Description */}
                      <span style={{
                        fontSize: 11,
                        color: T.muted,
                        lineHeight: 1.3,
                      }}>
                        {feature.description}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
