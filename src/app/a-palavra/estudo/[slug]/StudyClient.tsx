'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { SurahStudy } from '@/lib/data/surah-studies'

interface Props {
  study: SurahStudy
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function StudyClient({ study }: Props) {
  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '24px', borderBottom: '1px solid #272230' }}>
        <Link
          href="/a-palavra"
          style={{ color: '#7A7870', fontSize: '14px', textDecoration: 'none' }}
        >
          &larr; A Palavra
        </Link>
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                color: '#F0EBE2',
                fontWeight: 700,
              }}
            >
              {study.title}
            </h1>
            <p style={{ fontSize: '14px', color: '#7A7870', marginTop: '4px' }}>
              {study.subtitle}
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '28px',
              color: '#C9A84C',
            }}
          >
            {study.arabicTitle}
          </p>
        </div>
      </header>

      {/* Overview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        style={{ padding: '32px 24px', borderBottom: '1px solid #272230' }}
      >
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.75,
            color: '#B3B0A6',
            whiteSpace: 'pre-line',
          }}
        >
          {study.overview}
        </p>
      </motion.section>

      {/* Sections */}
      {study.sections.map((section, i) => (
        <motion.section
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ padding: '32px 24px', borderBottom: '1px solid #272230' }}
        >
          <p
            style={{
              fontSize: '12px',
              color: '#7A7870',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Secao {i + 1} &middot; Versiculos {section.verses}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              color: '#F0EBE2',
              marginBottom: '20px',
            }}
          >
            {section.title}
          </h2>

          {/* Key verse */}
          <div
            style={{
              padding: '24px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              marginBottom: '20px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '24px',
                color: '#C9A84C',
                direction: 'rtl',
                textAlign: 'right',
                lineHeight: 1.8,
                marginBottom: '12px',
              }}
            >
              {section.arabic}
            </p>
            <p
              style={{
                fontSize: '15px',
                color: '#F0EBE2',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              &ldquo;{section.translation}&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#B3B0A6',
              whiteSpace: 'pre-line',
            }}
          >
            {section.explanation}
          </p>

          {/* Key insight */}
          <div
            style={{
              marginTop: '16px',
              padding: '16px',
              borderLeft: '2px solid #C9A84C',
              background: 'rgba(201,168,76,0.05)',
            }}
          >
            <p style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 500 }}>
              {section.keyInsight}
            </p>
          </div>
        </motion.section>
      ))}
    </main>
  )
}
