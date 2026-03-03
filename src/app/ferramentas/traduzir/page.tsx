'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Copy, Check } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const VERSICULOS: Record<string, { ar: string; nome: string; t1: string; t2: string; t3: string }> = {
  '1:1': {
    ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    nome: 'Al-Fatiha, versículo 1',
    t1: 'Em nome de Allah, o Clemente, o Misericordioso.',
    t2: 'Com o nome de Deus, o Compassivo, o Misericordioso.',
    t3: 'Em nome de Allah, o Beneficente, o Misericordioso.',
  },
  '1:2': {
    ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    nome: 'Al-Fatiha, versículo 2',
    t1: 'Louvado seja Allah, Senhor dos mundos.',
    t2: 'Louvores a Deus, Senhor do universo.',
    t3: 'Graças a Allah, Senhor de todos os mundos.',
  },
  '1:5': {
    ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    nome: 'Al-Fatiha, versículo 5',
    t1: 'A Ti adoramos e a Ti pedimos ajuda.',
    t2: 'Só a Ti adoramos e só a Ti pedimos auxílio.',
    t3: 'Somente a Ti cultuamos e somente de Ti buscamos auxílio.',
  },
  '2:255': {
    ar: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    nome: 'Al-Baqarah, versículo 255 — Ayat al-Kursi',
    t1: 'Allah! Não há deus além d\'Ele, o Vivo, o Eterno. Não O alcança nem sonolência nem sono.',
    t2: 'Allah! Não há outra divindade a não ser Ele, o Vivente, o Subsistente. Nem sonolência nem sono O acometem.',
    t3: 'Allah, não há deus senão Ele, o Sempre-Vivo, o Auto-Subsistente. Nenhum sono ou sonolência O domina.',
  },
  '2:286': {
    ar: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
    nome: 'Al-Baqarah, versículo 286',
    t1: 'Allah não impõe a nenhuma alma além de sua capacidade.',
    t2: 'Deus não sobrecarrega nenhuma alma além do que ela pode suportar.',
    t3: 'Allah não incumbe nenhuma alma além de sua capacidade.',
  },
  '3:200': {
    ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ',
    nome: 'Ali Imran, versículo 200',
    t1: 'Ó crentes! Sede pacientes, superai (a paciência dos inimigos), mantende-vos firmes e temei Allah para que prospereis.',
    t2: 'Ó crentes! Perseverai, sede mais resistentes que os outros, permanecei vigilantes e temei a Deus, para que possais prosperar.',
    t3: 'Ó crentes! Sede pacientes, exercitai a paciência, permanecei firmes, e temei Allah para que obtenhais êxito.',
  },
  '94:5': {
    ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    nome: 'Ash-Sharh, versículo 5',
    t1: 'Certamente, com a dificuldade há facilidade.',
    t2: 'De fato, com a adversidade há alívio.',
    t3: 'Com certeza, após toda dificuldade virá a facilidade.',
  },
  '112:1': {
    ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    nome: 'Al-Ikhlas, versículo 1',
    t1: 'Dize: "Ele é Allah, o Único."',
    t2: 'Dize: Ele é Deus, Um.',
    t3: 'Dize: "Ele é Allah, Único."',
  },
  '2:153': {
    ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
    nome: 'Al-Baqarah, versículo 153',
    t1: 'Ó crentes! Buscai ajuda na paciência e na oração. Certamente Allah está com os pacientes.',
    t2: 'Ó fiéis! Buscai auxílio na perseverança e na oração. Deus está com os pacientes.',
    t3: 'Ó crentes! Procurai socorro na paciência e na oração. Verdadeiramente, Allah está com os pacientes.',
  },
  '13:28': {
    ar: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    nome: 'Ar-Rad, versículo 28',
    t1: 'Certamente, na lembrança de Allah os corações encontram tranquilidade.',
    t2: 'De fato, é com a lembrança de Deus que os corações encontram paz.',
    t3: 'Só com a lembrança de Allah os corações se aquietam.',
  },
  '49:13': {
    ar: 'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',
    nome: 'Al-Hujurat, versículo 13',
    t1: 'Certamente, o mais honrado entre vós diante de Allah é o mais temente.',
    t2: 'O mais nobre de vós, perante Deus, é o mais piedoso.',
    t3: 'O mais digno de vocês diante de Allah é o que tem mais taqwa.',
  },
}

const FAMOSOS = ['2:255', '1:1', '94:5', '112:1', '2:286', '13:28', '49:13', '2:153']

export default function TraduzirPage() {
  const [surata, setSurata] = useState('')
  const [versiculo, setVersiculo] = useState('')
  const [resultado, setResultado] = useState<typeof VERSICULOS[string] | null | 'nao_encontrado'>(null)
  const [chaveAtual, setChaveAtual] = useState('')
  const [copiado, setCopiado] = useState<string | null>(null)

  const buscar = (s?: string, v?: string) => {
    const ch = `${s ?? surata}:${v ?? versiculo}`
    setChaveAtual(ch)
    const found = VERSICULOS[ch]
    setResultado(found || 'nao_encontrado')
  }

  const buscarFamoso = (chave: string) => {
    const [s, v] = chave.split(':')
    setSurata(s); setVersiculo(v)
    setChaveAtual(chave)
    setResultado(VERSICULOS[chave] || 'nao_encontrado')
  }

  const copiar = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto)
    setCopiado(id)
    setTimeout(() => setCopiado(null), 2000)
  }

  const tradutores = ['Samir El-Hayek', 'Helmi Nasr', 'Adel Mamede']

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <BookOpen size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Comparador de Traduções</h1>
          </div>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>Compare versículos do Quran em diferentes traduções para o português.</p>
        </motion.div>

        <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
          <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 10 }}>Surata e Versículo</label>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input value={surata} onChange={e => setSurata(e.target.value)} placeholder="Surata (ex: 2)" type="number" min="1" max="114"
              style={{ width: 100, padding: '12px 14px', borderRadius: 8, backgroundColor: T.elevated, border: `1px solid ${T.border}`, color: T.text, fontSize: 15, outline: 'none' }} />
            <span style={{ color: T.muted, fontSize: 20 }}>:</span>
            <input value={versiculo} onChange={e => setVersiculo(e.target.value)} placeholder="Versículo (ex: 255)" type="number" min="1"
              style={{ width: 120, padding: '12px 14px', borderRadius: 8, backgroundColor: T.elevated, border: `1px solid ${T.border}`, color: T.text, fontSize: 15, outline: 'none' }} />
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => buscar()} style={{
              flex: 1, padding: '12px', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: 15,
              backgroundColor: T.gold, border: 'none', color: '#0D0B12',
            }}>Buscar</motion.button>
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <p style={{ color: T.muted, fontSize: 12, marginBottom: 10 }}>Versículos famosos:</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FAMOSOS.map(chave => {
              const nomes: Record<string, string> = { '2:255': 'Ayat al-Kursi', '1:1': 'Basmala', '94:5': 'Facilidade', '112:1': 'Al-Ikhlas', '2:286': 'Capacidade', '13:28': 'Dhikr', '49:13': 'Taqwa', '2:153': 'Sabr' }
              return (
                <button key={chave} onClick={() => buscarFamoso(chave)} style={{
                  padding: '6px 14px', borderRadius: 16, fontSize: 12, cursor: 'pointer', transition: 'all 0.2s',
                  border: `1px solid ${chaveAtual === chave ? T.gold : T.border}`,
                  backgroundColor: chaveAtual === chave ? T.gold + '22' : T.surface,
                  color: chaveAtual === chave ? T.gold : T.secondary,
                }}>{chave} — {nomes[chave]}</button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {resultado && resultado !== 'nao_encontrado' && (
            <motion.div key={chaveAtual} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ backgroundColor: T.surface, border: `1px solid ${T.gold}33`, borderRadius: 14, padding: '24px', marginBottom: 16 }}>
                <p style={{ color: T.gold, fontSize: 13, marginBottom: 16 }}>{resultado.nome}</p>
                <p style={{ fontFamily: 'Amiri, serif', fontSize: 28, color: T.gold, direction: 'rtl', textAlign: 'right', lineHeight: 2, margin: '0 0 8px' }}>{resultado.ar}</p>
                <button onClick={() => copiar(resultado.ar, 'ar')} style={{ background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 6, padding: '4px 12px', cursor: 'pointer', color: T.muted, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
                  {copiado === 'ar' ? <Check size={12} color={T.gold} /> : <Copy size={12} />} Copiar árabe
                </button>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[resultado.t1, resultado.t2, resultado.t3].map((t, i) => (
                  <div key={i} style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ color: T.gold, fontSize: 12, fontWeight: 600 }}>{tradutores[i]}</span>
                      <button onClick={() => copiar(t, `t${i}`)} style={{ background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 6, padding: '3px 10px', cursor: 'pointer', color: T.muted, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                        {copiado === `t${i}` ? <Check size={11} color={T.gold} /> : <Copy size={11} />} Copiar
                      </button>
                    </div>
                    <p style={{ color: T.text, fontSize: 15, lineHeight: 1.7, margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {resultado === 'nao_encontrado' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ textAlign: 'center', padding: '48px 0', backgroundColor: T.surface, borderRadius: 14, border: `1px solid ${T.border}` }}>
                <BookOpen size={40} style={{ marginBottom: 16, opacity: 0.3, margin: '0 auto 16px' }} />
                <p style={{ color: T.secondary, fontSize: 15 }}>Tradução em breve</p>
                <p style={{ color: T.muted, fontSize: 13 }}>O versículo {chaveAtual} ainda não está na base de dados.</p>
                <p style={{ color: T.muted, fontSize: 12, marginTop: 8 }}>Experimente os versículos famosos acima.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
