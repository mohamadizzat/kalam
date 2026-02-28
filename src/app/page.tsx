'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Flame, ArrowRight, ChevronDown, Library, Users, Layers, BookOpen } from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HOME_VERSES = [
  { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', portuguese: 'Diz: Ele é Allah, o Único.', ref: 'Al-Ikhlas 112:1' },
  { arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', portuguese: 'E quando Meus servos te perguntarem sobre Mim — Eu estou próximo.', ref: 'Al-Baqarah 2:186' },
  { arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', portuguese: 'Certamente, com a dificuldade vem a facilidade.', ref: 'Al-Inshirah 94:6' },
  { arabic: 'وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', portuguese: 'E não desespereis da misericórdia de Allah.', ref: 'Az-Zumar 39:53' },
  { arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ', portuguese: 'Lembrai-vos de Mim, e Eu Me lembrarei de vós.', ref: 'Al-Baqarah 2:152' },
  { arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', portuguese: 'E Ele está convosco onde quer que estejais.', ref: 'Al-Hadid 57:10' },
  { arabic: 'إِنَّ اللَّهَ لَا يُضَيِّعُ أَجْرَ الْمُحْسِنِينَ', portuguese: 'Allah não desperdiça a recompensa dos que fazem o bem.', ref: 'At-Tawbah 9:120' },
]

const TRAILS = [
  { name: 'Deus é Amor', meta: '5 dias', href: '/trilhas/deus-e-amor' },
  { name: 'Sem Medo', meta: '4 dias', href: '/trilhas/sem-medo' },
  { name: 'Jesus no Alcorão', meta: '4 dias', href: '/trilhas/jesus-no-alcurao' },
]

const EXPLORE = [
  { label: 'Biblioteca', icon: Library, href: '/biblioteca' },
  { label: 'Os Profetas', icon: Users, href: '/os-profetas' },
  { label: 'O Sistema', icon: Layers, href: '/o-sistema' },
  { label: 'Estudos', icon: BookOpen, href: '/estudos' },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [dateLabel, setDateLabel] = useState('')
  const [verse, setVerse] = useState(HOME_VERSES[0])

  useEffect(() => {
    const now = new Date()
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    setDateLabel(`${days[now.getDay()]} · ${now.getDate()} de ${months[now.getMonth()]}`)
    setVerse(HOME_VERSES[now.getDate() % HOME_VERSES.length])
  }, [])

  return (
    <main style={{ minHeight: '100vh', background: '#0D0B12', display: 'flex', flexDirection: 'column' }}>

      {/* ── TOP BAR ───────────────────────────────────────────────────────── */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: '22px',
            letterSpacing: '-0.02em',
            color: '#F0EBE2',
          }}
        >
          KALAM
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#C9A84C',
          }}
        >
          <Flame size={15} strokeWidth={2} />
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            Dia 1
          </span>
        </div>
      </header>

      {/* ── HERO — fullscreen verse ────────────────────────────────────────── */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
          textAlign: 'center',
          minHeight: 'calc(100svh - 72px)',
          position: 'relative',
        }}
      >
        {/* Date label */}
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#7A7870',
            marginBottom: '48px',
          }}
        >
          {dateLabel || '\u00A0'}
        </p>

        {/* Arabic */}
        <p
          className="arabic-glow arabic-pulse"
          style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: 'clamp(36px, 8vw, 68px)',
            lineHeight: 1.6,
            color: '#C9A84C',
            maxWidth: '600px',
            marginBottom: '32px',
          }}
        >
          {verse.arabic}
        </p>

        {/* Translation */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(17px, 2.5vw, 21px)',
            lineHeight: 1.8,
            color: '#F0EBE2',
            maxWidth: '560px',
            marginBottom: '12px',
          }}
        >
          &ldquo;{verse.portuguese}&rdquo;
        </p>

        {/* Surah ref */}
        <p
          style={{
            fontSize: '13px',
            color: '#7A7870',
            marginBottom: '48px',
            letterSpacing: '0.05em',
          }}
        >
          — {verse.ref}
        </p>

        {/* CTA */}
        <Link
          href="/aya-do-dia"
          className="shimmer-gold"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            borderRadius: '999px',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: '0.03em',
            textDecoration: 'none',
          }}
        >
          Ir mais fundo
          <ArrowRight size={16} />
        </Link>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: 0.3,
          }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#7A7870', textTransform: 'uppercase' }}>
            Explorar
          </span>
          <ChevronDown size={13} style={{ color: '#7A7870' }} />
        </div>
      </section>

      {/* ── BELOW FOLD ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%', padding: '64px 24px 100px' }}>

        {/* ── TRILHAS ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '18px',
              color: '#F0EBE2',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Trilhas
          </p>

          <style>{`
            .trail-scroll::-webkit-scrollbar { display: none; }
            .trail-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          <div
            className="trail-scroll"
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
          >
            {TRAILS.map((trail) => (
              <Link
                key={trail.href}
                href={trail.href}
                style={{
                  textDecoration: 'none',
                  flexShrink: 0,
                  display: 'block',
                  minWidth: '160px',
                }}
              >
                <div
                  className="card-hover"
                  style={{
                    background: '#161220',
                    border: '1px solid #272230',
                    borderRadius: '14px',
                    padding: '20px 18px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      color: '#F0EBE2',
                      marginBottom: '6px',
                      fontWeight: 600,
                    }}
                  >
                    {trail.name}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#7A7870',
                    }}
                  >
                    {trail.meta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── EXPLORE ─────────────────────────────────────────────────────── */}
        <section>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '18px',
              color: '#F0EBE2',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Explore mais
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}
          >
            {EXPLORE.map(({ label, icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card-hover"
                  style={{
                    background: '#161220',
                    border: '1px solid #272230',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <Icon size={18} style={{ color: '#C9A84C', flexShrink: 0 }} strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      color: '#F0EBE2',
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
