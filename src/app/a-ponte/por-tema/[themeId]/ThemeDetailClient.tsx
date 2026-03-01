'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, MessageCircleQuestion } from 'lucide-react'
import { type BridgeTheme } from '@/lib/data/bridge-themes'
import { BridgeScriptureView } from '@/components/shared/BridgeScriptureView'

interface Props {
  theme: BridgeTheme
  prev: BridgeTheme | null
  next: BridgeTheme | null
}

export function ThemeDetailClient({ theme, prev, next }: Props) {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        <Link href="/a-ponte/por-tema" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: '#7A7870', textDecoration: 'none', marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> Por Tema
        </Link>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 40 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700,
            color: '#F0EBE2', letterSpacing: '-0.02em', marginBottom: 8,
          }}>
            {theme.title}
          </h1>
          <p style={{ fontSize: 16, color: '#B3B0A6', lineHeight: 1.6 }}>
            {theme.subtitle}
          </p>
        </motion.div>

        {/* ── Side-by-side ── */}
        {theme.biblePassages[0] && theme.quranPassages[0] && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ marginBottom: 40 }}
          >
            <p style={{
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#7A7870', marginBottom: 16, textAlign: 'center',
            }}>
              Lado a lado
            </p>
            <BridgeScriptureView
              bibleRef={{
                reference: theme.biblePassages[0].reference,
                text: theme.biblePassages[0].text,
                context: theme.biblePassages[0].context,
              }}
              quranRef={{
                reference: theme.quranPassages[0].reference,
                text: theme.quranPassages[0].text,
                context: theme.quranPassages[0].context,
              }}
            />
          </motion.section>
        )}

        {/* ── Na Bíblia ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 40 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 22, color: '#F0EBE2',
            marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <BookOpen size={20} style={{ color: '#C9A84C' }} />
            Na Bíblia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {theme.biblePassages.map((p, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: 12,
                background: '#161220', border: '1px solid #272230',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)', fontSize: 14,
                  fontStyle: 'italic', color: '#C9A84C', marginBottom: 12,
                }}>
                  {p.reference}
                </p>
                <p style={{ fontSize: 15, color: '#F0EBE2', lineHeight: 1.8, opacity: 0.9 }}>
                  {p.text}
                </p>
                {p.context && (
                  <p style={{
                    fontSize: 13, color: '#B3B0A6', lineHeight: 1.7,
                    marginTop: 12, paddingTop: 12, borderTop: '1px solid #272230',
                  }}>
                    {p.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── No Alcorão ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: 40 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 22, color: '#F0EBE2',
            marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <BookOpen size={20} style={{ color: '#C9A84C' }} />
            No Alcorão
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {theme.quranPassages.map((p, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: 12,
                background: '#161220', border: '1px solid #272230',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)', fontSize: 14,
                  fontStyle: 'italic', color: '#C9A84C', marginBottom: 12,
                }}>
                  {p.reference}
                </p>
                <p style={{ fontSize: 15, color: '#F0EBE2', lineHeight: 1.8, opacity: 0.9 }}>
                  {p.text}
                </p>
                {p.context && (
                  <p style={{
                    fontSize: 13, color: '#B3B0A6', lineHeight: 1.7,
                    marginTop: 12, paddingTop: 12, borderTop: '1px solid #272230',
                  }}>
                    {p.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Convergence ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ marginBottom: 24 }}
        >
          <div style={{
            padding: '24px', borderRadius: 12,
            background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 9, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#22c55e',
              background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 100, padding: '3px 10px', marginBottom: 12,
            }}>
              Convergência
            </span>
            <p style={{ fontSize: 15, color: '#F0EBE2', lineHeight: 1.8, opacity: 0.9 }}>
              {theme.convergenceNotes}
            </p>
          </div>
        </motion.section>

        {/* ── Divergence ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 32 }}
        >
          <div style={{
            padding: '24px', borderRadius: 12,
            background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.12)',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 9, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#f59e0b',
              background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 100, padding: '3px 10px', marginBottom: 12,
            }}>
              Divergência
            </span>
            <p style={{ fontSize: 15, color: '#F0EBE2', lineHeight: 1.8, opacity: 0.9 }}>
              {theme.divergenceNotes}
            </p>
          </div>
        </motion.section>

        {/* ── Discussion Question ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            padding: '24px', borderRadius: 12,
            background: '#161220', border: '1px solid rgba(201,168,76,0.15)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <MessageCircleQuestion size={18} style={{ color: '#C9A84C' }} />
              <span style={{
                fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#C9A84C', fontFamily: 'var(--font-sans)',
              }}>
                Para refletir
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 17, fontStyle: 'italic',
              color: '#F0EBE2', lineHeight: 1.7,
            }}>
              {theme.discussionQuestion}
            </p>
          </div>
        </motion.section>

        {/* ── Navigation ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, borderTop: '1px solid #272230', paddingTop: 24,
        }}>
          {prev ? (
            <Link href={`/a-ponte/por-tema/${prev.id}`} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, color: '#C9A84C', textDecoration: 'none',
            }}>
              <ArrowLeft size={14} /> {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/a-ponte/por-tema/${next.id}`} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, color: '#C9A84C', textDecoration: 'none',
            }}>
              {next.title} <ArrowRight size={14} />
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  )
}
