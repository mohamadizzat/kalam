// Server component — handles generateStaticParams + data fetching
import { TrailClient } from './TrailClient'

// ── FULL TRAILS DATA ───────────────────────────────────────────────────────────

export const TRAILS = [
  {
    slug: 'deus-e-amor',
    title: 'Deus é Amor',
    arabicTitle: 'الله محبة',
    subtitle: '5 dias para entender o amor de Deus sem culpa e sem medo',
    description:
      'A maior distorção sobre Deus é que Ele é juiz antes de ser pai. Esta trilha percorre o Alcorão em busca de uma imagem diferente — um Deus que ama primeiro, que perdoa primeiro, que está mais perto do que sua própria veia jugular.',
    duration: '5 dias',
    theme: 'Amor & Misericórdia',
    available: true,
    days: [
      {
        day: 1,
        title: 'O Nome que Vem Primeiro',
        arabic: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        translation: 'O Misericordioso, O Misericordiador',
        ref: 'Al-Fatiha 1:3',
        content:
          'O Alcorão começa com Bismillah — "Em nome de Allah, O Misericordioso, O Misericordiador." Das 99 características de Deus no Islam, as duas primeiras que aparecem são sobre misericórdia. Rahman: misericórdia universal, para toda criatura. Rahim: misericórdia íntima, especial, para os que O buscam. Deus escolheu se apresentar pela misericórdia — não pelo poder, não pelo julgamento. 113 das 114 surahs começam com este versículo.',
        reflection:
          'Se alguém te perguntasse "descreva Deus em duas palavras", o que você diria? E se a resposta de Deus sobre si mesmo fosse "misericordioso"?',
        keyInsight:
          'Cada vez que você abre o Alcorão, Deus se apresenta primeiro pela misericórdia. Esse é o Deus que este livro quer que você conheça.',
      },
      {
        day: 2,
        title: 'Mais Próximo que Sua Veia',
        arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ',
        translation: 'E somos mais próximos a ele do que a veia jugular.',
        ref: 'Qaf 50:16',
        content:
          'A veia jugular é a mais próxima ao coração — literalmente dentro de você. E Deus diz que está mais perto do que isso. Este versículo é uma resposta a uma pergunta humana universal: "Onde está Deus quando preciso dele?" A resposta não é "no céu" ou "na mesquita". É: dentro de você, mais próximo do que qualquer coisa material.',
        reflection:
          'Existe algum momento em que você sentiu a presença de algo maior do que você? Este versículo diz que esse "algo" estava mais perto do que você pensava.',
        keyInsight:
          'Deus não precisa ser chamado de longe. A sensação de distância é percepção, não realidade.',
      },
      {
        day: 3,
        title: 'Não Desespere',
        arabic: 'لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ',
        translation: 'Não desespereis da misericórdia de Allah.',
        ref: 'Az-Zumar 39:53',
        content:
          'Este versículo foi revelado para pessoas que erraram — não para os justos. A mensagem não começa com "se você fizer tudo certo". Começa com "ó servos que erraram". E então: não desespere. No Islam, o desespero da misericórdia de Deus é apresentado como um dos erros mais sérios — não porque Deus se ofende, mas porque subestima quem Ele é.',
        reflection:
          'Qual é o erro que você carrega achando que Deus não vai perdoar? Nomeie ele mentalmente. Este versículo foi escrito para isso.',
        keyInsight:
          'Deus dá perdão antes de você pedir — O versículo seguinte completa: "Certamente Allah perdoa todos os pecados." Todos.',
      },
      {
        day: 4,
        title: 'Lembra de Mim',
        arabic: 'فَٱذْكُرُونِىٓ أَذْكُرْكُمْ',
        translation: 'Lembrai-vos de Mim, que Eu Me lembrarei de vós.',
        ref: 'Al-Baqarah 2:152',
        content:
          'Uma troca direta. Uma promessa de reciprocidade. Quando você pensa em Deus — mesmo por um segundo — Ele pensa em você. A tradição islâmica detalha: se você se lembra de Deus sozinho, Ele te menciona numa assembleia de anjos. Se em grupo, numa assembleia mais nobre. Deus como alguém que quer ser lembrado — e responde ao ser lembrado.',
        reflection:
          'Quando foi a última vez que você pensou em Deus sem ser por crise ou obrigação? Só porque quis?',
        keyInsight:
          'Deus não quer só sua obediência — quer sua presença. A linguagem aqui é intimidade, não protocolo.',
      },
      {
        day: 5,
        title: 'Ele os Ama',
        arabic: 'يُحِبُّهُمْ وَيُحِبُّونَهُۥٓ',
        translation: 'Ele os ama e eles O amam.',
        ref: 'Al-Maidah 5:54',
        content:
          'Três palavras em árabe que raramente aparecem no Alcorão: Deus ama. Não só aprova, não só perdoa — ama. E a construção é recíproca: Ele ama primeiro, e então eles amam de volta. O amor de Deus não depende do amor humano — ele vem antes. Como toda boa relação: quem ama mais faz o primeiro movimento.',
        reflection:
          'Se você soubesse — não como conceito religioso mas como fato pessoal — que Deus te ama, o que mudaria no seu dia hoje?',
        keyInsight:
          'Esta trilha começou com o nome "Misericordioso". Termina com "Ele os ama". A jornada inteira foi sobre o mesmo Deus.',
      },
    ],
  },
  {
    slug: 'sem-medo',
    title: 'Sem Medo',
    arabicTitle: 'لَا خَوْفٌ',
    subtitle: '4 dias para substituir o medo de Deus por conexão com Deus',
    description:
      'Muito do que chamamos de "religiosidade" é na verdade ansiedade disfarçada. Esta trilha usa versículos do Alcorão para substituir o medo como motor espiritual pela presença como fundação.',
    duration: '4 dias',
    theme: 'Ansiedade & Paz',
    available: true,
    days: [
      {
        day: 1,
        title: 'Com a Dificuldade Vem a Facilidade',
        arabic: 'إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا',
        translation: 'De fato, com a dificuldade vem a facilidade.',
        ref: 'Al-Inshirah 94:5-6',
        content:
          'Este versículo foi revelado num dos momentos mais difíceis da vida do Profeta. E foi repetido duas vezes no mesmo capítulo. No árabe, quando "a dificuldade" é definida, é sempre a mesma. Quando "a facilidade" é indefinida, são saídas diferentes. Uma dificuldade — múltiplas saídas. Deus repetiu porque sabia que na primeira vez você talvez não acreditasse.',
        reflection:
          'Qual é a dificuldade que você está dentro agora? Se ela já carregasse a saída dentro dela, como seria encontrá-la?',
        keyInsight:
          'O medo da dificuldade assume que não há saída. Este versículo diz que a saída é parte do design.',
      },
      {
        day: 2,
        title: 'Não Sobrecarregado',
        arabic: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        translation: 'Allah não sobrecarrega uma alma além do que ela pode suportar.',
        ref: 'Al-Baqarah 2:286',
        content:
          'Deus, que te criou, conhece exatamente o limite do que você aguenta. E o que Ele pede ou permite em sua vida nunca passa desse ponto. Se você está no limite, este versículo é uma declaração de que você está no limite — mas não além. O peso foi calculado por quem te fez.',
        reflection:
          'O que você está suportando que você achava que não ia conseguir? Este versículo está dizendo que Deus sabia que você ia aguentar.',
        keyInsight:
          'Deus não cria criaturas para quebrá-las. O medo de "não aguentar" é real — mas a promessa é mais real.',
      },
      {
        day: 3,
        title: 'Allah Está Com Você',
        arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
        translation: 'E Ele está convosco onde quer que estejais.',
        ref: 'Al-Hadid 57:4',
        content:
          '"Ma\'akum" — com vocês. Não "observando vocês de cima". Com. A mesma preposição de companhia. Cada lugar onde você está — cada quarto de madrugada, cada viagem sozinho, cada momento de isolamento — Ele está com você. Não como vigia. Como presença.',
        reflection:
          'Há um lugar onde você regularmente se sente sozinho? Este versículo diz que naquele lugar específico, Ele está.',
        keyInsight:
          'O medo da solidão espiritual é uma das ansiedades mais profundas. Este versículo é uma resposta direta.',
      },
      {
        day: 4,
        title: 'A Calma dos Crentes',
        arabic: 'أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ',
        translation: 'Certamente, na lembrança de Allah os corações encontram paz.',
        ref: 'Ar-Ra\'d 13:28',
        content:
          'Tatmainn — paz, tranquilidade, estar assentado. Esta é uma das afirmações mais diretas do Alcorão sobre saúde mental espiritual. A lembrança de Deus (dhikr) é apresentada como o remédio para a inquietação do coração. Não como supressão de emoção — como ancoragem. Quando tudo se move, tem algo que não se move.',
        reflection:
          'O que você usa para se ancorar quando está ansioso? E se experimentar — por um dia — acrescentar a lembrança de Deus a isso?',
        keyInsight:
          'Esta trilha termina onde devia terminar: paz. Não como ausência de problema. Como presença de Deus no meio do problema.',
      },
    ],
  },
  {
    slug: 'jesus-no-quran',
    title: 'Jesus no Alcorão',
    arabicTitle: 'عيسى في القرآن',
    subtitle: '4 dias para entender o que o Islam acredita sobre Jesus — da perspectiva islâmica',
    description:
      'Se você é cristão ou cresceu em contexto cristão, Jesus é central para sua fé. Este trilha mostra o que o Alcorão diz sobre Isa (Jesus) — com honestidade sobre os pontos de concordância e os de divergência.',
    duration: '4 dias',
    theme: 'Pontes & Entendimento',
    available: true,
    days: [
      {
        day: 1,
        title: 'Nascido de Virgem',
        arabic: 'إِذْ قَالَتِ ٱلْمَلَـٰٓئِكَةُ يَـٰمَرْيَمُ إِنَّ ٱللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ ٱسْمُهُ ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ',
        translation:
          'Quando os anjos disseram: Ó Maria, Allah te dá a boa nova de uma palavra Sua, cujo nome é o Messias, Jesus filho de Maria.',
        ref: 'Al-Imran 3:45',
        content:
          'O Alcorão tem uma surata (capítulo) inteira chamada "Maryam" — Maria. Nenhuma mulher na Bíblia tem um capítulo com seu nome. O Alcorão confirma o nascimento virginal de Jesus completamente: "Como terei um filho se nenhum homem me tocou?" — e o anjo responde: "Assim será. Seu Senhor diz: isso é fácil para Mim." O título que o Alcorão dá a Jesus é "al-Masih" — o Messias.',
        reflection:
          'O que você sabia sobre Jesus que não sabia que o Alcorão também afirma?',
        keyInsight:
          'Islam e Cristianismo concordam: Jesus nasceu de virgem, sem pai humano, por poder direto de Deus. A discordância começa depois.',
      },
      {
        day: 2,
        title: 'Os Milagres',
        arabic: 'أَنِّى أَخْلُقُ لَكُم مِّنَ ٱلطِّينِ كَهَيْـَٔةِ ٱلطَّيْرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًۢا بِإِذْنِ ٱللَّهِ',
        translation:
          'Formo para vós, do barro, a figura de um pássaro, assopro nele, e torna-se um pássaro — com a permissão de Allah.',
        ref: 'Al-Imran 3:49',
        content:
          'O Alcorão não só confirma os milagres de Jesus — cura de cegos, ressurreição de mortos, multiplicação de alimentos — mas adiciona um que não está na Bíblia: criar pássaros de barro e soprá-los para que vivam. A frase repetida "com a permissão de Allah" não diminui Jesus — é a marca islâmica de milagre autêntico. Jesus no Islam é um dos "Ulul Azm" — os cinco profetas de maior resolução da história.',
        reflection:
          'Os milagres de Jesus são mais confirmados pelo Alcorão do que muitas pessoas cristãs sabem. O que isso muda — ou não muda — sobre o que você pensa sobre Islam?',
        keyInsight:
          'O Alcorão não rejeita Jesus. Recusa a divindade — mas confirma a singularidade.',
      },
      {
        day: 3,
        title: 'O Que o Alcorão Diz que Não Aconteceu',
        arabic: 'وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ',
        translation: 'Não o mataram e não o crucificaram.',
        ref: 'An-Nisa 4:157',
        content:
          'Este é o ponto de maior divergência. O Alcorão afirma que Jesus não foi crucificado — que "pareceu-lhes assim", mas não aconteceu. O Islam ensina que Jesus foi elevado por Deus antes da crucificação, e que voltará antes do Fim dos Tempos. É uma diferença teológica real, honesta, e importante. Não existe forma de minimizá-la. O Islam não pode afirmar a crucificação, e o Cristianismo não pode negá-la. São posições opostas sobre o mesmo evento.',
        reflection:
          'Como você lida com divergências fundamentais sobre história e fé? O que torna possível respeitar algo com o qual você discorda?',
        keyInsight:
          'Honestidade intelectual sobre diferenças reais é mais valiosa do que falsa harmonia. Islam e Cristianismo divergem aqui — e isso é ok saber.',
      },
      {
        day: 4,
        title: 'Ele Voltará',
        arabic: 'وَإِنَّهُۥ لَعِلْمٌ لِّلسَّاعَةِ',
        translation: 'E certamente ele é um sinal da Hora.',
        ref: 'Az-Zukhruf 43:61',
        content:
          'O Islam ensina que Jesus está vivo — que foi elevado aos céus por Deus — e que voltará antes do Fim dos Tempos. Ao retornar, quebrará a cruz (simbolicamente, rejeitando a crucificação), e trará paz e justiça. Esta crença no retorno de Jesus é parte dos artigos de fé islâmica. Um muçulmano que não acredita no retorno de Jesus não está seguindo o Islam completo.',
        reflection:
          'Cristãos esperam o retorno de Jesus. Muçulmanos esperam o retorno de Isa. O que você faz com uma crença compartilhada sobre o futuro, no meio de divergências sobre o passado?',
        keyInsight:
          'Jesus (Isa) ocupa no Islam um lugar que nenhum outro profeta exceto Muhammad ocupa. A narrativa de "Islam rejeita Jesus" é simplesmente falsa.',
      },
    ],
  },
  {
    slug: 'os-profetas',
    title: 'Os Profetas: Uma Família',
    arabicTitle: 'الأنبياء',
    subtitle: '7 dias pelos profetas que Bíblia e Alcorão compartilham',
    description:
      'Adão, Abraão, José, Moisés, Davi, Jesus, Muhammad — todos fazem parte de uma única cadeia de mensageiros enviados pelo mesmo Deus. Esta trilha percorre cada um em 7 dias.',
    duration: '7 dias',
    theme: 'História & Profecia',
    available: false,
    days: [],
  },
]

export type Trail = typeof TRAILS[0]

// ── STATIC PARAMS ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return TRAILS
    .filter((t) => t.available)
    .map((t) => ({ slug: t.slug }))
}

// ── PAGE ───────────────────────────────────────────────────────────────────────

export default function TrailPage({ params }: { params: { slug: string } }) {
  const trail = TRAILS.find((t) => t.slug === params.slug) ?? null
  return <TrailClient trail={trail} />
}
