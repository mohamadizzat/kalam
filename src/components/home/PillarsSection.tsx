'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookMarked, FileText, LayoutGrid } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'

const pillars = [
  {
    Icon: BookMarked,
    label: 'OS PROFETAS',
    desc: 'Adão, Abraão, Moisés, Jesus — e o capítulo final da história que você conhece.',
    route: '/os-profetas',
  },
  {
    Icon: FileText,
    label: 'O ORIGINAL',
    desc: 'A lei do original. O que mudou, o que permaneceu, e o documento que sobreviveu intacto.',
    route: '/a-mensagem',
  },
  {
    Icon: LayoutGrid,
    label: 'O SISTEMA',
    desc: 'Islam como sistema operacional. Ordem, propósito e método para uma vida intencional.',
    route: '/o-sistema',
  },
]

export function PillarsSection() {
  const router = useRouter()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{
      background: '#0D0B12',
      padding: 'clamp(80px, 10vw, 120px) 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <BlurFade style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
            marginBottom: 16,
          }}>
            EXPLORE
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 400,
            color: '#F0EBE2',
          }}>
            Três caminhos. Uma mensagem.
          </h2>
        </BlurFade>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: '#272230',
          border: '1px solid #272230',
        }}>
          {pillars.map((p, i) => (
            <BlurFade key={i} delay={i * 0.1}>
              <div
                onClick={() => router.push(p.route)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#161220',
                  padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                  borderBottom: hovered === i
                    ? '2px solid rgba(201,168,76,0.3)'
                    : '2px solid transparent',
                  boxShadow: hovered === i
                    ? '0 20px 60px rgba(0,0,0,0.5)'
                    : 'none',
                }}
              >
                <p.Icon
                  size={28}
                  style={{
                    color: '#C9A84C',
                    marginBottom: 24,
                    opacity: hovered === i ? 1 : 0.7,
                    transition: 'opacity 0.2s',
                  }}
                />
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: 12,
                }}>
                  {p.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#B3B0A6',
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}>
                  {p.desc}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.4)',
                  transition: 'opacity 0.2s',
                  opacity: hovered === i ? 0.8 : 0.4,
                }}>
                  Explorar →
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
