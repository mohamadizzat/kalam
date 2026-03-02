'use client'

import { motion } from 'framer-motion'
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
} from 'lucide-react'
import { PremiumGate } from '@/components/shared/PremiumGate'
import { useSahabaStats, type SahabaStat } from '@/lib/hooks/useSahabaStats'
import { useMembership } from '@/lib/hooks/useMembership'
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

function SahabaCard({ stat, index }: { stat: SahabaStat; index: number }) {
  const { sahaba } = stat
  const Icon = ICON_MAP[sahaba.icon] || Compass

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      style={{
        background: T.surface,
        borderRadius: 16,
        padding: 24,
        border: `1px solid ${T.border}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
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
    </motion.div>
  )
}
