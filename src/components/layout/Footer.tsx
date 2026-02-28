'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{
      background: '#0D0B12',
      padding: '0 24px 48px',
      textAlign: 'center',
    }}>
      {/* Gold divider */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto 48px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)',
      }} />

      {/* Arabic mark */}
      <div style={{ marginBottom: 20 }}>
        <span style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 36,
          color: 'rgba(201,168,76,0.25)',
          lineHeight: 1,
        }}>
          كلام
        </span>
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#B3B0A6',
        letterSpacing: '0.3px',
        marginBottom: 8,
      }}>
        Feito com amor para a Ummah brasileira
      </p>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#7A7870',
        letterSpacing: '0.5px',
        marginBottom: 28,
      }}>
        A mensagem original. Preservada por 1.400 anos.
      </p>

      {/* Links */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        marginBottom: 28,
      }}>
        <Link
          href="/sobre"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7A7870',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7870' }}
        >
          Sobre
        </Link>
        <span style={{ color: '#272230' }}>|</span>
        <Link
          href="/configuracoes"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7A7870',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7870' }}
        >
          Configuracoes
        </Link>
      </nav>

      {/* Copyright + Version */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}>
        <p style={{
          fontSize: 11,
          color: 'rgba(122,120,112,0.5)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          &copy; {new Date().getFullYear()} Kalam Brasil
        </p>
        <span style={{
          fontSize: 10,
          color: 'rgba(201,168,76,0.3)',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '1px',
          padding: '2px 8px',
          border: '1px solid rgba(201,168,76,0.12)',
          borderRadius: '4px',
        }}>
          v1.0
        </span>
      </div>
    </footer>
  )
}
