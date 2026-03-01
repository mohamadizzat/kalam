'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

// ── ROUTE NAME MAP ──────────────────────────────────────────────────────────

const ROUTE_NAMES: Record<string, string> = {
  'a-palavra': 'A Palavra',
  'a-presenca': 'A Presença',
  'a-jornada': 'A Jornada',
  'a-alma': 'A Alma',
  'a-ponte': 'A Ponte',
  'a-mensagem': 'A Mensagem',
  'a-biblia-do-kalam': 'A Bíblia do Kalam',
  'os-profetas': 'Os Profetas',
  'o-sistema': 'O Sistema',
  'aya-do-dia': 'Aya do Dia',
  'kids': 'Kids',
  'sobre': 'Sobre',
  'configuracoes': 'Configurações',
  'mapa': 'Mapa',
  'entrar': 'Entrar',
  'perguntas': 'Perguntas Difíceis',
  'biblioteca': 'Biblioteca',
  'trilhas': 'Trilhas',
  'ferramentas': 'Ferramentas',
  'comecar': 'Começar',

  // Sub-pages
  'busca': 'Busca',
  'recitacao': 'Recitação',
  'flashcards': 'Flashcards',
  'dhikr': 'Dhikr',
  'duas': 'Duas',
  'salah': 'Salah',
  'hifz': 'Hifz',
  'hadiths': 'Hadiths',
  'estudo': 'Estudos',
  '99-nomes': '99 Nomes',
  'journal': 'Journal',
  'rotina': 'Rotina',
  'plano-diario': 'Plano Diário',
  'quiz': 'Quiz',
  'historias': 'Histórias',
  'atividades': 'Atividades',
  'manifesto': 'Manifesto',
  'progresso': 'Progresso',
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  // Don't show for single-segment routes (they're top-level)
  if (segments.length < 2) return null

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const name = ROUTE_NAMES[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    const isLast = index === segments.length - 1

    return { href, name, isLast }
  })

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .breadcrumbs-container { max-width: calc(100vw - 48px); }
        }
      `}</style>
      <nav
        className="breadcrumbs-container"
        aria-label="Breadcrumbs"
        style={{
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <Link
          href="/"
          style={{
            color: '#7A7870',
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7870' }}
        >
          Início
        </Link>

        {breadcrumbs.map(({ href, name, isLast }) => (
          <span key={href} style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
            <ChevronRight size={12} style={{ color: '#7A7870', flexShrink: 0, opacity: 0.5 }} />
            {isLast ? (
              <span
                style={{
                  color: '#C9A84C',
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {name}
              </span>
            ) : (
              <Link
                href={href}
                style={{
                  color: '#7A7870',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7870' }}
              >
                {name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
