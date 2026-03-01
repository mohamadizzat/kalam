'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  X,
  BookOpen,
  Compass,
  Sun,
  Heart,
  Star,
  Sparkles,
  Library,
  Route,
  MessageCircle,
  Users,
  Layers,
  Wrench,
  Clock,
  PenLine,
  Calendar,
} from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'

// ── DESIGN TOKENS ────────────────────────────────────────────────────────────

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
} as const

// ── PERSONAS ─────────────────────────────────────────────────────────────────

const PERSONAS = [
  { label: 'Sou curioso sobre o Islã', href: '/a-mensagem', icon: Compass },
  { label: 'Já sou muçulmano', href: '/a-palavra', icon: BookOpen },
  { label: 'Venho da Bíblia', href: '/a-ponte', icon: Layers },
  { label: 'Quero espiritualidade', href: '/a-alma', icon: Heart },
  { label: 'Meu filho precisa aprender', href: '/kids', icon: Star },
]

// ── EXPLORE GRID ─────────────────────────────────────────────────────────────

const EXPLORE_SECTIONS = [
  {
    category: 'Descobrir',
    icon: Compass,
    items: [
      { name: 'A Mensagem', href: '/a-mensagem', count: 'Introdução' },
      { name: 'A Ponte', href: '/a-ponte', count: 'Bíblia × Alcorão' },
      { name: 'Os Profetas', href: '/os-profetas', count: '6 profetas' },
      { name: 'Biblioteca', href: '/biblioteca', count: 'Acervo' },
    ],
  },
  {
    category: 'Aprender',
    icon: BookOpen,
    items: [
      { name: 'A Palavra', href: '/a-palavra', count: '114 suratas' },
      { name: 'Trilhas', href: '/trilhas', count: 'Guiadas' },
      { name: 'Estudos', href: '/a-palavra/estudo', count: 'Aprofundamento' },
      { name: 'Hadiths', href: '/a-palavra/hadiths', count: 'Tradições' },
    ],
  },
  {
    category: 'Praticar',
    icon: Sun,
    items: [
      { name: 'Recitação', href: '/a-palavra/recitacao', count: 'Áudio' },
      { name: 'Dhikr', href: '/a-presenca/dhikr', count: 'Contador' },
      { name: 'Flashcards', href: '/a-presenca/flashcards', count: '99 Nomes' },
      { name: 'Salah', href: '/a-presenca/salah', count: 'Guia' },
    ],
  },
  {
    category: 'Refletir',
    icon: Heart,
    items: [
      { name: 'Journal', href: '/a-alma/journal', count: 'Diário' },
      { name: 'Rotina', href: '/a-alma/rotina', count: 'Hábitos' },
      { name: 'Plano Diário', href: '/a-jornada/plano-diario', count: 'Rotina' },
      { name: 'Saúde Mental', href: '/a-alma/saude-mental', count: 'Bem-estar' },
    ],
  },
]

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function ManifestoPage() {
  return (
    <div style={{ minHeight: '100vh', background: T.bg }}>
      {/* ── SEÇÃO 1: O QUE É O KALAM ────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 24px 80px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
          <BlurFade delay={0}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: T.muted,
                textDecoration: 'none',
                fontSize: 13,
                marginBottom: 48,
              }}
            >
              <ArrowLeft size={14} />
              Início
            </Link>
          </BlurFade>

          <BlurFade delay={0.1}>
            <span
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 28,
                color: T.gold,
                display: 'block',
                marginBottom: 24,
                opacity: 0.7,
              }}
            >
              كلام
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 700,
                color: T.text,
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              O Kalam é um companheiro digital
              <br />
              para quem quer se conectar com{' '}
              <span style={{ color: T.gold }}>Deus.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: T.secondary,
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              Sem intermediários. Sem simplificação. Sem medo.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginTop: 60, color: T.muted }}
            >
              <span style={{ fontSize: 13 }}>Continue lendo</span>
              <div style={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                <ArrowRight size={16} style={{ transform: 'rotate(90deg)' }} />
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </section>

      <GoldDivider />

      {/* ── SEÇÃO 2: O QUE NÃO É ────────────────────────────── */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: 640,
          margin: '0 auto',
        }}
      >
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              color: T.text,
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            O que o Kalam{' '}
            <span style={{ color: T.gold }}>não</span> é
          </h2>
        </SectionReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[
            'Não é site de conversão',
            'Não é propaganda religiosa',
            'Não tem agenda escondida',
            'Não simplifica o que é complexo',
          ].map((item, i) => (
            <SectionReveal key={item} delay={i * 0.1}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 24px',
                  borderRadius: 12,
                  border: `1px solid ${T.border}`,
                  background: T.surface,
                }}
              >
                <X size={20} style={{ color: '#E85D5D', flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 17,
                    color: T.text,
                  }}
                >
                  {item}
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.5}>
          <p
            style={{
              textAlign: 'center',
              marginTop: 36,
              fontSize: 16,
              color: T.gold,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
            }}
          >
            &ldquo;Sua jornada, suas conclusões.&rdquo;
          </p>
        </SectionReveal>
      </section>

      <GoldDivider />

      {/* ── SEÇÃO 3: POR QUE EXISTE ──────────────────────────── */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              color: T.text,
              marginBottom: 40,
            }}
          >
            Por que o Kalam <span style={{ color: T.gold }}>existe</span>
          </h2>
        </SectionReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {[
            'Porque a mensagem original merece ser acessível.',
            '1.8 bilhão de pessoas seguem esse caminho.',
            'A maioria dos brasileiros nunca ouviu o outro lado.',
            'A verdade não precisa de proteção. Precisa de acesso.',
          ].map((text, i) => (
            <SectionReveal key={i} delay={i * 0.12}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: i === 3 ? T.gold : T.secondary,
                  fontWeight: i === 3 ? 600 : 400,
                }}
              >
                {text}
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* ── SEÇÃO 4: PRA QUEM É ──────────────────────────────── */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: 640,
          margin: '0 auto',
        }}
      >
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              color: T.text,
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            Pra <span style={{ color: T.gold }}>quem</span> é
          </h2>
        </SectionReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PERSONAS.map((persona, i) => {
            const Icon = persona.icon
            return (
              <SectionReveal key={persona.href} delay={i * 0.08}>
                <Link
                  href={persona.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: `1px solid ${T.border}`,
                    background: T.surface,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = T.border
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(201,168,76,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: T.gold,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span style={{ fontSize: 15, color: T.text, flex: 1 }}>
                    {persona.label}
                  </span>
                  <ArrowRight size={16} style={{ color: T.muted }} />
                </Link>
              </SectionReveal>
            )
          })}
        </div>
      </section>

      <GoldDivider />

      {/* ── SEÇÃO 5: O QUE VAI ENCONTRAR ─────────────────────── */}
      <section
        style={{
          padding: '80px 24px',
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        <SectionReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              color: T.text,
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            O que você vai <span style={{ color: T.gold }}>encontrar</span>
          </h2>
        </SectionReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {EXPLORE_SECTIONS.map((section, si) => {
            const CatIcon = section.icon
            return (
              <SectionReveal key={section.category} delay={si * 0.1}>
                <div
                  style={{
                    border: `1px solid ${T.border}`,
                    borderRadius: 12,
                    padding: '24px 20px',
                    background: T.surface,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 16,
                      color: T.gold,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <CatIcon size={16} />
                    {section.category}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: 8,
                          textDecoration: 'none',
                          color: T.secondary,
                          fontSize: 14,
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(201,168,76,0.04)'
                          e.currentTarget.style.color = T.text
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = T.secondary
                        }}
                      >
                        <span>{item.name}</span>
                        <span style={{ fontSize: 12, color: T.muted }}>{item.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </section>

      <GoldDivider />

      {/* ── SEÇÃO 6: VERSO DE ENCERRAMENTO ───────────────────── */}
      <section
        style={{
          padding: '100px 24px 120px',
          textAlign: 'center',
          maxWidth: 560,
          margin: '0 auto',
        }}
      >
        <SectionReveal>
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 32,
              color: T.gold,
              lineHeight: 1.8,
              marginBottom: 20,
              direction: 'rtl',
            }}
          >
            ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 18,
              color: T.secondary,
              lineHeight: 1.6,
              marginBottom: 8,
              fontStyle: 'italic',
            }}
          >
            &ldquo;Lê, em nome do teu Senhor, que criou.&rdquo;
          </p>
          <p style={{ fontSize: 13, color: T.muted, marginBottom: 40 }}>
            Surata Al-Alaq (96:1) — A primeira revelação
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 10,
              background: 'rgba(201,168,76,0.10)',
              border: `1px solid rgba(201,168,76,0.3)`,
              color: T.gold,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 600,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.10)'
            }}
          >
            Começar
            <ArrowRight size={16} />
          </Link>
        </SectionReveal>
      </section>
    </div>
  )
}
