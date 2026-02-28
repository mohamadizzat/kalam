'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, ChevronDown, Sun, Moon } from 'lucide-react'
import { morningRoutine, eveningRoutine, type RoutineItem } from '@/lib/data/routines'

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

export function RotinaClient() {
  const [tab, setTab] = useState<'morning' | 'evening'>('morning')
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [expanded, setExpanded] = useState<string | null>(null)
  const today = getToday()

  useEffect(() => {
    const saved = localStorage.getItem('kalam-routine-' + today)
    if (saved) setCompleted(new Set(JSON.parse(saved)))
  }, [today])

  const toggleItem = (id: string) => {
    const next = new Set(completed)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setCompleted(next)
    localStorage.setItem('kalam-routine-' + today, JSON.stringify([...next]))
  }

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  const items = tab === 'morning' ? morningRoutine : eveningRoutine
  const completedCount = items.filter(item => completed.has(item.id)).length
  const totalCount = items.length
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '32px' }}
        >
          <Link href="/a-alma" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            textDecoration: 'none',
            fontSize: '14px',
          }}>
            <ArrowLeft size={16} />
            A Alma
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
          style={{ marginBottom: '32px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: '#F0EBE2',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}>
            Rotina Espiritual
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
          }}>
            Disciplina diaria. Presenca constante.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '4px',
            padding: '4px',
            borderRadius: '12px',
            background: '#161220',
            marginBottom: '24px',
          }}
        >
          <button
            onClick={() => setTab('morning')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: tab === 'morning' ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: tab === 'morning' ? '#C9A84C' : '#7A7870',
              transition: 'all 0.2s',
            }}
          >
            <Sun size={16} />
            Manha
          </button>
          <button
            onClick={() => setTab('evening')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: tab === 'evening' ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: tab === 'evening' ? '#C9A84C' : '#7A7870',
              transition: 'all 0.2s',
            }}
          >
            <Moon size={16} />
            Noite
          </button>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{ marginBottom: '24px' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '13px', color: '#7A7870' }}>
              {completedCount} de {totalCount} concluidos
            </span>
            <span style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '4px',
            background: '#272230',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: '#C9A84C',
                borderRadius: '2px',
              }}
            />
          </div>
        </motion.div>

        {/* Checklist */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: tab === 'morning' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: tab === 'morning' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {items.map((item, i) => {
              const isDone = completed.has(item.id)
              const isExpanded = expanded === item.id

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  style={{
                    borderRadius: '14px',
                    background: '#161220',
                    border: isDone
                      ? '1px solid rgba(201,168,76,0.2)'
                      : '1px solid #272230',
                    overflow: 'hidden',
                  }}
                >
                  {/* Main row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '18px 16px',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Checkbox */}
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '7px',
                      border: isDone ? 'none' : '2px solid #7A7870',
                      background: isDone ? '#C9A84C' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                    }}>
                      {isDone && <Check size={14} style={{ color: '#0D0B12' }} />}
                    </div>

                    {/* Label + time */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: isDone ? '#7A7870' : '#F0EBE2',
                        textDecoration: isDone ? 'line-through' : 'none',
                        transition: 'all 0.2s',
                      }}>
                        {item.label}
                      </p>
                    </div>

                    {/* Time estimate */}
                    <span style={{
                      fontSize: '12px',
                      color: '#7A7870',
                      flexShrink: 0,
                    }}>
                      {item.timeEstimate}
                    </span>

                    {/* Expand arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpand(item.id)
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <ChevronDown size={16} style={{ color: '#7A7870' }} />
                    </button>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '0 16px 18px',
                          borderTop: '1px solid #272230',
                          paddingTop: '14px',
                          marginTop: '-2px',
                        }}>
                          {item.arabic && (
                            <p style={{
                              fontFamily: 'var(--font-arabic)',
                              fontSize: '18px',
                              color: '#C9A84C',
                              direction: 'rtl',
                              textAlign: 'center',
                              lineHeight: 1.8,
                              marginBottom: '12px',
                              padding: '12px',
                              borderRadius: '10px',
                              background: 'rgba(201,168,76,0.04)',
                            }}>
                              {item.arabic}
                            </p>
                          )}
                          <p style={{
                            fontSize: '14px',
                            color: '#7A7870',
                            lineHeight: 1.6,
                          }}>
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Completion message */}
        <AnimatePresence>
          {completedCount === totalCount && totalCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
              style={{
                marginTop: '32px',
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <p style={{
                fontSize: '24px',
                marginBottom: '8px',
              }}>
                {tab === 'morning' ? '\u2600\uFE0F' : '\u{1F319}'}
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                color: '#C9A84C',
                fontWeight: 600,
                marginBottom: '4px',
              }}>
                {tab === 'morning' ? 'Manha completa' : 'Noite completa'}
              </p>
              <p style={{
                fontSize: '13px',
                color: '#7A7870',
              }}>
                {tab === 'morning'
                  ? 'Voce comecou o dia com presenca. Agora va viver.'
                  : 'Voce encerrou o dia em paz. Descanse com Deus.'
                }
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  )
}
