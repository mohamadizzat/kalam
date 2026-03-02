// ═══════════════════════════════════════════════════════════════
// KALAM — Spiritual Habit Tracker Engine
// Pattern: kids-progress.ts (localStorage-based progress tracking)
// ═══════════════════════════════════════════════════════════════

export interface HabitDefinition {
  id: string
  name: string
  icon: string // Lucide icon name
  description: string
  category: 'worship' | 'quran' | 'dhikr' | 'dua' | 'character' | 'reflection'
}

export const DEFAULT_HABITS: HabitDefinition[] = [
  { id: 'fajr', name: 'Fajr', icon: 'Sun', description: 'Oracao do amanhecer', category: 'worship' },
  { id: 'quran-reading', name: 'Leitura do Quran', icon: 'BookOpen', description: '15 minutos de leitura', category: 'quran' },
  { id: 'dhikr', name: 'Dhikr', icon: 'Clock', description: '33 repeticoes', category: 'dhikr' },
  { id: 'dua-morning', name: 'Dua da Manha', icon: 'Heart', description: 'Suplicas matinais', category: 'dua' },
  { id: 'dua-night', name: 'Dua da Noite', icon: 'Moon', description: 'Suplicas noturnas', category: 'dua' },
  { id: 'good-deed', name: 'Boa Acao do Dia', icon: 'HandHeart', description: 'Um ato de bondade', category: 'character' },
  { id: 'reflection', name: 'Reflexao/Journal', icon: 'PenLine', description: 'Momento de auto-reflexao', category: 'reflection' },
]

export interface DayCheckins {
  [habitId: string]: boolean
}

export interface StreakData {
  current: number
  longest: number
  lastDate: string // YYYY-MM-DD
}

// Motivational verses shown on check-in
const CHECKIN_VERSES = [
  { ref: '2:152', text: 'Lembrai-vos de Mim, que Eu Me lembrarei de vos.' },
  { ref: '94:5', text: 'Com a dificuldade vem a facilidade.' },
  { ref: '29:69', text: 'Quem se esforcar por Nos, Nos o guiaremos.' },
  { ref: '13:28', text: 'Na lembranca de Deus os coracoes se tranquilizam.' },
  { ref: '3:139', text: 'Nao desanimeis nem vos entristecais.' },
  { ref: '65:3', text: 'Quem confia em Deus, Ele lhe basta.' },
  { ref: '2:286', text: 'Deus nao impoe a ninguem alem de sua capacidade.' },
  { ref: '73:20', text: 'Recitai o que vos for facil do Quran.' },
  { ref: '39:53', text: 'Nao desespereis da misericordia de Deus.' },
  { ref: '14:7', text: 'Se fordes gratos, aumentar-vos-ei.' },
  { ref: '16:97', text: 'Quem pratica o bem, tera uma vida boa.' },
  { ref: '55:13', text: 'Qual dos favores do vosso Senhor negareis?' },
]

function getDateKey(date?: Date): string {
  const d = date || new Date()
  return d.toISOString().split('T')[0]
}

export function getCheckins(date?: string): DayCheckins {
  const key = date || getDateKey()
  try {
    const raw = localStorage.getItem(`kalam-habits-${key}`)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveCheckins(checkins: DayCheckins, date?: string) {
  const key = date || getDateKey()
  try {
    localStorage.setItem(`kalam-habits-${key}`, JSON.stringify(checkins))
  } catch {}
}

export function toggleHabit(habitId: string, date?: string): { checkins: DayCheckins; verse: typeof CHECKIN_VERSES[0] | null } {
  const checkins = getCheckins(date)
  const wasChecked = !!checkins[habitId]
  checkins[habitId] = !wasChecked

  saveCheckins(checkins, date)

  if (!wasChecked) {
    updateStreak()
  }

  return {
    checkins,
    verse: !wasChecked ? CHECKIN_VERSES[Math.floor(Math.random() * CHECKIN_VERSES.length)] : null,
  }
}

export function getStreak(): StreakData {
  try {
    const raw = localStorage.getItem('kalam-habits-streak')
    return raw ? JSON.parse(raw) : { current: 0, longest: 0, lastDate: '' }
  } catch {
    return { current: 0, longest: 0, lastDate: '' }
  }
}

export function updateStreak(): StreakData {
  const streak = getStreak()
  const today = getDateKey()

  if (streak.lastDate === today) return streak

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayKey = getDateKey(yesterday)

  const todayCheckins = getCheckins(today)
  const hasAnyCheckin = Object.values(todayCheckins).some(v => v)

  if (!hasAnyCheckin) return streak

  if (streak.lastDate === yesterdayKey) {
    streak.current += 1
  } else {
    streak.current = 1
  }

  streak.lastDate = today
  if (streak.current > streak.longest) {
    streak.longest = streak.current
  }

  try {
    localStorage.setItem('kalam-habits-streak', JSON.stringify(streak))
  } catch {}

  return streak
}

export function getWeeklyHeatmap(): { date: string; percentage: number }[] {
  const result: { date: string; percentage: number }[] = []
  const totalHabits = DEFAULT_HABITS.length

  for (let i = 48; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = getDateKey(d)
    const checkins = getCheckins(key)
    const checked = Object.values(checkins).filter(Boolean).length
    result.push({ date: key, percentage: totalHabits > 0 ? checked / totalHabits : 0 })
  }

  return result
}

export function getWeeklySummary(): { completed: number; total: number; percentage: number } {
  let completed = 0
  let total = 0
  const totalHabits = DEFAULT_HABITS.length

  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = getDateKey(d)
    const checkins = getCheckins(key)
    const checked = Object.values(checkins).filter(Boolean).length
    completed += checked
    total += totalHabits
  }

  return { completed, total, percentage: total > 0 ? completed / total : 0 }
}

export function getRandomVerse() {
  return CHECKIN_VERSES[Math.floor(Math.random() * CHECKIN_VERSES.length)]
}
