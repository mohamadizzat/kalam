'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Search } from 'lucide-react'
import { bridgeThemes } from '@/lib/data/bridge-themes'
import { ThemeSelector } from '@/components/shared/ThemeSelector'

const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'fe', label: 'Fé' },
  { key: 'profetas', label: 'Profetas' },
  { key: 'vida', label: 'Vida' },
  { key: 'escatologia', label: 'Escatologia' },
] as const

const THEME_CATEGORIES: Record<string, string> = {
  'virgin-birth': 'profetas',
  'miracles-of-jesus': 'profetas',
  'prophets-in-common': 'profetas',
  'mary': 'profetas',
  'monotheism': 'fe',
  'prayer': 'fe',
  'fasting': 'fe',
  'charity': 'fe',
  'revelation': 'fe',
  'sin-repentance': 'fe',
  'angels': 'fe',
  'creation': 'fe',
  'free-will': 'fe',
  'afterlife': 'escatologia',
  'paradise-hell': 'escatologia',
  'death-resurrection': 'escatologia',
  'justice': 'vida',
  'family': 'vida',
  'knowledge': 'vida',
  'patience': 'vida',
}

export default function PorTemaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredThemes = useMemo(() => {
    let results = bridgeThemes

    if (activeCategory !== 'all') {
      results = results.filter((t) => THEME_CATEGORIES[t.id] === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      results = results.filter((t) =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q)
      )
    }

    return results
  }, [searchQuery, activeCategory])

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        <Link href="/a-ponte" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: '#7A7870', textDecoration: 'none', marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> A Ponte
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 24 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700,
            color: '#F0EBE2', letterSpacing: '-0.02em',
          }}>
            Por Tema
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: 15, marginTop: 8, lineHeight: 1.7 }}>
            Explore temas teológicos comparados entre as duas escrituras
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ position: 'relative', marginBottom: 16 }}
        >
          <Search size={16} style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            color: '#7A7870',
          }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tema por nome..."
            style={{
              width: '100%',
              padding: '14px 16px 14px 44px',
              borderRadius: 12,
              background: '#161220',
              border: '1px solid #272230',
              color: '#F0EBE2',
              fontSize: 15,
              fontFamily: 'var(--font-sans)',
              outline: 'none',
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#272230'}
          />
        </motion.div>

        {/* Category filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}
        >
          {CATEGORIES.map((cat) => {
            const count = cat.key === 'all'
              ? bridgeThemes.length
              : bridgeThemes.filter((t) => THEME_CATEGORIES[t.id] === cat.key).length
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: 'var(--font-sans)',
                  border: `1px solid ${activeCategory === cat.key ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                  background: activeCategory === cat.key ? 'rgba(201,168,76,0.08)' : 'transparent',
                  color: activeCategory === cat.key ? '#C9A84C' : '#7A7870',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                {cat.label}
                <span style={{
                  fontSize: 10, fontWeight: 600,
                  color: activeCategory === cat.key ? 'rgba(201,168,76,0.7)' : '#7A787060',
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Count */}
        <p style={{ fontSize: 13, color: '#7A7870', marginBottom: 16 }}>
          {filteredThemes.length} de {bridgeThemes.length} temas
        </p>

        <ThemeSelector themes={filteredThemes} />

        {filteredThemes.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <p style={{ fontSize: 15, color: '#B3B0A6' }}>
              Nenhum tema encontrado
            </p>
            <p style={{ fontSize: 13, color: '#7A7870', marginTop: 8 }}>
              Tente outra busca ou remova os filtros
            </p>
          </div>
        )}

        {filteredThemes.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ textAlign: 'center', fontSize: 13, color: '#7A7870', marginTop: 32 }}
          >
            Mais temas serão adicionados em breve
          </motion.p>
        )}

      </div>
    </main>
  )
}
