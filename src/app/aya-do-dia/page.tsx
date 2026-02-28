'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const DAILY_VERSES = [
  {
    arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    portuguese: "De fato, com a dificuldade vem a facilidade.",
    ref: "Al-Inshirah 94:6",
    surah: "Al-Inshirah (O Alívio)",
    theme: "Esperança",
    context: "Este versículo foi revelado num dos momentos mais difíceis do Profeta Muhammad — quando ele se sentia isolado, questionado, e sobrecarregado. Allah revelou: 'De fato, com a dificuldade vem a facilidade.' E repetiu a frase exatamente — duas vezes seguidas (94:5 e 94:6). No árabe clássico, quando 'a dificuldade' é definida (al-usr — com 'al'), ela é a mesma dificuldade. Mas quando 'a facilidade' é indefinida (yusra — sem 'al'), são facilidades diferentes. Sábios islâmicos concluíram: uma dificuldade, múltiplas saídas.",
    reflection: "Qual é a dificuldade que você está carregando hoje? Este versículo diz que a saída já está embutida na própria dificuldade — não depois dela.",
    godIsLove: "Deus não esperou o Profeta sair da crise para enviar esta mensagem. Enviou durante. Antes da saída aparecer. Esse é o amor que este versículo carrega.",
  },
  {
    arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    portuguese: "Allah não sobrecarrega uma alma além do que ela pode suportar.",
    ref: "Al-Baqarah 2:286",
    surah: "Al-Baqarah (A Vaca)",
    theme: "Paz",
    context: "Esta é uma das promessas mais diretas de todo o Alcorão. Não é consolação poética — é uma declaração teológica: Deus, que criou você, conhece exatamente o limite do que você aguenta. E o limite do que Ele pede nunca passa desse ponto. Nunca. Se você sente que está no limite, esse versículo diz: você está no limite — mas não além dele.",
    reflection: "O que você achava que não ia conseguir suportar, mas suportou? Este versículo está dizendo que Deus sabia que você ia aguentar — mesmo quando você não sabia.",
    godIsLove: "Deus não cria criaturas para quebrá-las. O peso que você carrega foi calculado por quem te fez. E quem te fez te ama.",
  },
  {
    arabic: "قُلْ يَـٰعِبَادِيَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",
    portuguese: "Dize: Ó Meus servos que cometestes excessos contra vós mesmos, não desespereis da misericórdia de Allah.",
    ref: "Az-Zumar 39:53",
    surah: "Az-Zumar (Os Grupos)",
    theme: "Perdão",
    context: "Este versículo começa com Allah mandando o Profeta transmitir uma mensagem direta — 'Dize'. É como se Deus pegasse o microfone pessoalmente. A mensagem é para 'os que cometeram excessos contra si mesmos' — não os santos, não os perfeitos. Os que erraram. Os que sabem que erraram. E a mensagem não é 'peça perdão e talvez'. É 'não desespere'. O desespero do perdão é apresentado no Islam como um dos maiores erros — porque desesperar da misericórdia de Deus é subestimar quem Deus é.",
    reflection: "O que é que você fez que ainda carrega como peso, achando que Deus não perdoa? Este versículo foi escrito pra você.",
    godIsLove: "Deus não só perdoa — Ele manda avisar que vai perdoar. Antes de você pedir. Antes de você se arrepender. O amor chegou antes.",
  },
  {
    arabic: "فَٱذْكُرُونِىٓ أَذْكُرْكُمْ",
    portuguese: "Lembrai-vos de Mim, que Eu Me lembrarei de vós.",
    ref: "Al-Baqarah 2:152",
    surah: "Al-Baqarah (A Vaca)",
    theme: "Conexão",
    context: "Esta é a relação mais direta possível entre criatura e Criador. Não é: 'faça tudo certo e talvez eu me lembre de você.' É uma troca. Uma promessa de reciprocidade. Quando você pensa em Deus — mesmo por um segundo, mesmo no meio do caos — Ele pensa em você. A tradição islâmica detalha: se você se lembra de Deus sozinho, Ele te menciona numa assembleia de anjos. Se você se lembra dele em grupo, Ele te menciona numa assembleia mais nobre que a sua.",
    reflection: "Quando foi a última vez que você pensou em Deus sem ser por medo, obrigação ou crise? E se fosse só... pra lembrar?",
    godIsLove: "Deus não quer sua obediência. Quer sua presença. 'Lembra de Mim' — não 'teme-Me'. A língua aqui é intimidade.",
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    portuguese: "E Ele está convosco onde quer que estejais.",
    ref: "Al-Hadid 57:4",
    surah: "Al-Hadid (O Ferro)",
    theme: "Presença",
    context: "Uma das afirmações mais impactantes do Alcorão sobre a natureza de Deus. Não um Deus distante no céu, olhando de cima. Um Deus que está 'com você'. A palavra árabe 'ma'akum' (com vocês) é a mesma raiz de 'companhia', 'acompanhamento'. No Islam, Deus não é só onisciente — Ele está presente. Cada lugar onde você está, Ele está. Cada momento de solidão, cada quarto fechado, cada estrada de madrugada.",
    reflection: "Há um lugar ou momento na sua vida onde você se sente completamente sozinho? Este versículo diz que esse lugar não existe.",
    godIsLove: "Você nunca esteve sozinho. Nunca vai estar. Esse é o amor que não depende de você merecer — depende de Deus ser quem Ele é.",
  },
  {
    arabic: "وَمَآ أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً لِّلْعَـٰلَمِينَ",
    portuguese: "E não te enviamos senão como misericórdia para os mundos.",
    ref: "Al-Anbiya 21:107",
    surah: "Al-Anbiya (Os Profetas)",
    theme: "Amor",
    context: "A missão do Profeta Muhammad resumida em uma frase. Não 'enviamos como guerreiro'. Não 'como juiz'. Como misericórdia. Para 'al-alameen' — os mundos, o plural de mundo. Todos os mundos. Toda a humanidade. Toda criatura. A teologia islâmica entende que a mensagem do Profeta não é punição mas rahma — misericórdia, compaixão, amor incondicional de Deus manifestado através de um ser humano.",
    reflection: "Se a missão do último profeta era ser misericórdia para o mundo — o que isso diz sobre o caráter de Deus? O que você esperava, e o que este versículo oferece?",
    godIsLove: "Deus enviou um ser humano — não um anjo, não um código de leis — para mostrar como é viver com misericórdia. A escolha diz tudo sobre o que Deus valoriza.",
  },
  {
    arabic: "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    portuguese: "De fato, Allah está com os pacientes.",
    ref: "Al-Baqarah 2:153",
    surah: "Al-Baqarah (A Vaca)",
    theme: "Paciência",
    context: "No Islam, sabr (paciência) não é resignação passiva — é resistência ativa com consciência. É fazer o que precisa ser feito, continuar de pé, sem perder a conexão com Deus no processo. E a promessa é específica: Deus está COM os pacientes. Não vai recompensá-los depois. Está com eles durante.",
    reflection: "O que você está esperando que nunca chegou? E se 'esperar com Deus' fosse diferente de 'esperar sozinho'?",
    godIsLove: "Deus não te abandona na sala de espera. Ele está na sala com você. A paciência não é solidão — é companhia de Deus enquanto o tempo passa.",
  },
  {
    arabic: "ٱلرَّحْمَـٰنُ عَلَّمَ ٱلْقُرْءَانَ خَلَقَ ٱلْإِنسَـٰنَ",
    portuguese: "O Misericordioso. Ensinou o Alcorão. Criou o ser humano.",
    ref: "Ar-Rahman 55:1-3",
    surah: "Ar-Rahman (O Misericordioso)",
    theme: "Amor",
    context: "A surata Ar-Rahman começa sem rodeios. O primeiro nome de Deus que aparece é 'Ar-Rahman' — O Misericordioso. Depois: ensinou o Alcorão. Depois: criou o ser humano. A ordem importa. Antes de criar o ser humano, Deus preparou a mensagem. É como montar um quarto antes do filho nascer. O livro chegou antes de você. Você foi criado num mundo onde a orientação já existia.",
    reflection: "O que você está procurando que já pode estar esperando por você em algum lugar?",
    godIsLove: "A primeira coisa que Deus menciona sobre si mesmo na surata mais repetida do Alcorão é: misericordioso. Não poderoso. Não severo. Misericordioso.",
  },
  {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ",
    portuguese: "E quando Meus servos te perguntarem sobre Mim, dize que Sou próximo.",
    ref: "Al-Baqarah 2:186",
    surah: "Al-Baqarah (A Vaca)",
    theme: "Proximidade",
    context: "Este versículo é único no Alcorão: é a única vez que alguém pergunta ao Profeta sobre Deus, e Deus responde na PRIMEIRA pessoa, sem mediador. 'Quando perguntarem sobre Mim' — Deus não diz 'dize que Sou grande' ou 'dize que Sou misericordioso'. Diz: 'dize que Sou próximo.' Próximo é a primeira característica que Deus escolhe quando tem a chance de se apresentar diretamente.",
    reflection: "O que você perguntaria a Deus se soubesse que Ele está a um passo de você? Este versículo diz que Ele está.",
    godIsLove: "A resposta de Deus à pergunta 'onde estás?' é simplesmente: 'Aqui.' Não é filosofia. É presença.",
  },
  {
    arabic: "وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ",
    portuguese: "E Allah ama os que fazem o bem.",
    ref: "Al-Imran 3:134",
    surah: "Al-Imran (A Família de Imrã)",
    theme: "Bondade",
    context: "O Alcorão usa a palavra 'yuhibbu' (ama) diretamente em relação a Deus dezenas de vezes. Al-Muhsineen — os que fazem o bem, os que buscam excelência — é um dos grupos que Deus declara amar. Mas o contexto deste versículo específico fala de pessoas que gastam em tempos difíceis E em tempos fáceis, que controlam a raiva, e que perdoam. O amor de Deus aqui não é mérito — é resposta a caráter.",
    reflection: "Quem você conhece que faz o bem sem esperar reconhecimento? Deus diz que ama essa pessoa.",
    godIsLove: "Deus não ama só os santos perfeitos. Ama os que tentam — os que controlam a raiva, os que gastam mesmo quando é difícil, os que perdoam quando poderiam não perdoar.",
  },
  {
    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    portuguese: "E certamente teu Senhor te dará, e tu ficarás satisfeito.",
    ref: "Ad-Duha 93:5",
    surah: "Ad-Duha (A Manhã)",
    theme: "Esperança",
    context: "A surata Ad-Duha foi revelada após um período de silêncio — Deus ficou um tempo sem revelar nada ao Profeta. Muhammad ficou angustiado, achando que tinha sido abandonado. Então veio a surata: pela manhã, pela noite, Deus jurou que não te abandonou e não te detestou. E no versículo 5: 'Certamente teu Senhor te dará, e tu ficarás satisfeito.' Uma promessa futura, no meio de uma crise presente. A frase é tão direta que soa como alguém segurando o ombro de outra pessoa e olhando nos olhos.",
    reflection: "Existe algo que você perdeu fé de receber? Qual seria a diferença se você soubesse com certeza que vem?",
    godIsLove: "Deus não só promete dar. Promete que você vai ficar satisfeito. Não um presente qualquer — o certo.",
  },
  {
    arabic: "وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًا",
    portuguese: "E quem teme a Allah, Ele lhe abre uma saída.",
    ref: "At-Talaq 65:2",
    surah: "At-Talaq (O Divórcio)",
    theme: "Saída",
    context: "Taqwa — frequentemente traduzido como 'temor de Deus' — no Islam é menos sobre medo e mais sobre consciência. Ter consciência de Deus em cada ação. E a promessa para quem tem essa consciência é direta: Allah 'yaj'al lahu makhrajaa' — abre uma saída. O versículo seguinte completa: e provê de onde ele nem imaginava. Deus como o criador de saídas onde não havia saída.",
    reflection: "Qual situação na sua vida parece não ter saída? Este versículo diz que a saída pode estar num lugar que você nem está olhando.",
    godIsLove: "Deus não é o porteiro que fecha as portas. É o arquiteto que conhece todas as saídas — incluindo as que você não viu.",
  },
  {
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    portuguese: "De fato, com a dificuldade vem a facilidade.",
    ref: "Al-Inshirah 94:5",
    surah: "Al-Inshirah (O Alívio)",
    theme: "Esperança",
    context: "A frase foi revelada duas vezes seguidas — no versículo 5 e depois no versículo 6. Os sábios islâmicos explicam: no árabe, quando 'dificuldade' é definida (al-usr), ela é sempre a mesma dificuldade. Mas quando 'facilidade' é indefinida (yusra), são facilidades distintas. Uma dificuldade, duas saídas. Allah não repete sem motivo — a repetição é ênfase: isso vale duas vezes.",
    reflection: "Você está no meio da dificuldade. E se ela já trouxer a facilidade embutida, como uma semente que tem a árvore dentro?",
    godIsLove: "Deus repetiu a promessa. Como se soubesse que na primeira vez você talvez não acreditasse.",
  },
  {
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ",
    portuguese: "E somos mais próximos a ele do que a veia jugular.",
    ref: "Qaf 50:16",
    surah: "Qaf",
    theme: "Proximidade",
    context: "A veia jugular é a mais próxima ao coração. O Alcorão usa esta imagem para descrever a proximidade de Deus a cada ser humano. Não 'próximo como um amigo'. Mais próximo que o que está dentro do seu próprio corpo. Esta imagem foi escolhida propositalmente — algo que você não pode separar de si mesmo, que está mais perto de você do que qualquer outra coisa.",
    reflection: "Há momentos em que você sente Deus distante? Este versículo diz que nesses momentos Ele estava mais perto do que sua própria veia.",
    godIsLove: "Deus não precisa ser chamado de longe. Já está. A distância que você sente não é geográfica.",
  },
  {
    arabic: "إِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ",
    portuguese: "De fato, Allah não desperdiça a recompensa dos que fazem o bem.",
    ref: "At-Tawbah 9:120",
    surah: "At-Tawbah (O Arrependimento)",
    theme: "Justiça",
    context: "Nenhum ato de bondade é perdido. Nenhum. Mesmo os que ninguém viu. Mesmo os que a pessoa que você ajudou não agradeceu. Mesmo os que você já esqueceu. O Alcorão usa 'la yudi'u' — não desperdiça, não deixa se perder. Como se Deus fosse o guardião de cada coisa boa que você fez.",
    reflection: "O que você fez de bom que ninguém jamais vai saber? Este versículo diz que alguém sabe.",
    godIsLove: "Deus é contador do bem que você fez, não só testemunha dos seus erros. Cada bondade está registrada.",
  },
  {
    arabic: "يَـٰٓأَيُّهَا ٱلنَّاسُ أَنتُمُ ٱلْفُقَرَآءُ إِلَى ٱللَّهِ وَٱللَّهُ هُوَ ٱلْغَنِىُّ",
    portuguese: "Ó humanidade, vocês são os necessitados de Allah, e Allah é o Rico, o Louvável.",
    ref: "Fatir 35:15",
    surah: "Fatir (O Criador)",
    theme: "Dependência",
    context: "Esta é uma das afirmações mais honestas do Alcorão sobre a condição humana. Todo ser humano é 'faqir' — necessitado. Não como insulto: como fato. E Deus é 'Ghani' — Rico, completo, que nada precisa. A relação aqui não é de medo — é de reconhecimento. Você precisa de algo que existe. E esse algo não cobra por isso.",
    reflection: "Do que você mais precisa agora — e está tentando conseguir sozinho?",
    godIsLove: "Precisar de Deus não é fraqueza. É a realidade mais honesta sobre o que você é. E Deus recebe sua necessidade sem julgamento.",
  },
  {
    arabic: "وَٱصْبِرْ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ",
    portuguese: "E tem paciência, pois de fato Allah não desperdiça a recompensa dos que fazem o bem.",
    ref: "Hud 11:115",
    surah: "Hud",
    theme: "Paciência",
    context: "A instrução é direta: 'wasbir' — tem paciência. E a razão é imediata: porque Deus não deixa o bem se perder. A paciência aqui não é aguardar passivamente — é agir bem enquanto espera, sabendo que nada será perdido.",
    reflection: "Em que área da sua vida você está tentado a desistir? O que aconteceria se você soubesse que cada dia de espera está sendo registrado?",
    godIsLove: "Deus registra sua persistência. Não só o resultado final — o processo. Cada dia que você continua tem valor.",
  },
  {
    arabic: "وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ",
    portuguese: "E certamente honramos os filhos de Adão.",
    ref: "Al-Isra 17:70",
    surah: "Al-Isra (A Jornada Noturna)",
    theme: "Dignidade",
    context: "'Karramna' — honramos. Não 'criamos'. Honramos. Com dignidade, com distinção. Todos os filhos de Adão — não só os crentes, não só os bons. Toda a humanidade recebeu este presente de Deus: ser digno. Isso vem antes de qualquer ação, qualquer crença, qualquer mérito.",
    reflection: "Você se trata como alguém que foi honrado por Deus? Ou como alguém que precisa provar seu valor?",
    godIsLove: "Deus decidiu te honrar antes de você fazer qualquer coisa. Sua dignidade não é conquista. É herança.",
  },
  {
    arabic: "وَلَا تَيْأَسُوا۟ مِن رَّوْحِ ٱللَّهِ",
    portuguese: "E não desespereis do alívio de Allah.",
    ref: "Yusuf 12:87",
    surah: "Yusuf (José)",
    theme: "Esperança",
    context: "Estas palavras foram ditas pelo profeta Jacó (Yaqub) para seus filhos — num momento em que seu filho predileto José havia desaparecido por anos, presumido morto, e agora outro filho estava retido no Egito. Uma crise atrás da outra. E mesmo nessa condição, Jacó diz: 'Não desespere do alívio de Deus.' A esperança não é ingenuidade — é recusa de deixar a dor ser a última palavra.",
    reflection: "Há quanto tempo você espera por um alívio que não veio? O que seria diferente se você não tivesse desistido de esperar?",
    godIsLove: "O alívio de Deus ('rawh' em árabe tem a mesma raiz de espírito/respiração) não é só solução de problema — é a própria presença de Deus como ar fresco na sufocação.",
  },
  {
    arabic: "إِنَّ رَبَّكَ لَبِٱلْمِرْصَادِ",
    portuguese: "Certamente teu Senhor está de vigia.",
    ref: "Al-Fajr 89:14",
    surah: "Al-Fajr (O Amanhecer)",
    theme: "Justiça",
    context: "Bilmirsad — de vigia, observando, atento. Num contexto que fala de injustiça no mundo, este versículo não é ameaça — é garantia. Nenhuma injustiça escapa. Nenhum opressor tem a última palavra. Deus está vendo. Essa vigilância é a fundação da justiça cósmica no Islam.",
    reflection: "Onde você mais sente que há injustiça que ninguém corrigiu? Este versículo diz que foi visto.",
    godIsLove: "Deus que está 'de vigia' não está contando seus erros — está garantindo que a injustiça que você sofreu não ficou invisível.",
  },
  {
    arabic: "وَإِن تَعُدُّوا۟ نِعْمَةَ ٱللَّهِ لَا تُحْصُوهَآ",
    portuguese: "E se fordes contar as graças de Allah, não podereis enumerá-las.",
    ref: "Ibrahim 14:34",
    surah: "Ibrahim (Abraão)",
    theme: "Gratidão",
    context: "A gratidão no Islam começa com reconhecimento — ver o que é. Este versículo é um convite a tentar contar. Tente. Você não vai conseguir. Cada respiração, cada coração batendo, cada sentido funcionando, cada memória, cada relação, cada alimento. A abundância é tão grande que a mente não fecha o inventário.",
    reflection: "O que você recebeu que nunca parou para agradecer porque virou 'normal'?",
    godIsLove: "Deus que deu incalculavelmente não pediu inventário. Pediu só reconhecimento. A generosidade sem conta vem primeiro.",
  },
  {
    arabic: "يُحِبُّهُمْ وَيُحِبُّونَهُۥٓ",
    portuguese: "Ele os ama e eles O amam.",
    ref: "Al-Maidah 5:54",
    surah: "Al-Maidah (A Mesa Posta)",
    theme: "Amor",
    context: "Três palavras em árabe que mudam tudo: 'yuhibbuhum wa yuhibbunahu' — Ele os ama e eles O amam. A construção é mútua. Deus ama primeiro — e então recebe amor de volta. O amor de Deus não é condicional ao amor humano. Ele ama primeiro. Sempre.",
    reflection: "Você sente que ama Deus? Mais difícil: você sente que Deus te ama? Este versículo diz que sim.",
    godIsLove: "Este versículo é raro: no Alcorão, Deus raramente usa a palavra 'amor' sobre si mesmo em relação ao ser humano. Quando usa, é definitivo.",
  },
  {
    arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
    portuguese: "Certamente criamos o ser humano na melhor das formas.",
    ref: "At-Tin 95:4",
    surah: "At-Tin (A Figueira)",
    theme: "Dignidade",
    context: "Ahsani taqweem — a mais bela estrutura, a melhor das formas. O ser humano foi criado no pico do design divino. Esta frase não é sobre aparência física — é sobre a capacidade de raciocinar, sentir, escolher, amar, criar. O ser humano é a criação mais sofisticada que existe. E foi feito assim intencionalmente.",
    reflection: "Quando foi a última vez que você se tratou como uma criação que Deus considerou 'a melhor das formas'?",
    godIsLove: "Deus não fez você correndo. Fez você como a melhor das formas. Isso veio de alguém que ama o que cria.",
  },
  {
    arabic: "هُوَ ٱلْأَوَّلُ وَٱلْـَٔاخِرُ وَٱلظَّـٰهِرُ وَٱلْبَاطِنُ",
    portuguese: "Ele é o Primeiro e o Último, o Manifesto e o Oculto.",
    ref: "Al-Hadid 57:3",
    surah: "Al-Hadid (O Ferro)",
    theme: "Infinitude",
    context: "Quatro nomes divinos que formam um quadrado perfeito de realidade. O Primeiro: antes de tudo existir, Ele era. O Último: depois de tudo acabar, Ele será. O Manifesto: presente no que você vê — natureza, pessoas, beleza. O Oculto: presente no invisível — consciência, amor, propósito. Deus não está em nenhum lugar específico porque está em todos.",
    reflection: "Onde você mais claramente sente que algo maior do que você está presente?",
    godIsLove: "Um Deus que é o Manifesto e o Oculto ao mesmo tempo é um Deus que não pode ser evitado — mas também não pode ser perdido.",
  },
  {
    arabic: "وَٱللَّهُ أَعْلَمُ بِأَعْدَآئِكُمْ ۚ وَكَفَىٰ بِٱللَّهِ وَلِيًّا",
    portuguese: "E Allah basta como protetor e guardião.",
    ref: "An-Nisa 4:45",
    surah: "An-Nisa (As Mulheres)",
    theme: "Proteção",
    context: "Wali — protetor, guardião, aliado. 'Kafaa billaahi waliyan' — Allah basta como guardião. É suficiente. Não precisa de mais nada. Este versículo fala para quem se sente desprotegido, sem aliados, cercado por adversidade. A resposta não é 'encontre mais aliados'. É: você já tem o maior.",
    reflection: "O que você está tentando proteger sozinho que poderia entregar a Deus?",
    godIsLove: "Deus como wali não é guardião distante. É o tipo que fica ao lado, que não te abandona quando fica difícil.",
  },
  {
    arabic: "رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةً وَفِى ٱلْـَٔاخِرَةِ حَسَنَةً",
    portuguese: "Senhor nosso, dá-nos o bem nesta vida e o bem na próxima.",
    ref: "Al-Baqarah 2:201",
    surah: "Al-Baqarah (A Vaca)",
    theme: "Equilíbrio",
    context: "Esta é uma das orações mais famosas do Islam — e a mais equilibrada. Não pede só o paraíso. Não pede só sucesso mundano. Pede os dois. O Islam não divide 'sagrado' de 'mundo' — a vida aqui importa tanto quanto a próxima. Uma oração que você pode fazer com o coração em duas direções ao mesmo tempo.",
    reflection: "O que seria 'bem' para você nesta vida? E o que você imagina que seja o bem que vem depois?",
    godIsLove: "Deus quer que você seja bem aqui E depois. Não é escolha. Não é sacrifício do presente pelo futuro. Os dois.",
  },
  {
    arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    portuguese: "Em nome de Allah, O Misericordioso, O Misericordiador.",
    ref: "Al-Fatiha 1:1",
    surah: "Al-Fatiha (A Abertura)",
    theme: "Amor",
    context: "O Alcorão começa com este versículo. 113 das 114 surahs começam com ele. É como se toda vez que você abre o Alcorão, Deus se apresenta: Misericordioso. Rahman e Rahim — dois nomes da mesma raiz árabe 'rahma' (misericórdia, amor, carinho). Rahman: misericórdia universal que cobre toda criatura. Rahim: misericórdia especial, íntima, para os que buscam. Deus escolheu que sua primeira palavra para a humanidade fosse este nome.",
    reflection: "Se a primeira apresentação de Deus para você fosse esta — 'Sou o Misericordioso' — o que mudaria na forma como você o vê?",
    godIsLove: "O Alcorão começa com amor. Não com leis. Não com proibições. Com o nome que significa: eu me importo com você.",
  },
]

const DAYS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

type TabId = 'contexto' | 'reflexao' | 'amor'

const TABS: { id: TabId; label: string }[] = [
  { id: 'contexto', label: 'Contexto' },
  { id: 'reflexao', label: 'Reflexão' },
  { id: 'amor', label: 'Deus é Amor' },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AyaDoDiaPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('contexto')
  const [dateLabel, setDateLabel] = useState('')
  const [verse, setVerse] = useState(DAILY_VERSES[0])

  useEffect(() => {
    const now = new Date()
    const dayName = DAYS[now.getDay()]
    const dayNum = now.getDate()
    const monthName = MONTHS[now.getMonth()]
    setDateLabel(`${dayName}, ${dayNum} de ${monthName}`)
    setVerse(DAILY_VERSES[dayNum % DAILY_VERSES.length])
    setMounted(true)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      {/* ── SECTION 1: DATE + LABEL ─────────────────────────────────────── */}
      <div
        style={{
          textAlign: 'center',
          padding: '40px 24px 0',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#5A5A50',
            marginBottom: 10,
          }}
        >
          AYA DE HOJE
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: '#8A8A7A',
            minHeight: 18,
          }}
        >
          {mounted ? dateLabel : '\u00A0'}
        </p>
      </div>

      {/* ── SECTION 2: THE VERSE ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          maxWidth: 680,
          margin: '48px auto 0',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        {/* Theme badge */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(201,168,76,0.1)',
            color: '#C9A84C',
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: 20,
            marginBottom: 32,
          }}
        >
          {verse.theme}
        </div>

        {/* Arabic */}
        <p
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(40px, 8vw, 72px)',
            color: '#C9A84C',
            direction: 'rtl',
            textAlign: 'center',
            lineHeight: 1.6,
            textShadow: '0 0 60px rgba(201,168,76,0.15)',
            margin: '0 0 32px',
          }}
        >
          {verse.arabic}
        </p>

        {/* Portuguese translation */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 3vw, 28px)',
            color: '#F5F5F0',
            textAlign: 'center',
            lineHeight: 1.6,
            margin: '0 0 16px',
          }}
        >
          {verse.portuguese}
        </p>

        {/* Reference */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: '#5A5A50',
            textAlign: 'center',
          }}
        >
          — {verse.ref} · {verse.surah}
        </p>

        {/* Gold divider */}
        <div
          style={{
            width: 120,
            height: 1,
            background: 'rgba(201,168,76,0.2)',
            margin: '32px auto',
          }}
        />
      </motion.div>

      {/* ── SECTION 3: DEPTH TABS ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Tab bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 0,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: '#111111',
              borderRadius: 12,
              padding: 4,
              gap: 4,
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    padding: '10px 20px',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? '#1A1A2E' : 'transparent',
                    color: isActive ? '#C9A84C' : '#5A5A50',
                    transition: 'background 0.2s ease, color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab content */}
        <div
          style={{
            maxWidth: 620,
            margin: '0 auto',
            padding: '32px 24px 0',
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'contexto' && (
              <motion.div
                key="contexto"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 17,
                    color: '#F5F5F0',
                    lineHeight: 1.9,
                  }}
                >
                  {verse.context}
                </p>
              </motion.div>
            )}

            {activeTab === 'reflexao' && (
              <motion.div
                key="reflexao"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div
                  style={{
                    borderLeft: '2px solid rgba(201,168,76,0.4)',
                    paddingLeft: 24,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 20,
                      color: '#F5F5F0',
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    {verse.reflection}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      color: '#5A5A50',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Pausa. Respira. Volta pra pergunta.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'amor' && (
              <motion.div
                key="amor"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, #1A1A2E, #0A0A0A)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: 16,
                    padding: 32,
                  }}
                >
                  {/* Arabic Allah */}
                  <p
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: 48,
                      color: '#C9A84C',
                      textAlign: 'center',
                      direction: 'rtl',
                      lineHeight: 1.4,
                      textShadow: '0 0 40px rgba(201,168,76,0.2)',
                      marginBottom: 16,
                    }}
                  >
                    الله
                  </p>

                  {/* Thin divider */}
                  <div
                    style={{
                      width: 60,
                      height: 1,
                      background: 'rgba(201,168,76,0.2)',
                      margin: '0 auto 28px',
                    }}
                  />

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 18,
                      color: '#F5F5F0',
                      lineHeight: 1.8,
                      marginBottom: 24,
                    }}
                  >
                    {verse.godIsLove}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      color: '#5A5A50',
                      marginTop: 24,
                      lineHeight: 1.7,
                    }}
                  >
                    O pecado afasta. Mas Deus sempre dá o primeiro passo de volta.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── SECTION 4: NAVIGATION ───────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          marginTop: 48,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: '#5A5A50',
            opacity: 0.4,
            cursor: 'default',
          }}
        >
          ← Ontem
        </span>

        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#C9A84C',
            opacity: 0.5,
          }}
        />

        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: '#5A5A50',
            opacity: 0.4,
            cursor: 'default',
          }}
        >
          Amanhã →
        </span>
      </div>

      {/* ── SECTION 5: NEXT STEPS ───────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 620,
          margin: '64px auto 0',
          padding: '32px 24px 0',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#5A5A50',
            marginBottom: 20,
          }}
        >
          CONTINUE EXPLORANDO
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'Trilhas de Aprendizado', href: '/trilhas' },
            { label: 'Biblioteca por Tema', href: '/biblioteca' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                background: '#111111',
                border: '1px solid #2A2A2A',
                borderRadius: 12,
                padding: '16px 20px',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#8A8A7A',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                e.currentTarget.style.color = '#F5F5F0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2A2A2A'
                e.currentTarget.style.color = '#8A8A7A'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
