import { surahStudies } from '@/lib/data/surah-studies'
import { StudyClient } from './StudyClient'

export function generateStaticParams() {
  return surahStudies.map(s => ({ slug: s.slug }))
}

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = surahStudies.find(s => s.slug === slug)
  if (!study) return <div>Estudo não encontrado</div>
  return <StudyClient study={study} />
}
