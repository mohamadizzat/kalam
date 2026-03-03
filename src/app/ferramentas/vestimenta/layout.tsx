import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guia de Vestimenta — KALAM',
  description: 'Orientações sobre vestimenta islâmica para homens e mulheres. Elegância, identidade e fé no Brasil.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
