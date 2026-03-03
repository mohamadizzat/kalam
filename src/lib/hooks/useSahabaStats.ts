'use client'

import { useMemo } from 'react'
import { useGuiaAgent } from '@/lib/agents/guia-agent'
import { useCuradorPick } from '@/lib/agents/curador-agent'
import { useProgressoAgent } from '@/lib/agents/progresso-agent'
import { useReflexaoAgent } from '@/lib/agents/reflexao-agent'
import { useBuscaAgent } from '@/lib/agents/busca-agent'
import { useReengajamentoAgent } from '@/lib/agents/reengajamento-agent'
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
  const reflexao = useReflexaoAgent()
  const busca = useBuscaAgent()
  const reengajamento = useReengajamentoAgent()

  const stats = useMemo(() => {
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

        case 'reflexao': {
          const r = reflexao.data
          if (!r || r.totalEntries === 0) {
            return {
              sahaba,
              headline: 'Esperando suas reflexões',
              detail: 'Abra o journal e escreva o que sente',
              value: 0,
            }
          }
          return {
            sahaba,
            headline: r.insight,
            detail: r.dominantMood
              ? `Humor dominante: ${r.dominantMood}`
              : `${r.totalEntries} entrada${r.totalEntries > 1 ? 's' : ''} no total`,
            value: r.totalEntries,
          }
        }

        case 'busca': {
          const b = busca.data
          if (!b || b.totalSearches === 0) {
            return {
              sahaba,
              headline: 'Pronto pra qualquer pergunta',
              detail: 'Conheço cada versículo e história',
              value: 0,
            }
          }
          return {
            sahaba,
            headline: b.insight,
            detail: b.topCategory
              ? `Foco principal: ${b.topCategory}`
              : `${b.uniqueTopics} tópicos únicos explorados`,
            value: b.totalSearches,
          }
        }

        case 'reengajamento': {
          const re = reengajamento.data
          if (!re) {
            return {
              sahaba,
              headline: 'Sempre atento',
              detail: 'Nunca vou desistir de você',
              value: 0,
            }
          }
          return {
            sahaba,
            headline: re.insight,
            detail: re.nudgeCount > 0
              ? `${re.nudgeCount} vez${re.nudgeCount > 1 ? 'es' : ''} chamou você de volta`
              : `Score de presença: ${re.engagementScore}/100`,
            value: re.engagementScore,
          }
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
  }, [
    guia.data,
    curador.pick,
    progresso.data,
    reflexao.data,
    busca.data,
    reengajamento.data,
  ])

  const loading =
    guia.loading ||
    curador.loading ||
    progresso.loading ||
    reflexao.loading ||
    busca.loading ||
    reengajamento.loading

  return { stats, loading }
}
