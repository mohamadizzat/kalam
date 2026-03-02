import type { Metadata } from 'next'
import JejumClient from './JejumClient'

export const metadata: Metadata = {
  title: 'Tracker de Jejum | KALAM',
  description: 'Countdown ao Iftar, horários de Suhoor e acompanhamento do seu jejum durante o Ramadan.',
}

export default function JejumPage() {
  return <JejumClient />
}
