import type { Metadata } from 'next'
import EscriturasClient from './EscriturasClient'

export const metadata: Metadata = {
  title: 'O Islã Crê nas Escrituras | KALAM',
  description:
    'O muçulmano é obrigado a crer na Torah, nos Salmos e no Evangelho como revelação divina. Veja os versículos reais que confirmam isso.',
  openGraph: {
    title: 'O Islã Crê nas Escrituras | KALAM',
    description:
      'Torah, Salmos e Evangelho — as escrituras que o Alcorão confirma. Versículos lado a lado.',
  },
}

export default function EscriturasPage() {
  return <EscriturasClient />
}
