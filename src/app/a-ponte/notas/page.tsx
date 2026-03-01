'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, PenLine, Trash2, Tag, Plus, X, Download, ArrowDownUp, Check } from 'lucide-react'

interface BridgeNote {
  id: string
  text: string
  tags: string[]
  sourceRef?: string
  createdAt: string
}

const STORAGE_KEY = 'kalam-bridge-notes'

function loadNotes(): BridgeNote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function saveNotes(notes: BridgeNote[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)) } catch {}
}

const SUGGESTED_TAGS = ['Convergência', 'Divergência', 'Reflexão', 'Profeta', 'Tema', 'Versículo']

export default function NotasPage() {
  const [notes, setNotes] = useState<BridgeNote[]>([])
  const [showEditor, setShowEditor] = useState(false)
  const [editText, setEditText] = useState('')
  const [editTags, setEditTags] = useState<string[]>([])
  const [editRef, setEditRef] = useState('')
  const [filterTag, setFilterTag] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [exportCopied, setExportCopied] = useState(false)

  useEffect(() => { setNotes(loadNotes()) }, [])

  const handleSave = useCallback(() => {
    if (!editText.trim()) return
    const newNote: BridgeNote = {
      id: Date.now().toString(36),
      text: editText.trim(),
      tags: editTags,
      sourceRef: editRef.trim() || undefined,
      createdAt: new Date().toISOString(),
    }
    const updated = [newNote, ...notes]
    setNotes(updated)
    saveNotes(updated)
    setEditText('')
    setEditTags([])
    setEditRef('')
    setShowEditor(false)
  }, [editText, editTags, editRef, notes])

  const handleDelete = useCallback((id: string) => {
    const updated = notes.filter((n) => n.id !== id)
    setNotes(updated)
    saveNotes(updated)
  }, [notes])

  const toggleTag = (tag: string) => {
    setEditTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleExport = useCallback(() => {
    if (notes.length === 0) return
    const text = notes.map((n) => {
      const date = new Date(n.createdAt).toLocaleDateString('pt-BR')
      const tags = n.tags.length > 0 ? `[${n.tags.join(', ')}]` : ''
      const ref = n.sourceRef ? `Ref: ${n.sourceRef}` : ''
      return `${date} ${tags}\n${n.text}\n${ref}\n---`
    }).join('\n\n')
    navigator.clipboard.writeText(`Minhas Notas — A Ponte (Kalam)\n\n${text}`).then(() => {
      setExportCopied(true)
      setTimeout(() => setExportCopied(false), 2500)
    })
  }, [notes])

  const sortedNotes = [...notes].sort((a, b) => {
    const da = new Date(a.createdAt).getTime()
    const db = new Date(b.createdAt).getTime()
    return sortOrder === 'newest' ? db - da : da - db
  })

  const filtered = filterTag
    ? sortedNotes.filter((n) => n.tags.includes(filterTag))
    : sortedNotes

  const allTags = [...new Set(notes.flatMap((n) => n.tags))]
  const tagCounts: Record<string, number> = {}
  notes.forEach((n) => n.tags.forEach((t) => { tagCounts[t] = (tagCounts[t] || 0) + 1 }))

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px 100px' }}>

        <Link href="/a-ponte" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: '#7A7870', textDecoration: 'none', marginBottom: 32,
        }}>
          <ArrowLeft size={14} /> A Ponte
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 24 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700,
                color: '#F0EBE2', letterSpacing: '-0.02em',
              }}>
                Minhas Notas
              </h1>
              <p style={{ color: '#B3B0A6', fontSize: 15, marginTop: 8 }}>
                {notes.length} {notes.length === 1 ? 'reflexão' : 'reflexões'} salvas
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {notes.length > 0 && (
                <button
                  onClick={handleExport}
                  title="Exportar notas"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '10px 14px', borderRadius: 999,
                    background: exportCopied ? 'rgba(34,197,94,0.1)' : 'transparent',
                    border: `1px solid ${exportCopied ? 'rgba(34,197,94,0.3)' : '#272230'}`,
                    color: exportCopied ? '#22c55e' : '#7A7870', fontSize: 13, cursor: 'pointer',
                    fontFamily: 'var(--font-sans)', transition: 'all 0.2s ease',
                  }}
                >
                  {exportCopied ? <Check size={14} /> : <Download size={14} />}
                  {exportCopied ? 'Copiado!' : 'Exportar'}
                </button>
              )}
              <button
                onClick={() => setShowEditor(!showEditor)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '10px 16px', borderRadius: 999,
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  color: '#C9A84C', fontSize: 13, cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <Plus size={14} /> Nova nota
              </button>
            </div>
          </div>
        </motion.div>

        {/* Editor */}
        <AnimatePresence>
          {showEditor && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', marginBottom: 24 }}
            >
              <div style={{
                padding: 24, borderRadius: 16,
                background: '#161220', border: '1px solid rgba(201,168,76,0.15)',
              }}>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Escreva sua reflexão..."
                  rows={4}
                  style={{
                    width: '100%', padding: 16, borderRadius: 12,
                    background: '#0D0B12', border: '1px solid #272230',
                    color: '#F0EBE2', fontSize: 15, fontFamily: 'var(--font-sans)',
                    lineHeight: 1.7, resize: 'vertical', outline: 'none',
                  }}
                />

                <p style={{
                  textAlign: 'right', fontSize: 11, color: '#7A7870',
                  marginTop: 4, fontFamily: 'var(--font-sans)',
                }}>
                  {editText.length} caracteres
                </p>

                <input
                  type="text"
                  value={editRef}
                  onChange={(e) => setEditRef(e.target.value)}
                  placeholder="Referência (opcional) — ex: Ibrahim, Monoteísmo"
                  style={{
                    width: '100%', padding: '10px 16px', borderRadius: 8,
                    background: '#0D0B12', border: '1px solid #272230',
                    color: '#F0EBE2', fontSize: 13, fontFamily: 'var(--font-sans)',
                    marginTop: 12, outline: 'none',
                  }}
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                  {SUGGESTED_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      style={{
                        padding: '4px 12px', borderRadius: 999, fontSize: 12,
                        border: `1px solid ${editTags.includes(tag) ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                        background: editTags.includes(tag) ? 'rgba(201,168,76,0.08)' : 'transparent',
                        color: editTags.includes(tag) ? '#C9A84C' : '#7A7870',
                        cursor: 'pointer', fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setShowEditor(false)}
                    style={{
                      padding: '10px 16px', borderRadius: 8,
                      background: 'transparent', border: '1px solid #272230',
                      color: '#7A7870', fontSize: 13, cursor: 'pointer',
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!editText.trim()}
                    style={{
                      padding: '10px 20px', borderRadius: 8,
                      background: editText.trim() ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.05)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: editText.trim() ? '#C9A84C' : '#7A7870',
                      fontSize: 13, cursor: editText.trim() ? 'pointer' : 'default',
                    }}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter tags + sort */}
        {allTags.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
              <button
                onClick={() => setFilterTag(null)}
                style={{
                  padding: '4px 12px', borderRadius: 999, fontSize: 12,
                  border: `1px solid ${!filterTag ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                  background: !filterTag ? 'rgba(201,168,76,0.08)' : 'transparent',
                  color: !filterTag ? '#C9A84C' : '#7A7870',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                Todas <span style={{ fontSize: 10, opacity: 0.6 }}>{notes.length}</span>
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(filterTag === tag ? null : tag)}
                  style={{
                    padding: '4px 12px', borderRadius: 999, fontSize: 12,
                    border: `1px solid ${filterTag === tag ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                    background: filterTag === tag ? 'rgba(201,168,76,0.08)' : 'transparent',
                    color: filterTag === tag ? '#C9A84C' : '#7A7870',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                  }}
                >
                  {tag} <span style={{ fontSize: 10, opacity: 0.6 }}>{tagCounts[tag] || 0}</span>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                onClick={() => setSortOrder('newest')}
                style={{
                  padding: '4px 12px', borderRadius: 999, fontSize: 11,
                  border: `1px solid ${sortOrder === 'newest' ? 'rgba(201,168,76,0.3)' : '#272230'}`,
                  background: sortOrder === 'newest' ? 'rgba(201,168,76,0.06)' : 'transparent',
                  color: sortOrder === 'newest' ? '#C9A84C' : '#7A7870',
                  cursor: 'pointer', fontFamily: 'var(--font-sans)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                <ArrowDownUp size={11} /> Mais recente
              </button>
              <button
                onClick={() => setSortOrder('oldest')}
                style={{
                  padding: '4px 12px', borderRadius: 999, fontSize: 11,
                  border: `1px solid ${sortOrder === 'oldest' ? 'rgba(201,168,76,0.3)' : '#272230'}`,
                  background: sortOrder === 'oldest' ? 'rgba(201,168,76,0.06)' : 'transparent',
                  color: sortOrder === 'oldest' ? '#C9A84C' : '#7A7870',
                  cursor: 'pointer', fontFamily: 'var(--font-sans)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                <ArrowDownUp size={11} /> Mais antiga
              </button>
            </div>
          </div>
        )}

        {/* Notes list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((note, i) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                padding: '20px', borderRadius: 12,
                background: '#161220', border: '1px solid #272230',
              }}
            >
              <p style={{
                fontSize: 15, color: '#F0EBE2', lineHeight: 1.7,
                whiteSpace: 'pre-wrap',
              }}>
                {note.text}
              </p>

              {note.sourceRef && (
                <p style={{ fontSize: 12, color: '#C9A84C', marginTop: 10, fontStyle: 'italic' }}>
                  {note.sourceRef}
                </p>
              )}

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: 12, paddingTop: 12, borderTop: '1px solid #272230',
              }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {note.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: 10, padding: '2px 8px', borderRadius: 999,
                      background: 'rgba(201,168,76,0.06)', color: '#B3B0A6',
                      border: '1px solid rgba(201,168,76,0.1)',
                    }}>
                      {tag}
                    </span>
                  ))}
                  <span style={{ fontSize: 11, color: '#7A7870' }}>
                    {new Date(note.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(note.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#7A7870', padding: 4,
                  }}
                  title="Apagar nota"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {notes.length === 0 && !showEditor && (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <PenLine size={32} style={{ color: '#7A7870', margin: '0 auto 16px' }} />
            <p style={{ fontSize: 16, color: '#B3B0A6', marginBottom: 8 }}>
              Nenhuma nota ainda
            </p>
            <p style={{ fontSize: 14, color: '#7A7870', lineHeight: 1.6 }}>
              Ao estudar A Ponte, salve suas reflexões aqui.
              Elas ficam guardadas no seu dispositivo.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
