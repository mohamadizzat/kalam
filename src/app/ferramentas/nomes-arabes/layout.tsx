import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nomes Árabes — KALAM',
  description: 'Biblioteca de 51 nomes árabes islâmicos com significado, origem e transliteração. Busca por nome.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
