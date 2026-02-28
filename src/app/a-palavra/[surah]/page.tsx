import { surahs } from '@/lib/data/surahs'
import { SurahReader } from './SurahReader'

export function generateStaticParams() {
  return surahs.map(s => ({ surah: String(s.number) }))
}

export default async function SurahPage({ params }: { params: Promise<{ surah: string }> }) {
  const { surah: surahParam } = await params
  const surahNumber = parseInt(surahParam)
  const surah = surahs.find(s => s.number === surahNumber)

  if (!surah) {
    return (
      <main style={{ background: '#0D0B12', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#7A7870', fontSize: '16px' }}>Surata não encontrada</p>
      </main>
    )
  }

  return <SurahReader surah={surah} />
}
