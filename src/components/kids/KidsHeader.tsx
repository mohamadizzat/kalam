'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

interface KidsHeaderProps {
  title: string
  subtitle?: string
  emoji?: string
  color?: string
  stars?: number
  backHref?: string
}

export function KidsHeader({
  title,
  subtitle,
  emoji,
  color = '#FF8C42',
  stars,
  backHref,
}: KidsHeaderProps) {
  const router = useRouter()

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <button
          onClick={() => backHref ? router.push(backHref) : router.back()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#7A7870',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            letterSpacing: '0.5px',
            marginBottom: '20px',
            padding: 0,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = color }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#7A7870' }}
        >
          <ArrowLeft size={14} />
          Voltar
        </button>
      </motion.div>

      {/* Title area */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
      >
        <div>
          {emoji && (
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>{emoji}</span>
          )}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            color: '#F0EBE2',
            lineHeight: 1.2,
            marginBottom: subtitle ? '6px' : 0,
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: '#B3B0A6',
              lineHeight: 1.5,
            }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Stars count */}
        {stars !== undefined && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '20px',
            background: `${color}15`,
            border: `1px solid ${color}20`,
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '14px' }}>⭐</span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontWeight: 700,
              color: color,
            }}>
              {stars}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  )
}
