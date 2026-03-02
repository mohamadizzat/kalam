'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAyahAudioUrl, getAyahCount, SURAH_NAMES } from '@/lib/quran-audio'
import { useAmbientAudio, AMBIENT_PRESETS } from '@/lib/hooks/useAmbientAudio'
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  BookOpen,
  ChevronDown,
  Volume2,
  Bookmark,
  Settings,
  X,
  ChevronLeft,
} from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// KALAM — Santuario de Estudo (Quran Study Mixer)
// Immersive per-ayah study with audio, ambient, and state machine
// ═══════════════════════════════════════════════════════════════

const T = {
  bg: '#080610',
  surface: '#121020',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.3)',
  goldGlow: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#1E1A2A',
}

type Phase = 'arabic-in' | 'audio' | 'translation-in' | 'reading' | 'fade-out'
type Speed = 'slow' | 'normal' | 'fast'
type DisplayMode = 'both' | 'arabic' | 'translation'
type Mode = 'auto' | 'manual'

interface Ayah {
  key: string
  number: number
  arabic: string
  portuguese: string
}

interface BookmarkEntry {
  surah: number
  ayah: number
  timestamp: number
}

interface SavedState {
  surah: number
  ayah: number
  ambient: string
  speed: Speed
  mode: Mode
  displayMode: DisplayMode
}

const SPEED_DELAYS: Record<Speed, number> = { slow: 8000, normal: 4000, fast: 2000 }

async function loadSurah(n: number): Promise<Ayah[]> {
  const mod = await import(`@/lib/data/raw/quran/surah-${n}.json`)
  return mod.default as Ayah[]
}

// ═══════════════════════════════════════════════════════════════
// Gold pulse keyframes (injected once)
// ═══════════════════════════════════════════════════════════════
const PULSE_STYLE_ID = 'santuario-pulse-style'
function injectPulseStyle() {
  if (typeof document === 'undefined') return
  if (document.getElementById(PULSE_STYLE_ID)) return
  const style = document.createElement('style')
  style.id = PULSE_STYLE_ID
  style.textContent = `
    @keyframes goldPulse {
      0%, 100% { text-shadow: 0 0 20px ${T.goldGlow}, 0 0 40px rgba(201,168,76,0.08); }
      50% { text-shadow: 0 0 35px ${T.goldDim}, 0 0 60px ${T.goldGlow}; }
    }
    .santuario-glow {
      animation: goldPulse 2.5s ease-in-out infinite;
    }
  `
  document.head.appendChild(style)
}

export function SantuarioClient() {
  // ─── Core state ────────────────────────────────────────────
  const [surah, setSurah] = useState(1)
  const [ayahIndex, setAyahIndex] = useState(0)
  const [ayahs, setAyahs] = useState<Ayah[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [mode, setMode] = useState<Mode>('auto')
  const [speed, setSpeed] = useState<Speed>('normal')
  const [displayMode, setDisplayMode] = useState<DisplayMode>('both')
  const [isRepeating, setIsRepeating] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showSurahSelector, setShowSurahSelector] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [phase, setPhase] = useState<Phase>('arabic-in')
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])
  const [surahSearch, setSurahSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // ─── Refs ──────────────────────────────────────────────────
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const phaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mountedRef = useRef(true)
  const isPlayingRef = useRef(false)

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  // ─── Ambient audio ────────────────────────────────────────
  const ambient = useAmbientAudio()

  // ─── Inject pulse CSS ─────────────────────────────────────
  useEffect(() => {
    injectPulseStyle()
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // ─── Persistence: load saved state on mount ───────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem('kalam-santuario-last')
      if (raw) {
        const saved: SavedState = JSON.parse(raw)
        if (saved.surah >= 1 && saved.surah <= 114) setSurah(saved.surah)
        if (saved.ayah >= 0) setAyahIndex(saved.ayah)
        if (saved.speed) setSpeed(saved.speed)
        if (saved.mode) setMode(saved.mode)
        if (saved.displayMode) setDisplayMode(saved.displayMode)
        if (saved.ambient) ambient.switchPreset(saved.ambient)
      }
      const bk = localStorage.getItem('kalam-santuario-bookmarks')
      if (bk) setBookmarks(JSON.parse(bk))
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ─── Persistence: save state on changes ───────────────────
  useEffect(() => {
    if (loading) return
    try {
      const state: SavedState = {
        surah,
        ayah: ayahIndex,
        ambient: ambient.activePreset,
        speed,
        mode,
        displayMode,
      }
      localStorage.setItem('kalam-santuario-last', JSON.stringify(state))
    } catch {}
  }, [surah, ayahIndex, speed, mode, displayMode, ambient.activePreset, loading])

  // ─── Persistence: save bookmarks ──────────────────────────
  useEffect(() => {
    try {
      localStorage.setItem('kalam-santuario-bookmarks', JSON.stringify(bookmarks))
    } catch {}
  }, [bookmarks])

  // ─── Load surah data ──────────────────────────────────────
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    loadSurah(surah).then((data) => {
      if (cancelled) return
      setAyahs(data)
      setLoading(false)
    }).catch(() => {
      if (!cancelled) setLoading(false)
    })
    return () => { cancelled = true }
  }, [surah])

  // ─── Controls auto-hide ───────────────────────────────────
  const resetControlsTimer = useCallback(() => {
    setShowControls(true)
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current)
    controlsTimerRef.current = setTimeout(() => {
      if (mountedRef.current && isPlayingRef.current) setShowControls(false)
    }, 4000)
  }, [])

  const handleInteraction = useCallback(() => {
    resetControlsTimer()
  }, [resetControlsTimer])

  // ─── Audio element setup ──────────────────────────────────
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.preload = 'auto'
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  // ─── Clear phase timer on unmount ─────────────────────────
  useEffect(() => {
    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
    }
  }, [])

  // ─── Phase state machine ──────────────────────────────────
  const advanceToNextAyah = useCallback(() => {
    if (!mountedRef.current) return
    const totalAyahs = ayahs.length

    if (isRepeating) {
      setPhase('arabic-in')
      return
    }

    if (ayahIndex < totalAyahs - 1) {
      setAyahIndex((prev) => prev + 1)
      setPhase('arabic-in')
    } else {
      // Surah completed
      setIsPlaying(false)
      try {
        const readKey = 'kalam-surahs-read'
        const raw = localStorage.getItem(readKey)
        const arr: number[] = raw ? JSON.parse(raw) : []
        if (!arr.includes(surah)) {
          arr.push(surah)
          localStorage.setItem(readKey, JSON.stringify(arr))
        }
      } catch {}
    }
  }, [ayahs.length, ayahIndex, isRepeating, surah])

  const runPhase = useCallback(() => {
    if (!mountedRef.current || !isPlaying || ayahs.length === 0) return
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)

    const currentAyah = ayahs[ayahIndex]
    if (!currentAyah) return

    switch (phase) {
      case 'arabic-in':
        // Arabic fades in over ~1s, then move to audio
        phaseTimerRef.current = setTimeout(() => {
          if (mountedRef.current && isPlayingRef.current) setPhase('audio')
        }, 1200)
        break

      case 'audio':
        // Play the ayah audio
        if (audioRef.current) {
          const url = getAyahAudioUrl(surah, currentAyah.number)
          audioRef.current.src = url
          audioRef.current.onended = () => {
            if (mountedRef.current && isPlayingRef.current) {
              // 1.5s pause before translation
              phaseTimerRef.current = setTimeout(() => {
                if (mountedRef.current && isPlayingRef.current) {
                  setPhase('translation-in')
                }
              }, 1500)
            }
          }
          audioRef.current.onerror = () => {
            // Skip to translation if audio fails
            if (mountedRef.current && isPlayingRef.current) {
              phaseTimerRef.current = setTimeout(() => {
                if (mountedRef.current && isPlayingRef.current) {
                  setPhase('translation-in')
                }
              }, 1500)
            }
          }
          audioRef.current.play().catch(() => {
            // Autoplay blocked — skip to translation
            phaseTimerRef.current = setTimeout(() => {
              if (mountedRef.current && isPlayingRef.current) {
                setPhase('translation-in')
              }
            }, 2000)
          })
        }
        break

      case 'translation-in':
        // Translation fades in ~1s, then reading pause
        phaseTimerRef.current = setTimeout(() => {
          if (mountedRef.current && isPlayingRef.current) setPhase('reading')
        }, 1200)
        break

      case 'reading':
        // Pause for reading based on speed
        phaseTimerRef.current = setTimeout(() => {
          if (mountedRef.current && isPlayingRef.current) setPhase('fade-out')
        }, SPEED_DELAYS[speed])
        break

      case 'fade-out':
        // Fade out ~800ms, then advance
        phaseTimerRef.current = setTimeout(() => {
          if (mountedRef.current && isPlayingRef.current) {
            if (mode === 'auto') {
              advanceToNextAyah()
            }
            // Manual mode: just stay, user taps next
          }
        }, 800)
        break
    }
  }, [phase, isPlaying, ayahs, ayahIndex, surah, speed, mode, advanceToNextAyah])

  useEffect(() => {
    runPhase()
  }, [runPhase])

  // ─── Playback controls ────────────────────────────────────
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false)
      if (audioRef.current) audioRef.current.pause()
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
    } else {
      setIsPlaying(true)
      setPhase('arabic-in')
      resetControlsTimer()
    }
  }, [isPlaying, resetControlsTimer])

  const goToPrevAyah = useCallback(() => {
    if (audioRef.current) audioRef.current.pause()
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
    setAyahIndex((prev) => Math.max(0, prev - 1))
    setPhase('arabic-in')
    if (isPlaying) resetControlsTimer()
  }, [isPlaying, resetControlsTimer])

  const goToNextAyah = useCallback(() => {
    if (audioRef.current) audioRef.current.pause()
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
    const maxIdx = ayahs.length - 1
    if (ayahIndex < maxIdx) {
      setAyahIndex((prev) => prev + 1)
      setPhase('arabic-in')
    }
    if (isPlaying) resetControlsTimer()
  }, [ayahs.length, ayahIndex, isPlaying, resetControlsTimer])

  const selectSurah = useCallback((n: number) => {
    if (audioRef.current) audioRef.current.pause()
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
    setSurah(n)
    setAyahIndex(0)
    setPhase('arabic-in')
    setShowSurahSelector(false)
    setIsPlaying(false)
  }, [])

  const toggleBookmark = useCallback(() => {
    if (ayahs.length === 0) return
    const currentAyah = ayahs[ayahIndex]
    if (!currentAyah) return
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.surah === surah && b.ayah === currentAyah.number)
      if (exists) {
        return prev.filter((b) => !(b.surah === surah && b.ayah === currentAyah.number))
      }
      return [...prev, { surah, ayah: currentAyah.number, timestamp: Date.now() }]
    })
  }, [ayahs, ayahIndex, surah])

  const isBookmarked = ayahs.length > 0 && ayahs[ayahIndex]
    ? bookmarks.some((b) => b.surah === surah && b.ayah === ayahs[ayahIndex].number)
    : false

  // ─── Quran volume ─────────────────────────────────────────
  const [quranVolume, setQuranVolume] = useState(1)
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = quranVolume
  }, [quranVolume])

  // ─── Derived ──────────────────────────────────────────────
  const currentAyah = ayahs[ayahIndex] ?? null
  const totalAyahs = ayahs.length
  const surahInfo = SURAH_NAMES.find((s) => s.number === surah)
  const progress = totalAyahs > 0 ? ((ayahIndex + 1) / totalAyahs) * 100 : 0

  // Phase-based visibility
  const showArabic =
    (displayMode === 'arabic' || displayMode === 'both') &&
    (phase === 'arabic-in' || phase === 'audio' || phase === 'translation-in' || phase === 'reading')
  const showTranslation =
    (displayMode === 'translation' || displayMode === 'both') &&
    (phase === 'translation-in' || phase === 'reading')
  const isFading = phase === 'fade-out'

  // ─── Filtered surahs for selector ─────────────────────────
  const filteredSurahs = surahSearch.trim()
    ? SURAH_NAMES.filter(
        (s) =>
          s.portuguese.toLowerCase().includes(surahSearch.toLowerCase()) ||
          s.arabic.includes(surahSearch) ||
          String(s.number).includes(surahSearch)
      )
    : SURAH_NAMES

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════

  return (
    <div
      style={{ minHeight: '100vh', background: T.bg, position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleInteraction}
    >
      {/* ─── Progress bar (top) ─────────────────────────────── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ height: 2, background: T.border, width: '100%' }}>
          <motion.div
            style={{ height: '100%', background: T.gold }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                padding: '10px 16px',
                background: 'rgba(8,6,16,0.7)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setShowSurahSelector(true) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'none',
                  border: 'none',
                  color: T.gold,
                  cursor: 'pointer',
                  fontSize: 13,
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                }}
              >
                <BookOpen size={14} />
                <span>{surahInfo?.portuguese ?? `Surah ${surah}`}</span>
                <ChevronDown size={12} />
              </button>
              <span style={{ color: T.muted, fontSize: 12, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                Ayah {ayahIndex + 1} de {totalAyahs}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Main ayah display ──────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '80px 24px 180px',
          maxWidth: 700,
          margin: '0 auto',
        }}
      >
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: T.muted, fontSize: 14, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
          >
            Carregando...
          </motion.div>
        ) : currentAyah ? (
          <>
            {/* Verse number */}
            <AnimatePresence mode="wait">
              {(showArabic || showTranslation) && !isFading && (
                <motion.div
                  key={`verse-num-${surah}-${currentAyah.number}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    color: T.muted,
                    fontSize: 13,
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    marginBottom: 32,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                  }}
                >
                  {surah}:{currentAyah.number}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arabic text */}
            <AnimatePresence mode="wait">
              {showArabic && !isFading && (
                <motion.div
                  key={`arabic-${surah}-${currentAyah.number}`}
                  initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={phase === 'audio' ? 'santuario-glow' : undefined}
                  style={{
                    fontFamily: "'Amiri', var(--font-arabic), serif",
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    color: T.text,
                    textAlign: 'center',
                    lineHeight: 2.2,
                    direction: 'rtl',
                    maxWidth: '100%',
                    padding: '0 8px',
                  }}
                >
                  {currentAyah.arabic}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Portuguese translation */}
            <AnimatePresence mode="wait">
              {showTranslation && !isFading && (
                <motion.div
                  key={`translation-${surah}-${currentAyah.number}`}
                  initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(6px)', y: -8 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  style={{
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    color: T.secondary,
                    textAlign: 'center',
                    lineHeight: 1.8,
                    marginTop: 32,
                    maxWidth: '100%',
                    padding: '0 8px',
                  }}
                >
                  {currentAyah.portuguese}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fade-out phase: everything fades */}
            <AnimatePresence>
              {isFading && (
                <motion.div
                  key={`fade-${surah}-${currentAyah.number}`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                  }}
                >
                  {(displayMode === 'arabic' || displayMode === 'both') && (
                    <div
                      style={{
                        fontFamily: "'Amiri', var(--font-arabic), serif",
                        fontSize: 'clamp(32px, 6vw, 48px)',
                        color: T.text,
                        textAlign: 'center',
                        lineHeight: 2.2,
                        direction: 'rtl',
                      }}
                    >
                      {currentAyah.arabic}
                    </div>
                  )}
                  {(displayMode === 'translation' || displayMode === 'both') && (
                    <div
                      style={{
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        color: T.secondary,
                        textAlign: 'center',
                        lineHeight: 1.8,
                        marginTop: 32,
                      }}
                    >
                      {currentAyah.portuguese}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manual mode: tap prompt */}
            {mode === 'manual' && phase === 'fade-out' && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                onClick={(e) => {
                  e.stopPropagation()
                  advanceToNextAyah()
                }}
                style={{
                  marginTop: 48,
                  background: 'none',
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  color: T.muted,
                  padding: '10px 24px',
                  fontSize: 13,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                }}
              >
                Toque para continuar
              </motion.button>
            )}

            {/* Not playing state */}
            {!isPlaying && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  marginTop: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {phase !== 'arabic-in' && (
                  <span style={{ color: T.muted, fontSize: 13, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                    Toque play para iniciar
                  </span>
                )}
              </motion.div>
            )}
          </>
        ) : null}
      </div>

      {/* ─── Controls overlay (bottom) ─────────────────────── */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 40,
              background: 'rgba(8,6,16,0.85)',
              backdropFilter: 'blur(20px)',
              borderTop: `1px solid ${T.border}`,
              padding: '16px 16px max(16px, env(safe-area-inset-bottom))',
            }}
          >
            {/* Speed & Display pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 16,
                flexWrap: 'wrap',
              }}
            >
              {/* Speed pills */}
              <div style={{ display: 'flex', gap: 4 }}>
                {(['slow', 'normal', 'fast'] as Speed[]).map((s) => (
                  <button
                    key={s}
                    onClick={(e) => { e.stopPropagation(); setSpeed(s) }}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 12,
                      border: 'none',
                      fontSize: 11,
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      cursor: 'pointer',
                      background: speed === s ? T.gold : 'rgba(255,255,255,0.06)',
                      color: speed === s ? T.bg : T.muted,
                      fontWeight: speed === s ? 600 : 400,
                      transition: 'all 0.2s',
                    }}
                  >
                    {s === 'slow' ? 'Lento' : s === 'normal' ? 'Normal' : 'Rapido'}
                  </button>
                ))}
              </div>

              {/* Display pills */}
              <div style={{ display: 'flex', gap: 4 }}>
                {(['arabic', 'translation', 'both'] as DisplayMode[]).map((d) => (
                  <button
                    key={d}
                    onClick={(e) => { e.stopPropagation(); setDisplayMode(d) }}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 12,
                      border: 'none',
                      fontSize: 11,
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      cursor: 'pointer',
                      background: displayMode === d ? T.gold : 'rgba(255,255,255,0.06)',
                      color: displayMode === d ? T.bg : T.muted,
                      fontWeight: displayMode === d ? 600 : 400,
                      transition: 'all 0.2s',
                    }}
                  >
                    {d === 'arabic' ? 'Arabe' : d === 'translation' ? 'Traducao' : 'Ambos'}
                  </button>
                ))}
              </div>
            </div>

            {/* Main transport controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              {/* Repeat */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsRepeating(!isRepeating) }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isRepeating ? T.gold : T.muted,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Repetir"
              >
                <Repeat size={18} />
              </button>

              {/* Previous */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevAyah() }}
                disabled={ayahIndex === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: ayahIndex === 0 ? 'default' : 'pointer',
                  color: ayahIndex === 0 ? 'rgba(122,120,112,0.3)' : T.text,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Anterior"
              >
                <SkipBack size={22} />
              </button>

              {/* Play/Pause */}
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay() }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: T.gold,
                  color: T.bg,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 30px ${T.goldGlow}`,
                  transition: 'transform 0.15s, box-shadow 0.2s',
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(0.93)'
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'scale(1)'
                }}
                aria-label={isPlaying ? 'Pausar' : 'Play'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: 3 }} />}
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); goToNextAyah() }}
                disabled={ayahIndex >= totalAyahs - 1}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: ayahIndex >= totalAyahs - 1 ? 'default' : 'pointer',
                  color: ayahIndex >= totalAyahs - 1 ? 'rgba(122,120,112,0.3)' : T.text,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Proximo"
              >
                <SkipForward size={22} />
              </button>

              {/* Bookmark */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleBookmark() }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isBookmarked ? T.gold : T.muted,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Marcar"
              >
                <Bookmark size={18} fill={isBookmarked ? T.gold : 'none'} />
              </button>
            </div>

            {/* Bottom row: mode, mixer, surah selector */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                marginTop: 14,
              }}
            >
              {/* Mode toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMode(mode === 'auto' ? 'manual' : 'auto')
                }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: 'none',
                  borderRadius: 12,
                  padding: '5px 14px',
                  fontSize: 11,
                  color: T.secondary,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  transition: 'all 0.2s',
                }}
              >
                {mode === 'auto' ? 'Automatico' : 'Manual'}
              </button>

              {/* Mixer toggle */}
              <button
                onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings) }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: showSettings ? T.gold : T.muted,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Mixer"
              >
                <Volume2 size={18} />
              </button>

              {/* Surah selector */}
              <button
                onClick={(e) => { e.stopPropagation(); setShowSurahSelector(true) }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: T.muted,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label="Selecionar Surah"
              >
                <BookOpen size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mixer / Settings Panel ────────────────────────── */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 60,
              background: T.surface,
              borderTop: `1px solid ${T.border}`,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: '20px 24px max(24px, env(safe-area-inset-bottom))',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ color: T.text, fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                Mixer
              </span>
              <button
                onClick={() => setShowSettings(false)}
                style={{ background: 'none', border: 'none', color: T.muted, cursor: 'pointer', padding: 4 }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Quran volume */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ color: T.secondary, fontSize: 12, fontFamily: 'var(--font-sans), system-ui, sans-serif', display: 'block', marginBottom: 8 }}>
                Volume do Quran
              </label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={quranVolume}
                onChange={(e) => setQuranVolume(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: T.gold }}
              />
            </div>

            {/* Ambient volume */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ color: T.secondary, fontSize: 12, fontFamily: 'var(--font-sans), system-ui, sans-serif', display: 'block', marginBottom: 8 }}>
                Volume Ambiente
              </label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={ambient.volume}
                onChange={(e) => ambient.setVolume(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: T.gold }}
              />
            </div>

            {/* Ambient presets */}
            <div>
              <label style={{ color: T.secondary, fontSize: 12, fontFamily: 'var(--font-sans), system-ui, sans-serif', display: 'block', marginBottom: 10 }}>
                Ambiente
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                {AMBIENT_PRESETS.map((preset) => {
                  const isActive = ambient.activePreset === preset.id && ambient.isPlaying
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        if (isActive) {
                          ambient.stop()
                        } else {
                          ambient.switchPreset(preset.id)
                          ambient.play(preset.id)
                        }
                      }}
                      style={{
                        flex: 1,
                        padding: '10px 8px',
                        borderRadius: 10,
                        border: `1px solid ${isActive ? T.gold : T.border}`,
                        background: isActive ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                        color: isActive ? T.gold : T.secondary,
                        cursor: 'pointer',
                        fontSize: 11,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{preset.icon}</span>
                      <span>{preset.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Surah Selector Modal ──────────────────────────── */}
      <AnimatePresence>
        {showSurahSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 70,
              background: 'rgba(8,6,16,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 20px',
                borderBottom: `1px solid ${T.border}`,
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => setShowSurahSelector(false)}
                style={{ background: 'none', border: 'none', color: T.text, cursor: 'pointer', padding: 4 }}
              >
                <ChevronLeft size={22} />
              </button>
              <span style={{ color: T.text, fontSize: 16, fontWeight: 600, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                Selecionar Surah
              </span>
            </div>

            {/* Search */}
            <div style={{ padding: '12px 20px', flexShrink: 0 }}>
              <input
                type="text"
                placeholder="Buscar surah..."
                value={surahSearch}
                onChange={(e) => setSurahSearch(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: `1px solid ${T.border}`,
                  background: T.surface,
                  color: T.text,
                  fontSize: 14,
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  outline: 'none',
                }}
              />
            </div>

            {/* Surah list */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0 20px 20px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {filteredSurahs.map((s) => {
                const isActive = s.number === surah
                return (
                  <button
                    key={s.number}
                    onClick={() => {
                      selectSurah(s.number)
                      setSurahSearch('')
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      width: '100%',
                      padding: '14px 12px',
                      background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${T.border}`,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                  >
                    {/* Number */}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: isActive ? T.gold : 'rgba(255,255,255,0.05)',
                        color: isActive ? T.bg : T.muted,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                        flexShrink: 0,
                      }}
                    >
                      {s.number}
                    </div>

                    {/* Names */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          color: isActive ? T.gold : T.text,
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: 'var(--font-sans), system-ui, sans-serif',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {s.portuguese}
                      </div>
                      <div
                        style={{
                          color: T.muted,
                          fontSize: 12,
                          fontFamily: "'Amiri', var(--font-arabic), serif",
                          marginTop: 2,
                        }}
                      >
                        {s.arabic}
                      </div>
                    </div>

                    {/* Ayah count */}
                    <div
                      style={{
                        color: T.muted,
                        fontSize: 11,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                        flexShrink: 0,
                      }}
                    >
                      {s.ayahs} ayahs
                    </div>
                  </button>
                )
              })}

              {filteredSurahs.length === 0 && (
                <div style={{ color: T.muted, fontSize: 13, textAlign: 'center', paddingTop: 40, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                  Nenhuma surah encontrada
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
