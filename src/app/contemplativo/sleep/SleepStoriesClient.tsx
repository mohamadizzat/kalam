'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SLEEP_STORIES, type SleepStory } from '@/lib/data/sleep-stories'
import { useAmbientAudio, AMBIENT_PRESETS } from '@/lib/hooks/useAmbientAudio'
import { ChevronLeft, Play, Pause, Clock, Moon, Heart, X, Volume2 } from 'lucide-react'
import Link from 'next/link'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.3)',
  goldGlow: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

const PLAYER_BG = '#050510'
const STORAGE_KEY = 'kalam-sleep-stories'
const CONTROLS_TIMEOUT = 4000
const PARAGRAPH_DURATION = 12000

interface StorageData {
  lastPlayed: string
  history: string[]
  favorited: string[]
}

function loadStorage(): StorageData {
  if (typeof window === 'undefined') return { lastPlayed: '', history: [], favorited: [] }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { lastPlayed: '', history: [], favorited: [] }
}

function saveStorage(data: StorageData) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}

export function SleepStoriesClient() {
  const [selectedStory, setSelectedStory] = useState<SleepStory | null>(null)
  const [view, setView] = useState<'list' | 'player'>('list')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [selectedTimer, setSelectedTimer] = useState<15 | 30 | 45 | 60>(30)
  const [showControls, setShowControls] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  const controlsTimerRef = useRef<NodeJS.Timeout | null>(null)
  const paragraphTimerRef = useRef<NodeJS.Timeout | null>(null)
  const countdownRef = useRef<NodeJS.Timeout | null>(null)
  const totalSecondsRef = useRef(0)
  const initialVolumeRef = useRef(0.5)
  const fadeStartSecondsRef = useRef(300)

  const ambient = useAmbientAudio()

  // Mount + load persistence
  useEffect(() => {
    setMounted(true)
    const data = loadStorage()
    setFavorites(data.favorited || [])
  }, [])

  // Controls auto-hide
  const resetControlsTimer = useCallback(() => {
    setShowControls(true)
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current)
    if (view === 'player') {
      controlsTimerRef.current = setTimeout(() => {
        setShowControls(false)
      }, CONTROLS_TIMEOUT)
    }
  }, [view])

  useEffect(() => {
    if (view === 'player') {
      resetControlsTimer()
    } else {
      setShowControls(true)
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current)
    }
    return () => {
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current)
    }
  }, [view, resetControlsTimer])

  // Paragraph auto-advance
  useEffect(() => {
    if (paragraphTimerRef.current) clearTimeout(paragraphTimerRef.current)
    if (isPlaying && selectedStory) {
      paragraphTimerRef.current = setTimeout(() => {
        if (currentParagraph < selectedStory.paragraphs.length - 1) {
          setCurrentParagraph((p) => p + 1)
        } else {
          // Story ended
          setIsPlaying(false)
        }
      }, PARAGRAPH_DURATION)
    }
    return () => {
      if (paragraphTimerRef.current) clearTimeout(paragraphTimerRef.current)
    }
  }, [isPlaying, currentParagraph, selectedStory])

  // Timer countdown
  useEffect(() => {
    if (countdownRef.current) clearInterval(countdownRef.current)
    if (!isPlaying) return

    countdownRef.current = setInterval(() => {
      totalSecondsRef.current -= 1
      const remaining = totalSecondsRef.current

      if (remaining <= 0) {
        // Timer done — fade to black
        setIsPlaying(false)
        setTimerMinutes(0)
        setTimerSeconds(0)
        if (ambient && ambient.stop) ambient.stop()
        if (countdownRef.current) clearInterval(countdownRef.current)
        return
      }

      // Volume fade in last 5 minutes
      if (remaining <= fadeStartSecondsRef.current && ambient && ambient.setVolume) {
        const ratio = remaining / fadeStartSecondsRef.current
        ambient.setVolume(initialVolumeRef.current * ratio)
      }

      setTimerMinutes(Math.floor(remaining / 60))
      setTimerSeconds(remaining % 60)
    }, 1000)

    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [isPlaying, ambient])

  // Start story
  const startStory = useCallback(
    (story: SleepStory) => {
      setSelectedStory(story)
      setView('player')
      setCurrentParagraph(0)
      setIsPlaying(true)

      const totalSec = selectedTimer * 60
      totalSecondsRef.current = totalSec
      fadeStartSecondsRef.current = Math.min(300, totalSec)
      setTimerMinutes(selectedTimer)
      setTimerSeconds(0)

      // Start ambient audio
      if (ambient && ambient.play) {
        ambient.play(story.ambientPreset)
        initialVolumeRef.current = 0.5
      }

      // Save to history
      const data = loadStorage()
      data.lastPlayed = story.id
      if (!data.history.includes(story.id)) {
        data.history.push(story.id)
      }
      saveStorage(data)
    },
    [selectedTimer, ambient]
  )

  // Toggle favorite
  const toggleFavorite = useCallback(
    (storyId: string, e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation()
        e.preventDefault()
      }
      setFavorites((prev) => {
        const next = prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]
        const data = loadStorage()
        data.favorited = next
        saveStorage(data)
        return next
      })
    },
    []
  )

  // Close player
  const closePlayer = useCallback(() => {
    setIsPlaying(false)
    setView('list')
    setSelectedStory(null)
    setCurrentParagraph(0)
    if (ambient && ambient.stop) ambient.stop()
    if (countdownRef.current) clearInterval(countdownRef.current)
    if (paragraphTimerRef.current) clearTimeout(paragraphTimerRef.current)
  }, [ambient])

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Handle interaction for controls reveal
  const handleInteraction = useCallback(() => {
    resetControlsTimer()
  }, [resetControlsTimer])

  // Volume change
  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const vol = parseFloat(e.target.value)
      initialVolumeRef.current = vol
      if (ambient && ambient.setVolume) ambient.setVolume(vol)
    },
    [ambient]
  )

  if (!mounted) return null

  // ─── PLAYER VIEW ───
  if (view === 'player' && selectedStory) {
    const progress = selectedStory.paragraphs.length > 0 ? ((currentParagraph + 1) / selectedStory.paragraphs.length) * 100 : 0
    const isStoryEnded = currentParagraph >= selectedStory.paragraphs.length - 1 && !isPlaying
    const timerDisplay = `${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`

    return (
      <div
        onClick={handleInteraction}
        onMouseMove={handleInteraction}
        onTouchStart={handleInteraction}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: PLAYER_BG,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          cursor: showControls ? 'default' : 'none',
        }}
      >
        {/* Progress bar — top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: 'rgba(201,168,76,0.1)',
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              height: '100%',
              backgroundColor: T.gold,
              borderRadius: 1,
            }}
          />
        </div>

        {/* Main content — paragraph */}
        <div
          style={{
            maxWidth: 600,
            padding: '0 32px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <AnimatePresence mode="wait">
            {isStoryEnded ? (
              <motion.p
                key="ended"
                initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                transition={{ duration: 2 }}
                style={{
                  fontSize: 22,
                  lineHeight: 1.9,
                  color: T.gold,
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                }}
              >
                Que a paz esteja com você.
              </motion.p>
            ) : (
              <motion.p
                key={currentParagraph}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                transition={{ duration: 2 }}
                style={{
                  fontSize: 20,
                  lineHeight: 1.9,
                  color: 'rgba(240,235,226,0.85)',
                  fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                }}
              >
                {selectedStory.paragraphs[currentParagraph]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Controls overlay — bottom */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '32px 24px',
                paddingBottom: 48,
                background: 'linear-gradient(to top, rgba(5,5,16,0.95) 0%, rgba(5,5,16,0.85) 60%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 20,
              }}
            >
              {/* Timer display */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={14} color={T.muted} />
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: T.muted,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: 2,
                  }}
                >
                  {timerDisplay}
                </span>
              </div>

              {/* Play / Pause */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: T.gold,
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(201,168,76,0.3)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {isPlaying ? <Pause size={24} color={T.bg} fill={T.bg} /> : <Play size={24} color={T.bg} fill={T.bg} style={{ marginLeft: 2 }} />}
              </button>

              {/* Timer presets */}
              <div style={{ display: 'flex', gap: 8 }}>
                {([15, 30, 45, 60] as const).map((mins) => (
                  <button
                    key={mins}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedTimer(mins)
                      const totalSec = mins * 60
                      totalSecondsRef.current = totalSec
                      fadeStartSecondsRef.current = Math.min(300, totalSec)
                      setTimerMinutes(mins)
                      setTimerSeconds(0)
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 20,
                      border: `1px solid ${selectedTimer === mins ? T.gold : T.border}`,
                      backgroundColor: selectedTimer === mins ? T.goldGlow : 'transparent',
                      color: selectedTimer === mins ? T.gold : T.muted,
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {mins}m
                  </button>
                ))}
              </div>

              {/* Volume slider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', maxWidth: 200 }}>
                <Volume2 size={14} color={T.muted} />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue="0.5"
                  onChange={handleVolumeChange}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    flex: 1,
                    height: 3,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    background: T.border,
                    borderRadius: 2,
                    outline: 'none',
                    cursor: 'pointer',
                    accentColor: T.gold,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Close button — top right */}
        <AnimatePresence>
          {showControls && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation()
                closePlayer()
              }}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'rgba(5,5,16,0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid ${T.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: T.secondary,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = T.secondary)}
            >
              <X size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // ─── LIST VIEW ───
  return (
    <div
      style={{
        minHeight: '100dvh',
        backgroundColor: T.bg,
        padding: '24px 20px',
        paddingBottom: 120,
      }}
    >
      {/* Back */}
      <Link
        href="/contemplativo"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: T.secondary,
          textDecoration: 'none',
          fontSize: 14,
          marginBottom: 32,
          transition: 'color 0.2s',
        }}
      >
        <ChevronLeft size={16} />
        Contemplativo
      </Link>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <Moon size={22} color={T.gold} />
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: T.text,
              margin: 0,
              fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
            }}
          >
            Sleep Stories
          </h1>
          <span
            style={{
              fontSize: 18,
              color: T.gold,
              fontFamily: "'Amiri', 'Noto Naskh Arabic', serif",
              opacity: 0.7,
              marginLeft: 4,
            }}
          >
            نَوْم
          </span>
        </div>
        <p style={{ fontSize: 15, color: T.secondary, margin: 0, lineHeight: 1.5 }}>
          Histórias dos Profetas para dormir
        </p>
      </div>

      {/* Timer selector */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Clock size={14} color={T.muted} />
          <span style={{ fontSize: 13, color: T.muted, fontWeight: 500 }}>Timer</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {([15, 30, 45, 60] as const).map((mins) => (
            <button
              key={mins}
              onClick={() => setSelectedTimer(mins)}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                border: `1px solid ${selectedTimer === mins ? T.gold : T.border}`,
                backgroundColor: selectedTimer === mins ? T.goldGlow : 'transparent',
                color: selectedTimer === mins ? T.gold : T.muted,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {mins} min
            </button>
          ))}
        </div>
      </div>

      {/* Story cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SLEEP_STORIES.map((story) => {
          const isFav = favorites.includes(story.id)
          return (
            <motion.button
              key={story.id}
              onClick={() => startStory(story)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 20,
                backgroundColor: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16,
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.goldDim
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border
              }}
            >
              {/* Icon */}
              <span style={{ fontSize: 36, lineHeight: 1, flexShrink: 0 }}>{story.icon}</span>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: T.text,
                    marginBottom: 4,
                    fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                  }}
                >
                  {story.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: T.secondary,
                    lineHeight: 1.4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {story.subtitle}
                </div>
              </div>

              {/* Right side */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                {/* Duration badge */}
                <span
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    backgroundColor: 'rgba(122,120,112,0.1)',
                    padding: '4px 10px',
                    borderRadius: 12,
                    fontWeight: 500,
                  }}
                >
                  {story.duration}m
                </span>

                {/* Favorite */}
                <div
                  onClick={(e) => toggleFavorite(story.id, e)}
                  style={{
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'background-color 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Heart
                    size={16}
                    color={isFav ? T.gold : T.muted}
                    fill={isFav ? T.gold : 'none'}
                    style={{ transition: 'all 0.2s' }}
                  />
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
