export interface SEOPage {
  slug: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  sections: {
    title: string
    content: string
    quranRef?: string
    hadithRef?: string
  }[]
  faq: { question: string; answer: string }[]
  relatedSlugs: string[]
}

export const SEO_PAGES: SEOPage[] = [
  // ─── GROUP A: FUNDAMENTALS ──────────────────────────────────────────────────

  {
    slug: 'o-que-e-o-isla',
    title: 'O que é o Islã? Guia completo e acessível | KALAM',
    description: 'Entenda o que é o Islã de forma clara e respeitosa. História, pilares, crenças e como 1.8 bilhão de pessoas vivem essa fé no dia a dia.',
    heroTitle: 'Uma mensagem que mudou o mundo',
    heroSubtitle: 'De um deserto no século VII a 1.8 bilhão de pessoas hoje — entenda o que é o Islã sem filtros e sem julgamentos.',
    sections: [
      {
        title: 'O significado da palavra "Islã"',
        content: 'A palavra Islã vem do árabe "islam" (إسلام), que significa literalmente "submissão" — mas não no sentido de fraqueza. É a submissão voluntária e consciente a Deus, uma escolha que parte do entendimento. A mesma raiz linguística dá origem à palavra "salam", que significa paz. Para os muçulmanos, encontrar paz interior e viver em harmonia com o mundo é consequência natural de alinhar a vida com a vontade do Criador.\n\nO Islã não se apresenta como uma religião nova. Ele se vê como a continuação e o encerramento de uma mensagem que foi revelada ao longo de milênios — desde Adão, passando por Noé, Abraão, Moisés e Jesus, até Muhammad, que os muçulmanos consideram o último profeta. Cada profeta trouxe a mesma essência: existe um único Deus, e a melhor forma de viver é reconhecê-Lo e seguir Sua orientação.',
        quranRef: 'Alcorão 3:19',
      },
      {
        title: 'Os cinco pilares do Islã',
        content: 'O Islã se sustenta sobre cinco práticas fundamentais, chamadas de pilares. Elas não são apenas rituais — são ferramentas práticas para construir disciplina, generosidade e conexão espiritual.\n\nO primeiro pilar é a Shahada, a declaração de fé: "Não há divindade além de Deus, e Muhammad é Seu mensageiro." O segundo é a Salah, as cinco orações diárias que criam pausas de presença ao longo do dia. O terceiro é o Zakat, a doação obrigatória de 2,5% da riqueza acumulada aos mais necessitados — um mecanismo de redistribuição de riqueza. O quarto é o Sawm, o jejum no mês do Ramadan, que treina disciplina, empatia e gratidão. O quinto é o Hajj, a peregrinação a Meca ao menos uma vez na vida para quem tem condições.\n\nCada pilar atua em uma dimensão diferente: a declaração trabalha a mente, a oração trabalha o corpo e o espírito, o zakat trabalha a relação com os outros, o jejum trabalha o autocontrole, e a peregrinação trabalha a igualdade — reis e trabalhadores vestem a mesma roupa branca.',
      },
      {
        title: 'As seis crenças fundamentais',
        content: 'Além das práticas, o Islã possui seis artigos de fé que formam o alicerce teológico. São eles: a crença em Deus único (Allah), nos anjos, nos livros revelados (incluindo a Torá e o Evangelho originais), nos profetas, no Dia do Juízo e no destino (qadar).\n\nO que diferencia a visão islâmica é a ênfase absoluta na unicidade de Deus. Ele não tem filhos, parceiros ou intermediários. A relação entre o ser humano e Deus é direta — não precisa de sacerdote, santo ou intercessor. Qualquer pessoa pode falar com Deus a qualquer momento, em qualquer lugar, em qualquer idioma. Essa acessibilidade é um dos pontos que mais atrai quem conhece o Islã pela primeira vez.',
        quranRef: 'Alcorão 2:285',
      },
      {
        title: 'O Islã no mundo de hoje',
        content: 'Com aproximadamente 1.8 bilhão de adeptos, o Islã é a segunda maior religião do mundo e a que mais cresce. Muçulmanos vivem em todos os continentes — da Indonésia ao Brasil, da Nigéria à Noruega. A diversidade é enorme: há muçulmanos árabes, africanos, asiáticos, europeus e latino-americanos.\n\nContrariando estereótipos, o maior país muçulmano do mundo é a Indonésia, no sudeste asiático. No Brasil, a comunidade muçulmana tem raízes que remontam à escravidão — muitos africanos trazidos ao país eram muçulmanos que preservaram sua fé em condições extremas. Hoje, mesquitas existem em diversas cidades brasileiras, e o número de brasileiros convertidos cresce a cada ano.',
      },
    ],
    faq: [
      {
        question: 'Islã e islamismo são a mesma coisa?',
        answer: 'Islã é a religião praticada por 1.8 bilhão de pessoas. "Islamismo" é um termo usado no jornalismo para se referir a movimentos políticos que usam o Islã como base ideológica. São coisas diferentes — como cristianismo e partidos cristãos.',
      },
      {
        question: 'Muçulmanos acreditam em Jesus?',
        answer: 'Sim. Jesus (Isa, em árabe) é um dos profetas mais reverenciados no Islã. Ele é mencionado 25 vezes no Alcorão. A diferença é que muçulmanos não o consideram Deus ou filho de Deus, mas um profeta e mensageiro importante.',
      },
      {
        question: 'Qual a diferença entre Islã e cristianismo?',
        answer: 'A principal diferença teológica é o conceito de Deus. O Islã afirma que Deus é absolutamente Um, sem filhos ou trindade. Ambas compartilham muitos profetas e valores morais, mas divergem na natureza de Jesus e na necessidade de um salvador.',
      },
      {
        question: 'É possível ser muçulmano no Brasil?',
        answer: 'Sim. Existem mesquitas e centros islâmicos em diversas cidades brasileiras — São Paulo, Rio de Janeiro, Curitiba, Foz do Iguaçu, entre outras. A comunidade é acolhedora com novos interessados.',
      },
      {
        question: 'Muçulmanos podem ter amigos de outras religiões?',
        answer: 'Sim. O Alcorão incentiva tratar todas as pessoas com justiça e bondade, independente da religião. O Profeta Muhammad tinha vizinhos e aliados de diferentes crenças e os tratava com respeito.',
      },
    ],
    relatedSlugs: ['quem-e-allah', 'o-que-e-o-alcorao', 'como-se-converter'],
  },

  {
    slug: 'quem-e-allah',
    title: 'Quem é Allah? Entenda o Deus do Islã | KALAM',
    description: 'Allah é o Deus do Islã? Entenda quem é Allah, Seus atributos, os 99 nomes e por que muçulmanos usam essa palavra.',
    heroTitle: 'O nome mais repetido da história humana',
    heroSubtitle: 'Cinco vezes ao dia, em cada fuso horário do planeta, mais de um bilhão de vozes pronunciam o mesmo nome. Quem é Allah?',
    sections: [
      {
        title: 'Allah é um Deus diferente?',
        content: 'Não. "Allah" é simplesmente a palavra árabe para "Deus". Cristãos árabes usam a mesma palavra em suas orações e Bíblias traduzidas. Não existe um "Deus do Islã" separado — muçulmanos, cristãos e judeus acreditam no mesmo Deus de Abraão. A diferença está em como cada tradição entende Seus atributos e Sua relação com a humanidade.\n\nPara o Islã, Deus é absolutamente único. Não tem filhos, parceiros, imagens ou formas humanas. Ele não cansa, não dorme, não erra. Está além da compreensão humana total, mas Se faz conhecer através de Seus nomes, Seus sinais na criação e Sua revelação — o Alcorão.',
        quranRef: 'Alcorão 112:1-4',
      },
      {
        title: 'Os 99 nomes de Allah',
        content: 'Uma das formas mais bonitas de entender quem Deus é no Islã são os 99 nomes — atributos que descrevem Suas qualidades. Cada nome revela uma dimensão diferente: Ar-Rahman (O Misericordioso), Al-Alim (O Onisciente), Al-Adl (O Justo), Al-Wadud (O Amoroso), As-Sabur (O Paciente).\n\nEsses nomes não são abstrações teológicas. Eles são convites para um relacionamento. Quando alguém está perdido, pode chamar Al-Hadi (O Guia). Quando está em dificuldade, Ar-Razzaq (O Provedor). Os muçulmanos repetem esses nomes em meditações e orações como forma de se conectar com cada aspecto do Criador. É como ter 99 portas de entrada para a mesma presença.',
        hadithRef: 'Sahih al-Bukhari 2736',
      },
      {
        title: 'A relação direta com Deus',
        content: 'Uma das características mais marcantes do Islã é a ausência de intermediários entre o ser humano e Deus. Não há sacerdotes, confessionários ou santos que "encaminhem" suas orações. Quando um muçulmano se prosterna em oração, ele está no ponto mais próximo de Deus — diretamente, sem mediação.\n\nO Profeta Muhammad ensinou que Deus é mais próximo de cada pessoa do que sua própria veia jugular. Essa intimidade não depende de lugar — pode ser no quarto, no carro, no trabalho. Deus entende todas as línguas e ouve mesmo os pensamentos que não se tornam palavras. Essa acessibilidade total é um dos aspectos que mais surpreende quem conhece o Islã pela primeira vez.',
        quranRef: 'Alcorão 50:16',
      },
      {
        title: 'Deus no Islã: justiça e misericórdia',
        content: 'Se os 99 nomes de Deus formassem uma nuvem de palavras, a maior palavra seria "misericórdia". Toda surata do Alcorão (exceto uma) começa com "Em nome de Deus, o Misericordioso, o Compassivo." A misericórdia não é um detalhe — é o atributo que define como Deus Se relaciona com Sua criação.\n\nAo mesmo tempo, Deus é justo. Ninguém carrega o pecado de outro. Cada pessoa responde apenas por suas próprias ações. Não existe pecado original no Islã — o ser humano nasce puro, com uma natureza inclinada ao bem (fitra). Quando erra, arrepende-se e volta. E Deus, segundo o Alcorão, ama aqueles que se arrependem sinceramente.',
        quranRef: 'Alcorão 39:53',
      },
    ],
    faq: [
      {
        question: 'Allah e o Deus cristão são o mesmo?',
        answer: 'Sim, é o mesmo Deus de Abraão. "Allah" é a palavra árabe para Deus, usada por cristãos e muçulmanos árabes. A diferença está nos atributos: o Islã afirma que Deus é absolutamente Um, sem filhos ou trindade.',
      },
      {
        question: 'Por que muçulmanos não traduzem "Allah" para "Deus"?',
        answer: 'Muitos traduzem normalmente. A preferência por "Allah" em alguns contextos existe porque a palavra árabe não tem gênero nem plural — ela expressa a unicidade absoluta de forma que nenhuma tradução captura totalmente.',
      },
      {
        question: 'Deus pode ser visto no Islã?',
        answer: 'Na vida terrena, não. Deus está além da percepção humana. No entanto, a tradição islâmica ensina que os crentes poderão contemplar Deus no Paraíso — considerado o maior presente da vida eterna.',
      },
      {
        question: 'O Islã ensina que Deus é amor?',
        answer: 'Um dos 99 nomes de Deus é Al-Wadud, que significa "O Amoroso". O Alcorão afirma que Deus ama os justos, os pacientes, os que confiam Nele e os que se arrependem. O amor divino no Islã é expresso através de misericórdia, provisão e orientação.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'o-que-e-o-alcorao', 'como-fazer-a-oracao'],
  },

  {
    slug: 'o-que-e-halal',
    title: 'O que é Halal? Significado, alimentos e regras | KALAM',
    description: 'Halal significa "permitido" em árabe. Entenda o que é halal, quais alimentos são permitidos e como funciona na prática.',
    heroTitle: 'Um estilo de vida consciente',
    heroSubtitle: 'Halal vai muito além da comida. É um conceito que permeia todas as escolhas — do prato à conta bancária, do negócio ao relacionamento.',
    sections: [
      {
        title: 'O que significa "halal"?',
        content: 'Halal (حلال) é uma palavra árabe que significa "permitido" ou "lícito". É o oposto de haram (proibido). No Islã, essa classificação se aplica a todas as áreas da vida — alimentos, bebidas, finanças, comportamento, negócios e relacionamentos.\n\nO princípio é simples: tudo que Deus não proibiu é permitido. A regra padrão no Islã é a permissão, não a proibição. Isso significa que a maioria esmagadora das coisas no mundo é halal. As proibições são exceções específicas, geralmente com uma razão de proteção — à saúde, à justiça social ou à dignidade humana.',
      },
      {
        title: 'Alimentos halal na prática',
        content: 'Na alimentação, a maioria dos alimentos é halal por padrão: frutas, vegetais, grãos, peixes, ovos, leite. As restrições são poucas e específicas: carne de porco, bebidas alcoólicas, sangue e animais que não foram abatidos de forma correta.\n\nO abate halal exige que o animal seja saudável, tratado com dignidade, e que a jugular seja cortada com uma lâmina afiada enquanto se pronuncia o nome de Deus. A intenção é minimizar o sofrimento e lembrar que tirar uma vida para se alimentar é um ato sério, não banal. Curiosamente, estudos científicos mostram que o método halal de abate, quando bem executado, é um dos que causa menos sofrimento ao animal.\n\nNo Brasil, muitos produtos já são certificados halal — especialmente carnes de exportação, já que o Brasil é um dos maiores exportadores de carne halal do mundo.',
        quranRef: 'Alcorão 2:168',
      },
      {
        title: 'Halal além da comida',
        content: 'O conceito de halal se estende a finanças, relacionamentos e até ao entretenimento. Nas finanças, o princípio central é a proibição de juros (riba) — o dinheiro não pode gerar dinheiro sem risco ou trabalho real. Isso gerou todo um sistema de bancos e investimentos islâmicos que operam com participação nos lucros em vez de juros fixos.\n\nNos relacionamentos, halal envolve respeito mútuo, transparência e compromisso formal. Nos negócios, exclui fraude, exploração e especulação excessiva. O princípio geral é: se uma ação beneficia todas as partes envolvidas e não causa dano, ela é halal.',
      },
      {
        title: 'Por que viver halal?',
        content: 'Para os muçulmanos, viver de forma halal é uma expressão de consciência — saber de onde vem o que se consome, como o dinheiro é ganho, como os outros são tratados. Não é uma lista de proibições, mas um framework para decisões éticas.\n\nMuitas pessoas que não são muçulmanas também se interessam pelo conceito por razões práticas: carne de animais bem tratados, finanças sem juros abusivos, negócios éticos. O mercado halal global movimenta trilhões de dólares e cresce entre consumidores muçulmanos e não-muçulmanos que valorizam consumo consciente.',
      },
    ],
    faq: [
      {
        question: 'Comida halal tem gosto diferente?',
        answer: 'Não. A diferença está no processo de preparo e abate, não no tempero ou sabor. Restaurantes halal servem os mesmos pratos — a diferença está nos ingredientes proibidos (porco, álcool) e no método de abate da carne.',
      },
      {
        question: 'Não-muçulmanos podem comer comida halal?',
        answer: 'Sim, qualquer pessoa pode. Comida halal não é exclusiva para muçulmanos. Muitos restaurantes halal atendem clientes de todas as origens.',
      },
      {
        question: 'Por que muçulmanos não comem carne de porco?',
        answer: 'É uma proibição direta no Alcorão (2:173). A tradição islâmica aceita essa orientação como sabedoria divina. Há também argumentos relacionados à saúde e higiene, mas o motivo principal é a obediência a Deus.',
      },
      {
        question: 'Gelatina é halal?',
        answer: 'Depende da origem. Gelatina de porco não é halal. Existem alternativas halal feitas de peixe ou boi abatido de forma correta. Sempre verifique o certificado do produto.',
      },
    ],
    relatedSlugs: ['o-que-e-haram', 'o-que-e-o-isla', 'o-que-e-o-ramadan'],
  },

  {
    slug: 'o-que-e-haram',
    title: 'O que é Haram no Islã? Significado e exemplos | KALAM',
    description: 'Haram significa "proibido" no Islã. Entenda o que é haram, por que certas coisas são proibidas e como esse conceito funciona.',
    heroTitle: 'Limites que protegem, não que prendem',
    heroSubtitle: 'Toda proibição no Islã tem uma razão. Entenda o conceito de haram sem julgamento e descubra a lógica por trás dos limites.',
    sections: [
      {
        title: 'O que significa "haram"?',
        content: 'Haram (حرام) é a palavra árabe para "proibido" ou "sagrado" — as duas traduções revelam algo profundo. No Islã, uma proibição não é uma punição. É uma proteção. É algo que Deus declarou sagrado demais para ser violado, ou perigoso demais para ser permitido sem limites.\n\nO conceito funciona como cercas em uma estrada de montanha: elas não existem para limitar sua liberdade de dirigir, mas para evitar que você caia no precipício. Para os muçulmanos, as proibições divinas funcionam da mesma forma — são limites que protegem o indivíduo e a sociedade.',
        quranRef: 'Alcorão 2:219',
      },
      {
        title: 'O que é haram no dia a dia?',
        content: 'As proibições no Islã são relativamente poucas e específicas. Na alimentação: carne de porco, álcool, sangue e animais não abatidos de forma correta. Nas finanças: juros (riba), fraude, jogo de azar e especulação. Nos relacionamentos: relações sexuais fora do casamento, desonestidade e injustiça.\n\nHá também proibições de comportamento: mentir, fofocar, invejar, arrogância, violência injustificada, e prejudicar os outros — inclusive prejudicar a si mesmo. O suicídio, por exemplo, é haram porque a vida é considerada um empréstimo sagrado de Deus.\n\nUm ponto importante: no Islã, a proibição se aplica à ação, não à pessoa. Alguém que comete algo haram não se torna "impuro" — pode se arrepender e voltar a qualquer momento. Não há "ponto sem retorno".',
      },
      {
        title: 'A lógica por trás das proibições',
        content: 'O Islã não exige obediência cega. O Alcorão frequentemente explica por que algo é proibido. O álcool, por exemplo, é reconhecido como tendo "algum benefício", mas "o pecado é maior que o benefício" — uma análise de custo-benefício há 1.400 anos que a ciência moderna confirmou.\n\nOs juros são proibidos porque criam riqueza sem trabalho e concentram poder econômico. A fofoca é proibida porque destrói comunidades por dentro. A arrogância é proibida porque fecha a pessoa para aprender e crescer. Quando se olha o conjunto, as proibições formam um sistema de proteção à saúde física, mental, social e espiritual.',
        quranRef: 'Alcorão 2:219',
      },
      {
        title: 'O que acontece se alguém faz algo haram?',
        content: 'No Islã, o caminho de volta está sempre aberto. A palavra-chave é "tawbah" (arrependimento) — voltar-se para Deus com sinceridade. Não precisa de confessor, padre ou ritual especial. A pessoa reconhece o erro, sente arrependimento genuíno, para de praticar a ação e pede perdão diretamente a Deus.\n\nO Alcorão diz que Deus ama aqueles que se arrependem constantemente. Um hadith famoso diz que se os seres humanos não errassem, Deus os substituiria por outros que errassem e se arrependessem — porque é no arrependimento que a relação com Deus se aprofunda. O sistema não é de perfeição, é de consciência e retorno.',
        quranRef: 'Alcorão 39:53',
      },
    ],
    faq: [
      {
        question: 'Tatuagem é haram?',
        answer: 'A posição majoritária é que sim, baseada em um hadith do Profeta. A razão citada é a alteração permanente do corpo criado por Deus. Porém, quem já tem tatuagens e se converte ao Islã não precisa removê-las.',
      },
      {
        question: 'Música é haram?',
        answer: 'Há divergência entre os estudiosos. Alguns proíbem música com instrumentos, outros permitem se o conteúdo não for imoral. Nasheeds (cantos islâmicos) são aceitos por praticamente todos. Não há consenso único.',
      },
      {
        question: 'O que é mais grave no Islã: mentir ou comer porco?',
        answer: 'Mentir e prejudicar outros é muito mais grave. O Islã prioriza a ética nas relações humanas. As proibições alimentares são importantes, mas injustiça contra pessoas é considerada um dos maiores pecados.',
      },
      {
        question: 'Se alguém comer algo haram sem saber, é pecado?',
        answer: 'Não. No Islã, a intenção é fundamental. Quem come algo proibido sem saber ou por necessidade extrema (fome, risco de vida) não comete pecado. Deus julga pela intenção, não pelo resultado.',
      },
    ],
    relatedSlugs: ['o-que-e-halal', 'o-que-e-o-isla', 'como-se-converter'],
  },

  {
    slug: 'o-que-e-o-alcorao',
    title: 'O que é o Alcorão? Guia sobre o livro sagrado | KALAM',
    description: 'Descubra o que é o Alcorão, como foi revelado, o que contém e por que mais de 1 bilhão de pessoas o consideram a palavra de Deus.',
    heroTitle: 'O livro que 1 bilhão de pessoas memorizam',
    heroSubtitle: 'Revelado há mais de 1.400 anos, não teve uma vírgula alterada. Entenda o que é o Alcorão e por que ele é diferente de qualquer outro livro.',
    sections: [
      {
        title: 'O que é o Alcorão?',
        content: 'O Alcorão (القرآن, al-Qur\'an) é o livro sagrado do Islã. Os muçulmanos acreditam que ele é a palavra literal de Deus, revelada ao Profeta Muhammad ao longo de 23 anos (610-632 d.C.) através do anjo Gabriel. Não foi escrito por Muhammad — ele era analfabeto. O texto foi memorizado e registrado por seus companheiros, e compilado em livro pouco após sua morte.\n\nO Alcorão contém 114 capítulos (suratas) e mais de 6.200 versículos (ayats). Ele cobre uma variedade impressionante de temas: teologia, ética, lei, histórias de profetas, reflexões sobre a natureza, orientações para a vida em sociedade e descrições do Dia do Juízo.',
        quranRef: 'Alcorão 2:2',
      },
      {
        title: 'Como o Alcorão foi preservado?',
        content: 'Um dos fatos mais notáveis sobre o Alcorão é sua preservação. Desde o primeiro dia, o texto foi memorizado integralmente por centenas de pessoas. Hoje, milhões de muçulmanos no mundo inteiro — chamados "hafiz" — sabem as 604 páginas de cor, palavra por palavra.\n\nQualquer cópia do Alcorão em qualquer país do mundo é idêntica, letra por letra, a todas as outras. Não existem "versões" ou "edições revisadas" como em outros textos antigos. Manuscritos do século VII, encontrados em escavações, correspondem exatamente ao texto usado hoje. Esse nível de preservação é reconhecido como sem paralelo por historiadores acadêmicos, independente de fé.',
      },
      {
        title: 'O que o Alcorão ensina?',
        content: 'O tema central do Alcorão é o monoteísmo — a existência de um único Deus e o que isso significa para a vida humana. Mas o livro vai muito além da teologia abstrata. Ele contém orientações práticas para ética nos negócios, direitos das mulheres, tratamento de orfãos, justiça nos tribunais e até regras para a guerra.\n\nUma parte significativa do Alcorão é dedicada a histórias de profetas — Abraão, Moisés, José, Jesus — contadas de perspectivas que complementam os relatos bíblicos. Outra parte convida à reflexão sobre a natureza: o ciclo da água, as montanhas como âncoras, o desenvolvimento do embrião humano — passagens que muitos consideram notáveis pela precisão científica em um texto do século VII.',
        quranRef: 'Alcorão 41:53',
      },
      {
        title: 'Como ler o Alcorão pela primeira vez',
        content: 'Se você nunca leu o Alcorão, não comece pela primeira página. O livro não é organizado cronologicamente — as suratas são ordenadas por tamanho, não por sequência histórica. Para uma primeira leitura, recomenda-se começar pelas suratas mais curtas no final do livro, que são mais poéticas e acessíveis.\n\nAlgumas suratas especialmente indicadas para iniciantes: Al-Fatiha (a abertura), Ya-Sin (considerada o "coração do Alcorão"), Ar-Rahman (sobre os favores de Deus) e Al-Mulk (sobre o propósito da vida e da morte). Uma boa tradução em português facilita muito — a de Helmi Nasr é considerada uma das melhores em língua portuguesa.',
      },
    ],
    faq: [
      {
        question: 'O Alcorão e a Bíblia são o mesmo livro?',
        answer: 'Não, mas compartilham muitas histórias e personagens. Os muçulmanos acreditam que a Torá e o Evangelho foram revelações divinas originais, mas que foram alterados ao longo do tempo. O Alcorão se apresenta como a revelação final e preservada.',
      },
      {
        question: 'Precisa saber árabe para ler o Alcorão?',
        answer: 'Não. Existem boas traduções em português. Porém, muçulmanos consideram que a tradução é uma "interpretação do significado" — o texto original em árabe tem camadas de significado que nenhuma tradução captura totalmente.',
      },
      {
        question: 'O Alcorão tem contradições?',
        answer: 'Os muçulmanos acreditam que não. Passagens que parecem contraditórias à primeira vista são explicadas pelo contexto histórico da revelação e pela ciência da exegese (tafsir), que tem mais de 1.400 anos de tradição acadêmica.',
      },
      {
        question: 'Quanto tempo leva para ler o Alcorão?',
        answer: 'O Alcorão tem tamanho similar ao Novo Testamento. Uma leitura contínua leva cerca de 15-20 horas. Muitos muçulmanos o leem em 30 dias durante o Ramadan, dividindo em seções diárias chamadas "juz".',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'quem-e-allah', 'como-fazer-a-oracao'],
  },

  // ─── GROUP B: PRACTICE ────────────────────────────────────────────────────────

  {
    slug: 'como-fazer-a-oracao',
    title: 'Como orar no Islã? Guia passo a passo da Salah | KALAM',
    description: 'Aprenda como funciona a oração islâmica (Salah): os horários, movimentos, palavras e o significado de cada etapa.',
    heroTitle: 'Cinco pausas que mudam o dia',
    heroSubtitle: 'A oração islâmica não é só ritual — é um sistema de reconexão que divide o dia em intervalos de presença e gratidão.',
    sections: [
      {
        title: 'O que é a Salah?',
        content: 'A Salah (صلاة) é a oração formal islâmica, realizada cinco vezes ao dia em horários específicos. Não é uma conversa informal com Deus (isso é chamado de dua e pode ser feito a qualquer momento). A Salah é uma prática estruturada, com movimentos e palavras específicas, que combina corpo, mente e espírito em um ato de adoração.\n\nOs cinco horários são: Fajr (antes do nascer do sol), Dhuhr (meio-dia), Asr (tarde), Maghrib (pôr do sol) e Isha (noite). Cada oração dura entre 3 e 10 minutos. Juntas, elas criam pausas regulares que interrompem a rotina e relembram o muçulmano do que realmente importa.',
        quranRef: 'Alcorão 2:238',
      },
      {
        title: 'Preparação: o Wudu',
        content: 'Antes de orar, o muçulmano realiza o wudu (ablução) — uma lavagem ritual de mãos, rosto, braços e pés com água. Não é apenas higiene. É uma transição simbólica: lavar as distrações do mundo para entrar na presença de Deus. O ato de lavar cada parte do corpo é feito com intenção e consciência.\n\nO wudu permanece válido até que seja "quebrado" por necessidades fisiológicas naturais. Se não há água disponível, existe uma alternativa chamada tayammum, usando terra ou areia limpa — mostrando que a oração é acessível em qualquer circunstância.',
      },
      {
        title: 'Os movimentos da oração',
        content: 'A oração islâmica envolve uma sequência de movimentos chamada "rakat": ficar de pé (qiyam), inclinar-se (ruku), prostrar-se (sujud) e sentar. Cada posição tem um significado: de pé, você está diante de Deus; inclinado, reconhece Sua grandeza; prostrado, entrega-se completamente.\n\nA prostração (sujud) é considerada o momento mais poderoso — quando a testa toca o chão, o muçulmano está no ponto mais próximo de Deus. É quando muitos fazem suas súplicas mais sinceras. Os movimentos não são aleatórios — eles engajam o corpo inteiro na adoração, tornando a oração uma experiência física, mental e espiritual simultânea.',
        hadithRef: 'Sahih Muslim 482',
      },
      {
        title: 'A direção e a comunidade',
        content: 'Todos os muçulmanos oram na direção da Kaaba, em Meca — não porque a Kaaba seja Deus, mas porque ter uma direção unificada cria um senso de unidade global. A qualquer momento do dia, existe um "anel" de muçulmanos ao redor do planeta orando na mesma direção.\n\nA oração pode ser feita sozinho ou em grupo. A oração em grupo (jama\'ah) é especialmente incentivada nas sextas-feiras (Salat al-Jumu\'ah), que inclui um sermão (khutba). Mas em qualquer lugar — casa, escritório, parque — é possível orar. Tudo que se precisa é um espaço limpo. O tapete de oração é tradição, não obrigação.',
      },
    ],
    faq: [
      {
        question: 'Precisa orar em árabe?',
        answer: 'As orações formais (Salah) são recitadas em árabe porque é o idioma original do Alcorão. Porém, as súplicas pessoais (dua) podem ser feitas em qualquer idioma — Deus entende todas as línguas.',
      },
      {
        question: 'E se eu perder uma oração?',
        answer: 'Orações perdidas podem ser compensadas depois — é chamado de "qada". O importante é a intenção de manter a prática. Ninguém é perfeito desde o início, e Deus valoriza o esforço consistente mais que a perfeição.',
      },
      {
        question: 'Mulheres oram diferente dos homens?',
        answer: 'A forma da oração é essencialmente a mesma. Há pequenas variações em algumas escolas de jurisprudência sobre posição das mãos, mas a estrutura é igual. Mulheres em período menstrual são dispensadas da oração, sem necessidade de compensar.',
      },
      {
        question: 'Quanto tempo demora para aprender a orar?',
        answer: 'Os movimentos básicos podem ser aprendidos em um dia. A memorização das recitações em árabe leva algumas semanas de prática regular. A maioria dos convertidos começa com o básico e vai aprofundando com o tempo.',
      },
      {
        question: 'Pode orar em qualquer lugar?',
        answer: 'Sim, desde que o lugar seja limpo. Não precisa de mesquita, tapete especial ou roupas específicas — apenas que cubram o necessário. Muçulmanos oram em escritórios, parques, aeroportos e até na rua.',
      },
    ],
    relatedSlugs: ['o-que-e-wudu', 'o-que-e-o-isla', 'como-se-converter'],
  },

  {
    slug: 'o-que-e-o-hijab',
    title: 'O que é o Hijab? Significado e liberdade | KALAM',
    description: 'O hijab é obrigatório? Entenda o significado do véu islâmico, por que mulheres muçulmanas o usam e o que ele representa.',
    heroTitle: 'Mais do que um véu',
    heroSubtitle: 'Para milhões de mulheres, o hijab não é opressão — é identidade, fé e escolha consciente. Entenda o que ele realmente significa.',
    sections: [
      {
        title: 'O que é o hijab?',
        content: 'A palavra hijab (حجاب) vem do árabe e significa literalmente "barreira" ou "cobertura". No uso cotidiano, refere-se ao lenço que cobre o cabelo e o pescoço da mulher muçulmana. Mas o conceito é mais amplo que a peça de roupa — hijab é um princípio de modéstia que se aplica tanto a homens quanto a mulheres.\n\nNo Alcorão, Deus instrui as mulheres crentes a cobrirem seus adornos e vestirem-se com modéstia. Aos homens, a instrução vem antes: "Abaixem o olhar e guardem sua castidade." A modéstia no Islã começa nos olhos masculinos, não no corpo feminino. Essa ordem é frequentemente ignorada nas discussões sobre o hijab.',
        quranRef: 'Alcorão 24:30-31',
      },
      {
        title: 'Por que mulheres usam o hijab?',
        content: 'As razões variam de mulher para mulher, mas os motivos mais comuns incluem: obediência a Deus, identidade cultural, resistência à objetificação do corpo feminino e senso de comunidade. Muitas mulheres descrevem o hijab como libertador — em um mundo que julga mulheres pela aparência, o hijab redireciona a atenção para o que elas dizem e fazem.\n\nÉ fundamental entender que a experiência do hijab é diversa. Há mulheres que o amam, outras que o usam por hábito cultural, e outras que o rejeitam. No Islã, a coerção religiosa é proibida ("Não há compulsão na religião" — Alcorão 2:256). Forçar uma mulher a usar ou tirar o hijab vai contra o princípio islâmico de escolha consciente.',
        quranRef: 'Alcorão 2:256',
      },
      {
        title: 'Tipos de cobertura no mundo muçulmano',
        content: 'O hijab é apenas um tipo de cobertura. O mundo muçulmano tem uma variedade enorme de estilos. O hijab (mais comum) cobre cabelo e pescoço. O niqab cobre o rosto exceto os olhos. A burca cobre o corpo inteiro com uma tela nos olhos. O khimar é um véu mais longo. O turbante é usado em alguns países africanos.\n\nA maioria dessas variações é cultural, não religiosa. A obrigação islâmica mínima, segundo a maioria dos estudiosos, é cobrir o cabelo. O niqab e a burca são práticas culturais de regiões específicas (Golfo Pérsico, Afeganistão), não obrigações universais. É crucial não confundir cultura local com doutrina islâmica.',
      },
      {
        title: 'O hijab no Brasil e no Ocidente',
        content: 'Para mulheres muçulmanas no Brasil e em países ocidentais, o hijab frequentemente se torna um ato de coragem e identidade. Em um contexto onde o véu não é norma social, usá-lo é uma declaração visível de fé. Muitas enfrentam perguntas, olhares curiosos e às vezes discriminação.\n\nAo mesmo tempo, cresce o movimento de moda modesta (modest fashion) que ultrapassa fronteiras religiosas. Marcas globais como Nike, Dolce & Gabbana e H&M lançaram linhas de moda que incluem o hijab. Mulheres muçulmanas atletas, cientistas, políticas e artistas demonstram diariamente que o hijab não limita competência nem ambição.',
      },
    ],
    faq: [
      {
        question: 'O hijab é obrigatório no Islã?',
        answer: 'A maioria dos estudiosos islâmicos considera a cobertura do cabelo uma obrigação religiosa para mulheres adultas, baseada no Alcorão 24:31. Porém, a aplicação é uma decisão pessoal — forçar alguém a usar ou não usar é proibido no Islã.',
      },
      {
        question: 'Homens muçulmanos também têm regras de vestimenta?',
        answer: 'Sim. Homens devem vestir-se com modéstia (cobrindo do umbigo ao joelho no mínimo), abaixar o olhar, não usar ouro ou seda pura, e não usar roupas que imitem o sexo oposto. A modéstia no Islã é para ambos os sexos.',
      },
      {
        question: 'Mulheres são obrigadas a usar preto?',
        answer: 'Não. A cor não é determinada pela religião — é cultura. Mulheres muçulmanas em diferentes países usam hijab colorido, estampado e em diversos estilos. O uso predominante de preto é tradição de algumas regiões do Golfo Pérsico.',
      },
      {
        question: 'Por que o hijab gera tanta polêmica?',
        answer: 'Porque ele é visível e desafia normas ocidentais de aparência feminina. A polêmica geralmente revela mais sobre quem julga do que sobre quem usa. Para muitas mulheres, o hijab é uma escolha tão válida quanto qualquer outra forma de expressão pessoal.',
      },
    ],
    relatedSlugs: ['isla-e-mulheres', 'o-que-e-o-isla', 'como-se-converter'],
  },

  {
    slug: 'o-que-e-o-ramadan',
    title: 'O que é o Ramadan? Guia completo sobre o jejum | KALAM',
    description: 'Entenda o que é o Ramadan: por que muçulmanos jejuam, como funciona na prática, quem está dispensado e o que acontece à noite.',
    heroTitle: 'Um mês que redefine prioridades',
    heroSubtitle: 'Durante 30 dias, mais de 1 bilhão de pessoas fazem uma pausa nos hábitos automáticos. Entenda o que é o Ramadan e por que ele transforma vidas.',
    sections: [
      {
        title: 'O que é o Ramadan?',
        content: 'O Ramadan (رمضان) é o nono mês do calendário islâmico lunar. É o mês em que o Alcorão começou a ser revelado ao Profeta Muhammad. Durante este mês, muçulmanos adultos e saudáveis jejuam do amanhecer ao pôr do sol — abstendo-se de comida, bebida, relações íntimas e comportamentos negativos.\n\nMas o Ramadan é muito mais que jejum. É um mês de intensificação espiritual: mais oração, mais leitura do Alcorão, mais caridade, mais reflexão. As mesquitas ficam cheias, famílias se reúnem, comunidades se fortalecem. Muitos muçulmanos descrevem o Ramadan como o mês que "reseta" o ano — uma reinicialização espiritual e comportamental.',
        quranRef: 'Alcorão 2:183',
      },
      {
        title: 'Como funciona o jejum na prática?',
        content: 'O jejum começa com o Suhur, uma refeição antes do amanhecer (por volta das 4-5h da manhã). A partir do Fajr (primeira oração do dia), nada entra pela boca — nem água. O jejum termina no Maghrib (pôr do sol), quando a família se reúne para o Iftar, a refeição de quebra do jejum. Tradicionalmente, o jejum é quebrado com tâmaras e água, seguido de uma refeição completa.\n\nDependendo da localização e da época do ano, o jejum pode durar de 10 a 20 horas. Em países nórdicos no verão, pode chegar a 22 horas. No Brasil, geralmente fica entre 12 e 14 horas. A experiência é desafiadora, especialmente nos primeiros dias, mas a maioria dos muçulmanos relata que o corpo se adapta rapidamente.',
      },
      {
        title: 'Por que jejuar?',
        content: 'O jejum no Ramadan tem múltiplas dimensões. A mais imediata é a empatia: ao sentir fome e sede, o muçulmano se conecta com a experiência de milhões que vivem assim diariamente. É difícil ignorar a pobreza quando seu estômago a reproduz.\n\nAlém disso, o jejum é um treinamento de disciplina e autocontrole. Se você consegue dizer "não" à comida e à água por horas, consegue dizer "não" a impulsos mais complexos — raiva, fofoca, preguiça, vícios. É uma reinicialização dos hábitos automáticos. Muitos muçulmanos usam o Ramadan para abandonar vícios como fumar, consumir excessivamente redes sociais ou comer compulsivamente.',
        hadithRef: 'Sahih al-Bukhari 1903',
      },
      {
        title: 'Quem está dispensado?',
        content: 'O Islã é pragmático sobre o jejum. Estão dispensados: crianças antes da puberdade, idosos que não suportam, doentes, grávidas e lactantes, viajantes, e mulheres em período menstrual. Quem não pode jejuar por razão temporária compensa depois. Quem não pode jejuar por razão permanente alimenta uma pessoa necessitada por dia perdido.\n\nEssa flexibilidade é intencional: o objetivo do Ramadan é benefício, não sofrimento. O Alcorão explicitamente diz: "Deus deseja facilidade para vocês, não dificuldade." Forçar-se a jejuar quando há risco à saúde vai contra o próprio espírito do Ramadan.',
        quranRef: 'Alcorão 2:185',
      },
    ],
    faq: [
      {
        question: 'Nem água pode beber durante o jejum?',
        answer: 'Correto. O jejum islâmico é completo — nada entra pela boca do amanhecer ao pôr do sol, incluindo água. É uma prática que desafia o corpo e fortalece a disciplina mental.',
      },
      {
        question: 'Engolir saliva quebra o jejum?',
        answer: 'Não. Saliva natural não quebra o jejum. Apenas a ingestão voluntária de comida, bebida ou outras substâncias invalida o jejum. Ações involuntárias (como engolir poeira) também não contam.',
      },
      {
        question: 'O que é a Laylat al-Qadr?',
        answer: 'É a "Noite do Decreto" — a noite em que o Alcorão começou a ser revelado. O Alcorão diz que ela é "melhor que mil meses." Acredita-se que ocorre em uma das noites ímpares dos últimos 10 dias do Ramadan.',
      },
      {
        question: 'O que é o Eid al-Fitr?',
        answer: 'É a celebração que marca o fim do Ramadan. Inclui uma oração especial em comunidade, troca de presentes, refeições festivas e caridade obrigatória (Zakat al-Fitr) para que todos possam celebrar.',
      },
      {
        question: 'Posso experimentar jejuar sem ser muçulmano?',
        answer: 'Sim. Muitas pessoas experimentam o jejum do Ramadan por curiosidade ou solidariedade. É uma experiência transformadora que não exige conversão — apenas respeito pelo processo.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'como-fazer-a-oracao', 'o-que-e-halal'],
  },

  {
    slug: 'como-se-converter',
    title: 'Como se converter ao Islã? Guia simples e completo | KALAM',
    description: 'Entenda como funciona a conversão ao Islã: a Shahada, os primeiros passos, o que muda na vida e respostas para dúvidas comuns.',
    heroTitle: 'Não é uma mudança — é um retorno',
    heroSubtitle: 'No Islã, converter-se não é adotar algo novo. É reconhecer o que sua natureza (fitra) sempre soube. Um caminho de volta, não de ida.',
    sections: [
      {
        title: 'A conversão é simples',
        content: 'Converter-se ao Islã é surpreendentemente simples. Não precisa de batismo, cerimônia, aprovação de líder religioso ou anos de estudo. O ato essencial é a Shahada — a declaração de fé: "Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan rasulullah" (Testemunho que não há divindade além de Deus, e que Muhammad é Seu mensageiro).\n\nEssa declaração, feita com convicção e sinceridade, é o que torna alguém muçulmano. Não é uma frase mágica — é a expressão verbal de uma convicção que já se formou no coração. Muitos convertidos descrevem que o momento da Shahada é mais reconhecimento do que descoberta.',
        quranRef: 'Alcorão 49:14',
      },
      {
        title: 'O que muda depois?',
        content: 'Depois da Shahada, a vida não muda instantaneamente — e não precisa. O Islã foi revelado ao longo de 23 anos, com mudanças graduais. Um novo muçulmano não precisa saber tudo no primeiro dia. O caminho é progressivo: aprender a orar, entender as bases da fé, ajustar hábitos gradualmente.\n\nMudanças práticas incluem: aprender as cinco orações diárias (o que leva semanas, não dias), ajustar a alimentação (cortar porco e álcool), e desenvolver uma relação direta com Deus através de dua (súplica). Muitos convertidos relatam que as maiores mudanças são internas — uma clareza de propósito e uma paz que não tinham antes.',
      },
      {
        title: 'E quanto à família e aos amigos?',
        content: 'Uma das maiores preocupações de quem considera a conversão é a reação da família e dos amigos. Isso é natural e válido. O Islã não pede que você corte relações — pelo contrário, manter bom relacionamento com os pais é uma das maiores obrigações, mesmo que não sejam muçulmanos.\n\nA melhor abordagem costuma ser a transparência gradual: viver os valores antes de anunciar a decisão, responder perguntas com calma e demonstrar pelos atos que a mudança é positiva. O Alcorão diz: "Não há compulsão na religião" — e isso vale nos dois sentidos. Você não pode ser forçado a entrar nem deve forçar outros a aceitar.',
        quranRef: 'Alcorão 31:14-15',
      },
      {
        title: 'Primeiros passos práticos',
        content: 'Se você está considerando a conversão, alguns passos práticos ajudam: primeiro, continue estudando. Leia o Alcorão com tradução, assista aulas de estudiosos confiáveis, converse com muçulmanos praticantes. Segundo, visite uma mesquita — a maioria tem programas para novos interessados e convertidos.\n\nTerceiro, não espere estar "pronto". Ninguém está. A Shahada é o começo do caminho, não o final. Muitos estudiosos recomendam: se você acredita que existe um único Deus e que Muhammad é Seu mensageiro, já é hora. O aprendizado vem depois, e a comunidade muçulmana tem a responsabilidade de acompanhar e apoiar cada novo muçulmano.',
        hadithRef: 'Sahih Muslim 121',
      },
    ],
    faq: [
      {
        question: 'Preciso mudar meu nome ao me converter?',
        answer: 'Não é obrigatório. Mudar o nome é tradição cultural, não obrigação religiosa. Se o nome atual não tiver significado contrário ao Islã, pode mantê-lo. Muitos convertidos escolhem um nome árabe adicional por afinidade, não por obrigação.',
      },
      {
        question: 'Preciso aprender árabe?',
        answer: 'Não precisa ser fluente. Memorizar algumas frases curtas para a oração é suficiente no início. Com o tempo, muitos aprendem mais por interesse pessoal. Deus entende todas as línguas.',
      },
      {
        question: 'Homens precisam fazer a circuncisão?',
        answer: 'É uma prática recomendada (Sunnah) para homens, mas não é um pré-requisito para a conversão. A Shahada não tem pré-requisitos físicos. A decisão sobre a circuncisão pode ser tomada depois, com calma.',
      },
      {
        question: 'Meus pecados anteriores são perdoados?',
        answer: 'Sim. A tradição islâmica ensina que a conversão apaga todos os pecados anteriores. É um recomeço completo. O Profeta Muhammad disse que quem aceita o Islã começa com uma "página em branco".',
      },
      {
        question: 'Posso me converter sozinho ou precisa ter testemunhas?',
        answer: 'A Shahada pode ser feita sozinho — é entre você e Deus. Porém, fazer com testemunhas na mesquita é recomendado porque facilita a integração na comunidade e serve como registro.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'como-fazer-a-oracao', 'o-que-e-wudu'],
  },

  {
    slug: 'o-que-e-wudu',
    title: 'O que é Wudu? A ablução islâmica passo a passo | KALAM',
    description: 'Aprenda o que é wudu (ablução), como fazer passo a passo, quando é necessário e o significado espiritual dessa purificação.',
    heroTitle: 'A purificação que antecede a presença',
    heroSubtitle: 'Antes de se colocar diante de Deus, o muçulmano se prepara — por dentro e por fora. O wudu é o portal entre o mundo e a oração.',
    sections: [
      {
        title: 'O que é o wudu?',
        content: 'Wudu (وضوء) é a ablução ritual islâmica — uma lavagem específica de partes do corpo que o muçulmano realiza antes da oração. Não é apenas um ato de higiene, embora inclua isso. É uma preparação consciente para entrar em um estado de presença espiritual.\n\nA palavra "wudu" está conectada ao conceito de clareza e luminosidade. O Profeta Muhammad ensinou que no Dia do Juízo, sua comunidade será reconhecida pela luminosidade nos membros lavados pelo wudu. É uma prática que une o físico ao espiritual: enquanto a água limpa o corpo, a intenção limpa o coração.',
        quranRef: 'Alcorão 5:6',
      },
      {
        title: 'Como fazer o wudu: passo a passo',
        content: 'O wudu segue uma sequência específica, que começa com a intenção (niyyah) no coração — não precisa ser verbalizada. Depois:\n\n1. Diga "Bismillah" (Em nome de Deus)\n2. Lave as mãos três vezes\n3. Enxágue a boca três vezes\n4. Limpe o nariz três vezes (aspire e assoe água)\n5. Lave o rosto inteiro três vezes\n6. Lave os braços até os cotovelos três vezes (direito primeiro)\n7. Passe as mãos molhadas pela cabeça uma vez\n8. Limpe as orelhas com os dedos molhados uma vez\n9. Lave os pés até os tornozelos três vezes (direito primeiro)\n\nTodo o processo leva de 2 a 3 minutos e usa pouca água — o Profeta enfatizava não desperdiçar água, mesmo estando à beira de um rio.',
        hadithRef: 'Sahih al-Bukhari 159',
      },
      {
        title: 'O que invalida o wudu?',
        content: 'O wudu permanece válido até ser "quebrado" por certas ações naturais: ir ao banheiro (urina, fezes ou gases), sangramento significativo, sono profundo, perda de consciência ou vômito. Sudor, lágrimas e pequenos ferimentos não invalidam o wudu na maioria das escolas jurídicas.\n\nSe o wudu é quebrado, basta refazê-lo antes da próxima oração. Não é preciso tomar banho completo — apenas repetir os passos da ablução. A simplicidade do processo é intencional: não deve ser um obstáculo para a oração.',
      },
      {
        title: 'Quando não há água: o Tayammum',
        content: 'O Islã prevê situações em que a água não está disponível ou seu uso prejudicaria a saúde (doença, feridas). Nestes casos, existe o tayammum — a ablução seca. O muçulmano bate levemente as mãos em terra limpa, areia ou pedra, e passa nas mãos e no rosto.\n\nEssa alternativa mostra que o objetivo do wudu é a preparação espiritual, não a limpeza física em si. Deus não quer criar dificuldade — o Alcorão diz explicitamente: "Deus não deseja impor-lhes dificuldade, mas sim purificá-los." A essência é a intenção de se apresentar limpo e consciente diante do Criador.',
        quranRef: 'Alcorão 5:6',
      },
    ],
    faq: [
      {
        question: 'Preciso fazer wudu toda vez que for orar?',
        answer: 'Não, se o wudu anterior ainda estiver válido. O wudu só precisa ser refeito se algo o invalidou (ir ao banheiro, sono profundo, etc.). Se nada o quebrou, uma única ablução serve para várias orações.',
      },
      {
        question: 'Mulheres com esmalte podem fazer wudu?',
        answer: 'O esmalte tradicional cria uma barreira que impede a água de tocar a unha, o que invalida o wudu segundo a maioria dos estudiosos. Existem esmaltes permeáveis à água (halal nail polish) que resolvem essa questão.',
      },
      {
        question: 'E se eu estiver no trabalho e não tiver como fazer wudu?',
        answer: 'Pode usar qualquer pia — banheiro de escritório, cozinha, etc. Em casos extremos, o tayammum (ablução seca) é uma alternativa válida. Muitos muçulmanos em ambientes corporativos desenvolvem formas discretas de realizar o wudu.',
      },
      {
        question: 'Qual a diferença entre wudu e ghusl?',
        answer: 'Wudu é a ablução parcial (mãos, rosto, braços, pés) feita antes das orações. Ghusl é o banho ritual completo, necessário após relações íntimas, menstruação, ou emissão de fluido seminal.',
      },
    ],
    relatedSlugs: ['como-fazer-a-oracao', 'como-se-converter', 'o-que-e-o-isla'],
  },

  // ─── GROUP C: CONTEXT ────────────────────────────────────────────────────────

  {
    slug: 'isla-e-violencia',
    title: 'O Islã é violento? A verdade sobre jihad e terrorismo | KALAM',
    description: 'O Islã promove violência? Entenda o que realmente significa jihad, o que o Alcorão diz sobre guerra e paz, e por que o terrorismo viola o Islã.',
    heroTitle: 'A pergunta que precisa de resposta honesta',
    heroSubtitle: 'Não vamos fugir da pergunta mais difícil. O Islã promove violência? Vamos aos fatos, aos textos e ao contexto — sem defesa automática.',
    sections: [
      {
        title: 'O que os números dizem',
        content: 'Se o Islã fosse inerentemente violento, seus 1.8 bilhão de seguidores representariam a maior crise de segurança da história. A realidade é que a vasta maioria dos muçulmanos vive em paz, trabalha, estuda, cria filhos e contribui para suas comunidades exatamente como qualquer outra pessoa.\n\nDados do Global Terrorism Index mostram que as principais vítimas do terrorismo praticado em nome do Islã são... muçulmanos. Países como Iraque, Afeganistão e Síria pagam o preço mais alto. Os muçulmanos comuns são duplamente vítimas: sofrem a violência E sofrem o preconceito gerado por ela. Equiparar 1.8 bilhão de pessoas a ações de uma fração minúscula é estatisticamente e moralmente insustentável.',
      },
      {
        title: 'O que o Alcorão realmente diz',
        content: 'Os versículos frequentemente citados fora de contexto para "provar" que o Islã é violento foram revelados em situações específicas de guerra — quando a comunidade muçulmana estava sendo perseguida e atacada. Lê-los sem contexto seria como citar passagens de guerra do Antigo Testamento para definir o judaísmo ou o cristianismo.\n\nO Alcorão estabelece regras claras para o conflito: só em autodefesa, sem atacar civis, sem destruir árvores ou plantações, sem matar mulheres, crianças ou idosos, e parar quando o inimigo buscar paz. O versículo mais citado pelos terroristas ("Matem-nos onde os encontrarem" — 2:191) é precedido por "Combatam no caminho de Deus aqueles que vos combatem, mas não transgridam" (2:190), e seguido por "Se cessarem, Deus é Perdoador, Misericordioso" (2:192).',
        quranRef: 'Alcorão 2:190-192',
      },
      {
        title: 'O que é Jihad de verdade?',
        content: 'A palavra jihad (جهاد) significa "esforço" ou "luta". O Profeta Muhammad, voltando de uma batalha, disse: "Retornamos da jihad menor para a jihad maior." Quando perguntado o que era a jihad maior, respondeu: "A luta contra o próprio ego."\n\nNo dia a dia de um muçulmano, jihad é: acordar cedo para orar quando o corpo quer dormir, jejuar quando o estômago quer comer, ser honesto quando mentir seria mais fácil, estudar quando seria mais fácil desistir. A jihad militar (jihad menor) tem regras tão restritivas que muitos estudiosos a consideram essencialmente defensiva.',
        hadithRef: 'Musnad Ahmad',
      },
      {
        title: 'O terrorismo contradiz o Islã',
        content: 'Todos os principais estudiosos islâmicos do mundo já emitiram fatwas (pareceres religiosos) condenando o terrorismo como absolutamente proibido no Islã. A Carta Aberta a Al-Baghdadi (2014), assinada por mais de 120 estudiosos de todo o mundo muçulmano, refutou ponto a ponto as justificativas do ISIS usando o próprio Alcorão e a tradição profética.\n\nO Profeta Muhammad proibiu: matar civis, matar quem não combate, suicídio, destruição de propriedade e coerção religiosa. Cada uma dessas proibições torna os atos terroristas haram (proibidos) segundo o próprio Islã. Os terroristas não praticam o Islã — eles o instrumentalizam para fins políticos, assim como outras ideologias já foram instrumentalizadas ao longo da história.',
        quranRef: 'Alcorão 5:32',
      },
    ],
    faq: [
      {
        question: 'Se o Islã é pacífico, por que existem terroristas muçulmanos?',
        answer: 'Pela mesma razão que existem terroristas cristãos, nacionalistas e de extrema-esquerda: extremismo político usa religião como ferramenta. O terrorismo é motivado por geopolítica, não por teologia. Confundir os dois é o erro mais comum.',
      },
      {
        question: 'O Alcorão manda matar não-muçulmanos?',
        answer: 'Não. Os versículos sobre combate foram revelados em contexto de guerra defensiva e têm condições específicas. O Alcorão 60:8 diz: "Deus não vos proíbe de tratar com bondade e justiça aqueles que não vos combateram por causa da religião."',
      },
      {
        question: 'O que os muçulmanos acham do ISIS?',
        answer: 'A esmagadora maioria dos muçulmanos rejeita o ISIS e o considera anti-islâmico. As maiores forças combatendo o ISIS foram de países muçulmanos. Mais de 120 estudiosos emitiram uma refutação detalhada contra o grupo em 2014.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'o-que-e-o-alcorao', 'isla-e-mulheres'],
  },

  {
    slug: 'sunitas-e-xiitas',
    title: 'Sunitas e Xiitas: qual a diferença? | KALAM',
    description: 'Entenda a diferença entre sunitas e xiitas de forma clara: a origem histórica, as crenças, as práticas e o que compartilham.',
    heroTitle: 'Uma família com duas perspectivas',
    heroSubtitle: 'Sunitas e xiitas compartilham o mesmo Deus, o mesmo Profeta e o mesmo Alcorão. A diferença começou com uma pergunta política, não teológica.',
    sections: [
      {
        title: 'A origem da divisão',
        content: 'Quando o Profeta Muhammad faleceu em 632 d.C., a comunidade muçulmana enfrentou uma questão prática: quem seria o próximo líder? Um grupo defendia que a comunidade deveria escolher o mais qualificado — esse grupo se tornou os sunitas. Outro grupo defendia que a liderança deveria permanecer na família do Profeta, especificamente com Ali, seu primo e genro — esse grupo se tornou os xiitas (de "Shi\'at Ali" — partido de Ali).\n\nA divisão, portanto, não começou por uma questão teológica sobre Deus, o Alcorão ou os pilares do Islã. Foi uma divergência política sobre sucessão. Com o tempo, práticas e ênfases diferentes se desenvolveram, mas o fundamento é o mesmo.',
      },
      {
        title: 'O que compartilham?',
        content: 'Sunitas e xiitas compartilham muito mais do que os separa. Ambos acreditam em um único Deus (Allah), no Alcorão como palavra de Deus, em Muhammad como último profeta, nos cinco pilares do Islã, nos seis artigos de fé, e na vida após a morte.\n\nAmbos oram cinco vezes ao dia na direção de Meca, jejuam no Ramadan, realizam a peregrinação (Hajj), pagam o zakat e recitam a Shahada. As diferenças são mais de prática e ênfase do que de fundamento. É como católicos e protestantes no cristianismo — reconhecidamente diferentes, mas compartilhando o mesmo alicerce.',
      },
      {
        title: 'As diferenças na prática',
        content: 'As principais diferenças incluem: na oração, xiitas às vezes combinam orações (orando 3 vezes ao dia em vez de 5), e usam uma pedrinha de argila (turbah) para prostrar. Na jurisprudência, xiitas seguem a escola Ja\'fariyya, enquanto sunitas seguem uma das quatro escolas clássicas (Hanafi, Maliki, Shafi\'i, Hanbali).\n\nXiitas dão grande importância ao sofrimento de Hussain, neto do Profeta, martirizado na Batalha de Karbala (680 d.C.). O evento é comemorado na Ashura com rituais de luto. Xiitas também têm a instituição do Imamato — líderes religiosos considerados guias divinamente inspirados. A vertente principal (Doze Imames) acredita que o 12º Imam está oculto e retornará.',
      },
      {
        title: 'Proporção e distribuição',
        content: 'Os sunitas representam cerca de 85-90% dos muçulmanos no mundo. Os xiitas, 10-15%. Países de maioria xiita incluem Irã, Iraque, Bahrein e Azerbaijão. Comunidades xiitas significativas existem no Líbano, Iêmen, Paquistão e Arábia Saudita.\n\nApesar de conflitos geopolíticos que frequentemente são enquadrados como "sunita vs. xiita", muçulmanos das duas vertentes convivem pacificamente na maioria dos contextos. Casamentos entre sunitas e xiitas são comuns em muitos países. A narrativa de conflito permanente é mais reflexo de disputas políticas entre Irã e Arábia Saudita do que da realidade vivida pela maioria dos muçulmanos.',
      },
    ],
    faq: [
      {
        question: 'Sunitas e xiitas se odeiam?',
        answer: 'Não. A grande maioria convive pacificamente. Conflitos nessas linhas são geralmente políticos, não religiosos. Casamentos entre sunitas e xiitas são comuns em muitos países.',
      },
      {
        question: 'Qual é o "correto"?',
        answer: 'Ambos se consideram muçulmanos autênticos e compartilham os fundamentos do Islã. A questão da "correção" depende da perspectiva teológica de cada grupo. O essencial — monoteísmo, Alcorão, profetismo — é idêntico.',
      },
      {
        question: 'O Islã no Brasil é sunita ou xiita?',
        answer: 'A comunidade muçulmana no Brasil é majoritariamente sunita, mas existem comunidades xiitas em cidades como São Paulo e Foz do Iguaçu. Ambas convivem sem conflito significativo.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'o-que-e-o-alcorao', 'isla-no-brasil'],
  },

  {
    slug: 'isla-e-mulheres',
    title: 'Como o Islã trata as mulheres? A verdade | KALAM',
    description: 'O Islã oprime as mulheres? Descubra o que o Alcorão diz sobre direitos femininos, o que é cultura vs. religião, e histórias reais.',
    heroTitle: 'A diferença entre o texto e a cultura',
    heroSubtitle: 'A pergunta mais honesta não é "o Islã oprime mulheres?" — é "o que o texto diz e o que a cultura faz com ele?"',
    sections: [
      {
        title: 'O que o Alcorão diz sobre mulheres',
        content: 'O Alcorão foi revelado no século VII na Península Arábica — um contexto onde meninas recém-nascidas eram enterradas vivas. Nesse cenário, o Alcorão proibiu o infanticídio feminino, garantiu às mulheres direito à herança (quando na Europa isso só viria séculos depois), direito ao divórcio, direito à propriedade, e direito de recusar um casamento.\n\nO Alcorão dedica uma surata inteira às mulheres (An-Nisa). Nela, estabelece que homens e mulheres vieram da mesma alma, que mulheres têm direito ao dote (pago a elas, não às suas famílias), e que a violência doméstica é proibida (apesar de um versículo controverso cujo contexto e interpretação geram debate até hoje entre estudiosos).',
        quranRef: 'Alcorão 4:1',
      },
      {
        title: 'A confusão entre cultura e religião',
        content: 'Uma das maiores confusões sobre o Islã é misturar práticas culturais com ensinamentos religiosos. A proibição de mulheres dirigirem na Arábia Saudita (revogada em 2018) era uma lei saudita, não uma regra islâmica. A mutilação genital feminina é uma prática africana (praticada também por cristãos e animistas), não uma obrigação islâmica. Casamentos forçados são proibidos no Islã — o consentimento da mulher é condição obrigatória.\n\nSeparar o que é Islã do que é cultura requer conhecer os textos originais. Muitas das práticas mais criticadas — proibição de educação feminina, violência de honra, casamento infantil — são explicitamente contrárias ao Alcorão e à tradição do Profeta. A esposa de Muhammad, Khadija, foi uma empresária que o empregou. Aisha foi uma das maiores estudiosas e narradoras de hadiths da história.',
        hadithRef: 'Sahih al-Bukhari 5136',
      },
      {
        title: 'Mulheres muçulmanas que fizeram história',
        content: 'Ao longo da história islâmica, mulheres ocuparam posições de destaque. Khadija bint Khuwaylid foi uma das mulheres mais ricas de Meca e a primeira pessoa a aceitar o Islã. Aisha bint Abi Bakr foi estudiosa, jurista e líder militar. Fatima al-Fihri fundou a primeira universidade do mundo (Universidade de Al-Qarawiyyin, em 859 d.C.).\n\nNa era moderna, países de maioria muçulmana elegeram mulheres como chefes de Estado antes de muitos países ocidentais: Benazir Bhutto no Paquistão (1988), Tansu Çiller na Turquia (1993), Megawati na Indonésia (2001). Bangladesh teve mais anos sob liderança feminina do que a maioria dos países europeus.',
      },
      {
        title: 'O desafio honesto',
        content: 'Seria desonesto negar que existem problemas reais. Em muitas comunidades muçulmanas, interpretações patriarcais limitam os direitos das mulheres de formas que contradizem os próprios textos islâmicos. A questão da herança (onde a mulher recebe metade da parte do homem) é frequentemente aplicada sem considerar o contexto completo do sistema financeiro islâmico, onde o homem tem obrigação legal de sustentar a família e a mulher não tem.\n\nO caminho mais honesto é reconhecer simultaneamente que: (1) os textos originais do Islã foram revolucionários para os direitos femininos no contexto do século VII, (2) muitas culturas muçulmanas falharam em aplicar esses princípios, e (3) existe um movimento crescente de mulheres muçulmanas recuperando seus direitos usando os próprios textos islâmicos como base.',
      },
    ],
    faq: [
      {
        question: 'O Islã permite que homens batam em suas esposas?',
        answer: 'O Alcorão 4:34 é o versículo mais debatido sobre isso. Estudiosos divergem na interpretação — muitos afirmam que a palavra usada ("daraba") significa "afastar-se" e não "bater". O Profeta nunca bateu em uma mulher e disse que os melhores homens são os que melhor tratam suas esposas.',
      },
      {
        question: 'Por que a mulher herda menos que o homem?',
        answer: 'No sistema islâmico, a mulher herda metade da parte do homem, mas não tem obrigação de gastar seu dinheiro com a família — o homem tem. Quando se soma herança + isenção de gastos, a mulher frequentemente retém mais riqueza líquida.',
      },
      {
        question: 'A mulher muçulmana pode trabalhar?',
        answer: 'Sim. A primeira esposa do Profeta, Khadija, era empresária. Não há proibição islâmica ao trabalho feminino. Restrições que existem em alguns países são culturais, não religiosas.',
      },
      {
        question: 'O Islã permite poligamia?',
        answer: 'O Alcorão permite que um homem tenha até quatro esposas, com a condição de tratar todas com justiça absoluta. O mesmo versículo conclui: "Se temerem não ser justos, então apenas uma." Na prática, a grande maioria dos casamentos muçulmanos é monogâmica.',
      },
    ],
    relatedSlugs: ['o-que-e-o-hijab', 'o-que-e-o-isla', 'isla-e-violencia'],
  },

  {
    slug: 'isla-no-brasil',
    title: 'O Islã no Brasil: história, comunidades e números | KALAM',
    description: 'Descubra a história do Islã no Brasil desde os escravos muçulmanos, as comunidades atuais, mesquitas e o crescimento da religião no país.',
    heroTitle: 'Uma presença mais antiga do que você imagina',
    heroSubtitle: 'O Islã chegou ao Brasil antes da independência — trazido por africanos que preservaram sua fé contra tudo e todos.',
    sections: [
      {
        title: 'As raízes africanas do Islã no Brasil',
        content: 'A história do Islã no Brasil começa com a escravidão. Estima-se que entre 15% e 30% dos africanos trazidos ao Brasil entre os séculos XVI e XIX eram muçulmanos — vindos principalmente da África Ocidental (atuais Nigéria, Mali, Senegal, Guiné). Eles eram chamados de "malês" (do iorubá "imale", que significa muçulmano).\n\nEsses muçulmanos escravizados mantiveram sua fé em condições extremas: oravam em segredo, memorizavam o Alcorão, usavam amuletos com versículos corânicos e preservavam o árabe como língua de resistência. Em 1835, os malês protagonizaram a maior revolta urbana de escravos das Américas — a Revolta dos Malês, em Salvador.',
      },
      {
        title: 'A imigração árabe e o crescimento moderno',
        content: 'A segunda onda do Islã no Brasil veio com a imigração árabe no final do século XIX e início do XX. Libaneses, sírios e palestinos trouxeram sua cultura e fé, estabelecendo comunidades especialmente em São Paulo e no Sul do país. A Mesquita Brasil, em São Paulo, inaugurada em 1960, é um dos marcos dessa presença.\n\nFoz do Iguaçu, na fronteira com Paraguai e Argentina, abriga uma das maiores comunidades árabes muçulmanas do Brasil. A Mesquita Omar Ibn Al-Khattab é a maior da América Latina em capacidade. A cidade é um exemplo de convivência entre muçulmanos, cristãos e outras comunidades.',
      },
      {
        title: 'Convertidos brasileiros: o novo capítulo',
        content: 'Nas últimas décadas, um fenômeno crescente tem marcado o Islã no Brasil: a conversão de brasileiros sem ascendência árabe. Motivados por busca espiritual, contato com muçulmanos, estudos independentes ou até séries de TV, milhares de brasileiros estão descobrindo o Islã.\n\nA comunidade de convertidos traz desafios e riquezas únicas. Muitos encontram no Islã respostas para perguntas que outras tradições não responderam. Ao mesmo tempo, enfrentam o desafio de conciliar uma fé com forte identidade cultural árabe com a realidade brasileira. A construção de um "Islã brasileiro" — fiel ao texto, adaptado à cultura local — é um dos movimentos mais interessantes da comunidade muçulmana atual no país.',
      },
      {
        title: 'O Islã brasileiro em números',
        content: 'O Censo de 2010 registrou cerca de 35 mil muçulmanos no Brasil. Porém, lideranças comunitárias estimam números muito maiores — entre 200 mil e 1.5 milhão — argumentando que muitos não declaram sua religião no censo ou não foram contados adequadamente.\n\nO Brasil tem mais de 150 mesquitas e centros islâmicos, distribuídos em todas as regiões. As maiores concentrações estão em São Paulo, Paraná, Rio Grande do Sul e Rio de Janeiro. Instituições como a CDIAL (Centro de Divulgação do Islam para América Latina) e a FAMBRAS (Federação das Associações Muçulmanas do Brasil) trabalham na articulação da comunidade.',
      },
    ],
    faq: [
      {
        question: 'Quantos muçulmanos tem no Brasil?',
        answer: 'As estimativas variam de 35 mil (Censo 2010) a 1.5 milhão (estimativas comunitárias). A discrepância existe porque muitos não declaram sua religião formalmente ou não foram contados adequadamente.',
      },
      {
        question: 'Onde tem mesquita no Brasil?',
        answer: 'Existem mesquitas em São Paulo, Rio de Janeiro, Curitiba, Foz do Iguaçu, Porto Alegre, Brasília, Recife, Salvador e outras cidades. A Mesquita Omar Ibn Al-Khattab em Foz do Iguaçu é a maior da América Latina.',
      },
      {
        question: 'O que foi a Revolta dos Malês?',
        answer: 'Foi uma revolta de escravos muçulmanos em Salvador, Bahia, em 25 de janeiro de 1835. Planejada durante o Ramadan, foi a maior insurreição urbana de escravos das Américas e demonstrou a organização e educação dos muçulmanos escravizados.',
      },
      {
        question: 'Existe preconceito contra muçulmanos no Brasil?',
        answer: 'Sim, a islamofobia existe no Brasil, geralmente alimentada por desinformação e estereótipos da mídia. Mulheres que usam hijab relatam mais incidentes. Porém, o Brasil é geralmente mais receptivo que muitos países europeus.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'como-se-converter', 'o-que-e-o-hijab'],
  },

  {
    slug: 'jesus-no-isla',
    title: 'Jesus no Islã: o que os muçulmanos acreditam | KALAM',
    description: 'Muçulmanos acreditam em Jesus? Descubra quem é Isa no Islã, o que o Alcorão diz sobre ele e as semelhanças com o cristianismo.',
    heroTitle: 'O profeta que une duas tradições',
    heroSubtitle: 'Jesus é um dos personagens mais reverenciados no Islã. Mas a história que o Alcorão conta tem diferenças — e semelhanças — surpreendentes.',
    sections: [
      {
        title: 'Jesus no Alcorão',
        content: 'Jesus (Isa, em árabe) é mencionado 25 vezes no Alcorão — mais do que o próprio Muhammad. Ele recebe títulos extraordinários: Messias (Al-Masih), Palavra de Deus (Kalimatu Allah), Espírito de Deus (Ruh Allah). Uma surata inteira do Alcorão é dedicada à sua mãe, Maria (Maryam) — que, aliás, é a única mulher mencionada por nome no Alcorão.\n\nO Islã afirma que Jesus nasceu de uma virgem por milagre divino, que realizou milagres (curou doentes, ressuscitou mortos, falou no berço), e que foi um dos maiores profetas da história. A reverência dos muçulmanos por Jesus surpreende muitos cristãos que nunca souberam disso.',
        quranRef: 'Alcorão 3:45-49',
      },
      {
        title: 'As diferenças com o cristianismo',
        content: 'A principal diferença é teológica: o Islã não aceita que Jesus seja Deus ou filho de Deus no sentido literal. Para os muçulmanos, Jesus é um ser humano — extraordinário, milagroso, abençoado — mas humano. Deus, no Islã, não gera nem é gerado.\n\nOutra diferença significativa é sobre a crucificação. O Alcorão afirma que Jesus não foi morto na cruz: "Eles não o mataram nem o crucificaram, mas assim lhes foi apresentado." A tradição islâmica majoritária ensina que Deus elevou Jesus a Si e que ele retornará antes do Dia do Juízo. Portanto, para os muçulmanos, a história de Jesus ainda não terminou.',
        quranRef: 'Alcorão 4:157-158',
      },
      {
        title: 'O que Jesus ensina no Islã',
        content: 'No Alcorão, Jesus é apresentado como um profeta que enfatizou a misericórdia, a humildade e a adoração ao Deus único. Ele é descrito como alguém que curava os doentes, confortava os aflitos e confrontava a hipocrisia religiosa de seu tempo.\n\nUm dos momentos mais poderosos de Jesus no Alcorão é quando Deus lhe pergunta no Dia do Juízo: "Ó Jesus, filho de Maria! Foste tu que disseste aos homens: Tomai-me e à minha mãe como deuses além de Deus?" E Jesus responde: "Glória a Ti! Não me compete dizer o que não tenho direito de dizer." É uma cena de humildade profunda que ilustra como o Islã vê Jesus: um servo de Deus que nunca pediu para ser adorado.',
        quranRef: 'Alcorão 5:116-117',
      },
      {
        title: 'Uma ponte entre as tradições',
        content: 'Em vez de ver as diferenças como conflitos, muitos estudiosos propõem vê-las como perspectivas complementares. Cristãos e muçulmanos concordam que Jesus nasceu de uma virgem, realizou milagres, foi elevado aos céus, e retornará. Discordam sobre sua natureza divina e a crucificação.\n\nO Alcorão chama cristãos e judeus de "Povo do Livro" (Ahl al-Kitab) — uma categoria especial de respeito. O Profeta Muhammad tinha relações cordiais com cristãos e judeus, incluindo um tratado de proteção com os cristãos do Monastério de Santa Catarina no Sinai, que ainda existe hoje. Jesus, no Islã, não é uma figura de divisão — é uma ponte.',
        quranRef: 'Alcorão 29:46',
      },
    ],
    faq: [
      {
        question: 'Muçulmanos acreditam em Jesus?',
        answer: 'Sim. Jesus (Isa) é um dos profetas mais importantes do Islã. Negar Jesus no Islã é sair da fé. A diferença é que muçulmanos o veem como profeta humano, não como Deus ou filho de Deus.',
      },
      {
        question: 'O Alcorão fala de Maria?',
        answer: 'Sim. Maria (Maryam) é a única mulher mencionada por nome no Alcorão e tem uma surata inteira dedicada a ela (Surata 19). O Alcorão a descreve como a mulher mais virtuosa da história.',
      },
      {
        question: 'Muçulmanos acreditam que Jesus vai voltar?',
        answer: 'Sim. A tradição islâmica ensina que Jesus retornará antes do Dia do Juízo, derrotará o falso messias (Dajjal), estabelecerá a justiça na terra e morrerá naturalmente. Ele é uma figura escatológica central no Islã.',
      },
      {
        question: 'Se muçulmanos respeitam Jesus, por que não são cristãos?',
        answer: 'Porque respeitar Jesus como profeta é diferente de adorá-lo como Deus. No Islã, a adoração é exclusiva a Deus. Jesus, como todos os profetas, veio para direcionar as pessoas a Deus — não a si mesmo.',
      },
      {
        question: 'O Alcorão contradiz a Bíblia sobre Jesus?',
        answer: 'Há pontos de concordância (nascimento virginal, milagres, ascensão) e divergência (natureza divina, crucificação). Muçulmanos acreditam que as diferenças refletem alterações nos textos bíblicos ao longo do tempo, enquanto o Alcorão preserva a narrativa original.',
      },
    ],
    relatedSlugs: ['o-que-e-o-isla', 'o-que-e-o-alcorao', 'quem-e-allah'],
  },
]

export function getSEOPageBySlug(slug: string): SEOPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug)
}

export function getRelatedPages(slugs: string[]): SEOPage[] {
  return slugs
    .map((s) => SEO_PAGES.find((p) => p.slug === s))
    .filter((p): p is SEOPage => p !== undefined)
}

export const SEO_PAGE_GROUPS = [
  {
    label: 'Fundamentos',
    description: 'O essencial sobre o Islã para quem está começando.',
    slugs: [
      'o-que-e-o-isla',
      'quem-e-allah',
      'o-que-e-halal',
      'o-que-e-haram',
      'o-que-e-o-alcorao',
    ],
  },
  {
    label: 'Prática',
    description: 'Como os muçulmanos vivem a fé no dia a dia.',
    slugs: [
      'como-fazer-a-oracao',
      'o-que-e-o-hijab',
      'o-que-e-o-ramadan',
      'como-se-converter',
      'o-que-e-wudu',
    ],
  },
  {
    label: 'Contexto',
    description: 'Respostas honestas para perguntas difíceis.',
    slugs: [
      'isla-e-violencia',
      'sunitas-e-xiitas',
      'isla-e-mulheres',
      'isla-no-brasil',
      'jesus-no-isla',
    ],
  },
] as const
