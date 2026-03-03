'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Plus, Trash2, FileText, X } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

interface Nota {
  id: string
  titulo: string
  data: string
  pregador: string
  notas: string
  criadaEm: number
}

const STORAGE_KEY = 'kalam_notas_khutbah'

export default function NotasPage() {
  const [notas, setNotas] = useState<Nota[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ titulo: '', data: '', pregador: '', notas: '' })
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setNotas(JSON.parse(saved))
    } catch {}
  }, [])

  const save = (updated: Nota[]) => {
    setNotas(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const addNota = () => {
    if (!form.titulo.trim() || !form.notas.trim()) return
    const nova: Nota = {
      id: Date.now().toString(),
      titulo: form.titulo,
      data: form.data || new Date().toLocaleDateString('pt-BR'),
      pregador: form.pregador,
      notas: form.notas,
      criadaEm: Date.now(),
    }
    save([nova, ...notas])
    setForm({ titulo: '', data: '', pregador: '', notas: '' })
    setShowForm(false)
  }

  const deleteNota = (id: string) => {
    save(notas.filter(n => n.id !== id))
    if (expandedId === id) setExpandedId(null)
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8, boxSizing: 'border-box' as const,
    backgroundColor: T.elevated, border: `1px solid ${T.border}`,
    color: T.text, fontSize: 14, outline: 'none',
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <FileText size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Notas de Khutbah</h1>
          </div>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setShowForm(!showForm)} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, cursor: 'pointer',
            backgroundColor: T.gold, border: 'none', color: '#0D0B12', fontWeight: 700, fontSize: 14,
          }}>
            {showForm ? <X size={16} /> : <Plus size={16} />}
            {showForm ? 'Cancelar' : 'Nova Nota'}
          </motion.button>
        </div>
        <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>Salve e organize os sermões que marcaram sua jornada.</p>

        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
              <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <h3 style={{ margin: '0 0 20px', color: T.text, fontSize: 16 }}>Nova Nota de Khutbah</h3>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Título *</label>
                    <input value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })}
                      placeholder="Ex: A importância da paciência" style={inputStyle} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Data</label>
                      <input type="date" value={form.data} onChange={e => setForm({ ...form, data: e.target.value })}
                        style={{ ...inputStyle, colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Pregador (opcional)</label>
                      <input value={form.pregador} onChange={e => setForm({ ...form, pregador: e.target.value })}
                        placeholder="Nome do sheikh" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: T.secondary, fontSize: 12, marginBottom: 6 }}>Notas *</label>
                    <textarea value={form.notas} onChange={e => setForm({ ...form, notas: e.target.value })}
                      placeholder="Pontos principais do sermão, citações do Quran, reflexões pessoais..."
                      rows={5} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6 }} />
                  </div>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={addNota} style={{
                    padding: '12px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 15,
                    backgroundColor: form.titulo && form.notas ? T.gold : T.border,
                    color: form.titulo && form.notas ? '#0D0B12' : T.muted, border: 'none', transition: 'all 0.2s',
                  }}>Salvar Nota</motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {notas.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: T.muted }}>
            <FileText size={40} style={{ marginBottom: 16, opacity: 0.4 }} />
            <p style={{ fontSize: 15 }}>Nenhuma nota ainda. Registre o próximo sermão que te marcar.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            <AnimatePresence>
              {notas.map((nota) => (
                <motion.div key={nota.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95, height: 0 }} transition={{ duration: 0.2 }}>
                  <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
                    <button onClick={() => setExpandedId(expandedId === nota.id ? null : nota.id)} style={{
                      width: '100%', padding: '16px 20px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ color: T.text, fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{nota.titulo}</div>
                          <div style={{ display: 'flex', gap: 16, color: T.muted, fontSize: 12 }}>
                            <span>{nota.data}</span>
                            {nota.pregador && <span>Sheikh {nota.pregador}</span>}
                          </div>
                          {expandedId !== nota.id && (
                            <p style={{ color: T.secondary, fontSize: 13, marginTop: 8, marginBottom: 0, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                              {nota.notas}
                            </p>
                          )}
                        </div>
                        <button onClick={e => { e.stopPropagation(); deleteNota(nota.id) }}
                          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 4, color: T.muted, flexShrink: 0 }}>
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedId === nota.id && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                          <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${T.border}`, paddingTop: 16 }}>
                            <p style={{ color: T.secondary, fontSize: 14, lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap' }}>{nota.notas}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  )
}
