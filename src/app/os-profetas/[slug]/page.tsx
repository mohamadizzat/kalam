// Server component — handles generateStaticParams + data fetching
import { ProphetEpisodeClient } from './ProphetEpisodeClient'

// ── DATA ──────────────────────────────────────────────────────────────────────

export const prophets = [
  {
    slug: 'adao',
    name: 'Adão',
    arabicName: 'آدم',
    episode: 1,
    title: 'A Criação e a Queda',
    status: 'available',
    hook: 'Um homem feito do barro da terra. A primeira desobediência. E um Deus que ainda assim ensinou.',
    bibleRef: 'Gênesis 1–3',
    quranRef: 'Al-Baqarah 2:30–39',
    insight: 'No Alcorão, Adão e Eva são igualmente responsáveis. Não existe pecado original.',
    bibleText: `"No princípio, criou Deus os céus e a terra." Deus formou o homem do pó da terra e soprou nas suas narinas o fôlego de vida. Plantou um jardim no Éden. Disse: "De toda árvore do jardim comerás livremente — mas da árvore do conhecimento do bem e do mal não comerás, porque no dia em que dela comeres, certamente morrerás." A serpente disse à mulher: "Certamente não morrereis." E ela comeu, e deu ao marido, e ele também comeu. E Deus desceu ao jardim.`,
    quranText: `E quando o teu Senhor disse aos anjos: "Vou colocar um khalifa na terra." Os anjos disseram: "Colocarás nela quem causará corrupção e derramará sangue?" Ele disse: "Eu sei o que vós não sabeis." E ensinou a Adão os nomes de todas as coisas. Então Satan os enganou, e eles foram expulsos dali. Adão recebeu palavras do seu Senhor e Ele se voltou para ele em misericórdia. Ele é o Que Aceita o Arrependimento, o Misericordioso.`,
    insights: [
      'No Alcorão, Adão e Eva cometem o erro juntos — não há culpa exclusiva de Eva como na tradição bíblica posterior.',
      'A queda no Islam não é "pecado original" transmitido à descendência. Cada pessoa nasce em estado de fitrah — pureza natural.',
      'Deus ensina Adão os "nomes" de todas as coisas (Al-Baqarah 2:31) — um ato que os anjos não poderiam realizar. O ser humano tem um tipo de conhecimento único.',
      'O arrependimento de Adão é aceito imediatamente. A misericórdia divina é a resposta à primeira falha humana — não a punição eterna.',
    ],
    keyMoment: {
      quote: '"Adão recebeu palavras do seu Senhor e Ele se voltou para ele em misericórdia."',
      ref: 'Al-Baqarah 2:37',
      note: 'O Alcorão termina a história de Adão com a misericórdia. A Bíblia termina com a expulsão. Duas ênfases. O mesmo evento.',
    },
    nextSlug: 'ibrahim',
    nextName: 'Abraão',
  },
  {
    slug: 'ibrahim',
    name: 'Abraão',
    arabicName: 'إبراهيم',
    episode: 2,
    title: 'O Pai das Nações',
    status: 'available',
    hook: 'Jogado no fogo por questionar os ídolos do pai. Saiu andando.',
    bibleRef: 'Gênesis 12–22',
    quranRef: 'Al-Baqarah 2:124–132',
    insight: 'Ibrahim é o homem que encontrou Deus através da razão pura — testando estrelas, lua e sol.',
    bibleText: `O Senhor disse a Abrão: "Sai da tua terra, da tua parentela e da casa de teu pai para a terra que te mostrarei. Far-te-ei numa grande nação, e te abençoarei, e engrandecerei o teu nome." [...] Depois disso, disse Deus: "Toma agora teu filho, teu único filho, Isaque, a quem amas, vai à terra de Moriá e oferece-o ali em holocausto." E Abraão se levantou de manhã cedo.`,
    quranText: `E assim mostramos a Ibrahim o reino dos céus e da terra, para que fosse daqueles de convicção firme. Quando a noite caiu sobre ele, viu uma estrela e disse: "Este é meu Senhor." Mas quando ela se pôs, disse: "Não amo os que se põem." [...] Disse: "Ó meu povo, eu sou livre daquilo que associais a Deus. Eu voltei meu rosto ao Criador dos céus e da terra, como hanif, e não sou dos politeístas."`,
    insights: [
      'O Alcorão narra o processo racional de Ibrahim descobrindo Deus — descartando estrelas, lua e sol um a um. A Bíblia não tem essa cena.',
      'No Islam, Ibrahim constrói a Kaaba com seu filho Ismail (Ismael) — o filho de Hagar, não de Sara. Na Bíblia, Ismael é praticamente removido da narrativa principal.',
      'O sacrifício no Alcorão menciona "seu filho" mas não diz "Isaque" — a tradição islâmica entende que foi Ismail. A diferença é significativa para as duas linhagens.',
      'Abraão/Ibrahim é o único profeta chamado de "Khalilullah" — Amigo íntimo de Deus — nas duas tradições.',
    ],
    keyMoment: {
      quote: '"Quando a noite caiu sobre ele, viu uma estrela e disse: Este é meu Senhor. Mas quando ela se pôs, disse: Não amo os que se põem."',
      ref: 'Al-Anaam 6:76',
      note: 'Ibrahim encontra Deus eliminando falsos deuses um a um. É a epistemologia mais honesta já descrita num texto sagrado.',
    },
    nextSlug: 'yusuf',
    nextName: 'José',
  },
  {
    slug: 'yusuf',
    name: 'José',
    arabicName: 'يوسف',
    episode: 3,
    title: 'O Traído que Perdoou',
    status: 'available',
    hook: 'Vendido pelos próprios irmãos por algumas moedas. Trinta anos depois, era o segundo mais poderoso do Egito.',
    bibleRef: 'Gênesis 37–50',
    quranRef: 'Yusuf 12:1–111',
    insight: 'A história de Yusuf é a única surata do Alcorão que conta uma única história do começo ao fim.',
    bibleText: `Israel amava José mais do que a todos os seus filhos, porque era filho da sua velhice; e fez-lhe uma túnica de muitas cores. Seus irmãos, vendo que seu pai o amava mais do que a eles, odiavam-no. Os irmãos o venderam a mercadores ismaelitas por vinte peças de prata. No Egito, ele foi vendido a Potifar. A mulher de Potifar tentou-o; quando ele recusou, ela o acusou falsamente. José foi lançado na prisão.`,
    quranText: `Quando Yusuf disse ao seu pai: "Ó meu pai, vi em sonho onze estrelas, o sol e a lua — vi-os prostrando-se diante de mim." [...] Seus irmãos disseram: "Yusuf e seu irmão são mais amados pelo nosso pai do que nós." E eles jogaram-no no poço. A mulher do nobre tentou seduzi-lo. Ele disse: "Deus me livre!" Anos depois, o rei viu um sonho e Yusuf interpretou. Yusuf disse: "Coloca-me sobre os celeiros da terra."`,
    insights: [
      'A Surata Yusuf (capítulo 12) é chamada no próprio Alcorão de "a mais bela das histórias" — a única que narra um único evento do começo ao fim.',
      'O Alcorão detalha a tentação da esposa de Potifar de forma mais dramática: ela convida outras mulheres para ver Yusuf, e elas cortam as mãos sem perceber ao vê-lo.',
      'No Islam, Yusuf é apresentado como modelo de paciência (sabr) e confiança em Deus (tawakkul). A beleza de sua história está em como cada tribulação prepara a próxima etapa.',
      'O perdão de Yusuf aos irmãos é idêntico nos dois textos — uma das cenas de reconciliação mais poderosas da literatura sagrada mundial.',
    ],
    keyMoment: {
      quote: '"Não há censura hoje sobre vós. Que Deus vos perdoe. Ele é o mais Misericordioso dos misericordiosos."',
      ref: 'Yusuf 12:92',
      note: 'As palavras exatas de Yusuf ao perdoar os irmãos que o venderam como escravo. Trinta anos de sofrimento. Uma frase. Sem ressentimento.',
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
