'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Check,
  Moon,
  Star,
  BookOpen,
  Heart,
  Flame,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { ramadanDays, RAMADAN_PHASES, type RamadanDay } from '@/lib/data/ramadan'

const STORAGE_KEY = 'kalam-ramadan-progress'

type RamadanProgress = {
  completedDays: number[]
  year: number
}

function getPhaseColor(phase: RamadanDay['phase']): string {
  switch (phase) {
    case 'mercy': return '#4A90D9'
    case 'forgiveness': return '#C9A84C'
    case 'freedom': return '#D94A4A'
  }
}

function getPhaseIcon(phase: RamadanDay['phase']) {
  switch (phase) {
    case 'mercy': return Heart
    case 'forgiveness': return Moon
    case 'freedom': return Flame
  }
}

// Stars background component
function StarsBackground() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number; delay: number }>>([])

  useEffect(() => {
    const generated = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 3,
    }))
    setStars(generated)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: '#F0EBE2',
          }}
        />
      ))}
    </div>
  )
}

export function RamadanClient() {
  const [selectedDay, setSelectedDay] = useState(1)
  const [progress, setProgress] = useState<RamadanProgress>({ completedDays: [], year: new Date().getFullYear() })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed: RamadanProgress = JSON.parse(saved)
      // Reset if different year
      if (parsed.year !== new Date().getFullYear()) {
        const fresh = { completedDays: [], year: new Date().getFullYear() }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh))
        setProgress(fresh)
      } else {
        setProgress(parsed)
      }
    }
  }, [])

  const toggleDay = (day: number) => {
    const updated = {
      ...progress,
      completedDays: progress.completedDays.includes(day)
        ? progress.completedDays.filter(d => d !== day)
        : [...progress.completedDays, day],
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setProgress(updated)
  }

  const currentData = ramadanDays.find(d => d.day === selectedDay)!
  const isCompleted = progress.completedDays.includes(selectedDay)
  const completedCount = progress.completedDays.length
  const progressPercent = (completedCount / 30) * 100
  const phaseColor = getPhaseColor(currentData.phase)
  const PhaseIcon = getPhaseIcon(currentData.phase)

  if (!mounted) return null

  return (
    <main className="min-h-screen" style={{
      background: 'linear-gradient(180deg, #060410 0%, #0D0B12 30%, #0A0816 100%)',
      position: 'relative',
    }}>
      <StarsBackground />

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px', position: 'relative', zIndex: 1 }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '24px' }}
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

        {/* Header with Moon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
          style={{ marginBottom: '32px' }}
        >
          {/* Moon icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ marginBottom: '16px' }}
          >
            <Moon size={48} style={{ color: '#C9A84C', margin: '0 auto' }} />
          </motion.div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: '#F0EBE2',
            marginBottom: '4px',
            letterSpacing: '-0.02em',
          }}>
            Ramadan
          </h1>
          <p style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: '24px',
            color: '#C9A84C',
            direction: 'rtl',
            marginBottom: '8px',
          }}>
            رمضان كريم
          </p>
          <p style={{
            fontSize: '14px',
            color: '#7A7870',
          }}>
            30 dias de transformacao espiritual
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '24px' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '13px', color: '#7A7870' }}>
              {completedCount}/30 dias completados
            </span>
            <span style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            background: '#1A1528',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #4A90D9, #C9A84C, #D94A4A)',
                borderRadius: '3px',
              }}
            />
          </div>
        </motion.div>

        {/* Phase indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {RAMADAN_PHASES.map((phase) => {
            const isActive = currentData.phase === phase.key
            return (
              <div
                key={phase.key}
                style={{
                  flex: 1,
                  padding: '12px 8px',
                  borderRadius: '12px',
                  background: isActive ? `${phase.color}15` : '#161220',
                  border: isActive ? `1px solid ${phase.color}40` : '1px solid #272230',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '14px',
                  color: phase.color,
                  direction: 'rtl',
                  marginBottom: '4px',
                }}>
                  {phase.arabic}
                </p>
                <p style={{
                  fontSize: '11px',
                  color: isActive ? '#F0EBE2' : '#7A7870',
                  fontWeight: isActive ? 600 : 400,
                }}>
                  {phase.label}
                </p>
                <p style={{
                  fontSize: '10px',
                  color: '#7A7870',
                  marginTop: '2px',
                }}>
                  Dias {phase.days}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* Day selector grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            padding: '20px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '20px',
          }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#7A7870',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}>
            Selecione o dia
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '6px',
          }}>
            {ramadanDays.map((day) => {
              const isDone = progress.completedDays.includes(day.day)
              const isCurrent = day.day === selectedDay
              const isQadr = day.isLailatAlQadr
              const dayPhaseColor = getPhaseColor(day.phase)

              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: isCurrent ? 700 : 500,
                    background: isDone
                      ? dayPhaseColor
                      : isCurrent
                        ? `${dayPhaseColor}25`
                        : isQadr
                          ? 'rgba(201,168,76,0.08)'
                          : '#0D0B12',
                    color: isDone
                      ? '#0D0B12'
                      : isCurrent
                        ? dayPhaseColor
                        : isQadr
                          ? '#C9A84C'
                          : '#7A7870',
                    border: isCurrent && !isDone
                      ? `1.5px solid ${dayPhaseColor}`
                      : isQadr && !isDone
                        ? '1px solid rgba(201,168,76,0.3)'
                        : '1px solid transparent',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isDone ? <Check size={12} /> : day.day}
                  {isQadr && !isDone && (
                    <div style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#C9A84C',
                    }} />
                  )}
                </button>
              )
            })}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '12px',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#C9A84C',
            }} />
            <span style={{ fontSize: '11px', color: '#7A7870' }}>
              Possivel Lailat al-Qadr
            </span>
          </div>
        </motion.div>

        {/* Day navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <button
            onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
            disabled={selectedDay === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: selectedDay === 1 ? '#3A3545' : '#7A7870',
              background: 'none',
              border: 'none',
              cursor: selectedDay === 1 ? 'default' : 'pointer',
              fontSize: '13px',
              padding: '8px',
            }}
          >
            <ChevronLeft size={16} />
            Anterior
          </button>
          <span style={{
            fontSize: '14px',
            fontWeight: 600,
            color: phaseColor,
          }}>
            Dia {selectedDay} de 30
          </span>
          <button
            onClick={() => setSelectedDay(Math.min(30, selectedDay + 1))}
            disabled={selectedDay === 30}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: selectedDay === 30 ? '#3A3545' : '#7A7870',
              background: 'none',
              border: 'none',
              cursor: selectedDay === 30 ? 'default' : 'pointer',
              fontSize: '13px',
              padding: '8px',
            }}
          >
            Proximo
            <ChevronRight size={16} />
          </button>
        </motion.div>

        {/* Lailat al-Qadr banner */}
        <AnimatePresence mode="wait">
          {currentData.isLailatAlQadr && (
            <motion.div
              key={`qadr-${selectedDay}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
                border: '1px solid rgba(201,168,76,0.3)',
                marginBottom: '16px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <Sparkles size={24} style={{ color: '#C9A84C', margin: '0 auto 8px' }} />
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '22px',
                color: '#C9A84C',
                direction: 'rtl',
                marginBottom: '4px',
              }}>
                لَيْلَةُ الْقَدْرِ
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#F0EBE2',
                marginBottom: '4px',
              }}>
                Possivel Lailat al-Qadr
              </p>
              <p style={{
                fontSize: '13px',
                color: '#C9A84C',
                lineHeight: 1.5,
              }}>
                A Noite do Decreto e melhor que mil meses. Intensifique sua adoracao.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Theme card */}
            <div style={{
              padding: '28px 24px',
              borderRadius: '16px',
              background: '#161220',
              border: `1px solid ${phaseColor}30`,
              marginBottom: '12px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: `${phaseColor}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <PhaseIcon size={18} style={{ color: phaseColor }} />
                </div>
                <div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: phaseColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    {currentData.phaseLabel} — Dia {currentData.day}
                  </span>
                </div>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 700,
                color: '#F0EBE2',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}>
                {currentData.theme}
              </h2>

              {/* Deed */}
              <p style={{
                fontSize: '15px',
                color: '#F0EBE2',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}>
                {currentData.deed}
              </p>

              {/* Complete button */}
              <button
                onClick={() => toggleDay(selectedDay)}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  background: isCompleted ? `${phaseColor}15` : phaseColor,
                  color: isCompleted ? phaseColor : '#0D0B12',
                  fontSize: '15px',
                  fontWeight: 600,
                  border: isCompleted ? `1px solid ${phaseColor}40` : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                }}
              >
                {isCompleted ? (
                  <>
                    <Check size={18} />
                    Dia {selectedDay} concluido
                  </>
                ) : (
                  'Marcar como concluido'
                )}
              </button>
            </div>

            {/* Dua card */}
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              marginBottom: '12px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <Star size={14} style={{ color: '#C9A84C' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  Dua do dia
                </span>
              </div>

              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '22px',
                color: '#C9A84C',
                direction: 'rtl',
                textAlign: 'center',
                lineHeight: 2.2,
                marginBottom: '16px',
              }}>
                {currentData.dua.arabic}
              </p>

              <div style={{
                padding: '16px',
                borderRadius: '10px',
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.1)',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#F0EBE2',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}>
                  {currentData.dua.translation}
                </p>
              </div>
            </div>

            {/* Quran Reading card */}
            <div style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              marginBottom: '12px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <BookOpen size={14} style={{ color: '#C9A84C' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  Leitura do Quran
                </span>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#F0EBE2',
                lineHeight: 1.6,
              }}>
                {currentData.quranReading}
              </p>
            </div>

            {/* Reflection card */}
            <div style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
            }}>
              <p style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#7A7870',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}>
                Reflexao da noite
              </p>
              <p style={{
                fontSize: '15px',
                color: '#F0EBE2',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}>
                {currentData.reflection}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </main>
  )
}
