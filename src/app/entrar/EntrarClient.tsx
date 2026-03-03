'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { useCommunity } from '@/lib/hooks/useCommunity'
import { Mail, Lock, User, Phone, ArrowLeft, Eye, EyeOff, CheckCircle, Users } from 'lucide-react'

type Mode = 'login' | 'signup'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.10)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#45B7A0',
  red: '#FF6B6B',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 14px 14px 42px',
  borderRadius: 12,
  background: T.surface,
  border: `1px solid ${T.border}`,
  color: T.text,
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box',
}

// ── Formulário de entrada na Kalam Community ──────────────────────────────────
function CommunityJoinInline({ onDone }: { onDone: () => void }) {
  const { join, isMember, member } = useCommunity()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  if (isMember) {
    return (
      <div style={{
        padding: '14px 16px',
        borderRadius: 12,
        background: T.goldDim,
        border: `1px solid ${T.gold}30`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 24,
      }}>
        <Users size={16} color={T.gold} strokeWidth={1.5} />
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: T.gold, margin: 0 }}>
            Você já é membro da Kalam Community
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.muted, margin: 0 }}>
            {member?.email}
          </p>
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ padding: '20px 0', textAlign: 'center', marginBottom: 24 }}
      >
        <CheckCircle size={36} color={T.green} style={{ margin: '0 auto 10px' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 4 }}>
          Bem-vindo à Kalam Community!
        </p>
        <p style={{ fontSize: 13, color: T.secondary }}>
          Acesso à Academy liberado.{' '}
          <Link href="/academy" style={{ color: T.gold, textDecoration: 'none' }}>Ir para Academy →</Link>
        </p>
      </motion.div>
    )
  }

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: err } = await join(email, phone)
    setLoading(false)
    if (err) { setError(err); return }
    setDone(true)
    onDone()
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 24 }}>
      <div style={{
        padding: '20px',
        borderRadius: 12,
        background: T.goldDim,
        border: `1px solid ${T.gold}25`,
        marginBottom: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Users size={16} color={T.gold} strokeWidth={1.5} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, color: T.gold, margin: 0, letterSpacing: '0.5px' }}>
            KALAM COMMUNITY — GRATUITO
          </p>
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.secondary, lineHeight: 1.5, marginBottom: 14 }}>
          Entre com email e WhatsApp. Sem senha. Sem confirmação.
          Acesso imediato à Academy e conteúdo exclusivo.
        </p>

        <form onSubmit={handleJoin} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <Mail size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ ...inputStyle, padding: '11px 12px 11px 36px', fontSize: 14 }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Phone size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input
              type="tel"
              placeholder="WhatsApp (opcional)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{ ...inputStyle, padding: '11px 12px 11px 36px', fontSize: 14 }}
            />
          </div>

          {error && <p style={{ fontSize: 12, color: T.red }}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px', borderRadius: 10,
              background: loading ? `${T.gold}70` : T.gold,
              border: 'none', color: T.bg, fontSize: 14, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-serif)',
            }}
          >
            {loading ? 'Entrando...' : 'Entrar na Kalam Community →'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────
export function EntrarClient({ redirect }: { redirect?: string }) {
  const router = useRouter()
  const { signInWithEmail, signUpWithEmail } = useAuth()
  const destination = redirect || '/'

  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (mode === 'login') {
        const { error } = await signInWithEmail(email, password)
        if (error) {
          setError(error.message === 'Invalid login credentials'
            ? 'Email ou senha incorretos'
            : 'Erro ao entrar. Tente novamente.')
        } else {
          router.push(destination)
        }
      } else {
        if (password.length < 6) {
          setError('A senha deve ter pelo menos 6 caracteres')
          setLoading(false)
          return
        }
        const { error, needsConfirmation } = await signUpWithEmail(email, password, name)
        if (error) {
          setError(
            error.message?.includes('already registered') || error.message?.includes('already been registered')
              ? 'Este email já tem uma conta. Entre com sua senha.'
              : 'Erro ao criar conta. Tente novamente.'
          )
        } else if (needsConfirmation) {
          setSuccess('Conta criada! Verifique seu email para confirmar o acesso.')
        } else {
          router.push(destination)
        }
      }
    } catch {
      setError('Erro inesperado. Tente novamente.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen" style={{ background: T.bg }}>
      <div style={{ maxWidth: 440, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: T.muted, fontSize: 14, textDecoration: 'none', marginBottom: 32 }}>
          <ArrowLeft size={16} />
          Voltar
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: T.text, marginBottom: 8 }}>
            Bem-vindo ao Kalam
          </h1>
          <p style={{ color: T.secondary, fontSize: 15, lineHeight: 1.5 }}>
            Entre na comunidade ou acesse sua conta.
          </p>
        </motion.div>

        {/* Community join (sempre visível no topo) */}
        <CommunityJoinInline onDone={() => {}} />

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ color: T.muted, fontSize: 12 }}>ou acesse com email e senha</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        {/* Form email/senha */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          {mode === 'signup' && (
            <div style={{ position: 'relative' }}>
              <User size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
              <input type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ ...inputStyle, padding: '14px 42px 14px 42px' }}
            />
            <button type="button" onClick={() => setShowPassword(v => !v)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: T.muted, display: 'flex' }}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && <p style={{ color: T.red, fontSize: 13 }}>{error}</p>}
          {success && <p style={{ color: T.green, fontSize: 13 }}>{success}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: 14, borderRadius: 12,
              background: loading ? `${T.gold}80` : T.gold,
              border: 'none', color: T.bg, fontSize: 15, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-serif)', marginTop: 4,
            }}
          >
            {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </motion.form>

        {/* Toggle */}
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: T.muted }}>
          {mode === 'login' ? 'Não tem conta? ' : 'Já tem conta? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setSuccess('') }}
            style={{ background: 'none', border: 'none', color: T.gold, cursor: 'pointer', fontSize: 14, fontWeight: 600, textDecoration: 'underline' }}
          >
            {mode === 'login' ? 'Criar conta' : 'Entrar'}
          </button>
        </p>

      </div>
    </main>
  )
}
