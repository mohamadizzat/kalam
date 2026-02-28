export type Parable = {
  slug: string
  title: string
  arabicTitle: string
  surahRef: string
  summary: string
  narrative: string
  lesson: string
  reflection: string
}

export const parables: Parable[] = [
  // ═══════════════════════════════════════════════════════
  // 1. A Caverna — Ashab al-Kahf
  // ═══════════════════════════════════════════════════════
  {
    slug: 'a-caverna',
    title: 'A Caverna',
    arabicTitle: 'اصحاب الكهف',
    surahRef: 'Surata 18 — Al-Kahf',
    summary: 'Jovens que dormiram 309 anos protegidos por Deus por manterem sua fe.',
    narrative:
      'Era uma vez, numa cidade antiga dominada por um rei tirano, um grupo de jovens que ousou fazer o que ninguem mais tinha coragem: acreditar. Enquanto todo o povo se curvava diante de idolos de pedra, esses rapazes olhavam para o ceu e reconheciam que so havia um Deus verdadeiro.\n\n' +
      'O rei descobriu. A noticia se espalhou como fogo. Os jovens sabiam que a morte os esperava se ficassem. Entao fugiram. Correram para as montanhas, sem destino certo, apenas com a certeza de que Deus nao os abandonaria.\n\n' +
      'Encontraram uma caverna. Entraram. E ali, exaustos, com o coracao entre a fe e o medo, adormeceram. Mas aquele nao foi um sono comum. Deus lancou sobre eles um veu de protecao. O sol nascia e se desviava da entrada da caverna. O tempo passava la fora — anos, decadas, seculos — e eles permaneciam imutaveis, como se o tempo tivesse parado apenas para eles.\n\n' +
      'Trezentos e nove anos se passaram. Quando finalmente despertaram, achavam que tinham dormido um dia, talvez meio dia. Um deles foi a cidade comprar comida e entregou uma moeda tao antiga que o comerciante ficou espantado. A cidade inteira tinha mudado. O tirano ja era po. Um novo povo vivia ali — e muitos ja adoravam o Deus unico.\n\n' +
      'Deus os havia protegido enquanto dormiam. Nao com exercitos, nao com espadas, mas com algo mais poderoso: Sua vontade. Aqueles jovens nao tinham poder, riqueza ou influencia. Tinham apenas fe. E isso foi o suficiente para que o Criador do universo reescrevesse as leis do tempo por eles.\n\n' +
      'A cidade, ao descobrir a verdade sobre os dormentes, ficou maravilhada. Aqueles jovens se tornaram um sinal vivo de que Deus protege quem O busca com sinceridade, nao importa quao impossivel pareca a situacao.',
    lesson: 'Deus protege quem se refugia Nele com sinceridade. O impossivel so e impossivel ate que Deus decide agir.',
    reflection: 'Existe algo na sua vida que voce esta adiando por medo? E se a sua fe for exatamente o que Deus esta esperando para agir?',
  },

  // ═══════════════════════════════════════════════════════
  // 2. O Sacrificio de Ibrahim
  // ═══════════════════════════════════════════════════════
  {
    slug: 'o-sacrificio-de-ibrahim',
    title: 'O Sacrificio de Ibrahim',
    arabicTitle: 'ذبح إبراهيم',
    surahRef: 'Surata 37 — As-Saffat',
    summary: 'Ibrahim recebe a ordem divina de sacrificar seu filho amado — e ambos obedecem.',
    narrative:
      'Ibrahim esperou a vida inteira por um filho. Orou, suplicou, e quando ja era velho, Deus finalmente lhe concedeu Ismail. O menino era a luz de seus olhos, a resposta de decadas de suplica. Ibrahim o amava com uma intensidade que so um pai que esperou tanto poderia entender.\n\n' +
      'Entao veio o sonho. E os sonhos dos profetas sao revelacao. Ibrahim viu-se sacrificando seu proprio filho. Acordou perturbado. O sonho se repetiu. Na terceira vez, nao havia mais duvida: era uma ordem de Deus.\n\n' +
      'A maioria de nos quebraria. A maioria questionaria. Mas Ibrahim nao era a maioria. Ele foi ate Ismail e disse com toda a honestidade: "Meu filho, vejo em sonho que devo te sacrificar. O que voce acha?" A resposta de Ismail e uma das frases mais poderosas do Quran: "Meu pai, faca o que lhe foi ordenado. Encontrara em mim, se Deus quiser, um dos pacientes."\n\n' +
      'Pai e filho caminharam juntos ate o local do sacrificio. Ibrahim deitou o filho, colocou a lamina em seu pescoco. Naquele momento, nao era sobre a morte — era sobre a entrega. Era sobre provar que o amor a Deus estava acima de tudo, ate do presente mais precioso que Deus lhe havia dado.\n\n' +
      'E entao Deus interveio. "O Ibrahim! Voce ja cumpriu a visao." Um carneiro foi enviado do ceu para substituir Ismail. O sacrificio nunca foi sobre o sangue. Foi sobre o coracao. Ibrahim provou que estava disposto a entregar tudo. E por isso, Deus lhe devolveu tudo — e mais.\n\n' +
      'Ate hoje, milhoes de muculmanos celebram o Eid al-Adha em memoria desse momento. Nao como ritual vazio, mas como lembrete: a verdadeira submissao e entregar o que mais amamos quando Deus pede.',
    lesson: 'A verdadeira fe e testada naquilo que mais amamos. A submissao a Deus nao e fraqueza — e a maior forca que existe.',
    reflection: 'O que voce mais teme perder? Voce confiaria em Deus mesmo se Ele pedisse exatamente isso?',
  },

  // ═══════════════════════════════════════════════════════
  // 3. Yusuf e os Irmaos
  // ═══════════════════════════════════════════════════════
  {
    slug: 'yusuf-e-os-irmaos',
    title: 'Yusuf e os Irmaos',
    arabicTitle: 'يوسف وإخوته',
    surahRef: 'Surata 12 — Yusuf',
    summary: 'A historia completa de Jose: traicao, escravidao, prisao e a ascensao ao poder no Egito.',
    narrative:
      'Yusuf era o filho mais amado de Yaqub. Ainda crianca, teve um sonho: onze estrelas, o sol e a lua se curvavam diante dele. Seu pai entendeu o significado e alertou: "Nao conte aos seus irmaos." Mas a inveja ja ardia neles. Planejaram se livrar de Yusuf. Jogaram-no num poco escuro e voltaram para casa com a camisa manchada de sangue falso, chorando: "O lobo o devorou."\n\n' +
      'Yaqub sabia. Um pai sente. Disse: "A paciencia e bela. Peco ajuda a Deus contra o que descreveis." Enquanto isso, uma caravana encontrou Yusuf no poco e o vendeu como escravo no Egito. Um menino livre, filho de profeta, agora era mercadoria.\n\n' +
      'No Egito, cresceu na casa de um ministro. Era belo — tao belo que a esposa do ministro tentou seduzi-lo. Yusuf recusou. "Refugio em Deus!", disse. Ela rasgou sua camisa pelas costas tentando segura-lo. Mesmo inocente, Yusuf foi preso. Na prisao, interpretou sonhos de dois companheiros. Um foi libertado e esqueceu de Yusuf por anos.\n\n' +
      'Ate que o rei do Egito teve um sonho que ninguem conseguia interpretar: sete vacas gordas engolidas por sete magras, sete espigas verdes e sete secas. Lembraram de Yusuf. Ele interpretou: sete anos de fartura seguidos de sete de seca. O rei ficou tao impressionado que libertou Yusuf e o colocou como administrador de todo o Egito.\n\n' +
      'Quando a seca chegou, os irmaos de Yusuf vieram ao Egito pedir comida — sem saber que estavam diante do irmao que jogaram no poco. Yusuf os reconheceu. Nao se vingou. Planejou com sabedoria ate que toda a familia se reunisse. Quando se revelou, os irmaos tremeram de vergonha. Yusuf disse: "Nao ha censura sobre voces hoje. Que Deus os perdoe."\n\n' +
      'Yaqub, ja cego de tanto chorar, recuperou a visao ao tocar a camisa de Yusuf. A familia se prostrou diante dele — exatamente como o sonho da infancia havia mostrado.',
    lesson: 'O plano de Deus e maior que qualquer traicao humana. A paciencia transforma a dor em elevacao.',
    reflection: 'Existe uma situacao na sua vida que parece um "poco"? E se esse poco for o caminho que Deus planejou para te elevar?',
  },

  // ═══════════════════════════════════════════════════════
  // 4. Moises e o Mar
  // ═══════════════════════════════════════════════════════
  {
    slug: 'moises-e-o-mar',
    title: 'Moises e o Mar',
    arabicTitle: 'موسى والبحر',
    surahRef: 'Surata 26 — Ash-Shu\'ara',
    summary: 'Musa lidera seu povo para fora do Egito e Deus abre o mar ao meio.',
    narrative:
      'O Farao era o homem mais poderoso da Terra. Tinha exercitos, riquezas e um ego que o fez declarar: "Eu sou o vosso senhor supremo." Musa, um homem simples com um cajado na mao, foi enviado para enfrenta-lo com uma unica mensagem: "Deixe meu povo ir."\n\n' +
      'O Farao recusou. Deus enviou praga apos praga — o sangue, os gafanhotos, as ras, a escuridao. Cada vez o Farao prometia mudar. Cada vez voltava atras. Ate que Deus ordenou a Musa: "Saia com meu povo durante a noite."\n\n' +
      'Musa reuniu os filhos de Israel e partiram na escuridao. Mas o Farao descobriu e mobilizou todo o seu exercito para persegui-los. Quando o amanhecer chegou, os filhos de Israel viram o mar a frente e o exercito do Farao atras. O panico tomou conta. "Fomos alcancados!", gritaram.\n\n' +
      'Musa, com uma calma que so a certeza em Deus pode dar, respondeu: "De modo algum! Meu Senhor esta comigo e me guiara." Deus ordenou: "Bata com seu cajado no mar." Musa obedeceu. E entao aconteceu o impossivel. O mar se abriu ao meio. Duas paredes gigantescas de agua se ergueram, e entre elas, um caminho seco apareceu.\n\n' +
      'Os filhos de Israel atravessaram. O Farao, cego pela arrogancia, entrou atras deles com seu exercito. Quando o ultimo israelita saiu do outro lado, as paredes de agua desabaram. O Farao, aquele que se dizia deus, afogou-se como qualquer mortal. No ultimo instante, gritou: "Acredito no Deus dos filhos de Israel!" Mas era tarde demais.\n\n' +
      'Deus preservou o corpo do Farao como sinal para as geracoes futuras. Ate hoje, mumias de faraos sao encontradas — lembretes silenciosos de que nenhum poder humano resiste ao poder de Deus.',
    lesson: 'Quando voce esta entre o mar e o exercito, confie: Deus abre caminhos onde nao existe caminho.',
    reflection: 'Qual e o "mar" na sua frente agora? Voce esta esperando que ele se abra ou ja deu o primeiro passo com fe?',
  },

  // ═══════════════════════════════════════════════════════
  // 5. A Formiga e Salomao
  // ═══════════════════════════════════════════════════════
  {
    slug: 'a-formiga-e-salomao',
    title: 'A Formiga e Salomao',
    arabicTitle: 'النملة وسليمان',
    surahRef: 'Surata 27 — An-Naml',
    summary: 'Sulaiman, o rei que entendia os animais, ouve o alerta de uma formiga.',
    narrative:
      'Sulaiman nao era um rei qualquer. Deus lhe deu um reino como nenhum outro ser humano jamais recebeu ou recebera. Ele comandava os ventos, os jinns trabalhavam para ele, e — o mais extraordinario — ele entendia a linguagem dos animais e dos passaros.\n\n' +
      'Certo dia, Sulaiman marchava com seu enorme exercito pelo vale das formigas. Eram milhares de soldados, jinns, homens e passaros, organizados em fileiras perfeitas. O chao tremia sob seus passos. O poder daquele exercito era tao vasto que a propria terra parecia pequena diante dele.\n\n' +
      'Entao, uma formiga — um ser tao pequeno que a maioria de nos pisaria sem perceber — viu o exercito se aproximando. Ela gritou para suas companheiras: "O formigas! Entrem nas suas casas para que Sulaiman e seus exercitos nao as esmaguem sem perceber!"\n\n' +
      'Sulaiman ouviu. Nao passou reto. Nao ignorou. Nao riu. Ele sorriu com ternura e parou. Aquele que tinha o maior exercito do mundo parou por causa de uma formiga. E fez algo ainda mais impressionante: agradeceu a Deus. "Meu Senhor, inspira-me a agradecer a graca que concedeste a mim e aos meus pais, e a praticar o bem que Te agrade, e admite-me, por Tua misericordia, entre Teus servos virtuosos."\n\n' +
      'Sulaiman nao usou seu poder para oprimir. Usou para proteger. Nao usou seu conhecimento para se exibir. Usou para ser grato. Uma formiga lhe ensinou — ou melhor, lhe lembrou — que verdadeiro poder e aquele que cuida dos pequenos, nao aquele que os esmaga.\n\n' +
      'Naquela pausa, naquele sorriso, naquela gratidao, esta uma das maiores licoes do Quran: grandeza nao e sobre quao alto voce sobe, mas sobre quao atento voce permanece aos que estao abaixo.',
    lesson: 'O verdadeiro poder se revela na humildade. Grandeza e proteger os pequenos, nao esmaga-los.',
    reflection: 'Voce tem ouvido as "formigas" ao seu redor? Quem na sua vida precisa ser notado?',
  },

  // ═══════════════════════════════════════════════════════
  // 6. O Passaro de Jesus
  // ═══════════════════════════════════════════════════════
  {
    slug: 'o-passaro-de-jesus',
    title: 'O Passaro de Jesus',
    arabicTitle: 'طير عيسى',
    surahRef: 'Surata 3 — Al-Imran',
    summary: 'Isa (Jesus) molda um passaro de barro e sopra vida nele, com a permissao de Deus.',
    narrative:
      'Isa, filho de Maryam, nasceu de forma miraculosa — sem pai. Desde o berco, Deus o fez falar para defender sua mae das acusacoes. Mas os sinais nao pararam ali. Deus deu a Isa milagres que deixavam as pessoas entre o espanto e a reflexao.\n\n' +
      'Um dia, Isa tomou barro nas maos. Com seus dedos, moldou a forma de um passaro. As pessoas observavam curiosas. O que aquele jovem profeta estava fazendo? Era apenas argila, materia morta, sem vida. Isa segurou aquela pequena figura e soprou nela.\n\n' +
      'E diante dos olhos de todos, o barro se transformou. As asas se moveram. O coracao comecou a bater. O passaro de argila ganhou vida e voou — pelo ceu, livre, vivo, real. Nao por magia, nao por truque. Por permissao de Deus.\n\n' +
      'Isa mesmo declarou: "Eu vos trago um sinal do vosso Senhor: modelo do barro a forma de um passaro, sopro nele, e ele se torna um passaro vivo, com a permissao de Deus." Ele nunca reivindicou o poder para si. Cada milagre, cada cura, cada momento extraordinario era precedido pelas mesmas palavras: "com a permissao de Deus."\n\n' +
      'Isa tambem curava cegos de nascenca e leprosos. Ressuscitava mortos. Revelava as pessoas o que comiam e guardavam em suas casas. Cada sinal era um convite: olhem para alem do barro, olhem para Quem da vida ao barro.\n\n' +
      'Mas muitos se confundiram. Viram os milagres e adoraram o mensageiro em vez de adorar Quem o enviou. Isa nunca pediu adoracao. Disse claramente: "Adorai a Deus, meu Senhor e vosso Senhor." O passaro de barro que voou era um sinal de que Deus pode dar vida a qualquer coisa — inclusive ao coracao que parece morto.\n\n' +
      'Esse milagre nos lembra: nada e impossivel quando Deus permite. O barro mais simples pode se tornar algo vivo e belo.',
    lesson: 'Os milagres pertencem a Deus, nao ao mensageiro. O poder de Deus da vida ate ao que parece morto.',
    reflection: 'Ha algo na sua vida que parece "barro morto"? Um sonho, uma relacao, uma fe adormecida? O que aconteceria se voce pedisse a Deus para soprar vida nisso?',
  },

  // ═══════════════════════════════════════════════════════
  // 7. A Vaca Amarela
  // ═══════════════════════════════════════════════════════
  {
    slug: 'a-vaca-amarela',
    title: 'A Vaca Amarela',
    arabicTitle: 'البقرة الصفراء',
    surahRef: 'Surata 2 — Al-Baqarah',
    summary: 'Deus ordena que os filhos de Israel sacrifiquem uma vaca, mas eles complicam a ordem simples.',
    narrative:
      'Houve um assassinato entre os filhos de Israel e ninguem sabia quem era o culpado. As acusacoes voavam de um lado para outro. Tribos culpavam tribos. A discordia ameacava destruir a comunidade. Entao foram ate Musa pedindo ajuda.\n\n' +
      'Deus revelou a solucao: "Sacrifiquem uma vaca." Uma ordem simples, direta, clara. Se tivessem obedecido imediatamente, qualquer vaca serviria. Mas os filhos de Israel fizeram o que muitos de nos fazemos: complicaram.\n\n' +
      '"Esta zombando de nos?", perguntaram a Musa. Ele respondeu: "Deus me livre de ser dos ignorantes." Entao comecaram as perguntas. "Que tipo de vaca?" Deus respondeu: "Nem velha, nem jovem, de meia-idade." Se tivessem parado ali e obedecido, teria sido facil. Mas continuaram.\n\n' +
      '"De que cor?" Deus respondeu: "Uma vaca amarela, de cor viva, que alegre quem a ve." Ainda nao bastou. "As vacas se parecem para nos. Descreva melhor." Deus respondeu: "Uma vaca que nao foi usada para arar a terra nem regar plantacoes, saudavel, sem mancha nenhuma."\n\n' +
      'A cada pergunta, a tarefa ficava mais dificil. O que era simples se tornou quase impossivel. Procuraram e procuraram ate encontrar uma unica vaca que atendia a todas aquelas descricoes — e tiveram que pagar um preco altissimo por ela.\n\n' +
      'Finalmente sacrificaram a vaca. Deus ordenou que batessem o morto com um pedaco dela. O homem assassinado voltou a vida por um instante e revelou seu assassino. A verdade veio a tona. A justica foi feita.\n\n' +
      'Mas a maior licao nao foi o milagre da ressurreicao temporaria. Foi o que aconteceu antes: um povo que recebeu uma ordem simples e, por excesso de perguntas e falta de confianca, transformou o facil em dificil.',
    lesson: 'Quando Deus ordena algo, obedeca. O excesso de questionamento transforma a simplicidade em dificuldade.',
    reflection: 'Ha algo que voce sabe que deveria fazer mas fica adiando com desculpas e perguntas? E se a resposta ja tiver sido dada e voce so precisa agir?',
  },

  // ═══════════════════════════════════════════════════════
  // 8. O Jardim Destruido
  // ═══════════════════════════════════════════════════════
  {
    slug: 'o-jardim-destruido',
    title: 'O Jardim Destruido',
    arabicTitle: 'الجنة المحترقة',
    surahRef: 'Surata 68 — Al-Qalam',
    summary: 'Donos de um jardim rico planejam colher sem dar aos pobres — e perdem tudo.',
    narrative:
      'Havia um homem justo que possuia um jardim magnifico, cheio de frutas e abundancia. Todo ano, na colheita, ele separava uma parte generosa para os pobres. Era sua forma de agradecer a Deus — compartilhando a bencao.\n\n' +
      'Quando o homem morreu, seus filhos herdaram o jardim. Mas nao herdaram a generosidade do pai. Olharam para as arvores carregadas de frutos e pensaram: "Por que dar aos pobres? Esse jardim e nosso. Colheremos tudo para nos."\n\n' +
      'Fizeram um plano: iriam colher de madrugada, antes que os pobres aparecessem para pedir sua parte. Juraram entre si que nenhum necessitado tocaria nos frutos daquele ano. Deitaram-se satisfeitos, sem saber que Deus ja havia decidido.\n\n' +
      'Durante a noite, enquanto dormiam, um castigo silencioso veio. Um fogo — ou uma tempestade, o Quran diz "um visitante do teu Senhor" — passou pelo jardim e destruiu tudo. As arvores frutiferas, as plantacoes, as videiras. Tudo virou cinzas negras.\n\n' +
      'De madrugada, acordaram animados e marcharam ate o jardim. Quando chegaram, nao reconheceram o lugar. "Erramos o caminho", disseram. Mas nao tinham errado. Aquele campo queimado era o jardim deles. Um deles, talvez o que tinha mais consciencia, disse: "Eu nao disse para vocês glorificarem a Deus?"\n\n' +
      'Entao caiu a ficha. Perceberam que a ganancia havia destruido nao apenas o jardim, mas a bencao que o sustentava. Comecaram a se culpar mutuamente, e depois, arrependidos, disseram: "Ai de nos! Fomos transgressores. Talvez nosso Senhor nos de algo melhor. A Ele nos voltamos."\n\n' +
      'O Quran nao diz se receberam outro jardim. A licao nao e sobre o final. E sobre o meio: a bencao vem com responsabilidade. Se voce fecha a mao, Deus pode fechar a fonte.',
    lesson: 'A riqueza vem com responsabilidade. A ganancia nao protege — destrói. A generosidade e o que mantem a bencao fluindo.',
    reflection: 'Voce tem compartilhado suas bencaos ou esta guardando tudo para si? O que aconteceria se a fonte secasse amanha?',
  },

  // ═══════════════════════════════════════════════════════
  // 9. Luqman e o Filho
  // ═══════════════════════════════════════════════════════
  {
    slug: 'luqman-e-o-filho',
    title: 'Luqman e o Filho',
    arabicTitle: 'لقمان وابنه',
    surahRef: 'Surata 31 — Luqman',
    summary: 'Um pai sabio transmite licoes eternas ao seu filho sobre fe, carater e humildade.',
    narrative:
      'Luqman nao era profeta. Nao era rei. Era um homem a quem Deus concedeu algo raro: sabedoria. E a maior prova de sua sabedoria nao foi o que ele fez — foi o que ele ensinou ao filho.\n\n' +
      'O Quran registra seus conselhos como um modelo para todo pai, toda mae, todo educador. Sao palavras que atravessam seculos porque tocam a essencia do que significa ser humano.\n\n' +
      '"Meu filho", disse Luqman, "nao atribua parceiros a Deus. A idolatria e a maior injustica." Ele comecou pelo fundamento: antes de construir qualquer coisa na vida, construa sobre a base certa. Se a base e Deus, tudo o que vier depois tem alicerce. Se a base e outra coisa — dinheiro, fama, aprovacao — tudo desmorona.\n\n' +
      '"Meu filho, se houver algo do peso de um grao de mostarda, e estiver dentro de uma rocha, ou nos ceus, ou na terra, Deus o trara. Deus e Sutil, Conhecedor." Nada escapa de Deus. Nem o menor ato de bondade, nem a menor injustica. Tudo e visto. Tudo e registrado.\n\n' +
      '"Meu filho, cumpre a oracao, ordena o bem, proibe o mal, e suporta com paciencia o que te aflige. Isso e determinacao." Luqman sabia que fazer o certo nao seria facil. Que haveria oposicao. Que o mundo empurraria contra. Por isso nao disse apenas "faca o bem." Disse: "e aguente firme."\n\n' +
      'Depois veio o conselho sobre carater: "Nao desvies o rosto dos homens por arrogancia, nem andes pela terra com soberba. Deus nao ama os presuncosos e arrogantes." E entao: "Modera teu passo e baixa tua voz. A voz mais desagradavel e a do burro."\n\n' +
      'Cada frase e uma aula completa. Nao ha desperdicio de palavras. Nao ha filosofia vazia. E um pai olhando nos olhos do filho e dizendo: "Isso e o que importa. O resto e ruido."',
    lesson: 'A melhor heranca que um pai pode deixar nao e dinheiro — e sabedoria. E a base de tudo e o tawhid: so Deus.',
    reflection: 'Se voce tivesse que dar apenas cinco conselhos ao seu filho antes de partir, quais seriam? Eles se parecem com os de Luqman?',
  },

  // ═══════════════════════════════════════════════════════
  // 10. A Arca de Noe
  // ═══════════════════════════════════════════════════════
  {
    slug: 'a-arca-de-noe',
    title: 'A Arca de Noe',
    arabicTitle: 'سفينة نوح',
    surahRef: 'Surata 11 — Hud',
    summary: 'Nuh constroi a arca por ordem de Deus enquanto seu povo ri — ate que a agua chega.',
    narrative:
      'Nuh pregou por novecentos e cinquenta anos. Leia de novo: novecentos e cinquenta anos. Chamou seu povo de dia e de noite. Em publico e em particular. Com gentileza e com urgencia. E a resposta? "Colocavam os dedos nos ouvidos, cobriam-se com as roupas, persistiam no orgulho e eram extremamente arrogantes."\n\n' +
      'Quase ninguem acreditou. Os ricos zombavam: "Vemos apenas os mais miseraveis te seguindo." Os poderosos diziam: "Voce nao e melhor que nos." Nuh nao desistiu. Mas depois de quase um milenio de rejeicao, clamou a Deus: "Senhor, nao deixes na terra nenhum dos incredulos."\n\n' +
      'Deus ordenou: "Construa a arca." No meio do deserto, longe do mar, Nuh comecou a construir um navio gigantesco. As pessoas passavam e riam. "Virou carpinteiro agora? Vai navegar na areia?" Nuh continuou pregando e martelando ao mesmo tempo.\n\n' +
      'Quando a arca ficou pronta, o sinal veio: agua brotou da terra e o ceu despejou chuva como nunca se viu. Nuh embarcou com os crentes e os casais de animais. As aguas subiram. As montanhas desapareceram. O mundo inteiro foi coberto.\n\n' +
      'O momento mais doloroso veio quando Nuh viu seu proprio filho recusando embarcar. "Meu filho, embarque conosco! Nao fique com os incredulos!" O filho respondeu com a arrogancia de quem confia em si mesmo: "Vou me refugiar numa montanha que me protegera da agua." Nuh gritou: "Nada protege hoje do decreto de Deus, exceto quem Ele tiver misericordia!" Uma onda veio e levou o rapaz.\n\n' +
      'Nuh, com o coracao partido, pediu a Deus por seu filho. Deus respondeu: "Ele nao e da tua familia, pois seus atos eram impios." Foi a licao mais dura: nem o sangue salva. So a fe.\n\n' +
      'A agua baixou. A arca pousou no monte Judi. Um novo comeco. Nuh e os crentes pisaram em terra firme, limpa, renovada.',
    lesson: 'A persistencia na verdade nao depende de resultado imediato. E ate os lacos de sangue nao substituem a fe.',
    reflection: 'Ha quanto tempo voce esta tentando sem ver resultado? A historia de Nuh te lembra que persistencia nao tem prazo de validade?',
  },

  // ═══════════════════════════════════════════════════════
  // 11. O Fogo de Ibrahim
  // ═══════════════════════════════════════════════════════
  {
    slug: 'o-fogo-de-ibrahim',
    title: 'O Fogo de Ibrahim',
    arabicTitle: 'نار إبراهيم',
    surahRef: 'Surata 21 — Al-Anbiya',
    summary: 'Ibrahim e lancado numa fogueira gigante por destruir os idolos — e sai ileso.',
    narrative:
      'Ibrahim era jovem quando desafiou seu povo inteiro. Enquanto todos adoravam idolos de pedra, ele questionava: "Como voces adoram o que suas proprias maos esculpiram?" Ninguem tinha resposta. Mas ninguem queria mudar.\n\n' +
      'Um dia, quando o povo saiu para uma festividade, Ibrahim entrou no templo dos idolos. Pegou um machado e destruiu todos — exceto o maior. Pendurou o machado no pescoco do idolo grande. Quando voltaram e viram a destruicao, gritaram: "Quem fez isso com nossos deuses?"\n\n' +
      'Ibrahim respondeu com ironia afiada: "Perguntem ao grande. Talvez tenha sido ele." Ficaram furiosos. "Voce sabe que eles nao falam!" Ibrahim respondeu: "Entao por que adoram o que nao fala, nao ouve e nao pode ajudar nem a si mesmo?"\n\n' +
      'A logica era irrefutavel. Mas quando a verdade ameaca o poder, a resposta do poder e a forca bruta. Decidiram queima-lo vivo. Construiram uma fogueira tao grande que precisaram de uma catapulta para lanca-lo dentro — ninguem conseguia se aproximar do calor.\n\n' +
      'Ibrahim foi lancado. Naquele momento, o anjo Jibril (Gabriel) veio e perguntou: "Precisa de algo?" Ibrahim respondeu: "De voce, nao. De Deus, sim." Uma confianca absoluta. Nao pediu resgate humano. Nao negociou. Entregou-se a Deus.\n\n' +
      'Deus ordenou: "O fogo! Sê frescor e paz para Ibrahim." O fogo queimou apenas as cordas que o amarravam. Ibrahim saiu da fogueira sem um arranhao, sem uma queimadura, sem o cheiro de fumaca. O fogo, que obedece a Deus assim como tudo na criacao, nao ousou toca-lo.\n\n' +
      'O povo ficou atonito. Mas ainda assim, a maioria nao acreditou. Ibrahim partiu. Emigrou. E Deus o fez pai de nacoes, lider dos monoteistas, o "amigo de Deus" — Khalilullah.',
    lesson: 'Quando voce esta com Deus, nem o fogo pode queima-lo. A confianca total em Deus transforma destruicao em protecao.',
    reflection: 'Voce tem enfrentado "fogueiras" na sua vida? Pressoes, ameacas, situacoes que parecem destruidoras? Voce confia que Deus pode tornar o fogo em paz?',
  },

  // ═══════════════════════════════════════════════════════
  // 12. Qarun — O Rico Arrogante
  // ═══════════════════════════════════════════════════════
  {
    slug: 'qarun-o-rico-arrogante',
    title: 'Qarun — O Rico Arrogante',
    arabicTitle: 'قارون',
    surahRef: 'Surata 28 — Al-Qasas',
    summary: 'Qarun acumulou riqueza imensuravel e acreditou que merecia tudo — a terra o engoliu.',
    narrative:
      'Qarun era do povo de Musa. Nao era um estranho, era um dos filhos de Israel. E Deus lhe deu riqueza — tanta riqueza que apenas as chaves de seus tesouros eram pesadas demais para um grupo de homens fortes carregar. Imagine os tesouros em si.\n\n' +
      'As pessoas aconselharam: "Nao te alegres demais com a riqueza. Usa o que Deus te deu para buscar a morada do Alem, sem esquecer tua parte neste mundo. E faz o bem como Deus te fez o bem." Conselhos claros. Equilibrados. Sabios.\n\n' +
      'Qarun rejeitou tudo. Disse: "Recebi isso por conhecimento que possuo." Ele acreditava que merecia. Que era talento, inteligencia, esforco proprio. Nao reconhecia Deus como a fonte. E quando voce acredita que e a fonte, voce para de agradecer.\n\n' +
      'Qarun saia em publico com toda a sua pompa. Vestes luxuosas, comitiva, ostentacao pura. As pessoas se dividiam. Alguns, com os coracoes doentes, diziam: "Quem dera fossemos como Qarun! Ele tem uma sorte imensa!" Outros, os que tinham conhecimento, alertavam: "Ai de voces! A recompensa de Deus e melhor para quem cre e pratica o bem."\n\n' +
      'Qarun nao foi punido por ser rico. Foi punido por ser arrogante. Por negar a fonte. Por recusar compartilhar. Por se achar acima dos outros por causa de bens que, no fundo, nunca lhe pertenceram.\n\n' +
      'O castigo veio de onde ele menos esperava: de baixo. "Fizemos com que a terra o engolisse, junto com sua mansao." Nao houve resgate. Nao houve exercito que pudesse salva-lo. Toda aquela riqueza, todos aqueles tesouros, foram engolidos em segundos.\n\n' +
      'No dia seguinte, aqueles mesmos que invejavam Qarun disseram: "Ai! Deus amplia o sustento a quem quer e restringe. Se nao fosse pela graca de Deus para conosco, nos teria engolido tambem!"',
    lesson: 'A riqueza e uma bencao quando reconhecida como vinda de Deus. Quando vira motivo de arrogancia, se torna a propria destruicao.',
    reflection: 'Voce reconhece que tudo o que tem vem de Deus? Ou ja comecou a acreditar que "merece" por merito proprio?',
  },

  // ═══════════════════════════════════════════════════════
  // 13. A Rainha de Saba
  // ═══════════════════════════════════════════════════════
  {
    slug: 'a-rainha-de-saba',
    title: 'A Rainha de Saba',
    arabicTitle: 'ملكة سبأ',
    surahRef: 'Surata 27 — An-Naml',
    summary: 'Bilqis governa um reino poderoso, encontra Sulaiman e reconhece a verdade.',
    narrative:
      'Sulaiman governava o maior reino que a Terra ja viu. Certo dia, percebeu que a poupa — um passaro chamado Hud-hud — estava ausente. Ficou irritado: "Por que nao vejo a poupa? Ou esta ausente? Certamente a punirei severamente ou a sacrificarei, a menos que traga uma justificativa clara."\n\n' +
      'O Hud-hud voltou com uma noticia extraordinaria: "Descobri algo que voce nao conhecia. Venho de Saba com noticias certas. Encontrei uma mulher que os governa, e lhe foi dado de tudo, e ela tem um trono magnifico. Mas ela e seu povo se prostram ao sol em vez de a Deus."\n\n' +
      'Sulaiman decidiu agir. Enviou uma carta a Bilqis, rainha de Saba: "Em nome de Deus, o Misericordioso. Nao sejais arrogantes comigo e vinde a mim submissos." Bilqis recebeu a carta e consultou seus ministros. Eles queriam guerra. Ela disse: "Quando reis entram numa cidade, a arruinam. Vou enviar presentes e ver com o que os mensageiros voltam."\n\n' +
      'Sulaiman recusou os presentes: "Querem me comprar com bens? O que Deus me deu e melhor do que o que lhes deu." Bilqis decidiu ir pessoalmente. Enquanto viajava, Sulaiman pediu a seus servos que trouxessem o trono dela antes que ela chegasse. Um dos jinns disse: "Eu o trago antes que te levantes." Outro, que tinha conhecimento do Livro, disse: "Eu o trago num piscar de olhos." E o trono apareceu diante de Sulaiman instantaneamente.\n\n' +
      'Quando Bilqis chegou, viu seu proprio trono e ficou abalada. Depois, foi convidada a entrar no palacio. O chao era feito de cristal sobre agua. Ela pensou que era agua e levantou a barra do vestido. Sulaiman explicou: "E um palacio revestido de cristal."\n\n' +
      'Naquele momento, Bilqis entendeu. Ela, que governava um reino poderoso, que adorava o sol, percebeu que havia algo infinitamente maior. Disse: "Meu Senhor, fui injusta comigo mesma. E me submeto, com Sulaiman, a Deus, Senhor dos mundos."\n\n' +
      'Nao foi forca que a converteu. Foi verdade.',
    lesson: 'A inteligencia reconhece a verdade quando a encontra. A verdadeira lideranca e saber quando se curvar.',
    reflection: 'Ha uma verdade na sua vida que voce reconhece mas resiste em aceitar? O que te impede de dar o proximo passo?',
  },

  // ═══════════════════════════════════════════════════════
  // 14. Jonas e a Baleia
  // ═══════════════════════════════════════════════════════
  {
    slug: 'jonas-e-a-baleia',
    title: 'Jonas e a Baleia',
    arabicTitle: 'يونس والحوت',
    surahRef: 'Surata 21 — Al-Anbiya',
    summary: 'Yunus abandona seu povo frustrado, e engolido por uma baleia e clama a Deus na escuridao.',
    narrative:
      'Yunus era profeta. Pregou para seu povo e eles recusaram. Uma vez. Duas. Muitas. Ate que Yunus se encheu. Frustrado, cansado, decepcionado, fez o que nenhum profeta deveria fazer sem permissao divina: foi embora. Abandonou sua missao e partiu num navio.\n\n' +
      'No mar, uma tempestade violenta caiu sobre o navio. Os marinheiros, supersticiosos, sortearam quem deveria ser lancado ao mar para acalmar a tormenta. O nome de Yunus saiu. Tres vezes. Ele foi jogado nas aguas revoltas.\n\n' +
      'Deus enviou uma baleia — ou um peixe gigante — que o engoliu inteiro. Yunus se viu na escuridao tripla: a escuridao da noite, a escuridao do mar e a escuridao do ventre do animal. Tres camadas de trevas. Sem luz, sem saida, sem esperanca humana.\n\n' +
      'Foi ali, no lugar mais solitario e desesperador que um ser humano pode imaginar, que Yunus encontrou a unica coisa que restava: Deus. E clamou com as palavras que o Quran eternizou: "La ilaha illa Anta, Subhanaka, inni kuntu mina adh-dhalimin" — "Nao ha divindade alem de Ti. Gloria a Ti! Eu estava entre os injustos."\n\n' +
      'Nao culpou o povo. Nao culpou Deus. Nao culpou o mar. Disse: "Eu estava entre os injustos." Assumiu responsabilidade. E essa e a chave que abre as portas mais trancadas.\n\n' +
      'Deus ouviu. "Se nao fosse dos que glorificam a Deus, teria permanecido no ventre ate o Dia da Ressurreicao." A baleia o vomitou numa praia. Yunus estava doente, com a pele ferida pelo acido do estomago do animal. Deus fez crescer uma planta para protege-lo e cura-lo.\n\n' +
      'Yunus voltou ao seu povo. E dessa vez, eles acreditaram. Cem mil pessoas ou mais. Deus os livrou do castigo. A missao que Yunus quase abandonou se tornou uma das maiores conversoes da historia dos profetas.',
    lesson: 'Mesmo no fundo do abismo, a porta de Deus esta aberta. Assumir responsabilidade e o primeiro passo para a libertacao.',
    reflection: 'Voce esta no "ventre da baleia"? Num lugar escuro, sem saida? O dua de Yunus esta ai para voce. Ja experimentou repeti-lo com sinceridade?',
  },

  // ═══════════════════════════════════════════════════════
  // 15. O Sonho do Farao
  // ═══════════════════════════════════════════════════════
  {
    slug: 'o-sonho-do-farao',
    title: 'O Sonho do Farao',
    arabicTitle: 'رؤيا الملك',
    surahRef: 'Surata 12 — Yusuf',
    summary: 'O Farao do Egito tem um sonho misterioso que ninguem decifra — exceto Yusuf.',
    narrative:
      'O rei do Egito acordou perturbado. Teve um sonho estranho e vividoo: sete vacas gordas sendo devoradas por sete vacas magras, e sete espigas verdes ao lado de sete secas. Chamou seus conselheiros, magos e interpretes. Todos disseram: "Sao sonhos confusos. Nao somos peritos em interpretar sonhos."\n\n' +
      'Mas Deus nao deixa Seus planos sem executor. Na prisao do rei, anos antes, Yusuf havia interpretado o sonho de um copeiro — e acertado. O copeiro, agora livre e servindo o rei, finalmente lembrou: "Eu vos informarei da interpretacao. Enviem-me." Foi ate Yusuf na prisao.\n\n' +
      'Yusuf nao pediu nada em troca. Nao exigiu liberdade como condicao. Simplesmente interpretou: "Voces plantarao por sete anos consecutivos. O que colherem, deixem nas espigas, exceto o pouco que comerem. Depois virao sete anos dificeis que consumirao o que guardaram. Depois vira um ano em que as pessoas serao socorridas e espremeram frutos."\n\n' +
      'A interpretacao era brilhante nao apenas pela decodificacao, mas pela solucao embutida: Yusuf nao disse apenas o que ia acontecer. Disse o que fazer. Sete anos guardando, planejando, armazenando para enfrentar sete anos de seca. Era economia, estrategia e sabedoria divina num unico conselho.\n\n' +
      'O rei ficou tao impressionado que mandou buscar Yusuf. Mas Yusuf recusou sair sem que sua inocencia fosse provada primeiro. Mandou investigar o caso da esposa do ministro que o acusara falsamente. A verdade veio a tona. A mulher confessou: "Agora a verdade se manifesta. Fui eu quem tentou seduzi-lo. Ele e dos sinceros."\n\n' +
      'So entao Yusuf saiu da prisao — nao como um homem desesperado por liberdade, mas como um homem de honra restaurada. O rei lhe disse: "Hoje voce e para nos uma pessoa de posicao e confianca." Yusuf pediu: "Coloque-me sobre os depositos da terra. Sou guardiao e conhecedor."\n\n' +
      'Assim, um prisioneiro se tornou o segundo homem mais poderoso do Egito. Nao por politica, nao por forca — por sabedoria, paciencia e confianca em Deus.',
    lesson: 'Deus transforma prisao em palacio quando e a hora certa. A paciencia e a competencia andam juntas no plano divino.',
    reflection: 'Voce esta numa "prisao" — uma fase de espera, de invisibilidade? Lembre-se: Yusuf foi da prisao ao trono. O tempo de espera pode ser o tempo de preparacao.',
  },
]
