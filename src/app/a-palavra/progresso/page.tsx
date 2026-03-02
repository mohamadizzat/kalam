import type { Metadata } from 'next'
import { QuranProgressClient } from './QuranProgressClient'

export const metadata: Metadata = {
  title: 'Progresso no Quran | KALAM',
  description: 'Acompanhe seu progresso na leitura do Quran com estatisticas e heatmap.',
}

export default function QuranProgressPage() {
  return <QuranProgressClient />
}
