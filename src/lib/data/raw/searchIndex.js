/**
 * searchIndex.js — Kalam Brasil
 * Flat search index aggregating all app content for Fuse.js full-text search.
 *
 * Shape of each item:
 *   { id, title, body, tab, sub, type }
 *
 * tab  — matches TABS id in App.jsx  (origem | mensagem | quran | sistema | saber | movimento)
 * sub  — matches SUB_TABS id in App.jsx
 * type — human-readable label for display / filtering
 */

import { hadithsData } from '../content/hadiths.js'
import { hardQuestionsData } from '../content/hardQuestions.js'
import { islamSystemData } from '../content/islamSystem.js'
import { commonGroundData } from '../content/bridgeContent.js'
import { manuscriptsData, quranManuscripts } from '../content/manuscripts.js'

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

let _uid = 0
function uid(prefix) {
  return `${prefix}-${++_uid}`
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. HADITHS  →  tab: saber / sub: hadiths
// ─────────────────────────────────────────────────────────────────────────────

const hadithItems = hadithsData.map((h) => ({
  id: uid('hadith'),
  title: `Hadith ${h.number} — ${h.title}`,
  body: [h.text, h.lesson, h.story].filter(Boolean).join(' '),
  tab: 'saber',
  sub: 'hadiths',
  type: 'Hadith',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 2. QUESTÕES DIFÍCEIS  →  tab: saber / sub: questoes
// ─────────────────────────────────────────────────────────────────────────────

const hardQuestionItems = hardQuestionsData.map((q) => ({
  id: uid('hq'),
  title: q.question,
  body: [q.directAnswer, q.context, q.honestConclusion].filter(Boolean).join(' '),
  tab: 'saber',
  sub: 'questoes',
  type: 'Questão Difícil',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 3. GLOSSÁRIO  →  tab: saber / sub: glossario
// ─────────────────────────────────────────────────────────────────────────────

const glossaryTerms = [
  { term: 'Tawhid',             arabic: 'التوحيد',     def: 'Monoteísmo absoluto. A unicidade de Allah — sem parceiros, sem filhos, sem associados' },
  { term: 'Shirk',              arabic: 'الشرك',       def: 'O maior pecado no Islam: associar parceiros a Allah (idolatria ou deificar outros)' },
  { term: 'Nabi / Rasul',       arabic: 'نبي / رسول',  def: 'Nabi = Profeta (recebe revelação). Rasul = Mensageiro (recebe escritura + missão)' },
  { term: 'Tafsir',             arabic: 'التفسير',     def: 'Exegese do Alcorão — explicação do contexto, linguagem e significado de cada versículo' },
  { term: 'Seerah',             arabic: 'السيرة',      def: 'Biografia do Profeta Muhammad ﷺ. A fonte primária para entender o Alcorão em contexto' },
  { term: 'Hadith',             arabic: 'الحديث',      def: 'Relatos das palavras e ações do Profeta. Segunda fonte de lei islâmica após o Alcorão' },
  { term: 'Fitra',              arabic: 'الفطرة',      def: 'A natureza primordial pura de cada ser humano. Todo recém-nascido está em estado de Islam' },
  { term: 'Khalifah',           arabic: 'الخليفة',     def: 'Representante / sucessor. No Alcorão: o ser humano como representante de Allah na Terra' },
  { term: 'Tahrif',             arabic: 'التحريف',     def: 'Distorção ou alteração das escrituras reveladas ao longo do tempo' },
  { term: 'Ummah',              arabic: 'الأمة',       def: 'A comunidade muçulmana global — acima de fronteiras nacionais ou étnicas' },
  { term: 'Hijra',              arabic: 'الهجرة',      def: 'A migração do Profeta de Meca para Medina (622 d.C.) — marco zero do calendário islâmico' },
  { term: 'Jannah / Jahannam',  arabic: 'جنة / جهنم',  def: 'Paraíso e Inferno — os dois destinos após o Dia do Julgamento' },
]

const glossaryItems = glossaryTerms.map((g) => ({
  id: uid('glossary'),
  title: g.term,
  body: g.def,
  tab: 'saber',
  sub: 'glossario',
  type: 'Glossário',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 4. FAQ  →  tab: saber / sub: faq
// ─────────────────────────────────────────────────────────────────────────────

const faqRaw = [
  { q: 'Muçulmanos não acreditam em Jesus?', a: "Acreditam! Jesus ('Isa) é um dos maiores profetas no Islam. O Alcorão confirma seu nascimento virginal, seus milagres e sua exaltação. O que o Islam não aceita é a divindade de Jesus — para um muçulmano, Allah não tem filho literal. Jesus era um ser humano extraordinário escolhido como profeta." },
  { q: 'Por que há tantas guerras no nome do Islam?', a: "O Alcorão diz: 'Quem matar uma alma inocente, é como se tivesse matado toda a humanidade' (5:32). O terrorismo é condenado unânimemente pela jurisprudência islâmica clássica. As guerras em nome do Islam são, na maioria, conflitos políticos usando linguagem religiosa — assim como a Inquisição foi política, não cristã em sua essência." },
  { q: 'Islam e ciência são compatíveis?', a: "A primeira palavra revelada no Alcorão foi 'Iqra' — Lê, estuda, busca conhecimento. A Era de Ouro Islâmica (750-1258 d.C.) produziu os fundamentos da álgebra (Al-Khwarizmi), da ótica (Ibn Al-Haytham), da medicina (Ibn Sina) e muito mais. O Islam incentiva o estudo do universo como forma de conhecer o Criador." },
  { q: 'O Islam oprime as mulheres?', a: 'O Alcorão foi o primeiro texto a dar direitos legais às mulheres: herança, propriedade, divórcio, consentimento matrimonial — no século VII. O que muitas vezes se confunde com Islam são tradições culturais específicas de certas regiões. Khadijah, primeira esposa do Profeta, era empresária. Aisha transmitiu 2.210 hadices e ensinou teologia.' },
  { q: 'Qual a diferença entre Sunna e Shia?', a: 'Após o falecimento do Profeta, surgiu uma questão: quem deveria liderar a comunidade? Sunitas reconhecem Abu Bakr como primeiro califa legítimo. Shias acreditam que Ali ibn Abi Talib deveria ter sido o primeiro líder. Em Aqidah (teologia) e práticas fundamentais, concordam. As diferenças são principalmente políticas e ritualísticas.' },
  { q: 'Como começar a estudar Islam do zero?', a: "Roteiro sugerido: (1) Assistir 'The Story of the Quran' no YouTube. (2) Ler 'O Profeta Muhammad' de Martin Lings. (3) Explorar o Alcorão com tradução de Helmi Nasr + Tafsir básico. (4) Seguir canais como Bayyinah TV (Nouman Ali Khan) e Sheikh Rodrigo em português. (5) Usar este site para referenciar cruzamentos entre as escrituras." },
]

const faqItems = faqRaw.map((f) => ({
  id: uid('faq'),
  title: f.q,
  body: f.a,
  tab: 'saber',
  sub: 'faq',
  type: 'FAQ',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 5. PROFETAS  →  tab: mensagem / sub: profetas
// ─────────────────────────────────────────────────────────────────────────────

const prophetsRaw = [
  { name: 'Adam (Adão)',   role: 'O Primeiro Ser Humano e Profeta', desc: 'Criado diretamente por Allah a partir de barro. Todos os anjos se prostraram diante dele, exceto Iblis. Adão e Hawa viveram no Paraíso, comeram da árvore proibida, se arrependeram e foram perdoados.', key: 'No Islam, não existe pecado original. Adão pecou, se arrependeu, e foi perdoado. Cada ser humano nasce puro (fitra).' },
  { name: 'Nuh (Noé)',     role: 'O Paciente — Pregou por 950 Anos', desc: 'Nuh pregou por 950 anos, mas apenas uma minoria acreditou. Allah ordenou que construísse uma grande arca antes do dilúvio.', key: 'A história de Nuh ensina que o sucesso do profeta não é medido pelo número de convertidos — mas pela fidelidade à missão.' },
  { name: 'Ibrahim (Abraão)', role: 'O Patriarca do Monoteísmo', desc: 'Rejeitou os ídolos de seu pai e de seu povo. Foi jogado no fogo por desafiar o rei Nimrod, mas Allah o protegeu. Construiu a Caaba em Meca com seu filho Ismael.', key: 'Ibrahim é a raiz comum. Judeus, cristãos e muçulmanos são todos filhos espirituais de Abraão. É chamado de Khalilullah — o Amigo Íntimo de Allah.' },
  { name: 'Musa (Moisés)', role: 'O Libertador — Profeta da Torah', desc: 'O profeta mais mencionado no Alcorão (136 vezes). Confrontou o Faraó, libertou os Filhos de Israel, recebeu a Torah no Monte Sinai.', key: 'Recebeu a Torah — o primeiro grande código de leis revelado. 613 mandamentos para um povo recém-liberto da escravidão.' },
  { name: "Dawud (Davi)",  role: 'O Rei-Profeta — Recebeu os Salmos', desc: 'Dawud matou o gigante Jalut ainda jovem. Tornou-se rei de Israel e recebeu os Zabur (Salmos) como revelação direta de Allah.', key: 'Os Salmos são a quarta escritura sagrada mencionada no Alcorão. Dawud representa a união de poder terreno e santidade espiritual.' },
  { name: "'Isa (Jesus)",  role: 'O Messias — Profeta do Evangelho', desc: 'Nasceu milagrosamente de Maryam sem pai humano. Falou no berço. Curou cegos e leprosos. Ressuscitou mortos, tudo com a permissão de Allah.', key: 'Os muçulmanos amam Jesus. Ele é Al-Masih (o Messias). O Islam confirma o nascimento virginal e seus milagres. O que não aceita é sua divindade.' },
  { name: 'Muhammad ﷺ',   role: 'O Selo dos Profetas — Profeta do Alcorão', desc: 'O último mensageiro enviado por Allah, com a mensagem final para toda a humanidade. Iletrado (ummi), recebeu o Alcorão por revelação ao longo de 23 anos.', key: 'Khatam an-Nabiyyin — O Selo dos Profetas. Após Muhammad, não haverá outro profeta. O Alcorão é a revelação final e preservada integralmente.' },
]

const prophetItems = prophetsRaw.map((p) => ({
  id: uid('prophet'),
  title: p.name,
  body: [p.role, p.desc, p.key].filter(Boolean).join(' '),
  tab: 'mensagem',
  sub: 'profetas',
  type: 'Profeta',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 6. LINHA DO TEMPO  →  tab: mensagem / sub: timeline
// ─────────────────────────────────────────────────────────────────────────────

const timelineRaw = [
  { era: 'O Início',      event: 'Adam (Adão) — Primeiro ser humano e profeta. A humanidade começa com Islam (submissão a Allah)', scripture: 'Suhuf' },
  { era: '~3000 a.C.',    event: 'Nuh (Noé) — O dilúvio. 950 anos de pregação. A humanidade recomeça', scripture: '—' },
  { era: '~2000 a.C.',    event: 'Ibrahim (Abraão) — Pai do monoteísmo. Construiu a Caaba. Raiz das duas linhagens proféticas', scripture: 'Suhuf Ibrahim' },
  { era: '~1400 a.C.',    event: 'Musa (Moisés) — Libertou os Filhos de Israel. Recebeu a Torah no Monte Sinai', scripture: 'Torah' },
  { era: '~1000 a.C.',    event: 'Dawud (Davi) — Reinado de Israel no auge. Recebe os Salmos como revelação', scripture: 'Zabur' },
  { era: '~1 d.C.',       event: "'Isa (Jesus) — Nascimento virginal. Milagres. Anuncia a vinda de Ahmad", scripture: 'Injil' },
  { era: '325 d.C.',      event: 'Concílio de Niceia — Oficialização da Trindade. Canonização seletiva dos evangelhos', scripture: '—' },
  { era: '610 d.C.',      event: 'Primeira revelação na Caverna de Hira — Iqra (Lê!). Início do Alcorão', scripture: 'Alcorão' },
  { era: '622 d.C.',      event: 'Hijra para Medina — Marco zero do calendário islâmico', scripture: 'Alcorão' },
  { era: '632 d.C.',      event: 'Falecimento do Profeta ﷺ. Alcorão completo, revisado e preservado', scripture: 'Alcorão' },
  { era: '750–1258 d.C.', event: 'Era de Ouro Islâmica — Álgebra, ótica, medicina, astronomia e arte', scripture: '—' },
]

const timelineItems = timelineRaw.map((t) => ({
  id: uid('timeline'),
  title: `${t.era} — ${t.scripture !== '—' ? t.scripture : 'História'}`,
  body: t.event,
  tab: 'mensagem',
  sub: 'timeline',
  type: 'Linha do Tempo',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 7. 5 PILARES  →  tab: sistema / sub: pilares
// ─────────────────────────────────────────────────────────────────────────────

const pillarsRaw = [
  { title: 'Shahada', desc: "Testemunho de fé: 'Não há divindade exceto Allah, e Muhammad é Seu mensageiro'" },
  { title: 'Salah',   desc: '5 orações diárias. Alba, meio-dia, tarde, pôr do sol e noite' },
  { title: 'Zakah',   desc: 'Contribuição anual de 2,5% da riqueza acumulada para os necessitados' },
  { title: 'Sawm',    desc: 'Jejum durante o mês do Ramadã — do amanhecer ao pôr do sol' },
  { title: 'Hajj',    desc: 'Peregrinação a Meca ao menos uma vez na vida, para quem tem condições' },
]

const pillarItems = pillarsRaw.map((p) => ({
  id: uid('pilar'),
  title: `Pilar: ${p.title}`,
  body: p.desc,
  tab: 'sistema',
  sub: 'pilares',
  type: '5 Pilares',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 8. 6 ARTIGOS DE FÉ  →  tab: sistema / sub: artigos
// ─────────────────────────────────────────────────────────────────────────────

const articlesRaw = [
  { title: 'Fé em Allah',        desc: 'Único Criador, sem parceiros, sem filhos, sem forma limitada' },
  { title: 'Fé nos Anjos',       desc: 'Seres criados de luz que executam as ordens de Allah (Jibril, Mikail...)' },
  { title: 'Fé nas Escrituras',  desc: 'Torah, Zabur (Salmos), Injil (Evangelho), Alcorão — revelações divinas' },
  { title: 'Fé nos Profetas',    desc: 'Todos os profetas desde Adão até Muhammad ﷺ, sem distinção' },
  { title: 'Fé no Dia Final',    desc: 'Ressurreição, prestação de contas e Julgamento Final' },
  { title: 'Fé no Qadar',        desc: 'Tudo que acontece está no conhecimento de Allah — o livre-arbítrio existe dentro do plano divino' },
]

const articleItems = articlesRaw.map((a) => ({
  id: uid('article'),
  title: a.title,
  body: a.desc,
  tab: 'sistema',
  sub: 'artigos',
  type: '6 Artigos de Fé',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 9. ISLAM COMO SISTEMA OPERACIONAL  →  tab: sistema / sub: islam-os
// ─────────────────────────────────────────────────────────────────────────────

const islamOsItems = [
  {
    id: uid('islam-os'),
    title: islamSystemData.intro.title,
    body: islamSystemData.intro.content,
    tab: 'sistema',
    sub: 'islam-os',
    type: 'Islam como SO',
  },
  ...islamSystemData.coreProtocols.map((p) => ({
    id: uid('islam-os'),
    title: p.name,
    body: [p.systemAnalogy, p.howItWorks, p.benefit].filter(Boolean).join(' '),
    tab: 'sistema',
    sub: 'islam-os',
    type: 'Islam como SO',
  })),
]

// ─────────────────────────────────────────────────────────────────────────────
// 10. PONTES COMUNS (Terreno Comum)  →  tab: mensagem / sub: pontes
// ─────────────────────────────────────────────────────────────────────────────

const bridgeItems = commonGroundData.map((b) => ({
  id: uid('bridge'),
  title: b.theme,
  body: [b.christianBelief, b.islamicBelief, b.bridgeInsight].filter(Boolean).join(' '),
  tab: 'mensagem',
  sub: 'pontes',
  type: 'Terreno Comum',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 11. MANUSCRITOS BÍBLICOS  →  tab: mensagem / sub: manuscritos
// ─────────────────────────────────────────────────────────────────────────────

const bibleManuscriptItems = manuscriptsData.map((m) => ({
  id: uid('manuscript'),
  title: m.name,
  body: [m.significance, m.challenge, m.preservation].filter(Boolean).join(' '),
  tab: 'mensagem',
  sub: 'manuscritos',
  type: 'Manuscrito',
}))

// ─────────────────────────────────────────────────────────────────────────────
// 12. MANUSCRITOS DO ALCORÃO  →  tab: mensagem / sub: manuscritos
// ─────────────────────────────────────────────────────────────────────────────

const quranManuscriptItems = quranManuscripts.map((m) => ({
  id: uid('qmanuscript'),
  title: m.name,
  body: [m.significance, m.challenge, m.preservation].filter(Boolean).join(' '),
  tab: 'mensagem',
  sub: 'manuscritos',
  type: 'Manuscrito do Alcorão',
}))

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT — flat array, all types combined
// ─────────────────────────────────────────────────────────────────────────────

export const searchItems = [
  ...hadithItems,
  ...hardQuestionItems,
  ...glossaryItems,
  ...faqItems,
  ...prophetItems,
  ...timelineItems,
  ...pillarItems,
  ...articleItems,
  ...islamOsItems,
  ...bridgeItems,
  ...bibleManuscriptItems,
  ...quranManuscriptItems,
]
