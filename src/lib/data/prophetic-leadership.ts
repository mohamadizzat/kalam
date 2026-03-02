// ============================================================================
// PROPHETIC LEADERSHIP — Lideranca Profetica
// 8 chapters of leadership lessons from the prophets
// Content in PT-BR, Arabic text is original Quranic Arabic
// Target: Brazilian men 20-35, business/entrepreneurship audience
// ============================================================================

export interface LeadershipLesson {
  title: string
  description: string
  quranRef: string
  quranText: string
  application: string // "Na pratica" — how to apply today
}

export interface LeadershipChapter {
  slug: string
  prophetId: string // matches /os-profetas/[slug]
  prophetName: string
  prophetArabic: string
  title: string // leadership theme title
  subtitle: string
  readingTime: number // minutes
  intro: string // 2-3 paragraphs of context
  lessons: LeadershipLesson[] // 3-5 lessons
  keyQuote: { text: string; ref: string }
  shareText: string // for share cards
}

// ============================================================================
// DATA
// ============================================================================

export const LEADERSHIP_CHAPTERS: LeadershipChapter[] = [
  // ========================================================================
  // 1. IBRAHIM — Questionar o Sistema
  // ========================================================================
  {
    slug: 'ibrahim',
    prophetId: 'ibrahim',
    prophetName: 'Ibrahim',
    prophetArabic: 'إبراهيم',
    title: 'Questionar o Sistema',
    subtitle: 'A lideranca comeca quando voce para de aceitar o que todo mundo aceita',
    readingTime: 12,
    intro: `Ibrahim cresceu numa civilizacao que fabricava idolos e os adorava. O pai dele era escultor de deuses de pedra. Todo mundo ao redor repetia o mesmo ritual, a mesma crenca, a mesma submissao cega. E Ibrahim fez algo que ninguem antes dele teve coragem de fazer: olhou para o ceu e testou. Estrela, lua, sol — cada um parecia poderoso, mas cada um desaparecia. Ele nao aceitou o primeiro objeto brilhante como resposta definitiva. Continuou descartando ate restar so o Criador.

Esse e o primeiro principio de lideranca real: questionar o sistema nao por rebeldia, mas por busca genuina da verdade. A maioria das pessoas herda crencas, habitos e modelos de negocio sem nunca perguntar "por que?" Ibrahim perguntou — e pagou caro por isso. Foi jogado no fogo pelo proprio povo. Mas saiu andando. O fogo nao o queimou porque a convicao era maior que a chama.

Lideranca nao e ocupar uma cadeira. E ter a coragem de destruir os idolos que todo mundo venera — inclusive os seus proprios. Ibrahim destruiu os idolos do templo e deixou so o maior de pe. Quando perguntaram quem tinha feito aquilo, ele respondeu com ironia afiada: "Perguntem ao grande, se e que ele pode falar." Forcou as pessoas a confrontar a absurdidade do que adoravam. Lideranca e isso: nao gritar mais alto, mas fazer a pergunta que ninguem quer responder.`,
    lessons: [
      {
        title: 'Questione autoridade com sabedoria',
        description: 'Ibrahim nao saiu gritando que todo mundo estava errado. Ele testou hipoteses. Olhou para a estrela, esperou ela sumir, descartou. Olhou para a lua, esperou ela sumir, descartou. Olhou para o sol, esperou ele sumir, descartou. So entao declarou sua conclusao. Questionar nao e ser rebelde — e ser rigoroso. O lider que questiona com metodo ganha respeito. O que questiona por ego ganha inimigos.',
        quranRef: 'Al-Anaam 6:76-79',
        quranText: 'فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ',
        application: 'Antes de aceitar qualquer "verdade" no seu mercado — "e assim que funciona", "todo mundo faz assim", "sempre foi desse jeito" — teste. Pegue a premissa, coloque sob pressao, veja se sobrevive. O empreendedor que questiona premissas encontra oportunidades que o conformista nunca ve. Questione fornecedores, questione processos, questione ate seu proprio modelo de negocio. Mas questione com dados, nao com opiniao.',
      },
      {
        title: 'Esteja disposto a ficar sozinho',
        description: 'Ibrahim ficou contra toda a civilizacao. Pai, povo, sacerdotes, governo — todos contra ele. E ele nao recuou. O Alcorao o chama de "ummah" — uma nacao inteira em si mesmo. Um unico homem com tanta convicao que equivalia a um povo. Na lideranca, existe um momento em que voce enxerga algo que ninguem mais enxerga. Se voce esperar validacao pra agir, o momento passa. Os maiores movimentos da historia comecaram com uma pessoa que disse "nao" quando todo mundo dizia "sim".',
        quranRef: 'An-Nahl 16:120',
        quranText: 'إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً قَانِتًا لِلَّهِ حَنِيفًا وَلَمْ يَكُ مِنَ الْمُشْرِكِينَ',
        application: 'Se a sua estrategia de negocio faz sentido pra voce e voce tem dados que sustentam, nao mude porque o mercado ri. O mercado riu de Ibrahim construindo um argumento contra pedras. Riu de quem vendeu online em 2005. Riu do cara que abriu loja no TikTok em 2020. Se voce espera consenso pra agir, voce ja perdeu. Construa convicao com dados, e depois aguente a solidao da execucao.',
      },
      {
        title: 'Esteja disposto a sacrificar',
        description: 'Deus pediu a Ibrahim que sacrificasse o proprio filho. Ibrahim nao questionou, nao negociou — obedeceu. Mas o Alcorao mostra um detalhe crucial: ele consultou o filho. "O meu filho, vejo em sonho que te sacrifico. Que opinas?" E o filho respondeu: "Faze o que te e ordenado." A disposicao de sacrificar o que voce mais ama pelo que voce acredita e o teste definitivo de lideranca. Nao e sobre perder — e sobre provar que sua missao e maior que seu conforto.',
        quranRef: 'As-Saffat 37:102',
        quranText: 'قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ',
        application: 'Toda grande construcao exige sacrificio real. Nao e frase de Instagram — e decisao pratica. Sacrificar o salario pra reinvestir. Sacrificar o final de semana pra entregar o projeto. Sacrificar o ego pra pedir desculpa quando errou. O lider que nao esta disposto a perder algo grande nunca ganha algo maior. Mas atencao: sacrificio sem estrategia e autodestruicao. Ibrahim sacrificou com proposito, nao com desespero.',
      },
      {
        title: 'Construa do zero quando necessario',
        description: 'Depois do sacrificio, Ibrahim e Ismail fizeram algo que a Biblia nao registra: construiram juntos os alicerces da Kaaba em Meca. Nao reformaram um templo existente. Nao adaptaram uma estrutura antiga. Ergueram do zero, pedra por pedra, no meio do deserto, sem audiencia, sem patrocinio, sem validacao do mercado. As vezes a unica opcao e comecar do nada. E tudo bem. A Kaaba comecou como pedras empilhadas por duas pessoas no deserto. Hoje, milhoes circundam ela todo ano.',
        quranRef: 'Al-Baqarah 2:127',
        quranText: 'وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا',
        application: 'Quando o sistema nao funciona, nao tente consertar — construa outro. Se o modelo de negocio ta quebrado, nao coloque band-aid: redesenhe. Se o time ta disfuncional, nao faca mais reuniao: reconstrua a cultura. Ibrahim nao tentou reformar os templos dos idolos. Ele destruiu e construiu algo novo. As vezes, comecar do zero e mais rapido do que tentar consertar o que nunca funcionou.',
      },
    ],
    keyQuote: {
      text: 'Quando a noite caiu sobre ele, viu uma estrela e disse: Este e meu Senhor. Mas quando ela se pos, disse: Nao amo os que se poem.',
      ref: 'Al-Anaam 6:76',
    },
    shareText: 'Ibrahim ensinou: questione tudo, fique sozinho se necessario, e construa do zero quando o sistema nao funciona. kalambrasil.com/lideranca-profetica/ibrahim',
  },

  // ========================================================================
  // 2. YUSUF — Da Prisao ao Palacio
  // ========================================================================
  {
    slug: 'yusuf',
    prophetId: 'yusuf',
    prophetName: 'Yusuf',
    prophetArabic: 'يوسف',
    title: 'Da Prisao ao Palacio',
    subtitle: 'Resiliencia como estrategia: como transformar cada derrota em degrau',
    readingTime: 14,
    intro: `Yusuf foi jogado num poco pelos proprios irmaos quando era crianca. Vendido como escravo por algumas moedas. Comprado por um ministro egipcio. Assediado pela esposa do patrao. Preso injustamente por anos. E quando saiu, nao saiu como vitima — saiu como o homem mais poderoso do Egito depois do farao. A historia de Yusuf nao e sobre sorte. E sobre uma mentalidade que recusa ser definida pela circunstancia.

Em cada fase da queda, Yusuf fez algo que a maioria das pessoas nao faz: exceleu no lugar onde estava. Na casa de Al-Aziz, ele se tornou o melhor administrador. Na prisao, ele se tornou referencia — os presos vinham pedir que interpretasse seus sonhos. Ele nao ficou esperando o "momento certo" pra ser bom. Ele foi bom onde estava, com o que tinha, agora. E quando a oportunidade veio, ele ja estava preparado.

O Alcorao chama a surata de Yusuf de "Ahsan al-Qasas" — a mais bela das historias. E a unica surata que conta uma narrativa completa do inicio ao fim, sem interrupcao. Porque a jornada de Yusuf e o modelo completo: traicao, solidao, tentacao, paciencia, estrategia, poder, e finalmente, perdao. Nao e autoajuda. E o blueprint mais antigo de lideranca resiliente ja escrito.`,
    lessons: [
      {
        title: 'Use a adversidade como treinamento',
        description: 'O poco nao foi o fim de Yusuf — foi o comeco do treinamento. Na casa de Al-Aziz, aprendeu administracao. Na prisao, aprendeu psicologia humana e construiu reputacao. Cada "desgraca" era, na verdade, uma sala de aula. O Alcorao diz que Deus "estabeleceu Yusuf na terra" — mas o caminho ate la foi poco, escravidao, calúnia e prisao. Adversidade nao e interrupcao do plano. E parte dele.',
        quranRef: 'Yusuf 12:21',
        quranText: 'وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِي الْأَرْضِ وَلِنُعَلِّمَهُ مِن تَأْوِيلِ الْأَحَادِيثِ',
        application: 'Quando voce perde um cliente grande, um socio sai, ou o mercado vira contra voce — nao entre em modo vitima. Entre em modo aprendizado. O que essa situacao esta te ensinando? Que habilidade voce esta sendo forcado a desenvolver? Yusuf aprendeu gestao sendo escravo e leitura de pessoas sendo prisioneiro. O lugar onde voce esta nao define quem voce e — o que voce faz com esse lugar define.',
      },
      {
        title: 'Excele onde voce esta',
        description: 'Yusuf nao reclamou na casa de Al-Aziz esperando algo melhor. Ele se tornou o melhor administrador que aquela casa ja viu. Na prisao, nao ficou num canto esperando ser solto. Tornou-se referencia para os outros presos. Quando o farao precisou de alguem competente, o nome de Yusuf ja circulava. Excelencia no lugar "errado" e a estrategia mais poderosa de posicionamento. Quem brilha no escuro e visto de mais longe.',
        quranRef: 'Yusuf 12:36-37',
        quranText: 'قَالَ لَا يَأْتِيكُمَا طَعَامٌ تُرْزَقَانِهِ إِلَّا نَبَّأْتُكُمَا بِتَأْوِيلِهِ قَبْلَ أَن يَأْتِيَكُمَا',
        application: 'Nao espere o emprego perfeito, o investimento ideal, ou o cliente dos sonhos pra comecar a entregar com excelencia. Faca o melhor trabalho possivel no lugar que voce esta agora. O estagiario que age como CEO e promovido. O freelancer que entrega como agencia ganha contrato. A excelencia no anonimato constroi a reputacao que te lanca quando a porta abre.',
      },
      {
        title: 'Paciencia estrategica',
        description: 'Yusuf ficou anos na prisao. O copeiro do farao, que prometeu menciona-lo, esqueceu. "E Satanas fez com que ele esquecesse de menciona-lo ao seu senhor, e Yusuf permaneceu na prisao por alguns anos." Yusuf nao forcou a saida. Nao manipulou. Esperou. Mas nao foi paciencia passiva — foi paciencia estrategica. Ele continuou entregando valor. Quando o momento veio, veio grande: o farao em pessoa o chamou.',
        quranRef: 'Yusuf 12:42',
        quranText: 'فَأَنسَاهُ الشَّيْطَانُ ذِكْرَ رَبِّهِ فَلَبِثَ فِي السِّجْنِ بِضْعَ سِنِينَ',
        application: 'No empreendedorismo, existe uma diferenca enorme entre desistir cedo demais e insistir burro demais. Paciencia estrategica e continuar construindo mesmo quando o resultado nao aparece — mas continuar construindo com inteligencia. Nao e esperar sentado. E manter a qualidade alta, a reputacao limpa, e a competencia afiada pra quando a oportunidade bater na porta voce estar pronto. O timing e de Deus. A preparacao e sua.',
      },
      {
        title: 'Perdoe a partir da forca, nao da fraqueza',
        description: 'Quando os irmaos de Yusuf vieram ao Egito desesperados por comida, ele tinha todo o poder pra se vingar. Era ministro. Eles nao o reconheceram. Ele poderia ter destruido a vida de cada um. Em vez disso, disse: "Nao ha censura sobre vos hoje. Que Deus vos perdoe. Ele e o mais misericordioso dos misericordiosos." Yusuf perdoou nao porque era fraco — perdoou porque era forte o suficiente pra nao precisar de vinganca. Perdao vindo do poder e a forma mais elevada de lideranca.',
        quranRef: 'Yusuf 12:92',
        quranText: 'قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
        application: 'Quando voce cresce e alguem que te prejudicou no passado precisa de voce — nao use o poder pra se vingar. Use pra demonstrar quem voce se tornou. O socio que te traiu e agora precisa de referencia. O cliente que te trocou e agora quer voltar. O ex-chefe que te demitiu e agora pede consultoria. Perdoe, ajude se puder, e siga em frente. Vinganca consome energia que deveria ir pra construcao.',
      },
    ],
    keyQuote: {
      text: 'Nao ha censura sobre vos hoje. Que Deus vos perdoe. Ele e o mais misericordioso dos misericordiosos.',
      ref: 'Yusuf 12:92',
    },
    shareText: 'Yusuf ensinou: excele onde voce esta, tenha paciencia estrategica, e perdoe a partir da forca — nunca da fraqueza. kalambrasil.com/lideranca-profetica/yusuf',
  },

  // ========================================================================
  // 3. MUSA — Lideranca Contra a Tirania
  // ========================================================================
  {
    slug: 'musa',
    prophetId: 'musa',
    prophetName: 'Musa',
    prophetArabic: 'موسى',
    title: 'Lideranca Contra a Tirania',
    subtitle: 'Como confrontar o poder quando o poder e que esta errado',
    readingTime: 13,
    intro: `Musa e o profeta mais mencionado no Alcorao — 136 vezes. Mais do que Muhammad. Mais do que qualquer outro. Porque a historia de Musa e a historia de todo ser humano que precisa enfrentar um sistema maior do que ele. Um bebe colocado num cesto no Nilo, criado dentro do palacio do homem que escravizava seu povo, e depois enviado de volta pra confrontar esse mesmo homem. A ironia e brutal: o Farao financiou a criacao do proprio inimigo.

Musa nao era o lider perfeito do manual. Ele gaguejava. Matou um homem por impulso. Fugiu por medo. Quando Deus o chamou, a primeira reacao dele nao foi "estou pronto" — foi uma lista de insegurancas. "Meu peito se aperta. Minha lingua nao se solta. E eles tem contra mim uma acusacao de crime." Musa nao se voluntariou. Foi convocado. E aceitou mesmo com medo.

Essa e a lideranca real: nao e a ausencia de medo, e a decisao de agir apesar dele. Musa pediu a Deus que mandasse Harun, seu irmao, como apoio — reconhecendo publicamente que sozinho nao conseguiria. O lider que admite fraqueza e busca complementariedade e mais forte do que o que finge ser invencivel. Musa confrontou o Farao nao com exercito, mas com verdade. E a verdade ganhou.`,
    lessons: [
      {
        title: 'Fale a verdade ao poder',
        description: 'Musa entrou no palacio do homem mais poderoso da terra e disse: "Sou mensageiro do Senhor dos mundos. Liberta os Filhos de Israel." Sem exercito atras dele. Sem aliados politicos. Sem plano B imediato. So a verdade. O Farao riu, ameacou, lembrou que tinha criado Musa na propria casa. Musa nao recuou. Falar a verdade ao poder nao exige forca bruta — exige convicao absoluta de que o que voce diz e verdade.',
        quranRef: 'Ash-Shuara 26:16-17',
        quranText: 'فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ',
        application: 'No ambiente corporativo, na sociedade, na familia — existe sempre um "farao". Um poder que se beneficia do status quo e nao quer mudanca. O lider real nao fica calado porque tem medo de perder posicao. Se o processo ta errado, fala. Se o produto ta prejudicando alguem, fala. Se o socio ta agindo de ma fe, fala. Fale com dados, fale com respeito, mas fale. Silencio diante da injustica e cumplicidade.',
      },
      {
        title: 'Abrace suas imperfeicoes',
        description: 'Musa gaguejava. Quando Deus o escolheu, ele nao disse "obrigado pela honra" — ele disse "minha lingua nao e solta, envia Harun." Deus nao curou a gagueira de Musa. Deus enviou Harun como apoio. A imperfeicao nao foi removida — foi compensada. Musa liderou a libertacao de um povo inteiro com uma fala imperfeita. A licao e clara: suas fraquezas nao te desqualificam. Elas te forcam a construir times que compensam o que voce nao tem.',
        quranRef: 'Ta-Ha 20:25-28',
        quranText: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
        application: 'Para de esperar ser perfeito pra liderar. Voce gagueja em apresentacao? Leve alguem que fala bem. Voce e ruim com numeros? Contrate alguem de financas. Voce e pessimo em gestao de pessoas? Traga um lider de RH. A inseguranca so vira fraqueza quando voce tenta esconder ela em vez de compensar. O CEO que contrata gente melhor que ele em areas especificas constroi imperio. O que tenta ser bom em tudo constroi burnout.',
      },
      {
        title: 'Delegue com inteligencia',
        description: 'Musa pediu a Deus: "E da-me um auxiliar da minha familia — Harun, meu irmao. Fortalece-me com ele e faze-o participar da minha missao." Musa nao delegou por preguica. Delegou porque entendia que a missao era maior do que ele. Harun nao era substituto — era complemento. Juntos, eles tinham o que nenhum dos dois tinha sozinho. Delegacao inteligente nao e jogar trabalho pra outro. E reconhecer que a missao precisa de mais do que voce pode oferecer.',
        quranRef: 'Ta-Ha 20:29-32',
        quranText: 'وَاجْعَل لِّي وَزِيرًا مِّنْ أَهْلِي هَارُونَ أَخِي اشْدُدْ بِهِ أَزْرِي وَأَشْرِكْهُ فِي أَمْرِي',
        application: 'Quando voce contrata ou forma um time, nao busque clones de voce mesmo. Busque complementos. Se voce e visionario, traga um executor. Se voce e executor, traga um estrategista. Musa era coragem pura — Harun era diplomacia. Juntos, enfrentaram o Farao. O empreendedor solo que tenta fazer tudo sozinho nao e heroico — e ineficiente. Delegue o que voce faz mal pra quem faz bem. E foque no que so voce pode fazer.',
      },
      {
        title: 'Mantenha o curso apesar dos contratempos',
        description: 'Depois de sair do Egito, o povo de Musa reclamou. Com sede, com fome, querendo voltar pro Egito. "Estávamos melhor como escravos!" Musa ouviu, pediu a Deus, Deus proveu — e o povo reclamou de novo. E de novo. E de novo. Quarenta anos no deserto com gente que nao confiava nele. Musa nao desistiu. O lider que so funciona quando o time esta motivado nao e lider — e refem do humor alheio.',
        quranRef: 'Al-Baqarah 2:60',
        quranText: 'وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ',
        application: 'O time vai reclamar. O mercado vai mudar. Os resultados vao demorar. As pessoas que voce mais ajudou vao ser as primeiras a criticar. Isso nao e excecao — e regra. O lider que mantem o rumo quando tudo conspira contra a jornada e o lider que chega. Nao confunda resistencia com paciencia cega: ajuste a rota se os dados pedirem. Mas nao mude de direcao porque alguem reclamou. Musa andou 40 anos no deserto. O destino era o mesmo do primeiro dia.',
      },
    ],
    keyQuote: {
      text: 'Disse: Senhor, expande meu peito, facilita minha missao, desata o no da minha lingua para que entendam minha fala.',
      ref: 'Ta-Ha 20:25-28',
    },
    shareText: 'Musa ensinou: fale a verdade ao poder, abrace suas imperfeicoes, delegue com inteligencia e mantenha o curso mesmo quando ninguem acredita. kalambrasil.com/lideranca-profetica/musa',
  },

  // ========================================================================
  // 4. ISSA — Influencia Sem Poder
  // ========================================================================
  {
    slug: 'issa',
    prophetId: 'issa',
    prophetName: 'Issa',
    prophetArabic: 'عيسى',
    title: 'Influencia Sem Poder',
    subtitle: 'O modelo de lideranca servil: como mover montanhas sem cargo nem titulo',
    readingTime: 11,
    intro: `Issa nao teve exercito. Nao teve cargo politico. Nao teve riqueza material. Nao teve sequer uma casa fixa — o Alcorao o descreve como um servo de Deus que andava entre as pessoas curando, ensinando e alimentando. E mesmo sem nenhuma forma convencional de poder, Issa influenciou mais seres humanos do que qualquer rei, general ou CEO da historia. Dois bilhoes de cristaos e um bilhao e meio de muculmanos o reverenciam — um homem que nunca ocupou um trono.

O Alcorao chama Issa de "Kalimatullah" — a Palavra de Deus — e "Ruh min Allah" — Espirito de Deus. Titulos que nenhum outro profeta recebe. Mas o proprio Issa, segundo o texto coranico, nunca usou esses titulos pra se exaltar. Quando Deus perguntou se ele havia dito aos homens que o adorassem, Issa respondeu: "Gloria a Ti! Nao me cabe dizer o que nao me pertence." Um homem com os titulos mais elevados e a postura mais humilde.

Esse e o paradoxo da lideranca servil: quanto menos voce busca poder, mais influencia voce ganha. Issa curava cegos, ressuscitava mortos, e alimentava multidoes — e depois seguia caminhando. Nao ficava cobrando gratidao. Nao montava estrutura pra capitalizar os milagres. Entregava valor e seguia em frente. O mundo inteiro o seguiu nao por obrigacao, mas por admiracao. A influencia mais poderosa e a que nao pede nada em troca.`,
    lessons: [
      {
        title: 'Lidere pelo exemplo, nao pelo discurso',
        description: 'Issa nao deu palestras sobre compaixao — ele curou. Nao fez discurso sobre humildade — ele lavou pes. Nao escreveu livro sobre fe — ele viveu. O Alcorao narra seus milagres nao como demonstracao de poder, mas como demonstracao de servico. Curou cegos, leprosos, e ressuscitou mortos "com a permissao de Deus." Cada milagre era um ato de servico, nao de exibicao. O lider que faz e mais respeitado do que o lider que fala.',
        quranRef: 'Al-Imran 3:49',
        quranText: 'وَأُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ وَأُحْيِي الْمَوْتَىٰ بِإِذْنِ اللَّهِ',
        application: 'Para de postar sobre produtividade e va produzir. Para de falar sobre lideranca e va liderar. O mercado esta saturado de gente que ensina o que nao faz. Se voce quer que seu time trabalhe duro, chegue primeiro e saia por ultimo. Se voce quer que seus clientes confiem, entregue mais do que prometeu. Issa curou pessoas — nao vendeu curso sobre cura. Acao fala mais alto que qualquer copy.',
      },
      {
        title: 'Sirva antes de liderar',
        description: 'A mesa de Issa nao era mesa de negociacao — era mesa de comida. Quando os discipulos pediram que Deus descesse uma mesa do ceu, Issa orou e a mesa veio. Ele alimentou antes de pedir qualquer coisa em troca. Na tradicao islamica e crista, Issa e o arquetipo do servidor: cuida primeiro, lidera depois. A autoridade moral de Issa nao vinha de titulo — vinha do fato de que todo mundo ao redor dele tinha sido servido por ele.',
        quranRef: 'Al-Maidah 5:114',
        quranText: 'قَالَ عِيسَى ابْنُ مَرْيَمَ اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ',
        application: 'Antes de cobrar lealdade do time, entregue valor pro time. Antes de pedir indicacao do cliente, resolva o problema do cliente. Antes de pedir follow do publico, poste conteudo que realmente mude a vida de alguem. O servidor lidera porque as pessoas querem seguir quem cuida delas. O autoritario lidera ate as pessoas encontrarem alternativa. Sirva primeiro, sempre.',
      },
      {
        title: 'Humildade como forca',
        description: 'Quando Deus perguntar a Issa no Dia do Juizo se ele disse aos homens que o adorassem, Issa respondera: "Gloria a Ti! Nao me cabe dizer o que nao me pertence. Se eu tivesse dito, Tu o saberias." Um homem chamado de Palavra de Deus e Espirito de Deus — e que ainda assim se recusa a aceitar honra que nao lhe pertence. Humildade real nao e se diminuir. E conhecer exatamente sua posicao e nao ultrapassar. E aceitar a grandeza sem se confundir com ela.',
        quranRef: 'Al-Maidah 5:116',
        quranText: 'سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ',
        application: 'Quando o projeto deu certo, credite o time. Quando o resultado veio, credite o processo. Quando o cliente elogiou, credite a entrega. O CEO que puxa o holofote pra si mesmo nao constroi cultura — constroi culto de personalidade. E culto de personalidade morre quando a pessoa morre. Sistema construido com humildade sobrevive ao fundador. Seja Issa, nao Farao.',
      },
      {
        title: 'Grupos pequenos mudam o mundo',
        description: 'Issa nao tinha milhoes de seguidores. Tinha doze discipulos. Doze pessoas comprometidas mudaram a historia humana mais do que exercitos de milhoes. O Alcorao narra que Issa perguntou: "Quem serao meus auxiliares na causa de Deus?" E os discipulos responderam: "Nos somos os auxiliares de Deus." Nao era uma multidao. Era um punhado de pessoas convictas. Profundidade de conexao supera largura de audiencia em qualquer metrica que importa.',
        quranRef: 'As-Saff 61:14',
        quranText: 'قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ',
        application: 'Pare de obsessionar com numero de seguidores, views, e curtidas. Busque 12 pessoas que realmente acreditam no que voce faz. 12 clientes fieis valem mais que 12 mil curiosos. 12 membros de time comprometidos constroem mais do que 120 funcionarios desengajados. Construa profundidade, nao largura. Issa mudou o mundo com 12. Voce nao precisa de mais do que isso pra comecar.',
      },
    ],
    keyQuote: {
      text: 'Gloria a Ti! Nao me cabe dizer o que nao me pertence.',
      ref: 'Al-Maidah 5:116',
    },
    shareText: 'Issa ensinou: sirva antes de liderar, lidere pelo exemplo, e lembre que 12 pessoas comprometidas mudam mais do que 12 mil curiosos. kalambrasil.com/lideranca-profetica/issa',
  },

  // ========================================================================
  // 5. MUHAMMAD — O CEO dos Profetas
  // ========================================================================
  {
    slug: 'muhammad',
    prophetId: 'muhammad',
    prophetName: 'Muhammad ﷺ',
    prophetArabic: 'محمد',
    title: 'O CEO dos Profetas',
    subtitle: 'Estrategista, negociador, construtor de estado. O modelo de lideranca mais completo ja registrado',
    readingTime: 16,
    intro: `Muhammad nao era apenas um profeta. Era um estrategista militar que nunca perdeu uma campanha defensiva. Um negociador que transformou inimigos em aliados. Um legislador que construiu um estado funcional em menos de uma decada. Um lider comunitario que resolvia disputas entre vizinhos. Um marido que costurava as proprias roupas e lavava a propria louca. O escopo da lideranca de Muhammad nao tem paralelo na historia: nenhum outro ser humano liderou simultaneamente em tantas dimensoes com tanto sucesso mensuravel.

Aos 40 anos, ele era um comerciante respeitado em Meca — conhecido como "Al-Amin" (o confiavel) e "As-Sadiq" (o veridico). Quando recebeu a primeira revelacao na caverna de Hira, tremeu. Voltou pra casa e disse a esposa Khadija: "Cobri-me, cobri-me." Ele nao se sentiu pronto. Nao se candidatou ao cargo. A grandeza o encontrou — nao o contrario. Em 23 anos, transformou uma peninsula de tribos fragmantadas e rivais num estado unificado que em um seculo controlaria da Espanha a India.

O que torna Muhammad unico entre todos os lideres historicos e que ele nao apenas conquistou — ele construiu. Constituicao de Medina: o primeiro documento de direitos civis da historia. Shura: consulta obrigatoria antes de decisoes coletivas. Meritocracia: Bilal, um ex-escravo negro, foi escolhido como primeiro muezzin. Planejamento de sucessao: treinou Abu Bakr, Umar, Uthman e Ali — quatro lideres que governaram apos ele com competencia. Muhammad nao construiu um imperio dependente dele. Construiu um sistema que funcionava sem ele.`,
    lessons: [
      {
        title: 'Shura — Consulta antes de decidir',
        description: 'O Alcorao ordena diretamente: "E consulta-os nos assuntos." Mesmo sendo profeta — mesmo recebendo revelacao divina — Muhammad era obrigado a consultar o time antes de agir. Na Batalha de Badr, foi um soldado comum que sugeriu mudar a posicao do acampamento, e Muhammad aceitou. Na Batalha de Uhud, a maioria votou por sair de Medina, e Muhammad seguiu a maioria mesmo discordando pessoalmente. Shura nao e frescura democratica. E inteligencia coletiva.',
        quranRef: 'Al-Imran 3:159',
        quranText: 'وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ',
        application: 'Antes de tomar decisao que afeta o time, consulte o time. Nao pra ser bonzinho — pra ser inteligente. As pessoas mais perto da operacao veem coisas que o CEO nao ve. O soldado que sugeriu mudar a posicao em Badr salvou a batalha. O atendente que sugere mudar o script de vendas pode salvar a empresa. Crie canais reais de consulta. Mas atencao: shura nao e democracia — voce consulta, pondera, e decide. A responsabilidade final e sempre sua.',
      },
      {
        title: 'Lidere da linha de frente',
        description: 'Na Batalha da Trincheira, Muhammad cavou a trincheira com as proprias maos ao lado dos soldados. Quando construiram a mesquita de Medina, ele carregou tijolos de barro. Quando o exercito passava fome, ele era o ultimo a comer — e o que menos comia. O lider que pede sacrificio do time sem sacrificar junto perde a autoridade moral. Muhammad nunca pediu algo que ele mesmo nao fazia primeiro. E por isso, homens estavam dispostos a morrer por ele — nao por obrigacao, mas por lealdade genuina.',
        quranRef: 'Al-Ahzab 33:21',
        quranText: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
        application: 'Se voce pede pro time trabalhar no final de semana, esteja la. Se voce pede pro time cortar custos, corte os seus primeiro. Se voce exige qualidade, entregue qualidade no que voce faz. O CEO que fala de sacrificio do escritorio com ar-condicionado nao inspira ninguem. Muhammad carregou tijolo. Voce nao precisa carregar tijolo — mas precisa estar na trincheira quando o time precisa ver voce la.',
      },
      {
        title: 'Recuo estrategico nao e derrota',
        description: 'O Tratado de Hudaybiyyah parecia uma humilhacao. Muhammad aceitou termos que seus proprios companheiros acharam injustos: nao entrar em Meca naquele ano, devolver muculmanos que fugissem de Meca, mas Meca nao precisava devolver quem fugisse pra la. Umar ficou furioso: "Nao somos muculmanos? Nao estamos com a verdade?" Muhammad assinou. Dois anos depois, conquistou Meca sem derramar sangue. O recuo era a estrategia. O Alcorao chamou aquele tratado de "vitoria clara."',
        quranRef: 'Al-Fath 48:1',
        quranText: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
        application: 'Nem toda batalha precisa ser vencida no momento. As vezes, aceitar termos desfavoraveis agora cria condicoes pra vencer de forma definitiva depois. Recusar um cliente toxico nao e perder receita — e proteger a operacao. Aceitar uma negociacao abaixo do ideal nao e fraqueza — pode ser posicionamento. O CEO que confunde recuo com derrota perde guerras por insistir em batalhas que nao precisam ser lutadas agora.',
      },
      {
        title: 'Construa instituicoes, nao dependencias',
        description: 'Muhammad criou a Constituicao de Medina — um documento formal definindo direitos e deveres de muculmanos, judeus e paganos vivendo na mesma cidade. Criou o sistema de zakat — imposto social obrigatorio. Definiu regras de heranca, comercio, contratos e divorcio. Treinou Abu Bakr, Umar, Uthman e Ali como lideres autonomos. Quando morreu, o sistema nao colapsou — continuou funcionando por seculos. Ele construiu institucoes que sobreviveram a ele.',
        quranRef: 'Ash-Shura 42:38',
        quranText: 'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',
        application: 'Se voce sair da empresa amanha e ela para de funcionar, voce nao construiu uma empresa — construiu uma prisao pra voce mesmo. Documente processos. Treine pessoas pra decidir sem voce. Crie criterios claros pra decisoes recorrentes. A empresa que depende do fundador pra tudo nao vale nada no mercado. A que funciona sozinha vale milhoes. Muhammad morreu e o Islam se espalhou por meio planeta em um seculo. Isso e sistema.',
      },
      {
        title: 'Desenvolva sucessores',
        description: 'Abu Bakr era o conselheiro mais proximo. Umar era o executor mais firme. Uthman era o financiador mais generoso. Ali era o guerreiro mais habilidoso. Muhammad nao os treinou pra serem iguais — treinou cada um pra liderar de acordo com seus talentos. Quando morreu, nao deixou vacuo. Deixou quatro lideres prontos que governaram por 30 anos (os Rashidun — os bem-guiados). Sucessao nao e acidente. E engenharia.',
        quranRef: 'At-Tawbah 9:100',
        quranText: 'وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ',
        application: 'Quem e o seu Abu Bakr? Quem assume se voce ficar doente por 30 dias? Se a resposta e "ninguem", voce tem um problema urgente. Comece a treinar seu substituto agora — nao quando for tarde. Delegue decisoes reais, nao so tarefas operacionais. Deixe as pessoas errarem em coisas pequenas pra aprenderem a acertar nas grandes. O melhor legado de um lider nao e o que ele construiu — e quem ele formou.',
      },
    ],
    keyQuote: {
      text: 'E consulta-os nos assuntos. E quando decidires, confia em Deus.',
      ref: 'Al-Imran 3:159',
    },
    shareText: 'Muhammad ensinou: consulte antes de decidir, lidere da frente, recue com estrategia, construa instituicoes e forme sucessores. kalambrasil.com/lideranca-profetica/muhammad',
  },

  // ========================================================================
  // 6. NUH — Construir Quando Ninguem Acredita
  // ========================================================================
  {
    slug: 'nuh',
    prophetId: 'nuh',
    prophetName: 'Nuh',
    prophetArabic: 'نوح',
    title: 'Construir Quando Ninguem Acredita',
    subtitle: '950 anos de pregacao. Construir a arca enquanto riam. Persistencia como filosofia de vida',
    readingTime: 12,
    intro: `Nuh pregou por 950 anos. Novecentos e cinquenta anos repetindo a mesma mensagem pra pessoas que nao queriam ouvir. Puseram os dedos nos ouvidos. Cobriram-se com as vestes. Zombaram. E mesmo assim, Nuh nao parou. Nao porque era teimoso — porque era convicto. A diferenca entre teimosia e convicao e simples: teimosia ignora dados, convicao resiste a ruido.

E quando Deus finalmente mandou construir a arca, a zombaria ficou pior. Imagina a cena: um homem velho construindo um navio gigante no meio do deserto. Sem rio, sem mar, sem chuva a vista. Cada vez que um lider do povo passava, ria. "Agora virou carpinteiro, Nuh?" E Nuh respondeu: "Se vos zombais de nos, nos tambem zombaremos de vos como zombais." Nao recuou. Nao se justificou. Nao parou de martelar.

A arca de Nuh nao e so uma historia sobre um barco e um diluvio. E uma historia sobre construir algo que todo mundo acha ridiculo — e estar certo. Sobre ter uma visao tao longa que ninguem ao seu redor consegue enxergar. Sobre a solidao de construir enquanto o mundo ri. Todo empreendedor que construiu algo relevante conhece essa solidao. A diferenca e que Nuh aguentou por quase mil anos.`,
    lessons: [
      {
        title: 'Visao de longo prazo sobre validacao de curto prazo',
        description: 'Nuh nao mudou a mensagem porque ninguem ouvia. Nao "pivotou" o produto porque o mercado nao reagiu. Nao baixou o preco pra atrair curiosos. Manteve a mesma mensagem por 950 anos porque a mensagem era certa — independente da recepcao. Existe uma diferenca crucial entre persistir no erro e persistir na verdade. Nuh tinha certeza. Se voce nao tem certeza do que esta construindo, nao persista — investigue. Mas se voce tem certeza, nao mude porque o mercado ainda nao entendeu.',
        quranRef: 'Al-Ankabut 29:14',
        quranText: 'فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا',
        application: 'Se o seu produto resolve um problema real e voce tem dados que confirmam — nao mate ele porque o growth nao veio no primeiro trimestre. Amazon demorou 9 anos pra dar lucro. Tesla quase faliu 4 vezes. A questao nao e se o mercado vai entender — e quando. Mas seja honesto consigo mesmo: voce ta persistindo porque tem dados, ou porque tem ego investido? Se for ego, pare. Se for dados, martele.',
      },
      {
        title: 'Persista sem resultados visiveis',
        description: 'O Alcorao detalha a estrategia de Nuh: "Chamei-os noite e dia. Chamei-os abertamente. Falei-lhes em publico e em particular." Tentou tudo. Pregacao publica, conversa privada, argumento racional, apelo emocional. E o resultado? Quase zero. A maioria esmagadora rejeitou. Mas Nuh continuou. Porque resultados visiveis nao sao a unica medida de progresso. As vezes, o progresso invisivel — construcao de fundamento, amadurecimento de habilidade, acumulo de experiencia — e mais valioso que qualquer KPI.',
        quranRef: 'Nuh 71:5-9',
        quranText: 'قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا',
        application: 'Voce postou conteudo por 6 meses e ninguem engajou. Voce mandou 100 propostas e recebeu 3 respostas. Voce ligou pra 50 leads e fechou 1. Isso nao e fracasso — e construcao. Cada "nao" refina sua abordagem. Cada rejeicao calibra sua oferta. Nuh chamou por 950 anos e salvou menos de 80 pessoas. Mas essas 80 pessoas reconstruiram a civilizacao humana. Quantidade de resultado nao e qualidade de resultado.',
      },
      {
        title: 'Confie no processo',
        description: 'Nuh construiu a arca "sob os olhos de Deus e Sua inspiracao." Ele nao sabia quando a chuva viria. Nao sabia quanto tempo levaria. Nao tinha timeline, roadmap, ou Gantt chart. Tinha uma ordem: construa. E confiou. Confiar no processo nao e passividade — e executar sem garantia de resultado. E martelar a proxima tabua sem saber quando o barco vai precisar navegar. E fazer o trabalho antes de saber se o trabalho vai ser recompensado.',
        quranRef: 'Hud 11:36-37',
        quranText: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا إِنَّهُم مُّغْرَقُونَ',
        application: 'Construa o que precisa ser construido antes de precisar. Nao espere a crise pra criar o processo. Nao espere perder o cliente pra melhorar o atendimento. Nao espere o concorrente aparecer pra inovar. Nuh construiu a arca no sol — nao na chuva. A preparacao antecede a necessidade. Se voce so age quando a urgencia bate, voce ja esta atrasado.',
      },
      {
        title: 'Prepare-se antes da tempestade',
        description: 'Quando a chuva comecou, so quem estava na arca sobreviveu. O filho de Nuh tentou subir numa montanha — e morreu afogado. A montanha parecia segura. A arca parecia ridicula. Mas a montanha cedeu e a arca navegou. Preparacao e o que separa quem sobrevive de quem e eliminado. A crise nao avisa quando vem. O lider que ja construiu a arca — reserva financeira, time treinado, processos documentados, relacoes solidas — navega. O que nao construiu, afunda.',
        quranRef: 'Hud 11:43',
        quranText: 'قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ',
        application: 'Tenha reserva de caixa de 6 meses. Tenha processos documentados. Tenha mais de um fornecedor. Tenha backup de dados. Tenha um plano B pra cada cenario critico. A maioria dos negocios que morrem nao morrem por falta de ideia — morrem por falta de preparacao. A tempestade vai vir. A unica pergunta e: voce tem uma arca ou ta confiando na montanha?',
      },
    ],
    keyQuote: {
      text: 'Constroi a arca sob Nossos olhos e Nossa inspiracao, e nao Me fales sobre os que foram injustos — eles serao afogados.',
      ref: 'Hud 11:37',
    },
    shareText: 'Nuh ensinou: construa mesmo quando ninguem acredita, persista sem resultados visiveis, confie no processo e prepare-se antes da tempestade. kalambrasil.com/lideranca-profetica/nuh',
  },

  // ========================================================================
  // 7. DAWUD — Forca + Sensibilidade
  // ========================================================================
  {
    slug: 'dawud',
    prophetId: 'dawud',
    prophetName: 'Dawud',
    prophetArabic: 'داوود',
    title: 'Forca + Sensibilidade',
    subtitle: 'O rei-guerreiro que compunha salmos. Quando a dureza encontra a beleza',
    readingTime: 11,
    intro: `Dawud era guerreiro. Matou Golias com uma pedra quando ninguem mais tinha coragem de enfrentar o gigante. Comandou exercitos. Governou um reino. Julgou disputas com justicia tao precisa que o Alcorao diz que as montanhas e os passaros cantavam com ele. Sim — o rei-guerreiro tambem era compositor. Os Salmos (Zabur) que ele escreveu sao cantados ate hoje, 3.000 anos depois.

A maioria das pessoas ve forca e sensibilidade como opostos. O cara forte nao chora. O cara sensivel nao luta. Dawud destruiu essa falsa dicotomia. Ele podia partir um escudo com as proprias maos e depois sentar numa montanha ao entardecer pra compor poesia sobre a grandeza de Deus. Ele nao era forte apesar da sensibilidade — era forte por causa dela. A capacidade de sentir profundamente e o que dava peso as suas decisoes como rei.

O Alcorao diz que Deus deu a Dawud "o reino e a sabedoria, e ensinou-lhe o que Ele quis." Nao deu so poder — deu sabedoria junto. E a combinacao especifica: ferro (ele forjava cotas de malha com as proprias maos) e salmos (ele cantava a gloria de Deus ao amanhecer). O lider completo nao e so cabeca — e coracao tambem. Nao e so estrategia — e expressao. Dawud e a prova de que voce pode ser simultaneamente o mais duro e o mais humano da sala.`,
    lessons: [
      {
        title: 'Expresse-se com autenticidade',
        description: 'Dawud nao escondia o que sentia. Os Salmos sao textos de adoracao crua — alegria, medo, gratidao, desespero, esperanca. Tudo ali, sem filtro. Um rei que cantava o que sentia enquanto as montanhas ecoavam junto. O Alcorao diz: "Submetemos as montanhas a glorificarem conosco ao entardecer e ao nascer do sol." O lider que expressa o que sente — sem ser refem da emocao — cria conexao real. Gente segue gente, nao personagem.',
        quranRef: 'Sad 38:18-19',
        quranText: 'إِنَّا سَخَّرْنَا الْجِبَالَ مَعَهُ يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ وَالطَّيْرَ مَحْشُورَةً',
        application: 'Nao finja ser inabalavel. Se a empresa ta passando por dificuldade, diga ao time — com controle, mas com honestidade. Se voce errou, admita antes que alguem descubra. Se voce esta animado com uma conquista, celebre com o time. Autenticidade nao e fraqueza — e a forma mais eficiente de construir confianca. O lider que nunca mostra emocao nenhuma nao inspira lealdade — inspira desconfianca.',
      },
      {
        title: 'Equilibre forca com adoracao',
        description: 'Dawud forjava ferro com as proprias maos e cantava Salmos com a propria voz. O mesmo homem. Deus amaciou o ferro pra ele — literalmente, o metal cedia nas maos de Dawud como massa. E ao mesmo tempo, deu a ele a voz mais bela da criacao. Forca bruta sem espiritualidade e brutalidade. Espiritualidade sem forca e impotencia. Dawud tinha as duas. O equilíbrio entre trabalho duro e reflexao profunda nao e fraqueza — e a formula da lideranca sustentavel.',
        quranRef: 'Saba 34:10-11',
        quranText: 'وَأَلَنَّا لَهُ الْحَدِيدَ أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ',
        application: 'Trabalhe duro de segunda a sexta. Mas tenha espaco pra reflexao, oracao, leitura, silencio. O CEO que nao para nunca pra pensar toma decisoes reativas. O que para demais pra pensar nao executa. Dawud forjava armadura e cantava salmos — no mesmo dia. Encontre seu equivalente: execute com intensidade e depois reflita com profundidade. Os dois alimentam um ao outro.',
      },
      {
        title: 'Justica na lideranca e inegociavel',
        description: 'Dawud era juiz. O Alcorao conta que dois homens entraram nele escalando o muro do palacio (Surata Sad). Um disse que tinha uma ovelha e o outro tinha 99, e o de 99 queria tomar a dele. Dawud julgou imediatamente: "Ele te prejudicou ao pedir tua ovelha pra juntar as dele." E depois percebeu que a historia era uma parabola — um teste de Deus sobre seu proprio comportamento. Dawud se prostrou e pediu perdao. Justica real inclui julgar a si mesmo com o mesmo rigor que julga os outros.',
        quranRef: 'Sad 38:21-24',
        quranText: 'قَالَ لَقَدْ ظَلَمَكَ بِسُؤَالِ نَعْجَتِكَ إِلَىٰ نِعَاجِهِ',
        application: 'Se voce cobra pontualidade do time, seja pontual. Se voce cobra transparencia, seja transparente. Se voce cobra qualidade, entregue qualidade. O lider que tem um padrao pra si e outro pro time perde a autoridade moral. E quando perceber que voce mesmo ta falhando no padrao que cobra — corrija. Dawud percebeu, se prostrou e corrigiu. Nao tentou justificar. Nao deu desculpa. Corrigiu.',
      },
      {
        title: 'Valorize a expressao criativa',
        description: 'Deus nao deu a Dawud so poder e sabedoria — deu a ele os Salmos. Arte. Musica. Poesia. E fez as montanhas e os passaros cantarem junto. A criatividade nao e luxo — e dimensao essencial da lideranca. O lider que so pensa em planilha e KPI perde a capacidade de inspirar. Os Salmos de Dawud foram mais duradouros que seu reino. A expressao criativa transcende o tempo de uma forma que o poder institucional nao consegue.',
        quranRef: 'Al-Anbiya 21:79',
        quranText: 'وَسَخَّرْنَا مَعَ دَاوُودَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ',
        application: 'Invista em branding, em narrativa, em estetica. Nao como enfeite — como estrategia. O produto que tambem e bonito vende mais. A apresentacao que tambem emociona convence mais. A empresa que tambem conta historias conecta mais. Dawud era rei e poeta. Steve Jobs era CEO e designer. Os lideres que combinam execucao com expressao criam coisas que duram.',
      },
    ],
    keyQuote: {
      text: 'E demos a Dawud de Nossa parte uma graca: O montanhas, glorificai com ele! E vos, passaros!',
      ref: 'Saba 34:10',
    },
    shareText: 'Dawud ensinou: forca sem sensibilidade e brutalidade. Sensibilidade sem forca e impotencia. O lider completo tem as duas. kalambrasil.com/lideranca-profetica/dawud',
  },

  // ========================================================================
  // 8. SULAYMAN — Sistemas Que Funcionam Sozinhos
  // ========================================================================
  {
    slug: 'sulayman',
    prophetId: 'suleiman',
    prophetName: 'Sulayman',
    prophetArabic: 'سليمان',
    title: 'Sistemas Que Funcionam Sozinhos',
    subtitle: 'O rei que construiu o maior sistema de gestao da historia antiga',
    readingTime: 13,
    intro: `Sulayman herdou o reino de Dawud e o levou a uma escala sem precedentes. Comandava ventos, jinns, exercitos de homens, animais e aves. Entendia a linguagem de todas as criaturas. Construiu o Templo de Jerusalem com uma forca de trabalho sobrenatural. O Alcorao descreve um rei que nao apenas governava — ele sistematizava. Cada parte do seu reino tinha funcao, hierarquia e responsabilidade definida.

A cena mais reveladora sobre Sulayman esta na Surata An-Naml. Ele revistava os passaros — sim, passaros — e percebeu que a Hudhud (poupa) nao estava la. Sua reacao: "Por que nao vejo a Hudhud? Ou ela esta entre os ausentes? Certamente a castigarei com castigo severo ou a degolarei, a menos que me traga uma justificativa clara." O rei mais poderoso do mundo notou a ausencia de UM passaro. Isso nao e microgerenciamento — e sistema de controle tao refinado que nenhum elemento escapa da atencao.

E quando a Hudhud voltou, trouxe inteligencia sobre o reino de Saba e sua rainha. Sulayman nao descartou a informacao porque veio de um passaro. Verificou, validou, e agiu. A lideranca de Sulayman e sobre construir sistemas de comunicacao tao amplos que ate um passaro traz dados relevantes. E sobre processar informacao de qualquer fonte sem preconceito. E sobre gratidao: apesar de todo esse poder, Sulayman orava: "Senhor, inspira-me a agradecer Tuas gracas."`,
    lessons: [
      {
        title: 'Construa sistemas, nao dependencias',
        description: 'Sulayman nao fazia tudo sozinho. Tinha um sistema: jinns construiam, ventos transportavam, aves monitoravam, homens administravam. Cada parte do sistema tinha funcao clara. Quando ele morreu, o Alcorao conta que ficou apoiado no bastao e ninguem percebeu por um tempo — os jinns continuaram trabalhando. O sistema funcionava sem ele. Essa e a marca de um construtor de verdade: a engrenagem gira mesmo quando o criador nao esta girando ela.',
        quranRef: 'An-Naml 27:17',
        quranText: 'وَحُشِرَ لِسُلَيْمَانَ جُنُودُهُ مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ فَهُمْ يُوزَعُونَ',
        application: 'Documente cada processo critico. Crie SOPs. Treine substitutos. Automatize o que puder ser automatizado. Se voce sair de ferias por 30 dias e a empresa parar, voce nao tem empresa — tem emprego disfarçado. Sulayman construiu um sistema tao robusto que continuou funcionando apos a morte dele. Esse e o padrao: construa algo que funcione sem voce. Nao por ego — por inteligencia.',
      },
      {
        title: 'Comunique-se alem das barreiras',
        description: 'Sulayman entendia a linguagem dos passaros, das formigas, de todas as criaturas. Quando um exercito de formigas estava no caminho, ele ouviu uma formiga dizer as outras: "Entrai nas vossas habitacoes para que Sulayman e seus exercitos nao vos esmaguem sem perceber." Sulayman sorriu e agradeceu a Deus. Ele nao so ouvia — processava informacao de qualquer fonte. Um lider que so ouve pessoas iguais a ele perde dados criticos.',
        quranRef: 'An-Naml 27:18-19',
        quranText: 'قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ',
        application: 'Ouça o estagiario. Ouça o cliente que reclama. Ouça o concorrente que fala mal. Ouça o dado que contradiz sua hipotese. A informacao mais valiosa frequentemente vem da fonte mais improvavel. Sulayman ganhou inteligencia estrategica sobre um reino inteiro porque ouviu um passaro. Voce pode ganhar insight que salva seu negocio porque ouviu o atendente do SAC. Nao filtre informacao pela hierarquia da fonte — filtre pela qualidade do dado.',
      },
      {
        title: 'Sabedoria sobre poder',
        description: 'Quando a Rainha de Saba veio visitar Sulayman, ele nao a recebeu com exercito — recebeu com sabedoria. Transformou o trono dela, construiu um palacio com piso de cristal que parecia agua, e a impressionou nao pela forca, mas pela inteligencia. Ela disse: "Senhor, fui injusta comigo mesma. E me submeto com Sulayman a Deus, Senhor dos mundos." Sulayman converteu uma rainha nao pela espada, mas pelo intelecto. Poder impressiona. Sabedoria transforma.',
        quranRef: 'An-Naml 27:44',
        quranText: 'قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ',
        application: 'Nao tente ganhar o cliente na base do desconto. Ganhe pela qualidade. Nao tente ganhar o talento na base do salario. Ganhe pela cultura. Nao tente ganhar a negociacao na base da pressao. Ganhe pelo argumento. Forca bruta funciona — ate encontrar forca maior. Sabedoria funciona independente do tamanho do oponente. Invista em inteligencia competitiva, em conhecimento profundo do mercado, em leitura de cenarios. O mais sabio vence o mais forte no longo prazo.',
      },
      {
        title: 'Gratidao no auge do sucesso',
        description: 'Com todo o poder que tinha — ventos, jinns, exercitos, riqueza incalculavel — a oracao de Sulayman era: "Senhor, inspira-me a agradecer Tuas gracas que agraciaste a mim e a meus pais." Nao pediu mais poder. Nao pediu mais riqueza. Pediu capacidade de ser grato. O lider que esquece de agradecer no topo esta preparando sua queda. A ingratidao e o primeiro sinal de que o poder esta corrompendo.',
        quranRef: 'An-Naml 27:19',
        quranText: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ',
        application: 'Quando o faturamento bater recorde, agradeca o time antes de planejar o proximo target. Quando o projeto der certo, reconheca quem executou antes de assumir credito. Quando a vida estiver boa, lembre de onde voce veio. Gratidao nao e politica de RH — e protecao contra a arrogancia. Sulayman orava por gratidao com o mundo inteiro na mao. Se o rei mais poderoso da historia precisava pedir humildade, voce tambem precisa.',
      },
    ],
    keyQuote: {
      text: 'Senhor, inspira-me a agradecer Tuas gracas que agraciaste a mim e a meus pais, e a praticar o bem que Te agrada.',
      ref: 'An-Naml 27:19',
    },
    shareText: 'Sulayman ensinou: construa sistemas que funcionam sem voce, ouca todas as fontes, escolha sabedoria sobre poder e nunca esqueca de agradecer. kalambrasil.com/lideranca-profetica/sulayman',
  },
]
