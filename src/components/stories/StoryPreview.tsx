'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Share2 } from 'lucide-react'
import { StoryCard } from './StoryCard'
import { useStoryDownload } from './useStoryDownload'
import type { StoryItem } from '@/lib/data/story-content'

// ── Design tokens ────────────────────────────────────────────────────────────

const tokens = {
  gold: '#C9A84C',
  muted: '#7A7870',
} as const

// ── Types ────────────────────────────────────────────────────────────────────

interface StoryPreviewProps {
  stories: StoryItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

// ── Component ────────────────────────────────────────────────────────────────

export function StoryPreview({ stories, currentIndex, onClose, onNavigate }: StoryPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { downloadStory, shareStory } = useStoryDownload()
  const story = stories[currentIndex]

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentIndex > 0) onNavigate(currentIndex - 1)
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentIndex < stories.length - 1) onNavigate(currentIndex + 1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentIndex, stories.length, onClose, onNavigate])

  const handleDownload = useCallback(() => {
    downloadStory(cardRef, `kalam-${story.id}`)
  }, [downloadStory, story.id])

  const handleShare = useCallback(() => {
    const text = `${story.title}\n\n${story.content}${story.source ? `\n\n— ${story.source}` : ''}\n\n| KALAM`
    shareStory(cardRef, text)
  }, [shareStory, story])

  // Swipe handling via drag
  const handleDragEnd = useCallback((_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    const threshold = 80
    const velocity = 0.5

    if (info.offset.y < -threshold || info.velocity.y < -velocity) {
      // Swipe up → next
      if (currentIndex < stories.length - 1) onNavigate(currentIndex + 1)
    } else if (info.offset.y > threshold || info.velocity.y > velocity) {
      // Swipe down → prev
      if (currentIndex > 0) onNavigate(currentIndex - 1)
    }
  }, [currentIndex, stories.length, onNavigate])

  if (!story) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Progress bars */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: 16,
          right: 16,
          display: 'flex',
          gap: 3,
          zIndex: 10,
        }}
      >
        {stories.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 2,
              borderRadius: 1,
              background: i <= currentIndex ? tokens.gold : 'rgba(255,255,255,0.15)',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 16,
          zIndex: 10,
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <X size={18} color="#fff" />
      </button>

      {/* Card container — swipeable */}
      <AnimatePresence mode="wait">
        <motion.div
          key={story.id}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.3}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            cursor: 'grab',
            maxHeight: '80vh',
            overflow: 'hidden',
            borderRadius: 16,
          }}
        >
          <StoryCard ref={cardRef} story={story} size="full" />
        </motion.div>
      </AnimatePresence>

      {/* Action buttons */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          gap: 16,
          zIndex: 10,
        }}
      >
        <button
          onClick={handleDownload}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 20px',
            borderRadius: 999,
            border: '1px solid rgba(201,168,76,0.3)',
            background: 'rgba(201,168,76,0.08)',
            color: tokens.gold,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Download size={15} />
          Download
        </button>
        <button
          onClick={handleShare}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 20px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Share2 size={15} />
          Compartilhar
        </button>
      </div>
    </motion.div>
  )
}
