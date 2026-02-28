'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Search, ScrollText, Headphones, Bookmark, Sparkles, BookOpenText, GraduationCap } from 'lucide-react'
import { surahs } from '@/lib/data/surahs'
import { surahStudies } from '@/lib/data/surah-studies'
import { DifficultyBadge, type DifficultyLevel } from '@/components/shared/ContentBadges'

type LastRead = {
  surah: number
  verse: number
  name: string
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function APalavraPage() {
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [readSurahs, setReadSurahs] = useState<number[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch { /* ignore */ }

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
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '32px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            A Palavra
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: '15px',
            marginTop: '8px',
          }}>
            114 suratas. 6.236 versiculos. A Palavra de Deus preservada.
          </p>
        </motion.div>

        {/* Continue where I left off */}
        {lastRead && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Link
              href={`/a-palavra/${lastRead.surah}`}
              className="card-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                marginBottom: '24px',
                textDecoration: 'none',
              }}
            >
              <BookOpen size={24} style={{ color: '#C9A84C', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 500 }}>Continuar lendo</p>
                <p style={{ fontSize: '13px', color: '#7A7870' }}>{lastRead.name} &middot; Versiculo {lastRead.verse}</p>
              </div>
              <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
            </Link>
          </motion.div>
        )}

        {/* Deep studies section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          style={{ marginBottom: '32px' }}
        >
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
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  textDecoration: 'none',
                  minWidth: '140px',
                }}
              >
                <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '18px', color: '#C9A84C', marginBottom: '4px' }}>
                  {study.arabicTitle}
                </p>
                <p style={{ fontSize: '14px', color: '#F0EBE2', fontWeight: 500, marginBottom: '6px' }}>{study.title}</p>
                <DifficultyBadge level="avancado" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {([
            { href: '/a-palavra/hadiths', icon: ScrollText, title: 'Hadiths', desc: '50 ditos do Profeta Muhammad (saws)', delay: 0.2, level: 'iniciante' as DifficultyLevel },
            { href: '/a-palavra/parabolas', icon: BookOpenText, title: 'Parabolas', desc: '15 historias do Quran que transformam', delay: 0.25, level: 'iniciante' as DifficultyLevel },
            { href: '/a-palavra/recitacao', icon: Headphones, title: 'Recitacao', desc: 'Ouca o Quran completo — Mishary Alafasy', delay: 0.3, level: 'iniciante' as DifficultyLevel },
            { href: '/a-palavra/hifz', icon: GraduationCap, title: 'Hifz', desc: 'Memorize as suratas curtas do Quran', delay: 0.33, level: 'intermediario' as DifficultyLevel },
            { href: '/a-palavra/favoritos', icon: Bookmark, title: 'Favoritos', desc: 'Seus versiculos salvos', delay: 0.36 },
            { href: '/a-palavra/busca', icon: Sparkles, title: 'Buscar no Quran', desc: 'Versiculos populares e busca por tema', delay: 0.4 },
          ]).map(card => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: card.delay }}
            >
              <Link
                href={card.href}
                className="card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(201,168,76,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <card.icon size={20} style={{ color: '#C9A84C' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>{card.title}</p>
                  <p style={{ fontSize: '13px', color: '#7A7870' }}>{card.desc}</p>
                  {card.level && (
                    <div style={{ marginTop: '6px' }}>
                      <DifficultyBadge level={card.level} />
                    </div>
                  )}
                </div>
                <ArrowRight size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '16px',
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
        </motion.div>

        {/* Results count when searching */}
        {search && (
          <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '12px' }}>
            {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}

        {/* Surah grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.map((surah, i) => (
            <motion.div
              key={surah.number}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.5) }}
            >
              <Link
                href={`/a-palavra/${surah.number}`}
                className="card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  textDecoration: 'none',
                  gap: '16px',
                }}
              >
                {/* Number */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
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
                  <p style={{ fontSize: '13px', color: '#7A7870' }}>{surah.translation} &middot; {surah.versesCount} versiculos</p>
                </div>
                {/* Arabic name */}
                <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '20px', color: '#C9A84C', direction: 'rtl' }}>
                  {surah.arabicName}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
