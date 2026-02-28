'use client'

import { motion } from 'framer-motion'

interface KidsArabicWordProps {
  arabic: string
  transliteration: string
  translation: string
  color?: string
  size?: 'small' | 'medium' | 'large'
  showBorder?: boolean
}

export function KidsArabicWord({
  arabic,
  transliteration,
  translation,
  color = '#C9A84C',
  size = 'medium',
  showBorder = true,
}: KidsArabicWordProps) {
  const sizes = {
    small: { arabic: '24px', translit: '13px', translation: '12px', padding: '12px 16px' },
    medium: { arabic: '36px', translit: '14px', translation: '13px', padding: '20px 24px' },
    large: { arabic: '48px', translit: '16px', translation: '14px', padding: '24px 32px' },
  }

  const s = sizes[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        padding: s.padding,
        borderRadius: '16px',
        background: showBorder ? '#161220' : 'transparent',
        border: showBorder ? `1px solid ${color}20` : 'none',
        textAlign: 'center',
      }}
    >
      {/* Arabic text */}
      <p style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: s.arabic,
        color: color,
        lineHeight: 1.8,
        direction: 'rtl',
        marginBottom: '8px',
      }}>
        {arabic}
      </p>

      {/* Transliteration */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: s.translit,
        color: '#B3B0A6',
        fontStyle: 'italic',
        marginBottom: '4px',
      }}>
        {transliteration}
      </p>

      {/* Translation */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: s.translation,
        color: '#7A7870',
      }}>
        {translation}
      </p>
    </motion.div>
  )
}
