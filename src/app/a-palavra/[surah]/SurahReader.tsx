'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Bookmark, Share2, Headphones } from 'lucide-react'
import type { Surah } from '@/lib/data/surahs'
import { surahs } from '@/lib/data/surahs'
import { VerseShareCard } from '@/components/shared/VerseShareCard'
import { BackButton } from '@/components/shared/BackButton'
import { AudioPlayer } from '@/components/shared/AudioPlayer'

type Verse = {
  number: number
  arabic: string
  portuguese: string
}

type BookmarkEntry = {
  surah: number
  verse: number
  arabic: string
  portuguese: string
}

type ArabicSize = 'sm' | 'md' | 'lg' | 'xl'

const arabicSizes: Record<ArabicSize, string> = {
  sm: 'clamp(18px, 4vw, 24px)',
  md: 'clamp(24px, 5vw, 36px)',
  lg: 'clamp(32px, 6vw, 48px)',
  xl: 'clamp(40px, 8vw, 60px)',
}

const sizeOptions: { key: ArabicSize; label: string; previewSize: string }[] = [
  { key: 'sm', label: 'ع', previewSize: '14px' },
  { key: 'md', label: 'ع', previewSize: '18px' },
  { key: 'lg', label: 'ع', previewSize: '22px' },
  { key: 'xl', label: 'ع', previewSize: '26px' },
]

export function SurahReader({ surah }: { surah: Surah }) {
  const [verses, setVerses] = useState<Verse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showTranslation, setShowTranslation] = useState(true)

  // A. Font size control
  const [arabicSize, setArabicSize] = useState<ArabicSize>('md')

  // B. Reading progress
  const [scrollProgress, setScrollProgress] = useState(0)

  // C. Bookmarks
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([])

  // D. Last visible verse tracking
  const lastVisibleVerseRef = useRef<number>(1)
  const verseRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // E. Surah read tracking
  const [surahRead, setSurahRead] = useState(false)

  // F. Verse share modal
  const [shareVerse, setShareVerse] = useState<Verse | null>(null)

  // G. Audio player
  const [audioSurah, setAudioSurah] = useState<number | null>(null)

  const handleAudioSurahChange = useCallback((num: number) => {
    setAudioSurah(num)
  }, [])

  const currentAudioSurah = audioSurah ? surahs.find(s => s.number === audioSurah) : null

  // ── Load persisted preferences ──────────────────────────────────────────────

  useEffect(() => {
    // Font size
    const savedSize = localStorage.getItem('kalam-arabic-size')
    if (savedSize && savedSize in arabicSizes) setArabicSize(savedSize as ArabicSize)

    // Bookmarks
    try {
      const savedBookmarks = localStorage.getItem('kalam-bookmarks')
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks))
    } catch { /* ignore parse errors */ }

    // Check if surah already read
    try {
      const readSurahs = JSON.parse(localStorage.getItem('kalam-surahs-read') || '[]')
      if (readSurahs.includes(surah.number)) setSurahRead(true)
    } catch { /* ignore */ }
  }, [surah.number])

  // Persist font size
  useEffect(() => {
    localStorage.setItem('kalam-arabic-size', arabicSize)
  }, [arabicSize])

  // ── B. Scroll progress ──────────────────────────────────────────────────────

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0)

      // D. Save position after 2 seconds of no scrolling
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        localStorage.setItem('kalam-last-read', JSON.stringify({
          surah: surah.number,
          verse: lastVisibleVerseRef.current,
          name: surah.name,
        }))
      }, 2000)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [surah.number, surah.name])

  // ── D + E. IntersectionObserver for verse visibility ────────────────────────

  useEffect(() => {
    if (verses.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVerse = lastVisibleVerseRef.current
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const verseNum = Number(entry.target.getAttribute('data-verse'))
            if (verseNum > maxVerse) maxVerse = verseNum
          }
        })
        lastVisibleVerseRef.current = maxVerse

        // E. Mark as read when last verse is visible
        if (maxVerse === verses.length && !surahRead) {
          setSurahRead(true)
          try {
            const readSurahs = JSON.parse(localStorage.getItem('kalam-surahs-read') || '[]')
            if (!readSurahs.includes(surah.number)) {
              readSurahs.push(surah.number)
              localStorage.setItem('kalam-surahs-read', JSON.stringify(readSurahs))
            }
          } catch { /* ignore */ }
        }
      },
      { threshold: 0.5 }
    )

    verseRefs.current.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [verses, surah.number, surahRead])

  // ── C. Bookmark toggle ──────────────────────────────────────────────────────

  const isBookmarked = useCallback(
    (verseNum: number) => bookmarks.some((b) => b.surah === surah.number && b.verse === verseNum),
    [bookmarks, surah.number]
  )

  const toggleBookmark = useCallback(
    (verse: Verse) => {
      setBookmarks((prev) => {
        const exists = prev.some((b) => b.surah === surah.number && b.verse === verse.number)
        const next = exists
          ? prev.filter((b) => !(b.surah === surah.number && b.verse === verse.number))
          : [...prev, { surah: surah.number, verse: verse.number, arabic: verse.arabic, portuguese: verse.portuguese }]
        localStorage.setItem('kalam-bookmarks', JSON.stringify(next))
        return next
      })
    },
    [surah.number]
  )

  // ── Fetch verses ────────────────────────────────────────────────────────────

  useEffect(() => {
    async function fetchVerses() {
      try {
        setLoading(true)
        setError(false)
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surah.number}/editions/quran-uthmani,pt.elhayek`
        )
        const data = await res.json()
        if (data.code === 200 && data.data) {
          const arabicAyahs = data.data[0].ayahs
          const ptAyahs = data.data[1].ayahs
          const merged: Verse[] = arabicAyahs.map((a: any, i: number) => ({
            number: a.numberInSurah,
            arabic: a.text,
            portuguese: ptAyahs[i]?.text || '',
          }))
          setVerses(merged)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchVerses()
  }, [surah.number])

  // ── Ref callback for verse elements ─────────────────────────────────────────

  const setVerseRef = useCallback((el: HTMLDivElement | null, verseNum: number) => {
    if (el) {
      verseRefs.current.set(verseNum, el)
    } else {
      verseRefs.current.delete(verseNum)
    }
  }, [])

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      {/* B. Reading progress bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'transparent',
          zIndex: 50,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: '#C9A84C',
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* Header */}
      <header style={{ borderBottom: '1px solid #272230', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BackButton href="/a-palavra" label="A Palavra" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {surahRead && (
              <span style={{ fontSize: '11px', color: '#C9A84C', opacity: 0.7, letterSpacing: '0.05em' }}>
                &#10003; Lida
              </span>
            )}
            <button
              onClick={() => setAudioSurah(audioSurah === surah.number ? null : surah.number)}
              aria-label="Ouvir recitacao"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                background: audioSurah === surah.number ? 'rgba(201, 168, 76, 0.15)' : 'rgba(201, 168, 76, 0.06)',
                border: audioSurah === surah.number ? '1px solid #C9A84C' : '1px solid rgba(201, 168, 76, 0.2)',
                color: '#C9A84C',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Headphones size={14} />
              <span>{audioSurah === surah.number ? 'Ouvindo' : 'Ouvir'}</span>
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#F0EBE2' }}>
              {surah.name}
            </h1>
            <p style={{ fontSize: '13px', color: '#7A7870' }}>
              {surah.translation} · {surah.versesCount} versículos · {surah.revelationPlace}
            </p>
          </div>
          <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '28px', color: '#C9A84C' }}>
            {surah.arabicName}
          </p>
        </div>
      </header>

      {/* Toggle */}
      <div style={{ padding: '16px 24px', display: 'flex', gap: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 500,
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            cursor: 'default',
          }}
        >
          Árabe
        </span>
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 500,
            background: showTranslation ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
            border: showTranslation ? '1px solid #C9A84C' : '1px solid #272230',
            color: showTranslation ? '#C9A84C' : '#7A7870',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Tradução
        </button>
      </div>

      {/* A. Font size control */}
      <div style={{ padding: '0 24px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        {sizeOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setArabicSize(opt.key)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              fontFamily: 'var(--font-arabic)',
              fontSize: opt.previewSize,
              background: arabicSize === opt.key ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
              border: arabicSize === opt.key ? '1px solid #C9A84C' : '1px solid #272230',
              color: arabicSize === opt.key ? '#C9A84C' : '#7A7870',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Bismillah */}
      {surah.number !== 1 && surah.number !== 9 && (
        <div style={{ textAlign: 'center', padding: '32px', borderBottom: '1px solid #272230' }}>
          <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '28px', color: '#C9A84C', direction: 'rtl' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p style={{ fontSize: '13px', color: '#7A7870', marginTop: '8px' }}>
            Em nome de Deus, o Infinitamente Misericordioso, o Constantemente Misericordioso
          </p>
        </div>
      )}

      {/* Verses */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p style={{ color: '#7A7870' }}>Carregando a Palavra...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p style={{ color: '#7A7870' }}>Não foi possível carregar</p>
          <button
            onClick={() => window.location.reload()}
            style={{ color: '#C9A84C', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="divide-y" style={{ borderColor: '#272230' }}>
          {verses.map((verse, index) => {
            const shouldAnimate = index < 20
            const bookmarked = isBookmarked(verse.number)

            const content = (
              <div
                key={verse.number}
                ref={(el) => setVerseRef(el, verse.number)}
                data-verse={verse.number}
                style={{ padding: '32px 24px' }}
              >
                {/* Verse number + bookmark */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #272230',
                      fontSize: '12px',
                      color: '#C9A84C',
                    }}
                  >
                    {verse.number}
                  </span>

                  {/* C. Bookmark + F. Share icons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShareVerse(verse)
                      }}
                      aria-label="Compartilhar versículo"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.15s ease',
                        opacity: 0.6,
                      }}
                    >
                      <Share2
                        size={16}
                        stroke="#7A7870"
                        strokeWidth={1.5}
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleBookmark(verse)
                      }}
                      aria-label={bookmarked ? 'Remover marcador' : 'Adicionar marcador'}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.15s ease',
                      }}
                    >
                      <Bookmark
                        size={18}
                        fill={bookmarked ? '#C9A84C' : 'none'}
                        stroke={bookmarked ? '#C9A84C' : '#7A7870'}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </div>

                {/* Arabic text + Translation — tappable for share */}
                <div
                  onClick={() => setShareVerse(verse)}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Compartilhar versículo ${verse.number}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShareVerse(verse) }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      direction: 'rtl',
                      textAlign: 'right',
                      fontSize: arabicSizes[arabicSize],
                      lineHeight: 1.8,
                      color: '#C9A84C',
                      marginBottom: showTranslation ? '16px' : '0',
                    }}
                  >
                    {verse.arabic}
                  </p>

                  {showTranslation && (
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.75,
                        color: '#B3B0A6',
                      }}
                    >
                      {verse.portuguese}
                    </p>
                  )}
                </div>
              </div>
            )

            if (shouldAnimate) {
              return (
                <motion.div
                  key={verse.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                >
                  {content}
                </motion.div>
              )
            }

            return content
          })}
        </div>
      )}

      {/* F. Verse Share Modal */}
      <VerseShareCard
        arabic={shareVerse?.arabic || ''}
        translation={shareVerse?.portuguese || ''}
        surahName={surah.name}
        verseNumber={shareVerse?.number || 0}
        isOpen={shareVerse !== null}
        onClose={() => setShareVerse(null)}
      />

      {/* G. Audio Player */}
      {audioSurah !== null && currentAudioSurah && (
        <AudioPlayer
          surahNumber={audioSurah}
          surahName={currentAudioSurah.name}
          arabicName={currentAudioSurah.arabicName}
          onClose={() => setAudioSurah(null)}
          onSurahChange={handleAudioSurahChange}
        />
      )}
    </main>
  )
}
