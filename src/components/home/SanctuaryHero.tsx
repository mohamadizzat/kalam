'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Share2, Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getPhaseColor, getPhaseRgb } from '@/lib/ramadan-helpers'

// ── Design tokens ────────────────────────────────────────────────────────────
const tokens = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── Types ────────────────────────────────────────────────────────────────────
interface RamadanProp {
  day: number
  phase: 'mercy' | 'forgiveness' | 'freedom'
  isLailatAlQadr: boolean
}

interface SanctuaryHeroProps {
  verse: { arabic: string; translation: string; surahRef: string }
  nameOfDay?: { arabic: string; transliteration: string; meaning: string }
  compact?: boolean
  ramadan?: RamadanProp | null
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Extract the surah number from a ref like "Al-Baqarah 2:186" → 2 */
function extractSurahNumber(surahRef: string): number {
  const match = surahRef.match(/(\d+):/)
  return match ? parseInt(match[1], 10) : 1
}

function getAudioUrl(surahNumber: number): string {
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`
}

// ── Component ────────────────────────────────────────────────────────────────

export function SanctuaryHero({ verse, nameOfDay, compact = false, ramadan }: SanctuaryHeroProps) {
  const ramadanPhaseColor = ramadan ? getPhaseColor(ramadan.phase) : null
  const ramadanPhaseRgb = ramadan ? getPhaseRgb(ramadan.phase) : null
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const surahNumber = extractSurahNumber(verse.surahRef)

  // ── Audio lifecycle ──────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = useCallback(async () => {
    // Lazy-initialize audio on first interaction (avoids autoplay issues)
    if (!audioRef.current) {
      const audio = new Audio()
      audio.preload = 'metadata'
      audio.src = getAudioUrl(surahNumber)

      audio.addEventListener('waiting', () => setIsLoading(true))
      audio.addEventListener('playing', () => setIsLoading(false))
      audio.addEventListener('canplay', () => setIsLoading(false))
      audio.addEventListener('ended', () => setIsPlaying(false))
      audio.addEventListener('error', () => {
        setIsPlaying(false)
        setIsLoading(false)
      })

      audioRef.current = audio
    }

    const audio = audioRef.current

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        setIsLoading(true)
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      } finally {
        setIsLoading(false)
      }
    }
  }, [isPlaying, surahNumber])

  // ── Share / Copy ─────────────────────────────────────────────────────────
  const shareText = `${verse.arabic}\n\n${verse.translation}\n\n— ${verse.surahRef} | KALAM`

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${verse.surahRef} | KALAM`,
          text: shareText,
        })
        return
      } catch (err) {
        if ((err as DOMException).name === 'AbortError') return
      }
    }

    // Fallback: clipboard
    try {
      await navigator.clipboard.writeText(shareText)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = shareText
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [shareText, verse.surahRef])

  // ── Animation orchestration ──────────────────────────────────────────────
  const ease = [0.25, 0.4, 0.25, 1] as const

  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center overflow-hidden',
        compact ? 'py-16 md:py-20' : 'min-h-[85vh] py-20'
      )}
      style={{ background: tokens.bg }}
    >
      {/* ── Atmospheric aurora blobs ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Top-right glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            background: ramadanPhaseRgb
              ? `radial-gradient(circle, rgba(${ramadanPhaseRgb},0.1) 0%, transparent 70%)`
              : `radial-gradient(circle, ${tokens.gold}18 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
        {/* Bottom-left glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-15%',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            background: ramadanPhaseRgb
              ? `radial-gradient(circle, rgba(${ramadanPhaseRgb},0.08) 0%, transparent 70%)`
              : `radial-gradient(circle, ${tokens.gold}14 0%, transparent 70%)`,
            filter: 'blur(90px)',
          }}
        />
        {/* Center subtle glow */}
        <motion.div
          animate={{
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: ramadanPhaseRgb
              ? `radial-gradient(circle, rgba(${ramadanPhaseRgb},0.06) 0%, transparent 70%)`
              : `radial-gradient(circle, ${tokens.goldLight}10 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full px-6 md:px-8"
        style={{ maxWidth: 680, textAlign: 'center' }}
      >
        {/* ── Name of the Day / Ramadan header ───────────────────────────── */}
        {ramadan ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            style={{ marginBottom: compact ? 20 : 28 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: ramadanPhaseColor || tokens.gold,
              marginBottom: 6,
            }}>
              RAMADAN — DIA {ramadan.day}
            </p>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: compact ? 20 : 24,
              color: ramadanPhaseColor || tokens.gold,
              lineHeight: 1.4,
              marginBottom: 4,
            }}>
              رمضان كريم
            </p>
            {ramadan.isLailatAlQadr && (
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: compact ? 14 : 16,
                color: `${tokens.gold}99`,
                letterSpacing: '0.5px',
                marginTop: 4,
              }}>
                خَيْرٌ مِنْ أَلْفِ شَهْرٍ
              </p>
            )}
          </motion.div>
        ) : nameOfDay ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            style={{ marginBottom: compact ? 20 : 28 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: tokens.muted,
              marginBottom: 6,
            }}>
              NOME DO DIA
            </p>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: compact ? 20 : 24,
              color: tokens.gold,
              lineHeight: 1.4,
              marginBottom: 4,
            }}>
              {nameOfDay.arabic}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: tokens.secondary,
              letterSpacing: '0.5px',
            }}>
              {nameOfDay.transliteration} — {nameOfDay.meaning}
            </p>
          </motion.div>
        ) : null}

        {/* ── Bismillah ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease }}
        >
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: compact ? 'clamp(24px, 5vw, 36px)' : 'clamp(28px, 6vw, 44px)',
              color: tokens.gold,
              direction: 'rtl',
              lineHeight: 1.8,
              textShadow: `0 0 40px ${tokens.gold}20`,
              marginBottom: compact ? 24 : 36,
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </motion.div>

        {/* ── Thin gold line separator ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: compact ? 24 : 36,
            maxWidth: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to right, transparent, ${tokens.gold}40)`,
          }} />
          <div style={{
            width: 6,
            height: 6,
            transform: 'rotate(45deg)',
            background: tokens.gold,
            opacity: 0.4,
          }} />
          <div style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to left, transparent, ${tokens.gold}40)`,
          }} />
        </motion.div>

        {/* ── Verse of the Day ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 1.5, ease }}
          style={{ marginBottom: compact ? 16 : 24 }}
        >
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: `${tokens.gold}80`,
            marginBottom: compact ? 14 : 20,
          }}>
            VERSO DO DIA
          </p>

          {/* Arabic verse */}
          <p style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: compact ? 'clamp(20px, 4.5vw, 30px)' : 'clamp(22px, 5vw, 34px)',
            lineHeight: 1.9,
            color: tokens.text,
            textShadow: `0 0 30px ${tokens.gold}10`,
            marginBottom: compact ? 14 : 20,
          }}>
            {verse.arabic}
          </p>

          {/* Translation */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: compact ? 14 : 16,
            lineHeight: 1.75,
            color: tokens.secondary,
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
          }}>
            &ldquo;{verse.translation}&rdquo;
          </p>

          {/* Surah reference */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: tokens.muted,
            letterSpacing: '0.5px',
          }}>
            {verse.surahRef}
          </p>
        </motion.div>

        {/* ── Play + Share buttons ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.5, ease }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: compact ? 0 : 8,
          }}
        >
          {/* Play / Pause button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            aria-label={isPlaying ? 'Pausar recitação' : 'Ouvir recitação'}
            style={{
              position: 'relative',
              width: 52,
              height: 52,
              borderRadius: '50%',
              border: `1.5px solid ${tokens.gold}60`,
              background: `radial-gradient(circle at 40% 40%, ${tokens.gold}18, transparent)`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 24px ${tokens.gold}12, inset 0 0 12px ${tokens.gold}06`,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Breathing glow ring */}
            <motion.div
              animate={{
                boxShadow: isPlaying
                  ? [
                      `0 0 0 0px ${tokens.gold}20`,
                      `0 0 0 8px ${tokens.gold}00`,
                    ]
                  : `0 0 0 0px ${tokens.gold}00`,
              }}
              transition={{
                duration: 2,
                repeat: isPlaying ? Infinity : 0,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                inset: -1,
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            {isLoading ? (
              <Volume2
                size={20}
                color={tokens.gold}
                style={{ animation: 'sanctuary-pulse 1.5s ease-in-out infinite' }}
              />
            ) : isPlaying ? (
              <Pause size={20} fill={tokens.gold} color={tokens.gold} />
            ) : (
              <Play
                size={20}
                fill={tokens.gold}
                color={tokens.gold}
                style={{ marginLeft: 2 }}
              />
            )}
          </motion.button>

          {/* Share button */}
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Compartilhar verso"
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              border: `1px solid ${tokens.border}`,
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.3s ease',
            }}
          >
            {copied ? (
              <Check size={16} color={tokens.gold} />
            ) : (
              <Share2 size={16} color={tokens.muted} />
            )}
          </motion.button>
        </motion.div>

        {/* Reciter label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8, ease }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: tokens.muted,
            opacity: 0.6,
            marginTop: 12,
          }}
        >
          {isPlaying ? 'Mishary Rashid Alafasy' : 'Toque para ouvir a recitação'}
        </motion.p>
      </div>

      {/* ── Sacred divider at bottom ─────────────────────────────────────── */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.0, ease }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '0 24px',
          }}
        >
          <div style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to right, transparent, ${tokens.gold}30)`,
          }} />
          <div style={{
            width: 8,
            height: 8,
            transform: 'rotate(45deg)',
            border: `1px solid ${tokens.gold}40`,
            background: 'transparent',
          }} />
          <div style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to left, transparent, ${tokens.gold}30)`,
          }} />
        </motion.div>
      )}

      {/* ── Keyframes ────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes sanctuary-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </section>
  )
}
