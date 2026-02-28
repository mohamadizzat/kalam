export type HadithCategory =
  | 'fe'
  | 'carater'
  | 'relacoes'
  | 'conhecimento'
  | 'generosidade'
  | 'paciencia'
  | 'justica'
  | 'dua'

export type Hadith = {
  id: number
  arabic: string
  translation: string
  narrator: string
  source: string
  category: HadithCategory
}

export const hadithCategories: { id: HadithCategory; label: string; emoji: string }[] = [
  { id: 'fe', label: 'Fe', emoji: '\u2728' },
  { id: 'carater', label: 'Carater', emoji: '\u{1F331}' },
  { id: 'relacoes', label: 'Relacoes', emoji: '\u{1F91D}' },
  { id: 'conhecimento', label: 'Conhecimento', emoji: '\u{1F4D6}' },
  { id: 'generosidade', label: 'Generosidade', emoji: '\u{1F49B}' },
  { id: 'paciencia', label: 'Paciencia', emoji: '\u{1F54A}\uFE0F' },
  { id: 'justica', label: 'Justica', emoji: '\u2696\uFE0F' },
  { id: 'dua', label: 'Dua', emoji: '\u{1F64F}' },
]

export const hadiths: Hadith[] = [
  // ═══════════════════════════════════════════════════════
  // FE (Faith)
  // ═══════════════════════════════════════════════════════
  {
    id: 1,
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    translation: 'As acoes sao julgadas pelas intencoes, e cada pessoa tera apenas aquilo que intencionou.',
    narrator: 'Umar ibn al-Khattab',
    source: 'Sahih al-Bukhari 1, Sahih Muslim 1907',
    category: 'fe',
  },
  {
    id: 2,
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ',
    translation: 'Nenhum de vos sera verdadeiramente crente ate que eu seja mais amado para ele do que seu pai, seu filho e toda a humanidade.',
    narrator: 'Anas ibn Malik',
    source: 'Sahih al-Bukhari 15, Sahih Muslim 44',
    category: 'fe',
  },
  {
    id: 3,
    arabic: 'مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصًا دَخَلَ الْجَنَّةَ',
    translation: 'Quem disser "nao ha divindade alem de Deus" com sinceridade entrara no Paraiso.',
    narrator: 'Abu Dharr al-Ghifari',
    source: 'Sahih al-Bukhari 5827, Sahih Muslim 94',
    category: 'fe',
  },
  {
    id: 4,
    arabic: 'الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لَا إِلَهَ إِلَّا اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ',
    translation: 'A fe tem setenta e tantos ramos. O mais elevado e dizer "nao ha divindade alem de Deus". O mais baixo e remover um obstaculo do caminho. E o pudor e um ramo da fe.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 35',
    category: 'fe',
  },
  {
    id: 5,
    arabic: 'ذَاقَ طَعْمَ الإِيمَانِ مَنْ رَضِيَ بِاللَّهِ رَبًّا وَبِالإِسْلَامِ دِينًا وَبِمُحَمَّدٍ رَسُولًا',
    translation: 'Sentiu o sabor da fe aquele que se contentou com Deus como Senhor, com o Islam como modo de vida e com Muhammad como mensageiro.',
    narrator: 'Abbas ibn Abdul-Muttalib',
    source: 'Sahih Muslim 34',
    category: 'fe',
  },
  {
    id: 6,
    arabic: 'مَنْ أَحَبَّ لِقَاءَ اللَّهِ أَحَبَّ اللَّهُ لِقَاءَهُ، وَمَنْ كَرِهَ لِقَاءَ اللَّهِ كَرِهَ اللَّهُ لِقَاءَهُ',
    translation: 'Quem ama encontrar Deus, Deus ama encontra-lo. E quem detesta encontrar Deus, Deus detesta encontra-lo.',
    narrator: 'Aisha',
    source: 'Sahih al-Bukhari 6507, Sahih Muslim 2683',
    category: 'fe',
  },
  {
    id: 7,
    arabic: 'عَجَبًا لأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لأَحَدٍ إِلَّا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ',
    translation: 'Como e maravilhoso o caso do crente! Tudo o que lhe acontece e bom, e isso so se aplica ao crente. Se algo bom lhe acontece, ele agradece, e isso e bom para ele. Se algo ruim lhe acontece, ele tem paciencia, e isso e bom para ele.',
    narrator: 'Suhaib ar-Rumi',
    source: 'Sahih Muslim 2999',
    category: 'fe',
  },

  // ═══════════════════════════════════════════════════════
  // CARATER (Character)
  // ═══════════════════════════════════════════════════════
  {
    id: 8,
    arabic: 'إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلَاقًا',
    translation: 'Os mais amados por mim e os que estarao mais proximos de mim no Dia da Ressurreicao sao aqueles dentre vos com melhor carater.',
    narrator: 'Jabir ibn Abdullah',
    source: 'Sunan at-Tirmidhi 2018',
    category: 'carater',
  },
  {
    id: 9,
    arabic: 'إِنَّمَا بُعِثْتُ لأُتَمِّمَ صَالِحَ الأَخْلَاقِ',
    translation: 'Eu fui enviado apenas para aperfeicoar o bom carater.',
    narrator: 'Abu Hurairah',
    source: 'Musnad Ahmad 8939',
    category: 'carater',
  },
  {
    id: 10,
    arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
    translation: 'O forte nao e aquele que vence nas lutas. O verdadeiramente forte e aquele que controla a si mesmo nos momentos de raiva.',
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari 6114, Sahih Muslim 2609',
    category: 'carater',
  },
  {
    id: 11,
    arabic: 'اتَّقِ اللَّهِ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
    translation: 'Tenha consciencia de Deus onde quer que esteja. Faca seguir uma ma acao com uma boa para apaga-la. E trate as pessoas com bom carater.',
    narrator: 'Abu Dharr e Muadh ibn Jabal',
    source: 'Sunan at-Tirmidhi 1987',
    category: 'carater',
  },
  {
    id: 12,
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    translation: 'Quem cre em Deus e no Ultimo Dia, que diga o bem ou que se cale.',
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari 6018, Sahih Muslim 47',
    category: 'carater',
  },
  {
    id: 13,
    arabic: 'إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ',
    translation: 'Deus e gentil e ama a gentileza em todos os assuntos.',
    narrator: 'Aisha',
    source: 'Sahih al-Bukhari 6927, Sahih Muslim 2593',
    category: 'carater',
  },
  {
    id: 14,
    arabic: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ',
    translation: 'A caridade nao diminui a riqueza. Deus nao aumenta um servo que perdoa senao em honra. E ninguem se humilha perante Deus sem que Deus o eleve.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 2588',
    category: 'carater',
  },

  // ═══════════════════════════════════════════════════════
  // RELACOES (Relationships)
  // ═══════════════════════════════════════════════════════
  {
    id: 15,
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    translation: 'Nenhum de vos sera verdadeiramente crente ate que ame para seu irmao o que ama para si mesmo.',
    narrator: 'Anas ibn Malik',
    source: 'Sahih al-Bukhari 13, Sahih Muslim 45',
    category: 'relacoes',
  },
  {
    id: 16,
    arabic: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ، وَمَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ',
    translation: 'O muculman e irmao do muculman: nao o oprime nem o desampara. Quem atende a necessidade do seu irmao, Deus atendera a sua necessidade.',
    narrator: 'Abdullah ibn Umar',
    source: 'Sahih al-Bukhari 2442, Sahih Muslim 2580',
    category: 'relacoes',
  },
  {
    id: 17,
    arabic: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ بِالسَّهَرِ وَالْحُمَّى',
    translation: 'O exemplo dos crentes em seu amor mutuo, compaixao e empatia e como o de um corpo: quando um membro adoece, todo o corpo responde com insonia e febre.',
    narrator: 'Nu\'man ibn Bashir',
    source: 'Sahih al-Bukhari 6011, Sahih Muslim 2586',
    category: 'relacoes',
  },
  {
    id: 18,
    arabic: 'خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ، وَأَنَا خَيْرُكُمْ لأَهْلِي',
    translation: 'Os melhores dentre vos sao os melhores para suas familias. E eu sou o melhor de vos para minha familia.',
    narrator: 'Aisha',
    source: 'Sunan at-Tirmidhi 3895',
    category: 'relacoes',
  },
  {
    id: 19,
    arabic: 'مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ',
    translation: 'Quem nao tem misericordia com as pessoas, Deus nao tera misericordia com ele.',
    narrator: 'Jarir ibn Abdullah',
    source: 'Sahih al-Bukhari 7376, Sahih Muslim 2319',
    category: 'relacoes',
  },
  {
    id: 20,
    arabic: 'لَا تَبَاغَضُوا وَلَا تَحَاسَدُوا وَلَا تَدَابَرُوا وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا',
    translation: 'Nao se odeiem, nao se invejem, nao virem as costas uns para os outros. Sejam servos de Deus, como irmaos.',
    narrator: 'Anas ibn Malik',
    source: 'Sahih al-Bukhari 6065, Sahih Muslim 2559',
    category: 'relacoes',
  },
  {
    id: 21,
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    translation: 'Sorrir no rosto do seu irmao e uma caridade.',
    narrator: 'Abu Dharr',
    source: 'Sunan at-Tirmidhi 1956',
    category: 'relacoes',
  },

  // ═══════════════════════════════════════════════════════
  // CONHECIMENTO (Knowledge)
  // ═══════════════════════════════════════════════════════
  {
    id: 22,
    arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    translation: 'Buscar o conhecimento e uma obrigacao de todo muculman.',
    narrator: 'Anas ibn Malik',
    source: 'Sunan Ibn Majah 224',
    category: 'conhecimento',
  },
  {
    id: 23,
    arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
    translation: 'Quem trilhar um caminho em busca de conhecimento, Deus facilitara para ele um caminho para o Paraiso.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 2699',
    category: 'conhecimento',
  },
  {
    id: 24,
    arabic: 'بَلِّغُوا عَنِّي وَلَوْ آيَةً',
    translation: 'Transmitam de mim, mesmo que seja um unico versiculo.',
    narrator: 'Abdullah ibn Amr',
    source: 'Sahih al-Bukhari 3461',
    category: 'conhecimento',
  },
  {
    id: 25,
    arabic: 'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
    translation: 'Quando o ser humano morre, suas acoes cessam, exceto tres: caridade continua, conhecimento util ou um filho virtuoso que suplica por ele.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 1631',
    category: 'conhecimento',
  },
  {
    id: 26,
    arabic: 'الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ، فَحَيْثُ وَجَدَهَا فَهُوَ أَحَقُّ بِهَا',
    translation: 'A sabedoria e o objeto perdido do crente. Onde quer que a encontre, ele tem mais direito a ela.',
    narrator: 'Abu Hurairah',
    source: 'Sunan at-Tirmidhi 2687',
    category: 'conhecimento',
  },
  {
    id: 27,
    arabic: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
    translation: 'A quem Deus deseja o bem, Ele concede entendimento profundo da religiao.',
    narrator: 'Muawiyah ibn Abi Sufyan',
    source: 'Sahih al-Bukhari 71, Sahih Muslim 1037',
    category: 'conhecimento',
  },

  // ═══════════════════════════════════════════════════════
  // GENEROSIDADE (Generosity)
  // ═══════════════════════════════════════════════════════
  {
    id: 28,
    arabic: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى',
    translation: 'A mao que da e melhor do que a mao que recebe.',
    narrator: 'Abdullah ibn Umar',
    source: 'Sahih al-Bukhari 1427, Sahih Muslim 1033',
    category: 'generosidade',
  },
  {
    id: 29,
    arabic: 'مَنْ كَانَ مَعَهُ فَضْلُ ظَهْرٍ فَلْيَعُدْ بِهِ عَلَى مَنْ لَا ظَهْرَ لَهُ، وَمَنْ كَانَ لَهُ فَضْلٌ مِنْ زَادٍ فَلْيَعُدْ بِهِ عَلَى مَنْ لَا زَادَ لَهُ',
    translation: 'Quem tiver um animal de montaria extra, que o ofereca a quem nao tem. Quem tiver provisao extra, que a ofereca a quem nao tem provisao.',
    narrator: 'Abu Said al-Khudri',
    source: 'Sahih Muslim 1728',
    category: 'generosidade',
  },
  {
    id: 30,
    arabic: 'اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ',
    translation: 'Protejam-se do Fogo nem que seja com metade de uma tamara.',
    narrator: 'Adi ibn Hatim',
    source: 'Sahih al-Bukhari 1417, Sahih Muslim 1016',
    category: 'generosidade',
  },
  {
    id: 31,
    arabic: 'مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلَّا مَلَكَانِ يَنْزِلَانِ، فَيَقُولُ أَحَدُهُمَا اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا، وَيَقُولُ الآخَرُ اللَّهُمَّ أَعْطِ مُمْسِكًا تَلَفًا',
    translation: 'Nao ha dia em que os servos amanhecem sem que dois anjos descam. Um diz: "O Deus, recompense quem gasta." O outro diz: "O Deus, arruine quem retém."',
    narrator: 'Abu Hurairah',
    source: 'Sahih al-Bukhari 1442, Sahih Muslim 1010',
    category: 'generosidade',
  },
  {
    id: 32,
    arabic: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
    translation: 'Quem alivia um crente de uma aflicao deste mundo, Deus o aliviara de uma aflicao no Dia da Ressurreicao.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 2699',
    category: 'generosidade',
  },
  {
    id: 33,
    arabic: 'أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ',
    translation: 'As pessoas mais amadas por Deus sao aquelas que mais beneficiam os outros.',
    narrator: 'Abdullah ibn Umar',
    source: 'al-Mu\'jam al-Awsat at-Tabarani 6026',
    category: 'generosidade',
  },

  // ═══════════════════════════════════════════════════════
  // PACIENCIA (Patience)
  // ═══════════════════════════════════════════════════════
  {
    id: 34,
    arabic: 'وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ، وَأَنَّ الْفَرَجَ مَعَ الْكَرْبِ، وَأَنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Saiba que a vitoria vem com a paciencia, que o alivio vem com a aflicao, e que com a dificuldade vem a facilidade.',
    narrator: 'Abdullah ibn Abbas',
    source: 'Musnad Ahmad 2800, Sunan at-Tirmidhi 2516',
    category: 'paciencia',
  },
  {
    id: 35,
    arabic: 'إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى',
    translation: 'A verdadeira paciencia e no primeiro impacto.',
    narrator: 'Anas ibn Malik',
    source: 'Sahih al-Bukhari 1283, Sahih Muslim 926',
    category: 'paciencia',
  },
  {
    id: 36,
    arabic: 'مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ',
    translation: 'Nenhum cansaco, doenca, preocupacao, tristeza, dano ou angustia atinge o muculman — mesmo um espinho que o fere — sem que Deus apague por isso alguns de seus pecados.',
    narrator: 'Abu Hurairah e Abu Said al-Khudri',
    source: 'Sahih al-Bukhari 5641, Sahih Muslim 2573',
    category: 'paciencia',
  },
  {
    id: 37,
    arabic: 'مَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ',
    translation: 'Ninguem recebeu um presente melhor e mais vasto do que a paciencia.',
    narrator: 'Abu Said al-Khudri',
    source: 'Sahih al-Bukhari 1469, Sahih Muslim 1053',
    category: 'paciencia',
  },
  {
    id: 38,
    arabic: 'إِنَّ عِظَمَ الْجَزَاءِ مَعَ عِظَمِ الْبَلَاءِ، وَإِنَّ اللَّهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ، فَمَنْ رَضِيَ فَلَهُ الرِّضَا، وَمَنْ سَخِطَ فَلَهُ السَّخَطُ',
    translation: 'A grandeza da recompensa vem com a grandeza da provacao. Quando Deus ama um povo, Ele os testa. Quem se contenta tera contentamento. Quem se revolta tera revolta.',
    narrator: 'Anas ibn Malik',
    source: 'Sunan at-Tirmidhi 2396, Sunan Ibn Majah 4031',
    category: 'paciencia',
  },
  {
    id: 39,
    arabic: 'الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ، وَفِي كُلٍّ خَيْرٌ',
    translation: 'O crente forte e melhor e mais amado por Deus do que o crente fraco, embora em ambos haja bem.',
    narrator: 'Abu Hurairah',
    source: 'Sahih Muslim 2664',
    category: 'paciencia',
  },

  // ═══════════════════════════════════════════════════════
  // JUSTICA (Justice)
  // ═══════════════════════════════════════════════════════
  {
    id: 40,
    arabic: 'إِنَّ الْمُقْسِطِينَ عِنْدَ اللَّهِ عَلَى مَنَابِرَ مِنْ نُورٍ، الَّذِينَ يَعْدِلُونَ فِي حُكْمِهِمْ وَأَهْلِيهِمْ وَمَا وُلُّوا',
    translation: 'Os justos estarao perante Deus em pulpitos de luz: aqueles que sao justos em seus julgamentos, com suas familias e em tudo que lhes e confiado.',
    narrator: 'Abdullah ibn Amr',
    source: 'Sahih Muslim 1827',
    category: 'justica',
  },
  {
    id: 41,
    arabic: 'انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا. قَالُوا: يَا رَسُولَ اللَّهِ، هَذَا نَنْصُرُهُ مَظْلُومًا، فَكَيْفَ نَنْصُرُهُ ظَالِمًا؟ قَالَ: تَحْجُزُهُ عَنِ الظُّلْمِ، فَإِنَّ ذَلِكَ نَصْرُهُ',
    translation: 'Ajude seu irmao, seja ele opressor ou oprimido. Disseram: "O Mensageiro de Deus, ajuda-lo quando oprimido entendemos, mas como ajuda-lo quando opressor?" Ele disse: "Impedindo-o de oprimir. Isso e ajuda-lo."',
    narrator: 'Anas ibn Malik',
    source: 'Sahih al-Bukhari 2444',
    category: 'justica',
  },
  {
    id: 42,
    arabic: 'اتَّقُوا الظُّلْمَ، فَإِنَّ الظُّلْمَ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ',
    translation: 'Temam a injustica, pois a injustica sera trevas no Dia da Ressurreicao.',
    narrator: 'Abdullah ibn Umar',
    source: 'Sahih Muslim 2578',
    category: 'justica',
  },
  {
    id: 43,
    arabic: 'كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ',
    translation: 'Todos vos sois pastores, e todos vos sereis questionados sobre seus rebanhos.',
    narrator: 'Abdullah ibn Umar',
    source: 'Sahih al-Bukhari 893, Sahih Muslim 1829',
    category: 'justica',
  },
  {
    id: 44,
    arabic: 'مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الإِيمَانِ',
    translation: 'Quem de vos vir algo errado, que o mude com a mao. Se nao puder, com a lingua. Se nao puder, com o coracao — e essa e a forma mais fraca de fe.',
    narrator: 'Abu Said al-Khudri',
    source: 'Sahih Muslim 49',
    category: 'justica',
  },
  {
    id: 45,
    arabic: 'لَا ضَرَرَ وَلَا ضِرَارَ',
    translation: 'Nao se deve causar dano nem retribuir dano com dano.',
    narrator: 'Abu Said al-Khudri',
    source: 'Sunan Ibn Majah 2340, Musnad Ahmad 2865',
    category: 'justica',
  },

  // ═══════════════════════════════════════════════════════
  // DUA (Supplication)
  // ═══════════════════════════════════════════════════════
  {
    id: 46,
    arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
    translation: 'A suplica e a essencia da adoracao.',
    narrator: 'Nu\'man ibn Bashir',
    source: 'Sunan at-Tirmidhi 3372, Sunan Abu Dawud 1479',
    category: 'dua',
  },
  {
    id: 47,
    arabic: 'إِنَّ اللَّهَ حَيِيٌّ كَرِيمٌ يَسْتَحْيِي إِذَا رَفَعَ الرَّجُلُ إِلَيْهِ يَدَيْهِ أَنْ يَرُدَّهُمَا صِفْرًا خَائِبَتَيْنِ',
    translation: 'Deus e modesto e generoso. Ele tem pudor quando Seu servo levanta as maos para Ele de devolve-las vazias e sem resposta.',
    narrator: 'Salman al-Farisi',
    source: 'Sunan at-Tirmidhi 3556, Sunan Abu Dawud 1488',
    category: 'dua',
  },
  {
    id: 48,
    arabic: 'ادْعُوا اللَّهَ وَأَنْتُمْ مُوقِنُونَ بِالإِجَابَةِ',
    translation: 'Supliquem a Deus com certeza de que serao atendidos.',
    narrator: 'Abu Hurairah',
    source: 'Sunan at-Tirmidhi 3479',
    category: 'dua',
  },
  {
    id: 49,
    arabic: 'دَعْوَةُ الْمَظْلُومِ لَيْسَ بَيْنَهَا وَبَيْنَ اللَّهِ حِجَابٌ',
    translation: 'A suplica do oprimido nao tem barreira entre ela e Deus.',
    narrator: 'Abdullah ibn Abbas',
    source: 'Sahih al-Bukhari 1496, Sahih Muslim 19',
    category: 'dua',
  },
  {
    id: 50,
    arabic: 'مَا مِنْ مُسْلِمٍ يَدْعُو بِدَعْوَةٍ لَيْسَ فِيهَا إِثْمٌ وَلَا قَطِيعَةُ رَحِمٍ إِلَّا أَعْطَاهُ اللَّهُ بِهَا إِحْدَى ثَلَاثٍ: إِمَّا أَنْ تُعَجَّلَ لَهُ دَعْوَتُهُ، وَإِمَّا أَنْ يَدَّخِرَهَا لَهُ فِي الآخِرَةِ، وَإِمَّا أَنْ يَصْرِفَ عَنْهُ مِنَ السُّوءِ مِثْلَهَا',
    translation: 'Nenhum muculman faz uma suplica que nao contenha pecado nem ruptura de lacos familiares sem que Deus lhe conceda uma de tres coisas: ou atende seu pedido imediatamente, ou o guarda para ele na outra vida, ou afasta dele um mal equivalente.',
    narrator: 'Abu Said al-Khudri',
    source: 'Musnad Ahmad 11133',
    category: 'dua',
  },
]
