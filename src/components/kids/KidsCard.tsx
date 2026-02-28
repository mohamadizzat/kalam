'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface KidsCardProps {
  emoji: string
  title: string
  subtitle?: string
  href: string
  color: string
  count?: string
  index?: number // for stagger animation
  completed?: boolean
}

export function KidsCard({ emoji, title, subtitle, href, color, count, index = 0, completed }: KidsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
    >
      <Link href={href} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        borderRadius: '20px',
        background: '#161220',
        border: `1px solid ${color}30`,
        textDecoration: 'none',
        textAlign: 'center',
        gap: '8px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        minHeight: '140px',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}60`
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}30`
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
      >
        {/* Completed check */}
        {completed && (
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#45B7A0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
          }}>
            ✓
          </div>
        )}

        {/* Emoji circle */}
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '16px',
          background: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          marginBottom: '4px',
        }}>
          {emoji}
        </div>

        {/* Title */}
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '14px',
          fontWeight: 600,
          color: '#F0EBE2',
          lineHeight: 1.3,
        }}>
          {title}
        </span>

        {/* Subtitle */}
        {subtitle && (
          <span style={{
            fontSize: '11px',
            color: '#B3B0A6',
            lineHeight: 1.3,
          }}>
            {subtitle}
          </span>
        )}

        {/* Count badge */}
        {count && (
          <span style={{
            fontSize: '10px',
            fontWeight: 600,
            color: color,
            background: `${color}15`,
            padding: '2px 8px',
            borderRadius: '10px',
            letterSpacing: '0.3px',
          }}>
            {count}
          </span>
        )}
      </Link>
    </motion.div>
  )
}
