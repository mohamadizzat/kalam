'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const CARDS = [
  { arabic: 'الله', title: '99 Nomes de Deus', subtitle: 'Conheca Deus pelos Seus atributos', href: '/a-presenca/99-nomes' },
  { arabic: 'دعاء', title: 'Duas & Adhkar', subtitle: 'Suplicas para todo momento', href: '/a-presenca/duas' },
  { arabic: 'ذكر', title: 'Dhikr Digital', subtitle: 'Lembranca contemplativa de Deus', href: '/a-presenca/dhikr' },
  { arabic: 'بطاقات', title: 'Flashcards', subtitle: 'Memorize os 99 Nomes com cartoes', href: '/a-presenca/flashcards' },
  { arabic: 'صلاة', title: 'Horarios de Oracao', subtitle: 'Qibla e horarios das 5 oracoes', href: '/a-presenca/salah' },
  { arabic: 'تأمّل', title: 'Contemplacao', subtitle: 'Leitura meditativa de versiculos', href: '/a-presenca/contemplacao' },
  { arabic: 'أبجد', title: 'Alfabeto Arabe', subtitle: '28 letras — a lingua do Quran', href: '/a-presenca/arabe' },
]

export default function APresencaPage() {
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
            A Presenca
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: '15px',
            marginTop: '8px',
          }}>
            Contemplacao. Lembranca. Conexao.
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
                  <span style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '22px',
                    color: '#C9A84C',
                    direction: 'rtl',
                  }}>
                    {card.arabic}
                  </span>
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
