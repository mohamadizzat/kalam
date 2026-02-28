'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw, Check, Shuffle, BookOpen, Layers } from 'lucide-react'
import { namesOfGod, type NameOfGod } from '@/lib/data/names-of-god'

type StudyMode = 'all' | 'unstudied' | 'random'

const STORAGE_KEY = 'kalam-flashcard-studied'

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function FlashcardsClient() {
  const [mounted, setMounted] = useState(false)
  const [studied, setStudied] = useState<Set<number>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mode, setMode] = useState<StudyMode>('all')
  const [deck, setDeck] = useState<NameOfGod[]>(namesOfGod)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Swipe handling
  const x = useMotionValue(0)
  const rotateCard = useTransform(x, [-200, 0, 200], [-15, 0, 15])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])

  // Load studied from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setStudied(new Set(JSON.parse(saved)))
      }
    } catch {
      // ignore corrupted data
    }
  }, [])

  // Save when studied changes
  useEffect(() => {
    if (mounted && studied.size > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...studied]))
    }
  }, [studied, mounted])

  // Build deck based on mode
  useEffect(() => {
    let newDeck: NameOfGod[]
    switch (mode) {
      case 'unstudied':
        newDeck = namesOfGod.filter(n => !studied.has(n.number))
        if (newDeck.length === 0) newDeck = namesOfGod
        break
      case 'random':
        newDeck = shuffleArray(namesOfGod)
        break
      default:
        newDeck = namesOfGod
    }
    setDeck(newDeck)
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [mode, studied])

  const currentName = deck[currentIndex]
  const totalInDeck = deck.length

  const goNext = useCallback(() => {
    if (currentIndex < totalInDeck - 1) {
      setDirection(1)
      setIsFlipped(false)
      setCurrentIndex(prev => prev + 1)
    }
  }, [currentIndex, totalInDeck])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setIsFlipped(false)
      setCurrentIndex(prev => prev - 1)
    }
  }, [currentIndex])

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])

  const markStudied = useCallback(() => {
    if (!currentName) return
    setStudied(prev => new Set([...prev, currentName.number]))
  }, [currentName])

  const resetProgress = useCallback(() => {
    setStudied(new Set())
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80
    if (info.offset.x > threshold) {
      goPrev()
    } else if (info.offset.x < -threshold) {
      goNext()
    }
  }, [goNext, goPrev])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleFlip()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, handleFlip])

  if (!currentName) return null

  const isCurrentStudied = mounted && studied.has(currentName.number)
  const studiedCount = mounted ? studied.size : 0
  const progressPercent = (studiedCount / 99) * 100

  const modeButtons: { key: StudyMode; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'Todos', icon: <Layers size={14} /> },
    { key: 'unstudied', label: 'Nao Estudados', icon: <BookOpen size={14} /> },
    { key: 'random', label: 'Aleatorio', icon: <Shuffle size={14} /> },
  ]

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 16px 100px' }}>

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
            Flashcards — 99 Nomes
          </h1>

          {/* Stats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '12px',
          }}>
            <p style={{ fontSize: '14px', color: '#B3B0A6' }}>
              {studiedCount} de 99 estudados
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
                width: `${progressPercent}%`,
                background: '#C9A84C',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              }} />
            </div>
            {studiedCount > 0 && (
              <button
                onClick={resetProgress}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: '#7A7870',
                  fontSize: '12px',
                  cursor: 'pointer',
                  padding: '4px',
                }}
                title="Resetar progresso"
              >
                <RotateCcw size={12} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {modeButtons.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '10px',
                border: `1px solid ${mode === key ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                background: mode === key ? 'rgba(201,168,76,0.08)' : '#161220',
                color: mode === key ? '#C9A84C' : '#7A7870',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {icon}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Card Position Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#7A7870' }}>
            {currentIndex + 1} / {totalInDeck}
          </p>
        </motion.div>

        {/* Progress bar for deck position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{
            height: '2px',
            background: '#1C1828',
            borderRadius: '1px',
            marginBottom: '24px',
          }}
        >
          <motion.div
            animate={{ width: `${((currentIndex + 1) / totalInDeck) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              height: '100%',
              background: 'rgba(201,168,76,0.4)',
              borderRadius: '1px',
            }}
          />
        </motion.div>

        {/* Flashcard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          ref={containerRef}
          style={{
            perspective: '1200px',
            marginBottom: '24px',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${currentName.number}-${mode}`}
              initial={{ opacity: 0, x: direction > 0 ? 100 : direction < 0 ? -100 : 0, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              style={{
                x,
                rotate: rotateCard,
                opacity,
                cursor: 'grab',
              }}
              whileDrag={{ cursor: 'grabbing' }}
            >
              <div
                onClick={handleFlip}
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '380px',
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer',
                }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '380px',
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                  }}
                >
                  {/* Front of card */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    minHeight: '380px',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #1C1828, #161220)',
                    border: '1px solid #272230',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '48px 32px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    {/* Number badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      fontSize: '12px',
                      color: '#7A7870',
                      background: 'rgba(122,120,112,0.08)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                    }}>
                      #{currentName.number}
                    </div>

                    {/* Studied badge */}
                    {isCurrentStudied && (
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        color: '#C9A84C',
                        background: 'rgba(201,168,76,0.1)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                      }}>
                        <Check size={12} />
                        Estudado
                      </div>
                    )}

                    {/* Arabic name */}
                    <p style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: 'clamp(56px, 12vw, 80px)',
                      color: '#C9A84C',
                      direction: 'rtl',
                      lineHeight: 1.3,
                      textAlign: 'center',
                    }}>
                      {currentName.arabic}
                    </p>

                    {/* Hint to flip */}
                    <p style={{
                      position: 'absolute',
                      bottom: '24px',
                      fontSize: '12px',
                      color: '#7A7870',
                      opacity: 0.6,
                    }}>
                      Toque para virar
                    </p>
                  </div>

                  {/* Back of card */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    minHeight: '380px',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #1C1828, #161220)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '48px 32px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    {/* Number badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      fontSize: '12px',
                      color: '#7A7870',
                      background: 'rgba(122,120,112,0.08)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                    }}>
                      #{currentName.number}
                    </div>

                    {/* Transliteration */}
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(24px, 6vw, 32px)',
                      color: '#C9A84C',
                      fontWeight: 600,
                      marginBottom: '8px',
                      textAlign: 'center',
                    }}>
                      {currentName.transliteration}
                    </p>

                    {/* Meaning */}
                    <p style={{
                      fontSize: '18px',
                      color: '#F0EBE2',
                      fontWeight: 500,
                      marginBottom: '24px',
                      textAlign: 'center',
                    }}>
                      {currentName.meaning}
                    </p>

                    {/* Divider */}
                    <div style={{
                      width: '48px',
                      height: '1px',
                      background: 'rgba(201,168,76,0.3)',
                      marginBottom: '24px',
                    }} />

                    {/* Description */}
                    <p style={{
                      fontSize: '15px',
                      color: '#B3B0A6',
                      lineHeight: 1.7,
                      textAlign: 'center',
                      maxWidth: '420px',
                    }}>
                      {currentName.description}
                    </p>

                    {/* Quran reference */}
                    <p style={{
                      fontSize: '12px',
                      color: '#7A7870',
                      marginTop: '20px',
                    }}>
                      {currentName.quranRef}
                    </p>

                    {/* Hint to flip */}
                    <p style={{
                      position: 'absolute',
                      bottom: '24px',
                      fontSize: '12px',
                      color: '#7A7870',
                      opacity: 0.6,
                    }}>
                      Toque para voltar
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {/* Previous */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              border: '1px solid #272230',
              background: '#161220',
              color: currentIndex === 0 ? '#3a3745' : '#F0EBE2',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Mark as Studied */}
          <button
            onClick={markStudied}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '14px',
              border: `1px solid ${isCurrentStudied ? 'rgba(201,168,76,0.3)' : '#272230'}`,
              background: isCurrentStudied ? 'rgba(201,168,76,0.08)' : '#161220',
              color: isCurrentStudied ? '#C9A84C' : '#F0EBE2',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <Check size={16} />
            {isCurrentStudied ? 'Estudado' : 'Marcar Estudado'}
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={currentIndex === totalInDeck - 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              border: '1px solid #272230',
              background: '#161220',
              color: currentIndex === totalInDeck - 1 ? '#3a3745' : '#F0EBE2',
              cursor: currentIndex === totalInDeck - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Keyboard hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#7A7870',
            opacity: 0.5,
          }}
        >
          Setas para navegar, espaco para virar
        </motion.p>

      </div>
    </main>
  )
}
