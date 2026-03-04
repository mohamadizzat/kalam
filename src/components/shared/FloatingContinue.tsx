'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X } from 'lucide-react'

interface LastRead {
  surah: number
  verse: number
  name: string
}

export function FloatingContinue() {
  const pathname = usePathname()
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const dismissedSession = sessionStorage.getItem('kalam-floating-dismissed')
      if (dismissedSession === 'true') {
        setDismissed(true)
        return
      }

      const saved = localStorage.getItem('kalam-last-read')
      if (saved) {
        const parsed = JSON.parse(saved) as LastRead
        if (parsed.surah && parsed.name) {
          setLastRead(parsed)
        }
      }
    } catch {}
  }, [])

  const isOnAPalavra = pathname.startsWith('/a-palavra')
  const shouldShow = mounted && lastRead && !dismissed && !isOnAPalavra

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDismissed(true)
    try {
      sessionStorage.setItem('kalam-floating-dismissed', 'true')
    } catch {}
  }

  const truncatedName = lastRead?.name
    ? lastRead.name.length > 15
      ? lastRead.name.slice(0, 15) + '...'
      : lastRead.name
    : ''

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 'calc(env(safe-area-inset-bottom, 0px) + 84px)',
            right: 16,
            zIndex: 100,
          }}
        >
          <Link
            href={`/a-palavra/${lastRead!.surah}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 16px',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 999,
              textDecoration: 'none',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <BookOpen size={14} style={{ color: '#C9A84C', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: '#F0EBE2',
              whiteSpace: 'nowrap',
            }}>
              Continuar
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: '#B3B0A6',
              whiteSpace: 'nowrap',
            }}>
              {truncatedName}
            </span>
            <button
              onClick={handleDismiss}
              aria-label="Fechar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(122,120,112,0.15)',
                border: 'none',
                borderRadius: '50%',
                minWidth: 36,
                minHeight: 36,
                width: 36,
                height: 36,
                cursor: 'pointer',
                padding: 0,
                marginLeft: 2,
                flexShrink: 0,
              }}
            >
              <X size={12} style={{ color: '#7A7870' }} />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
