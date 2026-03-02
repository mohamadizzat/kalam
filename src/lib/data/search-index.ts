// ── SEARCH INDEX ─────────────────────────────────────────────────────────────
// Comprehensive search index (~600 entries) for the BUSCA agent.
// Aggregates all content sources into a unified, searchable format.

import { surahs } from '@/lib/data/surahs'
import { namesOfGod } from '@/lib/data/names-of-god'
import { TRAILS } from '@/lib/data/trails'
import { hadiths } from '@/lib/data/hadiths'
import { companions } from '@/lib/data/companions'
import { women } from '@/lib/data/women'
import { bridgeProphets } from '@/lib/data/bridge-prophets'
import { bridgeThemes } from '@/lib/data/bridge-themes'
import { chapters } from '@/lib/data/biblia-do-kalam-chapters'
import { challenges } from '@/lib/data/challenges'
import { surahStudies } from '@/lib/data/surah-studies'
import { scriptureProofs } from '@/lib/data/scripture-proofs'
import { glossary } from '@/lib/data/glossary'
import { mentalHealthTopics } from '@/lib/data/mental-health'
import { seerahChapters } from '@/lib/data/seerah'
import { SLEEP_STORIES } from '@/lib/data/sleep-stories'
import { prophetStoriesExpanded } from '@/content/prophetStories'
import { hardQuestionsData } from '@/content/hardQuestions'
import { surpriseFactsData } from '@/content/surpriseFacts'

// ── INTERFACE ────────────────────────────────────────────────────────────────

export interface SearchEntry {
  id: string
  title: string
  description: string
  keywords: string[]
  href: string
  category: 'Comece Aqui' | 'Explore' | 'Estude' | 'Pratique' | 'Reflita' | 'Kids'
  icon: string // lucide icon name
}

// ── CATEGORY MAPPING ─────────────────────────────────────────────────────────
// prophet/bridge/hard-question -> "Comece Aqui"
// viral apps/facts/discovery -> "Explore"
// surahs/hadiths/studies/vocabulary/biblia/seerah -> "Estude"
// duas/dhikr/routines/challenges -> "Pratique"
// journal/mood/mental-health/sleep -> "Reflita"
// kids content -> "Kids"

// ── STATIC PAGES ─────────────────────────────────────────────────────────────

const STATIC_ENTRIES: SearchEntry[] = [
  // Main pages
  { id: 'page-home', title: 'Inicio', description: 'Pagina principal do Kalam', keywords: ['home', 'inicio', 'principal'], href: '/', category: 'Explore', icon: 'Home' },
  { id: 'page-mensagem', title: 'A Mensagem', description: 'A mensagem do Islam explicada', keywords: ['mensagem', 'islam', 'introducao', 'comeco'], href: '/a-mensagem', category: 'Comece Aqui', icon: 'MessageCircle' },
  { id: 'page-profetas', title: 'Os Profetas', description: 'Historias dos profetas', keywords: ['profetas', 'prophets', 'historias', 'adao', 'noe', 'abraao', 'moises', 'jesus', 'muhammad'], href: '/os-profetas', category: 'Comece Aqui', icon: 'Users' },
  { id: 'page-ponte', title: 'A Ponte', description: 'Paralelos entre Biblia e Alcorao', keywords: ['ponte', 'biblia', 'bible', 'conexao', 'comparacao', 'cristianismo'], href: '/a-ponte', category: 'Comece Aqui', icon: 'Layers' },
  { id: 'page-perguntas', title: 'Perguntas Dificeis', description: 'Respostas honestas a perguntas dificeis', keywords: ['perguntas', 'duvidas', 'violencia', 'mulheres', 'poligamia', 'jihad', 'dificeis', 'objecoes'], href: '/perguntas', category: 'Comece Aqui', icon: 'HelpCircle' },

  // Estude
  { id: 'page-palavra', title: 'A Palavra', description: 'Explore o Sagrado Alcorao', keywords: ['quran', 'alcorao', 'suratas', 'suras', 'versiculos', 'palavra'], href: '/a-palavra', category: 'Estude', icon: 'BookOpen' },
  { id: 'page-trilhas', title: 'Trilhas', description: 'Trilhas guiadas de aprendizado', keywords: ['trilhas', 'jornada', 'aprendizado', 'caminho', 'curso'], href: '/trilhas', category: 'Estude', icon: 'Route' },
  { id: 'page-estudos', title: 'Estudos', description: 'Estudos aprofundados', keywords: ['estudos', 'aprofundamento', 'analise', 'tafsir'], href: '/a-palavra/estudo', category: 'Estude', icon: 'BookMarked' },
  { id: 'page-biblia-kalam', title: 'A Biblia do Kalam', description: 'Guia completo de referencia', keywords: ['biblia do kalam', 'guia', 'referencia', 'completo'], href: '/a-biblia-do-kalam', category: 'Estude', icon: 'BookText' },
  { id: 'page-hadiths', title: 'Hadiths', description: 'Ditos e tradicoes do Profeta', keywords: ['hadiths', 'hadith', 'tradicao', 'profeta', 'ditos'], href: '/a-palavra/hadiths', category: 'Estude', icon: 'BookOpen' },
  { id: 'page-seerah', title: 'Seerah', description: 'Biografia do Profeta Muhammad', keywords: ['seerah', 'biografia', 'profeta', 'muhammad', 'vida'], href: '/a-jornada/seerah', category: 'Estude', icon: 'Users' },
  { id: 'page-companheiros', title: 'Companheiros', description: 'Historias dos companheiros', keywords: ['companheiros', 'sahaba', 'abu bakr', 'omar', 'uthman', 'ali'], href: '/a-jornada/companheiros', category: 'Estude', icon: 'Users' },
  { id: 'page-mulheres', title: 'Mulheres no Islam', description: 'Grandes mulheres na historia do Islam', keywords: ['mulheres', 'feminino', 'khadija', 'aisha', 'maryam', 'fatima'], href: '/a-jornada/mulheres', category: 'Explore', icon: 'Heart' },
  { id: 'page-comprovacoes', title: 'Comprovacoes Escriturais', description: '30 paralelos reais entre Quran, Torah, Salmos e Evangelhos', keywords: ['comprovacoes', 'provas', 'escrituras', 'biblia', 'torah', 'evangelhos', 'paralelos', 'convergencia'], href: '/comprovacoes', category: 'Estude', icon: 'BookOpen' },
  { id: 'page-glossario', title: 'Glossario', description: 'Vocabulario islamico em portugues', keywords: ['glossario', 'vocabulario', 'termos', 'arabe', 'palavras'], href: '/a-palavra/glossario', category: 'Estude', icon: 'Languages' },
  { id: 'page-arabe', title: 'Arabe', description: 'Aprenda o basico do arabe', keywords: ['arabe', 'idioma', 'lingua', 'aprender arabe', 'alfabeto'], href: '/a-presenca/arabe', category: 'Estude', icon: 'Languages' },
  { id: 'page-busca-quran', title: 'Busca no Quran', description: 'Busque versiculos no Alcorao', keywords: ['busca', 'pesquisa', 'quran', 'versiculo', 'procurar'], href: '/a-palavra/busca', category: 'Estude', icon: 'Search' },
  { id: 'page-parabolas', title: 'Parabolas', description: 'Parabolas do Alcorao', keywords: ['parabolas', 'historias', 'narrativas', 'quran'], href: '/a-palavra/parabolas', category: 'Estude', icon: 'BookOpen' },
  { id: 'page-financas', title: 'Financas Islamicas', description: 'Financas no Islam', keywords: ['financas', 'halal', 'riba', 'juros', 'economia'], href: '/a-jornada/financas', category: 'Estude', icon: 'BookOpen' },

  // Pratique
  { id: 'page-presenca', title: 'A Presenca', description: 'Ferramentas de pratica espiritual', keywords: ['presenca', 'pratica', 'adoracao', 'ibadah'], href: '/a-presenca', category: 'Pratique', icon: 'Sun' },
  { id: 'page-dhikr', title: 'Dhikr', description: 'Contador de dhikr', keywords: ['dhikr', 'zikr', 'lembranca', 'contador', 'repeticao', 'subhanallah'], href: '/a-presenca/dhikr', category: 'Pratique', icon: 'Clock' },
  { id: 'page-duas', title: 'Duas', description: 'Suplicas categorizadas', keywords: ['duas', 'dua', 'suplica', 'oracao', 'pedido'], href: '/a-presenca/duas', category: 'Pratique', icon: 'Heart' },
  { id: 'page-salah', title: 'Salah', description: 'Guia de oracao', keywords: ['salah', 'salat', 'oracao', 'namaz', 'rezar', 'reza'], href: '/a-presenca/salah', category: 'Pratique', icon: 'Sun' },
  { id: 'page-aya-dia', title: 'Aya do Dia', description: 'Versiculo do dia com reflexao', keywords: ['aya', 'verso', 'dia', 'diario', 'versiculo'], href: '/aya-do-dia', category: 'Pratique', icon: 'Calendar' },
  { id: 'page-99-nomes', title: '99 Nomes', description: 'Os 99 Nomes de Allah', keywords: ['99 nomes', 'asma ul husna', 'allah', 'atributos'], href: '/a-presenca/99-nomes', category: 'Pratique', icon: 'Sparkles' },
  { id: 'page-flashcards', title: 'Flashcards', description: '99 Nomes de Allah em flashcards', keywords: ['flashcards', '99 nomes', 'allah', 'memorizacao', 'nomes'], href: '/a-presenca/flashcards', category: 'Pratique', icon: 'Languages' },
  { id: 'page-hifz', title: 'Hifz', description: 'Memorizacao do Quran', keywords: ['hifz', 'memorizacao', 'decorar', 'quran'], href: '/a-palavra/hifz', category: 'Pratique', icon: 'BookMarked' },
  { id: 'page-contemplacao', title: 'Contemplacao', description: 'Praticas de contemplacao', keywords: ['contemplacao', 'meditacao', 'reflexao', 'tafakkur'], href: '/a-presenca/contemplacao', category: 'Pratique', icon: 'Heart' },
  { id: 'page-contemplativo', title: 'Contemplative Companion', description: 'Mixer de audio para foco, calma e contemplacao', keywords: ['contemplativo', 'audio', 'mixer', 'foco', 'binaural', 'ambient', 'sanctuary', 'calma', 'sleep', 'dhikr', 'energia'], href: '/contemplativo', category: 'Pratique', icon: 'Sparkles' },
  { id: 'page-recitacao', title: 'Recitacao', description: 'Ouca o Quran com audio', keywords: ['recitacao', 'audio', 'ouvir', 'quran', 'recitar'], href: '/a-palavra/recitacao', category: 'Pratique', icon: 'Mic' },
  { id: 'page-ferramentas', title: 'Ferramentas', description: 'Todas as ferramentas em um lugar', keywords: ['ferramentas', 'tools', 'recursos', 'pratica'], href: '/ferramentas', category: 'Pratique', icon: 'Wrench' },
  { id: 'page-ramadan', title: 'Ramadan', description: 'Guia do Ramadan', keywords: ['ramadan', 'jejum', 'sawm', 'iftar'], href: '/a-jornada/ramadan', category: 'Pratique', icon: 'Calendar' },
  { id: 'page-zakat', title: 'Zakat', description: 'Calculadora e guia de Zakat', keywords: ['zakat', 'caridade', 'esmola', 'calculadora'], href: '/a-jornada/zakat', category: 'Pratique', icon: 'Heart' },
  { id: 'page-desafios', title: 'Desafios', description: 'Desafios de crescimento espiritual', keywords: ['desafios', 'metas', 'objetivos', 'crescimento'], href: '/a-jornada/desafios', category: 'Pratique', icon: 'Sparkles' },

  // Reflita
  { id: 'page-alma', title: 'A Alma', description: 'Jornada espiritual interior', keywords: ['alma', 'espiritualidade', 'interior', 'nafs'], href: '/a-alma', category: 'Reflita', icon: 'Heart' },
  { id: 'page-journal', title: 'Journal', description: 'Diario espiritual', keywords: ['journal', 'diario', 'escrita', 'reflexao', 'gratidao'], href: '/a-alma/journal', category: 'Reflita', icon: 'PenLine' },
  { id: 'page-rotina', title: 'Habitos', description: 'Rotina de praticas', keywords: ['rotina', 'habitos', 'diario', 'ritual'], href: '/a-alma/rotina', category: 'Reflita', icon: 'Clock' },
  { id: 'page-plano', title: 'Plano Diario', description: 'Planejamento espiritual diario', keywords: ['plano', 'diario', 'rotina', 'planejamento'], href: '/a-jornada/plano-diario', category: 'Reflita', icon: 'Calendar' },
  { id: 'page-saude-mental', title: 'Como Voce Esta', description: 'Islam e saude mental', keywords: ['saude mental', 'ansiedade', 'paz', 'bem-estar', 'como voce esta'], href: '/a-alma/saude-mental', category: 'Reflita', icon: 'Heart' },
  { id: 'page-progresso', title: 'Progresso', description: 'Seu progresso espiritual', keywords: ['progresso', 'conquistas', 'evolucao', 'avanco'], href: '/a-alma/progresso', category: 'Reflita', icon: 'Sparkles' },

  // Explore
  { id: 'page-sistema', title: 'O Sistema', description: 'O sistema do Islam explicado', keywords: ['sistema', 'pilares', 'islam', 'regras', 'principios'], href: '/o-sistema', category: 'Explore', icon: 'Sparkles' },
  { id: 'page-biblioteca', title: 'Biblioteca', description: 'Acervo de referencias', keywords: ['biblioteca', 'livros', 'referencias', 'recursos'], href: '/biblioteca', category: 'Explore', icon: 'Library' },
  { id: 'page-manifesto', title: 'Manifesto', description: 'O que o Kalam e e por que existe', keywords: ['manifesto', 'missao', 'visao', 'sobre', 'proposito'], href: '/manifesto', category: 'Explore', icon: 'FileText' },
  { id: 'page-mapa', title: 'Mapa', description: 'Mapa de todo o conteudo', keywords: ['mapa', 'navegacao', 'sitemap', 'conteudo'], href: '/mapa', category: 'Explore', icon: 'Compass' },
  { id: 'page-sobre', title: 'Sobre', description: 'Sobre o projeto Kalam', keywords: ['sobre', 'equipe', 'projeto', 'quem somos'], href: '/sobre', category: 'Explore', icon: 'Info' },
  { id: 'page-configuracoes', title: 'Configuracoes', description: 'Configuracoes do app', keywords: ['configuracoes', 'settings', 'preferencias', 'conta'], href: '/configuracoes', category: 'Explore', icon: 'Settings' },

  // Viral tools
  { id: 'page-nome-arabe', title: 'Seu Nome em Arabe', description: 'Descubra como seu nome fica em arabe', keywords: ['nome', 'arabe', 'caligrafia', 'traducao', 'seu nome'], href: '/ferramentas/seu-nome-em-arabe', category: 'Explore', icon: 'Languages' },
  { id: 'page-qual-profeta', title: 'Qual Profeta Te Inspira', description: 'Descubra qual profeta mais combina com voce', keywords: ['profeta', 'quiz', 'inspira', 'qual profeta', 'teste'], href: '/ferramentas/qual-profeta-te-inspira', category: 'Explore', icon: 'Users' },

  // A Ponte sub-pages
  { id: 'page-ponte-profeta', title: 'Ponte por Profeta', description: 'Comparacao por profeta', keywords: ['ponte', 'profeta', 'comparacao', 'biblia'], href: '/a-ponte/por-profeta', category: 'Comece Aqui', icon: 'Users' },
  { id: 'page-ponte-tema', title: 'Ponte por Tema', description: 'Comparacao por tema', keywords: ['ponte', 'tema', 'topico', 'comparacao'], href: '/a-ponte/por-tema', category: 'Comece Aqui', icon: 'Layers' },
  { id: 'page-ponte-versiculo', title: 'Ponte por Versiculo', description: 'Comparacao verso a verso', keywords: ['ponte', 'versiculo', 'verso', 'comparacao'], href: '/a-ponte/por-versiculo', category: 'Comece Aqui', icon: 'BookOpen' },

  // Kids
  { id: 'page-kids', title: 'Kids Hub', description: 'Conteudo para criancas', keywords: ['kids', 'criancas', 'infantil', 'filhos'], href: '/kids', category: 'Kids', icon: 'Star' },
  { id: 'page-kids-quiz', title: 'Quiz Kids', description: 'Quiz divertido para criancas', keywords: ['quiz', 'jogo', 'perguntas', 'kids', 'infantil'], href: '/kids/quiz', category: 'Kids', icon: 'Sparkles' },
  { id: 'page-kids-historias', title: 'Historias Kids', description: 'Historias dos profetas para criancas', keywords: ['historias', 'contos', 'profetas', 'kids'], href: '/kids/historias', category: 'Kids', icon: 'BookOpen' },
  { id: 'page-kids-atividades', title: 'Atividades Kids', description: 'Atividades educativas', keywords: ['atividades', 'pintar', 'colorir', 'kids'], href: '/kids/atividades', category: 'Kids', icon: 'PenLine' },
]

// ── DYNAMIC ENTRIES (from data files) ────────────────────────────────────────

function buildDynamicEntries(): SearchEntry[] {
  const entries: SearchEntry[] = []

  // ── Surahs (114 entries) ───────────────────────────────────────────────────
  for (const s of surahs) {
    entries.push({
      id: `surah-${s.number}`,
      title: `Surata ${s.number}: ${s.name}`,
      description: `${s.translation} — ${s.arabicName} — ${s.versesCount} versiculos (${s.revelationPlace})`,
      keywords: [s.name.toLowerCase(), s.translation.toLowerCase(), s.arabicName, `surata ${s.number}`, `surah ${s.number}`, s.revelationPlace.toLowerCase()],
      href: `/a-palavra/${s.number}`,
      category: 'Estude',
      icon: 'BookOpen',
    })
  }

  // ── 99 Names of God (99 entries) ───────────────────────────────────────────
  for (const n of namesOfGod) {
    entries.push({
      id: `name-${n.number}`,
      title: `${n.transliteration} — ${n.meaning}`,
      description: n.description.slice(0, 80),
      keywords: [n.transliteration.toLowerCase(), n.meaning.toLowerCase(), n.arabic, `nome ${n.number}`, '99 nomes'],
      href: `/a-presenca/99-nomes#${n.number}`,
      category: 'Pratique',
      icon: 'Sparkles',
    })
  }

  // ── Trails ─────────────────────────────────────────────────────────────────
  for (const t of TRAILS) {
    entries.push({
      id: `trail-${t.slug}`,
      title: `Trilha: ${t.title}`,
      description: t.subtitle,
      keywords: [t.title.toLowerCase(), t.theme.toLowerCase(), 'trilha', t.slug, t.arabicTitle],
      href: `/trilhas/${t.slug}`,
      category: 'Estude',
      icon: 'Route',
    })
  }

  // ── Hadiths ────────────────────────────────────────────────────────────────
  for (const h of hadiths) {
    entries.push({
      id: `hadith-${h.id}`,
      title: `Hadith: ${h.translation.slice(0, 50)}...`,
      description: `${h.narrator} — ${h.source}`,
      keywords: [h.translation.slice(0, 40).toLowerCase(), h.narrator.toLowerCase(), h.category, 'hadith', 'dito'],
      href: `/a-palavra/hadiths#${h.id}`,
      category: 'Estude',
      icon: 'BookOpen',
    })
  }

  // ── Companions ─────────────────────────────────────────────────────────────
  for (const c of companions) {
    entries.push({
      id: `companion-${c.slug}`,
      title: c.name,
      description: c.title,
      keywords: [c.name.toLowerCase(), c.title.toLowerCase(), c.slug, 'companheiro', 'sahaba', c.arabicName],
      href: `/a-jornada/companheiros/${c.slug}`,
      category: 'Estude',
      icon: 'Users',
    })
  }

  // ── Women ──────────────────────────────────────────────────────────────────
  for (const w of women) {
    entries.push({
      id: `woman-${w.slug}`,
      title: w.name,
      description: w.title,
      keywords: [w.name.toLowerCase(), w.title.toLowerCase(), w.slug, 'mulher', 'feminino', w.arabicName],
      href: `/a-jornada/mulheres/${w.slug}`,
      category: 'Explore',
      icon: 'Heart',
    })
  }

  // ── Bridge Prophets ────────────────────────────────────────────────────────
  for (const bp of bridgeProphets) {
    entries.push({
      id: `bridge-prophet-${bp.id}`,
      title: `Ponte: ${bp.name}`,
      description: `${bp.era} — Paralelos entre Biblia e Alcorao`,
      keywords: [bp.name.toLowerCase(), bp.id, 'ponte', 'profeta', 'biblia', 'alcorao', bp.arabicName],
      href: `/a-ponte/por-profeta/${bp.id}`,
      category: 'Comece Aqui',
      icon: 'Layers',
    })
  }

  // ── Bridge Themes ──────────────────────────────────────────────────────────
  for (const bt of bridgeThemes) {
    entries.push({
      id: `bridge-theme-${bt.id}`,
      title: `Ponte: ${bt.title}`,
      description: bt.subtitle,
      keywords: [bt.title.toLowerCase(), bt.id, 'ponte', 'tema', 'biblia', 'alcorao', 'comparacao'],
      href: `/a-ponte/por-tema/${bt.id}`,
      category: 'Comece Aqui',
      icon: 'Layers',
    })
  }

  // ── Biblia do Kalam Chapters ───────────────────────────────────────────────
  for (const ch of chapters) {
    entries.push({
      id: `biblia-${ch.slug}`,
      title: `Biblia do Kalam: ${ch.title}`,
      description: ch.subtitle,
      keywords: [ch.title.toLowerCase(), ch.slug, ch.era.toLowerCase(), 'biblia do kalam', 'capitulo'],
      href: `/a-biblia-do-kalam/${ch.slug}`,
      category: 'Estude',
      icon: 'BookText',
    })
  }

  // ── Challenges ─────────────────────────────────────────────────────────────
  for (const c of challenges) {
    entries.push({
      id: `challenge-${c.slug}`,
      title: c.title,
      description: c.description,
      keywords: [c.title.toLowerCase(), c.slug, 'desafio', 'challenge', c.arabicTitle],
      href: `/a-jornada/desafios/${c.slug}`,
      category: 'Pratique',
      icon: 'Sparkles',
    })
  }

  // ── Surah Studies ──────────────────────────────────────────────────────────
  for (const ss of surahStudies) {
    entries.push({
      id: `study-${ss.slug}`,
      title: `Estudo: ${ss.title}`,
      description: ss.subtitle.slice(0, 80),
      keywords: [ss.title.toLowerCase(), ss.slug, ss.arabicTitle, 'estudo', 'tafsir', `surata ${ss.surahNumber}`],
      href: `/a-palavra/estudo/${ss.slug}`,
      category: 'Estude',
      icon: 'BookMarked',
    })
  }

  // ── Scripture Proofs ───────────────────────────────────────────────────────
  for (const sp of scriptureProofs) {
    entries.push({
      id: `proof-${sp.id}`,
      title: sp.title,
      description: sp.summary.slice(0, 80),
      keywords: [sp.title.toLowerCase(), sp.category, 'comprovacao', 'prova', 'escritura', 'paralelo'],
      href: `/comprovacoes#${sp.id}`,
      category: 'Estude',
      icon: 'BookOpen',
    })
  }

  // ── Glossary ───────────────────────────────────────────────────────────────
  for (const g of glossary) {
    entries.push({
      id: `glossary-${g.term.toLowerCase().replace(/\s+/g, '-')}`,
      title: `${g.term} (${g.arabic})`,
      description: g.meaning,
      keywords: [g.term.toLowerCase(), g.arabic, g.meaning.toLowerCase(), g.category, 'glossario', 'vocabulario'],
      href: `/a-palavra/glossario#${g.term.toLowerCase().replace(/\s+/g, '-')}`,
      category: 'Estude',
      icon: 'Languages',
    })
  }

  // ── Mental Health Topics ───────────────────────────────────────────────────
  for (const mh of mentalHealthTopics) {
    entries.push({
      id: `mental-${mh.slug}`,
      title: mh.title,
      description: mh.summary.slice(0, 80),
      keywords: [mh.title.toLowerCase(), mh.slug, mh.arabicConcept, 'saude mental', 'bem-estar', 'alma'],
      href: `/a-alma/saude-mental/${mh.slug}`,
      category: 'Reflita',
      icon: 'Heart',
    })
  }

  // ── Seerah Chapters ────────────────────────────────────────────────────────
  for (const sc of seerahChapters) {
    entries.push({
      id: `seerah-${sc.slug}`,
      title: `Seerah: ${sc.title}`,
      description: `${sc.period} — ${sc.summary.slice(0, 60)}`,
      keywords: [sc.title.toLowerCase(), sc.slug, sc.period.toLowerCase(), 'seerah', 'biografia', 'muhammad', sc.arabicTitle],
      href: `/a-jornada/seerah/${sc.slug}`,
      category: 'Estude',
      icon: 'Users',
    })
  }

  // ── Sleep Stories ──────────────────────────────────────────────────────────
  for (const ss of SLEEP_STORIES) {
    entries.push({
      id: `sleep-${ss.id}`,
      title: `Historia de Dormir: ${ss.title}`,
      description: ss.subtitle,
      keywords: [ss.title.toLowerCase(), ss.id, 'dormir', 'sleep', 'historia', 'noite', 'relaxar'],
      href: `/a-alma/dormir/${ss.id}`,
      category: 'Reflita',
      icon: 'Moon',
    })
  }

  // ── Prophet Stories (JS content) ───────────────────────────────────────────
  if (Array.isArray(prophetStoriesExpanded)) {
    for (const p of prophetStoriesExpanded) {
      entries.push({
        id: `prophet-${p.id}`,
        title: p.name,
        description: p.openingHook?.slice(0, 80) || '',
        keywords: [p.name?.toLowerCase() || '', p.id, p.arabic || '', 'profeta', 'historia', p.era || ''],
        href: `/os-profetas/${p.id}`,
        category: 'Comece Aqui',
        icon: 'Users',
      })
    }
  }

  // ── Hard Questions (JS content) ────────────────────────────────────────────
  if (Array.isArray(hardQuestionsData)) {
    for (const q of hardQuestionsData) {
      entries.push({
        id: `question-${q.id}`,
        title: q.question?.slice(0, 70) || '',
        description: q.directAnswer?.slice(0, 80) || '',
        keywords: [q.question?.slice(0, 40)?.toLowerCase() || '', q.id, 'pergunta', 'dificil', 'duvida'],
        href: `/perguntas/${q.id}`,
        category: 'Comece Aqui',
        icon: 'HelpCircle',
      })
    }
  }

  // ── Surprise Facts (JS content) ────────────────────────────────────────────
  if (Array.isArray(surpriseFactsData)) {
    for (const f of surpriseFactsData) {
      entries.push({
        id: `fact-${f.id}`,
        title: f.hook?.slice(0, 70) || '',
        description: f.detail?.slice(0, 80) || '',
        keywords: [f.hook?.slice(0, 40)?.toLowerCase() || '', f.id, f.category || '', 'fato', 'curiosidade', 'surpresa'],
        href: `/fatos/${f.id}`,
        category: 'Explore',
        icon: 'Sparkles',
      })
    }
  }

  return entries
}

// ── FINAL INDEX ──────────────────────────────────────────────────────────────

export const SEARCH_INDEX: SearchEntry[] = [
  ...STATIC_ENTRIES,
  ...buildDynamicEntries(),
]
