import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guia de Alimentação Halal — KALAM',
  description: 'O que é halal e o que evitar. Guia prático para brasileiros sobre carnes, bebidas e aditivos alimentares.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
