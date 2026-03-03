import { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Kalam Brasil',
  description: 'Artigos sobre o Alcorão, profetas, conexões com a Bíblia e espiritualidade para brasileiros.',
  openGraph: {
    title: 'Blog — Kalam Brasil',
    description: 'Artigos sobre o Alcorão, profetas, conexões com a Bíblia e espiritualidade para brasileiros.',
    url: 'https://kalambrasil.com/blog',
  },
}

export const revalidate = 3600 // revalidate every hour

interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle: string | null
  pillar: string | null
  tags: string[]
  read_time_min: number
  published_at: string
  cover_url: string | null
}

const PILLAR_LABELS: Record<string, { label: string; color: string }> = {
  ponte: { label: 'A Ponte', color: '#C9A84C' },
  original: { label: 'O Original', color: '#7C9EBF' },
  sistema: { label: 'O Sistema', color: '#8BBF7C' },
  beleza: { label: 'A Beleza', color: '#BF7CA8' },
  fundador: { label: 'Fundador', color: '#BF9A7C' },
}

async function getPosts(): Promise<BlogPost[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, slug, title, subtitle, pillar, tags, read_time_min, published_at, cover_url')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(40)

  if (error) {
    console.error('[blog] Failed to load posts:', error.message)
    return []
  }

  return data || []
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 20px 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <BookOpen size={18} color="#C9A84C" strokeWidth={1.5} />
          <span style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: 12,
            color: '#C9A84C',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Kalam Blog
          </span>
        </div>

        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(28px, 5vw, 40px)',
          fontWeight: 700,
          color: '#F0EBE2',
          lineHeight: 1.2,
          marginBottom: 12,
        }}>
          Descobertas que ninguém te contou
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 15,
          color: '#B3B0A6',
          lineHeight: 1.7,
          maxWidth: 520,
        }}>
          Artigos sobre o Alcorão, profetas e conexões espirituais — escritos para quem nunca leu,
          mas sempre sentiu que faltava algo.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#7A7870',
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 14,
        }}>
          Nenhum artigo publicado ainda. Volte em breve.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {posts.map((post, i) => {
            const pillar = post.pillar ? PILLAR_LABELS[post.pillar] : null
            const date = post.published_at
              ? new Date(post.published_at).toLocaleDateString('pt-BR', {
                  day: '2-digit', month: 'long', year: 'numeric',
                })
              : null

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  padding: '28px 0',
                  borderBottom: '1px solid #1C1628',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 20,
                  alignItems: 'start',
                  transition: 'opacity 0.15s ease',
                }}>
                  <div>
                    {/* Pillar badge */}
                    {pillar && (
                      <span style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-sans, Inter, sans-serif)',
                        fontSize: 11,
                        fontWeight: 600,
                        color: pillar.color,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}>
                        {pillar.label}
                      </span>
                    )}

                    <h2 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(17px, 3vw, 22px)',
                      fontWeight: 600,
                      color: '#F0EBE2',
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}>
                      {post.title}
                    </h2>

                    {post.subtitle && (
                      <p style={{
                        fontFamily: 'var(--font-sans, Inter, sans-serif)',
                        fontSize: 14,
                        color: '#7A7870',
                        lineHeight: 1.6,
                        marginBottom: 12,
                      }}>
                        {post.subtitle}
                      </p>
                    )}

                    {/* Meta */}
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
                        {post.read_time_min} min
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight size={18} color="#272230" style={{ marginTop: 6, flexShrink: 0 }} />
                </article>
              </Link>
            )
          })}
        </div>
      )}

      {/* CTA */}
      <div style={{
        marginTop: 64,
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
        borderRadius: 16,
        border: '1px solid rgba(201,168,76,0.15)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 18,
          color: '#F0EBE2',
          marginBottom: 8,
        }}>
          Explore o Kalam completo
        </p>
        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: 13,
          color: '#7A7870',
          marginBottom: 20,
          lineHeight: 1.6,
        }}>
          114 suras, histórias de profetas, trilhas guiadas e muito mais.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 10,
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: 13,
            fontWeight: 600,
            color: '#C9A84C',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Acessar o app →
        </Link>
      </div>
    </main>
  )
}
