import { badgesKids } from '@/lib/data/kids/badges-kids'

export interface KidsProgress {
  stars: number
  level: number
  completedStories: string[]
  completedSurahs: string[]
  completedDuas: string[]
  completedQuizzes: string[]
  completedActivities: string[]
  completedPillars: string[]
  completedFaithPillars: string[]
  completedHeroes: string[]
  completedAdab: string[]
  badges: string[]
  streak: number
  lastVisit: string
  quizScores: Record<string, number>
}

const STORAGE_KEY = 'kalam-kids-progress'

const LEVELS = [
  { name: 'Semente', emoji: '🌱', minStars: 0 },
  { name: 'Broto', emoji: '🌿', minStars: 10 },
  { name: 'Planta', emoji: '🌺', minStars: 30 },
  { name: 'Arvore', emoji: '🌳', minStars: 60 },
  { name: 'Floresta', emoji: '🌲', minStars: 100 },
  { name: 'Jardim', emoji: '🌻', minStars: 150 },
  { name: 'Oasis', emoji: '🏝️', minStars: 210 },
  { name: 'Montanha', emoji: '⛰️', minStars: 280 },
  { name: 'Estrela', emoji: '⭐', minStars: 360 },
  { name: 'Lua', emoji: '🌙', minStars: 450 },
]

function getDefaultProgress(): KidsProgress {
  return {
    stars: 0,
    level: 0,
    completedStories: [],
    completedSurahs: [],
    completedDuas: [],
    completedQuizzes: [],
    completedActivities: [],
    completedPillars: [],
    completedFaithPillars: [],
    completedHeroes: [],
    completedAdab: [],
    badges: [],
    streak: 0,
    lastVisit: '',
    quizScores: {},
  }
}

function updateStreak(progress: KidsProgress): KidsProgress {
  const today = new Date().toISOString().split('T')[0]
  if (progress.lastVisit === today) return progress

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toISOString().split('T')[0]

  if (progress.lastVisit === yesterdayStr) {
    return { ...progress, streak: progress.streak + 1, lastVisit: today }
  }

  // Streak broken (or first visit)
  return { ...progress, streak: progress.lastVisit ? 1 : 0, lastVisit: today }
}

export function getProgress(): KidsProgress {
  if (typeof window === 'undefined') return getDefaultProgress()

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const fresh = getDefaultProgress()
      const withStreak = updateStreak(fresh)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withStreak))
      return withStreak
    }

    const parsed: KidsProgress = JSON.parse(stored)
    const withStreak = updateStreak(parsed)
    if (withStreak !== parsed) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withStreak))
    }
    return withStreak
  } catch {
    return getDefaultProgress()
  }
}

export function saveProgress(progress: KidsProgress): void {
  if (typeof window === 'undefined') return

  try {
    progress.level = getLevel(progress.stars).minStars
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // localStorage not available
  }
}

export function addStars(amount: number): KidsProgress {
  const progress = getProgress()
  progress.stars += amount
  const newBadges = checkAndAwardBadges(progress)
  if (newBadges.length > 0) {
    progress.badges = [...new Set([...progress.badges, ...newBadges])]
  }
  saveProgress(progress)
  return progress
}

type CompletableCategory =
  | 'completedStories'
  | 'completedSurahs'
  | 'completedDuas'
  | 'completedQuizzes'
  | 'completedActivities'
  | 'completedPillars'
  | 'completedFaithPillars'
  | 'completedHeroes'
  | 'completedAdab'

export function markComplete(
  category: CompletableCategory,
  id: string,
  stars: number = 5
): KidsProgress {
  const progress = getProgress()

  if (!progress[category].includes(id)) {
    progress[category] = [...progress[category], id]
    progress.stars += stars
  }

  const newBadges = checkAndAwardBadges(progress)
  if (newBadges.length > 0) {
    progress.badges = [...new Set([...progress.badges, ...newBadges])]
  }

  saveProgress(progress)
  return progress
}

export function getLevel(stars: number): (typeof LEVELS)[0] {
  let current = LEVELS[0]
  for (const level of LEVELS) {
    if (stars >= level.minStars) {
      current = level
    } else {
      break
    }
  }
  return current
}

export function getNextLevel(stars: number): (typeof LEVELS)[0] | null {
  for (const level of LEVELS) {
    if (stars < level.minStars) {
      return level
    }
  }
  return null
}

export function getLevelProgress(stars: number): number {
  const current = getLevel(stars)
  const next = getNextLevel(stars)

  if (!next) return 100

  const range = next.minStars - current.minStars
  const progress = stars - current.minStars

  return Math.min(100, Math.round((progress / range) * 100))
}

export function checkAndAwardBadges(progress: KidsProgress): string[] {
  const newBadges: string[] = []

  for (const badge of badgesKids) {
    if (progress.badges.includes(badge.id)) continue

    let earned = false

    switch (badge.id) {
      // Stories
      case 'primeira-historia':
        earned = progress.completedStories.length >= badge.threshold
        break
      case 'cinco-historias':
        earned = progress.completedStories.length >= badge.threshold
        break
      case 'todas-historias':
        earned = progress.completedStories.length >= badge.threshold
        break

      // Quizzes
      case 'primeiro-quiz':
        earned = progress.completedQuizzes.length >= badge.threshold
        break
      case 'cinco-quizzes':
        earned = progress.completedQuizzes.length >= badge.threshold
        break
      case 'quiz-perfeito': {
        const scores = Object.values(progress.quizScores)
        earned = scores.some((score) => score === 100)
        break
      }

      // Quran
      case 'primeira-surata':
        earned = progress.completedSurahs.length >= badge.threshold
        break
      case 'cinco-suratas':
        earned = progress.completedSurahs.length >= badge.threshold
        break
      case 'todas-suratas':
        earned = progress.completedSurahs.length >= badge.threshold
        break

      // Duas
      case 'primeira-dua':
        earned = progress.completedDuas.length >= badge.threshold
        break
      case 'dez-duas':
        earned = progress.completedDuas.length >= badge.threshold
        break

      // Pillars
      case 'pilares-islam':
        earned = progress.completedPillars.length >= badge.threshold
        break
      case 'pilares-fe':
        earned = progress.completedFaithPillars.length >= badge.threshold
        break

      // Activities
      case 'primeira-atividade':
        earned = progress.completedActivities.length >= badge.threshold
        break
      case 'cinco-atividades':
        earned = progress.completedActivities.length >= badge.threshold
        break

      // Streaks
      case 'streak-3':
        earned = progress.streak >= badge.threshold
        break
      case 'streak-7':
        earned = progress.streak >= badge.threshold
        break
      case 'streak-30':
        earned = progress.streak >= badge.threshold
        break

      // Heroes
      case 'heroi':
        earned = progress.completedHeroes.length >= badge.threshold
        break

      // Stars
      case 'estrela-100':
        earned = progress.stars >= badge.threshold
        break
    }

    if (earned) {
      newBadges.push(badge.id)
    }
  }

  return newBadges
}

export { LEVELS }
