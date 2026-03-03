'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { journalQuestions } from '@/lib/data/journal-questions'
import { EmptyState } from '@/components/shared/EmptyState'
import { BackButton } from '@/components/shared/BackButton'
import { useAuth } from '@/providers/auth-provider'
import { createClient } from '@/lib/supabase/client'

type JournalEntry = {
  id: string
  date: string
  question: string
  content: string
  emotion: string
  createdAt: string
}

const EMOTIONS = [
  { label: 'Grato', emoji: '🤲' },
  { label: 'Em paz', emoji: '🕊️' },
  { label: 'Esperancoso', emoji: '🌅' },
  { label: 'Conectado', emoji: '✨' },
  { label: 'Determinado', emoji: '🔥' },
  { label: 'Ansioso', emoji: '🌊' },
  { label: 'Confuso', emoji: '🌫️' },
  { label: 'Triste', emoji: '🌧️' },
]

export function JournalClient() {
  const { user } = useAuth()
  const [content, setContent] = useState('')
  const [emotion, setEmotion] = useState('')
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [view, setView] = useState<'write' | 'history'>('write')
  const [saved, setSaved] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const todayQuestion = journalQuestions[new Date().getDate() % journalQuestions.length]

  useEffect(() => {
    const stored = localStorage.getItem('kalam-journal')
    if (stored) setEntries(JSON.parse(stored))
  }, [])

  const handleSave = () => {
    if (!content.trim()) return
    const today = new Date().toISOString().split('T')[0]
    const entry: JournalEntry = {
      id: crypto.randomUUID(),
      date: today,
      question: todayQuestion,
      content: content.trim(),
      emotion,
      createdAt: new Date().toISOString(),
    }
    const updated = [entry, ...entries]
    setEntries(updated)
    localStorage.setItem('kalam-journal', JSON.stringify(updated))

    // Sync to Supabase
    if (user?.id) {
      const supabase = createClient()
      supabase.from('user_journal').upsert(
        {
          user_id: user.id,
          entry_date: today,
          emotion: emotion || null,
          reflection: content.trim(),
          gratitude: null,
        },
        { onConflict: 'user_id,entry_date' }
      ).then(() => {/* silent fail */})
    }

    setContent('')
    setEmotion('')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T12:00:00')
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }} className="px-6 py-8">
      {/* Back link */}
      <BackButton href="/a-alma" label="A Alma" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginTop: '16px' }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: '#F0EBE2',
          }}
        >
          Journal Espiritual
        </h1>
      </motion.div>

      {/* Tab toggle */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          marginTop: '24px',
          padding: '4px',
          background: '#161220',
          borderRadius: '10px',
          border: '1px solid #272230',
        }}
      >
        <button
          onClick={() => setView('write')}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            background: view === 'write' ? 'rgba(201,168,76,0.15)' : 'transparent',
            color: view === 'write' ? '#C9A84C' : '#7A7870',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Escrever
        </button>
        <button
          onClick={() => setView('history')}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            background: view === 'history' ? 'rgba(201,168,76,0.15)' : 'transparent',
            color: view === 'history' ? '#C9A84C' : '#7A7870',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Historico
        </button>
      </div>

      {/* Write view */}
      {view === 'write' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: '32px' }}
        >
          {/* Guided question */}
          <div style={{ marginBottom: '32px' }}>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#7A7870',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Reflexao de hoje
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: '#F0EBE2',
                lineHeight: 1.6,
              }}
            >
              {todayQuestion}
            </p>
          </div>

          {/* Text area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escreva aqui. So voce e Deus leem isso."
            style={{
              width: '100%',
              minHeight: '200px',
              padding: '20px',
              background: '#161220',
              border: '1px solid #272230',
              borderRadius: '12px',
              color: '#F0EBE2',
              fontSize: '16px',
              lineHeight: 1.75,
              resize: 'vertical',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
            }}
          />

          {/* Emotion picker */}
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '13px', color: '#7A7870', marginBottom: '12px' }}>
              Como voce se sente?
            </p>
            <div className="flex flex-wrap gap-2">
              {EMOTIONS.map((e) => (
                <button
                  key={e.label}
                  onClick={() => setEmotion(e.label)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background:
                      emotion === e.label ? 'rgba(201,168,76,0.15)' : '#161220',
                    border: `1px solid ${emotion === e.label ? '#C9A84C' : '#272230'}`,
                    color: emotion === e.label ? '#C9A84C' : '#7A7870',
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {e.emoji} {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={!content.trim()}
            style={{
              marginTop: '24px',
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              background: content.trim() ? '#C9A84C' : '#272230',
              color: content.trim() ? '#0D0B12' : '#7A7870',
              fontSize: '16px',
              fontWeight: 600,
              cursor: content.trim() ? 'pointer' : 'default',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Salvar reflexao
          </button>

          {/* Saved confirmation */}
          <AnimatePresence>
            {saved && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: 'center',
                  color: '#C9A84C',
                  fontSize: '15px',
                  fontWeight: 600,
                  marginTop: '16px',
                }}
              >
                Reflexao salva ✓
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* History view */}
      {view === 'history' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: '32px' }}
        >
          {entries.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="Seu diario esta vazio"
              description="Comece sua primeira reflexao. So voce e Deus leem isso."
              actionLabel="Escrever agora"
              onAction={() => setView('write')}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {entries.map((entry) => {
                const isExpanded = expandedId === entry.id
                return (
                  <motion.div
                    key={entry.id}
                    layout
                    onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                    style={{
                      padding: '20px',
                      borderRadius: '12px',
                      background: '#161220',
                      border: '1px solid #272230',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <p style={{ fontSize: '13px', color: '#7A7870' }}>
                        {formatDate(entry.date)}
                      </p>
                      {entry.emotion && (
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#C9A84C',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            background: 'rgba(201,168,76,0.1)',
                            border: '1px solid rgba(201,168,76,0.2)',
                          }}
                        >
                          {EMOTIONS.find((e) => e.label === entry.emotion)?.emoji}{' '}
                          {entry.emotion}
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '15px',
                        color: '#B3B0A6',
                        marginTop: '10px',
                        fontStyle: 'italic',
                      }}
                    >
                      {entry.question}
                    </p>

                    <p
                      style={{
                        fontSize: '14px',
                        color: '#F0EBE2',
                        marginTop: '8px',
                        lineHeight: 1.6,
                      }}
                    >
                      {isExpanded
                        ? entry.content
                        : entry.content.length > 100
                          ? entry.content.slice(0, 100) + '...'
                          : entry.content}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>
      )}
    </main>
  )
}
