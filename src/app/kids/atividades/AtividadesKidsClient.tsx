'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronUp, ChevronDown, Check } from 'lucide-react'
import { KidsHeader, KidsStarBurst } from '@/components/kids'
import { markComplete, getProgress } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import {
  activitiesKids,
  type ActivityKids,
  type WordSearchPuzzle,
  type MemoryCard,
  type MatchPair,
  type TrueFalseQuestion,
  type OrderQuestion,
  type FillBlankQuestion,
} from '@/lib/data/kids/activities-kids'

// ─── Difficulty Badge ───────────────────────────────────────────────
function DifficultyBadge({ difficulty }: { difficulty: 'facil' | 'medio' | 'dificil' }) {
  const config = {
    facil: { label: 'Facil', color: '#45B7A0' },
    medio: { label: 'Medio', color: '#FFD93D' },
    dificil: { label: 'Dificil', color: '#FF6B6B' },
  }
  const { label, color } = config[difficulty]
  return (
    <span style={{
      fontSize: '10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color,
      padding: '3px 8px',
      borderRadius: '6px',
      background: `${color}15`,
      border: `1px solid ${color}25`,
    }}>
      {label}
    </span>
  )
}

// ─── Word Search Game ───────────────────────────────────────────────
function WordSearchGame({
  data,
  onComplete,
}: {
  data: WordSearchPuzzle
  onComplete: () => void
}) {
  const [foundWords, setFoundWords] = useState<string[]>([])
  const allFound = foundWords.length === data.words.length

  useEffect(() => {
    if (allFound) onComplete()
  }, [allFound, onComplete])

  function toggleWord(word: string) {
    if (foundWords.includes(word)) {
      setFoundWords(foundWords.filter(w => w !== word))
    } else {
      setFoundWords([...foundWords, word])
    }
  }

  return (
    <div>
      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${data.grid[0].length}, 1fr)`,
        gap: '2px',
        marginBottom: '24px',
        maxWidth: '320px',
        margin: '0 auto 24px',
      }}>
        {data.grid.flat().map((letter, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#1C1828',
              borderRadius: '6px',
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              fontWeight: 700,
              color: '#F0EBE2',
              userSelect: 'none',
            }}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Instructions */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        color: '#7A7870',
        textAlign: 'center',
        marginBottom: '16px',
      }}>
        Encontre as palavras no grid e toque para marcar!
      </p>

      {/* Word list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.words.map((word, i) => {
          const isFound = foundWords.includes(word)
          return (
            <motion.button
              key={word}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleWord(word)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: isFound ? '#45B7A015' : '#1C1828',
                border: isFound ? '1px solid #45B7A030' : '1px solid #272230',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: isFound ? '#45B7A0' : '#272230',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}>
                {isFound && <Check size={14} color="#0D0B12" strokeWidth={3} />}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: isFound ? '#45B7A0' : '#F0EBE2',
                  textDecoration: isFound ? 'line-through' : 'none',
                  transition: 'all 0.2s ease',
                }}>
                  {word}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  color: '#7A7870',
                  marginTop: '2px',
                }}>
                  {data.hints[i]}
                </p>
              </div>
            </motion.button>
          )
        })}
      </div>

      {allFound && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '20px',
            padding: '16px',
            borderRadius: '12px',
            background: '#45B7A015',
            border: '1px solid #45B7A030',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#45B7A0',
          }}>
            Parabens! Todas encontradas!
          </p>
        </motion.div>
      )}
    </div>
  )
}

// ─── Memory Game ────────────────────────────────────────────────────
interface MemoryCardState {
  id: string
  content: string
  type: 'arabic' | 'translation'
  pairId: string
  isFlipped: boolean
  isMatched: boolean
}

function MemoryGame({
  data,
  onComplete,
}: {
  data: MemoryCard[]
  onComplete: () => void
}) {
  const [cards, setCards] = useState<MemoryCardState[]>([])
  const [flippedIndices, setFlippedIndices] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const matchedCount = cards.filter(c => c.isMatched).length / 2
  const totalPairs = data.length
  const allMatched = cards.length > 0 && matchedCount === totalPairs

  useEffect(() => {
    const cardPairs: MemoryCardState[] = data.flatMap(m => [
      { id: m.id + '-ar', content: m.arabic, type: 'arabic' as const, pairId: m.id, isFlipped: false, isMatched: false },
      { id: m.id + '-tr', content: m.translation, type: 'translation' as const, pairId: m.id, isFlipped: false, isMatched: false },
    ])
    // Shuffle
    for (let i = cardPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]]
    }
    setCards(cardPairs)
  }, [data])

  useEffect(() => {
    if (allMatched) onComplete()
  }, [allMatched, onComplete])

  function handleFlip(index: number) {
    if (isChecking) return
    if (cards[index].isFlipped || cards[index].isMatched) return
    if (flippedIndices.length >= 2) return

    const newCards = [...cards]
    newCards[index] = { ...newCards[index], isFlipped: true }
    setCards(newCards)

    const newFlipped = [...flippedIndices, index]
    setFlippedIndices(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      setIsChecking(true)

      const [first, second] = newFlipped
      if (newCards[first].pairId === newCards[second].pairId) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map((c, i) =>
            i === first || i === second ? { ...c, isMatched: true } : c
          ))
          setFlippedIndices([])
          setIsChecking(false)
        }, 600)
      } else {
        // No match - flip back
        setTimeout(() => {
          setCards(prev => prev.map((c, i) =>
            i === first || i === second ? { ...c, isFlipped: false } : c
          ))
          setFlippedIndices([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  return (
    <div>
      {/* Stats */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        marginBottom: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#7A7870', marginBottom: '2px' }}>Movimentos</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: '#F0EBE2' }}>{moves}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#7A7870', marginBottom: '2px' }}>Pares</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: '#4ECDC4' }}>{matchedCount}/{totalPairs}</p>
        </div>
      </div>

      {/* Card grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
        maxWidth: '360px',
        margin: '0 auto',
      }}>
        {cards.map((card, i) => {
          const isVisible = card.isFlipped || card.isMatched
          return (
            <motion.button
              key={card.id}
              whileTap={!isVisible ? { scale: 0.95 } : undefined}
              onClick={() => handleFlip(i)}
              style={{
                aspectRatio: '1',
                borderRadius: '12px',
                background: card.isMatched ? '#45B7A015' : isVisible ? '#4ECDC415' : '#1C1828',
                border: card.isMatched ? '1px solid #45B7A030' : isVisible ? '1px solid #4ECDC430' : '1px solid #272230',
                cursor: isVisible ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                transition: 'all 0.3s ease',
              }}
            >
              {isVisible ? (
                <span style={{
                  fontFamily: card.type === 'arabic' ? 'var(--font-arabic)' : 'var(--font-sans)',
                  fontSize: card.type === 'arabic' ? 'clamp(14px, 3vw, 18px)' : 'clamp(9px, 2.2vw, 11px)',
                  fontWeight: card.type === 'arabic' ? 400 : 600,
                  color: card.isMatched ? '#45B7A0' : '#F0EBE2',
                  direction: card.type === 'arabic' ? 'rtl' : 'ltr',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  wordBreak: 'break-word',
                }}>
                  {card.content}
                </span>
              ) : (
                <span style={{ fontSize: '20px' }}>?</span>
              )}
            </motion.button>
          )
        })}
      </div>

      {allMatched && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '20px',
            padding: '16px',
            borderRadius: '12px',
            background: '#45B7A015',
            border: '1px solid #45B7A030',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#45B7A0',
            marginBottom: '4px',
          }}>
            Parabens! Todos os pares encontrados!
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: '#B3B0A6',
          }}>
            Voce completou em {moves} movimentos
          </p>
        </motion.div>
      )}
    </div>
  )
}

// ─── Match Game ─────────────────────────────────────────────────────
function MatchGame({
  data,
  onComplete,
}: {
  data: MatchPair[]
  onComplete: () => void
}) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null)
  const [shuffledRight, setShuffledRight] = useState<MatchPair[]>([])

  const allMatched = matched.length === data.length

  useEffect(() => {
    const shuffled = [...data].sort(() => Math.random() - 0.5)
    setShuffledRight(shuffled)
  }, [data])

  useEffect(() => {
    if (allMatched && data.length > 0) onComplete()
  }, [allMatched, data.length, onComplete])

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const pair = data.find(p => p.left === selectedLeft)
      if (pair && pair.right === selectedRight) {
        // Correct!
        setMatched(prev => [...prev, pair.id])
        setSelectedLeft(null)
        setSelectedRight(null)
      } else {
        // Wrong!
        setWrongPair({ left: selectedLeft, right: selectedRight })
        setTimeout(() => {
          setWrongPair(null)
          setSelectedLeft(null)
          setSelectedRight(null)
        }, 800)
      }
    }
  }, [selectedLeft, selectedRight, data])

  return (
    <div>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        color: '#7A7870',
        textAlign: 'center',
        marginBottom: '16px',
      }}>
        Toque um profeta e depois seu milagre para combinar!
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        {/* Left column - Prophets */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.map(pair => {
            const isMatched = matched.includes(pair.id)
            const isSelected = selectedLeft === pair.left
            const isWrong = wrongPair?.left === pair.left

            return (
              <motion.button
                key={pair.id + '-left'}
                animate={isWrong ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  if (isMatched || wrongPair) return
                  setSelectedLeft(isSelected ? null : pair.left)
                }}
                style={{
                  padding: '12px 10px',
                  borderRadius: '10px',
                  background: isMatched ? '#45B7A010' : isSelected ? '#45B7A015' : '#1C1828',
                  border: isMatched ? '1px solid #45B7A025' : isSelected ? '1px solid #45B7A040' : isWrong ? '1px solid #FF6B6B40' : '1px solid #272230',
                  cursor: isMatched ? 'default' : 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: isMatched ? '#45B7A0' : isSelected ? '#F0EBE2' : '#B3B0A6',
                  textAlign: 'center',
                  opacity: isMatched ? 0.6 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                {pair.left}
              </motion.button>
            )
          })}
        </div>

        {/* Right column - Miracles */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {shuffledRight.map(pair => {
            const isMatched = matched.includes(pair.id)
            const isSelected = selectedRight === pair.right
            const isWrong = wrongPair?.right === pair.right

            return (
              <motion.button
                key={pair.id + '-right'}
                animate={isWrong ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  if (isMatched || wrongPair) return
                  setSelectedRight(isSelected ? null : pair.right)
                }}
                style={{
                  padding: '12px 10px',
                  borderRadius: '10px',
                  background: isMatched ? '#45B7A010' : isSelected ? '#45B7A015' : '#1C1828',
                  border: isMatched ? '1px solid #45B7A025' : isSelected ? '1px solid #45B7A040' : isWrong ? '1px solid #FF6B6B40' : '1px solid #272230',
                  cursor: isMatched ? 'default' : 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  color: isMatched ? '#45B7A0' : isSelected ? '#F0EBE2' : '#B3B0A6',
                  textAlign: 'center',
                  opacity: isMatched ? 0.6 : 1,
                  lineHeight: 1.3,
                  transition: 'all 0.2s ease',
                }}
              >
                {pair.right}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Score */}
      <div style={{
        marginTop: '16px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          color: '#B3B0A6',
        }}>
          {matched.length} / {data.length} pares
        </p>
      </div>

      {allMatched && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '16px',
            padding: '16px',
            borderRadius: '12px',
            background: '#45B7A015',
            border: '1px solid #45B7A030',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#45B7A0',
          }}>
            Parabens! Todos combinados!
          </p>
        </motion.div>
      )}
    </div>
  )
}

// ─── True/False Game ────────────────────────────────────────────────
function TrueFalseGame({
  data,
  onComplete,
}: {
  data: TrueFalseQuestion[]
  onComplete: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<boolean | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const isFinished = currentIndex >= data.length
  const question = !isFinished ? data[currentIndex] : null

  useEffect(() => {
    if (isFinished) onComplete()
  }, [isFinished, onComplete])

  function handleAnswer(answer: boolean) {
    if (answered !== null || !question) return
    const correct = answer === question.isTrue
    setAnswered(answer)
    setIsCorrect(correct)
    if (correct) setScore(s => s + 1)
  }

  function handleNext() {
    setCurrentIndex(i => i + 1)
    setAnswered(null)
    setIsCorrect(null)
  }

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: '24px',
          borderRadius: '16px',
          background: '#45B7A015',
          border: '1px solid #45B7A030',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '20px',
          fontWeight: 700,
          color: '#45B7A0',
          marginBottom: '4px',
        }}>
          Parabens!
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          color: '#B3B0A6',
        }}>
          Voce acertou {score} de {data.length} perguntas!
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#7A7870' }}>
          Pergunta {currentIndex + 1} de {data.length}
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontWeight: 700, color: '#45B7A0' }}>
          {score} acertos
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '4px',
        borderRadius: '2px',
        background: '#272230',
        marginBottom: '24px',
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{ width: `${((currentIndex) / data.length) * 100}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: '100%',
            borderRadius: '2px',
            background: '#A78BFA',
          }}
        />
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
            padding: '20px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '16px',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.5,
              textAlign: 'center',
            }}>
              {question?.statement}
            </p>
          </div>

          {/* Answer buttons */}
          {answered === null ? (
            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(true)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#45B7A015',
                  border: '1px solid #45B7A030',
                  color: '#45B7A0',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Verdadeiro
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(false)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#FF6B6B15',
                  border: '1px solid #FF6B6B30',
                  color: '#FF6B6B',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Falso
              </motion.button>
            </div>
          ) : (
            <div>
              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: isCorrect ? '#45B7A010' : '#FF6B6B10',
                  border: `1px solid ${isCorrect ? '#45B7A025' : '#FF6B6B25'}`,
                  marginBottom: '12px',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: isCorrect ? '#45B7A0' : '#FF6B6B',
                  marginBottom: '6px',
                }}>
                  {isCorrect ? 'Correto!' : 'Incorreto!'}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  color: '#B3B0A6',
                  lineHeight: 1.5,
                }}>
                  {question?.explanation}
                </p>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleNext}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  background: '#A78BFA15',
                  border: '1px solid #A78BFA30',
                  color: '#A78BFA',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {currentIndex < data.length - 1 ? 'Proxima pergunta' : 'Ver resultado'}
              </motion.button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Order Game ─────────────────────────────────────────────────────
function OrderGame({
  data,
  onComplete,
}: {
  data: OrderQuestion
  onComplete: () => void
}) {
  const [items, setItems] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    // Start with shuffled order
    const shuffled = [...data.items].sort(() => Math.random() - 0.5)
    setItems(shuffled)
  }, [data])

  function moveItem(index: number, direction: 'up' | 'down') {
    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= items.length) return

    const newItems = [...items]
    const temp = newItems[index]
    newItems[index] = newItems[newIndex]
    newItems[newIndex] = temp
    setItems(newItems)
    setChecked(false)
  }

  function checkOrder() {
    const correct = data.correctOrder.every(
      (correctIdx, position) => items[position] === data.items[correctIdx]
    )
    setIsCorrect(correct)
    setChecked(true)
    if (correct) onComplete()
  }

  return (
    <div>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        color: '#7A7870',
        textAlign: 'center',
        marginBottom: '16px',
      }}>
        Use as setas para colocar na ordem correta!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        {items.map((item, i) => {
          const isCorrectPosition = checked && data.items[data.correctOrder[i]] === item
          const isWrongPosition = checked && !isCorrectPosition

          return (
            <motion.div
              key={item}
              layout
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '12px',
                background: isCorrectPosition ? '#45B7A010' : isWrongPosition ? '#FF6B6B10' : '#1C1828',
                border: isCorrectPosition ? '1px solid #45B7A025' : isWrongPosition ? '1px solid #FF6B6B25' : '1px solid #272230',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Position number */}
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: isCorrectPosition ? '#45B7A020' : '#272230',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                fontWeight: 700,
                color: isCorrectPosition ? '#45B7A0' : '#7A7870',
                flexShrink: 0,
              }}>
                {i + 1}
              </div>

              {/* Item text */}
              <p style={{
                flex: 1,
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                color: isCorrectPosition ? '#45B7A0' : isWrongPosition ? '#FF6B6B' : '#F0EBE2',
              }}>
                {item}
              </p>

              {/* Move buttons */}
              {!checked && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <button
                    onClick={() => moveItem(i, 'up')}
                    disabled={i === 0}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      background: i === 0 ? 'transparent' : '#272230',
                      border: 'none',
                      cursor: i === 0 ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: i === 0 ? 0.3 : 1,
                    }}
                  >
                    <ChevronUp size={14} color="#7A7870" />
                  </button>
                  <button
                    onClick={() => moveItem(i, 'down')}
                    disabled={i === items.length - 1}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      background: i === items.length - 1 ? 'transparent' : '#272230',
                      border: 'none',
                      cursor: i === items.length - 1 ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: i === items.length - 1 ? 0.3 : 1,
                    }}
                  >
                    <ChevronDown size={14} color="#7A7870" />
                  </button>
                </div>
              )}

              {/* Correct/wrong indicator */}
              {checked && (
                <span style={{ fontSize: '16px' }}>
                  {isCorrectPosition ? '✅' : '❌'}
                </span>
              )}
            </motion.div>
          )
        })}
      </div>

      {!checked ? (
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={checkOrder}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '12px',
            background: '#FFD93D15',
            border: '1px solid #FFD93D30',
            color: '#FFD93D',
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Verificar ordem
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isCorrect ? (
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              background: '#45B7A015',
              border: '1px solid #45B7A030',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#45B7A0',
              }}>
                Parabens! Ordem correta!
              </p>
            </div>
          ) : (
            <button
              onClick={() => setChecked(false)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: '#FF6B6B15',
                border: '1px solid #FF6B6B30',
                color: '#FF6B6B',
                fontFamily: 'var(--font-serif)',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Tentar novamente
            </button>
          )}
        </motion.div>
      )}
    </div>
  )
}

// ─── Fill Blank Game ────────────────────────────────────────────────
function FillBlankGame({
  data,
  onComplete,
}: {
  data: FillBlankQuestion[]
  onComplete: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)

  const isFinished = currentIndex >= data.length
  const question = !isFinished ? data[currentIndex] : null
  const isCorrect = selectedOption === question?.correctIndex

  useEffect(() => {
    if (isFinished) onComplete()
  }, [isFinished, onComplete])

  function handleSelect(optionIndex: number) {
    if (answered) return
    setSelectedOption(optionIndex)
    setAnswered(true)
    if (optionIndex === question?.correctIndex) {
      setScore(s => s + 1)
    }
  }

  function handleNext() {
    setCurrentIndex(i => i + 1)
    setSelectedOption(null)
    setAnswered(false)
  }

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: '24px',
          borderRadius: '16px',
          background: '#45B7A015',
          border: '1px solid #45B7A030',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '20px',
          fontWeight: 700,
          color: '#45B7A0',
          marginBottom: '4px',
        }}>
          Parabens!
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          color: '#B3B0A6',
        }}>
          Voce acertou {score} de {data.length} frases!
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#7A7870' }}>
          Frase {currentIndex + 1} de {data.length}
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontWeight: 700, color: '#FF6B6B' }}>
          {score} acertos
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '4px',
        borderRadius: '2px',
        background: '#272230',
        marginBottom: '24px',
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{ width: `${((currentIndex) / data.length) * 100}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: '100%',
            borderRadius: '2px',
            background: '#FF6B6B',
          }}
        />
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
          {/* Sentence with blank */}
          <div style={{
            padding: '20px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.6,
            }}>
              {question?.sentence.replace('___', answered && isCorrect
                ? question.blank
                : '______'
              )}
            </p>
          </div>

          {/* Options */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginBottom: '16px',
          }}>
            {question?.options.map((option, i) => {
              const isSelected = selectedOption === i
              const isCorrectOption = i === question.correctIndex
              let bg = '#1C1828'
              let border = '1px solid #272230'
              let color = '#F0EBE2'

              if (answered) {
                if (isCorrectOption) {
                  bg = '#45B7A015'
                  border = '1px solid #45B7A040'
                  color = '#45B7A0'
                } else if (isSelected && !isCorrectOption) {
                  bg = '#FF6B6B15'
                  border = '1px solid #FF6B6B40'
                  color = '#FF6B6B'
                } else {
                  color = '#7A7870'
                }
              }

              return (
                <motion.button
                  key={i}
                  whileTap={!answered ? { scale: 0.95 } : undefined}
                  onClick={() => handleSelect(i)}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: bg,
                    border,
                    color,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: answered ? 'default' : 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>

          {/* Next button */}
          {answered && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleNext}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: '#FF6B6B15',
                border: '1px solid #FF6B6B30',
                color: '#FF6B6B',
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {currentIndex < data.length - 1 ? 'Proxima frase' : 'Ver resultado'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Coloring Placeholder ───────────────────────────────────────────
function ColoringPlaceholder() {
  return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <p style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</p>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        fontWeight: 700,
        color: '#F0EBE2',
        marginBottom: '8px',
      }}>
        Em breve!
      </p>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        color: '#B3B0A6',
        lineHeight: 1.5,
      }}>
        Estamos preparando lindos desenhos islamicos para voce colorir. Aguarde novidades!
      </p>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// ─── Main Component ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════

export function AtividadesKidsClient() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showStars, setShowStars] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const stars = progress?.stars ?? 0
  const completedActivities = progress?.completedActivities ?? []

  const activity = selectedActivity
    ? activitiesKids.find(a => a.id === selectedActivity) ?? null
    : null

  const handleComplete = useCallback(() => {
    if (!activity || completed) return
    setCompleted(true)
    const updated = markComplete('completedActivities', activity.id, 3)
    setProgress(updated)
    setShowStars(true)
    setTimeout(() => setShowStars(false), 1500)
  }, [activity, completed])

  function selectActivity(id: string) {
    const act = activitiesKids.find(a => a.id === id)
    if (act && act.data === null) return // coloring - disabled
    setSelectedActivity(id)
    setCompleted(false)
  }

  function goBack() {
    setSelectedActivity(null)
    setCompleted(false)
  }

  // ─── Activity Play Mode ─────────────────────────────────────────
  if (activity) {
    return (
      <main className="min-h-screen" style={{ background: '#0D0B12' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

          {/* Star burst animation */}
          {showStars && <KidsStarBurst />}

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <button
              onClick={goBack}
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
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = activity.color }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#7A7870' }}
            >
              <ArrowLeft size={14} />
              Voltar
            </button>
          </motion.div>

          {/* Activity header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            style={{ marginBottom: '24px' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: `${activity.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}>
                {activity.emoji}
              </div>
              <div>
                <h1 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 4vw, 26px)',
                  fontWeight: 700,
                  color: '#F0EBE2',
                  lineHeight: 1.2,
                }}>
                  {activity.title}
                </h1>
                <DifficultyBadge difficulty={activity.difficulty} />
              </div>
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#B3B0A6',
              lineHeight: 1.5,
            }}>
              {activity.description}
            </p>
          </motion.div>

          {/* Game area */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {activity.type === 'word-search' && (
              <WordSearchGame data={activity.data as WordSearchPuzzle} onComplete={handleComplete} />
            )}
            {activity.type === 'memory' && (
              <MemoryGame data={activity.data as MemoryCard[]} onComplete={handleComplete} />
            )}
            {activity.type === 'match' && (
              <MatchGame data={activity.data as MatchPair[]} onComplete={handleComplete} />
            )}
            {activity.type === 'true-false' && (
              <TrueFalseGame data={activity.data as TrueFalseQuestion[]} onComplete={handleComplete} />
            )}
            {activity.type === 'order' && (
              <OrderGame data={activity.data as OrderQuestion} onComplete={handleComplete} />
            )}
            {activity.type === 'fill-blank' && (
              <FillBlankGame data={activity.data as FillBlankQuestion[]} onComplete={handleComplete} />
            )}
            {activity.type === 'coloring' && (
              <ColoringPlaceholder />
            )}
          </motion.div>

        </div>
      </main>
    )
  }

  // ─── Activity Selection View ────────────────────────────────────
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="🎮"
          title="Atividades"
          subtitle="Jogos e desafios para aprender brincando!"
          backHref="/kids"
          color="#FF8C42"
          stars={stars}
        />

        {/* Star burst animation */}
        {showStars && <KidsStarBurst />}

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
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: '#B3B0A6',
          }}>
            Atividades completas
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            fontWeight: 700,
            color: '#F0EBE2',
          }}>
            {completedActivities.length} / {activitiesKids.filter(a => a.data !== null).length}
          </p>
        </motion.div>

        {/* Activities list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {activitiesKids.map((act, i) => {
            const isCompleted = completedActivities.includes(act.id)
            const isDisabled = act.data === null

            return (
              <motion.button
                key={act.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.03 * (i + 1) }}
                whileTap={!isDisabled ? { scale: 0.98 } : undefined}
                onClick={() => selectActivity(act.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  cursor: isDisabled ? 'default' : 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  opacity: isDisabled ? 0.5 : 1,
                  transition: 'border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isDisabled) (e.currentTarget as HTMLButtonElement).style.borderColor = `${act.color}40`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#272230'
                }}
              >
                {/* Emoji circle */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: `${act.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}>
                  {act.emoji}
                </div>

                {/* Text content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {act.title}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: '#7A7870',
                    lineHeight: 1.4,
                  }}>
                    {act.description}
                  </p>
                  <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <DifficultyBadge difficulty={act.difficulty} />
                    {isDisabled && (
                      <span style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        color: '#7A7870',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#27223050',
                        border: '1px solid #272230',
                      }}>
                        Em breve
                      </span>
                    )}
                  </div>
                </div>

                {/* Completed indicator */}
                {isCompleted && <span style={{ fontSize: '16px', flexShrink: 0 }}>✅</span>}
              </motion.button>
            )
          })}
        </div>

      </div>
    </main>
  )
}
