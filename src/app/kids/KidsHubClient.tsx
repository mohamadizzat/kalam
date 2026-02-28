'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getProgress, getLevel, getNextLevel, getLevelProgress, LEVELS } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'

// ── SECTION DATA ────────────────────────────────────────────────────────────

const KIDS_SECTIONS = [
  { emoji: '📖', title: 'Historias dos Profetas', subtitle: '15 historias incriveis', href: '/kids/historias', color: '#FF8C42', count: '15' },
  { emoji: '🕌', title: 'Pilares do Islam', subtitle: '5 pilares fundamentais', href: '/kids/pilares-do-islam', color: '#4ECDC4', count: '5' },
  { emoji: '💎', title: 'Pilares da Fe', subtitle: '6 crencas essenciais', href: '/kids/pilares-da-fe', color: '#A78BFA', count: '6' },
  { emoji: '📖', title: 'Quran Kids', subtitle: '15 suratas para aprender', href: '/kids/quran-kids', color: '#45B7A0', count: '15' },
  { emoji: '🤲', title: 'Dua do Dia', subtitle: '20 duas para o dia a dia', href: '/kids/dua-do-dia', color: '#FFD93D', count: '20' },
  { emoji: '🌟', title: 'Bons Modos', subtitle: '12 maneiras islamicas', href: '/kids/bons-modos', color: '#FF6B6B', count: '12' },
  { emoji: '❓', title: 'Quiz', subtitle: '50 perguntas divertidas', href: '/kids/quiz', color: '#FF8C42', count: '50' },
  { emoji: '🎮', title: 'Atividades', subtitle: 'Jogos e desafios', href: '/kids/atividades', color: '#4ECDC4', count: '7' },
  { emoji: '📅', title: 'Calendario', subtitle: 'Datas importantes', href: '/kids/calendario', color: '#A78BFA', count: '8' },
  { emoji: '🦸', title: 'Herois do Islam', subtitle: '10 grandes personalidades', href: '/kids/herois', color: '#45B7A0', count: '10' },
  { emoji: '🏆', title: 'Meu Progresso', subtitle: 'Estrelas e conquistas', href: '/kids/meu-progresso', color: '#FFD93D' },
]

// ── ANIMATIONS ──────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const PARTICLE_COLORS = ['#FF8C42', '#4ECDC4', '#45B7A0', '#FF6B6B', '#A78BFA', '#FFD93D']

// ── COLORFUL PARTICLES ──────────────────────────────────────────────────────

function ColorfulParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.15,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    })), [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.5, 0],
            scale: [0, 1, 1.3, 0],
            y: [0, -25, -50, -80],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}40`,
          }}
        />
      ))}
      {/* Central glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,140,66,0.06) 0%, rgba(78,205,196,0.03) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}

// ── KIDS CARD ───────────────────────────────────────────────────────────────

function KidsCard({
  emoji,
  title,
  subtitle,
  href,
  color,
  count,
  index,
}: {
  emoji: string
  title: string
  subtitle: string
  href: string
  color: string
  count?: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * (index + 1) }}
    >
      <Link
        href={href}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '20px',
          borderRadius: '20px',
          background: '#161220',
          border: `1.5px solid ${hovered ? `${color}60` : `${color}30`}`,
          textDecoration: 'none',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease, transform 0.2s ease',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Colored glow on hover */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, ${color}08 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
        />

        {/* Emoji circle */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '22px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {emoji}
        </div>

        {/* Text */}
        <div style={{ flex: 1, position: 'relative', zIndex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              fontWeight: 600,
              color: '#F0EBE2',
              marginBottom: '3px',
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: '13px',
              color: '#7A7870',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Count badge */}
        {count && (
          <div
            style={{
              background: `${color}20`,
              color: color,
              fontSize: '12px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '10px',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {count}
          </div>
        )}
      </Link>
    </motion.div>
  )
}

// ── PROGRESS BAR ────────────────────────────────────────────────────────────

function ProgressSummary({ progress }: { progress: KidsProgress }) {
  const level = getLevel(progress.stars)
  const nextLevel = getNextLevel(progress.stars)
  const percentage = getLevelProgress(progress.stars)

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      style={{
        background: '#161220',
        border: '1px solid #272230',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '24px',
      }}
    >
      {/* Level + Stars row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>{level.emoji}</span>
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#F0EBE2',
            }}>
              {level.name}
            </p>
            <p style={{ fontSize: '12px', color: '#7A7870' }}>
              Nivel {LEVELS.indexOf(level) + 1}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '18px' }}>⭐</span>
          <span style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#FFD93D',
            fontFamily: 'var(--font-sans)',
          }}>
            {progress.stars}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        background: '#0D0B12',
        borderRadius: '10px',
        height: '10px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          style={{
            height: '100%',
            borderRadius: '10px',
            background: 'linear-gradient(90deg, #FF8C42, #FFD93D)',
          }}
        />
      </div>

      {/* Next level label */}
      {nextLevel && (
        <p style={{
          fontSize: '11px',
          color: '#7A7870',
          marginTop: '8px',
          textAlign: 'right',
        }}>
          {nextLevel.emoji} {nextLevel.name} em {nextLevel.minStars - progress.stars} estrelas
        </p>
      )}

      {/* Streak */}
      {progress.streak > 0 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '12px',
          padding: '8px 12px',
          background: '#0D0B12',
          borderRadius: '10px',
        }}>
          <span style={{ fontSize: '16px' }}>🔥</span>
          <span style={{ fontSize: '13px', color: '#FF6B6B', fontWeight: 600 }}>
            {progress.streak} {progress.streak === 1 ? 'dia' : 'dias'} seguidos!
          </span>
        </div>
      )}
    </motion.div>
  )
}

// ── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function KidsHubClient() {
  const [progress, setProgress] = useState<KidsProgress | null>(null)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header with particles */}
        <div style={{ position: 'relative', marginBottom: '28px' }}>
          <ColorfulParticles />

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <p style={{
              color: '#7A7870',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              BEM-VINDO AO
            </p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              fontWeight: 700,
              color: '#F0EBE2',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              Kalam Kids
            </h1>
            <p style={{
              color: '#B3B0A6',
              fontSize: '15px',
              marginTop: '8px',
              lineHeight: 1.5,
            }}>
              Aprenda sobre o Islam de forma divertida! 🌟
            </p>
          </motion.div>
        </div>

        {/* Progress Summary */}
        {progress && <ProgressSummary progress={progress} />}

        {/* Section Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '10px',
          }}
        >
          {KIDS_SECTIONS.map((section, i) => (
            <KidsCard
              key={section.href}
              emoji={section.emoji}
              title={section.title}
              subtitle={section.subtitle}
              href={section.href}
              color={section.color}
              count={section.count}
              index={i}
            />
          ))}
        </div>

      </div>
    </main>
  )
}
