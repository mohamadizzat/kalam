export function getDailyIndex(totalVerses: number): number {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  )
  return dayOfYear % totalVerses
}

export function formatRef(ref: string): string {
  return ref
}

// Shared verse type
export interface CuratedVerse {
  arabic: string
  portuguese: string
  ref: string
  surah: string
  theme: string
  context: string
  reflection: string
  godIsLove: string
}
