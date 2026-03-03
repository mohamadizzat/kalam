'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckSquare, Square } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

type Item = { id: string; label: string; arabic?: string }

const daily: Item[] = [
  { id: 'd1', label: 'Oração Fajr (antes do amanhecer)', arabic: 'صَلَاةُ الْفَجْر' },
  { id: 'd2', label: 'Suhoor (refeição pré-amanhecer)', arabic: 'سُحُور' },
  { id: 'd3', label: 'Niyyah do Jejum (intenção)', arabic: 'نِيَّةُ الصِّيَام' },
  { id: 'd4', label: 'Leitura do Quran (mínimo 1 página)', arabic: 'تِلَاوَةُ الْقُرْآن' },
  { id: 'd5', label: 'Dhikr matinal (após Fajr)', arabic: 'أَذْكَارُ الصَّبَاح' },
  { id: 'd6', label: 'Oração Dhuhr', arabic: 'صَلَاةُ الظُّهْر' },
  { id: 'd7', label: 'Oração Asr', arabic: 'صَلَاةُ الْعَصْر' },
  { id: 'd8', label: "Du'a do Iftar (antes de quebrar)", arabic: 'دُعَاءُ الْإِفْطَار' },
  { id: 'd9', label: 'Oração Maghrib', arabic: 'صَلَاةُ الْمَغْرِب' },
  { id: 'd10', label: 'Iftar (quebrar o jejum)', arabic: 'إِفْطَار' },
  { id: 'd11', label: 'Oração Isha', arabic: 'صَلَاةُ الْعِشَاء' },
  { id: 'd12', label: 'Tarawih (oração noturna especial)', arabic: 'صَلَاةُ التَّرَاوِيح' },
  { id: 'd13', label: 'Dhikr noturno (antes de dormir)', arabic: 'أَذْكَارُ الْمَسَاء' },
  { id: 'd14', label: 'Gratidão: listar 3 bênçãos do dia', arabic: 'الشُّكْر' },
  { id: 'd15', label: 'Dormir com Wudu', arabic: 'النَّوْمُ عَلَى طَهَارَة' },
]

const weekly: Item[] = [
  { id: 'w1', label: 'Completar 1 Juz do Quran' },
  { id: 'w2', label: 'Dar Sadaqah (caridade voluntária)' },
  { id: 'w3', label: 'Oração de Jumua (sexta-feira)' },
  { id: 'w4', label: 'Ler sobre um Profeta ou Companheiro' },
  { id: 'w5', label: 'Pedir perdão a alguém que magoou' },
  { id: 'w6', label: 'Visitar ou ligar para família/amigo' },
  { id: 'w7', label: 'Fazer du\'a especial pela Ummah' },
  { id: 'w8', label: 'Noite de Qiyam al-Layl (último terço da noite)' },
]

function getMotivation(pct: number) {
  if (pct === 0) return 'Bismillah — cada passo conta. Comece com o que conseguir.'
  if (pct < 30) return 'Um bom começo. Allah vê cada esforço, por menor que seja.'
  if (pct < 60) return 'Mashallah! Você está construindo seu Ramadan dia após dia.'
  if (pct < 90) return 'Quase lá! Cada ato de adoração neste mês vale muito mais.'
  if (pct < 100) return 'SubhanAllah — seu esforço é extraordinário. Continue!'
  return '🌙 Alhamdulillah! Dia completo. Que Allah aceite de você!'
}

export default function RamadanChecklistPage() {
  const today = new Date().toISOString().split('T')[0]
  const storageKey = `ramadan-${today}`

  const [checked, setChecked] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) setChecked(new Set(JSON.parse(saved)))
    } catch {}
  }, [storageKey])

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      localStorage.setItem(storageKey, JSON.stringify([...next]))
      return next
    })
  }

  const total = daily.length + weekly.length
  const done = checked.size
  const pct = Math.round((done / total) * 100)

  const Section = ({ title, items }: { title: string; items: Item[] }) => (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 16 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => {
          const isChecked = checked.has(item.id)
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => toggle(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: isChecked ? `${T.gold}12` : T.surface,
                border: `1px solid ${isChecked ? T.gold + '40' : T.border}`,
                borderRadius: 10, padding: '12px 16px', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.2s',
              }}
            >
              {isChecked
                ? <CheckSquare size={18} color={T.gold} style={{ flexShrink: 0 }} />
                : <Square size={18} color={T.muted} style={{ flexShrink: 0 }} />
              }
              <div style={{ flex: 1 }}>
                <span style={{ color: isChecked ? T.secondary : T.text, fontSize: 14, textDecoration: isChecked ? 'line-through' : 'none' }}>
                  {item.label}
                </span>
                {item.arabic && (
                  <span style={{ display: 'block', fontFamily: 'Amiri, serif', color: isChecked ? T.muted : T.gold, fontSize: 13, marginTop: 2 }}>
                    {item.arabic}
                  </span>
                )}
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 4 }}>Checklist do Ramadan</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 8 }}>رَمَضَان — Acompanhe suas práticas diárias e semanais</p>
          <p style={{ color: T.muted, fontSize: 13, marginBottom: 24 }}>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>

          {/* Progress */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ color: T.text, fontSize: 15, fontWeight: 600 }}>Progresso do dia</span>
              <span style={{ color: T.gold, fontSize: 22, fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{ background: T.border, borderRadius: 4, height: 6, overflow: 'hidden', marginBottom: 12 }}>
              <motion.div
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: '100%', background: T.gold, borderRadius: 4 }}
              />
            </div>
            <p style={{ color: T.secondary, fontSize: 13, margin: 0 }}>{getMotivation(pct)}</p>
          </div>

          <Section title="Práticas Diárias" items={daily} />
          <Section title="Práticas Semanais" items={weekly} />

          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <p style={{ color: T.muted, fontSize: 12 }}>
              Progresso salvo automaticamente para hoje · {done}/{total} concluídos
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
