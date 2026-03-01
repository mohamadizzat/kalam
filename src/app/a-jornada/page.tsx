'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Compass, Users, BookOpen, Library, Target, Heart, CalendarDays, Star, Coins, Shield, Calculator, Moon, ListChecks, GitBranch, BookText } from 'lucide-react'
import { DifficultyBadge, type DifficultyLevel } from '@/components/shared/ContentBadges'

const SECTIONS: Array<{ icon: typeof Moon; title: string; subtitle: string; href: string; level?: DifficultyLevel }> = [
  { icon: ListChecks, title: 'Plano Diario', subtitle: '3 micro-tarefas espirituais para hoje', href: '/a-jornada/plano-diario', level: 'iniciante' },
  { icon: Moon, title: 'Ramadan', subtitle: '30 dias de transformacao: misericordia, perdao e libertacao', href: '/a-jornada/ramadan', level: 'iniciante' },
  { icon: Compass, title: 'Trilhas de Estudo', subtitle: 'Jornadas guiadas de aprendizado', href: '/trilhas', level: 'iniciante' },
  { icon: Users, title: 'Os Profetas', subtitle: 'Historias que transformam', href: '/os-profetas', level: 'iniciante' },
  { icon: Star, title: 'Seerah', subtitle: 'A vida do Profeta Muhammad em 12 capitulos', href: '/a-jornada/seerah', level: 'intermediario' },
  { icon: Shield, title: 'Companheiros', subtitle: 'Os homens que mudaram o mundo ao lado do Profeta', href: '/a-jornada/companheiros', level: 'intermediario' },
  { icon: Heart, title: 'Mulheres no Islam', subtitle: 'As historias que o mundo nao conta', href: '/a-jornada/mulheres', level: 'iniciante' },
  { icon: CalendarDays, title: 'Linha do Tempo', subtitle: '14 seculos de historia islamica', href: '/a-jornada/historia', level: 'intermediario' },
  { icon: BookOpen, title: 'Estudos e Perguntas', subtitle: 'Aprofunde sua compreensao', href: '/estudos' },
  { icon: Library, title: 'Biblioteca', subtitle: 'Acervo completo de conteudos', href: '/biblioteca' },
  { icon: Coins, title: 'Financas Islamicas', subtitle: 'Riqueza com proposito: Zakat, Riba, investimento halal', href: '/a-jornada/financas', level: 'avancado' },
  { icon: Calculator, title: 'Calculadora de Zakat', subtitle: 'Calcule o valor do seu Zakat de forma simples', href: '/a-jornada/zakat', level: 'intermediario' },
  { icon: Target, title: 'Desafios de 7 Dias', subtitle: 'Transformacao pratica, uma semana de cada vez', href: '/a-jornada/desafios', level: 'iniciante' },
  { icon: GitBranch, title: 'A Ponte', subtitle: 'Biblia × Alcorao — estudo comparativo lado a lado', href: '/a-ponte', level: 'intermediario' },
  { icon: BookText, title: 'A Biblia do Kalam', subtitle: '25 capitulos entrelaçando as duas escrituras', href: '/a-biblia-do-kalam', level: 'iniciante' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function AJornadaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '32px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            A Jornada
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: '15px',
            marginTop: '8px',
          }}>
            Seu caminho de aprendizado
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * (i + 1) }}
            >
              <Link href={section.href} className="card-hover" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 20px',
                borderRadius: '16px',
                background: '#161220',
                border: '1px solid #272230',
                textDecoration: 'none',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(201,168,76,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <section.icon size={22} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#F0EBE2',
                    marginBottom: '4px',
                  }}>
                    {section.title}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#7A7870',
                  }}>
                    {section.subtitle}
                  </p>
                  {section.level && (
                    <div style={{ marginTop: '6px' }}>
                      <DifficultyBadge level={section.level} />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
