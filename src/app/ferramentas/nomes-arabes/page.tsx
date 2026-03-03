'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

type Name = { arabic: string; name: string; transliteration: string; meaning: string; category: string; gender: 'm' | 'f' }

const names: Name[] = [
  // Masculinos
  { arabic: 'أَحْمَد', name: 'Ahmad', transliteration: 'Ah-mad', meaning: 'O mais louvado, aquele que mais louva Allah', category: 'divino', gender: 'm' },
  { arabic: 'إِبْرَاهِيم', name: 'Ibrahim', transliteration: 'Ib-ra-heem', meaning: 'Pai de muitas nações; nome do Profeta Abraão', category: 'profeta', gender: 'm' },
  { arabic: 'يُوسُف', name: 'Yusuf', transliteration: 'Yu-suf', meaning: 'Allah aumenta; nome do Profeta José', category: 'profeta', gender: 'm' },
  { arabic: 'عُمَر', name: 'Omar', transliteration: 'O-mar', meaning: 'Florescente, longa vida, eloquente', category: 'virtude', gender: 'm' },
  { arabic: 'عَلِي', name: 'Ali', transliteration: 'A-li', meaning: 'Elevado, sublime, nobre', category: 'virtude', gender: 'm' },
  { arabic: 'حَسَن', name: 'Hassan', transliteration: 'Has-san', meaning: 'Belo, bondoso, bom', category: 'virtude', gender: 'm' },
  { arabic: 'خَالِد', name: 'Khalid', transliteration: 'Kha-lid', meaning: 'Eterno, imortal, duradouro', category: 'virtude', gender: 'm' },
  { arabic: 'طَارِق', name: 'Tariq', transliteration: 'Ta-riq', meaning: 'Estrela matutina, aquele que bate à porta', category: 'natureza', gender: 'm' },
  { arabic: 'نُور', name: 'Nour', transliteration: 'Noor', meaning: 'Luz, luminosidade', category: 'natureza', gender: 'm' },
  { arabic: 'رَيَّان', name: 'Rayan', transliteration: 'Ray-yan', meaning: 'Porta do paraíso para os que jejuam', category: 'divino', gender: 'm' },
  { arabic: 'إِدْرِيس', name: 'Idris', transliteration: 'Id-rees', meaning: 'Estudioso, sábio; nome de Profeta', category: 'profeta', gender: 'm' },
  { arabic: 'صَالِح', name: 'Saleh', transliteration: 'Sa-leh', meaning: 'Justo, virtuoso, reto', category: 'virtude', gender: 'm' },
  { arabic: 'زَيْد', name: 'Zaid', transliteration: 'Za-id', meaning: 'Crescimento, abundância', category: 'virtude', gender: 'm' },
  { arabic: 'مُحَمَّد', name: 'Muhammad', transliteration: 'Mu-ham-mad', meaning: 'O muito louvado; nome do Profeta ﷺ', category: 'profeta', gender: 'm' },
  { arabic: 'عَبْدُاللَّه', name: 'Abdullah', transliteration: 'Ab-dul-lah', meaning: 'Servo de Allah', category: 'divino', gender: 'm' },
  { arabic: 'مُوسَى', name: 'Musa', transliteration: 'Moo-sa', meaning: 'Nome do Profeta Moisés; salvo das águas', category: 'profeta', gender: 'm' },
  { arabic: 'عِيسَى', name: 'Isa', transliteration: 'Ee-sa', meaning: 'Nome do Profeta Jesus', category: 'profeta', gender: 'm' },
  { arabic: 'سَعْد', name: 'Saad', transliteration: 'Saad', meaning: 'Felicidade, boa fortuna, sucesso', category: 'virtude', gender: 'm' },
  { arabic: 'بِلَال', name: 'Bilal', transliteration: 'Bi-lal', meaning: 'Água que sacia a sede; fresco', category: 'natureza', gender: 'm' },
  { arabic: 'حُسَيْن', name: 'Hussein', transliteration: 'Hus-sein', meaning: 'Belo, o bom (diminutivo de Hassan)', category: 'virtude', gender: 'm' },
  { arabic: 'جَابِر', name: 'Jabir', transliteration: 'Ja-bir', meaning: 'Consolador, aquele que traz conforto', category: 'virtude', gender: 'm' },
  { arabic: 'رَاشِد', name: 'Rashid', transliteration: 'Ra-shid', meaning: 'Bem-guiado, sábio, prudente', category: 'virtude', gender: 'm' },
  { arabic: 'فَارُوق', name: 'Faruq', transliteration: 'Fa-ruq', meaning: 'Aquele que distingue o certo do errado', category: 'virtude', gender: 'm' },
  { arabic: 'كَرِيم', name: 'Karim', transliteration: 'Ka-reem', meaning: 'Generoso, nobre, magnífico', category: 'virtude', gender: 'm' },
  { arabic: 'يَاسِر', name: 'Yaser', transliteration: 'Ya-sir', meaning: 'Fácil, abastado, próspero', category: 'virtude', gender: 'm' },
  { arabic: 'سُلَيْمَان', name: 'Suleiman', transliteration: 'Su-lei-man', meaning: 'Pacífico; nome do Profeta Salomão', category: 'profeta', gender: 'm' },
  { arabic: 'أَيُّوب', name: 'Ayub', transliteration: 'A-yub', meaning: 'Paciente; nome do Profeta Jó', category: 'profeta', gender: 'm' },
  { arabic: 'هَارُون', name: 'Harun', transliteration: 'Ha-run', meaning: 'Guerreiro exaltado; nome de Profeta', category: 'profeta', gender: 'm' },
  { arabic: 'جُبَيْر', name: 'Jubair', transliteration: 'Ju-bair', meaning: 'Reparador, restaurador', category: 'virtude', gender: 'm' },
  { arabic: 'تَمِيم', name: 'Tamim', transliteration: 'Ta-meem', meaning: 'Perfeito, completo, forte', category: 'virtude', gender: 'm' },
  // Femininos
  { arabic: 'عَائِشَة', name: 'Aisha', transliteration: 'Aa-i-sha', meaning: 'Vivaz, próspera, bem-viva', category: 'virtude', gender: 'f' },
  { arabic: 'فَاطِمَة', name: 'Fatima', transliteration: 'Fa-ti-ma', meaning: 'Que se abstém; a que foi desmamada', category: 'virtude', gender: 'f' },
  { arabic: 'مَرْيَم', name: 'Maryam', transliteration: 'Mar-yam', meaning: 'Devota, serva; nome da mãe de Isa', category: 'divino', gender: 'f' },
  { arabic: 'نُور', name: 'Nour', transliteration: 'Noor', meaning: 'Luz divina, luminosidade', category: 'natureza', gender: 'f' },
  { arabic: 'لَيْلَى', name: 'Layla', transliteration: 'Lay-la', meaning: 'Noite, beleza noturna, intoxicante', category: 'natureza', gender: 'f' },
  { arabic: 'يَاسَمِين', name: 'Yasmin', transliteration: 'Yas-meen', meaning: 'Jasmim, flor perfumada', category: 'natureza', gender: 'f' },
  { arabic: 'أَمِيرَة', name: 'Amira', transliteration: 'A-mee-ra', meaning: 'Princesa, líder, nobre', category: 'virtude', gender: 'f' },
  { arabic: 'هَنَاء', name: 'Hana', transliteration: 'Ha-na', meaning: 'Felicidade, contentamento, bênção', category: 'virtude', gender: 'f' },
  { arabic: 'دِينَا', name: 'Dina', transliteration: 'Dee-na', meaning: 'Religiosa, fiel, crente', category: 'divino', gender: 'f' },
  { arabic: 'سَارَة', name: 'Sara', transliteration: 'Sa-ra', meaning: 'Pura, nobre, alegria; esposa de Ibrahim', category: 'virtude', gender: 'f' },
  { arabic: 'زَيْنَب', name: 'Zainab', transliteration: 'Zai-nab', meaning: 'Árvore perfumada, bela e ornamentada', category: 'natureza', gender: 'f' },
  { arabic: 'سُمَيَّة', name: 'Sumayyah', transliteration: 'Su-may-ya', meaning: 'Alta, elevada; primeira mártir do Islam', category: 'virtude', gender: 'f' },
  { arabic: 'خَدِيجَة', name: 'Khadijah', transliteration: 'Kha-di-ja', meaning: 'Nascida prematura; primeira esposa do Profeta', category: 'virtude', gender: 'f' },
  { arabic: 'رَيَّا', name: 'Raya', transliteration: 'Ra-ya', meaning: 'Brisa suave, perfumada', category: 'natureza', gender: 'f' },
  { arabic: 'إِيمَان', name: 'Iman', transliteration: 'Ee-man', meaning: 'Fé, crença, convicção', category: 'divino', gender: 'f' },
  { arabic: 'حَنَان', name: 'Hanan', transliteration: 'Ha-nan', meaning: 'Compaixão, ternura, afeto', category: 'virtude', gender: 'f' },
  { arabic: 'رَنَا', name: 'Rana', transliteration: 'Ra-na', meaning: 'De beleza hipnotizante', category: 'virtude', gender: 'f' },
  { arabic: 'أَمَل', name: 'Amal', transliteration: 'A-mal', meaning: 'Esperança, aspiração, ambição', category: 'virtude', gender: 'f' },
  { arabic: 'سَلْمَى', name: 'Salma', transliteration: 'Sal-ma', meaning: 'Pacífica, segura, tranquila', category: 'virtude', gender: 'f' },
  { arabic: 'نَادِيَة', name: 'Nadia', transliteration: 'Na-di-ya', meaning: 'Anunciadora de novidades, gentil', category: 'virtude', gender: 'f' },
]

const categories = ['todos', 'profeta', 'divino', 'virtude', 'natureza']
const catLabels: Record<string, string> = { todos: 'Todos', profeta: 'Profetas', divino: 'Divino', virtude: 'Virtude', natureza: 'Natureza' }

export default function NomesArabesPage() {
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState<'all' | 'm' | 'f'>('all')
  const [cat, setCat] = useState('todos')

  const filtered = names.filter(n => {
    const matchGender = gender === 'all' || n.gender === gender
    const matchCat = cat === 'todos' || n.category === cat
    const q = search.toLowerCase()
    const matchSearch = !q || n.name.toLowerCase().includes(q) || n.meaning.toLowerCase().includes(q) || n.arabic.includes(q)
    return matchGender && matchCat && matchSearch
  })

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Nomes Árabes</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>أَسْمَاء عَرَبِيَّة — {names.length} nomes com significados reais</p>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <Search size={15} color={T.muted} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar por nome ou significado..."
              style={{
                width: '100%', boxSizing: 'border-box',
                background: T.surface, border: `1px solid ${T.border}`,
                color: T.text, padding: '10px 12px 10px 36px',
                borderRadius: 10, fontSize: 14, outline: 'none',
              }}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {(['all', 'm', 'f'] as const).map(g => (
              <button key={g} onClick={() => setGender(g)} style={{
                padding: '6px 14px', borderRadius: 20, border: `1px solid ${gender === g ? T.gold : T.border}`,
                background: gender === g ? `${T.gold}20` : 'transparent',
                color: gender === g ? T.gold : T.muted, fontSize: 13, cursor: 'pointer',
              }}>
                {g === 'all' ? 'Todos' : g === 'm' ? 'Masculino' : 'Feminino'}
              </button>
            ))}
            <div style={{ width: 1, background: T.border, margin: '0 4px' }} />
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '6px 14px', borderRadius: 20, border: `1px solid ${cat === c ? T.gold : T.border}`,
                background: cat === c ? `${T.gold}20` : 'transparent',
                color: cat === c ? T.gold : T.muted, fontSize: 13, cursor: 'pointer',
              }}>
                {catLabels[c]}
              </button>
            ))}
          </div>

          <p style={{ color: T.muted, fontSize: 13, marginBottom: 16 }}>{filtered.length} nomes encontrados</p>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {filtered.map((n, i) => (
              <motion.div
                key={n.name + n.gender}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                style={{
                  background: T.surface, border: `1px solid ${T.border}`,
                  borderRadius: 12, padding: '16px', position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: 10, right: 12, fontSize: 10, color: T.muted, background: T.elevated, padding: '2px 6px', borderRadius: 8 }}>
                  {n.gender === 'm' ? '♂ Masc.' : '♀ Fem.'}
                </div>
                <p style={{ fontFamily: 'Amiri, serif', fontSize: 28, color: T.gold, margin: '0 0 6px', textAlign: 'left', lineHeight: 1.3 }}>{n.arabic}</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: T.text, margin: '0 0 2px', fontWeight: 600 }}>{n.name}</p>
                <p style={{ color: T.muted, fontSize: 11, margin: '0 0 8px', fontStyle: 'italic' }}>{n.transliteration}</p>
                <p style={{ color: T.secondary, fontSize: 13, margin: '0 0 8px', lineHeight: 1.4 }}>{n.meaning}</p>
                <span style={{ fontSize: 11, color: T.gold, background: `${T.gold}15`, padding: '2px 8px', borderRadius: 10 }}>
                  {catLabels[n.category]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
