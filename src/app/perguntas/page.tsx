import type { Metadata } from 'next'
import PerguntasClient from './PerguntasClient'

export const metadata: Metadata = {
  title: 'Perguntas Difíceis sobre o Islã | KALAM',
  description: 'Respostas honestas para as perguntas mais difíceis sobre o Islã. Violência, mulheres, ciência, predestinação e mais.',
  openGraph: {
    title: 'Perguntas Difíceis sobre o Islã | KALAM',
    description: 'Respostas honestas para as perguntas mais difíceis sobre o Islã.',
  },
}

export default function PerguntasPage() {
  return <PerguntasClient />
}
