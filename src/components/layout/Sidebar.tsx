'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Compass,
  BookOpen,
  Sun,
  Heart,
  Star,
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
  Languages,
  Layers,
  BookMarked,
  Scale,
  Crown,
  CheckSquare,
  Moon,
  Type,
  Zap,
  Flame,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { useNavIndicators } from '@/lib/hooks/useNavIndicators'

// ── SIDEBAR CONTEXT ──────────────────────────────────────────────────────────

type SidebarContextType = {
  isOpen: boolean
  isCollapsed: boolean
  toggleOpen: () => void
  toggleCollapsed: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  isCollapsed: true,
  toggleOpen: () => {},
  toggleCollapsed: () => {},
  close: () => {},
})

export function useSidebar() {
  return useContext(SidebarContext)
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(prev => !prev)
  const close = () => setIsOpen(false)

  return (
    <SidebarContext.Provider
      value={{ isOpen, isCollapsed: true, toggleOpen, toggleCollapsed: () => {}, close }}
    >
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
      { label: 'Santuário', href: '/a-palavra/santuario', icon: Sparkles },
      { label: 'Árabe do Quran', href: '/a-presenca/arabe-quran', icon: Languages },
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
    id: 'premium',
    label: 'Premium',
    icon: Sparkles,
    items: [
      { label: 'Meus Sahabas', href: '/meus-sahabas', icon: Crown },
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

// ── DIMENSIONS ───────────────────────────────────────────────────────────────

const RAIL_W = 56
const PANEL_W = 224

// ── RAIL BUTTON ──────────────────────────────────────────────────────────────

function RailBtn({
  icon: Icon,
  label,
  active,
  panelOpen,
  href,
  onClick,
}: {
  icon: typeof Home
  label: string
  active?: boolean
  panelOpen?: boolean
  href?: string
  onClick?: () => void
}) {
  const highlighted = active || panelOpen

  const inner = (
    <>
      {/* Left bar for active page */}
      {active && !panelOpen && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '28%',
            bottom: '28%',
            width: 2,
            borderRadius: '0 2px 2px 0',
            background: T.gold,
          }}
        />
      )}
      <Icon size={18} strokeWidth={highlighted ? 2.2 : 1.8} />
    </>
  )

  const base: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    border: 'none',
    borderRadius: 0,
    background: panelOpen ? 'rgba(201,168,76,0.07)' : 'transparent',
    color: highlighted ? T.gold : T.muted,
    cursor: 'pointer',
    transition: 'color 0.15s ease, background 0.15s ease',
    textDecoration: 'none',
  }

  if (href) {
    return (
      <Link href={href} title={label} style={base}>
        {inner}
      </Link>
    )
  }

  return (
    <button title={label} onClick={onClick} style={base}>
      {inner}
    </button>
  )
}

// ── SIDEBAR COMPONENT ────────────────────────────────────────────────────────

export function Sidebar() {
  const { isOpen, close } = useSidebar()
  const pathname = usePathname()
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const indicators = useNavIndicators()

  // Close panel on route change
  useEffect(() => {
    setActivePanel(null)
  }, [pathname])

  const togglePanel = (catId: string) =>
    setActivePanel(prev => (prev === catId ? null : catId))

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const openCat = activePanel ? NAV_CATEGORIES.find(c => c.id === activePanel) ?? null : null

  // ── Nav item renderer (used in both panel and mobile drawer) ────────────────
  const NavLink = ({
    item,
    onNavigate,
  }: {
    item: NavItem
    onNavigate?: () => void
  }) => {
    const active = isActive(item.href)
    const count = CONTENT_COUNTS[item.href]
    const hasNovo = indicators.novoBadges.has(item.href)
    const progressColor = indicators.progressDots.get(item.href)
    const hasFlame = indicators.streakFlames.has(item.href)
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 12px',
          borderRadius: 8,
          fontSize: 13,
          textDecoration: 'none',
          color: active ? T.gold : T.secondary,
          fontWeight: active ? 500 : 400,
          background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
          position: 'relative',
          transition: 'all 0.15s ease',
          marginBottom: 2,
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
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.7), transparent)',
            }}
          />
        )}
        <item.icon size={15} style={{ flexShrink: 0, opacity: active ? 1 : 0.55 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
        {hasNovo && (
          <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4, letterSpacing: '0.05em' }}>
            NOVO
          </span>
        )}
        {progressColor && !hasNovo && (
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: progressColor === 'green' ? '#4ade80' : T.gold, flexShrink: 0 }} />
        )}
        {hasFlame && (
          <Flame size={12} style={{ color: '#f97316', flexShrink: 0 }} />
        )}
        {item.href === '/meus-sahabas' && (
          <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4 }}>
            PRO
          </span>
        )}
        {count && !hasNovo && !progressColor && !hasFlame && item.href !== '/meus-sahabas' && (
          <span style={{ fontSize: 10, fontWeight: 600, color: T.muted, opacity: 0.7 }}>{count}</span>
        )}
      </Link>
    )
  }

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .sidebar-mobile-overlay { display: none !important; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes panelSlideIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .rail-btn-hover:hover {
          color: var(--rail-hover, #B3B0A6) !important;
          background: rgba(255,255,255,0.04) !important;
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════════════
          DESKTOP — 56px icon rail
      ════════════════════════════════════════════════════════════════════════ */}
      <aside
        id="kalam-rail"
        className="sidebar-desktop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: RAIL_W,
          background: T.bg,
          borderRight: `1px solid ${T.border}`,
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo — كلام glyph as home link */}
        <Link
          href="/"
          title="Kalam — Início"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: RAIL_W,
            flexShrink: 0,
            textDecoration: 'none',
            borderBottom: `1px solid ${T.border}`,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 22,
              color: T.gold,
              textShadow: '0 0 16px rgba(201,168,76,0.5)',
              lineHeight: 1,
            }}
          >
            ك
          </span>
        </Link>

        {/* Home + Search */}
        <div style={{ width: '100%', padding: '6px 0 0' }}>
          <RailBtn
            icon={Home}
            label="Início"
            active={pathname === '/'}
            href="/"
          />
          <RailBtn
            icon={Search}
            label="Buscar (⌘K)"
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
              )
            }
          />
        </div>

        {/* Thin divider */}
        <div style={{ width: 28, height: 1, background: T.border, flexShrink: 0, margin: '4px 0' }} />

        {/* Category icons — scrollable area */}
        <nav
          data-lenis-prevent
          onWheel={e => e.stopPropagation()}
          style={{
            flex: 1,
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: '2px 0',
            scrollbarWidth: 'none',
          }}
        >
          {NAV_CATEGORIES.map(cat => {
            const hasCatActive = cat.items.some(item => isActive(item.href))
            return (
              <RailBtn
                key={cat.id}
                icon={cat.icon}
                label={cat.label}
                active={hasCatActive}
                panelOpen={activePanel === cat.id}
                onClick={() => togglePanel(cat.id)}
              />
            )
          })}
        </nav>

        {/* Thin divider */}
        <div style={{ width: 28, height: 1, background: T.border, flexShrink: 0, margin: '4px 0' }} />

        {/* Bottom links */}
        <div style={{ width: '100%', paddingBottom: 8 }}>
          {BOTTOM_LINKS.map(link => (
            <RailBtn
              key={link.href}
              icon={link.icon}
              label={link.label}
              active={isActive(link.href)}
              href={link.href}
            />
          ))}
        </div>
      </aside>

      {/* ════════════════════════════════════════════════════════════════════════
          DESKTOP — Floating category panel
      ════════════════════════════════════════════════════════════════════════ */}
      {openCat && (
        <div className="sidebar-desktop">
          {/* Invisible backdrop — click closes panel */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 99 }}
            onClick={() => setActivePanel(null)}
          />

          {/* Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: RAIL_W,
              bottom: 0,
              width: PANEL_W,
              background: T.surface,
              borderRight: `1px solid ${T.border}`,
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              animation: 'panelSlideIn 0.16s ease',
              boxShadow: '6px 0 32px rgba(0,0,0,0.45)',
            }}
          >
            {/* Panel header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px 0 16px',
                height: RAIL_W,
                borderBottom: `1px solid ${T.border}`,
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <openCat.icon size={15} color={T.gold} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: T.text,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {openCat.label}
                </span>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: T.muted,
                  cursor: 'pointer',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Panel nav items */}
            <nav
              data-lenis-prevent
              onWheel={e => e.stopPropagation()}
              style={{
                flex: 1,
                overflowY: 'auto',
                overscrollBehavior: 'contain' as const,
                WebkitOverflowScrolling: 'touch',
                padding: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: `${T.border} transparent`,
              }}
            >
              {openCat.items.map(item => (
                <NavLink key={item.href} item={item} onNavigate={() => setActivePanel(null)} />
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════════
          MOBILE — Full drawer overlay (triggered via header hamburger)
      ════════════════════════════════════════════════════════════════════════ */}
      {isOpen && (
        <div
          className="sidebar-mobile-overlay"
          style={{ position: 'fixed', inset: 0, zIndex: 300 }}
        >
          {/* Backdrop */}
          <div
            onClick={close}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
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
              width: 288,
              background: T.bg,
              borderRight: `1px solid ${T.border}`,
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideInLeft 0.25s ease',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px 0 20px',
                height: 56,
                borderBottom: `1px solid ${T.border}`,
                flexShrink: 0,
              }}
            >
              <Link
                href="/"
                onClick={close}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 18, color: T.gold, textShadow: '0 0 20px rgba(201,168,76,0.3)' }}>كلام</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 700, letterSpacing: '-0.02em' }}>KALAM</span>
              </Link>
              <button
                onClick={close}
                style={{ background: 'none', border: 'none', color: T.muted, cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Home + Search */}
            <div style={{ padding: '8px 12px 4px' }}>
              <Link
                href="/"
                onClick={close}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  background: pathname === '/' ? 'rgba(201,168,76,0.08)' : 'transparent',
                  color: pathname === '/' ? T.gold : T.secondary,
                  marginBottom: 4,
                }}
              >
                <Home size={18} />
                <span style={{ fontSize: 14, fontWeight: pathname === '/' ? 600 : 400 }}>Início</span>
              </Link>
              <button
                onClick={() => {
                  close()
                  setTimeout(
                    () =>
                      document.dispatchEvent(
                        new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
                      ),
                    280
                  )
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '9px 12px',
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

            {/* Mobile nav — scrollable */}
            <MobileNav
              pathname={pathname}
              indicators={indicators}
              isActive={isActive}
              onNavigate={close}
            />

            {/* Bottom links */}
            <div
              style={{
                borderTop: `1px solid ${T.border}`,
                padding: '8px 12px 16px',
                flexShrink: 0,
              }}
            >
              {BOTTOM_LINKS.map(link => (
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

// ── MOBILE NAV (accordion categories) ────────────────────────────────────────

function MobileNav({
  pathname,
  indicators,
  isActive,
  onNavigate,
}: {
  pathname: string
  indicators: ReturnType<typeof useNavIndicators>
  isActive: (href: string) => boolean
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => {
      // pre-expand the category of the active route
      const active = NAV_CATEGORIES.find(c => c.items.some(i => isActive(i.href)))
      return new Set(active ? [active.id] : ['comece-aqui'])
    }
  )

  const toggle = (id: string) =>
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <nav
      data-lenis-prevent
      onWheel={e => e.stopPropagation()}
      style={{
        flex: 1,
        overflowY: 'auto',
        overscrollBehavior: 'contain' as const,
        WebkitOverflowScrolling: 'touch',
        padding: '4px 12px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#272230 transparent',
      }}
    >
      {NAV_CATEGORIES.map(cat => {
        const isExp = expanded.has(cat.id)
        const hasCatActive = cat.items.some(i => isActive(i.href))
        return (
          <div key={cat.id} style={{ marginBottom: 2 }}>
            <button
              onClick={() => toggle(cat.id)}
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
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                fontFamily: 'var(--font-sans)',
              }}
            >
              <cat.icon size={15} />
              <span style={{ flex: 1, textAlign: 'left' }}>{cat.label}</span>
              {isExp ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
            </button>

            {isExp && (
              <div style={{ paddingLeft: 8, marginBottom: 4 }}>
                {cat.items.map(item => {
                  const active = isActive(item.href)
                  const count = CONTENT_COUNTS[item.href]
                  const hasNovo = indicators.novoBadges.has(item.href)
                  const progressColor = indicators.progressDots.get(item.href)
                  const hasFlame = indicators.streakFlames.has(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '8px 12px',
                        borderRadius: 8,
                        fontSize: 14,
                        textDecoration: 'none',
                        color: active ? T.gold : T.secondary,
                        fontWeight: active ? 500 : 400,
                        background: active ? 'rgba(201,168,76,0.07)' : 'transparent',
                        position: 'relative',
                        marginBottom: 1,
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
                      <item.icon size={15} style={{ flexShrink: 0, opacity: active ? 1 : 0.55 }} />
                      <span style={{ flex: 1 }}>{item.label}</span>
                      {hasNovo && (
                        <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4, letterSpacing: '0.05em' }}>
                          NOVO
                        </span>
                      )}
                      {progressColor && !hasNovo && (
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: progressColor === 'green' ? '#4ade80' : T.gold, flexShrink: 0 }} />
                      )}
                      {hasFlame && (
                        <Flame size={12} style={{ color: '#f97316', flexShrink: 0 }} />
                      )}
                      {item.href === '/meus-sahabas' && (
                        <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4 }}>
                          PRO
                        </span>
                      )}
                      {count && !hasNovo && !progressColor && !hasFlame && item.href !== '/meus-sahabas' && (
                        <span style={{ fontSize: 10, fontWeight: 600, color: '#7A7870', opacity: 0.7 }}>{count}</span>
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
  )
}
