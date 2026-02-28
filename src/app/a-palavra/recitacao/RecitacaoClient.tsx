'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Search, Headphones } from 'lucide-react'
import { surahs } from '@/lib/data/surahs'
import { BackButton } from '@/components/shared/BackButton'
import { AudioPlayer } from '@/components/shared/AudioPlayer'

export function RecitacaoClient() {
  const [search, setSearch] = useState('')
  const [audioSurah, setAudioSurah] = useState<number | null>(null)

  const handleSurahChange = useCallback((num: number) => {
    setAudioSurah(num)
  }, [])

  const filtered = surahs.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.translation.toLowerCase().includes(search.toLowerCase()) ||
      String(s.number) === search.trim()
  )

  const currentAudioSurah = audioSurah ? surahs.find((s) => s.number === audioSurah) : null

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #272230', padding: '16px 24px' }}>
        <BackButton href="/a-palavra" label="A Palavra" />
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Headphones size={24} style={{ color: '#C9A84C' }} />
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                color: '#F0EBE2',
              }}
            >
              Recitacao
            </h1>
          </div>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '4px' }}>
            Ouca a recitacao completa do Quran por Mishary Rashid Alafasy
          </p>
        </div>
      </header>

      {/* Search */}
      <div style={{ padding: '16px 24px 0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <Search size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar surata..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#F0EBE2',
              fontSize: '15px',
              fontFamily: 'var(--font-sans)',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#7A7870',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '0 4px',
              }}
            >
              &#10005;
            </button>
          )}
        </div>

        {search && (
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '8px' }}>
            {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </div>

      {/* Surah list */}
      <div
        style={{
          padding: '16px 24px',
          paddingBottom: audioSurah !== null ? '160px' : '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {filtered.map((surah, index) => {
          const isCurrentlyPlaying = audioSurah === surah.number
          const shouldAnimate = index < 30

          const card = (
            <div
              key={surah.number}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '14px 16px',
                borderRadius: '12px',
                background: isCurrentlyPlaying ? 'rgba(201, 168, 76, 0.08)' : '#161220',
                border: isCurrentlyPlaying
                  ? '1px solid rgba(201, 168, 76, 0.3)'
                  : '1px solid #272230',
                gap: '14px',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Play button */}
              <button
                onClick={() => setAudioSurah(isCurrentlyPlaying ? null : surah.number)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  border: isCurrentlyPlaying
                    ? '1px solid #C9A84C'
                    : '1px solid #272230',
                  background: isCurrentlyPlaying
                    ? 'rgba(201, 168, 76, 0.15)'
                    : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                {isCurrentlyPlaying ? (
                  <Pause size={16} fill="#C9A84C" color="#C9A84C" />
                ) : (
                  <Play size={16} fill="#C9A84C" color="#C9A84C" style={{ marginLeft: '2px' }} />
                )}
              </button>

              {/* Surah info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      color: isCurrentlyPlaying ? '#C9A84C' : '#7A7870',
                      fontWeight: 600,
                      minWidth: '24px',
                    }}
                  >
                    {surah.number}
                  </span>
                  <p
                    style={{
                      fontSize: '15px',
                      color: isCurrentlyPlaying ? '#F0EBE2' : '#B3B0A6',
                      fontWeight: isCurrentlyPlaying ? 500 : 400,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {surah.name}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#7A7870',
                    marginTop: '2px',
                    paddingLeft: '32px',
                  }}
                >
                  {surah.translation} &middot; {surah.versesCount} versos
                </p>
              </div>

              {/* Arabic name */}
              <p
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '18px',
                  color: isCurrentlyPlaying ? '#C9A84C' : 'rgba(201, 168, 76, 0.5)',
                  direction: 'rtl',
                  flexShrink: 0,
                  transition: 'color 0.2s ease',
                }}
              >
                {surah.arabicName}
              </p>
            </div>
          )

          if (shouldAnimate) {
            return (
              <motion.div
                key={surah.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
              >
                {card}
              </motion.div>
            )
          }

          return card
        })}
      </div>

      {/* Audio Player */}
      {audioSurah !== null && currentAudioSurah && (
        <AudioPlayer
          surahNumber={audioSurah}
          surahName={currentAudioSurah.name}
          arabicName={currentAudioSurah.arabicName}
          onClose={() => setAudioSurah(null)}
          onSurahChange={handleSurahChange}
        />
      )}
    </main>
  )
}
