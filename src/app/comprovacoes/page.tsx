import type { Metadata } from 'next'
import ComprovacoesClient from './ComprovacoesClient'

export const metadata: Metadata = {
  title: 'Comprovações Científicas no Alcorão | KALAM',
  description: '30+ evidências científicas mencionadas no Alcorão séculos antes da ciência moderna.',
  openGraph: {
    title: 'Comprovações Científicas no Alcorão | KALAM',
    description: '30+ evidências mencionadas no Alcorão antes da ciência moderna.',
  },
}

export default function ComprovacoesPage() {
  return <ComprovacoesClient />
}
