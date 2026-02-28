'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { KidsHeader } from '@/components/kids'
import { getProgress, getLevel, getNextLevel, getLevelProgress, LEVELS } from '@/lib/kids-progress'
import type { KidsProgress } from '@/lib/kids-progress'
import { badgesKids } from '@/lib/data/kids/badges-kids'

// ── COLORS ──────────────────────────────────────────────────────────────────

const COLORS = {
  bg: '#0D0B12',
  surface: '#161220',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  orange: '#FF8C42',
  teal: '#4ECDC4',
  green: '#45B7A0',
  coral: '#FF6B6B',
  purple: '#A78BFA',
  yellow: '#FFD93D',
}

// ── STAT CARD ───────────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  count,
  total,
  color,
  delay,
}: {
  icon: string
  label: string
  count: number
  total: number
  color: string
  delay: number
}) {
  const pct = total > 0 ? Math.min(100, Math.round((count / total) * 100)) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      style={{
        padding: '16px',
        borderRadius: '16px',
        background: COLORS.surface,
        border: `1px solid ${color}20`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px' }}>{icon}</span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          color: COLORS.muted,
          fontWeight: 500,
        }}>
          {label}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontWeight: 700,
          color: color,
        }}>
          {count}
        </span>
        <span style={{
          fontSize: '13px',
          color: COLORS.muted,
        }}>
          /{total}
        </span>
      </div>
      {/* Mini progress bar */}
      <div style={{
        width: '100%',
        height: '4px',
        borderRadius: '2px',
        background: `${color}15`,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: delay + 0.2 }}
          style={{
            height: '100%',
            borderRadius: '2px',
            background: color,
          }}
        />
      </div>
    </motion.div>
  )
}

// ── SECTION TITLE ───────────────────────────────────────────────────────────

function SectionTitle({
  children,
  badge,
  delay,
}: {
  children: React.ReactNode
  badge?: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '14px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 600,
        color: COLORS.muted,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        {children}
      </p>
      {badge && (
        <span style={{
          fontSize: '10px',
          fontWeight: 600,
          color: COLORS.orange,
          background: `${COLORS.orange}15`,
          padding: '2px 8px',
          borderRadius: '8px',
        }}>
          {badge}
        </span>
      )}
    </motion.div>
  )
}

// ── STREAK CALENDAR ─────────────────────────────────────────────────────────

function StreakCalendar({ streak }: { streak: number }) {
  const days = useMemo(() => {
    const today = new Date()
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today)
      d.setDate(d.getDate() - (6 - i))
      const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
      const isActive = i >= (7 - Math.min(streak, 7))
      const isToday = i === 6
      return {
        label: dayNames[d.getDay()],
        active: isActive,
        today: isToday,
      }
    })
  }, [streak])

  return (
    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
      {days.map((day, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '9px',
            color: COLORS.muted,
            marginBottom: '4px',
            fontWeight: day.today ? 600 : 400,
          }}>
            {day.label}
          </p>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: day.active ? `${COLORS.coral}20` : '#1C1828',
            border: day.today ? `1.5px solid ${COLORS.coral}` : `1px solid ${day.active ? `${COLORS.coral}30` : COLORS.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}>
            {day.active ? '🔥' : ''}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function MeuProgressoKidsClient() {
  const [progress, setProgress] = useState<KidsProgress | null>(null)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const handleReset = () => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('kalam-kids-progress')
    setProgress(getProgress())
    setShowResetConfirm(false)
  }

  if (!progress) {
    return (
      <main className="min-h-screen" style={{ background: COLORS.bg }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ fontSize: '32px' }}
            >
              ⭐
            </motion.div>
          </div>
        </div>
      </main>
    )
  }

  const level = getLevel(progress.stars)
  const nextLevel = getNextLevel(progress.stars)
  const levelProgress = getLevelProgress(progress.stars)
  const earnedBadges = progress.badges.length

  return (
    <main className="min-h-screen" style={{ background: COLORS.bg }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        {/* ── Header ── */}
        <KidsHeader
          emoji="🏆"
          title="Meu Progresso"
          subtitle="Suas estrelas, nivel e conquistas!"
          backHref="/kids"
          color={COLORS.yellow}
          stars={progress.stars}
        />

        {/* ── 1. Level & Stars Hero Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{
            padding: '28px 24px',
            borderRadius: '20px',
            background: COLORS.surface,
            border: `1px solid ${COLORS.orange}20`,
            textAlign: 'center',
            marginBottom: '28px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.orange}08 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {/* Level emoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <span style={{ fontSize: '64px', display: 'block', marginBottom: '8px' }}>
              {level.emoji}
            </span>
          </motion.div>

          {/* Level name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: COLORS.text,
              marginBottom: '4px',
            }}
          >
            {level.name}
          </motion.p>

          {/* Level number */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            style={{
              fontSize: '12px',
              color: COLORS.muted,
              marginBottom: '16px',
            }}
          >
            Nivel {LEVELS.indexOf(level) + 1} de {LEVELS.length}
          </motion.p>

          {/* Stars count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 20px',
              borderRadius: '20px',
              background: `${COLORS.yellow}15`,
              border: `1px solid ${COLORS.yellow}25`,
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '18px' }}>⭐</span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontWeight: 700,
              color: COLORS.yellow,
            }}>
              {progress.stars}
            </span>
            <span style={{ fontSize: '13px', color: COLORS.muted }}>estrelas</span>
          </motion.div>

          {/* Progress bar to next level */}
          <div style={{
            width: '100%',
            height: '10px',
            borderRadius: '5px',
            background: `${COLORS.orange}12`,
            overflow: 'hidden',
            marginBottom: '8px',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${levelProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              style={{
                height: '100%',
                borderRadius: '5px',
                background: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.yellow})`,
              }}
            />
          </div>

          {/* Next level text */}
          <p style={{
            fontSize: '12px',
            color: COLORS.muted,
          }}>
            {nextLevel
              ? `Proximo nivel: ${nextLevel.emoji} ${nextLevel.name} (${nextLevel.minStars - progress.stars} estrelas)`
              : 'Nivel maximo! Parabens! 🎉'
            }
          </p>
        </motion.div>

        {/* ── 2. Stats Grid (2x2) - Main ── */}
        <SectionTitle delay={0.3}>Seu aprendizado</SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          marginBottom: '24px',
        }}>
          <StatCard
            icon="📖"
            label="Historias lidas"
            count={progress.completedStories.length}
            total={15}
            color={COLORS.orange}
            delay={0.35}
          />
          <StatCard
            icon="📖"
            label="Suratas aprendidas"
            count={progress.completedSurahs.length}
            total={15}
            color={COLORS.green}
            delay={0.4}
          />
          <StatCard
            icon="🤲"
            label="Duas aprendidas"
            count={progress.completedDuas.length}
            total={20}
            color={COLORS.yellow}
            delay={0.45}
          />
          <StatCard
            icon="❓"
            label="Quizzes completos"
            count={progress.completedQuizzes.length}
            total={5}
            color={COLORS.purple}
            delay={0.5}
          />
        </div>

        {/* ── 3. More Stats (2x2) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          marginBottom: '32px',
        }}>
          <StatCard
            icon="🕌"
            label="Pilares do Islam"
            count={progress.completedPillars.length}
            total={5}
            color={COLORS.teal}
            delay={0.55}
          />
          <StatCard
            icon="💎"
            label="Pilares da Fe"
            count={progress.completedFaithPillars.length}
            total={6}
            color={COLORS.purple}
            delay={0.6}
          />
          <StatCard
            icon="🌟"
            label="Bons Modos"
            count={progress.completedAdab.length}
            total={12}
            color={COLORS.coral}
            delay={0.65}
          />
          <StatCard
            icon="🦸"
            label="Herois lidos"
            count={progress.completedHeroes.length}
            total={10}
            color={COLORS.green}
            delay={0.7}
          />
        </div>

        {/* ── 4. Level Journey (visual path) ── */}
        <SectionTitle delay={0.75}>Jornada dos Niveis</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          style={{
            padding: '20px',
            borderRadius: '20px',
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {LEVELS.map((lvl, i) => {
              const isCompleted = progress.stars >= lvl.minStars
              const isCurrent = level.name === lvl.name
              const isLast = i === LEVELS.length - 1

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.85 + i * 0.05 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Node + connector line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: isCompleted ? `${COLORS.orange}20` : '#1C1828',
                        border: isCurrent ? `2px solid ${COLORS.orange}` : `1px solid ${isCompleted ? `${COLORS.orange}30` : COLORS.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        opacity: isCompleted ? 1 : 0.4,
                        boxShadow: isCurrent ? `0 0 12px rgba(255,140,66,0.3)` : 'none',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}>
                        {lvl.emoji}
                      </div>
                      {/* Connecting line */}
                      {!isLast && (
                        <div style={{
                          width: '2px',
                          height: '16px',
                          background: isCompleted ? `${COLORS.orange}30` : COLORS.border,
                        }} />
                      )}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, paddingBottom: isLast ? 0 : '16px' }}>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: isCompleted ? COLORS.text : COLORS.muted,
                        fontFamily: 'var(--font-sans)',
                      }}>
                        {lvl.name}
                      </p>
                      <p style={{ fontSize: '11px', color: COLORS.muted }}>
                        {lvl.minStars} estrelas
                      </p>
                    </div>

                    {/* Current badge */}
                    {isCurrent && (
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: COLORS.orange,
                        background: `${COLORS.orange}15`,
                        padding: '3px 10px',
                        borderRadius: '8px',
                        flexShrink: 0,
                        marginBottom: isLast ? 0 : '16px',
                      }}>
                        Voce esta aqui
                      </span>
                    )}

                    {/* Completed checkmark */}
                    {isCompleted && !isCurrent && (
                      <span style={{
                        fontSize: '14px',
                        flexShrink: 0,
                        marginBottom: isLast ? 0 : '16px',
                      }}>
                        ✅
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── 5. Badges / Conquistas ── */}
        <SectionTitle delay={1.3} badge={`${earnedBadges}/${badgesKids.length}`}>
          Conquistas
        </SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {badgesKids.map((badge, i) => {
            const earned = progress.badges.includes(badge.id)
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 1.4 + i * 0.03 }}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: earned ? COLORS.surface : '#0F0D14',
                  border: `1px solid ${earned ? `${COLORS.orange}25` : '#1C1828'}`,
                  textAlign: 'center',
                  opacity: earned ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span style={{
                  fontSize: '28px',
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  {earned ? badge.emoji : '🔒'}
                </span>
                <p style={{
                  fontSize: '11px',
                  color: earned ? COLORS.text : COLORS.muted,
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.3,
                }}>
                  {badge.name}
                </p>
                {earned && (
                  <p style={{
                    fontSize: '9px',
                    color: COLORS.muted,
                    marginTop: '2px',
                    lineHeight: 1.3,
                  }}>
                    {badge.description}
                  </p>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── 6. Streak Section ── */}
        <SectionTitle delay={1.8}>Sequencia</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.85 }}
          style={{
            padding: '20px',
            borderRadius: '20px',
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            marginBottom: '40px',
          }}
        >
          {/* Streak count */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}>
            <span style={{ fontSize: '28px' }}>🔥</span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: progress.streak > 0 ? COLORS.coral : COLORS.muted,
            }}>
              {progress.streak}
            </span>
            <span style={{
              fontSize: '14px',
              color: COLORS.secondary,
            }}>
              {progress.streak === 1 ? 'dia seguido' : 'dias seguidos'}
            </span>
          </div>

          {/* Calendar visualization */}
          <StreakCalendar streak={progress.streak} />
        </motion.div>

        {/* ── 7. Reset Button ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.0 }}
          style={{ textAlign: 'center' }}
        >
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: COLORS.muted,
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = COLORS.coral }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = COLORS.muted }}
            >
              Resetar progresso
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                background: COLORS.surface,
                border: `1px solid ${COLORS.coral}30`,
              }}
            >
              <p style={{
                fontSize: '13px',
                color: COLORS.text,
                marginBottom: '12px',
                fontFamily: 'var(--font-sans)',
              }}>
                Tem certeza? Todas as estrelas, conquistas e progresso serao perdidos.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '10px',
                    background: COLORS.coral,
                    border: 'none',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  Sim, resetar
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '10px',
                    background: '#272230',
                    border: 'none',
                    color: COLORS.secondary,
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  Cancelar
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>
    </main>
  )
}
