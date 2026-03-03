import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tracker de Sadaqah — KALAM',
  description: 'Registre seus atos de bondade e doações. Acompanhe sua sadaqah mensal com estatísticas.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
