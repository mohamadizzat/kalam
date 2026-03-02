'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Brain, RotateCcw, ChevronRight, Star, Check, X } from 'lucide-react'

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#4CAF7A',
  red: '#E05050',
} as const

// ── Quiz data ─────────────────────────────────────────────────────────────────
interface Question {
  id: number
  question: string
  options: string[]
  correct: number // index
  explanation: string
  category: string
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Quantos capítulos (Suratas) tem o Alcorão?',
    options: ['99', '114', '124', '30'],
    correct: 1,
    explanation: 'O Alcorão tem 114 Suratas (capítulos), que variam de 3 a 286 versículos.',
    category: 'Alcorão',
  },
  {
    id: 2,
    question: 'O que significa a palavra "Islã" em árabe?',
    options: ['Paz e fé', 'Submissão a Deus', 'Caminho reto', 'Gratidão eterna'],
    correct: 1,
    explanation: '"Islã" (إسلام) significa submissão/entrega a Deus. Deriva da raiz "salama" que também dá origem a "salam" (paz).',
    category: 'Fundamentos',
  },
  {
    id: 3,
    question: 'Qual é o primeiro pilar do Islã?',
    options: ['Oração (Salah)', 'Jejum (Sawm)', 'Testemunho de fé (Shahada)', 'Peregrinação (Hajj)'],
    correct: 2,
    explanation: 'A Shahada é o primeiro pilar: "Não há divindade senão Deus, e Muhammad é o Mensageiro de Deus."',
    category: 'Pilares',
  },
  {
    id: 4,
    question: 'Qual anjo revelou o Alcorão ao Profeta Muhammad ﷺ?',
    options: ['Mikail (Miguel)', 'Izrail (Azrael)', 'Israfil', 'Jibril (Gabriel)'],
    correct: 3,
    explanation: 'Jibril (Gabriel), o anjo da revelação, foi o responsável por transmitir as palavras do Alcorão ao Profeta Muhammad ﷺ durante 23 anos.',
    category: 'Alcorão',
  },
  {
    id: 5,
    question: 'Em qual cidade nasceu o Profeta Muhammad ﷺ?',
    options: ['Medina', 'Jerusalém', 'Meca', 'Bagdá'],
    correct: 2,
    explanation: 'O Profeta Muhammad ﷺ nasceu em Meca (atual Arábia Saudita) por volta de 570 d.C., no Ano do Elefante.',
    category: 'Profetas',
  },
  {
    id: 6,
    question: 'Quantas orações diárias um muçulmano realiza?',
    options: ['3', '4', '5', '7'],
    correct: 2,
    explanation: 'As 5 orações diárias (Salah) são: Fajr (aurora), Dhuhr (meio-dia), Asr (tarde), Maghrib (pôr do sol) e Isha (noite).',
    category: 'Pilares',
  },
  {
    id: 7,
    question: 'Qual é a Surata mais longa do Alcorão?',
    options: ['Al-Fatihah', 'Al-Baqarah', 'Al-Imran', 'An-Nisa'],
    correct: 1,
    explanation: 'Al-Baqarah (A Vaca) é a Surata mais longa com 286 versículos. É a segunda Surata do Alcorão.',
    category: 'Alcorão',
  },
  {
    id: 8,
    question: 'O que é Zakat?',
    options: ['A oração do viajante', 'Um tipo de jejum voluntário', 'A purificação da riqueza através da caridade', 'A peregrinação menor'],
    correct: 2,
    explanation: 'Zakat é o 4º pilar do Islã — 2,5% dos bens acumulados por um ano são doados aos necessitados. É um ato de purificação da riqueza.',
    category: 'Pilares',
  },
  {
    id: 9,
    question: 'Qual é a primeira Surata do Alcorão?',
    options: ['Al-Baqarah', 'Al-Ikhlas', 'Al-Fatihah', 'Al-Nas'],
    correct: 2,
    explanation: 'Al-Fatihah (A Abertura) é a primeira Surata do Alcorão, com 7 versículos. É recitada em cada rakah (unidade) da oração.',
    category: 'Alcorão',
  },
  {
    id: 10,
    question: 'Quem construiu a Kaaba em Meca?',
    options: ['O Profeta Muhammad ﷺ', 'Sulayman (Salomão)', 'Ibrahim (Abraão) e Ismael', 'Musa (Moisés)'],
    correct: 2,
    explanation: 'Ibrahim (Abraão) e seu filho Ismael construíram a Kaaba como Casa de adoração a Deus, conforme narrado no Alcorão (2:127).',
    category: 'Profetas',
  },
  {
    id: 11,
    question: 'Quantos Nomes de Deus (Asma al-Husna) são citados na tradição islâmica?',
    options: ['33', '66', '99', '111'],
    correct: 2,
    explanation: 'A tradição islâmica preservou 99 Nomes de Allah (Asma al-Husna), cada um descrevendo um atributo divino como Ar-Rahman (O Misericordioso) e Al-Hakim (O Sábio).',
    category: 'Fundamentos',
  },
  {
    id: 12,
    question: 'Qual Profeta foi lançado ao mar e engolido por um grande peixe?',
    options: ['Musa (Moisés)', 'Yunus (Jonas)', 'Ibrahim (Abraão)', 'Dawud (Davi)'],
    correct: 1,
    explanation: 'Yunus (Jonas) foi engolido por um peixe após deixar sua missão prematuramente. Ele fez du\'a dentro do peixe: "Não há divindade senão Tu, glória a Ti, fui dos injustos." (21:87)',
    category: 'Profetas',
  },
  {
    id: 13,
    question: 'O que é Hajj?',
    options: ['O jejum do Ramadan', 'A peregrinação a Meca (5º pilar)', 'A oração noturna especial', 'A ablução antes da oração'],
    correct: 1,
    explanation: 'Hajj é o 5º pilar do Islã — a peregrinação a Meca, obrigatória uma vez na vida para quem tem condições físicas e financeiras. Ocorre no mês de Dhul Hijjah.',
    category: 'Pilares',
  },
  {
    id: 14,
    question: 'Qual Profeta foi jogado ao fogo, mas não se queimou?',
    options: ['Musa (Moisés)', 'Isa (Jesus)', 'Ibrahim (Abraão)', 'Nuh (Noé)'],
    correct: 2,
    explanation: 'Ibrahim (Abraão) foi lançado ao fogo pelo rei Namrud por destruir os ídolos. Deus ordenou: "Ó fogo, sê fresco e seguro para Ibrahim." (21:69) Ele saiu ileso.',
    category: 'Profetas',
  },
  {
    id: 15,
    question: 'Qual o significado da palavra "Alcorão" em árabe?',
    options: ['O Livro Sagrado', 'A Recitação', 'A Verdade Eterna', 'A Palavra de Deus'],
    correct: 1,
    explanation: '"Alcorão" (القرآن) significa "a recitação" ou "o que se recita". Deriva da raiz "qara\'a" (ler, recitar), enfatizando sua natureza oral e auditiva.',
    category: 'Alcorão',
  },
  {
    id: 16,
    question: 'Qual Profeta é mencionado mais vezes no Alcorão?',
    options: ['Muhammad ﷺ', 'Ibrahim (Abraão)', 'Musa (Moisés)', 'Isa (Jesus)'],
    correct: 2,
    explanation: 'Musa (Moisés) é o Profeta mais mencionado no Alcorão, com mais de 130 referências. Sua história de libertação do Egito é um tema central da narrativa corânica.',
    category: 'Profetas',
  },
  {
    id: 17,
    question: 'O que é Wudu?',
    options: ['A oração do amanhecer', 'A ablução ritual de purificação', 'O jejum voluntário', 'A caridade espontânea'],
    correct: 1,
    explanation: 'Wudu é a ablução ritual — lavagem de mãos, rosto, braços e pés com água limpa — realizada antes das orações e da leitura do Alcorão.',
    category: 'Práticas',
  },
  {
    id: 18,
    question: 'Qual é a cidade mais sagrada do Islã?',
    options: ['Medina', 'Jerusalém', 'Meca', 'Bagdá'],
    correct: 2,
    explanation: 'Meca é a cidade mais sagrada do Islã. Nela fica a Grande Mesquita (Masjid al-Haram) e a Kaaba, para onde todos os muçulmanos do mundo se voltam na oração.',
    category: 'Fundamentos',
  },
  {
    id: 19,
    question: 'Qual é o mês sagrado de jejum no Islã?',
    options: ['Muharram', 'Rajab', 'Sha\'ban', 'Ramadan'],
    correct: 3,
    explanation: 'Ramadan é o 9º mês do calendário islâmico, quando o Alcorão começou a ser revelado (2:185). Durante este mês, os muçulmanos jejuam do amanhecer ao pôr do sol.',
    category: 'Pilares',
  },
  {
    id: 20,
    question: 'O Profeta Isa (Jesus) no Alcorão é descrito como:',
    options: ['Deus encarnado', 'Filho de Deus', 'Um Profeta e Mensageiro nascido de uma virgem', 'Um anjo enviado'],
    correct: 2,
    explanation: 'No Alcorão, Isa (Jesus) é um dos maiores Profetas — nascido de Maryam (Maria) sem pai, realizou milagres com permissão de Deus, e voltará antes do Dia do Juízo. É altamente honrado, mas não divino.',
    category: 'Profetas',
  },
]

type QuizState = 'start' | 'playing' | 'answered' | 'finished'

// ── Main component ────────────────────────────────────────────────────────────
export default function QuizClient() {
  const [state, setState] = useState<QuizState>('start')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [shuffled] = useState(() => [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 15))

  const currentQ = shuffled[currentIdx]
  const total = shuffled.length

  const handleStart = useCallback(() => {
    setState('playing')
  }, [])

  const handleSelect = useCallback((optionIdx: number) => {
    if (state !== 'playing') return
    setSelectedOption(optionIdx)
    const correct = optionIdx === currentQ.correct
    if (correct) setScore(s => s + 1)
    setAnswers(prev => [...prev, correct])
    setState('answered')
  }, [state, currentQ])

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= total) {
      setState('finished')
    } else {
      setCurrentIdx(i => i + 1)
      setSelectedOption(null)
      setState('playing')
    }
  }, [currentIdx, total])

  const handleRestart = useCallback(() => {
    setState('start')
    setCurrentIdx(0)
    setSelectedOption(null)
    setScore(0)
    setAnswers([])
  }, [])

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  const getScoreLabel = () => {
    if (percentage >= 90) return { label: 'Excelente!', arabic: 'مَاشَاءَ اللَّه', desc: 'Seu conhecimento é admirável.' }
    if (percentage >= 70) return { label: 'Muito bom!', arabic: 'الْحَمْدُ لِلَّه', desc: 'Você está no caminho certo.' }
    if (percentage >= 50) return { label: 'Bom começo!', arabic: 'إِنْ شَاءَ اللَّه', desc: 'Continue aprendendo.' }
    return { label: 'Continue estudando!', arabic: 'اللَّهُ أَكْبَر', desc: 'Cada pergunta é uma oportunidade de crescer.' }
  }

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── Hero ──────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 24px 48px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 13, marginBottom: 32 }}>
              <ArrowLeft size={14} />
              Ferramentas
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Brain size={24} style={{ color: T.gold }} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 700, color: T.text, marginBottom: 8 }}>
              Quiz Islâmico
            </h1>
            <p style={{ fontSize: 14, color: T.secondary }}>
              {total} perguntas — Alcorão, Profetas, Pilares e mais
            </p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px 80px' }}>
        <AnimatePresence mode="wait">

          {/* ── START ──────────────────────────────────── */}
          {state === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div style={{ borderRadius: 16, border: `1px solid ${T.border}`, background: T.surface, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: 15, color: T.secondary, lineHeight: 1.7, marginBottom: 28 }}>
                  Teste o que você sabe sobre o Islã — seus fundamentos, Profetas, Alcorão e práticas diárias.
                  Não precisa ser especialista para começar.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
                  {['Alcorão', 'Profetas', 'Pilares', 'Fundamentos'].map(cat => (
                    <span key={cat} style={{ padding: '6px 14px', borderRadius: 20, border: `1px solid ${T.border}`, background: T.elevated, color: T.muted, fontSize: 12 }}>
                      {cat}
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleStart}
                  style={{
                    padding: '14px 36px',
                    borderRadius: 14,
                    border: '1px solid rgba(201,168,76,0.4)',
                    background: 'rgba(201,168,76,0.12)',
                    color: T.gold,
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Começar Quiz
                </button>
              </div>
            </motion.div>
          )}

          {/* ── PLAYING / ANSWERED ─────────────────────── */}
          {(state === 'playing' || state === 'answered') && (
            <motion.div key={`q-${currentIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              {/* Progress */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: T.muted }}>Pergunta {currentIdx + 1} de {total}</span>
                  <span style={{ fontSize: 13, color: T.gold, fontWeight: 600 }}>{score} corretas</span>
                </div>
                <div style={{ height: 4, background: T.border, borderRadius: 2 }}>
                  <motion.div
                    style={{ height: '100%', background: T.gold, borderRadius: 2 }}
                    initial={{ width: `${(currentIdx / total) * 100}%` }}
                    animate={{ width: `${((currentIdx + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Category badge */}
              <div style={{ marginBottom: 16 }}>
                <span style={{ padding: '4px 12px', borderRadius: 20, border: `1px solid ${T.border}`, background: T.surface, color: T.muted, fontSize: 12 }}>
                  {currentQ.category}
                </span>
              </div>

              {/* Question */}
              <div style={{ borderRadius: 16, border: `1px solid ${T.border}`, background: T.surface, padding: '24px', marginBottom: 16 }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 600, color: T.text, lineHeight: 1.4, margin: 0 }}>
                  {currentQ.question}
                </h2>
              </div>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx
                  const isCorrect = idx === currentQ.correct
                  const showResult = state === 'answered'

                  let borderColor: string = T.border
                  let bgColor: string = T.surface
                  let textColor: string = T.text

                  if (showResult) {
                    if (isCorrect) { borderColor = T.green; bgColor = `${T.green}15`; textColor = T.green }
                    else if (isSelected && !isCorrect) { borderColor = T.red; bgColor = `${T.red}12`; textColor = T.red }
                  } else if (isSelected) {
                    borderColor = T.gold
                    bgColor = 'rgba(201,168,76,0.08)'
                  }

                  return (
                    <motion.button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={state === 'answered'}
                      whileHover={state === 'playing' ? { scale: 1.01 } : {}}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        padding: '14px 18px',
                        borderRadius: 12,
                        border: `1px solid ${borderColor}`,
                        background: bgColor,
                        cursor: state === 'playing' ? 'pointer' : 'default',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                        background: showResult && isCorrect ? T.green : showResult && isSelected ? T.red : 'rgba(201,168,76,0.08)',
                        border: `1px solid ${borderColor}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {showResult && isCorrect ? (
                          <Check size={14} style={{ color: '#fff' }} />
                        ) : showResult && isSelected && !isCorrect ? (
                          <X size={14} style={{ color: '#fff' }} />
                        ) : (
                          <span style={{ fontSize: 12, color: T.muted, fontWeight: 600 }}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: 14, color: textColor, lineHeight: 1.4 }}>{option}</span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {state === 'answered' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                      marginTop: 16,
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: `1px solid ${T.border}`,
                      background: T.elevated,
                      overflow: 'hidden',
                    }}
                  >
                    <p style={{ fontSize: 12, color: T.gold, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Explicação</p>
                    <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.6 }}>{currentQ.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {state === 'answered' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginTop: 20 }}>
                  <button
                    onClick={handleNext}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '12px 28px', borderRadius: 12,
                      border: '1px solid rgba(201,168,76,0.4)',
                      background: 'rgba(201,168,76,0.12)',
                      color: T.gold, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    }}
                  >
                    {currentIdx + 1 >= total ? 'Ver resultado' : 'Próxima'}
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── FINISHED ───────────────────────────────── */}
          {state === 'finished' && (
            <motion.div key="finished" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              {(() => {
                const s = getScoreLabel()
                return (
                  <div style={{ borderRadius: 16, border: `1px solid rgba(201,168,76,0.25)`, background: 'rgba(201,168,76,0.04)', padding: '40px 24px', textAlign: 'center' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '2px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Star size={30} style={{ color: T.gold }} fill={T.gold} />
                    </div>
                    <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 28, color: T.gold, direction: 'rtl', marginBottom: 8 }}>
                      {s.arabic}
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: T.text, marginBottom: 8 }}>
                      {s.label}
                    </h2>
                    <p style={{ fontSize: 48, fontWeight: 800, color: T.gold, fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: 8 }}>
                      {score}/{total}
                    </p>
                    <p style={{ fontSize: 16, color: T.secondary, marginBottom: 24 }}>{percentage}% de acerto — {s.desc}</p>

                    {/* Answer review */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
                      {answers.map((correct, i) => (
                        <div
                          key={i}
                          style={{
                            width: 28, height: 28, borderRadius: '50%',
                            background: correct ? `${T.green}20` : `${T.red}15`,
                            border: `1px solid ${correct ? T.green : T.red}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          {correct
                            ? <Check size={13} style={{ color: T.green }} />
                            : <X size={13} style={{ color: T.red }} />
                          }
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button
                        onClick={handleRestart}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          padding: '12px 24px', borderRadius: 12,
                          border: '1px solid rgba(201,168,76,0.4)',
                          background: 'rgba(201,168,76,0.1)',
                          color: T.gold, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                        }}
                      >
                        <RotateCcw size={14} />
                        Jogar novamente
                      </button>
                      <Link
                        href="/trilhas"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          padding: '12px 24px', borderRadius: 12,
                          border: `1px solid ${T.border}`,
                          background: T.surface,
                          color: T.secondary, fontSize: 14, fontWeight: 500,
                          textDecoration: 'none',
                        }}
                      >
                        Ver trilhas de estudo
                      </Link>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
