'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, BookOpen, Sun, Compass, Heart } from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SANCTUARY_VERSES = [
  { arabic: '\u0642\u064F\u0644\u0652 \u0647\u064F\u0648\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0623\u064E\u062D\u064E\u062F\u064C', portuguese: 'Diz: Ele é Allah, o Único.', ref: 'Al-Ikhlas 112:1' },
  { arabic: '\u0648\u064E\u0625\u0650\u0630\u064E\u0627 \u0633\u064E\u0623\u064E\u0644\u064E\u0643\u064E \u0639\u0650\u0628\u064E\u0627\u062F\u0650\u064A \u0639\u064E\u0646\u0651\u0650\u064A \u0641\u064E\u0625\u0650\u0646\u0651\u0650\u064A \u0642\u064E\u0631\u0650\u064A\u0628\u064C', portuguese: 'E quando Meus servos te perguntarem sobre Mim — Eu estou próximo.', ref: 'Al-Baqarah 2:186' },
  { arabic: '\u0625\u0650\u0646\u0651\u064E \u0645\u064E\u0639\u064E \u0627\u0644\u0652\u0639\u064F\u0633\u0652\u0631\u0650 \u064A\u064F\u0633\u0652\u0631\u064B\u0627', portuguese: 'Certamente, com a dificuldade vem a facilidade.', ref: 'Al-Inshirah 94:6' },
  { arabic: '\u0641\u064E\u0627\u0630\u0652\u0643\u064F\u0631\u064F\u0648\u0646\u0650\u064A \u0623\u064E\u0630\u0652\u0643\u064F\u0631\u0652\u0643\u064F\u0645\u0652', portuguese: 'Lembrai-vos de Mim, e Eu Me lembrarei de vós.', ref: 'Al-Baqarah 2:152' },
  { arabic: '\u0648\u064E\u0647\u064F\u0648\u064E \u0645\u064E\u0639\u064E\u0643\u064F\u0645\u0652 \u0623\u064E\u064A\u0652\u0646\u064E \u0645\u064E\u0627 \u0643\u064F\u0646\u062A\u064F\u0645\u0652', portuguese: 'E Ele está convosco onde quer que estejais.', ref: 'Al-Hadid 57:10' },
  { arabic: '\u0648\u064E\u0644\u064E\u0627 \u062A\u064E\u0642\u0652\u0646\u064E\u0637\u064F\u0648\u0627 \u0645\u0650\u0646 \u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0629\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650', portuguese: 'E não desespereis da misericórdia de Allah.', ref: 'Az-Zumar 39:53' },
  { arabic: '\u0625\u0650\u0646\u0651\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u0644\u064E\u0627 \u064A\u064F\u0636\u064E\u064A\u0651\u0650\u0639\u064F \u0623\u064E\u062C\u0652\u0631\u064E \u0627\u0644\u0652\u0645\u064F\u062D\u0652\u0633\u0650\u0646\u0650\u064A\u0646\u064E', portuguese: 'Allah não desperdiça a recompensa dos que fazem o bem.', ref: 'At-Tawbah 9:120' },
]

const NAMES_PREVIEW = [
  { arabic: '\u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0646\u064F', transliteration: 'Ar-Rahman', meaning: 'O Infinitamente Misericordioso' },
  { arabic: '\u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u064F', transliteration: 'Ar-Rahim', meaning: 'O Constantemente Misericordioso' },
  { arabic: '\u0627\u0644\u0652\u0645\u064E\u0644\u0650\u0643\u064F', transliteration: 'Al-Malik', meaning: 'O Soberano' },
  { arabic: '\u0627\u0644\u0652\u0642\u064F\u062F\u0651\u064F\u0648\u0633\u064F', transliteration: 'Al-Quddus', meaning: 'O Sagrado' },
  { arabic: '\u0627\u0644\u0633\u0651\u064E\u0644\u064E\u0627\u0645\u064F', transliteration: 'As-Salam', meaning: 'A Paz' },
  { arabic: '\u0627\u0644\u0652\u0645\u064F\u0624\u0652\u0645\u0650\u0646\u064F', transliteration: 'Al-Mu\'min', meaning: 'O Guardião da Fé' },
  { arabic: '\u0627\u0644\u0652\u0645\u064F\u0647\u064E\u064A\u0652\u0645\u0650\u0646\u064F', transliteration: 'Al-Muhaymin', meaning: 'O Vigilante' },
  { arabic: '\u0627\u0644\u0652\u0639\u064E\u0632\u0650\u064A\u0632\u064F', transliteration: 'Al-Aziz', meaning: 'O Todo-Poderoso' },
  { arabic: '\u0627\u0644\u0652\u062C\u064E\u0628\u0651\u064E\u0627\u0631\u064F', transliteration: 'Al-Jabbar', meaning: 'O Irresistível' },
  { arabic: '\u0627\u0644\u0652\u0645\u064F\u062A\u064E\u0643\u064E\u0628\u0651\u0650\u0631\u064F', transliteration: 'Al-Mutakabbir', meaning: 'O Supremo' },
]

const portals = [
  { icon: BookOpen, label: 'A Palavra', sublabel: 'Leia o Alcorão', href: '/a-palavra' },
  { icon: Sun, label: 'A Presença', sublabel: 'Contemplação', href: '/a-presenca' },
  { icon: Compass, label: 'A Jornada', sublabel: 'Trilhas de estudo', href: '/a-jornada' },
  { icon: Heart, label: 'A Alma', sublabel: 'Seu espaço íntimo', href: '/a-alma' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

type LastRead = {
  surah: number
  verse: number
  name: string
}

export default function SanctuaryPage() {
  const [dateLabel, setDateLabel] = useState('')
  const [verseIndex, setVerseIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lastRead, setLastRead] = useState<LastRead | null>(null)

  useEffect(() => {
    const now = new Date()
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    setDateLabel(`${days[now.getDay()]} \u00B7 ${now.getDate()} de ${months[now.getMonth()]}`)
    setVerseIndex(now.getDate() % SANCTUARY_VERSES.length)
  }, [])

  // Streak logic
  useEffect(() => {
    const lastVisit = localStorage.getItem('kalam-last-visit')
    const currentStreak = parseInt(localStorage.getItem('kalam-streak') || '0')
    const today = new Date().toISOString().split('T')[0]

    if (lastVisit !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      const newStreak = lastVisit === yesterday ? currentStreak + 1 : 1
      localStorage.setItem('kalam-streak', String(newStreak))
      localStorage.setItem('kalam-last-visit', today)
      setStreak(newStreak)
    } else {
      setStreak(currentStreak)
    }
  }, [])

  // Last read position
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]
  const nameOfDay = NAMES_PREVIEW[new Date().getDate() % NAMES_PREVIEW.length]

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>

      {/* ── HERO — fullscreen verse experience ──────────────────────────────── */}
      <section
        style={{ minHeight: 'calc(100svh - 72px)' }}
        className="flex flex-col items-center justify-center px-6 text-center relative"
      >
        {/* Streak top-right */}
        <div className="absolute top-4 right-6">
          <span style={{ color: '#C9A84C', fontFamily: 'var(--font-serif)', fontSize: '14px' }}>
            {streak > 0 ? `Dia ${streak}` : '\u00A0'}
          </span>
        </div>

        {/* Date */}
        <motion.p
          {...fadeUp}
          style={{ color: '#7A7870', fontSize: '12px', letterSpacing: '0.15em' }}
          className="uppercase mb-12"
        >
          {dateLabel || '\u00A0'}
        </motion.p>

        {/* Arabic verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="arabic-glow arabic-pulse mb-8"
          style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: 'clamp(36px, 8vw, 68px)',
            lineHeight: 1.6,
            color: '#C9A84C',
            maxWidth: '600px',
          }}
        >
          {verse.arabic}
        </motion.p>

        {/* Portuguese translation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(17px, 2.5vw, 21px)',
            lineHeight: 1.8,
            color: '#F0EBE2',
            maxWidth: '560px',
            fontStyle: 'italic',
            marginBottom: '12px',
          }}
        >
          &ldquo;{verse.portuguese}&rdquo;
        </motion.p>

        {/* Reference */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: '13px', color: '#7A7870', marginBottom: '20px' }}
        >
          &mdash; {verse.ref}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/a-palavra" className="shimmer-gold" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '999px',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C', fontSize: '15px', fontWeight: 500,
            textDecoration: 'none',
          }}>
            Abrir a Palavra <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-30">
          <ChevronDown size={16} style={{ color: '#7A7870' }} />
        </div>
      </section>

      {/* ── NAME OF GOD section ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="px-6 py-16 text-center"
        style={{ borderTop: '1px solid #272230' }}
      >
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A7870' }} className="uppercase mb-6">
          Nome de Deus &middot; Hoje
        </p>
        <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(32px, 6vw, 48px)', color: '#C9A84C', marginBottom: '8px' }}>
          {nameOfDay.arabic}
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2', marginBottom: '4px' }}>
          {nameOfDay.transliteration}
        </p>
        <p style={{ fontSize: '15px', color: '#B3B0A6' }}>
          {nameOfDay.meaning}
        </p>
        <Link href="/a-presenca/99-nomes" style={{ fontSize: '13px', color: '#C9A84C', marginTop: '16px', display: 'inline-block', textDecoration: 'none' }}>
          Explorar os 99 Nomes &rarr;
        </Link>
      </motion.section>

      {/* ── ONDE VOCE PAROU (Continue where I left off) ────────────────────── */}
      {lastRead && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="px-6 pb-8"
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A7870', marginBottom: '12px' }} className="uppercase">
            Onde voc&ecirc; parou
          </p>
          <Link
            href={`/a-palavra/${lastRead.surah}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              textDecoration: 'none',
            }}
          >
            <BookOpen size={22} style={{ color: '#C9A84C', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '15px', color: '#F0EBE2', fontWeight: 500 }}>
                Continuar: {lastRead.name}
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '2px' }}>
                Vers&iacute;culo {lastRead.verse}
              </p>
            </div>
            <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
          </Link>
        </motion.section>
      )}

      {/* ── 4 PORTALS ───────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="px-6 py-16"
        style={{ borderTop: '1px solid #272230' }}
      >
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {portals.map((portal) => (
            <Link key={portal.href} href={portal.href} className="card-hover" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              padding: '32px 16px', borderRadius: '16px',
              background: '#161220', border: '1px solid #272230',
              textDecoration: 'none', textAlign: 'center', gap: '12px',
            }}>
              <portal.icon size={28} style={{ color: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: '#F0EBE2' }}>
                {portal.label}
              </span>
              <span style={{ fontSize: '12px', color: '#7A7870' }}>
                {portal.sublabel}
              </span>
            </Link>
          ))}
        </div>
      </motion.section>

    </main>
  )
}
