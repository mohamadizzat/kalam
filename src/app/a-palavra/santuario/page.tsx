import type { Metadata } from 'next'
import { SantuarioClient } from './SantuarioClient'

export const metadata: Metadata = {
  title: 'Santuario de Estudo | KALAM',
  description: 'Experiencia imersiva de estudo do Quran com audio, traducao e ambiente sonoro.',
}

export default function SantuarioPage() {
  return <SantuarioClient />
}
