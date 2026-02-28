export interface WordSearchPuzzle {
  id: string
  title: string
  grid: string[][]
  words: string[]
  hints: string[]
}

export interface MemoryCard {
  id: string
  arabic: string
  translation: string
  emoji: string
}

export interface MatchPair {
  id: string
  left: string
  right: string
}

export interface TrueFalseQuestion {
  id: string
  statement: string
  isTrue: boolean
  explanation: string
}

export interface OrderQuestion {
  id: string
  title: string
  items: string[]
  correctOrder: number[]
}

export interface FillBlankQuestion {
  id: string
  sentence: string
  blank: string
  options: string[]
  correctIndex: number
}

export interface ActivityKids {
  id: string
  type: 'word-search' | 'memory' | 'match' | 'true-false' | 'order' | 'fill-blank' | 'coloring'
  title: string
  emoji: string
  color: string
  description: string
  difficulty: 'facil' | 'medio' | 'dificil'
  data: WordSearchPuzzle | MemoryCard[] | MatchPair[] | TrueFalseQuestion[] | OrderQuestion | FillBlankQuestion[] | null
}

export const activitiesKids: ActivityKids[] = [
  {
    id: 'word-search',
    type: 'word-search',
    title: 'Ca\u00E7a-Palavras dos Profetas',
    emoji: '\u{1F50D}',
    color: '#FF8C42',
    description: 'Encontre os nomes dos profetas escondidos no ca\u00E7a-palavras!',
    difficulty: 'facil',
    data: {
      id: 'ws-profetas',
      title: 'Ca\u00E7a-Palavras dos Profetas',
      grid: [
        ['A', 'D', 'A', 'M', 'X', 'K', 'P', 'Q'],
        ['I', 'B', 'R', 'A', 'H', 'I', 'M', 'R'],
        ['N', 'F', 'G', 'U', 'W', 'L', 'Z', 'T'],
        ['U', 'T', 'S', 'S', 'D', 'E', 'J', 'V'],
        ['H', 'M', 'A', 'A', 'C', 'B', 'H', 'S'],
        ['Y', 'U', 'N', 'U', 'S', 'O', 'I', 'A'],
        ['W', 'L', 'K', 'J', 'R', 'F', 'P', 'Q'],
        ['I', 'S', 'A', 'X', 'N', 'M', 'D', 'G'],
      ],
      words: ['ADAM', 'NUH', 'MUSA', 'ISA', 'IBRAHIM', 'YUNUS'],
      hints: [
        'O primeiro ser humano e profeta',
        'Construiu a arca para o dil\u00FAvio',
        'Abriu o mar ao meio',
        'Nasceu sem pai',
        'Foi jogado no fogo e n\u00E3o se queimou',
        'Foi engolido por uma baleia',
      ],
    } as WordSearchPuzzle,
  },
  {
    id: 'memory',
    type: 'memory',
    title: 'Jogo da Mem\u00F3ria: Nomes de Allah',
    emoji: '\u{1F9E0}',
    color: '#4ECDC4',
    description: 'Encontre os pares! Combine o nome de Allah em \u00E1rabe com seu significado.',
    difficulty: 'facil',
    data: [
      {
        id: 'mc-1',
        arabic: '\u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0646',
        translation: 'O Misericordioso',
        emoji: '\u2764\uFE0F',
      },
      {
        id: 'mc-2',
        arabic: '\u0627\u0644\u0652\u0645\u064E\u0644\u0650\u0643',
        translation: 'O Rei',
        emoji: '\u{1F451}',
      },
      {
        id: 'mc-3',
        arabic: '\u0627\u0644\u0633\u0651\u064E\u0644\u064E\u0627\u0645',
        translation: 'A Paz',
        emoji: '\u{1F54A}\uFE0F',
      },
      {
        id: 'mc-4',
        arabic: '\u0627\u0644\u0652\u0639\u064E\u0644\u0650\u064A\u0645',
        translation: 'O Onisciente',
        emoji: '\u{1F4DA}',
      },
      {
        id: 'mc-5',
        arabic: '\u0627\u0644\u0652\u062E\u064E\u0627\u0644\u0650\u0642',
        translation: 'O Criador',
        emoji: '\u{1F30D}',
      },
      {
        id: 'mc-6',
        arabic: '\u0627\u0644\u0652\u063A\u064E\u0641\u0651\u064E\u0627\u0631',
        translation: 'O Perdoador',
        emoji: '\u{1F64F}',
      },
      {
        id: 'mc-7',
        arabic: '\u0627\u0644\u0631\u0651\u064E\u0632\u0651\u064E\u0627\u0642',
        translation: 'O Provedor',
        emoji: '\u{1F33E}',
      },
      {
        id: 'mc-8',
        arabic: '\u0627\u0644\u0652\u0648\u064E\u062F\u064F\u0648\u062F',
        translation: 'O Amoroso',
        emoji: '\u{1F49A}',
      },
    ] as MemoryCard[],
  },
  {
    id: 'match',
    type: 'match',
    title: 'Combinar Profetas e Milagres',
    emoji: '\u{1F517}',
    color: '#45B7A0',
    description: 'Conecte cada profeta ao seu milagre! Arraste para combinar.',
    difficulty: 'medio',
    data: [
      {
        id: 'mp-1',
        left: 'Musa',
        right: 'Mar se abriu ao meio',
      },
      {
        id: 'mp-2',
        left: 'Ibrahim',
        right: 'Fogo n\u00E3o o queimou',
      },
      {
        id: 'mp-3',
        left: 'Sulayman',
        right: 'Falava com os animais',
      },
      {
        id: 'mp-4',
        left: 'Nuh',
        right: 'Construiu a arca',
      },
      {
        id: 'mp-5',
        left: 'Yunus',
        right: 'Sobreviveu na barriga do peixe',
      },
      {
        id: 'mp-6',
        left: 'Isa',
        right: 'Curava os doentes',
      },
      {
        id: 'mp-7',
        left: 'Salih',
        right: 'Camela saiu da rocha',
      },
      {
        id: 'mp-8',
        left: 'Muhammad',
        right: 'Recebeu o Quran',
      },
    ] as MatchPair[],
  },
  {
    id: 'true-false',
    type: 'true-false',
    title: 'Verdadeiro ou Falso',
    emoji: '\u2705',
    color: '#A78BFA',
    description: 'Teste seus conhecimentos! Diga se cada frase \u00E9 verdadeira ou falsa.',
    difficulty: 'facil',
    data: [
      {
        id: 'tf-1',
        statement: 'Os mu\u00E7ulmanos rezam 5 vezes por dia.',
        isTrue: true,
        explanation: 'Correto! As 5 ora\u00E7\u00F5es di\u00E1rias s\u00E3o: Fajr, Dhuhr, Asr, Maghrib e Isha.',
      },
      {
        id: 'tf-2',
        statement: 'O Quran foi revelado em ingl\u00EAs.',
        isTrue: false,
        explanation: 'O Quran foi revelado em \u00E1rabe ao Profeta Muhammad atrav\u00E9s do Anjo Jibril.',
      },
      {
        id: 'tf-3',
        statement: 'Ramadan \u00E9 o m\u00EAs do jejum.',
        isTrue: true,
        explanation: 'Correto! Durante o Ramadan, os mu\u00E7ulmanos jejuam do nascer ao p\u00F4r do sol.',
      },
      {
        id: 'tf-4',
        statement: 'A Kaaba fica na cidade de Medina.',
        isTrue: false,
        explanation: 'A Kaaba fica em Meca, n\u00E3o em Medina. \u00C9 para a dire\u00E7\u00E3o da Kaaba que os mu\u00E7ulmanos rezam.',
      },
      {
        id: 'tf-5',
        statement: 'O Profeta Muhammad nasceu em Meca.',
        isTrue: true,
        explanation: 'Correto! O Profeta Muhammad nasceu em Meca no ano de 570 d.C.',
      },
      {
        id: 'tf-6',
        statement: 'O Islam tem 3 pilares.',
        isTrue: false,
        explanation: 'O Islam tem 5 pilares: Shahada, Salat, Zakat, Sawm e Hajj.',
      },
      {
        id: 'tf-7',
        statement: 'Bismillah significa "Em nome de Allah".',
        isTrue: true,
        explanation: 'Correto! Dizemos Bismillah antes de come\u00E7ar qualquer atividade.',
      },
      {
        id: 'tf-8',
        statement: 'O Profeta Nuh construiu um castelo.',
        isTrue: false,
        explanation: 'O Profeta Nuh construiu uma arca (barco) por ordem de Allah para salvar os crentes do dil\u00FAvio.',
      },
      {
        id: 'tf-9',
        statement: 'Sexta-feira \u00E9 um dia especial para os mu\u00E7ulmanos.',
        isTrue: true,
        explanation: 'Correto! Sexta-feira (Jumu\'ah) \u00E9 o dia mais importante da semana, com uma ora\u00E7\u00E3o coletiva especial.',
      },
      {
        id: 'tf-10',
        statement: 'Devemos comer com a m\u00E3o esquerda segundo a Sunnah.',
        isTrue: false,
        explanation: 'Segundo a Sunnah, devemos comer com a m\u00E3o direita. O Profeta Muhammad sempre comia com a m\u00E3o direita.',
      },
    ] as TrueFalseQuestion[],
  },
  {
    id: 'order',
    type: 'order',
    title: 'Ordene os Pilares do Islam',
    emoji: '\u{1F4CB}',
    color: '#FFD93D',
    description: 'Coloque os 5 pilares do Islam na ordem correta!',
    difficulty: 'medio',
    data: {
      id: 'ord-pilares',
      title: 'Os 5 Pilares do Islam',
      items: [
        'Shahada (Testemunho de F\u00E9)',
        'Salat (Ora\u00E7\u00E3o)',
        'Zakat (Caridade Obrigat\u00F3ria)',
        'Sawm (Jejum no Ramadan)',
        'Hajj (Peregrina\u00E7\u00E3o a Meca)',
      ],
      correctOrder: [0, 1, 2, 3, 4],
    } as OrderQuestion,
  },
  {
    id: 'fill-blank',
    type: 'fill-blank',
    title: 'Complete a Frase',
    emoji: '\u270F\uFE0F',
    color: '#FF6B6B',
    description: 'Complete as frases sobre o Islam escolhendo a palavra certa!',
    difficulty: 'medio',
    data: [
      {
        id: 'fb-1',
        sentence: 'Antes de comer, dizemos ___.',
        blank: 'Bismillah',
        options: ['Alhamdulillah', 'Bismillah', 'SubhanAllah', 'Allahu Akbar'],
        correctIndex: 1,
      },
      {
        id: 'fb-2',
        sentence: 'O livro sagrado dos mu\u00E7ulmanos \u00E9 o ___.',
        blank: 'Quran',
        options: ['Hadith', 'Sunnah', 'Quran', 'Tafsir'],
        correctIndex: 2,
      },
      {
        id: 'fb-3',
        sentence: 'Os mu\u00E7ulmanos rezam virados na dire\u00E7\u00E3o de ___.',
        blank: 'Meca',
        options: ['Medina', 'Jerusal\u00E9m', 'Cairo', 'Meca'],
        correctIndex: 3,
      },
      {
        id: 'fb-4',
        sentence: 'O Profeta ___ construiu a arca.',
        blank: 'Nuh',
        options: ['Musa', 'Ibrahim', 'Nuh', 'Isa'],
        correctIndex: 2,
      },
      {
        id: 'fb-5',
        sentence: 'O m\u00EAs do jejum se chama ___.',
        blank: 'Ramadan',
        options: ['Shawwal', 'Ramadan', 'Rajab', 'Muharram'],
        correctIndex: 1,
      },
      {
        id: 'fb-6',
        sentence: 'A sauda\u00E7\u00E3o isl\u00E2mica \u00E9 As-salamu ___.',
        blank: 'alaykum',
        options: ['rahmatullah', 'alaykum', 'wa barakatuh', 'mubarak'],
        correctIndex: 1,
      },
      {
        id: 'fb-7',
        sentence: 'O anjo que trouxe o Quran ao Profeta foi ___.',
        blank: 'Jibril',
        options: ['Mikail', 'Jibril', 'Israfil', 'Malik'],
        correctIndex: 1,
      },
      {
        id: 'fb-8',
        sentence: 'A primeira surata do Quran \u00E9 ___.',
        blank: 'Al-Fatiha',
        options: ['Al-Baqarah', 'An-Nas', 'Al-Fatiha', 'Al-Ikhlas'],
        correctIndex: 2,
      },
    ] as FillBlankQuestion[],
  },
  {
    id: 'coloring',
    type: 'coloring',
    title: 'Colorir (em breve)',
    emoji: '\u{1F3A8}',
    color: '#FF8C42',
    description: 'Em breve voc\u00EA poder\u00E1 colorir lindos desenhos isl\u00E2micos! Aguarde novidades.',
    difficulty: 'facil',
    data: null,
  },
]
