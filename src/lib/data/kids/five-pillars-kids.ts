export interface PillarKids {
  id: number
  slug: string
  name: string
  arabicName: string
  emoji: string
  color: string
  title: string
  summary: string
  steps: { step: number; title: string; description: string; emoji: string }[]
  funFact: string
  verse: { arabic: string; translation: string; reference: string }
}

export const fivePillarsKids: PillarKids[] = [
  {
    id: 1,
    slug: 'shahada',
    name: 'Shahada',
    arabicName: 'الشهادة',
    emoji: '🗣️',
    color: '#FF8C42',
    title: 'A Declaração de Fé',
    summary:
      'A Shahada é a declaração mais importante do Islam. É quando dizemos que acreditamos em Allah e que Muhammad é Seu mensageiro.',
    steps: [
      {
        step: 1,
        title: 'Entender o significado',
        description:
          'A Shahada significa que só existe um Deus verdadeiro (Allah) e que o Profeta Muhammad (que a paz esteja com ele) é Seu último mensageiro.',
        emoji: '💡',
      },
      {
        step: 2,
        title: 'Aprender as palavras em árabe',
        description:
          'As palavras são: "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulu Allah." Pratique dizendo devagar!',
        emoji: '📝',
      },
      {
        step: 3,
        title: 'Dizer com sinceridade no coração',
        description:
          'Não basta só falar — é preciso acreditar de verdade, com todo o coração. Allah vê o que está dentro de nós!',
        emoji: '❤️',
      },
      {
        step: 4,
        title: 'Viver de acordo com ela',
        description:
          'Depois de dizer a Shahada, tentamos viver seguindo os ensinamentos de Allah e do Profeta Muhammad todos os dias.',
        emoji: '🌟',
      },
    ],
    funFact:
      'A Shahada é a primeira coisa sussurrada no ouvido de um bebê muçulmano!',
    verse: {
      arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
      translation:
        'Não há divindade além de Allah, Muhammad é o Mensageiro de Allah.',
      reference: 'Declaração de Fé',
    },
  },
  {
    id: 2,
    slug: 'salah',
    name: 'Salah',
    arabicName: 'الصلاة',
    emoji: '🙏',
    color: '#4ECDC4',
    title: 'A Oração',
    summary:
      'Salah é a oração que fazemos 5 vezes por dia. É nossa conversa direta com Allah!',
    steps: [
      {
        step: 1,
        title: 'Fazer o Wudu (ablução)',
        description:
          'Antes de rezar, lavamos as mãos, o rosto, os braços e os pés. É como se preparar para encontrar alguém muito especial!',
        emoji: '💧',
      },
      {
        step: 2,
        title: 'Ficar de frente para a Qibla (Meca)',
        description:
          'Todos os muçulmanos do mundo rezam na direção da Kaaba, em Meca. É como se todos estivéssemos juntos!',
        emoji: '🧭',
      },
      {
        step: 3,
        title: 'Fazer a intenção (Niyyah)',
        description:
          'No coração, dizemos para Allah qual oração vamos fazer. A intenção é muito importante!',
        emoji: '💭',
      },
      {
        step: 4,
        title: 'Dizer Allahu Akbar',
        description:
          'Levantamos as mãos e dizemos "Allahu Akbar" (Allah é o Maior). Isso marca o início da oração.',
        emoji: '🤲',
      },
      {
        step: 5,
        title: 'Recitar Al-Fatiha',
        description:
          'Recitamos a primeira surata do Quran, Al-Fatiha. É a oração mais bonita e importante!',
        emoji: '📖',
      },
      {
        step: 6,
        title: 'Fazer Ruku (inclinar)',
        description:
          'Inclinamos o corpo para frente com as mãos nos joelhos e dizemos "Subhana Rabbiyal Adheem" (Glória ao meu Senhor, o Grandioso).',
        emoji: '🙇',
      },
      {
        step: 7,
        title: 'Fazer Sujud (prostrar)',
        description:
          'Colocamos a testa no chão. Este é o momento mais próximo que ficamos de Allah! Dizemos "Subhana Rabbiyal A\'la" (Glória ao meu Senhor, o Altíssimo).',
        emoji: '🤲',
      },
      {
        step: 8,
        title: 'Finalizar com Salam',
        description:
          'Viramos a cabeça para a direita e para a esquerda dizendo "Assalamu Alaikum wa Rahmatullah" (A paz e a misericórdia de Allah estejam convosco).',
        emoji: '✨',
      },
    ],
    funFact:
      'Se rezarmos 5 vezes ao dia, fazemos mais de 1.800 orações por ano!',
    verse: {
      arabic: 'أَقِمِ الصَّلَاةَ لِذِكْرِي',
      translation: 'Estabelece a oração para a Minha lembrança.',
      reference: 'Ta-Ha 20:14',
    },
  },
  {
    id: 3,
    slug: 'zakat',
    name: 'Zakat',
    arabicName: 'الزكاة',
    emoji: '💝',
    color: '#45B7A0',
    title: 'A Caridade',
    summary:
      'Zakat é quando compartilhamos parte do que temos com quem precisa. Allah ama quem é generoso!',
    steps: [
      {
        step: 1,
        title: 'Entender que tudo vem de Allah',
        description:
          'Tudo que temos — brinquedos, comida, roupas — é uma bênção de Allah. Ele nos deu para que possamos compartilhar!',
        emoji: '🎁',
      },
      {
        step: 2,
        title: 'Separar uma parte para os necessitados',
        description:
          'Os adultos separam 2,5% da riqueza que guardaram por um ano. Crianças podem começar doando brinquedos ou roupas que não usam mais!',
        emoji: '📦',
      },
      {
        step: 3,
        title: 'Dar com alegria no coração',
        description:
          'Quando damos Zakat, devemos estar felizes! Não é perder algo — é ganhar a recompensa de Allah.',
        emoji: '😊',
      },
      {
        step: 4,
        title: 'Não contar para todo mundo (ser discreto)',
        description:
          'A melhor caridade é aquela que fazemos em segredo. Não precisamos postar ou contar para todo mundo!',
        emoji: '🤫',
      },
    ],
    funFact:
      'A palavra Zakat significa "purificação" — quando damos, purificamos nosso coração!',
    verse: {
      arabic: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ',
      translation: 'E estabelecei a oração e pagai o Zakat.',
      reference: 'Al-Baqarah 2:43',
    },
  },
  {
    id: 4,
    slug: 'sawm',
    name: 'Sawm',
    arabicName: 'الصوم',
    emoji: '🌙',
    color: '#A78BFA',
    title: 'O Jejum no Ramadan',
    summary:
      'Durante o mês do Ramadan, os muçulmanos jejuam do nascer ao pôr do sol. Crianças podem praticar aos poucos!',
    steps: [
      {
        step: 1,
        title: 'Acordar cedo para o Suhoor',
        description:
          'Antes do sol nascer, comemos uma refeição nutritiva chamada Suhoor. É importante comer bem para ter energia!',
        emoji: '🌅',
      },
      {
        step: 2,
        title: 'Fazer a intenção de jejuar',
        description:
          'No coração, dizemos a Allah que vamos jejuar por Ele. A intenção torna o jejum especial!',
        emoji: '💭',
      },
      {
        step: 3,
        title: 'Não comer nem beber durante o dia',
        description:
          'Do nascer ao pôr do sol, não comemos nem bebemos. Isso nos ensina paciência e gratidão pelo que temos!',
        emoji: '🚫',
      },
      {
        step: 4,
        title: 'Ler Quran e fazer boas ações',
        description:
          'O Ramadan é o mês do Quran! Aproveitamos para ler, ajudar os outros e fazer muitas boas ações.',
        emoji: '📖',
      },
      {
        step: 5,
        title: 'Quebrar o jejum no Iftar',
        description:
          'Quando o sol se põe, quebramos o jejum comendo tâmaras e bebendo água, assim como o Profeta Muhammad fazia!',
        emoji: '🌇',
      },
      {
        step: 6,
        title: 'Agradecer a Allah',
        description:
          'Depois de comer, agradecemos a Allah por nos dar força para jejuar e por toda a comida que temos.',
        emoji: '🤲',
      },
    ],
    funFact:
      'Crianças não são obrigadas a jejuar, mas muitas gostam de tentar meio-dia!',
    verse: {
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ',
      translation: 'Ó crentes, o jejum vos foi prescrito.',
      reference: 'Al-Baqarah 2:183',
    },
  },
  {
    id: 5,
    slug: 'hajj',
    name: 'Hajj',
    arabicName: 'الحج',
    emoji: '🕋',
    color: '#FFD93D',
    title: 'A Peregrinação',
    summary:
      'Hajj é a viagem sagrada para Meca que todo muçulmano sonha em fazer pelo menos uma vez na vida!',
    steps: [
      {
        step: 1,
        title: 'Vestir o Ihram',
        description:
          'Os homens vestem duas peças de tecido branco simples. As mulheres usam roupas modestas. Todos ficam iguais diante de Allah!',
        emoji: '👔',
      },
      {
        step: 2,
        title: 'Fazer Tawaf (circular a Kaaba 7 vezes)',
        description:
          'Caminhamos ao redor da Kaaba 7 vezes, no sentido anti-horário. A Kaaba é a Casa de Allah construída pelo Profeta Ibrahim!',
        emoji: '🕋',
      },
      {
        step: 3,
        title: 'Caminhar entre Safa e Marwa',
        description:
          'Caminhamos 7 vezes entre as colinas de Safa e Marwa, lembrando da esposa do Profeta Ibrahim, Hajar, que buscava água para seu filho Ismail.',
        emoji: '🏔️',
      },
      {
        step: 4,
        title: 'Ficar em Arafat',
        description:
          'Este é o dia mais importante do Hajj! Todos ficam no Monte Arafat fazendo duas (súplicas) a Allah do meio-dia até o pôr do sol.',
        emoji: '⛰️',
      },
      {
        step: 5,
        title: 'Jogar pedras em Mina',
        description:
          'Jogamos pequenas pedras em pilares que representam o Shaitan (diabo). É como dizer "não!" para as coisas ruins!',
        emoji: '🪨',
      },
      {
        step: 6,
        title: 'Celebrar o Eid al-Adha',
        description:
          'Celebramos o Eid al-Adha, a Festa do Sacrifício! Lembramos do Profeta Ibrahim, que estava disposto a sacrificar tudo por Allah.',
        emoji: '🎉',
      },
    ],
    funFact:
      'Mais de 2 milhões de pessoas fazem Hajj todos os anos — é a maior reunião do mundo!',
    verse: {
      arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ',
      translation:
        'E é dever das pessoas para com Allah peregrinar à Casa.',
      reference: 'Aal-Imran 3:97',
    },
  },
]
