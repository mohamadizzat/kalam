import { bridgeThemes } from '@/lib/data/bridge-themes'
import { notFound } from 'next/navigation'
import { ThemeDetailClient } from './ThemeDetailClient'

export function generateStaticParams() {
  return bridgeThemes.map((t) => ({ themeId: t.id }))
}

export default async function ThemeDetailPage({
  params,
}: {
  params: Promise<{ themeId: string }>
}) {
  const { themeId } = await params
  const theme = bridgeThemes.find((t) => t.id === themeId)
  if (!theme) notFound()

  const idx = bridgeThemes.findIndex((t) => t.id === themeId)
  const prev = idx > 0 ? bridgeThemes[idx - 1] : null
  const next = idx < bridgeThemes.length - 1 ? bridgeThemes[idx + 1] : null

  return <ThemeDetailClient theme={theme} prev={prev} next={next} />
}
