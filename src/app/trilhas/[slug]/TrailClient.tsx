'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'
import type { Trail } from './page'

interface Props {
  trail: Trail | null
}

function DayCard({
  day,
  index,
  totalDays,
}: {
  day: Trail['days'][0]
  index: number
  totalDays: number
}) {
  const [reflectionOpen, setReflectionOpen] = useState(false)
  const isLast = index === totalDays - 1

  return (
    <div style={{ display: 'flex', gap: 24, position: 'relative' }}>

      {/* Connector line + dot */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: 20,
      }}>
        {/* Dot */}
        <div style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#C9A84C',
          border: '2px solid rgba(201,168,76,0.3)',
          boxShadow: '0 0 12px rgba(201,168,76,0.25)',
          flexShrink: 0,
          marginTop: 24,
          zIndex: 1,
        }} />
        {/* Line going down */}
        {!isLast && (
          <div style={{
            flex: 1,
            width: 1,
            background: 'linear-gradient(180deg, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.05) 100%)',
            marginTop: 8,
          }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          flex: 1,
          background: '#161220',
          border: '1px solid #272230',
          borderRadius: 16,
          padding: '24px 28px',
          marginBottom: isLast ? 0 : 20,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle inner glow top-left */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: 200, height: 120,
          background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Day badge */}
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--font-sans)',
          fontSize: 9,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#C9A84C',
          background: 'rgba(201,168,76,0.07)',
          border: '1px solid rgba(201,168,76,0.18)',
          borderRadius: 4,
          padding: '3px 10px',
          marginBottom: 14,
        }}>
          DIA {day.day}
        </span>

        {/* Day title */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 20,
          fontWeight: 600,
          color: '#F0EBE2',
          marginBottom: 20,
          lineHeight: 1.3,
          position: 'relative',
        }}>
          {day.title}
        </h3>

        {/* Arabic verse */}
        <div style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 28,
          color: '#C9A84C',
          direction: 'rtl',
          textAlign: 'right',
          lineHeight: 1.7,
          marginBottom: 8,
          textShadow: '0 0 16px rgba(201,168,76,0.15)',
          position: 'relative',
        }}>
          {day.arabic}
        </div>

        {/* Translation */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 15,
          color: '#F0EBE2',
          lineHeight: 1.65,
          marginBottom: 4,
          position: 'relative',
        }}>
          &ldquo;{day.translation}&rdquo;
        </p>

        {/* Reference */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          color: '#C9A84C',
          letterSpacing: '1px',
          marginBottom: 20,
          position: 'relative',
        }}>
          — {day.ref}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: '#272230', marginBottom: 20 }} />

        {/* Content */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          color: '#B3B0A6',
          lineHeight: 1.85,
          marginBottom: 20,
          position: 'relative',
        }}>
          {day.content}
        </p>

        {/* Reflection (collapsible) */}
        <div style={{ marginBottom: 20 }}>
          <button
            onClick={() => setReflectionOpen((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#7A7870',
              marginBottom: reflectionOpen ? 12 : 0,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#B3B0A6' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#7A7870' }}
          >
            Reflexão do dia
            <ChevronDown
              size={14}
              style={{
                transition: 'transform 0.3s ease',
                transform: reflectionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: '#7A7870',
              }}
            />
          </button>

          {reflectionOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#B3B0A6',
                lineHeight: 1.8,
                fontStyle: 'italic',
                borderLeft: '2px solid rgba(201,168,76,0.25)',
                paddingLeft: 16,
              }}>
                {day.reflection}
              </p>
            </motion.div>
          )}
        </div>

        {/* Key insight pill */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(201,168,76,0.07)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: 8,
          padding: '10px 16px',
          position: 'relative',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: '#C9A84C',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {day.keyInsight}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function TrailClient({ trail }: Props) {
  if (!trail) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0D0B12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        gap: 24,
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.5)',
        }}>
          TRILHA NÃO ENCONTRADA
        </p>
        <Link
          href="/trilhas"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            textDecoration: 'none',
          }}
        >
          ← TRILHAS
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0D0B12', paddingTop: 64 }}>

      {/* ── BACK NAV ── */}
      <div style={{ padding: '32px 24px 0', maxWidth: 900, margin: '0 auto' }}>
        <Link
          href="/trilhas"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(201,168,76,0.5)' }}
        >
          ← TRILHAS
        </Link>
      </div>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(48px, 8vw, 96px) 24px clamp(48px, 6vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>

          {/* Arabic title */}
          <BlurFade delay={0}>
            <div
              className="arabic-glow"
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(56px, 10vw, 80px)',
                color: '#C9A84C',
                direction: 'rtl',
                lineHeight: 1.3,
                marginBottom: 16,
                textShadow: '0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)',
              }}
            >
              {trail.arabicTitle}
            </div>
          </BlurFade>

          {/* Trail title */}
          <BlurFade delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5.5vw, 40px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.2,
              marginBottom: 12,
            }}>
              {trail.title}
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.2}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: '#B3B0A6',
              marginBottom: 24,
              lineHeight: 1.6,
            }}>
              {trail.subtitle}
            </p>
          </BlurFade>

          {/* Duration + progress indicator */}
          <BlurFade delay={0.3}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              marginBottom: 28,
              flexWrap: 'wrap',
            }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 20,
                padding: '4px 14px',
              }}>
                {trail.duration}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#7A7870',
              }}>
                {trail.days.length} de {trail.days.length} dias
              </span>
            </div>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.4}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.7vw, 16px)',
              color: '#B3B0A6',
              lineHeight: 1.85,
              maxWidth: 560,
              margin: '0 auto 40px',
            }}>
              {trail.description}
            </p>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.5}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.5 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── DAYS LIST ── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* Section label */}
          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 48,
            }}>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#7A7870',
                whiteSpace: 'nowrap',
              }}>
                A JORNADA
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          {/* Days with connecting line */}
          <div>
            {trail.days.map((day, i) => (
              <DayCard
                key={day.day}
                day={day}
                index={i}
                totalDays={trail.days.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 48,
          }}>
            <div style={{ flex: 1, height: 1, background: '#272230' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(201,168,76,0.3)' }} />
            <div style={{ flex: 1, height: 1, background: '#272230' }} />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            <Link
              href="/trilhas"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#7A7870',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#B3B0A6' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#7A7870' }}
            >
              ← Ver todas as trilhas
            </Link>

            <Link
              href="/trilhas"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textDecoration: 'none',
                gap: 4,
                padding: '16px 24px',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 8,
                background: 'rgba(201,168,76,0.02)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.02)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#7A7870',
              }}>
                Explorar outras trilhas
              </span>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                color: '#C9A84C',
              }}>
                Ver todas →
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
