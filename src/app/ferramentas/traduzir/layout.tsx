import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparador de Traduções do Quran — KALAM',
  description: 'Compare 3 traduções PT-BR de versículos do Quran lado a lado. Samir El-Hayek, Helmi Nasr e Adel Mamede.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
