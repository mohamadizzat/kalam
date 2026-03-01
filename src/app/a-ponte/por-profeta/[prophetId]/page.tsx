import { bridgeProphets } from '@/lib/data/bridge-prophets'
import { notFound } from 'next/navigation'
import { ProphetDetailClient } from './ProphetDetailClient'

export function generateStaticParams() {
  return bridgeProphets.map((p) => ({ prophetId: p.id }))
}

export default async function ProphetDetailPage({
  params,
}: {
  params: Promise<{ prophetId: string }>
}) {
  const { prophetId } = await params
  const prophet = bridgeProphets.find((p) => p.id === prophetId)
  if (!prophet) notFound()

  const currentIndex = bridgeProphets.findIndex((p) => p.id === prophetId)
  const prev = currentIndex > 0 ? bridgeProphets[currentIndex - 1] : null
  const next = currentIndex < bridgeProphets.length - 1 ? bridgeProphets[currentIndex + 1] : null

  return <ProphetDetailClient prophet={prophet} prev={prev} next={next} />
}
