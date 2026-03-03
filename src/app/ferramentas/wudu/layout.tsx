import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simulador de Wudu — KALAM',
  description: 'Guia visual passo a passo da ablução islâmica. 8 etapas com áudio, descrição e dua final.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
