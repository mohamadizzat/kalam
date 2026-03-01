'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, BookText, CheckCircle, AlertCircle, Copy, Check, Share2 } from 'lucide-react'
import { type BridgeProphet } from '@/lib/data/bridge-prophets'
import { BridgeScriptureView } from '@/components/shared/BridgeScriptureView'

const bibliaMap: Record<string, string> = {
  'adam': 'adam',
  'nuh': 'noe',
  'ibrahim': 'abraao',
  'yusuf': 'jose',
  'musa': 'moises-1',
  'dawud': 'davi',
  'sulayman': 'salomao',
  'yunus': 'jonas',
  'ayyub': 'jo',
  'zakariya': 'zacarias',
  'yahya': 'joao-batista',
  'isa': 'jesus-1',
  'muhammad': 'muhammad-1',
}

interface Props {
  prophet: BridgeProphet
  prev: BridgeProphet | null
  next: BridgeProphet | null
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

const PROPHET_PILLS = [
  { id: 'prophet-biblia', label: 'Bíblia' },
  { id: 'prophet-alcorao', label: 'Alcorão' },
  { id: 'prophet-convergencias', label: 'Convergências' },
  { id: 'prophet-divergencias', label: 'Divergências' },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }, [text])

  return (
    <button
      onClick={handleCopy}
      title={`Copiar ${label}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '4px 10px', borderRadius: 6, cursor: 'pointer',
        background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(201,168,76,0.06)',
        border: `1px solid ${copied ? 'rgba(34,197,94,0.25)' : 'rgba(201,168,76,0.12)'}`,
        color: copied ? '#22c55e' : '#7A7870',
        fontSize: 11, fontFamily: 'var(--font-sans)',
        transition: 'all 0.2s ease',
      }}
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
      {copied ? 'Copiado!' : 'Copiar'}
    </button>
  )
}

export function ProphetDetailClient({ prophet, prev, next }: Props) {
  const [showPills, setShowPills] = useState(false)
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')

  useEffect(() => {
    const onScroll = () => setShowPills(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = `${prophet.name} (${prophet.arabicName}) — Estudo comparativo entre Bíblia e Alcorão\n${url}`
    try {
      if (navigator.share) {
        await navigator.share({ title: prophet.name, text, url })
      } else {
        await navigator.clipboard.writeText(text)
        setShareState('copied')
        setTimeout(() => setShareState('idle'), 2500)
      }
    } catch {}
  }
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      {/* Floating sticky nav pills */}
      <motion.div
        initial={false}
        animate={{ opacity: showPills ? 1 : 0, y: showPills ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed', top: 10, left: '50%', transform: 'translateX(-50%)',
          zIndex: 99, display: 'flex', gap: 6,
          padding: '6px 10px', borderRadius: 100,
          background: 'rgba(22,18,32,0.95)',
          border: '1px solid #272230',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          pointerEvents: showPills ? 'auto' : 'none',
        }}
      >
        {PROPHET_PILLS.map((pill) => (
          <button
            key={pill.id}
            onClick={() => scrollToSection(pill.id)}
            style={{
              padding: '5px 12px', borderRadius: 100, cursor: 'pointer',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              color: '#C9A84C', fontSize: 11, fontFamily: 'var(--font-sans)',
              whiteSpace: 'nowrap',
            }}
          >
            {pill.label}
          </button>
        ))}
      </motion.div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <Link href="/a-ponte/por-profeta" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          color: '#7A7870',
          textDecoration: 'none',
          marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> Por Profeta
        </Link>

        {/* ── Hero ── */}
        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(48px, 12vw, 72px)',
            color: '#C9A84C',
            lineHeight: 1.4,
            marginBottom: 12,
          }}>
            {prophet.arabicName}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 32,
            fontWeight: 700,
            color: '#F0EBE2',
            marginBottom: 8,
          }}>
            {prophet.name}
          </h1>
          <p style={{ fontSize: 14, color: '#7A7870', marginBottom: 16 }}>
            {prophet.era}
          </p>
          {/* Share button */}
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 100, cursor: 'pointer',
              background: shareState === 'copied' ? 'rgba(34,197,94,0.1)' : 'rgba(201,168,76,0.08)',
              border: `1px solid ${shareState === 'copied' ? 'rgba(34,197,94,0.25)' : 'rgba(201,168,76,0.2)'}`,
              color: shareState === 'copied' ? '#22c55e' : '#C9A84C',
              fontSize: 12, fontFamily: 'var(--font-sans)',
              transition: 'all 0.2s ease',
            }}
          >
            {shareState === 'copied' ? <Check size={14} /> : <Share2 size={14} />}
            {shareState === 'copied' ? 'Link copiado!' : 'Compartilhar este profeta'}
          </motion.button>
        </motion.div>

        {/* ── Na Bíblia ── */}
        <motion.section
          id="prophet-biblia"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 40, scrollMarginTop: 60 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            color: '#F0EBE2',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <BookOpen size={20} style={{ color: '#C9A84C' }} />
            Na Bíblia
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {prophet.bibleRefs.map((ref, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                borderRadius: 12,
                background: '#161220',
                border: '1px solid #272230',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 14,
                    fontStyle: 'italic',
                    color: '#C9A84C',
                  }}>
                    {ref.book} {ref.chapter}:{ref.verses}
                  </p>
                  <CopyButton
                    text={`${ref.book} ${ref.chapter}:${ref.verses} — "${ref.text}"`}
                    label="referência"
                  />
                </div>
                <p style={{
                  fontSize: 15,
                  color: '#F0EBE2',
                  lineHeight: 1.8,
                  opacity: 0.9,
                }}>
                  {ref.text}
                </p>
                {ref.context && (
                  <p style={{
                    fontSize: 13,
                    color: '#B3B0A6',
                    lineHeight: 1.7,
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: '1px solid #272230',
                  }}>
                    {ref.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── No Alcorão ── */}
        <motion.section
          id="prophet-alcorao"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: 40, scrollMarginTop: 60 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            color: '#F0EBE2',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <BookOpen size={20} style={{ color: '#C9A84C' }} />
            No Alcorão
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {prophet.quranRefs.map((ref, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                borderRadius: 12,
                background: '#161220',
                border: '1px solid #272230',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 14,
                    fontStyle: 'italic',
                    color: '#C9A84C',
                  }}>
                    Surah {ref.surah} {ref.surahNumber}:{ref.verses}
                  </p>
                  <CopyButton
                    text={`Surah ${ref.surah} ${ref.surahNumber}:${ref.verses} — "${ref.translation}"`}
                    label="referência"
                  />
                </div>
                {ref.arabic && (
                  <p style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: 22,
                    color: 'rgba(201,168,76,0.7)',
                    direction: 'rtl',
                    textAlign: 'right',
                    lineHeight: 1.9,
                    marginBottom: 16,
                  }}>
                    {ref.arabic}
                  </p>
                )}
                <p style={{
                  fontSize: 15,
                  color: '#F0EBE2',
                  lineHeight: 1.8,
                  opacity: 0.9,
                }}>
                  {ref.translation}
                </p>
                {ref.context && (
                  <p style={{
                    fontSize: 13,
                    color: '#B3B0A6',
                    lineHeight: 1.7,
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: '1px solid #272230',
                  }}>
                    {ref.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Side-by-side featured ── */}
        {prophet.bibleRefs[0] && prophet.quranRefs[0] && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ marginBottom: 40 }}
          >
            <p style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7A7870',
              marginBottom: 16,
              textAlign: 'center',
            }}>
              Lado a lado
            </p>
            <BridgeScriptureView
              bibleRef={{
                reference: `${prophet.bibleRefs[0].book} ${prophet.bibleRefs[0].chapter}:${prophet.bibleRefs[0].verses}`,
                text: prophet.bibleRefs[0].text,
              }}
              quranRef={{
                reference: `Surah ${prophet.quranRefs[0].surah} ${prophet.quranRefs[0].surahNumber}:${prophet.quranRefs[0].verses}`,
                arabic: prophet.quranRefs[0].arabic,
                text: prophet.quranRefs[0].translation,
              }}
            />
          </motion.section>
        )}

        {/* ── Convergences ── */}
        <motion.section
          id="prophet-convergencias"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 32, scrollMarginTop: 60 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 20,
            color: '#F0EBE2',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <CheckCircle size={18} style={{ color: '#22c55e' }} />
            O que as duas escrituras compartilham
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {prophet.convergences.map((item, i) => (
              <div key={i} style={{
                padding: '14px 18px',
                borderRadius: 10,
                background: 'rgba(34,197,94,0.06)',
                border: '1px solid rgba(34,197,94,0.12)',
              }}>
                <p style={{ fontSize: 14, color: '#F0EBE2', lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Divergences ── */}
        <motion.section
          id="prophet-divergencias"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginBottom: 40, scrollMarginTop: 60 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 20,
            color: '#F0EBE2',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <AlertCircle size={18} style={{ color: '#f59e0b' }} />
            Onde os caminhos divergem
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {prophet.divergences.map((item, i) => (
              <div key={i} style={{
                padding: '14px 18px',
                borderRadius: 10,
                background: 'rgba(245,158,11,0.06)',
                border: '1px solid rgba(245,158,11,0.12)',
              }}>
                <p style={{ fontSize: 14, color: '#F0EBE2', lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Scholar Context ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginBottom: 48,
            padding: '24px',
            borderRadius: 12,
            background: '#161220',
            border: '1px solid #272230',
          }}
        >
          <p style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#7A7870',
            marginBottom: 12,
          }}>
            Contexto acadêmico
          </p>
          <p style={{
            fontSize: 15,
            color: '#B3B0A6',
            lineHeight: 1.8,
          }}>
            {prophet.scholarContext}
          </p>
        </motion.section>

        {/* ── Cross-link: A Bíblia do Kalam ── */}
        {bibliaMap[prophet.id] && (
          <div style={{ marginBottom: 32 }}>
            <Link
              href={`/a-biblia-do-kalam/${bibliaMap[prophet.id]}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                color: '#C9A84C',
                textDecoration: 'none',
              }}
            >
              <BookText size={14} />
              Leia a narrativa completa na Bíblia do Kalam
            </Link>
          </div>
        )}

        {/* ── Navigation ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          borderTop: '1px solid #272230',
          paddingTop: 24,
        }}>
          {prev ? (
            <Link href={`/a-ponte/por-profeta/${prev.id}`} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              color: '#C9A84C',
              textDecoration: 'none',
            }}>
              <ArrowLeft size={14} />
              {prev.name}
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/a-ponte/por-profeta/${next.id}`} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              color: '#C9A84C',
              textDecoration: 'none',
            }}>
              {next.name}
              <ArrowRight size={14} />
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  )
}
