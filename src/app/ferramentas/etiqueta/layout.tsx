import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etiqueta Islâmica — KALAM',
  description: '42 práticas de adab islâmico em 7 contextos do dia a dia. Com referências de hadiths e versículos.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
