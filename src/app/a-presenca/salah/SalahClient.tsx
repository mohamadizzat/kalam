'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type PrayerInfo = {
  name: string
  arabicName: string
  time: string
  meaning: string
  isPast: boolean
  isNext: boolean
}

type AladhanTimings = {
  Fajr: string
  Sunrise: string
  Dhuhr: string
  Asr: string
  Maghrib: string
  Isha: string
  [key: string]: string
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const PRAYER_NAMES: Record<string, { arabic: string; meaning: string }> = {
  Fajr:    { arabic: '\u0627\u0644\u0641\u062C\u0631', meaning: 'O Despertar' },
  Sunrise: { arabic: '\u0627\u0644\u0634\u0631\u0648\u0642', meaning: 'Nascer do Sol' },
  Dhuhr:   { arabic: '\u0627\u0644\u0638\u0647\u0631', meaning: 'O Meio-Dia' },
  Asr:     { arabic: '\u0627\u0644\u0639\u0635\u0631', meaning: 'A Tarde' },
  Maghrib: { arabic: '\u0627\u0644\u0645\u063A\u0631\u0628', meaning: 'O Por do Sol' },
  Isha:    { arabic: '\u0627\u0644\u0639\u0634\u0627\u0621', meaning: 'A Noite' },
}

const PRAYER_ORDER = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']

const SAO_PAULO_LAT = -23.5505
const SAO_PAULO_LNG = -46.6333

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function calculateQibla(lat: number, lng: number): number {
  const meccaLat = 21.4225 * (Math.PI / 180)
  const meccaLng = 39.8262 * (Math.PI / 180)
  const userLat = lat * (Math.PI / 180)
  const userLng = lng * (Math.PI / 180)
  const dLng = meccaLng - userLng
  const x = Math.sin(dLng)
  const y = Math.cos(userLat) * Math.tan(meccaLat) - Math.sin(userLat) * Math.cos(dLng)
  let qibla = Math.atan2(x, y) * (180 / Math.PI)
  return (qibla + 360) % 360
}

/** Parse "HH:MM" into minutes since midnight */
function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

/** Format a countdown in minutes to a readable string */
function formatCountdown(diffMinutes: number): string {
  if (diffMinutes < 0) diffMinutes += 24 * 60
  const h = Math.floor(diffMinutes / 60)
  const m = diffMinutes % 60
  if (h === 0) return `${m}min`
  return `${h}h ${m}min`
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function SalahClient() {
  const [prayers, setPrayers] = useState<PrayerInfo[]>([])
  const [nextPrayer, setNextPrayer] = useState<PrayerInfo | null>(null)
  const [countdown, setCountdown] = useState('')
  const [qiblaDirection, setQiblaDirection] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null)
  const [compassActive, setCompassActive] = useState(false)

  /* ---------- Fetch prayer times ---------- */

  const fetchPrayerTimes = useCallback(async (lat: number, lng: number) => {
    try {
      setLoading(true)
      setError(null)

      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      const dateStr = `${dd}-${mm}-${yyyy}`

      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=3`
      )

      if (!res.ok) throw new Error('Falha ao buscar horarios')

      const data = await res.json()
      const timings: AladhanTimings = data.data.timings

      const now = new Date()
      const nowMinutes = now.getHours() * 60 + now.getMinutes()

      let foundNext = false
      const mapped: PrayerInfo[] = PRAYER_ORDER.map((key) => {
        const raw = timings[key]
        const time = raw ? raw.split(' ')[0] : '00:00' // strip "(EET)" etc.
        const prayerMinutes = timeToMinutes(time)
        const isPast = prayerMinutes <= nowMinutes
        const isNext = !foundNext && !isPast
        if (isNext) foundNext = true

        return {
          name: key,
          arabicName: PRAYER_NAMES[key].arabic,
          time,
          meaning: PRAYER_NAMES[key].meaning,
          isPast: isPast && !isNext,
          isNext,
        }
      })

      // If all prayers are past (late night), next prayer is Fajr tomorrow
      if (!foundNext && mapped.length > 0) {
        mapped[0].isNext = true
        mapped[0].isPast = false
      }

      const next = mapped.find((p) => p.isNext) ?? mapped[0]

      setPrayers(mapped)
      setNextPrayer(next)
      setQiblaDirection(Math.round(calculateQibla(lat, lng)))
      setLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
      setLoading(false)
    }
  }, [])

  /* ---------- Geolocation + initial fetch ---------- */

  useEffect(() => {
    if (!navigator.geolocation) {
      setCoords({ lat: SAO_PAULO_LAT, lng: SAO_PAULO_LNG })
      fetchPrayerTimes(SAO_PAULO_LAT, SAO_PAULO_LNG)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setCoords({ lat: latitude, lng: longitude })
        fetchPrayerTimes(latitude, longitude)
      },
      () => {
        // Permission denied or error — fallback to Sao Paulo
        setCoords({ lat: SAO_PAULO_LAT, lng: SAO_PAULO_LNG })
        fetchPrayerTimes(SAO_PAULO_LAT, SAO_PAULO_LNG)
      },
      { timeout: 8000 }
    )
  }, [fetchPrayerTimes])

  /* ---------- Countdown timer ---------- */

  useEffect(() => {
    if (!nextPrayer) return

    function tick() {
      const now = new Date()
      const nowMinutes = now.getHours() * 60 + now.getMinutes()
      const targetMinutes = timeToMinutes(nextPrayer!.time)
      let diff = targetMinutes - nowMinutes
      if (diff < 0) diff += 24 * 60 // wraps to next day (e.g. Fajr)
      setCountdown(formatCountdown(diff))
    }

    tick()
    const id = setInterval(tick, 30_000) // update every 30s is sufficient
    return () => clearInterval(id)
  }, [nextPrayer])

  /* ---------- Retry ---------- */

  const handleRetry = () => {
    if (coords) {
      fetchPrayerTimes(coords.lat, coords.lng)
    } else {
      fetchPrayerTimes(SAO_PAULO_LAT, SAO_PAULO_LNG)
    }
  }

  /* ---------- Activate real compass ---------- */

  const activateCompass = useCallback(async () => {
    // iOS requires explicit permission
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission()
        if (permission === 'granted') {
          setCompassActive(true)
        }
      } catch {
        // Permission denied — stay in static mode
      }
    } else {
      // Android and desktop — just activate
      setCompassActive(true)
    }
  }, [])

  /* ---------- Device orientation listener ---------- */

  useEffect(() => {
    if (!compassActive) return

    const handleOrientation = (e: DeviceOrientationEvent) => {
      // iOS provides webkitCompassHeading (degrees from North)
      let heading = (e as any).webkitCompassHeading as number | undefined
      if (heading === undefined && e.alpha !== null) {
        // Android: alpha is the rotation around z-axis
        // When absolute is true, alpha = degrees from North
        heading = e.absolute ? (360 - (e.alpha ?? 0)) % 360 : undefined
      }
      if (heading !== undefined && !isNaN(heading)) {
        setDeviceHeading(heading)
      }
    }

    window.addEventListener('deviceorientation', handleOrientation, true)
    return () => window.removeEventListener('deviceorientation', handleOrientation, true)
  }, [compassActive])

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  /* --- Loading --- */
  if (loading) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>
          <Link
            href="/a-presenca"
            style={{ color: '#7A7870', fontSize: '14px', textDecoration: 'none' }}
          >
            &larr; A Presenca
          </Link>
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <p style={{ color: '#7A7870', fontSize: '14px' }}>Buscando horarios...</p>
          </div>
        </div>
      </main>
    )
  }

  /* --- Error --- */
  if (error) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>
          <Link
            href="/a-presenca"
            style={{ color: '#7A7870', fontSize: '14px', textDecoration: 'none' }}
          >
            &larr; A Presenca
          </Link>
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <p style={{ color: '#C9A84C', fontSize: '14px', marginBottom: '16px' }}>
              {error}
            </p>
            <button
              onClick={handleRetry}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </main>
    )
  }

  /* --- Success --- */
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back link */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <Link
            href="/a-presenca"
            style={{ color: '#7A7870', fontSize: '14px', textDecoration: 'none' }}
          >
            &larr; A Presenca
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: '#F0EBE2',
            marginTop: '16px',
          }}
        >
          Horarios de Oracao
        </motion.h1>

        {/* ---- Next prayer card ---- */}
        {nextPrayer && (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              marginTop: '24px',
              padding: '32px',
              borderRadius: '16px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              textAlign: 'center',
            }}
          >
            <p
              className="uppercase"
              style={{
                fontSize: '12px',
                color: '#7A7870',
                letterSpacing: '0.15em',
              }}
            >
              Proxima oracao
            </p>
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '36px',
                color: '#C9A84C',
                margin: '8px 0',
                direction: 'rtl',
              }}
            >
              {nextPrayer.arabicName}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                color: '#F0EBE2',
              }}
            >
              {nextPrayer.name} &mdash; {nextPrayer.meaning}
            </p>
            <p
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#C9A84C',
                marginTop: '8px',
                fontFamily: 'var(--font-serif)',
              }}
            >
              {countdown}
            </p>
            <p style={{ fontSize: '14px', color: '#7A7870' }}>
              as {nextPrayer.time}
            </p>
          </motion.div>
        )}

        {/* ---- All prayers list ---- */}
        <div className="mt-8 grid gap-2">
          {prayers.map((prayer, i) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                borderRadius: '12px',
                background: prayer.isNext
                  ? 'rgba(201,168,76,0.06)'
                  : '#161220',
                border: `1px solid ${
                  prayer.isNext ? 'rgba(201,168,76,0.2)' : '#272230'
                }`,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '16px',
                    color: prayer.isPast ? '#7A7870' : '#F0EBE2',
                    fontWeight: 500,
                  }}
                >
                  {prayer.name}
                </p>
                <p style={{ fontSize: '12px', color: '#7A7870' }}>
                  {prayer.meaning}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '16px',
                    color: prayer.isPast ? '#7A7870' : '#C9A84C',
                    direction: 'rtl',
                  }}
                >
                  {prayer.arabicName}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: prayer.isPast ? '#7A7870' : '#F0EBE2',
                  }}
                >
                  {prayer.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---- Qibla section ---- */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              color: '#F0EBE2',
              marginBottom: '8px',
            }}
          >
            Direcao da Qibla
          </p>

          {deviceHeading !== null && (
            <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '16px' }}>
              Bussola ativa — gire o celular ate a seta apontar pra cima
            </p>
          )}

          {/* Activate compass button (shown when compass is not active) */}
          {!compassActive && (
            <button
              onClick={activateCompass}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C',
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              Ativar Bussola
            </button>
          )}

          {/* SVG Compass */}
          <div
            style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              margin: '0 auto',
            }}
          >
            <svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              fill="none"
            >
              {/* Rotating compass dial */}
              <g
                style={{
                  transform: `rotate(${deviceHeading !== null ? -deviceHeading : 0}deg)`,
                  transformOrigin: '120px 120px',
                  transition: deviceHeading !== null ? 'transform 0.3s ease-out' : 'none',
                }}
              >
                {/* Outer circle */}
                <circle
                  cx="120"
                  cy="120"
                  r="115"
                  stroke="#272230"
                  strokeWidth="1"
                />
                {/* Inner circle */}
                <circle
                  cx="120"
                  cy="120"
                  r="105"
                  stroke="#272230"
                  strokeWidth="0.5"
                />
                {/* Tick marks */}
                {Array.from({ length: 72 }).map((_, i) => {
                  const angle = i * 5
                  const rad = (angle * Math.PI) / 180
                  const isMajor = i % 18 === 0
                  const isMedium = i % 6 === 0
                  const r1 = isMajor ? 96 : isMedium ? 99 : 101
                  const r2 = 107
                  return (
                    <line
                      key={i}
                      x1={120 + r1 * Math.sin(rad)}
                      y1={120 - r1 * Math.cos(rad)}
                      x2={120 + r2 * Math.sin(rad)}
                      y2={120 - r2 * Math.cos(rad)}
                      stroke={isMajor ? '#7A7870' : isMedium ? '#4a4555' : '#3a3545'}
                      strokeWidth={isMajor ? 2 : isMedium ? 1 : 0.5}
                    />
                  )
                })}
                {/* Cardinal labels */}
                <text x="120" y="26" textAnchor="middle" fill="#C9A84C" fontSize="14" fontWeight="700">N</text>
                <text x="120" y="226" textAnchor="middle" fill="#7A7870" fontSize="12">S</text>
                <text x="224" y="125" textAnchor="middle" fill="#7A7870" fontSize="12">E</text>
                <text x="16" y="125" textAnchor="middle" fill="#7A7870" fontSize="12">O</text>

                {/* Qibla arrow — rotates with compass dial so it always points to Qibla */}
                <g transform={`rotate(${qiblaDirection} 120 120)`}>
                  {/* Arrow shaft */}
                  <line
                    x1="120"
                    y1="120"
                    x2="120"
                    y2="32"
                    stroke="#C9A84C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="120,22 114,36 126,36"
                    fill="#C9A84C"
                  />
                  {/* Kaaba icon circle at tip */}
                  <circle cx="120" cy="22" r="8" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1" />
                  <text x="120" y="26" textAnchor="middle" fill="#C9A84C" fontSize="8" fontFamily="var(--font-arabic)" direction="rtl">
                    {'\u0643\u0639\u0628\u0629'}
                  </text>
                </g>
              </g>

              {/* Center point (doesn't rotate) */}
              <circle cx="120" cy="120" r="5" fill="#C9A84C" />
              <circle cx="120" cy="120" r="2" fill="#0D0B12" />

              {/* Phone direction indicator (top, doesn't rotate) */}
              <polygon
                points="120,6 116,14 124,14"
                fill={deviceHeading !== null ? '#F0EBE2' : '#3a3545'}
              />
            </svg>

            {/* "Facing Qibla" indicator */}
            {deviceHeading !== null && (() => {
              const diff = Math.abs(((qiblaDirection - deviceHeading) % 360 + 360) % 360)
              const isFacing = diff < 10 || diff > 350
              return isFacing ? (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.4)',
                  }}
                >
                  <p style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Voce esta voltado para a Qibla
                  </p>
                </div>
              ) : null
            })()}
          </div>

          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: deviceHeading !== null ? '48px' : '16px' }}>
            {qiblaDirection}&deg; do Norte
          </p>

          {compassActive && deviceHeading === null && (
            <p style={{ fontSize: '12px', color: '#7A7870', marginTop: '8px', fontStyle: 'italic' }}>
              Mova o celular para calibrar a bussola
            </p>
          )}
        </motion.div>

      </div>
    </main>
  )
}
