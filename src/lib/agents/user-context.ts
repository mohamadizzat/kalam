'use client'

import { useState, useEffect } from 'react'
import { usePersona } from '@/lib/hooks/usePersona'
import { useAuth } from '@/providers/auth-provider'
import { createClient } from '@/lib/supabase/client'
import { getRecentPaths } from './path-tracker'
import type { UserContext } from './types'

function readLocalStorageJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function readCompletedIds(): Set<string> {
  const set = new Set<string>()
  try {
    // user_progress tracks content completion (legacy underscore key)
    const progress = readLocalStorageJson<Record<string, { completed?: boolean }>>(
      'kalam_user_progress',
      {}
    )
    for (const [key, val] of Object.entries(progress)) {
      if (val?.completed) set.add(key)
    }

    // kalam_completed_content is a direct array
    const completed = readLocalStorageJson<string[]>('kalam_completed_content', [])
    for (const id of completed) set.add(id)

    // A Bíblia do Kalam — completedChapters array
    const bibliaProgress = readLocalStorageJson<{ completedChapters?: string[] }>(
      'kalam-biblia-progress',
      {}
    )
    for (const slug of bibliaProgress.completedChapters ?? []) set.add(`biblia:${slug}`)

    // Ramadan — completedDays array
    const ramadanProgress = readLocalStorageJson<{ completedDays?: number[] }>(
      'kalam-ramadan-progress',
      {}
    )
    for (const day of ramadanProgress.completedDays ?? []) set.add(`ramadan:${day}`)
  } catch {
    // ignore
  }
  return set
}

function readBookmarkedIds(): Set<string> {
  try {
    // kalam-bookmarks (dash) is written by SurahReader & FavoritosClient
    type VerseBookmark = { surah?: number; verse?: number; contentId?: string; id?: string }
    const bookmarks = readLocalStorageJson<VerseBookmark[]>('kalam-bookmarks', [])
    const ids = bookmarks.map((b) => {
      if (b.surah && b.verse) return `quran:${b.surah}:${b.verse}`
      return b.contentId || b.id || ''
    }).filter(Boolean)
    return new Set(ids)
  } catch {
    return new Set()
  }
}

const DEFAULT_CONTEXT: UserContext = {
  persona: null,
  isAuthenticated: false,
  isKids: false,
  completedContentIds: new Set(),
  bookmarkedIds: new Set(),
  lastVisitedPaths: [],
  currentStreak: 0,
  longestStreak: 0,
  completedCount: 0,
  journalEntries: 0,
  trailProgress: {},
  recentMoods: [],
  firstVisitDate: null,
  daysSinceFirstVisit: 0,
}

export function useUserContext(): UserContext & { loading: boolean } {
  const { persona, loading: personaLoading } = usePersona()
  const { user } = useAuth()
  const [ctx, setCtx] = useState<UserContext>(DEFAULT_CONTEXT)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const completedContentIds = readCompletedIds()
    const bookmarkedIds = readBookmarkedIds()
    const streakData = readLocalStorageJson<{ current?: number; longest?: number }>(
      'kalam_streak_data',
      {}
    )
    // kalam-journal (dash) is written by JournalClient
    const journalEntries = readLocalStorageJson<unknown[]>('kalam-journal', []).length
    const trailProgress = readLocalStorageJson<Record<string, number>>(
      'kalam_trail_progress',
      {}
    )
    // kalam-mood-log (dash) is written by mood-practices.ts → saveMoodEntry()
    const moodHistory = readLocalStorageJson<{ mood?: string }[]>('kalam-mood-log', [])
    const firstVisit = localStorage.getItem('kalam-first-visit')
    const lastVisitedPaths = getRecentPaths()

    // Set first visit if not set
    if (!firstVisit) {
      localStorage.setItem('kalam-first-visit', new Date().toISOString())
    }

    const daysSinceFirstVisit = firstVisit
      ? Math.floor((Date.now() - new Date(firstVisit).getTime()) / 86400000)
      : 0

    const built: UserContext = {
      persona,
      isAuthenticated: !!user,
      isKids: persona === 'kids',
      completedContentIds,
      bookmarkedIds,
      lastVisitedPaths,
      currentStreak: streakData.current ?? 0,
      longestStreak: streakData.longest ?? 0,
      completedCount: completedContentIds.size,
      journalEntries,
      trailProgress,
      recentMoods: moodHistory.slice(-7).map((m) => m.mood || ''),
      firstVisitDate: firstVisit,
      daysSinceFirstVisit,
    }

    setCtx(built)
    setLoading(false)

    // For authenticated users, overlay Supabase data
    if (user) {
      syncFromSupabase(user.id).then((overlay) => {
        if (overlay) {
          setCtx((prev) => ({
            ...prev,
            currentStreak: Math.max(prev.currentStreak, overlay.currentStreak),
            longestStreak: Math.max(prev.longestStreak, overlay.longestStreak),
            completedContentIds: new Set([
              ...prev.completedContentIds,
              ...overlay.completedIds,
            ]),
            completedCount: prev.completedContentIds.size + overlay.completedIds.length,
            bookmarkedIds: new Set([
              ...prev.bookmarkedIds,
              ...overlay.bookmarkIds,
            ]),
          }))
        }
      })
    }
  }, [user, persona])

  return { ...ctx, loading: loading || personaLoading }
}

interface SupabaseOverlay {
  completedIds: string[]
  bookmarkIds: string[]
  currentStreak: number
  longestStreak: number
}

async function syncFromSupabase(userId: string): Promise<SupabaseOverlay | null> {
  try {
    const supabase = createClient()

    // Schema real:
    // user_progress:  item_slug, completed_at (sem content_id, sem boolean completed)
    // user_bookmarks: reference (sem content_id)
    const [progressRes, bookmarksRes, streakRes] = await Promise.all([
      supabase
        .from('user_progress')
        .select('item_slug')
        .eq('user_id', userId)
        .not('completed_at', 'is', null),
      supabase
        .from('user_bookmarks')
        .select('reference')
        .eq('user_id', userId),
      supabase.from('user_streaks').select('*').eq('user_id', userId).single(),
    ])

    return {
      completedIds: (progressRes.data || []).map((r) => r.item_slug).filter(Boolean),
      bookmarkIds: (bookmarksRes.data || []).map((r) => r.reference).filter(Boolean),
      currentStreak: streakRes.data?.current_streak ?? 0,
      longestStreak: streakRes.data?.longest_streak ?? 0,
    }
  } catch {
    return null
  }
}

// ── Escreve progresso de conteúdo no Supabase (chamar quando user completa algo) ──
export async function saveProgressToSupabase(
  userId: string,
  category: string,
  itemSlug: string
): Promise<void> {
  try {
    const supabase = createClient()
    await supabase
      .from('user_progress')
      .upsert(
        { user_id: userId, category, item_slug: itemSlug, completed_at: new Date().toISOString() },
        { onConflict: 'user_id,category,item_slug' }
      )
  } catch {
    // Falha silenciosa — localStorage é o fallback
  }
}

// ── Escreve bookmark no Supabase ──
export async function saveBookmarkToSupabase(
  userId: string,
  type: string,
  reference: string,
  note?: string
): Promise<void> {
  try {
    const supabase = createClient()
    await supabase
      .from('user_bookmarks')
      .upsert(
        { user_id: userId, type, reference, note: note || null },
        { onConflict: 'user_id,type,reference' }
      )
  } catch {
    // Falha silenciosa
  }
}

// ── Atualiza streak no Supabase ──
export async function syncStreakToSupabase(
  userId: string,
  currentStreak: number,
  longestStreak: number
): Promise<void> {
  try {
    const supabase = createClient()
    await supabase
      .from('user_streaks')
      .upsert(
        {
          user_id: userId,
          current_streak: currentStreak,
          longest_streak: longestStreak,
          last_visit: new Date().toISOString().split('T')[0],
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      )
  } catch {
    // Falha silenciosa
  }
}
