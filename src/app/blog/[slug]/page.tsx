import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'

export const revalidate = 3600

interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle: string | null
  body: string
  cover_url: string | null
  pillar: string | null
  tags: string[]
  read_time_min: number
  published_at: string
}

const PILLAR_LABELS: Record<string, { label: string; color: string }> = {
  ponte: { label: 'A Ponte', color: '#C9A84C' },
  original: { label: 'O Original', color: '#7C9EBF' },
  sistema: { label: 'O Sistema', color: '#8BBF7C' },
  beleza: { label: 'A Beleza', color: '#BF7CA8' },
  fundador: { label: 'Fundador', color: '#BF9A7C' },
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await getSupabase()
    .from('blog_posts')
    .select('id, slug, title, subtitle, body, cover_url, pillar, tags, read_time_min, published_at')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error || !data) return null
  return data
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Artigo não encontrado — Kalam' }
  }

  const description = post.subtitle || post.body.slice(0, 160).replace(/[#*\n]/g, ' ').trim()

  return {
    title: `${post.title} — Kalam Brasil`,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://kalambrasil.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.published_at,
      images: post.cover_url ? [{ url: post.cover_url }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  }
}

// Minimal markdown renderer — handles bold, italic, links, line breaks
function renderBody(body: string): string {
  return body
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((https?:\/\/.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .split('\n\n')
    .map(para => {
      const trimmed = para.trim()
      if (!trimmed) return ''
      if (trimmed.startsWith('## ')) return `<h2>${trimmed.slice(3)}</h2>`
      if (trimmed.startsWith('### ')) return `<h3>${trimmed.slice(4)}</h3>`
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`
    })
    .filter(Boolean)
    .join('\n')
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const pillar = post.pillar ? PILLAR_LABELS[post.pillar] : null
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric',
      })
    : null

  const bodyHtml = renderBody(post.body)

  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 100px' }}>
      {/* Back */}
      <Link
        href="/blog"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 13,
          color: '#7A7870',
          textDecoration: 'none',
          marginBottom: 40,
          transition: 'color 0.15s',
        }}
      >
        <ArrowLeft size={14} />
        Blog
      </Link>

      {/* Cover */}
      {post.cover_url && (
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: 40,
          background: '#161220',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover_url}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Header */}
      <header style={{ marginBottom: 40 }}>
        {pillar && (
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: 11,
            fontWeight: 600,
            color: pillar.color,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            {pillar.label}
          </span>
        )}

        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(24px, 5vw, 36px)',
          fontWeight: 700,
          color: '#F0EBE2',
          lineHeight: 1.25,
          marginBottom: 12,
        }}>
          {post.title}
        </h1>

        {post.subtitle && (
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: 16,
            color: '#B3B0A6',
            lineHeight: 1.6,
            marginBottom: 20,
          }}>
            {post.subtitle}
          </p>
        )}

        {/* Meta row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {date && (
            <span style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: 12,
              color: '#5A584E',
            }}>
              {date}
            </span>
          )}
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: 12,
            color: '#5A584E',
          }}>
            <Clock size={11} />
            {post.read_time_min} min de leitura
          </span>
        </div>
      </header>

      {/* Divider */}
      <div style={{
        height: 1,
        background: 'linear-gradient(to right, transparent, #272230, transparent)',
        marginBottom: 40,
      }} />

      {/* Body */}
      <div
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
        style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 16,
          lineHeight: 1.8,
          color: '#D4CFC8',
        }}
      />

      {/* Style overrides for rendered body */}
      <style>{`
        main p {
          margin-bottom: 1.5em;
          color: #D4CFC8;
        }
        main h2 {
          font-family: "Playfair Display", serif;
          font-size: 1.4em;
          font-weight: 600;
          color: #F0EBE2;
          margin: 2em 0 0.75em;
        }
        main h3 {
          font-family: "Playfair Display", serif;
          font-size: 1.15em;
          font-weight: 600;
          color: #F0EBE2;
          margin: 1.75em 0 0.5em;
        }
        main strong { color: #F0EBE2; }
        main em { color: #B3B0A6; }
        main a { color: #C9A84C; text-underline-offset: 3px; }
      `}</style>

      {/* Divider */}
      <div style={{
        height: 1,
        background: 'linear-gradient(to right, transparent, #272230, transparent)',
        margin: '48px 0',
      }} />

      {/* CTA */}
      <div style={{
        padding: '28px',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
        borderRadius: 14,
        border: '1px solid rgba(201,168,76,0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <BookOpen size={16} color="#C9A84C" strokeWidth={1.5} />
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 16,
            color: '#F0EBE2',
            fontWeight: 600,
          }}>
            Explore mais no Kalam
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 13,
          color: '#7A7870',
          lineHeight: 1.6,
          margin: 0,
        }}>
          Trilhas de aprendizado, histórias de profetas, conexões Bíblia-Alcorão e muito mais — tudo em um lugar.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 9,
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: 13,
              fontWeight: 600,
              color: '#C9A84C',
              textDecoration: 'none',
            }}
          >
            Entrar no app →
          </Link>
          <Link
            href="/blog"
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              border: '1px solid #272230',
              borderRadius: 9,
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: 13,
              color: '#7A7870',
              textDecoration: 'none',
            }}
          >
            Mais artigos
          </Link>
        </div>
      </div>
    </main>
  )
}
