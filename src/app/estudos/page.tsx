'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BlurFade } from '@/components/effects/BlurFade'
import { HelpCircle, Microscope, MessageCircle, BookOpen, ChevronDown, Search } from 'lucide-react'
import { hardQuestionsData } from '@/lib/data/content/hardQuestions'
import { glossary, type GlossaryTerm } from '@/lib/data/glossary'

// ─── DATA ────────────────────────────────────────────────────────────────────

const quranPhenomena = [
  {
    id: 'embriao',
    headline: 'O desenvolvimento embrionário em estágios',
    reference: 'Al-Mu\'minun 23:12–14',
    quranSays:
      '"...de um coágulo de sangue... depois de tecido mastigado, e desse tecido mastigado formamos ossos, e revestimos os ossos com carne..."',
    scienceSays:
      'A embriologia moderna descreve estágios idênticos: zigoto, mórula, blástula, depois o estágio de somitos — onde estruturas parecem "mordidas". O Quran descreveu isso 1.400 anos antes do microscópio.',
  },
  {
    id: 'mares',
    headline: 'A barreira entre dois mares que não se misturam',
    reference: 'Al-Furqan 25:53',
    quranSays:
      '"E Ele é quem liberou os dois mares — este doce e palatável e este salgado e amargo — e colocou entre eles uma barreira e um limite proibido."',
    scienceSays:
      'O fenômeno de halocline: massas de água com densidades diferentes — como o Atlântico e o Mediterrâneo no Estreito de Gibraltar — se tocam mas mantêm suas propriedades distintas por tensão superficial e diferença de densidade. Confirmado por oceanografia moderna.',
  },
  {
    id: 'montanhas',
    headline: 'As montanhas como estacas ancoradas',
    reference: 'An-Naba 78:7',
    quranSays:
      '"E as montanhas como estacas?" — referência às raízes profundas que estabilizam a crosta terrestre.',
    scienceSays:
      'Geologia moderna: montanhas têm raízes que penetram no manto da Terra, frequentemente tão profundas quanto a altura visível. Elas funcionam como estacas que reduzem os movimentos da crosta. Esse conhecimento só foi possível com sismologia do século XX.',
  },
  {
    id: 'universo',
    headline: 'O universo em expansão',
    reference: 'Adh-Dhariyat 51:47',
    quranSays:
      '"E o universo, nós o construímos com poder, e certamente o expandimos."',
    scienceSays:
      'Edwin Hubble comprovou a expansão do universo em 1929. O Alcorão usou o verbo árabe "musi\'un" — que significa "expansão contínua" — 1.300 anos antes. O Big Bang é hoje a teoria cosmológica dominante, e a expansão acelerada do universo foi confirmada em 1998.',
  },
  {
    id: 'pele',
    headline: 'A pele como sede da dor',
    reference: 'An-Nisa 4:56',
    quranSays:
      '"...sempre que suas peles forem queimadas, as substituiremos por novas peles para que provem o tormento..."',
    scienceSays:
      'A neurociência moderna confirma que os nociceptores — receptores de dor — estão concentrados na pele, não nos tecidos internos. Queimaduras de terceiro grau destroem esses receptores e reduzem a sensação de dor. A substituição das peles para "provar o tormento" alinha com o que a ciência sabe sobre dor.',
  },
]

const faqs = [
  {
    question: 'O Alcorão foi escrito por Muhammad?',
    answer:
      'Não. Muhammad era analfabeto. O Alcorão foi memorizado e transcrito por escribas durante sua vida e compilado em forma de livro pelo califa Uthman aproximadamente 20 anos após a morte do profeta.',
  },
  {
    question: 'Muçulmano pode ter amigos não-muçulmanos?',
    answer:
      'Sim. O Quran instrui respeito e justiça para todos os seres humanos — independente de fé. Relações de amizade, comércio e convívio com não-muçulmanos são explicitamente permitidas.',
  },
  {
    question: 'Allah é o mesmo Deus da Bíblia?',
    answer:
      '"Allah" é simplesmente a palavra árabe para "Deus" — a mesma palavra usada por cristãos árabes há séculos antes do Islam. Cristãos no Líbano, Egito e Palestina chamam Deus de Allah hoje.',
  },
  {
    question: 'O Islam foi fundado por Muhammad?',
    answer:
      'Não. O Islam ensina que é a religião de todos os profetas, desde Adão. Muhammad foi o último — o "Selo dos Profetas" — não o fundador de uma nova religião, mas o restaurador da mensagem original.',
  },
  {
    question: 'Muçulmanos acreditam em Jesus?',
    answer:
      'Sim. Jesus (Isa) é um dos maiores profetas do Islam — nascido de virgem, realizou milagres, e voltará antes do Fim do Mundo. O que o Islam rejeita é a divindade de Jesus e a crucificação.',
  },
  {
    question: 'Por que muçulmanos não comem porco?',
    answer:
      'O Alcorão proíbe explicitamente o consumo de carne suína (2:173). Sem explicação teológica detalhada no texto — é um mandamento de submissão, assim como certas restrições alimentares na Torah judaica.',
  },
  {
    question: 'O Islam obriga o uso do véu?',
    answer:
      'O Quran instrui modéstia para homens e mulheres. O hijab é interpretado como obrigatório por muitos juristas clássicos, mas há debate real sobre o grau de cobertura exigido. Nenhum versículo menciona "hijab" como peça de roupa específica.',
  },
  {
    question: 'O Islam é uma religião de paz?',
    answer:
      'Jihad significa "esforço" ou "luta" — inclui esforço espiritual interno, não apenas guerra. O Quran permite guerra defensiva, proíbe agressão, e instrui que matar um inocente é como matar toda a humanidade (5:32).',
  },
]

// ─── CATEGORY LABELS ─────────────────────────────────────────────────────────

const categoryLabels: Record<string, string> = {
  theology: 'TEOLOGIA',
  history: 'HISTÓRIA',
  practice: 'PRÁTICA',
  women: 'MULHERES',
  comparison: 'COMPARAÇÃO',
  science: 'CIÊNCIA',
  ethics: 'ÉTICA',
  core: 'FUNDAMENTOS',
  prayer: 'ORAÇÃO',
  quran: 'ALCORÃO',
}

const glossaryCategoryLabels: Record<string, string> = {
  core: 'Fundamentos',
  prayer: 'Oração',
  quran: 'Alcorão',
  theology: 'Teologia',
  practice: 'Prática',
  history: 'História',
  ethics: 'Ética',
}

// ─── TAB CONFIG ──────────────────────────────────────────────────────────────

const TABS = [
  { id: 'dificeis', label: 'Perguntas Difíceis', icon: HelpCircle },
  { id: 'fenomenos', label: 'Fenômenos do Quran', icon: Microscope },
  { id: 'rapidas', label: 'Perguntas Rápidas', icon: MessageCircle },
  { id: 'glossario', label: 'Glossário', icon: BookOpen },
] as const

type TabId = typeof TABS[number]['id']

// ─── HARD QUESTION CARD ──────────────────────────────────────────────────────

function HardQuestionCard({ q, index, total }: { q: typeof hardQuestionsData[0]; index: number; total: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#161220',
        border: hovered ? '1px solid rgba(201,168,76,0.3)' : '1px solid #272230',
        borderRadius: 4,
        padding: '32px',
        transition: 'border-color 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold top line on hover */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 1,
        background: hovered
          ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)'
          : 'transparent',
        transition: 'background 0.4s ease',
      }} />

      {/* Badge row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: 2,
            padding: '3px 8px',
          }}>
            PERGUNTA DIFÍCIL
          </span>
          {q.category && (
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 9,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#7A7870',
              background: 'rgba(122,120,112,0.08)',
              border: '1px solid rgba(122,120,112,0.15)',
              borderRadius: 2,
              padding: '3px 8px',
            }}>
              {categoryLabels[q.category] || q.category.toUpperCase()}
            </span>
          )}
        </div>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '2px',
          color: '#7A7870',
        }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Question */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(17px, 2.2vw, 20px)',
        fontWeight: 700,
        color: '#F0EBE2',
        lineHeight: 1.35,
        marginBottom: 20,
      }}>
        &ldquo;{q.question}&rdquo;
      </h3>

      {/* Answer label */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 9,
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        color: '#C9A84C',
        marginBottom: 10,
      }}>
        RESPOSTA DIRETA
      </p>

      {/* Summary */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#B3B0A6',
        lineHeight: 1.8,
        marginBottom: expanded ? 24 : 0,
      }}>
        {q.summary}
      </p>

      {/* Expanded context */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              width: '100%',
              height: 1,
              background: '#272230',
              marginBottom: 20,
            }} />

            {/* Context paragraphs */}
            {q.context.split('\n\n').map((paragraph: string, pIdx: number) => (
              <p key={pIdx} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#7A7870',
                lineHeight: 1.85,
                marginBottom: pIdx < q.context.split('\n\n').length - 1 ? 16 : 0,
              }}>
                {paragraph}
              </p>
            ))}

            {/* Sources */}
            {q.sources && q.sources.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 9,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.5)',
                  marginBottom: 10,
                }}>
                  FONTES E REFERÊNCIAS
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {q.sources.map((source: string, sIdx: number) => (
                    <p key={sIdx} style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12,
                      color: '#5A5850',
                      lineHeight: 1.6,
                      paddingLeft: 12,
                      borderLeft: '2px solid rgba(201,168,76,0.15)',
                    }}>
                      {source}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginTop: 20,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: expanded ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.5)',
          transition: 'color 0.25s ease',
        }}
      >
        {expanded ? 'Fechar contexto' : 'Ver contexto completo'}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex' }}
        >
          <ChevronDown size={13} />
        </motion.span>
      </button>
    </motion.div>
  )
}

// ─── PHENOMENA CARD ──────────────────────────────────────────────────────────

function PhenomenonCard({ p, index }: { p: typeof quranPhenomena[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#161220',
        border: hovered ? '1px solid rgba(201,168,76,0.3)' : '1px solid #272230',
        borderRadius: 4,
        padding: '32px',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: 1,
        background: hovered
          ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)'
          : 'transparent',
        transition: 'background 0.4s ease',
      }} />

      {/* Reference badge */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 9,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#C9A84C',
        marginBottom: 14,
      }}>
        {p.reference}
      </p>

      {/* Headline */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(17px, 2vw, 19px)',
        fontWeight: 700,
        color: '#F0EBE2',
        lineHeight: 1.35,
        marginBottom: 24,
      }}>
        {p.headline}
      </h3>

      {/* Two-column content */}
      <div>
        {/* Quran block */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)',
            marginBottom: 8,
          }}>
            O QUE O QURAN DIZ
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 14,
            fontStyle: 'italic',
            color: '#B3B0A6',
            lineHeight: 1.75,
          }}>
            {p.quranSays}
          </p>
        </div>

        {/* Gold divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
        }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.15)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.15)' }} />
        </div>

        {/* Science block */}
        <div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#7A7870',
            marginBottom: 8,
          }}>
            O QUE A CIÊNCIA DIZ
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#B3B0A6',
            lineHeight: 1.8,
          }}>
            {p.scienceSays}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── FAQ CARD ─────────────────────────────────────────────────────────────────

function FaqCard({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.055, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#161616' : '#161220',
        border: '1px solid #272230',
        borderLeft: hovered ? '3px solid rgba(201,168,76,0.55)' : '3px solid transparent',
        borderRadius: 4,
        padding: '24px 28px',
        transition: 'border-left-color 0.3s ease, background 0.3s ease',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        color: '#F0EBE2',
        lineHeight: 1.45,
        marginBottom: 10,
      }}>
        {faq.question}
      </p>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: '#B3B0A6',
        lineHeight: 1.75,
      }}>
        {faq.answer}
      </p>
    </motion.div>
  )
}

// ─── GLOSSARY CARD ───────────────────────────────────────────────────────────

function GlossaryCard({ term, index }: { term: GlossaryTerm; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3), ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded((v) => !v)}
      style={{
        background: expanded ? '#1A1828' : '#161220',
        border: hovered || expanded ? '1px solid rgba(201,168,76,0.25)' : '1px solid #272230',
        borderRadius: 4,
        padding: '20px 24px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top line on expanded */}
      {expanded && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)',
        }} />
      )}

      {/* Main row */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        <div style={{ flex: 1 }}>
          {/* Term + Arabic */}
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            marginBottom: 6,
            flexWrap: 'wrap',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              fontWeight: 700,
              color: '#F0EBE2',
              lineHeight: 1.3,
            }}>
              {term.term}
            </h4>
            <span style={{
              fontFamily: "'Noto Sans Arabic', 'Amiri', serif",
              fontSize: 18,
              color: 'rgba(201,168,76,0.7)',
              direction: 'rtl',
            }}>
              {term.arabic}
            </span>
          </div>

          {/* Short meaning */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#B3B0A6',
            lineHeight: 1.6,
          }}>
            {term.meaning}
          </p>
        </div>

        {/* Expand indicator */}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'flex',
            flexShrink: 0,
            marginTop: 4,
            color: expanded ? 'rgba(201,168,76,0.7)' : '#7A7870',
          }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              width: '100%',
              height: 1,
              background: '#272230',
              margin: '14px 0',
            }} />

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: '#7A7870',
              lineHeight: 1.8,
              marginBottom: 10,
            }}>
              {term.explanation}
            </p>

            {/* Category tag */}
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 9,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.12)',
              borderRadius: 2,
              padding: '2px 7px',
            }}>
              {glossaryCategoryLabels[term.category] || term.category}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginBottom: 48,
    }}>
      <div style={{ flex: 1, height: 1, background: '#272230' }} />
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#7A7870',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </p>
      <div style={{ flex: 1, height: 1, background: '#272230' }} />
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function EstudosPage() {
  const [activeTab, setActiveTab] = useState<TabId>('dificeis')
  const [glossarySearch, setGlossarySearch] = useState('')
  const [glossaryCategoryFilter, setGlossaryCategoryFilter] = useState<string>('all')

  const filteredGlossary = useMemo(() => {
    let result = glossary
    if (glossaryCategoryFilter !== 'all') {
      result = result.filter((t) => t.category === glossaryCategoryFilter)
    }
    if (glossarySearch.trim()) {
      const q = glossarySearch.toLowerCase().trim()
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.arabic.includes(q) ||
          t.meaning.toLowerCase().includes(q) ||
          t.explanation.toLowerCase().includes(q)
      )
    }
    return result
  }, [glossarySearch, glossaryCategoryFilter])

  const glossaryCategories = useMemo(() => {
    const cats = new Set(glossary.map((t) => t.category))
    return Array.from(cats).sort()
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D0B12',
      paddingTop: 64,
    }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(56px, 7vw, 88px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 420,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 780, margin: '0 auto' }}>

          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              ESTUDOS
            </p>
          </BlurFade>

          {/* H1 */}
          <BlurFade delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5.5vw, 58px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              As Perguntas que Você
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                Tem Medo de Fazer.
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.2}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.9vw, 18px)',
              color: '#B3B0A6',
              maxWidth: 500,
              margin: '0 auto 16px',
              lineHeight: 1.8,
            }}>
              Respondidas com honestidade. Sem tabu. Com contexto.
            </p>
          </BlurFade>

          {/* Note */}
          <BlurFade delay={0.25}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '1.5px',
              color: '#7A7870',
              marginBottom: 48,
            }}>
              Não é proselitismo. É informação.
            </p>
          </BlurFade>

          {/* Gold divider */}
          <BlurFade delay={0.3}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section style={{
        padding: '0 24px 64px',
      }}>
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
        }}>
          <BlurFade delay={0}>
            {/* Tab strip */}
            <div style={{
              display: 'flex',
              gap: 4,
              background: '#161220',
              border: '1px solid #272230',
              borderRadius: 6,
              padding: 4,
              flexWrap: 'wrap',
            }}>
              {TABS.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: '1 1 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '12px 20px',
                      background: isActive ? '#1A1A2E' : 'transparent',
                      border: isActive ? '1px solid rgba(201,168,76,0.25)' : '1px solid transparent',
                      borderRadius: 4,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: isActive ? '#C9A84C' : '#7A7870',
                      position: 'relative',
                    }}
                  >
                    <Icon size={14} strokeWidth={isActive ? 2 : 1.5} />
                    {tab.label}
                    {/* Active underline */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        bottom: 0, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 32, height: 2,
                        background: '#C9A84C',
                        borderRadius: 1,
                      }} />
                    )}
                  </button>
                )
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── HARD QUESTIONS SECTION ── */}
      <AnimatePresence mode="wait">
        {activeTab === 'dificeis' && (
          <motion.section
            key="dificeis"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}
          >
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <SectionLabel label="PERGUNTAS DIFÍCEIS" />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#7A7870',
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: 48,
              }}>
                As perguntas que brasileiros evitam fazer sobre o Islam — mas que merecem respostas honestas, contextualizadas e sem defesa.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {hardQuestionsData.map((q, i) => (
                  <HardQuestionCard key={q.id} q={q} index={i} total={hardQuestionsData.length} />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* ── QURAN PHENOMENA ── */}
        {activeTab === 'fenomenos' && (
          <motion.section
            key="fenomenos"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}
          >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionLabel label="FENÔMENOS DO QURAN" />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#7A7870',
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: 48,
              }}>
                Fatos que surpreendem — referências científicas e históricas no Alcorão que só foram verificadas séculos depois.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
                gap: 16,
              }}>
                {quranPhenomena.map((p, i) => (
                  <PhenomenonCard key={p.id} p={p} index={i} />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* ── FAQ ── */}
        {activeTab === 'rapidas' && (
          <motion.section
            key="rapidas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}
          >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionLabel label="PERGUNTAS RÁPIDAS" />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#7A7870',
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: 48,
              }}>
                Respostas diretas. Sem discurso. Para as dúvidas mais comuns sobre o Islam.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
                gap: 12,
              }}>
                {faqs.map((faq, i) => (
                  <FaqCard key={faq.question} faq={faq} index={i} />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* ── GLOSSARY ── */}
        {activeTab === 'glossario' && (
          <motion.section
            key="glossario"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}
          >
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <SectionLabel label="GLOSSÁRIO ISLÂMICO" />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#7A7870',
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: 32,
              }}>
                100 termos essenciais para entender o Islam. Cada termo com transliteração, árabe original, significado e contexto.
              </p>

              {/* Search + Filter */}
              <div style={{
                display: 'flex',
                gap: 12,
                marginBottom: 32,
                flexWrap: 'wrap',
              }}>
                {/* Search input */}
                <div style={{
                  flex: '1 1 300px',
                  position: 'relative',
                }}>
                  <Search
                    size={14}
                    style={{
                      position: 'absolute',
                      left: 14,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#7A7870',
                      pointerEvents: 'none',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Buscar termo, significado ou explicação..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 38px',
                      background: '#161220',
                      border: '1px solid #272230',
                      borderRadius: 4,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      color: '#F0EBE2',
                      outline: 'none',
                      transition: 'border-color 0.25s ease',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#272230' }}
                  />
                </div>

                {/* Category filter */}
                <select
                  value={glossaryCategoryFilter}
                  onChange={(e) => setGlossaryCategoryFilter(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    background: '#161220',
                    border: '1px solid #272230',
                    borderRadius: 4,
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#B3B0A6',
                    outline: 'none',
                    cursor: 'pointer',
                    minWidth: 160,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                  }}
                >
                  <option value="all">Todas categorias</option>
                  {glossaryCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {glossaryCategoryLabels[cat] || cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results count */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#5A5850',
                marginBottom: 20,
              }}>
                {filteredGlossary.length} {filteredGlossary.length === 1 ? 'TERMO' : 'TERMOS'}
              </p>

              {/* Glossary cards */}
              {filteredGlossary.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: 8,
                }}>
                  {filteredGlossary.map((term, i) => (
                    <GlossaryCard key={term.term} term={term} index={i} />
                  ))}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '64px 24px',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 18,
                    color: '#7A7870',
                    fontStyle: 'italic',
                  }}>
                    Nenhum termo encontrado.
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: '#5A5850',
                    marginTop: 8,
                  }}>
                    Tente outra busca ou remova o filtro de categoria.
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        {/* Gold divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 48,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#7A7870',
            marginBottom: 12,
          }}>
            Tem uma pergunta que não está aqui?
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#B3B0A6',
            marginBottom: 36,
          }}>
            Continue explorando os profetas.
          </p>
        </BlurFade>

        <BlurFade delay={0.12}>
          <Link
            href="/os-profetas"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 2,
              padding: '14px 36px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
            }}
          >
            Explorar os Profetas →
          </Link>
        </BlurFade>
      </section>
    </div>
  )
}
