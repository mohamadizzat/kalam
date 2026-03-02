'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Moon, Sun, Clock, Flame, Star } from 'lucide-react'
import { useLocation } from '@/lib/hooks/useLocation'
import { ramadanDays } from '@/lib/data/ramadan'

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── Ramadan 1447 AH: starts 28 Feb 2026 ──────────────────────────────────────
const RAMADAN_START = new Date(2026, 1, 28) // month is 0-indexed

function getRamadanDay(): number {
  const now = new Date()
  const diffMs = now.getTime() - RAMADAN_START.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  return Math.min(Math.max(diffDays + 1, 1), 30)
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function formatCountdown(totalSeconds: number): { h: string; m: string; s: string } {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return {
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  }
}

type PrayerTimings = {
  Fajr: string
  Maghrib: string
  Isha: string
}

type FastingState = 'suhoor-window' | 'fasting' | 'iftar-window' | 'night'

function getFastingState(nowMin: number, fajrMin: number, maghribMin: number, ishaMin: number): FastingState {
  if (nowMin >= ishaMin || nowMin < fajrMin - 30) return 'night'
  if (nowMin >= fajrMin - 30 && nowMin < fajrMin) return 'suhoor-window'
  if (nowMin >= fajrMin && nowMin < maghribMin) return 'fasting'
  return 'iftar-window'
}

// ── Animated countdown digit ──────────────────────────────────────────────────
function Digit({ value }: { value: string }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(40px, 8vw, 72px)',
        fontWeight: 700,
        color: T.gold,
        lineHeight: 1,
        width: '1.2ch',
        textAlign: 'center',
      }}
    >
      {value}
    </motion.span>
  )
}

// ── Stars background ──────────────────────────────────────────────────────────
function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 3,
    }))
  )
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{ opacity: [star.opacity, star.opacity * 2, star.opacity] }}
          transition={{ duration: 3, delay: star.delay, repeat: Infinity }}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: T.gold,
          }}
        />
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function JejumClient() {
  const { lat, lng, city, loading: locationLoading } = useLocation()
  const [timings, setTimings] = useState<PrayerTimings | null>(null)
  const [prayerLoading, setPrayerLoading] = useState(true)
  const [countdown, setCountdown] = useState({ h: '00', m: '00', s: '00' })
  const [fastingState, setFastingState] = useState<FastingState>('fasting')
  const [niyyahDone, setNiyyahDone] = useState(false)

  const ramadanDay = getRamadanDay()
  const todayData = ramadanDays[ramadanDay - 1]

  const fetchPrayers = useCallback(async (lat: number, lng: number) => {
    try {
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=3`
      )
      if (!res.ok) return
      const data = await res.json()
      const t = data.data.timings
      setTimings({
        Fajr: t.Fajr?.split(' ')[0] ?? '05:00',
        Maghrib: t.Maghrib?.split(' ')[0] ?? '18:00',
        Isha: t.Isha?.split(' ')[0] ?? '19:30',
      })
    } finally {
      setPrayerLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!locationLoading) fetchPrayers(lat, lng)
  }, [lat, lng, locationLoading, fetchPrayers])

  // Load niyyah state
  useEffect(() => {
    const stored = localStorage.getItem(`kalam-niyyah-${new Date().toDateString()}`)
    if (stored === 'done') setNiyyahDone(true)
  }, [])

  // Live countdown
  useEffect(() => {
    if (!timings) return

    function tick() {
      const now = new Date()
      const nowMin = now.getHours() * 60 + now.getMinutes()
      const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()

      const fajrMin = timeToMinutes(timings!.Fajr)
      const maghribMin = timeToMinutes(timings!.Maghrib)
      const ishaMin = timeToMinutes(timings!.Isha)

      const state = getFastingState(nowMin, fajrMin, maghribMin, ishaMin)
      setFastingState(state)

      let targetSec: number
      if (state === 'fasting') {
        targetSec = maghribMin * 60
      } else if (state === 'suhoor-window') {
        targetSec = fajrMin * 60
      } else if (state === 'iftar-window') {
        // Countdown to next fajr (next day)
        targetSec = (fajrMin + 24 * 60) * 60
      } else {
        targetSec = (fajrMin - 30 + 24 * 60) * 60
      }

      let diffSec = targetSec - nowSec
      if (diffSec < 0) diffSec += 24 * 3600
      setCountdown(formatCountdown(diffSec))
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [timings])

  const handleNiyyah = () => {
    localStorage.setItem(`kalam-niyyah-${new Date().toDateString()}`, 'done')
    setNiyyahDone(true)
  }

  const isLoading = locationLoading || prayerLoading

  const stateConfig = {
    fasting: {
      label: 'Em jejum',
      sublabel: 'Iftar em',
      icon: Moon,
      color: '#C9A84C',
      bg: 'rgba(201,168,76,0.06)',
    },
    'suhoor-window': {
      label: 'Janela do Suhoor',
      sublabel: 'Fajr (início do jejum) em',
      icon: Star,
      color: '#4A90D9',
      bg: 'rgba(74,144,217,0.06)',
    },
    'iftar-window': {
      label: 'Iftar — Bom apetite! 🌙',
      sublabel: 'Próximo Fajr em',
      icon: Flame,
      color: '#D4A44C',
      bg: 'rgba(212,164,76,0.06)',
    },
    night: {
      label: 'Período noturno',
      sublabel: 'Janela do Suhoor em',
      icon: Star,
      color: '#7A7870',
      bg: 'rgba(122,120,112,0.06)',
    },
  }
  const cfg = stateConfig[fastingState]
  const StateIcon = cfg.icon

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 48px',
          textAlign: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(13,11,18,1) 0%, rgba(22,18,32,0.8) 100%)',
        }}
      >
        <Stars />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              href="/a-jornada/ramadan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: T.muted,
                textDecoration: 'none',
                fontSize: 13,
                marginBottom: 32,
              }}
            >
              <ArrowLeft size={14} />
              Ramadan
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 20,
                border: `1px solid rgba(201,168,76,0.25)`,
                background: 'rgba(201,168,76,0.06)',
                marginBottom: 20,
              }}
            >
              <Moon size={14} style={{ color: T.gold }} />
              <span style={{ fontSize: 13, color: T.gold, fontWeight: 600 }}>
                Ramadan — Dia {ramadanDay}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 5vw, 38px)',
                fontWeight: 700,
                color: T.text,
                marginBottom: 8,
              }}
            >
              {todayData?.theme}
            </h1>
            <p style={{ fontSize: 14, color: T.muted, marginBottom: 8 }}>
              {isLoading ? 'Detectando localização...' : (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={12} /> {city}
                </span>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Countdown Card ────────────────────────────────── */}
      <section style={{ maxWidth: 500, margin: '0 auto', padding: '0 24px 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            borderRadius: 20,
            border: `1px solid ${cfg.color}30`,
            background: cfg.bg,
            padding: '36px 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 20,
              border: `1px solid ${cfg.color}40`,
              background: `${cfg.color}15`,
              marginBottom: 20,
            }}
          >
            <StateIcon size={14} style={{ color: cfg.color }} />
            <span style={{ fontSize: 13, color: cfg.color, fontWeight: 600 }}>{cfg.label}</span>
          </div>

          <p style={{ fontSize: 13, color: T.muted, marginBottom: 12 }}>{cfg.sublabel}</p>

          {isLoading ? (
            <p style={{ fontSize: 32, color: T.muted }}>--:--:--</p>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <Digit value={countdown.h} />
              <span style={{ fontSize: 'clamp(32px, 6vw, 56px)', color: T.gold, fontWeight: 300, marginTop: -8 }}>:</span>
              <Digit value={countdown.m} />
              <span style={{ fontSize: 'clamp(32px, 6vw, 56px)', color: T.gold, fontWeight: 300, marginTop: -8 }}>:</span>
              <Digit value={countdown.s} />
            </div>
          )}

          {/* Suhoor / Iftar times */}
          {timings && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 32,
                marginTop: 24,
                paddingTop: 20,
                borderTop: `1px solid ${T.border}`,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <Star size={12} style={{ color: T.muted }} />
                  <span style={{ fontSize: 12, color: T.muted }}>Suhoor encerra</span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: T.text, margin: 0 }}>
                  {timings.Fajr}
                </p>
              </div>
              <div style={{ width: 1, background: T.border }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <Moon size={12} style={{ color: T.gold }} />
                  <span style={{ fontSize: 12, color: T.muted }}>Iftar</span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: T.gold, margin: 0 }}>
                  {timings.Maghrib}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Niyyah ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            marginTop: 16,
            borderRadius: 16,
            border: `1px solid ${T.border}`,
            background: T.surface,
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 13, color: T.muted, marginBottom: 12 }}>Intenção de hoje</p>
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 22,
              color: T.gold,
              direction: 'rtl',
              marginBottom: 8,
              lineHeight: 1.8,
            }}
          >
            نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ
          </p>
          <p style={{ fontSize: 13, color: T.secondary, marginBottom: 20, fontStyle: 'italic' }}>
            &ldquo;Fiz intenção de jejuar amanhã cumprindo a obrigação do mês de Ramadan.&rdquo;
          </p>
          {niyyahDone ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 12,
                border: '1px solid rgba(201,168,76,0.3)',
                background: 'rgba(201,168,76,0.08)',
                color: T.gold,
                fontSize: 14,
              }}
            >
              <Sun size={14} />
              Niyyah feita hoje
            </div>
          ) : (
            <button
              onClick={handleNiyyah}
              style={{
                padding: '12px 28px',
                borderRadius: 12,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.1)',
                color: T.gold,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Confirmar Niyyah
            </button>
          )}
        </motion.div>

        {/* ── Today's Dua ───────────────────────────────── */}
        {todayData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              marginTop: 16,
              borderRadius: 16,
              border: `1px solid ${T.border}`,
              background: T.surface,
              padding: '24px',
            }}
          >
            <p style={{ fontSize: 12, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Dua do Dia {ramadanDay}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 20,
                color: T.gold,
                direction: 'rtl',
                lineHeight: 1.9,
                marginBottom: 12,
                textAlign: 'right',
              }}
            >
              {todayData.dua.arabic}
            </p>
            <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.6, fontStyle: 'italic' }}>
              &ldquo;{todayData.dua.translation}&rdquo;
            </p>
          </motion.div>
        )}

        {/* ── Today's deed ─────────────────────────────── */}
        {todayData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{
              marginTop: 16,
              borderRadius: 16,
              border: `1px solid ${T.border}`,
              background: T.surface,
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Flame size={14} style={{ color: T.gold }} />
              <p style={{ fontSize: 12, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                Ação do dia
              </p>
            </div>
            <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.6 }}>
              {todayData.deed}
            </p>
          </motion.div>
        )}

        {/* ── Back to Ramadan ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 32 }}
        >
          <Link
            href="/a-jornada/ramadan"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: T.muted,
              textDecoration: 'none',
              fontSize: 13,
            }}
          >
            <Clock size={13} />
            Ver plano completo do Ramadan
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
