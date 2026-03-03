'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useCommunity } from '@/lib/hooks/useCommunity'
import { Sparkles, MessageCircle } from 'lucide-react'

const T = {
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.12)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

interface SahabaProGateProps {
  children: ReactNode
  sahabaName?: string
  sahabaArabic?: string
}

export function SahabaProGate({ children, sahabaName, sahabaArabic }: SahabaProGateProps) {
  const { isPro, questionsLeft, loading, member } = useCommunity()

  if (loading) return null

  // PRO com perguntas disponíveis — libera
  if (isPro && questionsLeft > 0) return <>{children}</>

  // PRO sem perguntas — avisa
  if (isPro && questionsLeft === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          padding: '28px 24px',
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: 12,
          textAlign: 'center',
        }}
      >
        <MessageCircle size={32} color={T.gold} strokeWidth={1.5} style={{ margin: '0 auto 12px' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 8 }}>
          Suas 5 perguntas do mês foram usadas
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: T.secondary, lineHeight: 1.6 }}>
          As perguntas renovam no início do próximo mês.
        </p>
      </motion.div>
    )
  }

  // Não é PRO — mostra paywall
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '48px 20px',
        textAlign: 'center',
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      {/* Ícone Sahaba */}
      <div style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: T.goldDim,
        border: `1px solid ${T.gold}35`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        <Sparkles size={30} color={T.gold} strokeWidth={1.5} />
      </div>

      {sahabaArabic && (
        <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 30, color: T.gold, marginBottom: 4, direction: 'rtl' }}>
          {sahabaArabic}
        </p>
      )}

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: T.text, marginBottom: 12, lineHeight: 1.2 }}>
        {sahabaName ? `Perguntar ao ${sahabaName}` : 'Perguntar aos Sahabas'}
      </h2>

      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: T.secondary, lineHeight: 1.7, marginBottom: 10 }}>
        Faça até <strong style={{ color: T.gold }}>5 perguntas por mês</strong> para qualquer Sahaba.
        Respostas profundas, baseadas no Alcorão e nos ensinamentos proféticos.
      </p>

      {member && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.muted, marginBottom: 28 }}>
          Plano para {member.email}
        </p>
      )}

      {/* Preço */}
      <div style={{
        background: T.surface,
        border: `1px solid ${T.gold}30`,
        borderRadius: 12,
        padding: '20px 28px',
        marginBottom: 24,
        width: '100%',
        maxWidth: 300,
      }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 700, color: T.gold, lineHeight: 1, marginBottom: 4 }}>
          R$49,90
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.muted }}>
          por mês · 5 perguntas · cancele quando quiser
        </p>
      </div>

      {/* CTA — por agora abre WhatsApp para assinar */}
      <a
        href={`https://wa.me/5511999999999?text=Quero+assinar+o+plano+PRO+dos+Sahabas+-+R%2449%2C90%2Fm%C3%AAs${member ? `+-+email%3A+${encodeURIComponent(member.email)}` : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 300,
          padding: '14px',
          borderRadius: 12,
          background: T.gold,
          color: '#0D0B12',
          fontSize: 15,
          fontWeight: 700,
          textAlign: 'center',
          textDecoration: 'none',
          fontFamily: 'var(--font-serif)',
          transition: 'opacity 0.2s ease',
        }}
      >
        Assinar PRO →
      </a>

      <p style={{ marginTop: 14, fontSize: 12, color: T.muted }}>
        Nossa equipe ativa seu acesso via WhatsApp em minutos.
      </p>
    </motion.section>
  )
}
