import type { Metadata } from 'next'
import { AcademyClient } from './AcademyClient'

export const metadata: Metadata = {
  title: 'Kalam Academy — Aprendizado Imersivo | KALAM',
  description:
    'Experiências imersivas de aprendizado. Histórias dos profetas com vídeo, trilhas guiadas e conteúdo exclusivo para membros da Kalam Community.',
  openGraph: {
    title: 'Kalam Academy',
    description: 'Aprendizado imersivo. Gratuito para membros da Kalam Community.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
}

export default function AcademyPage() {
  return <AcademyClient />
}
