export type RamadanDay = {
  day: number
  theme: string
  phase: 'mercy' | 'forgiveness' | 'freedom'
  phaseLabel: string
  dua: {
    arabic: string
    translation: string
  }
  deed: string
  quranReading: string
  reflection: string
  isLailatAlQadr: boolean
}

// ═══════════════════════════════════════════════════════
// 30 DAYS OF RAMADAN
// Phase 1: Days 1-10 — Mercy (Rahma)
// Phase 2: Days 11-20 — Forgiveness (Maghfira)
// Phase 3: Days 21-30 — Freedom from Fire (Itq min an-Nar)
// ═══════════════════════════════════════════════════════

export const ramadanDays: RamadanDay[] = [
  // ═══════════════════════════════════════
  // PHASE 1: MERCY (RAHMA) — Days 1-10
  // ═══════════════════════════════════════
  {
    day: 1,
    theme: 'Intencao e Renovacao',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْ صِيَامِي فِيهِ صِيَامَ الصَّائِمِينَ وَقِيَامِي فِيهِ قِيَامَ الْقَائِمِينَ',
      translation: 'O Deus, faz do meu jejum neste dia o jejum dos que verdadeiramente jejuam, e da minha oracao a oracao dos que verdadeiramente oram.',
    },
    deed: 'Renove sua intencao (niyyah) para o Ramadan. Escreva 3 coisas que voce quer transformar em si mesmo neste mes.',
    quranReading: 'Surah Al-Baqarah 2:183-186 — Os versiculos do jejum',
    reflection: 'O que voce espera que seja diferente em voce ao final desses 30 dias?',
    isLailatAlQadr: false,
  },
  {
    day: 2,
    theme: 'Gratidao pelo Sustento',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ قَرِّبْنِي فِيهِ إِلَى مَرْضَاتِكَ وَجَنِّبْنِي فِيهِ مِنْ سَخَطِكَ',
      translation: 'O Deus, aproxima-me neste dia da Tua satisfacao e afasta-me da Tua ira.',
    },
    deed: 'Antes de quebrar o jejum, agradeca por cada alimento. Pense em quem nao tem o que comer hoje.',
    quranReading: 'Surah Al-Baqarah 2:261-274 — Caridade e generosidade',
    reflection: 'Quantas vezes voce comeu sem pensar de onde veio aquele alimento?',
    isLailatAlQadr: false,
  },
  {
    day: 3,
    theme: 'Paciencia (Sabr)',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ ارْزُقْنِي فِيهِ الذِّهْنَ وَالتَّنْبِيهَ وَبَاعِدْنِي فِيهِ مِنَ السَّفَاهَةِ وَالتَّمْوِيهِ',
      translation: 'O Deus, concede-me neste dia entendimento e atencao, e afasta-me da tolice e da ilusao.',
    },
    deed: 'Quando sentir fome ou irritacao hoje, pare e diga "Inni sa\'im" (estou jejuando). Use o desconforto como treino de paciencia.',
    quranReading: 'Surah Al-Imran 3:200 — Perseverai e sede pacientes',
    reflection: 'Em que area da sua vida voce mais precisa de paciencia agora?',
    isLailatAlQadr: false,
  },
  {
    day: 4,
    theme: 'Controle da Lingua',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ قَوِّنِي فِيهِ عَلَى إِقَامَةِ أَمْرِكَ وَأَذِقْنِي فِيهِ حَلَاوَةَ ذِكْرِكَ',
      translation: 'O Deus, fortalece-me neste dia para cumprir Tuas ordens e faz-me saborear a docura de Te lembrar.',
    },
    deed: 'Jejum da lingua: nao fale mal de ninguem, nao reclame, nao minta. Se nao tem algo bom para dizer, fique em silencio.',
    quranReading: 'Surah Al-Hujurat 49:11-12 — Nao zombeis, nao difameis',
    reflection: 'O que sai da sua boca diz mais sobre voce do que sobre os outros. O que voce anda dizendo?',
    isLailatAlQadr: false,
  },
  {
    day: 5,
    theme: 'Generosidade',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْنِي فِيهِ مِنَ الْمُسْتَغْفِرِينَ وَاجْعَلْنِي فِيهِ مِنْ عِبَادِكَ الصَّالِحِينَ',
      translation: 'O Deus, faz-me neste dia entre os que buscam perdao e entre Teus servos virtuosos.',
    },
    deed: 'De algo hoje — dinheiro, comida, tempo, ou uma palavra gentil. O Profeta era o mais generoso no Ramadan, como um vento que nao nega nada.',
    quranReading: 'Surah Al-Baqarah 2:195 — Gastai no caminho de Deus',
    reflection: 'O que voce tem que alguem precisa? Nao precisa ser dinheiro.',
    isLailatAlQadr: false,
  },
  {
    day: 6,
    theme: 'Conexao com o Quran',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ لَا تَخْذُلْنِي فِيهِ لِتَعَرُّضِ مَعْصِيَتِكَ وَلَا تَضْرِبْنِي بِسِيَاطِ نَقِمَتِكَ',
      translation: 'O Deus, nao me abandones neste dia ao me expor a desobediencia e nao me atinjas com os chicotes da Tua vinganca.',
    },
    deed: 'Leia pelo menos 1 pagina do Quran com traducao. Nao pela quantidade — pela qualidade. Entenda o que Deus esta dizendo pra voce.',
    quranReading: 'Surah Ar-Rahman 55:1-30 — Qual das gracas do vosso Senhor negareis?',
    reflection: 'Qual versiculo tocou voce hoje? Por que?',
    isLailatAlQadr: false,
  },
  {
    day: 7,
    theme: 'Perdao Familiar',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ أَعِنِّي فِيهِ عَلَى صِيَامِهِ وَقِيَامِهِ وَجَنِّبْنِي فِيهِ مِنْ هَفَوَاتِهِ وَآثَامِهِ',
      translation: 'O Deus, ajuda-me neste dia com seu jejum e sua oracao, e protege-me de falhas e pecados.',
    },
    deed: 'Peca perdao a um familiar por algo que voce fez ou deixou de fazer. Uma ligacao, uma mensagem. Hoje.',
    quranReading: 'Surah Al-Isra 17:23-24 — Bondade com os pais',
    reflection: 'Quem na sua familia precisa de um pedido de perdao que voce vem adiando?',
    isLailatAlQadr: false,
  },
  {
    day: 8,
    theme: 'Presenca na Oracao',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ ارْزُقْنِي فِيهِ رَحْمَةَ الْأَيْتَامِ وَإِطْعَامَ الطَّعَامِ وَإِفْشَاءَ السَّلَامِ',
      translation: 'O Deus, concede-me neste dia compaixao pelos orfaos, alimentar os famintos e espalhar a paz.',
    },
    deed: 'Reze com intencao hoje. Antes de cada oracao, pare 10 segundos. Respire. Lembre: voce esta diante de Deus.',
    quranReading: 'Surah Al-Mu\'minun 23:1-11 — Bem-aventurados os crentes',
    reflection: 'Voce reza por habito ou por presenca? O que muda quando voce esta realmente presente?',
    isLailatAlQadr: false,
  },
  {
    day: 9,
    theme: 'Desapego Material',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْ لِي فِيهِ نَصِيبًا مِنْ رَحْمَتِكَ الْوَاسِعَةِ',
      translation: 'O Deus, reserva para mim neste dia uma porcao da Tua vasta misericordia.',
    },
    deed: 'Separe roupas ou objetos que voce nao usa e doe. O jejum ensina: voce precisa de menos do que imagina.',
    quranReading: 'Surah At-Takathur 102:1-8 — A competicao por acumular vos distrai',
    reflection: 'O que voce possui que na verdade possui voce?',
    isLailatAlQadr: false,
  },
  {
    day: 10,
    theme: 'Misericordia com os Outros',
    phase: 'mercy',
    phaseLabel: 'Misericordia',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْنِي فِيهِ مِنَ الْمُتَوَكِّلِينَ عَلَيْكَ وَاجْعَلْنِي فِيهِ مِنَ الْفَائِزِينَ عِنْدَكَ',
      translation: 'O Deus, faz-me neste dia entre os que confiam em Ti e entre os vencedores diante de Ti.',
    },
    deed: 'Seja misericordioso com alguem que errou com voce. O Profeta disse: "Quem nao mostra misericordia nao recebera misericordia."',
    quranReading: 'Surah Al-Anbiya 21:107 — Nao te enviamos senao como misericordia para os mundos',
    reflection: 'Com quem voce precisa ser mais misericordioso — inclusive consigo mesmo?',
    isLailatAlQadr: false,
  },

  // ═══════════════════════════════════════
  // PHASE 2: FORGIVENESS (MAGHFIRA) — Days 11-20
  // ═══════════════════════════════════════
  {
    day: 11,
    theme: 'Arrependimento Sincero (Tawbah)',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ حَبِّبْ إِلَيَّ فِيهِ الْإِحْسَانَ وَكَرِّهْ إِلَيَّ فِيهِ الْفُسُوقَ وَالْعِصْيَانَ',
      translation: 'O Deus, faz-me amar neste dia a excelencia e faz-me detestar a imoralidade e a desobediencia.',
    },
    deed: 'Faca uma lista de 3 pecados que voce repete. Peca perdao especificamente por cada um. Arrependimento verdadeiro exige nomear o erro.',
    quranReading: 'Surah Az-Zumar 39:53 — Nao desespereis da misericordia de Deus',
    reflection: 'Qual habito destrutivo voce carrega que ja devia ter abandonado?',
    isLailatAlQadr: false,
  },
  {
    day: 12,
    theme: 'Humildade',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ زَيِّنِّي فِيهِ بِالسِّتْرِ وَالْعَفَافِ وَاسْتُرْنِي فِيهِ بِلِبَاسِ الْقُنُوعِ وَالْكَفَافِ',
      translation: 'O Deus, adorna-me neste dia com pudor e castidade, e cobre-me com as vestes da contentacao e da suficiencia.',
    },
    deed: 'Reconheca um erro seu para alguem hoje. Humildade nao e fraqueza — e ter a coragem de ser honesto sobre quem voce e.',
    quranReading: 'Surah Al-Furqan 25:63-76 — Os servos do Misericordioso',
    reflection: 'Onde na sua vida o orgulho esta impedindo voce de crescer?',
    isLailatAlQadr: false,
  },
  {
    day: 13,
    theme: 'Purificacao do Coracao',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ طَهِّرْ قَلْبِي فِيهِ مِنَ النِّفَاقِ وَعَمَلِي مِنَ الرِّيَاءِ',
      translation: 'O Deus, purifica meu coracao neste dia da hipocrisia e minhas acoes da ostentacao.',
    },
    deed: 'Faca uma boa acao em segredo. Ninguem pode saber. A sinceridade so existe quando ninguem esta olhando.',
    quranReading: 'Surah Ash-Shams 91:1-15 — Bem-aventurado e quem purifica a alma',
    reflection: 'O que voce faz de bom so quando alguem esta olhando?',
    isLailatAlQadr: false,
  },
  {
    day: 14,
    theme: 'Perdoar Quem Te Magoou',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ لَا تُؤَاخِذْنِي فِيهِ بِالْعَثَرَاتِ وَأَقِلْنِي فِيهِ مِنَ الْخَطَايَا وَالْهَفَوَاتِ',
      translation: 'O Deus, nao me culpes neste dia por meus tropecos e livra-me dos pecados e falhas.',
    },
    deed: 'Pense em alguem que te magoou e que voce ainda guarda ressentimento. Diga internamente: "Eu te perdoo. Entrego isso a Deus."',
    quranReading: 'Surah An-Nur 24:22 — Nao gostarieis que Deus vos perdoasse?',
    reflection: 'O rancor que voce carrega machuca o outro ou so machuca voce?',
    isLailatAlQadr: false,
  },
  {
    day: 15,
    theme: 'Meio do Ramadan — Balanço',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْنِي فِيهِ مُطِيعًا لِخَيْرِكَ وَافْتَحْ لِي فِيهِ أَبْوَابَ فَضْلِكَ',
      translation: 'O Deus, faz-me neste dia obediente ao Teu bem e abre para mim as portas da Tua graca.',
    },
    deed: 'Metade do Ramadan. Releia as intencoes do dia 1. O que mudou? O que falta? Ajuste o rumo para os proximos 15 dias.',
    quranReading: 'Surah Al-Hashr 59:18-24 — O temei a Deus e vede o que haveis preparado para amanha',
    reflection: 'Se o Ramadan acabasse hoje, voce estaria satisfeito com o esforco que fez?',
    isLailatAlQadr: false,
  },
  {
    day: 16,
    theme: 'Jejum dos Olhos',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ وَفِّقْنِي فِيهِ لِمُوَافَقَةِ الْأَبْرَارِ وَجَنِّبْنِي فِيهِ مُرَافَقَةَ الْأَشْرَارِ',
      translation: 'O Deus, concede-me neste dia a companhia dos virtuosos e afasta-me da companhia dos maus.',
    },
    deed: 'Evite redes sociais hoje. O jejum nao e so de comida — e de tudo que polui sua alma. O que voce consome com os olhos molda seu coracao.',
    quranReading: 'Surah An-Nur 24:30-31 — Baixai vossos olhares',
    reflection: 'O que voce anda consumindo com os olhos que nao te faz melhor?',
    isLailatAlQadr: false,
  },
  {
    day: 17,
    theme: 'Gratidao pela Saude',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ اهْدِنِي فِيهِ لِصَالِحِ الْأَعْمَالِ وَاقْضِ لِي فِيهِ الْحَوَائِجَ وَالْآمَالَ',
      translation: 'O Deus, guia-me neste dia para as boas acoes e realiza minhas necessidades e esperancas.',
    },
    deed: 'Se voce esta saudavel o suficiente para jejuar, agradeca. Visite ou ligue para alguem doente. Uma palavra de conforto e caridade.',
    quranReading: 'Surah Luqman 31:12-19 — Sabedoria e gratidao',
    reflection: 'O que voce faria diferente se soubesse que amanha perderia sua saude?',
    isLailatAlQadr: false,
  },
  {
    day: 18,
    theme: 'Confianca em Deus (Tawakkul)',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ نَبِّهْنِي فِيهِ لِبَرَكَاتِ أَسْحَارِهِ وَنَوِّرْ فِيهِ قَلْبِي بِضِيَاءِ أَنْوَارِهِ',
      translation: 'O Deus, desperta-me neste dia para as bencaos de suas madrugadas e ilumina meu coracao com o brilho de suas luzes.',
    },
    deed: 'Entregue a Deus algo que voce tenta controlar e nao consegue. Diga: "Hasbiyallahu wa ni\'mal wakeel" — Deus me basta, e Ele e o melhor Protetor.',
    quranReading: 'Surah At-Talaq 65:2-3 — Quem confia em Deus, Ele lhe basta',
    reflection: 'O que voce esta tentando controlar que precisa entregar?',
    isLailatAlQadr: false,
  },
  {
    day: 19,
    theme: 'Oracao da Madrugada',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ وَسِّعْ لِي فِيهِ أَبْوَابَ الْجِنَانِ وَأَغْلِقْ عَنِّي فِيهِ أَبْوَابَ النِّيرَانِ',
      translation: 'O Deus, abre para mim neste dia as portas do Paraiso e fecha para mim as portas do Fogo.',
    },
    deed: 'Acorde antes do Fajr e reze Tahajjud (oracao da madrugada). Mesmo que sejam 2 rakaat. A madrugada e quando Deus desce ao ceu mais proximo.',
    quranReading: 'Surah Al-Muzzammil 73:1-8 — Levanta-te durante a noite',
    reflection: 'Quando foi a ultima vez que voce conversou com Deus no silencio da madrugada?',
    isLailatAlQadr: false,
  },
  {
    day: 20,
    theme: 'Transicao para os Ultimos 10',
    phase: 'forgiveness',
    phaseLabel: 'Perdao',
    dua: {
      arabic: 'اللَّهُمَّ افْتَحْ لِي فِيهِ أَبْوَابَ الْجِنَانِ وَأَغْلِقْ عَنِّي أَبْوَابَ النِّيرَانِ وَوَفِّقْنِي فِيهِ لِتِلَاوَةِ الْقُرْآنِ',
      translation: 'O Deus, abre para mim as portas do Paraiso, fecha as portas do Fogo e concede-me a recitacao do Quran.',
    },
    deed: 'Prepare-se para os ultimos 10 dias — os mais poderosos. Organize seu tempo, reduza distracao, aumente ibadah (adoracao).',
    quranReading: 'Surah Al-Qadr 97:1-5 — A Noite do Decreto',
    reflection: 'Os ultimos 10 dias comecam agora. Voce vai desperdicar ou vai lutar por cada momento?',
    isLailatAlQadr: false,
  },

  // ═══════════════════════════════════════
  // PHASE 3: FREEDOM FROM FIRE — Days 21-30
  // ═══════════════════════════════════════
  {
    day: 21,
    theme: 'Noite do Decreto — Busca Intensa',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translation: 'O Deus, Tu es Perdoador e amas o perdao, entao perdoa-me.',
    },
    deed: 'Esta e uma noite impar dos ultimos 10. Reze, suplique, chore se puder. A Noite do Decreto vale mais que 1.000 meses.',
    quranReading: 'Surah Al-Qadr 97:1-5 + Surah Ad-Dukhan 44:1-6',
    reflection: 'Se esta for a Lailat al-Qadr, o que voce pediria a Deus com toda sinceridade do seu coracao?',
    isLailatAlQadr: true,
  },
  {
    day: 22,
    theme: 'Servir os Outros',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ ارْزُقْنِي فِيهِ الْفَوْزَ عِنْدَ الْقَضَاءِ وَمَنَازِلَ الشُّهَدَاءِ',
      translation: 'O Deus, concede-me neste dia o sucesso no Dia do Juizo e as posicoes dos martires.',
    },
    deed: 'Alimente alguem que esta jejuando. O Profeta disse: quem alimenta um jejuador recebe a mesma recompensa sem diminuir nada da dele.',
    quranReading: 'Surah Al-Insan 76:5-12 — Eles alimentam o pobre, o orfao e o cativo',
    reflection: 'Servir os outros e servir a Deus. Quem voce pode servir hoje?',
    isLailatAlQadr: false,
  },
  {
    day: 23,
    theme: 'Noite do Decreto — Suplica Profunda',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translation: 'O Deus, Tu es Perdoador e amas o perdao, entao perdoa-me.',
    },
    deed: 'Faca sujud (prostacao) prolongado. No sujud voce esta mais proximo de Deus. Fale com Ele. Chore. Peca. Agradeca.',
    quranReading: 'Surah Al-Alaq 96:1-19 — Le! Em nome do teu Senhor',
    reflection: 'Na prostacao, voce nao e nada diante de Deus — e justamente por isso, Ele te ouve.',
    isLailatAlQadr: true,
  },
  {
    day: 24,
    theme: 'Revisao de Vida',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ اغْسِلْنِي فِيهِ مِنَ الذُّنُوبِ وَطَهِّرْنِي فِيهِ مِنَ الْعُيُوبِ',
      translation: 'O Deus, lava-me neste dia dos pecados e purifica-me dos defeitos.',
    },
    deed: 'Reveja o ultimo ano da sua vida. O que voce construiu? O que destruiu? O que negligenciou? Faca tawbah especifica.',
    quranReading: 'Surah Al-Hashr 59:18 — Olhai o que haveis preparado para o amanha',
    reflection: 'Se voce encontrasse Deus amanha, o que diria sobre como viveu este ano?',
    isLailatAlQadr: false,
  },
  {
    day: 25,
    theme: 'Noite do Decreto — Vigilia Completa',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translation: 'O Deus, Tu es Perdoador e amas o perdao, entao perdoa-me.',
    },
    deed: 'Tente ficar acordado a noite inteira em ibadah: Quran, dhikr, dua, salah. Se nao conseguir tudo, ao menos as ultimas horas antes do Fajr.',
    quranReading: 'Surah Yasin 36:1-83 — O coracao do Quran',
    reflection: 'O que vale mais: uma noite de sono ou uma noite que vale 83 anos de adoracao?',
    isLailatAlQadr: true,
  },
  {
    day: 26,
    theme: 'Sadaqah Intensificada',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْ سَعْيِي فِيهِ مَشْكُورًا وَذَنْبِي فِيهِ مَغْفُورًا وَعَمَلِي فِيهِ مَقْبُولًا',
      translation: 'O Deus, faz meu esforco neste dia agradecido, meu pecado perdoado e minha acao aceita.',
    },
    deed: 'De o maximo que puder em caridade hoje. O Profeta multiplicava sua generosidade nos ultimos 10 dias. Cada real dado nessas noites e multiplicado imensamente.',
    quranReading: 'Surah Al-Baqarah 2:261 — O grapo de semente que produz 700',
    reflection: 'O que voce da a Deus nunca diminui — so multiplica.',
    isLailatAlQadr: false,
  },
  {
    day: 27,
    theme: 'Noite do Decreto — A Mais Provavel',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translation: 'O Deus, Tu es Perdoador e Generoso, amas o perdao, entao perdoa-me.',
    },
    deed: 'A noite 27 e a mais tradicionalmente associada a Lailat al-Qadr. Invista tudo: oracao, Quran, dua, lagrimas, promessas sinceras a Deus.',
    quranReading: 'Surah Al-Mulk 67:1-30 — Bendito seja Aquele em cuja mao esta o dominio',
    reflection: 'Esta pode ser a noite. Voce esta dando tudo de si ou guardando esforco?',
    isLailatAlQadr: true,
  },
  {
    day: 28,
    theme: 'Zakat al-Fitr e Preparacao',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ تَقَبَّلْ مِنِّي صِيَامِي وَقِيَامِي وَدُعَائِي',
      translation: 'O Deus, aceita meu jejum, minhas oracoes e minhas suplicas.',
    },
    deed: 'Pague o Zakat al-Fitr (caridade do Eid). E obrigatorio antes da oracao do Eid. Garanta que ninguem passe fome na festa.',
    quranReading: 'Surah At-Tawbah 9:60 — Para quem e o Zakat',
    reflection: 'Voce nao celebra sozinho. O Eid so e completo quando todos podem celebrar.',
    isLailatAlQadr: false,
  },
  {
    day: 29,
    theme: 'Noite do Decreto — Ultima Chance',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      translation: 'O Deus, Tu es Perdoador e amas o perdao, entao perdoa-me.',
    },
    deed: 'Ultima noite impar. Se voce nao deu tudo ainda, agora e a hora. Nao importa o que aconteceu nos 28 dias anteriores — esta noite pode mudar tudo.',
    quranReading: 'Surah Az-Zumar 39:53-54 — Nao desespereis da misericordia de Deus',
    reflection: 'Deus nao olha para quantas vezes voce caiu. Olha para quantas vezes voce se levantou.',
    isLailatAlQadr: true,
  },
  {
    day: 30,
    theme: 'Despedida e Promessa',
    phase: 'freedom',
    phaseLabel: 'Libertacao do Fogo',
    dua: {
      arabic: 'اللَّهُمَّ اجْعَلْ صِيَامِي فِيهِ بِالشُّكْرِ وَالْقَبُولِ وَلَا تَجْعَلْهُ مَرْدُودًا',
      translation: 'O Deus, faz do meu jejum neste dia com gratidao e aceitacao, e nao o rejeites.',
    },
    deed: 'Ultimo dia. Faca dua para que Deus aceite todo o seu Ramadan. Escreva uma promessa para si mesmo: o que voce vai continuar fazendo apos o Ramadan?',
    quranReading: 'Surah Al-Baqarah 2:185-186 — O mes do Quran + Deus esta proximo',
    reflection: 'O Ramadan acaba, mas a transformacao nao. O que voce leva deste mes para o resto da sua vida?',
    isLailatAlQadr: false,
  },
]

export const RAMADAN_PHASES = [
  { key: 'mercy' as const, label: 'Misericordia', arabic: 'رحمة', days: '1-10', color: '#4A90D9' },
  { key: 'forgiveness' as const, label: 'Perdao', arabic: 'مغفرة', days: '11-20', color: '#C9A84C' },
  { key: 'freedom' as const, label: 'Libertacao do Fogo', arabic: 'عتق من النار', days: '21-30', color: '#D94A4A' },
]

// ═══════════════════════════════════════════════════════
// RAMADAN DATE HELPER
// Ramadan 1447 AH ≈ Feb 28 – Mar 29, 2026
// Update these dates annually based on moon sighting
// ═══════════════════════════════════════════════════════

const RAMADAN_2026_START = new Date(2026, 1, 28) // Feb 28, 2026
const RAMADAN_2026_END = new Date(2026, 2, 29)   // Mar 29, 2026

/** Returns the current Ramadan day (1-30) or null if not Ramadan */
export function getRamadanDay(): number | null {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const start = new Date(RAMADAN_2026_START)
  start.setHours(0, 0, 0, 0)

  const end = new Date(RAMADAN_2026_END)
  end.setHours(0, 0, 0, 0)

  if (today < start || today > end) return null

  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  return Math.min(diff + 1, 30)
}

/** Returns today's Ramadan data or null */
export function getTodayRamadan(): RamadanDay | null {
  const day = getRamadanDay()
  if (day === null) return null
  return ramadanDays[day - 1] ?? null
}
