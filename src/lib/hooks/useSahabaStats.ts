'use client'

import { useMemo } from 'react'
import { useGuiaAgent } from '@/lib/agents/guia-agent'
import { useCuradorPick } from '@/lib/agents/curador-agent'
import { useProgressoAgent } from '@/lib/agents/progresso-agent'
import { SAHABAS, type SahabaIdentity } from '@/lib/data/sahabas'

export interface SahabaStat {
  sahaba: SahabaIdentity
  headline: string
  detail: string
  value: string | number
}

export function useSahabaStats(): { stats: SahabaStat[]; loading: boolean } {
  const guia = useGuiaAgent()
  const curador = useCuradorPick()
  const progresso = useProgressoAgent()

  const stats = useMemo(() => {
    // Read lightweight localStorage stats for agents without hooks
    const journalCount = getLocalStorageCount('kalam_journal_entries')
    const searchCount = getLocalStorageCount('kalam_search_history')
    const nudgeCount = getLocalStorageCount('kalam_nudge_impressions')

    return SAHABAS.map((sahaba): SahabaStat => {
      switch (sahaba.agentKey) {
        case 'guia': {
          const count = guia.data?.length ?? 0
          return {
            sahaba,
            headline: `${count} recomendações preparadas`,
            detail: count > 0
              ? `Próxima: "${guia.data![0].item.title}"`
              : 'Analisando seu perfil...',
            value: count,
          }
        }
        case 'curador': {
          const pick = curador.pick
          return {
            sahaba,
            headline: pick ? 'Descoberta do dia pronta' : 'Preparando sua descoberta',
            detail: pick ? `"${pick.item.title}"` : 'Selecionando o conteúdo perfeito...',
            value: pick ? 1 : 0,
          }
        }
        case 'conector':
          return {
            sahaba,
            headline: 'Mapeando conexões',
            detail: 'Ligando os pontos entre tudo que você lê',
            value: '∞',
          }
        case 'progresso': {
          const p = progresso.data
          const pct = p?.overall.percentage ?? 0
          const streak = p?.streak.current ?? 0
          return {
            sahaba,
            headline: `${Math.round(pct)}% explorado`,
            detail: streak > 0
              ? `${streak} dia${streak > 1 ? 's' : ''} seguidos`
              : 'Comece sua sequência hoje',
            value: `${Math.round(pct)}%`,
          }
        }
        case 'reflexao':
          return {
            sahaba,
            headline: journalCount > 0
              ? `${journalCount} reflexão${journalCount > 1 ? 'ões' : ''} guardada${journalCount > 1 ? 's' : ''}`
              : 'Esperando suas reflexões',
            detail: journalCount > 0
              ? 'Seus pensamentos estão seguros comigo'
              : 'Abra o journal e escreva o que sente',
            value: journalCount,
          }
        case 'busca':
          return {
            sahaba,
            headline: searchCount > 0
              ? `${searchCount} busca${searchCount > 1 ? 's' : ''} realizada${searchCount > 1 ? 's' : ''}`
              : 'Pronto pra qualquer pergunta',
            detail: 'Conheço cada versículo e história',
            value: searchCount,
          }
        case 'reengajamento':
          return {
            sahaba,
            headline: nudgeCount > 0
              ? `${nudgeCount} vez${nudgeCount > 1 ? 'es' : ''} chamou você de volta`
              : 'Sempre atento',
            detail: 'Nunca vou desistir de você',
            value: nudgeCount,
          }
        default:
          return {
            sahaba,
            headline: 'Trabalhando em silêncio',
            detail: 'Operando nos bastidores...',
            value: 0,
          }
      }
    })
  }, [guia.data, curador.pick, progresso.data])

  const loading = guia.loading || curador.loading || progresso.loading

  return { stats, loading }
}

function getLocalStorageCount(key: string): number {
  if (typeof window === 'undefined') return 0
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return 0
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed.length
    if (typeof parsed === 'number') return parsed
    return 0
  } catch {
    return 0
  }
}
