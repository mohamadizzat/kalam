'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/providers/auth-provider'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { ArrowLeft, Heart, MessageCircle, Send, Pin, User } from 'lucide-react'

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

const POST_TYPE_LABELS: Record<string, string> = {
  reflection: 'Reflexão',
  question: 'Pergunta',
  testimony: 'Testemunho',
  discussion: 'Discussão',
}

const POST_TYPE_COLORS: Record<string, string> = {
  reflection: '#C9A84C',
  question: '#4CA8C9',
  testimony: '#A84CC9',
  discussion: '#4CC9A8',
}

type Post = {
  id: string
  user_id: string
  content: string
  type: string
  likes_count: number
  replies_count: number
  pinned: boolean
  created_at: string
  profiles?: { display_name: string | null; avatar_url: string | null }
}

export default function ComunidadePage() {
  const { user, loading: authLoading } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newPost, setNewPost] = useState('')
  const [postType, setPostType] = useState('reflection')
  const [submitting, setSubmitting] = useState(false)

  const loadPosts = useCallback(async () => {
    try {
      setError(null)
      const supabase = createClient()
      const { data, error: fetchErr } = await supabase
        .from('community_posts')
        .select('*, profiles(display_name, avatar_url)')
        .order('pinned', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(50)

      if (fetchErr) throw fetchErr
      setPosts(data || [])
    } catch (err) {
      console.error('[comunidade] Load error:', err)
      setError('Erro ao carregar posts.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!authLoading) loadPosts()
  }, [authLoading, loadPosts])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || !newPost.trim() || submitting) return

    setSubmitting(true)
    try {
      const supabase = createClient()
      const { error: insertErr } = await supabase
        .from('community_posts')
        .insert({
          user_id: user.id,
          content: newPost.trim(),
          type: postType,
        })

      if (insertErr) throw insertErr
      setNewPost('')
      await loadPosts()
    } catch (err) {
      console.error('[comunidade] Submit error:', err)
      setError('Erro ao publicar. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={{ background: T.bg, minHeight: '100vh', padding: '24px 16px 100px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
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
            Comunidade
          </h1>
          <p style={{ color: T.secondary, fontSize: 14, margin: 0 }}>
            Um espaço para reflexões, perguntas e testemunhos.
          </p>
        </motion.div>

        {/* New Post Form */}
        {user && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              padding: 20,
              marginBottom: 24,
            }}
          >
            {/* Type selector */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
              {Object.entries(POST_TYPE_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPostType(key)}
                  style={{
                    background: postType === key ? `${POST_TYPE_COLORS[key]}20` : 'transparent',
                    border: `1px solid ${postType === key ? POST_TYPE_COLORS[key] : T.border}`,
                    borderRadius: 16,
                    padding: '4px 12px',
                    color: postType === key ? POST_TYPE_COLORS[key] : T.muted,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <textarea
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              placeholder="Compartilhe uma reflexão, pergunta ou testemunho..."
              rows={3}
              style={{
                width: '100%',
                background: T.elevated,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                padding: 12,
                color: T.text,
                fontSize: 14,
                resize: 'vertical',
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
              <button
                type="submit"
                disabled={!newPost.trim() || submitting}
                style={{
                  background: newPost.trim() ? T.gold : T.border,
                  color: newPost.trim() ? T.bg : T.muted,
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 20px',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: newPost.trim() ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Send size={14} />
                {submitting ? 'Publicando...' : 'Publicar'}
              </button>
            </div>
          </motion.form>
        )}

        {/* Not logged in */}
        {!user && !authLoading && (
          <div style={{
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 12,
            padding: 24,
            textAlign: 'center',
            marginBottom: 24,
          }}>
            <p style={{ color: T.secondary, fontSize: 14, marginBottom: 12 }}>
              Faça login para participar da comunidade.
            </p>
            <Link
              href="/entrar"
              style={{
                display: 'inline-block',
                background: T.gold,
                color: T.bg,
                padding: '8px 24px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Entrar
            </Link>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: 60, color: T.gold, fontSize: 14 }}>
            Carregando comunidade...
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: '#2D1B1B',
            border: '1px solid #5C2B2B',
            borderRadius: 12,
            padding: 16,
            textAlign: 'center',
            color: '#F5A5A5',
            fontSize: 14,
            marginBottom: 16,
          }}>
            {error}
            <button
              onClick={loadPosts}
              style={{
                display: 'block',
                margin: '8px auto 0',
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                padding: '6px 16px',
                color: T.text,
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && posts.length === 0 && (
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
            <MessageCircle size={48} style={{ color: T.muted, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: T.text, marginBottom: 8 }}>
              Seja o primeiro
            </h3>
            <p style={{ color: T.secondary, fontSize: 14 }}>
              A comunidade está começando. Compartilhe a primeira reflexão.
            </p>
          </motion.div>
        )}

        {/* Posts */}
        {!loading && posts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const displayName = post.profiles?.display_name || 'Anônimo'
  const typeColor = POST_TYPE_COLORS[post.type] || T.gold

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      style={{
        background: T.surface,
        border: `1px solid ${post.pinned ? `${T.gold}40` : T.border}`,
        borderRadius: 12,
        padding: 20,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: T.elevated,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <User size={16} style={{ color: T.muted }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: T.text, fontSize: 14, fontWeight: 600 }}>{displayName}</div>
          <div style={{ color: T.muted, fontSize: 11 }}>
            {new Date(post.created_at).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {post.pinned && <Pin size={14} style={{ color: T.gold }} />}
          <span style={{
            background: `${typeColor}20`,
            color: typeColor,
            padding: '2px 8px',
            borderRadius: 10,
            fontSize: 10,
            fontWeight: 600,
          }}>
            {POST_TYPE_LABELS[post.type]}
          </span>
        </div>
      </div>

      {/* Content */}
      <p style={{
        color: T.text,
        fontSize: 14,
        lineHeight: 1.7,
        margin: 0,
        whiteSpace: 'pre-wrap',
      }}>
        {post.content}
      </p>

      {/* Footer */}
      <div style={{
        display: 'flex',
        gap: 16,
        marginTop: 12,
        paddingTop: 12,
        borderTop: `1px solid ${T.border}`,
      }}>
        <span style={{ color: T.muted, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
          <Heart size={14} /> {post.likes_count}
        </span>
        <span style={{ color: T.muted, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
          <MessageCircle size={14} /> {post.replies_count}
        </span>
      </div>
    </motion.div>
  )
}
