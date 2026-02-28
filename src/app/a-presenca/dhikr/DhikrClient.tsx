'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, RotateCcw } from 'lucide-react'

type DhikrPhase = {
  arabic: string
  transliteration: string
  meaning: string
  target: number
}

type DhikrPreset = {
  id: string
  label: string
  description: string
  phases: DhikrPhase[]
}

const PRESETS: DhikrPreset[] = [
  {
    id: 'pos-oracao',
    label: 'Pos-Oracao',
    description: 'Tasbih tradicional apos cada oracao',
    phases: [
      { arabic: 'سُبْحَانَ اللَّهِ', transliteration: 'SubhanAllah', meaning: 'Gloria a Deus', target: 33 },
      { arabic: 'الْحَمْدُ لِلَّهِ', transliteration: 'Alhamdulillah', meaning: 'Louvor a Deus', target: 33 },
      { arabic: 'اللَّهُ أَكْبَرُ', transliteration: 'Allahu Akbar', meaning: 'Deus e o Maior', target: 34 },
    ],
  },
  {
    id: 'coracao',
    label: 'Coracao',
    description: 'A declaracao de unicidade divina',
    phases: [
      { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ', transliteration: 'La ilaha illa Allah', meaning: 'Nao ha deus senao Deus', target: 100 },
    ],
  },
  {
    id: 'perdao',
    label: 'Perdao',
    description: 'Buscar o perdao e a purificacao divina',
    phases: [
      { arabic: 'أَسْتَغْفِرُ اللَّهَ', transliteration: 'Astaghfirullah', meaning: 'Peco perdao a Deus', target: 100 },
    ],
  },
]

export function DhikrClient() {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [count, setCount] = useState(0)
  const [completed, setCompleted] = useState(false)

  const preset = PRESETS.find(p => p.id === selectedPreset)
  const phase = preset ? preset.phases[currentPhase] : null
  const target = phase ? phase.target : 1

  const circumference = 2 * Math.PI * 90

  const handleTap = useCallback(() => {
    if (!preset || !phase || completed) return

    // Haptic feedback
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }

    if (count + 1 >= phase.target) {
      // Phase complete
      if (currentPhase + 1 < preset.phases.length) {
        setCurrentPhase(prev => prev + 1)
        setCount(0)
      } else {
        setCompleted(true)
        // Save session to localStorage
        try {
          const sessions = JSON.parse(localStorage.getItem('kalam-dhikr-sessions') || '[]')
          sessions.push({ preset: selectedPreset, date: new Date().toISOString() })
          localStorage.setItem('kalam-dhikr-sessions', JSON.stringify(sessions))
        } catch {
          // ignore storage errors
        }
      }
    } else {
      setCount(prev => prev + 1)
    }
  }, [preset, phase, completed, count, currentPhase, selectedPreset])

  const handleReset = () => {
    setSelectedPreset(null)
    setCurrentPhase(0)
    setCount(0)
    setCompleted(false)
  }

  const handleBack = () => {
    setSelectedPreset(null)
    setCurrentPhase(0)
    setCount(0)
    setCompleted(false)
  }

  // ── Preset Selection Screen ──
  if (!selectedPreset) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href="/a-presenca" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#7A7870',
              fontSize: '14px',
              textDecoration: 'none',
              marginBottom: '24px',
            }}>
              <ArrowLeft size={16} />
              A Presenca
            </Link>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 700,
              color: '#F0EBE2',
              letterSpacing: '-0.02em',
            }}>
              Dhikr
            </h1>
            <p style={{
              fontSize: '15px',
              color: '#7A7870',
              marginTop: '8px',
            }}>
              Lembranca de Deus
            </p>
          </motion.div>

          {/* Preset Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
            {PRESETS.map((p, i) => (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * (i + 1) }}
                onClick={() => setSelectedPreset(p.id)}
                className="card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '28px',
                  color: '#C9A84C',
                  direction: 'rtl',
                }}>
                  {p.phases[0].arabic}
                </p>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#F0EBE2',
                  }}>
                    {p.label}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#7A7870',
                    marginTop: '4px',
                  }}>
                    {p.description}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#B3B0A6',
                    marginTop: '8px',
                  }}>
                    {p.phases.length > 1
                      ? `${p.phases.length} fases — ${p.phases.reduce((sum, ph) => sum + ph.target, 0)} repeticoes`
                      : `${p.phases[0].target} repeticoes`}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </main>
    )
  }

  // ── Completion Screen ──
  if (completed) {
    return (
      <main
        className="min-h-screen"
        style={{
          background: '#0D0B12',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: '48px',
            color: '#C9A84C',
            marginBottom: '24px',
          }}>
            الْحَمْدُ لِلَّهِ
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: '#F0EBE2',
            marginBottom: '12px',
          }}>
            Concluido
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
            marginBottom: '48px',
          }}>
            Voce esteve presente com Deus
          </p>

          <button
            onClick={handleReset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              color: '#F0EBE2',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <RotateCcw size={16} />
            Novo Dhikr
          </button>
        </motion.div>
      </main>
    )
  }

  // ── Counter Screen ──
  return (
    <main
      className="min-h-screen"
      style={{
        background: '#0D0B12',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        position: 'relative',
        zIndex: 10,
      }}>
        <button
          onClick={handleBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#7A7870',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={20} />
        </button>

        {/* Phase indicator */}
        {preset && preset.phases.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {preset.phases.map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: idx === currentPhase ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: idx <= currentPhase ? '#C9A84C' : '#272230',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

        <div style={{ width: '36px' }} /> {/* spacer for centering */}
      </div>

      {/* Tappable area */}
      <div
        onClick={handleTap}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '24px',
          position: 'relative',
        }}
      >
        {/* Circular progress (behind) */}
        <svg
          width="240"
          height="240"
          viewBox="0 0 200 200"
          style={{
            position: 'absolute',
            opacity: 0.15,
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#272230"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={`${circumference * (1 - count / target)}`}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            style={{ transition: 'stroke-dashoffset 0.2s ease' }}
          />
        </svg>

        {/* Arabic text */}
        <AnimatePresence mode="wait">
          {phase && (
            <motion.div
              key={`${selectedPreset}-${currentPhase}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
            >
              <p
                className="arabic-glow"
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 'clamp(36px, 8vw, 56px)',
                  color: '#C9A84C',
                  direction: 'rtl',
                  lineHeight: 1.4,
                  marginBottom: '12px',
                }}
              >
                {phase.arabic}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#7A7870',
                marginBottom: '8px',
              }}>
                {phase.transliteration}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#B3B0A6',
              }}>
                {phase.meaning}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Count */}
        <motion.p
          key={count}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.15 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(56px, 15vw, 80px)',
            fontWeight: 700,
            color: '#F0EBE2',
            marginTop: '40px',
            lineHeight: 1,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {count}
        </motion.p>
        <p style={{
          fontSize: '14px',
          color: '#7A7870',
          marginTop: '8px',
          position: 'relative',
          zIndex: 2,
        }}>
          {count} / {target}
        </p>
      </div>

      {/* Bottom hint */}
      <div style={{
        textAlign: 'center',
        padding: '24px',
        paddingBottom: '40px',
      }}>
        <p style={{
          fontSize: '12px',
          color: '#7A7870',
          opacity: 0.5,
        }}>
          Toque em qualquer lugar para contar
        </p>
      </div>
    </main>
  )
}
