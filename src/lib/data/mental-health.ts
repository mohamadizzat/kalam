export type MentalHealthTopic = {
  slug: string
  title: string
  arabicConcept: string
  icon: string
  summary: string
  content: string
  quranicVerse: {
    arabic: string
    translation: string
    ref: string
  }
  hadithSupport: string
  practicalSteps: string[]
}

export const mentalHealthTopics: MentalHealthTopic[] = [
  {
    slug: 'ansiedade',
    title: 'Ansiedade',
    arabicConcept: 'التَّوَكُّل',
    icon: 'Wind',
    summary: 'Tawakkul: a confianca em Deus como ancora contra a tempestade interior.',
    content: `A ansiedade e uma das experiencias mais comuns do ser humano. Aquele aperto no peito, a mente que nao para, o medo do que ainda nao aconteceu. O Isla reconhece essa dor e oferece algo profundo: o conceito de Tawakkul — a confianca plena em Deus.

Tawakkul nao significa passividade. Nao e cruzar os bracos e esperar. E fazer o seu melhor, planejar, agir — e depois entregar o resultado a Deus. O Profeta Muhammad (que a paz esteja com ele) disse: "Amarre seu camelo e confie em Deus." Isso e Tawakkul na pratica: responsabilidade humana + confianca divina.

A neurociencia moderna confirma o que a tradicao islamica sempre soube: a respiracao consciente acalma o sistema nervoso. O dhikr (lembranca de Deus) funciona como uma meditacao profunda. Quando voce repete "SubhanAllah" (Gloria a Deus), "Alhamdulillah" (Louvor a Deus), "Allahu Akbar" (Deus e Maior), voce esta ancorando sua mente no presente e conectando-a ao Infinito.

O Quran diz que e pela lembranca de Deus que os coracoes encontram tranquilidade. Isso nao e metafora — e uma prescricao espiritual. Quando a ansiedade apertar, pare. Respire fundo tres vezes. Coloque a mao no peito. Diga: "HasbiyAllahu wa ni'mal wakeel" (Deus me basta, e Ele e o melhor protetor). Sinta o peso saindo dos seus ombros.

A ansiedade muitas vezes nasce da ilusao de controle. Queremos controlar tudo — o futuro, as pessoas, os resultados. O Tawakkul nos liberta dessa ilusao. Voce faz a sua parte. Deus cuida do resto. E quando voce realmente acredita nisso, a ansiedade perde seu poder.

Lembre-se: buscar ajuda profissional tambem e parte do Tawakkul. O Profeta disse: "Busquem o remedio, pois Deus nao criou doenca sem criar cura." Se a ansiedade esta dominando sua vida, procure um profissional. Isso nao e fraqueza — e sabedoria.`,
    quranicVerse: {
      arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      translation: 'Certamente, e pela lembranca de Deus que os coracoes encontram tranquilidade.',
      ref: 'Surah Ar-Ra\'d 13:28',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Amarre seu camelo e confie em Deus." (Tirmidhi). E tambem: "Que maravilhoso e o caso do crente, pois tudo e bom para ele — e isso nao se aplica a ninguem exceto ao crente. Se algo bom lhe acontece, ele agradece, e isso e bom para ele. Se algo ruim lhe acontece, ele tem paciencia, e isso e bom para ele." (Muslim)',
    practicalSteps: [
      'Respire fundo 3 vezes antes de qualquer decisao importante',
      'Pratique dhikr por 5 minutos diarios — repita "SubhanAllah" 33x, "Alhamdulillah" 33x, "Allahu Akbar" 34x',
      'Escreva suas preocupacoes no journal e depois entregue-as a Deus em dua',
      'Faca a Salat al-Istikhara (oracao de orientacao) quando estiver indeciso',
      'Busque ajuda profissional se a ansiedade estiver afetando sua rotina diaria',
      'Antes de dormir, recite Ayat al-Kursi e os tres ultimos capitulos do Quran',
    ],
  },
  {
    slug: 'tristeza',
    title: 'Tristeza',
    arabicConcept: 'الْحُزْن',
    icon: 'CloudRain',
    summary: 'Ate o Profeta chorou. A tristeza e humana — nao e falta de fe.',
    content: `A tristeza e parte da experiencia humana. E o Isla nunca pediu que voce fingisse estar bem. O proprio Profeta Muhammad (que a paz esteja com ele) viveu o que ficou conhecido como o "Ano da Tristeza" (Aam al-Huzn) — quando perdeu sua amada esposa Khadijah e seu tio Abu Talib no mesmo periodo. Ele chorou. Ele sentiu dor. Ele era humano.

Quando seu filho Ibrahim morreu ainda bebe, o Profeta segurou-o nos bracos e as lagrimas escorreram pelo seu rosto. Os companheiros ficaram surpresos, e ele disse: "Os olhos choram, o coracao se entristece, mas so dizemos o que agrada ao nosso Senhor." Isso e a licao mais poderosa sobre tristeza no Isla: sentir nao e pecado. Chorar nao e fraqueza. O que importa e o que voce faz com a dor.

O Quran reconhece a tristeza em diversas passagens. O profeta Yaqub (Jaco) chorou tanto pela perda de seu filho Yusuf (Jose) que perdeu a visao — e Deus nao o repreendeu por isso. A tristeza de Yaqub era tao profunda que ele disse: "So exponho minha angustia e minha tristeza a Deus." Essa e a chave: nao suprima. Exponha a Deus.

A diferenca entre tristeza saudavel e tristeza destrutiva esta na direcao. A tristeza saudavel te leva para mais perto de Deus — voce busca conforto Nele, voce faz dua, voce chora na prostacao. A tristeza destrutiva te isola, te faz perder esperanca, te afasta de tudo e de todos.

O Quran nos lembra repetidamente: "Com a dificuldade vem a facilidade." E essa promessa e repetida duas vezes na mesma surah para enfatizar que a facilidade e maior que a dificuldade. Sua tristeza nao e permanente. Sua dor nao e o fim da historia. Deus ve cada lagrima que voce derrama.

Se voce esta triste agora, saiba: Deus nao te esqueceu. E se a tristeza persiste, buscar ajuda de um profissional e um ato de fe, nao de fraqueza.`,
    quranicVerse: {
      arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      translation: 'Pois, com a dificuldade, vem a facilidade. Certamente, com a dificuldade, vem a facilidade.',
      ref: 'Surah Ash-Sharh 94:5-6',
    },
    hadithSupport: 'Quando seu filho Ibrahim faleceu, o Profeta Muhammad (que a paz esteja com ele) disse: "Os olhos derramam lagrimas e o coracao se entristece, mas nos so dizemos o que agrada ao nosso Senhor. E, pela sua partida, o Ibrahim, estamos verdadeiramente tristes." (Bukhari e Muslim)',
    practicalSteps: [
      'Permita-se chorar — lagrimas sao purificacao, nao fraqueza',
      'Faca dua na prostacao (sujud) — e o momento mais proximo de Deus',
      'Converse com alguem de confianca sobre o que sente',
      'Leia Surah Ad-Duha (93) — foi revelada quando o Profeta tambem estava triste',
      'Pratique atos de bondade — ajudar outros alivia a propria dor',
      'Se a tristeza durar mais de 2 semanas sem melhora, procure um profissional de saude mental',
    ],
  },
  {
    slug: 'raiva',
    title: 'Raiva',
    arabicConcept: 'الْغَضَب',
    icon: 'Flame',
    summary: 'O forte nao e quem vence na luta. E quem controla a si mesmo na raiva.',
    content: `A raiva e uma emocao natural. Ate o Profeta Muhammad (que a paz esteja com ele) sentia raiva — mas nunca por motivos pessoais. Ele ficava irado quando via injustica, quando os direitos dos fracos eram violados. A questao nao e nunca sentir raiva, mas o que voce faz com ela.

O Profeta deu um dos conselhos mais praticos da historia sobre controle da raiva. Um homem veio ate ele e pediu: "Me de um conselho." O Profeta disse: "Nao fique com raiva." O homem repetiu o pedido, e o Profeta repetiu: "Nao fique com raiva." Tres vezes a mesma resposta. Porque a raiva descontrolada destroi relacionamentos, saude e alma.

Mas o Profeta nao parou no conselho teorico. Ele deu ferramentas praticas: Se voce esta com raiva e esta de pe, sente-se. Se ainda esta com raiva, deite-se. Mude sua posicao fisica para mudar seu estado emocional. A neurociencia moderna confirma: a postura corporal afeta diretamente o estado emocional. O Profeta sabia disso ha 1400 anos.

Outra ferramenta profetica: fazer wudu (ablucao) quando sentir raiva. "A raiva vem do fogo, e o fogo se apaga com agua", disse o Profeta. Lavar o rosto, as maos, os pes com agua fria — e um reset fisico e espiritual. Voce interrompe o ciclo de raiva com uma acao consciente.

O Quran elogia aqueles que "controlam sua raiva e perdoam as pessoas." Nao diz "aqueles que nunca sentem raiva" — porque isso seria impossivel. Diz aqueles que CONTROLAM. A maestria nao e ausencia de emocao. E a capacidade de sentir sem ser dominado.

A raiva cronica muitas vezes esconde dor mais profunda: medo, frustracao, impotencia. Quando a raiva aparece com frequencia, investigue o que esta por tras. O que realmente esta doendo? A raiva pode ser um mensageiro — escute o que ela tem a dizer, mas nao deixe que ela tome o volante.

Buscar istiazah (refugio em Deus contra Shaitan) tambem e prescricao profetica para momentos de raiva: "Audhu billahi min ash-shaitan ir-rajim" (Busco refugio em Deus contra Satanas, o amaldicoado).`,
    quranicVerse: {
      arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
      translation: 'E aqueles que controlam sua raiva e perdoam as pessoas — e Deus ama os que fazem o bem.',
      ref: 'Surah Ali \'Imran 3:134',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "O forte nao e aquele que vence os outros na luta. O forte e aquele que controla a si mesmo no momento da raiva." (Bukhari e Muslim). E tambem: "Se algum de voces ficar com raiva, que se cale." (Ahmad)',
    practicalSteps: [
      'Se esta de pe com raiva, sente-se. Se continua, deite-se (conselho profetico)',
      'Faca wudu com agua fria — interrompa o ciclo fisico da raiva',
      'Diga "Audhu billahi min ash-shaitan ir-rajim" (Busco refugio em Deus)',
      'Conte ate 10 antes de responder qualquer coisa no calor do momento',
      'Identifique o sentimento por tras da raiva — medo? frustracao? injustica?',
      'Se a raiva e frequente e intensa, considere acompanhamento terapeutico',
    ],
  },
  {
    slug: 'solidao',
    title: 'Solidao',
    arabicConcept: 'الْوَحْدَة',
    icon: 'UserX',
    summary: 'Deus esta mais perto de voce do que sua propria veia jugular.',
    content: `A solidao e uma epidemia silenciosa. Voce pode estar cercado de pessoas e ainda assim se sentir completamente so. O Isla tem uma resposta profunda para isso — e ela comeca com uma verdade transformadora: voce nunca esta sozinho.

O Quran declara que Deus esta mais proximo do ser humano do que sua propria veia jugular. Isso nao e poesia. E realidade espiritual. Quando voce sente que ninguem te entende, ninguem te ve, ninguem se importa — Deus ve. Deus ouve. Deus sabe o que voce nao consegue nem colocar em palavras.

A Salah (oracao) e o antidoto supremo contra a solidao. Cinco vezes ao dia, voce tem um encontro marcado com o Criador do universo. Nao importa onde voce esta — no quarto, no trabalho, em outro pais. Voce se volta para a qibla, coloca a testa no chao, e conversa com Aquele que nunca te abandona. Na prostacao, voce esta no ponto mais proximo de Deus. E ali, voce pode dizer tudo.

A dua (suplica) e a arma do solitario. O Quran traz a promessa: "E quando Meus servos te perguntarem sobre Mim — Eu estou proximo. Respondo ao chamado de quem Me chama quando Me invoca." Deus nao disse "talvez Eu responda" ou "se Eu quiser." Ele disse: "Eu respondo." Ponto.

Mas o Isla tambem ensina que o ser humano precisa de comunidade. O Profeta disse: "O crente para o crente e como um edificio — cada parte sustenta a outra." Solidao cronica pode ser um sinal de que voce precisa se reconectar: com a mesquita, com um grupo de estudo, com irmaos na fe. Nao precisa ser um grande circulo. Bastam algumas conexoes genuinas.

O Profeta Musa (Moises) sentiu solidao profunda quando fugiu do Egito sozinho, sem nada. Ele se sentou a sombra e fez uma dua simples: "Meu Senhor, eu estou necessitado de qualquer bem que Tu me envies." E Deus respondeu. Voce tambem pode fazer essa dua — agora.

Se a solidao esta cronica e voce sente que nada preenche esse vazio, pode haver questoes emocionais mais profundas que merecem atencao profissional. Buscar ajuda e um ato de coragem e de fe.`,
    quranicVerse: {
      arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
      translation: 'E quando Meus servos te perguntarem sobre Mim, certamente Eu estou proximo. Respondo ao chamado de quem Me chama quando Me invoca.',
      ref: 'Surah Al-Baqarah 2:186',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "O crente para o crente e como um edificio — cada parte sustenta a outra." E ele entrecruzou os dedos para ilustrar. (Bukhari e Muslim). E tambem: "Quem alivia uma dificuldade de um crente neste mundo, Deus aliviara uma dificuldade dele no Dia do Juizo." (Muslim)',
    practicalSteps: [
      'Faca dua em momentos de solidao — converse com Deus como conversaria com um amigo',
      'Nunca abandone a Salah — e seu encontro diario garantido com Deus',
      'Busque uma comunidade: mesquita, grupo de estudo, circulo de dua',
      'Seja voce quem da o primeiro passo — envie uma mensagem, convide para um cafe',
      'Pratique atos de bondade — ajudar outros cria conexao genuina',
      'Se a solidao persiste e causa sofrimento, busque apoio profissional',
    ],
  },
  {
    slug: 'autoestima',
    title: 'Autoestima',
    arabicConcept: 'الْكَرَامَة',
    icon: 'Crown',
    summary: 'Deus honrou os filhos de Adao. Voce tem valor por existir.',
    content: `Voce ja se sentiu insuficiente? Pequeno demais? Sem valor? O Isla tem uma mensagem radical para voce: Deus honrou os filhos de Adao. Nao alguns deles. Todos. Incluindo voce.

O Quran declara com clareza absoluta: "Nos honramos os filhos de Adao." Essa honra nao depende da sua conta bancaria, da sua aparencia, do seu curriculo ou da aprovacao dos outros. Essa honra vem do Criador. E ela e inalienavel — ninguem pode tirar de voce o que Deus te deu.

A crise de autoestima moderna nasce da comparacao. Redes sociais, padroes impossiveis, a corrida por validacao externa. O Isla oferece uma base diferente para o valor proprio: voce foi criado por Deus, com proposito, com alma (ruh), com a capacidade de ser khalifah (representante) de Deus na Terra. Isso e extraordinario.

Deus nao comete erros. Sua cor, sua historia, suas circunstancias — nada disso e acidente. O Quran diz: "Criamos o ser humano na melhor forma." Voce nao precisa se encaixar no molde de ninguem. Voce foi moldado por Deus.

Mas autoestima islamica nao e arrogancia. E o equilibrio perfeito: reconhecer que voce tem valor porque Deus te deu valor, e ao mesmo tempo manter a humildade de saber que tudo vem Dele. O crente caminha com dignidade (karamah), nao com orgulho (kibr). Dignidade diz: "Eu tenho valor." Orgulho diz: "Eu sou melhor que os outros." A diferenca e enorme.

O Profeta Muhammad (que a paz esteja com ele) era o mais confiante dos seres humanos e, ao mesmo tempo, o mais humilde. Ele remendava suas proprias roupas, ordenhava suas cabras, sentava no chao com os pobres. Sua confianca nao vinha de status — vinha de sua relacao com Deus.

Quando voce se sentir sem valor, lembre-se: o mesmo Deus que criou as galaxias, os oceanos e as montanhas — criou voce. E Ele disse que te honrou. Quem e qualquer ser humano para contradizer Deus?

Se a baixa autoestima esta afetando profundamente sua vida, seus relacionamentos e sua capacidade de funcionar, considere buscar ajuda de um profissional. Curar-se e honrar o corpo e a alma que Deus te deu.`,
    quranicVerse: {
      arabic: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
      translation: 'E certamente honramos os filhos de Adao.',
      ref: 'Surah Al-Isra 17:70',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Deus nao olha para suas formas e aparencias, mas olha para seus coracoes e acoes." (Muslim). E tambem: "Nao entra no Paraiso quem tem um atomo de arrogancia no coracao." Um homem perguntou: "E se alguem gosta de vestir-se bem?" Ele disse: "Deus e Belo e ama a beleza. Arrogancia e rejeitar a verdade e desprezar as pessoas." (Muslim)',
    practicalSteps: [
      'Todas as manhas, lembre-se: "Deus me honrou. Meu valor nao depende de ninguem."',
      'Reduza o tempo em redes sociais que geram comparacao — proteja sua mente',
      'Liste 3 coisas pelas quais voce e grato sobre si mesmo (nao sobre conquistas, sobre quem voce e)',
      'Repita o dhikr "SubhanAllah" — voce e criacao do Glorioso',
      'Faca algo que te desafia — crescer fortalece a percepcao de valor',
      'Se pensamentos de desvalia sao constantes, procure acompanhamento psicologico',
    ],
  },
  {
    slug: 'perdao',
    title: 'Perdao',
    arabicConcept: 'الْعَفْو',
    icon: 'HandHeart',
    summary: 'Perdoar nao e esquecer. E libertar seu coracao do peso que o outro colocou.',
    content: `Perdoar e uma das coisas mais dificeis que um ser humano pode fazer. E tambem uma das mais libertadoras. O Isla coloca o perdao no centro da vida espiritual — nao como fraqueza, mas como forca suprema.

O Quran nos ensina que Deus e Al-Afuw — Aquele que apaga os pecados como se nunca tivessem existido. E Al-Ghafur — Aquele que cobre e perdoa repetidamente. Se Deus, que tem todo o poder, escolhe perdoar — quem somos nos para nos agarrar ao ressentimento?

A historia mais poderosa de perdao na vida do Profeta Muhammad (que a paz esteja com ele) e o dia da conquista de Meca. Ele voltou a cidade de onde foi expulso, perseguido, onde seus companheiros foram torturados. Ele tinha todo o poder para vinganca. E o que ele fez? Perdoou a todos. Incluindo Hind, a mulher que mandou matar seu tio Hamza e mutilou seu corpo. "Vao. Voces sao livres", ele disse.

Mas o perdao islamico nao e ingenuidade. Perdoar nao significa aceitar abuso. Nao significa fingir que a dor nao existiu. Nao significa dar acesso novamente a quem te machucou. Perdoar e uma decisao interna: "Eu solto esse peso. Eu nao vou mais carregar veneno esperando que o outro morra."

O perdao mais dificil muitas vezes e o autoperdao. Muitos de nos carregamos culpa por erros passados, decisoes ruins, momentos de fraqueza. O Quran traz a mensagem mais esperancosa possivel: "Diga: O Meus servos que exageraram contra si mesmos, nao desesperem da misericordia de Deus. Certamente Deus perdoa todos os pecados." TODOS. Sem excecao.

O Profeta disse que Deus se alegra mais com o arrependimento de Seu servo do que uma pessoa que perdeu seu camelo no deserto e o reencontrou. Deus QUER te perdoar. A questao e: voce vai se permitir receber esse perdao?

Ressentimento e como beber veneno e esperar que o outro morra. Liberte-se. Nao pelo outro — por voce. Por sua paz. Por sua alma.`,
    quranicVerse: {
      arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',
      translation: 'Diga: O Meus servos que exageraram contra si mesmos, nao desesperem da misericordia de Deus. Certamente Deus perdoa todos os pecados.',
      ref: 'Surah Az-Zumar 39:53',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Quem nao perdoa os outros, nao sera perdoado por Deus." (Muslim). E no dia da conquista de Meca, quando tinha poder total sobre seus perseguidores, ele disse: "Vao, pois voces sao livres." (Bayhaqi)',
    practicalSteps: [
      'Identifique quem voce precisa perdoar — incluindo a si mesmo',
      'Faca dua pedindo a Deus que amoleça seu coracao para o perdao',
      'Escreva uma carta de perdao (nao precisa enviar) — coloque tudo no papel',
      'Lembre-se: perdoar nao e reconciliar. Voce pode perdoar e manter distancia saudavel',
      'Repita "Allahumma innaka afuwwun tuhibbul afwa fa\'fu anni" (O Deus, Tu es Perdoador e amas o perdao, perdoa-me)',
      'Se magoas profundas estao paralisando sua vida, busque ajuda terapeutica',
    ],
  },
  {
    slug: 'gratidao',
    title: 'Gratidao',
    arabicConcept: 'الشُّكْر',
    icon: 'Heart',
    summary: 'Shukr: a gratidao que transforma a percepcao e multiplica as bencaos.',
    content: `A gratidao no Isla nao e apenas dizer "obrigado." E uma transformacao completa da forma como voce ve a vida. O conceito de Shukr (gratidao) e tao central que Deus faz uma promessa direta no Quran: "Se voces forem gratos, Eu certamente lhes aumentarei."

Essa promessa e revolucionaria. Deus nao disse que aumentaria se voce trabalhasse mais, se fosse mais inteligente ou se tivesse mais sorte. Ele disse: se voce for grato. A gratidao e, literalmente, uma chave para a abundancia.

A psicologia positiva moderna "descobriu" nos ultimos 20 anos o que o Isla ensina ha 1400: pessoas gratas sao mais felizes, mais saudaveis, dormem melhor e tem relacionamentos mais fortes. Estudos mostram que a pratica regular de gratidao reconecta circuitos neurais e reduz sintomas de depressao e ansiedade.

O Profeta Muhammad (que a paz esteja com ele) era o exemplo supremo de gratidao. Mesmo quando tinha tao pouco que amarrava pedras no estomago por fome, ele agradecia. Ele orava tanto durante a noite que seus pes inchavam, e quando perguntado por que, respondeu: "Nao devo ser um servo grato?"

A gratidao islamica opera em tres niveis: com o coracao (sentir a bencao), com a lingua (expressar agradecimento), e com as acoes (usar a bencao para o bem). Nao basta dizer "Alhamdulillah" — voce precisa sentir e agir.

Uma pratica transformadora: toda noite antes de dormir, nomeie 3 bencaos especificas do dia. Nao genericas como "saude" — especificas. "A mensagem que recebi. A comida que estava boa. O momento de silencio que tive." O cerebro comeca a procurar coisas boas durante o dia porque sabe que vai precisar lista-las a noite. Isso muda tudo.

O contrario de gratidao no Isla e kufr (ingratidao), que vem da mesma raiz de "incredulidade." Quando voce nao e grato, voce esta, em certo sentido, negando as bencaos de Deus. A gratidao nao e opcional — e parte fundamental da fe.

Olhe ao redor agora. Respire. Voce esta vivo. Isso, por si so, ja e motivo suficiente para dizer: Alhamdulillah.`,
    quranicVerse: {
      arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
      translation: 'Se voces forem gratos, Eu certamente lhes aumentarei.',
      ref: 'Surah Ibrahim 14:7',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Olhem para quem esta abaixo de voces e nao olhem para quem esta acima, pois isso e mais adequado para que nao desdenhem as bencaos de Deus sobre voces." (Bukhari e Muslim). E quando questionado por que se esforçava tanto na adoracao, disse: "Nao devo ser um servo grato?" (Bukhari)',
    practicalSteps: [
      'Comece e termine cada dia com "Alhamdulillah" — faca disso um habito automatico',
      'Toda noite, escreva 3 bencaos ESPECIFICAS do dia no seu journal',
      'Olhe para quem tem menos, nao para quem tem mais — perspectiva e tudo',
      'Agradeca as pessoas ao seu redor — gratidao se multiplica quando e compartilhada',
      'Depois de cada Salah, faca dhikr de agradecimento (SubhanAllah 33x, Alhamdulillah 33x, Allahu Akbar 34x)',
      'Transforme gratidao em acao: use cada bencao para servir aos outros',
    ],
  },
  {
    slug: 'medo-do-futuro',
    title: 'Medo do Futuro',
    arabicConcept: 'الْقَدَر',
    icon: 'Compass',
    summary: 'Qadr: o decreto divino que te liberta da ilusao de controle total.',
    content: `O medo do futuro e um dos grandes ladroes de paz. "E se der errado?" "E se eu fracassar?" "E se acontecer o pior?" A mente projeta cenarios catastroficos e o corpo reage como se ja estivessem acontecendo. O Isla oferece um antidoto poderoso: o conceito de Qadr (decreto divino).

Qadr nao e fatalismo. Nao e "tanto faz, o que tiver que ser sera." Qadr e a crenca de que Deus tem um plano, que Ele sabe o que voce nao sabe, e que — mesmo quando as coisas parecem terriveis — existe sabedoria por tras. Qadr e liberdade: voce faz o seu melhor e confia que o resultado esta nas maos de Quem sabe tudo.

O Quran nos ensina: "Talvez voces odeiem algo que e bom para voces e amem algo que e ruim para voces. Deus sabe e voces nao sabem." Quantas vezes voce olhou para tras e percebeu que algo que parecia terrivel na hora foi, na verdade, o melhor que poderia ter acontecido? Aquele emprego que voce nao conseguiu, aquele relacionamento que acabou, aquela porta que se fechou — abriu caminho para algo melhor.

O Profeta Muhammad (que a paz esteja com ele) ensinou a diferenca entre planejamento e preocupacao. Planejar e usar a inteligencia que Deus te deu. Preocupar e sofrer por algo que ainda nao aconteceu e pode nunca acontecer. Ele disse: "Busque aquilo que te beneficia, peca ajuda a Deus e nao se sinta impotente."

Um exercicio poderoso: quando o medo do futuro apertar, pergunte-se: "Deus ja cuidou de mim antes?" A resposta e sim. Sempre. Voce sobreviveu a 100% dos seus piores dias. Cada crise que voce achou que seria o fim — nao foi. Voce esta aqui. Lendo isso. Respirando. Deus te trouxe ate aqui. Ele nao vai te abandonar agora.

A Salat al-Istikhara (oracao de orientacao) e a ferramenta islamica para decisoes sobre o futuro. Em vez de ficar paralisado pela indecisao, voce pede orientacao a Deus. E depois age com confianca, sabendo que fez o que podia.

Medo de planejar e saudavel — ele nos faz preparar. Medo que paralisa e destrutivo — ele nos impede de viver. Saiba a diferenca. Planeje com sabedoria. Confie com Tawakkul. E viva o presente, porque e a unica coisa que voce realmente tem.`,
    quranicVerse: {
      arabic: 'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ',
      translation: 'Talvez voces odeiem algo que e bom para voces e talvez amem algo que e ruim para voces. Deus sabe e voces nao sabem.',
      ref: 'Surah Al-Baqarah 2:216',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Busque aquilo que te beneficia, peca ajuda a Deus e nao se sinta impotente. Se algo te acontecer, nao diga: \'Se eu tivesse feito isso, teria acontecido aquilo.\' Diga: \'Qadr Allah, wa ma sha\'a fa\'al\' (Deus decretou, e o que Ele quis, fez). Pois o \'se\' abre a porta para a acao de Shaitan." (Muslim)',
    practicalSteps: [
      'Separe "planejamento" de "preocupacao" — planeje com acao, nao com ansiedade',
      'Faca Salat al-Istikhara antes de decisoes importantes',
      'Quando o medo apertar, lembre-se: voce sobreviveu a 100% dos seus piores dias',
      'Escreva seus medos no papel — expostos a luz, eles perdem forca',
      'Repita: "HasbiyAllahu wa ni\'mal wakeel" (Deus me basta e e o melhor protetor)',
      'Foque no que voce PODE controlar e solte o que nao pode',
    ],
  },
  {
    slug: 'luto',
    title: 'Luto',
    arabicConcept: 'إِنَّا لِلَّهِ',
    icon: 'Flower2',
    summary: 'De Deus viemos e a Ele retornamos. O luto e sagrado.',
    content: `Perder alguem que amamos e a dor mais profunda que um ser humano pode sentir. O Isla nao minimiza essa dor. Nao diz "para de chorar." Nao diz "supere." Diz: "Inna lillahi wa inna ilayhi raji'un" — De Deus viemos e a Ele retornamos. Essa frase nao e apenas protocolo. E uma ancora para a alma em tempestade.

Quando o Profeta Muhammad (que a paz esteja com ele) perdeu seu filho Ibrahim, ele o segurou nos bracos enquanto o bebe dava seus ultimos suspiros. Lagrimas escorriam pelo rosto do Profeta. Abdur-Rahman ibn Auf ficou surpreso e perguntou: "Ate voce, o Mensageiro de Deus?" E ele respondeu: "Isso e misericordia. Os olhos choram, o coracao se entristece, mas nos so dizemos o que agrada ao nosso Senhor."

O luto islamico tem estrutura — e isso e sabedoria profunda. Os tres primeiros dias sao de luto intenso, onde a comunidade se mobiliza: traz comida, faz visitas, reza junto. Isso impede o isolamento que pode tornar o luto destrutivo. A viuva tem um periodo de iddah (quatro meses e dez dias) — um espaco sagrado para processar a perda.

Mas o Isla tambem ensina que o luto excessivo que leva ao desespero da misericordia de Deus nao e saudavel. A diferenca e sutil mas importante: chorar e natural e saudavel. Reclamar contra o decreto de Deus e o que a tradicao alerta. Tristeza sim. Revolta contra Deus nao.

O Quran traz uma promessa que e balsamo para quem perde alguem: a vida apos a morte e real. Essa nao e uma despedida final. E um "ate logo." Os que partiram nao deixaram de existir — estao em outra dimensao. E para os crentes que foram pacientes, ha a promessa do reencontro no Paraiso.

O Profeta disse: "Quando o filho de um servo de Deus morre, Deus pergunta aos anjos: 'Voces tomaram a alma do filho do Meu servo?' Eles dizem sim. Deus pergunta: 'Voces tomaram o fruto do seu coracao?' Eles dizem sim. Deus pergunta: 'O que Meu servo disse?' Eles respondem: 'Ele Te louvou e disse Inna lillahi wa inna ilayhi raji\'un.' Deus diz: 'Construam para Meu servo uma casa no Paraiso e chamem-na de Bayt al-Hamd (Casa do Louvor).'"

Se voce esta em luto agora: sua dor e valida. Suas lagrimas sao sagradas. Deus ve cada uma delas. E com o tempo — no tempo de Deus, nao no dos outros — a ferida vai cicatrizar. A saudade talvez nunca passe completamente. Mas a dor aguda vai se transformar em lembranca carinhosa. Tenha paciencia consigo mesmo nesse processo.`,
    quranicVerse: {
      arabic: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
      translation: 'Aqueles que, quando uma calamidade os atinge, dizem: "De Deus viemos e a Ele retornamos."',
      ref: 'Surah Al-Baqarah 2:156',
    },
    hadithSupport: 'Quando seu filho Ibrahim faleceu, o Profeta Muhammad (que a paz esteja com ele) disse: "Os olhos derramam lagrimas e o coracao se entristece, mas nos so dizemos o que agrada ao nosso Senhor. E pela sua partida, o Ibrahim, estamos verdadeiramente tristes." (Bukhari). E tambem: "A paciencia verdadeira e aquela que se tem no primeiro momento do choque." (Bukhari)',
    practicalSteps: [
      'Diga "Inna lillahi wa inna ilayhi raji\'un" — essa frase e medicina para a alma',
      'Permita-se chorar e sentir — suprimir luto causa dano a longo prazo',
      'Aceite ajuda da comunidade — voce nao precisa passar por isso sozinho',
      'Faca dua pela pessoa que partiu — isso mantem a conexao espiritual',
      'Faca sadaqah (caridade) em nome de quem partiu — as boas acoes continuam beneficiando-os',
      'Se o luto nao diminui com o tempo ou esta afetando severamente sua funcionalidade, procure um psicologo especializado em luto',
    ],
  },
  {
    slug: 'burnout',
    title: 'Burnout',
    arabicConcept: 'الْوَسَطِيَّة',
    icon: 'BatteryLow',
    summary: 'Wasatiyyah: o equilibrio profetico. Descansar tambem e adoracao.',
    content: `Burnout. Esgotamento. Aquela sensacao de que voce esta funcionando no automatico, que nao tem mais nada pra dar, que ate coisas simples parecem montanhas. O mundo moderno glorifica a exaustao. O Isla oferece algo radicalmente diferente: Wasatiyyah — o caminho do meio, o equilibrio.

O Quran descreve a comunidade muculmana como uma "nacao do meio" — nem extremo para um lado, nem para o outro. Esse principio se aplica a TUDO, incluindo o trabalho e a adoracao. Sim, ate adorar demais pode ser um problema quando leva a esgotamento.

O Profeta Muhammad (que a paz esteja com ele) era absolutamente firme nisso. Quando soube que tres de seus companheiros decidiram — um jejuar todos os dias, outro rezar a noite toda sem dormir, e outro nunca se casar — ele os corrigiu: "Eu jejuo e quebro o jejum, rezo e durmo, e me caso. Quem se afasta da minha pratica nao e dos meus." O Profeta dormia. Descansava. Brincava com seus netos. Sorria.

Abdullah ibn Amr era um companheiro que jejuava todos os dias e rezava a noite toda. O Profeta disse a ele: "Seu corpo tem um direito sobre voce. Seus olhos tem um direito sobre voce. Sua familia tem um direito sobre voce." Essa e uma prescricao anti-burnout de 1400 anos. Cada parte da sua vida tem direito sobre voce — e negligenciar qualquer uma delas em nome de outra e desequilibrio.

O descanso no Isla nao e preguica — e obrigacao. Dormir e uma forma de adoracao quando feito com intencao. O Quran diz: "E fizemos do sono um descanso." Deus CRIOU o sono como bencao. Ficar acordado ate tarde "produzindo" nao e virtude se esta destruindo sua saude.

O burnout muitas vezes nasce de um lugar mais profundo: a necessidade de provar seu valor atraves de produtividade. Mas seu valor ja esta estabelecido — Deus te honrou por existir, nao por produzir. Voce e um ser humano, nao um ser produtivo.

Sinais de burnout: cansaco que o sono nao resolve, irritabilidade constante, sensacao de vazio, perda de motivacao ate para coisas que voce amava. Se voce se reconhece aqui, pare. Nao e fraqueza. E seu corpo e sua alma gritando por equilibrio.

O Profeta disse: "O mais amado das acoes para Deus e o mais consistente, mesmo que seja pouco." Melhor fazer pouco com consistencia do que muito ate quebrar. Moderacao. Equilibrio. Wasatiyyah. Esse e o caminho.`,
    quranicVerse: {
      arabic: 'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',
      translation: 'E assim fizemos de voces uma nacao do meio (equilibrada).',
      ref: 'Surah Al-Baqarah 2:143',
    },
    hadithSupport: 'O Profeta Muhammad (que a paz esteja com ele) disse: "Seu corpo tem um direito sobre voce, seus olhos tem um direito sobre voce, sua esposa tem um direito sobre voce." (Bukhari). E tambem: "A acao mais amada por Deus e a mais consistente, mesmo que seja pouca." (Bukhari e Muslim)',
    practicalSteps: [
      'Defina horarios claros de trabalho e descanso — e respeite ambos',
      'Durma o suficiente — o Profeta dormia apos Isha e acordava para Tahajjud, respeitando o corpo',
      'Diga "nao" sem culpa — voce nao pode servir a todos se estiver destruido',
      'Reserve tempo para coisas que te dao prazer sem produtividade — lazer e ibadah (adoracao)',
      'Faca a Salah com calma e presenca — 5 pausas obrigatorias no dia sao um reset natural',
      'Se o esgotamento e persistente e afeta seu funcionamento, busque ajuda profissional',
    ],
  },
]
