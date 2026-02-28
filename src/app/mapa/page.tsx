import type { Metadata } from 'next'
import MapaClient from './MapaClient'

export const metadata: Metadata = {
  title: 'Mapa do Conteudo — KALAM',
  description: 'Navegue por todo o conteudo do Kalam. 4 espacos, dezenas de paginas, uma jornada de conhecimento.',
}

export default function MapaPage() {
  return <MapaClient />
}
