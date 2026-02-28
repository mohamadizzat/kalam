'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Share2, Copy, Check } from 'lucide-react'

type VerseShareCardProps = {
  arabic: string
  translation: string
  surahName: string
  verseNumber: number
  isOpen: boolean
  onClose: () => void
}

export function VerseShareCard({
  arabic,
  translation,
  surahName,
  verseNumber,
  isOpen,
  onClose,
}: VerseShareCardProps) {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const reference = `${surahName} ${verseNumber}`
  const shareText = `${arabic}\n\n${translation}\n\n-- ${reference} | KALAM`

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setCopied(false)
      setShared(false)
    }
  }, [isOpen])

  // Lock body scroll when modal is open
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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shareText
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [shareText])

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${surahName} ${verseNumber} | KALAM`,
          text: shareText,
        })
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        // User cancelled share — not an error
        if ((err as DOMException).name !== 'AbortError') {
          // Fallback to copy
          handleCopy()
        }
      }
    } else {
      // No Web Share API — fallback to copy
      handleCopy()
    }
  }, [surahName, verseNumber, shareText, handleCopy])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#F0EBE2',
                transition: 'background 0.2s ease',
              }}
            >
              <X size={18} />
            </button>

            {/* The Share Card */}
            <div
              style={{
                background: '#0D0B12',
                borderRadius: '20px',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(201, 168, 76, 0.06)',
              }}
            >
              {/* Top decorative bar */}
              <div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                }}
              />

              {/* Card content */}
              <div style={{ padding: '36px 28px 28px' }}>
                {/* Decorative ornament */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    color: '#C9A84C',
                    opacity: 0.4,
                    fontSize: '20px',
                    fontFamily: 'var(--font-arabic)',
                    letterSpacing: '8px',
                  }}
                >
                  &#x2756; &#x2756; &#x2756;
                </div>

                {/* Arabic text */}
                <p
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    direction: 'rtl',
                    textAlign: 'center',
                    fontSize: 'clamp(22px, 5vw, 32px)',
                    lineHeight: 1.9,
                    color: '#C9A84C',
                    textShadow: '0 0 30px rgba(201, 168, 76, 0.2)',
                    marginBottom: '20px',
                  }}
                >
                  {arabic}
                </p>

                {/* Divider */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    margin: '20px 0',
                  }}
                >
                  <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201, 168, 76, 0.3))' }} />
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A84C', opacity: 0.5 }} />
                  <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201, 168, 76, 0.3))' }} />
                </div>

                {/* Translation */}
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '15px',
                    lineHeight: 1.75,
                    color: '#B3B0A6',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: '24px',
                  }}
                >
                  {translation}
                </p>

                {/* Reference + branding */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(39, 34, 48, 0.6)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#7A7870',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {reference}
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A84C',
                      opacity: 0.4,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    KALAM
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons — outside the card */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '16px',
              }}
            >
              {/* Copy button */}
              <button
                onClick={handleCopy}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  border: '1px solid #272230',
                  background: '#161220',
                  color: copied ? '#C9A84C' : '#F0EBE2',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copiado!' : 'Copiar verso'}
              </button>

              {/* Share button */}
              <button
                onClick={handleShare}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  background: 'rgba(201, 168, 76, 0.1)',
                  color: shared ? '#C9A84C' : '#C9A84C',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {shared ? <Check size={16} /> : <Share2 size={16} />}
                {shared ? 'Compartilhado!' : 'Compartilhar'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
