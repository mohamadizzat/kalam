'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff, CheckCircle } from 'lucide-react'

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
  padding: '14px 14px 14px 44px',
  borderRadius: 12,
  background: T.surface,
  border: `1px solid ${T.border}`,
  color: T.text,
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
}

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
  const [confirmed, setConfirmed] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'login') {
        const { error } = await signInWithEmail(email, password)
        if (error) {
          setError(
            error.message === 'Invalid login credentials'
              ? 'Email ou senha incorretos.'
              : error.message?.includes('Email not confirmed')
              ? 'Confirme seu email antes de entrar. Verifique sua caixa de entrada.'
              : 'Erro ao entrar. Tente novamente.'
          )
        } else {
          router.push(destination)
        }
      } else {
        if (password.length < 6) {
          setError('A senha deve ter pelo menos 6 caracteres.')
          setLoading(false)
          return
        }
        const { error, needsConfirmation } = await signUpWithEmail(email, password, name)
        if (error) {
          setError(
            error.message?.includes('already registered') || error.message?.includes('already been registered')
              ? 'Este email já tem uma conta. Clique em "Já tenho conta".'
              : 'Erro ao criar conta. Tente novamente.'
          )
        } else if (needsConfirmation) {
          setConfirmed(true)
        } else {
          router.push(destination)
        }
      }
    } catch {
      setError('Erro inesperado. Tente novamente.')
    }

    setLoading(false)
  }

  // ── Confirmação pendente ──────────────────────────────────────────────────
  if (confirmed) {
    return (
      <main style={{ background: T.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: 400, padding: '40px 24px', textAlign: 'center' }}
        >
          <CheckCircle size={48} color={T.green} style={{ margin: '0 auto 20px' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: T.text, marginBottom: 12 }}>
            Conta criada!
          </h2>
          <p style={{ color: T.secondary, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            Enviamos um email de confirmação para <strong style={{ color: T.gold }}>{email}</strong>.
            <br />Clique no link e volte para entrar.
          </p>
          <button
            onClick={() => { setConfirmed(false); setMode('login') }}
            style={{
              padding: '12px 32px', borderRadius: 12,
              background: T.gold, border: 'none', color: T.bg,
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Já confirmei — Entrar
          </button>
        </motion.div>
      </main>
    )
  }

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>
      <div style={{ maxWidth: 420, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Voltar */}
        <Link
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: T.muted, fontSize: 14, textDecoration: 'none', marginBottom: 40 }}
        >
          <ArrowLeft size={15} />
          Voltar
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 36 }}
        >
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: 28, color: T.gold, direction: 'rtl', marginBottom: 4 }}>
            كلام
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: T.text, marginBottom: 8 }}>
            {mode === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}
          </h1>
          <p style={{ color: T.secondary, fontSize: 14, lineHeight: 1.5 }}>
            {mode === 'login'
              ? 'Entre para continuar sua jornada.'
              : 'Crie sua conta e salve seu progresso.'}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          {mode === 'signup' && (
            <div style={{ position: 'relative' }}>
              <User size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={inputStyle}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              style={{ ...inputStyle, paddingRight: 44 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              style={{
                position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', color: T.muted,
                display: 'flex', padding: 0,
              }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: T.red, fontSize: 13, margin: 0 }}
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '14px', borderRadius: 12, marginTop: 4,
              background: loading ? `${T.gold}70` : T.gold,
              border: 'none', color: T.bg, fontSize: 15, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-serif)',
              transition: 'opacity 0.2s ease',
            }}
          >
            {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </motion.form>

        {/* Toggle mode */}
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: T.muted }}>
          {mode === 'login' ? 'Não tem conta? ' : 'Já tem conta? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError('') }}
            style={{
              background: 'none', border: 'none', color: T.gold,
              cursor: 'pointer', fontSize: 14, fontWeight: 600,
            }}
          >
            {mode === 'login' ? 'Criar conta' : 'Já tenho conta'}
          </button>
        </p>

      </div>
    </main>
  )
}
