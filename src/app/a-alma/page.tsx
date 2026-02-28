'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PenLine, TrendingUp, Clock, Brain } from 'lucide-react'

const CARDS = [
  { icon: PenLine, title: 'Journal Espiritual', subtitle: 'Escreva. Reflita. Cresca.', href: '/a-alma/journal' },
  { icon: TrendingUp, title: 'Minha Jornada', subtitle: 'Streak, progresso e presenca.', href: '/a-alma/progresso' },
  { icon: Clock, title: 'Rotina Espiritual', subtitle: 'Checklists diarios. Manha e noite.', href: '/a-alma/rotina' },
  { icon: Brain, title: 'Saude Mental', subtitle: 'Sabedoria islamica para a mente e o coracao.', href: '/a-alma/saude-mental' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function AAlmaPage() {
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
            A Alma
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: '15px',
            marginTop: '8px',
          }}>
            Seu espaco mais intimo. So voce e Deus sabem o que ha aqui.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * (i + 1) }}
            >
              <Link href={card.href} className="card-hover" style={{
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
                  <card.icon size={22} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#F0EBE2',
                    marginBottom: '4px',
                  }}>
                    {card.title}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#7A7870',
                  }}>
                    {card.subtitle}
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
