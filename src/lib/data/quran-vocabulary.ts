export interface QuranWord {
  arabic: string
  transliteration: string
  meaning: string
  frequency: number
  exampleRef: string
  exampleArabic: string
  exampleTranslation: string
}

export interface Lesson {
  id: number
  title: string
  words: QuranWord[]
}

export const TOTAL_LESSONS = 60
export const TOTAL_WORDS = 300

export const QURAN_VOCABULARY: Lesson[] = [
  {
    id: 1,
    title: 'Palavras Essenciais — Deus, Senhor, Livro',
    words: [
      { arabic: 'ٱللَّه', transliteration: 'Allah', meaning: 'Deus', frequency: 2699, exampleRef: '1:1', exampleArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', exampleTranslation: 'Em nome de Deus, o Clemente, o Misericordioso' },
      { arabic: 'رَبّ', transliteration: 'Rabb', meaning: 'Senhor', frequency: 970, exampleRef: '1:2', exampleArabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', exampleTranslation: 'Louvado seja Deus, Senhor dos mundos' },
      { arabic: 'كِتَاب', transliteration: 'Kitab', meaning: 'Livro', frequency: 319, exampleRef: '2:2', exampleArabic: 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ فِيهِ', exampleTranslation: 'Este é o Livro em que não há dúvida' },
      { arabic: 'يَوْم', transliteration: 'Yawm', meaning: 'Dia', frequency: 405, exampleRef: '1:4', exampleArabic: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ', exampleTranslation: 'Soberano do Dia do Juízo' },
      { arabic: 'نَاس', transliteration: 'Nas', meaning: 'Pessoas / Humanidade', frequency: 241, exampleRef: '114:1', exampleArabic: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ', exampleTranslation: 'Dize: Refugio-me no Senhor da humanidade' },
    ],
  },
  {
    id: 2,
    title: 'Terra, Céu, Coração, Luz, Verdade',
    words: [
      { arabic: 'أَرْض', transliteration: 'Ard', meaning: 'Terra', frequency: 461, exampleRef: '2:22', exampleArabic: 'ٱلَّذِي جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَاشًا', exampleTranslation: 'Aquele que fez da terra um leito para vós' },
      { arabic: 'سَمَاء', transliteration: 'Sama', meaning: 'Céu', frequency: 310, exampleRef: '2:22', exampleArabic: 'وَٱلسَّمَاءَ بِنَاءً', exampleTranslation: 'E o céu como uma edificação' },
      { arabic: 'قَلْب', transliteration: 'Qalb', meaning: 'Coração', frequency: 168, exampleRef: '2:10', exampleArabic: 'فِي قُلُوبِهِم مَّرَضٌ', exampleTranslation: 'Em seus corações há uma doença' },
      { arabic: 'نُور', transliteration: 'Noor', meaning: 'Luz', frequency: 49, exampleRef: '24:35', exampleArabic: 'ٱللَّهُ نُورُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ', exampleTranslation: 'Deus é a Luz dos céus e da terra' },
      { arabic: 'حَقّ', transliteration: 'Haqq', meaning: 'Verdade', frequency: 287, exampleRef: '2:26', exampleArabic: 'أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ', exampleTranslation: 'Que é a verdade vinda de seu Senhor' },
    ],
  },
  {
    id: 3,
    title: 'Conhecimento, Religião, Vida, Morte, Alma',
    words: [
      { arabic: 'عِلْم', transliteration: 'Ilm', meaning: 'Conhecimento', frequency: 105, exampleRef: '20:114', exampleArabic: 'رَّبِّ زِدْنِي عِلْمًا', exampleTranslation: 'Senhor meu, aumenta-me em conhecimento' },
      { arabic: 'دِين', transliteration: 'Deen', meaning: 'Religião / Modo de vida', frequency: 101, exampleRef: '109:6', exampleArabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', exampleTranslation: 'Para vós a vossa religião, e para mim a minha' },
      { arabic: 'حَيَاة', transliteration: 'Hayat', meaning: 'Vida', frequency: 76, exampleRef: '2:86', exampleArabic: 'أَحْرَصَ ٱلنَّاسِ عَلَىٰ حَيَوٰةٍ', exampleTranslation: 'Os mais ávidos pela vida entre as pessoas' },
      { arabic: 'مَوْت', transliteration: 'Mawt', meaning: 'Morte', frequency: 165, exampleRef: '3:185', exampleArabic: 'كُلُّ نَفْسٍ ذَائِقَةُ ٱلْمَوْتِ', exampleTranslation: 'Toda alma provará a morte' },
      { arabic: 'نَفْس', transliteration: 'Nafs', meaning: 'Alma / Ser', frequency: 298, exampleRef: '91:7', exampleArabic: 'وَنَفْسٍ وَمَا سَوَّىٰهَا', exampleTranslation: 'E pela alma e por Quem a moldou' },
    ],
  },
  {
    id: 4,
    title: 'Nomes Divinos — Misericordioso, Rei, Santo, Paz',
    words: [
      { arabic: 'رَحْمَـٰن', transliteration: 'Rahman', meaning: 'O Clemente', frequency: 57, exampleRef: '1:1', exampleArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ', exampleTranslation: 'Em nome de Deus, o Clemente' },
      { arabic: 'رَحِيم', transliteration: 'Rahim', meaning: 'O Misericordioso', frequency: 114, exampleRef: '1:1', exampleArabic: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', exampleTranslation: 'O Clemente, o Misericordioso' },
      { arabic: 'مَلِك', transliteration: 'Malik', meaning: 'Rei / Soberano', frequency: 51, exampleRef: '59:23', exampleArabic: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَـٰمُ', exampleTranslation: 'O Rei, o Santo, a Paz' },
      { arabic: 'قُدُّوس', transliteration: 'Quddus', meaning: 'O Santo', frequency: 2, exampleRef: '59:23', exampleArabic: 'هُوَ ٱللَّهُ ٱلْمَلِكُ ٱلْقُدُّوسُ', exampleTranslation: 'Ele é Deus, o Rei, o Santo' },
      { arabic: 'سَلَام', transliteration: 'Salam', meaning: 'Paz', frequency: 42, exampleRef: '36:58', exampleArabic: 'سَلَـٰمٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ', exampleTranslation: 'Paz! Palavra de um Senhor Misericordioso' },
    ],
  },
  {
    id: 5,
    title: 'Paraíso, Fogo, Anjo, Profeta, Mensageiro',
    words: [
      { arabic: 'جَنَّة', transliteration: 'Jannah', meaning: 'Paraíso / Jardim', frequency: 147, exampleRef: '2:35', exampleArabic: 'ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ', exampleTranslation: 'Habita tu e tua esposa no Paraíso' },
      { arabic: 'نَار', transliteration: 'Naar', meaning: 'Fogo / Inferno', frequency: 145, exampleRef: '2:24', exampleArabic: 'فَٱتَّقُوا ٱلنَّارَ ٱلَّتِي وَقُودُهَا ٱلنَّاسُ', exampleTranslation: 'Temei o Fogo cujo combustível são as pessoas' },
      { arabic: 'مَلَك', transliteration: 'Malak', meaning: 'Anjo', frequency: 88, exampleRef: '2:30', exampleArabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰئِكَةِ', exampleTranslation: 'E quando teu Senhor disse aos anjos' },
      { arabic: 'نَبِيّ', transliteration: 'Nabi', meaning: 'Profeta', frequency: 75, exampleRef: '33:40', exampleArabic: 'وَخَاتَمَ ٱلنَّبِيِّـۧنَ', exampleTranslation: 'E o selo dos profetas' },
      { arabic: 'رَسُول', transliteration: 'Rasul', meaning: 'Mensageiro', frequency: 332, exampleRef: '3:144', exampleArabic: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ', exampleTranslation: 'E Muhammad não é senão um mensageiro' },
    ],
  },
  {
    id: 6,
    title: 'Pilares — Oração, Jejum, Caridade, Peregrinação, Fé',
    words: [
      { arabic: 'صَلَاة', transliteration: 'Salah', meaning: 'Oração', frequency: 99, exampleRef: '2:43', exampleArabic: 'وَأَقِيمُوا ٱلصَّلَوٰةَ وَآتُوا ٱلزَّكَوٰةَ', exampleTranslation: 'E observai a oração e pagai o zakat' },
      { arabic: 'صَوْم', transliteration: 'Sawm', meaning: 'Jejum', frequency: 13, exampleRef: '2:183', exampleArabic: 'كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ', exampleTranslation: 'Prescrito está para vós o jejum' },
      { arabic: 'زَكَاة', transliteration: 'Zakat', meaning: 'Zakat / Caridade obrigatória', frequency: 32, exampleRef: '2:43', exampleArabic: 'وَآتُوا ٱلزَّكَوٰةَ وَٱرْكَعُوا', exampleTranslation: 'E pagai o zakat e inclinai-vos' },
      { arabic: 'حَجّ', transliteration: 'Hajj', meaning: 'Peregrinação', frequency: 12, exampleRef: '3:97', exampleArabic: 'وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ', exampleTranslation: 'E é dever para com Deus a peregrinação à Casa' },
      { arabic: 'إِيمَان', transliteration: 'Iman', meaning: 'Fé', frequency: 45, exampleRef: '49:7', exampleArabic: 'وَلَـٰكِنَّ ٱللَّهَ حَبَّبَ إِلَيْكُمُ ٱلْإِيمَـٰنَ', exampleTranslation: 'Mas Deus vos fez amar a fé' },
    ],
  },
  {
    id: 7,
    title: 'Virtudes — Arrependimento, Paciência, Gratidão, Taqwa, Excelência',
    words: [
      { arabic: 'تَوْبَة', transliteration: 'Tawba', meaning: 'Arrependimento', frequency: 17, exampleRef: '9:104', exampleArabic: 'أَنَّ ٱللَّهَ هُوَ يَقْبَلُ ٱلتَّوْبَةَ', exampleTranslation: 'Que Deus é Quem aceita o arrependimento' },
      { arabic: 'صَبْر', transliteration: 'Sabr', meaning: 'Paciência', frequency: 103, exampleRef: '2:153', exampleArabic: 'إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ', exampleTranslation: 'De fato, Deus está com os pacientes' },
      { arabic: 'شُكْر', transliteration: 'Shukr', meaning: 'Gratidão', frequency: 75, exampleRef: '14:7', exampleArabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', exampleTranslation: 'Se fordes gratos, certamente vos aumentarei' },
      { arabic: 'تَقْوَىٰ', transliteration: 'Taqwa', meaning: 'Consciência de Deus', frequency: 258, exampleRef: '2:197', exampleArabic: 'وَتَزَوَّدُوا فَإِنَّ خَيْرَ ٱلزَّادِ ٱلتَّقْوَىٰ', exampleTranslation: 'E provisionai-vos, pois a melhor provisão é a consciência de Deus' },
      { arabic: 'إِحْسَان', transliteration: 'Ihsan', meaning: 'Excelência / Benevolência', frequency: 12, exampleRef: '16:90', exampleArabic: 'إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَـٰنِ', exampleTranslation: 'De fato, Deus ordena a justiça e a excelência' },
    ],
  },
  {
    id: 8,
    title: 'Devoção — Súplica, Lembrança, Adoração, Orientação, Sustento',
    words: [
      { arabic: 'دُعَاء', transliteration: 'Dua', meaning: 'Súplica / Invocação', frequency: 22, exampleRef: '40:60', exampleArabic: 'ٱدْعُونِي أَسْتَجِبْ لَكُمْ', exampleTranslation: 'Invocai-Me que vos responderei' },
      { arabic: 'ذِكْر', transliteration: 'Dhikr', meaning: 'Lembrança / Menção', frequency: 292, exampleRef: '13:28', exampleArabic: 'أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ', exampleTranslation: 'Não é com a lembrança de Deus que os corações se tranquilizam?' },
      { arabic: 'عِبَادَة', transliteration: 'Ibadah', meaning: 'Adoração', frequency: 275, exampleRef: '51:56', exampleArabic: 'وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ', exampleTranslation: 'E não criei os jinns e os humanos senão para Me adorarem' },
      { arabic: 'هِدَايَة', transliteration: 'Hidayah', meaning: 'Orientação / Guia', frequency: 316, exampleRef: '1:6', exampleArabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', exampleTranslation: 'Guia-nos ao caminho reto' },
      { arabic: 'رِزْق', transliteration: 'Rizq', meaning: 'Sustento / Provisão', frequency: 123, exampleRef: '2:3', exampleArabic: 'وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ', exampleTranslation: 'E do que lhes provemos, despendem' },
    ],
  },
  {
    id: 9,
    title: 'Comunidade — Ummah, Califa, Provação, Convite, Sunnah',
    words: [
      { arabic: 'أُمَّة', transliteration: 'Ummah', meaning: 'Comunidade / Nação', frequency: 64, exampleRef: '3:110', exampleArabic: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ', exampleTranslation: 'Sois a melhor comunidade erigida para a humanidade' },
      { arabic: 'خَلِيفَة', transliteration: 'Khalifah', meaning: 'Representante / Califa', frequency: 9, exampleRef: '2:30', exampleArabic: 'إِنِّي جَاعِلٌ فِي ٱلْأَرْضِ خَلِيفَةً', exampleTranslation: 'Vou designar na terra um representante' },
      { arabic: 'فِتْنَة', transliteration: 'Fitnah', meaning: 'Provação / Sedição', frequency: 60, exampleRef: '2:191', exampleArabic: 'وَٱلْفِتْنَةُ أَشَدُّ مِنَ ٱلْقَتْلِ', exampleTranslation: 'E a sedição é pior que o combate' },
      { arabic: 'دَعْوَة', transliteration: 'Dawah', meaning: 'Convite / Chamado', frequency: 46, exampleRef: '12:108', exampleArabic: 'هَـٰذِهِ سَبِيلِي أَدْعُو إِلَى ٱللَّهِ', exampleTranslation: 'Este é o meu caminho: convido a Deus' },
      { arabic: 'سُنَّة', transliteration: 'Sunnah', meaning: 'Prática / Tradição', frequency: 16, exampleRef: '33:62', exampleArabic: 'سُنَّةَ ٱللَّهِ فِي ٱلَّذِينَ خَلَوْا', exampleTranslation: 'Prática de Deus com os que passaram antes' },
    ],
  },
  {
    id: 10,
    title: 'Lícito, Proibido, Bênção, Misericórdia, Caridade',
    words: [
      { arabic: 'حَلَال', transliteration: 'Halal', meaning: 'Lícito / Permitido', frequency: 5, exampleRef: '2:168', exampleArabic: 'كُلُوا مِمَّا فِي ٱلْأَرْضِ حَلَـٰلًا طَيِّبًا', exampleTranslation: 'Comei do que há na terra, lícito e bom' },
      { arabic: 'حَرَام', transliteration: 'Haram', meaning: 'Proibido / Sagrado', frequency: 83, exampleRef: '5:3', exampleArabic: 'حُرِّمَتْ عَلَيْكُمُ ٱلْمَيْتَةُ', exampleTranslation: 'São-vos proibidos os animais mortos' },
      { arabic: 'بَرَكَة', transliteration: 'Barakah', meaning: 'Bênção', frequency: 32, exampleRef: '7:96', exampleArabic: 'لَفَتَحْنَا عَلَيْهِم بَرَكَـٰتٍ مِّنَ ٱلسَّمَاءِ', exampleTranslation: 'Teríamos aberto sobre eles bênçãos do céu' },
      { arabic: 'رَحْمَة', transliteration: 'Rahmah', meaning: 'Misericórdia', frequency: 114, exampleRef: '21:107', exampleArabic: 'وَمَا أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً لِّلْعَـٰلَمِينَ', exampleTranslation: 'E não te enviamos senão como misericórdia para os mundos' },
      { arabic: 'صَدَقَة', transliteration: 'Sadaqah', meaning: 'Caridade voluntária', frequency: 15, exampleRef: '2:271', exampleArabic: 'إِن تُبْدُوا ٱلصَّدَقَـٰتِ فَنِعِمَّا هِيَ', exampleTranslation: 'Se manifestardes as caridades, é excelente' },
    ],
  },
  {
    id: 11,
    title: 'Verbos Essenciais I — Disse, Creu, Soube, Foi, Veio',
    words: [
      { arabic: 'قَالَ', transliteration: 'Qala', meaning: 'Disse', frequency: 1618, exampleRef: '2:30', exampleArabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰئِكَةِ', exampleTranslation: 'E quando teu Senhor disse aos anjos' },
      { arabic: 'آمَنَ', transliteration: 'Amana', meaning: 'Creu / Acreditou', frequency: 811, exampleRef: '2:285', exampleArabic: 'آمَنَ ٱلرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ', exampleTranslation: 'Creu o Mensageiro no que lhe foi revelado' },
      { arabic: 'عَلِمَ', transliteration: 'Alima', meaning: 'Soube / Conheceu', frequency: 382, exampleRef: '2:77', exampleArabic: 'أَوَلَا يَعْلَمُونَ أَنَّ ٱللَّهَ يَعْلَمُ', exampleTranslation: 'Acaso não sabem que Deus sabe?' },
      { arabic: 'كَانَ', transliteration: 'Kana', meaning: 'Foi / Era / Estava', frequency: 1358, exampleRef: '4:11', exampleArabic: 'إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًا', exampleTranslation: 'De fato, Deus é Onisciente, Sábio' },
      { arabic: 'جَاءَ', transliteration: "Ja'a", meaning: 'Veio / Chegou', frequency: 278, exampleRef: '110:1', exampleArabic: 'إِذَا جَاءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ', exampleTranslation: 'Quando vier o socorro de Deus e a vitória' },
    ],
  },
  {
    id: 12,
    title: 'Verbos Essenciais II — Viu, Ouviu, Criou, Proveu, Guiou',
    words: [
      { arabic: 'رَأَىٰ', transliteration: "Ra'a", meaning: 'Viu', frequency: 271, exampleRef: '53:1', exampleArabic: 'مَا كَذَبَ ٱلْفُؤَادُ مَا رَأَىٰ', exampleTranslation: 'O coração não desmentiu o que viu' },
      { arabic: 'سَمِعَ', transliteration: "Sami'a", meaning: 'Ouviu', frequency: 185, exampleRef: '58:1', exampleArabic: 'قَدْ سَمِعَ ٱللَّهُ قَوْلَ ٱلَّتِي تُجَـٰدِلُكَ', exampleTranslation: 'Deus ouviu a palavra daquela que discute contigo' },
      { arabic: 'خَلَقَ', transliteration: 'Khalaqa', meaning: 'Criou', frequency: 261, exampleRef: '96:1', exampleArabic: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِي خَلَقَ', exampleTranslation: 'Lê em nome de teu Senhor que criou' },
      { arabic: 'رَزَقَ', transliteration: 'Razaqa', meaning: 'Proveu / Sustentou', frequency: 123, exampleRef: '2:22', exampleArabic: 'وَأَنزَلَ مِنَ ٱلسَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ ٱلثَّمَرَٰتِ رِزْقًا لَّكُمْ', exampleTranslation: 'E fez descer do céu água e extraiu com ela frutos como sustento para vós' },
      { arabic: 'هَدَىٰ', transliteration: 'Hadaa', meaning: 'Guiou', frequency: 316, exampleRef: '1:6', exampleArabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', exampleTranslation: 'Guia-nos ao caminho reto' },
    ],
  },
  {
    id: 13,
    title: 'Verbos Essenciais III — Quis, Fez, Revelou, Enviou, Abriu',
    words: [
      { arabic: 'أَرَادَ', transliteration: 'Arada', meaning: 'Quis / Desejou', frequency: 139, exampleRef: '36:82', exampleArabic: 'إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن', exampleTranslation: 'Quando quer algo, basta dizer-lhe: Sê!' },
      { arabic: 'جَعَلَ', transliteration: "Ja'ala", meaning: 'Fez / Tornou', frequency: 346, exampleRef: '21:30', exampleArabic: 'وَجَعَلْنَا مِنَ ٱلْمَاءِ كُلَّ شَيْءٍ حَيٍّ', exampleTranslation: 'E fizemos de água toda coisa viva' },
      { arabic: 'أَنزَلَ', transliteration: 'Anzala', meaning: 'Revelou / Fez descer', frequency: 295, exampleRef: '97:1', exampleArabic: 'إِنَّا أَنزَلْنَـٰهُ فِي لَيْلَةِ ٱلْقَدْرِ', exampleTranslation: 'Nós o revelamos na Noite do Decreto' },
      { arabic: 'أَرْسَلَ', transliteration: 'Arsala', meaning: 'Enviou', frequency: 190, exampleRef: '21:107', exampleArabic: 'وَمَا أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً', exampleTranslation: 'E não te enviamos senão como misericórdia' },
      { arabic: 'فَتَحَ', transliteration: 'Fataha', meaning: 'Abriu / Concedeu vitória', frequency: 38, exampleRef: '48:1', exampleArabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا', exampleTranslation: 'Nós te concedemos uma vitória evidente' },
    ],
  },
  {
    id: 14,
    title: 'Verbos Essenciais IV — Escreveu, Leu, Lembrou, Agradeceu, Pacienciou',
    words: [
      { arabic: 'كَتَبَ', transliteration: 'Kataba', meaning: 'Escreveu / Prescreveu', frequency: 68, exampleRef: '58:21', exampleArabic: 'كَتَبَ ٱللَّهُ لَأَغْلِبَنَّ أَنَا وَرُسُلِي', exampleTranslation: 'Deus prescreveu: Certamente vencerei, Eu e Meus mensageiros' },
      { arabic: 'قَرَأَ', transliteration: "Qara'a", meaning: 'Leu / Recitou', frequency: 88, exampleRef: '96:1', exampleArabic: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ', exampleTranslation: 'Lê em nome de teu Senhor' },
      { arabic: 'ذَكَرَ', transliteration: 'Dhakara', meaning: 'Lembrou / Mencionou', frequency: 292, exampleRef: '33:41', exampleArabic: 'وَٱذْكُرُوا ٱللَّهَ ذِكْرًا كَثِيرًا', exampleTranslation: 'E lembrai-vos de Deus com frequência' },
      { arabic: 'شَكَرَ', transliteration: 'Shakara', meaning: 'Agradeceu', frequency: 75, exampleRef: '31:12', exampleArabic: 'أَنِ ٱشْكُرْ لِلَّهِ', exampleTranslation: 'Que agradeças a Deus' },
      { arabic: 'صَبَرَ', transliteration: 'Sabara', meaning: 'Foi paciente / Perseverou', frequency: 103, exampleRef: '3:200', exampleArabic: 'ٱصْبِرُوا وَصَابِرُوا وَرَابِطُوا', exampleTranslation: 'Sede pacientes, perseverai e permanecei firmes' },
    ],
  },
  {
    id: 15,
    title: 'Verbos Essenciais V — Entrou, Saiu, Olhou, Encontrou, Tomou',
    words: [
      { arabic: 'دَخَلَ', transliteration: 'Dakhala', meaning: 'Entrou', frequency: 73, exampleRef: '12:58', exampleArabic: 'وَلَمَّا دَخَلُوا عَلَىٰ يُوسُفَ', exampleTranslation: 'E quando entraram na presença de José' },
      { arabic: 'خَرَجَ', transliteration: 'Kharaja', meaning: 'Saiu', frequency: 182, exampleRef: '28:21', exampleArabic: 'فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ', exampleTranslation: 'E saiu dela temeroso, cauteloso' },
      { arabic: 'نَظَرَ', transliteration: 'Nazara', meaning: 'Olhou / Observou', frequency: 129, exampleRef: '88:17', exampleArabic: 'أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ', exampleTranslation: 'Acaso não observam os camelos?' },
      { arabic: 'وَجَدَ', transliteration: 'Wajada', meaning: 'Encontrou', frequency: 107, exampleRef: '93:7', exampleArabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ', exampleTranslation: 'E te encontrou perdido e te guiou' },
      { arabic: 'أَخَذَ', transliteration: 'Akhadha', meaning: 'Tomou / Pegou', frequency: 273, exampleRef: '2:63', exampleArabic: 'خُذُوا مَا آتَيْنَـٰكُم بِقُوَّةٍ', exampleTranslation: 'Tomai o que vos demos com firmeza' },
    ],
  },
  {
    id: 16,
    title: 'Verbos Essenciais VI — Deu, Buscou, Calculou, Pensou, Perdoou',
    words: [
      { arabic: 'أَعْطَىٰ', transliteration: 'Ataa', meaning: 'Deu / Concedeu', frequency: 271, exampleRef: '108:1', exampleArabic: 'إِنَّا أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ', exampleTranslation: 'Nós te concedemos a abundância' },
      { arabic: 'طَلَبَ', transliteration: 'Talaba', meaning: 'Buscou / Pediu', frequency: 18, exampleRef: '20:15', exampleArabic: 'إِنَّ ٱلسَّاعَةَ آتِيَةٌ أَكَادُ أُخْفِيهَا', exampleTranslation: 'A Hora está chegando, quase a oculto' },
      { arabic: 'حَسِبَ', transliteration: 'Hasiba', meaning: 'Calculou / Supôs', frequency: 48, exampleRef: '29:2', exampleArabic: 'أَحَسِبَ ٱلنَّاسُ أَن يُتْرَكُوا', exampleTranslation: 'Supõem as pessoas que serão deixadas?' },
      { arabic: 'ظَنَّ', transliteration: 'Dhanna', meaning: 'Pensou / Conjecturou', frequency: 69, exampleRef: '2:46', exampleArabic: 'ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَـٰقُو رَبِّهِمْ', exampleTranslation: 'Aqueles que sabem que encontrarão seu Senhor' },
      { arabic: 'ٱسْتَغْفَرَ', transliteration: 'Istaghfara', meaning: 'Pediu perdão', frequency: 45, exampleRef: '71:10', exampleArabic: 'ٱسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا', exampleTranslation: 'Pedi perdão ao vosso Senhor, Ele é Indulgente' },
    ],
  },
  {
    id: 17,
    title: 'Verbos Essenciais VII — Amou, Temeu, Esperou, Ganhou, Submeteu-se',
    words: [
      { arabic: 'أَحَبَّ', transliteration: 'Ahabba', meaning: 'Amou', frequency: 95, exampleRef: '3:31', exampleArabic: 'قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ فَٱتَّبِعُونِي', exampleTranslation: 'Dize: Se amais a Deus, segui-me' },
      { arabic: 'خَافَ', transliteration: 'Khafa', meaning: 'Temeu', frequency: 124, exampleRef: '55:46', exampleArabic: 'وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ', exampleTranslation: 'E para quem temer a posição de seu Senhor, haverá dois jardins' },
      { arabic: 'رَجَا', transliteration: 'Raja', meaning: 'Esperou / Desejou', frequency: 28, exampleRef: '18:110', exampleArabic: 'فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ', exampleTranslation: 'Então quem espera o encontro com seu Senhor' },
      { arabic: 'كَسَبَ', transliteration: 'Kasaba', meaning: 'Ganhou / Adquiriu', frequency: 67, exampleRef: '2:286', exampleArabic: 'لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ', exampleTranslation: 'Para ela o que adquiriu e contra ela o que cometeu' },
      { arabic: 'أَسْلَمَ', transliteration: 'Aslama', meaning: 'Submeteu-se / Rendeu-se', frequency: 73, exampleRef: '2:131', exampleArabic: 'قَالَ أَسْلَمْتُ لِرَبِّ ٱلْعَـٰلَمِينَ', exampleTranslation: 'Disse: Submeti-me ao Senhor dos mundos' },
    ],
  },
  {
    id: 18,
    title: 'Verbos Essenciais VIII — Prostrou, Inclinou, Arrependeu, Perdoou, Ajudou',
    words: [
      { arabic: 'سَجَدَ', transliteration: 'Sajada', meaning: 'Prostrou-se', frequency: 92, exampleRef: '96:19', exampleArabic: 'وَٱسْجُدْ وَٱقْتَرِب', exampleTranslation: 'E prostra-te e aproxima-te' },
      { arabic: 'رَكَعَ', transliteration: "Raka'a", meaning: 'Inclinou-se', frequency: 13, exampleRef: '22:77', exampleArabic: 'ٱرْكَعُوا وَٱسْجُدُوا وَٱعْبُدُوا رَبَّكُمْ', exampleTranslation: 'Inclinai-vos, prostrai-vos e adorai vosso Senhor' },
      { arabic: 'تَابَ', transliteration: 'Taba', meaning: 'Arrependeu-se', frequency: 72, exampleRef: '9:118', exampleArabic: 'ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا', exampleTranslation: 'Depois voltou-Se para eles para que se arrependessem' },
      { arabic: 'غَفَرَ', transliteration: 'Ghafara', meaning: 'Perdoou', frequency: 234, exampleRef: '39:53', exampleArabic: 'إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا', exampleTranslation: 'De fato, Deus perdoa todos os pecados' },
      { arabic: 'نَصَرَ', transliteration: 'Nasara', meaning: 'Ajudou / Socorreu', frequency: 158, exampleRef: '110:1', exampleArabic: 'إِذَا جَاءَ نَصْرُ ٱللَّهِ', exampleTranslation: 'Quando vier o socorro de Deus' },
    ],
  },
  {
    id: 19,
    title: 'Partículas I — De, Para, Em, Sobre, Sobre',
    words: [
      { arabic: 'مِن', transliteration: 'Min', meaning: 'De / A partir de', frequency: 3226, exampleRef: '2:29', exampleArabic: 'هُوَ ٱلَّذِي خَلَقَ لَكُم مَّا فِي ٱلْأَرْضِ', exampleTranslation: 'Ele é Quem criou para vós o que há na terra' },
      { arabic: 'إِلَىٰ', transliteration: 'Ila', meaning: 'Para / Em direção a', frequency: 742, exampleRef: '96:8', exampleArabic: 'إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰ', exampleTranslation: 'De fato, a teu Senhor é o retorno' },
      { arabic: 'فِي', transliteration: 'Fi', meaning: 'Em / Dentro de', frequency: 2738, exampleRef: '2:2', exampleArabic: 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ فِيهِ', exampleTranslation: 'Este é o Livro em que não há dúvida' },
      { arabic: 'عَن', transliteration: 'An', meaning: 'Sobre / Acerca de', frequency: 660, exampleRef: '53:3', exampleArabic: 'وَمَا يَنطِقُ عَنِ ٱلْهَوَىٰ', exampleTranslation: 'E ele não fala por capricho' },
      { arabic: 'عَلَىٰ', transliteration: 'Ala', meaning: 'Sobre / Em cima de', frequency: 2194, exampleRef: '2:5', exampleArabic: 'أُولَـٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ', exampleTranslation: 'Estes estão sobre a orientação de seu Senhor' },
    ],
  },
  {
    id: 20,
    title: 'Partículas II — O que, Não, Certamente, Que, Quando',
    words: [
      { arabic: 'مَا', transliteration: 'Ma', meaning: 'O que / Não (negação)', frequency: 2465, exampleRef: '2:26', exampleArabic: 'مَاذَا أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًا', exampleTranslation: 'O que Deus quis com esta parábola?' },
      { arabic: 'لَا', transliteration: 'La', meaning: 'Não', frequency: 3930, exampleRef: '2:2', exampleArabic: 'لَا رَيْبَ فِيهِ', exampleTranslation: 'Não há dúvida nele' },
      { arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Certamente / De fato', frequency: 1604, exampleRef: '2:6', exampleArabic: 'إِنَّ ٱلَّذِينَ كَفَرُوا', exampleTranslation: 'De fato, aqueles que descreram' },
      { arabic: 'أَنَّ', transliteration: 'Anna', meaning: 'Que (conjunção)', frequency: 876, exampleRef: '2:26', exampleArabic: 'يَعْلَمُونَ أَنَّهُ ٱلْحَقُّ', exampleTranslation: 'Sabem que é a verdade' },
      { arabic: 'إِذَا', transliteration: 'Idha', meaning: 'Quando / Se', frequency: 409, exampleRef: '110:1', exampleArabic: 'إِذَا جَاءَ نَصْرُ ٱللَّهِ', exampleTranslation: 'Quando vier o socorro de Deus' },
    ],
  },
  {
    id: 21,
    title: 'Pronomes Relativos e Demonstrativos',
    words: [
      { arabic: 'ٱلَّذِي', transliteration: 'Alladhi', meaning: 'Que / O qual (masc.)', frequency: 1464, exampleRef: '2:22', exampleArabic: 'ٱلَّذِي جَعَلَ لَكُمُ ٱلْأَرْضَ', exampleTranslation: 'Aquele que fez para vós a terra' },
      { arabic: 'ٱلَّتِي', transliteration: 'Allati', meaning: 'Que / A qual (fem.)', frequency: 372, exampleRef: '2:24', exampleArabic: 'فَٱتَّقُوا ٱلنَّارَ ٱلَّتِي وَقُودُهَا ٱلنَّاسُ', exampleTranslation: 'Temei o Fogo cujo combustível são as pessoas' },
      { arabic: 'هَـٰذَا', transliteration: 'Hadha', meaning: 'Este / Isto', frequency: 169, exampleRef: '2:25', exampleArabic: 'هَـٰذَا ٱلَّذِي رُزِقْنَا مِن قَبْلُ', exampleTranslation: 'Isto é o que nos foi provido antes' },
      { arabic: 'ذَٰلِكَ', transliteration: 'Dhalika', meaning: 'Aquele / Aquilo', frequency: 530, exampleRef: '2:2', exampleArabic: 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ فِيهِ', exampleTranslation: 'Aquele é o Livro em que não há dúvida' },
      { arabic: 'كُلّ', transliteration: 'Kullu', meaning: 'Todo / Cada', frequency: 372, exampleRef: '3:185', exampleArabic: 'كُلُّ نَفْسٍ ذَائِقَةُ ٱلْمَوْتِ', exampleTranslation: 'Toda alma provará a morte' },
    ],
  },
  {
    id: 22,
    title: 'Preposições de Lugar e Tempo',
    words: [
      { arabic: 'بَيْنَ', transliteration: 'Bayna', meaning: 'Entre', frequency: 176, exampleRef: '8:63', exampleArabic: 'وَأَلَّفَ بَيْنَ قُلُوبِهِمْ', exampleTranslation: 'E uniu entre seus corações' },
      { arabic: 'قَبْلَ', transliteration: 'Qabla', meaning: 'Antes', frequency: 264, exampleRef: '30:4', exampleArabic: 'مِن قَبْلُ وَمِن بَعْدُ', exampleTranslation: 'Antes e depois' },
      { arabic: 'بَعْدَ', transliteration: "Ba'da", meaning: 'Depois', frequency: 197, exampleRef: '30:4', exampleArabic: 'وَمِن بَعْدُ لِلَّهِ ٱلْأَمْرُ', exampleTranslation: 'E depois, a Deus pertence o comando' },
      { arabic: 'فَوْقَ', transliteration: 'Fawqa', meaning: 'Acima / Sobre', frequency: 31, exampleRef: '2:228', exampleArabic: 'وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ', exampleTranslation: 'E os homens têm um grau sobre elas' },
      { arabic: 'تَحْتَ', transliteration: 'Tahta', meaning: 'Abaixo / Sob', frequency: 53, exampleRef: '19:24', exampleArabic: 'فَنَادَاهَا مِن تَحْتِهَا', exampleTranslation: 'E chamou-a de baixo dela' },
    ],
  },
  {
    id: 23,
    title: 'Interrogativos — Como, Por que, Onde, Quando, Quantos',
    words: [
      { arabic: 'كَيْفَ', transliteration: 'Kayfa', meaning: 'Como', frequency: 83, exampleRef: '88:17', exampleArabic: 'أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ', exampleTranslation: 'Acaso não observam os camelos, como foram criados?' },
      { arabic: 'لِمَاذَا', transliteration: 'Lima', meaning: 'Por que / Para quê', frequency: 72, exampleRef: '3:65', exampleArabic: 'لِمَ تُحَاجُّونَ فِي إِبْرَٰهِيمَ', exampleTranslation: 'Por que disputais sobre Abraão?' },
      { arabic: 'أَيْنَ', transliteration: 'Ayna', meaning: 'Onde', frequency: 25, exampleRef: '81:26', exampleArabic: 'فَأَيْنَ تَذْهَبُونَ', exampleTranslation: 'Então para onde ides?' },
      { arabic: 'مَتَىٰ', transliteration: 'Mata', meaning: 'Quando', frequency: 12, exampleRef: '2:214', exampleArabic: 'مَتَىٰ نَصْرُ ٱللَّهِ', exampleTranslation: 'Quando virá o socorro de Deus?' },
      { arabic: 'كَمْ', transliteration: 'Kam', meaning: 'Quantos / Quanto', frequency: 28, exampleRef: '2:211', exampleArabic: 'سَلْ بَنِي إِسْرَٰئِيلَ كَمْ آتَيْنَـٰهُم', exampleTranslation: 'Pergunta aos filhos de Israel quantos sinais lhes demos' },
    ],
  },
  {
    id: 24,
    title: 'Conjunções — E, Então, Depois, Ou, Mas',
    words: [
      { arabic: 'وَ', transliteration: 'Wa', meaning: 'E', frequency: 24043, exampleRef: '1:1', exampleArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ وَٱلرَّحِيمِ', exampleTranslation: 'Em nome de Deus, o Clemente e o Misericordioso' },
      { arabic: 'فَ', transliteration: 'Fa', meaning: 'Então / E então', frequency: 8408, exampleRef: '94:6', exampleArabic: 'إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا فَإِذَا فَرَغْتَ فَٱنصَبْ', exampleTranslation: 'Com a dificuldade há facilidade. Então quando terminares, esforça-te' },
      { arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Depois / Em seguida', frequency: 340, exampleRef: '2:28', exampleArabic: 'ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ', exampleTranslation: 'Depois vos faz morrer, depois vos dará vida' },
      { arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Ou', frequency: 280, exampleRef: '2:74', exampleArabic: 'أَوْ أَشَدُّ قَسْوَةً', exampleTranslation: 'Ou ainda mais duro' },
      { arabic: 'لَـٰكِنَّ', transliteration: 'Lakinna', meaning: 'Mas / Porém', frequency: 126, exampleRef: '2:12', exampleArabic: 'أَلَا إِنَّهُمْ هُمُ ٱلْمُفْسِدُونَ وَلَـٰكِن لَّا يَشْعُرُونَ', exampleTranslation: 'Não! São eles os corruptores, mas não percebem' },
    ],
  },
  {
    id: 25,
    title: 'Pronomes Pessoais',
    words: [
      { arabic: 'هُوَ', transliteration: 'Huwa', meaning: 'Ele', frequency: 592, exampleRef: '112:1', exampleArabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', exampleTranslation: 'Dize: Ele é Deus, o Único' },
      { arabic: 'هِيَ', transliteration: 'Hiya', meaning: 'Ela', frequency: 140, exampleRef: '2:137', exampleArabic: 'فَإِنَّمَا هُمْ فِي شِقَاقٍ', exampleTranslation: 'Então eles é que estão em dissensão' },
      { arabic: 'هُمْ', transliteration: 'Hum', meaning: 'Eles', frequency: 1928, exampleRef: '2:5', exampleArabic: 'وَأُولَـٰئِكَ هُمُ ٱلْمُفْلِحُونَ', exampleTranslation: 'E estes são os bem-sucedidos' },
      { arabic: 'نَحْنُ', transliteration: 'Nahnu', meaning: 'Nós', frequency: 188, exampleRef: '15:9', exampleArabic: 'إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ', exampleTranslation: 'Nós é que revelamos a Mensagem' },
      { arabic: 'أَنتُمْ', transliteration: 'Antum', meaning: 'Vós / Vocês', frequency: 312, exampleRef: '3:110', exampleArabic: 'كُنتُمْ خَيْرَ أُمَّةٍ', exampleTranslation: 'Sois a melhor comunidade' },
    ],
  },
  {
    id: 26,
    title: 'Natureza I — Sol, Lua, Mar, Montanha, Rio',
    words: [
      { arabic: 'شَمْس', transliteration: 'Shams', meaning: 'Sol', frequency: 33, exampleRef: '91:1', exampleArabic: 'وَٱلشَّمْسِ وَضُحَاهَا', exampleTranslation: 'Pelo sol e seu brilho' },
      { arabic: 'قَمَر', transliteration: 'Qamar', meaning: 'Lua', frequency: 27, exampleRef: '91:2', exampleArabic: 'وَٱلْقَمَرِ إِذَا تَلَاهَا', exampleTranslation: 'E pela lua quando o segue' },
      { arabic: 'بَحْر', transliteration: 'Bahr', meaning: 'Mar', frequency: 41, exampleRef: '55:19', exampleArabic: 'مَرَجَ ٱلْبَحْرَيْنِ يَلْتَقِيَانِ', exampleTranslation: 'Fez confluir os dois mares que se encontram' },
      { arabic: 'جَبَل', transliteration: 'Jabal', meaning: 'Montanha', frequency: 39, exampleRef: '7:143', exampleArabic: 'فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ جَعَلَهُ دَكًّا', exampleTranslation: 'E quando seu Senhor se manifestou à montanha, fê-la desmoronar' },
      { arabic: 'نَهْر', transliteration: 'Nahr', meaning: 'Rio', frequency: 54, exampleRef: '47:12', exampleArabic: 'جَنَّـٰتٍ تَجْرِي مِن تَحْتِهَا ٱلْأَنْهَـٰرُ', exampleTranslation: 'Jardins por onde correm rios' },
    ],
  },
  {
    id: 27,
    title: 'Corpo — Olho, Mão, Rosto, Ouvido, Peito',
    words: [
      { arabic: 'عَيْن', transliteration: 'Ayn', meaning: 'Olho / Fonte', frequency: 65, exampleRef: '54:14', exampleArabic: 'تَجْرِي بِأَعْيُنِنَا', exampleTranslation: 'Navegando sob Nossos olhos' },
      { arabic: 'يَد', transliteration: 'Yad', meaning: 'Mão', frequency: 120, exampleRef: '48:10', exampleArabic: 'يَدُ ٱللَّهِ فَوْقَ أَيْدِيهِمْ', exampleTranslation: 'A mão de Deus está acima das mãos deles' },
      { arabic: 'وَجْه', transliteration: 'Wajh', meaning: 'Rosto / Face', frequency: 72, exampleRef: '2:115', exampleArabic: 'فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ ٱللَّهِ', exampleTranslation: 'Para onde quer que vos volteis, lá está a Face de Deus' },
      { arabic: 'أُذُن', transliteration: 'Udhun', meaning: 'Ouvido', frequency: 18, exampleRef: '2:7', exampleArabic: 'وَعَلَىٰ سَمْعِهِمْ', exampleTranslation: 'E sobre seus ouvidos' },
      { arabic: 'صَدْر', transliteration: 'Sadr', meaning: 'Peito / Tórax', frequency: 44, exampleRef: '94:1', exampleArabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', exampleTranslation: 'Não expandimos teu peito?' },
    ],
  },
  {
    id: 28,
    title: 'Tempo — Noite, Dia, Hora, Ano, Mês',
    words: [
      { arabic: 'لَيْل', transliteration: 'Layl', meaning: 'Noite', frequency: 92, exampleRef: '92:1', exampleArabic: 'وَٱلَّيْلِ إِذَا يَغْشَىٰ', exampleTranslation: 'Pela noite quando encobre' },
      { arabic: 'نَهَار', transliteration: 'Nahar', meaning: 'Dia (período diurno)', frequency: 57, exampleRef: '3:27', exampleArabic: 'تُولِجُ ٱلَّيْلَ فِي ٱلنَّهَارِ', exampleTranslation: 'Fazes a noite penetrar no dia' },
      { arabic: 'سَاعَة', transliteration: "Sa'ah", meaning: 'Hora / A Hora (Juízo)', frequency: 48, exampleRef: '22:7', exampleArabic: 'وَأَنَّ ٱلسَّاعَةَ آتِيَةٌ', exampleTranslation: 'E que a Hora está chegando' },
      { arabic: 'سَنَة', transliteration: 'Sanah', meaning: 'Ano', frequency: 20, exampleRef: '29:14', exampleArabic: 'أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا', exampleTranslation: 'Mil anos menos cinquenta' },
      { arabic: 'شَهْر', transliteration: 'Shahr', meaning: 'Mês', frequency: 21, exampleRef: '2:185', exampleArabic: 'شَهْرُ رَمَضَانَ ٱلَّذِي أُنزِلَ فِيهِ ٱلْقُرْآنُ', exampleTranslation: 'O mês de Ramadã em que foi revelado o Alcorão' },
    ],
  },
  {
    id: 29,
    title: 'Família — Pai, Mãe, Filho, Filha, Irmão',
    words: [
      { arabic: 'أَب', transliteration: 'Ab', meaning: 'Pai', frequency: 117, exampleRef: '12:4', exampleArabic: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَـٰأَبَتِ', exampleTranslation: 'Quando José disse a seu pai: Ó meu pai!' },
      { arabic: 'أُمّ', transliteration: 'Umm', meaning: 'Mãe', frequency: 35, exampleRef: '28:7', exampleArabic: 'وَأَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ', exampleTranslation: 'E inspiramos à mãe de Moisés' },
      { arabic: 'ٱبْن', transliteration: 'Ibn', meaning: 'Filho', frequency: 162, exampleRef: '5:17', exampleArabic: 'إِنَّ ٱلْمَسِيحَ عِيسَى ٱبْنَ مَرْيَمَ', exampleTranslation: 'O Messias Jesus, filho de Maria' },
      { arabic: 'بِنْت', transliteration: 'Bint', meaning: 'Filha', frequency: 20, exampleRef: '66:12', exampleArabic: 'وَمَرْيَمَ ٱبْنَتَ عِمْرَٰنَ', exampleTranslation: 'E Maria, filha de Imran' },
      { arabic: 'أَخ', transliteration: 'Akh', meaning: 'Irmão', frequency: 96, exampleRef: '49:10', exampleArabic: 'إِنَّمَا ٱلْمُؤْمِنُونَ إِخْوَةٌ', exampleTranslation: 'Os crentes são apenas irmãos' },
    ],
  },
  {
    id: 30,
    title: 'Qualidades I — Grande, Pequeno, Novo, Antigo, Bom',
    words: [
      { arabic: 'كَبِير', transliteration: 'Kabir', meaning: 'Grande', frequency: 86, exampleRef: '2:45', exampleArabic: 'وَإِنَّهَا لَكَبِيرَةٌ', exampleTranslation: 'E certamente é difícil (grande)' },
      { arabic: 'صَغِير', transliteration: 'Saghir', meaning: 'Pequeno', frequency: 15, exampleRef: '18:49', exampleArabic: 'لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً', exampleTranslation: 'Não deixa pequena nem grande' },
      { arabic: 'جَدِيد', transliteration: 'Jadid', meaning: 'Novo', frequency: 7, exampleRef: '14:19', exampleArabic: 'وَيَأْتِ بِخَلْقٍ جَدِيدٍ', exampleTranslation: 'E trará uma criação nova' },
      { arabic: 'قَدِيم', transliteration: 'Qadim', meaning: 'Antigo', frequency: 5, exampleRef: '36:39', exampleArabic: 'حَتَّىٰ عَادَ كَٱلْعُرْجُونِ ٱلْقَدِيمِ', exampleTranslation: 'Até que voltou como o ramo de palmeira seco' },
      { arabic: 'حَسَن', transliteration: 'Hasan', meaning: 'Bom / Belo', frequency: 194, exampleRef: '33:21', exampleArabic: 'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ ٱللَّهِ أُسْوَةٌ حَسَنَةٌ', exampleTranslation: 'Tivestes no Mensageiro de Deus um belo exemplo' },
    ],
  },
  {
    id: 31,
    title: 'Qualidades II — Justo, Injusto, Confiável, Verdadeiro, Generoso',
    words: [
      { arabic: 'صَالِح', transliteration: 'Salih', meaning: 'Justo / Virtuoso', frequency: 63, exampleRef: '21:105', exampleArabic: 'أَنَّ ٱلْأَرْضَ يَرِثُهَا عِبَادِيَ ٱلصَّـٰلِحُونَ', exampleTranslation: 'Que a terra será herdada pelos Meus servos virtuosos' },
      { arabic: 'ظَالِم', transliteration: 'Dhalim', meaning: 'Injusto / Opressor', frequency: 289, exampleRef: '2:35', exampleArabic: 'فَتَكُونَا مِنَ ٱلظَّـٰلِمِينَ', exampleTranslation: 'Para que não sejais dos injustos' },
      { arabic: 'أَمِين', transliteration: 'Amin', meaning: 'Confiável / Fiel', frequency: 13, exampleRef: '26:107', exampleArabic: 'إِنِّي لَكُمْ رَسُولٌ أَمِينٌ', exampleTranslation: 'Sou para vós um mensageiro confiável' },
      { arabic: 'صَادِق', transliteration: 'Sadiq', meaning: 'Verdadeiro / Sincero', frequency: 54, exampleRef: '9:119', exampleArabic: 'وَكُونُوا مَعَ ٱلصَّـٰدِقِينَ', exampleTranslation: 'E estai com os verdadeiros' },
      { arabic: 'كَرِيم', transliteration: 'Karim', meaning: 'Generoso / Nobre', frequency: 27, exampleRef: '82:6', exampleArabic: 'مَا غَرَّكَ بِرَبِّكَ ٱلْكَرِيمِ', exampleTranslation: 'O que te iludiu acerca de teu Senhor Generoso?' },
    ],
  },
  {
    id: 32,
    title: 'Emoções — Medo, Amor, Raiva, Alegria, Tristeza',
    words: [
      { arabic: 'خَوْف', transliteration: 'Khawf', meaning: 'Medo', frequency: 124, exampleRef: '2:38', exampleArabic: 'فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', exampleTranslation: 'Não haverá temor sobre eles nem se entristecerão' },
      { arabic: 'حُبّ', transliteration: 'Hubb', meaning: 'Amor', frequency: 95, exampleRef: '3:31', exampleArabic: 'إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ', exampleTranslation: 'Se amais a Deus' },
      { arabic: 'غَضَب', transliteration: 'Ghadab', meaning: 'Raiva / Ira', frequency: 24, exampleRef: '1:7', exampleArabic: 'غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ', exampleTranslation: 'Não o dos que incorrem em ira' },
      { arabic: 'فَرَح', transliteration: 'Farah', meaning: 'Alegria', frequency: 23, exampleRef: '30:36', exampleArabic: 'وَإِذَا أَذَقْنَا ٱلنَّاسَ رَحْمَةً فَرِحُوا بِهَا', exampleTranslation: 'E quando fazemos as pessoas provarem misericórdia, alegram-se' },
      { arabic: 'حُزْن', transliteration: 'Huzn', meaning: 'Tristeza', frequency: 42, exampleRef: '12:86', exampleArabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى ٱللَّهِ', exampleTranslation: 'Apenas exponho minha angústia e tristeza a Deus' },
    ],
  },
  {
    id: 33,
    title: 'Natureza II — Estrela, Vento, Chuva, Árvore, Fogo',
    words: [
      { arabic: 'نَجْم', transliteration: 'Najm', meaning: 'Estrela', frequency: 13, exampleRef: '53:1', exampleArabic: 'وَٱلنَّجْمِ إِذَا هَوَىٰ', exampleTranslation: 'Pela estrela quando declina' },
      { arabic: 'رِيح', transliteration: 'Rih', meaning: 'Vento', frequency: 29, exampleRef: '30:46', exampleArabic: 'وَمِنْ آيَـٰتِهِ أَن يُرْسِلَ ٱلرِّيَاحَ', exampleTranslation: 'E dentre Seus sinais está enviar os ventos' },
      { arabic: 'مَطَر', transliteration: 'Matar', meaning: 'Chuva', frequency: 16, exampleRef: '4:102', exampleArabic: 'وَلَا جُنَاحَ عَلَيْكُمْ إِن كَانَ بِكُمْ أَذًى مِّن مَّطَرٍ', exampleTranslation: 'E não há culpa se estais incomodados pela chuva' },
      { arabic: 'شَجَر', transliteration: 'Shajar', meaning: 'Árvore', frequency: 26, exampleRef: '36:80', exampleArabic: 'ٱلَّذِي جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلْأَخْضَرِ نَارًا', exampleTranslation: 'Aquele que fez para vós da árvore verde, fogo' },
      { arabic: 'سَحَاب', transliteration: 'Sahab', meaning: 'Nuvem', frequency: 12, exampleRef: '24:43', exampleArabic: 'ثُمَّ يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا', exampleTranslation: 'Depois as junta, depois as torna em camadas' },
    ],
  },
  {
    id: 34,
    title: 'Lugares — Mesquita, Porta, Casa, Caminho, Estação',
    words: [
      { arabic: 'مَسْجِد', transliteration: 'Masjid', meaning: 'Mesquita', frequency: 28, exampleRef: '17:1', exampleArabic: 'مِنَ ٱلْمَسْجِدِ ٱلْحَرَامِ إِلَى ٱلْمَسْجِدِ ٱلْأَقْصَا', exampleTranslation: 'Da Mesquita Sagrada à Mesquita Mais Distante' },
      { arabic: 'بَاب', transliteration: 'Bab', meaning: 'Porta', frequency: 31, exampleRef: '39:73', exampleArabic: 'حَتَّىٰ إِذَا جَاءُوهَا وَفُتِحَتْ أَبْوَٰبُهَا', exampleTranslation: 'Até que quando chegarem e suas portas forem abertas' },
      { arabic: 'دَار', transliteration: 'Dar', meaning: 'Casa / Morada', frequency: 50, exampleRef: '6:127', exampleArabic: 'لَهُمْ دَارُ ٱلسَّلَـٰمِ عِندَ رَبِّهِمْ', exampleTranslation: 'Para eles a Morada da Paz junto a seu Senhor' },
      { arabic: 'طَرِيق', transliteration: 'Tariq', meaning: 'Caminho', frequency: 21, exampleRef: '20:77', exampleArabic: 'فَٱضْرِبْ لَهُمْ طَرِيقًا فِي ٱلْبَحْرِ يَبَسًا', exampleTranslation: 'Abre para eles um caminho seco no mar' },
      { arabic: 'مَقَام', transliteration: 'Maqam', meaning: 'Estação / Posição', frequency: 20, exampleRef: '37:164', exampleArabic: 'وَمَا مِنَّا إِلَّا لَهُ مَقَامٌ مَّعْلُومٌ', exampleTranslation: 'E não há entre nós senão quem tem posição designada' },
    ],
  },
  {
    id: 35,
    title: 'Ações Cotidianas — Caminhou, Sentou, Levantou, Dormiu, Comeu',
    words: [
      { arabic: 'مَشَىٰ', transliteration: 'Masha', meaning: 'Caminhou', frequency: 20, exampleRef: '25:63', exampleArabic: 'ٱلَّذِينَ يَمْشُونَ عَلَى ٱلْأَرْضِ هَوْنًا', exampleTranslation: 'Aqueles que caminham na terra com humildade' },
      { arabic: 'جَلَسَ', transliteration: 'Jalasa', meaning: 'Sentou', frequency: 8, exampleRef: '9:46', exampleArabic: 'وَقِيلَ ٱقْعُدُوا مَعَ ٱلْقَـٰعِدِينَ', exampleTranslation: 'E foi-lhes dito: Sentai-vos com os que ficam sentados' },
      { arabic: 'قَامَ', transliteration: 'Qama', meaning: 'Levantou-se', frequency: 660, exampleRef: '73:2', exampleArabic: 'قُمِ ٱلَّيْلَ إِلَّا قَلِيلًا', exampleTranslation: 'Levanta-te à noite, exceto pouco' },
      { arabic: 'نَامَ', transliteration: 'Nama', meaning: 'Dormiu', frequency: 9, exampleRef: '25:47', exampleArabic: 'وَهُوَ ٱلَّذِي جَعَلَ لَكُمُ ٱلَّيْلَ لِبَاسًا وَٱلنَّوْمَ سُبَاتًا', exampleTranslation: 'É Ele quem fez da noite veste e do sono descanso' },
      { arabic: 'أَكَلَ', transliteration: 'Akala', meaning: 'Comeu', frequency: 109, exampleRef: '7:19', exampleArabic: 'وَكُلَا مِنْهَا رَغَدًا', exampleTranslation: 'E comei dela à vontade' },
    ],
  },
  {
    id: 36,
    title: 'Justiça e Sociedade — Justiça, Opressão, Segurança, Paz, Guerra',
    words: [
      { arabic: 'عَدْل', transliteration: 'Adl', meaning: 'Justiça', frequency: 28, exampleRef: '16:90', exampleArabic: 'إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ', exampleTranslation: 'Deus ordena a justiça' },
      { arabic: 'ظُلْم', transliteration: 'Dhulm', meaning: 'Opressão / Injustiça', frequency: 289, exampleRef: '4:40', exampleArabic: 'إِنَّ ٱللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ', exampleTranslation: 'De fato, Deus não oprime sequer o peso de um átomo' },
      { arabic: 'أَمْن', transliteration: 'Amn', meaning: 'Segurança', frequency: 880, exampleRef: '106:4', exampleArabic: 'ٱلَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ', exampleTranslation: 'Que os alimentou contra a fome e os protegeu do medo' },
      { arabic: 'سِلْم', transliteration: 'Silm', meaning: 'Paz / Submissão', frequency: 8, exampleRef: '2:208', exampleArabic: 'ٱدْخُلُوا فِي ٱلسِّلْمِ كَافَّةً', exampleTranslation: 'Entrai na paz completamente' },
      { arabic: 'حَرْب', transliteration: 'Harb', meaning: 'Guerra', frequency: 6, exampleRef: '5:64', exampleArabic: 'كُلَّمَا أَوْقَدُوا نَارًا لِّلْحَرْبِ أَطْفَأَهَا ٱللَّهُ', exampleTranslation: 'Toda vez que acendem um fogo para a guerra, Deus o apaga' },
    ],
  },
  {
    id: 37,
    title: 'Espiritual I — Espírito, Revelação, Sinal, Milagre, Destino',
    words: [
      { arabic: 'رُوح', transliteration: 'Ruh', meaning: 'Espírito', frequency: 21, exampleRef: '17:85', exampleArabic: 'وَيَسْأَلُونَكَ عَنِ ٱلرُّوحِ', exampleTranslation: 'E te perguntam sobre o espírito' },
      { arabic: 'وَحْي', transliteration: 'Wahy', meaning: 'Revelação', frequency: 78, exampleRef: '53:4', exampleArabic: 'إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ', exampleTranslation: 'Não é senão revelação que se revela' },
      { arabic: 'آيَة', transliteration: 'Ayah', meaning: 'Sinal / Versículo', frequency: 382, exampleRef: '2:106', exampleArabic: 'مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا', exampleTranslation: 'Qualquer versículo que ab-roguemos ou façamos esquecer' },
      { arabic: 'مُعْجِزَة', transliteration: "Mu'jizah", meaning: 'Milagre', frequency: 5, exampleRef: '3:49', exampleArabic: 'قَدْ جِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ', exampleTranslation: 'Vim a vós com um sinal de vosso Senhor' },
      { arabic: 'قَدَر', transliteration: 'Qadr', meaning: 'Destino / Decreto', frequency: 29, exampleRef: '97:1', exampleArabic: 'إِنَّا أَنزَلْنَـٰهُ فِي لَيْلَةِ ٱلْقَدْرِ', exampleTranslation: 'Nós o revelamos na Noite do Decreto' },
    ],
  },
  {
    id: 38,
    title: 'Alimentos — Água, Comida, Fruta, Leite, Mel',
    words: [
      { arabic: 'مَاء', transliteration: "Ma'", meaning: 'Água', frequency: 63, exampleRef: '21:30', exampleArabic: 'وَجَعَلْنَا مِنَ ٱلْمَاءِ كُلَّ شَيْءٍ حَيٍّ', exampleTranslation: 'E fizemos de água toda coisa viva' },
      { arabic: 'طَعَام', transliteration: "Ta'am", meaning: 'Comida / Alimento', frequency: 48, exampleRef: '5:5', exampleArabic: 'وَطَعَامُ ٱلَّذِينَ أُوتُوا ٱلْكِتَـٰبَ حِلٌّ لَّكُمْ', exampleTranslation: 'E a comida dos que receberam o Livro é lícita para vós' },
      { arabic: 'ثَمَر', transliteration: 'Thamar', meaning: 'Fruta', frequency: 65, exampleRef: '2:22', exampleArabic: 'فَأَخْرَجَ بِهِ مِنَ ٱلثَّمَرَٰتِ رِزْقًا لَّكُمْ', exampleTranslation: 'E extraiu com ela frutos como sustento para vós' },
      { arabic: 'لَبَن', transliteration: 'Laban', meaning: 'Leite', frequency: 2, exampleRef: '47:15', exampleArabic: 'وَأَنْهَـٰرٌ مِّن لَّبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ', exampleTranslation: 'E rios de leite cujo sabor não se altera' },
      { arabic: 'عَسَل', transliteration: 'Asal', meaning: 'Mel', frequency: 1, exampleRef: '47:15', exampleArabic: 'وَأَنْهَـٰرٌ مِّنْ عَسَلٍ مُّصَفًّى', exampleTranslation: 'E rios de mel purificado' },
    ],
  },
  {
    id: 39,
    title: 'Números I — Um, Dois, Três, Quatro, Cinco',
    words: [
      { arabic: 'وَاحِد', transliteration: 'Wahid', meaning: 'Um / Único', frequency: 68, exampleRef: '112:1', exampleArabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', exampleTranslation: 'Dize: Ele é Deus, o Único' },
      { arabic: 'ٱثْنَان', transliteration: 'Ithnan', meaning: 'Dois', frequency: 16, exampleRef: '9:40', exampleArabic: 'ثَانِيَ ٱثْنَيْنِ إِذْ هُمَا فِي ٱلْغَارِ', exampleTranslation: 'O segundo dos dois quando estavam na caverna' },
      { arabic: 'ثَلَاثَة', transliteration: 'Thalathah', meaning: 'Três', frequency: 17, exampleRef: '4:171', exampleArabic: 'وَلَا تَقُولُوا ثَلَـٰثَةٌ', exampleTranslation: 'E não digais três' },
      { arabic: 'أَرْبَعَة', transliteration: "Arba'ah", meaning: 'Quatro', frequency: 15, exampleRef: '9:36', exampleArabic: 'مِنْهَا أَرْبَعَةٌ حُرُمٌ', exampleTranslation: 'Dos quais quatro são sagrados' },
      { arabic: 'خَمْسَة', transliteration: 'Khamsah', meaning: 'Cinco', frequency: 5, exampleRef: '18:22', exampleArabic: 'خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ', exampleTranslation: 'Cinco, o sexto deles era seu cão' },
    ],
  },
  {
    id: 40,
    title: 'Números II — Seis, Sete, Dez, Doze, Cem',
    words: [
      { arabic: 'سِتَّة', transliteration: 'Sittah', meaning: 'Seis', frequency: 7, exampleRef: '7:54', exampleArabic: 'خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ فِي سِتَّةِ أَيَّامٍ', exampleTranslation: 'Criou os céus e a terra em seis dias' },
      { arabic: 'سَبْعَة', transliteration: "Sab'ah", meaning: 'Sete', frequency: 24, exampleRef: '2:29', exampleArabic: 'فَسَوَّاهُنَّ سَبْعَ سَمَـٰوَٰتٍ', exampleTranslation: 'E moldou-os em sete céus' },
      { arabic: 'عَشَرَة', transliteration: 'Asharah', meaning: 'Dez', frequency: 10, exampleRef: '2:196', exampleArabic: 'تِلْكَ عَشَرَةٌ كَامِلَةٌ', exampleTranslation: 'Isto é dez completos' },
      { arabic: 'ٱثْنَا عَشَرَ', transliteration: 'Ithna Ashar', meaning: 'Doze', frequency: 7, exampleRef: '9:36', exampleArabic: 'إِنَّ عِدَّةَ ٱلشُّهُورِ عِندَ ٱللَّهِ ٱثْنَا عَشَرَ شَهْرًا', exampleTranslation: 'O número dos meses junto a Deus é doze meses' },
      { arabic: 'مِائَة', transliteration: "Mi'ah", meaning: 'Cem', frequency: 8, exampleRef: '2:259', exampleArabic: 'أَوْ كَٱلَّذِي مَرَّ عَلَىٰ قَرْيَةٍ', exampleTranslation: 'Ou como aquele que passou por uma aldeia' },
    ],
  },
  {
    id: 41,
    title: 'Profetas I — Adão, Noé, Abraão, Moisés, Jesus',
    words: [
      { arabic: 'آدَم', transliteration: 'Adam', meaning: 'Adão', frequency: 25, exampleRef: '2:31', exampleArabic: 'وَعَلَّمَ آدَمَ ٱلْأَسْمَاءَ كُلَّهَا', exampleTranslation: 'E ensinou a Adão todos os nomes' },
      { arabic: 'نُوح', transliteration: 'Nuh', meaning: 'Noé', frequency: 43, exampleRef: '71:1', exampleArabic: 'إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ', exampleTranslation: 'Enviamos Noé ao seu povo' },
      { arabic: 'إِبْرَاهِيم', transliteration: 'Ibrahim', meaning: 'Abraão', frequency: 69, exampleRef: '2:124', exampleArabic: 'وَإِذِ ٱبْتَلَىٰ إِبْرَٰهِـۧمَ رَبُّهُ', exampleTranslation: 'E quando o Senhor de Abraão o testou' },
      { arabic: 'مُوسَىٰ', transliteration: 'Musa', meaning: 'Moisés', frequency: 136, exampleRef: '20:9', exampleArabic: 'وَهَلْ أَتَاكَ حَدِيثُ مُوسَىٰ', exampleTranslation: 'E chegou-te a história de Moisés?' },
      { arabic: 'عِيسَىٰ', transliteration: 'Isa', meaning: 'Jesus', frequency: 25, exampleRef: '3:45', exampleArabic: 'ٱسْمُهُ ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ', exampleTranslation: 'Seu nome é o Messias, Jesus, filho de Maria' },
    ],
  },
  {
    id: 42,
    title: 'Profetas II — Davi, Salomão, José, Jonas, Muhammad',
    words: [
      { arabic: 'دَاوُود', transliteration: 'Dawud', meaning: 'Davi', frequency: 16, exampleRef: '34:10', exampleArabic: 'وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا', exampleTranslation: 'E concedemos a Davi de Nós uma graça' },
      { arabic: 'سُلَيْمَـٰن', transliteration: 'Sulayman', meaning: 'Salomão', frequency: 17, exampleRef: '27:16', exampleArabic: 'وَوَرِثَ سُلَيْمَـٰنُ دَاوُودَ', exampleTranslation: 'E Salomão herdou de Davi' },
      { arabic: 'يُوسُف', transliteration: 'Yusuf', meaning: 'José', frequency: 27, exampleRef: '12:4', exampleArabic: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ', exampleTranslation: 'Quando José disse a seu pai' },
      { arabic: 'يُونُس', transliteration: 'Yunus', meaning: 'Jonas', frequency: 4, exampleRef: '37:139', exampleArabic: 'وَإِنَّ يُونُسَ لَمِنَ ٱلْمُرْسَلِينَ', exampleTranslation: 'E Jonas era dos enviados' },
      { arabic: 'مُحَمَّد', transliteration: 'Muhammad', meaning: 'Muhammad', frequency: 4, exampleRef: '48:29', exampleArabic: 'مُّحَمَّدٌ رَّسُولُ ٱللَّهِ', exampleTranslation: 'Muhammad é o Mensageiro de Deus' },
    ],
  },
  {
    id: 43,
    title: 'Moralidade — Pecado, Bem, Mal, Honesto, Mentiroso',
    words: [
      { arabic: 'ذَنْب', transliteration: 'Dhanb', meaning: 'Pecado / Culpa', frequency: 39, exampleRef: '3:16', exampleArabic: 'رَبَّنَا إِنَّنَا آمَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا', exampleTranslation: 'Senhor nosso, cremos! Perdoa-nos os pecados' },
      { arabic: 'خَيْر', transliteration: 'Khayr', meaning: 'Bem / Melhor', frequency: 176, exampleRef: '2:110', exampleArabic: 'وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ', exampleTranslation: 'E o que adiantardes para vós mesmos de bem' },
      { arabic: 'شَرّ', transliteration: 'Sharr', meaning: 'Mal / Pior', frequency: 30, exampleRef: '113:2', exampleArabic: 'مِن شَرِّ مَا خَلَقَ', exampleTranslation: 'Do mal do que criou' },
      { arabic: 'بِرّ', transliteration: 'Birr', meaning: 'Bondade / Piedade', frequency: 20, exampleRef: '2:177', exampleArabic: 'لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ', exampleTranslation: 'A piedade não é virar vossos rostos' },
      { arabic: 'كَذِب', transliteration: 'Kadhib', meaning: 'Mentira', frequency: 178, exampleRef: '39:3', exampleArabic: 'إِنَّ ٱللَّهَ لَا يَهْدِي مَنْ هُوَ كَـٰذِبٌ', exampleTranslation: 'Deus não guia quem é mentiroso' },
    ],
  },
  {
    id: 44,
    title: 'Criação — Terra, Céu, Trono, Universo, Humanidade',
    words: [
      { arabic: 'تُرَاب', transliteration: 'Turab', meaning: 'Pó / Terra', frequency: 22, exampleRef: '22:5', exampleArabic: 'فَإِنَّا خَلَقْنَـٰكُم مِّن تُرَابٍ', exampleTranslation: 'Nós vos criamos do pó' },
      { arabic: 'سَمَـٰوَات', transliteration: 'Samawat', meaning: 'Céus (plural)', frequency: 190, exampleRef: '2:29', exampleArabic: 'فَسَوَّاهُنَّ سَبْعَ سَمَـٰوَٰتٍ', exampleTranslation: 'E moldou-os em sete céus' },
      { arabic: 'عَرْش', transliteration: 'Arsh', meaning: 'Trono', frequency: 26, exampleRef: '7:54', exampleArabic: 'ثُمَّ ٱسْتَوَىٰ عَلَى ٱلْعَرْشِ', exampleTranslation: 'Depois se estabeleceu sobre o Trono' },
      { arabic: 'عَالَم', transliteration: 'Alam', meaning: 'Mundo / Universo', frequency: 73, exampleRef: '1:2', exampleArabic: 'رَبِّ ٱلْعَـٰلَمِينَ', exampleTranslation: 'Senhor dos mundos' },
      { arabic: 'إِنسَان', transliteration: 'Insan', meaning: 'Ser humano', frequency: 65, exampleRef: '95:4', exampleArabic: 'لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِي أَحْسَنِ تَقْوِيمٍ', exampleTranslation: 'Criamos o ser humano na melhor forma' },
    ],
  },
  {
    id: 45,
    title: 'Escatologia — Ressurreição, Julgamento, Balança, Ponte, Recompensa',
    words: [
      { arabic: 'بَعْث', transliteration: "Ba'th", meaning: 'Ressurreição', frequency: 67, exampleRef: '22:7', exampleArabic: 'وَأَنَّ ٱللَّهَ يَبْعَثُ مَن فِي ٱلْقُبُورِ', exampleTranslation: 'E que Deus ressuscitará os que estão nos túmulos' },
      { arabic: 'حِسَاب', transliteration: 'Hisab', meaning: 'Julgamento / Prestação de contas', frequency: 38, exampleRef: '40:17', exampleArabic: 'ٱلْيَوْمَ تُجْزَىٰ كُلُّ نَفْسٍ بِمَا كَسَبَتْ', exampleTranslation: 'Hoje cada alma será retribuída pelo que ganhou' },
      { arabic: 'مِيزَان', transliteration: 'Mizan', meaning: 'Balança', frequency: 23, exampleRef: '7:8', exampleArabic: 'وَٱلْوَزْنُ يَوْمَئِذٍ ٱلْحَقُّ', exampleTranslation: 'E a pesagem naquele dia será verdadeira' },
      { arabic: 'صِرَاط', transliteration: 'Sirat', meaning: 'Caminho / Ponte', frequency: 45, exampleRef: '1:6', exampleArabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', exampleTranslation: 'Guia-nos ao caminho reto' },
      { arabic: 'ثَوَاب', transliteration: 'Thawab', meaning: 'Recompensa', frequency: 23, exampleRef: '3:148', exampleArabic: 'فَآتَاهُمُ ٱللَّهُ ثَوَابَ ٱلدُّنْيَا', exampleTranslation: 'Deus lhes deu a recompensa deste mundo' },
    ],
  },
  {
    id: 46,
    title: 'Poder e Governo — Rei, Povo, Exército, Lei, Juiz',
    words: [
      { arabic: 'سُلْطَان', transliteration: 'Sultan', meaning: 'Autoridade / Poder', frequency: 37, exampleRef: '55:33', exampleArabic: 'لَا تَنفُذُونَ إِلَّا بِسُلْطَـٰنٍ', exampleTranslation: 'Não passareis senão com autoridade' },
      { arabic: 'قَوْم', transliteration: 'Qawm', meaning: 'Povo / Nação', frequency: 383, exampleRef: '7:59', exampleArabic: 'يَـٰقَوْمِ ٱعْبُدُوا ٱللَّهَ', exampleTranslation: 'Ó meu povo, adorai a Deus' },
      { arabic: 'جُنْد', transliteration: 'Jund', meaning: 'Exército / Soldados', frequency: 17, exampleRef: '36:75', exampleArabic: 'وَلَا يَسْتَطِيعُونَ لَهُمْ نَصْرًا وَهُمْ لَهُمْ جُندٌ', exampleTranslation: 'Não podem socorrê-los, embora sejam para eles um exército' },
      { arabic: 'شَرِيعَة', transliteration: "Shari'ah", meaning: 'Lei / Caminho prescrito', frequency: 4, exampleRef: '45:18', exampleArabic: 'ثُمَّ جَعَلْنَـٰكَ عَلَىٰ شَرِيعَةٍ مِّنَ ٱلْأَمْرِ', exampleTranslation: 'Depois te pusemos sobre uma lei clara' },
      { arabic: 'حَكَم', transliteration: 'Hakam', meaning: 'Juiz / Árbitro', frequency: 210, exampleRef: '6:114', exampleArabic: 'أَفَغَيْرَ ٱللَّهِ أَبْتَغِي حَكَمًا', exampleTranslation: 'Acaso buscarei outro juiz que não Deus?' },
    ],
  },
  {
    id: 47,
    title: 'Fala e Comunicação — Palavra, Língua, Voz, Promessa, Juramento',
    words: [
      { arabic: 'كَلِمَة', transliteration: 'Kalimah', meaning: 'Palavra', frequency: 75, exampleRef: '18:109', exampleArabic: 'لَّنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَـٰتُ رَبِّي', exampleTranslation: 'O mar se esgotaria antes de se esgotarem as palavras de meu Senhor' },
      { arabic: 'لِسَان', transliteration: 'Lisan', meaning: 'Língua', frequency: 25, exampleRef: '90:9', exampleArabic: 'وَلِسَانًا وَشَفَتَيْنِ', exampleTranslation: 'E uma língua e dois lábios' },
      { arabic: 'صَوْت', transliteration: 'Sawt', meaning: 'Voz / Som', frequency: 9, exampleRef: '49:3', exampleArabic: 'ٱلَّذِينَ يَغُضُّونَ أَصْوَٰتَهُمْ عِندَ رَسُولِ ٱللَّهِ', exampleTranslation: 'Aqueles que baixam suas vozes na presença do Mensageiro de Deus' },
      { arabic: 'وَعْد', transliteration: "Wa'd", meaning: 'Promessa', frequency: 52, exampleRef: '10:4', exampleArabic: 'وَعْدَ ٱللَّهِ حَقًّا', exampleTranslation: 'Promessa de Deus, verdadeira' },
      { arabic: 'عَهْد', transliteration: 'Ahd', meaning: 'Pacto / Juramento', frequency: 46, exampleRef: '2:40', exampleArabic: 'وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ', exampleTranslation: 'Cumpri o Meu pacto que cumprirei o vosso' },
    ],
  },
  {
    id: 48,
    title: 'Riqueza e Comércio — Dinheiro, Comércio, Lucro, Perda, Ouro',
    words: [
      { arabic: 'مَال', transliteration: 'Mal', meaning: 'Riqueza / Dinheiro', frequency: 86, exampleRef: '2:261', exampleArabic: 'ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِي سَبِيلِ ٱللَّهِ', exampleTranslation: 'Aqueles que despendem suas riquezas no caminho de Deus' },
      { arabic: 'تِجَارَة', transliteration: 'Tijarah', meaning: 'Comércio', frequency: 9, exampleRef: '61:10', exampleArabic: 'هَلْ أَدُلُّكُمْ عَلَىٰ تِجَـٰرَةٍ تُنجِيكُم', exampleTranslation: 'Devo indicar-vos um comércio que vos salvará?' },
      { arabic: 'رِبْح', transliteration: 'Ribh', meaning: 'Lucro / Ganho', frequency: 4, exampleRef: '2:16', exampleArabic: 'فَمَا رَبِحَت تِّجَـٰرَتُهُمْ', exampleTranslation: 'Não foi lucrativo o seu comércio' },
      { arabic: 'خُسْر', transliteration: 'Khusr', meaning: 'Perda / Prejuízo', frequency: 65, exampleRef: '103:2', exampleArabic: 'إِنَّ ٱلْإِنسَـٰنَ لَفِي خُسْرٍ', exampleTranslation: 'De fato, o ser humano está em perda' },
      { arabic: 'ذَهَب', transliteration: 'Dhahab', meaning: 'Ouro', frequency: 8, exampleRef: '3:14', exampleArabic: 'وَٱلْقَنَـٰطِيرِ ٱلْمُقَنطَرَةِ مِنَ ٱلذَّهَبِ وَٱلْفِضَّةِ', exampleTranslation: 'E montões de ouro e prata' },
    ],
  },
  {
    id: 49,
    title: 'Vida Espiritual — Coração, Alma, Intenção, Arrependimento, Purificação',
    words: [
      { arabic: 'فُؤَاد', transliteration: "Fu'ad", meaning: 'Coração interior', frequency: 16, exampleRef: '53:11', exampleArabic: 'مَا كَذَبَ ٱلْفُؤَادُ مَا رَأَىٰ', exampleTranslation: 'O coração não desmentiu o que viu' },
      { arabic: 'عَقْل', transliteration: 'Aql', meaning: 'Razão / Intelecto', frequency: 49, exampleRef: '2:44', exampleArabic: 'أَفَلَا تَعْقِلُونَ', exampleTranslation: 'Acaso não raciocinais?' },
      { arabic: 'نِيَّة', transliteration: 'Niyyah', meaning: 'Intenção', frequency: 3, exampleRef: '2:225', exampleArabic: 'وَلَـٰكِن يُؤَاخِذُكُم بِمَا كَسَبَتْ قُلُوبُكُمْ', exampleTranslation: 'Mas vos responsabiliza pelo que vossos corações adquiriram' },
      { arabic: 'تَطْهِير', transliteration: 'Tathir', meaning: 'Purificação', frequency: 31, exampleRef: '2:222', exampleArabic: 'إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّابِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ', exampleTranslation: 'Deus ama os que se arrependem e ama os que se purificam' },
      { arabic: 'خُشُوع', transliteration: "Khushu'", meaning: 'Humildade / Reverência', frequency: 17, exampleRef: '23:2', exampleArabic: 'ٱلَّذِينَ هُمْ فِي صَلَاتِهِمْ خَـٰشِعُونَ', exampleTranslation: 'Aqueles que em sua oração são humildes' },
    ],
  },
  {
    id: 50,
    title: 'Vestimenta e Aparência — Roupa, Seda, Ouro, Véu, Adorno',
    words: [
      { arabic: 'لِبَاس', transliteration: 'Libas', meaning: 'Vestimenta / Roupa', frequency: 10, exampleRef: '7:26', exampleArabic: 'يَـٰبَنِي آدَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا', exampleTranslation: 'Ó filhos de Adão, fizemos descer sobre vós vestimentas' },
      { arabic: 'حَرِير', transliteration: 'Harir', meaning: 'Seda', frequency: 4, exampleRef: '22:23', exampleArabic: 'وَلِبَاسُهُمْ فِيهَا حَرِيرٌ', exampleTranslation: 'E suas vestes ali serão de seda' },
      { arabic: 'فِضَّة', transliteration: 'Fiddah', meaning: 'Prata', frequency: 6, exampleRef: '76:16', exampleArabic: 'قَوَارِيرَا مِن فِضَّةٍ', exampleTranslation: 'Cristais de prata' },
      { arabic: 'حِجَاب', transliteration: 'Hijab', meaning: 'Véu / Barreira', frequency: 7, exampleRef: '33:53', exampleArabic: 'وَإِذَا سَأَلْتُمُوهُنَّ مَتَـٰعًا فَٱسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ', exampleTranslation: 'E quando lhes pedirdes algo, pedi-o por trás de uma cortina' },
      { arabic: 'زِينَة', transliteration: 'Zinah', meaning: 'Adorno / Beleza', frequency: 20, exampleRef: '7:32', exampleArabic: 'قُلْ مَنْ حَرَّمَ زِينَةَ ٱللَّهِ', exampleTranslation: 'Dize: Quem proibiu os adornos de Deus?' },
    ],
  },
  {
    id: 51,
    title: 'Animais no Alcorão — Camelo, Cavalo, Abelha, Formiga, Pássaro',
    words: [
      { arabic: 'إِبِل', transliteration: 'Ibil', meaning: 'Camelo', frequency: 2, exampleRef: '88:17', exampleArabic: 'أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ', exampleTranslation: 'Acaso não observam os camelos, como foram criados?' },
      { arabic: 'خَيْل', transliteration: 'Khayl', meaning: 'Cavalos', frequency: 5, exampleRef: '3:14', exampleArabic: 'وَٱلْخَيْلِ ٱلْمُسَوَّمَةِ', exampleTranslation: 'E cavalos de raça' },
      { arabic: 'نَحْل', transliteration: 'Nahl', meaning: 'Abelha', frequency: 1, exampleRef: '16:68', exampleArabic: 'وَأَوْحَىٰ رَبُّكَ إِلَى ٱلنَّحْلِ', exampleTranslation: 'E teu Senhor inspirou à abelha' },
      { arabic: 'نَمْل', transliteration: 'Naml', meaning: 'Formiga', frequency: 3, exampleRef: '27:18', exampleArabic: 'قَالَتْ نَمْلَةٌ يَـٰأَيُّهَا ٱلنَّمْلُ', exampleTranslation: 'Uma formiga disse: Ó formigas!' },
      { arabic: 'طَيْر', transliteration: 'Tayr', meaning: 'Pássaro', frequency: 18, exampleRef: '67:19', exampleArabic: 'أَوَلَمْ يَرَوْا إِلَى ٱلطَّيْرِ فَوْقَهُمْ', exampleTranslation: 'Acaso não veem os pássaros acima deles?' },
    ],
  },
  {
    id: 52,
    title: 'Oração e Ritual — Wudu, Qibla, Mihrab, Imam, Adhan',
    words: [
      { arabic: 'وُضُوء', transliteration: "Wudu'", meaning: 'Ablução', frequency: 2, exampleRef: '5:6', exampleArabic: 'فَٱغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ', exampleTranslation: 'Lavai vossos rostos e vossas mãos' },
      { arabic: 'قِبْلَة', transliteration: 'Qiblah', meaning: 'Direção da oração', frequency: 4, exampleRef: '2:144', exampleArabic: 'فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ', exampleTranslation: 'Volta teu rosto na direção da Mesquita Sagrada' },
      { arabic: 'مِحْرَاب', transliteration: 'Mihrab', meaning: 'Nicho de oração', frequency: 4, exampleRef: '3:39', exampleArabic: 'وَهُوَ قَائِمٌ يُصَلِّي فِي ٱلْمِحْرَابِ', exampleTranslation: 'Enquanto ele estava de pé orando no mihrab' },
      { arabic: 'إِمَام', transliteration: 'Imam', meaning: 'Líder / Guia', frequency: 12, exampleRef: '2:124', exampleArabic: 'إِنِّي جَاعِلُكَ لِلنَّاسِ إِمَامًا', exampleTranslation: 'Farei de ti um líder para as pessoas' },
      { arabic: 'أَذَان', transliteration: 'Adhan', meaning: 'Chamado à oração', frequency: 3, exampleRef: '5:58', exampleArabic: 'وَإِذَا نَادَيْتُمْ إِلَى ٱلصَّلَوٰةِ', exampleTranslation: 'E quando chamais para a oração' },
    ],
  },
  {
    id: 53,
    title: 'Luz e Escuridão — Luz, Trevas, Sombra, Brilho, Lâmpada',
    words: [
      { arabic: 'ضِيَاء', transliteration: "Diya'", meaning: 'Luminosidade', frequency: 4, exampleRef: '10:5', exampleArabic: 'جَعَلَ ٱلشَّمْسَ ضِيَاءً', exampleTranslation: 'Fez do sol uma luminosidade' },
      { arabic: 'ظُلُمَات', transliteration: 'Dhulumat', meaning: 'Trevas', frequency: 46, exampleRef: '2:257', exampleArabic: 'يُخْرِجُهُم مِّنَ ٱلظُّلُمَـٰتِ إِلَى ٱلنُّورِ', exampleTranslation: 'Tira-os das trevas para a luz' },
      { arabic: 'ظِلّ', transliteration: 'Dhill', meaning: 'Sombra', frequency: 14, exampleRef: '56:30', exampleArabic: 'وَظِلٍّ مَّمْدُودٍ', exampleTranslation: 'E sombra estendida' },
      { arabic: 'سِرَاج', transliteration: 'Siraj', meaning: 'Lâmpada / Tocha', frequency: 5, exampleRef: '33:46', exampleArabic: 'وَدَاعِيًا إِلَى ٱللَّهِ بِإِذْنِهِ وَسِرَٰجًا مُّنِيرًا', exampleTranslation: 'E convidando a Deus com Sua permissão, e como uma lâmpada iluminadora' },
      { arabic: 'مِصْبَاح', transliteration: 'Misbah', meaning: 'Lanterna', frequency: 3, exampleRef: '24:35', exampleArabic: 'فِيهَا مِصْبَاحٌ ٱلْمِصْبَاحُ فِي زُجَاجَةٍ', exampleTranslation: 'Nela há uma lanterna; a lanterna está num vidro' },
    ],
  },
  {
    id: 54,
    title: 'Sabedoria — Sabedoria, Livro, Ciência, Entendimento, Reflexão',
    words: [
      { arabic: 'حِكْمَة', transliteration: 'Hikmah', meaning: 'Sabedoria', frequency: 20, exampleRef: '2:269', exampleArabic: 'يُؤْتِي ٱلْحِكْمَةَ مَن يَشَاءُ', exampleTranslation: 'Concede a sabedoria a quem quer' },
      { arabic: 'صُحُف', transliteration: 'Suhuf', meaning: 'Escrituras / Páginas', frequency: 8, exampleRef: '87:19', exampleArabic: 'صُحُفِ إِبْرَٰهِيمَ وَمُوسَىٰ', exampleTranslation: 'As escrituras de Abraão e Moisés' },
      { arabic: 'فِقْه', transliteration: 'Fiqh', meaning: 'Compreensão profunda', frequency: 20, exampleRef: '4:78', exampleArabic: 'فَمَالِ هَـٰؤُلَاءِ ٱلْقَوْمِ لَا يَكَادُونَ يَفْقَهُونَ حَدِيثًا', exampleTranslation: 'Que tem esse povo que quase não compreendem um discurso?' },
      { arabic: 'بَصِيرَة', transliteration: 'Basirah', meaning: 'Discernimento / Visão interior', frequency: 5, exampleRef: '12:108', exampleArabic: 'ٱدْعُو إِلَى ٱللَّهِ عَلَىٰ بَصِيرَةٍ', exampleTranslation: 'Convido a Deus com discernimento' },
      { arabic: 'تَدَبُّر', transliteration: 'Tadabbur', meaning: 'Reflexão profunda', frequency: 4, exampleRef: '47:24', exampleArabic: 'أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْآنَ', exampleTranslation: 'Acaso não refletem sobre o Alcorão?' },
    ],
  },
  {
    id: 55,
    title: 'Nomes Divinos II — Sábio, Poderoso, Ouvinte, Vidente, Perdoador',
    words: [
      { arabic: 'حَكِيم', transliteration: 'Hakim', meaning: 'Sábio', frequency: 97, exampleRef: '2:32', exampleArabic: 'إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ', exampleTranslation: 'Tu és o Onisciente, o Sábio' },
      { arabic: 'عَزِيز', transliteration: 'Aziz', meaning: 'Poderoso / Exaltado', frequency: 92, exampleRef: '59:23', exampleArabic: 'ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ', exampleTranslation: 'O Poderoso, o Irresistível, o Supremo' },
      { arabic: 'سَمِيع', transliteration: "Sami'", meaning: 'Ouvinte / Que tudo ouve', frequency: 47, exampleRef: '2:127', exampleArabic: 'إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ', exampleTranslation: 'Tu és Aquele que tudo ouve, o Onisciente' },
      { arabic: 'بَصِير', transliteration: 'Basir', meaning: 'Vidente / Que tudo vê', frequency: 51, exampleRef: '17:1', exampleArabic: 'إِنَّهُ هُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ', exampleTranslation: 'Ele é Aquele que tudo ouve, Aquele que tudo vê' },
      { arabic: 'غَفُور', transliteration: 'Ghafur', meaning: 'Perdoador', frequency: 91, exampleRef: '2:173', exampleArabic: 'فَإِنَّ ٱللَّهَ غَفُورٌ رَّحِيمٌ', exampleTranslation: 'Deus é Perdoador, Misericordioso' },
    ],
  },
  {
    id: 56,
    title: 'Estados do Ser — Vivo, Morto, Desperto, Dormindo, Viajante',
    words: [
      { arabic: 'حَيّ', transliteration: 'Hayy', meaning: 'Vivo', frequency: 18, exampleRef: '2:255', exampleArabic: 'ٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ', exampleTranslation: 'Deus, não há divindade senão Ele, o Vivo, o Sustentador' },
      { arabic: 'مَيِّت', transliteration: 'Mayyit', meaning: 'Morto', frequency: 28, exampleRef: '39:30', exampleArabic: 'إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ', exampleTranslation: 'Tu morrerás e eles morrerão' },
      { arabic: 'يَقَظَة', transliteration: 'Yaqadhah', meaning: 'Vigília / Estado de alerta', frequency: 2, exampleRef: '18:18', exampleArabic: 'وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ', exampleTranslation: 'E pensarias que estavam despertos, mas estavam dormindo' },
      { arabic: 'رُقُود', transliteration: 'Ruqud', meaning: 'Adormecidos', frequency: 1, exampleRef: '18:18', exampleArabic: 'وَهُمْ رُقُودٌ', exampleTranslation: 'E eles estavam adormecidos' },
      { arabic: 'مُسَافِر', transliteration: 'Musafir', meaning: 'Viajante', frequency: 7, exampleRef: '2:283', exampleArabic: 'وَإِن كُنتُمْ عَلَىٰ سَفَرٍ', exampleTranslation: 'E se estiverdes em viagem' },
    ],
  },
  {
    id: 57,
    title: 'Convicção — Certeza, Dúvida, Verdade, Falso, Testemunho',
    words: [
      { arabic: 'يَقِين', transliteration: 'Yaqin', meaning: 'Certeza', frequency: 28, exampleRef: '15:99', exampleArabic: 'وَٱعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ ٱلْيَقِينُ', exampleTranslation: 'E adora teu Senhor até que te chegue a certeza' },
      { arabic: 'شَكّ', transliteration: 'Shakk', meaning: 'Dúvida', frequency: 22, exampleRef: '2:2', exampleArabic: 'لَا رَيْبَ فِيهِ', exampleTranslation: 'Não há dúvida nele' },
      { arabic: 'صِدْق', transliteration: 'Sidq', meaning: 'Verdade / Sinceridade', frequency: 54, exampleRef: '39:33', exampleArabic: 'وَٱلَّذِي جَاءَ بِٱلصِّدْقِ وَصَدَّقَ بِهِ', exampleTranslation: 'E aquele que trouxe a verdade e nela acreditou' },
      { arabic: 'بَاطِل', transliteration: 'Batil', meaning: 'Falso / Vão', frequency: 36, exampleRef: '17:81', exampleArabic: 'وَقُلْ جَاءَ ٱلْحَقُّ وَزَهَقَ ٱلْبَـٰطِلُ', exampleTranslation: 'E dize: Veio a verdade e o falso pereceu' },
      { arabic: 'شَهَادَة', transliteration: 'Shahadah', meaning: 'Testemunho', frequency: 35, exampleRef: '2:185', exampleArabic: 'فَمَن شَهِدَ مِنكُمُ ٱلشَّهْرَ فَلْيَصُمْهُ', exampleTranslation: 'Quem de vós presenciar o mês, que jejue' },
    ],
  },
  {
    id: 58,
    title: 'Mundo e Além — Mundo, Além, Túmulo, Paraíso, Inferno',
    words: [
      { arabic: 'دُنْيَا', transliteration: 'Dunya', meaning: 'Mundo terreno', frequency: 115, exampleRef: '2:200', exampleArabic: 'رَبَّنَا آتِنَا فِي ٱلدُّنْيَا حَسَنَةً', exampleTranslation: 'Senhor nosso, dá-nos o bem neste mundo' },
      { arabic: 'آخِرَة', transliteration: 'Akhirah', meaning: 'Além / Vida futura', frequency: 115, exampleRef: '2:200', exampleArabic: 'وَفِي ٱلْآخِرَةِ حَسَنَةً', exampleTranslation: 'E no Além o bem' },
      { arabic: 'قَبْر', transliteration: 'Qabr', meaning: 'Túmulo', frequency: 8, exampleRef: '22:7', exampleArabic: 'يَبْعَثُ مَن فِي ٱلْقُبُورِ', exampleTranslation: 'Ressuscitará os que estão nos túmulos' },
      { arabic: 'فِرْدَوْس', transliteration: 'Firdaws', meaning: 'Firdaus (mais alto Paraíso)', frequency: 2, exampleRef: '23:11', exampleArabic: 'ٱلَّذِينَ يَرِثُونَ ٱلْفِرْدَوْسَ', exampleTranslation: 'Aqueles que herdarão o Firdaus' },
      { arabic: 'جَهَنَّم', transliteration: 'Jahannam', meaning: 'Inferno (Geena)', frequency: 77, exampleRef: '2:206', exampleArabic: 'وَلَبِئْسَ ٱلْمِهَادُ جَهَنَّمُ', exampleTranslation: 'E que péssimo leito é o Inferno' },
    ],
  },
  {
    id: 59,
    title: 'Invocações — Louvor, Glória, Grandeza, Poder, Bênção',
    words: [
      { arabic: 'حَمْد', transliteration: 'Hamd', meaning: 'Louvor', frequency: 43, exampleRef: '1:2', exampleArabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', exampleTranslation: 'Louvado seja Deus, Senhor dos mundos' },
      { arabic: 'سُبْحَان', transliteration: 'Subhan', meaning: 'Glória / Exaltado seja', frequency: 41, exampleRef: '17:1', exampleArabic: 'سُبْحَـٰنَ ٱلَّذِي أَسْرَىٰ بِعَبْدِهِ', exampleTranslation: 'Glória a Quem fez Seu servo viajar à noite' },
      { arabic: 'أَكْبَر', transliteration: 'Akbar', meaning: 'Maior / O Maior', frequency: 86, exampleRef: '29:45', exampleArabic: 'وَلَذِكْرُ ٱللَّهِ أَكْبَرُ', exampleTranslation: 'E a lembrança de Deus é maior' },
      { arabic: 'قُوَّة', transliteration: 'Quwwah', meaning: 'Força / Poder', frequency: 42, exampleRef: '2:165', exampleArabic: 'أَنَّ ٱلْقُوَّةَ لِلَّهِ جَمِيعًا', exampleTranslation: 'Que todo o poder pertence a Deus' },
      { arabic: 'تَبَارَكَ', transliteration: 'Tabaraka', meaning: 'Abençoado seja', frequency: 9, exampleRef: '67:1', exampleArabic: 'تَبَـٰرَكَ ٱلَّذِي بِيَدِهِ ٱلْمُلْكُ', exampleTranslation: 'Abençoado seja Aquele em Cuja mão está a soberania' },
    ],
  },
  {
    id: 60,
    title: 'Encerramento — Caminho, Sucesso, Vitória, Confiança, Retorno',
    words: [
      { arabic: 'سَبِيل', transliteration: 'Sabil', meaning: 'Caminho / Via', frequency: 176, exampleRef: '12:108', exampleArabic: 'هَـٰذِهِ سَبِيلِي أَدْعُو إِلَى ٱللَّهِ', exampleTranslation: 'Este é o meu caminho: convido a Deus' },
      { arabic: 'فَلَاح', transliteration: 'Falah', meaning: 'Sucesso / Prosperidade', frequency: 40, exampleRef: '23:1', exampleArabic: 'قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ', exampleTranslation: 'Bem-sucedidos são os crentes' },
      { arabic: 'فَتْح', transliteration: 'Fath', meaning: 'Vitória / Conquista', frequency: 38, exampleRef: '48:1', exampleArabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا', exampleTranslation: 'Nós te concedemos uma vitória evidente' },
      { arabic: 'تَوَكُّل', transliteration: 'Tawakkul', meaning: 'Confiança em Deus', frequency: 70, exampleRef: '3:159', exampleArabic: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى ٱللَّهِ', exampleTranslation: 'E quando te decidires, confia em Deus' },
      { arabic: 'رُجُوع', transliteration: "Ruju'", meaning: 'Retorno', frequency: 25, exampleRef: '96:8', exampleArabic: 'إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰ', exampleTranslation: 'De fato, a teu Senhor é o retorno' },
    ],
  },
]
