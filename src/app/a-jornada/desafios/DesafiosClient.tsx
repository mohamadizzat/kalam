'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, ChevronRight, Trophy, RotateCcw, X } from 'lucide-react'
import { challenges, type Challenge } from '@/lib/data/challenges'

type ActiveChallenge = {
  slug: string
  startDate: string
  completedDays: number[]
}

const STORAGE_KEY = 'kalam-active-challenge'
const COMPLETED_KEY = 'kalam-completed-challenges'

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function getDayNumber(startDate: string): number {
  const start = new Date(startDate)
  const now = new Date(getToday())
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  return diff + 1
}

export function DesafiosClient() {
  const [active, setActive] = useState<ActiveChallenge | null>(null)
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [view, setView] = useState<'list' | 'active' | 'complete'>('list')
  const [showConfirm, setShowConfirm] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed: ActiveChallenge = JSON.parse(saved)
      const dayNum = getDayNumber(parsed.startDate)
      if (dayNum > 7 && parsed.completedDays.length === 7) {
        // Challenge finished, move to completed
        const completed = JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]')
        if (!completed.includes(parsed.slug)) {
          completed.push(parsed.slug)
          localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed))
        }
        localStorage.removeItem(STORAGE_KEY)
        setCompletedSlugs(completed)
        setView('list')
      } else {
        setActive(parsed)
        setView('active')
      }
    }
    const completedStored = localStorage.getItem(COMPLETED_KEY)
    if (completedStored) setCompletedSlugs(JSON.parse(completedStored))
  }, [])

  const startChallenge = (slug: string) => {
    const newActive: ActiveChallenge = {
      slug,
      startDate: getToday(),
      completedDays: [],
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newActive))
    setActive(newActive)
    setView('active')
    setShowConfirm(null)
  }

  const completeDay = (dayNum: number) => {
    if (!active) return
    const updated = {
      ...active,
      completedDays: active.completedDays.includes(dayNum)
        ? active.completedDays.filter(d => d !== dayNum)
        : [...active.completedDays, dayNum],
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setActive(updated)

    // Check if all 7 done
    if (updated.completedDays.length === 7) {
      const completed = JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]')
      if (!completed.includes(updated.slug)) {
        completed.push(updated.slug)
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed))
        setCompletedSlugs(completed)
      }
      setView('complete')
    }
  }

  const abandonChallenge = () => {
    localStorage.removeItem(STORAGE_KEY)
    setActive(null)
    setView('list')
  }

  const challenge = active ? challenges.find(c => c.slug === active.slug) : null
  const currentDay = active ? getDayNumber(active.startDate) : 1
  const todayDayIndex = Math.min(Math.max(currentDay, 1), 7)

  // ═══════════════════════════════════════
  // COMPLETION VIEW
  // ═══════════════════════════════════════
  if (view === 'complete' && challenge) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
            style={{ paddingTop: '60px' }}
          >
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>
              <Trophy size={64} style={{ color: '#C9A84C', margin: '0 auto' }} />
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: '#F0EBE2',
              marginBottom: '12px',
            }}>
              Desafio Concluido
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#C9A84C',
              fontFamily: 'var(--font-serif)',
              marginBottom: '8px',
            }}>
              {challenge.title}
            </p>
            <p style={{
              fontSize: '24px',
              fontFamily: 'var(--font-arabic)',
              color: '#C9A84C',
              marginBottom: '24px',
              direction: 'rtl',
            }}>
              {challenge.arabicTitle}
            </p>
            <p style={{
              fontSize: '15px',
              color: '#7A7870',
              lineHeight: 1.7,
              maxWidth: '400px',
              margin: '0 auto 40px',
            }}>
              Voce completou 7 dias de transformacao. O que voce praticou nao termina aqui — agora faz parte de quem voce e.
            </p>

            <button
              onClick={() => {
                localStorage.removeItem(STORAGE_KEY)
                setActive(null)
                setView('list')
              }}
              style={{
                padding: '16px 32px',
                borderRadius: '12px',
                background: '#C9A84C',
                color: '#0D0B12',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Escolher novo desafio
            </button>
          </motion.div>
        </div>
      </main>
    )
  }

  // ═══════════════════════════════════════
  // ACTIVE CHALLENGE VIEW
  // ═══════════════════════════════════════
  if (view === 'active' && active && challenge) {
    const todayData = challenge.days[todayDayIndex - 1]
    const isCompletedToday = active.completedDays.includes(todayDayIndex)
    const progress = (active.completedDays.length / 7) * 100

    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}
          >
            <button
              onClick={abandonChallenge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#7A7870',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              <X size={18} />
              Sair
            </button>
            <span style={{ fontSize: '13px', color: '#7A7870' }}>
              {active.completedDays.length} de 7 dias
            </span>
          </motion.div>

          {/* Title + Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
            style={{ marginBottom: '32px' }}
          >
            <span style={{ fontSize: '40px' }}>{challenge.icon}</span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '24px',
              fontWeight: 700,
              color: '#F0EBE2',
              marginTop: '12px',
              marginBottom: '8px',
            }}>
              {challenge.title}
            </h1>
            <p style={{
              fontSize: '20px',
              fontFamily: 'var(--font-arabic)',
              color: '#C9A84C',
              direction: 'rtl',
              marginBottom: '20px',
            }}>
              {challenge.arabicTitle}
            </p>

            {/* Progress bar */}
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
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: '#C9A84C',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* Day indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px',
            }}>
              {challenge.days.map((_, i) => {
                const dayNum = i + 1
                const isDone = active.completedDays.includes(dayNum)
                const isCurrent = dayNum === todayDayIndex
                return (
                  <div
                    key={dayNum}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: isDone
                        ? '#C9A84C'
                        : isCurrent
                          ? 'rgba(201,168,76,0.15)'
                          : '#161220',
                      color: isDone
                        ? '#0D0B12'
                        : isCurrent
                          ? '#C9A84C'
                          : '#7A7870',
                      border: isCurrent && !isDone
                        ? '1.5px solid #C9A84C'
                        : '1px solid #272230',
                    }}
                  >
                    {isDone ? <Check size={14} /> : dayNum}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Today's card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              padding: '28px 24px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              marginBottom: '16px',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#C9A84C',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                Dia {todayDayIndex} de 7
              </span>
              {currentDay > 7 && (
                <span style={{ fontSize: '12px', color: '#7A7870' }}>
                  Desafio encerrado
                </span>
              )}
            </div>

            {/* Task */}
            <p style={{
              fontSize: '16px',
              color: '#F0EBE2',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              {todayData.task}
            </p>

            {/* Verse */}
            <div style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.1)',
              marginBottom: '24px',
            }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '20px',
                color: '#C9A84C',
                direction: 'rtl',
                textAlign: 'center',
                lineHeight: 2,
                marginBottom: '12px',
              }}>
                {todayData.verse}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#F0EBE2',
                lineHeight: 1.6,
                textAlign: 'center',
                fontStyle: 'italic',
                marginBottom: '8px',
              }}>
                {todayData.translation}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#7A7870',
                textAlign: 'center',
              }}>
                {todayData.ref}
              </p>
            </div>

            {/* Complete button */}
            <button
              onClick={() => completeDay(todayDayIndex)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                background: isCompletedToday ? 'rgba(201,168,76,0.1)' : '#C9A84C',
                color: isCompletedToday ? '#C9A84C' : '#0D0B12',
                fontSize: '15px',
                fontWeight: 600,
                border: isCompletedToday ? '1px solid rgba(201,168,76,0.3)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {isCompletedToday ? (
                <>
                  <Check size={18} />
                  Dia {todayDayIndex} concluido
                </>
              ) : (
                'Marcar como concluido'
              )}
            </button>
          </motion.div>

          {/* Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              marginBottom: '16px',
            }}
          >
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#7A7870',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px',
            }}>
              Reflexao da noite
            </p>
            <p style={{
              fontSize: '15px',
              color: '#F0EBE2',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}>
              {todayData.reflection}
            </p>
          </motion.div>

          {/* Tomorrow preview */}
          {todayDayIndex < 7 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                background: '#161220',
                border: '1px solid #272230',
                opacity: 0.5,
              }}
            >
              <p style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#7A7870',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}>
                Amanha — Dia {todayDayIndex + 1}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#7A7870',
                lineHeight: 1.6,
                filter: 'blur(3px)',
                userSelect: 'none',
              }}>
                {challenge.days[todayDayIndex]?.task || ''}
              </p>
            </motion.div>
          )}
        </div>
      </main>
    )
  }

  // ═══════════════════════════════════════
  // CHALLENGE LIST VIEW
  // ═══════════════════════════════════════
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '32px' }}
        >
          <Link href="/a-jornada" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            textDecoration: 'none',
            fontSize: '14px',
          }}>
            <ArrowLeft size={16} />
            A Jornada
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: '#F0EBE2',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}>
            Desafios de 7 Dias
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
          }}>
            Transformacao pratica. Uma semana de cada vez.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {challenges.map((ch, i) => {
            const isCompleted = completedSlugs.includes(ch.slug)
            const isActive = active?.slug === ch.slug

            return (
              <motion.div
                key={ch.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * (i + 1) }}
              >
                {/* Confirm dialog */}
                <AnimatePresence>
                  {showConfirm === ch.slug && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        padding: '20px',
                        borderRadius: '16px 16px 0 0',
                        background: 'rgba(201,168,76,0.08)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderBottom: 'none',
                      }}
                    >
                      <p style={{ fontSize: '14px', color: '#F0EBE2', marginBottom: '12px' }}>
                        Comecar &quot;{ch.title}&quot;?
                      </p>
                      <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '16px' }}>
                        {active ? 'Voce tem um desafio ativo. Ele sera substituido.' : 'Sao 7 dias de transformacao. Voce esta pronto?'}
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => startChallenge(ch.slug)}
                          style={{
                            flex: 1,
                            padding: '12px',
                            borderRadius: '10px',
                            background: '#C9A84C',
                            color: '#0D0B12',
                            fontSize: '14px',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Comecar
                        </button>
                        <button
                          onClick={() => setShowConfirm(null)}
                          style={{
                            flex: 1,
                            padding: '12px',
                            borderRadius: '10px',
                            background: 'transparent',
                            color: '#7A7870',
                            fontSize: '14px',
                            fontWeight: 500,
                            border: '1px solid #272230',
                            cursor: 'pointer',
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className="card-hover"
                  style={{
                    padding: '24px 20px',
                    borderRadius: showConfirm === ch.slug ? '0 0 16px 16px' : '16px',
                    background: '#161220',
                    border: isActive
                      ? '1px solid rgba(201,168,76,0.3)'
                      : '1px solid #272230',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => {
                    if (isActive) {
                      setView('active')
                    } else {
                      setShowConfirm(ch.slug)
                    }
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: isCompleted
                      ? 'rgba(201,168,76,0.15)'
                      : 'rgba(201,168,76,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '24px',
                  }}>
                    {isCompleted ? (
                      <Check size={20} style={{ color: '#C9A84C' }} />
                    ) : (
                      ch.icon
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <p style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#F0EBE2',
                      }}>
                        {ch.title}
                      </p>
                      {isActive && (
                        <span style={{
                          fontSize: '10px',
                          fontWeight: 600,
                          color: '#C9A84C',
                          background: 'rgba(201,168,76,0.1)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          Ativo
                        </span>
                      )}
                      {isCompleted && (
                        <span style={{
                          fontSize: '10px',
                          fontWeight: 600,
                          color: '#C9A84C',
                          background: 'rgba(201,168,76,0.1)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          Concluido
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontSize: '13px',
                      color: '#7A7870',
                      lineHeight: 1.5,
                    }}>
                      {ch.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight size={18} style={{ color: '#7A7870', flexShrink: 0 }} />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  )
}
