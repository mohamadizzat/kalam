'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function ProgressClient() {
  const [streak, setStreak] = useState(0)
  const [readSurahs, setReadSurahs] = useState<Set<number>>(new Set())
  const [namesCount, setNamesCount] = useState(0)
  const [journalCount, setJournalCount] = useState(0)
  const [dhikrCount, setDhikrCount] = useState(0)

  useEffect(() => {
    // Streak calculation
    const lastVisit = localStorage.getItem('kalam-last-visit')
    const currentStreak = parseInt(localStorage.getItem('kalam-streak') || '0')
    const today = new Date().toISOString().split('T')[0]

    if (lastVisit === today) {
      setStreak(currentStreak)
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      const newStreak = lastVisit === yesterday ? currentStreak + 1 : 1
      localStorage.setItem('kalam-streak', String(newStreak))
      localStorage.setItem('kalam-last-visit', today)
      setStreak(newStreak)
    }

    // Surahs read
    const surahsData = localStorage.getItem('kalam-surahs-read')
    if (surahsData) {
      try {
        const parsed = JSON.parse(surahsData)
        setReadSurahs(new Set(Array.isArray(parsed) ? parsed : []))
      } catch {
        setReadSurahs(new Set())
      }
    }

    // Names studied
    const namesData = localStorage.getItem('kalam-names-studied')
    if (namesData) {
      try {
        const parsed = JSON.parse(namesData)
        setNamesCount(Array.isArray(parsed) ? parsed.length : 0)
      } catch {
        setNamesCount(0)
      }
    }

    // Journal entries
    const journalData = localStorage.getItem('kalam-journal')
    if (journalData) {
      try {
        const parsed = JSON.parse(journalData)
        setJournalCount(Array.isArray(parsed) ? parsed.length : 0)
      } catch {
        setJournalCount(0)
      }
    }

    // Dhikr sessions
    const dhikrData = localStorage.getItem('kalam-dhikr-sessions')
    if (dhikrData) {
      try {
        const parsed = JSON.parse(dhikrData)
        setDhikrCount(Array.isArray(parsed) ? parsed.length : parseInt(dhikrData) || 0)
      } catch {
        setDhikrCount(parseInt(dhikrData) || 0)
      }
    }
  }, [])

  const readCount = readSurahs.size

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }} className="px-6 py-8">
      {/* Back link */}
      <Link
        href="/a-alma"
        style={{
          color: '#7A7870',
          fontSize: '14px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <ArrowLeft size={16} />
        A Alma
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: '#F0EBE2',
            marginTop: '16px',
          }}
        >
          Minha Jornada
        </h1>
      </motion.div>

      {/* Streak card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        style={{
          marginTop: '32px',
          padding: '40px 16px',
          borderRadius: '16px',
          background: '#161220',
          border: '1px solid #272230',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '64px',
            fontWeight: 700,
            color: '#C9A84C',
          }}
        >
          {streak}
        </p>
        <p style={{ fontSize: '16px', color: '#B3B0A6' }}>
          {streak === 1 ? 'dia consecutivo' : 'dias consecutivos'}
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid gap-6 mt-8">
        {/* Quran Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              color: '#F0EBE2',
              marginBottom: '16px',
            }}
          >
            Mapa do Alcorao
          </p>
          <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '16px' }}>
            {readCount} de 114 suratas lidas
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(24px, 1fr))',
              gap: '4px',
            }}
          >
            {Array.from({ length: 114 }, (_, i) => (
              <div
                key={i}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  background: readSurahs.has(i + 1)
                    ? 'rgba(201,168,76,0.3)'
                    : '#1C1828',
                  border: `1px solid ${
                    readSurahs.has(i + 1) ? 'rgba(201,168,76,0.4)' : '#272230'
                  }`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8px',
                  color: readSurahs.has(i + 1) ? '#C9A84C' : '#7A7870',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 99 Names Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2' }}>
            99 Nomes de Deus
          </p>
          <div
            style={{
              marginTop: '8px',
              height: '4px',
              background: '#1C1828',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${(namesCount / 99) * 100}%`,
                height: '100%',
                background: '#C9A84C',
                borderRadius: '2px',
                transition: 'width 0.6s ease',
              }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '4px' }}>
            {namesCount} de 99 estudados
          </p>
        </motion.div>

        {/* Journal count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2' }}>
            Journal
          </p>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '4px' }}>
            {journalCount} reflexoes escritas
          </p>
        </motion.div>

        {/* Dhikr sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2' }}>
            Dhikr
          </p>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '4px' }}>
            {dhikrCount} sessoes completadas
          </p>
        </motion.div>
      </div>
    </main>
  )
}
