import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { LEADERSHIP_CHAPTERS } from '@/lib/data/prophetic-leadership'
import { LeadershipClient } from './LeadershipClient'

export function generateStaticParams() {
  return LEADERSHIP_CHAPTERS.map((ch) => ({ slug: ch.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const chapter = LEADERSHIP_CHAPTERS.find((ch) => ch.slug === slug)
  if (!chapter) return {}

  return {
    title: `${chapter.prophetName} — ${chapter.title} | Lideranca Profetica | KALAM`,
    description: chapter.subtitle,
    openGraph: {
      title: `${chapter.prophetName} — ${chapter.title}`,
      description: chapter.subtitle,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'Kalam',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${chapter.prophetName} — ${chapter.title} | KALAM`,
      description: chapter.subtitle,
    },
  }
}

export default async function LeadershipChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const chapter = LEADERSHIP_CHAPTERS.find((ch) => ch.slug === slug)
  if (!chapter) notFound()

  // Find adjacent chapters for navigation
  const currentIndex = LEADERSHIP_CHAPTERS.findIndex((ch) => ch.slug === slug)
  const prevChapter = currentIndex > 0 ? LEADERSHIP_CHAPTERS[currentIndex - 1] : null
  const nextChapter =
    currentIndex < LEADERSHIP_CHAPTERS.length - 1
      ? LEADERSHIP_CHAPTERS[currentIndex + 1]
      : null

  return (
    <LeadershipClient
      chapter={chapter}
      prevChapter={prevChapter ? { slug: prevChapter.slug, prophetName: prevChapter.prophetName, title: prevChapter.title } : null}
      nextChapter={nextChapter ? { slug: nextChapter.slug, prophetName: nextChapter.prophetName, title: nextChapter.title } : null}
    />
  )
}
