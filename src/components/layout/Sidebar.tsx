'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Compass,
  BookOpen,
  Sun,
  Heart,
  Star,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  X,
  Search,
  Wrench,
  MessageCircle,
  Users as UsersIcon,
  BookText,
  Route,
  Library,
  Sparkles,
  Calendar,
  PenLine,
  Clock,
  Settings,
  Info,
  Mic,
  Languages,
  Layers,
  BookMarked,
  Scale,
  Crown,
  CheckSquare,
  TrendingUp,
  Moon,
  Type,
  Zap,
  Flame,
} from 'lucide-react'
import { useNavIndicators } from '@/lib/hooks/useNavIndicators'

// ── SIDEBAR CONTEXT ─────────────────────────────────────────────────────────

type SidebarContextType = {
  isOpen: boolean
  isCollapsed: boolean
  toggleOpen: () => void
  toggleCollapsed: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  isCollapsed: false,
  toggleOpen: () => {},
  toggleCollapsed: () => {},
  close: () => {},
})

export function useSidebar() {
  return useContext(SidebarContext)
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-sidebar-state')
      if (saved === 'collapsed') setIsCollapsed(true)
    } catch {}
  }, [])

  const toggleOpen = () => setIsOpen(prev => !prev)
  const toggleCollapsed = () => {
    setIsCollapsed(prev => {
      const next = !prev
      try { localStorage.setItem('kalam-sidebar-state', next ? 'collapsed' : 'expanded') } catch {}
      return next
    })
  }
  const close = () => setIsOpen(false)

  return (
    <SidebarContext.Provider value={{ isOpen, isCollapsed, toggleOpen, toggleCollapsed, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── NAV STRUCTURE ────────────────────────────────────────────────────────────

type NavItem = {
  label: string
  href: string
  icon: typeof Home
}

type NavCategory = {
  id: string
  label: string
  icon: typeof Home
  items: NavItem[]
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'comece-aqui',
    label: 'Comece Aqui',
    icon: Compass,
    items: [
      { label: 'A Mensagem', href: '/a-mensagem', icon: MessageCircle },
      { label: 'Os Profetas', href: '/os-profetas', icon: UsersIcon },
      { label: 'A Ponte', href: '/a-ponte', icon: Layers },
      { label: 'Perguntas Difíceis', href: '/perguntas', icon: MessageCircle },
    ],
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Sparkles,
    items: [
      { label: 'Seu Nome em Árabe', href: '/descobrir/seu-nome-em-arabe', icon: Type },
      { label: 'Qual Profeta Te Inspira?', href: '/descobrir/qual-profeta-voce-e', icon: Zap },
      { label: 'Comprovações', href: '/comprovacoes', icon: Scale },
      { label: 'O Sistema', href: '/o-sistema', icon: Sparkles },
      { label: 'Biblioteca', href: '/biblioteca', icon: Library },
    ],
  },
  {
    id: 'estude',
    label: 'Estude',
    icon: BookOpen,
    items: [
      { label: 'A Palavra (Quran)', href: '/a-palavra', icon: BookOpen },
      { label: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam', icon: BookText },
      { label: 'Trilhas', href: '/trilhas', icon: Route },
      { label: 'Estudos', href: '/a-palavra/estudo', icon: BookMarked },
      { label: 'Santuario', href: '/a-palavra/santuario', icon: Sparkles },
      { label: 'Arabe do Quran', href: '/a-presenca/arabe-quran', icon: Languages },
    ],
  },
  {
    id: 'pratique',
    label: 'Pratique',
    icon: Sun,
    items: [
      { label: 'Ferramentas', href: '/ferramentas', icon: Wrench },
      { label: 'A Presença', href: '/a-presenca', icon: Sun },
      { label: 'Aya do Dia', href: '/aya-do-dia', icon: Calendar },
      { label: 'Dhikr', href: '/a-presenca/dhikr', icon: Clock },
      { label: 'Duas', href: '/a-presenca/duas', icon: Heart },
      { label: 'Salah', href: '/a-presenca/salah', icon: Sun },
      { label: 'Hifz', href: '/a-palavra/hifz', icon: BookMarked },
      { label: 'Contemplativo', href: '/contemplativo', icon: Sparkles },
      { label: 'Sleep Stories', href: '/contemplativo/sleep', icon: Moon },
    ],
  },
  {
    id: 'reflita',
    label: 'Reflita',
    icon: Heart,
    items: [
      { label: 'A Alma', href: '/a-alma', icon: Heart },
      { label: 'Journal', href: '/a-alma/journal', icon: PenLine },
      { label: 'Hábitos', href: '/a-alma/habitos', icon: CheckSquare },
      { label: 'Plano Diário', href: '/a-jornada/plano-diario', icon: Calendar },
      { label: 'Rotina', href: '/a-alma/rotina', icon: Clock },
      { label: 'Como Você Está', href: '/a-alma/como-voce-esta', icon: Heart },
    ],
  },
  {
    id: 'lideranca',
    label: 'Liderança',
    icon: Crown,
    items: [
      { label: 'Liderança Profética', href: '/lideranca-profetica', icon: Crown },
    ],
  },
  {
    id: 'kids',
    label: 'Kids',
    icon: Star,
    items: [
      { label: 'Hub Kids', href: '/kids', icon: Star },
      { label: 'Quiz', href: '/kids/quiz', icon: Sparkles },
      { label: 'Histórias', href: '/kids/historias', icon: BookOpen },
      { label: 'Atividades', href: '/kids/atividades', icon: PenLine },
    ],
  },
]

const BOTTOM_LINKS: NavItem[] = [
  { label: 'Área de Membros', href: '/area-de-membros', icon: Crown },
  { label: 'Sobre', href: '/sobre', icon: Info },
  { label: 'Configurações', href: '/configuracoes', icon: Settings },
]

// ── CONTENT COUNTERS (hardcoded for premium polish) ──────────────────────────

const CONTENT_COUNTS: Record<string, string> = {
  '/a-palavra': '114',
  '/os-profetas': '17',
  '/trilhas': '12',
  '/a-biblia-do-kalam': '25',
  '/perguntas': '10',
  '/comprovacoes': '30',
  '/a-presenca/flashcards': '99',
  '/a-presenca/dhikr': '33',
}

// ── PREMIUM DIVIDER ──────────────────────────────────────────────────────────

const premiumDividerStyle: React.CSSProperties = {
  height: 1,
  background: `linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent)`,
  border: 'none',
}

// ── SIDEBAR COMPONENT ────────────────────────────────────────────────────────

export function Sidebar() {
  const { isOpen, isCollapsed, toggleCollapsed, close } = useSidebar()
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['comece-aqui', 'explore', 'estude', 'pratique', 'reflita', 'lideranca', 'kids']))
  const indicators = useNavIndicators()

  // Auto-expand category of active item
  useEffect(() => {
    for (const cat of NAV_CATEGORIES) {
      if (cat.items.some(item => pathname.startsWith(item.href))) {
        setExpandedCategories(prev => new Set([...prev, cat.id]))
        break
      }
    }
  }, [pathname])

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const sidebarWidth = isCollapsed ? 60 : 260

  return (
    <>
      {/* ── Inline responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .sidebar-mobile-overlay { display: none !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP SIDEBAR — lateral esquerda
      ═══════════════════════════════════════════════════════════════════════ */}
      <aside
        className="sidebar-desktop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: sidebarWidth,
          background: T.bg,
          borderRight: `1px solid ${T.border}`,
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.25s ease',
          overflow: 'hidden',
        }}
      >
        {/* Header: Logo + Collapse toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            padding: isCollapsed ? '16px 8px' : '16px 16px',
            minHeight: 56,
          }}
        >
          {!isCollapsed && (
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 18, color: T.gold, textShadow: '0 0 20px rgba(201,168,76,0.3)' }}>كلام</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 700, letterSpacing: '-0.02em' }}>KALAM</span>
            </Link>
          )}
          <button
            onClick={toggleCollapsed}
            title={isCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
            style={{
              background: 'none',
              border: 'none',
              color: T.muted,
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isCollapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>
        <div style={premiumDividerStyle} />

        {/* Home link */}
        <div style={{ padding: isCollapsed ? '8px 8px' : '8px 12px' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: isCollapsed ? '10px 0' : '10px 12px',
              borderRadius: 8,
              textDecoration: 'none',
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              background: pathname === '/' ? 'rgba(201,168,76,0.08)' : 'transparent',
              color: pathname === '/' ? T.gold : T.secondary,
              transition: 'all 0.2s ease',
            }}
          >
            <Home size={18} />
            {!isCollapsed && (
              <span style={{ fontSize: 14, fontWeight: pathname === '/' ? 600 : 400 }}>
                Início
              </span>
            )}
          </Link>
        </div>

        {/* Search trigger */}
        <div style={{ padding: isCollapsed ? '0 8px 8px' : '0 12px 8px' }}>
          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
            title="Buscar (⌘K)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: '100%',
              padding: isCollapsed ? '10px 0' : '10px 12px',
              borderRadius: 8,
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              background: 'rgba(201,168,76,0.04)',
              border: `1px solid ${T.border}`,
              color: T.muted,
              cursor: 'pointer',
              fontSize: 13,
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.2s ease',
            }}
          >
            <Search size={16} />
            {!isCollapsed && (
              <>
                <span style={{ flex: 1, textAlign: 'left' }}>Buscar...</span>
                <span style={{ fontSize: 11, opacity: 0.6 }}>⌘K</span>
              </>
            )}
          </button>
        </div>

        {/* Nav categories — scrollable (data-lenis-prevent stops Lenis from hijacking scroll here) */}
        <nav
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            overscrollBehavior: 'contain' as const,
            WebkitOverflowScrolling: 'touch',
            padding: isCollapsed ? '4px 8px' : '4px 12px',
            scrollbarWidth: 'thin',
            scrollbarColor: `${T.border} transparent`,
          }}
        >
          {NAV_CATEGORIES.map((cat) => {
            const isExpanded = expandedCategories.has(cat.id)
            const hasCatActive = cat.items.some(item => isActive(item.href))

            return (
              <div key={cat.id} style={{ marginBottom: 4 }}>
                {/* Category header */}
                <button
                  onClick={() => !isCollapsed && toggleCategory(cat.id)}
                  title={isCollapsed ? cat.label : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: isCollapsed ? '10px 0' : '8px 12px',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    borderRadius: 8,
                    border: 'none',
                    background: hasCatActive && isCollapsed ? 'rgba(201,168,76,0.08)' : 'transparent',
                    color: hasCatActive ? T.gold : T.muted,
                    cursor: 'pointer',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontFamily: 'var(--font-sans)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <cat.icon size={16} />
                  {!isCollapsed && (
                    <>
                      <span style={{ flex: 1, textAlign: 'left' }}>{cat.label}</span>
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </>
                  )}
                </button>

                {/* Category items */}
                {!isCollapsed && isExpanded && (
                  <div style={{ paddingLeft: 12, marginTop: 2 }}>
                    {cat.items.map((item) => {
                      const active = isActive(item.href)
                      const count = CONTENT_COUNTS[item.href]
                      const hasNovo = indicators.novoBadges.has(item.href)
                      const progressColor = indicators.progressDots.get(item.href)
                      const hasFlame = indicators.streakFlames.has(item.href)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '7px 12px',
                            borderRadius: 6,
                            fontSize: 13,
                            textDecoration: 'none',
                            color: active ? T.gold : T.secondary,
                            fontWeight: active ? 500 : 400,
                            background: active ? 'rgba(201,168,76,0.06)' : 'transparent',
                            position: 'relative',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {/* Premium active indicator — gradient bar */}
                          {active && (
                            <span
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '20%',
                                bottom: '20%',
                                width: 3,
                                borderRadius: 2,
                                background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.6), transparent)',
                              }}
                            />
                          )}
                          <span style={{ flex: 1 }}>{item.label}</span>
                          {/* Visual indicators */}
                          {hasNovo && (
                            <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 6px', borderRadius: 4, letterSpacing: '0.05em' }}>
                              NOVO
                            </span>
                          )}
                          {progressColor && (
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: progressColor === 'green' ? '#4ade80' : T.gold, flexShrink: 0 }} />
                          )}
                          {hasFlame && (
                            <Flame size={12} style={{ color: '#f97316', flexShrink: 0 }} />
                          )}
                          {count && !hasNovo && !progressColor && !hasFlame && (
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 600,
                                color: T.muted,
                                opacity: 0.7,
                              }}
                            >
                              {count}
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Bottom links */}
        <div style={premiumDividerStyle} />
        <div
          style={{
            padding: isCollapsed ? '8px 8px' : '8px 12px',
          }}
        >
          {BOTTOM_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: isCollapsed ? '8px 0' : '8px 12px',
                borderRadius: 6,
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                fontSize: 13,
                textDecoration: 'none',
                color: isActive(link.href) ? T.gold : T.muted,
                transition: 'color 0.2s ease',
              }}
            >
              <link.icon size={16} />
              {!isCollapsed && <span>{link.label}</span>}
            </Link>
          ))}
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE SIDEBAR — drawer overlay
      ═══════════════════════════════════════════════════════════════════════ */}
      {isOpen && (
        <div
          className="sidebar-mobile-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
          }}
        >
          {/* Backdrop */}
          <div
            onClick={close}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Drawer */}
          <aside
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: 280,
              background: T.bg,
              borderRight: `1px solid ${T.border}`,
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideInLeft 0.25s ease',
            }}
          >
            <style>{`
              @keyframes slideInLeft {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
              }
            `}</style>

            {/* Header with close */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
              }}
            >
              <Link href="/" onClick={close} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 18, color: T.gold, textShadow: '0 0 20px rgba(201,168,76,0.3)' }}>كلام</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 700 }}>KALAM</span>
              </Link>
              <button
                onClick={close}
                style={{ background: 'none', border: 'none', color: T.muted, cursor: 'pointer', padding: 4 }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={premiumDividerStyle} />

            {/* Home */}
            <div style={{ padding: '8px 12px' }}>
              <Link
                href="/"
                onClick={close}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  background: pathname === '/' ? 'rgba(201,168,76,0.08)' : 'transparent',
                  color: pathname === '/' ? T.gold : T.secondary,
                }}
              >
                <Home size={18} />
                <span style={{ fontSize: 14, fontWeight: pathname === '/' ? 600 : 400 }}>Início</span>
              </Link>
            </div>

            {/* Search trigger (mobile) */}
            <div style={{ padding: '0 12px 8px' }}>
              <button
                onClick={() => { close(); setTimeout(() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })), 300) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  background: 'rgba(201,168,76,0.04)',
                  border: `1px solid ${T.border}`,
                  color: T.muted,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <Search size={16} />
                <span style={{ flex: 1, textAlign: 'left' }}>Buscar...</span>
              </button>
            </div>

            {/* Nav — scrollable */}
            <nav
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                overflowY: 'auto',
                overscrollBehavior: 'contain' as const,
                WebkitOverflowScrolling: 'touch',
                padding: '4px 12px',
              }}
            >
              {NAV_CATEGORIES.map((cat) => {
                const isExpanded = expandedCategories.has(cat.id)
                const hasCatActive = cat.items.some(item => isActive(item.href))

                return (
                  <div key={cat.id} style={{ marginBottom: 4 }}>
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: 'none',
                        background: 'transparent',
                        color: hasCatActive ? T.gold : T.muted,
                        cursor: 'pointer',
                        fontSize: 12,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <cat.icon size={16} />
                      <span style={{ flex: 1, textAlign: 'left' }}>{cat.label}</span>
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>

                    {isExpanded && (
                      <div style={{ paddingLeft: 12, marginTop: 2 }}>
                        {cat.items.map((item) => {
                          const active = isActive(item.href)
                          const count = CONTENT_COUNTS[item.href]
                          const hasNovo = indicators.novoBadges.has(item.href)
                          const progressColor = indicators.progressDots.get(item.href)
                          const hasFlame = indicators.streakFlames.has(item.href)
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={close}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '8px 12px',
                                borderRadius: 6,
                                fontSize: 14,
                                textDecoration: 'none',
                                color: active ? T.gold : T.secondary,
                                fontWeight: active ? 500 : 400,
                                background: active ? 'rgba(201,168,76,0.06)' : 'transparent',
                                position: 'relative',
                              }}
                            >
                              {active && (
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '20%',
                                    bottom: '20%',
                                    width: 3,
                                    borderRadius: 2,
                                    background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.6), transparent)',
                                  }}
                                />
                              )}
                              <span style={{ flex: 1 }}>{item.label}</span>
                              {hasNovo && (
                                <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 6px', borderRadius: 4, letterSpacing: '0.05em' }}>
                                  NOVO
                                </span>
                              )}
                              {progressColor && (
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: progressColor === 'green' ? '#4ade80' : T.gold, flexShrink: 0 }} />
                              )}
                              {hasFlame && (
                                <Flame size={12} style={{ color: '#f97316', flexShrink: 0 }} />
                              )}
                              {count && !hasNovo && !progressColor && !hasFlame && (
                                <span
                                  style={{
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: T.muted,
                                    opacity: 0.7,
                                  }}
                                >
                                  {count}
                                </span>
                              )}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Bottom links */}
            <div style={premiumDividerStyle} />
            <div style={{ padding: '8px 12px 16px' }}>
              {BOTTOM_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 12px',
                    borderRadius: 6,
                    fontSize: 13,
                    textDecoration: 'none',
                    color: isActive(link.href) ? T.gold : T.muted,
                  }}
                >
                  <link.icon size={16} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
