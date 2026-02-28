'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BookOpen, HandHeart, Lightbulb, Check, Flame, Trophy } from 'lucide-react'

/* ─── Types ─── */
type TaskType = 'read' | 'practice' | 'reflect'

interface DailyTask {
  type: TaskType
  title: string
  description: string
  href: string
  estimatedMinutes: number
}

interface DailyPlan {
  tasks: [DailyTask, DailyTask, DailyTask]
}

/* ─── 30 Daily Plans ─── */
const DAILY_PLANS: DailyPlan[] = [
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Fatiha', description: 'A abertura do Quran — a suplica mais repetida', href: '/a-palavra/1', estimatedMinutes: 3 },
      { type: 'practice', title: 'Adhkar da manha', description: 'Comece o dia com as suplicas matinais', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Gratidao', description: 'Escreva 3 bencaos que voce reconhece hoje', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Estudo de Ayat al-Kursi', description: 'O versiculo do Trono — protecao e majestade divina', href: '/a-palavra/estudo/ayat-al-kursi', estimatedMinutes: 8 },
      { type: 'practice', title: 'Flashcards: 99 Nomes', description: 'Memorize 5 nomes de Deus com cartoes', href: '/a-presenca/flashcards', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre gratidao', description: 'Pelo que voce mais agradece a Deus?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Colecao de Hadiths', description: 'Palavras do Profeta sobre fe e carater', href: '/a-palavra/hadiths', estimatedMinutes: 5 },
      { type: 'practice', title: 'Sessao de Dhikr', description: 'SubhanAllah, Alhamdulillah, Allahu Akbar — 33x cada', href: '/a-presenca/dhikr', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Leia uma parabola', description: 'Historias curtas com licoes profundas', href: '/a-palavra/parabolas', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Baqarah (inicio)', description: 'A maior surah — guia para os que temem a Deus', href: '/a-palavra/2', estimatedMinutes: 8 },
      { type: 'practice', title: 'Pratique o Alfabeto Arabe', description: 'Aprenda 5 letras do alfabeto arabe', href: '/a-presenca/arabe', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Paciencia', description: 'Quando foi dificil ter paciencia recentemente?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Adam', description: 'O primeiro ser humano e a primeira escolha', href: '/os-profetas/adam', estimatedMinutes: 8 },
      { type: 'practice', title: 'Duas para protecao', description: 'Suplicas de refugio e seguranca', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre erros', description: 'Como voce lida com seus proprios erros?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Ya-Sin', description: 'O coracao do Quran — vida, morte e ressurreicao', href: '/a-palavra/36', estimatedMinutes: 10 },
      { type: 'practice', title: 'Contemplacao de versiculo', description: 'Leitura meditativa de um versiculo escolhido', href: '/a-presenca/contemplacao', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Proposito', description: 'Qual e o proposito da sua vida?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Seerah: Capitulo 1', description: 'A vida do Profeta Muhammad — infancia e contexto', href: '/a-jornada/seerah', estimatedMinutes: 10 },
      { type: 'practice', title: '99 Nomes: Ar-Rahman', description: 'O Misericordioso — reflita sobre a misericordia divina', href: '/a-presenca/99-nomes', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre misericordia', description: 'Voce tem sido misericordioso com os outros?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Mulk', description: 'A soberania — protecao no tumulo', href: '/a-palavra/67', estimatedMinutes: 8 },
      { type: 'practice', title: 'Adhkar da noite', description: 'Encerre o dia com lembranca de Deus', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Medo', description: 'O que te impede de crescer espiritualmente?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Nuh', description: 'A perseveranca diante da rejeicao total', href: '/os-profetas/nuh', estimatedMinutes: 8 },
      { type: 'practice', title: 'Sessao de Dhikr longa', description: 'La ilaha illallah — 100 vezes com presenca', href: '/a-presenca/dhikr', estimatedMinutes: 7 },
      { type: 'reflect', title: 'Reflita sobre perseveranca', description: 'Quando voce quase desistiu mas continuou?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Estudo de Surah Al-Kahf', description: 'As 4 provas da vida: fe, riqueza, conhecimento, poder', href: '/a-palavra/estudo/al-kahf', estimatedMinutes: 10 },
      { type: 'practice', title: 'Flashcards: 99 Nomes', description: 'Revise e aprenda mais 5 nomes divinos', href: '/a-presenca/flashcards', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Riqueza', description: 'Qual e a verdadeira riqueza na sua vida?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Ar-Rahman', description: 'Qual das gracas do vosso Senhor negareis?', href: '/a-palavra/55', estimatedMinutes: 8 },
      { type: 'practice', title: 'Rotina espiritual da manha', description: 'Complete o checklist matinal completo', href: '/a-alma/rotina', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre gracas', description: 'Liste 5 gracas que normalmente ignora', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Ibrahim', description: 'O pai do monoteismo — fe inabalavel', href: '/os-profetas/ibrahim', estimatedMinutes: 10 },
      { type: 'practice', title: 'Duas de Ibrahim', description: 'As suplicas que Ibrahim fez por sua familia', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Sacrificio', description: 'O que voce esta disposto a sacrificar por Deus?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Parabolas do Quran', description: 'Historias que iluminam verdades profundas', href: '/a-palavra/parabolas', estimatedMinutes: 5 },
      { type: 'practice', title: 'Pratique o Alfabeto Arabe', description: 'Revise letras e aprenda novas conexoes', href: '/a-presenca/arabe', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre simplicidade', description: 'Sua vida reflete simplicidade ou excesso?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Waqi\'a', description: 'O Evento Inevitavel — os tres grupos no Dia Final', href: '/a-palavra/56', estimatedMinutes: 8 },
      { type: 'practice', title: 'Contemplacao profunda', description: 'Escolha um versiculo e medite por 5 minutos', href: '/a-presenca/contemplacao', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Legado', description: 'Qual legado voce quer deixar?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Companheiros do Profeta', description: 'Os homens que construiram uma civilizacao', href: '/a-jornada/companheiros', estimatedMinutes: 8 },
      { type: 'practice', title: 'Sessao de Dhikr', description: 'Astaghfirullah — 100 vezes com sinceridade', href: '/a-presenca/dhikr', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre amizade', description: 'Suas amizades te aproximam ou afastam de Deus?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Hashr (final)', description: 'Os nomes divinos no final desta surah', href: '/a-palavra/59', estimatedMinutes: 5 },
      { type: 'practice', title: '99 Nomes: Al-Wadud', description: 'O Amoroso — o amor incondicional de Deus', href: '/a-presenca/99-nomes', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Amor', description: 'Como voce expressa amor de forma sincera?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Musa', description: 'De principe a profeta — a maior jornada', href: '/os-profetas/musa', estimatedMinutes: 10 },
      { type: 'practice', title: 'Duas para orientacao', description: 'Suplicas por guia e clareza no caminho', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre coragem', description: 'Quando voce precisou de coragem para fazer o certo?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Hujurat', description: 'Etica social — como tratar os outros', href: '/a-palavra/49', estimatedMinutes: 8 },
      { type: 'practice', title: 'Rotina espiritual da noite', description: 'Complete o checklist noturno', href: '/a-alma/rotina', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Respeito', description: 'Voce trata todos com a mesma dignidade?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Mulheres no Islam', description: 'As historias que o mundo nao conta', href: '/a-jornada/mulheres', estimatedMinutes: 8 },
      { type: 'practice', title: 'Flashcards: 99 Nomes', description: 'Teste seus conhecimentos com revisao espacada', href: '/a-presenca/flashcards', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre justica', description: 'Onde ha injustica ao seu redor que voce pode mudar?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Insan', description: 'O ser humano — da insignificancia a nobreza', href: '/a-palavra/76', estimatedMinutes: 8 },
      { type: 'practice', title: 'Sessao de Dhikr: Salawat', description: 'Envie paz ao Profeta 100 vezes', href: '/a-presenca/dhikr', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Identidade', description: 'Quem voce e quando ninguem esta olhando?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Yusuf', description: 'Beleza, traicao, prisao e poder', href: '/os-profetas/yusuf', estimatedMinutes: 10 },
      { type: 'practice', title: 'Contemplacao: Surah Yusuf', description: 'Medite sobre a paciencia e a confianca em Deus', href: '/a-presenca/contemplacao', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre confianca', description: 'Voce confia no plano de Deus mesmo na dificuldade?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Hadiths sobre carater', description: 'O que o Profeta ensinou sobre bom carater', href: '/a-palavra/hadiths', estimatedMinutes: 5 },
      { type: 'practice', title: 'Pratique o Alfabeto Arabe', description: 'Conecte letras e forme palavras simples', href: '/a-presenca/arabe', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Carater', description: 'Qual traco de carater voce quer fortalecer?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Ad-Duha', description: 'Luz apos a escuridao — consolo divino', href: '/a-palavra/93', estimatedMinutes: 3 },
      { type: 'practice', title: '99 Nomes: An-Nur', description: 'A Luz — Deus como guia na escuridao', href: '/a-presenca/99-nomes', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre esperanca', description: 'De onde vem sua esperanca nos momentos dificeis?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Linha do Tempo Islamica', description: '14 seculos de historia e civilizacao', href: '/a-jornada/historia', estimatedMinutes: 8 },
      { type: 'practice', title: 'Sessao de Dhikr: Hasbunallah', description: 'Deus nos basta — repita com convicao', href: '/a-presenca/dhikr', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Historia', description: 'O que a historia islamica te inspira?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-\'Asr', description: '3 versiculos que resumem toda a vida humana', href: '/a-palavra/103', estimatedMinutes: 3 },
      { type: 'practice', title: 'Duas antes de dormir', description: 'Encerre o dia em paz com Deus', href: '/a-presenca/duas', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre o tempo', description: 'Como voce tem usado seu tempo?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Historia do Profeta Isa', description: 'O messias no Islam — palavra de Deus e espirito dEle', href: '/os-profetas/isa', estimatedMinutes: 10 },
      { type: 'practice', title: 'Rotina espiritual completa', description: 'Manha + noite — o ciclo espiritual', href: '/a-alma/rotina', estimatedMinutes: 7 },
      { type: 'reflect', title: 'Journal: Fe', description: 'O que fortalece e o que enfraquece sua fe?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Ikhlas', description: 'A pureza da unicidade de Deus — equivale a 1/3 do Quran', href: '/a-palavra/112', estimatedMinutes: 3 },
      { type: 'practice', title: 'Flashcards: revisao geral', description: 'Revise todos os nomes aprendidos ate agora', href: '/a-presenca/flashcards', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre tawhid', description: 'Sua vida reflete a unicidade de Deus em tudo?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Financas Islamicas', description: 'Riqueza com proposito e responsabilidade', href: '/a-jornada/financas', estimatedMinutes: 8 },
      { type: 'practice', title: 'Sessao de Dhikr: Tawbah', description: 'Astaghfirullah wa atubu ilaih — arrependimento sincero', href: '/a-presenca/dhikr', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Dinheiro', description: 'Sua relacao com dinheiro e saudavel?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Leia Surah Al-Furqan', description: 'Os servos do Misericordioso — como eles sao', href: '/a-palavra/25', estimatedMinutes: 10 },
      { type: 'practice', title: 'Contemplacao: Ibad ar-Rahman', description: 'Medite sobre as qualidades dos servos de Deus', href: '/a-presenca/contemplacao', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Reflita sobre humildade', description: 'Voce caminha na terra com humildade?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
  {
    tasks: [
      { type: 'read', title: 'Saude Mental no Islam', description: 'Sabedoria islamica para a mente e o coracao', href: '/a-alma/saude-mental', estimatedMinutes: 8 },
      { type: 'practice', title: '99 Nomes: Ash-Shafi', description: 'O Curador — confie na cura que vem de Deus', href: '/a-presenca/99-nomes', estimatedMinutes: 5 },
      { type: 'reflect', title: 'Journal: Cura', description: 'O que precisa de cura na sua vida hoje?', href: '/a-alma/journal', estimatedMinutes: 5 },
    ],
  },
]

/* ─── Helpers ─── */
function getDayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function getStorageKey(date: string): string {
  return `kalam-daily-plan-${date}`
}

const STREAK_KEY = 'kalam-daily-plan-streak'
const LAST_COMPLETED_KEY = 'kalam-daily-plan-last-completed'

function getTaskIcon(type: TaskType) {
  switch (type) {
    case 'read': return BookOpen
    case 'practice': return HandHeart
    case 'reflect': return Lightbulb
  }
}

function getTaskLabel(type: TaskType): string {
  switch (type) {
    case 'read': return 'Leitura'
    case 'practice': return 'Pratica'
    case 'reflect': return 'Reflexao'
  }
}

/* ─── Progress Ring ─── */
function ProgressRing({ completed, total }: { completed: number; total: number }) {
  const size = 80
  const stroke = 6
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = total > 0 ? completed / total : 0
  const offset = circumference - progress * circumference

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#272230"
          strokeWidth={stroke}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#C9A84C"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </svg>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {completed === total && total > 0 ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
          >
            <Trophy size={24} style={{ color: '#C9A84C' }} />
          </motion.div>
        ) : (
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#F0EBE2',
          }}>
            {completed}/{total}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export function PlanoClient() {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set())
  const [streak, setStreak] = useState(0)
  const [mounted, setMounted] = useState(false)

  const today = useMemo(() => getToday(), [])
  const dayIndex = useMemo(() => getDayOfYear() % DAILY_PLANS.length, [])
  const plan = DAILY_PLANS[dayIndex]
  const allDone = completedTasks.size === 3
  const totalMinutes = plan.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0)

  // Load state from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(getStorageKey(today))
      if (saved) {
        setCompletedTasks(new Set(JSON.parse(saved)))
      }

      // Calculate streak
      const lastCompleted = localStorage.getItem(LAST_COMPLETED_KEY)
      const savedStreak = parseInt(localStorage.getItem(STREAK_KEY) || '0')

      if (lastCompleted === today) {
        setStreak(savedStreak)
      } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        if (lastCompleted === yesterday) {
          setStreak(savedStreak)
        } else if (lastCompleted) {
          // Streak broken
          setStreak(0)
          localStorage.setItem(STREAK_KEY, '0')
        }
      }
    } catch {
      // ignore
    }
  }, [today])

  const toggleTask = useCallback((index: number) => {
    setCompletedTasks(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      // Persist
      const today = getToday()
      localStorage.setItem(getStorageKey(today), JSON.stringify([...next]))

      // Update streak when all 3 done
      if (next.size === 3) {
        const lastCompleted = localStorage.getItem(LAST_COMPLETED_KEY)
        const currentStreak = parseInt(localStorage.getItem(STREAK_KEY) || '0')
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

        let newStreak: number
        if (lastCompleted === today) {
          newStreak = currentStreak
        } else if (lastCompleted === yesterday) {
          newStreak = currentStreak + 1
        } else {
          newStreak = 1
        }

        localStorage.setItem(STREAK_KEY, String(newStreak))
        localStorage.setItem(LAST_COMPLETED_KEY, today)
        setStreak(newStreak)
      }

      return next
    })
  }, [])

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/a-jornada" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '24px',
          }}>
            <ArrowLeft size={16} />
            A Jornada
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Plano Diario
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
            marginTop: '8px',
          }}>
            3 micro-tarefas para hoje &middot; {totalMinutes} minutos
          </p>
        </motion.div>

        {/* Progress + Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '32px',
            padding: '28px 24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <ProgressRing completed={mounted ? completedTasks.size : 0} total={3} />

          {/* Streak */}
          {mounted && streak > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Flame size={20} style={{ color: '#C9A84C' }} />
              <div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1,
                }}>
                  {streak}
                </p>
                <p style={{
                  fontSize: '11px',
                  color: '#7A7870',
                  marginTop: '2px',
                }}>
                  {streak === 1 ? 'dia seguido' : 'dias seguidos'}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Completion message */}
        <AnimatePresence>
          {mounted && allDone && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                marginTop: '20px',
                padding: '20px 24px',
                borderRadius: '16px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                textAlign: 'center',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                fontWeight: 600,
                color: '#C9A84C',
                marginBottom: '4px',
              }}>
                Parabens! Voce completou o dia.
              </p>
              <p style={{
                fontSize: '13px',
                color: '#B3B0A6',
              }}>
                Volte amanha para novas tarefas.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Task List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '24px',
        }}>
          {plan.tasks.map((task, i) => {
            const Icon = getTaskIcon(task.type)
            const isCompleted = mounted && completedTasks.has(i)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
                style={{
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${isCompleted ? 'rgba(201,168,76,0.3)' : '#272230'}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px',
                }}>
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(i)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      border: `2px solid ${isCompleted ? '#C9A84C' : '#272230'}`,
                      background: isCompleted ? 'rgba(201,168,76,0.15)' : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label={isCompleted ? 'Desmarcar tarefa' : 'Marcar tarefa como concluida'}
                  >
                    <AnimatePresence>
                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <Check size={16} style={{ color: '#C9A84C' }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Content */}
                  <Link href={task.href} style={{
                    flex: 1,
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}>
                    {/* Type badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      <Icon size={12} style={{ color: isCompleted ? '#C9A84C' : '#7A7870' }} />
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: isCompleted ? '#C9A84C' : '#7A7870',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}>
                        {getTaskLabel(task.type)} &middot; {task.estimatedMinutes} min
                      </span>
                    </div>

                    {/* Title */}
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: isCompleted ? '#7A7870' : '#F0EBE2',
                      textDecoration: isCompleted ? 'line-through' : 'none',
                      transition: 'color 0.3s ease',
                    }}>
                      {task.title}
                    </p>

                    {/* Description */}
                    <p style={{
                      fontSize: '13px',
                      color: isCompleted ? '#4a4940' : '#7A7870',
                      lineHeight: 1.5,
                      transition: 'color 0.3s ease',
                    }}>
                      {task.description}
                    </p>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Day indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#4a4940',
            marginTop: '24px',
          }}
        >
          Dia {dayIndex + 1} de 30 &middot; Plano renovado diariamente
        </motion.p>

      </div>
    </main>
  )
}
