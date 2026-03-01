'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/providers/auth-provider'
import Link from 'next/link'
import { BookOpen, Lock, ArrowLeft, Filter } from 'lucide-react'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

const CATEGORIES = [
  { value: '', label: 'Todos' },
  { value: 'ponte', label: 'A Ponte' },
  { value: 'original', label: 'O Original' },
  { value: 'sistema', label: 'O Sistema' },
  { value: 'beleza', label: 'A Beleza' },
]

const TIER_LABELS: Record<string, string> = {
  free: 'Free',
  explorer: 'Explorer',
  seeker: 'Seeker',
  guide: 'Guide',
}

type ContentItem = {
  id: string
  title: string
  slug: string
  content_type: string
  min_tier: string
  category: string | null
  cover_image: string | null
  published_at: string
  accessible: boolean
  user_tier: string
}

export default function EstudosPage() {
  const { user, loading: authLoading } = useAuth()
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState('')

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const params = new URLSearchParams({ type: 'study' })
        if (category) params.set('category', category)

        const res = await fetch(`/api/membership/content?${params}`)
        const data = await res.json()

        if (data.error) throw new Error(data.error)
        setContent(data.data || [])
      } catch (err) {
        console.error('[estudos] Load error:', err)
        setError('Erro ao carregar estudos. Tente novamente.')
      } finally {
        setLoading(false)
      }
    }

    if (!authLoading) load()
  }, [authLoading, category])

  return (
    <main style={{ background: T.bg, minHeight: '100vh', padding: '24px 16px 100px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 24 }}
        >
          <Link
            href="/area-de-membros"
            style={{ color: T.secondary, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}
          >
            <ArrowLeft size={14} /> Área de Membros
          </Link>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            color: T.text,
            margin: 0,
            marginBottom: 8,
          }}>
            Estudos Profundos
          </h1>
          <p style={{ color: T.secondary, fontSize: 14, margin: 0 }}>
            Análises exclusivas que conectam os textos sagrados com sabedoria prática.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 24,
            overflowX: 'auto',
            paddingBottom: 4,
          }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              style={{
                background: category === cat.value ? `${T.gold}20` : T.surface,
                border: `1px solid ${category === cat.value ? T.gold : T.border}`,
                borderRadius: 20,
                padding: '6px 16px',
                color: category === cat.value ? T.gold : T.secondary,
                fontSize: 13,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: 60, color: T.gold, fontSize: 14 }}>
            Carregando estudos...
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: '#2D1B1B',
            border: '1px solid #5C2B2B',
            borderRadius: 12,
            padding: 20,
            textAlign: 'center',
            color: '#F5A5A5',
            fontSize: 14,
          }}>
            {error}
            <button
              onClick={() => setCategory(category)}
              style={{
                display: 'block',
                margin: '12px auto 0',
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                padding: '8px 20px',
                color: T.text,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && content.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 16,
              padding: 48,
              textAlign: 'center',
            }}
          >
            <BookOpen size={48} style={{ color: T.muted, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: T.text, marginBottom: 8 }}>
              Estudos em preparação
            </h3>
            <p style={{ color: T.secondary, fontSize: 14 }}>
              Novos estudos profundos estão sendo preparados. Volte em breve.
            </p>
          </motion.div>
        )}

        {/* Content Grid */}
        {!loading && !error && content.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {content.map((item, i) => (
              <ContentCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </main>
  )
}

function ContentCard({ item, index }: { item: ContentItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Cover image if exists */}
      {item.cover_image && (
        <div style={{
          height: 160,
          background: `url(${item.cover_image}) center/cover`,
          position: 'relative',
        }}>
          {!item.accessible && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: 'blur(8px)',
              background: 'rgba(13,11,18,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Lock size={32} style={{ color: T.gold }} />
            </div>
          )}
        </div>
      )}

      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {item.category && (
            <span style={{
              background: `${T.gold}15`,
              color: T.gold,
              padding: '2px 8px',
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              {item.category}
            </span>
          )}
          <span style={{
            background: item.accessible ? '#1B2D1B' : '#2D1B1B',
            color: item.accessible ? '#A5F5A5' : '#F5A5A5',
            padding: '2px 8px',
            borderRadius: 4,
            fontSize: 11,
            fontWeight: 600,
          }}>
            {item.accessible ? 'Desbloqueado' : TIER_LABELS[item.min_tier] + '+'}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 18,
          color: T.text,
          margin: '0 0 8px',
        }}>
          {item.title}
        </h3>

        <p style={{ color: T.muted, fontSize: 12 }}>
          {new Date(item.published_at).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>
    </motion.div>
  )
}
