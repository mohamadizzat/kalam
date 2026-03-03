'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { createClient } from '@/lib/supabase/client'
import { Mail, Lock, User, Phone, ArrowLeft, Eye, EyeOff, CheckCircle } from 'lucide-react'

type Mode = 'login' | 'signup'
type LeadStep = 'idle' | 'form' | 'done'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#45B7A0',
  red: '#FF6B6B',
}

const inputStyle = {
  width: '100%',
  padding: '14px 14px 14px 42px',
  borderRadius: '12px',
  background: T.surface,
  border: `1px solid ${T.border}`,
  color: T.text,
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box' as const,
}

// ── Captura de lead (email + telefone) sem criar conta ────────────────────────
function LeadCapture({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: dbError } = await supabase
      .from('leads')
      .insert({ email: email.trim().toLowerCase(), phone: phone.trim(), source: 'entrar_google' })

    setLoading(false)

    if (dbError && dbError.code !== '23505') {
      // 23505 = duplicate, tudo bem — lead já existe
      setError('Erro ao salvar. Tente novamente.')
      return
    }

    setDone(true)
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: 'center', padding: '8px 0' }}
      >
        <CheckCircle size={40} color={T.green} style={{ margin: '0 auto 16px' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: T.text, marginBottom: '8px' }}>
          Recebemos seu contato!
        </p>
        <p style={{ fontSize: '14px', color: T.secondary, lineHeight: 1.6, marginBottom: '20px' }}>
          Nossa equipe vai entrar em contato em breve para te ajudar a começar.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: '12px',
            background: T.gold,
            color: T.bg,
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
            fontFamily: 'var(--font-serif)',
          }}
        >
          Explorar o Kalam
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
    >
      <p style={{ fontSize: '14px', color: T.secondary, lineHeight: 1.6, marginBottom: '20px' }}>
        Deixa seu contato — nossa equipe te liga para mostrar tudo que o Kalam tem pra você.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Email */}
        <div style={{ position: 'relative' }}>
          <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Telefone */}
        <div style={{ position: 'relative' }}>
          <Phone size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
          <input
            type="tel"
            placeholder="WhatsApp (com DDD)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={inputStyle}
          />
        </div>

        {error && <p style={{ fontSize: '13px', color: T.red }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '12px',
            background: loading ? `${T.gold}80` : T.gold,
            border: 'none',
            color: T.bg,
            fontSize: '15px',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-serif)',
          }}
        >
          {loading ? 'Salvando...' : 'Quero ser contactado'}
        </button>

        <button
          type="button"
          onClick={onClose}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '13px', color: T.muted, textAlign: 'center',
          }}
        >
          Prefiro criar conta com email
        </button>
      </form>
    </motion.div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────
export function EntrarClient({ redirect }: { redirect?: string }) {
  const router = useRouter()
  const { signInWithEmail, signUpWithEmail } = useAuth()
  const destination = redirect || '/'

  const [mode, setMode] = useState<Mode>('login')
  const [leadStep, setLeadStep] = useState<LeadStep>('idle')
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
      <div style={{ maxWidth: '440px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: T.muted, fontSize: '14px', textDecoration: 'none', marginBottom: '32px' }}>
          <ArrowLeft size={16} />
          Voltar
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '36px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: T.text, marginBottom: '8px' }}>
            {leadStep !== 'idle' ? 'Fale com a gente' : mode === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}
          </h1>
          <p style={{ color: T.secondary, fontSize: '15px', lineHeight: 1.5 }}>
            {leadStep !== 'idle'
              ? ''
              : mode === 'login'
                ? 'Entre para sincronizar seu progresso entre dispositivos.'
                : 'Crie sua conta para salvar seu progresso.'}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {leadStep === 'idle' ? (
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

              {/* Botão lead capture (antigo "Google") */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setLeadStep('form')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px',
                  borderRadius: '14px',
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  color: T.text,
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginBottom: '24px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C40' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border }}
              >
                {/* Ícone de telefone/whatsapp */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                Quero ser contactado
              </motion.button>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ flex: 1, height: '1px', background: T.border }} />
                <span style={{ color: T.muted, fontSize: '12px' }}>ou entre com email</span>
                <div style={{ flex: 1, height: '1px', background: T.border }} />
              </div>

              {/* Form email/senha */}
              <motion.form
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {mode === 'signup' && (
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
                    <input type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
                  </div>
                )}

                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
                  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
                </div>

                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ ...inputStyle, padding: '14px 42px 14px 42px' }}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: T.muted, display: 'flex' }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {error && <p style={{ color: T.red, fontSize: '13px', padding: '0 4px' }}>{error}</p>}
                {success && <p style={{ color: T.green, fontSize: '13px', padding: '0 4px' }}>{success}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%', padding: '14px', borderRadius: '14px',
                    background: loading ? `${T.gold}80` : T.gold,
                    border: 'none', color: T.bg, fontSize: '15px', fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-serif)', marginTop: '4px',
                  }}
                >
                  {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
                </button>
              </motion.form>

              {/* Toggle */}
              <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: T.muted }}>
                {mode === 'login' ? 'Não tem conta? ' : 'Já tem conta? '}
                <button
                  onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setSuccess('') }}
                  style={{ background: 'none', border: 'none', color: T.gold, cursor: 'pointer', fontSize: '14px', fontWeight: 600, textDecoration: 'underline' }}
                >
                  {mode === 'login' ? 'Criar conta' : 'Entrar'}
                </button>
              </p>

            </motion.div>
          ) : (
            <motion.div key="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LeadCapture onClose={() => setLeadStep('idle')} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info footer */}
        {leadStep === 'idle' && (
          <div style={{ marginTop: '32px', padding: '16px', borderRadius: '12px', background: T.surface, border: `1px solid ${T.border}` }}>
            <p style={{ fontSize: '13px', color: T.secondary, lineHeight: 1.5, textAlign: 'center' }}>
              O Kalam funciona sem conta — seus dados ficam salvos no seu dispositivo. Com conta, você sincroniza entre dispositivos.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
