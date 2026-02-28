export type FinanceTopic = {
  slug: string
  title: string
  arabicTerm: string
  icon: string
  summary: string
  content: string
  principles: string[]
  practicalTips: string[]
}

export const financeTopics: FinanceTopic[] = [
  {
    slug: 'riba',
    title: 'Riba (Juros)',
    arabicTerm: 'الربا',
    icon: 'ban',
    summary: 'Por que os juros sao proibidos no Islam, como afetam a economia e quais sao as alternativas justas.',
    content: `Os juros -- conhecidos em arabe como Riba -- sao uma das proibicoes mais claras e enfaticas do Alcorao. Deus diz: "Aqueles que devoram a usura nao se levantarao senao como se levanta aquele que o demonio prostrou pelo toque." (2:275). Nao e uma sugestao. E um aviso direto.

Mas por que? Para entender, e preciso olhar alem do texto e ver o mecanismo. Juros criam dinheiro a partir de dinheiro, sem trabalho, sem risco compartilhado e sem producao real. Quem empresta ganha independente do resultado. Quem toma emprestado carrega todo o risco. Isso gera uma distorcao fundamental: o rico fica mais rico por ter dinheiro, nao por produzir valor. O pobre fica mais pobre por precisar de dinheiro, nao por ser incapaz.

No sistema convencional, o banco empresta R$100.000 para voce comprar uma casa. Se voce perde o emprego, o banco toma a casa E ainda cobra o saldo devedor. O risco e 100% seu. O lucro garantido e 100% do banco. Isso e Riba na essencia: ganho sem risco, perda sem culpa.

O Alcorao oferece uma alternativa radical: "Se o devedor estiver em dificuldade, dai-lhe um prazo ate que ele possa pagar. E se perdoardes a divida, sera melhor para vos." (2:280). O principio nao e "nao empreste". E "nao lucre com a necessidade alheia."

Historicamente, civilizacoes inteiras colapsaram por causa dos juros compostos. Roma caiu em parte porque a classe credora acumulou terras ate os soldados nao terem mais pelo que lutar. A crise de 2008 foi causada por dividas sobre dividas sobre dividas -- juros sobre juros que ninguem conseguia mais pagar.

O Islam propoe um modelo onde o capital participa do risco. Se voce investe num negocio, voce ganha se o negocio prosperar e perde se o negocio falhar. Isso alinha interesses: investidor e empreendedor querem a mesma coisa. Isso e Musharakah (parceria) e Mudarabah (investimento participativo) -- os pilares do sistema financeiro islamico.

No Brasil, o sistema de juros compostos e tao normalizado que parece natural. Cartoes de credito cobram 400% ao ano. Cheque especial ultrapassa 300%. Familias inteiras ficam presas em ciclos de divida por geracoes. O Islam olha para isso e diz: isso nao e comercio. Isso e opressao sistematizada.`,
    principles: [
      'Riba e proibido por gerar riqueza sem producao real e sem risco compartilhado.',
      'O dinheiro no Islam e meio de troca, nao mercadoria. Nao se vende dinheiro por mais dinheiro.',
      'Todo negocio licito envolve risco compartilhado entre as partes (al-ghunm bil-ghurm).',
      'Comercio e investimento sao incentivados -- a proibicao e contra explorar a necessidade alheia.',
      'O Alcorao equipara Riba a uma declaracao de guerra contra Deus e Seu Mensageiro (2:279).',
    ],
    practicalTips: [
      'Evite financiamentos com juros compostos. Pesquise alternativas como consorcio (sem juros, apenas taxa administrativa).',
      'Se tem dividas com juros, priorize quita-las o mais rapido possivel. Renegocie para reduzir taxas.',
      'Busque cooperativas de credito que operem com taxas menores ou modelos participativos.',
      'Ao investir, evite titulos de renda fixa baseados em juros. Prefira acoes, fundos imobiliarios ou negocios reais.',
      'No dia a dia, nao empreste dinheiro cobrando juros. Se emprestar, faca como ato de generosidade ou use Qard Hasan (emprestimo benevolente).',
    ],
  },
  {
    slug: 'zakat',
    title: 'Zakat',
    arabicTerm: 'الزكاة',
    icon: 'heart-handshake',
    summary: 'O pilar da purificacao da riqueza: como calcular, quem deve pagar e quem recebe.',
    content: `Zakat nao e caridade. E obrigacao. Esse e o primeiro entendimento que muda tudo. No Islam, a riqueza nao pertence ao individuo -- pertence a Deus, e o individuo e o guardiao. Zakat e o mecanismo pelo qual a riqueza circula, impede acumulo excessivo e garante que os mais necessitados tenham direito sobre uma parte do que foi acumulado.

A palavra Zakat vem da raiz arabe que significa "purificacao" e "crescimento". Parece paradoxo: como dar dinheiro faz voce crescer? Porque no Islam, a riqueza acumulada sem circulacao apodrece espiritualmente. Zakat limpa sua riqueza e sua alma. O Alcorao menciona Zakat junto com a oracao (Salat) em mais de 30 versiculos. Nao e secundario. E estrutural.

A taxa e 2,5% sobre riqueza acumulada que ultrapasse o Nisab -- o limite minimo. O Nisab e equivalente a 85 gramas de ouro ou 595 gramas de prata. Em valores atuais, isso gira em torno de R$40.000 a R$50.000 (varia com a cotacao do ouro). Se voce tem essa quantia guardada por um ano lunar completo (Hawl), deve 2,5% ao Zakat.

Importante: Zakat incide sobre riqueza acumulada, nao sobre renda. Sua casa propria nao conta. Seu carro de uso pessoal nao conta. Suas ferramentas de trabalho nao contam. O que conta: dinheiro em conta, ouro, prata, investimentos, mercadorias para comercio, e em algumas opinoes, imoveis para investimento.

O Alcorao define 8 categorias de quem pode receber Zakat (9:60): os pobres (fuqara), os necessitados (masakin), os coletores de Zakat (amilin), aqueles cujos coracoes devem ser reconciliados (muallafat al-qulub), escravos buscando liberdade (riqab), os endividados (gharimin), no caminho de Deus (fi sabilillah), e o viajante necessitado (ibn as-sabil).

O impacto economico e profundo. Se todos os muculmanos pagassem Zakat corretamente, estima-se que seriam arrecadados entre US$200 e US$1 trilhao por ano globalmente. Isso resolveria a pobreza extrema no mundo inteiro. O problema nunca foi falta de riqueza. Foi falta de circulacao.

No Brasil, a maioria dos muculmanos pode direcionar seu Zakat para mesquitas locais, projetos de educacao islamica, familias necessitadas na comunidade, ou organizacoes humanitarias islamicas reconhecidas. O importante e que chegue a quem precisa, nao a quem ja tem.`,
    principles: [
      'Zakat e um dos 5 pilares do Islam. Nao e opcional para quem atinge o Nisab.',
      'A taxa e de 2,5% sobre riqueza acumulada (nao sobre renda total) que ultrapasse o Nisab por um ano lunar.',
      'Incide sobre: dinheiro, ouro, prata, investimentos, mercadorias de comercio. Nao incide sobre bens de uso pessoal.',
      'Existem 8 categorias de receptores definidas no Alcorao (Surah At-Tawbah, 9:60).',
      'Zakat purifica a riqueza e o coracao. Acumular sem distribuir e condenado espiritualmente.',
    ],
    practicalTips: [
      'Defina uma data fixa no calendario (por exemplo, 1o de Ramadan) para calcular seu Zakat anualmente.',
      'Some: saldo em conta + investimentos + ouro/prata + valor de estoque comercial. Subtraia dividas imediatas. Se o resultado supera o Nisab, pague 2,5%.',
      'Use calculadoras de Zakat online confiaveis (ex: IslamicFinder, NZF) para facilitar o calculo.',
      'Distribua localmente primeiro: familias necessitadas na comunidade, projetos de educacao islamica, mesquitas.',
      'Documente para quem pagou, quanto e quando. Isso traz clareza e disciplina financeira.',
    ],
  },
  {
    slug: 'sadaqah',
    title: 'Sadaqah',
    arabicTerm: 'الصدقة',
    icon: 'hand-heart',
    summary: 'A caridade voluntaria que transforma quem da e quem recebe. Nao precisa ser dinheiro.',
    content: `Se Zakat e o minimo obrigatorio, Sadaqah e onde o coracao fala. Sadaqah e qualquer ato de generosidade voluntario feito em nome de Deus. Pode ser dinheiro, mas pode ser muito mais: um sorriso, uma palavra de encorajamento, remover um obstaculo do caminho, ensinar algo util, ate uma mensagem de conforto.

O Profeta Muhammad disse: "Cada articulacao do corpo humano tem uma caridade devida todo dia que o sol nasce. Fazer justica entre duas pessoas e caridade. Ajudar alguem a montar em seu animal ou carregar sua bagagem e caridade. Uma boa palavra e caridade. Cada passo dado em direcao a oracao e caridade. Remover algo nocivo do caminho e caridade." (Bukhari e Muslim).

Essa definicao e revolucionaria. Caridade nao e algo que so os ricos podem fazer. Todos podem. Sempre. E isso muda a dinamica social inteira: ninguem esta isento de contribuir, ninguem e insignificante demais para fazer diferenca.

Existem tipos especificos de Sadaqah com impacto duradouro:

Sadaqah Jariyah (caridade continua): e a caridade cujo beneficio continua mesmo apos a morte de quem deu. Exemplos: construir um poco de agua, plantar uma arvore que alimenta pessoas, financiar a educacao de alguem, contribuir para a construcao de uma mesquita. O Profeta disse: "Quando o ser humano morre, suas acoes cessam, exceto por tres: caridade continua, conhecimento util, ou um filho virtuoso que roga por ele." (Muslim).

Sadaqah do conhecimento: ensinar algo util a alguem e considerado uma das formas mais elevadas de caridade. Cada vez que aquele conhecimento e usado, o professor recebe recompensa.

Sadaqah do tempo: doar seu tempo para ajudar alguem, ouvir alguem que precisa desabafar, cozinhar para um vizinho doente, visitar um enfermo. No mundo moderno, onde o tempo e o recurso mais escasso, essa forma de caridade tem um peso enorme.

A Sadaqah tem um efeito paradoxal documentado ate pela ciencia: quem da se sente mais rico, nao mais pobre. Estudos de psicologia positiva mostram que gastar dinheiro com outros gera mais felicidade do que gastar consigo mesmo. O Islam ensinou isso ha 1.400 anos.

O Profeta disse: "A riqueza nao diminui pela caridade." (Muslim). Isso nao e metafora. E um principio espiritual com consequencias praticas: quem da atrai confianca, reciprocidade e barakah (bencao divina).`,
    principles: [
      'Sadaqah e voluntaria e pode ser feita a qualquer momento, por qualquer pessoa, em qualquer quantidade.',
      'Nao se limita a dinheiro: sorrir, ensinar, remover obstaculo do caminho, palavras boas -- tudo conta.',
      'Sadaqah Jariyah (caridade continua) gera recompensas apos a morte do doador.',
      'A intencao e essencial. Sadaqah feita para exibicao perde todo o valor espiritual (Alcorao 2:264).',
      'A melhor Sadaqah e aquela dada em segredo, sem buscar reconhecimento (Alcorao 2:271).',
    ],
    practicalTips: [
      'Estabeleca um valor fixo semanal para Sadaqah, mesmo que pequeno (R$5, R$10). A consistencia importa mais que o valor.',
      'Pratique Sadaqah nao-financeira diariamente: ensinar algo, ouvir alguem, ajudar um vizinho.',
      'Invista em Sadaqah Jariyah: financie educacao, doe livros, contribua para projetos que continuem gerando beneficio.',
      'Doe em segredo quando possivel. Isso fortalece a pureza da intencao.',
      'Ensine seus filhos a pratica da Sadaqah desde cedo. Deixe-os escolher o que doar e para quem.',
    ],
  },
  {
    slug: 'waqf',
    title: 'Waqf (Endowment)',
    arabicTerm: 'الوقف',
    icon: 'landmark',
    summary: 'O sistema de dotacoes que construiu hospitais, universidades e cidades inteiras por seculos.',
    content: `Waqf e talvez a instituicao economica mais subestimada da historia. E um endowment -- uma dotacao permanente -- onde um bem e dedicado para beneficio publico perpetuo. O bem nao pode ser vendido, herdado ou usado para lucro pessoal. Seus rendimentos vao para o proposito definido pelo doador. Para sempre.

O conceito nasceu com o Profeta Muhammad. Quando Omar ibn al-Khattab adquiriu uma terra valiosa em Khaybar, perguntou ao Profeta o que deveria fazer. A resposta: "Se quiseres, retem o bem original e da em caridade seus frutos." Omar entao decretou que a terra nao poderia ser vendida, herdada ou doada. Apenas seus rendimentos seriam distribuidos.

Isso criou um mecanismo economico genial: capital permanente gerando beneficio infinito. Nao e doacao pontual. E infraestrutura de generosidade.

Durante a era otomana, aproximadamente um terco de toda a terra aravel do imperio era Waqf. Hospitais, universidades, fontes de agua, estradas, pontes, albergues para viajantes, cozinhas comunitarias que alimentavam os pobres diariamente -- tudo financiado por Waqf. A Universidade Al-Azhar no Cairo, fundada em 970 d.C. e uma das mais antigas do mundo, foi financiada por Waqf. O complexo de Suleymaniye em Istambul -- mesquita, hospital, escola, cozinha comunitaria, banho publico -- tudo Waqf.

O Waqf resolvia um problema que o capitalismo moderno nao consegue: como garantir servicos essenciais sem depender do Estado ou do lucro privado? A resposta: propriedades gerando renda perpetua para fins sociais. Sem impostos, sem burocracia, sem politica. Comunidade cuidando de comunidade.

No mundo moderno, o conceito de Waqf esta renascendo. Na Malasia e na Indonesia, fundos Waqf financiam universidades e hospitais. No Reino Unido, a National Zakat Foundation opera com principios de Waqf. Em Dubai, uma parte significativa dos imoveis da cidade sao Waqf historicos.

Para o Brasil, o Waqf oferece um modelo poderoso. Imagine: uma comunidade islamica compra um imovel comercial e estabelece como Waqf. O aluguel financia a madrassa, o salario do imam, programas para convertidos, auxilio a familias necessitadas. O imovel nunca e vendido. Geracoes se beneficiam.

A diferenca entre Waqf e uma ONG e permanencia. ONGs dependem de doacoes continuas. Waqf e auto-sustentavel. Uma vez estabelecido, gera beneficio independente de quem doe ou deixe de doar.`,
    principles: [
      'Waqf e a dedicacao permanente de um bem para beneficio publico. O bem original nunca e vendido ou consumido.',
      'Apenas os rendimentos (frutos, alugueis, lucros) sao distribuidos. O capital permanece intacto.',
      'Uma vez estabelecido, o Waqf e irrevogavel. Nem o doador pode recupera-lo.',
      'O proposito e definido pelo doador e deve ser respeitado perpetuamente.',
      'Waqf criou a infraestrutura social do mundo islamico por seculos: hospitais, escolas, fontes, estradas.',
    ],
    practicalTips: [
      'Comece pequeno: contribua para fundos Waqf existentes em sua comunidade ou mesquita local.',
      'Considere Waqf coletivo: um grupo de familias pode juntar recursos para adquirir um bem e estabelece-lo como Waqf.',
      'Waqf moderno pode ser financeiro: depositar capital num fundo de investimento cujos rendimentos vao para fins sociais.',
      'Inclua Waqf no seu planejamento sucessorio: destinar parte da heranca para Waqf e Sadaqah Jariyah perpetua.',
      'Pesquise plataformas de Waqf digital que permitem contribuicoes pequenas e frequentes (ex: AwqafSA, UNHCR Waqf).',
    ],
  },
  {
    slug: 'murabaha',
    title: 'Murabaha',
    arabicTerm: 'المرابحة',
    icon: 'home',
    summary: 'O financiamento halal mais usado no mundo: como comprar imoveis e bens sem juros.',
    content: `Murabaha e o instrumento financeiro islamico mais utilizado globalmente, representando cerca de 70-80% de todas as transacoes de bancos islamicos. E um modelo de financiamento baseado em compra e venda, nao em emprestimo com juros.

O mecanismo e simples: em vez de o banco emprestar dinheiro e cobrar juros, o banco compra o bem que voce quer e revende para voce com uma margem de lucro declarada. A diferenca fundamental e que existe uma transacao comercial real -- o banco assume a propriedade do bem, mesmo que temporariamente, e assume os riscos associados.

Exemplo pratico: voce quer comprar uma casa de R$500.000. No sistema convencional, o banco empresta R$500.000 e cobra juros de 10% ao ano. No sistema de Murabaha, o banco compra a casa por R$500.000 e revende para voce por R$650.000, parcelado em 20 anos. O preco e fixo. Nao muda. Nao tem juros compostos. Nao tem surpresa.

A transparencia e central. O banco deve informar: quanto pagou pelo bem, qual e a margem de lucro, e qual e o preco final. O cliente sabe exatamente o que esta pagando e por que. Compare com um financiamento convencional onde o CET (Custo Efetivo Total) frequentemente e incompreensivel.

Ha condicoes que tornam a Murabaha valida no Islam: o banco deve possuir o bem antes de revende-lo (mesmo que brevemente), o preco final deve ser fixo e declarado no contrato, e nao pode haver penalidade com juros por atraso (podem haver multas fixas, que geralmente sao doadas a caridade).

Criticas existem dentro do proprio meio islamico. Alguns eruditos argumentam que Murabaha, na pratica, funciona de maneira muito similar a um emprestimo com juros, especialmente quando o banco nunca assume risco real sobre o bem. A diferenca esta nos detalhes: propriedade temporaria, preco fixo, ausencia de juros compostos. Mas a critica e valida e empurra o setor a desenvolver modelos mais genuinamente participativos como Musharakah.

No Brasil, ainda nao existem bancos islamicos formais. Porem, e possivel estruturar operacoes de Murabaha privadas entre individuos ou empresas, com contratos que sigam os principios islamicos. Algumas comunidades ja fazem isso para financiar imoveis entre seus membros.

Outros modelos de financiamento islamico incluem: Ijarah (leasing -- o banco compra e aluga para voce, com opcao de compra no final), Musharakah Mutanaqisah (parceria decrescente -- voce e o banco sao socios no imovel, e voce vai comprando a parte dele aos poucos), e Istisna (financiamento de construcao, onde o bem ainda sera produzido).`,
    principles: [
      'Murabaha e uma transacao de compra e venda, nao um emprestimo. O banco compra o bem e revende com margem declarada.',
      'O preco final deve ser fixo e transparente. Sem juros compostos, sem variacao.',
      'O banco deve possuir o bem (mesmo brevemente) antes de revende-lo ao cliente.',
      'Multas por atraso nao podem gerar lucro ao banco -- devem ir para caridade.',
      'E o modelo mais usado globalmente, mas academicos islamicos incentivam modelos mais participativos (Musharakah).',
    ],
    practicalTips: [
      'Se for comprar imovel, pesquise se ha opcoes de financiamento islamico na sua regiao ou comunidade.',
      'Em grupo, considere criar um fundo de Murabaha comunitario: membros contribuem e o fundo compra imoveis para revenda sem juros.',
      'Para bens menores, pratique Murabaha informal: um amigo compra o produto e revende para voce parcelado, com margem justa e fixa.',
      'Ao avaliar propostas de "financiamento islamico", verifique se o banco realmente assume propriedade do bem e se o preco e fixo.',
      'Estude tambem Musharakah Mutanaqisah (parceria decrescente) como alternativa mais alinhada aos principios islamicos.',
    ],
  },
  {
    slug: 'sukuk',
    title: 'Sukuk',
    arabicTerm: 'الصكوك',
    icon: 'file-text',
    summary: 'Os titulos islamicos explicados de forma simples: como investir sem juros.',
    content: `Sukuk sao frequentemente chamados de "titulos islamicos", mas essa traducao e enganosa. Titulos convencionais (bonds) sao divida: voce empresta dinheiro e recebe juros. Sukuk sao certificados de participacao: voce compra uma fatia de um ativo real e recebe parte dos rendimentos desse ativo.

A diferenca e estrutural, nao cosmetica. Num bond convencional, o investidor nao tem relacao com nenhum ativo real. Ele empresta dinheiro e recebe juros independente do que aconteca com o negocio. Num Sukuk, o investidor e coproprietario de algo tangivel: um imovel, um projeto de infraestrutura, uma frota de avioes, uma usina de energia. Se o ativo gera renda, o investidor recebe. Se nao gera, nao recebe.

O mercado global de Sukuk movimenta centenas de bilhoes de dolares anualmente. Malasia e o maior mercado, seguida por Arabia Saudita, Emirados Arabes e Indonesia. Governos emitem Sukuk para financiar infraestrutura: aeroportos, rodovias, hospitais, redes de energia. Empresas emitem Sukuk para expandir operacoes.

Existem diferentes estruturas de Sukuk, cada uma baseada num contrato islamico especifico:

Sukuk Al-Ijarah: baseado em leasing. O emissor vende um ativo para um SPV (veiculo de proposito especifico), que emite os Sukuk. O ativo e alugado de volta ao emissor, e os alugueis sao distribuidos aos investidores.

Sukuk Al-Musharakah: baseado em parceria. Os investidores se tornam socios num empreendimento e compartilham lucros e perdas proporcionalmente.

Sukuk Al-Murabaha: baseado em compra e venda. Financia a compra de commodities ou bens, com margem de lucro distribuida aos investidores.

Para o investidor brasileiro, acessar Sukuk diretamente ainda e desafiador. Nao ha emissoes domesticas de Sukuk no Brasil (ate o momento). Porem, existem ETFs globais que investem em Sukuk, acessiveis atraves de corretoras internacionais. Exemplos incluem o SPSK (SP Funds Dow Jones Global Sukuk ETF) e o ISDU (iShares Sukuk ETF).

O risco dos Sukuk e geralmente considerado moderado, similar ao de titulos corporativos ou governamentais. A diferenca e que, em tese, ha um ativo real como lastro, o que oferece uma camada adicional de seguranca comparada a divida pura.

O mais importante para entender Sukuk: nao e financas islamicas tentando imitar financas convencionais. E uma filosofia completamente diferente. Dinheiro deve estar conectado a algo real. Investimento deve envolver risco compartilhado. Lucro deve vir de valor gerado, nao de juros sobre emprestimo.`,
    principles: [
      'Sukuk sao certificados de participacao em ativos reais, nao titulos de divida com juros.',
      'O investidor e coproprietario de um ativo tangivel e compartilha seus rendimentos.',
      'Diferentes estruturas existem: Ijarah (leasing), Musharakah (parceria), Murabaha (compra e venda).',
      'Todo Sukuk deve ter um ativo real como lastro -- nao pode ser divida sobre divida.',
      'O mercado global de Sukuk ja ultrapassa centenas de bilhoes de dolares anuais.',
    ],
    practicalTips: [
      'Para acessar Sukuk do Brasil, abra conta em corretora internacional que oferte ETFs como SPSK ou ISDU.',
      'Entenda a estrutura especifica do Sukuk antes de investir: Ijarah, Musharakah ou Murabaha tem riscos diferentes.',
      'Sukuk governamentais (soberanos) tendem a ser mais seguros que corporativos. Comece por eles.',
      'Diversifique: nao coloque todo capital em Sukuk. Combine com acoes halal e imoveis.',
      'Acompanhe o mercado de Sukuk global. A emissao cresce ano a ano, e mais opcoes surgem para investidores internacionais.',
    ],
  },
  {
    slug: 'takaful',
    title: 'Takaful',
    arabicTerm: 'التكافل',
    icon: 'shield-check',
    summary: 'O seguro cooperativo islamico: protecao mutua sem apostas, sem juros, sem exploracao.',
    content: `Seguro convencional tem tres problemas do ponto de vista islamico: Gharar (incerteza excessiva -- voce paga sem saber se vai receber), Maysir (jogo -- e essencialmente uma aposta de que algo ruim vai acontecer), e Riba (os premios sao investidos em instrumentos com juros). Takaful resolve os tres.

A palavra Takaful vem da raiz arabe "kafala", que significa garantia mutua. O conceito e simples e poderoso: um grupo de pessoas contribui para um fundo comum. Se algum membro sofre uma perda, o fundo o compensa. Nao e uma empresa lucrando com o medo das pessoas. E uma comunidade se protegendo mutuamente.

O modelo funciona assim: cada participante paga uma contribuicao (Tabarru -- doacao) para um fundo coletivo. Esse fundo e gerido por um operador (empresa de Takaful) que cobra uma taxa de gestao. Se ha sinistro, o participante e compensado pelo fundo. Se o fundo gera superavit no fim do periodo, o excedente e devolvido aos participantes proporcionalmente. Isso e radicalmente diferente do seguro convencional, onde o lucro fica 100% com a seguradora.

Historicamente, o conceito de Takaful ja existia entre os arabes pre-islamicos sob o nome de "Aqilah": quando um membro de uma tribo causava dano a alguem de outra tribo, toda a tribo contribuia para a compensacao. O Islam refinou e formalizou esse principio.

O mercado global de Takaful cresce rapidamente. Malasia, Arabia Saudita e Emirados Arabes lideram. Existem opcoes de Takaful para: saude (cobertura medica), vida (protecao familiar), imoveis (protecao de propriedade), veiculos e empresarial.

No Brasil, Takaful formal ainda nao existe como produto regulamentado. Porem, o conceito pode ser aplicado informalmente: comunidades islamicas podem criar fundos cooperativos de emergencia, onde membros contribuem mensalmente e quem precisa recebe. Varias mesquitas e centros islamicos ao redor do mundo ja operam modelos similares.

A beleza do Takaful e que ele transforma seguro de produto financeiro em ato de solidariedade. Voce nao esta comprando uma apolice. Voce esta dizendo: "Eu me comprometo a ajudar meus irmaos se algo acontecer, e confio que eles farao o mesmo por mim." Isso e a essencia do Islam comunitario aplicado a protecao financeira.

Para quem vive no Brasil e precisa de seguros (carro, saude, vida), a orientacao pratica dos eruditos e: use o seguro convencional quando nao ha alternativa islamica, pois a protecao da familia e da saude e uma necessidade (darurah). Mas busque ativamente construir alternativas comunitarias sempre que possivel.`,
    principles: [
      'Takaful e baseado em cooperacao mutua (Taawun), nao em lucro sobre o medo alheio.',
      'As contribuicoes sao tratadas como doacoes (Tabarru) para um fundo coletivo de protecao.',
      'Se o fundo gera superavit, o excedente e devolvido aos participantes (diferente do seguro convencional).',
      'O operador de Takaful cobra taxa de gestao, nao lucra com os sinistros.',
      'Elimina Gharar (incerteza excessiva), Maysir (aposta) e Riba (juros) presentes no seguro convencional.',
    ],
    practicalTips: [
      'Se nao ha Takaful formal no Brasil, use seguro convencional para necessidades essenciais (saude, carro). A necessidade (darurah) permite.',
      'Proponha a criacao de um fundo cooperativo de emergencia na sua comunidade islamica local.',
      'Modelo simples: 20 familias, R$100/mes cada, fundo de R$2.000/mes. Regras claras de quando e como usar.',
      'Pesquise operadoras de Takaful internacionais que aceitem clientes do Brasil para seguros de vida ou saude.',
      'Ao usar seguro convencional, evite produtos que envolvam apostas ou especulacao (como seguros de investimento vinculados a acoes).',
    ],
  },
  {
    slug: 'investimento-halal',
    title: 'Investimento Halal',
    arabicTerm: 'الاستثمار الحلال',
    icon: 'trending-up',
    summary: 'O que torna um investimento permissivel, criterios de selecao e guia pratico para brasileiros.',
    content: `Investir e nao apenas permitido no Islam -- e incentivado. O Profeta Muhammad foi comerciante. Khadijah foi investidora. Abu Bakr usou sua riqueza estrategicamente. O Islam nunca disse "nao ganhe dinheiro". Disse "ganhe dinheiro da forma certa."

Os criterios para um investimento ser Halal envolvem duas dimensoes: o setor (o que a empresa faz) e a estrutura financeira (como a empresa opera).

Setores proibidos (Haram): alcool, tabaco, jogos de azar (cassinos, loterias), pornografia, armas, carne suina e derivados, entretenimento adulto. Se a empresa tem receita primaria desses setores, esta fora. Bancos convencionais baseados em juros tambem estao nessa categoria.

Criterios financeiros (screening): mesmo empresas de setores permitidos podem ser excluidas se tiverem endividamento excessivo baseado em juros. Os indices islamicos (DJIMI, S&P Shariah, FTSE Shariah) usam filtros como: divida com juros nao pode ultrapassar 33% do valor de mercado da empresa, receita de fontes Haram nao pode ultrapassar 5% da receita total, e caixa mantido em instrumentos com juros nao pode ultrapassar 33% dos ativos.

Para o investidor brasileiro, as opcoes praticas incluem:

Acoes na B3: muitas empresas brasileiras passam nos filtros islamicos. Empresas de tecnologia, saude, alimentos (sem alcool/suino), energia renovavel, mineracao, agronegocio geralmente sao elegíveis. Evite: bancos, seguradoras, empresas de bebidas alcoolicas, empresas de jogos.

ETFs Halal internacionais: atraves de corretoras que oferecem acesso a mercados globais, voce pode investir em ETFs como SPUS (SP Funds S&P 500 Sharia ETF), HLAL (Wahed FTSE USA Shariah ETF), ou ISDU (iShares Sukuk ETF).

Fundos Imobiliarios (FIIs): muitos FIIs brasileiros sao compativeis com principios islamicos, desde que os imoveis nao sejam usados para atividades Haram e o fundo nao tenha endividamento excessivo com juros. FIIs de logistica, escritorios e lajes corporativas costumam ser boas opcoes.

Criptomoedas: tema debatido entre eruditos. A maioria aceita Bitcoin e Ethereum como permissiveis se usados como investimento ou meio de troca, nao para especulacao pura. Staking e lending (emprestimo com juros em cripto) sao problematicos.

Renda fixa convencional: Tesouro Direto, CDBs, LCIs, LCAs -- todos sao baseados em juros e, portanto, Haram na visao da maioria dos eruditos. Esta e a maior adaptacao que o investidor muculmano brasileiro precisa fazer.

A purificacao de ganhos e uma pratica importante: se parte da receita de uma empresa vem de fontes Haram (menos de 5%), o investidor deve calcular essa proporcao e doar o equivalente em caridade. Isso "purifica" o investimento.

O ponto central e: investir de forma Halal nao e limitacao. E disciplina. Voce evita setores destrutivos, evita especulacao pura, e foca em empresas que geram valor real. Historicamente, indices Shariah tem desempenho comparavel ou superior aos convencionais, porque empresas com menos divida e sem setores controversos tendem a ser mais resilientes.`,
    principles: [
      'Investir e incentivado no Islam. O que importa e o setor e a estrutura financeira do investimento.',
      'Setores proibidos: alcool, tabaco, jogos, pornografia, armas, carne suina, bancos convencionais baseados em juros.',
      'Criterios financeiros: divida com juros < 33% do valor de mercado, receita Haram < 5% da receita total.',
      'Renda fixa baseada em juros (Tesouro Direto, CDB, LCI) e considerada Haram pela maioria dos eruditos.',
      'Se uma empresa tem receita residual Haram (< 5%), o investidor deve purificar os ganhos doando a proporcao equivalente.',
    ],
    practicalTips: [
      'Use screeners islamicos como Zoya (app), Islamicly, ou o indice DJIMI para verificar se uma acao e Halal antes de investir.',
      'Comece com ETFs Halal internacionais (SPUS, HLAL) para diversificacao automatica com filtros Shariah.',
      'Para acoes brasileiras, foque em setores como tecnologia, saude, agro, energia renovavel. Evite bancos e bebidas.',
      'FIIs de logistica e escritorios costumam ser compativeis. Verifique se o fundo nao tem divida excessiva com juros.',
      'Substitua renda fixa por: Sukuk ETFs, FIIs, acoes de dividendos de empresas Halal, ou ouro fisico como reserva de valor.',
      'Reserve 2-5% dos rendimentos de investimentos para purificacao (Sadaqah), especialmente se a empresa tem receita mista.',
    ],
  },
]
