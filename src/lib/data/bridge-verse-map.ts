// bridge-verse-map.ts — Verse-to-verse mappings between Bible and Quran
// Full data will be populated with 100 mappings

export interface VerseMapping {
  id: string
  bibleVerse: { reference: string; text: string; book: string; chapter: number; verse: number }
  relatedQuranVerses: { reference: string; arabic: string; translation: string; relationship: 'confirms' | 'expands' | 'reframes' | 'responds' }[]
  scholarContext: string
  bridgeInsight: string
}

export const verseMappings: VerseMapping[] = [
  {
    id: 'vm-001',
    bibleVerse: { reference: 'Genesis 1:1', text: 'No principio, Deus criou os ceus e a terra.', book: 'Genesis', chapter: 1, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anbiya 21:30', arabic: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا', translation: 'Os que descreram nao viram que os ceus e a terra estavam juntos e Nos os separamos?', relationship: 'confirms' }
    ],
    scholarContext: 'Ambos os textos abrem com a criacao como ato divino intencional.',
    bridgeInsight: 'A primeira frase da Biblia e a visao do Alcorao concordam: tudo comecou com Deus.'
  },
  {
    id: 'vm-002',
    bibleVerse: { reference: 'Deuteronomio 6:4', text: 'Ouve, o Israel: o Senhor, nosso Deus, e o unico Senhor.', book: 'Deuteronomio', chapter: 6, verse: 4 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Ikhlas 112:1-4', arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', translation: 'Dize: Ele e Allah, o Unico. Allah, o Absoluto. Nao gerou e nao foi gerado. E nao ha ninguem igual a Ele.', relationship: 'confirms' }
    ],
    scholarContext: 'O Shema (Deut 6:4) e a Surah Al-Ikhlas sao os credos monotestas centrais de cada escritura.',
    bridgeInsight: 'O mandamento mais importante de Jesus (Marcos 12:29) cita o Shema — a mesma declaracao que o Alcorao ecoa.'
  },
  {
    id: 'vm-003',
    bibleVerse: { reference: 'Lucas 1:34-35', text: 'Entao Maria perguntou ao anjo: Como se fara isso, visto que nao conheco homem algum? Respondeu-lhe o anjo: Descera sobre ti o Espirito Santo, e o poder do Altissimo te cobrira com a sua sombra.', book: 'Lucas', chapter: 1, verse: 34 },
    relatedQuranVerses: [
      { reference: 'Surah Maryam 19:20-21', arabic: 'قَالَتْ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَلَمْ يَمْسَسْنِي بَشَرٌ وَلَمْ أَكُ بَغِيًّا', translation: 'Ela disse: Como terei um filho, se nenhum homem me tocou e nao sou indecente?', relationship: 'confirms' }
    ],
    scholarContext: 'O nascimento virginal de Jesus e confirmado em ambas as escrituras com detalhes notavelmente paralelos.',
    bridgeInsight: 'Maria faz a mesma pergunta em ambos os textos — e recebe a mesma resposta: isso e facil para Deus.'
  },
  {
    id: 'vm-004',
    bibleVerse: { reference: 'Mateus 26:39', text: 'Indo um pouco mais adiante, prostrou-se com o rosto em terra e orou: Meu Pai, se e possivel, afasta de mim este calice; todavia, nao seja como eu quero, mas sim como Tu queres.', book: 'Mateus', chapter: 26, verse: 39 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:238', arabic: 'حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ', translation: 'Observem as oracoes e a oracao do meio, e permanecam diante de Allah em devocao.', relationship: 'expands' }
    ],
    scholarContext: 'A prostracao de Jesus (rosto em terra) e identica a postura da oracao islamica (sujud).',
    bridgeInsight: 'Jesus orou prostrado com o rosto no chao — exatamente como muculmanos oram cinco vezes ao dia.'
  },
  {
    id: 'vm-005',
    bibleVerse: { reference: 'Marcos 12:29', text: 'Jesus respondeu: O mais importante e este: Ouve, o Israel, o Senhor nosso Deus e o unico Senhor.', book: 'Marcos', chapter: 12, verse: 29 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:163', arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ', translation: 'Vosso Deus e um Deus unico. Nao ha divindade senao Ele, o Misericordioso, o Misericordiador.', relationship: 'confirms' }
    ],
    scholarContext: 'Jesus cita o Shema como o maior mandamento — o Alcorao ecoa a mesma verdade.',
    bridgeInsight: 'Quando perguntado qual e o mandamento mais importante, Jesus responde com uma declaracao que todo muculmano reconhece.'
  },
  {
    id: 'vm-006',
    bibleVerse: { reference: 'Genesis 22:1-2', text: 'Depois dessas coisas, Deus pos Abraao a prova e lhe disse: Abraao! Ele respondeu: Eis-me aqui. Entao Deus lhe disse: Tome seu filho, seu unico filho, a quem voce ama, e va a terra de Moria. Ofereca-o ali como holocausto.', book: 'Genesis', chapter: 22, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah As-Saffat 37:102', arabic: 'فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ', translation: 'E quando atingiu a idade de trabalhar com ele, disse: O meu filho, vejo em sonho que te estou sacrificando. Ve o que achas.', relationship: 'reframes' }
    ],
    scholarContext: 'A historia do sacrificio e compartilhada, mas o filho e diferente: Isaque na Biblia, Ismail no Alcorao.',
    bridgeInsight: 'O mesmo teste de fe, a mesma obediencia — mas com um detalhe que separa as tradicoes: qual filho foi oferecido.'
  },
  {
    id: 'vm-007',
    bibleVerse: { reference: 'Mateus 5:44', text: 'Eu, porem, digo a voces: Amem os seus inimigos e orem por aqueles que os perseguem.', book: 'Mateus', chapter: 5, verse: 44 },
    relatedQuranVerses: [
      { reference: 'Surah Fussilat 41:34', arabic: 'وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ', translation: 'Nao se igualam a boa acao e a ma acao. Repele com o que e melhor, e eis que aquele entre ti e quem havia inimizade se tornara como um amigo intimo.', relationship: 'expands' }
    ],
    scholarContext: 'Ambas as escrituras ensinam a responder ao mal com o bem.',
    bridgeInsight: 'Jesus diz: ame seu inimigo. O Alcorao diz: responda ao mal com bondade e seu inimigo se tornara amigo.'
  },
  {
    id: 'vm-008',
    bibleVerse: { reference: 'Mateus 4:1-2', text: 'Entao Jesus foi levado pelo Espirito ao deserto, para ser tentado pelo diabo. Depois de jejuar quarenta dias e quarenta noites, teve fome.', book: 'Mateus', chapter: 4, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:183', arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ', translation: 'O crentes! O jejum foi prescrito para voces, como foi prescrito para aqueles que vieram antes de voces.', relationship: 'expands' }
    ],
    scholarContext: 'O jejum aparece em ambas as escrituras como disciplina espiritual essencial.',
    bridgeInsight: 'Jesus jejuou 40 dias. O Alcorao diz que o jejum foi prescrito para todos os crentes — inclusive os que vieram antes.'
  },
  {
    id: 'vm-009',
    bibleVerse: { reference: 'Mateus 6:1-4', text: 'Guardai-vos de praticar a vossa justica diante dos homens, para serdes vistos por eles. Quando, pois, deres esmola, nao toques trombeta diante de ti.', book: 'Mateus', chapter: 6, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:271', arabic: 'إِن تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ وَإِن تُخْفُوهَا وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَّكُمْ', translation: 'Se revelardes as esmolas, e bom. Mas se as esconderdes e as derdes aos pobres, e melhor para vos.', relationship: 'confirms' }
    ],
    scholarContext: 'Ambas as escrituras valorizam a caridade discreta sobre a ostentacao.',
    bridgeInsight: 'Jesus e o Alcorao concordam: a melhor caridade e a que ninguem ve.'
  },
  {
    id: 'vm-010',
    bibleVerse: { reference: 'Salmos 23:1', text: 'O Senhor e o meu pastor; nada me faltara.', book: 'Salmos', chapter: 23, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Fatihah 1:1-4', arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ', translation: 'Em nome de Allah, o Misericordioso, o Misericordiador. Louvor a Allah, Senhor dos mundos. O Misericordioso, o Misericordiador. Dono do Dia do Juizo.', relationship: 'expands' }
    ],
    scholarContext: 'O Salmo 23 e a Surah Al-Fatihah sao as oracoes mais recitadas de cada tradicao.',
    bridgeInsight: 'Davi abre com confianca no cuidado de Deus. A Al-Fatihah abre com louvor a misericordia de Deus. Ambos comecam pelo mesmo lugar: Deus supre.'
  },
  {
    id: 'vm-011',
    bibleVerse: { reference: 'Joao 14:6', text: 'Disse-lhe Jesus: Eu sou o caminho, a verdade e a vida. Ninguem vem ao Pai senao por mim.', book: 'Joao', chapter: 14, verse: 6 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:51', arabic: 'إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ', translation: 'Allah e meu Senhor e vosso Senhor, adorai-O. Este e o caminho reto.', relationship: 'reframes' }
    ],
    scholarContext: 'Este e um dos pontos de maior divergencia teologica entre as duas tradicoes.',
    bridgeInsight: 'Na Biblia, Jesus diz ser o caminho. No Alcorao, Jesus aponta para o caminho: adorar Allah. A questao central: Jesus e o destino ou o guia?'
  },
  {
    id: 'vm-012',
    bibleVerse: { reference: 'Apocalipse 20:12', text: 'Vi os mortos, grandes e pequenos, em pe diante do trono. Livros foram abertos. Outro livro foi aberto, que e o Livro da Vida. Os mortos foram julgados de acordo com o que tinham feito, segundo o que estava registrado nos livros.', book: 'Apocalipse', chapter: 20, verse: 12 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Zalzalah 99:7-8', arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ', translation: 'Quem fizer o peso de um atomo de bem, o vera. E quem fizer o peso de um atomo de mal, o vera.', relationship: 'confirms' }
    ],
    scholarContext: 'O juizo final com registro de acoes aparece em ambas as escrituras.',
    bridgeInsight: 'Apocalipse fala de livros abertos. O Alcorao diz que ate o peso de um atomo sera contado. Nada escapa.'
  },
  {
    id: 'vm-013',
    bibleVerse: { reference: 'Mateus 7:12', text: 'Portanto, tudo o que voces querem que os outros facam a voces, facam tambem a eles; pois esta e a Lei e os Profetas.', book: 'Mateus', chapter: 7, verse: 12 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nisa 4:36', arabic: 'وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا', translation: 'Adorai a Allah e nao Lhe associeis nada. Tratai com bondade os pais, os parentes, os orfaos, os pobres, o vizinho proximo e o vizinho distante, o companheiro ao vosso lado, o viajante e aqueles que estao sob vossa posse.', relationship: 'expands' }
    ],
    scholarContext: 'A "regra de ouro" de Jesus encontra eco expandido na lista de deveres sociais do Alcorao.',
    bridgeInsight: 'Jesus resume a Lei em uma frase. O Alcorao desdobra em categorias especificas de cuidado.'
  },
  {
    id: 'vm-014',
    bibleVerse: { reference: 'Jonas 2:1-2', text: 'Do ventre do grande peixe, Jonas orou ao Senhor seu Deus. E disse: Na minha angustia clamei ao Senhor, e Ele me respondeu.', book: 'Jonas', chapter: 2, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anbiya 21:87', arabic: 'فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', translation: 'E ele clamou nas trevas: Nao ha divindade senao Tu! Glorificado sejas! Fui dos injustos.', relationship: 'confirms' }
    ],
    scholarContext: 'A historia de Jonas dentro do peixe e preservada em ambas as escrituras com notavel semelhanca.',
    bridgeInsight: 'Jonas ora no fundo do mar em ambos os textos. No Alcorao, sua oracao se torna formula universal: "La ilaha illa anta, subhanaka."'
  },
  {
    id: 'vm-015',
    bibleVerse: { reference: 'Isaias 7:14', text: 'Portanto o Senhor mesmo vos dara um sinal: eis que a virgem concebera e dara a luz um filho e lhe chamara Emanuel.', book: 'Isaias', chapter: 7, verse: 14 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:45', arabic: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ', translation: 'Quando os anjos disseram: O Maria, Allah te da a boa-nova de uma Palavra vinda Dele, cujo nome sera o Messias, Jesus, filho de Maria.', relationship: 'confirms' }
    ],
    scholarContext: 'Isaias profetiza o nascimento virginal. O Alcorao confirma Jesus como Messias nascido de Maria.',
    bridgeInsight: 'Isaias anuncia o sinal. O Alcorao confirma o cumprimento: Jesus e o Messias, uma Palavra de Deus.'
  },
  {
    id: 'vm-016',
    bibleVerse: { reference: 'Proverbios 1:7', text: 'O temor do Senhor e o principio do conhecimento, mas os loucos desprezam a sabedoria e a disciplina.', book: 'Proverbios', chapter: 1, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Alaq 96:1-5', arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', translation: 'Le! Em nome do teu Senhor que criou. Criou o ser humano de um coagulo. Le! E teu Senhor e o mais Generoso. Aquele que ensinou pela pena. Ensinou ao ser humano o que ele nao sabia.', relationship: 'expands' }
    ],
    scholarContext: 'Ambas as escrituras vinculam conhecimento verdadeiro ao reconhecimento de Deus.',
    bridgeInsight: 'Proverbios diz: temer a Deus e o inicio do saber. As primeiras palavras do Alcorao sao: Le! O conhecimento e sagrado em ambas.'
  },
  {
    id: 'vm-017',
    bibleVerse: { reference: 'Salmos 51:10-12', text: 'Cria em mim, o Deus, um coracao puro, e renova em mim um espirito inabalavel. Nao me lances fora da Tua presenca, e nao retires de mim o Teu Santo Espirito. Restitui-me a alegria da Tua salvacao.', book: 'Salmos', chapter: 51, verse: 10 },
    relatedQuranVerses: [
      { reference: 'Surah Az-Zumar 39:53', arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', translation: 'Dize: O Meus servos que transgredistes contra vos mesmos, nao desespereis da misericordia de Allah! Allah perdoa todos os pecados.', relationship: 'confirms' }
    ],
    scholarContext: 'O arrependimento de Davi nos Salmos ecoa o convite universal ao perdao no Alcorao.',
    bridgeInsight: 'Davi clama por um coracao puro. O Alcorao responde: nao desespere — Deus perdoa todos os pecados.'
  },
  {
    id: 'vm-018',
    bibleVerse: { reference: 'Miqueias 6:8', text: 'Ele te declarou, o homem, o que e bom e o que o Senhor pede de ti: que pratiques a justica, ames a misericordia e andes humildemente com o teu Deus.', book: 'Miqueias', chapter: 6, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nahl 16:90', arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ', translation: 'Allah ordena a justica, a excelencia e a generosidade com os parentes, e proibe a indecencia, o reprovavel e a opressao.', relationship: 'confirms' }
    ],
    scholarContext: 'Ambas as escrituras resumem a etica em poucas palavras: justica, bondade, humildade.',
    bridgeInsight: 'Miqueias resume: justica, misericordia, humildade. O Alcorao resume: justica, excelencia, generosidade. Quase identicos.'
  },
  {
    id: 'vm-019',
    bibleVerse: { reference: 'Joao 3:16', text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigenito, para que todo aquele que nele cre nao pereca, mas tenha a vida eterna.', book: 'Joao', chapter: 3, verse: 16 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anbiya 21:107', arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ', translation: 'E nao te enviamos senao como misericordia para todos os mundos.', relationship: 'reframes' }
    ],
    scholarContext: 'Joao 3:16 e o versiculo mais citado da Biblia. O Alcorao descreve Muhammad como misericordia universal.',
    bridgeInsight: 'A Biblia diz: Deus amou o mundo e enviou Seu Filho. O Alcorao diz: Deus enviou Seu Mensageiro como misericordia para todos. Amor divino expresso de formas diferentes.'
  },
  {
    id: 'vm-020',
    bibleVerse: { reference: 'Exodo 20:3-5', text: 'Nao teras outros deuses diante de mim. Nao faras para ti imagem de escultura, nem semelhanca alguma do que ha em cima nos ceus, nem embaixo na terra, nem nas aguas debaixo da terra. Nao as adoraras nem lhes prestaras culto.', book: 'Exodo', chapter: 20, verse: 3 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anbiya 21:25', arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ', translation: 'Nao enviamos antes de ti nenhum mensageiro sem lhe revelar: Nao ha divindade senao Eu, adorai-Me.', relationship: 'confirms' }
    ],
    scholarContext: 'O primeiro mandamento e o principio mais fundamental compartilhado entre as duas escrituras.',
    bridgeInsight: 'O primeiro mandamento de Moises e o nucleo de cada mensageiro no Alcorao: so Deus merece adoracao.'
  }
]
