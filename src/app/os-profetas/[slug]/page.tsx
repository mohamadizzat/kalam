// Server component — handles generateStaticParams + data fetching
import { ProphetEpisodeClient } from './ProphetEpisodeClient'

// ── DATA ──────────────────────────────────────────────────────────────────────

export const prophets = [
  {
    slug: 'adao',
    name: 'Adao',
    arabicName: '\u0622\u062F\u0645',
    episode: 1,
    title: 'A Criacao e a Queda',
    status: 'available',
    hook: 'Um homem feito do barro da terra. A primeira desobediencia. E um Deus que ainda assim ensinou.',
    bibleRef: 'Genesis 1\u20133',
    quranRef: 'Al-Baqarah 2:30\u201339',
    insight: 'No Alcorao, Adao e Eva sao igualmente responsaveis. Nao existe pecado original.',
    bibleText: `Imagine o silencio antes de tudo. Nao existia som, nao existia cor, nao existia tempo. E entao, uma voz cortou o nada: "Haja luz." E houve luz. Em seis dias, o universo inteiro foi falado a existencia \u2014 oceanos, estrelas, criaturas. Mas no sexto dia, Deus fez algo diferente. Nao falou. Ele se abaixou. Pegou o po da terra com as proprias maos e moldou uma forma. Soprou nas narinas daquele barro. E o barro respirou.

Adao abriu os olhos no jardim do Eden \u2014 um paraiso de rios, arvores e frutos sem fim. Deus lhe deu dominio sobre tudo. Trouxe todos os animais e disse: "De-lhes nomes." Adao nomeou cada um. Mas entre todas as criaturas, nao havia companheira para ele. Entao Deus fez Adao dormir, tomou uma de suas costelas, e formou Eva. "Esta e osso dos meus ossos", disse Adao. E estavam nus, e nao sentiam vergonha.

Havia apenas uma regra. Uma unica arvore. "De toda arvore do jardim comereis livremente \u2014 mas da arvore do conhecimento do bem e do mal nao comereis, porque no dia em que dela comerdes, certamente morrereis." A serpente, mais astuta que todos os animais, aproximou-se de Eva: "Deus sabe que, no dia em que comerdes, sereis como Deus, conhecendo o bem e o mal." Ela olhou. O fruto era bonito. Comeu. Deu ao marido. Ele comeu.

E de repente, viram que estavam nus. Costuraram folhas de figueira. Esconderam-se entre as arvores. E ouviram os passos de Deus caminhando no jardim na viracao do dia. "Onde estas?" \u2014 perguntou Deus. Nao porque nao sabia. Porque queria que Adao dissesse. A culpa comecou ali: Adao culpou Eva, Eva culpou a serpente. Deus amaldicoou a serpente, multiplicou as dores de Eva, e disse a Adao: "Com o suor do teu rosto comeras o pao, ate que tornes ao po, porque do po foste tomado." E os expulsou do Eden. E colocou querubins com espada flamejante guardando a entrada. O paraiso ficou para tras.`,
    quranText: `A historia comeca nao com a criacao da terra, mas com uma reuniao. Deus anuncia aos anjos: "Vou colocar um khalifa na terra" \u2014 um representante, um vice-regente. Os anjos, surpresos, questionam: "Colocaras nela quem causara corrupcao e derramara sangue, enquanto nos Te glorificamos e Te santificamos?" Deus responde com uma frase que encerra toda a discussao: "Eu sei o que vos nao sabeis."

Entao Deus faz algo extraordinario. Ensina a Adao os nomes de todas as coisas \u2014 nao apenas nomes de objetos, mas a essencia, o sentido profundo de cada realidade. Apresenta esses nomes aos anjos e diz: "Informai-Me sobre estes, se sois veridicos." Os anjos admitem: "Gloria a Ti! Nao temos conhecimento senao o que Tu nos ensinaste." Adao, o ser feito de barro, sabia o que os seres de luz nao sabiam. Deus ordenou aos anjos que se prostrassem diante de Adao. Todos obedeceram \u2014 exceto Iblis. "Eu sou melhor que ele", disse. "Tu me criaste de fogo e a ele de barro." A arrogancia nasceu antes do pecado.

Adao e sua esposa foram colocados no Jardim. "Comei a vontade de onde quiserdes, mas nao vos aproximeis desta arvore, ou sereis dos injustos." Iblis, entao, sussurrou a ambos \u2014 nao so a Eva, mas a ambos igualmente: "Vosso Senhor so vos proibiu esta arvore para que nao vos torneis anjos ou imortais." Eles comeram. Viram sua nudez. Comecaram a cobrir-se com folhas do Jardim.

E aqui, a historia diverge profundamente da narrativa biblica. Adao nao se escondeu. Nao culpou Eva. Ambos disseram juntos: "Senhor nosso! Fomos injustos conosco mesmos. Se nao nos perdoares e nao tiveres misericordia de nos, seremos dos perdedores." E Deus \u2014 ao inves de amaldicoar, ao inves de punir eternamente \u2014 ensinou a Adao palavras de arrependimento. "Adao recebeu palavras do seu Senhor, e Ele se voltou para ele em misericordia." A queda aconteceu. Mas nao houve pecado original transmitido a descendencia. Cada ser humano nasce em fitrah \u2014 pureza natural. A historia de Adao no Alcorao nao termina com expulsao e maldicao. Termina com direcao: "Descei! E quando vos chegar orientacao Minha, quem seguir Minha orientacao nao temera nem se entristecera."`,
    insights: [
      'No Alcorao, Adao e Eva cometem o erro juntos \u2014 Iblis sussurra a ambos igualmente. Nao ha culpa exclusiva de Eva. A nocao de que "a mulher trouxe o pecado ao mundo" simplesmente nao existe no texto coranico.',
      'A queda no Islam nao e "pecado original" transmitido a descendencia. Cada pessoa nasce em estado de fitrah \u2014 pureza natural. Ninguem carrega o peso do erro de Adao. Isso muda fundamentalmente a teologia: nao ha necessidade de um sacrificio redentor para restaurar a humanidade.',
      'Deus ensina a Adao os "nomes" de todas as coisas (Al-Baqarah 2:31) \u2014 um ato que os anjos nao puderam replicar. O ser humano, feito de barro, recebeu um tipo de conhecimento que os seres de luz nao possuiam. A dignidade humana e estabelecida antes da queda, nao apesar dela.',
      'O arrependimento de Adao e aceito imediatamente no Alcorao. Nao ha querubins com espada flamejante. Nao ha maldicao sobre a terra. Deus ensina as palavras certas para se arrepender \u2014 e aceita. A misericordia divina e a resposta a primeira falha humana.',
      'A recusa de Iblis nao e por maldade gratuita, mas por arrogancia racial: "Sou melhor que ele \u2014 Tu me criaste de fogo e a ele de barro." O primeiro pecado registrado no Alcorao nao e desobediencia \u2014 e racismo.',
    ],
    keyMoment: {
      quote: '\u201CAdao recebeu palavras do seu Senhor e Ele se voltou para ele em misericordia.\u201D',
      ref: 'Al-Baqarah 2:37',
      note: 'O Alcorao termina a historia de Adao com misericordia. A Biblia termina com expulsao e espada flamejante. O mesmo evento. Duas enfases completamente diferentes sobre quem Deus e.',
    },
    nextSlug: 'nuh',
    nextName: 'Noe',
  },
  {
    slug: 'nuh',
    name: 'Noe',
    arabicName: '\u0646\u0648\u062D',
    episode: 2,
    title: 'O Pregador Incansavel',
    status: 'available',
    hook: '950 anos pregando. Um filho que escolheu afogar. Uma esposa que traiu a mensagem. E uma arca que o mundo inteiro zombou — ate a agua chegar.',
    bibleRef: 'Genesis 6–9',
    quranRef: 'Nuh 71 / Hud 11:25–49',
    insight: 'No Alcorao, o filho de Noe recusa entrar na arca e morre afogado. Na Biblia, todos os filhos sobrevivem. A divergencia muda o significado inteiro da historia.',
    bibleText: `A humanidade havia se corrompido. A violencia enchia a terra. E Deus olhou para tudo que havia feito e se arrependeu. "Arrependeu-se o Senhor de haver feito o homem sobre a terra, e pesou-lhe em seu coracao." Uma das frases mais impactantes de toda a Biblia — Deus sentindo pesar. O Criador olhando para a criacao e desejando nao te-la feito. A dor divina e real.

Mas Noe achou graca aos olhos do Senhor. Noe era justo, integro entre seus contemporaneos. E Deus falou com ele: "O fim de toda carne e vindo perante a minha face, porque a terra esta cheia de violencia. Faze para ti uma arca de madeira de gofer." As dimensoes foram dadas com precisao — 300 covados de comprimento, 50 de largura, 30 de altura. Noe nao questionou. Nao pediu explicacao. Construiu.

Imagine o que significava construir um navio daquele tamanho num mundo que possivelmente nunca tinha visto chuva daquela magnitude. Os vizinhos devem ter zombado. Anos de construcao, martelando madeira, calafetando com betume, enquanto o ceu permanecia limpo. Noe pregou. A Biblia nao detalha sua pregacao, mas 2 Pedro 2:5 o chama de "pregador da justica." Ninguem ouviu.

Quando a arca ficou pronta, Deus mandou entrar — Noe, sua esposa, seus tres filhos (Sem, Cam e Jafe) e suas esposas. Sete pares de cada animal limpo, um par de cada impuro. E entao as fontes do grande abismo se romperam. As janelas dos ceus se abriram. Choveu quarenta dias e quarenta noites. A agua cobriu ate as montanhas mais altas. Toda carne que se movia sobre a terra pereceu — aves, animais, seres humanos. "Ficou somente Noe e os que com ele estavam na arca."

Apos 150 dias, as aguas comecaram a baixar. A arca repousou sobre os montes de Ararat. Noe enviou um corvo, depois uma pomba. Na segunda vez, a pomba voltou com uma folha de oliveira — a terra secava. Na terceira vez, nao voltou. Noe saiu da arca. Construiu um altar. Ofereceu holocaustos. E Deus fez uma alianca: "Nao tornarei a amaldicoar a terra por causa do homem. Enquanto a terra durar, sementeira e ceifa, frio e calor, verao e inverno, dia e noite nao cessarao." E colocou o arco-iris nas nuvens como sinal da alianca — nunca mais um diluvio destruiria toda a terra.

Mas a historia de Noe na Biblia tem um epilogo sombrio. Noe plantou uma vinha. Bebeu do vinho. Embriagou-se. Ficou nu dentro de sua tenda. Cam, seu filho, viu a nudez do pai e contou aos irmaos. Sem e Jafe caminharam de costas e o cobriram sem olhar. Quando Noe acordou e soube o que Cam fizera, amaldicoou Canaa, filho de Cam. O homem que salvou a humanidade termina caido, bebado, amaldicoando o proprio neto. A Biblia nao esconde a fragilidade de seus herois.`,
    quranText: `O Alcorao dedica uma surata inteira a Nuh — a Surata 71, que leva seu nome. Mas sua historia aparece em diversas outras suratas, sempre com enfase no que a Biblia pouco detalha: os 950 anos de pregacao e a agonia de um profeta ignorado pelo proprio povo.

Nuh foi enviado ao seu povo com uma mensagem simples: "Adorai a Deus. Temei-O. E obedecei-me." Parece direto. Mas o povo recusou. E nao recusou por um ano, ou dez, ou cem. O Alcorao diz que Nuh pregou por 950 anos. "E enviamos Nuh ao seu povo, e ele permaneceu entre eles mil anos menos cinquenta." Quase um milenio repetindo a mesma mensagem. Quase um milenio ouvindo a mesma recusa.

Na Surata Nuh, o proprio profeta descreve sua estrategia a Deus: "Senhor meu, chamei meu povo noite e dia. Mas minha chamada so aumentou sua fuga. Toda vez que os chamei para que os perdoasses, puseram os dedos nos ouvidos, cobriram-se com suas vestes, persistiram e foram arrogantes com grande arrogancia. Chamei-os abertamente. Falei-lhes em publico e em particular." Nuh tentou tudo — pregacao publica, conversas privadas, argumentos racionais, apelos emocionais. Nada funcionou.

E Deus revelou: "Nao crerao do teu povo senao os que ja creram. Nao te entristeças pelo que fazem." Entao veio a ordem: "Constroi a arca sob Nossos olhos e Nossa inspiracao." Os lideres do povo passavam e zombavam. O Alcorao narra: "Toda vez que os notaveis do povo passavam por ele, zombavam." Nuh respondeu: "Se zombais de nos, nos tambem zombaremos de vos como zombais."

E entao veio o diluvio. "E dissemos: Embarca nela um casal de cada especie, e tua familia — exceto aquele contra quem ja foi proferida a sentenca — e os que creram." A arca navegou por ondas como montanhas. E aqui vem a cena mais devastadora da historia de Nuh no Alcorao — uma cena que nao existe na Biblia.

Nuh viu seu filho distante. Chamou-o: "O meu filho! Embarca conosco e nao estejas com os descrentes!" O filho respondeu: "Refugiar-me-ei numa montanha que me protegera da agua." Nuh implorou: "Nao ha protetor hoje contra o decreto de Deus, senao para quem Ele tiver misericordia." Uma onda veio entre os dois. E o filho afogou. Nuh, com o coracao destroçado, suplicou a Deus: "Senhor meu! Meu filho e da minha familia, e Tua promessa e a verdade." Deus respondeu com uma correcao que redefine o que significa familia no Islam: "O Nuh, ele nao e da tua familia. E uma conduta nao reta. Nao Me peças aquilo de que nao tens conhecimento." O laco de sangue nao prevalece sobre o laco de fe.

E a esposa de Nuh? O Alcorao a menciona em At-Tahrim 66:10 como exemplo de traidora — "estavam sob dois de Nossos servos justos (Nuh e Lut) e os trairam." Ela nao creu. Na Biblia, a esposa de Noe e salva na arca. No Alcorao, ela perece com os descrentes. Dois textos sagrados. Dois destinos completamente opostos para a mesma mulher.

A arca pousou no monte Judi — nao no Ararat, como diz a Biblia. "E foi dito: O terra, engole tua agua! O ceu, cessa! A agua baixou, o decreto foi cumprido, e a arca repousou sobre o Judi." Um comando direto a terra e ao ceu — uma das passagens mais poeticas do Alcorao.`,
    insights: [
      'O Alcorao diz que Nuh pregou por 950 anos (Al-Ankabut 29:14). A Biblia diz que Noe viveu 950 anos no total (Genesis 9:29), mas nao especifica a duracao da pregacao. A longevidade e comum a ambas as tradicoes, mas a enfase coranica esta na paciencia profética, nao na biologia.',
      'O filho de Nuh morre afogado no Alcorao — recusando entrar na arca, confiando numa montanha que nao o salvou. Na Biblia, todos os tres filhos de Noe (Sem, Cam e Jafe) sobrevivem. Essa divergencia e enorme: no Islam, laco de sangue nao salva sem fe.',
      'Deus corrige Nuh quando ele implora pelo filho: "Ele nao e da tua familia. E conduta nao reta." No Islam, familia e definida pela fe, nao pelo sangue. Um principio radical que redefine todas as relacoes humanas.',
      'A arca pousou no monte Judi segundo o Alcorao (Hud 11:44), nao no Ararat como diz a Biblia (Genesis 8:4). Curiosamente, ha um monte chamado Judi no sudeste da Turquia, diferente do Ararat no leste. Dois textos, dois montes, uma historia.',
      'A esposa de Noe e salva na Biblia. No Alcorao, ela e listada como traidora que nao creu (At-Tahrim 66:10). O casamento com um profeta nao garante salvacao. A responsabilidade individual e absoluta.',
    ],
    keyMoment: {
      quote: '\u201CO meu filho! Embarca conosco e nao estejas com os descrentes!\u201D',
      ref: 'Hud 11:42',
      note: 'Um pai chamando o filho enquanto as ondas sobem. O filho recusa. A onda os separa. Para sempre. A cena mais dolorosa de toda a historia de Nuh — exclusiva do Alcorao, ausente da Biblia. O laco de sangue se rompeu onde o laco de fe nao existia.',
    },
    nextSlug: 'ibrahim',
    nextName: 'Abraao',
  },
  {
    slug: 'ibrahim',
    name: 'Abraao',
    arabicName: '\u0625\u0628\u0631\u0627\u0647\u064A\u0645',
    episode: 3,
    title: 'O Pai das Nacoes',
    status: 'available',
    hook: 'Jogado no fogo por questionar os idolos do pai. Saiu andando. Ergueu a Kaaba com o filho que a Biblia esqueceu.',
    bibleRef: 'Genesis 12\u201322',
    quranRef: 'Al-Baqarah 2:124\u2013132 / Al-Anaam 6:74\u201383',
    insight: 'Ibrahim e o homem que encontrou Deus atraves da razao pura \u2014 testando estrelas, lua e sol ate restar so o Criador.',
    bibleText: `Abrao vivia em Ur dos caldeus, uma civilizacao sofisticada na Mesopotamia, quando ouviu uma voz que mudaria a historia da humanidade: "Sai da tua terra, da tua parentela e da casa de teu pai para a terra que te mostrarei. Far-te-ei uma grande nacao, e te abencoarei, e engrandecerei o teu nome." Ele tinha 75 anos. Nao tinha filhos. E Deus prometeu que dele nasceria uma nacao tao numerosa quanto as estrelas do ceu.

Abrao obedeceu. Caminhou para o desconhecido com Sara, sua esposa, e Lo, seu sobrinho. Atravessou fomes, guerras, perigos. Sua fe foi testada repetidamente. Sara, esteril, ofereceu sua serva Hagar para que desse a Abraao um filho. Nasceu Ismael. Mas Deus disse: "Sara, tua mulher, te dara um filho, e lhe chamaras Isaque. Estabelecerei minha alianca com ele." Quando Isaque nasceu, Sara exigiu que Hagar e Ismael fossem expulsos. Abraao sofreu, mas Deus disse: "Nao te angusties. Ouve Sara. Mas de Ismael tambem farei uma nacao, porque e tua descendencia."

Entao veio a prova mais brutal ja registrada em qualquer escritura. Deus disse: "Toma agora teu filho, teu unico filho, Isaque, a quem amas, e vai a terra de Moria e oferece-o ali em holocausto." Abraao nao argumentou. Nao questionou. Levantou-se de manha cedo, selou o jumento, cortou a lenha, e caminhou tres dias com Isaque ate o monte. "Meu pai", disse Isaque no caminho, "eis o fogo e a lenha, mas onde esta o cordeiro para o holocausto?" Abraao respondeu: "Deus prover\u00E1 para si o cordeiro, meu filho." Chegaram. Abraao construiu o altar. Amarrou Isaque. Estendeu a mao e pegou o cutelo. E nesse instante, o anjo do Senhor chamou: "Abraao! Nao estendas a mao sobre o menino." Um carneiro apareceu preso pelos chifres num arbusto. A fe de Abraao havia sido provada ate o limite \u2014 e o limite cedeu.

A Biblia, a partir deste ponto, segue a linhagem de Isaque. Ismael aparece brevemente em Genesis 25, no funeral de Abraao. Depois, praticamente desaparece da narrativa principal. A promessa, a alianca, a terra \u2014 tudo segue por Isaque, depois Jaco, depois as doze tribos de Israel.`,
    quranText: `A historia de Ibrahim no Alcorao comeca muito antes da chamada de Deus. Comeca com um adolescente no meio de uma civilizacao idolatra, olhando para o ceu e fazendo as perguntas que ninguem ao redor tinha coragem de fazer. Seu pai, Azar, fabricava idolos. Ibrahim cresceu rodeado de estutuas de pedra que todos adoravam. E um dia, decidiu testar.

Quando a noite caiu, Ibrahim olhou para o ceu e viu uma estrela brilhante. "Este e meu Senhor", disse. Mas quando a estrela se pos no horizonte, ele disse: "Nao amo os que se poem." Depois viu a lua, cheia e luminosa. "Este e meu Senhor!" Mas a lua tambem desapareceu. "Se meu Senhor nao me guiar, serei dos extraviados." Entao o sol nasceu, imenso e poderoso. "Este e meu Senhor \u2014 e o maior!" Mas quando o sol se pos, Ibrahim declarou: "O meu povo, estou livre daquilo que associais a Deus. Voltei meu rosto para Aquele que criou os ceus e a terra, como hanif, e nao sou dos politeistas." Ele nao recebeu um anjo. Nao ouviu uma voz. Chegou a Deus pela razao pura.

Ibrahim confrontou seu povo e seu proprio pai. Destruiu os idolos do templo, deixando apenas o maior de pe, e quando perguntaram quem havia feito aquilo, respondeu com ironia afiada: "Perguntem ao grande \u2014 se e que podem falar." Enfurecidos, jogaram Ibrahim numa fogueira. E Deus ordenou: "O fogo! Se frescor e paz para Ibrahim." Ele saiu ileso. O fogo que deveria mata-lo tornou-se jardim.

E o sacrificio? O Alcorao narra a cena com um detalhe ausente na Biblia: Ibrahim conta ao filho sobre o sonho. "O meu filho, vejo em sonho que te sacrifico. Que opinas?" E o filho \u2014 que a tradicao islamica identifica como Ismail, nao Isaque \u2014 responde: "O meu pai, faze o que te e ordenado. Encontrar-me-as, se Deus quiser, entre os pacientes." O filho consente. E uma co-entrega, nao uma imposicao. Quando ambos se submeteram a Deus, veio a redencao: "Ja cumpriste a visao. Assim recompensamos os benfeitores."

E depois do sacrificio, o Alcorao conta algo que a Biblia nao conta: Ibrahim e Ismail, juntos, erguem os alicerces da Kaaba em Meca. "Senhor nosso, aceita de nos! Tu es o Oniouvinte, o Onisciente." O filho que a narrativa biblica marginaliza e, no Islam, co-construtor da casa mais sagrada da terra. A linhagem nao e cortada \u2014 e cumprida.`,
    insights: [
      'O Alcorao narra o processo racional de Ibrahim descobrindo Deus \u2014 descartando estrelas, lua e sol um a um. Nenhuma revelacao sobrenatural. Nenhum anjo. Pura logica. A Biblia nao tem essa cena \u2014 Deus simplesmente chama Abrao em Genesis 12.',
      'No Islam, Ibrahim e Ismail (Ismael) \u2014 o filho de Hagar \u2014 constroem juntos a Kaaba em Meca. Na Biblia, Ismael e praticamente removido da narrativa apos ser expulso com Hagar. Duas tradicoes, dois filhos, dois destinos completamente diferentes.',
      'O sacrificio no Alcorao nao identifica o filho por nome \u2014 mas a tradicao islamica entende que foi Ismail, nao Isaque. E tem um detalhe crucial: o filho e consultado e consente. "Faze o que te e ordenado. Encontrar-me-as entre os pacientes." Na Biblia, Isaque nao sabe o que vai acontecer ate estar amarrado no altar.',
      'Ibrahim e o unico profeta chamado de "Khalilullah" \u2014 Amigo Intimo de Deus \u2014 em ambas as tradicoes. Na Biblia, e "amigo de Deus" (Tiago 2:23). No Alcorao, Deus "tomou Ibrahim como amigo intimo" (An-Nisa 4:125). Nenhum outro profeta recebe esse titulo.',
      'A prova do fogo e exclusiva do Alcorao e da tradicao judaica (Midrash), mas ausente do texto biblico canonico. Ibrahim desafia idolos, e jogado no fogo pelo proprio povo, e Deus transforma o fogo em frescor e paz. A fe testada pelo fogo literal.',
    ],
    keyMoment: {
      quote: '\u201CQuando a noite caiu sobre ele, viu uma estrela e disse: Este e meu Senhor. Mas quando ela se pos, disse: Nao amo os que se poem.\u201D',
      ref: 'Al-Anaam 6:76',
      note: 'Ibrahim encontra Deus eliminando falsos deuses um a um. Estrela, lua, sol \u2014 todos falham. So resta o Criador de todos eles. E a jornada epistemologica mais honesta ja descrita num texto sagrado \u2014 e comeca com um jovem olhando para o ceu.',
    },
    nextSlug: 'lut',
    nextName: 'Lo',
  },
  {
    slug: 'lut',
    name: 'Lo',
    arabicName: '\u0644\u0648\u0637',
    episode: 4,
    title: 'O Profeta em Sodoma',
    status: 'available',
    hook: 'Enviado a uma cidade que violava todo limite. Sua propria esposa ficou para tras. Quando o castigo veio, a cidade inteira foi virada de cabeca para baixo.',
    bibleRef: 'Genesis 19',
    quranRef: 'Al-A\'raf 7:80–84 / Hud 11:77–83',
    insight: 'Na Biblia, Lo e sobrinho de Abraao que escapou. No Alcorao, Lut e um profeta enviado com missao especifica — e sua esposa e listada entre os traidores.',
    bibleText: `Lo era sobrinho de Abraao. Quando os dois se separaram porque a terra nao comportava seus rebanhos juntos, Lo escolheu a planicie do Jordao — fertil, bem regada, "como o jardim do Senhor." Fixou suas tendas ate Sodoma. A Biblia registra: "Os homens de Sodoma eram maus e grandes pecadores contra o Senhor."

Dois anjos chegaram a Sodoma ao entardecer. Lo estava sentado a porta da cidade. Levantou-se ao ve-los, prostrou-se e insistiu que ficassem em sua casa. Preparou-lhes um banquete. Mas antes que se deitassem, os homens da cidade — "desde o moco ate o velho, todo o povo de todos os bairros" — cercaram a casa e exigiram: "Onde estao os homens que vieram a ti esta noite? Traze-os fora para que os conhecamos." Lo saiu, fechou a porta atras de si, e implorou: "Meus irmaos, nao facais mal."

A cena e brutal na sua honestidade. Lo ofereceu suas proprias filhas — "tenho duas filhas que nao conheceram varao" — para proteger os hospedes. Os homens de Sodoma recusaram e avancaram contra Lo. Os anjos puxaram Lo para dentro e feriram os homens com cegueira. Disse os anjos: "Tens alguem mais aqui? Genros, filhos, filhas — tira-os deste lugar, porque vamos destrui-lo."

Lo foi avisar seus genros. Eles pensaram que estava brincando. Ao amanhecer, os anjos apressaram Lo: "Levanta-te, toma tua mulher e tuas duas filhas para que nao perecais." Lo hesitou. Os anjos o tomaram pela mao — a ele, a sua mulher e as filhas — e os tiraram para fora da cidade. "Escapa-te por tua vida. Nao olhes para tras. Nao pares na planicie."

Entao o Senhor fez chover enxofre e fogo sobre Sodoma e Gomorra. Destruiu as cidades, toda a planicie, todos os habitantes, e tudo o que crescia na terra. A mulher de Lo olhou para tras. Virou estátua de sal. Uma unica desobediencia. Um unico olhar. E Lo terminou numa caverna nas montanhas, sozinho com as duas filhas. O que aconteceu depois — as filhas embriagaram o pai e conceberam dele — e uma das passagens mais perturbadoras de toda a Biblia. Nenhum detalhe e escondido. Nenhuma fragilidade e poupada.`,
    quranText: `No Alcorao, Lut nao e apenas sobrinho de Ibrahim que escapou de uma catastrofe. Lut e um profeta. Enviado por Deus com uma missao especifica: advertir o povo de Sodoma. Essa diferenca de status muda completamente a leitura da historia.

Lut disse ao seu povo: "Cometeis a indecencia que nenhuma criatura antes de vos cometeu? Vos vos aproximais dos homens com desejo em vez das mulheres. Sois um povo transgressor." A resposta do povo foi glacial: "Expulsai a familia de Lut da vossa cidade. Sao gente que quer manter-se puros." A pureza moral de Lut era motivo de zombaria.

Quando os anjos chegaram — em forma de jovens belos — Lut ficou angustiado. O Alcorao captura sua agonia interior de forma que a Biblia nao faz: "E quando vieram Nossos mensageiros a Lut, ele se afligiu por causa deles e sentiu-se impotente para protege-los. Disse: Este e um dia terrivel." Ele sabia o que seu povo faria. Sabia que nao tinha forca para impedi-los.

O povo veio correndo ate a casa. Lut implorou: "O meu povo! Aqui estao minhas filhas — elas sao mais puras para vos. Temei a Deus e nao me humilheis diante dos meus hospedes. Nao ha entre vos um homem racional?" Responderam: "Sabes que nao temos direito as tuas filhas. E tu sabes o que queremos." E Lut disse uma frase que ecoa como grito de desespero: "Se ao menos eu tivesse forca contra vos, ou pudesse recorrer a um apoio poderoso!"

Os anjos entao revelaram sua identidade: "O Lut, somos mensageiros do teu Senhor. Eles nao te alcancarao. Parte com tua familia durante a noite, e que nenhum de vos olhe para tras — exceto tua mulher. Ela sera atingida pelo que os atingira." A esposa de Lut e excluida da salvacao antes mesmo do castigo. No Alcorao, ela e listada em At-Tahrim 66:10 ao lado da esposa de Nuh como exemplo de traicao — mulheres casadas com profetas que nao creram.

Quando a manha chegou, o castigo veio: "Viramos a cidade de cabeca para baixo e fizemos chover sobre eles pedras de barro endurecido, marcadas junto do teu Senhor." A cidade inteira foi literalmente invertida — o que estava em cima ficou embaixo. E as pedras que choveram nao eram aleatórias: eram "marcadas" — cada uma destinada a alguém.

O Alcorao nao inclui o epilogo biblico das filhas de Lut na caverna. A historia termina com a destruicao e a salvacao. O foco coranico e claro: Lut foi um profeta que cumpriu sua missao ate o limite, perdeu sua esposa para a descrenca, e foi salvo por Deus. A licao nao e sobre a cidade — e sobre a solidao do homem que diz a verdade quando ninguem quer ouvi-la.`,
    insights: [
      'Na Biblia, Lo e sobrinho de Abraao — um homem justo que escapou da destruicao. No Alcorao, Lut e um profeta enviado com missao divina especifica. Essa diferenca de status transforma a historia de um resgate pessoal numa missao profetica.',
      'O Alcorao captura a angustia interior de Lut de forma visceral: "Se ao menos eu tivesse forca contra vos, ou pudesse recorrer a um apoio poderoso!" (Hud 11:80). E o grito de um homem sozinho contra uma cidade inteira.',
      'A esposa de Lut e excluida da salvacao em ambas as tradicoes — mas no Alcorao ela e explicitamente listada como traidora da mensagem profetica (At-Tahrim 66:10), ao lado da esposa de Nuh. Proximidade com o profeta nao garante fe.',
      'A Biblia inclui um epilogo perturbador: as filhas de Lo embriagam o pai e concebem dele (Genesis 19:30-38). O Alcorao omite completamente essa cena. O Islam protege a reputacao dos profetas de forma mais rigorosa.',
      'A destruicao no Alcorao e descrita com precisao aterradora: a cidade foi "virada de cabeca para baixo" e choveram "pedras de barro marcadas" — cada pedra destinada a alguem especifico. O castigo nao foi caotico; foi cirurgico.',
    ],
    keyMoment: {
      quote: '\u201CSe ao menos eu tivesse forca contra vos, ou pudesse recorrer a um apoio poderoso!\u201D',
      ref: 'Hud 11:80',
      note: 'O desespero de um profeta sozinho contra uma cidade inteira. Lut nao tinha exercito, nao tinha aliados, nao tinha forca fisica. So tinha a verdade. E a verdade nao era suficiente para mudar aquele povo. Mas era suficiente para salva-lo.',
    },
    nextSlug: 'ishaq',
    nextName: 'Isaque',
  },
  {
    slug: 'ishaq',
    name: 'Isaque',
    arabicName: '\u0625\u0633\u062D\u0627\u0642',
    episode: 5,
    title: 'A Promessa Cumprida',
    status: 'available',
    hook: 'O filho que Deus prometeu quando toda logica dizia que era impossivel. Sara riu. Mas o riso virou nome — Isaque, "ele ri."',
    bibleRef: 'Genesis 21–27',
    quranRef: 'As-Saffat 37:112–113 / Maryam 19:49',
    insight: 'Ishaq e o ponto onde as linhagens divergem. A Biblia segue Isaque. O Alcorao honra Ishaq mas segue Ismail. Dois filhos, dois caminhos, duas civilizacoes.',
    bibleText: `A promessa parecia impossivel. Abraao tinha 99 anos. Sara tinha 90. O corpo de ambos ja havia passado da idade de gerar vida. E Deus disse: "Sara, tua mulher, te dara um filho, e lhe chamaras Isaque." Quando Sara ouviu, riu. Nao de alegria — de incredulidade. "Depois de velha, terei prazer, sendo tambem velho o meu senhor?" Deus perguntou a Abraao: "Por que riu Sara? Ha alguma coisa dificil para o Senhor?"

E no tempo determinado, Sara concebeu e deu a luz um filho a Abraao na sua velhice. Abraao chamou-o Isaque — Yitzhak em hebraico, que significa "ele ri." O nome carrega a memoria do riso de Sara. Cada vez que alguem chamava o menino pelo nome, lembrava que Deus cumpre o que promete, mesmo quando a promessa parece piada.

Mas o nascimento de Isaque criou uma tensao que explodiria. Ismael, o filho mais velho de Abraao com Hagar, ja tinha cerca de quatorze anos. Sara viu Ismael "brincando" — e exigiu: "Expulsa esta serva e seu filho, porque o filho desta serva nao herdara com meu filho Isaque." Abraao sofreu — Ismael era seu filho. Mas Deus confirmou: "Ouve Sara. Em Isaque sera chamada a tua descendencia. Mas de Ismael tambem farei uma nacao, porque e tua semente." Abraao se levantou de manha cedo, deu pao e um odre de agua a Hagar, e a enviou com o menino. Hagar vagou pelo deserto de Berseba. A agua acabou. Ela colocou o menino debaixo de um arbusto e sentou longe, porque nao podia ve-lo morrer. E chorou. Deus ouviu a voz do menino. Abriu os olhos de Hagar e ela viu um poco de agua. E Deus estava com Ismael, que cresceu e se tornou flecheiro no deserto.

Isaque cresceu como herdeiro da alianca. Abraao o levou ao monte Moria para o sacrificio — a prova mais extrema da fe. Isaque carregou a lenha nas costas, sem saber que era o cordeiro. "Meu pai, eis o fogo e a lenha, mas onde esta o cordeiro?" Abraao respondeu: "Deus provera." E proveu.

Depois, Abraao enviou seu servo para buscar uma esposa para Isaque — nao entre os cananeus, mas entre sua parentela. O servo encontrou Rebeca junto ao poco. Isaque a amou. Rebeca concebeu gemeos que lutavam no ventre. Deus disse a Rebeca: "Duas nacoes estao no teu ventre. O mais velho servira ao mais moco." Nasceram Esau (ruivo, peludo) e Jaco (segurando o calcanhar do irmao). Isaque amava Esau. Rebeca amava Jaco.

A historia de Isaque e marcada por um episodio de engano profundo. Isaque, ja velho e cego, chamou Esau para abencoa-lo. Rebeca vestiu Jaco com peles de cabra e o enviou no lugar do irmao. Isaque, confuso — "A voz e de Jaco, mas as maos sao de Esau" — abençoou Jaco com a bencao que pertencia ao primogenito. Quando Esau descobriu, o grito dele encheu a tenda: "Nao reservaste uma bencao para mim?" A alianca continuou por Jaco. A linhagem de Israel nasceu de um engano que Deus, aparentemente, nao corrigiu.`,
    quranText: `No Alcorao, Ishaq aparece com reverencia mas com brevidade. Sua mencao e quase sempre ligada ao pai Ibrahim e ao irmao Ismail. Ele e honrado como profeta, abençoado por Deus, mas a narrativa detalhada de sua vida — o engano da bencao, os filhos gemeos, o conflito com Esau — nao existe no texto coranico.

Quando Ibrahim foi salvo do fogo e deixou seu povo, Deus lhe deu boas novas: "E o agraciamos com Ishaq e, alem de Ishaq, com Yaqub." (Hud 11:71). A noticia veio para Sara: "E sua mulher estava de pe e riu. Entao lhe demos a boa nova de Ishaq, e apos Ishaq, de Yaqub." Mesmo no Alcorao, o riso de Sara esta presente. E a promessa inclui nao apenas o filho, mas o neto — Yaqub ja estava no decreto divino.

Em As-Saffat 37:112-113, apos a cena do sacrificio, Deus diz: "E lhe demos a boa nova de Ishaq, profeta dentre os justos. E o abençoamos, e a Ishaq." O Alcorao situa o nascimento de Ishaq como recompensa divina apos a prova do sacrificio — que a tradicao islamica entende ter sido com Ismail. Ishaq vem depois, como bencao adicional, confirmando que Ibrahim nao perdeu nada ao obedecer.

Em Maryam 19:49, Ibrahim diz: "Quando se apartou deles e daquilo que adoravam alem de Deus, agraciamo-lo com Ishaq e Yaqub, e a cada um fizemos profeta." Ibrahim perdeu a familia biologica que adorava idolos — mas ganhou uma linhagem profetica que duraria milenios. O Alcorao lista Ishaq consistentemente ao lado de outros profetas: "E agraciamos Ibrahim com Ishaq e Yaqub — todos guiamos. E antes dele, guiamos Nuh." (Al-Anaam 6:84).

O Alcorao nao narra o engano da bencao, nao detalha o conflito Esau-Jaco, nao descreve a cegueira de Isaque. A imagem coranica de Ishaq e limpa: profeta, justo, abençoado, parte de uma linhagem sagrada. A complexidade dramatica que a Biblia apresenta — um pai enganado, uma bencao roubada, um primogenito traido — simplesmente nao faz parte da narrativa islamica. Duas tradicoes, duas escolhas editoriais sobre o que contar e o que omitir.`,
    insights: [
      'O nome Isaque (Yitzhak) significa "ele ri" — em memoria do riso de Sara ao ouvir que teria um filho aos 90 anos. Em ambas as tradicoes, o riso de incredulidade se transforma em nome proprio. Deus tem senso de humor teologico.',
      'Na Biblia, Isaque e o filho do sacrificio. Na tradicao islamica, o sacrificado e Ismail. O Alcorao nao nomeia explicitamente qual filho, mas a maioria dos estudiosos muculmanos entende que foi Ismail, e que Ishaq nasceu como recompensa depois da prova.',
      'A Biblia detalha como Jaco roubou a bencao de Esau disfarçando-se diante do pai cego. O Alcorao omite completamente essa cena. No Islam, os profetas sao protegidos de serem vitimas de engano que comprometa a missao divina.',
      'Ishaq e mencionado 17 vezes no Alcorao, sempre em contextos de honra: listado entre profetas, descrito como "abençoado" e "dentre os justos." A brevidade nao e descaso — e economia narrativa. O que importa no Alcorao e a linhagem profetica, nao a biografia pessoal.',
    ],
    keyMoment: {
      quote: '\u201CE sua mulher estava de pe e riu. Entao lhe demos a boa nova de Ishaq, e apos Ishaq, de Yaqub.\u201D',
      ref: 'Hud 11:71',
      note: 'Sara ri diante de Deus. A mesma cena na Biblia e no Alcorao. Mas enquanto a Biblia pergunta "por que riu?", o Alcorao simplesmente segue com a promessa. O riso de duvida nao impediu a bencao. Deus nao exige fe perfeita para cumprir Sua palavra.',
    },
    nextSlug: 'yaqub',
    nextName: 'Jaco',
  },
  {
    slug: 'yaqub',
    name: 'Jaco',
    arabicName: '\u064A\u0639\u0642\u0648\u0628',
    episode: 6,
    title: 'O Pai que Chorou ate Cegar',
    status: 'available',
    hook: 'Lutou com Deus e recebeu um novo nome — Israel. Perdeu o filho mais amado por decadas. Chorou tanto que seus olhos embranqueceram.',
    bibleRef: 'Genesis 25–50',
    quranRef: 'Maryam 19:49 / Yusuf 12:4–6',
    insight: 'Yaqub e Israel. O homem cujo nome se tornou uma nacao. No Alcorao, ele e o pai paciente que nunca perdeu a esperanca em Deus — mesmo quando perdeu a visao de tanto chorar.',
    bibleText: `Jaco nasceu segurando o calcanhar do irmao gemeo Esau — e passou a vida inteira tentando tomar o que pertencia ao primogenito. Seu nome, Yaaqov, sugere "aquele que agarra pelo calcanhar," ou "suplantador." E supplantar foi exatamente o que Jaco fez.

Primeiro, convenceu Esau a vender-lhe o direito de primogenitura por um prato de lentilhas. Esau voltou do campo, faminto. "Dá-me desse guisado vermelho," pediu. Jaco disse: "Vende-me primeiro a tua primogenitura." Esau respondeu: "Estou a ponto de morrer; de que me serve a primogenitura?" E vendeu-a por um prato de comida. Depois, com a ajuda da mae Rebeca, vestiu-se com peles de cabra e enganou o pai cego Isaque para roubar a bencao que pertencia a Esau.

Esau jurou mata-lo. Jaco fugiu para a casa de Labao, irmao de Rebeca, em Hara. Na primeira noite da fuga, deitou-se e usou uma pedra como travesseiro. E sonhou: uma escada ligava a terra ao ceu, e anjos de Deus subiam e desciam por ela. Deus estava no topo e disse: "A terra em que estas deitado, darei a ti e a tua descendencia. Sera como o po da terra." Jaco acordou e disse: "Quao terrivel e este lugar! E a casa de Deus, a porta dos ceus." Chamou aquele lugar de Betel.

Em Hara, Jaco se apaixonou por Raquel, filha de Labao. Trabalhou sete anos por ela — "e pareceram-lhe poucos dias pelo muito que a amava." Mas na noite do casamento, Labao colocou Lia, a filha mais velha, no lugar de Raquel. Jaco, o enganador, foi enganado. Teve que trabalhar mais sete anos por Raquel. E assim começou a familia mais disfuncional da Biblia: Jaco com quatro mulheres (Lia, Raquel, Bila e Zilpa) gerando doze filhos que se odiariam entre si.

O momento mais misterioso da vida de Jaco aconteceu no vau de Jaboque, na vespera de reencontrar Esau. Um homem lutou com ele a noite inteira. Quando viu que nao podia vence-lo, tocou na articulacao da coxa de Jaco, deslocando-a. Jaco nao soltou: "Nao te deixarei ir se nao me abençoares." O homem disse: "Qual e o teu nome?" "Jaco." "Nao te chamaras mais Jaco, e sim Israel, porque lutaste com Deus e com os homens e prevaleceste." Israel — Yisrael — "aquele que luta com Deus." O nome de uma nacao inteira nasceu de uma luta noturna a beira de um rio.

Jaco amou Jose acima de todos os filhos. Fez-lhe a tunica de muitas cores. E quando os irmaos trouxeram a tunica manchada de sangue, Jaco rasgou suas vestes, pos saco sobre os lombos, e chorou por seu filho "muitos dias." Recusou ser consolado: "Chorando descerei ao meu filho ate a sepultura." Decadas depois, quando os filhos foram ao Egito e voltaram contando que Jose estava vivo e era governador, "o espirito de Jaco reviveu." Desceu ao Egito. Abraçou Jose. E disse ao farao: "Os dias dos anos das minhas peregrinacoes sao cento e trinta anos. Poucos e maus foram os dias dos anos da minha vida." Uma vida de engano, fuga, perda e reencontro.

No leito de morte, Jaco abençoou cada um dos doze filhos com profecias especificas que moldaram o destino de cada tribo de Israel. E a pergunta que fez antes de morrer ecoa em ambas as tradicoes.`,
    quranText: `No Alcorao, Yaqub aparece principalmente em duas funcoes: como profeta da linhagem de Ibrahim e como pai de Yusuf. A luta noturna, o engano da bencao, as quatro esposas — nada disso aparece no texto coranico. A imagem de Yaqub no Islam e diferente: e a imagem de um pai paciente e um crente inabalavel.

Yaqub e mencionado 16 vezes no Alcorao. Na maioria, esta listado ao lado de Ibrahim e Ishaq como parte da linhagem profetica: "E agraciamos Ibrahim com Ishaq e Yaqub — todos guiamos." (Al-Anaam 6:84). Ele e profeta, justo, escolhido. Mas e na Surata Yusuf que Yaqub ganha dimensao humana.

Quando o jovem Yusuf conta ao pai o sonho das onze estrelas, sol e lua se prostrando, Yaqub entende imediatamente: "O meu filho, nao contes tua visao a teus irmaos, para que nao tramem contra ti." Yaqub sabia. Sabia que o ciume dos filhos era perigoso. Sabia que aquele sonho provocaria inveja. Avisou. Mas nao pode impedir o que viria.

Quando os filhos trouxeram a camisa de Yusuf manchada de sangue falso, Yaqub nao acreditou: "Vossas almas vos induziram a algo. Paciencia formosa! E Deus e Aquele a Quem se recorre contra o que descreveis." Paciencia formosa — sabr jamil — paciencia sem queixa, sem acusacao, sem desespero publico. Yaqub sofreu em silencio. Mas o corpo traiu a alma. "E seus olhos embranqueceram de tristeza, e ele estava sufocando a dor." Chorou tanto que ficou cego. Os filhos disseram: "Por Deus! Nao cessaras de lembrar Yusuf ate que adoeças gravemente ou perecas." Yaqub respondeu: "So me queixo da minha angustia e tristeza a Deus. E sei de Deus o que vos nao sabeis."

E nunca parou de esperar. Quando mandou os filhos de volta ao Egito pela segunda vez, disse: "O meus filhos, ide e procurai noticias de Yusuf e seu irmao. E nao desespereis da misericordia de Deus. Ninguem desespera da misericordia de Deus senao o povo descrente." Decadas de ausencia. Cegueira. Dor insuportavel. E ainda assim: "Nao desespereis." A fe de Yaqub nao dependia de circunstancias — sustentava-se apesar delas.

Quando a camisa de Yusuf foi lancada sobre o rosto de Yaqub, sua visao voltou. O Alcorao narra: "E quando o portador da boa nova chegou, lancou-a sobre seu rosto e ele recuperou a visao. Disse: Nao vos disse que sei de Deus o que nao sabeis?" A cegueira causada pela dor foi curada pela alegria. E Yaqub desceu ao Egito. Yusuf colocou os pais no trono. E o sonho de infancia se cumpriu.

Mas a cena mais significativa de Yaqub no Alcorao vem no leito de morte. "Estaveis presentes quando a morte se apresentou a Yaqub? Quando disse a seus filhos: Que adorareis apos mim? Disseram: Adoraremos o teu Deus e o Deus de teus pais Ibrahim, Ismail e Ishaq — um Deus unico. E a Ele estaremos submetidos." (Al-Baqarah 2:133). A ultima pergunta de Yaqub nao foi sobre heranca, terras ou poder. Foi sobre Deus. E a resposta dos filhos confirmou a continuidade da mensagem.`,
    insights: [
      'Yaqub e Israel. O nome dado apos lutar com Deus na Biblia (Genesis 32:28). No Alcorao, esse episodio nao existe. O nome "Israel" aparece no Alcorao (Ali Imran 3:93), mas sem a historia da luta noturna. Para o Islam, profetas nao lutam com Deus — submetem-se.',
      'Yaqub chorou tanto por Yusuf que ficou cego — detalhe presente no Alcorao (Yusuf 12:84) e ausente na Biblia (que menciona apenas luto prolongado). A cegueira por amor e uma das imagens mais poderosas da literatura profetica.',
      'A expressao "sabr jamil" (paciencia formosa) de Yaqub se tornou um conceito central no Islam. Paciencia sem queixa publica, sem acusacao a Deus, sem dramatizacao. Sofrer com dignidade. Yaqub e o modelo supremo disso.',
      'A pergunta final de Yaqub no leito de morte — "Que adorareis apos mim?" (Al-Baqarah 2:133) — e citada no Alcorao como prova de que os filhos de Israel eram originalmente muculmanos (submetidos a Deus). A mesma cena na Biblia tem Jaco abençoando cada filho com profecias tribais especificas.',
      'A Biblia apresenta Jaco como suplantador — enganador que roubou primogenitura e bencao. O Alcorao omite todo esse arco. No Islam, Yaqub e exclusivamente o pai paciente e o profeta fiel. Duas versoes do mesmo homem que revelam prioridades narrativas diferentes.',
    ],
    keyMoment: {
      quote: '\u201CQue adorareis apos mim? Disseram: Adoraremos o teu Deus e o Deus de teus pais Ibrahim, Ismail e Ishaq — um Deus unico.\u201D',
      ref: 'Al-Baqarah 2:133',
      note: 'A ultima pergunta de um pai moribundo. Nao perguntou sobre terras, riquezas ou poder. Perguntou sobre Deus. E a resposta dos filhos confirmou que a corrente nao se romperia. A linhagem profetica continua.',
    },
    nextSlug: 'yusuf',
    nextName: 'Jose',
  },
  {
    slug: 'yusuf',
    name: 'Jose',
    arabicName: '\u064A\u0648\u0633\u0641',
    episode: 7,
    title: 'O Traido que Perdoou',
    status: 'available',
    hook: 'Vendido pelos proprios irmaos por algumas moedas. Jogado num poco. Preso injustamente. Trinta anos depois, era o segundo mais poderoso do Egito.',
    bibleRef: 'Genesis 37\u201350',
    quranRef: 'Yusuf 12:1\u2013111',
    insight: 'A historia de Yusuf e a unica surata do Alcorao que conta uma unica historia do comeco ao fim \u2014 e o proprio Alcorao a chama de "a mais bela das historias."',
    bibleText: `Jose era o penultimo de doze irmaos. Filho de Jaco e Raquel, a esposa amada. Jaco nao escondia a preferencia: fez para Jose uma tunica de muitas cores, uma peca que gritava "este e o meu favorito." Os irmaos olhavam e o odio crescia em silencio. Quando Jose contou seus sonhos \u2014 feixes de trigo se curvando diante do seu, onze estrelas e o sol e a lua se prostrando a ele \u2014 o odio virou conspiracao.

Estavam nos campos, longe do pai. A oportunidade apareceu. Agarraram Jose, arrancaram a tunica, e jogaram-no num poco. Inicialmente queriam mata-lo. Ruben, o mais velho, convenceu os outros a poupar sua vida. Quando uma caravana de mercadores ismaelitas passou, Juda disse: "Vamos vende-lo." Venderam o proprio irmao por vinte pecas de prata. Molharam a tunica colorida em sangue de bode e levaram ao pai. "Achamos isto. Ve se e a tunica do teu filho." Jaco reconheceu. Rasgou suas vestes. Chorou ate ficar cego.

No Egito, Jose foi vendido a Potifar, capitao da guarda do farao. Deus estava com Jose \u2014 tudo o que tocava prosperava. Potifar o colocou como administrador de toda sua casa. Mas a esposa de Potifar lancou os olhos sobre Jose. Dia apos dia, tentou seduzi-lo. "Deita-te comigo." Jose recusou: "Como faria eu tamanha maldade e pecaria contra Deus?" Um dia, ela agarrou sua roupa. Ele fugiu, deixando a roupa nas maos dela. Ela gritou. Acusou-o falsamente. Jose foi preso.

Na prisao, interpretou os sonhos de dois servos do farao: o copeiro seria restaurado, o padeiro seria executado. Aconteceu exatamente como disse. Mas o copeiro esqueceu de Jose por dois anos inteiros. Ate que o proprio farao sonhou: sete vacas gordas devoradas por sete vacas magras, sete espigas cheias engolidas por sete espigas secas. Ninguem soube interpretar. O copeiro finalmente lembrou. Jose foi trazido da prisao ao trono. "Sete anos de abundancia virao, seguidos de sete anos de fome", disse. "Estoquem um quinto de toda producao." O farao o nomeou governador do Egito. O escravo virou vice-rei.

Quando a fome chegou, os irmaos de Jose viajaram ao Egito para comprar cereais. Prostaram-se diante dele sem reconhece-lo. Jose os reconheceu. Testou-os. Exigiu que trouxessem Benjamin, o irmao mais novo. Quando finalmente se revelou \u2014 "Eu sou Jose, vosso irmao, a quem vendestes para o Egito" \u2014 os irmaos ficaram atonitos. E Jose disse: "Nao vos entristeçais nem vos irriteis por me terdes vendido. Deus me enviou adiante de vos para preservar a vida."`,
    quranText: `O Alcorao abre a Surata Yusuf com uma declaracao unica: "Nos te narramos a mais bela das historias." Nenhuma outra surata recebe esse titulo. E nenhuma outra surata conta uma historia completa do inicio ao fim \u2014 um arco narrativo perfeito que vai do poco ao palacio.

Yusuf, ainda crianca, conta ao pai Yaqub um sonho: "O meu pai, vi onze estrelas, o sol e a lua \u2014 vi-os prostrando-se diante de mim." Yaqub entende imediatamente o peso daquele sonho e avisa: "O meu filho, nao contes tua visao a teus irmaos, para que nao tramem contra ti." Os irmaos ja sentiam o ciume corroendo. Disseram entre si: "Yusuf e seu irmao sao mais amados pelo nosso pai do que nos, embora sejamos um grupo. Nosso pai esta em claro erro." Planejaram. Pediram ao pai para levar Yusuf ao campo. E jogaram-no num poco escuro.

A caravana que o encontrou vendeu-o no Egito. O nobre que o comprou disse a sua esposa: "Trata-o bem. Talvez nos seja util ou o adotemos como filho." E entao vem uma das cenas mais cinematograficas de qualquer texto sagrado. A esposa do nobre \u2014 que a tradicao chama de Zulaykha \u2014 tentou seduzi-lo. "Vem ca!", ordenou. Yusuf disse: "Deus me livre! Ele e meu senhor e me tratou bem." Ela rasgou sua camisa pelas costas enquanto ele fugia. Encontraram o marido na porta. Ela acusou Yusuf. Mas uma testemunha da propria familia apontou: "Se a camisa foi rasgada pela frente, ela diz a verdade. Se pelas costas, ele e inocente." A camisa estava rasgada pelas costas.

E o Alcorao acrescenta uma cena que a Biblia nao tem: quando as mulheres da cidade comecaram a fofocar \u2014 "a esposa do nobre tenta seduzir seu escravo" \u2014 Zulaykha organizou um banquete. Deu uma faca a cada mulher. Quando Yusuf entrou, elas ficaram tao deslumbradas que cortaram as proprias maos sem perceber. "Deus nos livre! Isto nao e um ser humano \u2014 nao e senao um anjo nobre!" E Yusuf escolheu a prisao: "Senhor meu, a prisao me e mais cara do que aquilo para que me convidam."

Na prisao, Yusuf interpretou sonhos. No palacio, interpretou o sonho do rei. Mas antes de sair da prisao, exigiu que sua inocencia fosse provada publicamente. "Volta ao teu senhor e pergunta-lhe sobre as mulheres que cortaram as maos." Nao aceitou liberdade sem honra restaurada. O rei investigou. As mulheres confessaram. Zulaykha admitiu: "Agora a verdade veio a tona. Fui eu quem o tentou, e ele e dos veridicos."

E o perdao? Quando os irmaos finalmente se prostraram diante dele \u2014 cumprindo o sonho de infancia \u2014 Yusuf disse: "Nao ha censura sobre vos hoje. Que Deus vos perdoe. Ele e o mais Misericordioso dos misericordiosos." Trinta anos. Poco. Escravidao. Falsa acusacao. Prisao. E uma unica frase, sem amargura. A surata termina com Yusuf fazendo uma suplica que resume toda a historia: "Meu Senhor, Tu me deste autoridade e me ensinaste a interpretacao dos eventos. Criador dos ceus e da terra, Tu es meu Protetor neste mundo e no Alem. Faze-me morrer muçulmano e junta-me aos justos."`,
    insights: [
      'A Surata Yusuf (capitulo 12) e chamada no proprio Alcorao de "a mais bela das historias" (ahsan al-qasas) \u2014 a unica surata que narra um unico arco do comeco ao fim. Nenhuma outra historia recebe esse titulo.',
      'O Alcorao detalha a tentacao de Zulaykha de forma mais dramatica: ela convida as mulheres da cidade para um banquete, e quando Yusuf entra, elas cortam as proprias maos sem perceber, tamanha a beleza dele. "Isto nao e um ser humano \u2014 e um anjo nobre!"',
      'No Islam, Yusuf e apresentado como modelo supremo de paciencia (sabr) e confianca em Deus (tawakkul). Cada tribulacao \u2014 o poco, a escravidao, a tentacao, a prisao \u2014 era preparacao divina para a proxima etapa. Nada foi acaso.',
      'Yusuf se recusa a sair da prisao ate que sua inocencia seja provada publicamente. Na Biblia, ele simplesmente e trazido ao farao. No Alcorao, ele exige justica antes de aceitar liberdade \u2014 a honra vale mais que a libertacao.',
      'O perdao de Yusuf aos irmaos e identico nos dois textos \u2014 uma das cenas de reconciliacao mais poderosas da literatura sagrada mundial. Mas no Alcorao, a surata termina com Yusuf pedindo a Deus para morrer em submissao. O ciclo se completa.',
    ],
    keyMoment: {
      quote: '\u201CNao ha censura hoje sobre vos. Que Deus vos perdoe. Ele e o mais Misericordioso dos misericordiosos.\u201D',
      ref: 'Yusuf 12:92',
      note: 'As palavras exatas de Yusuf ao perdoar os irmaos que o venderam como escravo. Trinta anos de sofrimento. Uma frase. Sem ressentimento. Sem condicoes. Sem "mas." Perdao absoluto.',
    },
    nextSlug: 'ayyub',
    nextName: 'Jo',
  },
  {
    slug: 'ayyub',
    name: 'Jo',
    arabicName: '\u0623\u064A\u0648\u0628',
    episode: 8,
    title: 'A Paciencia Absoluta',
    status: 'available',
    hook: 'Perdeu tudo — saude, filhos, riqueza. Seus amigos diziam que era castigo. Ele sabia que era teste. E esperou.',
    bibleRef: 'Jo 1–42',
    quranRef: 'Sad 38:41–44 / Al-Anbiya 21:83–84',
    insight: 'Na Biblia, Jo questiona Deus durante 35 capitulos. No Alcorao, sua suplica tem uma unica frase — e e considerada a oracao mais perfeita ja feita por um ser humano.',
    bibleText: `Jo e, talvez, o livro mais estranho da Biblia. Nao e historia. Nao e lei. Nao e profecia. E um debate filosofico sobre o sofrimento — e o unico livro que mostra Deus sendo questionado sem punir quem questiona.

A historia comeca no ceu. O Senhor pergunta a Satanas: "Observaste o meu servo Jo? Ninguem ha na terra semelhante a ele, homem integro e reto, que teme a Deus e se desvia do mal." Satanas responde: "E por nada que Jo teme a Deus? Nao o cercaste por todos os lados? Toca tudo o que ele tem, e ele te amaldicoará na face." Deus aceita o desafio. "Tudo o que ele tem esta em teu poder. Somente contra ele nao estendas a mao."

E entao, num unico dia, Jo perde tudo. Mensageiro apos mensageiro chega com noticias piores. Os sabeus levaram os bois e jumentas. Fogo do ceu consumiu as ovelhas. Os caldeus levaram os camelos. E o golpe final: "Teus filhos e filhas estavam comendo e bebendo na casa do irmao mais velho, e um grande vento atingiu os quatro cantos da casa, que caiu sobre os jovens, e morreram." Todos os filhos. De uma vez. Jo se levantou, rasgou o manto, rapou a cabeca, e prostrou-se: "Nu sai do ventre da minha mae e nu tornarei. O Senhor deu e o Senhor tirou. Bendito seja o nome do Senhor."

Satanas voltou: "Toca nos ossos e na carne dele." Deus permitiu. Jo foi coberto de feridas malignas, da sola dos pes ao alto da cabeca. Sentou-se num monturo e raspava as feridas com um caco de ceramica. Sua esposa disse: "Ainda manténs a tua integridade? Amaldiçoa a Deus e morre." Jo respondeu: "Receberemos de Deus o bem e nao receberemos o mal?"

Tres amigos vieram — Elifaz, Bildade e Zofar. Sentaram-se com ele sete dias em silencio. Depois comecaram a falar. E durante capitulos e capitulos, os amigos insistem: "Voce pecou. Deus e justo. Se esta sofrendo, e porque merece." Jo responde: "Eu sei que nao pequei. Quero falar diretamente com Deus." O debate se estende por 35 capitulos — a mais longa argumentacao teologica da Biblia.

E entao, Deus responde. De um redemoinho. Nao explica o sofrimento. Nao da razoes. Faz perguntas: "Onde estavas quando eu fundava a terra? Quem lhe pos as medidas? Quem encerrou o mar com portas quando ele irrompeu? Podes atar as cadeias das Pleiades? Daras tu forca ao cavalo?" Setenta perguntas. Nenhuma resposta. A mensagem e clara sem ser dita: voce nao tem a capacidade de entender o que estou fazendo. E Jo aceita: "Eu te conhecia so de ouvir falar, mas agora os meus olhos te veem. Por isso me retrato e me arrependo no po e na cinza."

No final, Deus repreende os amigos — nao Jo. "Nao falastes de mim o que era reto, como o meu servo Jo." E restaurou Jo: deu-lhe o dobro de tudo. Mais filhos. Mais riquezas. Mais anos. Jo viveu mais cento e quarenta anos e viu seus descendentes ate a quarta geracao. Mas as perguntas que o livro levanta — por que os inocentes sofrem? — nunca sao respondidas. E essa e a resposta.`,
    quranText: `A historia de Ayyub no Alcorao e radicalmente mais curta que na Biblia — e exatamente por isso, mais concentrada. Nao ha debate com amigos. Nao ha discurso de Deus do redemoinho. Nao ha 42 capitulos. Ha uma suplica. Uma unica frase. E ela e considerada uma das oracoes mais perfeitas de toda a tradicao islamica.

O Alcorao menciona Ayyub em poucos versos, mas cada um carrega peso imenso. Em Al-Anbiya 21:83-84: "E Ayyub, quando clamou ao seu Senhor: 'O mal me tocou, e Tu es o mais Misericordioso dos misericordiosos.' Entao respondemos a ele e removemos o que o afligia, e lhe devolvemos sua familia e outros iguais a eles — como misericordia Nossa e lembranca para os adoradores."

Observe a suplica. Ayyub nao pede cura. Nao pede restauracao. Nao pede explicacao. Diz apenas: "O mal me tocou" — reconhece a realidade. "E Tu es o mais Misericordioso" — reconhece quem Deus e. Nao ha barganha. Nao ha condicao. Nao ha dramatizacao. E a oracao mais economica e mais completa ja registrada em qualquer escritura. Diz tudo dizendo quase nada.

Em Sad 38:41-44, Deus diz: "E lembra Nosso servo Ayyub, quando clamou ao seu Senhor: 'Satanas me tocou com aflicao e tormento.' Bate com teu pe — aqui ha agua fresca para banho e bebida. E lhe devolvemos sua familia e outros iguais a eles." Deus ordena que Ayyub bata o pe no chao, e uma fonte brota. A cura vem de um gesto simples — mas so vem apos a paciencia ter sido completa.

Ha um detalhe extraordinario no final da passagem coranica. Durante sua doenca, Ayyub fez um juramento de castigar sua esposa (segundo a tradicao, ela disse algo impróprio durante o sofrimento). Quando foi curado, Deus o instruiu: "Toma em tua mao um feixe de ramos e bate com ele — e nao violes teu juramento." Um feixe de ramos finos. Um gesto simbolico que cumpre a letra do juramento sem causar dor real. Deus encontrou uma saida para que Ayyub mantivesse a palavra sem ferir quem cuidou dele durante anos de doenca. A jurisprudencia islamica cita essa passagem como exemplo de que Deus prefere misericordia a rigidez legal.

A paciencia de Ayyub — sabr — se tornou proverbial no Islam. "Sabr Ayyub" e uma expressao usada ate hoje para descrever paciencia extrema. Mas nao e paciencia passiva. Ayyub nao ficou em silencio: ele clamou a Deus. A diferenca entre paciencia e resignacao no Islam e esta: paciencia e sofrer sem perder a conexao com Deus. Resignacao e sofrer sem ninguem pra quem clamar. Ayyub nunca perdeu o endereco de suas lagrimas.`,
    insights: [
      'Na Biblia, o Livro de Jo tem 42 capitulos de debate filosofico sobre sofrimento. No Alcorao, a historia inteira de Ayyub cabe em poucos versos. A diferenca de abordagem e reveladora: a Biblia explora o problema; o Alcorao apresenta a resposta.',
      'A suplica de Ayyub — "O mal me tocou, e Tu es o mais Misericordioso dos misericordiosos" (Al-Anbiya 21:83) — e considerada pelos estudiosos islamicos uma das oracoes mais perfeitas. Nao pede nada especifico. Apenas apresenta a dor e reconhece a natureza de Deus.',
      'A Biblia mostra uma cena celestial onde Deus permite que Satanas teste Jo — quase como uma aposta. O Alcorao nao tem essa cena. No Islam, Deus nao faz apostas com Satanas. O teste vem de Deus diretamente, com sabedoria que nao precisa de explicacao.',
      'Deus repreende os amigos de Jo na Biblia — nao o proprio Jo. "Nao falastes de mim o que era reto, como meu servo Jo." Questionar Deus honestamente e mais aceitavel do que defender Deus com argumentos falsos.',
      'O detalhe do feixe de ramos (Sad 38:44) e usado na jurisprudencia islamica: Deus oferece uma saida legal para que Ayyub cumpra seu juramento sem causar dano. A lei divina prefere misericordia a literalismo.',
    ],
    keyMoment: {
      quote: '\u201CO mal me tocou, e Tu es o mais Misericordioso dos misericordiosos.\u201D',
      ref: 'Al-Anbiya 21:83',
      note: 'A oracao mais curta e mais completa de toda a literatura profetica. Sem pedido. Sem condicao. Sem barganha. Apenas dor apresentada diante de misericordia. E Deus respondeu imediatamente.',
    },
    nextSlug: 'musa',
    nextName: 'Moises',
  },
  {
    slug: 'musa',
    name: 'Moises',
    arabicName: '\u0645\u0648\u0633\u0649',
    episode: 9,
    title: 'O Libertador',
    status: 'available',
    hook: 'Um bebe num cesto no Nilo. Criado pelo homem que escravizava seu povo. Depois, enfrentou-o.',
    bibleRef: 'Exodo 1\u201340',
    quranRef: 'Al-Qasas 28 / Ta-Ha 20',
    insight: 'Musa e o profeta mais mencionado no Alcorao \u2014 136 vezes. Mais do que Muhammad. Mais do que qualquer outro.',
    bibleText: `O farao do Egito olhou para os hebreus e sentiu medo. Eram muitos. Cresciam rapido. E se um dia se aliassem ao inimigo? Deu a ordem: todo menino hebreu que nascesse deveria ser jogado no Nilo. As parteiras desobedeceram em segredo. Mas o medo permaneceu. Numa casa de escravos hebreus, uma mulher deu a luz a um menino e viu que era formoso. Escondeu-o por tres meses. Quando nao podia mais esconder, fez um cesto de juncos, calafetou-o com betume, colocou o bebe dentro e pos o cesto entre os juncos a margem do rio. Sua irma ficou de longe, observando.

A filha do farao desceu ao Nilo para banhar-se. Viu o cesto. Abriu. O bebe chorava. "Este e um dos filhos dos hebreus", disse ela. E teve compaixao. A irma de Moises, que observava de longe, aproximou-se: "Quer que eu chame uma ama entre as hebreias para criar o menino?" A filha do farao concordou. E a mae do proprio Moises foi chamada para amamentar seu filho \u2014 paga pelo palacio do homem que queria mata-lo. Quando cresceu, foi levado a filha do farao, e ela o adotou como filho. Moises cresceu no palacio do farao, criado como principe egípcio.

Ja adulto, Moises viu um egipcio espancando um hebreu. Olhou ao redor. Nao havia testemunhas. Matou o egipcio e escondeu o corpo na areia. No dia seguinte, tentou separar dois hebreus que brigavam. Um deles disse: "Pretendes matar-me como mataste o egipcio?" Moises soube que o segredo havia vazado. Fugiu para Midiã, do outro lado do deserto. Casou-se. Virou pastor de ovelhas. Quarenta anos se passaram.

E entao, no monte Horebe, uma sarca ardia em fogo e nao se consumia. Moises se aproximou. Uma voz saiu do fogo: "Moises! Moises! Tira as sandalias dos pes, porque o lugar em que estas e terra santa. Eu sou o Deus de teu pai, o Deus de Abraao, de Isaque e de Jaco." Moises cobriu o rosto. Tinha medo. "Tenho visto a aflicao do meu povo no Egito. Desci para livra-lo. Vem, pois, e Eu te enviarei a Farao para que tires o meu povo do Egito." Moises implorou: "Quem sou eu para ir a Farao?" Deus respondeu: "Eu serei contigo." Moises tentou mais: "Sou pesado de boca e de lingua." Deus insistiu. Deu-lhe sinais: o cajado que virava serpente, a mao que ficava leprosa e voltava ao normal. E enviou Arao, irmao de Moises, para falar por ele.

Moises voltou ao Egito. Confrontou o farao: "Deixa ir o meu povo." O farao riu. E entao vieram as dez pragas \u2014 agua em sangue, ras, piolhos, moscas, peste, ulceras, granizo, gafanhotos, trevas, e a morte dos primogenitos. Cada praga mais terrivel que a anterior. O farao endurecia o coracao e voltava atras. Ate que na ultima noite, o anjo da morte passou sobre o Egito, e todo primogenito egipcio morreu. O grito foi tao grande que nao houve casa sem morto. O farao finalmente cedeu. Os hebreus partiram. Mas farao mudou de ideia. Enviou seu exercito. Os hebreus ficaram encurralados entre o Mar Vermelho e as carruagens do farao. "Nao temais", disse Moises. "Parai e vede o livramento do Senhor." Estendeu o cajado sobre o mar. As aguas se abriram. Os hebreus passaram em terra seca. Quando os egipcios tentaram seguir, as aguas voltaram. O exercito do farao foi engolido pelo mar.

No Sinai, Moises subiu ao monte. Quarenta dias e quarenta noites. Deus escreveu as tabuas da lei com o proprio dedo: os Dez Mandamentos. Quando Moises desceu, encontrou o povo adorando um bezerro de ouro. Sua ira foi tao grande que jogou as tabuas no chao, quebrando-as. Moises nao chegou a entrar na Terra Prometida. Deus lhe mostrou de longe, do topo do monte Nebo. E ali Moises morreu. Tinha cento e vinte anos, e seus olhos nao tinham escurecido.`,
    quranText: `Musa e, de longe, o profeta mais presente no Alcorao. Seu nome aparece 136 vezes \u2014 mais do que qualquer outro, incluindo Muhammad. Sua historia e contada e recontada em dezenas de suratas, cada vez com um angulo diferente, como se Deus quisesse garantir que ninguem esquecesse.

A historia comeca com o medo de Firaun (farao). Ele teve um sonho \u2014 ou seus sacerdotes viram nos astros \u2014 que uma crianca dos filhos de Israel destruiria seu reino. Ordenou a matanca dos recem-nascidos. E Deus revelou a mae de Musa: "Amamenta-o. Quando temeres por ele, lanca-o no rio e nao temas nem te entristeças. Nos to devolveremos e faremos dele um dos mensageiros." Uma mae recebe a ordem de jogar seu bebe no rio. E a ordem vem com uma promessa: ele voltara.

O cesto desceu o Nilo. E parou exatamente onde? Nos pes da familia de Firaun. A esposa do farao \u2014 que no Islam se chama Asiya e e considerada uma das quatro mulheres mais perfeitas da historia \u2014 pegou o bebe e disse: "Sera um consolo para mim e para ti. Nao o mateis. Talvez nos seja util, ou o adotemos como filho." O homem que matava bebes hebreus criou no proprio palacio aquele que o destruiria. E o bebe recusou o peito de todas as amas egipcias \u2014 ate que sua propria irma sugeriu uma mulher hebreia. A mae de Musa foi paga para amamentar seu proprio filho, na casa do farao.

Musa cresceu. Matou o egipcio por acidente ao tentar defender um israelita. Fugiu para Midiã. Casou-se com uma das filhas de Shuayb. Viveu anos como pastor. E entao, caminhando com a familia numa noite fria, viu um fogo no lado do monte. "Esperai. Percebo um fogo. Talvez eu vos traga uma brasa para vos aquecerdes." Quando se aproximou, a voz veio: "O Musa! Em verdade, Eu sou teu Senhor. Tira tuas sandalias. Estas no vale sagrado de Tuwa." Deus ordenou que jogasse seu cajado. Virou serpente. Ordenou que pusesse a mao sob o braco. Saiu branca, luminosa, sem doenca. E disse: "Vai a Firaun. Ele transgrediu."

Musa disse: "Senhor meu, expande meu peito. Facilita minha tarefa. Desata o no da minha lingua, para que entendam minhas palavras. E da-me um assistente da minha familia \u2014 Harun, meu irmao." Deus concedeu tudo. E acrescentou algo profundo: "Ja te agraciamos outra vez, quando inspiramos tua mae, dizendo: Lanca-o no cesto e lanca-o no rio." Deus lembrou Musa de que toda a sua vida \u2014 o cesto, o palacio, a fuga, o casamento, o fogo no monte \u2014 foi orquestrada desde o inicio.

Musa e Harun confrontaram Firaun. E aqui o Alcorao detalha um dialogo que a Biblia nao tem. Firaun pergunta: "E quem e o Senhor dos mundos?" Musa responde: "O Senhor dos ceus e da terra e do que ha entre eles, se tendes certeza." Firaun zomba. Chama seus magicos. Eles lancam suas cordas e varas, que parecem serpentes. Musa sente medo. Deus diz: "Nao temas. Tu es o superior." Musa lanca seu cajado. Devora tudo que os magicos haviam feito. E entao acontece algo extraordinario que so o Alcorao narra: os magicos do proprio farao se prostram. "Cremos no Senhor dos mundos \u2014 o Senhor de Musa e Harun!" Firaun, enfurecido, ameaca cortar-lhes maos e pes em lados opostos e crucifica-los em troncos de palmeira. Os magicos respondem: "Nao ha mal. Ao nosso Senhor retornaremos." Os homens que vieram para derrotar Musa foram convertidos pela verdade que viram.

As pragas vieram. O mar se abriu. Os filhos de Israel passaram. E quando Firaun entrou no mar e as aguas comecaram a fecha-lo, gritou: "Creio que nao ha deus senao Aquele em quem creem os filhos de Israel, e sou dos que se submetem!" E Deus respondeu: "Agora? Quando antes desobedeceste e eras dos corruptores? Hoje salvaremos teu corpo para que sejas sinal para os que vierem depois de ti." O corpo de Firaun seria preservado como aviso. Arqueologos hoje exibem muitas mumias no Museu do Cairo.

No monte, Musa pediu para ver Deus. "Senhor meu, mostra-Te a mim para que eu Te veja." Deus disse: "Nao Me veras. Mas olha para o monte: se permanecer em seu lugar, Me veras." Quando Deus se manifestou ao monte, o monte se desintegrou. Musa caiu desmaiado. Quando voltou a si, disse: "Gloria a Ti! Volto-me a Ti arrependido, e sou o primeiro dos crentes."`,
    insights: [
      'Musa e mencionado 136 vezes no Alcorao \u2014 mais do que qualquer outro profeta, incluindo Muhammad (mencionado 4 vezes por nome). Sua historia aparece em mais de 30 suratas. Nenhum outro personagem recebe tanta atencao narrativa no livro.',
      'Os magicos de Firaun se convertem instantaneamente apos verem o milagre de Musa \u2014 uma cena exclusiva do Alcorao. Os homens que vieram para derrotar a mensagem se tornam seus primeiros martires, aceitando a morte sem hesitar.',
      'Na Biblia, Deus "endurece o coracao do farao." No Alcorao, Firaun endurece seu proprio coracao \u2014 a responsabilidade e dele. E no ultimo momento, quando o mar o engole, tenta se converter. Deus responde: "Agora? Quando antes desobedeceste?" A conversao por desespero nao e aceita.',
      'Musa pede para ver Deus no monte Sinai. Deus diz "nao Me veras" e se manifesta ao monte, que se desintegra. Musa desmaia. Na Biblia, Deus mostra "Suas costas" a Moises (Exodo 33:23). As duas tradicoes concordam: ver Deus diretamente esta alem da capacidade humana.',
      'O Alcorao diz que o corpo de Firaun seria preservado "como sinal para os que vieram depois." Mil e trezentos anos depois da revelacao do Alcorao, corpos de faraos foram encontrados preservados no Egito. Coincidencia ou profecia?',
    ],
    keyMoment: {
      quote: '\u201CNao temas. Tu es o superior.\u201D',
      ref: 'Ta-Ha 20:68',
      note: 'Deus fala diretamente a Musa no momento de maior medo \u2014 diante dos magicos de Firaun, com o destino de um povo inteiro dependendo do proximo gesto. Tres palavras. O peso de uma nacao.',
    },
    nextSlug: 'dawud',
    nextName: 'Davi',
  },
  {
    slug: 'dawud',
    name: 'Davi',
    arabicName: '\u062F\u0627\u0648\u062F',
    episode: 10,
    title: 'O Rei Profeta',
    status: 'available',
    hook: 'Pastor de ovelhas que matou um gigante com uma pedra. Recebeu os Salmos. No trono, pecou. Mas as montanhas e os passaros cantavam com ele.',
    bibleRef: '1 Samuel 16 – 2 Samuel 24',
    quranRef: 'Sad 38:17–26 / Al-Baqara 2:251',
    insight: 'A Biblia detalha o pecado de Davi com Betseba e o assassinato de Urias. O Alcorao alude a um teste com dois disputantes — mas nunca menciona adulterio ou assassinato. Duas versoes do mesmo rei.',
    bibleText: `Davi entrou na historia como o menor dos filhos de Jesse. Quando o profeta Samuel foi a Belem para ungir o proximo rei de Israel, Jesse apresentou seus filhos — um a um, do maior ao menor. Samuel viu Eliabe, alto e forte, e pensou: "Certamente e este." Deus disse: "Nao olhes para a aparencia nem para a altura. O Senhor nao ve como o homem ve. O homem ve o exterior, mas o Senhor ve o coracao." Sete filhos passaram. Nenhum foi escolhido. "Ha mais algum?" Jesse hesitou: "Ainda falta o menor, que esta apascentando as ovelhas." Chamaram Davi. "Levanta-te e unge-o, porque este e." O pastor de ovelhas foi ungido rei de Israel enquanto Saul ainda ocupava o trono.

O momento que definiu Davi perante o mundo veio no vale de Ela. O exercito filisteu tinha um campiao: Golias, um gigante de quase tres metros, coberto de armadura de bronze, carregando uma lanca cuja ponta pesava sete quilos. Durante quarenta dias, Golias saiu e desafiou Israel: "Escolhei um homem para lutar comigo. Se ele me vencer, seremos vossos servos." Ninguem ousou. Davi, que levava comida aos irmaos, ouviu o desafio e disse: "Quem e esse filisteu incircunciso para desafiar os exercitos do Deus vivo?"

Saul tentou vestir Davi com sua propria armadura. Davi nao conseguiu se mover — nao estava acostumado. Tirou tudo. Pegou cinco pedras lisas do riacho e sua funda de pastor. Golias olhou para aquele jovem e zombou: "Sou eu algum cao para vires a mim com paus?" Davi respondeu: "Tu vens a mim com espada, lanca e escudo. Eu vou a ti em nome do Senhor dos Exercitos." Girou a funda. A pedra atingiu a testa de Golias. O gigante caiu de face na terra. Davi correu, tomou a espada de Golias e cortou-lhe a cabeca. O exercito filisteu fugiu.

Davi subiu ao poder lentamente — primeiro como musico que acalmava os demonios de Saul com sua harpa, depois como guerreiro, depois como fugitivo perseguido pelo proprio rei, e finalmente como rei de todo Israel. Unificou as tribos. Conquistou Jerusalem. Trouxe a arca da alianca. E recebeu os Salmos — Tehillim — 150 poemas e cancoes que se tornaram o livro de oracoes mais usado da historia humana.

Mas a Biblia nao poupa Davi de sua maior queda. Uma tarde, andando no terraço do palacio, viu Betseba tomando banho. Mandou busca-la. Deitou-se com ela. Ela engravidou. Seu marido, Urias, era soldado na linha de frente. Davi o chamou de volta, esperando que dormisse com a esposa e acobertasse a gravidez. Urias, leal demais, recusou dormir em casa enquanto seus companheiros estavam na guerra. Davi, encurralado, escreveu uma carta ao comandante: "Ponham Urias na frente da batalha mais acirrada e retirem-se dele, para que seja ferido e morra." Urias carregou a propria sentenca de morte sem saber. E morreu.

O profeta Nata veio a Davi com uma parabola: "Havia dois homens numa cidade — um rico e outro pobre. O pobre tinha uma unica cordeirinha que criava como filha. Veio um viajante ao rico, que nao quis tomar de suas ovelhas, e tomou a cordeirinha do pobre." Davi se enfureceu: "Tao certo como vive o Senhor, o homem que fez isso merece a morte!" Nata disse: "Tu es esse homem." A sentença saiu da boca de Davi antes que ele soubesse que era sobre si mesmo. O filho nascido de Betseba morreu. A espada nunca mais saiu da casa de Davi.`,
    quranText: `Dawud no Alcorao e rei, profeta e adorador — mas sua historia e contada com enfase completamente diferente da Biblia. Nao ha Golias em detalhe, nao ha Betseba, nao ha assassinato de Urias. O Dawud coranico e o homem a quem Deus deu o Zabur (Salmos), a quem o ferro foi feito maleavel, e com quem montanhas e passaros cantavam louvores.

Em Al-Baqara 2:251, o confronto com Golias (Jalut no Alcorao) e mencionado brevemente: "E Dawud matou Jalut, e Deus lhe deu o reinado e a sabedoria, e lhe ensinou o que quis." O foco nao esta na batalha — esta no que veio depois. Deus nao celebra a violencia; celebra o reino e o conhecimento que resultaram dela.

O que o Alcorao detalha e extraordinario. Em Saba 34:10: "E concedemos a Dawud uma graca Nossa: 'O montanhas, celebrai com ele! E vos, passaros!'" E em Sad 38:18: "Submetemos as montanhas com ele — glorificavam ao entardecer e ao nascer do sol. E os passaros reunidos — todos voltavam-se para ele." Imagine isso. Um rei que cantava louvores a Deus, e as montanhas ecoavam. Os passaros se juntavam em coro. A natureza inteira participava da adoracao de Dawud. Nenhum outro profeta recebe esse tipo de descricao.

E o ferro. "E amolecemos para ele o ferro: 'Faze cotas de malha e calcula as medidas.'" (Saba 34:10-11). Deus nao deu a Dawud ferro trabalhado — deu-lhe a capacidade de moldar ferro com as maos, como se fosse argila. A tradicao islamica entende isso literalmente: o ferro se tornava maleavel ao toque de Dawud. Profeta, rei e artesao.

Mas Dawud tambem foi testado. Em Sad 38:21-25, dois disputantes pularam o muro do mihrabe (santuario) de Dawud. Um disse: "Este meu irmao tem noventa e nove ovelhas e eu tenho apenas uma, e ele disse: 'Confia-a a mim' — e me superou no argumento." Dawud julgou imediatamente: "Ele te fez injustica ao pedir tua ovelha para junta-la as dele. Muitos socios cometem injustica entre si, exceto os que creem e praticam o bem — e sao poucos."

E entao, Dawud percebeu algo. "E Dawud concluiu que Nos o haviamos testado. Pediu perdao ao seu Senhor e caiu prostrado e se arrependeu." O que exatamente Dawud percebeu? O Alcorao nao diz. A tradicao islamica interpreta de varias formas — mas nunca como adulterio e assassinato. Alguns dizem que o teste foi julgar apressadamente, ouvindo so um lado. Outros, que a parabola espelhou uma situacao pessoal. O que o Alcorao faz e proteger a honra do profeta: qualquer que tenha sido o erro, foi seguido de arrependimento imediato e perdao divino. "E perdoamos aquilo. Ele tem proximidade Conosco e belo retorno."

O Alcorao apresenta Dawud como khalifa — representante de Deus na terra: "O Dawud, fizemos de ti um khalifa na terra. Julga entre as pessoas com a verdade e nao sigas o desejo, para que nao te desvie do caminho de Deus." (Sad 38:26). Dawud nao e apenas rei — e juiz divino. E a responsabilidade que vem com isso e imensa.`,
    insights: [
      'A Biblia dedica capitulos inteiros ao pecado de Davi com Betseba e ao assassinato de Urias (2 Samuel 11-12). O Alcorao nunca menciona nenhum dos dois. A parabola dos disputantes em Sad 38 alude a um teste, mas a natureza exata e deixada vaga. O Islam protege a honra dos profetas de forma mais rigorosa.',
      'Montanhas e passaros cantando com Dawud e uma imagem exclusivamente coranica. "O montanhas, celebrai com ele! E vos, passaros!" (Saba 34:10). A adoracao de Dawud nao era solitaria — a propria natureza participava. Nenhum outro profeta em nenhuma escritura recebe essa descricao.',
      'O ferro se tornava maleavel nas maos de Dawud (Saba 34:10). No Alcorao, isso nao e metafora — e milagre. Dawud era profeta, rei, cantor e metalurgico. Suas cotas de malha (armaduras) sao mencionadas como invencao divina.',
      'Dawud recebeu o Zabur (Salmos) — um dos quatro livros revelados no Islam, ao lado da Tawrat (Tora), o Injil (Evangelho) e o Alcorao. Os Salmos sao reconhecidos como palavra de Deus em ambas as tradicoes.',
      'O titulo "khalifa na terra" dado a Dawud (Sad 38:26) e o mesmo titulo dado a Adao (Al-Baqarah 2:30). Dawud e o segundo ser humano a receber explicitamente esse titulo no Alcorao — representante de Deus com autoridade para julgar.',
    ],
    keyMoment: {
      quote: '\u201CO montanhas, celebrai com ele! E vos, passaros!\u201D',
      ref: 'Saba 34:10',
      note: 'Deus ordena a propria natureza que cante com Dawud. Montanhas ecoando. Passaros se reunindo em coro. Um homem cuja adoracao era tao profunda que a criacao se juntava a ele. A cena mais poetica do Alcorao sobre qualquer profeta.',
    },
    nextSlug: 'suleiman',
    nextName: 'Salomao',
  },
  {
    slug: 'suleiman',
    name: 'Salomao',
    arabicName: '\u0633\u0644\u064A\u0645\u0627\u0646',
    episode: 11,
    title: 'O Rei que Entendia Formigas',
    status: 'available',
    hook: 'Comandava ventos, entendia a linguagem dos animais, os jinns construiam para ele. E sorriu ao ouvir uma formiga avisando as outras sobre seu exercito.',
    bibleRef: '1 Reis 3–11',
    quranRef: 'An-Naml 27:16–44 / Sad 38:30–40',
    insight: 'A Biblia diz que Salomao caiu na idolatria no final da vida. O Alcorao rejeita isso categoricamente — Suleiman nunca descreru. "Suleiman nao foi descrente."',
    bibleText: `Salomao era filho de Davi e Betseba — o fruto daquela uniao que comecou em pecado. Quando Davi morreu, Salomao assumiu o trono de Israel. E Deus apareceu a ele num sonho em Gibeao: "Pede-me o que queres que eu te de." Salomao nao pediu riqueza. Nao pediu vida longa. Nao pediu a morte dos inimigos. Pediu sabedoria: "Da ao teu servo um coracao compreensivo para julgar o teu povo, para que eu possa discernir entre o bem e o mal." Deus se agradou. "Porque pediste isto e nao pediste longa vida nem riquezas, eis que te dei um coracao sabio e inteligente, de modo que antes de ti nao houve igual, nem depois se levantara semelhante."

A sabedoria de Salomao se tornou lendaria. O episodio mais famoso: duas mulheres vieram com um bebe vivo e um morto. Cada uma dizia que o vivo era seu. Salomao pediu uma espada: "Dividam a crianca viva em duas e deem metade a cada uma." Uma mulher concordou. A outra gritou: "Nao! Dai-lhe a crianca viva! Nao a mateis!" Salomao soube: a verdadeira mae preferia perder o filho a ve-lo morto. "Dai a esta o filho vivo. Ela e a mae."

Salomao construiu o Templo de Jerusalem — o sonho de Davi que o filho realizou. Sete anos de construcao. Cedros do Libano. Ouro puro revestindo o interior. O Santo dos Santos, onde repousava a arca da alianca. Quando o templo foi concluido, a gloria do Senhor encheu a casa — uma nuvem tao densa que os sacerdotes nao podiam ministrar. Salomao orou: "Os ceus dos ceus nao te podem conter, quanto menos esta casa que edifiquei."

A rainha de Saba ouviu falar da sabedoria de Salomao e veio testa-lo com perguntas dificeis. Trouxe uma comitiva imensa — ouro, especiarias, pedras preciosas. Fez suas perguntas. Salomao respondeu todas. "Nao houve nada escondido ao rei que nao pudesse explicar-lhe." A rainha ficou sem folego: "Na verdade, nao me contaram nem a metade. Tua sabedoria e prosperidade excedem a fama que eu ouvira."

Mas o final de Salomao na Biblia e tragico. "Amou muitas mulheres estrangeiras" — setecentas esposas e trezentas concubinas. "E suas mulheres lhe perverteram o coracao." Na velhice, Salomao seguiu Astarte, deusa dos sidonios, e Milcom, abominacao dos amonitas. "Fez Salomao o que era mau aos olhos do Senhor." Deus se irou: "Visto que isto se deu em ti, e nao guardaste a minha alianca, rasgarei o reino de ti e o darei ao teu servo." O homem mais sabio da historia terminou como idolatra. O templo que construiu para Deus coexistiu com altares para deuses falsos. A Biblia, mais uma vez, nao poupa seus herois.`,
    quranText: `Suleiman no Alcorao e um dos profetas mais extraordinarios — e sua historia e radicalmente diferente do final biblico. O Alcorao nao apenas omite a idolatria de Salomao: rejeita-a explicitamente. "E seguiram o que os demonios recitavam no reinado de Suleiman. E Suleiman nao foi descrente." (Al-Baqarah 2:102). Uma defesa direta e inequivoca.

O Suleiman coranico recebeu poderes que nenhum outro ser humano recebeu. Em An-Naml 27:16: "E Suleiman herdou de Dawud e disse: 'O humanidade, fomos ensinados a linguagem dos passaros, e nos foi dado de todas as coisas.'" Suleiman entendia a linguagem dos animais. Comunicava-se com passaros. E tinha dominio sobre os jinns — seres de fogo que, por ordem de Deus, serviam como trabalhadores, construtores e mergulhadores.

A cena mais encantadora de todo o Alcorao acontece durante uma marcha do exercito de Suleiman. Passaram por um vale de formigas. Uma formiga disse: "O formigas! Entrai em vossas moradas, para que Suleiman e seus exercitos nao vos esmaguem sem perceber." E Suleiman sorriu, divertido com suas palavras, e disse: "Senhor meu, inspira-me a ser grato pelas Tuas gracas com que me agraciaste, e a meus pais, e a praticar o bem que Te agrada." Um rei com exercitos de humanos, jinns e passaros — e para ao ouvir uma formiga. Nao a esmaga. Sorri. E reza.

A historia da Rainha de Saba (Bilqis na tradicao islamica) e narrada com detalhes extraordinarios no Alcorao. A poupa (passaro chamado hudhud) trouxe a noticia a Suleiman: "Encontrei uma mulher que reina sobre eles e lhe foi dado de tudo, e ela possui um grande trono. Encontrei-a e seu povo prostrando-se ao sol em vez de Deus." Suleiman enviou uma carta: "Nao sejais arrogantes comigo e vinde a mim em submissao."

Bilqis consultou seus conselheiros. Enviou presentes. Suleiman rejeitou: "O que Deus me deu e melhor do que o que vos deu." Quando Bilqis decidiu ir pessoalmente, Suleiman perguntou a seus servos: "Quem me trara o trono dela antes que cheguem?" Um ifrit dos jinns disse: "Eu o trarei antes que te levantes do teu assento." Mas alguem que tinha "conhecimento do Livro" disse: "Eu o trarei antes que teu olhar retorne a ti." E num piscar de olhos, o trono apareceu. Suleiman disse: "Isto e da graca do meu Senhor, para testar-me se sou grato ou ingrato."

Quando Bilqis chegou e viu o que Suleiman possuia — e o chao do palacio, feito de cristal tao transparente que ela pensou que era agua e levantou a saia — ela se rendeu. "Senhor meu, fui injusta comigo mesma. E me submeto, com Suleiman, ao Senhor dos mundos." A Rainha de Saba nao se submeteu a Suleiman — submeteu-se a Deus. Suleiman nunca pediu adoracao para si.

E a morte de Suleiman? O Alcorao narra uma cena unica: Suleiman morreu apoiado em seu cajado, e os jinns continuaram trabalhando sem perceber que ele havia morrido. "Quando decretamos sua morte, nada indicou a eles sua morte senao um verme que roeu seu cajado. E quando caiu, os jinns perceberam que, se soubessem o oculto, nao teriam permanecido no tormento humilhante." (Saba 34:14). Os jinns, que muitos acreditavam ter conhecimento do invisivel, nao conseguiram perceber que o homem que os comandava ja estava morto. O Alcorao usa a cena para destruir a superstição: nem os jinns sabem o oculto.`,
    insights: [
      'A Biblia diz que Salomao caiu na idolatria por influencia de suas esposas estrangeiras (1 Reis 11). O Alcorao rejeita isso explicitamente: "Suleiman nao foi descrente" (Al-Baqarah 2:102). Uma das divergencias mais frontais entre os dois textos.',
      'Suleiman entendia a linguagem dos passaros e dos animais (An-Naml 27:16). Parou um exercito inteiro ao ouvir uma formiga avisando as outras. Um rei com poder absoluto que para por uma formiga — e a imagem mais delicada de poder em qualquer escritura.',
      'Os jinns serviam Suleiman por ordem de Deus — construiam palacios, faziam esculturas, mergulhavam nos mares. Quando Suleiman morreu apoiado no cajado, os jinns so perceberam quando um verme roeu a madeira e ele caiu. Prova coranica de que jinns nao conhecem o oculto.',
      'A Rainha de Saba (Bilqis) nao se submete a Suleiman — submete-se a Deus. "Submeto-me, com Suleiman, ao Senhor dos mundos" (An-Naml 27:44). O poder nao e o destino; o destino e a submissao ao que esta alem do poder.',
      'O chao de cristal que Bilqis confundiu com agua revela o tema central: as aparencias enganam. Quem adorava o sol achou que cristal era agua. A realidade e diferente do que parece — e so a revelacao corrige a percepcao.',
    ],
    keyMoment: {
      quote: '\u201CO formigas! Entrai em vossas moradas, para que Suleiman e seus exercitos nao vos esmaguem sem perceber.\u201D',
      ref: 'An-Naml 27:18',
      note: 'Uma formiga falando. Um rei ouvindo. Um exercito de humanos, jinns e passaros parando. Suleiman sorriu. Nao por arrogancia — por gratidao. O poder mais absoluto ja concedido a um ser humano, e a reacao diante de uma formiga e um sorriso e uma oracao.',
    },
    nextSlug: 'ilyas',
    nextName: 'Elias',
  },
  {
    slug: 'ilyas',
    name: 'Elias',
    arabicName: '\u0625\u0644\u064A\u0627\u0633',
    episode: 12,
    title: '1 Contra 450',
    status: 'available',
    hook: 'Sozinho contra 450 profetas de Baal. Chamou fogo do ceu. Fugiu de uma rainha. E desapareceu num redemoinho de fogo.',
    bibleRef: '1 Reis 17–19',
    quranRef: 'As-Saffat 37:123–132',
    insight: 'Elias nunca morreu na Biblia — foi levado num carro de fogo. No Alcorao, Ilyas e louvado como "dos enviados" e sua mensagem contra Baal e confirmada.',
    bibleText: `Elias apareceu como um raio. Sem genealogia detalhada, sem introducao suave. "Elias, o tesbita, dos moradores de Gileade, disse a Acabe: Tao certo como vive o Senhor, o Deus de Israel, perante cuja face estou, nao havera nem orvalho nem chuva nestes anos, segundo a minha palavra." E desapareceu. A seca comecou. Tres anos e meio sem chuva em Israel.

Deus enviou Elias ao riacho de Querite. Corvos traziam pao e carne de manha e de tarde. Quando o riacho secou, Deus o mandou a Sarepta, a uma viuva. A mulher estava juntando dois gravetos para fazer a ultima refeicao — para ela e o filho — e depois morrer. Elias disse: "Faze-me primeiro um pequeno bolo." A mulher obedeceu. E a farinha nao acabou. O azeite nao faltou. Ate o dia em que a chuva voltou, a jarra nao esvaziou.

Mas o momento supremo de Elias foi no monte Carmelo. Acabe, rei de Israel, havia se casado com Jezebel, princesa fenícia, e ela trouxe o culto a Baal para Israel. Elias convocou o confronto mais dramatico do Antigo Testamento: ele sozinho contra 450 profetas de Baal. "Ate quando coxeareis entre dois pensamentos? Se o Senhor e Deus, segui-o. Se Baal, segui-o." Silencio.

Dois altares foram preparados. Dois touros sacrificados. Nenhum fogo colocado. "O deus que responder por fogo, esse e Deus." Os profetas de Baal clamaram da manha ao meio-dia: "O Baal, responde-nos!" Nada. Saltavam ao redor do altar. Cortavam-se com facas e lancetas ate o sangue correr. Elias zombou: "Clamai em alta voz, porque e deus! Quem sabe esta meditando, ou viajando, ou dormindo e precisa ser acordado." Nada.

Quando chegou a hora da oferta da tarde, Elias reparou o altar do Senhor. Pos a lenha. Pos o touro. E entao fez algo extraordinario: mandou despejar doze barris de agua sobre tudo — o sacrificio, a lenha, encheu ate a vala ao redor. Tudo encharcado. E orou: "O Senhor, Deus de Abraao, de Isaque e de Israel, fique hoje sabido que Tu es Deus em Israel." Fogo caiu do ceu. Consumiu o holocausto, a lenha, as pedras, o po e a agua. O povo prostrou-se: "O Senhor e Deus! O Senhor e Deus!"

Mas Jezebel jurou matar Elias. E o profeta que acabara de chamar fogo do ceu fugiu. Correu para o deserto. Sentou debaixo de um zimbro e pediu a morte: "Basta, Senhor! Toma a minha vida." Um anjo trouxe pao e agua. Elias comeu. Caminhou quarenta dias ate o monte Horebe — o mesmo monte de Moises. Deus perguntou: "Que fazes aqui, Elias?" Elias derramou sua solidao: "Tenho sido zeloso pelo Senhor. Os filhos de Israel abandonaram a alianca. Eu fiquei sozinho. E buscam a minha vida."

Deus nao veio no terremoto. Nao veio no vento forte. Nao veio no fogo. Veio num "sussurro suave." Depois do drama cosmico do Carmelo, Deus se revelou no silencio.

Elias nunca morreu. Um carro de fogo com cavalos de fogo apareceu, e Elias subiu ao ceu num redemoinho. Seu discipulo Eliseu viu e gritou: "Meu pai! Meu pai! Carros e cavaleiros de Israel!" E nunca mais o viu. Mas Malaquias profetizou: "Eis que eu vos enviarei o profeta Elias antes que venha o grande e terrivel dia do Senhor." Na tradicao crista, Joao Batista cumpriu esse papel. Na tradicao judaica, Elias ainda e esperado — e uma cadeira vazia e reservada para ele em todo Seder de Pessach.`,
    quranText: `Ilyas no Alcorao aparece em poucos versos, mas sua mensagem e confirmada com clareza e honra. Em As-Saffat 37:123-132: "E Ilyas foi, certamente, dos enviados. Quando disse ao seu povo: 'Nao temereis a Deus? Invocais Baal e abandonais o Melhor dos Criadores? Deus, vosso Senhor e Senhor de vossos antepassados?' Desmentiram-no, e por isso serao trazidos ao castigo — exceto os servos purificados de Deus. E deixamos para ele entre as geracoes posteriores: 'Paz sobre Ilyas!' Assim recompensamos os benfeitores. Ele e dos Nossos servos crentes."

A mensagem e direta: Ilyas confrontou seu povo por adorar Baal. Eles o rejeitaram. Deus o honrou. "Paz sobre Ilyas" — um cumprimento divino reservado para poucos profetas no Alcorao.

Em Al-Anaam 6:85, Ilyas e listado entre os profetas guiados: "E Zakariyya, e Yahya, e Issa, e Ilyas — todos dos justos." Ele aparece ao lado de profetas de enorme estatura espiritual. A brevidade nao diminui — eleva.

A tradicao islamica expande o que o Alcorao resume. Os comentaristas (mufassirun) reconhecem a confrontacao com os adoradores de Baal, a solidao profetica, a coragem de desafiar o poder politico aliado a idolatria. Ilyas e visto como exemplo do profeta que enfrenta o sistema inteiro — rei, sacerdotes, povo — sem ceder.

O Alcorao nao menciona o carro de fogo, a ascensao ao ceu ou a promessa de retorno de Ilyas. Na Biblia, esses elementos fazem de Elias uma figura quase sobrenatural — o profeta que nao morreu e que retornara. No Islam, Ilyas e profeta, enviado, servo de Deus — honrado, mas sem a mitologia de imortalidade que a Biblia construiu ao redor dele.

Ha uma leitura interessante entre alguns estudiosos islamicos que conectam Ilyas a Al-Khidr — o sabio misterioso que Musa encontrou na Surata Al-Kahf. Alguns identificam Al-Khidr como sendo o proprio Ilyas sob outro nome, ainda vivo, viajando pela terra. Essa identificacao nao e consensual, mas mostra que a figura de Elias/Ilyas exerce fascinacao em ambas as tradicoes — um profeta que transcende as categorias normais.`,
    insights: [
      'O confronto no monte Carmelo — 1 contra 450 — e uma das cenas mais cinematograficas da Biblia. Elias sozinho contra os profetas de Baal, com Israel inteiro assistindo. Fogo do ceu consumiu sacrificio encharcado de agua. O Alcorao confirma a mensagem de Ilyas contra Baal, mas nao narra a cena do Carmelo.',
      'Elias nunca morreu na Biblia — foi levado num carro de fogo (2 Reis 2:11). E o unico profeta, alem de Enoque, de quem se diz que nao morreu. O Alcorao nao menciona essa ascensão. No Islam, todos os profetas morrem — exceto Issa, que foi elevado.',
      '"Paz sobre Ilyas" (As-Saffat 37:130) e um cumprimento divino direto. No Alcorao, essa formula aparece para Nuh, Ibrahim, Musa, Harun e Ilyas. E um selo de aprovacao divina reservado para poucos.',
      'Apos chamar fogo do ceu, Elias fugiu de Jezebel e pediu para morrer. A Biblia mostra que coragem profetica e vulnerabilidade humana coexistem no mesmo homem. O profeta que desafiou 450 precisou de um anjo trazendo pao no deserto.',
      'Alguns estudiosos islamicos identificam Ilyas com Al-Khidr — o sabio misterioso de Al-Kahf 18. Se verdade, Ilyas seria o unico profeta alem de Issa que ainda esta vivo. A conexao nao e consensual, mas a fascinacao por Elias/Ilyas como figura que transcende a morte existe em ambas as tradicoes.',
    ],
    keyMoment: {
      quote: '\u201CInvocais Baal e abandonais o Melhor dos Criadores?\u201D',
      ref: 'As-Saffat 37:125',
      note: 'A pergunta de Ilyas ao seu povo, preservada no Alcorao. A mesma confrontacao que na Biblia envolveu fogo, agua e 450 profetas falsos. O Alcorao reduz tudo a uma pergunta. E as vezes, a pergunta certa e mais poderosa que o fogo do ceu.',
    },
    nextSlug: 'alyasa',
    nextName: 'Eliseu',
  },
  {
    slug: 'alyasa',
    name: 'Eliseu',
    arabicName: '\u0627\u0644\u064A\u0633\u0639',
    episode: 13,
    title: 'O Herdeiro do Manto',
    status: 'available',
    hook: 'Recebeu o manto de Elias e o dobro de seu espirito. Curou aguas, multiplicou azeite, ressuscitou mortos. O profeta silencioso que fez barulho.',
    bibleRef: '2 Reis 2–13',
    quranRef: 'Sad 38:48 / Al-An\'am 6:86',
    insight: 'Alyasa e mencionado apenas duas vezes no Alcorao — entre "os escolhidos, os excelentes." A brevidade e a honra. Nem todo profeta precisa de uma surata inteira para ser grande.',
    bibleText: `Eliseu apareceu pela primeira vez arando um campo com doze juntas de bois. Elias passou por ele e lancou seu manto sobre seus ombros. Eliseu entendeu imediatamente: estava sendo chamado. "Deixa-me beijar meu pai e minha mae, e entao te seguirei." Elias respondeu: "Vai, volta, pois que te fiz eu?" Eliseu voltou, matou os bois, cozinhou a carne com a lenha do arado, deu ao povo — e seguiu Elias. Queimou os instrumentos do oficio antigo. Nao havia retorno.

Quando chegou o momento de Elias ser levado, Eliseu recusou se separar dele. "Tao certo como vive o Senhor e vive a tua alma, nao te deixarei." Atravessaram o Jordao juntos — Elias bateu nas aguas com o manto e elas se abriram. Elias perguntou: "Pede-me o que queres que eu te faca antes que seja tomado de ti." Eliseu nao hesitou: "Peco-te que haja sobre mim dobrada porcao do teu espirito." O dobro. Nao queria ser igual a Elias — queria mais. Elias disse: "Dura coisa pediste. Se me vires quando for tomado, assim te sera." O carro de fogo veio. Eliseu viu. O manto de Elias caiu. Eliseu o apanhou. Bateu nas aguas do Jordao: "Onde esta o Senhor, o Deus de Elias?" As aguas se abriram. A transferencia de autoridade profetica estava completa.

Eliseu realizou mais milagres que Elias. Curou as aguas de Jerico lancando sal numa fonte. Multiplicou o azeite de uma viuva ate que todos os vasos estivessem cheios — e ela vendeu o azeite para pagar suas dividas. Quando uma mulher sunamita que o hospedava perdeu o filho, Eliseu subiu ao quarto, deitou-se sobre o menino, boca sobre boca, olhos sobre olhos, maos sobre maos — e a crianca espirrou sete vezes e abriu os olhos.

Curou Naama, o comandante sirio, da lepra — mergulhando sete vezes no Jordao. Fez flutuar um machado de ferro que caira no rio. Alimentou cem homens com vinte paes de cevada. E tinha visao sobrenatural: quando o rei da Siria enviou um exercito para captura-lo, Eliseu disse ao servo: "Nao temas, porque mais sao os que estao conosco do que os que estao com eles." E orou: "Senhor, abre-lhe os olhos." O servo viu: o monte estava cheio de cavalos e carros de fogo ao redor de Eliseu.

O mais extraordinario: mesmo morto, Eliseu fez um milagre. Quando um homem foi sepultado apressadamente na cova de Eliseu e tocou os ossos do profeta, reviveu e se pos de pe. A autoridade profetica de Eliseu era tao intensa que seus ossos ainda carregavam poder.`,
    quranText: `Alyasa aparece no Alcorao em apenas dois versos. Dois. E em ambos, esta cercado por nomes de peso, numa lista que o situa entre os maiores.

Em Al-Anaam 6:86: "E Ismail, e Alyasa, e Yunus, e Lut — e a todos preferimos sobre os mundos." Alyasa e listado entre profetas que Deus preferiu acima de toda a humanidade. Nao ha narrativa. Nao ha historia. Ha posicionamento. E o posicionamento e inequivoco: dos escolhidos.

Em Sad 38:48: "E lembra Ismail, e Alyasa, e Dhul-Kifl — e todos sao dos excelentes." Novamente, uma lista. Novamente, cercado por nomes que o Alcorao honra. A palavra usada e "akhyar" — os melhores, os escolhidos, os excelentes.

O Alcorao nao conta a historia de Alyasa recebendo o manto de Ilyas. Nao narra os milagres — a cura de Naama, a multiplicacao do azeite, a ressurreicao do menino. Nada disso aparece no texto coranico. Mas a honra esta preservada: ele e mencionado pelo nome, listado entre profetas, e chamado de excelente.

A tradicao islamica (hadith e tafsir) reconhece Alyasa como sucessor de Ilyas e relata que ele continuou a missao de combater a idolatria entre os filhos de Israel. Alguns comentaristas o identificam como o profeta que manteve a chama monotéista acesa durante um periodo particularmente sombrio da historia de Israel.

A abordagem coranica com Alyasa revela algo importante sobre como o Alcorao funciona: nem todo profeta recebe uma narrativa extensa. Alguns sao mencionados para serem honrados, nao para serem detalhados. A presenca de um nome no Alcorao, mesmo sem historia, e em si mesma um ato de elevacao divina. Deus escolheu menciona-lo. Isso basta.

O contraste com a Biblia e notavel. Em 2 Reis, Eliseu e um personagem riquissimo — cheio de milagres, dialogos, cenas dramaticas. No Alcorao, e duas linhas. Mas nessas duas linhas, ele esta ao lado de Ismail, Yunus e Lut. A economia narrativa do Alcorao nao diminui — concentra. E as vezes, ser chamado de "excelente" por Deus e mais do que qualquer narrativa poderia oferecer.`,
    insights: [
      'Alyasa e mencionado apenas 2 vezes no Alcorao — em Al-Anaam 6:86 e Sad 38:48. Em ambas, esta listado entre profetas que Deus "preferiu sobre os mundos" e chamou de "excelentes." Brevidade maxima, honra maxima.',
      'Na Biblia, Eliseu realiza mais milagres do que Elias — incluindo ressurreicao, cura de lepra, multiplicacao de alimentos e visao sobrenatural. O Alcorao nao narra nenhum desses milagres, mas preserva o nome e o status.',
      'A transferencia do manto de Elias para Eliseu e o modelo biblico de sucessao profetica — o discipulo que pediu "dobrada porcao" do espirito do mestre. O Alcorao nao narra essa cena, mas a tradicao islamica reconhece Alyasa como continuador da missao de Ilyas.',
      'Mesmo morto, os ossos de Eliseu ressuscitaram um homem (2 Reis 13:21). E o unico caso na Biblia de milagre postumo involuntario. A autoridade profetica transcendeu a propria morte.',
    ],
    keyMoment: {
      quote: '\u201CE Ismail, e Alyasa, e Yunus, e Lut — e a todos preferimos sobre os mundos.\u201D',
      ref: 'Al-Anaam 6:86',
      note: 'Sem historia. Sem narrativa. Sem milagres descritos. Apenas um nome numa lista divina. E a lista diz: "preferimos sobre os mundos." As vezes, o certificado de excelencia nao precisa de curriculo. Deus o conhece. E basta.',
    },
    nextSlug: 'yunus',
    nextName: 'Jonas',
  },
  {
    slug: 'yunus',
    name: 'Jonas',
    arabicName: '\u064A\u0648\u0646\u0633',
    episode: 14,
    title: 'O Profeta que Fugiu',
    status: 'available',
    hook: 'O unico profeta que abandonou a missao. Engolido por uma baleia. Rezou no escuro. E a cidade que ele achava que Deus destruiria foi a unica que se arrependeu.',
    bibleRef: 'Jonas 1–4',
    quranRef: 'Yunus 10 / As-Saffat 37:139–148',
    insight: 'Yunus e chamado no Alcorao de Dhun-Nun — "o do peixe." Sua suplica no ventre da baleia se tornou uma das oracoes mais repetidas no Islam.',
    bibleText: `O livro de Jonas e o mais estranho dos profetas menores. Nao e uma colecao de oraculos ou sermoes. E uma historia — e uma historia sobre um profeta que fez tudo errado.

Deus disse a Jonas: "Levanta-te, vai a grande cidade de Ninive e clama contra ela, porque a sua maldade subiu ate mim." Ninive era a capital do imperio assirio — os mesmos que destruiriam o reino de Israel. O inimigo mortal. Jonas nao queria que Ninive se arrependesse. Queria que fosse destruida. Entao fugiu. Na direcao oposta. Foi ao porto de Jope e embarcou num navio para Tarsis — o extremo ocidental do mundo conhecido. Fugindo de Deus.

Uma tempestade violenta caiu sobre o mar. Os marinheiros, cada um de uma religiao diferente, clamaram cada qual ao seu deus. Lancaram a carga ao mar para aliviar o navio. E Jonas? Dormia no porao. O capitao desceu: "Que fazes tu, dorminhoco? Levanta-te, clama ao teu Deus!" Lancaram sortes para saber quem causava o mal. A sorte caiu sobre Jonas. "Que te fizemos? De onde vens? De que povo es?" Jonas confessou: "Sou hebreu e temo ao Senhor, o Deus do ceu, que fez o mar e a terra." E disse: "Tomai-me e lancai-me ao mar, e o mar se acalmara." Os marinheiros tentaram remar para terra. Nao conseguiram. Pediram perdao a Deus e lancaram Jonas. O mar parou.

Deus preparou um grande peixe. O peixe engoliu Jonas. Tres dias e tres noites no ventre do peixe. Jonas orou: "Na minha angustia, clamei ao Senhor e Ele me respondeu. Do ventre do Sheol gritei, e Tu ouviste a minha voz." O peixe vomitou Jonas em terra seca.

Deus repetiu: "Vai a Ninive." Desta vez, Jonas foi. Caminhou um dia pela cidade e pregou a mensagem mais curta de qualquer profeta: "Ainda quarenta dias, e Ninive sera subvertida." Cinco palavras em hebraico. E aconteceu o impensavel: Ninive se arrependeu. Do rei ao menor habitante. O rei desceu do trono, vestiu saco e sentou-se na cinza. Publicou um decreto: "Nem homens, nem animais comam ou bebam. Cubram-se de saco e clamem fortemente a Deus. Quem sabe Deus se voltara e desistira do mal que disse." E Deus desistiu.

Jonas ficou furioso. Saiu da cidade. Sentou-se. E reclamou a Deus: "Nao foi isso que eu disse quando estava na minha terra? Por isso fugi para Tarsis, pois sabia que es Deus gracioso e misericordioso, tardio em irar-Te e grande em bondade, e que Te arrependes do mal." Jonas esta literalmente bravo com Deus por ser misericordioso. Pediu a morte: "Melhor me e morrer do que viver."

Deus fez crescer uma planta que deu sombra a Jonas. Jonas se alegrou. No dia seguinte, um verme comeu a planta. Jonas ficou furioso de novo. Deus perguntou: "Tens tu razao de te iras por causa da planta?" Jonas: "Tenho razao ate a morte." E Deus disse a frase que encerra o livro: "Tu tens compaixao da planta pela qual nao trabalhaste nem fizeste crescer. E Eu nao teria compaixao de Ninive, a grande cidade, na qual ha mais de cento e vinte mil pessoas que nao sabem distinguir a mao direita da esquerda?" O livro termina com uma pergunta. Sem resposta. O leitor e Jonas — e a pergunta e para ele.`,
    quranText: `Yunus ocupa um lugar unico entre os profetas do Alcorao. Ele e Dhun-Nun — "o do peixe." Uma surata inteira leva seu nome (Surata 10, Yunus), embora nao narre sua historia em detalhe. A narrativa principal esta em As-Saffat 37:139-148 e Al-Anbiya 21:87-88.

"E Dhun-Nun, quando partiu enfurecido e pensou que nao tinhamos poder sobre ele. Entao clamou nas trevas: 'Nao ha deus senao Tu! Gloria a Ti! Eu fui dos injustos.'" (Al-Anbiya 21:87). Yunus "partiu enfurecido" — saiu sem permissao de Deus. "Pensou que nao tinhamos poder sobre ele" — imaginou que podia escapar do decreto divino. No Alcorao, esse e o erro de Yunus: nao a pregacao, nao a missao, mas a saida sem autorizacao.

Em As-Saffat 37:139-148, a historia e contada com mais detalhes: "E Yunus foi, certamente, dos enviados. Quando fugiu para o navio carregado. E tirou sortes e foi dos perdedores. O peixe o engoliu, e ele era censuravel. E se nao fosse dos que glorificam, teria permanecido em seu ventre ate o Dia em que serao ressuscitados."

Esse verso e crucial: "se nao fosse dos que glorificam." Yunus ja era alguem que glorificava Deus antes de ser engolido. Sua oracao no ventre do peixe nao foi motivada apenas pelo desespero — era a continuacao de uma vida de adoracao. E por isso foi ouvida. E por isso foi salvo.

A suplica de Yunus se tornou uma das oracoes mais poderosas do Islam. "La ilaha illa Anta, Subhanaka, inni kuntu min az-zalimin" — "Nao ha deus senao Tu, gloria a Ti, eu fui dos injustos." Tres camadas numa unica frase: tawhid (unicidade de Deus), tasbih (glorificacao), e i'tiraf (confissao). O Profeta Muhammad disse que quem recitar essa suplica com sinceridade tera sua dificuldade removida. Nao ha oracao mais completa em menos palavras.

"Entao respondemos a ele e o salvamos da angustia. E assim salvamos os crentes." (Al-Anbiya 21:88). Deus nao salvou apenas Yunus — estabeleceu um principio: "assim salvamos os crentes." A suplica de Yunus nao e exclusiva dele. E disponivel para qualquer pessoa que se encontre em qualquer escuridao — fisica, emocional, espiritual.

E a cidade? O Alcorao faz uma declaracao extraordinaria sobre o povo de Yunus em Yunus 10:98: "Se ao menos houvesse uma cidade que cresse e cuja fe lhe tivesse sido proveitosa! Exceto o povo de Yunus: quando creram, removemos deles o castigo da desonra na vida mundana e os deixamos gozar por um tempo." O povo de Yunus e a unica cidade na historia coranica que se arrependeu a tempo. A unica. Toda outra cidade que rejeitou seus profetas — o povo de Nuh, de Hud, de Salih, de Lut, de Shuayb — foi destruida. So Ninive sobreviveu. O profeta que fugiu tinha a missao mais bem-sucedida de todas.`,
    insights: [
      'Yunus e o unico profeta no Alcorao descrito como tendo abandonado sua missao sem permissao divina. "Partiu enfurecido e pensou que nao tinhamos poder sobre ele" (Al-Anbiya 21:87). Ate profetas erram. E Deus os corrige.',
      'A suplica de Yunus — "La ilaha illa Anta, Subhanaka, inni kuntu min az-zalimin" — e considerada uma das oracoes mais poderosas do Islam. O Profeta Muhammad disse que ninguem recita essa suplica com sinceridade sem ser atendido. Tres camadas: unicidade, glorificacao, confissao.',
      'O Alcorao diz que se Yunus nao fosse "dos que glorificam" (musabbihin), teria ficado no ventre do peixe ate o Dia da Ressurreicao (As-Saffat 37:143-144). A adoracao previa salvou Yunus. A oracao no escuro so funcionou porque ele ja orava na luz.',
      'O povo de Yunus e a UNICA cidade no Alcorao que se arrependeu e foi salva (Yunus 10:98). Toda outra cidade que rejeitou profetas foi destruida. O profeta que menos queria pregar teve o maior sucesso.',
      'Na Biblia, Jonas fica furioso porque Deus perdoou Ninive. O livro termina com uma pergunta sem resposta. No Alcorao, o foco nao esta na raiva de Yunus, mas na misericordia de Deus sobre a cidade. Duas enfases: a Biblia questiona a justica humana; o Alcorao celebra a misericordia divina.',
    ],
    keyMoment: {
      quote: '\u201CNao ha deus senao Tu! Gloria a Ti! Eu fui dos injustos.\u201D',
      ref: 'Al-Anbiya 21:87',
      note: 'Tres camadas de escuridao: a noite, o mar, o ventre do peixe. E no ponto mais escuro possivel, a oracao mais luminosa possivel. Yunus nao pediu para sair. Reconheceu quem Deus e, glorificou, confessou. E Deus o tirou de la.',
    },
    nextSlug: 'yahya',
    nextName: 'Joao Batista',
  },
  {
    slug: 'yahya',
    name: 'Joao Batista',
    arabicName: '\u064A\u062D\u064A\u0649',
    episode: 15,
    title: 'O Precursor',
    status: 'available',
    hook: 'Filho de um sacerdote idoso e uma mulher esteril. Nomeado por Deus antes de nascer. Viveu no deserto. Morreu decapitado pela verdade.',
    bibleRef: 'Mateus 3 / Lucas 1',
    quranRef: 'Maryam 19:1–15 / Ali \'Imran 3:38–41',
    insight: 'O Alcorao diz sobre Yahya: "Paz sobre ele no dia em que nasceu, no dia em que morrer, e no dia em que for ressuscitado vivo." A mesma formula que Issa usou para si mesmo. Dois primos, duas missoes, uma saudacao identica.',
    bibleText: `Zacarias era sacerdote da ordem de Abias. Sua esposa, Isabel, era esteril. Ambos eram "justos diante de Deus, vivendo irrepreensivelmente em todos os mandamentos." Mas nao tinham filhos. E ja estavam velhos.

Um dia, quando Zacarias queimava incenso no templo — a honra de uma vida — um anjo apareceu ao lado do altar. Zacarias ficou perturbado. O anjo disse: "Nao temas, Zacarias. Tua oracao foi ouvida. Isabel conceberá um filho, e lhe porás o nome de Joao. Ele ira adiante do Senhor no espirito e poder de Elias, para converter os coracoes dos pais aos filhos e os desobedientes a sabedoria dos justos." Zacarias perguntou: "Como terei certeza disto? Pois sou velho, e minha mulher avancada em idade." O anjo respondeu: "Eu sou Gabriel, que assisto diante de Deus. Ficaras mudo e nao poderás falar ate o dia em que estas coisas acontecam, porque nao creste nas minhas palavras."

Zacarias saiu do templo mudo. O povo percebeu que algo havia acontecido. Isabel concebeu e ficou reclusa cinco meses. No sexto mes, o anjo Gabriel foi a Maria, prima de Isabel, e anunciou que ela tambem conceberia. Maria visitou Isabel. Quando Isabel ouviu a saudacao de Maria, a crianca saltou em seu ventre — Joao reconheceu Jesus antes de ambos nascerem.

Quando Joao nasceu, Zacarias escreveu numa tabuinha: "O nome dele e Joao." E imediatamente recuperou a fala. Profetizou: "E tu, menino, seras chamado profeta do Altissimo, porque iras adiante da face do Senhor para preparar os seus caminhos."

Joao cresceu no deserto. Vestia-se de pelos de camelo com um cinto de couro. Comia gafanhotos e mel silvestre. Pregava no rio Jordao: "Arrependei-vos, porque e chegado o reino dos ceus." Multidoes vinham de Jerusalem e de toda a Judeia. Ele batizava no rio. Quando os fariseus e saduceus vieram, Joao os confrontou: "Raca de viboras! Quem vos ensinou a fugir da ira vindoura? Produzi frutos dignos de arrependimento."

E entao Jesus veio ao Jordao para ser batizado. Joao disse: "Eu e que preciso ser batizado por ti, e tu vens a mim?" Jesus insistiu: "Deixa por agora, pois assim nos convem cumprir toda a justica." Joao o batizou. O ceu se abriu. O Espirito de Deus desceu como pomba. Uma voz disse: "Este e o meu Filho amado."

Joao continuou pregando. Denunciou o rei Herodes Antipas por ter casado com Herodias, esposa de seu irmao Filipe. Herodes prendeu Joao. No aniversario de Herodes, a filha de Herodias dancou diante dos convidados. Herodes, encantado, prometeu dar-lhe o que pedisse. Instrtuida pela mae, a menina pediu: "Da-me aqui num prato a cabeca de Joao Batista." Herodes entristeceu-se, mas havia jurado diante dos convidados. Mandou decapitar Joao na prisao. A cabeca foi trazida num prato e entregue a menina, que a levou a mae. Os discipulos de Joao recolheram o corpo e o sepultaram.

O precursor de Jesus morreu pela verdade — denunciando o pecado de um rei que preferiu cumprir um juramento perverso a fazer justica.`,
    quranText: `No Alcorao, a historia de Yahya comeca com a oracao de seu pai, Zakariyya — e essa oracao e uma das mais emocionantes de toda a escritura islamica.

Zakariyya era idoso. Seus ossos estavam frageis. Seus cabelos branquearam. Sua esposa era esteril. Toda logica humana dizia: nao haverá filho. Mas Zakariyya orou: "Senhor meu, meus ossos se enfraqueceram, minha cabeca se encheu de branco, e nunca fui infeliz em minhas suplicas a Ti, o meu Senhor." (Maryam 19:4). A oracao comeca com vulnerabilidade total — corpo fraco, cabelo branco — e termina com uma declaracao de confianca: "nunca fui infeliz em minhas suplicas a Ti." Nunca pediste e ficaste sem resposta. Nunca.

E Deus respondeu. "O Zakariyya, damos-te a boa nova de um menino cujo nome sera Yahya. Nao demos esse nome a ninguem antes dele." (Maryam 19:7). Deus nomeou Yahya diretamente. Nao foi o pai que escolheu o nome, nao foi a mae, nao foi um anjo. Deus mesmo nomeou. E disse: "nunca demos esse nome a ninguem antes." Yahya e unico ate no nome.

Zakariyya perguntou: "Senhor meu, como terei um menino se minha mulher e esteril e ja alcancei a extrema velhice?" A resposta veio: "Assim sera. Teu Senhor diz: 'E facil para Mim. Eu te criei antes quando nao eras nada.'" Zakariyya pediu um sinal. Deus deu: "Teu sinal sera nao falar as pessoas durante tres noites, estando sao." O mesmo silencio da Biblia — mas no Alcorao, e sinal, nao punicao.

E entao o Alcorao descreve Yahya com uma sequencia de titulos que revelam sua estatura espiritual: "O Yahya, toma o Livro com forca." E lhe demos sabedoria quando ainda era crianca. E compaixao da Nossa parte e pureza. E ele era piedoso. E bondoso com seus pais. E nao era arrogante nem desobediente. Paz sobre ele no dia em que nasceu, no dia em que morrer, e no dia em que for ressuscitado vivo." (Maryam 19:12-15).

Observe: "sabedoria quando ainda era crianca." Yahya recebeu hikma (sabedoria) antes de atingir a maturidade. E a pureza mencionada — zakah — nao e ritual. E pureza de carater, compaixao natural, piedade genuina. Yahya era puro nao por obrigacao, mas por natureza.

E a saudacao final: "Paz sobre ele no dia em que nasceu, no dia em que morrer, e no dia em que for ressuscitado vivo." Esta e exatamente a mesma formula que Issa usou para si mesmo em Maryam 19:33. Dois primos. Duas missoes. Uma saudacao identica, dita com as mesmas palavras, nos mesmos momentos da existencia — nascimento, morte, ressurreicao.

O Alcorao nao narra a decapitacao de Yahya. Nao menciona Herodes, nem Herodias, nem a danca, nem o prato. A tradicao islamica conhece esses eventos atraves de fontes externas e os reconhece como parte da historia de Yahya. Mas o Alcorao escolhe encerrar a narrativa de Yahya com paz — nao com violencia. A ultima palavra sobre Yahya no Alcorao e "salam" — paz. E esse e o selo divino sobre sua vida.

Em Ali Imran 3:39, Deus diz que Yahya sera "confirmador de uma Palavra de Deus, nobre, casto e profeta dentre os justos." A "Palavra de Deus" que Yahya confirma e Issa. Yahya veio para preparar o caminho. Em ambas as tradicoes — crista e islamica — Joao/Yahya e o precursor. O que muda e o que ele precede: no cristianismo, precede o Filho de Deus. No Islam, precede a Palavra de Deus. O titulo e diferente. A reverencia e a mesma.`,
    insights: [
      'A oracao de Zakariyya e uma das mais vulneraveis do Alcorao: "Meus ossos se enfraqueceram, minha cabeca se encheu de branco, e nunca fui infeliz em minhas suplicas a Ti." (Maryam 19:4). Fragilidade fisica + confianca espiritual absoluta.',
      'Deus nomeou Yahya diretamente — "nao demos esse nome a ninguem antes dele" (Maryam 19:7). No Alcorao, apenas Yahya recebe essa distincao. Deus nao apenas concedeu o filho: escolheu o nome pessoalmente.',
      'A saudacao "Paz sobre ele no dia em que nasceu, no dia em que morrer, e no dia em que for ressuscitado vivo" (Maryam 19:15) e dita por Deus sobre Yahya. A mesma formula e dita por Issa sobre si mesmo (Maryam 19:33). Dois primos, uma formula identica.',
      'Yahya e descrito como "confirmador de uma Palavra de Deus" (Ali Imran 3:39). A "Palavra de Deus" e Issa. Yahya veio para validar a missao de Jesus. Em ambas as tradicoes, Joao prepara o caminho — mas o caminho leva a destinos teologicos diferentes.',
      'O Alcorao nao narra a decapitacao de Yahya. A ultima menção e "salam" — paz. A Biblia detalha a danca de Salome, o prato, a cabeca. Duas escolhas narrativas: uma termina com violencia, outra com paz divina.',
    ],
    keyMoment: {
      quote: '\u201CSenhor meu, meus ossos se enfraqueceram, minha cabeca se encheu de branco, e nunca fui infeliz em minhas suplicas a Ti.\u201D',
      ref: 'Maryam 19:4',
      note: 'Um velho de ossos frageis e cabelo branco, de pe diante de Deus, pedindo o impossivel. E lembrando a Deus: nunca me deixaste sem resposta. A coragem de quem ora nao esta na forca do corpo, mas na memoria das oracoes atendidas.',
    },
    nextSlug: 'issa',
    nextName: 'Jesus',
  },
  {
    slug: 'issa',
    name: 'Jesus',
    arabicName: '\u0639\u064A\u0633\u0649',
    episode: 16,
    title: 'A Palavra de Deus',
    status: 'available',
    hook: 'Nasceu sem pai. Falou no berco. Curou cegos. O Alcorao o chama de "Palavra de Deus" e "Espirito de Deus." E diz que ele voltara.',
    bibleRef: 'Mateus 1\u201328 / Lucas 1\u201324 / Joao 1\u201321',
    quranRef: 'Maryam 19 / Al-Imran 3 / An-Nisa 4:157\u2013158',
    insight: 'Jesus e chamado de "Kalimatullah" (Palavra de Deus) e "Ruh min Allah" (Espirito de Deus) no Alcorao \u2014 titulos que nenhum outro profeta recebe. Ele e profundamente honrado. So nao e adorado.',
    bibleText: `Em Nazare, uma cidade insignificante da Galileia, uma jovem chamada Maria recebeu a visita de um anjo. "Alegra-te, agraciada! O Senhor e contigo." Maria ficou perturbada. O anjo disse: "Nao temas, Maria. Conceberás e darás a luz um filho, e lhe porás o nome de Jesus. Sera grande, sera chamado Filho do Altissimo, e o Senhor Deus lhe dara o trono de Davi, seu pai." Maria perguntou: "Como se fara isto, pois nao conheco varao?" O anjo respondeu: "O Espirito Santo vira sobre ti, e o poder do Altissimo te cobrira com sua sombra. Por isso, o que ha de nascer sera chamado Santo, Filho de Deus." E Maria disse: "Eis aqui a serva do Senhor. Faca-se em mim segundo a tua palavra."

Jose, seu noivo, ao descobrir que Maria estava gravida, quis deixa-la secretamente. Mas um anjo apareceu em sonho: "Jose, filho de Davi, nao temas receber Maria. O que nela foi gerado e do Espirito Santo." Em Belem, por causa do censo de Cesar Augusto, num estabulo porque nao havia lugar na estalagem, Jesus nasceu. Pastores vieram adorar. Magos do Oriente seguiram uma estrela. Herodes, ao saber que nascera o "rei dos judeus," mandou matar todos os meninos de Belem com menos de dois anos. Jose fugiu com Maria e o menino para o Egito.

Jesus cresceu em silencio. Apareceu aos doze anos no templo, discutindo com os doutores da lei, que ficaram atonitos com sua compreensao. Depois, mais silencio. Ate os trinta anos. Joao Batista batizou-o no rio Jordao. O ceu se abriu. Uma voz disse: "Este e o meu Filho amado, em quem me comprazo." O Espirito o levou ao deserto por quarenta dias. O diabo o tentou tres vezes. Jesus resistiu com as Escrituras.

Entao comecou o ministerio que mudaria o mundo. Tres anos. Curou cegos, leprosos, paraliticos. Ressuscitou mortos \u2014 Lazaro, ja com quatro dias no tumulo, saiu caminhando. Transformou agua em vinho. Multiplicou paes e peixes para milhares. Caminhou sobre as aguas. Mas seus maiores milagres foram suas palavras. "Amai vossos inimigos." "Quem estiver sem pecado, atire a primeira pedra." "O meu reino nao e deste mundo." "Eu sou o caminho, a verdade e a vida." Ele nao falava como os rabinos \u2014 falava com autoridade propria.

Os lideres religiosos o odiaram. Ele os chamou de "sepulcros caiados \u2014 bonitos por fora, podres por dentro." Chamou os cambistas do templo de ladroes e virou suas mesas. O conflito era inevitavel. Judas, um dos doze discipulos, vendeu-o por trinta moedas de prata. Na ultima ceia, Jesus partiu o pao: "Isto e o meu corpo." Tomou o calice: "Isto e o meu sangue, derramado para remissao de pecados." Lavou os pes dos discipulos. No Getsemani, suou sangue e pediu: "Pai, se possivel, passa de mim este calice. Todavia, nao a minha vontade, mas a Tua."

Foi preso. Julgado. Acusado de blasfemia. Pilatos nao encontrou culpa, mas cedeu a pressao da multidao. Jesus foi açoitado, coroado de espinhos, obrigado a carregar a cruz. No Golgota, foi crucificado entre dois ladroes. "Pai, perdoa-lhes, porque nao sabem o que fazem." Ao meio-dia, trevas cobriram a terra ate as tres da tarde. Jesus gritou: "Eli, Eli, lema sabactani? \u2014 Deus meu, Deus meu, por que me desamparaste?" E entao: "Esta consumado." Inclinou a cabeca. Morreu. O veu do templo se rasgou de alto a baixo. A terra tremeu.

No terceiro dia, mulheres foram ao tumulo. A pedra estava rolada. O tumulo, vazio. Um anjo disse: "Nao esta aqui. Ressuscitou." Jesus apareceu aos discipulos durante quarenta dias. Comeu com eles. Mostrou as feridas. Disse: "Ide por todo o mundo e pregai o evangelho a toda criatura." E subiu aos ceus diante dos olhos deles. Para o cristianismo, a crucificacao e ressurreicao sao o centro de tudo. Sem a cruz, nao ha redencao. Sem o tumulo vazio, nao ha esperanca.`,
    quranText: `No Alcorao, a historia de Issa comeca antes dele nascer \u2014 comeca com sua mae. Maria (Maryam) tem uma surata inteira com seu nome \u2014 a Surata 19, Maryam. Ela e a unica mulher nomeada no Alcorao. E e mencionada mais vezes no Alcorao do que no Novo Testamento. O Islam honra Maryam com um titulo extraordinario: Siddiqah \u2014 a Veridica.

A mae de Maryam consagrou sua filha ao templo antes mesmo dela nascer. Deus aceitou. Maryam cresceu no templo, sob os cuidados de Zakariyya (Zacarias). E toda vez que Zakariyya entrava em seu aposento, encontrava provisoes. "O Maryam, de onde te vem isto?" Ela respondia: "E de Deus. Deus prove a quem quer, sem limites." Uma crianca provida diretamente por Deus, antes mesmo de receber qualquer revelacao.

Entao os anjos vieram a Maryam: "O Maryam! Deus te da a boa-nova de uma Palavra vinda Dele, cujo nome e o Messias, Issa filho de Maryam, ilustre neste mundo e no Alem, e um dos aproximados de Deus. Ele falara as pessoas no berco e na maturidade, e sera dos justos." Maryam disse: "Senhor meu! Como terei um filho se nenhum homem me tocou?" O anjo respondeu: "Assim sera. Deus cria o que quer. Quando decide algo, apenas diz: 'Se!' \u2014 e e."

Maryam se retirou com seu povo para um lugar distante. As dores de parto a levaram ao tronco de uma palmeira. Sozinha. Sem parteira, sem marido, sem ninguem. Disse: "Quem dera eu tivesse morrido antes disto e fosse completamente esquecida." Uma voz chamou de baixo dela: "Nao te entristeças. Teu Senhor colocou sob ti um riacho. Sacode o tronco da palmeira \u2014 cairao sobre ti tameras frescas e maduras. Come, bebe e refresca teus olhos." Deus nao a abandonou no momento mais vulneravel. Proveu agua, alimento e consolo.

Quando Maryam voltou ao povo carregando o bebe, a acusacao foi imediata: "O Maryam! Fizeste algo terrivel! O irma de Harun, teu pai nao era homem mau nem tua mae era devassa." Eles a condenaram sem ouvir. E Maryam nao disse nada. Apenas apontou para o bebe. "Como falaremos a quem esta no berco, ainda crianca?" E entao Issa falou. Do berco. Um recem-nascido abriu a boca e disse: "Eu sou servo de Deus. Ele me deu a Escritura e me fez profeta. E me fez abençoado onde quer que eu esteja, e me prescreveu a oracao e o zakat enquanto eu viver. E me fez bondoso com minha mae, e nao me fez arrogante nem miseravel. A paz esteja sobre mim no dia em que nasci, no dia em que morrer, e no dia em que for ressuscitado vivo."

Note a primeira palavra: "Eu sou servo de Deus." Nao "Eu sou Deus." Nao "Eu sou filho de Deus." Servo. Abd. E a segunda: "Ele me deu a Escritura e me fez profeta." No Islam, Issa e um dos maiores profetas que ja existiu. Ele e Kalimatullah \u2014 a Palavra de Deus. Ele e Ruh min Allah \u2014 um Espirito de Deus. Titulos que nenhum outro profeta recebe. Mas ele e profeta, nao Deus.

Issa cresceu e realizou milagres extraordinarios \u2014 todos "com a permissao de Deus", como o Alcorao faz questao de repetir. Curou cegos e leprosos. Deu vida a passaros de barro soprando sobre eles. Ressuscitou mortos. Recebeu uma mesa celestial (Al-Maida) como sinal para seus seguidores. Cada milagre e confirmado. Cada milagre e atribuido ao poder de Deus operando atraves de Issa, nao ao poder proprio de Issa.

E a crucificacao? Aqui esta o ponto mais controverso entre as duas tradicoes. O Alcorao diz, em An-Nisa 4:157: "E por dizerem: 'Matamos o Messias, Issa filho de Maryam, mensageiro de Deus.' Mas nao o mataram nem o crucificaram \u2014 mas assim lhes pareceu. Aqueles que discordam sobre isso estao em duvida. Nao possuem conhecimento algum, seguem apenas conjecturas. E certamente nao o mataram. Pelo contrario, Deus o elevou a Si. E Deus e Poderoso, Sabio."

O Alcorao nao nega que algo aconteceu na cruz. Diz que "assim lhes pareceu" \u2014 shubbiha lahum. A tradicao islamica interpretou isso de varias formas: um substituto tomou seu lugar, a aparencia foi alterada, os que o condenaram foram enganados. O que o Alcorao afirma com certeza e: Issa nao morreu. Deus o elevou. E ele voltara.

Sim \u2014 ambas as tradicoes concordam que Jesus voltara. No Islam, Issa retornara nos ultimos tempos, quebrara a cruz, matara o porco (simbolicamente anulando leis que ele nunca instituiu), abolira a jizya, e tera uma vida normal ate morrer naturalmente. A segunda vinda de Issa e doutrina islamica. O homem que o Alcorao se recusa a chamar de Deus e, ainda assim, o homem escolhido para retornar no fim dos tempos.`,
    insights: [
      'Maryam (Maria) tem uma surata inteira com seu nome no Alcorao \u2014 Surata 19. Ela e a unica mulher nomeada pelo nome em todo o livro. E e mencionada mais vezes no Alcorao (34 vezes) do que no Novo Testamento inteiro (19 vezes). O Islam honra a mae de Jesus mais do que muitos cristaos imaginam.',
      'Issa fala do berco \u2014 um milagre exclusivo do Alcorao, ausente da Biblia. Sua primeira palavra e "servo" (abd). Nao "filho." Nao "Deus." Servo. Todo o debate teologico entre cristianismo e Islam sobre a natureza de Jesus esta condensado nessa unica cena.',
      'A crucificacao e o ponto central de divergencia. O Alcorao nao nega que algo aconteceu: diz "assim lhes pareceu" (shubbiha lahum). A interpretacao majoritaria e que Issa nao morreu na cruz \u2014 Deus o elevou a Si. Para o cristianismo, a cruz e a redencao. Para o Islam, Deus nao permitiria que Seu profeta fosse humilhado assim.',
      'Ambas as tradicoes concordam na segunda vinda de Jesus. No Islam, Issa retornara nos ultimos tempos, vivera como muçulmano, quebrara a cruz e morrera naturalmente. O profeta que o Alcorao se recusa a chamar de Deus e, ainda assim, escolhido para retornar no fim dos tempos.',
      'Trindade versus Tawhid: o Alcorao diz "nao digais Tres \u2014 Deus e Um" (An-Nisa 4:171). Mas tambem chama Issa de "Palavra de Deus" e "Espirito de Deus" \u2014 titulos extraordinarios. O Islam nao diminui Jesus. O reconfigura: maximo de honra, sem deificacao.',
    ],
    keyMoment: {
      quote: '\u201CEu sou servo de Deus. Ele me deu a Escritura e me fez profeta.\u201D',
      ref: 'Maryam 19:30',
      note: 'Um recem-nascido falando do berco. Sua primeira declaracao define toda a cristologia islamica em uma frase. A honra e maxima. A adoracao e redirecionada. Este e o verso que resume o abismo \u2014 e a ponte \u2014 entre cristianismo e Islam sobre Jesus.',
    },
    nextSlug: 'muhammad',
    nextName: 'Muhammad \uFDFA',
  },
  {
    slug: 'muhammad',
    name: 'Muhammad \uFDFA',
    arabicName: '\u0645\u062D\u0645\u062F',
    episode: 17,
    title: 'O Selo',
    status: 'available',
    hook: 'Orfao aos 6 anos. Analfabeto. Aos 40, recebeu as primeiras palavras de um livro que 1.8 bilhao de pessoas memorizam letra por letra.',
    bibleRef: 'Deuteronomio 18:18 / Joao 14:16 / Isaias 42:1\u201313',
    quranRef: 'Al-Alaq 96:1\u20135 / Al-Fath 48 / Al-Ahzab 33:40',
    insight: 'Muhammad nao e adorado no Islam. Ele e "abd" (servo) primeiro, "rasul" (mensageiro) segundo. Chorou, sangrou, duvidou e morreu. O mais humano dos profetas.',
    bibleText: `Na Biblia, Muhammad nao aparece pelo nome. Mas ha passagens que muculmanos ha seculos identificam como profecias sobre ele \u2014 e que a maioria dos cristaos interpreta de forma diferente. A honestidade intelectual exige apresentar ambas as leituras.

Em Deuteronomio 18:18, Deus diz a Moises: "Suscitarei do meio dos seus irmaos um profeta semelhante a ti. Porei as minhas palavras na sua boca, e ele lhes dira tudo o que eu lhe ordenar." Cristaos interpretam isso como uma referencia a Jesus. Muculmanos argumentam: "irmaos" dos israelitas sao os ismaelitas (descendentes de Ismael, irmao de Isaque). E "semelhante a Moises" aponta para alguem que, como Moises, nasceu naturalmente, casou, teve filhos, liderou um povo, trouxe uma lei, governou um estado e morreu. Jesus, na visao islamica, nao se encaixa nesse perfil tao precisamente quanto Muhammad.

Em Joao 14:16, Jesus diz aos discipulos: "E eu rogarei ao Pai, e ele vos dara outro Consolador, para que fique convosco para sempre." Em grego, a palavra e "Parakletos" \u2014 Consolador. Muculmanos apontam que uma variante textual primitiva seria "Periklytos" \u2014 que significa "o Louvado" \u2014 traducao exata do nome Ahmad/Muhammad. Se a palavra original era "Periklytos" e foi alterada para "Parakletos" em copias posteriores, Jesus estaria literalmente dizendo o nome de Muhammad. Cristaos rejeitam essa leitura e identificam o Consolador como o Espirito Santo.

Em Isaias 42, Deus fala de "meu servo, a quem sustenho, meu escolhido, em quem minha alma se compraz." Este servo "trara justica as nacoes. Nao clamara, nao gritara, nao fara ouvir sua voz nas pracas." No verso 11: "Cantem os habitantes de Kedar." Kedar e o segundo filho de Ismael \u2014 antepassado das tribos arabes. Muculmanos leem toda a passagem como descricao de Muhammad. Cristaos a leem como referencia ao Messias ou a Israel como nacao.

O que e inegavel e isto: o Antigo Testamento promete um profeta vindouro. O Novo Testamento promete um Consolador vindouro. Muculmanos acreditam que ambas as promessas se cumpriram em Muhammad. Cristaos acreditam que se cumpriram em Jesus e no Espirito Santo. A mesma Biblia. Duas leituras radicalmente diferentes. Este episodio nao existe para declarar quem tem razao \u2014 existe para que voce leia ambas e pense por si mesmo.

Independente da interpretacao, um fato historico e incontestavel: no seculo VII, um homem em Meca alegou continuar a mesma linhagem profetica de Abraao, Moises e Jesus. E construiu uma civilizacao que, em menos de um seculo, se estendeu da Espanha a India.`,
    quranText: `Meca, ano 610. Uma caverna no monte Hira. Um homem de quarenta anos, casado, orfao desde crianca, que nunca havia lido uma unica linha, meditava sozinho como fazia todo ano durante o mes de Ramadan. Muhammad ibn Abdullah nao era sacerdote, nao era lider tribal, nao era rico. Era conhecido por um unico apelido: Al-Amin \u2014 O Confiavel. Quando as pessoas de Meca precisavam guardar algo de valor, entregavam a Muhammad. Ninguem questionava sua integridade.

Naquela noite na caverna, algo aconteceu que ele nunca pediu e nunca esperou. Uma presenca o envolveu. Uma voz ordenou: "Iqra!" \u2014 Le! Muhammad, tremendo, respondeu: "Nao sei ler." A presenca o apertou com tanta forca que ele pensou que morreria. Soltou e repetiu: "Iqra!" Muhammad respondeu de novo: "Nao sei ler." A pressao veio pela terceira vez. E entao vieram as palavras: "Le! Em nome do teu Senhor que criou. Criou o ser humano de um coagulo. Le! E teu Senhor e o mais Generoso. Aquele que ensinou pela pena. Ensinou ao ser humano o que ele nao sabia."

A primeira palavra revelada a um homem analfabeto foi "Le." A ironia e o milagre. Deus nao escolheu um filosofo, um poeta ou um sacerdote. Escolheu alguem que nao sabia ler \u2014 e o primeiro mandamento foi ler. O meio de transmissao era impossivel para o mensageiro. E exatamente por isso, o Islam considera o Alcorao inimitavel: um livro de linguistica perfeita, produzido atraves de alguem que nao dominava a linguistica.

Muhammad desceu da caverna tremendo. Correu para casa. "Cobre-me! Cobre-me!" disse a Khadijah, sua esposa. Ela o cobriu. Ele contou o que aconteceu. Khadijah nao duvidou. Nao riu. Nao chamou de loucura. Disse: "Nunca! Por Deus, Deus nunca te humilhara. Tu manténs lacos de parentesco, carregas o fardo dos fracos, acolhes os necessitados, honras os hospedes e ajudas nas adversidades." Khadijah, a primeira muçulmana, validou a mensagem pela qualidade do mensageiro: se Deus fosse escolher alguem, escolheria voce.

Os primeiros tres anos foram de pregacao secreta. Depois, a mensagem se tornou publica. E Meca reagiu com furia. Muhammad nao trazia apenas uma nova religiao \u2014 trazia a destruicao de todo o sistema economico e social de Meca. A Kaaba era centro de peregrinacao para 360 idolos. Tribos de toda a Arabia vinham adorar, comerciar, festejar. A mensagem de Muhammad \u2014 "nao ha deus senao Deus" \u2014 ameacava destruir tudo isso.

Treze anos em Meca. Treze anos de rejeicao, tortura e morte. Seus seguidores foram boicotados: a tribo inteira de Muhammad foi proibida de comprar ou vender no mercado. Comiam folhas de arvore. Bilal, um escravo etíope que se converteu, era arrastado pelo deserto com uma pedra no peito ao sol do meio-dia. Seu dono exigia: "Renuncia!" Bilal respondia: "Ahad. Ahad." \u2014 Um. Um. Sumayya, a primeira martir do Islam, foi assassinada com uma lanca por Abu Jahl por se recusar a negar Muhammad.

E Muhammad? Perdeu Khadijah. Perdeu Abu Talib, seu tio e protetor. No mesmo ano \u2014 o "Ano da Tristeza." Sozinho, sem protecao politica, foi a cidade de Taif buscar apoio. O povo de Taif enviou seus escravos e criancas para apedreja-lo. Muhammad saiu sangrando pelas ruas. Um anjo apareceu e ofereceu destruir a cidade inteira. Muhammad recusou: "Nao. Talvez de seus filhos saiam pessoas que adorem a Deus."

A migracao para Medina \u2014 a Hijra \u2014 mudou tudo. Em Medina, Muhammad nao era mais apenas profeta: era lider de estado, juiz, comandante e legislador. Construiu a primeira constituicao que garantia liberdade religiosa a judeus, cristaos e muculmanos na mesma cidade. O "Pacto de Medina" e considerado o primeiro documento de convivencia inter-religiosa da historia.

Oito anos depois, com dez mil seguidores, Muhammad voltou a Meca \u2014 a mesma cidade que o expulsou, torturou seus companheiros e matou seus familiares. Entrou sem derramamento de sangue. Entrou com a cabeca inclinada no camelo, tao baixa que quase tocava a sela. Foi ao Kaaba. Destruiu os 360 idolos com as proprias maos. E entao, com toda Meca a seus pes, os mesmos homens que tentaram mata-lo por vinte anos, fez a pergunta: "O povo de Meca, o que acham que farei convosco?" Eles disseram: "Es um irmao generoso, filho de um irmao generoso." Muhammad disse: "Ide. Estais livres."

Seu ultimo sermao, no monte Arafat, diante de mais de cem mil pessoas, incluiu palavras que anteciparam debates que a humanidade so teria seculos depois: "O humanidade! Vosso Senhor e Um e vosso pai e um. Um arabe nao e superior a um nao-arabe, nem um nao-arabe e superior a um arabe. Um branco nao e superior a um negro, nem um negro e superior a um branco \u2014 exceto pela piedade e boas acoes." Ano 632. Treze seculos antes dos movimentos de direitos civis.

Morreu em 632, aos 63 anos, com a cabeca no colo de Aisha, sua esposa. Quando Abu Bakr, seu companheiro mais proximo, anunciou a morte, Omar ibn al-Khattab empunhou a espada e disse que mataria quem dissesse que Muhammad havia morrido. Abu Bakr entrou na mesquita e disse: "Quem adorava Muhammad, saiba que Muhammad morreu. E quem adorava Deus, saiba que Deus esta vivo e jamais morrera."

O Alcorao diz: "Muhammad nao e pai de nenhum de vossos homens, mas e o Mensageiro de Deus e o Selo dos Profetas" (Al-Ahzab 33:40). O selo. O ultimo. Depois dele, nao havera outro. A corrente profetica que comecou com Adao se encerra com Muhammad. Nao porque seja o melhor \u2014 ele mesmo disse "nao me preferais sobre Musa" \u2014 mas porque a mensagem esta completa.`,
    insights: [
      'A primeira palavra revelada foi "Iqra" (Le/Recita) \u2014 a um homem analfabeto. O meio de transmissao era impossivel para o mensageiro. O Islam considera isso parte central do milagre: o Alcorao nao podia ter sido produzido por Muhammad porque Muhammad nao tinha capacidade literaria para produzi-lo.',
      'Muhammad foi rejeitado por sua propria tribo durante 13 anos. Seus seguidores foram torturados, boicotados e assassinados. A primeira martir do Islam foi uma mulher \u2014 Sumayya bint Khabbat. Ele nao pegou em armas ate ter sido expulso de sua cidade natal e receber permissao divina para se defender.',
      'Ao conquistar Meca \u2014 a cidade que o perseguiu por 20 anos, matou seus companheiros e tentou assassina-lo \u2014 Muhammad entrou sem derramamento de sangue e declarou: "Ide. Estais livres." Nao houve tribunais, execucoes ou vinganca. Ele perdoou inclusive Hind, a mulher que arrancou o figado de seu tio Hamza.',
      'Seu ultimo sermao, em 632, abordou igualdade racial, direitos das mulheres e proibicao de usura \u2014 treze seculos antes de esses temas entrarem no debate global. "Um arabe nao e superior a um nao-arabe, nem um branco a um negro \u2014 exceto pela piedade."',
      'Muhammad alertou especificamente contra sua propria adoracao: "Eu sou um ser humano como voces" (Al-Kahf 18:110). Quando morreu, Abu Bakr disse: "Quem adorava Muhammad, saiba que Muhammad morreu. Quem adorava Deus, saiba que Deus esta vivo e jamais morrera." No Islam, o mensageiro aponta para Deus \u2014 nunca para si mesmo.',
    ],
    keyMoment: {
      quote: '\u201CLe! Em nome do teu Senhor que criou.\u201D',
      ref: 'Al-Alaq 96:1',
      note: 'A primeira palavra de Deus para Muhammad. Uma unica palavra que lancou uma civilizacao. Dita numa caverna escura a um homem que nao sabia ler. 1400 anos depois, o livro que comecou com essa palavra e o mais memorizado do planeta Terra.',
    },
    nextSlug: null as string | null,
    nextName: null as string | null,
  },
]

export type Prophet = typeof prophets[0]

// ── STATIC PARAMS ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return prophets
    .filter((p) => p.status === 'available')
    .map((p) => ({ slug: p.slug }))
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function ProphetEpisodePage({ params }: { params: { slug: string } }) {
  const prophet = prophets.find((p) => p.slug === params.slug) ?? null
  return <ProphetEpisodeClient prophet={prophet} />
}
