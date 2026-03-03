'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react'

type Mode = 'login' | 'signup'

export function EntrarClient({ redirect }: { redirect?: string }) {
  const router = useRouter()
  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth()
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
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '440px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#7A7870',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '36px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            marginBottom: '8px',
          }}>
            {mode === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: '15px', lineHeight: 1.5 }}>
            {mode === 'login'
              ? 'Entre para sincronizar seu progresso entre dispositivos.'
              : 'Crie sua conta para salvar seu progresso.'}
          </p>
        </motion.div>

        {/* Google login */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={signInWithGoogle}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '14px',
            borderRadius: '14px',
            background: '#161220',
            border: '1px solid #272230',
            color: '#F0EBE2',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: '24px',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C40' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#272230' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continuar com Google
        </motion.button>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div style={{ flex: 1, height: '1px', background: '#272230' }} />
          <span style={{ color: '#7A7870', fontSize: '12px' }}>ou</span>
          <div style={{ flex: 1, height: '1px', background: '#272230' }} />
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          {mode === 'signup' && (
            <div style={{ position: 'relative' }}>
              <User size={16} style={{
                position: 'absolute', left: '14px', top: '50%',
                transform: 'translateY(-50%)', color: '#7A7870',
              }} />
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 42px',
                  borderRadius: '12px',
                  background: '#161220',
                  border: '1px solid #272230',
                  color: '#F0EBE2',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{
              position: 'absolute', left: '14px', top: '50%',
              transform: 'translateY(-50%)', color: '#7A7870',
            }} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 14px 14px 42px',
                borderRadius: '12px',
                background: '#161220',
                border: '1px solid #272230',
                color: '#F0EBE2',
                fontSize: '15px',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={16} style={{
              position: 'absolute', left: '14px', top: '50%',
              transform: 'translateY(-50%)', color: '#7A7870',
            }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 42px 14px 42px',
                borderRadius: '12px',
                background: '#161220',
                border: '1px solid #272230',
                color: '#F0EBE2',
                fontSize: '15px',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute', right: '14px', top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#7A7870', display: 'flex',
              }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Error/Success */}
          {error && (
            <p style={{ color: '#FF6B6B', fontSize: '13px', padding: '0 4px' }}>
              {error}
            </p>
          )}
          {success && (
            <p style={{ color: '#45B7A0', fontSize: '13px', padding: '0 4px' }}>
              {success}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '14px',
              background: loading ? '#C9A84C80' : '#C9A84C',
              border: 'none',
              color: '#0D0B12',
              fontSize: '15px',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-serif)',
              marginTop: '4px',
              transition: 'opacity 0.2s ease',
            }}
          >
            {loading
              ? 'Aguarde...'
              : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </motion.form>

        {/* Toggle mode */}
        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: '14px',
          color: '#7A7870',
        }}>
          {mode === 'login' ? 'Nao tem conta? ' : 'Ja tem conta? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setSuccess('') }}
            style={{
              background: 'none',
              border: 'none',
              color: '#C9A84C',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            {mode === 'login' ? 'Criar conta' : 'Entrar'}
          </button>
        </p>

        {/* Info */}
        <div style={{
          marginTop: '32px',
          padding: '16px',
          borderRadius: '12px',
          background: '#161220',
          border: '1px solid #272230',
        }}>
          <p style={{
            fontSize: '13px',
            color: '#B3B0A6',
            lineHeight: 1.5,
            textAlign: 'center',
          }}>
            O login e opcional. O Kalam funciona sem conta — seus dados ficam salvos no seu dispositivo. Com conta, voce sincroniza entre dispositivos.
          </p>
        </div>

      </div>
    </main>
  )
}
