'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Music, Play } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const CATEGORIES = ['Todos', 'Manhã', 'Elogio ao Profeta', 'Reflexão', 'Ramadan', 'Geral'] as const
type Category = typeof CATEGORIES[number]

const NASHEEDS = [
  { id: 1, title: 'Asma Allah', artist: 'Sami Yusuf', category: 'Reflexão', duration: '5:12', url: 'https://www.youtube.com/watch?v=wjzFb4F7w_g', desc: 'Os nomes de Allah cantados com beleza e devoção' },
  { id: 2, title: 'Ya Nabi Salam Alayka', artist: 'Maher Zain', category: 'Elogio ao Profeta', duration: '4:55', url: 'https://www.youtube.com/watch?v=RuGGDiVQl1o', desc: 'Saudação ao Profeta ﷺ, uma das mais amadas do mundo islâmico' },
  { id: 3, title: 'Forgive Me', artist: 'Maher Zain', category: 'Reflexão', duration: '4:28', url: 'https://www.youtube.com/watch?v=fTVmfMsHZpg', desc: 'Pedido de perdão a Allah com melodia tocante' },
  { id: 4, title: 'One Day', artist: 'Maher Zain', category: 'Geral', duration: '4:16', url: 'https://www.youtube.com/watch?v=dAfDPHNvuRE', desc: 'Esperança por um mundo de paz e justiça' },
  { id: 5, title: 'Thank You Allah', artist: 'Maher Zain', category: 'Manhã', duration: '4:02', url: 'https://www.youtube.com/watch?v=pVBqaZPPYRE', desc: 'Gratidão a Allah por todas as bênçãos da vida' },
  { id: 6, title: 'Allahi Allah Kiya Karo', artist: 'Ahmed Bukhatir', category: 'Elogio ao Profeta', duration: '5:40', url: 'https://www.youtube.com/watch?v=MriREGJo4jk', desc: 'Clássico nasheed em árabe e urdu exaltando Allah' },
  { id: 7, title: 'Subhanallah', artist: 'Mesut Kurtis', category: 'Manhã', duration: '4:33', url: 'https://www.youtube.com/watch?v=6V1aMa7BoPo', desc: 'Gloria a Allah no amanhecer do dia' },
  { id: 8, title: 'Burdah', artist: 'Mesut Kurtis', category: 'Elogio ao Profeta', duration: '5:20', url: 'https://www.youtube.com/watch?v=yKpfRSMwXNE', desc: 'Poema do Imam Al-Busiri em louvor ao Profeta ﷺ' },
  { id: 9, title: 'Tala al-Badru Alayna', artist: 'Ahmed Bukhatir', category: 'Elogio ao Profeta', duration: '3:45', url: 'https://www.youtube.com/watch?v=jBqFYqXcnN0', desc: 'O canto que o Madinah entoou ao receber o Profeta ﷺ' },
  { id: 10, title: 'Free', artist: 'Sami Yusuf', category: 'Reflexão', duration: '5:08', url: 'https://www.youtube.com/watch?v=Z7MkCeRFaIA', desc: 'A liberdade que o Islam traz ao coração humano' },
  { id: 11, title: 'Make Me Strong', artist: 'Sami Yusuf', category: 'Geral', duration: '4:47', url: 'https://www.youtube.com/watch?v=VrZY0eCFG18', desc: 'Du\'a pedindo força e firmeza na fé' },
  { id: 12, title: 'Ramadan', artist: 'Maher Zain', category: 'Ramadan', duration: '4:30', url: 'https://www.youtube.com/watch?v=8BDsLMkAOXQ', desc: 'Celebração do mês sagrado do Ramadan' },
  { id: 13, title: 'Number One For Me', artist: 'Maher Zain', category: 'Geral', duration: '3:58', url: 'https://www.youtube.com/watch?v=1BMhIOBBRWk', desc: 'Homenagem à mãe — honor àquela que nos criou' },
  { id: 14, title: 'Muhammad ﷺ', artist: 'Maher Zain', category: 'Elogio ao Profeta', duration: '4:12', url: 'https://www.youtube.com/watch?v=veDCXaAuASE', desc: 'Homenagem ao último e maior dos profetas' },
  { id: 15, title: 'Guide Us', artist: 'Native Deen', category: 'Reflexão', duration: '4:05', url: 'https://www.youtube.com/watch?v=6BRX5oHrIaE', desc: 'Pedido de guia no caminho reto — Sirat al-Mustaqim' },
  { id: 16, title: 'Not Afraid to Stand Alone', artist: 'Native Deen', category: 'Geral', duration: '3:50', url: 'https://www.youtube.com/watch?v=rKaHbsEcHOM', desc: 'Firmeza na fé mesmo diante da pressão social' },
  { id: 17, title: 'Salawat', artist: 'Mesut Kurtis', category: 'Elogio ao Profeta', duration: '4:55', url: 'https://www.youtube.com/watch?v=4WaJr3dPKqQ', desc: 'Bençãos ao Profeta ﷺ com voz e coração' },
  { id: 18, title: 'Dua Khatam al-Quran', artist: 'Ahmed Bukhatir', category: 'Ramadan', duration: '6:10', url: 'https://www.youtube.com/watch?v=KS-_tOOBGmQ', desc: 'Du\'a especial da conclusão da recitação do Quran' },
  { id: 19, title: 'Al-Fajr', artist: 'Sami Yusuf', category: 'Manhã', duration: '5:22', url: 'https://www.youtube.com/watch?v=4Hj1CGT0eDo', desc: 'O alvorecer — despertar espiritual no amanhecer' },
  { id: 20, title: 'Open Your Eyes', artist: 'Sami Yusuf', category: 'Reflexão', duration: '4:48', url: 'https://www.youtube.com/watch?v=9n-E7VGj18M', desc: 'Convite para enxergar a verdade com o coração' },
]

export default function NasheedsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeCategory === 'Todos'
    ? NASHEEDS
    : NASHEEDS.filter(n => n.category === activeCategory)

  const categoryColors: Record<string, string> = {
    'Manhã': '#C9A84C', 'Elogio ao Profeta': '#A78BFA',
    'Reflexão': '#34D399', 'Ramadan': '#F472B6', 'Geral': '#60A5FA',
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Music size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Nasheeds</h1>
          </div>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 32 }}>
            Músicas islâmicas sem instrumentos — alimento para o coração e a alma.
          </p>
        </motion.div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '6px 16px', borderRadius: 20, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s',
              border: `1px solid ${activeCategory === cat ? T.gold : T.border}`,
              backgroundColor: activeCategory === cat ? T.gold + '22' : T.surface,
              color: activeCategory === cat ? T.gold : T.secondary,
            }}>{cat}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ display: 'grid', gap: 12 }}>
              {filtered.map((nasheed, i) => (
                <motion.a key={nasheed.id} href={nasheed.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  onMouseEnter={() => setHoveredId(nasheed.id)} onMouseLeave={() => setHoveredId(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                    backgroundColor: hoveredId === nasheed.id ? T.elevated : T.surface,
                    border: `1px solid ${hoveredId === nasheed.id ? T.gold + '44' : T.border}`,
                    borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
                  }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: hoveredId === nasheed.id ? T.gold + '22' : T.elevated, flexShrink: 0, transition: 'all 0.2s',
                  }}>
                    {hoveredId === nasheed.id ? <Play size={18} color={T.gold} fill={T.gold} /> : <Music size={18} color={T.muted} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                      <span style={{ color: T.text, fontWeight: 600, fontSize: 15 }}>{nasheed.title}</span>
                      <span style={{
                        padding: '2px 8px', borderRadius: 10, fontSize: 11,
                        backgroundColor: (categoryColors[nasheed.category] || T.gold) + '22',
                        color: categoryColors[nasheed.category] || T.gold,
                      }}>{nasheed.category}</span>
                    </div>
                    <div style={{ color: T.secondary, fontSize: 13 }}>{nasheed.artist}</div>
                    <div style={{ color: T.muted, fontSize: 12, marginTop: 2 }}>{nasheed.desc}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                    <span style={{ color: T.muted, fontSize: 13 }}>{nasheed.duration}</span>
                    <ExternalLink size={14} color={hoveredId === nasheed.id ? T.gold : T.muted} style={{ transition: 'color 0.2s' }} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p style={{ textAlign: 'center', color: T.muted, fontSize: 12, marginTop: 40 }}>
          Clique em qualquer nasheed para abrir no YouTube
        </p>
      </div>
    </main>
  )
}
