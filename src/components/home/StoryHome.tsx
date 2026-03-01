'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Sun,
  Compass,
  Heart,
  Star,
  Share2,
  ChevronLeft,
  ChevronRight,
  Wrench,
  MessageCircleQuestion,
  Users,
  Sparkles,
  Library,
  Route,
  BookText,
  GitBranch,
  Calendar,
} from 'lucide-react'
import { surpriseFactsData } from '@/content/surpriseFacts'
import { hardQuestionsData } from '@/content/hardQuestions'
import { recognitionStoriesData } from '@/content/recognitionStories'
import { SANCTUARY_VERSES } from '@/lib/data/daily-content'

// ── TYPES ────────────────────────────────────────────────────────────────────

interface StoryHomeProps {
  onNavigate: () => void
}

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

// ── GOLD PARTICLES (subtle ambient) ─────────────────────────────────────────

function GoldParticles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15 + (i % 3) * 0.08, 0.08, 0],
            scale: [0, 1, 1.3, 0],
            y: [0, -40, -80, -120],
          }}
          transition={{ duration: 6 + i * 1.2, delay: i * 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${15 + i * 18}%`,
            top: `${30 + (i % 3) * 15}%`,
            width: 3 + (i % 2),
            height: 3 + (i % 2),
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)`,
            boxShadow: `0 0 ${8 + i * 2}px rgba(201,168,76,0.15)`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}

// ── CURATED FACTS FOR CAROUSEL ──────────────────────────────────────────────

const CAROUSEL_FACTS = [
  surpriseFactsData.find(f => f.id === 'sf01')!, // Jesus 25x no Alcorão
  surpriseFactsData.find(f => f.id === 'sf06')!, // Maria único nome feminino
  surpriseFactsData.find(f => f.id === 'sf10')!, // 10M hafiz
  surpriseFactsData.find(f => f.id === 'sf20')!, // Marrocos + EUA
  surpriseFactsData.find(f => f.id === 'sf21')!, // Albaneses salvaram judeus
  surpriseFactsData.find(f => f.id === 'sf14')!, // Álgebra
  surpriseFactsData.find(f => f.id === 'sf18')!, // Islam no Brasil (Malês)
  surpriseFactsData.find(f => f.id === 'sf26')!, // Zakat obrigatório
].filter(Boolean)

// ── PERSONA OPTIONS ─────────────────────────────────────────────────────────

const PERSONAS = [
  { id: 'curious', label: 'Sou curioso sobre o Islã', href: '/a-mensagem', icon: Compass, desc: 'Descubra a mensagem original' },
  { id: 'muslim', label: 'Já sou muçulmano', href: '/a-palavra', icon: BookOpen, desc: 'Aprofunde na Palavra' },
  { id: 'bible', label: 'Venho da Bíblia', href: '/a-ponte', icon: GitBranch, desc: 'Bíblia x Alcorão lado a lado' },
  { id: 'spiritual', label: 'Quero espiritualidade', href: '/a-alma', icon: Heart, desc: 'Reflexão sem rótulo' },
  { id: 'kids', label: 'Meu filho precisa aprender', href: '/kids', icon: Star, desc: 'Conteúdo para crianças' },
] as const

// ── EXPLORE GRID DATA ───────────────────────────────────────────────────────

const EXPLORE_SECTIONS = [
  {
    category: 'Descobrir',
    icon: Compass,
    items: [
      { label: 'A Mensagem', href: '/a-mensagem', count: 'Fundamentos' },
      { label: 'A Ponte', href: '/a-ponte', count: 'Bíblia × Quran' },
      { label: 'Os Profetas', href: '/os-profetas', count: '17 profetas' },
      { label: 'Comprovações', href: '/comprovacoes', count: '30 paralelos' },
      { label: 'Perguntas Difíceis', href: '/perguntas', count: '10 respostas' },
      { label: 'O Sistema', href: '/o-sistema', count: '5 pilares' },
      { label: 'Biblioteca', href: '/biblioteca', count: 'Acervo completo' },
    ],
  },
  {
    category: 'Aprender',
    icon: BookOpen,
    items: [
      { label: 'A Palavra', href: '/a-palavra', count: '114 suratas' },
      { label: 'Trilhas', href: '/trilhas', count: '12 trilhas' },
      { label: 'A Bíblia do Kalam', href: '/a-biblia-do-kalam', count: '25 capítulos' },
      { label: 'Estudos', href: '/a-palavra/estudo', count: 'Aprofundamento' },
    ],
  },
  {
    category: 'Praticar',
    icon: Sun,
    items: [
      { label: 'A Presença', href: '/a-presenca', count: '99 Nomes' },
      { label: 'Aya do Dia', href: '/aya-do-dia', count: 'Diário' },
      { label: 'Recitação', href: '/a-palavra/recitacao', count: 'Com áudio' },
      { label: 'Flashcards', href: '/a-presenca/flashcards', count: '99 Nomes' },
      { label: 'Dhikr', href: '/a-presenca/dhikr', count: 'Contador' },
    ],
  },
  {
    category: 'Refletir',
    icon: Heart,
    items: [
      { label: 'A Alma', href: '/a-alma', count: 'Seu espaço' },
      { label: 'Journal', href: '/a-alma/journal', count: 'Diário pessoal' },
      { label: 'Rotina', href: '/a-alma/rotina', count: 'Plano diário' },
    ],
  },
] as const

// ── CURATED HARD QUESTIONS ──────────────────────────────────────────────────

const FEATURED_QUESTIONS = [
  hardQuestionsData.find(q => q.id === 'jihad-violence')!,
  hardQuestionsData.find(q => q.id === 'beating-wives')!,
  hardQuestionsData.find(q => q.id === 'aisha-age')!,
].filter(Boolean)

// ── CURATED RECOGNITION STORIES ─────────────────────────────────────────────

const FEATURED_STORIES = [
  recognitionStoriesData.find(s => s.id === 'rs01')!, // Cat Stevens
  recognitionStoriesData.find(s => s.id === 'rs02')!, // Muhammad Ali
].filter(Boolean)

// ── FADE VARIANT ─────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

// ── COMPONENT ────────────────────────────────────────────────────────────────

export function StoryHome({ onNavigate }: StoryHomeProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')
  const [verseIndex, setVerseIndex] = useState(0)
  const carouselRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const day = new Date().getDate()
    setVerseIndex((day - 1) % SANCTUARY_VERSES.length)
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]

  // Auto-advance carousel
  useEffect(() => {
    carouselRef.current = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % CAROUSEL_FACTS.length)
    }, 5000)
    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current)
    }
  }, [])

  const goToFact = (dir: 'prev' | 'next') => {
    if (carouselRef.current) clearInterval(carouselRef.current)
    setCarouselIndex(prev =>
      dir === 'next'
        ? (prev + 1) % CAROUSEL_FACTS.length
        : (prev - 1 + CAROUSEL_FACTS.length) % CAROUSEL_FACTS.length
    )
  }

  const handlePersonaClick = (personaId: string) => {
    try {
      localStorage.setItem('kalam-persona', personaId)
    } catch {}
    onNavigate()
  }

  const handleShare = useCallback(async () => {
    const text = `"${verse.translation}"\n\n${verse.arabic}\n\n— ${verse.surahRef}\n\nKALAM — Deus. Todo dia.`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'KALAM — Verso do Dia', text })
        return
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(text)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2000)
    } catch {}
  }, [verse])

  return (
    <main style={{ background: T.bg, minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO: Pergunta provocativa em PT-BR (SEM árabe grande)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px 48px',
          position: 'relative',
        }}
      >
        <GoldParticles />

        {/* Provocative question — PT-BR first, no Arabic */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5.5vw, 48px)',
            color: T.text,
            lineHeight: 1.3,
            maxWidth: 640,
            marginBottom: 20,
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          E se a mensagem que mudou{' '}
          <span style={{ color: T.gold }}>1.8 bilhão</span> de vidas...
          <br />
          nunca tivesse chegado até você?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: T.secondary,
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 8,
            zIndex: 1,
          }}
        >
          O Kalam é seu companheiro para descobrir.
          <br />
          Sem pressão. Sem compromisso. No seu ritmo.
        </motion.p>

        {/* Small Arabic + brand mark — subtle, NOT dominant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 16,
            marginBottom: 32,
            zIndex: 1,
          }}
        >
          <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 20, color: T.gold, opacity: 0.7 }}>
            كلام
          </span>
          <span style={{ fontSize: 11, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            KALAM
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ zIndex: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} style={{ color: T.muted }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — FATOS QUE SURPREENDEM (Carousel)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Fatos que surpreendem
        </p>

        <div
          style={{
            maxWidth: 600,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Fact card */}
          <div
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 20,
              padding: '32px 28px',
              minHeight: 160,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <p style={{ fontSize: 24, marginBottom: 12 }}>
                  {CAROUSEL_FACTS[carouselIndex].reaction}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(16px, 2.5vw, 19px)',
                    color: T.text,
                    lineHeight: 1.6,
                    marginBottom: 12,
                    fontWeight: 500,
                  }}
                >
                  {CAROUSEL_FACTS[carouselIndex].hook}
                </p>
                <p style={{ fontSize: 12, color: T.muted }}>
                  {CAROUSEL_FACTS[carouselIndex].source}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              marginTop: 16,
            }}
          >
            <button
              onClick={() => goToFact('prev')}
              aria-label="Fato anterior"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: `1px solid ${T.border}`,
                borderRadius: 999,
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: T.muted,
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 6 }}>
              {CAROUSEL_FACTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (carouselRef.current) clearInterval(carouselRef.current)
                    setCarouselIndex(i)
                  }}
                  aria-label={`Fato ${i + 1}`}
                  style={{
                    width: i === carouselIndex ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === carouselIndex ? T.gold : 'rgba(201,168,76,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => goToFact('next')}
              aria-label="Próximo fato"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: `1px solid ${T.border}`,
                borderRadius: 999,
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: T.muted,
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — O QUE É O KALAM (3 cards com preview real)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: T.text,
            textAlign: 'center',
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          O que você vai encontrar aqui
        </p>
        <p
          style={{
            fontSize: 14,
            color: T.muted,
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Estude no seu ritmo. Suas conclusões.
        </p>

        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
          }}
        >
          {/* Card 1: Acervo */}
          <div
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              padding: '24px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Library size={18} style={{ color: T.gold }} />
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                Um acervo
              </p>
            </div>
            <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.6, marginBottom: 12 }}>
              114 suratas do Alcorão com tradução, 25 profetas, hadiths, trilhas guiadas e a Bíblia do Kalam.
            </p>
            <p style={{ fontSize: 12, color: T.muted }}>
              Conteúdo para meses de estudo
            </p>
          </div>

          {/* Card 2: Ferramentas */}
          <div
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              padding: '24px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wrench size={18} style={{ color: T.gold }} />
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                Ferramentas
              </p>
            </div>
            <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.6, marginBottom: 12 }}>
              Recitação com áudio, flashcards dos 99 Nomes, dhikr com contador, journal espiritual e quiz.
            </p>
            <p style={{ fontSize: 12, color: T.muted }}>
              Prática interativa, não só leitura
            </p>
          </div>

          {/* Card 3: Ponte */}
          <div
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              padding: '24px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GitBranch size={18} style={{ color: T.gold }} />
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: T.text, fontWeight: 500 }}>
                Uma ponte
              </p>
            </div>
            <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.6, marginBottom: 12 }}>
              Bíblia e Alcorão lado a lado. 17 profetas em comum. Sem conflito, com respeito.
            </p>
            <p style={{ fontSize: 12, color: T.muted }}>
              A ponte, não o muro
            </p>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — POR ONDE COMEÇAR (Persona selector)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: T.text,
            textAlign: 'center',
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          Por onde começar?
        </p>
        <p
          style={{
            fontSize: 14,
            color: T.muted,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Escolha o caminho que faz sentido pra você
        </p>

        <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={persona.href}
                onClick={() => handlePersonaClick(persona.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '18px 20px',
                  borderRadius: 14,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(201,168,76,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <persona.icon size={20} style={{ color: T.gold }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 15, color: T.text, fontWeight: 500 }}>{persona.label}</p>
                  <p style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>{persona.desc}</p>
                </div>
                <ArrowRight size={16} style={{ color: T.gold, flexShrink: 0 }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — PERGUNTAS DIFÍCEIS (Preview)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 20,
            padding: '32px 24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <MessageCircleQuestion size={20} style={{ color: T.gold }} />
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                color: T.text,
                fontWeight: 600,
              }}
            >
              O Kalam não foge das perguntas difíceis.
            </p>
          </div>
          <p style={{ fontSize: 14, color: T.muted, marginBottom: 24, lineHeight: 1.6 }}>
            Respostas honestas para as questões que realmente importam.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURED_QUESTIONS.map((q) => (
              <div
                key={q.id}
                style={{
                  padding: '16px 18px',
                  borderRadius: 12,
                  background: 'rgba(201,168,76,0.04)',
                  border: `1px solid rgba(201,168,76,0.1)`,
                }}
              >
                <p style={{ fontSize: 14, color: T.text, fontWeight: 500, marginBottom: 6 }}>
                  {q.question}
                </p>
                <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.6 }}>
                  {q.directAnswer.slice(0, 120)}...
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/perguntas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 20,
              fontSize: 14,
              color: T.gold,
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Ver todas as perguntas <ArrowRight size={15} />
          </Link>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — EXPLORAR (Grid organizado por INTENÇÃO)
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: T.text,
            textAlign: 'center',
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          Tudo que existe no Kalam
        </p>
        <p
          style={{
            fontSize: 14,
            color: T.muted,
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          60+ páginas de conteúdo. Organizado por intenção.
        </p>

        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {EXPLORE_SECTIONS.map((section) => (
            <div
              key={section.category}
              style={{
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16,
                padding: '20px 18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <section.icon size={16} style={{ color: T.gold }} />
                <p style={{ fontSize: 12, letterSpacing: '0.1em', color: T.gold, textTransform: 'uppercase', fontWeight: 600 }}>
                  {section.category}
                </p>
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
                      padding: '10px 12px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.06)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <span style={{ fontSize: 14, color: T.text }}>{item.label}</span>
                    <span style={{ fontSize: 11, color: T.muted }}>{item.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — HISTÓRIAS DE RECONHECIMENTO
      ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        style={{ padding: '0 24px 64px' }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: T.muted,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Histórias de reconhecimento
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 15,
            color: T.secondary,
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Não foi conversão. Foi reconhecimento.
        </p>

        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.id}
              style={{
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16,
                padding: '24px 22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(201,168,76,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Users size={20} style={{ color: T.gold }} />
                </div>
                <div>
                  <p style={{ fontSize: 16, color: T.text, fontWeight: 500 }}>
                    {story.knownAs || story.name}
                  </p>
                  <p style={{ fontSize: 12, color: T.muted }}>{story.era}</p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 15,
                  color: T.secondary,
                  lineHeight: 1.7,
                  marginBottom: 12,
                  paddingLeft: 16,
                  borderLeft: `2px solid rgba(201,168,76,0.3)`,
                }}
              >
                &ldquo;{story.quote}&rdquo;
              </p>

              <p style={{ fontSize: 12, color: T.muted }}>
                {story.quoteSource}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8 — FOOTER / MANIFESTO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '48px 24px 80px',
          borderTop: `1px solid ${T.border}`,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          maxWidth: 560,
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 2.5vw, 19px)',
            color: T.text,
            lineHeight: 1.8,
          }}
        >
          O Kalam nasceu porque a mensagem original merece ser acessível.
          <br />
          Sem intermediários. Sem simplificação. Sem medo.
        </p>

        {/* Verse of the day — compact, contextual */}
        <div
          style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            padding: '20px 24px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 10, letterSpacing: '0.15em', color: T.muted, textTransform: 'uppercase', marginBottom: 12 }}>
            Versículo do dia
          </p>
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              direction: 'rtl',
              fontSize: 'clamp(22px, 4vw, 32px)',
              lineHeight: 1.7,
              color: T.gold,
              marginBottom: 10,
            }}
          >
            {verse.arabic}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: 1.7,
              color: T.text,
              marginBottom: 8,
            }}
          >
            &ldquo;{verse.translation}&rdquo;
          </p>
          <p style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>
            &mdash; {verse.surahRef}
          </p>
          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 999,
              border: `1px solid rgba(201,168,76,0.15)`,
              background: 'rgba(201,168,76,0.06)',
              color: shareState === 'copied' ? T.gold : T.muted,
              fontSize: 12,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <Share2 size={13} />
            {shareState === 'copied' ? 'Copiado!' : 'Compartilhar'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
          <Link href="/sobre" style={{ fontSize: 13, color: T.muted, textDecoration: 'none' }}>
            Sobre
          </Link>
          <Link href="/mapa" style={{ fontSize: 13, color: T.muted, textDecoration: 'none' }}>
            Mapa
          </Link>
          <Link href="/configuracoes" style={{ fontSize: 13, color: T.muted, textDecoration: 'none' }}>
            Configurações
          </Link>
        </div>
      </section>
    </main>
  )
}
