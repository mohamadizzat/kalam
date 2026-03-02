import type { PersonaId } from '@/lib/hooks/usePersona'

// Content categories mapped to site sections
export type ContentCategory =
  | 'profetas'    // /os-profetas
  | 'ponte'       // /a-ponte, /comprovacoes, bridge content
  | 'palavra'     // /a-palavra (Quran, surahs, study)
  | 'presenca'    // /a-presenca (dhikr, duas, salah, 99 nomes)
  | 'alma'        // /a-alma (journal, habits, mood)
  | 'trilhas'     // /trilhas
  | 'descobrir'   // /descobrir (viral apps)
  | 'biblia'      // /a-biblia-do-kalam
  | 'kids'        // /kids
  | 'lideranca'   // /lideranca-profetica
  | 'sistema'     // /o-sistema
  | 'ferramentas' // /ferramentas

export type ContentDepth = 'intro' | 'explore' | 'practice' | 'deep'

export type EdgeType =
  | 'same-prophet'
  | 'same-theme'
  | 'complementary'
  | 'deeper-dive'
  | 'bridge'
  | 'practice-after'
  | 'prerequisite'

export interface ContentItem {
  id: string
  title: string
  href: string
  category: ContentCategory
  type: string
  tags: string[]
  personaAffinity: Partial<Record<PersonaId, number>>
  depth: ContentDepth
  estimatedMinutes: number
  preview?: string
}

export interface ContentEdge {
  from: string
  to: string
  type: EdgeType
  weight: number
}

// Prophetic Principles — DNA of the agent system
export interface PropheticPrinciple {
  id: string
  name: string
  arabic: string
  principle: string
  contentBias: string[]     // tags that get boosted
  nudgeTemplates: string[]  // messages in this prophet's tone
}

export const PROPHETIC_PRINCIPLES: PropheticPrinciple[] = [
  {
    id: 'ibrahim',
    name: 'Ibrahim',
    arabic: 'إبراهيم',
    principle: 'Coragem questionadora',
    contentBias: ['bridge', 'hard-question', 'challenge', 'system'],
    nudgeTemplates: [
      'Questionar e o primeiro passo do conhecimento.',
      'Ibrahim destruiu idolos. Que certezas voce precisa questionar?',
    ],
  },
  {
    id: 'yusuf',
    name: 'Yusuf',
    arabic: 'يوسف',
    principle: 'Resiliencia estrategica',
    contentBias: ['resilience', 'patience', 'strategy', 'comeback'],
    nudgeTemplates: [
      'Da prisao ao palacio. Cada dificuldade e um degrau.',
      'Yusuf nunca perdeu a fe, mesmo no fundo do poco.',
    ],
  },
  {
    id: 'musa',
    name: 'Musa',
    arabic: 'موسى',
    principle: 'Libertacao',
    contentBias: ['bridge', 'freedom', 'justice', 'liberation'],
    nudgeTemplates: [
      'A verdade liberta. Que preconceito voce pode soltar hoje?',
      'Musa enfrentou o maior poder do mundo. Com Deus, nada e impossivel.',
    ],
  },
  {
    id: 'issa',
    name: 'Issa',
    arabic: 'عيسى',
    principle: 'Compaixao',
    contentBias: ['compassion', 'service', 'bridge', 'empathy'],
    nudgeTemplates: [
      'A maior forca e a gentileza deliberada.',
      'Issa curava corpos e almas. Como voce pode servir hoje?',
    ],
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    arabic: 'محمد',
    principle: 'Estrategia + execucao',
    contentBias: ['seerah', 'strategy', 'leadership', 'consistency'],
    nudgeTemplates: [
      'Consistencia supera intensidade. Um passo por dia.',
      'O Profeta ﷺ disse: a acao mais amada por Deus e a constante, mesmo que pequena.',
    ],
  },
  {
    id: 'nuh',
    name: 'Nuh',
    arabic: 'نوح',
    principle: 'Persistencia',
    contentBias: ['persistence', 'patience', 'long-term', 'faith'],
    nudgeTemplates: [
      '950 anos de convite. Nuh nunca desistiu.',
      'Construir quando ninguem acredita — essa e a verdadeira fe.',
    ],
  },
  {
    id: 'dawud',
    name: 'Dawud',
    arabic: 'داود',
    principle: 'Expressao + acao',
    contentBias: ['journal', 'reflection', 'worship', 'expression'],
    nudgeTemplates: [
      'Dawud cantava salmos e liderava nacoes. Expressao e forca.',
      'Escrever e uma forma de oracao. Abra seu journal.',
    ],
  },
  {
    id: 'sulayman',
    name: 'Sulayman',
    arabic: 'سليمان',
    principle: 'Sabedoria sistemica',
    contentBias: ['wisdom', 'system', 'knowledge', 'connection'],
    nudgeTemplates: [
      'Sulayman entendia a linguagem de toda criacao. Tudo esta conectado.',
      'Sabedoria e ver o padrao onde outros veem caos.',
    ],
  },
]

// Agent output types
export interface AgentResult<T> {
  data: T
  loading: boolean
  lastUpdated: number
}

export interface GuiaRecommendation {
  item: ContentItem
  reason: string
  score: number
}

export interface CuradorPick {
  item: ContentItem
  tagline: string
  dateKey: string
}

export interface ConectorSuggestion {
  item: ContentItem
  edgeType: EdgeType
  reason: string
  score: number
}

export interface ConectorCallout {
  text: string
  href: string
  type: 'fact' | 'bridge' | 'prophet'
}

export interface ProgressoData {
  overall: { completed: number; total: number; percentage: number }
  byCategory: Partial<Record<ContentCategory, { completed: number; total: number; percentage: number }>>
  streak: { current: number; longest: number; daysActive: number }
  nextMilestone: { description: string; progress: number; target: number } | null
}

export interface UserContext {
  persona: PersonaId | null
  isAuthenticated: boolean
  isKids: boolean
  completedContentIds: Set<string>
  bookmarkedIds: Set<string>
  lastVisitedPaths: string[]
  currentStreak: number
  longestStreak: number
  completedCount: number
  journalEntries: number
  trailProgress: Record<string, number>
  recentMoods: string[]
  firstVisitDate: string | null
  daysSinceFirstVisit: number
}
