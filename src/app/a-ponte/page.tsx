'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Layers, BookOpen, PenLine } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'
import { BridgeScriptureView } from '@/components/shared/BridgeScriptureView'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const MODES = [
  {
    icon: Users,
    title: 'Por Profeta',
    subtitle: '17 profetas nas duas escrituras',
    href: '/a-ponte/por-profeta',
  },
  {
    icon: Layers,
    title: 'Por Tema',
    subtitle: '20 temas teologicos comparados',
    href: '/a-ponte/por-tema',
  },
  {
    icon: BookOpen,
    title: 'Por Versiculo',
    subtitle: '100 versiculos mapeados',
    href: '/a-ponte/por-versiculo',
  },
  {
    icon: PenLine,
    title: 'Minhas Notas',
    subtitle: 'Suas reflexoes pessoais',
    href: '/a-ponte/notas',
  },
]

export default function APontePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D0B12',
      paddingTop: 64,
    }}>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(56px, 7vw, 88px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              ESTUDO COMPARATIVO
            </p>
          </BlurFade>

          {/* Arabic calligraphy decorative */}
          <BlurFade delay={0.1}>
            <div
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#C9A84C',
                direction: 'rtl',
                marginBottom: 24,
                lineHeight: 1.2,
                textShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1)',
              }}
            >
              الجسر
            </div>
          </BlurFade>

          {/* Main headline */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              A Ponte
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#B3B0A6',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Estudo comparativo entre a Biblia e o Alcorao
            </p>
          </BlurFade>

          {/* Gold divider */}
          <BlurFade delay={0.4}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section style={{
        padding: '0 24px clamp(48px, 6vw, 72px)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: '#B3B0A6',
              lineHeight: 1.9,
              textAlign: 'center',
            }}>
              A Biblia e o Alcorao compartilham profetas, historias e ensinamentos que a maioria das pessoas nunca comparou lado a lado. Esta secao nao e apologetica nem debate — e estudo respeitoso, honesto e curioso sobre o que une e o que diferencia as duas maiores tradicoes de fe do mundo.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: '#7A7870',
              lineHeight: 1.9,
              textAlign: 'center',
              marginTop: 20,
            }}>
              Leia com mente aberta. Anote o que surpreende. E deixe as escrituras falarem por si mesmas.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── 4 MODE CARDS (2x2 grid) ── */}
      <section style={{
        padding: '0 24px clamp(48px, 6vw, 72px)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Section label */}
          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 32,
            }}>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#7A7870',
                whiteSpace: 'nowrap',
              }}>
                MODOS DE ESTUDO
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          {/* 2x2 Grid */}
          <div
            className="bridge-mode-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}
          >
            {MODES.map((mode, i) => (
              <motion.div
                key={mode.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1], delay: 0.08 * (i + 1) }}
              >
                <Link
                  href={mode.href}
                  className="card-hover"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 12,
                    padding: '28px 16px',
                    borderRadius: 16,
                    background: '#161220',
                    border: '1px solid #272230',
                    textDecoration: 'none',
                    minHeight: 160,
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'rgba(201,168,76,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <mode.icon size={22} style={{ color: '#C9A84C' }} />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#F0EBE2',
                      marginBottom: 4,
                    }}>
                      {mode.title}
                    </p>
                    <p style={{
                      fontSize: 12,
                      color: '#7A7870',
                      lineHeight: 1.5,
                    }}>
                      {mode.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SCRIPTURE COMPARISON ── */}
      <section style={{
        padding: '0 24px clamp(48px, 6vw, 72px)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Section label */}
          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 32,
            }}>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#7A7870',
                whiteSpace: 'nowrap',
              }}>
                EM DESTAQUE
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 600,
              color: '#F0EBE2',
              marginBottom: 8,
            }}>
              O Nascimento Virginal de Jesus
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: '#7A7870',
              marginBottom: 24,
            }}>
              Uma das convergencias mais surpreendentes entre as duas escrituras
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <BridgeScriptureView
              bibleRef={{
                reference: 'Lucas 1:35',
                text: '"O Espirito Santo vira sobre ti, e o poder do Altissimo te cobrira com a sua sombra; por isso, o Santo que ha de nascer sera chamado Filho de Deus."',
                context: 'O anjo Gabriel anuncia a Maria que ela conceberao um filho sem pai humano, pelo poder direto de Deus.',
              }}
              quranRef={{
                reference: 'Maryam 19:20-21',
                text: 'Ela disse: "Como terei um filho, se nenhum homem me tocou, e nao sou ma?" Ele respondeu: "Assim sera. Seu Senhor diz: isso e facil para Mim."',
                arabic: 'قَالَتْ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَلَمْ يَمْسَسْنِي بَشَرٌ وَلَمْ أَكُ بَغِيًّا',
                context: 'O anjo Jibril (Gabriel) aparece a Maryam e anuncia o nascimento de Isa sem pai humano, por decreto divino.',
              }}
              convergenceNote="Ambos os textos confirmam o nascimento virginal de Jesus/Isa como milagre divino direto. A Maryam do Alcorao recebe um capitulo inteiro em seu nome — algo que nenhuma mulher na Biblia recebeu."
              divergenceNote="A Biblia o chama de 'Filho de Deus' — titulo teologico central no Cristianismo. O Alcorao rejeita essa designacao, apresentando Isa como servo e profeta de Allah, nao como divindade."
            />
          </BlurFade>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        {/* Gold divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 48,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <div style={{
            maxWidth: 520,
            margin: '0 auto',
          }}>
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 28,
              color: 'rgba(201,168,76,0.5)',
              direction: 'rtl',
              marginBottom: 20,
              lineHeight: 1.6,
            }}>
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#B3B0A6',
              lineHeight: 1.7,
              marginBottom: 16,
            }}>
              &ldquo;Le, em nome do teu Senhor, que criou.&rdquo;
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#7A7870',
              marginBottom: 36,
            }}>
              Al-Alaq 96:1
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.12}>
          <Link
            href="/os-profetas"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 2,
              padding: '14px 36px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
            }}
          >
            Explorar os Profetas →
          </Link>
        </BlurFade>
      </section>

      {/* ── RESPONSIVE GRID OVERRIDE ── */}
      <style>{`
        @media (max-width: 480px) {
          .bridge-mode-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
