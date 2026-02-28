'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

const NAV_LINKS = [
  { label: 'Os Profetas', href: '/os-profetas' },
  { label: 'A Mensagem', href: '/a-mensagem' },
  { label: 'O Sistema', href: '/o-sistema' },
  { label: 'Estudos', href: '/estudos' },
  { label: 'Sobre', href: '/sobre' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 10, textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Amiri', serif",
            fontSize: 22,
            color: '#C9A84C',
            lineHeight: 1,
          }}>
            كلام
          </span>
          <span style={{
            width: 1, height: 16,
            background: 'rgba(201,168,76,0.2)',
            display: 'inline-block',
            alignSelf: 'center',
          }} />
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#F5F5F0',
          }}>
            KALAM
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: 8,
            background: 'transparent',
            color: '#8A8A7A',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
            e.currentTarget.style.color = '#C9A84C'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
            e.currentTarget.style.color = '#8A8A7A'
          }}
        >
          <Menu size={18} />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  )
}
