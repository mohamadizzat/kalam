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
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Volume2,
  Bookmark,
  Search,
  X,
  ArrowRight,
  Clock,
  Eye,
  EyeOff,
  Headphones,
} from 'lucide-react'

// ═══════════════════════════════════════════════════════════════
// KALAM — Santuario de Estudo v2
// Reader + Player — like Kindle meets Audible
// ═══════════════════════════════════════════════════════════════

const T = {
  bg: '#080610',
  surface: '#0F0D18',
  card: '#141222',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.3)',
  goldGlow: 'rgba(201,168,76,0.12)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#1E1A2A',
}

type View = 'selector' | 'reader'
type DisplayMode = 'both' | 'arabic' | 'translation'

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

async function loadSurah(n: number): Promise<Ayah[]> {
  const mod = await import(`@/lib/data/raw/quran/surah-${n}.json`)
  return mod.default as Ayah[]
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

export function SantuarioClient() {
  // ─── Core state
  const [view, setView] = useState<View>('selector')
  const [surah, setSurah] = useState(1)
  const [ayahs, setAyahs] = useState<Ayah[]>([])
  const [loading, setLoading] = useState(false)
  const [displayMode, setDisplayMode] = useState<DisplayMode>('both')

  // ─── Audio state
  const [playingAyah, setPlayingAyah] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isRepeating, setIsRepeating] = useState(false)
  const [audioLoading, setAudioLoading] = useState(false)

  // ─── UI state
  const [surahSearch, setSurahSearch] = useState('')
  const [showMixer, setShowMixer] = useState(false)
  const [playerExpanded, setPlayerExpanded] = useState(false)
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])
  const [quranVolume, setQuranVolume] = useState(1)

  // ─── Refs
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const ayahRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const readerRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(true)

  // ─── Ambient
  const ambient = useAmbientAudio()

  // ─── Derived
  const surahInfo = SURAH_NAMES.find((s) => s.number === surah)
  const totalAyahs = ayahs.length
  const progress = playingAyah && totalAyahs > 0
    ? (playingAyah / totalAyahs) * 100
    : 0

  // ─── Mount / unmount
  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // ─── Audio element
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

  // ─── Volume sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = quranVolume
  }, [quranVolume])

  // ─── Load saved state
  useEffect(() => {
    try {
      const raw = localStorage.getItem('kalam-santuario-last')
      if (raw) {
        const saved = JSON.parse(raw)
        if (saved.surah >= 1 && saved.surah <= 114) setSurah(saved.surah)
        if (saved.displayMode) setDisplayMode(saved.displayMode)
      }
      const bk = localStorage.getItem('kalam-santuario-bookmarks')
      if (bk) setBookmarks(JSON.parse(bk))
    } catch {}
  }, [])

  // ─── Save state
  useEffect(() => {
    if (view !== 'reader') return
    try {
      localStorage.setItem('kalam-santuario-last', JSON.stringify({
        surah,
        ayah: playingAyah || 1,
        displayMode,
      }))
    } catch {}
  }, [surah, playingAyah, displayMode, view])

  // ─── Save bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('kalam-santuario-bookmarks', JSON.stringify(bookmarks))
    } catch {}
  }, [bookmarks])

  // ─── Load surah data
  const openSurah = useCallback((n: number, startAyah?: number) => {
    setLoading(true)
    setSurah(n)
    setView('reader')
    setPlayingAyah(null)
    setIsPlaying(false)
    loadSurah(n).then((data) => {
      if (!mountedRef.current) return
      setAyahs(data)
      setLoading(false)
      // Scroll to starting ayah after render
      if (startAyah) {
        setTimeout(() => {
          const el = ayahRefs.current.get(startAyah)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300)
      }
    }).catch(() => setLoading(false))
  }, [])

  // ─── Play a specific ayah
  const playAyah = useCallback((ayahNumber: number) => {
    if (!audioRef.current) return

    setAudioLoading(true)
    setPlayingAyah(ayahNumber)
    setIsPlaying(true)

    const url = getAyahAudioUrl(surah, ayahNumber)
    audioRef.current.src = url
    audioRef.current.onloadeddata = () => setAudioLoading(false)
    audioRef.current.onerror = () => {
      setAudioLoading(false)
      // Try to continue to next if autoplay
      if (isAutoPlay && !isRepeating) {
        const idx = ayahs.findIndex(a => a.number === ayahNumber)
        if (idx < ayahs.length - 1) {
          setTimeout(() => playAyah(ayahs[idx + 1].number), 500)
        } else {
          setIsPlaying(false)
        }
      }
    }
    audioRef.current.onended = () => {
      if (!mountedRef.current) return

      if (isRepeating) {
        // Replay same ayah
        audioRef.current!.currentTime = 0
        audioRef.current!.play().catch(() => {})
        return
      }

      if (isAutoPlay) {
        const idx = ayahs.findIndex(a => a.number === ayahNumber)
        if (idx < ayahs.length - 1) {
          const nextAyah = ayahs[idx + 1]
          // Small pause between ayahs
          setTimeout(() => {
            if (mountedRef.current) playAyah(nextAyah.number)
          }, 800)
        } else {
          // Surah complete
          setIsPlaying(false)
          setPlayingAyah(null)
          // Mark as read
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
      } else {
        setIsPlaying(false)
      }
    }

    audioRef.current.play().catch(() => {
      setAudioLoading(false)
      setIsPlaying(false)
    })

    // Scroll to this ayah
    setTimeout(() => {
      const el = ayahRefs.current.get(ayahNumber)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }, [surah, ayahs, isAutoPlay, isRepeating])

  // ─── Player controls
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else if (playingAyah) {
      audioRef.current.play().catch(() => {})
      setIsPlaying(true)
    } else if (ayahs.length > 0) {
      playAyah(ayahs[0].number)
    }
  }, [isPlaying, playingAyah, ayahs, playAyah])

  const goToPrevAyah = useCallback(() => {
    if (!playingAyah || ayahs.length === 0) return
    const idx = ayahs.findIndex(a => a.number === playingAyah)
    if (idx > 0) playAyah(ayahs[idx - 1].number)
  }, [playingAyah, ayahs, playAyah])

  const goToNextAyah = useCallback(() => {
    if (!playingAyah || ayahs.length === 0) return
    const idx = ayahs.findIndex(a => a.number === playingAyah)
    if (idx < ayahs.length - 1) playAyah(ayahs[idx + 1].number)
  }, [playingAyah, ayahs, playAyah])

  const toggleBookmark = useCallback((ayahNum: number) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.surah === surah && b.ayah === ayahNum)
      if (exists) return prev.filter((b) => !(b.surah === surah && b.ayah === ayahNum))
      return [...prev, { surah, ayah: ayahNum, timestamp: Date.now() }]
    })
  }, [surah])

  const isBookmarked = (ayahNum: number) =>
    bookmarks.some((b) => b.surah === surah && b.ayah === ayahNum)

  // ─── Filtered surahs
  const filteredSurahs = surahSearch.trim()
    ? SURAH_NAMES.filter(
        (s) =>
          s.portuguese.toLowerCase().includes(surahSearch.toLowerCase()) ||
          s.arabic.includes(surahSearch) ||
          String(s.number).includes(surahSearch)
      )
    : SURAH_NAMES

  // ─── Saved state for "continue" button
  const [savedState, setSavedState] = useState<{ surah: number; ayah: number } | null>(null)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('kalam-santuario-last')
      if (raw) {
        const s = JSON.parse(raw)
        if (s.surah && s.ayah) setSavedState({ surah: s.surah, ayah: s.ayah })
      }
    } catch {}
  }, [])

  // ═══════════════════════════════════════════════════════════════
  // RENDER: SURAH SELECTOR
  // ═══════════════════════════════════════════════════════════════

  if (view === 'selector') {
    return (
      <div style={{ minHeight: '100vh', background: T.bg, paddingBottom: 100 }}>
        {/* Header */}
        <div style={{
          padding: '60px 20px 24px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Amiri', var(--font-arabic), serif",
            fontSize: 28,
            color: T.gold,
            marginBottom: 4,
            textShadow: '0 0 20px rgba(201,168,76,0.15)',
          }}>
            المَصْحَف
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 22,
            color: T.text,
            fontWeight: 600,
            margin: '8px 0 4px',
          }}>
            Santuario de Estudo
          </h1>
          <p style={{
            color: T.muted,
            fontSize: 14,
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
          }}>
            Leia, ouca e estude o Quran
          </p>
        </div>

        {/* Continue where you left off */}
        {savedState && (
          <div style={{ padding: '0 20px', marginBottom: 24 }}>
            <button
              onClick={() => openSurah(savedState.surah, savedState.ayah)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 20px',
                borderRadius: 16,
                border: `1px solid ${T.goldDim}`,
                background: 'rgba(201,168,76,0.06)',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'rgba(201,168,76,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Play size={20} style={{ color: T.gold, marginLeft: 2 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  color: T.gold,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  marginBottom: 4,
                }}>
                  Continuar leitura
                </div>
                <div style={{
                  color: T.text,
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                }}>
                  {SURAH_NAMES.find(s => s.number === savedState.surah)?.portuguese ?? `Surah ${savedState.surah}`}
                </div>
                <div style={{
                  color: T.muted,
                  fontSize: 12,
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  marginTop: 2,
                }}>
                  Ayah {savedState.ayah}
                </div>
              </div>
              <ArrowRight size={18} style={{ color: T.gold, flexShrink: 0 }} />
            </button>
          </div>
        )}

        {/* Search */}
        <div style={{ padding: '0 20px', marginBottom: 16 }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{
              position: 'absolute',
              left: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              color: T.muted,
            }} />
            <input
              type="text"
              placeholder="Buscar surah por nome, numero ou arabe..."
              value={surahSearch}
              onChange={(e) => setSurahSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 40px',
                borderRadius: 12,
                border: `1px solid ${T.border}`,
                background: T.surface,
                color: T.text,
                fontSize: 14,
                fontFamily: 'var(--font-sans), system-ui, sans-serif',
                outline: 'none',
              }}
            />
            {surahSearch && (
              <button
                onClick={() => setSurahSearch('')}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: T.muted,
                  cursor: 'pointer',
                  padding: 2,
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Surah list */}
        <div style={{ padding: '0 20px' }}>
          {filteredSurahs.map((s) => {
            const readSurahs: number[] = (() => {
              try { return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('kalam-surahs-read') || '[]') : [] } catch { return [] }
            })()
            const isRead = readSurahs.includes(s.number)

            return (
              <button
                key={s.number}
                onClick={() => openSurah(s.number)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  width: '100%',
                  padding: '14px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${T.border}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {/* Number */}
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: isRead ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isRead ? T.goldDim : 'transparent'}`,
                  color: isRead ? T.gold : T.muted,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  flexShrink: 0,
                }}>
                  {s.number}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    color: T.text,
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  }}>
                    {s.portuguese}
                  </div>
                  <div style={{
                    color: T.muted,
                    fontSize: 12,
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    marginTop: 2,
                  }}>
                    {s.ayahs} ayahs
                  </div>
                </div>

                {/* Arabic name */}
                <div style={{
                  fontFamily: "'Amiri', var(--font-arabic), serif",
                  fontSize: 18,
                  color: T.secondary,
                  flexShrink: 0,
                }}>
                  {s.arabic}
                </div>
              </button>
            )
          })}

          {filteredSurahs.length === 0 && (
            <div style={{
              color: T.muted,
              fontSize: 14,
              textAlign: 'center',
              paddingTop: 48,
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
            }}>
              Nenhuma surah encontrada
            </div>
          )}
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════
  // RENDER: READER VIEW
  // ═══════════════════════════════════════════════════════════════

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ─── Top Bar ─── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(8,6,16,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${T.border}`,
      }}>
        {/* Progress bar */}
        <div style={{ height: 2, background: T.border }}>
          <div style={{
            height: '100%',
            background: T.gold,
            width: `${progress}%`,
            transition: 'width 0.4s ease',
          }} />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 16px',
          gap: 12,
        }}>
          {/* Back */}
          <button
            onClick={() => {
              if (audioRef.current) audioRef.current.pause()
              setIsPlaying(false)
              setView('selector')
            }}
            style={{
              background: 'none',
              border: 'none',
              color: T.text,
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Surah info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              color: T.text,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {surahInfo?.portuguese ?? `Surah ${surah}`}
            </div>
            <div style={{
              color: T.muted,
              fontSize: 11,
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
            }}>
              {totalAyahs} ayahs
            </div>
          </div>

          {/* Arabic name */}
          <span style={{
            fontFamily: "'Amiri', var(--font-arabic), serif",
            fontSize: 18,
            color: T.gold,
            textShadow: '0 0 12px rgba(201,168,76,0.15)',
          }}>
            {surahInfo?.arabic}
          </span>

          {/* Display toggle */}
          <button
            onClick={() => {
              const modes: DisplayMode[] = ['both', 'arabic', 'translation']
              const idx = modes.indexOf(displayMode)
              setDisplayMode(modes[(idx + 1) % modes.length])
            }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: 'none',
              borderRadius: 8,
              padding: '6px 10px',
              fontSize: 10,
              fontWeight: 600,
              color: T.secondary,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            {displayMode === 'both' ? 'AR + PT' : displayMode === 'arabic' ? 'عربي' : 'PT'}
          </button>
        </div>
      </div>

      {/* ─── Ayah List ─── */}
      <div
        ref={readerRef}
        data-lenis-prevent
        style={{
          padding: '16px 16px 200px',
          maxWidth: 720,
          margin: '0 auto',
        }}
      >
        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
          }}>
            <div style={{ color: T.muted, fontSize: 14, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
              Carregando surah...
            </div>
          </div>
        ) : (
          <>
            {/* Bismillah (except for surah 1 & 9) */}
            {surah !== 1 && surah !== 9 && (
              <div style={{
                textAlign: 'center',
                padding: '24px 0 32px',
                fontFamily: "'Amiri', var(--font-arabic), serif",
                fontSize: 24,
                color: T.gold,
                textShadow: '0 0 16px rgba(201,168,76,0.1)',
              }}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
              </div>
            )}

            {ayahs.map((ayah) => {
              const isActive = playingAyah === ayah.number
              const bookmarked = isBookmarked(ayah.number)

              return (
                <div
                  key={ayah.key}
                  ref={(el) => {
                    if (el) ayahRefs.current.set(ayah.number, el)
                  }}
                  style={{
                    padding: '20px 16px',
                    marginBottom: 8,
                    borderRadius: 14,
                    border: `1px solid ${isActive ? T.goldDim : 'transparent'}`,
                    background: isActive ? 'rgba(201,168,76,0.05)' : 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => {
                    if (isActive && isPlaying) {
                      audioRef.current?.pause()
                      setIsPlaying(false)
                    } else {
                      playAyah(ayah.number)
                    }
                  }}
                >
                  {/* Ayah header: number + bookmark */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                  }}>
                    {/* Number badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: isActive ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
                        color: isActive ? T.gold : T.muted,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      }}>
                        {ayah.number}
                      </div>
                      {isActive && isPlaying && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          {[0, 1, 2].map(i => (
                            <motion.div
                              key={i}
                              animate={{ height: [4, 12, 4] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: 'easeInOut',
                              }}
                              style={{
                                width: 2,
                                borderRadius: 1,
                                background: T.gold,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      {audioLoading && isActive && (
                        <span style={{ color: T.muted, fontSize: 10, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
                          carregando...
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleBookmark(ayah.number)
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: bookmarked ? T.gold : 'rgba(122,120,112,0.4)',
                          padding: 4,
                          display: 'flex',
                        }}
                      >
                        <Bookmark size={14} fill={bookmarked ? T.gold : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Arabic text */}
                  {(displayMode === 'arabic' || displayMode === 'both') && (
                    <div style={{
                      fontFamily: "'Amiri', var(--font-arabic), serif",
                      fontSize: 'clamp(24px, 5vw, 34px)',
                      color: isActive ? T.text : 'rgba(240,235,226,0.85)',
                      textAlign: 'right',
                      direction: 'rtl',
                      lineHeight: 2,
                      marginBottom: displayMode === 'both' ? 16 : 0,
                      textShadow: isActive ? '0 0 20px rgba(201,168,76,0.08)' : 'none',
                      transition: 'color 0.3s, text-shadow 0.3s',
                    }}>
                      {ayah.arabic}
                    </div>
                  )}

                  {/* Translation */}
                  {(displayMode === 'translation' || displayMode === 'both') && (
                    <div style={{
                      fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      color: isActive ? T.secondary : T.muted,
                      lineHeight: 1.7,
                      transition: 'color 0.3s',
                    }}>
                      {ayah.portuguese}
                    </div>
                  )}
                </div>
              )
            })}
          </>
        )}
      </div>

      {/* ─── Bottom Player ─── */}
      {!loading && ayahs.length > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: 'rgba(15,13,24,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: `1px solid ${T.border}`,
        }}>
          {/* Expanded controls */}
          <AnimatePresence>
            {playerExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden', borderBottom: `1px solid ${T.border}` }}
              >
                <div style={{ padding: '16px 20px' }}>
                  {/* Options row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    marginBottom: 16,
                    flexWrap: 'wrap',
                  }}>
                    {/* Auto-play toggle */}
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 14px',
                        borderRadius: 20,
                        border: `1px solid ${isAutoPlay ? T.goldDim : T.border}`,
                        background: isAutoPlay ? 'rgba(201,168,76,0.08)' : 'transparent',
                        color: isAutoPlay ? T.gold : T.muted,
                        cursor: 'pointer',
                        fontSize: 12,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      }}
                    >
                      <Headphones size={13} />
                      {isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}
                    </button>

                    {/* Repeat toggle */}
                    <button
                      onClick={() => setIsRepeating(!isRepeating)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 14px',
                        borderRadius: 20,
                        border: `1px solid ${isRepeating ? T.goldDim : T.border}`,
                        background: isRepeating ? 'rgba(201,168,76,0.08)' : 'transparent',
                        color: isRepeating ? T.gold : T.muted,
                        cursor: 'pointer',
                        fontSize: 12,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      }}
                    >
                      <Repeat size={13} />
                      Repetir
                    </button>

                    {/* Mixer */}
                    <button
                      onClick={() => setShowMixer(!showMixer)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 14px',
                        borderRadius: 20,
                        border: `1px solid ${showMixer ? T.goldDim : T.border}`,
                        background: showMixer ? 'rgba(201,168,76,0.08)' : 'transparent',
                        color: showMixer ? T.gold : T.muted,
                        cursor: 'pointer',
                        fontSize: 12,
                        fontFamily: 'var(--font-sans), system-ui, sans-serif',
                      }}
                    >
                      <Volume2 size={13} />
                      Mixer
                    </button>
                  </div>

                  {/* Mixer panel */}
                  <AnimatePresence>
                    {showMixer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '12px 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 14,
                        }}>
                          {/* Quran volume */}
                          <div>
                            <label style={{
                              color: T.secondary,
                              fontSize: 11,
                              fontFamily: 'var(--font-sans), system-ui, sans-serif',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              marginBottom: 6,
                            }}>
                              <BookOpen size={12} />
                              Quran — {Math.round(quranVolume * 100)}%
                            </label>
                            <input
                              type="range" min={0} max={1} step={0.05}
                              value={quranVolume}
                              onChange={(e) => setQuranVolume(parseFloat(e.target.value))}
                              style={{ width: '100%', accentColor: T.gold }}
                            />
                          </div>

                          {/* Ambient volume */}
                          <div>
                            <label style={{
                              color: T.secondary,
                              fontSize: 11,
                              fontFamily: 'var(--font-sans), system-ui, sans-serif',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              marginBottom: 6,
                            }}>
                              <Volume2 size={12} />
                              Ambiente — {Math.round(ambient.volume * 100)}%
                            </label>
                            <input
                              type="range" min={0} max={1} step={0.05}
                              value={ambient.volume}
                              onChange={(e) => ambient.setVolume(parseFloat(e.target.value))}
                              style={{ width: '100%', accentColor: T.gold }}
                            />
                          </div>

                          {/* Ambient presets */}
                          <div style={{ display: 'flex', gap: 8 }}>
                            {AMBIENT_PRESETS.map((preset) => {
                              const isActive = ambient.activePreset === preset.id && ambient.isPlaying
                              return (
                                <button
                                  key={preset.id}
                                  onClick={() => {
                                    if (isActive) ambient.stop()
                                    else { ambient.switchPreset(preset.id); ambient.play(preset.id) }
                                  }}
                                  style={{
                                    flex: 1,
                                    padding: '8px 6px',
                                    borderRadius: 10,
                                    border: `1px solid ${isActive ? T.goldDim : T.border}`,
                                    background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                                    color: isActive ? T.gold : T.muted,
                                    cursor: 'pointer',
                                    fontSize: 10,
                                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3,
                                  }}
                                >
                                  <span style={{ fontSize: 16 }}>{preset.icon}</span>
                                  <span>{preset.name}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mini player */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px max(12px, env(safe-area-inset-bottom))',
            gap: 12,
          }}>
            {/* Expand toggle */}
            <button
              onClick={() => setPlayerExpanded(!playerExpanded)}
              style={{
                background: 'none',
                border: 'none',
                color: T.muted,
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
              }}
            >
              {playerExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                color: T.text,
                fontSize: 13,
                fontWeight: 500,
                fontFamily: 'var(--font-sans), system-ui, sans-serif',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {playingAyah
                  ? `${surahInfo?.portuguese} — Ayah ${playingAyah}`
                  : `${surahInfo?.portuguese}`
                }
              </div>
              <div style={{
                color: T.muted,
                fontSize: 11,
                fontFamily: 'var(--font-sans), system-ui, sans-serif',
              }}>
                {playingAyah ? `${playingAyah} de ${totalAyahs}` : 'Toque em uma ayah para ouvir'}
              </div>
            </div>

            {/* Transport controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                onClick={goToPrevAyah}
                disabled={!playingAyah || ayahs.findIndex(a => a.number === playingAyah) === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: T.muted,
                  padding: 4,
                  display: 'flex',
                  opacity: !playingAyah ? 0.3 : 1,
                }}
              >
                <SkipBack size={18} />
              </button>

              <button
                onClick={togglePlay}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: T.gold,
                  color: T.bg,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${T.goldGlow}`,
                }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 2 }} />}
              </button>

              <button
                onClick={goToNextAyah}
                disabled={!playingAyah || ayahs.findIndex(a => a.number === playingAyah) >= ayahs.length - 1}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: T.muted,
                  padding: 4,
                  display: 'flex',
                  opacity: !playingAyah ? 0.3 : 1,
                }}
              >
                <SkipForward size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
