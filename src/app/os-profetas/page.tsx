'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlurFade } from '@/components/effects/BlurFade'

const prophets = [
  {
    slug: 'adao',
    name: 'Adão',
    arabicName: 'آدم',
    episode: 1,
    title: 'A Criação e a Queda',
    status: 'available',
    hook: 'Um homem feito do barro da terra. A primeira desobediência. E um Deus que ainda assim ensinou.',
    bibleRef: 'Gênesis 1–3',
    quranRef: 'Al-Baqarah 2:30–39',
    insight: 'No Alcorão, Adão e Eva são igualmente responsáveis. Não existe pecado original.',
  },
  {
    slug: 'ibrahim',
    name: 'Abraão',
    arabicName: 'إبراهيم',
    episode: 2,
    title: 'O Pai das Nações',
    status: 'available',
    hook: 'Jogado no fogo por questionar os ídolos do pai. Saiu andando.',
    bibleRef: 'Gênesis 12–22',
    quranRef: 'Al-Baqarah 2:124–132',
    insight: 'Ibrahim é o homem que encontrou Deus através da razão pura — testando estrelas, lua e sol.',
  },
  {
    slug: 'yusuf',
    name: 'José',
    arabicName: 'يوسف',
    episode: 3,
    title: 'O Traído que Perdoou',
    status: 'available',
    hook: 'Vendido pelos próprios irmãos por algumas moedas. Trinta anos depois, era o segundo mais poderoso do Egito.',
    bibleRef: 'Gênesis 37–50',
    quranRef: 'Yusuf 12:1–111',
    insight: 'A história de Yusuf é a única surata do Alcorão que conta uma única história do começo ao fim.',
  },
  {
    slug: 'musa',
    name: 'Moisés',
    arabicName: 'موسى',
    episode: 4,
    title: 'O Mensageiro do Faraó',
    status: 'coming-soon',
    hook: 'O profeta mais mencionado no Alcorão. 136 vezes. Um homem que gaguejava e libertou um povo.',
    bibleRef: 'Êxodo 1–40',
    quranRef: 'Ta-Ha 20:9–98',
    insight: 'Musa é mencionado no Alcorão mais do que qualquer outro profeta — mais do que o próprio Muhammad.',
  },
  {
    slug: 'isa',
    name: 'Jesus',
    arabicName: 'عيسى',
    episode: 5,
    title: 'O Profeta que Voltará',
    status: 'coming-soon',
    hook: 'No Islam, Jesus não morreu na cruz. Ele está vivo — e voltará antes do fim do mundo.',
    bibleRef: 'Mateus 1–28',
    quranRef: 'Maryam 19:16–36',
    insight: 'Jesus (Isa) no Islam: nascido de virgem, faz milagres, não foi crucificado e voltará antes do Dia do Juízo.',
  },
  {
    slug: 'muhammad',
    name: 'Muhammad',
    arabicName: 'محمد',
    episode: 6,
    title: 'O Último da Linhagem',
    status: 'coming-soon',
    hook: 'Analfabeto. Órfão. Comerciante. O homem que mudou o mundo em 23 anos.',
    bibleRef: 'Deuteronômio 18:15–18 (referência)',
    quranRef: 'Al-Ahzab 33:40',
    insight: 'Muhammad é o Khatam an-Nabiyyin — o Selo dos Profetas. Não começa uma nova religião: conclui a cadeia.',
  },
]

function ProphetCard({ prophet, index }: { prophet: typeof prophets[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isAvailable = prophet.status === 'available'

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: '#111111',
        border: hovered && isAvailable
          ? '1px solid rgba(201,168,76,0.35)'
          : '1px solid #2A2A2A',
        borderRadius: 4,
        padding: '36px 32px',
        cursor: isAvailable ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered && isAvailable ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered && isAvailable
          ? '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.04)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold gradient top border on hover */}
      {isAvailable && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)'
            : 'transparent',
          transition: 'background 0.4s ease',
        }} />
      )}

      {/* Episode number + badge row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#5A5A50',
        }}>
          Episódio {String(prophet.episode).padStart(2, '0')}
        </span>
        {isAvailable ? (
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 2,
            padding: '3px 8px',
          }}>
            Disponível
          </span>
        ) : (
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#5A5A50',
            background: 'rgba(90,90,80,0.08)',
            border: '1px solid rgba(90,90,80,0.2)',
            borderRadius: 2,
            padding: '3px 8px',
          }}>
            Em breve
          </span>
        )}
      </div>

      {/* Arabic name */}
      <div style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: 36,
        color: isAvailable ? '#C9A84C' : '#5A5A50',
        direction: 'rtl',
        textAlign: 'right',
        marginBottom: 8,
        lineHeight: 1.3,
        textShadow: hovered && isAvailable ? '0 0 20px rgba(201,168,76,0.2)' : 'none',
        transition: 'text-shadow 0.3s ease, color 0.3s ease',
      }}>
        {prophet.arabicName}
      </div>

      {/* Prophet name */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 24,
        fontWeight: 600,
        color: '#F5F5F0',
        marginBottom: 4,
        lineHeight: 1.2,
      }}>
        {prophet.name}
      </h3>

      {/* Episode title */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#8A8A7A',
        marginBottom: 20,
        fontStyle: 'italic',
      }}>
        {prophet.title}
      </p>

      {/* Hook */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#8A8A7A',
        lineHeight: 1.75,
        marginBottom: 24,
      }}>
        {prophet.hook}
      </p>

      {/* Divider */}
      <div style={{
        width: '100%',
        height: 1,
        background: '#2A2A2A',
        marginBottom: 20,
      }} />

      {/* Scripture refs */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#5A5A50',
          border: '1px solid #2A2A2A',
          borderRadius: 2,
          padding: '4px 8px',
        }}>
          Bíblia: {prophet.bibleRef}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#5A5A50',
          border: '1px solid #2A2A2A',
          borderRadius: 2,
          padding: '4px 8px',
        }}>
          Alcorão: {prophet.quranRef}
        </span>
      </div>

      {/* CTA row */}
      {isAvailable && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.4)',
          transition: 'color 0.3s ease',
        }}>
          Ler episódio →
        </p>
      )}
    </motion.div>
  )

  if (isAvailable) {
    return (
      <Link href={`/os-profetas/${prophet.slug}`} style={{ textDecoration: 'none' }}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default function OsProfetasPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      paddingTop: 64,
    }}>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(64px, 8vw, 100px)',
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
              OS PROFETAS — A SÉRIE
            </p>
          </BlurFade>

          {/* Arabic title with glow */}
          <BlurFade delay={0.1}>
            <div
              className="arabic-glow"
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(48px, 8vw, 80px)',
                color: '#C9A84C',
                direction: 'rtl',
                marginBottom: 24,
                lineHeight: 1.2,
                textShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1)',
              }}
            >
              الأنبياء
            </div>
          </BlurFade>

          {/* Main headline */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              fontWeight: 600,
              color: '#F5F5F0',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              A mesma história
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                contada duas vezes.
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#8A8A7A',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Seis profetas. Dois textos sagrados. Uma linhagem que nunca foi quebrada.
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

      {/* ── INTRO PARAGRAPH ── */}
      <section style={{
        padding: '0 24px clamp(64px, 8vw, 96px)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: '#8A8A7A',
              lineHeight: 1.9,
              textAlign: 'center',
            }}>
              A Bíblia e o Alcorão contam as histórias dos mesmos profetas — mas com diferenças fascinantes que a maioria nunca percebeu. Cada episódio desta série compara as duas fontes lado a lado: o que está em cada texto, o que diverge, e o que esses detalhes revelam sobre a mensagem por trás da mensagem.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: '#5A5A50',
              lineHeight: 1.9,
              textAlign: 'center',
              marginTop: 20,
            }}>
              Esta não é uma série de conversão. É uma série de comparação — para quem quer entender de onde essas histórias vieram, o que cada tradição preservou, e por que as diferenças importam.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── EPISODES GRID ── */}
      <section style={{
        padding: '0 24px clamp(80px, 10vw, 120px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section label */}
          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 48,
            }}>
              <div style={{ flex: 1, height: 1, background: '#2A2A2A' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#5A5A50',
                whiteSpace: 'nowrap',
              }}>
                EPISÓDIOS
              </p>
              <div style={{ flex: 1, height: 1, background: '#2A2A2A' }} />
            </div>
          </BlurFade>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: 16,
          }}>
            {prophets.map((prophet, i) => (
              <ProphetCard key={prophet.slug} prophet={prophet} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#5A5A50',
            marginBottom: 16,
          }}>
            PRÓXIMOS EPISÓDIOS EM CONSTRUÇÃO
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#8A8A7A',
            marginBottom: 32,
          }}>
            Moisés, Jesus e Muhammad estão chegando.
          </p>
        </BlurFade>

        <BlurFade delay={0.15}>
          <Link
            href="/a-mensagem"
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
            Enquanto isso, leia A Mensagem →
          </Link>
        </BlurFade>
      </section>
    </div>
  )
}
