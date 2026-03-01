// bridge-themes.ts — Kalam Brasil
// Temas de ponte entre a Biblia e o Alcorao, estruturados para estudo comparativo.
// Tom: respeitoso, academico mas acessivel. Nunca combativo.

export interface BridgeTheme {
  id: string
  title: string
  subtitle: string
  icon: string // Lucide icon name
  biblePassages: { reference: string; text: string; context: string }[]
  quranPassages: { reference: string; text: string; context: string }[]
  convergenceNotes: string
  divergenceNotes: string
  discussionQuestion: string
}

export const bridgeThemes: BridgeTheme[] = [
  // ──────────────────────────────────────────
  // 1. NASCIMENTO VIRGINAL DE JESUS
  // ──────────────────────────────────────────
  {
    id: 'virgin-birth',
    title: 'Nascimento Virginal de Jesus',
    subtitle: 'O milagre que une duas escrituras',
    icon: 'Baby',
    biblePassages: [
      {
        reference: 'Mateus 1:18-23',
        text: 'Ora, o nascimento de Jesus Cristo foi assim: Estando Maria, sua mae, desposada com Jose, antes de se ajuntarem, achou-se ter concebido do Espirito Santo. Entao Jose, seu marido, como era justo e nao a queria expor ao desprezo publico, intentou deixa-la secretamente. Mas, enquanto refletia nisso, eis que um anjo do Senhor lhe apareceu em sonho, dizendo: Jose, filho de Davi, nao temas receber Maria, tua mulher, porque o que nela foi gerado e do Espirito Santo. Ela dara a luz um filho, e lhe poras o nome de Jesus, porque ele salvara o seu povo dos seus pecados. Tudo isso aconteceu para que se cumprisse o que o Senhor dissera pelo profeta: Eis que a virgem concebera e dara a luz um filho, e ele sera chamado Emanuel, que quer dizer: Deus conosco.',
        context: 'Mateus conecta o nascimento virginal a profecia de Isaias 7:14, mostrando que o evento era parte de um plano divino anunciado seculos antes. A narrativa enfatiza tanto o milagre quanto a linhagem davidica de Jesus atraves de Jose.'
      },
      {
        reference: 'Lucas 1:34-35',
        text: 'Entao Maria perguntou ao anjo: Como se fara isso, visto que nao conheco homem algum? Respondeu-lhe o anjo: Descera sobre ti o Espirito Santo, e o poder do Altissimo te cobrira com a sua sombra; por isso, tambem o Santo que ha de nascer sera chamado Filho de Deus.',
        context: 'O relato de Lucas enfatiza a participacao ativa de Maria na narrativa — ela questiona, recebe explicacao e consente. A expressao "o poder do Altissimo te cobrira com a sua sombra" indica uma acao direta de Deus, sem intermediario humano.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Maryam 19:16-21',
        text: 'E menciona no Livro a historia de Maria, quando ela se retirou de sua familia para um lugar ao oriente. E colocou um veu entre ela e os seus. Entao enviamos a ela o Nosso Espirito, que se manifestou a ela como um ser humano perfeito. Ela disse: Refugio-me do Misericordioso contra ti, se es temente a Deus. Ele respondeu: Sou apenas o mensageiro do teu Senhor, para te conceder um filho puro. Ela disse: Como terei um filho, se nenhum homem me tocou e nao sou indecente? Ele respondeu: Assim sera. Teu Senhor disse: Isso e facil para Mim. E para que o tornemos um sinal para as pessoas e uma misericordia da Nossa parte. E isso e um assunto ja decretado.',
        context: 'A Surah Maryam (capitulo 19) e o unico capitulo do Alcorao nomeado em honra de uma mulher. O relato e notavelmente detalhado: Maria se retira, recebe a visita do anjo Jibril em forma humana, questiona a possibilidade e recebe a resposta de que o decreto divino ja estava selado.'
      },
      {
        reference: 'Surah Al-Imran 3:45-47',
        text: 'Quando os anjos disseram: O Maria, Allah te da a boa-nova de uma Palavra vinda Dele, cujo nome sera o Messias, Jesus, filho de Maria, ilustre neste mundo e no Alem, e um dos mais proximos de Allah. Ele falara as pessoas no berco e na maturidade, e sera dos justos. Ela disse: Senhor meu, como terei um filho, se nenhum homem me tocou? Ele disse: Assim sera. Allah cria o que quer. Quando decreta algo, apenas diz: Seja! E e.',
        context: 'Este trecho apresenta Jesus com titulos extraordinarios no Islam: "Messias", "uma Palavra vinda Dele", "ilustre neste mundo e no Alem". A expressao "Kun fa-yakun" (Seja! E e) e reservada no Alcorao para os atos criativos mais poderosos de Allah.'
      }
    ],
    convergenceNotes:
      'O nascimento virginal de Jesus e um dos pontos de convergencia mais notaveis entre a Biblia e o Alcorao. Ambos os textos afirmam, sem ambiguidade, que Jesus nasceu de uma virgem chamada Maria (Maryam) sem intervencao de um pai humano. Em ambas as narrativas, um anjo anuncia o nascimento, Maria questiona como sera possivel, e recebe a resposta de que o evento e obra direta do poder de Deus.\n\nAlem do fato em si, ambas as escrituras tratam o nascimento virginal como sinal — evidencia do cuidado especial de Deus com Jesus e de seu papel unico na historia humana. A Biblia o conecta a profecias anteriores; o Alcorao o descreve como "um sinal para as pessoas e uma misericordia". Nenhuma outra figura nas duas tradicoes recebe esse tipo de nascimento.\n\nPara o muçulmano, negar o nascimento virginal de Jesus e negar o Alcorao. Para o cristao, e fundamento da fe. Esse e um terreno raro onde ambos podem dizer, juntos: "Isso aconteceu, e foi Deus quem fez."',
    divergenceNotes:
      'A principal divergencia nao esta no fato do nascimento virginal, mas no que ele significa teologicamente. Para o Cristianismo, o nascimento virginal e evidencia da natureza divina de Jesus — ele nasce de uma virgem porque e o Filho de Deus encarnado, a segunda Pessoa da Trindade assumindo forma humana. A concepcao pelo Espirito Santo indica que Jesus tem origem divina, nao apenas missao divina.\n\nPara o Islam, o nascimento virginal demonstra o poder absoluto de Allah, que cria como quer. O Alcorao compara explicitamente a criacao de Jesus a criacao de Adao: "A semelhanca de Jesus perante Allah e como a de Adao — Ele o criou do po e depois disse: Seja! E foi" (3:59). No entendimento islamico, o nascimento miraculoso nao implica divindade — assim como Adao nao teve pai nem mae e nao e considerado divino.\n\nEssa diferenca e fundamental e merece ser compreendida com clareza: o mesmo evento historico (nascimento virginal) sustenta conclusoes teologicas distintas em cada tradicao. Nenhum dos dois lados pode abrir mao da sua interpretacao sem perder algo central.',
    discussionQuestion:
      'Se tanto a Biblia quanto o Alcorao confirmam o nascimento virginal de Jesus como ato direto de Deus, o que isso revela sobre o papel unico de Jesus/Isa na historia? O que cada escritura entende que esse milagre significa — e onde essas interpretacoes se encontram ou divergem?'
  },

  // ──────────────────────────────────────────
  // 2. OS MILAGRES DE JESUS
  // ──────────────────────────────────────────
  {
    id: 'miracles-of-jesus',
    title: 'Os Milagres de Jesus',
    subtitle: 'Sinais que ambos reconhecem',
    icon: 'Sparkles',
    biblePassages: [
      {
        reference: 'Joao 11:38-44',
        text: 'Jesus, novamente comovido em seu interior, foi ao tumulo. Era uma caverna, e sobre ela estava posta uma pedra. Disse Jesus: Tirai a pedra. Marta, irma do morto, disse-lhe: Senhor, ja cheira mal, porque e de quatro dias. Disse-lhe Jesus: Nao te disse eu que, se creres, veras a gloria de Deus? Tiraram, pois, a pedra. Jesus, levantando os olhos ao ceu, disse: Pai, gracas te dou porque me ouviste. Eu sei que sempre me ouves, mas por causa da multidao que me rodeia e que disse isso, para que creiam que tu me enviaste. Tendo dito isso, clamou em alta voz: Lazaro, vem para fora! E o morto saiu, tendo as maos e os pes ligados com faixas, e o rosto envolto num lenco. Disse-lhes Jesus: Desatai-o e deixai-o ir.',
        context: 'A ressurreicao de Lazaro e um dos milagres mais dramaticos do Evangelho. Jesus ora ao Pai antes de agir, demonstrando tanto sua relacao unica com Deus quanto seu poder sobre a morte. O detalhe dos quatro dias enfatiza que a morte era real e irreversivel por meios humanos.'
      },
      {
        reference: 'Mateus 14:15-21',
        text: 'Ao anoitecer, os discipulos se aproximaram dele e disseram: O lugar e deserto, e ja e tarde; despede as multidoes para que vao as aldeias e comprem algo para comer. Porem Jesus lhes disse: Nao precisam ir embora; dai-lhes vos mesmos de comer. Eles responderam: So temos aqui cinco paes e dois peixes. Disse-lhes: Trazei-mos aqui. Ordenou que as multidoes se assentassem sobre a relva. Tomou os cinco paes e os dois peixes e, erguendo os olhos ao ceu, os abençoou. Depois, partiu os paes e deu aos discipulos, e os discipulos os deram as multidoes. Todos comeram e se fartaram, e ainda recolheram doze cestos cheios de pedacos que sobraram. Os que comeram eram cerca de cinco mil homens, sem contar mulheres e criancas.',
        context: 'A multiplicacao dos paes revela Jesus como provedor sobrenatural. O gesto de erguer os olhos ao ceu e abençoar antes de agir e um padrao recorrente: o milagre vem de Deus, atraves de Jesus, para o povo.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Imran 3:49',
        text: 'E o fara mensageiro aos filhos de Israel, dizendo: Vim a voces com um sinal do vosso Senhor. Faco para voces, do barro, a forma de um passaro; depois sopro nele, e se torna um passaro vivo — com a permissao de Allah. Curo o cego de nascenca e o leproso, e ressuscito os mortos — com a permissao de Allah. E vos informo do que comeis e do que armazenais em vossas casas. Certamente ha nisso um sinal para voces, se sois crentes.',
        context: 'Este versiculo lista os milagres de Jesus no Alcorao de forma condensada. A frase "com a permissao de Allah" aparece repetidamente, servindo como marcador teologico: os milagres sao reais, mas a fonte do poder e Allah, nao Jesus por conta propria. O milagre dos passaros de barro e exclusivo do Alcorao — nao aparece nos Evangelhos canonicos, embora exista no Evangelho da Infancia de Tome.'
      },
      {
        reference: 'Surah Al-Maidah 5:110-115',
        text: 'Quando Allah disser: O Jesus, filho de Maria, lembra-te da Minha graca sobre ti e sobre tua mae, quando te fortaleci com o Espirito Santo; falaste as pessoas no berco e na maturidade. E quando te ensinei o Livro, a sabedoria, a Torah e o Evangelho. E quando criaste do barro a forma de um passaro com Minha permissao, e sopraste nele, e se tornou um passaro com Minha permissao. E curaste o cego de nascenca e o leproso com Minha permissao. E quando ressuscitaste os mortos com Minha permissao.',
        context: 'Neste trecho, Allah fala diretamente a Jesus no Dia do Julgamento, relembrando os milagres concedidos. O tom e de honra e reconhecimento. A "mesa do ceu" que os discipulos pedem (5:112-115) ecoa temas da multiplicacao dos paes e da Ultima Ceia nos Evangelhos.'
      }
    ],
    convergenceNotes:
      'O Alcorao nao apenas menciona os milagres de Jesus — os confirma, os detalha e os apresenta como evidencia do status especial de Jesus diante de Deus. Curar cegos de nascenca, curar leprosos, ressuscitar mortos: esses milagres aparecem em ambos os textos como marcas de autenticidade da missao de Jesus.\n\nAmbas as escrituras tratam os milagres como "sinais" (ayat no Alcorao, semeion no Evangelho de Joao) — nao como espetaculo, mas como evidencia que aponta para algo maior. Na Biblia, os milagres apontam para a identidade de Jesus como o enviado de Deus. No Alcorao, apontam para o poder de Allah e a autenticidade de Jesus como profeta.\n\nJesus e, no Islam, um dos cinco profetas de maior resolucao — os Ulul Azm — ao lado de Noe, Abraao, Moises e Muhammad. Seus milagres sao parte do argumento pelo qual o Alcorao o distingue de outros profetas como figura singular.',
    divergenceNotes:
      'A diferenca central esta na fonte e no significado dos milagres. Nos Evangelhos, Jesus age com autoridade propria: "Lazaro, vem para fora" — sem pedir permissao, sem invocar outro nome. Em varios momentos, Jesus perdoa pecados (prerrogativa divina), acalma tempestades com uma palavra e afirma: "Eu e o Pai somos um" (Joao 10:30). Para a teologia crista, os milagres sao evidencia da divindade de Jesus.\n\nNo Alcorao, a frase "com a permissao de Allah" acompanha cada milagre. Isso nao diminui Jesus — e o enquadramento teologico islamico que distingue o agente (Jesus) da fonte do poder (Allah). Profetas anteriores tambem fizeram milagres com permissao divina: Moises abriu o mar, Salomao controlava o vento. Para o Islam, os milagres de Jesus o colocam entre os maiores profetas, mas nao acima da categoria humana.\n\nA questao de fundo e: Jesus agia com poder proprio ou com poder delegado? A resposta a essa pergunta define a fronteira entre as duas tradicoes.',
    discussionQuestion:
      'Se os milagres de Jesus sao confirmados tanto no Evangelho quanto no Alcorao, qual e a diferenca de interpretacao que cada texto da a esses sinais? O que muda — ou nao muda — sobre quem Jesus foi, dependendo de como entendemos a fonte do seu poder?'
  },

  // ──────────────────────────────────────────
  // 3. OS PROFETAS EM COMUM
  // ──────────────────────────────────────────
  {
    id: 'prophets-in-common',
    title: 'Os Profetas em Comum',
    subtitle: '25 nomes compartilhados',
    icon: 'Users',
    biblePassages: [
      {
        reference: 'Hebreus 1:1-2',
        text: 'Havendo Deus, antigamente, falado muitas vezes e de muitas maneiras aos pais pelos profetas, a nos falou-nos nestes ultimos dias pelo Filho, a quem constituiu herdeiro de tudo, por quem fez tambem o mundo.',
        context: 'O autor de Hebreus apresenta a historia biblica como uma cadeia de revelacao progressiva: Deus falou atraves de muitos profetas ao longo dos seculos, cada um com uma peca do mosaico, ate que a revelacao culminou em Jesus. Essa visao de continuidade profetica e central para ambas as tradicoes.'
      },
      {
        reference: 'Tiago 5:10-11',
        text: 'Irmaos, tomai como exemplo de sofrimento e paciencia os profetas que falaram em nome do Senhor. Eis que temos por bem-aventurados os que foram pacientes. Ouvistes qual foi a paciencia de Jo e vistes o fim que o Senhor lhe deu; porque o Senhor e muito misericordioso e compassivo.',
        context: 'Tiago evoca a galeria de profetas como modelos de paciencia e perseveranca — a mesma funcao que eles exercem no Alcorao, onde as historias dos profetas (Qisas al-Anbiya) servem de consolo e instrucao para a comunidade de crentes.'
      },
      {
        reference: 'Lucas 11:49-51',
        text: 'Por isso, a sabedoria de Deus tambem disse: Enviar-lhes-ei profetas e apostolos; e a alguns deles matarao e a outros perseguirao, para que desta geracao se peca o sangue de todos os profetas derramado desde a fundacao do mundo, desde o sangue de Abel ate ao sangue de Zacarias, que foi morto entre o altar e o templo.',
        context: 'Jesus reconhece a longa linhagem de profetas enviados por Deus ao longo da historia, muitos dos quais foram rejeitados e perseguidos. Essa narrativa de profetas perseguidos e compartilhada com o Alcorao.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Baqarah 2:136',
        text: 'Dizei: Cremos em Allah e no que foi revelado a nos, e no que foi revelado a Abraao, Ismael, Isaque, Jaco e as tribos, e no que foi dado a Moises e Jesus, e no que foi dado aos profetas de seu Senhor. Nao fazemos distincao entre nenhum deles, e a Ele nos submetemos.',
        context: 'Este versiculo e fundamental para entender a posicao islamica: a fe nos profetas anteriores nao e opcional — e obrigacao. O muculmano que nega Moises ou Jesus nao e muculmano. A expressao "nao fazemos distincao entre nenhum deles" refere-se a aceitar todos como verdadeiros, nao a iguala-los em papel.'
      },
      {
        reference: 'Surah Al-Anbiya 21:25',
        text: 'E nao enviamos antes de ti nenhum mensageiro sem que lhe revelassemos: Nao ha divindade alem de Mim; portanto, adorai-Me.',
        context: 'A Surah Al-Anbiya (Os Profetas) dedica-se inteiramente a narrar historias de profetas. Este versiculo sintetiza a tese central: cada profeta, em cada epoca, trouxe a mesma mensagem fundamental — o monoteismo. O Islam se entende nao como religiao nova, mas como restauracao dessa mensagem original.'
      }
    ],
    convergenceNotes:
      'A Biblia e o Alcorao compartilham uma galeria extraordinaria de figuras profeticas. Dos 25 profetas mencionados pelo nome no Alcorao, todos aparecem nas escrituras judaico-cristas: Adao (Adam), Noe (Nuh), Abraao (Ibrahim), Ismael (Ismail), Isaque (Ishaq), Jaco (Yaqub), Jose (Yusuf), Moises (Musa), Aarao (Harun), Davi (Dawud), Salomao (Suleiman), Jo (Ayyub), Jonas (Yunus), Elias (Ilyas), Eliseu (Al-Yasa), Zacarias (Zakariyya), Joao Batista (Yahya) e Jesus (Isa), entre outros.\n\nAmbas as tradicoes entendem esses profetas como homens escolhidos por Deus para transmitir Sua mensagem a humanidade. Em ambas, os profetas enfrentam rejeicao, perseguicao e sofrimento — e perseveram. Em ambas, as historias dos profetas servem como exemplo moral e espiritual para os crentes de todas as epocas.\n\nPara o muculmano, acreditar em todos os profetas — incluindo os que vieram antes de Muhammad — e artigo de fe obrigatorio. Negar qualquer profeta e negar a propria fe. Esse ponto de convergencia e mais profundo do que muitos imaginam: as duas tradicoes compartilham nao apenas um Deus, mas toda uma linhagem de mensageiros.',
    divergenceNotes:
      'A principal divergencia esta na questao de onde a cadeia profetica termina. Para o Cristianismo, Jesus e o cumprimento e ponto culminante de toda a profecia: "Havendo Deus falado pelos profetas, a nos falou pelo Filho." A revelacao e progressiva e atinge seu apice na pessoa de Cristo. Nao ha necessidade de outro profeta apos ele.\n\nPara o Islam, Jesus e um dos grandes profetas, mas nao o ultimo. Muhammad e o "Selo dos Profetas" (Khatam an-Nabiyyin, Alcorao 33:40) — aquele que completa e encerra o ciclo profetico. A mensagem dos profetas anteriores foi gradualmente distorcida ao longo do tempo, e Muhammad veio restaura-la em sua forma final e universal.\n\nAlem disso, ha diferencas no papel de cada profeta. Na Biblia, Davi e autor de Salmos e um homem segundo o coracao de Deus, mas tambem um pecador com falhas graves. No Alcorao, os profetas sao geralmente apresentados com um grau maior de protecao divina (ismah). Essa diferenca na caracterizacao dos profetas reflete visoes distintas sobre a natureza humana e a relacao entre falha e santidade.',
    discussionQuestion:
      'Se o Islam e o Cristianismo compartilham os mesmos profetas como exemplos de fe, o que isso sugere sobre a origem comum de ambas as tradicoes? Em que ponto os caminhos divergem — e essa divergencia invalida o terreno comum ou o enriquece?'
  },

  // ──────────────────────────────────────────
  // 4. MONOTEISMO
  // ──────────────────────────────────────────
  {
    id: 'monotheism',
    title: 'Monoteismo',
    subtitle: 'Um unico Deus',
    icon: 'Sun',
    biblePassages: [
      {
        reference: 'Deuteronomio 6:4-5',
        text: 'Ouve, Israel, o Senhor nosso Deus e o unico Senhor. Amaras o Senhor teu Deus com todo o teu coracao, com toda a tua alma e com toda a tua forca.',
        context: 'O Shema Israel e a declaracao de fe mais fundamental do Judaismo, recitada diariamente. Jesus a cita como o maior de todos os mandamentos. E o ponto de partida compartilhado pelas tres tradicoes abraamicas: existe um so Deus.'
      },
      {
        reference: 'Marcos 12:28-30',
        text: 'Aproximou-se dele um dos escribas e, tendo ouvido a discussao entre eles, e percebendo como lhes respondera bem, perguntou-lhe: Qual e o primeiro de todos os mandamentos? Respondeu Jesus: O primeiro e: Ouve, Israel, o Senhor nosso Deus e o unico Senhor. Amaras o Senhor teu Deus de todo o teu coracao, de toda a tua alma, de todo o teu entendimento e de toda a tua forca.',
        context: 'Quando perguntado sobre o mandamento mais importante, Jesus nao hesita: a unicidade de Deus e o amor total a Ele. Essa resposta e consistente com a teologia islamica do Tawhid — ainda que as tradicoes desenvolvam essa unicidade de maneiras distintas.'
      },
      {
        reference: 'Isaias 45:5-6',
        text: 'Eu sou o Senhor, e nao ha outro; fora de mim nao ha Deus. Eu te cingirei, ainda que nao me conhecas, para que saibam, desde o nascente do sol ate ao poente, que fora de mim nao ha outro.',
        context: 'Isaias proclama o monoteismo absoluto com uma linguagem que ecoa diretamente no Alcorao. A afirmacao "nao ha outro" alem de Deus e o nucleo compartilhado por ambas as escrituras.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Ikhlas 112:1-4',
        text: 'Diga: Ele e Allah, o Unico. Allah, o Absoluto. Nao gerou e nao foi gerado. E nao ha ninguem igual a Ele.',
        context: 'Al-Ikhlas (A Sinceridade) e considerada equivalente a um terco do Alcorao em significado. Em apenas quatro versiculos, resume toda a teologia islamica sobre Deus: unicidade absoluta, auto-suficiencia total, ausencia de geneologia divina e incomparabilidade.'
      },
      {
        reference: 'Surah Al-Baqarah 2:163',
        text: 'Vosso Deus e um Deus unico. Nao ha divindade alem Dele, o Misericordioso, o Misericordiador.',
        context: 'Este versiculo estabelece a unicidade de Deus como ponto de partida para toda a teologia e toda a etica do Alcorao. A misericordia aparece imediatamente apos a declaracao de unicidade — no Islam, o Deus unico e, antes de tudo, misericordioso.'
      }
    ],
    convergenceNotes:
      'A crenca em um unico Deus criador do universo e o alicerce mais solido que une o Cristianismo e o Islam. Ambas as tradicoes rejeitam o politeismo de forma categorica. Ambas afirmam que esse Deus unico e onisciente, onipotente, justo, misericordioso e pessoal — Ele ouve, responde e se importa com a humanidade.\n\nQuando Jesus foi perguntado sobre o mandamento mais importante, sua resposta foi o Shema Israel: "O Senhor nosso Deus e o unico Senhor." Essa declaracao e, em essencia, a mesma verdade que o muculmano proclama na Shahada: "La ilaha illallah" — nao ha divindade alem de Allah. O ponto de partida e identico.\n\nPara ambas as tradicoes, o monoteismo nao e apenas uma posicao teologica — e a base de toda a etica, de toda a adoracao e de toda a organizacao da vida. Se ha um so Deus, entao toda a humanidade pertence a Ele, e todo ser humano tem dignidade por ser criacao Dele.',
    divergenceNotes:
      'A divergencia surge quando se explora a natureza interna desse Deus unico. O Islam afirma o Tawhid absoluto: Deus e um, sem partes, sem divisoes, sem filhos e sem associados. Qualquer forma de shirk (associar algo ou alguem a Deus) e o unico pecado que Allah nao perdoa em quem morre nesse estado.\n\nO Cristianismo afirma a Trindade: Deus e um em essencia, mas existe em tres Pessoas — Pai, Filho e Espirito Santo. A doutrina foi formalizada nos Concilios de Niceia (325 d.C.) e Calcedonia (451 d.C.), mas os cristãos entendem que ela esta presente desde o Novo Testamento. A Trindade nao sao tres deuses — e uma unica natureza divina em tres expressoes pessoais.\n\nEssa e a diferenca teologica mais profunda entre as duas tradicoes, e ela e irredutivel. O Islam ve a Trindade como incompativel com o monoteismo puro. O Cristianismo ve a Trindade como a revelacao mais completa da unicidade de Deus. Nenhum dos lados pode ceder nesse ponto sem abandonar algo central a sua identidade. O respeito esta em reconhecer isso com clareza, nao em fingir que a diferenca nao existe.',
    discussionQuestion:
      'Se o maior mandamento de Jesus e amar o Deus Unico com todo o coracao, alma e forca, e se a Shahada islamica declara "nao ha divindade alem de Allah" — ate que ponto essas duas afirmacoes dizem a mesma coisa? Onde comecam a divergir, e por que essa divergencia importa?'
  },

  // ──────────────────────────────────────────
  // 5. ORACAO
  // ──────────────────────────────────────────
  {
    id: 'prayer',
    title: 'Oracao',
    subtitle: 'Conexao direta com Deus',
    icon: 'HandHeart',
    biblePassages: [
      {
        reference: 'Mateus 6:5-8',
        text: 'E, quando orardes, nao sejais como os hipocritas, pois gostam de orar em pe nas sinagogas e nas esquinas das ruas, para serem vistos pelos homens. Em verdade vos digo que ja receberam sua recompensa. Mas tu, quando orares, entra no teu quarto, fecha a porta e ora ao teu Pai, que esta em secreto; e teu Pai, que ve em secreto, te recompensara. E, orando, nao useis de vas repeticoes, como os gentios, que pensam que por muito falarem serao ouvidos. Nao vos assemelheis a eles, porque vosso Pai sabe o que vos e necessario antes que vos lho pecais.',
        context: 'Jesus ensina que a oracao autentica e sincera, humilde e direta — nao um espetaculo publico. O foco e a relacao pessoal com Deus, nao a aparencia de religiosidade. Esse ensinamento contra a oracao ostentosa ecoa no Alcorao e na tradicao islamica.'
      },
      {
        reference: 'Mateus 26:39',
        text: 'E, indo um pouco mais adiante, prostrou-se com o rosto em terra e orou, dizendo: Meu Pai, se e possivel, passa de mim este calice; todavia, nao seja como eu quero, mas como tu queres.',
        context: 'No Getsemani, Jesus ora prostrado com o rosto no chao — a mesma postura do sujud islamico. A oracao de Jesus expressa submissao total a vontade de Deus, usando linguagem que seria familiar a qualquer muculmano: "nao como eu quero, mas como tu queres" — que e, em essencia, o significado da palavra Islam (submissao).'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Baqarah 2:238',
        text: 'Observem as oracoes, especialmente a oracao do meio, e permanecam diante de Allah em devocao.',
        context: 'Este versiculo ordena a fidelidade as oracoes diarias e destaca a "oracao do meio" (geralmente identificada como a oracao da tarde, Asr) como especialmente importante. A palavra "devocao" (qunut) implica humildade silenciosa diante de Deus.'
      },
      {
        reference: 'Surah Al-Baqarah 2:186',
        text: 'E quando Meus servos te perguntarem sobre Mim — Eu sou proximo. Respondo ao chamado de quem Me chama quando Me chama. Que eles, pois, Me atendam e creiam em Mim, para que sejam guiados.',
        context: 'Este e um dos versiculos mais intimos do Alcorao. Allah fala em primeira pessoa, sem intermediario: "Eu sou proximo." A oracao no Islam nao e uma formalidade distante — e conversa direta com o Criador, que promete responder.'
      },
      {
        reference: 'Surah Qaf 50:16',
        text: 'E certamente criamos o ser humano e sabemos o que sua alma lhe sussurra. E Nos estamos mais proximos dele do que a sua veia jugular.',
        context: 'A proximidade de Deus no Islam nao e metafora abstrata — e expressa em termos fisicos intensos. Allah esta mais proximo do ser humano do que sua propria veia jugular. Essa intimidade fundamenta a oracao islamica: voce nao precisa gritar para ser ouvido por Quem esta mais perto de voce do que voce mesmo.'
      }
    ],
    convergenceNotes:
      'Ambas as tradicoes ensinam que Deus ouve a oracao individual e que a oracao transforma o crente. Tanto na Biblia quanto no Alcorao, Deus e descrito como proximo, atento e responsivo. A oracao nao e um ritual vazio — e comunicacao real com o Criador.\n\nA forma como Jesus orava — prostrando-se com o rosto no chao (Mateus 26:39) — e exatamente a postura do sujud islamico, o momento mais reverente da Salah. O cristao que observa muculmanos em oracao pode reconhecer algo profundamente familiar: a humildade fisica diante de Deus nao e estranha ao Evangelho.\n\nAlem disso, ambas as tradicoes valorizam tanto a oracao estruturada quanto a espontanea. O cristao tem a oracao liturgica e a oracao pessoal. O muculmano tem a Salah (cinco oracoes diarias com formato definido) e o Dua (suplica pessoal livre, em qualquer lingua, a qualquer hora). A arquitetura e diferente; a necessidade humana que ambas atendem e a mesma.',
    divergenceNotes:
      'As diferencas estao na estrutura e na mediacao. A Salah islamica e obrigatoria cinco vezes ao dia, em horarios especificos, com movimentos corporais definidos, voltado para a Meca, precedida de purificacao ritual (wudu). Essa estrutura nao existe no Cristianismo — onde a oracao e, na maioria das tradicoes, mais livre em forma e frequencia.\n\nTeleologicamente, o Islam rejeita qualquer mediador entre o ser humano e Allah — a oracao vai diretamente a Deus, sem intermediario. No Cristianismo, Jesus e o mediador unico: "Ninguem vem ao Pai senao por mim" (Joao 14:6). Nas tradicoes catolica e ortodoxa, santos tambem podem interceder. Para o muculmano, ir diretamente a Allah e a maxima honra; para o cristao, ir atraves de Cristo e reconhecer quem Cristo e.\n\nHa tambem uma diferenca de enfase na corporalidade. A oracao islamica e profundamente fisica — lavagem, postura, direcao, prostracao. A maioria das tradicoes cristas enfatiza mais a disposicao interior do que a forma exterior. Porem, tradicoes monasticas cristas (como as Horas Canonicas beneditinas) se aproximam muito da estrutura islamica de oracoes distribuidas ao longo do dia.',
    discussionQuestion:
      'Jesus orou prostrado com o rosto no chao no Getsemani, em submissao total a vontade de Deus. Essa imagem parece diferente ou familiar quando comparada a prostracao islamica? O que a postura do corpo comunica sobre a relacao do ser humano com Deus?'
  },

  // ──────────────────────────────────────────
  // 6. JEJUM
  // ──────────────────────────────────────────
  {
    id: 'fasting',
    title: 'Jejum',
    subtitle: 'Disciplina espiritual',
    icon: 'Moon',
    biblePassages: [
      {
        reference: 'Mateus 4:1-2',
        text: 'Entao Jesus foi levado pelo Espirito ao deserto, para ser tentado pelo diabo. E, tendo jejuado quarenta dias e quarenta noites, depois teve fome.',
        context: 'O jejum de 40 dias de Jesus no deserto e um dos episodios mais marcantes do Evangelho. Ele ecoa diretamente os 40 dias de Moises no Sinai (Exodo 34:28). O jejum aparece como preparacao espiritual para missao — nao como penitencia, mas como fortalecimento.'
      },
      {
        reference: 'Mateus 6:16-18',
        text: 'Quando jejuardes, nao vos mostreis contristados como os hipocritas, porque desfiguram o rosto para que os homens vejam que estao jejuando. Em verdade vos digo que ja receberam a sua recompensa. Tu, porem, quando jejuares, unge a cabeca e lava o rosto, para que nao parecas aos homens que jejuas, e sim ao teu Pai, que esta em secreto; e teu Pai, que ve em secreto, te recompensara.',
        context: 'Jesus nao apenas jejuou — ensinou como jejuar corretamente. O principio e claro: o jejum e entre voce e Deus, nao entre voce e os outros. Ele assume que seus seguidores jejuarao ("quando jejuardes"), nao questiona se devem.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Baqarah 2:183',
        text: 'O crentes! O jejum foi prescrito para voces, como foi prescrito para aqueles que vieram antes de voces, para que possam desenvolver a piedade.',
        context: 'Este versiculo e a base coranica do Ramadan. A expressao "como foi prescrito para aqueles que vieram antes de voces" e uma referencia direta aos jejuns das comunidades judaica e crista que precederam o Islam. O Alcorao apresenta o jejum islamico como continuacao de uma pratica antiga, nao como inovacao.'
      },
      {
        reference: 'Surah Al-Baqarah 2:185',
        text: 'O mes de Ramadan e aquele em que foi revelado o Alcorao, como guia para a humanidade e evidencia de orientacao e discernimento. Portanto, quem de voces presenciar o mes, que jejue nele. E quem estiver doente ou em viagem, que complete o numero em outros dias. Allah deseja facilidade para voces e nao deseja dificuldade.',
        context: 'O Ramadan nao e apenas abstinencia — e o mes em que o Alcorao foi revelado, o que da ao jejum uma dimensao de gratidao e celebracao. A mencao a facilidade revela um principio islamico central: a religiao nao foi feita para sobrecarregar, mas para purificar.'
      }
    ],
    convergenceNotes:
      'O jejum e uma das praticas espirituais mais antigas e universais das tradicoes abraamicas. Moises jejuou 40 dias antes de receber a Torah. Jesus jejuou 40 dias antes de iniciar seu ministerio. O Ramadan islamico prescreve 29-30 dias de jejum anual. Em todas as tres tradicoes, o jejum serve ao mesmo proposito fundamental: disciplinar o corpo para fortalecer a alma e aproximar o ser humano de Deus.\n\nO Alcorao faz referencia explicita a essa continuidade: "O jejum foi prescrito para voces, como foi prescrito para aqueles que vieram antes de voces." O Islam se ve como continuador de uma pratica que Moises e Jesus ja exerciam. O cristao que pratica a Quaresma e o muculmano que pratica o Ramadan estao, em essencia, fazendo a mesma coisa: renunciar ao conforto fisico como ato de devocao.\n\nAmbas as tradicoes tambem concordam que o jejum deve ser sincero — nao uma performance publica. Jesus condena o jejum hipocrita feito para impressionar outros. A tradicao islamica ensina que o jejum feito sem sinceridade nao passa de fome.',
    divergenceNotes:
      'As diferencas estao na estrutura e na obrigatoriedade. O jejum do Ramadan e um dos Cinco Pilares do Islam — e obrigatorio para todo muculmano adulto saudavel. Envolve abstinencia total de comida, bebida e relacoes sexuais do amanhecer ao por do sol, durante um mes inteiro. Nao ha equivalente cristao com esse nivel de rigor universal e obrigatorio.\n\nNo Cristianismo, as praticas de jejum variam muito entre as tradicoes. A Quaresma catolica e ortodoxa tem elementos de abstinencia, mas raramente envolve jejum total. A maioria das denominacoes protestantes trata o jejum como pratica pessoal voluntaria, nao como mandamento coletivo obrigatorio.\n\nHa tambem uma diferenca de enfase no proposito. O jejum islamico enfatiza taqwa (consciencia e reverencia a Deus) e solidariedade com os famintos. O jejum cristao historicamente enfatiza penitencia e preparacao espiritual. Ambos os propositos nao sao contradictorios — sao angulos diferentes da mesma realidade espiritual.',
    discussionQuestion:
      'Se o jejum e praticado por muculmanos, cristaos e judeus como forma de aproximacao a Deus, o que isso diz sobre a natureza humana e a necessidade de disciplina espiritual? O que voce ja sentiu — ou imagina que sentiria — ao praticar um periodo de abstinencia voluntaria com proposito espiritual?'
  },

  // ──────────────────────────────────────────
  // 7. CARIDADE
  // ──────────────────────────────────────────
  {
    id: 'charity',
    title: 'Caridade',
    subtitle: 'O dever de dar',
    icon: 'Heart',
    biblePassages: [
      {
        reference: 'Mateus 6:1-4',
        text: 'Guardai-vos de fazer as vossas boas obras diante dos homens, para serdes vistos por eles; de outra sorte, nao tereis recompensa junto de vosso Pai, que esta nos ceus. Quando, pois, deres esmola, nao faças tocar trombeta diante de ti, como fazem os hipocritas nas sinagogas e nas ruas, para serem glorificados pelos homens. Em verdade vos digo que ja receberam a sua recompensa. Mas, quando tu deres esmola, nao saiba a tua mao esquerda o que faz a tua mao direita, para que a tua esmola seja dada em secreto; e teu Pai, que ve em secreto, te recompensara.',
        context: 'Jesus ensina que a caridade verdadeira e discreta — feita para Deus, nao para os olhos dos outros. A imagem da "mao esquerda nao saber o que a direita faz" e uma das metaforas mais poderosas do Evangelho sobre a pureza de intencao.'
      },
      {
        reference: 'Atos 20:35',
        text: 'Em tudo vos dei o exemplo de que, trabalhando assim, e necessario socorrer os enfermos e lembrar as palavras do Senhor Jesus, que disse: Mais bem-aventurado e dar do que receber.',
        context: 'Paulo cita Jesus para estabelecer a caridade como principio central da comunidade crista. Dar nao e perda — e a forma mais elevada de participar da economia de Deus.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Baqarah 2:267',
        text: 'O crentes! Dai em caridade das boas coisas que adquiristes e do que fizemos brotar da terra para voces. E nao escolham o que ha de pior para dar, algo que voces mesmos nao aceitariam a nao ser fechando os olhos. E saibam que Allah e Auto-Suficiente, Digno de Louvor.',
        context: 'O Alcorao proibe dar em caridade aquilo que voce mesmo rejeitaria receber. A caridade islamica nao e sobre se desfazer do que sobra — e sobre dar do que e bom. Esse principio eleva o ato de dar de condescendencia a dignidade.'
      },
      {
        reference: 'Surah At-Tawbah 9:60',
        text: 'As esmolas sao apenas para os pobres, os necessitados, os que as administram, aqueles cujos coracoes precisam ser reconciliados, para libertar escravos, para os endividados, pela causa de Allah e para o viajante — um dever imposto por Allah. E Allah e Onisciente, Sabio.',
        context: 'Este versiculo define as oito categorias de beneficiarios do Zakat — a caridade obrigatoria do Islam. Nao e vago: ha destinatarios especificos, incluindo a libertacao de escravos e o alivio de dividas. O Zakat e sistema de redistribuicao, nao esmola voluntaria.'
      },
      {
        reference: 'Surah Al-Baqarah 2:271',
        text: 'Se fizerdes as caridades publicamente, e louvavel. Mas se as ocultardes e as derdes aos pobres em secreto, e melhor para voces, e apagara parte dos vossos pecados. E Allah esta bem informado do que fazeis.',
        context: 'Assim como Jesus ensina que a esmola em secreto e superior, o Alcorao afirma que a caridade oculta e melhor do que a publica. A convergencia neste ponto e notavel: ambas as escrituras valorizam a pureza de intencao acima da aparencia de generosidade.'
      }
    ],
    convergenceNotes:
      'A caridade e tratada em ambas as escrituras nao como opcao, mas como obrigacao moral do crente. Jesus diz "dai esmola" como imperativo, nao como sugestao. O Alcorao descreve o Zakat como "dever imposto por Allah." Em ambas as tradicoes, reter riqueza enquanto outros passam necessidade e condenado como falha moral grave.\n\nAmbas as escrituras tambem concordam que a caridade deve ser discreta e pura em intencao. Jesus fala da mao esquerda nao saber o que a direita faz. O Alcorao afirma que a caridade em secreto e superior a publica. A motivacao deve ser agradar a Deus, nao impressionar pessoas.\n\nAlem disso, ambas as tradicoes entendem a caridade como ato que beneficia quem da, nao apenas quem recebe. No Evangelho, "mais bem-aventurado e dar do que receber." No Alcorao, a caridade "apaga pecados." O ato de dar transforma o carater do doador tanto quanto alivia a necessidade do receptor.',
    divergenceNotes:
      'A diferenca mais significativa esta na sistematizacao. O Islam instituiu o Zakat como pilar obrigatorio — 2,5% sobre o patrimonio acumulado por um ano, com categorias definidas de beneficiarios. E um imposto religioso com regras claras, nao uma orientacao moral generica. O Cristianismo, na maioria das suas tradicoes, trata a caridade de forma mais aberta: o dizimo (10% da renda) e praticado em muitas igrejas, mas nao ha um sistema universal obrigatorio equivalente ao Zakat.\n\nHa tambem uma diferenca de base de calculo: o Zakat incide sobre o patrimonio acumulado (riqueza estagnada), nao sobre a renda. O dizimo cristao tipicamente incide sobre a renda. Isso reflete filosofias economicas ligeiramente diferentes: o Islam penaliza o acumulo de riqueza improdutiva; o Cristianismo enfatiza a generosidade a partir do que se ganha.\n\nPor fim, o Islam distingue entre Zakat (obrigatorio) e Sadaqah (caridade voluntaria, que pode ser qualquer ato de bondade — ate um sorriso). Essa distincao entre o minimo obrigatorio e o voluntario ilimitado cria uma arquitetura de generosidade com piso definido mas sem teto.',
    discussionQuestion:
      'Tanto Jesus quanto o Alcorao tratam a caridade nao como opcao generosa, mas como obrigacao moral do crente. O que muda quando voce pensa na caridade como um direito do pobre — e nao como um gesto generoso do rico?'
  },

  // ──────────────────────────────────────────
  // 8. VIDA APOS A MORTE
  // ──────────────────────────────────────────
  {
    id: 'afterlife',
    title: 'Vida Apos a Morte',
    subtitle: 'Julgamento e eternidade',
    icon: 'Infinity',
    biblePassages: [
      {
        reference: 'Apocalipse 20:12',
        text: 'E vi os mortos, grandes e pequenos, de pe diante do trono, e livros foram abertos. E abriu-se outro livro, que e o livro da vida. E os mortos foram julgados pelas coisas que estavam escritas nos livros, segundo as suas obras.',
        context: 'A visao de Joao no Apocalipse descreve um julgamento universal onde livros de registro sao abertos e cada pessoa e julgada por suas acoes. A imagem de "livros" contendo todas as obras de cada individuo encontra eco direto no conceito islamico do Livro de Acoes.'
      },
      {
        reference: 'Joao 5:28-29',
        text: 'Nao vos maravilheis disso, porque vem a hora em que todos os que estao nos sepulcros ouvirão a sua voz e sairão: os que tiverem feito o bem, para a ressurreicao da vida; e os que tiverem feito o mal, para a ressurreicao da condenacao.',
        context: 'Jesus ensina diretamente sobre a ressurreicao dos mortos e o julgamento com base nas obras. Todos — sem excecao — ressuscitarao para prestar contas. A dualidade entre ressurreicao da vida e ressurreicao da condenacao ecoa a divisao islamica entre Jannah e Jahannam.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Az-Zalzalah 99:6-8',
        text: 'Nesse dia, as pessoas sairao em grupos separados para verem suas obras. Quem tiver feito um atomo de bem, o vera. E quem tiver feito um atomo de mal, o vera.',
        context: 'Estes versiculos finais da Surah Az-Zalzalah (O Terremoto) sao dos mais citados do Alcorao. A precisao e absoluta: nem um atomo de bem ou de mal sera ignorado. Nao ha acao insignificante — tudo conta, tudo e registrado.'
      },
      {
        reference: 'Surah Al-Anbiya 21:47',
        text: 'E colocaremos as balancas da justica para o Dia da Ressurreicao, e nenhuma alma sera tratada injustamente em nada. Mesmo que seja o peso de um grao de mostarda, Nos o traremos. E bastamos como Quem faz as contas.',
        context: 'A imagem da balanca (Mizan) e central na escatologia islamica. Cada acao — boa e ma — sera pesada com precisao absoluta. A mencao ao "grao de mostarda" ecoa a linguagem de Jesus nos Evangelhos, onde a mesma semente simboliza a menor unidade de medida.'
      },
      {
        reference: 'Surah Al-Qaria 101:6-11',
        text: 'Entao, aquele cujas boas acoes pesarem mais na balanca, estara numa vida agradavel. Mas aquele cujas boas acoes forem leves na balanca, sua morada sera o abismo. E o que te faz saber o que e o abismo? Um fogo ardente.',
        context: 'A Surah Al-Qaria (A Catastrofe) descreve o Dia do Julgamento com imagens viscerais. A balanca determina o destino: as boas acoes pesando mais levam ao paraiso; o contrario leva ao fogo. A responsabilidade individual e total.'
      }
    ],
    convergenceNotes:
      'A crenca na vida apos a morte, na ressurreicao dos mortos e num julgamento final e absolutamente central tanto no Cristianismo quanto no Islam. Ambas as tradicoes afirmam que a morte nao e o fim, que cada ser humano prestara contas das suas acoes perante Deus, e que ha consequencias eternas para as escolhas feitas nesta vida.\n\nAs imagens sao notavelmente paralelas: livros de registro abertos (Apocalipse 20:12 / multiplas referencias coranicas), uma balanca de justica (metafora biblica e conceito coranico literal), a separacao entre os justos e os injustos, e a coexistencia de misericordia e justica em Deus. A Biblia fala de ceu e inferno; o Alcorao fala de Jannah (paraiso) e Jahannam (fogo). Os nomes mudam; a realidade que descrevem e convergente.\n\nAmbas as tradicoes tambem concordam que o julgamento sera absolutamente justo — nem um atomo de bem ou de mal sera ignorado (Alcorao 99:7-8), e cada obra sera revelada (Apocalipse). Ninguem escapara do julgamento, e ninguem sera tratado injustamente.',
    divergenceNotes:
      'As diferencas surgem em varios pontos. Primeiro, o papel de Jesus no julgamento: para o Cristianismo, Jesus e o juiz — "o Pai a ninguem julga, mas ao Filho confiou todo julgamento" (Joao 5:22). Para o Islam, Allah e o unico juiz, e Jesus sera uma testemunha, nao o juiz.\n\nSegundo, a questao da salvacao: no Protestantismo reformado, a salvacao e exclusivamente pela graca atraves da fe — as obras sao consequencia, nao causa. No Islam, a salvacao depende de fe e obras, com a misericordia de Allah como fator final e decisivo. O Catolicismo e a Ortodoxia se situam num espectro mais proximo da visao islamica neste ponto.\n\nTerceiro, as descricoes do paraiso diferem em detalhe. O Alcorao descreve o Jannah com riqueza sensorial: jardins com rios, sombra perpetua, companhia dos justos, e — acima de tudo — a visao de Allah. A Biblia tende a ser mais simbolica e menos detalhada sobre o ceu, enfatizando a comunhao com Deus e a ausencia de sofrimento. Ambas concordam que a presenca de Deus e o bem supremo da existencia eterna.',
    discussionQuestion:
      'A ideia de que nem "um atomo de bem" e nem "um atomo de mal" serao esquecidos no Dia do Julgamento aparece no Alcorao e ecoa na Biblia. Como essa crenca muda — ou deveria mudar — a forma como vivemos o dia a dia? O que e diferente em como cada escritura descreve o que nos espera?'
  },

  // ──────────────────────────────────────────
  // 9. MARIA / MARYAM
  // ──────────────────────────────────────────
  {
    id: 'mary',
    title: 'Maria / Maryam',
    subtitle: 'A mulher mais honrada',
    icon: 'Crown',
    biblePassages: [
      {
        reference: 'Lucas 1:28-33',
        text: 'E, entrando o anjo aonde ela estava, disse: Alegra-te, agraciada! O Senhor e contigo. Bendita es tu entre as mulheres. Ela, porem, ao ouvi-lo, turbou-se muito com aquelas palavras e ponderava que saudacao seria essa. Disse-lhe o anjo: Nao temas, Maria, pois achaste graca diante de Deus. Eis que conceberás e darás a luz um filho, a quem chamarás Jesus. Ele sera grande e sera chamado Filho do Altissimo. O Senhor Deus lhe dara o trono de Davi, seu pai. Ele reinara sobre a casa de Jaco para sempre, e o seu reino nao tera fim.',
        context: 'A Anunciacao e um dos momentos mais sagrados da narrativa crista. O anjo Gabriel saudou Maria com palavras que a distinguem de toda a humanidade: "agraciada", "bendita entre as mulheres". Na teologia crista, Maria ocupa um lugar unico — particularmente nas tradicoes catolica e ortodoxa, onde recebe titulos como Theotokos (Mae de Deus).'
      },
      {
        reference: 'Lucas 1:46-49',
        text: 'Entao disse Maria: A minha alma engrandece ao Senhor, e o meu espirito se alegra em Deus, meu Salvador, porque atentou na humildade de sua serva. Pois eis que, desde agora, todas as geracoes me chamarao bem-aventurada, porque o Poderoso me fez grandes coisas, e santo e o seu nome.',
        context: 'O Magnificat de Maria e um cantico de louvor que revela sua consciencia espiritual: ela e humilde ("atentou na humildade de sua serva"), profetica ("todas as geracoes me chamarao bem-aventurada") e centrada em Deus, nao em si mesma. Esse retrato de Maria como mulher de fe profunda e convergente com o retrato coranico.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Imran 3:42',
        text: 'E quando os anjos disseram: O Maria! Allah te escolheu e te purificou, e te escolheu acima de todas as mulheres dos mundos.',
        context: 'Este versiculo confere a Maryam o titulo mais elevado possivel: escolhida acima de todas as mulheres de todos os mundos — nao apenas de sua geracao, mas de toda a historia. Nenhuma outra mulher recebe esse titulo no Alcorao. E notavel que o Islam, frequentemente acusado de desvalorizar mulheres, tenha essa declaracao como parte do seu texto sagrado.'
      },
      {
        reference: 'Surah Maryam 19:16-26',
        text: 'E menciona no Livro a historia de Maria, quando ela se retirou de sua familia para um lugar ao oriente. E colocou um veu entre ela e os seus. Entao enviamos a ela o Nosso Espirito, que se manifestou como um ser humano perfeito. [...] E as dores do parto a levaram ao tronco de uma palmeira. Ela disse: Quem dera eu tivesse morrido antes disto e fosse completamente esquecida! Entao uma voz a chamou de baixo dela: Nao te aflijas! Teu Senhor colocou um riacho sob teus pes. E sacode o tronco da palmeira na tua direcao; cairao sobre ti tamares frescos e maduros. Come, bebe e acalma teus olhos.',
        context: 'A Surah Maryam — o unico capitulo do Alcorao nomeado em honra de uma mulher — narra o nascimento de Jesus com detalhes intimos que nao aparecem nos Evangelhos: as dores do parto, o desespero de Maria, a provisao divina da palmeira e do riacho. O Alcorao humaniza Maria sem diminui-la — mostrando sua vulnerabilidade e a resposta de Deus a ela.'
      },
      {
        reference: 'Surah At-Tahrim 66:12',
        text: 'E Maria, filha de Imran, que preservou sua castidade. Entao sopramos nela do Nosso espirito. E ela acreditou nas palavras de seu Senhor e em Seus Livros, e foi das devotas.',
        context: 'Maria e apresentada como modelo de fe: ela preservou sua pureza, aceitou o decreto divino e acreditou nas palavras de Deus. O Alcorao a cita explicitamente como exemplo para todos os crentes — homens e mulheres.'
      }
    ],
    convergenceNotes:
      'Maria (Maryam) e possivelmente a figura feminina mais reverenciada na historia da humanidade, e isso se deve ao fato de que tanto o Cristianismo quanto o Islam a honram de forma extraordinaria. Na Biblia, ela e "bendita entre as mulheres" e mae de Jesus. No Alcorao, e "escolhida acima de todas as mulheres dos mundos" e recebe o unico capitulo inteiro nomeado em honra de uma mulher.\n\nAmbas as escrituras descrevem Maria como virgem, piedosa, escolhida por Deus para uma missao unica, e mae de Jesus/Isa. Ambas narram a Anunciacao pelo anjo Gabriel/Jibril com estruturas paralelas: o anjo aparece, Maria se surpreende, questiona como sera possivel ter um filho sendo virgem, e recebe a resposta de que e decreto de Deus.\n\nO respeito por Maria transcende as fronteiras entre as duas tradicoes. O muculmano que ama Maryam e o cristao que ama Maria estao honrando a mesma mulher, com a mesma reverencia, por razoes convergentes. Ela e ponte viva entre as duas escrituras.',
    divergenceNotes:
      'A principal diferenca esta no papel teologico de Maria apos o nascimento de Jesus. Nas tradicoes catolica e ortodoxa, Maria e venerada como Theotokos (Mae de Deus), invocada como intercessora, e recebe dogmas especificos como a Imaculada Conceicao e a Assuncao. Ela tem um papel ativo na economia da salvacao.\n\nNo Islam, Maryam e a mulher mais honrada da criacao, mas nao e objeto de veneracao ou invocacao. Ela nao intercede, nao e divinizada e nao tem papel teologico apos o nascimento de Isa. Sua grandeza esta na sua humanidade: sua pureza, sua fe e sua obediencia a Allah. O Islam a honra exatamente como honra os profetas — como modelo humano de excelencia espiritual.\n\nHa tambem diferencas narrativas: o Alcorao inclui detalhes do nascimento de Jesus que nao aparecem nos Evangelhos (a palmeira, o riacho, as dores do parto sozinha) e omite outros que aparecem na Biblia (a presenca de Jose, a manjedoura, os magos). Cada texto conta a historia com enfases proprias, ambas reverentes.',
    discussionQuestion:
      'Maria e a unica mulher com um capitulo inteiro do Alcorao em seu nome — uma honra que nenhuma mulher recebe na Biblia na mesma forma. O que esse fato revela sobre como o Islam ve as mulheres e como ve Maria em particular? E como isso se compara a devocao mariana no Catolicismo?'
  },

  // ──────────────────────────────────────────
  // 10. A CRIACAO
  // ──────────────────────────────────────────
  {
    id: 'creation',
    title: 'A Criacao',
    subtitle: 'Ceus e terra em harmonia',
    icon: 'Globe',
    biblePassages: [
      {
        reference: 'Genesis 1:1-5',
        text: 'No principio, criou Deus os ceus e a terra. E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espirito de Deus se movia sobre a face das aguas. E disse Deus: Haja luz. E houve luz. E viu Deus que a luz era boa; e fez Deus separacao entre a luz e as trevas. E Deus chamou a luz de Dia, e as trevas chamou de Noite. E foi a tarde e a manha: o dia primeiro.',
        context: 'O relato da criacao em Genesis e o texto fundacional da cosmovisao judaico-crista. Deus cria pelo poder da Sua palavra ("disse Deus"), a partir do nada. Cada etapa e avaliada como "boa" — a criacao reflete o carater do Criador. A estrutura de sete dias estabelece ritmo, ordem e proposito.'
      },
      {
        reference: 'Genesis 1:26-27, 31',
        text: 'E disse Deus: Facamos o homem a nossa imagem, conforme a nossa semelhanca; e domine sobre os peixes do mar, e sobre as aves dos ceus, e sobre o gado, e sobre toda a terra, e sobre todo reptil que se move sobre a terra. E criou Deus o homem a sua imagem; a imagem de Deus o criou; homem e mulher os criou. [...] E viu Deus tudo quanto tinha feito, e eis que era muito bom.',
        context: 'A criacao do ser humano e o apice da narrativa de Genesis. A expressao "imagem de Deus" (Imago Dei) e o fundamento da dignidade humana na teologia crista: todo ser humano, independentemente de qualquer atributo, carrega a imagem do Criador.'
      }
    ],
    quranPassages: [
      {
        reference: 'Surah Al-Anbiya 21:30',
        text: 'Os descrentes nao veem que os ceus e a terra eram uma massa unica e que Nos os separamos? E fizemos da agua todas as coisas vivas. Nao creem, entao?',
        context: 'Este versiculo e notavel por descrever ceus e terra como uma massa unica que foi separada — uma linguagem que estudiosos muculmanos modernos frequentemente associam ao Big Bang. A mencao a agua como origem de toda vida viva encontra eco tanto na ciencia moderna quanto em Genesis, onde o Espirito de Deus se move sobre as aguas.'
      },
      {
        reference: 'Surah Fussilat 41:9-12',
        text: 'Diga: Negais, de fato, Aquele que criou a terra em dois periodos e Lhe atribuis iguais? Esse e o Senhor dos mundos. E colocou sobre ela montanhas firmes, e a abencoou, e determinou nela seus sustentos em quatro periodos, iguais para todos os que pedem. Entao voltou-se para o ceu, quando era fumaca, e disse a ele e a terra: Vinde, de bom grado ou a forca. Ambos disseram: Viemos de bom grado. Entao formou-os em sete ceus em dois periodos, e atribuiu a cada ceu a sua funcao.',
        context: 'O Alcorao descreve a criacao em "periodos" (ayyam, que pode significar dias ou eras), com a terra e os ceus formados em etapas. A imagem do ceu como "fumaca" antes de ser formado tem ressonancia com descricoes cientificas da nebulosa primordial. A criacao e ordenada, intencional e providente.'
      },
      {
        reference: 'Surah Al-Baqarah 2:30',
        text: 'E quando teu Senhor disse aos anjos: Vou colocar na terra um representante. Disseram: Porás nela quem causara corrupcao e derramara sangue, enquanto nos Te glorificamos com louvor e Te santificamos? Ele disse: Eu sei o que voces nao sabem.',
        context: 'A criacao do ser humano no Alcorao envolve um dialogo entre Allah e os anjos. O titulo dado ao ser humano — khalifah (representante, vice-regente) — estabelece a dignidade humana de forma semelhante ao Imago Dei biblico: o ser humano tem um papel especial na criacao, confiado por Deus.'
      }
    ],
    convergenceNotes:
      'Ambas as escrituras comecam com a mesma verdade fundamental: Deus criou tudo. Os ceus, a terra, os mares, os animais, as plantas e o ser humano — tudo existe porque Deus quis que existisse. A criacao nao e acidente cosmico; e ato intencional de um Criador pessoal, sapiente e poderoso.\n\nAmbas as narrativas apresentam a criacao como ordenada e proposital. Em Genesis, Deus cria em etapas (dias) e avalia cada uma como "boa". No Alcorao, Allah cria em periodos, com funcoes designadas para cada elemento. A criacao reflete o carater de Deus: ordem, beleza, provisao e proposito.\n\nO ser humano ocupa um lugar especial em ambas as narrativas. Na Biblia, e criado "a imagem de Deus" (Imago Dei) e recebe dominio sobre a terra. No Alcorao, e nomeado "khalifah" (representante) de Allah na terra. Em ambas as tradicoes, a dignidade humana nao vem de merito proprio — vem do Criador que escolheu dar ao ser humano um papel unico na criacao.',
    divergenceNotes:
      'As diferencas aparecem em detalhes narrativos e enfases teologicas. Genesis estrutura a criacao em seis dias seguidos de descanso no setimo (Shabat). O Alcorao menciona "seis periodos" mas rejeita explicitamente a ideia de que Deus descansou: "Criamos os ceus e a terra e o que ha entre eles em seis periodos, e nenhum cansaco Nos tocou" (50:38). Para o Islam, Deus nao precisa descansar — e impassivel e auto-suficiente.\n\nA narrativa da criacao do ser humano tambem difere em detalhes. Genesis fala de Adao criado do po da terra e Eva formada de sua costela. O Alcorao descreve Adao criado de barro e soprado com o espirito de Deus, e todos os anjos recebem ordem de se prostrar diante dele — ordem que Iblis (Satanas) recusa. A queda de Iblis por orgulho e arrogancia e mais desenvolvida no Alcorao do que no relato biblico da serpente em Genesis.\n\nPor fim, a concepcao de "imagem de Deus" (Imago Dei) nao tem equivalente direto no Islam. O Alcorao enfatiza a transcendencia absoluta de Deus: "Nada e semelhante a Ele" (42:11). A dignidade humana no Islam vem do papel de khalifah, nao de uma semelhanca ontologica com o Criador.',
    discussionQuestion:
      'Se tanto a Biblia quanto o Alcorao descrevem a criacao como ato intencional de um Deus unico e a humanidade como portadora de uma dignidade especial, o que essa visao compartilhada implica para como devemos tratar o planeta e uns aos outros? O que muda quando a existencia tem proposito em vez de ser acaso?'
  },

  // ──────────────────────────────────────────
  // 11. ANJOS
  // ──────────────────────────────────────────
  {
    id: 'angels',
    title: 'Anjos',
    subtitle: 'Mensageiros do invisivel',
    icon: 'Feather',
    biblePassages: [
      { reference: 'Hebreus 1:14', text: 'Nao sao todos eles espiritos ministradores, enviados para servir a favor daqueles que hao de herdar a salvacao?', context: 'A Biblia apresenta os anjos como seres espirituais a servico de Deus, enviados para proteger e guiar os crentes.' },
      { reference: 'Lucas 1:26-28', text: 'No sexto mes, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia chamada Nazare, a uma virgem desposada com um homem chamado Jose, da casa de Davi; o nome da virgem era Maria. Entrando onde ela estava, disse: Salve, agraciada! O Senhor e contigo.', context: 'Gabriel aparece como mensageiro divino tanto na Biblia quanto no Alcorao, anunciando a Maria o nascimento de Jesus.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Baqarah 2:285', text: 'O Mensageiro creu no que lhe foi revelado de seu Senhor, e os crentes tambem. Todos creem em Allah, em Seus anjos, em Seus livros e em Seus mensageiros.', context: 'No Islam, a crenca nos anjos e um dos seis pilares da fe — tao fundamental quanto crer em Deus.' },
      { reference: 'Surah Fatir 35:1', text: 'Louvor a Allah, Criador dos ceus e da terra, que designou os anjos como mensageiros com asas — duas, tres ou quatro. Ele acrescenta a criacao o que deseja.', context: 'O Alcorao descreve os anjos como seres de luz, criados para obedecer a Deus sem livre arbitrio.' }
    ],
    convergenceNotes: 'Ambas as escrituras concordam que os anjos sao seres criados por Deus para servi-Lo e cumprir Sua vontade. Gabriel (Jibril) aparece em ambas as tradicoes como mensageiro principal, anunciando revelacoes divinas. Os anjos servem como intermediarios entre o mundo visivel e o invisivel.',
    divergenceNotes: 'No Islam, os anjos nao possuem livre arbitrio — obedecem a Deus por natureza. O Cristianismo tem uma visao mais ampla: anjos podem escolher rebelar-se (como Lucifer). No Islam, Iblis (Satanas) nao e um anjo caido, mas um jinn que se recusou a se prostrar diante de Adao.',
    discussionQuestion: 'Se ambas as tradicoes acreditam em anjos como mensageiros de Deus, o que isso revela sobre a natureza da comunicacao divina com a humanidade?'
  },

  // ──────────────────────────────────────────
  // 12. PARAISO E INFERNO
  // ──────────────────────────────────────────
  {
    id: 'paradise-hell',
    title: 'Paraiso e Inferno',
    subtitle: 'Destino eterno',
    icon: 'Flame',
    biblePassages: [
      { reference: 'Apocalipse 21:4', text: 'E Deus limpara de seus olhos toda lagrima, e nao havera mais morte, nem pranto, nem clamor, nem dor, porque ja as primeiras coisas passaram.', context: 'A visao biblica do paraiso enfatiza a restauracao completa — ausencia de sofrimento e presenca eterna de Deus.' },
      { reference: 'Mateus 25:46', text: 'E irao estes para o castigo eterno, mas os justos, para a vida eterna.', context: 'Jesus descreve dois destinos finais: vida eterna para os justos e castigo eterno para os injustos.' }
    ],
    quranPassages: [
      { reference: 'Surah Ar-Rahman 55:46-48', text: 'E para quem teme a posicao diante de seu Senhor, havera dois jardins. Qual dos favores do vosso Senhor negareis? De ramagens abundantes.', context: 'O Alcorao descreve o Paraiso (Jannah) com imagens vividas: jardins, rios, frutas, paz eterna.' },
      { reference: 'Surah Al-Mulk 67:6-8', text: 'E para aqueles que descreram em seu Senhor, ha o castigo do Inferno. Que pessimo destino! Quando forem lancados nele, ouvirão seu bramido enquanto ferve.', context: 'O Inferno (Jahannam) no Alcorao e descrito com detalhes intensos como aviso e motivacao para a retidao.' }
    ],
    convergenceNotes: 'Ambas as escrituras afirmam a existencia de um destino eterno apos a morte, dividido entre recompensa para os justos e castigo para os injustos. O paraiso e lugar de paz, alegria e proximidade com Deus. O inferno e lugar de sofrimento e separacao.',
    divergenceNotes: 'No Cristianismo, a salvacao esta vinculada a fe em Cristo como mediador. No Islam, a salvacao depende da misericordia de Allah, das boas acoes e da submissao sincera. O conceito de intercessao existe em ambas, mas com mecanismos diferentes. Algumas correntes islamicas admitem a possibilidade de que o Inferno nao seja eterno para todos.',
    discussionQuestion: 'Se ambas as tradicoes ensinam que nossas acoes tem consequencias eternas, como isso deveria moldar nossas escolhas diarias?'
  },

  // ──────────────────────────────────────────
  // 13. LIVRE ARBITRIO
  // ──────────────────────────────────────────
  {
    id: 'free-will',
    title: 'Livre Arbitrio',
    subtitle: 'Escolha e destino',
    icon: 'Scale',
    biblePassages: [
      { reference: 'Deuteronomio 30:19', text: 'Hoje invoco os ceus e a terra como testemunhas contra voces, de que coloquei diante de voces a vida e a morte, a bencao e a maldicao. Agora escolham a vida, para que voces e seus filhos vivam.', context: 'Deus apresenta a escolha ao ser humano — o livre arbitrio como dom e responsabilidade.' },
      { reference: 'Josue 24:15', text: 'Se, porem, nao lhes agrada servir ao Senhor, escolham hoje a quem irao servir.', context: 'A capacidade de escolha e central na narrativa biblica — Deus respeita a liberdade humana.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Kahf 18:29', text: 'Dize: A verdade emana de vosso Senhor. Quem quiser, que creia; e quem quiser, que descreia.', context: 'O Alcorao afirma a liberdade de escolha em questoes de fe — ninguem e forcado a crer.' },
      { reference: 'Surah Ash-Shams 91:7-10', text: 'Pela alma e por Quem a formou, e lhe inspirou sua iniquidade e sua piedade! Bem-aventurado quem a purifica, e desventurado quem a corrompe.', context: 'A alma humana recebe tanto inclinacao para o bem quanto para o mal — a escolha define o destino.' }
    ],
    convergenceNotes: 'Ambas as escrituras apresentam o ser humano como dotado de capacidade de escolha. A decisao entre o bem e o mal e central em ambas as tradicoes. Deus oferece orientacao, mas nao forca obediencia.',
    divergenceNotes: 'O Cristianismo debate intensamente predestinacao vs. livre arbitrio (Calvino vs. Arminio). O Islam equilibra qadar (decreto divino) com livre arbitrio: Deus sabe o que escolheremos, mas nao nos forca. As escolas islamicas Al-Ashari e Mutazila divergem sobre a extensao da liberdade humana.',
    discussionQuestion: 'Se Deus sabe tudo que faremos mas nos permite escolher, como reconciliar Sua onisciencia com nossa liberdade?'
  },

  // ──────────────────────────────────────────
  // 14. REVELACAO
  // ──────────────────────────────────────────
  {
    id: 'revelation',
    title: 'Revelacao',
    subtitle: 'A Palavra de Deus aos homens',
    icon: 'BookOpen',
    biblePassages: [
      { reference: '2 Timoteo 3:16', text: 'Toda a Escritura e inspirada por Deus e util para o ensino, para a repreensao, para a correcao e para a instrucao na justica.', context: 'A Biblia se apresenta como inspirada por Deus, transmitida por meio de autores humanos ao longo de seculos.' },
      { reference: 'Hebreus 1:1-2', text: 'Havendo Deus outrora falado, muitas vezes e de muitas maneiras, aos pais, pelos profetas, nestes ultimos dias nos falou pelo Filho.', context: 'A revelacao biblica e progressiva — culminando em Jesus como a Palavra viva.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Baqarah 2:2-4', text: 'Este e o Livro sobre o qual nao ha duvida, uma orientacao para os que temem a Deus. Aqueles que creem no invisivel, observam a oracao e gastam do que lhes providenciamos.', context: 'O Alcorao se apresenta como revelacao direta e preservada de Allah, sem intermediacao humana na composicao.' },
      { reference: 'Surah Ash-Shura 42:51', text: 'Nao e dado a nenhum ser humano que Allah lhe fale, exceto por revelacao, ou detras de um veu, ou enviando um mensageiro que revela, com Sua permissao, o que Ele deseja.', context: 'O Alcorao descreve tres modos de revelacao divina: inspiracao direta, por tras de um veu, ou por anjo mensageiro.' }
    ],
    convergenceNotes: 'Ambas as tradicoes creem que Deus se comunica com a humanidade por meio de revelacao. Profetas sao os canais principais. A revelacao tem proposito pratico: guiar, corrigir e orientar.',
    divergenceNotes: 'A Biblia e vista como inspirada por Deus mas escrita por autores humanos. O Alcorao e visto como a palavra literal de Deus, ditada ao Profeta Muhammad. A Biblia acumula revelacoes ao longo de milhares de anos; o Alcorao foi revelado em 23 anos a um unico profeta. Para o Islam, Torah e Evangelho foram revelacoes verdadeiras que sofreram alteracao humana ao longo do tempo.',
    discussionQuestion: 'Se Deus quis se comunicar com a humanidade, por que usar livros em vez de uma revelacao universal e inequivoca?'
  },

  // ──────────────────────────────────────────
  // 15. PECADO E ARREPENDIMENTO
  // ──────────────────────────────────────────
  {
    id: 'sin-repentance',
    title: 'Pecado e Arrependimento',
    subtitle: 'O caminho de volta',
    icon: 'RotateCcw',
    biblePassages: [
      { reference: '1 Joao 1:8-9', text: 'Se dissermos que nao temos pecado, enganamo-nos a nos mesmos, e nao ha verdade em nos. Se confessarmos os nossos pecados, Ele e fiel e justo para nos perdoar os pecados e nos purificar de toda injustica.', context: 'O Cristianismo ensina que todos pecaram e que o perdao vem pela confissao e fe.' },
      { reference: 'Salmos 51:10', text: 'Cria em mim, o Deus, um coracao puro, e renova em mim um espirito inabalavel.', context: 'O Salmo de Davi apos seu pecado com Betseba — modelo de arrependimento genuino.' }
    ],
    quranPassages: [
      { reference: 'Surah Az-Zumar 39:53', text: 'Dize: O Meus servos que transgredistes contra vos mesmos, nao desespereis da misericordia de Allah! Allah perdoa todos os pecados. Ele e o Perdoador, o Misericordioso.', context: 'Um dos versiculos mais esperancosos do Alcorao — Allah perdoa TODOS os pecados para quem se arrepende sinceramente.' },
      { reference: 'Surah At-Tahrim 66:8', text: 'O crentes! Voltai-vos para Allah com arrependimento sincero.', context: 'Tawbah (arrependimento) no Islam e retornar a Deus com sinceridade — Deus nao apenas perdoa, mas ama quem se arrepende.' }
    ],
    convergenceNotes: 'Ambas as escrituras ensinam que o pecado e universal — todo ser humano erra. E ambas oferecem um caminho claro de volta: o arrependimento sincero. Deus e descrito como misericordioso e disposto a perdoar.',
    divergenceNotes: 'O Cristianismo tem o conceito de pecado original herdado de Adao, que requer redenção por Cristo. O Islam nao tem pecado original: Adao pecou, arrependeu-se e foi perdoado. Cada pessoa nasce pura (fitrah). No Islam, o arrependimento e direto a Deus, sem mediador. No Cristianismo, Cristo e o mediador essencial.',
    discussionQuestion: 'Se ambas as escrituras ensinam que Deus perdoa, o que impede as pessoas de buscar esse perdao?'
  },

  // ──────────────────────────────────────────
  // 16. JUSTICA
  // ──────────────────────────────────────────
  {
    id: 'justice',
    title: 'Justica',
    subtitle: 'O mandamento universal',
    icon: 'Scale',
    biblePassages: [
      { reference: 'Miqueias 6:8', text: 'Ele te declarou, o homem, o que e bom e o que o Senhor pede de ti: que pratiques a justica, ames a misericordia e andes humildemente com o teu Deus.', context: 'Um dos resumos mais concisos da etica biblica — justica, misericordia e humildade como trio inseparavel.' },
      { reference: 'Isaias 1:17', text: 'Aprendei a fazer o bem; buscai a justica, repreendei o opressor, fazei justica ao orfao, defendei a causa da viuva.', context: 'A justica biblica e ativa — proteger os vulneraveis, confrontar a opressao.' }
    ],
    quranPassages: [
      { reference: 'Surah An-Nisa 4:135', text: 'O crentes! Sede firmes na justica, testemunhas de Allah, mesmo que seja contra vos mesmos, vossos pais ou vossos parentes.', context: 'A justica no Alcorao e absoluta — mesmo contra si mesmo ou seus proprios familiares.' },
      { reference: 'Surah An-Nahl 16:90', text: 'Allah ordena a justica, a excelencia e a generosidade com os parentes, e proibe a indecencia, o reprovavel e a opressao. Ele vos aconselha para que lembreis.', context: 'Este versiculo e recitado em todo sermao de sexta-feira nas mesquitas do mundo — resume a etica islamica.' }
    ],
    convergenceNotes: 'Justica e mandamento central em ambas as escrituras. Nao e opcional ou complementar — e exigencia divina. Ambas as tradicoes vinculam justica a protecao dos vulneraveis e confronto da opressao.',
    divergenceNotes: 'A Biblia enfatiza a tensao entre justica e graca — especialmente no Novo Testamento, onde a misericordia de Deus vai alem do que a justica exige. O Alcorao equilibra justica com misericordia, mas o conceito de adl (justica) e mais legalmente estruturado, com a Sharia como sistema de implementacao.',
    discussionQuestion: 'Se ambas as escrituras colocam a justica como mandamento divino, por que sociedades religiosas frequentemente falham em pratica-la?'
  },

  // ──────────────────────────────────────────
  // 17. FAMILIA
  // ──────────────────────────────────────────
  {
    id: 'family',
    title: 'Familia',
    subtitle: 'O pilar da sociedade',
    icon: 'Home',
    biblePassages: [
      { reference: 'Efesios 6:1-4', text: 'Filhos, obedecei a vossos pais no Senhor, pois isso e justo. Honra teu pai e tua mae — que e o primeiro mandamento com promessa. E vos, pais, nao provoqueis vossos filhos a ira, mas criai-os na disciplina e na admoestacao do Senhor.', context: 'Paulo equilibra obediencia filial com responsabilidade parental — relacao de mao dupla.' },
      { reference: 'Proverbios 22:6', text: 'Instrui o menino no caminho em que deve andar, e ate quando envelhecer nao se desviara dele.', context: 'A sabedoria biblica enfatiza a educacao como investimento de longo prazo.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Isra 17:23-24', text: 'Teu Senhor decretou que nao adoreis senao a Ele, e que sejais bondosos com vossos pais. Se um deles ou ambos atingirem a velhice em vossa presenca, nao lhes digais "uff!" nem os repilais, e falai-lhes com palavras respeitosas. E baixa para eles a asa da humildade por misericordia e dize: Senhor meu, tem misericordia deles, como eles me criaram quando eu era pequeno.', context: 'Um dos textos mais emocionantes do Alcorao — respeito aos pais colocado imediatamente apos o monoteismo em importancia.' },
      { reference: 'Surah Luqman 31:14', text: 'E recomendamos ao ser humano bondade para com seus pais. Sua mae o carregou em fraqueza sobre fraqueza, e seu desmame e em dois anos. Se gratos a Mim e a vossos pais. A Mim e o retorno.', context: 'O Alcorao vincula gratidao a Deus com gratidao aos pais — as duas sao inseparaveis.' }
    ],
    convergenceNotes: 'Ambas as escrituras colocam a familia como instituicao central. Honrar pai e mae e mandamento em ambas. A educacao dos filhos e responsabilidade sagrada.',
    divergenceNotes: 'O Alcorao permite a poligamia (ate 4 esposas com condicoes estritas), enquanto o Cristianismo mainstream pratica a monogamia. As leis de heranca diferem significativamente. O Islam tem regras detalhadas de mahr (dote) e custodia que nao existem no Novo Testamento.',
    discussionQuestion: 'Se ambas as escrituras priorizam a familia, por que a estrutura familiar esta em crise em sociedades tanto cristas quanto muculmanas?'
  },

  // ──────────────────────────────────────────
  // 18. CONHECIMENTO
  // ──────────────────────────────────────────
  {
    id: 'knowledge',
    title: 'Conhecimento',
    subtitle: 'Buscar saber como adoracao',
    icon: 'GraduationCap',
    biblePassages: [
      { reference: 'Proverbios 1:7', text: 'O temor do Senhor e o principio do conhecimento, mas os loucos desprezam a sabedoria e a disciplina.', context: 'A Biblia vincula conhecimento verdadeiro ao reconhecimento de Deus como fonte.' },
      { reference: 'Oseias 4:6', text: 'O meu povo foi destruido por falta de conhecimento.', context: 'Ignorancia nao e neutra — tem consequencias destrutivas.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Alaq 96:1-5', text: 'Le! Em nome do teu Senhor que criou. Criou o ser humano de um coagulo. Le! E teu Senhor e o mais Generoso. Aquele que ensinou pela pena. Ensinou ao ser humano o que ele nao sabia.', context: 'As primeiras palavras reveladas do Alcorao sao um comando para ler e aprender — o conhecimento e o primeiro ato da revelacao.' },
      { reference: 'Surah Ta-Ha 20:114', text: 'E dize: O meu Senhor, aumenta-me em conhecimento.', context: 'A unica coisa que o Alcorao instrui Muhammad a pedir mais e conhecimento — nao riqueza, poder ou saude.' }
    ],
    convergenceNotes: 'Ambas as escrituras valorizam o conhecimento como caminho para Deus. A ignorancia e apresentada como perigosa em ambas. Aprender e ensinar sao atos de adoracao.',
    divergenceNotes: 'O Islam historicamente integrou conhecimento religioso e cientifico de forma mais explicita — a era de ouro islamica produziu avancos em medicina, matematica e astronomia como extensao da fe. O Cristianismo medieval teve periodos de tensao entre fe e ciencia (Galileu), embora tambem tenha fomentado universidades e preservado conhecimento classico.',
    discussionQuestion: 'Se ambas as escrituras valorizam o conhecimento, por que comunidades religiosas as vezes resistem a educacao e ao questionamento?'
  },

  // ──────────────────────────────────────────
  // 19. PACIENCIA
  // ──────────────────────────────────────────
  {
    id: 'patience',
    title: 'Paciencia',
    subtitle: 'A virtude suprema',
    icon: 'Hourglass',
    biblePassages: [
      { reference: 'Tiago 1:2-4', text: 'Meus irmaos, tende por motivo de toda alegria o passardes por diversas provacoes, sabendo que a prova da vossa fe produz perseveranca. Ora, a perseveranca deve ter acao perfeita, para que sejais perfeitos e completos, sem faltar em coisa alguma.', context: 'Tiago ensina que a paciencia nao e passividade — e o processo pelo qual a fe amadurece.' },
      { reference: 'Romanos 5:3-4', text: 'E nao somente isso, mas nos gloriamos tambem nas tribulacoes, sabendo que a tribulacao produz perseveranca, e a perseveranca, experiencia, e a experiencia, esperanca.', context: 'Paulo apresenta uma cadeia: sofrimento → paciencia → carater → esperanca.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Baqarah 2:153', text: 'O crentes! Buscai ajuda na paciencia e na oracao. Allah esta com os pacientes.', context: 'Sabr (paciencia) e uma das virtudes mais mencionadas no Alcorao — aparece mais de 90 vezes.' },
      { reference: 'Surah Az-Zumar 39:10', text: 'Os pacientes receberao sua recompensa sem limites.', context: 'Enquanto outras recompensas sao quantificadas no Alcorao, a recompensa pela paciencia e descrita como ilimitada.' }
    ],
    convergenceNotes: 'Ambas as escrituras apresentam a paciencia como virtude essencial e transformadora. O sofrimento nao e sem proposito — produz maturidade espiritual. Deus esta presente no meio da provacao.',
    divergenceNotes: 'O conceito islamico de sabr e mais amplo que "paciencia" — inclui perseveranca, constancia e gratidao no sofrimento. O Cristianismo enfatiza a paciencia como fruto do Espirito Santo (Galatas 5:22). Ambos concordam que a paciencia nao e resignacao passiva, mas resistencia ativa.',
    discussionQuestion: 'Se a paciencia e tao valorizada em ambas as tradicoes, por que vivemos em uma cultura de gratificacao instantanea?'
  },

  // ──────────────────────────────────────────
  // 20. MORTE E RESSURREICAO
  // ──────────────────────────────────────────
  {
    id: 'death-resurrection',
    title: 'Morte e Ressurreicao',
    subtitle: 'O retorno inevitavel',
    icon: 'Sunrise',
    biblePassages: [
      { reference: '1 Corintios 15:55-57', text: 'Onde esta, o morte, a tua vitoria? Onde esta, o morte, o teu aguilhao? O aguilhao da morte e o pecado, e a forca do pecado e a lei. Gracas a Deus, que nos da a vitoria por nosso Senhor Jesus Cristo.', context: 'Paulo celebra a vitoria sobre a morte por meio da ressurreicao de Cristo.' },
      { reference: 'Joao 11:25-26', text: 'Disse-lhe Jesus: Eu sou a ressurreicao e a vida. Quem cre em mim, ainda que morra, vivera. E todo aquele que vive e cre em mim nao morrera eternamente.', context: 'Jesus se apresenta como a propria ressurreicao — identidade e promessa fundidas.' }
    ],
    quranPassages: [
      { reference: 'Surah Al-Anbiya 21:35', text: 'Toda alma provara a morte. E vos testaremos com o mal e com o bem como provacao. E a Nos sereis retornados.', context: 'A morte no Alcorao e universal e inevitavel — e teste, nao derrota.' },
      { reference: 'Surah Ya-Sin 36:78-79', text: 'E ele Nos apresenta exemplo e esquece a propria criacao, dizendo: Quem dara vida aos ossos quando se decompuserem? Dize: Dar-lhes-a vida Aquele que os criou pela primeira vez. Ele e Conhecedor de toda criacao.', context: 'O Alcorao argumenta que Deus que criou do nada pode certamente recriar — a ressurreicao e logica, nao absurda.' }
    ],
    convergenceNotes: 'Ambas as escrituras afirmam a ressurreicao corporal e o retorno a Deus apos a morte. A morte nao e o fim. Ha um julgamento e ha consequencias eternas. A vida presente e preparacao para a eterna.',
    divergenceNotes: 'No Cristianismo, a ressurreicao de Cristo e o evento central — garantia de que todos ressuscitarao. No Islam, Jesus nao morreu na cruz — foi elevado vivo e retornara nos ultimos tempos. A ressurreicao no Islam e vinculada ao Dia do Juizo (Yawm al-Qiyamah), quando todos os mortos serao levantados para prestacao de contas diante de Allah.',
    discussionQuestion: 'Se ambas as escrituras ensinam que a morte nao e o fim, como isso deveria mudar a forma como vivemos?'
  }
]
