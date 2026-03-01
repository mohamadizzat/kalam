'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { type BridgeProphet } from '@/lib/data/bridge-prophets'

interface ProphetSelectorProps {
  prophets: BridgeProphet[]
  basePath?: string
}

export function ProphetSelector({ prophets, basePath = '/a-ponte/por-profeta' }: ProphetSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {prophets.map((prophet, i) => (
        <motion.div
          key={prophet.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
        >
          <Link
            href={`${basePath}/${prophet.id}`}
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
            }}
          >
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
            <p style={{
              fontSize: 13,
              color: '#7A7870',
            }}>
              {prophet.era}
            </p>

            {/* Ref count */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginTop: 4,
            }}>
              <BookOpen size={12} style={{ color: '#B3B0A6' }} />
              <span style={{
                fontSize: 12,
                color: '#B3B0A6',
              }}>
                {prophet.bibleRefs.length + prophet.quranRefs.length} referências
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
