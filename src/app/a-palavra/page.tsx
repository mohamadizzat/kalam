'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowRight, Search } from 'lucide-react'
import { surahs } from '@/lib/data/surahs'
import { surahStudies } from '@/lib/data/surah-studies'

type LastRead = {
  surah: number
  verse: number
  name: string
}

export default function APalavraPage() {
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [readSurahs, setReadSurahs] = useState<number[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Load last read position
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch { /* ignore */ }

    // Load read surahs
    try {
      const saved = localStorage.getItem('kalam-surahs-read')
      if (saved) setReadSurahs(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  const filtered = surahs.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.translation.toLowerCase().includes(search.toLowerCase()) ||
    String(s.number) === search.trim()
  )

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }} className="px-6 py-8">
      {/* Header */}
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: '#F0EBE2' }}>
        A Palavra
      </h1>
      <p style={{ color: '#B3B0A6', fontSize: '15px', marginTop: '8px', marginBottom: '24px' }}>
        114 suratas. 6.236 versículos. A Palavra de Deus preservada.
      </p>

      {/* Continue where I left off */}
      {lastRead && (
        <Link
          href={`/a-palavra/${lastRead.surah}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            marginBottom: '24px',
            textDecoration: 'none',
          }}
        >
          <BookOpen size={24} style={{ color: '#C9A84C', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 500 }}>Continuar lendo</p>
            <p style={{ fontSize: '13px', color: '#7A7870' }}>{lastRead.name} &middot; Versículo {lastRead.verse}</p>
          </div>
          <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
        </Link>
      )}

      {/* Deep studies section */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2', marginBottom: '12px' }}>
          Estudos Profundos
        </p>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {surahStudies.map(study => (
            <Link
              key={study.slug}
              href={`/a-palavra/estudo/${study.slug}`}
              className="card-hover"
              style={{
                flexShrink: 0,
                padding: '16px 20px',
                borderRadius: '12px',
                background: '#161220',
                border: '1px solid #272230',
                textDecoration: 'none',
                minWidth: '140px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '18px', color: '#C9A84C', marginBottom: '4px' }}>
                {study.arabicTitle}
              </p>
              <p style={{ fontSize: '14px', color: '#F0EBE2', fontWeight: 500 }}>{study.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Search */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          borderRadius: '12px',
          background: '#161220',
          border: '1px solid #272230',
          marginBottom: '16px',
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

      {/* Results count when searching */}
      {search && (
        <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '12px' }}>
          {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
        </p>
      )}

      {/* Surah grid */}
      <div className="grid gap-2">
        {filtered.map(surah => (
          <Link
            href={`/a-palavra/${surah.number}`}
            key={surah.number}
            className="card-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              textDecoration: 'none',
              gap: '16px',
            }}
          >
            {/* Number circle */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #272230',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#C9A84C',
              fontWeight: 600,
              flexShrink: 0,
            }}>
              {surah.number}
            </div>
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>{surah.name}</p>
                {readSurahs.includes(surah.number) && (
                  <span style={{ fontSize: '10px', color: '#C9A84C', opacity: 0.6 }}>&#10003;</span>
                )}
              </div>
              <p style={{ fontSize: '13px', color: '#7A7870' }}>{surah.translation} · {surah.versesCount} versículos</p>
            </div>
            {/* Arabic name */}
            <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '20px', color: '#C9A84C', direction: 'rtl' }}>
              {surah.arabicName}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
