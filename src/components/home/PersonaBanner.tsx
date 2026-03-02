'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Compass,
  BookOpen,
  GitBranch,
  Heart,
  Star,
  ArrowRight,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// -- Design Tokens ------------------------------------------------------------

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// -- Types --------------------------------------------------------------------

type PersonaId = 'curious' | 'muslim' | 'bible' | 'spiritual' | 'kids'

interface PersonaConfig {
  greeting: string
  suggestion: string
  recommendedHref: string
  recommendedLabel: string
  icon: LucideIcon
}

interface PersonaBannerProps {
  persona: PersonaId | null
  onChangePersona?: () => void
}

// -- Persona Config -----------------------------------------------------------

const PERSONA_CONFIG: Record<PersonaId, PersonaConfig> = {
  curious: {
    greeting: 'Buscando a verdade',
    suggestion: 'Continue explorando a mensagem original',
    recommendedHref: '/a-mensagem',
    recommendedLabel: 'Descobrir a Mensagem',
    icon: Compass,
  },
  muslim: {
    greeting: 'Aprofundando na Palavra',
    suggestion: 'Continue sua jornada de conhecimento',
    recommendedHref: '/a-palavra',
    recommendedLabel: 'Abrir o Alcorao',
    icon: BookOpen,
  },
  bible: {
    greeting: 'Construindo a Ponte',
    suggestion: 'Explore os paralelos entre as escrituras',
    recommendedHref: '/a-ponte',
    recommendedLabel: 'Ver a Ponte',
    icon: GitBranch,
  },
  spiritual: {
    greeting: 'Cultivando a alma',
    suggestion: 'Momento de reflexao e pratica',
    recommendedHref: '/a-alma',
    recommendedLabel: 'Entrar na Presenca',
    icon: Heart,
  },
  kids: {
    greeting: 'Aprendendo juntos',
    suggestion: 'Novas historias e atividades te esperam',
    recommendedHref: '/kids',
    recommendedLabel: 'Area Kids',
    icon: Star,
  },
}

// -- Component ----------------------------------------------------------------

export function PersonaBanner({ persona, onChangePersona }: PersonaBannerProps) {
  // Null state: no persona selected
  if (!persona) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '14px 20px',
          borderRadius: 12,
          background: 'rgba(201,168,76,0.04)',
          border: `1px solid rgba(201,168,76,0.12)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(201,168,76,0.08)',
              flexShrink: 0,
            }}
          >
            <Compass size={16} style={{ color: T.muted }} />
          </div>
          <p style={{ fontSize: 14, color: T.secondary }}>
            Escolha seu caminho
          </p>
        </div>

        <Link
          href="/comecar"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 999,
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.2)',
            color: T.gold,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Comecar
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    )
  }

  // Active persona state
  const config = PERSONA_CONFIG[persona]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 20px',
        borderRadius: 12,
        background: 'rgba(201,168,76,0.06)',
        border: `1px solid rgba(201,168,76,0.15)`,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(201,168,76,0.12)',
          flexShrink: 0,
        }}
      >
        <Icon size={18} style={{ color: T.gold }} />
      </div>

      {/* Text — center on desktop, full width on mobile */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 15,
            fontWeight: 500,
            color: T.text,
            lineHeight: 1.3,
          }}
        >
          {config.greeting}
        </p>
        <p
          style={{
            fontSize: 13,
            color: T.muted,
            marginTop: 2,
            lineHeight: 1.4,
          }}
        >
          {config.suggestion}
        </p>
      </div>

      {/* Right: CTA + trocar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 6,
          flexShrink: 0,
        }}
      >
        <Link
          href={config.recommendedHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 999,
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.25)',
            color: T.gold,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {config.recommendedLabel}
          <ArrowRight size={14} />
        </Link>

        {onChangePersona ? (
          <button
            onClick={onChangePersona}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: 0,
              background: 'none',
              border: 'none',
              color: T.muted,
              fontSize: 11,
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = T.secondary
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = T.muted
            }}
          >
            <Settings size={11} />
            trocar
          </button>
        ) : null}
      </div>
    </motion.div>
  )
}

// -- Responsive wrapper (mobile stacks vertically) ----------------------------

export function PersonaBannerResponsive({ persona, onChangePersona }: PersonaBannerProps) {
  if (!persona) {
    return <PersonaBanner persona={null} onChangePersona={onChangePersona} />
  }

  const config = PERSONA_CONFIG[persona]
  const Icon = config.icon

  return (
    <>
      {/* Desktop layout */}
      <div className="persona-banner-desktop">
        <PersonaBanner persona={persona} onChangePersona={onChangePersona} />
      </div>

      {/* Mobile layout — stacked */}
      <div className="persona-banner-mobile">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            padding: '16px 18px',
            borderRadius: 12,
            background: 'rgba(201,168,76,0.06)',
            border: `1px solid rgba(201,168,76,0.15)`,
          }}
        >
          {/* Top row: icon + text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.12)',
                flexShrink: 0,
              }}
            >
              <Icon size={18} style={{ color: T.gold }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 15,
                  fontWeight: 500,
                  color: T.text,
                  lineHeight: 1.3,
                }}
              >
                {config.greeting}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: T.muted,
                  marginTop: 2,
                  lineHeight: 1.4,
                }}
              >
                {config.suggestion}
              </p>
            </div>
          </div>

          {/* Bottom row: CTA + trocar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link
              href={config.recommendedHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '10px 18px',
                borderRadius: 999,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.25)',
                color: T.gold,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {config.recommendedLabel}
              <ArrowRight size={14} />
            </Link>

            {onChangePersona ? (
              <button
                onClick={onChangePersona}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '6px 10px',
                  background: 'none',
                  border: 'none',
                  color: T.muted,
                  fontSize: 12,
                  cursor: 'pointer',
                }}
              >
                <Settings size={12} />
                trocar
              </button>
            ) : null}
          </div>
        </motion.div>
      </div>

      <style>{`
        .persona-banner-desktop { display: block; }
        .persona-banner-mobile { display: none; }
        @media (max-width: 640px) {
          .persona-banner-desktop { display: none; }
          .persona-banner-mobile { display: block; }
        }
      `}</style>
    </>
  )
}
