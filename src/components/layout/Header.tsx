'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Settings, User, LogOut, Search, Menu } from 'lucide-react'
import { useAuth } from '@/providers/auth-provider'
import { useSidebar } from './Sidebar'
import { SearchDialog } from '@/components/shared/SearchDialog'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const { toggleOpen } = useSidebar()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .header-desktop-logo { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .header-hamburger { display: none !important; }
          .header-mobile-logo { display: none !important; }
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
        {/* Left: Hamburger (mobile) + Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Hamburger — mobile only */}
          <button
            className="header-hamburger"
            onClick={toggleOpen}
            aria-label="Abrir menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: '#F0EBE2',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
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
          </Link>
        </div>

        {/* Right actions: Search + Auth + Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar (Cmd+K)"
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
            <Search size={18} strokeWidth={1.5} />
          </button>

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

          {/* Settings — desktop only */}
          <Link
            href="/configuracoes"
            className="header-desktop-logo"
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
          </Link>
        </div>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
