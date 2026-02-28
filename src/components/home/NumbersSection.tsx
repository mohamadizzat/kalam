import { NumberTicker } from '@/components/effects/NumberTicker'
import { BlurFade } from '@/components/effects/BlurFade'

const stats = [
  { value: 1400, suffix: '', label: 'anos preservado', sublabel: 'sem uma única alteração' },
  { value: 1.8, suffix: ' BI', label: 'pessoas', sublabel: 'na maior comunidade do mundo', decimals: 1 },
  { value: 114, suffix: '', label: 'capítulos', sublabel: 'do documento original' },
  { value: 25, suffix: '', label: 'profetas', sublabel: 'que você já conhece' },
  { value: 1, suffix: '', label: 'livro', sublabel: 'nunca alterado na história' },
  { value: 0, suffix: '', label: 'intermediários', sublabel: 'entre você e a mensagem' },
]

export function NumbersSection() {
  return (
    <section style={{
      background: '#0D0D0D',
      padding: 'clamp(80px, 10vw, 120px) 0',
      borderTop: '1px solid rgba(201,168,76,0.06)',
      borderBottom: '1px solid rgba(201,168,76,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <BlurFade style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
          }}>
            EM NÚMEROS
          </p>
        </BlurFade>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: '#272230',
          border: '1px solid #272230',
        }}>
          {stats.map((s, i) => (
            <BlurFade key={i} delay={i * 0.08}>
              <div style={{
                background: '#0D0D0D',
                padding: 'clamp(32px, 5vw, 48px) 24px',
                textAlign: 'center',
              }}>
                <NumberTicker
                  value={s.value}
                  suffix={s.suffix}
                  duration={2000}
                  decimals={(s as { decimals?: number }).decimals ?? 0}
                />
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 500,
                  color: '#F0EBE2',
                  marginTop: 12, marginBottom: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {s.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12, color: '#7A7870',
                  lineHeight: 1.5,
                }}>
                  {s.sublabel}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
