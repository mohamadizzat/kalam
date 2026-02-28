'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  X,
  Loader2,
} from 'lucide-react'

type AudioPlayerProps = {
  surahNumber: number
  surahName: string
  arabicName?: string
  onClose: () => void
  onSurahChange?: (surahNumber: number) => void
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function AudioPlayer({
  surahNumber,
  surahName,
  arabicName,
  onClose,
  onSurahChange,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [hasError, setHasError] = useState(false)

  const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`

  // ── Initialize / change audio source ────────────────────────────────────
  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio
    audio.volume = isMuted ? 0 : volume
    audio.preload = 'metadata'

    const onLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoading(false)
      setHasError(false)
    }
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onEnded = () => {
      setIsPlaying(false)
      if (autoAdvance && surahNumber < 114) {
        onSurahChange?.(surahNumber + 1)
      }
    }
    const onCanPlay = () => {
      setIsLoading(false)
      setHasError(false)
    }
    const onWaiting = () => setIsLoading(true)
    const onPlaying = () => setIsLoading(false)
    const onError = () => {
      setIsLoading(false)
      setHasError(true)
      setIsPlaying(false)
    }

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('canplay', onCanPlay)
    audio.addEventListener('waiting', onWaiting)
    audio.addEventListener('playing', onPlaying)
    audio.addEventListener('error', onError)

    audio.src = audioUrl
    setIsLoading(true)
    setHasError(false)
    setCurrentTime(0)
    setDuration(0)

    // Auto-play on surah change (except first load)
    audio.load()

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('canplay', onCanPlay)
      audio.removeEventListener('waiting', onWaiting)
      audio.removeEventListener('playing', onPlaying)
      audio.removeEventListener('error', onError)
      audio.pause()
      audio.src = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surahNumber, audioUrl])

  // ── Volume sync ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // ── Play / Pause ────────────────────────────────────────────────────────
  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        // Autoplay blocked or other error
        setIsPlaying(false)
      }
    }
  }, [isPlaying])

  // ── Seek ────────────────────────────────────────────────────────────────
  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const bar = progressRef.current
      const audio = audioRef.current
      if (!bar || !audio || !duration) return

      const rect = bar.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      audio.currentTime = ratio * duration
      setCurrentTime(audio.currentTime)
    },
    [duration]
  )

  // ── Skip ────────────────────────────────────────────────────────────────
  const skipPrevious = useCallback(() => {
    if (surahNumber > 1) onSurahChange?.(surahNumber - 1)
  }, [surahNumber, onSurahChange])

  const skipNext = useCallback(() => {
    if (surahNumber < 114) onSurahChange?.(surahNumber + 1)
  }, [surahNumber, onSurahChange])

  // ── Close handler ───────────────────────────────────────────────────────
  const handleClose = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
    }
    onClose()
  }, [onClose])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          position: 'fixed',
          bottom: 64,
          left: 0,
          right: 0,
          zIndex: 150,
          background: '#161220',
          borderTop: '1px solid #272230',
          boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* ── Minimized View ─────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isMinimized ? (
            <motion.div
              key="minimized"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 16px',
              }}
            >
              {/* Mini progress bar at top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'rgba(201, 168, 76, 0.1)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: '#C9A84C',
                    transition: 'width 0.3s linear',
                  }}
                />
              </div>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                disabled={hasError}
                style={{
                  background: 'rgba(201, 168, 76, 0.1)',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: hasError ? 'not-allowed' : 'pointer',
                  flexShrink: 0,
                  opacity: hasError ? 0.4 : 1,
                }}
              >
                {isLoading ? (
                  <Loader2 size={16} color="#C9A84C" style={{ animation: 'spin 1s linear infinite' }} />
                ) : isPlaying ? (
                  <Pause size={16} fill="#C9A84C" color="#C9A84C" />
                ) : (
                  <Play size={16} fill="#C9A84C" color="#C9A84C" style={{ marginLeft: '2px' }} />
                )}
              </button>

              {/* Surah info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#F0EBE2',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {surahName}
                  {arabicName && (
                    <span style={{ fontFamily: 'var(--font-arabic)', color: '#C9A84C', marginLeft: '8px' }}>
                      {arabicName}
                    </span>
                  )}
                </p>
                <p style={{ fontSize: '11px', color: '#7A7870' }}>
                  Mishary Rashid Alafasy
                </p>
              </div>

              {/* Expand */}
              <button
                onClick={() => setIsMinimized(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                }}
              >
                <ChevronUp size={18} color="#7A7870" />
              </button>

              {/* Close */}
              <button
                onClick={handleClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                }}
              >
                <X size={16} color="#7A7870" />
              </button>
            </motion.div>
          ) : (
            /* ── Full View ──────────────────────────────────────────────── */
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ padding: '12px 16px 14px' }}
            >
              {/* Top row: info + controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                {/* Surah info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#F0EBE2',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {surahNumber}. {surahName}
                    {arabicName && (
                      <span
                        style={{
                          fontFamily: 'var(--font-arabic)',
                          color: '#C9A84C',
                          marginLeft: '8px',
                          fontSize: '16px',
                        }}
                      >
                        {arabicName}
                      </span>
                    )}
                  </p>
                  <p style={{ fontSize: '11px', color: '#7A7870', marginTop: '2px' }}>
                    Mishary Rashid Alafasy &middot; 128kbps
                  </p>
                </div>

                {/* Minimize + Close */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <button
                    onClick={() => setIsMinimized(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                    }}
                  >
                    <ChevronDown size={18} color="#7A7870" />
                  </button>
                  <button
                    onClick={handleClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                    }}
                  >
                    <X size={16} color="#7A7870" />
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                onTouchStart={handleSeek}
                style={{
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '4px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    borderRadius: '2px',
                    background: 'rgba(201, 168, 76, 0.1)',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #C9A84C, #D4B96A)',
                      borderRadius: '2px',
                      transition: 'width 0.1s linear',
                      position: 'relative',
                    }}
                  >
                    {/* Thumb */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '-5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#C9A84C',
                        boxShadow: '0 0 8px rgba(201, 168, 76, 0.4)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Time display */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#7A7870',
                  fontVariantNumeric: 'tabular-nums',
                  marginBottom: '8px',
                }}
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                {/* Volume toggle */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowVolume(!showVolume)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                      display: 'flex',
                    }}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={18} color="#7A7870" />
                    ) : (
                      <Volume2 size={18} color="#7A7870" />
                    )}
                  </button>

                  {/* Volume slider popup */}
                  <AnimatePresence>
                    {showVolume && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: 'absolute',
                          bottom: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          marginBottom: '8px',
                          background: '#1C1828',
                          border: '1px solid #272230',
                          borderRadius: '8px',
                          padding: '12px 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          zIndex: 10,
                        }}
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            const v = parseFloat(e.target.value)
                            setVolume(v)
                            if (v > 0) setIsMuted(false)
                          }}
                          style={{
                            writingMode: 'vertical-lr',
                            direction: 'rtl',
                            height: '80px',
                            width: '4px',
                            accentColor: '#C9A84C',
                            cursor: 'pointer',
                          }}
                        />
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '10px',
                            color: isMuted ? '#C9A84C' : '#7A7870',
                            padding: '2px',
                          }}
                        >
                          {isMuted ? 'Mudo' : Math.round(volume * 100) + '%'}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Auto-advance toggle */}
                <button
                  onClick={() => setAutoAdvance(!autoAdvance)}
                  title={autoAdvance ? 'Auto-avanço ativado' : 'Auto-avanço desativado'}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: autoAdvance ? '#C9A84C' : '#7A7870',
                    opacity: autoAdvance ? 1 : 0.5,
                    transition: 'color 0.2s, opacity 0.2s',
                  }}
                >
                  AUTO
                </button>

                {/* Previous */}
                <button
                  onClick={skipPrevious}
                  disabled={surahNumber <= 1}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: surahNumber <= 1 ? 'not-allowed' : 'pointer',
                    padding: '6px',
                    display: 'flex',
                    opacity: surahNumber <= 1 ? 0.3 : 1,
                  }}
                >
                  <SkipBack size={20} color="#F0EBE2" />
                </button>

                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  disabled={hasError}
                  style={{
                    background: hasError
                      ? 'rgba(120, 120, 120, 0.2)'
                      : 'linear-gradient(135deg, #C9A84C, #D4B96A)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: hasError ? 'not-allowed' : 'pointer',
                    boxShadow: hasError ? 'none' : '0 0 20px rgba(201, 168, 76, 0.3)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseDown={(e) => {
                    if (!hasError) (e.currentTarget.style.transform = 'scale(0.93)')
                  }}
                  onMouseUp={(e) => {
                    (e.currentTarget.style.transform = 'scale(1)')
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style.transform = 'scale(1)')
                  }}
                >
                  {isLoading ? (
                    <Loader2 size={22} color="#0D0B12" style={{ animation: 'spin 1s linear infinite' }} />
                  ) : hasError ? (
                    <span style={{ fontSize: '14px', color: '#7A7870' }}>!</span>
                  ) : isPlaying ? (
                    <Pause size={22} fill="#0D0B12" color="#0D0B12" />
                  ) : (
                    <Play size={22} fill="#0D0B12" color="#0D0B12" style={{ marginLeft: '2px' }} />
                  )}
                </button>

                {/* Next */}
                <button
                  onClick={skipNext}
                  disabled={surahNumber >= 114}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: surahNumber >= 114 ? 'not-allowed' : 'pointer',
                    padding: '6px',
                    display: 'flex',
                    opacity: surahNumber >= 114 ? 0.3 : 1,
                  }}
                >
                  <SkipForward size={20} color="#F0EBE2" />
                </button>
              </div>

              {/* Error message */}
              {hasError && (
                <p style={{ fontSize: '11px', color: '#C9A84C', textAlign: 'center', marginTop: '6px' }}>
                  Erro ao carregar o audio. Verifique sua conexao.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keyframe for loader spin */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}
