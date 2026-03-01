'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'
import { ScriptureCompare } from '@/components/shared/ScriptureCompare'
import { BackButton } from '@/components/shared/BackButton'
import type { Prophet } from './page'

const ponteMap: Record<string, string> = {
  'adao': 'adam',
  'ibrahim': 'ibrahim',
  'yusuf': 'yusuf',
  'musa': 'musa',
  'issa': 'isa',
  'muhammad': 'muhammad',
}

interface Props {
  prophet: Prophet | null
}

export function ProphetEpisodeClient({ prophet }: Props) {
  if (!prophet) {
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
          EPISÓDIO NÃO ENCONTRADO
        </p>
        <Link
          href="/os-profetas"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            textDecoration: 'none',
          }}
        >
          ← OS PROFETAS
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0D0B12', paddingTop: 64 }}>

      {/* ── BACK NAVIGATION ── */}
      <div style={{
        padding: '32px 24px 0',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        <BackButton href="/os-profetas" label="Os Profetas" />
      </div>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(48px, 8vw, 96px) 24px clamp(64px, 8vw, 96px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          {/* Episode badge */}
          <BlurFade delay={0}>
            <span style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 2,
              padding: '6px 16px',
              marginBottom: 32,
            }}>
              Episódio {String(prophet.episode).padStart(2, '0')}
            </span>
          </BlurFade>

          {/* Arabic name */}
          <BlurFade delay={0.1}>
            <div
              className="arabic-glow"
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(56px, 10vw, 100px)',
                color: '#C9A84C',
                direction: 'rtl',
                lineHeight: 1.2,
                marginBottom: 16,
                textShadow: '0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)',
              }}
            >
              {prophet.arabicName}
            </div>
          </BlurFade>

          {/* Prophet name */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              {prophet.name}
            </h1>
          </BlurFade>

          {/* Episode title */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#B3B0A6',
              marginBottom: 32,
            }}>
              {prophet.title}
            </p>
          </BlurFade>

          {/* Hook */}
          <BlurFade delay={0.4}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#B3B0A6',
              lineHeight: 1.8,
              maxWidth: 560,
              margin: '0 auto',
            }}>
              {prophet.hook}
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── SCRIPTURE COMPARE ── */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 40,
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
                O QUE DIZEM AS ESCRITURAS
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <ScriptureCompare
              left={{
                label: 'Bíblia',
                reference: prophet.bibleRef,
                text: prophet.bibleText,
              }}
              right={{
                label: 'Alcorão',
                reference: prophet.quranRef,
                text: prophet.quranText,
              }}
            />
          </BlurFade>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: 40,
            }}>
              INSIGHTS COMPARATIVOS
            </p>
          </BlurFade>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {prophet.insights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}
              >
                <div style={{
                  flexShrink: 0,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#C9A84C',
                  marginTop: 8,
                  opacity: 0.7,
                }} />
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  color: '#B3B0A6',
                  lineHeight: 1.85,
                }}>
                  {insight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY MOMENT ── */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 96px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <div style={{
              background: '#161220',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid rgba(201,168,76,0.6)',
              borderRadius: 4,
              padding: 'clamp(28px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.03) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.5)',
                marginBottom: 24,
                position: 'relative',
              }}>
                MOMENTO-CHAVE
              </p>

              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#F0EBE2',
                lineHeight: 1.6,
                marginBottom: 16,
                position: 'relative',
              }}>
                {prophet.keyMoment.quote}
              </blockquote>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: '#C9A84C',
                letterSpacing: '1px',
                marginBottom: 20,
                position: 'relative',
              }}>
                — {prophet.keyMoment.ref}
              </p>

              <div style={{ width: '100%', height: 1, background: '#272230', marginBottom: 20 }} />

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                color: '#B3B0A6',
                lineHeight: 1.75,
                position: 'relative',
              }}>
                {prophet.keyMoment.note}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── CROSS-LINK: A Ponte ── */}
      {prophet.slug && ponteMap[prophet.slug] && (
        <section style={{ padding: '0 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ marginTop: 24 }}>
              <Link
                href={`/a-ponte/por-profeta/${ponteMap[prophet.slug]}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: '#C9A84C',
                  textDecoration: 'none',
                }}
              >
                <GitBranch size={14} />
                Veja em A Ponte
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── NEXT EPISODE NAV ── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

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
              href="/os-profetas"
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
              ← Ver todos os episódios
            </Link>

            {prophet.nextSlug ? (
              <Link
                href={`/os-profetas/${prophet.nextSlug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  textDecoration: 'none',
                  gap: 4,
                  padding: '16px 24px',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: 4,
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
                  Próximo episódio
                </span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  color: '#C9A84C',
                }}>
                  {prophet.nextName} →
                </span>
              </Link>
            ) : (
              <div style={{
                padding: '16px 24px',
                border: '1px solid #272230',
                borderRadius: 4,
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#7A7870',
                }}>
                  Próximos em breve →
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
