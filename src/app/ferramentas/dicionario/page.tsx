'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Search, BookOpen } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const CATEGORIES = ['Todos', 'Nomes de Allah', 'Pilares', 'Oração', 'Família', 'Virtudes', 'Conceitos'] as const
type Category = typeof CATEGORIES[number]

const WORDS = [
  { ar: 'الله', tr: 'Allah', pt: 'Allah — Deus', cat: 'Nomes de Allah', ex: 'Bismillah ir-Rahman ir-Rahim — Em nome de Allah, o Clemente, o Misericordioso (Quran 1:1)' },
  { ar: 'الرَّحْمَن', tr: 'Ar-Rahman', pt: 'O Clemente (misericórdia ampla)', cat: 'Nomes de Allah', ex: 'Ar-Rahman — ensinou o Quran (Quran 55:1-2)' },
  { ar: 'الرَّحِيم', tr: 'Ar-Rahim', pt: 'O Misericordioso (misericórdia especial)', cat: 'Nomes de Allah', ex: 'E Ele é com os crentes Clemente e Misericordioso (Quran 33:43)' },
  { ar: 'الكريم', tr: 'Al-Karim', pt: 'O Generoso, o Nobre', cat: 'Nomes de Allah', ex: 'Leia em nome de seu Senhor, o Generoso (Quran 96:3)' },
  { ar: 'الحكيم', tr: 'Al-Hakim', pt: 'O Sábio', cat: 'Nomes de Allah', ex: 'E Allah é o Poderoso, o Sábio (Quran 2:129)' },
  { ar: 'الغفور', tr: 'Al-Ghafur', pt: 'O Perdoador', cat: 'Nomes de Allah', ex: 'Certamente Allah é Perdoador e Misericordioso (Quran 2:173)' },
  { ar: 'إِسْلَام', tr: 'Islam', pt: 'Submissão a Allah', cat: 'Pilares', ex: 'A religião aos olhos de Allah é o Islam (Quran 3:19)' },
  { ar: 'إِيمَان', tr: 'Iman', pt: 'Fé, crença', cat: 'Pilares', ex: 'Os crentes são aqueles cujos corações tremem ao mencionar Allah (Quran 8:2)' },
  { ar: 'صَلَاة', tr: 'Salat', pt: 'Oração ritual (5x ao dia)', cat: 'Pilares', ex: 'Estabeleça a oração, pois a oração afasta o indecente (Quran 29:45)' },
  { ar: 'زَكَاة', tr: 'Zakat', pt: 'Imposto de purificação / esmola obrigatória', cat: 'Pilares', ex: 'Estabeleça a oração e dê o Zakat (Quran 2:43)' },
  { ar: 'صَوْم', tr: 'Sawm', pt: 'Jejum', cat: 'Pilares', ex: 'O jejum foi prescrito para vocês como foi para os que vieram antes (Quran 2:183)' },
  { ar: 'حَجّ', tr: 'Hajj', pt: 'Peregrinação a Meca (1x na vida)', cat: 'Pilares', ex: 'E o Hajj a esta Casa é dever de todo ser humano capaz (Quran 3:97)' },
  { ar: 'شَهَادَة', tr: 'Shahada', pt: 'Declaração de fé', cat: 'Pilares', ex: 'Allah testemunha que não há deus além Dele (Quran 3:18)' },
  { ar: 'رُكُوع', tr: "Ruku'", pt: 'Inclinação na oração', cat: 'Oração', ex: 'O inclina-te com os que se inclinam (Quran 2:43)' },
  { ar: 'سُجُود', tr: 'Sujud', pt: 'Prostração na oração', cat: 'Oração', ex: 'Prostra-te e aproxima-te (Quran 96:19)' },
  { ar: 'وُضُوء', tr: 'Wudu', pt: 'Ablução ritual antes da oração', cat: 'Oração', ex: 'Quando se levantarem para a oração, lavem rostos e mãos... (Quran 5:6)' },
  { ar: 'أَذَان', tr: 'Adhan', pt: 'Chamada para a oração', cat: 'Oração', ex: 'Quando você chamar para a oração, tome-a como motivo de gozo (Quran 5:58)' },
  { ar: 'قِبْلَة', tr: 'Qibla', pt: 'Direção para Meca na oração', cat: 'Oração', ex: 'Vire teu rosto na direção da Mesquita Sagrada (Quran 2:144)' },
  { ar: 'أُمّ', tr: "Umm", pt: 'Mãe', cat: 'Família', ex: 'Ordenamos ao ser humano bondade para com seus pais (Quran 29:8)' },
  { ar: 'أَب', tr: "Ab", pt: 'Pai', cat: 'Família', ex: 'Teu Senhor decretou que adoreis apenas a Ele e bondade aos pais (Quran 17:23)' },
  { ar: 'أُسْرَة', tr: "Usra", pt: 'Família', cat: 'Família', ex: 'E entre Seus sinais está que criou para vocês esposas (Quran 30:21)' },
  { ar: 'نِكَاح', tr: 'Nikah', pt: 'Casamento islâmico', cat: 'Família', ex: 'E case-se com as mulheres que lhe são lícitas (Quran 4:3)' },
  { ar: 'تَقْوَى', tr: 'Taqwa', pt: 'Consciência de Allah, piedade', cat: 'Virtudes', ex: 'O mais honrado entre vocês diante de Allah é o mais temente (Quran 49:13)' },
  { ar: 'صَبْر', tr: 'Sabr', pt: 'Paciência, perseverança', cat: 'Virtudes', ex: 'Certamente Allah está com os pacientes (Quran 2:153)' },
  { ar: 'شُكْر', tr: 'Shukr', pt: 'Gratidão a Allah', cat: 'Virtudes', ex: 'Se vocês forem gratos, aumentarei para vocês (Quran 14:7)' },
  { ar: 'إِخْلَاص', tr: 'Ikhlas', pt: 'Sinceridade, pureza de intenção', cat: 'Virtudes', ex: 'Nome da 112ª Surata — dedicação pura a Allah' },
  { ar: 'عَدْل', tr: 'Adl', pt: 'Justiça', cat: 'Virtudes', ex: 'Certamente Allah ordena a justiça e a bondade (Quran 16:90)' },
  { ar: 'رَحْمَة', tr: 'Rahma', pt: 'Misericórdia', cat: 'Virtudes', ex: 'E Minha misericórdia abraça todas as coisas (Quran 7:156)' },
  { ar: 'أَمَانَة', tr: 'Amana', pt: 'Confiança, fidelidade', cat: 'Virtudes', ex: 'Allah ordena que devolvam os depósitos a quem pertencem (Quran 4:58)' },
  { ar: 'قُرْآن', tr: 'Quran', pt: 'Recitação — o livro sagrado do Islam', cat: 'Conceitos', ex: 'Este é o Livro no qual não há dúvida (Quran 2:2)' },
  { ar: 'سُنَّة', tr: 'Sunnah', pt: 'Caminho e práticas do Profeta ﷺ', cat: 'Conceitos', ex: 'Obedeçam a Allah e ao Mensageiro (Quran 3:132)' },
  { ar: 'حَدِيث', tr: 'Hadith', pt: 'Relato das palavras e atos do Profeta ﷺ', cat: 'Conceitos', ex: 'Diga: "Se amam Allah, sigam-me" (Quran 3:31)' },
  { ar: 'أُمَّة', tr: 'Ummah', pt: 'Comunidade islâmica mundial', cat: 'Conceitos', ex: 'Vocês são a melhor nação criada para a humanidade (Quran 3:110)' },
  { ar: 'جِهَاد', tr: 'Jihad', pt: 'Esforço no caminho de Allah', cat: 'Conceitos', ex: 'Lutem com seus bens e almas no caminho de Allah (Quran 9:41)' },
  { ar: 'دُعَاء', tr: "Du'a", pt: 'Súplica, pedido direto a Allah', cat: 'Conceitos', ex: 'Invocar-me e Eu responderei a vocês (Quran 40:60)' },
  { ar: 'ذِكْر', tr: 'Dhikr', pt: 'Lembrança de Allah', cat: 'Conceitos', ex: 'Na lembrança de Allah os corações encontram paz (Quran 13:28)' },
  { ar: 'حَلَال', tr: 'Halal', pt: 'Permitido pela lei islâmica', cat: 'Conceitos', ex: 'Comam do que é lícito e bom na terra (Quran 2:168)' },
  { ar: 'حَرَام', tr: 'Haram', pt: 'Proibido pela lei islâmica', cat: 'Conceitos', ex: 'Proibiu para vocês os animais mortos... (Quran 2:173)' },
  { ar: 'جَنَّة', tr: 'Jannah', pt: 'Paraíso, jardins do Éden', cat: 'Conceitos', ex: 'Para os crentes há jardins pelo qual correm rios (Quran 2:25)' },
  { ar: 'آخِرَة', tr: 'Akhira', pt: 'Vida após a morte', cat: 'Conceitos', ex: 'A morada da vida futura é melhor (Quran 6:32)' },
]

export default function DicionarioPage() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<Category>('Todos')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return WORDS.filter(w =>
      (cat === 'Todos' || w.cat === cat) &&
      (!q || w.ar.includes(q) || w.tr.toLowerCase().includes(q) || w.pt.toLowerCase().includes(q))
    )
  }, [query, cat])

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <BookOpen size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Dicionário Árabe-Português</h1>
          </div>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>Termos essenciais do Quran e da tradição islâmica.</p>
        </motion.div>

        <div style={{ position: 'relative', marginBottom: 20 }}>
          <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: T.muted }} />
          <input value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Buscar em árabe, transliteração ou português..."
            style={{
              width: '100%', padding: '12px 14px 12px 40px', borderRadius: 10,
              backgroundColor: T.surface, border: `1px solid ${T.border}`,
              color: T.text, fontSize: 14, outline: 'none', boxSizing: 'border-box',
            }} />
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '5px 14px', borderRadius: 16, fontSize: 12, cursor: 'pointer',
              border: `1px solid ${cat === c ? T.gold : T.border}`,
              backgroundColor: cat === c ? T.gold + '22' : T.surface,
              color: cat === c ? T.gold : T.secondary, transition: 'all 0.2s',
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          {filtered.map((w, i) => (
            <motion.div key={w.tr} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}
              style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '16px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ fontFamily: 'Amiri, serif', fontSize: 28, color: T.gold, lineHeight: 1.3, direction: 'rtl', flexShrink: 0, minWidth: 80, textAlign: 'right' }}>{w.ar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: T.text }}>{w.tr}</span>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 10, backgroundColor: T.gold + '18', color: T.gold }}>{w.cat}</span>
                  </div>
                  <p style={{ color: T.secondary, fontSize: 14, margin: '0 0 6px' }}>{w.pt}</p>
                  <p style={{ color: T.muted, fontSize: 12, margin: 0, fontStyle: 'italic' }}>{w.ex}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: T.muted }}>Nenhuma palavra encontrada.</div>
          )}
        </div>
        <p style={{ textAlign: 'center', color: T.muted, fontSize: 12, marginTop: 24 }}>{filtered.length} de {WORDS.length} palavras</p>
      </div>
    </main>
  )
}
