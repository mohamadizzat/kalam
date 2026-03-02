'use client'

import { ReactNode } from 'react'
import { useAuth } from '@/providers/auth-provider'
import { useMembership } from '@/lib/hooks/useMembership'
import { useRouter } from 'next/navigation'
import { Crown, Sparkles } from 'lucide-react'

interface PremiumGateProps {
  children: ReactNode
  fallback?: ReactNode
}

export function PremiumGate({ children, fallback }: PremiumGateProps) {
  const { isPremium, loading: authLoading } = useAuth()

  if (authLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
        color: '#7A7870',
      }}>
        <div style={{
          width: 24,
          height: 24,
          border: '2px solid #272230',
          borderTopColor: '#C9A84C',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      </div>
    )
  }

  if (isPremium) {
    return <>{children}</>
  }

  return <>{fallback || <DefaultUpgradeCTA />}</>
}

function DefaultUpgradeCTA() {
  const { checkout, loading } = useMembership()
  const { user } = useAuth()
  const router = useRouter()

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '40px 20px',
      textAlign: 'center',
      maxWidth: 520,
      margin: '0 auto',
    }}>
      <div style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        border: '1px solid rgba(201,168,76,0.2)',
      }}>
        <Crown size={32} color="#C9A84C" strokeWidth={1.5} />
      </div>

      <h2 style={{
        fontFamily: 'var(--font-serif, "Playfair Display", serif)',
        fontSize: 28,
        fontWeight: 600,
        color: '#F0EBE2',
        marginBottom: 12,
        lineHeight: 1.2,
      }}>
        Conheça seus Sahabas
      </h2>

      <p style={{
        fontFamily: 'var(--font-arabic, "Amiri", serif)',
        fontSize: 22,
        color: '#C9A84C',
        marginBottom: 16,
        direction: 'rtl',
      }}>
        رفاقك
      </p>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#B3B0A6',
        lineHeight: 1.7,
        marginBottom: 32,
        maxWidth: 400,
      }}>
        7 companheiros inteligentes trabalham por você em silêncio.
        Com o Premium, eles ganham nome, personalidade e mostram
        tudo que fazem pela sua jornada.
      </p>

      <button
        onClick={user ? checkout : () => router.push('/entrar?redirect=/meus-sahabas')}
        disabled={loading}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: '0.5px',
          color: '#0D0B12',
          background: loading
            ? 'rgba(201,168,76,0.5)'
            : 'linear-gradient(135deg, #C9A84C, #D4B85A)',
          border: 'none',
          borderRadius: 12,
          padding: '14px 36px',
          cursor: loading || !user ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 20px rgba(201,168,76,0.2)',
        }}
      >
        {loading ? 'Redirecionando...' : !user ? 'Entrar para assinar' : 'Assinar Premium — R$49,90/mês'}
      </button>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 16,
        color: '#7A7870',
        fontSize: 12,
        fontFamily: 'var(--font-sans)',
      }}>
        <Sparkles size={14} />
        <span>Cancele quando quiser. Sem compromisso.</span>
      </div>
    </section>
  )
}
