'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Users, Shield, RefreshCw, ChevronDown, Trash2, Crown, UserCheck, Mail, Calendar, Activity } from 'lucide-react'

const T = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1C1828',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.10)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  red: '#FF6B6B',
  green: '#45B7A0',
}

const TIERS = ['free', 'explorer', 'seeker', 'guide'] as const
const STATUSES = ['active', 'trial', 'cancelled', 'expired'] as const

const TIER_COLORS: Record<string, string> = {
  free: T.muted,
  explorer: '#7EB8D4',
  seeker: '#E8C547',
  guide: T.gold,
}

const TIER_LABELS: Record<string, string> = {
  free: 'Free',
  explorer: 'Explorer',
  seeker: 'Seeker',
  guide: 'Guide',
}

type AdminUser = {
  id: string
  email: string
  name: string | null
  avatar_url: string | null
  is_admin: boolean
  email_confirmed: boolean
  created_at: string
  last_sign_in: string | null
  tier: string
  status: string | null
  membership_id: string | null
}

type CommunityMember = {
  id: string
  email: string
  phone: string | null
  is_pro: boolean
  questions_used: number
  created_at: string
}

function fmt(date: string | null) {
  if (!date) return '—'
  return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: '2-digit' })
}

// ── Linha da tabela de usuários ───────────────────────────────────────────────
function UserRow({
  user,
  onUpdate,
  onDelete,
}: {
  user: AdminUser
  onUpdate: (id: string, updates: { tier?: string; status?: string }) => Promise<void>
  onDelete: (id: string, email: string) => void
}) {
  const [saving, setSaving] = useState(false)

  async function handleTierChange(tier: string) {
    setSaving(true)
    await onUpdate(user.id, { tier })
    setSaving(false)
  }

  async function handleStatusChange(status: string) {
    setSaving(true)
    await onUpdate(user.id, { status })
    setSaving(false)
  }

  return (
    <tr style={{ borderBottom: `1px solid ${T.border}` }}>
      {/* Avatar + nome + email */}
      <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: TIER_COLORS[user.tier] + '30',
            border: `1px solid ${TIER_COLORS[user.tier]}50`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontSize: 13, fontWeight: 700, color: TIER_COLORS[user.tier],
            fontFamily: 'var(--font-serif)',
          }}>
            {(user.name || user.email)[0].toUpperCase()}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: T.text }}>
                {user.name || '—'}
              </span>
              {user.is_admin && (
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '1.5px',
                  color: T.gold, background: T.goldDim,
                  padding: '2px 6px', borderRadius: 3,
                }}>
                  ADMIN
                </span>
              )}
              {!user.email_confirmed && (
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '1.5px',
                  color: T.red, background: 'rgba(255,107,107,0.1)',
                  padding: '2px 6px', borderRadius: 3,
                }}>
                  NÃO CONFIRMADO
                </span>
              )}
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.muted }}>
              {user.email}
            </span>
          </div>
        </div>
      </td>

      {/* Tier */}
      <td style={{ padding: '14px 12px', verticalAlign: 'middle' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <select
            value={user.tier}
            onChange={e => handleTierChange(e.target.value)}
            disabled={saving}
            style={{
              appearance: 'none',
              padding: '6px 28px 6px 10px',
              borderRadius: 6,
              border: `1px solid ${TIER_COLORS[user.tier]}50`,
              background: TIER_COLORS[user.tier] + '15',
              color: TIER_COLORS[user.tier],
              fontSize: 12, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
            }}
          >
            {TIERS.map(t => (
              <option key={t} value={t} style={{ background: T.elevated, color: T.text }}>
                {TIER_LABELS[t]}
              </option>
            ))}
          </select>
          <ChevronDown size={12} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: TIER_COLORS[user.tier], pointerEvents: 'none' }} />
        </div>
      </td>

      {/* Status */}
      <td style={{ padding: '14px 12px', verticalAlign: 'middle' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <select
            value={user.status || 'active'}
            onChange={e => handleStatusChange(e.target.value)}
            disabled={saving}
            style={{
              appearance: 'none',
              padding: '6px 28px 6px 10px',
              borderRadius: 6,
              border: `1px solid ${T.border}`,
              background: T.elevated,
              color: user.status === 'active' ? T.green : T.muted,
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
            }}
          >
            {STATUSES.map(s => (
              <option key={s} value={s} style={{ background: T.elevated, color: T.text }}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown size={12} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: T.muted, pointerEvents: 'none' }} />
        </div>
      </td>

      {/* Entrou */}
      <td style={{ padding: '14px 12px', verticalAlign: 'middle' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.secondary }}>
          {fmt(user.created_at)}
        </span>
      </td>

      {/* Último acesso */}
      <td style={{ padding: '14px 12px', verticalAlign: 'middle' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.muted }}>
          {fmt(user.last_sign_in)}
        </span>
      </td>

      {/* Ações */}
      <td style={{ padding: '14px 12px', verticalAlign: 'middle' }}>
        {!user.is_admin && (
          <button
            onClick={() => onDelete(user.id, user.email)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: T.muted, padding: 4, borderRadius: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = T.red)}
            onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
            title="Deletar usuário"
          >
            <Trash2 size={14} />
          </button>
        )}
      </td>
    </tr>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────
export function SuperAdminClient() {
  const [users, setUsers] = useState<AdminUser[]>([])
  const [communityMembers, setCommunityMembers] = useState<CommunityMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [tab, setTab] = useState<'users' | 'community'>('users')
  const [saving, setSaving] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/users')
      if (!res.ok) throw new Error('Acesso negado')
      const data = await res.json()
      setUsers(data.users)
      setCommunityMembers(data.community_members)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao carregar')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function handleUpdate(id: string, updates: { tier?: string; status?: string }) {
    setSaving(id)
    await fetch(`/api/admin/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
    setSaving(null)
    // Atualizar local sem refetch
    setUsers(prev => prev.map(u =>
      u.id === id ? { ...u, ...updates } : u
    ))
  }

  async function handleDelete(id: string, email: string) {
    if (!confirm(`Deletar "${email}" permanentemente?`)) return
    await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  // Stats
  const tierCounts = TIERS.reduce((acc, t) => {
    acc[t] = users.filter(u => u.tier === t).length
    return acc
  }, {} as Record<string, number>)

  return (
    <main style={{ background: T.bg, minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(32px, 5vw, 60px) 20px 0' }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <Shield size={20} color={T.gold} strokeWidth={1.5} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.gold }}>
              Painel Interno
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: 32, color: T.gold, direction: 'rtl', marginBottom: 4 }}>
            مجلس الإدارة
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: T.text, marginBottom: 0 }}>
            Super Admin
          </h1>
        </motion.div>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
            marginBottom: 32,
          }}
        >
          {[
            { label: 'Total', value: users.length, icon: <Users size={16} />, color: T.secondary },
            ...TIERS.map(t => ({
              label: TIER_LABELS[t],
              value: tierCounts[t] || 0,
              icon: t === 'guide' ? <Crown size={16} /> : <UserCheck size={16} />,
              color: TIER_COLORS[t],
            })),
            { label: 'Community', value: communityMembers.length, icon: <Activity size={16} />, color: '#7EB8D4' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 10, padding: '16px 14px', textAlign: 'center',
            }}>
              <div style={{ color: stat.color, display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{stat.icon}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: T.text }}>
                {loading ? '—' : stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: T.muted, marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Tabs ─────────────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: `1px solid ${T.border}`, paddingBottom: 0 }}>
          {[
            { key: 'users' as const, label: 'Usuários Supabase', count: users.length },
            { key: 'community' as const, label: 'Community Members', count: communityMembers.length },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '10px 16px',
                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: tab === t.key ? 600 : 400,
                color: tab === t.key ? T.text : T.muted,
                borderBottom: tab === t.key ? `2px solid ${T.gold}` : '2px solid transparent',
                marginBottom: -1, transition: 'color 0.2s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              {t.label}
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700,
                color: tab === t.key ? T.gold : T.muted,
                background: tab === t.key ? T.goldDim : 'transparent',
                padding: '2px 6px', borderRadius: 10, border: tab === t.key ? `1px solid ${T.gold}30` : 'none',
              }}>
                {t.count}
              </span>
            </button>
          ))}

          {/* Refresh */}
          <button
            onClick={load}
            disabled={loading}
            style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              cursor: 'pointer', color: T.muted, padding: '8px',
              display: 'flex', alignItems: 'center', gap: 4,
              fontFamily: 'var(--font-sans)', fontSize: 12,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = T.gold)}
            onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
          >
            <RefreshCw size={13} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            Atualizar
          </button>
        </div>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

        {/* ── Error ────────────────────────────────────────────────────────── */}
        {error && (
          <div style={{ padding: '12px 16px', borderRadius: 8, background: 'rgba(255,107,107,0.1)', border: `1px solid ${T.red}30`, color: T.red, fontSize: 13, marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* ── Tab: Usuários ─────────────────────────────────────────────────── */}
        {tab === 'users' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              overflow: 'hidden',
              overflowX: 'auto',
            }}
          >
            {loading ? (
              <div style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>
                Carregando...
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                <thead>
                  <tr style={{ background: T.elevated }}>
                    {['Usuário', 'Tier', 'Status', 'Entrou', 'Último acesso', ''].map(h => (
                      <th key={h} style={{
                        padding: '12px 14px', textAlign: 'left',
                        fontFamily: 'var(--font-sans)', fontSize: 10,
                        fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                        color: T.muted, borderBottom: `1px solid ${T.border}`,
                        whiteSpace: 'nowrap',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserRow
                      key={user.id}
                      user={user}
                      onUpdate={handleUpdate}
                      onDelete={handleDelete}
                    />
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>
                        Nenhum usuário encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </motion.div>
        )}

        {/* ── Tab: Community Members ────────────────────────────────────────── */}
        {tab === 'community' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              overflow: 'hidden',
              overflowX: 'auto',
            }}
          >
            {loading ? (
              <div style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>Carregando...</div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                <thead>
                  <tr style={{ background: T.elevated }}>
                    {['Email', 'WhatsApp', 'PRO', 'Perguntas usadas', 'Entrou'].map(h => (
                      <th key={h} style={{
                        padding: '12px 14px', textAlign: 'left',
                        fontFamily: 'var(--font-sans)', fontSize: 10,
                        fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                        color: T.muted, borderBottom: `1px solid ${T.border}`,
                        whiteSpace: 'nowrap',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {communityMembers.map((m, i) => (
                    <tr key={m.id} style={{ borderBottom: i < communityMembers.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                      <td style={{ padding: '14px 14px', verticalAlign: 'middle' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Mail size={13} color={T.muted} />
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.text }}>{m.email}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 14px', verticalAlign: 'middle' }}>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.secondary }}>
                          {m.phone || '—'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 14px', verticalAlign: 'middle' }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, padding: '3px 8px',
                          borderRadius: 4,
                          background: m.is_pro ? T.goldDim : 'transparent',
                          color: m.is_pro ? T.gold : T.muted,
                          border: m.is_pro ? `1px solid ${T.gold}30` : `1px solid ${T.border}`,
                        }}>
                          {m.is_pro ? 'PRO' : 'Free'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 14px', verticalAlign: 'middle' }}>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: T.secondary }}>
                          {m.questions_used} / 5
                        </span>
                      </td>
                      <td style={{ padding: '14px 14px', verticalAlign: 'middle' }}>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.muted }}>
                          {fmt(m.created_at)}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {communityMembers.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>
                        Nenhum membro da comunidade ainda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </motion.div>
        )}

        {/* ── Nota sobre confirmação de email ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: 32,
            padding: '16px 20px',
            background: 'rgba(201,168,76,0.06)',
            border: `1px solid ${T.gold}25`,
            borderRadius: 10,
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: T.secondary, lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: T.gold }}>⚠ Confirmação de email ativa:</strong>{' '}
            Usuários precisam confirmar email antes de logar. Para desativar:{' '}
            <strong style={{ color: T.text }}>Supabase Dashboard → Authentication → Providers → Email → desmarcar "Confirm email"</strong>.
            Após isso, signup cria sessão imediatamente.
          </p>
        </motion.div>

      </div>
    </main>
  )
}
