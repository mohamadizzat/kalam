import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Árvore dos Profetas — KALAM',
  description: 'Linhagem e conexão entre os 25 profetas mencionados no Quran. Da criação até Muhammad ﷺ.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
