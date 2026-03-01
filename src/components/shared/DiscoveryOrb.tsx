'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, RefreshCw, Sparkles, ArrowRight } from 'lucide-react'
import {
  getRandomUnseen,
  markSeen,
  getDiscoveryProgress,
  type DiscoveryItem,
} from '@/lib/discovery-engine'

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

// ── TYPE BADGES ──────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<DiscoveryItem['type'], { label: string; color: string }> = {
  fact: { label: 'Fato', color: '#4CAF50' },
  question: { label: 'Pergunta', color: '#FF9800' },
  story: { label: 'História', color: '#9C27B0' },
  prophet: { label: 'Profeta', color: '#2196F3' },
  hadith: { label: 'Hadith', color: '#00BCD4' },
  bridge: { label: 'Ponte', color: '#E91E63' },
  phenomenon: { label: 'Fenômeno', color: '#8BC34A' },
  system: { label: 'Sistema', color: '#FF5722' },
}

// ── HIDDEN ROUTES (immersive reading) ────────────────────────────────────────

const HIDDEN_PATTERNS = ['/a-palavra/surah/', '/a-presenca/salah']

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function DiscoveryOrb() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<DiscoveryItem[]>([])
  const [progress, setProgress] = useState({ seen: 0, total: 0, percentage: 0 })
  const [mounted, setMounted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Mount guard
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load items when panel opens
  useEffect(() => {
    if (isOpen && mounted) {
      const newItems = getRandomUnseen(3)
      setItems(newItems)
      setProgress(getDiscoveryProgress())
    }
  }, [isOpen, mounted])

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return

    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    // Slight delay to avoid immediate close on orb click
    const timeout = setTimeout(() => {
      document.addEventListener('click', handleClick)
    }, 100)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  const handleRefresh = useCallback(() => {
    // Mark current items as seen
    if (items.length > 0) {
      markSeen(items.map(i => i.id))
    }
    const newItems = getRandomUnseen(3)
    setItems(newItems)
    setProgress(getDiscoveryProgress())
  }, [items])

  const handleItemClick = useCallback(
    (item: DiscoveryItem) => {
      markSeen([item.id])
      setProgress(getDiscoveryProgress())
      router.push(item.href)
      setIsOpen(false)
    },
    [router]
  )

  // Hide on immersive routes
  const shouldHide = HIDDEN_PATTERNS.some(p => pathname.startsWith(p))
  if (shouldHide || !mounted) return null

  return (
    <>
      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .discovery-orb-btn { bottom: 80px !important; }
          .discovery-panel {
            left: 8px !important;
            right: 8px !important;
            bottom: 80px !important;
            width: auto !important;
            max-width: none !important;
          }
        }
        @media (min-width: 769px) {
          .discovery-panel {
            right: 20px !important;
            bottom: 80px !important;
            left: auto !important;
            width: 340px !important;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════════
          ORB BUTTON — fixed bottom-right, pulsing
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="discovery-orb-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
            aria-label="Descobrir conteúdo"
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              zIndex: 150,
              width: 56,
              height: 56,
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.25)',
              background: 'radial-gradient(circle, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.08) 70%)',
              boxShadow: '0 0 20px rgba(201,168,76,0.15), 0 4px 16px rgba(0,0,0,0.3)',
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
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.2)',
                pointerEvents: 'none',
              }}
            />

            {/* Orbiting particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  inset: -(6 + i * 4),
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: T.gold,
                    opacity: 0.3 + i * 0.15,
                    transform: 'translateX(-50%)',
                  }}
                />
              </motion.div>
            ))}

            {/* Icon */}
            <Sparkles size={20} style={{ color: T.gold, position: 'relative', zIndex: 1 }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          DISCOVERY PANEL — glass-morphism expandable
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            className="discovery-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              width: 340,
              zIndex: 200,
              background: 'rgba(13,11,18,0.95)',
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: 20,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.05)',
              overflow: 'hidden',
            }}
          >
            {/* ── Header ── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 18px 12px',
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={16} style={{ color: T.gold }} />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 15,
                    color: T.text,
                    fontWeight: 600,
                  }}
                >
                  Descubra algo novo
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

            {/* ── Progress bar ── */}
            <div style={{ padding: '10px 18px 4px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 11, color: T.muted }}>
                  {progress.seen} de {progress.total} descobertos
                </span>
                <span style={{ fontSize: 11, color: T.gold, fontWeight: 600 }}>
                  {progress.percentage}%
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: 'rgba(201,168,76,0.1)',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.percentage}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${T.gold}, rgba(201,168,76,0.6))`,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>

            {/* ── Content cards ── */}
            <div style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map((item, i) => {
                const badge = TYPE_LABELS[item.type]
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.25 }}
                    onClick={() => handleItemClick(item)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderRadius: 12,
                      border: `1px solid ${T.border}`,
                      background: T.surface,
                      cursor: 'pointer',
                      transition: 'border-color 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.currentTarget.style.background = 'rgba(22,18,32,0.9)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = T.border
                      e.currentTarget.style.background = T.surface
                    }}
                  >
                    {/* Badge + source */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: badge.color,
                          padding: '2px 6px',
                          borderRadius: 4,
                          background: `${badge.color}15`,
                        }}
                      >
                        {badge.label}
                      </span>
                      <span style={{ fontSize: 10, color: T.muted }}>{item.source}</span>
                    </div>

                    {/* Title */}
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: T.text,
                        marginBottom: 4,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </p>

                    {/* Preview */}
                    <p
                      style={{
                        fontSize: 12,
                        color: T.secondary,
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.preview}
                    </p>

                    {/* Arrow */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                      <ArrowRight size={12} style={{ color: T.gold, opacity: 0.6 }} />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* ── Footer: Refresh ── */}
            <div
              style={{
                padding: '10px 18px 16px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={handleRefresh}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: '1px solid rgba(201,168,76,0.15)',
                  background: 'rgba(201,168,76,0.06)',
                  color: T.gold,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                }}
              >
                <RefreshCw size={12} />
                Mostrar mais
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
