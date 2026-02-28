'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Sun, Compass, Heart, Star } from 'lucide-react'

const TABS = [
  { label: 'A Palavra', href: '/a-palavra', Icon: BookOpen },
  { label: 'A Presenca', href: '/a-presenca', Icon: Sun },
  { label: 'A Jornada', href: '/a-jornada', Icon: Compass },
  { label: 'A Alma', href: '/a-alma', Icon: Heart },
  { label: 'Kids', href: '/kids', Icon: Star },
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
          height: 68,
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
        {TABS.map(({ label, href, Icon }) => {
          const isActive = pathname.startsWith(href)
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
                color: isActive ? '#C9A84C' : '#7A7870',
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
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#C9A84C',
                  boxShadow: '0 0 8px rgba(201,168,76,0.5)',
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
