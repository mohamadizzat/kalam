'use client'

import { motion } from 'framer-motion'

interface SpotlightProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function Spotlight({ children, style }: SpotlightProps) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
