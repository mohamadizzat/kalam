'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Type } from 'lucide-react'

type ReadingModeProps = {
  children: ReactNode
  title?: string
  onClose: () => void
  isOpen: boolean
}

export function ReadingMode({ children, title, onClose, isOpen }: ReadingModeProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [useSerif, setUseSerif] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Track scroll progress inside the reading mode container
  useEffect(() => {
    if (!isOpen) return

    const container = contentRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Lock body scroll when reading mode is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#0F0D14',
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'rgba(201,168,76,0.1)',
              zIndex: 210,
            }}
          >
            <motion.div
              style={{
                height: '100%',
                width: `${scrollProgress}%`,
                background: 'linear-gradient(90deg, #C9A84C, #D4B85E)',
                borderRadius: '0 2px 2px 0',
              }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Top bar with controls */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 210,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '16px 20px',
              gap: '8px',
            }}
          >
            {/* Serif toggle */}
            <button
              onClick={() => setUseSerif(!useSerif)}
              aria-label={useSerif ? 'Usar fonte sans-serif' : 'Usar fonte serifada'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: useSerif ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.05)',
                border: useSerif ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.08)',
                color: useSerif ? '#C9A84C' : '#7A7870',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Type size={16} />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Fechar modo leitura"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#B3B0A6',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              height: '100%',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
            }}
          >
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                padding: '80px 28px 120px',
                fontFamily: useSerif ? 'var(--font-serif)' : 'var(--font-sans)',
                fontSize: '18px',
                lineHeight: 1.85,
                color: '#F0EBE2',
              }}
            >
              {/* Title */}
              {title && (
                <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                  <h1
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(24px, 5vw, 32px)',
                      fontWeight: 600,
                      color: '#F0EBE2',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    {title}
                  </h1>
                  <div
                    style={{
                      width: '48px',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                      margin: '0 auto',
                    }}
                  />
                </div>
              )}

              {/* Children content */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
