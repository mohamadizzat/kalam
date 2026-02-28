'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, RotateCcw } from 'lucide-react'
import { KidsStarBurst } from './KidsStarBurst'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  emoji: string
}

interface KidsQuizProps {
  questions: QuizQuestion[]
  title: string
  color: string
  onComplete?: (score: number, total: number) => void
}

export function KidsQuiz({ questions, title, color, onComplete }: KidsQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showStars, setShowStars] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const question = questions[currentIndex]
  const progress = ((currentIndex) / questions.length) * 100

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedOption !== null) return // already answered
    setSelectedOption(optionIndex)
    const correct = optionIndex === question.correctIndex
    setIsCorrect(correct)
    if (correct) {
      setScore(prev => prev + 1)
      setShowStars(true)
      setTimeout(() => setShowStars(false), 1500)
    }
    setAnsweredQuestions(prev => new Set(prev).add(currentIndex))
  }, [selectedOption, question, currentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedOption(null)
      setIsCorrect(null)
    } else {
      setShowResult(true)
      onComplete?.(score, questions.length)
    }
  }, [currentIndex, questions.length, score, onComplete])

  const handleRestart = useCallback(() => {
    setCurrentIndex(0)
    setSelectedOption(null)
    setIsCorrect(null)
    setScore(0)
    setShowResult(false)
    setAnsweredQuestions(new Set())
  }, [])

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : percentage >= 40 ? '👍' : '💪'
    const message = percentage >= 80 ? 'Incrível! Você é um gênio!' : percentage >= 60 ? 'Muito bem! Continue assim!' : percentage >= 40 ? 'Bom trabalho! Pode melhorar!' : 'Continue estudando! Você consegue!'

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: '40px 24px',
          borderRadius: '20px',
          background: '#161220',
          border: `1px solid ${color}30`,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>{emoji}</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#F0EBE2', marginBottom: '8px' }}>
          {score}/{questions.length}
        </h3>
        <p style={{ fontSize: '15px', color: '#B3B0A6', marginBottom: '24px' }}>{message}</p>
        <div style={{
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          background: '#272230',
          marginBottom: '24px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            borderRadius: '4px',
            background: color,
            transition: 'width 0.8s ease',
          }} />
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={handleRestart}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '12px',
              background: `${color}15`, border: `1px solid ${color}30`,
              color: color, fontSize: '14px', fontWeight: 500,
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}
          >
            <RotateCcw size={16} /> Tentar de novo
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      {showStars && <KidsStarBurst />}

      {/* Progress bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px',
      }}>
        <div style={{
          flex: 1, height: '6px', borderRadius: '3px', background: '#272230', overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ height: '100%', borderRadius: '3px', background: color }}
          />
        </div>
        <span style={{ fontSize: '12px', color: '#7A7870', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{
            padding: '24px',
            borderRadius: '20px',
            background: '#161220',
            border: `1px solid ${color}20`,
          }}>
            {/* Question emoji + text */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>{question.emoji}</span>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600,
                color: '#F0EBE2', lineHeight: 1.4,
              }}>
                {question.question}
              </h3>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {question.options.map((option, i) => {
                let optionBg = '#1C1828'
                let optionBorder = '#272230'
                let optionColor = '#F0EBE2'

                if (selectedOption !== null) {
                  if (i === question.correctIndex) {
                    optionBg = 'rgba(69,183,160,0.15)'
                    optionBorder = '#45B7A0'
                    optionColor = '#45B7A0'
                  } else if (i === selectedOption && !isCorrect) {
                    optionBg = 'rgba(255,107,107,0.15)'
                    optionBorder = '#FF6B6B'
                    optionColor = '#FF6B6B'
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selectedOption !== null}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '14px 16px', borderRadius: '12px',
                      background: optionBg, border: `1px solid ${optionBorder}`,
                      color: optionColor, fontSize: '14px',
                      cursor: selectedOption !== null ? 'default' : 'pointer',
                      textAlign: 'left', fontFamily: 'var(--font-sans)',
                      transition: 'all 0.2s ease',
                      width: '100%',
                    }}
                  >
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      background: selectedOption !== null && i === question.correctIndex ? '#45B7A020' : `${color}10`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 600, flexShrink: 0,
                      color: selectedOption !== null && i === question.correctIndex ? '#45B7A0' : color,
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: '16px', overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '12px 16px', borderRadius: '12px',
                    background: isCorrect ? 'rgba(69,183,160,0.08)' : 'rgba(255,107,107,0.08)',
                    border: `1px solid ${isCorrect ? '#45B7A020' : '#FF6B6B20'}`,
                  }}>
                    <p style={{
                      fontSize: '13px', color: '#B3B0A6', lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {isCorrect ? '✅ ' : '❌ '}{question.explanation}
                    </p>
                  </div>

                  <button
                    onClick={handleNext}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '8px', width: '100%', marginTop: '12px',
                      padding: '12px', borderRadius: '12px',
                      background: `${color}15`, border: `1px solid ${color}30`,
                      color: color, fontSize: '14px', fontWeight: 500,
                      cursor: 'pointer', fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {currentIndex < questions.length - 1 ? 'Próxima' : 'Ver resultado'}
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
