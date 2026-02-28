'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Star, Library, Compass } from 'lucide-react'

const TABS = [
  { label: 'Início', href: '/', Icon: Home },
  { label: 'Trilhas', href: '/trilhas', Icon: BookOpen },
  { label: 'Aya', href: '/aya-do-dia', Icon: Star },
  { label: 'Biblioteca', href: '/biblioteca', Icon: Library },
  { label: 'Explorar', href: '/estudos', Icon: Compass },
]

export function BottomNav() {
  const pathname = usePathname()

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
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {TABS.map(({ label, href, Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '8px 12px',
                textDecoration: 'none',
                color: isActive ? '#C9A84C' : '#5A5A50',
                transition: 'color 0.2s ease',
              }}
            >
              <Icon size={22} />
              <span style={{
                fontFamily: "'Inter Variable', Inter, system-ui, sans-serif",
                fontSize: 10,
                letterSpacing: '0.5px',
                lineHeight: 1,
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
