'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Map,
  Compass,
  Link2,
  TrendingUp,
  BookOpen,
  Search,
  Bell,
  AlertTriangle,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react'

// ── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  bg: '#0D0B12',
  surface: '#161220',
  surfaceHover: '#1C1828',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  borderHover: 'rgba(201,168,76,0.35)',
  critical: '#E05252',
  criticalBg: 'rgba(224,82,82,0.12)',
  important: '#D4A843',
  importantBg: 'rgba(212,168,67,0.12)',
  improvement: '#5B8FD4',
  improvementBg: 'rgba(91,143,212,0.12)',
}

// ── Tipos ─────────────────────────────────────────────────────────────────────
type Severity = 'CRITICO' | 'IMPORTANTE' | 'MELHORIA'

interface AuditEntry {
  name: string
  arabic: string
  meaning: string
  iconName: 'Map' | 'Compass' | 'Link2' | 'TrendingUp' | 'BookOpen' | 'Search' | 'Bell'
  severity: Severity
  diagnosis: string
  file: string
  fix: string
}

// ── Dados dos 7 Sahabas ───────────────────────────────────────────────────────
const AUDIT_RESULTS: AuditEntry[] = [
  {
    name: 'Murshid',
    arabic: 'مرشد',
    meaning: 'O Mentor',
    iconName: 'Map',
    severity: 'CRITICO',
    diagnosis:
      'Sidebar com 5 grupos e 25+ itens cria labirinto. Usuario desiste antes de achar Lideranca Profetica ou A Biblia do Kalam.',
    file: 'src/components/layout/Sidebar.tsx',
    fix: 'Colapsar 5 grupos em 3. Criar secao DESTAQUES no topo da sidebar com os 5 conteudos mais ricos.',
  },
  {
    name: 'Muktashif',
    arabic: 'مكتشف',
    meaning: 'O Explorador',
    iconName: 'Compass',
    severity: 'CRITICO',
    diagnosis:
      'Home mostra apenas saudacao e streak. Nao apresenta o conteudo premium do app. Primeira impressao desperdicada.',
    file: 'src/components/home/DashboardHome.tsx',
    fix: 'Adicionar secao "O Melhor do Kalam" com 5 cards: Lideranca Profetica, A Biblia, Uma Trilha, Mulheres, Uma Ferramenta.',
  },
  {
    name: 'Rabit',
    arabic: 'رابط',
    meaning: 'O Elo',
    iconName: 'Link2',
    severity: 'IMPORTANTE',
    diagnosis:
      'Conteudo sobre profetas nao linka para A Ponte (conexao Biblia-Quran). Mulheres nao linka para Companheiros. Silos.',
    file: 'src/app/lideranca-profetica/[slug]/page.tsx',
    fix: 'Adicionar secao "Conectado a" no rodape de cada pagina de profeta e de Mulheres com 2-3 links relacionados.',
  },
  {
    name: 'Rafiq',
    arabic: 'رفيق',
    meaning: 'O Companheiro',
    iconName: 'TrendingUp',
    severity: 'CRITICO',
    diagnosis:
      'Bottom nav mobile: Home / Quran / Busca / Mais. "Mais" nao diz nada. Trilhas Guiadas — o conteudo de retencao mais forte — esta invisivel.',
    file: 'src/components/layout/BottomNav.tsx',
    fix: 'Substituir "Mais" por "Trilhas" com icone Route. Trilhas Guiadas e o conteudo que cria habito.',
  },
  {
    name: 'Mufakkir',
    arabic: 'مفكر',
    meaning: 'O Pensador',
    iconName: 'BookOpen',
    severity: 'IMPORTANTE',
    diagnosis:
      '/a-alma tem Journal, Humor e Habitos em sub-secoes separadas. Usuario nao ve o painel completo de reflexao de uma vez.',
    file: 'src/app/a-alma/page.tsx',
    fix: 'Unificar /a-alma em painel com tabs: Journal | Humor | Habitos. Streak de escrita visivel no topo.',
  },
  {
    name: 'Bahith',
    arabic: 'باحث',
    meaning: 'O Pesquisador',
    iconName: 'Search',
    severity: 'IMPORTANTE',
    diagnosis:
      'Search Cmd+K e funcionalidade poderosa mas completamente invisivel no mobile. 80% dos usuarios nao sabem que existe.',
    file: 'src/components/layout/Header.tsx',
    fix: 'Adicionar icone de busca sempre visivel no header mobile. Tap abre o mesmo modal de busca.',
  },
  {
    name: 'Munadi',
    arabic: 'منادي',
    meaning: 'O Chamador',
    iconName: 'Bell',
    severity: 'IMPORTANTE',
    diagnosis:
      'Dashboard home nao personaliza para o usuario. Todo mundo ve a mesma saudacao. Oportunidade perdida de mostrar progresso real.',
    file: 'src/components/home/DashboardHome.tsx',
    fix: 'Adicionar secao "Sua Jornada" com streak, % explorado e proxima recomendacao do Murshid.',
  },
]

// ── Consenso — 3 problemas priorizados ───────────────────────────────────────
const CONSENSUS = [
  {
    title: 'Sidebar como labirinto',
    votes: 5,
    sahabas: ['Murshid', 'Muktashif', 'Rafiq', 'Mufakkir', 'Munadi'],
    anchor: '#wave-a',
  },
  {
    title: 'Conteudo premium invisivel na home',
    votes: 4,
    sahabas: ['Muktashif', 'Murshid', 'Rafiq', 'Munadi'],
    anchor: '#wave-b',
  },
  {
    title: 'Bottom nav opaco no mobile',
    votes: 3,
    sahabas: ['Rafiq', 'Bahith', 'Murshid'],
    anchor: '#wave-a',
  },
]

// ── Plano de waves ────────────────────────────────────────────────────────────
const WAVES = [
  {
    id: 'wave-a',
    label: 'Wave A',
    title: 'Navegacao',
    subtitle: 'Sidebar + Bottom Nav',
    items: [
      { file: 'Sidebar.tsx', change: 'Secao DESTAQUES no topo + colapsar grupos' },
      { file: 'BottomNav.tsx', change: 'Substituir "Mais" por "Trilhas"' },
      { file: 'Header.tsx', change: 'Icone de busca visivel no mobile' },
    ],
    impact: 'Alto — todo usuario e afetado em cada sessao',
  },
  {
    id: 'wave-b',
    title: 'Descoberta',
    label: 'Wave B',
    subtitle: 'Home + Destaques',
    items: [
      { file: 'DashboardHome.tsx', change: 'Secao "O Melhor do Kalam" — 5 cards premium' },
      { file: 'DashboardHome.tsx', change: 'Secao "Sua Jornada" — streak + progresso' },
    ],
    impact: 'Medio — melhora retencao de novos usuarios',
  },
  {
    id: 'wave-c',
    title: 'Conexoes + Personalizacao',
    label: 'Wave C',
    subtitle: 'Links entre conteudos + /a-alma',
    items: [
      { file: '[slug]/page.tsx', change: 'Secao "Conectado a" em cada profeta' },
      { file: 'a-alma/page.tsx', change: 'Tabs unificadas: Journal | Humor | Habitos' },
    ],
    impact: 'Baixo-medio — melhora profundidade de exploracao',
  },
]

// ── Utilitarios de icone ───────────────────────────────────────────────────────
const ICON_MAP = {
  Map,
  Compass,
  Link2,
  TrendingUp,
  BookOpen,
  Search,
  Bell,
}

function SahabaIcon({ name, size = 20, color }: { name: AuditEntry['iconName']; size?: number; color?: string }) {
  const Icon = ICON_MAP[name]
  return <Icon size={size} color={color ?? C.gold} strokeWidth={1.5} />
}

function SeverityBadge({ severity }: { severity: Severity }) {
  const map: Record<Severity, { label: string; color: string; bg: string; Icon: typeof AlertTriangle }> = {
    CRITICO: { label: 'CRITICO', color: C.critical, bg: C.criticalBg, Icon: AlertTriangle },
    IMPORTANTE: { label: 'IMPORTANTE', color: C.important, bg: C.importantBg, Icon: AlertCircle },
    MELHORIA: { label: 'MELHORIA', color: C.improvement, bg: C.improvementBg, Icon: Info },
  }
  const { label, color, bg, Icon } = map[severity]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 10px',
        borderRadius: 3,
        background: bg,
        border: `1px solid ${color}30`,
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '2px',
        color,
      }}
    >
      <Icon size={10} strokeWidth={2.5} />
      {label}
    </span>
  )
}

// ── Card individual do Sahaba ─────────────────────────────────────────────────
function AuditCard({ entry, index }: { entry: AuditEntry; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.surface,
        border: hovered ? `1px solid ${C.borderHover}` : `1px solid ${C.border}`,
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(201,168,76,0.03)'
          : '0 4px 20px rgba(0,0,0,0.18)',
      }}
    >
      {/* Top gold line on hover */}
      <div
        style={{
          height: 1,
          background: hovered
            ? `linear-gradient(90deg, transparent, ${C.gold}55, transparent)`
            : 'transparent',
          transition: 'background 0.4s ease',
        }}
      />

      <div style={{ padding: '28px 28px 24px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
          {/* Icon + names */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 4,
                background: C.goldDim,
                border: `1px solid ${C.gold}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <SahabaIcon name={entry.iconName} size={20} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 22,
                  color: C.gold,
                  lineHeight: 1.2,
                  direction: 'rtl',
                }}
              >
                {entry.arabic}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.text,
                  lineHeight: 1.2,
                }}
              >
                {entry.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  color: C.muted,
                  letterSpacing: '1px',
                }}
              >
                {entry.meaning}
              </div>
            </div>
          </div>

          {/* Severity badge */}
          <div style={{ flexShrink: 0 }}>
            <SeverityBadge severity={entry.severity} />
          </div>
        </div>

        {/* Diagnosis */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13.5,
            color: C.secondary,
            lineHeight: 1.65,
            marginBottom: 16,
          }}
        >
          {entry.diagnosis}
        </p>

        {/* File pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${C.border}`,
            borderRadius: 3,
            fontFamily: 'monospace',
            fontSize: 11,
            color: C.muted,
            marginBottom: 16,
          }}
        >
          <ExternalLink size={10} strokeWidth={1.5} color={C.muted} />
          {entry.file}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(v => !v)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: expanded ? C.gold : 'rgba(201,168,76,0.5)',
            transition: 'color 0.2s ease',
          }}
        >
          {expanded ? <ChevronUp size={12} strokeWidth={2} /> : <ChevronDown size={12} strokeWidth={2} />}
          {expanded ? 'Ocultar correcao' : 'Ver correcao proposta'}
        </button>

        {/* Fix section */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: 14,
              padding: '14px 16px',
              background: C.goldDim,
              border: `1px solid ${C.gold}25`,
              borderRadius: 3,
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: C.secondary,
              lineHeight: 1.65,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: C.gold,
                display: 'block',
                marginBottom: 6,
              }}
            >
              Correcao proposta
            </span>
            {entry.fix}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// ── Secao de Consenso ─────────────────────────────────────────────────────────
function ConsensusSection() {
  return (
    <motion.section
      id="consenso"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 960,
        margin: '72px auto 0',
        padding: '0 20px',
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: C.gold,
          marginBottom: 12,
          textAlign: 'center',
        }}
      >
        Consenso do Conselho
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 3.5vw, 32px)',
          fontWeight: 700,
          color: C.text,
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        3 Problemas que Precisam de Solucao Imediata
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: C.muted,
          textAlign: 'center',
          marginBottom: 36,
        }}
      >
        Classificados por numero de votos do conselho
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {CONSENSUS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '18px 24px',
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 4,
            }}
          >
            {/* Rank */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: i === 0 ? C.goldDim : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 0 ? C.gold + '50' : C.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: 15,
                fontWeight: 700,
                color: i === 0 ? C.gold : C.muted,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>

            {/* Title + sahabas */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 4,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  color: C.muted,
                }}
              >
                {item.sahabas.join(' · ')}
              </p>
            </div>

            {/* Vote count */}
            <div style={{ flexShrink: 0, textAlign: 'right' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 22,
                  fontWeight: 700,
                  color: i === 0 ? C.gold : C.secondary,
                  lineHeight: 1,
                }}
              >
                {item.votes}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  color: C.muted,
                  letterSpacing: '1px',
                }}
              >
                votos
              </p>
            </div>

            {/* CTA */}
            <a
              href={item.anchor}
              style={{
                flexShrink: 0,
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              Ver plano →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Implementar agora CTA */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a
          href="#plano"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '13px 28px',
            background: C.goldDim,
            border: `1px solid ${C.gold}40`,
            borderRadius: 3,
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: C.gold,
            textDecoration: 'none',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
        >
          Implementar agora
        </a>
      </div>
    </motion.section>
  )
}

// ── Secao do Plano de Waves ───────────────────────────────────────────────────
function WavePlanSection() {
  return (
    <motion.section
      id="plano"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 960,
        margin: '72px auto 0',
        padding: '0 20px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: C.gold,
          marginBottom: 12,
          textAlign: 'center',
        }}
      >
        Plano de Execucao
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 3.5vw, 32px)',
          fontWeight: 700,
          color: C.text,
          textAlign: 'center',
          marginBottom: 36,
        }}
      >
        3 Waves de Correcao
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {WAVES.map((wave, i) => (
          <motion.div
            id={wave.id}
            key={wave.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 4,
              padding: '28px 28px 24px',
            }}
          >
            {/* Wave header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span
                style={{
                  padding: '3px 10px',
                  background: C.goldDim,
                  border: `1px solid ${C.gold}30`,
                  borderRadius: 3,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '2px',
                  color: C.gold,
                }}
              >
                {wave.label}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: C.text,
                    lineHeight: 1.2,
                  }}
                >
                  {wave.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    color: C.muted,
                  }}
                >
                  {wave.subtitle}
                </p>
              </div>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {wave.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.025)',
                    border: `1px solid ${C.border}`,
                    borderRadius: 3,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 11,
                      color: C.gold,
                      flexShrink: 0,
                    }}
                  >
                    {item.file}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12,
                      color: C.secondary,
                    }}
                  >
                    {item.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Impact */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: C.muted,
                borderTop: `1px solid ${C.border}`,
                paddingTop: 12,
              }}
            >
              <span style={{ color: C.gold, marginRight: 6 }}>Impacto:</span>
              {wave.impact}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

// ── Protocolo do Conselho — Obrigatório para toda feature ─────────────────────

const PROTOCOL_ROLES = [
  { name: 'Murshid', arabic: 'مرشد', role: 'Avalia navegação, hierarquia e findability — usuario consegue achar?', iconName: 'Map' as const },
  { name: 'Muktashif', arabic: 'مكتشف', role: 'Avalia descoberta, first impression e onboarding — usuario entende o valor?', iconName: 'Compass' as const },
  { name: 'Rabit', arabic: 'رابط', role: 'Avalia conexões entre conteúdos e arquitetura de links — silos ou rede?', iconName: 'Link2' as const },
  { name: 'Rafiq', arabic: 'رفيق', role: 'Avalia retenção, hábito e engagement mobile — usuario volta?', iconName: 'TrendingUp' as const },
  { name: 'Mufakkir', arabic: 'مفكر', role: 'Avalia profundidade, reflexão e valor do conteúdo — transforma?', iconName: 'BookOpen' as const },
  { name: 'Bahith', arabic: 'باحث', role: 'CTO · Pesquisa, viabilidade técnica e decisão final', iconName: 'Search' as const, isCTO: true },
  { name: 'Munadi', arabic: 'منادي', role: 'Avalia personalização, retorno e comunicação com o usuário — lembra?', iconName: 'Bell' as const },
]

function SahabaProtocolSection() {
  return (
    <motion.section
      id="protocolo"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: 960, margin: '72px auto 0', padding: '0 20px 0' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 14px',
          background: C.goldDim, border: `1px solid ${C.gold}30`,
          borderRadius: 3, marginBottom: 14,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: C.gold }}>
            ATIVO — desde 03/03/2026
          </span>
        </div>

        <div style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(24px, 4vw, 36px)', color: C.gold, direction: 'rtl', marginBottom: 6, textShadow: '0 0 20px rgba(201,168,76,0.15)' }}>
          مجلس القرار
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, color: C.text, marginBottom: 10 }}>
          Protocolo Obrigatório de Features
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: C.secondary, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
          A partir de agora, toda feature nova passa pelo conselho antes de ir ao ar.
          Cada Sahaba opina na sua especialidade. Bahith (CTO) decide.
        </p>
      </div>

      {/* Flow visual */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        {['Feature nova', '7 opiniões', 'CTO decide', 'Ship →'].map((step, i, arr) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              padding: '6px 14px',
              background: i === arr.length - 1 ? C.goldDim : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === arr.length - 1 ? C.gold + '50' : C.border}`,
              borderRadius: 3,
              fontFamily: 'var(--font-sans)', fontSize: 11,
              fontWeight: i === arr.length - 1 ? 700 : 400,
              color: i === arr.length - 1 ? C.gold : C.secondary,
              letterSpacing: '0.5px',
            }}>
              {step}
            </div>
            {i < arr.length - 1 && (
              <span style={{ color: C.border, fontSize: 16 }}>→</span>
            )}
          </div>
        ))}
      </div>

      {/* 7 Sahabas roles */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden' }}>
        {PROTOCOL_ROLES.map((role, i) => (
          <div
            key={role.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 24px',
              background: role.isCTO ? C.goldDim : 'transparent',
              borderBottom: i < PROTOCOL_ROLES.length - 1 ? `1px solid ${C.border}` : 'none',
              borderLeft: role.isCTO ? `3px solid ${C.gold}` : '3px solid transparent',
            }}
          >
            {/* Arabic name */}
            <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 20, color: role.isCTO ? C.gold : C.secondary, direction: 'rtl', minWidth: 60, flexShrink: 0, lineHeight: 1.3 }}>
              {role.arabic}
            </span>

            {/* Vertical divider */}
            <div style={{ width: 1, height: 32, background: C.border, flexShrink: 0 }} />

            {/* Name */}
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontWeight: 600, color: role.isCTO ? C.gold : C.text, minWidth: 84, flexShrink: 0 }}>
              {role.name}
            </span>

            {/* Role description */}
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: role.isCTO ? C.secondary : C.muted, lineHeight: 1.5, flex: 1 }}>
              {role.role}
            </span>

            {/* CTO badge */}
            {role.isCTO && (
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 700,
                letterSpacing: '2px', color: C.gold,
                background: 'rgba(201,168,76,0.15)',
                padding: '3px 8px', borderRadius: 3,
                flexShrink: 0, border: `1px solid ${C.gold}35`,
              }}>
                CTO
              </span>
            )}
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: C.muted, textAlign: 'center', marginTop: 16, lineHeight: 1.6 }}>
        Protocolo aplicado em toda sessão de desenvolvimento. Opiniões documentadas antes de qualquer código.
      </p>
    </motion.section>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────
export function DevKalamClient() {
  const criticalCount = AUDIT_RESULTS.filter(e => e.severity === 'CRITICO').length
  const importantCount = AUDIT_RESULTS.filter(e => e.severity === 'IMPORTANTE').length

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        paddingBottom: 120,
      }}
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 80px) 20px 0',
          textAlign: 'center',
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: 12,
          }}
        >
          Painel Interno — Auditoria de UX
        </motion.p>

        {/* Arabic title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: C.gold,
            direction: 'rtl',
            marginBottom: 8,
            textShadow: '0 0 30px rgba(201,168,76,0.2)',
          }}
        >
          مجلس الصحابة
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 46px)',
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Conselho dos Sahabas
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: C.secondary,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 24px',
          }}
        >
          Reunimos os 7 companheiros para auditar o Kalam. Estes sao os veredictos.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Sahabas', value: 7 },
            { label: 'Criticos', value: criticalCount, color: C.critical },
            { label: 'Importantes', value: importantCount, color: C.important },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 28,
                  fontWeight: 700,
                  color: stat.color ?? C.gold,
                  lineHeight: 1,
                  marginBottom: 2,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: C.muted,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            width: 60,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            margin: '28px auto 0',
            transformOrigin: 'center',
          }}
        />
      </motion.div>

      {/* ── 7 Audit Cards ────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 960,
          margin: '56px auto 0',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
          gap: 20,
        }}
      >
        {AUDIT_RESULTS.map((entry, i) => (
          <AuditCard key={entry.name} entry={entry} index={i} />
        ))}
      </div>

      {/* ── Consenso ─────────────────────────────────────────────────────── */}
      <ConsensusSection />

      {/* ── Plano ────────────────────────────────────────────────────────── */}
      <WavePlanSection />

      {/* ── Protocolo do Conselho ─────────────────────────────────────────── */}
      <SahabaProtocolSection />
    </div>
  )
}
