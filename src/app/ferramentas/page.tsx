import type { Metadata } from 'next'
import FerramentasClient from './FerramentasClient'

export const metadata: Metadata = {
  title: 'Ferramentas | KALAM',
  description:
    'Qibla, horários de oração, recitação, dhikr, flashcards e mais de 40 ferramentas para sua jornada espiritual.',
  openGraph: {
    title: 'Ferramentas | KALAM',
    description: 'Mais de 40 ferramentas espirituais — oração, Quran, dhikr, journal e mais.',
  },
}

export default function FerramentasPage() {
  return <FerramentasClient />
}
