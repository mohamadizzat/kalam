'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BridgeScriptureViewProps {
  bibleRef: { reference: string; text: string; context?: string }
  quranRef: { reference: string; text: string; arabic?: string; context?: string }
  convergenceNote?: string
  divergenceNote?: string
  onSaveNote?: () => void
}

export function BridgeScriptureView({
  bibleRef,
  quranRef,
  convergenceNote,
  divergenceNote,
  onSaveNote,
}: BridgeScriptureViewProps) {
  const [activeTab, setActiveTab] = useState<'bible' | 'quran'>('bible')

  return (
    <div>
      {/* ── DESKTOP: side-by-side ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
          background: '#272230',
          border: '1px solid #272230',
          borderRadius: 4,
          overflow: 'hidden',
        }}
        className="bridge-desktop"
      >
        <BiblePanel bibleRef={bibleRef} mobile={false} />
        <QuranPanel quranRef={quranRef} mobile={false} />
      </div>

      {/* ── MOBILE: tabs ── */}
      <div className="bridge-mobile">
        {/* Tab row */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #272230',
          marginBottom: 0,
        }}>
          {(['bible', 'quran'] as const).map((side) => {
            const label = side === 'bible' ? 'Biblia' : 'Alcorao'
            const active = activeTab === side
            return (
              <button
                key={side}
                onClick={() => setActiveTab(side)}
                style={{
                  flex: 1,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: active ? '#C9A84C' : '#7A7870',
                  background: active ? 'rgba(201,168,76,0.04)' : 'transparent',
                  border: 'none',
                  borderBottom: active ? '2px solid #C9A84C' : '2px solid transparent',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Active tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {activeTab === 'bible' ? (
              <BiblePanel bibleRef={bibleRef} mobile />
            ) : (
              <QuranPanel quranRef={quranRef} mobile />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CONVERGENCE NOTE ── */}
      {convergenceNote && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          style={{
            marginTop: 16,
            padding: '20px 24px',
            background: 'rgba(76,175,80,0.06)',
            border: '1px solid rgba(76,175,80,0.18)',
            borderRadius: 4,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 9,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4CAF50',
              background: 'rgba(76,175,80,0.12)',
              border: '1px solid rgba(76,175,80,0.25)',
              borderRadius: 100,
              padding: '3px 10px',
            }}>
              Convergencia
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#B3B0A6',
            lineHeight: 1.8,
          }}>
            {convergenceNote}
          </p>
        </motion.div>
      )}

      {/* ── DIVERGENCE NOTE ── */}
      {divergenceNote && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          style={{
            marginTop: 12,
            padding: '20px 24px',
            background: 'rgba(245,158,11,0.06)',
            border: '1px solid rgba(245,158,11,0.18)',
            borderRadius: 4,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 9,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#F59E0B',
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 100,
              padding: '3px 10px',
            }}>
              Divergencia
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#B3B0A6',
            lineHeight: 1.8,
          }}>
            {divergenceNote}
          </p>
        </motion.div>
      )}

      {/* ── SAVE NOTE BUTTON ── */}
      {onSaveNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}
        >
          <button
            onClick={onSaveNote}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 4,
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
            }}
          >
            Salvar nota
          </button>
        </motion.div>
      )}

      <style>{`
        .bridge-desktop { display: grid; }
        .bridge-mobile  { display: none; }
        @media (max-width: 640px) {
          .bridge-desktop { display: none !important; }
          .bridge-mobile  { display: block; }
        }
      `}</style>
    </div>
  )
}

/* ── Bible Panel ── */

function BiblePanel({
  bibleRef,
  mobile,
}: {
  bibleRef: BridgeScriptureViewProps['bibleRef']
  mobile: boolean
}) {
  return (
    <div style={{
      background: '#161220',
      padding: mobile ? '28px 20px' : '40px 36px',
    }}>
      {/* Source label */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.5)',
        marginBottom: 8,
      }}>
        Biblia
      </p>

      {/* Reference */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#C9A84C',
        marginBottom: 24,
      }}>
        {bibleRef.reference}
      </p>

      {/* Divider */}
      <div style={{
        width: 32,
        height: 1,
        background: 'rgba(201,168,76,0.25)',
        marginBottom: 24,
      }} />

      {/* Scripture text */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#F0EBE2',
        lineHeight: 1.85,
        opacity: 0.9,
      }}>
        {bibleRef.text}
      </p>

      {/* Context */}
      {bibleRef.context && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: '#7A7870',
          lineHeight: 1.75,
          marginTop: 16,
          paddingTop: 16,
          borderTop: '1px solid #272230',
        }}>
          {bibleRef.context}
        </p>
      )}
    </div>
  )
}

/* ── Quran Panel ── */

function QuranPanel({
  quranRef,
  mobile,
}: {
  quranRef: BridgeScriptureViewProps['quranRef']
  mobile: boolean
}) {
  return (
    <div style={{
      background: '#161220',
      padding: mobile ? '28px 20px' : '40px 36px',
      borderLeft: !mobile ? '1px solid #272230' : undefined,
    }}>
      {/* Source label */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.5)',
        marginBottom: 8,
      }}>
        Alcorao
      </p>

      {/* Reference */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#C9A84C',
        marginBottom: 24,
      }}>
        {quranRef.reference}
      </p>

      {/* Arabic text (RTL) */}
      {quranRef.arabic && (
        <p style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 22,
          color: 'rgba(201,168,76,0.7)',
          direction: 'rtl',
          textAlign: 'right',
          lineHeight: 1.8,
          marginBottom: 20,
        }}>
          {quranRef.arabic}
        </p>
      )}

      {/* Divider */}
      <div style={{
        width: 32,
        height: 1,
        background: 'rgba(201,168,76,0.25)',
        marginBottom: 24,
      }} />

      {/* Scripture text */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#F0EBE2',
        lineHeight: 1.85,
        opacity: 0.9,
      }}>
        {quranRef.text}
      </p>

      {/* Context */}
      {quranRef.context && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: '#7A7870',
          lineHeight: 1.75,
          marginTop: 16,
          paddingTop: 16,
          borderTop: '1px solid #272230',
        }}>
          {quranRef.context}
        </p>
      )}
    </div>
  )
}
