import type { Metadata } from 'next'
import GratidaoClient from './GratidaoClient'

export const metadata: Metadata = {
  title: 'Diário de Gratidão | KALAM',
  description: 'Registre 3 bênçãos diárias e acompanhe sua evolução espiritual com gratidão.',
}

export default function GratidaoPage() {
  return <GratidaoClient />
}
