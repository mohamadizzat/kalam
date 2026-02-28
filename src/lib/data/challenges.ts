export type ChallengeDay = {
  day: number
  task: string
  verse: string
  translation: string
  ref: string
  reflection: string
}

export type Challenge = {
  slug: string
  title: string
  arabicTitle: string
  description: string
  duration: number
  icon: string
  days: ChallengeDay[]
}

export const challenges: Challenge[] = [
  // ═══════════════════════════════════════════════════════
  // 1. GRATIDAO — 7 DIAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'gratidao-7',
    title: '7 Dias de Gratidao',
    arabicTitle: 'الشُّكْر',
    description: 'Cada dia, encontre algo que voce nunca agradeceu. Escreva. Mude sua perspectiva.',
    duration: 7,
    icon: '\u{1F932}',
    days: [
      {
        day: 1,
        task: 'Agradeca por algo no seu corpo que funciona sem voce perceber. Seu coracao bate 100 mil vezes por dia sem que voce peca. Hoje, perceba.',
        verse: 'وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ',
        translation: 'E se tentardes contar as gracas de Deus, nao podereis enumera-las. Deus e Perdoador, Misericordioso.',
        ref: 'Surah An-Nahl 16:18',
        reflection: 'O que voce percebeu hoje que nunca tinha agradecido?',
      },
      {
        day: 2,
        task: 'Agradeca por uma pessoa que esta na sua vida agora. Nao diga a ela — apenas reflita internamente sobre o impacto que essa pessoa tem.',
        verse: 'لَا يَشْكُرُ اللَّهَ مَنْ لَا يَشْكُرُ النَّاسَ',
        translation: 'Nao agradece a Deus quem nao agradece as pessoas.',
        ref: 'Sunan Abu Dawud 4811',
        reflection: 'O que essa pessoa trouxe para sua vida que voce nao teria sozinho?',
      },
      {
        day: 3,
        task: 'Agradeca por uma dificuldade que voce enfrentou no passado. O que ela te ensinou? Como ela te moldou?',
        verse: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'Pois com a dificuldade vem a facilidade. Certamente, com a dificuldade vem a facilidade.',
        ref: 'Surah Ash-Sharh 94:5-6',
        reflection: 'Qual dificuldade do passado voce hoje reconhece como benedicao?',
      },
      {
        day: 4,
        task: 'Agradeca pela comida de hoje. Antes de comer, pause. Pense no caminho que o alimento fez ate chegar ao seu prato. Da terra, da chuva, das maos que plantaram.',
        verse: 'فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ ۝ أَنَّا صَبَبْنَا الْمَاءَ صَبًّا ۝ ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا',
        translation: 'Que o ser humano olhe para o seu alimento: Nos derramamos a agua abundantemente, depois fendemos a terra em fissuras.',
        ref: 'Surah Abasa 80:24-26',
        reflection: 'Voce conseguiu comer devagar e presente hoje? O que sentiu?',
      },
      {
        day: 5,
        task: 'Agradeca por algo que voce nao tem — mas que a ausencia te protegeu de algo pior. Nem toda porta fechada foi castigo.',
        verse: 'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ',
        translation: 'E pode ser que detesteis algo que e bom para vos, e pode ser que ameis algo que e mau para vos.',
        ref: 'Surah Al-Baqarah 2:216',
        reflection: 'Qual porta fechada voce hoje entende que foi protecao?',
      },
      {
        day: 6,
        task: 'Agradeca pelo lar onde voce dorme. Tem teto, parede, cama. Bilhoes nao tem. Hoje, olhe cada comodo com olhos novos.',
        verse: 'وَاللَّهُ جَعَلَ لَكُم مِّن بُيُوتِكُمْ سَكَنًا',
        translation: 'E Deus fez de vossas casas um lugar de descanso para vos.',
        ref: 'Surah An-Nahl 16:80',
        reflection: 'Voce olhou para sua casa de forma diferente hoje? O que notou?',
      },
      {
        day: 7,
        task: 'Dia final. Escreva uma lista de 10 coisas pelas quais voce e grato. Releia em voz alta. Este exercicio muda o cerebro — literalmente.',
        verse: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ',
        translation: 'Se fordes gratos, certamente vos aumentarei. E se fordes ingratos, meu castigo e severo.',
        ref: 'Surah Ibrahim 14:7',
        reflection: 'Depois de 7 dias, o que mudou na forma como voce ve a vida?',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 2. SILENCIO MATINAL — 7 DIAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'silencio-7',
    title: '7 Dias de Silencio Matinal',
    arabicTitle: 'السَّكِينَة',
    description: 'Acorde 10 minutos antes. Sem celular. Sem musica. So silencio e presenca.',
    duration: 7,
    icon: '\u{1F305}',
    days: [
      {
        day: 1,
        task: 'Acorde 10 minutos antes do habitual. Nao toque no celular. Sente-se em silencio. Apenas respire. Nao faca nada. So exista.',
        verse: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        translation: 'Nao e com a lembranca de Deus que os coracoes se tranquilizam?',
        ref: 'Surah Ar-Ra\'d 13:28',
        reflection: 'Como foi resistir a vontade de pegar o celular? O que voce sentiu?',
      },
      {
        day: 2,
        task: 'No silencio matinal de hoje, foque na sua respiracao. Inspire em 4 tempos, segure 4, expire em 6. Repita 10 vezes. Isso e dhikr do corpo.',
        verse: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        translation: 'E Nos estamos mais perto dele do que sua veia jugular.',
        ref: 'Surah Qaf 50:16',
        reflection: 'Voce conseguiu manter o foco na respiracao? Quando a mente fugiu, o que apareceu?',
      },
      {
        day: 3,
        task: 'No silencio, olhe pela janela. Observe o ceu. Nao nomeie, nao julgue. Apenas veja. O mundo esta funcionando sem sua intervencao.',
        verse: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',
        translation: 'Na criacao dos ceus e da terra e na alternancia da noite e do dia ha sinais para os dotados de entendimento.',
        ref: 'Surah Aal-Imran 3:190',
        reflection: 'O que voce viu no ceu hoje que nunca tinha notado?',
      },
      {
        day: 4,
        task: 'No silencio matinal, faca uma dua (suplica) com suas proprias palavras. Nao use formulas decoradas. Fale com Deus como falaria com alguem que te conhece por inteiro.',
        verse: 'ادْعُونِي أَسْتَجِبْ لَكُمْ',
        translation: 'Invocai-Me e Eu vos responderei.',
        ref: 'Surah Ghafir 40:60',
        reflection: 'Como foi falar com Deus sem script? O que saiu?',
      },
      {
        day: 5,
        task: 'Hoje o silencio e para ouvir. Sente-se e pergunte internamente: o que preciso ouvir hoje? Fique quieto. Nao force. Deixe vir.',
        verse: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
        translation: 'E quando Meus servos te perguntarem sobre Mim, diz que Eu estou proximo.',
        ref: 'Surah Al-Baqarah 2:186',
        reflection: 'O que veio? Foi pensamento, sentimento ou imagem?',
      },
      {
        day: 6,
        task: 'No silencio de hoje, perdoe alguem mentalmente. Traga a imagem da pessoa, sinta o que sentir, e solte. Diga internamente: eu te libero e me libero.',
        verse: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
        translation: 'E os que conteem a raiva e perdoam as pessoas. E Deus ama os que fazem o bem.',
        ref: 'Surah Aal-Imran 3:134',
        reflection: 'Quem voce escolheu? O que sentiu ao liberar?',
      },
      {
        day: 7,
        task: 'Ultimo dia. 10 minutos em silencio total. Sem instrucao. Sem foco. Apenas esteja. Voce ja sabe como. O silencio agora e seu amigo.',
        verse: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ۝ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً',
        translation: 'O alma serena! Retorna ao teu Senhor, satisfeita e aceita.',
        ref: 'Surah Al-Fajr 89:27-28',
        reflection: 'Voce vai manter o silencio matinal? O que ele trouxe para seus dias?',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 3. PERDAO — 7 DIAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'perdao-7',
    title: '7 Dias de Perdao',
    arabicTitle: 'الْمَغْفِرَة',
    description: 'Cada dia, solte uma magoa. Pequena ou grande. O perdao e para voce, nao para eles.',
    duration: 7,
    icon: '\u{1F54A}\u{FE0F}',
    days: [
      {
        day: 1,
        task: 'Perdoe a si mesmo por algo recente. Um erro, uma falha, uma promessa quebrada. Voce e humano. Escreva: "Eu me perdoo por ___".',
        verse: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',
        translation: 'Diz: O Meus servos que excederam contra si mesmos, nao desespereis da misericordia de Deus. Deus perdoa todos os pecados.',
        ref: 'Surah Az-Zumar 39:53',
        reflection: 'Como voce se sentiu ao escrever o autoperdao? Leve ou pesado?',
      },
      {
        day: 2,
        task: 'Perdoe alguem que te magoou sem querer. Uma palavra mal colocada, um esquecimento, uma falta de atencao. Escolha entender antes de julgar.',
        verse: 'خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ',
        translation: 'Adota o perdao, ordena o bem e afasta-te dos ignorantes.',
        ref: 'Surah Al-A\'raf 7:199',
        reflection: 'Voce conseguiu ver a perspectiva da outra pessoa? O que descobriu?',
      },
      {
        day: 3,
        task: 'Perdoe alguem que te magoou de proposito. Isso e o mais dificil. Nao significa aceitar o que fizeram — significa se libertar da prisao que a magoa criou.',
        verse: 'وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ',
        translation: 'Que perdoem e relevem. Nao gostariam que Deus vos perdoasse?',
        ref: 'Surah An-Nur 24:22',
        reflection: 'Qual magoa voce decidiu soltar? O que sentiu no peito?',
      },
      {
        day: 4,
        task: 'Perdoe seus pais por algo que te machucou. Toda crianca carrega marcas. Hoje, olhe para eles como seres humanos imperfeitos que fizeram o que puderam.',
        verse: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
        translation: 'E teu Senhor decretou que nao adoreis senao a Ele e que sejais bondosos com vossos pais.',
        ref: 'Surah Al-Isra 17:23',
        reflection: 'O que voce entende agora sobre seus pais que nao entendia antes?',
      },
      {
        day: 5,
        task: 'Perdoe Deus — ou melhor, faca as pazes com aquilo que voce nao entendeu. Aquela perda, aquela dor, aquele "por que eu?". Confie que ha algo que voce ainda nao ve.',
        verse: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        translation: 'Deus nao sobrecarrega nenhuma alma alem de sua capacidade.',
        ref: 'Surah Al-Baqarah 2:286',
        reflection: 'Voce conseguiu soltar a pergunta "por que?" em relacao a algo? O que aconteceu dentro de voce?',
      },
      {
        day: 6,
        task: 'Peca perdao a alguem. Nao internamente — de verdade. Uma mensagem, um telefonema, um olhar. A humildade de pedir perdao e uma das forcas mais raras.',
        verse: 'وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ',
        translation: 'E aqueles que, quando cometem uma indecencia ou injusticam a si mesmos, lembram de Deus e pedem perdao pelos seus pecados.',
        ref: 'Surah Aal-Imran 3:135',
        reflection: 'Voce conseguiu pedir perdao a alguem? Como a pessoa reagiu? Como voce se sentiu?',
      },
      {
        day: 7,
        task: 'Dia final. Faca istighfar 100 vezes. "Astaghfirullah" — peco perdao a Deus. Cada repeticao e uma camada de peso saindo. Solte tudo.',
        verse: 'وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا',
        translation: 'E quem pratica o mal ou injustica a si mesmo, e depois pede perdao a Deus, encontrara Deus Perdoador, Misericordioso.',
        ref: 'Surah An-Nisa 4:110',
        reflection: 'Depois de 7 dias de perdao, o que voce carrega de mais leve agora?',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 4. JEJUM CONSCIENTE — 7 DIAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'jejum-7',
    title: '7 Dias de Jejum Consciente',
    arabicTitle: 'الصِّيَام',
    description: 'Jejum intermitente ancestral. Nao coma do nascer ao por do sol. Sinta o que 1.8 bilhao de pessoas sentem no Ramadan.',
    duration: 7,
    icon: '\u{1F319}',
    days: [
      {
        day: 1,
        task: 'Primeiro dia de jejum. Nao coma nem beba do nascer ao por do sol. Quando a fome vier, nao lute — observe. Ela e uma mensageira, nao uma inimiga.',
        verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
        translation: 'O vos que credes! O jejum vos foi prescrito como foi prescrito aos que vieram antes de vos, para que alcanceis a consciencia de Deus.',
        ref: 'Surah Al-Baqarah 2:183',
        reflection: 'Quando a fome veio, o que voce sentiu alem da fome? O que ela revelou?',
      },
      {
        day: 2,
        task: 'Jejue o corpo E a lingua. Nao fofoque, nao reclame, nao minta. Quando sentir vontade de falar mal de alguem, diga: "Estou jejuando."',
        verse: 'مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ',
        translation: 'Quem nao abandona a fala falsa e a pratica dela, Deus nao precisa que abandone sua comida e bebida.',
        ref: 'Sahih al-Bukhari 1903',
        reflection: 'Quantas vezes voce quase reclamou ou falou algo desnecessario? Conseguiu parar?',
      },
      {
        day: 3,
        task: 'Jejue e faca caridade. Doe algo hoje — dinheiro, tempo, um sorriso, uma refeicao. O jejum esvazia o corpo para que a alma se encha.',
        verse: 'وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ابْتِغَاءَ وَجْهِ اللَّهِ',
        translation: 'E o que gastardes de bem e para vos mesmos. E nao gastais senao buscando a face de Deus.',
        ref: 'Surah Al-Baqarah 2:272',
        reflection: 'O que voce doou hoje? Como o jejum influenciou sua generosidade?',
      },
      {
        day: 4,
        task: 'Jejue e leia Alcorao. Mesmo 1 pagina. O jejum e o Alcorao se encontram no Ramadan por um motivo — um prepara o coracao para o outro.',
        verse: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ',
        translation: 'O mes de Ramadan no qual foi revelado o Alcorao, orientacao para a humanidade e provas claras de guia e discernimento.',
        ref: 'Surah Al-Baqarah 2:185',
        reflection: 'O que voce leu hoje? Como o jejum mudou sua leitura?',
      },
      {
        day: 5,
        task: 'Jejue e reflita sobre quem passa fome nao por escolha, mas por falta. Hoje voce escolheu nao comer. Milhoes nao tem essa escolha. Sinta isso.',
        verse: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ۝ فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ۝ وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ',
        translation: 'Viste aquele que nega a religiao? E aquele que repele o orfao e nao incentiva a alimentacao do pobre.',
        ref: 'Surah Al-Ma\'un 107:1-3',
        reflection: 'O jejum te conectou com a dor do outro? O que voce sentiu?',
      },
      {
        day: 6,
        task: 'Jejue e faca dua antes de quebrar o jejum. O momento mais poderoso de suplica e quando voce esta com fome, fraco, dependente. Ali, voce e real.',
        verse: 'ثَلَاثَةٌ لَا تُرَدُّ دَعْوَتُهُمْ: الصَّائِمُ حَتَّى يُفْطِرَ',
        translation: 'Tres pessoas tem suas suplicas aceitas: o jejuante ate quebrar o jejum.',
        ref: 'Sunan at-Tirmidhi 3598',
        reflection: 'O que voce pediu no momento de quebrar o jejum? Veio do coracao?',
      },
      {
        day: 7,
        task: 'Ultimo dia. Jejue com consciencia plena. Cada segundo de fome e uma conversa com Deus. Quebre o jejum com tamara e agua, como o Profeta fazia.',
        verse: 'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
        translation: 'E comei e bebei, mas nao desperdiceis. Ele nao ama os desperdicadores.',
        ref: 'Surah Al-A\'raf 7:31',
        reflection: 'Depois de 7 dias, qual e a sua relacao com a comida agora? Algo mudou?',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 5. GENEROSIDADE — 7 DIAS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'generosidade-7',
    title: '7 Dias de Generosidade',
    arabicTitle: 'الْكَرَم',
    description: 'Cada dia, faca algo por alguem sem esperar nada em troca. Observe o que muda em voce.',
    duration: 7,
    icon: '\u{2728}',
    days: [
      {
        day: 1,
        task: 'De um elogio sincero a alguem que voce normalmente nao elogiaria. Um colega, um desconhecido, alguem que serve voce no dia a dia. Olhe nos olhos.',
        verse: 'وَقُولُوا لِلنَّاسِ حُسْنًا',
        translation: 'E falai as pessoas com bondade.',
        ref: 'Surah Al-Baqarah 2:83',
        reflection: 'Como a pessoa reagiu? O que voce sentiu ao elogiar de verdade?',
      },
      {
        day: 2,
        task: 'Doe dinheiro. Qualquer quantia. R$5 ou R$500 — o valor nao importa. O que importa e o ato de soltar. Doe sem que ninguem saiba.',
        verse: 'إِن تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ ۖ وَإِن تُخْفُوهَا وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَّكُمْ',
        translation: 'Se mostrardes vossas caridades, e bom. Mas se as ocultardes e as derdes aos pobres, isso e melhor para vos.',
        ref: 'Surah Al-Baqarah 2:271',
        reflection: 'Doer ao soltar o dinheiro? Ou sentiu leveza? O que isso diz sobre voce?',
      },
      {
        day: 3,
        task: 'Doe seu tempo. Ajude alguem com algo que voce sabe fazer. Ensine, escute, esteja presente. O tempo e o recurso mais precioso que voce tem.',
        verse: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
        translation: 'E cooperai na bondade e na consciencia de Deus.',
        ref: 'Surah Al-Ma\'idah 5:2',
        reflection: 'Quem voce ajudou? O que aprendeu ao servir?',
      },
      {
        day: 4,
        task: 'Alimente alguem. Compre uma refeicao para alguem na rua, convide alguem para comer, ou leve comida para um vizinho. O alimento compartilhado e sagrado.',
        verse: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا',
        translation: 'E alimentam, por amor a Ele, o pobre, o orfao e o cativo.',
        ref: 'Surah Al-Insan 76:8',
        reflection: 'Como foi alimentar alguem? O que viu nos olhos da pessoa?',
      },
      {
        day: 5,
        task: 'Faca dua por alguem sem que ela saiba. Escolha uma pessoa — pode ser um amigo, um inimigo, um desconhecido. Peca a Deus por ela em silencio.',
        verse: 'دَعْوَةُ الْمُسْلِمِ لِأَخِيهِ بِظَهْرِ الْغَيْبِ مُسْتَجَابَةٌ',
        translation: 'A suplica do muculmano pelo seu irmao em sua ausencia e aceita.',
        ref: 'Sahih Muslim 2732',
        reflection: 'Por quem voce orou? Foi facil ou dificil desejar o bem para essa pessoa?',
      },
      {
        day: 6,
        task: 'Perdoe uma divida. Alguem te deve algo — dinheiro, favor, desculpa. Solte. Anule a divida. A generosidade mais radical e a que nao cobra.',
        verse: 'وَأَن تَصَدَّقُوا خَيْرٌ لَّكُمْ ۖ إِن كُنتُمْ تَعْلَمُونَ',
        translation: 'E que doeis e melhor para vos, se soubesseis.',
        ref: 'Surah Al-Baqarah 2:280',
        reflection: 'O que voce soltou? Como se sentiu ao nao cobrar mais?',
      },
      {
        day: 7,
        task: 'Dia final. Faca tres atos de generosidade em um unico dia — um de palavra, um de acao, um de dinheiro. Feche o desafio transbordando.',
        verse: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ',
        translation: 'O exemplo daqueles que gastam suas riquezas no caminho de Deus e como o de um grao que produz sete espigas, cada espiga com cem graos.',
        ref: 'Surah Al-Baqarah 2:261',
        reflection: 'Depois de 7 dias de generosidade, o que mudou em voce? Voce se sente mais leve ou mais cheio?',
      },
    ],
  },
]
