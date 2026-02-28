'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { KidsHeader, KidsArabicWord, KidsStarBurst } from '@/components/kids'
import { prophetStoriesKids } from '@/lib/data/kids/prophet-stories-kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import { RelatedContent } from '@/components/shared/RelatedContent'

interface Props {
  slug: string
}

export function HistoriaDetailClient({ slug }: Props) {
  const story = prophetStoriesKids.find((s) => s.slug === slug)

  const [progress, setProgress] = useState(() => getProgress())
  const [showStars, setShowStars] = useState(false)

  if (!story) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '40px 20px 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          gap: '16px',
        }}>
          <span style={{ fontSize: '48px' }}>📖</span>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: 600,
            color: '#F0EBE2',
          }}>
            Historia nao encontrada
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: '#7A7870',
          }}>
            Essa historia nao existe ou foi removida.
          </p>
        </div>
      </main>
    )
  }

  const isCompleted = progress.completedStories.includes(slug)

  const handleComplete = () => {
    const updated = markComplete('completedStories', slug, 3)
    setProgress(updated)
    setShowStars(true)
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        {/* Header */}
        <KidsHeader
          emoji={story.emoji}
          title={story.title}
          subtitle={story.arabicName}
          backHref="/kids/historias"
          color={story.color}
          stars={progress.stars}
        />

        {/* Arabic Name Display */}
        <div style={{ marginBottom: '28px' }}>
          <KidsArabicWord
            arabic={story.arabicName}
            transliteration={story.name}
            translation={story.title}
            color={story.color}
          />
        </div>

        {/* Story Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '36px',
        }}>
          {story.content.map((paragraph, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * (i + 1) }}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: '#161220',
                border: `1px solid ${story.color}10`,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                color: '#B3B0A6',
                lineHeight: 1.8,
              }}>
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lessons Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * (story.content.length + 1) }}
          style={{ marginBottom: '36px' }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#7A7870',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '14px',
          }}>
            Licoes desta historia
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            {story.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 * (story.content.length + i + 2) }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  background: `${story.color}08`,
                  border: `1px solid ${story.color}15`,
                }}
              >
                {/* Number badge */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '10px',
                  background: `${story.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: story.color,
                  }}>
                    {i + 1}
                  </span>
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: '#F0EBE2',
                  lineHeight: 1.6,
                  paddingTop: '3px',
                }}>
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Complete Button / Completed Message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * (story.content.length + story.lessons.length + 2) }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          {isCompleted ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '16px',
              background: `${story.color}10`,
              border: `1px solid ${story.color}20`,
            }}>
              <span style={{ fontSize: '16px' }}>✅</span>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '15px',
                fontWeight: 600,
                color: story.color,
              }}>
                Historia completa!
              </span>
            </div>
          ) : (
            <button
              onClick={handleComplete}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '16px',
                background: story.color,
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              <span style={{ fontSize: '16px' }}>⭐</span>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '15px',
                fontWeight: 700,
                color: '#0D0B12',
              }}>
                Marcar como lida (+3 estrelas)
              </span>
            </button>
          )}

          {/* Star Burst Animation */}
          {showStars && <KidsStarBurst />}
        </motion.div>

        {/* Related Content */}
        <RelatedContent
          currentPath="/kids/historias"
          currentCategory="kids"
        />

      </div>
    </main>
  )
}
