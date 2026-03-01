'use client'

import { useState, useCallback, useRef, type ReactNode, type CSSProperties } from 'react'

// ── TYPES ────────────────────────────────────────────────────────────────────

interface PremiumCardProps {
  variant?: 'default' | 'featured' | 'gold'
  spotlight?: boolean
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
  as?: 'div' | 'article' | 'section'
}

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const CARD_STYLES = {
  default: {
    background: 'rgba(22,18,32,0.8)',
    border: '1px solid rgba(39,34,48,0.6)',
    boxShadow: 'inset 0 0 0.5px 1px hsla(0,0%,100%,0.06), 0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)',
    borderRadius: 16,
  },
  featured: {
    background: 'linear-gradient(135deg, rgba(22,18,32,0.9) 0%, rgba(28,24,40,0.9) 100%)',
    border: '1px solid rgba(201,168,76,0.15)',
    boxShadow: 'inset 0 0 0.5px 1px hsla(0,0%,100%,0.06), 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.3)',
    borderRadius: 16,
  },
  gold: {
    background: 'linear-gradient(135deg, rgba(22,18,32,0.9) 0%, rgba(28,24,40,0.9) 100%)',
    border: '1px solid rgba(201,168,76,0.25)',
    boxShadow: 'inset 0 0 0.5px 1px hsla(0,0%,100%,0.06), 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.3), 0 0 30px rgba(201,168,76,0.05)',
    borderRadius: 16,
  },
} as const

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function PremiumCard({
  variant = 'default',
  spotlight = false,
  children,
  className,
  style,
  onClick,
  as: Tag = 'div',
}: PremiumCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!spotlight || variant === 'default' || !cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      setSpotlightPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    [spotlight, variant]
  )

  const baseStyle = CARD_STYLES[variant]
  const showSpotlight = spotlight && variant !== 'default' && isHovered

  const combinedStyle: CSSProperties = {
    ...baseStyle,
    position: 'relative' as const,
    overflow: 'hidden',
    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
    cursor: onClick ? 'pointer' : undefined,
    ...(isHovered && {
      transform: 'translateY(-2px)',
      borderColor: 'rgba(201,168,76,0.2)',
    }),
    ...style,
  }

  return (
    <Tag
      ref={cardRef as any}
      className={className}
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight overlay — desktop only, non-default variants */}
      {showSpotlight && (
        <div
          className="premium-spotlight"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(201,168,76,0.04), transparent 40%)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Gold gradient border for gold variant */}
      {variant === 'gold' && (
        <div
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 17,
            background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.05), rgba(201,168,76,0.3))',
            zIndex: -1,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: 1,
          }}
        />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </Tag>
  )
}
