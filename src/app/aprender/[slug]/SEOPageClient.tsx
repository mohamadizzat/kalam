'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronLeft, BookOpen } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'
import type { SEOPage } from '@/lib/data/seo-pages'
import { SEO_PAGES } from '@/lib/data/seo-pages'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <BlurFade delay={0.05 * index}>
      <div
        style={{
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              color: T.text,
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {question}
          </span>
          <ChevronDown
            size={20}
            style={{
              color: T.gold,
              flexShrink: 0,
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </button>
        <div
          style={{
            maxHeight: open ? 300 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
            opacity: open ? 1 : 0,
          }}
        >
          <p
            style={{
              color: T.secondary,
              fontSize: 15,
              lineHeight: 1.7,
              paddingBottom: 20,
              margin: 0,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </BlurFade>
  )
}

function ScriptureRef({ quranRef, hadithRef }: { quranRef?: string; hadithRef?: string }) {
  if (!quranRef && !hadithRef) return null

  return (
    <div
      style={{
        borderLeft: `3px solid ${T.gold}`,
        paddingLeft: 20,
        marginTop: 24,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      {quranRef && (
        <p
          style={{
            color: T.goldLight,
            fontSize: 14,
            fontStyle: 'italic',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <BookOpen size={14} style={{ opacity: 0.7 }} />
          Referência: {quranRef}
        </p>
      )}
      {hadithRef && (
        <p
          style={{
            color: T.goldLight,
            fontSize: 14,
            fontStyle: 'italic',
            margin: quranRef ? '6px 0 0 0' : 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <BookOpen size={14} style={{ opacity: 0.7 }} />
          Hadith: {hadithRef}
        </p>
      )}
    </div>
  )
}

export default function SEOPageClient({ page }: { page: SEOPage }) {
  const relatedPages = page.relatedSlugs
    .map((s) => SEO_PAGES.find((p) => p.slug === s))
    .filter((p): p is SEOPage => p !== undefined)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          minHeight: '100vh',
          background: T.bg,
          color: T.text,
          paddingBottom: 120,
        }}
      >
        {/* ── Back link ──────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '24px 20px 0',
          }}
        >
          <BlurFade delay={0}>
            <Link
              href="/aprender"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: T.muted,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = T.muted)}
            >
              <ChevronLeft size={16} />
              Voltar para Aprender
            </Link>
          </BlurFade>
        </div>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '48px 20px 0',
            textAlign: 'center',
          }}
        >
          <BlurFade delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 600,
                color: T.text,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {page.heroTitle}
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p
              style={{
                fontSize: 'clamp(16px, 2.5vw, 19px)',
                color: T.secondary,
                lineHeight: 1.6,
                marginTop: 20,
                maxWidth: 640,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {page.heroSubtitle}
            </p>
          </BlurFade>
        </header>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
          <GoldDivider />
        </div>

        {/* ── Sections ───────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          {page.sections.map((section, i) => (
            <SectionReveal key={i} delay={0.1 * i}>
              <section
                style={{
                  marginBottom: 56,
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3.5vw, 28px)',
                    fontWeight: 600,
                    color: T.text,
                    lineHeight: 1.25,
                    margin: '0 0 20px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {section.title}
                </h2>

                <div>
                  {section.content.split('\n\n').map((paragraph, j) => (
                    <p
                      key={j}
                      style={{
                        color: T.secondary,
                        fontSize: 16,
                        lineHeight: 1.8,
                        margin: j === 0 ? 0 : '16px 0 0 0',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <ScriptureRef quranRef={section.quranRef} hadithRef={section.hadithRef} />
              </section>
            </SectionReveal>
          ))}
        </article>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
          <GoldDivider />
        </div>

        <section
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <SectionReveal>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 600,
                color: T.text,
                lineHeight: 1.2,
                margin: '0 0 32px 0',
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              Perguntas frequentes
            </h2>
          </SectionReveal>

          <div
            style={{
              background: T.surface,
              borderRadius: 16,
              padding: '8px 28px',
              border: `1px solid ${T.border}`,
            }}
          >
            {page.faq.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
            ))}
          </div>
        </section>

        {/* ── Related pages ──────────────────────────────────────── */}
        {relatedPages.length > 0 && (
          <>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
              <GoldDivider />
            </div>

            <section
              style={{
                maxWidth: 800,
                margin: '0 auto',
                padding: '0 20px',
              }}
            >
              <SectionReveal>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    fontWeight: 600,
                    color: T.text,
                    lineHeight: 1.2,
                    margin: '0 0 24px 0',
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Continue explorando
                </h2>
              </SectionReveal>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: 16,
                }}
              >
                {relatedPages.map((related, i) => (
                  <BlurFade key={related.slug} delay={0.1 * i}>
                    <Link
                      href={`/aprender/${related.slug}`}
                      style={{
                        display: 'block',
                        background: T.surface,
                        borderRadius: 14,
                        padding: '24px 20px',
                        border: `1px solid ${T.border}`,
                        textDecoration: 'none',
                        transition: 'border-color 0.3s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${T.gold}44`
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = T.border
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 17,
                          fontWeight: 600,
                          color: T.text,
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {related.heroTitle}
                      </h3>
                      <p
                        style={{
                          fontSize: 13,
                          color: T.muted,
                          marginTop: 8,
                          margin: '8px 0 0 0',
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {related.description}
                      </p>
                    </Link>
                  </BlurFade>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  )
}
