import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notas de Khutbah — KALAM',
  description: 'Salve e organize suas anotações de sermões e palestras islâmicas. Armazenado localmente.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
