export type StudySection = {
  title: string
  verses: string
  arabic: string
  translation: string
  explanation: string
  keyInsight: string
}

export type SurahStudy = {
  surahNumber: number
  slug: string
  title: string
  arabicTitle: string
  subtitle: string
  overview: string
  sections: StudySection[]
}

export const surahStudies: SurahStudy[] = [
  // ──────────────────────────────────────────────────────
  // 1. AL-FATIHA — A Abertura
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 1,
    slug: 'al-fatiha',
    title: 'A Abertura',
    arabicTitle: 'الفاتحة',
    subtitle: 'O capítulo mais recitado da história humana — 17 vezes ao dia por 1,8 bilhão de pessoas.',
    overview: `Al-Fatiha não é apenas a abertura do Alcorão — é a abertura de toda conversa entre o ser humano e Deus. Cada uma das cinco orações diárias contém pelo menos duas recitações desta surata, o que significa que um muçulmano praticante a repete no mínimo 17 vezes ao dia. Nenhum outro texto na história da humanidade foi recitado tantas vezes, por tantas pessoas, por tantos séculos.

Mas Al-Fatiha não é repetição vazia. É um diálogo. Segundo um hadith narrado pelo Profeta Muhammad (que a paz esteja com ele), Deus disse: "Dividi a oração entre Mim e Meu servo em duas metades." Quando o servo diz "Al-hamdu lillahi Rabbil alamin", Deus responde: "Meu servo Me louvou." É uma conversa viva — não um monólogo.

São apenas 7 versículos e 29 palavras em árabe. Mas cada palavra carrega um peso teológico imenso. Al-Fatiha contém os fundamentos do Islã comprimidos em um formato que cabe na palma da mão: louvor, misericórdia, soberania, adoração exclusiva, pedido de orientação, e a consciência de que existem caminhos que levam à luz e caminhos que levam à escuridão. É o mapa inteiro da jornada espiritual em sete linhas.`,
    sections: [
      {
        title: 'Bismillah — Em Nome de Deus',
        verses: '1',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ',
        translation: 'Em nome de Deus, o Clemente, o Misericordioso.',
        explanation: `Toda ação no Islã começa com esta frase. Não é um ritual — é uma declaração de intenção. Ao dizer "Em nome de Deus", você está dizendo: o que faço agora, faço consciente de que existe algo maior do que eu. É um reset de ego.

Os dois nomes de Deus aqui — Ar-Rahman e Ar-Rahim — vêm da mesma raiz árabe "rahma" (misericórdia), mas com intensidades diferentes. Ar-Rahman é a misericórdia que abrange tudo e todos, crentes e descrentes, humanos e animais, o universo inteiro. Ar-Rahim é a misericórdia especial, reservada, íntima — aquela que acompanha quem escolhe caminhar em direção a Deus.

Antes de qualquer coisa — antes de louvar, antes de pedir, antes de aprender — o Alcorão abre com misericórdia. Não com poder. Não com castigo. Misericórdia. Isso diz tudo sobre a natureza da mensagem.`,
        keyInsight: 'O Alcorão abre com misericórdia, não com poder — isso define toda a relação entre Deus e o ser humano.',
      },
      {
        title: 'O Louvor Universal',
        verses: '2',
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'Todo louvor pertence a Deus, Senhor de todos os mundos.',
        explanation: `"Al-hamdu lillah" — quatro palavras que contêm a teologia inteira do Islã. "Al-hamd" não é apenas "obrigado". É louvor, gratidão e reconhecimento combinados. É dizer: Tudo de bom vem de Ti. E o artigo definido "Al" significa que TODO louvor, não apenas o meu, pertence a Deus. Quando alguém louva a beleza de um pôr do sol, está louvando a Deus — saiba ou não.

"Rabbil alamin" — Senhor de todos os mundos. Não "Senhor dos árabes". Não "Senhor dos muçulmanos". Senhor de todos os mundos. "Alamin" é plural de "alam" (mundo, universo), e inclui tudo: o mundo dos humanos, dos anjos, dos animais, dos jinns, das galáxias que não conhecemos. Deus não é tribal.

Esta é a primeira coisa que Deus ensina ao ser humano a dizer: que Ele é universal. Antes de qualquer regra, antes de qualquer proibição — universalidade. Esse é o ponto de partida.`,
        keyInsight: '"Rabbil alamin" — Senhor de todos os mundos. O Islã começa com universalidade, não com tribalismo.',
      },
      {
        title: 'Os Dois Nomes da Misericórdia',
        verses: '3',
        arabic: 'الرَّحْمَـٰنِ الرَّحِيمِ',
        translation: 'O Clemente, o Misericordioso.',
        explanation: `Deus repete Seus nomes de misericórdia. Na Bismillah e agora aqui. Por quê? Porque o ser humano esquece. Esquece que antes de ser Juiz, Deus é Misericordioso. Esquece que a misericórdia não é uma exceção — é a regra.

Ar-Rahman é um nome exclusivo de Deus. Nenhum ser humano pode ser chamado de "Ar-Rahman". É uma misericórdia tão vasta que não cabe em nenhuma criatura. O Profeta disse: "Deus dividiu a misericórdia em 100 partes. Guardou 99 para o Dia do Juízo e enviou 1 para a Terra. Dessa única parte vem todo o amor que vocês veem: a mãe que cuida do filho, o animal que protege sua cria."

Se o que vemos na Terra — todo amor, toda compaixão, toda ternura entre as criaturas — é apenas 1% da misericórdia de Deus, imagine os 99% restantes. Essa é a escala de Ar-Rahman.`,
        keyInsight: 'Todo o amor que existe na Terra é apenas 1% da misericórdia de Deus. 99% estão reservados para o Dia do Juízo.',
      },
      {
        title: 'O Dono do Dia da Retribuição',
        verses: '4',
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        translation: 'Soberano do Dia da Retribuição.',
        explanation: `Depois de três versículos sobre misericórdia, vem a soberania. E não qualquer soberania — a soberania sobre o Dia em que toda alma prestará contas. "Yawm ad-Din" é o Dia do Juízo, o Dia em que nenhum poder terrestre vale nada. Nenhum dinheiro, nenhum exército, nenhum título.

"Malik" — Soberano, Dono. Há uma variação de leitura (qira'a) que diz "Malik" (Rei) em vez de "Malik" (Dono). As duas são válidas. Rei governa; Dono possui. Juntas, elas pintam o quadro completo: Deus não apenas governa o Dia Final — Ele o possui. Não há recurso. Não há apelação.

Este versículo é o contrapeso da misericórdia. Sim, Deus é Clemente e Misericordioso. Mas também é Justo. E a justiça exige um dia de prestação de contas. Sem esse dia, o opressor e o oprimido seriam iguais, e a misericórdia perderia seu significado. A misericórdia só é real quando a justiça também é.`,
        keyInsight: 'Misericórdia sem justiça é permissividade. Justiça sem misericórdia é tirania. Al-Fatiha apresenta as duas juntas.',
      },
      {
        title: 'A Declaração de Adoração',
        verses: '5',
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        translation: 'Somente a Ti adoramos e somente de Ti pedimos ajuda.',
        explanation: `Este é o versículo central de Al-Fatiha — e do Islã inteiro. Em árabe, a estrutura é enfática: "Iyyaka" (somente a Ti) vem ANTES do verbo. Em qualquer outra construção, seria "na'budu iyyaka". Mas a inversão gramatical cria exclusividade absoluta: SOMENTE a Ti. Ninguém mais. Nada mais.

É aqui que o tom muda. Nos versículos 1 a 4, o servo fala SOBRE Deus na terceira pessoa: "Louvor a Deus... Senhor dos mundos... Soberano do Dia..." Mas no versículo 5, o servo fala PARA Deus diretamente: "A Ti adoramos." Essa transição — de falar sobre para falar com — é o momento em que a oração se torna conversa.

"Na'budu" (adoramos) e "nasta'in" (pedimos ajuda) — duas faces da mesma moeda. Adoração sem pedir ajuda é arrogância: "Posso sozinho." Pedir ajuda sem adoração é utilitarismo: "Só te procuro quando preciso." Al-Fatiha ensina: adore E peça ajuda. As duas coisas juntas.`,
        keyInsight: 'Adoração sem pedir ajuda é arrogância. Pedir ajuda sem adoração é utilitarismo. As duas devem andar juntas.',
      },
      {
        title: 'O Pedido de Orientação',
        verses: '6',
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translation: 'Guia-nos ao caminho reto.',
        explanation: `Se existe UM pedido que resume toda a religião, é este. Não é um pedido por dinheiro, saúde, filhos ou sucesso. É um pedido por DIREÇÃO. "Ihdina" — guia-nos. O verbo é "hadaya", de onde vem "hidaya" (orientação). É o presente mais precioso que Deus pode dar: saber para onde ir.

"As-Sirat al-Mustaqim" — o caminho reto. "Sirat" vem de uma raiz que significa "caminho largo e claro", não um beco estreito. O caminho de Deus não é sufocante — é amplo. E "mustaqim" significa reto, direto, sem curvas desnecessárias. Não é o caminho mais fácil, mas é o mais direto.

O fato de os muçulmanos repetirem este pedido 17 vezes ao dia revela algo profundo: a orientação não é permanente. Você pode estar no caminho certo agora e se desviar amanhã. Cada oração é uma recalibração. Cada "ihdina" é um "me mantenha no caminho". Ninguém está garantido. Todos precisam pedir — todos os dias.`,
        keyInsight: 'Orientação não é permanente. Cada oração é uma recalibração — por isso pedimos "guia-nos" 17 vezes ao dia.',
      },
      {
        title: 'Os Dois Caminhos',
        verses: '7',
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        translation: 'O caminho daqueles a quem agraciaste, não dos que incorreram em Tua ira, nem dos desviados.',
        explanation: `O último versículo define três grupos: os agraciados, os que incorreram na ira de Deus, e os desviados. Mas quem são?

Os agraciados (an'amta alayhim) — os profetas, os verazes, os mártires, os virtuosos. São aqueles que receberam a orientação e a seguiram. Seu caminho é o modelo.

"Al-Maghdubi alayhim" (os que incorreram em ira) — segundo a tradição exegética, são aqueles que CONHECERAM a verdade mas a rejeitaram por arrogância ou interesse. Tinham conhecimento, mas não agiram. "Ad-Dallin" (os desviados) — são aqueles que se perderam por ignorância, não por malícia. Queriam o bem, mas seguiram sem saber.

Dois erros opostos: saber e não fazer (arrogância) versus fazer sem saber (ignorância). O caminho reto evita ambos: é conhecimento COM ação. Teoria COM prática. Saber E aplicar. Al-Fatiha termina com este lembrete: não basta saber — é preciso viver.`,
        keyInsight: 'Dois erros opostos: saber sem agir (arrogância) e agir sem saber (ignorância). O caminho reto é conhecimento com ação.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 2. AYAT AL-KURSI — O Versículo do Trono
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 2,
    slug: 'ayat-al-kursi',
    title: 'O Versículo do Trono',
    arabicTitle: 'آية الكرسي',
    subtitle: 'O versículo mais poderoso do Alcorão — uma única aya que contém a essência de Deus.',
    overview: `Ayat al-Kursi é um único versículo — o 255 da Surata Al-Baqarah — mas é considerado o versículo mais grandioso de todo o Alcorão. O Profeta Muhammad (que a paz esteja com ele) perguntou a Ubayy ibn Ka'b: "Qual é o maior versículo do Livro de Deus?" Ubayy respondeu: "Deus e Seu Mensageiro sabem melhor." O Profeta insistiu. Ubayy disse: "Ayat al-Kursi." O Profeta bateu em seu peito e disse: "Felicidade para ti pelo conhecimento, ó Abu al-Mundhir!"

Este versículo é uma concentração pura de teologia. Em dez frases, ele descreve Deus de uma forma que nenhum outro texto religioso faz com tanta economia de palavras. Cada frase é uma negação de uma falsa crença e uma afirmação de uma verdade sobre a natureza divina. Não há divindade senão Ele. Ele não cochila. Não dorme. Nada escapa a Ele. Ninguém intercede sem Sua permissão.

A tradição islâmica atribui a Ayat al-Kursi um poder protetor extraordinário. Quem a recita antes de dormir tem um anjo guardião durante a noite. Quem a recita após cada oração, nada o impede de entrar no Paraíso senão a morte. Não é magia — é a força da consciência. Quando você internaliza que Deus é Assim, que poder no universo pode te ameaçar?`,
    sections: [
      {
        title: 'A Unicidade Absoluta',
        verses: '255a',
        arabic: 'اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        translation: 'Deus! Não há divindade senão Ele, o Vivente, o Sustentador de tudo.',
        explanation: `O versículo abre com o Nome supremo: Allah. Em árabe, este nome é único — não tem plural, não tem gênero, não tem equivalente. É o nome próprio de Deus, usado antes do Islã pelos árabes e até hoje pelos cristãos árabes.

"La ilaha illa Hu" — não há deus senão Ele. É a negação mais radical possível. Antes de afirmar quem Deus É, o versículo afirma quem Ele NÃO É: não é ídolo, não é ancestral, não é força da natureza, não é ego humano, não é dinheiro, não é poder. Nada que você adora no lugar de Deus é deus.

"Al-Hayy al-Qayyum" — o Vivente, o Auto-Subsistente. Al-Hayy: Ele vive, e Sua vida não depende de nada. Al-Qayyum: Ele sustenta tudo, e Sua existência não depende de nada que Ele sustenta. Tudo depende Dele. Ele não depende de nada. Essa é a diferença fundamental entre o Criador e a criação.`,
        keyInsight: 'Al-Hayy al-Qayyum: Ele vive sem depender de nada, e tudo que existe depende Dele para continuar existindo.',
      },
      {
        title: 'Além do Humano',
        verses: '255b',
        arabic: 'لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
        translation: 'Não O acometem cochilo nem sono.',
        explanation: `Uma frase curta que destrói toda concepção antropomórfica de Deus. Nas mitologias antigas, os deuses dormiam, comiam, brigavam entre si, se distraíam. No relato bíblico do Gênesis, Deus "descansou no sétimo dia". O Alcorão corrige: Deus não cochila, não dorme, não descansa — porque não Se cansa.

"Sina" (cochilo) é mencionado antes de "nawm" (sono) em ordem crescente. Nem o menor lapso de atenção O acomete. Se um pai cochila por um segundo e o filho se machuca, há falha. Deus não tem esse segundo de desatenção. Nunca. Em 14 bilhões de anos de universo, nenhum átomo se moveu sem Seu conhecimento.

Isso tem uma implicação prática devastadora: você nunca está sozinho. Às 3 da manhã, quando todos dormem e você está acordado com suas dores — Deus está acordado. Quando o mundo inteiro te esquece — Deus não cochila. Quando você acha que ninguém vê seu esforço — Ele vê. Sempre.`,
        keyInsight: 'Deus não cochila nem dorme. Às 3 da manhã, quando todos dormem, Ele está acordado — e te vê.',
      },
      {
        title: 'A Soberania Total',
        verses: '255c',
        arabic: 'لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
        translation: 'A Ele pertence tudo o que há nos céus e na terra.',
        explanation: `"Lahu" — a Ele. Não "a eles", não "a nós". A Ele. Tudo. Todo o universo — cada galáxia, cada átomo, cada pensamento — pertence a Deus. Nós não possuímos nada. Somos depositários temporários.

Isso muda completamente a relação com bens materiais. Seu dinheiro não é "seu" — está sob sua custódia temporária. Sua casa, seu carro, seu corpo — tudo emprestado. Você é um gerente, não um dono. E como todo gerente, será perguntado: o que fez com o que te foi confiado?

"As-samawat wal ard" — os céus e a terra. Na cosmovisão corânica, os céus não são um lugar distante e irrelevante — são parte do mesmo sistema que inclui a terra. E Deus é dono de tudo: do visível e do invisível, do que conhecemos e do que não conhecemos, do que a ciência já descobriu e do que ainda nem imagina.`,
        keyInsight: 'Você não é dono de nada. É um depositário temporário. A pergunta será: o que fez com o que lhe foi confiado?',
      },
      {
        title: 'A Intercessão Condicionada',
        verses: '255d',
        arabic: 'مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ',
        translation: 'Quem pode interceder junto a Ele senão com Sua permissão?',
        explanation: `Este trecho aborda diretamente uma questão teológica central: pode alguém interceder por você diante de Deus? A resposta é clara: sim, MAS somente com permissão de Deus. Ninguém — nenhum profeta, nenhum anjo, nenhum santo — tem autoridade independente para interceder. A intercessão existe, mas é concedida, não assumida.

Isso dissolve dois extremos. O primeiro: idolatria disfarçada de devoção, onde santos e intermediários são tratados como atalhos para Deus. O segundo: desespero total, onde a pessoa acha que está sozinha sem nenhuma esperança de ajuda.

A verdade está no meio: existe intercessão, mas ela vem DE Deus, não VAI ATÉ Deus. Deus permite que certas criaturas intercedam como honra — mas a decisão final é sempre Dele. Ninguém "convence" Deus de nada. Ninguém tem poder de barganha com o Absoluto.`,
        keyInsight: 'Intercessão existe, mas vem de Deus, não vai até Deus. Ninguém "convence" o Absoluto — Ele decide quem pode interceder.',
      },
      {
        title: 'O Conhecimento Ilimitado',
        verses: '255e',
        arabic: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ',
        translation: 'Ele conhece o que está diante deles e o que está atrás deles. E eles não abrangem nada de Seu conhecimento senão o que Ele quer.',
        explanation: `Deus conhece o passado e o futuro de cada criatura. "Ma bayna aydihim" (o que está diante deles) e "ma khalfahum" (o que está atrás deles) — alguns estudiosos interpretam como futuro e passado; outros como o visível e o invisível. Em qualquer interpretação, o significado é: nada escapa ao conhecimento de Deus. Nem o que foi. Nem o que será. Nem o que poderia ter sido.

E a segunda parte é igualmente poderosa: "Eles não abrangem nada de Seu conhecimento senão o que Ele quer." Todo o conhecimento humano — toda ciência, toda filosofia, toda tecnologia — é uma fração microscópica do que Deus sabe, e mesmo essa fração só existe porque Ele permitiu que soubéssemos.

Isso não diminui a ciência — ao contrário, a coloca em perspectiva. A ciência é descoberta, não criação de conhecimento. Quando um cientista descobre uma lei da física, ele não a inventou — ele encontrou algo que Deus já sabia. A curiosidade humana é nobre; a arrogância intelectual, não.`,
        keyInsight: 'A ciência é descoberta, não criação. Quando descobrimos algo, encontramos o que Deus já sabia desde a eternidade.',
      },
      {
        title: 'O Trono que Abrange Tudo',
        verses: '255f',
        arabic: 'وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
        translation: 'Seu Trono abrange os céus e a terra, e a preservação de ambos não O cansa. E Ele é o Altíssimo, o Grandioso.',
        explanation: `"Kursi" — Trono. Ibn Abbas, primo do Profeta e maior exegeta entre os Companheiros, disse: "O Kursi é o lugar onde os pés se apoiam, e o Arsh (Trono maior) é tão grande que ninguém pode estimar sua dimensão." Se o Kursi já abrange os céus e a terra, imagine o Arsh. E se o Arsh é assim, imagine Aquele que Se elevou acima dele.

"Wa la ya'uduhu hifdhuhuma" — preservar os céus e a terra não O cansa. Manter 200 bilhões de galáxias funcionando, cada uma com bilhões de estrelas, cada estrela com suas órbitas, cada átomo com suas partículas subatômicas — tudo isso não exige de Deus nenhum esforço. É como respirar para Ele (e Ele não respira).

O versículo fecha com dois nomes: Al-Aliyy (o Altíssimo) e Al-Azim (o Grandioso). Acima de tudo em posição, acima de tudo em magnitude. Não existe nada que se compare. Não existe nada que se aproxime. E é exatamente esse Deus — imenso, inalcançável, incompreensível — que ouve sua oração às 3 da manhã. Grandeza e intimidade, juntas.`,
        keyInsight: 'O mesmo Deus cujo Trono abrange os céus e a terra ouve sua oração silenciosa. Grandeza e intimidade coexistem.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 3. YA-SIN — O Coração do Alcorão
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 36,
    slug: 'ya-sin',
    title: 'O Coração do Alcorão',
    arabicTitle: 'يس',
    subtitle: '83 versículos. O Profeta disse: "Tudo tem um coração, e o coração do Alcorão é Ya-Sin."',
    overview: `Ya-Sin ocupa uma posição única no Alcorão e na vida dos muçulmanos. O Profeta Muhammad (que a paz esteja com ele) disse: "Tudo tem um coração, e o coração do Alcorão é Ya-Sin. Quem a recitar, Deus registrará para ele como se tivesse recitado o Alcorão dez vezes." É a surata recitada aos moribundos para facilitar a passagem da alma, e recitada pelos vivos para lembrar que a morte é uma porta, não um muro.

Mas por que "coração"? Porque Ya-Sin contém, em 83 versículos, os três pilares fundamentais da fé islâmica: a unicidade de Deus (tawhid), a profecia (risalah) e a vida após a morte (akhirah). É um Alcorão dentro do Alcorão — um resumo concentrado de toda a mensagem.

A surata percorre uma jornada: começa com um juramento divino e a confirmação de que Muhammad é um mensageiro verdadeiro, passa pela parábola de uma cidade que rejeitou três mensageiros, mostra os sinais de Deus na natureza, confronta a negação da ressurreição, e termina com a demonstração do poder absoluto de Deus sobre a vida e a morte. É uma surata sobre despertar — para quem ainda está dormindo.`,
    sections: [
      {
        title: 'O Juramento e a Missão',
        verses: '1-12',
        arabic: 'يس ﴿١﴾ وَالْقُرْآنِ الْحَكِيمِ ﴿٢﴾ إِنَّكَ لَمِنَ الْمُرْسَلِينَ ﴿٣﴾ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ ﴿٤﴾',
        translation: 'Ya-Sin. Pelo Alcorão sábio, de fato tu és um dos mensageiros, sobre um caminho reto.',
        explanation: `A surata abre com as letras misteriosas "Ya-Sin" — ninguém sabe com certeza o que significam. Alguns dizem que é um nome do Profeta. Outros dizem que é um chamado: "Ó ser humano!" O que é certo é que essas letras capturam a atenção: algo grande está por vir.

Imediatamente, Deus jura pelo Alcorão — "Wal-Qur'anil Hakim" (pelo Alcorão sábio) — para confirmar que Muhammad é um mensageiro legítimo, sobre um caminho reto. Em uma sociedade onde o Profeta era chamado de louco, poeta e mentiroso, Deus abre esta surata dizendo: ele está dizendo a verdade, e o caminho que ele ensina é o correto.

Os versículos seguintes descrevem a condição daqueles que se recusam a ouvir: "Pusemos grilhões em seus pescoços até os queixos, e eles não podem levantar a cabeça. E pusemos uma barreira diante deles e outra atrás, e os cobrimos — e eles não veem." Não é que Deus os cegou — é que a arrogância os cegou. O orgulho é o grilhão mais pesado.`,
        keyInsight: 'O orgulho é o grilhão que impede de levantar a cabeça e ver a verdade — é uma cegueira autoimposta.',
      },
      {
        title: 'A Cidade dos Três Mensageiros',
        verses: '13-32',
        arabic: 'وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ إِذْ جَاءَهَا الْمُرْسَلُونَ',
        translation: 'E apresenta-lhes o exemplo dos habitantes da cidade, quando os mensageiros chegaram a ela.',
        explanation: `Deus conta a história de uma cidade (segundo a tradição, Antioquia) que recebeu dois mensageiros e os rejeitou. Um terceiro foi enviado como reforço — e mesmo assim, o povo não acreditou. Disseram: "Vocês são apenas humanos como nós." A objeção era simples: como Deus enviaria homens comuns?

Então surge uma figura extraordinária — um homem que veio correndo da periferia da cidade. A tradição o chama de Habib an-Najjar. Ele disse ao povo: "Sigam os mensageiros! Sigam aqueles que não vos pedem recompensa e estão bem guiados!" E quando foi morto pelo povo, Deus lhe disse: "Entra no Paraíso!" Sua resposta, mesmo depois de ser assassinado pelo próprio povo, foi: "Quem dera meu povo soubesse!"

Não disse "malditos sejam". Disse "quem dera soubessem". Esse é o nível de misericórdia que a fé produz: mesmo diante da morte injusta, o crente deseja o bem para quem o matou. Habib an-Najjar é o modelo do crente solitário que enfrenta a maioria.`,
        keyInsight: 'Habib an-Najjar foi assassinado pelo próprio povo — e sua resposta foi: "Quem dera eles soubessem." Fé que transcende a vingança.',
      },
      {
        title: 'Sinais na Criação',
        verses: '33-44',
        arabic: 'وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ',
        translation: 'E um sinal para eles é a terra morta: Nós a vivificamos e dela fizemos sair grãos, dos quais comem.',
        explanation: `Agora a surata muda de narrativa para observação. Olhe ao redor, diz Deus. A terra morta que revive com a chuva — isso não é prova suficiente de que Quem ressuscita a terra pode ressuscitar os mortos? Os grãos que saem do solo, os jardins de tâmaras e uvas, as fontes que jorram — tudo isso é "aya" (sinal).

A noite e o dia, o sol e a lua — cada um em sua órbita. "Wa kullun fi falakin yasbahun" — cada um em uma órbita, flutuando. O Alcorão usa a palavra "yasbahun" (nadam/flutuam) para descrever o movimento dos astros — 1.400 anos antes de sabermos que os planetas efetivamente flutuam no espaço.

E os navios — Deus lembra que Ele salvou os descendentes de Noé na arca, e que toda embarcação que flutua é um sinal de Sua misericórdia. Se Ele quisesse, afogaria a todos, e não haveria quem socorresse nem quem salvasse. Cada viagem segura é uma misericórdia que não pedimos e não merecemos.`,
        keyInsight: 'A terra que morre no inverno e renasce na primavera é prova: Quem ressuscita a terra pode ressuscitar os mortos.',
      },
      {
        title: 'A Hora Inevitável',
        verses: '45-68',
        arabic: 'وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ',
        translation: 'E quando se lhes diz: "Temei o que está diante de vós e o que está atrás de vós, para que possais receber misericórdia..."',
        explanation: `A surata confronta a negação da Hora — o Dia do Juízo. Sempre que alguém os alerta, os negadores se desviam. Sempre que um sinal de Deus lhes é apresentado, viram as costas. E a Hora virá como "sayhatan wahida" — um único grito. Não haverá aviso prévio. Não haverá tempo para arrependimento de última hora.

O cenário é vívido: no meio de uma negociação no mercado, no meio de uma refeição em família — o grito virá. "Eles não poderão fazer testamento nem retornar a suas famílias." A vida acabará no meio de um gesto ordinário. É o lembrete mais cru possível: a morte não agenda.

Depois, a separação. Os crentes vão para jardins de sombra, reclinados em tronos. Deus lhes dirá: "Salam" — Paz. Uma saudação direta do Criador. E os que negaram serão confrontados: "Eu não lhes ordenei, ó filhos de Adão, que não adorassem Satanás? Ele é vosso inimigo declarado." A pergunta implica: vocês sabiam. A informação estava disponível. A escolha foi de vocês.`,
        keyInsight: 'A Hora virá como um grito — no meio de uma refeição, de uma conversa, de um gesto ordinário. A morte não agenda.',
      },
      {
        title: 'O Poder Absoluto sobre a Vida e a Morte',
        verses: '69-83',
        arabic: 'أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُم ۚ بَلَىٰ وَهُوَ الْخَلَّاقُ الْعَلِيمُ',
        translation: 'Aquele que criou os céus e a terra não é capaz de criar semelhantes a eles? Sim! Ele é o Criador Supremo, o Onisciente.',
        explanation: `A surata se encaminha para o clímax com um argumento lógico devastador: Aquele que criou os céus e a terra pela primeira vez — com toda sua imensidão, complexidade e beleza — não seria capaz de recriar seres humanos? A recriação é mais fácil que a criação original. Se Ele fez uma vez, por que não faria de novo?

"Innama amruhu idha arada shay'an an yaqula lahu kun fayakun" — Quando Ele quer algo, basta dizer "Seja!" e é. Este é talvez o versículo mais poderoso sobre o poder divino em toda a escritura sagrada. Não há processo. Não há esforço. Não há intermediário. Uma palavra: Kun. E a existência obedece.

Ya-Sin termina com: "Subhana alladhi biyadihi malakutu kulli shay'in wa ilayhi turja'un" — Glorificado seja Aquele em cujas mãos está o domínio de todas as coisas, e a Ele sereis retornados. É a conclusão perfeita: tudo começou com Ele, tudo é sustentado por Ele, e tudo retornará a Ele. Não há saída. Não há alternativa. Não há exceção.`,
        keyInsight: '"Kun fayakun" — Quando Deus quer algo, diz "Seja!" e é. Sem processo, sem esforço. Uma palavra e o universo obedece.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 4. AR-RAHMAN — O Misericordioso
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 55,
    slug: 'ar-rahman',
    title: 'O Misericordioso',
    arabicTitle: 'الرحمن',
    subtitle: '78 versículos. "Qual das mercês de vosso Senhor negareis?" — repetido 31 vezes.',
    overview: `Ar-Rahman é a surata mais musical do Alcorão. Seu refrão — "Fa bi ayyi ala'i rabbikuma tukadhdhibaan" (Qual das mercês de vosso Senhor negareis?) — ecoa 31 vezes como ondas que crescem. É uma surata que não argumenta — ela lista. Lista as bênçãos de Deus uma após a outra, e depois de cada uma pergunta: e essa, você também vai negar?

O nome Ar-Rahman é o mais intenso dos nomes de misericórdia de Deus. É tão exclusivo que não pode ser atribuído a nenhuma criatura. E é com esse nome que a surata abre — não com "Deus disse" ou "Diz", mas simplesmente: "Ar-Rahman." Como se o nome fosse suficiente. Como se pronunciá-lo já fosse a mensagem inteira.

A tradição narra que quando o Profeta recitou Ar-Rahman para os jinns (seres invisíveis), cada vez que chegava ao refrão, os jinns respondiam: "Nenhuma de Tuas mercês negamos, ó nosso Senhor! A Ti pertence o louvor!" Os humanos, conta-se, ficaram em silêncio. O Profeta disse: "Os jinns responderam melhor que vocês." Ar-Rahman é uma surata que exige resposta — e o silêncio diante dela é ingratidão.`,
    sections: [
      {
        title: 'O Professor Divino',
        verses: '1-13',
        arabic: 'الرَّحْمَـٰنُ ﴿١﴾ عَلَّمَ الْقُرْآنَ ﴿٢﴾ خَلَقَ الْإِنسَانَ ﴿٣﴾ عَلَّمَهُ الْبَيَانَ ﴿٤﴾',
        translation: 'O Misericordioso. Ensinou o Alcorão. Criou o ser humano. Ensinou-lhe a expressão.',
        explanation: `A ordem é revolucionária. O Alcorão veio ANTES do ser humano nesta sequência. Por quê? Porque a revelação não é uma resposta a uma necessidade humana — é o propósito da criação humana. O ser humano foi criado PARA receber a mensagem, não o contrário. A mensagem não veio para servir o homem — o homem veio para receber a mensagem.

"Allamahul bayan" — ensinou-lhe a expressão. O dom da fala, da linguagem, da capacidade de articular pensamentos. Todo ser vivo se comunica, mas nenhum fala como o ser humano. A linguagem é o que separa o homem do animal. E esse dom veio de Deus — não da evolução cega.

Depois, a surata lista: o sol e a lua seguem cálculos precisos, as estrelas e as árvores se prostram diante de Deus, o céu foi elevado e a balança estabelecida. "Não defraudeis a balança!" — justiça. Desde o início, Ar-Rahman conecta misericórdia com justiça, criação com responsabilidade. A misericórdia de Deus não é desculpa para a irresponsabilidade humana.`,
        keyInsight: 'O ser humano foi criado para receber a mensagem — a mensagem não veio para servir o homem.',
      },
      {
        title: 'Humanidade e Jinns',
        verses: '14-25',
        arabic: 'خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ﴿١٤﴾ وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ﴿١٥﴾',
        translation: 'Criou o ser humano de barro seco como cerâmica. E criou os jinns de chama de fogo.',
        explanation: `Ar-Rahman é a única surata que se dirige explicitamente a dois públicos: humanos e jinns. O refrão pergunta "rabbikuma" (de vós dois) — dual, não plural. São duas raças de seres conscientes, cada uma criada de um material diferente: o homem de barro, o jinn de fogo.

A surata continua listando bênçãos marítimas: "Ele é o Senhor dos dois mares que se encontram, entre eles uma barreira que não ultrapassam." Os oceanógrafos modernos confirmam que mares de densidades diferentes se encontram sem se misturar — um fenômeno descrito no Alcorão no século VII. "Deles saem pérolas e corais."

"Wa lahul jawaris al-munsha'atu fil bahri kal a'lam" — E Dele são as embarcações que navegam pelo mar como montanhas. Cada navio que flutua, cada viagem que chega ao destino — é uma mercê. Qual dessas mercês vós negareis? A pergunta não é retórica. É um espelho: olhe para sua vida e conte as bênçãos que você ignora.`,
        keyInsight: 'Dois mares que se encontram sem se misturar — fenômeno descrito no Alcorão 1.400 anos antes da oceanografia.',
      },
      {
        title: 'Tudo Perece, Ele Permanece',
        verses: '26-30',
        arabic: 'كُلُّ مَنْ عَلَيْهَا فَانٍ ﴿٢٦﴾ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ﴿٢٧﴾',
        translation: 'Tudo o que está sobre ela perecerá. E permanecerá a Face de teu Senhor, plena de Majestade e Honra.',
        explanation: `Em apenas dois versículos, Ar-Rahman comprime a verdade mais importante que existe: tudo morre. Tudo. Cada ser humano, cada civilização, cada montanha, cada estrela. "Kullu man alayha fan" — tudo que está sobre ela (a terra) é perecível. Sem exceção.

E depois da destruição total: "Wa yabqa wajhu Rabbika dhul jalali wal ikram" — E permanece a Face de teu Senhor, plena de Majestade e Honra. Quando tudo acabar, quando o sol se apagar e as estrelas caírem e os oceanos secarem e as montanhas virarem pó — Deus permanece. Ele era antes de tudo existir. Ele será depois de tudo desaparecer.

A justaposição é intencional: no meio de uma surata que lista bênçãos materiais — mares, pérolas, navios — vem o lembrete de que tudo isso é temporário. Desfrute, mas não se apegue. Use, mas não adore. Agradeça, mas saiba que vai acabar. A única coisa permanente é Aquele que criou tudo.`,
        keyInsight: 'Tudo perece. Deus permanece. Desfrute das bênçãos, mas não se apegue — o permanente é só Ele.',
      },
      {
        title: 'O Acerto de Contas',
        verses: '31-45',
        arabic: 'سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ',
        translation: 'Em breve Nos ocuparemos de vós, ó duas raças pesadas!',
        explanation: `"Sanafraghu lakum" — Em breve Nos ocuparemos de vós. É um aviso que gela a espinha. Deus, que sustenta trilhões de galáxias sem esforço, diz que vai "se ocupar" de humanos e jinns. Não porque precise de esforço — mas porque a prestação de contas é certa.

"Fa bi ayyi ala'i rabbikuma tukadhdhibaan?" — Qual das mercês negareis? Mesmo o acerto de contas é mercê. Por quê? Porque sem justiça, a misericórdia é vazia. Sem prestação de contas, o opressor e o oprimido seriam iguais. O Dia do Juízo é uma mercê para quem sofreu injustiça nesta vida.

Depois, a surata descreve o Dia: "Os culpados serão reconhecidos por seus sinais, e serão agarrados pelos topetes e pelos pés." A imagem é visceral. Não há esconderijo. Não há máscara. Naquele dia, a verdade de cada pessoa será visível. Os hipócritas que sorriram por fora e destruíram por dentro serão expostos. E aí vem o refrão novamente: qual dessas mercês negareis? Porque a verdade — mesmo quando dói — é mercê.`,
        keyInsight: 'O Dia do Juízo é mercê para quem sofreu injustiça. Sem prestação de contas, o opressor e o oprimido seriam iguais.',
      },
      {
        title: 'Os Dois Jardins do Paraíso',
        verses: '46-78',
        arabic: 'وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ ﴿٤٦﴾ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ﴿٤٧﴾',
        translation: 'E para quem temeu a posição de seu Senhor, haverá dois jardins. Qual das mercês de vosso Senhor negareis?',
        explanation: `A surata encerra com a descrição mais exuberante do Paraíso no Alcorão. Dois jardins com ramos pendentes, duas fontes jorrantes, todos os frutos em pares, reclinados sobre estofos cujo interior é de brocado — e os frutos de ambos os jardins estarão ao alcance da mão.

Depois dos dois jardins superiores, vêm outros dois: "Além desses, dois outros jardins." Verde-escuros de tão verdes. Duas fontes abundantes. Frutas, tâmaras e romãs. Cada detalhe é sensorial: cores, texturas, sabores. Deus não descreve o Paraíso em termos abstratos — Ele usa imagens que o ser humano pode sentir. Porque o Paraíso não é uma metáfora. É real.

O refrão ecoa pela última vez. 31 repetições ao longo da surata. Da criação ao Paraíso, da misericórdia à justiça, dos mares às estrelas — a cada mercê, a mesma pergunta. No final, a surata fecha com: "Tabaraka ismu rabbika dhil jalali wal ikram" — Bendito seja o nome de teu Senhor, pleno de Majestade e Honra. A mesma expressão do versículo 27. A surata começa e termina com a eternidade de Deus.`,
        keyInsight: 'O Paraíso não é metáfora. É real, descrito com cores, texturas e sabores — para quem temeu a Deus em segredo.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 5. AL-MULK — A Soberania
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 67,
    slug: 'al-mulk',
    title: 'A Soberania',
    arabicTitle: 'الملك',
    subtitle: '30 versículos. "A protetora do túmulo" — recitada toda noite antes de dormir.',
    overview: `Al-Mulk é chamada de "Al-Mani'ah" (a Protetora) e "Al-Munjiyah" (a Salvadora). O Profeta Muhammad (que a paz esteja com ele) disse: "Há uma surata do Alcorão com trinta versículos que intercedeu por um homem até que ele foi perdoado. É: Tabarak alladhi biyadihil mulk." Outra narração diz: "Recitem-na toda noite. Ela é a protetora e a salvadora do tormento do túmulo."

Al-Mulk é a surata que os muçulmanos recitam antes de dormir. Não como amuleto, mas como lembrete. Dormir é uma pequena morte — você entrega sua consciência e confia que vai acordar. Al-Mulk confronta essa confiança: e se você não acordar? Está preparado?

Em 30 versículos, Al-Mulk faz três coisas: demonstra a soberania absoluta de Deus sobre a vida e a morte, descreve o destino de quem nega, e desafia o ser humano a olhar para a criação e encontrar nela uma falha. "Olhe de novo. E de novo. Sua visão retornará humilhada." A criação é perfeita — e a perfeição aponta para um Criador perfeito.`,
    sections: [
      {
        title: 'O Domínio e o Propósito da Morte',
        verses: '1-5',
        arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾ الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ﴿٢﴾',
        translation: 'Bendito seja Aquele em cujas mãos está o domínio, e Ele tem poder sobre todas as coisas. Aquele que criou a morte e a vida para vos testar: qual de vós é melhor em obras.',
        explanation: `A surata abre declarando que o domínio (mulk) pertence a Deus. Não aos reis. Não aos presidentes. Não ao mercado financeiro. A Deus. Todo poder que existe no universo é emprestado — e pode ser revogado a qualquer momento.

O segundo versículo contém uma revelação que muda tudo: Deus CRIOU a morte. A morte não é um acidente. Não é uma falha do sistema. É uma criação intencional, com um propósito específico: "liyabluwakum ayyukum ahsanu amala" — para testar qual de vós é MELHOR em obras. Não "mais" em obras. "Melhor." Qualidade sobre quantidade.

E note: a morte vem antes da vida na frase. "Criou a morte E a vida." Por quê? Porque a consciência da morte dá significado à vida. Sem morte, a vida seria um jogo infinito sem consequência. A morte é o que torna cada minuto precioso. É o que separa os que vivem com propósito dos que apenas existem.`,
        keyInsight: 'Deus criou a morte ANTES da vida — porque é a consciência da morte que dá significado a cada minuto vivido.',
      },
      {
        title: 'O Destino dos Negadores',
        verses: '6-11',
        arabic: 'وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ',
        translation: 'E para aqueles que descreem em seu Senhor, há o castigo do Inferno. E que péssimo destino!',
        explanation: `A surata descreve o som do Inferno: "Quando forem lançados nele, ouvirão dele um estrondo enquanto ele ferve. Quase se rompe de fúria." O Inferno tem som. Tem movimento. Tem quase uma personalidade — ferve de fúria contra aqueles que rejeitaram a verdade.

E os que estão nele serão perguntados: "Não vos veio um avisador?" Eles responderão: "Sim, veio-nos um avisador, mas desmentimos e dissemos: Deus não revelou nada! Vós estais em grande erro!" É a confissão mais dolorosa possível: sim, a informação estava disponível. Sim, o mensageiro veio. Sim, ouvimos. E mesmo assim, escolhemos ignorar.

"E disseram: Se tivéssemos ouvido ou raciocinado, não estaríamos entre os companheiros do Fogo." A combinação é precisa: ouvir (receber a mensagem) E raciocinar (processá-la com a mente). Quem faz só um dos dois se perde. Fé cega sem razão é superstição. Razão sem fé é arrogância. Al-Mulk exige ambos.`,
        keyInsight: 'Fé cega sem razão é superstição. Razão sem fé é arrogância. Al-Mulk exige ouvir E raciocinar — juntos.',
      },
      {
        title: 'Aqueles que Temem a Deus em Segredo',
        verses: '12-15',
        arabic: 'إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ',
        translation: 'De fato, aqueles que temem a seu Senhor no oculto terão perdão e grande recompensa.',
        explanation: `"Bil ghayb" — no oculto. Não é quem teme a Deus na frente dos outros. É quem teme a Deus quando ninguém está vendo. Quando está sozinho no quarto. Quando ninguém jamais saberia. Essa é a fé verdadeira — a que existe sem audiência.

Qualquer pessoa pode ser "religiosa" em público. Pode ir à mesquita, falar bonito, vestir-se adequadamente. Mas quem é você às 2 da manhã, sozinho, com o celular na mão e ninguém olhando? Se sua conduta muda quando a câmera desliga — sua fé é performance, não convicção.

"Lahum maghfiratun wa ajrun kabir" — para eles, perdão e grande recompensa. A recompensa é proporcional à dificuldade. Temer a Deus em público, quando todos estão vigiando, tem mérito. Mas temer a Deus em segredo, quando ninguém veria se você falhasse — isso é o teste real. E é isso que Al-Mulk valoriza acima de tudo.`,
        keyInsight: 'A fé verdadeira é a que existe sem audiência — quem é você às 2 da manhã, sozinho, quando ninguém está olhando?',
      },
      {
        title: 'Sinais na Criação Perfeita',
        verses: '16-22',
        arabic: 'أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ',
        translation: 'Acaso vos sentis seguros de que Aquele que está no céu não fará a terra vos engolir, e eis que ela se agita?',
        explanation: `Deus confronta a falsa sensação de segurança. Você anda sobre a terra como se ela fosse sua. Mas e se ela se abrisse? E se o vento levasse tudo? A segurança que sentimos não é mérito nosso — é misericórdia de Deus. A qualquer momento, Ele poderia retirar essa misericórdia.

"Alam yaraw ilat tayri fawqahum saffatin wa yaqbidna? Ma yumsikuhunna illar Rahman." — Não olham para os pássaros acima deles, abrindo e fechando as asas? Nada os sustenta senão o Misericordioso. Os pássaros voam porque Deus os sustenta. A gravidade funciona porque Deus a mantém. As leis da física existem porque Deus as decretou. Se Ele quisesse, tudo pararia.

A surata então confronta: "Quem é esse exército que vos socorreria contra o Misericordioso?" A resposta é: ninguém. Nenhum exército, nenhuma tecnologia, nenhum dinheiro. Quando Deus decide, não há recurso. E não é ameaça — é realidade. Reconhecer isso é sabedoria; ignorar é delírio.`,
        keyInsight: 'A segurança que sentimos não é mérito nosso — é misericórdia de Deus que pode ser retirada a qualquer momento.',
      },
      {
        title: 'As Perguntas Finais',
        verses: '23-30',
        arabic: 'قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ',
        translation: 'Diz: "Ele é Quem vos criou e vos deu a audição, a visão e os corações. Quão pouco agradeceis!"',
        explanation: `Al-Mulk encerra com uma série de perguntas que não têm resposta. Cada uma desmonta uma camada de autossuficiência humana. "Quem vos sustentaria se Deus retivesse Seu sustento?" "Quem vos traria água corrente se vossa água sumisse?"

A pergunta sobre a água é a última da surata — e é genial. A água é a substância mais básica da vida. Sem ela, a morte vem em dias. E de onde vem a água? Das nuvens, que vêm dos oceanos, que existem porque Deus os criou. Toda a cadeia de sustento humano depende de uma decisão divina. Se Deus dissesse "basta", não haveria sequer um copo d'água.

"Qalilan ma tashkurun" — quão pouco agradeceis. É o diagnóstico final de Al-Mulk: o problema do ser humano não é ignorância — é ingratidão. Temos olhos e não vemos as bênçãos. Temos ouvidos e não ouvimos os sinais. Temos corações e não sentimos gratidão. A surata que protege do túmulo é, no fundo, um chamado para acordar ANTES do túmulo.`,
        keyInsight: 'O problema do ser humano não é ignorância — é ingratidão. Temos tudo e agradecemos pouco.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 6. AL-KAHF — A Caverna
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 18,
    slug: 'al-kahf',
    title: 'A Caverna',
    arabicTitle: 'الكهف',
    subtitle: '110 versículos. Quatro histórias, quatro provações. Recitada toda sexta-feira.',
    overview: `Al-Kahf é a surata da sexta-feira. O Profeta Muhammad (que a paz esteja com ele) disse: "Quem recitar Surata Al-Kahf na sexta-feira terá uma luz entre as duas sextas-feiras." Outra narração diz: "Quem memorizar os dez primeiros versículos de Al-Kahf será protegido do Dajjal (Anticristo)." Mas por que essa surata especificamente?

Porque Al-Kahf é um manual de sobrevivência contra as quatro maiores provações da humanidade: a provação da fé (perseguição religiosa), a provação da riqueza (materialismo), a provação do conhecimento (arrogância intelectual) e a provação do poder (tirania). Cada uma é ilustrada por uma história diferente, e cada história ensina como sobreviver à provação sem perder a alma.

As quatro histórias — os Jovens da Caverna, o Dono dos Dois Jardins, Moisés e Khidr, e Dhul-Qarnayn — formam um crescendo. Da fé pessoal (indivíduo) à riqueza (família), ao conhecimento (sociedade) e ao poder (civilização). É um mapa completo das tentações humanas, do micro ao macro, com a solução para cada uma.`,
    sections: [
      {
        title: 'Os Jovens da Caverna — A Provação da Fé',
        verses: '9-26',
        arabic: 'إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',
        translation: 'De fato, eles eram jovens que creram em seu Senhor, e Nós lhes aumentamos a orientação.',
        explanation: `Jovens — não velhos sábios, não sacerdotes experientes. Jovens. Em uma sociedade que perseguia quem acreditava em um Deus único, um grupo de jovens fez a escolha mais radical possível: abandonou tudo — família, posição social, conforto — e se refugiou em uma caverna. "Nosso Senhor é o Senhor dos céus e da terra. Jamais invocaremos outra divindade além Dele."

Deus os fez dormir 309 anos. Quando acordaram, o mundo havia mudado. A perseguição acabara. A fé pela qual foram perseguidos agora era dominante. Mas para eles, pareciam apenas algumas horas. "Quanto tempo permanecestes?" — "Um dia, ou parte de um dia." O tempo é relativo — e 309 anos para Deus são como um piscar de olhos.

A lição: quando a sociedade inteira está contra sua fé, a solução não é ceder — é buscar refúgio. Às vezes, o refúgio é físico (sair do ambiente tóxico). Às vezes, é espiritual (proteger o coração enquanto o corpo permanece). Mas NUNCA é a rendição. Os jovens não negociaram sua fé. Não disseram "vou só fingir". Preferiram a caverna ao conforto da mentira.`,
        keyInsight: 'Quando a sociedade está contra sua fé, a solução não é ceder — é buscar refúgio. Nunca negocie o que é inegociável.',
      },
      {
        title: 'O Dono dos Dois Jardins — A Provação da Riqueza',
        verses: '32-44',
        arabic: 'وَدَخَلَ جَنَّتَهُ وَهُوَ ظَالِمٌ لِّنَفْسِهِ قَالَ مَا أَظُنُّ أَن تَبِيدَ هَـٰذِهِ أَبَدًا',
        translation: 'E entrou em seu jardim sendo injusto consigo mesmo. Disse: "Não creio que isto jamais perecerá."',
        explanation: `Um homem com dois jardins exuberantes — uvas, tâmaras, plantações, rios. Tudo funcionando. Tudo produzindo. E ele olhou para aquilo tudo e disse duas coisas fatais: "Não creio que isto perecerá" e "Não creio que a Hora virá, mas se vier, certamente encontrarei algo melhor."

Seu companheiro — pobre, sem terras — o confrontou: "Acaso descrês nAquele que te criou do pó, depois de uma gota, e te formou homem? Quanto a mim, Ele é Deus, meu Senhor, e não associo ninguém a Ele." E acrescentou: "Se ao menos, ao entrar em teu jardim, tivesses dito: Ma sha'a Allah, la quwwata illa billah! (O que Deus quis! Não há poder senão em Deus!)"

O que aconteceu? Os jardins foram destruídos. O homem ficou torcendo as mãos, lamentando tudo que havia investido. "Oxalá eu não tivesse associado ninguém a meu Senhor!" Mas já era tarde. A riqueza em si não é o problema — o problema é esquecer de onde ela veio. A solução está em uma frase: "Ma sha'a Allah."`,
        keyInsight: '"Ma sha\'a Allah" — ao olhar para o que tem, reconheça que veio de Deus. A riqueza sem gratidão é caminho para a ruína.',
      },
      {
        title: 'Moisés e Khidr — A Provação do Conhecimento',
        verses: '60-82',
        arabic: 'قَالَ لَهُ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰ أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا',
        translation: 'Moisés lhe disse: "Posso te seguir para que me ensines da orientação que te foi ensinada?"',
        explanation: `Moisés — um dos maiores profetas da história — é enviado para aprender com Khidr, um servo de Deus com um conhecimento especial. Khidr avisou: "Não conseguirás ter paciência comigo. Como terias paciência com aquilo que não compreendes?" Moisés prometeu paciência. E falhou três vezes.

Khidr fez um furo em um barco (para salvá-lo de um rei tirano que confiscava navios intactos). Matou um jovem (que iria crescer para torturar seus pais crentes com incredulidade e tirania — e Deus daria aos pais um filho melhor). Reconstruiu um muro sem cobrar nada (porque debaixo dele havia um tesouro de dois órfãos, e se o muro caísse, o tesouro seria roubado antes que os órfãos crescessem).

Em cada caso, o mal aparente escondia um bem divino. O barco danificado foi salvo. A morte do jovem protegeu os pais. O muro gratuito protegeu os órfãos. A lição é brutal para o ego humano: você não sabe tudo. Seu julgamento é limitado pelo que você vê. E o que Deus vê é infinitamente mais amplo. Humildade intelectual não é fraqueza — é sabedoria.`,
        keyInsight: 'O mal aparente pode esconder um bem divino. Seu julgamento é limitado pelo que vê — o de Deus abrange tudo.',
      },
      {
        title: 'Dhul-Qarnayn — A Provação do Poder',
        verses: '83-98',
        arabic: 'إِنَّا مَكَّنَّا لَهُ فِي الْأَرْضِ وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا',
        translation: 'De fato, Nós lhe estabelecemos poder na terra e lhe demos de tudo os meios.',
        explanation: `Dhul-Qarnayn recebeu de Deus algo que a maioria das pessoas sonha: poder absoluto. "Makkanna lahu fil ard" — estabelecemos para ele poder na terra. Ele podia ir a qualquer lugar, conquistar qualquer povo, fazer o que quisesse. E o que ele fez? Justiça.

Quando encontrou um povo oprimido por Gog e Magog (Ya'juj e Ma'juj), construiu uma barreira para protegê-los. Não cobrou pelo serviço. Não se autoproclamou deus. Disse: "Isto é uma misericórdia de meu Senhor. Quando a promessa de meu Senhor vier, Ele a reduzirá a pó. E a promessa de meu Senhor é verdadeira."

O contraste com todos os tiranos da história é absoluto. Alexandre, César, Napoleão, todos os conquistadores usaram o poder para servir a si mesmos. Dhul-Qarnayn usou o poder para servir a Deus e proteger os fracos. E mesmo construindo algo monumental, reconheceu: isto é temporário. Deus o destruirá quando quiser. Poder sem humildade é tirania. Poder com consciência divina é liderança.`,
        keyInsight: 'Poder sem humildade é tirania. Dhul-Qarnayn tinha poder absoluto e o usou para proteger os fracos, não para servir a si mesmo.',
      },
      {
        title: 'A Conclusão — Quem São os Verdadeiros Perdedores',
        verses: '103-110',
        arabic: 'قُلْ هَلْ نُنَبِّئُكُم بِالْأَخْسَرِينَ أَعْمَالًا ﴿١٠٣﴾ الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا ﴿١٠٤﴾',
        translation: 'Diz: "Devo informar-vos sobre os maiores perdedores em obras? Aqueles cujo esforço se perdeu na vida mundana, enquanto pensavam que estavam fazendo algo bom."',
        explanation: `O versículo mais assustador de Al-Kahf — e talvez de todo o Alcorão — não é sobre o Inferno. É sobre autoilusão. Os maiores perdedores não são os que sabem que estão errados. São os que acham que estão certos. Os que trabalham duro, se esforçam, investem energia — mas em direção errada. E o pior: pensam que estão fazendo algo bom.

Isso é mais perturbador do que qualquer descrição de castigo. Porque o castigo pressupõe que a pessoa sabia que estava errada. Mas e quem não sabe? E quem vive convicto de que está no caminho certo, trabalhando por algo nobre, mas está completamente desviado? Esse é o perdedor supremo: esforço genuíno em direção errada.

A solução que Al-Kahf oferece? Humildade constante. Verificação constante. "Será que estou no caminho certo?" Todo dia. Todo mês. Toda decisão. A arrogância de quem acha que já sabe é o verdadeiro inimigo. As quatro histórias da surata ensinam exatamente isso: questione sua fé, sua riqueza, seu conhecimento e seu poder — todos os dias.`,
        keyInsight: 'Os maiores perdedores não sabem que estão perdendo — acham que estão no caminho certo. Questione-se sempre.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 7. MARYAM — Maria
  // ──────────────────────────────────────────────────────
  {
    surahNumber: 19,
    slug: 'maryam',
    title: 'Maria',
    arabicTitle: 'مريم',
    subtitle: '98 versículos. A ponte entre Islã e Cristianismo — a história de Maria pelos olhos do Alcorão.',
    overview: `Surata Maryam é a surata mais importante para o diálogo inter-religioso. É uma das poucas suratas nomeadas com o nome de uma pessoa — e essa pessoa é uma mulher. Maria (Maryam) é a mulher mais mencionada no Alcorão, mais do que na própria Bíblia. Ela tem uma surata inteira com seu nome. Nenhuma outra mulher tem essa honra.

Quando os primeiros muçulmanos fugiram da perseguição em Meca para a Abissínia (Etiópia cristã), o rei Negus pediu que explicassem sua fé. Ja'far ibn Abi Talib recitou os versículos de Surata Maryam sobre Maria e Jesus. O rei chorou até que sua barba ficou molhada e disse: "Isso e o que Jesus trouxe saem da mesma lâmpada." Concedeu asilo aos muçulmanos. Uma surata salvou uma comunidade.

Maryam não é apenas sobre Maria. É sobre o poder de Deus para fazer o impossível. Zacarias era velho e estéril — Deus lhe deu Yahya (João). Maria era virgem — Deus lhe deu Isa (Jesus). Abraão enfrentou seu próprio pai. Moisés foi escolhido para uma missão impossível. Toda a surata é sobre pessoas comuns que receberam de Deus algo extraordinário — e responderam com fé.`,
    sections: [
      {
        title: 'Zacarias e o Milagre de Yahya',
        verses: '1-15',
        arabic: 'قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا',
        translation: 'Disse: "Meu Senhor! Meus ossos se enfraqueceram e minha cabeça resplandeceu com cabelos brancos. E nunca fui malsucedido em minhas súplicas a Ti, ó Senhor!"',
        explanation: `Zacarias era velho. Sua esposa era estéril. Pela lógica humana, ter um filho era impossível. Mas Zacarias não orava pela lógica — orava pela fé. Sua oração é uma das mais belas do Alcorão: vulnerável, honesta, sem retórica. "Meus ossos enfraqueceram" — ele não esconde a fraqueza. "Minha cabeça branqueou" — ele não finge juventude. "Mas nunca fui malsucedido contigo" — ele tem histórico com Deus.

Deus respondeu: "Nós te damos boas novas de um menino. Seu nome será Yahya (João). Não demos esse nome a ninguém antes dele." Um nome sem precedentes para uma criança sem precedentes. Yahya seria o primeiro a confirmar a palavra de Deus (Jesus), casto, profeta, entre os virtuosos.

Zacarias, atônito, perguntou: "Como terei um filho, se minha esposa é estéril e eu já atingi a velhice extrema?" A resposta de Deus é a essência desta surata: "Assim será. Teu Senhor disse: Isso é fácil para Mim. Eu te criei antes quando nada eras." Se Deus te criou do nada, criar um filho de um casal idoso é simples. O impossível humano é fácil para Deus.`,
        keyInsight: '"Eu te criei quando nada eras." Se Deus cria do nada, qualquer milagre é simples. O impossível humano é o fácil divino.',
      },
      {
        title: 'A Anunciação de Maria',
        verses: '16-26',
        arabic: 'قَالَتْ إِنِّي أَعُوذُ بِالرَّحْمَـٰنِ مِنكَ إِن كُنتَ تَقِيًّا ﴿١٨﴾ قَالَ إِنَّمَا أَنَا رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَامًا زَكِيًّا ﴿١٩﴾',
        translation: '"Eu busco refúgio no Misericordioso contra ti, se és temente a Deus!" Ele disse: "Eu sou apenas um mensageiro de teu Senhor, para te conceder um menino puro."',
        explanation: `Maria estava em retiro espiritual quando o anjo Gabriel apareceu em forma humana. Sua primeira reação não foi curiosidade — foi proteção. "Eu busco refúgio no Misericordioso contra ti!" Ela invocou Deus antes de processar a situação. Isso mostra o nível de sua consciência espiritual: em momento de medo, sua primeira resposta é Deus.

Gabriel anunciou: um filho puro, sem pai. Maria respondeu com a pergunta mais humana possível: "Como terei um filho se nenhum homem me tocou e não sou indecente?" A mesma pergunta de Zacarias, mas com uma camada extra de angústia: não era apenas biologicamente improvável — era socialmente devastador. Uma mulher solteira com um filho em uma sociedade honra-vergonha? A acusação seria imediata.

A resposta de Deus: "Assim será. Teu Senhor disse: Isso é fácil para Mim, e para que o façamos um sinal para as pessoas e misericórdia de Nossa parte. E é um assunto já decretado." Deus não pediu a opinião da sociedade. Não pediu a aprovação dos vizinhos. Decretou, e foi. O plano divino não se submete ao conforto social.`,
        keyInsight: 'O plano de Deus não se submete ao conforto social. Maria enfrentou a pior acusação possível — e Deus a honrou acima de todas as mulheres.',
      },
      {
        title: 'Jesus Fala do Berço',
        verses: '27-40',
        arabic: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
        translation: 'Ele disse: "De fato, eu sou servo de Deus. Ele me deu o Livro e me fez profeta."',
        explanation: `Maria voltou para seu povo carregando o bebê. A reação foi exatamente como ela temia: "Ó Maria! Certamente fizeste algo terrível! Ó irmã de Aarão! Teu pai não era um homem mau, nem tua mãe era indecente!" A acusação pública. A vergonha social. Tudo que ela previu aconteceu.

E aí acontece o milagre: Maria apontou para o bebê. O povo disse: "Como falaremos com quem ainda está no berço?" E Jesus — recém-nascido — falou: "Eu sou servo de Deus." Note: a PRIMEIRA frase de Jesus no Alcorão não é "Eu sou filho de Deus." É "Eu sou SERVO de Deus."

Esta é a diferença fundamental entre a cristologia cristã e a islâmica. Para o Islã, Jesus é um dos maiores profetas, nascido de um milagre, capaz de milagres — mas servo de Deus, não Deus. E é o próprio Jesus quem diz isso, do berço, como sua primeira declaração. "Ele me deu o Livro e me fez profeta. E me fez abençoado onde quer que eu esteja, e me ordenou a oração e a caridade enquanto eu viver."`,
        keyInsight: 'A primeira frase de Jesus no Alcorão: "Eu sou servo de Deus." Não filho — servo. Honrado, milagroso, mas servo.',
      },
      {
        title: 'Abraão e Seu Pai',
        verses: '41-50',
        arabic: 'إِذْ قَالَ لِأَبِيهِ يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ وَلَا يُغْنِي عَنكَ شَيْئًا',
        translation: 'Quando disse a seu pai: "Ó meu pai! Por que adoras o que não ouve, não vê e não te beneficia em nada?"',
        explanation: `Abraão enfrentou algo que poucos teriam coragem: confrontar o próprio pai. Não com agressão — com ternura. "Ya abati" — ó meu paizinho. O diminutivo carinhoso em árabe. Mesmo discordando, mesmo confrontando idolatria, Abraão trata o pai com respeito. O tom é de filho preocupado, não de profeta arrogante.

O pai respondeu com ameaça: "Se não parares, eu te apedrejarei! Afasta-te de mim por longo tempo!" A rejeição foi total. E a resposta de Abraão? "Paz sobre ti. Pedirei perdão a meu Senhor por ti. Ele tem sido generoso comigo." Não reagiu com raiva. Não revidou. Desejou paz e prometeu orar pelo pai.

Este trecho revela algo doloroso sobre a fé: às vezes, ela separa famílias. Às vezes, seguir a verdade significa perder pessoas que amamos. Abraão perdeu o pai. Maria perdeu a reputação. Os jovens da Caverna perderam a sociedade. A fé não promete conforto — promete verdade. E a verdade, às vezes, tem custo.`,
        keyInsight: 'A fé não promete conforto — promete verdade. E seguir a verdade pode significar perder pessoas que amamos.',
      },
      {
        title: 'Os Profetas Mencionados',
        verses: '51-58',
        arabic: 'وَاذْكُرْ فِي الْكِتَابِ مُوسَىٰ ۚ إِنَّهُ كَانَ مُخْلَصًا وَكَانَ رَسُولًا نَّبِيًّا',
        translation: 'E menciona no Livro Moisés. De fato, ele era escolhido, e era mensageiro e profeta.',
        explanation: `A surata agora lista profetas como pérolas em um colar: Moisés — escolhido, que Deus chamou do lado direito do Monte Sinai e aproximou para uma conversa íntima. Ismail — fiel à promessa, mensageiro e profeta, que ordenava a seu povo a oração e a caridade. Idris — veraz, profeta, elevado a um alto posto.

Cada profeta é descrito com uma ou duas qualidades essenciais. Não há biografias longas — são retratos de essência. Moisés: escolhido e íntimo de Deus. Ismail: fiel e comprometido com seu povo. Idris: veraz e elevado. São exemplos compactados de como viver.

"Esses são os que Deus agraciou dentre os profetas, da descendência de Adão, e daqueles que carregamos com Noé, e da descendência de Abraão e Israel, e daqueles que guiamos e escolhemos. Quando os versículos do Misericordioso eram recitados para eles, prostravam-se chorando." Essa é a marca dos profetas: choro diante da Palavra de Deus. Não indiferença. Não análise fria. Choro.`,
        keyInsight: 'A marca dos profetas não é poder — é choro diante da Palavra de Deus. Coração sensível, não indiferença.',
      },
      {
        title: 'O Debate sobre a Ressurreição',
        verses: '66-98',
        arabic: 'وَيَقُولُ الْإِنسَانُ أَإِذَا مَا مِتُّ لَسَوْفَ أُخْرَجُ حَيًّا',
        translation: 'E diz o ser humano: "Quando eu morrer, serei trazido de volta à vida?"',
        explanation: `A surata encerra com o debate mais antigo da humanidade: existe vida após a morte? O ser humano pergunta com ceticismo: "Depois que eu morrer, serei ressuscitado?" A resposta de Deus é lógica antes de ser teológica: "O ser humano não se lembra de que Nós o criamos antes quando nada era?"

Se você veio do nada uma vez, vir do nada de novo é mais fácil. A recriação é logicamente mais simples que a criação original. Mas o ser humano se esquece de sua própria origem. Olha para seus ossos e diz: "Como serão reunidos?" Esquecendo que antes de serem ossos, não eram nada.

A surata termina com uma promessa e um aviso. A promessa: "O Misericordioso concederá amor àqueles que creram e fizeram boas obras." Deus plantará amor por eles nos corações das pessoas. O aviso: os descrentes serão conduzidos ao Inferno como um rebanho sedento. A última aya: "E quantas gerações destruímos antes deles! Percebes algum deles ou ouves deles sequer um sussurro?" Civilizações inteiras desapareceram sem deixar sussurro. O que te faz pensar que a sua será diferente?`,
        keyInsight: 'Civilizações inteiras desapareceram sem deixar sussurro. O que nos faz pensar que somos diferentes?',
      },
    ],
  },
]
