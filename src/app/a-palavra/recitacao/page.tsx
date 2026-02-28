import type { Metadata } from 'next'
import { RecitacaoClient } from './RecitacaoClient'

export const metadata: Metadata = {
  title: 'Recitacao — KALAM',
  description: 'Ouca a recitacao completa do Quran por Mishary Rashid Alafasy. 114 suratas em audio.',
}

export default function RecitacaoPage() {
  return <RecitacaoClient />
}
