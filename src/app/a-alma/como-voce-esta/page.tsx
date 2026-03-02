import type { Metadata } from 'next'
import { MoodClient } from './MoodClient'

export const metadata: Metadata = {
  title: 'Como Voce Esta? | KALAM',
  description: 'Selecione como voce esta e receba praticas espirituais personalizadas.',
}

export default function MoodPage() {
  return <MoodClient />
}
