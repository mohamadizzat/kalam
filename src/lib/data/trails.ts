// ── TRAILS DATA ──────────────────────────────────────────────────────────────
// Centralized trail content for all guided journeys in Kalam.

export type TrailDay = {
  day: number
  title: string
  arabic: string
  translation: string
  ref: string
  content: string
  reflection: string
  keyInsight: string
}

export type Trail = {
  slug: string
  title: string
  arabicTitle: string
  subtitle: string
  description: string
  duration: string
  theme: string
  available: boolean
  days: TrailDay[]
}

export const TRAILS: Trail[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 1: DEUS É AMOR (5 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'deus-e-amor',
    title: 'Deus é Amor',
    arabicTitle: 'الله محبة',
    subtitle: '5 dias para entender o amor de Deus sem culpa e sem medo',
    description:
      'A maior distorção sobre Deus é que Ele é juiz antes de ser pai. Esta trilha percorre o Alcorão em busca de uma imagem diferente — um Deus que ama primeiro, que perdoa primeiro, que está mais perto do que sua própria veia jugular.',
    duration: '5 dias',
    theme: 'Amor & Misericórdia',
    available: true,
    days: [
      {
        day: 1,
        title: 'O Primeiro Atributo',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        translation: 'Em nome de Deus, O Misericordioso, O Misericordiador.',
        ref: 'Al-Fatihah 1:1',
        content:
          'Todo capítulo do Alcorão abre com misericórdia. Não com punição. Não com medo. Com amor.\n\nDas 99 características que Deus revela sobre si mesmo no Islam, as duas primeiras que aparecem — antes de qualquer outra coisa — são Ar-Rahman e Ar-Rahim. As duas vêm da mesma raiz em árabe: rahma, que significa misericórdia, ternura, compaixão. Rahman é a misericórdia universal, que cobre toda criatura — o justo e o injusto, o crente e o descrente. Rahim é a misericórdia íntima, especial, reservada para quem busca.\n\nIsso não é detalhe teológico. É uma declaração de identidade. Deus escolheu se apresentar pela misericórdia. Não pelo poder. Não pelo julgamento. Não pela ira. Quando Ele quis dizer ao mundo quem Ele é, a primeira coisa que disse foi: "Eu sou misericordioso." Se 113 dos 114 capítulos do Alcorão começam com essa frase, talvez Deus esteja tentando nos dizer algo que ainda não ouvimos direito.',
        reflection:
          'Se alguém te perguntasse "descreva Deus em uma palavra", o que você diria? E se a resposta de Deus sobre si mesmo fosse "misericordioso" — isso muda alguma coisa dentro de você?',
        keyInsight:
          'Cada vez que o Alcorão é aberto, Deus se apresenta pela misericórdia. Esse é o Deus que este livro quer que você conheça.',
      },
      {
        day: 2,
        title: 'Mais Perto que a Jugular',
        arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        translation: 'E Nós estamos mais próximos dele do que sua veia jugular.',
        ref: 'Qaf 50:16',
        content:
          'A veia jugular é a mais próxima do coração — literalmente dentro de você. E Deus diz que está mais perto do que isso.\n\nEsse versículo é uma resposta a uma pergunta que todo ser humano já fez em algum momento da madrugada: "Onde está Deus quando eu preciso dele?" A resposta do Alcorão não é "no céu", não é "na mesquita", não é "num lugar sagrado que você precisa visitar". É: dentro de você. Mais próximo do que qualquer coisa material que você possa tocar.\n\nPara quem cresceu com a imagem de um Deus distante, sentado num trono, esperando você errar para punir — esse versículo é uma demolição. Deus não está longe. Deus não precisa ser alcançado por rituais elaborados. Ele está tão perto que a distância é uma ilusão. A sensação de estar sozinho, de estar abandonado, de Deus ter esquecido de você — tudo isso é percepção. Não é realidade. A realidade, segundo o Alcorão, é que Ele nunca saiu.',
        reflection:
          'Quando foi a última vez que você se sentiu completamente sozinho? Se Deus estava mais perto que sua própria veia jugular naquele momento — o que isso muda sobre aquela memória?',
        keyInsight:
          'Deus não precisa ser chamado de longe. A sensação de distância é percepção, não realidade.',
      },
      {
        day: 3,
        title: 'Eu Estou Próximo',
        arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
        translation: 'E quando Meus servos te perguntarem sobre Mim — certamente Eu estou próximo.',
        ref: 'Al-Baqarah 2:186',
        content:
          'Esse versículo tem um detalhe que escapa na tradução. Em todo o Alcorão, quando alguém faz uma pergunta ao Profeta Muhammad, a resposta vem como "Diga a eles...". É sempre mediado. Mas aqui, quando perguntam sobre Deus — sobre onde Ele está, se Ele ouve — a resposta muda. Não é "diga a eles que Eu estou próximo". É direto: "Eu estou próximo."\n\nDeus eliminou o intermediário. Não precisa de padre, não precisa de santo, não precisa de ritual, não precisa de permissão. Você chama, Ele responde. Linha direta.\n\nO versículo continua: "Eu respondo ao chamado de quem Me chama quando ele Me chama." Repare que não há condição prévia. Não diz "se ele for bom o suficiente" ou "se ele tiver feito tudo certo primeiro". Diz: quando ele Me chama. O pré-requisito para ser ouvido por Deus é chamá-Lo. Só isso.',
        reflection:
          'Existe algo que você quer dizer a Deus mas sente que não tem "direito" de pedir? Esse versículo diz que o único requisito é chamar. O que você diria se soubesse que Ele já está ouvindo?',
        keyInsight:
          'Sem intermediário. Sem ritual. Sem pré-requisito. Você chama, Ele responde. Essa é a promessa.',
      },
      {
        day: 4,
        title: 'A Misericórdia que Abraça Tudo',
        arabic: 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ',
        translation: 'E Minha misericórdia abrange todas as coisas.',
        ref: 'Al-A\'raf 7:156',
        content:
          'Não algumas coisas. Não as pessoas boas. Não os que merecem. Todas as coisas.\n\nA palavra em árabe é "kulla shay" — literalmente "cada coisa". É o escopo mais amplo possível na língua. A misericórdia de Deus não é seletiva. Não é um clube exclusivo. Não é reservada para quem segue as regras direitinho. Ela abraça tudo o que existe — do menor inseto à maior galáxia, do santo ao pecador, de quem busca a quem fugiu.\n\nIsso não significa que não existem consequências. Significa que antes de qualquer consequência, antes de qualquer julgamento, antes de qualquer coisa — a misericórdia já chegou primeiro. Uma tradição islâmica diz que quando Deus criou a criação, Ele escreveu um decreto acima do Seu trono: "Minha misericórdia supera Minha ira." Não empata. Supera. A misericórdia não é um aspecto de Deus — é o aspecto dominante. É o que prevalece quando tudo mais se equilibra.',
        reflection:
          'Existe alguém — talvez você mesmo — que você acha que a misericórdia de Deus não alcança? Esse versículo diz "todas as coisas". Incluindo isso que você pensou agora.',
        keyInsight:
          'A misericórdia de Deus não é seletiva. É o padrão. É o que prevalece quando tudo mais se equilibra.',
      },
      {
        day: 5,
        title: 'Nunca Desespere',
        arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
        translation: 'Diga: Ó Meus servos que cometeram excessos contra si mesmos, não desesperem da misericórdia de Deus.',
        ref: 'Az-Zumar 39:53',
        content:
          'Preste atenção em quem Deus está chamando. Não são os justos. Não são os perfeitos. São "os que cometeram excessos contra si mesmos" — as pessoas que erraram, que fizeram coisas que não deviam, que olham pra trás e sentem vergonha. É pra eles que Deus fala.\n\nE o que Ele diz? Não é "vocês vão pagar". Não é "talvez eu perdoe, depende". É: "não desesperem." A palavra em árabe — taqnatu — carrega um peso imenso. Desesperar da misericórdia de Deus, no Islam, é considerado um dos erros mais graves. Não porque Deus se ofende com isso, mas porque subestima quem Ele é. É como dizer "meu erro é maior que a misericórdia de Deus". E o Alcorão responde: não é.\n\nO versículo seguinte completa a promessa: "Certamente Deus perdoa todos os pecados. Certamente Ele é O Perdoador, O Misericordioso." Todos. Sem exceção listada. Sem asterisco. Sem letra miúda. Essa trilha começou com Deus se apresentando pela misericórdia. Termina com Ele dizendo: qualquer que seja o peso que você carrega — é menor que o Meu perdão.',
        reflection:
          'Qual é o erro que você carrega achando que Deus não vai perdoar? Nomeie ele na sua mente. Esse versículo foi revelado exatamente pra isso.',
        keyInsight:
          'Essa trilha começou com "Misericordioso". Termina com "não desespere". A mensagem inteira do Alcorão sobre Deus cabe entre essas duas palavras.',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 2: SEM MEDO (4 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'sem-medo',
    title: 'Sem Medo',
    arabicTitle: 'لَا خَوْفٌ',
    subtitle: '4 dias para substituir o medo de Deus por conexão com Deus',
    description:
      'Muito do que chamamos de "religiosidade" é na verdade ansiedade disfarçada. Esta trilha usa versículos do Alcorão para substituir o medo como motor espiritual pela presença como fundação.',
    duration: '4 dias',
    theme: 'Ansiedade & Paz',
    available: true,
    days: [
      {
        day: 1,
        title: 'Com a Dificuldade Vem a Facilidade',
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ، إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'Pois certamente, com a dificuldade vem a facilidade. Certamente, com a dificuldade vem a facilidade.',
        ref: 'Al-Inshirah 94:5-6',
        content:
          'Deus repete duas vezes. Não uma. Duas. No mesmo capítulo, uma atrás da outra, como se soubesse que na primeira vez você talvez não acreditasse.\n\nMas o detalhe mais importante está na gramática árabe — e ele muda tudo. Quando o Alcorão diz "al-usr" (a dificuldade), usa o artigo definido. É a MESMA dificuldade nas duas vezes. Mas quando diz "yusr" (facilidade), usa o indefinido. São facilidades DIFERENTES. Uma dificuldade — múltiplas saídas. O árabe está dizendo que para cada problema, Deus criou não uma, mas várias formas de alívio.\n\nE repare na preposição: "ma\'a" — COM. Não DEPOIS. A facilidade não vem quando a dificuldade termina. Ela já está dentro da dificuldade. Já está acontecendo enquanto você sofre. Às vezes a gente não vê porque está procurando o alívio no lugar errado — espera que a dor vá embora, quando na verdade a saída está crescendo dentro dela.',
        reflection:
          'Qual é a dificuldade que você está dentro agora? Se a saída já existisse dentro dela — não depois, mas agora — onde você procuraria?',
        keyInsight:
          'O medo assume que a dificuldade não tem saída. Esse versículo diz que a saída é parte do design — e vem em dobro.',
      },
      {
        day: 2,
        title: 'Deus Não Sobrecarrega Ninguém',
        arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        translation: 'Deus não sobrecarrega nenhuma alma além do que ela pode suportar.',
        ref: 'Al-Baqarah 2:286',
        content:
          'Esse é um dos versículos mais citados do Alcorão. E talvez um dos mais mal compreendidos. Não é um clichê de autoajuda. É uma declaração sobre a engenharia divina.\n\nDeus, que te criou, conhece exatamente o limite do que você aguenta. Não o limite que você acha que tem — o limite real. E tudo que Ele permite na sua vida foi calibrado por quem te fez. Esse versículo não diz que a vida não vai ser pesada. Diz que o peso foi calculado. Que existe uma inteligência por trás do que você está carregando.\n\nIsso não é "pense positivo". É confiança baseada numa promessa. Se você está no limite — esse versículo é uma declaração de que você está no limite, sim, mas não além. Que aquilo que te quebrou não vai te destruir. Que o Criador que projetou sua capacidade de suportar também projetou o tamanho do que você enfrenta. O peso e a força foram criados pelo mesmo Designer.',
        reflection:
          'O que você está suportando que achava que não ia conseguir? Se Deus sabia que você ia aguentar — o que isso diz sobre a visão que Ele tem de você?',
        keyInsight:
          'Deus não cria criaturas para quebrá-las. O medo de "não aguentar" é real — mas a promessa é mais real.',
      },
      {
        day: 3,
        title: 'Se Deus Te Ajuda, Ninguém Te Vence',
        arabic: 'إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ',
        translation: 'Se Deus vos ajuda, não há quem possa vencer vocês.',
        ref: 'Al-Imran 3:160',
        content:
          'A primeira reação a esse versículo pode ser arrogância disfarçada de fé: "Deus está comigo, então sou invencível." Mas não é sobre isso.\n\nO versículo continua: "E se Ele vos abandona, quem poderia ajudá-los depois dEle?" A estrutura é condicional. SE Deus te ajuda. Não é um cheque em branco. É um convite à humildade radical — reconhecer que sem Ele, nada do que você construiu se sustenta. Que toda vitória, toda conquista, toda vez que você "deu conta" — teve uma mão invisível segurando.\n\nIsso não diminui você. Isso liberta você. Porque se a força real nunca foi sua sozinha, então quando você falha, a culpa também não é toda sua. E quando você enfrenta algo que parece impossível, não precisa encontrar a resposta dentro de si — pode encontrar em quem te sustenta. A diferença entre arrogância e confiança é saber de onde vem a força. Arrogância diz "eu consigo". Confiança diz "Ele me sustenta, e com isso eu consigo".',
        reflection:
          'Existe algo que você está tentando fazer sozinho, carregando como se dependesse só de você? O que mudaria se você reconhecesse que nunca foi só você?',
        keyInsight:
          'Não é sobre ser invencível. É sobre ser sustentado. A coragem real nasce quando você entende que a fonte da sua força não é você.',
      },
      {
        day: 4,
        title: 'A Ele Pertence o Que Vem e o Que Vai',
        arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
        translation: 'Certamente somos de Deus, e a Ele retornaremos.',
        ref: 'Al-Baqarah 2:156',
        content:
          'Essa frase é dita por muçulmanos diante da perda. Quando alguém morre, quando algo quebra, quando o mundo desmorona. Mas não é uma frase de resignação. É uma frase de libertação.\n\nPense assim: se tudo pertence a Deus — seu corpo, sua saúde, as pessoas que você ama, o trabalho que construiu, os anos que ainda tem — então quando algo "vai embora", não foi roubado de você. Voltou para o dono original. Você era guardião temporário. Isso não tira a dor. Perder ainda dói. Mas muda a narrativa. Muda de "o universo me tirou algo" para "estou devolvendo algo que nunca foi meu de verdade".\n\nE tem a segunda parte: "a Ele retornaremos." Ou seja — não só as coisas voltam para Deus. Você também volta. Tudo converge para o mesmo ponto. Nada está realmente perdido porque tudo retorna ao mesmo lugar. Inclusive você. Essa trilha começou com dificuldade e termina com entrega. Não entrega de derrota. Entrega de quem entendeu que nunca esteve no controle — e que isso, na verdade, é a maior paz possível.',
        reflection:
          'O que você está segurando com medo de perder? E se entendesse que segurar com tanta força é justamente o que tira a paz — porque nunca foi seu pra segurar?',
        keyInsight:
          'Essa trilha começou com medo e termina com entrega. O caminho entre os dois é perceber que quem controla tudo é Aquele que te ama.',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 3: JESUS NO ALCORÃO (4 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'jesus-no-quran',
    title: 'Jesus no Alcorão',
    arabicTitle: 'عيسى في القرآن',
    subtitle: '4 dias para descobrir Jesus pela perspectiva islâmica',
    description:
      'Se você é cristão ou cresceu em contexto cristão, Jesus é central para sua fé. Esta trilha mostra o que o Alcorão diz sobre Isa (Jesus) — com honestidade sobre os pontos de concordância e os de divergência.',
    duration: '4 dias',
    theme: 'Pontes & Entendimento',
    available: true,
    days: [
      {
        day: 1,
        title: 'Maria, a Escolhida',
        arabic: 'إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَىٰ نِسَاءِ الْعَالَمِينَ',
        translation: 'Deus te escolheu, te purificou, e te escolheu acima de todas as mulheres dos mundos.',
        ref: 'Al-Imran 3:42',
        content:
          'Maria é a ÚNICA mulher mencionada pelo nome no Alcorão. Não Fátima, não Khadija, não Aisha — mulheres centrais na história islâmica. Maria. E ela tem um capítulo inteiro com o seu nome: Surata Maryam. Nenhuma mulher na Bíblia tem um livro com seu nome.\n\nO versículo diz que Deus a escolheu — e usa a palavra "istafa", que implica seleção cuidadosa, intencional, entre todas as opções. E repete: escolheu, purificou, e escolheu de novo. "Acima de todas as mulheres dos mundos." Não do mundo — dos mundos. Plural. A honra que o Alcorão dá a Maria é absoluta.\n\nPara quem cresceu ouvindo que "o Islam não respeita mulheres" ou que "o Islam rejeita figuras cristãs" — essa é a primeira surpresa. O Islam não só respeita Maria, como a eleva a um lugar que nenhuma outra mulher ocupa. Antes de falar sobre Jesus, o Alcorão fala sobre a mãe dele. Porque a história de Jesus começa com uma mulher que disse sim a Deus quando tudo parecia impossível.',
        reflection:
          'O que você sabia sobre Maria no Islam antes de ler isso? Se a mãe de Jesus é honrada dessa forma no Alcorão, o que isso sugere sobre como o Islam vê o próprio Jesus?',
        keyInsight:
          'O Alcorão honra Maria acima de todas as mulheres de todos os mundos. A história de Jesus no Islam começa com reverência, não com rejeição.',
      },
      {
        day: 2,
        title: 'O Milagre do Berço',
        arabic: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
        translation: 'Ele disse: Eu sou servo de Deus. Ele me deu o Livro e me fez profeta.',
        ref: 'Maryam 19:30',
        content:
          'Imagine a cena. Maria volta para o seu povo carregando um bebê. Sozinha. Sem marido. As acusações começam. E quando tudo parece perdido, o bebê — Jesus, recém-nascido — abre a boca e fala. Ninguém espera. Ninguém acredita. E as primeiras palavras dele, diretamente do berço, são: "Eu sou servo de Deus."\n\nNão "eu sou Deus." Não "eu sou filho de Deus." Servo. Essa única frase captura toda a visão islâmica sobre Jesus. O Islam ama Jesus profundamente — considera-lo um dos cinco maiores profetas da história, nascido de milagre, capaz de curar e ressuscitar. Mas a linha que o Islam traça é clara: ele é servo, não divindade.\n\nPara um cristão, isso pode soar como diminuição. Mas no Islam, ser "abd Allah" — servo de Deus — é o título mais alto que um ser humano pode carregar. O próprio Muhammad é chamado assim. Não é rebaixamento. É a posição mais nobre que existe: um ser humano completamente alinhado com o propósito divino.',
        reflection:
          'Se as primeiras palavras de Jesus no Alcorão são "eu sou servo de Deus" — isso muda ou desafia algo que você acreditava? Sente-se confortável explorando essa perspectiva?',
        keyInsight:
          'As primeiras palavras de Jesus no Alcorão definem toda a visão islâmica: ele é amado, reverenciado, milagroso — e humano.',
      },
      {
        day: 3,
        title: 'Kalimatullah — A Palavra de Deus',
        arabic: 'إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ وَكَلِمَتُهُ',
        translation: 'O Messias, Jesus filho de Maria, é mensageiro de Deus e Sua Palavra.',
        ref: 'An-Nisa 4:171',
        content:
          '"Kalimatullah" — Palavra de Deus. "Ruh minhu" — Espírito vindo dEle. Esses são títulos que o Alcorão dá a Jesus. E são títulos que nenhum outro profeta tem. Nem Abraão. Nem Moisés. Nem Muhammad.\n\nO Alcorão chama Jesus de "al-Masih" — o Messias. Confirma seu nascimento virginal. Reconhece seus milagres: curar cegos, ressuscitar mortos, dar vida a pássaros de barro. E lhe dá títulos únicos que elevam seu status entre todos os profetas.\n\nEntão onde está a divergência? O mesmo versículo continua: "Não digam Trindade". Parem — é melhor para vocês. Deus é um Deus só." O Islam afirma tudo sobre Jesus exceto a divindade. E essa é uma diferença real, honesta, fundamental. Não existe como minimizá-la ou fingir que não existe. Mas é possível reconhecer que o Islam honra Jesus de uma forma profunda — apenas de uma forma diferente. "Palavra de Deus" não é um título pequeno. É um título que nenhum outro ser humano recebeu.',
        reflection:
          'O que é mais difícil para você: aceitar as semelhanças entre o que o Islam e o Cristianismo dizem sobre Jesus, ou aceitar as diferenças? O que essa dificuldade diz sobre o que você acredita?',
        keyInsight:
          '"Palavra de Deus" e "Espírito vindo dEle" — títulos que nenhum outro profeta tem. O Alcorão honra Jesus profundamente. Apenas de forma diferente.',
      },
      {
        day: 4,
        title: 'O Retorno',
        arabic: 'وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ',
        translation: 'E certamente ele é um sinal da Hora.',
        ref: 'Az-Zukhruf 43:61',
        content:
          'Cristãos esperam o retorno de Jesus. Muçulmanos esperam o retorno de Issa. É o mesmo Jesus. A mesma espera. O mesmo futuro.\n\nO Islam ensina que Jesus não morreu. Que foi elevado aos céus por Deus antes da crucificação — e que está vivo, esperando. Quando retornar, segundo a tradição islâmica, ele quebrará a cruz, estabelecerá justiça, e trará um período de paz sem precedentes na história humana. Um muçulmano que não acredita no retorno de Jesus não está seguindo o Islam completo.\n\nEssa é talvez a ponte mais poderosa entre as duas fés. Depois de todas as divergências teológicas — sobre a natureza de Jesus, sobre a crucificação, sobre a Trindade — existe um ponto no horizonte onde as duas tradições convergem: ele volta. O passado divide. O futuro une. E talvez seja justamente esse o ponto. Talvez a história de Jesus tenha sido desenhada para ser um lugar de encontro — não de separação. Um convite para que os que O amam, dos dois lados, olhem para frente juntos.',
        reflection:
          'Se cristãos e muçulmanos esperam o mesmo Jesus — o que vocês podem fazer juntos enquanto esperam? Essa crença compartilhada muda alguma coisa na forma como você vê muçulmanos?',
        keyInsight:
          'Jesus é o ponto de maior convergência entre Islam e Cristianismo. O passado divide. O futuro une. Ele volta — e nisso, as duas fés concordam.',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 4: OS PROFETAS (7 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'os-profetas',
    title: 'Os Profetas: Uma Família',
    arabicTitle: 'الأنبياء',
    subtitle: '7 dias pelos profetas que Bíblia e Alcorão compartilham',
    description:
      'Adão, Abraão, José, Moisés, Davi, Jesus, Muhammad — todos fazem parte de uma única cadeia de mensageiros enviados pelo mesmo Deus. Esta trilha percorre cada um em 7 dias.',
    duration: '7 dias',
    theme: 'História & Profecia',
    available: true,
    days: [
      {
        day: 1,
        title: 'Adão — O Começo',
        arabic: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا',
        translation: 'E Ele ensinou a Adão todos os nomes.',
        ref: 'Al-Baqarah 2:31',
        content:
          'Antes de qualquer profeta, antes de qualquer livro sagrado, antes de qualquer religião — existe Adão. O primeiro humano. O primeiro erro. E o primeiro perdão.\n\nA história de Adão no Alcorão tem uma diferença fundamental da versão bíblica. Quando Adão come do fruto proibido, o Alcorão não fala em "pecado original" que passa de geração em geração. Adão errou, se arrependeu, e Deus o perdoou. Ponto. O peso não foi herdado pelos filhos. Cada ser humano nasce limpo. Você não veio ao mundo devendo nada a Deus — veio como Adão veio: com potencial, com liberdade, e com a capacidade de errar e ser perdoado.\n\nMas antes do erro, tem um detalhe que muda tudo. Deus ensinou a Adão "todos os nomes" — o conhecimento de todas as coisas. E depois pediu aos anjos que se curvassem diante de Adão. Anjos. Seres de luz pura. Se curvando diante de um ser feito de barro. Porque o barro tinha algo que a luz não tinha: a capacidade de aprender, errar, e escolher voltar.',
        reflection:
          'Se você nasceu limpo — sem pecado herdado, sem dívida original — como isso muda a forma que você se relaciona com Deus? Você se aproxima como devedor ou como filho?',
        keyInsight:
          'No Alcorão, a história humana começa com ensino, dignidade e perdão. Não com condenação. Esse é o tom que define tudo que vem depois.',
      },
      {
        day: 2,
        title: 'Noé — O Paciente',
        arabic: 'فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا',
        translation: 'E ele permaneceu entre eles mil anos menos cinquenta.',
        ref: 'Al-Ankabut 29:14',
        content:
          'Novecentos e cinquenta anos. Quase mil anos chamando as pessoas para Deus. E quase ninguém ouviu.\n\nNoé no Alcorão é a encarnação da paciência levada ao extremo absoluto. O Alcorão descreve que ele chamava seu povo dia e noite, em público e em privado, com gentileza e com urgência — e eles colocavam os dedos nos ouvidos e cobriam a cabeça com as roupas para não ouvi-lo. Mil anos de rejeição. Gerações inteiras nasciam e morriam enquanto Noé continuava repetindo a mesma mensagem.\n\nO que sustenta alguém por 950 anos diante do fracasso aparente? Não é teimosia. É uma convicção tão profunda de que a mensagem é verdadeira que o resultado se torna secundário. Noé não pregou porque estava dando certo. Pregou porque a mensagem merecia ser dita — mesmo que ninguém ouvisse. E quando finalmente a enchente veio e a arca foi construída, os que embarcaram foram poucos. Até o próprio filho de Noé recusou. A lição mais brutal: fidelidade a Deus não garante que as pessoas que você ama vão te seguir.',
        reflection:
          'Existe algo na sua vida que você acredita profundamente mas que ninguém ao redor parece entender? Como é continuar quando o mundo diz não? O que sustenta você?',
        keyInsight:
          'Noé ensina que sucesso espiritual não se mede por números. Se mede por fidelidade. 950 anos de "não" não significaram que ele estava errado.',
      },
      {
        day: 3,
        title: 'Abraão — O Amigo de Deus',
        arabic: 'وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا',
        translation: 'E Deus tomou Abraão como amigo íntimo.',
        ref: 'An-Nisa 4:125',
        content:
          'Khalil. Em árabe, não é qualquer amigo. É o amigo que penetra o coração — intimidade total, sem barreira. De todos os profetas, de todos os seres humanos que já existiram, Abraão recebeu esse título. Amigo íntimo de Deus.\n\nMas a amizade de Abraão não veio de graça. Veio do teste mais radical possível. O Alcorão conta que Abraão destruiu os ídolos do seu povo sendo jovem — e foi jogado numa fogueira como punição. Deus ordenou ao fogo: "Seja frescor e paz para Abraão." O fogo obedeceu. Depois, veio o teste final: o sonho de sacrificar seu próprio filho. E Abraão obedeceu — não porque não amava o filho, mas porque amava a Deus mais.\n\nAbraão é o patriarca compartilhado por judeus, cristãos e muçulmanos. O pai de Ismael (ancestral dos árabes) e de Isaac (ancestral dos israelitas). Uma raiz só, duas árvores. Todo muçulmano que reza, reza pedindo bênçãos sobre Abraão e sua família. Cinco vezes por dia, o nome dele é mencionado. Ele não é figura do passado. É presença diária.',
        reflection:
          'Abraão deixou tudo — família, povo, conforto — por uma convicção que ninguém mais enxergava. Existe algo na sua vida que exige esse tipo de coragem? O que te impede?',
        keyInsight:
          'Abraão é o ponto onde judaísmo, cristianismo e Islam se encontram. Um homem que escolheu Deus acima de tudo — e por isso, Deus o chamou de amigo.',
      },
      {
        day: 4,
        title: 'Moisés — O Libertador',
        arabic: 'وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا',
        translation: 'E Deus falou com Moisés diretamente.',
        ref: 'An-Nisa 4:164',
        content:
          'Moisés é o profeta mais mencionado no Alcorão. Mais que Abraão. Mais que Jesus. Mais que Muhammad. Seu nome aparece mais de 130 vezes. Não é acidente. A história de Moisés é a história do poder confrontado pela verdade.\n\nO Alcorão detalha: Moisés tinha medo. Quando Deus o chamou diante da sarça ardente e disse "vá até o Faraó", Moisés respondeu com uma lista de inseguranças. "Eu tenho dificuldade de falar." "Tenho medo que me matem." "Manda outra pessoa." Deus ouviu cada objeção — e disse: "Eu estarei com vocês. Eu ouço e Eu vejo." Não removeu o medo. Deu companhia.\n\nMoisés confrontou o Faraó — o homem mais poderoso da Terra naquele momento — não porque era corajoso. Porque era acompanhado. Abriu o mar não porque tinha poder. Porque obedeceu quando Deus disse "bata com seu cajado." Todo o poder de Moisés era emprestado. E essa é a lição: Deus não procura gente sem medo. Procura gente que vai mesmo com medo.',
        reflection:
          'Existe algo que Deus pode estar te pedindo para confrontar — uma situação, uma verdade, uma conversa — que você está evitando por medo? Moisés também tinha medo. E foi assim mesmo.',
        keyInsight:
          'Moisés é o profeta mais citado no Alcorão. Tinha medo, gaguejava, e queria que outro fosse. Deus o escolheu assim mesmo — porque coragem não é ausência de medo.',
      },
      {
        day: 5,
        title: 'José — O Traído',
        arabic: 'إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',
        translation: 'Certamente, quem tem consciência de Deus e paciência — Deus não desperdiça a recompensa dos que fazem o bem.',
        ref: 'Yusuf 12:90',
        content:
          'A história de José (Yusuf) é a única no Alcorão contada do começo ao fim num capítulo só. Deus a chama de "a mais bela das histórias." E é uma história de traição, queda, e redenção.\n\nJosé era o filho favorito de Jacó. Seus irmãos, com ciúmes, jogaram ele num poço e disseram ao pai que um lobo o comeu. José foi vendido como escravo. No Egito, foi falsamente acusado de assédio pela esposa do seu patrão. Preso. Esquecido. Anos no fundo de uma masmorra por algo que não fez.\n\nE então tudo virou. José interpretou o sonho do rei, foi nomeado ministro, salvou o Egito da fome, e seus irmãos — os mesmos que tentaram matá-lo — vieram pedir comida sem saber que era ele. O momento da revelação é um dos mais poderosos do Alcorão. José se identifica. Os irmãos tremem. E José diz: "Não há culpa sobre vocês hoje. Que Deus os perdoe." Sem vingança. Sem ressentimento. Poder total nas mãos — e escolheu o perdão.\n\nJosé ensina que o plano de Deus funciona em décadas, não em dias. Que a traição de hoje pode ser o caminho do amanhã. E que o verdadeiro poder é perdoar quem te destruiu quando você finalmente tem a chance de retribuir.',
        reflection:
          'Existe alguém que te traiu e que você ainda carrega? Se a história de José mostra que até o poço era parte do plano — o que a sua dor pode estar construindo?',
        keyInsight:
          'José tinha todo o poder para se vingar dos irmãos que tentaram matá-lo. Escolheu perdoar. O Alcorão chama essa história de "a mais bela." Talvez porque perdão radical seja a coisa mais bonita que existe.',
      },
      {
        day: 6,
        title: 'Jesus — A Palavra',
        arabic: 'إِذْ قَالَ اللَّهُ يَا عِيسَىٰ إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ',
        translation: 'Quando Deus disse: Ó Jesus, Eu vou te tomar e te elevar até Mim.',
        ref: 'Al-Imran 3:55',
        content:
          'Jesus no Islam não é menos. É diferente. E a diferença é tão importante quanto as semelhanças.\n\nNascido de uma virgem por decreto direto de Deus. Falou no berço quando ainda era bebê. Curou cegos de nascença. Ressuscitou mortos. Deu vida a pássaros de barro. Recebeu títulos que nenhum outro profeta recebeu: "Palavra de Deus", "Espírito vindo dEle", "O Messias." O Alcorão dá a Jesus uma posição singular entre todos os profetas.\n\nA divergência central com o Cristianismo é sobre a natureza dele. O Islam diz: profeta, não Deus. Servo, não filho. Elevado, não crucificado. São diferenças reais que não devem ser suavizadas. Mas o que une é maior do que o que separa: o mesmo Jesus, amado dos dois lados, esperado dos dois lados, venerado dos dois lados.\n\nJesus no Alcorão é um profeta de compaixão radical, de milagres que desafiam a física, de palavras que cortam a hipocrisia. É alguém que o mundo islâmico ama — genuinamente ama. Se você é cristão lendo isso, saiba: nenhum muçulmano verdadeiro fala o nome de Jesus sem reverência.',
        reflection:
          'O que é mais fácil pra você: focar no que divide ou no que une? Se Jesus é amado pelas duas tradições — o que vocês podem construir juntos a partir desse amor compartilhado?',
        keyInsight:
          'Jesus é o profeta que mais une cristãos e muçulmanos. Amado de ambos os lados. A divergência é sobre natureza — não sobre importância.',
      },
      {
        day: 7,
        title: 'Muhammad — O Selo',
        arabic: 'قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ',
        translation: 'Diga: Eu sou apenas um ser humano como vocês, ao qual foi revelado.',
        ref: 'Al-Kahf 18:110',
        content:
          'A primeira coisa que Muhammad disse sobre si mesmo: "Eu sou um ser humano como vocês." Não um deus. Não um semideus. Não alguém com poderes sobrenaturais inerentes. Um homem. Que recebia revelação.\n\nMuhammad ficou órfão aos 6 anos. Perdeu a mãe depois de já ter perdido o pai. Trabalhou como pastor e depois como comerciante. Casou aos 25 com Khadija, uma mulher de negócios 15 anos mais velha que ele. Quando recebeu a primeira revelação aos 40, voltou tremendo para casa e disse a Khadija: "Cobri-me, cobri-me." Ele teve medo. O profeta do Islam teve medo quando Deus falou com ele.\n\nMuhammad perdeu filhos. Perdeu a esposa. Foi expulso da sua cidade. Teve lixo jogado nas costas enquanto rezava. Foi perseguido, boicotado, ameaçado de morte. Quando finalmente retornou a Meca com um exército, vitorioso depois de anos de sofrimento — perdoou todo mundo. "Vão. Vocês estão livres." O homem mais poderoso da Arábia, no momento de maior triunfo, escolheu misericórdia.\n\nMuhammad é chamado de "selo dos profetas" — o último mensageiro. Não porque é maior que os outros, mas porque a mensagem está completa. De Adão a Muhammad, uma linha. Um Deus. Uma mensagem: "Não há divindade além de Deus." Essa trilha percorreu 7 profetas em 7 dias. Todos disseram a mesma coisa. Todos foram rejeitados. Todos perseveraram. Todos eram humanos.',
        reflection:
          'Em 7 dias, você percorreu uma cadeia de profetas que vai de Adão a Muhammad. Se todos trouxeram a mesma mensagem — o que essa mensagem está dizendo pra você hoje?',
        keyInsight:
          'De Adão a Muhammad: uma linha, um Deus, uma mensagem. A cadeia está completa. E a mensagem é a mesma que começou no primeiro dia: existe um Deus só — e Ele é misericordioso.',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 5: O DESPERTAR (21 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'o-despertar',
    title: 'O Despertar',
    arabicTitle: 'الصحوة',
    subtitle: 'De questionador a buscador',
    description:
      '21 dias que mudam como você vê o mundo. Semana 1: fatos que surpreendem. Semana 2: histórias que inspiram. Semana 3: práticas que transformam.',
    duration: '21 dias',
    theme: 'Descoberta e Transformação',
    available: true,
    days: [
      // ── Semana 1: Fatos que Surpreendem ──
      {
        day: 1,
        title: 'Maria no Alcorão',
        arabic: 'إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَىٰ نِسَاءِ الْعَالَمِينَ',
        translation: 'Deus te escolheu, te purificou, e te escolheu acima de todas as mulheres dos mundos.',
        ref: 'Al-Imran 3:42',
        content:
          'Maria é a única mulher mencionada pelo nome no Alcorão inteiro. Não Fátima, filha do Profeta Muhammad. Não Khadija, sua esposa. Não Aisha. Maria. Mãe de Jesus. Ela tem um capítulo inteiro dedicado a ela — Surata Maryam — e é mencionada mais de trinta vezes. Nenhuma mulher na Bíblia tem um livro com seu nome.\n\nO versículo diz que Deus a escolheu "acima de todas as mulheres dos mundos." Não do mundo — dos mundos. Plural. A honra que o Alcorão dá a Maria é absoluta, sem ressalvas, sem condições. Para quem cresceu ouvindo que o Islam oprime mulheres ou rejeita figuras cristãs, essa é a primeira surpresa de muitas.\n\nA maioria dos brasileiros não sabe disso. E essa ignorância não é culpa de ninguém — é simplesmente o resultado de nunca ter aberto o livro. Nos próximos 21 dias, vamos abrir.',
        reflection:
          'Você sabia que Maria é a mulher mais honrada do Alcorão? O que mais você supõe sobre o Islam que talvez nunca tenha verificado?',
        keyInsight:
          'Maria é a única mulher nomeada no Alcorão e tem um capítulo inteiro. A história do Islam com o feminino começa com reverência.',
      },
      {
        day: 2,
        title: 'Jesus é Profeta',
        arabic: 'إِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ اذْكُرْ نِعْمَتِي عَلَيْكَ وَعَلَىٰ وَالِدَتِكَ',
        translation: 'Quando Deus disse: Ó Jesus, filho de Maria, lembra-te da Minha graça sobre ti e sobre tua mãe.',
        ref: 'Al-Ma\'idah 5:110',
        content:
          'Jesus é mencionado 25 vezes no Alcorão. É chamado de "Palavra de Deus", "Espírito vindo dEle", "O Messias". O nascimento virginal é confirmado. Os milagres são confirmados — curar cegos, ressuscitar mortos, dar vida a pássaros de barro. A maioria dos cristãos não sabe disso.\n\nO Alcorão dá a Jesus títulos que nenhum outro profeta recebeu. Nem Abraão. Nem Moisés. Nem Muhammad. Jesus ocupa um lugar singular na tradição islâmica — profundamente amado, profundamente reverenciado, esperado no final dos tempos. Um muçulmano que não acredita em Jesus não é muçulmano.\n\nA divergência com o Cristianismo é real: o Islam diz profeta, não Deus. Servo, não filho. Mas dentro dessa divergência existe uma reverência que a maioria das pessoas nunca imaginou. Jesus não é rejeitado no Islam. É abraçado — de uma forma diferente.',
        reflection:
          'Se Jesus é mencionado 25 vezes no Alcorão e chamado de "Palavra de Deus" — isso muda algo na forma como você via o Islam? O que mais pode estar diferente do que você imaginava?',
        keyInsight:
          'Jesus é mencionado 25 vezes no Alcorão com títulos únicos entre todos os profetas. O Islam não rejeita Jesus — o abraça.',
      },
      {
        day: 3,
        title: 'O Livro Memorizado',
        arabic: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',
        translation: 'E certamente facilitamos o Alcorão para a lembrança. Há então quem se lembre?',
        ref: 'Al-Qamar 54:17',
        content:
          'Mais de dez milhões de pessoas vivas hoje têm o Alcorão inteiro memorizado. Palavra por palavra. Ponto por ponto. 6.236 versículos. 77.000 palavras em árabe. De cor. Essas pessoas são chamadas de "hafiz" — guardiões do livro.\n\nNenhum outro livro na história da humanidade foi memorizado dessa forma. Não a Bíblia. Não a Torá. Não o Bhagavad Gita. Nenhum. E não são apenas estudiosos ou monges — são crianças de 7 anos na Indonésia, taxistas no Cairo, engenheiros em Londres, avós no Senegal. Pessoas comuns que dedicaram anos para guardar cada sílaba.\n\nO versículo de hoje diz que Deus "facilitou" o Alcorão para ser lembrado. E a evidência está nos números: 1.400 anos depois, o texto é exatamente o mesmo. Letra por letra. Sem revisões, sem edições, sem concílios decidindo o que entra e o que sai. O livro sobreviveu intacto — não em bibliotecas, mas no peito de milhões de seres humanos.',
        reflection:
          'O que leva milhões de pessoas a dedicar anos para memorizar um único livro? O que esse livro teria que ter dentro dele para inspirar isso?',
        keyInsight:
          'Mais de 10 milhões de pessoas têm o Alcorão inteiro memorizado. Nenhum outro livro na história alcançou isso.',
      },
      {
        day: 4,
        title: 'Álgebra, Café e Cirurgia',
        arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        translation: 'Lê! Em nome do teu Senhor que criou.',
        ref: 'Al-Alaq 96:1',
        content:
          'A primeira palavra revelada do Alcorão não foi "reze". Não foi "obedeça". Foi "leia". Iqra. Lê. E a civilização que nasceu dessa palavra mudou o mundo de formas que a maioria das pessoas no Ocidente nunca aprendeu.\n\nAl-Khwarizmi inventou a álgebra — a própria palavra "álgebra" vem do árabe "al-jabr". Al-Zahrawi escreveu uma enciclopédia de cirurgia com mais de 200 instrumentos cirúrgicos, muitos ainda usados hoje. Ibn al-Haytham fundou a óptica moderna. O café foi descoberto na Etiópia e desenvolvido no Iêmen por monges sufis que queriam ficar acordados para rezar. Hospitais, universidades, sistemas de irrigação — tudo floresceu durante a Era de Ouro Islâmica, entre os séculos VIII e XIV.\n\nEnquanto a Europa vivia na Idade Média, o mundo islâmico preservava e expandia o conhecimento grego, persa e indiano. A civilização ocidental moderna deve mais ao Islam do que qualquer livro de história brasileiro ensina.',
        reflection:
          'Quantas dessas contribuições você já conhecia? Se a primeira palavra do Alcorão é "Leia" — o que isso diz sobre a relação entre Islam e conhecimento?',
        keyInsight:
          'A primeira palavra revelada do Alcorão foi "Lê". A civilização que nasceu disso inventou a álgebra, a cirurgia moderna e desenvolveu o café.',
      },
      {
        day: 5,
        title: 'Abraão Construiu a Kaaba',
        arabic: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ',
        translation: 'E quando Abraão erguia os alicerces da Casa, junto com Ismael.',
        ref: 'Al-Baqarah 2:127',
        content:
          'Aquele cubo negro em Meca que aparece em toda imagem sobre o Islam — a Kaaba — não foi construído por Muhammad. Foi construído por Abraão. O mesmo Abraão da Bíblia. O mesmo patriarca que judeus e cristãos reverenciam. Ele e seu filho Ismael ergueram juntos os alicerces daquela Casa como um lugar de adoração ao Deus único.\n\nIsso significa que a Kaaba é mais antiga que o Islam como religião organizada. É mais antiga que o Cristianismo. É mais antiga que o judaísmo rabínico. É um ponto de conexão que precede todas as divisões. Abraão não era judeu, não era cristão, não era muçulmano — era, como o Alcorão diz, um "hanif", alguém que se volta para Deus com sinceridade.\n\nAs três grandes religiões monoteístas concordam num ponto fundamental: Abraão importa. Ele é a raiz comum. E a Kaaba, para o Islam, é a evidência física dessa raiz — um edifício construído pelo pai de todos antes que qualquer rótulo existisse.',
        reflection:
          'Se Abraão é reverenciado por judeus, cristãos e muçulmanos — e construiu a Kaaba — o que isso diz sobre a relação real entre essas três fés?',
        keyInsight:
          'A Kaaba foi construída por Abraão e Ismael. O lugar mais sagrado do Islam foi erguido pelo patriarca que une as três fés.',
      },
      {
        day: 6,
        title: 'Um Livro em 23 Anos',
        arabic: 'وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ',
        translation: 'E um Alcorão que dividimos para que o recitasses ao povo gradualmente.',
        ref: 'Al-Isra 17:106',
        content:
          'O Alcorão não caiu do céu pronto. Não foi escrito num retiro de inspiração. Foi revelado ao longo de 23 anos — versículo por versículo, situação por situação, pergunta por pergunta. Cada trecho tem um contexto, uma razão, uma história por trás.\n\nQuando muçulmanos eram perseguidos em Meca, vieram versículos de paciência e resistência. Quando precisaram de leis para organizar uma sociedade em Medina, vieram versículos de legislação. Quando o Profeta enfrentou traição, veio orientação. Quando enfrentou vitória, veio advertência contra a arrogância. O livro responde à vida em tempo real.\n\nIsso muda completamente como se lê. Tirar um versículo do contexto de 1.400 anos e jogá-lo numa manchete de jornal é como ler uma mensagem de texto de alguém sem saber a conversa inteira. O Alcorão não é um manifesto estático. É um diálogo vivo entre Deus e a humanidade que durou mais de duas décadas.',
        reflection:
          'Quando você lê algo fora de contexto, o significado muda. Que outros livros ou ideias você julgou sem conhecer a história completa por trás?',
        keyInsight:
          'O Alcorão foi revelado ao longo de 23 anos, cada versículo respondendo a uma situação real. Contexto muda tudo.',
      },
      {
        day: 7,
        title: '1.8 Bilhão de Pessoas',
        arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
        translation: 'Ó humanidade, Nós vos criamos de um homem e uma mulher e vos fizemos em povos e tribos para que se conheçam.',
        ref: 'Al-Hujurat 49:13',
        content:
          'O Islam é a religião que mais cresce no mundo. 1.8 bilhão de pessoas. Um em cada quatro seres humanos. E o país com mais muçulmanos — a Indonésia — nunca foi invadido por um exército islâmico. O Islam chegou lá por comerciantes, por exemplo, por convivência.\n\nIsso contradiz a narrativa dominante de que o Islam se espalhou pela espada. Algumas conquistas militares aconteceram — como em qualquer civilização — mas a maioria dos muçulmanos hoje vive em países onde o Islam chegou pelo comércio, pela migração, pelo convívio. A África subsaariana, o sudeste asiático, partes da China — todos receberam o Islam sem exércitos.\n\nO versículo de hoje diz que Deus criou a humanidade diversa "para que se conheçam". Não para que se temam. Não para que se isolem. Para que se conheçam. Se você chegou até o dia 7 desta trilha, já está fazendo exatamente o que esse versículo pede — conhecendo algo que antes era desconhecido. A primeira semana termina aqui. Sete fatos. Sete surpresas. Na próxima semana, vamos das informações para as histórias.',
        reflection:
          'Dos sete fatos desta semana, qual mais te surpreendeu? O que isso revela sobre o que você achava que sabia — e o que ainda não sabia?',
        keyInsight:
          'O Islam é a religião que mais cresce no mundo, e a maioria se espalhou sem exércitos. O Alcorão diz que a diversidade existe para que nos conheçamos.',
      },
      // ── Semana 2: Histórias que Inspiram ──
      {
        day: 8,
        title: 'Adão — O Primeiro Erro, O Primeiro Perdão',
        arabic: 'فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ',
        translation: 'Então Adão recebeu de seu Senhor palavras, e Ele o perdoou.',
        ref: 'Al-Baqarah 2:37',
        content:
          'A história da humanidade começa com um erro. Adão comeu do fruto proibido. Desobedeceu. Caiu. Mas o que acontece depois é onde o Alcorão se separa de outras narrativas: não existe pecado original. Adão errou, se arrependeu, e Deus o perdoou. Ponto. Nenhuma dívida herdada. Nenhuma mancha passada de pai para filho.\n\nMas antes do erro, tem um detalhe que muda tudo. Deus ensinou a Adão "todos os nomes" — o conhecimento das coisas. E depois ordenou aos anjos que se curvassem diante dele. Anjos. Seres de luz pura. Se inclinando diante de uma criatura feita de barro. Porque o barro tinha algo que a luz não tinha: a capacidade de aprender, errar, e escolher voltar.\n\nAdão é a prova de que errar não define quem você é. Voltar é que define. A história humana no Alcorão não começa com condenação — começa com dignidade, queda, e restauração.',
        reflection:
          'Se a história humana começa com um erro perdoado — o que isso muda sobre como você vê seus próprios erros? Você é definido pela queda ou pela volta?',
        keyInsight:
          'No Alcorão, não existe pecado original. Adão errou, voltou, e foi perdoado. A história humana começa com restauração, não com condenação.',
      },
      {
        day: 9,
        title: 'Noé — 950 Anos de Paciência',
        arabic: 'فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا',
        translation: 'E ele permaneceu entre eles mil anos menos cinquenta.',
        ref: 'Al-Ankabut 29:14',
        content:
          'Novecentos e cinquenta anos. Quase mil anos chamando as pessoas para Deus. E quase ninguém ouviu. O Alcorão descreve que Noé chamava seu povo dia e noite, em público e em privado, com gentileza e com urgência — e eles colocavam os dedos nos ouvidos e cobriam a cabeça com as roupas para não ouvi-lo.\n\nGerações inteiras nasciam e morriam enquanto Noé continuava. O que sustenta alguém assim? Não é teimosia. É convicção. Uma certeza tão profunda de que a mensagem é verdadeira que o resultado se torna secundário. Noé não pregou porque estava funcionando. Pregou porque a mensagem merecia ser dita.\n\nQuando a enchente veio, os que embarcaram foram poucos. Até o próprio filho de Noé recusou. A lição mais brutal da história de Noé: fidelidade a Deus não garante que as pessoas que você ama vão te seguir. Às vezes você faz a coisa certa sozinho.',
        reflection:
          'Existe algo na sua vida que você acredita profundamente mas que ninguém ao redor parece entender? O que te sustenta quando o mundo diz não?',
        keyInsight:
          'Noé ensina que sucesso não se mede por números. Se mede por fidelidade. 950 anos de rejeição não significaram que ele estava errado.',
      },
      {
        day: 10,
        title: 'Abraão — O Homem que Questionou Tudo',
        arabic: 'وَكَذَٰلِكَ نُرِي إِبْرَاهِيمَ مَلَكُوتَ السَّمَاوَاتِ وَالْأَرْضِ وَلِيَكُونَ مِنَ الْمُوقِنِينَ',
        translation: 'E assim mostramos a Abraão o reino dos céus e da terra, para que fosse dos que têm certeza.',
        ref: 'Al-An\'am 6:75',
        content:
          'Abraão não herdou a fé. Conquistou. O Alcorão conta que ele olhou para uma estrela e disse "este é meu Senhor". A estrela se pôs. Olhou para a lua — "este é meu Senhor." A lua desapareceu. Olhou para o sol — "este é meu Senhor, é o maior." O sol também se pôs. E então Abraão concluiu: nada que desaparece merece ser adorado. Deus é o que permanece.\n\nAbraão não aceitou respostas prontas. Questionou o pai. Questionou o povo. Destruiu os ídolos da sua cidade com as próprias mãos e foi jogado numa fogueira como punição. Deus ordenou ao fogo: "Seja frescor e paz para Abraão." O fogo obedeceu.\n\nDepois veio o teste mais radical: o sonho de sacrificar seu próprio filho. E Abraão obedeceu — não porque não amava o filho, mas porque confiava em Deus mais do que confiava no próprio entendimento. Abraão é a prova de que fé verdadeira nasce da dúvida honesta, não da obediência cega.',
        reflection:
          'Abraão chegou a Deus questionando tudo. Você tem permissão para questionar também. Qual pergunta sobre Deus você tem medo de fazer?',
        keyInsight:
          'Abraão não herdou a fé — conquistou pela dúvida honesta. O Islam não pede obediência cega. Pede busca sincera.',
      },
      {
        day: 11,
        title: 'José — Vendido. Preso. Governador.',
        arabic: 'إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',
        translation: 'Quem tem consciência de Deus e paciência — Deus não desperdiça a recompensa dos que fazem o bem.',
        ref: 'Yusuf 12:90',
        content:
          'A história de José é a única no Alcorão contada do começo ao fim num só capítulo. Deus a chama de "a mais bela das histórias." E é uma história de cinema: o filho favorito de Jacó, traído pelos próprios irmãos, jogado num poço, vendido como escravo, falsamente acusado de assédio, preso por anos.\n\nE então tudo virou. José interpretou o sonho do rei do Egito, foi nomeado ministro, salvou o país da fome. Seus irmãos — os mesmos que tentaram matá-lo — vieram pedir comida sem saber que era ele. O momento da revelação é um dos mais poderosos do Alcorão. José se identifica. Os irmãos tremem. E José diz: "Não há culpa sobre vocês hoje."\n\nSem vingança. Sem ressentimento. Com todo o poder do Egito nas mãos, escolheu o perdão. José ensina que o plano de Deus opera em décadas, não em dias. Que a traição de hoje pode ser o caminho do amanhã. E que o verdadeiro poder é perdoar quem te destruiu.',
        reflection:
          'Existe alguém que te traiu e que você ainda carrega? Se até o poço fazia parte do plano — o que a sua dor pode estar construindo?',
        keyInsight:
          'José tinha poder para se vingar e escolheu perdoar. O Alcorão chama essa história de "a mais bela" — talvez porque perdão radical seja a coisa mais bonita que existe.',
      },
      {
        day: 12,
        title: 'Moisés — O Gago que Enfrentou o Faraó',
        arabic: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي',
        translation: 'Disse: Meu Senhor, abre meu peito, facilita minha missão, e desata o nó da minha língua.',
        ref: 'Ta-Ha 20:25-27',
        content:
          'Moisés é o profeta mais mencionado no Alcorão — mais de 130 vezes. Mais que Abraão, mais que Jesus, mais que Muhammad. E a primeira coisa que ele fez quando Deus o chamou foi listar suas fraquezas: "Tenho dificuldade de falar. Tenho medo que me matem. Manda outra pessoa."\n\nDeus não removeu o medo. Não curou a fala. Disse: "Eu estarei com vocês. Eu ouço e Eu vejo." E mandou Moisés ir assim mesmo — gago, inseguro, com medo — confrontar o homem mais poderoso da Terra. Moisés não confrontou o Faraó porque era corajoso. Confrontou porque era acompanhado.\n\nAbriu o mar não porque tinha poder próprio. Porque obedeceu quando Deus disse "bata com seu cajado." Todo o poder de Moisés era emprestado. E essa é a lição: Deus não procura gente sem medo. Procura gente que vai mesmo com medo. A coragem não é a ausência do tremor — é caminhar tremendo.',
        reflection:
          'Qual é a sua "gagueira" — a limitação que você acha que te desqualifica? E se Deus não estiver esperando que ela desapareça para te usar?',
        keyInsight:
          'Moisés tinha medo, gaguejava, e pediu que outro fosse. Deus o escolheu assim mesmo. Coragem não é ausência de medo — é presença de propósito.',
      },
      {
        day: 13,
        title: 'Jesus — A Palavra de Deus no Berço',
        arabic: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
        translation: 'Ele disse: Eu sou servo de Deus. Ele me deu o Livro e me fez profeta.',
        ref: 'Maryam 19:30',
        content:
          'Maria volta para o seu povo carregando um bebê. Sozinha. Sem marido. As acusações começam. E quando tudo parece perdido, o bebê — Jesus, recém-nascido — abre a boca e fala. Do berço. As primeiras palavras dele: "Eu sou servo de Deus. Ele me deu o Livro e me fez profeta."\n\nO Islam ama Jesus. Profundamente. Chama-o de "Palavra de Deus", "Espírito vindo dEle", "O Messias". Confirma o nascimento virginal. Confirma os milagres — curar cegos, ressuscitar mortos. Dá-lhe títulos que nenhum outro profeta recebeu. E espera seu retorno no final dos tempos.\n\nA divergência com o Cristianismo é sobre natureza, não sobre importância. Para o Islam, Jesus é o profeta mais milagroso — mas profeta. Servo, não divindade. E no Islam, ser "servo de Deus" é o título mais alto que existe. Não é diminuição. É a posição mais nobre: um ser humano completamente alinhado com o propósito divino.',
        reflection:
          'O que te surpreende mais: as semelhanças entre o Jesus do Alcorão e o Jesus da Bíblia, ou as diferenças? O que você sente ao explorar essa perspectiva?',
        keyInsight:
          'Jesus no Alcorão falou do berço, curou cegos, ressuscitou mortos. É chamado de Palavra de Deus. O Islam o ama — de forma diferente.',
      },
      {
        day: 14,
        title: 'Muhammad — Órfão. Analfabeto. Profeta.',
        arabic: 'قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ',
        translation: 'Diga: Eu sou apenas um ser humano como vocês, ao qual foi revelado.',
        ref: 'Al-Kahf 18:110',
        content:
          'Muhammad ficou órfão aos 6 anos. Não sabia ler nem escrever. Trabalhou como pastor e depois como comerciante. Casou aos 25 com Khadija, uma mulher de negócios 15 anos mais velha. Quando recebeu a primeira revelação aos 40, voltou tremendo para casa: "Cobri-me, cobri-me." O profeta do Islam teve medo quando Deus falou com ele.\n\nPerdeu filhos. Perdeu a esposa. Foi expulso da sua cidade. Teve lixo jogado nas costas enquanto rezava. Foi perseguido, boicotado, ameaçado de morte. E quando retornou a Meca com um exército — vitorioso depois de anos de sofrimento — perdoou todo mundo. "Vão. Vocês estão livres." O homem mais poderoso da Arábia, no momento de maior triunfo, escolheu misericórdia.\n\nA segunda semana termina aqui. Sete profetas. Sete histórias. De Adão a Muhammad, uma cadeia ininterrupta. Um Deus. Uma mensagem. Seres humanos imperfeitos que disseram sim. Na próxima semana, vamos das histórias para a prática.',
        reflection:
          'De todos os sete profetas desta semana, qual história mais te tocou? O que ela diz sobre a sua própria jornada?',
        keyInsight:
          'De Adão a Muhammad: uma cadeia de seres humanos imperfeitos que disseram sim a Deus. A mensagem é a mesma. Os mensageiros são humanos como nós.',
      },
      // ── Semana 3: Práticas que Transformam ──
      {
        day: 15,
        title: 'Acordar Antes do Sol',
        arabic: 'أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ وَقُرْآنَ الْفَجْرِ',
        translation: 'Estabeleça a oração desde o declínio do sol até a escuridão da noite, e a recitação do amanhecer.',
        ref: 'Al-Isra 17:78',
        content:
          'Fajr. A oração do amanhecer. Antes do sol nascer, enquanto o mundo ainda dorme, milhões de pessoas se levantam em silêncio, lavam o rosto, e se voltam para Deus. Não porque alguém está olhando. Não porque vão postar no Instagram. Porque algo dentro delas acorda antes do corpo.\n\nEsse é talvez o hábito mais poderoso do Islam — e o menos compreendido por quem está de fora. Acordar antes do sol não é masoquismo religioso. É engenharia de presença. São cinco minutos de silêncio absoluto antes que o caos do dia comece. Antes das notificações. Antes das urgências. Antes do mundo dizer o que você precisa fazer.\n\nEstudos modernos confirmam o que muçulmanos praticam há 14 séculos: as primeiras horas da manhã são as mais lúcidas, as mais criativas, as mais conectadas. O Fajr não é um sacrifício. É uma vantagem. Quem domina a manhã, domina o dia.',
        reflection:
          'Se você tivesse 5 minutos de silêncio absoluto antes do mundo acordar — todo dia — o que isso faria com o resto do seu dia?',
        keyInsight:
          'Fajr é a oração do amanhecer. Cinco minutos antes do sol. Muçulmanos praticam isso há 1.400 anos. O mundo moderno chama de "morning routine".',
      },
      {
        day: 16,
        title: 'O Jejum de 1.400 Anos',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
        translation: 'Ó vós que credes, o jejum foi prescrito para vós assim como foi prescrito para os que vieram antes de vós, para que tenhais consciência.',
        ref: 'Al-Baqarah 2:183',
        content:
          'Intermittent fasting virou tendência em 2015. O Islam pratica desde 622. Todo ano, durante o mês de Ramadã, mais de um bilhão de pessoas jejuam do amanhecer ao pôr do sol — sem comida, sem água, sem nada. Por 29 ou 30 dias.\n\nMas o jejum islâmico não é sobre dieta. O versículo não diz "para que emagreçam" — diz "para que tenham consciência." Taqwa. Consciência de Deus, consciência de si, consciência de quem tem fome todo dia e não por escolha. O jejum é um reset. Quando você tira o combustível mais básico do corpo, descobre o que te sustenta de verdade.\n\nOs benefícios físicos são reais: autofagia celular, regulação de insulina, clareza mental. A ciência moderna está descobrindo o que o Alcorão prescreveu há mais de um milênio. Mas o benefício mais profundo não é físico. É perceber que você é mais forte do que achava. Que o corpo não manda em você. Que a fome passa — mas a disciplina fica.',
        reflection:
          'Você já tentou ficar um dia inteiro sem comer? O que aconteceu com sua mente, não com seu corpo? O que você descobriu sobre si mesmo quando tirou o combustível?',
        keyInsight:
          'O Islam pratica jejum intermitente há 1.400 anos. Não como dieta — como reset. A ciência moderna está apenas confirmando o que o Alcorão já sabia.',
      },
      {
        day: 17,
        title: '2.5% de Tudo',
        arabic: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ',
        translation: 'E estabeleçam a oração e deem o zakat.',
        ref: 'Al-Baqarah 2:43',
        content:
          'Zakat não é caridade. Caridade é opcional. Zakat é obrigatório. Todo muçulmano que possui acima de um valor mínimo deve, uma vez por ano, dar 2.5% de tudo o que tem. Não do que ganha — do que possui. É redistribuição de riqueza embutida no sistema operacional da fé.\n\nA palavra "zakat" vem da raiz árabe que significa "purificação". No Islam, a riqueza que você acumula sem compartilhar não é limpa. É contaminada. Dar não é perder — é purificar. É reconhecer que tudo o que você tem veio de Deus e que uma parte sempre pertenceu a quem precisa.\n\nSe todos os muçulmanos do mundo pagassem o zakat corretamente, estima-se que seria suficiente para erradicar a pobreza extrema global. Não é exagero — é matemática. 2.5% de 1.8 bilhão de pessoas. O Islam não espera que governos resolvam a desigualdade. Coloca a responsabilidade em cada indivíduo, todo ano, sem exceção.',
        reflection:
          'Se você desse 2.5% de tudo que possui — não do que ganha, mas de tudo que tem — quanto seria? E como mudaria a forma como você vê o que "seu" dinheiro realmente é?',
        keyInsight:
          'Zakat não é doação. É purificação. 2.5% de tudo, todo ano, para quem precisa. Redistribuição obrigatória embutida na fé.',
      },
      {
        day: 18,
        title: '5 Pausas por Dia',
        arabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا',
        translation: 'Certamente a oração foi prescrita aos crentes em horários determinados.',
        ref: 'An-Nisa 4:103',
        content:
          'Cinco vezes por dia, o muçulmano para. Não importa o que esteja fazendo — reunião, trabalho, viagem, guerra. Para. Se volta para Meca. E reza. Fajr antes do sol. Dhuhr ao meio-dia. Asr à tarde. Maghrib no pôr do sol. Isha à noite.\n\nNenhum app de meditação, nenhuma técnica de mindfulness, nenhum retiro de yoga consegue o que a salah faz: cinco resets completos distribuídos ao longo do dia. Cada oração dura entre 5 e 10 minutos. É uma pausa forçada — um momento em que o mundo para e sobra apenas você e Deus.\n\nA posição física da oração diz tudo. De pé: dignidade. Curvado: humildade. Com a testa no chão: entrega total. A sujud — a prostração — é o momento em que o ser humano está mais próximo de Deus, segundo o Profeta. Não de pé, no auge do orgulho. Com o rosto no chão, no auge da entrega. O Islam diz que paz não vem de controlar o mundo. Vem de parar cinco vezes por dia e lembrar quem realmente controla.',
        reflection:
          'Se você parasse 5 vezes por dia — mesmo que por 3 minutos — para silenciar e se reconectar, o que isso faria com sua ansiedade? Com sua clareza? Com sua relação consigo mesmo?',
        keyInsight:
          'Cinco orações por dia. Cinco resets. Nenhum app de meditação replica o que 1.8 bilhão de pessoas praticam há 14 séculos.',
      },
      {
        day: 19,
        title: 'A Arte de Não Reclamar',
        arabic: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ',
        translation: 'E certamente vos testaremos com algo de medo, fome, perda de bens, vidas e frutos. E dê boas novas aos pacientes.',
        ref: 'Al-Baqarah 2:155',
        content:
          'Sabr. Traduzido como "paciência", mas é muito mais que isso. Sabr é a capacidade de manter a compostura quando tudo desmorona. Não é passividade — é força ativa. É escolher não reagir com desespero quando o desespero seria justificável.\n\nO versículo não diz "talvez vocês sejam testados." Diz "certamente." Com medo, com fome, com perda. O teste é garantido. O que não é garantido é como você responde. E o Alcorão diz que os pacientes recebem "boas novas" — basharah — que é a mesma palavra usada para anunciar bênçãos e paraíso.\n\nSabr não é engolir o choro. É chorar e continuar. Não é fingir que não dói. É sentir a dor e não deixar ela governar. O mundo moderno diz: "manifeste", "atraia", "positivity only". O Islam diz: a dor vai vir. É parte do design. A pergunta não é se — é como você carrega. Os que carregam com sabr recebem algo que nenhum atalho oferece: a forja que transforma barro em aço.',
        reflection:
          'Qual é a diferença entre paciência e passividade na sua vida? Existe uma dor que você está carregando que precisa de sabr — não de solução, mas de presença firme?',
        keyInsight:
          'Sabr não é passividade. É força ativa diante da dor certa. O Alcorão garante o teste — e promete recompensa a quem aguenta com dignidade.',
      },
      {
        day: 20,
        title: 'Agradecer o Óbvio',
        arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        translation: 'Se agradecerdes, certamente vos aumentarei.',
        ref: 'Ibrahim 14:7',
        content:
          'Shukr. Gratidão. Não a gratidão de post no Instagram — "blessed" — mas a gratidão radical de perceber o que você esquece que tem. Respirar sem pensar. Enxergar as cores. Ter água limpa. Ter alguém que se importa com você. O óbvio.\n\nO versículo é uma equação: gratidão gera aumento. Não é pensamento positivo. É mecânica espiritual. Quem reconhece o que tem recebe mais. Quem reclama do que falta permanece na falta. Não porque Deus está punindo — mas porque a reclamação cega. Quando você foca no que não tem, não consegue enxergar o que já está na sua mão.\n\nO Profeta Muhammad dizia: "Olhe para quem tem menos que você, não para quem tem mais. Assim não desprezará as bênçãos de Deus sobre você." Numa era de redes sociais em que todos olham para cima — para quem tem mais seguidores, mais dinheiro, mais viagens — esse ensinamento de 1.400 anos é mais urgente do que nunca. Shukr é o antídoto para a comparação. E a comparação é o veneno do nosso tempo.',
        reflection:
          'Nomeie três coisas que você tem agora e que esquece de agradecer. Quando foi a última vez que você parou para perceber o que já funciona na sua vida?',
        keyInsight:
          'Shukr é gratidão pelo óbvio. O Alcorão promete: quem agradece, recebe mais. Na era da comparação, gratidão é o ato mais revolucionário.',
      },
      {
        day: 21,
        title: 'O Dia da Decisão',
        arabic: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
        translation: 'Deus não muda a condição de um povo até que eles mudem o que está dentro de si mesmos.',
        ref: 'Ar-Ra\'d 13:11',
        content:
          'Vinte e um dias. Três semanas. Sete fatos que surpreendem. Sete histórias que inspiram. Sete práticas que transformam. E agora, uma pergunta: algo mudou?\n\nO versículo de hoje é talvez o mais poderoso do Alcorão sobre responsabilidade pessoal. Deus não muda a condição de ninguém até que a pessoa mude o que está dentro de si. Não é Deus que precisa agir primeiro. É você. A mudança começa de dentro para fora. Começa com uma decisão — não com uma circunstância.\n\nNos últimos 21 dias, você viu que o Islam não é o que a mídia mostra. Viu que Maria é a mulher mais honrada. Que Jesus é profundamente amado. Que a primeira palavra revelada foi "Leia". Que profetas eram seres humanos imperfeitos. Que práticas de 1.400 anos antecipam o que a ciência moderna descobre hoje. A trilha termina aqui. A jornada, não. A pergunta que fica é simples: nos últimos 21 dias, algo mudou em como você vê o mundo? E se mudou — o que você vai fazer com isso?',
        reflection:
          'Dos 21 dias, qual foi o momento que mais te marcou? O que você descobriu sobre o Islam — e sobre si mesmo? E a pergunta final: algo mudou?',
        keyInsight:
          'Deus não muda quem não quer mudar. A trilha termina. A decisão é sua. Nos últimos 21 dias, algo mudou em como você vê o mundo?',
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRAIL 6: O SISTEMA (35 dias)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: 'o-sistema',
    title: 'O Sistema',
    arabicTitle: 'النظام',
    subtitle: 'Os 5 pilares como sistema operacional',
    description:
      'Os 5 pilares do Islam não são rituais religiosos — são um sistema operacional para a vida humana. 35 dias, um pilar por semana.',
    duration: '35 dias',
    theme: 'Pilares e Prática',
    available: true,
    days: [
      // ── Semana 1: Shahada — O Boot ──
      {
        day: 1,
        title: 'La ilaha illa Allah',
        arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
        translation: 'Não há divindade além de Deus.',
        ref: 'Muhammad 47:19',
        content:
          'Tudo começa aqui. Uma frase. Seis palavras em árabe. "La ilaha illa Allah." Não há divindade além de Deus. É a declaração mais simples e mais radical que existe. Antes de qualquer oração, antes de qualquer jejum, antes de qualquer caridade — essa frase. É o boot do sistema.\n\nO que essa frase faz não é apenas teológico. É existencial. "La ilaha" — não há divindade — é uma negação de tudo o que você colocou no lugar de Deus. Dinheiro, status, aprovação, segurança, outra pessoa, você mesmo. Tudo isso é "ilah" — algo que você serve, que governa suas decisões, que determina seu humor. A primeira parte da shahada desmonta tudo isso.\n\n"Illa Allah" — exceto Deus. Depois de esvaziar, preenche. Com o único que merece o lugar central. Não porque Deus precisa da sua adoração — mas porque você precisa de um centro que não mude, não falhe, não desapareça. A shahada não é uma frase que você diz. É uma reorganização completa de prioridades.',
        reflection:
          'O que ocupa o centro da sua vida hoje? O que governa suas decisões, seus medos, suas esperanças? Se não é Deus — o que é? E como está funcionando?',
        keyInsight:
          'A shahada é a primeira linha de código do Islam. Antes de qualquer prática, uma declaração: nada merece o lugar central exceto Deus.',
      },
      {
        day: 2,
        title: 'Muhammad Rasulullah',
        arabic: 'مُّحَمَّدٌ رَّسُولُ اللَّهِ',
        translation: 'Muhammad é o Mensageiro de Deus.',
        ref: 'Al-Fath 48:29',
        content:
          'A segunda parte da shahada: "Muhammad Rasulullah." Muhammad é o mensageiro de Deus. Não é Deus. Não é filho de Deus. É o mensageiro — aquele que entrega a mensagem. Se a primeira parte é o kernel, a segunda é o source code: de onde vem a instrução.\n\nPor que Muhammad? Porque o Alcorão sozinho é o texto. Muhammad é a implementação. Ele viveu o que o Alcorão ensina. Como rezar — ele mostrou. Como jejuar — ele praticou. Como tratar a esposa, o vizinho, o inimigo, o animal — ele demonstrou. O Islam sem Muhammad seria um livro sem manual de uso.\n\nMas aceitar Muhammad como mensageiro não é adorá-lo. O Alcorão proíbe isso explicitamente. Muhammad insistiu que era humano. Comia, dormia, errava, pedia perdão. A diferença é que ele recebia revelação. A shahada completa diz: existe um Deus só, e a forma de acessar Sua instrução é através do que Muhammad trouxe. O sistema tem uma fonte. E a fonte tem um canal.',
        reflection:
          'Se Muhammad é o canal da mensagem — e não a mensagem em si — o que isso diz sobre como o Islam vê a relação entre mensageiro e mensagem? E como isso difere de outras tradições?',
        keyInsight:
          'Muhammad é o mensageiro, não a mensagem. Ele é a implementação viva do Alcorão — o manual de uso do sistema.',
      },
      {
        day: 3,
        title: 'Tawhid — A Unicidade',
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translation: 'Diga: Ele é Deus, o Único.',
        ref: 'Al-Ikhlas 112:1',
        content:
          'Tawhid. Unicidade. É o conceito mais fundamental do Islam — e o mais mal compreendido. Tawhid não é apenas "acreditar que Deus é um." É organizar toda a realidade em torno dessa unicidade. Um Deus. Uma verdade. Uma direção.\n\nSurata Al-Ikhlas tem quatro versículos e o Profeta disse que ela equivale a um terço do Alcorão. "Diga: Ele é Deus, o Único. Deus, o Absoluto. Não gerou e não foi gerado. E ninguém é comparável a Ele." Tudo que o Islam diz sobre Deus cabe nessas quatro linhas.\n\nPara o dia a dia, tawhid significa que nenhuma criatura, nenhum sistema, nenhum governo, nenhum chefe merece obediência absoluta. Só Deus. Isso liberta. Quando o único que você realmente serve é Deus, nenhum ser humano tem poder total sobre você. Nenhuma opinião te define. Nenhuma perda te destrói. Porque o centro não se moveu. Tawhid é o kernel que não crasheia.',
        reflection:
          'Se apenas Deus merece obediência absoluta — de quem ou do quê você está aceitando controle que não deveria? O que mudaria se só Deus ocupasse esse lugar?',
        keyInsight:
          'Tawhid é unicidade — e liberdade. Quando só Deus está no centro, nenhum ser humano tem poder total sobre você.',
      },
      {
        day: 4,
        title: 'Shirk — O Bug Fatal',
        arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ',
        translation: 'Deus não perdoa que se associe algo a Ele, mas perdoa tudo além disso a quem Ele quer.',
        ref: 'An-Nisa 4:48',
        content:
          'Shirk. Associar parceiros a Deus. No Islam, é o único pecado descrito como imperdoável — se a pessoa morre sem se arrepender. Todo o resto, Deus pode perdoar. Mentira, roubo, violência, qualquer coisa. Mas colocar algo no lugar de Deus — esse é o bug que corrompe o sistema inteiro.\n\nE shirk não é apenas adorar estátuas. É mais sutil do que isso. Quando o dinheiro governa suas decisões mais do que Deus — shirk. Quando a opinião dos outros determina seu valor mais do que Deus — shirk. Quando o medo de perder algo material te paralisa mais do que a confiança em Deus — shirk. Shirk é qualquer coisa que ocupa o lugar que só Deus deveria ocupar.\n\nIsso parece duro. Mas é proteção. O sistema foi desenhado com um centro. Quando você coloca outra coisa nesse centro, tudo desalinha. Decisões ficam erráticas. Prioridades ficam confusas. Paz desaparece. Shirk não é um pecado porque Deus fica ofendido — é um pecado porque destrói quem pratica.',
        reflection:
          'O que ocupa o centro do seu sistema operacional hoje? Sem julgamento — faça o diagnóstico honesto. Se não é Deus, o que é? E como está funcionando?',
        keyInsight:
          'Shirk é o único bug que o sistema não tolera. Não porque Deus precisa de exclusividade — mas porque você precisa de um centro que não falhe.',
      },
      {
        day: 5,
        title: 'Fitrah — As Configurações de Fábrica',
        arabic: 'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',
        translation: 'A natureza original de Deus, sobre a qual Ele criou as pessoas.',
        ref: 'Ar-Rum 30:30',
        content:
          'O Islam ensina que todo ser humano nasce com fitrah — uma predisposição natural para reconhecer Deus, para distinguir o bem do mal, para buscar a verdade. Não é aprendido. É instalado de fábrica. Antes de qualquer religião, antes de qualquer cultura, antes de qualquer influência — a fitrah está lá.\n\nO Profeta Muhammad disse: "Todo bebê nasce na fitrah. São os pais que o fazem judeu, cristão ou zoroastriano." Isso significa que a inclinação original do ser humano é para Deus — pura, sem rótulo, sem intermediário. O que vem depois — cultura, doutrinação, trauma — são camadas que cobrem o que já estava lá.\n\nÉ por isso que quando muitas pessoas "descobrem" Deus, sentem que estão lembrando, não aprendendo. Porque a fitrah reconhece. É como um software que foi reinstalado — ele não é novo, está voltando ao original. A shahada, no fundo, não é aprender algo novo. É lembrar algo que você sempre soube.',
        reflection:
          'Existe algo dentro de você que "sabe" antes de pensar? Uma bússola moral que funciona antes da razão? Se isso é a fitrah — o que te afastou dela? E o que te aproximaria de volta?',
        keyInsight:
          'Fitrah é a configuração original. Todo ser humano nasce sabendo. O caminho espiritual não é aprender algo novo — é lembrar o que foi esquecido.',
      },
      {
        day: 6,
        title: 'Shahada na Prática',
        arabic: 'قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا',
        translation: 'Digam: Cremos em Deus e no que foi revelado a nós.',
        ref: 'Al-Baqarah 2:136',
        content:
          'A shahada não é algo que você diz uma vez e esquece. É algo que se vive. Todo dia. Toda decisão. Toda interação. "Não há divindade além de Deus" não é uma frase para repetir — é um filtro para decidir.\n\nNa prática, isso significa: antes de tomar uma decisão, perguntar "isso serve a Deus ou serve ao meu ego?" Antes de reagir com raiva, perguntar "isso reflete quem eu digo que sou?" Antes de perseguir algo obsessivamente, perguntar "isso está no lugar de Deus na minha vida?"\n\nA shahada transforma o monoteísmo de conceito teológico em sistema operacional diário. Não é sobre acreditar que Deus existe — a maioria das pessoas acredita nisso. É sobre viver como se Ele fosse o centro real. E a diferença entre acreditar e viver é o abismo onde a maioria das pessoas se perde. Saber que Deus é um é fácil. Viver como se fosse — isso exige a vida inteira.',
        reflection:
          'Existe uma diferença entre o que você diz que acredita e como você realmente vive? Onde está o gap entre a shahada que você diria e a shahada que você pratica?',
        keyInsight:
          'A shahada não é teologia. É sistema operacional. A diferença entre acreditar em Deus e viver para Deus é o abismo onde a maioria se perde.',
      },
      {
        day: 7,
        title: 'O Boot Completo',
        arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
        translation: 'E não criei os jinns e os humanos senão para que Me adorem.',
        ref: 'Adh-Dhariyat 51:56',
        content:
          'A primeira semana termina com uma pergunta simples: o que muda quando você realmente acredita em um Deus só?\n\nMuda o medo — porque se só Deus controla, nenhuma criatura merece seu terror. Muda a ambição — porque se só Deus permanece, nenhuma conquista material é suficiente. Muda os relacionamentos — porque se todas as pessoas são criaturas do mesmo Deus, ninguém está acima ou abaixo. Muda a identidade — porque seu valor não depende do que o mundo diz, mas do que Deus diz.\n\nA palavra "ibadah" — traduzida como adoração — não significa apenas rezar. Significa servir. Viver para. Orientar cada ação em direção a. O versículo diz que Deus criou humanos para ibadah. Não como escravidão — como propósito. Quando todo o sistema está orientado para um ponto, tudo funciona. Quando cada peça aponta para uma direção diferente, tudo trava. A shahada é o boot. Na próxima semana, o sistema começa a rodar: cinco check-ins diários. Salah.',
        reflection:
          'Se acreditar em um Deus só muda medo, ambição, relacionamentos e identidade — o que muda na sua vida? Faça o diagnóstico: onde o boot está completo e onde ainda está pendente?',
        keyInsight:
          'Tawhid não é conceito. É reorganização total. Quando o sistema inicializa com Deus no centro, tudo — medo, ambição, identidade — recalibra.',
      },
      // ── Semana 2: Salah — O Check-in ──
      {
        day: 8,
        title: 'Fajr — O Despertar',
        arabic: 'وَقُرْآنَ الْفَجْرِ إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا',
        translation: 'E a recitação do amanhecer — certamente a recitação do amanhecer é testemunhada.',
        ref: 'Al-Isra 17:78',
        content:
          'O dia muçulmano não começa com o nascer do sol. Começa antes. Na escuridão. No silêncio. Quando o mundo ainda dorme e o céu começa a clarear no horizonte — esse é o Fajr. A primeira das cinco orações diárias.\n\nO versículo diz que a recitação do Fajr é "testemunhada" — a tradição islâmica explica que anjos da noite e anjos do dia se encontram nesse momento. É a troca de turno celestial. E você está ali, de pé, enquanto o mundo ignora.\n\nFajr é o check-in mais difícil porque exige o que ninguém quer dar: o conforto da cama. Mas é também o mais poderoso. Quem vence a batalha do travesseiro antes do sol nascer começa o dia já tendo vencido. Não o mundo — a si mesmo. E há algo inexplicável que acontece quando você está de pé no silêncio da madrugada, falando com Deus enquanto todos dormem. Uma intimidade que o barulho do dia não permite.',
        reflection:
          'Se amanhã você acordasse 20 minutos antes do sol — em silêncio total, sem celular — o que faria com esse tempo? O que aconteceria dentro de você?',
        keyInsight:
          'Fajr é o primeiro check-in. Antes do sol, antes do mundo, antes do barulho. Quem vence o travesseiro já venceu o dia.',
      },
      {
        day: 9,
        title: 'Dhuhr — A Pausa',
        arabic: 'أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ',
        translation: 'Estabeleça a oração quando o sol começa a declinar.',
        ref: 'Al-Isra 17:78',
        content:
          'Meio-dia. O sol está no ponto mais alto. O dia está no máximo da correria. E-mails, reuniões, deadlines, almoço rápido. E no meio de tudo isso — o sistema pede uma pausa. Dhuhr. A segunda oração.\n\nDhuhr é estratégica. Ela cai exatamente no momento em que o ser humano está mais imerso no dunya — no mundano, no material, no urgente. E o Islam diz: pare. Lave as mãos, o rosto. Respire. Lembre-se de quem está no centro. Depois volte.\n\nNão é interrupção. É recalibração. Quando você passa horas seguidas no modo "fazer", perde a perspectiva. As urgências parecem maiores do que são. Os problemas parecem permanentes. Dhuhr quebra isso. Cinco minutos para lembrar que o sol declina, o dia passa, e o que parecia enorme ao meio-dia será esquecido à noite. A pausa não rouba tempo. Rouba ansiedade.',
        reflection:
          'No meio do seu dia mais caótico — se você parasse por 5 minutos, fechasse os olhos e respirasse — o que aconteceria com a urgência que te sufoca?',
        keyInsight:
          'Dhuhr cai no pico do dia. No máximo da correria, o sistema pede pausa. Não é interrupção — é recalibração.',
      },
      {
        day: 10,
        title: 'Asr — A Reflexão',
        arabic: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        translation: 'Pelo tempo. Certamente o ser humano está em perda.',
        ref: 'Al-Asr 103:1-2',
        content:
          'A tarde. O dia já passou do meio. A energia baixa. A disposição cai. E o Alcorão tem uma surata inteira chamada Al-Asr — O Tempo — que começa jurando pelo tempo e dizendo que o ser humano está em perda. Todos. Sem exceção. Exceto quem tem fé, faz o bem, recomenda a verdade e recomenda a paciência.\n\nAsr é a oração da reflexão. O dia está acabando. O que você fez com as horas que recebeu? Onde investiu sua energia? Em coisas que permanecem ou em coisas que evaporam? A tarde é o momento honesto — quando o entusiasmo da manhã já passou e resta só o que foi realmente feito.\n\nO Profeta disse que Asr é a oração do meio — se você perde ela, é como se tivesse perdido a família e os bens. Parece exagero. Mas o ponto é: se no meio do dia você não para para refletir, chega ao fim sem saber onde o tempo foi. E tempo é o único recurso que nunca volta.',
        reflection:
          'Se alguém te perguntasse agora: "onde foi seu dia?" — você saberia responder com clareza? Ou o dia passou e você nem percebeu?',
        keyInsight:
          'Asr é a oração do tempo. O Alcorão jura pelo tempo e diz que o ser humano está em perda. A reflexão da tarde é o antídoto.',
      },
      {
        day: 11,
        title: 'Maghrib — O Encerramento',
        arabic: 'فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ',
        translation: 'Glorificado seja Deus quando anoitece e quando amanhece.',
        ref: 'Ar-Rum 30:17',
        content:
          'O sol se põe. O dia acabou. E antes de entrar na noite, uma última verificação: Maghrib. É a oração mais curta das cinco — três ciclos — mas carrega o peso de um encerramento.\n\nMaghrib acontece num dos momentos mais bonitos da natureza: o pôr do sol. As cores mudam. A luz dourada banha tudo. E enquanto muitas pessoas postam o sunset no Instagram, o muçulmano para, se volta para Meca, e encerra o expediente com Deus. É um log off consciente.\n\nHá algo profundo em marcar o fim do dia com adoração. O dia teve erros — Maghrib lava. O dia teve conquistas — Maghrib agradece. O dia teve perdas — Maghrib aceita. É como fechar todas as abas do navegador antes de dormir. Não resolver — mas reconhecer. Dizer a Deus: "foi isso. Fiz o que pude. O resto é Contigo." E soltar.',
        reflection:
          'No final do seu dia, como você encerra? Com tela de celular ou com silêncio? Se tivesse um ritual de 3 minutos para "fechar" o dia — o que incluiria?',
        keyInsight:
          'Maghrib é o log off do dia. No pôr do sol, o muçulmano fecha o expediente com Deus. Lava os erros, agradece as conquistas, aceita as perdas.',
      },
      {
        day: 12,
        title: 'Isha — A Entrega',
        arabic: 'وَمِنَ اللَّيْلِ فَسَبِّحْهُ وَأَدْبَارَ السُّجُودِ',
        translation: 'E durante a noite, glorifica-O, e após as prostrações.',
        ref: 'Qaf 50:40',
        content:
          'A última oração do dia. A noite caiu. O mundo escureceu. E antes de dormir, o muçulmano se apresenta diante de Deus uma última vez. Isha. A entrega.\n\nIsha é a oração da vulnerabilidade. Na escuridão, sem plateia, sem testemunhas humanas — só você e Deus. Não há ninguém para impressionar. Não há status a manter. É o momento mais honesto das 24 horas porque a noite tira todas as máscaras.\n\nE depois de Isha, existe algo ainda mais profundo: Witr — a oração voluntária da noite — e para quem busca mais, Qiyam al-Layl, a oração da madrugada. O Profeta dizia que a oração da noite é a mais nobre depois das obrigatórias. Porque ninguém vê. Ninguém conta. Ninguém posta. É puro. É entre você e o Criador. Cinco check-ins completos: Fajr (despertar), Dhuhr (pausa), Asr (reflexão), Maghrib (encerramento), Isha (entrega). O dia inteiro estruturado. Nenhum app faz isso.',
        reflection:
          'Antes de dormir, no silêncio da noite — se você falasse com Deus sem filtro, sem vergonha, sem roteiro — o que diria?',
        keyInsight:
          'Isha é a entrega noturna. Na escuridão, sem plateia, a oração mais honesta. Cinco check-ins completam o ciclo do dia.',
      },
      {
        day: 13,
        title: 'Wudu — O Ritual de Limpeza',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ',
        translation: 'Ó vós que credes, quando vos levantardes para a oração, lavai vossos rostos e vossas mãos.',
        ref: 'Al-Ma\'idah 5:6',
        content:
          'Antes de cada oração, o muçulmano faz wudu — ablução. Lava as mãos três vezes. Enxágua a boca. Limpa o nariz. Lava o rosto. Lava os braços até o cotovelo. Passa a mão úmida sobre a cabeça. Limpa os ouvidos. Lava os pés. Nessa ordem.\n\nNão é higiene. É transição. O wudu é a porta entre o mundano e o sagrado. Entre o modo "mundo" e o modo "Deus". Cada parte do corpo lavada carrega um significado: as mãos que fazem, o rosto que enfrenta, os braços que trabalham, a cabeça que pensa, os ouvidos que escutam, os pés que caminham. Tudo é ritualmente limpo antes de se apresentar ao Criador.\n\nO Profeta disse que os pecados saem com a água do wudu — literalmente caem com as gotas. Não é magia. É psicologia profunda: o ato físico de se lavar prepara a mente para a presença. Tira a camada do dia. Remove a sujeira invisível da correria. Quando você termina o wudu e fica de pé para rezar, está renovado. Não é a mesma pessoa que estava dois minutos antes.',
        reflection:
          'O que acontece quando você lava o rosto com água fria depois de um dia difícil? Se esse ato simples fosse feito com intenção, cinco vezes por dia — o que faria com a "sujeira" que o dia acumula dentro de você?',
        keyInsight:
          'Wudu não é higiene. É transição. Cada gota de água é uma camada de mundano que sai para que o sagrado entre.',
      },
      {
        day: 14,
        title: 'Khushu — A Presença',
        arabic: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ',
        translation: 'Bem-aventurados são os crentes que têm khushu em sua oração.',
        ref: 'Al-Mu\'minun 23:1-2',
        content:
          'Você pode fazer todos os movimentos da oração — ficar de pé, curvar, prostrar — e não estar realmente ali. O corpo presente, a mente em outro lugar. Pensando no jantar. No trabalho de amanhã. Na discussão de ontem. Isso é oração sem khushu. E o Alcorão diz que o sucesso pertence aos que rezam COM khushu.\n\nKhushu é presença total. É estar na oração com o corpo, a mente, e o coração ao mesmo tempo. É sentir cada palavra que recita. É saber, com cada fibra, que você está diante de Deus — não repetindo sons vazios.\n\nKhushu é o que separa ritual de conexão. Ritual é repetir movimentos. Conexão é sentir a quem você está se dirigindo. O Profeta dizia: "Reze como se estivesse vendo Deus. E se não conseguir vê-Lo, saiba que Ele está te vendo." Essa consciência — de ser observado com amor, não com julgamento — é o que transforma uma sequência de movimentos numa conversa. A segunda semana termina aqui. Cinco orações. Um ciclo. Na próxima semana: o reboot — Sawm, o jejum.',
        reflection:
          'Na sua vida, onde você está presente de corpo mas ausente de mente? Se trouxesse 100% de presença para uma atividade por dia — qual escolheria? E como seria diferente?',
        keyInsight:
          'Khushu é presença total. Sem ela, a oração é ginástica. Com ela, é conversa com Deus. Presença é o que separa ritual de conexão.',
      },
      // ── Semana 3: Sawm — O Reboot ──
      {
        day: 15,
        title: 'Ramadã — O Mês do Reset',
        arabic: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ',
        translation: 'O mês de Ramadã é aquele em que o Alcorão foi revelado como guia para a humanidade.',
        ref: 'Al-Baqarah 2:185',
        content:
          'Ramadã não é o mês da fome. É o mês em que o Alcorão desceu. É o mês em que Deus escolheu falar com a humanidade. O jejum é o método — a revelação é o objetivo. Trinta dias sem comer nem beber do amanhecer ao pôr do sol. Mais de um bilhão de pessoas. Simultaneamente.\n\nA lógica é contra-intuitiva: para se encher do que importa, primeiro você esvazia do que não importa. Tirar comida e água — as necessidades mais básicas — cria um vazio. E nesse vazio, espaço para Deus entrar. Para reflexão entrar. Para gratidão entrar.\n\nRamadã é o reboot do sistema operacional. Durante 11 meses, o sistema acumula lixo — hábitos ruins, preguiça espiritual, distrações. Ramadã limpa tudo. Não é fácil. Não é confortável. Mas quando termina, o sistema roda diferente. Mais leve. Mais claro. Mais conectado. Como um computador depois de reiniciar.',
        reflection:
          'Se você tirasse uma coisa da sua vida por 30 dias — a coisa que mais consome seu tempo sem retorno — o que seria? O que apareceria no espaço vazio?',
        keyInsight:
          'Ramadã não é sobre passar fome. É sobre esvaziar para preencher. O mês em que o Alcorão desceu é o mês em que o sistema reinicia.',
      },
      {
        day: 16,
        title: 'O Corpo que Obedece',
        arabic: 'كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
        translation: 'O jejum foi prescrito para vós como foi prescrito aos que vieram antes, para que tenhais consciência.',
        ref: 'Al-Baqarah 2:183',
        content:
          'A primeira descoberta do jejum é que você é mais forte do que acha. O corpo reclama. A mente diz que você vai desmaiar. E horas depois, você está de pé. Funcionando. Trabalhando. Vivendo. A fome veio — e passou. A sede veio — e passou. E você sobreviveu ao que achava impossível.\n\nO jejum é um treinamento de soberania sobre o corpo. No dia a dia, o corpo manda: "tenho fome — coma agora", "tenho sede — beba agora", "tenho desejo — satisfaça agora." O jejum inverte essa hierarquia. Você diz ao corpo: "não agora." E ele obedece. Essa inversão é revolucionária. Porque quem controla o corpo controla os impulsos. E quem controla os impulsos controla a vida.\n\nOs benefícios físicos são documentados pela ciência: autofagia, regulação hormonal, clareza mental, redução de inflamação. Mas o benefício real é espiritual: descobrir que entre o desejo e a ação existe um espaço. E nesse espaço mora a liberdade.',
        reflection:
          'Quando foi a última vez que você disse "não" ao seu corpo — não por falta, mas por escolha? O que acontece quando você descobre que o desejo não manda em você?',
        keyInsight:
          'O jejum inverte a hierarquia: o corpo obedece à alma, não o contrário. Entre o desejo e a ação existe um espaço — e nesse espaço mora a liberdade.',
      },
      {
        day: 17,
        title: 'A Fome do Outro',
        arabic: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا',
        translation: 'E alimentam, apesar do amor pela comida, o necessitado, o órfão e o prisioneiro.',
        ref: 'Al-Insan 76:8',
        content:
          'O jejum tem uma dimensão que vai além do espiritual: a empatia. Quando você sente fome por escolha — sabendo que ao pôr do sol vai comer — experimenta uma fração do que milhões sentem todo dia sem escolha. A fome voluntária ensina o que a abundância esconde.\n\nNo Ramadã, as mesquitas servem iftar — a refeição de quebra do jejum — aberta a todos. Vizinhos convidam vizinhos. Estranhos sentam juntos. A mesa se alonga. O ato de comer, que no resto do ano é rotina, vira celebração. Porque quando você passou o dia sem comer, um copo de água e uma tâmara são suficientes para sentir gratidão profunda.\n\nO versículo de hoje fala de pessoas que alimentam outros "apesar do amor pela comida" — ou seja, quando elas mesmas estão com fome. Dar quando sobra é fácil. Dar quando falta é outra coisa. O jejum cria a condição para esse tipo de generosidade radical: você sente a fome, e mesmo assim divide o pouco que tem.',
        reflection:
          'Quando foi a última vez que você sentiu fome de verdade — não vontade de comer, mas fome? O que aconteceu com sua percepção do mundo naquele momento?',
        keyInsight:
          'O jejum ensina o que a abundância esconde. Sentir fome por escolha cria empatia com quem sente sem escolha. Dar quando falta é a generosidade que o Islam ensina.',
      },
      {
        day: 18,
        title: 'Tarawih — As Orações da Noite',
        arabic: 'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ',
        translation: 'E durante parte da noite, reze como oração adicional para ti.',
        ref: 'Al-Isra 17:79',
        content:
          'No Ramadã, depois do iftar e da oração de Isha, algo extraordinário acontece. As mesquitas enchem para Tarawih — orações longas e voluntárias onde o Alcorão inteiro é recitado ao longo do mês. Noite após noite. Capítulo após capítulo.\n\nImagine: depois de um dia inteiro sem comer nem beber, em vez de ir para casa descansar, milhões de pessoas vão para a mesquita rezar por mais uma ou duas horas. De pé. Em fileiras. Ouvindo a recitação do Alcorão na voz de um hafiz — alguém que memorizou o livro inteiro. É bonito de uma forma que palavras não capturam.\n\nAs noites do Ramadã têm uma energia diferente. As ruas mudam. As famílias se reúnem. As comunidades se reaproximam. Há uma doçura no ar — uma mistura de cansaço, gratidão e proximidade com Deus que só quem jejuou e rezou à noite conhece. O Ramadã não é um mês de privação. É um mês de plenitude.',
        reflection:
          'Se existisse um mês inteiro dedicado a limpar, recalibrar e reconectar — você participaria? O que te impede e o que te atrai nessa ideia?',
        keyInsight:
          'Tarawih são as orações noturnas do Ramadã. Depois de um dia de jejum, milhões vão rezar por horas. Não por obrigação — por desejo.',
      },
      {
        day: 19,
        title: 'Laylat al-Qadr — A Noite do Poder',
        arabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
        translation: 'A Noite do Poder é melhor que mil meses.',
        ref: 'Al-Qadr 97:3',
        content:
          'Nos últimos dez dias do Ramadã, existe uma noite que vale mais que mil meses. Mais de 83 anos. Uma única noite de adoração equivale a uma vida inteira. É chamada Laylat al-Qadr — a Noite do Poder. A noite em que o Alcorão começou a descer.\n\nNinguém sabe exatamente qual noite é. A tradição diz que está nas noites ímpares dos últimos dez dias — 21, 23, 25, 27 ou 29 do Ramadã. Então os muçulmanos mais devotos passam todas essas noites acordados, rezando, recitando, fazendo dua (súplica). Buscando.\n\nHá algo profundamente belo na ideia de uma noite escondida. Deus poderia ter dito qual é. Mas não disse. O que obriga o buscador a tratar todas as noites como se fossem a noite. E nesse processo — de buscar sem saber quando vai encontrar — a busca em si se torna a recompensa. O Ramadã ensina que nem tudo que vale a pena é óbvio. Às vezes, o tesouro está escondido justamente para que você procure.',
        reflection:
          'Se existisse uma noite que vale mais que 83 anos — e você não soubesse qual é — o que faria com cada noite? E se a vida toda funcionasse assim?',
        keyInsight:
          'Laylat al-Qadr vale mais que mil meses. E ninguém sabe qual noite é. A busca — não a certeza — é o que o Ramadã ensina.',
      },
      {
        day: 20,
        title: 'Eid al-Fitr — A Celebração',
        arabic: 'وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَىٰ مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ',
        translation: 'Para que completem o período e glorifiquem Deus pelo que vos guiou, e para que agradeçam.',
        ref: 'Al-Baqarah 2:185',
        content:
          'Trinta dias de jejum terminam com uma festa: Eid al-Fitr. A celebração da quebra do jejum. É o dia mais feliz do calendário islâmico. Roupas novas. Comida farta. Presentes. Abraços. Visitas. Alegria sem culpa.\n\nO Eid começa com uma oração comunitária ao ar livre — milhões de pessoas em parques, estádios, praças. Todos juntos. Depois, a festa. Famílias que não se viram durante o ano se reúnem. Vizinhos trocam pratos de comida. Crianças recebem dinheiro dos mais velhos. É Natal, Réveillon e aniversário juntos.\n\nMas o Eid só tem sentido depois do Ramadã. A celebração só é real porque a dificuldade foi real. A alegria é proporcional ao sacrifício. É por isso que o Islam coloca a festa DEPOIS do jejum, não antes. Primeiro o esforço, depois a recompensa. Primeiro a disciplina, depois a doçura. Essa é a ordem do sistema. E quando você celebra tendo realmente conquistado algo, a alegria tem raiz.',
        reflection:
          'Qual foi a última vez que você celebrou algo que realmente custou esforço? A alegria foi diferente? O que o Eid ensina sobre a relação entre sacrifício e celebração?',
        keyInsight:
          'Eid al-Fitr é a festa depois do jejum. A celebração só é real porque a dificuldade foi real. O sistema coloca esforço antes de recompensa.',
      },
      {
        day: 21,
        title: 'Jejum Fora do Ramadã',
        arabic: 'مَن صَامَ رَمَضَانَ ثُمَّ أَتْبَعَهُ سِتًّا مِنْ شَوَّالٍ كَانَ كَصِيَامِ الدَّهْرِ',
        translation: 'Quem jejua o Ramadã e depois o segue com seis dias de Shawwal, é como se jejuasse o ano inteiro.',
        ref: 'Hadith — Sahih Muslim',
        content:
          'O jejum não termina com o Ramadã. O Profeta jejuava às segundas e quintas. Jejuava três dias por mês. Jejuava o dia de Arafat. Jejuava Ashura. O jejum é uma ferramenta permanente no kit do muçulmano — não um evento anual.\n\nIsso transforma o jejum de ritual religioso em prática de vida. Assim como um atleta treina regularmente — não só uma vez por ano — o muçulmano mantém a disciplina do corpo e da alma ao longo dos meses. Os jejuns voluntários são mais curtos, mais leves, e funcionam como manutenção do sistema entre os reboots maiores.\n\nA terceira semana termina aqui. Sete dias sobre Sawm — o jejum como reboot. Você viu que não é privação: é esvaziamento com propósito. Treino de soberania sobre o corpo. Empatia com quem tem fome. Noites de busca. Celebração com raiz. Na próxima semana, o sistema redistribui: Zakat — o pilar da riqueza.',
        reflection:
          'Se o jejum é uma ferramenta para manter a disciplina — não uma punição — como você poderia incorporar alguma forma de "jejum" regular na sua vida? Não necessariamente de comida.',
        keyInsight:
          'O jejum não é evento anual. É ferramenta permanente. Segundas, quintas, dias especiais — o muçulmano mantém o sistema calibrado o ano inteiro.',
      },
      // ── Semana 4: Zakat — A Redistribuição ──
      {
        day: 22,
        title: '2.5% — A Equação',
        arabic: 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا',
        translation: 'Toma de suas riquezas uma contribuição que os purifique e os desenvolva.',
        ref: 'At-Tawbah 9:103',
        content:
          'Zakat é 2.5% de tudo que você possui acima de um mínimo chamado "nisab." Não do que ganha. Do que tem. Uma vez por ano, todo muçulmano faz as contas: poupança, investimentos, ouro, mercadoria. Se passou do nisab, 2.5% vai para quem precisa. Obrigatório. Sem exceção.\n\nA palavra "zakat" vem da raiz "zakaa" — que significa purificar e crescer ao mesmo tempo. No Islam, a riqueza que não é compartilhada está contaminada. Dar não é perder — é limpar. É reconhecer que uma porção do que você acumulou nunca foi sua: sempre pertenceu ao pobre, ao necessitado, ao viajante sem recursos.\n\nIsso não é caridade. Caridade é voluntária e gera gratidão. Zakat é obrigatório e gera justiça. Quem recebe zakat não deve favor a ninguém — está recebendo o que lhe pertence por direito divino. Essa inversão é radical: o pobre não agradece o rico. O rico agradece a Deus por ter o suficiente para purificar.',
        reflection:
          'Se 2.5% de tudo que você possui fosse obrigatório — não opcional, não "quando sobrar", não "se eu quiser" — como isso mudaria sua relação com dinheiro?',
        keyInsight:
          'Zakat não é caridade. É purificação obrigatória. 2.5% do que você possui pertence, por direito divino, a quem precisa.',
      },
      {
        day: 23,
        title: 'Quem Recebe',
        arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ',
        translation: 'As contribuições são apenas para os pobres e necessitados.',
        ref: 'At-Tawbah 9:60',
        content:
          'O Alcorão define exatamente quem recebe o zakat. Não é vago. Não é "para quem você quiser." São oito categorias específicas: os pobres, os necessitados, os que administram o zakat, os que têm o coração inclinado ao Islam, para libertar cativos, os endividados, pela causa de Deus, e o viajante sem recursos.\n\nEssa precisão é intencional. O zakat não é um "fundo genérico de bondade." É um sistema de redistribuição com destinatários definidos. Cada categoria resolve um problema social específico: pobreza, exclusão, dívida, vulnerabilidade. Juntas, formam uma rede de proteção que cobre praticamente todo tipo de necessidade humana.\n\nSe todos os 1.8 bilhão de muçulmanos pagassem o zakat corretamente, estima-se que geraria entre 200 e 600 bilhões de dólares por ano. Para contexto: o orçamento total de ajuda humanitária global da ONU é cerca de 30 bilhões. O sistema já existe. Só falta ser implementado com fidelidade.',
        reflection:
          'Se existisse um sistema em que todo mundo contribuísse 2.5% do que tem — com destinatários claros e sem burocracia — como seria o mundo? O que impede isso de funcionar?',
        keyInsight:
          'O Alcorão define 8 categorias de quem recebe zakat. É sistema de redistribuição com destinatários claros — não caridade vaga.',
      },
      {
        day: 24,
        title: 'Sadaqah — A Caridade Além',
        arabic: 'مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً',
        translation: 'Quem empresta a Deus um empréstimo generoso, e Ele o multiplicará muitas vezes.',
        ref: 'Al-Baqarah 2:245',
        content:
          'Zakat é o mínimo. Sadaqah é tudo além. Qualquer ato de generosidade — dar dinheiro, dar tempo, dar um sorriso, tirar um obstáculo do caminho — é sadaqah. E o Alcorão diz que quem dá está "emprestando a Deus." Deus — o Criador de tudo — pedindo emprestado a você. A imagem é poderosa.\n\nA diferença entre zakat e sadaqah é que zakat é obrigatório e tem regras fixas. Sadaqah é livre. Não tem valor mínimo. Não tem destinatário obrigatório. Não tem data. O Profeta disse: "Até remover um espinho do caminho é sadaqah." Até sorrir para alguém é sadaqah. A generosidade no Islam não começa no bolso. Começa na intenção.\n\nE o versículo promete multiplicação — "adafan kathirah", muitas vezes. Não como investimento capitalista, mas como lógica espiritual: o que você dá por Deus nunca diminui você. Sempre volta multiplicado. Não necessariamente em dinheiro — em paz, em baraka (bênção), em portas que se abrem sem explicação.',
        reflection:
          'Qual foi o último ato de generosidade que você fez sem que ninguém visse? Se a menor bondade conta como sadaqah — o que te impede de praticar mais?',
        keyInsight:
          'Sadaqah é a generosidade livre. Desde dinheiro até um sorriso. O Alcorão diz que quem dá está "emprestando a Deus" — e Ele multiplica.',
      },
      {
        day: 25,
        title: 'Justiça Econômica',
        arabic: 'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',
        translation: 'Para que a riqueza não circule apenas entre os ricos dentre vós.',
        ref: 'Al-Hashr 59:7',
        content:
          'Esse versículo é de 1.400 anos atrás. E descreve exatamente o que a economia global se tornou: riqueza circulando entre os ricos. Os 1% mais ricos possuem mais que os 99% restantes. E o Alcorão diz: isso é o oposto do que Deus quer.\n\nO Islam não proíbe ser rico. Não condena o lucro. Não prega pobreza voluntária. O que proíbe é a concentração. A riba (usura/juros) é proibida porque gera dinheiro a partir de dinheiro — sem trabalho, sem risco, sem produção real. O zakat redistribui. A herança no Islam é dividida entre muitos herdeiros, não concentrada num primogênito. Todo o sistema econômico islâmico é desenhado para uma coisa: fazer a riqueza circular.\n\nIsso não é socialismo. É algo diferente. O Islam diz: ganhe. Prospere. Mas lembre-se de que uma parte do que você tem não é sua. E quando a riqueza para de circular, a sociedade adoece. O zakat é o remédio — prescrito 14 séculos antes de Thomas Piketty.',
        reflection:
          'Se a riqueza existe para circular — o que você está acumulando que poderia estar se movendo? Não necessariamente dinheiro: tempo, conhecimento, conexão.',
        keyInsight:
          'O Alcorão proíbe a concentração de riqueza há 1.400 anos. O zakat, a proibição de juros e as regras de herança formam um sistema anti-desigualdade.',
      },
      {
        day: 26,
        title: 'Purificação da Riqueza',
        arabic: 'وَالَّذِينَ فِي أَمْوَالِهِمْ حَقٌّ مَّعْلُومٌ لِّلسَّائِلِ وَالْمَحْرُومِ',
        translation: 'E aqueles em cujas riquezas há um direito reconhecido para o pedinte e o privado.',
        ref: 'Al-Ma\'arij 70:24-25',
        content:
          'Repare na palavra: "direito." Não favor. Não gentileza. Direito. O Alcorão diz que dentro da sua riqueza existe uma porção que pertence ao pobre — por direito. Não porque você é generoso, mas porque Deus determinou assim.\n\nIsso inverte completamente a psicologia da doação. Na caridade convencional, o rico dá e o pobre agradece. No zakat, o rico paga o que deve e o pobre recebe o que é seu. Não há favor. Não há foto no Instagram com crianças pobres. Não há nome em placa de hospital. O zakat ideal é anônimo — a mão esquerda não sabe o que a direita deu.\n\nE aqui está a purificação: enquanto você retém o que pertence ao outro, sua riqueza está suja. Não importa se é halal (lícita). Não importa se você trabalhou duro. Se os 2.5% ainda estão na sua conta, parte do que você chama de "meu" é de outra pessoa. O zakat não tira de você — devolve o que nunca foi seu.',
        reflection:
          'Se parte do que você chama de "seu dinheiro" na verdade pertence a outra pessoa por direito divino — como isso muda sua relação com o que possui?',
        keyInsight:
          'O zakat não é favor ao pobre. É devolução do que é dele por direito. A riqueza que retém o zakat está contaminada — não importa quão halal seja.',
      },
      {
        day: 27,
        title: 'Aplicações Modernas',
        arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
        translation: 'E cooperem no bem e na consciência de Deus.',
        ref: 'Al-Ma\'idah 5:2',
        content:
          'O zakat no século XXI vai além de dar dinheiro ao vizinho pobre. Fundos de zakat financiam hospitais, escolas, programas de microcrédito, habitação popular, tratamento médico, bolsas de estudo. Em países como Malásia e Indonésia, instituições de zakat operam com a eficiência de fintechs — plataformas digitais, rastreamento de impacto, relatórios transparentes.\n\nO princípio é antigo. A aplicação se atualiza. E o potencial é astronômico. Se o mundo islâmico implementasse o zakat com a mesma seriedade que implementa o jejum, a face da pobreza global mudaria. Não é utopia — é matemática: 2.5% de trilhões de dólares, canalizados para oito categorias de necessidade, com regularidade anual.\n\nMas o zakat não é apenas sobre dinheiro. É sobre mentalidade. É aceitar que você é guardião temporário da riqueza, não dono permanente. É entender que prosperidade individual sem responsabilidade coletiva é doença, não saúde. O sistema foi desenhado para que ninguém tenha demais enquanto alguém não tem nada.',
        reflection:
          'Se a tecnologia permite que o zakat funcione de forma transparente e eficiente — o que falta para transformar esse pilar em solução real para a pobreza?',
        keyInsight:
          'O zakat moderno usa tecnologia para redistribuir com eficiência. O princípio tem 1.400 anos. O potencial é transformar a economia global.',
      },
      {
        day: 28,
        title: 'Impacto Comunitário',
        arabic: 'لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ',
        translation: 'Vocês não alcançarão a verdadeira bondade até que deem daquilo que amam.',
        ref: 'Al-Imran 3:92',
        content:
          'O versículo não diz "até que deem do que sobra." Diz "do que amam." A generosidade que o Islam pede não é confortável. É a que custa. É dar o melhor, não o resto. É abrir mão do que apega, não do que incomoda.\n\nQuando o zakat funciona numa comunidade, o efeito é visível: menos pobreza, mais educação, mais saúde, mais estabilidade. Mas o efeito invisível é maior: as relações mudam. O rico não olha o pobre de cima — porque sabe que parte do que tem é dele. O pobre não olha o rico com ressentimento — porque sabe que o sistema garante seu direito. A tensão entre classes diminui quando a redistribuição é estrutural, não eventual.\n\nA quarta semana termina aqui. Sete dias sobre Zakat — o pilar da redistribuição. Você viu que não é caridade: é purificação. Não é favor: é direito. Não é perda: é limpeza. Na última semana, o sistema faz o deploy final: Hajj — a peregrinação que iguala todos.',
        reflection:
          'O que você possui que ama demais para dar? Se a verdadeira bondade exige dar justamente isso — o que esse apego revela sobre você?',
        keyInsight:
          'A verdadeira bondade exige dar do que ama, não do que sobra. O zakat cria comunidades onde redistribuição é estrutura, não favor.',
      },
      // ── Semana 5: Hajj — O Deploy ──
      {
        day: 29,
        title: 'A Jornada',
        arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
        translation: 'E é dever para com Deus, sobre a humanidade, a peregrinação à Casa — para quem tiver capacidade.',
        ref: 'Al-Imran 3:97',
        content:
          'Hajj é o quinto pilar. A peregrinação a Meca. Uma vez na vida — para quem tem condições físicas e financeiras. É o único pilar condicional: se você não pode, não deve. Deus não pede o impossível.\n\nMas para quem pode, é transformador. Todo ano, mais de dois milhões de pessoas de mais de 180 países convergem para o mesmo ponto. O mesmo lugar. Os mesmos rituais. As mesmas roupas. A mesma direção. É o maior encontro anual da humanidade — e funciona há mais de 1.400 anos.\n\nO Hajj é o deploy do sistema. Depois de declarar fé (shahada), manter os check-ins (salah), reiniciar (sawm), e redistribuir (zakat) — o último passo é ir. Fisicamente. Mover o corpo até o lugar onde Abraão construiu a Casa. Onde o Islam começou. Onde 1.8 bilhão de pessoas se voltam cinco vezes por dia. O Hajj é a prova de que espiritualidade no Islam não é abstrata — é concreta, física, real.',
        reflection:
          'Se existisse um lugar no mundo que concentrasse toda a sua fé num ponto — e você fosse convidado a ir pelo menos uma vez na vida — você iria? O que te atrai ou te assusta nessa ideia?',
        keyInsight:
          'Hajj é o deploy final. Depois da fé, da oração, do jejum e do zakat — o último passo é ir. Fisicamente. A espiritualidade islâmica não é abstrata.',
      },
      {
        day: 30,
        title: 'A Kaaba — O Ponto Central',
        arabic: 'جَعَلَ اللَّهُ الْكَعْبَةَ الْبَيْتَ الْحَرَامَ قِيَامًا لِّلنَّاسِ',
        translation: 'Deus fez da Kaaba, a Casa Sagrada, um sustentáculo para a humanidade.',
        ref: 'Al-Ma\'idah 5:97',
        content:
          'A Kaaba não é um templo. É um cubo vazio. Coberto por um tecido negro bordado em ouro com versículos do Alcorão. Por dentro, não há nada. Sem imagens. Sem estátuas. Sem altar. Um espaço vazio apontando para Deus.\n\nE para esse cubo vazio, 1.8 bilhão de pessoas se voltam cinco vezes por dia. De Tóquio a São Paulo, de Lagos a Londres — todos na mesma direção. A Kaaba é o ponto de convergência da humanidade muçulmana. Não porque o edifício é sagrado em si — mas porque Deus escolheu aquele ponto como referência.\n\nIsso é engenharia espiritual: dar a uma civilização inteira um único ponto focal. Quando você reza, não reza "para o nada." Reza em direção a algo. Quando você peregrina, não vaga sem destino. Vai a um lugar. O Islam entende que o ser humano precisa de concretude. De direção. De um ponto para onde olhar. A Kaaba é esse ponto — vazia por dentro porque Deus não cabe em paredes, mas real por fora porque o ser humano precisa de âncora.',
        reflection:
          'Na sua vida, o que funciona como "Kaaba" — um ponto de referência fixo para onde você se volta quando está perdido? Se não existe — o que seria?',
        keyInsight:
          'A Kaaba é um cubo vazio. Sem imagens, sem ídolos. 1.8 bilhão de pessoas se voltam para um espaço que aponta para Deus — não para si mesmo.',
      },
      {
        day: 31,
        title: 'Tawaf e Sa\'i — O Circuito',
        arabic: 'وَلْيَطَّوَّفُوا بِالْبَيْتِ الْعَتِيقِ',
        translation: 'E que circundem a Casa Antiga.',
        ref: 'Al-Hajj 22:29',
        content:
          'Tawaf: sete voltas ao redor da Kaaba. No sentido anti-horário. Dois milhões de pessoas girando ao redor do mesmo ponto, como planetas ao redor do sol. Como elétrons ao redor do núcleo. O universo inteiro gira — e no Hajj, o ser humano gira junto.\n\nDepois do Tawaf vem o Sa\'i: caminhar sete vezes entre as colinas de Safa e Marwa. É a recriação da corrida de Hajar — mãe de Ismael — quando ela ficou sozinha no deserto com o bebê, sem água, e correu desesperada entre as duas colinas buscando ajuda. Deus respondeu com a fonte de Zamzam, que jorra até hoje.\n\nO Sa\'i não celebra um herói de guerra. Celebra uma mãe desesperada que não desistiu. Cada peregrino refaz os passos dela — ricos e pobres, reis e trabalhadores, todos correndo onde uma mulher correu sozinha. No Hajj, a corrida de uma mãe é tão sagrada quanto a construção de Abraão. A vulnerabilidade é tão honrada quanto a força.',
        reflection:
          'Se o ritual mais sagrado do Islam inclui refazer os passos de uma mãe desesperada — o que isso diz sobre o que Deus honra? Força ou vulnerabilidade?',
        keyInsight:
          'O Tawaf é girar ao redor da Kaaba como o universo gira. O Sa\'i é refazer os passos de uma mãe desesperada. O Hajj honra tanto a força quanto a vulnerabilidade.',
      },
      {
        day: 32,
        title: 'Arafat — O Monte da Misericórdia',
        arabic: 'فَإِذَا أَفَضْتُم مِّنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ عِندَ الْمَشْعَرِ الْحَرَامِ',
        translation: 'E quando saírdes de Arafat, lembrem de Deus junto ao monumento sagrado.',
        ref: 'Al-Baqarah 2:198',
        content:
          'O dia de Arafat é o coração do Hajj. Sem Arafat, não existe peregrinação. Dois milhões de pessoas se reúnem numa planície ao pé de um monte — de pé, sob o sol, do meio-dia ao pôr do sol. Fazendo uma coisa só: suplicando a Deus.\n\nO Profeta disse: "O Hajj é Arafat." Tudo mais — o Tawaf, o Sa\'i, as pedras, o sacrifício — é importante. Mas Arafat é o pilar central. Porque Arafat é o ensaio geral do Dia do Juízo. Todos de pé. Todos iguais. Todos diante de Deus. Sem diferença entre rei e mendigo, entre PhD e analfabeto, entre branco e negro. O ihram — a roupa branca sem costura que todo peregrino usa — elimina toda distinção.\n\nÉ dito que Deus desce ao céu mais próximo em Arafat e diz aos anjos: "Olhem para Meus servos. Vieram despenteados, cobertos de poeira, de todos os cantos. Testemunhem que Eu os perdoei." Arafat é o lugar onde Deus perdoa tudo. Onde a conta zera. Onde você sai como no dia em que nasceu.',
        reflection:
          'Se existisse um lugar onde tudo que você carrega — culpa, erro, vergonha — fosse apagado de uma vez, e você saísse limpo como um recém-nascido — você iria?',
        keyInsight:
          'Arafat é o coração do Hajj. Dois milhões de pé, iguais, suplicando. O Profeta disse: "O Hajj é Arafat." É onde a conta zera.',
      },
      {
        day: 33,
        title: 'Ihram — A Igualdade',
        arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ',
        translation: 'Ó humanidade, Nós vos criamos de um homem e uma mulher.',
        ref: 'Al-Hujurat 49:13',
        content:
          'Ihram é a roupa do peregrino. Dois pedaços de tecido branco sem costura. Sem marca. Sem grife. Sem bolso para carteira. Homem ou mulher, bilionário ou assalariado, presidente ou refugiado — todos vestem o mesmo. E nesse momento, algo extraordinário acontece: as diferenças desaparecem.\n\nMalcolm X, o ativista americano, descreveu sua experiência no Hajj em 1964: "Nunca testemunhei hospitalidade tão sincera e fraternidade tão avassaladora praticada por pessoas de todas as cores e raças. América precisa entender o Islam, porque é a única religião que apaga o problema racial da sociedade."\n\nO ihram é a materialização da shahada. Se só Deus é superior — nenhum ser humano é. Não por mérito, não por cor, não por nacionalidade, não por riqueza. Quando dois milhões de pessoas vestidas de branco ficam lado a lado em Arafat, a hierarquia humana é visivelmente desfeita. É o que a morte fará com todos — e o Hajj antecipa. Todos serão enterrados em tecido branco, sem nada. O ihram é vestir a mortalha antes de morrer — e descobrir que ela liberta.',
        reflection:
          'Se todas as marcas, títulos e diferenças fossem tiradas — o que sobraria de você? Quem é você sem o que possui e sem o que o mundo diz que você é?',
        keyInsight:
          'Ihram elimina toda diferença visível. Bilionários e refugiados lado a lado em branco. É vestir a mortalha antes de morrer — e descobrir que ela liberta.',
      },
      {
        day: 34,
        title: 'Eid al-Adha — O Sacrifício',
        arabic: 'لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ',
        translation: 'Nem a carne nem o sangue chegam a Deus — mas a consciência de vocês é que O alcança.',
        ref: 'Al-Hajj 22:37',
        content:
          'No décimo dia do mês do Hajj, muçulmanos ao redor do mundo celebram Eid al-Adha — a Festa do Sacrifício. Comemora o momento em que Abraão se dispôs a sacrificar seu filho por obediência a Deus, e Deus substituiu o filho por um cordeiro. O sacrifício do animal é simbólico e a carne é dividida em três partes iguais: um terço para a família, um terço para amigos e vizinhos, um terço para os pobres.\n\nMas o versículo de hoje desfaz qualquer leitura superficial: "Nem a carne nem o sangue chegam a Deus." Deus não precisa de carne. Não quer sangue. O que chega até Ele é a taqwa — a consciência, o temor reverencial, a disposição de abrir mão do que apega. O sacrifício externo é apenas a expressão do sacrifício interno.\n\nAbraão não sacrificou um animal. Sacrificou o apego. O medo. A resistência a obedecer quando não entendia o porquê. E Deus não queria o filho — queria a entrega. O Eid al-Adha celebra isso: não a morte de um cordeiro, mas a vida de uma fé que supera a lógica.',
        reflection:
          'O que Deus pode estar pedindo que você "sacrifique" — não literalmente, mas em termos de apego, controle, medo? O que você está segurando que deveria soltar?',
        keyInsight:
          'O sacrifício do Eid al-Adha não é sobre carne e sangue. É sobre entrega. Deus não quer o que você dá — quer a disposição de dar.',
      },
      {
        day: 35,
        title: 'O Deploy Completo',
        arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
        translation: 'Hoje completei para vocês a vossa religião, aperfeiçoei Minha graça sobre vocês, e escolhi para vocês o Islam como modo de vida.',
        ref: 'Al-Ma\'idah 5:3',
        content:
          'Esse versículo foi revelado no dia de Arafat, no último Hajj do Profeta Muhammad. É considerado o último versículo de legislação do Alcorão. "Hoje completei para vocês a religião." O sistema está completo. O deploy está feito.\n\nCinco semanas. Cinco pilares. Shahada: o boot — declarar que só Deus merece o centro. Salah: o check-in — cinco pausas diárias para recalibrar. Sawm: o reboot — jejum para reiniciar o sistema. Zakat: a redistribuição — purificar a riqueza devolvendo o que pertence ao outro. Hajj: o deploy — ir fisicamente ao ponto de origem, vestir a igualdade, e voltar zerado.\n\nIsso não é uma lista de rituais. É um sistema operacional para a vida humana. Um sistema que cuida da relação com Deus (shahada + salah), da relação consigo mesmo (sawm), da relação com a sociedade (zakat), e da relação com a humanidade inteira (hajj). Cada pilar sustenta os outros. Nenhum funciona sozinho. E juntos, formam algo que nenhum app, nenhum curso, nenhuma terapia replica: uma vida com direção, disciplina, generosidade e propósito. O sistema está completo. A pergunta agora é sua: o que você vai fazer com isso?',
        reflection:
          'Em 35 dias, você percorreu os 5 pilares do Islam como sistema operacional. Qual pilar mais te impactou? O que você levaria para sua vida — mesmo sem ser muçulmano? E a pergunta final: o sistema faz sentido para você?',
        keyInsight:
          'O sistema está completo. Shahada (boot), Salah (check-in), Sawm (reboot), Zakat (redistribuição), Hajj (deploy). Não são rituais — são o sistema operacional da vida humana.',
      },
    ],
  },
]
