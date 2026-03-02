'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Check,
  AlertCircle,
  Info,
  Scroll,
  Star,
} from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { GoldDivider } from '@/components/shared/GoldDivider'

// ── Design tokens ──────────────────────────────────────────────────────────────
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
  amber: '#E0A030',
  blue: '#4A90D9',
} as const

// ── Data ──────────────────────────────────────────────────────────────────────

type Confidence = 'full' | 'context' | 'discernment'

interface ScriptureVerse {
  reference: string
  text: string
  quranEcho?: { reference: string; text: string }
  note: string
  confidence: Confidence
}

interface ScriptureBook {
  id: string
  name: string
  arabic: string
  prophet: string
  quranConfirmation: { reference: string; text: string }
  intro: string
  verses: ScriptureVerse[]
}

const BOOKS: ScriptureBook[] = [
  // ═══════════════════════════════════════════════════
  // TAWRAT — TORAH
  // ═══════════════════════════════════════════════════
  {
    id: 'tawrat',
    name: 'A Torah',
    arabic: 'التَّوْرَاة',
    prophet: 'Musa (Moisés)',
    quranConfirmation: {
      reference: 'Al-Ma\'idah 5:44',
      text:
        'De fato, enviamos a Torah, na qual havia orientação e luz. Os profetas que se submeteram julgavam por ela os judeus.',
    },
    intro:
      'O Alcorão confirma em múltiplas passagens que Allah revelou a Torah a Moisés como "orientação e luz". Para o muçulmano, a Torah original era Palavra de Deus. O que chega até nós hoje é uma compilação humana que preserva elementos dessa revelação — misturada com adições históricas. Mas onde a Torah proclama o Único Deus, onde fala da misericórdia divina, onde descreve as leis morais universais: ali o muçulmano reconhece a voz do Criador.',
    verses: [
      {
        reference: 'Deuteronômio 6:4',
        text:
          '"Ouve, Israel: O SENHOR nosso Deus, o SENHOR é único."',
        quranEcho: {
          reference: 'Al-Ikhlas 112:1',
          text: '"Dize: Ele é Allah, o Único."',
        },
        note:
          'O Shema Israel é o coração do monoteísmo bíblico — e é palavra por palavra o Tawhid islâmico. Jesus cita este versículo como o maior mandamento (Marcos 12:29). O muçulmano que recita Al-Ikhlas está dizendo a mesma coisa que Moisés em Deuteronômio.',
        confidence: 'full',
      },
      {
        reference: 'Isaías 44:6',
        text:
          '"Assim diz o SENHOR, Rei de Israel e seu Redentor, o SENHOR dos Exércitos: Eu sou o primeiro e o último, e fora de mim não há Deus."',
        quranEcho: {
          reference: 'Al-Hadid 57:3',
          text: '"Ele é o Primeiro e o Último, o Visível e o Oculto, e Ele é conhecedor de todas as coisas."',
        },
        note:
          'A unicidade absoluta de Deus, sem parceiros, sem intermediários necessários. Esta frase aparece 3 vezes em Isaías (44:6, 44:8, 45:5). O eco no Alcorão é direto. Os dois textos usam praticamente a mesma linguagem para descrever o mesmo atributo divino.',
        confidence: 'full',
      },
      {
        reference: 'Deuteronômio 18:18',
        text:
          '"Levantarei para eles um profeta semelhante a ti, dentre os seus irmãos, e porei as minhas palavras na boca dele, e ele lhes falará tudo o que eu lhe ordenar."',
        quranEcho: {
          reference: 'As-Saff 61:6',
          text:
            '"E quando Jesus, filho de Maria, disse: Ó filhos de Israel, sou o Mensageiro de Allah para vós, confirmando o que havia antes de mim na Torah e trazendo a boa nova de um Mensageiro que virá depois de mim, cujo nome é Ahmad."',
        },
        note:
          'Moisés anuncia um profeta futuro "semelhante a ele" — que viria dos "irmãos" (descendentes de Ismael, não de Isaque). A tradição islâmica vê aqui a profecia de Muhammad ﷺ. O Alcorão confirma que Jesus também anunciou esse profeta pelo nome Ahmad (variante de Muhammad).',
        confidence: 'context',
      },
      {
        reference: 'Gênesis 1:1',
        text:
          '"No princípio, Deus criou os céus e a terra."',
        quranEcho: {
          reference: 'Al-A\'raf 7:54',
          text:
            '"De fato, o vosso Senhor é Allah, que criou os céus e a terra em seis dias."',
        },
        note:
          'A criação como ato exclusivo do Único Deus. Leitura completamente segura e alinhada com a fé islâmica. Esta é a afirmação fundacional de ambas as tradições.',
        confidence: 'full',
      },
      {
        reference: 'Êxodo 20:2-3',
        text:
          '"Eu sou o SENHOR teu Deus [...] Não terás outros deuses diante de mim."',
        quranEcho: {
          reference: 'Al-Anbiya 21:25',
          text:
            '"E não enviamos antes de ti nenhum mensageiro sem revelarmos a ele: Não há divindade exceto Eu, portanto Me adorai."',
        },
        note:
          'O primeiro mandamento é a mensagem central de cada profeta no Alcorão. Todos os 124.000 profetas enviados ao longo da história foram enviados com a mesma mensagem que Moisés recebeu no Sinai: adorai apenas o Único Deus.',
        confidence: 'full',
      },
      {
        reference: 'Êxodo 34:6-7',
        text:
          '"O SENHOR, o SENHOR Deus, misericordioso e piedoso, tardio em irar-se, e grande em benignidade e verdade; que guarda a misericórdia em milhares, que perdoa a iniquidade, e a transgressão, e o pecado."',
        quranEcho: {
          reference: 'Início de 113 Suratas',
          text:
            '"Bismillah ir-Rahman ir-Rahim — Em nome de Allah, o Infinitamente Misericordioso, o Constantemente Misericordioso."',
        },
        note:
          'Os atributos de Deus em Êxodo 34 são praticamente os mesmos com que o Alcorão se abre. Deus se revela como misericordioso, perdoador, bondoso — em ambos os textos. Esta é uma das passagens mais bonitas para compartilhar com um cristão ou judeu.',
        confidence: 'full',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // ZABUR — SALMOS
  // ═══════════════════════════════════════════════════
  {
    id: 'zabur',
    name: 'Os Salmos',
    arabic: 'الزَّبُور',
    prophet: 'Dawud (Davi)',
    quranConfirmation: {
      reference: 'An-Nisa 4:163',
      text:
        'De fato, revelamos a ti como revelamos a Noé e aos profetas depois dele. E revelamos a Abraão, Ismael, Isaque, Jacó, as tribos, Jesus, Jó, Jonas, Harun e Salomão. E a Davi demos os Salmos (Zabur).',
    },
    intro:
      'Os Salmos são o livro de adoração de Davi — oração pura, louvor, lamento e confiança diante do Único Deus. No Alcorão, Deus fala de ter dado o Zabur a Dawud como honra especial. Os Salmos são, em sua essência, o que o Islam chama de Dua — súplica pessoal direta ao Criador. Um muçulmano que lê os Salmos reconhece imediatamente o mesmo Deus, o mesmo impulso de adoração.',
    verses: [
      {
        reference: 'Salmos 86:10',
        text:
          '"Pois tu és grande e fazes maravilhas; tu só és Deus."',
        quranEcho: {
          reference: 'Al-Baqarah 2:163',
          text: '"E o vosso Deus é um só Deus. Não há divindade exceto Ele, o Infinitamente Misericordioso, o Constantemente Misericordioso."',
        },
        note:
          'Davi proclama, sem ambiguidade, que somente Deus é Deus. Esta frase de Davi é leitura segura e alinhada em qualquer contexto islâmico.',
        confidence: 'full',
      },
      {
        reference: 'Salmos 46:10',
        text:
          '"Aquietai-vos e reconhecei que eu sou Deus."',
        quranEcho: {
          reference: 'Ra\'d 13:28',
          text: '"Certamente, no Dhikr de Allah os corações encontram paz."',
        },
        note:
          'A quietude diante de Deus, o reconhecimento silencioso — isso é exatamente o que o Islam chama de Dhikr. Esta passagem dos Salmos poderia estar no Alcorão. É uma das mais puras expressões de submissão a Deus em qualquer escritura.',
        confidence: 'full',
      },
      {
        reference: 'Salmos 23:1-3',
        text:
          '"O SENHOR é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos; guia-me mansamente a águas tranquilas. Refrigera a minha alma."',
        quranEcho: {
          reference: 'Az-Zumar 39:53',
          text: '"Não desesperem da misericórdia de Allah. De fato, Allah perdoa todos os pecados. Ele é o Perdoador, o Misericordioso."',
        },
        note:
          'O Deus que cuida, que não abandona, que restaura — esta é a mesma Imagem de Deus no Alcorão. Leitura completamente segura. O salmo 23 é uma expressão de tawakkul (confiança total em Deus).',
        confidence: 'full',
      },
      {
        reference: 'Salmos 51:1-4',
        text:
          '"Tem misericórdia de mim, ó Deus, segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias. Lava-me completamente da minha iniquidade [...] Pequei contra ti, só contra ti."',
        quranEcho: {
          reference: 'Al-A\'raf 7:23',
          text: '"Disseram: Nosso Senhor, injustiçamos a nós mesmos. Se não nos perdoares e não tiveres misericórdia de nós, seremos certamente dos perdidos."',
        },
        note:
          'O Salmo 51 é a oração de arrependimento de Davi após seu erro. No Islam, tawbah (arrependimento sincero) é aceito diretamente por Deus — sem intermediário, sem sacrifício. Davi foi ao Criador diretamente. Exatamente como o Islam ensina.',
        confidence: 'full',
      },
      {
        reference: 'Salmos 37:11',
        text:
          '"Mas os mansos herdarão a terra e se deleitarão na abundância de paz."',
        quranEcho: {
          reference: 'Al-Anbiya 21:105',
          text: '"E de fato escrevemos nos Salmos (Zabur), após o Lembrete: Meus servos justos herdarão a terra."',
        },
        note:
          'O Alcorão cita EXPLICITAMENTE os Salmos de Davi neste versículo — é a única vez que o Alcorão cita diretamente o conteúdo de outra escritura. "Meus servos justos herdarão a terra" aparece no Alcorão como confirmação direta do que já estava nos Salmos.',
        confidence: 'full',
      },
      {
        reference: 'Salmos 110:1',
        text:
          '"O SENHOR disse ao meu Senhor: Assenta-te à minha direita, enquanto eu não puser os teus inimigos por escabelo de teus pés."',
        quranEcho: {
          reference: 'An-Nisa 4:158',
          text: '"Mas Allah o elevou (Jesus) para Si mesmo. Allah é Poderoso, Sábio."',
        },
        note:
          'Jesus cita este Salmo em Mateus 22:44 para mostrar que o Messias é maior que Davi. O Islam também eleva Jesus — o Alcorão diz que Jesus foi levantado diretamente para Deus. A exaltação de Jesus é confirmada nos dois textos, com enquadramentos teológicos distintos.',
        confidence: 'context',
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // INJIL — EVANGELHO
  // ═══════════════════════════════════════════════════
  {
    id: 'injil',
    name: 'O Evangelho',
    arabic: 'الإِنجِيل',
    prophet: 'Isa (Jesus)',
    quranConfirmation: {
      reference: 'Al-Ma\'idah 5:46',
      text:
        'E enviamos, seguindo os seus passos, Jesus, filho de Maria, confirmando o que havia antes dele na Torah. E demos a ele o Evangelho, no qual havia orientação e luz, confirmando o que havia antes dele na Torah — orientação e advertência para os piedosos.',
    },
    intro:
      'O Islam crê que o Injil — o Evangelho — foi revelado diretamente a Jesus. Era a Palavra de Deus dada a Jesus para transmitir à humanidade. O que temos hoje nos quatro Evangelhos são relatos escritos sobre Jesus, décadas após sua missão. Partes preservam fielmente os ensinamentos originais de Jesus; partes refletem interpretações posteriores. A regra prática: as palavras que Jesus disse diretamente — especialmente sobre Deus, oração, ética e misericórdia — são as mais próximas do Injil original.',
    verses: [
      {
        reference: 'Marcos 12:29-30',
        text:
          '"Jesus respondeu: O principal de todos os mandamentos é: Ouve, Israel; o Senhor nosso Deus é o único Senhor. E amarás ao Senhor teu Deus de todo o teu coração, de toda a tua alma, de todo o teu entendimento e de todas as tuas forças."',
        quranEcho: {
          reference: 'Al-Ikhlas 112:1 + Al-Baqarah 2:165',
          text: '"Dize: Ele é Allah, o Único." / "Os crentes têm amor mais intenso a Allah."',
        },
        note:
          'Jesus citou o Shema de Moisés como o maior mandamento. Ao fazê-lo, Jesus confirmou o Tawhid — o monoteísmo puro. Esta é a passagem mais importante do Evangelho para um muçulmano: Jesus, com suas próprias palavras, ensinou exatamente o que o Islam ensina.',
        confidence: 'full',
      },
      {
        reference: 'João 17:3',
        text:
          '"E a vida eterna é esta: que te conheçam a ti, o único Deus verdadeiro, e a Jesus Cristo, a quem enviaste."',
        quranEcho: {
          reference: 'Al-Imran 3:51',
          text: '"De fato, Allah é o meu Senhor e o vosso Senhor, portanto adorai-O. Este é o caminho reto."',
        },
        note:
          'Jesus distingue claramente: Deus ("o único Deus verdadeiro") e ele mesmo ("a quem enviaste" — o enviado). Esta oração de Jesus antes de sua captura é um dos textos mais diretos do Evangelho confirmando a unicidade de Deus. Jesus não diz "conheçam-me" — diz "conheçam-Te A Ti".',
        confidence: 'full',
      },
      {
        reference: 'Mateus 26:39',
        text:
          '"E indo um pouco mais adiante, prostrou-se com o rosto em terra, e orou, dizendo: Meu Pai, se possível é, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres."',
        quranEcho: {
          reference: 'Al-Baqarah 2:238',
          text: '"Guardai as orações e a oração do meio, e estai em pé diante de Allah em total devoção."',
        },
        note:
          'Jesus prostrado com o rosto no chão — isso é sujud, a postura de maior humildade na oração islâmica. Ele ora ao Pai, não a si mesmo. "Não seja como eu quero" — isso é islã (submissão). Esta cena do Jardim do Getsêmani é uma das mais islâmicas de todo o Evangelho.',
        confidence: 'full',
      },
      {
        reference: 'Mateus 5:3-10 (Bem-aventuranças)',
        text:
          '"Bem-aventurados os humildes de espírito [...] os que choram [...] os mansos [...] os que têm fome e sede de justiça [...] os misericordiosos [...] os puros de coração [...] os pacificadores [...] os perseguidos por causa da justiça."',
        quranEcho: {
          reference: 'Al-Mu\'minun 23:1-9',
          text:
            '"Bem-sucedidos são os crentes — os que são humildes em suas orações, os que se afastam das palavras vãs, os que praticam a purificação [...] os que guardam seus compromissos e promessas."',
        },
        note:
          'As Bem-aventuranças de Jesus são leitura completamente segura. A ética de Jesus — humildade, misericórdia, pureza, busca de justiça — é a ética do Islam. O Alcorão lista as qualidades dos crentes em Al-Mu\'minun quase com as mesmas palavras.',
        confidence: 'full',
      },
      {
        reference: 'Lucas 11:1-4 (Pai Nosso)',
        text:
          '"Quando orares, dize: Pai, santificado seja o teu nome. Venha o teu reino. O nosso pão de cada dia nos dá hoje; e perdoa-nos os nossos pecados, porque também nós perdoamos a todos os que nos devem; e não nos deixes cair em tentação."',
        quranEcho: {
          reference: 'Al-Fatihah 1:1-7',
          text:
            '"Em nome de Allah, o Misericordioso, o Misericordioso. Louvor seja a Allah, Senhor dos Mundos [...] Guia-nos ao caminho reto [...] que não seja o caminho dos que erraram."',
        },
        note:
          'A oração que Jesus ensinou tem a mesma estrutura de Al-Fatihah — a oração de abertura do Alcorão. Ambas: glorificam Deus, pedem provisão, pedem perdão, pedem orientação divina. As duas orações são, na essência, o mesmo ato de devoção.',
        confidence: 'full',
      },
      {
        reference: 'João 14:15-17',
        text:
          '"E eu rogarei ao Pai, e ele vos dará outro Consolador (Paráclito), para que fique convosco para sempre; o Espírito da verdade."',
        quranEcho: {
          reference: 'As-Saff 61:6',
          text:
            '"[Jesus disse:] ...e trazendo a boa nova de um Mensageiro que virá depois de mim, cujo nome é Ahmad."',
        },
        note:
          'Aqui há uma questão textual significativa. A palavra grega "Paráclito" (defensor, consolador) é similar a "Periklutos" (o muito louvado) — que é o significado de Muhammad em árabe. O Alcorão diz que Jesus anunciou um mensageiro chamado Ahmad. Esta passagem requer contexto antes de ser apresentada — mas é parte do debate histórico.',
        confidence: 'context',
      },
      {
        reference: 'Mateus 5:17',
        text:
          '"Não penseis que vim abolir a Lei ou os Profetas; não vim abolir, mas cumprir."',
        quranEcho: {
          reference: 'Al-Ma\'idah 5:46',
          text:
            '"E demos a ele o Evangelho, no qual havia orientação e luz, confirmando o que havia antes dele na Torah."',
        },
        note:
          'Jesus confirma a Torah — e o Alcorão confirma Jesus confirmando a Torah. Esta é a cadeia da revelação islâmica: cada profeta confirma o anterior. Jesus não veio cancelar Moisés; o Alcorão diz o mesmo.',
        confidence: 'full',
      },
    ],
  },
]

// ── Confidence config ──────────────────────────────────────────────────────────
const CONFIDENCE_CONFIG: Record<Confidence, { label: string; color: string; bg: string; icon: typeof Check; desc: string }> = {
  full: {
    label: 'Leitura completa',
    color: T.green,
    bg: `${T.green}15`,
    icon: Check,
    desc: '100% alinhado com o Islam. Pode ler, compartilhar, meditar.',
  },
  context: {
    label: 'Com contexto',
    color: T.amber,
    bg: `${T.amber}15`,
    icon: Info,
    desc: 'Alinhado no essencial, mas requer enquadramento teológico.',
  },
  discernment: {
    label: 'Com discernimento',
    color: '#A0A0A0',
    bg: 'rgba(160,160,160,0.1)',
    icon: AlertCircle,
    desc: 'Requer leitura cuidadosa — contém interpretações posteriores.',
  },
}

const BOOK_COLORS: Record<string, string> = {
  tawrat: '#C9A84C',
  zabur: '#4A90D9',
  injil: '#50C878',
}

// ── VerseCard ─────────────────────────────────────────────────────────────────
function VerseCard({ verse }: { verse: ScriptureVerse }) {
  const [open, setOpen] = useState(false)
  const cfg = CONFIDENCE_CONFIG[verse.confidence]
  const ConfIcon = cfg.icon

  return (
    <div
      style={{
        borderRadius: 14,
        border: `1px solid ${T.border}`,
        background: T.surface,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
          padding: '18px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '3px 10px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                color: cfg.color,
                background: cfg.bg,
              }}
            >
              <ConfIcon size={10} />
              {cfg.label}
            </span>
            <span style={{ fontSize: 12, color: T.muted }}>{verse.reference}</span>
          </div>
          <p
            style={{
              fontSize: 15,
              color: T.text,
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {verse.text}
          </p>
        </div>
        <div style={{ flexShrink: 0, color: T.muted, paddingTop: 2 }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Expanded */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 20px 20px',
                borderTop: `1px solid ${T.border}`,
                paddingTop: 16,
              }}
            >
              {/* Quran echo */}
              {verse.quranEcho && (
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: 10,
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    marginBottom: 14,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: T.gold,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 6,
                    }}
                  >
                    Eco no Alcorão — {verse.quranEcho.reference}
                  </p>
                  <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;{verse.quranEcho.text}&rdquo;
                  </p>
                </div>
              )}

              {/* Note */}
              <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.7, margin: 0 }}>
                {verse.note}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── BookSection ───────────────────────────────────────────────────────────────
function BookSection({ book }: { book: ScriptureBook }) {
  const color = BOOK_COLORS[book.id] ?? T.gold
  const fullCount = book.verses.filter((v) => v.confidence === 'full').length

  return (
    <section style={{ marginBottom: 64 }}>
      {/* Book header */}
      <SectionReveal>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 20,
            padding: '28px 28px',
            borderRadius: 16,
            border: `1px solid ${color}30`,
            background: `${color}05`,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `${color}15`,
              border: `1px solid ${color}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Scroll size={24} style={{ color }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: T.text, margin: 0 }}>
                {book.name}
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 22,
                  color,
                  direction: 'rtl',
                }}
              >
                {book.arabic}
              </span>
            </div>
            <p style={{ fontSize: 13, color: T.muted, marginBottom: 8 }}>
              Revelado a {book.prophet} · {fullCount} de {book.verses.length} passagens de leitura completa
            </p>
            {/* Confirmation verse */}
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 8,
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <p style={{ fontSize: 11, color: T.gold, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                Alcorão confirma — {book.quranConfirmation.reference}
              </p>
              <p style={{ fontSize: 13, color: T.secondary, fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                &ldquo;{book.quranConfirmation.text}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Intro */}
      <SectionReveal delay={0.05}>
        <p style={{ fontSize: 15, color: T.secondary, lineHeight: 1.8, marginBottom: 24 }}>
          {book.intro}
        </p>
      </SectionReveal>

      {/* Verses */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {book.verses.map((verse, i) => (
          <SectionReveal key={verse.reference} delay={i * 0.05}>
            <VerseCard verse={verse} />
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function EscriturasClient() {
  const [activeFilter, setActiveFilter] = useState<Confidence | 'all'>('all')

  const filteredBooks = BOOKS.map((book) => ({
    ...book,
    verses:
      activeFilter === 'all'
        ? book.verses
        : book.verses.filter((v) => v.confidence === activeFilter),
  })).filter((book) => book.verses.length > 0)

  const totalFull = BOOKS.flatMap((b) => b.verses).filter((v) => v.confidence === 'full').length
  const totalVerses = BOOKS.flatMap((b) => b.verses).length

  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 60px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              href="/a-ponte"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: T.muted,
                textDecoration: 'none',
                fontSize: 13,
                marginBottom: 32,
              }}
            >
              <ArrowLeft size={14} />
              A Ponte
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Faith declaration */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 18px',
                borderRadius: 20,
                border: '1px solid rgba(201,168,76,0.3)',
                background: 'rgba(201,168,76,0.06)',
                marginBottom: 24,
              }}
            >
              <Star size={13} style={{ color: T.gold }} fill={T.gold} />
              <span style={{ fontSize: 13, color: T.gold, fontWeight: 600 }}>
                3º Pilar da Fé Islâmica — Crença nos Livros Revelados
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 800,
                color: T.text,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              O muçulmano crê{' '}
              <span style={{ color: T.gold }}>na Torah, nos Salmos e no Evangelho.</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                color: T.secondary,
                lineHeight: 1.75,
                maxWidth: 620,
                marginBottom: 32,
              }}
            >
              Não é opcional. É artigo de fé obrigatório (Iman bil-Kutub). O muçulmano que nega que
              Deus revelou a Torah a Moisés, os Salmos a Davi ou o Evangelho a Jesus —{' '}
              <strong style={{ color: T.text }}>não é muçulmano.</strong>
            </p>

            {/* Anchor verse */}
            <div
              style={{
                padding: '24px 28px',
                borderRadius: 16,
                border: '1px solid rgba(201,168,76,0.25)',
                background: 'rgba(201,168,76,0.04)',
                maxWidth: 660,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: T.gold,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 10,
                }}
              >
                Alcorão — Al-Baqarah 2:136
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 22,
                  color: T.gold,
                  direction: 'rtl',
                  lineHeight: 1.9,
                  marginBottom: 14,
                  textAlign: 'right',
                }}
              >
                قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا وَمَا أُنزِلَ إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ وَالْأَسْبَاطِ وَمَا أُوتِيَ مُوسَىٰ وَعِيسَىٰ وَمَا أُوتِيَ النَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْهُمْ
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: T.text,
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Dizemos: Cremos em Allah e no que nos foi revelado, e no que foi revelado a
                Abraão, Ismael, Isaac, Jacó e as tribos, e no que foi dado a Moisés e Jesus, e no
                que foi dado aos Profetas de seu Senhor —{' '}
                <strong>não diferenciamos entre nenhum deles.</strong>&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Legend ───────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <p
            style={{
              fontSize: 13,
              color: T.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            Guia de leitura — {totalFull} de {totalVerses} passagens de leitura completa
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {(['all', 'full', 'context'] as const).map((key) => {
              const isAll = key === 'all'
              const cfg = isAll ? null : CONFIDENCE_CONFIG[key]
              const isActive = activeFilter === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    borderRadius: 20,
                    border: `1px solid ${isActive ? (isAll ? T.gold : cfg!.color) : T.border}`,
                    background: isActive
                      ? isAll
                        ? 'rgba(201,168,76,0.1)'
                        : cfg!.bg
                      : 'transparent',
                    color: isActive ? (isAll ? T.gold : cfg!.color) : T.muted,
                    fontSize: 13,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {!isAll && cfg && <cfg.icon size={12} />}
                  {isAll ? 'Todas as passagens' : cfg!.label}
                </button>
              )
            })}
          </div>
        </motion.div>
      </section>

      <GoldDivider />

      {/* ── Books ────────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 0' }}>
        {filteredBooks.map((book) => (
          <BookSection key={book.id} book={book} />
        ))}
      </section>

      <GoldDivider />

      {/* ── The Preservation Question ─────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 48px' }}>
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 700,
              color: T.text,
              marginBottom: 16,
            }}
          >
            "Mas por que não seguir a Bíblia atual?"
          </h2>
          <p style={{ fontSize: 15, color: T.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            O Islam crê que os textos revelados originais foram, ao longo dos séculos, misturados com interpretações
            humanas, adições e traduções — o que o Alcorão chama de{' '}
            <strong style={{ color: T.gold }}>tahrif (تحريف)</strong> — alteração. Isso não é uma
            acusação. É uma observação histórica que os próprios estudiosos cristãos e judeus
            confirmam.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginBottom: 24,
            }}
          >
            {[
              {
                title: 'O que o Islam crê',
                items: [
                  'A Torah revelada a Moisés era Palavra de Deus — original e pura',
                  'Os Salmos revelados a Davi eram Palavra de Deus',
                  'O Evangelho revelado a Jesus era Palavra de Deus',
                  'Partes dessas revelações são preservadas nos textos atuais',
                ],
                color: T.green,
              },
              {
                title: 'O que o Islam questiona',
                items: [
                  'O Evangelho foi escrito por discípulos, décadas após Jesus — não por Jesus',
                  'As cartas de Paulo são teologia humana, não revelação direta',
                  'A Torah atual passou por compilações e edições humanas',
                  'Nenhum texto original (autógrafo) existe hoje — apenas cópias de cópias',
                ],
                color: T.amber,
              },
            ].map((col) => (
              <div
                key={col.title}
                style={{
                  padding: '20px',
                  borderRadius: 12,
                  border: `1px solid ${col.color}25`,
                  background: `${col.color}06`,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: col.color,
                    marginBottom: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {col.title}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        marginBottom: 8,
                        fontSize: 14,
                        color: T.secondary,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: col.color, marginTop: 2, flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '20px 24px',
              borderRadius: 14,
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <p style={{ fontSize: 15, color: T.text, lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: T.gold }}>A pergunta que muda tudo:</strong> Se você acredita
              que Jesus ensinou algo puro e direto de Deus — isso é exatamente o que o Alcorão diz
              que o Injil era. A questão não é "Bíblia sim ou não". A questão é: onde os ensinamentos
              originais de Jesus, Moisés e Davi estão mais integramente preservados?{' '}
              <strong style={{ color: T.text }}>
                O Alcorão afirma ser a resposta a essa pergunta.
              </strong>
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 80px' }}>
        <SectionReveal>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/a-ponte"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 12,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.1)',
                color: T.gold,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <BookOpen size={16} />
              Ver toda A Ponte
            </Link>
            <Link
              href="/a-palavra"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 12,
                border: `1px solid ${T.border}`,
                background: T.surface,
                color: T.secondary,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Ler o Alcorão agora
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
