export interface IslamicEventKids {
  id: number
  slug: string
  name: string
  arabicName: string
  emoji: string
  color: string
  month: string
  description: string
  traditions: string[]
  funFact: string
}

export const islamicCalendarKids: IslamicEventKids[] = [
  {
    id: 1,
    slug: 'ramadan',
    name: 'Ramadan',
    arabicName: '\u0631\u0645\u0636\u0627\u0646',
    emoji: '\u{1F319}',
    color: '#A78BFA',
    month: 'Ramadan',
    description: 'Ramadan \u00E9 o m\u00EAs mais especial do ano! Durante 30 dias, os mu\u00E7ulmanos jejuam do nascer ao p\u00F4r do sol para se aproximar de Allah. \u00C9 um tempo de ora\u00E7\u00E3o, generosidade e reflex\u00E3o.',
    traditions: [
      'Acordar cedo para o Suhoor (refei\u00E7\u00E3o antes do amanhecer)',
      'Quebrar o jejum no Iftar com t\u00E2maras e \u00E1gua',
      'Ler o Quran inteiro durante o m\u00EAs',
      'Fazer mais caridade e ajudar os outros',
    ],
    funFact: 'O Quran come\u00E7ou a ser revelado durante o Ramadan! Por isso esse m\u00EAs \u00E9 t\u00E3o especial para os mu\u00E7ulmanos.',
  },
  {
    id: 2,
    slug: 'eid-al-fitr',
    name: 'Eid al-Fitr',
    arabicName: '\u0639\u064A\u062F \u0627\u0644\u0641\u0637\u0631',
    emoji: '\u{1F389}',
    color: '#FFD93D',
    month: 'Shawwal',
    description: '\u00C9 a festa que celebra o fim do Ramadan! Depois de 30 dias de jejum, os mu\u00E7ulmanos se re\u00FAnem para rezar, comer del\u00EDcias e celebrar juntos. \u00C9 um dos dias mais felizes do ano!',
    traditions: [
      'Vestir roupas novas e bonitas',
      'Fazer a ora\u00E7\u00E3o especial do Eid pela manh\u00E3',
      'Visitar fam\u00EDlia e amigos e trocar presentes',
      'Doar Zakat al-Fitr (caridade) antes da ora\u00E7\u00E3o do Eid',
    ],
    funFact: 'No Eid al-Fitr \u00E9 proibido jejuar! \u00C9 um dia de alegria e celebra\u00E7\u00E3o. Em muitos pa\u00EDses, as crian\u00E7as ganham dinheiro e doces dos adultos, chamado de Eidiyya!',
  },
  {
    id: 3,
    slug: 'eid-al-adha',
    name: 'Eid al-Adha',
    arabicName: '\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649',
    emoji: '\u{1F411}',
    color: '#FF8C42',
    month: 'Dhul Hijjah',
    description: 'A Festa do Sacrif\u00EDcio lembra a hist\u00F3ria do Profeta Ibrahim, que estava disposto a obedecer a Allah em tudo. Allah o recompensou enviando um carneiro no lugar de seu filho Ismail.',
    traditions: [
      'Fazer a ora\u00E7\u00E3o especial do Eid pela manh\u00E3',
      'Realizar o sacrif\u00EDcio de um animal e dividir a carne em 3 partes: fam\u00EDlia, amigos e pobres',
      'Vestir roupas novas e visitar fam\u00EDlia',
      'Dizer Takbir: Allahu Akbar, Allahu Akbar, La ilaha illallah',
    ],
    funFact: 'O Eid al-Adha acontece durante o Hajj, a peregrina\u00E7\u00E3o a Meca. Milh\u00F5es de mu\u00E7ulmanos do mundo inteiro est\u00E3o em Meca nesse momento!',
  },
  {
    id: 4,
    slug: 'mawlid',
    name: 'Mawlid an-Nabi',
    arabicName: '\u0627\u0644\u0645\u0648\u0644\u062F \u0627\u0644\u0646\u0628\u0648\u064A',
    emoji: '\u{1F54C}',
    color: '#4ECDC4',
    month: 'Rabi al-Awwal',
    description: 'Neste dia, lembramos o nascimento do Profeta Muhammad (saws), o \u00FAltimo mensageiro de Allah. \u00C9 um momento para aprender mais sobre sua vida, seus ensinamentos e seguir seu exemplo.',
    traditions: [
      'Aprender sobre a vida e os ensinamentos do Profeta Muhammad',
      'Enviar salawa\u00E7\u00F5es ao Profeta (Allahumma salli ala Muhammad)',
      'Reunir-se em fam\u00EDlia para lembrar suas hist\u00F3rias',
      'Praticar a sunnah no dia a dia',
    ],
    funFact: 'O Profeta Muhammad nasceu numa segunda-feira em Meca. Ele era conhecido como Al-Amin (O Confi\u00E1vel) mesmo antes de se tornar profeta, porque nunca mentiu!',
  },
  {
    id: 5,
    slug: 'isra-miraj',
    name: 'Isra e Miraj',
    arabicName: '\u0627\u0644\u0625\u0633\u0631\u0627\u0621 \u0648\u0627\u0644\u0645\u0639\u0631\u0627\u062C',
    emoji: '\u2728',
    color: '#45B7A0',
    month: 'Rajab',
    description: 'A noite mais incr\u00EDvel da hist\u00F3ria! O Profeta Muhammad viajou de Meca a Jerusal\u00E9m (Isra) e depois subiu aos c\u00E9us (Miraj), onde falou com Allah. Foi nessa noite que as 5 ora\u00E7\u00F5es di\u00E1rias foram ordenadas.',
    traditions: [
      'Aprender sobre a hist\u00F3ria da viagem noturna',
      'Fazer ora\u00E7\u00F5es extras e dua durante a noite',
      'Refletir sobre a import\u00E2ncia das 5 ora\u00E7\u00F5es di\u00E1rias',
      'Ler sobre os sinais que o Profeta viu nos c\u00E9us',
    ],
    funFact: 'Originalmente, Allah ordenou 50 ora\u00E7\u00F5es por dia! O Profeta Musa aconselhou Muhammad a pedir redu\u00E7\u00E3o, e Allah reduziu para 5, mas com a recompensa de 50!',
  },
  {
    id: 6,
    slug: 'laylat-al-qadr',
    name: 'Laylat al-Qadr',
    arabicName: '\u0644\u064A\u0644\u0629 \u0627\u0644\u0642\u062F\u0631',
    emoji: '\u{1F31F}',
    color: '#FF6B6B',
    month: 'Ramadan',
    description: 'A Noite do Destino \u00E9 a noite mais poderosa do ano inteiro! Adorar a Allah nesta \u00FAnica noite vale mais do que 1.000 meses de adora\u00E7\u00E3o. Ela acontece nas \u00FAltimas 10 noites do Ramadan.',
    traditions: [
      'Ficar acordado nas noites \u00EDmpares das \u00FAltimas 10 noites do Ramadan (21, 23, 25, 27, 29)',
      'Fazer muita dua e pedir perd\u00E3o a Allah',
      'Recitar o Quran durante a noite',
      'Fazer a dua especial: Allahumma innaka afuwwun tuhibbul afwa fa\'fu anni',
    ],
    funFact: 'Uma \u00FAnica noite de Laylat al-Qadr vale mais de 83 anos de adora\u00E7\u00E3o! Os anjos descem \u00E0 Terra nesta noite, e h\u00E1 paz at\u00E9 o amanhecer.',
  },
  {
    id: 7,
    slug: 'ashura',
    name: 'Ashura',
    arabicName: '\u0639\u0627\u0634\u0648\u0631\u0627\u0621',
    emoji: '\u{1F4FF}',
    color: '#A78BFA',
    month: 'Muharram',
    description: 'O dia 10 de Muharram \u00E9 o dia de Ashura. Neste dia, Allah salvou o Profeta Musa e seu povo do Fara\u00F3, abrindo o mar para eles passarem. O Profeta Muhammad jejuava neste dia em gratid\u00E3o.',
    traditions: [
      'Jejuar no dia de Ashura (10 de Muharram) e no dia anterior ou posterior',
      'Lembrar a hist\u00F3ria do Profeta Musa e o Fara\u00F3',
      'Agradecer a Allah por Suas b\u00EAn\u00E7\u00E3os e prote\u00E7\u00E3o',
      'Fazer caridade e ajudar os mais necessitados',
    ],
    funFact: 'Quando o Profeta Muhammad chegou a Medina e viu os judeus jejuando neste dia em honra a Musa, ele disse: "N\u00F3s temos mais direito a Musa" e tamb\u00E9m jejuou!',
  },
  {
    id: 8,
    slug: 'ano-novo',
    name: 'Ano Novo Isl\u00E2mico',
    arabicName: '\u0631\u0623\u0633 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0647\u062C\u0631\u064A\u0629',
    emoji: '\u{1F5D3}\uFE0F',
    color: '#FFD93D',
    month: 'Muharram',
    description: 'O primeiro dia do m\u00EAs de Muharram marca o in\u00EDcio de um novo ano no calend\u00E1rio isl\u00E2mico. Este calend\u00E1rio come\u00E7ou quando o Profeta Muhammad fez a Hijra (migra\u00E7\u00E3o) de Meca para Medina.',
    traditions: [
      'Refletir sobre o ano que passou e fazer prop\u00F3sitos para o novo ano',
      'Aprender sobre a Hijra do Profeta Muhammad',
      'Fazer dua pedindo um ano aben\u00E7oado',
      'Jejuar durante o m\u00EAs de Muharram (especialmente Ashura)',
    ],
    funFact: 'O calend\u00E1rio isl\u00E2mico \u00E9 lunar, ou seja, segue a lua! Por isso os meses isl\u00E2micos "andam" pelo calend\u00E1rio solar. O Ramadan, por exemplo, acontece em \u00E9pocas diferentes a cada ano.',
  },
]
