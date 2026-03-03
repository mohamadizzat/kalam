'use client'

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { useCommunity } from '@/lib/hooks/useCommunity'
import { Mail, Phone, CheckCircle, Users } from 'lucide-react'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.12)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#45B7A0',
  red: '#FF6B6B',
}

interface CommunityGateProps {
  children: ReactNode
  /** Mensagem customizada exibida acima do formulário */
  prompt?: string
}

export function CommunityGate({ children, prompt }: CommunityGateProps) {
  const { isMember, loading } = useCommunity()

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
        <div style={{ width: 24, height: 24, border: `2px solid ${T.border}`, borderTopColor: T.gold, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (isMember) return <>{children}</>

  return <JoinForm prompt={prompt} />
}

function JoinForm({ prompt }: { prompt?: string }) {
  const { join } = useCommunity()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setError('')
    setLoading(true)
    const { error: err } = await join(email, phone)
    setLoading(false)
    if (err) { setError(err); return }
    setDone(true)
    // Pequeno delay para mostrar confirmação antes de revelar conteúdo
    setTimeout(() => window.location.reload(), 1200)
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', padding: '40px 20px', textAlign: 'center' }}
      >
        <CheckCircle size={48} color={T.green} style={{ marginBottom: 16 }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: T.text, marginBottom: 8 }}>
          Bem-vindo à Kalam Community!
        </p>
        <p style={{ fontSize: 14, color: T.secondary }}>Carregando seu acesso...</p>
      </motion.div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '48px 20px',
        textAlign: 'center',
      }}
    >
      {/* Ícone */}
      <div style={{
        width: 68,
        height: 68,
        borderRadius: '50%',
        background: T.goldDim,
        border: `1px solid ${T.gold}35`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
      }}>
        <Users size={28} color={T.gold} strokeWidth={1.5} />
      </div>

      {/* Título árabe */}
      <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 28, color: T.gold, marginBottom: 6, direction: 'rtl' }}>
        مجتمع كلام
      </p>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, color: T.text, marginBottom: 12, lineHeight: 1.2 }}>
        Kalam Community
      </h2>

      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: T.secondary, lineHeight: 1.7, maxWidth: 420, marginBottom: 8 }}>
        {prompt ?? 'Este conteúdo é exclusivo para membros da Kalam Community.'}
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: T.muted, marginBottom: 32 }}>
        Gratuito. Sem senha. Sem confirmação de email.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Email */}
        <div style={{ position: 'relative' }}>
          <Mail size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12,
              background: T.surface, border: `1px solid ${T.border}`,
              color: T.text, fontSize: 15, outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        {/* WhatsApp */}
        <div style={{ position: 'relative' }}>
          <Phone size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
          <input
            type="tel"
            placeholder="WhatsApp (opcional)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{
              width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12,
              background: T.surface, border: `1px solid ${T.border}`,
              color: T.text, fontSize: 15, outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        {error && <p style={{ fontSize: 13, color: T.red, textAlign: 'left' }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '14px', borderRadius: 12,
            background: loading ? `${T.gold}70` : T.gold,
            border: 'none', color: T.bg, fontSize: 15, fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-serif)',
            transition: 'opacity 0.2s ease',
          }}
        >
          {loading ? 'Entrando...' : 'Entrar na Kalam Community →'}
        </button>
      </form>

      <p style={{ marginTop: 16, fontSize: 12, color: T.muted, maxWidth: 340 }}>
        Ao entrar, você concorda com nossos termos. Seus dados ficam salvos com segurança.
      </p>
    </motion.section>
  )
}
