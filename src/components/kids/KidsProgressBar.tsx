'use client'

import { motion } from 'framer-motion'

interface KidsProgressBarProps {
  stars: number
  levelName: string
  levelEmoji: string
  progress: number // 0-100
  nextLevelName?: string
  color?: string
}

export function KidsProgressBar({
  stars,
  levelName,
  levelEmoji,
  progress,
  nextLevelName,
  color = '#FF8C42',
}: KidsProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        padding: '16px 20px',
        borderRadius: '16px',
        background: '#161220',
        border: '1px solid #272230',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>{levelEmoji}</span>
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 600, color: '#F0EBE2' }}>
              {levelName}
            </p>
            <p style={{ fontSize: '11px', color: '#7A7870' }}>
              {nextLevelName ? `Próximo: ${nextLevelName}` : 'Nível máximo!'}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '14px' }}>⭐</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: color }}>
            {stars}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        height: '8px',
        borderRadius: '4px',
        background: '#272230',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{
            height: '100%',
            borderRadius: '4px',
            background: `linear-gradient(90deg, ${color}, ${color}CC)`,
          }}
        />
      </div>
    </motion.div>
  )
}
