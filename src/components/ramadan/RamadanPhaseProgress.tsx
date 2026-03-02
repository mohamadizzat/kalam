'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RAMADAN_PHASES } from '@/lib/data/ramadan'
import { getPhaseColor } from '@/lib/ramadan-helpers'

interface RamadanPhaseProgressProps {
  currentDay: number
}

export function RamadanPhaseProgress({ currentDay }: RamadanPhaseProgressProps) {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-ramadan-progress')
      if (saved) {
        const data = JSON.parse(saved)
        if (data.year === new Date().getFullYear() && Array.isArray(data.completedDays)) {
          setCompletedCount(data.completedDays.length)
        }
      }
    } catch {}
  }, [])

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
      {/* Day counter */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <p style={{ fontSize: 12, color: '#B3B0A6', letterSpacing: '0.1em' }}>
          Dia {currentDay} de 30
        </p>
        {completedCount > 0 && (
          <p style={{ fontSize: 11, color: '#7A7870' }}>
            {completedCount} concluido{completedCount !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Phase bar */}
      <div
        style={{
          display: 'flex',
          gap: 3,
          height: 6,
          borderRadius: 3,
          overflow: 'hidden',
          background: '#1C1828',
        }}
      >
        {RAMADAN_PHASES.map((phase) => {
          const startDay = phase.key === 'mercy' ? 1 : phase.key === 'forgiveness' ? 11 : 21
          const endDay = startDay + 9
          const isActive = currentDay >= startDay && currentDay <= endDay
          const isPast = currentDay > endDay
          const fillPercent = isPast
            ? 100
            : isActive
              ? ((currentDay - startDay) / 10) * 100
              : 0

          return (
            <div
              key={phase.key}
              style={{
                flex: 1,
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                background: `${phase.color}15`,
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${fillPercent}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: phase.color,
                  borderRadius: 3,
                  boxShadow: isActive ? `0 0 8px ${phase.color}60` : 'none',
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Phase labels */}
      <div style={{ display: 'flex', marginTop: 8 }}>
        {RAMADAN_PHASES.map((phase) => {
          const startDay = phase.key === 'mercy' ? 1 : phase.key === 'forgiveness' ? 11 : 21
          const endDay = startDay + 9
          const isActive = currentDay >= startDay && currentDay <= endDay

          return (
            <div
              key={phase.key}
              style={{
                flex: 1,
                textAlign: 'center',
              }}
            >
              <p style={{
                fontSize: 10,
                color: isActive ? phase.color : '#7A7870',
                fontWeight: isActive ? 600 : 400,
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
              }}>
                {phase.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 11,
                color: isActive ? phase.color : '#7A787060',
                marginTop: 2,
                transition: 'color 0.3s ease',
              }}>
                {phase.arabic}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
