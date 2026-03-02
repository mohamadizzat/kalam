// escrituras-halal.ts — Kalam Brasil
// Mapeamento completo das escrituras que o muçulmano pode ler e crer
// Organizadas por livro, secao e versiculo, com paralelos coranicos

export type Confidence = 'full' | 'context'

export interface QuranEcho {
  reference: string
  arabic: string
  translation: string
}

export interface HalalPassage {
  id: string
  reference: string
  text: string
  theme: string
  confidence: Confidence
  note: string
  quranEcho?: QuranEcho
  hadith?: string
}

export interface HalalSection {
  id: string
  title: string
  subtitle?: string
  arabicTitle?: string
  prophetName?: string
  passages: HalalPassage[]
}

export interface HalalBook {
  id: string
  name: string
  arabicName: string
  testament: 'antigo' | 'novo'
  description: string
  islamicContext: string
  quranConfirmation: { reference: string; text: string }
  color: string
  icon: string
  sections: HalalSection[]
}

// ─────────────────────────────────────────────────────────────────────────────
// SALMOS (ZABUR)
// ─────────────────────────────────────────────────────────────────────────────
const salmos: HalalBook = {
  id: 'salmos',
  name: 'Salmos',
  arabicName: 'الزبور',
  testament: 'antigo',
  description: 'O livro dos Salmos é o Zabur — orações, louvores e lamentos do Profeta Dawud (as). O único livro que o Alcorão menciona pelo nome como escritura revelada a um profeta específico.',
  islamicContext: 'O Alcorão confirma os Salmos (Zabur) em múltiplos versículos. O Salmo 37:11 é citado quase palavra por palavra em Al-Anbiya 21:105. Dawud (as) era conhecido por sua voz extraordinária e por fazer tasbih com as montanhas e os pássaros.',
  quranConfirmation: {
    reference: 'An-Nisa 4:163',
    text: 'Revelamos a ti como revelamos a Noé e aos profetas depois dele, e revelamos a Abraão, Ismael, Isaque, Jacó, as tribos, Jesus, Jó, Jonas, Aarão e Salomão, e demos os Salmos a Davi.',
  },
  color: '#7BADE2',
  icon: 'Music',
  sections: [
    {
      id: 'salmos-tawhid',
      title: 'Tawhid — A Unicidade de Deus',
      subtitle: 'Salmos que proclamam Deus como único',
      passages: [
        {
          id: 'sl-86-10',
          reference: 'Salmos 86:10',
          text: 'Porque tu és grande e fazes maravilhas; só tu és Deus.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Uma das declarações mais diretas de monoteísmo nas escrituras hebraicas. "Só tu és Deus" é La ilaha illa Allah em forma poética.',
          quranEcho: {
            reference: 'Al-Ikhlas 112:1',
            arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
            translation: 'Dize: Ele é Allah, o Único.',
          },
        },
        {
          id: 'sl-96-4-5',
          reference: 'Salmos 96:4-5',
          text: 'Pois o Senhor é grande e muito digno de ser louvado; temível é ele acima de todos os deuses. Porque todos os deuses das nações são ídolos, mas o Senhor fez os céus.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Critica direta aos ídolos — os deuses das nações são falsos. Apenas o Criador dos céus é real. Alinhamento perfeito com o Alcorão.',
          quranEcho: {
            reference: 'Al-Anbiya 21:22',
            arabic: 'لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ لَفَسَدَتَا',
            translation: 'Se houvesse neles deuses além de Allah, certamente ambos estariam em desordem.',
          },
        },
        {
          id: 'sl-46-10',
          reference: 'Salmos 46:10',
          text: 'Aquietai-vos e sabei que eu sou Deus; serei exaltado entre as nações, serei exaltado na terra.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Deus ordenando silêncio interior para o reconhecimento da Sua presença. Paralelo com muraqabah — a consciência de Allah.',
          quranEcho: {
            reference: 'Al-Baqarah 2:255',
            arabic: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
            translation: 'Allah! Não há deus além dEle, o Vivente, o Sustentador.',
          },
        },
        {
          id: 'sl-113-1-4',
          reference: 'Salmos 113:1-4',
          text: 'Louvai ao Senhor! Louvai, servos do Senhor, louvai o nome do Senhor. Seja o nome do Senhor bendito, desde agora e para sempre. Desde o nascente do sol até o seu poente seja louvado o nome do Senhor. O Senhor é exaltado acima de todas as nações, a sua glória, acima dos céus.',
          theme: 'tawhid',
          confidence: 'full',
          note: '"Do nascer ao pôr do sol" — como os cinco horários de oração que cobrem o dia completo. A glória de Deus acima dos céus é aqidah islâmica pura.',
          quranEcho: {
            reference: 'Al-Isra 17:44',
            arabic: 'وَإِن مِّن شَىْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِۦ',
            translation: 'Não há coisa alguma que não proclame Seu louvor, mas vós não compreendeis o louvor deles.',
          },
        },
        {
          id: 'sl-24-1',
          reference: 'Salmos 24:1',
          text: 'Do Senhor é a terra e tudo o que nela existe, o mundo e aqueles que nele habitam.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Tudo pertence a Allah. Base da ética islâmica de khalifah — somos guardiões, não donos.',
          quranEcho: {
            reference: 'Al-Baqarah 2:284',
            arabic: 'لِّلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ',
            translation: 'De Allah é o que há nos céus e o que há na terra.',
          },
        },
      ],
    },
    {
      id: 'salmos-dawud',
      title: 'Dawud — Oração e Arrependimento',
      subtitle: 'Os salmos mais pessoais do Profeta Dawud (as)',
      prophetName: 'Dawud',
      passages: [
        {
          id: 'sl-51-1-4',
          reference: 'Salmos 51:1-4, 10-12',
          text: 'Tem misericórdia de mim, ó Deus, conforme a tua graça; segundo a imensidão das tuas misericórdias, apaga as minhas transgressões. Lava-me completamente da minha iniquidade e purifica-me do meu pecado. Porque eu conheço as minhas transgressões, e o meu pecado está sempre diante de mim. Contra ti, somente contra ti, pequei... Cria em mim, ó Deus, um coração puro e renova em mim um espírito firme.',
          theme: 'tawbah',
          confidence: 'full',
          note: 'Dawud (as) pecou e fez tawbah — arrependimento genuíno. Este salmo mostra que o perdão não precisa de intermediário. O Alcorão confirma que Dawud se arrependeu e Allah o perdoou (Sad 38:24-25).',
          quranEcho: {
            reference: 'Az-Zumar 39:53',
            arabic: 'إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا',
            translation: 'Certamente Allah perdoa todos os pecados. Ele é o Perdoador, o Misericordioso.',
          },
        },
        {
          id: 'sl-23-1-6',
          reference: 'Salmos 23:1-6',
          text: 'O Senhor é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes; leva-me a águas de descanso. Restaura a minha alma; guia-me pelas veredas da justiça por amor do seu nome. Mesmo que eu ande pelo vale da sombra da morte, não temerei mal algum, pois tu estás comigo. Bondade e amor hão de seguir-me todos os dias da minha vida.',
          theme: 'tawakkul',
          confidence: 'full',
          note: 'Tawakkul — confiança total em Allah. "Nada me faltará" é a fé de quem sabe que o Rizq vem de Deus. "Vale da sombra da morte" — a morte não é para temer quando se está com Allah.',
          quranEcho: {
            reference: 'At-Talaq 65:3',
            arabic: 'وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥ',
            translation: 'E quem confia em Allah, Ele lhe é suficiente.',
          },
        },
        {
          id: 'sl-130-1-4',
          reference: 'Salmos 130:1-4',
          text: 'Das profundezas clamo a ti, ó Senhor. Senhor, ouve a minha voz; sejam os teus ouvidos atentos à voz das minhas súplicas. Se tu, Senhor, guardares em memória as iniquidades, ó Senhor, quem subsistirá? Porém em ti há perdão, para que sejas temido.',
          theme: 'dua',
          confidence: 'full',
          note: 'Dua das profundezas — paralelo com a dua de Yunus (as) no ventre da baleia. "Quem subsistiria?" — reconhecimento da fragilidade humana ante Allah.',
          quranEcho: {
            reference: 'Al-Anbiya 21:87',
            arabic: 'لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ',
            translation: 'Não há deus além de Ti, glória a Ti! Certamente fui dos injustos.',
          },
        },
      ],
    },
    {
      id: 'salmos-louvor',
      title: 'Louvor e Gratidão',
      subtitle: 'Tasbih e Hamd nas palavras de Dawud (as)',
      passages: [
        {
          id: 'sl-103-1-8',
          reference: 'Salmos 103:1-5, 8',
          text: 'Bendize ao Senhor, ó minha alma, e tudo o que há em mim bendiga o seu santo nome. Ele é quem perdoa todas as tuas iniquidades, quem sara todas as tuas enfermidades, quem resgata a tua vida da cova, quem te coroa de graça e de compaixões... O Senhor é compassivo e misericordioso, devagar para a ira e abundante em graça.',
          theme: 'shukr',
          confidence: 'full',
          note: '"Compassivo e misericordioso, devagar para a ira" — os Nomes de Allah: Ar-Rahman, Ar-Rahim. A mesma abertura da Fatiha, a mesma qualidade.',
          quranEcho: {
            reference: 'Al-Fatiha 1:1-3',
            arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
            translation: 'Em nome de Allah, o Clemente, o Misericordioso. O louvor pertence a Allah, Senhor dos mundos, o Clemente, o Misericordioso.',
          },
        },
        {
          id: 'sl-150',
          reference: 'Salmos 150:1-6',
          text: 'Louvai a Deus em seu santuário; louvai-o no firmamento do seu poder. Louvai-o pelos seus feitos poderosos; louvai-o pela sua excelência soberana. Louvai-o com o soar da trombeta; louvai-o com harpa e cítara. Que tudo o que tem fôlego louve ao Senhor! Aleluia!',
          theme: 'tasbih',
          confidence: 'full',
          note: '"Tudo que tem fôlego louve ao Senhor" — no Islam, toda criação faz tasbih. As pedras, os pássaros, os rios. Dawud (as) fez o universo louvar com ele.',
          quranEcho: {
            reference: 'Al-Isra 17:44',
            arabic: 'تُسَبِّحُ لَهُ ٱلسَّمَٰوَٰتُ ٱلسَّبْعُ وَٱلْأَرْضُ وَمَن فِيهِنَّ',
            translation: 'Os sete céus, a terra e tudo o que neles existe O glorificam.',
          },
        },
        {
          id: 'sl-19-1-4',
          reference: 'Salmos 19:1-4',
          text: 'Os céus declaram a glória de Deus; o firmamento proclama a obra das suas mãos. Um dia discursa a outro dia, e uma noite revela conhecimento a outra noite. Sem palavras, sem linguagem, sem que se ouça qualquer voz — por toda a terra se ouve o seu som.',
          theme: 'ayat',
          confidence: 'full',
          note: 'Os Ayat (sinais) de Allah na criação. Os céus são prova — "afinal, não veem os céus sobre eles?" O universo inteiro é uma revelação contínua.',
          quranEcho: {
            reference: 'Fussilat 41:53',
            arabic: 'سَنُرِيهِمْ ءَايَٰتِنَا فِى ٱلْآفَاقِ وَفِىٓ أَنفُسِهِمْ',
            translation: 'Mostraremos a eles Nossos sinais nos horizontes e em si mesmos.',
          },
        },
        {
          id: 'sl-121-1-8',
          reference: 'Salmos 121:1-8',
          text: 'Elevo os meus olhos para os montes: onde me virá o socorro? O meu socorro vem do Senhor, que fez os céus e a terra. Ele não deixará que o teu pé tropece; aquele que te guarda não dormitará. Na verdade, não dormita nem dorme o guarda de Israel. O Senhor te guardará de todo mal; ele guardará a tua alma.',
          theme: 'tawakkul',
          confidence: 'full',
          note: '"Não dormita nem dorme" — Ayat al-Kursi: "Não O vencem o sono nem a sonolência". Idêntico. O Deus que Dawud conheceu é o mesmo Allah do Alcorão.',
          quranEcho: {
            reference: 'Al-Baqarah 2:255',
            arabic: 'لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ',
            translation: 'Não O vencem o sono nem a sonolência.',
          },
        },
        {
          id: 'sl-37-11',
          reference: 'Salmos 37:11',
          text: 'Mas os mansos herdarão a terra e se deliciarão na abundância da paz.',
          theme: 'akhirah',
          confidence: 'full',
          note: 'ÚNICO versículo da Bíblia citado quase literalmente no Alcorão. Allah disse no Alcorão: "Já escrevemos nos Salmos..." — confirmando este versículo específico como verdade divina que persiste.',
          quranEcho: {
            reference: 'Al-Anbiya 21:105',
            arabic: 'وَلَقَدْ كَتَبْنَا فِى ٱلزَّبُورِ مِنۢ بَعْدِ ٱلذِّكْرِ أَنَّ ٱلْأَرْضَ يَرِثُهَا عِبَادِىَ ٱلصَّٰلِحُونَ',
            translation: 'Já escrevemos nos Salmos, depois do Dhikr, que a terra será herdada pelos Meus servos justos.',
          },
        },
        {
          id: 'sl-139-1-10',
          reference: 'Salmos 139:1-10',
          text: 'Senhor, tu me sondaste e me conheces. Tu sabes quando me sento e quando me levanto; de longe entendes os meus pensamentos. Antes que a palavra chegue à minha boca, tu já a conheces totalmente. Para onde me irei do teu Espírito? Para onde fugirei da tua presença? Se subir ao céu, lá estás tu; se fizer minha cama nas profundezas, lá estás.',
          theme: 'omnisciencia',
          confidence: 'full',
          note: 'Al-Alim (o Onisciente), Al-Khabir (o Sabedor). Allah conhece o que está no peito, o pensamento antes da palavra. Dawud viveu essa realidade.',
          quranEcho: {
            reference: 'Qaf 50:16',
            arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ',
            translation: 'Somos mais próximos dele do que sua própria veia jugular.',
          },
        },
      ],
    },
    {
      id: 'salmos-esperanca',
      title: 'Esperança e Refúgio',
      passages: [
        {
          id: 'sl-27-1',
          reference: 'Salmos 27:1',
          text: 'O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?',
          theme: 'iman',
          confidence: 'full',
          note: 'Deus como Luz — An-Nur. A fé elimina o medo. Quem tem Allah não tem o que temer. Dawud viveu isso literalmente como guerreiro e rei.',
          quranEcho: {
            reference: 'An-Nur 24:35',
            arabic: 'ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ',
            translation: 'Allah é a luz dos céus e da terra.',
          },
        },
        {
          id: 'sl-91-1-4',
          reference: 'Salmos 91:1-4',
          text: 'Aquele que habita no abrigo do Altíssimo e descansa à sombra do Todo-poderoso pode dizer ao Senhor: Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio. Certamente ele te livrará do laço do passarinheiro e da peste destruidora. Ele te cobrirá com as suas penas, e sob as suas asas te abrigarás.',
          theme: 'tawakkul',
          confidence: 'full',
          note: 'Proteção divina para quem "habita no abrigo do Altíssimo" — aquele que se lembra de Allah. A proteção de Allah para os que se refugiam nEle.',
          quranEcho: {
            reference: 'Al-Maidah 5:11',
            arabic: 'وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ',
            translation: 'E nos confiem em Allah os crentes.',
          },
        },
        {
          id: 'sl-62-5-8',
          reference: 'Salmos 62:5-8',
          text: 'Só em Deus repousa a minha alma, pois nele está a minha esperança. Só ele é a minha rocha e a minha salvação; ele é o meu refúgio: não serei abalado. Povo, confiai nele em todo tempo; desabafai diante dele o vosso coração, pois Deus é o nosso refúgio.',
          theme: 'dua',
          confidence: 'full',
          note: '"Desabafai diante dele o vosso coração" — isso é dua. Não há intermediário. Direto a Allah. O mesmo ensinamento do Alcorão: "Chama-Me, Eu responderei."',
          quranEcho: {
            reference: 'Al-Baqarah 2:186',
            arabic: 'وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ',
            translation: 'Quando Meus servos perguntarem sobre Mim, dize que sou próximo. Atendo ao chamado do suplicante quando me chama.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// PROVÉRBIOS
// ─────────────────────────────────────────────────────────────────────────────
const proverbios: HalalBook = {
  id: 'proverbios',
  name: 'Provérbios',
  arabicName: 'الأمثال',
  testament: 'antigo',
  description: 'Sabedoria prática de Sulayman (as) — o rei mais sábio. Provérbios é um manual de adab: como viver, falar, trabalhar, liderar e relacionar-se com integridade.',
  islamicContext: 'Sulayman (as) recebeu de Allah hikmah (sabedoria) sem precedente. O Alcorão dedica uma surah inteira a ele. Os Provérbios refletem a sabedoria que Allah concedeu a ele — ética, humildade, honestidade, cuidado com o pobre.',
  quranConfirmation: {
    reference: 'An-Naml 27:15',
    text: 'Demos a Dawud e a Sulayman conhecimento. Eles disseram: Louvado seja Allah, que nos preferiu a muitos de Seus servos crentes.',
  },
  color: '#C9A84C',
  icon: 'BookOpen',
  sections: [
    {
      id: 'proverbios-sabedoria',
      title: 'Hikmah — A Sabedoria como Dom',
      passages: [
        {
          id: 'pv-1-7',
          reference: 'Provérbios 1:7',
          text: 'O temor do Senhor é o princípio da sabedoria; os insensatos desprezam a sabedoria e a instrução.',
          theme: 'taqwa',
          confidence: 'full',
          note: 'Taqwa — consciência de Allah — é a base de toda sabedoria islâmica. Sem taqwa não há hikmah. O insensato que despreza instrução é quem virou as costas para a fitrah.',
          quranEcho: {
            reference: 'Al-Baqarah 2:269',
            arabic: 'يُؤْتِى ٱلْحِكْمَةَ مَن يَشَآءُ ۚ وَمَن يُؤْتَ ٱلْحِكْمَةَ فَقَدْ أُوتِىَ خَيْرًا كَثِيرًا',
            translation: 'Ele concede sabedoria a quem quer, e quem recebe sabedoria recebeu um grande bem.',
          },
        },
        {
          id: 'pv-3-5-7',
          reference: 'Provérbios 3:5-7',
          text: 'Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. Não sejas sábio aos teus próprios olhos; teme o Senhor e desvia-te do mal.',
          theme: 'tawakkul',
          confidence: 'full',
          note: '"Não te apoies no teu próprio entendimento" — o oposto do kibr (arrogância). Tawakkul ativo: reconhece Allah em todos os caminhos. O homem que planeja mas confia em Allah — esse é o crente.',
          quranEcho: {
            reference: 'At-Talaq 65:3',
            arabic: 'وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥ ۚ إِنَّ ٱللَّهَ بَٰلِغُ أَمْرِهِ',
            translation: 'Quem confia em Allah, Ele lhe é suficiente. Allah certamente cumprirá Sua determinação.',
          },
        },
        {
          id: 'pv-4-7',
          reference: 'Provérbios 4:7',
          text: 'O princípio da sabedoria é este: adquire sabedoria; e com tudo o que possuis, adquire entendimento.',
          theme: 'ilm',
          confidence: 'full',
          note: 'Buscar conhecimento (ilm) é obrigação no Islam. O Profeta ﷺ disse: "Buscar conhecimento é obrigação de todo muçulmano." A sabedoria não é acidente — é decisão.',
          hadith: '"Buscar conhecimento é obrigação de todo muçulmano." — Ibn Majah 224',
        },
        {
          id: 'pv-16-18',
          reference: 'Provérbios 16:18',
          text: 'A soberba precede a destruição, e o espírito altivo, a queda.',
          theme: 'kibr',
          confidence: 'full',
          note: 'Kibr (arrogância) é o pecado que destruiu Iblis. O primeiro ser a cair foi o que disse "sou melhor que ele". A queda sempre começa pelo orgulho.',
          quranEcho: {
            reference: 'Al-Araf 7:13',
            arabic: 'فَٱهْبِطْ مِنْهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا',
            translation: 'Desce! Não te convém ser arrogante aqui.',
          },
        },
      ],
    },
    {
      id: 'proverbios-etica',
      title: 'Ética e Caráter',
      passages: [
        {
          id: 'pv-11-1',
          reference: 'Provérbios 11:1',
          text: 'A balança desonesta é abominação para o Senhor, mas o peso justo é o seu prazer.',
          theme: 'halal',
          confidence: 'full',
          note: 'Honestidade no comércio é fard (obrigação) no Islam. O Profeta ﷺ era comerciante conhecido como Al-Amin (O Confiável) antes da revelação.',
          quranEcho: {
            reference: 'Al-Mutaffifin 83:1-3',
            arabic: 'وَيْلٌ لِّلْمُطَفِّفِينَ ٱلَّذِينَ إِذَا ٱكْتَالُوا۟ عَلَى ٱلنَّاسِ يَسْتَوْفُونَ',
            translation: 'Ai dos defraudadores! Aqueles que, quando medem para si, exigem o pleno.',
          },
        },
        {
          id: 'pv-12-17',
          reference: 'Provérbios 12:17',
          text: 'O veraz diz o que é certo, mas a testemunha falsa, o que é enganoso.',
          theme: 'sidq',
          confidence: 'full',
          note: 'Sidq (veracidade) é um dos pilares do caráter islâmico. O Profeta ﷺ disse: "A verdade leva à bondade e a bondade leva ao Paraíso."',
          hadith: '"A verdade leva à bondade e a bondade leva ao Paraíso." — Bukhari 6094',
        },
        {
          id: 'pv-15-1',
          reference: 'Provérbios 15:1',
          text: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.',
          theme: 'akhlaq',
          confidence: 'full',
          note: 'Akhlaq islâmico: falar com suavidade. O Profeta ﷺ disse: "O forte não é aquele que vence na luta, mas aquele que controla a si mesmo na hora da raiva."',
          hadith: '"O forte não é aquele que vence na luta física. O forte é aquele que controla a si mesmo na hora da raiva." — Bukhari 6114',
        },
        {
          id: 'pv-19-17',
          reference: 'Provérbios 19:17',
          text: 'Quem tem misericórdia do pobre empresta ao Senhor, e ele lhe pagará o que fez.',
          theme: 'sadaqah',
          confidence: 'full',
          note: 'Sadaqah como empréstimo a Allah — o mesmo conceito do Alcorão. "Quem é que empresta a Allah um belo empréstimo?" Dar ao pobre é dar a Allah.',
          quranEcho: {
            reference: 'Al-Baqarah 2:245',
            arabic: 'مَّن ذَا ٱلَّذِى يُقْرِضُ ٱللَّهَ قَرْضًا حَسَنًا',
            translation: 'Quem é que empresta a Allah um belo empréstimo? Ele o multiplicará para ele muitas vezes.',
          },
        },
        {
          id: 'pv-22-6',
          reference: 'Provérbios 22:6',
          text: 'Ensina a criança no caminho em que deve andar; e, quando envelhecer, não se desviará dele.',
          theme: 'tarbiyah',
          confidence: 'full',
          note: 'Tarbiyah — educação espiritual desde criança. O Islam enfatiza ensinar Bismillah, as orações e o caráter desde a infância. A fitrah moldada cedo permanece.',
          quranEcho: {
            reference: 'At-Tahrim 66:6',
            arabic: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ قُوٓا۟ أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',
            translation: 'Ó crentes! Protegei a vós mesmos e às vossas famílias do Fogo.',
          },
        },
        {
          id: 'pv-27-2',
          reference: 'Provérbios 27:2',
          text: 'Deixa que outro te louve, e não a tua própria boca; o estranho, e não os teus lábios.',
          theme: 'tawadu',
          confidence: 'full',
          note: 'Tawadu — humildade. Auto-elogio é proibido no adab islâmico. O Profeta ﷺ disse: "Se você deve louvar alguém, diga: penso que é assim, e Allah é seu contador."',
        },
      ],
    },
    {
      id: 'proverbios-mulher',
      title: 'A Mulher de Caráter',
      subtitle: 'Provérbios 31 — paralelo com a mulher no Islam',
      passages: [
        {
          id: 'pv-31-10-31',
          reference: 'Provérbios 31:10, 25-31',
          text: 'Mulher virtuosa, quem a achará? O seu valor muito excede o de rubis... Força e honra são o seu vestuário, e ela se ri do dia de amanhã. Abre a sua boca com sabedoria, e a lei da bondade está na sua língua. Ela vigia os caminhos da sua casa e não come o pão da preguiça. Seus filhos se levantam e a chamam bem-aventurada; seu marido também, e ele a louva.',
          theme: 'familia',
          confidence: 'full',
          note: 'A mulher de caráter no Islam: força, sabedoria, cuidado com o lar, temor a Allah. "As melhores mulheres são aquelas que te alegram quando as vês, obedecemas a Allah em tua ausência." — Profeta ﷺ.',
          hadith: '"O mundo todo é um regalo e o melhor regalo do mundo é a mulher virtuosa." — Muslim 1467',
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// ECLESIASTES
// ─────────────────────────────────────────────────────────────────────────────
const eclesiastes: HalalBook = {
  id: 'eclesiastes',
  name: 'Eclesiastes',
  arabicName: 'الجامعة',
  testament: 'antigo',
  description: 'O livro mais filosófico do Antigo Testamento. Sulayman (as) após alcançar riqueza, poder e prazer absolutos conclui: tudo é vaidade — exceto temer a Deus e guardar Seus mandamentos.',
  islamicContext: 'Eclesiastes é a meditação islâmica sobre a dunya antes do Islam existir como nome. A palavra "vaidade" (hebel = sopro, vapor) é o que o Islam chama de dunya — passageira, ilusória, não é o destino. O Alcorão diz: "A vida deste mundo não é senão diversão e jogo."',
  quranConfirmation: {
    reference: 'Al-Anam 6:32',
    text: 'A vida desta mundo não é senão diversão e jogo. E a morada do Além é melhor para os que têm taqwa. Não raciocinam?',
  },
  color: '#B38BDB',
  icon: 'Leaf',
  sections: [
    {
      id: 'eclesiastes-dunya',
      title: 'A Dunya é Vaidade',
      passages: [
        {
          id: 'ec-1-2',
          reference: 'Eclesiastes 1:2',
          text: 'Vaidade de vaidades, diz o pregador, vaidade de vaidades! Tudo é vaidade.',
          theme: 'dunya',
          confidence: 'full',
          note: '"Vaidade" em hebraico é "hebel" — sopro, vapor. O mesmo conceito de dunya no Islam: passageira como névoa. Sulayman tinha tudo e concluiu: sem Allah, é zero.',
          quranEcho: {
            reference: 'Al-Hadid 57:20',
            arabic: 'وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَٰعُ ٱلْغُرُورِ',
            translation: 'A vida desta mundo não é senão ilusão.',
          },
        },
        {
          id: 'ec-3-1-8',
          reference: 'Eclesiastes 3:1-4',
          text: 'Tudo tem o seu tempo determinado; há tempo para todo propósito debaixo do céu: tempo de nascer e tempo de morrer; tempo de plantar e tempo de arrancar o que se plantou; tempo de matar e tempo de curar; tempo de derrubar e tempo de edificar; tempo de chorar e tempo de rir.',
          theme: 'qadar',
          confidence: 'full',
          note: 'Qadar — o decreto divino. Cada coisa tem seu tempo e lugar ordenado por Allah. A sabedoria é reconhecer isso e não lutar contra o tempo de Allah.',
          quranEcho: {
            reference: 'Al-Qamar 54:49',
            arabic: 'إِنَّا كُلَّ شَىْءٍ خَلَقْنَٰهُ بِقَدَرٍ',
            translation: 'Certamente, criamos tudo com medida.',
          },
        },
        {
          id: 'ec-5-2',
          reference: 'Eclesiastes 5:2',
          text: 'Não te precipites a abrir a boca, nem o teu coração se apresse a proferir palavra alguma diante de Deus; porque Deus está no céu, e tu, na terra; portanto, sejam poucas as tuas palavras.',
          theme: 'dua',
          confidence: 'full',
          note: 'Adab na oração — não falar apressado diante de Allah. O Profeta ﷺ ensinava a falar com presença e consciência na salah. Poucas palavras com coração presente valem mais que muitas palavras vazias.',
          quranEcho: {
            reference: 'Al-Araf 7:55',
            arabic: 'ٱدْعُوا۟ رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً',
            translation: 'Chamais a vosso Senhor em humildade e em segredo.',
          },
        },
        {
          id: 'ec-12-13-14',
          reference: 'Eclesiastes 12:13-14',
          text: 'O fim de tudo o que se ouviu é este: Teme a Deus e guarda os seus mandamentos; porque isso é o dever de todo homem. Porque Deus há de trazer a juízo todas as obras, até as ocultas, sejam boas, sejam más.',
          theme: 'akhirah',
          confidence: 'full',
          note: 'A conclusão de Sulayman (as) depois de tudo: Taqwa + ação = dever do ser humano. E Yawm al-Qiyama — o dia em que cada obra oculta será julgada. Exatamente o aqidah islâmico.',
          quranEcho: {
            reference: 'Az-Zalzalah 99:7-8',
            arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ',
            translation: 'Quem fizer o peso de um átomo de bem o verá, e quem fizer o peso de um átomo de mal o verá.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// JÓ (AYYUB)
// ─────────────────────────────────────────────────────────────────────────────
const jo: HalalBook = {
  id: 'jo',
  name: 'Jó',
  arabicName: 'أيوب',
  testament: 'antigo',
  description: 'A história de Ayyub (as) — o profeta que perdeu saúde, família e riqueza e ainda assim não abandonou Allah. O Alcorão o cita como exemplo máximo de sabr (paciência).',
  islamicContext: 'Ayyub (as) é mencionado no Alcorão em Al-Anbiya 21:83-84 e Sad 38:41-44. A narrativa do livro de Jó é quase idêntica ao que o Alcorão relata. Um dos 5 profetas de sabr (Ulul Azm). A diferença: a Bíblia tem mais diálogo dramático, mas o núcleo é o mesmo.',
  quranConfirmation: {
    reference: 'Al-Anbiya 21:83-84',
    text: 'E Ayyub — quando clamou a seu Senhor: "Fui afligido pelo sofrimento, e Tu és o mais misericordioso dos misericordiosos." Então atendemos sua chamada e removemos seu sofrimento, e lhe demos de volta sua família e outros semelhantes a eles.',
  },
  color: '#7BE2B3',
  icon: 'Heart',
  sections: [
    {
      id: 'jo-historia',
      title: 'A Provação de Ayyub (as)',
      prophetName: 'Ayyub',
      passages: [
        {
          id: 'jo-1-1',
          reference: 'Jó 1:1',
          text: 'Havia um homem na terra de Uz, cujo nome era Jó; e este homem era sincero e reto, e temia a Deus, e desviava-se do mal.',
          theme: 'taqwa',
          confidence: 'full',
          note: 'Ayyub (as) era profeta — reto, temeroso de Allah, afastado do mal. A tribulação não veio por pecado. Veio porque Allah eleva os seus mais amados através do sofrimento.',
          quranEcho: {
            reference: 'Al-Baqarah 2:155',
            arabic: 'وَلَنَبْلُوَنَّكُم بِشَىْءٍ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ',
            translation: 'Certamente vos provaremos com algo de temor, fome, perda de bens, vidas e frutos.',
          },
        },
        {
          id: 'jo-1-21',
          reference: 'Jó 1:21',
          text: 'Nu saí do ventre de minha mãe, e nu voltarei para lá. O Senhor o deu, e o Senhor o tomou; bendito seja o nome do Senhor.',
          theme: 'sabr',
          confidence: 'full',
          note: '"Inna lillahi wa inna ilayhi rajiun" — pertencemos a Allah e a Ele retornamos. Ayyub (as) disse isso com suas próprias palavras. A resposta islâmica ao luto está aqui.',
          quranEcho: {
            reference: 'Al-Baqarah 2:156',
            arabic: 'إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ',
            translation: 'Certamente pertencemos a Allah e a Ele certamente retornaremos.',
          },
        },
        {
          id: 'jo-23-10',
          reference: 'Jó 23:10',
          text: 'Mas ele conhece o caminho que eu tomo; quando me houver provado, sairei como o ouro.',
          theme: 'sabr',
          confidence: 'full',
          note: 'Sabr que purifica. A tribulação é fogo que refina o ouro. Ayyub sabia: Allah O conhece e a prova tem propósito. "A maior recompensa vem com a maior tribulação." — Profeta ﷺ.',
          hadith: '"A maior recompensa vem com a maior tribulação. Quando Allah ama um povo, Ele o coloca à prova." — Tirmidhi 2396',
        },
        {
          id: 'jo-38-1-7',
          reference: 'Jó 38:1-7',
          text: 'Então o Senhor respondeu a Jó do meio do redemoinho: Onde estavas tu quando eu fundei a terra? Dize-mo, se tens entendimento. Quem fixou as suas medidas, se é que o sabes? Sobre que estão assentadas as suas bases, ou quem lançou a sua pedra angular?',
          theme: 'transcendencia',
          confidence: 'full',
          note: 'A resposta de Allah ao sofrimento humano: Eu sou o Criador — você não compreende a escala. O ser humano é pequeno ante o poder divino. Humildade como resposta ao mistério do sofrimento.',
          quranEcho: {
            reference: 'Al-Mulk 67:3-4',
            arabic: 'مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَٰنِ مِن تَفَٰوُتٍ',
            translation: 'Não verás na criação do Clemente qualquer irregularidade.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// GÊNESIS — HISTÓRIAS DOS PROFETAS
// ─────────────────────────────────────────────────────────────────────────────
const genesis: HalalBook = {
  id: 'genesis',
  name: 'Gênesis',
  arabicName: 'التكوين',
  testament: 'antigo',
  description: 'O livro das origens: criação, Adão, Noé, Ibrahim e Yusuf. As narrativas do Gênesis são quase idênticas ao que o Alcorão relata sobre esses profetas.',
  islamicContext: 'O Alcorão confirma as histórias de Adão (2:30-38), Nuh (11:25-49), Ibrahim (2:124-132), e Yusuf (surah 12 completa). Lemos Gênesis através da lente corânica — onde as duas narrativas coincidem, temos dupla confirmação divina.',
  quranConfirmation: {
    reference: 'Al-Baqarah 2:136',
    text: 'Digamos: Cremos em Allah e no que nos foi revelado, e no que foi revelado a Ibrahim, Ismael, Isaque, Jacó e as tribos, e no que foi dado a Moisés, Jesus e aos profetas vindos de seu Senhor.',
  },
  color: '#E2A07B',
  icon: 'Sprout',
  sections: [
    {
      id: 'genesis-criacao',
      title: 'A Criação — Adão e Hawa',
      prophetName: 'Adam',
      passages: [
        {
          id: 'gn-1-1',
          reference: 'Gênesis 1:1',
          text: 'No princípio, Deus criou os céus e a terra.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'O mesmo começo do Alcorão: "Em nome de Allah, o Criador dos céus e da terra." Criação a partir do nada — ex nihilo — é aqidah islâmica.',
          quranEcho: {
            reference: 'Al-Anam 6:101',
            arabic: 'بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ',
            translation: 'Criador dos céus e da terra.',
          },
        },
        {
          id: 'gn-2-7',
          reference: 'Gênesis 2:7',
          text: 'Então o Senhor Deus formou o homem do pó da terra e soprou em suas narinas o fôlego de vida, e o homem se tornou um ser vivente.',
          theme: 'criacao',
          confidence: 'full',
          note: 'Criação de Adão (as) da terra + o sopro divino. O Alcorão diz: "criamos o homem de barro seco" e "sopramos nele de Nosso espírito." Duas escrituras, mesmo milagre.',
          quranEcho: {
            reference: 'Al-Hijr 15:28-29',
            arabic: 'فَإِذَا سَوَّيْتُهُۥ وَنَفَخْتُ فِيهِ مِن رُّوحِى فَقَعُوا۟ لَهُۥ سَٰجِدِينَ',
            translation: 'Quando o modelar e soprar nele de Meu espírito, prostrais-vos diante dele.',
          },
        },
        {
          id: 'gn-3-shaytan',
          reference: 'Gênesis 3:1-5',
          text: 'Ora, a serpente era mais astuta do que todos os animais do campo que o Senhor Deus havia feito. Ela disse à mulher: É verdade que Deus disse: "Não comais de nenhuma árvore do jardim"? A mulher respondeu à serpente: Do fruto das árvores do jardim podemos comer, mas do fruto da árvore que está no meio do jardim, Deus disse: "Não o comais, nem o toqueis, para que não morrais."',
          theme: 'shaytan',
          confidence: 'full',
          note: 'A serpente = Iblis/Shaytan. A tentação que causou a queda de Adão e Hawa. O Alcorão confirma: Iblis prometeu "vos mostrarei a árvore da eternidade." Mesma história, mesmo inimigo.',
          quranEcho: {
            reference: 'Al-Araf 7:20-22',
            arabic: 'فَوَسْوَسَ لَهُمَا ٱلشَّيْطَٰنُ',
            translation: 'Então Shaytan sussurrou a ambos para expor o que estava oculto de sua vergonha.',
          },
        },
      ],
    },
    {
      id: 'genesis-nuh',
      title: 'Nuh — O Dilúvio',
      prophetName: 'Nuh',
      passages: [
        {
          id: 'gn-6-9',
          reference: 'Gênesis 6:9',
          text: 'Noé era um homem justo, íntegro entre os seus contemporâneos; Noé andava com Deus.',
          theme: 'taqwa',
          confidence: 'full',
          note: 'Nuh (as) era justo e andava com Allah — taqwa em forma de vida. O Alcorão diz: "Nuh foi o servo mais agradecido." 950 anos de da\'wah sem abandonar Allah.',
          quranEcho: {
            reference: 'Al-Isra 17:3',
            arabic: 'إِنَّهُۥ كَانَ عَبْدًا شَكُورًا',
            translation: 'Certamente ele foi um servo muito agradecido.',
          },
        },
        {
          id: 'gn-7-1',
          reference: 'Gênesis 7:1',
          text: 'O Senhor disse a Noé: Entre na arca, tu e toda a tua família, porque te vi justo diante de mim nesta geração.',
          theme: 'nubuwwah',
          confidence: 'full',
          note: 'Allah salva os Seus. A arca é a fé — quem embarca (crê) é salvo. Quem fica fora (rejeita) perece. A seleção divina pelos méritos espirituais.',
          quranEcho: {
            reference: 'Hud 11:40',
            arabic: 'حَتَّىٰٓ إِذَا جَآءَ أَمْرُنَا وَفَارَ ٱلتَّنُّورُ قُلْنَا ٱحْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ ٱثْنَيْنِ',
            translation: 'Quando chegou Nossa ordem e o forno transbordou, dissemos: Coloque nela de cada espécie um par.',
          },
        },
      ],
    },
    {
      id: 'genesis-ibrahim',
      title: 'Ibrahim — O Pai dos Profetas',
      prophetName: 'Ibrahim',
      passages: [
        {
          id: 'gn-12-1-3',
          reference: 'Gênesis 12:1-3',
          text: 'O Senhor disse a Abrão: Sai da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei. Farei de ti uma grande nação; vou abençoar-te e fazer famoso o teu nome, e tu serás uma bênção.',
          theme: 'hijra',
          confidence: 'full',
          note: 'Ibrahim (as) fez hijra — abandono da terra do shirk pela fé. O Alcorão confirma: "Emigrei para meu Senhor." A mesma hijra que o Profeta ﷺ faria milênios depois.',
          quranEcho: {
            reference: 'Al-Ankabut 29:26',
            arabic: 'وَقَالَ إِنِّى مُهَاجِرٌ إِلَىٰ رَبِّىٓ',
            translation: 'Ele disse: Certamente emigrarei para meu Senhor.',
          },
        },
        {
          id: 'gn-17-1',
          reference: 'Gênesis 17:1',
          text: 'Quando Abrão tinha noventa e nove anos de idade, o Senhor lhe apareceu e disse: Eu sou o Deus Todo-poderoso. Anda na minha presença e sê íntegro.',
          theme: 'nubuwwah',
          confidence: 'full',
          note: 'Ihsan — "anda na Minha presença" — adorar Allah como se O vissem. O nível mais alto de fé no Islam. Ibrahim viveu em ihsan.',
          quranEcho: {
            reference: 'An-Nahl 16:120',
            arabic: 'إِنَّ إِبْرَٰهِيمَ كَانَ أُمَّةً قَانِتًا لِّلَّهِ حَنِيفًا',
            translation: 'Ibrahim era uma nação por si só, devoto a Allah, um hanif.',
          },
        },
        {
          id: 'gn-22-1-2',
          reference: 'Gênesis 22:1-2, 12',
          text: 'Depois dessas coisas, Deus provou Abraão e disse: Abraão! Ele respondeu: Eis-me aqui. E Deus lhe disse: Toma o teu filho, o único, Isaque, a quem amas, vai à terra de Moriá e oferece-o ali em holocausto... [Então o anjo disse:] Não estendas a tua mão sobre o menino; não lhe faças nada, pois agora sei que temes a Deus.',
          theme: 'tawakkul',
          confidence: 'full',
          note: 'Qurbani — o sacrifício de Ibrahim. O Alcorão narra a mesma história: o filho diz "farás o que fores ordenado." A Eid al-Adha comemora esse momento de entrega total a Allah.',
          quranEcho: {
            reference: 'As-Saffat 37:102-105',
            arabic: 'يَٰبُنَىَّ إِنِّىٓ أَرَىٰ فِى ٱلْمَنَامِ أَنِّىٓ أَذْبَحُكَ',
            translation: 'Meu filho, vejo em sonho que te sacrifico. O que pensas? Ele disse: Pai, faz o que te foi ordenado. Me encontrarás, se Allah quiser, entre os pacientes.',
          },
        },
      ],
    },
    {
      id: 'genesis-yusuf',
      title: 'Yusuf — A História Mais Bela',
      prophetName: 'Yusuf',
      passages: [
        {
          id: 'gn-37-28',
          reference: 'Gênesis 37:28',
          text: 'Quando os mercadores midianitas passaram, os irmãos tiraram Yusuf da cisterna e o venderam por vinte moedas de prata.',
          theme: 'sabr',
          confidence: 'full',
          note: 'Vendido pelos próprios irmãos. O começo da maior história de resiliência da humanidade. Allah nomeou esta no Alcorão como "a melhor das histórias."',
          quranEcho: {
            reference: 'Yusuf 12:3',
            arabic: 'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ ٱلْقَصَصِ',
            translation: 'Narramos a ti a melhor das histórias.',
          },
        },
        {
          id: 'gn-39-2-3',
          reference: 'Gênesis 39:2-3',
          text: 'O Senhor estava com Yusuf, e foi ele um homem bem-sucedido; e estava na casa de seu senhor egípcio. O seu senhor viu que o Senhor estava com ele e que o Senhor fazia prosperar em suas mãos tudo o que ele fazia.',
          theme: 'barakah',
          confidence: 'full',
          note: 'Barakah — a bênção de Allah que outros reconhecem. Yusuf não perdeu a fé na prisão. Allah fez sua luz visível a todos, mesmo em cativeiro.',
          quranEcho: {
            reference: 'Yusuf 12:21',
            arabic: 'وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِى ٱلْأَرْضِ',
            translation: 'E assim estabelecemos Yusuf na terra.',
          },
        },
        {
          id: 'gn-50-20',
          reference: 'Gênesis 50:20',
          text: 'Vós intentastes o mal contra mim, mas Deus o tornou em bem, para fazer o que se vê neste dia, para conservar a vida de muito povo.',
          theme: 'sabr',
          confidence: 'full',
          note: 'A lição final de Yusuf: o que parecia destruição era o plano de Allah. O mal dos irmãos virou salvação de nações. Allah vira o mal em bem para os seus.',
          quranEcho: {
            reference: 'Yusuf 12:100',
            arabic: 'إِنَّ رَبِّى لَطِيفٌ لِّمَا يَشَآءُ',
            translation: 'Meu Senhor é sutil em cumprir o que quer.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// ÊXODO — MUSA
// ─────────────────────────────────────────────────────────────────────────────
const exodo: HalalBook = {
  id: 'exodo',
  name: 'Êxodo',
  arabicName: 'الخروج',
  testament: 'antigo',
  description: 'A libertação do povo de Allah pela mão de Musa (as) — o profeta mais citado no Alcorão. A confrontação com o Faraó, as 10 pragas, a abertura do mar e os 10 mandamentos.',
  islamicContext: 'Musa (as) é mencionado no Alcorão mais de 136 vezes — mais do que qualquer outro profeta. Sua história é narrada em 28 suras diferentes. A libertação do Egito é símbolo de libertação espiritual de qualquer tirano.',
  quranConfirmation: {
    reference: 'Al-Araf 7:117',
    text: 'Revelamos a Musa: Lança teu cajado. E de súbito engoliu o que fabricavam.',
  },
  color: '#4CAF7A',
  icon: 'Waves',
  sections: [
    {
      id: 'exodo-musa-chamado',
      title: 'O Chamado de Musa',
      prophetName: 'Musa',
      passages: [
        {
          id: 'ex-3-4-6',
          reference: 'Êxodo 3:4-6',
          text: 'Quando o Senhor viu que ele se havia virado para olhar, Deus o chamou do meio da sarça: Moisés! Moisés! Ele respondeu: Eis-me aqui. Então Deus disse: Não te aproximes daqui; tira as sandálias dos pés, pois o lugar em que estás é terra santa.',
          theme: 'nubuwwah',
          confidence: 'full',
          note: 'A zarça ardente — o mesmo evento narrado no Alcorão (An-Naml 27:8-12). "Tire as sandálias" — descalçar-se é reverência ao sagrado. A terra santa é onde a presença de Allah se manifesta.',
          quranEcho: {
            reference: 'Ta-Ha 20:11-12',
            arabic: 'فَلَمَّآ أَتَىٰهَا نُودِىَ يَٰمُوسَىٰٓ إِنِّىٓ أَنَا۠ رَبُّكَ فَٱخْلَعْ نَعْلَيْكَ',
            translation: 'Quando chegou a ela, foi chamado: Ó Musa! Eu sou teu Senhor. Tira tuas sandálias.',
          },
        },
        {
          id: 'ex-3-14',
          reference: 'Êxodo 3:14',
          text: 'Deus disse a Moisés: EU SOU O QUE SOU. E disse: Assim dirás aos filhos de Israel: EU SOU me enviou a vós.',
          theme: 'tawhid',
          confidence: 'full',
          note: '"Eu Sou o que Sou" — o Nome inefável de Deus. Al-Hayy (O Vivente), Al-Qayyum (O Sustentador). Allah existe por Si mesmo, sem dependência. O mesmo atributo do Ayat al-Kursi.',
          quranEcho: {
            reference: 'Al-Baqarah 2:255',
            arabic: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
            translation: 'Allah — não há deus exceto Ele, o Vivente, o Sustentador.',
          },
        },
      ],
    },
    {
      id: 'exodo-10-mandamentos',
      title: 'Os Dez Mandamentos',
      passages: [
        {
          id: 'ex-20-2-3',
          reference: 'Êxodo 20:2-3',
          text: 'Eu sou o Senhor, teu Deus, que te tirei do Egito, da casa da servidão. Não terás outros deuses diante de mim.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'O Primeiro Mandamento = La ilaha illa Allah. Nenhum outro deus. O monoteísmo absoluto que Ibrahim trouxe, Musa reafirmou e Muhammad ﷺ restaurou para sempre.',
          quranEcho: {
            reference: 'Muhammad 47:19',
            arabic: 'فَٱعْلَمْ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا ٱللَّهُ',
            translation: 'Sabe que não há deus além de Allah.',
          },
        },
        {
          id: 'ex-20-7',
          reference: 'Êxodo 20:7',
          text: 'Não pronunciarás o nome do Senhor, teu Deus, em vão.',
          theme: 'adab',
          confidence: 'full',
          note: 'Adab com o Nome de Allah. No Islam, o Basmalah é dito com consciência. Os Nomes de Allah são sagrados. Usar o Nome divino com levianidade é proibido.',
          quranEcho: {
            reference: 'Al-Araf 7:180',
            arabic: 'وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا',
            translation: 'Allah tem os mais belos nomes. Chamais-O por eles.',
          },
        },
        {
          id: 'ex-20-12',
          reference: 'Êxodo 20:12',
          text: 'Honra teu pai e tua mãe, para que os teus dias se prolonguem na terra que o Senhor, teu Deus, te dá.',
          theme: 'familia',
          confidence: 'full',
          note: 'Birr al-walidayn — honrar os pais. No Alcorão, imediatamente após o Tawhid vem o cuidado com os pais. "Teu Senhor ordenou que não adoreis senão a Ele, e que sejais bons com os pais."',
          quranEcho: {
            reference: 'Al-Isra 17:23',
            arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ وَبِٱلْوَٰلِدَيْنِ إِحْسَٰنًا',
            translation: 'Teu Senhor ordenou que não adoreis senão a Ele e que sejais bons com os pais.',
          },
        },
        {
          id: 'ex-20-13-16',
          reference: 'Êxodo 20:13-16',
          text: 'Não matarás. Não adulterarás. Não furtarás. Não dirás falso testemunho contra o teu próximo.',
          theme: 'etica',
          confidence: 'full',
          note: 'Os Mandamentos são Sharia universal. Proibição de matar o inocente, adultério, roubo e falso testemunho — todos haraam no Islam. A ética é uma, porque o Legislador é um.',
          quranEcho: {
            reference: 'Al-Anam 6:151',
            arabic: 'وَلَا تَقْتُلُوا۟ ٱلنَّفْسَ ٱلَّتِى حَرَّمَ ٱللَّهُ إِلَّا بِٱلْحَقِّ',
            translation: 'Não mateis a alma que Allah proibiu, exceto com justiça.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// ISAÍAS — PROFECIA E MONOTEÍSMO
// ─────────────────────────────────────────────────────────────────────────────
const isaias: HalalBook = {
  id: 'isaias',
  name: 'Isaías',
  arabicName: 'إشعياء',
  testament: 'antigo',
  description: 'O maior profeta literário de Israel. Isaías proclamou monoteísmo absoluto, criticou ídolos e profetizou sobre o Servo de Allah — passagens que muitos estudiosos islâmicos identificam como referências ao Profeta Muhammad ﷺ.',
  islamicContext: 'Isaías 42:1-4 é visto por estudiosos islâmicos como profecia do Profeta Muhammad ﷺ. Isaías 44:6 e 45:5 proclamam tawhid absoluto. O capítulo 53 foi interpretado de formas distintas — leitura islâmica o vê como figura diferente de Jesus.',
  quranConfirmation: {
    reference: 'As-Saff 61:6',
    text: 'Jesus disse: "Filhos de Israel! Sou o mensageiro de Allah para vós, confirmando a Torah que veio antes de mim e anunciando a boa-nova de um mensageiro que virá depois de mim, cujo nome será Ahmad."',
  },
  color: '#C9A84C',
  icon: 'Flame',
  sections: [
    {
      id: 'isaias-tawhid',
      title: 'Tawhid Absoluto',
      passages: [
        {
          id: 'is-44-6',
          reference: 'Isaías 44:6',
          text: 'Assim diz o Senhor, o Rei de Israel, e seu Redentor, o Senhor dos Exércitos: Eu sou o primeiro, e eu sou o último; e além de mim não há Deus.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Al-Awwal wal-Akhir — o Primeiro e o Último. Exatamente o Atributo de Allah em Al-Hadid 57:3. "Além de mim não há Deus" = La ilaha illa Allah. Perfeito.',
          quranEcho: {
            reference: 'Al-Hadid 57:3',
            arabic: 'هُوَ ٱلْأَوَّلُ وَٱلْآخِرُ وَٱلظَّٰهِرُ وَٱلْبَاطِنُ',
            translation: 'Ele é o Primeiro e o Último, o Manifesto e o Oculto.',
          },
        },
        {
          id: 'is-45-5',
          reference: 'Isaías 45:5',
          text: 'Eu sou o Senhor, e não há outro; além de mim não há Deus.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Repetido 5 vezes em Isaías 44-46: "Além de mim não há Deus." A mensagem central do Islam — La ilaha illa Allah — ecoando 700 anos antes de Muhammad ﷺ.',
          quranEcho: {
            reference: 'Al-Ikhlas 112:1-4',
            arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ',
            translation: 'Dize: Ele é Allah, o Único. Allah, o Absoluto. Não gerou nem foi gerado.',
          },
        },
        {
          id: 'is-44-9-20',
          reference: 'Isaías 44:9-10',
          text: 'Os que fazem ídolos são todos vaidade; as suas obras preferidas não valem nada... Quem formou um deus ou fundiu uma imagem que nenhum proveito lhe traz?',
          theme: 'shirk',
          confidence: 'full',
          note: 'Crítica ao shirk mais direta da Bíblia. Quem fabrica um deus? A mesma pergunta de Ibrahim (as) ao seu pai. O Alcorão repete: eles adoram o que suas mãos esculpiram.',
          quranEcho: {
            reference: 'Al-Anbiya 21:66',
            arabic: 'أَفَتَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكُمْ شَيْـًٔا وَلَا يَضُرُّكُمْ',
            translation: 'Adorais então além de Allah o que não pode vos beneficiar nem prejudicar em nada?',
          },
        },
      ],
    },
    {
      id: 'isaias-ahmad',
      title: 'O Servo de Allah — Profecia de Ahmad',
      passages: [
        {
          id: 'is-42-1-4',
          reference: 'Isaías 42:1-4',
          text: 'Eis o meu servo, a quem sustento; o meu eleito, em quem a minha alma se compraz. Pus o meu Espírito sobre ele; ele promulgará o direito para as nações. Não clamará, nem levantará a voz, nem a fará ouvir nas ruas. [...] Não esmorecerá nem se quebrará, até que haja posto o direito na terra.',
          theme: 'nubuwwah',
          confidence: 'context',
          note: 'Estudiosos islâmicos identificam aqui o Profeta Muhammad ﷺ: o Servo escolhido que não gritaria nas ruas, que levaria direito a todas as nações, que não esmoreceria. O Alcorão diz: "não levantais vossas vozes acima de sua voz."',
          quranEcho: {
            reference: 'Al-Fath 48:29',
            arabic: 'مُّحَمَّدٌ رَّسُولُ ٱللَّهِ',
            translation: 'Muhammad é o mensageiro de Allah.',
          },
        },
        {
          id: 'is-40-28-31',
          reference: 'Isaías 40:28-31',
          text: 'Não sabes, ou não ouviste que o Deus eterno, o Senhor, o Criador das extremidades da terra, não se cansa nem se fatiga? [...] Ele dá forças ao cansado e multiplica o vigor ao que não tem força. Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias.',
          theme: 'sabr',
          confidence: 'full',
          note: '"Os que esperam no Senhor" — aqueles que fazem sabr e tawakkul. Allah não se cansa nem dorme. E os que nEle confiam ganham forças renovadas. Como as asas de águia — a promessa do crente perseverante.',
          quranEcho: {
            reference: 'Al-Baqarah 2:286',
            arabic: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
            translation: 'Allah não sobrecarrega nenhuma alma além de sua capacidade.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// JONAS (YUNUS)
// ─────────────────────────────────────────────────────────────────────────────
const jonas: HalalBook = {
  id: 'jonas',
  name: 'Jonas',
  arabicName: 'يونس',
  testament: 'antigo',
  description: 'A história de Yunus (as) — o profeta que foi engolido pela baleia e resgatado pela sua dua. Um dos livros mais curtos do Antigo Testamento, quase completamente paralelo ao que o Alcorão narra.',
  islamicContext: 'Yunus (as) tem uma surah inteira em seu nome no Alcorão (surah 10). Sua oração no ventre da baleia é uma das duas mais poderosas: La ilaha illa Anta, subhanaka, inni kuntu min al-zalimin. O livro de Jonas é halal quase na totalidade.',
  quranConfirmation: {
    reference: 'As-Saffat 37:143-144',
    text: 'E se não fosse que ele era dos que glorificavam, permaneceria no ventre até o dia em que serão ressuscitados.',
  },
  color: '#7BADE2',
  icon: 'Fish',
  sections: [
    {
      id: 'jonas-historia',
      title: 'A Fuga e o Retorno de Yunus (as)',
      prophetName: 'Yunus',
      passages: [
        {
          id: 'jn-1-3',
          reference: 'Jonas 1:3',
          text: 'Mas Jonas se levantou para fugir para Társis, longe da presença do Senhor.',
          theme: 'nubuwwah',
          confidence: 'full',
          note: 'Yunus (as) foi sem permissão divina — o Alcorão diz "foi zangado" (dhahaba mughadiban). A fuga foi o início da provação. Nenhum profeta fugiu impunemente de Allah.',
          quranEcho: {
            reference: 'Al-Anbiya 21:87',
            arabic: 'وَذَا ٱلنُّونِ إِذ ذَّهَبَ مُغَٰضِبًا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ',
            translation: 'E o Possuidor da Baleia — quando partiu zangado e pensou que não Poderíamos sobre ele.',
          },
        },
        {
          id: 'jn-2-1-2',
          reference: 'Jonas 2:1-2',
          text: 'Então Jonas orou ao Senhor, seu Deus, do ventre do peixe. E disse: Na minha angústia clamei ao Senhor, e ele me ouviu; do ventre do abismo gritei, e tu ouviste a minha voz.',
          theme: 'dua',
          confidence: 'full',
          note: 'A dua das trevas triplas — ventre da baleia, fundo do mar, noite. A mesma dua do Alcorão: La ilaha illa Anta, subhanaka, inni kuntu min al-zalimin. Allah ouve de qualquer profundidade.',
          quranEcho: {
            reference: 'Al-Anbiya 21:87',
            arabic: 'لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ',
            translation: 'Não há deus além de Ti, glória a Ti! Certamente estive entre os injustos.',
          },
        },
        {
          id: 'jn-3-10',
          reference: 'Jonas 3:10',
          text: 'Quando Deus viu as suas obras, que eles se tinham convertido do seu mau caminho, arrependeu-se Deus do mal que havia falado fazer-lhes, e não o fez.',
          theme: 'tawbah',
          confidence: 'full',
          note: 'A cidade inteira se arrependeu e Allah os poupou. No Alcorão: "a cidade de Yunus — quando creram, afastamos deles o castigo da humilhação nesta vida." O tawbah coletivo muda o destino.',
          quranEcho: {
            reference: 'Yunus 10:98',
            arabic: 'فَلَوْلَا كَانَتْ قَرْيَةٌ ءَامَنَتْ فَنَفَعَهَآ إِيمَٰنُهَا',
            translation: 'Por que não houve uma cidade que cresse e se beneficiasse de sua fé — exceto o povo de Yunus?',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// SERMÃO DA MONTANHA — JESUS FALANDO DIRETAMENTE
// ─────────────────────────────────────────────────────────────────────────────
const sermoMontanha: HalalBook = {
  id: 'sermao-montanha',
  name: 'Sermão da Montanha',
  arabicName: 'عظة الجبل',
  testament: 'novo',
  description: 'Mateus 5-7 — o maior discurso público de Isa (as). Jesus falando diretamente, sem intermediário, sobre ética, oração, jejum e confiança em Deus. O mais islâmico dos textos do Novo Testamento.',
  islamicContext: 'Isa (as) no Islam é um profeta de alta estatura — nasceu de milagre, fez milagres, ascendeu ao céu. Sua mensagem original foi o Injil. O Sermão da Montanha é a expressão mais próxima do Injil original — ensinamentos diretos de Isa (as) sobre como viver.',
  quranConfirmation: {
    reference: 'Al-Maidah 5:46',
    text: 'E enviamos após eles Jesus, filho de Maria, confirmando o que havia antes dele na Torah, e lhe demos o Evangelho, contendo orientação e luz.',
  },
  color: '#4CAF7A',
  icon: 'Mountain',
  sections: [
    {
      id: 'beatitudes',
      title: 'As Bem-Aventuranças',
      passages: [
        {
          id: 'mt-5-3-10',
          reference: 'Mateus 5:3-10',
          text: 'Bem-aventurados os pobres de espírito, porque deles é o reino dos céus. Bem-aventurados os que choram, porque serão consolados. Bem-aventurados os mansos, porque herdarão a terra. Bem-aventurados os que têm fome e sede de justiça, porque serão fartos. Bem-aventurados os misericordiosos, porque obterão misericórdia. Bem-aventurados os puros de coração, porque verão a Deus. Bem-aventurados os pacificadores, porque serão chamados filhos de Deus. Bem-aventurados os perseguidos por causa da justiça, porque deles é o reino dos céus.',
          theme: 'akhlaq',
          confidence: 'full',
          note: 'Cada bem-aventurança é um valor islâmico: humildade, sabr, zuhd, adl, rahma, ikhlas, islah, sabr na perseguição. Isa (as) descreveu o caráter do muçulmano 600 anos antes do Islam.',
          quranEcho: {
            reference: 'Al-Furqan 25:63',
            arabic: 'وَعِبَادُ ٱلرَّحْمَٰنِ ٱلَّذِينَ يَمْشُونَ عَلَى ٱلْأَرْضِ هَوْنًا',
            translation: 'Os servidores do Clemente são os que andam na terra com humildade.',
          },
        },
      ],
    },
    {
      id: 'oração-jejum',
      title: 'Oração, Esmola e Jejum',
      passages: [
        {
          id: 'mt-6-1-4',
          reference: 'Mateus 6:1-4',
          text: 'Guardai-vos de fazer as vossas boas obras diante dos homens com o fim de serdes vistos por eles... Quando, pois, deres esmola, não mandes tocar trombeta diante de ti, como fazem os hipócritas... Mas quando deres esmola, não saiba a tua esquerda o que faz a tua direita, para que a tua esmola fique em secret; e teu Pai, que vê em segredo, te recompensará.',
          theme: 'ikhlas',
          confidence: 'full',
          note: 'Ikhlas e sadaqah sirriya — esmola em segredo. O Profeta ﷺ disse que uma das 7 pessoas à sombra de Allah é aquele que dá sadaqah com mão esquerda sem a direita saber. Isa (as) ensinou o mesmo.',
          hadith: '"Sete categorias estarão à sombra de Allah... homem que deu sadaqah secretamente, de modo que sua mão esquerda não soubesse o que sua direita deu." — Bukhari 660',
        },
        {
          id: 'mt-6-5-8',
          reference: 'Mateus 6:5-8',
          text: 'Quando orares, não sejas como os hipócritas; pois eles amam orar em pé nas sinagogas e nas esquinas das ruas, para serem vistos pelos homens. [...] Mas tu, quando orares, entra no teu quarto íntimo, fecha a porta e ora a teu Pai que está em secreto; e teu Pai, que vê em segredo, te recompensará.',
          theme: 'ikhlas',
          confidence: 'full',
          note: 'Orar sem show — riya é o shirk menor. Isa (as) proibiu orar para ser visto. O Profeta ﷺ também alertou: o maior risco que temia pelos crentes era o riya oculto.',
          quranEcho: {
            reference: 'Al-Maun 107:4-6',
            arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ ٱلَّذِينَ هُمْ يُرَآءُونَ',
            translation: 'Ai dos que oram — que são negligentes em suas orações — que exibem devoção.',
          },
        },
        {
          id: 'mt-6-9-13',
          reference: 'Mateus 6:9-13',
          text: 'Pai nosso que estás nos céus, santificado seja o teu nome. Venha o teu reino. Seja feita a tua vontade, como no céu, assim também na terra. O pão nosso de cada dia nos dá hoje. E perdoa-nos as nossas dívidas, assim como nós também perdoamos aos nossos devedores. E não nos conduzas à tentação, mas livra-nos do maligno.',
          theme: 'dua',
          confidence: 'full',
          note: 'O "Pai Nosso" tem estrutura quase idêntica à Al-Fatiha: louvor + reconhecimento da soberania divina + pedido de sustento + perdão + proteção do mal. Isa (as) ensinou uma fatiha aos seus discípulos.',
          quranEcho: {
            reference: 'Al-Fatiha 1:1-7',
            arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
            translation: 'Guia-nos pela Senda Reta.',
          },
        },
        {
          id: 'mt-6-16-18',
          reference: 'Mateus 6:16-18',
          text: 'Quando jejuardes, não andeis com um ar triste como os hipócritas; pois desfiguram os seus rostos para parecer aos homens que jejuam. Mas tu, quando jejuares, unge a tua cabeça e lava o teu rosto, para que não pareça aos homens que jejuas, mas ao teu Pai que está em secreto.',
          theme: 'sawm',
          confidence: 'full',
          note: 'Isa (as) ensinou como jejuar — não se Ele jejuava. O jejum estava no Injil. O Ramadan é a continuação da prática de todos os profetas. Isa (as) ensinou o mesmo sawm.',
          quranEcho: {
            reference: 'Al-Baqarah 2:183',
            arabic: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ',
            translation: 'Ó crentes! O jejum foi prescrito para vós como foi prescrito para os que vieram antes de vós.',
          },
        },
        {
          id: 'mt-6-19-21',
          reference: 'Mateus 6:19-21',
          text: 'Não acumuleis para vós tesouros na terra, onde a traça e a ferrugem corrompem e onde os ladrões minam e roubam. Mas acumulai para vós tesouros no céu [...] Porque onde estiver o vosso tesouro, ali estará também o vosso coração.',
          theme: 'zuhd',
          confidence: 'full',
          note: 'Zuhd — desapego da dunya. Tesouro na akhirah, não na dunya. Isa (as) viveu sem posses. O Profeta ﷺ disse: "Sê no mundo como um estranho ou um viajante de passagem."',
          hadith: '"Sê no mundo como um estranho ou um viajante de passagem." — Bukhari 6416',
        },
        {
          id: 'mt-6-25-34',
          reference: 'Mateus 6:25-27, 33',
          text: 'Por isso vos digo: não vos preocupeis com a vossa vida, quanto ao que haveis de comer ou beber; nem com o vosso corpo, quanto ao que haveis de vestir. [...] Olhai para as aves do céu, que não semeiam, nem ceifam, nem ajuntam em celeiros, e vosso Pai celestial as alimenta. Buscai primeiro o reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas.',
          theme: 'tawakkul',
          confidence: 'full',
          note: 'Tawakkul: confie em Allah para o rizq. As aves não armazenam — Allah as alimenta. Quem busca primeiro a akhirah, Allah garante a dunya. Ensinamento idêntico ao Islam.',
          quranEcho: {
            reference: 'Hud 11:6',
            arabic: 'وَمَا مِن دَآبَّةٍ فِى ٱلْأَرْضِ إِلَّا عَلَى ٱللَّهِ رِزْقُهَا',
            translation: 'Não há criatura na terra sem que Allah seja responsável por seu sustento.',
          },
        },
      ],
    },
    {
      id: 'etica-isa',
      title: 'Ética de Isa (as)',
      passages: [
        {
          id: 'mt-7-12',
          reference: 'Mateus 7:12',
          text: 'Tudo o que quereis que os homens vos façam, fazei-o vós também a eles; pois esta é a lei e os profetas.',
          theme: 'akhlaq',
          confidence: 'full',
          note: 'A Regra de Ouro — universal e islâmica. O Profeta ﷺ disse: "Nenhum de vós crê até que ame para seu irmão o que ama para si mesmo." Isa (as) disse o mesmo.',
          hadith: '"Nenhum de vós crê até que ame para seu irmão o que ama para si mesmo." — Bukhari 13',
        },
        {
          id: 'mt-5-44',
          reference: 'Mateus 5:43-45',
          text: 'Ouvistes que foi dito: Amarás o teu próximo, e aborrecerás o teu inimigo. Eu, porém, vos digo: amai os vossos inimigos e orai pelos que vos perseguem, para que sejais filhos de vosso Pai celestial.',
          theme: 'akhlaq',
          confidence: 'full',
          note: 'Ética islâmica do ihsan — fazer o bem a quem faz o mal. O Profeta ﷺ perdoou Meca quando a conquistou. Isa (as) ensinou o padrão mais elevado de caráter.',
          quranEcho: {
            reference: 'Fussilat 41:34',
            arabic: 'وَلَا تَسْتَوِى ٱلْحَسَنَةُ وَلَا ٱلسَّيِّئَةُ ۚ ٱدْفَعْ بِٱلَّتِى هِىَ أَحْسَنُ',
            translation: 'O bem e o mal não são iguais. Repele com o que é melhor.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// ENSINAMENTOS DIRETOS DE ISA (as)
// ─────────────────────────────────────────────────────────────────────────────
const ensinamentosIsa: HalalBook = {
  id: 'isa-ensinamentos',
  name: 'Ensinamentos de Isa',
  arabicName: 'تعاليم عيسى',
  testament: 'novo',
  description: 'Versículos onde Isa (as) fala diretamente — sobre Deus, sobre si mesmo, sobre oração e sobre o que virá. Separado dos comentários dos evangelistas.',
  islamicContext: 'No Islam, Isa (as) é um dos 5 grandes profetas (Ulul Azm). Sua mensagem original foi tawhid. Nas palavras diretas de Isa nos Evangelhos, a perspectiva islâmica é claramente confirmada — especialmente quando nega igualdade com Deus e anuncia o Paráclito.',
  quranConfirmation: {
    reference: 'An-Nisa 4:171',
    text: 'Ó Povo do Livro! Não exagereis em vossa religião e não digais de Allah senão a verdade. O Messias, Jesus, filho de Maria, foi apenas o mensageiro de Allah e Sua Palavra.',
  },
  color: '#7BE2B3',
  icon: 'Star',
  sections: [
    {
      id: 'isa-tawhid',
      title: 'Isa (as) e o Tawhid',
      passages: [
        {
          id: 'mc-12-29-30',
          reference: 'Marcos 12:29-30',
          text: 'Jesus respondeu: O principal de todos os mandamentos é este: Ouve, ó Israel, o Senhor, nosso Deus, é o único Senhor. Amarás o Senhor, teu Deus, de todo o teu coração, de toda a tua alma, de todo o teu entendimento e de todas as tuas forças.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'Isa (as) cita o Shema — o monoteísmo absoluto judaico. "O Senhor nosso Deus é UNO." No Islam: La ilaha illa Allah. Jesus afirmou isso como o maior mandamento. Isso é Islam.',
          quranEcho: {
            reference: 'Al-Baqarah 2:163',
            arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ',
            translation: 'Vosso Deus é um Deus único. Não há deus além dEle, o Clemente, o Misericordioso.',
          },
        },
        {
          id: 'jo-17-3',
          reference: 'João 17:3',
          text: 'Esta é a vida eterna: que te conheçam a ti, o único Deus verdadeiro, e a Jesus Cristo, a quem enviaste.',
          theme: 'tawhid',
          confidence: 'full',
          note: '"O único Deus verdadeiro" — Isa (as) se distingue de Deus. Ele é enviado, não o Enviante. Esta é a distinção fundamental do Islam: Allah é o único Deus, Muhammad ﷺ (e Isa) são Seus mensageiros.',
          quranEcho: {
            reference: 'Al-Maidah 5:75',
            arabic: 'مَّا ٱلْمَسِيحُ ٱبْنُ مَرْيَمَ إِلَّا رَسُولٌ',
            translation: 'O Messias, filho de Maria, foi apenas um mensageiro.',
          },
        },
        {
          id: 'mt-19-16-17',
          reference: 'Mateus 19:16-17',
          text: 'Então um jovem se aproximou e disse: Mestre, que farei de bom para ter a vida eterna? Jesus respondeu: Por que me perguntas sobre o que é bom? Bom só há um. Se queres entrar na vida, guarda os mandamentos.',
          theme: 'tawhid',
          confidence: 'full',
          note: '"Bom só há um" — apenas Deus é absolutamente bom. Isa (as) recusa atribuir a si mesmo perfeição absoluta, diferenciando-se do Criador. Islam puro.',
          quranEcho: {
            reference: 'As-Saff 61:6',
            arabic: 'وَمُبَشِّرًۢا بِرَسُولٍ يَأْتِى مِنۢ بَعْدِى ٱسْمُهُۥٓ أَحْمَدُ',
            translation: 'E anunciando boas-novas de um mensageiro que virá depois de mim, cujo nome será Ahmad.',
          },
        },
        {
          id: 'mt-26-39',
          reference: 'Mateus 26:39',
          text: 'Adiantando-se um pouco, prostrou-se com o rosto em terra e orou, dizendo: Meu Pai, se possível, passa de mim este cálice; todavia, não seja como eu quero, mas como tu queres.',
          theme: 'islam',
          confidence: 'full',
          note: 'Sujud — Isa (as) prostrado em terra. "Não minha vontade, mas a tua." Isso é Islam — submissão total à vontade de Allah. O próprio Isa praticou o que pregou.',
          quranEcho: {
            reference: 'Al-Imran 3:52',
            arabic: 'قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ ءَامَنَّا بِٱللَّهِ',
            translation: 'Os discípulos disseram: Somos os ajudantes de Allah. Cremos em Allah.',
          },
        },
      ],
    },
    {
      id: 'isa-paraclito',
      title: 'O Anúncio de Ahmad',
      passages: [
        {
          id: 'jo-14-15-17',
          reference: 'João 14:15-17',
          text: 'Se me amardes, guardareis os meus mandamentos. E eu rogarei ao Pai, e ele vos dará outro Consolador (Paráclito), para que esteja convosco para sempre; o Espírito da verdade, a quem o mundo não pode receber, porque não o vê, nem o conhece; vós o conheceis, porque habita convosco.',
          theme: 'nubuwwah',
          confidence: 'context',
          note: 'Paráclito em grego (παράκλητος = Paraklétos) é "advogado/consolador". O manuscrito original pode ter sido "Periklytos" = o Glorificado = Ahmad em árabe. Isa (as) anuncia o Profeta que viria após ele — confirmado no Alcorão (61:6).',
          quranEcho: {
            reference: 'As-Saff 61:6',
            arabic: 'وَمُبَشِّرًۢا بِرَسُولٍ يَأْتِى مِنۢ بَعْدِى ٱسْمُهُۥٓ أَحْمَدُ',
            translation: 'E dou boas-novas de um mensageiro que virá depois de mim, cujo nome será Ahmad.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// DEUTERONÔMIO — PROFECIAS
// ─────────────────────────────────────────────────────────────────────────────
const deuteronomio: HalalBook = {
  id: 'deuteronomio',
  name: 'Deuteronômio',
  arabicName: 'التثنية',
  testament: 'antigo',
  description: 'O último livro da Torah. Contém o Shema — a declaração de fé monoteísta — e a grande profecia de Moisés sobre o Profeta que viria após ele.',
  islamicContext: 'Deuteronômio 18:18 é a profecia mais direta de Musa (as) sobre Muhammad ﷺ — "um profeta como tu, dos teus irmãos." Os irmãos dos filhos de Israel são os filhos de Ismael — os árabes. Muhammad ﷺ veio exatamente como descrito.',
  quranConfirmation: {
    reference: 'Al-Araf 7:157',
    text: 'Aqueles que seguem o Mensageiro, o Profeta iletrado, que encontram mencionado na Torah e no Evangelho que estão com eles.',
  },
  color: '#C9A84C',
  icon: 'Scroll',
  sections: [
    {
      id: 'deut-shema',
      title: 'O Shema — La ilaha illa Allah da Torah',
      passages: [
        {
          id: 'dt-6-4',
          reference: 'Deuteronômio 6:4-5',
          text: 'Ouve, ó Israel, o Senhor nosso Deus é o único Senhor. Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e de toda a tua força.',
          theme: 'tawhid',
          confidence: 'full',
          note: 'O Shema é a declaração de fé monoteísta do Judaísmo — idêntica ao La ilaha illa Allah. Isa (as) a citou como o maior mandamento. O Islam é a continuação dessa linha ininterrupta de tawhid.',
          quranEcho: {
            reference: 'Al-Ikhlas 112:1',
            arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
            translation: 'Dize: Ele é Allah, o Único.',
          },
        },
      ],
    },
    {
      id: 'deut-profecia',
      title: 'A Profecia do Próximo Profeta',
      passages: [
        {
          id: 'dt-18-15-18',
          reference: 'Deuteronômio 18:15, 18',
          text: 'O Senhor teu Deus te suscitará um profeta do meio de ti, dos teus irmãos, semelhante a mim; a ele ouvireis. [...] Suscitar-lhes-ei um profeta do meio de seus irmãos, semelhante a ti; porei as minhas palavras na sua boca, e ele lhes falará tudo o que eu lhe ordenar.',
          theme: 'nubuwwah',
          confidence: 'context',
          note: '"Dos teus irmãos" — não dos filhos de Israel, mas dos irmãos deles: filhos de Ismael, os árabes. "Semelhante a Moisés" — Muhammad ﷺ é o único profeta após Moisés com lei completa, nação formada e vitória em vida. "Porei Minhas palavras em sua boca" — Muhammad ﷺ era ummi (iletrado) e recebia Revelação.',
          quranEcho: {
            reference: 'Al-Araf 7:157',
            arabic: 'ٱلَّذِينَ يَتَّبِعُونَ ٱلرَّسُولَ ٱلنَّبِىَّ ٱلْأُمِّىَّ ٱلَّذِى يَجِدُونَهُۥ مَكْتُوبًا عِندَهُمْ فِى ٱلتَّوْرَىٰةِ وَٱلْإِنجِيلِ',
            translation: 'Aqueles que seguem o Mensageiro, o Profeta iletrado, que encontram mencionado na Torah e no Evangelho que estão com eles.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// DANIEL
// ─────────────────────────────────────────────────────────────────────────────
const daniel: HalalBook = {
  id: 'daniel',
  name: 'Daniel',
  arabicName: 'دانيال',
  testament: 'antigo',
  description: 'Daniel — um jovem judeu exilado na Babilônia que manteve sua fé sob pressão extrema. Suas histórias são exemplos perfeitos de fidelidade a Allah quando o sistema todo pede compromisso.',
  islamicContext: 'Daniel não é mencionado no Alcorão por nome, mas sua história paralela a de Yusuf (as) em muitos aspectos — exílio, testes de fé, sabedoria divina em terra estrangeira. Muitos estudiosos islâmicos o consideram profeta.',
  quranConfirmation: {
    reference: 'Al-Baqarah 2:153',
    text: 'Ó crentes! Buscai ajuda com a paciência e a oração. Certamente Allah está com os pacientes.',
  },
  color: '#B38BDB',
  icon: 'Shield',
  sections: [
    {
      id: 'daniel-fe',
      title: 'Fé Sob Pressão',
      passages: [
        {
          id: 'dn-1-8',
          reference: 'Daniel 1:8',
          text: 'Daniel propôs no seu coração que não se contaminaria com a comida da mesa do rei, nem com o vinho que ele bebia.',
          theme: 'halal',
          confidence: 'full',
          note: 'Daniel recusou comida haraam mesmo sendo prisioneiro. O halal não é negociável sob pressão. A mesma firmeza que o Alcorão elogia nos jovens da caverna (Al-Kahf).',
          quranEcho: {
            reference: 'Al-Kahf 18:13-14',
            arabic: 'إِنَّهُمْ فِتْيَةٌ ءَامَنُوا۟ بِرَبِّهِمْ وَزِدْنَٰهُمْ هُدًى',
            translation: 'Eram jovens que creram em seu Senhor e aumentamos sua guia.',
          },
        },
        {
          id: 'dn-6-10',
          reference: 'Daniel 6:10',
          text: 'Quando Daniel soube que o decreto havia sido assinado, entrou em sua casa, e com as janelas abertas em direção a Jerusalém, ajoelhou-se três vezes por dia, orando e louvando o seu Deus, como de costume fazia.',
          theme: 'salah',
          confidence: 'full',
          note: 'Três orações diárias viradas para o sagrado — o embrião das cinco orações do Islam. A salah não parava nem com decreto de morte. Daniel arriscou a vida pela oração.',
          quranEcho: {
            reference: 'Al-Baqarah 2:238',
            arabic: 'حَٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَٰنِتِينَ',
            translation: 'Guardai as orações e a oração do meio. Ficai de pé perante Allah em devoção.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export const HALAL_BOOKS: HalalBook[] = [
  salmos,
  proverbios,
  eclesiastes,
  jo,
  genesis,
  exodo,
  deuteronomio,
  isaias,
  jonas,
  daniel,
  sermoMontanha,
  ensinamentosIsa,
]

export const TOTAL_PASSAGES = HALAL_BOOKS.reduce(
  (acc, book) =>
    acc + book.sections.reduce((sacc, s) => sacc + s.passages.length, 0),
  0
)
