import type { Metadata } from 'next'
import { PainelClient } from './PainelClient'

export const metadata: Metadata = {
  title: 'Painel de Aprendizado | Kalam',
  description: 'Acompanhe todo o seu progresso espiritual em um so lugar.',
}

export default function PainelPage() {
  return <PainelClient />
}
