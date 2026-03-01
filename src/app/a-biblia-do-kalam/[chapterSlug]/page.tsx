import { chapters } from '@/lib/data/biblia-do-kalam-chapters'
import { notFound } from 'next/navigation'
import { ChapterReaderClient } from './ChapterReaderClient'

export function generateStaticParams() {
  return chapters.map((c) => ({ chapterSlug: c.slug }))
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>
}) {
  const { chapterSlug } = await params
  const chapter = chapters.find((c) => c.slug === chapterSlug)
  if (!chapter) notFound()

  return <ChapterReaderClient chapter={chapter} />
}
