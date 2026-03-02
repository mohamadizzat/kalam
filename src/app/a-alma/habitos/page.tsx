import type { Metadata } from 'next'
import { HabitosClient } from './HabitosClient'

export const metadata: Metadata = {
  title: 'Habitos Espirituais | KALAM',
  description: 'Acompanhe seus habitos espirituais diarios com streak e heatmap.',
}

export default function HabitosPage() {
  return <HabitosClient />
}
