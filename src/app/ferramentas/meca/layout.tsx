import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guia de Viagem para Meca — KALAM',
  description: 'Passo a passo completo do Hajj e da Umra. Checklist de preparação e dicas práticas para brasileiros.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
