import type { Metadata } from 'next'
import ProphetQuizClient from './ProphetQuizClient'

export const metadata: Metadata = {
  title: 'Qual Profeta Você É? — Descubra Seu Perfil | KALAM',
  description: 'Responda 7 perguntas e descubra qual profeta tem a personalidade mais parecida com a sua. Compartilhe seu resultado!',
  openGraph: {
    title: 'Qual Profeta Você É? — Descubra Seu Perfil | KALAM',
    description: 'Responda 7 perguntas e descubra qual profeta tem a personalidade mais parecida com a sua.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qual Profeta Você É? | KALAM',
    description: 'Descubra qual profeta tem a personalidade mais parecida com a sua.',
  },
}

export default function QualProfetaVoceEPage() {
  return <ProphetQuizClient />
}
