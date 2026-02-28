'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { KidsHeader, KidsQuiz } from '@/components/kids'
import { getProgress, saveProgress, addStars, markComplete } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { quizCategoriesKids } from '@/lib/data/kids/quizzes-kids'

export function QuizKidsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const quizScores = progress?.quizScores ?? {}

  const activeCategory = selectedCategory
    ? quizCategoriesKids.find((c) => c.id === selectedCategory)
    : null

  function handleComplete(score: number, total: number) {
    if (!activeCategory) return

    const p = getProgress()
    const prevBest = p.quizScores[activeCategory.id] || 0
    if (score > prevBest) {
      p.quizScores[activeCategory.id] = score
      saveProgress(p)
    }

    if (score >= 8) addStars(5)
    else if (score >= 5) addStars(3)
    else addStars(1)

    markComplete('completedQuizzes', activeCategory.id, 0)
    setProgress(getProgress())
  }

  function handleBackToCategories() {
    setSelectedCategory(null)
    setProgress(getProgress())
  }

  // Quiz mode — active category selected
  if (activeCategory) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <button
              onClick={handleBackToCategories}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#7A7870',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                padding: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = activeCategory.color
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = '#7A7870'
              }}
            >
              <ArrowLeft size={14} />
              Voltar
            </button>
          </motion.div>

          {/* Category title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            style={{ marginBottom: '28px' }}
          >
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>
              {activeCategory.emoji}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 5vw, 32px)',
                fontWeight: 700,
                color: '#F0EBE2',
                lineHeight: 1.2,
              }}
            >
              {activeCategory.name}
            </h1>
          </motion.div>

          {/* Quiz component */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <KidsQuiz
              questions={activeCategory.questions}
              title={activeCategory.name}
              color={activeCategory.color}
              onComplete={handleComplete}
            />
          </motion.div>

        </div>
      </main>
    )
  }

  // Category selection view
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="❓"
          title="Quiz"
          subtitle="Teste seus conhecimentos!"
          backHref="/kids"
          color="#FF8C42"
          stars={stars}
        />

        {/* Progress summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#B3B0A6',
            }}
          >
            Quizzes completados
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              fontWeight: 700,
              color: '#F0EBE2',
            }}
          >
            {progress?.completedQuizzes.length ?? 0} / {quizCategoriesKids.length}
          </p>
        </motion.div>

        {/* Category cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {quizCategoriesKids.map((cat, i) => {
            const bestScore = quizScores[cat.id] || 0

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.03 * (i + 1) }}
              >
                <button
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px',
                    borderRadius: '16px',
                    background: '#161220',
                    border: `1px solid ${cat.color}25`,
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${cat.color}50`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${cat.color}25`
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${cat.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                    }}
                  >
                    {cat.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#F0EBE2',
                      }}
                    >
                      {cat.name}
                    </p>
                    <p style={{ fontSize: '12px', color: '#7A7870', marginTop: '2px' }}>
                      {cat.questions.length} perguntas
                    </p>
                  </div>
                  {bestScore > 0 && (
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: cat.color,
                        background: `${cat.color}15`,
                        padding: '4px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      {bestScore}/{cat.questions.length}
                    </span>
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  )
}
