'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Settings, Map, User, LogOut, Search } from 'lucide-react'
import { useAuth } from '@/providers/auth-provider'

const NAV_LINKS = [
  { label: 'A Palavra', href: '/a-palavra' },
  { label: 'A Presenca', href: '/a-presenca' },
  { label: 'A Jornada', href: '/a-jornada' },
  { label: 'A Alma', href: '/a-alma' },
  { label: 'Kids', href: '/kids' },
  { label: 'Sobre', href: '/sobre' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [greeting, setGreeting] = useState('')
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) setGreeting('Bom dia')
      else if (hour >= 12 && hour < 18) setGreeting('Boa tarde')
      else setGreeting('Boa noite')
    }
    updateGreeting()
    const interval = setInterval(updateGreeting, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .header-desktop-nav { display: none !important; }
          .header-settings-label { display: none !important; }
        }
        @media (min-width: 769px) {
          .header-greeting { display: none !important; }
        }
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
          padding: '14px 20px',
          background: scrolled
            ? 'rgba(13,11,18,0.92)'
            : 'rgba(13,11,18,0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(39,34,48,0.8)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Arabic mark */}
          <span style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: '20px',
            color: '#C9A84C',
            lineHeight: 1,
          }}>
            كلام
          </span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '-0.02em',
            color: '#F0EBE2',
          }}>
            KALAM
          </span>
          {greeting && (
            <span
              className="header-greeting"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                color: '#7A7870',
                marginLeft: 2,
              }}
            >
              {greeting}
            </span>
          )}
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
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#C9A84C' : '#7A7870',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#B3B0A6'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#C9A84C' : '#7A7870'
                }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '2px',
                    borderRadius: '1px',
                    background: '#C9A84C',
                  }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Mapa */}
          <Link
            href="/mapa"
            aria-label="Mapa do conteudo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: pathname === '/mapa' ? '#C9A84C' : '#7A7870',
              transition: 'color 0.2s ease',
              padding: '6px',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = pathname === '/mapa' ? '#C9A84C' : '#7A7870'
            }}
          >
            <Map size={18} strokeWidth={1.5} />
          </Link>

          {/* Search */}
          <Link
            href="/a-palavra/busca"
            aria-label="Buscar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: pathname === '/a-palavra/busca' ? '#C9A84C' : '#7A7870',
              transition: 'color 0.2s ease',
              padding: '6px',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = pathname === '/a-palavra/busca' ? '#C9A84C' : '#7A7870'
            }}
          >
            <Search size={18} strokeWidth={1.5} />
          </Link>

          {/* Auth */}
          {user ? (
            <button
              onClick={() => signOut()}
              aria-label="Sair"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#7A7870',
                transition: 'color 0.2s ease',
                padding: '6px',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#7A7870' }}
            >
              <LogOut size={18} strokeWidth={1.5} />
            </button>
          ) : (
            <Link
              href="/entrar"
              aria-label="Entrar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: pathname === '/entrar' ? '#C9A84C' : '#7A7870',
                transition: 'color 0.2s ease',
                padding: '6px',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = pathname === '/entrar' ? '#C9A84C' : '#7A7870' }}
            >
              <User size={18} strokeWidth={1.5} />
            </Link>
          )}

          {/* Settings */}
          <Link
            href="/configuracoes"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              color: pathname === '/configuracoes' ? '#C9A84C' : '#7A7870',
              transition: 'color 0.2s ease',
              padding: '6px',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = pathname === '/configuracoes' ? '#C9A84C' : '#7A7870'
            }}
          >
            <Settings size={18} strokeWidth={1.5} />
            <span
              className="header-settings-label"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Config
            </span>
          </Link>
        </div>
      </header>
    </>
  )
}
