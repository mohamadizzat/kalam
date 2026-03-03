import type { Metadata } from 'next'
import { DevKalamClient } from './DevKalamClient'

export const metadata: Metadata = {
  title: 'Conselho dos Sahabas — Auditoria de UX | KALAM',
  description:
    'Os 7 companheiros digitais do Kalam auditam a experiencia do app. Diagnosticos, problemas criticos e plano de correcao de navegacao.',
  robots: { index: false, follow: false },
}

export default function DevKalamPage() {
  return <DevKalamClient />
}
