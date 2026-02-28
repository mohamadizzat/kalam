'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  BookOpen,
  Sun,
  Compass,
  Heart,
  Share2,
  Flame,
  BookMarked,
  PenLine,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

// ── DATA ────────────────────────────────────────────────────────────────────────

const SANCTUARY_VERSES = [
  // 1 - Unicidade
  { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', translation: 'Diz: Ele é Allah, o Único.', surahRef: 'Al-Ikhlas 112:1' },
  // 2 - Proximidade
  { arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', translation: 'E quando Meus servos te perguntarem sobre Mim — Eu estou próximo.', surahRef: 'Al-Baqarah 2:186' },
  // 3 - Facilidade
  { arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Certamente, com a dificuldade vem a facilidade.', surahRef: 'Al-Inshirah 94:6' },
  // 4 - Lembranca
  { arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ', translation: 'Lembrai-vos de Mim, e Eu Me lembrarei de vós.', surahRef: 'Al-Baqarah 2:152' },
  // 5 - Presenca
  { arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', translation: 'E Ele está convosco onde quer que estejais.', surahRef: 'Al-Hadid 57:4' },
  // 6 - Misericordia
  { arabic: 'وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', translation: 'E não desespereis da misericórdia de Allah.', surahRef: 'Az-Zumar 39:53' },
  // 7 - Recompensa
  { arabic: 'إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ', translation: 'Allah não desperdiça a recompensa dos que fazem o bem.', surahRef: 'At-Tawbah 9:120' },
  // 8 - Paciencia
  { arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', translation: 'Allah está com os pacientes.', surahRef: 'Al-Baqarah 2:153' },
  // 9 - Confianca
  { arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', translation: 'E quem confia em Allah, Ele lhe será suficiente.', surahRef: 'At-Talaq 65:3' },
  // 10 - Gratidao
  { arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', translation: 'Se fordes gratos, certamente vos aumentarei.', surahRef: 'Ibrahim 14:7' },
  // 11 - Perdao
  { arabic: 'وَهُوَ الْغَفُورُ الرَّحِيمُ', translation: 'E Ele é o Perdoador, o Misericordioso.', surahRef: 'Yunus 10:107' },
  // 12 - Amor
  { arabic: 'إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ', translation: 'Allah ama os que fazem o bem.', surahRef: 'Al-Baqarah 2:195' },
  // 13 - Esperanca
  { arabic: 'إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ', translation: 'A misericórdia de Allah está próxima dos que fazem o bem.', surahRef: 'Al-A\'raf 7:56' },
  // 14 - Forca
  { arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', translation: 'Allah não impõe a ninguém além da sua capacidade.', surahRef: 'Al-Baqarah 2:286' },
  // 15 - Conhecimento
  { arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', translation: 'E diz: Ó meu Senhor, aumenta-me em conhecimento.', surahRef: 'Ta-Ha 20:114' },
  // 16 - Paz
  { arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', translation: 'Não é com a lembrança de Allah que os corações se tranquilizam?', surahRef: 'Ar-Ra\'d 13:28' },
  // 17 - Protecao
  { arabic: 'وَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ', translation: 'E Allah é o melhor dos guardiões e o mais Misericordioso.', surahRef: 'Yusuf 12:64' },
  // 18 - Provisao
  { arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا', translation: 'E quem teme a Allah, Ele lhe abrirá uma saída.', surahRef: 'At-Talaq 65:2' },
  // 19 - Orientacao
  { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guia-nos ao caminho reto.', surahRef: 'Al-Fatihah 1:6' },
  // 20 - Luz
  { arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ', translation: 'Allah é a luz dos céus e da terra.', surahRef: 'An-Nur 24:35' },
  // 21 - Humildade
  { arabic: 'وَاخْفِضْ جَنَاحَكَ لِلْمُؤْمِنِينَ', translation: 'E abaixa tua asa protetora para os crentes.', surahRef: 'Al-Hijr 15:88' },
  // 22 - Justica
  { arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ', translation: 'Allah ordena a justiça e a excelência.', surahRef: 'An-Nahl 16:90' },
  // 23 - Retorno
  { arabic: 'وَإِلَيْهِ تُرْجَعُونَ', translation: 'E a Ele sereis retornados.', surahRef: 'Al-Baqarah 2:245' },
  // 24 - Criacao
  { arabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ', translation: 'Criamos o ser humano e sabemos o que sua alma lhe sussurra.', surahRef: 'Qaf 50:16' },
  // 25 - Refugio
  { arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', translation: 'Allah nos basta, e Ele é o melhor Protetor.', surahRef: 'Aal-Imran 3:173' },
  // 26 - Verdade
  { arabic: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ', translation: 'E diz: A verdade chegou e a falsidade pereceu.', surahRef: 'Al-Isra 17:81' },
  // 27 - Arrependimento
  { arabic: 'إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ', translation: 'Ele é o Acolhedor do arrependimento, o Misericordioso.', surahRef: 'Al-Baqarah 2:37' },
  // 28 - Vitoria
  { arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا', translation: 'Na verdade, concedemos-te uma vitória evidente.', surahRef: 'Al-Fath 48:1' },
  // 29 - Beleza
  { arabic: 'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ', translation: 'Allah é belo e ama a beleza.', surahRef: 'Hadith — Muslim' },
  // 30 - Confianca plena
  { arabic: 'فَفِرُّوا إِلَى اللَّهِ', translation: 'Refugiai-vos em Allah.', surahRef: 'Adh-Dhariyat 51:50' },
]

const NAMES_PREVIEW = [
  { arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', meaning: 'O Infinitamente Misericordioso' },
  { arabic: 'الرَّحِيمُ', transliteration: 'Ar-Rahim', meaning: 'O Constantemente Misericordioso' },
  { arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaning: 'O Soberano' },
  { arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaning: 'O Sagrado' },
  { arabic: 'السَّلَامُ', transliteration: 'As-Salam', meaning: 'A Paz' },
  { arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', meaning: 'O Guardião da Fé' },
  { arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaning: 'O Vigilante' },
  { arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaning: 'O Todo-Poderoso' },
  { arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaning: 'O Irresistível' },
  { arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaning: 'O Supremo' },
]

const portals = [
  { icon: BookOpen, label: 'A Palavra', sublabel: 'Leia o Alcorão', href: '/a-palavra', stat: '114 Suratas' },
  { icon: Sun, label: 'A Presença', sublabel: 'Contemplação', href: '/a-presenca', stat: '99 Nomes' },
  { icon: Compass, label: 'A Jornada', sublabel: 'Trilhas de estudo', href: '/a-jornada', stat: 'Trilhas guiadas' },
  { icon: Heart, label: 'A Alma', sublabel: 'Seu espaço íntimo', href: '/a-alma', stat: 'Reflexão diária' },
  { icon: Star, label: 'Kids', sublabel: 'Aprender brincando', href: '/kids', stat: 'Conteúdo infantil' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

// ── GOLD PARTICLES COMPONENT ────────────────────────────────────────────────

function GoldParticles() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
  }))

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.5, 0],
            scale: [0, 1, 1.2, 0],
            y: [0, -30, -60, -90],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(201,168,76,${p.opacity + 0.2}) 0%, rgba(201,168,76,0) 70%)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,${p.opacity * 0.5})`,
          }}
        />
      ))}
      {/* Central glow behind verse */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  )
}

// ── PAGE ────────────────────────────────────────────────────────────────────────

type LastRead = {
  surah: number
  verse: number
  name: string
}

export default function SanctuaryPage() {
  const [dateLabel, setDateLabel] = useState('')
  const [verseIndex, setVerseIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lastRead, setLastRead] = useState<LastRead | null>(null)
  const [surahsReadCount, setSurahsReadCount] = useState(0)
  const [journalCount, setJournalCount] = useState(0)
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')
  const [showNewUserBanner, setShowNewUserBanner] = useState(false)

  // Check if user has completed onboarding
  useEffect(() => {
    try {
      const done = localStorage.getItem('kalam-onboarding-done')
      const dismissed = localStorage.getItem('kalam-banner-dismissed')
      if (!done && !dismissed) {
        setShowNewUserBanner(true)
      }
    } catch {}
  }, [])

  useEffect(() => {
    const now = new Date()
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    setDateLabel(`${days[now.getDay()]} \u00B7 ${now.getDate()} de ${months[now.getMonth()]}`)
    // Day of month (1-30/31) maps directly to verse index (0-29)
    setVerseIndex((now.getDate() - 1) % SANCTUARY_VERSES.length)
  }, [])

  // Streak logic
  useEffect(() => {
    const lastVisit = localStorage.getItem('kalam-last-visit')
    const currentStreak = parseInt(localStorage.getItem('kalam-streak') || '0')
    const today = new Date().toISOString().split('T')[0]

    if (lastVisit !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      const newStreak = lastVisit === yesterday ? currentStreak + 1 : 1
      localStorage.setItem('kalam-streak', String(newStreak))
      localStorage.setItem('kalam-last-visit', today)
      setStreak(newStreak)
    } else {
      setStreak(currentStreak)
    }
  }, [])

  // Last read position + stats
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kalam-last-read')
      if (saved) setLastRead(JSON.parse(saved))
    } catch { /* ignore */ }

    try {
      const surahs = localStorage.getItem('kalam-surahs-read')
      if (surahs) {
        const parsed = JSON.parse(surahs)
        setSurahsReadCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch { /* ignore */ }

    try {
      const journal = localStorage.getItem('kalam-journal')
      if (journal) {
        const parsed = JSON.parse(journal)
        setJournalCount(Array.isArray(parsed) ? parsed.length : 0)
      }
    } catch { /* ignore */ }
  }, [])

  const verse = SANCTUARY_VERSES[verseIndex]
  const nameOfDay = NAMES_PREVIEW[new Date().getDate() % NAMES_PREVIEW.length]

  const handleShare = useCallback(async () => {
    const text = `"${verse.translation}"\n\n${verse.arabic}\n\n— ${verse.surahRef}\n\nKALAM — Deus. Todo dia.`

    if (navigator.share) {
      try {
        await navigator.share({ title: 'KALAM — Versículo do Dia', text })
        return
      } catch {
        // user cancelled or share failed, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2000)
    } catch {
      // clipboard also failed, do nothing
    }
  }, [verse])

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>

      {/* ── NEW USER BANNER ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showNewUserBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '12px 20px',
              background: 'rgba(201,168,76,0.06)',
              borderBottom: '1px solid rgba(201,168,76,0.12)',
              position: 'relative',
            }}>
              <Sparkles size={15} style={{ color: '#C9A84C', flexShrink: 0 }} />
              <Link
                href="/comecar"
                style={{
                  fontSize: '14px',
                  color: '#C9A84C',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Novo aqui? <span style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Veja como começar</span>
              </Link>
              <button
                onClick={() => {
                  setShowNewUserBanner(false)
                  try { localStorage.setItem('kalam-banner-dismissed', 'true') } catch {}
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none',
                  border: 'none',
                  color: '#7A7870',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                aria-label="Fechar banner"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO — fullscreen verse experience ──────────────────────────────── */}
      <section
        style={{ minHeight: 'calc(100svh - 72px)' }}
        className="flex flex-col items-center justify-center px-6 text-center relative"
      >
        {/* Gold particles behind text */}
        <GoldParticles />

        {/* Date */}
        <motion.p
          {...fadeUp}
          style={{ color: '#7A7870', fontSize: '12px', letterSpacing: '0.15em', zIndex: 1 }}
          className="uppercase mb-14"
        >
          {dateLabel || '\u00A0'}
        </motion.p>

        {/* Arabic verse */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="arabic-glow arabic-pulse mb-10"
          style={{
            fontFamily: 'var(--font-arabic)',
            direction: 'rtl',
            fontSize: 'clamp(40px, 9vw, 76px)',
            lineHeight: 1.7,
            color: '#C9A84C',
            maxWidth: '680px',
            zIndex: 1,
            padding: '0 8px',
          }}
        >
          {verse.arabic}
        </motion.p>

        {/* Portuguese translation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 2.8vw, 22px)',
            lineHeight: 1.9,
            color: '#F0EBE2',
            maxWidth: '580px',
            fontStyle: 'italic',
            marginBottom: '14px',
            zIndex: 1,
          }}
        >
          &ldquo;{verse.translation}&rdquo;
        </motion.p>

        {/* Reference */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ fontSize: '13px', color: '#7A7870', marginBottom: '28px', zIndex: 1 }}
        >
          &mdash; {verse.surahRef}
        </motion.p>

        {/* CTA row: Abrir a Palavra + Compartilhar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link href="/a-palavra" className="shimmer-gold" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '999px',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C', fontSize: '15px', fontWeight: 500,
            textDecoration: 'none',
          }}>
            Abrir a Palavra <ArrowRight size={16} />
          </Link>

          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '14px 20px', borderRadius: '999px',
              border: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(201,168,76,0.06)',
              color: shareState === 'copied' ? '#C9A84C' : '#7A7870',
              fontSize: '14px', fontWeight: 400,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <Share2 size={15} />
            {shareState === 'copied' ? 'Copiado!' : 'Compartilhar'}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <ChevronDown size={16} style={{ color: '#7A7870' }} />
        </motion.div>
      </section>

      {/* ── NAME OF GOD section ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="px-6 py-16 text-center"
        style={{ borderTop: '1px solid #272230' }}
      >
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A7870' }} className="uppercase mb-6">
          Nome de Deus &middot; Hoje
        </p>
        <p style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(32px, 6vw, 48px)', color: '#C9A84C', marginBottom: '8px' }} className="gold-glow">
          {nameOfDay.arabic}
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#F0EBE2', marginBottom: '4px' }}>
          {nameOfDay.transliteration}
        </p>
        <p style={{ fontSize: '15px', color: '#B3B0A6' }}>
          {nameOfDay.meaning}
        </p>
        <Link href="/a-presenca/99-nomes" style={{ fontSize: '13px', color: '#C9A84C', marginTop: '16px', display: 'inline-block', textDecoration: 'none' }}>
          Explorar os 99 Nomes &rarr;
        </Link>
      </motion.section>

      {/* ── ONDE VOCE PAROU + STATS ────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-10"
        style={{ borderTop: '1px solid #272230', paddingTop: '32px' }}
      >
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A7870', marginBottom: '16px' }} className="uppercase">
          Onde voc&ecirc; parou
        </p>

        {/* Last surah read */}
        {lastRead ? (
          <Link
            href={`/a-palavra/${lastRead.surah}`}
            className="card-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            <BookOpen size={22} style={{ color: '#C9A84C', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '15px', color: '#F0EBE2', fontWeight: 500 }}>
                Continuar: {lastRead.name}
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '2px' }}>
                Vers&iacute;culo {lastRead.verse}
              </p>
            </div>
            <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
          </Link>
        ) : (
          <Link
            href="/a-palavra"
            className="card-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.1)',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            <BookOpen size={22} style={{ color: '#7A7870', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '15px', color: '#B3B0A6' }}>
                Comece sua leitura
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '2px' }}>
                114 suratas te esperam
              </p>
            </div>
            <ArrowRight size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
          </Link>
        )}

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          {/* Streak */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '16px 8px', borderRadius: '12px',
              background: '#161220', border: '1px solid #272230',
            }}
          >
            <Flame size={18} style={{ color: streak > 0 ? '#C9A84C' : '#7A7870', marginBottom: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 600, color: streak > 0 ? '#C9A84C' : '#7A7870', fontFamily: 'var(--font-serif)' }}>
              {streak}
            </span>
            <span style={{ fontSize: '11px', color: '#7A7870', marginTop: '2px' }}>
              {streak === 1 ? 'dia' : 'dias'}
            </span>
          </div>

          {/* Surahs read */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '16px 8px', borderRadius: '12px',
              background: '#161220', border: '1px solid #272230',
            }}
          >
            <BookMarked size={18} style={{ color: surahsReadCount > 0 ? '#C9A84C' : '#7A7870', marginBottom: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 600, color: surahsReadCount > 0 ? '#C9A84C' : '#7A7870', fontFamily: 'var(--font-serif)' }}>
              {surahsReadCount}
            </span>
            <span style={{ fontSize: '11px', color: '#7A7870', marginTop: '2px' }}>
              suratas
            </span>
          </div>

          {/* Journal entries */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '16px 8px', borderRadius: '12px',
              background: '#161220', border: '1px solid #272230',
            }}
          >
            <PenLine size={18} style={{ color: journalCount > 0 ? '#C9A84C' : '#7A7870', marginBottom: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 600, color: journalCount > 0 ? '#C9A84C' : '#7A7870', fontFamily: 'var(--font-serif)' }}>
              {journalCount}
            </span>
            <span style={{ fontSize: '11px', color: '#7A7870', marginTop: '2px' }}>
              reflexões
            </span>
          </div>
        </div>
      </motion.section>

      {/* ── 4 PORTALS ───────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="px-6 py-16"
        style={{ borderTop: '1px solid #272230' }}
      >
        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A7870', marginBottom: '20px', textAlign: 'center' }} className="uppercase">
          Explorar
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {portals.map((portal, i) => (
            <motion.div
              key={portal.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={portal.href} className="card-hover" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '32px 16px', borderRadius: '16px',
                background: '#161220', border: '1px solid #272230',
                textDecoration: 'none', textAlign: 'center', gap: '10px',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Subtle icon glow on hover via CSS */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(201,168,76,0.08)',
                  marginBottom: '4px',
                }}>
                  <portal.icon size={24} style={{ color: '#C9A84C' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>
                  {portal.label}
                </span>
                <span style={{ fontSize: '12px', color: '#B3B0A6', lineHeight: 1.4 }}>
                  {portal.sublabel}
                </span>
                <span style={{ fontSize: '11px', color: '#7A7870', letterSpacing: '0.05em' }}>
                  {portal.stat}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </main>
  )
}
