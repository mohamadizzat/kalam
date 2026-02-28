'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { KidsHeader } from '@/components/kids'
import { getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { prophetStoriesKids } from '@/lib/data/kids/prophet-stories-kids'

export function HistoriasKidsClient() {
  const [progress, setProgress] = useState<KidsProgress | null>(null)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedStories = progress?.completedStories ?? []

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="📖"
          title="Historias dos Profetas"
          subtitle="15 historias incriveis dos mensageiros de Allah!"
          backHref="/kids"
          color="#FF8C42"
          stars={stars}
        />

        {/* Stories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '10px',
        }}>
          {prophetStoriesKids.map((story, i) => {
            const isCompleted = completedStories.includes(story.slug)

            return (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (i + 1) }}
              >
                <Link
                  href={`/kids/historias/${story.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: '16px',
                    background: '#161220',
                    border: `1px solid ${story.color}25`,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  {/* Emoji circle */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: `${story.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0,
                  }}>
                    {story.emoji}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {story.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '13px',
                      color: `${story.color}80`,
                      marginTop: '2px',
                    }}>
                      {story.arabicName}
                    </p>
                  </div>

                  {/* Completed checkmark */}
                  {isCompleted && (
                    <span style={{ fontSize: '14px', flexShrink: 0 }}>✅</span>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  )
}
