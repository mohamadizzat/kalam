'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { StoryCard } from './StoryCard'
import { StoryPreview } from './StoryPreview'
import { useStoryDownload } from './useStoryDownload'
import { getAllStories, getStoriesByType } from '@/lib/data/story-content'
import type { StoryItem, StoryType } from '@/lib/data/story-content'
import { getRamadanDay } from '@/lib/data/ramadan'

// ── Design tokens ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── Tab config ───────────────────────────────────────────────────────────────

type TabConfig = {
  id: string
  label: string
  type?: StoryType
}

function getTabs(): TabConfig[] {
  const isRamadan = getRamadanDay() !== null
  const base: TabConfig[] = [
    { id: 'all', label: 'Tudo' },
    { id: 'verse', label: 'Versos', type: 'verse' },
    { id: 'fact', label: 'Fatos', type: 'fact' },
    { id: 'hadith', label: 'Hadiths', type: 'hadith' },
    { id: 'question', label: 'Perguntas', type: 'question' },
    { id: 'prophet', label: 'Profetas', type: 'prophet' },
  ]
  if (isRamadan) {
    base.push({ id: 'ramadan', label: 'Ramadan', type: 'ramadan' })
  }
  return base
}

// ── Constants ────────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE = 20

// ── Component ────────────────────────────────────────────────────────────────

export function StoryGallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const { downloadStory } = useStoryDownload()

  const tabs = getTabs()

  const filteredStories: StoryItem[] = activeTab === 'all'
    ? getAllStories()
    : getStoriesByType(activeTab as StoryType)

  const visibleStories = filteredStories.slice(0, visibleCount)
  const hasMore = visibleCount < filteredStories.length

  // Lazy load via IntersectionObserver
  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredStories.length))
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [hasMore, filteredStories.length])

  // Reset visible count when tab changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE)
  }, [activeTab])

  const handleCardClick = useCallback((index: number) => {
    setPreviewIndex(index)
  }, [])

  const handleDownloadSingle = useCallback((story: StoryItem) => {
    const el = cardRefs.current.get(story.id)
    if (el) {
      downloadStory({ current: el }, `kalam-${story.id}`)
    }
  }, [downloadStory])

  const setCardRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(id, el)
    else cardRefs.current.delete(id)
  }, [])

  return (
    <main style={{ background: T.bg, minHeight: '100vh', paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ padding: '48px 24px 0', maxWidth: 900, margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: T.text,
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Conteúdo para Stories
        </p>
        <p style={{ fontSize: 14, color: T.muted, marginBottom: 24 }}>
          {filteredStories.length} cards prontos para download e compartilhamento
        </p>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            paddingBottom: 4,
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <style>{`.story-tabs::-webkit-scrollbar { display: none; }`}</style>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 999,
                border: activeTab === tab.id
                  ? `1px solid ${T.gold}`
                  : `1px solid ${T.border}`,
                background: activeTab === tab.id
                  ? 'rgba(201,168,76,0.12)'
                  : 'transparent',
                color: activeTab === tab.id ? T.gold : T.muted,
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          padding: '24px 24px 0',
          maxWidth: 900,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 14,
        }}
      >
        {visibleStories.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
            whileHover={{ y: -4 }}
            style={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {/* Card */}
            <div
              onClick={() => handleCardClick(i)}
              ref={(el) => setCardRef(story.id, el)}
            >
              <StoryCard story={story} size="thumbnail" />
            </div>

            {/* Download overlay on hover */}
            <div
              onClick={(e) => {
                e.stopPropagation()
                handleDownloadSingle(story)
              }}
              style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: 0,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0' }}
            >
              <Download size={14} color={T.gold} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lazy load sentinel */}
      {hasMore && (
        <div ref={sentinelRef} style={{ height: 1, marginTop: 20 }} />
      )}

      {/* Empty state */}
      {filteredStories.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: T.muted }}>
          <p style={{ fontSize: 15 }}>Nenhum conteúdo encontrado nesta categoria.</p>
        </div>
      )}

      {/* Fullscreen preview */}
      <AnimatePresence>
        {previewIndex !== null && (
          <StoryPreview
            stories={visibleStories}
            currentIndex={previewIndex}
            onClose={() => setPreviewIndex(null)}
            onNavigate={setPreviewIndex}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
