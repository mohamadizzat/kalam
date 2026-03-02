'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
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
  Sparkles,
  RefreshCw,
  ArrowRight,
  Compass,
  Zap,
} from 'lucide-react'
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

// ── QUICK ACCESS FEATURES ────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'santuario',
    label: 'Santuario',
    description: 'Estudo imersivo do Quran',
    href: '/a-palavra/santuario',
    icon: BookOpen,
    color: '#C9A84C',
  },
  {
    id: 'habitos',
    label: 'Habitos',
    description: 'Suas praticas diarias',
    href: '/a-alma/habitos',
    icon: CheckSquare,
    color: '#4CAF50',
  },
  {
    id: 'mood',
    label: 'Como Voce Esta',
    description: 'Pratica personalizada',
    href: '/a-alma/como-voce-esta',
    icon: Heart,
    color: '#E07A5F',
  },
  {
    id: 'arabe',
    label: 'Arabe do Quran',
    description: '300 palavras essenciais',
    href: '/a-presenca/arabe-quran',
    icon: Languages,
    color: '#7BADE2',
  },
  {
    id: 'progresso',
    label: 'Meu Progresso',
    description: 'Tracker de leitura',
    href: '/a-palavra/progresso',
    icon: TrendingUp,
    color: '#B38BDB',
  },
  {
    id: 'sleep',
    label: 'Sleep Stories',
    description: 'Historias para dormir',
    href: '/contemplativo/sleep',
    icon: Moon,
    color: '#6B8F71',
  },
]

// ── DISCOVERY TYPE BADGES ────────────────────────────────────────────────────

const TYPE_LABELS: Record<DiscoveryItem['type'], { label: string; color: string }> = {
  fact: { label: 'Fato', color: '#4CAF50' },
  question: { label: 'Pergunta', color: '#FF9800' },
  story: { label: 'Historia', color: '#9C27B0' },
  prophet: { label: 'Profeta', color: '#2196F3' },
  hadith: { label: 'Hadith', color: '#00BCD4' },
  bridge: { label: 'Ponte', color: '#E91E63' },
  phenomenon: { label: 'Fenomeno', color: '#8BC34A' },
  system: { label: 'Sistema', color: '#FF5722' },
}

// ── HIDDEN ROUTES (immersive) ────────────────────────────────────────────────

const HIDDEN_PATTERNS = ['/a-palavra/santuario', '/contemplativo/sleep', '/a-presenca/salah']

type Tab = 'access' | 'discover'

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function QuickAccessOrb() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('access')
  const [mounted, setMounted] = useState(false)
  const [items, setItems] = useState<DiscoveryItem[]>([])
  const [progress, setProgress] = useState({ seen: 0, total: 0, percentage: 0 })
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // Close on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Load discovery items when discover tab opens
  useEffect(() => {
    if (isOpen && activeTab === 'discover' && mounted) {
      const newItems = getRandomUnseen(3)
      setItems(newItems)
      setProgress(getDiscoveryProgress())
    }
  }, [isOpen, activeTab, mounted])

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

  const handleRefresh = useCallback(() => {
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

            {/* Tab switcher */}
            <div style={{
              display: 'flex',
              gap: 0,
              padding: '0 14px',
              borderBottom: `1px solid ${T.border}`,
            }}>
              {([
                { id: 'access' as Tab, label: 'Acesso Rapido', icon: Zap },
                { id: 'discover' as Tab, label: 'Descobrir', icon: Sparkles },
              ]).map((tab) => {
                const isActive = activeTab === tab.id
                const TabIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '10px 0',
                      background: 'none',
                      border: 'none',
                      borderBottom: `2px solid ${isActive ? T.gold : 'transparent'}`,
                      cursor: 'pointer',
                      color: isActive ? T.gold : T.muted,
                      fontSize: 12,
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <TabIcon size={14} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* ── TAB: ACCESS (6 Feature Cards) ── */}
            {activeTab === 'access' && (
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
                        <span style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: T.text,
                          lineHeight: 1.2,
                        }}>
                          {feature.label}
                        </span>
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
            )}

            {/* ── TAB: DISCOVER (Insights / Pilulas) ── */}
            {activeTab === 'discover' && (
              <>
                {/* Progress bar */}
                <div style={{ padding: '10px 18px 4px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 11, color: T.muted }}>
                      {progress.seen} de {progress.total} descobertos
                    </span>
                    <span style={{ fontSize: 11, color: T.gold, fontWeight: 600 }}>
                      {progress.percentage}%
                    </span>
                  </div>
                  <div style={{
                    height: 3,
                    borderRadius: 2,
                    background: 'rgba(201,168,76,0.1)',
                    overflow: 'hidden',
                  }}>
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

                {/* Discovery cards */}
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
                          <span style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: badge.color,
                            padding: '2px 6px',
                            borderRadius: 4,
                            background: `${badge.color}15`,
                          }}>
                            {badge.label}
                          </span>
                          <span style={{ fontSize: 10, color: T.muted }}>{item.source}</span>
                        </div>

                        {/* Title */}
                        <p style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: T.text,
                          marginBottom: 4,
                          lineHeight: 1.3,
                        }}>
                          {item.title}
                        </p>

                        {/* Preview */}
                        <p style={{
                          fontSize: 12,
                          color: T.secondary,
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
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

                {/* Refresh button */}
                <div style={{
                  padding: '10px 18px 16px',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
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
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
