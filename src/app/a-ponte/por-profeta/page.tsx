'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Shuffle, BookOpen } from 'lucide-react'
import { bridgeProphets } from '@/lib/data/bridge-prophets'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

// Group eras into broader categories for filtering
function getEraCategory(era: string): string {
  const e = era.toLowerCase()
  if (e.includes('origem') || e.includes('antediluvian')) return 'Primordial'
  if (e.includes('patriarcal') || e.includes('2000') || e.includes('1900') || e.includes('1800') || e.includes('1700')) return 'Patriarcal'
  if (e.includes('1400') || e.includes('1000') || e.includes('970') || e.includes('870') || e.includes('850') || e.includes('800')) return 'Profético'
  if (e.includes('a.c') && (e.includes('4') || e.includes('5'))) return 'Evangélico'
  if (e.includes('d.c') || e.includes('570') || e.includes('632')) return 'Evangélico'
  return 'Outro'
}

const ERA_FILTERS = ['Todos', 'Primordial', 'Patriarcal', 'Profético', 'Evangélico']

export default function PorProfetaPage() {
  const [activeEra, setActiveEra] = useState('Todos')
  const router = useRouter()

  const filteredProphets = useMemo(() => {
    if (activeEra === 'Todos') return bridgeProphets
    return bridgeProphets.filter(p => getEraCategory(p.era) === activeEra)
  }, [activeEra])

  const handleRandomProphet = () => {
    const pool = filteredProphets.length > 0 ? filteredProphets : bridgeProphets
    const random = pool[Math.floor(Math.random() * pool.length)]
    router.push(`/a-ponte/por-profeta/${random.id}`)
  }

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
        <motion.div {...fadeUp} style={{ marginBottom: 24 }}>
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

        {/* Era filter chips + Random button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginBottom: 24, flexWrap: 'wrap',
          }}
        >
          {ERA_FILTERS.map((era) => (
            <button
              key={era}
              onClick={() => setActiveEra(era)}
              style={{
                padding: '6px 14px', borderRadius: 100, cursor: 'pointer',
                fontSize: 12, fontFamily: 'var(--font-sans)',
                background: activeEra === era ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.04)',
                border: `1px solid ${activeEra === era ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
                color: activeEra === era ? '#C9A84C' : '#7A7870',
                transition: 'all 0.2s ease',
              }}
            >
              {era}
            </button>
          ))}
          <motion.button
            onClick={handleRandomProphet}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', borderRadius: 100, cursor: 'pointer',
              fontSize: 12, fontFamily: 'var(--font-sans)',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: '#C9A84C', marginLeft: 'auto',
            }}
          >
            <Shuffle size={12} /> Aleatório
          </motion.button>
        </motion.div>

        {/* Prophet Grid with reference count badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredProphets.map((prophet, i) => (
              <motion.div
                key={prophet.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <Link
                  href={`/a-ponte/por-profeta/${prophet.id}`}
                  className="card-hover"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '28px 16px',
                    borderRadius: 16,
                    background: '#161220',
                    border: '1px solid #272230',
                    textDecoration: 'none',
                    gap: 8,
                    position: 'relative',
                  }}
                >
                  {/* Reference count badge */}
                  <span style={{
                    position: 'absolute', top: 10, right: 10,
                    display: 'inline-flex', alignItems: 'center', gap: 3,
                    padding: '2px 8px', borderRadius: 100,
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    fontSize: 10, color: '#C9A84C',
                  }}>
                    <BookOpen size={9} />
                    {prophet.bibleRefs.length + prophet.quranRefs.length}
                  </span>

                  {/* Arabic name */}
                  <p style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: 28,
                    color: '#C9A84C',
                    lineHeight: 1.4,
                  }}>
                    {prophet.arabicName}
                  </p>

                  {/* Portuguese name */}
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 16,
                    color: '#F0EBE2',
                    fontWeight: 500,
                  }}>
                    {prophet.name}
                  </p>

                  {/* Era */}
                  <p style={{ fontSize: 12, color: '#7A7870' }}>
                    {prophet.era}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
          {filteredProphets.length === 0 && (
            <p style={{ textAlign: 'center', fontSize: 14, color: '#7A7870', padding: 40 }}>
              Nenhum profeta encontrado nesta era
            </p>
          )}
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
