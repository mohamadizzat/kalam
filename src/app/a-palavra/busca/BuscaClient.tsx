'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Star, BookOpen, ArrowRight, Share2, Copy, Check, Sparkles } from 'lucide-react'
import { surahs } from '@/lib/data/surahs'
import { BackButton } from '@/components/shared/BackButton'

type PopularVerse = {
  surah: number
  verse: number
  arabic: string
  translation: string
  theme: string
}

const popularVerses: PopularVerse[] = [
  {
    surah: 1,
    verse: 1,
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    translation: 'Em nome de Deus, o Infinitamente Misericordioso, o Constantemente Misericordioso.',
    theme: 'Abertura',
  },
  {
    surah: 2,
    verse: 255,
    arabic: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    translation: 'Deus! Nao ha divindade alem dEle, o Vivente, o Sustentador. Nao O acomete cochilo nem sono.',
    theme: 'Ayat al-Kursi',
  },
  {
    surah: 2,
    verse: 256,
    arabic: 'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
    translation: 'Nao ha compulsao na religiao. A verdade se distinguiu claramente do erro.',
    theme: 'Liberdade',
  },
  {
    surah: 2,
    verse: 286,
    arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
    translation: 'Deus nao impoe a nenhuma alma uma carga superior ao que pode suportar.',
    theme: 'Misericordia',
  },
  {
    surah: 3,
    verse: 139,
    arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',
    translation: 'Nao desanimeis nem vos entristeçais, pois sereis superiores, se fordes fieis.',
    theme: 'Coragem',
  },
  {
    surah: 5,
    verse: 32,
    arabic: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
    translation: 'Quem matar uma pessoa, sera como se tivesse matado toda a humanidade.',
    theme: 'Vida',
  },
  {
    surah: 13,
    verse: 28,
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Certamente, com a lembrança de Deus tranquilizam-se os coraçoes.',
    theme: 'Paz interior',
  },
  {
    surah: 21,
    verse: 87,
    arabic: 'لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    translation: 'Nao ha divindade alem de Ti! Glorificado sejas! Em verdade, fui dos injustos.',
    theme: 'Suplica de Yunus',
  },
  {
    surah: 24,
    verse: 35,
    arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ',
    translation: 'Deus e a Luz dos ceus e da terra.',
    theme: 'Ayat an-Nur',
  },
  {
    surah: 33,
    verse: 56,
    arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',
    translation: 'Deus e Seus anjos abencoam o Profeta.',
    theme: 'Profeta',
  },
  {
    surah: 39,
    verse: 53,
    arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',
    translation: 'Nao desespereis da misericordia de Deus. Deus perdoa todos os pecados.',
    theme: 'Esperança',
  },
  {
    surah: 49,
    verse: 13,
    arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
    translation: 'O humanidade! Nos vos criamos de um homem e uma mulher, e vos fizemos em naçoes e tribos para que vos conhecesseis mutuamente.',
    theme: 'Igualdade',
  },
  {
    surah: 55,
    verse: 13,
    arabic: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',
    translation: 'Qual, pois, dos beneficios do vosso Senhor negareis?',
    theme: 'Gratidao',
  },
  {
    surah: 67,
    verse: 2,
    arabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',
    translation: 'Aquele que criou a morte e a vida para testar qual de vos e melhor em açoes.',
    theme: 'Proposito',
  },
  {
    surah: 93,
    verse: 5,
    arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى',
    translation: 'E em breve teu Senhor te concedera, e tu ficaras satisfeito.',
    theme: 'Promessa',
  },
  {
    surah: 94,
    verse: 5,
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Com a dificuldade vem a facilidade.',
    theme: 'Paciencia',
  },
  {
    surah: 94,
    verse: 6,
    arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Certamente, com a dificuldade vem a facilidade.',
    theme: 'Paciencia',
  },
  {
    surah: 112,
    verse: 1,
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    translation: 'Dize: Ele e Deus, o Unico.',
    theme: 'Unicidade',
  },
  {
    surah: 113,
    verse: 1,
    arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
    translation: 'Dize: Refugio-me no Senhor da alvorada.',
    theme: 'Proteçao',
  },
  {
    surah: 114,
    verse: 1,
    arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    translation: 'Dize: Refugio-me no Senhor da humanidade.',
    theme: 'Proteçao',
  },
]

export function BuscaClient() {
  const [search, setSearch] = useState('')
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null)

  // Filter surahs by search
  const filteredSurahs = useMemo(() => {
    if (!search.trim()) return []
    const q = search.toLowerCase().trim()
    return surahs.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.translation.toLowerCase().includes(q) ||
      s.arabicName.includes(q) ||
      String(s.number) === q
    )
  }, [search])

  // Filter popular verses by search
  const filteredVerses = useMemo(() => {
    if (!search.trim()) return popularVerses
    const q = search.toLowerCase().trim()
    return popularVerses.filter(v =>
      v.translation.toLowerCase().includes(q) ||
      v.theme.toLowerCase().includes(q) ||
      v.arabic.includes(q) ||
      `${v.surah}:${v.verse}`.includes(q)
    )
  }, [search])

  // Share verse
  const shareVerse = useCallback(async (v: PopularVerse) => {
    const surahInfo = surahs.find(s => s.number === v.surah)
    const surahName = surahInfo?.name || `Surata ${v.surah}`
    const shareText = `${v.arabic}\n\n${v.translation}\n\n-- ${surahName} ${v.verse} | KALAM`
    const key = `${v.surah}:${v.verse}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${surahName} ${v.verse} | KALAM`,
          text: shareText,
        })
        return
      } catch (err) {
        if ((err as DOMException).name === 'AbortError') return
      }
    }

    try {
      await navigator.clipboard.writeText(shareText)
      setCopiedVerse(key)
      setTimeout(() => setCopiedVerse(null), 2000)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = shareText
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedVerse(key)
      setTimeout(() => setCopiedVerse(null), 2000)
    }
  }, [])

  const hasSearch = search.trim().length > 0

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '16px 24px', borderBottom: '1px solid #272230' }}>
        <BackButton href="/a-palavra" label="A Palavra" />
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '28px',
          fontWeight: 700,
          color: '#F0EBE2',
          marginTop: '16px',
        }}>
          Buscar no Quran
        </h1>
        <p style={{ color: '#7A7870', fontSize: '14px', marginTop: '4px' }}>
          Encontre suratas e versiculos
        </p>
      </header>

      {/* Search input */}
      <div style={{ padding: '20px 24px 0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '14px',
            background: '#161220',
            border: '1px solid #272230',
            transition: 'border-color 0.2s ease',
          }}
        >
          <Search size={18} style={{ color: '#7A7870', flexShrink: 0 }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nome da surata, tema, numero..."
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#F0EBE2',
              fontSize: '15px',
              fontFamily: 'var(--font-sans)',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                background: 'rgba(122,120,112,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <X size={12} color="#7A7870" />
            </button>
          )}
        </div>
      </div>

      {/* Search results: surahs */}
      {hasSearch && filteredSurahs.length > 0 && (
        <section style={{ padding: '24px 24px 0' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: '#F0EBE2',
            marginBottom: '12px',
            fontWeight: 600,
          }}>
            Suratas ({filteredSurahs.length})
          </p>
          <div className="grid gap-2">
            {filteredSurahs.map((surah, index) => (
              <motion.div
                key={surah.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                <Link
                  href={`/a-palavra/${surah.number}`}
                  className="card-hover"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    borderRadius: '12px',
                    background: '#161220',
                    border: '1px solid #272230',
                    textDecoration: 'none',
                    gap: '16px',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid #272230',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: '#C9A84C',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {surah.number}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>{surah.name}</p>
                    <p style={{ fontSize: '13px', color: '#7A7870' }}>{surah.translation} · {surah.versesCount} versiculos</p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '20px', color: '#C9A84C', direction: 'rtl' }}>
                    {surah.arabicName}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* No results */}
      {hasSearch && filteredSurahs.length === 0 && filteredVerses.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 24px',
            textAlign: 'center',
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
            <Search size={24} color="#C9A84C" strokeWidth={1.5} />
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2', marginBottom: '8px' }}>
            Nenhum resultado
          </p>
          <p style={{ fontSize: '14px', color: '#7A7870', maxWidth: '280px' }}>
            Tente buscar pelo nome da surata, tema ou numero.
          </p>
        </motion.div>
      )}

      {/* Popular / filtered verses */}
      <section style={{ padding: '24px 24px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Sparkles size={16} color="#C9A84C" />
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: '#F0EBE2',
            fontWeight: 600,
          }}>
            {hasSearch ? `Versiculos (${filteredVerses.length})` : 'Versiculos Populares'}
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredVerses.map((verse, index) => {
            const surahInfo = surahs.find(s => s.number === verse.surah)
            const surahName = surahInfo?.name || `Surata ${verse.surah}`
            const key = `${verse.surah}:${verse.verse}`
            const isCopied = copiedVerse === key

            return (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                style={{
                  marginBottom: '14px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: '1px solid #272230',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '20px' }}>
                  {/* Theme badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    marginBottom: '16px',
                  }}>
                    <Star size={10} color="#C9A84C" fill="#C9A84C" />
                    <span style={{ fontSize: '11px', color: '#C9A84C', fontWeight: 500, letterSpacing: '0.03em' }}>
                      {verse.theme}
                    </span>
                  </div>

                  {/* Arabic text */}
                  <p style={{
                    fontFamily: 'var(--font-arabic)',
                    direction: 'rtl',
                    textAlign: 'right',
                    fontSize: 'clamp(18px, 4.5vw, 26px)',
                    lineHeight: 1.9,
                    color: '#C9A84C',
                    marginBottom: '14px',
                    textShadow: '0 0 20px rgba(201,168,76,0.08)',
                  }}>
                    {verse.arabic}
                  </p>

                  {/* Translation */}
                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#B3B0A6',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {verse.translation}
                  </p>

                  {/* Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(39,34,48,0.6)',
                  }}>
                    <Link
                      href={`/a-palavra/${verse.surah}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <BookOpen size={14} color="#7A7870" />
                      <span style={{ fontSize: '13px', color: '#F0EBE2', fontWeight: 500 }}>
                        {surahName} : {verse.verse}
                      </span>
                      <ArrowRight size={12} color="#7A7870" />
                    </Link>

                    <button
                      onClick={() => shareVerse(verse)}
                      aria-label="Compartilhar"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: isCopied ? 'rgba(201,168,76,0.15)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} color="#C9A84C" />
                          <span style={{ fontSize: '12px', color: '#C9A84C' }}>Copiado!</span>
                        </>
                      ) : (
                        <Share2 size={14} color="#7A7870" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
