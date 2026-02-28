export interface FaithPillarKids {
  id: number
  slug: string
  name: string
  arabicName: string
  emoji: string
  color: string
  title: string
  summary: string
  details: { title: string; description: string; emoji: string }[]
  reflection: string
  verse: { arabic: string; translation: string; reference: string }
}

export const sixPillarsFaithKids: FaithPillarKids[] = [
  {
    id: 1,
    slug: 'crenca-em-allah',
    name: 'Crença em Allah',
    arabicName: 'الإيمان بالله',
    emoji: '🌟',
    color: '#FF8C42',
    title: 'Acreditar em Allah',
    summary:
      'Acreditar que Allah é o Único Criador de tudo que existe!',
    details: [
      {
        title: 'Allah criou tudo',
        description:
          'Das estrelas no céu aos peixes no mar, das montanhas gigantes às formigas pequeninas — tudo foi criado por Allah com perfeição!',
        emoji: '🌍',
      },
      {
        title: 'Allah é Único',
        description:
          'Não existe ninguém igual a Allah. Ele não tem pais, filhos ou parceiros. Ele é Um só e é o mais Poderoso!',
        emoji: '☝️',
      },
      {
        title: 'Allah nos ama',
        description:
          'Allah é Ar-Rahman (O Misericordioso) e Al-Wadud (O Amoroso). Ele nos ama mais do que 70 mães juntas!',
        emoji: '❤️',
      },
      {
        title: 'Allah vê e ouve tudo',
        description:
          'Não importa onde estamos ou o que fazemos — Allah sempre nos vê e ouve nossas duas (súplicas). Nunca estamos sozinhos!',
        emoji: '👁️',
      },
    ],
    reflection:
      'Olhe para o céu à noite — quem criou todas aquelas estrelas?',
    verse: {
      arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
      translation:
        'Allah! Não há divindade além Dele, o Vivo, o Sustentador de tudo.',
      reference: 'Al-Baqarah 2:255',
    },
  },
  {
    id: 2,
    slug: 'crenca-nos-anjos',
    name: 'Crença nos Anjos',
    arabicName: 'الإيمان بالملائكة',
    emoji: '👼',
    color: '#4ECDC4',
    title: 'Acreditar nos Anjos',
    summary:
      'Allah criou os anjos de luz. Eles são seres especiais que obedecem a Allah!',
    details: [
      {
        title: 'Jibreel (Gabriel)',
        description:
          'O anjo mais importante! Ele trouxe o Quran de Allah para o Profeta Muhammad. É o mensageiro entre Allah e os profetas.',
        emoji: '📜',
      },
      {
        title: 'Mikael (Miguel)',
        description:
          'Mikael é responsável pela chuva e pelo sustento. Quando chove e as plantas crescem, é por ordem de Allah através de Mikael!',
        emoji: '🌧️',
      },
      {
        title: 'Israfeel',
        description:
          'Israfeel é o anjo que soprará a trombeta no Dia do Juízo. Ele está esperando a ordem de Allah!',
        emoji: '📯',
      },
      {
        title: 'Os Anjos Escribas',
        description:
          'Cada pessoa tem dois anjos que escrevem tudo! O da direita anota as boas ações e o da esquerda, as más ações.',
        emoji: '✍️',
      },
    ],
    reflection:
      'Os anjos registram tudo que fazemos — até os pequenos atos de bondade!',
    verse: {
      arabic: 'الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا',
      translation:
        'Louvado seja Allah, Criador dos céus e da terra, que fez dos anjos mensageiros.',
      reference: 'Fatir 35:1',
    },
  },
  {
    id: 3,
    slug: 'crenca-nos-livros',
    name: 'Crença nos Livros',
    arabicName: 'الإيمان بالكتب',
    emoji: '📚',
    color: '#45B7A0',
    title: 'Acreditar nos Livros Sagrados',
    summary:
      'Allah enviou livros sagrados para guiar a humanidade. O Quran é o último e mais completo!',
    details: [
      {
        title: 'A Torah (Tawrat)',
        description:
          'Foi revelada ao Profeta Musa (Moisés). Continha as leis de Allah para o povo de Israel.',
        emoji: '📜',
      },
      {
        title: 'Os Salmos (Zabur)',
        description:
          'Foram revelados ao Profeta Dawud (Davi). Eram cânticos lindos de louvor a Allah!',
        emoji: '🎵',
      },
      {
        title: 'O Evangelho (Injeel)',
        description:
          'Foi revelado ao Profeta Isa (Jesus). Trazia a mensagem de amor e misericórdia de Allah.',
        emoji: '📕',
      },
      {
        title: 'O Quran',
        description:
          'O último livro de Allah, revelado ao Profeta Muhammad! É o único livro sagrado que foi preservado exatamente como foi revelado, letra por letra.',
        emoji: '📗',
      },
    ],
    reflection:
      'O Quran é como um GPS para a vida — nos mostra o melhor caminho!',
    verse: {
      arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ',
      translation:
        'Este é o Livro sobre o qual não há dúvida, orientação para os que temem a Allah.',
      reference: 'Al-Baqarah 2:2',
    },
  },
  {
    id: 4,
    slug: 'crenca-nos-profetas',
    name: 'Crença nos Profetas',
    arabicName: 'الإيمان بالرسل',
    emoji: '🕊️',
    color: '#A78BFA',
    title: 'Acreditar nos Profetas',
    summary:
      'Allah enviou 124 mil profetas! Todos com a mesma mensagem: adorem apenas Allah.',
    details: [
      {
        title: 'Adam (Adão)',
        description:
          'O primeiro ser humano e o primeiro profeta! Allah o criou com Suas próprias mãos e ensinou-lhe os nomes de todas as coisas.',
        emoji: '🌿',
      },
      {
        title: 'Ibrahim (Abraão)',
        description:
          'O "Amigo de Allah"! Ele construiu a Kaaba com seu filho Ismail. Mesmo quando era difícil, ele sempre confiou em Allah.',
        emoji: '🕋',
      },
      {
        title: 'Musa (Moisés)',
        description:
          'Allah falou diretamente com Musa! Ele libertou seu povo do Faraó e Allah abriu o mar para ele passar.',
        emoji: '🌊',
      },
      {
        title: 'Isa (Jesus)',
        description:
          'Um profeta especial que nasceu sem pai! Allah lhe deu o poder de curar os doentes e dar vida aos mortos, tudo com a permissão de Allah.',
        emoji: '✨',
      },
      {
        title: 'Muhammad ﷺ',
        description:
          'O último e mais amado profeta! Ele era tão gentil que até as crianças corriam para brincar com ele. Trouxe o Quran para toda a humanidade.',
        emoji: '🌹',
      },
    ],
    reflection:
      'Os profetas eram pessoas como nós, mas com uma missão especial de Allah.',
    verse: {
      arabic: 'وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ',
      translation:
        'E enviamos a cada nação um mensageiro dizendo: Adorem Allah.',
      reference: 'An-Nahl 16:36',
    },
  },
  {
    id: 5,
    slug: 'crenca-no-dia-do-juizo',
    name: 'Crença no Dia do Juízo',
    arabicName: 'الإيمان باليوم الآخر',
    emoji: '⚖️',
    color: '#FFD93D',
    title: 'Acreditar no Dia do Juízo',
    summary:
      'Um dia especial em que todos seremos recompensados por nossas boas ações!',
    details: [
      {
        title: 'Um dia de justiça',
        description:
          'No Dia do Juízo, Allah vai julgar todas as pessoas com perfeita justiça. Ninguém será tratado injustamente, nem mesmo um pouquinho!',
        emoji: '⚖️',
      },
      {
        title: 'Nossas ações serão pesadas',
        description:
          'Todas as nossas ações, boas e más, serão colocadas numa balança. Até um sorriso conta como boa ação!',
        emoji: '📊',
      },
      {
        title: 'O Paraíso (Jannah)',
        description:
          'Para quem fez o bem, há o Jannah — um lugar lindo com rios de mel, frutas infinitas e tudo que o coração desejar!',
        emoji: '🏞️',
      },
      {
        title: 'A misericórdia de Allah',
        description:
          'Allah é o Mais Misericordioso! Ele quer que todos entrem no Paraíso. Por isso nos deu o Quran e os profetas para nos guiar.',
        emoji: '💚',
      },
    ],
    reflection:
      'Cada boa ação que você faz hoje está sendo guardada para aquele dia!',
    verse: {
      arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
      translation:
        'Quem fizer um átomo de bem, o verá.',
      reference: 'Az-Zalzalah 99:7',
    },
  },
  {
    id: 6,
    slug: 'crenca-no-qadr',
    name: 'Crença no Qadr',
    arabicName: 'الإيمان بالقدر',
    emoji: '🎯',
    color: '#FF6B6B',
    title: 'Acreditar no Destino de Allah',
    summary:
      'Allah sabe de tudo que vai acontecer. Devemos confiar no plano Dele!',
    details: [
      {
        title: 'Allah sabe de tudo',
        description:
          'Antes mesmo de nascermos, Allah já sabia tudo sobre nós — nosso nome, o que vamos fazer, até quantos fios de cabelo temos!',
        emoji: '🔮',
      },
      {
        title: 'Tudo está escrito',
        description:
          'Allah escreveu o destino de toda a criação numa tábua chamada "Al-Lawh Al-Mahfuz" (A Tábua Preservada) antes de criar o universo!',
        emoji: '📋',
      },
      {
        title: 'Fazemos nossas escolhas',
        description:
          'Mesmo Allah sabendo tudo, Ele nos deu a liberdade de escolher. Podemos escolher fazer o bem ou o mal — e somos responsáveis!',
        emoji: '🔀',
      },
      {
        title: 'Confiar no plano de Allah',
        description:
          'Quando algo difícil acontece, dizemos "Qadarallahu wa ma sha\'a fa\'al" (Allah decretou e fez o que quis). Sabemos que Ele sempre quer o melhor para nós!',
        emoji: '🤲',
      },
    ],
    reflection:
      'Quando algo difícil acontece, lembre que Allah tem um plano melhor para você!',
    verse: {
      arabic: 'إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ',
      translation:
        'Em verdade, criamos todas as coisas de acordo com uma medida (destino).',
      reference: 'Al-Qamar 54:49',
    },
  },
]
