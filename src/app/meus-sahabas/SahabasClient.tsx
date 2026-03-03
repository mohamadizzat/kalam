'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  Eye,
  Link as LinkIcon,
  TrendingUp,
  Brain,
  Search,
  Bell,
  Crown,
  Settings,
  MessageCircle,
  Send,
  X,
} from 'lucide-react'
import { PremiumGate } from '@/components/shared/PremiumGate'
import { useSahabaStats, type SahabaStat } from '@/lib/hooks/useSahabaStats'
import { useMembership } from '@/lib/hooks/useMembership'
import { useUserContext } from '@/lib/agents/user-context'
import type { SahabaIdentity } from '@/lib/data/sahabas'

const ICON_MAP: Record<string, typeof Compass> = {
  Compass,
  Eye,
  Link: LinkIcon,
  TrendingUp,
  Brain,
  Search,
  Bell,
}

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  surfaceHover: '#1C1628',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

export default function SahabasClient() {
  return (
    <PremiumGate>
      <SahabasDashboard />
    </PremiumGate>
  )
}

function SahabasDashboard() {
  const { stats, loading } = useSahabaStats()
  const { portal, loading: portalLoading } = useMembership()

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 80px' }}>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          border: '1px solid rgba(201,168,76,0.2)',
        }}>
          <Crown size={24} color={T.gold} strokeWidth={1.5} />
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif, "Playfair Display", serif)',
          fontSize: 32,
          fontWeight: 700,
          color: T.text,
          marginBottom: 8,
          lineHeight: 1.2,
        }}>
          Seus Sahabas
        </h1>

        <p style={{
          fontFamily: 'var(--font-arabic, "Amiri", serif)',
          fontSize: 26,
          color: T.gold,
          marginBottom: 12,
          direction: 'rtl',
        }}>
          رفاقك
        </p>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          color: T.secondary,
          maxWidth: 480,
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          7 companheiros inteligentes trabalham por você.
          Cada um com nome, personalidade e um propósito na sua jornada.
        </p>
      </motion.div>

      {/* Grid */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
          <div style={{
            width: 28,
            height: 28,
            border: `2px solid ${T.border}`,
            borderTopColor: T.gold,
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {stats.map((stat, i) => (
            <SahabaCard key={stat.sahaba.id} stat={stat} index={i} />
          ))}
        </div>
      )}

      {/* Manage subscription */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          textAlign: 'center',
          marginTop: 48,
          paddingTop: 24,
          borderTop: `1px solid ${T.border}`,
        }}
      >
        <button
          onClick={portal}
          disabled={portalLoading}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: T.muted,
            background: 'none',
            border: `1px solid ${T.border}`,
            borderRadius: 8,
            padding: '10px 20px',
            cursor: portalLoading ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s ease',
          }}
        >
          <Settings size={14} />
          {portalLoading ? 'Abrindo...' : 'Gerenciar assinatura'}
        </button>
      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

function SahabaCard({ stat, index }: { stat: SahabaStat; index: number }) {
  const { sahaba } = stat
  const Icon = ICON_MAP[sahaba.icon] || Compass
  const userCtx = useUserContext()

  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || streaming) return

    const userMsg: ChatMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setStreaming(true)

    // Placeholder for streaming response
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/sahaba/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sahabaId: sahaba.id,
          message: text,
          userContext: {
            persona: userCtx.persona,
            currentStreak: userCtx.currentStreak,
            completedCount: userCtx.completedCount,
            daysSinceFirstVisit: userCtx.daysSinceFirstVisit,
            isAuthenticated: userCtx.isAuthenticated,
          },
        }),
      })

      if (!res.ok || !res.body) throw new Error('Falha na resposta')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages(prev => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'assistant', content: accumulated }
          return copy
        })
      }
    } catch {
      setMessages(prev => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: 'assistant', content: 'Algo deu errado. Tente novamente.' }
        return copy
      })
    } finally {
      setStreaming(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [input, streaming, sahaba.id, userCtx])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{
        background: T.surface,
        borderRadius: 16,
        border: `1px solid ${T.border}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: `linear-gradient(to right, transparent, ${sahaba.color}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Main content with padding */}
      <div style={{ padding: 24, paddingBottom: 0 }}>

      {/* Header: icon + name */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${sahaba.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          border: `1px solid ${sahaba.color}30`,
        }}>
          <Icon size={20} color={sahaba.color} strokeWidth={1.5} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <h3 style={{
              fontFamily: 'var(--font-serif, "Playfair Display", serif)',
              fontSize: 18,
              fontWeight: 600,
              color: T.text,
              margin: 0,
              lineHeight: 1.2,
            }}>
              {sahaba.name}
            </h3>
            <span style={{
              fontFamily: 'var(--font-arabic, "Amiri", serif)',
              fontSize: 16,
              color: sahaba.color,
              opacity: 0.8,
            }}>
              {sahaba.arabic}
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: T.muted,
            margin: '2px 0 0',
            letterSpacing: '0.02em',
          }}>
            {sahaba.meaning}
          </p>
        </div>
      </div>

      {/* Personality */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: T.secondary,
        lineHeight: 1.6,
        marginBottom: 16,
      }}>
        {sahaba.personality}
      </p>

      {/* Stats */}
      <div style={{
        background: `${sahaba.color}08`,
        borderRadius: 10,
        padding: '12px 14px',
        border: `1px solid ${sahaba.color}15`,
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 600,
          color: T.text,
          margin: '0 0 4px',
        }}>
          {stat.headline}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          color: T.muted,
          margin: 0,
          lineHeight: 1.5,
        }}>
          {stat.detail}
        </p>
      </div>

      {/* Greeting quote */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontStyle: 'italic',
        color: T.muted,
        marginTop: 12,
        opacity: 0.7,
        lineHeight: 1.5,
      }}>
        &ldquo;{sahaba.greeting}&rdquo;
      </p>

      </div>{/* end main padding */}

      {/* Conversar button */}
      <div style={{ padding: '16px 24px 0' }}>
        <button
          onClick={() => { setChatOpen(v => !v); setTimeout(() => inputRef.current?.focus(), 200) }}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 16px',
            borderRadius: 10,
            border: `1px solid ${chatOpen ? sahaba.color + '60' : T.border}`,
            background: chatOpen ? `${sahaba.color}10` : 'transparent',
            color: chatOpen ? sahaba.color : T.muted,
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {chatOpen ? <X size={14} /> : <MessageCircle size={14} />}
          {chatOpen ? 'Fechar conversa' : `Conversar com ${sahaba.name}`}
        </button>
      </div>

      {/* Chat area */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '16px 24px 24px' }}>
              {/* Messages */}
              {messages.length > 0 && (
                <div style={{
                  maxHeight: 320,
                  overflowY: 'auto',
                  marginBottom: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
                  {messages.map((msg, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    }}>
                      <div style={{
                        maxWidth: '85%',
                        padding: '10px 14px',
                        borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                        background: msg.role === 'user' ? `${sahaba.color}20` : '#1C1628',
                        border: `1px solid ${msg.role === 'user' ? sahaba.color + '30' : T.border}`,
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        color: msg.role === 'user' ? T.text : T.secondary,
                        lineHeight: 1.6,
                        whiteSpace: 'pre-wrap',
                      }}>
                        {msg.content}
                        {streaming && i === messages.length - 1 && msg.role === 'assistant' && (
                          <span style={{
                            display: 'inline-block',
                            width: 6,
                            height: 14,
                            background: sahaba.color,
                            marginLeft: 3,
                            borderRadius: 1,
                            animation: 'blink 0.8s step-end infinite',
                            verticalAlign: 'middle',
                          }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Input */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                  placeholder={`Pergunte ao ${sahaba.name}...`}
                  disabled={streaming}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: `1px solid ${T.border}`,
                    background: '#0D0B12',
                    color: T.text,
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    outline: 'none',
                    opacity: streaming ? 0.6 : 1,
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || streaming}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: 'none',
                    background: !input.trim() || streaming ? T.border : sahaba.color,
                    color: !input.trim() || streaming ? T.muted : '#0D0B12',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: !input.trim() || streaming ? 'not-allowed' : 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </motion.div>
  )
}
