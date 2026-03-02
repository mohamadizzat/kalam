'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Filter } from 'lucide-react'
import { HALAL_BOOKS, TOTAL_PASSAGES, type HalalBook, type HalalPassage, type HalalSection } from '@/lib/data/escrituras-halal'

// ── Tokens ─────────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#4CAF7A',
  amber: '#E2A07B',
}

const CONFIDENCE_CONFIG = {
  full: { label: 'Confiança Total', color: T.green, bg: 'rgba(76,175,122,0.08)' },
  context: { label: 'Com Contexto', color: T.amber, bg: 'rgba(226,160,123,0.08)' },
}

// ── Passage Card ────────────────────────────────────────────────────────────
function PassageCard({ passage }: { passage: HalalPassage }) {
  const [expanded, setExpanded] = useState(false)
  const conf = CONFIDENCE_CONFIG[passage.confidence]

  return (
    <motion.div
      layout
      style={{
        borderRadius: 14,
        background: T.surface,
        border: `1px solid ${T.border}`,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 14,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Confidence dot */}
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: conf.color, flexShrink: 0, marginTop: 6,
        }} />

        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 13, fontWeight: 600,
            color: T.gold, marginBottom: 8,
          }}>
            {passage.reference}
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 15, fontStyle: 'italic',
            color: T.text, lineHeight: 1.75,
          }}>
            &ldquo;{passage.text}&rdquo;
          </p>
        </div>

        <span style={{ color: T.muted, flexShrink: 0, marginTop: 4 }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 20px 20px 42px',
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              {/* Confidence badge */}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 20,
                background: conf.bg,
                fontSize: 11, letterSpacing: '0.05em',
                color: conf.color, alignSelf: 'flex-start',
              }}>
                {conf.label}
              </span>

              {/* Note */}
              <p style={{
                fontSize: 13, color: T.secondary,
                lineHeight: 1.75,
              }}>
                {passage.note}
              </p>

              {/* Hadith */}
              {passage.hadith && (
                <div style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: 'rgba(201,168,76,0.04)',
                  borderLeft: `2px solid ${T.gold}`,
                }}>
                  <p style={{ fontSize: 11, color: T.gold, letterSpacing: '0.05em', marginBottom: 6 }}>
                    HADITH
                  </p>
                  <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.7, fontStyle: 'italic' }}>
                    {passage.hadith}
                  </p>
                </div>
              )}

              {/* Quran Echo */}
              {passage.quranEcho && (
                <div style={{
                  padding: '14px 16px', borderRadius: 12,
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.12)',
                }}>
                  <p style={{ fontSize: 10, letterSpacing: '3px', color: T.muted, marginBottom: 10 }}>
                    ECO NO ALCORÃO
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: 20, direction: 'rtl',
                    color: T.gold, lineHeight: 1.8,
                    marginBottom: 8,
                  }}>
                    {passage.quranEcho.arabic}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 14, fontStyle: 'italic',
                    color: T.text, lineHeight: 1.7,
                    marginBottom: 6,
                  }}>
                    &ldquo;{passage.quranEcho.translation}&rdquo;
                  </p>
                  <p style={{ fontSize: 11, color: T.gold }}>
                    {passage.quranEcho.reference}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Section Block ────────────────────────────────────────────────────────────
function SectionBlock({ section, filter }: { section: HalalSection; filter: string }) {
  const passages = filter === 'all'
    ? section.passages
    : section.passages.filter(p => p.confidence === filter)

  if (passages.length === 0) return null

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 17, fontWeight: 600,
          color: T.text, marginBottom: 4,
        }}>
          {section.title}
        </h3>
        {section.subtitle && (
          <p style={{ fontSize: 13, color: T.muted }}>{section.subtitle}</p>
        )}
        {section.prophetName && (
          <span style={{
            display: 'inline-block', marginTop: 6,
            padding: '3px 10px', borderRadius: 20,
            background: 'rgba(201,168,76,0.08)',
            fontSize: 11, color: T.gold, letterSpacing: '0.05em',
          }}>
            Profeta {section.prophetName} (as)
          </span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {passages.map(p => (
          <PassageCard key={p.id} passage={p} />
        ))}
      </div>
    </div>
  )
}

// ── Book Panel ───────────────────────────────────────────────────────────────
function BookPanel({ book, filter }: { book: HalalBook; filter: string }) {
  const visibleSections = book.sections.filter(s =>
    filter === 'all'
      ? s.passages.length > 0
      : s.passages.some(p => p.confidence === filter)
  )

  return (
    <div>
      {/* Book Header */}
      <div style={{
        padding: '24px 0 28px',
        borderBottom: `1px solid ${T.border}`,
        marginBottom: 32,
      }}>
        {/* Testament badge */}
        <span style={{
          fontSize: 10, letterSpacing: '3px',
          textTransform: 'uppercase' as const,
          color: T.muted,
        }}>
          {book.testament === 'antigo' ? 'ANTIGO TESTAMENTO' : 'NOVO TESTAMENTO'}
        </span>

        {/* Arabic + Title */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginTop: 12, marginBottom: 12 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 600, color: T.text,
          }}>
            {book.name}
          </h2>
          <span style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 28, color: T.gold,
            opacity: 0.6, lineHeight: 1,
          }}>
            {book.arabicName}
          </span>
        </div>

        <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.8, marginBottom: 16 }}>
          {book.description}
        </p>

        {/* Islamic context */}
        <div style={{
          padding: '12px 16px', borderRadius: 10,
          background: 'rgba(201,168,76,0.04)',
          borderLeft: `2px solid rgba(201,168,76,0.3)`,
        }}>
          <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.7 }}>
            {book.islamicContext}
          </p>
        </div>

        {/* Quran confirmation */}
        <div style={{
          marginTop: 12, padding: '12px 16px', borderRadius: 10,
          background: T.elevated,
        }}>
          <p style={{ fontSize: 10, color: T.gold, letterSpacing: '2px', marginBottom: 6 }}>
            ALCORÃO CONFIRMA
          </p>
          <p style={{ fontSize: 13, color: T.secondary, fontStyle: 'italic', lineHeight: 1.7 }}>
            &ldquo;{book.quranConfirmation.text}&rdquo;
          </p>
          <p style={{ fontSize: 11, color: T.gold, marginTop: 4 }}>
            {book.quranConfirmation.reference}
          </p>
        </div>
      </div>

      {/* Sections */}
      {visibleSections.map(section => (
        <SectionBlock key={section.id} section={section} filter={filter} />
      ))}
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function EscriturasClient() {
  const [activeBook, setActiveBook] = useState(HALAL_BOOKS[0].id)
  const [filter, setFilter] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentBook = HALAL_BOOKS.find(b => b.id === activeBook) ?? HALAL_BOOKS[0]

  return (
    <div style={{ minHeight: '100vh', background: T.bg, paddingTop: 64 }}>

      {/* ── HERO ── */}
      <section style={{
        padding: 'clamp(56px, 8vw, 96px) 24px 40px',
        textAlign: 'center',
        borderBottom: `1px solid ${T.border}`,
      }}>
        <Link href="/a-ponte" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 12, color: T.muted, textDecoration: 'none',
          marginBottom: 32, letterSpacing: '0.05em',
        }}>
          <ArrowLeft size={14} /> A Ponte
        </Link>

        {/* Arabic */}
        <div style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(36px, 6vw, 52px)',
          color: T.gold, direction: 'rtl',
          marginBottom: 20, lineHeight: 1.3,
          textShadow: '0 0 40px rgba(201,168,76,0.2)',
        }}>
          التوراة والزبور والإنجيل
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 600, color: T.text,
          marginBottom: 16, lineHeight: 1.2,
        }}>
          O que o muçulmano pode ler e crer
        </h1>

        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 17px)',
          color: T.secondary, maxWidth: 560,
          margin: '0 auto 28px', lineHeight: 1.8,
        }}>
          Torah, Salmos, Provérbios, Eclesiastes, Jó, Jonas, Êxodo, Isaías, Daniel — e os ensinamentos diretos de Isa (as). Tudo cruzado com o Alcorão.
        </p>

        {/* Anchor verse */}
        <div style={{
          display: 'inline-block',
          padding: '16px 24px', borderRadius: 12,
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.12)',
          maxWidth: 560, textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 18, color: T.gold,
            direction: 'rtl', lineHeight: 1.8, marginBottom: 8,
          }}>
            قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا وَمَا أُنزِلَ إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 13,
            fontStyle: 'italic', color: T.secondary, lineHeight: 1.7,
          }}>
            &ldquo;Cremos em Allah e no que nos foi revelado, e no que foi revelado a Ibrahim, Ismael, Isaque e Jacó&rdquo;
          </p>
          <p style={{ fontSize: 11, color: T.gold, marginTop: 6 }}>Al-Baqarah 2:136</p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 40,
          marginTop: 36,
        }}>
          {[
            { n: HALAL_BOOKS.length, label: 'livros' },
            { n: TOTAL_PASSAGES, label: 'passagens' },
            { n: HALAL_BOOKS.filter(b => b.testament === 'antigo').length, label: 'A.T.' },
            { n: HALAL_BOOKS.filter(b => b.testament === 'novo').length, label: 'N.T.' },
          ].map(({ n, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 28, fontWeight: 700, color: T.gold,
              }}>{n}</p>
              <p style={{ fontSize: 12, color: T.muted }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BODY: sidebar + content ── */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'clamp(200px, 22%, 260px) 1fr',
        gap: 0,
        minHeight: 'calc(100vh - 64px)',
      }}
        className="escrituras-layout"
      >

        {/* ── SIDEBAR ── */}
        <aside style={{
          borderRight: `1px solid ${T.border}`,
          padding: '32px 20px',
          position: 'sticky',
          top: 64,
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
          flexShrink: 0,
        }}>
          {/* Filter */}
          <div style={{ marginBottom: 24 }}>
            <p style={{
              fontSize: 10, letterSpacing: '3px', color: T.muted,
              marginBottom: 10,
            }}>
              FILTRO
            </p>
            {[
              { key: 'all', label: 'Todas' },
              { key: 'full', label: 'Confiança Total', color: T.green },
              { key: 'context', label: 'Com Contexto', color: T.amber },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '8px 12px', borderRadius: 8,
                  background: filter === f.key ? 'rgba(201,168,76,0.08)' : 'none',
                  border: filter === f.key ? '1px solid rgba(201,168,76,0.18)' : '1px solid transparent',
                  color: f.color ?? (filter === f.key ? T.gold : T.secondary),
                  fontSize: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: 4,
                }}
              >
                {f.color && (
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.color, flexShrink: 0 }} />
                )}
                {f.label}
              </button>
            ))}
          </div>

          {/* Book list */}
          <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 20 }}>
            <p style={{
              fontSize: 10, letterSpacing: '3px', color: T.muted,
              marginBottom: 10,
            }}>
              LIVROS
            </p>

            {/* AT */}
            <p style={{ fontSize: 10, color: T.muted, marginBottom: 6, marginTop: 4 }}>Antigo Testamento</p>
            {HALAL_BOOKS.filter(b => b.testament === 'antigo').map(book => (
              <button
                key={book.id}
                onClick={() => setActiveBook(book.id)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '9px 12px', borderRadius: 8,
                  background: activeBook === book.id ? 'rgba(201,168,76,0.08)' : 'none',
                  border: 'none',
                  color: activeBook === book.id ? T.gold : T.secondary,
                  fontSize: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 8, marginBottom: 2,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <span>{book.name}</span>
                <span style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 14, color: activeBook === book.id ? T.gold : T.muted,
                  opacity: 0.7,
                }}>
                  {book.arabicName}
                </span>
              </button>
            ))}

            {/* NT */}
            <p style={{ fontSize: 10, color: T.muted, marginBottom: 6, marginTop: 16 }}>Novo Testamento</p>
            {HALAL_BOOKS.filter(b => b.testament === 'novo').map(book => (
              <button
                key={book.id}
                onClick={() => setActiveBook(book.id)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '9px 12px', borderRadius: 8,
                  background: activeBook === book.id ? 'rgba(201,168,76,0.08)' : 'none',
                  border: 'none',
                  color: activeBook === book.id ? T.gold : T.secondary,
                  fontSize: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 8, marginBottom: 2,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <span>{book.name}</span>
                <span style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: 14, color: activeBook === book.id ? T.gold : T.muted,
                  opacity: 0.7,
                }}>
                  {book.arabicName}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* ── CONTENT ── */}
        <main style={{ padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 48px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBook}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <BookPanel book={currentBook} filter={filter} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ── MOBILE: book picker button ── */}
      <div className="escrituras-mobile-nav" style={{ display: 'none' }}>
        <div style={{
          position: 'fixed', bottom: 80, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
        }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '12px 20px', borderRadius: 24,
              background: T.surface,
              border: `1px solid ${T.border}`,
              color: T.text, fontSize: 13, cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <BookOpen size={16} style={{ color: T.gold }} />
            {currentBook.name}
            <ChevronDown size={14} style={{ color: T.muted }} />
          </button>
        </div>

        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'fixed', bottom: 140, left: 16, right: 16,
                zIndex: 50, background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16, padding: 16,
                maxHeight: '60vh', overflowY: 'auto',
                boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              }}
            >
              {HALAL_BOOKS.map(book => (
                <button
                  key={book.id}
                  onClick={() => { setActiveBook(book.id); setSidebarOpen(false) }}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '12px 14px', borderRadius: 10,
                    background: activeBook === book.id ? 'rgba(201,168,76,0.08)' : 'none',
                    border: 'none',
                    color: activeBook === book.id ? T.gold : T.text,
                    fontSize: 15, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginBottom: 4,
                  }}
                >
                  <span>{book.name}</span>
                  <span style={{ fontFamily: 'var(--font-arabic)', fontSize: 16, color: T.gold, opacity: 0.6 }}>
                    {book.arabicName}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .escrituras-layout {
            grid-template-columns: 1fr !important;
          }
          .escrituras-layout > aside {
            display: none !important;
          }
          .escrituras-mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
