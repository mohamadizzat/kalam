'use client'

import { motion } from 'framer-motion'

interface LailatAlQadrBannerProps {
  style?: React.CSSProperties
}

export function LailatAlQadrBanner({ style }: LailatAlQadrBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: 'center',
        padding: '16px 20px',
        borderRadius: 14,
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.2)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Animated golden glow behind */}
      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Arabic calligraphy */}
      <p style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: 'clamp(20px, 4vw, 28px)',
        color: '#C9A84C',
        lineHeight: 1.6,
        position: 'relative',
        marginBottom: 4,
      }}>
        لَيْلَةُ الْقَدْرِ
      </p>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: 'clamp(14px, 2.5vw, 17px)',
        color: 'rgba(201,168,76,0.7)',
        lineHeight: 1.5,
        position: 'relative',
        marginBottom: 6,
      }}>
        خَيْرٌ مِنْ أَلْفِ شَهْرٍ
      </p>

      {/* Portuguese translation */}
      <p style={{
        fontSize: 11,
        color: '#B3B0A6',
        letterSpacing: '0.1em',
        position: 'relative',
      }}>
        A Noite do Decreto — Melhor que mil meses
      </p>
    </motion.div>
  )
}
