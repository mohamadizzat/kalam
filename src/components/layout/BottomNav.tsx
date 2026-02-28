'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Sun, Compass, Heart, Sparkles } from 'lucide-react'

const TABS = [
  { label: 'A Palavra', href: '/a-palavra', Icon: BookOpen },
  { label: 'A Presenca', href: '/a-presenca', Icon: Sun },
  { label: 'A Jornada', href: '/a-jornada', Icon: Compass },
  { label: 'A Alma', href: '/a-alma', Icon: Heart },
  { label: 'Kalam AI', href: '#', Icon: Sparkles, disabled: true },
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
          background: '#0D0B12',
          borderTop: '1px solid #272230',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {TABS.map(({ label, href, Icon, disabled }) => {
          const isActive = !disabled && pathname.startsWith(href) && href !== '#'
          return (
            <Link
              key={label}
              href={href}
              aria-disabled={disabled}
              tabIndex={disabled ? -1 : undefined}
              onClick={disabled ? (e) => e.preventDefault() : undefined}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '8px 12px',
                textDecoration: 'none',
                color: isActive ? '#C9A84C' : '#7A7870',
                opacity: disabled ? 0.4 : 1,
                transition: 'color 0.2s ease',
                pointerEvents: disabled ? 'none' : 'auto',
              }}
            >
              <Icon size={22} />
              <span style={{
                fontFamily: 'var(--font-sans)',
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
