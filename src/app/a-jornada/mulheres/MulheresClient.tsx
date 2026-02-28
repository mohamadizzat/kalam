'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { women } from '@/lib/data/women'
import { BlurFade } from '@/components/effects/BlurFade'

export default function MulheresClient() {
  const [expanded, setExpanded] = useState<string | null>(null)

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
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          {/* Back link */}
          <BlurFade delay={0}>
            <Link href="/a-jornada" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#7A7870',
              textDecoration: 'none',
              marginBottom: 32,
            }}>
              <ArrowLeft size={14} />
              A Jornada
            </Link>
          </BlurFade>

          {/* Eyebrow */}
          <BlurFade delay={0.05}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              Mulheres no Islam
            </p>
          </BlurFade>

          {/* Arabic */}
          <BlurFade delay={0.1}>
            <div style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(42px, 7vw, 72px)',
              color: '#C9A84C',
              direction: 'rtl',
              marginBottom: 24,
              lineHeight: 1.2,
              textShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1)',
            }}>
              نساء الإسلام
            </div>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 20,
            }}>
              As historias que o mundo{' '}
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                nao conta.
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#B3B0A6',
              maxWidth: 560,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Antes de existir feminismo, existiam essas mulheres. Comerciantes, eruditas, maes,
              guerreiras espirituais. Suas historias foram apagadas da narrativa ocidental.
              Esta e a correcao.
            </p>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.4}>
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

      {/* ── PROFILES ── */}
      <section style={{
        padding: '0 24px clamp(80px, 10vw, 120px)',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {women.map((woman, i) => {
              const isExpanded = expanded === woman.slug

              return (
                <motion.div
                  key={woman.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div
                    onClick={() => setExpanded(isExpanded ? null : woman.slug)}
                    style={{
                      padding: '32px',
                      borderRadius: '16px',
                      background: '#161220',
                      border: isExpanded
                        ? '1px solid rgba(201,168,76,0.3)'
                        : '1px solid #272230',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: isExpanded
                        ? '0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,168,76,0.03)'
                        : '0 4px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 16,
                    }}>
                      <div style={{ flex: 1 }}>
                        {/* Period label */}
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 10,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          color: '#7A7870',
                          marginBottom: 12,
                        }}>
                          {woman.period}
                        </p>

                        {/* Arabic name */}
                        <p style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: 28,
                          color: '#C9A84C',
                          direction: 'rtl',
                          marginBottom: 8,
                          lineHeight: 1.3,
                        }}>
                          {woman.arabicName}
                        </p>

                        {/* Name */}
                        <p style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 20,
                          fontWeight: 600,
                          color: '#F0EBE2',
                          marginBottom: 4,
                        }}>
                          {woman.name}
                        </p>

                        {/* Title */}
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14,
                          color: '#7A7870',
                          fontStyle: 'italic',
                        }}>
                          {woman.title}
                        </p>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: 'rgba(201,168,76,0.06)',
                          border: '1px solid rgba(201,168,76,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 4,
                        }}
                      >
                        <span style={{
                          fontSize: 18,
                          color: '#C9A84C',
                          lineHeight: 1,
                        }}>
                          +
                        </span>
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ paddingTop: 28 }}>
                            {/* Divider */}
                            <div style={{
                              width: '100%',
                              height: 1,
                              background: 'linear-gradient(90deg, #272230, rgba(201,168,76,0.2), #272230)',
                              marginBottom: 28,
                            }} />

                            {/* Quran mention badge */}
                            {woman.quranMention && (
                              <div style={{
                                background: 'rgba(201,168,76,0.06)',
                                border: '1px solid rgba(201,168,76,0.15)',
                                borderRadius: 8,
                                padding: '12px 16px',
                                marginBottom: 24,
                              }}>
                                <p style={{
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: 13,
                                  color: '#C9A84C',
                                  lineHeight: 1.6,
                                }}>
                                  {woman.quranMention}
                                </p>
                              </div>
                            )}

                            {/* Narrative */}
                            <div style={{ marginBottom: 28 }}>
                              {woman.narrative.split('\n\n').map((paragraph, pi) => (
                                <p key={pi} style={{
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: 15,
                                  lineHeight: 1.85,
                                  color: '#B3B0A6',
                                  marginBottom: pi < woman.narrative.split('\n\n').length - 1 ? 20 : 0,
                                }}>
                                  {paragraph}
                                </p>
                              ))}
                            </div>

                            {/* Key Quote */}
                            <blockquote style={{
                              borderLeft: '2px solid #C9A84C',
                              paddingLeft: 20,
                              margin: '28px 0',
                            }}>
                              <p style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 16,
                                fontStyle: 'italic',
                                color: '#F0EBE2',
                                lineHeight: 1.7,
                                marginBottom: 8,
                              }}>
                                &ldquo;{woman.keyQuote}&rdquo;
                              </p>
                              <p style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 13,
                                color: '#7A7870',
                              }}>
                                — {woman.keyQuoteRef}
                              </p>
                            </blockquote>

                            {/* Legacy */}
                            <div style={{ marginTop: 28 }}>
                              <p style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 10,
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                color: '#C9A84C',
                                marginBottom: 16,
                              }}>
                                Legado
                              </p>
                              {woman.legacy.split('\n\n').map((paragraph, pi) => (
                                <p key={pi} style={{
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: 15,
                                  lineHeight: 1.85,
                                  color: '#B3B0A6',
                                  marginBottom: pi < woman.legacy.split('\n\n').length - 1 ? 20 : 0,
                                }}>
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM ── */}
      <section style={{
        padding: 'clamp(32px, 4vw, 48px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 40,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#B3B0A6',
            maxWidth: 500,
            margin: '0 auto 32px',
            lineHeight: 1.6,
          }}>
            A primeira voz a dizer &ldquo;eu acredito&rdquo; foi feminina.
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <Link
            href="/a-jornada"
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
          >
            Voltar a Jornada
          </Link>
        </BlurFade>
      </section>
    </div>
  )
}
