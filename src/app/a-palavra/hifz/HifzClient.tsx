'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Eye, EyeOff, BookOpen, Check, ChevronDown, ChevronUp, Lightbulb, RotateCcw, Star } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────

type Verse = {
  number: number
  arabic: string
  transliteration: string
  translation: string
}

type Surah = {
  number: number
  name: string
  arabicName: string
  translation: string
  verses: Verse[]
}

type ViewMode = 'ver-tudo' | 'esconder-traducao' | 'esconder-tudo'

// ─── Inline Surah Data (10 short surahs) ─────────────────────────────────

const HIFZ_SURAHS: Surah[] = [
  {
    number: 1,
    name: 'Al-Fatiha',
    arabicName: 'الفاتحة',
    translation: 'A Abertura',
    verses: [
      { number: 1, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', transliteration: 'Bismillahir-Rahmanir-Rahim', translation: 'Em nome de Deus, o Clemente, o Misericordioso' },
      { number: 2, arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', transliteration: 'Alhamdu lillahi Rabbil-aalameen', translation: 'Louvado seja Deus, Senhor dos mundos' },
      { number: 3, arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', transliteration: 'Ar-Rahmanir-Rahim', translation: 'O Clemente, o Misericordioso' },
      { number: 4, arabic: 'مَالِكِ يَوْمِ الدِّينِ', transliteration: 'Maliki yawmid-deen', translation: 'Soberano do Dia do Juizo' },
      { number: 5, arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een', translation: 'So a Ti adoramos e so de Ti imploramos ajuda' },
      { number: 6, arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', transliteration: 'Ihdinas-siratal-mustaqeem', translation: 'Guia-nos a senda reta' },
      { number: 7, arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', transliteration: 'Siratal-ladhina an\'amta \'alayhim, ghayril-maghdubi \'alayhim wa lad-dalleen', translation: 'A senda dos que agraciaste, nao dos que incorreram em Tua ira, nem dos que se desviaram' },
    ],
  },
  {
    number: 97,
    name: 'Al-Qadr',
    arabicName: 'القدر',
    translation: 'O Decreto',
    verses: [
      { number: 1, arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', transliteration: 'Inna anzalnahu fi laylat-il-qadr', translation: 'Em verdade, o revelamos na Noite do Decreto' },
      { number: 2, arabic: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ', transliteration: 'Wa ma adraka ma laylat-ul-qadr', translation: 'E o que te fara compreender o que e a Noite do Decreto?' },
      { number: 3, arabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ', transliteration: 'Laylat-ul-qadri khayrum-min alfi shahr', translation: 'A Noite do Decreto e melhor que mil meses' },
      { number: 4, arabic: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ', transliteration: 'Tanazzal-ul-malaikatu war-ruhu fiha bi-idhni Rabbihim min kulli amr', translation: 'Nela descem os anjos e o Espirito, com a permissao de seu Senhor, para todo decreto' },
      { number: 5, arabic: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ', transliteration: 'Salamun hiya hatta matla\'il-fajr', translation: 'Paz ela e, ate o romper da aurora' },
    ],
  },
  {
    number: 103,
    name: 'Al-Asr',
    arabicName: 'العصر',
    translation: 'O Tempo',
    verses: [
      { number: 1, arabic: 'وَالْعَصْرِ', transliteration: 'Wal-\'asr', translation: 'Pelo tempo' },
      { number: 2, arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', transliteration: 'Innal-insana lafi khusr', translation: 'Em verdade, o ser humano esta em perdicao' },
      { number: 3, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', transliteration: 'Illal-ladhina amanu wa \'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr', translation: 'Exceto os que creem, praticam o bem, recomendam a verdade e recomendam a paciencia' },
    ],
  },
  {
    number: 105,
    name: 'Al-Fil',
    arabicName: 'الفيل',
    translation: 'O Elefante',
    verses: [
      { number: 1, arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', transliteration: 'Alam tara kayfa fa\'ala Rabbuka bi-ashabul-feel', translation: 'Nao viste como teu Senhor tratou o povo do elefante?' },
      { number: 2, arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', transliteration: 'Alam yaj\'al kaydahum fi tadleel', translation: 'Nao fez Ele com que suas ciladas se perdessem?' },
      { number: 3, arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', transliteration: 'Wa arsala \'alayhim tayran ababeel', translation: 'E enviou contra eles bandos de passaros' },
      { number: 4, arabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ', transliteration: 'Tarmeehim bihijaratim-min sijjeel', translation: 'Que lhes arremessavam pedras de argila' },
      { number: 5, arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ', transliteration: 'Faja\'alahum ka\'asfim-ma\'kool', translation: 'E os tornou como palha devorada' },
    ],
  },
  {
    number: 106,
    name: 'Quraysh',
    arabicName: 'قريش',
    translation: 'Os Coraixitas',
    verses: [
      { number: 1, arabic: 'لِإِيلَافِ قُرَيْشٍ', transliteration: 'Li-ilafi Quraysh', translation: 'Pela coesao dos Coraixitas' },
      { number: 2, arabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ', transliteration: 'Ilafihim rihlatash-shitai was-sayf', translation: 'Sua coesao nas viagens de inverno e verao' },
      { number: 3, arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', transliteration: 'Falya\'budu Rabba hadhal-bayt', translation: 'Que adorem o Senhor desta Casa' },
      { number: 4, arabic: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ', transliteration: 'Alladhi at\'amahum min ju\'iw-wa amanahum min khawf', translation: 'Que os alimentou contra a fome e os protegeu do temor' },
    ],
  },
  {
    number: 107,
    name: 'Al-Ma\'un',
    arabicName: 'الماعون',
    translation: 'A Caridade',
    verses: [
      { number: 1, arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', transliteration: 'Araayt-alladhi yukadh-dhibu bid-deen', translation: 'Viste aquele que nega o Juizo?' },
      { number: 2, arabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', transliteration: 'Fadhalik-alladhi yadu\'\'ul-yateem', translation: 'E aquele que repele o orfao' },
      { number: 3, arabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', transliteration: 'Wa la yahuddu \'ala ta\'amil-miskeen', translation: 'E nao incentiva a alimentar o necessitado' },
      { number: 4, arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ', transliteration: 'Fawaylul-lil-musalleen', translation: 'Ai dos que oram' },
      { number: 5, arabic: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ', transliteration: 'Alladhina hum \'an salatihim sahoon', translation: 'Que sao negligentes em suas oracoes' },
      { number: 6, arabic: 'الَّذِينَ هُمْ يُرَاءُونَ', transliteration: 'Alladhina hum yura\'oon', translation: 'Que fazem por ostentacao' },
      { number: 7, arabic: 'وَيَمْنَعُونَ الْمَاعُونَ', transliteration: 'Wa yamna\'oonal-ma\'oon', translation: 'E negam a ajuda ao proximo' },
    ],
  },
  {
    number: 108,
    name: 'Al-Kawthar',
    arabicName: 'الكوثر',
    translation: 'A Abundancia',
    verses: [
      { number: 1, arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', transliteration: 'Inna a\'taynaka al-kawthar', translation: 'Em verdade, te concedemos a abundancia' },
      { number: 2, arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', transliteration: 'Fasalli li-Rabbika wanhar', translation: 'Ora, pois, ao teu Senhor e faz sacrificio' },
      { number: 3, arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', transliteration: 'Inna shani\'aka huwal-abtar', translation: 'Em verdade, quem te odeia sera exterminado' },
    ],
  },
  {
    number: 110,
    name: 'An-Nasr',
    arabicName: 'النصر',
    translation: 'O Socorro',
    verses: [
      { number: 1, arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', transliteration: 'Idha ja\'a nasrullahi wal-fath', translation: 'Quando chegar o socorro de Deus e a vitoria' },
      { number: 2, arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', transliteration: 'Wa ra\'aytan-nasa yadkhuluna fi dinillahi afwaja', translation: 'E vires as pessoas entrando na religiao de Deus em multidoes' },
      { number: 3, arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا', transliteration: 'Fasabbih bihamdi Rabbika wastaghfirh, innahu kana tawwaba', translation: 'Glorifica teu Senhor com louvores e pede-Lhe perdao. Ele e Indulgente' },
    ],
  },
  {
    number: 112,
    name: 'Al-Ikhlas',
    arabicName: 'الإخلاص',
    translation: 'A Sinceridade',
    verses: [
      { number: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', transliteration: 'Qul Huw-Allahu Ahad', translation: 'Dize: Ele e Deus, o Unico' },
      { number: 2, arabic: 'اللَّهُ الصَّمَدُ', transliteration: 'Allahus-Samad', translation: 'Deus, o Absoluto' },
      { number: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', transliteration: 'Lam yalid wa lam yulad', translation: 'Nao gerou nem foi gerado' },
      { number: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', transliteration: 'Wa lam yakul-lahu kufuwan ahad', translation: 'E ninguem e comparavel a Ele' },
    ],
  },
  {
    number: 113,
    name: 'Al-Falaq',
    arabicName: 'الفلق',
    translation: 'O Amanhecer',
    verses: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', transliteration: 'Qul a\'udhu bi-Rabbil-falaq', translation: 'Dize: Refugio-me no Senhor do amanhecer' },
      { number: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', transliteration: 'Min sharri ma khalaq', translation: 'Contra o mal daquilo que criou' },
      { number: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', transliteration: 'Wa min sharri ghasiqin idha waqab', translation: 'Contra o mal da escuridao quando se intensifica' },
      { number: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', transliteration: 'Wa min sharrin-naffathati fil-\'uqad', translation: 'Contra o mal das sopradoras de nos' },
      { number: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', transliteration: 'Wa min sharri hasidin idha hasad', translation: 'E contra o mal do invejoso quando inveja' },
    ],
  },
  {
    number: 114,
    name: 'An-Nas',
    arabicName: 'الناس',
    translation: 'Os Humanos',
    verses: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', transliteration: 'Qul a\'udhu bi-Rabbin-nas', translation: 'Dize: Refugio-me no Senhor dos humanos' },
      { number: 2, arabic: 'مَلِكِ النَّاسِ', transliteration: 'Malikin-nas', translation: 'O Soberano dos humanos' },
      { number: 3, arabic: 'إِلَٰهِ النَّاسِ', transliteration: 'Ilahin-nas', translation: 'O Deus dos humanos' },
      { number: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', transliteration: 'Min sharril-waswasil-khannas', translation: 'Contra o mal do sussurrador oculto' },
      { number: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', transliteration: 'Alladhi yuwaswisu fi sudurin-nas', translation: 'Que sussurra nos coracoes dos humanos' },
      { number: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', transliteration: 'Minal-jinnati wan-nas', translation: 'Dentre os jinns e os humanos' },
    ],
  },
]

const MEMORIZATION_TIPS = [
  {
    title: 'Repita em voz alta',
    description: 'A memorizacao e 3x mais eficaz quando voce recita em voz alta. Comece lendo, depois feche os olhos e repita.',
  },
  {
    title: 'Memorize versiculo por versiculo',
    description: 'Nao tente decorar a surata inteira de uma vez. Memorize um versiculo, depois adicione o proximo e conecte.',
  },
  {
    title: 'Revise diariamente',
    description: 'Reserve 10-15 minutos apos cada oracao para revisar. A consistencia importa mais que a quantidade.',
  },
  {
    title: 'Entenda o significado',
    description: 'Quando voce compreende o que esta recitando, a memorizacao se torna mais natural e profunda.',
  },
  {
    title: 'Recite na oracao',
    description: 'Use as suratas memorizadas nas suas oracoes diarias. A pratica constante consolida a memoria.',
  },
]

// ─── Component ───────────────────────────────────────────────────────────

export function HifzClient() {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('ver-tudo')
  const [revealedVerses, setRevealedVerses] = useState<Set<number>>(new Set())
  const [memorized, setMemorized] = useState<number[]>([])
  const [showTips, setShowTips] = useState(false)

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-hifz-progress')
      if (saved) setMemorized(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  // Save progress to localStorage
  const toggleMemorized = (surahNumber: number) => {
    setMemorized(prev => {
      const next = prev.includes(surahNumber)
        ? prev.filter(n => n !== surahNumber)
        : [...prev, surahNumber]
      localStorage.setItem('kalam-hifz-progress', JSON.stringify(next))
      return next
    })
  }

  const handleVerseReveal = (verseNumber: number) => {
    if (viewMode === 'esconder-tudo') {
      setRevealedVerses(prev => {
        const next = new Set(prev)
        if (next.has(verseNumber)) {
          next.delete(verseNumber)
        } else {
          next.add(verseNumber)
        }
        return next
      })
    }
  }

  const resetRevealed = () => {
    setRevealedVerses(new Set())
  }

  const isVerseVisible = (verseNumber: number) => {
    if (viewMode === 'ver-tudo') return { arabic: true, transliteration: true, translation: true }
    if (viewMode === 'esconder-traducao') return { arabic: true, transliteration: true, translation: false }
    // esconder-tudo
    return {
      arabic: revealedVerses.has(verseNumber),
      transliteration: revealedVerses.has(verseNumber),
      translation: revealedVerses.has(verseNumber),
    }
  }

  const memorizedCount = memorized.length

  // ─── Surah Detail View ──────────────────────────────────────────────

  if (selectedSurah) {
    return (
      <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => { setSelectedSurah(null); resetRevealed() }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#B3B0A6',
              fontSize: '15px',
              cursor: 'pointer',
              padding: '0',
              marginBottom: '24px',
            }}
          >
            <ArrowLeft size={18} />
            Voltar
          </motion.button>

          {/* Surah header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '36px',
              color: '#C9A84C',
              direction: 'rtl',
              marginBottom: '8px',
            }}>
              {selectedSurah.arabicName}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '24px',
              color: '#F0EBE2',
              fontWeight: 600,
            }}>
              {selectedSurah.name}
            </h2>
            <p style={{ fontSize: '14px', color: '#7A7870', marginTop: '4px' }}>
              {selectedSurah.translation} &middot; {selectedSurah.verses.length} versiculos
            </p>
          </motion.div>

          {/* View mode selector */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}
          >
            {([
              { key: 'ver-tudo' as ViewMode, label: 'Ver Tudo', icon: Eye },
              { key: 'esconder-traducao' as ViewMode, label: 'Esconder Traducao', icon: EyeOff },
              { key: 'esconder-tudo' as ViewMode, label: 'Teste', icon: BookOpen },
            ]).map(mode => (
              <button
                key={mode.key}
                onClick={() => { setViewMode(mode.key); resetRevealed() }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: viewMode === mode.key ? '1px solid #C9A84C' : '1px solid #272230',
                  background: viewMode === mode.key ? 'rgba(201,168,76,0.1)' : '#161220',
                  color: viewMode === mode.key ? '#C9A84C' : '#B3B0A6',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                <mode.icon size={14} />
                {mode.label}
              </button>
            ))}
          </motion.div>

          {viewMode === 'esconder-tudo' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                marginBottom: '20px',
              }}
            >
              <p style={{ fontSize: '13px', color: '#C9A84C' }}>
                Toque em cada versiculo para revelar. Teste sua memorizacao!
              </p>
            </motion.div>
          )}

          {/* Verses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {selectedSurah.verses.map((verse, i) => {
              const vis = isVerseVisible(verse.number)
              const isHidden = viewMode === 'esconder-tudo' && !revealedVerses.has(verse.number)

              return (
                <motion.div
                  key={verse.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleVerseReveal(verse.number)}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: '#161220',
                    border: '1px solid #272230',
                    cursor: viewMode === 'esconder-tudo' ? 'pointer' : 'default',
                    transition: 'border-color 0.2s',
                    ...(isHidden ? { borderColor: 'rgba(201,168,76,0.15)' } : {}),
                  }}
                >
                  {/* Verse number */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      border: '1px solid #272230',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#C9A84C',
                      fontWeight: 600,
                    }}>
                      {verse.number}
                    </span>
                    {isHidden && (
                      <span style={{ fontSize: '12px', color: '#7A7870' }}>toque para revelar</span>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {vis.arabic ? (
                      <motion.p
                        key="arabic-visible"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          fontFamily: 'var(--font-arabic)',
                          fontSize: '24px',
                          lineHeight: '2',
                          color: '#F0EBE2',
                          direction: 'rtl',
                          textAlign: 'right',
                          marginBottom: '12px',
                        }}
                      >
                        {verse.arabic}
                      </motion.p>
                    ) : (
                      <motion.div
                        key="arabic-hidden"
                        style={{
                          height: '48px',
                          borderRadius: '8px',
                          background: 'rgba(201,168,76,0.04)',
                          border: '1px dashed rgba(201,168,76,0.15)',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <EyeOff size={16} style={{ color: '#7A7870' }} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {vis.transliteration && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        fontSize: '14px',
                        color: '#B3B0A6',
                        fontStyle: 'italic',
                        marginBottom: '8px',
                      }}
                    >
                      {verse.transliteration}
                    </motion.p>
                  )}

                  {vis.translation && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        fontSize: '14px',
                        color: '#7A7870',
                      }}
                    >
                      {verse.translation}
                    </motion.p>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Mark as memorized button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '32px', textAlign: 'center' }}
          >
            <button
              onClick={() => toggleMemorized(selectedSurah.number)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '12px',
                border: memorized.includes(selectedSurah.number)
                  ? '1px solid #C9A84C'
                  : '1px solid #272230',
                background: memorized.includes(selectedSurah.number)
                  ? 'rgba(201,168,76,0.12)'
                  : '#161220',
                color: memorized.includes(selectedSurah.number) ? '#C9A84C' : '#F0EBE2',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              {memorized.includes(selectedSurah.number) ? (
                <>
                  <Check size={18} />
                  Memorizada!
                </>
              ) : (
                <>
                  <Star size={18} />
                  Marcar como memorizada
                </>
              )}
            </button>
          </motion.div>
        </div>
      </main>
    )
  }

  // ─── Surah List View ────────────────────────────────────────────────

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/a-palavra"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#B3B0A6',
              fontSize: '15px',
              textDecoration: 'none',
              marginBottom: '24px',
            }}
          >
            <ArrowLeft size={18} />
            A Palavra
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            Hifz
          </h1>
          <p style={{ color: '#B3B0A6', fontSize: '15px', marginTop: '8px' }}>
            Memorize o Quran. Comece pelas suratas curtas.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            padding: '20px',
            borderRadius: '12px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ fontSize: '15px', color: '#F0EBE2', fontWeight: 500 }}>Seu progresso</p>
            <p style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 600 }}>
              {memorizedCount}/{HIFZ_SURAHS.length}
            </p>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: 'rgba(201,168,76,0.1)',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(memorizedCount / HIFZ_SURAHS.length) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                height: '100%',
                borderRadius: '3px',
                background: 'linear-gradient(90deg, #C9A84C, #E8D48B)',
              }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '8px' }}>
            {memorizedCount === 0 && 'Comece sua jornada de memorizacao'}
            {memorizedCount > 0 && memorizedCount < HIFZ_SURAHS.length && `${HIFZ_SURAHS.length - memorizedCount} suratas restantes`}
            {memorizedCount === HIFZ_SURAHS.length && 'Parabens! Todas as suratas memorizadas!'}
          </p>
        </motion.div>

        {/* Surah list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          {HIFZ_SURAHS.map((surah, i) => {
            const isMemorized = memorized.includes(surah.number)

            return (
              <motion.button
                key={surah.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelectedSurah(surah)}
                className="card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  borderRadius: '12px',
                  background: '#161220',
                  border: isMemorized ? '1px solid rgba(201,168,76,0.3)' : '1px solid #272230',
                  textDecoration: 'none',
                  gap: '16px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {/* Number */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: isMemorized ? '1px solid rgba(201,168,76,0.3)' : '1px solid #272230',
                  background: isMemorized ? 'rgba(201,168,76,0.08)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#C9A84C',
                  fontWeight: 600,
                  flexShrink: 0,
                }}>
                  {isMemorized ? <Check size={16} /> : surah.number}
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>
                    {surah.name}
                  </p>
                  <p style={{ fontSize: '13px', color: '#7A7870' }}>
                    {surah.translation} &middot; {surah.verses.length} versiculos
                  </p>
                </div>

                {/* Arabic name */}
                <p style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '20px',
                  color: '#C9A84C',
                  direction: 'rtl',
                  flexShrink: 0,
                }}>
                  {surah.arabicName}
                </p>
              </motion.button>
            )
          })}
        </div>

        {/* Tips section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowTips(!showTips)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '20px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              cursor: 'pointer',
              color: '#F0EBE2',
              textAlign: 'left',
            }}
          >
            <Lightbulb size={20} style={{ color: '#C9A84C', flexShrink: 0 }} />
            <p style={{ flex: 1, fontSize: '16px', fontWeight: 500 }}>Como memorizar o Quran</p>
            {showTips ? (
              <ChevronUp size={18} style={{ color: '#7A7870', flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} style={{ color: '#7A7870', flexShrink: 0 }} />
            )}
          </button>

          <AnimatePresence>
            {showTips && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '16px 0',
                }}>
                  {MEMORIZATION_TIPS.map((tip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      style={{
                        padding: '16px',
                        borderRadius: '10px',
                        background: 'rgba(201,168,76,0.04)',
                        border: '1px solid rgba(201,168,76,0.1)',
                      }}
                    >
                      <p style={{ fontSize: '15px', color: '#F0EBE2', fontWeight: 500, marginBottom: '4px' }}>
                        {i + 1}. {tip.title}
                      </p>
                      <p style={{ fontSize: '13px', color: '#7A7870', lineHeight: '1.5' }}>
                        {tip.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}
