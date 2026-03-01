'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, BookOpen, GitBranch, ArrowRight } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'
import { Spotlight } from '@/components/effects/Spotlight'
import { BackgroundBeams } from '@/components/effects/BackgroundBeams'

// ─── Design Tokens ───────────────────────────────────────────────────────────
const C = {
  bg: '#0D0B12',
  surface: '#161220',
  elevated: '#1A1A2E',
  gold: '#C9A84C',
  goldLight: '#D4B96A',
  goldMuted: 'rgba(201,168,76,0.15)',
  goldBorder: 'rgba(201,168,76,0.3)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
}

const SERIF = "'Playfair Display', Georgia, serif"
const SANS = "'Inter', sans-serif"
const ARABIC = "'Amiri', serif"

// ─── Shared Belief Cards ──────────────────────────────────────────────────────
const beliefs = [
  {
    title: 'Nascimento Virginal de Jesus',
    icon: BookOpen,
    bible: 'Isaías 7:14 — "A virgem conceberá e dará à luz um filho."',
    quran: 'Alcorão 19:20 — "Como terei um filho, sendo que nenhum homem me tocou?"',
    description:
      'Ambos os livros confirmam o nascimento virginal. O Alcorão dedica um capítulo inteiro a Maria — Surah Maryam (capítulo 19) — com mais detalhes do que qualquer outro livro do mundo.',
  },
  {
    title: 'Os Milagres de Jesus',
    icon: BookOpen,
    bible: 'João 11:43-44 — Jesus chamou Lázaro, que saiu do túmulo.',
    quran: 'Alcorão 3:49 — "Curo o cego e o leproso e ressuscito os mortos, com a permissão de Deus."',
    description:
      'Curar cegos, ressuscitar mortos, criar vida do barro. O Alcorão confirma todos esses milagres — e acrescenta: "com a permissão de Deus." A mesma fonte. O mesmo poder.',
  },
  {
    title: 'Os Profetas em Comum',
    icon: BookOpen,
    bible: 'Hebreus 11 — "Por fé, Abraão... por fé, Moisés... por fé, Noé..."',
    quran: 'Alcorão 4:163 — "Revelamos a Noé e aos profetas que vieram depois..."',
    description:
      '25 profetas no Alcorão. Todos também na Bíblia. Adão, Noé, Abraão, Moisés, Davi, Salomão, Jonas, João Batista, Jesus. A mesma galeria de heróis. A mesma linha.',
  },
  {
    title: 'Um Único Deus',
    icon: BookOpen,
    bible: 'Deuteronômio 6:4 — "Ouve, Israel: o Senhor, nosso Deus, é o único Senhor."',
    quran: 'Alcorão 112:1 — "Dize: Ele é Deus, o Único."',
    description:
      'O Deus de Abraão. O mesmo Deus. Elohim, Yahweh, Allah — nomes diferentes em línguas diferentes para a mesma realidade. O monoteísmo não é ponto de divisão. É o ponto de encontro.',
  },
]

// ─── Bridge Steps ─────────────────────────────────────────────────────────────
const bridgeSteps = [
  {
    label: 'OS PROFETAS',
    text: 'A mesma galeria de heróis. Adão, Noé, Abraão, Moisés, Davi, Jesus. Cada profeta confirmado nos dois livros.',
  },
  {
    label: 'A MENSAGEM',
    text: 'Um único Deus. Uma única mensagem. Enviada através dos séculos por línguas, culturas e civilizações diferentes.',
  },
  {
    label: 'O CAPÍTULO FINAL',
    text: 'Um último profeta. Um livro preservado palavra por palavra. Uma mensagem enviada para todos os mundos.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function AMensagemPage() {
  const router = useRouter()

  return (
    <div style={{ background: C.bg, minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 80px',
        overflow: 'hidden',
        background: C.bg,
      }}>
        <BackgroundBeams />

        {/* Radial halo — bottom emphasis */}
        <div style={{
          position: 'absolute',
          bottom: '-10%', left: '50%',
          transform: 'translateX(-50%)',
          width: 900, height: 400,
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          maxWidth: 760,
          width: '100%',
        }}>
          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: 40,
            }}>
              A MENSAGEM
            </p>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1}>
            <h1 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(36px, 7vw, 72px)',
              fontWeight: 700,
              color: C.text,
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              Você já ouviu essa história antes.
            </h1>
          </BlurFade>

          {/* Subtitle italic */}
          <BlurFade delay={0.2}>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(22px, 4vw, 40px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: C.gold,
              lineHeight: 1.2,
              marginBottom: 48,
            }}>
              Só não ouviu o capítulo final.
            </h2>
          </BlurFade>

          {/* Arabic Calligraphy */}
          <BlurFade delay={0.35}>
            <motion.p
              animate={{
                textShadow: [
                  '0 0 20px rgba(201,168,76,0.2)',
                  '0 0 40px rgba(201,168,76,0.5)',
                  '0 0 20px rgba(201,168,76,0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontFamily: ARABIC,
                fontSize: 'clamp(36px, 7vw, 64px)',
                color: C.gold,
                direction: 'rtl',
                lineHeight: 1.4,
                marginBottom: 48,
                letterSpacing: 2,
              }}
            >
              الرسالة
            </motion.p>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(201,168,76,0.4)',
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — OPENING HOOK
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        maxWidth: 760,
        margin: '0 auto',
      }}>
        {/* Divider */}
        <BlurFade delay={0}>
          <div style={{
            width: 40, height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            margin: '0 auto 64px',
          }} />
        </BlurFade>

        {/* Opening paragraphs */}
        <BlurFade delay={0.05}>
          <p style={{
            fontFamily: SANS,
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: C.secondary,
            lineHeight: 1.85,
            marginBottom: 32,
            textAlign: 'center',
          }}>
            Existe uma história que todos os brasileiros já conhecem. Adão e Eva. O jardim. A queda.
            Noé e o dilúvio. Abraão e o filho. Moisés e o mar. Jesus e os milagres.
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p style={{
            fontFamily: SANS,
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: C.secondary,
            lineHeight: 1.85,
            marginBottom: 64,
            textAlign: 'center',
          }}>
            Você conhece esses nomes. Você cresceu com essas histórias.
            Mas e se a história não tivesse terminado onde você pensava que terminou?
          </p>
        </BlurFade>

        {/* Large pull quote */}
        <BlurFade delay={0.15}>
          <div style={{
            borderLeft: `3px solid ${C.gold}`,
            paddingLeft: 32,
            margin: '0 auto',
            maxWidth: 640,
          }}>
            <p style={{
              fontFamily: SERIF,
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: C.text,
              lineHeight: 1.5,
            }}>
              1.400 anos atrás, essa mesma história ganhou um capítulo final.
              Num deserto. Por um homem que não sabia ler.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — SHARED BELIEFS (2×2 grid)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(60px, 8vw, 120px) 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section header */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: SANS,
              fontSize: 11, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              textAlign: 'center',
              marginBottom: 16,
            }}>
              PONTES ENTRE OS DOIS LIVROS
            </p>
          </BlurFade>

          <BlurFade delay={0.05}>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 600,
              color: C.text,
              textAlign: 'center',
              marginBottom: 16,
              lineHeight: 1.2,
            }}>
              O que Bíblia e Alcorão concordam
            </h2>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p style={{
              fontFamily: SANS,
              fontSize: 16, color: C.muted,
              textAlign: 'center',
              marginBottom: 64,
              maxWidth: 480,
              margin: '0 auto 64px',
            }}>
              Não são livros opostos. São capítulos da mesma história.
            </p>
          </BlurFade>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 24,
          }}>
            {beliefs.map((belief, i) => (
              <BlurFade key={belief.title} delay={0.1 + i * 0.08}>
                <div style={{
                  background: C.elevated,
                  border: `1px solid ${C.border}`,
                  borderRadius: 4,
                  padding: 'clamp(24px, 4vw, 40px)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Top gold accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                    opacity: 0.4,
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 40, height: 40,
                    background: C.goldMuted,
                    border: `1px solid ${C.goldBorder}`,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <BookOpen size={18} color={C.gold} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(18px, 2.5vw, 22px)',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}>
                    {belief.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: SANS,
                    fontSize: 14, color: C.secondary,
                    lineHeight: 1.75,
                    marginBottom: 24,
                  }}>
                    {belief.description}
                  </p>

                  {/* Bible vs Quran mini-comparison */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    paddingTop: 20,
                    borderTop: `1px solid ${C.border}`,
                  }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${C.border}`,
                      borderRadius: 2,
                      padding: '10px 14px',
                    }}>
                      <p style={{
                        fontFamily: SANS,
                        fontSize: 10, letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: C.muted,
                        marginBottom: 6,
                      }}>
                        BÍBLIA DIZ
                      </p>
                      <p style={{
                        fontFamily: SERIF,
                        fontSize: 13,
                        fontStyle: 'italic',
                        color: C.secondary,
                        lineHeight: 1.5,
                      }}>
                        {belief.bible}
                      </p>
                    </div>

                    <div style={{
                      background: C.goldMuted,
                      border: `1px solid ${C.goldBorder}`,
                      borderRadius: 2,
                      padding: '10px 14px',
                    }}>
                      <p style={{
                        fontFamily: SANS,
                        fontSize: 10, letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'rgba(201,168,76,0.6)',
                        marginBottom: 6,
                      }}>
                        ALCORÃO DIZ
                      </p>
                      <p style={{
                        fontFamily: SERIF,
                        fontSize: 13,
                        fontStyle: 'italic',
                        color: C.gold,
                        lineHeight: 1.5,
                      }}>
                        {belief.quran}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — THE QUESTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(100px, 14vw, 160px) 24px',
        textAlign: 'center',
        background: C.bg,
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: SANS,
              fontSize: 11, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.4)',
              marginBottom: 40,
            }}>
              A PERGUNTA QUE NINGUÉM FAZ
            </p>
          </BlurFade>

          {/* Word-by-word animated question */}
          <QuestionAnimated />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — TWO-COLUMN COMPARISON
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(60px, 8vw, 120px) 24px',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: SANS,
              fontSize: 11, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              textAlign: 'center',
              marginBottom: 56,
            }}>
              OS DOIS LIVROS, LADO A LADO
            </p>
          </BlurFade>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}>
            {/* Left — Bíblia */}
            <BlurFade delay={0.05}>
              <div style={{
                background: C.elevated,
                border: `1px solid ${C.border}`,
                borderRadius: 4,
                padding: 'clamp(28px, 5vw, 48px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <p style={{
                  fontFamily: SANS,
                  fontSize: 11, letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: C.muted,
                  marginBottom: 20,
                }}>
                  A BÍBLIA
                </p>

                <h3 style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 28,
                  lineHeight: 1.3,
                }}>
                  O que a Bíblia diz sobre o que viria depois
                </h3>

                <div style={{
                  borderLeft: `2px solid ${C.border}`,
                  paddingLeft: 20,
                  marginBottom: 24,
                  flex: 1,
                }}>
                  <p style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(16px, 2.2vw, 19px)',
                    fontStyle: 'italic',
                    color: C.text,
                    lineHeight: 1.65,
                    marginBottom: 10,
                  }}>
                    "E havia outros que não eram deste aprisco. Também a esses convém que Eu os traga. Eles ouvirão a minha voz."
                  </p>
                  <p style={{
                    fontFamily: SANS,
                    fontSize: 12, color: C.muted,
                    letterSpacing: '1px',
                  }}>
                    João 10:16
                  </p>
                </div>

                <p style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: C.secondary,
                  lineHeight: 1.75,
                }}>
                  Jesus mesmo falou de outras ovelhas, outro aprisco, outro mensageiro
                  por vir. Quem são as "outras ovelhas"? A pergunta ficou aberta por
                  séculos — até que uma resposta chegou, num deserto da Arábia.
                </p>
              </div>
            </BlurFade>

            {/* Right — Alcorão */}
            <BlurFade delay={0.1}>
              <div style={{
                background: C.elevated,
                border: `1px solid ${C.goldBorder}`,
                borderRadius: 4,
                padding: 'clamp(28px, 5vw, 48px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Gold top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                }} />

                <p style={{
                  fontFamily: SANS,
                  fontSize: 11, letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.6)',
                  marginBottom: 20,
                }}>
                  O ALCORÃO
                </p>

                <h3 style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 28,
                  lineHeight: 1.3,
                }}>
                  O que o Alcorão diz sobre sua missão
                </h3>

                {/* Arabic verse */}
                <div style={{
                  background: C.goldMuted,
                  border: `1px solid ${C.goldBorder}`,
                  borderRadius: 2,
                  padding: '20px 24px',
                  marginBottom: 20,
                  textAlign: 'right',
                }}>
                  <motion.p
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(201,168,76,0.1)',
                        '0 0 24px rgba(201,168,76,0.35)',
                        '0 0 10px rgba(201,168,76,0.1)',
                      ],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      fontFamily: ARABIC,
                      fontSize: 'clamp(20px, 3.5vw, 28px)',
                      color: C.gold,
                      direction: 'rtl',
                      lineHeight: 1.8,
                      marginBottom: 12,
                    }}
                  >
                    وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ
                  </motion.p>
                  <p style={{
                    fontFamily: SERIF,
                    fontSize: 14,
                    fontStyle: 'italic',
                    color: C.secondary,
                    lineHeight: 1.6,
                    textAlign: 'left',
                  }}>
                    "E não te enviamos senão como misericórdia para os mundos."
                  </p>
                  <p style={{
                    fontFamily: SANS,
                    fontSize: 11, color: C.muted,
                    letterSpacing: '1px',
                    textAlign: 'left',
                    marginTop: 8,
                  }}>
                    Al-Anbiya 21:107
                  </p>
                </div>

                <p style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: C.secondary,
                  lineHeight: 1.75,
                  flex: 1,
                }}>
                  Não enviado para os árabes. Não enviado para os muçulmanos.
                  Enviado como misericórdia para <em style={{ color: C.text }}>os mundos</em>.
                  Toda a humanidade. Incluindo você.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — THE BRIDGE (3 steps)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: C.bg,
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: SANS,
              fontSize: 11, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              textAlign: 'center',
              marginBottom: 16,
            }}>
              A LINHA DO TEMPO
            </p>
          </BlurFade>

          <BlurFade delay={0.05}>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 600,
              color: C.text,
              textAlign: 'center',
              marginBottom: 72,
              lineHeight: 1.2,
            }}>
              Uma história. Três momentos.
            </h2>
          </BlurFade>

          {/* Steps */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}>
            {bridgeSteps.map((step, i) => (
              <BlurFade key={step.label} delay={0.1 + i * 0.1}>
                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  position: 'relative',
                  paddingBottom: i < bridgeSteps.length - 1 ? 48 : 0,
                }}>
                  {/* Left — number + line */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}>
                    {/* Circle */}
                    <div style={{
                      width: 48, height: 48,
                      borderRadius: '50%',
                      background: i === 2 ? C.gold : 'transparent',
                      border: `2px solid ${i === 2 ? C.gold : C.goldBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: SERIF,
                        fontSize: 18, fontWeight: 700,
                        color: i === 2 ? C.bg : C.gold,
                      }}>
                        {i + 1}
                      </span>
                    </div>

                    {/* Connector line */}
                    {i < bridgeSteps.length - 1 && (
                      <div style={{
                        width: 1, flex: 1,
                        minHeight: 40,
                        background: `linear-gradient(180deg, ${C.goldBorder}, transparent)`,
                        marginTop: 8,
                      }} />
                    )}
                  </div>

                  {/* Right — content */}
                  <div style={{ paddingTop: 10, flex: 1 }}>
                    <p style={{
                      fontFamily: SANS,
                      fontSize: 11, letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: C.gold,
                      marginBottom: 10,
                    }}>
                      {step.label}
                    </p>
                    <p style={{
                      fontFamily: SANS,
                      fontSize: 'clamp(15px, 2vw, 17px)',
                      color: C.secondary,
                      lineHeight: 1.75,
                      maxWidth: 580,
                    }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — CTA (Spotlight)
      ═══════════════════════════════════════════════════════════════════════ */}
      <Spotlight style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <section style={{
          padding: 'clamp(100px, 14vw, 160px) 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            {/* Arabic "Iqra" */}
            <BlurFade delay={0}>
              <motion.p
                animate={{
                  textShadow: [
                    '0 0 20px rgba(201,168,76,0.15)',
                    '0 0 50px rgba(201,168,76,0.4)',
                    '0 0 20px rgba(201,168,76,0.15)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontFamily: ARABIC,
                  fontSize: 'clamp(48px, 10vw, 80px)',
                  color: C.gold,
                  direction: 'rtl',
                  marginBottom: 32,
                  lineHeight: 1,
                }}
              >
                اقْرَأْ
              </motion.p>
            </BlurFade>

            {/* Headline */}
            <BlurFade delay={0.1}>
              <h2 style={{
                fontFamily: SERIF,
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: C.text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}>
                A primeira palavra revelada foi: Leia.
              </h2>
            </BlurFade>

            {/* Subtitle */}
            <BlurFade delay={0.2}>
              <p style={{
                fontFamily: SANS,
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: C.secondary,
                lineHeight: 1.75,
                marginBottom: 56,
              }}>
                Há 1.400 anos, alguém foi mandado ler. Hoje, você pode.
              </p>
            </BlurFade>

            {/* Divider */}
            <BlurFade delay={0.25}>
              <div style={{
                width: 40, height: 1,
                background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                margin: '0 auto 56px',
              }} />
            </BlurFade>

            {/* Buttons */}
            <BlurFade delay={0.3}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                alignItems: 'center',
              }}>
                {/* Primary */}
                <CtaButton
                  label="Explorar os Profetas →"
                  onClick={() => router.push('/os-profetas')}
                  primary
                />

                {/* Secondary */}
                <CtaButton
                  label="O que é o Islam →"
                  onClick={() => router.push('/o-sistema')}
                  primary={false}
                />
              </div>

              <p style={{
                fontFamily: SANS,
                fontSize: 13, color: C.muted,
                marginTop: 28,
              }}>
                Sem cadastro. Sem mensalidade. Só a mensagem.
              </p>
            </BlurFade>
          </div>
        </section>
      </Spotlight>

      {/* ── CTA: A Ponte ─────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 640, margin: '0 auto', padding: '48px 24px',
        borderTop: `1px solid ${C.border}`,
      }}>
        <Link href="/a-ponte" className="card-hover" style={{
          display: 'flex', alignItems: 'center', gap: 16,
          padding: 24, borderRadius: 16,
          background: 'rgba(201,168,76,0.06)',
          border: `1px solid ${C.goldBorder}`,
          textDecoration: 'none',
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(201,168,76,0.1)', flexShrink: 0,
          }}>
            <GitBranch size={22} style={{ color: C.gold }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: SERIF, fontSize: 17, color: C.text, fontWeight: 500 }}>
              Aprofunde na Ponte
            </p>
            <p style={{ fontSize: 13, color: C.secondary, marginTop: 4 }}>
              Estudo comparativo lado a lado — por profeta, por tema, por versículo
            </p>
          </div>
          <ArrowRight size={16} style={{ color: C.gold, flexShrink: 0 }} />
        </Link>
      </section>

    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function QuestionAnimated() {
  const words = [
    'Se', 'as', 'mesmas', 'histórias', 'estão', 'nos', 'dois', 'livros...',
    'por', 'que', 'ninguém', 'te', 'contou', 'sobre', 'o', 'segundo?',
  ]

  return (
    <h2 style={{
      fontFamily: SERIF,
      fontSize: 'clamp(26px, 5vw, 52px)',
      fontWeight: 400,
      fontStyle: 'italic',
      color: C.text,
      lineHeight: 1.4,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.25em',
    }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(6px)', y: 16 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.55,
            delay: i * 0.06,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{
            color: word === 'segundo?' ? C.gold : C.text,
            display: 'inline-block',
          }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

interface CtaButtonProps {
  label: string
  onClick: () => void
  primary: boolean
}

function CtaButton({ label, onClick, primary }: CtaButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(primary
        ? {
            animate: {
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
            },
            transition: { duration: 3, repeat: Infinity, ease: 'linear' },
          }
        : {})}
      style={{
        background: primary
          ? 'linear-gradient(90deg, #C9A84C, #D4B96A, #C9A84C)'
          : 'transparent',
        backgroundSize: primary ? '200% 100%' : undefined,
        border: primary ? 'none' : `1px solid ${C.goldBorder}`,
        color: primary ? C.bg : C.gold,
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '3px',
        textTransform: 'uppercase' as const,
        padding: '16px 40px',
        borderRadius: 2,
        cursor: 'pointer',
        width: '100%',
        maxWidth: 360,
      }}
    >
      {label}
    </motion.button>
  )
}
