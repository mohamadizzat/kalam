'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Type,
  BookOpenText,
  Trash2,
  Bookmark,
  Info,
  ExternalLink,
  AlertTriangle,
  Check,
  RotateCcw,
} from 'lucide-react'

type FontSize = 'small' | 'medium' | 'large'

const FONT_SIZE_KEY = 'kalam-font-size'
const ARABIC_SIZE_KEY = 'kalam-arabic-size'

const FONT_SIZES: { value: FontSize; label: string; size: string }[] = [
  { value: 'small', label: 'Pequeno', size: '14px' },
  { value: 'medium', label: 'Medio', size: '16px' },
  { value: 'large', label: 'Grande', size: '18px' },
]

const ARABIC_SIZES: { value: string; label: string; size: string }[] = [
  { value: 'small', label: 'Pequeno', size: '20px' },
  { value: 'medium', label: 'Medio', size: '26px' },
  { value: 'large', label: 'Grande', size: '32px' },
]

// All known localStorage keys used by Kalam
const ALL_PROGRESS_KEYS = [
  'kalam-streak',
  'kalam-last-visit',
  'kalam-last-read',
  'kalam-surahs-read',
  'kalam-journal',
  'kalam-names-studied',
  'kalam-dhikr-sessions',
  'kalam-mental-health-read',
  'kalam-active-challenge',
  'kalam-completed-challenges',
  'kalam-ramadan-progress',
  'kalam-hifz-progress',
  'kalam-arabic-letters',
  'kalam-seerah-read',
  'kalam-companions-read',
  'kalam-finance-read',
  'kalam-hadith-favorites',
  'kalam-flashcards-studied',
  'kalam-parables-read',
  'kalam-zakat-history',
]

const BOOKMARK_KEYS = [
  'kalam-bookmarks',
]

export function ConfigClient() {
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [arabicSize, setArabicSize] = useState<string>('medium')
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showBookmarkConfirm, setShowBookmarkConfirm] = useState(false)
  const [resetDone, setResetDone] = useState(false)
  const [bookmarkDone, setBookmarkDone] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedFont = localStorage.getItem(FONT_SIZE_KEY) as FontSize | null
    if (savedFont) setFontSize(savedFont)

    const savedArabic = localStorage.getItem(ARABIC_SIZE_KEY)
    if (savedArabic) setArabicSize(savedArabic)
  }, [])

  const updateFontSize = (size: FontSize) => {
    setFontSize(size)
    localStorage.setItem(FONT_SIZE_KEY, size)
  }

  const updateArabicSize = (size: string) => {
    setArabicSize(size)
    localStorage.setItem(ARABIC_SIZE_KEY, size)
  }

  const resetAllProgress = () => {
    ALL_PROGRESS_KEYS.forEach(key => localStorage.removeItem(key))
    // Also clear routine keys (dynamic date-based keys)
    const allKeys = Object.keys(localStorage)
    allKeys.forEach(key => {
      if (key.startsWith('kalam-routine-') || key.startsWith('kalam-duas-')) {
        localStorage.removeItem(key)
      }
    })
    setShowResetConfirm(false)
    setResetDone(true)
    setTimeout(() => setResetDone(false), 3000)
  }

  const clearBookmarks = () => {
    BOOKMARK_KEYS.forEach(key => localStorage.removeItem(key))
    setShowBookmarkConfirm(false)
    setBookmarkDone(true)
    setTimeout(() => setBookmarkDone(false), 3000)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '32px' }}
        >
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#7A7870',
            textDecoration: 'none',
            fontSize: '14px',
          }}>
            <ArrowLeft size={16} />
            Inicio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 36px)',
            color: '#F0EBE2',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}>
            Configuracoes
          </h1>
          <p style={{
            fontSize: '15px',
            color: '#7A7870',
          }}>
            Personalize sua experiencia no Kalam
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════ */}
        {/* FONT SIZE */}
        {/* ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            padding: '24px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '12px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(201,168,76,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Type size={20} style={{ color: '#C9A84C' }} />
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#F0EBE2',
              }}>
                Tamanho do Texto
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870' }}>
                Ajuste o tamanho da fonte geral
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {FONT_SIZES.map((option) => (
              <button
                key={option.value}
                onClick={() => updateFontSize(option.value)}
                style={{
                  flex: 1,
                  padding: '12px 8px',
                  borderRadius: '10px',
                  background: fontSize === option.value ? 'rgba(201,168,76,0.15)' : '#0D0B12',
                  border: fontSize === option.value ? '1px solid rgba(201,168,76,0.4)' : '1px solid #272230',
                  color: fontSize === option.value ? '#C9A84C' : '#7A7870',
                  fontSize: option.size,
                  fontWeight: fontSize === option.value ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Preview */}
          <div style={{
            marginTop: '16px',
            padding: '16px',
            borderRadius: '10px',
            background: '#0D0B12',
            border: '1px solid #272230',
          }}>
            <p style={{
              fontSize: FONT_SIZES.find(f => f.value === fontSize)?.size,
              color: '#F0EBE2',
              lineHeight: 1.6,
            }}>
              Exemplo de texto no tamanho selecionado.
            </p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════ */}
        {/* ARABIC FONT SIZE */}
        {/* ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            padding: '24px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '12px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(201,168,76,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <BookOpenText size={20} style={{ color: '#C9A84C' }} />
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#F0EBE2',
              }}>
                Tamanho do Arabe
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870' }}>
                Ajuste o tamanho da fonte arabica
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {ARABIC_SIZES.map((option) => (
              <button
                key={option.value}
                onClick={() => updateArabicSize(option.value)}
                style={{
                  flex: 1,
                  padding: '12px 8px',
                  borderRadius: '10px',
                  background: arabicSize === option.value ? 'rgba(201,168,76,0.15)' : '#0D0B12',
                  border: arabicSize === option.value ? '1px solid rgba(201,168,76,0.4)' : '1px solid #272230',
                  color: arabicSize === option.value ? '#C9A84C' : '#7A7870',
                  fontSize: '14px',
                  fontWeight: arabicSize === option.value ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Preview */}
          <div style={{
            marginTop: '16px',
            padding: '16px',
            borderRadius: '10px',
            background: '#0D0B12',
            border: '1px solid #272230',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: ARABIC_SIZES.find(f => f.value === arabicSize)?.size,
              color: '#C9A84C',
              direction: 'rtl',
              lineHeight: 2,
            }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════ */}
        {/* DANGER ZONE */}
        {/* ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '32px', marginBottom: '12px' }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#7A7870',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}>
            Dados
          </p>
        </motion.div>

        {/* Reset progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            padding: '20px 24px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '12px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <Trash2 size={18} style={{ color: '#D94A4A' }} />
              <div>
                <p style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#F0EBE2',
                }}>
                  Resetar progresso
                </p>
                <p style={{ fontSize: '12px', color: '#7A7870' }}>
                  Remove streak, leituras, journal e todo progresso
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowResetConfirm(true)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(217,74,74,0.1)',
                border: '1px solid rgba(217,74,74,0.3)',
                color: '#D94A4A',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Resetar
            </button>
          </div>

          {/* Confirm dialog */}
          <AnimatePresence>
            {showResetConfirm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(217,74,74,0.08)',
                  border: '1px solid rgba(217,74,74,0.2)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}>
                    <AlertTriangle size={16} style={{ color: '#D94A4A' }} />
                    <p style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#D94A4A',
                    }}>
                      Tem certeza?
                    </p>
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: '#7A7870',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    Essa acao ira apagar todo o seu progresso: streak, surahs lidas, journal, dhikr, desafios, flashcards e mais. Essa acao nao pode ser desfeita.
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={resetAllProgress}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '10px',
                        background: '#D94A4A',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Sim, resetar tudo
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '10px',
                        background: 'transparent',
                        color: '#7A7870',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: '1px solid #272230',
                        cursor: 'pointer',
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reset done feedback */}
          <AnimatePresence>
            {resetDone && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check size={14} style={{ color: '#4ADE80' }} />
                <span style={{ fontSize: '13px', color: '#4ADE80' }}>
                  Progresso resetado com sucesso
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Clear bookmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            padding: '20px 24px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '12px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <Bookmark size={18} style={{ color: '#C9A84C' }} />
              <div>
                <p style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#F0EBE2',
                }}>
                  Limpar favoritos
                </p>
                <p style={{ fontSize: '12px', color: '#7A7870' }}>
                  Remove todos os versiculos salvos
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowBookmarkConfirm(true)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Limpar
            </button>
          </div>

          {/* Confirm dialog */}
          <AnimatePresence>
            {showBookmarkConfirm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(201,168,76,0.06)',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: '#7A7870',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    Todos os versiculos que voce salvou serao removidos. Essa acao nao pode ser desfeita.
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={clearBookmarks}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '10px',
                        background: '#C9A84C',
                        color: '#0D0B12',
                        fontSize: '14px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Sim, limpar
                    </button>
                    <button
                      onClick={() => setShowBookmarkConfirm(false)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '10px',
                        background: 'transparent',
                        color: '#7A7870',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: '1px solid #272230',
                        cursor: 'pointer',
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bookmark done feedback */}
          <AnimatePresence>
            {bookmarkDone && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check size={14} style={{ color: '#4ADE80' }} />
                <span style={{ fontSize: '13px', color: '#4ADE80' }}>
                  Favoritos removidos com sucesso
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ═══════════════════════════════════════ */}
        {/* ABOUT */}
        {/* ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ marginTop: '32px', marginBottom: '12px' }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#7A7870',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}>
            Sobre
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            padding: '24px',
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            marginBottom: '12px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(201,168,76,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Info size={22} style={{ color: '#C9A84C' }} />
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#F0EBE2',
              }}>
                KALAM
              </p>
              <p style={{ fontSize: '13px', color: '#7A7870' }}>
                Versao 0.1.0
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '14px',
            color: '#B3B0A6',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}>
            Seu companheiro diario para se conectar com Deus. Versiculos, trilhas de aprendizado, sabedoria dos profetas — sem ruido, sem culpa, com profundidade.
          </p>

          <div style={{
            padding: '16px',
            borderRadius: '10px',
            background: '#0D0B12',
            border: '1px solid #272230',
          }}>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '20px',
              color: '#C9A84C',
              direction: 'rtl',
              textAlign: 'center',
              lineHeight: 2,
              marginBottom: '8px',
            }}>
              كلام الله
            </p>
            <p style={{
              fontSize: '13px',
              color: '#7A7870',
              textAlign: 'center',
            }}>
              Deus. Todo dia.
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          style={{
            borderRadius: '16px',
            background: '#161220',
            border: '1px solid #272230',
            overflow: 'hidden',
          }}
        >
          <Link
            href="/configuracoes/privacidade"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 24px',
              textDecoration: 'none',
              borderBottom: '1px solid #272230',
            }}
          >
            <span style={{ fontSize: '15px', color: '#F0EBE2' }}>
              Politica de Privacidade
            </span>
            <ExternalLink size={16} style={{ color: '#7A7870' }} />
          </Link>

          <Link
            href="/configuracoes/termos"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 24px',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '15px', color: '#F0EBE2' }}>
              Termos de Uso
            </span>
            <ExternalLink size={16} style={{ color: '#7A7870' }} />
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontSize: '12px',
            color: '#3A3545',
          }}>
            Feito com fe e proposito
          </p>
        </motion.div>

      </div>
    </main>
  )
}
