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
    nextSlug: 'ibrahim',
    nextName: 'Abraao',
  },
  {
    slug: 'ibrahim',
    name: 'Abraao',
    arabicName: '\u0625\u0628\u0631\u0627\u0647\u064A\u0645',
    episode: 2,
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
    nextSlug: 'yusuf',
    nextName: 'Jose',
  },
  {
    slug: 'yusuf',
    name: 'Jose',
    arabicName: '\u064A\u0648\u0633\u0641',
    episode: 3,
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
    nextSlug: 'musa',
    nextName: 'Moises',
  },
  {
    slug: 'musa',
    name: 'Moises',
    arabicName: '\u0645\u0648\u0633\u0649',
    episode: 4,
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
    nextSlug: 'issa',
    nextName: 'Jesus',
  },
  {
    slug: 'issa',
    name: 'Jesus',
    arabicName: '\u0639\u064A\u0633\u0649',
    episode: 5,
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
    episode: 6,
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
