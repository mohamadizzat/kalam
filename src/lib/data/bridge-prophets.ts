// ============================================================================
// BRIDGE PROPHETS — Core data for the A Ponte (Bridge) section
// Structured comparison of prophetic narratives across Bible and Quran
// Content in PT-BR, Arabic text is original Quranic Arabic
// ============================================================================

export interface BridgeProphet {
  id: string
  name: string
  arabicName: string
  era: string
  bibleRefs: {
    book: string
    chapter: string
    verses: string
    text: string
    context: string
  }[]
  quranRefs: {
    surah: string
    surahNumber: number
    verses: string
    arabic: string
    translation: string
    context: string
  }[]
  convergences: string[]
  divergences: string[]
  scholarContext: string
}

// ----------------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------------

export const bridgeProphets: BridgeProphet[] = [
  // ==========================================================================
  // 1. ADAM (Adao)
  // ==========================================================================
  {
    id: 'adam',
    name: 'Adao',
    arabicName: '\u0622\u062F\u0645',
    era: 'A Origem',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '1',
        verses: '26-27',
        text: 'E disse Deus: Facamos o homem a nossa imagem, conforme a nossa semelhanca; e domine sobre os peixes do mar, e sobre as aves dos ceus, e sobre o gado, e sobre toda a terra. Criou Deus o homem a sua imagem; a imagem de Deus o criou; homem e mulher os criou.',
        context: 'A criacao do ser humano como ponto culminante da criacao divina, feito a imagem e semelhanca de Deus, com dominio sobre a terra.'
      },
      {
        book: 'Genesis',
        chapter: '2',
        verses: '7-9',
        text: 'E formou o Senhor Deus o homem do po da terra, e soprou em seus narizes o folego da vida; e o homem foi feito alma vivente. E plantou o Senhor Deus um jardim no Eden, da banda do oriente, e pos ali o homem que tinha formado.',
        context: 'A formacao de Adao a partir do po da terra e a instalacao no Jardim do Eden, com acesso a arvore da vida e a arvore do conhecimento do bem e do mal.'
      },
      {
        book: 'Genesis',
        chapter: '2',
        verses: '19-20',
        text: 'Havendo, pois, o Senhor Deus formado da terra todo animal do campo e toda ave dos ceus, os trouxe a Adao, para este ver como lhes chamaria; e tudo o que Adao chamou a toda a alma vivente, isso foi o seu nome.',
        context: 'Adao recebe a tarefa de nomear todos os animais, demonstrando seu dominio intelectual e sua posicao especial na criacao.'
      },
      {
        book: 'Genesis',
        chapter: '3',
        verses: '6-7, 23-24',
        text: 'E, vendo a mulher que aquela arvore era boa para se comer, e agradavel aos olhos, e arvore desejavel para dar entendimento, tomou do seu fruto, e comeu, e deu tambem a seu marido, e ele comeu com ela. Entao foram abertos os olhos de ambos, e conheceram que estavam nus. O Senhor Deus, pois, o lancou fora do jardim do Eden para lavrar a terra de que fora tomado.',
        context: 'A desobediencia de Adao e Eva ao comer da arvore proibida, a perda da inocencia e a expulsao do paraiso terrestre.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-Baqarah',
        surahNumber: 2,
        verses: '30-33',
        arabic: '\u0648\u0625\u0630 \u0642\u0627\u0644 \u0631\u0628\u0651\u064F\u0643\u064E \u0644\u0644\u0645\u0644\u0627\u0626\u0643\u0629 \u0625\u0646\u0651\u064A \u062C\u0627\u0639\u0644\u064C \u0641\u064A \u0627\u0644\u0623\u0631\u0636 \u062E\u0644\u064A\u0641\u0629\u064B \u0642\u0627\u0644\u0648\u0627 \u0623\u062A\u062C\u0639\u0644 \u0641\u064A\u0647\u0627 \u0645\u0646 \u064A\u0641\u0633\u062F \u0641\u064A\u0647\u0627 \u0648\u064A\u0633\u0641\u0643 \u0627\u0644\u062F\u0645\u0627\u0621 \u0648\u0646\u062D\u0646 \u0646\u0633\u0628\u0651\u062D \u0628\u062D\u0645\u062F\u0643 \u0648\u0646\u0642\u062F\u0651\u0633 \u0644\u0643 \u0642\u0627\u0644 \u0625\u0646\u0651\u064A \u0623\u0639\u0644\u0645 \u0645\u0627 \u0644\u0627 \u062A\u0639\u0644\u0645\u0648\u0646',
        translation: 'E quando teu Senhor disse aos anjos: Certamente colocarei na terra um representante. Disseram: Colocaras nela quem nela semeara a corrupcao e derramara sangue, enquanto nos Te glorificamos com louvores e Te santificamos? Disse: Eu sei o que vos nao sabeis.',
        context: 'Deus anuncia aos anjos Sua intencao de criar Adao como khalifah (representante/vice-regente) na terra. Os anjos questionam, mas Deus responde que possui conhecimento que eles nao tem.'
      },
      {
        surah: 'Al-Baqarah',
        surahNumber: 2,
        verses: '34-37',
        arabic: '\u0648\u0625\u0630 \u0642\u0644\u0646\u0627 \u0644\u0644\u0645\u0644\u0627\u0626\u0643\u0629 \u0627\u0633\u062C\u062F\u0648\u0627 \u0644\u0622\u062F\u0645 \u0641\u0633\u062C\u062F\u0648\u0627 \u0625\u0644\u0627 \u0625\u0628\u0644\u064A\u0633 \u0623\u0628\u0649 \u0648\u0627\u0633\u062A\u0643\u0628\u0631 \u0648\u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0643\u0627\u0641\u0631\u064A\u0646 ... \u0641\u062A\u0644\u0642\u0651\u0649 \u0622\u062F\u0645 \u0645\u0646 \u0631\u0628\u0651\u0647 \u0643\u0644\u0645\u0627\u062A\u064D \u0641\u062A\u0627\u0628 \u0639\u0644\u064A\u0647 \u0625\u0646\u0651\u0647 \u0647\u0648 \u0627\u0644\u062A\u0651\u0648\u0627\u0628 \u0627\u0644\u0631\u0651\u062D\u064A\u0645',
        translation: 'E quando dissemos aos anjos: Prostrai-vos ante Adao. Prostraram-se, exceto Iblis, que se recusou e foi arrogante, e foi dos descrentes. ... Entao Adao recebeu de seu Senhor palavras, e Ele o perdoou. Ele e o Indulgente, o Misericordioso.',
        context: 'Os anjos se prostram diante de Adao por ordem divina — uma honra unica. Iblis (Satanas) recusa por arrogancia. Apos o erro, Adao recebe palavras de arrependimento e e plenamente perdoado por Deus.'
      },
      {
        surah: 'Al-A\'raf',
        surahNumber: 7,
        verses: '19-23',
        arabic: '\u0648\u064A\u0627 \u0622\u062F\u0645 \u0627\u0633\u0643\u0646 \u0623\u0646\u062A \u0648\u0632\u0648\u062C\u0643 \u0627\u0644\u062C\u0646\u0651\u0629 \u0641\u0643\u064F\u0644\u0627 \u0645\u0646 \u062D\u064A\u062B \u0634\u0626\u062A\u0645\u0627 \u0648\u0644\u0627 \u062A\u0642\u0631\u0628\u0627 \u0647\u0630\u0647 \u0627\u0644\u0634\u062C\u0631\u0629 \u0641\u062A\u0643\u0648\u0646\u0627 \u0645\u0646 \u0627\u0644\u0638\u0627\u0644\u0645\u064A\u0646 ... \u0642\u0627\u0644\u0627 \u0631\u0628\u0651\u0646\u0627 \u0638\u0644\u0645\u0646\u0627 \u0623\u0646\u0641\u0633\u0646\u0627 \u0648\u0625\u0646 \u0644\u0645 \u062A\u063A\u0641\u0631 \u0644\u0646\u0627 \u0648\u062A\u0631\u062D\u0645\u0646\u0627 \u0644\u0646\u0643\u0648\u0646\u0646\u0651 \u0645\u0646 \u0627\u0644\u062E\u0627\u0633\u0631\u064A\u0646',
        translation: 'E o Adao, habita tu e tua esposa o Paraiso, e comei dele onde quiserdes, e nao vos aproximeis desta arvore, para que nao sejais dos injustos. ... Disseram: Senhor nosso, fomos injustos conosco mesmos; e se nao nos perdoares e tiveres misericordia de nos, seremos dos perdedores.',
        context: 'Adao e sua esposa sao instalados no Paraiso com liberdade total, exceto a arvore proibida. Apos desobedecerem por influencia de Satanas, ambos se arrependem juntos — e no Alcorao, a culpa e compartilhada igualmente.'
      },
      {
        surah: 'Ta-Ha',
        surahNumber: 20,
        verses: '115-122',
        arabic: '\u0648\u0644\u0642\u062F \u0639\u0647\u062F\u0646\u0627 \u0625\u0644\u0649 \u0622\u062F\u0645 \u0645\u0646 \u0642\u0628\u0644 \u0641\u0646\u0633\u064A \u0648\u0644\u0645 \u0646\u062C\u062F \u0644\u0647 \u0639\u0632\u0645\u064B\u0627 ... \u062B\u0645\u0651 \u0627\u062C\u062A\u0628\u0627\u0647 \u0631\u0628\u0651\u0647 \u0641\u062A\u0627\u0628 \u0639\u0644\u064A\u0647 \u0648\u0647\u062F\u0649',
        translation: 'E ja tinhamos feito pacto com Adao antes, porem ele esqueceu, e nao lhe encontramos determinacao firme. ... Depois seu Senhor o elegeu, e o perdoou, e o guiou.',
        context: 'O Alcorao descreve o erro de Adao como esquecimento e fraqueza, nao como rebeliao deliberada. Deus nao apenas o perdoa — o elege e o guia. Adao sai da experiencia elevado, nao degradado.'
      }
    ],
    convergences: [
      'Criado a partir da terra/po por acao direta de Deus',
      'Primeiro ser humano, ancestral de toda a humanidade',
      'Recebeu dominio e conhecimento especial sobre a criacao',
      'Desobedeceu a Deus ao se aproximar da arvore proibida',
      'Foi removido do Paraiso e enviado a terra como consequencia'
    ],
    divergences: [
      'O Islam nao tem o conceito de "pecado original" — o erro de Adao nao se transmite a seus descendentes',
      'No Alcorao, Adao se arrependeu e foi plenamente perdoado por Deus; na Biblia, a expulsao e permanente e sem perdao explicito',
      'O Alcorao nao culpa Eva mais do que Adao — ambos erraram e ambos se arrependeram juntos',
      'No Islam, os anjos se prostraram diante de Adao por ordem divina, reconhecendo sua posicao unica — cena ausente na Biblia'
    ],
    scholarContext: 'A diferenca fundamental entre as duas tradicoes na historia de Adao esta na consequencia teologica do erro. No Cristianismo, a Queda de Adao e o fundamento da doutrina do pecado original, que exige redencao atraves de Cristo. No Islam, Adao errou, se arrependeu e foi perdoado — fim do ciclo. Cada ser humano nasce puro (fitra) e e responsavel apenas por seus proprios atos. Esta divergencia nao e um detalhe: ela molda toda a teologia de salvacao das duas tradicoes.'
  },

  // ==========================================================================
  // 2. IBRAHIM (Abraao)
  // ==========================================================================
  {
    id: 'ibrahim',
    name: 'Ibrahim (Abraao)',
    arabicName: '\u0625\u0628\u0631\u0627\u0647\u064A\u0645',
    era: '~2000 a.C.',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '12',
        verses: '1-3',
        text: 'Ora, o Senhor disse a Abrao: Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei. E far-te-ei uma grande nacao, e abencoar-te-ei, e engrandecerei o teu nome, e tu seras uma bencao.',
        context: 'O chamado original de Abraao — sair de tudo que conhecia em obediencia a uma promessa divina. O inicio da alianca que fundamenta as tres religioes abraamicas.'
      },
      {
        book: 'Genesis',
        chapter: '17',
        verses: '1-8',
        text: 'Sendo, pois, Abrao da idade de noventa e nove anos, apareceu o Senhor a Abrao e disse-lhe: Eu sou o Deus Todo-Poderoso; anda em minha presenca e se perfeito. E porei a minha alianca entre mim e ti, e te multiplicarei grandissimamente.',
        context: 'O estabelecimento formal da alianca entre Deus e Abraao, incluindo a mudanca de nome de Abrao para Abraao e a promessa de descendencia inumeravel.'
      },
      {
        book: 'Genesis',
        chapter: '22',
        verses: '1-2, 9-12',
        text: 'E aconteceu, depois destas coisas, que tentou Deus a Abraao e disse-lhe: Toma agora o teu filho, o teu unico filho, Isaque, a quem amas, e vai-te a terra de Moria, e oferece-o ali em holocausto. E chegaram ao lugar que Deus lhe dissera, e edificou Abraao ali um altar, e pos em ordem a lenha, e amarrou a Isaque. Entao o anjo do Senhor lhe bradou: Nao estendas a tua mao sobre o moco. Agora sei que temes a Deus.',
        context: 'O sacrificio de Isaque (Akedah) — considerado o maior teste de fe de Abraao na tradicao biblica. O anjo intervem no ultimo momento.'
      },
      {
        book: 'Genesis',
        chapter: '21',
        verses: '17-21',
        text: 'E ouviu Deus a voz do menino, e bradou o Anjo de Deus a Agar desde os ceus, e disse-lhe: Que tens, Agar? Nao temas, porque Deus ouviu a voz do menino desde o lugar onde esta. Ergue-te, levanta o menino e toma-o pela mao, porque dele farei uma grande nacao.',
        context: 'A promessa divina a Agar sobre Ismael — reconhecida na Biblia como semente de uma grande nacao, embora a alianca formal continue atraves de Isaque.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-An\'am',
        surahNumber: 6,
        verses: '74-79',
        arabic: '\u0641\u0644\u0645\u0651\u0627 \u062C\u0646\u0651 \u0639\u0644\u064A\u0647 \u0627\u0644\u0644\u0651\u064A\u0644 \u0631\u0623\u0649 \u0643\u0648\u0643\u0628\u064B\u0627 \u0642\u0627\u0644 \u0647\u0630\u0627 \u0631\u0628\u0651\u064A \u0641\u0644\u0645\u0651\u0627 \u0623\u0641\u0644 \u0642\u0627\u0644 \u0644\u0627 \u0623\u062D\u0628\u0651 \u0627\u0644\u0622\u0641\u0644\u064A\u0646 ... \u0625\u0646\u0651\u064A \u0648\u062C\u0651\u0647\u062A \u0648\u062C\u0647\u064A\u064E \u0644\u0644\u0651\u0630\u064A \u0641\u0637\u0631 \u0627\u0644\u0633\u0651\u0645\u0627\u0648\u0627\u062A \u0648\u0627\u0644\u0623\u0631\u0636 \u062D\u0646\u064A\u0641\u064B\u0627 \u0648\u0645\u0627 \u0623\u0646\u0627 \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0643\u064A\u0646',
        translation: 'Quando a noite o cobriu, viu uma estrela. Disse: Este e meu Senhor! E quando ela se pos, disse: Nao amo os que se poem. ... Voltei meu rosto para Aquele que criou os ceus e a terra, como hanif, e nao sou dos que associam.',
        context: 'A busca racional de Ibrahim pelo monoteismo — testando estrela, lua e sol como hipoteses de divindade e rejeitando cada uma ao ve-la desaparecer, ate chegar ao Criador que nao se poe.'
      },
      {
        surah: 'Al-Anbiya',
        surahNumber: 21,
        verses: '57-69',
        arabic: '\u0648\u062A\u0627\u0644\u0644\u0651\u0647 \u0644\u0623\u0643\u064A\u062F\u0646\u0651 \u0623\u0635\u0646\u0627\u0645\u0643\u0645 \u0628\u0639\u062F \u0623\u0646 \u062A\u0648\u0644\u0651\u0648\u0627 \u0645\u062F\u0628\u0631\u064A\u0646 ... \u0642\u0644\u0646\u0627 \u064A\u0627 \u0646\u0627\u0631 \u0643\u0648\u0646\u064A \u0628\u0631\u062F\u064B\u0627 \u0648\u0633\u0644\u0627\u0645\u064B\u0627 \u0639\u0644\u0649 \u0625\u0628\u0631\u0627\u0647\u064A\u0645',
        translation: 'Por Deus, hei de tramar contra vossos idolos quando derdes as costas. ... Dissemos: O fogo, se frio e seguranca para Ibrahim!',
        context: 'Ibrahim destroi os idolos e e jogado no fogo como punicao. Deus ordena ao fogo que seja frio e seguro para ele — uma intervencao divina que muda a natureza do proprio elemento.'
      },
      {
        surah: 'As-Saffat',
        surahNumber: 37,
        verses: '100-111',
        arabic: '\u0641\u0644\u0645\u0651\u0627 \u0628\u0644\u063A \u0645\u0639\u0647 \u0627\u0644\u0633\u0651\u0639\u064A \u0642\u0627\u0644 \u064A\u0627 \u0628\u0646\u064A\u0651 \u0625\u0646\u0651\u064A \u0623\u0631\u0649 \u0641\u064A \u0627\u0644\u0645\u0646\u0627\u0645 \u0623\u0646\u0651\u064A \u0623\u0630\u0628\u062D\u0643 \u0641\u0627\u0646\u0638\u0631 \u0645\u0627\u0630\u0627 \u062A\u0631\u0649 \u0642\u0627\u0644 \u064A\u0627 \u0623\u0628\u062A \u0627\u0641\u0639\u0644 \u0645\u0627 \u062A\u0624\u0645\u0631 \u0633\u062A\u062C\u062F\u0646\u064A \u0625\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u0651\u0647 \u0645\u0646 \u0627\u0644\u0635\u0651\u0627\u0628\u0631\u064A\u0646',
        translation: 'E quando atingiu a idade de trabalhar com ele, disse: O meu filho, vejo em sonho que te sacrifico. Ve o que achas. Disse: O meu pai, faz o que es ordenado. Me encontraras, se Deus quiser, entre os pacientes.',
        context: 'O sacrificio no Islam: Ibrahim consulta o filho (identificado pela tradicao islamica como Ismail) que aceita voluntariamente. Ambos se submetem juntos a vontade divina, e Deus intervem substituindo por um carneiro.'
      },
      {
        surah: 'Al-Baqarah',
        surahNumber: 2,
        verses: '124-127',
        arabic: '\u0648\u0625\u0630 \u0627\u0628\u062A\u0644\u0649 \u0625\u0628\u0631\u0627\u0647\u064A\u0645\u064E \u0631\u0628\u0651\u0647 \u0628\u0643\u0644\u0645\u0627\u062A \u0641\u0623\u062A\u0645\u0651\u0647\u0646\u0651 \u0642\u0627\u0644 \u0625\u0646\u0651\u064A \u062C\u0627\u0639\u0644\u0643 \u0644\u0644\u0646\u0651\u0627\u0633 \u0625\u0645\u0627\u0645\u064B\u0627 ... \u0648\u0625\u0630 \u064A\u0631\u0641\u0639 \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0645\u0646 \u0627\u0644\u0628\u064A\u062A \u0648\u0625\u0633\u0645\u0627\u0639\u064A\u0644',
        translation: 'E quando Ibrahim foi testado por seu Senhor com certas palavras, e as cumpriu, disse: Farei de ti um lider para as pessoas. ... E quando Ibrahim e Ismail erguiam os alicerces da Casa [Kaaba].',
        context: 'Ibrahim e elevado a imam (lider) da humanidade apos cumprir todos os testes divinos. Ele e Ismail constroem juntos a Kaaba em Meca — o ponto central da oracao islamica ate hoje.'
      }
    ],
    convergences: [
      'Pai do monoteismo — rompeu com a idolatria de sua epoca por conviccao pessoal',
      'Disposto a sacrificar o filho por obediencia a Deus, que interveio no ultimo momento',
      'Recebeu alianca especial com Deus e promessa de descendencia inumeravel',
      'Reconhecido como patriarca espiritual pelas tres religioes abraamicas',
      'Modelo de fe pura: confiou em Deus mesmo sem ver o resultado'
    ],
    divergences: [
      'O filho do sacrificio: Isaque na Biblia, Ismail na tradicao islamica (o primogenito)',
      'No Islam, Ibrahim e Ismail construiram juntos a Kaaba em Meca — narrativa ausente na Biblia',
      'O Alcorao detalha a busca racional de Ibrahim pelo monoteismo (teste da estrela, lua, sol) — ausente em Genesis',
      'Ibrahim e chamado de Khalilullah (Amigo de Deus) no Islam e de Hanif (o que se volta puro para Deus)'
    ],
    scholarContext: 'Ibrahim/Abraao e o ponto de convergencia mais forte entre as tres tradicoes abraamicas. Todas concordam que ele foi o primeiro a quebrar com o politeismo por conviccao pessoal. A divergencia principal — qual filho foi oferecido no sacrificio — reflete a divisao entre as linhagens de Isaque (judaismo e cristianismo) e Ismail (Islam). No Islam, Ibrahim nao e apenas um patriarca distante: sua oracao e repetida diariamente por bilhoes de muculmanos, e a peregrinacao a Meca (Hajj) reconstitui seus passos literalmente.'
  },

  // ==========================================================================
  // 3. YUSUF (Jose)
  // ==========================================================================
  {
    id: 'yusuf',
    name: 'Yusuf (Jose)',
    arabicName: '\u064A\u0648\u0633\u0641',
    era: '~1700 a.C.',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '37',
        verses: '3-4, 23-28',
        text: 'E Israel amava a Jose mais do que a todos os seus filhos, porque era filho da sua velhice; e fez-lhe uma tunica de varias cores. Vendo, pois, seus irmaos que seu pai o amava mais do que a todos, odiaram-no. E tiraram-lhe a sua tunica, e tomaram-no, e lancaram-no na cova. E venderam Jose por vinte pecas de prata aos ismaelitas.',
        context: 'A inveja dos irmaos, motivada pela preferencia do pai e pelos sonhos profeticos de Jose, culmina na venda como escravo — o evento que desencadeia toda a narrativa.'
      },
      {
        book: 'Genesis',
        chapter: '39',
        verses: '7-12, 20',
        text: 'E aconteceu, depois destas coisas, que a mulher do seu senhor pos os seus olhos em Jose e disse: Deita-te comigo. Porem ele recusou. E ela o pegou pela sua roupa, dizendo: Deita-te comigo. Ele, porem, deixou a sua roupa na mao dela e fugiu. E o senhor de Jose o tomou e o pos na casa do carcere.',
        context: 'O teste de castidade com a mulher de Potifar — Jose recusa e e falsamente acusado, sendo preso apesar de sua inocencia comprovada pela roupa rasgada.'
      },
      {
        book: 'Genesis',
        chapter: '41',
        verses: '15-16, 39-41',
        text: 'E disse Farao a Jose: Tive um sonho, e ninguem ha que o interprete; mas de ti ouvi dizer que entendes um sonho para interpreta-lo. E respondeu Jose a Farao: Isso nao esta em mim; Deus dara resposta de paz a Farao. Entao disse Farao a Jose: Visto que Deus te fez saber tudo isto, ninguem ha tao entendido e sabio como tu. Tu estaras sobre a minha casa.',
        context: 'Jose interpreta o sonho das sete vacas e sete espigas, e e elevado a vice-governador do Egito — de prisioneiro a segundo homem mais poderoso da terra.'
      },
      {
        book: 'Genesis',
        chapter: '45',
        verses: '4-8',
        text: 'E disse Jose a seus irmaos: Eu sou Jose, vosso irmao, a quem vendestes para o Egito. Agora, pois, nao vos entristecais, nem vos irriteis por me haverdes vendido para ca; porque para conservacao da vida, Deus me enviou adiante de vos.',
        context: 'O momento da revelacao e do perdao — Jose nao apenas perdoa, mas reinterpreta toda a traicao como parte do plano divino para salvar vidas.'
      }
    ],
    quranRefs: [
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '4',
        arabic: '\u0625\u0630 \u0642\u0627\u0644 \u064A\u0648\u0633\u0641 \u0644\u0623\u0628\u064A\u0647 \u064A\u0627 \u0623\u0628\u062A \u0625\u0646\u0651\u064A \u0631\u0623\u064A\u062A \u0623\u062D\u062F \u0639\u0634\u0631 \u0643\u0648\u0643\u0628\u064B\u0627 \u0648\u0627\u0644\u0634\u0651\u0645\u0633 \u0648\u0627\u0644\u0642\u0645\u0631 \u0631\u0623\u064A\u062A\u0647\u0645 \u0644\u064A \u0633\u0627\u062C\u062F\u064A\u0646',
        translation: 'Quando Yusuf disse a seu pai: O meu pai, vi em sonho onze estrelas, o sol e a lua — vi-os prostrarem-se ante mim.',
        context: 'O sonho profetico que desencadeia toda a historia — onze estrelas (irmaos), sol (pai) e lua (mae) se curvando diante de Yusuf, uma visao que levaria decadas para se cumprir.'
      },
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '23-24',
        arabic: '\u0648\u0631\u0627\u0648\u062F\u062A\u0647 \u0627\u0644\u0651\u062A\u064A \u0647\u0648 \u0641\u064A \u0628\u064A\u062A\u0647\u0627 \u0639\u0646 \u0646\u0641\u0633\u0647 \u0648\u063A\u0644\u0651\u0642\u062A \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0648\u0642\u0627\u0644\u062A \u0647\u064A\u062A \u0644\u0643 \u0642\u0627\u0644 \u0645\u0639\u0627\u0630 \u0627\u0644\u0644\u0651\u0647 \u0625\u0646\u0651\u0647 \u0631\u0628\u0651\u064A \u0623\u062D\u0633\u0646 \u0645\u062B\u0648\u0627\u064A ... \u0648\u0644\u0642\u062F \u0647\u0645\u0651\u062A \u0628\u0647 \u0648\u0647\u0645\u0651 \u0628\u0647\u0627 \u0644\u0648\u0644\u0627 \u0623\u0646 \u0631\u0623\u0649 \u0628\u0631\u0647\u0627\u0646 \u0631\u0628\u0651\u0647',
        translation: 'E a mulher em cuja casa ele estava procurou seduzi-lo e trancou as portas e disse: Vem ca. Disse: Que Deus me proteja! Ele e meu senhor, que me acolheu bem. ... E ela o desejou, e ele a teria desejado se nao tivesse visto a prova de seu Senhor.',
        context: 'O teste de castidade — o Alcorao reconhece a humanidade de Yusuf (ele teria cedido sem a intervencao divina), tornando sua resistencia ainda mais notavel. E honestidade narrativa rara em textos sagrados.'
      },
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '30-32',
        arabic: '\u0648\u0642\u0627\u0644 \u0646\u0633\u0648\u0629 \u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0645\u0631\u0623\u062A \u0627\u0644\u0639\u0632\u064A\u0632 \u062A\u0631\u0627\u0648\u062F \u0641\u062A\u0627\u0647\u0627 \u0639\u0646 \u0646\u0641\u0633\u0647 ... \u0641\u0644\u0645\u0651\u0627 \u0631\u0623\u064A\u0646\u0647 \u0623\u0643\u0628\u0631\u0646\u0647 \u0648\u0642\u0637\u0651\u0639\u0646 \u0623\u064A\u062F\u064A\u0647\u0646\u0651 \u0648\u0642\u0644\u0646 \u062D\u0627\u0634 \u0644\u0644\u0651\u0647 \u0645\u0627 \u0647\u0630\u0627 \u0628\u0634\u0631\u064B\u0627 \u0625\u0646 \u0647\u0630\u0627 \u0625\u0644\u0627 \u0645\u0644\u0643\u064C \u0643\u0631\u064A\u0645',
        translation: 'E disseram mulheres na cidade: A mulher do Aziz busca seduzir seu escravo. ... E quando o viram, ficaram deslumbradas com ele e cortaram suas maos e disseram: Deus nos livre! Este nao e um ser humano! Este e apenas um anjo nobre!',
        context: 'A cena das mulheres que cortaram as proprias maos ao ver Yusuf — detalhe presente no Alcorao e em textos judaicos antigos (Midrash), mas ausente no texto biblico canonico. Demonstra a beleza extraordinaria de Yusuf.'
      },
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '92',
        arabic: '\u0642\u0627\u0644 \u0644\u0627 \u062A\u062B\u0631\u064A\u0628 \u0639\u0644\u064A\u0643\u0645 \u0627\u0644\u064A\u0648\u0645 \u064A\u063A\u0641\u0631 \u0627\u0644\u0644\u0651\u0647 \u0644\u0643\u0645 \u0648\u0647\u0648 \u0623\u0631\u062D\u0645 \u0627\u0644\u0631\u0651\u0627\u062D\u0645\u064A\u0646',
        translation: 'Disse: Nao ha reprovacao contra vos hoje. Que Deus vos perdoe! Ele e o mais misericordioso dos misericordiosos.',
        context: 'O perdao total de Yusuf aos irmaos — as mesmas palavras que o Profeta Muhammad usou na conquista de Meca, mais de mil anos depois. O poder usado para clemencia, nao para vinganca.'
      }
    ],
    convergences: [
      'Sonhos profeticos que se cumpriram decadas depois',
      'Traido e vendido como escravo pelos proprios irmaos',
      'Resistiu a seducao e manteve sua integridade moral mesmo como escravo',
      'Elevado de prisioneiro a governante do Egito por sua sabedoria',
      'Perdoou completamente os irmaos que tentaram destrui-lo'
    ],
    divergences: [
      'O Alcorao adiciona a cena das mulheres que cortaram as maos ao ver Yusuf — ausente na Biblia mas presente em textos judaicos',
      'No Alcorao, Yusuf exigiu ser declarado inocente publicamente antes de aceitar sair da prisao — enfase na dignidade e verdade',
      'O Alcorao dedica uma surata inteira (capitulo 12) a Yusuf e a chama de "ahsan al-qasas" (a mais bela das historias)',
      'O Alcorao reconhece que Yusuf sentiu desejo humano pela esposa do Aziz, mas foi protegido por uma prova divina — honestidade psicologica rara'
    ],
    scholarContext: 'A Surata Yusuf (capitulo 12 do Alcorao) e unica: e a unica surata que conta uma historia completa do inicio ao fim, sem interrupcao. Os estudiosos islamicos a chamam de "ahsan al-qasas" (a mais bela das historias). A narrativa biblica em Genesis 37-50 e mais longa e inclui detalhes genealogicos ausentes no Alcorao (como a historia de Juda e Tamar). As duas versoes concordam no essencial: a traicao, a castidade, a ascensao e o perdao. A diferenca de enfase e reveladora — a Biblia detalha a historia politica do Egito, o Alcorao detalha a psicologia interior de Yusuf.'
  },

  // ==========================================================================
  // 4. MUSA (Moises)
  // ==========================================================================
  {
    id: 'musa',
    name: 'Musa (Moises)',
    arabicName: '\u0645\u0648\u0633\u0649',
    era: '~1400 a.C.',
    bibleRefs: [
      {
        book: 'Exodo',
        chapter: '2',
        verses: '1-10',
        text: 'E um homem da casa de Levi tomou uma filha de Levi. E a mulher concebeu e deu a luz um filho; e, vendo que era formoso, escondeu-o tres meses. Nao podendo, porem, mais esconde-lo, tomou uma arca de juncos, e a pos nos juncos a margem do rio. E a filha de Farao desceu a lavar-se no rio, e viu a arca no meio dos juncos, e enviou a sua criada, e a tomou.',
        context: 'O nascimento de Moises durante o decreto de morte dos meninos hebreus, e seu resgate miraculoso pela propria filha do Farao — o opressor criando o libertador.'
      },
      {
        book: 'Exodo',
        chapter: '3',
        verses: '1-6, 10-12',
        text: 'E apareceu-lhe o Anjo do Senhor em uma chama de fogo do meio duma sarca; e olhou, e eis que a sarca ardia no fogo e a sarca nao se consumia. Disse mais: Eu sou o Deus de teu pai, o Deus de Abraao, o Deus de Isaque e o Deus de Jaco. E Moises escondeu o seu rosto, porque temeu olhar para Deus. Vem agora, pois, e eu te enviarei a Farao, para que tires o meu povo do Egito.',
        context: 'A revelacao na sarca ardente — Deus se identifica e comissiona Moises para confrontar o Farao. Moises tem medo e hesita, pedindo para enviar outra pessoa.'
      },
      {
        book: 'Exodo',
        chapter: '14',
        verses: '21-28',
        text: 'Entao Moises estendeu a sua mao sobre o mar, e o Senhor fez retirar o mar por um forte vento oriental toda aquela noite, e o mar tornou-se em seco, e as aguas foram partidas. E os filhos de Israel entraram pelo meio do mar em seco. E os egipcios seguiram-nos. E voltaram as aguas e cobriram os carros e os cavaleiros de todo o exercito de Farao.',
        context: 'A travessia do Mar Vermelho — o momento definidor do Exodo, celebrado no Pessach judaico e reconhecido nas tres tradicoes abraamicas como libertacao divina.'
      },
      {
        book: 'Exodo',
        chapter: '20',
        verses: '1-3',
        text: 'Entao falou Deus todas estas palavras, dizendo: Eu sou o Senhor, teu Deus, que te tirei da terra do Egito, da casa da servidao. Nao teras outros deuses diante de mim.',
        context: 'O inicio dos Dez Mandamentos entregues a Moises no Monte Sinai — a lei que fundamenta a etica judaico-crista e que o Islam reconhece como revelacao divina autentica.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-Qasas',
        surahNumber: 28,
        verses: '7-13',
        arabic: '\u0648\u0623\u0648\u062D\u064A\u0646\u0627 \u0625\u0644\u0649 \u0623\u0645\u0651 \u0645\u0648\u0633\u0649 \u0623\u0646 \u0623\u0631\u0636\u0639\u064A\u0647 \u0641\u0625\u0630\u0627 \u062E\u0641\u062A\u0650 \u0639\u0644\u064A\u0647 \u0641\u0623\u0644\u0642\u064A\u0647 \u0641\u064A \u0627\u0644\u064A\u0645\u0651 \u0648\u0644\u0627 \u062A\u062E\u0627\u0641\u064A \u0648\u0644\u0627 \u062A\u062D\u0632\u0646\u064A \u0625\u0646\u0651\u0627 \u0631\u0627\u062F\u0651\u0648\u0647 \u0625\u0644\u064A\u0643 \u0648\u062C\u0627\u0639\u0644\u0648\u0647 \u0645\u0646 \u0627\u0644\u0645\u0631\u0633\u0644\u064A\u0646 ... \u0641\u0631\u062F\u062F\u0646\u0627\u0647 \u0625\u0644\u0649 \u0623\u0645\u0651\u0647 \u0643\u064A \u062A\u0642\u0631\u0651 \u0639\u064A\u0646\u0647\u0627',
        translation: 'E inspiramos a mae de Musa: Amamenta-o, e quando temeres por ele, lanca-o no rio. Nao temas e nao te entristecas — nos o devolveremos a ti e o faremos dos mensageiros. ... E assim o devolvemos a sua mae, para que seus olhos se alegrassem.',
        context: 'A promessa divina a mae de Musa — com duas garantias antes de ela lancar o bebe: ele sera devolvido e se tornara profeta. E ela acaba sendo paga pelo Farao para amamentar seu proprio filho.'
      },
      {
        surah: 'Ta-Ha',
        surahNumber: 20,
        verses: '25-28',
        arabic: '\u0642\u0627\u0644 \u0631\u0628\u0651 \u0627\u0634\u0631\u062D \u0644\u064A \u0635\u062F\u0631\u064A \u0648\u064A\u0633\u0651\u0631 \u0644\u064A \u0623\u0645\u0631\u064A \u0648\u0627\u062D\u0644\u0644 \u0639\u0642\u062F\u0629\u064B \u0645\u0646 \u0644\u0633\u0627\u0646\u064A \u064A\u0641\u0642\u0647\u0648\u0627 \u0642\u0648\u0644\u064A',
        translation: 'Disse: Senhor meu, abre-me o peito, facilita-me a tarefa, e desata o no da minha lingua, para que entendam o meu dizer.',
        context: 'Musa pede ajuda para sua dificuldade de fala antes de aceitar a missao — a fraqueza reconhecida e acomodada, nao ignorada. A missao nao exige perfeicao, exige disposicao.'
      },
      {
        surah: 'Al-Qasas',
        surahNumber: 28,
        verses: '24',
        arabic: '\u0641\u0633\u0642\u0649 \u0644\u0647\u0645\u0627 \u062B\u0645\u0651 \u062A\u0648\u0644\u0651\u0649 \u0625\u0644\u0649 \u0627\u0644\u0638\u0651\u0644\u0651 \u0641\u0642\u0627\u0644 \u0631\u0628\u0651 \u0625\u0646\u0651\u064A \u0644\u0645\u0627 \u0623\u0646\u0632\u0644\u062A \u0625\u0644\u064A\u0651 \u0645\u0646 \u062E\u064A\u0631 \u0641\u0642\u064A\u0631',
        translation: 'Deu-lhes agua, depois se retirou para a sombra e disse: Senhor, estou necessitado de qualquer bem que me enviares.',
        context: 'A oracao mais simples e honesta do Alcorao — Musa fugitivo, sem nada, pedindo qualquer coisa boa que Deus queira dar, sem condicoes nem especificacoes.'
      },
      {
        surah: 'Al-Kahf',
        surahNumber: 18,
        verses: '65-82',
        arabic: '\u0641\u0648\u062C\u062F\u0627 \u0639\u0628\u062F\u064B\u0627 \u0645\u0646 \u0639\u0628\u0627\u062F\u0646\u0627 \u0622\u062A\u064A\u0646\u0627\u0647 \u0631\u062D\u0645\u0629\u064B \u0645\u0646 \u0639\u0646\u062F\u0646\u0627 \u0648\u0639\u0644\u0651\u0645\u0646\u0627\u0647 \u0645\u0646 \u0644\u062F\u0646\u0651\u0627 \u0639\u0644\u0645\u064B\u0627',
        translation: 'E encontraram um servo dentre Nossos servos, a quem haviamos concedido misericordia de Nossa parte e a quem haviamos ensinado conhecimento de Nossa presenca.',
        context: 'O encontro de Musa com Al-Khidr — o misterioso sabio que fura um barco, mata um menino e constroi um muro, e depois explica a sabedoria oculta por tras de cada acao. Uma licao sobre providencia divina que transcende a logica humana imediata.'
      }
    ],
    convergences: [
      'Salvo das aguas quando bebe, criado no palacio do proprio opressor',
      'Encontrou Deus na sarca ardente e recebeu a missao de libertar seu povo',
      'Confrontou o Farao com sinais divinos e pragas',
      'Abriu o mar para a passagem dos filhos de Israel',
      'Recebeu a Lei divina (Tora/Tawrat) como revelacao de Deus'
    ],
    divergences: [
      'Musa e o profeta mais mencionado no Alcorao (136 vezes) — enfase em sua humanidade, duvidas e emocoes internas',
      'O Alcorao adiciona o encontro com Al-Khidr (Surata 18), ausente na Biblia — uma licao sobre sabedoria divina oculta',
      'O Alcorao enfatiza mais o drama psicologico de Musa (medo, hesitacao, raiva) do que os detalhes fisicos do Exodo',
      'Na resolucao do bezerro de ouro, a enfase corancia esta na raiva de Musa com seu irmao Harun e no arrependimento do povo'
    ],
    scholarContext: 'Musa e o profeta que mais aparece no Alcorao — mencionado 136 vezes, mais do que qualquer outro, incluindo Muhammad. Os estudiosos islamicos explicam isso pela extensao de sua missao: ele enfrentou o maior tirano, liderou o maior exodo, recebeu a lei mais detalhada e teve a relacao mais direta com Deus (Kalimullah — aquele com quem Deus falou diretamente). A Biblia e o Alcorao concordam em praticamente todos os eventos principais da vida de Moises; a diferenca esta na lente narrativa — o Exodo e mais historico-legal, o Alcorao e mais psicologico-espiritual.'
  },

  // ==========================================================================
  // 5. ISA (Jesus)
  // ==========================================================================
  {
    id: 'isa',
    name: 'Isa (Jesus)',
    arabicName: '\u0639\u064A\u0633\u0649',
    era: '~4 a.C. - ~30 d.C.',
    bibleRefs: [
      {
        book: 'Lucas',
        chapter: '1',
        verses: '26-35',
        text: 'E, no sexto mes, foi o anjo Gabriel enviado por Deus a uma cidade da Galileia, chamada Nazare, a uma virgem desposada com um homem cujo nome era Jose, da casa de Davi; e o nome da virgem era Maria. Disse-lhe o anjo: Nao temas, Maria, porque achaste graca diante de Deus. Eis que conceberao e daras a luz um filho, e por-lhe-as o nome de Jesus. Respondeu-lhe Maria: Como se fara isto, visto que nao conheco homem algum? Descera sobre ti o Espirito Santo.',
        context: 'A anunciacao a Maria pelo anjo Gabriel — o nascimento virginal de Jesus e afirmado tanto no Evangelho de Lucas quanto no Alcorao, com linguagem notavelmente similar.'
      },
      {
        book: 'Mateus',
        chapter: '4',
        verses: '23-24',
        text: 'E percorria Jesus toda a Galileia, ensinando nas suas sinagogas, e pregando o evangelho do Reino, e curando todas as enfermidades e molestias entre o povo. E a sua fama correu por toda a Siria; e traziam-lhe todos os que padeciam de diversas enfermidades e tormentos, os endemoninhados, os lunaticos e os paraliticos, e ele os curava.',
        context: 'O ministerio de cura e ensino de Jesus — milagres reconhecidos tanto pela Biblia quanto pelo Alcorao, embora a interpretacao teologica do poder por tras dos milagres seja diferente.'
      },
      {
        book: 'Joao',
        chapter: '14',
        verses: '6',
        text: 'Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida; ninguem vem ao Pai, senao por mim.',
        context: 'A afirmacao crista central sobre a divindade e exclusividade de Jesus como mediador entre Deus e a humanidade — ponto de divergencia fundamental com a posicao islamica.'
      },
      {
        book: 'Atos',
        chapter: '2',
        verses: '22',
        text: 'Varaes israelitas, escutai estas palavras: A Jesus Nazareno, varao aprovado por Deus entre vos com maravilhas, prodigios e sinais, que Deus por ele fez no meio de vos, como vos mesmos bem sabeis.',
        context: 'Pedro descreve Jesus como um homem aprovado por Deus que fez sinais "por ele" — linguagem que ressoa com a posicao islamica de que os milagres vinham de Deus atraves de Jesus, nao de Jesus como Deus.'
      }
    ],
    quranRefs: [
      {
        surah: 'Maryam',
        surahNumber: 19,
        verses: '16-21',
        arabic: '\u0641\u0623\u0631\u0633\u0644\u0646\u0627 \u0625\u0644\u064A\u0647\u0627 \u0631\u0648\u062D\u0646\u0627 \u0641\u062A\u0645\u062B\u0651\u0644 \u0644\u0647\u0627 \u0628\u0634\u0631\u064B\u0627 \u0633\u0648\u064A\u0651\u064B\u0627 ... \u0642\u0627\u0644 \u0625\u0646\u0651\u0645\u0627 \u0623\u0646\u0627 \u0631\u0633\u0648\u0644 \u0631\u0628\u0651\u0643 \u0644\u0623\u0647\u0628 \u0644\u0643 \u063A\u0644\u0627\u0645\u064B\u0627 \u0632\u0643\u064A\u0651\u064B\u0627 ... \u0642\u0627\u0644\u062A \u0623\u0646\u0651\u0649 \u064A\u0643\u0648\u0646 \u0644\u064A \u063A\u0644\u0627\u0645 \u0648\u0644\u0645 \u064A\u0645\u0633\u0633\u0646\u064A \u0628\u0634\u0631 ... \u0642\u0627\u0644 \u0643\u0630\u0644\u0643 \u0642\u0627\u0644 \u0631\u0628\u0651\u0643 \u0647\u0648 \u0639\u0644\u064A\u0651 \u0647\u064A\u0651\u0646',
        translation: 'Enviamos-lhe o Nosso Espirito, que se lhe apresentou na forma de um ser humano perfeito. ... Disse: Sou apenas um mensageiro do teu Senhor, para te dar um filho puro. ... Disse ela: Como terei um filho, quando homem algum me tocou? ... Disse: Assim e. Teu Senhor disse: Isso e facil para Mim.',
        context: 'A anunciacao a Mariam no Alcorao — o nascimento virginal confirmado com clareza absoluta. Maria e a unica mulher mencionada pelo nome no Alcorao inteiro, e tem um capitulo dedicado a ela.'
      },
      {
        surah: 'Ali \'Imran',
        surahNumber: 3,
        verses: '45-49',
        arabic: '\u0625\u0630 \u0642\u0627\u0644\u062A \u0627\u0644\u0645\u0644\u0627\u0626\u0643\u0629 \u064A\u0627 \u0645\u0631\u064A\u0645 \u0625\u0646\u0651 \u0627\u0644\u0644\u0651\u0647 \u064A\u0628\u0634\u0651\u0631\u0643 \u0628\u0643\u0644\u0645\u0629 \u0645\u0646\u0647 \u0627\u0633\u0645\u0647 \u0627\u0644\u0645\u0633\u064A\u062D \u0639\u064A\u0633\u0649 \u0627\u0628\u0646 \u0645\u0631\u064A\u0645 \u0648\u062C\u064A\u0647\u064B\u0627 \u0641\u064A \u0627\u0644\u062F\u0651\u0646\u064A\u0627 \u0648\u0627\u0644\u0622\u062E\u0631\u0629 ... \u0648\u064A\u0643\u0644\u0651\u0645 \u0627\u0644\u0646\u0651\u0627\u0633 \u0641\u064A \u0627\u0644\u0645\u0647\u062F \u0648\u0643\u0647\u0644\u064B\u0627 ... \u0623\u0646\u0651\u064A \u0623\u062E\u0644\u0642 \u0644\u0643\u0645 \u0645\u0646 \u0627\u0644\u0637\u0651\u064A\u0646 \u0643\u0647\u064A\u0626\u0629 \u0627\u0644\u0637\u0651\u064A\u0631 \u0641\u0623\u0646\u0641\u062E \u0641\u064A\u0647 \u0641\u064A\u0643\u0648\u0646 \u0637\u064A\u0631\u064B\u0627 \u0628\u0625\u0630\u0646 \u0627\u0644\u0644\u0651\u0647 \u0648\u0623\u0628\u0631\u0626 \u0627\u0644\u0623\u0643\u0645\u0647 \u0648\u0627\u0644\u0623\u0628\u0631\u0635 \u0648\u0623\u062D\u064A\u064A \u0627\u0644\u0645\u0648\u062A\u0649 \u0628\u0625\u0630\u0646 \u0627\u0644\u0644\u0651\u0647',
        translation: 'Quando os anjos disseram: O Mariam, Deus te anuncia uma Palavra Sua, cujo nome sera o Messias, Isa filho de Mariam, ilustre neste mundo e no Outro. ... E falara as pessoas no berco e na maturidade. ... Que eu crio para vos do barro a forma de um passaro e sopro nele e se torna passaro, com a permissao de Deus, e curo o cego de nascenca e o leproso e ressuscito os mortos, com a permissao de Deus.',
        context: 'Isa recebe titulos extraordinarios — Messias, Palavra de Deus — e seus milagres sao confirmados: curar cegos, leprosos, ressuscitar mortos, moldar passaros de barro. O Alcorao sempre acrescenta "com a permissao de Deus".'
      },
      {
        surah: 'An-Nisa',
        surahNumber: 4,
        verses: '157-158',
        arabic: '\u0648\u0642\u0648\u0644\u0647\u0645 \u0625\u0646\u0651\u0627 \u0642\u062A\u0644\u0646\u0627 \u0627\u0644\u0645\u0633\u064A\u062D \u0639\u064A\u0633\u0649 \u0627\u0628\u0646 \u0645\u0631\u064A\u0645 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0651\u0647 \u0648\u0645\u0627 \u0642\u062A\u0644\u0648\u0647 \u0648\u0645\u0627 \u0635\u0644\u0628\u0648\u0647 \u0648\u0644\u0643\u0646 \u0634\u0628\u0651\u0647 \u0644\u0647\u0645 ... \u0628\u0644 \u0631\u0641\u0639\u0647 \u0627\u0644\u0644\u0651\u0647 \u0625\u0644\u064A\u0647',
        translation: 'E por dizerem: Matamos o Messias, Isa filho de Mariam, o mensageiro de Deus. Porem nao o mataram e nao o crucificaram, mas pareceu-lhes assim. ... Ao contrario, Deus o elevou para Si.',
        context: 'A posicao islamica sobre a crucificacao: Isa nao foi morto nem crucificado, foi elevado por Deus. Esta e a divergencia mais profunda entre as duas tradicoes sobre Jesus.'
      },
      {
        surah: 'Al-Ma\'idah',
        surahNumber: 5,
        verses: '116-117',
        arabic: '\u0648\u0625\u0630 \u0642\u0627\u0644 \u0627\u0644\u0644\u0651\u0647 \u064A\u0627 \u0639\u064A\u0633\u0649 \u0627\u0628\u0646 \u0645\u0631\u064A\u0645 \u0623\u0623\u0646\u062A \u0642\u0644\u062A \u0644\u0644\u0646\u0651\u0627\u0633 \u0627\u062A\u0651\u062E\u0630\u0648\u0646\u064A \u0648\u0623\u0645\u0651\u064A \u0625\u0644\u0647\u064A\u0646 \u0645\u0646 \u062F\u0648\u0646 \u0627\u0644\u0644\u0651\u0647 \u0642\u0627\u0644 \u0633\u0628\u062D\u0627\u0646\u0643 \u0645\u0627 \u064A\u0643\u0648\u0646 \u0644\u064A \u0623\u0646 \u0623\u0642\u0648\u0644 \u0645\u0627 \u0644\u064A\u0633 \u0644\u064A \u0628\u062D\u0642\u0651 ... \u0645\u0627 \u0642\u0644\u062A \u0644\u0647\u0645 \u0625\u0644\u0627 \u0645\u0627 \u0623\u0645\u0631\u062A\u0646\u064A \u0628\u0647 \u0623\u0646 \u0627\u0639\u0628\u062F\u0648\u0627 \u0627\u0644\u0644\u0651\u0647 \u0631\u0628\u0651\u064A \u0648\u0631\u0628\u0651\u0643\u0645',
        translation: 'E quando Deus disse: O Isa filho de Mariam, foste tu que disseste as pessoas: Tomai-me e a minha mae como dois deuses alem de Deus? Disse: Gloria a Ti! Nao me cabe dizer o que nao tenho direito. ... Nao lhes disse senao o que me ordenaste: Adorai a Deus, meu Senhor e vosso Senhor.',
        context: 'No Alcorao, Isa nega explicitamente ter pedido para ser adorado. Ele afirma ter ensinado apenas o monoteismo puro. O Islam ve a deificacao de Jesus como um desvio posterior, nao como algo que Jesus ensinou.'
      }
    ],
    convergences: [
      'Nascimento virginal por poder divino direto, sem pai humano',
      'Realizou milagres: curou cegos, leprosos, ressuscitou mortos',
      'Recebeu o titulo de Messias (Al-Masih) em ambas as tradicoes',
      'Ambas as tradicoes aguardam o retorno de Jesus nos tempos finais'
    ],
    divergences: [
      'O Islam nao aceita a divindade de Jesus nem a doutrina da Trindade — Isa e o maior dos profetas humanos, nao Deus encarnado',
      'O Alcorao afirma que Isa nao foi crucificado nem morto, mas elevado por Deus — rejeitando a crucificacao como evento historico',
      'No Islam nao existe pecado original nem necessidade de sacrificio expiatorio — cada pessoa responde por seus proprios atos',
      'O Alcorao inclui milagres ausentes nos Evangelhos canonicos: Isa falou no berco e moldou passaros de argila que ganharam vida'
    ],
    scholarContext: 'Isa (Jesus) e um dos cinco profetas de maior determinacao (Ulul Azm) no Islam, ao lado de Nuh, Ibrahim, Musa e Muhammad. O Alcorao o chama de Al-Masih (Messias), Kalimatullah (Palavra de Deus) e Ruhullah (Espirito de Deus) — titulos extraordinarios que nenhum outro profeta recebe. A divergencia central e irreconciliavel: o Cristianismo se fundamenta na morte e ressurreicao de Jesus como ato redentor; o Islam afirma que ele nao morreu na cruz e que Deus perdoa diretamente, sem necessidade de sacrificio. Apesar disso, Maria (Mariam) e mencionada mais vezes no Alcorao do que em todo o Novo Testamento.'
  },

  // ==========================================================================
  // 6. MUHAMMAD
  // ==========================================================================
  {
    id: 'muhammad',
    name: 'Muhammad',
    arabicName: '\u0645\u062D\u0645\u062F',
    era: '570-632 d.C.',
    bibleRefs: [
      {
        book: 'Deuteronomio',
        chapter: '18',
        verses: '15-18',
        text: 'O Senhor, teu Deus, te levantara um profeta do meio de ti, de teus irmaos, semelhante a mim; a ele ouvireis. Conforme tudo o que pediste ao Senhor, teu Deus, em Horebe, no dia da assembleia. Levantarei um profeta do meio de seus irmaos, semelhante a ti, e porei as minhas palavras na sua boca, e ele lhes falara tudo o que eu lhe ordenar.',
        context: 'Estudiosos islamicos identificam neste trecho uma profecia sobre Muhammad: um profeta "semelhante a Moises" (lider politico e religioso), vindo dos "irmaos" de Israel (os ismaelitas/arabes, descendentes de Ismail). Estudiosos cristaos e judaicos interpretam de forma diferente.'
      },
      {
        book: 'Joao',
        chapter: '14',
        verses: '16-17, 26',
        text: 'E eu rogarei ao Pai, e ele vos dara outro Consolador, para que fique convosco para sempre, o Espirito da verdade. Mas aquele Consolador, o Espirito Santo, que o Pai enviara em meu nome, vos ensinara todas as coisas e vos fara lembrar de tudo quanto vos tenho dito.',
        context: 'A palavra grega "Parakletos" (Consolador) e comparada por estudiosos islamicos a "Periklytos" (o muito louvado), que seria o significado literal de "Ahmad/Muhammad" em arabe. O Alcorao afirma que Isa anunciou um mensageiro chamado Ahmad. Estudiosos cristaos identificam o Paracleto como o Espirito Santo.'
      },
      {
        book: 'Isaias',
        chapter: '42',
        verses: '1-4, 10-11',
        text: 'Eis aqui o meu servo, a quem sustento; o meu eleito, em quem se alegra a minha alma. Pus o meu espirito sobre ele; ele trara justica as nacoes. Nao clamara, nao se exaltara, nem fara ouvir a sua voz na praca. Cantai ao Senhor um cantico novo, e o seu louvor desde a extremidade da terra. Clamai do deserto e das suas cidades, das aldeias habitadas por Quedar.',
        context: 'Quedar e filho de Ismail na Biblia (Genesis 25:13), e seus descendentes habitavam a Arabia. Estudiosos islamicos veem nesta profecia uma referencia a Muhammad, que veio dos descendentes de Quedar/Ismail. Estudiosos cristaos aplicam o trecho a Jesus ou a Israel como nacao.'
      },
      {
        book: 'Deuteronomio',
        chapter: '33',
        verses: '2',
        text: 'O Senhor veio de Sinai, e lhes subiu de Seir; resplandeceu desde o monte Para, e veio com dez milhares de santos; a sua direita havia para eles uma lei ardente.',
        context: 'Estudiosos islamicos interpretam as tres localidades como referencia a tres revelacoes: Sinai (Musa), Seir/Galileia (Isa) e Para/Fara (Muhammad, que conquistou Meca com dez mil companheiros). Esta leitura e contestada por estudiosos de outras tradicoes.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-Alaq',
        surahNumber: 96,
        verses: '1-5',
        arabic: '\u0627\u0642\u0631\u0623 \u0628\u0627\u0633\u0645 \u0631\u0628\u0651\u0643 \u0627\u0644\u0651\u0630\u064A \u062E\u0644\u0642 \u062E\u0644\u0642 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0645\u0646 \u0639\u0644\u0642 \u0627\u0642\u0631\u0623 \u0648\u0631\u0628\u0651\u0643 \u0627\u0644\u0623\u0643\u0631\u0645 \u0627\u0644\u0651\u0630\u064A \u0639\u0644\u0651\u0645 \u0628\u0627\u0644\u0642\u0644\u0645 \u0639\u0644\u0651\u0645 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0645\u0627 \u0644\u0645 \u064A\u0639\u0644\u0645',
        translation: 'Le em nome do teu Senhor que criou. Criou o homem de um coagulo. Le, e teu Senhor e o mais Generoso. Aquele que ensinou pelo calamo. Ensinou ao homem o que ele nao sabia.',
        context: 'As primeiras palavras reveladas a Muhammad na Caverna de Hira — a primeira revelacao do Islam comeca com a ordem de ler, para um homem que nao sabia ler. O conhecimento como fundamento da fe.'
      },
      {
        surah: 'Al-Ahzab',
        surahNumber: 33,
        verses: '40',
        arabic: '\u0645\u0627 \u0643\u0627\u0646 \u0645\u062D\u0645\u0651\u062F \u0623\u0628\u0627 \u0623\u062D\u062F \u0645\u0646 \u0631\u062C\u0627\u0644\u0643\u0645 \u0648\u0644\u0643\u0646 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0651\u0647 \u0648\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0651\u0628\u064A\u0651\u064A\u0646',
        translation: 'Muhammad nao e pai de nenhum de vossos homens, mas e o Mensageiro de Deus e o Selo dos Profetas.',
        context: 'O titulo Khatam an-Nabiyyin (Selo dos Profetas) — Muhammad e o ultimo da cadeia profetica que comeca com Adao. Nao porque Deus parou de se importar, mas porque a revelacao esta completa.'
      },
      {
        surah: 'Al-Anbiya',
        surahNumber: 21,
        verses: '107',
        arabic: '\u0648\u0645\u0627 \u0623\u0631\u0633\u0644\u0646\u0627\u0643 \u0625\u0644\u0627 \u0631\u062D\u0645\u0629\u064B \u0644\u0644\u0639\u0627\u0644\u0645\u064A\u0646',
        translation: 'E nao te enviamos senao como misericordia para todos os mundos.',
        context: 'A missao de Muhammad definida em uma frase: nao conquistador, nao legislador — misericordia. E para todos os mundos (al-alamin), nao apenas para os arabes.'
      },
      {
        surah: 'As-Saff',
        surahNumber: 61,
        verses: '6',
        arabic: '\u0648\u0625\u0630 \u0642\u0627\u0644 \u0639\u064A\u0633\u0649 \u0627\u0628\u0646 \u0645\u0631\u064A\u0645 \u064A\u0627 \u0628\u0646\u064A \u0625\u0633\u0631\u0627\u0626\u064A\u0644 \u0625\u0646\u0651\u064A \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0651\u0647 \u0625\u0644\u064A\u0643\u0645 \u0645\u0635\u062F\u0651\u0642\u064B\u0627 \u0644\u0645\u0627 \u0628\u064A\u0646 \u064A\u062F\u064A\u0651 \u0645\u0646 \u0627\u0644\u062A\u0651\u0648\u0631\u0627\u0629 \u0648\u0645\u0628\u0634\u0651\u0631\u064B\u0627 \u0628\u0631\u0633\u0648\u0644 \u064A\u0623\u062A\u064A \u0645\u0646 \u0628\u0639\u062F\u064A \u0627\u0633\u0645\u0647 \u0623\u062D\u0645\u062F',
        translation: 'E quando Isa filho de Mariam disse: O filhos de Israel, sou o mensageiro de Deus para vos, confirmando a Tora que veio antes de mim e dando boas-novas de um mensageiro que vira depois de mim, cujo nome sera Ahmad.',
        context: 'O Alcorao apresenta Isa anunciando a vinda de Ahmad (Muhammad) — estabelecendo a continuidade profetica. Ahmad e outro nome de Muhammad, significando "o mais louvado".'
      }
    ],
    convergences: [
      'Reconheceu e afirmou Moises e Jesus como profetas autenticos de Deus',
      'Pregou o monoteismo estrito e a submissao a um unico Deus',
      'Existencia historica documentada e aceita por todas as tradicoes academicas',
      'Profecias biblicas que estudiosos islamicos aplicam a Muhammad (interpretacao contestada por outras tradicoes)'
    ],
    divergences: [
      'Nao e reconhecido como profeta pelo Judaismo nem pelo Cristianismo — esta e a diferenca fundamental',
      'O Islam afirma que Muhammad e o Selo dos Profetas (Khatam an-Nabiyyin), o ultimo de uma cadeia que comeca com Adao',
      'O Alcorao e apresentado como revelacao final e preservada, que confirma e corrige as escrituras anteriores',
      'Muhammad foi profeta e estadista — lider politico, militar e religioso, diferentemente de Jesus na narrativa crista'
    ],
    scholarContext: 'Muhammad ocupa uma posicao unica no dialogo inter-religioso: e o unico dos grandes profetas que nao e reconhecido como tal por nenhuma das outras tradicoes abraamicas. Para o Islam, ele e o cumprimento de toda a cadeia profetica — confirmando Adao, Ibrahim, Musa e Isa, e encerrando a revelacao. Os estudiosos islamicos apontam para profecias biblicas (Deuteronomio 18, Joao 14, Isaias 42) como evidencia de que as proprias escrituras anteriores anunciaram sua vinda. Estudiosos cristaos e judaicos rejeitam essas interpretacoes, mas reconhecem o impacto historico de Muhammad como uma das figuras mais influentes da historia humana.'
  },

  // ==========================================================================
  // 7. NUH (Noe)
  // ==========================================================================
  {
    id: 'nuh',
    name: 'Nuh (Noe)',
    arabicName: '\u0646\u0648\u062D',
    era: 'Era Antediluviana',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '6',
        verses: '9-14, 17-18',
        text: 'Noe era homem justo e integro entre os seus contemporaneos; Noe andava com Deus. E gerou Noe tres filhos: Sem, Cam e Jafe. A terra, porem, estava corrompida diante de Deus e cheia de violencia. Disse Deus a Noe: O fim de toda carne e vindo perante mim; porque a terra esta cheia de violencia. Faze para ti uma arca de madeira de gofer. Eis que eu trago um diluvio de aguas sobre a terra. Mas contigo estabelecerei a minha alianca.',
        context: 'Noe e apresentado como o unico homem justo em uma geracao inteiramente corrompida. Deus o escolhe para preservar a vida na terra atraves da arca — um ato de misericordia dentro do julgamento.'
      },
      {
        book: 'Genesis',
        chapter: '7',
        verses: '11-12, 17-20',
        text: 'No ano seiscentos da vida de Noe, no mes segundo, aos dezessete dias do mes, naquele mesmo dia se romperam todas as fontes do grande abismo, e as janelas dos ceus se abriram. E houve chuva sobre a terra quarenta dias e quarenta noites. E veio o diluvio quarenta dias sobre a terra, e cresceram as aguas e levantaram a arca, e ela se elevou sobre a terra.',
        context: 'O diluvio e descrito como evento cosmico — fontes do abismo e janelas dos ceus se abrindo simultaneamente. A narrativa enfatiza tanto a devastacao total quanto a preservacao da arca.'
      },
      {
        book: 'Genesis',
        chapter: '9',
        verses: '8-13',
        text: 'Disse Deus a Noe e a seus filhos: Eis que estabeleco a minha alianca convosco e com a vossa descendencia. Nao sera mais destruida toda carne por aguas de diluvio, nem mais havera diluvio para destruir a terra. O meu arco tenho posto na nuvem; este sera por sinal da alianca entre mim e a terra.',
        context: 'Apos o diluvio, Deus faz alianca com Noe e toda a humanidade — simbolizada pelo arco-iris. E a primeira alianca universal na Biblia, anterior a de Abraao e Moises.'
      }
    ],
    quranRefs: [
      {
        surah: 'Nuh',
        surahNumber: 71,
        verses: '1-5',
        arabic: '\u0625\u0646\u0651\u0627 \u0623\u0631\u0633\u0644\u0646\u0627 \u0646\u0648\u062D\u064B\u0627 \u0625\u0644\u0649 \u0642\u0648\u0645\u0647 \u0623\u0646 \u0623\u0646\u0630\u0631 \u0642\u0648\u0645\u0643 \u0645\u0646 \u0642\u0628\u0644 \u0623\u0646 \u064A\u0623\u062A\u064A\u0647\u0645 \u0639\u0630\u0627\u0628\u064C \u0623\u0644\u064A\u0645 \u0642\u0627\u0644 \u064A\u0627 \u0642\u0648\u0645 \u0625\u0646\u0651\u064A \u0644\u0643\u0645 \u0646\u0630\u064A\u0631\u064C \u0645\u0628\u064A\u0646',
        translation: 'Enviamos Nuh ao seu povo: Adverte teu povo antes que lhes sobrevenha um castigo doloroso. Disse: O meu povo, sou para vos um advertidor claro.',
        context: 'A Surata Nuh (capitulo 71) e inteiramente dedicada a ele. O Alcorao enfatiza que Nuh pregou por seculos ao seu povo, com paciencia e persistencia, usando todos os metodos possiveis.'
      },
      {
        surah: 'Hud',
        surahNumber: 11,
        verses: '36-40',
        arabic: '\u0648\u0623\u0648\u062D\u064A \u0625\u0644\u0649 \u0646\u0648\u062D \u0623\u0646\u0651\u0647 \u0644\u0646 \u064A\u0624\u0645\u0646 \u0645\u0646 \u0642\u0648\u0645\u0643 \u0625\u0644\u0627 \u0645\u0646 \u0642\u062F \u0622\u0645\u0646 ... \u0648\u0627\u0635\u0646\u0639 \u0627\u0644\u0641\u0644\u0643 \u0628\u0623\u0639\u064A\u0646\u0646\u0627 \u0648\u0648\u062D\u064A\u0646\u0627 ... \u062D\u062A\u0651\u0649 \u0625\u0630\u0627 \u062C\u0627\u0621 \u0623\u0645\u0631\u0646\u0627 \u0648\u0641\u0627\u0631 \u0627\u0644\u062A\u0651\u0646\u0651\u0648\u0631 \u0642\u0644\u0646\u0627 \u0627\u062D\u0645\u0644 \u0641\u064A\u0647\u0627 \u0645\u0646 \u0643\u0644\u0651 \u0632\u0648\u062C\u064A\u0646 \u0627\u062B\u0646\u064A\u0646',
        translation: 'E foi revelado a Nuh: Nao crera do teu povo senao quem ja creu. Constroi a arca sob Nossos olhos e Nossa revelacao. Ate que quando veio Nossa ordem e o forno transbordou, dissemos: Carrega nela de cada especie um par.',
        context: 'O Alcorao descreve a construcao da arca como ato de obediencia sob supervisao divina direta. O sinal do inicio do diluvio e o "forno que transborda" — imagem unica do Alcorao.'
      },
      {
        surah: 'Hud',
        surahNumber: 11,
        verses: '42-43',
        arabic: '\u0648\u0646\u0627\u062F\u0649 \u0646\u0648\u062D \u0627\u0628\u0646\u0647 \u0648\u0643\u0627\u0646 \u0641\u064A \u0645\u0639\u0632\u0644 \u064A\u0627 \u0628\u0646\u064A\u0651 \u0627\u0631\u0643\u0628 \u0645\u0639\u0646\u0627 \u0648\u0644\u0627 \u062A\u0643\u0646 \u0645\u0639 \u0627\u0644\u0643\u0627\u0641\u0631\u064A\u0646 \u0642\u0627\u0644 \u0633\u0622\u0648\u064A \u0625\u0644\u0649 \u062C\u0628\u0644 \u064A\u0639\u0635\u0645\u0646\u064A \u0645\u0646 \u0627\u0644\u0645\u0627\u0621 \u0642\u0627\u0644 \u0644\u0627 \u0639\u0627\u0635\u0645 \u0627\u0644\u064A\u0648\u0645 \u0645\u0646 \u0623\u0645\u0631 \u0627\u0644\u0644\u0651\u0647 \u0625\u0644\u0627 \u0645\u0646 \u0631\u062D\u0645',
        translation: 'E Nuh chamou seu filho que estava afastado: O meu filho, embarca conosco e nao estejas com os descrentes! Disse: Refugiar-me-ei numa montanha que me protegera da agua. Disse: Nao ha protetor hoje contra o decreto de Deus, exceto para quem Ele tiver misericordia.',
        context: 'O dialogo entre Nuh e seu filho que recusa embarcar e uma das cenas mais tragicas do Alcorao. Essa narrativa — ausente na Biblia — revela que nem todos da familia de Nuh foram salvos, e que o laco de sangue nao substitui a fe.'
      }
    ],
    convergences: [
      'Unico homem justo em uma geracao inteiramente corrompida pela violencia e pelo mal',
      'Construiu a arca por ordem direta de Deus para preservar a vida na terra',
      'O diluvio destruiu toda a civilizacao existente, poupando apenas quem estava na arca',
      'Apos o diluvio, Deus fez promessa de nao destruir a terra novamente por agua'
    ],
    divergences: [
      'O Alcorao adiciona o drama do filho de Nuh que recusa embarcar e morre no diluvio — ausente na Biblia, onde todos os filhos sao salvos',
      'No Islam, Nuh pregou ao seu povo por 950 anos antes do diluvio (Alcorao 29:14), enfatizando a paciencia divina e a obstinacao humana',
      'O Alcorao nao menciona o arco-iris como sinal de alianca — a enfase esta na misericordia de Deus para com os crentes',
      'Na Biblia, Noe planta uma vinha e se embriaga apos o diluvio (Genesis 9:20-21); no Alcorao, os profetas sao protegidos de tais acoes'
    ],
    scholarContext: 'Nuh e um dos cinco profetas de maior determinacao (Ulul Azm) no Islam, ao lado de Ibrahim, Musa, Isa e Muhammad. Sua historia ocupa espaco significativo no Alcorao, com uma surata inteira dedicada a ele (Surata 71). A narrativa do diluvio e universal — aparece em dezenas de culturas ao redor do mundo, do Epico de Gilgamesh as tradicoes indigenas sul-americanas. A diferenca central entre Biblia e Alcorao nesta historia esta no desfecho familiar: na Biblia, toda a familia de Noe e salva; no Alcorao, um filho se recusa a crer e perece. Essa divergencia ensina um principio islamico fundamental: a salvacao e individual, nao hereditaria.'
  },

  // ==========================================================================
  // 8. LUT (Lo)
  // ==========================================================================
  {
    id: 'lut',
    name: 'Lut (Lo)',
    arabicName: '\u0644\u0648\u0637',
    era: '~2000 a.C.',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '19',
        verses: '1-3, 12-13',
        text: 'E vieram os dois anjos a Sodoma a tarde, e estava Lo assentado a porta de Sodoma; e, vendo-os Lo, levantou-se ao seu encontro e inclinou-se com o rosto a terra. E disse: Eis agora, meus senhores, entrai, peco-vos, em casa de vosso servo, e passai nela a noite. Disseram os homens a Lo: Tens alguem mais aqui? Tira deste lugar genro, ou teus filhos, ou tuas filhas, e todos quantos tens nesta cidade; porque nos vamos destruir este lugar, porquanto o clamor deles tem crescido diante do Senhor.',
        context: 'Lo recebe os anjos como hospedes e e avisado da destruicao iminente de Sodoma. A hospitalidade de Lo contrasta com a hostilidade dos habitantes da cidade.'
      },
      {
        book: 'Genesis',
        chapter: '19',
        verses: '24-26',
        text: 'Entao o Senhor fez chover enxofre e fogo do Senhor desde os ceus sobre Sodoma e Gomorra. E destruiu aquelas cidades, e toda a planicie, e todos os moradores daquelas cidades, e o que nascia da terra. E a mulher de Lo olhou para tras e ficou convertida numa estatua de sal.',
        context: 'A destruicao de Sodoma e Gomorra por fogo e enxofre e a esposa de Lo que olha para tras e e transformada em sal — simbolizando o apego ao que Deus mandou abandonar.'
      },
      {
        book: '2 Pedro',
        chapter: '2',
        verses: '6-8',
        text: 'E condenou a destruicao as cidades de Sodoma e Gomorra, reduzindo-as a cinzas, e pos-las para exemplo aos que vivessem impiamente; e livrou o justo Lo, enfadado da vida dissoluta dos homens abominaveis (porque este justo, habitando entre eles, afligia todos os dias a sua alma justa, vendo e ouvindo sobre as suas obras injustas).',
        context: 'Pedro apresenta Lo como homem justo que sofria moralmente ao viver no meio da corrupcao de Sodoma — um retrato que reforca sua posicao como figura profetica.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-A\'raf',
        surahNumber: 7,
        verses: '80-84',
        arabic: '\u0648\u0644\u0648\u0637\u064B\u0627 \u0625\u0630 \u0642\u0627\u0644 \u0644\u0642\u0648\u0645\u0647 \u0623\u062A\u0623\u062A\u0648\u0646 \u0627\u0644\u0641\u0627\u062D\u0634\u0629 \u0645\u0627 \u0633\u0628\u0642\u0643\u0645 \u0628\u0647\u0627 \u0645\u0646 \u0623\u062D\u062F \u0645\u0646 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0646 ... \u0648\u0645\u0627 \u0643\u0627\u0646 \u062C\u0648\u0627\u0628 \u0642\u0648\u0645\u0647 \u0625\u0644\u0627 \u0623\u0646 \u0642\u0627\u0644\u0648\u0627 \u0623\u062E\u0631\u062C\u0648\u0647\u0645 \u0645\u0646 \u0642\u0631\u064A\u062A\u0643\u0645 \u0625\u0646\u0651\u0647\u0645 \u0623\u0646\u0627\u0633 \u064A\u062A\u0637\u0647\u0651\u0631\u0648\u0646',
        translation: 'E Lut, quando disse ao seu povo: Cometeis a imoralidade que ninguem no mundo cometeu antes de vos? E a unica resposta de seu povo foi dizer: Expulsai-os de vossa cidade, pois sao gente que quer se purificar.',
        context: 'Lut confronta seu povo e e rejeitado. A ironia e poderosa: o povo usa a pureza de Lut como razao para expulsa-lo. Quem busca pureza e tratado como estrangeiro.'
      },
      {
        surah: 'Ash-Shu\'ara',
        surahNumber: 26,
        verses: '160-175',
        arabic: '\u0643\u0630\u0651\u0628\u062A \u0642\u0648\u0645 \u0644\u0648\u0637 \u0627\u0644\u0645\u0631\u0633\u0644\u064A\u0646 \u0625\u0630 \u0642\u0627\u0644 \u0644\u0647\u0645 \u0623\u062E\u0648\u0647\u0645 \u0644\u0648\u0637 \u0623\u0644\u0627 \u062A\u062A\u0651\u0642\u0648\u0646 ... \u0641\u0623\u0646\u062C\u064A\u0646\u0627\u0647 \u0648\u0623\u0647\u0644\u0647 \u0623\u062C\u0645\u0639\u064A\u0646 \u0625\u0644\u0627 \u0639\u062C\u0648\u0632\u064B\u0627 \u0641\u064A \u0627\u0644\u063A\u0627\u0628\u0631\u064A\u0646 \u062B\u0645\u0651 \u062F\u0645\u0651\u0631\u0646\u0627 \u0627\u0644\u0622\u062E\u0631\u064A\u0646',
        translation: 'O povo de Lut desmentiu os mensageiros. Quando seu irmao Lut lhes disse: Nao temeis a Deus? ... Salvamo-lo com toda a sua familia, exceto uma velha que ficou entre os que permaneceram. Depois destruimos os demais.',
        context: 'O Alcorao se refere a esposa de Lut como "uma velha que ficou entre os que permaneceram" — ela nao foi salva por estar alinhada com os transgressores, nao com o profeta.'
      },
      {
        surah: 'Al-Hijr',
        surahNumber: 15,
        verses: '61-66',
        arabic: '\u0641\u0644\u0645\u0651\u0627 \u062C\u0627\u0621 \u0622\u0644 \u0644\u0648\u0637 \u0627\u0644\u0645\u0631\u0633\u0644\u0648\u0646 \u0642\u0627\u0644 \u0625\u0646\u0651\u0643\u0645 \u0642\u0648\u0645 \u0645\u0646\u0643\u0631\u0648\u0646 \u0642\u0627\u0644\u0648\u0627 \u0628\u0644 \u062C\u0626\u0646\u0627\u0643 \u0628\u0645\u0627 \u0643\u0627\u0646\u0648\u0627 \u0641\u064A\u0647 \u064A\u0645\u062A\u0631\u0648\u0646',
        translation: 'Quando os mensageiros vieram a familia de Lut, disse: Vos sois gente desconhecida. Disseram: Pelo contrario, viemos a ti com aquilo sobre o qual duvidavam.',
        context: 'Os anjos chegam a Lut e revelam sua missao. O Alcorao mostra Lut desconfiado inicialmente dos visitantes, ate descobrir que sao anjos com a sentenca divina sobre a cidade.'
      }
    ],
    convergences: [
      'Viveu como homem justo no meio de uma cidade dominada pela imoralidade',
      'Anjos vieram avisa-lo da destruicao iminente e ordena-lo a fugir',
      'Sodoma e cidades vizinhas foram destruidas por castigo divino vindo dos ceus',
      'Sua esposa nao foi salva — permaneceu com os destruidos por sua propria escolha'
    ],
    divergences: [
      'No Alcorao, Lut e apresentado como profeta enviado ao povo; na Biblia, e mais sobrinho de Abraao que se estabeleceu em Sodoma',
      'O Alcorao nao inclui o episodio da embriaguez de Lo e o incesto com suas filhas (Genesis 19:30-38) — os profetas no Islam sao protegidos de tais acoes',
      'A Biblia detalha a transformacao da esposa de Lo em estatua de sal; o Alcorao menciona apenas que ela ficou entre os destruidos',
      'O Alcorao enfatiza mais o papel de Lut como pregador e advertidor do que a Biblia'
    ],
    scholarContext: 'A historia de Lut/Lo e uma das que mais divergem entre Biblia e Alcorao no tratamento do carater do profeta. Na Biblia, Lo e uma figura ambigua — justo, mas com episodios problematicos apos a destruicao de Sodoma. No Alcorao, Lut e um profeta enviado por Deus com missao clara, protegido de falhas morais graves. A destruicao de Sodoma e narrada em ambos os textos como julgamento divino contra a corrupcao moral sistematica. Os estudiosos de ambas as tradicoes concordam que o ponto central nao e apenas o pecado especifico, mas a recusa total do povo em ouvir o mensageiro de Deus e sua hostilidade violenta contra quem busca a retidao.'
  },

  // ==========================================================================
  // 9. ISHAQ (Isaque)
  // ==========================================================================
  {
    id: 'ishaq',
    name: 'Ishaq (Isaque)',
    arabicName: '\u0625\u0633\u062D\u0627\u0642',
    era: '~1900 a.C.',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '21',
        verses: '1-3',
        text: 'E o Senhor visitou a Sara, como tinha dito; e fez o Senhor a Sara como tinha prometido. E Sara concebeu e deu a Abraao um filho na sua velhice, ao tempo determinado, que Deus lhe tinha dito. E Abraao pos no filho que lhe nascera, que Sara lhe dera, o nome de Isaque.',
        context: 'O nascimento de Isaque e o cumprimento de uma promessa que parecia impossivel — Sara tinha noventa anos. O nome Isaque (Yitzhak) significa "ele ri", referencia ao riso de Sara ao ouvir a promessa.'
      },
      {
        book: 'Genesis',
        chapter: '22',
        verses: '1-2, 9-12',
        text: 'E aconteceu, depois destas coisas, que tentou Deus a Abraao e disse-lhe: Toma agora o teu filho, o teu unico filho, Isaque, a quem amas, e vai-te a terra de Moria, e oferece-o ali em holocausto. E chegaram ao lugar que Deus lhe dissera, e edificou Abraao ali um altar. Entao o anjo do Senhor lhe bradou: Nao estendas a tua mao sobre o moco, e nao lhe facas nada; porquanto agora sei que temes a Deus.',
        context: 'O sacrificio de Isaque (Akedah) e o evento central na vida de Isaque na tradicao biblica — ele e o filho que Abraao quase sacrificou no Monte Moria.'
      },
      {
        book: 'Genesis',
        chapter: '26',
        verses: '2-5',
        text: 'E apareceu-lhe o Senhor e disse: Nao desças ao Egito; habita na terra que eu te disser. Peregrina nesta terra, e serei contigo, e te abencoarei; porque a ti e a tua descendencia darei todas estas terras e confirmarei o juramento que fiz a Abraao, teu pai. E multiplicarei a tua descendencia como as estrelas dos ceus.',
        context: 'Deus renova com Isaque a alianca feita com Abraao — confirmando que a promessa continua atraves da sua linhagem. Isaque e elo essencial na cadeia patriarcal.'
      }
    ],
    quranRefs: [
      {
        surah: 'As-Saffat',
        surahNumber: 37,
        verses: '112-113',
        arabic: '\u0648\u0628\u0634\u0651\u0631\u0646\u0627\u0647 \u0628\u0625\u0633\u062D\u0627\u0642 \u0646\u0628\u064A\u0651\u064B\u0627 \u0645\u0646 \u0627\u0644\u0635\u0651\u0627\u0644\u062D\u064A\u0646 \u0648\u0628\u0627\u0631\u0643\u0646\u0627 \u0639\u0644\u064A\u0647 \u0648\u0639\u0644\u0649 \u0625\u0633\u062D\u0627\u0642',
        translation: 'E o agraciamos com a boa-nova de Ishaq, profeta dentre os justos. E o abencoamos, e a Ishaq.',
        context: 'Ishaq e anunciado como profeta e como bencao. No Alcorao, a mencao de Ishaq aparece frequentemente apos a narrativa do sacrificio, o que leva a maioria dos estudiosos islamicos a entender que o sacrificado foi Ismail, nao Ishaq.'
      },
      {
        surah: 'Al-Baqarah',
        surahNumber: 2,
        verses: '133',
        arabic: '\u0623\u0645 \u0643\u0646\u062A\u0645 \u0634\u0647\u062F\u0627\u0621 \u0625\u0630 \u062D\u0636\u0631 \u064A\u0639\u0642\u0648\u0628 \u0627\u0644\u0645\u0648\u062A \u0625\u0630 \u0642\u0627\u0644 \u0644\u0628\u0646\u064A\u0647 \u0645\u0627 \u062A\u0639\u0628\u062F\u0648\u0646 \u0645\u0646 \u0628\u0639\u062F\u064A \u0642\u0627\u0644\u0648\u0627 \u0646\u0639\u0628\u062F \u0625\u0644\u0647\u0643 \u0648\u0625\u0644\u0647 \u0622\u0628\u0627\u0626\u0643 \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0648\u0625\u0633\u0645\u0627\u0639\u064A\u0644 \u0648\u0625\u0633\u062D\u0627\u0642 \u0625\u0644\u0647\u064B\u0627 \u0648\u0627\u062D\u062F\u064B\u0627',
        translation: 'Estaveis presentes quando a morte se apresentou a Yaqub? Quando disse a seus filhos: Que adorareis apos mim? Disseram: Adoraremos teu Deus e o Deus de teus pais Ibrahim, Ismail e Ishaq — um Deus unico.',
        context: 'Ishaq aparece na cadeia de transmissao do monoteismo de Ibrahim. O Alcorao o posiciona como elo na linhagem profetica que manteve a fe em um unico Deus.'
      },
      {
        surah: 'Maryam',
        surahNumber: 19,
        verses: '49',
        arabic: '\u0641\u0644\u0645\u0651\u0627 \u0627\u0639\u062A\u0632\u0644\u0647\u0645 \u0648\u0645\u0627 \u064A\u0639\u0628\u062F\u0648\u0646 \u0645\u0646 \u062F\u0648\u0646 \u0627\u0644\u0644\u0651\u0647 \u0648\u0647\u0628\u0646\u0627 \u0644\u0647 \u0625\u0633\u062D\u0627\u0642 \u0648\u064A\u0639\u0642\u0648\u0628 \u0648\u0643\u0644\u0651\u064B\u0627 \u062C\u0639\u0644\u0646\u0627 \u0646\u0628\u064A\u0651\u064B\u0627',
        translation: 'E quando se afastou deles e do que adoravam alem de Deus, concedemos-lhe Ishaq e Yaqub, e a cada um fizemos profeta.',
        context: 'Ishaq e Yaqub sao apresentados como presentes divinos a Ibrahim por ter abandonado a idolatria de seu povo. Ambos sao profetas — a profecia como recompensa pela fe.'
      }
    ],
    convergences: [
      'Filho miraculoso nascido de pais idosos por promessa divina',
      'Reconhecido como patriarca e elo na cadeia de transmissao da alianca divina',
      'Pai de Yaqub (Jaco), continuando a linhagem profetica'
    ],
    divergences: [
      'Na Biblia, Isaque e claramente o filho do sacrificio; no Islam, a maioria dos estudiosos identifica Ismail como o sacrificado',
      'O Alcorao menciona Ishaq de forma mais breve, sem as narrativas detalhadas que Genesis dedica a ele (os pocos, a bencao, Rebeca)',
      'Na tradicao biblica, a alianca passa exclusivamente por Isaque; no Islam, ambos os filhos de Ibrahim — Ismail e Ishaq — sao profetas igualmente honrados'
    ],
    scholarContext: 'Ishaq/Isaque ocupa um papel diferente nas duas tradicoes. Na Biblia, ele e o filho da promessa por excelencia — toda a alianca divina com Israel passa por ele. No Alcorao, ele e honrado como profeta, mas divide a honra patriarcal com seu irmao Ismail. A questao de qual filho foi oferecido no sacrificio e um dos pontos de divergencia mais conhecidos: a Biblia nomeia Isaque explicitamente; o Alcorao nao nomeia o filho, mas menciona Ishaq como "boa-nova" apos a narrativa do sacrificio, levando a maioria dos estudiosos islamicos a concluir que o sacrificado foi Ismail. Essa divergencia reflete a divisao das linhagens abraamicas entre as duas tradicoes.'
  },

  // ==========================================================================
  // 10. YAQUB (Jaco)
  // ==========================================================================
  {
    id: 'yaqub',
    name: 'Yaqub (Jaco)',
    arabicName: '\u064A\u0639\u0642\u0648\u0628',
    era: '~1800 a.C.',
    bibleRefs: [
      {
        book: 'Genesis',
        chapter: '28',
        verses: '10-15',
        text: 'E Jaco saiu de Berseba e foi a Hara. E chegou a um lugar onde passou a noite, porque ja o sol era posto. E tomou uma das pedras daquele lugar, e a pos debaixo da sua cabeca, e deitou-se naquele lugar. E sonhou: e eis uma escada posta na terra, cujo topo tocava nos ceus; e eis que os anjos de Deus subiam e desciam por ela. E eis que o Senhor estava em cima dela e disse: Eu sou o Senhor, o Deus de Abraao, teu pai, e o Deus de Isaque. Esta terra em que estas deitado ta darei a ti e a tua descendencia.',
        context: 'A escada de Jaco e uma das visoes mais celebres da Biblia — a conexao visivel entre ceu e terra, com Deus renovando a alianca abraamica diretamente com Jaco.'
      },
      {
        book: 'Genesis',
        chapter: '32',
        verses: '24-28',
        text: 'E Jaco ficou so; e lutou com ele um homem ate que a alva subiu. E, vendo este que nao prevalecia contra ele, tocou na junta de sua coxa, e se deslocou a junta da coxa de Jaco, lutando com ele. E disse: Deixa-me ir, porque ja a alva subiu. Porem ele disse: Nao te deixarei ir, se me nao abencoares. E disse-lhe: Qual e o teu nome? E ele disse: Jaco. Entao disse: Nao se chamara mais o teu nome Jaco, mas Israel, pois como principe lutaste com Deus e com os homens e prevaleceste.',
        context: 'A luta de Jaco com o ser divino e a mudanca de nome para Israel (aquele que luta com Deus) e um dos episodios mais misteriosos e profundos de Genesis — a fe como luta, nao como passividade.'
      },
      {
        book: 'Genesis',
        chapter: '35',
        verses: '10-12',
        text: 'E disse-lhe Deus: O teu nome e Jaco; nao se chamara mais o teu nome Jaco, mas Israel sera o teu nome. E chamou o seu nome Israel. Disse-lhe mais Deus: Eu sou o Deus Todo-Poderoso; frutifica e multiplica-te; uma nacao e multidao de nacoes sairao de ti, e reis procedarao de ti.',
        context: 'Deus confirma a mudanca de nome e renova a promessa patriarcal. De Jaco/Israel descenderao as doze tribos que formam o povo de Israel.'
      }
    ],
    quranRefs: [
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '67-68',
        arabic: '\u0648\u0642\u0627\u0644 \u064A\u0627 \u0628\u0646\u064A\u0651 \u0644\u0627 \u062A\u062F\u062E\u0644\u0648\u0627 \u0645\u0646 \u0628\u0627\u0628 \u0648\u0627\u062D\u062F \u0648\u0627\u062F\u062E\u0644\u0648\u0627 \u0645\u0646 \u0623\u0628\u0648\u0627\u0628 \u0645\u062A\u0641\u0631\u0651\u0642\u0629 \u0648\u0645\u0627 \u0623\u063A\u0646\u064A \u0639\u0646\u0643\u0645 \u0645\u0646 \u0627\u0644\u0644\u0651\u0647 \u0645\u0646 \u0634\u064A\u0621 \u0625\u0646 \u0627\u0644\u062D\u0643\u0645 \u0625\u0644\u0627 \u0644\u0644\u0651\u0647 \u0639\u0644\u064A\u0647 \u062A\u0648\u0643\u0651\u0644\u062A',
        translation: 'E disse: O meus filhos, nao entreis por uma so porta, mas entrai por portas diferentes. Nada posso fazer por vos contra Deus. O julgamento so pertence a Deus. Nele confio.',
        context: 'Yaqub como pai sabio e cauteloso — orienta seus filhos a nao atrair atencao entrando juntos, mas reconhece que a protecao real vem de Deus, nao de estrategia humana.'
      },
      {
        surah: 'Yusuf',
        surahNumber: 12,
        verses: '86-87',
        arabic: '\u0642\u0627\u0644 \u0625\u0646\u0651\u0645\u0627 \u0623\u0634\u0643\u0648 \u0628\u062B\u0651\u064A \u0648\u062D\u0632\u0646\u064A \u0625\u0644\u0649 \u0627\u0644\u0644\u0651\u0647 \u0648\u0623\u0639\u0644\u0645 \u0645\u0646 \u0627\u0644\u0644\u0651\u0647 \u0645\u0627 \u0644\u0627 \u062A\u0639\u0644\u0645\u0648\u0646 \u064A\u0627 \u0628\u0646\u064A\u0651 \u0627\u0630\u0647\u0628\u0648\u0627 \u0641\u062A\u062D\u0633\u0651\u0633\u0648\u0627 \u0645\u0646 \u064A\u0648\u0633\u0641 \u0648\u0623\u062E\u064A\u0647 \u0648\u0644\u0627 \u062A\u064A\u0623\u0633\u0648\u0627 \u0645\u0646 \u0631\u0648\u062D \u0627\u0644\u0644\u0651\u0647',
        translation: 'Disse: Queixo-me da minha angustia e da minha tristeza somente a Deus, e sei de Deus o que vos nao sabeis. O meus filhos, ide e buscai noticias de Yusuf e seu irmao, e nao desespereis da misericordia de Deus.',
        context: 'A frase mais poderosa de Yaqub no Alcorao: ele chorou tanto pela perda de Yusuf que perdeu a visao, mas nunca perdeu a esperanca em Deus. A dor nao e negacao da fe — e levada diretamente a Deus.'
      },
      {
        surah: 'Al-Baqarah',
        surahNumber: 2,
        verses: '132-133',
        arabic: '\u0648\u0648\u0635\u0651\u0649 \u0628\u0647\u0627 \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0628\u0646\u064A\u0647 \u0648\u064A\u0639\u0642\u0648\u0628 \u064A\u0627 \u0628\u0646\u064A\u0651 \u0625\u0646\u0651 \u0627\u0644\u0644\u0651\u0647 \u0627\u0635\u0637\u0641\u0649 \u0644\u0643\u0645 \u0627\u0644\u062F\u0651\u064A\u0646 \u0641\u0644\u0627 \u062A\u0645\u0648\u062A\u0646\u0651 \u0625\u0644\u0627 \u0648\u0623\u0646\u062A\u0645 \u0645\u0633\u0644\u0645\u0648\u0646',
        translation: 'E Ibrahim instruiu seus filhos, e tambem Yaqub: O meus filhos, Deus escolheu para vos a religiao; nao morrais senao como submissos a Ele.',
        context: 'Yaqub continua a missao de Ibrahim — instruir seus filhos no monoteismo puro. No leito de morte, sua preocupacao final e garantir que a fe em Deus seja preservada na proxima geracao.'
      }
    ],
    convergences: [
      'Filho de Isaque e neto de Abraao, continuando a linhagem patriarcal',
      'Pai de doze filhos, ancestral das tribos de Israel',
      'Sofreu profundamente pela perda de seu filho Yusuf (Jose)',
      'Transmitiu a fe monoteista de Ibrahim a seus descendentes'
    ],
    divergences: [
      'A Biblia narra a luta de Jaco com Deus/anjo e a mudanca de nome para Israel — episodio ausente no Alcorao',
      'Na Biblia, Jaco engana seu pai Isaque e seu irmao Esau para obter a bencao; no Alcorao, os profetas sao protegidos de engano',
      'O Alcorao enfatiza Yaqub como pai sofredor e crente paciente; a Biblia o retrata como figura mais complexa e ambigua',
      'No Islam, a dor de Yaqub por Yusuf e modelo de fe na adversidade; na Biblia, o foco esta mais nas dinamicas familiares e tribais'
    ],
    scholarContext: 'Yaqub/Jaco e o ponto de transicao entre a historia patriarcal e a historia tribal de Israel. Na Biblia, ele e uma figura profundamente humana — astuto, vulneravel, transformado pela luta com Deus. No Alcorao, ele e profeta, pai e transmissor da fe, com enfase na sua paciencia diante da perda de Yusuf. A cegueira de Yaqub por chorar a perda do filho e um detalhe coranico ausente na Biblia que humaniza profundamente o patriarca. A frase "queixo-me da minha angustia somente a Deus" e uma das declaracoes mais citadas no Islam sobre como lidar com o sofrimento: nao negar a dor, mas leva-la diretamente ao Criador.'
  },

  // ==========================================================================
  // 11. DAWUD (Davi)
  // ==========================================================================
  {
    id: 'dawud',
    name: 'Dawud (Davi)',
    arabicName: '\u062F\u0627\u0648\u0648\u062F',
    era: '~1000 a.C.',
    bibleRefs: [
      {
        book: '1 Samuel',
        chapter: '17',
        verses: '45-47',
        text: 'Davi, porem, disse ao filisteu: Tu vens a mim com espada, e com lanca, e com escudo; porem eu venho a ti em nome do Senhor dos Exercitos, o Deus dos exercitos de Israel, a quem tens afrontado. Hoje mesmo o Senhor te entregara na minha mao, e eu te ferirei, para que toda a terra saiba que ha Deus em Israel.',
        context: 'O confronto com Golias e o momento que define Davi — um jovem pastor que enfrenta um guerreiro gigante armado apenas com fe e uma funda. O poder vem de Deus, nao das armas.'
      },
      {
        book: '2 Samuel',
        chapter: '7',
        verses: '12-16',
        text: 'Quando teus dias forem completos e descansares com teus pais, levantarei a tua descendencia depois de ti, que procedera de ti, e estabelecerei o seu reino. Ele edificara uma casa ao meu nome, e confirmarei o trono do seu reino para sempre. A tua casa e o teu reino serao firmados para sempre diante de ti; teu trono sera firme para sempre.',
        context: 'A alianca davidica — Deus promete a Davi um reino eterno. No Cristianismo, Jesus e visto como cumprimento dessa promessa, descendente de Davi que reina para sempre.'
      },
      {
        book: 'Salmos',
        chapter: '23',
        verses: '1-4',
        text: 'O Senhor e o meu pastor; nada me faltara. Deitar-me faz em verdes pastos, guia-me mansamente a aguas tranquilas. Refrigera a minha alma; guia-me pelas veredas da justica, por amor do seu nome. Ainda que eu andasse pelo vale da sombra da morte, nao temeria mal algum, porque tu estas comigo.',
        context: 'O Salmo 23, atribuido a Davi, e talvez o texto mais conhecido da Biblia. Davi como poeta e salmista — a dimensao artistica e devocional do rei-profeta.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-Anbiya',
        surahNumber: 21,
        verses: '78-80',
        arabic: '\u0648\u062F\u0627\u0648\u0648\u062F \u0648\u0633\u0644\u064A\u0645\u0627\u0646 \u0625\u0630 \u064A\u062D\u0643\u0645\u0627\u0646 \u0641\u064A \u0627\u0644\u062D\u0631\u062B ... \u0648\u0639\u0644\u0651\u0645\u0646\u0627\u0647 \u0635\u0646\u0639\u0629 \u0644\u0628\u0648\u0633 \u0644\u0643\u0645 \u0644\u062A\u062D\u0635\u0646\u0643\u0645 \u0645\u0646 \u0628\u0623\u0633\u0643\u0645',
        translation: 'E Dawud e Suleiman, quando julgavam sobre a plantacao. ... E lhe ensinamos a fabricacao de cotas de malha para vos, para vos proteger em vossas batalhas.',
        context: 'Dawud no Alcorao e juiz sabio e artesao — Deus lhe ensinou a fabricar armaduras. A combinacao de sabedoria judicial e habilidade pratica e unica entre os profetas.'
      },
      {
        surah: 'Saba',
        surahNumber: 34,
        verses: '10',
        arabic: '\u0648\u0644\u0642\u062F \u0622\u062A\u064A\u0646\u0627 \u062F\u0627\u0648\u0648\u062F \u0645\u0646\u0651\u0627 \u0641\u0636\u0644\u064B\u0627 \u064A\u0627 \u062C\u0628\u0627\u0644 \u0623\u0648\u0651\u0628\u064A \u0645\u0639\u0647 \u0648\u0627\u0644\u0637\u0651\u064A\u0631 \u0648\u0623\u0644\u0646\u0651\u0627 \u0644\u0647 \u0627\u0644\u062D\u062F\u064A\u062F',
        translation: 'E concedemos a Dawud graca de Nossa parte: O montanhas, glorificai comigo! E as aves tambem. E amolecemos para ele o ferro.',
        context: 'As montanhas e os passaros glorificam Deus junto com Dawud — a natureza responde a sua adoracao. O ferro se torna maleavel em suas maos. Poesia, poder e devocao reunidos em um unico profeta.'
      },
      {
        surah: 'Sad',
        surahNumber: 38,
        verses: '17-20',
        arabic: '\u0627\u0635\u0628\u0631 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0642\u0648\u0644\u0648\u0646 \u0648\u0627\u0630\u0643\u0631 \u0639\u0628\u062F\u0646\u0627 \u062F\u0627\u0648\u0648\u062F \u0630\u0627 \u0627\u0644\u0623\u064A\u062F \u0625\u0646\u0651\u0647 \u0623\u0648\u0651\u0627\u0628 \u0625\u0646\u0651\u0627 \u0633\u062E\u0651\u0631\u0646\u0627 \u0627\u0644\u062C\u0628\u0627\u0644 \u0645\u0639\u0647 \u064A\u0633\u0628\u0651\u062D\u0646 \u0628\u0627\u0644\u0639\u0634\u064A\u0651 \u0648\u0627\u0644\u0625\u0634\u0631\u0627\u0642',
        translation: 'Se paciente com o que dizem, e lembra-te do Nosso servo Dawud, dotado de forca. Ele era penitente. Submetemos as montanhas para glorificarem conosco ao entardecer e ao amanhecer.',
        context: 'Dawud e descrito como "dotado de forca" e "penitente" (awwab) — alguem que volta constantemente a Deus. O titulo awwab indica arrependimento continuo, nao perfeicao.'
      }
    ],
    convergences: [
      'Rei e profeta — lider politico e espiritual ao mesmo tempo',
      'Recebeu revelacao divina: os Salmos na Biblia, o Zabur no Alcorao',
      'Famoso pela adoracao e louvor a Deus com musica e poesia',
      'Venceu inimigos com ajuda divina e estabeleceu um reino justo'
    ],
    divergences: [
      'A Biblia narra o pecado de Davi com Bate-Seba e o assassinato de Urias (2 Samuel 11); o Alcorao alude a uma prova sem os mesmos detalhes',
      'No Alcorao, Dawud recebe o poder de amolecer ferro e fazer armaduras — dom divino especifico ausente na Biblia',
      'A Biblia detalha extensamente a vida politica e os conflitos de Davi; o Alcorao foca na sua devocao e sabedoria judicial',
      'No Islam, os profetas sao protegidos de pecados graves deliberados; a tradicao biblica apresenta Davi com falhas morais serias'
    ],
    scholarContext: 'Dawud/Davi e uma das figuras que mais ilustra a diferenca de abordagem entre Biblia e Alcorao na caracterizacao dos profetas. Na Biblia, Davi e retratado com realismo implacavel — suas grandezas e suas falhas estao expostas. O caso com Bate-Seba e o assassinato indireto de Urias sao narrados sem atenuacao. No Alcorao, Dawud e testado e se arrepende, mas sem os detalhes do pecado biblico. Ambas as tradicoes concordam que Dawud recebeu o Zabur (Salmos) como revelacao — o Alcorao reconhece os Salmos como escritura divina autentica. O Salmo 23 e a descricao coranica das montanhas glorificando com Dawud apontam para a mesma verdade: Dawud era, acima de tudo, um adorador.'
  },

  // ==========================================================================
  // 12. SULEIMAN (Salomao)
  // ==========================================================================
  {
    id: 'suleiman',
    name: 'Suleiman (Salomao)',
    arabicName: '\u0633\u0644\u064A\u0645\u0627\u0646',
    era: '~970 a.C.',
    bibleRefs: [
      {
        book: '1 Reis',
        chapter: '3',
        verses: '5-12',
        text: 'Em Gibeao apareceu o Senhor a Salomao de noite, em sonhos. E disse Deus: Pede o que queres que eu te de. Respondeu Salomao: Da, pois, ao teu servo um coracao entendido para julgar a teu povo, para que prudentemente discirna entre o bem e o mal. E esta palavra pareceu boa aos olhos do Senhor, de que Salomao pedisse isso. E disse-lhe Deus: Porquanto pediste isso e nao pediste riquezas nem a vida dos teus inimigos, eis que fiz segundo as tuas palavras; eis que te dei um coracao tao sabio e entendido, que antes de ti igual nao houve e depois de ti igual nao se levantara.',
        context: 'Deus oferece a Salomao qualquer coisa, e ele pede sabedoria. A escolha em si ja demonstra sabedoria — e Deus lhe concede tanto a sabedoria quanto as riquezas que nao pediu.'
      },
      {
        book: '1 Reis',
        chapter: '6',
        verses: '1, 11-14',
        text: 'E aconteceu que, no ano de quatrocentos e oitenta, depois de sairem os filhos de Israel da terra do Egito, no ano quarto do reinado de Salomao sobre Israel, no mes de Zive, que e o mes segundo, se edificou a casa ao Senhor. E veio a palavra do Senhor a Salomao, dizendo: Quanto a esta casa que tu edificas, se andares nos meus estatutos e observares os meus juizos e guardares todos os meus mandamentos, andando neles, confirmarei a minha palavra contigo.',
        context: 'A construcao do Templo de Jerusalem e o legado maximo de Salomao na Biblia — a Casa de Deus que seu pai Davi sonhou mas nao pode construir.'
      },
      {
        book: 'Proverbios',
        chapter: '1',
        verses: '7',
        text: 'O temor do Senhor e o principio da sabedoria; os loucos desprezam a sabedoria e a instrucao.',
        context: 'O livro de Proverbios, atribuido a Salomao, resume a essencia da sua sabedoria: todo conhecimento verdadeiro comeca com reverencia a Deus.'
      }
    ],
    quranRefs: [
      {
        surah: 'An-Naml',
        surahNumber: 27,
        verses: '15-19',
        arabic: '\u0648\u0644\u0642\u062F \u0622\u062A\u064A\u0646\u0627 \u062F\u0627\u0648\u0648\u062F \u0648\u0633\u0644\u064A\u0645\u0627\u0646 \u0639\u0644\u0645\u064B\u0627 \u0648\u0642\u0627\u0644\u0627 \u0627\u0644\u062D\u0645\u062F \u0644\u0644\u0651\u0647 \u0627\u0644\u0651\u0630\u064A \u0641\u0636\u0651\u0644\u0646\u0627 \u0639\u0644\u0649 \u0643\u062B\u064A\u0631 \u0645\u0646 \u0639\u0628\u0627\u062F\u0647 \u0627\u0644\u0645\u0624\u0645\u0646\u064A\u0646 ... \u0648\u0648\u0631\u062B \u0633\u0644\u064A\u0645\u0627\u0646 \u062F\u0627\u0648\u0648\u062F \u0648\u0642\u0627\u0644 \u064A\u0627 \u0623\u064A\u0651\u0647\u0627 \u0627\u0644\u0646\u0651\u0627\u0633 \u0639\u0644\u0651\u0645\u0646\u0627 \u0645\u0646\u0637\u0642 \u0627\u0644\u0637\u0651\u064A\u0631',
        translation: 'E concedemos a Dawud e Suleiman conhecimento, e disseram: Louvado seja Deus, que nos favoreceu acima de muitos dos Seus servos crentes. E Suleiman herdou Dawud e disse: O pessoas, fomos ensinados a linguagem dos passaros.',
        context: 'Suleiman herda o reino e a profecia de Dawud e recebe um dom unico: a linguagem dos passaros e o dominio sobre o vento, os jinns e os animais. No Islam, Suleiman e o rei-profeta com poderes sobrenaturais concedidos por Deus.'
      },
      {
        surah: 'An-Naml',
        surahNumber: 27,
        verses: '30-31, 40, 44',
        arabic: '\u0625\u0646\u0651\u0647 \u0645\u0646 \u0633\u0644\u064A\u0645\u0627\u0646 \u0648\u0625\u0646\u0651\u0647 \u0628\u0633\u0645 \u0627\u0644\u0644\u0651\u0647 \u0627\u0644\u0631\u0651\u062D\u0645\u0646 \u0627\u0644\u0631\u0651\u062D\u064A\u0645 ... \u0642\u0627\u0644\u062A \u0631\u0628\u0651 \u0625\u0646\u0651\u064A \u0638\u0644\u0645\u062A \u0646\u0641\u0633\u064A \u0648\u0623\u0633\u0644\u0645\u062A \u0645\u0639 \u0633\u0644\u064A\u0645\u0627\u0646 \u0644\u0644\u0651\u0647 \u0631\u0628\u0651 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0646',
        translation: 'Certamente e de Suleiman, e e: Em nome de Deus, o Misericordioso, o Misericordiador. ... Ela disse: Senhor meu, fui injusta comigo mesma, e me submeto com Suleiman a Deus, o Senhor dos mundos.',
        context: 'A historia de Suleiman com a Rainha de Saba (Bilqis) e uma das narrativas mais ricas do Alcorao. Ela governa um reino poderoso e adora o sol, mas ao encontrar Suleiman, reconhece o Deus unico e se submete voluntariamente.'
      },
      {
        surah: 'Saba',
        surahNumber: 34,
        verses: '12-14',
        arabic: '\u0648\u0644\u0633\u0644\u064A\u0645\u0627\u0646 \u0627\u0644\u0631\u0651\u064A\u062D \u063A\u062F\u0648\u0651\u0647\u0627 \u0634\u0647\u0631 \u0648\u0631\u0648\u0627\u062D\u0647\u0627 \u0634\u0647\u0631 ... \u0641\u0644\u0645\u0651\u0627 \u0642\u0636\u064A\u0646\u0627 \u0639\u0644\u064A\u0647 \u0627\u0644\u0645\u0648\u062A \u0645\u0627 \u062F\u0644\u0651\u0647\u0645 \u0639\u0644\u0649 \u0645\u0648\u062A\u0647 \u0625\u0644\u0627 \u062F\u0627\u0628\u0651\u0629 \u0627\u0644\u0623\u0631\u0636 \u062A\u0623\u0643\u0644 \u0645\u0646\u0633\u0623\u062A\u0647',
        translation: 'E para Suleiman, o vento: sua ida era de um mes e sua volta de um mes. ... E quando decretamos sua morte, nada os alertou de sua morte senao um verme da terra que roeu seu cajado.',
        context: 'A morte de Suleiman e uma das cenas mais surpreendentes do Alcorao: ele morreu apoiado em seu cajado e ninguem percebeu ate que um verme roeu o bastao e o corpo caiu. Os jinns que trabalhavam para ele nao tinham acesso ao invisivel — licao sobre os limites do conhecimento das criaturas.'
      }
    ],
    convergences: [
      'Filho de Davi, herdeiro do reino e da sabedoria divina',
      'O ser humano mais sabio que ja viveu, por concessao direta de Deus',
      'Construtor do Templo de Deus (na Biblia) e senhor de um reino magnifico',
      'Interagiu com a Rainha de Saba, que reconheceu a grandeza do seu Deus'
    ],
    divergences: [
      'No Alcorao, Suleiman comanda jinns, vento e fala com animais — poderes sobrenaturais ausentes na Biblia',
      'A Biblia relata que Salomao se desviou na velhice e adorou idolos por influencia de suas esposas (1 Reis 11); no Islam, ele permaneceu fiel',
      'O Alcorao inclui a narrativa detalhada da poupa (passaro mensageiro) e da conversao da Rainha de Saba ao monoteismo — ausente em Reis',
      'A morte de Suleiman apoiado no cajado, descoberta apenas quando um verme o roeu, e exclusiva do Alcorao'
    ],
    scholarContext: 'Suleiman/Salomao e o profeta-rei por excelencia em ambas as tradicoes: poder, riqueza e sabedoria combinados em uma unica figura. A diferenca mais significativa esta no desfecho: na Biblia, Salomao se desvia na velhice, e seu reino e dividido como consequencia (1 Reis 11-12). No Alcorao, Suleiman permanece fiel ate a morte e e celebrado sem reservas. A narrativa coranica tambem expande dramaticamente seus poderes — dominio sobre jinns, vento e animais — tornando-o uma figura quase fantastica, mas sempre subordinada a Deus. A historia da sua morte invisivel ensina que nem as criaturas mais poderosas conhecem o invisivel: apenas Allah tem esse conhecimento.'
  },

  // ==========================================================================
  // 13. ILYAS (Elias)
  // ==========================================================================
  {
    id: 'ilyas',
    name: 'Ilyas (Elias)',
    arabicName: '\u0625\u0644\u064A\u0627\u0633',
    era: '~870 a.C.',
    bibleRefs: [
      {
        book: '1 Reis',
        chapter: '18',
        verses: '21, 36-39',
        text: 'Entao Elias se achegou a todo o povo e disse: Ate quando coxeareis entre dois pensamentos? Se o Senhor e Deus, segui-o; se Baal, segui-o. Porem o povo nada lhe respondeu. Entao Elias orou: Senhor, Deus de Abraao, de Isaque e de Israel, manifesta-se hoje que tu es Deus em Israel. Entao caiu fogo do Senhor e consumiu o holocausto. O que vendo todo o povo, caiu sobre os seus rostos e disseram: So o Senhor e Deus! So o Senhor e Deus!',
        context: 'O confronto no Monte Carmelo — Elias contra 450 profetas de Baal. Fogo cai do ceu sobre o sacrificio de Elias, provando que so o Senhor e Deus. Um dos momentos mais dramaticos da Biblia.'
      },
      {
        book: '1 Reis',
        chapter: '19',
        verses: '11-13',
        text: 'E eis que passava o Senhor, e um grande e forte vento fenda os montes e quebrava as penhas diante do Senhor; porem o Senhor nao estava no vento. E depois do vento, um terremoto; tambem o Senhor nao estava no terremoto. E depois do terremoto, um fogo; tambem o Senhor nao estava no fogo. E depois do fogo, uma voz mansa e delicada.',
        context: 'Apos o triunfo do Carmelo, Elias foge e encontra Deus nao no espetaculo, mas no silencio — a "voz mansa e delicada". Uma das revelacoes mais profundas sobre a natureza de Deus.'
      },
      {
        book: '2 Reis',
        chapter: '2',
        verses: '11',
        text: 'E sucedeu que, indo eles andando e falando, eis que um carro de fogo, com cavalos de fogo, os separou um do outro; e Elias subiu ao ceu num redemoinho.',
        context: 'Elias nao morreu — foi levado ao ceu em um carro de fogo. Essa ascensao sem morte o torna figura escatologica: a tradicao judaica espera seu retorno antes do Messias.'
      }
    ],
    quranRefs: [
      {
        surah: 'As-Saffat',
        surahNumber: 37,
        verses: '123-130',
        arabic: '\u0648\u0625\u0646\u0651 \u0625\u0644\u064A\u0627\u0633 \u0644\u0645\u0646 \u0627\u0644\u0645\u0631\u0633\u0644\u064A\u0646 \u0625\u0630 \u0642\u0627\u0644 \u0644\u0642\u0648\u0645\u0647 \u0623\u0644\u0627 \u062A\u062A\u0651\u0642\u0648\u0646 \u0623\u062A\u062F\u0639\u0648\u0646 \u0628\u0639\u0644\u064B\u0627 \u0648\u062A\u0630\u0631\u0648\u0646 \u0623\u062D\u0633\u0646 \u0627\u0644\u062E\u0627\u0644\u0642\u064A\u0646 \u0627\u0644\u0644\u0651\u0647 \u0631\u0628\u0651\u0643\u0645 \u0648\u0631\u0628\u0651 \u0622\u0628\u0627\u0626\u0643\u0645 \u0627\u0644\u0623\u0648\u0651\u0644\u064A\u0646 \u0641\u0643\u0630\u0651\u0628\u0648\u0647',
        translation: 'E Ilyas era dos mensageiros. Quando disse ao seu povo: Nao temeis a Deus? Invocais Baal e abandonais o Melhor dos Criadores — Deus, vosso Senhor e Senhor de vossos antepassados? Mas desmentiram-no.',
        context: 'O Alcorao confirma o confronto de Ilyas com os adoradores de Baal. A pregacao e direta: por que invocar um idolo quando Deus, o Melhor dos Criadores, esta disponivel?'
      },
      {
        surah: 'Al-An\'am',
        surahNumber: 6,
        verses: '85-86',
        arabic: '\u0648\u0632\u0643\u0631\u064A\u0651\u0627 \u0648\u064A\u062D\u064A\u0649 \u0648\u0639\u064A\u0633\u0649 \u0648\u0625\u0644\u064A\u0627\u0633 \u0643\u0644\u0651 \u0645\u0646 \u0627\u0644\u0635\u0651\u0627\u0644\u062D\u064A\u0646',
        translation: 'E Zakariyya e Yahya e Isa e Ilyas — todos dentre os justos.',
        context: 'Ilyas e listado entre os profetas justos ao lado de Jesus e Joao Batista — uma honra que confirma seu status elevado na cadeia profetica islamica.'
      },
      {
        surah: 'As-Saffat',
        surahNumber: 37,
        verses: '129-132',
        arabic: '\u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0625\u0644 \u064A\u0627\u0633\u064A\u0646 \u0625\u0646\u0651\u0627 \u0643\u0630\u0644\u0643 \u0646\u062C\u0632\u064A \u0627\u0644\u0645\u062D\u0633\u0646\u064A\u0646 \u0625\u0646\u0651\u0647 \u0645\u0646 \u0639\u0628\u0627\u062F\u0646\u0627 \u0627\u0644\u0645\u0624\u0645\u0646\u064A\u0646',
        translation: 'Paz sobre Ilyas! Assim recompensamos os benfeitores. Ele era dos Nossos servos crentes.',
        context: 'Ilyas recebe a saudacao divina de paz — "Salam ala Ilyasin" — uma honra reservada no Alcorao para profetas de destaque.'
      }
    ],
    convergences: [
      'Confrontou diretamente a adoracao de Baal e defendeu o monoteismo puro',
      'Enviado como profeta a um povo que havia abandonado Deus por idolos',
      'Reconhecido como um dos profetas mais corajosos e determinados',
      'Honrado por ambas as tradicoes como figura de grande estatura espiritual'
    ],
    divergences: [
      'A Biblia narra a ascensao de Elias ao ceu em carro de fogo — evento ausente no Alcorao',
      'A narrativa biblica de Elias e muito mais extensa: confronto no Carmelo, fuga, voz mansa, carro de fogo; o Alcorao resume em poucos versiculos',
      'A tradicao judaica espera o retorno de Elias antes do Messias; no Islam, Ilyas nao tem papel escatologico especifico',
      'O Alcorao nao menciona a depressao e o pedido de morte de Elias (1 Reis 19:4) — foco na missao, nao na fraqueza'
    ],
    scholarContext: 'Ilyas/Elias e uma ponte entre os profetas de Israel e a missao profetica universal. Na Biblia, ele e o profeta de fogo — dramatico, confrontador, levado ao ceu sem morrer. No Alcorao, ele e mencionado de forma mais concisa, mas com honras explicitas: a saudacao de paz e a inclusao entre os justos. O confronto com Baal e central em ambas as narrativas: em uma epoca de sincretismo religioso, Ilyas insistiu que so ha um Deus. A "voz mansa e delicada" de 1 Reis 19, ausente no Alcorao, e uma das imagens mais profundas da Biblia — Deus nao estava no espetaculo, mas no silencio.'
  },

  // ==========================================================================
  // 14. ALYASA (Eliseu)
  // ==========================================================================
  {
    id: 'alyasa',
    name: 'Alyasa (Eliseu)',
    arabicName: '\u0627\u0644\u064A\u0633\u0639',
    era: '~850 a.C.',
    bibleRefs: [
      {
        book: '2 Reis',
        chapter: '2',
        verses: '9-14',
        text: 'E sucedeu que, havendo eles passado, Elias disse a Eliseu: Pede-me o que queres que te faca, antes que seja tomado de ti. E disse Eliseu: Peco-te que haja porcao dobrada de teu espirito sobre mim. E disse: Coisa dificil pediste. Se me vires quando for tomado de ti, assim se te fara; porem, se nao, nao se fara. Entao Eliseu tomou o manto de Elias e feriu as aguas, que se dividiram para um e outro lado; e Eliseu passou.',
        context: 'Eliseu herda o manto e a porcao dobrada do espirito de Elias — a transicao profetica entre mestre e discipulo. Ele abre as aguas do Jordao como primeiro sinal do seu ministerio.'
      },
      {
        book: '2 Reis',
        chapter: '4',
        verses: '32-35',
        text: 'E entrou Eliseu na casa, e eis que o menino jazia morto sobre a sua cama. Entao entrou ele, e fechou a porta sobre eles dois, e orou ao Senhor. E subiu a cama e deitou-se sobre o menino, e pos a sua boca sobre a boca dele, e os seus olhos sobre os olhos dele, e as suas maos sobre as maos dele, e se estendeu sobre ele; e a carne do menino aqueceu. E o menino espirrou sete vezes e abriu os olhos.',
        context: 'Eliseu ressuscita o filho da sunamita — um milagre que prefigura as ressurreicoes realizadas por Jesus e que demonstra o poder de Deus operando atraves de seus profetas.'
      },
      {
        book: '2 Reis',
        chapter: '5',
        verses: '10-14',
        text: 'Porem Eliseu lhe mandou um mensageiro, dizendo: Vai, e lava-te sete vezes no Jordao, e a tua carne sera restaurada, e ficaras limpo. E desceu e mergulhou no Jordao sete vezes, conforme a palavra do homem de Deus; e a sua carne se tornou como a carne de um menino, e ficou limpo.',
        context: 'A cura de Naama, o general siro leproso — Eliseu o envia ao Jordao, nao para demonstrar poder, mas para ensinar humildade. O remedio e simples; a cura e divina.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-An\'am',
        surahNumber: 6,
        verses: '86',
        arabic: '\u0648\u0625\u0633\u0645\u0627\u0639\u064A\u0644 \u0648\u0627\u0644\u064A\u0633\u0639 \u0648\u064A\u0648\u0646\u0633 \u0648\u0644\u0648\u0637\u064B\u0627 \u0648\u0643\u0644\u0651\u064B\u0627 \u0641\u0636\u0651\u0644\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0646',
        translation: 'E Ismail e Alyasa e Yunus e Lut — e a todos favorecemos acima dos mundos.',
        context: 'Alyasa e listado entre os profetas que Deus favoreceu acima de todos os mundos — uma honra compartilhada com Ismail, Yunus e Lut.'
      },
      {
        surah: 'Sad',
        surahNumber: 38,
        verses: '48',
        arabic: '\u0648\u0627\u0630\u0643\u0631 \u0625\u0633\u0645\u0627\u0639\u064A\u0644 \u0648\u0627\u0644\u064A\u0633\u0639 \u0648\u0630\u0627 \u0627\u0644\u0643\u0641\u0644 \u0648\u0643\u0644\u0651 \u0645\u0646 \u0627\u0644\u0623\u062E\u064A\u0627\u0631',
        translation: 'E lembra-te de Ismail e Alyasa e Dhul-Kifl — todos dentre os melhores.',
        context: 'Alyasa e novamente mencionado entre os "melhores" (al-akhyar) — titulo de honra reservado para profetas de destaque no Alcorao.'
      },
      {
        surah: 'Al-An\'am',
        surahNumber: 6,
        verses: '83-87',
        arabic: '\u0648\u062A\u0644\u0643 \u062D\u062C\u0651\u062A\u0646\u0627 \u0622\u062A\u064A\u0646\u0627\u0647\u0627 \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0639\u0644\u0649 \u0642\u0648\u0645\u0647 ... \u0648\u0645\u0646 \u0630\u0631\u0651\u064A\u0651\u062A\u0647 \u062F\u0627\u0648\u0648\u062F \u0648\u0633\u0644\u064A\u0645\u0627\u0646 \u0648\u0623\u064A\u0651\u0648\u0628 \u0648\u064A\u0648\u0633\u0641 \u0648\u0645\u0648\u0633\u0649 \u0648\u0647\u0627\u0631\u0648\u0646',
        translation: 'E esse foi o Nosso argumento que demos a Ibrahim contra seu povo. ... E da descendencia dele: Dawud, Suleiman, Ayyub, Yusuf, Musa e Harun.',
        context: 'Alyasa aparece na grande lista de profetas da linhagem abraamica em Al-Anam. O Alcorao o posiciona dentro da cadeia de transmissao profetica, confirmando sua legitimidade.'
      }
    ],
    convergences: [
      'Sucessor e discipulo de Elias/Ilyas na missao profetica',
      'Reconhecido como profeta autentico em ambas as tradicoes',
      'Incluido na cadeia de profetas favorecidos por Deus'
    ],
    divergences: [
      'A Biblia dedica varios capitulos aos milagres de Eliseu (ressurreicao, cura, multiplicacao); o Alcorao o menciona apenas pelo nome sem narrativas detalhadas',
      'A relacao mestre-discipulo entre Elias e Eliseu e desenvolvida na Biblia; no Alcorao, Ilyas e Alyasa aparecem como profetas independentes',
      'O Alcorao nao inclui os milagres especificos de Alyasa — ele e honrado por pertencer a cadeia profetica, nao por feitos individuais narrados'
    ],
    scholarContext: 'Alyasa/Eliseu e um dos profetas menos desenvolvidos no Alcorao — mencionado apenas duas vezes pelo nome, sem narrativas proprias. Na Biblia, por contraste, ele e uma das figuras profeticas mais ricas: com milagres que incluem ressurreicao de mortos, cura de lepra, multiplicacao de alimentos e purificacao de aguas. Seus milagres prefiguram os de Jesus de forma notavel. O Alcorao o inclui na lista dos "favorecidos acima dos mundos" e dos "melhores", o que confirma sua posicao honrada mesmo sem detalhamento narrativo. Para os estudiosos islamicos, a mencao no Alcorao e suficiente para estabelecer sua autenticidade como profeta — os detalhes podem ser buscados nas escrituras anteriores.'
  },

  // ==========================================================================
  // 15. YUNUS (Jonas)
  // ==========================================================================
  {
    id: 'yunus',
    name: 'Yunus (Jonas)',
    arabicName: '\u064A\u0648\u0646\u0633',
    era: '~800 a.C.',
    bibleRefs: [
      {
        book: 'Jonas',
        chapter: '1',
        verses: '1-3, 15-17',
        text: 'E veio a palavra do Senhor a Jonas, filho de Amitai, dizendo: Levanta-te, vai a grande cidade de Ninive, e prega contra ela. Jonas, porem, se levantou para fugir de diante do Senhor para Tarsis. E tomaram a Jonas e o lancaram ao mar, e o mar cessou da sua furia. E preparou o Senhor um grande peixe, para que tragasse a Jonas; e esteve Jonas tres dias e tres noites nas entranhas do peixe.',
        context: 'Jonas foge da missao divina — o unico profeta biblico que tenta escapar do chamado de Deus. E engolido por um grande peixe como consequencia e como meio de salvacao ao mesmo tempo.'
      },
      {
        book: 'Jonas',
        chapter: '2',
        verses: '1-2, 10',
        text: 'E orou Jonas ao Senhor, seu Deus, das entranhas do peixe. E disse: Clamei ao Senhor na minha angustia, e ele me respondeu; do ventre do inferno gritei, e tu ouviste a minha voz. Falou, pois, o Senhor ao peixe, e este vomitou a Jonas na terra.',
        context: 'A oracao de Jonas no ventre do peixe e um dos momentos mais intensos da Biblia — orar do lugar mais improvavel, e Deus ouvir e responder. O peixe que devora se torna o veiculo da salvacao.'
      },
      {
        book: 'Jonas',
        chapter: '3',
        verses: '5-10',
        text: 'E os homens de Ninive creram em Deus, e proclamaram um jejum, e vestiram-se de panos de saco, desde o maior ate o menor deles. E Deus viu as obras deles, como se converteram do seu mau caminho; e Deus se arrependeu do mal que tinha dito lhes faria e nao o fez.',
        context: 'Ninive se arrepende — toda a cidade, do rei ao menor cidadao. E o maior caso de arrependimento coletivo da Biblia, e Deus perdoa. Jonas fica insatisfeito com a misericordia divina.'
      }
    ],
    quranRefs: [
      {
        surah: 'As-Saffat',
        surahNumber: 37,
        verses: '139-148',
        arabic: '\u0648\u0625\u0646\u0651 \u064A\u0648\u0646\u0633 \u0644\u0645\u0646 \u0627\u0644\u0645\u0631\u0633\u0644\u064A\u0646 \u0625\u0630 \u0623\u0628\u0642 \u0625\u0644\u0649 \u0627\u0644\u0641\u0644\u0643 \u0627\u0644\u0645\u0634\u062D\u0648\u0646 \u0641\u0633\u0627\u0647\u0645 \u0641\u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0645\u062F\u062D\u0636\u064A\u0646 \u0641\u0627\u0644\u062A\u0642\u0645\u0647 \u0627\u0644\u062D\u0648\u062A \u0648\u0647\u0648 \u0645\u0644\u064A\u0645 \u0641\u0644\u0648\u0644\u0627 \u0623\u0646\u0651\u0647 \u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0645\u0633\u0628\u0651\u062D\u064A\u0646 \u0644\u0644\u0628\u062B \u0641\u064A \u0628\u0637\u0646\u0647 \u0625\u0644\u0649 \u064A\u0648\u0645 \u064A\u0628\u0639\u062B\u0648\u0646',
        translation: 'E Yunus era dos mensageiros. Quando fugiu para o navio lotado. E tirou sorte e foi dos perdedores. Entao o peixe o engoliu enquanto estava culpado. Se nao fosse ele dentre os que glorificavam, teria permanecido em seu ventre ate o Dia da Ressurreicao.',
        context: 'O Alcorao narra a fuga, o sorteio, o engolimento e a salvacao — tudo em versiculos concisos. O ponto crucial: a glorificacao constante de Deus (tasbih) salvou Yunus de ficar no peixe para sempre.'
      },
      {
        surah: 'Al-Anbiya',
        surahNumber: 21,
        verses: '87-88',
        arabic: '\u0648\u0630\u0627 \u0627\u0644\u0646\u0651\u0648\u0646 \u0625\u0630 \u0630\u0647\u0628 \u0645\u063A\u0627\u0636\u0628\u064B\u0627 \u0641\u0638\u0646\u0651 \u0623\u0646 \u0644\u0646 \u0646\u0642\u062F\u0631 \u0639\u0644\u064A\u0647 \u0641\u0646\u0627\u062F\u0649 \u0641\u064A \u0627\u0644\u0638\u0651\u0644\u0645\u0627\u062A \u0623\u0646 \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0623\u0646\u062A \u0633\u0628\u062D\u0627\u0646\u0643 \u0625\u0646\u0651\u064A \u0643\u0646\u062A \u0645\u0646 \u0627\u0644\u0638\u0651\u0627\u0644\u0645\u064A\u0646 \u0641\u0627\u0633\u062A\u062C\u0628\u0646\u0627 \u0644\u0647 \u0648\u0646\u062C\u0651\u064A\u0646\u0627\u0647 \u0645\u0646 \u0627\u0644\u063A\u0645\u0651',
        translation: 'E o do Peixe (Dhun-Nun), quando partiu irado e pensou que nao decretariamos nada contra ele. Entao clamou nas trevas: Nao ha divindade alem de Ti! Gloria a Ti! Eu era dos injustos. Respondemos-lhe e o salvamos da angustia.',
        context: 'A oracao de Yunus nas trevas — "La ilaha illa anta subhanaka inni kuntu min az-zalimin" — e uma das suplicas mais repetidas no Islam. E a oracao do desespero absoluto que alcanca Deus atraves de todas as camadas de escuridao.'
      },
      {
        surah: 'Yunus',
        surahNumber: 10,
        verses: '98',
        arabic: '\u0641\u0644\u0648\u0644\u0627 \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0629 \u0622\u0645\u0646\u062A \u0641\u0646\u0641\u0639\u0647\u0627 \u0625\u064A\u0645\u0627\u0646\u0647\u0627 \u0625\u0644\u0627 \u0642\u0648\u0645 \u064A\u0648\u0646\u0633 \u0644\u0645\u0651\u0627 \u0622\u0645\u0646\u0648\u0627 \u0643\u0634\u0641\u0646\u0627 \u0639\u0646\u0647\u0645 \u0639\u0630\u0627\u0628 \u0627\u0644\u062E\u0632\u064A',
        translation: 'Se ao menos houvesse uma cidade que tivesse crido e sua fe lhe tivesse sido util — exceto o povo de Yunus: quando creram, removemos deles o castigo da desonra.',
        context: 'O povo de Yunus e o unico exemplo no Alcorao de uma comunidade inteira que creu e foi perdoada. Ninive e a excecao que confirma a regra: o arrependimento sincero e coletivo pode reverter o decreto divino.'
      }
    ],
    convergences: [
      'Fugiu da missao divina e foi engolido por um grande peixe como consequencia',
      'Orou a Deus de dentro do peixe e foi salvo pela misericordia divina',
      'Seu povo (Ninive) se arrependeu coletivamente e foi perdoado por Deus',
      'Exemplo de que a misericordia de Deus supera a expectativa humana'
    ],
    divergences: [
      'A Biblia detalha a insatisfacao de Jonas com o perdao de Ninive e a licao da planta; o Alcorao nao inclui esse epilogo',
      'O Alcorao enfatiza que a glorificacao constante (tasbih) de Yunus o salvou de permanecer no peixe eternamente',
      'Na Biblia, Jonas e uma figura mais complexa e resistente; no Alcorao, Yunus e descrito como culpado (mulim) mas salvo pela devocao',
      'O Alcorao tem uma surata inteira nomeada Yunus (capitulo 10), embora ela trate de temas mais amplos que apenas a sua historia'
    ],
    scholarContext: 'Yunus/Jonas e unico entre os profetas: e o unico que tentou fugir da missao e foi punido por isso. Ambas as tradicoes concordam nos eventos centrais — a fuga, o peixe, a oracao nas trevas, a salvacao e o arrependimento de Ninive. A diferenca de enfase e reveladora: a Biblia dedica o capitulo 4 inteiro a insatisfacao de Jonas com a misericordia de Deus (ele queria que Ninive fosse destruida) e a licao da planta. O Alcorao foca na oracao de Yunus nas trevas e na unicidade do arrependimento de Ninive como comunidade inteira. A suplica de Yunus — "La ilaha illa anta subhanaka" — e uma das oracoes mais amadas do Islam, usada em momentos de angustia profunda.'
  },

  // ==========================================================================
  // 16. YAHYA (Joao Batista)
  // ==========================================================================
  {
    id: 'yahya',
    name: 'Yahya (Joao Batista)',
    arabicName: '\u064A\u062D\u064A\u0649',
    era: '~5 a.C. - ~30 d.C.',
    bibleRefs: [
      {
        book: 'Lucas',
        chapter: '1',
        verses: '13-17',
        text: 'Mas o anjo lhe disse: Zacarias, nao temas, porque a tua oracao foi ouvida, e Isabel, tua mulher, dara a luz um filho, e lhe poras o nome de Joao. E teras prazer e alegria, e muitos se alegrarao no seu nascimento. Porque sera grande diante do Senhor, e nao bebera vinho, nem bebida forte, e sera cheio do Espirito Santo, ja desde o ventre de sua mae. E convertera muitos dos filhos de Israel ao Senhor, seu Deus.',
        context: 'O nascimento de Joao Batista e anunciado pelo anjo Gabriel a seu pai Zacarias — um sacerdote idoso cuja esposa era esteril. O parallelo com o nascimento de Jesus e intencional: ambos sao anunciados por Gabriel, ambos nascem de forma miraculosa.'
      },
      {
        book: 'Mateus',
        chapter: '3',
        verses: '1-6, 13-17',
        text: 'E naqueles dias apareceu Joao Batista pregando no deserto da Judeia e dizendo: Arrependei-vos, porque e chegado o Reino dos ceus. Entao veio Jesus da Galileia ter com Joao, junto do Jordao, para ser batizado por ele. Batizado Jesus, saiu logo da agua, e eis que se lhe abriram os ceus, e viu o Espirito de Deus descendo como pomba e vindo sobre ele.',
        context: 'Joao batiza Jesus no Jordao — o momento que inaugura o ministerio publico de Jesus. Joao e o precursor, aquele que prepara o caminho. "E necessario que ele cresca e que eu diminua" (Joao 3:30).'
      },
      {
        book: 'Marcos',
        chapter: '6',
        verses: '25-28',
        text: 'E entrando logo com pressa diante do rei, pediu, dizendo: Quero que imediatamente me des num prato a cabeca de Joao Batista. E o rei mandou logo um carrasco e lhe ordenou que trouxesse a cabeca dele. E este foi e degolou-o no carcere.',
        context: 'A morte de Joao Batista — decapitado por ordem de Herodes para satisfazer o pedido de Salome. O profeta que nao se curvou ao poder, mesmo quando lhe custou a vida.'
      }
    ],
    quranRefs: [
      {
        surah: 'Maryam',
        surahNumber: 19,
        verses: '1-11',
        arabic: '\u064A\u0627 \u0632\u0643\u0631\u064A\u0651\u0627 \u0625\u0646\u0651\u0627 \u0646\u0628\u0634\u0651\u0631\u0643 \u0628\u063A\u0644\u0627\u0645 \u0627\u0633\u0645\u0647 \u064A\u062D\u064A\u0649 \u0644\u0645 \u0646\u062C\u0639\u0644 \u0644\u0647 \u0645\u0646 \u0642\u0628\u0644 \u0633\u0645\u064A\u0651\u064B\u0627',
        translation: 'O Zakariyya, damos-te a boa-nova de um filho cujo nome sera Yahya — nome que nao demos a ninguem antes dele.',
        context: 'O nome Yahya e unico — Deus diz que "nao demos a ninguem antes dele" esse nome. O Alcorao enfatiza a exclusividade de Yahya desde o nascimento.'
      },
      {
        surah: 'Ali \'Imran',
        surahNumber: 3,
        verses: '38-41',
        arabic: '\u0647\u0646\u0627\u0644\u0643 \u062F\u0639\u0627 \u0632\u0643\u0631\u064A\u0651\u0627 \u0631\u0628\u0651\u0647 \u0642\u0627\u0644 \u0631\u0628\u0651 \u0647\u0628 \u0644\u064A \u0645\u0646 \u0644\u062F\u0646\u0643 \u0630\u0631\u0651\u064A\u0651\u0629 \u0637\u064A\u0651\u0628\u0629 \u0625\u0646\u0651\u0643 \u0633\u0645\u064A\u0639 \u0627\u0644\u062F\u0651\u0639\u0627\u0621 \u0641\u0646\u0627\u062F\u062A\u0647 \u0627\u0644\u0645\u0644\u0627\u0626\u0643\u0629 \u0648\u0647\u0648 \u0642\u0627\u0626\u0645 \u064A\u0635\u0644\u0651\u064A \u0641\u064A \u0627\u0644\u0645\u062D\u0631\u0627\u0628 \u0623\u0646\u0651 \u0627\u0644\u0644\u0651\u0647 \u064A\u0628\u0634\u0651\u0631\u0643 \u0628\u064A\u062D\u064A\u0649 \u0645\u0635\u062F\u0651\u0642\u064B\u0627 \u0628\u0643\u0644\u0645\u0629 \u0645\u0646 \u0627\u0644\u0644\u0651\u0647 \u0648\u0633\u064A\u0651\u062F\u064B\u0627 \u0648\u062D\u0635\u0648\u0631\u064B\u0627 \u0648\u0646\u0628\u064A\u0651\u064B\u0627 \u0645\u0646 \u0627\u0644\u0635\u0651\u0627\u0644\u062D\u064A\u0646',
        translation: 'Entao Zakariyya suplicou ao seu Senhor: Senhor meu, da-me de Tua parte uma descendencia boa. Tu es Ouvinte das suplicas. Entao os anjos o chamaram enquanto estava em pe orando no santuario: Deus te da a boa-nova de Yahya, confirmando uma Palavra de Deus, um lider, casto e profeta dentre os justos.',
        context: 'Yahya recebe titulos extraordinarios no Alcorao: "confirmando uma Palavra de Deus" (referencia a Isa), "sayyid" (lider/mestre), "hasur" (casto) e "profeta dentre os justos". E a resposta a oracao de um pai idoso.'
      },
      {
        surah: 'Maryam',
        surahNumber: 19,
        verses: '12-15',
        arabic: '\u064A\u0627 \u064A\u062D\u064A\u0649 \u062E\u0630 \u0627\u0644\u0643\u062A\u0627\u0628 \u0628\u0642\u0648\u0651\u0629 \u0648\u0622\u062A\u064A\u0646\u0627\u0647 \u0627\u0644\u062D\u0643\u0645 \u0635\u0628\u064A\u0651\u064B\u0627 \u0648\u062D\u0646\u0627\u0646\u064B\u0627 \u0645\u0646 \u0644\u062F\u0646\u0651\u0627 \u0648\u0632\u0643\u0627\u0629 \u0648\u0643\u0627\u0646 \u062A\u0642\u064A\u0651\u064B\u0627 \u0648\u0628\u0631\u0651\u064B\u0627 \u0628\u0648\u0627\u0644\u062F\u064A\u0647 \u0648\u0644\u0645 \u064A\u0643\u0646 \u062C\u0628\u0651\u0627\u0631\u064B\u0627 \u0639\u0635\u064A\u0651\u064B\u0627 \u0648\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0647 \u064A\u0648\u0645 \u0648\u0644\u062F \u0648\u064A\u0648\u0645 \u064A\u0645\u0648\u062A \u0648\u064A\u0648\u0645 \u064A\u0628\u0639\u062B \u062D\u064A\u0651\u064B\u0627',
        translation: 'O Yahya, toma o Livro com forca. E lhe demos sabedoria ainda crianca, e ternura de Nossa parte e pureza. E era devoto, e bondoso com seus pais, e nao era arrogante nem desobediente. E paz sobre ele no dia em que nasceu, no dia em que morrera e no dia em que sera ressuscitado vivo.',
        context: 'A triplice paz sobre Yahya — nascimento, morte e ressurreicao — e identica a formula usada para Isa poucos versiculos depois (19:33). Yahya recebeu sabedoria desde crianca e e descrito com uma ternura rara no texto coranico.'
      }
    ],
    convergences: [
      'Nasceu de pais idosos por intervencao divina — Zacarias e Isabel/esposa esteril',
      'Anunciado pelo anjo Gabriel antes do nascimento',
      'Precursor de Jesus/Isa — veio preparar o caminho',
      'Homem de grande piedade, ascetismo e integridade moral'
    ],
    divergences: [
      'A Biblia enfatiza o papel de Joao como batizador e precursor do Messias; o Alcorao o apresenta como profeta independente com titulos proprios',
      'O batismo como ritual central do ministerio de Joao nao aparece no Alcorao',
      'A Biblia narra a morte de Joao por decapitacao a mando de Herodes; o Alcorao menciona a paz sobre o dia de sua morte sem detalhar as circunstancias',
      'No Alcorao, Yahya e descrito como "confirmando uma Palavra de Deus" — referencia a Isa que precede — estabelecendo a conexao entre os dois profetas'
    ],
    scholarContext: 'Yahya/Joao Batista e uma das figuras mais belas das duas escrituras. Na Biblia, ele e o ultimo profeta do Antigo Testamento e o primeiro a reconhecer Jesus — a ponte entre as duas eras. No Alcorao, ele recebe titulos que nenhum outro profeta recebe na mesma combinacao: sayyid (mestre/lider), hasur (casto), e recebe a triplice paz (nascimento, morte, ressurreicao). A descricao coranica de Yahya enfatiza sua ternura (hanan), sua pureza e sua bondade com os pais — um retrato de santidade serena que complementa o retrato biblico do profeta selvagem do deserto vestido de peles de camelo. Ambas as tradicoes concordam que Yahya foi santo desde o ventre materno.'
  },

  // ==========================================================================
  // 17. AYYUB (Jo)
  // ==========================================================================
  {
    id: 'ayyub',
    name: 'Ayyub (Jo)',
    arabicName: '\u0623\u064A\u0648\u0628',
    era: 'Era Patriarcal',
    bibleRefs: [
      {
        book: 'Jo',
        chapter: '1',
        verses: '1, 13-22',
        text: 'Havia um homem na terra de Uz, cujo nome era Jo; e era este homem integro, reto, temente a Deus e desviava-se do mal. Veio um dia seus filhos e suas filhas comiam e bebiam em casa do irmao primogenito. Entao veio um mensageiro a Jo e lhe disse: Os bois lavravam, e as jumentas pastavam junto a eles, e os sabeus deram sobre eles e os tomaram. Entao Jo se levantou, e rasgou o seu manto, e rapou a sua cabeca, e se lancou em terra, e adorou. E disse: Nu sai do ventre de minha mae e nu tornarei para la. O Senhor o deu e o Senhor o tomou; bendito seja o nome do Senhor.',
        context: 'Jo perde tudo em um unico dia — filhos, riqueza, saude — e sua primeira reacao e adorar. A resposta "o Senhor deu, o Senhor tomou" e uma das declaracoes de fe mais profundas da literatura humana.'
      },
      {
        book: 'Jo',
        chapter: '2',
        verses: '7-10',
        text: 'Entao saiu Satanas da presenca do Senhor e feriu a Jo de tumores malignos, desde a planta do pe ate ao alto da cabeca. E Jo tomou um caco para se raspar com ele; e estava assentado no meio da cinza. Entao sua mulher lhe disse: Ainda reténs a tua sinceridade? Amaldicoa a Deus e morre. Porem ele lhe disse: Como fala qualquer doida, falas tu. Receberemos o bem de Deus e nao receberemos o mal?',
        context: 'Mesmo quando sua propria esposa sugere que abandone Deus, Jo mantem a integridade. A pergunta "receberemos o bem de Deus e nao o mal?" e o centro do livro: fe que resiste quando nao ha explicacao.'
      },
      {
        book: 'Jo',
        chapter: '42',
        verses: '5-6, 10, 12',
        text: 'Eu te conhecia so de ouvir, mas agora os meus olhos te veem. Por isso, me abomino e me arrependo no po e na cinza. E o Senhor virou o cativeiro de Jo, quando orava pelos seus amigos; e o Senhor acrescentou a Jo outro tanto em dobro. Assim abencoou o Senhor o ultimo estado de Jo, mais do que o primeiro.',
        context: 'A restauracao de Jo — Deus nao explica o sofrimento, mas se revela diretamente a Jo. O conhecimento direto de Deus substitui a necessidade de explicacao. E a restauracao vem em dobro.'
      }
    ],
    quranRefs: [
      {
        surah: 'Al-Anbiya',
        surahNumber: 21,
        verses: '83-84',
        arabic: '\u0648\u0623\u064A\u0651\u0648\u0628 \u0625\u0630 \u0646\u0627\u062F\u0649 \u0631\u0628\u0651\u0647 \u0623\u0646\u0651\u064A \u0645\u0633\u0651\u0646\u064A \u0627\u0644\u0636\u0651\u0631\u0651 \u0648\u0623\u0646\u062A \u0623\u0631\u062D\u0645 \u0627\u0644\u0631\u0651\u0627\u062D\u0645\u064A\u0646 \u0641\u0627\u0633\u062A\u062C\u0628\u0646\u0627 \u0644\u0647 \u0641\u0643\u0634\u0641\u0646\u0627 \u0645\u0627 \u0628\u0647 \u0645\u0646 \u0636\u0631\u0651 \u0648\u0622\u062A\u064A\u0646\u0627\u0647 \u0623\u0647\u0644\u0647 \u0648\u0645\u062B\u0644\u0647\u0645 \u0645\u0639\u0647\u0645 \u0631\u062D\u0645\u0629 \u0645\u0646 \u0639\u0646\u062F\u0646\u0627 \u0648\u0630\u0643\u0631\u0649 \u0644\u0644\u0639\u0627\u0628\u062F\u064A\u0646',
        translation: 'E Ayyub, quando clamou ao seu Senhor: O mal me tocou, e Tu es o Mais Misericordioso dos misericordiosos. Respondemos-lhe e removemos o mal que havia nele, e lhe devolvemos sua familia e outro tanto com eles — misericordia de Nossa parte e lembranca para os adoradores.',
        context: 'A oracao de Ayyub no Alcorao e de uma simplicidade devastadora: "O mal me tocou, e Tu es o Mais Misericordioso." Sem acusacao, sem questionamento — apenas a declaracao da dor e a afirmacao da misericordia. Deus responde imediatamente.'
      },
      {
        surah: 'Sad',
        surahNumber: 38,
        verses: '41-44',
        arabic: '\u0648\u0627\u0630\u0643\u0631 \u0639\u0628\u062F\u0646\u0627 \u0623\u064A\u0651\u0648\u0628 \u0625\u0630 \u0646\u0627\u062F\u0649 \u0631\u0628\u0651\u0647 \u0623\u0646\u0651\u064A \u0645\u0633\u0651\u0646\u064A \u0627\u0644\u0634\u0651\u064A\u0637\u0627\u0646 \u0628\u0646\u0635\u0628 \u0648\u0639\u0630\u0627\u0628 \u0627\u0631\u0643\u0636 \u0628\u0631\u062C\u0644\u0643 \u0647\u0630\u0627 \u0645\u063A\u062A\u0633\u0644 \u0628\u0627\u0631\u062F \u0648\u0634\u0631\u0627\u0628 \u0648\u0648\u0647\u0628\u0646\u0627 \u0644\u0647 \u0623\u0647\u0644\u0647 \u0648\u0645\u062B\u0644\u0647\u0645 \u0645\u0639\u0647\u0645 ... \u0625\u0646\u0651\u0627 \u0648\u062C\u062F\u0646\u0627\u0647 \u0635\u0627\u0628\u0631\u064B\u0627 \u0646\u0639\u0645 \u0627\u0644\u0639\u0628\u062F \u0625\u0646\u0651\u0647 \u0623\u0648\u0651\u0627\u0628',
        translation: 'E lembra-te do Nosso servo Ayyub, quando clamou ao seu Senhor: Satanas me tocou com cansaco e tormento. Bate com teu pe — aqui esta agua fresca para banho e bebida. E lhe devolvemos sua familia e outro tanto com eles. ... Encontramo-lo paciente. Que excelente servo! Ele era penitente.',
        context: 'Deus ordena a Ayyub que bata com o pe no chao — e brota uma fonte de agua curativa. A restauracao e fisica e total. O elogio divino e direto: "Que excelente servo!" (ni\'ma al-abd). Ayyub e o modelo de paciencia no Islam.'
      },
      {
        surah: 'An-Nisa',
        surahNumber: 4,
        verses: '163',
        arabic: '\u0625\u0646\u0651\u0627 \u0623\u0648\u062D\u064A\u0646\u0627 \u0625\u0644\u064A\u0643 \u0643\u0645\u0627 \u0623\u0648\u062D\u064A\u0646\u0627 \u0625\u0644\u0649 \u0646\u0648\u062D \u0648\u0627\u0644\u0646\u0651\u0628\u064A\u0651\u064A\u0646 \u0645\u0646 \u0628\u0639\u062F\u0647',
        translation: 'Revelamos a ti como revelamos a Nuh e aos profetas apos ele.',
        context: 'Ayyub e mencionado na lista mais ampla de profetas que receberam revelacao divina, confirmando sua posicao na cadeia profetica reconhecida pelo Islam.'
      }
    ],
    convergences: [
      'Homem justo e integro que foi testado com a perda de tudo — saude, riqueza, familia',
      'Manteve a fe em Deus apesar do sofrimento inexplicavel',
      'Foi restaurado por Deus apos a provacao — recebendo em dobro o que havia perdido',
      'Modelo supremo de paciencia e confianca em Deus nas duas tradicoes'
    ],
    divergences: [
      'A Biblia dedica 42 capitulos a Ayyub com dialogos filosoficos extensos sobre o sofrimento; o Alcorao resume em poucos versiculos intensos',
      'Na Biblia, Jo questiona Deus e exige respostas; no Alcorao, Ayyub simplesmente declara sua dor e afirma a misericordia divina sem questionamento',
      'A Biblia inclui os discursos dos amigos de Jo e a resposta de Deus do redemoinho; o Alcorao nao detalha essas interacoes',
      'A cena de Satanas pedindo permissao a Deus para testar Jo (Jo 1:6-12) nao aparece no Alcorao da mesma forma'
    ],
    scholarContext: 'Ayyub/Jo e o profeta da paciencia. O Livro de Jo na Biblia e uma das obras literarias mais profundas ja escritas — 42 capitulos de poesia e filosofia sobre o sofrimento inocente, culminando na revelacao direta de Deus do redemoinho. No Alcorao, a historia e condensada em poucos versiculos de poder imenso: a oracao simples de Ayyub e a resposta imediata de Deus. A diferenca de abordagem e instrutiva: a Biblia explora a pergunta "por que sofro?" em profundidade filosofica; o Alcorao responde com "se paciente e Deus restaurara". Ambas as respostas sao validas e complementares. O elogio divino "que excelente servo!" (ni\'ma al-abd) dado a Ayyub no Alcorao e um dos titulos mais honrosos que um ser humano pode receber de Deus.'
  }
]
