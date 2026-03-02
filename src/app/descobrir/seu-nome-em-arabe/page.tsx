import type { Metadata } from 'next'
import ArabicNameClient from './ArabicNameClient'

export const metadata: Metadata = {
  title: 'Seu Nome em Árabe — Descubra o Significado | KALAM',
  description: 'Digite seu nome e descubra como ele é escrito em árabe, sua transliteração e significado. Compartilhe com seus amigos!',
  openGraph: {
    title: 'Seu Nome em Árabe — Descubra o Significado | KALAM',
    description: 'Digite seu nome e descubra como ele é escrito em árabe, sua transliteração e significado.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seu Nome em Árabe | KALAM',
    description: 'Descubra como seu nome é escrito em árabe e seu significado.',
  },
}

export default function SeuNomeEmArabePage() {
  return <ArabicNameClient />
}
