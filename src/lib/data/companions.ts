export type CompanionProfile = {
  slug: string
  name: string
  arabicName: string
  title: string
  period: string
  summary: string
  biography: string
  virtues: string[]
  famousQuotes: { arabic: string; translation: string }[]
  legacy: string
}

export const companions: CompanionProfile[] = [
  {
    slug: 'abu-bakr',
    name: 'Abu Bakr as-Siddiq',
    arabicName: 'أبو بكر الصديق',
    title: 'O Verdadeiro',
    period: '573-634 d.C. — Primeiro Califa',
    summary: 'O melhor amigo do Profeta, primeiro homem adulto a aceitar o Islam, e primeiro Califa da historia islamica.',
    biography: `Existe um tipo de amizade que transcende o sangue, a politica e o tempo. A amizade entre Muhammad e Abu Bakr e a prova de que isso existe. Antes do Islam, antes de qualquer revelacao, Abu Bakr ja era conhecido em Meca por algo raro: sua honestidade. Era comerciante rico, respeitado por todas as tribos, e nenhuma pessoa em Meca tinha algo negativo a dizer sobre ele. Quando Muhammad recebeu a primeira revelacao e contou a Abu Bakr, ele nao hesitou. Nao pediu provas. Nao pediu um milagre. Simplesmente disse: "Eu acredito em voce." Sem pausa. Sem duvida. Por isso recebeu o titulo de as-Siddiq — O Verdadeiro, aquele que confirma a verdade sem hesitacao.

Abu Bakr nao apenas acreditou — ele agiu. Usou toda a sua fortuna para libertar escravos muculmanos que estavam sendo torturados em Meca. Bilal ibn Rabah, que se tornaria a voz mais famosa do Islam, foi comprado e libertado por Abu Bakr. Quando os senhores de escravos queimavam Bilal sob o sol do deserto, Abu Bakr pagou o preco exorbitante que pediram e o libertou. Fez o mesmo com sete outros escravos. Gastou tudo. Quando seu proprio pai o criticou por desperdicar sua fortuna com "escravos fracos", Abu Bakr respondeu que nao buscava forca militar — buscava a libertacao de almas.

Na noite da Hijrah — a migracao de Meca para Medina — foi Abu Bakr quem acompanhou Muhammad pela estrada mais perigosa do mundo. Assassinos os cercavam. A recompensa pela cabeca de Muhammad era de 100 camelos — uma fortuna. Quando se esconderam na caverna de Thawr, uma aranha teceu sua teia na entrada e uma pomba fez ninho ali. Os perseguidores chegaram ate a entrada da caverna. Abu Bakr tremeu de medo — nao por si mesmo, mas pelo Profeta. Muhammad olhou para ele e disse: "O que pensas de dois cuja companhia inclui Deus como terceiro?" Esse momento esta registrado no Alcorao (9:40). Abu Bakr e o unico companheiro mencionado diretamente no Livro Sagrado nesse contexto.

Quando Muhammad faleceu, a comunidade islamica entrou em choque. Homens fortes choravam nas ruas. Umar, o mais temido guerreiro de Meca, sacou a espada e ameacou matar qualquer um que dissesse que Muhammad havia morrido. Foi Abu Bakr quem subiu ao pulpito e disse as palavras que salvaram a comunidade do colapso: "Quem adorava Muhammad, saiba que Muhammad morreu. Quem adora Deus, saiba que Deus esta vivo e nunca morre." Naquele momento, Abu Bakr nao era apenas o amigo mais proximo — era o lider que a nacao precisava.

Como primeiro Califa, Abu Bakr enfrentou a maior crise da historia islamica primitiva. Tribos inteiras abandonaram o Islam apos a morte do Profeta. Guerras de apostasia ameacavam destruir tudo que havia sido construido. Abu Bakr, com um exercito menor e recursos limitados, tomou a decisao mais corajosa: lutar em todas as frentes simultaneamente. Recusou-se a negociar com quem abandonara a fe. Recusou-se a aceitar uma versao parcial do Islam. Enviou Khalid ibn al-Walid e outros comandantes para unificar a Arabia. Em menos de dois anos, a Arabia estava unida novamente.

Abu Bakr tambem iniciou a compilacao do Alcorao em um unico volume, um projeto que Uthman completaria depois. Quando morreu, em 634 d.C., sua filha Aisha procurou alguma heranca. Nao encontrou nada. Abu Bakr havia doado tudo ao tesouro publico. Morreu pobre. Morreu leal. Morreu como o homem que Muhammad chamou de "o melhor dos homens depois dos profetas."`,
    virtues: [
      'Lealdade absoluta — nunca duvidou do Profeta, nem por um segundo',
      'Generosidade radical — gastou toda a sua fortuna para libertar escravos e sustentar a causa',
      'Coragem silenciosa — enfrentou o perigo ao lado de Muhammad sem buscar reconhecimento',
      'Sabedoria em crise — manteve a comunidade unida no momento mais fragil',
      'Humildade — morreu sem posses, tendo doado tudo ao tesouro publico',
    ],
    famousQuotes: [
      {
        arabic: 'من كان يعبد محمداً فإن محمداً قد مات، ومن كان يعبد الله فإن الله حي لا يموت',
        translation: 'Quem adorava Muhammad, saiba que Muhammad morreu. Quem adora Deus, saiba que Deus esta vivo e nunca morre.',
      },
      {
        arabic: 'ما ظنك باثنين الله ثالثهما',
        translation: 'O que pensas de dois cuja companhia inclui Deus como terceiro?',
      },
      {
        arabic: 'أحب الأعمال إلى الله أدومها وإن قل',
        translation: 'As acoes mais amadas por Deus sao as mais constantes, mesmo que pequenas.',
      },
    ],
    legacy: `Abu Bakr e a prova de que grandeza nao exige espada. Ele nunca foi o mais forte, o mais temido ou o mais eloquente. Mas foi o mais leal, o mais generoso e o mais firme. Em dois anos como Califa, salvou o Islam da desintegracao, unificou a Arabia, e iniciou a compilacao do Alcorao. Quando o mundo islamico lembra de Abu Bakr, nao lembra de conquistas militares — lembra de um homem que acreditou quando ninguem mais acreditava, que deu tudo quando ninguem pedia, e que liderou quando ninguem estava preparado. A amizade entre ele e Muhammad continua sendo, 14 seculos depois, o modelo mais elevado de companheirismo que a humanidade ja testemunhou.`,
  },
  {
    slug: 'umar',
    name: 'Umar ibn al-Khattab',
    arabicName: 'عمر بن الخطاب',
    title: 'O Justo',
    period: '584-644 d.C. — Segundo Califa',
    summary: 'O homem que Meca mais temia, transformado pela verdade, tornou-se sinonimo de justica em todo o mundo.',
    biography: `Antes de aceitar o Islam, Umar ibn al-Khattab era o homem que os muculmanos mais temiam em Meca. Alto, forte, imponente — quando caminhava pelas ruas, as pessoas abriam caminho. Era conhecido por sua ferocidade, sua honra tribal e sua oposicao aberta a Muhammad e seus seguidores. Quando ouviu que sua propria irma Fatimah havia se convertido ao Islam, saiu de casa com uma espada, determinado a "resolver o problema."

Chegou a casa de Fatimah e ouviu sons de recitacao do Alcorao do lado de dentro. Entrou furioso. Bateu no marido dela. Bateu nela. Quando viu sangue no rosto de sua irma, algo quebrou dentro dele. Ela, com o rosto ensanguentado, olhou nos olhos dele e disse: "Umar, faz o que quiseres. Mas o Islam ja entrou em nossos coracoes." Ele parou. Pediu para ver o que estavam lendo. Era a Surata Ta-Ha. Quando leu as primeiras palavras, comecou a tremer. Levantou-se e foi direto ate Muhammad. "Eu testemunho que nao ha deus alem de Deus, e que Muhammad e Seu Mensageiro." Os muculmanos gritaram "Allahu Akbar" tao alto que Meca inteira ouviu. A conversao de Umar mudou o equilibrio de poder. Muhammad disse sobre ele: "O Deus, fortalece o Islam com Umar."

A partir daquele momento, Umar nao fez nada pela metade. Enquanto os muculmanos rezavam escondidos, foi Umar quem insistiu em rezar publicamente na Kaaba. Ninguem ousou impedi-lo. Quando a migracao para Medina aconteceu em segredo, Umar foi o unico que saiu de Meca a luz do dia, espada na mao, desafiando qualquer um a tenta-lo. Ninguem se moveu.

Como segundo Califa (634-644 d.C.), Umar construiu o que nenhum outro lider da historia construiu em tao pouco tempo. Expandiu o territorio islamico da Persia ao Egito. Jerusale foi conquistada sob seu comando — e quando chegou para receber as chaves da cidade, o patriarca cristao Sofronio ficou chocado. Umar chegou a pe, com roupas simples, dividindo um camelo com seu servo. O patriarca nao acreditava que aquele homem humilde era o governante do maior imperio em expansao do mundo.

Dentro de Jerusalem, Sofronio convidou Umar a rezar dentro da Igreja do Santo Sepulcro. Umar recusou. Disse: "Se eu rezar aqui, os muculmanos depois de mim transformarao isso numa mesquita." Rezou do lado de fora para proteger o direito dos cristaos ao seu templo. Esse ato — recusar o poder em nome da justica — definiu todo o seu governo.

Umar criou o primeiro sistema de bem-estar social da historia. Salarios para soldados, pensoes para viuvas e orfaos, um registro civil completo. Patrulhava as ruas de Medina a noite, disfarçado, para ver se alguem passava fome. Certa noite, encontrou uma mulher cozinhando pedras numa panela para enganar seus filhos famintos. Umar correu ate o tesouro publico, carregou um saco de farinha nas proprias costas e cozinhou para aquela familia com suas proprias maos. Quando seu assistente quis carregar o peso, Umar disse: "Sera que tu vais carregar meus pecados no Dia do Juizo tambem?"

Estabeleceu o calendario islamico. Criou a policia. Fundou cidades inteiras como Kufa e Basra. Organizou o sistema judiciario com juizes independentes do poder politico. Quando seu proprio filho foi pego bebendo, Umar aplicou a punicao publica sem hesitar. Justica, para Umar, nao tinha excecoes.`,
    virtues: [
      'Justica inabalavel — aplicava a lei igualmente a si mesmo e a sua familia',
      'Forca com humildade — o homem mais poderoso do mundo carregava sacos de farinha nas costas',
      'Coragem transformadora — converteu-se por verdade, nao por conveniencia',
      'Visao administrativa — criou instituicoes que duraram seculos',
      'Protecao dos direitos dos nao-muculmanos — recusou rezar na igreja para preserva-la',
    ],
    famousQuotes: [
      {
        arabic: 'متى استعبدتم الناس وقد ولدتهم أمهاتهم أحراراً',
        translation: 'Desde quando voces escravizam as pessoas, sendo que suas maes os pariram livres?',
      },
      {
        arabic: 'لو عثرت بغلة في العراق لخشيت أن يسألني الله عنها',
        translation: 'Se uma mula tropecar no Iraque, eu temeria que Deus me perguntasse sobre ela.',
      },
      {
        arabic: 'نحن قوم أعزنا الله بالإسلام فمهما ابتغينا العزة بغيره أذلنا الله',
        translation: 'Somos um povo que Deus honrou com o Islam. Se buscarmos honra em outra coisa, Deus nos humilhara.',
      },
    ],
    legacy: `Umar ibn al-Khattab nao apenas governou — ele redefiniu o que significa governar. Em dez anos como Califa, transformou um estado tribal em uma civilizacao. Criou sistemas de governo, justica e assistencia social que o Ocidente so alcancaria seculos depois. Seu senso de justica era tao radical que se tornou proverbio: "A justica de Umar" e, em muitas linguas do mundo islamico, sinonimo de governanca perfeita. Ele provou que poder e humildade podem coexistir, que forca e misericordia nao sao opostos, e que um lider verdadeiro serve seu povo — nao o contrario. Foi assassinado em 644 d.C. por um escravo persa, mas seu legado e eterno. A cidade de Jerusalem, a organizacao do Estado islamico, o sistema de direitos dos cidadaos — tudo carrega a impressao digital de Umar.`,
  },
  {
    slug: 'uthman',
    name: 'Uthman ibn Affan',
    arabicName: 'عثمان بن عفان',
    title: 'O das Duas Luzes',
    period: '576-656 d.C. — Terceiro Califa',
    summary: 'Casou-se com duas filhas do Profeta, financiou o Islam em seus momentos mais criticos, e compilou o Alcorao em um unico volume.',
    biography: `Se existisse um ranking de generosidade na historia humana, Uthman ibn Affan estaria no topo. Era um dos homens mais ricos de Meca, da nobre tribo Umayya, com negocios que se estendiam por toda a Arabia. Mas sua riqueza nunca foi para si mesmo. Cada moeda que ganhou foi uma moeda que gastou pela causa de Deus. O Profeta Muhammad o chamou de Dhu al-Nurayn — "O Possuidor das Duas Luzes" — porque Uthman casou-se com duas filhas do Profeta: primeiro Ruqayyah, e apos sua morte, Umm Kulthum. Nenhum outro homem na historia recebeu essa honra.

Uthman aceitou o Islam nos primeiros dias, quando ser muculmano significava arriscar tudo. Sua familia, os poderosos Umayya, o rejeitou. Seu tio o amarrou com cordas e jurou nao solta-lo ate que abandonasse a nova religiao. Uthman suportou tudo em silencio. Nao gritou. Nao fugiu. Simplesmente recusou-se a negar sua fe. Quando finalmente foi solto, nao tinha amargura — apenas mais determinacao.

Quando os muculmanos migraram para Medina e estavam morrendo de sede, Uthman comprou o poco de Rumah — a unica fonte de agua doce de propriedade privada — e o tornou publico. De graca. Para sempre. Quando o Profeta pediu voluntarios para financiar o Exercito da Dificuldade (Jaysh al-Usra) para a expedicao de Tabuk, Uthman equipou um terco do exercito inteiro com seus proprios recursos: 1.000 cavalos, 1.000 camelos e 1.000 dinares de ouro. O Profeta levantou as maos e disse: "Nada que Uthman faca depois de hoje podera prejudica-lo." Estava garantido.

Uthman era conhecido por sua timidez e modestia. O Profeta disse: "Os anjos sentem vergonha de Uthman" — referindo-se a sua pudor extremo. Enquanto outros companheiros eram guerreiros e oradores, Uthman era o silencioso que resolvia com dinheiro e gentileza o que outros resolviam com espadas. Sua mansidao era confundida com fraqueza por quem nao o conhecia. Mas nao ha nada de fraco em doar toda uma fortuna por uma causa.

Como terceiro Califa (644-656 d.C.), Uthman realizou a tarefa mais monumental da historia religiosa: a compilacao padronizada do Alcorao. Ate entao, o texto sagrado existia em fragmentos — ossos, folhas de palmeira, pergaminhos, e na memoria de recitadores. Uthman reuniu os maiores recitadores, comparou cada versao, e produziu copias oficiais padronizadas que foram enviadas a todas as provincias do mundo islamico. Cada Alcorao que existe hoje na face da Terra — todos os bilhoes de copias — descende diretamente do trabalho de Uthman. Cada palavra que um muculmano recita na oracao, cada verso que um hafiz memoriza, cada pagina impressa em qualquer pais do mundo, carrega a marca da decisao de Uthman.

Uthman tambem expandiu a mesquita do Profeta em Medina, construiu a primeira marinha islamica e ampliou o territorio do Califado ate a costa da Libia e as montanhas do Afeganistao. Mas seus ultimos anos foram marcados por fitna — discordia interna. Rebeldes cercaram sua casa por semanas. Ele se recusou a usar a forca contra muculmanos. Recusou-se a fugir. No dia em que foi assassinado, estava lendo o Alcorao. Seu sangue manchou as paginas do Livro que ele havia compilado para a humanidade.`,
    virtues: [
      'Generosidade sem limites — financiou exercitos, comprou pocos e doou tudo que tinha',
      'Modestia profunda — os anjos sentiam vergonha dele, segundo o Profeta',
      'Visao historica — compilou o Alcorao em um unico volume padronizado',
      'Paciencia sob perseguicao — suportou tortura familiar sem ressentimento',
      'Recusa a violencia — preferiu morrer a derramar sangue muculmano',
    ],
    famousQuotes: [
      {
        arabic: 'لو أن قلوبنا طهرت ما شبعنا من كلام الله',
        translation: 'Se nossos coracoes fossem puros, nunca nos cansariamos das palavras de Deus.',
      },
      {
        arabic: 'إن الله يزع بالسلطان ما لا يزع بالقرآن',
        translation: 'Deus impede pela autoridade o que nao impede pelo Alcorao.',
      },
      {
        arabic: 'ما يصنع أحدكم بكنز وهو يحتاج إليه',
        translation: 'De que serve um tesouro guardado quando as pessoas precisam dele?',
      },
    ],
    legacy: `O legado de Uthman e, literalmente, o mais lido da historia. Cada Alcorao no mundo descende de sua compilacao. Cada verso memorizado por cada hafiz. Cada recitacao em cada mesquita. Tudo passa por Uthman. Alem disso, seu modelo de generosidade — doar nao o excedente, mas o essencial — continua sendo o padrao mais elevado de caridade no Islam. Ele provou que a forca nao esta na espada, mas na disposicao de dar tudo sem esperar nada em troca. Morreu como martir, lendo o Livro que ele mesmo preservou para a eternidade.`,
  },
  {
    slug: 'ali',
    name: 'Ali ibn Abi Talib',
    arabicName: 'علي بن أبي طالب',
    title: 'O Portao do Conhecimento',
    period: '601-661 d.C. — Quarto Califa',
    summary: 'Primo e genro do Profeta, guerreiro lendario, sabio incomparavel, e porta de toda a sabedoria profetica.',
    biography: `Ali ibn Abi Talib cresceu dentro da casa de Muhammad. Era primo do Profeta e foi criado por ele desde crianca, quando o pai de Ali enfrentou dificuldades financeiras. Ali dormia ao lado de Muhammad. Comia na mesma mesa. Via como Muhammad tratava cada pessoa, cada animal, cada momento. Quando Muhammad recebeu a primeira revelacao, Ali tinha cerca de dez anos. E se tornou o primeiro jovem a aceitar o Islam. Nao por pressao. Nao por imitacao. Mas porque viveu com a verdade tao de perto que reconhece-la foi natural como respirar.

Muhammad disse sobre ele: "Eu sou a cidade do conhecimento e Ali e seu portao." Essa frase nao e metafora — e descricao. Ali era a mente mais brilhante de sua geracao. Jurisprudencia, teologia, linguistica, retorica, estrategia militar — nao havia campo em que Ali nao fosse mestre. Quando os juizes mais experientes do mundo islamico encontravam casos que nao conseguiam resolver, mandavam para Ali. Ele resolvia em minutos o que outros debatiam por meses.

Na noite da Hijrah, quando assassinos cercavam a casa de Muhammad para mata-lo, alguem precisava ficar na cama do Profeta para enganar os atacantes. Ali se ofereceu. Tinha plena consciencia de que poderia morrer. Deitou-se coberto pelo manto de Muhammad e dormiu tranquilamente enquanto espadas esperavam do lado de fora. Muhammad escapou para Medina. Ali sobreviveu. Esse ato de coragem — dormir calmamente diante da morte certa — definiu quem Ali era.

No campo de batalha, Ali era imbativel. Na Batalha de Badr, matou metade dos guerreiros inimigos que cairam naquele dia. Na Batalha de Uhud, quando o exercito muculmano fugiu e Muhammad ficou quase sozinho, Ali foi um dos poucos que permaneceu lutando ao lado do Profeta, recebendo dezenas de feridas. Na conquista de Khaybar, quando o exercito islamico nao conseguia romper a fortaleza por dias, Muhammad disse: "Amanha darei a bandeira a um homem que ama Deus e Seu Mensageiro, e que Deus e Seu Mensageiro amam." Na manha seguinte, deu a bandeira a Ali. Ele arrancou o portao da fortaleza com as proprias maos e entrou sozinho. Khaybar caiu no mesmo dia.

Mas a grandeza de Ali nao estava na espada. Estava na palavra. O Nahj al-Balagha — compilacao de seus sermoes, cartas e aforismos — e considerado uma das maiores obras da literatura arabe depois do Alcorao. Suas cartas a governadores sobre justica, direitos dos cidadaos e etica publica sao estudadas ate hoje em universidades de ciencia politica. Sua carta a Malik al-Ashtar, governador do Egito, e um tratado completo sobre governanca justa que antecipa conceitos que o Ocidente so formularia mil anos depois.

Ali casou-se com Fatimah, filha de Muhammad, e dessa uniao nasceram Hassan e Hussain — os dois netos amados do Profeta, que ele carregava nos ombros durante as oracoes. A linhagem do Profeta Muhammad continua ate hoje atraves de Ali e Fatimah.

Como quarto Califa, Ali enfrentou a fitna — a guerra civil que dividiu a comunidade islamica. Lutou em tres guerras contra muculmanos, algo que o destruia por dentro. Cada vida perdida era uma ferida em sua alma. Foi assassinado em 661 d.C. enquanto rezava a oracao da madrugada na mesquita de Kufa. Suas ultimas palavras ao ser golpeado foram: "Pela Ka'ba, eu venci." Nao venceu uma batalha. Venceu a si mesmo — morreu em prostacao diante de Deus.`,
    virtues: [
      'Sabedoria incomparavel — era a porta de todo o conhecimento profetico',
      'Coragem absoluta — dormiu na cama do Profeta cercado por assassinos',
      'Justica sem compromisso — governou com equidade mesmo durante guerra civil',
      'Eloquencia rara — seus sermoes sao obra-prima da literatura arabe',
      'Devocao profunda — morreu em oracao, suas ultimas palavras foram de vitoria espiritual',
    ],
    famousQuotes: [
      {
        arabic: 'الناس نيام فإذا ماتوا انتبهوا',
        translation: 'As pessoas estao adormecidas. Quando morrem, despertam.',
      },
      {
        arabic: 'قيمة كل امرئ ما يحسنه',
        translation: 'O valor de cada pessoa e aquilo que ela domina.',
      },
      {
        arabic: 'اعقلوا الخبر إذا سمعتموه عقل رعاية لا عقل رواية',
        translation: 'Quando ouvirem um conhecimento, compreendam-no com a mente de quem cuida, nao com a mente de quem apenas repete.',
      },
    ],
    legacy: `Ali e, simultaneamente, o guerreiro mais temido e o sabio mais profundo da historia islamica. Seu legado se divide em dois rios que alimentam toda a civilizacao muculmana: o rio do conhecimento — atraves de seus ensinamentos juridicos, espirituais e filosoficos — e o rio da linhagem — atraves de seus filhos Hassan e Hussain, que carregam o sangue do Profeta. Sunitas o veneram como o quarto Califa Bem-Guiado. Xiitas o consideram o primeiro Imam e o lider legitimo apos Muhammad. Em ambos os casos, Ali e reverenciado como o modelo de sabedoria, coragem e devocao. Seu Nahj al-Balagha continua sendo lido, estudado e chorado por muculmanos em todo o mundo, 14 seculos depois de sua morte.`,
  },
  {
    slug: 'bilal',
    name: 'Bilal ibn Rabah',
    arabicName: 'بلال بن رباح',
    title: 'A Voz da Liberdade',
    period: '580-640 d.C.',
    summary: 'Escravo etiope torturado por sua fe, libertado por Abu Bakr, tornou-se a primeira voz a chamar a humanidade para a oracao.',
    biography: `A historia de Bilal ibn Rabah e a historia que destrói toda narrativa racista que ja tentaram colar no Islam. Bilal era um escravo. Negro. Etiope. Na Arabia do seculo VII, ser escravo negro significava ser invisivel. Propriedade. Sub-humano. Bilal pertencia a Umayyah ibn Khalaf, um dos homens mais ricos e crueis de Meca. E quando Bilal ouviu sobre a mensagem de Muhammad — que todos os seres humanos sao iguais perante Deus, que nenhum arabe e superior a um nao-arabe, que nenhum branco e superior a um negro — ele soube que aquela era a verdade. E a abraçou.

Quando Umayyah descobriu que seu escravo havia se tornado muculmano, a tortura comecou. Todo dia, sob o sol escaldante do deserto arabico, Bilal era arrastado para fora. Uma rocha gigante era colocada sobre seu peito. A temperatura do deserto passava de 50 graus. A pedra queimava sua pele. E Umayyah gritava: "Renuncia Muhammad! Adora al-Lat e al-Uzza!" Bilal, com uma pedra esmagando seus pulmoes, com a pele queimando, com a boca seca, respondia apenas uma palavra: "Ahad. Ahad." — "Um. Um." Deus e Um. Uma unica palavra que desafiava todo o sistema de poder, toda a hierarquia tribal, toda a estrutura de opressao de Meca. Um escravo, sem nenhum poder terreno, repetindo a verdade que nenhum senhor podia apagar.

Abu Bakr, ao testemunhar essa tortura, comprou Bilal por um preco absurdo e o libertou. Umayyah riu: "Voce pagou demais por um escravo sem valor." Abu Bakr respondeu: "Voce o vendeu barato demais." Bilal caminhou para fora daquela casa como homem livre. E a partir daquele momento, nunca mais se curvou diante de nenhum ser humano — apenas diante de Deus.

Quando o Islam se estabeleceu em Medina e a comunidade precisava de uma forma de chamar as pessoas para a oracao, Muhammad escolheu Bilal. Nao escolheu um arabe nobre. Nao escolheu um poeta famoso. Escolheu o ex-escravo etiope. Bilal subiu ao telhado da mesquita e sua voz ecoou por toda Medina: "Allahu Akbar, Allahu Akbar..." O primeiro adhan da historia. A primeira voz a chamar a humanidade para a oracao islamica era a voz de um homem negro que havia sido escravo. Isso nao e coincidencia. E declaracao teologica.

Bilal acompanhou Muhammad em todas as batalhas. Esteve em Badr, Uhud, Khandaq, Hudaybiyyah e na conquista de Meca. Quando os muculmanos reconquistaram Meca — a mesma cidade que havia torturado Bilal — Muhammad mandou Bilal subir ao topo da Kaaba e fazer o adhan. A Kaaba. O lugar mais sagrado da Arabia. E a voz que ecoou dali nao foi a de um nobre Qurayshi. Foi a de Bilal. O ex-escravo. O etiope. O homem que repetiram "Ahad" sob a pedra. Alguns dos lideres de Meca ficaram furiosos: "Muhammad nao encontrou ninguem melhor que esse corvo negro?" Abu Bakr respondeu: "Se voces repetirem isso, sao voces que nao encontraram nada melhor que a ignorancia."

Apos a morte de Muhammad, Bilal nao conseguia mais fazer o adhan. Toda vez que tentava, chegava na parte "Ash-hadu anna Muhammadan Rasulullah" e comecava a chorar tanto que nao conseguia continuar. Pediu ao Califa Abu Bakr para ir a Siria, onde viveu o resto de seus dias. Dizem que so fez o adhan uma unica vez depois — quando visitou o tumulo do Profeta em Medina. E a cidade inteira chorou ao ouvir aquela voz novamente.`,
    virtues: [
      'Fe inabalavel — sob tortura, repetia apenas "Ahad" (Um)',
      'Dignidade absoluta — nunca se curvou diante de homens, apenas diante de Deus',
      'Simbolo de igualdade — sua escolha como muezzin destruiu a hierarquia racial arabe',
      'Lealdade ao Profeta — apos a morte de Muhammad, nao conseguiu mais fazer o adhan de tanta saudade',
      'Coragem sob opressao — sua resistencia inspirou geracoes de oprimidos',
    ],
    famousQuotes: [
      {
        arabic: 'أحد أحد',
        translation: 'Um. Um. (Repetido sob tortura — afirmando a unicidade de Deus)',
      },
      {
        arabic: 'الله أكبر الله أكبر',
        translation: 'Deus e Maior. Deus e Maior. (As primeiras palavras do primeiro adhan da historia)',
      },
    ],
    legacy: `Bilal e a resposta viva do Islam ao racismo. Sua historia prova que, desde o primeiro dia, o Islam rejeitou hierarquias de cor, tribo e classe. Um escravo negro se tornou a voz oficial da religiao — nao apesar de ser negro, mas porque no Islam, o unico criterio de superioridade e a consciencia de Deus (taqwa). O adhan que ecoa em cada mesquita do mundo, cinco vezes por dia, em cada canto do planeta — esse ritual comecou com Bilal. Cada muezzin que sobe ao minarete esta, conscientemente ou nao, seguindo os passos de um ex-escravo etiope que preferiu ser esmagado por uma rocha a negar a verdade. Bilal nao e um detalhe na historia do Islam. Ele e a alma sonora dessa religiao.`,
  },
  {
    slug: 'salman',
    name: 'Salman al-Farisi',
    arabicName: 'سلمان الفارسي',
    title: 'O Buscador',
    period: 'Seculo VI-VII d.C.',
    summary: 'Um persa zoroastrista que cruzou o mundo antigo buscando a verdade, passando por monastérios cristaos ate encontrar Muhammad.',
    biography: `A historia de Salman al-Farisi e a historia de todo buscador sincero. Nasceu na Persia, numa familia zoroastrista rica e influente. Seu pai era guardiao do fogo sagrado — uma posicao de enorme prestigio. Salman deveria ter vivido uma vida confortavel, herdado o cargo do pai e morrido respeitado em sua terra. Mas algo dentro dele nao descansava. Olhava para o fogo que seu pai protegia e sentia que havia algo alem. Algo que o fogo apontava, mas nao era.

Um dia, passando por uma igreja crista, Salman ouviu cantos e oracoes que tocaram sua alma de uma forma que o zoroastrismo nunca havia tocado. Entrou. Conversou com os monges. Ficou fascinado. Quando contou ao pai, foi acorrentado dentro de casa. Literalmente. Seu pai o prendeu para que nao abandonasse a religiao da familia. Salman escapou e fugiu da Persia. Abandonou riqueza, familia, patria e seguranca. Levou nada. Tinha apenas a busca.

Viajou ate a Siria. Encontrou um monge cristao e se tornou seu discipulo. Quando o monge estava morrendo, Salman pediu orientacao: "Para onde devo ir?" O monge disse: "Va ate fulano, na cidade tal." Salman foi. Serviu outro monge. Quando esse tambem morreu, recebeu a mesma instrucao: va ate o proximo. Salman seguiu de monge em monge, de cidade em cidade, de pais em pais, sempre servindo, sempre aprendendo, sempre buscando. Cada mestre o levava mais perto. O ultimo monge que serviu lhe disse, no leito de morte: "O tempo de um profeta esta proximo. Ele aparecera na terra das palmeiras, entre duas areas de pedras negras. Ele aceitara presentes mas nao aceitara caridade. E entre seus ombros havera o selo da profecia."

Salman partiu para a Arabia. No caminho, foi traido por comerciantes que o venderam como escravo. O buscador da verdade, que havia cruzado o mundo antigo, acabou como escravo em Medina. Mas Medina — a "terra das palmeiras entre duas areas de pedras negras" — era exatamente onde precisava estar.

Quando Muhammad chegou a Medina na Hijrah, Salman ouviu sobre ele. Levou tameras como presente. Muhammad aceitou. Levou tameras como caridade. Muhammad recusou. Dois sinais confirmados. Entao Salman pediu para ver as costas do Profeta. Muhammad entendeu e revelou o selo da profecia. Salman caiu aos seus pes, chorando. Depois de anos de busca, de escravidao, de cruzar continentes a pe, finalmente encontrou o que procurava.

Muhammad ajudou Salman a comprar sua liberdade. E Salman tornou-se um dos companheiros mais importantes. Sua contribuicao mais famosa veio na Batalha da Trincheira (Khandaq). Quando um exercito de 10.000 homens marchou contra Medina, Salman sugeriu algo que nenhum arabe jamais havia pensado: cavar uma trincheira ao redor da cidade. Era uma tatica persa, desconhecida na Arabia. Muhammad adotou a ideia imediatamente. Os muculmanos cavaram a trincheira em tempo recorde. O exercito inimigo nao conseguiu cruzar. Medina foi salva. Uma ideia de um persa, ex-escravo, salvou a capital do Islam.

Muhammad disse sobre Salman: "Salman e de nos, a Familia da Casa (Ahl al-Bayt)." Nao era arabe. Nao era de Quraysh. Mas o Profeta o declarou parte de sua propria familia. Porque no Islam, a familia nao e sangue — e fe.`,
    virtues: [
      'Busca incansavel pela verdade — cruzou continentes, perdeu tudo, nunca parou',
      'Humildade radical — de nobre persa a escravo, sem perder a dignidade',
      'Inteligencia estrategica — a ideia da trincheira salvou Medina',
      'Universalidade — provou que o Islam nao e arabe, e universal',
      'Paciencia — suportou escravidao e exilio enquanto buscava a verdade',
    ],
    famousQuotes: [
      {
        arabic: 'سلمان منا أهل البيت',
        translation: 'Salman e de nos, da Familia da Casa. (O Profeta Muhammad sobre Salman)',
      },
      {
        arabic: 'عجبت لمن يبحث عن ضالته والهدى أمامه',
        translation: 'Impressiona-me quem busca o que perdeu enquanto a orientacao esta diante dele.',
      },
    ],
    legacy: `Salman al-Farisi e a prova viva de que o Islam nao pertence a nenhuma raca, cultura ou nacao. Um persa se tornou parte da Familia do Profeta. Um zoroastrista que passou pelo cristianismo encontrou sua verdade no Islam. Um escravo salvou a capital do Islam com uma ideia. Sua jornada — da Persia a Siria, dos monasterios a escravidao, da escravidao a liberdade — e o arquetipo do buscador sincero. O Alcorao promete: "Quem busca a orientacao de Deus, Deus o guiara." Salman e a prova ambulante dessa promessa. Ate hoje, no Ira e em comunidades islamicas do mundo inteiro, Salman e venerado como o simbolo de que a verdade nao tem nacionalidade.`,
  },
  {
    slug: 'abu-dharr',
    name: 'Abu Dharr al-Ghifari',
    arabicName: 'أبو ذر الغفاري',
    title: 'O Asceta',
    period: 'Seculo VI-VII d.C. (m. 652 d.C.)',
    summary: 'O campeao dos pobres, defensor radical da simplicidade, que desafiou califas em nome da justica social.',
    biography: `Abu Dharr al-Ghifari era um rebelde antes mesmo de existir uma causa para se rebelar. Vinha da tribo Ghifar, conhecida por ser tribo de salteadores e bandidos nas estradas da Arabia. Abu Dharr nunca se conformou com a adoracao de idolos. Antes de ouvir sobre Muhammad, ele ja rejeitava a idolatria por conta propria. Rezava sozinho, voltado para uma direcao qualquer, dizendo: "O Deus, eu Te adoro, mesmo sem saber como Te adorar."

Quando ouviu que um homem em Meca afirmava ser profeta, Abu Dharr mandou seu irmao investigar. O irmao voltou dizendo: "Ele ordena a virtude e proibe o vicio." Nao era suficiente. Abu Dharr foi pessoalmente. Encontrou Muhammad em segredo — pois naquela epoca, ser muculmano em Meca era sentenca de morte. Ouviu o Alcorao. Aceitou o Islam no mesmo momento. E fez algo que Muhammad explicitamente pediu para NAO fazer: saiu para o meio do terreiro sagrado da Kaaba e gritou, na frente de toda Meca: "Testemunho que nao ha deus alem de Deus e Muhammad e Seu Mensageiro!" Os Qurayshitas cairam sobre ele e o espancaram ate quase a morte. Abbas, tio de Muhammad, interveio e o salvou. No dia seguinte, Abu Dharr fez a mesma coisa. Foi espancado novamente. Esse era Abu Dharr — incapaz de ficar em silencio diante da verdade.

Muhammad o mandou de volta a sua tribo com a missao de converte-los. Abu Dharr voltou e converteu toda a tribo Ghifar ao Islam. Nao apenas Ghifar — a tribo vizinha, Aslam, tambem se converteu. Duas tribos inteiras. Muhammad disse quando soube: "Ghifar — Deus a perdoou. Aslam — Deus a salvou."

Abu Dharr era o companheiro mais radical quando se tratava de justica social e riqueza. Para ele, acumular riqueza enquanto outros passavam fome era um crime contra Deus. Citava o Profeta constantemente: "Aquele que tem comida extra e nao da ao vizinho com fome nao e dos nossos." Para Abu Dharr, isso nao era metafora. Era lei. Era obrigacao. Era a linha entre fe e hipocrisia.

Apos a morte de Muhammad, quando o Califado se expandiu e a riqueza comecou a fluir das conquistas, Abu Dharr comecou a confrontar publicamente qualquer muculmano rico que nao distribuisse seus bens. Confrontou governadores. Confrontou comerciantes. Confrontou o proprio califa Uthman. Ia a mesquita e declarava em voz alta que acumular ouro e prata era haram enquanto houvesse um unico muculmano com fome. Citava o Alcorao: "Aqueles que entesouram ouro e prata e nao os gastam no caminho de Deus — anuncia-lhes um castigo doloroso" (9:34).

Suas declaracoes causavam tumulto. As pessoas comecavam a questionar seus governantes. Uthman, sem saber como lidar com aquele homem que nao podia ser comprado nem intimidado, pediu que Abu Dharr se retirasse para uma regiao remota chamada Rabadha. Abu Dharr foi. Sem reclamar. Sem se rebelar. Foi para o deserto e viveu com quase nada — exatamente como pregava. Morreu em Rabadha, com sua esposa e filha, tao pobre que nao tinham pano suficiente para envolve-lo como mortalha. Uma caravana que passava incluia Abdullah ibn Mas'ud, que chorou ao ver aquele gigante espiritual morto em tal pobreza e cuidou de seu enterro.

O Profeta havia profetizado: "Abu Dharr caminha sobre a terra como Jesus filho de Maria caminhava." A comparacao nao era exagero. Abu Dharr viveu e morreu como os profetas: sem nada, mas com tudo.`,
    virtues: [
      'Honestidade brutal — incapaz de ficar em silencio diante da injustica',
      'Ascetismo radical — viveu e morreu sem posses, por escolha',
      'Coragem inabalavel — gritou a shahada em Meca sabendo que seria espancado',
      'Justica social — confrontou califas e governadores em nome dos pobres',
      'Integridade — nunca comprometeu seus principios por conforto ou seguranca',
    ],
    famousQuotes: [
      {
        arabic: 'عجبت لمن لا يجد القوت في بيته كيف لا يخرج على الناس شاهراً سيفه',
        translation: 'Impressiona-me que quem nao encontra alimento em casa nao saia contra as pessoas de espada em punho. (Dito antes do Islam — Abu Dharr ja era rebelde por natureza)',
      },
      {
        arabic: 'يمشي على الأرض مشي عيسى بن مريم',
        translation: 'Abu Dharr caminha sobre a terra como Jesus filho de Maria caminhava. (O Profeta Muhammad sobre Abu Dharr)',
      },
    ],
    legacy: `Abu Dharr al-Ghifari e o companheiro que o mundo moderno mais precisa redescobrir. Sua mensagem — de que riqueza acumulada enquanto outros passam fome e incompativel com a fe — ecoa em cada debate sobre desigualdade social. Ele nao era comunista nem socialista — era muculmano. Sua referencia era o Alcorao e o exemplo do Profeta. Muitos academicos modernos o consideram o primeiro defensor dos direitos sociais na historia. Morreu pobre no deserto, mas suas palavras sao mais afiadas do que qualquer espada. Abu Dharr provou que a verdadeira riqueza esta na coragem de viver de acordo com o que se acredita — mesmo quando o preco e tudo.`,
  },
  {
    slug: 'khalid',
    name: 'Khalid ibn al-Walid',
    arabicName: 'خالد بن الوليد',
    title: 'A Espada de Deus',
    period: '592-642 d.C.',
    summary: 'O maior comandante militar da historia islamica, invicto em mais de 100 batalhas, que lutou contra o Islam antes de se tornar sua maior arma.',
    biography: `Khalid ibn al-Walid nunca perdeu uma batalha. Nunca. Em toda a sua carreira — mais de 100 combates, contra persas, romanos, arabes e tribos rebeldes — nenhum exercito conseguiu vence-lo. A historia militar mundial reconhece poucos generais invictos: Alexandre, Suvorov, e Khalid. Mas Khalid fez algo que nenhum outro fez: lutou dos dois lados. Comecou como inimigo mortal do Islam e se tornou sua arma definitiva.

Na Batalha de Uhud, foi a manobra de cavalaria de Khalid que quase destruiu o exercito muculmano. Quando os arqueiros muculmanos abandonaram suas posicoes por ganancia de saque, Khalid viu a brecha e atacou pela retaguarda. O que era uma vitoria muculmana virou um desastre. Muitos companheiros morreram naquele dia. Hamza, tio do Profeta, foi martirizado. E o genio por tras daquela reversao era Khalid ibn al-Walid, lutando CONTRA o Islam.

Mas a verdade tem uma forca gravitacional que nem a guerra consegue resistir. Khalid observava Muhammad de longe. Via a dignidade. Via a estrategia. Via a fe inabalavel de um homem que perdia batalhas sem perder a guerra. Dois anos antes da conquista de Meca, Khalid viajou ate Medina e aceitou o Islam. Muhammad o recebeu com um sorriso e disse: "Eu sempre soube que um homem de sua inteligencia acabaria reconhecendo a verdade."

Na Batalha de Mu'tah, contra o Imperio Romano do Oriente (Bizantino), tres comandantes muculmanos foram mortos em sequencia: Zayd ibn Harithah, Ja'far ibn Abi Talib e Abdullah ibn Rawahah. O exercito estava a beira do colapso. Khalid, sem ter sido designado, pegou a bandeira e assumiu o comando. Reorganizou o exercito em minutos. Manobrou as tropas de uma forma tao brilhante que os romanos — com um exercito muitas vezes maior — acreditaram que reforcos haviam chegado e recuaram. Muhammad, em Medina, recebeu a revelacao sobre o que aconteceu em tempo real e disse: "Khalid e uma espada dentre as espadas de Deus." Daí surgiu o titulo: Sayfullah — a Espada de Deus.

Na conquista de Meca, Khalid liderou uma das colunas do exercito. Em seguida, foi enviado para destruir o idolo de al-Uzza, um dos tres principais deuses pagaos da Arabia. Khalid quebrou o idolo com as proprias maos. O mesmo homem que um dia lutou para proteger aqueles idolos agora os destruia em nome do Deus unico.

Apos a morte de Muhammad, quando tribos apostatas ameacaram destruir o Islam, foi Khalid quem Abu Bakr enviou. Khalid marchou de batalha em batalha com velocidade que seus inimigos nao conseguiam acompanhar. Unificou a Arabia em meses. Depois, virou-se contra os dois maiores imperios do mundo: a Persia Sassanida e o Imperio Romano Bizantino. Na Batalha de Yarmuk (636 d.C.), com cerca de 30.000 soldados muculmanos contra mais de 100.000 romanos, Khalid executou uma das maiores vitorias tacticas da historia militar. Yarmuk abriu as portas da Siria, Palestina e Egito para o Islam. O Imperio Romano, que dominava a regiao ha seculos, nunca se recuperou.

Umar, como Califa, removeu Khalid do comando — nao por incompetencia, mas porque temia que o exercito adorasse Khalid em vez de confiar em Deus. Khalid obedeceu sem questionar. Serviu como soldado comum sob um novo comandante. O maior general do mundo islamico aceitou ser rebaixado sem uma palavra de protesto. Porque, para Khalid, a vitoria nunca foi dele. Era de Deus.`,
    virtues: [
      'Genio militar — invicto em mais de 100 batalhas',
      'Humildade sob autoridade — aceitou ser destituido do comando sem protestor',
      'Coragem na conversao — abandonou o lado vencedor para seguir a verdade',
      'Determinacao — marchava com velocidade sobre-humana de batalha em batalha',
      'Obediencia — serviu como soldado comum apos ser o maior comandante',
    ],
    famousQuotes: [
      {
        arabic: 'خالد سيف من سيوف الله',
        translation: 'Khalid e uma espada dentre as espadas de Deus. (O Profeta Muhammad sobre Khalid)',
      },
      {
        arabic: 'ما في جسدي موضع شبر إلا وفيه ضربة بسيف أو رمية بسهم أو طعنة برمح، وها أنا أموت على فراشي كما يموت البعير',
        translation: 'Nao ha um palmo no meu corpo sem uma marca de espada, flecha ou lanca. E aqui estou, morrendo na cama como um camelo morre.',
      },
    ],
    legacy: `Khalid ibn al-Walid morreu na cama. Isso o destruia. O maior guerreiro da historia islamica, coberto de cicatrizes de mais de 100 batalhas, queria morrer como martir no campo de batalha. Em seu leito de morte, chorou e disse suas palavras mais famosas sobre nao haver um palmo de seu corpo sem cicatriz, e ainda assim morrer em paz. Mas talvez essa fosse a ultima licao: a vitoria final nao e morrer em combate — e ter vivido com proposito. Khalid provou que a forca mais poderosa do mundo nao e um exercito — e a verdade, capaz de transformar seu maior inimigo em sua maior arma.`,
  },
  {
    slug: 'abdullah-ibn-masud',
    name: "Abdullah ibn Mas'ud",
    arabicName: 'عبد الله بن مسعود',
    title: 'O Primeiro Recitador',
    period: 'Seculo VI-VII d.C. (m. 653 d.C.)',
    summary: 'Um jovem pastor magro e pobre que se tornou a primeira pessoa a recitar o Alcorao publicamente em Meca e um dos maiores eruditos da historia islamica.',
    biography: `Abdullah ibn Mas'ud era magro. Tao magro que quando subia numa arvore, o vento balancava suas pernas finas e os companheiros riam. Certo dia, quando isso aconteceu, Muhammad disse: "Voces riem das pernas dele? No Dia do Juizo, elas serao mais pesadas na balanca do que a montanha de Uhud." Porque grandeza, no Islam, nao se mede pelo corpo. Mede-se pelo que o corpo carrega por dentro.

Ibn Mas'ud era pastor. Cuidava das ovelhas de Uqbah ibn Abi Mu'ayt, um dos homens mais ricos de Meca. Nao tinha dinheiro. Nao tinha tribo forte. Nao tinha nada do que a Arabia valorizava. Mas foi um dos primeiros a aceitar o Islam — o sexto, segundo algumas narracoes. E fez algo que nenhum outro muculmano teve coragem de fazer nos primeiros dias: recitou o Alcorao em voz alta, publicamente, no terreiro da Kaaba, cercado por inimigos.

Os companheiros ficaram chocados quando Ibn Mas'ud anunciou sua intencao. "Eles vao te matar," disseram. "Deus me protegera," respondeu. No dia seguinte, Ibn Mas'ud caminhou ate o centro de Meca, parou diante dos lideres Qurayshitas, e comecou a recitar a Surata ar-Rahman: "O Misericordioso. Ensinou o Alcorao. Criou o ser humano. Ensinou-lhe a eloquencia..." Os Qurayshitas nao acreditavam no que estavam ouvindo. Um pastor. Um ninguem. Recitando aquelas palavras diante deles. Cairam sobre ele e o espancaram ate que seu rosto ficou irreconhecivel. Quando voltou para os companheiros, sangrando, disse: "Os inimigos de Deus nunca foram tao insignificantes aos meus olhos como agora. Se quiserem, volto amanha e faco de novo."

Muhammad amava Ibn Mas'ud profundamente. Disse sobre ele: "Se voces querem recitar o Alcorao como foi revelado, fresco e puro, recitem como Ibn Mas'ud recita." Esse nao e um elogio qualquer. E o Profeta dizendo que, de todos os recitadores, Ibn Mas'ud era o que mais fielmente reproduzia a forma como o Alcorao soava quando desceu do ceu. Ibn Mas'ud aprendeu mais de 70 suratas diretamente da boca de Muhammad. Nenhum outro companheiro se aproximou desse numero com aprendizado direto do Profeta.

Ibn Mas'ud nao era apenas recitador — era jurista. Quando Umar o enviou para Kufa (no atual Iraque) como juiz e professor, disse ao povo: "Estou enviando-lhes Ibn Mas'ud. Preferi-lo a mim mesmo foi dificil, mas voces precisam dele mais do que eu." A escola juridica de Kufa, que se tornaria a base do fiqh hanafi — seguido por quase metade dos muculmanos do mundo hoje — tem suas raizes nos ensinamentos de Ibn Mas'ud.

Ele tinha uma relacao tao intima com Muhammad que os companheiros diziam: "Ibn Mas'ud e o mais proximo do Profeta em conduta, atitude e comportamento." Ele entrava na casa de Muhammad sem pedir permissao — um privilegio que quase ninguem tinha. Carregava os chinelos do Profeta. Seu travesseiro. Seu siwak. Caminhava tao perto de Muhammad que as pessoas pensavam que era da familia dele.

Ibn Mas'ud viveu pobre e morreu pobre. Quando lhe ofereceram um estipendio generoso do tesouro publico, ele recusou a maior parte: "Nao preciso disso. Tenho o Alcorao." Morreu em Medina, em 653 d.C. Sua viuva contou que nao havia nada de valor em sua casa — apenas livros e manuscritos do Alcorao.`,
    virtues: [
      'Coragem pioneira — primeiro a recitar o Alcorao publicamente em Meca',
      'Proximidade com o Profeta — aprendeu mais de 70 suratas diretamente de Muhammad',
      'Erudição profunda — fundou a escola juridica que hoje guia quase metade dos muculmanos',
      'Humildade radical — recusou riqueza, viveu e morreu com quase nada',
      'Fidelidade a revelacao — recitava o Alcorao "como foi revelado", segundo o Profeta',
    ],
    famousQuotes: [
      {
        arabic: 'من أراد أن يقرأ القرآن غضاً طرياً كما أنزل فليقرأه على قراءة ابن مسعود',
        translation: 'Quem quiser recitar o Alcorao fresco e puro como foi revelado, que recite como Ibn Mas\'ud recita. (O Profeta Muhammad)',
      },
      {
        arabic: 'والله لقد علم أصحاب رسول الله أني من أعلمهم بكتاب الله',
        translation: 'Por Deus, os companheiros do Mensageiro de Deus sabem que sou dos mais conhecedores do Livro de Deus entre eles.',
      },
    ],
    legacy: `Abdullah ibn Mas'ud e a prova de que no Islam, conhecimento supera linhagem, riqueza e forca fisica. Um pastor magro e sem tribo se tornou o maior recitador e um dos maiores juristas da historia islamica. A escola juridica hanafi — seguida por centenas de milhoes de muculmanos na Turquia, Paquistao, India, Bangladesh e Asia Central — tem suas raizes em seus ensinamentos. Cada pessoa que recita o Alcorao hoje esta, de certa forma, seguindo a tradicao que Ibn Mas'ud estabeleceu quando sangrou em Meca para que aquelas palavras fossem ouvidas. Ele nao tinha nada do que o mundo valoriza. Tinha tudo do que Deus valoriza.`,
  },
  {
    slug: 'sad-ibn-abi-waqqas',
    name: "Sa'd ibn Abi Waqqas",
    arabicName: 'سعد بن أبي وقاص',
    title: 'O Arqueiro',
    period: '595-674 d.C.',
    summary: 'Um dos primeiros convertidos, o arqueiro mais letal de Badr, conquistador da Persia, e o homem que levou o Islam ate a China.',
    biography: `Sa'd ibn Abi Waqqas foi o primeiro ser humano a disparar uma flecha pela causa do Islam. Na primeira escaramuca entre muculmanos e pagaos, antes mesmo da Batalha de Badr, foi Sa'd quem puxou o arco e lancou. Muhammad estava ao seu lado e disse: "Atira, Sa'd! Que meu pai e minha mae sirvam de resgate por ti!" Essa expressao — "que meu pai e minha mae sirvam de resgate por ti" — era a maior honra que um arabe podia dar. Muhammad nunca a usou com ninguem alem de Sa'd nesse contexto. E Sa'd acertou.

Sa'd aceitou o Islam aos 17 anos — um dos primeiros, o setimo ou oitavo convertido. Quando sua mae, Hamnah, soube, ela fez algo devastador: jurou que nao comeria nem beberia ate que Sa'd abandonasse o Islam. Era um chantagem emocional brutal. Numa cultura onde desobedecer a mae era o pior dos crimes sociais, Sa'd enfrentou a pior escolha de sua vida. Sua mae parou de comer. Um dia. Dois dias. Tres dias. O rosto dela murchava. Outros familiares imploravam: "Sa'd, voce vai matar sua mae!" Sa'd, com o coracao dilacerado, foi ate ela e disse: "Mae, eu te amo mais do que qualquer coisa neste mundo. Mas mesmo que tu tivesses cem almas, e cada uma saisse do teu corpo, uma por uma, eu nao abandonaria minha fe. Coma ou nao coma — a escolha e tua." Ela comeu. O Alcorao revelou um versiculo sobre esse evento: "Se eles te pressionarem para associar a Mim aquilo de que nao tens conhecimento, nao os obedecas. Mas acompanha-os neste mundo com bondade" (31:15).

Na Batalha de Badr, Sa'd e seu irmao Umayr lutaram lado a lado. Umayr tinha apenas 16 anos e havia chorado quando Muhammad inicialmente o recusou por ser jovem demais. Sa'd o viu cair martirizado no campo de batalha. Continuou lutando. A dor de perder o irmao nao o parou. Na Batalha de Uhud, quando o exercito muculmano colapsou e Muhammad ficou quase sem protecao, Sa'd foi um dos poucos que permaneceu ao lado do Profeta, disparando flechas sem parar para protege-lo. Muhammad apontava os alvos e Sa'd acertava. Cada flecha. Sem errar.

Mas a maior realizacao militar de Sa'd veio depois da morte do Profeta. O Califa Umar o nomeou comandante do exercito que marcharia contra o Imperio Sassanida — a Persia, uma das duas superpotencias do mundo antigo. Na Batalha de Qadisiyyah (636 d.C.), Sa'd enfrentou o exercito persa, incluindo elefantes de guerra que os arabes nunca haviam visto. O exercito persa era massivamente superior em numero e equipamento. Sa'd, doente com furunculos e incapaz de montar a cavalo, comandou a batalha de cima de uma torre, deitado. Mesmo assim, suas decisoes tacticas foram brilhantes. A batalha durou tres dias e tres noites. No terceiro dia, os muculmanos romperam as linhas persas. Qadisiyyah foi o comeco do fim do Imperio Sassanida — um imperio de 400 anos que caiu diante de um exercito liderado por um homem que comandou deitado.

Sa'd conquistou a capital persa, Ctesifonte, e quando entrou no palacio dos imperadores sassanidas — com seus jardins, saloes de ouro e tronos cravejados de joias — ele recitou o Alcorao: "Quantos jardins e fontes eles deixaram para tras. E plantacoes e palácios magnificos. E confortos nos quais se deleitavam. Assim foi. E Nos os fizemos herdar de outro povo" (44:25-28). Nao pegou nada para si. Enviou tudo ao tesouro publico em Medina.

Segundo tradicoes historicas, Sa'd ibn Abi Waqqas viveu seus ultimos anos viajando para leste. Relatos chineses e tradicoes islamicas indicam que ele pode ter sido o primeiro a levar o Islam a China, no seculo VII. A mesquita Huaisheng em Guangzhou — uma das mesquitas mais antigas do mundo — e tradicionalmente atribuida a Sa'd. Se isso for verdade, o arco de Sa'd se estende de Meca ate a China: a primeira flecha disparada pelo Islam e o primeiro adhan recitado no Extremo Oriente.`,
    virtues: [
      'Precisao letal — o maior arqueiro do Islam, nunca errava sob pressao',
      'Fe sobre familia — enfrentou a chantagem emocional da mae sem ceder',
      'Lideranca sob adversidade — comandou a maior batalha do Islam deitado, doente',
      'Integridade — conquistou palacios de ouro e nao ficou com nada',
      'Visao missionaria — levou o Islam ate os confins do mundo conhecido',
    ],
    famousQuotes: [
      {
        arabic: 'ارمِ سعد فداك أبي وأمي',
        translation: 'Atira, Sa\'d! Que meu pai e minha mae sirvam de resgate por ti! (O Profeta Muhammad)',
      },
      {
        arabic: 'كم تركوا من جنات وعيون وزروع ومقام كريم',
        translation: 'Quantos jardins e fontes eles deixaram para tras... (Alcorao 44:25-26, recitado por Sa\'d ao entrar no palacio persa)',
      },
    ],
    legacy: `Sa'd ibn Abi Waqqas e o companheiro cuja influencia se estende mais longe geograficamente. Da Arabia a Persia, da Persia a China, Sa'd levou o Islam a regioes que ninguem imaginava alcançar. Sua derrota do Imperio Sassanida na Batalha de Qadisiyyah e uma das viradas mais decisivas da historia mundial — abriu toda a Asia Central e o Oriente Medio para o Islam. Mas alem da estrategia militar, Sa'd e lembrado por sua integridade absoluta: nunca acumulou riqueza, nunca buscou poder, e quando Muhammad disse "atira, Sa'd", ele atirou. Quando Deus disse "nao obedecas teus pais se te pedirem para associar", ele obedeceu a Deus. Sa'd e o modelo do muculmano que obedece a Deus acima de tudo — e por isso, Deus o fez conquistar imperios.`,
  },
]
