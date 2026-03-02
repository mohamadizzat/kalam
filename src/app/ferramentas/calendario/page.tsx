import type { Metadata } from 'next'
import CalendarioClient from './CalendarioClient'

export const metadata: Metadata = {
  title: 'Conversor de Calendário | KALAM',
  description: 'Converta datas entre o calendário gregoriano e o calendário islâmico (Hijri).',
}

export default function CalendarioPage() {
  return <CalendarioClient />
}
