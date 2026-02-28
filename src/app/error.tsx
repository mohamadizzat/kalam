'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[Kalam] Error boundary caught:', error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D0B12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '480px',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            marginBottom: '16px',
          }}
        >
          ⚠
        </div>

        <h1
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#F0EBE2',
            margin: '0 0 12px 0',
          }}
        >
          Algo deu errado
        </h1>

        <p
          style={{
            fontSize: '16px',
            color: '#F0EBE2',
            opacity: 0.6,
            margin: '0 0 32px 0',
            lineHeight: 1.5,
          }}
        >
          Tente novamente ou volte para a pagina inicial
        </p>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#C9A84C',
              color: '#0D0B12',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.opacity = '1'
            }}
          >
            Tentar novamente
          </button>

          <a
            href="/"
            style={{
              backgroundColor: 'transparent',
              color: '#F0EBE2',
              border: '1px solid rgba(240, 235, 226, 0.2)',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLAnchorElement).style.borderColor =
                'rgba(240, 235, 226, 0.4)'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLAnchorElement).style.borderColor =
                'rgba(240, 235, 226, 0.2)'
            }}
          >
            Voltar ao inicio
          </a>
        </div>
      </div>
    </div>
  )
}
