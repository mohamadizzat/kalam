/**
 * cross-refs.js
 * Referências cruzadas entre Alcorão, Torah e Evangelho.
 * Formato: chave = "surah:ayah" ou "surah:ayah-ayah"
 *
 * Como adicionar:
 *   1. Identifique o versículo do Alcorão que você quer conectar
 *   2. Encontre o paralelo na Torah (Torá = Gênesis, Êxodo, Levítico, Números, Deuteronômio)
 *      ou no Evangelho (Mateus, Marcos, Lucas, João)
 *   3. Adicione o objeto abaixo
 *
 * connection_type:
 *   "confirms"   → Alcorão confirma o que os livros anteriores dizem
 *   "corrects"   → Alcorão corrige uma distorção
 *   "expands"    → Alcorão adiciona detalhes que não estão nas outras escrituras
 *   "parallels"  → Mesmo evento, perspectivas diferentes
 */

export const crossRefs = {
  // ── AL-FATIHA ───────────────────────────────────────────────────────────────

  "1:2": {
    topic: "Louvor a Allah, Senhor dos mundos",
    refs: [
      {
        book: "Salmos", chapter: 136, verse: 1,
        text: "Dai graças ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.",
        connection_type: "parallels",
        note: "A abertura dos Salmos de Davi espelha o espírito de Al-Hamdu. Ambos começam com louvor ao Criador como ato central de fé."
      }
    ]
  },

  "1:6-7": {
    topic: "A Senda Reta — Sirat al-Mustaqim",
    refs: [
      {
        book: "Salmos", chapter: 23, verse: "1-3",
        text: "O Senhor é o meu pastor... Guia-me pelas veredas da justiça.",
        connection_type: "parallels",
        note: "O pedido por guia à senda reta aparece como tema central tanto no Salmo 23 quanto na Fatiha. A mesma súplica, formas diferentes."
      }
    ]
  },

  // ── CRIAÇÃO / ADÃO ──────────────────────────────────────────────────────────

  "2:30-33": {
    topic: "Adão como Khalifah — Representante de Allah na Terra",
    refs: [
      {
        book: "Gênesis", chapter: 1, verse: "26-27",
        text: "Façamos o homem à nossa imagem e semelhança. E que domine sobre os peixes... e sobre toda a terra.",
        connection_type: "parallels",
        note: "A Torah fala em domínio sobre a terra. O Alcorão expande: o ser humano não é apenas dominador, mas khalifah — responsável, representante, com uma missão."
      }
    ]
  },

  "2:34": {
    topic: "Iblis recusa a prosternação",
    refs: [
      {
        book: "Gênesis", chapter: 3, verse: 1,
        text: "Ora, a serpente era mais astuta que todos os animais do campo...",
        connection_type: "parallels",
        note: "A Torah introduz o inimigo como serpente. O Alcorão nomeia claramente: Iblis, que se recusou a se prostrar diante de Adão por orgulho. O Islam expande o contexto da queda com mais detalhes."
      }
    ]
  },

  "2:37": {
    topic: "Adão se arrepende — não há pecado original",
    refs: [
      {
        book: "Gênesis", chapter: 3, verse: "22-24",
        text: "Então o Senhor Deus expulsou o homem do jardim do Éden...",
        connection_type: "corrects",
        note: "Na Torah/Evangelho, a expulsão é castigo eterno com pecado hereditário. No Islam: Adão se arrependeu, foi perdoado, e foi enviado à Terra como missão — não como punição. Cada ser humano nasce puro (fitra)."
      }
    ]
  },

  // ── ABRAÃO / IBRAHIM ────────────────────────────────────────────────────────

  "2:127-128": {
    topic: "Ibrahim e Ismael constroem a Caaba",
    refs: [
      {
        book: "Gênesis", chapter: 21, verse: "17-21",
        text: "E Deus ouviu a voz do menino... e disse: Levanta o menino e toma-o pela mão, porque dele farei uma grande nação.",
        connection_type: "expands",
        note: "A Torah menciona que Allah abençoou Ismael e prometeu fazer dele uma grande nação. O Alcorão expande: Ibrahim voltou para Ismael na Arabia, e juntos construíram a Caaba como casa de adoração a Allah."
      }
    ]
  },

  "2:136": {
    topic: "Cremos em todos os profetas sem distinção",
    refs: [
      {
        book: "Deuteronômio", chapter: 18, verse: "18-19",
        text: "Suscitar-lhes-ei um profeta do meio de seus irmãos, semelhante a ti, e porei as minhas palavras na sua boca...",
        connection_type: "confirms",
        note: "A Torah profetiza um profeta vindouro 'semelhante a Moisés, da família dos irmãos' (ismaelitas). Muçulmanos entendem isso como referência a Muhammad ﷺ. O Islam é a continuação desta promessa."
      }
    ]
  },

  "3:67": {
    topic: "Ibrahim não era judeu nem cristão — era Hanif",
    refs: [
      {
        book: "Gálatas", chapter: 3, verse: "6-9",
        text: "Assim como Abraão creu em Deus, e isso lhe foi imputado para justiça... os que são da fé são filhos de Abraão.",
        connection_type: "confirms",
        note: "Paulo reconhece que Abraão foi justificado pela fé (submissão), não pelas leis posteriores. O Islam vai além: Ibrahim praticava o Islam puro — submissão direta a Allah sem intermediários."
      }
    ]
  },

  // ── MOISÉS / MUSA ───────────────────────────────────────────────────────────

  "20:9-24": {
    topic: "Moisés e o Arbusto em Chamas — O Chamado Profético",
    refs: [
      {
        book: "Êxodo", chapter: 3, verse: "1-6",
        text: "E apareceu-lhe o Anjo do Senhor em uma chama de fogo do meio de uma sarça... Moisés, Moisés! Aqui estou.",
        connection_type: "confirms",
        note: "Um dos poucos eventos que o Alcorão e a Torah descrevem com detalhes similares. Ambos confirmam o mesmo chamado, a mesma missão. O Alcorão adiciona o diálogo e os milagres com mais detalhamento."
      }
    ]
  },

  "28:7-13": {
    topic: "A mãe de Moisés e o cesto no rio",
    refs: [
      {
        book: "Êxodo", chapter: 2, verse: "1-10",
        text: "A mulher concebeu e deu à luz um filho... e não o podendo esconder mais tempo, tomou um cestinho... e o pôs nas margens do rio.",
        connection_type: "confirms",
        note: "Uma das histórias mais similares entre as duas escrituras. O Alcorão adiciona um detalhe ausente no Êxodo: a mãe de Moisés recebeu inspiração (wahyi) direta de Allah para colocá-lo no cesto."
      }
    ]
  },

  // ── JESUS / 'ISA ────────────────────────────────────────────────────────────

  "3:45-47": {
    topic: "Nascimento virginal de 'Isa",
    refs: [
      {
        book: "Lucas", chapter: 1, verse: "34-35",
        text: "Disse Maria ao anjo: Como se fará isso, visto que não conheço homem? O Espírito Santo virá sobre ti...",
        connection_type: "confirms",
        note: "O Alcorão confirma o nascimento virginal com detalhes adicionais. Ambas as escrituras concordam: Jesus nasceu sem pai humano. O anjo Jibril (Gabriel) está presente nas duas narrações."
      }
    ]
  },

  "5:46": {
    topic: "'Isa recebeu o Injil como revelação",
    refs: [
      {
        book: "João", chapter: 14, verse: "16-17",
        text: "E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre. O Espírito da Verdade...",
        connection_type: "confirms",
        note: "Muçulmanos entendem o 'Consolador' (Paráclito em grego) como referência a Muhammad ﷺ. No original aramaico, 'Paráclito' pode ser derivado de 'Periklytos' — que significa 'o mais louvável' — equivalente exato de 'Muhammad'."
      }
    ]
  },

  "4:157-158": {
    topic: "A crucificação — perspectiva islâmica",
    refs: [
      {
        book: "Marcos", chapter: 15, verse: "33-37",
        text: "E às três horas Jesus clamou em alta voz: Eloí, Eloí, lamá sabactâni? (Meu Deus, meu Deus, por que me abandonaste?)",
        connection_type: "corrects",
        note: "O Alcorão ensina que Jesus não morreu na cruz — foi elevado aos céus por Allah. O fato de Jesus clamar 'por que me abandonaste?' no Evangelho levantou questionamentos sobre o evento. O Islam resolve: Jesus foi salvo e ascendeu ao Paraíso."
      }
    ]
  },

  "19:30-33": {
    topic: "Jesus fala no berço — Milagre ausente do NT",
    refs: [
      {
        book: "Lucas", chapter: 2, verse: "52",
        text: "E Jesus crescia em sabedoria e estatura, e em graça para com Deus e os homens.",
        connection_type: "expands",
        note: "O Evangelho de Lucas diz que Jesus crescia em sabedoria — mas o Alcorão revela que ele FALOU no berço, recém-nascido. Este milagre não está no NT canônico, mas aparece em alguns evangelhos apócrifos, como o Evangelho Árabe da Infância."
      }
    ]
  },

  // ── MUHAMMAD ﷺ ──────────────────────────────────────────────────────────────

  "7:157": {
    topic: "Muhammad ﷺ mencionado na Torah e no Evangelho",
    refs: [
      {
        book: "Deuteronômio", chapter: 18, verse: 18,
        text: "Suscitar-lhes-ei um profeta do meio de seus irmãos, semelhante a ti...",
        connection_type: "confirms",
        note: "O Alcorão afirma que Muhammad ﷺ é mencionado 'na Torah e no Evangelho'. O texto da Deutoronômio profetiza um profeta 'dos irmãos' de Israel — os ismaelitas. Muhammad veio desta linhagem, foi iletrado como descrito, e trouxe as palavras diretamente de Allah."
      }
    ]
  },

  "61:6": {
    topic: "'Isa anuncia a vinda de Ahmad (Muhammad)",
    refs: [
      {
        book: "João", chapter: 16, verse: "12-13",
        text: "Ainda tenho muito que vos dizer, mas vós não o podeis suportar agora. Quando vier o Espírito da Verdade, ele vos guiará em toda a verdade.",
        connection_type: "confirms",
        note: "Jesus anuncia explicitamente a vinda de outro após ele — 'que vos guiará em toda a verdade'. O Islam identifica este 'Espírito da Verdade' como Muhammad ﷺ, cujas revelações completaram a mensagem profética."
      }
    ]
  },

  // ── MONOTEÍSMO ──────────────────────────────────────────────────────────────

  "112:1-4": {
    topic: "Surata Al-Ikhlas — O monoteísmo puro",
    refs: [
      {
        book: "Deuteronômio", chapter: 6, verse: "4",
        text: "Ouve, ó Israel: o Senhor nosso Deus é o único Senhor.",
        connection_type: "confirms",
        note: "O Shema Israel ('Escuta, Israel') é o fundamento do monoteísmo judaico. Surata Al-Ikhlas é sua contraparte islâmica — ambos declaram a unicidade absoluta de Deus sem parceiros, filhos ou associados."
      },
      {
        book: "Marcos", chapter: 12, verse: "29",
        text: "Jesus respondeu: O primeiro de todos os mandamentos é: Ouve, ó Israel; o Senhor nosso Deus é o único Senhor.",
        connection_type: "confirms",
        note: "Jesus cita o Shema como o principal mandamento. No Islam, esta declaração de Tawhid é idêntica à Shahada. Jesus pregava monoteísmo puro — o mesmo Islam."
      }
    ]
  },

  // ── AYATUL KURSI ────────────────────────────────────────────────────────────

  "2:255": {
    topic: "Ayatul Kursi — O Versículo do Trono",
    refs: [
      {
        book: "Salmos", chapter: 47, verse: "2-3",
        text: "Porque o Senhor, o Altíssimo, é tremendo; é um grande Rei sobre toda a terra... Deus reina sobre as nações; Deus está assentado em seu santo trono.",
        connection_type: "parallels",
        note: "Ayatul Kursi descreve Allah como o Eterno Vivente cujo Trono abrange os céus e a terra. Os Salmos de Davi proclamam o mesmo: Deus como o Rei supremo assentado em Seu Trono. O tema do Trono Divino (Kursi/Throne) é central em ambas as tradições."
      }
    ]
  },

  // ── YUSUF / JOSÉ ────────────────────────────────────────────────────────────

  "12:4-5": {
    topic: "O Sonho de Yusuf — A Mais Bela História",
    refs: [
      {
        book: "Gênesis", chapter: 37, verse: "5-9",
        text: "E José teve um sonho, e o contou a seus irmãos... Eis que estávamos atando feixes no campo, e eis que o meu feixe se levantou e ficou em pé, e eis que os vossos feixes se puseram ao redor, e se inclinaram ao meu feixe.",
        connection_type: "confirms",
        note: "A história de Yusuf (José) é a única narrativa no Alcorão que ocupa uma surata inteira (Al-Qasas). O Alcorão a chama de 'ahsanal qasas' — a mais bela das histórias. Ambas confirmam o sonho profético, a traição dos irmãos e a providência de Allah. O Alcorão adiciona detalhes do diálogo interior e do teste moral com a esposa do ministro."
      }
    ]
  },

  // ── MARYAM / ANUNCIAÇÃO ─────────────────────────────────────────────────────

  "19:16-21": {
    topic: "A Anunciação — O Anjo e Maryam",
    refs: [
      {
        book: "Lucas", chapter: 1, verse: "28-31",
        text: "E entrando o anjo onde ela estava, disse: Alegra-te, Maria, cheia de graça; o Senhor é contigo... Eis que conceberás no teu ventre, e darás à luz um filho, e chamarás o seu nome Jesus.",
        connection_type: "confirms",
        note: "Um dos eventos mais detalhados em ambas as escrituras. O Alcorão confirma que o Espírito (Jibril/Gabriel) foi enviado a Maryam para anunciar o nascimento virginal. Ambas as versões confirmam o espanto de Maria e a resposta divina. O Alcorão adiciona que Maryam se afastou da família para um lugar oriental antes da concepção."
      }
    ]
  },

  // ── FARAÓ E MUSA ────────────────────────────────────────────────────────────

  "26:15-17": {
    topic: "Musa enviado ao Faraó — A Missão Profética",
    refs: [
      {
        book: "Êxodo", chapter: 3, verse: "10-12",
        text: "Vai, pois, agora, e eu te enviarei ao Faraó, para que tires o meu povo, os filhos de Israel, do Egito. E disse Moisés a Deus: Quem sou eu, para que vá ao Faraó?",
        connection_type: "confirms",
        note: "A resistência inicial de Moisés ao chamado profético é idêntica nos dois textos: o senso de inadequação diante de uma missão impossível. O Alcorão acrescenta o contexto de Harun (Aarão) como suporte linguístico — Musa pede um interlocutor porque temia não ser eloquente."
      }
    ]
  },

  "10:90-92": {
    topic: "A Fé Tardia do Faraó — Arrependimento no Último Instante",
    refs: [
      {
        book: "Êxodo", chapter: 14, verse: "27-28",
        text: "Então Moisés estendeu a sua mão sobre o mar... E as águas voltaram e cobriram os carros e os cavaleiros de todo o exército do Faraó, que tinham entrado no mar.",
        connection_type: "expands",
        note: "A Torah narra o afogamento do Faraó sem detalhes sobre seu estado final. O Alcorão adiciona um detalhe crucial: no momento do afogamento, o Faraó declarou sua fé — mas foi tarde demais. Allah preservou seu corpo como sinal para as gerações futuras. Arqueólogos afirmam que a múmia do Ramsés II, preservada há 3.200 anos, pode ser este mesmo Faraó."
      }
    ]
  },

  // ── JESUS E SEUS MILAGRES ────────────────────────────────────────────────────

  "3:49": {
    topic: "Os Milagres de Jesus — Com Permissão de Allah",
    refs: [
      {
        book: "João", chapter: 11, verse: "43-44",
        text: "E, tendo dito isso, clamou em alta voz: Lázaro, sai para fora. E saiu o que havia morrido, tendo as mãos e os pés atados com faixas.",
        connection_type: "confirms",
        note: "O Alcorão confirma que Jesus ressuscitou os mortos — mas com uma distinção teológica fundamental. No Alcorão, Jesus diz: 'curo os cegos e os leprosos, e ressuscito os mortos, COM A PERMISSÃO DE ALLAH.' No Evangelho de João, Jesus age como autoridade própria. Para o Islam, essa distinção é essencial: o milagre é de Allah, não de Jesus por si mesmo."
      }
    ]
  },

  // ── VIDA HUMANA COMO SAGRADA ─────────────────────────────────────────────────

  "5:32": {
    topic: "Salvar uma vida = Salvar a humanidade toda",
    refs: [
      {
        book: "Talmude", chapter: "Sanhedrin", verse: "4:5",
        text: "Portanto, Adão foi criado sozinho — para te ensinar que quem destruir uma única alma, a Escritura o considera como se tivesse destruído um mundo inteiro. E quem salvar uma única alma, é como se tivesse salvado um mundo inteiro.",
        connection_type: "confirms",
        note: "O versículo 5:32 do Alcorão é quase idêntico ao Talmude de Sanhedrin — a ponto de alguns pesquisadores considerá-lo uma citação direta. O Islam confirma: esta lei de valor da vida humana vem de Allah, presente tanto na tradição judaica quanto na islâmica. É um exemplo claro de como as revelações se confirmam entre si."
      }
    ]
  },

  // ── IBRAHIM DESTRÓI OS ÍDOLOS ────────────────────────────────────────────────

  "21:51-67": {
    topic: "Ibrahim e os Ídolos — O Confronto Direto com o Politeísmo",
    refs: [
      {
        book: "Gênesis", chapter: 12, verse: "1",
        text: "Ora, o Senhor disse a Abrão: Sai da tua terra, dos teus parentes e da casa de teu pai, para a terra que te mostrarei.",
        connection_type: "expands",
        note: "A Torah menciona que Abraham foi chamado a sair de sua terra, mas não explica o PORQUÊ. O Alcorão expande: Ibrahim cresceu questionando os ídolos do pai desde a infância, destruiu os ídolos do templo para provar ao povo que eles eram inúteis, foi condenado à fogueira e salvo por Allah. Este é um dos episódios mais dramáticos do Alcorão — ausente na Torah mas presente em tradições judaicas extracanônicas (Midrash)."
      }
    ]
  },

  // ── SULAYMAN E SABA ─────────────────────────────────────────────────────────

  "27:15-44": {
    topic: "Sulayman e a Rainha de Sabá — Sabedoria e Poder",
    refs: [
      {
        book: "1 Reis", chapter: 10, verse: "1-7",
        text: "E quando a rainha de Sabá ouviu a fama de Salomão... veio provar Salomão com questões difíceis... E disse ao rei: Verdadeiro é o que ouvi na minha terra acerca dos teus feitos e da tua sabedoria. Mas eu não cria nas coisas até que vim e meus olhos o viram.",
        connection_type: "expands",
        note: "Ambas as escrituras narram a visita da Rainha de Sabá (Bilquis, no Islam) a Sulayman. O Alcorão expande significativamente: a rainha recebia mensagens via pássaros (a poupa/hoopoe), havia um trono trazido em um instante por um jinn, e ela finalmente se submeteu a Allah. O Alcorão apresenta Sulayman como profeta que usava seu poder para chamar os povos à submissão a Allah."
      }
    ]
  },
};

/**
 * Como usar no código:
 *   import { crossRefs } from './data/cross-refs.js';
 *   const refs = crossRefs["3:45-47"]; // Nascimento virginal
 */
