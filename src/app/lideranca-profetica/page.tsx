import type { Metadata } from 'next'
import { LEADERSHIP_CHAPTERS } from '@/lib/data/prophetic-leadership'
import { LeadershipLandingClient } from './LeadershipLandingClient'

export const metadata: Metadata = {
  title: 'Lideranca Profetica — 8 Licoes dos Maiores Lideres da Historia | KALAM',
  description:
    'Estrategia, resiliencia, coragem. Os profetas foram os maiores lideres da humanidade. Descubra o que Ibrahim, Yusuf, Musa, Issa, Muhammad, Nuh, Dawud e Sulayman ensinam sobre lideranca real.',
  openGraph: {
    title: 'Lideranca Profetica — 8 Licoes dos Maiores Lideres da Historia',
    description:
      'Os profetas foram os maiores lideres da humanidade. Estrategia, resiliencia, coragem — tudo que voce precisa saber sobre lideranca real.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lideranca Profetica — KALAM',
    description:
      'Os profetas foram os maiores lideres da humanidade. 8 capitulos de sabedoria pratica.',
  },
}

export default function LiderancaProfeticaPage() {
  return <LeadershipLandingClient chapters={LEADERSHIP_CHAPTERS} />
}
