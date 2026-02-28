// ── ACHIEVEMENTS / BADGE SYSTEM ──────────────────────────────────────────────
// 20 badges the user can unlock across all app modules.
// checkAchievements() reads localStorage and returns every earned achievement.

export type Achievement = {
  id: string
  title: string
  description: string
  icon: string          // lucide-react icon name (PascalCase)
  condition: string     // human-readable unlock condition
  category: 'quran' | 'names' | 'worship' | 'journey' | 'discipline' | 'social'
}

export const achievements: Achievement[] = [
  // ── Quran ──
  {
    id: 'primeiro-passo',
    title: 'Primeiro Passo',
    description: 'Leu sua primeira surata.',
    icon: 'BookOpen',
    condition: 'Ler 1 surata',
    category: 'quran',
  },
  {
    id: 'leitor-dedicado',
    title: 'Leitor Dedicado',
    description: 'Leu 10 suratas do Alcorao.',
    icon: 'BookMarked',
    condition: 'Ler 10 suratas',
    category: 'quran',
  },
  {
    id: 'hafiz-em-progresso',
    title: 'Hafiz em Progresso',
    description: 'Memorizou 5 suratas curtas.',
    icon: 'Brain',
    condition: 'Memorizar 5 suratas no Hifz',
    category: 'quran',
  },
  {
    id: 'estudante-do-quran',
    title: 'Estudante do Quran',
    description: 'Completou 3 estudos profundos.',
    icon: 'GraduationCap',
    condition: 'Completar 3 estudos profundos de suratas',
    category: 'quran',
  },

  // ── Names ──
  {
    id: 'conhecedor-dos-nomes',
    title: 'Conhecedor dos Nomes',
    description: 'Estudou todos os 99 Nomes de Deus.',
    icon: 'Sparkles',
    condition: 'Estudar todos os 99 Nomes',
    category: 'names',
  },
  {
    id: 'mestre-dos-nomes',
    title: 'Mestre dos Nomes',
    description: 'Completou todos os 99 flashcards.',
    icon: 'Award',
    condition: 'Completar todos os 99 flashcards',
    category: 'names',
  },

  // ── Worship ──
  {
    id: 'voz-da-oracao',
    title: 'Voz da Oracao',
    description: 'Completou 10 sessoes de dhikr.',
    icon: 'Heart',
    condition: 'Completar 10 sessoes de dhikr',
    category: 'worship',
  },
  {
    id: 'escriba-da-alma',
    title: 'Escriba da Alma',
    description: 'Escreveu 7 entradas no diario espiritual.',
    icon: 'PenLine',
    condition: 'Escrever 7 entradas no journal',
    category: 'worship',
  },

  // ── Journey ──
  {
    id: 'caminhante',
    title: 'Caminhante',
    description: 'Completou sua primeira trilha de estudo.',
    icon: 'Footprints',
    condition: 'Completar 1 trilha',
    category: 'journey',
  },
  {
    id: 'peregrino',
    title: 'Peregrino',
    description: 'Completou 3 trilhas de estudo.',
    icon: 'Mountain',
    condition: 'Completar 3 trilhas',
    category: 'journey',
  },
  {
    id: 'historiador',
    title: 'Historiador',
    description: 'Leu todos os 12 capitulos da Seerah.',
    icon: 'ScrollText',
    condition: 'Ler todos os 12 capitulos da vida do Profeta',
    category: 'journey',
  },
  {
    id: 'companheiro-dos-companheiros',
    title: 'Companheiro dos Companheiros',
    description: 'Leu todos os 10 perfis de companheiros.',
    icon: 'Users',
    condition: 'Ler todos os 10 perfis de companheiros',
    category: 'journey',
  },
  {
    id: 'economista-halal',
    title: 'Economista Halal',
    description: 'Leu todos os 8 topicos de financas islamicas.',
    icon: 'Coins',
    condition: 'Ler todos os 8 topicos de financas',
    category: 'journey',
  },

  // ── Discipline ──
  {
    id: 'guerreiro-de-7-dias',
    title: 'Guerreiro de 7 Dias',
    description: 'Completou um desafio de 7 dias.',
    icon: 'Sword',
    condition: 'Completar 1 desafio de 7 dias',
    category: 'discipline',
  },
  {
    id: 'madrugador',
    title: 'Madrugador',
    description: 'Completou a rotina matinal 7 vezes.',
    icon: 'Sunrise',
    condition: 'Completar a rotina matinal em 7 dias diferentes',
    category: 'discipline',
  },
  {
    id: 'constante',
    title: 'Constante',
    description: 'Manteve um streak de 7 dias.',
    icon: 'Flame',
    condition: 'Manter streak de 7 dias consecutivos',
    category: 'discipline',
  },
  {
    id: 'inabalavel',
    title: 'Inabalavel',
    description: 'Manteve um streak de 30 dias.',
    icon: 'Shield',
    condition: 'Manter streak de 30 dias consecutivos',
    category: 'discipline',
  },

  // ── Social / Exploration ──
  {
    id: 'explorador',
    title: 'Explorador',
    description: 'Visitou todos os 4 espacos do Kalam.',
    icon: 'Compass',
    condition: 'Visitar A Palavra, A Presenca, A Jornada e A Alma',
    category: 'social',
  },
  {
    id: 'buscador',
    title: 'Buscador',
    description: 'Encontrou 5 versiculos pela busca.',
    icon: 'Search',
    condition: 'Usar a busca e encontrar 5 versiculos',
    category: 'social',
  },
  {
    id: 'generoso',
    title: 'Generoso',
    description: 'Compartilhou 5 versiculos.',
    icon: 'Share2',
    condition: 'Compartilhar 5 versiculos',
    category: 'social',
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function safeParseArray(key: string): unknown[] {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function safeParseNumber(key: string): number {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return 0
    const parsed = JSON.parse(raw)
    if (typeof parsed === 'number') return parsed
    if (Array.isArray(parsed)) return parsed.length
    return parseInt(raw) || 0
  } catch {
    return parseInt(localStorage.getItem(key) || '0') || 0
  }
}

function countRoutineMorningDays(): number {
  let count = 0
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('kalam-routine-')) {
      try {
        const items = JSON.parse(localStorage.getItem(key) || '[]')
        // Morning routine IDs start with "m-"
        const morningCompleted = Array.isArray(items)
          ? items.filter((id: string) => typeof id === 'string' && id.startsWith('m-')).length
          : 0
        // Consider morning done if at least 3 items checked
        if (morningCompleted >= 3) count++
      } catch {
        // skip
      }
    }
  }
  return count
}

// ── Main checker ─────────────────────────────────────────────────────────────

export function checkAchievements(): Achievement[] {
  if (typeof window === 'undefined') return []

  const earned: Achievement[] = []

  // Read all data once
  const surahsRead = safeParseArray('kalam-surahs-read')
  const namesStudied = safeParseArray('kalam-names-studied')
  const flashcardsStudied = safeParseArray('kalam-flashcards-studied')
  const dhikrSessions = safeParseNumber('kalam-dhikr-sessions')
  const journalEntries = safeParseArray('kalam-journal')
  const hifzProgress = safeParseArray('kalam-hifz-progress')
  const seerahRead = safeParseArray('kalam-seerah-read')
  const companionsRead = safeParseArray('kalam-companions-read')
  const financeRead = safeParseArray('kalam-finance-read')
  const completedChallenges = safeParseArray('kalam-completed-challenges')
  const streak = parseInt(localStorage.getItem('kalam-streak') || '0')
  const spacesVisited = safeParseArray('kalam-spaces-visited')
  const searchCount = safeParseNumber('kalam-search-count')
  const shareCount = safeParseNumber('kalam-share-count')

  // Surah studies - count from kalam-surah-studies-read or estimate
  const surahStudiesRead = safeParseArray('kalam-surah-studies-read')

  // Morning routine days
  const morningDays = countRoutineMorningDays()

  // ── Check each achievement ──

  // 1. Primeiro Passo — 1 surah read
  if (surahsRead.length >= 1) earned.push(achievements[0])

  // 2. Leitor Dedicado — 10 surahs
  if (surahsRead.length >= 10) earned.push(achievements[1])

  // 3. Hafiz em Progresso — 5 hifz
  if (hifzProgress.length >= 5) earned.push(achievements[2])

  // 4. Estudante do Quran — 3 studies
  if (surahStudiesRead.length >= 3) earned.push(achievements[3])

  // 5. Conhecedor dos Nomes — 99 names
  if (namesStudied.length >= 99) earned.push(achievements[4])

  // 6. Mestre dos Nomes — 99 flashcards
  if (flashcardsStudied.length >= 99) earned.push(achievements[5])

  // 7. Voz da Oracao — 10 dhikr
  if (dhikrSessions >= 10) earned.push(achievements[6])

  // 8. Escriba da Alma — 7 journal
  if (journalEntries.length >= 7) earned.push(achievements[7])

  // 9. Caminhante — 1 trail (uses completed challenges as proxy for trails)
  // Trails don't have localStorage yet, so we check completed challenges
  if (completedChallenges.length >= 1) earned.push(achievements[8])

  // 10. Peregrino — 3 trails/challenges
  if (completedChallenges.length >= 3) earned.push(achievements[9])

  // 11. Historiador — 12 seerah
  if (seerahRead.length >= 12) earned.push(achievements[10])

  // 12. Companheiro dos Companheiros — 10 companions
  if (companionsRead.length >= 10) earned.push(achievements[11])

  // 13. Economista Halal — 8 finance
  if (financeRead.length >= 8) earned.push(achievements[12])

  // 14. Guerreiro de 7 Dias — 1 completed challenge
  if (completedChallenges.length >= 1) earned.push(achievements[13])

  // 15. Madrugador — morning routine 7 days
  if (morningDays >= 7) earned.push(achievements[14])

  // 16. Constante — 7-day streak
  if (streak >= 7) earned.push(achievements[15])

  // 17. Inabalavel — 30-day streak
  if (streak >= 30) earned.push(achievements[16])

  // 18. Explorador — visited all 4 spaces
  if (spacesVisited.length >= 4) earned.push(achievements[17])

  // 19. Buscador — 5 searches
  if (searchCount >= 5) earned.push(achievements[18])

  // 20. Generoso — 5 shares
  if (shareCount >= 5) earned.push(achievements[19])

  return earned
}

// ── Stats helper (used by PainelClient) ──────────────────────────────────────

export type DashboardStats = {
  streak: number
  surahsRead: number
  namesStudied: number
  dhikrSessions: number
  journalEntries: number
  trailDaysCompleted: number

  // A Palavra
  surahStudies: number
  favHadiths: number
  parablesRead: number
  hifzProgress: number

  // A Presenca
  flashcardsStudied: number
  arabicLetters: number

  // A Jornada
  seerahRead: number
  companionsRead: number
  womenRead: number
  financeRead: number
  mentalHealthRead: number
  ramadanProgress: number
}

export function getDashboardStats(): DashboardStats {
  if (typeof window === 'undefined') {
    return {
      streak: 0, surahsRead: 0, namesStudied: 0, dhikrSessions: 0,
      journalEntries: 0, trailDaysCompleted: 0, surahStudies: 0,
      favHadiths: 0, parablesRead: 0, hifzProgress: 0,
      flashcardsStudied: 0, arabicLetters: 0, seerahRead: 0,
      companionsRead: 0, womenRead: 0, financeRead: 0,
      mentalHealthRead: 0, ramadanProgress: 0,
    }
  }

  // Count trail days completed across all kalam-completed-challenges
  const completedChallenges = safeParseArray('kalam-completed-challenges')
  // Each completed challenge = 7 days
  const trailDays = completedChallenges.length * 7

  return {
    streak: parseInt(localStorage.getItem('kalam-streak') || '0'),
    surahsRead: safeParseArray('kalam-surahs-read').length,
    namesStudied: safeParseArray('kalam-names-studied').length,
    dhikrSessions: safeParseNumber('kalam-dhikr-sessions'),
    journalEntries: safeParseArray('kalam-journal').length,
    trailDaysCompleted: trailDays,
    surahStudies: safeParseArray('kalam-surah-studies-read').length,
    favHadiths: safeParseArray('kalam-fav-hadiths').length,
    parablesRead: safeParseArray('kalam-parables-read').length,
    hifzProgress: safeParseArray('kalam-hifz-progress').length,
    flashcardsStudied: safeParseArray('kalam-flashcards-studied').length,
    arabicLetters: safeParseArray('kalam-arabic-letters').length,
    seerahRead: safeParseArray('kalam-seerah-read').length,
    companionsRead: safeParseArray('kalam-companions-read').length,
    womenRead: safeParseArray('kalam-women-read').length,
    financeRead: safeParseArray('kalam-finance-read').length,
    mentalHealthRead: safeParseArray('kalam-mental-health-read').length,
    ramadanProgress: safeParseArray('kalam-ramadan-progress').length,
  }
}
