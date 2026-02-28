'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const DAYS = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

const TOPICS = [
  { symbol: '♥', name: 'Amor', count: '47 versículos', slug: 'amor' },
  { symbol: '☁', name: 'Medo', count: '32 versículos', slug: 'medo' },
  { symbol: '✦', name: 'Propósito', count: '28 versículos', slug: 'proposito' },
  { symbol: '✿', name: 'Gratidão', count: '41 versículos', slug: 'gratidao' },
  { symbol: '〰', name: 'Ansiedade', count: '19 versículos', slug: 'ansiedade' },
  { symbol: '◎', name: 'Perdão', count: '35 versículos', slug: 'perdao' },
]

const TRAILS = [
  {
    arabic: 'الرَّحْمَن',
    name: 'Deus é Amor',
    meta: '5 dias · Jornada',
    progress: 20,
    href: '/trilhas/deus-e-amor',
  },
  {
    arabic: 'لَا تَحْزَنْ',
    name: 'Sem Medo',
    meta: '4 dias · Jornada',
    progress: 0,
    href: '/trilhas/sem-medo',
  },
  {
    arabic: 'الأنبياء',
    name: 'Os Profetas',
    meta: '7 dias · Jornada',
    progress: 0,
    href: '/trilhas/os-profetas',
  },
]

export default function HomePage() {
  const now = new Date()
  const greeting = `${DAYS[now.getDay()]}, ${now.getDate()} de ${MONTHS[now.getMonth()]}`

  return (
    <div
      style={{
        paddingTop: 104,
        paddingBottom: 100,
        maxWidth: 720,
        margin: '0 auto',
        padding: '104px 24px 100px',
      }}
    >
      {/* SECTION 1 — GREETING */}
      <section style={{ marginBottom: 40 }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          color: '#5A5A50',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          {greeting}
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 40,
          fontWeight: 600,
          color: '#F5F5F0',
          margin: '0 0 12px',
          lineHeight: 1.2,
        }}>
          Bom dia.
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          color: '#8A8A7A',
          margin: '0 0 32px',
        }}>
          Sua presença com Deus começa aqui.
        </p>
        <div style={{
          height: 1,
          background: 'rgba(201,168,76,0.15)',
          width: '100%',
        }} />
      </section>

      {/* SECTION 2 — AYA DO DIA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ marginBottom: 48 }}
      >
        <Link href="/aya-do-dia" style={{ textDecoration: 'none', display: 'block' }}>
          <div style={{
            background: '#111111',
            borderRadius: 20,
            padding: 32,
            border: '1px solid rgba(201,168,76,0.2)',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.4)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.2)'
            }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              color: '#C9A84C',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Aya do Dia
            </p>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 48,
              color: '#C9A84C',
              direction: 'rtl',
              textAlign: 'center',
              marginBottom: 20,
              lineHeight: 1.6,
              textShadow: '0 0 30px rgba(201,168,76,0.2)',
            }}>
              إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 18,
              color: '#F5F5F0',
              textAlign: 'center',
              marginBottom: 10,
              lineHeight: 1.6,
            }}>
              &ldquo;De fato, com a dificuldade vem a facilidade.&rdquo;
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: '#5A5A50',
              textAlign: 'center',
              marginBottom: 24,
            }}>
              — Al-Inshirah 94:6
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: '#C9A84C',
              }}>
                Refletir sobre este versículo →
              </span>
            </div>
          </div>
        </Link>
      </motion.section>

      {/* SECTION 3 — TRILHAS */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginBottom: 48 }}
      >
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          color: '#5A5A50',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          Suas Jornadas
        </p>

        {/* Hide scrollbar globally for this container */}
        <style>{`
          .trail-row::-webkit-scrollbar { display: none; }
          .trail-row { -ms-overflow-style: none; scrollbar-width: none; }
          @media (min-width: 769px) {
            .trail-card { flex: 1; min-width: 0 !important; }
          }
        `}</style>

        <div
          className="trail-row"
          style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
          }}
        >
          {TRAILS.map((trail) => (
            <Link
              key={trail.href}
              href={trail.href}
              className="trail-card"
              style={{
                textDecoration: 'none',
                minWidth: 180,
                display: 'block',
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #1A1A2E, #111111)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 16,
                padding: '24px 20px',
                height: '100%',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.35)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.15)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 28,
                  color: '#C9A84C',
                  marginBottom: 12,
                  direction: 'rtl',
                }}>
                  {trail.arabic}
                </p>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  color: '#F5F5F0',
                  marginBottom: 6,
                }}>
                  {trail.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  color: '#5A5A50',
                  marginBottom: 16,
                }}>
                  {trail.meta}
                </p>
                {/* Progress bar */}
                <div style={{
                  height: 2,
                  background: 'rgba(201,168,76,0.15)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${trail.progress}%`,
                    background: '#C9A84C',
                    borderRadius: 2,
                  }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* SECTION 4 — BIBLIOTECA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginBottom: 48 }}
      >
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          color: '#5A5A50',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          Explorar por Tema
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
        }}>
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/biblioteca#${topic.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: '#111111',
                  border: '1px solid #2A2A2A',
                  borderRadius: 12,
                  padding: 20,
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.3)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = '#2A2A2A'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <p style={{
                  fontSize: 24,
                  color: '#C9A84C',
                  marginBottom: 8,
                }}>
                  {topic.symbol}
                </p>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  color: '#F5F5F0',
                  marginBottom: 4,
                }}>
                  {topic.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  color: '#5A5A50',
                }}>
                  {topic.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* SECTION 5 — HADITH */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ textAlign: 'center', paddingTop: 16 }}
      >
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          color: '#5A5A50',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Hadith de Hoje
        </p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 17,
          color: '#8A8A7A',
          lineHeight: 1.8,
          marginBottom: 16,
          maxWidth: 520,
          margin: '0 auto 16px',
        }}>
          &ldquo;As ações valem pelas intenções. E cada pessoa terá exatamente o que pretendeu.&rdquo;
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          color: '#5A5A50',
        }}>
          — Profeta Muhammad ﷺ (Bukhari e Muslim)
        </p>
      </motion.section>
    </div>
  )
}
