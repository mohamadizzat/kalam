import type { Metadata } from 'next'
import OSistemaClient from './OSistemaClient'

export const metadata: Metadata = {
  title: 'Os 5 Pilares do Islã | KALAM',
  description: 'Entenda os 5 pilares que sustentam a prática islâmica: Shahada, Salah, Zakat, Sawm e Hajj.',
  openGraph: {
    title: 'Os 5 Pilares do Islã | KALAM',
    description: 'Entenda os 5 pilares como um sistema operacional para a vida.',
  },
}

export default function OSistemaPage() {
  return <OSistemaClient />
}
