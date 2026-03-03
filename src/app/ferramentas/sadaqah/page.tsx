'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Heart, Plus, Trash2, X } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const CATEGORIAS = [
  { id: 'monetaria', label: 'Monetária', icon: '💰', color: '#C9A84C', desc: 'Doação em dinheiro' },
  { id: 'alimentacao', label: 'Alimentação', icon: '🍞', color: '#34D399', desc: 'Oferecer comida' },
  { id: 'sorriso', label: 'Sorriso', icon: '😊', color: '#60A5FA', desc: 'Sorrir para um irmão é sadaqah' },
  { id: 'conhecimento', label: 'Conhecimento', icon: '📚', color: '#A78BFA', desc: 'Compartilhar sabedoria útil' },
  { id: 'ajuda', label: 'Ajuda Física', icon: '🤝', color: '#F472B6', desc: 'Auxiliar alguém com esforço físico' },
  { id: 'dua', label: "Du'a por alguém", icon: '🤲', color: '#FB923C', desc: 'Fazer du\'a por um irmão em segredo' },
]

interface Ato {
  id: string
  categoria: string
  descricao: string
  valor: string
  data: string
  criadoEm: number
}

const STORAGE_KEY = 'kalam_sadaqah_tracker'

const getThisMonth = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

export default function SadaqahPage() {
  const [atos, setAtos] = useState<Ato[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ categoria: 'monetaria', descricao: '', valor: '', data: '' })

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s) setAtos(JSON.parse(s))
    } catch {}
  }, [])

  const persist = (updated: Ato[]) => {
    setAtos(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const addAto = () => {
    if (!form.descricao.trim()) return
    const novo: Ato = {
      id: Date.now().toString(),
      categoria: form.categoria,
      descricao: form.descricao,
      valor: form.valor,
      data: form.data || new Date().toLocaleDateString('pt-BR'),
      criadoEm: Date.now(),
    }
    persist([novo, ...atos])
    setForm({ categoria: 'monetaria', descricao: '', valor: '', data: '' })
    setShowForm(false)
  }

  const deleteAto = (id: string) => persist(atos.filter(a => a.id !== id))

  const stats = useMemo(() => {
    const month = getThisMonth()
    const thisMonth = atos.filter(a => {
      const d = new Date(a.criadoEm)
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` === month
    })
    const totalValor = thisMonth.filter(a => a.categoria === 'monetaria' && a.valor)
      .reduce((s, a) => s + parseFloat(a.valor.replace(',', '.') || '0'), 0)
    return { totalAtos: thisMonth.length, totalValor }
  }, [atos])

  const getCat = (id: string) => CATEGORIAS.find(c => c.id === id) || CATEGORIAS[0]

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8, boxSizing: 'border-box' as const,
    backgroundColor: T.elevated, border: `1px solid ${T.border}`, color: T.text, fontSize: 14, outline: 'none',
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Heart size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Tracker de Sadaqah</h1>
          </div>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setShowForm(!showForm)} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, cursor: 'pointer',
            backgroundColor: T.gold, border: 'none', color: '#0D0B12', fontWeight: 700, fontSize: 14,
          }}>
            {showForm ? <X size={16} /> : <Plus size={16} />}
            {showForm ? 'Cancelar' : 'Registrar'}
          </motion.button>
        </div>
        <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>
          "Todo ato de bondade é sadaqah." — (Muslim)
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
          <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: T.gold }}>{stats.totalAtos}</div>
            <div style={{ color: T.secondary, fontSize: 13, marginTop: 4 }}>Atos este mês</div>
          </div>
          <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '20px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: T.gold }}>
              {stats.totalValor > 0 ? `R$ ${stats.totalValor.toFixed(2).replace('.', ',')}` : 'R$ 0'}
            </div>
            <div style={{ color: T.secondary, fontSize: 13, marginTop: 4 }}>Doado em dinheiro este mês</div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
              <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <h3 style={{ margin: '0 0 20px', color: T.text, fontSize: 16 }}>Registrar Ato de Sadaqah</h3>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 8 }}>Categoria</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                      {CATEGORIAS.map(c => (
                        <button key={c.id} onClick={() => setForm({ ...form, categoria: c.id })} style={{
                          padding: '10px 8px', borderRadius: 8, cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s',
                          border: `1px solid ${form.categoria === c.id ? c.color : T.border}`,
                          backgroundColor: form.categoria === c.id ? c.color + '22' : T.elevated,
                          color: form.categoria === c.id ? c.color : T.muted, fontSize: 12,
                        }}>
                          <div style={{ fontSize: 20, marginBottom: 4 }}>{c.icon}</div>
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Descrição *</label>
                    <input value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })}
                      placeholder={getCat(form.categoria).desc} style={inputStyle} />
                  </div>
                  {form.categoria === 'monetaria' && (
                    <div>
                      <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Valor (R$)</label>
                      <input value={form.valor} onChange={e => setForm({ ...form, valor: e.target.value })}
                        placeholder="0,00" type="number" step="0.01" style={inputStyle} />
                    </div>
                  )}
                  <div>
                    <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Data</label>
                    <input type="date" value={form.data} onChange={e => setForm({ ...form, data: e.target.value })}
                      style={{ ...inputStyle, colorScheme: 'dark' }} />
                  </div>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={addAto} style={{
                    padding: '12px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 15,
                    backgroundColor: form.descricao ? T.gold : T.border,
                    color: form.descricao ? '#0D0B12' : T.muted, border: 'none', transition: 'all 0.2s',
                  }}>Registrar Sadaqah</motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: 'grid', gap: 10 }}>
          <AnimatePresence>
            {atos.map(ato => {
              const cat = getCat(ato.categoria)
              return (
                <motion.div key={ato.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
                  <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ fontSize: 24, flexShrink: 0 }}>{cat.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                        <span style={{ color: T.text, fontSize: 14, fontWeight: 600 }}>{ato.descricao}</span>
                        <span style={{ fontSize: 11, padding: '1px 7px', borderRadius: 8, backgroundColor: cat.color + '22', color: cat.color }}>{cat.label}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 12, color: T.muted, fontSize: 12 }}>
                        <span>{ato.data}</span>
                        {ato.valor && <span style={{ color: T.gold }}>R$ {ato.valor}</span>}
                      </div>
                    </div>
                    <button onClick={() => deleteAto(ato.id)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: T.muted, padding: 4 }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
          {atos.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: T.muted }}>
              <Heart size={40} style={{ marginBottom: 16, opacity: 0.4 }} />
              <p>Nenhum ato registrado ainda. Comece hoje — um sorriso já é sadaqah.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
