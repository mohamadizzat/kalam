'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  BookOpen,
  MessageCircle,
  Users as UsersIcon,
  Layers,
  Search,
  ChevronDown,
  ChevronRight,
  PanelLeft,
  PanelLeftClose,
  X,
  Wrench,
  Sun,
  Calendar,
  Clock,
  Heart,
  CheckSquare,
  Moon,
  Crown,
  Sparkles,
  Library,
  Scale,
  Type,
  Zap,
  BookText,
  Route,
  BookMarked,
  Languages,
  PenLine,
  Star,
  Info,
  Settings,
  Flame,
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
      try {
        localStorage.setItem('kalam-sidebar-state', next ? 'collapsed' : 'expanded')
      } catch {}
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

const SIDEBAR_W = 264

// ── PRIMARY NAV — 4 curated journeys ────────────────────────────────────────

type PrimaryItem = {
  label: string
  subtitle: string
  href: string
  icon: typeof Home
}

const PRIMARY_NAV: PrimaryItem[] = [
  {
    label: 'A Mensagem',
    subtitle: 'O capítulo final',
    href: '/a-mensagem',
    icon: MessageCircle,
  },
  {
    label: 'Os Profetas',
    subtitle: 'Histórias que você já conhece',
    href: '/os-profetas',
    icon: UsersIcon,
  },
  {
    label: 'A Ponte',
    subtitle: 'Do que você crê ao Alcorão',
    href: '/a-ponte',
    icon: Layers,
  },
  {
    label: 'A Palavra',
    subtitle: 'O Alcorão em português',
    href: '/a-palavra',
    icon: BookOpen,
  },
]

// ── SECONDARY NAV — everything else ─────────────────────────────────────────

type NavItem = { label: string; href: string; icon: typeof Home }

const MORE_GROUPS: Array<{ label: string; items: NavItem[] }> = [
  {
    label: 'Explore',
    items: [
      { label: 'Seu Nome em Árabe', href: '/descobrir/seu-nome-em-arabe', icon: Type },
      { label: 'Qual Profeta Te Inspira?', href: '/descobrir/qual-profeta-voce-e', icon: Zap },
      { label: 'Comprovações', href: '/comprovacoes', icon: Scale },
      { label: 'O Sistema', href: '/o-sistema', icon: Sparkles },
      { label: 'Biblioteca', href: '/biblioteca', icon: Library },
    ],
  },
  {
    label: 'Estude',
    items: [
      { label: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam', icon: BookText },
      { label: 'Trilhas', href: '/trilhas', icon: Route },
      { label: 'Escrituras Reveladas', href: '/a-ponte/escrituras-reveladas', icon: BookMarked },
      { label: 'Árabe do Quran', href: '/a-presenca/arabe-quran', icon: Languages },
    ],
  },
  {
    label: 'Pratique',
    items: [
      { label: 'Ferramentas', href: '/ferramentas', icon: Wrench },
      { label: 'A Presença', href: '/a-presenca', icon: Sun },
      { label: 'Aya do Dia', href: '/aya-do-dia', icon: Calendar },
      { label: 'Dhikr', href: '/a-presenca/dhikr', icon: Clock },
      { label: 'Duas', href: '/a-presenca/duas', icon: Heart },
      { label: 'Hifz', href: '/a-palavra/hifz', icon: BookMarked },
      { label: 'Contemplativo', href: '/contemplativo', icon: Sparkles },
      { label: 'Sleep Stories', href: '/contemplativo/sleep', icon: Moon },
    ],
  },
  {
    label: 'Reflita',
    items: [
      { label: 'A Alma', href: '/a-alma', icon: Heart },
      { label: 'Journal', href: '/a-alma/journal', icon: PenLine },
      { label: 'Hábitos', href: '/a-alma/habitos', icon: CheckSquare },
      { label: 'Liderança Profética', href: '/lideranca-profetica', icon: Crown },
    ],
  },
  {
    label: 'Comunidade',
    items: [
      { label: 'Meus Sahabas', href: '/meus-sahabas', icon: Crown },
      { label: 'Hub Kids', href: '/kids', icon: Star },
    ],
  },
]

// ── DESTAQUES — 5 top content quick links ────────────────────────────────────

const DESTAQUES: NavItem[] = [
  { label: 'Liderança Profética', href: '/lideranca-profetica', icon: Crown },
  { label: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam', icon: BookText },
  { label: 'Trilhas Guiadas', href: '/trilhas', icon: Route },
  { label: 'Mulheres no Quran', href: '/a-jornada/mulheres', icon: Heart },
  { label: 'Kalam Academy', href: '/academy', icon: Sparkles },
]

const BOTTOM_LINKS: NavItem[] = [
  { label: 'Perguntas Difíceis', href: '/perguntas', icon: MessageCircle },
  { label: 'Área de Membros', href: '/area-de-membros', icon: Crown },
  { label: 'Configurações', href: '/configuracoes', icon: Settings },
]

const CONTENT_COUNTS: Record<string, string> = {
  '/a-palavra': '114',
  '/os-profetas': '17',
  '/trilhas': '12',
  '/a-biblia-do-kalam': '25',
  '/perguntas': '10',
  '/comprovacoes': '30',
  '/a-presenca/dhikr': '33',
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function isHrefActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

// ── PRIMARY NAV ITEM — large format with subtitle ────────────────────────────

function PrimaryNavItem({
  item,
  active,
}: {
  item: PrimaryItem
  active: boolean
}) {
  return (
    <Link
      href={item.href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 10px',
        borderRadius: 10,
        textDecoration: 'none',
        background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
        border: `1px solid ${active ? 'rgba(201,168,76,0.18)' : 'transparent'}`,
        transition: 'all 0.15s ease',
        position: 'relative',
        marginBottom: 2,
      }}
    >
      {active && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '24%',
            bottom: '24%',
            width: 3,
            borderRadius: '0 2px 2px 0',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.8), transparent)',
          }}
        />
      )}

      {/* Icon box */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 9,
          background: active ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${active ? 'rgba(201,168,76,0.22)' : 'rgba(255,255,255,0.06)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <item.icon
          size={16}
          color={active ? T.gold : T.secondary}
          strokeWidth={active ? 2.2 : 1.8}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: active ? T.gold : T.text,
            lineHeight: 1.2,
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontSize: 11,
            color: T.muted,
            marginTop: 2,
            lineHeight: 1.2,
          }}
        >
          {item.subtitle}
        </div>
      </div>
    </Link>
  )
}

// ── SECONDARY NAV ITEM — compact ─────────────────────────────────────────────

function SecondaryNavItem({
  item,
  active,
  indicators,
}: {
  item: NavItem
  active: boolean
  indicators: ReturnType<typeof useNavIndicators>
}) {
  const count = CONTENT_COUNTS[item.href]
  const hasNovo = indicators.novoBadges.has(item.href)
  const progressColor = indicators.progressDots.get(item.href)
  const hasFlame = indicators.streakFlames.has(item.href)

  return (
    <Link
      href={item.href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        borderRadius: 7,
        fontSize: 13,
        textDecoration: 'none',
        color: active ? T.gold : T.secondary,
        fontWeight: active ? 600 : 400,
        background: active ? 'rgba(201,168,76,0.07)' : 'transparent',
        transition: 'all 0.15s ease',
        marginBottom: 1,
      }}
    >
      <item.icon size={14} style={{ flexShrink: 0, opacity: active ? 1 : 0.5 }} />
      <span style={{ flex: 1 }}>{item.label}</span>

      {item.href === '/meus-sahabas' && (
        <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4 }}>
          PRO
        </span>
      )}
      {hasNovo && (
        <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4, letterSpacing: '0.05em' }}>
          NOVO
        </span>
      )}
      {progressColor && !hasNovo && (
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: progressColor === 'green' ? '#4ade80' : T.gold, flexShrink: 0 }} />
      )}
      {hasFlame && <Flame size={11} style={{ color: '#f97316', flexShrink: 0 }} />}
      {count && !hasNovo && !progressColor && !hasFlame && item.href !== '/meus-sahabas' && (
        <span style={{ fontSize: 10, color: T.muted, opacity: 0.65 }}>{count}</span>
      )}
    </Link>
  )
}

// ── SIDEBAR COMPONENT ────────────────────────────────────────────────────────

export function Sidebar() {
  const { isOpen, isCollapsed, toggleCollapsed, close } = useSidebar()
  const pathname = usePathname()
  const [maisOpen, setMaisOpen] = useState(false)
  const indicators = useNavIndicators()

  const isActive = (href: string) => isHrefActive(href, pathname)

  // Auto-open Mais if current page is in secondary nav
  useEffect(() => {
    const inMore = MORE_GROUPS.some(g =>
      g.items.some(i => isHrefActive(i.href, pathname))
    )
    if (inMore) setMaisOpen(true)
  }, [pathname])

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
      `}</style>

      {/* ══ When hidden — floating show button ════════════════════════════════ */}
      {isCollapsed && (
        <button
          className="sidebar-desktop"
          onClick={toggleCollapsed}
          title="Mostrar menu"
          style={{
            position: 'fixed',
            top: 14,
            left: 14,
            zIndex: 101,
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 8,
            width: 34,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: T.muted,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <PanelLeft size={16} />
        </button>
      )}

      {/* ══ DESKTOP SIDEBAR ═══════════════════════════════════════════════════ */}
      {!isCollapsed && (
        <aside
          className="sidebar-desktop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: SIDEBAR_W,
            background: T.bg,
            borderRight: `1px solid ${T.border}`,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header: logo + hide button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 10px 0 18px',
              height: 52,
              borderBottom: `1px solid ${T.border}`,
              flexShrink: 0,
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 19,
                  color: T.gold,
                  textShadow: '0 0 18px rgba(201,168,76,0.4)',
                  lineHeight: 1,
                }}
              >
                كلام
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 14,
                  color: T.text,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                KALAM
              </span>
            </Link>
            <button
              onClick={toggleCollapsed}
              title="Ocultar menu"
              style={{
                background: 'none',
                border: 'none',
                color: T.muted,
                cursor: 'pointer',
                padding: 6,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 6,
              }}
            >
              <PanelLeftClose size={16} />
            </button>
          </div>

          {/* Search */}
          <div style={{ padding: '10px 12px 6px' }}>
            <button
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
                )
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
                padding: '8px 12px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${T.border}`,
                color: T.muted,
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'var(--font-sans)',
                transition: 'border-color 0.15s ease',
              }}
            >
              <Search size={13} />
              <span style={{ flex: 1, textAlign: 'left' }}>Buscar...</span>
              <span style={{ fontSize: 11, opacity: 0.45 }}>⌘K</span>
            </button>
          </div>

          {/* Home link */}
          <div style={{ padding: '0 12px 6px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 10px',
                borderRadius: 7,
                fontSize: 13,
                textDecoration: 'none',
                color: pathname === '/' ? T.gold : T.secondary,
                background: pathname === '/' ? 'rgba(201,168,76,0.07)' : 'transparent',
                transition: 'all 0.15s ease',
              }}
            >
              <Home size={14} style={{ flexShrink: 0 }} />
              <span>Início</span>
            </Link>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: T.border, margin: '0 12px 8px' }} />

          {/* 4 primary journeys */}
          <nav style={{ padding: '0 12px', flexShrink: 0 }}>
            {PRIMARY_NAV.map(item => (
              <PrimaryNavItem
                key={item.href}
                item={item}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          {/* Divider */}
          <div style={{ height: 1, background: T.border, margin: '8px 12px 4px' }} />

          {/* DESTAQUES — 5 top content quick links */}
          <div style={{ padding: '0 12px', flexShrink: 0 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted, padding: '4px 10px 3px', opacity: 0.55 }}>
              Destaques
            </div>
            {DESTAQUES.map(item => (
              <SecondaryNavItem
                key={item.href}
                item={item}
                active={isActive(item.href)}
                indicators={indicators}
              />
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: T.border, margin: '4px 12px 0' }} />

          {/* Mais → accordion */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
            }}
          >
            <button
              onClick={() => setMaisOpen(!maisOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 22px',
                background: 'none',
                border: 'none',
                color: T.muted,
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                width: '100%',
                flexShrink: 0,
                transition: 'color 0.15s ease',
              }}
            >
              {maisOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              <span>Mais</span>
            </button>

            {maisOpen && (
              <div
                data-lenis-prevent
                onWheel={e => e.stopPropagation()}
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '0 12px 8px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: `${T.border} transparent`,
                }}
              >
                {MORE_GROUPS.map(group => (
                  <div key={group.label} style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: T.muted,
                        padding: '4px 10px 2px',
                        opacity: 0.6,
                      }}
                    >
                      {group.label}
                    </div>
                    {group.items.map(item => (
                      <SecondaryNavItem
                        key={item.href}
                        item={item}
                        active={isActive(item.href)}
                        indicators={indicators}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom links */}
          <div
            style={{
              borderTop: `1px solid ${T.border}`,
              padding: '8px 12px 12px',
              flexShrink: 0,
            }}
          >
            {BOTTOM_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 10px',
                  borderRadius: 7,
                  fontSize: 12,
                  textDecoration: 'none',
                  color: isActive(link.href) ? T.gold : T.muted,
                  transition: 'color 0.15s ease',
                }}
              >
                <link.icon size={13} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* ══ MOBILE DRAWER ═════════════════════════════════════════════════════ */}
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
                padding: '0 10px 0 18px',
                height: 52,
                borderBottom: `1px solid ${T.border}`,
                flexShrink: 0,
              }}
            >
              <Link
                href="/"
                onClick={close}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 19, color: T.gold, lineHeight: 1 }}>
                  كلام
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: T.text, fontWeight: 700 }}>
                  KALAM
                </span>
              </Link>
              <button
                onClick={close}
                style={{
                  background: 'none',
                  border: 'none',
                  color: T.muted,
                  cursor: 'pointer',
                  padding: 6,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Search */}
            <div style={{ padding: '10px 14px 6px' }}>
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
                  gap: 8,
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${T.border}`,
                  color: T.muted,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <Search size={15} />
                <span style={{ flex: 1, textAlign: 'left' }}>Buscar...</span>
              </button>
            </div>

            {/* Home */}
            <div style={{ padding: '0 14px 6px' }}>
              <Link
                href="/"
                onClick={close}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 10px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  background: pathname === '/' ? 'rgba(201,168,76,0.08)' : 'transparent',
                  color: pathname === '/' ? T.gold : T.secondary,
                }}
              >
                <Home size={16} />
                <span style={{ fontSize: 14, fontWeight: pathname === '/' ? 600 : 400 }}>
                  Início
                </span>
              </Link>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: T.border, margin: '0 14px 8px' }} />

            {/* Primary nav */}
            <div style={{ padding: '0 14px 8px' }}>
              {PRIMARY_NAV.map(item => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 10px',
                      borderRadius: 10,
                      textDecoration: 'none',
                      background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                      border: `1px solid ${active ? 'rgba(201,168,76,0.18)' : 'transparent'}`,
                      marginBottom: 2,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 9,
                        flexShrink: 0,
                        background: active ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${active ? 'rgba(201,168,76,0.22)' : 'rgba(255,255,255,0.06)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <item.icon size={16} color={active ? T.gold : T.secondary} strokeWidth={active ? 2.2 : 1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: active ? T.gold : T.text }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: T.border, margin: '0 14px 4px' }} />

            {/* DESTAQUES — mobile */}
            <div style={{ padding: '4px 14px 0', flexShrink: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted, padding: '4px 10px 3px', opacity: 0.55 }}>
                Destaques
              </div>
              {DESTAQUES.map(item => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '7px 10px',
                      borderRadius: 7,
                      fontSize: 13,
                      fontWeight: active ? 600 : 400,
                      textDecoration: 'none',
                      color: active ? T.gold : T.secondary,
                      background: active ? 'rgba(201,168,76,0.07)' : 'transparent',
                      marginBottom: 1,
                    }}
                  >
                    <item.icon size={14} style={{ flexShrink: 0, opacity: active ? 1 : 0.55 }} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: T.border, margin: '4px 14px 0' }} />

            {/* Mais → mobile (scrollable) */}
            <MobileMaisNav isActive={isActive} indicators={indicators} onNavigate={close} />

            {/* Bottom links */}
            <div
              style={{
                borderTop: `1px solid ${T.border}`,
                padding: '8px 14px 16px',
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
                    gap: 8,
                    padding: '6px 10px',
                    borderRadius: 7,
                    fontSize: 13,
                    textDecoration: 'none',
                    color: isActive(link.href) ? T.gold : T.muted,
                  }}
                >
                  <link.icon size={13} />
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

// ── MOBILE MAIS SECTION ──────────────────────────────────────────────────────

function MobileMaisNav({
  isActive,
  indicators,
  onNavigate,
}: {
  isActive: (href: string) => boolean
  indicators: ReturnType<typeof useNavIndicators>
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 24px',
          background: 'none',
          border: 'none',
          color: T.muted,
          cursor: 'pointer',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
          width: '100%',
          flexShrink: 0,
        }}
      >
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <span>Mais</span>
      </button>

      {open && (
        <div
          data-lenis-prevent
          onWheel={e => e.stopPropagation()}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 14px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#272230 transparent',
          }}
        >
          {MORE_GROUPS.map(group => (
            <div key={group.label} style={{ marginBottom: 10 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: T.muted,
                  padding: '4px 10px 2px',
                  opacity: 0.55,
                }}
              >
                {group.label}
              </div>
              {group.items.map(item => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '7px 10px',
                      borderRadius: 7,
                      fontSize: 13,
                      fontWeight: active ? 600 : 400,
                      textDecoration: 'none',
                      color: active ? T.gold : T.secondary,
                      background: active ? 'rgba(201,168,76,0.07)' : 'transparent',
                      marginBottom: 1,
                    }}
                  >
                    <item.icon size={14} style={{ flexShrink: 0, opacity: active ? 1 : 0.5 }} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.href === '/meus-sahabas' && (
                      <span style={{ fontSize: 9, fontWeight: 700, color: T.gold, background: 'rgba(201,168,76,0.12)', padding: '2px 5px', borderRadius: 4 }}>
                        PRO
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
