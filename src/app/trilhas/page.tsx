'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/effects/BlurFade'
import { TRAILS, type Trail } from '@/lib/data/trails'

function TrailCard({ trail, index }: { trail: Trail; index: number }) {
  const [hovered, setHovered] = useState(false)
  const previewDays = trail.days.slice(0, 2)
  const hasMore = trail.days.length > 2

  const cardInner = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: '#161220',
        border: hovered && trail.available
          ? '1px solid rgba(201,168,76,0.3)'
          : '1px solid #272230',
        borderRadius: 20,
        padding: 32,
        cursor: trail.available ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered && trail.available ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered && trail.available
          ? '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.04)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Top gradient line on hover */}
      {trail.available && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)'
            : 'transparent',
          transition: 'background 0.4s ease',
        }} />
      )}

      {/* Arabic title */}
      <div style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: 36,
        color: trail.available ? '#C9A84C' : '#7A7870',
        direction: 'rtl',
        textAlign: 'right',
        marginBottom: 12,
        lineHeight: 1.3,
        textShadow: hovered && trail.available ? '0 0 20px rgba(201,168,76,0.2)' : 'none',
        transition: 'text-shadow 0.3s ease',
      }}>
        {trail.arabicTitle}
      </div>

      {/* Badges row */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: trail.available ? '#C9A84C' : '#7A7870',
          background: trail.available ? 'rgba(201,168,76,0.08)' : 'rgba(90,90,80,0.08)',
          border: trail.available ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(90,90,80,0.2)',
          borderRadius: 20,
          padding: '3px 10px',
        }}>
          {trail.duration}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: trail.available ? '#C9A84C' : '#7A7870',
          background: trail.available ? 'rgba(201,168,76,0.08)' : 'rgba(90,90,80,0.08)',
          border: trail.available ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(90,90,80,0.2)',
          borderRadius: 20,
          padding: '3px 10px',
        }}>
          {trail.theme}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 24,
        fontWeight: 600,
        color: '#F0EBE2',
        marginBottom: 6,
        lineHeight: 1.25,
      }}>
        {trail.title}
      </h3>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#B3B0A6',
        fontStyle: 'italic',
        marginBottom: 12,
        lineHeight: 1.6,
      }}>
        {trail.subtitle}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#B3B0A6',
        lineHeight: 1.75,
        marginBottom: 20,
      }}>
        {trail.description}
      </p>

      {/* Day preview */}
      {previewDays.length > 0 && (
        <div style={{
          borderTop: '1px solid #272230',
          paddingTop: 16,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {previewDays.map((d) => (
            <span
              key={d.day}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: '#7A7870',
              }}
            >
              Dia {d.day} — {d.title}
            </span>
          ))}
          {hasMore && (
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: '#7A7870',
            }}>
              ...
            </span>
          )}
        </div>
      )}

      {/* CTA */}
      {trail.available ? (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.45)',
          transition: 'color 0.3s ease',
        }}>
          Começar trilha →
        </p>
      ) : (
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--font-sans)',
          fontSize: 9,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#7A7870',
          background: 'rgba(90,90,80,0.08)',
          border: '1px solid rgba(90,90,80,0.2)',
          borderRadius: 4,
          padding: '4px 10px',
        }}>
          Em breve
        </span>
      )}
    </motion.div>
  )

  if (trail.available) {
    return (
      <Link href={`/trilhas/${trail.slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
        {cardInner}
      </Link>
    )
  }

  return <div style={{ display: 'flex' }}>{cardInner}</div>
}

export default function TrilhasPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0D0B12', paddingTop: 64 }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(48px, 6vw, 80px)',
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

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>

          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              TRILHAS
            </p>
          </BlurFade>

          {/* H1 */}
          <BlurFade delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 6vw, 52px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 20,
            }}>
              Jornadas de Aprendizado
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.2}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: '#B3B0A6',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.75,
            }}>
              Cada trilha é uma jornada guiada — de 4 a 35 dias. Um dia. Uma ideia. Uma mudança.
            </p>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.3}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── TRAILS GRID ── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

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
                TODAS AS TRILHAS
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
            gap: 20,
            alignItems: 'start',
          }}>
            {TRAILS.map((trail, i) => (
              <TrailCard key={trail.slug} trail={trail} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        {/* Gold divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 48,
          borderTop: '1px solid rgba(201,168,76,0.1)',
          paddingTop: 48,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            color: '#B3B0A6',
            marginBottom: 28,
          }}>
            Quer explorar por tema?
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <Link
            href="/biblioteca"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 2,
              padding: '14px 36px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
            }}
          >
            Ir para a Biblioteca →
          </Link>
        </BlurFade>
      </section>

    </div>
  )
}
