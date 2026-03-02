import type { Metadata } from 'next'
import { ArabeQuranClient } from './ArabeQuranClient'

export const metadata: Metadata = {
  title: 'Arabe do Quran | KALAM',
  description: 'Aprenda as 300 palavras mais comuns do Quran no estilo Duolingo.',
}

export default function ArabeQuranPage() {
  return <ArabeQuranClient />
}
