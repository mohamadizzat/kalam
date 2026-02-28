'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'A Palavra', href: '/a-palavra' },
  { label: 'A Presenca', href: '/a-presenca' },
  { label: 'A Jornada', href: '/a-jornada' },
  { label: 'A Alma', href: '/a-alma' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 768px) { .header-desktop-nav { display: none !important; } }
      `}</style>

      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: 'rgba(13,11,18,0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #272230' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: '22px',
            letterSpacing: '-0.02em',
            color: '#F0EBE2',
          }}>
            KALAM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="header-desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#C9A84C' : '#7A7870',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#C9A84C' : '#7A7870'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </header>
    </>
  )
}
