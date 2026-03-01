/**
 * Discovery Engine — Unified content motor for DiscoveryOrb
 * Aggregates content from ALL data files into a single searchable index.
 * Tracks what user has already seen via localStorage.
 */

// ── TYPES ────────────────────────────────────────────────────────────────────

export interface DiscoveryItem {
  id: string
  type: 'fact' | 'question' | 'story' | 'prophet' | 'hadith' | 'bridge' | 'phenomenon' | 'system'
  title: string
  preview: string
  href: string
  source: string
}

// ── STATIC DISCOVERY INDEX ──────────────────────────────────────────────────
// Built at import time from content files. No runtime cost.

const DISCOVERY_ITEMS: DiscoveryItem[] = [
  // ── SURPRISE FACTS (26+ items) ──
  { id: 'df-sf01', type: 'fact', title: 'Jesus no Alcorão', preview: 'Jesus é mencionado mais vezes no Alcorão do que o próprio Profeta Muhammad.', href: '/perguntas', source: 'Fato Surpreendente' },
  { id: 'df-sf02', type: 'fact', title: 'O retorno de Jesus', preview: 'O Islam ensina que Jesus vai voltar no fim dos tempos.', href: '/a-ponte', source: 'Fato Surpreendente' },
  { id: 'df-sf03', type: 'fact', title: 'Milagres de Jesus no Alcorão', preview: 'O Alcorão confirma milagres de Jesus que nem todos os Evangelhos descrevem.', href: '/a-ponte', source: 'Fato Surpreendente' },
  { id: 'df-sf04', type: 'fact', title: 'Jesus e a divindade', preview: 'O Islam não rejeita Jesus — rejeita a ideia de que ele é Deus.', href: '/a-ponte', source: 'Fato Surpreendente' },
  { id: 'df-sf05', type: 'fact', title: 'Jesus e o Espírito Santo', preview: 'O Alcorão chama Jesus de "Ruh min Allah" — Espírito de Deus.', href: '/a-ponte', source: 'Fato Surpreendente' },
  { id: 'df-sf06', type: 'fact', title: 'Maria no Alcorão', preview: 'Maria (Maryam) é a única mulher mencionada pelo nome no Alcorão — e tem uma surata inteira.', href: '/a-ponte', source: 'Fato Surpreendente' },
  { id: 'df-sf07', type: 'fact', title: 'Algoritmo e Islam', preview: 'A palavra "algoritmo" vem de Al-Khwarizmi, matemático muçulmano do século IX.', href: '/o-sistema', source: 'Fato Surpreendente' },
  { id: 'df-sf08', type: 'fact', title: 'Primeira universidade', preview: 'A primeira universidade do mundo foi fundada por Fatima al-Fihri, uma mulher muçulmana, em 859 d.C.', href: '/o-sistema', source: 'Fato Surpreendente' },
  { id: 'df-sf09', type: 'fact', title: 'A primeira palavra', preview: 'A primeira palavra revelada ao Profeta Muhammad foi "Iqra" — Leia.', href: '/a-mensagem', source: 'Fato Surpreendente' },
  { id: 'df-sf10', type: 'fact', title: 'Hafiz — guardiões do Quran', preview: 'Existem mais de 10 milhões de pessoas vivas que memorizaram o Alcorão inteiro.', href: '/a-palavra', source: 'Fato Surpreendente' },
  { id: 'df-sf11', type: 'fact', title: 'Islam no Brasil', preview: 'Muçulmanos Malês lideraram a maior revolta urbana de escravos da história do Brasil, em 1835.', href: '/biblioteca', source: 'Fato Surpreendente' },
  { id: 'df-sf12', type: 'fact', title: 'Albaneses e o Holocausto', preview: 'Muçulmanos albaneses salvaram TODOS os judeus do seu país durante a Segunda Guerra Mundial.', href: '/perguntas', source: 'Fato Surpreendente' },

  // ── HARD QUESTIONS (10+ items) ──
  { id: 'df-hq01', type: 'question', title: 'Casamento de Aisha', preview: 'Muhammad se casou com Aisha quando ela tinha 6 anos? Resposta honesta.', href: '/perguntas', source: 'Pergunta Difícil' },
  { id: 'df-hq02', type: 'question', title: 'Islam e violência doméstica', preview: 'O Islam permite que homens batam em suas esposas? O versículo 4:34 explicado.', href: '/perguntas', source: 'Pergunta Difícil' },
  { id: 'df-hq03', type: 'question', title: 'Testemunho da mulher', preview: 'O testemunho de uma mulher vale metade do de um homem?', href: '/perguntas', source: 'Pergunta Difícil' },
  { id: 'df-hq04', type: 'question', title: 'Jihad e violência', preview: 'O Islam promove violência? O conceito de Jihad explicado sem rodeio.', href: '/perguntas', source: 'Pergunta Difícil' },
  { id: 'df-hq05', type: 'question', title: 'O túmulo vazio', preview: 'Se Jesus não morreu na cruz, o que aconteceu com o túmulo vazio?', href: '/perguntas', source: 'Pergunta Difícil' },

  // ── RECOGNITION STORIES (7 items) ──
  { id: 'df-rs01', type: 'story', title: 'Cat Stevens → Yusuf Islam', preview: 'De popstar mundial a muçulmano praticante. Uma quase-morte no mar mudou tudo.', href: '/sobre', source: 'História de Reconhecimento' },
  { id: 'df-rs02', type: 'story', title: 'Muhammad Ali', preview: 'O maior boxeador da história encontrou dignidade no Islam durante a segregação americana.', href: '/sobre', source: 'História de Reconhecimento' },
  { id: 'df-rs03', type: 'story', title: 'Malcolm X', preview: 'De supremacia racial à fraternidade universal — a transformação de Malcolm X em Meca.', href: '/sobre', source: 'História de Reconhecimento' },
  { id: 'df-rs04', type: 'story', title: 'Uma brasileira reconhece', preview: 'Camila — uma entre milhares de brasileiras que encontraram o Islam por conta própria.', href: '/sobre', source: 'História de Reconhecimento' },
  { id: 'df-rs05', type: 'story', title: 'O ex-ateu', preview: 'Rafael chegou pelo argumento racional — e encontrou algo que não esperava.', href: '/sobre', source: 'História de Reconhecimento' },
  { id: 'df-rs06', type: 'story', title: 'Abu Bakr — O Veraz', preview: 'O primeiro homem adulto a reconhecer a mensagem de Muhammad, sem hesitar.', href: '/os-profetas/muhammad', source: 'História de Reconhecimento' },
  { id: 'df-rs07', type: 'story', title: 'Khadija — Mãe dos Crentes', preview: 'A primeira pessoa a acreditar na revelação — antes de qualquer homem.', href: '/os-profetas/muhammad', source: 'História de Reconhecimento' },

  // ── PROPHETS (6 items) ──
  { id: 'df-pr01', type: 'prophet', title: 'Ibrahim (Abraão)', preview: 'Um homem olhou para as estrelas e percebeu que nenhuma delas podia ser Deus.', href: '/os-profetas/ibrahim', source: 'Profeta' },
  { id: 'df-pr02', type: 'prophet', title: 'Yusuf (José)', preview: 'Seus próprios irmãos o jogaram num poço vivo — e trinta anos depois ele tinha o poder de matar todos eles.', href: '/os-profetas/yusuf', source: 'Profeta' },
  { id: 'df-pr03', type: 'prophet', title: 'Musa (Moisés)', preview: 'Deus apareceu numa sarça ardente e disse: vai confrontar o faraó. Moisés respondeu: tenho problema na fala.', href: '/os-profetas/musa', source: 'Profeta' },
  { id: 'df-pr04', type: 'prophet', title: 'Isa (Jesus)', preview: 'O Islam não crucificou Jesus — ele foi elevado por Deus antes que pudessem matá-lo.', href: '/os-profetas/isa', source: 'Profeta' },
  { id: 'df-pr05', type: 'prophet', title: 'Muhammad ﷺ', preview: 'Tinha quarenta anos, estava numa caverna quando uma palavra mudou o mundo: Leia.', href: '/os-profetas/muhammad', source: 'Profeta' },
  { id: 'df-pr06', type: 'prophet', title: 'Adão — O Primeiro', preview: 'Antes de ser o primeiro homem, Adão foi o primeiro profeta — e o primeiro a errar e pedir perdão.', href: '/os-profetas/adao', source: 'Profeta' },

  // ── HADITHS (10 selected) ──
  { id: 'df-hd01', type: 'hadith', title: 'A Intenção é Tudo', preview: '"As ações são julgadas pelas intenções" — o hadith mais citado do Islam.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd02', type: 'hadith', title: 'Islam, Fé e Excelência', preview: 'O encontro com Jibril que definiu as três dimensões da fé islâmica.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd03', type: 'hadith', title: 'Os Cinco Pilares', preview: 'A estrutura completa da vida islâmica em cinco princípios.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd04', type: 'hadith', title: 'A Zona Cinza', preview: 'Entre o claramente permitido e o claramente proibido existe uma zona que define seu caráter.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd05', type: 'hadith', title: 'Religião é Sinceridade', preview: '"A religião é nasihah (sinceridade)" — para Deus, para o livro, para o profeta, para os líderes, para as pessoas.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd06', type: 'hadith', title: 'Faça Bem Tudo Que Fizer', preview: '"Deus prescreveu excelência em tudo" — até no que é mais difícil.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd07', type: 'hadith', title: 'Fale Algo Bom ou Fique em Silêncio', preview: 'Um princípio tão simples que muda toda a comunicação.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd08', type: 'hadith', title: 'Guarde Deus, Deus Te Guarda', preview: 'Se o mundo inteiro quisesse te prejudicar, não poderia — se Deus não quisesse.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd09', type: 'hadith', title: 'Um Cão e o Perdão de Deus', preview: 'Um homem deu água a um cão sedento — e Deus o perdoou por isso.', href: '/a-biblia-do-kalam', source: 'Hadith' },
  { id: 'df-hd10', type: 'hadith', title: 'Você É um Passageiro', preview: '"Esteja no mundo como se fosses um estranho ou um passageiro."', href: '/a-biblia-do-kalam', source: 'Hadith' },

  // ── BRIDGE CONTENT (5 items) ──
  { id: 'df-bc01', type: 'bridge', title: 'Nascimento Virginal', preview: 'Bíblia e Alcorão concordam: Jesus nasceu de Maria virgem, sem pai humano.', href: '/a-ponte', source: 'A Ponte' },
  { id: 'df-bc02', type: 'bridge', title: 'Milagres de Jesus', preview: 'Curar cegos, ressuscitar mortos — ambas as escrituras confirmam.', href: '/a-ponte', source: 'A Ponte' },
  { id: 'df-bc03', type: 'bridge', title: 'Dia do Julgamento', preview: 'Bíblia e Alcorão descrevem um Dia do Julgamento final com detalhes semelhantes.', href: '/a-ponte', source: 'A Ponte' },
  { id: 'df-bc04', type: 'bridge', title: 'Adão e Eva', preview: 'A criação de Adão aparece em ambas as escrituras — com uma diferença importante.', href: '/a-ponte', source: 'A Ponte' },
  { id: 'df-bc05', type: 'bridge', title: 'Abraão — o pai comum', preview: 'Judeus, cristãos e muçulmanos reverenciam o mesmo homem como patriarca.', href: '/a-ponte', source: 'A Ponte' },

  // ── QURAN PHENOMENON (3 items) ──
  { id: 'df-qp01', type: 'phenomenon', title: 'O Sistema Hafiz', preview: 'Mais de 10 milhões de pessoas vivas memorizaram cada palavra do Alcorão.', href: '/a-palavra', source: 'Fenômeno do Quran' },
  { id: 'df-qp02', type: 'phenomenon', title: '1.400 anos sem alteração', preview: 'Nenhum outro texto na história humana foi preservado com tanta precisão.', href: '/a-palavra', source: 'Fenômeno do Quran' },
  { id: 'df-qp03', type: 'phenomenon', title: 'Transmissão oral contínua', preview: 'A cadeia de transmissão vai de professor a aluno, até o próprio Profeta Muhammad.', href: '/a-palavra', source: 'Fenômeno do Quran' },

  // ── ISLAM SYSTEM (3 items) ──
  { id: 'df-is01', type: 'system', title: 'Islam como Sistema Operacional', preview: 'Tawhid é o kernel. Alcorão é a documentação. Sunnah é o changelog.', href: '/o-sistema', source: 'O Sistema' },
  { id: 'df-is02', type: 'system', title: 'Os 5 Protocolos (Pilares)', preview: 'Shahada, Salah, Zakat, Sawm, Hajj — o núcleo operacional do Islam.', href: '/o-sistema', source: 'O Sistema' },
  { id: 'df-is03', type: 'system', title: 'Fiqh — o manual de adaptação', preview: 'Como o Islam se atualiza para cada época sem perder o kernel.', href: '/o-sistema', source: 'O Sistema' },
]

// ── STORAGE KEY ──────────────────────────────────────────────────────────────

const STORAGE_KEY = 'kalam-discovered'

// ── PUBLIC API ───────────────────────────────────────────────────────────────

function getSeenIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

function saveSeenIds(seen: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]))
  } catch {}
}

/** Get N random items the user hasn't seen yet */
export function getRandomUnseen(n: number): DiscoveryItem[] {
  const seen = getSeenIds()
  const unseen = DISCOVERY_ITEMS.filter(item => !seen.has(item.id))

  // If all seen, reset and show everything
  if (unseen.length === 0) {
    saveSeenIds(new Set())
    return shuffleArray(DISCOVERY_ITEMS).slice(0, n)
  }

  return shuffleArray(unseen).slice(0, n)
}

/** Mark items as seen */
export function markSeen(ids: string[]) {
  const seen = getSeenIds()
  ids.forEach(id => seen.add(id))
  saveSeenIds(seen)
}

/** Get discovery progress stats */
export function getDiscoveryProgress(): { seen: number; total: number; percentage: number } {
  const seen = getSeenIds()
  const total = DISCOVERY_ITEMS.length
  const seenCount = Math.min(seen.size, total)
  return {
    seen: seenCount,
    total,
    percentage: Math.round((seenCount / total) * 100),
  }
}

/** Get total items count */
export function getTotalItems(): number {
  return DISCOVERY_ITEMS.length
}

// ── UTILS ────────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
