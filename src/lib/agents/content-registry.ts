/**
 * Content Registry — Unified content index for the Kalam agent system.
 *
 * Imports every data source in the project, normalizes each item into
 * a single ContentItem[], and exposes fast lookup maps + utility helpers.
 */

import type { ContentItem, ContentCategory, ContentDepth } from './types'
import type { PersonaId } from '@/lib/hooks/usePersona'

// ────────────────────────────────────────────
// Data imports — src/lib/data/*.ts
// ────────────────────────────────────────────
import { surahs } from '@/lib/data/surahs'
import { hadiths } from '@/lib/data/hadiths'
import { morningAdhkar, eveningAdhkar, dailyDuas, quranicDuas } from '@/lib/data/duas'
import { namesOfGod } from '@/lib/data/names-of-god'
import { TRAILS } from '@/lib/data/trails'
import { challenges } from '@/lib/data/challenges'
import { seerahChapters } from '@/lib/data/seerah'
import { companions } from '@/lib/data/companions'
import { women } from '@/lib/data/women'
import { bridgeProphets } from '@/lib/data/bridge-prophets'
import { bridgeThemes } from '@/lib/data/bridge-themes'
import { scriptureProofs } from '@/lib/data/scripture-proofs'
import { chapters } from '@/lib/data/biblia-do-kalam-chapters'
import { surahStudies } from '@/lib/data/surah-studies'
import { parables } from '@/lib/data/parables'
import { glossary } from '@/lib/data/glossary'
import { QURAN_VOCABULARY } from '@/lib/data/quran-vocabulary'
import { SLEEP_STORIES } from '@/lib/data/sleep-stories'
import { TOOLS_CATALOG } from '@/lib/data/tools-catalog'
import { mentalHealthTopics } from '@/lib/data/mental-health'
import { financeTopics } from '@/lib/data/islamic-finance'
import { timeline } from '@/lib/data/history-timeline'
import { ramadanDays } from '@/lib/data/ramadan'
import { morningRoutine, eveningRoutine } from '@/lib/data/routines'
import { SEO_PAGES } from '@/lib/data/seo-pages'
import { SANCTUARY_VERSES } from '@/lib/data/daily-content'

// ────────────────────────────────────────────
// Data imports — src/content/*.js
// ────────────────────────────────────────────
import { prophetStoriesExpanded } from '@/content/prophetStories'
import { surpriseFactsData } from '@/content/surpriseFacts'
import { hardQuestionsData } from '@/content/hardQuestions'
import { commonGroundData } from '@/content/bridgeContent'
import { recognitionStoriesData } from '@/content/recognitionStories'

// ────────────────────────────────────────────
// Data imports — src/lib/data/kids/*.ts
// ────────────────────────────────────────────
import { fivePillarsKids } from '@/lib/data/kids/five-pillars-kids'
import { sixPillarsFaithKids } from '@/lib/data/kids/six-pillars-faith-kids'
import { dailyDuasKids } from '@/lib/data/kids/daily-duas-kids'
import { quranKids } from '@/lib/data/kids/quran-kids'
import { adabKids } from '@/lib/data/kids/adab-kids'
import { prophetStoriesKids } from '@/lib/data/kids/prophet-stories-kids'
import { heroesKids } from '@/lib/data/kids/heroes-kids'
import { activitiesKids } from '@/lib/data/kids/activities-kids'

// ────────────────────────────────────────────
// Persona affinity presets
// ────────────────────────────────────────────
const A: Record<string, Partial<Record<PersonaId, number>>> = {
  all:       { curious: 0.5, muslim: 0.5, bible: 0.5, spiritual: 0.5, kids: 0.0 },
  curious:   { curious: 0.9, muslim: 0.4, bible: 0.6, spiritual: 0.5, kids: 0.0 },
  muslim:    { curious: 0.3, muslim: 0.9, bible: 0.2, spiritual: 0.6, kids: 0.0 },
  bible:     { curious: 0.7, muslim: 0.3, bible: 0.9, spiritual: 0.4, kids: 0.0 },
  spiritual: { curious: 0.5, muslim: 0.6, bible: 0.4, spiritual: 0.9, kids: 0.0 },
  bridge:    { curious: 0.8, muslim: 0.3, bible: 0.9, spiritual: 0.5, kids: 0.0 },
  kids:      { curious: 0.0, muslim: 0.0, bible: 0.0, spiritual: 0.0, kids: 1.0 },
}

// ────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────
function safe<T>(val: T | undefined | null, fallback: T): T {
  return val ?? fallback
}

function slug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// ────────────────────────────────────────────
// Build functions — each returns ContentItem[]
// ────────────────────────────────────────────

function buildSurahItems(): ContentItem[] {
  return surahs.map((s) => ({
    id: `surah-${s.number}`,
    title: `${s.name} (${s.arabicName})`,
    href: `/a-palavra/surahs/${s.number}`,
    category: 'palavra' as ContentCategory,
    type: 'surah',
    tags: ['surah', 'quran', s.revelationPlace, s.name.toLowerCase()],
    personaAffinity: A.all,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 5,
    preview: `${s.translation} — ${s.versesCount} versiculos`,
  }))
}

function buildHadithItems(): ContentItem[] {
  return hadiths.map((h) => ({
    id: `hadith-${h.id}`,
    title: safe(h.translation, 'Hadith').slice(0, 80),
    href: `/a-presenca/hadiths/${h.id}`,
    category: 'presenca' as ContentCategory,
    type: 'hadith',
    tags: ['hadith', safe(h.category, 'geral'), safe(h.source, ''), safe(h.narrator, '')],
    personaAffinity: A.muslim,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 2,
    preview: safe(h.translation, '').slice(0, 120),
  }))
}

function buildDuaItems(): ContentItem[] {
  const items: ContentItem[] = []

  const groups: { list: unknown[]; prefix: string; label: string }[] = [
    { list: morningAdhkar, prefix: 'morning-adhkar', label: 'Adhkar da Manha' },
    { list: eveningAdhkar, prefix: 'evening-adhkar', label: 'Adhkar da Noite' },
    { list: dailyDuas, prefix: 'daily-dua', label: 'Dua Diaria' },
    { list: quranicDuas, prefix: 'quranic-dua', label: 'Dua Coranica' },
  ]

  for (const g of groups) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(g.list as any[]).forEach((d: any) => {
      items.push({
        id: `${g.prefix}-${d.id}`,
        title: safe(d.transliteration, g.label).slice(0, 80),
        href: `/a-presenca/duas#${d.id}`,
        category: 'presenca',
        type: 'dua',
        tags: ['dua', g.prefix, safe(d.category, ''), safe(d.situation, '')],
        personaAffinity: A.muslim,
        depth: 'practice',
        estimatedMinutes: 1,
        preview: safe(d.portuguese, safe(d.source, '')).slice(0, 120),
      })
    })
  }

  return items
}

function buildNamesOfGodItems(): ContentItem[] {
  return namesOfGod.map((n) => ({
    id: `name-${n.number}`,
    title: `${n.transliteration} — ${n.meaning}`,
    href: `/a-presenca/99-nomes/${n.number}`,
    category: 'presenca' as ContentCategory,
    type: 'name-of-god',
    tags: ['99-nomes', 'asma-ul-husna', n.transliteration.toLowerCase(), safe(n.quranRef, '')],
    personaAffinity: A.spiritual,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 3,
    preview: safe(n.description, '').slice(0, 120),
  }))
}

function buildTrailItems(): ContentItem[] {
  return TRAILS.map((t) => ({
    id: `trail-${t.slug}`,
    title: `${t.title} (${safe(t.arabicTitle, '')})`,
    href: `/trilhas/${t.slug}`,
    category: 'trilhas' as ContentCategory,
    type: 'trail',
    tags: ['trail', 'trilha', safe(t.theme, ''), t.slug],
    personaAffinity: A.all,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 10,
    preview: safe(t.description, safe(t.subtitle, '')).slice(0, 120),
  }))
}

function buildChallengeItems(): ContentItem[] {
  return challenges.map((c) => ({
    id: `challenge-${c.slug}`,
    title: `${c.title} (${safe(c.arabicTitle, '')})`,
    href: `/trilhas/desafios/${c.slug}`,
    category: 'trilhas' as ContentCategory,
    type: 'challenge',
    tags: ['challenge', 'desafio', c.slug, `${c.duration}-dias`],
    personaAffinity: A.all,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 10,
    preview: safe(c.description, '').slice(0, 120),
  }))
}

function buildSeerahItems(): ContentItem[] {
  return seerahChapters.map((ch) => ({
    id: `seerah-${ch.slug}`,
    title: safe(ch.title, 'Capitulo da Seerah'),
    href: `/lideranca-profetica/seerah/${ch.slug}`,
    category: 'lideranca' as ContentCategory,
    type: 'seerah-chapter',
    tags: ['seerah', 'profeta', 'muhammad', safe(ch.period, ''), ch.slug],
    personaAffinity: A.muslim,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 8,
    preview: safe(ch.summary, '').slice(0, 120),
  }))
}

function buildCompanionItems(): ContentItem[] {
  return companions.map((c) => ({
    id: `companion-${c.slug}`,
    title: `${c.name} (${safe(c.arabicName, '')})`,
    href: `/lideranca-profetica/companheiros/${c.slug}`,
    category: 'lideranca' as ContentCategory,
    type: 'companion',
    tags: ['companion', 'sahaba', safe(c.period, ''), c.slug],
    personaAffinity: A.muslim,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 6,
    preview: safe(c.summary, safe(c.title, '')).slice(0, 120),
  }))
}

function buildWomenItems(): ContentItem[] {
  return women.map((w) => ({
    id: `woman-${w.slug}`,
    title: `${w.name} (${safe(w.arabicName, '')})`,
    href: `/lideranca-profetica/mulheres/${w.slug}`,
    category: 'lideranca' as ContentCategory,
    type: 'woman-profile',
    tags: ['woman', 'mulher', safe(w.period, ''), w.slug],
    personaAffinity: A.spiritual,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 6,
    preview: safe(w.narrative, safe(w.keyQuote, '')).slice(0, 120),
  }))
}

function buildBridgeProphetItems(): ContentItem[] {
  return bridgeProphets.map((bp) => ({
    id: `bridge-prophet-${bp.id}`,
    title: `${bp.name} (${safe(bp.arabicName, '')})`,
    href: `/a-ponte/profetas/${slug(bp.name)}`,
    category: 'ponte' as ContentCategory,
    type: 'bridge-prophet',
    tags: ['bridge', 'prophet', 'ponte', safe(bp.era, ''), slug(bp.name)],
    personaAffinity: A.bridge,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 8,
  }))
}

function buildBridgeThemeItems(): ContentItem[] {
  return bridgeThemes.map((bt) => ({
    id: `bridge-theme-${bt.id}`,
    title: safe(bt.title, 'Tema da Ponte'),
    href: `/a-ponte/temas/${bt.id}`,
    category: 'ponte' as ContentCategory,
    type: 'bridge-theme',
    tags: ['bridge', 'theme', 'ponte', bt.id],
    personaAffinity: A.bridge,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 6,
    preview: safe(bt.subtitle, '').slice(0, 120),
  }))
}

function buildScriptureProofItems(): ContentItem[] {
  return scriptureProofs.map((sp) => ({
    id: `proof-${sp.id}`,
    title: safe(sp.title, 'Comprovacao'),
    href: `/comprovacoes/${sp.id}`,
    category: 'ponte' as ContentCategory,
    type: 'scripture-proof',
    tags: ['proof', 'comprovacao', safe(sp.category, '')],
    personaAffinity: A.bridge,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 5,
  }))
}

function buildBibliaChapterItems(): ContentItem[] {
  return chapters.map((ch) => ({
    id: `biblia-${ch.id}`,
    title: safe(ch.title, 'Capitulo'),
    href: `/a-biblia-do-kalam/${ch.slug}`,
    category: 'biblia' as ContentCategory,
    type: 'narrative-chapter',
    tags: ['biblia', 'narrative', safe(ch.era, ''), ch.slug],
    personaAffinity: A.curious,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: parseInt(ch.readingTime, 10) || 8,
    preview: safe(ch.subtitle, '').slice(0, 120),
  }))
}

function buildSurahStudyItems(): ContentItem[] {
  return surahStudies.map((ss) => ({
    id: `surah-study-${ss.surahNumber}`,
    title: `${ss.title} (${safe(ss.arabicTitle, '')})`,
    href: `/a-palavra/estudo/${ss.slug}`,
    category: 'palavra' as ContentCategory,
    type: 'surah-study',
    tags: ['surah-study', 'estudo', 'quran', ss.slug],
    personaAffinity: A.muslim,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 12,
    preview: safe(ss.subtitle, '').slice(0, 120),
  }))
}

function buildParableItems(): ContentItem[] {
  return parables.map((p) => ({
    id: `parable-${p.slug}`,
    title: safe(p.title, 'Parabola'),
    href: `/a-palavra/parabolas/${p.slug}`,
    category: 'palavra' as ContentCategory,
    type: 'parable',
    tags: ['parable', 'parabola', safe(p.surahRef, ''), p.slug],
    personaAffinity: A.spiritual,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 4,
    preview: safe(p.lesson, safe(p.summary, '')).slice(0, 120),
  }))
}

function buildGlossaryItems(): ContentItem[] {
  return glossary.map((g) => ({
    id: `glossary-${slug(g.term)}`,
    title: `${g.term} (${safe(g.arabic, '')})`,
    href: `/descobrir/glossario#${slug(g.term)}`,
    category: 'descobrir' as ContentCategory,
    type: 'glossary-term',
    tags: ['glossary', 'glossario', safe(g.category, ''), g.term.toLowerCase()],
    personaAffinity: A.curious,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 1,
    preview: safe(g.meaning, safe(g.explanation, '')).slice(0, 120),
  }))
}

function buildVocabularyItems(): ContentItem[] {
  return QURAN_VOCABULARY.map((l) => ({
    id: `vocab-lesson-${l.id}`,
    title: safe(l.title, `Licao ${l.id}`),
    href: `/a-palavra/vocabulario/${l.id}`,
    category: 'palavra' as ContentCategory,
    type: 'vocabulary-lesson',
    tags: ['vocabulary', 'vocabulario', 'arabic', 'quran'],
    personaAffinity: A.muslim,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 5,
    preview: `${safe(l.words, []).length} palavras`,
  }))
}

function buildSleepStoryItems(): ContentItem[] {
  return SLEEP_STORIES.map((s) => ({
    id: `sleep-${s.id}`,
    title: safe(s.title, 'Historia para Dormir'),
    href: `/descobrir/historias-para-dormir/${s.id}`,
    category: 'descobrir' as ContentCategory,
    type: 'sleep-story',
    tags: ['sleep', 'dormir', 'story', 'relaxamento'],
    personaAffinity: A.spiritual,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: safe(s.duration, 10),
    preview: safe(s.subtitle, '').slice(0, 120),
  }))
}

function buildToolItems(): ContentItem[] {
  return TOOLS_CATALOG.map((t) => ({
    id: `tool-${t.id}`,
    title: safe(t.name, 'Ferramenta'),
    href: safe(t.href, `/ferramentas/${t.id}`),
    category: 'ferramentas' as ContentCategory,
    type: 'tool',
    tags: ['tool', 'ferramenta', safe(t.category, ''), safe(t.status, ''), t.id],
    personaAffinity: A.all,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 3,
    preview: safe(t.description, '').slice(0, 120),
  }))
}

function buildMentalHealthItems(): ContentItem[] {
  return mentalHealthTopics.map((m) => ({
    id: `mental-health-${m.slug}`,
    title: safe(m.title, 'Saude Mental'),
    href: `/a-alma/saude-mental/${m.slug}`,
    category: 'alma' as ContentCategory,
    type: 'mental-health',
    tags: ['mental-health', 'saude-mental', 'alma', 'reflexao', m.slug],
    personaAffinity: A.spiritual,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 5,
    preview: safe(m.summary, '').slice(0, 120),
  }))
}

function buildFinanceItems(): ContentItem[] {
  return financeTopics.map((f) => ({
    id: `finance-${f.slug}`,
    title: `${safe(f.title, 'Financas')} (${safe(f.arabicTerm, '')})`,
    href: `/o-sistema/financas-islamicas/${f.slug}`,
    category: 'sistema' as ContentCategory,
    type: 'finance-topic',
    tags: ['finance', 'financas', 'sistema', 'islamico', f.slug],
    personaAffinity: A.curious,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 5,
    preview: safe(f.summary, '').slice(0, 120),
  }))
}

function buildTimelineItems(): ContentItem[] {
  return timeline.map((t, i) => ({
    id: `timeline-${i}`,
    title: `${t.year} — ${safe(t.title, 'Evento')}`,
    href: `/descobrir/linha-do-tempo#${i}`,
    category: 'descobrir' as ContentCategory,
    type: 'timeline-event',
    tags: ['timeline', 'historia', safe(t.category, ''), String(t.year)],
    personaAffinity: A.curious,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 2,
    preview: safe(t.description, '').slice(0, 120),
  }))
}

function buildRamadanItems(): ContentItem[] {
  return ramadanDays.map((r) => ({
    id: `ramadan-day-${r.day}`,
    title: `Ramadan Dia ${r.day} — ${safe(r.theme, '')}`,
    href: `/a-presenca/ramadan/${r.day}`,
    category: 'presenca' as ContentCategory,
    type: 'ramadan-day',
    tags: ['ramadan', safe(r.phase, ''), safe(r.phaseLabel, '')],
    personaAffinity: A.muslim,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 3,
  }))
}

function buildRoutineItems(): ContentItem[] {
  const items: ContentItem[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  morningRoutine.forEach((r: any) => {
    items.push({
      id: `routine-morning-${r.id}`,
      title: `Manha: ${safe(r.label, 'Rotina')}`,
      href: `/a-presenca/rotina#morning-${r.id}`,
      category: 'presenca',
      type: 'routine',
      tags: ['routine', 'rotina', 'morning', 'manha'],
      personaAffinity: A.muslim,
      depth: 'practice',
      estimatedMinutes: safe(r.timeEstimate, 2),
      preview: safe(r.description, '').slice(0, 120),
    })
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eveningRoutine.forEach((r: any) => {
    items.push({
      id: `routine-evening-${r.id}`,
      title: `Noite: ${safe(r.label, 'Rotina')}`,
      href: `/a-presenca/rotina#evening-${r.id}`,
      category: 'presenca',
      type: 'routine',
      tags: ['routine', 'rotina', 'evening', 'noite'],
      personaAffinity: A.muslim,
      depth: 'practice',
      estimatedMinutes: safe(r.timeEstimate, 2),
      preview: safe(r.description, '').slice(0, 120),
    })
  })

  return items
}

function buildSEOPageItems(): ContentItem[] {
  return SEO_PAGES.map((p) => ({
    id: `seo-${p.slug}`,
    title: safe(p.title, safe(p.heroTitle, 'Pagina')),
    href: `/${p.slug}`,
    category: 'descobrir' as ContentCategory,
    type: 'seo-page',
    tags: ['seo', 'landing', p.slug],
    personaAffinity: A.curious,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 4,
    preview: safe(p.description, safe(p.heroSubtitle, '')).slice(0, 120),
  }))
}

function buildSanctuaryVerseItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return SANCTUARY_VERSES.map((v: any, i: number) => ({
    id: `sanctuary-${i}`,
    title: `Versiculo — ${safe(v.surahRef, safe(v.theme, 'Santuario'))}`,
    href: `/a-presenca/santuario#${i}`,
    category: 'presenca' as ContentCategory,
    type: 'sanctuary-verse',
    tags: ['sanctuary', 'santuario', 'verse', safe(v.theme, '')],
    personaAffinity: A.spiritual,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 1,
    preview: safe(v.translation, '').slice(0, 120),
  }))
}

// ────────────────────────────────────────────
// Content sources — src/content/*.js
// ────────────────────────────────────────────

function buildProphetStoryItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (prophetStoriesExpanded || []).map((p: any) => ({
    id: `prophet-story-${safe(p.id, slug(safe(p.name, 'unknown')))}`,
    title: `${safe(p.name, 'Profeta')} (${safe(p.arabic, '')})`,
    href: `/os-profetas/${slug(safe(p.name, 'profeta'))}`,
    category: 'profetas' as ContentCategory,
    type: 'prophet-story',
    tags: ['prophet', 'profeta', safe(p.era, ''), safe(p.type, ''), slug(safe(p.name, ''))],
    personaAffinity: A.all,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 8,
    preview: safe(p.openingHook, '').slice(0, 120),
  }))
}

function buildSurpriseFactItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (surpriseFactsData || []).map((f: any) => ({
    id: `fact-${safe(f.id, 'unknown')}`,
    title: safe(f.hook, 'Fato Surpreendente'),
    href: `/descobrir/fatos-surpreendentes/${safe(f.id, '')}`,
    category: 'descobrir' as ContentCategory,
    type: 'surprise-fact',
    tags: ['fact', 'fato', 'surpresa', safe(f.category, '')],
    personaAffinity: A.curious,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 2,
    preview: safe(f.detail, '').slice(0, 120),
  }))
}

function buildHardQuestionItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (hardQuestionsData || []).map((q: any) => ({
    id: `question-${safe(q.id, 'unknown')}`,
    title: safe(q.question, 'Pergunta Dificil'),
    href: `/descobrir/perguntas-dificeis/${safe(q.id, '')}`,
    category: 'descobrir' as ContentCategory,
    type: 'hard-question',
    tags: ['question', 'pergunta', 'hard-question', safe(q.difficulty, '')],
    personaAffinity: A.curious,
    depth: 'deep' as ContentDepth,
    estimatedMinutes: 4,
    preview: safe(q.directAnswer, '').slice(0, 120),
  }))
}

function buildCommonGroundItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (commonGroundData || []).map((cg: any) => ({
    id: `common-ground-${safe(cg.id, 'unknown')}`,
    title: safe(cg.theme, 'Ponto em Comum'),
    href: `/a-ponte/pontos-em-comum/${safe(cg.id, '')}`,
    category: 'ponte' as ContentCategory,
    type: 'common-ground',
    tags: ['bridge', 'ponte', 'common-ground', 'christian', 'islamic'],
    personaAffinity: A.bridge,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 4,
    preview: safe(cg.christianBelief, '').slice(0, 60) + ' / ' + safe(cg.islamicBelief, '').slice(0, 60),
  }))
}

function buildRecognitionStoryItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (recognitionStoriesData || []).map((r: any) => ({
    id: `recognition-${safe(r.id, 'unknown')}`,
    title: `${safe(r.name, 'Historia')} — ${safe(r.knownAs, '')}`,
    href: `/a-ponte/historias-de-reconhecimento/${safe(r.id, '')}`,
    category: 'ponte' as ContentCategory,
    type: 'recognition-story',
    tags: ['recognition', 'reconhecimento', 'bridge', safe(r.era, ''), safe(r.type, '')],
    personaAffinity: A.bridge,
    depth: 'explore' as ContentDepth,
    estimatedMinutes: 5,
    preview: safe(r.moment, safe(r.before, '')).slice(0, 120),
  }))
}

// ────────────────────────────────────────────
// Kids content builders
// ────────────────────────────────────────────

function buildKidsPillarItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fivePillarsKids.map((p: any) => ({
    id: `kids-pillar-${slug(safe(p.title, 'pilar'))}`,
    title: safe(p.title, 'Pilar'),
    href: `/kids/cinco-pilares/${slug(safe(p.title, 'pilar'))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-pillar',
    tags: ['kids', 'pillar', 'pilar', 'five-pillars'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 3,
  }))
}

function buildKidsFaithPillarItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return sixPillarsFaithKids.map((p: any) => ({
    id: `kids-faith-${slug(safe(p.title, 'fe'))}`,
    title: safe(p.title, 'Pilar da Fe'),
    href: `/kids/pilares-da-fe/${slug(safe(p.title, 'fe'))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-faith-pillar',
    tags: ['kids', 'faith', 'fe', 'iman', 'six-pillars'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 3,
  }))
}

function buildKidsDuaItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return dailyDuasKids.map((d: any) => ({
    id: `kids-dua-${safe(d.id, slug(safe(d.title, 'dua')))}`,
    title: safe(d.title, 'Dua Kids'),
    href: `/kids/duas/${safe(d.id, slug(safe(d.title, 'dua')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-dua',
    tags: ['kids', 'dua', 'prayer', 'oracao'],
    personaAffinity: A.kids,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 1,
  }))
}

function buildKidsQuranItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return quranKids.map((s: any) => ({
    id: `kids-quran-${safe(s.number, slug(safe(s.name, 'surah')))}`,
    title: safe(s.name, 'Surah Kids'),
    href: `/kids/quran/${safe(s.number, slug(safe(s.name, 'surah')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-quran',
    tags: ['kids', 'quran', 'surah'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 3,
  }))
}

function buildKidsAdabItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return adabKids.map((a: any) => ({
    id: `kids-adab-${safe(a.id, slug(safe(a.title, 'adab')))}`,
    title: safe(a.title, 'Adab Kids'),
    href: `/kids/adab/${safe(a.id, slug(safe(a.title, 'adab')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-adab',
    tags: ['kids', 'adab', 'manners', 'bons-modos'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 2,
  }))
}

function buildKidsProphetItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return prophetStoriesKids.map((p: any) => ({
    id: `kids-prophet-${safe(p.id, slug(safe(p.name, 'profeta')))}`,
    title: safe(p.name, 'Profeta Kids'),
    href: `/kids/profetas/${safe(p.id, slug(safe(p.name, 'profeta')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-prophet',
    tags: ['kids', 'prophet', 'profeta', 'story'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 4,
  }))
}

function buildKidsHeroItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return heroesKids.map((h: any) => ({
    id: `kids-hero-${safe(h.id, slug(safe(h.name, 'heroi')))}`,
    title: safe(h.name, 'Heroi Kids'),
    href: `/kids/herois/${safe(h.id, slug(safe(h.name, 'heroi')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-hero',
    tags: ['kids', 'hero', 'heroi', 'role-model'],
    personaAffinity: A.kids,
    depth: 'intro' as ContentDepth,
    estimatedMinutes: 3,
  }))
}

function buildKidsActivityItems(): ContentItem[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return activitiesKids.map((a: any) => ({
    id: `kids-activity-${safe(a.id, slug(safe(a.title, 'atividade')))}`,
    title: safe(a.title, 'Atividade Kids'),
    href: `/kids/atividades/${safe(a.id, slug(safe(a.title, 'atividade')))}`,
    category: 'kids' as ContentCategory,
    type: 'kids-activity',
    tags: ['kids', 'activity', 'atividade', 'game', safe(a.type, '')],
    personaAffinity: A.kids,
    depth: 'practice' as ContentDepth,
    estimatedMinutes: 5,
  }))
}

// ────────────────────────────────────────────
// Unified registry
// ────────────────────────────────────────────

export const CONTENT_ITEMS: ContentItem[] = [
  ...buildSurahItems(),
  ...buildHadithItems(),
  ...buildDuaItems(),
  ...buildNamesOfGodItems(),
  ...buildTrailItems(),
  ...buildChallengeItems(),
  ...buildSeerahItems(),
  ...buildCompanionItems(),
  ...buildWomenItems(),
  ...buildBridgeProphetItems(),
  ...buildBridgeThemeItems(),
  ...buildScriptureProofItems(),
  ...buildBibliaChapterItems(),
  ...buildSurahStudyItems(),
  ...buildParableItems(),
  ...buildGlossaryItems(),
  ...buildVocabularyItems(),
  ...buildSleepStoryItems(),
  ...buildToolItems(),
  ...buildMentalHealthItems(),
  ...buildFinanceItems(),
  ...buildTimelineItems(),
  ...buildRamadanItems(),
  ...buildRoutineItems(),
  ...buildSEOPageItems(),
  ...buildSanctuaryVerseItems(),
  ...buildProphetStoryItems(),
  ...buildSurpriseFactItems(),
  ...buildHardQuestionItems(),
  ...buildCommonGroundItems(),
  ...buildRecognitionStoryItems(),
  ...buildKidsPillarItems(),
  ...buildKidsFaithPillarItems(),
  ...buildKidsDuaItems(),
  ...buildKidsQuranItems(),
  ...buildKidsAdabItems(),
  ...buildKidsProphetItems(),
  ...buildKidsHeroItems(),
  ...buildKidsActivityItems(),
]

// ────────────────────────────────────────────
// Lookup maps (built once, O(1) access)
// ────────────────────────────────────────────

export const CONTENT_BY_ID: Map<string, ContentItem> = new Map(
  CONTENT_ITEMS.map((item) => [item.id, item])
)

export const CONTENT_BY_HREF: Map<string, ContentItem> = new Map(
  CONTENT_ITEMS.map((item) => [item.href, item])
)

export const CONTENT_BY_CATEGORY: Map<ContentCategory, ContentItem[]> = new Map()
for (const item of CONTENT_ITEMS) {
  const list = CONTENT_BY_CATEGORY.get(item.category) || []
  list.push(item)
  CONTENT_BY_CATEGORY.set(item.category, list)
}

// ────────────────────────────────────────────
// Utility functions
// ────────────────────────────────────────────

export function getContentById(id: string): ContentItem | undefined {
  return CONTENT_BY_ID.get(id)
}

export function getContentByHref(href: string): ContentItem | undefined {
  return CONTENT_BY_HREF.get(href)
}

export function getContentByCategory(category: ContentCategory): ContentItem[] {
  return CONTENT_BY_CATEGORY.get(category) || []
}

export function getKidsContent(): ContentItem[] {
  return CONTENT_BY_CATEGORY.get('kids') || []
}

export function getNonKidsContent(): ContentItem[] {
  return CONTENT_ITEMS.filter((item) => item.category !== 'kids')
}

export function getContentCount(): number {
  return CONTENT_ITEMS.length
}
