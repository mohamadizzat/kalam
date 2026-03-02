// ═══════════════════════════════════════════════════════════════
// KALAM — Mood → Practice Mapping
// Maps emotional states to recommended spiritual practices
// ═══════════════════════════════════════════════════════════════

export interface MoodEmotion {
  id: string
  label: string
  emoji: string
  color: string
}

export interface Practice {
  name: string
  description: string
  duration: string
  href: string
  icon: string
  verse: { ref: string; text: string }
}

export interface MoodMapping {
  mood: string
  practices: Practice[]
}

export const EMOTIONS: MoodEmotion[] = [
  { id: 'anxious', label: 'Ansioso', emoji: '🌊', color: '#7BADE2' },
  { id: 'sad', label: 'Triste', emoji: '🌧️', color: '#8B9DC3' },
  { id: 'grateful', label: 'Grato', emoji: '🤲', color: '#C9A84C' },
  { id: 'determined', label: 'Determinado', emoji: '🔥', color: '#E07A5F' },
  { id: 'peaceful', label: 'Em Paz', emoji: '🕊️', color: '#81B29A' },
  { id: 'connected', label: 'Conectado', emoji: '✨', color: '#B38BDB' },
  { id: 'confused', label: 'Confuso', emoji: '🌫️', color: '#A0A0A0' },
  { id: 'angry', label: 'Com Raiva', emoji: '🌋', color: '#E25C5C' },
]

export const MOOD_PRACTICES: Record<string, Practice[]> = {
  anxious: [
    {
      name: 'Dhikr de 3 minutos',
      description: 'Repita "SubhanAllah" 33 vezes. A repeticao acalma o sistema nervoso e conecta com o Divino.',
      duration: '3 min',
      href: '/a-presenca/dhikr',
      icon: 'Clock',
      verse: { ref: '13:28', text: 'Na lembranca de Deus os coracoes se tranquilizam.' },
    },
    {
      name: 'Dua para Ansiedade',
      description: 'A suplica do Profeta para momentos de angustia — pedir a Deus que alivie o coracao.',
      duration: '2 min',
      href: '/a-presenca/duas',
      icon: 'Heart',
      verse: { ref: '94:5-6', text: 'Com a dificuldade vem a facilidade. Sim, com a dificuldade vem a facilidade.' },
    },
    {
      name: 'Surah Ash-Sharh',
      description: 'A surata da Expansao — revelada quando o Profeta enfrentava pressao. 8 versos de alivio.',
      duration: '5 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '94:1', text: 'Nao expandimos para ti o teu peito?' },
    },
  ],
  sad: [
    {
      name: 'Contemplacao',
      description: 'Sons da natureza + respiracao guiada. Permita-se sentir e depois soltar.',
      duration: '10 min',
      href: '/contemplativo',
      icon: 'Sparkles',
      verse: { ref: '93:3', text: 'Teu Senhor nao te abandonou nem te desprezou.' },
    },
    {
      name: 'Dua para Tristeza',
      description: 'A suplica que transforma tristeza em entrega — confiar que Deus tem um plano.',
      duration: '2 min',
      href: '/a-presenca/duas',
      icon: 'Heart',
      verse: { ref: '93:5', text: 'E teu Senhor te concedera, e ficaras satisfeito.' },
    },
    {
      name: 'Surah Ad-Duha',
      description: 'A surata da Manha — Deus consola o Profeta apos um periodo de silencio. 11 versos de esperanca.',
      duration: '5 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '93:4', text: 'O que vem depois sera melhor para ti do que o que veio antes.' },
    },
  ],
  grateful: [
    {
      name: 'Journal de Gratidao',
      description: 'Escreva 3 bencaos do seu dia. A gratidao registrada multiplica.',
      duration: '5 min',
      href: '/a-alma/journal',
      icon: 'PenLine',
      verse: { ref: '14:7', text: 'Se fordes gratos, aumentar-vos-ei.' },
    },
    {
      name: '99 Nomes de Deus',
      description: 'Explore os atributos de Deus — cada nome e uma razao para gratidao.',
      duration: '10 min',
      href: '/a-presenca/flashcards',
      icon: 'Languages',
      verse: { ref: '55:13', text: 'Qual dos favores do vosso Senhor negareis?' },
    },
    {
      name: 'Santuario — Estudo Imersivo',
      description: 'Mergulhe no Quran com audio e ambiente — gratidao aprofundada pela Palavra.',
      duration: '15 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '16:18', text: 'Se contardes as gracas de Deus, nao podereis enumera-las.' },
    },
  ],
  determined: [
    {
      name: 'Plano Diario',
      description: 'Monte sua rotina de praticas para hoje. Determinacao precisa de direcao.',
      duration: '5 min',
      href: '/a-jornada/plano-diario',
      icon: 'Calendar',
      verse: { ref: '3:139', text: 'Nao desanimeis nem vos entristecais, pois sereis superiores se fordes crentes.' },
    },
    {
      name: 'Hifz — Memorizacao',
      description: 'Canalize a energia para memorizar novos versos. Cada verso memorizado e uma semente eterna.',
      duration: '15 min',
      href: '/a-palavra/hifz',
      icon: 'BookMarked',
      verse: { ref: '29:69', text: 'Quem se esforcar por Nos, Nos o guiaremos.' },
    },
    {
      name: 'Surah Al-Imran 3:139',
      description: 'Os versos de coragem — Deus fala diretamente a quem persevera.',
      duration: '5 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '3:200', text: 'Sede pacientes e perseverantes.' },
    },
  ],
  peaceful: [
    {
      name: 'Santuario de Estudo',
      description: 'Experiencia imersiva — audio por verso com ambiente sonoro. O momento perfeito pra aprofundar.',
      duration: '20 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '89:27-28', text: 'O alma serena! Retorna ao teu Senhor, satisfeita e aceita.' },
    },
    {
      name: 'Contemplativo',
      description: 'Modo contemplacao com binaural beats e sons da natureza. Amplifique a paz interior.',
      duration: '15 min',
      href: '/contemplativo',
      icon: 'Sparkles',
      verse: { ref: '10:62', text: 'Os aliados de Deus nao terao temor nem tristeza.' },
    },
    {
      name: 'Surah Ar-Rahman',
      description: '78 versos sobre as gracas de Deus — ritmo hipnotico de gratidao.',
      duration: '10 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '55:1-2', text: 'O Misericordioso. Ensinou o Quran.' },
    },
  ],
  connected: [
    {
      name: 'Salah — Oracao',
      description: 'A conexao direta com Deus. Sem intermediarios, sem traducao necessaria.',
      duration: '10 min',
      href: '/a-presenca/salah',
      icon: 'Sun',
      verse: { ref: '2:186', text: 'Quando Meus servos te perguntarem sobre Mim — Eu estou perto.' },
    },
    {
      name: 'Duas Coranicas',
      description: 'As suplicas que estao dentro do proprio Quran — feitas pelos profetas.',
      duration: '5 min',
      href: '/a-presenca/duas',
      icon: 'Heart',
      verse: { ref: '40:60', text: 'Invocai-Me, que vos responderei.' },
    },
    {
      name: 'Surah Al-Baqarah 2:186',
      description: 'O verso da proximidade — Deus responde a cada suplica.',
      duration: '5 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '50:16', text: 'Nos estamos mais perto dele do que sua veia jugular.' },
    },
  ],
  confused: [
    {
      name: 'Busca no Quran',
      description: 'Pesquise por tema ou palavra-chave. A Palavra tem resposta para tudo.',
      duration: '10 min',
      href: '/a-palavra/busca',
      icon: 'Search',
      verse: { ref: '2:269', text: 'Ele concede sabedoria a quem quer, e quem a recebe recebe um bem imenso.' },
    },
    {
      name: 'Perguntas Dificeis',
      description: 'Respostas profundas para as questoes que todo ser humano faz.',
      duration: '10 min',
      href: '/perguntas',
      icon: 'MessageCircle',
      verse: { ref: '39:9', text: 'Sao iguais os que sabem e os que nao sabem?' },
    },
    {
      name: 'Surah Al-Baqarah 2:269',
      description: 'Peca sabedoria diretamente — a clareza vem de quem criou a mente.',
      duration: '5 min',
      href: '/a-palavra/santuario',
      icon: 'BookOpen',
      verse: { ref: '20:114', text: 'Senhor, aumenta-me o conhecimento.' },
    },
  ],
  angry: [
    {
      name: 'Respiracao Contemplativa',
      description: 'O Profeta disse: "Se voce sentir raiva, sente-se. Se continuar, deite-se." Comece respirando.',
      duration: '5 min',
      href: '/contemplativo',
      icon: 'Sparkles',
      verse: { ref: '3:134', text: 'Os que reprimem a raiva e perdoam as pessoas — Deus ama os benfeitores.' },
    },
    {
      name: 'Dhikr de Tranquilidade',
      description: 'Repita "Astaghfirullah" (peco perdao a Deus) 33 vezes. Cada repeticao dissolve a raiva.',
      duration: '3 min',
      href: '/a-presenca/dhikr',
      icon: 'Clock',
      verse: { ref: '42:37', text: 'Os que evitam os grandes pecados e, quando se enfurecem, perdoam.' },
    },
    {
      name: 'Hadith do Controle',
      description: '"O forte nao e aquele que derrota os outros. O forte e aquele que controla a si mesmo quando irado."',
      duration: '2 min',
      href: '/a-palavra/hadiths',
      icon: 'BookOpen',
      verse: { ref: '41:34', text: 'Repele o mal com o que e melhor, e aquele que era inimigo se tornara amigo intimo.' },
    },
  ],
}

export interface MoodLogEntry {
  date: string
  mood: string
  practiceChosen?: string
}

export function getMoodLog(): MoodLogEntry[] {
  try {
    const raw = localStorage.getItem('kalam-mood-log')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveMoodEntry(mood: string, practiceChosen?: string) {
  const log = getMoodLog()
  log.push({
    date: new Date().toISOString(),
    mood,
    practiceChosen,
  })
  // Keep last 90 entries
  const trimmed = log.slice(-90)
  try {
    localStorage.setItem('kalam-mood-log', JSON.stringify(trimmed))
  } catch {}
}

export function getRecentMoods(days: number = 7): MoodLogEntry[] {
  const log = getMoodLog()
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  return log.filter(e => new Date(e.date) >= cutoff)
}
