'use client'

import { motion } from 'framer-motion'

const STARS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  emoji: ['⭐', '🌟', '✨', '💫'][i % 4],
  x: (Math.random() - 0.5) * 200,
  y: -(Math.random() * 150 + 50),
  rotation: Math.random() * 360,
  scale: Math.random() * 0.5 + 0.5,
  delay: Math.random() * 0.3,
}))

export function KidsStarBurst() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 100,
    }}>
      {STARS.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0],
            x: star.x,
            y: star.y,
            scale: [0, star.scale + 0.5, 0],
            rotate: star.rotation,
          }}
          transition={{
            duration: 1.2,
            delay: star.delay,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            fontSize: '24px',
          }}
        >
          {star.emoji}
        </motion.div>
      ))}
    </div>
  )
}
