// ── DAILY CONTENT ─────────────────────────────────────────────────────────────
// Verses and Names used on the home page, rotated by day-of-month.

export const SANCTUARY_VERSES = [
  // 1 - Unicidade
  { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', translation: 'Diz: Ele é Allah, o Único.', surahRef: 'Al-Ikhlas 112:1' },
  // 2 - Proximidade
  { arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', translation: 'E quando Meus servos te perguntarem sobre Mim — Eu estou próximo.', surahRef: 'Al-Baqarah 2:186' },
  // 3 - Facilidade
  { arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Certamente, com a dificuldade vem a facilidade.', surahRef: 'Al-Inshirah 94:6' },
  // 4 - Lembranca
  { arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ', translation: 'Lembrai-vos de Mim, e Eu Me lembrarei de vós.', surahRef: 'Al-Baqarah 2:152' },
  // 5 - Presenca
  { arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', translation: 'E Ele está convosco onde quer que estejais.', surahRef: 'Al-Hadid 57:4' },
  // 6 - Misericordia
  { arabic: 'وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', translation: 'E não desespereis da misericórdia de Allah.', surahRef: 'Az-Zumar 39:53' },
  // 7 - Recompensa
  { arabic: 'إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ', translation: 'Allah não desperdiça a recompensa dos que fazem o bem.', surahRef: 'At-Tawbah 9:120' },
  // 8 - Paciencia
  { arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', translation: 'Allah está com os pacientes.', surahRef: 'Al-Baqarah 2:153' },
  // 9 - Confianca
  { arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', translation: 'E quem confia em Allah, Ele lhe será suficiente.', surahRef: 'At-Talaq 65:3' },
  // 10 - Gratidao
  { arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', translation: 'Se fordes gratos, certamente vos aumentarei.', surahRef: 'Ibrahim 14:7' },
  // 11 - Perdao
  { arabic: 'وَهُوَ الْغَفُورُ الرَّحِيمُ', translation: 'E Ele é o Perdoador, o Misericordioso.', surahRef: 'Yunus 10:107' },
  // 12 - Amor
  { arabic: 'إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ', translation: 'Allah ama os que fazem o bem.', surahRef: 'Al-Baqarah 2:195' },
  // 13 - Esperanca
  { arabic: 'إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ', translation: 'A misericórdia de Allah está próxima dos que fazem o bem.', surahRef: 'Al-A\'raf 7:56' },
  // 14 - Forca
  { arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', translation: 'Allah não impõe a ninguém além da sua capacidade.', surahRef: 'Al-Baqarah 2:286' },
  // 15 - Conhecimento
  { arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', translation: 'E diz: Ó meu Senhor, aumenta-me em conhecimento.', surahRef: 'Ta-Ha 20:114' },
  // 16 - Paz
  { arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', translation: 'Não é com a lembrança de Allah que os corações se tranquilizam?', surahRef: 'Ar-Ra\'d 13:28' },
  // 17 - Protecao
  { arabic: 'وَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ', translation: 'E Allah é o melhor dos guardiões e o mais Misericordioso.', surahRef: 'Yusuf 12:64' },
  // 18 - Provisao
  { arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا', translation: 'E quem teme a Allah, Ele lhe abrirá uma saída.', surahRef: 'At-Talaq 65:2' },
  // 19 - Orientacao
  { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guia-nos ao caminho reto.', surahRef: 'Al-Fatihah 1:6' },
  // 20 - Luz
  { arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ', translation: 'Allah é a luz dos céus e da terra.', surahRef: 'An-Nur 24:35' },
  // 21 - Humildade
  { arabic: 'وَاخْفِضْ جَنَاحَكَ لِلْمُؤْمِنِينَ', translation: 'E abaixa tua asa protetora para os crentes.', surahRef: 'Al-Hijr 15:88' },
  // 22 - Justica
  { arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ', translation: 'Allah ordena a justiça e a excelência.', surahRef: 'An-Nahl 16:90' },
  // 23 - Retorno
  { arabic: 'وَإِلَيْهِ تُرْجَعُونَ', translation: 'E a Ele sereis retornados.', surahRef: 'Al-Baqarah 2:245' },
  // 24 - Criacao
  { arabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ', translation: 'Criamos o ser humano e sabemos o que sua alma lhe sussurra.', surahRef: 'Qaf 50:16' },
  // 25 - Refugio
  { arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', translation: 'Allah nos basta, e Ele é o melhor Protetor.', surahRef: 'Aal-Imran 3:173' },
  // 26 - Verdade
  { arabic: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ', translation: 'E diz: A verdade chegou e a falsidade pereceu.', surahRef: 'Al-Isra 17:81' },
  // 27 - Arrependimento
  { arabic: 'إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ', translation: 'Ele é o Acolhedor do arrependimento, o Misericordioso.', surahRef: 'Al-Baqarah 2:37' },
  // 28 - Vitoria
  { arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا', translation: 'Na verdade, concedemos-te uma vitória evidente.', surahRef: 'Al-Fath 48:1' },
  // 29 - Beleza
  { arabic: 'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ', translation: 'Allah é belo e ama a beleza.', surahRef: 'Hadith — Muslim' },
  // 30 - Confianca plena
  { arabic: 'فَفِرُّوا إِلَى اللَّهِ', translation: 'Refugiai-vos em Allah.', surahRef: 'Adh-Dhariyat 51:50' },
]

export const NAMES_PREVIEW = [
  { arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', meaning: 'O Infinitamente Misericordioso' },
  { arabic: 'الرَّحِيمُ', transliteration: 'Ar-Rahim', meaning: 'O Constantemente Misericordioso' },
  { arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaning: 'O Soberano' },
  { arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaning: 'O Sagrado' },
  { arabic: 'السَّلَامُ', transliteration: 'As-Salam', meaning: 'A Paz' },
  { arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', meaning: 'O Guardião da Fé' },
  { arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaning: 'O Vigilante' },
  { arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaning: 'O Todo-Poderoso' },
  { arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaning: 'O Irresistível' },
  { arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaning: 'O Supremo' },
]
