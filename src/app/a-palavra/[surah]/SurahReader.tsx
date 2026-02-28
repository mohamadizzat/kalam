'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Surah } from '@/lib/data/surahs'

type Verse = {
  number: number
  arabic: string
  portuguese: string
}

export function SurahReader({ surah }: { surah: Surah }) {
  const [verses, setVerses] = useState<Verse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showTranslation, setShowTranslation] = useState(true)

  useEffect(() => {
    async function fetchVerses() {
      try {
        setLoading(true)
        setError(false)
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surah.number}/editions/quran-uthmani,pt.elhayek`
        )
        const data = await res.json()
        if (data.code === 200 && data.data) {
          const arabicAyahs = data.data[0].ayahs
          const ptAyahs = data.data[1].ayahs
          const merged: Verse[] = arabicAyahs.map((a: any, i: number) => ({
            number: a.numberInSurah,
            arabic: a.text,
            portuguese: ptAyahs[i]?.text || '',
          }))
          setVerses(merged)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchVerses()
  }, [surah.number])

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #272230', padding: '16px 24px' }}>
        <Link href="/a-palavra" style={{ color: '#7A7870', fontSize: '14px', textDecoration: 'none' }}>
          &#8592; Voltar
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#F0EBE2' }}>
              {surah.name}
            </h1>
            <p style={{ fontSize: '13px', color: '#7A7870' }}>
              {surah.translation} · {surah.versesCount} versículos · {surah.revelationPlace}
            </p>
          </div>
          <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '28px', color: '#C9A84C' }}>
            {surah.arabicName}
          </p>
        </div>
      </header>

      {/* Toggle */}
      <div style={{ padding: '16px 24px', display: 'flex', gap: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 500,
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            cursor: 'default',
          }}
        >
          Árabe
        </span>
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 500,
            background: showTranslation ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
            border: showTranslation ? '1px solid #C9A84C' : '1px solid #272230',
            color: showTranslation ? '#C9A84C' : '#7A7870',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Tradução
        </button>
      </div>

      {/* Bismillah */}
      {surah.number !== 1 && surah.number !== 9 && (
        <div style={{ textAlign: 'center', padding: '32px', borderBottom: '1px solid #272230' }}>
          <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '28px', color: '#C9A84C', direction: 'rtl' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '8px' }}>
            Em nome de Deus, o Infinitamente Misericordioso, o Constantemente Misericordioso
          </p>
        </div>
      )}

      {/* Verses */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p style={{ color: '#7A7870' }}>Carregando a Palavra...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p style={{ color: '#7A7870' }}>Não foi possível carregar</p>
          <button
            onClick={() => window.location.reload()}
            style={{ color: '#C9A84C', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="divide-y" style={{ borderColor: '#272230' }}>
          {verses.map((verse, index) => {
            const shouldAnimate = index < 20

            const content = (
              <div key={verse.number} style={{ padding: '32px 24px' }}>
                {/* Verse number */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid #272230',
                    fontSize: '12px',
                    color: '#C9A84C',
                    marginBottom: '16px',
                  }}
                >
                  {verse.number}
                </span>

                {/* Arabic text */}
                <p
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    direction: 'rtl',
                    textAlign: 'right',
                    fontSize: 'clamp(24px, 5vw, 36px)',
                    lineHeight: 1.8,
                    color: '#C9A84C',
                    marginBottom: showTranslation ? '16px' : '0',
                  }}
                >
                  {verse.arabic}
                </p>

                {/* Portuguese translation */}
                {showTranslation && (
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.75,
                      color: '#B3B0A6',
                    }}
                  >
                    {verse.portuguese}
                  </p>
                )}
              </div>
            )

            if (shouldAnimate) {
              return (
                <motion.div
                  key={verse.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                >
                  {content}
                </motion.div>
              )
            }

            return content
          })}
        </div>
      )}
    </main>
  )
}
