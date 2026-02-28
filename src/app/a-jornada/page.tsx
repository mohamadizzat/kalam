'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Compass, Users, BookOpen, Library, Target, Heart, CalendarDays, Star, Coins, Shield, Calculator } from 'lucide-react'

const SECTIONS = [
  { icon: Compass, title: 'Trilhas de Estudo', subtitle: 'Jornadas guiadas de aprendizado', href: '/trilhas' },
  { icon: Users, title: 'Os Profetas', subtitle: 'Histórias que transformam', href: '/os-profetas' },
  { icon: Star, title: 'Seerah', subtitle: 'A vida do Profeta Muhammad em 12 capítulos', href: '/a-jornada/seerah' },
  { icon: Shield, title: 'Companheiros', subtitle: 'Os homens que mudaram o mundo ao lado do Profeta', href: '/a-jornada/companheiros' },
  { icon: Heart, title: 'Mulheres no Islam', subtitle: 'As histórias que o mundo não conta', href: '/a-jornada/mulheres' },
  { icon: CalendarDays, title: 'Linha do Tempo', subtitle: '14 séculos de história islâmica', href: '/a-jornada/historia' },
  { icon: BookOpen, title: 'Estudos e Perguntas', subtitle: 'Aprofunde sua compreensão', href: '/estudos' },
  { icon: Library, title: 'Biblioteca', subtitle: 'Acervo completo de conteúdos', href: '/biblioteca' },
  { icon: Coins, title: 'Finanças Islâmicas', subtitle: 'Riqueza com propósito: Zakat, Riba, investimento halal', href: '/a-jornada/financas' },
  { icon: Calculator, title: 'Calculadora de Zakat', subtitle: 'Calcule o valor do seu Zakat de forma simples', href: '/a-jornada/zakat' },
  { icon: Target, title: 'Desafios de 7 Dias', subtitle: 'Transformação prática, uma semana de cada vez', href: '/a-jornada/desafios' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function AJornadaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Title */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: '#F0EBE2',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}>
            A Jornada
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
