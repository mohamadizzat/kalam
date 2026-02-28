'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bookmark, Trash2, Share2, Copy, Check, ArrowUpDown, Clock, BookOpen, ArrowDownAZ } from 'lucide-react'
import { BackButton } from '@/components/shared/BackButton'
import { EmptyState } from '@/components/shared/EmptyState'
import { surahs } from '@/lib/data/surahs'

type BookmarkEntry = {
  surah: number
  verse: number
  text?: string
  arabic: string
  portuguese?: string
  timestamp?: number
}

type SortMode = 'newest' | 'oldest' | 'surah'

export function FavoritosClient() {
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [sortMode, setSortMode] = useState<SortMode>('newest')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-bookmarks')
      if (saved) {
        const parsed = JSON.parse(saved) as BookmarkEntry[]
        // Ensure all entries have a timestamp
        const withTimestamps = parsed.map((b, i) => ({
          ...b,
          timestamp: b.timestamp || Date.now() - (parsed.length - i) * 1000,
        }))
        setBookmarks(withTimestamps)
      }
    } catch { /* ignore */ }
    setLoading(false)
  }, [])

  // Get unique key for a bookmark
  const getKey = (b: BookmarkEntry) => `${b.surah}:${b.verse}`

  // Get surah name from number
  const getSurahName = (num: number) => {
    const s = surahs.find(s => s.number === num)
    return s ? s.name : `Surata ${num}`
  }

  // Get the display text (supports both old and new format)
  const getTranslation = (b: BookmarkEntry) => b.portuguese || b.text || ''

  // Sort bookmarks
  const sorted = [...bookmarks].sort((a, b) => {
    if (sortMode === 'newest') return (b.timestamp || 0) - (a.timestamp || 0)
    if (sortMode === 'oldest') return (a.timestamp || 0) - (b.timestamp || 0)
    // surah order
    if (a.surah !== b.surah) return a.surah - b.surah
    return a.verse - b.verse
  })

  // Delete a bookmark
  const deleteBookmark = useCallback((surah: number, verse: number) => {
    const key = `${surah}:${verse}`
    setDeletingId(key)
    setTimeout(() => {
      setBookmarks(prev => {
        const next = prev.filter(b => !(b.surah === surah && b.verse === verse))
        localStorage.setItem('kalam-bookmarks', JSON.stringify(next))
        return next
      })
      setDeletingId(null)
    }, 300)
  }, [])

  // Share a bookmark
  const shareBookmark = useCallback(async (b: BookmarkEntry) => {
    const surahName = getSurahName(b.surah)
    const translation = getTranslation(b)
    const shareText = `${b.arabic}\n\n${translation}\n\n-- ${surahName} ${b.verse} | KALAM`
    const key = getKey(b)

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${surahName} ${b.verse} | KALAM`,
          text: shareText,
        })
        return
      } catch (err) {
        if ((err as DOMException).name === 'AbortError') return
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(shareText)
      setCopiedId(key)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = shareText
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedId(key)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }, [])

  // Format date
  const formatDate = (timestamp?: number) => {
    if (!timestamp) return ''
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Hoje'
    if (diffDays === 1) return 'Ontem'
    if (diffDays < 7) return `${diffDays} dias atras`
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })
  }

  // Cycle sort mode
  const cycleSortMode = () => {
    const modes: SortMode[] = ['newest', 'oldest', 'surah']
    const idx = modes.indexOf(sortMode)
    setSortMode(modes[(idx + 1) % modes.length])
  }

  const sortLabel: Record<SortMode, string> = {
    newest: 'Mais recentes',
    oldest: 'Mais antigos',
    surah: 'Por surata',
  }

  const SortIcon = sortMode === 'surah' ? ArrowDownAZ : Clock

  if (loading) {
    return (
      <main style={{ background: '#0D0B12', minHeight: '100vh', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <p style={{ color: '#7A7870', fontSize: '15px' }}>Carregando favoritos...</p>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '16px 24px', borderBottom: '1px solid #272230' }}>
        <BackButton href="/a-palavra" label="A Palavra" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: '#F0EBE2',
            }}>
              Favoritos
            </h1>
            <p style={{ color: '#7A7870', fontSize: '14px', marginTop: '4px' }}>
              {bookmarks.length} {bookmarks.length === 1 ? 'versiculo salvo' : 'versiculos salvos'}
            </p>
          </div>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Bookmark size={24} color="#C9A84C" strokeWidth={1.5} />
          </div>
        </div>
      </header>

      {bookmarks.length === 0 ? (
        <EmptyState
          icon={Bookmark}
          title="Nenhum favorito ainda"
          description="Ao ler o Quran, toque no icone de marcador para salvar versiculos aqui."
          actionLabel="Explorar suratas"
          actionHref="/a-palavra"
        />
      ) : (
        <>
          {/* Sort control */}
          <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={cycleSortMode}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '10px',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                color: '#C9A84C',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <SortIcon size={14} />
              {sortLabel[sortMode]}
            </button>
          </div>

          {/* Bookmarks list */}
          <div style={{ padding: '0 24px 100px' }}>
            <AnimatePresence mode="popLayout">
              {sorted.map((bookmark, index) => {
                const key = getKey(bookmark)
                const isDeleting = deletingId === key
                const isCopied = copiedId === key
                const surahName = getSurahName(bookmark.surah)
                const translation = getTranslation(bookmark)

                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: isDeleting ? 0 : 1, y: 0, scale: isDeleting ? 0.95 : 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -8 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    style={{
                      marginBottom: '16px',
                      borderRadius: '16px',
                      background: '#161220',
                      border: '1px solid #272230',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Gold accent line */}
                    <div style={{
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
                    }} />

                    <div style={{ padding: '24px 20px' }}>
                      {/* Arabic text */}
                      <p style={{
                        fontFamily: 'var(--font-arabic)',
                        direction: 'rtl',
                        textAlign: 'right',
                        fontSize: 'clamp(20px, 5vw, 28px)',
                        lineHeight: 1.9,
                        color: '#C9A84C',
                        marginBottom: '16px',
                        textShadow: '0 0 30px rgba(201,168,76,0.1)',
                      }}>
                        {bookmark.arabic}
                      </p>

                      {/* Translation */}
                      {translation && (
                        <p style={{
                          fontSize: '15px',
                          lineHeight: 1.7,
                          color: '#B3B0A6',
                          marginBottom: '20px',
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {translation}
                        </p>
                      )}

                      {/* Footer: source + actions */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(39,34,48,0.6)',
                      }}>
                        <div>
                          <p style={{
                            fontSize: '13px',
                            color: '#F0EBE2',
                            fontWeight: 500,
                          }}>
                            {surahName} : {bookmark.verse}
                          </p>
                          {bookmark.timestamp && (
                            <p style={{
                              fontSize: '11px',
                              color: '#7A7870',
                              marginTop: '2px',
                            }}>
                              {formatDate(bookmark.timestamp)}
                            </p>
                          )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {/* Share button */}
                          <button
                            onClick={() => shareBookmark(bookmark)}
                            aria-label="Compartilhar"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: isCopied ? 'rgba(201,168,76,0.15)' : 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {isCopied ? (
                              <Check size={16} color="#C9A84C" />
                            ) : (
                              <Share2 size={16} color="#7A7870" />
                            )}
                          </button>

                          {/* Delete button */}
                          <button
                            onClick={() => deleteBookmark(bookmark.surah, bookmark.verse)}
                            aria-label="Remover favorito"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <Trash2 size={16} color="#7A7870" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </>
      )}
    </main>
  )
}
