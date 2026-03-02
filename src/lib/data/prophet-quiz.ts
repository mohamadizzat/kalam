// ============================================================================
// PROPHET QUIZ — "Qual Profeta Você É?"
// Personality quiz mapping users to prophetic archetypes
// Content in PT-BR, designed for Brazilian audience (20-35, Pablo Marçal followers)
// ============================================================================

export interface QuizQuestion {
  id: number
  question: string
  options: { text: string; scores: Record<string, number> }[]
}

export interface ProphetProfile {
  id: string
  name: string
  arabic: string
  title: string
  description: string
  traits: string[]
  verse: { ref: string; text: string }
  color: string
  slug: string
}

// ----------------------------------------------------------------------------
// PROFILES — 8 prophetic archetypes
// ----------------------------------------------------------------------------

export const PROPHET_PROFILES: Record<string, ProphetProfile> = {
  ibrahim: {
    id: 'ibrahim',
    name: 'Ibrahim (Abraão)',
    arabic: 'إبراهيم',
    title: 'O Líder Corajoso',
    description:
      'Você é o tipo de pessoa que questiona tudo — não por rebeldia, mas porque precisa entender antes de seguir. Quando encontra a verdade, vai até o fim por ela, mesmo que signifique ficar sozinho contra o mundo inteiro.',
    traits: ['Coragem', 'Questionador', 'Pioneiro'],
    verse: {
      ref: '2:124',
      text: 'E quando seu Senhor testou Ibrahim com certas ordens, e ele as cumpriu, Deus disse: "Farei de você um líder para a humanidade."',
    },
    color: '#C9A84C',
    slug: 'ibrahim',
  },

  yusuf: {
    id: 'yusuf',
    name: 'Yusuf (José)',
    arabic: 'يوسف',
    title: 'O Resiliente',
    description:
      'Você transforma dor em força. Traição, solidão, injustiça — nada te quebra porque você sabe que cada queda é preparação pra algo maior. Quando chega a hora, você perdoa quem te feriu e segue em frente.',
    traits: ['Paciência', 'Perdão', 'Beleza interior'],
    verse: {
      ref: '12:92',
      text: 'Disse: "Não haverá censura sobre vocês hoje. Que Deus os perdoe — Ele é o mais misericordioso dos misericordiosos."',
    },
    color: '#8B5CF6',
    slug: 'yusuf',
  },

  musa: {
    id: 'musa',
    name: 'Musa (Moisés)',
    arabic: 'موسى',
    title: 'O Libertador',
    description:
      'Você não consegue ver injustiça e ficar parado. Age primeiro, pensa depois — e mesmo quando erra, sua intenção é sempre proteger quem não pode se proteger. Sua voz treme, mas você fala mesmo assim.',
    traits: ['Justiça', 'Ação', 'Confronto'],
    verse: {
      ref: '28:16',
      text: 'Disse: "Meu Senhor, eu prejudiquei a mim mesmo, então me perdoe." E Ele o perdoou. Ele é o Indulgente, o Misericordioso.',
    },
    color: '#EF4444',
    slug: 'musa',
  },

  issa: {
    id: 'issa',
    name: 'Issa (Jesus)',
    arabic: 'عيسى',
    title: 'O Compassivo',
    description:
      'Você sente a dor dos outros como se fosse sua. Sua força não está no confronto, mas na presença — você cura com palavras, com escuta, com gentileza. As pessoas se sentem seguras perto de você.',
    traits: ['Misericórdia', 'Cura', 'Gentileza'],
    verse: {
      ref: '3:49',
      text: 'E curo o cego de nascença e o leproso, e dou vida aos mortos, com a permissão de Deus.',
    },
    color: '#3B82F6',
    slug: 'issa',
  },

  muhammad: {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    arabic: 'محمد',
    title: 'O Estrategista',
    description:
      'Você pensa a longo prazo. Enquanto outros reagem, você planeja. Sabe quando falar e quando calar, quando lutar e quando negociar. Constrói comunidades porque entende que sozinho ninguém muda o mundo.',
    traits: ['Sabedoria', 'Liderança', 'Comunidade'],
    verse: {
      ref: '21:107',
      text: 'E não te enviamos senão como misericórdia para todos os mundos.',
    },
    color: '#10B981',
    slug: 'muhammad',
  },

  nuh: {
    id: 'nuh',
    name: 'Nuh (Noé)',
    arabic: 'نوح',
    title: 'O Persistente',
    description:
      'Você é o tipo que não desiste — nunca. Pode levar 950 anos, pode ser que ninguém escute, pode ser que riam na sua cara. Você continua. Sua fé não depende de resultado, depende de convicção.',
    traits: ['Resistência', 'Fé inabalável', 'Paciência'],
    verse: {
      ref: '71:5',
      text: 'Disse: "Meu Senhor, eu convoquei meu povo noite e dia."',
    },
    color: '#6366F1',
    slug: 'nuh',
  },

  dawud: {
    id: 'dawud',
    name: 'Dawud (Davi)',
    arabic: 'داوود',
    title: 'O Artista Guerreiro',
    description:
      'Você é raro: cria e luta com a mesma intensidade. Escreve, canta, constrói — e quando precisa, vai pra batalha sem hesitar. Sua devoção é visceral, não intelectual. Você sente antes de entender.',
    traits: ['Criatividade', 'Coragem', 'Devoção'],
    verse: {
      ref: '34:10',
      text: 'E concedemos a Davi uma grande dádiva de Nossa parte: "Ó montanhas, glorificai a Deus com ele, e vós também, ó pássaros."',
    },
    color: '#F59E0B',
    slug: 'dawud',
  },

  suleiman: {
    id: 'suleiman',
    name: 'Suleiman (Salomão)',
    arabic: 'سليمان',
    title: 'O Sábio',
    description:
      'Você tem visão de sistema. Enxerga o todo enquanto outros veem as partes. Sabe administrar riqueza sem ser corrompido por ela, e usa poder como ferramenta de ordem, não de ego. Gratidão é seu combustível.',
    traits: ['Sabedoria', 'Gestão', 'Gratidão'],
    verse: {
      ref: '27:15',
      text: 'E concedemos conhecimento a Davi e a Salomão, e ambos disseram: "Louvado seja Deus, que nos preferiu sobre muitos de Seus servos crentes."',
    },
    color: '#14B8A6',
    slug: 'suleiman',
  },
}

// ----------------------------------------------------------------------------
// QUESTIONS — 7 personality-revealing questions, 4 options each
// ----------------------------------------------------------------------------

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ── Q1: Reação a injustiça ──
  {
    id: 1,
    question: 'Quando você enfrenta uma injustiça, qual é sua primeira reação?',
    options: [
      {
        text: 'Enfrento de frente — não consigo ficar parado vendo errado acontecer',
        scores: { musa: 3, ibrahim: 2, dawud: 1 },
      },
      {
        text: 'Perdoo e sigo em frente — guardar rancor me destrói mais do que o outro',
        scores: { yusuf: 3, issa: 2 },
      },
      {
        text: 'Penso numa estratégia antes de agir — reação impulsiva piora tudo',
        scores: { muhammad: 3, suleiman: 2 },
      },
      {
        text: 'Aguento firme e confio que a justiça vem — nem que demore anos',
        scores: { nuh: 3, yusuf: 1, ibrahim: 1 },
      },
    ],
  },

  // ── Q2: Motivação principal ──
  {
    id: 2,
    question: 'O que mais te motiva na vida?',
    options: [
      {
        text: 'Construir algo que dure mais que eu — um sistema, um legado, uma base',
        scores: { ibrahim: 3, suleiman: 2, muhammad: 1 },
      },
      {
        text: 'Ajudar quem tá no fundo do poço — aliviar dor dos outros me alimenta',
        scores: { issa: 3, yusuf: 2 },
      },
      {
        text: 'Descobrir a verdade — preciso entender como as coisas realmente funcionam',
        scores: { ibrahim: 2, musa: 3, nuh: 1 },
      },
      {
        text: 'Criar algo bonito — arte, música, escrita, algo que toque a alma',
        scores: { dawud: 3, yusuf: 1, suleiman: 1 },
      },
    ],
  },

  // ── Q3: Solidão ──
  {
    id: 3,
    question: 'Como você lida com a solidão?',
    options: [
      {
        text: 'Abraço — meus melhores momentos de clareza são quando tô sozinho',
        scores: { ibrahim: 3, nuh: 2 },
      },
      {
        text: 'Busco minha comunidade — preciso de gente ao redor pra funcionar bem',
        scores: { muhammad: 3, issa: 1, musa: 1 },
      },
      {
        text: 'Uso pra criar — solidão é combustível criativo pra mim',
        scores: { dawud: 3, yusuf: 2 },
      },
      {
        text: 'Me fortalece — cada vez que fiquei sozinho, saí mais forte',
        scores: { yusuf: 3, nuh: 2, musa: 1 },
      },
    ],
  },

  // ── Q4: Papel no grupo ──
  {
    id: 4,
    question: 'Num grupo, qual papel você naturalmente assume?',
    options: [
      {
        text: 'O líder — se ninguém toma a frente, eu tomo',
        scores: { muhammad: 3, ibrahim: 2, musa: 1 },
      },
      {
        text: 'O mediador — resolvo conflito e junto gente que tá se separando',
        scores: { issa: 3, yusuf: 2 },
      },
      {
        text: 'O protetor — fico de olho em quem tá sendo deixado pra trás',
        scores: { musa: 3, nuh: 1, dawud: 1 },
      },
      {
        text: 'O visionário — enxergo possibilidades que os outros ainda não viram',
        scores: { suleiman: 3, ibrahim: 1, dawud: 2 },
      },
    ],
  },

  // ── Q5: Maior força ──
  {
    id: 5,
    question: 'Qual é sua maior força?',
    options: [
      {
        text: 'Persistência — podem me derrubar cem vezes, eu levanto cento e uma',
        scores: { nuh: 3, yusuf: 2, musa: 1 },
      },
      {
        text: 'Coragem — faço o que precisa ser feito, mesmo com medo',
        scores: { ibrahim: 3, musa: 2, dawud: 1 },
      },
      {
        text: 'Compaixão — sinto o que os outros sentem e isso me move a agir',
        scores: { issa: 3, muhammad: 1, yusuf: 1 },
      },
      {
        text: 'Pensamento estratégico — vejo o jogo inteiro enquanto outros veem uma jogada',
        scores: { suleiman: 3, muhammad: 2 },
      },
    ],
  },

  // ── Q6: Quando ninguém acredita ──
  {
    id: 6,
    question: 'Como você reage quando ninguém acredita em você?',
    options: [
      {
        text: 'Provo que estão errados — dúvida dos outros é meu combustível',
        scores: { musa: 3, dawud: 2, ibrahim: 1 },
      },
      {
        text: 'Continuo em silêncio — resultado fala mais alto que discussão',
        scores: { nuh: 3, yusuf: 2 },
      },
      {
        text: 'Encontro outro caminho — se a porta fechou, entro pela janela',
        scores: { muhammad: 3, suleiman: 2, yusuf: 1 },
      },
      {
        text: 'Confio no processo — sei que o tempo vai mostrar quem tava certo',
        scores: { ibrahim: 3, nuh: 1, issa: 1 },
      },
    ],
  },

  // ── Q7: Legado ──
  {
    id: 7,
    question: 'O que você deixaria como legado?',
    options: [
      {
        text: 'Um sistema que funcione sem mim — algo que viva depois que eu for',
        scores: { muhammad: 3, suleiman: 2, ibrahim: 1 },
      },
      {
        text: 'Um movimento de justiça — pessoas livres que eu ajudei a libertar',
        scores: { musa: 3, nuh: 1, ibrahim: 1 },
      },
      {
        text: 'Arte que inspire gerações — palavras, músicas, histórias que toquem a alma',
        scores: { dawud: 3, yusuf: 2 },
      },
      {
        text: 'Sabedoria aplicável — princípios que qualquer pessoa possa usar pra viver melhor',
        scores: { suleiman: 3, issa: 2, muhammad: 1 },
      },
    ],
  },
]
