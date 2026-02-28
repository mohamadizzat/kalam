'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BlurFade } from '@/components/effects/BlurFade'
import { HelpCircle, Microscope, MessageCircle, ChevronDown } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const hardQuestions = [
  {
    id: 'aisha',
    question: 'Muhammad se casou com Aisha quando ela tinha 6 anos?',
    summary:
      'Sim. Os hadices confirmam. Mas o século VII operava por normas radicalmente diferentes. Avaliar o passado com lentes do presente é anacronismo — o mesmo que condenar Moisés ou Abraão por não seguir a ONU. O debate dentro do Islam hoje sobre essa questão é real e legítimo.',
    context:
      'As fontes islâmicas primárias (Sahih al-Bukhari, Sahih Muslim) registram que Aisha tinha 6 ou 7 anos no noivado e 9 no casamento consumado. Isso não é contestado por estudiosos muçulmanos tradicionais. O que é debatido é a interpretação: sociedades pré-modernas não tinham o conceito de infância como fase protegida — casamentos eram alianças tribais e familiares, frequentemente contraídos na pré-adolescência em todas as culturas da época, incluindo a Europa medieval cristã. O debate contemporâneo islâmico sobre maioridade e consentimento é real, crescente, e conduzido por estudiosos muçulmanos, não imposto de fora.',
  },
  {
    id: 'esposas',
    question: 'O Islam permite que homens batam em suas esposas?',
    summary:
      'O versículo 4:34 existe. A tradução "bater" é legítima e histórica. Mas é apresentado como último recurso, a tradição profética desestimulava explicitamente a violência, e há tradução alternativa linguisticamente defensável. O Islam não é monolítico — o debate interno sobre esse versículo é intenso.',
    context:
      'An-Nisa 4:34 usa o verbo árabe "daraba", que tem mais de 25 significados no árabe clássico — bater, separar, partir em viagem, dar um exemplo. A maioria das traduções históricas escolheu "bater". Mas estudiosos como Laleh Bakhtiar traduziram como "partir" (separar-se), o que é linguisticamente defensável. O próprio Muhammad nunca bateu em nenhuma de suas esposas e disse explicitamente: "Os melhores entre vocês são aqueles que tratam melhor suas mulheres." O versículo prescreve uma sequência: admoestação, separação do leito, e só então — em interpretação clássica — um toque simbólico não violento. O debate interno muçulmano sobre esse versículo é robusto e não resolvido.',
  },
  {
    id: 'testemunho',
    question: 'Por que o Islam diz que o testemunho de uma mulher vale metade?',
    summary:
      'O versículo 2:282 fala de contratos financeiros específicos em contexto da sociedade do século VII. Juristas modernos e países de maioria muçulmana tratam testemunho igualmente em cortes contemporâneas. A regra é mais limitada no texto do que a jurisprudência clássica tornou.',
    context:
      'Al-Baqarah 2:282 instrui que em contratos financeiros, caso não haja dois homens disponíveis como testemunhas, dois homens ou um homem e duas mulheres devem testemunhar — para que, se uma esquecer, a outra lembre. O contexto explícito é financeiro e comercial, numa sociedade em que mulheres raramente participavam de transações mercantis e, portanto, seriam menos familiarizadas com os detalhes. Estudiosos como Khaled Abou El Fadl argumentam que aplicar essa regra a contextos modernos, onde mulheres são advogadas, juízas e especialistas financeiras, é uma traição ao propósito original do texto. Em crimes, assassinato, direito de família e a maioria dos contextos jurídicos islâmicos clássicos, o testemunho feminino tem peso igual.',
  },
  {
    id: 'democracia',
    question: 'Islam é compatível com democracia?',
    summary:
      'Não há califado islâmico ativo hoje. Turquia, Tunísia, Indonésia, Bangladesh têm democracias de maioria muçulmana. A questão é sobre interpretação política, não teologia fundamental.',
    context:
      'O Alcorão não prescreve um sistema de governo específico. O conceito de "shura" (consulta) é korânico, mas não detalha como essa consulta deve ser estruturada. Historicamente, estados islâmicos variaram de repúblicas a monarquias a califados. Hoje, as maiores populações muçulmanas do mundo — Indonésia (275M), Bangladesh (170M), Paquistão (230M) — vivem em democracias formais com eleições regulares. Turquia e Tunísia têm histórico democrático. O debate não é se Islam e democracia são compatíveis — é qual modelo de democracia, e qual papel a religião joga no espaço público. Esse debate existe em TODAS as democracias com populações religiosas, incluindo os EUA e o Brasil.',
  },
  {
    id: 'meca',
    question: 'Por que muçulmanos rezam em direção a Meca?',
    summary:
      'A Kaaba é a primeira casa de adoração construída para o único Deus — por Abraão e Ismael. Rezar em direção a ela não é idolatria — é unidade de direção, como o Git tem um repositório central.',
    context:
      'A Kaaba em Meca é, para o Islam, a casa original de adoração ao único Deus — construída por Ibrahim (Abraão) e seu filho Ismael. Ao rezar em direção a ela, muçulmanos não adoram o edifício — da mesma forma que cristãos em igrejas não adoram o altar. É uma qibla: um ponto de referência que unifica a oração de mais de um bilhão de pessoas em direção comum. Ironicamente, os primeiros muçulmanos rezavam em direção a Jerusalém — a mudança para Meca veio por revelação divina, registrada em Al-Baqarah 2:144. A Kaaba é coberta com um pano preto chamado kiswah, renovado anualmente, e representa a morada espiritual — não divina — de Allah na terra.',
  },
]

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

// ─── TAB CONFIG ──────────────────────────────────────────────────────────────

const TABS = [
  { id: 'dificeis', label: 'Perguntas Difíceis', icon: HelpCircle },
  { id: 'fenomenos', label: 'Fenômenos do Quran', icon: Microscope },
  { id: 'rapidas', label: 'Perguntas Rápidas', icon: MessageCircle },
] as const

type TabId = typeof TABS[number]['id']

// ─── HARD QUESTION CARD ──────────────────────────────────────────────────────

function HardQuestionCard({ q, index }: { q: typeof hardQuestions[0]; index: number }) {
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
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
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '2px',
          color: '#7A7870',
        }}>
          {String(index + 1).padStart(2, '0')} / {String(hardQuestions.length).padStart(2, '0')}
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
        "{q.question}"
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
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: '#7A7870',
              lineHeight: 1.85,
            }}>
              {q.context}
            </p>
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
                {hardQuestions.map((q, i) => (
                  <HardQuestionCard key={q.id} q={q} index={i} />
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
