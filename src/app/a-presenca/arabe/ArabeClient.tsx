'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, ChevronLeft, ChevronRight, X, Trophy, RotateCcw, Eye } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────

type ArabicLetter = {
  letter: string
  name: string
  transliteration: string
  soundDescription: string
  forms: {
    isolated: string
    initial: string
    medial: string
    final: string
  }
}

type QuizState = {
  currentLetter: ArabicLetter
  options: string[]
  selected: string | null
  correct: boolean | null
  score: number
  total: number
}

// ─── Inline Data: 28 Arabic Letters ──────────────────────────────────────

const ARABIC_LETTERS: ArabicLetter[] = [
  {
    letter: 'ا',
    name: 'Alif',
    transliteration: 'a',
    soundDescription: 'Som de "a" longo, como em "pai". E a primeira letra do alfabeto e representa um som vocalico.',
    forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' },
  },
  {
    letter: 'ب',
    name: 'Ba',
    transliteration: 'b',
    soundDescription: 'Som de "b" como em "bola". Pronunciado com os labios juntos, identico ao portugues.',
    forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
  },
  {
    letter: 'ت',
    name: 'Ta',
    transliteration: 't',
    soundDescription: 'Som de "t" como em "teto". A ponta da lingua toca os dentes superiores.',
    forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
  },
  {
    letter: 'ث',
    name: 'Tha',
    transliteration: 'th',
    soundDescription: 'Som do "th" ingles em "think". A lingua fica entre os dentes, sem equivalente em portugues.',
    forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
  },
  {
    letter: 'ج',
    name: 'Jim',
    transliteration: 'j',
    soundDescription: 'Som de "j" como em "jogo". Em alguns dialetos soa como "g" em "gato".',
    forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
  },
  {
    letter: 'ح',
    name: 'Ha',
    transliteration: 'h',
    soundDescription: 'Som aspirado profundo da garganta. Como soprar ar quente, mas mais profundo que o "h" portugues.',
    forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
  },
  {
    letter: 'خ',
    name: 'Kha',
    transliteration: 'kh',
    soundDescription: 'Som gutural raspado, como o "j" espanhol em "Juan". Produzido no fundo do palato.',
    forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
  },
  {
    letter: 'د',
    name: 'Dal',
    transliteration: 'd',
    soundDescription: 'Som de "d" como em "dado". A lingua toca os dentes superiores, igual ao portugues.',
    forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' },
  },
  {
    letter: 'ذ',
    name: 'Dhal',
    transliteration: 'dh',
    soundDescription: 'Som do "th" ingles em "this". A lingua fica entre os dentes com vibracao.',
    forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' },
  },
  {
    letter: 'ر',
    name: 'Ra',
    transliteration: 'r',
    soundDescription: 'Som de "r" vibrante como em "rato". A ponta da lingua vibra contra o palato.',
    forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' },
  },
  {
    letter: 'ز',
    name: 'Zay',
    transliteration: 'z',
    soundDescription: 'Som de "z" como em "zebra". Identico ao som portugues.',
    forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' },
  },
  {
    letter: 'س',
    name: 'Sin',
    transliteration: 's',
    soundDescription: 'Som de "s" como em "sol". Suave e limpo, identico ao portugues.',
    forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
  },
  {
    letter: 'ش',
    name: 'Shin',
    transliteration: 'sh',
    soundDescription: 'Som de "ch" como em "chave". Identico ao portugues em muitos dialetos.',
    forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
  },
  {
    letter: 'ص',
    name: 'Sad',
    transliteration: 's (enfatico)',
    soundDescription: 'Som de "s" enfatico e pesado. A lingua se posiciona mais para tras, criando um som mais grave e profundo.',
    forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
  },
  {
    letter: 'ض',
    name: 'Dad',
    transliteration: 'd (enfatico)',
    soundDescription: 'Som de "d" enfatico e pesado. Unico do arabe — por isso o arabe e chamado "lingua do Dad".',
    forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
  },
  {
    letter: 'ط',
    name: 'Ta (enfatico)',
    transliteration: 't (enfatico)',
    soundDescription: 'Som de "t" enfatico e pesado. A lingua se curva para tras, criando um som mais escuro.',
    forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
  },
  {
    letter: 'ظ',
    name: 'Dha (enfatico)',
    transliteration: 'dh (enfatico)',
    soundDescription: 'Som de "dh" enfatico. Como o Dhal mas com enfase, a lingua entre os dentes com mais pressao.',
    forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
  },
  {
    letter: 'ع',
    name: 'Ayn',
    transliteration: '\'a',
    soundDescription: 'Som gutural profundo sem equivalente em portugues. Produzido contraindo os musculos da garganta. E um dos sons mais distintivos do arabe.',
    forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
  },
  {
    letter: 'غ',
    name: 'Ghayn',
    transliteration: 'gh',
    soundDescription: 'Som semelhante ao "r" frances em "Paris". Um gargarejo suave no fundo da garganta.',
    forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
  },
  {
    letter: 'ف',
    name: 'Fa',
    transliteration: 'f',
    soundDescription: 'Som de "f" como em "fogo". Os dentes superiores tocam o labio inferior.',
    forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
  },
  {
    letter: 'ق',
    name: 'Qaf',
    transliteration: 'q',
    soundDescription: 'Som de "k" mas produzido mais profundamente na garganta, na uvula. Mais pesado que o "k" comum.',
    forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
  },
  {
    letter: 'ك',
    name: 'Kaf',
    transliteration: 'k',
    soundDescription: 'Som de "k" como em "casa". Produzido no palato, identico ao portugues.',
    forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
  },
  {
    letter: 'ل',
    name: 'Lam',
    transliteration: 'l',
    soundDescription: 'Som de "l" como em "lua". A ponta da lingua toca o ceu da boca.',
    forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
  },
  {
    letter: 'م',
    name: 'Mim',
    transliteration: 'm',
    soundDescription: 'Som de "m" como em "mae". Os labios se fecham completamente.',
    forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
  },
  {
    letter: 'ن',
    name: 'Nun',
    transliteration: 'n',
    soundDescription: 'Som de "n" como em "nao". A lingua toca o ceu da boca atras dos dentes.',
    forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
  },
  {
    letter: 'ه',
    name: 'Ha (leve)',
    transliteration: 'h (leve)',
    soundDescription: 'Som de "h" aspirado suave, como quando voce sopra um espelho. Mais leve que o Ha gutural.',
    forms: { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
  },
  {
    letter: 'و',
    name: 'Waw',
    transliteration: 'w / u',
    soundDescription: 'Som de "u" longo ou "w" como no ingles "water". Pode funcionar como consoante ou vogal.',
    forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' },
  },
  {
    letter: 'ي',
    name: 'Ya',
    transliteration: 'y / i',
    soundDescription: 'Som de "i" longo ou "y" como em "yet" em ingles. Pode funcionar como consoante ou vogal.',
    forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function generateQuizOptions(correctLetter: ArabicLetter): string[] {
  const others = ARABIC_LETTERS.filter(l => l.name !== correctLetter.name)
  const shuffled = shuffleArray(others).slice(0, 3)
  const options = [...shuffled.map(l => l.name), correctLetter.name]
  return shuffleArray(options)
}

// ─── Component ───────────────────────────────────────────────────────────

export function ArabeClient() {
  const [view, setView] = useState<'list' | 'detail' | 'quiz'>('list')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [studied, setStudied] = useState<string[]>([])
  const [quiz, setQuiz] = useState<QuizState | null>(null)

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-arabic-letters')
      if (saved) setStudied(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  // Save studied letters
  const markStudied = (letterName: string) => {
    setStudied(prev => {
      if (prev.includes(letterName)) return prev
      const next = [...prev, letterName]
      localStorage.setItem('kalam-arabic-letters', JSON.stringify(next))
      return next
    })
  }

  // Navigation
  const goToLetter = (index: number) => {
    setSelectedIndex(index)
    setView('detail')
    markStudied(ARABIC_LETTERS[index].name)
  }

  const nextLetter = () => {
    if (selectedIndex < ARABIC_LETTERS.length - 1) {
      const next = selectedIndex + 1
      setSelectedIndex(next)
      markStudied(ARABIC_LETTERS[next].name)
    }
  }

  const prevLetter = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  // Quiz
  const startQuiz = useCallback(() => {
    const letter = ARABIC_LETTERS[Math.floor(Math.random() * ARABIC_LETTERS.length)]
    setQuiz({
      currentLetter: letter,
      options: generateQuizOptions(letter),
      selected: null,
      correct: null,
      score: 0,
      total: 0,
    })
    setView('quiz')
  }, [])

  const answerQuiz = (answer: string) => {
    if (!quiz || quiz.selected !== null) return
    const correct = answer === quiz.currentLetter.name
    setQuiz(prev => prev ? {
      ...prev,
      selected: answer,
      correct,
      score: correct ? prev.score + 1 : prev.score,
      total: prev.total + 1,
    } : null)
  }

  const nextQuizQuestion = () => {
    if (!quiz) return
    const letter = ARABIC_LETTERS[Math.floor(Math.random() * ARABIC_LETTERS.length)]
    setQuiz(prev => prev ? {
      ...prev,
      currentLetter: letter,
      options: generateQuizOptions(letter),
      selected: null,
      correct: null,
    } : null)
  }

  const studiedCount = studied.length

  // ─── Detail View ────────────────────────────────────────────────────

  if (view === 'detail') {
    const letter = ARABIC_LETTERS[selectedIndex]

    return (
      <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setView('list')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#B3B0A6',
              fontSize: '15px',
              cursor: 'pointer',
              padding: '0',
              marginBottom: '32px',
            }}
          >
            <ArrowLeft size={18} />
            Voltar
          </motion.button>

          {/* Letter display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '120px',
              color: '#C9A84C',
              lineHeight: '1.2',
              direction: 'rtl',
            }}>
              {letter.letter}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              color: '#F0EBE2',
              fontWeight: 600,
              marginTop: '8px',
            }}>
              {letter.name}
            </h2>
            <p style={{ fontSize: '16px', color: '#B3B0A6', marginTop: '4px' }}>
              Transliteracao: <span style={{ color: '#C9A84C', fontWeight: 500 }}>{letter.transliteration}</span>
            </p>
          </motion.div>

          {/* Four forms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            {(['isolated', 'initial', 'medial', 'final'] as const).map(form => (
              <div
                key={form}
                style={{
                  padding: '16px 8px',
                  borderRadius: '12px',
                  background: '#161220',
                  border: '1px solid #272230',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '32px',
                  color: '#F0EBE2',
                  direction: 'rtl',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                }}>
                  {letter.forms[form]}
                </p>
                <p style={{ fontSize: '11px', color: '#7A7870', textTransform: 'capitalize' }}>
                  {form === 'isolated' ? 'Isolada' : form === 'initial' ? 'Inicial' : form === 'medial' ? 'Medial' : 'Final'}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Sound description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              marginBottom: '32px',
            }}
          >
            <p style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 500, marginBottom: '8px' }}>
              Como pronunciar
            </p>
            <p style={{ fontSize: '15px', color: '#F0EBE2', lineHeight: '1.6' }}>
              {letter.soundDescription}
            </p>
          </motion.div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={prevLetter}
              disabled={selectedIndex === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                borderRadius: '10px',
                border: '1px solid #272230',
                background: '#161220',
                color: selectedIndex === 0 ? '#7A7870' : '#F0EBE2',
                fontSize: '14px',
                cursor: selectedIndex === 0 ? 'default' : 'pointer',
                opacity: selectedIndex === 0 ? 0.5 : 1,
              }}
            >
              <ChevronLeft size={16} />
              Anterior
            </button>

            <p style={{ fontSize: '13px', color: '#7A7870' }}>
              {selectedIndex + 1} / {ARABIC_LETTERS.length}
            </p>

            <button
              onClick={nextLetter}
              disabled={selectedIndex === ARABIC_LETTERS.length - 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                borderRadius: '10px',
                border: '1px solid #272230',
                background: '#161220',
                color: selectedIndex === ARABIC_LETTERS.length - 1 ? '#7A7870' : '#F0EBE2',
                fontSize: '14px',
                cursor: selectedIndex === ARABIC_LETTERS.length - 1 ? 'default' : 'pointer',
                opacity: selectedIndex === ARABIC_LETTERS.length - 1 ? 0.5 : 1,
              }}
            >
              Proxima
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </main>
    )
  }

  // ─── Quiz View ──────────────────────────────────────────────────────

  if (view === 'quiz' && quiz) {
    return (
      <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setView('list')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#B3B0A6',
              fontSize: '15px',
              cursor: 'pointer',
              padding: '0',
              marginBottom: '24px',
            }}
          >
            <ArrowLeft size={18} />
            Voltar
          </motion.button>

          {/* Score */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '24px',
              color: '#F0EBE2',
              fontWeight: 600,
            }}>
              Quiz
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              background: '#161220',
              border: '1px solid #272230',
            }}>
              <Trophy size={16} style={{ color: '#C9A84C' }} />
              <span style={{ fontSize: '15px', color: '#C9A84C', fontWeight: 600 }}>
                {quiz.score}/{quiz.total}
              </span>
            </div>
          </motion.div>

          {/* Question */}
          <motion.div
            key={quiz.currentLetter.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <p style={{ fontSize: '14px', color: '#7A7870', marginBottom: '16px' }}>
              Qual e o nome desta letra?
            </p>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '100px',
              color: '#C9A84C',
              lineHeight: '1.3',
              direction: 'rtl',
            }}>
              {quiz.currentLetter.letter}
            </p>
          </motion.div>

          {/* Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {quiz.options.map((option, i) => {
              const isSelected = quiz.selected === option
              const isCorrectAnswer = option === quiz.currentLetter.name
              const showResult = quiz.selected !== null

              let borderColor = '#272230'
              let bgColor = '#161220'
              let textColor = '#F0EBE2'

              if (showResult) {
                if (isCorrectAnswer) {
                  borderColor = 'rgba(76, 175, 80, 0.5)'
                  bgColor = 'rgba(76, 175, 80, 0.08)'
                  textColor = '#4CAF50'
                } else if (isSelected && !quiz.correct) {
                  borderColor = 'rgba(244, 67, 54, 0.5)'
                  bgColor = 'rgba(244, 67, 54, 0.08)'
                  textColor = '#F44336'
                }
              }

              return (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => answerQuiz(option)}
                  style={{
                    padding: '18px',
                    borderRadius: '12px',
                    border: `1px solid ${borderColor}`,
                    background: bgColor,
                    color: textColor,
                    fontSize: '17px',
                    fontWeight: 500,
                    cursor: quiz.selected !== null ? 'default' : 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>

          {/* Result + Next */}
          <AnimatePresence>
            {quiz.selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{
                  fontSize: '16px',
                  color: quiz.correct ? '#4CAF50' : '#F44336',
                  fontWeight: 500,
                  marginBottom: '20px',
                }}>
                  {quiz.correct ? 'Correto!' : `Incorreto. A resposta era ${quiz.currentLetter.name}.`}
                </p>
                <button
                  onClick={nextQuizQuestion}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '1px solid #C9A84C',
                    background: 'rgba(201,168,76,0.1)',
                    color: '#C9A84C',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Proxima pergunta
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    )
  }

  // ─── List View ──────────────────────────────────────────────────────

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/a-presenca"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#B3B0A6',
              fontSize: '15px',
              textDecoration: 'none',
              marginBottom: '24px',
            }}
          >
            <ArrowLeft size={18} />
            A Presenca
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Alfabeto Arabe
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: '15px', marginTop: '8px' }}>
            28 letras. A lingua do Quran.
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            padding: '20px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ fontSize: '15px', color: '#F0EBE2', fontWeight: 500 }}>Seu progresso</p>
            <p style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 600 }}>
              {studiedCount}/{ARABIC_LETTERS.length}
            </p>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: 'rgba(201,168,76,0.1)',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(studiedCount / ARABIC_LETTERS.length) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                height: '100%',
                borderRadius: '3px',
                background: 'linear-gradient(90deg, #C9A84C, #E8D48B)',
              }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '8px' }}>
            {studiedCount === 0 && 'Comece a explorar o alfabeto arabe'}
            {studiedCount > 0 && studiedCount < ARABIC_LETTERS.length && `${ARABIC_LETTERS.length - studiedCount} letras restantes`}
            {studiedCount === ARABIC_LETTERS.length && 'Parabens! Todas as letras estudadas!'}
          </p>
        </motion.div>

        {/* Quiz button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={startQuiz}
          className="card-hover"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            cursor: 'pointer',
            marginBottom: '24px',
            textAlign: 'left',
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(201,168,76,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Trophy size={20} style={{ color: '#C9A84C' }} />
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>Quiz de Letras</p>
            <p style={{ fontSize: '13px', color: '#7A7870' }}>Teste seu conhecimento do alfabeto</p>
          </div>
        </motion.button>

        {/* Letter grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
        }}>
          {ARABIC_LETTERS.map((letter, i) => {
            const isStudied = studied.includes(letter.name)

            return (
              <motion.button
                key={letter.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                onClick={() => goToLetter(i)}
                className="card-hover"
                style={{
                  padding: '16px 8px',
                  borderRadius: '12px',
                  background: '#161220',
                  border: isStudied ? '1px solid rgba(201,168,76,0.3)' : '1px solid #272230',
                  cursor: 'pointer',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {isStudied && (
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '4px',
                    background: 'rgba(201,168,76,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Check size={9} style={{ color: '#C9A84C' }} />
                  </div>
                )}
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '32px',
                  color: isStudied ? '#C9A84C' : '#F0EBE2',
                  direction: 'rtl',
                  lineHeight: '1.4',
                }}>
                  {letter.letter}
                </p>
                <p style={{ fontSize: '11px', color: '#7A7870', marginTop: '4px' }}>
                  {letter.name}
                </p>
              </motion.button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
