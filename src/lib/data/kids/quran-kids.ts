export interface SurahKids {
  id: number
  number: number
  name: string
  arabicName: string
  emoji: string
  color: string
  meaning: string
  versesCount: number
  verses: {
    number: number
    arabic: string
    transliteration: string
    translation: string
  }[]
  lesson: string
}

export const quranKids: SurahKids[] = [
  {
    id: 1,
    number: 1,
    name: 'Al-Fatiha',
    arabicName: 'الفاتحة',
    emoji: '📖',
    color: '#FF8C42',
    meaning: 'A Abertura',
    versesCount: 7,
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismillahir-Rahmanir-Raheem',
        translation: 'Em nome de Allah, o Misericordioso, o Compassivo.',
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        transliteration: 'Alhamdu lillahi Rabbil-\'aalameen',
        translation: 'Louvado seja Allah, Senhor de todos os mundos.',
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Ar-Rahmanir-Raheem',
        translation: 'O Misericordioso, o Compassivo.',
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        transliteration: 'Maliki yawmid-deen',
        translation: 'Soberano do Dia do Juízo.',
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een',
        translation: 'Só a Ti adoramos e só de Ti pedimos ajuda.',
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinas-siratal-mustaqeem',
        translation: 'Guia-nos ao caminho reto.',
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Siratal-latheena an\'amta \'alayhim, ghayril-maghdubi \'alayhim wa lad-daaalleen',
        translation: 'O caminho daqueles a quem agraciaste, não dos que incorreram em Tua ira, nem dos que se desviaram.',
      },
    ],
    lesson:
      'Al-Fatiha é a oração mais importante do Islam. Recitamos em cada rakah da oração. É como uma conversa direta com Allah!',
  },
  {
    id: 2,
    number: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    emoji: '💎',
    color: '#4ECDC4',
    meaning: 'A Sinceridade',
    versesCount: 4,
    verses: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        transliteration: 'Qul huwa Allahu ahad',
        translation: 'Dize: Ele é Allah, o Único.',
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        transliteration: 'Allahus-samad',
        translation: 'Allah, o Absoluto, a quem todos recorrem.',
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        transliteration: 'Lam yalid wa lam yulad',
        translation: 'Não gerou e não foi gerado.',
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        transliteration: 'Wa lam yakun lahu kufuwan ahad',
        translation: 'E ninguém é igual a Ele.',
      },
    ],
    lesson:
      'Esta surata nos ensina quem é Allah. Recitá-la é como ler um terço do Quran inteiro!',
  },
  {
    id: 3,
    number: 113,
    name: 'Al-Falaq',
    arabicName: 'الفلق',
    emoji: '🌅',
    color: '#45B7A0',
    meaning: 'O Amanhecer',
    versesCount: 5,
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        transliteration: 'Qul a\'udhu bi Rabbil-falaq',
        translation: 'Dize: Refugio-me no Senhor do amanhecer.',
      },
      {
        number: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        transliteration: 'Min sharri ma khalaq',
        translation: 'Do mal de tudo que Ele criou.',
      },
      {
        number: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min sharri ghasiqin idha waqab',
        translation: 'E do mal da escuridão quando se instala.',
      },
      {
        number: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min sharrin-naffathati fil-\'uqad',
        translation: 'E do mal das sopradoras de nós.',
      },
      {
        number: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min sharri hasidin idha hasad',
        translation: 'E do mal do invejoso quando inveja.',
      },
    ],
    lesson:
      'Quando sentir medo, recite esta surata! Allah nos protege de todo mal quando pedimos a Ele.',
  },
  {
    id: 4,
    number: 114,
    name: 'An-Nas',
    arabicName: 'الناس',
    emoji: '👥',
    color: '#A78BFA',
    meaning: 'As Pessoas',
    versesCount: 6,
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        transliteration: 'Qul a\'udhu bi Rabbin-nas',
        translation: 'Dize: Refugio-me no Senhor das pessoas.',
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Malikin-nas',
        translation: 'Soberano das pessoas.',
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilahin-nas',
        translation: 'Deus das pessoas.',
      },
      {
        number: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min sharril-waswasil-khannas',
        translation: 'Do mal do sussurrador que se esconde.',
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Alladhi yuwaswisu fi sudurin-nas',
        translation: 'Que sussurra no peito das pessoas.',
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nas',
        translation: 'Seja dos jinns ou das pessoas.',
      },
    ],
    lesson:
      'Esta surata é nossa proteção! Junto com Al-Falaq, recitamos antes de dormir para Allah nos proteger.',
  },
  {
    id: 5,
    number: 108,
    name: 'Al-Kawthar',
    arabicName: 'الكوثر',
    emoji: '🏞️',
    color: '#FFD93D',
    meaning: 'A Abundância',
    versesCount: 3,
    verses: [
      {
        number: 1,
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        transliteration: 'Inna a\'taynakal-kawthar',
        translation: 'Em verdade, concedemos-te a abundância (Al-Kawthar).',
      },
      {
        number: 2,
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        transliteration: 'Fasalli li Rabbika wanhar',
        translation: 'Então reza ao teu Senhor e faz o sacrifício.',
      },
      {
        number: 3,
        arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
        transliteration: 'Inna shani\'aka huwal-abtar',
        translation: 'Em verdade, quem te odeia é que ficará sem descendência.',
      },
    ],
    lesson:
      'Al-Kawthar é um rio no Paraíso que Allah prometeu ao Profeta Muhammad! É a surata mais curta do Quran.',
  },
  {
    id: 6,
    number: 103,
    name: 'Al-Asr',
    arabicName: 'العصر',
    emoji: '⏰',
    color: '#FF6B6B',
    meaning: 'O Tempo',
    versesCount: 3,
    verses: [
      {
        number: 1,
        arabic: 'وَالْعَصْرِ',
        transliteration: 'Wal-\'asr',
        translation: 'Pelo tempo!',
      },
      {
        number: 2,
        arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        transliteration: 'Innal-insana lafi khusr',
        translation: 'Em verdade, o ser humano está em perdição.',
      },
      {
        number: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        transliteration: 'Illal-latheena amanu wa \'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr',
        translation: 'Exceto os que creem, fazem o bem, recomendam-se mutuamente a verdade e recomendam-se mutuamente a paciência.',
      },
    ],
    lesson:
      'O tempo é precioso! Esta surata nos ensina que para não perder, precisamos: crer, fazer o bem, falar a verdade e ter paciência.',
  },
  {
    id: 7,
    number: 105,
    name: 'Al-Fil',
    arabicName: 'الفيل',
    emoji: '🐘',
    color: '#FF8C42',
    meaning: 'O Elefante',
    versesCount: 5,
    verses: [
      {
        number: 1,
        arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
        transliteration: 'Alam tara kayfa fa\'ala Rabbuka bi ashaabil-feel',
        translation: 'Não viste como teu Senhor lidou com o povo do elefante?',
      },
      {
        number: 2,
        arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ',
        transliteration: 'Alam yaj\'al kaydahum fi tadleel',
        translation: 'Não fez Ele com que o plano deles se perdesse?',
      },
      {
        number: 3,
        arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ',
        transliteration: 'Wa arsala \'alayhim tayran ababeel',
        translation: 'E enviou contra eles bandos de pássaros.',
      },
      {
        number: 4,
        arabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ',
        transliteration: 'Tarmeehim bihijaratin min sijjeel',
        translation: 'Que os apedrejavam com pedras de barro endurecido.',
      },
      {
        number: 5,
        arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ',
        transliteration: 'Faja\'alahum ka\'asfin ma\'kool',
        translation: 'Tornando-os como palha mastigada.',
      },
    ],
    lesson:
      'Allah protegeu a Kaaba de um exército com elefantes! Ninguém pode vencer Allah, não importa o quão forte pense que é.',
  },
  {
    id: 8,
    number: 111,
    name: 'Al-Masad',
    arabicName: 'المسد',
    emoji: '🔥',
    color: '#4ECDC4',
    meaning: 'As Fibras',
    versesCount: 5,
    verses: [
      {
        number: 1,
        arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
        transliteration: 'Tabbat yada Abi Lahabin wa tabb',
        translation: 'Que pereçam as mãos de Abu Lahab, e que pereça ele!',
      },
      {
        number: 2,
        arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
        transliteration: 'Ma aghna \'anhu maluhu wa ma kasab',
        translation: 'De nada lhe valeram suas riquezas e tudo que ganhou.',
      },
      {
        number: 3,
        arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
        transliteration: 'Sayasla naran dhata lahab',
        translation: 'Entrará num fogo de chamas ardentes.',
      },
      {
        number: 4,
        arabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
        transliteration: 'Wamra\'atuhu hammalatal-hatab',
        translation: 'E sua esposa, a carregadora de lenha.',
      },
      {
        number: 5,
        arabic: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
        transliteration: 'Fi jidiha hablun min masad',
        translation: 'Terá no pescoço uma corda de fibras.',
      },
    ],
    lesson:
      'Abu Lahab era tio do Profeta Muhammad mas lutou contra o Islam. Riqueza e poder não valem nada se a pessoa luta contra Allah.',
  },
  {
    id: 9,
    number: 110,
    name: 'An-Nasr',
    arabicName: 'النصر',
    emoji: '🏆',
    color: '#45B7A0',
    meaning: 'O Socorro',
    versesCount: 3,
    verses: [
      {
        number: 1,
        arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
        transliteration: 'Idha ja\'a nasrullahi wal-fath',
        translation: 'Quando vier o socorro de Allah e a vitória.',
      },
      {
        number: 2,
        arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
        transliteration: 'Wa ra\'aytan-nasa yadkhuluna fi dinillahi afwaja',
        translation: 'E vires as pessoas entrando na religião de Allah em multidões.',
      },
      {
        number: 3,
        arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
        transliteration: 'Fasabbih bihamdi Rabbika wastaghfirh, innahu kana tawwaba',
        translation: 'Então glorifica com louvor ao teu Senhor e pede-Lhe perdão. Ele é Indulgente.',
      },
    ],
    lesson:
      'Quando vencemos ou conseguimos algo bom, devemos agradecer a Allah e pedir perdão, não ficar orgulhosos.',
  },
  {
    id: 10,
    number: 109,
    name: 'Al-Kafirun',
    arabicName: 'الكافرون',
    emoji: '🚫',
    color: '#A78BFA',
    meaning: 'Os Descrentes',
    versesCount: 6,
    verses: [
      {
        number: 1,
        arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
        transliteration: 'Qul ya ayyuhal-kafirun',
        translation: 'Dize: Ó descrentes!',
      },
      {
        number: 2,
        arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        transliteration: 'La a\'budu ma ta\'budun',
        translation: 'Eu não adoro o que vós adorais.',
      },
      {
        number: 3,
        arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
        transliteration: 'Wa la antum \'abiduna ma a\'bud',
        translation: 'Nem vós adorais o que eu adoro.',
      },
      {
        number: 4,
        arabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
        transliteration: 'Wa la ana \'abidun ma \'abadtum',
        translation: 'E eu jamais adorarei o que vós adorais.',
      },
      {
        number: 5,
        arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
        transliteration: 'Wa la antum \'abiduna ma a\'bud',
        translation: 'Nem vós adorareis o que eu adoro.',
      },
      {
        number: 6,
        arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
        transliteration: 'Lakum dinukum wa liya deen',
        translation: 'Para vós a vossa religião, e para mim a minha.',
      },
    ],
    lesson:
      'Devemos respeitar as pessoas que pensam diferente de nós, mas nunca abandonar nossa fé. Cada um tem sua religião.',
  },
  {
    id: 11,
    number: 107,
    name: 'Al-Maun',
    arabicName: 'الماعون',
    emoji: '🤲',
    color: '#FFD93D',
    meaning: 'Os Utensílios',
    versesCount: 7,
    verses: [
      {
        number: 1,
        arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ',
        transliteration: 'Ara\'aytal-ladhi yukadhdhibu bid-deen',
        translation: 'Viste aquele que nega o Dia do Juízo?',
      },
      {
        number: 2,
        arabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ',
        transliteration: 'Fadhalikal-ladhi yadu\'\'ul-yateem',
        translation: 'Pois é ele quem maltrata o órfão.',
      },
      {
        number: 3,
        arabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ',
        transliteration: 'Wa la yahuddu \'ala ta\'amil-miskeen',
        translation: 'E não incentiva a alimentação do necessitado.',
      },
      {
        number: 4,
        arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ',
        transliteration: 'Fa waylul-lil-musalleen',
        translation: 'Ai daqueles que rezam.',
      },
      {
        number: 5,
        arabic: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ',
        transliteration: 'Alladhina hum \'an salatihim sahun',
        translation: 'Mas são negligentes com suas orações.',
      },
      {
        number: 6,
        arabic: 'الَّذِينَ هُمْ يُرَاءُونَ',
        transliteration: 'Alladhina hum yura\'un',
        translation: 'Aqueles que só fazem para serem vistos.',
      },
      {
        number: 7,
        arabic: 'وَيَمْنَعُونَ الْمَاعُونَ',
        transliteration: 'Wa yamna\'unal-ma\'un',
        translation: 'E recusam ajudar com as coisas simples.',
      },
    ],
    lesson:
      'Não basta só rezar — precisamos também ser gentis, ajudar os outros e compartilhar. A fé verdadeira se mostra nas ações!',
  },
  {
    id: 12,
    number: 106,
    name: 'Quraish',
    arabicName: 'قريش',
    emoji: '🐫',
    color: '#FF6B6B',
    meaning: 'Os Coraixitas',
    versesCount: 4,
    verses: [
      {
        number: 1,
        arabic: 'لِإِيلَافِ قُرَيْشٍ',
        transliteration: 'Li-ilafi Quraish',
        translation: 'Pela proteção dos Coraixitas.',
      },
      {
        number: 2,
        arabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ',
        transliteration: 'Ilafihim rihlatash-shita\'i was-sayf',
        translation: 'A proteção de suas viagens de inverno e de verão.',
      },
      {
        number: 3,
        arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ',
        transliteration: 'Fal-ya\'budu Rabba hadhal-bayt',
        translation: 'Que adorem o Senhor desta Casa (a Kaaba).',
      },
      {
        number: 4,
        arabic: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ',
        transliteration: 'Alladhi at\'amahum min ju\'in wa amanahum min khawf',
        translation: 'Que os alimentou contra a fome e os protegeu do medo.',
      },
    ],
    lesson:
      'Allah protegeu e alimentou a tribo dos Coraixitas. Devemos sempre agradecer a Allah pela comida e segurança que temos!',
  },
  {
    id: 13,
    number: 104,
    name: 'Al-Humazah',
    arabicName: 'الهمزة',
    emoji: '⚠️',
    color: '#FF8C42',
    meaning: 'O Difamador',
    versesCount: 9,
    verses: [
      {
        number: 1,
        arabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ',
        transliteration: 'Waylul-likulli humazatil-lumazah',
        translation: 'Ai de todo difamador e caluniador!',
      },
      {
        number: 2,
        arabic: 'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ',
        transliteration: 'Alladhi jama\'a malan wa \'addadah',
        translation: 'Que acumula riqueza e fica contando.',
      },
      {
        number: 3,
        arabic: 'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ',
        transliteration: 'Yahsabu anna malahu akhladah',
        translation: 'Pensando que sua riqueza o fará eterno.',
      },
      {
        number: 4,
        arabic: 'كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ',
        transliteration: 'Kalla, layunbadhanna fil-hutamah',
        translation: 'Não! Será lançado no Hutamah (fogo esmagador).',
      },
      {
        number: 5,
        arabic: 'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ',
        transliteration: 'Wa ma adraka mal-hutamah',
        translation: 'E o que te fará saber o que é o Hutamah?',
      },
      {
        number: 6,
        arabic: 'نَارُ اللَّهِ الْمُوقَدَةُ',
        transliteration: 'Narullahil-muqadah',
        translation: 'O fogo aceso de Allah.',
      },
      {
        number: 7,
        arabic: 'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ',
        transliteration: 'Allati tattali\'u \'alal-af\'idah',
        translation: 'Que penetra até os corações.',
      },
      {
        number: 8,
        arabic: 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ',
        transliteration: 'Innaha \'alayhim mu\'sadah',
        translation: 'Em verdade, será fechado sobre eles.',
      },
      {
        number: 9,
        arabic: 'فِي عَمَدٍ مُّمَدَّدَةٍ',
        transliteration: 'Fi \'amadin mumaddadah',
        translation: 'Em colunas estendidas.',
      },
    ],
    lesson:
      'Nunca devemos falar mal dos outros pelas costas nem zombar de ninguém. E dinheiro não é tudo na vida!',
  },
  {
    id: 14,
    number: 102,
    name: 'At-Takathur',
    arabicName: 'التكاثر',
    emoji: '💰',
    color: '#4ECDC4',
    meaning: 'A Competição',
    versesCount: 8,
    verses: [
      {
        number: 1,
        arabic: 'أَلْهَاكُمُ التَّكَاثُرُ',
        transliteration: 'Alhakumut-takathur',
        translation: 'A competição por acumular vos distraiu.',
      },
      {
        number: 2,
        arabic: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ',
        transliteration: 'Hatta zurtumul-maqabir',
        translation: 'Até que visitastes os túmulos.',
      },
      {
        number: 3,
        arabic: 'كَلَّا سَوْفَ تَعْلَمُونَ',
        transliteration: 'Kalla sawfa ta\'lamun',
        translation: 'Não! Logo sabereis!',
      },
      {
        number: 4,
        arabic: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ',
        transliteration: 'Thumma kalla sawfa ta\'lamun',
        translation: 'Novamente, não! Logo sabereis!',
      },
      {
        number: 5,
        arabic: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ',
        transliteration: 'Kalla law ta\'lamuna \'ilmal-yaqeen',
        translation: 'Não! Se soubésseis com certeza absoluta.',
      },
      {
        number: 6,
        arabic: 'لَتَرَوُنَّ الْجَحِيمَ',
        transliteration: 'Latarawunnal-jaheem',
        translation: 'Certamente veríeis o Inferno.',
      },
      {
        number: 7,
        arabic: 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ',
        transliteration: 'Thumma latarawunnaha \'aynal-yaqeen',
        translation: 'Depois o veríeis com olhos de certeza.',
      },
      {
        number: 8,
        arabic: 'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ',
        transliteration: 'Thumma latus\'alunna yawma\'idhin \'anin-na\'eem',
        translation: 'Depois, naquele dia, sereis perguntados sobre as bênçãos.',
      },
    ],
    lesson:
      'Não devemos ficar competindo para ter mais coisas. O mais importante não é ter muito, mas ser grato e fazer o bem!',
  },
  {
    id: 15,
    number: 101,
    name: 'Al-Qariah',
    arabicName: 'القارعة',
    emoji: '⚡',
    color: '#45B7A0',
    meaning: 'O Golpe',
    versesCount: 11,
    verses: [
      {
        number: 1,
        arabic: 'الْقَارِعَةُ',
        transliteration: 'Al-qari\'ah',
        translation: 'O Golpe!',
      },
      {
        number: 2,
        arabic: 'مَا الْقَارِعَةُ',
        transliteration: 'Mal-qari\'ah',
        translation: 'O que é o Golpe?',
      },
      {
        number: 3,
        arabic: 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ',
        transliteration: 'Wa ma adraka mal-qari\'ah',
        translation: 'E o que te fará saber o que é o Golpe?',
      },
      {
        number: 4,
        arabic: 'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ',
        transliteration: 'Yawma yakunun-nasu kal-farashil-mabthuth',
        translation: 'No dia em que as pessoas serão como mariposas espalhadas.',
      },
      {
        number: 5,
        arabic: 'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ',
        transliteration: 'Wa takunul-jibalu kal-\'ihnil-manfush',
        translation: 'E as montanhas serão como lã cardada.',
      },
      {
        number: 6,
        arabic: 'فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ',
        transliteration: 'Fa amma man thaqulat mawazinuh',
        translation: 'Quanto àquele cuja balança pesar (com boas ações).',
      },
      {
        number: 7,
        arabic: 'فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ',
        transliteration: 'Fa huwa fi \'ishatin radiyah',
        translation: 'Estará numa vida agradável.',
      },
      {
        number: 8,
        arabic: 'وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ',
        transliteration: 'Wa amma man khaffat mawazinuh',
        translation: 'Quanto àquele cuja balança for leve.',
      },
      {
        number: 9,
        arabic: 'فَأُمُّهُ هَاوِيَةٌ',
        transliteration: 'Fa ummahu hawiyah',
        translation: 'Sua morada será o abismo.',
      },
      {
        number: 10,
        arabic: 'وَمَا أَدْرَاكَ مَا هِيَهْ',
        transliteration: 'Wa ma adraka ma hiyah',
        translation: 'E o que te fará saber o que é?',
      },
      {
        number: 11,
        arabic: 'نَارٌ حَامِيَةٌ',
        transliteration: 'Narun hamiyah',
        translation: 'Um fogo escaldante.',
      },
    ],
    lesson:
      'No Dia do Juízo, nossas ações serão pesadas numa balança. Vamos encher nossa balança de boas ações todos os dias!',
  },
]
