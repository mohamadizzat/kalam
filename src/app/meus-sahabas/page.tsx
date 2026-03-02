import type { Metadata } from 'next'
import SahabasClient from './SahabasClient'

export const metadata: Metadata = {
  title: 'Meus Sahabas — KALAM Premium',
  description: 'Seus 7 companheiros inteligentes. Conheça quem trabalha pela sua jornada espiritual.',
}

export default function MeusSahabasPage() {
  return <SahabasClient />
}
