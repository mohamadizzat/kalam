'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, ChevronDown, ChevronUp, Shuffle } from 'lucide-react'
import { verseMappings, type VerseMapping } from '@/lib/data/bridge-verse-map'

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'confirms', label: 'Confirma', color: '#22c55e' },
  { key: 'expands', label: 'Expande', color: '#3b82f6' },
  { key: 'reframes', label: 'Reformula', color: '#f59e0b' },
  { key: 'responds', label: 'Responde', color: '#a855f7' },
] as const

const REL_COLORS: Record<string, string> = {
  confirms: '#22c55e',
  expands: '#3b82f6',
  reframes: '#f59e0b',
  responds: '#a855f7',
}

const REL_LABELS: Record<string, string> = {
  confirms: 'Confirma',
  expands: 'Expande',
  reframes: 'Reformula',
  responds: 'Responde',
}

export default function PorVersiculoPage() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Stats
  const stats = useMemo(() => {
    const all = verseMappings || []
    const bibleBooks = new Set(all.map((m) => m.bibleVerse.book))
    const quranSurahs = new Set(all.flatMap((m) => m.relatedQuranVerses.map((v) => v.reference.split(' ').slice(0, -1).join(' '))))
    const relCounts: Record<string, number> = { confirms: 0, expands: 0, reframes: 0, responds: 0 }
    all.forEach((m) => m.relatedQuranVerses.forEach((v) => { relCounts[v.relationship] = (relCounts[v.relationship] || 0) + 1 }))
    return { total: all.length, bibleBooks: bibleBooks.size, quranSurahs: quranSurahs.size, relCounts }
  }, [])

  const totalRel = Object.values(stats.relCounts).reduce((a, b) => a + b, 0)

  // Random verse
  const pickRandom = useCallback(() => {
    const all = verseMappings || []
    if (all.length === 0) return
    const rand = all[Math.floor(Math.random() * all.length)]
    setExpandedId(rand.id)
    setQuery('')
    setActiveFilter('all')
    setTimeout(() => {
      const el = document.getElementById(`verse-${rand.id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }, [])

  const filtered = useMemo(() => {
    let results = verseMappings || []

    if (activeFilter !== 'all') {
      results = results.filter((m) =>
        m.relatedQuranVerses.some((v) => v.relationship === activeFilter)
      )
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      results = results.filter((m) =>
        m.bibleVerse.reference.toLowerCase().includes(q) ||
        m.bibleVerse.text.toLowerCase().includes(q) ||
        m.bridgeInsight.toLowerCase().includes(q) ||
        m.scholarContext?.toLowerCase().includes(q) ||
        m.relatedQuranVerses.some((v) =>
          v.reference.toLowerCase().includes(q) ||
          v.translation.toLowerCase().includes(q)
        )
      )
    }

    return results
  }, [query, activeFilter])

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
            Por Versículo
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: 15, marginTop: 8, lineHeight: 1.7 }}>
            Encontre conexões entre versículos das duas escrituras
          </p>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap',
          }}
        >
          <div style={{
            flex: 1, minWidth: 100, padding: '14px 16px', borderRadius: 12,
            background: '#161220', border: '1px solid #272230', textAlign: 'center',
          }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#C9A84C', fontFamily: 'var(--font-serif)' }}>{stats.total}</p>
            <p style={{ fontSize: 11, color: '#7A7870', letterSpacing: '0.5px' }}>mapeamentos</p>
          </div>
          <div style={{
            flex: 1, minWidth: 100, padding: '14px 16px', borderRadius: 12,
            background: '#161220', border: '1px solid #272230', textAlign: 'center',
          }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#F0EBE2', fontFamily: 'var(--font-serif)' }}>{stats.bibleBooks}</p>
            <p style={{ fontSize: 11, color: '#7A7870', letterSpacing: '0.5px' }}>livros da Bíblia</p>
          </div>
          <div style={{
            flex: 1, minWidth: 100, padding: '14px 16px', borderRadius: 12,
            background: '#161220', border: '1px solid #272230', textAlign: 'center',
          }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#F0EBE2', fontFamily: 'var(--font-serif)' }}>{stats.quranSurahs}</p>
            <p style={{ fontSize: 11, color: '#7A7870', letterSpacing: '0.5px' }}>suratas do Alcorão</p>
          </div>
        </motion.div>

        {/* Relationship distribution */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: 16 }}
        >
          <div style={{ display: 'flex', borderRadius: 999, overflow: 'hidden', height: 6, background: '#272230' }}>
            {totalRel > 0 && Object.entries(stats.relCounts).map(([key, count]) => (
              <div key={key} style={{
                width: `${(count / totalRel) * 100}%`,
                background: REL_COLORS[key],
                transition: 'width 0.5s ease',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8, justifyContent: 'center' }}>
            {Object.entries(stats.relCounts).map(([key, count]) => (
              <span key={key} style={{
                display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#B3B0A6',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: REL_COLORS[key], display: 'inline-block' }} />
                {REL_LABELS[key]} ({count})
              </span>
            ))}
          </div>
        </motion.div>

        {/* Random verse button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: 20 }}
        >
          <button
            onClick={pickRandom}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 18px', borderRadius: 999, width: '100%',
              justifyContent: 'center',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#C9A84C', fontSize: 13, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.2s ease',
            }}
          >
            <Shuffle size={14} />
            Versículo aleatório
          </button>
        </motion.div>

        {/* Search */}
        <div style={{
          position: 'relative', marginBottom: 16,
        }}>
          <Search size={16} style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            color: '#7A7870',
          }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar versículo, tema ou palavra..."
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
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24,
        }}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 12,
                fontFamily: 'var(--font-sans)',
                border: `1px solid ${activeFilter === f.key
                  ? (f.key === 'all' ? 'rgba(201,168,76,0.4)' : `${f.color}50`)
                  : '#272230'
                }`,
                background: activeFilter === f.key
                  ? (f.key === 'all' ? 'rgba(201,168,76,0.08)' : `${f.color}10`)
                  : 'transparent',
                color: activeFilter === f.key
                  ? (f.key === 'all' ? '#C9A84C' : f.color)
                  : '#7A7870',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p style={{
          fontSize: 13, color: '#7A7870', marginBottom: 16,
        }}>
          Mostrando {filtered.length} de {(verseMappings || []).length} versículos
        </p>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.slice(0, 50).map((mapping) => (
            <VerseCard
              key={mapping.id}
              mapping={mapping}
              expanded={expandedId === mapping.id}
              onToggle={() => setExpandedId(expandedId === mapping.id ? null : mapping.id)}
            />
          ))}
        </div>

        {filtered.length > 50 && (
          <p style={{ textAlign: 'center', fontSize: 13, color: '#7A7870', marginTop: 24 }}>
            Mostrando 50 de {filtered.length} resultados. Refine sua busca.
          </p>
        )}

        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '48px 24px',
          }}>
            <p style={{ fontSize: 15, color: '#B3B0A6' }}>
              Nenhum versículo encontrado
            </p>
            <p style={{ fontSize: 13, color: '#7A7870', marginTop: 8 }}>
              Tente outra busca ou remova os filtros
            </p>
          </div>
        )}

      </div>
    </main>
  )
}

function VerseCard({
  mapping,
  expanded,
  onToggle,
}: {
  mapping: VerseMapping
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      id={`verse-${mapping.id}`}
      layout
      style={{
        borderRadius: 12,
        background: '#161220',
        border: '1px solid #272230',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '18px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 14,
            fontStyle: 'italic', color: '#C9A84C', marginBottom: 6,
          }}>
            {mapping.bibleVerse.reference}
          </p>
          <p style={{
            fontSize: 14, color: '#F0EBE2', lineHeight: 1.6,
            opacity: 0.9,
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 999 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {mapping.bibleVerse.text}
          </p>

          {/* Relationship badges */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
            {mapping.relatedQuranVerses.map((v, i) => (
              <span key={i} style={{
                fontSize: 10,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 100,
                color: REL_COLORS[v.relationship],
                background: `${REL_COLORS[v.relationship]}15`,
                border: `1px solid ${REL_COLORS[v.relationship]}30`,
              }}>
                {v.reference} · {REL_LABELS[v.relationship]}
              </span>
            ))}
          </div>
        </div>

        {expanded ? (
          <ChevronUp size={16} style={{ color: '#7A7870', flexShrink: 0, marginTop: 4 }} />
        ) : (
          <ChevronDown size={16} style={{ color: '#7A7870', flexShrink: 0, marginTop: 4 }} />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 20px 20px',
              borderTop: '1px solid #272230',
            }}>
              {/* Related Quran verses */}
              {mapping.relatedQuranVerses.map((v, i) => (
                <div key={i} style={{
                  marginTop: 16,
                  padding: '16px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.1)',
                }}>
                  <p style={{
                    fontSize: 13, fontStyle: 'italic',
                    color: '#C9A84C', marginBottom: 8,
                  }}>
                    {v.reference}
                  </p>
                  {v.arabic && (
                    <p style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: 20, color: 'rgba(201,168,76,0.6)',
                      direction: 'rtl', textAlign: 'right',
                      lineHeight: 1.9, marginBottom: 10,
                    }}>
                      {v.arabic}
                    </p>
                  )}
                  <p style={{ fontSize: 14, color: '#F0EBE2', lineHeight: 1.7, opacity: 0.9 }}>
                    {v.translation}
                  </p>
                </div>
              ))}

              {/* Bridge insight */}
              <div style={{
                marginTop: 16, padding: '14px 16px',
                borderRadius: 8, background: 'rgba(201,168,76,0.06)',
                borderLeft: '3px solid rgba(201,168,76,0.3)',
              }}>
                <p style={{ fontSize: 14, color: '#B3B0A6', lineHeight: 1.7 }}>
                  {mapping.bridgeInsight}
                </p>
              </div>

              {mapping.scholarContext && (
                <p style={{
                  fontSize: 12, color: '#7A7870', marginTop: 12, lineHeight: 1.6,
                }}>
                  {mapping.scholarContext}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
