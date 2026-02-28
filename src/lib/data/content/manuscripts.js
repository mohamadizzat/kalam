// manuscripts.js
// Kalam Brasil — Educação Islâmica para brasileiros
// Tema: Manuscritos históricos das Escrituras Sagradas (Torah, Salmos, Evangelho, Alcorão)
// Público: Cristãos brasileiros de 20-35 anos, seguidores de Pablo Marçal
// Tom: Investigativo e curioso, não polêmico. Baseado em fontes acadêmicas reconhecidas.
// Fontes: Bart D. Ehrman, Bruce Metzger, Emanuel Tov, James VanderKam,
//         Ahmad Von Denffer, Fred Leemhuis, Efraim Karsh
// Idioma: Português brasileiro (informal mas educado)

// ─────────────────────────────────────────────────────────────────────────────
// MANUSCRITOS DA BÍBLIA (Torah, Salmos, Evangelho)
// ─────────────────────────────────────────────────────────────────────────────

export const manuscriptsData = [
  {
    id: 'dead-sea-scrolls',
    scripture: 'Torah / Salmos / Profetas',
    name: 'Rolos do Mar Morto',
    date: '250 a.C. – 68 d.C.',
    discovery:
      'Em 1947, um pastor beduíno de 15 anos chamado Muhammad edh-Dhib estava procurando uma cabra perdida nas falésias de Qumran, às margens do Mar Morto. Jogou uma pedra numa caverna, ouviu o barulho de cerâmica quebrando — e encontrou jarras de barro contendo pergaminhos enrolados. Nos anos seguintes, outras 10 cavernas revelaram mais fragmentos.',
    significance:
      'São os manuscritos bíblicos hebraicos mais antigos já descobertos — cerca de 1.000 anos mais velhos do que o manuscrito mais completo que tínhamos antes (o Codex Leningradensis, de 1008 d.C.). Incluem fragmentos de todos os livros do Antigo Testamento exceto o livro de Ester. Para a academia, foi um divisor de águas. Para a fé, uma faca de dois gumes: confirmaram a transmissão geral do texto, mas também revelaram variações textuais significativas entre manuscritos do mesmo período.',
    location:
      'Museu do Livro (Santuário do Livro), Museu de Israel, Jerusalém. Fragmentos também no Museu da Jordânia (Amã), no Museu do Vaticano e em coleções particulares — parte ainda não publicada.',
    language: 'Hebraico (maioria), Aramaico, alguns em Grego',
    numberOfFragments:
      'Mais de 15.000 fragmentos reconstruindo cerca de 900 textos distintos',
    gap: 'Para a Torah: cerca de 1.000 anos mais antigo que o manuscrito completo anterior. Para alguns fragmentos do Isaías: 1.100 anos mais antigo.',
    challenge:
      'São fragmentos, não livros completos. O único manuscrito quase completo é o Grande Rolo de Isaías (1QIsa-a). Além disso, os estudiosos encontraram versões textuais diferentes circulando ao mesmo tempo: alguns textos de Qumran concordam com a Septuaginta (versão grega), outros concordam com o Pentateuco Samaritano — contra o Texto Massorético que é a base das Bíblias atuais. Isso indica que não havia um único "original" fixo naquele período.',
    preservation:
      'Parcial — fragmentada, lacunas extensas, múltiplas variantes textuais identificadas. Nenhum livro completo da Torah sobreviveu desse período.',
    imageDesc:
      'Fragmentos de pergaminho escurecidos pelo tempo com texto hebraico em colunas, presos em molduras de vidro sob luz controlada no Museu de Israel',
    islandClaim:
      'Muçulmanos frequentemente citam os Rolos do Mar Morto para mostrar que variações textuais existiam antes mesmo do Islã — o que fortalece a tese alcorânica de que as Escrituras anteriores foram alteradas ao longo do tempo (Alcorão 2:79, 5:13).',
    scholarPerspective: {
      conservative:
        'Estudiosos como Eugene Ulrich (editor-chefe dos DSS) argumentam que as variações são menores e que o núcleo do texto foi preservado com surpreendente fidelidade para padrões da antiguidade.',
      critical:
        'Bart D. Ehrman (em "Misquoting Jesus" e "Lost Scriptures") argumenta que as variações confirmam que o processo de cópia introduziu mudanças reais no texto, algumas teologicamente significativas.',
      neutral:
        'A descoberta provou simultaneamente a antiguidade do texto bíblico E a existência de variação textual. Ambas as conclusões são legítimas. A questão é qual pesa mais para cada leitor.',
    },
    details: {
      writingMaterial: 'Pergaminho de couro de cabra e ovelha, alguns em papiro, um em cobre (Rolo de Cobre)',
      preservation_method: 'Jarras de cerâmica seladas, em cavernas com clima seco e temperatura estável — condições excepcionais de conservação para a região',
      keyManuscripts: [
        'Grande Rolo de Isaías (1QIsa-a) — quase completo, 734 cm de comprimento',
        'Rolo da Regra da Comunidade (1QS) — manual da seita de Qumran',
        'Rolo do Hino de Ação de Graças (1QH) — salmos compostos pela comunidade',
        'Comentário sobre Habacuc (1QpHab)',
        'Rolo de Cobre (3Q15) — lista de tesouros escondidos',
      ],
      academicConsensus:
        'Produzidos principalmente pela comunidade essênia de Qumran, uma seita judaica que se separou do Templo de Jerusalém. Depositados nas cavernas pouco antes da chegada dos romanos em 68 d.C.',
    },
  },

  {
    id: 'codex-sinaiticus',
    scripture: 'Novo Testamento / Evangelho',
    name: 'Codex Sinaiticus',
    date: '330–360 d.C.',
    discovery:
      'Em 1844, o teólogo alemão Constantin von Tischendorf visitou o Mosteiro de Santa Catarina, no Monte Sinai (Egito). Ele conta que viu monges usando pergaminhos antigos como combustível para a lareira. Pediu para examinar — eram folhas de um manuscrito bíblico extraordinário. Em 1859, sob patrocínio do Czar Alexandre II da Rússia, ele conseguiu 347 folhas adicionais e as levou para São Petersburgo. Em 1975, 12 folhas a mais foram encontradas numa parede do mosteiro durante uma reforma.',
    significance:
      'É o manuscrito mais completo do Novo Testamento grego que possuímos — e um dos mais antigos. Também contém a maioria do Antigo Testamento na versão grega (Septuaginta). Seu valor é inestimável porque mostra o estado do texto cristão no século IV, quando o imperador Constantino encomendou 50 cópias das Escrituras para as igrejas do Império Romano. O que torna o Codex Sinaiticus fascinante e perturbador ao mesmo tempo é o que não está nele: passagens que aparecem nas Bíblias modernas simplesmente não existem nesse manuscrito.',
    location:
      'Dividido entre quatro instituições: British Library (Londres) — 347 folhas; Biblioteca Nacional da Rússia (São Petersburgo) — 43 folhas; Mosteiro de Santa Catarina (Sinai) — 18 folhas; Biblioteca da Universidade de Leipzig — 43 folhas.',
    language: 'Grego Koiné (grego comum do Mediterrâneo antigo)',
    numberOfFragments:
      '400 folhas de pergaminho (de um estimado original de 730–740 folhas). Contém o NT quase completo e partes significativas do AT grego.',
    gap: 'Cerca de 300 anos após os eventos do Novo Testamento. Mas é o manuscrito bíblico cristão mais completo que possuímos.',
    challenge:
      'O que está faltando revela muito. No Codex Sinaiticus: (1) O final longo de Marcos (16:9-20) — com a ressurreição detalhada, serpentes e glossolalia — não existe. Termina no versículo 8 abruptamente. (2) A história da mulher adúltera (João 7:53–8:11) não aparece. (3) A Pericope Adulterae foi adicionada posteriormente por copistas. Segundo Bart Ehrman e Bruce Metzger, esses são exemplos documentados de adições ao texto bíblico por copistas medievais.',
    preservation:
      'Alta para um documento da antiguidade — é um códice (livro encadernado), não um rolo fragmentado. Mas foi claramente corrigido por múltiplos escribas ao longo dos séculos: pesquisadores identificaram sete "mãos" diferentes de correção no manuscrito.',
    imageDesc:
      'Páginas em pergaminho beige com texto grego em colunas pretas imaculadas, com marcações e correções visíveis em tinta diferente nas margens',
    islandClaim:
      'O Codex Sinaiticus é frequentemente citado para mostrar que versículos importantes do Evangelho foram adicionados posteriormente por mãos humanas — o que corrobora o argumento islâmico de que os Evangelhos disponíveis hoje não são a forma original da revelação dada a Jesus (Isa, paz seja com ele).',
    scholarPerspective: {
      conservative:
        'Estudiosos como F.F. Bruce e D.A. Carson argumentam que as variações afetam detalhes, não doutrinas centrais, e que o método da crítica textual é robusto o suficiente para chegar muito perto do texto original.',
      critical:
        'Bart D. Ehrman (ex-evangélico, hoje agnóstico e professor na UNC) documentou exaustivamente em "Misquoting Jesus" (2005) que escribas fizeram mudanças intencionais ao texto — algumas por razões teológicas. O livro vendeu 2 milhões de cópias.',
      neutral:
        'Nenhum estudioso sério nega que o texto do NT foi copiado por humanos que cometeram erros e, ocasionalmente, fizeram alterações. A questão é se essas alterações afetam ensinamentos centrais.',
    },
    details: {
      writingMaterial: 'Pergaminho de velino (couro de bezerro muito fino), escrito em quatro colunas por página',
      preservation_method: 'Preservado no ambiente seco do deserto do Sinai no interior de um mosteiro continuamente habitado desde o século VI d.C.',
      keyManuscripts: [
        'Novo Testamento quase completo em grego — faltam apenas alguns versículos de Mateus e João',
        'Antigo Testamento em grego (Septuaginta) — parcialmente preservado',
        'Epístola de Barnabé e Pastor de Hermas — textos considerados sagrados por algumas comunidades cristãs primitivas mas excluídos do cânon',
      ],
      academicConsensus:
        'Data do século IV d.C. Provavelmente produzido em Cesareia Marítima (atual Israel/Palestina) ou Alexandria (Egito). Possivelmente uma das 50 cópias encomendadas pelo imperador Constantino ao bispo Eusébio de Cesareia.',
    },
  },

  {
    id: 'codex-vaticanus',
    scripture: 'Antigo e Novo Testamento',
    name: 'Codex Vaticanus',
    date: '300–325 d.C.',
    discovery:
      'Aparece no primeiro catálogo da Biblioteca do Vaticano em 1475 — mas sua origem exata é desconhecida. Nunca saiu do Vaticano por séculos. Quando o Vaticano foi ocupado por Napoleão em 1809, o manuscrito foi brevemente levado a Paris, mas retornou a Roma em 1815. Estudiosos foram proibidos de examiná-lo por longo tempo: Tischendorf, que tinha acesso apenas limitado, escreveu às escondidas notas sobre o texto na palma da mão.',
    significance:
      'Junto com o Codex Sinaiticus, é considerado o manuscrito mais importante do Novo Testamento grego. Alguns estudiosos o consideram ligeiramente mais antigo e mais próximo do texto original. É a base textual de muitas traduções bíblicas modernas, incluindo a NVI e a Bíblia de Jerusalém. O que torna esse manuscrito extraordinário é sua antiguidade combinada com sua completude relativa.',
    location:
      'Biblioteca Apostólica Vaticana, Cidade do Vaticano. Número de catálogo: Vat.gr.1209.',
    language: 'Grego Koiné',
    numberOfFragments:
      '759 folhas de pergaminho (de um estimado original de 820 folhas). Faltam partes de Gênesis, Salmos, Hebreus, Pastorais e Apocalipse.',
    gap: 'Cerca de 270-300 anos após os eventos do Novo Testamento.',
    challenge:
      'O Vaticanus também não contém o final longo de Marcos (16:9-20). E mais: onde essa seção deveria aparecer, o escriba deixou propositalmente uma coluna em branco — incomum para esse manuscrito — sugerindo que ele sabia que a seção estava ausente mas não queria inclui-la sem autoridade para tanto. Isso é considerado evidência de que o final longo foi uma adição posterior ao texto. Também não contém as Epístolas Pastorais (1 e 2 Timóteo, Tito) nem o Apocalipse.',
    preservation:
      'Alta — é um dos documentos mais bem preservados da antiguidade cristã, guardado em uma das instituições mais seguras do mundo.',
    imageDesc:
      'Folhas de pergaminho amarelado com texto grego denso em três colunas, conservado sob rígido controle de temperatura e umidade na Biblioteca Vaticana',
    islandClaim:
      'A ausência do final de Marcos em dois dos manuscritos mais antigos e confiáveis confirma, para estudiosos islâmicos como Ahmad Deedat e Zakir Naik, que passagens cruciais sobre a ressurreição foram adicionadas por homens — não reveladas por Deus.',
    scholarPerspective: {
      conservative:
        'Bruce Metzger, em "The Text of the New Testament" (obra de referência para textual critics evangélicos), admite que o final longo de Marcos é uma adição posterior, mas argumenta que isso não compromete a doutrina da ressurreição, que está bem atestada em outros textos.',
      critical:
        'James Tabor e outros argumentam que o final original de Marcos — que termina sem aparição física de Jesus — pode ser mais compatível com uma compreensão de ressurreição espiritual do que física.',
      neutral:
        'É um fato acadêmico estabelecido que o final longo de Marcos (16:9-20) foi adicionado posteriormente. Isso está nas notas de rodapé de praticamente todas as Bíblias acadêmicas modernas. O debate é sobre o que isso implica teologicamente.',
    },
    details: {
      writingMaterial: 'Pergaminho de alta qualidade — provavelmente velino',
      preservation_method: 'Guardado na Biblioteca Apostólica do Vaticano, com acesso fortemente controlado durante séculos',
      keyManuscripts: [
        'Maior parte do AT grego (Septuaginta)',
        'Novo Testamento quase completo — sem Hebreus 9:14 em diante, sem Pastorais, sem Apoc.',
        'Livros deuterocanônicos completos',
      ],
      academicConsensus:
        'É, junto com o Sinaiticus, a base da crítica textual do NT moderno. Sua origem provável é o Egito, possivelmente Alexandria ou Cesareia.',
    },
  },

  {
    id: 'aleppo-codex',
    scripture: 'Torah / Antigo Testamento Hebraico completo',
    name: 'Codex de Alepo (Keter Aram Tzova)',
    date: '920–930 d.C.',
    discovery:
      'O Codex de Alepo é o manuscrito mais antigo e mais autoritativo do texto hebraico massorético completo. Ficou guardado por séculos na Grande Sinagoga de Alepo, na Síria, considerado tão sagrado que judeus rezavam na sua presença. Em 1947, durante os tumultos após a criação do Estado de Israel, a sinagoga foi incendiada. O Codex desapareceu. Em 1958, a maior parte reapareceu misteriosamente em Israel — mas cerca de 40% havia desaparecido para sempre, incluindo toda a Torah (Gênesis, Êxodo, Levítico, Números e a maior parte de Deuteronômio).',
    significance:
      'Era considerado por Maimônides (o maior filósofo judeu medieval) como a cópia mais confiável do texto hebraico existente. Sua vocalização e pontuação são a referência definitiva para a tradição massorética. O que restou é a base da Bíblia Hebraica Stuttgartensia — o texto hebraico de referência para tradutores bíblicos em todo o mundo.',
    location:
      'Museu de Israel, Jerusalém. Sob custódia do Yad Ben-Zvi Institute.',
    language: 'Hebraico com vocalizações massoréticas (nikud) e notas de cantilação (teamim)',
    numberOfFragments:
      '294 folhas sobreviventes de aproximadamente 487 originais — 40% permanentemente perdidos',
    gap: 'Produzido cerca de 2.000 anos após Moisés (data tradicional) e cerca de 1.500 anos após a maioria dos eventos que descreve.',
    challenge:
      'A perda de 40% do manuscrito em 1947 é, em si, um lembrete de como textos sagrados são vulneráveis à história. O que foi perdido não pode ser recuperado a partir desse manuscrito — temos que depender de outras cópias. Além disso, o Codex de Alepo já é um texto medieval (século X), muito distante dos eventos que descreve. A cadeia de transmissão entre Moisés e esse manuscrito envolve pelo menos 2.000 anos de cópias manuais, sem verificação independente.',
    preservation:
      'Parcial — 60% sobrevivente em excelente condição para sua idade, 40% perdido em 1947 em circunstâncias ainda debatidas.',
    imageDesc:
      'Folhas de pergaminho com texto hebraico em uma coluna central, cercado de notas massoréticas menores nas margens superior, inferior e lateral, com sinais de vocalização pontilhados entre as letras',
    islandClaim:
      'A destruição e perda parcial do Codex de Alepo — o manuscrito mais autoritativo do AT hebraico — em 1947 ilustra como as Escrituras anteriores dependem de condições históricas frágeis para sua preservação. O Alcorão, argumentam estudiosos islâmicos, foi preservado por uma cadeia de memorização (hafiz) além dos manuscritos físicos.',
    scholarPerspective: {
      conservative:
        'Emanuel Tov (professor da Universidade Hebraica e editor-chefe dos Manuscritos do Mar Morto) argumenta que a consistência dos textos massoréticos ao longo dos séculos é notável e evidencia um sistema cuidadoso de preservação rabínica.',
      critical:
        'James Kugel, em "How to Read the Bible" (2007), argumenta que a Torah é uma compilação de fontes humanas diversas, editadas ao longo de séculos, e que tentar encontrar um "original" único é equivocado metodologicamente.',
      neutral:
        'O que possuímos hoje como Bíblia hebraica é um texto produzido por massoretas medievais (600-1000 d.C.) com base em cópias de cópias de tradições que remontam ao período do Segundo Templo. A fidelidade é impressionante para padrões da antiguidade; a distância temporal dos eventos é inegável.',
    },
    details: {
      writingMaterial: 'Pergaminho de alta qualidade, escrito pelo escriba Shelomo ben Buya\'a',
      preservation_method: 'Guardado como relíquia sagrada na Sinagoga de Alepo por mais de 600 anos, com acesso extremamente restrito',
      keyManuscripts: [
        '294 folhas restantes cobrindo do livro de Deuteronômio 28:17 ao final do Antigo Testamento',
        'Perdidos permanentemente: Gênesis, Êxodo, Levítico, Números, Deuteronômio 1–28:17',
        'Notas massoréticas marginais — o padrão de referência da tradição rabínica',
      ],
      academicConsensus:
        'Produzido em Tiberíades, Israel (atual), pela escola de Ben Asher — os massoretas de maior prestígio. Maimônides (1135-1204 d.C.) consultou pessoalmente este manuscrito e o declarou o mais confiável.',
    },
  },

  {
    id: 'papyrus-p52',
    scripture: 'Evangelho de João',
    name: 'Papiro P52 (Fragmento Rylands)',
    date: '100–150 d.C.',
    discovery:
      'Em 1920, o papirologist Bernard Grenfell comprou um lote de papiros antigos no mercado de Cairo, mas eles permaneceram não catalogados por 14 anos. Em 1934, Colin Roberts, da John Rylands Library em Manchester, identificou entre eles um pequeno fragmento com texto grego. Quando reconheceu que era um trecho do Evangelho de João, ficou em choque: era o fragmento de texto do Novo Testamento mais antigo conhecido.',
    significance:
      'Com 9cm × 6cm, é o menor e mais importante fragmento do NT. Contém João 18:31-33 (frente) e 18:37-38 (verso) — a cena do julgamento de Jesus diante de Pilatos. Sua importância histórica é enorme: prova que o Evangelho de João estava circulando no Egito por volta de 100-150 d.C., o que implica que foi composto antes disso — provavelmente entre 90-100 d.C. em Éfeso (Turquia atual), conforme a tradição acadêmica majoritária.',
    location:
      'John Rylands University Library, Manchester, Inglaterra. Número de catálogo: P. Ryl. Gk. 457.',
    language: 'Grego Koiné',
    numberOfFragments:
      'Um único fragmento — 114 letras legíveis dos dois lados',
    gap: 'Possivelmente apenas 50-100 anos após a composição do Evangelho de João. É o menor gap temporal entre qualquer manuscrito e seu texto original no mundo antigo — para qualquer documento secular ou religioso.',
    challenge:
      'É tão pequeno que contém apenas duas cenas. Não prova que o texto completo do Evangelho era o mesmo que o atual. Além disso, o Evangelho de João é justamente o mais teologicamente desenvolvido dos quatro — com a teologia mais elevada sobre a divindade de Jesus — e o mais tardio. Estudiosos como John A.T. Robinson e Rudolf Bultmann debatem extensamente sobre o processo de composição desse Evangelho.',
    preservation:
      'Alta para seu estado — fragmento único, bem legível, preservado em ambiente controlado.',
    imageDesc:
      'Fragmento de papiro marrom com texto grego manuscrito em tinta preta, visivelmente desgastado nas bordas, exibido em moldura de vidro num fundo escuro',
    islandClaim:
      'O P52 prova que textos sobre Jesus circulavam décadas após sua morte — mas não prova que eram cópias fiéis de testemunhas oculares. Do ponto de vista islâmico, os Evangelhos são registros humanos tardios de eventos, não a revelação direta (Injil) dada a Jesus (Isa), que teria sido oral e em aramaico — não escrita em grego.',
    scholarPerspective: {
      conservative:
        'D.A. Carson e Leon Morris argumentam que o P52 confirma a composição precoce do Evangelho de João e é consistente com autoria por João, filho de Zebedeu ou por sua escola.',
      critical:
        'Raymond Brown, em "The Gospel of John" (Anchor Bible Commentary), argumenta que o Evangelho passou por múltiplas fases de composição e edição por uma "escola joanina" ao longo de décadas — não foi escrito por uma só mão.',
      neutral:
        'A data do P52 é um fato. O que ele implica sobre autoria, fidedignidade e relação com a revelação original dada a Jesus é uma questão interpretativa aberta tanto para estudiosos quanto para crentes.',
    },
    details: {
      writingMaterial: 'Papiro — planta do rio Nilo processada em folhas para escrita',
      preservation_method: 'Clima árido do Egito, que preserva papiro de forma extraordinária',
      keyManuscripts: [
        'João 18:31-33 — Jesus diante de Pilatos: "Não nos é permitido matar ninguém"',
        'João 18:37-38 — "Para isso nasci e para isso vim ao mundo, para testemunhar a verdade"',
      ],
      academicConsensus:
        'Datado por paleografia (análise do estilo de escrita) entre 100-150 d.C. Encontrado no Egito, provavelmente em Oxirrinco ou Fayyum. É evidência de que o Evangelho de João era conhecido fora de seu local de origem poucas décadas após sua composição.',
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// MANUSCRITOS DO ALCORÃO
// ─────────────────────────────────────────────────────────────────────────────

export const quranManuscripts = [
  {
    id: 'topkapi-manuscript',
    name: 'Manuscrito Topkapi',
    date: '~650 d.C. (era de Uthman) — paleografia sugere possivelmente 650-750 d.C.',
    location: 'Palácio Topkapi, Istambul, Turquia. Em exibição permanente no Pavilhão das Relíquias Sagradas.',
    language: 'Árabe — script hijazi (estilo cúfico primitivo sem pontos diacríticos)',
    numberOfCopies: 'Um único volume — um dos 4 a 7 Alcorões oficiais ditos enviados por Uthman às capitais provinciais',
    significance:
      'É um dos manuscritos mais antigos do Alcorão completo e um dos candidatos mais plausíveis a ser uma das cópias oficiais produzidas durante o califado de Uthman ibn Affan (644-656 d.C.) — a standardização oficial do texto alcorânico. Se a datação tradicional estiver correta, foi produzido a apenas 18-20 anos da morte do Profeta Muhammad (paz seja com ele) em 632 d.C. — com muitos dos Companheiros do Profeta ainda vivos para verificar.',
    challenge:
      'A paleografia (análise da escrita) é inconclusiva sobre a data exata. Alguns especialistas, como François Déroche (École Pratique des Hautes Études, Paris), sugerem que o manuscrito pode ser do final do século VII ou início do VIII — após a reforma do script por Hajjaj ibn Yusuf em torno de 694 d.C. A ausência de pontos diacríticos no script original significa que algumas palavras eram teoricamente ambíguas sem contexto oral.',
    preservation:
      'Alta — considerado um dos manuscritos islâmicos mais bem preservados do período formativo. Guardado como relíquia sagrada por mais de 1.300 anos.',
    imageDesc:
      'Páginas grandes de pergaminho de couro com caligrafia árabe cúfica densa em tinta marrom-preta, sem pontos diacríticos nas letras, com divisores de versículo ornamentados em dourado e vermelho',
    islandClaim:
      'Representa a transmissão cuidadosa e centralizada do texto alcorânico desde o período dos Companheiros — em forte contraste com a transmissão descentralizada e gradual dos Evangelhos ao longo de décadas.',
    scholarPerspective: {
      conservative:
        'Estudiosos islâmicos como Ahmad Von Denffer, em "\'Ulum al-Qur\'an", documentam que a standardização de Uthman foi um processo rigoroso baseado em múltiplas fontes verificadas por Companheiros que memorizavam o texto completo.',
      academic:
        'François Déroche, em "Qur\'ans of the Umayyads" (2014), aplica paleografia rigorosa aos manuscritos atribuídos a Uthman e conclui que enquanto alguns podem ser desse período, a datação definitiva exige mais estudo.',
      neutral:
        'A existência de manuscritos alcorânicos datados do século VII é bem documentada. A questão se o Topkapi especificamente data de Uthman depende de análise paleográfica ainda em andamento.',
    },
  },
  {
    id: 'birmingham-quran',
    name: 'Folhas do Alcorão de Birmingham',
    date: '568–645 d.C. (datação por radiocarbono, com 95,4% de confiança)',
    location: 'Cadbury Research Library, Universidade de Birmingham, Inglaterra. Número de catálogo: Islamic Arabic 1572.',
    language: 'Árabe — script hijazi primitivo, sem pontos diacríticos',
    numberOfCopies:
      'Dois fólios (quatro páginas) — parte de uma coleção de 3.000 itens do Oriente Médio comprada em 1920',
    significance:
      'Em 2015, a Universidade de Birmingham submeteu as folhas a datação por radiocarbono no laboratório SUERC (Scottish Universities Environmental Research Centre). O resultado foi extraordinário: o pergaminho data de 568-645 d.C. com 95,4% de confiança. Isso coloca o pergaminho no período de vida do Profeta Muhammad (nascido c. 570 d.C., falecido 632 d.C.) ou imediatamente após. São potencialmente os fragmentos mais antigos do Alcorão fisicamente datados com precisão científica.',
    challenge:
      'A datação por radiocarbono mede o pergaminho (couro animal), não a tinta. Um escriba poderia ter escrito num pergaminho antigo décadas depois de sua produção. Além disso, as folhas ficaram não identificadas em Birmingham por 95 anos — só foram reconhecidas como Alcorão quando o pesquisador Alba Fedeli as examinou em 2015. O texto é Surah Al-Kahf (Sura 18) e Maryam (Sura 19) — capítulos sobre histórias de profetas anteriores.',
    preservation:
      'Surpreendentemente alta — as folhas foram preservadas inadvertidamente em arquivo universitário por quase um século, o que, paradoxalmente, as protegeu.',
    imageDesc:
      'Folhas de pergaminho bege com texto árabe em caligrafia hijazi primitiva, sem vocalização ou pontos, com linhas de texto densas e margens simples, exibidas em moldura de preservação na Universidade de Birmingham',
    islandClaim:
      'A datação de radiocarbono das Folhas de Birmingham é um dos argumentos mais frequentemente citados por muçulmanos para demonstrar que o Alcorão físico remonta ao próprio período do Profeta — diferente de qualquer manuscrito bíblico que temos.',
    scholarPerspective: {
      conservative:
        'David Thomas (professor de Islam e Cristianismo, Universidade de Birmingham) declarou: "Essas folhas podem ser o manuscrito mais antigo do Alcorão existente. É como se alguém tivesse sentado com o Profeta Muhammad."',
      academic:
        'Keith Small, especialista em manuscritos do Alcorão, observa que enquanto a datação do pergaminho é sólida, não podemos ter certeza absoluta de que o texto foi escrito imediatamente — pode haver uma defasagem de décadas entre o pergaminho e a escrita.',
      neutral:
        'Mesmo com a caveat sobre a diferença entre data do pergaminho e data da escrita, as Folhas de Birmingham representam evidência física extraordinária da antiguidade do texto alcorânico. Não há equivalente para nenhum dos quatro Evangelhos.',
    },
  },
  {
    id: 'sanaa-manuscripts',
    name: 'Manuscritos de Sanaa (Palimpsesto de Sanaa)',
    date: 'Pergaminho superior: ~700 d.C. | Texto inferior (palimpsesto): possivelmente 630–670 d.C.',
    location:
      'Great Mosque of Sanaa, Iêmen — descobertos em 1972 durante restauração. Custódia do Iêmen com acesso internacional restrito.',
    language: 'Árabe — script hijazi primitivo',
    numberOfCopies:
      'Cerca de 926 folhas de pergaminho — a maior coleção de manuscritos alcorânicos do período inicial. O palimpsesto (texto raspado embaixo) foi fotografado com luz ultravioleta.',
    significance:
      'Em 1972, operários que faziam reparos no telhado da Grande Mesquita de Sanaa, no Iêmen, descobriram uma câmara oculta cheia de pergaminhos antigos. A descoberta foi passada quase sem atenção. Décadas depois, pesquisadores alemães liderados pelo professor Hans-Caspar Graf von Bothmer documentaram o material. O mais fascinante: um palimpsesto — manuscrito sobre o qual outro texto foi raspado e reescrito. Sob luz UV, o texto inferior revelou variações em relação ao Alcorão padronizado. O professor Gerd-Rüdiger Puin, que examinou os manuscritos, declarou numa entrevista à revista Atlantic em 1999 que havia variantes textuais que mereciam estudo sério.',
    challenge:
      'Os manuscritos de Sanaa geraram controvérsia porque as autoridades iemenitas — após contato inicial com pesquisadores alemães — restringiram o acesso. O artigo da Atlantic de 1999 ("What Is the Koran?") causou reação intensa. Estudiosos islâmicos como Mustafa Shah (SOAS, Londres) argumentam que Puin exagerou a significância das variantes, que seriam principalmente ortográficas e de estilo de escrita, não teológicas. O acesso limitado torna difícil a conclusão independente.',
    preservation:
      'Variável — algumas folhas em excelente estado, outras deterioradas. O acesso restrito impede conservação e estudo plenos.',
    imageDesc:
      'Fotografias em preto e branco de folhas de pergaminho com texto árabe primitivo em escrita sem pontos, com sob luz ultravioleta revelando um texto mais antigo apagado por baixo',
    islandClaim:
      'Para alguns críticos do Islã, os Manuscritos de Sanaa sugerem variação textual no Alcorão primitivo. Para a maioria dos estudiosos islâmicos, as variantes são ortográficas (forma de escrever), não teológicas, e o conteúdo permanece idêntico ao Alcorão atual.',
    scholarPerspective: {
      conservative:
        'Mustafa Shah e Abdullah Saeed argumentam que as variantes de Sanaa são consistentes com as "sete leituras" (qira\'at) sancionadas pela tradição islâmica — variações de pronúncia e forma, não de conteúdo ou significado.',
      critical:
        'Gerd-Rüdiger Puin, em entrevista, sugeriu que os manuscritos implicam que "o Alcorão tem uma história, e se tem uma história, então está aberto a investigação crítica como qualquer outro texto." Mas observou que não havia lido uma versão radicalmente diferente.',
      neutral:
        'Os Manuscritos de Sanaa são o exemplo mais próximo que temos de variação textual no Alcorão primitivo. A extensão e significância dessas variações — se ortográficas ou substantivas — é uma questão acadêmica aberta que exige acesso pleno aos manuscritos para ser respondida.',
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// COMPARAÇÃO E ANÁLISE
// ─────────────────────────────────────────────────────────────────────────────

export const manuscriptComparison = {
  title: 'Por que isso importa? O que os manuscritos revelam',

  keyInsight: `A questão dos manuscritos não é periférica para a fé — é central. O Islã afirma que as Escrituras anteriores (Torah, Salmos, Evangelho) foram alteradas por mãos humanas ao longo do tempo (tahreef), e que o Alcorão foi enviado como confirmação e salvaguarda (Alcorão 5:48). Os manuscritos históricos são a evidência física que permite avaliar essa afirmação com integridade intelectual — não com polemismo, mas com curiosidade genuína.`,

  keyQuestion: `A pergunta honesta não é "qual livro eu prefiro" — é "qual livro chegou até nós mais próximo de como foi revelado?" Essa é uma questão histórica, não apenas de fé.`,

  timeline: [
    {
      year: '570 d.C.',
      event: 'Nascimento do Profeta Muhammad (paz seja com ele)',
      note: 'A Arábia pré-islâmica tinha tradição oral robusta. O Alcorão foi transmitido oralmente E por escrito desde o início.',
    },
    {
      year: '610–632 d.C.',
      event: 'Período de Revelação do Alcorão',
      note: 'Versículos foram memorizados por Companheiros (Hafiz) e escritos em materiais disponíveis (ossos, couro, pedras planas) imediatamente após a revelação.',
    },
    {
      year: '632 d.C.',
      event: 'Morte do Profeta — Abu Bakr compila o Alcorão',
      note: 'Após a Batalha de Yamama (633 d.C.), onde vários Hafiz morreram, Abu Bakr ordenou compilação escrita. Zayd ibn Thabit, secretário do Profeta, coordenou.',
    },
    {
      year: '650 d.C.',
      event: 'Standardização de Uthman',
      note: 'Uthman ibn Affan produziu cópias oficiais e enviou para as principais cidades. Manuscritos divergentes foram destruídos. Os Manuscritos Topkapi e Birmingham datam desse período.',
    },
    {
      year: '30 d.C.',
      event: 'Crucificação/Ascensão de Jesus (Isa) — *sem texto escrito*',
      note: 'Não há evidência de que Jesus escreveu qualquer coisa ou mandou escrever. Os Evangelhos foram compostos décadas depois, em grego — enquanto Jesus falava aramaico.',
    },
    {
      year: '50–62 d.C.',
      event: 'Cartas de Paulo — os textos cristãos mais antigos',
      note: 'Paulo nunca conheceu Jesus pessoalmente. Suas cartas precedem os Evangelhos em 15-50 anos e são os textos cristãos mais antigos que possuímos.',
    },
    {
      year: '65–70 d.C.',
      event: 'Evangelho de Marcos — o mais antigo dos Evangelhos',
      note: 'Escrito ~35 anos após Jesus. Fonte principal para Mateus e Lucas. Não foi escrito por uma testemunha ocular direta segundo a maioria dos estudiosos.',
    },
    {
      year: '85–100 d.C.',
      event: 'Evangelhos de Mateus, Lucas e João',
      note: 'João é o mais tardio e teologicamente mais desenvolvido — com a afirmação mais explícita da divindade de Jesus. Composto ~55-70 anos após os eventos.',
    },
    {
      year: '100–150 d.C.',
      event: 'Papiro P52 — fragmento mais antigo do NT',
      note: 'Encontrado no Egito, contém apenas João 18. O manuscrito mais antigo completo do NT (Codex Sinaiticus) data de ~350 d.C. — 320 anos após Jesus.',
    },
    {
      year: '1000–1009 d.C.',
      event: 'Codex Leningradensis — manuscrito completo mais antigo do AT hebraico',
      note: 'A base das Bíblias hebraicas modernas. Produzido 2.000+ anos após Moisés (data tradicional) e 500+ anos após os Rolos do Mar Morto.',
    },
  ],

  preservation: {
    bible: {
      label: 'Bíblia (AT + NT)',
      strengths: [
        'Enorme quantidade de manuscritos — mais de 5.800 em grego para o NT, dezenas de milhares em outras línguas',
        'Rolos do Mar Morto confirmam transmissão geral do AT por mais de 1.000 anos',
        'Fragmentos precoces como P52 demonstram circulação do NT no século II',
        'Tradição de múltiplos centros independentes de preservação (Alexandria, Antioquia, Roma, Cartago)',
      ],
      weaknesses: [
        'Nenhum manuscrito autógrafo (original de mão do autor) sobreviveu — nenhum',
        'Variações textuais numerosas: Bart D. Ehrman identifica 200.000-400.000 variantes entre manuscritos do NT',
        'Adições documentadas por escribas: final longo de Marcos (16:9-20), Pericope Adulterae (João 8:1-11), 1 João 5:7 (Comma Johanneum)',
        'Gap temporal entre eventos e manuscritos mais antigos: 300-1000 anos para o AT, 200-300 anos para o NT completo',
        'Processo de canonização por concílios humanos (Niceia 325 d.C., Cartago 397 d.C.) que excluiu outros textos cristãos primitivos',
      ],
      summary:
        'A Bíblia é extraordinariamente bem atestada pelos padrões da antiguidade — nenhum outro texto antigo tem tantos manuscritos. Mas tem mais variantes textuais documentadas, um gap temporal maior, e adições por escribas confirmadas do que qualquer texto religioso comparável.',
    },
    quran: {
      label: 'Alcorão',
      strengths: [
        'Memorização massiva desde o início — tradição de Hafiz (memorização completa) sem paralelo em outras tradições religiosas',
        'Standardização centralizada dentro de 18-20 anos da morte do Profeta, com testemunhas oculares vivas',
        'Fragmentos físicos datados ao período do Profeta (Folhas de Birmingham, 568-645 d.C.)',
        'Texto uniform mundialmente — Alcorão lido em Jakarta, Lagos, Chicago ou São Paulo é idêntico',
        'Ausência de adições documentadas comparáveis às do NT — nenhuma "descoberta" que mostre versículo inexistente sendo adicionado',
      ],
      weaknesses: [
        'Variantes dos Manuscritos de Sanaa ainda não completamente acessíveis à pesquisa independente',
        'Script original sem pontos diacríticos criava teórica ambiguidade — resolvida pela tradição oral, mas a dependência é circular',
        'A uniformidade atual pode refletir a eficácia da standardização de Uthman, não a ausência de variação anterior a ela',
        'Acesso restrito a alguns manuscritos primários dificulta verificação acadêmica independente plena',
      ],
      summary:
        'O Alcorão tem o processo de transmissão mais documentado e centralizado de qualquer texto religioso da antiguidade, com a menor distância temporal entre composição e manuscritos físicos para seu período. As variantes conhecidas são significativamente menores em número e tipo do que as variantes bíblicas documentadas.',
    },
  },

  bottomLine: {
    forChristians: `Nenhum cristão honesto precisa fingir que as variantes textuais não existem — os próprios evangelicais como Bruce Metzger e D.A. Carson admitem isso abertamente em seus livros. A questão é: essas variantes afetam doutrinas centrais? A maioria dos estudiosos diz que não. Mas a existência das variantes é um fato histórico.`,
    forMuslims: `O argumento islâmico sobre preservação do Alcorão versus alteração das Escrituras anteriores tem base histórica sólida — não é polemismo vazio. Mas integridade intelectual exige reconhecer que a pergunta dos Manuscritos de Sanaa ainda está aberta, e que o Alcorão também depende de transmissão humana, mesmo que de qualidade superior.`,
    forSeekers: `Se você está genuinamente buscando entender qual texto mais provavelmente preservou a revelação original — a evidência manuscrita, analisada honestamente, levanta questões sérias sobre a transmissão bíblica e apresenta um caso favorável à preservação alcorânica. Isso não fecha a questão da fé, mas é dado relevante para uma decisão intelectualmente honesta.`,
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// PERGUNTAS FREQUENTES (para componente de FAQ)
// ─────────────────────────────────────────────────────────────────────────────

export const manuscriptFAQs = [
  {
    id: 'faq-1',
    question: 'O cristão precisa saber disso para ser cristão?',
    answer: `Não necessariamente. Muita fé cristã genuína existe sem conhecimento textual. Mas se você quer ter fé com integridade intelectual — e especialmente se alguém lhe apresentar esses dados como argumento — é melhor conhecer os fatos do que ser surpreendido. A fé que só sobrevive na ignorância não é a fé mais robusta.`,
  },
  {
    id: 'faq-2',
    question: 'O Alcorão não é também obra humana?',
    answer: `É uma pergunta legítima. A perspectiva islâmica é que o Alcorão foi revelado ao Profeta Muhammad através do anjo Gabriel, e que o processo de preservação foi guiado por Deus. Historicamente, o que podemos verificar é que: (1) o processo de transmissão do Alcorão foi extraordinariamente mais controlado e centralizado do que o dos textos bíblicos; (2) os manuscritos físicos mais antigos do Alcorão estão mais próximos temporalmente de sua composição do que qualquer manuscrito bíblico está da composição dos Evangelhos. Isso não "prova" origem divina — mas é evidência histórica relevante.`,
  },
  {
    id: 'faq-3',
    question: 'Se Deus queria que a Bíblia fosse preservada, por que não preservou?',
    answer: `Essa é exatamente a questão que o Alcorão aborda. A perspectiva islâmica é que Deus permitiu que as Escrituras anteriores fossem alteradas porque cada uma era revelação para um povo e um tempo específicos — e porque o Alcorão viria como revelação final e universalmente preservada. O Alcorão afirma: "Nós revelamos o Dhikr [Alcorão] e somos seus guardiões" (15:9). A preservação, segundo o Islã, é uma promessa divina específica para o Alcorão — não para as revelações anteriores.`,
  },
  {
    id: 'faq-4',
    question: 'Quantas pessoas realmente memorizam o Alcorão completo hoje?',
    answer: `[ESTIMATIVA] Estima-se que existam entre 7 e 10 milhões de hafiz (memorizadores do Alcorão completo) no mundo atualmente. No Paquistão e Bangladesh há competições anuais de memorização com dezenas de milhares de participantes. O número exato não é verificável centralmente, mas a existência da tradição em escala massiva é indiscutível — e não tem paralelo em nenhuma outra tradição religiosa para um texto de 77.000 palavras.`,
  },
  {
    id: 'faq-5',
    question: 'O que devo fazer com essa informação?',
    answer: `Investigar com honestidade. Esses dados não obrigam ninguém a nada. Mas se você acredita que verdade importa — que Deus, se existe, prefere que você O busque com integridade em vez de conforto — então esses dados merecem consideração séria. A pergunta que os manuscritos levantam não é "Deus existe?" mas "Qual texto preserva melhor o que Deus revelou?" E essa é uma pergunta que mudou a vida de muitas pessoas quando respondida honestamente.`,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// METADADOS PARA COMPONENTE DE UI
// ─────────────────────────────────────────────────────────────────────────────

export const manuscriptsMeta = {
  totalManuscripts: manuscriptsData.length + quranManuscripts.length,
  bibleManuscripts: manuscriptsData.length,
  quranManuscripts: quranManuscripts.length,
  languages: ['Hebraico', 'Aramaico', 'Grego Koiné', 'Árabe'],
  dateRange: '250 a.C. – 1000 d.C.',
  keyScholars: [
    { name: 'Bart D. Ehrman', affiliation: 'UNC Chapel Hill', stance: 'Crítico — ex-evangélico' },
    { name: 'Bruce Metzger', affiliation: 'Princeton', stance: 'Conservador evangélico' },
    { name: 'Emanuel Tov', affiliation: 'Universidade Hebraica', stance: 'Editor-chefe dos Manuscritos do Mar Morto' },
    { name: 'François Déroche', affiliation: 'École Pratique des Hautes Études', stance: 'Especialista em manuscritos alcorânicos' },
    { name: 'James VanderKam', affiliation: 'Notre Dame', stance: 'Especialista em Segundo Templo e Manuscritos do Mar Morto' },
    { name: 'Ahmad Von Denffer', affiliation: 'Instituto Islâmico de Munique', stance: 'Estudiosos islâmicos de ciências do Alcorão' },
  ],
  furtherReading: [
    {
      title: 'Misquoting Jesus',
      author: 'Bart D. Ehrman',
      year: 2005,
      note: 'Acessível ao público geral. Documenta variantes textuais do NT.',
    },
    {
      title: 'The Text of the New Testament',
      author: 'Bruce Metzger e Bart D. Ehrman',
      year: 2005,
      note: 'Técnico. Referência académica padrão para crítica textual do NT.',
    },
    {
      title: "'Ulum al-Qur'an",
      author: 'Ahmad Von Denffer',
      year: 1983,
      note: 'Introdução às ciências do Alcorão — composição, preservação, manuscritos.',
    },
    {
      title: 'Qur\'ans of the Umayyads',
      author: 'François Déroche',
      year: 2014,
      note: 'Estudo paleográfico dos manuscritos alcorânicos mais antigos.',
    },
    {
      title: 'How to Read the Bible',
      author: 'James Kugel',
      year: 2007,
      note: 'Perspectiva judaica-acadêmica sobre a composição e transmissão da Torah.',
    },
  ],
}
