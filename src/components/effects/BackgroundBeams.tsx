'use client'

import { motion } from 'framer-motion'

const beams = [
  { rotate: -45, left: '10%', top: '-20%', width: 1, height: '70%', delay: 0 },
  { rotate: -45, left: '25%', top: '-30%', width: 2, height: '80%', delay: 0.8 },
  { rotate: -35, left: '50%', top: '-10%', width: 1, height: '60%', delay: 1.6 },
  { rotate: -55, left: '70%', top: '-20%', width: 1, height: '70%', delay: 0.4 },
  { rotate: -45, left: '85%', top: '-15%', width: 2, height: '65%', delay: 1.2 },
  { rotate: -40, left: '40%', top: '-25%', width: 1, height: '75%', delay: 2.0 },
  { rotate: -50, left: '60%', top: '-10%', width: 1, height: '55%', delay: 0.6 },
  { rotate: -35, left: '90%', top: '-30%', width: 1, height: '80%', delay: 1.8 },
]

export function BackgroundBeams() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
    }}>
      {/* Radial glow from top center */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 600,
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {beams.map((beam, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 4 + i * 0.5,
            delay: beam.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: beam.left,
            top: beam.top,
            width: beam.width,
            height: beam.height,
            background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.12), transparent)',
            transform: `rotate(${beam.rotate}deg)`,
            transformOrigin: 'top center',
          }}
        />
      ))}
    </div>
  )
}
