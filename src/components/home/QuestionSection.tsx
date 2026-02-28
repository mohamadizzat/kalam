import { BlurFade } from '@/components/effects/BlurFade'

const paragraphs = [
  {
    text: 'Você conhece Adão. Conhece Abraão. Conhece Moisés e Jesus.',
    style: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: 'clamp(20px, 3vw, 26px)',
      fontWeight: 400, fontStyle: 'italic',
      color: '#F5F5F0', lineHeight: 1.7,
    },
  },
  {
    text: 'Mas e a mensagem que eles trouxeram? A que foi sendo alterada, traduzida, interpretada — até se perder?',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(16px, 2vw, 18px)',
      color: '#8A8A7A', lineHeight: 1.85,
    },
  },
  {
    text: 'E se existisse uma versão original? Preservada. Sem edição. Com as mesmas histórias — mas o capítulo que nunca te contaram.',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(16px, 2vw, 18px)',
      color: '#8A8A7A', lineHeight: 1.85,
    },
  },
  {
    text: 'Isso não é uma religião nova. É o documento original.',
    style: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: 'clamp(18px, 2.5vw, 22px)',
      fontStyle: 'italic', color: '#C9A84C',
    },
  },
]

function GoldDivider() {
  return (
    <div style={{
      width: 40, height: 1,
      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
      margin: '48px auto',
    }} />
  )
}

export function QuestionSection() {
  return (
    <section style={{
      background: '#0A0A0A',
      padding: 'clamp(80px, 12vw, 140px) 24px',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <BlurFade>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
            marginBottom: 48,
          }}>
            A PERGUNTA
          </p>
        </BlurFade>

        <GoldDivider />

        {paragraphs.map((p, i) => (
          <BlurFade key={i} delay={i * 0.15} style={{ marginBottom: 28 }}>
            <p style={p.style as React.CSSProperties}>{p.text}</p>
          </BlurFade>
        ))}

        <GoldDivider />
      </div>
    </section>
  )
}
