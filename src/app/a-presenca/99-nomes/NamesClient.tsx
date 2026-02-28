'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, X } from 'lucide-react'
import { namesOfGod } from '@/lib/data/names-of-god'

export function NamesClient() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [studied, setStudied] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')
  const [mounted, setMounted] = useState(false)

  // Load studied from localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('kalam-names-studied')
    if (saved) {
      try {
        setStudied(new Set(JSON.parse(saved)))
      } catch {
        // ignore corrupted data
      }
    }
  }, [])

  // Save when studied changes
  useEffect(() => {
    if (mounted && studied.size > 0) {
      localStorage.setItem('kalam-names-studied', JSON.stringify([...studied]))
    }
  }, [studied, mounted])

  // Today's name (1-indexed)
  const todayIndex = (new Date().getDate() % 99)
  const todayNumber = todayIndex + 1

  // Mark as studied when expanded
  const handleExpand = (num: number) => {
    if (expandedId === num) {
      setExpandedId(null)
    } else {
      setExpandedId(num)
      setStudied(prev => new Set([...prev, num]))
    }
  }

  // Filter names by search
  const filteredNames = namesOfGod.filter(name => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      name.transliteration.toLowerCase().includes(q) ||
      name.meaning.toLowerCase().includes(q) ||
      name.arabic.includes(search)
    )
  })

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px 100px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: '24px' }}
        >
          <Link href="/a-presenca" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '20px',
          }}>
            <ArrowLeft size={16} />
            A Presenca
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            99 Nomes de Deus
          </h1>

          {/* Progress */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '12px',
          }}>
            <p style={{ fontSize: '14px', color: '#B3B0A6' }}>
              {mounted ? studied.size : 0} de 99 estudados
            </p>
            <div style={{
              flex: 1,
              height: '3px',
              background: '#1C1828',
              borderRadius: '2px',
              maxWidth: '200px',
            }}>
              <div style={{
                height: '100%',
                width: `${mounted ? (studied.size / 99) * 100 : 0}%`,
                background: '#C9A84C',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              }} />
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{
            position: 'relative',
            marginBottom: '24px',
          }}
        >
          <Search size={16} style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#7A7870',
            pointerEvents: 'none',
          }} />
          <input
            type="text"
            placeholder="Buscar por nome ou significado..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 40px 12px 40px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              color: '#F0EBE2',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#7A7870',
                padding: '0',
                display: 'flex',
              }}
            >
              <X size={16} />
            </button>
          )}
        </motion.div>

        {/* Today's Name highlight */}
        {!search && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            style={{
              padding: '20px 24px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
              border: '1px solid rgba(201,168,76,0.2)',
              marginBottom: '24px',
              cursor: 'pointer',
            }}
            onClick={() => handleExpand(todayNumber)}
          >
            <p style={{ fontSize: '11px', color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Nome do Dia
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '36px',
                color: '#C9A84C',
                direction: 'rtl',
              }}>
                {namesOfGod[todayIndex].arabic}
              </p>
              <div>
                <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>
                  {namesOfGod[todayIndex].transliteration}
                </p>
                <p style={{ fontSize: '13px', color: '#B3B0A6' }}>
                  {namesOfGod[todayIndex].meaning}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Names Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {filteredNames.map((name, i) => {
            const isStudied = mounted && studied.has(name.number)
            const isToday = name.number === todayNumber
            const isExpanded = expandedId === name.number

            return (
              <motion.div
                key={name.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(i * 0.02, 0.5) }}
              >
                <div
                  onClick={() => handleExpand(name.number)}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: isStudied ? '#161220' : '#111015',
                    border: `1px solid ${isStudied ? 'rgba(201,168,76,0.3)' : '#272230'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Today indicator */}
                  {isToday && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#C9A84C',
                      background: 'rgba(201,168,76,0.12)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Hoje
                    </span>
                  )}

                  <p style={{ fontSize: '11px', color: '#7A7870' }}>
                    {name.number}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '28px',
                    color: '#C9A84C',
                    direction: 'rtl',
                    margin: '8px 0',
                  }}>
                    {name.arabic}
                  </p>
                  <p style={{ fontSize: '14px', color: '#F0EBE2', fontWeight: 500 }}>
                    {name.transliteration}
                  </p>
                  <p style={{ fontSize: '12px', color: '#7A7870', marginTop: '2px' }}>
                    {name.meaning}
                  </p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          marginTop: '16px',
                          paddingTop: '16px',
                          borderTop: '1px solid #272230',
                        }}>
                          <p style={{
                            fontSize: '14px',
                            color: '#B3B0A6',
                            lineHeight: 1.7,
                          }}>
                            {name.description}
                          </p>
                          <p style={{
                            fontSize: '12px',
                            color: '#7A7870',
                            marginTop: '12px',
                          }}>
                            {name.quranRef}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty state for search */}
        {filteredNames.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
          }}>
            <p style={{ fontSize: '15px', color: '#7A7870' }}>
              Nenhum nome encontrado para &ldquo;{search}&rdquo;
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
