'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, BookOpen, Heart, MoreHorizontal } from 'lucide-react'
import { useSidebar } from './Sidebar'

const TABS = [
  { label: 'Início', href: '/', Icon: Home },
  { label: 'Explorar', href: '/a-mensagem', Icon: Compass, matchPaths: ['/a-mensagem', '/a-ponte', '/os-profetas', '/o-sistema', '/biblioteca', '/perguntas', '/comprovacoes', '/descobrir'] },
  { label: 'Estudar', href: '/a-palavra', Icon: BookOpen, matchPaths: ['/a-palavra', '/trilhas', '/a-biblia-do-kalam', '/a-presenca'] },
  { label: 'Refletir', href: '/a-alma', Icon: Heart, matchPaths: ['/a-alma', '/a-jornada'] },
  { label: 'Menu', href: '#more', Icon: MoreHorizontal },
]

export function BottomNav() {
  const pathname = usePathname()
  const { toggleOpen } = useSidebar()

  return (
    <>
      <style>{`@media (min-width: 769px) { .bottom-nav { display: none !important; } }`}</style>
      <nav
        className="bottom-nav"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          minHeight: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: 'rgba(13,11,18,0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(39,34,48,0.8)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {TABS.map(({ label, href, Icon, matchPaths }) => {
          const isMore = href === '#more'
          const isActive = isMore
            ? false
            : href === '/'
              ? pathname === '/'
              : matchPaths
                ? matchPaths.some(p => pathname.startsWith(p))
                : pathname.startsWith(href)

          if (isMore) {
            return (
              <button
                key={label}
                onClick={toggleOpen}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  padding: '8px 12px',
                  color: '#A09880',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
              >
                <Icon size={22} strokeWidth={1.5} />
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '0.5px',
                  lineHeight: 1,
                  fontWeight: 400,
                }}>
                  {label}
                </span>
              </button>
            )
          }

          return (
            <Link
              key={label}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                padding: '8px 12px',
                textDecoration: 'none',
                color: isActive ? '#C9A84C' : '#A09880',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
            >
              {/* Active indicator dot */}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  top: '0px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#C9A84C',
                  boxShadow: '0 0 14px rgba(201,168,76,0.8)',
                }} />
              )}
              <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '0.5px',
                lineHeight: 1,
                fontWeight: isActive ? 600 : 400,
              }}>
                {label}
              </span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
