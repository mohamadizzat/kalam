'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  X,
  Compass,
  BookOpen,
  Sun,
  Heart,
  Star,
  ArrowRight,
  Mic,
  Languages,
  Clock,
  PenLine,
  MessageCircle,
  Layers,
  Users,
  Sparkles,
  Library,
  Route,
  BookText,
  Calendar,
  BookMarked,
  Home,
  Settings,
  Info,
  HelpCircle,
  Wrench,
  FileText,
} from 'lucide-react'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── SEARCH INDEX ─────────────────────────────────────────────────────────────

interface SearchEntry {
  title: string
  href: string
  keywords: string[]
  category: 'Início' | 'Descobrir' | 'Aprender' | 'Praticar' | 'Refletir' | 'Kids' | 'Outro'
  icon: typeof Home
  description: string
}

const SEARCH_INDEX: SearchEntry[] = [
  // Início
  { title: 'Início', href: '/', keywords: ['home', 'início', 'principal'], category: 'Início', icon: Home, description: 'Página principal do Kalam' },

  // Descobrir
  { title: 'A Mensagem', href: '/a-mensagem', keywords: ['mensagem', 'islã', 'islam', 'introdução', 'começo'], category: 'Descobrir', icon: MessageCircle, description: 'A mensagem do Islam explicada' },
  { title: 'A Ponte', href: '/a-ponte', keywords: ['ponte', 'bíblia', 'bible', 'conexão', 'comparação', 'cristianismo'], category: 'Descobrir', icon: Layers, description: 'Paralelos entre Bíblia e Alcorão' },
  { title: 'Os Profetas', href: '/os-profetas', keywords: ['profetas', 'prophets', 'histórias', 'adão', 'noé', 'abraão', 'moisés', 'jesus', 'muhammad'], category: 'Descobrir', icon: Users, description: 'Histórias dos profetas' },
  { title: 'O Sistema', href: '/o-sistema', keywords: ['sistema', 'pilares', 'islam', 'regras', 'princípios'], category: 'Descobrir', icon: Sparkles, description: 'O sistema do Islam explicado' },
  { title: 'Biblioteca', href: '/biblioteca', keywords: ['biblioteca', 'livros', 'referências', 'recursos'], category: 'Descobrir', icon: Library, description: 'Acervo de referências' },
  { title: 'Perguntas Difíceis', href: '/perguntas', keywords: ['perguntas', 'dúvidas', 'violência', 'mulheres', 'poligamia', 'jihad', 'difíceis', 'objeções'], category: 'Descobrir', icon: HelpCircle, description: 'Respostas honestas a perguntas difíceis' },
  { title: 'Manifesto', href: '/manifesto', keywords: ['manifesto', 'missão', 'visão', 'sobre', 'propósito'], category: 'Descobrir', icon: FileText, description: 'O que o Kalam é e por que existe' },
  { title: 'Comprovações Escriturais', href: '/comprovacoes', keywords: ['comprovações', 'provas', 'escrituras', 'bíblia', 'torah', 'evangelhos', 'paralelos', 'convergência'], category: 'Descobrir', icon: BookOpen, description: '30 paralelos reais entre Quran, Torah, Salmos e Evangelhos' },

  // Aprender
  { title: 'A Palavra (Quran)', href: '/a-palavra', keywords: ['quran', 'alcorão', 'suratas', 'suras', 'versículos', 'palavra'], category: 'Aprender', icon: BookOpen, description: 'Explore o Sagrado Alcorão' },
  { title: 'Trilhas', href: '/trilhas', keywords: ['trilhas', 'jornada', 'aprendizado', 'caminho', 'curso'], category: 'Aprender', icon: Route, description: 'Trilhas guiadas de aprendizado' },
  { title: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam', keywords: ['bíblia do kalam', 'guia', 'referência', 'completo'], category: 'Aprender', icon: BookText, description: 'Guia completo de referência' },
  { title: 'Estudos', href: '/a-palavra/estudo', keywords: ['estudos', 'aprofundamento', 'análise', 'tafsir'], category: 'Aprender', icon: BookMarked, description: 'Estudos aprofundados' },
  { title: 'Hadiths', href: '/a-palavra/hadiths', keywords: ['hadiths', 'hadith', 'tradição', 'profeta', 'ditos'], category: 'Aprender', icon: BookOpen, description: 'Ditos e tradições do Profeta' },
  { title: 'Busca no Quran', href: '/a-palavra/busca', keywords: ['busca', 'pesquisa', 'quran', 'versículo', 'procurar'], category: 'Aprender', icon: Search, description: 'Busque versículos no Alcorão' },
  { title: 'Parábolas', href: '/a-palavra/parabolas', keywords: ['parábolas', 'histórias', 'narrativas', 'quran'], category: 'Aprender', icon: BookOpen, description: 'Parábolas do Alcorão' },

  // Praticar
  { title: 'A Presença', href: '/a-presenca', keywords: ['presença', 'prática', 'adoração', 'ibadah'], category: 'Praticar', icon: Sun, description: 'Ferramentas de prática espiritual' },
  { title: 'Aya do Dia', href: '/aya-do-dia', keywords: ['aya', 'verso', 'dia', 'diário', 'versículo'], category: 'Praticar', icon: Calendar, description: 'Versículo do dia com reflexão' },
  { title: 'Ferramentas', href: '/ferramentas', keywords: ['ferramentas', 'tools', 'recursos', 'prática'], category: 'Praticar', icon: Wrench, description: 'Todas as ferramentas em um lugar' },
  { title: 'Recitação', href: '/a-palavra/recitacao', keywords: ['recitação', 'áudio', 'ouvir', 'quran', 'recitar'], category: 'Praticar', icon: Mic, description: 'Ouça o Quran com áudio' },
  { title: 'Flashcards', href: '/a-presenca/flashcards', keywords: ['flashcards', '99 nomes', 'allah', 'memorização', 'nomes'], category: 'Praticar', icon: Languages, description: '99 Nomes de Allah' },
  { title: 'Dhikr', href: '/a-presenca/dhikr', keywords: ['dhikr', 'zikr', 'lembrança', 'contador', 'repetição', 'subhanallah'], category: 'Praticar', icon: Clock, description: 'Contador de dhikr' },
  { title: 'Duas', href: '/a-presenca/duas', keywords: ['duas', 'dua', 'súplica', 'oração', 'pedido'], category: 'Praticar', icon: Heart, description: 'Súplicas categorizadas' },
  { title: 'Salah', href: '/a-presenca/salah', keywords: ['salah', 'salat', 'oração', 'namaz', 'rezar', 'reza'], category: 'Praticar', icon: Sun, description: 'Guia de oração' },
  { title: 'Hifz', href: '/a-palavra/hifz', keywords: ['hifz', 'memorização', 'decorar', 'quran'], category: 'Praticar', icon: BookMarked, description: 'Memorização do Quran' },
  { title: '99 Nomes', href: '/a-presenca/99-nomes', keywords: ['99 nomes', 'asma ul husna', 'allah', 'atributos'], category: 'Praticar', icon: Sparkles, description: 'Os 99 Nomes de Allah' },
  { title: 'Contemplação', href: '/a-presenca/contemplacao', keywords: ['contemplação', 'meditação', 'reflexão', 'tafakkur'], category: 'Praticar', icon: Heart, description: 'Práticas de contemplação' },
  { title: 'Contemplative Companion', href: '/contemplativo', keywords: ['contemplativo', 'áudio', 'mixer', 'foco', 'binaural', 'ambient', 'sanctuary', 'calma', 'sleep', 'dhikr', 'energia'], category: 'Praticar', icon: Sparkles, description: 'Mixer de áudio para foco, calma e contemplação' },

  // Refletir
  { title: 'A Alma', href: '/a-alma', keywords: ['alma', 'espiritualidade', 'interior', 'nafs'], category: 'Refletir', icon: Heart, description: 'Jornada espiritual interior' },
  { title: 'Journal', href: '/a-alma/journal', keywords: ['journal', 'diário', 'escrita', 'reflexão', 'gratidão'], category: 'Refletir', icon: PenLine, description: 'Diário espiritual' },
  { title: 'Rotina', href: '/a-alma/rotina', keywords: ['rotina', 'hábitos', 'diário', 'ritual'], category: 'Refletir', icon: Clock, description: 'Rotina de práticas' },
  { title: 'Plano Diário', href: '/a-jornada/plano-diario', keywords: ['plano', 'diário', 'rotina', 'planejamento'], category: 'Refletir', icon: Calendar, description: 'Planejamento espiritual diário' },
  { title: 'Saúde Mental', href: '/a-alma/saude-mental', keywords: ['saúde mental', 'ansiedade', 'paz', 'bem-estar'], category: 'Refletir', icon: Heart, description: 'Islam e saúde mental' },
  { title: 'Progresso', href: '/a-alma/progresso', keywords: ['progresso', 'conquistas', 'evolução', 'avanço'], category: 'Refletir', icon: Sparkles, description: 'Seu progresso espiritual' },

  // Kids
  { title: 'Kids Hub', href: '/kids', keywords: ['kids', 'crianças', 'infantil', 'filhos'], category: 'Kids', icon: Star, description: 'Conteúdo para crianças' },
  { title: 'Quiz Kids', href: '/kids/quiz', keywords: ['quiz', 'jogo', 'perguntas', 'kids', 'infantil'], category: 'Kids', icon: Sparkles, description: 'Quiz divertido para crianças' },
  { title: 'Histórias Kids', href: '/kids/historias', keywords: ['histórias', 'contos', 'profetas', 'kids'], category: 'Kids', icon: BookOpen, description: 'Histórias dos profetas para crianças' },
  { title: 'Atividades Kids', href: '/kids/atividades', keywords: ['atividades', 'pintar', 'colorir', 'kids'], category: 'Kids', icon: PenLine, description: 'Atividades educativas' },

  // Outro
  { title: 'Sobre', href: '/sobre', keywords: ['sobre', 'equipe', 'projeto', 'quem somos'], category: 'Outro', icon: Info, description: 'Sobre o projeto Kalam' },
  { title: 'Configurações', href: '/configuracoes', keywords: ['configurações', 'settings', 'preferências', 'conta'], category: 'Outro', icon: Settings, description: 'Configurações do app' },
  { title: 'Mapa', href: '/mapa', keywords: ['mapa', 'navegação', 'sitemap', 'conteúdo'], category: 'Outro', icon: Compass, description: 'Mapa de todo o conteúdo' },

  // A Jornada sub-pages
  { title: 'Ramadan', href: '/a-jornada/ramadan', keywords: ['ramadan', 'jejum', 'sawm', 'iftar'], category: 'Praticar', icon: Calendar, description: 'Guia do Ramadan' },
  { title: 'Zakat', href: '/a-jornada/zakat', keywords: ['zakat', 'caridade', 'esmola', 'calculadora'], category: 'Praticar', icon: Heart, description: 'Calculadora e guia de Zakat' },
  { title: 'Seerah', href: '/a-jornada/seerah', keywords: ['seerah', 'biografia', 'profeta', 'muhammad', 'vida'], category: 'Aprender', icon: Users, description: 'Biografia do Profeta Muhammad' },
  { title: 'Companheiros', href: '/a-jornada/companheiros', keywords: ['companheiros', 'sahaba', 'abu bakr', 'omar', 'uthman', 'ali'], category: 'Aprender', icon: Users, description: 'Histórias dos companheiros' },
  { title: 'Mulheres no Islam', href: '/a-jornada/mulheres', keywords: ['mulheres', 'feminino', 'khadija', 'aisha', 'maryam', 'fatima'], category: 'Descobrir', icon: Heart, description: 'Grandes mulheres na história do Islam' },
  { title: 'Finanças Islâmicas', href: '/a-jornada/financas', keywords: ['finanças', 'halal', 'riba', 'juros', 'economia'], category: 'Aprender', icon: BookOpen, description: 'Finanças no Islam' },
  { title: 'Desafios', href: '/a-jornada/desafios', keywords: ['desafios', 'metas', 'objetivos', 'crescimento'], category: 'Praticar', icon: Sparkles, description: 'Desafios de crescimento espiritual' },
  { title: 'Árabe', href: '/a-presenca/arabe', keywords: ['árabe', 'idioma', 'língua', 'aprender árabe', 'alfabeto'], category: 'Aprender', icon: Languages, description: 'Aprenda o básico do árabe' },

  // A Ponte sub-pages
  { title: 'Ponte por Profeta', href: '/a-ponte/por-profeta', keywords: ['ponte', 'profeta', 'comparação', 'bíblia'], category: 'Descobrir', icon: Users, description: 'Comparação por profeta' },
  { title: 'Ponte por Tema', href: '/a-ponte/por-tema', keywords: ['ponte', 'tema', 'tópico', 'comparação'], category: 'Descobrir', icon: Layers, description: 'Comparação por tema' },
  { title: 'Ponte por Versículo', href: '/a-ponte/por-versiculo', keywords: ['ponte', 'versículo', 'verso', 'comparação'], category: 'Descobrir', icon: BookOpen, description: 'Comparação verso a verso' },
]

const POPULAR: SearchEntry[] = SEARCH_INDEX.filter((e) =>
  ['/a-palavra', '/a-ponte', '/a-presenca/dhikr', '/a-alma/journal', '/perguntas', '/ferramentas'].includes(e.href)
)

// ── CATEGORY ICONS ───────────────────────────────────────────────────────────

const CATEGORY_ICON: Record<string, typeof Home> = {
  Início: Home,
  Descobrir: Compass,
  Aprender: BookOpen,
  Praticar: Sun,
  Refletir: Heart,
  Kids: Star,
  Outro: Settings,
}

// ── SEARCH DIALOG ────────────────────────────────────────────────────────────

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Filter results
  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter((entry) => {
        const q = query.toLowerCase()
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q) ||
          entry.keywords.some((k) => k.includes(q))
        )
      }).slice(0, 12)
    : []

  // Group by category
  const grouped = results.reduce<Record<string, SearchEntry[]>>((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = []
    acc[entry.category].push(entry)
    return acc
  }, {})

  // Flat list for keyboard nav
  const flatResults = Object.values(grouped).flat()

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const list = query.trim() ? flatResults : POPULAR
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(prev + 1, list.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && list[selectedIndex]) {
        e.preventDefault()
        router.push(list[selectedIndex].href)
        onClose()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    },
    [flatResults, selectedIndex, query, router, onClose]
  )

  // Reset selection on query change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Scroll selected into view
  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector('[data-selected="true"]')
      if (selected) {
        selected.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  if (!open) return null

  const showPopular = query.trim().length === 0

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 500,
            }}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{
              position: 'fixed',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(520px, calc(100vw - 32px))',
              maxHeight: '65vh',
              background: T.bg,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              overflow: 'hidden',
              zIndex: 501,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Search input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 18px',
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <Search size={18} style={{ color: T.muted, flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar suratas, ferramentas, profetas..."
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: T.text,
                  fontSize: 15,
                  fontFamily: 'var(--font-sans)',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: T.muted,
                    cursor: 'pointer',
                    padding: 2,
                    display: 'flex',
                  }}
                >
                  <X size={16} />
                </button>
              )}
              <kbd
                style={{
                  fontSize: 11,
                  padding: '2px 6px',
                  borderRadius: 4,
                  border: `1px solid ${T.border}`,
                  color: T.muted,
                  fontFamily: 'var(--font-sans)',
                  flexShrink: 0,
                }}
              >
                Esc
              </kbd>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: `${T.border} transparent`,
              }}
            >
              {showPopular ? (
                <>
                  <div
                    style={{
                      padding: '8px 10px 4px',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: T.muted,
                    }}
                  >
                    Populares
                  </div>
                  {POPULAR.map((entry, i) => (
                    <ResultItem
                      key={entry.href}
                      entry={entry}
                      isSelected={i === selectedIndex}
                      onClick={() => {
                        router.push(entry.href)
                        onClose()
                      }}
                    />
                  ))}
                </>
              ) : flatResults.length > 0 ? (
                Object.entries(grouped).map(([category, entries]) => (
                  <div key={category}>
                    <div
                      style={{
                        padding: '8px 10px 4px',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: T.muted,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {(() => {
                        const CatIcon = CATEGORY_ICON[category] || Compass
                        return <CatIcon size={12} />
                      })()}
                      {category}
                    </div>
                    {entries.map((entry) => {
                      const idx = flatResults.indexOf(entry)
                      return (
                        <ResultItem
                          key={entry.href}
                          entry={entry}
                          isSelected={idx === selectedIndex}
                          onClick={() => {
                            router.push(entry.href)
                            onClose()
                          }}
                        />
                      )
                    })}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: T.muted,
                    fontSize: 14,
                  }}
                >
                  Nenhum resultado para &ldquo;{query}&rdquo;
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div
              style={{
                padding: '8px 18px',
                borderTop: `1px solid ${T.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 11,
                color: T.muted,
              }}
            >
              <span>↑↓ navegar</span>
              <span>↵ abrir</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── RESULT ITEM ──────────────────────────────────────────────────────────────

function ResultItem({
  entry,
  isSelected,
  onClick,
}: {
  entry: SearchEntry
  isSelected: boolean
  onClick: () => void
}) {
  const Icon = entry.icon

  return (
    <button
      data-selected={isSelected}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '10px 12px',
        borderRadius: 8,
        border: 'none',
        background: isSelected ? 'rgba(201,168,76,0.08)' : 'transparent',
        color: T.text,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background 0.1s ease',
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: isSelected ? 'rgba(201,168,76,0.12)' : `rgba(39,34,48,0.5)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isSelected ? T.gold : T.muted,
          flexShrink: 0,
          transition: 'all 0.1s ease',
        }}
      >
        <Icon size={16} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: isSelected ? 500 : 400, color: isSelected ? T.text : T.secondary }}>
          {entry.title}
        </div>
        <div style={{ fontSize: 12, color: T.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {entry.description}
        </div>
      </div>
      {isSelected && (
        <ArrowRight size={14} style={{ color: T.gold, flexShrink: 0 }} />
      )}
    </button>
  )
}
