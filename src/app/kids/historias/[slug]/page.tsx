import { prophetStoriesKids } from '@/lib/data/kids/prophet-stories-kids'
import { HistoriaDetailClient } from './HistoriaDetailClient'

export function generateStaticParams() {
  return prophetStoriesKids.map((story) => ({ slug: story.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const story = prophetStoriesKids.find((s) => s.slug === slug)
    return {
      title: story ? `${story.title} | Kalam Kids` : 'Historia | Kalam Kids',
      description: story?.summary || 'Historia de um profeta',
    }
  })
}

export default async function HistoriaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <HistoriaDetailClient slug={slug} />
}
