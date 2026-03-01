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
  },
  {
    id: 'vm-021',
    bibleVerse: { reference: 'Genesis 2:7', text: 'Entao o Senhor Deus formou o homem do po da terra e soprou em suas narinas o folego de vida, e o homem se tornou um ser vivente.', book: 'Genesis', chapter: 2, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hijr 15:28-29', arabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ', translation: 'E quando teu Senhor disse aos anjos: Criarei um ser humano de barro moldado. E quando Eu o tiver formado e soprado nele do Meu espirito, prostrai-vos diante dele.', relationship: 'confirms' }
    ],
    scholarContext: 'Ambas as escrituras descrevem a criacao de Adao a partir da terra com o sopro divino como elemento vivificante.',
    bridgeInsight: 'Deus forma Adao do barro e sopra vida nele — a mesma narrativa em Genesis e no Alcorao.'
  },
  {
    id: 'vm-022',
    bibleVerse: { reference: 'Genesis 3:7', text: 'Entao os olhos dos dois se abriram, e perceberam que estavam nus; coseram folhas de figueira e fizeram coberturas para si.', book: 'Genesis', chapter: 3, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Araf 7:22', arabic: 'فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ', translation: 'E quando provaram da arvore, suas vergonhas se revelaram e comecaram a cobrir-se com folhas do Paraiso.', relationship: 'reframes' }
    ],
    scholarContext: 'A queda de Adao e Eva e narrada em ambas as escrituras com o detalhe das folhas para cobrir a nudez.',
    bridgeInsight: 'O momento da queda e identico: provaram, viram a nudez, cobriram-se com folhas. A vergonha e universal.'
  },
  {
    id: 'vm-023',
    bibleVerse: { reference: 'Genesis 4:1-8', text: 'Caim disse a seu irmao Abel: Vamos ao campo. E, estando eles no campo, Caim se levantou contra Abel, seu irmao, e o matou.', book: 'Genesis', chapter: 4, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Maidah 5:27-28', arabic: 'وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ', translation: 'E recita-lhes a historia dos dois filhos de Adao com verdade: quando ambos ofereceram uma oferenda, foi aceita de um e nao do outro.', relationship: 'expands' }
    ],
    scholarContext: 'A historia de Caim e Abel aparece em ambas as escrituras, mas o Alcorao adiciona o dialogo etico de Abel.',
    bridgeInsight: 'O primeiro assassinato da humanidade e contado em ambos os textos — o Alcorao expande com a resposta pacifista de Abel.'
  },
  {
    id: 'vm-024',
    bibleVerse: { reference: 'Genesis 6:13-14', text: 'Entao Deus disse a Noe: Decidi dar fim a todos os seres humanos, pois por causa deles a terra encheu-se de violencia. Faca para voce uma arca de madeira.', book: 'Genesis', chapter: 6, verse: 13 },
    relatedQuranVerses: [
      { reference: 'Surah Hud 11:37', arabic: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا إِنَّهُم مُّغْرَقُونَ', translation: 'Constroi a arca sob Nossos olhos e Nossa revelacao, e nao Me fales a respeito dos injustos, pois eles serao afogados.', relationship: 'confirms' }
    ],
    scholarContext: 'A ordem divina para Noe construir a arca aparece em ambas as escrituras como resposta a corrupcao humana.',
    bridgeInsight: 'Deus ordena a Noe: construa a arca. O mesmo comando, a mesma urgencia, em Genesis e no Alcorao.'
  },
  {
    id: 'vm-025',
    bibleVerse: { reference: 'Genesis 12:1-3', text: 'O Senhor disse a Abrao: Saia da sua terra, do meio dos seus parentes e da casa de seu pai, e va para a terra que eu lhe mostrarei. Farei de voce um grande povo, e o abencoarei.', book: 'Genesis', chapter: 12, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:124', arabic: 'وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ فَأَتَمَّهُنَّ قَالَ إِنِّي جَاعِلُكَ لِلنَّاسِ إِمَامًا', translation: 'E quando o Senhor de Abraao o testou com certas ordens e ele as cumpriu, Deus disse: Farei de ti um lider para a humanidade.', relationship: 'expands' }
    ],
    scholarContext: 'A alianca de Deus com Abraao e central em ambas as escrituras, mas o Alcorao enfatiza o teste como condicao.',
    bridgeInsight: 'Deus promete grandeza a Abraao — na Biblia como bencao, no Alcorao como resultado de ter passado nos testes.'
  },
  {
    id: 'vm-026',
    bibleVerse: { reference: 'Exodo 3:14', text: 'Disse Deus a Moises: EU SOU O QUE SOU. Disse mais: Assim diras aos filhos de Israel: EU SOU me enviou a voces.', book: 'Exodo', chapter: 3, verse: 14 },
    relatedQuranVerses: [
      { reference: 'Surah Ta-Ha 20:14', arabic: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي', translation: 'Em verdade, Eu sou Allah. Nao ha divindade senao Eu. Adora-Me e estabelece a oracao para a Minha lembranca.', relationship: 'confirms' }
    ],
    scholarContext: 'A auto-revelacao de Deus a Moises na sarca ardente tem paralelo direto no Alcorao, Surah Ta-Ha.',
    bridgeInsight: 'Deus se revela a Moises com autoridade absoluta: EU SOU na Biblia, Eu sou Allah no Alcorao. O mesmo momento, o mesmo poder.'
  },
  {
    id: 'vm-027',
    bibleVerse: { reference: 'Exodo 14:21-22', text: 'Moises estendeu a mao sobre o mar, e o Senhor fez o mar recuar com um forte vento oriental. O mar se dividiu e os israelitas passaram pelo meio do mar em terra seca.', book: 'Exodo', chapter: 14, verse: 21 },
    relatedQuranVerses: [
      { reference: 'Surah Ash-Shuara 26:63', arabic: 'فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِب بِّعَصَاكَ الْبَحْرَ فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ', translation: 'E revelamos a Moises: Golpeia o mar com teu bastao. E ele se partiu, e cada parte era como uma grande montanha.', relationship: 'confirms' }
    ],
    scholarContext: 'A abertura do Mar Vermelho e um dos milagres mais detalhados em ambas as escrituras.',
    bridgeInsight: 'O mar se abre para Moises em ambos os textos — Deus salva Seu povo da opressao de Farao.'
  },
  {
    id: 'vm-028',
    bibleVerse: { reference: 'Exodo 20:12', text: 'Honra teu pai e tua mae, para que se prolonguem os teus dias na terra que o Senhor teu Deus te da.', book: 'Exodo', chapter: 20, verse: 12 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Isra 17:23-24', arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا', translation: 'Teu Senhor decretou que nao adoreis senao a Ele e que trateis os pais com bondade. Se um deles ou ambos atingirem a velhice junto a ti, nao lhes digas "uf" e nao os trates com aspereza.', relationship: 'expands' }
    ],
    scholarContext: 'Honrar os pais e mandamento em ambas as escrituras. O Alcorao detalha ate a proibicao de um suspiro de impaciencia.',
    bridgeInsight: 'Moises diz: honra teu pai e tua mae. O Alcorao vai alem: nem um suspiro de irritacao contra eles.'
  },
  {
    id: 'vm-029',
    bibleVerse: { reference: 'Levitico 19:18', text: 'Nao te vingaras nem guardaras ira contra os filhos do teu povo; mas amaras o teu proximo como a ti mesmo. Eu sou o Senhor.', book: 'Levitico', chapter: 19, verse: 18 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hujurat 49:10', arabic: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ', translation: 'Os crentes sao irmaos. Reconciliai vossos irmaos e temei a Allah, para que alcanceis misericordia.', relationship: 'confirms' }
    ],
    scholarContext: 'O amor ao proximo em Levitico e a fraternidade dos crentes no Alcorao expressam o mesmo principio etico.',
    bridgeInsight: 'Ama teu proximo como a ti mesmo — a Tora ordena. Os crentes sao irmaos — o Alcorao confirma.'
  },
  {
    id: 'vm-030',
    bibleVerse: { reference: 'Salmos 103:8', text: 'O Senhor e misericordioso e compassivo, lento para a ira e cheio de amor leal.', book: 'Salmos', chapter: 103, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Araf 7:156', arabic: 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ', translation: 'E Minha misericordia abrange todas as coisas.', relationship: 'expands' }
    ],
    scholarContext: 'A misericordia como atributo central de Deus e tema recorrente em Salmos e no Alcorao.',
    bridgeInsight: 'Davi canta: Deus e misericordioso. O Alcorao declara: Sua misericordia abrange TUDO.'
  },
  {
    id: 'vm-031',
    bibleVerse: { reference: 'Salmos 19:1', text: 'Os ceus declaram a gloria de Deus; o firmamento proclama a obra das Suas maos.', book: 'Salmos', chapter: 19, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Mulk 67:3-4', arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ', translation: 'Aquele que criou sete ceus em camadas. Nao veras nenhuma falha na criacao do Misericordioso. Olha de novo: ves algum defeito?', relationship: 'expands' }
    ],
    scholarContext: 'Ambas as escrituras convidam a contemplar a criacao como prova da existencia e perfeicao de Deus.',
    bridgeInsight: 'Davi olha para o ceu e ve a gloria de Deus. O Alcorao desafia: olhe de novo — voce nao encontrara defeito.'
  },
  {
    id: 'vm-032',
    bibleVerse: { reference: 'Salmos 139:13-14', text: 'Tu formaste o meu interior, Tu me teceste no ventre de minha mae. Eu Te louvo porque de um modo assombroso e maravilhoso fui formado.', book: 'Salmos', chapter: 139, verse: 13 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Muminun 23:12-14', arabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ ثُمَّ جَعَلْنَاهُ نُطْفَةً فِي قَرَارٍ مَّكِينٍ', translation: 'Criamos o ser humano de uma essencia de barro. Depois o fizemos uma gota num lugar seguro. Depois transformamos a gota em coagulo, o coagulo em massa, a massa em ossos, e revestimos os ossos de carne.', relationship: 'expands' }
    ],
    scholarContext: 'A formacao do ser humano no ventre materno e descrita como obra divina maravilhosa em ambas as escrituras.',
    bridgeInsight: 'Davi louva por ser formado maravilhosamente. O Alcorao detalha cada estagio da formacao no utero.'
  },
  {
    id: 'vm-033',
    bibleVerse: { reference: 'Proverbios 31:8-9', text: 'Fale em favor dos que nao podem falar por si mesmos, em favor dos direitos de todos os desamparados. Fale e julgue com justica; defenda os direitos dos pobres e necessitados.', book: 'Proverbios', chapter: 31, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nisa 4:135', arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ', translation: 'O crentes, sede firmes na justica, testemunhas por Allah, mesmo que seja contra vos mesmos, vossos pais ou parentes.', relationship: 'expands' }
    ],
    scholarContext: 'A defesa dos vulneraveis e mandamento explicito em ambas as escrituras.',
    bridgeInsight: 'Proverbios diz: fale pelos que nao podem falar. O Alcorao diz: sede justos mesmo contra vos mesmos.'
  },
  {
    id: 'vm-034',
    bibleVerse: { reference: 'Isaias 40:28-31', text: 'Voce nao sabe? Voce nao ouviu? O Senhor e o Deus eterno, o Criador dos confins da terra. Ele nao se cansa nem fica exausto. Os que esperam no Senhor renovam as suas forcas; sobem com asas como aguias.', book: 'Isaias', chapter: 40, verse: 28 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:255', arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ', translation: 'Allah! Nao ha divindade senao Ele, o Vivente, o Subsistente. Nao O tomam sonolencia nem sono.', relationship: 'confirms' }
    ],
    scholarContext: 'A eternidade e incansabilidade de Deus sao atributos centrais em Isaias e no Ayatul Kursi.',
    bridgeInsight: 'Isaias diz: Deus nao se cansa. O Alcorao confirma: nem sonolencia nem sono O tomam.'
  },
  {
    id: 'vm-035',
    bibleVerse: { reference: 'Isaias 53:3', text: 'Foi desprezado e rejeitado pelos homens, homem de dores e experimentado no sofrimento. E, como alguem de quem os homens escondem o rosto, foi desprezado, e nao O tivemos em conta.', book: 'Isaias', chapter: 53, verse: 3 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:87', arabic: 'أَفَكُلَّمَا جَاءَكُمْ رَسُولٌ بِمَا لَا تَهْوَىٰ أَنفُسُكُمُ اسْتَكْبَرْتُمْ فَفَرِيقًا كَذَّبْتُمْ وَفَرِيقًا تَقْتُلُونَ', translation: 'Sempre que um mensageiro vos trouxe o que nao desejaveis, vos ensoberbecestes? A uns desmentistes e a outros matastes.', relationship: 'responds' }
    ],
    scholarContext: 'O sofrimento do servo em Isaias e a rejeicao dos profetas no Alcorao compartilham o tema da humanidade rejeitando seus guias.',
    bridgeInsight: 'Isaias descreve o servo rejeitado. O Alcorao diz: voces sempre rejeitaram os mensageiros que nao agradavam.'
  },
  {
    id: 'vm-036',
    bibleVerse: { reference: 'Jeremias 29:11', text: 'Pois Eu sei os planos que tenho para voces, diz o Senhor, planos de prosperidade e nao de calamidade, para dar-lhes um futuro e uma esperanca.', book: 'Jeremias', chapter: 29, verse: 11 },
    relatedQuranVerses: [
      { reference: 'Surah At-Talaq 65:2-3', arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ', translation: 'E quem teme a Allah, Ele lhe dara uma saida e o proverao de onde nao espera.', relationship: 'confirms' }
    ],
    scholarContext: 'A providencia divina e a esperanca no futuro sao temas centrais tanto em Jeremias quanto no Alcorao.',
    bridgeInsight: 'Jeremias promete: Deus tem planos de esperanca. O Alcorao garante: Deus proverao de onde voce nao imagina.'
  },
  {
    id: 'vm-037',
    bibleVerse: { reference: 'Jeremias 31:33', text: 'Porei a Minha lei no interior deles e a escreverei nos seus coracoes. Serei o Deus deles e eles serao o Meu povo.', book: 'Jeremias', chapter: 31, verse: 33 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Araf 7:172', arabic: 'وَإِذْ أَخَذَ رَبُّكَ مِن بَنِي آدَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَىٰ', translation: 'E quando teu Senhor tirou dos filhos de Adao, de suas costas, sua descendencia e os fez testemunhar sobre si mesmos: Nao sou Eu vosso Senhor? Disseram: Sim, testemunhamos.', relationship: 'reframes' }
    ],
    scholarContext: 'A alianca escrita no coracao em Jeremias encontra paralelo no pacto primordial descrito no Alcorao.',
    bridgeInsight: 'Jeremias fala da lei escrita no coracao. O Alcorao vai alem: antes de nascer, toda alma ja testemunhou que Deus e seu Senhor.'
  },
  {
    id: 'vm-038',
    bibleVerse: { reference: 'Ezequiel 37:5-6', text: 'Assim diz o Senhor Deus a estes ossos: Farei um espirito entrar em voces, e voces terao vida. Porei tendoes em voces, farei crescer carne sobre voces e os cobrirei de pele.', book: 'Ezequiel', chapter: 37, verse: 5 },
    relatedQuranVerses: [
      { reference: 'Surah Ya-Sin 36:78-79', arabic: 'قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ', translation: 'Diz: Quem dara vida aos ossos quando estiverem decompostos? Dize: Dar-lhes-a vida Aquele que os criou pela primeira vez.', relationship: 'confirms' }
    ],
    scholarContext: 'A ressurreicao dos ossos secos em Ezequiel e o argumento coranico sobre a ressurreicao usam a mesma imagem.',
    bridgeInsight: 'Ezequiel ve ossos ganhando vida. O Alcorao argumenta: quem os criou na primeira vez pode recria-los.'
  },
  {
    id: 'vm-039',
    bibleVerse: { reference: 'Daniel 2:21', text: 'Ele muda os tempos e as estacoes; Ele depoe reis e estabelece reis. Ele da sabedoria aos sabios e conhecimento aos entendidos.', book: 'Daniel', chapter: 2, verse: 21 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:26', arabic: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ', translation: 'Dize: O Allah, Dono da soberania! Tu das a soberania a quem queres e a retiras de quem queres. Tu honras quem queres e humilhas quem queres.', relationship: 'reframes' }
    ],
    scholarContext: 'O controle divino sobre os governantes e a historia e afirmado por Daniel e pelo Alcorao.',
    bridgeInsight: 'Daniel e o Alcorao concordam: Deus e quem levanta e derruba reis. Nenhum poder e permanente sem Ele.'
  },
  {
    id: 'vm-040',
    bibleVerse: { reference: 'Mateus 5:3-4', text: 'Bem-aventurados os pobres em espirito, porque deles e o reino dos ceus. Bem-aventurados os que choram, porque serao consolados.', book: 'Mateus', chapter: 5, verse: 3 },
    relatedQuranVerses: [
      { reference: 'Surah Ash-Sharh 94:5-6', arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Pois, em verdade, com a dificuldade vem a facilidade. Sim, com a dificuldade vem a facilidade.', relationship: 'confirms' }
    ],
    scholarContext: 'A promessa de consolo para os que sofrem e central nas Bem-aventurancas e na Surah Ash-Sharh.',
    bridgeInsight: 'Jesus promete: os que choram serao consolados. O Alcorao repete duas vezes: com a dificuldade vem facilidade.'
  },
  {
    id: 'vm-041',
    bibleVerse: { reference: 'Mateus 5:8', text: 'Bem-aventurados os puros de coracao, porque verao a Deus.', book: 'Mateus', chapter: 5, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah Ash-Shams 91:9-10', arabic: 'قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا', translation: 'Prosperou quem a purificou. E fracassou quem a corrompeu.', relationship: 'confirms' }
    ],
    scholarContext: 'A pureza do coracao como condicao para a proximidade de Deus e tema em ambas as escrituras.',
    bridgeInsight: 'Jesus diz: os puros de coracao verao a Deus. O Alcorao diz: prosperou quem purificou sua alma.'
  },
  {
    id: 'vm-042',
    bibleVerse: { reference: 'Mateus 5:9', text: 'Bem-aventurados os pacificadores, porque serao chamados filhos de Deus.', book: 'Mateus', chapter: 5, verse: 9 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anfal 8:61', arabic: 'وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ', translation: 'E se eles inclinarem para a paz, inclina-te tambem para ela e confia em Allah.', relationship: 'responds' }
    ],
    scholarContext: 'A busca pela paz e valorizada por Jesus nas Bem-aventurancas e como diretriz politica no Alcorao.',
    bridgeInsight: 'Jesus abencoa os pacificadores. O Alcorao ordena: se o outro lado quer paz, aceite a paz.'
  },
  {
    id: 'vm-043',
    bibleVerse: { reference: 'Mateus 6:9-13', text: 'Pai nosso, que estas nos ceus, santificado seja o Teu nome. Venha o Teu reino. Seja feita a Tua vontade, assim na terra como no ceu. O pao nosso de cada dia, da-nos hoje.', book: 'Mateus', chapter: 6, verse: 9 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Fatihah 1:5-7', arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', translation: 'A Ti adoramos e a Ti pedimos ajuda. Guia-nos ao caminho reto, o caminho daqueles que agraciaste.', relationship: 'confirms' }
    ],
    scholarContext: 'O Pai Nosso e a Al-Fatihah sao as oracoes mais centrais de cada tradicao, com estruturas paralelas.',
    bridgeInsight: 'O Pai Nosso e a Al-Fatihah: ambos pedem guia, provisao e submissao a vontade de Deus.'
  },
  {
    id: 'vm-044',
    bibleVerse: { reference: 'Mateus 6:19-21', text: 'Nao acumulem para voces tesouros na terra, onde a traca e a ferrugem destroem, e onde os ladroes arrombam e furtam. Mas acumulem tesouros no ceu. Pois onde estiver o seu tesouro, ali tambem estara o seu coracao.', book: 'Mateus', chapter: 6, verse: 19 },
    relatedQuranVerses: [
      { reference: 'Surah At-Takathur 102:1-2', arabic: 'أَلْهَاكُمُ التَّكَاثُرُ حَتَّىٰ زُرْتُمُ الْمَقَابِرَ', translation: 'A competicao por acumular vos distraiu, ate que visitastes os tumulos.', relationship: 'confirms' }
    ],
    scholarContext: 'A critica ao materialismo e ao acumulo de bens terrenos e compartilhada por Jesus e pelo Alcorao.',
    bridgeInsight: 'Jesus diz: nao acumule na terra. O Alcorao adverte: acumular vos distraiu ate a morte.'
  },
  {
    id: 'vm-045',
    bibleVerse: { reference: 'Mateus 7:1-2', text: 'Nao julguem, para que voces nao sejam julgados. Pois da mesma forma que julgarem, voces serao julgados; e a medida que usarem, tambem sera usada para medir voces.', book: 'Mateus', chapter: 7, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Mutaffifin 83:1-3', arabic: 'وَيْلٌ لِّلْمُطَفِّفِينَ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ', translation: 'Ai dos que fraudam na medida! Que quando medem para si dos outros, exigem a medida completa, mas quando medem ou pesam para os outros, reduzem.', relationship: 'expands' }
    ],
    scholarContext: 'O principio de reciprocidade no julgamento aparece em Jesus e no Alcorao com metaforas de medida.',
    bridgeInsight: 'Jesus fala da medida que sera usada contra voce. O Alcorao condena quem usa duas medidas: uma para si, outra para os outros.'
  },
  {
    id: 'vm-046',
    bibleVerse: { reference: 'Mateus 19:23-24', text: 'Digo-lhes a verdade: Dificilmente um rico entrara no Reino dos ceus. E mais facil um camelo passar pelo fundo de uma agulha do que um rico entrar no Reino de Deus.', book: 'Mateus', chapter: 19, verse: 23 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Araf 7:40', arabic: 'إِنَّ الَّذِينَ كَذَّبُوا بِآيَاتِنَا وَاسْتَكْبَرُوا عَنْهَا لَا تُفَتَّحُ لَهُمْ أَبْوَابُ السَّمَاءِ وَلَا يَدْخُلُونَ الْجَنَّةَ حَتَّىٰ يَلِجَ الْجَمَلُ فِي سَمِّ الْخِيَاطِ', translation: 'Aqueles que desmentiram Nossos sinais e se ensoberbeceram diante deles, nao se abrirao para eles as portas do ceu, nem entrarao no Paraiso ate que o camelo passe pelo fundo da agulha.', relationship: 'confirms' }
    ],
    scholarContext: 'A metafora do camelo e da agulha aparece em ambas as escrituras, um paralelo notavel.',
    bridgeInsight: 'Jesus e o Alcorao usam a mesma imagem impossivel: um camelo passando pelo fundo de uma agulha.'
  },
  {
    id: 'vm-047',
    bibleVerse: { reference: 'Mateus 25:35-36', text: 'Pois tive fome e voces me deram de comer; tive sede e me deram de beber; fui estrangeiro e me acolheram; necessitei de roupas e me vestiram; estive enfermo e cuidaram de mim; estive preso e me visitaram.', book: 'Mateus', chapter: 25, verse: 35 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Insan 76:8-9', arabic: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا', translation: 'E eles alimentam, por amor a Ele, o necessitado, o orfao e o prisioneiro. Nos so vos alimentamos pela face de Allah. Nao queremos de vos recompensa nem agradecimento.', relationship: 'confirms' }
    ],
    scholarContext: 'O servico aos vulneraveis como expressao de fe em Deus e ensinado tanto por Jesus quanto pelo Alcorao.',
    bridgeInsight: 'Jesus diz: quando alimentaram o faminto, foi a Mim que serviram. O Alcorao diz: alimentamos pela face de Allah, sem esperar nada em troca.'
  },
  {
    id: 'vm-048',
    bibleVerse: { reference: 'Lucas 2:7', text: 'E deu a luz ao seu filho primogenito. Envolveu-o em panos e o deitou numa manjedoura, porque nao havia lugar para eles na hospedaria.', book: 'Lucas', chapter: 2, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Maryam 19:23-25', arabic: 'فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا', translation: 'E as dores do parto a levaram ate o tronco de uma palmeira. Ela disse: Quem dera eu tivesse morrido antes disso e fosse algo esquecido.', relationship: 'reframes' }
    ],
    scholarContext: 'O nascimento de Jesus e narrado em ambas as escrituras, mas com cenarios diferentes: manjedoura vs. palmeira.',
    bridgeInsight: 'Lucas coloca Jesus numa manjedoura. O Alcorao coloca Maria sob uma palmeira. Cenarios humildes para um nascimento divino.'
  },
  {
    id: 'vm-049',
    bibleVerse: { reference: 'Lucas 6:38', text: 'Dai, e ser-vos-a dado; boa medida, recalcada, sacudida e transbordante se vos dara. Pois com a medida com que medirdes, tambem vos medirao.', book: 'Lucas', chapter: 6, verse: 38 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:261', arabic: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ', translation: 'O exemplo dos que gastam suas riquezas no caminho de Allah e como o de um grao que produz sete espigas, cada espiga com cem graos.', relationship: 'expands' }
    ],
    scholarContext: 'A generosidade multiplicada por Deus e promessa em ambas as escrituras.',
    bridgeInsight: 'Jesus diz: dai e recebereis em abundancia. O Alcorao multiplica: um grao vira setecentos.'
  },
  {
    id: 'vm-050',
    bibleVerse: { reference: 'Lucas 15:11-24', text: 'Um homem tinha dois filhos. O mais novo disse ao pai: Pai, da-me a parte que me cabe dos bens. Quando ja tinha gastado tudo, caiu em si e voltou para o pai, que correu ao seu encontro e o abracou.', book: 'Lucas', chapter: 15, verse: 11 },
    relatedQuranVerses: [
      { reference: 'Surah Az-Zumar 39:53', arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا', translation: 'Dize: O Meus servos que transgredistes contra vos mesmos, nao desespereis da misericordia de Allah! Allah perdoa todos os pecados.', relationship: 'confirms' }
    ],
    scholarContext: 'A parabola do filho prodigo ilustra o mesmo principio que o Alcorao expressa diretamente: Deus acolhe quem retorna.',
    bridgeInsight: 'O pai corre para abracar o filho que voltou. O Alcorao diz: nao desespere — Deus perdoa TODOS os pecados.'
  },
  {
    id: 'vm-051',
    bibleVerse: { reference: 'Joao 1:1', text: 'No principio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', book: 'Joao', chapter: 1, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:45', arabic: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ', translation: 'Quando os anjos disseram: O Maria, Allah te da a boa-nova de uma Palavra vinda Dele.', relationship: 'reframes' }
    ],
    scholarContext: 'Jesus como "Palavra de Deus" aparece em ambas as escrituras, mas com significados teologicos distintos.',
    bridgeInsight: 'Joao diz: o Verbo era Deus. O Alcorao diz: Jesus e uma Palavra VINDA de Deus. Mesmo titulo, teologia diferente.'
  },
  {
    id: 'vm-052',
    bibleVerse: { reference: 'Joao 5:28-29', text: 'Nao fiquem admirados com isto, pois esta chegando a hora em que todos os que estiverem nos tumulos ouvirão a Sua voz e sairao: os que fizeram o bem ressuscitarao para a vida, e os que fizeram o mal ressuscitarao para serem condenados.', book: 'Joao', chapter: 5, verse: 28 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hajj 22:7', arabic: 'وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ', translation: 'E a Hora chegara, nao ha duvida disso, e Allah ressuscitara os que estao nos tumulos.', relationship: 'reframes' }
    ],
    scholarContext: 'A ressurreicao dos mortos dos tumulos e ensinamento explicito de Jesus e do Alcorao.',
    bridgeInsight: 'Jesus diz: os que estao nos tumulos ouvirão Sua voz. O Alcorao confirma: Allah ressuscitara os que estao nos tumulos.'
  },
  {
    id: 'vm-053',
    bibleVerse: { reference: 'Joao 8:7', text: 'Como insistissem em perguntar-Lhe, ergueu-Se e disse-lhes: Aquele dentre voces que nao tiver pecado seja o primeiro a lhe atirar uma pedra.', book: 'Joao', chapter: 8, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nur 24:4', arabic: 'وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً', translation: 'E aqueles que acusam mulheres castas e nao apresentam quatro testemunhas, puni-os com oitenta chicotadas e nunca mais aceiteis seu testemunho.', relationship: 'responds' }
    ],
    scholarContext: 'Ambas as escrituras protegem contra acusacoes levianas, exigindo padroes elevados de prova.',
    bridgeInsight: 'Jesus protege a mulher acusada exigindo perfeicao do acusador. O Alcorao protege exigindo quatro testemunhas — a acusacao e mais dificil que a defesa.'
  },
  {
    id: 'vm-054',
    bibleVerse: { reference: 'Joao 13:34-35', text: 'Um novo mandamento lhes dou: Amem-se uns aos outros. Como Eu os amei, voces devem amar-se uns aos outros. Com isso todos saberao que voces sao Meus discipulos, se amarem uns aos outros.', book: 'Joao', chapter: 13, verse: 34 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hujurat 49:13', arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا', translation: 'O humanidade! Nos vos criamos de um homem e uma mulher e vos fizemos povos e tribos para que vos conhecesseis mutuamente.', relationship: 'expands' }
    ],
    scholarContext: 'O mandamento de amar uns aos outros em Jesus encontra eco no chamado coranico para o conhecimento mutuo entre povos.',
    bridgeInsight: 'Jesus manda: amem-se uns aos outros. O Alcorao expande: Deus criou diversidade para que nos conhecamos, nao para que nos odiemos.'
  },
  {
    id: 'vm-055',
    bibleVerse: { reference: 'Atos 17:26-28', text: 'De um so homem fez todas as nacoes, para que habitassem sobre toda a face da terra. Pois nele vivemos, nos movemos e existimos.', book: 'Atos', chapter: 17, verse: 26 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nisa 4:1', arabic: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً', translation: 'O humanidade! Temei vosso Senhor, que vos criou de uma unica alma e dela criou sua companheira e de ambos disseminou muitos homens e mulheres.', relationship: 'reframes' }
    ],
    scholarContext: 'A origem comum da humanidade a partir de uma unica alma e ensinamento compartilhado.',
    bridgeInsight: 'Paulo diz: de um so homem, todas as nacoes. O Alcorao diz: de uma unica alma. A mesma verdade: somos uma familia.'
  },
  {
    id: 'vm-056',
    bibleVerse: { reference: 'Romanos 12:17-21', text: 'Nao retribuam a ninguem mal por mal. Nao se vinguem, amados, mas deixem com Deus a ira. Se o seu inimigo tiver fome, de-lhe de comer; se tiver sede, de-lhe de beber. Nao se deixem vencer pelo mal, mas vencam o mal com o bem.', book: 'Romanos', chapter: 12, verse: 17 },
    relatedQuranVerses: [
      { reference: 'Surah Ash-Shura 42:40-43', arabic: 'وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ', translation: 'A retribuicao de uma ofensa e uma ofensa igual. Mas quem perdoa e se reconcilia, sua recompensa esta com Allah.', relationship: 'confirms' }
    ],
    scholarContext: 'Vencer o mal com o bem e perdoar em vez de retribuir sao ensinamentos paralelos em Paulo e no Alcorao.',
    bridgeInsight: 'Paulo diz: venca o mal com o bem. O Alcorao diz: quem perdoa, sua recompensa esta com Deus.'
  },
  {
    id: 'vm-057',
    bibleVerse: { reference: '1 Corintios 13:4-7', text: 'O amor e paciente, o amor e bondoso. Nao inveja, nao se vangloria, nao se orgulha. Nao maltrata, nao procura seus interesses, nao se ira facilmente, nao guarda rancor.', book: '1 Corintios', chapter: 13, verse: 4 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:134', arabic: 'الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ', translation: 'Aqueles que gastam na prosperidade e na adversidade, que reprimem a ira e perdoam as pessoas. E Allah ama os que fazem o bem.', relationship: 'confirms' }
    ],
    scholarContext: 'O retrato do amor em Paulo e as qualidades dos virtuosos no Alcorao descrevem o mesmo carater.',
    bridgeInsight: 'Paulo descreve o amor. O Alcorao descreve quem Deus ama. As qualidades sao as mesmas: paciencia, perdao, bondade.'
  },
  {
    id: 'vm-058',
    bibleVerse: { reference: 'Tiago 2:17', text: 'Assim tambem a fe, se nao tiver obras, e morta em si mesma.', book: 'Tiago', chapter: 2, verse: 17 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Asr 103:1-3', arabic: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ', translation: 'Pelo tempo! O ser humano esta em perda, exceto os que creram e praticaram boas obras e se aconselharam mutuamente com a verdade e a paciencia.', relationship: 'confirms' }
    ],
    scholarContext: 'Tiago e a Surah Al-Asr expressam o mesmo principio: fe sem obras nao salva.',
    bridgeInsight: 'Tiago diz: fe sem obras e morta. O Alcorao une crenca e acao como condicao de salvacao.'
  },
  {
    id: 'vm-059',
    bibleVerse: { reference: 'Tiago 4:6', text: 'Deus se opoe aos orgulhosos, mas concede graca aos humildes.', book: 'Tiago', chapter: 4, verse: 6 },
    relatedQuranVerses: [
      { reference: 'Surah Luqman 31:18', arabic: 'وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ', translation: 'Nao desvies teu rosto das pessoas com arrogancia e nao caminhes pela terra com soberba. Allah nao ama nenhum arrogante presuncoso.', relationship: 'confirms' }
    ],
    scholarContext: 'A condenacao do orgulho e a valorizacao da humildade sao ensinamentos paralelos em Tiago e Luqman.',
    bridgeInsight: 'Tiago diz: Deus resiste aos orgulhosos. Luqman ensina: nao caminhes com arrogancia — Deus nao ama o presuncoso.'
  },
  {
    id: 'vm-060',
    bibleVerse: { reference: '1 Pedro 5:7', text: 'Lancem sobre Ele toda a sua ansiedade, porque Ele tem cuidado de voces.', book: '1 Pedro', chapter: 5, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah At-Talaq 65:3', arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', translation: 'E quem confia em Allah, Ele lhe e suficiente.', relationship: 'confirms' }
    ],
    scholarContext: 'Entregar a ansiedade a Deus e confiar Nele e ensinamento compartilhado por Pedro e pelo Alcorao.',
    bridgeInsight: 'Pedro diz: lance sua ansiedade sobre Deus. O Alcorao diz: quem confia em Allah, Ele basta.'
  },
  {
    id: 'vm-061',
    bibleVerse: { reference: 'Genesis 37:28', text: 'Quando os mercadores midianitas passaram, seus irmaos tiraram Jose da cisterna e o venderam por vinte pecas de prata aos ismaelitas, que o levaram para o Egito.', book: 'Genesis', chapter: 37, verse: 28 },
    relatedQuranVerses: [
      { reference: 'Surah Yusuf 12:19-20', arabic: 'وَجَاءَتْ سَيَّارَةٌ فَأَرْسَلُوا وَارِدَهُمْ فَأَدْلَىٰ دَلْوَهُ قَالَ يَا بُشْرَىٰ هَٰذَا غُلَامٌ وَأَسَرُّوهُ بِضَاعَةً', translation: 'E veio uma caravana. Enviaram seu buscador de agua, que desceu o balde e disse: Que boa noticia! Aqui ha um rapaz! E o esconderam como mercadoria.', relationship: 'expands' }
    ],
    scholarContext: 'A historia de Jose vendido pelos irmaos aparece em Genesis e na Surah Yusuf com detalhes complementares.',
    bridgeInsight: 'Jose e vendido como mercadoria em ambos os textos — a maior injustica entre irmaos que Deus transformaria em salvacao.'
  },
  {
    id: 'vm-062',
    bibleVerse: { reference: 'Genesis 50:20', text: 'Voces planejaram o mal contra mim, mas Deus o tornou em bem, para que se fizesse como hoje se ve: a sobrevivencia de muita gente.', book: 'Genesis', chapter: 50, verse: 20 },
    relatedQuranVerses: [
      { reference: 'Surah Yusuf 12:90', arabic: 'إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ', translation: 'Quem teme a Deus e e paciente — Allah nao desperdicara a recompensa dos que fazem o bem.', relationship: 'responds' }
    ],
    scholarContext: 'O desfecho da historia de Jose em ambas as escrituras mostra Deus transformando o mal em bem.',
    bridgeInsight: 'Jose perdoa seus irmaos em ambos os textos: o mal planejado pelo homem, Deus transformou em salvacao.'
  },
  {
    id: 'vm-063',
    bibleVerse: { reference: '1 Samuel 16:7', text: 'O Senhor nao ve como o homem ve. O homem olha para a aparencia exterior, mas o Senhor olha para o coracao.', book: '1 Samuel', chapter: 16, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hujurat 49:13', arabic: 'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ', translation: 'O mais honrado dentre vos perante Allah e o mais temente. Allah e Onisciente, Conhecedor.', relationship: 'confirms' }
    ],
    scholarContext: 'Ambas as escrituras rejeitam julgamento pela aparencia e valorizam o interior da pessoa.',
    bridgeInsight: 'Deus diz a Samuel: Eu olho o coracao. O Alcorao confirma: o mais honrado e o mais temente, nao o mais bonito ou rico.'
  },
  {
    id: 'vm-064',
    bibleVerse: { reference: '1 Reis 19:11-12', text: 'O Senhor estava passando. Um grande e poderoso vento despedacava as montanhas, mas o Senhor nao estava no vento. Depois do vento houve um terremoto, mas o Senhor nao estava no terremoto. Depois houve fogo, mas o Senhor nao estava no fogo. E depois do fogo veio um murmúrio suave e tranquilo.', book: '1 Reis', chapter: 19, verse: 11 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:186', arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ', translation: 'E quando Meus servos te perguntarem sobre Mim, Eu estou proximo. Respondo ao chamado de quem Me invoca quando Me invoca.', relationship: 'expands' }
    ],
    scholarContext: 'A proximidade de Deus revelada nao no espetaculo, mas na intimidade, e tema de Elias e do Alcorao.',
    bridgeInsight: 'Elias encontra Deus no silencio, nao no terremoto. O Alcorao diz: Eu estou proximo — respondo quando Me chamam.'
  },
  {
    id: 'vm-065',
    bibleVerse: { reference: 'Salmos 46:10', text: 'Aquietai-vos e sabei que Eu sou Deus. Serei exaltado entre as nacoes, serei exaltado na terra.', book: 'Salmos', chapter: 46, verse: 10 },
    relatedQuranVerses: [
      { reference: 'Surah Ar-Rad 13:28', arabic: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', translation: 'Aqueles que creram e cujos coracoes se tranquilizam com a lembranca de Allah. Nao e com a lembranca de Allah que os coracoes se tranquilizam?', relationship: 'confirms' }
    ],
    scholarContext: 'A paz interior atraves do reconhecimento de Deus e tema compartilhado nos Salmos e no Alcorao.',
    bridgeInsight: 'Aquietai-vos e sabei que Eu sou Deus. O Alcorao pergunta: nao e com a lembranca de Deus que os coracoes se aquietam?'
  },
  {
    id: 'vm-066',
    bibleVerse: { reference: 'Salmos 104:24', text: 'Quao numerosas sao as Tuas obras, Senhor! Com sabedoria fizeste todas elas; a terra esta cheia das Tuas criaturas.', book: 'Salmos', chapter: 104, verse: 24 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nahl 16:18', arabic: 'وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا', translation: 'E se tentardes contar as gracas de Allah, nao conseguireis enumera-las.', relationship: 'responds' }
    ],
    scholarContext: 'A abundancia e diversidade da criacao como sinal da sabedoria divina e celebrada em ambas as escrituras.',
    bridgeInsight: 'Davi canta: quao numerosas sao Tuas obras! O Alcorao confirma: se tentarem contar as gracas de Deus, nao conseguirao.'
  },
  {
    id: 'vm-067',
    bibleVerse: { reference: 'Proverbios 3:5-6', text: 'Confie no Senhor de todo o seu coracao e nao se apoie no seu proprio entendimento. Reconheca-O em todos os seus caminhos, e Ele endireitara as suas veredas.', book: 'Proverbios', chapter: 3, verse: 5 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:159', arabic: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ', translation: 'E quando tomares uma decisao, confia em Allah. Allah ama os que confiam Nele.', relationship: 'confirms' }
    ],
    scholarContext: 'A confianca em Deus acima da propria inteligencia e ensinamento central de Proverbios e do Alcorao.',
    bridgeInsight: 'Proverbios diz: nao se apoie no proprio entendimento. O Alcorao diz: decida e confie em Deus — Ele ama quem confia.'
  },
  {
    id: 'vm-068',
    bibleVerse: { reference: 'Proverbios 16:9', text: 'O coracao do homem planeja o seu caminho, mas o Senhor determina os seus passos.', book: 'Proverbios', chapter: 16, verse: 9 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anfal 8:30', arabic: 'وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ وَاللَّهُ خَيْرُ الْمَاكِرِينَ', translation: 'Eles planejam, e Allah planeja. E Allah e o melhor dos planejadores.', relationship: 'expands' }
    ],
    scholarContext: 'A soberania de Deus sobre os planos humanos e expressa em ambas as escrituras.',
    bridgeInsight: 'Proverbios diz: o homem planeja, Deus determina. O Alcorao vai alem: Deus e o melhor dos planejadores.'
  },
  {
    id: 'vm-069',
    bibleVerse: { reference: 'Eclesiastes 12:13', text: 'Agora que ja se ouviu tudo, aqui esta a conclusao: Tema a Deus e guarde os Seus mandamentos, porque isso e o dever de todo ser humano.', book: 'Eclesiastes', chapter: 12, verse: 13 },
    relatedQuranVerses: [
      { reference: 'Surah Adh-Dhariyat 51:56', arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ', translation: 'E nao criei os jinns e os humanos senao para que Me adorem.', relationship: 'confirms' }
    ],
    scholarContext: 'O proposito da existencia humana resumido em ambas as escrituras: adorar e obedecer a Deus.',
    bridgeInsight: 'Eclesiastes conclui: o dever do homem e temer a Deus. O Alcorao declara: o proposito da criacao e adorar a Deus.'
  },
  {
    id: 'vm-070',
    bibleVerse: { reference: 'Isaias 1:17', text: 'Aprendam a fazer o bem! Busquem a justica, socorram o oprimido. Facam justica ao orfao, defendam a causa da viuva.', book: 'Isaias', chapter: 1, verse: 17 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Maun 107:1-3', arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', translation: 'Ja viste aquele que desmente a religiao? E aquele que maltrata o orfao e nao incentiva a alimentacao do pobre.', relationship: 'responds' }
    ],
    scholarContext: 'A defesa do orfao e do necessitado como prova de religiosidade verdadeira aparece em Isaias e no Alcorao.',
    bridgeInsight: 'Isaias ordena: defenda o orfao. O Alcorao adverte: quem maltrata o orfao desmente a propria religiao.'
  },
  {
    id: 'vm-071',
    bibleVerse: { reference: 'Isaias 45:5-6', text: 'Eu sou o Senhor, e nao ha outro; fora de Mim nao ha Deus. Eu te cingirei, ainda que tu nao Me conhecas, para que se saiba, desde o nascente do sol ate o poente, que fora de Mim nao ha outro.', book: 'Isaias', chapter: 45, verse: 5 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hashr 59:22-23', arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ', translation: 'Ele e Allah, nao ha divindade senao Ele, Conhecedor do invisivel e do visivel. Ele e o Misericordioso, o Misericordiador.', relationship: 'confirms' }
    ],
    scholarContext: 'A declaracao de Deus como unico, de leste a oeste, e central em Isaias e no final da Surah Al-Hashr.',
    bridgeInsight: 'Isaias proclama: do nascer ao por do sol, so ha um Deus. O Alcorao ecoa: nao ha divindade senao Ele.'
  },
  {
    id: 'vm-072',
    bibleVerse: { reference: 'Isaias 55:8-9', text: 'Pois os Meus pensamentos nao sao os pensamentos de voces, nem os seus caminhos sao os Meus caminhos. Assim como os ceus sao mais altos do que a terra, assim sao os Meus caminhos mais altos do que os seus caminhos.', book: 'Isaias', chapter: 55, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:216', arabic: 'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ', translation: 'Pode ser que detesteis algo que e bom para vos e que ameis algo que e mau para vos. Allah sabe e vos nao sabeis.', relationship: 'reframes' }
    ],
    scholarContext: 'A transcendencia do conhecimento divino sobre o humano e ensinamento de Isaias e do Alcorao.',
    bridgeInsight: 'Isaias diz: Meus caminhos sao mais altos que os vossos. O Alcorao diz: Allah sabe e voces nao sabem.'
  },
  {
    id: 'vm-073',
    bibleVerse: { reference: 'Jeremias 17:7-8', text: 'Bendito o homem que confia no Senhor e cuja confianca e o Senhor. Ele sera como arvore plantada junto as aguas, que estende suas raizes para o ribeiro.', book: 'Jeremias', chapter: 17, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Ibrahim 14:24-25', arabic: 'أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ', translation: 'Nao ves como Allah apresentou uma parabola? Uma boa palavra e como uma boa arvore, cuja raiz e firme e cujos ramos tocam o ceu.', relationship: 'confirms' }
    ],
    scholarContext: 'A metafora da arvore com raizes firmes junto a agua aparece em Jeremias e na Surah Ibrahim.',
    bridgeInsight: 'Jeremias compara o crente a uma arvore junto as aguas. O Alcorao usa a mesma imagem: raiz firme, ramos no ceu.'
  },
  {
    id: 'vm-074',
    bibleVerse: { reference: 'Lamentacoes 3:22-23', text: 'As misericordias do Senhor sao a causa de nao sermos consumidos; as Suas misericordias nao tem fim. Renovam-se cada manha; grande e a Tua fidelidade.', book: 'Lamentacoes', chapter: 3, verse: 22 },
    relatedQuranVerses: [
      { reference: 'Surah Ghafir 40:7', arabic: 'رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا', translation: 'Senhor nosso, abrangeste todas as coisas com misericordia e conhecimento.', relationship: 'confirms' }
    ],
    scholarContext: 'A misericordia inesgotavel de Deus e tema de Lamentacoes e da oracao dos anjos no Alcorao.',
    bridgeInsight: 'Jeremias diz: as misericordias se renovam a cada manha. Os anjos oram no Alcorao: Tua misericordia abrange tudo.'
  },
  {
    id: 'vm-075',
    bibleVerse: { reference: 'Mateus 5:27-28', text: 'Voces ouviram o que foi dito: Nao cometeras adulterio. Mas Eu digo a voces: qualquer que olhar para uma mulher com intencao impura ja cometeu adulterio com ela no coracao.', book: 'Mateus', chapter: 5, verse: 27 },
    relatedQuranVerses: [
      { reference: 'Surah An-Nur 24:30', arabic: 'قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ذَٰلِكَ أَزْكَىٰ لَهُمْ', translation: 'Dize aos crentes que baixem seus olhares e guardem sua castidade. Isso e mais puro para eles.', relationship: 'confirms' }
    ],
    scholarContext: 'O controle do olhar e da intencao como guarda da castidade e ensinamento de Jesus e do Alcorao.',
    bridgeInsight: 'Jesus diz: o adulterio comeca no olhar. O Alcorao ordena: baixem seus olhares — e mais puro.'
  },
  {
    id: 'vm-076',
    bibleVerse: { reference: 'Mateus 10:29-31', text: 'Nao se vendem dois pardais por uma moedinha? Contudo, nenhum deles cai no chao sem o consentimento do Pai de voces. Ate os cabelos da cabeca de voces estao todos contados. Nao tenham medo.', book: 'Mateus', chapter: 10, verse: 29 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anam 6:59', arabic: 'وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا', translation: 'Com Ele estao as chaves do invisivel, ninguem as conhece senao Ele. Ele sabe o que ha na terra e no mar. Nenhuma folha cai sem que Ele saiba.', relationship: 'expands' }
    ],
    scholarContext: 'O conhecimento absoluto e detalhado de Deus sobre cada criatura e tema de Jesus e do Alcorao.',
    bridgeInsight: 'Jesus diz: nenhum pardal cai sem Deus saber. O Alcorao diz: nenhuma folha cai sem Ele saber.'
  },
  {
    id: 'vm-077',
    bibleVerse: { reference: 'Mateus 18:21-22', text: 'Entao Pedro se aproximou de Jesus e perguntou: Senhor, quantas vezes deverei perdoar a meu irmao quando ele pecar contra mim? Ate sete vezes? Jesus respondeu: Nao lhe digo que ate sete, mas ate setenta vezes sete.', book: 'Mateus', chapter: 18, verse: 21 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:134', arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ', translation: 'Aqueles que reprimem a ira e perdoam as pessoas. E Allah ama os que fazem o bem.', relationship: 'confirms' }
    ],
    scholarContext: 'O perdao ilimitado e repetido e ensinamento explicito de Jesus e valorizado no Alcorao.',
    bridgeInsight: 'Jesus diz: perdoe setenta vezes sete. O Alcorao louva quem reprime a ira e perdoa as pessoas.'
  },
  {
    id: 'vm-078',
    bibleVerse: { reference: 'Lucas 4:24', text: 'Digo-lhes a verdade: Nenhum profeta e aceito em sua propria terra.', book: 'Lucas', chapter: 4, verse: 24 },
    relatedQuranVerses: [
      { reference: 'Surah Ya-Sin 36:30', arabic: 'يَا حَسْرَةً عَلَى الْعِبَادِ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ', translation: 'Que pena dos servos! Nao lhes vem nenhum mensageiro sem que dele zombem.', relationship: 'responds' }
    ],
    scholarContext: 'A rejeicao dos profetas pelo proprio povo e padrao reconhecido por Jesus e pelo Alcorao.',
    bridgeInsight: 'Jesus diz: nenhum profeta e honrado em casa. O Alcorao lamenta: todo mensageiro foi zombado pelo seu povo.'
  },
  {
    id: 'vm-079',
    bibleVerse: { reference: 'Lucas 10:30-37', text: 'Um homem descia de Jerusalem para Jerico, e caiu nas maos de assaltantes. Um sacerdote passou ao largo. Um levita fez o mesmo. Mas um samaritano, ao ve-lo, encheu-se de compaixao e cuidou dele.', book: 'Lucas', chapter: 10, verse: 30 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Maidah 5:32', arabic: 'مَنْ أَحْيَا نَفْسًا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا', translation: 'Quem salva uma vida e como se tivesse salvado toda a humanidade.', relationship: 'expands' }
    ],
    scholarContext: 'O dever de ajudar o proximo independente de quem ele e e ensinamento do Bom Samaritano e do Alcorao.',
    bridgeInsight: 'O Samaritano salva um estranho. O Alcorao declara: quem salva uma vida, salva toda a humanidade.'
  },
  {
    id: 'vm-080',
    bibleVerse: { reference: 'Lucas 12:15', text: 'Cuidado! Fiquem de sobreaviso contra toda forma de ganancia; a vida de uma pessoa nao consiste na quantidade dos seus bens.', book: 'Lucas', chapter: 12, verse: 15 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Hadid 57:20', arabic: 'اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ وَتَكَاثُرٌ فِي الْأَمْوَالِ وَالْأَوْلَادِ', translation: 'Sabei que a vida mundana e apenas diversao, distracao, ornamento, competicao entre vos e acumulo de riquezas e filhos.', relationship: 'expands' }
    ],
    scholarContext: 'O alerta contra o materialismo e a ilusao da riqueza e central nos ensinamentos de Jesus e do Alcorao.',
    bridgeInsight: 'Jesus adverte: a vida nao consiste em bens. O Alcorao detalha: a vida mundana e diversao, distracao e competicao.'
  },
  {
    id: 'vm-081',
    bibleVerse: { reference: 'Lucas 18:13', text: 'Mas o publicano, estando em pe, a distancia, nem ousava levantar os olhos ao ceu, mas batia no peito, dizendo: Deus, tem misericordia de mim, pecador!', book: 'Lucas', chapter: 18, verse: 13 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:286', arabic: 'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا', translation: 'Senhor nosso, nao nos condenes se esquecermos ou errarmos.', relationship: 'confirms' }
    ],
    scholarContext: 'A oracao humilde do pecador arrependido e modelo de devocao em ambas as escrituras.',
    bridgeInsight: 'O publicano ora: tem misericordia de mim. O Alcorao ensina a mesma oracao: nao nos condenes se errarmos.'
  },
  {
    id: 'vm-082',
    bibleVerse: { reference: 'Joao 4:24', text: 'Deus e Espirito, e e necessario que os Seus adoradores O adorem em espirito e em verdade.', book: 'Joao', chapter: 4, verse: 24 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:115', arabic: 'وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ', translation: 'A Allah pertencem o oriente e o ocidente. Para onde quer que vos volteis, la esta a face de Allah.', relationship: 'reframes' }
    ],
    scholarContext: 'A adoracao que transcende o lugar fisico e ensinada por Jesus e pelo Alcorao.',
    bridgeInsight: 'Jesus diz: adorai em espirito, nao num lugar. O Alcorao confirma: para onde se voltarem, la esta a face de Deus.'
  },
  {
    id: 'vm-083',
    bibleVerse: { reference: 'Joao 10:30', text: 'Eu e o Pai somos um.', book: 'Joao', chapter: 10, verse: 30 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Maidah 5:72', arabic: 'لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ وَقَالَ الْمَسِيحُ يَا بَنِي إِسْرَائِيلَ اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ', translation: 'Descreram os que disseram que Allah e o Messias, filho de Maria. E o Messias disse: O filhos de Israel, adorai Allah, meu Senhor e vosso Senhor.', relationship: 'responds' }
    ],
    scholarContext: 'Este e o ponto de maior divergencia teologica: a relacao entre Jesus e Deus.',
    bridgeInsight: 'Joao registra Jesus dizendo: Eu e o Pai somos um. O Alcorao responde: o Messias disse adorai Allah, meu Senhor e vosso Senhor.'
  },
  {
    id: 'vm-084',
    bibleVerse: { reference: 'Joao 14:27', text: 'Deixo-lhes a paz; a Minha paz lhes dou. Nao a dou como o mundo a da. Nao se perturbem os seus coracoes, nem tenham medo.', book: 'Joao', chapter: 14, verse: 27 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Fath 48:4', arabic: 'هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ', translation: 'Ele e quem fez descer a serenidade nos coracoes dos crentes para que aumentem em fe sobre sua fe.', relationship: 'confirms' }
    ],
    scholarContext: 'A paz divina que acalma o coracao do crente e promessa em ambas as escrituras.',
    bridgeInsight: 'Jesus diz: Minha paz lhes dou. O Alcorao diz: Deus fez descer serenidade nos coracoes dos crentes.'
  },
  {
    id: 'vm-085',
    bibleVerse: { reference: 'Joao 16:33', text: 'Eu lhes disse estas coisas para que em Mim voces tenham paz. Neste mundo voces terao aflicoes; contudo, tenham animo! Eu venci o mundo.', book: 'Joao', chapter: 16, verse: 33 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Ankabut 29:2-3', arabic: 'أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ', translation: 'Pensam as pessoas que serao deixadas em paz por dizerem "cremos" sem serem testadas?', relationship: 'reframes' }
    ],
    scholarContext: 'A aflicao como parte inevitavel da vida de fe e ensinamento de Jesus e do Alcorao.',
    bridgeInsight: 'Jesus avisa: terao aflicoes. O Alcorao pergunta: acharam que crer seria suficiente sem serem testados?'
  },
  {
    id: 'vm-086',
    bibleVerse: { reference: 'Romanos 2:6', text: 'Deus retribuira a cada um conforme as suas obras.', book: 'Romanos', chapter: 2, verse: 6 },
    relatedQuranVerses: [
      { reference: 'Surah An-Najm 53:39-41', arabic: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ ثُمَّ يُجْزَاهُ الْجَزَاءَ الْأَوْفَىٰ', translation: 'E que o ser humano so tera o fruto do seu esforco. E que seu esforco sera visto. E depois sera recompensado com a recompensa completa.', relationship: 'responds' }
    ],
    scholarContext: 'A retribuicao divina conforme as obras e principio explicito em Paulo e no Alcorao.',
    bridgeInsight: 'Paulo diz: Deus retribui conforme as obras. O Alcorao diz: o homem so tera o fruto do seu esforco.'
  },
  {
    id: 'vm-087',
    bibleVerse: { reference: 'Galatas 6:7', text: 'Nao se deixem enganar: de Deus nao se zomba. Pois o que o homem semear, isso tambem ceifara.', book: 'Galatas', chapter: 6, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Muddathir 74:38', arabic: 'كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ', translation: 'Cada alma e refem do que adquiriu.', relationship: 'confirms' }
    ],
    scholarContext: 'O principio da semeadura e colheita espiritual e ensinamento de Paulo e do Alcorao.',
    bridgeInsight: 'Paulo diz: o que semear, ceifara. O Alcorao diz: cada alma e refem do que fez.'
  },
  {
    id: 'vm-088',
    bibleVerse: { reference: 'Efesios 6:1-3', text: 'Filhos, obedecam a seus pais no Senhor, pois isso e justo. Honra teu pai e tua mae — este e o primeiro mandamento com promessa — para que tudo te va bem e tenhas longa vida sobre a terra.', book: 'Efesios', chapter: 6, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Ahqaf 46:15', arabic: 'وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا', translation: 'E recomendamos ao ser humano tratar seus pais com bondade. Sua mae o carregou com dificuldade e o deu a luz com dificuldade.', relationship: 'confirms' }
    ],
    scholarContext: 'A obediencia e o respeito aos pais como mandamento divino e central em Paulo e no Alcorao.',
    bridgeInsight: 'Paulo ordena: honra pai e mae. O Alcorao acrescenta: sua mae te carregou com dificuldade — trate-a com bondade.'
  },
  {
    id: 'vm-089',
    bibleVerse: { reference: 'Hebreus 11:1', text: 'A fe e a certeza daquilo que esperamos e a prova das coisas que nao vemos.', book: 'Hebreus', chapter: 11, verse: 1 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:3', arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', translation: 'Aqueles que creem no invisivel, estabelecem a oracao e gastam do que lhes demos.', relationship: 'reframes' }
    ],
    scholarContext: 'A fe no invisivel como fundamento da vida religiosa e definida em Hebreus e no inicio da Surah Al-Baqarah.',
    bridgeInsight: 'Hebreus define fe: certeza do que nao vemos. O Alcorao abre com: os piedosos sao os que creem no invisivel.'
  },
  {
    id: 'vm-090',
    bibleVerse: { reference: 'Hebreus 13:2', text: 'Nao se esquecam da hospitalidade; foi praticando-a que, sem o saber, alguns acolheram anjos.', book: 'Hebreus', chapter: 13, verse: 2 },
    relatedQuranVerses: [
      { reference: 'Surah Hud 11:69-70', arabic: 'وَلَقَدْ جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ قَالُوا سَلَامًا قَالَ سَلَامٌ فَمَا لَبِثَ أَن جَاءَ بِعِجْلٍ حَنِيذٍ', translation: 'E Nossos mensageiros vieram a Abraao com boas novas. Disseram: Paz! Ele respondeu: Paz! E logo trouxe um bezerro assado.', relationship: 'expands' }
    ],
    scholarContext: 'A hospitalidade de Abraao aos anjos e referencia em Hebreus e narrada em detalhe no Alcorao.',
    bridgeInsight: 'Hebreus lembra: alguns acolheram anjos sem saber. O Alcorao mostra Abraao fazendo exatamente isso.'
  },
  {
    id: 'vm-091',
    bibleVerse: { reference: 'Tiago 1:19', text: 'Meus amados irmaos, tenham isto em mente: Sejam todos prontos para ouvir, tardios para falar e tardios para irar-se.', book: 'Tiago', chapter: 1, verse: 19 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:134', arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ', translation: 'Aqueles que reprimem a ira e perdoam as pessoas.', relationship: 'confirms' }
    ],
    scholarContext: 'O controle da ira como virtude espiritual e ensinamento de Tiago e do Alcorao.',
    bridgeInsight: 'Tiago diz: tardios para irar-se. O Alcorao louva: aqueles que reprimem a ira.'
  },
  {
    id: 'vm-092',
    bibleVerse: { reference: '1 Joao 4:8', text: 'Aquele que nao ama nao conhece a Deus, porque Deus e amor.', book: '1 Joao', chapter: 4, verse: 8 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Buruj 85:14', arabic: 'وَهُوَ الْغَفُورُ الْوَدُودُ', translation: 'E Ele e o Perdoador, o Amoroso.', relationship: 'reframes' }
    ],
    scholarContext: 'O amor como atributo divino aparece em Joao como definicao de Deus e no Alcorao como um dos Nomes de Deus.',
    bridgeInsight: 'Joao diz: Deus E amor. O Alcorao diz: Deus e Al-Wadud, o Amoroso. Mesmo atributo, enfase diferente.'
  },
  {
    id: 'vm-093',
    bibleVerse: { reference: 'Genesis 16:13', text: 'Ela deu ao Senhor que lhe falara o nome de "Deus que me ve", pois disse: Sera que realmente vi Aquele que me ve?', book: 'Genesis', chapter: 16, verse: 13 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Mulk 67:13-14', arabic: 'وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ', translation: 'Ocultai vossas palavras ou proclamai-as; Ele conhece o que ha nos peitos. Nao saberia Aquele que criou? Ele e o Sutil, o Conhecedor.', relationship: 'expands' }
    ],
    scholarContext: 'Hagar descobre que Deus a ve. O Alcorao ensina que Deus conhece ate o que esta escondido nos coracoes.',
    bridgeInsight: 'Hagar descobre: Deus me ve. O Alcorao vai alem: Ele conhece ate o que voce esconde no peito.'
  },
  {
    id: 'vm-094',
    bibleVerse: { reference: 'Numeros 6:24-26', text: 'O Senhor te abencoe e te guarde; o Senhor faca resplandecer o Seu rosto sobre ti e tenha misericordia de ti; o Senhor sobre ti levante o Seu rosto e te de paz.', book: 'Numeros', chapter: 6, verse: 24 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Anam 6:54', arabic: 'فَقُلْ سَلَامٌ عَلَيْكُمْ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ', translation: 'Dize: Paz sobre vos. Vosso Senhor prescreveu para Si mesmo a misericordia.', relationship: 'responds' }
    ],
    scholarContext: 'A bencao sacerdotal de paz e misericordia em Numeros ecoa a saudacao e promessa de misericordia no Alcorao.',
    bridgeInsight: 'A bencao de Aarao: o Senhor te de paz. O Alcorao diz: paz sobre vos — Deus prescreveu para Si a misericordia.'
  },
  {
    id: 'vm-095',
    bibleVerse: { reference: 'Salmos 37:7', text: 'Descanse no Senhor e espere Nele com paciencia; nao se aborreca por causa daquele que prospera em seu caminho, por causa do homem que executa planos perversos.', book: 'Salmos', chapter: 37, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:153', arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', translation: 'O crentes! Buscai auxilio na paciencia e na oracao. Allah esta com os pacientes.', relationship: 'responds' }
    ],
    scholarContext: 'A paciencia diante da injustica e da prosperidade dos impios e virtude nos Salmos e no Alcorao.',
    bridgeInsight: 'Davi diz: descanse e espere com paciencia. O Alcorao garante: Allah esta com os pacientes.'
  },
  {
    id: 'vm-096',
    bibleVerse: { reference: 'Proverbios 22:6', text: 'Instrua a crianca segundo os objetivos que voce tem para ela, e mesmo com o passar dos anos nao se desviara deles.', book: 'Proverbios', chapter: 22, verse: 6 },
    relatedQuranVerses: [
      { reference: 'Surah Luqman 31:13-14', arabic: 'وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ', translation: 'E quando Luqman disse ao seu filho, aconselhando-o: O meu filho, nao associes nada a Allah. A associacao e uma grande injustica.', relationship: 'expands' }
    ],
    scholarContext: 'A educacao religiosa dos filhos como dever parental e central em Proverbios e na Surah Luqman.',
    bridgeInsight: 'Proverbios diz: instrua a crianca. Luqman faz exatamente isso: ensina ao filho o que mais importa.'
  },
  {
    id: 'vm-097',
    bibleVerse: { reference: 'Isaias 41:10', text: 'Nao temas, porque Eu sou contigo; nao te assombres, porque Eu sou o teu Deus. Eu te fortaleco, Eu te ajudo, Eu te sustento com a Minha destra fiel.', book: 'Isaias', chapter: 41, verse: 10 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Imran 3:139', arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', translation: 'E nao fraquejeis nem vos entristecais, pois sois os superiores, se fordes crentes.', relationship: 'reframes' }
    ],
    scholarContext: 'A promessa de forca e coragem divina para os crentes e central em Isaias e no Alcorao.',
    bridgeInsight: 'Isaias diz: nao temas, Eu sou contigo. O Alcorao diz: nao fraquejeis nem vos entristecais se fordes crentes.'
  },
  {
    id: 'vm-098',
    bibleVerse: { reference: 'Mateus 7:7-8', text: 'Pecam e lhes sera dado; busquem e encontrarao; batam e a porta lhes sera aberta. Pois todo o que pede, recebe; o que busca, encontra; e a quem bate, a porta sera aberta.', book: 'Mateus', chapter: 7, verse: 7 },
    relatedQuranVerses: [
      { reference: 'Surah Ghafir 40:60', arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ', translation: 'E vosso Senhor disse: Invocai-Me que Eu vos responderei.', relationship: 'confirms' }
    ],
    scholarContext: 'A promessa divina de responder a quem pede e busca e explicita em Jesus e no Alcorao.',
    bridgeInsight: 'Jesus diz: pecam e receberao. O Alcorao diz: invocai-Me que Eu responderei. A mesma promessa.'
  },
  {
    id: 'vm-099',
    bibleVerse: { reference: 'Mateus 22:37-39', text: 'Respondeu Jesus: Ame o Senhor, o seu Deus, de todo o seu coracao, de toda a sua alma e de todo o seu entendimento. Este e o primeiro e maior mandamento. E o segundo e semelhante a ele: Ame o seu proximo como a si mesmo.', book: 'Mateus', chapter: 22, verse: 37 },
    relatedQuranVerses: [
      { reference: 'Surah Al-Baqarah 2:177', arabic: 'وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينَ', translation: 'A piedade nao e voltardes o rosto para o oriente ou o ocidente. A piedade e crer em Allah, no Dia Final, nos anjos, no Livro e nos profetas, e dar das riquezas por amor a Ele aos parentes, orfaos e necessitados.', relationship: 'expands' }
    ],
    scholarContext: 'Jesus resume a Lei em amar a Deus e ao proximo. O Alcorao define piedade como fe em Deus E servico aos necessitados.',
    bridgeInsight: 'Jesus resume tudo em dois mandamentos: Deus e proximo. O Alcorao define piedade como fe em Deus expressa em cuidado pelo vulneravel.'
  },
  {
    id: 'vm-100',
    bibleVerse: { reference: 'Apocalipse 21:3-4', text: 'Ouvi uma forte voz que vinha do trono e dizia: Eis o tabernaculo de Deus com os homens. Deus habitara com eles. Eles serao os Seus povos; o proprio Deus estara com eles e sera o seu Deus. Ele enxugara dos seus olhos toda lagrima. Nao havera mais morte, nem tristeza, nem choro, nem dor.', book: 'Apocalipse', chapter: 21, verse: 3 },
    relatedQuranVerses: [
      { reference: 'Surah Ar-Rahman 55:46-50', arabic: 'وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ', translation: 'E para quem temeu a posicao de seu Senhor havera dois jardins. Qual das gracas do vosso Senhor negareis?', relationship: 'reframes' }
    ],
    scholarContext: 'A visao final de um paraiso sem dor e a promessa dos jardins eternos sao o ponto culminante escatologico de ambas as escrituras.',
    bridgeInsight: 'Apocalipse promete: nao havera mais lagrimas. O Alcorao promete: jardins para quem temeu seu Senhor. O destino final e a paz eterna com Deus.'
  }
]