'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, MapPin } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const green = '#2D6A4F'
const greenLight = '#2D6A4F22'
const red = '#7F1D1D'
const redLight = '#7F1D1D22'
const amber = '#78350F'
const amberLight = '#78350F22'

type Entry = { label: string; note?: string }

const sections = [
  {
    title: 'Carnes e Aves',
    icon: '🥩',
    permitted: [
      { label: 'Boi, vaca, búfalo', note: 'Abatido islamicamente (Dhabihah)' },
      { label: 'Frango, peru, pato', note: 'Com bismillah e corte correto' },
      { label: 'Cordeiro, cabra, ovelha' },
      { label: 'Camelo' },
    ] as Entry[],
    avoid: [
      { label: 'Porco e todos os seus derivados', note: 'Haram absoluto (Quran 2:173)' },
      { label: 'Sangue e derivados' },
      { label: 'Animais mortos sem abate islâmico' },
      { label: 'Animais de rapina (leão, águia, etc.)' },
      { label: 'Carne sem certificação halal no Brasil' },
    ] as Entry[],
  },
  {
    title: 'Frutos do Mar',
    icon: '🐟',
    permitted: [
      { label: 'Peixes com escamas', note: 'Sardinha, salmão, tilápia, atum, etc.' },
      { label: 'Camarão', note: 'Permitido segundo maioria dos estudiosos (Shafi\'i, Hanbali, Hanafi)' },
      { label: 'Lagosta, caranguejo', note: 'Permitido (Shafi\'i, Hanbali)' },
    ] as Entry[],
    avoid: [
      { label: 'Animais marinhos sem escamas', note: 'Haram segundo escola Hanafi' },
      { label: 'Polvo, lula', note: 'Proibido (Hanafi) — verificar sua escola' },
      { label: 'Jacaré, crocodilo' },
    ] as Entry[],
  },
  {
    title: 'Bebidas',
    icon: '🥤',
    permitted: [
      { label: 'Água, sucos naturais, chás' },
      { label: 'Refrigerantes sem álcool' },
      { label: 'Leite, café, vitaminas' },
    ] as Entry[],
    avoid: [
      { label: 'Álcool em qualquer concentração', note: 'Haram absoluto (Quran 5:90)' },
      { label: 'Bebidas fermentadas (kombucha com álcool residual)' },
      { label: 'Sucos processados com aditivo E120 (carmim)' },
    ] as Entry[],
  },
]

const additives = [
  { code: 'E120', name: 'Carmim / Ácido Carmínico', source: 'Inseto (cochonilha)', status: 'evitar' as const },
  { code: 'E441', name: 'Gelatina', source: 'Pode ser suína — verificar origem', status: 'verificar' as const },
  { code: 'E471', name: 'Mono e Diglicerídeos', source: 'Pode ser animal — verificar', status: 'verificar' as const },
  { code: 'E542', name: 'Fosfato ósseo', source: 'Osso animal', status: 'evitar' as const },
  { code: 'E631', name: 'Inosinato dissódico', source: 'Pode ser derivado de porco', status: 'verificar' as const },
  { code: 'E920', name: 'L-Cisteína', source: 'Pode ser de cabelo/pena animal', status: 'verificar' as const },
]

const brasilTips = [
  { title: 'Certificadoras confiáveis', text: 'Procure selos de: CDIAL Halal, IIBB (Instituto Islâmico Beneficente), Sociedade Beneficente Muçulmana de SP. Esses selos garantem supervisão real.' },
  { title: 'Açougues halal no Brasil', text: 'São Paulo, Curitiba, Rio de Janeiro e Foz do Iguaçu têm concentrações maiores. Mesquitas locais costumam indicar fornecedores confiáveis.' },
  { title: 'Supermercados grandes', text: 'Redes como Carrefour e Extra já possuem seções halal em cidades com comunidades muçulmanas. Sempre confira o selo na embalagem.' },
  { title: 'Dica do dia a dia', text: 'Na dúvida sobre um restaurante, peça peixes com escamas, ovos, legumes e grãos — sempre halal por natureza.' },
]

export default function HalalPage() {
  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Guia Halal</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 8 }}>حَلَال — Alimentação permitida na lei islâmica</p>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px', marginBottom: 32 }}>
            <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: T.gold }}>O que é Halal?</strong> Em árabe, Halal significa "permitido". Na alimentação islâmica, envolve o que é consumido, como é preparado e a forma de abate. O oposto é Haram (proibido) e Mashbooh (duvidoso — evitar).
            </p>
          </div>

          {sections.map((sec, si) => (
            <motion.div key={sec.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.1 }} style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>
                {sec.icon} {sec.title}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* Permitido */}
                <div style={{ background: greenLight, border: `1px solid ${green}40`, borderRadius: 12, padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <CheckCircle size={15} color='#52B788' />
                    <span style={{ color: '#52B788', fontWeight: 600, fontSize: 13 }}>PERMITIDO</span>
                  </div>
                  {sec.permitted.map(e => (
                    <div key={e.label} style={{ marginBottom: 10 }}>
                      <p style={{ color: T.text, fontSize: 13, margin: '0 0 2px' }}>{e.label}</p>
                      {e.note && <p style={{ color: T.muted, fontSize: 11, margin: 0, fontStyle: 'italic' }}>{e.note}</p>}
                    </div>
                  ))}
                </div>
                {/* Evitar */}
                <div style={{ background: redLight, border: `1px solid ${red}40`, borderRadius: 12, padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <XCircle size={15} color='#F87171' />
                    <span style={{ color: '#F87171', fontWeight: 600, fontSize: 13 }}>EVITAR</span>
                  </div>
                  {sec.avoid.map(e => (
                    <div key={e.label} style={{ marginBottom: 10 }}>
                      <p style={{ color: T.text, fontSize: 13, margin: '0 0 2px' }}>{e.label}</p>
                      {e.note && <p style={{ color: T.muted, fontSize: 11, margin: 0, fontStyle: 'italic' }}>{e.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Aditivos */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>
              ⚗️ Aditivos a Verificar
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {additives.map(a => (
                <div key={a.code} style={{
                  background: a.status === 'evitar' ? redLight : amberLight,
                  border: `1px solid ${a.status === 'evitar' ? red + '40' : amber + '40'}`,
                  borderRadius: 10, padding: '10px 14px',
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                }}>
                  {a.status === 'evitar'
                    ? <XCircle size={15} color='#F87171' style={{ marginTop: 2, flexShrink: 0 }} />
                    : <AlertCircle size={15} color='#FBBF24' style={{ marginTop: 2, flexShrink: 0 }} />
                  }
                  <div>
                    <span style={{ color: T.gold, fontWeight: 600, fontSize: 13 }}>{a.code}</span>
                    <span style={{ color: T.text, fontSize: 13 }}> — {a.name}</span>
                    <p style={{ color: T.muted, fontSize: 12, margin: '2px 0 0', fontStyle: 'italic' }}>{a.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brasil tips */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>
              <MapPin size={17} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Halal no Brasil
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {brasilTips.map((tip, i) => (
                <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px' }}>
                  <p style={{ color: T.gold, fontWeight: 600, fontSize: 14, margin: '0 0 4px' }}>{tip.title}</p>
                  <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{tip.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
