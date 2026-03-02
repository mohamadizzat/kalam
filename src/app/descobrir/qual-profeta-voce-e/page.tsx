import type { Metadata } from 'next'
import ProphetQuizClient from './ProphetQuizClient'

export const metadata: Metadata = {
  title: 'Qual Profeta Te Inspira? — Descubra Seu Perfil | KALAM',
  description: '7 perguntas. 8 profetas. Descubra qual deles pensa como você e compartilhe seu resultado!',
  openGraph: {
    title: 'Qual Profeta Te Inspira? — Descubra Seu Perfil | KALAM',
    description: '7 perguntas. 8 profetas. Descubra qual deles pensa como você.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qual Profeta Te Inspira? | KALAM',
    description: '7 perguntas. 8 profetas. Descubra qual deles pensa como você.',
  },
}

export default function QualProfetaVoceEPage() {
  return <ProphetQuizClient />
}
