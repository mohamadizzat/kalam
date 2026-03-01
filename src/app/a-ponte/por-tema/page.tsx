'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { bridgeThemes } from '@/lib/data/bridge-themes'
import { ThemeSelector } from '@/components/shared/ThemeSelector'

export default function PorTemaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        <Link href="/a-ponte" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: '#7A7870', textDecoration: 'none', marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> A Ponte
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 32 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700,
            color: '#F0EBE2', letterSpacing: '-0.02em',
          }}>
            Por Tema
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: 15, marginTop: 8, lineHeight: 1.7 }}>
            Explore temas teológicos comparados entre as duas escrituras
          </p>
        </motion.div>

        <ThemeSelector themes={bridgeThemes} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', fontSize: 13, color: '#7A7870', marginTop: 32 }}
        >
          Mais temas serão adicionados em breve
        </motion.p>

      </div>
    </main>
  )
}
