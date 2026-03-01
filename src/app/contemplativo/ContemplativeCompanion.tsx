'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════
// KALAM — CONTEMPLATIVE COMPANION
// "Brain.fm Halal" — Audio mixer for focus, calm, and contemplation
// ═══════════════════════════════════════════════════════════════

const GOLD = '#C9A84C'
const GOLD_DIM = 'rgba(201,168,76,0.3)'
const GOLD_GLOW = 'rgba(201,168,76,0.15)'
const SURFACE = '#111111'
const BG = '#0A0A0A'
const BORDER = '#2A2A2A'
const TEXT = '#F5F5F0'
const TEXT_DIM = '#8A8A7A'

// ── Types ────────────────────────────────────────────────────

interface FocusMode {
  id: string
  name: string
  nameAr: string
  icon: string
  desc: string
  quranVol: number
  ambientType: string
  ambientVol: number
  binauralFreq: number
  binauralVol: number
  nasheedVol: number
  gradient: [string, string]
  surah: string
  timer: number
}

interface AmbientConfig {
  name: string
  icon: string
  noiseType: 'brown' | 'pink' | 'white'
  filterFreq: number
}

interface NoiseNodes {
  source: AudioBufferSourceNode
  filter: BiquadFilterNode
  gain: GainNode
}

interface BinauralNodes {
  oscL: OscillatorNode
  oscR: OscillatorNode
  gainL: GainNode
  gainR: GainNode
  masterGain: GainNode
}

interface AudioNodes {
  noise?: NoiseNodes
  binaural?: BinauralNodes | null
}

interface Volumes {
  quran: number
  ambient: number
  binaural: number
  nasheed: number
}

// ── Focus Modes ──────────────────────────────────────────────

const MODES: FocusMode[] = [
  {
    id: 'focus',
    name: 'Foco Profundo',
    nameAr: 'تَرْكِيز',
    icon: '◉',
    desc: 'Estudo & trabalho com Quran suave',
    quranVol: 0.2,
    ambientType: 'rain',
    ambientVol: 0.5,
    binauralFreq: 10,
    binauralVol: 0.15,
    nasheedVol: 0,
    gradient: ['#0A0A0A', '#1A1A2E'],
    surah: 'Al-Mulk',
    timer: 45,
  },
  {
    id: 'energy',
    name: 'Energia',
    nameAr: 'طَاقَة',
    icon: '⚡',
    desc: 'Manhã & treino com ritmo elevado',
    quranVol: 0.4,
    ambientType: 'water',
    ambientVol: 0.3,
    binauralFreq: 20,
    binauralVol: 0.12,
    nasheedVol: 0.3,
    gradient: ['#1A0A00', '#0A0A0A'],
    surah: 'Al-Fath',
    timer: 25,
  },
  {
    id: 'calm',
    name: 'Calma',
    nameAr: 'سَكِينَة',
    icon: '☽',
    desc: 'Ansiedade & pausa com natureza',
    quranVol: 0.6,
    ambientType: 'birds',
    ambientVol: 0.4,
    binauralFreq: 6,
    binauralVol: 0.1,
    nasheedVol: 0.2,
    gradient: ['#0A1A0A', '#0A0A0A'],
    surah: 'Ar-Rahman',
    timer: 20,
  },
  {
    id: 'contemplation',
    name: 'Contemplação',
    nameAr: 'تَأَمُّل',
    icon: '✦',
    desc: 'Meditação & dhikr profundo',
    quranVol: 0.7,
    ambientType: 'desert',
    ambientVol: 0.3,
    binauralFreq: 0,
    binauralVol: 0,
    nasheedVol: 0,
    gradient: ['#1A1A2E', '#0A0A0A'],
    surah: 'Al-Kahf',
    timer: 30,
  },
  {
    id: 'sleep',
    name: 'Sleep',
    nameAr: 'نَوْم',
    icon: '◌',
    desc: 'Dormir com Ayat Al-Kursi & chuva',
    quranVol: 0.15,
    ambientType: 'heavyrain',
    ambientVol: 0.6,
    binauralFreq: 2,
    binauralVol: 0.08,
    nasheedVol: 0,
    gradient: ['#050510', '#0A0A0A'],
    surah: 'Ayat Al-Kursi',
    timer: 60,
  },
]

// ── Ambient Sound Types ──────────────────────────────────────

const AMBIENT_TYPES: Record<string, AmbientConfig> = {
  rain: { name: 'Chuva Leve', icon: '🌧', noiseType: 'brown', filterFreq: 800 },
  heavyrain: { name: 'Chuva Forte', icon: '⛈', noiseType: 'brown', filterFreq: 1200 },
  water: { name: 'Água Corrente', icon: '💧', noiseType: 'pink', filterFreq: 2000 },
  birds: { name: 'Pássaros', icon: '🕊', noiseType: 'white', filterFreq: 4000 },
  desert: { name: 'Vento Deserto', icon: '🏜', noiseType: 'brown', filterFreq: 400 },
  night: { name: 'Noite', icon: '🌙', noiseType: 'brown', filterFreq: 200 },
}

// ── Dhikr Phrases ────────────────────────────────────────────

const DHIKR = [
  { ar: 'سُبْحَانَ اللّٰه', pt: 'Glória a Deus', transliteration: 'SubhanAllah' },
  { ar: 'الْحَمْدُ لِلّٰه', pt: 'Louvor a Deus', transliteration: 'Alhamdulillah' },
  { ar: 'اللّٰهُ أَكْبَر', pt: 'Deus é o Maior', transliteration: 'Allahu Akbar' },
  { ar: 'لَا إِلٰهَ إِلَّا اللّٰه', pt: 'Não há divindade senão Deus', transliteration: 'La ilaha illa Allah' },
  { ar: 'أَسْتَغْفِرُ اللّٰه', pt: 'Peço perdão a Deus', transliteration: 'Astaghfirullah' },
]

// ── Web Audio Engine ─────────────────────────────────────────

function useAudioEngine() {
  const ctxRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<AudioNodes>({})
  const [isPlaying, setIsPlaying] = useState(false)

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctxRef.current = new AudioCtx()
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume()
    }
    return ctxRef.current
  }, [])

  const createNoise = useCallback((type: string, filterFreq: number): NoiseNodes => {
    const ctx = getCtx()
    const bufferSize = 2 * ctx.sampleRate
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const output = buffer.getChannelData(0)

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      if (type === 'brown') {
        output[i] = (b6 + 0.02 * white) / 1.02
        b6 = output[i]
        output[i] *= 3.5
      } else if (type === 'pink') {
        b0 = 0.99886 * b0 + white * 0.0555179
        b1 = 0.99332 * b1 + white * 0.0750759
        b2 = 0.96900 * b2 + white * 0.1538520
        b3 = 0.86650 * b3 + white * 0.3104856
        b4 = 0.55000 * b4 + white * 0.5329522
        b5 = -0.7616 * b5 - white * 0.0168980
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
        b6 = white * 0.115926
      } else {
        output[i] = white
      }
    }

    const source = ctx.createBufferSource()
    source.buffer = buffer
    source.loop = true

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = filterFreq
    filter.Q.value = 0.7

    const gain = ctx.createGain()
    gain.gain.value = 0

    source.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    source.start()

    return { source, filter, gain }
  }, [getCtx])

  const createBinaural = useCallback((freq: number): BinauralNodes | null => {
    if (freq <= 0) return null
    const ctx = getCtx()
    const baseFreq = 200

    const oscL = ctx.createOscillator()
    oscL.frequency.value = baseFreq
    oscL.type = 'sine'

    const oscR = ctx.createOscillator()
    oscR.frequency.value = baseFreq + freq
    oscR.type = 'sine'

    const merger = ctx.createChannelMerger(2)
    const gainL = ctx.createGain()
    const gainR = ctx.createGain()
    gainL.gain.value = 0
    gainR.gain.value = 0

    oscL.connect(gainL)
    oscR.connect(gainR)
    gainL.connect(merger, 0, 0)
    gainR.connect(merger, 0, 1)

    const masterGain = ctx.createGain()
    masterGain.gain.value = 1
    merger.connect(masterGain)
    masterGain.connect(ctx.destination)

    oscL.start()
    oscR.start()

    return { oscL, oscR, gainL, gainR, masterGain }
  }, [getCtx])

  const stopAll = useCallback(() => {
    const { noise, binaural } = nodesRef.current
    try {
      if (noise) {
        noise.gain.gain.setTargetAtTime(0, ctxRef.current?.currentTime || 0, 0.5)
        setTimeout(() => { try { noise.source.stop() } catch {} }, 1000)
      }
      if (binaural) {
        binaural.gainL.gain.setTargetAtTime(0, ctxRef.current?.currentTime || 0, 0.5)
        binaural.gainR.gain.setTargetAtTime(0, ctxRef.current?.currentTime || 0, 0.5)
        setTimeout(() => {
          try { binaural.oscL.stop(); binaural.oscR.stop() } catch {}
        }, 1000)
      }
    } catch {}
    nodesRef.current = {}
    setIsPlaying(false)
  }, [])

  const startMode = useCallback((mode: FocusMode) => {
    stopAll()
    const ambient = AMBIENT_TYPES[mode.ambientType]
    const noise = createNoise(ambient.noiseType, ambient.filterFreq)
    const ctx = getCtx()
    noise.gain.gain.setTargetAtTime(mode.ambientVol * 0.4, ctx.currentTime, 2)

    let binaural: BinauralNodes | null = null
    if (mode.binauralFreq > 0) {
      binaural = createBinaural(mode.binauralFreq)
      if (binaural) {
        binaural.gainL.gain.setTargetAtTime(mode.binauralVol * 0.3, ctx.currentTime, 2)
        binaural.gainR.gain.setTargetAtTime(mode.binauralVol * 0.3, ctx.currentTime, 2)
      }
    }

    nodesRef.current = { noise, binaural }
    setIsPlaying(true)
  }, [createNoise, createBinaural, getCtx, stopAll])

  const updateVolume = useCallback((layer: string, vol: number) => {
    const ctx = ctxRef.current
    if (!ctx) return
    const nodes = nodesRef.current
    if (layer === 'ambient' && nodes.noise) {
      nodes.noise.gain.gain.setTargetAtTime(vol * 0.4, ctx.currentTime, 0.3)
    }
    if (layer === 'binaural' && nodes.binaural) {
      nodes.binaural.gainL.gain.setTargetAtTime(vol * 0.3, ctx.currentTime, 0.3)
      nodes.binaural.gainR.gain.setTargetAtTime(vol * 0.3, ctx.currentTime, 0.3)
    }
  }, [])

  useEffect(() => {
    return () => { stopAll() }
  }, [stopAll])

  return { isPlaying, startMode, stopAll, updateVolume }
}

// ── Timer Hook ───────────────────────────────────────────────

function useTimer(initialMinutes: number) {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((s) => {
          if (s <= 1) { setIsRunning(false); return 0 }
          return s - 1
        })
      }, 1000)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isRunning, totalSeconds])

  const reset = (min: number) => { setTotalSeconds(min * 60); setIsRunning(false) }
  const toggle = () => setIsRunning((r) => !r)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return { minutes, seconds, isRunning, toggle, reset }
}

// ── Slider Component ─────────────────────────────────────────

function Slider({ value, onChange, label, icon, color = GOLD }: {
  value: number
  onChange: (v: number) => void
  label: string
  icon: string
  color?: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
      <span style={{ fontSize: 18, width: 28, textAlign: 'center' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: TEXT_DIM, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>{label}</span>
          <span style={{ fontSize: 11, color: TEXT_DIM }}>{Math.round(value * 100)}%</span>
        </div>
        <div style={{ position: 'relative' as const, height: 4, background: BORDER, borderRadius: 2 }}>
          <div style={{
            position: 'absolute' as const, left: 0, top: 0, height: '100%',
            width: `${value * 100}%`, background: color, borderRadius: 2,
            transition: 'width 0.2s ease',
          }} />
          <input
            type="range" min="0" max="100" value={value * 100}
            onChange={(e) => onChange(Number(e.target.value) / 100)}
            style={{
              position: 'absolute' as const, top: -6, left: 0, width: '100%', height: 16,
              opacity: 0, cursor: 'pointer', margin: 0,
            }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Breathing Circle ─────────────────────────────────────────

function BreathingCircle({ isActive, mode }: { isActive: boolean; mode: FocusMode | null }) {
  const [phase, setPhase] = useState('inhale')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!isActive) return
    let timeout: ReturnType<typeof setTimeout>
    const cycle = () => {
      setPhase('inhale')
      setScale(1.3)
      timeout = setTimeout(() => {
        setPhase('hold')
        timeout = setTimeout(() => {
          setPhase('exhale')
          setScale(1)
          timeout = setTimeout(cycle, 4000)
        }, 4000)
      }, 4000)
    }
    cycle()
    return () => clearTimeout(timeout)
  }, [isActive])

  const phaseText = phase === 'inhale' ? 'Inspire...' : phase === 'hold' ? 'Segure...' : 'Expire...'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle at 40% 40%, ${GOLD_DIM}, transparent 70%)`,
        border: `1px solid ${GOLD_DIM}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${scale})`,
        transition: 'transform 4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: `0 0 60px ${GOLD_GLOW}, inset 0 0 40px ${GOLD_GLOW}`,
      }}>
        <span style={{
          fontFamily: "'Amiri', var(--font-arabic), serif",
          fontSize: 32, color: GOLD,
          textShadow: `0 0 20px ${GOLD_DIM}`,
        }}>
          {mode?.id === 'contemplation' ? 'ذِكْر' : 'كلام'}
        </span>
      </div>
      {isActive && (
        <span style={{ fontSize: 13, color: TEXT_DIM, letterSpacing: '0.1em' }}>
          {phaseText}
        </span>
      )}
    </div>
  )
}

// ── Dhikr Counter ────────────────────────────────────────────

function DhikrCounter({ isActive }: { isActive: boolean }) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const dhikr = DHIKR[index]

  const increment = () => {
    if (count >= 32) {
      setCount(0)
      setIndex((i) => (i + 1) % DHIKR.length)
    } else {
      setCount((c) => c + 1)
    }
  }

  if (!isActive) return null

  return (
    <div
      onClick={increment}
      style={{
        cursor: 'pointer', userSelect: 'none',
        background: SURFACE, border: `1px solid ${BORDER}`,
        borderRadius: 16, padding: '20px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD_DIM }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER }}
    >
      <span style={{ fontFamily: "'Amiri', var(--font-arabic), serif", fontSize: 28, color: GOLD, textShadow: `0 0 15px ${GOLD_GLOW}` }}>
        {dhikr.ar}
      </span>
      <span style={{ fontSize: 12, color: TEXT_DIM }}>{dhikr.transliteration} — {dhikr.pt}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: GOLD, color: BG,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700,
        }}>
          {count}
        </div>
        <span style={{ fontSize: 11, color: TEXT_DIM }}>/ 33 — Toque para contar</span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function ContemplativeCompanion() {
  const [activeMode, setActiveMode] = useState<FocusMode | null>(null)
  const [view, setView] = useState<'modes' | 'player' | 'fullscreen'>('modes')
  const [volumes, setVolumes] = useState<Volumes>({ quran: 0.3, ambient: 0.5, binaural: 0.15, nasheed: 0 })
  const engine = useAudioEngine()
  const timer = useTimer(45)
  const [ambientType, setAmbientType] = useState('rain')
  const [showMixer, setShowMixer] = useState(false)

  const selectMode = (mode: FocusMode) => {
    setActiveMode(mode)
    setVolumes({
      quran: mode.quranVol,
      ambient: mode.ambientVol,
      binaural: mode.binauralVol,
      nasheed: mode.nasheedVol,
    })
    setAmbientType(mode.ambientType)
    timer.reset(mode.timer)
    setView('player')
  }

  const togglePlay = () => {
    if (!activeMode) return
    if (engine.isPlaying) {
      engine.stopAll()
      if (timer.isRunning) timer.toggle()
    } else {
      engine.startMode({ ...activeMode, ambientVol: volumes.ambient, binauralVol: volumes.binaural })
      if (!timer.isRunning) timer.toggle()
    }
  }

  const handleVolumeChange = (layer: keyof Volumes, val: number) => {
    setVolumes((v) => ({ ...v, [layer]: val }))
    engine.updateVolume(layer, val)
  }

  // ── Mode Selection View ────────────────────────────────────
  if (view === 'modes') {
    return (
      <div style={{
        minHeight: '100vh', background: BG, color: TEXT,
        fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
        padding: '0 16px',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 0 8px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`,
          marginBottom: 32,
        }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>
              KALAM <span style={{ color: GOLD, fontFamily: "var(--font-arabic), 'Amiri', serif", fontSize: 16 }}>كلام</span>
            </h1>
            <p style={{ fontSize: 11, color: TEXT_DIM, margin: '4px 0 0', fontFamily: 'var(--font-sans), system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
              Contemplative Companion
            </p>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 8px' }}>
          <p style={{ fontFamily: "var(--font-arabic), 'Amiri', serif", fontSize: 24, color: GOLD, margin: '0 0 8px', textShadow: `0 0 30px ${GOLD_GLOW}` }}>
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p style={{ fontSize: 13, color: TEXT_DIM, fontFamily: 'var(--font-sans), system-ui, sans-serif', margin: 0 }}>
            Em nome de Deus, o Clemente, o Misericordioso
          </p>
          <h2 style={{ fontSize: 28, margin: '24px 0 8px', fontWeight: 600, lineHeight: 1.2 }}>
            Como você quer se<br />conectar agora?
          </h2>
        </div>

        {/* Mode Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 440, margin: '0 auto', paddingBottom: 40 }}>
          {MODES.map((mode) => (
            <motion.div
              key={mode.id}
              onClick={() => selectMode(mode)}
              whileHover={{ y: -2, borderColor: GOLD_DIM }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: `linear-gradient(135deg, ${mode.gradient[0]}, ${mode.gradient[1]})`,
                border: `1px solid ${BORDER}`,
                borderRadius: 16, padding: '20px 24px',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
                display: 'flex', alignItems: 'center', gap: 16,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: GOLD_GLOW,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, flexShrink: 0,
              }}>
                {mode.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 600 }}>{mode.name}</span>
                  <span style={{ fontFamily: "var(--font-arabic), 'Amiri', serif", fontSize: 14, color: GOLD, opacity: 0.7 }}>
                    {mode.nameAr}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: TEXT_DIM, margin: '4px 0 0', fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                  {mode.desc}
                </p>
                <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' as const }}>
                  <span style={{
                    fontSize: 10, padding: '2px 8px', borderRadius: 4,
                    background: 'rgba(201,168,76,0.1)', color: GOLD,
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  }}>
                    {mode.surah}
                  </span>
                  <span style={{
                    fontSize: 10, padding: '2px 8px', borderRadius: 4,
                    background: 'rgba(255,255,255,0.05)', color: TEXT_DIM,
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  }}>
                    {mode.timer} min
                  </span>
                  {mode.binauralFreq > 0 && (
                    <span style={{
                      fontSize: 10, padding: '2px 8px', borderRadius: 4,
                      background: 'rgba(255,255,255,0.05)', color: TEXT_DIM,
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    }}>
                      {mode.binauralFreq}Hz binaural
                    </span>
                  )}
                </div>
              </div>
              <span style={{ fontSize: 18, color: TEXT_DIM }}>›</span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center', padding: '24px 0 32px',
          borderTop: `1px solid ${BORDER}`,
          maxWidth: 440, margin: '0 auto',
        }}>
          <p style={{ fontSize: 11, color: TEXT_DIM, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
            100% halal — Zero música, zero controvérsia
          </p>
          <p style={{ fontSize: 11, color: 'rgba(138,138,122,0.5)', fontFamily: 'var(--font-sans), system-ui, sans-serif', marginTop: 4 }}>
            Recitação Quran · Sons da natureza · Binaural beats · Nasheeds vocais
          </p>
        </div>
      </div>
    )
  }

  // ── Player View ────────────────────────────────────────────
  const mode = activeMode!
  const isFullscreen = view === 'fullscreen'

  return (
    <div style={{
      minHeight: '100vh',
      background: isFullscreen
        ? `radial-gradient(ellipse at 50% 30%, ${mode.gradient[0]}dd, ${BG})`
        : `linear-gradient(180deg, ${mode.gradient[0]}, ${BG})`,
      color: TEXT,
      fontFamily: "var(--font-serif), 'Playfair Display', 'Georgia', serif",
      transition: 'background 1s ease',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top Bar */}
      <div style={{
        padding: '16px 20px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={() => { engine.stopAll(); setView('modes') }}
          style={{
            background: 'none', border: 'none', color: TEXT_DIM,
            fontSize: 14, cursor: 'pointer', padding: '8px 0',
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
          }}
        >
          ← Voltar
        </button>
        <button
          onClick={() => setView(isFullscreen ? 'player' : 'fullscreen')}
          style={{
            background: 'none', border: `1px solid ${BORDER}`,
            color: TEXT_DIM, fontSize: 11, cursor: 'pointer',
            padding: '6px 12px', borderRadius: 8,
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
          }}
        >
          {isFullscreen ? 'Minimizar' : 'Sanctuary Mode ✦'}
        </button>
      </div>

      {/* Center Content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 24px', gap: 32, minHeight: 'calc(100vh - 200px)',
      }}>
        {/* Breathing Circle */}
        <BreathingCircle isActive={engine.isPlaying} mode={mode} />

        {/* Mode Info */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, margin: '0 0 4px' }}>{mode.name}</h2>
          <p style={{
            fontFamily: "var(--font-arabic), 'Amiri', serif", fontSize: 20, color: GOLD, margin: '0 0 8px',
            textShadow: `0 0 20px ${GOLD_GLOW}`,
          }}>
            {mode.nameAr}
          </p>
          <p style={{ fontSize: 12, color: TEXT_DIM, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
            {mode.surah} · {AMBIENT_TYPES[ambientType].name}
            {mode.binauralFreq > 0 && ` · ${mode.binauralFreq}Hz`}
          </p>
        </div>

        {/* Timer */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 56, fontWeight: 300, letterSpacing: '0.05em',
            fontFamily: 'var(--font-sans), system-ui, sans-serif', color: TEXT,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {String(timer.minutes).padStart(2, '0')}:{String(timer.seconds).padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 4 }}>
            {[15, 25, 45, 60].map((m) => (
              <button
                key={m}
                onClick={() => timer.reset(m)}
                style={{
                  background: timer.minutes === m && !timer.isRunning ? GOLD_GLOW : 'transparent',
                  border: `1px solid ${timer.minutes === m ? GOLD_DIM : BORDER}`,
                  color: timer.minutes === m ? GOLD : TEXT_DIM,
                  fontSize: 11, padding: '4px 10px', borderRadius: 6,
                  cursor: 'pointer', fontFamily: 'var(--font-sans), system-ui, sans-serif',
                }}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>

        {/* Play Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <button
            onClick={togglePlay}
            style={{
              width: 72, height: 72, borderRadius: '50%',
              background: engine.isPlaying
                ? `linear-gradient(135deg, ${GOLD}, #A88A3C)`
                : GOLD,
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, color: BG,
              boxShadow: engine.isPlaying ? `0 0 40px ${GOLD_DIM}` : `0 4px 20px rgba(0,0,0,0.4)`,
              transition: 'all 0.3s ease',
            }}
          >
            {engine.isPlaying ? '❚❚' : '▶'}
          </button>
        </div>

        {/* Dhikr Counter (contemplation mode) */}
        {mode.id === 'contemplation' && (
          <DhikrCounter isActive={engine.isPlaying} />
        )}
      </div>

      {/* Mixer Toggle */}
      <div style={{ padding: '0 20px 8px' }}>
        <button
          onClick={() => setShowMixer(!showMixer)}
          style={{
            width: '100%', background: 'none',
            border: `1px solid ${BORDER}`, borderRadius: 12,
            color: TEXT_DIM, fontSize: 12, padding: '12px',
            cursor: 'pointer', fontFamily: 'var(--font-sans), system-ui, sans-serif',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          <span style={{ fontSize: 16 }}>♫</span>
          Mixer de Áudio {showMixer ? '▲' : '▼'}
        </button>
      </div>

      {/* Mixer Panel */}
      <AnimatePresence>
        {showMixer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              background: SURFACE, borderTop: `1px solid ${BORDER}`,
              padding: '20px 24px 32px',
              borderRadius: '20px 20px 0 0',
            }}>
              <Slider
                value={volumes.quran} onChange={(v) => handleVolumeChange('quran', v)}
                label="Recitação Quran" icon="📖" color={GOLD}
              />
              <Slider
                value={volumes.ambient} onChange={(v) => handleVolumeChange('ambient', v)}
                label={`Ambient — ${AMBIENT_TYPES[ambientType].name}`}
                icon={AMBIENT_TYPES[ambientType].icon} color="#6B8F71"
              />
              {mode.binauralFreq > 0 && (
                <Slider
                  value={volumes.binaural} onChange={(v) => handleVolumeChange('binaural', v)}
                  label={`Binaural ${mode.binauralFreq}Hz`} icon="〰" color="#7B68EE"
                />
              )}
              {mode.nasheedVol > 0 && (
                <Slider
                  value={volumes.nasheed} onChange={(v) => handleVolumeChange('nasheed', v)}
                  label="Nasheed Vocal" icon="🎤" color="#E8A87C"
                />
              )}

              {/* Ambient Type Selector */}
              <div style={{ marginTop: 16 }}>
                <span style={{
                  fontSize: 11, color: TEXT_DIM, fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  textTransform: 'uppercase' as const, letterSpacing: '0.05em',
                }}>
                  Som Ambiente
                </span>
                <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' as const }}>
                  {Object.entries(AMBIENT_TYPES).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setAmbientType(key)}
                      style={{
                        background: ambientType === key ? GOLD_GLOW : 'transparent',
                        border: `1px solid ${ambientType === key ? GOLD_DIM : BORDER}`,
                        color: ambientType === key ? GOLD : TEXT_DIM,
                        fontSize: 12, padding: '6px 12px', borderRadius: 8,
                        cursor: 'pointer', fontFamily: 'var(--font-sans), system-ui, sans-serif',
                        display: 'flex', alignItems: 'center', gap: 4,
                      }}
                    >
                      <span>{val.icon}</span> {val.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
