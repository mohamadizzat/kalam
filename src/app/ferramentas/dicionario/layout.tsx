import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dicionário Árabe-Português — KALAM',
  description: '57 termos essenciais do Quran com árabe, transliteração, significado e exemplo de versículo.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
