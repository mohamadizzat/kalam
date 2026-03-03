'use client'

// ═══════════════════════════════════════════════════════════════════════
// KALAM — Bahith Agent (Busca)
// Analisa o histório de buscas do usuário.
// Detecta: total de buscas, tópico dominante, categoria de interesse,
// padrão de curiosidade, e gera insight personalizado.
// ═══════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'

export type BuscaCategory =
  | 'Profetas'
  | 'Quran'
  | 'Práticas'
  | 'Alma e Propósito'
  | 'Ciência e Fé'
  | 'História'
  | 'Outro'

export interface BuscaStats {
  totalSearches: number
  searchesThisWeek: number
  topTopic: string | null      // query mais repetida
  topCategory: BuscaCategory | null
  uniqueTopics: number         // queries únicas
  insight: string
}

// ── CATEGORY KEYWORDS ─────────────────────────────────────────────────────────

const CATEGORY_MAP: Array<{ category: BuscaCategory; keywords: string[] }> = [
  {
    category: 'Profetas',
    keywords: [
      'profeta', 'prophet', 'ibrahim', 'musa', 'isa', 'yusuf', 'muhammad',
      'nuh', 'dawud', 'sulayman', 'adam', 'noé', 'moisés', 'salomão', 'profetas',
    ],
  },
  {
    category: 'Quran',
    keywords: [
      'quran', 'surah', 'sura', 'versículo', 'aya', 'ayah', 'alcorão',
      'al-fatiha', 'baqarah', 'corão', 'coran', 'sura', 'capítulo',
    ],
  },
  {
    category: 'Práticas',
    keywords: [
      'oração', 'prayer', 'salah', 'wudu', 'ablução', 'ramadan', 'jejum',
      'zakat', 'hajj', 'halal', 'haram', 'ritual', 'adoração', 'dua', 'dhikr',
    ],
  },
  {
    category: 'Alma e Propósito',
    keywords: [
      'alma', 'propósito', 'sentido', 'paz', 'ansiedade', 'depressão',
      'gratidão', 'esperança', 'fé', 'confiança', 'tawakkul', 'sabr',
      'paciência', 'felicidade', 'significado', 'taqwa',
    ],
  },
  {
    category: 'Ciência e Fé',
    keywords: [
      'ciência', 'evolution', 'evolução', 'big bang', 'universo', 'cosmos',
      'criação', 'prova', 'evidência', 'razão', 'filosofia', 'lógica',
      'física', 'neurociência', 'mente',
    ],
  },
  {
    category: 'História',
    keywords: [
      'história', 'califado', 'ottoman', 'islâmico', 'andaluzia', 'meca',
      'medina', 'civilização', 'conquista', 'seerah', 'bagdá', 'cruzadas',
      'renascimento', 'islamic golden age',
    ],
  },
]

// ── HELPERS ───────────────────────────────────────────────────────────────────

function readJson<T>(key: string, fallback: T): T {
  try {
    if (typeof window === 'undefined') return fallback
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

type RawSearch = {
  query?: string
  q?: string
  term?: string
  timestamp?: string
  date?: string
  created_at?: string
}

function detectCategory(query: string): BuscaCategory {
  const lower = query.toLowerCase()
  for (const { category, keywords } of CATEGORY_MAP) {
    if (keywords.some((kw) => lower.includes(kw))) return category
  }
  return 'Outro'
}

// ── MAIN HOOK ─────────────────────────────────────────────────────────────────

export function useBuscaAgent(): { data: BuscaStats | null; loading: boolean } {
  const [data, setData] = useState<BuscaStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const raw = readJson<RawSearch[]>('kalam_search_history', [])

    const now = new Date()
    const sevenDaysAgo = new Date(now.getTime() - 7 * 86400000)

    const totalSearches = raw.length

    // ── Searches this week ──────────────────────────────────────────────────
    const searchesThisWeek = raw.filter((s) => {
      const d = new Date(s.timestamp || s.date || s.created_at || 0)
      return !isNaN(d.getTime()) && d >= sevenDaysAgo
    }).length

    if (totalSearches === 0) {
      setData({
        totalSearches: 0,
        searchesThisWeek: 0,
        topTopic: null,
        topCategory: null,
        uniqueTopics: 0,
        insight: 'Pronto pra qualquer pergunta que você trouxer',
      })
      setLoading(false)
      return
    }

    // ── Extract queries ─────────────────────────────────────────────────────
    const queries = raw
      .map((s) => (s.query || s.q || s.term || '').trim().toLowerCase())
      .filter((q) => q.length > 0)

    const uniqueTopics = new Set(queries).size

    // ── Top topic (most repeated) ───────────────────────────────────────────
    const queryCounts: Record<string, number> = {}
    for (const q of queries) {
      queryCounts[q] = (queryCounts[q] || 0) + 1
    }
    const topTopic =
      Object.entries(queryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || null

    // ── Category distribution ───────────────────────────────────────────────
    const categoryCounts: Partial<Record<BuscaCategory, number>> = {}
    for (const q of queries) {
      const cat = detectCategory(q)
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
    }

    const topCategory =
      (Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] as BuscaCategory) ||
      null

    // ── Insight ─────────────────────────────────────────────────────────────
    let insight = ''
    if (topCategory && topCategory !== 'Outro') {
      insight =
        searchesThisWeek > 0
          ? `${searchesThisWeek} busca${searchesThisWeek > 1 ? 's' : ''} essa semana — explorador de ${topCategory}`
          : `Seu interesse dominante: ${topCategory} — ${totalSearches} buscas no total`
    } else if (uniqueTopics >= 10) {
      insight = `Mente curiosa — ${uniqueTopics} tópicos únicos explorados`
    } else if (totalSearches >= 20) {
      insight = `${totalSearches} buscas — você vai fundo nas perguntas`
    } else {
      insight = `${totalSearches} busca${totalSearches > 1 ? 's' : ''} guardada${totalSearches > 1 ? 's' : ''}`
    }

    setData({
      totalSearches,
      searchesThisWeek,
      topTopic,
      topCategory,
      uniqueTopics,
      insight,
    })
    setLoading(false)
  }, [])

  return { data, loading }
}
