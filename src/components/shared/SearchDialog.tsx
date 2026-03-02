'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Fuse from 'fuse.js'
import {
  Search,
  X,
  Compass,
  BookOpen,
  Sun,
  Heart,
  Star,
  ArrowRight,
  Mic,
  Languages,
  Clock,
  PenLine,
  MessageCircle,
  Layers,
  Users,
  Sparkles,
  Library,
  Route,
  BookText,
  Calendar,
  BookMarked,
  Home,
  Settings,
  Info,
  HelpCircle,
  Wrench,
  FileText,
  Moon,
  History,
} from 'lucide-react'
import { SEARCH_INDEX, type SearchEntry } from '@/lib/data/search-index'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── ICON MAP (string -> component) ───────────────────────────────────────────

const ICON_MAP: Record<string, typeof Home> = {
  Home, Search, BookOpen, Sun, Heart, Star, Mic, Languages, Clock,
  PenLine, MessageCircle, Layers, Users, Sparkles, Library, Route,
  BookText, Calendar, BookMarked, Settings, Info, HelpCircle, Wrench,
  FileText, Compass, Moon,
}

function getIcon(name: string): typeof Home {
  return ICON_MAP[name] || Compass
}

// ── POPULAR ENTRIES ──────────────────────────────────────────────────────────

const POPULAR_HREFS = ['/a-palavra', '/a-ponte', '/a-presenca/dhikr', '/a-alma/journal', '/perguntas', '/ferramentas']
const POPULAR: SearchEntry[] = SEARCH_INDEX.filter((e) => POPULAR_HREFS.includes(e.href))

// ── CATEGORY CONFIG ──────────────────────────────────────────────────────────

type FilterCategory = 'Todos' | SearchEntry['category']

const FILTER_PILLS: FilterCategory[] = ['Todos', 'Comece Aqui', 'Explore', 'Estude', 'Pratique', 'Reflita', 'Kids']

const CATEGORY_ICON: Record<string, typeof Home> = {
  'Comece Aqui': MessageCircle,
  'Explore': Compass,
  'Estude': BookOpen,
  'Pratique': Sun,
  'Reflita': Heart,
  'Kids': Star,
}

// ── RECENT SEARCHES ──────────────────────────────────────────────────────────

const RECENT_KEY = 'kalam-recent-searches'
const MAX_RECENT = 5

function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(RECENT_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.slice(0, MAX_RECENT) : []
  } catch {
    return []
  }
}

function addRecentSearch(term: string) {
  if (typeof window === 'undefined') return
  try {
    const recent = getRecentSearches().filter((s) => s !== term)
    recent.unshift(term)
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)))
  } catch {
    // silent
  }
}

function removeRecentSearch(term: string) {
  if (typeof window === 'undefined') return
  try {
    const recent = getRecentSearches().filter((s) => s !== term)
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent))
  } catch {
    // silent
  }
}

// ── FUSE.JS INSTANCE ─────────────────────────────────────────────────────────

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1.5 },
    { name: 'keywords', weight: 2 },
  ],
  threshold: 0.4,
  minMatchCharLength: 2,
  includeScore: true,
})

// ── SEARCH DIALOG ────────────────────────────────────────────────────────────

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Load recent searches on open
  useEffect(() => {
    if (open) {
      setRecentSearches(getRecentSearches())
    }
  }, [open])

  // Fuzzy search + category filter
  const results = useMemo(() => {
    if (query.trim().length < 1) return []
    const fuseResults = fuse.search(query.trim()).slice(0, 20)
    const items = fuseResults.map((r) => r.item)
    if (activeFilter === 'Todos') return items.slice(0, 15)
    return items.filter((e) => e.category === activeFilter).slice(0, 15)
  }, [query, activeFilter])

  // Group by category
  const grouped = useMemo(() => {
    return results.reduce<Record<string, SearchEntry[]>>((acc, entry) => {
      if (!acc[entry.category]) acc[entry.category] = []
      acc[entry.category].push(entry)
      return acc
    }, {})
  }, [results])

  // Flat list for keyboard nav
  const flatResults = useMemo(() => Object.values(grouped).flat(), [grouped])

  // Items shown when query is empty: recent searches or popular
  const emptyStateItems = useMemo(() => {
    if (recentSearches.length > 0) return null // handled separately
    return POPULAR
  }, [recentSearches])

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      setActiveFilter('Todos')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Navigate to result and save search
  const navigateTo = useCallback(
    (entry: SearchEntry) => {
      if (query.trim()) {
        addRecentSearch(query.trim())
      }
      router.push(entry.href)
      onClose()
    },
    [query, router, onClose]
  )

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const list = query.trim() ? flatResults : (emptyStateItems || POPULAR)
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(prev + 1, list.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && list[selectedIndex]) {
        e.preventDefault()
        navigateTo(list[selectedIndex])
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    },
    [flatResults, emptyStateItems, selectedIndex, query, navigateTo, onClose]
  )

  // Reset selection on query or filter change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query, activeFilter])

  // Scroll selected into view
  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector('[data-selected="true"]')
      if (selected) {
        selected.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  if (!open) return null

  const showEmptyState = query.trim().length === 0
  const hasRecentSearches = recentSearches.length > 0
  const hasQuery = query.trim().length > 0

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 500,
            }}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{
              position: 'fixed',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(520px, calc(100vw - 32px))',
              maxHeight: '65vh',
              background: T.bg,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              overflow: 'hidden',
              zIndex: 501,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Search input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 18px',
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <Search size={18} style={{ color: T.muted, flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar suratas, ferramentas, profetas..."
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: T.text,
                  fontSize: 15,
                  fontFamily: 'var(--font-sans)',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: T.muted,
                    cursor: 'pointer',
                    padding: 2,
                    display: 'flex',
                  }}
                >
                  <X size={16} />
                </button>
              )}
              <kbd
                style={{
                  fontSize: 11,
                  padding: '2px 6px',
                  borderRadius: 4,
                  border: `1px solid ${T.border}`,
                  color: T.muted,
                  fontFamily: 'var(--font-sans)',
                  flexShrink: 0,
                }}
              >
                Esc
              </kbd>
            </div>

            {/* Filter pills — show only when there's a query */}
            {hasQuery && (
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  padding: '8px 18px',
                  overflowX: 'auto',
                  borderBottom: `1px solid ${T.border}`,
                  scrollbarWidth: 'none',
                }}
              >
                {FILTER_PILLS.map((pill) => {
                  const isActive = pill === activeFilter
                  return (
                    <button
                      key={pill}
                      onClick={() => setActiveFilter(pill)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 100,
                        border: `1px solid ${isActive ? T.gold : T.border}`,
                        background: isActive ? 'rgba(201,168,76,0.12)' : 'transparent',
                        color: isActive ? T.gold : T.muted,
                        fontSize: 11,
                        fontWeight: 500,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {pill}
                    </button>
                  )
                })}
              </div>
            )}

            {/* Results */}
            <div
              ref={listRef}
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: `${T.border} transparent`,
              }}
            >
              {showEmptyState ? (
                <>
                  {/* Recent searches */}
                  {hasRecentSearches && (
                    <>
                      <div
                        style={{
                          padding: '8px 10px 4px',
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: T.muted,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <History size={12} />
                        Recentes
                      </div>
                      {recentSearches.map((term) => (
                        <div
                          key={term}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '8px 12px',
                            borderRadius: 8,
                            cursor: 'pointer',
                          }}
                          onClick={() => setQuery(term)}
                        >
                          <History size={14} style={{ color: T.muted, flexShrink: 0 }} />
                          <span style={{ flex: 1, fontSize: 14, color: T.secondary }}>{term}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              removeRecentSearch(term)
                              setRecentSearches(getRecentSearches())
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: T.muted,
                              cursor: 'pointer',
                              padding: 2,
                              display: 'flex',
                              opacity: 0.5,
                            }}
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      <div style={{ height: 8 }} />
                    </>
                  )}

                  {/* Popular */}
                  <div
                    style={{
                      padding: '8px 10px 4px',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: T.muted,
                    }}
                  >
                    Populares
                  </div>
                  {POPULAR.map((entry, i) => (
                    <ResultItem
                      key={entry.href}
                      entry={entry}
                      isSelected={!hasRecentSearches && i === selectedIndex}
                      onClick={() => navigateTo(entry)}
                    />
                  ))}
                </>
              ) : flatResults.length > 0 ? (
                Object.entries(grouped).map(([category, entries]) => (
                  <div key={category}>
                    <div
                      style={{
                        padding: '8px 10px 4px',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: T.muted,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {(() => {
                        const CatIcon = CATEGORY_ICON[category] || Compass
                        return <CatIcon size={12} />
                      })()}
                      {category}
                    </div>
                    {entries.map((entry) => {
                      const idx = flatResults.indexOf(entry)
                      return (
                        <ResultItem
                          key={entry.id}
                          entry={entry}
                          isSelected={idx === selectedIndex}
                          onClick={() => navigateTo(entry)}
                        />
                      )
                    })}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: T.muted,
                    fontSize: 14,
                  }}
                >
                  Nenhum resultado para &ldquo;{query}&rdquo;
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div
              style={{
                padding: '8px 18px',
                borderTop: `1px solid ${T.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 11,
                color: T.muted,
              }}
            >
              <span>↑↓ navegar</span>
              <span>↵ abrir</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── RESULT ITEM ──────────────────────────────────────────────────────────────

function ResultItem({
  entry,
  isSelected,
  onClick,
}: {
  entry: SearchEntry
  isSelected: boolean
  onClick: () => void
}) {
  const Icon = getIcon(entry.icon)

  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '10px 12px',
        borderRadius: 8,
        border: 'none',
        background: isSelected ? 'rgba(201,168,76,0.08)' : 'transparent',
        color: T.text,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background 0.1s ease',
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: isSelected ? 'rgba(201,168,76,0.12)' : `rgba(39,34,48,0.5)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isSelected ? T.gold : T.muted,
          flexShrink: 0,
          transition: 'all 0.1s ease',
        }}
      >
        <Icon size={16} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: isSelected ? 500 : 400, color: isSelected ? T.text : T.secondary }}>
          {entry.title}
        </div>
        <div style={{ fontSize: 12, color: T.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {entry.description}
        </div>
      </div>
      {isSelected && (
        <ArrowRight size={14} style={{ color: T.gold, flexShrink: 0 }} />
      )}
    </button>
  )
}
