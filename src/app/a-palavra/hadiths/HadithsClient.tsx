'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, Heart, Star } from 'lucide-react'
import { hadiths, hadithCategories, type Hadith, type HadithCategory } from '@/lib/data/hadiths'

const FAVORITES_KEY = 'kalam-fav-hadiths'

function getDailyHadithId(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return hadiths[dayOfYear % hadiths.length].id
}

export function HadithsClient() {
  const [activeCategory, setActiveCategory] = useState<HadithCategory | 'all' | 'favorites'>('all')
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  const dailyHadithId = useMemo(() => getDailyHadithId(), [])
  const dailyHadith = useMemo(() => hadiths.find(h => h.id === dailyHadithId)!, [dailyHadithId])

  // Load favorites from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(FAVORITES_KEY)
      if (saved) {
        setFavorites(new Set(JSON.parse(saved)))
      }
    } catch {
      // ignore
    }
  }, [])

  // Save favorites
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]))
    }
  }, [favorites, mounted])

  const toggleFavorite = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const toggleExpand = useCallback((id: number) => {
    setExpandedId(prev => prev === id ? null : id)
  }, [])

  const filtered = useMemo(() => {
    let list = hadiths

    // Category filter
    if (activeCategory === 'favorites') {
      list = list.filter(h => favorites.has(h.id))
    } else if (activeCategory !== 'all') {
      list = list.filter(h => h.category === activeCategory)
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(h =>
        h.translation.toLowerCase().includes(q) ||
        h.narrator.toLowerCase().includes(q) ||
        h.source.toLowerCase().includes(q) ||
        h.arabic.includes(q)
      )
    }

    return list
  }, [activeCategory, search, favorites])

  const allTabs: { id: HadithCategory | 'all' | 'favorites'; label: string }[] = [
    { id: 'all', label: 'Todos' },
    ...hadithCategories.map(c => ({ id: c.id as HadithCategory, label: c.label })),
    { id: 'favorites', label: 'Favoritos' },
  ]

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/a-palavra" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '24px',
          }}>
            <ArrowLeft size={16} />
            A Palavra
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Hadiths
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
            marginTop: '8px',
          }}>
            Sabedoria do Profeta Muhammad (que a paz esteja com ele)
          </p>
        </motion.div>

        {/* Daily Hadith */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{
            marginTop: '28px',
            padding: '28px 24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle decorative element */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.06)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}>
            <Star size={14} style={{ color: '#C9A84C' }} />
            <p style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#C9A84C',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-sans)',
            }}>
              Hadith do Dia
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(20px, 4vw, 26px)',
            lineHeight: 1.8,
            color: '#C9A84C',
            direction: 'rtl',
            textAlign: 'right',
            marginBottom: '16px',
          }}>
            {dailyHadith.arabic}
          </p>

          <p style={{
            fontSize: '15px',
            color: '#F0EBE2',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}>
            {dailyHadith.translation}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <p style={{
              fontSize: '12px',
              color: '#7A7870',
            }}>
              {dailyHadith.narrator} &middot; {dailyHadith.source}
            </p>
            {mounted && (
              <button
                onClick={(e) => toggleFavorite(dailyHadith.id, e)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label={favorites.has(dailyHadith.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <Heart
                  size={18}
                  style={{
                    color: favorites.has(dailyHadith.id) ? '#C9A84C' : '#7A7870',
                    fill: favorites.has(dailyHadith.id) ? '#C9A84C' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                />
              </button>
            )}
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
            marginTop: '24px',
          }}
        >
          <Search size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar hadith..."
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
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '20px',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          {allTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id)
                setExpandedId(null)
              }}
              style={{
                flexShrink: 0,
                padding: '8px 16px',
                borderRadius: '20px',
                border: `1px solid ${activeCategory === tab.id ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeCategory === tab.id ? 600 : 400,
                fontFamily: 'var(--font-sans)',
                background: activeCategory === tab.id ? 'rgba(201,168,76,0.1)' : '#161220',
                color: activeCategory === tab.id ? '#C9A84C' : '#B3B0A6',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        {(search || activeCategory !== 'all') && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontSize: '13px',
              color: '#7A7870',
              marginTop: '16px',
            }}
          >
            {filtered.length} {filtered.length === 1 ? 'hadith' : 'hadiths'}
          </motion.p>
        )}

        {/* Hadiths List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '20px',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {filtered.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '48px 24px',
                  }}
                >
                  <p style={{
                    fontSize: '15px',
                    color: '#7A7870',
                  }}>
                    {activeCategory === 'favorites'
                      ? 'Nenhum hadith favorito ainda. Toque no coracao para salvar.'
                      : 'Nenhum hadith encontrado.'
                    }
                  </p>
                </motion.div>
              ) : (
                filtered.map((hadith, index) => (
                  <HadithCard
                    key={hadith.id}
                    hadith={hadith}
                    index={index}
                    isExpanded={expandedId === hadith.id}
                    isFavorite={favorites.has(hadith.id)}
                    mounted={mounted}
                    onToggleExpand={toggleExpand}
                    onToggleFavorite={toggleFavorite}
                  />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </main>
  )
}

function HadithCard({
  hadith,
  index,
  isExpanded,
  isFavorite,
  mounted,
  onToggleExpand,
  onToggleFavorite,
}: {
  hadith: Hadith
  index: number
  isExpanded: boolean
  isFavorite: boolean
  mounted: boolean
  onToggleExpand: (id: number) => void
  onToggleFavorite: (id: number, e: React.MouseEvent) => void
}) {
  const categoryInfo = hadithCategories.find(c => c.id === hadith.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(index * 0.03, 0.3) }}
      style={{
        borderRadius: '16px',
        background: '#161220',
        border: `1px solid ${isExpanded ? 'rgba(201,168,76,0.2)' : '#272230'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Card Header */}
      <button
        onClick={() => onToggleExpand(hadith.id)}
        style={{
          width: '100%',
          padding: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* Category label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#C9A84C',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: 'var(--font-sans)',
          }}>
            {categoryInfo?.emoji} {categoryInfo?.label}
          </p>

          {/* Favorite toggle */}
          {mounted && (
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => onToggleFavorite(hadith.id, e)}
              onKeyDown={(e) => { if (e.key === 'Enter') onToggleFavorite(hadith.id, e as unknown as React.MouseEvent) }}
              style={{
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Heart
                size={16}
                style={{
                  color: isFavorite ? '#C9A84C' : '#7A7870',
                  fill: isFavorite ? '#C9A84C' : 'none',
                  transition: 'all 0.2s ease',
                }}
              />
            </span>
          )}
        </div>

        {/* Arabic */}
        <p style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(18px, 3.5vw, 24px)',
          lineHeight: 1.8,
          color: '#C9A84C',
          direction: 'rtl',
          textAlign: 'right',
          width: '100%',
        }}>
          {hadith.arabic}
        </p>

        {/* Translation preview (collapsed) */}
        <p style={{
          fontSize: '14px',
          color: '#B3B0A6',
          lineHeight: 1.6,
          display: isExpanded ? 'none' : '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>
          {hadith.translation}
        </p>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {/* Full translation */}
              <p style={{
                fontSize: '15px',
                color: '#F0EBE2',
                lineHeight: 1.7,
              }}>
                {hadith.translation}
              </p>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: '#272230',
              }} />

              {/* Narrator + Source */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#B3B0A6',
                }}>
                  <span style={{ color: '#7A7870' }}>Narrador:</span> {hadith.narrator}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#B3B0A6',
                }}>
                  <span style={{ color: '#7A7870' }}>Fonte:</span> {hadith.source}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
