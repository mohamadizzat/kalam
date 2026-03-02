'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { BlurFade } from '@/components/effects/BlurFade'
import { GoldDivider } from '@/components/shared/GoldDivider'
import { SEO_PAGES, SEO_PAGE_GROUPS } from '@/lib/data/seo-pages'
import type { SEOPage } from '@/lib/data/seo-pages'

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

function TopicCard({ page, index }: { page: SEOPage; index: number }) {
  return (
    <BlurFade delay={0.05 * index}>
      <Link
        href={`/aprender/${page.slug}`}
        style={{
          display: 'block',
          background: T.surface,
          borderRadius: 16,
          padding: '28px 24px',
          border: `1px solid ${T.border}`,
          textDecoration: 'none',
          transition: 'border-color 0.3s, transform 0.2s, box-shadow 0.3s',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${T.gold}55`
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = `0 8px 32px ${T.gold}11`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = T.border
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 19,
            fontWeight: 600,
            color: T.text,
            margin: 0,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          {page.heroTitle}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: T.muted,
            marginTop: 12,
            margin: '12px 0 0 0',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {page.description}
        </p>
        <span
          style={{
            display: 'inline-block',
            marginTop: 16,
            fontSize: 13,
            color: T.gold,
            fontWeight: 500,
          }}
        >
          Ler mais
        </span>
      </Link>
    </BlurFade>
  )
}

export default function AprenderIndexClient() {
  return (
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
          maxWidth: 1000,
          margin: '0 auto',
          padding: '24px 20px 0',
        }}
      >
        <BlurFade delay={0}>
          <Link
            href="/"
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
            Voltar
          </Link>
        </BlurFade>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: 1000,
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
            Aprender sobre o Islã
          </h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 19px)',
              color: T.secondary,
              lineHeight: 1.6,
              marginTop: 20,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Conteúdo claro, respeitoso e sem julgamento. Explore no seu ritmo.
          </p>
        </BlurFade>
      </header>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>
        <GoldDivider />
      </div>

      {/* ── Groups ────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {SEO_PAGE_GROUPS.map((group, gi) => {
          const pages = group.slugs
            .map((slug) => SEO_PAGES.find((p) => p.slug === slug))
            .filter((p): p is SEOPage => p !== undefined)

          return (
            <section key={group.label} style={{ marginBottom: 64 }}>
              <SectionReveal delay={0.1 * gi}>
                <div style={{ marginBottom: 28 }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(22px, 3.5vw, 28px)',
                      fontWeight: 600,
                      color: T.text,
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {group.label}
                  </h2>
                  <p
                    style={{
                      color: T.muted,
                      fontSize: 15,
                      marginTop: 6,
                      margin: '6px 0 0 0',
                    }}
                  >
                    {group.description}
                  </p>
                </div>
              </SectionReveal>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 16,
                }}
              >
                {pages.map((page, i) => (
                  <TopicCard key={page.slug} page={page} index={gi * 5 + i} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
