'use client'

import { motion } from 'framer-motion'
import type { RamadanDay } from '@/lib/data/ramadan'
import { getPhaseGradient, getPhaseRgb } from '@/lib/ramadan-helpers'

interface RamadanAtmosphereProps {
  phase: RamadanDay['phase']
  isLailatAlQadr: boolean
}

// ── Stars ────────────────────────────────────────────────────────────────────

function generateStars(count: number) {
  const stars: Array<{ id: number; left: string; top: string; size: number; delay: number; duration: number }> = []
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      left: `${(i * 37 + 13) % 100}%`,
      top: `${(i * 23 + 7) % 100}%`,
      size: 1.5 + (i % 3) * 0.5,
      delay: (i % 7) * 0.8,
      duration: 3 + (i % 4) * 1.2,
    })
  }
  return stars
}

const NORMAL_STARS = generateStars(25)
const QADR_STARS = generateStars(50)

// ── Component ────────────────────────────────────────────────────────────────

export function RamadanAtmosphere({ phase, isLailatAlQadr }: RamadanAtmosphereProps) {
  const stars = isLailatAlQadr ? QADR_STARS : NORMAL_STARS
  const rgb = getPhaseRgb(phase)

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Phase gradient wash at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40vh',
          background: getPhaseGradient(phase),
          opacity: isLailatAlQadr ? 0.8 : 0.5,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Stars field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: isLailatAlQadr
              ? `rgba(201,168,76,0.9)`
              : `rgba(${rgb},0.6)`,
            boxShadow: isLailatAlQadr
              ? `0 0 ${star.size * 3}px rgba(201,168,76,0.4)`
              : `0 0 ${star.size * 2}px rgba(${rgb},0.2)`,
          }}
        />
      ))}

      {/* CSS crescent moon — top right */}
      <motion.div
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '8%',
          right: '8%',
          width: 32,
          height: 32,
          borderRadius: '50%',
          boxShadow: `8px -2px 0 0 rgba(${rgb},${isLailatAlQadr ? '0.5' : '0.25'})`,
          opacity: isLailatAlQadr ? 0.9 : 0.5,
        }}
      />

      {/* Extra Lailat al-Qadr glow */}
      {isLailatAlQadr && (
        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '40%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      )}
    </div>
  )
}
