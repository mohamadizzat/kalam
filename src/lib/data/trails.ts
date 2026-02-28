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
]
