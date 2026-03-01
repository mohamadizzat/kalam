'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/providers/auth-provider'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { BookOpen, Users, Flame, ArrowRight, Crown, Star, Lock } from 'lucide-react'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

const TIER_LABELS: Record<string, string> = {
  free: 'Free',
  explorer: 'Explorer',
  seeker: 'Seeker',
  guide: 'Guide',
}

const TIER_COLORS: Record<string, string> = {
  free: T.muted,
  explorer: T.gold,
  seeker: '#E8C547',
  guide: '#FFD700',
}

type MembershipData = {
  tier: string
  status: string
  authenticated: boolean
}

type Streak = {
  current_streak: number
  longest_streak: number
}

export default function AreaDeMembrosPage() {
  const { user, loading: authLoading } = useAuth()
  const [membership, setMembership] = useState<MembershipData | null>(null)
  const [streak, setStreak] = useState<Streak | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        // Fetch membership status
        const res = await fetch('/api/membership/status')
        const data = await res.json()
        setMembership(data)

        // Fetch streak if authenticated
        if (user) {
          const supabase = createClient()
          const { data: streakData } = await supabase
            .from('user_streaks')
            .select('current_streak, longest_streak')
            .eq('user_id', user.id)
            .single()
          if (streakData) setStreak(streakData)
        }
      } catch (err) {
        console.error('[area-de-membros] Load error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (!authLoading) load()
  }, [user, authLoading])

  if (authLoading || loading) {
    return (
      <div style={{ background: T.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: T.gold, fontSize: 14 }}>Carregando...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div style={{ background: T.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: 40,
            textAlign: 'center',
            maxWidth: 400,
          }}
        >
          <Lock size={48} style={{ color: T.gold, marginBottom: 16 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: T.text, marginBottom: 8 }}>
            Área de Membros
          </h2>
          <p style={{ color: T.secondary, fontSize: 14, marginBottom: 24 }}>
            Faça login para acessar conteúdos exclusivos, estudos profundos e a comunidade.
          </p>
          <Link
            href="/entrar"
            style={{
              display: 'inline-block',
              background: T.gold,
              color: T.bg,
              padding: '12px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Entrar
          </Link>
        </motion.div>
      </div>
    )
  }

  const tier = membership?.tier || 'free'

  return (
    <main style={{ background: T.bg, minHeight: '100vh', padding: '24px 16px 100px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Crown size={28} style={{ color: T.gold }} />
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              color: T.text,
              margin: 0,
            }}>
              Área de Membros
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              background: `${TIER_COLORS[tier]}20`,
              color: TIER_COLORS[tier],
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              {TIER_LABELS[tier]}
            </span>
            <span style={{ color: T.muted, fontSize: 13 }}>
              {user.email}
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginBottom: 32,
          }}
        >
          <StatCard icon={<Flame size={20} />} label="Streak" value={streak?.current_streak ?? 0} suffix="dias" />
          <StatCard icon={<Star size={20} />} label="Recorde" value={streak?.longest_streak ?? 0} suffix="dias" />
          <StatCard icon={<BookOpen size={20} />} label="Tier" value={TIER_LABELS[tier]} />
        </motion.div>

        {/* Aya do Dia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <p style={{ color: T.gold, fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            Reflexão do Dia
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            color: T.text,
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            &ldquo;E certamente com a dificuldade vem a facilidade.&rdquo;
          </p>
          <p style={{ color: T.secondary, fontSize: 13, marginTop: 8 }}>
            Surah Ash-Sharh (94:5)
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <QuickLink
            href="/area-de-membros/estudos"
            icon={<BookOpen size={22} />}
            title="Estudos Profundos"
            description="Análises exclusivas sobre a Ponte, o Original e o Sistema"
          />
          <QuickLink
            href="/area-de-membros/comunidade"
            icon={<Users size={22} />}
            title="Comunidade"
            description="Compartilhe reflexões e conecte-se com outros buscadores"
          />
        </motion.div>

        {/* Upgrade CTA (for free users) */}
        {tier === 'free' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: `linear-gradient(135deg, ${T.surface}, ${T.elevated})`,
              border: `1px solid ${T.gold}30`,
              borderRadius: 16,
              padding: 24,
              marginTop: 32,
              textAlign: 'center',
            }}
          >
            <Crown size={32} style={{ color: T.gold, marginBottom: 12 }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: T.text, marginBottom: 8 }}>
              Desbloqueie o acesso completo
            </h3>
            <p style={{ color: T.secondary, fontSize: 14, marginBottom: 20 }}>
              Estudos profundos, comunidade exclusiva e muito mais.
              <br />
              <span style={{ color: T.gold }}>Em breve — gratuito durante o beta.</span>
            </p>
          </motion.div>
        )}
      </div>
    </main>
  )
}

function StatCard({ icon, label, value, suffix }: { icon: React.ReactNode; label: string; value: number | string; suffix?: string }) {
  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: 12,
      padding: '16px 12px',
      textAlign: 'center',
    }}>
      <div style={{ color: T.gold, marginBottom: 6, display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <div style={{ color: T.text, fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
        {value}
      </div>
      <div style={{ color: T.muted, fontSize: 11, marginTop: 2 }}>
        {suffix ? `${suffix}` : label}
      </div>
    </div>
  )
}

function QuickLink({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        transition: 'border-color 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = `${T.gold}60`)}
        onMouseLeave={e => (e.currentTarget.style.borderColor = T.border)}
      >
        <div style={{ color: T.gold, flexShrink: 0 }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: T.text, fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{title}</div>
          <div style={{ color: T.secondary, fontSize: 13 }}>{description}</div>
        </div>
        <ArrowRight size={18} style={{ color: T.muted, flexShrink: 0 }} />
      </div>
    </Link>
  )
}
