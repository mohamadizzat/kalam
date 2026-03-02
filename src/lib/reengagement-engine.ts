// ═══════════════════════════════════════════════════════════════
// KALAM — Reengagement Engine (Agent: Nudge Contextual)
// Pure function engine — no React dependency.
// Evaluates nudge triggers in priority order, returns first match.
// ═══════════════════════════════════════════════════════════════

export type NudgeType =
  | 'streak_at_risk'
  | 'incomplete_content'
  | 'welcome_back'
  | 'milestone_nearby'
  | 'daily_suggestion'

export interface Nudge {
  type: NudgeType
  message: string
  cta: { label: string; href: string }
  priority: number // 1=highest
  dismissKey: string
}

// ── TRAIL NAME MAP ────────────────────────────────────────────────────────────
// Maps trail slugs to human-readable names for nudge messages.
// Keep in sync with src/lib/data/trails.ts

const TRAIL_NAMES: Record<string, string> = {
  'deus-e-amor': 'Deus é Amor',
  'proposito-e-sentido': 'Propósito e Sentido',
  'paciencia-e-resiliencia': 'Paciência e Resiliência',
  'justica-e-verdade': 'Justiça e Verdade',
  'gratidao-e-contentamento': 'Gratidão e Contentamento',
}

// ── WELCOME BACK MESSAGES ─────────────────────────────────────────────────────

const WELCOME_BACK_MESSAGES = [
  'Sentimos sua falta. Que tal uma reflexao rapida?',
  'Bom te ver de volta. Vamos continuar de onde parou?',
  'Tem 5 minutos? Uma trilha curta pode mudar seu dia.',
]

// ── MILESTONES ────────────────────────────────────────────────────────────────

const MILESTONES = [5, 10, 25, 50, 100]

// ── HELPERS ───────────────────────────────────────────────────────────────────

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function hoursSince(isoDate: string): number {
  try {
    return (Date.now() - new Date(isoDate).getTime()) / 3600000
  } catch {
    return Infinity
  }
}

function daysSince(dateStr: string): number {
  try {
    const then = new Date(dateStr)
    const now = new Date()
    // Compare at day level to avoid timezone issues
    const thenDay = new Date(then.getFullYear(), then.getMonth(), then.getDate())
    const nowDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return Math.floor((nowDay.getTime() - thenDay.getTime()) / 86400000)
  } catch {
    return Infinity
  }
}

// ── MAIN EVALUATOR ────────────────────────────────────────────────────────────

export function evaluateNudge(): Nudge | null {
  // Guard: already shown this session
  try {
    if (sessionStorage.getItem('kalam-nudge-shown')) return null
  } catch {
    return null
  }

  // Guard: user has fewer than 3 visits (don't nudge brand-new users)
  const visitCount = parseInt(localStorage.getItem('kalam-visit-count') || '0', 10)
  if (visitCount < 3) return null

  // ── PRIORITY 1: STREAK AT RISK ──────────────────────────────────────────────
  // Check both streak storage keys for robustness
  const streakAgent = readJson<{ current?: number; longest?: number }>('kalam_streak_data', {})
  const streakHabit = readJson<{ current?: number; longest?: number; lastDate?: string }>(
    'kalam-habits-streak',
    {}
  )

  const currentStreak = Math.max(streakAgent.current ?? 0, streakHabit.current ?? 0)
  const lastDate = streakHabit.lastDate || ''

  if (currentStreak >= 3 && lastDate) {
    const hSince = hoursSince(lastDate + 'T23:59:59')
    if (hSince >= 20 && hSince <= 48) {
      return {
        type: 'streak_at_risk',
        message: `Seu streak de ${currentStreak} dias esta em risco!`,
        cta: { label: 'Continuar', href: '/a-alma/habitos' },
        priority: 1,
        dismissKey: 'streak_at_risk',
      }
    }
  }

  // ── PRIORITY 2: INCOMPLETE CONTENT ──────────────────────────────────────────
  const trailProgress = readJson<Record<string, number>>('kalam_trail_progress', {})
  let bestTrailSlug = ''
  let bestTrailProgress = 0

  for (const [slug, progress] of Object.entries(trailProgress)) {
    if (progress > 0 && progress < 100 && progress > bestTrailProgress) {
      bestTrailProgress = progress
      bestTrailSlug = slug
    }
  }

  if (bestTrailSlug) {
    const trailName = TRAIL_NAMES[bestTrailSlug] || bestTrailSlug
    return {
      type: 'incomplete_content',
      message: `Voce parou na trilha "${trailName}" — quer continuar?`,
      cta: { label: 'Continuar', href: `/trilhas/${bestTrailSlug}` },
      priority: 2,
      dismissKey: `incomplete_${bestTrailSlug}`,
    }
  }

  // ── PRIORITY 3: WELCOME BACK ────────────────────────────────────────────────
  const lastVisit = localStorage.getItem('kalam-last-visit')
  if (lastVisit && daysSince(lastVisit) > 3) {
    // Rotate message based on visit count for variety
    const msgIndex = visitCount % WELCOME_BACK_MESSAGES.length
    return {
      type: 'welcome_back',
      message: WELCOME_BACK_MESSAGES[msgIndex],
      cta: { label: 'Comecar', href: '/' },
      priority: 3,
      dismissKey: 'welcome_back',
    }
  }

  // ── PRIORITY 4: MILESTONE NEARBY ────────────────────────────────────────────
  const completedCount = getCompletedContentCount()
  for (const milestone of MILESTONES) {
    const remaining = milestone - completedCount
    if (remaining > 0 && remaining <= 3) {
      return {
        type: 'milestone_nearby',
        message: `Faltam apenas ${remaining} pra voce atingir ${milestone} conteudos explorados!`,
        cta: { label: 'Explorar', href: '/' },
        priority: 4,
        dismissKey: `milestone_${milestone}`,
      }
    }
  }

  // ── PRIORITY 5: DAILY SUGGESTION ────────────────────────────────────────────
  const hour = new Date().getHours()

  if (hour >= 5 && hour <= 11) {
    return {
      type: 'daily_suggestion',
      message: 'Bom dia. Que tal comecar com uma leitura curta?',
      cta: { label: 'Ler', href: '/a-palavra' },
      priority: 5,
      dismissKey: 'daily_morning',
    }
  }

  if (hour >= 12 && hour <= 17) {
    return {
      type: 'daily_suggestion',
      message: 'Uma pausa pra reflexao?',
      cta: { label: 'Refletir', href: '/a-alma' },
      priority: 5,
      dismissKey: 'daily_afternoon',
    }
  }

  if (hour >= 18 && hour <= 23) {
    return {
      type: 'daily_suggestion',
      message: 'Momento de gratidao. Abra seu journal.',
      cta: { label: 'Abrir', href: '/a-alma/journal' },
      priority: 5,
      dismissKey: 'daily_evening',
    }
  }

  // 0-4 (night)
  return {
    type: 'daily_suggestion',
    message: 'Uma historia pra relaxar antes de dormir.',
    cta: { label: 'Ouvir', href: '/contemplativo/sleep' },
    priority: 5,
    dismissKey: 'daily_night',
  }
}

// ── SIDE-EFFECT HELPERS ───────────────────────────────────────────────────────

/**
 * Mark the nudge as shown for this session + increment lifetime dismiss counter.
 */
export function markNudgeShown(): void {
  try {
    sessionStorage.setItem('kalam-nudge-shown', '1')
    const count = parseInt(localStorage.getItem('kalam-nudge-dismiss-count') || '0', 10)
    localStorage.setItem('kalam-nudge-dismiss-count', String(count + 1))
  } catch {
    // storage unavailable
  }
}

/**
 * Increment visit counter (call on every page mount).
 */
export function incrementVisitCount(): void {
  try {
    const count = parseInt(localStorage.getItem('kalam-visit-count') || '0', 10)
    localStorage.setItem('kalam-visit-count', String(count + 1))
  } catch {
    // storage unavailable
  }
}

/**
 * Update last visit timestamp (call on every page mount).
 */
export function updateLastVisit(): void {
  try {
    localStorage.setItem('kalam-last-visit', new Date().toISOString())
  } catch {
    // storage unavailable
  }
}

// ── INTERNAL HELPERS ──────────────────────────────────────────────────────────

function getCompletedContentCount(): number {
  try {
    // Count from kalam_user_progress
    const progress = readJson<Record<string, { completed?: boolean }>>('kalam_user_progress', {})
    let count = 0
    for (const val of Object.values(progress)) {
      if (val?.completed) count++
    }

    // Count from kalam_completed_content (array)
    const completed = readJson<string[]>('kalam_completed_content', [])
    count += completed.length

    return count
  } catch {
    return 0
  }
}
