'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { bridgeProphets } from '@/lib/data/bridge-prophets'
import { ProphetSelector } from '@/components/shared/ProphetSelector'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

export default function PorProfetaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link href="/a-ponte" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          color: '#7A7870',
          textDecoration: 'none',
          marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> A Ponte
        </Link>

        {/* Header */}
        <motion.div {...fadeUp} style={{ marginBottom: 32 }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 32,
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Por Profeta
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: 15,
            marginTop: 8,
            lineHeight: 1.7,
          }}>
            Compare as narrativas de cada profeta nas duas escrituras
          </p>
        </motion.div>

        {/* Prophet Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProphetSelector prophets={bridgeProphets} />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: '#7A7870',
            marginTop: 32,
          }}
        >
          Mais profetas serão adicionados em breve
        </motion.p>

      </div>
    </main>
  )
}
