'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronLeft,
  Star,
  Flame,
  Lock,
  Check,
  X,
  ChevronRight,
  Trophy,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import {
  QURAN_VOCABULARY,
  TOTAL_LESSONS,
  TOTAL_WORDS,
  type Lesson,
  type QuranWord,
} from '@/lib/data/quran-vocabulary'

// ─── Design Tokens ──────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.3)',
  goldGlow: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  correct: '#4CAF50',
  wrong: '#E25C5C',
}

const FONT_HEADING = "var(--font-serif), 'Playfair Display', Georgia, serif"
const FONT_BODY = "var(--font-sans), system-ui, sans-serif"
const FONT_ARABIC = "'Amiri', var(--font-arabic), serif"

// ─── Types ──────────────────────────────────────────────────────────────────

interface ArabicProgress {
  currentLesson: number
  completedLessons: number[]
  xp: number
  streak: number
  wrongWords: string[]
  lastDate: string
}

const STORAGE_KEY = 'kalam-arabe-quran-progress'

const DEFAULT_PROGRESS: ArabicProgress = {
  currentLesson: 1,
  completedLessons: [],
  xp: 0,
  streak: 0,
  wrongWords: [],
  lastDate: '',
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function loadProgress(): ArabicProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return { ...DEFAULT_PROGRESS, ...parsed }
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_PROGRESS }
}

function saveProgress(p: ArabicProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    // ignore
  }
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0]
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getLevel(xp: number): number {
  return Math.floor(xp / 250) + 1
}

function getXpInLevel(xp: number): number {
  return xp % 250
}

// ─── Confetti ───────────────────────────────────────────────────────────────

function Confetti() {
  const pieces = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 4 + Math.random() * 6,
      color: Math.random() > 0.5 ? T.gold : T.text,
      rotation: Math.random() * 360,
    }))
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.left}vw`, opacity: 1, rotate: 0 }}
          animate={{ y: '110vh', opacity: 0, rotate: p.rotation + 360 }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: p.size > 7 ? '50%' : 2,
            background: p.color,
          }}
        />
      ))}
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function ArabeQuranClient() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState<ArabicProgress>(DEFAULT_PROGRESS)
  const [view, setView] = useState<'home' | 'flashcard' | 'quiz' | 'complete'>('home')
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)

  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizWord, setQuizWord] = useState<QuranWord | null>(null)
  const [quizOptions, setQuizOptions] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [quizScore, setQuizScore] = useState(0)

  // ─── Init ───────────────────────────────────────────────────────────────

  useEffect(() => {
    setMounted(true)
    const p = loadProgress()
    setProgress(p)
  }, [])

  // ─── Lesson availability ───────────────────────────────────────────────

  const isLessonAvailable = useCallback(
    (lessonId: number) => {
      if (lessonId === 1) return true
      return progress.completedLessons.includes(lessonId - 1)
    },
    [progress.completedLessons]
  )

  const isLessonCompleted = useCallback(
    (lessonId: number) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  )

  const nextLesson = useMemo(() => {
    for (let i = 1; i <= TOTAL_LESSONS; i++) {
      if (!progress.completedLessons.includes(i)) return i
    }
    return TOTAL_LESSONS
  }, [progress.completedLessons])

  // ─── Start lesson ─────────────────────────────────────────────────────

  const startLesson = useCallback(
    (lessonId: number) => {
      const lesson = QURAN_VOCABULARY.find((l) => l.id === lessonId)
      if (!lesson) return
      setCurrentLesson(lesson)
      setFlashcardIndex(0)
      setShowMeaning(false)
      setView('flashcard')
    },
    []
  )

  // ─── Flashcard nav ────────────────────────────────────────────────────

  const nextFlashcard = useCallback(() => {
    if (!currentLesson) return
    if (flashcardIndex < currentLesson.words.length - 1) {
      setFlashcardIndex((p) => p + 1)
      setShowMeaning(false)
    } else {
      // Start quiz
      setQuizIndex(0)
      setQuizScore(0)
      setSelectedAnswer(null)
      setIsCorrect(null)
      setView('quiz')
    }
  }, [currentLesson, flashcardIndex])

  // ─── Quiz logic ───────────────────────────────────────────────────────

  const generateQuizQuestion = useCallback(
    (idx: number) => {
      if (!currentLesson) return
      const word = currentLesson.words[idx]
      setQuizWord(word)

      // Get meanings from other lessons for distractors
      const otherMeanings: string[] = []
      for (const lesson of QURAN_VOCABULARY) {
        if (lesson.id === currentLesson.id) continue
        for (const w of lesson.words) {
          if (w.meaning !== word.meaning && !otherMeanings.includes(w.meaning)) {
            otherMeanings.push(w.meaning)
          }
        }
      }

      const distractors = shuffleArray(otherMeanings).slice(0, 3)
      const options = shuffleArray([word.meaning, ...distractors])
      setQuizOptions(options)
      setSelectedAnswer(null)
      setIsCorrect(null)
    },
    [currentLesson]
  )

  // Generate first quiz question when entering quiz view
  useEffect(() => {
    if (view === 'quiz' && currentLesson) {
      generateQuizQuestion(0)
    }
  }, [view, currentLesson, generateQuizQuestion])

  const handleQuizAnswer = useCallback(
    (answer: string) => {
      if (selectedAnswer !== null || !quizWord) return
      setSelectedAnswer(answer)
      const correct = answer === quizWord.meaning
      setIsCorrect(correct)

      if (correct) {
        setQuizScore((s) => s + 1)
      } else {
        // Add to wrong words for spaced repetition
        setProgress((prev) => {
          const wrong = prev.wrongWords.includes(quizWord.transliteration)
            ? prev.wrongWords
            : [...prev.wrongWords, quizWord.transliteration]
          return { ...prev, wrongWords: wrong }
        })
      }

      // Auto advance after delay
      setTimeout(() => {
        if (!currentLesson) return
        const nextIdx = quizIndex + 1
        if (nextIdx < currentLesson.words.length) {
          setQuizIndex(nextIdx)
          generateQuizQuestion(nextIdx)
        } else {
          // Complete the lesson
          completeLesson()
        }
      }, 1200)
    },
    [selectedAnswer, quizWord, quizIndex, currentLesson, generateQuizQuestion]
  )

  // ─── Complete lesson ──────────────────────────────────────────────────

  const completeLesson = useCallback(() => {
    if (!currentLesson) return

    setProgress((prev) => {
      const today = todayStr()
      const yesterday = yesterdayStr()
      let newStreak = prev.streak
      if (prev.lastDate === today) {
        // same day, no change
      } else if (prev.lastDate === yesterday) {
        newStreak = prev.streak + 1
      } else {
        newStreak = 1
      }

      // XP: quiz score * 10 + 50 base
      // quizScore is current state, but we need final score
      // We'll use a ref-safe approach: read from state at call time
      const bonusXp = 50
      const quizXp = quizScore * 10
      // Extra bonus if all correct
      const perfectBonus = quizScore === (currentLesson?.words.length ?? 5) ? 50 : 0

      const updated: ArabicProgress = {
        ...prev,
        completedLessons: prev.completedLessons.includes(currentLesson.id)
          ? prev.completedLessons
          : [...prev.completedLessons, currentLesson.id],
        currentLesson: currentLesson.id + 1,
        xp: prev.xp + bonusXp + quizXp + perfectBonus,
        streak: newStreak,
        lastDate: today,
      }
      saveProgress(updated)
      return updated
    })

    setView('complete')
  }, [currentLesson, quizScore])

  // ─── Back to home ─────────────────────────────────────────────────────

  const goHome = useCallback(() => {
    setView('home')
    setCurrentLesson(null)
    setFlashcardIndex(0)
    setShowMeaning(false)
    setQuizIndex(0)
    setQuizScore(0)
  }, [])

  // Pick a random example verse from current lesson (for complete view)
  const verseWord = useMemo(() => {
    if (!currentLesson) return null
    const withExample = currentLesson.words.filter((w) => w.exampleRef)
    return withExample.length > 0
      ? withExample[Math.floor(Math.random() * withExample.length)]
      : null
  }, [currentLesson])

  // ─── Hydration guard ─────────────────────────────────────────────────

  if (!mounted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: T.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: T.gold, fontSize: 32, fontFamily: FONT_ARABIC }}
        >
          عَرَبِيّ
        </motion.div>
      </div>
    )
  }

  // ─── Container wrapper ────────────────────────────────────────────────

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: T.bg,
    color: T.text,
    fontFamily: FONT_BODY,
    overflowX: 'hidden',
  }

  const innerStyle: React.CSSProperties = {
    maxWidth: 500,
    margin: '0 auto',
    padding: '0 16px',
    paddingBottom: 100,
  }

  // =====================================================================
  // HOME VIEW
  // =====================================================================

  if (view === 'home') {
    const level = getLevel(progress.xp)
    const xpInLevel = getXpInLevel(progress.xp)

    return (
      <div style={containerStyle}>
        <div style={innerStyle}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingBottom: 8,
            }}
          >
            <Link
              href="/a-presenca"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                color: T.secondary,
                textDecoration: 'none',
                fontSize: 14,
                fontFamily: FONT_BODY,
              }}
            >
              <ChevronLeft size={18} />
              Voltar
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h1
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: T.text,
                fontFamily: FONT_HEADING,
                margin: 0,
                marginBottom: 4,
              }}
            >
              Arabe do Quran
            </h1>
            <div
              style={{
                fontSize: 28,
                color: T.gold,
                fontFamily: FONT_ARABIC,
                textShadow: `0 0 20px ${T.goldGlow}`,
              }}
            >
              عَرَبِيّ
            </div>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {/* Level */}
            <div
              style={{
                flex: 1,
                background: T.surface,
                borderRadius: 12,
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                border: `1px solid ${T.border}`,
              }}
            >
              <Star size={18} color={T.gold} fill={T.gold} />
              <div>
                <div style={{ fontSize: 11, color: T.muted, fontFamily: FONT_BODY }}>
                  Nivel
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: T.text }}>
                  {level}
                </div>
              </div>
            </div>

            {/* XP */}
            <div
              style={{
                flex: 1.5,
                background: T.surface,
                borderRadius: 12,
                padding: '12px 16px',
                border: `1px solid ${T.border}`,
              }}
            >
              <div style={{ fontSize: 11, color: T.muted, marginBottom: 4, fontFamily: FONT_BODY }}>
                XP
              </div>
              <div
                style={{
                  height: 8,
                  background: T.border,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(xpInLevel / 250) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${T.gold}, ${T.goldDim})`,
                    borderRadius: 4,
                  }}
                />
              </div>
              <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>
                {xpInLevel}/250
              </div>
            </div>

            {/* Streak */}
            <div
              style={{
                flex: 1,
                background: T.surface,
                borderRadius: 12,
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                border: `1px solid ${T.border}`,
              }}
            >
              <Flame size={18} color={progress.streak > 0 ? '#FF6B35' : T.muted} />
              <div>
                <div style={{ fontSize: 11, color: T.muted, fontFamily: FONT_BODY }}>
                  Dias
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: T.text }}>
                  {progress.streak}
                </div>
              </div>
            </div>
          </div>

          {/* Licao do Dia CTA */}
          {nextLesson <= TOTAL_LESSONS && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startLesson(nextLesson)}
              style={{
                width: '100%',
                padding: '18px 24px',
                borderRadius: 16,
                border: 'none',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${T.gold}, #A8873A)`,
                color: '#0D0B12',
                fontSize: 17,
                fontWeight: 700,
                fontFamily: FONT_BODY,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                marginBottom: 32,
                boxShadow: `0 4px 24px ${T.goldDim}`,
              }}
            >
              <BookOpen size={20} />
              Iniciar Licao {nextLesson}
            </motion.button>
          )}

          {/* Section title */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: T.secondary,
              marginBottom: 16,
              fontFamily: FONT_BODY,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Licoes ({progress.completedLessons.length}/{TOTAL_LESSONS})</span>
            <span style={{ fontSize: 12, color: T.muted }}>{TOTAL_WORDS} palavras</span>
          </div>

          {/* Lesson Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 8,
            }}
          >
            {QURAN_VOCABULARY.map((lesson) => {
              const completed = isLessonCompleted(lesson.id)
              const available = isLessonAvailable(lesson.id)
              const locked = !completed && !available

              return (
                <motion.button
                  key={lesson.id}
                  whileHover={available || completed ? { scale: 1.1 } : {}}
                  whileTap={available || completed ? { scale: 0.95 } : {}}
                  onClick={() => {
                    if (available && !completed) startLesson(lesson.id)
                    else if (completed) startLesson(lesson.id)
                  }}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    border: completed
                      ? 'none'
                      : available
                        ? `1.5px solid ${T.goldDim}`
                        : `1px solid ${T.border}`,
                    background: completed
                      ? T.gold
                      : available
                        ? T.surface
                        : T.border,
                    cursor: locked ? 'default' : 'pointer',
                    opacity: locked ? 0.4 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    position: 'relative',
                    boxShadow: completed ? `0 2px 12px ${T.goldDim}` : 'none',
                  }}
                >
                  {completed ? (
                    <Check size={18} color="#0D0B12" strokeWidth={3} />
                  ) : locked ? (
                    <Lock size={14} color={T.muted} />
                  ) : (
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: T.text,
                        fontFamily: FONT_BODY,
                      }}
                    >
                      {lesson.id}
                    </span>
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Lesson titles under grid — show first word */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 8,
              marginTop: 2,
            }}
          >
            {QURAN_VOCABULARY.map((lesson) => (
              <div
                key={`title-${lesson.id}`}
                style={{
                  width: 52,
                  textAlign: 'center',
                  fontSize: 8,
                  color: T.muted,
                  fontFamily: FONT_ARABIC,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {lesson.words[0]?.arabic ?? ''}
              </div>
            ))}
          </div>

          {/* Mobile grid override */}
          <style>{`
            @media (max-width: 420px) {
              div[style*="grid-template-columns: repeat(6"] {
                grid-template-columns: repeat(5, 1fr) !important;
              }
            }
          `}</style>
        </div>
      </div>
    )
  }

  // =====================================================================
  // FLASHCARD VIEW
  // =====================================================================

  if (view === 'flashcard' && currentLesson) {
    const word = currentLesson.words[flashcardIndex]
    const totalWords = currentLesson.words.length

    return (
      <div style={containerStyle}>
        <div style={innerStyle}>
          {/* Top bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={goHome}
              style={{
                background: 'transparent',
                border: 'none',
                color: T.secondary,
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={22} />
            </motion.button>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              {Array.from({ length: totalWords }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: i <= flashcardIndex ? T.gold : T.border,
                    transition: 'background 0.3s',
                  }}
                />
              ))}
            </div>

            <span style={{ fontSize: 13, color: T.muted, fontFamily: FONT_BODY }}>
              {flashcardIndex + 1} de {totalWords}
            </span>
          </div>

          {/* Flashcard */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 'calc(100vh - 180px)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${flashcardIndex}-${showMeaning}`}
                initial={{ opacity: 0, scale: 0.95, rotateY: showMeaning ? 90 : 0 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => setShowMeaning(!showMeaning)}
                style={{
                  width: '100%',
                  maxWidth: 400,
                  background: T.surface,
                  borderRadius: 20,
                  padding: '40px 24px',
                  cursor: 'pointer',
                  border: `1px solid ${T.border}`,
                  textAlign: 'center',
                  minHeight: showMeaning ? 380 : 280,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {!showMeaning ? (
                  /* FRONT */
                  <>
                    <div
                      style={{
                        fontSize: 64,
                        color: T.gold,
                        fontFamily: FONT_ARABIC,
                        lineHeight: 1.3,
                        marginBottom: 12,
                        textShadow: `0 0 30px ${T.goldGlow}`,
                      }}
                    >
                      {word.arabic}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        color: T.secondary,
                        fontFamily: FONT_BODY,
                        marginBottom: 24,
                      }}
                    >
                      {word.transliteration}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: T.muted,
                        fontFamily: FONT_BODY,
                      }}
                    >
                      Toque para ver o significado
                    </div>
                  </>
                ) : (
                  /* BACK */
                  <>
                    <div
                      style={{
                        fontSize: 40,
                        color: T.gold,
                        fontFamily: FONT_ARABIC,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {word.arabic}
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: T.secondary,
                        fontFamily: FONT_BODY,
                        marginBottom: 16,
                      }}
                    >
                      {word.transliteration}
                    </div>
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: T.text,
                        fontFamily: FONT_BODY,
                        marginBottom: 12,
                      }}
                    >
                      {word.meaning}
                    </div>

                    {/* Frequency badge */}
                    <div
                      style={{
                        display: 'inline-block',
                        background: T.goldGlow,
                        borderRadius: 20,
                        padding: '4px 12px',
                        fontSize: 12,
                        color: T.gold,
                        marginBottom: 20,
                        fontFamily: FONT_BODY,
                      }}
                    >
                      Aparece ~{word.frequency} vezes
                    </div>

                    {/* Example */}
                    {word.exampleRef && (
                      <div
                        style={{
                          width: '100%',
                          background: T.bg,
                          borderRadius: 12,
                          padding: 16,
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            color: T.gold,
                            fontFamily: FONT_BODY,
                            fontWeight: 600,
                            marginBottom: 8,
                          }}
                        >
                          {word.exampleRef}
                        </div>
                        <div
                          style={{
                            fontSize: 20,
                            color: T.text,
                            fontFamily: FONT_ARABIC,
                            direction: 'rtl',
                            lineHeight: 1.8,
                            marginBottom: 8,
                          }}
                        >
                          {word.exampleArabic}
                        </div>
                        <div
                          style={{
                            fontSize: 14,
                            color: T.secondary,
                            fontFamily: FONT_BODY,
                            lineHeight: 1.5,
                          }}
                        >
                          {word.exampleTranslation}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={nextFlashcard}
              style={{
                marginTop: 24,
                padding: '14px 32px',
                borderRadius: 12,
                border: 'none',
                background: T.gold,
                color: '#0D0B12',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: FONT_BODY,
              }}
            >
              {flashcardIndex < totalWords - 1 ? 'Proximo' : 'Iniciar Quiz'}
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    )
  }

  // =====================================================================
  // QUIZ VIEW
  // =====================================================================

  if (view === 'quiz' && currentLesson && quizWord) {
    const totalQuestions = currentLesson.words.length

    return (
      <div style={containerStyle}>
        <div style={innerStyle}>
          {/* Top bar */}
          <div
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={goHome}
              style={{
                background: 'transparent',
                border: 'none',
                color: T.secondary,
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={22} />
            </motion.button>

            {/* Progress bar */}
            <div
              style={{
                flex: 1,
                height: 10,
                background: T.border,
                borderRadius: 5,
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((quizIndex + (selectedAnswer ? 1 : 0)) / totalQuestions) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: T.gold,
                  borderRadius: 5,
                }}
              />
            </div>

            <span style={{ fontSize: 13, color: T.muted, fontFamily: FONT_BODY, minWidth: 36 }}>
              {quizIndex + 1}/{totalQuestions}
            </span>
          </div>

          {/* Quiz content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 40,
            }}
          >
            <div style={{ fontSize: 14, color: T.secondary, marginBottom: 8, fontFamily: FONT_BODY }}>
              Qual o significado?
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={quizIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', marginBottom: 40 }}
              >
                <div
                  style={{
                    fontSize: 48,
                    color: T.gold,
                    fontFamily: FONT_ARABIC,
                    lineHeight: 1.3,
                    textShadow: `0 0 20px ${T.goldGlow}`,
                    marginBottom: 4,
                  }}
                >
                  {quizWord.arabic}
                </div>
                <div style={{ fontSize: 16, color: T.secondary, fontFamily: FONT_BODY }}>
                  {quizWord.transliteration}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Options */}
            <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quizOptions.map((option, i) => {
                const isSelected = selectedAnswer === option
                const isCorrectOption = option === quizWord.meaning
                const showCorrectHighlight = selectedAnswer !== null && isCorrectOption
                const showWrongHighlight = isSelected && !isCorrect

                let bgColor = T.surface
                let borderColor = T.border
                if (showCorrectHighlight) {
                  bgColor = 'rgba(76, 175, 80, 0.15)'
                  borderColor = T.correct
                } else if (showWrongHighlight) {
                  bgColor = 'rgba(226, 92, 92, 0.15)'
                  borderColor = T.wrong
                }

                return (
                  <motion.button
                    key={`${quizIndex}-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: showWrongHighlight ? [0, -5, 5, -5, 0] : 0,
                      scale: showCorrectHighlight && isSelected ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      opacity: { duration: 0.2, delay: i * 0.05 },
                      x: { duration: 0.4 },
                      scale: { duration: 0.3 },
                    }}
                    onClick={() => handleQuizAnswer(option)}
                    disabled={selectedAnswer !== null}
                    style={{
                      width: '100%',
                      padding: 16,
                      borderRadius: 12,
                      border: `1.5px solid ${borderColor}`,
                      background: bgColor,
                      color: T.text,
                      fontSize: 16,
                      fontFamily: FONT_BODY,
                      cursor: selectedAnswer !== null ? 'default' : 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.3s, border-color 0.3s',
                    }}
                  >
                    <span>{option}</span>
                    {showCorrectHighlight && (
                      <Check size={18} color={T.correct} strokeWidth={3} />
                    )}
                    {showWrongHighlight && (
                      <X size={18} color={T.wrong} strokeWidth={3} />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Feedback text */}
            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: 20,
                    fontSize: 15,
                    fontWeight: 600,
                    color: isCorrect ? T.correct : T.wrong,
                    fontFamily: FONT_BODY,
                  }}
                >
                  {isCorrect ? 'Correto!' : `Errado — ${quizWord.meaning}`}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }

  // =====================================================================
  // COMPLETE VIEW
  // =====================================================================

  if (view === 'complete' && currentLesson) {
    const totalQuestions = currentLesson.words.length
    const allCorrect = quizScore === totalQuestions
    const xpEarned = 50 + quizScore * 10 + (allCorrect ? 50 : 0)

    return (
      <div style={containerStyle}>
        <Confetti />
        <div style={innerStyle}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              textAlign: 'center',
              paddingTop: 40,
            }}
          >
            {/* Trophy */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              <Trophy size={64} color={T.gold} fill={T.goldDim} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: T.gold,
                fontFamily: FONT_HEADING,
                marginTop: 16,
                marginBottom: 8,
                textShadow: `0 0 20px ${T.goldGlow}`,
              }}
            >
              Licao Completa!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: 15,
                color: T.secondary,
                fontFamily: FONT_BODY,
                marginBottom: 32,
              }}
            >
              Licao {currentLesson.id} — {currentLesson.title}
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'flex',
                gap: 16,
                marginBottom: 32,
                width: '100%',
                maxWidth: 360,
              }}
            >
              {/* Score */}
              <div
                style={{
                  flex: 1,
                  background: T.surface,
                  borderRadius: 16,
                  padding: '20px 16px',
                  border: `1px solid ${T.border}`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 12, color: T.muted, marginBottom: 4, fontFamily: FONT_BODY }}>
                  Corretas
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, color: T.text }}>
                  {quizScore}/{totalQuestions}
                </div>
              </div>

              {/* XP */}
              <div
                style={{
                  flex: 1,
                  background: T.surface,
                  borderRadius: 16,
                  padding: '20px 16px',
                  border: `1px solid ${T.border}`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 12, color: T.muted, marginBottom: 4, fontFamily: FONT_BODY }}>
                  XP
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, color: T.gold }}>
                  +{xpEarned}
                </div>
                {allCorrect && (
                  <div
                    style={{
                      fontSize: 11,
                      color: T.gold,
                      marginTop: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                      fontFamily: FONT_BODY,
                    }}
                  >
                    <Sparkles size={12} />
                    Bonus perfeito!
                  </div>
                )}
              </div>

              {/* Total XP */}
              <div
                style={{
                  flex: 1,
                  background: T.surface,
                  borderRadius: 16,
                  padding: '20px 16px',
                  border: `1px solid ${T.border}`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 12, color: T.muted, marginBottom: 4, fontFamily: FONT_BODY }}>
                  Total
                </div>
                <div style={{ fontSize: 28, fontWeight: 700, color: T.text }}>
                  {progress.xp}
                </div>
                <div style={{ fontSize: 11, color: T.muted, fontFamily: FONT_BODY }}>XP</div>
              </div>
            </motion.div>

            {/* Unlocked verse */}
            {verseWord && verseWord.exampleRef && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  width: '100%',
                  maxWidth: 400,
                  background: T.surface,
                  borderRadius: 16,
                  padding: 24,
                  border: `1px solid ${T.border}`,
                  marginBottom: 32,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: T.gold,
                    fontWeight: 600,
                    marginBottom: 4,
                    fontFamily: FONT_BODY,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                >
                  <BookOpen size={14} />
                  Versiculo Desbloqueado
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: T.muted,
                    marginBottom: 12,
                    fontFamily: FONT_BODY,
                  }}
                >
                  {verseWord.exampleRef}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    color: T.text,
                    fontFamily: FONT_ARABIC,
                    direction: 'rtl',
                    lineHeight: 1.8,
                    marginBottom: 12,
                  }}
                >
                  {verseWord.exampleArabic}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: T.secondary,
                    fontFamily: FONT_BODY,
                    lineHeight: 1.5,
                  }}
                >
                  {verseWord.exampleTranslation}
                </div>
              </motion.div>
            )}

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                width: '100%',
                maxWidth: 360,
              }}
            >
              {currentLesson.id < TOTAL_LESSONS && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => startLesson(currentLesson.id + 1)}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    borderRadius: 14,
                    border: 'none',
                    background: `linear-gradient(135deg, ${T.gold}, #A8873A)`,
                    color: '#0D0B12',
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: FONT_BODY,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  Proxima Licao
                  <ChevronRight size={18} />
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={goHome}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: 14,
                  border: `1.5px solid ${T.border}`,
                  background: 'transparent',
                  color: T.text,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: FONT_BODY,
                }}
              >
                Voltar ao Inicio
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  // ─── Fallback ─────────────────────────────────────────────────────────

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            color: T.muted,
            fontFamily: FONT_BODY,
          }}
        >
          Carregando...
        </div>
      </div>
    </div>
  )
}
