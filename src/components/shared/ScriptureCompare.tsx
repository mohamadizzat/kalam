'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ScripturePanel {
  label: string
  reference: string
  text: string
  language?: 'pt' | 'ar'
}

interface ScriptureCompareProps {
  left: ScripturePanel
  right: ScripturePanel
}

export function ScriptureCompare({ left, right }: ScriptureCompareProps) {
  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left')

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
        className="scripture-desktop"
      >
        <ScripturePanel panel={left} side="left" />
        <ScripturePanel panel={right} side="right" />
      </div>

      {/* ── MOBILE: tabs ── */}
      <div className="scripture-mobile">
        {/* Tab row */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #272230',
          marginBottom: 0,
        }}>
          {(['left', 'right'] as const).map((side) => {
            const panel = side === 'left' ? left : right
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
                {panel.label}
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
            <ScripturePanel
              panel={activeTab === 'left' ? left : right}
              side={activeTab}
              mobile
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .scripture-desktop { display: grid; }
        .scripture-mobile  { display: none; }
        @media (max-width: 640px) {
          .scripture-desktop { display: none !important; }
          .scripture-mobile  { display: block; }
        }
      `}</style>
    </div>
  )
}

function ScripturePanel({
  panel,
  side,
  mobile = false,
}: {
  panel: ScripturePanel
  side: 'left' | 'right'
  mobile?: boolean
}) {
  const isRight = side === 'right'

  return (
    <div style={{
      background: '#161220',
      padding: mobile ? '28px 20px' : '40px 36px',
      borderLeft: !mobile && isRight ? '1px solid #272230' : undefined,
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
        {panel.label}
      </p>

      {/* Reference */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#C9A84C',
        marginBottom: 24,
      }}>
        {panel.reference}
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
        {panel.text}
      </p>
    </div>
  )
}
