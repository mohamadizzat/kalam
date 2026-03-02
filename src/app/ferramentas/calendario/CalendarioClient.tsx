'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CalendarDays, ArrowLeftRight } from 'lucide-react'

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

// ── Hijri conversion ──────────────────────────────────────────────────────────
const HIJRI_MONTHS = [
  'Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Thani",
  'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', "Sha'ban",
  'Ramadan', 'Shawwal', "Dhul Qa'dah", 'Dhul Hijjah',
]

const HIJRI_MONTHS_AR = [
  'مُحَرَّم', 'صَفَر', 'رَبِيع الأَوَّل', 'رَبِيع الثَّانِي',
  'جُمَادَى الأُولَى', 'جُمَادَى الثَّانِيَة', 'رَجَب', 'شَعْبَان',
  'رَمَضَان', 'شَوَّال', 'ذُو القَعْدَة', 'ذُو الحِجَّة',
]

const GREG_MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

interface HijriDate { day: number; month: number; year: number }
interface GregDate { day: number; month: number; year: number }

// Julian Day Number from Gregorian
function gregToJD(day: number, month: number, year: number): number {
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045
}

// Gregorian from Julian Day
function jdToGreg(jd: number): GregDate {
  const a = jd + 32044
  const b = Math.floor((4 * a + 3) / 146097)
  const c = a - Math.floor((146097 * b) / 4)
  const d = Math.floor((4 * c + 3) / 1461)
  const e = c - Math.floor((1461 * d) / 4)
  const m = Math.floor((5 * e + 2) / 153)
  return {
    day: e - Math.floor((153 * m + 2) / 5) + 1,
    month: m + 3 - 12 * Math.floor(m / 10),
    year: 100 * b + d - 4800 + Math.floor(m / 10),
  }
}

// Hijri from Julian Day (Tabular Islamic Calendar)
function jdToHijri(jd: number): HijriDate {
  const l = jd - 1948440 + 10632
  const n = Math.floor((l - 1) / 10631)
  const l2 = l - 10631 * n + 354
  const j = (Math.floor((10985 - l2) / 5316)) * (Math.floor((50 * l2) / 17719)) +
            (Math.floor(l2 / 5670)) * (Math.floor((43 * l2) / 15238))
  const l3 = l2 - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) -
             (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29
  const month = Math.floor((24 * l3) / 709)
  const day = l3 - Math.floor((709 * month) / 24)
  const year = 30 * n + j - 30
  return { day, month, year }
}

// Hijri to Julian Day
function hijriToJD(day: number, month: number, year: number): number {
  return Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month -
         Math.floor((month - 1) / 2) + day + 1948440 - 385
}

function gregToHijri(date: Date): HijriDate {
  const jd = gregToJD(date.getDate(), date.getMonth() + 1, date.getFullYear())
  return jdToHijri(jd)
}

function hijriToGreg(day: number, month: number, year: number): GregDate {
  const jd = hijriToJD(day, month, year)
  return jdToGreg(jd)
}

// ── Important Islamic dates ───────────────────────────────────────────────────
const IMPORTANT_DATES = [
  { label: 'Início do Ramadan 1447', hijri: { day: 1, month: 9, year: 1447 } },
  { label: 'Laylat al-Qadr (aprox.)', hijri: { day: 27, month: 9, year: 1447 } },
  { label: 'Eid al-Fitr 1447', hijri: { day: 1, month: 10, year: 1447 } },
  { label: 'Eid al-Adha 1447', hijri: { day: 10, month: 12, year: 1447 } },
  { label: '1º Muharram 1448 (Ano Novo)', hijri: { day: 1, month: 1, year: 1448 } },
]

// ── Input style helper ────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#1C1828',
  border: `1px solid ${T.border}`,
  borderRadius: 10,
  padding: '10px 14px',
  color: T.text,
  fontSize: 15,
  outline: 'none',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
}

// ── Main component ────────────────────────────────────────────────────────────
export default function CalendarioClient() {
  const today = new Date()
  const todayHijri = gregToHijri(today)

  // Gregorian → Hijri
  const [gregInput, setGregInput] = useState(today.toISOString().split('T')[0])
  const [gregResult, setGregResult] = useState<HijriDate | null>(todayHijri)

  // Hijri → Gregorian
  const [hijriDay, setHijriDay] = useState(String(todayHijri.day))
  const [hijriMonth, setHijriMonth] = useState(String(todayHijri.month))
  const [hijriYear, setHijriYear] = useState(String(todayHijri.year))
  const [hijriResult, setHijriResult] = useState<GregDate | null>(
    hijriToGreg(todayHijri.day, todayHijri.month, todayHijri.year)
  )

  const handleGregConvert = () => {
    const [y, m, d] = gregInput.split('-').map(Number)
    if (!y || !m || !d) return
    setGregResult(gregToHijri(new Date(y, m - 1, d)))
  }

  const handleHijriConvert = () => {
    const d = parseInt(hijriDay)
    const m = parseInt(hijriMonth)
    const y = parseInt(hijriYear)
    if (!d || !m || !y) return
    setHijriResult(hijriToGreg(d, m, y))
  }

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 24px 48px', textAlign: 'center', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 13, marginBottom: 32 }}>
              <ArrowLeft size={14} />
              Ferramentas
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CalendarDays size={24} style={{ color: T.gold }} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 700, color: T.text, marginBottom: 8 }}>
              Conversor de Calendário
            </h1>
            <p style={{ fontSize: 14, color: T.secondary }}>
              Gregoriano ↔ Hijri (Islâmico)
            </p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px 80px' }}>
        {/* ── Today's date ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            borderRadius: 16,
            border: '1px solid rgba(201,168,76,0.2)',
            background: 'rgba(201,168,76,0.04)',
            padding: '24px',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 12, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Hoje</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: T.text, marginBottom: 6 }}>
            {today.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 18, color: T.gold, direction: 'rtl' }}>
              {HIJRI_MONTHS_AR[todayHijri.month - 1]}
            </span>
            <span style={{ fontSize: 16, color: T.gold, fontFamily: 'var(--font-serif)' }}>
              {todayHijri.day} {HIJRI_MONTHS[todayHijri.month - 1]} {todayHijri.year} H
            </span>
          </div>
        </motion.div>

        {/* ── Gregorian → Hijri ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ borderRadius: 16, border: `1px solid ${T.border}`, background: T.surface, padding: '24px', marginBottom: 16 }}
        >
          <p style={{ fontSize: 13, color: T.secondary, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <ArrowLeftRight size={14} style={{ color: T.gold }} />
            Gregoriano → Hijri
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <label style={{ display: 'block', fontSize: 12, color: T.muted, marginBottom: 6 }}>Data (dd/mm/aaaa)</label>
              <input
                type="date"
                value={gregInput}
                onChange={e => { setGregInput(e.target.value); setGregResult(null) }}
                style={inputStyle}
              />
            </div>
            <button
              onClick={handleGregConvert}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.1)',
                color: T.gold,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Converter
            </button>
          </div>
          {gregResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: 16,
                padding: '16px',
                borderRadius: 10,
                background: T.elevated,
                border: `1px solid ${T.border}`,
              }}
            >
              <p style={{ fontSize: 13, color: T.muted, marginBottom: 6 }}>Equivalente Hijri:</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: T.gold, marginBottom: 4 }}>
                {gregResult.day} {HIJRI_MONTHS[gregResult.month - 1]} {gregResult.year} H
              </p>
              <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 18, color: T.secondary, direction: 'rtl', textAlign: 'right' }}>
                {gregResult.day} {HIJRI_MONTHS_AR[gregResult.month - 1]} {gregResult.year}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* ── Hijri → Gregorian ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ borderRadius: 16, border: `1px solid ${T.border}`, background: T.surface, padding: '24px', marginBottom: 24 }}
        >
          <p style={{ fontSize: 13, color: T.secondary, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <ArrowLeftRight size={14} style={{ color: T.gold }} />
            Hijri → Gregoriano
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 80px' }}>
              <label style={{ display: 'block', fontSize: 12, color: T.muted, marginBottom: 6 }}>Dia</label>
              <input type="number" min="1" max="30" value={hijriDay} onChange={e => { setHijriDay(e.target.value); setHijriResult(null) }} style={inputStyle} />
            </div>
            <div style={{ flex: '1 1 140px' }}>
              <label style={{ display: 'block', fontSize: 12, color: T.muted, marginBottom: 6 }}>Mês</label>
              <select
                value={hijriMonth}
                onChange={e => { setHijriMonth(e.target.value); setHijriResult(null) }}
                style={{ ...inputStyle, appearance: 'none' }}
              >
                {HIJRI_MONTHS.map((m, i) => (
                  <option key={m} value={i + 1}>{i + 1}. {m}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: '0 0 100px' }}>
              <label style={{ display: 'block', fontSize: 12, color: T.muted, marginBottom: 6 }}>Ano H</label>
              <input type="number" min="1" max="9999" value={hijriYear} onChange={e => { setHijriYear(e.target.value); setHijriResult(null) }} style={inputStyle} />
            </div>
          </div>
          <button
            onClick={handleHijriConvert}
            style={{
              marginTop: 12,
              padding: '10px 20px',
              borderRadius: 10,
              border: '1px solid rgba(201,168,76,0.4)',
              background: 'rgba(201,168,76,0.1)',
              color: T.gold,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Converter
          </button>
          {hijriResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: 16, padding: '16px', borderRadius: 10, background: T.elevated, border: `1px solid ${T.border}` }}
            >
              <p style={{ fontSize: 13, color: T.muted, marginBottom: 6 }}>Equivalente Gregoriano:</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: T.gold }}>
                {hijriResult.day} de {GREG_MONTHS[hijriResult.month - 1]} de {hijriResult.year}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* ── Important Dates ───────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <p style={{ fontSize: 12, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            Datas Islâmicas 1447–1448
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {IMPORTANT_DATES.map(({ label, hijri }) => {
              const greg = hijriToGreg(hijri.day, hijri.month, hijri.year)
              return (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 10,
                    border: `1px solid ${T.border}`,
                    background: T.surface,
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <p style={{ fontSize: 14, color: T.text, margin: 0, fontWeight: 500 }}>{label}</p>
                    <p style={{ fontSize: 12, color: T.muted, margin: 0 }}>
                      {hijri.day} {HIJRI_MONTHS[hijri.month - 1]} {hijri.year} H
                    </p>
                  </div>
                  <p style={{ fontSize: 14, color: T.gold, margin: 0, fontFamily: 'var(--font-serif)', textAlign: 'right' }}>
                    {greg.day}/{greg.month}/{greg.year}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
