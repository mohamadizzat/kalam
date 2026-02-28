/**
 * Estimates reading time for a given text.
 * Portuguese: 200 words per minute
 * Arabic: 100 words per minute
 */

function isArabic(text: string): boolean {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/
  return arabicPattern.test(text)
}

export function estimateReadingTime(text: string): string {
  if (!text || text.trim().length === 0) {
    return '< 1 min de leitura'
  }

  const words = text.trim().split(/\s+/).length
  const wpm = isArabic(text) ? 100 : 200
  const minutes = Math.ceil(words / wpm)

  if (minutes < 1) {
    return '< 1 min de leitura'
  }

  return `${minutes} min de leitura`
}

export function estimateReadingTimeMinutes(text: string): number {
  if (!text || text.trim().length === 0) return 0

  const words = text.trim().split(/\s+/).length
  const wpm = isArabic(text) ? 100 : 200
  return Math.max(1, Math.ceil(words / wpm))
}
