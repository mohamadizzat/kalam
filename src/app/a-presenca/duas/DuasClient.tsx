'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, Sun, Moon, BookOpen, BookMarked } from 'lucide-react'
import {
  morningAdhkar,
  eveningAdhkar,
  dailyDuas,
  quranicDuas,
  type Dua,
} from '@/lib/data/duas'

type TabId = 'morning' | 'evening' | 'daily' | 'quranic'

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'morning', label: 'Manha', icon: <Sun size={16} /> },
  { id: 'evening', label: 'Noite', icon: <Moon size={16} /> },
  { id: 'daily', label: 'Diarias', icon: <BookOpen size={16} /> },
  { id: 'quranic', label: 'Coranicas', icon: <BookMarked size={16} /> },
]

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function getStorageKey(date: string): string {
  return 'kalam-adhkar-' + date
}

function getDuasForTab(tab: TabId): Dua[] {
  switch (tab) {
    case 'morning': return morningAdhkar
    case 'evening': return eveningAdhkar
    case 'daily': return dailyDuas
    case 'quranic': return quranicDuas
  }
}

export function DuasClient() {
  const [activeTab, setActiveTab] = useState<TabId>('morning')
  const [completedToday, setCompletedToday] = useState<Set<string>>(new Set())
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Load completed from localStorage
  useEffect(() => {
    setMounted(true)
    const today = getToday()
    const saved = localStorage.getItem(getStorageKey(today))
    if (saved) {
      try {
        setCompletedToday(new Set(JSON.parse(saved)))
      } catch {
        // ignore corrupted data
      }
    }
  }, [])

  // Save completed when it changes
  useEffect(() => {
    if (mounted && completedToday.size > 0) {
      const today = getToday()
      localStorage.setItem(getStorageKey(today), JSON.stringify([...completedToday]))
    }
  }, [completedToday, mounted])

  const toggleComplete = useCallback((id: string) => {
    setCompletedToday(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const toggleExpand = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id)
  }, [])

  const currentDuas = getDuasForTab(activeTab)
  const completedCount = currentDuas.filter(d => completedToday.has(d.id)).length
  const showProgress = activeTab === 'morning' || activeTab === 'evening'

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/a-presenca" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '24px',
          }}>
            <ArrowLeft size={16} />
            A Presenca
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Duas & Adhkar
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
            marginTop: '8px',
          }}>
            Suplicas para todo momento
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '4px',
            marginTop: '32px',
            padding: '4px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setExpandedId(null)
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px 8px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? 600 : 400,
                fontFamily: 'var(--font-sans)',
                background: activeTab === tab.id ? '#272230' : 'transparent',
                color: activeTab === tab.id ? '#F0EBE2' : '#7A7870',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Progress bar (morning/evening only) */}
        {showProgress && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ marginTop: '20px' }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}>
              <p style={{
                fontSize: '13px',
                color: '#B3B0A6',
              }}>
                {completedCount} de {currentDuas.length} concluidos hoje
              </p>
              {completedCount === currentDuas.length && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    fontSize: '13px',
                    color: '#C9A84C',
                    fontWeight: 600,
                  }}
                >
                  Completo!
                </motion.p>
              )}
            </div>
            <div style={{
              width: '100%',
              height: '4px',
              borderRadius: '2px',
              background: '#272230',
              overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedCount / currentDuas.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  borderRadius: '2px',
                  background: '#C9A84C',
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Duas List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '24px',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {currentDuas.map((dua, index) => {
                const isCompleted = completedToday.has(dua.id)
                const isExpanded = expandedId === dua.id

                return (
                  <motion.div
                    key={dua.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(index * 0.03, 0.3) }}
                    style={{
                      borderRadius: '16px',
                      background: '#161220',
                      border: `1px solid ${isCompleted ? '#C9A84C33' : '#272230'}`,
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {/* Card Header — always visible */}
                    <button
                      onClick={() => toggleExpand(dua.id)}
                      style={{
                        width: '100%',
                        padding: '24px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      {/* Situation label */}
                      {dua.situation && (
                        <p style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#C9A84C',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {dua.situation}
                        </p>
                      )}

                      {/* Arabic */}
                      <p style={{
                        fontFamily: 'var(--font-arabic)',
                        fontSize: 'clamp(20px, 4vw, 26px)',
                        lineHeight: 1.8,
                        color: '#C9A84C',
                        direction: 'rtl',
                        textAlign: 'right',
                        width: '100%',
                      }}>
                        {dua.arabic}
                      </p>

                      {/* Transliteration (compact preview) */}
                      <p style={{
                        fontSize: '13px',
                        color: '#7A7870',
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                        display: isExpanded ? 'none' : '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as const,
                        overflow: 'hidden',
                      }}>
                        {dua.transliteration}
                      </p>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{
                            padding: '0 24px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                          }}>
                            {/* Transliteration full */}
                            <p style={{
                              fontSize: '14px',
                              color: '#7A7870',
                              fontStyle: 'italic',
                              lineHeight: 1.6,
                            }}>
                              {dua.transliteration}
                            </p>

                            {/* Divider */}
                            <div style={{
                              height: '1px',
                              background: '#272230',
                            }} />

                            {/* Portuguese */}
                            <p style={{
                              fontSize: '14px',
                              color: '#B3B0A6',
                              lineHeight: 1.7,
                            }}>
                              {dua.portuguese}
                            </p>

                            {/* Benefit */}
                            {dua.benefit && (
                              <p style={{
                                fontSize: '13px',
                                color: '#C9A84C',
                                lineHeight: 1.5,
                                padding: '12px 16px',
                                borderRadius: '10px',
                                background: '#C9A84C0A',
                                border: '1px solid #C9A84C1A',
                              }}>
                                {dua.benefit}
                              </p>
                            )}

                            {/* Source + Check */}
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                            }}>
                              <p style={{
                                fontSize: '12px',
                                color: '#7A7870',
                              }}>
                                {dua.source}
                              </p>

                              {/* Complete button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleComplete(dua.id)
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '8px 14px',
                                  borderRadius: '8px',
                                  border: `1px solid ${isCompleted ? '#C9A84C44' : '#272230'}`,
                                  background: isCompleted ? '#C9A84C15' : 'transparent',
                                  color: isCompleted ? '#C9A84C' : '#7A7870',
                                  fontSize: '12px',
                                  fontWeight: 500,
                                  cursor: 'pointer',
                                  fontFamily: 'var(--font-sans)',
                                  flexShrink: 0,
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                <Check size={14} />
                                {isCompleted ? 'Concluido' : 'Concluir'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </main>
  )
}
