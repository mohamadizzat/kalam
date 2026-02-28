'use client'

import Link from 'next/link'
import { PenLine, TrendingUp, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AAlmaPage() {
  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }} className="px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
          }}
        >
          A Alma
        </h1>
        <p style={{ color: '#B3B0A6', fontSize: '15px', marginTop: '8px' }}>
          Seu espaco mais intimo. So voce e Deus sabem o que ha aqui.
        </p>
      </motion.div>

      <div className="grid gap-4 mt-10">
        <Link
          href="/a-alma/journal"
          className="card-hover"
          style={{
            padding: '32px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <PenLine size={28} style={{ color: '#C9A84C', marginBottom: '16px' }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#F0EBE2' }}>
            Journal Espiritual
          </p>
          <p style={{ fontSize: '14px', color: '#7A7870', marginTop: '4px' }}>
            Escreva. Reflita. Cresca.
          </p>
        </Link>

        <Link
          href="/a-alma/progresso"
          className="card-hover"
          style={{
            padding: '32px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <TrendingUp size={28} style={{ color: '#C9A84C', marginBottom: '16px' }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#F0EBE2' }}>
            Minha Jornada
          </p>
          <p style={{ fontSize: '14px', color: '#7A7870', marginTop: '4px' }}>
            Streak, progresso e presenca.
          </p>
        </Link>

        <Link
          href="/a-alma/rotina"
          className="card-hover"
          style={{
            padding: '32px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <Clock size={28} style={{ color: '#C9A84C', marginBottom: '16px' }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#F0EBE2' }}>
            Rotina Espiritual
          </p>
          <p style={{ fontSize: '14px', color: '#7A7870', marginTop: '4px' }}>
            Checklists diarios. Manha e noite.
          </p>
        </Link>
      </div>
    </main>
  )
}
