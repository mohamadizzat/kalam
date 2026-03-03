'use client'

import { motion } from 'framer-motion'
import { CommunityGate } from '@/components/shared/CommunityGate'
import { useCommunity } from '@/lib/hooks/useCommunity'
import { BookOpen, Play, Route, Users, Sparkles, Lock } from 'lucide-react'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.10)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

// ── Módulos da Academy ────────────────────────────────────────────────────────
const MODULES = [
  {
    icon: Play,
    label: 'Em breve',
    title: 'Histórias com Kling',
    description: 'Cenas cinematográficas dos desertos da Arabia. A história de Ibrahim, Musa e Yusuf em vídeo imersivo.',
    tag: 'VÍDEO',
    tagColor: '#5B8FD4',
    locked: true,
  },
  {
    icon: Route,
    label: 'Disponível',
    title: 'Trilhas Guiadas',
    description: '6 trilhas temáticas de aprendizado progressivo. De 0 ao Alcorão em semanas, não anos.',
    tag: 'TRILHAS',
    tagColor: T.gold,
    locked: false,
    href: '/trilhas',
  },
  {
    icon: BookOpen,
    label: 'Disponível',
    title: 'Liderança Profética',
    description: 'Os maiores líderes da história ensinando estratégia, resiliência e coragem.',
    tag: 'LEITURA',
    tagColor: '#50C878',
    locked: false,
    href: '/lideranca-profetica',
  },
  {
    icon: Sparkles,
    label: 'Disponível',
    title: 'A Bíblia do Kalam',
    description: 'A conexão completa entre Torá, Bíblia e Alcorão — o capítulo final que falta.',
    tag: 'PROFUNDO',
    tagColor: '#9B8EC4',
    locked: false,
    href: '/a-biblia-do-kalam',
  },
  {
    icon: Users,
    label: 'Disponível',
    title: 'Mulheres no Quran',
    description: 'Maryam, Asiyah, Khadijah — mulheres que mudaram o mundo e que você nunca conheceu.',
    tag: 'HISTÓRIAS',
    tagColor: '#E07A5F',
    locked: false,
    href: '/a-jornada/mulheres',
  },
]

// ── Conteúdo interno ──────────────────────────────────────────────────────────
function AcademyContent() {
  const { member, isPro, questionsLeft } = useCommunity()

  return (
    <div style={{ minHeight: '100vh', background: T.bg, paddingBottom: 120 }}>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(48px, 8vw, 80px) 20px 0', textAlign: 'center' }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.gold, marginBottom: 12 }}
        >
          Kalam Community
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(28px, 5vw, 44px)', color: T.gold, direction: 'rtl', marginBottom: 8, textShadow: '0 0 30px rgba(201,168,76,0.15)' }}
        >
          أكاديمية كلام
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 700, color: T.text, lineHeight: 1.15, marginBottom: 16 }}
        >
          Kalam Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(14px, 2vw, 16px)', color: T.secondary, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 12px' }}
        >
          Aprendizado imersivo. Histórias reais. Experiências que transformam.
          Tudo gratuito para membros da Kalam Community.
        </motion.p>

        {/* Status do membro */}
        {member && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 20,
              background: T.goldDim,
              border: `1px solid ${T.gold}30`,
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: T.gold,
              marginTop: 8,
            }}
          >
            <Users size={12} strokeWidth={2} />
            Membro · {member.email}
            {isPro && <span style={{ marginLeft: 4, color: T.gold, fontWeight: 700 }}>· PRO</span>}
            {isPro && <span style={{ color: T.muted }}>· {questionsLeft}/5 perguntas</span>}
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ width: 60, height: 2, background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`, margin: '28px auto 0', transformOrigin: 'center' }}
        />
      </motion.div>

      {/* ── Módulos ──────────────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 960,
        margin: '56px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
        gap: 20,
      }}>
        {MODULES.map((mod, i) => {
          const Icon = mod.icon
          return (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 4,
                padding: '28px 28px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent */}
              <div style={{ height: 2, background: `linear-gradient(90deg, ${mod.tagColor}60, transparent)`, position: 'absolute', top: 0, left: 0, right: 0 }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 4,
                  background: `${mod.tagColor}15`,
                  border: `1px solid ${mod.tagColor}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color={mod.tagColor} strokeWidth={1.5} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 3,
                    background: `${mod.tagColor}15`,
                    border: `1px solid ${mod.tagColor}30`,
                    fontFamily: 'var(--font-sans)', fontSize: 10,
                    fontWeight: 600, letterSpacing: '2px', color: mod.tagColor,
                  }}>
                    {mod.tag}
                  </span>
                  {mod.locked && <Lock size={14} color={T.muted} strokeWidth={1.5} />}
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: T.text, marginBottom: 8, lineHeight: 1.2 }}>
                {mod.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: T.secondary, lineHeight: 1.65, marginBottom: 20 }}>
                {mod.description}
              </p>

              {mod.locked ? (
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: T.muted }}>
                  Em breve →
                </span>
              ) : (
                <a
                  href={mod.href}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: 11,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: `${mod.tagColor}CC`, textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Acessar →
                </a>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* ── Perguntar aos Sahabas — CTA PRO ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 960, margin: '56px auto 0', padding: '0 20px' }}
      >
        <div style={{
          background: T.surface,
          border: `1px solid ${T.gold}30`,
          borderRadius: 4,
          padding: '36px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 24, color: T.gold, direction: 'rtl', marginBottom: 4 }}>
              أسأل الصحابة
            </p>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: T.text, marginBottom: 8 }}>
              Perguntar aos Sahabas
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: T.secondary, lineHeight: 1.65, maxWidth: 480 }}>
              Faça até 5 perguntas por mês para qualquer um dos 7 companheiros.
              Respostas profundas baseadas no Alcorão e nos ensinamentos proféticos.
            </p>
          </div>

          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: T.gold, lineHeight: 1, marginBottom: 4 }}>
              R$49,90
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.muted, marginBottom: 16 }}>
              por mês · 5 perguntas
            </p>
            <a
              href="/meus-sahabas"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                borderRadius: 8,
                background: T.gold,
                color: T.bg,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Ver Sahabas →
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

// ── Export: gateado por Community ─────────────────────────────────────────────
export function AcademyClient() {
  return (
    <CommunityGate prompt="A Kalam Academy é exclusiva para membros da Kalam Community. Gratuito — só precisa do seu email.">
      <AcademyContent />
    </CommunityGate>
  )
}
