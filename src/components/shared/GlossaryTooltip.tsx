'use client'

import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { GlossaryTerm } from '@/lib/data/glossary'

type GlossaryTooltipProps = {
  entry: GlossaryTerm
  children: ReactNode
}

export function GlossaryTooltip({ entry, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<'above' | 'below'>('above')
  const triggerRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    // If not enough space above (tooltip ~160px + 12px gap), show below
    setPosition(rect.top < 180 ? 'below' : 'above')
  }, [])

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    updatePosition()
    setIsOpen(true)
  }, [updatePosition])

  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }, [])

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  // Close on outside click (mobile)
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      {/* Highlighted term */}
      <span
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation()
          if (isOpen) {
            setIsOpen(false)
          } else {
            open()
          }
        }}
        onMouseEnter={open}
        onMouseLeave={close}
        style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: 'rgba(201,168,76,0.5)',
          textUnderlineOffset: '3px',
          textDecorationThickness: '1.5px',
          color: 'inherit',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
        }}
      >
        {children}
      </span>

      {/* Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: position === 'above' ? 6 : -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'above' ? 6 : -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onMouseEnter={cancelClose}
            onMouseLeave={close}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              ...(position === 'above'
                ? { bottom: 'calc(100% + 10px)' }
                : { top: 'calc(100% + 10px)' }),
              width: 'clamp(260px, 70vw, 320px)',
              padding: '16px 18px',
              borderRadius: '14px',
              background: '#1C1828',
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 1px rgba(201,168,76,0.1)',
              zIndex: 100,
              pointerEvents: 'auto',
            }}
          >
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
                width: '10px',
                height: '10px',
                background: '#1C1828',
                border: '1px solid rgba(201,168,76,0.2)',
                ...(position === 'above'
                  ? { bottom: '-5px', borderTop: 'none', borderLeft: 'none' }
                  : { top: '-5px', borderBottom: 'none', borderRight: 'none' }),
              }}
            />

            {/* Arabic */}
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '22px',
                color: '#C9A84C',
                direction: 'rtl',
                textAlign: 'right',
                lineHeight: 1.4,
                marginBottom: '6px',
              }}
            >
              {entry.arabic}
            </p>

            {/* Transliteration */}
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#F0EBE2',
                marginBottom: '6px',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {entry.term}
            </p>

            {/* Meaning */}
            <p
              style={{
                fontSize: '13px',
                color: '#B3B0A6',
                lineHeight: 1.5,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {entry.meaning}
            </p>

            {/* "Ver mais" link */}
            <div
              style={{
                marginTop: '10px',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#C9A84C',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Ver mais <ArrowRight size={11} />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
