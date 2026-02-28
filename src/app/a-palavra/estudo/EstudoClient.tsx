'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { surahStudies } from '@/lib/data/surah-studies'
import { DifficultyBadge, ReadingTimeBadge } from '@/components/shared/ContentBadges'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function EstudoClient() {
  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '32px' }}
        >
          <Link
            href="/a-palavra"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#7A7870',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            <ArrowLeft size={16} />
            A Palavra
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '12px' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '32px',
              fontWeight: 700,
              color: '#F0EBE2',
              letterSpacing: '-0.02em',
            }}
          >
            Estudos Profundos
          </h1>
          <p
            style={{
              color: '#B3B0A6',
              fontSize: '15px',
              marginTop: '8px',
              lineHeight: 1.6,
            }}
          >
            Mergulhe nas suratas mais importantes do Alcorao. Cada estudo explora versiculo por versiculo, com arabe, traducao, explicacao detalhada e reflexoes.
          </p>
        </motion.div>

        {/* Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{ marginBottom: '24px' }}
        >
          <p style={{ fontSize: '13px', color: '#7A7870' }}>
            {surahStudies.length} estudos disponiveis
          </p>
        </motion.div>

        {/* Study cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {surahStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.06 }}
            >
              <Link
                href={`/a-palavra/estudo/${study.slug}`}
                style={{
                  display: 'block',
                  padding: '24px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.35)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#272230'
                }}
              >
                {/* Gold corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background:
                      'radial-gradient(circle at top right, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top row: Arabic + icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(201,168,76,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <BookOpen size={20} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#F0EBE2',
                        }}
                      >
                        {study.title}
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#7A7870',
                          marginTop: '2px',
                        }}
                      >
                        Surata {study.surahNumber} &middot; {study.sections.length} secoes
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '28px',
                      color: '#C9A84C',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {study.arabicTitle}
                  </p>
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: '14px',
                    color: '#B3B0A6',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}
                >
                  {study.subtitle}
                </p>

                {/* Meta row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <DifficultyBadge level="avancado" />
                    <ReadingTimeBadge minutes={study.sections.length * 3} />
                  </div>
                  <ArrowRight size={16} style={{ color: '#7A7870' }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '32px',
            padding: '20px 24px',
            borderRadius: '16px',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.1)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '14px', color: '#7A7870', lineHeight: 1.6 }}>
            Novos estudos sao adicionados periodicamente.{' '}
            <span style={{ color: '#C9A84C' }}>
              Cada estudo e uma jornada completa pela surata.
            </span>
          </p>
        </motion.div>

      </div>
    </main>
  )
}
