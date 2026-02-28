'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen, BookMarked, Brain, GraduationCap, Sparkles, Award,
  Heart, PenLine, Footprints, Mountain, ScrollText, Users, Coins,
  Sword, Sunrise, Flame, Shield, Compass, Search, Share2,
  ChevronDown, ChevronUp, Trophy, Star, TrendingUp, BarChart3,
  Lock,
} from 'lucide-react'
import { BackButton } from '@/components/shared/BackButton'
import {
  achievements,
  checkAchievements,
  getDashboardStats,
  type Achievement,
  type DashboardStats,
} from '@/lib/data/achievements'

// ── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  BookOpen, BookMarked, Brain, GraduationCap, Sparkles, Award,
  Heart, PenLine, Footprints, Mountain, ScrollText, Users, Coins,
  Sword, Sunrise, Flame, Shield, Compass, Search, Share2,
}

// ── Colors ───────────────────────────────────────────────────────────────────
const C = {
  bg: '#0D0B12',
  surface: '#161220',
  surfaceHover: '#1C1828',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.12)',
  goldGlow: 'rgba(201,168,76,0.25)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  locked: '#2A2636',
  lockedText: '#4A4656',
}

// ── Animated progress bar ────────────────────────────────────────────────────
function ProgressBar({ value, max, delay = 0 }: { value: number; max: number; delay?: number }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0

  return (
    <div style={{
      height: 6,
      background: C.locked,
      borderRadius: 3,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1, ease: 'easeOut', delay }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${C.gold}, #D4B85C)`,
          borderRadius: 3,
          position: 'relative',
        }}
      />
    </div>
  )
}

// ── Stat row ─────────────────────────────────────────────────────────────────
function StatRow({ label, value, max, delay = 0 }: {
  label: string; value: number; max: number; delay?: number
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6,
      }}>
        <span style={{ fontSize: 14, color: C.secondary }}>{label}</span>
        <span style={{ fontSize: 14, color: C.text, fontWeight: 600 }}>
          {value}/{max}
        </span>
      </div>
      <ProgressBar value={value} max={max} delay={delay} />
    </div>
  )
}

// ── Collapsible section ──────────────────────────────────────────────────────
function Section({ title, icon: Icon, children, defaultOpen = true }: {
  title: string
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 16,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: C.goldDim,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon size={18} style={{ color: C.gold }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 17,
            fontWeight: 600,
            color: C.text,
          }}>
            {title}
          </span>
        </div>
        {open
          ? <ChevronUp size={18} style={{ color: C.muted }} />
          : <ChevronDown size={18} style={{ color: C.muted }} />
        }
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 20px 20px',
              borderTop: `1px solid ${C.border}`,
              paddingTop: 16,
            }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Badge card ───────────────────────────────────────────────────────────────
function BadgeCard({ achievement, earned }: { achievement: Achievement; earned: boolean }) {
  const IconComp = ICON_MAP[achievement.icon] || Star

  return (
    <motion.div
      whileHover={earned ? { scale: 1.04, y: -2 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        background: earned ? C.surface : C.locked,
        border: `1px solid ${earned ? 'rgba(201,168,76,0.3)' : C.border}`,
        borderRadius: 14,
        padding: '20px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: earned ? 'default' : 'not-allowed',
        opacity: earned ? 1 : 0.5,
      }}
    >
      {/* Gold glow for earned */}
      {earned && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 80,
          background: `radial-gradient(circle, ${C.goldGlow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      )}

      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: earned ? C.goldDim : 'rgba(42,38,54,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 10px',
        position: 'relative',
      }}>
        {earned
          ? <IconComp size={22} style={{ color: C.gold }} />
          : <Lock size={18} style={{ color: C.lockedText }} />
        }
      </div>

      <p style={{
        fontSize: 13,
        fontWeight: 600,
        color: earned ? C.text : C.lockedText,
        marginBottom: 4,
        lineHeight: 1.3,
      }}>
        {achievement.title}
      </p>

      <p style={{
        fontSize: 11,
        color: earned ? C.muted : C.lockedText,
        lineHeight: 1.4,
      }}>
        {earned ? achievement.description : achievement.condition}
      </p>
    </motion.div>
  )
}

// ── Main dashboard ───────────────────────────────────────────────────────────
export function PainelClient() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [earned, setEarned] = useState<Achievement[]>([])

  useEffect(() => {
    setStats(getDashboardStats())
    setEarned(checkAchievements())
  }, [])

  if (!stats) {
    return (
      <main style={{ background: C.bg, minHeight: '100vh' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '40vh',
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ color: C.gold }}
            >
              <BarChart3 size={32} />
            </motion.div>
          </div>
        </div>
      </main>
    )
  }

  // ── Compute total completion ──
  const totalItems =
    114 + 7 + 99 + 99 + 28 +   // Palavra + Presenca totals
    12 + 10 + 7 + 8 + 10 + 30 + 15 + 10  // Jornada totals
  const totalDone =
    stats.surahsRead + stats.surahStudies + stats.namesStudied +
    stats.flashcardsStudied + stats.arabicLetters +
    stats.seerahRead + stats.companionsRead + stats.womenRead +
    stats.financeRead + stats.mentalHealthRead + stats.ramadanProgress +
    stats.parablesRead + stats.hifzProgress
  const totalPct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0

  const earnedIds = new Set(earned.map(a => a.id))

  return (
    <main style={{ background: C.bg, minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <BackButton href="/a-alma" label="A Alma" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 16, marginBottom: 28 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 28,
            fontWeight: 700,
            color: C.text,
            letterSpacing: '-0.02em',
          }}>
            Painel de Aprendizado
          </h1>
          <p style={{ color: C.secondary, fontSize: 14, marginTop: 6 }}>
            Todo o seu progresso, em um so lugar.
          </p>
        </motion.div>

        {/* ── Total completion ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            background: C.surface,
            border: `1px solid rgba(201,168,76,0.2)`,
            borderRadius: 20,
            padding: '32px 24px',
            textAlign: 'center',
            marginBottom: 24,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300, height: 200,
            background: `radial-gradient(ellipse, ${C.goldGlow} 0%, transparent 70%)`,
            pointerEvents: 'none',
            opacity: 0.3,
          }} />

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 56,
              fontWeight: 700,
              color: C.gold,
              lineHeight: 1,
              position: 'relative',
            }}
          >
            {totalPct}%
          </motion.p>
          <p style={{
            color: C.secondary,
            fontSize: 14,
            marginTop: 8,
            position: 'relative',
          }}>
            progresso geral do Kalam
          </p>
          <div style={{ marginTop: 16, position: 'relative' }}>
            <ProgressBar value={totalDone} max={totalItems} delay={0.4} />
          </div>
        </motion.div>

        {/* ── Resumo Geral ── */}
        <Section title="Resumo Geral" icon={BarChart3} defaultOpen={true}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }}>
            {[
              { label: 'Streak', value: stats.streak, suffix: 'dias', icon: Flame },
              { label: 'Suratas', value: stats.surahsRead, suffix: 'lidas', icon: BookOpen },
              { label: 'Nomes', value: stats.namesStudied, suffix: 'estudados', icon: Sparkles },
              { label: 'Dhikr', value: stats.dhikrSessions, suffix: 'sessoes', icon: Heart },
              { label: 'Journal', value: stats.journalEntries, suffix: 'entradas', icon: PenLine },
              { label: 'Trilha', value: stats.trailDaysCompleted, suffix: 'dias', icon: Compass },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                style={{
                  background: C.bg,
                  borderRadius: 12,
                  padding: '16px 12px',
                  textAlign: 'center',
                  border: `1px solid ${C.border}`,
                }}
              >
                <item.icon size={18} style={{ color: C.gold, marginBottom: 6 }} />
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 24,
                  fontWeight: 700,
                  color: C.text,
                  lineHeight: 1,
                }}>
                  {item.value}
                </p>
                <p style={{
                  fontSize: 11,
                  color: C.muted,
                  marginTop: 4,
                }}>
                  {item.suffix}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── A Palavra ── */}
        <Section title="A Palavra" icon={BookOpen}>
          <StatRow label="Suratas lidas" value={stats.surahsRead} max={114} delay={0.1} />
          <StatRow label="Estudos profundos" value={stats.surahStudies} max={7} delay={0.15} />
          <StatRow label="Hadiths favoritos" value={stats.favHadiths} max={stats.favHadiths || 1} delay={0.2} />
          <StatRow label="Parabolas lidas" value={stats.parablesRead} max={15} delay={0.25} />
          <StatRow label="Hifz (memorizacao)" value={stats.hifzProgress} max={10} delay={0.3} />
        </Section>

        {/* ── A Presenca ── */}
        <Section title="A Presenca" icon={Sparkles}>
          <StatRow label="Nomes estudados" value={stats.namesStudied} max={99} delay={0.1} />
          <StatRow label="Flashcards" value={stats.flashcardsStudied} max={99} delay={0.15} />
          <StatRow label="Letras arabes" value={stats.arabicLetters} max={28} delay={0.2} />
        </Section>

        {/* ── A Jornada ── */}
        <Section title="A Jornada" icon={TrendingUp}>
          <StatRow label="Seerah (Vida do Profeta)" value={stats.seerahRead} max={12} delay={0.1} />
          <StatRow label="Companheiros" value={stats.companionsRead} max={10} delay={0.15} />
          <StatRow label="Mulheres no Isla" value={stats.womenRead} max={7} delay={0.2} />
          <StatRow label="Financas islamicas" value={stats.financeRead} max={8} delay={0.25} />
          <StatRow label="Saude mental" value={stats.mentalHealthRead} max={10} delay={0.3} />
          <StatRow label="Ramadan" value={stats.ramadanProgress} max={30} delay={0.35} />
        </Section>

        {/* ── Conquistas ── */}
        <Section title={`Conquistas (${earned.length}/${achievements.length})`} icon={Trophy}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
          }}>
            {achievements.map((a) => (
              <BadgeCard
                key={a.id}
                achievement={a}
                earned={earnedIds.has(a.id)}
              />
            ))}
          </div>
        </Section>

      </div>
    </main>
  )
}
