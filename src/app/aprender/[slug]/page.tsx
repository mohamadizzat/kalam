import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SEO_PAGES } from '@/lib/data/seo-pages'
import SEOPageClient from './SEOPageClient'

export async function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = SEO_PAGES.find((p) => p.slug === slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  }
}

export default async function AprenderSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = SEO_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()
  return <SEOPageClient page={page} />
}
