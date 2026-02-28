'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Sun,
  Compass,
  Heart,
  ChevronDown,
  Search,
  ArrowLeft,
  Settings,
  Info,
  Sparkles,
  BookMarked,
  Mic,
  Brain,
  Star,
  MessageSquareQuote,
  ScrollText,
  Clock,
  Layers,
  Users,
  Crown,
  UserCircle,
  Calendar,
  Map as MapIcon,
  Route,
  Landmark,
  DollarSign,
  Calculator,
  Trophy,
  LayoutDashboard,
  NotebookPen,
  TrendingUp,
  RotateCcw,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react'

/* ─────────────── Colors ─────────────── */
const C = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

/* ─────────────── Data Types ─────────────── */
interface MapItem {
  label: string
  href: string
  count?: string
  icon?: LucideIcon
  storageKey?: string // localStorage key for progress tracking
}

interface MapSection {
  id: string
  title: string
  titleArabic: string
  subtitle: string
  icon: LucideIcon
  color: string
  items: MapItem[]
}

/* ─────────────── Map Data ─────────────── */
const MAP_SECTIONS: MapSection[] = [
  {
    id: 'a-palavra',
    title: 'A Palavra',
    titleArabic: 'كلمة',
    subtitle: 'The Word',
    icon: BookOpen,
    color: C.gold,
    items: [
      { label: '114 Suratas', href: '/a-palavra', count: '114', icon: BookOpen, storageKey: 'kalam-read-surahs' },
      { label: '7 Estudos Profundos', href: '/a-palavra/estudo', count: '7', icon: Brain },
      { label: '50 Hadiths', href: '/a-palavra/hadiths', count: '50', icon: BookMarked, storageKey: 'kalam-read-hadiths' },
      { label: '15 Parabolas', href: '/a-palavra/parabolas', count: '15', icon: MessageSquareQuote },
      { label: 'Recitacao', href: '/a-palavra/recitacao', icon: Mic },
      { label: 'Hifz (Memorizacao)', href: '/a-palavra/hifz', icon: Brain },
      { label: 'Busca', href: '/a-palavra/busca', icon: Search },
      { label: 'Favoritos', href: '/a-palavra/favoritos', icon: Star, storageKey: 'kalam-favorites' },
    ],
  },
  {
    id: 'a-presenca',
    title: 'A Presenca',
    titleArabic: 'حضور',
    subtitle: 'The Presence',
    icon: Sun,
    color: '#E8B931',
    items: [
      { label: '99 Nomes de Deus', href: '/a-presenca/99-nomes', count: '99', icon: Sparkles, storageKey: 'kalam-read-names' },
      { label: 'Flashcards', href: '/a-presenca/flashcards', icon: Layers },
      { label: 'Dhikr Digital', href: '/a-presenca/dhikr', icon: RotateCcw },
      { label: 'Duas e Adhkar', href: '/a-presenca/duas', icon: ScrollText },
      { label: 'Horarios de Oracao', href: '/a-presenca/salah', icon: Clock },
      { label: 'Contemplacao', href: '/a-presenca/contemplacao', icon: HeartHandshake },
      { label: 'Alfabeto Arabe', href: '/a-presenca/arabe', icon: BookOpen },
    ],
  },
  {
    id: 'a-jornada',
    title: 'A Jornada',
    titleArabic: 'رحلة',
    subtitle: 'The Journey',
    icon: Compass,
    color: '#7DAFCF',
    items: [
      { label: 'Plano Diario', href: '/a-jornada/plano-diario', icon: Calendar },
      { label: 'Ramadan (30 dias)', href: '/a-jornada/ramadan', count: '30', icon: Star },
      { label: '6 Trilhas Guiadas', href: '/trilhas', count: '6', icon: Route },
      { label: '6 Profetas', href: '/os-profetas', count: '6', icon: Users, storageKey: 'kalam-read-prophets' },
      { label: 'Seerah (12 capitulos)', href: '/a-jornada/seerah', count: '12', icon: Crown },
      { label: '10 Companheiros', href: '/a-jornada/companheiros', count: '10', icon: UserCircle },
      { label: '6 Mulheres no Islam', href: '/a-jornada/mulheres', count: '6', icon: UserCircle },
      { label: 'Linha do Tempo', href: '/a-jornada/historia', icon: MapIcon },
      { label: 'Financas Islamicas', href: '/a-jornada/financas', icon: DollarSign },
      { label: 'Calculadora de Zakat', href: '/a-jornada/zakat', icon: Calculator },
      { label: 'Desafios de 7 Dias', href: '/a-jornada/desafios', count: '7', icon: Trophy },
    ],
  },
  {
    id: 'a-alma',
    title: 'A Alma',
    titleArabic: 'روح',
    subtitle: 'The Soul',
    icon: Heart,
    color: '#D4768C',
    items: [
      { label: 'Painel de Aprendizado', href: '/a-alma/painel', icon: LayoutDashboard },
      { label: 'Diario Espiritual', href: '/a-alma/journal', icon: NotebookPen },
      { label: 'Progresso', href: '/a-alma/progresso', icon: TrendingUp },
      { label: 'Rotina Diaria', href: '/a-alma/rotina', icon: RotateCcw },
      { label: 'Saude Mental', href: '/a-alma/saude-mental', icon: HeartHandshake },
    ],
  },
  {
    id: 'kids',
    title: 'Kids',
    titleArabic: 'أطفال',
    subtitle: 'For Children',
    icon: Star,
    color: '#FF8C42',
    items: [
      { label: 'Histórias dos Profetas', href: '/kids/historias', count: '15', icon: BookOpen },
      { label: 'Pilares do Islam', href: '/kids/pilares-do-islam', count: '5', icon: Star },
      { label: 'Pilares da Fé', href: '/kids/pilares-da-fe', count: '6', icon: Heart },
      { label: 'Quran Kids', href: '/kids/quran-kids', count: '15', icon: BookOpen },
      { label: 'Dua do Dia', href: '/kids/dua-do-dia', count: '20', icon: Heart },
      { label: 'Bons Modos', href: '/kids/bons-modos', count: '12', icon: Star },
      { label: 'Quiz', href: '/kids/quiz', count: '50', icon: Trophy },
      { label: 'Atividades', href: '/kids/atividades', count: '7', icon: Sparkles },
      { label: 'Calendário Islâmico', href: '/kids/calendario', count: '8', icon: Calendar },
      { label: 'Heróis do Islam', href: '/kids/herois', count: '10', icon: Crown },
      { label: 'Meu Progresso', href: '/kids/meu-progresso', icon: TrendingUp },
    ],
  },
]

const OTHER_ITEMS: MapItem[] = [
  { label: 'Configuracoes', href: '/configuracoes', icon: Settings },
  { label: 'Sobre', href: '/sobre', icon: Info },
  { label: 'Comecar', href: '/comecar', icon: Sparkles },
]

/* ─────────────── Progress Helper ─────────────── */
function getProgressCount(storageKey: string): number {
  if (typeof window === 'undefined') return 0
  try {
    const data = localStorage.getItem(storageKey)
    if (!data) return 0
    const parsed = JSON.parse(data)
    if (Array.isArray(parsed)) return parsed.length
    if (typeof parsed === 'object' && parsed !== null) return Object.keys(parsed).length
    return 0
  } catch {
    return 0
  }
}

/* ─────────────── Section Component ─────────────── */
function SectionBlock({
  section,
  expanded,
  onToggle,
  searchQuery,
}: {
  section: MapSection
  expanded: boolean
  onToggle: () => void
  searchQuery: string
}) {
  const [progressMap, setProgressMap] = useState<Record<string, number>>({})

  useEffect(() => {
    const map: Record<string, number> = {}
    section.items.forEach((item) => {
      if (item.storageKey) {
        map[item.storageKey] = getProgressCount(item.storageKey)
      }
    })
    setProgressMap(map)
  }, [section.items])

  const filteredItems = useMemo(() => {
    if (!searchQuery) return section.items
    const q = searchQuery.toLowerCase()
    return section.items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.count && item.count.includes(q))
    )
  }, [section.items, searchQuery])

  // If searching and no items match, hide entire section
  if (searchQuery && filteredItems.length === 0) return null

  // When searching, force expand
  const isExpanded = searchQuery ? true : expanded

  const SectionIcon = section.icon

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
    >
      {/* Section Header */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '18px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          outline: 'none',
        }}
      >
        {/* Icon */}
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: `${section.color}12`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <SectionIcon size={20} color={section.color} strokeWidth={1.8} />
        </span>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 600,
                color: C.text,
              }}
            >
              {section.title}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 16,
                color: `${section.color}60`,
                lineHeight: 1,
              }}
            >
              {section.titleArabic}
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: C.muted,
              letterSpacing: '0.5px',
            }}
          >
            {section.subtitle} &middot; {section.items.length} itens
          </span>
        </div>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ flexShrink: 0, display: 'flex' }}
        >
          <ChevronDown size={18} color={C.muted} />
        </motion.span>
      </button>

      {/* Items */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                borderTop: `1px solid ${C.border}`,
                padding: '8px 12px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {filteredItems.map((item) => {
                const ItemIcon = item.icon || BookOpen
                const progress = item.storageKey ? progressMap[item.storageKey] || 0 : 0
                const hasProgress = item.storageKey && progress > 0

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 12px',
                      borderRadius: 6,
                      textDecoration: 'none',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = `${C.border}80`
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                    }}
                  >
                    <ItemIcon size={16} color={C.muted} strokeWidth={1.5} style={{ flexShrink: 0 }} />

                    <span
                      style={{
                        flex: 1,
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14,
                        color: C.secondary,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.label}
                    </span>

                    {/* Count badge */}
                    {item.count && (
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 11,
                          fontWeight: 600,
                          color: C.muted,
                          background: `${C.border}`,
                          padding: '2px 8px',
                          borderRadius: 10,
                          letterSpacing: '0.3px',
                          flexShrink: 0,
                        }}
                      >
                        {item.count}
                      </span>
                    )}

                    {/* Progress indicator */}
                    {hasProgress && (
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 10,
                          fontWeight: 600,
                          color: C.gold,
                          background: `${C.gold}15`,
                          padding: '2px 7px',
                          borderRadius: 10,
                          letterSpacing: '0.3px',
                          flexShrink: 0,
                        }}
                      >
                        {progress} lidos
                      </span>
                    )}

                    {/* Arrow */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.muted}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, opacity: 0.5 }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────── Main Component ─────────────── */
export default function MapaClient() {
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'a-palavra': true,
    'a-presenca': false,
    'a-jornada': false,
    'a-alma': false,
    'kids': false,
  })
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Filter "Outros" items
  const filteredOtherItems = useMemo(() => {
    if (!searchQuery) return OTHER_ITEMS
    const q = searchQuery.toLowerCase()
    return OTHER_ITEMS.filter((item) => item.label.toLowerCase().includes(q))
  }, [searchQuery])

  // Check if any section matches
  const hasResults = useMemo(() => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    const sectionMatch = MAP_SECTIONS.some((section) =>
      section.items.some(
        (item) => item.label.toLowerCase().includes(q) || (item.count && item.count.includes(q))
      )
    )
    const otherMatch = OTHER_ITEMS.some((item) => item.label.toLowerCase().includes(q))
    return sectionMatch || otherMatch
  }, [searchQuery])

  // Total content count
  const totalItems = MAP_SECTIONS.reduce((acc, s) => acc + s.items.length, 0) + OTHER_ITEMS.length

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        paddingBottom: 100,
      }}
    >
      {/* Hero / Header area */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '40px 20px 32px',
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <button
              onClick={() => router.back()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: C.muted,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                letterSpacing: '0.5px',
                marginBottom: 28,
                padding: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = C.gold
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = C.muted
              }}
            >
              <ArrowLeft size={14} />
              Voltar
            </button>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: `${C.gold}88`,
                marginBottom: 12,
              }}
            >
              MAPA DO CONTEUDO
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 5vw, 36px)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              Tudo que existe no Kalam
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: C.muted,
                lineHeight: 1.6,
              }}
            >
              {totalItems} paginas organizadas em 5 espacos. Encontre qualquer conteudo.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            style={{ marginTop: 24 }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={16}
                color={C.muted}
                style={{
                  position: 'absolute',
                  left: 14,
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Buscar secao, topico ou pagina..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 14px 13px 42px',
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  color: C.text,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => {
                  ;(e.currentTarget as HTMLInputElement).style.borderColor = `${C.gold}50`
                }}
                onBlur={(e) => {
                  ;(e.currentTarget as HTMLInputElement).style.borderColor = C.border
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: 12,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: C.muted,
                    padding: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 20px' }}>
        {/* Main Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {MAP_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.08,
                ease: 'easeOut',
              }}
            >
              <SectionBlock
                section={section}
                expanded={expandedSections[section.id] ?? false}
                onToggle={() => toggleSection(section.id)}
                searchQuery={searchQuery}
              />
            </motion.div>
          ))}
        </div>

        {/* Outros Section */}
        {filteredOtherItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55, ease: 'easeOut' }}
            style={{ marginTop: 32 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: C.muted,
                marginBottom: 12,
                paddingLeft: 4,
              }}
            >
              OUTROS
            </p>

            <div
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: '8px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {filteredOtherItems.map((item) => {
                const ItemIcon = item.icon || Info
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 12px',
                      borderRadius: 6,
                      textDecoration: 'none',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = `${C.border}80`
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                    }}
                  >
                    <ItemIcon size={16} color={C.muted} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        flex: 1,
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14,
                        color: C.secondary,
                      }}
                    >
                      {item.label}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.muted}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, opacity: 0.5 }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* No results */}
        {!hasResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              textAlign: 'center',
              padding: '48px 20px',
            }}
          >
            <Search size={32} color={C.muted} style={{ marginBottom: 16, opacity: 0.4 }} />
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: C.muted,
                marginBottom: 8,
              }}
            >
              Nenhum resultado para &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => setSearchQuery('')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: C.gold,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Limpar busca
            </button>
          </motion.div>
        )}

        {/* Bottom summary */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              marginTop: 40,
              textAlign: 'center',
              padding: '24px 20px',
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 28,
                color: `${C.gold}40`,
                marginBottom: 8,
              }}
            >
              كلام
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: C.muted,
                letterSpacing: '0.5px',
              }}
            >
              {totalItems} paginas &middot; 5 espacos &middot; 1 jornada
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
