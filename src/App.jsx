import { useState, useRef } from "react";
import QuranExplorer from "./QuranExplorer.jsx";
import { crossRefs } from "./data/cross-refs.js";
import { hadithsData, hadithCategories } from "./content/hadiths.js";
import { hardQuestionsData } from "./content/hardQuestions.js";
import { islamSystemData } from "./content/islamSystem.js";
import { recognitionStoriesData } from "./content/recognitionStories.js";
import { commonGroundData } from "./content/bridgeContent.js";
import { manuscriptsData, quranManuscripts, manuscriptComparison } from "./content/manuscripts.js";
import { HadithCard } from "./components/NewComponents.jsx";

const GOLD = "#B8922A";
const GOLD_LIGHT = "#D4AA50";
const DARK = "#FAF6EE";
const DARK_2 = "#F0E8D4";
const DARK_3 = "#EDE4CE";
const CREAM = "#1A1510";
const GREEN = "#2D6B4F";
const RED_ACCENT = "#A0522D";

const TABS = [
  { id: "origem",    label: "Origem",    arabic: "البداية", icon: "◎" },
  { id: "mensagem",  label: "Mensagem",  arabic: "الرسالة", icon: "◐" },
  { id: "quran",     label: "Alcorão",   arabic: "القرآن",  icon: "𝕼" },
  { id: "sistema",   label: "Sistema",   arabic: "النظام",  icon: "◇" },
  { id: "saber",     label: "Saber",     arabic: "العلم",   icon: "❋" },
  { id: "movimento", label: "Movimento", arabic: "الحركة",  icon: "☾" },
];

const SUB_TABS = {
  origem:    [{ id: "lei", label: "A Lei do Original" }, { id: "comecar", label: "Por Onde Começar" }],
  mensagem:  [{ id: "tawhid", label: "Tawhid" }, { id: "escrituras", label: "As Escrituras" }, { id: "profetas", label: "Os Profetas" }, { id: "timeline", label: "Linha do Tempo" }, { id: "pontes", label: "Pontes" }, { id: "manuscritos", label: "Manuscritos" }],
  quran:     [{ id: "explorador", label: "Explorador" }, { id: "cruzamentos", label: "Cruzamentos" }],
  sistema:   [{ id: "pilares", label: "5 Pilares" }, { id: "artigos", label: "6 Artigos" }, { id: "roteiro", label: "Roteiro" }, { id: "islam-os", label: "Islam como SO" }],
  saber:     [{ id: "glossario", label: "Glossário" }, { id: "faq", label: "Perguntas" }, { id: "hadiths", label: "40 Hadiths" }, { id: "questoes", label: "Questões Difíceis" }],
  movimento: [{ id: "missao", label: "A Missão" }, { id: "apoiar", label: "Apoiar" }, { id: "historias", label: "Histórias" }],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const prophetsData = [
  { name: "Adam (Adão)", arabic: "آدم", role: "O Primeiro Ser Humano e Profeta", desc: "Criado diretamente por Allah a partir de barro. Todos os anjos se prostraram diante dele, exceto Iblis. Adão e Hawa viveram no Paraíso, comeram da árvore proibida, se arrependeram e foram perdoados. Foram enviados à Terra não como castigo, mas como missão — para serem khalifah (representantes) de Allah.", key: "No Islam, não existe pecado original. Adão pecou, se arrependeu, e foi perdoado. Cada ser humano nasce puro (fitra).", era: "O Início", color: GREEN },
  { name: "Nuh (Noé)", arabic: "نوح", role: "O Paciente — Pregou por 950 Anos", desc: "Nuh pregou por 950 anos, mas apenas uma minoria acreditou. Allah ordenou que construísse uma grande arca antes do dilúvio. Sua história é símbolo de perseverança absoluta: não importa quantas vezes o povo rejeite a mensagem, o profeta continua cumprindo sua missão.", key: "A história de Nuh ensina que o sucesso do profeta não é medido pelo número de convertidos — mas pela fidelidade à missão.", era: "~3000 a.C.", color: "#4A6FA5" },
  { name: "Ibrahim (Abraão)", arabic: "إبراهيم", role: "O Patriarca do Monoteísmo", desc: "Rejeitou os ídolos de seu pai e de seu povo. Foi jogado no fogo por desafiar o rei Nimrod, mas Allah o protegeu. Construiu a Caaba em Meca com seu filho Ismael. Dele descendem duas linhagens proféticas: através de Isaac vieram os profetas de Israel, e através de Ismael veio Muhammad ﷺ.", key: "Ibrahim é a raiz comum. Judeus, cristãos e muçulmanos são todos filhos espirituais de Abraão. É chamado de Khalilullah — o Amigo Íntimo de Allah.", era: "~2000 a.C.", color: GOLD },
  { name: "Musa (Moisés)", arabic: "موسى", role: "O Libertador — Profeta da Torah", desc: "O profeta mais mencionado no Alcorão (136 vezes). Confrontou o Faraó, libertou os Filhos de Israel, recebeu a Torah no Monte Sinai. Sua história serve como exemplo de coragem, paciência e confiança em Allah diante de forças aparentemente invencíveis.", key: "Recebeu a Torah — o primeiro grande código de leis revelado. 613 mandamentos para um povo recém-liberto da escravidão.", era: "~1400 a.C.", color: "#4A6FA5" },
  { name: "Dawud (Davi)", arabic: "داود", role: "O Rei-Profeta — Recebeu os Salmos", desc: "Dawud matou o gigante Jalut ainda jovem. Tornou-se rei de Israel e recebeu os Zabur (Salmos) como revelação direta de Allah. Era abençoado com a mais bela voz entre os humanos — quando cantava os Salmos, os pássaros e as montanhas se uniam ao louvor.", key: "Os Salmos são a quarta escritura sagrada mencionada no Alcorão. Dawud representa a união de poder terreno e santidade espiritual.", era: "~1000 a.C.", color: GOLD },
  { name: "'Isa (Jesus)", arabic: "عيسى", role: "O Messias — Profeta do Evangelho", desc: "Nasceu milagrosamente de Maryam sem pai humano. Falou no berço. Curou cegos e leprosos. Ressuscitou mortos, tudo com a permissão de Allah. Sua missão era chamar os Filhos de Israel de volta ao monoteísmo puro. É mencionado 25 vezes por nome no Alcorão.", key: "Os muçulmanos amam Jesus. Ele é Al-Masih (o Messias). O Islam confirma o nascimento virginal e seus milagres. O que não aceita é sua divindade — Jesus era um ser humano eleito, não Deus.", era: "~1 d.C.", color: RED_ACCENT },
  { name: "Muhammad ﷺ", arabic: "محمد", role: "O Selo dos Profetas — Profeta do Alcorão", desc: "O último mensageiro enviado por Allah, com a mensagem final para toda a humanidade. Iletrado (ummi), recebeu o Alcorão por revelação ao longo de 23 anos. Era conhecido como Al-Amin (O Confiável) antes mesmo da revelação.", key: "Khatam an-Nabiyyin — O Selo dos Profetas. Após Muhammad, não haverá outro profeta. O Alcorão é a revelação final e preservada integralmente.", era: "570–632 d.C.", color: GOLD },
];

const timelineData = [
  { era: "O Início",      event: "Adam (Adão) — Primeiro ser humano e profeta. A humanidade começa com Islam (submissão a Allah)", scripture: "Suhuf", side: "left" },
  { era: "~3000 a.C.",    event: "Nuh (Noé) — O dilúvio. 950 anos de pregação. A humanidade recomeça", scripture: "—", side: "right" },
  { era: "~2000 a.C.",    event: "Ibrahim (Abraão) — Pai do monoteísmo. Construiu a Caaba. Raiz das duas linhagens proféticas", scripture: "Suhuf Ibrahim", side: "left" },
  { era: "~1400 a.C.",    event: "Musa (Moisés) — Libertou os Filhos de Israel. Recebeu a Torah no Monte Sinai", scripture: "Torah", side: "right" },
  { era: "~1000 a.C.",    event: "Dawud (Davi) — Reinado de Israel no auge. Recebe os Salmos como revelação", scripture: "Zabur", side: "left" },
  { era: "~1 d.C.",       event: "'Isa (Jesus) — Nascimento virginal. Milagres. Anuncia a vinda de Ahmad", scripture: "Injil", side: "right" },
  { era: "325 d.C.",      event: "Concílio de Niceia — Oficialização da Trindade. Canonização seletiva dos evangelhos", scripture: "—", side: "left" },
  { era: "610 d.C.",      event: "Primeira revelação na Caverna de Hira — Iqra (Lê!). Início do Alcorão", scripture: "Alcorão", side: "right" },
  { era: "622 d.C.",      event: "Hijra para Medina — Marco zero do calendário islâmico", scripture: "Alcorão", side: "left" },
  { era: "632 d.C.",      event: "Falecimento do Profeta ﷺ. Alcorão completo, revisado e preservado", scripture: "Alcorão", side: "right" },
  { era: "750–1258 d.C.", event: "Era de Ouro Islâmica — Álgebra, ótica, medicina, astronomia e arte", scripture: "—", side: "left" },
];

const pillarsData = [
  { num: "١", arabic: "الشهادة", title: "Shahada", desc: "Testemunho de fé: 'Não há divindade exceto Allah, e Muhammad é Seu mensageiro'" },
  { num: "٢", arabic: "الصلاة", title: "Salah",   desc: "5 orações diárias. Alba, meio-dia, tarde, pôr do sol e noite" },
  { num: "٣", arabic: "الزكاة", title: "Zakah",   desc: "Contribuição anual de 2,5% da riqueza acumulada para os necessitados" },
  { num: "٤", arabic: "الصوم",  title: "Sawm",    desc: "Jejum durante o mês do Ramadã — do amanhecer ao pôr do sol" },
  { num: "٥", arabic: "الحج",   title: "Hajj",    desc: "Peregrinação a Meca ao menos uma vez na vida, para quem tem condições" },
];

const articlesData = [
  { num: "01", title: "Fé em Allah",       desc: "Único Criador, sem parceiros, sem filhos, sem forma limitada" },
  { num: "02", title: "Fé nos Anjos",      desc: "Seres criados de luz que executam as ordens de Allah (Jibril, Mikail...)" },
  { num: "03", title: "Fé nas Escrituras", desc: "Torah, Zabur (Salmos), Injil (Evangelho), Alcorão — revelações divinas" },
  { num: "04", title: "Fé nos Profetas",   desc: "Todos os profetas desde Adão até Muhammad ﷺ, sem distinção" },
  { num: "05", title: "Fé no Dia Final",   desc: "Ressurreição, prestação de contas e Julgamento Final" },
  { num: "06", title: "Fé no Qadar",       desc: "Tudo que acontece está no conhecimento de Allah — o livre-arbítrio existe dentro do plano divino" },
];

const faqData = [
  { q: "Muçulmanos não acreditam em Jesus?", a: "Acreditam! Jesus ('Isa) é um dos maiores profetas no Islam. O Alcorão confirma seu nascimento virginal, seus milagres e sua exaltação. O que o Islam não aceita é a divindade de Jesus — para um muçulmano, Allah não tem filho literal. Jesus era um ser humano extraordinário escolhido como profeta." },
  { q: "Por que há tantas guerras no nome do Islam?", a: "O Alcorão diz: 'Quem matar uma alma inocente, é como se tivesse matado toda a humanidade' (5:32). O terrorismo é condenado unânimemente pela jurisprudência islâmica clássica. As guerras em nome do Islam são, na maioria, conflitos políticos usando linguagem religiosa — assim como a Inquisição foi política, não cristã em sua essência." },
  { q: "Islam e ciência são compatíveis?", a: "A primeira palavra revelada no Alcorão foi 'Iqra' — Lê, estuda, busca conhecimento. A Era de Ouro Islâmica (750-1258 d.C.) produziu os fundamentos da álgebra (Al-Khwarizmi), da ótica (Ibn Al-Haytham), da medicina (Ibn Sina) e muito mais. O Islam incentiva o estudo do universo como forma de conhecer o Criador." },
  { q: "O Islam oprime as mulheres?", a: "O Alcorão foi o primeiro texto a dar direitos legais às mulheres: herança, propriedade, divórcio, consentimento matrimonial — no século VII. O que muitas vezes se confunde com Islam são tradições culturais específicas de certas regiões. Khadijah, primeira esposa do Profeta, era empresária. Aisha transmitiu 2.210 hadices e ensinou teologia." },
  { q: "Qual a diferença entre Sunna e Shia?", a: "Após o falecimento do Profeta, surgiu uma questão: quem deveria liderar a comunidade? Sunitas reconhecem Abu Bakr como primeiro califa legítimo. Shias acreditam que Ali ibn Abi Talib deveria ter sido o primeiro líder. Em Aqidah (teologia) e práticas fundamentais, concordam. As diferenças são principalmente políticas e ritualísticas." },
  { q: "Como começar a estudar Islam do zero?", a: "Roteiro sugerido: (1) Assistir 'The Story of the Quran' no YouTube. (2) Ler 'O Profeta Muhammad' de Martin Lings. (3) Explorar o Alcorão com tradução de Helmi Nasr + Tafsir básico. (4) Seguir canais como Bayyinah TV (Nouman Ali Khan) e Sheikh Rodrigo em português. (5) Usar este site para referenciar cruzamentos entre as escrituras." },
];

const glossaryData = [
  { term: "Tawhid",          arabic: "التوحيد",    def: "Monoteísmo absoluto. A unicidade de Allah — sem parceiros, sem filhos, sem associados" },
  { term: "Shirk",           arabic: "الشرك",      def: "O maior pecado no Islam: associar parceiros a Allah (idolatria ou deificar outros)" },
  { term: "Nabi / Rasul",    arabic: "نبي / رسول", def: "Nabi = Profeta (recebe revelação). Rasul = Mensageiro (recebe escritura + missão)" },
  { term: "Tafsir",          arabic: "التفسير",    def: "Exegese do Alcorão — explicação do contexto, linguagem e significado de cada versículo" },
  { term: "Seerah",          arabic: "السيرة",     def: "Biografia do Profeta Muhammad ﷺ. A fonte primária para entender o Alcorão em contexto" },
  { term: "Hadith",          arabic: "الحديث",     def: "Relatos das palavras e ações do Profeta. Segunda fonte de lei islâmica após o Alcorão" },
  { term: "Fitra",           arabic: "الفطرة",     def: "A natureza primordial pura de cada ser humano. Todo recém-nascido está em estado de Islam" },
  { term: "Khalifah",        arabic: "الخليفة",    def: "Representante / sucessor. No Alcorão: o ser humano como representante de Allah na Terra" },
  { term: "Tahrif",          arabic: "التحريف",    def: "Distorção ou alteração das escrituras reveladas ao longo do tempo" },
  { term: "Ummah",           arabic: "الأمة",      def: "A comunidade muçulmana global — acima de fronteiras nacionais ou étnicas" },
  { term: "Hijra",           arabic: "الهجرة",     def: "A migração do Profeta de Meca para Medina (622 d.C.) — marco zero do calendário islâmico" },
  { term: "Jannah / Jahannam", arabic: "جنة / جهنم", def: "Paraíso e Inferno — os dois destinos após o Dia do Julgamento" },
];


// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <span className={`faq-icon ${open ? "open" : ""}`}>+</span>
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

function Quote({ text, source }) {
  return (
    <div className="quote-block">
      <div className="quote-text">{text}</div>
      <div className="quote-source">— {source}</div>
    </div>
  );
}

function KeyConcept({ title, text }) {
  return (
    <div className="key-concept">
      <div className="key-concept-label">{title}</div>
      <div className="key-concept-text">{text}</div>
    </div>
  );
}

function SabiasQue({ text }) {
  return (
    <div className="sabia-que">
      <span className="sabia-label">☾ Sabia que</span>
      <div className="sabia-text">{text}</div>
    </div>
  );
}

// ─── NEW CONTENT SECTIONS ────────────────────────────────────────────────────

function SaberHadiths() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const cats = [{ id: "todos", label: "Todos", color: GOLD }, ...(hadithCategories || [])];
  const filtered = activeCategory === "todos"
    ? hadithsData
    : hadithsData.filter(h => h.category === activeCategory);
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الأربعون النووية</div>
        <h2 className="section-title">40 Hadiths de An-Nawawi</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign:"center", marginBottom:32, fontSize:17}}>
        Os 40 hadiths mais estudados do Islam. Cada um com uma história real do dia a dia brasileiro e a conexão com a Bíblia.
      </p>
      <div style={{display:"flex", flexWrap:"wrap", gap:8, marginBottom:32, justifyContent:"center"}}>
        {cats.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            style={{
              padding:"5px 16px", borderRadius:20, border:`1px solid ${activeCategory===c.id ? '#B8922A' : '#DDD0B8'}`,
              background: activeCategory===c.id ? "rgba(184,146,42,0.1)" : "transparent",
              color: activeCategory===c.id ? '#B8922A' : '#8A7E74',
              fontFamily:"'Crimson Pro',serif", fontSize:13, cursor:"pointer", transition:"all 0.2s",
            }}
          >{c.label || c.id}</button>
        ))}
      </div>
      {filtered.map(h => <HadithCard key={h.number} hadith={h} />)}
    </div>
  );
}

function SaberQuestoes() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الأسئلة الصعبة</div>
        <h2 className="section-title">Questões Difíceis</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign:"center", marginBottom:32, fontSize:17}}>
        As perguntas que a maioria das pessoas tem mas poucos respondem com honestidade. Sem evasão.
      </p>
      {hardQuestionsData.map(q => (
        <div key={q.id} style={{
          background:"#F0E8D4", border:"1px solid #DDD0B8",
          borderRadius:8, marginBottom:10, overflow:"hidden", boxShadow:"0 1px 8px rgba(90,70,30,0.07)",
        }}>
          <div
            onClick={() => setOpenId(openId===q.id ? null : q.id)}
            style={{
              padding:"20px 24px", cursor:"pointer", display:"flex", justifyContent:"space-between",
              alignItems:"flex-start", gap:16,
            }}
          >
            <div>
              <div style={{
                fontSize:10, letterSpacing:"2px", textTransform:"uppercase",
                color: q.difficulty==="high" ? "#C8693A" : '#B8922A', opacity:0.75, marginBottom:6,
              }}>
                {q.difficulty==="high" ? "Pergunta difícil" : "Pergunta comum"}
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:19, color:'#1A1510'}}>{q.question}</div>
            </div>
            <span style={{color:'#B8922A', fontSize:20, flexShrink:0, marginTop:4, opacity:0.6}}>{openId===q.id ? "−" : "+"}</span>
          </div>
          {openId===q.id && (
            <div style={{padding:"0 24px 24px"}}>
              <div style={{
                background:"rgba(184,146,42,0.05)", border:"1px solid rgba(184,146,42,0.12)",
                borderRadius:6, padding:"16px 20px", marginBottom:16,
              }}>
                <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.7, marginBottom:8}}>Resposta direta</div>
                <p style={{fontSize:15, lineHeight:1.75, color:'#1A1510'}}>{q.directAnswer}</p>
              </div>
              <div style={{marginBottom:16}}>
                <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:8}}>Contexto histórico</div>
                <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248'}}>{q.context}</p>
              </div>
              {q.islamicScholarship && (
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:8}}>O que diz a erudição islâmica</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248'}}>{q.islamicScholarship}</p>
                </div>
              )}
              <div style={{
                borderTop:"1px solid #EAE0CC", paddingTop:16,
                fontSize:14, lineHeight:1.75, fontStyle:"italic", color:"rgba(184,146,42,0.75)",
              }}>
                {q.honestConclusion}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SistemaOS() {
  const [openIdx, setOpenIdx] = useState(null);
  const protocols = islamSystemData.coreProtocols || [];
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">النظام الكامل</div>
        <h2 className="section-title">Islam como Sistema Operacional</h2>
        <div className="section-line" />
      </div>
      <div style={{
        background:"rgba(184,146,42,0.05)",
        border:"1px solid rgba(184,146,42,0.18)", borderRadius:8, padding:"28px 32px", marginBottom:40,
      }}>
        <p style={{fontSize:17, lineHeight:1.85, color:'#1A1510', whiteSpace:"pre-line"}}>
          {islamSystemData.intro?.content}
        </p>
      </div>
      <div className="content-subtitle" style={{marginBottom:24}}>Os Protocolos Obrigatórios</div>
      {protocols.map((p, i) => (
        <div key={i} style={{
          background:"#F0E8D4",
          border:"1px solid #DDD0B8", borderRadius:8, marginBottom:10,
          overflow:"hidden", boxShadow:"0 1px 8px rgba(90,70,30,0.07)",
        }}>
          <div
            onClick={() => setOpenIdx(openIdx===i ? null : i)}
            style={{padding:"20px 24px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center"}}
          >
            <div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:'#B8922A', marginBottom:4}}>{p.name}</div>
              <div style={{fontSize:13, color:'#8A7E74', lineHeight:1.5}}>
                {(p.systemAnalogy || "").split("\n")[0]}
              </div>
            </div>
            <span style={{color:'#B8922A', fontSize:22, flexShrink:0, opacity:0.6}}>{openIdx===i ? "−" : "+"}</span>
          </div>
          {openIdx===i && (
            <div style={{padding:"0 24px 24px", borderTop:"1px solid #EAE0CC"}}>
              <p style={{fontSize:15, lineHeight:1.8, color:'#1A1510', marginTop:16, whiteSpace:"pre-line"}}>{p.systemAnalogy}</p>
              {p.howItWorks && (
                <div style={{marginTop:20}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.6, marginBottom:8}}>Como funciona</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248', whiteSpace:"pre-line"}}>{p.howItWorks}</p>
                </div>
              )}
              {p.benefit && (
                <div style={{
                  marginTop:20, background:"rgba(184,146,42,0.05)", borderRadius:6,
                  padding:"14px 18px", borderLeft:"3px solid rgba(184,146,42,0.3)",
                }}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.6, marginBottom:8}}>Benefício documentado</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248', whiteSpace:"pre-line"}}>{p.benefit}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MovimentoHistorias() {
  const [openId, setOpenId] = useState(null);
  const typeLabels = { gradual:"Gradual", emocional:"Emocional", intelectual:"Intelectual", instantaneo:"Instantâneo" };
  const typeColors = { gradual:GOLD, emocional:"#C8693A", intelectual:"#4A90D9", instantaneo:"#2D6B4F" };
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">قصص الفطرة</div>
        <h2 className="section-title">Histórias de Reconhecimento</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign:"center", marginBottom:12, fontSize:17}}>
        Islam não é conversão — é reconhecimento. A Fitra (natureza primordial) se ativa quando a alma encontra o que sempre soube ser verdade.
      </p>
      <p className="content-text" style={{textAlign:"center", marginBottom:40, fontSize:14, opacity:0.55}}>
        Estas são histórias de pessoas que chegaram ao Islam por caminhos diferentes.
      </p>
      {recognitionStoriesData.map(s => (
        <div key={s.id} style={{
          background:"#F0E8D4", border:"1px solid #DDD0B8",
          borderRadius:8, marginBottom:16, overflow:"hidden", boxShadow:"0 1px 8px rgba(90,70,30,0.07)",
          transition:"border-color 0.25s",
        }}>
          <div style={{padding:"24px 28px"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16, marginBottom:16}}>
              <div>
                <div style={{display:"flex", gap:10, alignItems:"center", marginBottom:6}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:24, color:'#1A1510'}}>{s.name}</div>
                  {s.knownAs && <div style={{fontSize:12, color:'#8A7E74'}}>(conhecido como {s.knownAs})</div>}
                </div>
                <div style={{display:"flex", gap:8, alignItems:"center"}}>
                  <span style={{
                    fontSize:10, letterSpacing:"1.5px", textTransform:"uppercase",
                    color: typeColors[s.type] || GOLD, border:`1px solid ${typeColors[s.type] || GOLD}33`,
                    borderRadius:12, padding:"3px 10px",
                  }}>{typeLabels[s.type] || s.type}</span>
                  <span style={{fontSize:12, color:'#8A7E74'}}>{s.era}</span>
                </div>
              </div>
            </div>
            <div style={{
              borderLeft:`3px solid ${typeColors[s.type] || GOLD}66`, paddingLeft:20,
              fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontStyle:"italic",
              color:'#2E2820', lineHeight:1.65, marginBottom:16,
            }}>
              "{s.quote}"
            </div>
            <div style={{fontSize:12, color:'#8A7E74', marginBottom:16}}>— {s.quoteSource}</div>
            <button
              onClick={() => setOpenId(openId===s.id ? null : s.id)}
              style={{
                background:"transparent", border:`1px solid rgba(184,146,42,0.25)`, borderRadius:20,
                padding:"6px 18px", color:"rgba(184,146,42,0.7)", fontFamily:"'Crimson Pro',serif",
                fontSize:13, cursor:"pointer", transition:"all 0.2s",
              }}
            >{openId===s.id ? "Fechar história ↑" : "Ver a jornada completa →"}</button>
          </div>
          {openId===s.id && (
            <div style={{borderTop:"1px solid #EAE0CC", padding:"24px 28px"}}>
              {[["Antes", s.before], ["O momento decisivo", s.moment], ["Depois", s.after]].map(([label, text]) => text && (
                <div key={label} style={{marginBottom:20}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.6, marginBottom:8}}>{label}</div>
                  <p style={{fontSize:15, lineHeight:1.8, color:'#2E2820'}}>{text}</p>
                </div>
              ))}
              {s.relatable && (
                <div style={{
                  background:"rgba(184,146,42,0.04)", borderRadius:6, padding:"14px 18px",
                  borderLeft:"3px solid rgba(184,146,42,0.25)", marginTop:8,
                }}>
                  <p style={{fontSize:13, fontStyle:"italic", color:"rgba(184,146,42,0.7)", lineHeight:1.7}}>{s.relatable}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MensagemPontes() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الجسور</div>
        <h2 className="section-title">Terreno Comum</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign:"center", marginBottom:40, fontSize:17}}>
        Antes das diferenças, existe um terreno compartilhado. Veja o que cristãos e muçulmanos acreditam juntos — e o que cada tradição acrescenta à conversa.
      </p>
      {commonGroundData.map(b => (
        <div key={b.id} style={{
          background:"#F0E8D4", border:"1px solid #DDD0B8",
          borderRadius:8, marginBottom:12, overflow:"hidden", boxShadow:"0 1px 8px rgba(90,70,30,0.07)",
        }}>
          <div onClick={() => setOpenId(openId===b.id ? null : b.id)} style={{padding:"20px 24px", cursor:"pointer"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:12}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'#1A1510', lineHeight:1.4}}>{b.theme}</div>
              <span style={{color:'#B8922A', fontSize:20, flexShrink:0, opacity:0.5}}>{openId===b.id ? "−" : "+"}</span>
            </div>
          </div>
          {openId===b.id && (
            <div style={{borderTop:"1px solid #EAE0CC", padding:"20px 24px"}}>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20}}>
                <div style={{background:"rgba(74,144,217,0.06)", borderRadius:6, padding:"16px", borderTop:"3px solid rgba(74,144,217,0.4)"}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:"#4A90D9", opacity:0.8, marginBottom:8}}>Visão Cristã</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#2E2820'}}>{b.christianBelief}</p>
                </div>
                <div style={{background:"rgba(184,146,42,0.06)", borderRadius:6, padding:"16px", borderTop:"3px solid rgba(184,146,42,0.4)"}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.8, marginBottom:8}}>Visão Islâmica</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#2E2820'}}>{b.islamicBelief}</p>
                </div>
              </div>
              {b.sharedText && (
                <div style={{marginBottom:16, background:"rgba(184,146,42,0.03)", borderRadius:6, padding:"14px 18px", borderLeft:"3px solid rgba(184,146,42,0.25)"}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:8}}>Nas Escrituras</div>
                  <p style={{fontSize:13, lineHeight:1.8, color:'#5C5248', fontStyle:"italic"}}>{b.sharedText}</p>
                </div>
              )}
              {b.bridgeInsight && (
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:8}}>Perspectiva</div>
                  <p style={{fontSize:14, lineHeight:1.8, color:'#5C5248'}}>{b.bridgeInsight}</p>
                </div>
              )}
              {b.discussionQuestion && (
                <div style={{background:"rgba(184,146,42,0.04)", borderRadius:6, padding:"14px 18px", borderLeft:"3px solid rgba(184,146,42,0.2)"}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.5, marginBottom:6}}>Para Refletir</div>
                  <p style={{fontSize:13, fontStyle:"italic", color:"rgba(184,146,42,0.7)", lineHeight:1.7}}>{b.discussionQuestion}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MensagemManuscritos() {
  const [openId, setOpenId] = useState(null);
  const preservColor = { excelente:"#2D6B4F", boa:"#4A90D9", parcial:GOLD, fragmentada:"#C8693A", perdida:"#666" };
  const allManuscripts = [...(manuscriptsData || []), ...(quranManuscripts || [])];
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">المخطوطات</div>
        <h2 className="section-title">Os Manuscritos Históricos</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign:"center", marginBottom:16, fontSize:17}}>
        Onde estão os textos originais? Como chegaram até nós? O que a arqueologia diz sobre a preservação das escrituras?
      </p>
      {manuscriptComparison?.keyInsight && (
        <div style={{
          background:"rgba(184,146,42,0.05)", border:"1px solid rgba(200,169,81,0.15)",
          borderRadius:8, padding:"20px 24px", marginBottom:32,
          fontFamily:"'Cormorant Garamond',serif", fontSize:17, lineHeight:1.75,
          color:'#1A1510', fontStyle:"italic",
        }}>
          {manuscriptComparison.keyInsight}
        </div>
      )}
      {allManuscripts.map(m => (
        <div key={m.id} style={{
          background:"#F0E8D4", border:"1px solid #DDD0B8",
          borderRadius:8, marginBottom:10, overflow:"hidden", boxShadow:"0 1px 8px rgba(90,70,30,0.07)",
        }}>
          <div onClick={() => setOpenId(openId===m.id ? null : m.id)} style={{padding:"20px 24px", cursor:"pointer"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12}}>
              <div>
                <div style={{display:"flex", gap:8, alignItems:"center", flexWrap:"wrap", marginBottom:6}}>
                  <span style={{fontSize:11, color:'#8A7E74', border:"1px solid #DDD0B8", borderRadius:12, padding:"2px 10px"}}>{m.date}</span>
                  {m.preservation && (
                    <span style={{
                      fontSize:11, color: preservColor[m.preservation] || GOLD,
                      border:`1px solid ${preservColor[m.preservation] || GOLD}44`, borderRadius:12, padding:"2px 10px",
                    }}>{m.preservation}</span>
                  )}
                  {m.scripture && <span style={{fontSize:11, color:"rgba(184,146,42,0.6)"}}>{m.scripture}</span>}
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:19, color:'#1A1510'}}>{m.name}</div>
                {m.location && <div style={{fontSize:13, color:'#8A7E74', marginTop:3}}>📍 {m.location}</div>}
              </div>
              <span style={{color:'#B8922A', fontSize:20, flexShrink:0, opacity:0.5}}>{openId===m.id ? "−" : "+"}</span>
            </div>
          </div>
          {openId===m.id && (
            <div style={{borderTop:"1px solid #EAE0CC", padding:"20px 24px"}}>
              {m.discovery && (
                <div style={{marginBottom:14}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:6}}>Descoberta</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248'}}>{m.discovery}</p>
                </div>
              )}
              {m.significance && (
                <div style={{marginBottom:14}}>
                  <div style={{fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:'#B8922A', opacity:0.55, marginBottom:6}}>Importância</div>
                  <p style={{fontSize:14, lineHeight:1.75, color:'#5C5248'}}>{m.significance}</p>
                </div>
              )}
              {m.gap && (
                <div style={{
                  background:"rgba(184,146,42,0.04)", borderRadius:6, padding:"12px 16px",
                  borderLeft:"3px solid rgba(184,146,42,0.2)",
                }}>
                  <span style={{fontSize:12, color:"rgba(184,146,42,0.7)", fontStyle:"italic"}}>{m.gap}</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── TAB CONTENT PANELS ──────────────────────────────────────────────────────

function OrigemLei() {
  return (
    <div className="section fade-in">
      <div className="origem-hero">
        <div className="origem-kalam">كَلَامُ اللَّهِ</div>
        <div className="origem-tagline">Kalamullah · A Palavra de Allah</div>
        <p className="origem-intro">
          "O ser humano não inventa. Ele copia. E o limite da cópia é a profundidade do entendimento sobre o original."
        </p>
      </div>

      <div className="content-block">
        <div className="content-subtitle">O Padrão Que Ninguém Nomeou</div>
        <p className="content-text">
          Existe uma lei que governa toda criação humana. Ela nunca foi formalizada, nunca recebeu nome,
          nunca foi ensinada como princípio unificador. Mas está presente em cada invenção da história.
        </p>
        <p className="content-text">
          O ser humano olhou para o cavalo e criou o carro. Não copiou a <em>forma</em> — copiou a <em>função</em>.
          Olhou para o pássaro e criou o avião. Olhou para o morcego e criou o radar.
          Olhou para o carrapicho e criou o velcro. O padrão é absoluto. Não existe exceção.
        </p>
      </div>

      <div className="layer-grid">
        <div className="layer-card" style={{"--layer-color": "#4A90D9"}}>
          <div className="layer-num">Camada 01</div>
          <span className="layer-icon">⚙️</span>
          <div className="layer-title">O Corpo</div>
          <div className="layer-sub">Tecnologia Física</div>
          <div className="layer-examples">Mão → Ferramenta · Olho → Câmera</div>
        </div>
        <div className="layer-card" style={{"--layer-color": "#7B68EE"}}>
          <div className="layer-num">Camada 02</div>
          <span className="layer-icon">🧠</span>
          <div className="layer-title">A Mente</div>
          <div className="layer-sub">Tecnologia da Informação</div>
          <div className="layer-examples">Memória → HD · Neurônio → IA</div>
        </div>
        <div className="layer-card" style={{"--layer-color": GOLD}}>
          <div className="layer-num">Camada 03</div>
          <span className="layer-icon">☾</span>
          <div className="layer-title">O Espírito</div>
          <div className="layer-sub">Tecnologia de Comunicação</div>
          <div className="layer-examples">Telégrafo → Wi-Fi → Neuralink</div>
        </div>
      </div>

      <div className="content-block">
        <div className="content-subtitle">Camada 1 — O Corpo: Os Exemplos Reais</div>
        <p className="content-text">
          O que torna a lei poderosa não é a observação genérica — é o nível de detalhe. Veja os exemplos reais:
        </p>
      </div>

      <div className="body-map-grid">
        {[
          { part: "Morcego", tech: "Radar — a RAF na 2ª Guerra copiou a ecolocalização para detectar aviões inimigos no escuro" },
          { part: "Carrapicho", tech: "Velcro — George de Mestral, 1941, voltou de uma caminhada, viu no microscópio e patenteou. Hoje está no traje da NASA" },
          { part: "Martim-pescador", tech: "Trem-bala Shinkansen — o engenheiro Eiji Nakatsu era observador de pássaros. O bico que entra na água sem ruído resolveu o barulho dos túneis" },
          { part: "Pele do tubarão", tech: "Aviões e roupas olímpicas — microtexturas que reduzem atrito. Mesma estrutura, escala diferente" },
          { part: "Nadadeira da baleia", tech: "Turbinas eólicas — as protuberâncias geram turbulência controlada. Eficiência aumentou 20% ao copiar o original" },
          { part: "Colônia de formigas", tech: "Logística da Amazon — otimização de rotas por feromônio. Inteligência coletiva sem comando central" },
          { part: "DNA", tech: "Armazenamento de dados — Harvard já gravou dados digitais em DNA sintético. 215 petabytes por grama" },
          { part: "Sistema imune", tech: "Cibersegurança — detecta agente invasor, classifica, neutraliza, cria memória. O antivírus é imunologia externalizada" },
        ].map((item, i) => (
          <div key={i} className="body-map-item">
            <span className="body-part">{item.part}</span>
            <span className="body-arrow">→</span>
            <span className="body-tech">{item.tech}</span>
          </div>
        ))}
      </div>

      <KeyConcept
        title="O Corolário da Profundidade"
        text="O limite de toda cópia é a profundidade do entendimento sobre o original. Cópia superficial → resultado fraco. Cópia profunda → resultado extraordinário. O original → inatingível. O primeiro avião matou seu piloto porque os irmãos Wright copiaram a forma do pássaro — as asas — sem entender a sustentação."
      />

      <div className="content-block">
        <div className="content-subtitle">Camada 2 — A Mente</div>
        <p className="content-text">
          Depois de copiar o corpo, o ser humano começou a copiar algo que não podia ver:
          a mente. A memória virou HD. A lógica virou algoritmo. O raciocínio virou IA.
          A tentativa máxima até agora é a Inteligência Artificial — uma tentativa de copiar o pensamento humano.
        </p>
        <p className="content-text">
          Mas o Corolário se aplica aqui com ainda mais força: o cérebro aprende com 1 exemplo.
          O machine learning precisa de milhões. O cérebro processa com 20 watts.
          O supercomputador mais potente de 2026 precisa de 20 megawatts — um milhão de vezes mais — para se aproximar.
        </p>
      </div>

      <SabiasQue text="A câmera mais avançada do mundo em 2026 ainda não alcança a resolução do olho humano: 576 megapixels equivalentes, com processamento de profundidade, cor e movimento em tempo real — com zero consumo de energia consciente. O olho funciona há 300 mil anos sem atualização de firmware." />

      <div className="content-block">
        <div className="content-subtitle">Camada 3 — A Progressão da Comunicação</div>
        <p className="content-text">
          O ser humano sempre quis se comunicar à distância — sem tocar, sem estar presente, sem intermediário físico.
          Cada geração de tecnologia elimina uma camada de limitação. Olhe a linha:
        </p>
      </div>

      <div className="tech-chain">
        {[
          { year: "Pré-história", name: "Sinal de Fumaça", limit: "Alcance visual. Mensagens simples. Depende do clima." },
          { year: "Antigas", name: "Tambores de Guerra", limit: "Som pelo ar. Mais rápido — mas ainda limitado por distância." },
          { year: "1844", name: "Telégrafo (Morse)", limit: "Velocidade da luz — mas preso ao cabo físico." },
          { year: "1876", name: "Telefone (Bell)", limit: "Voz bidirecional — ainda preso ao cabo." },
          { year: "1895", name: "Rádio (Marconi)", limit: "Sem fio! Mas unidirecional — um fala, todos ouvem." },
          { year: "1970s", name: "Telefone Celular", limit: "Móvel, bidirecional. Mas depende de torre." },
          { year: "1990s", name: "Wi-Fi / Internet", limit: "Conexão constante. Alcance de metros." },
          { year: "2000s", name: "Satélite Global", limit: "Cobre o planeta inteiro. Mas depende de hardware orbital." },
          { year: "Hoje", name: "Neuralink / BCI", limit: "Pensamento a pensamento. Mas requer chip cirúrgico implantado no cérebro." },
        ].map((s, i) => (
          <div key={i} className="tech-step">
            <span className="tech-year">{s.year}</span>
            <div>
              <div className="tech-name">{s.name}</div>
              <div className="tech-limit">{s.limit}</div>
            </div>
          </div>
        ))}
        <div className="tech-step highlight-step">
          <span className="tech-year">Sempre</span>
          <div>
            <div className="tech-name">Salah — A Oração</div>
            <div className="tech-limit">Sem hardware. Sem sinal. Sem intermediário. Sem latência. Comunicação direta com o Criador — disponível para qualquer ser humano, em qualquer lugar, em qualquer língua, a qualquer hora.</div>
          </div>
        </div>
      </div>

      <Quote
        text="O ser humano passou milhares de anos criando tecnologia para se conectar. Sem perceber que já nasceu com a tecnologia mais avançada que vai existir: a conexão direta com quem o criou."
        source="— A Lei do Original"
      />

      <SabiasQue text="O Bluetooth tem alcance de 10 metros. O Wi-Fi, 100 metros. O celular, quilômetros. O satélite cobre o planeta. A oração não tem limite de alcance — porque não opera no plano físico. É a única 'tecnologia' de comunicação que funciona sem infraestrutura, sem energia elétrica, e sem intermediário." />

      <KeyConcept
        title="A Conclusão da Lei"
        text="Se o ser humano copia a natureza, e a natureza é criação de Allah — então o Original de todo original é Allah. O Alcorão = Kalamullah = A Palavra de Allah = O Original que nenhuma cópia supera."
      />

      <div className="content-block">
        <div className="content-subtitle">Kalamullah — O Original</div>
        <p className="content-text">
          <strong style={{color: GOLD}}>Kalam</strong> significa Palavra. <strong style={{color: GOLD}}>Ullah</strong> é Allah.
          O Alcorão é literalmente <em>A Palavra de Allah</em>. Não uma interpretação humana da revelação.
          Não uma tradução. O texto original, preservado letra por letra por 1.400 anos.
        </p>
        <p className="content-text">
          Enquanto toda tecnologia humana envelhece e é substituída — este texto permanece.
          Enquanto cada sistema humano é copiado e melhorado — este é o original que não tem versão superior.
        </p>
      </div>
    </div>
  );
}

function OrigemComecar({ onNavigate }) {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">البداية</div>
        <h2 className="section-title">Por Onde Começar</h2>
        <div className="section-line" />
      </div>

      <p className="content-text" style={{textAlign: "center", marginBottom: 40, fontSize: 18}}>
        Não existe um único caminho. Escolha o que mais ressoa com você agora.
      </p>

      <div className="paths-grid">
        <div className="path-card" onClick={() => onNavigate("mensagem", "tawhid")}>
          <span className="path-icon">◯</span>
          <div className="path-title">O Curioso</div>
          <div className="path-desc">Você ouviu falar sobre Islam mas nunca entrou a fundo. Quer entender a lógica antes de qualquer julgamento.</div>
          <span className="path-cta">Comece pelo Tawhid →</span>
        </div>
        <div className="path-card" onClick={() => onNavigate("mensagem", "escrituras")}>
          <span className="path-icon">𝕿</span>
          <div className="path-title">O Buscador</div>
          <div className="path-desc">Você tem fé, acredita em Deus, mas sente que falta algo. Quer entender a conexão entre as escrituras.</div>
          <span className="path-cta">Veja As Escrituras →</span>
        </div>
        <div className="path-card" onClick={() => onNavigate("saber", "faq")}>
          <span className="path-icon">?</span>
          <div className="path-title">O Questionador</div>
          <div className="path-desc">Você tem perguntas diretas sobre Islam. Violência, mulheres, ciência. Quer respostas honestas, não discurso.</div>
          <span className="path-cta">Veja as Perguntas →</span>
        </div>
      </div>

      <div className="content-block" style={{marginTop: 48}}>
        <div className="content-subtitle">Uma Premissa Honesta</div>
        <p className="content-text">
          Este site não quer converter ninguém. Quer apresentar o Islam como ele é — não como a mídia
          retratou, não como extremistas praticam, não como Hollywood imaginou.
        </p>
        <p className="content-text">
          Se você acredita em um Criador. Se você acredita que Abraão, Moisés e Jesus existiram.
          Se você acredita que existe uma verdade por trás da realidade — então você já compartilha
          mais com o Islam do que imagina. O que falta é o último capítulo.
        </p>
      </div>

      <Quote
        text="Tudo que você acredita é verdade. Mas falta o capítulo final."
        source="— KALAM BRASIL"
      />

      <div className="content-block" style={{marginTop: 48}}>
        <div className="content-subtitle">A Escada de Consciência</div>
        <p className="content-text" style={{marginBottom: 24}}>
          Ninguém chega ao fim da jornada em um dia. Kalam foi construído para cada degrau desta escada.
          Onde você está agora?
        </p>
        <div className="escada-wrap">
          {[
            { num: "0", phase: "Pré-consciência", title: "A Narrativa Padrão", reaction: "\"Islam? Não é coisa de terrorista?\"" },
            { num: "1", phase: "Surpresa", title: "Primeiro Contato", reaction: "\"Espera. Isso é verdade?\"" },
            { num: "2", phase: "Curiosidade", title: "Busca Ativa", reaction: "\"Eu não sabia nada disso.\"" },
            { num: "3", phase: "Questionamento", title: "A Narrativa Antiga Não Encaixa Mais", reaction: "\"Se isso é verdade, o que mais eu não sei?\"" },
            { num: "4", phase: "Estudo", title: "Aprofundamento", reaction: "\"Preciso ir mais fundo.\"" },
            { num: "5", phase: "Reconhecimento", title: "A Fitra Ativa", reaction: "\"Isso faz sentido. Sempre fez.\"" },
            { num: "6", phase: "Declaração", title: "Shahada", reaction: "Não porque foi pressionado — porque não consegue mais não declará-la." },
          ].map((step) => (
            <div key={step.num} className="escada-item">
              <span className="escada-num">{step.num}</span>
              <div>
                <div className="escada-phase">{step.phase}</div>
                <div className="escada-title">{step.title}</div>
                <div className="escada-reaction">{step.reaction}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-block">
        <div className="content-subtitle">O Que Você Vai Encontrar Aqui</div>
        <div className="principles-list">
          {[
            { n: "01", text: "A história completa dos profetas — de Adão a Muhammad — como um único relato contínuo" },
            { n: "02", text: "A conexão entre Torah, Evangelho e Alcorão — os três como capítulos da mesma revelação" },
            { n: "03", text: "O Alcorão em árabe e português — para ler, ouvir e explorar por conta própria" },
            { n: "04", text: "Respostas honestas para as perguntas mais difíceis, sem evasão" },
            { n: "05", text: "Recursos para continuar — livros, canais, comunidade" },
          ].map(item => (
            <div key={item.n} className="principle-item">
              <span className="principle-num">{item.n}</span>
              <span className="principle-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MensagemTawhid() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">التوحيد</div>
        <h2 className="section-title">Tawhid — A Unicidade</h2>
        <div className="section-line" />
      </div>
      <div className="content-block">
        <div className="content-subtitle">O Fio Condutor de Toda a Revelação</div>
        <p className="content-text">
          Tawhid é o conceito mais fundamental do Islam. Significa a absoluta unicidade de Allah.
          Não há dualidade, não há trindade, não há panteão. Há Um único Criador, e tudo que existe
          emana da Sua vontade.
        </p>
        <p className="content-text">
          Este conceito não começou com Muhammad ﷺ. Começou com o primeiro ser humano. Adão já era
          submisso a Allah. Noé pregou Tawhid ao seu povo. Abraão destruiu os ídolos do seu próprio pai.
          Moisés libertou os Filhos de Israel e trouxe a Torah. Jesus curou os doentes e reafirmou o
          monoteísmo puro. Cada um deles trouxe a mesma essência.
        </p>
      </div>
      <Quote
        text="Dizei: Cremos em Allah e no que nos foi revelado, e no que foi revelado a Abraão, Ismael, Isaac, Jacó e às tribos, e no que foi concedido a Moisés e a Jesus, e no que foi dado aos profetas por seu Senhor. Não fazemos distinção entre nenhum deles, e a Ele nos submetemos."
        source="Alcorão, Surata Al-Baqarah 2:136"
      />
      <div className="content-block">
        <div className="content-subtitle">Por Que Múltiplos Mensageiros?</div>
        <p className="content-text">
          Se a mensagem é uma só, por que Allah não enviou um único livro definitivo desde o início?
          A resposta islâmica é profunda: a humanidade não estava pronta. Cada povo, em cada época,
          tinha um nível diferente de compreensão. Allah, na Sua sabedoria, adaptou a forma da mensagem
          — não a essência — ao povo que a receberia.
        </p>
      </div>
      <KeyConcept
        title="Conceito-Chave: Revelação Progressiva"
        text="A Torah estabeleceu a lei. O Evangelho restaurou a misericórdia. O Alcorão completou e preservou. Não são livros concorrentes — são capítulos da mesma história."
      />
      <div className="content-block">
        <div className="content-subtitle">Shahada — A Declaração</div>
        <p className="content-text">
          O ponto de entrada no Islam é a Shahada: <em style={{color: GOLD}}>"Lā ilāha illā-llāh, Muḥammadun rasūlu-llāh"</em> —
          Não há divindade exceto Allah, e Muhammad é Seu mensageiro.
        </p>
        <p className="content-text">
          Esta frase contém dois componentes inseparáveis: a afirmação do monoteísmo (Tawhid) e o
          reconhecimento do mensageiro final. Ambos são necessários — sem Tawhid, não há Islam;
          sem Muhammad, não há acesso à revelação final.
        </p>
      </div>
    </div>
  );
}

function MensagemEscrituras() {
  const [active, setActive] = useState("torah");
  const books = [
    { id: "torah",  label: "Torah — Moisés",    arabic: "التوراة" },
    { id: "injil",  label: "Evangelho — Jesus",  arabic: "الإنجيل" },
    { id: "quran",  label: "Alcorão — Muhammad", arabic: "القرآن" },
  ];
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الكتب المقدسة</div>
        <h2 className="section-title">As Escrituras Sagradas</h2>
        <div className="section-line" />
      </div>
      <div className="scriptures-nav">
        {books.map(b => (
          <button key={b.id} className={`scripture-btn ${active === b.id ? "active" : ""}`} onClick={() => setActive(b.id)}>
            {b.label}
          </button>
        ))}
      </div>

      {active === "torah" && (
        <div className="fade-in">
          <div className="content-block">
            <div className="content-subtitle">Escravidão e Libertação</div>
            <p className="content-text">Os Filhos de Israel passaram cerca de 400 anos sob escravidão egípcia. Quando Moisés os libertou, eles eram um povo sem identidade própria, sem sistema legal, sem estrutura social. A Torah veio como um manual de civilização — não apenas religião, mas código civil, criminal, alimentar, familiar, econômico.</p>
          </div>
          <Quote text="Revelamos a Torah contendo orientação e luz. Os profetas que se submeteram a Allah julgavam por ela os judeus." source="Alcorão, Surata Al-Ma'idah 5:44" />
          <KeyConcept title="Tahrif — A Distorção" text="O Islam ensina que a Torah original foi genuinamente revelada por Allah, mas sofreu alterações ao longo dos séculos. O Alcorão veio como 'Muhaymin' — o guardião e critério pelo qual se pode distinguir o que foi preservado do que foi alterado." />
        </div>
      )}

      {active === "injil" && (
        <div className="fade-in">
          <div className="content-block">
            <div className="content-subtitle">Jesus na Visão Islâmica</div>
            <p className="content-text">Aqui está algo que surpreende a maioria dos cristãos: os muçulmanos amam Jesus. 'Isa ibn Maryam é um dos profetas mais reverenciados no Islam. Mencionado por nome 25 vezes no Alcorão. Sua mãe, Maryam, tem uma surata inteira dedicada a ela.</p>
            <p className="content-text">O Islam confirma o nascimento virginal, seus milagres e o Evangelho como revelação divina. O que não aceita é a divindade de Jesus — para o muçulmano, Jesus é um ser humano escolhido por Allah como profeta, não Deus.</p>
          </div>
          <Quote text="O Messias nunca desdenhou ser servo de Allah, nem os anjos mais próximos." source="Alcorão, Surata An-Nisa 4:172" />
          <div className="content-block">
            <div className="content-subtitle">O Que Aconteceu Depois</div>
            <p className="content-text">O Islam ensina que Jesus não foi crucificado — Allah o elevou aos céus. Após sua partida, Paulo de Tarso introduziu conceitos como a divindade de Cristo e a Trindade. O Concílio de Niceia em 325 d.C. oficializou certas doutrinas. A mensagem original — monoteísmo puro — foi gradualmente substituída por teologia humana.</p>
          </div>
        </div>
      )}

      {active === "quran" && (
        <div className="fade-in">
          <div className="content-block">
            <div className="content-subtitle">A Revelação Final</div>
            <p className="content-text">Muhammad ﷺ nasceu em 570 d.C. em Meca. Iletrado, era conhecido como Al-Amin (O Confiável). Aos 40 anos, na Caverna de Hira, o anjo Jibril trouxe as primeiras palavras do Alcorão.</p>
          </div>
          <Quote text="Lê! Em nome do teu Senhor que criou. Criou o ser humano de um coágulo. Lê! E teu Senhor é O Mais Generoso." source="Alcorão, Surata Al-'Alaq 96:1-3 — Primeira revelação" />
          <div className="content-block">
            <p className="content-text"><strong style={{color: GOLD}}>Preservação:</strong> O Alcorão é o único livro sagrado preservado letra por letra desde sua revelação há mais de 1.400 anos. O texto árabe que você lê hoje é idêntico ao que Muhammad recitou.</p>
            <p className="content-text"><strong style={{color: GOLD}}>Memorização:</strong> Milhões de pessoas memorizaram o Alcorão completo. Mesmo que todos os exemplares físicos fossem destruídos, o Alcorão poderia ser reconstruído da memória humana.</p>
            <p className="content-text"><strong style={{color: GOLD}}>Universalidade:</strong> Enquanto a Torah foi para Israel e Jesus foi enviado aos judeus, o Alcorão é para toda a humanidade, em todos os tempos.</p>
          </div>
          <Quote text="Nós revelamos a Mensagem e Nós a preservaremos." source="Alcorão, Surata Al-Hijr 15:9" />
        </div>
      )}
    </div>
  );
}

function MensagemProfetas() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الأنبياء</div>
        <h2 className="section-title">Os Profetas</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{marginBottom: 32, textAlign: "center"}}>
        O Islam reconhece 25 profetas mencionados no Alcorão — todos enviados com a mesma mensagem essencial: Tawhid.
      </p>
      {prophetsData.map((p) => (
        <div key={p.name} className="prophet-card" style={{borderLeftColor: p.color + "44"}}>
          <div className="prophet-header">
            <span className="prophet-name">{p.name}</span>
            <span className="prophet-arabic">{p.arabic}</span>
            <span className="prophet-era">{p.era}</span>
          </div>
          <div className="prophet-role">{p.role}</div>
          <p className="prophet-desc">{p.desc}</p>
          <div className="prophet-key">{p.key}</div>
        </div>
      ))}
    </div>
  );
}

function MensagemTimeline() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">التاريخ</div>
        <h2 className="section-title">Linha do Tempo</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 40}}>
        Da criação de Adão ao falecimento do Profeta ﷺ — a história contínua da revelação.
      </p>
      <div className="timeline-wrap">
        <div className="timeline-line" />
        {timelineData.map((item, i) => (
          <div key={i} className={`tl-item ${item.side}`}>
            <div className="tl-dot" />
            <div className="tl-content">
              <div className="tl-era">{item.era}</div>
              <div className="tl-event">{item.event}</div>
              {item.scripture !== "—" && <div className="tl-scripture">{item.scripture}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuranExplorador() {
  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <QuranExplorer />
    </div>
  );
}

function QuranCruzamentos() {
  const entries = Object.entries(crossRefs).slice(0, 30);
  const badgeColor = (t) => {
    if (t === "confirms") return "#2D6B4F";
    if (t === "corrects") return "#A0522D";
    if (t === "expands") return "#4A6FA5";
    return "#6B5B8A";
  };
  const badgeLabel = (t) => {
    if (t === "confirms") return "Confirma";
    if (t === "corrects") return "Corrige";
    if (t === "expands") return "Expande";
    return "Paralelo";
  };
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">المراجع المتقاطعة</div>
        <h2 className="section-title">Cruzamentos das Escrituras</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{marginBottom: 32, textAlign: "center"}}>
        Versículos do Alcorão lado a lado com seus paralelos na Torah e no Evangelho.
      </p>
      {entries.map(([key, data]) => (
        <div key={key} className="cref-card">
          <div className="cref-key">Alcorão {key}</div>
          <div className="cref-topic">{data.topic}</div>
          {data.refs.map((ref, i) => (
            <div key={i} className="cref-ref">
              <div className="cref-book">{ref.book} {ref.chapter}:{ref.verse}</div>
              <div className="cref-badge" style={{background: badgeColor(ref.connection_type) + "22", color: badgeColor(ref.connection_type), borderColor: badgeColor(ref.connection_type) + "44"}}>
                {badgeLabel(ref.connection_type)}
              </div>
              <div className="cref-text">"{ref.text}"</div>
              {ref.note && <div className="cref-note">{ref.note}</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SistemaPilares() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الأركان الخمسة</div>
        <h2 className="section-title">Os 5 Pilares do Islam</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 32}}>
        Os 5 Pilares são as práticas fundamentais que estruturam a vida de um muçulmano.
        São o esqueleto da fé em ação.
      </p>
      <div className="pillars-grid">
        {pillarsData.map((p) => (
          <div key={p.num} className="pillar-card">
            <div className="pillar-num">{p.num}</div>
            <div className="pillar-arabic">{p.arabic}</div>
            <div className="pillar-title">{p.title}</div>
            <div className="pillar-desc">{p.desc}</div>
          </div>
        ))}
      </div>
      <div className="content-block" style={{marginTop: 40}}>
        <div className="content-subtitle">Por Que Cinco?</div>
        <p className="content-text">
          Os 5 Pilares cobrem as dimensões essenciais da existência humana: identidade (Shahada),
          tempo (Salah), riqueza (Zakah), corpo (Sawm) e espaço (Hajj). Juntos, formam um sistema
          completo de devoção que integra cada aspecto da vida cotidiana com a consciência de Allah.
        </p>
      </div>
    </div>
  );
}

function SistemaArtigos() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">أركان الإيمان</div>
        <h2 className="section-title">Os 6 Artigos de Fé</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 32}}>
        Se os 5 Pilares são o que um muçulmano <em>faz</em>, os 6 Artigos são o que um muçulmano <em>acredita</em>.
        São as verdades fundamentais que formam a Aqidah (teologia islâmica).
      </p>
      <div className="articles-grid">
        {articlesData.map((a) => (
          <div key={a.num} className="article-card">
            <div className="article-num">{a.num}</div>
            <div>
              <div className="article-title">{a.title}</div>
              <div className="article-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="content-block" style={{marginTop: 40}}>
        <div className="content-subtitle">Iman — A Fé Completa</div>
        <p className="content-text">
          No Islam, fé não é apenas acreditar em Deus. É um sistema completo: crença em Allah,
          nos Seus mensageiros, nos Seus livros, nos Seus anjos, no Dia Final e no Qadar (decreto divino).
          Estes seis elementos formam o que é chamado de Iman — fé plena e articulada.
        </p>
      </div>
    </div>
  );
}

function SistemaRoteiro() {
  const phases = [
    {
      num: "Fase 01",
      title: "Contexto Histórico",
      desc: "Antes de ler o Alcorão, entenda o mundo que o recebeu. A Arábia pré-islâmica, a vida do Profeta, o contexto de cada revelação.",
      items: ["'O Profeta Muhammad' — Martin Lings", "'No Footsteps of the Prophet' — Tariq Ramadan", "Canal Bayyinah TV — Nouman Ali Khan"],
    },
    {
      num: "Fase 02",
      title: "Primeiras Suratas",
      desc: "Comece pelas suratas mais curtas (Juz Amma — últimas 30 suratas). São as primeiras reveladas. Linguagem direta, impacto imediato.",
      items: ["Surata Al-Fatiha (1) — A abertura", "Suratas Al-Ikhlas (112), Al-Falaq (113), An-Nas (114)", "Use a tradução de Helmi Nasr (português)"],
    },
    {
      num: "Fase 03",
      title: "Cruzamentos",
      desc: "Leia o Alcorão ao lado da Torah e do Evangelho. Os paralelos revelam a continuidade da mensagem de forma que nenhum texto sozinho consegue.",
      items: ["Use a aba Cruzamentos neste site", "Compara: Gênesis 1 + Alcorão 2:30-33", "Compara: João 16:7 + Alcorão 61:6"],
    },
    {
      num: "Fase 04",
      title: "Tafsir (Exegese)",
      desc: "Após ler o texto, vá fundo no significado. Tafsir é a ciência de interpretar o Alcorão com as ferramentas corretas.",
      items: ["Tafsir Ibn Kathir (traduzido)", "Tafsir Al-Sa'di (mais acessível)", "Canal Dr. Yasir Qadhi no YouTube"],
    },
    {
      num: "Fase 05",
      title: "Comunidade",
      desc: "Conhecimento sem comunidade é incompleto. Encontre muçulmanos. Visite uma mesquita. Tire dúvidas com pessoas reais.",
      items: ["Encontre a mesquita mais próxima", "Instituto Islâmico no Brasil (São Paulo, Rio)", "Siga @sheikh.rodrigo no Instagram"],
    },
  ];

  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">العلم</div>
        <h2 className="section-title">Roteiro de Estudo</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 40}}>
        Cinco fases para ir do zero a um entendimento sólido do Islam. Cada fase constrói sobre a anterior.
      </p>
      {phases.map((phase) => (
        <div key={phase.num} className="study-phase">
          <div className="study-phase-num">{phase.num}</div>
          <div>
            <div className="study-phase-title">{phase.title}</div>
            <div className="study-phase-desc">{phase.desc}</div>
            <div className="study-phase-items">
              {phase.items.map((item, i) => (
                <div key={i} className="study-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SaberGlossario() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">المصطلحات</div>
        <h2 className="section-title">Glossário</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 32}}>
        Os termos essenciais do Islam que você vai encontrar ao estudar. Em árabe, com definição em português.
      </p>
      <div className="glossary-grid">
        {glossaryData.map((g) => (
          <div key={g.term} className="gloss-card">
            <div className="gloss-term">{g.term}</div>
            <div className="gloss-arabic">{g.arabic}</div>
            <div className="gloss-def">{g.def}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaberFaq() {
  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الأسئلة</div>
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="section-line" />
      </div>
      <p className="content-text" style={{textAlign: "center", marginBottom: 40}}>
        As perguntas mais comuns — respondidas com honestidade, sem evasão.
      </p>
      <div>
        {faqData.map((item, i) => (
          <FaqItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
      <div className="content-block" style={{marginTop: 48}}>
        <div className="content-subtitle">Tem Outra Pergunta?</div>
        <p className="content-text">
          O Islam é uma fé que incentiva perguntas. "Iqra" — a primeira palavra revelada — significa "Lê".
          Nenhuma pergunta honesta é proibida. Se você tem dúvidas que não estão aqui, explore o
          Explorador do Alcorão ou procure uma mesquita próxima.
        </p>
      </div>
    </div>
  );
}

function MovimentoMissao() {
  const principles = [
    { n: "01", title: "Nunca atacar", text: "Nenhuma crítica a outras religiões. Apresentar o Islam, não comparar para diminuir." },
    { n: "02", title: "Nunca pressionar", text: "A fé é uma jornada. KALAM planta sementes. O que germina, germina no tempo certo." },
    { n: "03", title: "Nunca comprometer qualidade", text: "Cada conteúdo produzido deve ter o mesmo nível de excelência que o movimento prega." },
    { n: "04", title: "Contexto antes de conteúdo", text: "Antes de qualquer versículo do Alcorão, dar o contexto histórico e humano." },
    { n: "05", title: "Beleza como porta", text: "A estética não é supérflua — é a primeira linguagem que abre corações fechados." },
    { n: "06", title: "Identidade islâmica com orgulho", text: "KALAM não pede desculpa por ser islâmico. Apresenta com clareza e confiança." },
    { n: "07", title: "Brasil primeiro", text: "Construir aqui. Exportar depois. A base brasileira é o laboratório do movimento global." },
  ];

  return (
    <div className="section fade-in">
      <div className="missao-hero">
        <div className="missao-arabic">كلام</div>
        <h2 className="missao-title">KALAM BRASIL</h2>
        <p className="missao-sub">
          Um movimento de clareza. Não de conversão. De apresentação do Islam como ele é —
          não como a mídia distorceu, não como extremistas deturparam.
        </p>
      </div>

      <div className="content-block">
        <div className="content-subtitle">O Problema</div>
        <p className="content-text">
          A imagem do Islam no Brasil foi construída por Hollywood, por coberturas de guerra e por
          vozes que não representam os 1,9 bilhão de muçulmanos no mundo. O resultado: a maioria
          dos brasileiros nunca abriu o Alcorão, mas já tem uma opinião formada sobre ele.
        </p>
        <p className="content-text">
          70% dos brasileiros acreditam em um Criador. Acreditam que Abraão, Moisés e Jesus existiram.
          Acreditam que existe uma verdade por trás da realidade. Eles já compartilham a base — o que
          falta é apresentar o capítulo final.
        </p>
      </div>

      <Quote
        text="A janela está aberta. A maioria já acredita no essencial. O que falta é a apresentação honesta e bela do que o Islam realmente diz."
        source="— Fundação KALAM"
      />

      <div className="content-block">
        <div className="content-subtitle">O Que KALAM É</div>
        <p className="content-text">
          KALAM não é uma organização religiosa. Não é uma mesquita digital. É um <strong style={{color: GOLD}}>movimento de clareza</strong> —
          conteúdo de qualidade que apresenta o Islam através das lentes que o brasileiro já entende:
          filosofia, história, ciência, estética e narrativa.
        </p>
        <p className="content-text">
          O avatar central: um brasileiro de 20 a 35 anos. Seguidor de Marçal. Cristão ou agnóstico.
          Nunca abriu o Alcorão. Mas está buscando algo mais sólido do que o que tem.
        </p>
      </div>

      <div className="content-block" style={{marginTop: 48}}>
        <div className="content-subtitle">Os 5 Gatilhos Psicológicos</div>
        <p className="content-text" style={{marginBottom: 24}}>
          Kalam não usa argumentação. Usa os mecanismos que já existem no cérebro humano:
        </p>
        {[
          {
            num: "1",
            title: "Reconhecimento — não confronto",
            desc: "\"Tudo que você acredita é verdade. Só falta mais.\" O cérebro tem um mecanismo de defesa automático contra informação que contradiz suas crenças (backfire effect). Quando alguém diz 'você está errado', a pessoa se fecha. Quando diz 'você está certo — e existe mais', a defesa se desativa.",
            quote: "Kalam nunca confronta. Kalam confirma e completa.",
          },
          {
            num: "2",
            title: "Demonstração de Caráter — não pregação",
            desc: "99% das conversões ao Islam na história aconteceram porque alguém observou um muçulmano agir de forma surpreendente — não porque ouviu um argumento. Khadija não se converteu depois de uma palestra. Converteu-se porque conhecia o homem.",
            quote: "O caráter demonstrado vale mais que mil argumentos.",
          },
          {
            num: "3",
            title: "Beleza como portal",
            desc: "Beleza não é superficialidade. É o portal através do qual a verdade entra. O Islam tem 1.400 anos de patrimônio estético — caligrafia, geometria, arquitetura, recitação — que nunca foi apresentado ao brasileiro com produção de nível mundial.",
            quote: "A beleza é o primeiro convite. A verdade é o que a pessoa encontra quando entra.",
          },
          {
            num: "4",
            title: "Pertencimento antes de crença",
            desc: "As pessoas não aderem a movimentos porque concordam com tudo. Aderem porque pertencem. A crença se forma depois do pertencimento, não antes. Kalam acolhe o curioso, o explorador, o questionador.",
            quote: "A pessoa precisa ter um lugar à mesa antes de precisar se posicionar.",
          },
          {
            num: "5",
            title: "A História Incompleta",
            desc: "O motivo mais citado em pesquisas acadêmicas para conversão ao Islam é clareza. Tawhid — a unicidade absoluta de Deus — é simples, lógico, sem ambiguidade. A pessoa criada numa teologia complexa ouve a versão simples e completa — e o cérebro encaixa.",
            quote: "Não é conversão. É reconhecimento. A Fitra se ativando.",
          },
        ].map((g) => (
          <div key={g.num} className="gatilho-card">
            <span className="gatilho-num">{g.num}</span>
            <div>
              <div className="gatilho-title">{g.title}</div>
              <div className="gatilho-desc">{g.desc}</div>
              <div className="gatilho-quote">"{g.quote}"</div>
            </div>
          </div>
        ))}
      </div>

      <div className="content-block">
        <div className="content-subtitle">7 Princípios Inegociáveis</div>
        <div className="principles-list">
          {principles.map((p) => (
            <div key={p.n} className="principle-item">
              <span className="principle-num">{p.n}</span>
              <span className="principle-text">
                <strong>{p.title}</strong> — {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="content-block">
        <div className="content-subtitle">A Jornada do Conteúdo</div>
        <p className="content-text">
          O conteúdo do KALAM segue uma progressão estratégica. O primeiro contato é sempre filosófico
          e universal — sem linguagem religiosa, sem pressão. Depois, a ponte para as escrituras.
          Depois, o Islam como sistema completo. Depois, a beleza da prática. Finalmente, a identidade.
        </p>
        <p className="content-text">
          A revelação do Islam acontece em camadas, no tempo certo de cada pessoa.
        </p>
      </div>
    </div>
  );
}

function MovimentoApoiar() {
  const options = [
    { icon: "📤", title: "Compartilhar", desc: "Envie este site para alguém que está buscando. A semente mais poderosa é a indicação de quem você confia." },
    { icon: "🌍", title: "Traduzir", desc: "Quer ajudar a traduzir o conteúdo para inglês, espanhol ou árabe? O movimento precisa ser global." },
    { icon: "✍️", title: "Contribuir", desc: "Você é escritor, designer, videasta ou pesquisador? Entre em contato. O KALAM é feito por quem acredita." },
    { icon: "🤲", title: "Financiar", desc: "O movimento se sustenta por doações de quem acredita na missão. Cada real vai direto para produção de conteúdo." },
  ];

  return (
    <div className="section fade-in">
      <div className="section-header">
        <div className="section-arabic">الدعم</div>
        <h2 className="section-title">Apoiar o Movimento</h2>
        <div className="section-line" />
      </div>

      <p className="content-text" style={{textAlign: "center", marginBottom: 40, fontSize: 18}}>
        KALAM é construído por quem acredita que o Brasil precisa conhecer o Islam como ele é.
        Não importa o quanto — o que importa é a intenção.
      </p>

      <div className="apoiar-grid">
        {options.map((o) => (
          <div key={o.title} className="apoiar-card">
            <span className="apoiar-icon">{o.icon}</span>
            <div className="apoiar-title">{o.title}</div>
            <div className="apoiar-desc">{o.desc}</div>
          </div>
        ))}
      </div>

      <Quote
        text="Quem matar uma alma inocente, é como se tivesse matado toda a humanidade. E quem salvar uma alma, é como se tivesse salvo toda a humanidade."
        source="Alcorão, Surata Al-Ma'idah 5:32"
      />

      <div className="content-block" style={{marginTop: 40, textAlign: "center"}}>
        <div className="content-subtitle" style={{textAlign: "center", borderLeft: "none", paddingLeft: 0}}>Uma Última Palavra</div>
        <p className="content-text" style={{textAlign: "center", maxWidth: 520, margin: "0 auto"}}>
          Se este site abriu uma janela — mesmo que pequena — sobre o Islam, compartilhe.
          O maior ato de apoio ao KALAM é colocar este conteúdo na frente de quem está buscando.
        </p>
        <p className="content-text" style={{textAlign: "center", color: GOLD, marginTop: 16, fontSize: 20, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic"}}>
          "Kalamullah — A Palavra de Allah. O Original."
        </p>
      </div>
    </div>
  );
}

// ─── RENDER LOGIC ────────────────────────────────────────────────────────────

function TabContent({ activeTab, activeSub, onNavigate }) {
  if (activeTab === "origem") {
    if (activeSub === "lei") return <OrigemLei />;
    return <OrigemComecar onNavigate={onNavigate} />;
  }
  if (activeTab === "mensagem") {
    if (activeSub === "tawhid")       return <MensagemTawhid />;
    if (activeSub === "escrituras")   return <MensagemEscrituras />;
    if (activeSub === "profetas")     return <MensagemProfetas />;
    if (activeSub === "pontes")       return <MensagemPontes />;
    if (activeSub === "manuscritos")  return <MensagemManuscritos />;
    return <MensagemTimeline />;
  }
  if (activeTab === "quran") {
    if (activeSub === "explorador") return <QuranExplorador />;
    return <QuranCruzamentos />;
  }
  if (activeTab === "sistema") {
    if (activeSub === "pilares")  return <SistemaPilares />;
    if (activeSub === "artigos")  return <SistemaArtigos />;
    if (activeSub === "islam-os") return <SistemaOS />;
    return <SistemaRoteiro />;
  }
  if (activeTab === "saber") {
    if (activeSub === "glossario") return <SaberGlossario />;
    if (activeSub === "hadiths")   return <SaberHadiths />;
    if (activeSub === "questoes")  return <SaberQuestoes />;
    return <SaberFaq />;
  }
  if (activeTab === "movimento") {
    if (activeSub === "missao")    return <MovimentoMissao />;
    if (activeSub === "historias") return <MovimentoHistorias />;
    return <MovimentoApoiar />;
  }
  return null;
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState("origem");
  const [activeSub, setActiveSub] = useState("lei");
  const contentRef = useRef(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveSub(SUB_TABS[tabId][0].id);
    contentRef.current?.scrollTo(0, 0);
  };

  const handleSubChange = (subId) => {
    setActiveSub(subId);
    contentRef.current?.scrollTo(0, 0);
  };

  const navigate = (tabId, subId) => {
    setActiveTab(tabId);
    setActiveSub(subId || SUB_TABS[tabId][0].id);
    contentRef.current?.scrollTo(0, 0);
  };

  const isQuranExplorer = activeTab === "quran" && activeSub === "explorador";

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <span className="logo-arabic">كلام</span>
          <div className="logo-divider" />
          <span className="logo-text">KALAM <span>BRASIL</span></span>
        </div>

        <nav className="main-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`main-tab ${activeTab === t.id ? "active" : ""}`}
              onClick={() => handleTabChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Sub-tabs */}
      <div className="subtabs-bar">
        {SUB_TABS[activeTab].map((st) => (
          <button
            key={st.id}
            className={`sub-tab ${activeSub === st.id ? "active" : ""}`}
            onClick={() => handleSubChange(st.id)}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main
        className="content"
        ref={contentRef}
        style={isQuranExplorer ? {overflow: "hidden", display: "flex", flexDirection: "column"} : {}}
      >
        <TabContent activeTab={activeTab} activeSub={activeSub} onNavigate={navigate} />
      </main>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`mobile-nav-btn ${activeTab === t.id ? "active" : ""}`}
            onClick={() => handleTabChange(t.id)}
            aria-label={t.label}
          >
            <span className="mobile-nav-icon">{t.icon}</span>
            <span className="mobile-nav-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
