export interface ScriptureProof {
  id: string
  category: 'monotheism' | 'prophets' | 'jesus' | 'morality' | 'afterlife' | 'creation' | 'prayer' | 'prophecy'
  title: string
  summary: string
  quranVerse: {
    reference: string
    arabic: string
    translation: string
  }
  scriptureParallels: {
    source: 'Torah' | 'Salmos' | 'Evangelhos' | 'Profetas'
    book: string
    reference: string
    text: string
  }[]
  convergenceNote: string
  nuanceNote?: string
}

export const CATEGORY_META: Record<string, { label: string; color: string; bg: string }> = {
  monotheism: { label: 'Monoteismo', color: '#C9A84C', bg: 'rgba(201,168,76,0.12)' },
  prophets: { label: 'Profetas', color: '#7BA3E2', bg: 'rgba(123,163,226,0.12)' },
  jesus: { label: 'Jesus', color: '#E27B7B', bg: 'rgba(226,123,123,0.12)' },
  morality: { label: 'Moralidade', color: '#6ECB8A', bg: 'rgba(110,203,138,0.12)' },
  afterlife: { label: 'Vida Apos a Morte', color: '#B07BE2', bg: 'rgba(176,123,226,0.12)' },
  creation: { label: 'Criacao', color: '#E2C77B', bg: 'rgba(226,199,123,0.12)' },
  prayer: { label: 'Oracao', color: '#7BE2D4', bg: 'rgba(123,226,212,0.12)' },
  prophecy: { label: 'Profecia', color: '#E27BB0', bg: 'rgba(226,123,176,0.12)' },
}

export const scriptureProofs: ScriptureProof[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MONOTEISMO (5)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'mono-01',
    category: 'monotheism',
    title: 'A Unicidade de Deus',
    summary: 'A declaracao mais fundamental de ambas as tradicoes: existe apenas Um Deus.',
    quranVerse: {
      reference: 'Surah Al-Ikhlas 112:1-4',
      arabic: '\u0642\u064F\u0644\u0652 \u0647\u064F\u0648\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0623\u064E\u062D\u064E\u062F\u064C \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0627\u0644\u0635\u0651\u064E\u0645\u064E\u062F\u064F \u0644\u064E\u0645\u0652 \u064A\u064E\u0644\u0650\u062F\u0652 \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064F\u0648\u0644\u064E\u062F\u0652 \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064E\u0643\u064F\u0646 \u0644\u0651\u064E\u0647\u064F \u0643\u064F\u0641\u064F\u0648\u064B\u0627 \u0623\u064E\u062D\u064E\u062F\u064C',
      translation: 'Dize: Ele e Allah, o Unico. Allah, o Absoluto. Nao gerou nem foi gerado. E nao ha nada comparavel a Ele.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Deuteronomio', reference: '6:4', text: 'Ouve, Israel, o Senhor nosso Deus e o unico Senhor.' },
      { source: 'Evangelhos', book: 'Marcos', reference: '12:29', text: 'Jesus respondeu: O mais importante e: Ouve, Israel, o Senhor nosso Deus e o unico Senhor.' },
    ],
    convergenceNote: 'Jesus confirma o Shema judaico como o mandamento mais importante. O Quran ecoa a mesma declaracao. Tres tradicoes, uma verdade central.',
  },
  {
    id: 'mono-02',
    category: 'monotheism',
    title: 'Sem Imagens de Deus',
    summary: 'A proibicao de representar Deus em imagens e compartilhada pelas tres tradicoes.',
    quranVerse: {
      reference: 'Surah Ash-Shura 42:11',
      arabic: '\u0644\u064E\u064A\u0652\u0633\u064E \u0643\u064E\u0645\u0650\u062B\u0652\u0644\u0650\u0647\u0650 \u0634\u064E\u064A\u0652\u0621\u064C \u0648\u064E\u0647\u064F\u0648\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u0650\u064A\u0639\u064F \u0627\u0644\u0652\u0628\u064E\u0635\u0650\u064A\u0631\u064F',
      translation: 'Nada e semelhante a Ele. E Ele e o Oniouvinte, o Onividente.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Exodo', reference: '20:4', text: 'Nao faras para ti imagem de escultura, nem alguma semelhanca do que ha em cima nos ceus, nem embaixo na terra.' },
      { source: 'Torah', book: 'Deuteronomio', reference: '4:15-16', text: 'Guardai-vos, pois nao vistes aparencia alguma no dia em que o Senhor vos falou. Para que nao vos corrompais e facais alguma imagem.' },
    ],
    convergenceNote: 'Tora e Quran proibem representacoes visuais de Deus. A transcendencia divina e protegida em ambas.',
  },
  {
    id: 'mono-03',
    category: 'monotheism',
    title: 'Deus e Misericordioso',
    summary: 'A misericordia como atributo central de Deus aparece em todas as escrituras.',
    quranVerse: {
      reference: 'Surah Al-Fatiha 1:1',
      arabic: '\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650',
      translation: 'Em nome de Deus, o Misericordioso, o Misericordiador.',
    },
    scriptureParallels: [
      { source: 'Salmos', book: 'Salmos', reference: '103:8', text: 'Misericordioso e compassivo e o Senhor; longanimo e grande em benignidade.' },
      { source: 'Torah', book: 'Exodo', reference: '34:6', text: 'O Senhor, o Senhor, Deus misericordioso e compassivo, tardio em irar-se e grande em beneficencia e verdade.' },
    ],
    convergenceNote: 'Todo capitulo do Quran comeca com "O Misericordioso". Salmos e Tora descrevem exatamente o mesmo atributo divino central.',
  },
  {
    id: 'mono-04',
    category: 'monotheism',
    title: 'Nenhum Igual a Deus',
    summary: 'A incomparabilidade divina e absoluta em ambas as escrituras.',
    quranVerse: {
      reference: 'Surah Al-Ikhlas 112:4',
      arabic: '\u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064E\u0643\u064F\u0646 \u0644\u0651\u064E\u0647\u064F \u0643\u064F\u0641\u064F\u0648\u064B\u0627 \u0623\u064E\u062D\u064E\u062F\u064C',
      translation: 'E nao ha nada comparavel a Ele.',
    },
    scriptureParallels: [
      { source: 'Profetas', book: 'Isaias', reference: '46:9', text: 'Eu sou Deus, e nao ha outro; eu sou Deus, e nao ha semelhante a mim.' },
      { source: 'Salmos', book: 'Salmos', reference: '86:8', text: 'Entre os deuses nao ha semelhante a ti, Senhor, nem ha obras como as tuas.' },
    ],
    convergenceNote: 'Isaias e o Quran fazem a mesma declaracao absoluta: nada se compara a Deus. Zero ambiguidade.',
  },
  {
    id: 'mono-05',
    category: 'monotheism',
    title: 'Deus e Onisciente',
    summary: 'O conhecimento infinito de Deus e afirmado identicamente nas escrituras.',
    quranVerse: {
      reference: 'Surah Al-Baqara 2:255 (Ayat al-Kursi)',
      arabic: '\u064A\u064E\u0639\u0652\u0644\u064E\u0645\u064F \u0645\u064E\u0627 \u0628\u064E\u064A\u0652\u0646\u064E \u0623\u064E\u064A\u0652\u062F\u0650\u064A\u0647\u0650\u0645\u0652 \u0648\u064E\u0645\u064E\u0627 \u062E\u064E\u0644\u0652\u0641\u064E\u0647\u064F\u0645\u0652',
      translation: 'Ele sabe o que esta diante deles e o que esta atras deles.',
    },
    scriptureParallels: [
      { source: 'Salmos', book: 'Salmos', reference: '139:1-4', text: 'Senhor, tu me sondaste e me conheces. Tu conheces o meu sentar e o meu levantar; de longe entendes o meu pensamento.' },
    ],
    convergenceNote: 'Salmos 139 e Ayat al-Kursi descrevem um Deus que conhece cada detalhe da existencia. O mesmo awe, a mesma reverencia.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROFETAS EM COMUM (5)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'prof-01',
    category: 'prophets',
    title: 'Abraao como Modelo',
    summary: 'O patriarca e reverenciado como modelo de fe em ambas as tradicoes.',
    quranVerse: {
      reference: 'Surah Al-Baqara 2:124',
      arabic: '\u0648\u064E\u0625\u0650\u0630\u0650 \u0627\u0628\u0652\u062A\u064E\u0644\u064E\u0649 \u0625\u0650\u0628\u0652\u0631\u064E\u0627\u0647\u0650\u064A\u0645\u064E \u0631\u064E\u0628\u0651\u064F\u0647\u064F \u0628\u0650\u0643\u064E\u0644\u0650\u0645\u064E\u0627\u062A\u064D \u0641\u064E\u0623\u064E\u062A\u064E\u0645\u0651\u064E\u0647\u064F\u0646\u0651\u064E \u0642\u064E\u0627\u0644\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u062C\u064E\u0627\u0639\u0650\u0644\u064F\u0643\u064E \u0644\u0650\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u0625\u0650\u0645\u064E\u0627\u0645\u064B\u0627',
      translation: 'E quando seu Senhor provou Abraao com certas palavras, e ele as cumpriu, disse: Farei de ti um lider para a humanidade.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '12:1-3', text: 'Sai da tua terra... Far-te-ei uma grande nacao, e te abencoarei, e engrandecerei o teu nome, e tu seras uma bencao.' },
    ],
    convergenceNote: 'Abraao e elevado a lider/modelo em ambas. A promessa divina de grandeza e a mesma — os caminhos divergem nos filhos (Isaque vs. Ismael).',
    nuanceNote: 'A tradicao islamica enfatiza Ismael; a judaico-crista enfatiza Isaque. Ambos sao abencoados.',
  },
  {
    id: 'prof-02',
    category: 'prophets',
    title: 'Moises e a Lei',
    summary: 'Moises recebe a lei divina diretamente — nas duas escrituras.',
    quranVerse: {
      reference: 'Surah Al-A\'raf 7:145',
      arabic: '\u0648\u064E\u0643\u064E\u062A\u064E\u0628\u0652\u0646\u064E\u0627 \u0644\u064E\u0647\u064F \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0644\u0652\u0648\u064E\u0627\u062D\u0650 \u0645\u0650\u0646 \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D',
      translation: 'E escrevemos para ele nas tabuas de tudo — orientacao e explicacao para todas as coisas.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Exodo', reference: '31:18', text: 'E deu a Moises, quando acabou de falar com ele no monte Sinai, as duas tabuas do Testemunho, tabuas de pedra, escritas pelo dedo de Deus.' },
    ],
    convergenceNote: 'Tabuas escritas por Deus. Lei revelada diretamente. Moises como receptor da lei divina e identico nas duas tradicoes.',
  },
  {
    id: 'prof-03',
    category: 'prophets',
    title: 'Davi e os Salmos',
    summary: 'Davi recebe os Zabur (Salmos) como revelacao divina.',
    quranVerse: {
      reference: 'Surah An-Nisa 4:163',
      arabic: '\u0648\u064E\u0622\u062A\u064E\u064A\u0652\u0646\u064E\u0627 \u062F\u064E\u0627\u0648\u064F\u0648\u062F\u064E \u0632\u064E\u0628\u064F\u0648\u0631\u064B\u0627',
      translation: 'E demos a Davi os Salmos.',
    },
    scriptureParallels: [
      { source: 'Salmos', book: 'Salmos', reference: '23:1', text: 'O Senhor e o meu pastor, nada me faltara.' },
    ],
    convergenceNote: 'O Quran confirma que os Salmos (Zabur) foram revelacao divina a Davi. Ambas as tradicoes reverenciam os Salmos como palavra inspirada.',
  },
  {
    id: 'prof-04',
    category: 'prophets',
    title: 'Salomao e a Sabedoria',
    summary: 'Salomao recebe sabedoria diretamente de Deus nas duas escrituras.',
    quranVerse: {
      reference: 'Surah An-Naml 27:15',
      arabic: '\u0648\u064E\u0644\u064E\u0642\u064E\u062F\u0652 \u0622\u062A\u064E\u064A\u0652\u0646\u064E\u0627 \u062F\u064E\u0627\u0648\u064F\u0648\u062F\u064E \u0648\u064E\u0633\u064F\u0644\u064E\u064A\u0652\u0645\u064E\u0627\u0646\u064E \u0639\u0650\u0644\u0652\u0645\u064B\u0627',
      translation: 'E certamente demos a Davi e a Salomao conhecimento.',
    },
    scriptureParallels: [
      { source: 'Torah', book: '1 Reis', reference: '3:12', text: 'Eis que te dei um coracao tao sabio e entendido, que antes de ti nao houve teu igual, e depois de ti nao se levantara teu igual.' },
    ],
    convergenceNote: 'Deus concede sabedoria incomparavel a Salomao. No Quran, ele fala com animais e comanda os ventos. Na Biblia, e o mais sabio dos reis.',
    nuanceNote: 'O Quran adiciona poderes sobrenaturais a Salomao (comunicacao com animais, comando de jinn) ausentes na Biblia.',
  },
  {
    id: 'prof-05',
    category: 'prophets',
    title: 'Jesus e os Milagres',
    summary: 'Ambas as escrituras confirmam que Jesus realizou milagres por permissao divina.',
    quranVerse: {
      reference: 'Surah Al-Ma\'ida 5:110',
      arabic: '\u0648\u064E\u0625\u0650\u0630\u0652 \u062A\u064E\u062E\u0652\u0644\u064F\u0642\u064F \u0645\u0650\u0646\u064E \u0627\u0644\u0637\u0651\u0650\u064A\u0646\u0650 \u0643\u064E\u0647\u064E\u064A\u0652\u0626\u064E\u0629\u0650 \u0627\u0644\u0637\u0651\u064E\u064A\u0652\u0631\u0650 \u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650\u064A \u0641\u064E\u062A\u064E\u0646\u0641\u064F\u062E\u064F \u0641\u0650\u064A\u0647\u064E\u0627 \u0641\u064E\u062A\u064E\u0643\u064F\u0648\u0646\u064F \u0637\u064E\u064A\u0652\u0631\u064B\u0627 \u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650\u064A \u0648\u064E\u062A\u064F\u0628\u0652\u0631\u0650\u0626\u064F \u0627\u0644\u0652\u0623\u064E\u0643\u0652\u0645\u064E\u0647\u064E \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0628\u0652\u0631\u064E\u0635\u064E \u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650\u064A',
      translation: 'Quando criavas do barro a forma de um passaro, por Minha permissao, e nele sopravas e se tornava um passaro vivo, por Minha permissao. E curavas o cego e o leproso, por Minha permissao.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '11:5', text: 'Os cegos veem, os coxos andam, os leprosos sao limpos, os surdos ouvem, os mortos sao ressuscitados.' },
    ],
    convergenceNote: 'Curar cegos, leprosos, ressuscitar mortos — os mesmos milagres nas duas escrituras. A diferenca: o Quran enfatiza "por permissao de Deus".',
    nuanceNote: 'O Quran adiciona o milagre do passaro de barro — ausente dos Evangelhos canonicos mas presente em evangelhos apocrifos (Infancia de Tome).',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JESUS NO QURAN E EVANGELHOS (5)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'jesus-01',
    category: 'jesus',
    title: 'Nascimento Virginal',
    summary: 'Ambas as tradicoes afirmam: Jesus nasceu de Maria virgem, sem pai humano.',
    quranVerse: {
      reference: 'Surah Maryam 19:20-21',
      arabic: '\u0642\u064E\u0627\u0644\u064E\u062A\u0652 \u0623\u064E\u0646\u0651\u064E\u0649 \u064A\u064E\u0643\u064F\u0648\u0646\u064F \u0644\u0650\u064A \u063A\u064F\u0644\u064E\u0627\u0645\u064C \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064E\u0645\u0652\u0633\u064E\u0633\u0652\u0646\u0650\u064A \u0628\u064E\u0634\u064E\u0631\u064C ... \u0642\u064E\u0627\u0644\u064E \u0643\u064E\u0630\u064E\u0644\u0650\u0643\u0650 \u0642\u064E\u0627\u0644\u064E \u0631\u064E\u0628\u0651\u064F\u0643\u0650 \u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u064A\u0651\u064E \u0647\u064E\u064A\u0651\u0650\u0646\u064C',
      translation: 'Ela disse: Como terei um filho se nenhum homem me tocou? Disse [o anjo]: Assim e. Teu Senhor disse: Isso e facil para Mim.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Lucas', reference: '1:34-35', text: 'Disse Maria ao anjo: Como sera isso, visto que nao conheco homem? O anjo respondeu: O Espirito Santo vira sobre ti.' },
    ],
    convergenceNote: 'A virgindade de Maria e confirmada em ambas. Lucas e Surah Maryam narram a mesma cena com a mesma pergunta de Maria.',
  },
  {
    id: 'jesus-02',
    category: 'jesus',
    title: 'Jesus Fala na Manjedoura',
    summary: 'O Quran narra um milagre ausente dos Evangelhos canonicos: o bebe Jesus fala.',
    quranVerse: {
      reference: 'Surah Maryam 19:29-33',
      arabic: '\u0641\u064E\u0623\u064E\u0634\u064E\u0627\u0631\u064E\u062A\u0652 \u0625\u0650\u0644\u064E\u064A\u0652\u0647\u0650 \u0642\u064E\u0627\u0644\u064F\u0648\u0627 \u0643\u064E\u064A\u0652\u0641\u064E \u0646\u064F\u0643\u064E\u0644\u0651\u0650\u0645\u064F \u0645\u064E\u0646 \u0643\u064E\u0627\u0646\u064E \u0641\u0650\u064A \u0627\u0644\u0652\u0645\u064E\u0647\u0652\u062F\u0650 \u0635\u064E\u0628\u0650\u064A\u0651\u064B\u0627 \u0642\u064E\u0627\u0644\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0639\u064E\u0628\u0652\u062F\u064F \u0627\u0644\u0644\u0651\u064E\u0647\u0650',
      translation: 'Ela apontou para ele. Disseram: Como falaremos com uma crianca no berco? Ele disse: Sou servo de Allah.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Lucas', reference: '2:7-12', text: 'E deu a luz o seu filho primogenito, e envolveu-o em panos, e deitou-o numa manjedoura.' },
    ],
    convergenceNote: 'Nos Evangelhos, Jesus e um recem-nascido silencioso na manjedoura. No Quran, ele fala e se declara servo de Deus — defendendo a honra de Maria.',
    nuanceNote: 'Este milagre e exclusivo do Quran e de evangelhos apocrifos. A primeira palavra de Jesus no Quran e "sou servo de Deus" — estabelecendo sua natureza humana desde o berco.',
  },
  {
    id: 'jesus-03',
    category: 'jesus',
    title: 'Maria Honrada',
    summary: 'Maria recebe honra especial em ambas as escrituras.',
    quranVerse: {
      reference: 'Surah Ali \'Imran 3:42',
      arabic: '\u064A\u064E\u0627 \u0645\u064E\u0631\u0652\u064A\u064E\u0645\u064F \u0625\u0650\u0646\u0651\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u0627\u0635\u0652\u0637\u064E\u0641\u064E\u0627\u0643\u0650 \u0648\u064E\u0637\u064E\u0647\u0651\u064E\u0631\u064E\u0643\u0650 \u0648\u064E\u0627\u0635\u0652\u0637\u064E\u0641\u064E\u0627\u0643\u0650 \u0639\u064E\u0644\u064E\u0649 \u0646\u0650\u0633\u064E\u0627\u0621\u0650 \u0627\u0644\u0652\u0639\u064E\u0627\u0644\u064E\u0645\u0650\u064A\u0646\u064E',
      translation: 'O Maria! Allah te escolheu e te purificou e te escolheu acima de todas as mulheres do mundo.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Lucas', reference: '1:28', text: 'Ave, agraciada, o Senhor e contigo; bendita es tu entre as mulheres.' },
    ],
    convergenceNote: 'Lucas: "bendita entre as mulheres". Quran: "escolhida acima de todas as mulheres do mundo". A mesma honra, as mesmas palavras.',
  },
  {
    id: 'jesus-04',
    category: 'jesus',
    title: 'Jesus como Messias',
    summary: 'O Quran confirma Jesus como Al-Masih — o Messias.',
    quranVerse: {
      reference: 'Surah Ali \'Imran 3:45',
      arabic: '\u0625\u0650\u0630\u0652 \u0642\u064E\u0627\u0644\u064E\u062A\u0650 \u0627\u0644\u0652\u0645\u064E\u0644\u064E\u0627\u0626\u0650\u0643\u064E\u0629\u064F \u064A\u064E\u0627 \u0645\u064E\u0631\u0652\u064A\u064E\u0645\u064F \u0625\u0650\u0646\u0651\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u064A\u064F\u0628\u064E\u0634\u0651\u0650\u0631\u064F\u0643\u0650 \u0628\u0650\u0643\u064E\u0644\u0650\u0645\u064E\u0629\u064D \u0645\u0651\u0650\u0646\u0652\u0647\u064F \u0627\u0633\u0652\u0645\u064F\u0647\u064F \u0627\u0644\u0652\u0645\u064E\u0633\u0650\u064A\u062D\u064F \u0639\u0650\u064A\u0633\u064E\u0649 \u0627\u0628\u0652\u0646\u064F \u0645\u064E\u0631\u0652\u064A\u064E\u0645\u064E',
      translation: 'Os anjos disseram: O Maria! Allah te da boas-novas de uma Palavra Sua: seu nome e o Messias, Jesus, filho de Maria.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '16:16', text: 'Simao Pedro respondeu: Tu es o Cristo, o Filho do Deus vivo.' },
    ],
    convergenceNote: 'Ambas as escrituras chamam Jesus de Messias/Cristo. O Quran vai alem: "Palavra de Deus" (Kalimatullah) — titulo unico.',
    nuanceNote: 'A divergencia: para o Cristianismo, "Messias" implica divindade. Para o Islam, e um titulo profetico de honra suprema, mas nao divindade.',
  },
  {
    id: 'jesus-05',
    category: 'jesus',
    title: 'Retorno de Jesus',
    summary: 'Ambas as tradicoes acreditam no retorno de Jesus no fim dos tempos.',
    quranVerse: {
      reference: 'Surah Az-Zukhruf 43:61',
      arabic: '\u0648\u064E\u0625\u0650\u0646\u0651\u064E\u0647\u064F \u0644\u064E\u0639\u0650\u0644\u0652\u0645\u064C \u0644\u0651\u0650\u0644\u0633\u0651\u064E\u0627\u0639\u064E\u0629\u0650',
      translation: 'E ele [Jesus] e, certamente, um sinal da Hora [do Juizo].',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '24:30', text: 'Entao aparecera no ceu o sinal do Filho do homem, e todas as tribos da terra se lamentarao, e verao o Filho do homem vindo sobre as nuvens do ceu.' },
    ],
    convergenceNote: 'Cristianismo e Islam concordam: Jesus voltara. No Islam, ele retorna como muculmano para derrotar o Dajjal (Anticristo). Nos Evangelhos, como juiz glorificado.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORALIDADE (4)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'moral-01',
    category: 'morality',
    title: 'Honrar os Pais',
    summary: 'O mandamento de honrar pai e mae e central em ambas.',
    quranVerse: {
      reference: 'Surah Al-Isra 17:23-24',
      arabic: '\u0648\u064E\u0642\u064E\u0636\u064E\u0649 \u0631\u064E\u0628\u0651\u064F\u0643\u064E \u0623\u064E\u0644\u0651\u064E\u0627 \u062A\u064E\u0639\u0652\u0628\u064F\u062F\u064F\u0648\u0627 \u0625\u0650\u0644\u0651\u064E\u0627 \u0625\u0650\u064A\u0651\u064E\u0627\u0647\u064F \u0648\u064E\u0628\u0650\u0627\u0644\u0652\u0648\u064E\u0627\u0644\u0650\u062F\u064E\u064A\u0652\u0646\u0650 \u0625\u0650\u062D\u0652\u0633\u064E\u0627\u0646\u064B\u0627',
      translation: 'Teu Senhor decretou que nao adoreis senao a Ele, e que sejais bondosos com os pais.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Exodo', reference: '20:12', text: 'Honra teu pai e tua mae, para que se prolonguem os teus dias na terra.' },
      { source: 'Evangelhos', book: 'Efesios', reference: '6:2', text: 'Honra teu pai e tua mae — que e o primeiro mandamento com promessa.' },
    ],
    convergenceNote: 'O Quran coloca honrar os pais IMEDIATAMENTE apos a adoracao exclusiva a Deus. Exodo e Efesios fazem o mesmo.',
  },
  {
    id: 'moral-02',
    category: 'morality',
    title: 'Nao Matar',
    summary: 'A santidade da vida humana e absoluta nas duas tradicoes.',
    quranVerse: {
      reference: 'Surah Al-Ma\'ida 5:32',
      arabic: '\u0645\u064E\u0646 \u0642\u064E\u062A\u064E\u0644\u064E \u0646\u064E\u0641\u0652\u0633\u064B\u0627 \u0628\u0650\u063A\u064E\u064A\u0652\u0631\u0650 \u0646\u064E\u0641\u0652\u0633\u064D \u0623\u064E\u0648\u0652 \u0641\u064E\u0633\u064E\u0627\u062F\u064D \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650 \u0641\u064E\u0643\u064E\u0623\u064E\u0646\u0651\u064E\u0645\u064E\u0627 \u0642\u064E\u062A\u064E\u0644\u064E \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u064E \u062C\u064E\u0645\u0650\u064A\u0639\u064B\u0627',
      translation: 'Quem matar uma pessoa — salvo por justica ou corrupcao na terra — e como se matasse toda a humanidade.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Exodo', reference: '20:13', text: 'Nao mataras.' },
      { source: 'Evangelhos', book: 'Mateus', reference: '5:21', text: 'Ouvistes que foi dito aos antigos: Nao mataras. Eu porem vos digo que qualquer que se encolerizar contra seu irmao estara sujeito a julgamento.' },
    ],
    convergenceNote: 'O Quran vai alem do "nao mataras": matar UM e como matar TODA a humanidade. Jesus vai alem: ate a raiva e julgada. Ambos elevam o padrao.',
  },
  {
    id: 'moral-03',
    category: 'morality',
    title: 'Caridade como Obrigacao',
    summary: 'Dar ao pobre nao e opcao — e obrigacao divina em ambas.',
    quranVerse: {
      reference: 'Surah Al-Baqara 2:177',
      arabic: '\u0648\u064E\u0622\u062A\u064E\u0649 \u0627\u0644\u0652\u0645\u064E\u0627\u0644\u064E \u0639\u064E\u0644\u064E\u0649 \u062D\u064F\u0628\u0651\u0650\u0647\u0650 \u0630\u064E\u0648\u0650\u064A \u0627\u0644\u0652\u0642\u064F\u0631\u0652\u0628\u064E\u0649 \u0648\u064E\u0627\u0644\u0652\u064A\u064E\u062A\u064E\u0627\u0645\u064E\u0649 \u0648\u064E\u0627\u0644\u0652\u0645\u064E\u0633\u064E\u0627\u0643\u0650\u064A\u0646\u064E',
      translation: 'E da da riqueza, por amor a Allah, aos parentes, aos orfaos e aos necessitados.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Deuteronomio', reference: '15:11', text: 'Nunca deixara de haver pobre na terra; portanto te ordeno: abriras a tua mao ao teu irmao, ao necessitado e ao pobre.' },
      { source: 'Evangelhos', book: 'Mateus', reference: '25:35-36', text: 'Tive fome e me destes de comer; tive sede e me destes de beber; era forasteiro e me hospedaste; estava nu e me vestiste.' },
    ],
    convergenceNote: 'Deuteronomio ordena. Jesus cobra no Julgamento. O Quran estrutura: Zakat e pilar obrigatorio — 2.5% da riqueza distribuida anualmente.',
  },
  {
    id: 'moral-04',
    category: 'morality',
    title: 'Justica Mesmo Contra Si Mesmo',
    summary: 'A justica e absoluta — mesmo que prejudique voce ou sua familia.',
    quranVerse: {
      reference: 'Surah An-Nisa 4:135',
      arabic: '\u0643\u064F\u0648\u0646\u064F\u0648\u0627 \u0642\u064E\u0648\u0651\u064E\u0627\u0645\u0650\u064A\u0646\u064E \u0628\u0650\u0627\u0644\u0652\u0642\u0650\u0633\u0652\u0637\u0650 \u0634\u064F\u0647\u064E\u062F\u064E\u0627\u0621\u064E \u0644\u0650\u0644\u0651\u064E\u0647\u0650 \u0648\u064E\u0644\u064E\u0648\u0652 \u0639\u064E\u0644\u064E\u0649 \u0623\u064E\u0646\u0641\u064F\u0633\u0650\u0643\u064F\u0645\u0652',
      translation: 'Sede firmes na justica, testemunhas de Deus, mesmo que seja contra vos mesmos.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Levitico', reference: '19:15', text: 'Nao fareis injustica no juizo: nao favorecereis o pobre, nem respeitareis o grande; com justica julgaras o teu proximo.' },
      { source: 'Profetas', book: 'Miqueias', reference: '6:8', text: 'Que e que o Senhor requer de ti? Que pratiques a justica, ames a misericordia e andes humildemente com teu Deus.' },
    ],
    convergenceNote: 'O Quran vai ao extremo: justica "mesmo contra vos mesmos". Levitico: "nem favoreceras o pobre nem o grande". Miqueias resume: justica + misericordia + humildade.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VIDA APOS A MORTE (3)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'after-01',
    category: 'afterlife',
    title: 'Ressurreicao dos Mortos',
    summary: 'Ambas as escrituras prometem a ressurreicao de todos os seres humanos.',
    quranVerse: {
      reference: 'Surah Al-Hajj 22:7',
      arabic: '\u0648\u064E\u0623\u064E\u0646\u0651\u064E \u0627\u0644\u0633\u0651\u064E\u0627\u0639\u064E\u0629\u064E \u0622\u062A\u0650\u064A\u064E\u0629\u064C \u0644\u0651\u064E\u0627 \u0631\u064E\u064A\u0652\u0628\u064E \u0641\u0650\u064A\u0647\u064E\u0627 \u0648\u064E\u0623\u064E\u0646\u0651\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u064A\u064E\u0628\u0652\u0639\u064E\u062B\u064F \u0645\u064E\u0646 \u0641\u0650\u064A \u0627\u0644\u0652\u0642\u064F\u0628\u064F\u0648\u0631\u0650',
      translation: 'E que a Hora vira, sem duvida, e que Allah ressuscitara aqueles que estao nas sepulturas.',
    },
    scriptureParallels: [
      { source: 'Profetas', book: 'Daniel', reference: '12:2', text: 'Muitos dos que dormem no po da terra ressuscitarao, uns para a vida eterna, e outros para vergonha e desprezo eterno.' },
      { source: 'Evangelhos', book: 'Joao', reference: '5:28-29', text: 'Vem a hora em que todos os que estao nos sepulcros ouvirao a sua voz e sairao.' },
    ],
    convergenceNote: 'Daniel, Joao e o Quran descrevem o mesmo evento: todos serao ressuscitados dos sepulcros para o julgamento.',
  },
  {
    id: 'after-02',
    category: 'afterlife',
    title: 'Julgamento Final',
    summary: 'Cada acao sera pesada e julgada — nas tres tradicoes.',
    quranVerse: {
      reference: 'Surah Az-Zalzala 99:7-8',
      arabic: '\u0641\u064E\u0645\u064E\u0646 \u064A\u064E\u0639\u0652\u0645\u064E\u0644\u0652 \u0645\u0650\u062B\u0652\u0642\u064E\u0627\u0644\u064E \u0630\u064E\u0631\u0651\u064E\u0629\u064D \u062E\u064E\u064A\u0652\u0631\u064B\u0627 \u064A\u064E\u0631\u064E\u0647\u064F \u0648\u064E\u0645\u064E\u0646 \u064A\u064E\u0639\u0652\u0645\u064E\u0644\u0652 \u0645\u0650\u062B\u0652\u0642\u064E\u0627\u0644\u064E \u0630\u064E\u0631\u0651\u064E\u0629\u064D \u0634\u064E\u0631\u0651\u064B\u0627 \u064A\u064E\u0631\u064E\u0647\u064F',
      translation: 'Quem fizer um atomo de bem, o vera. E quem fizer um atomo de mal, o vera.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '25:31-46', text: 'Quando vier o Filho do homem na sua gloria... E pora as ovelhas a sua direita, mas os bodes a esquerda.' },
      { source: 'Salmos', book: 'Eclesiastes', reference: '12:14', text: 'Deus trara a juizo toda obra, inclusive tudo o que esta encoberto, quer seja bom quer seja mau.' },
    ],
    convergenceNote: 'Eclesiastes, Mateus e o Quran: NADA escapa. Cada acao, ate do tamanho de um atomo, sera vista e pesada.',
  },
  {
    id: 'after-03',
    category: 'afterlife',
    title: 'Paraiso',
    summary: 'A promessa do Paraiso como recompensa final aparece em todas as escrituras.',
    quranVerse: {
      reference: 'Surah Ar-Rahman 55:46-48',
      arabic: '\u0648\u064E\u0644\u0650\u0645\u064E\u0646\u0652 \u062E\u064E\u0627\u0641\u064E \u0645\u064E\u0642\u064E\u0627\u0645\u064E \u0631\u064E\u0628\u0651\u0650\u0647\u0650 \u062C\u064E\u0646\u0651\u064E\u062A\u064E\u0627\u0646\u0650',
      translation: 'Para quem temeu a posicao de seu Senhor, havera dois jardins.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '2:8-9', text: 'E plantou o Senhor Deus um jardim no Eden... e ali fez brotar toda arvore agradavel a vista e boa para comida.' },
      { source: 'Evangelhos', book: 'Apocalipse', reference: '21:4', text: 'E Deus limpara de seus olhos toda lagrima; e nao havera mais morte, nem pranto, nem clamor, nem dor.' },
    ],
    convergenceNote: 'Genesis descreve o jardim original perdido. O Quran e Apocalipse descrevem o jardim prometido recuperado. Sem lagrimas, sem dor, sem morte.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CRIACAO (3)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'creation-01',
    category: 'creation',
    title: 'Criacao em 6 Periodos',
    summary: 'Ambas as escrituras descrevem a criacao em seis periodos.',
    quranVerse: {
      reference: 'Surah Al-A\'raf 7:54',
      arabic: '\u0625\u0650\u0646\u0651\u064E \u0631\u064E\u0628\u0651\u064E\u0643\u064F\u0645\u064F \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u062E\u064E\u0644\u064E\u0642\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u064E \u0641\u0650\u064A \u0633\u0650\u062A\u0651\u064E\u0629\u0650 \u0623\u064E\u064A\u0651\u064E\u0627\u0645\u064D',
      translation: 'Vosso Senhor e Allah, que criou os ceus e a terra em seis dias.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '1:1-31', text: 'No principio, criou Deus os ceus e a terra... E houve tarde e manha, o sexto dia.' },
    ],
    convergenceNote: 'Seis periodos de criacao em ambas. O Quran usa "ayyam" (dias/periodos) — muitos estudiosos interpretam como eras, nao dias literais de 24h.',
    nuanceNote: 'No Quran, Deus nao "descansa" no setimo dia (como em Genesis 2:2). O Quran afirma: "nenhuma fadiga Nos tocou" (50:38).',
  },
  {
    id: 'creation-02',
    category: 'creation',
    title: 'Adao do Barro',
    summary: 'O ser humano criado da terra — narrativa compartilhada.',
    quranVerse: {
      reference: 'Surah Al-Hijr 15:26',
      arabic: '\u0648\u064E\u0644\u064E\u0642\u064E\u062F\u0652 \u062E\u064E\u0644\u064E\u0642\u0652\u0646\u064E\u0627 \u0627\u0644\u0652\u0625\u0650\u0646\u0633\u064E\u0627\u0646\u064E \u0645\u0650\u0646 \u0635\u064E\u0644\u0652\u0635\u064E\u0627\u0644\u064D \u0645\u0651\u0650\u0646\u0652 \u062D\u064E\u0645\u064E\u0625\u064D \u0645\u0651\u064E\u0633\u0652\u0646\u064F\u0648\u0646\u064D',
      translation: 'E criamos o ser humano de barro seco, de lama moldavel.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '2:7', text: 'E formou o Senhor Deus o homem do po da terra, e soprou em seus narizes o folego da vida.' },
    ],
    convergenceNote: 'Barro, po da terra, lama moldavel — a mesma origem humilde. Ambas enfatizam que o ser humano e materia + sopro divino.',
  },
  {
    id: 'creation-03',
    category: 'creation',
    title: 'Eva do Mesmo Ser',
    summary: 'A parceira criada da mesma essencia/ser.',
    quranVerse: {
      reference: 'Surah An-Nisa 4:1',
      arabic: '\u062E\u064E\u0644\u064E\u0642\u064E\u0643\u064F\u0645 \u0645\u0651\u0650\u0646 \u0646\u0651\u064E\u0641\u0652\u0633\u064D \u0648\u064E\u0627\u062D\u0650\u062F\u064E\u0629\u064D \u0648\u064E\u062E\u064E\u0644\u064E\u0642\u064E \u0645\u0650\u0646\u0652\u0647\u064E\u0627 \u0632\u064E\u0648\u0652\u062C\u064E\u0647\u064E\u0627',
      translation: 'Criou-vos de uma so alma e dela criou sua companheira.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '2:21-23', text: 'E da costela que o Senhor Deus tomou do homem, formou uma mulher. Disse o homem: Esta e osso dos meus ossos e carne da minha carne.' },
    ],
    convergenceNote: 'Genesis: da costela. Quran: da mesma alma (nafs). Ambas: a parceira humana e da mesma essencia, nao inferior.',
    nuanceNote: 'O Quran nao menciona "costela" — diz "da mesma nafs (alma/ser)". Isso remove a interpretacao de subordinacao biologica da mulher.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ORACAO E ADORACAO (2)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'prayer-01',
    category: 'prayer',
    title: 'Prostracao em Oracao',
    summary: 'Cair com o rosto no chao diante de Deus — a postura que todas as tradicoes praticaram.',
    quranVerse: {
      reference: 'Surah Al-Hajj 22:77',
      arabic: '\u064A\u064E\u0627 \u0623\u064E\u064A\u0651\u064F\u0647\u064E\u0627 \u0627\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0622\u0645\u064E\u0646\u064F\u0648\u0627 \u0627\u0631\u0652\u0643\u064E\u0639\u064F\u0648\u0627 \u0648\u064E\u0627\u0633\u0652\u062C\u064F\u062F\u064F\u0648\u0627 \u0648\u064E\u0627\u0639\u0652\u0628\u064F\u062F\u064F\u0648\u0627 \u0631\u064E\u0628\u0651\u064E\u0643\u064F\u0645\u0652',
      translation: 'O crentes, inclinai-vos, prostrai-vos, e adorai vosso Senhor.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '26:39', text: 'E indo um pouco mais para diante, prostrou-se sobre o rosto, orando.' },
      { source: 'Salmos', book: 'Salmos', reference: '95:6', text: 'Vinde, adoremos e prostremo-nos; ajoelhemos diante do Senhor que nos criou.' },
    ],
    convergenceNote: 'Jesus orou prostrado — a mesma postura que 1.8 bilhao de muculmanos fazem 5 vezes ao dia. Salmos convida: "prostremo-nos". A postura de humildade maxima.',
  },
  {
    id: 'prayer-02',
    category: 'prayer',
    title: 'Jejum como Disciplina Espiritual',
    summary: 'O jejum e prescrito como pratica espiritual em ambas.',
    quranVerse: {
      reference: 'Surah Al-Baqara 2:183',
      arabic: '\u064A\u064E\u0627 \u0623\u064E\u064A\u0651\u064F\u0647\u064E\u0627 \u0627\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0622\u0645\u064E\u0646\u064F\u0648\u0627 \u0643\u064F\u062A\u0650\u0628\u064E \u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u064F \u0627\u0644\u0635\u0651\u0650\u064A\u064E\u0627\u0645\u064F \u0643\u064E\u0645\u064E\u0627 \u0643\u064F\u062A\u0650\u0628\u064E \u0639\u064E\u0644\u064E\u0649 \u0627\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0645\u0650\u0646 \u0642\u064E\u0628\u0652\u0644\u0650\u0643\u064F\u0645\u0652',
      translation: 'O crentes, o jejum vos foi prescrito assim como foi prescrito aqueles antes de vos.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Mateus', reference: '6:16-18', text: 'E quando jejuardes, nao vos mostreis contristados como os hipocritas. Mas tu, quando jejuares, unge a tua cabeca e lava o teu rosto.' },
      { source: 'Profetas', book: 'Joel', reference: '2:12', text: 'Convertei-vos a mim de todo o vosso coracao, com jejuns, com choro e com pranto.' },
    ],
    convergenceNote: 'O Quran e explicito: jejum foi prescrito "assim como aos que vieram antes de vos". Jesus jejuou 40 dias. Joel convoca ao jejum. A pratica cruza todas as tradicoes.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROFECIA DO PROFETA (3)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'proph-01',
    category: 'prophecy',
    title: 'Profeta como Moises',
    summary: 'Deuteronomio promete um profeta "como Moises" — o Islam identifica como Muhammad.',
    quranVerse: {
      reference: 'Surah Al-Muzzammil 73:15',
      arabic: '\u0625\u0650\u0646\u0651\u064E\u0627 \u0623\u064E\u0631\u0652\u0633\u064E\u0644\u0652\u0646\u064E\u0627 \u0625\u0650\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652 \u0631\u064E\u0633\u064F\u0648\u0644\u064B\u0627 \u0634\u064E\u0627\u0647\u0650\u062F\u064B\u0627 \u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652 \u0643\u064E\u0645\u064E\u0627 \u0623\u064E\u0631\u0652\u0633\u064E\u0644\u0652\u0646\u064E\u0627 \u0625\u0650\u0644\u064E\u0649 \u0641\u0650\u0631\u0652\u0639\u064E\u0648\u0652\u0646\u064E \u0631\u064E\u0633\u064F\u0648\u0644\u064B\u0627',
      translation: 'Enviamos-vos um mensageiro como testemunha sobre vos, assim como enviamos a Farao um mensageiro.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Deuteronomio', reference: '18:18', text: 'Suscitar-lhes-ei um profeta do meio de seus irmaos, semelhante a ti; e porei as minhas palavras na sua boca, e ele lhes falara tudo o que eu lhe ordenar.' },
    ],
    convergenceNote: '"Do meio de seus irmaos" — a tradicao islamica interpreta como descendentes de Ismael (irmao de Isaque). "Porei minhas palavras na sua boca" — como a revelacao do Quran ao profeta iletrado.',
    nuanceNote: 'Cristaos interpretam este versiculo como referencia a Jesus. Muculmanos argumentam que Jesus era judeu (da mesma linhagem), nao "do meio dos irmaos" (linhagem diferente). Ambas as leituras tem defensores serios.',
  },
  {
    id: 'proph-02',
    category: 'prophecy',
    title: 'O Consolador / Paracleto',
    summary: 'Jesus promete enviar alguem depois dele — cristaos dizem Espirito Santo, muculmanos dizem Muhammad.',
    quranVerse: {
      reference: 'Surah As-Saff 61:6',
      arabic: '\u0648\u064E\u0645\u064F\u0628\u064E\u0634\u0651\u0650\u0631\u064B\u0627 \u0628\u0650\u0631\u064E\u0633\u064F\u0648\u0644\u064D \u064A\u064E\u0623\u0652\u062A\u0650\u064A \u0645\u0650\u0646 \u0628\u064E\u0639\u0652\u062F\u0650\u064A \u0627\u0633\u0652\u0645\u064F\u0647\u064F \u0623\u064E\u062D\u0652\u0645\u064E\u062F\u064F',
      translation: 'E dando boas-novas de um mensageiro que vira depois de mim, cujo nome e Ahmad.',
    },
    scriptureParallels: [
      { source: 'Evangelhos', book: 'Joao', reference: '14:16', text: 'E eu rogarei ao Pai, e ele vos dara outro Consolador, para que fique convosco para sempre.' },
      { source: 'Evangelhos', book: 'Joao', reference: '16:7', text: 'Se eu nao for, o Consolador nao vira a vos; mas, se eu for, enviar-vo-lo-ei.' },
    ],
    convergenceNote: 'O Quran diz que Jesus anunciou "Ahmad" (outro nome de Muhammad). Joao registra a promessa do "Paracleto". Paraclytos (consolador) vs. Periclytos (louvado = Ahmad). Debate linguistico milenar.',
    nuanceNote: 'Esta e uma das interpretacoes mais debatidas entre cristaos e muculmanos. Ambas as leituras sao linguisticamente possiveis. O Kalam apresenta ambas com honestidade.',
  },
  {
    id: 'proph-03',
    category: 'prophecy',
    title: 'De Ismael Vira Uma Grande Nacao',
    summary: 'Deus promete abencoar a descendencia de Ismael — pai dos arabes.',
    quranVerse: {
      reference: 'Surah As-Saffat 37:100-111',
      arabic: '\u0641\u064E\u0644\u064E\u0645\u0651\u064E\u0627 \u0628\u064E\u0644\u064E\u063A\u064E \u0645\u064E\u0639\u064E\u0647\u064F \u0627\u0644\u0633\u0651\u064E\u0639\u0652\u064A\u064E \u0642\u064E\u0627\u0644\u064E \u064A\u064E\u0627 \u0628\u064F\u0646\u064E\u064A\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0631\u064E\u0649 \u0641\u0650\u064A \u0627\u0644\u0652\u0645\u064E\u0646\u064E\u0627\u0645\u0650 \u0623\u064E\u0646\u0651\u0650\u064A \u0623\u064E\u0630\u0652\u0628\u064E\u062D\u064F\u0643\u064E',
      translation: 'Quando [o filho] alcancou a idade de caminhar com ele, disse: O meu filho, vejo em sonho que te sacrifico.',
    },
    scriptureParallels: [
      { source: 'Torah', book: 'Genesis', reference: '21:13', text: 'Mas tambem do filho desta serva farei uma nacao, porquanto e tua descendencia.' },
      { source: 'Torah', book: 'Genesis', reference: '17:20', text: 'Quanto a Ismael, tambem te ouvi; abencoa-lo-ei, fa-lo-ei frutificar e multiplica-lo-ei grandissimamente.' },
    ],
    convergenceNote: 'Genesis registra a promessa divina a Ismael: "farei dele uma grande nacao", "abencoa-lo-ei grandissimamente". O Islam diz: essa nacao e a ummah islamica, e o mensageiro prometido e Muhammad.',
  },
]
