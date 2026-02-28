// Server component — handles generateStaticParams + data fetching
import { TrailClient } from './TrailClient'
import { TRAILS, type Trail } from '@/lib/data/trails'

export type { Trail }

// ── STATIC PARAMS ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return TRAILS
    .filter((t) => t.available)
    .map((t) => ({ slug: t.slug }))
}

// ── PAGE ───────────────────────────────────────────────────────────────────────

export default function TrailPage({ params }: { params: { slug: string } }) {
  const trail = TRAILS.find((t) => t.slug === params.slug) ?? null
  return <TrailClient trail={trail} />
}
