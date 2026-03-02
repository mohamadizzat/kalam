// ── STORY CONTENT AGGREGATOR ──────────────────────────────────────────────────
// Unifies ~134 items from 7 data sources into a single StoryItem type
// for the Stories/Reels gallery.

import { surpriseFactsData } from '@/content/surpriseFacts'
import { hardQuestionsData } from '@/content/hardQuestions'
import { recognitionStoriesData } from '@/content/recognitionStories'
import { SANCTUARY_VERSES } from '@/lib/data/daily-content'
import { hadithsData } from '@/content/hadiths'
import { ramadanDays } from '@/lib/data/ramadan'
import { prophetStoriesExpanded } from '@/content/prophetStories'

// ── Types ────────────────────────────────────────────────────────────────────

export type StoryType = 'verse' | 'fact' | 'hadith' | 'question' | 'prophet' | 'ramadan'

export type StoryItem = {
  id: string
  type: StoryType
  title: string
  content: string
  arabic?: string
  source?: string
  emoji?: string
  category?: string
}

// ── Build stories from each source ───────────────────────────────────────────

function buildFactStories(): StoryItem[] {
  return surpriseFactsData.map((f: { id: string; hook: string; detail: string; source: string; reaction: string; category: string }) => ({
    id: `fact-${f.id}`,
    type: 'fact' as StoryType,
    title: f.hook,
    content: f.detail,
    source: f.source,
    emoji: f.reaction,
    category: f.category,
  }))
}

function buildQuestionStories(): StoryItem[] {
  return hardQuestionsData.map((q: { id: string; question: string; directAnswer: string }) => ({
    id: `question-${q.id}`,
    type: 'question' as StoryType,
    title: q.question,
    content: q.directAnswer,
  }))
}

function buildRecognitionStories(): StoryItem[] {
  return recognitionStoriesData.map((s: { id: string; name: string; knownAs?: string; quote: string; quoteSource: string }) => ({
    id: `recognition-${s.id}`,
    type: 'fact' as StoryType,
    title: s.knownAs || s.name,
    content: s.quote,
    source: s.quoteSource,
    emoji: '✨',
    category: 'reconhecimento',
  }))
}

function buildVerseStories(): StoryItem[] {
  return SANCTUARY_VERSES.map((v, i) => ({
    id: `verse-${i + 1}`,
    type: 'verse' as StoryType,
    title: v.surahRef,
    content: v.translation,
    arabic: v.arabic,
    source: v.surahRef,
  }))
}

function buildHadithStories(): StoryItem[] {
  return hadithsData.map((h: { number: string; title: string; text: string; source: string; arabic: string; category: string }) => ({
    id: `hadith-${h.number}`,
    type: 'hadith' as StoryType,
    title: h.title,
    content: h.text,
    arabic: h.arabic,
    source: h.source,
    category: h.category,
  }))
}

function buildRamadanStories(): StoryItem[] {
  return ramadanDays.map((r) => ({
    id: `ramadan-${r.day}`,
    type: 'ramadan' as StoryType,
    title: `Dia ${r.day} — ${r.theme}`,
    content: r.reflection,
    arabic: r.dua.arabic,
    source: `Ramadan · ${r.phaseLabel}`,
    category: r.phase,
  }))
}

function buildProphetStories(): StoryItem[] {
  return prophetStoriesExpanded.map((p: { id: string; name: string; openingHook: string; arabic: string }) => ({
    id: `prophet-${p.id}`,
    type: 'prophet' as StoryType,
    title: p.name,
    content: p.openingHook,
    arabic: p.arabic,
    emoji: '📖',
  }))
}

// ── Public API ───────────────────────────────────────────────────────────────

let _cache: StoryItem[] | null = null

export function getAllStories(): StoryItem[] {
  if (_cache) return _cache
  _cache = [
    ...buildVerseStories(),
    ...buildFactStories(),
    ...buildHadithStories(),
    ...buildQuestionStories(),
    ...buildProphetStories(),
    ...buildRecognitionStories(),
    ...buildRamadanStories(),
  ]
  return _cache
}

export function getStoriesByType(type: StoryType): StoryItem[] {
  return getAllStories().filter((s) => s.type === type)
}

export function getStoryById(id: string): StoryItem | undefined {
  return getAllStories().find((s) => s.id === id)
}
