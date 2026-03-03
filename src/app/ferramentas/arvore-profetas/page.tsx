'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ChevronDown, ChevronRight, Star } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

interface Profeta {
  id: string
  pt: string
  ar: string
  epoca: string
  missao: string
  slug: string
  filhos?: Profeta[]
}

const ARVORE: Profeta[] = [
  {
    id: 'adam', pt: 'Adão', ar: 'آدَم', epoca: 'Início da humanidade', missao: 'Primeiro ser humano e profeta, pai da humanidade', slug: 'adam',
    filhos: [{
      id: 'idris', pt: 'Idris', ar: 'إِدْرِيس', epoca: '~3000 a.E.C.', missao: 'Ensinou escrita e astronomia, elevado por Allah', slug: 'idris',
      filhos: [{
        id: 'nuh', pt: 'Nuh (Noé)', ar: 'نُوح', epoca: '~2900 a.E.C.', missao: 'Construiu a arca, sobreviveu ao dilúvio com os crentes', slug: 'nuh',
        filhos: [
          {
            id: 'hud', pt: 'Hud', ar: 'هُود', epoca: '~2400 a.E.C.', missao: "Enviado ao povo de 'Ad, que foi destruído pelo vento", slug: 'hud',
          },
          {
            id: 'saleh', pt: 'Saleh', ar: 'صَالِح', epoca: '~2000 a.E.C.', missao: 'Enviado ao povo de Thamud, ofereceu-lhes a camela como sinal', slug: 'saleh',
          },
          {
            id: 'ibrahim', pt: 'Ibrahim (Abraão)', ar: 'إِبْرَاهِيم', epoca: '~1800 a.E.C.', missao: 'Pai dos profetas, construiu a Kaaba, modelo de tawhid', slug: 'ibrahim',
            filhos: [
              {
                id: 'lut', pt: 'Lut (Ló)', ar: 'لُوط', epoca: '~1800 a.E.C.', missao: 'Sobrinho de Ibrahim, enviado ao povo de Sodoma', slug: 'lut',
              },
              {
                id: 'ismail', pt: 'Ismail', ar: 'إِسْمَاعِيل', epoca: '~1750 a.E.C.', missao: 'Filho primogênito de Ibrahim, pai dos árabes', slug: 'ismail',
                filhos: [{
                  id: 'muhammad', pt: 'Muhammad ﷺ', ar: 'مُحَمَّد', epoca: '570-632 E.C.', missao: 'Último e maior profeta, mensagem universal para toda a humanidade', slug: 'muhammad',
                }],
              },
              {
                id: 'ishaq', pt: "Is'haq (Isaac)", ar: 'إِسْحَاق', epoca: '~1720 a.E.C.', missao: "Filho de Ibrahim e Sara, pai de Ya'qub", slug: 'ishaq',
                filhos: [{
                  id: 'yaqub', pt: "Ya'qub (Jacó/Israel)", ar: 'يَعْقُوب', epoca: '~1700 a.E.C.', missao: 'Pai das doze tribos de Israel, recebeu o nome Israel', slug: 'yaqub',
                  filhos: [
                    { id: 'yusuf', pt: 'Yusuf (José)', ar: 'يُوسُف', epoca: '~1650 a.E.C.', missao: 'Sua história, a mais bela do Quran; interpretava sonhos', slug: 'yusuf' },
                    { id: 'shuayb', pt: "Shu'ayb", ar: 'شُعَيْب', epoca: '~1600 a.E.C.', missao: 'Enviado ao povo de Midian, combateu fraudes no comércio', slug: 'shuayb' },
                    {
                      id: 'musa', pt: 'Musa (Moisés)', ar: 'مُوسَى', epoca: '~1300 a.E.C.', missao: 'Recebeu a Torah, libertou os Bani Israel do Egito', slug: 'musa',
                      filhos: [{ id: 'harun', pt: 'Harun (Arão)', ar: 'هَارُون', epoca: '~1300 a.E.C.', missao: 'Irmão de Musa, seu apoio e porta-voz perante Faraó', slug: 'harun' }],
                    },
                    { id: 'dhulkifl', pt: 'Dhul-Kifl', ar: 'ذُو الكِفْل', epoca: '~1200 a.E.C.', missao: 'Profeta de grande paciência e constância', slug: 'dhul-kifl' },
                    {
                      id: 'dawud', pt: 'Dawud (Davi)', ar: 'دَاوُود', epoca: '~1000 a.E.C.', missao: 'Rei e profeta, recebeu os Salmos (Zabur)', slug: 'dawud',
                      filhos: [{
                        id: 'sulayman', pt: 'Sulayman (Salomão)', ar: 'سُلَيْمَان', epoca: '~970 a.E.C.', missao: 'Rei sábio com poder sobre djinn, vento e animais', slug: 'sulayman',
                        filhos: [
                          { id: 'ilias', pt: 'Ilias (Elias)', ar: 'إِلْيَاس', epoca: '~900 a.E.C.', missao: 'Combateu o culto a Baal, elevado aos céus', slug: 'ilias' },
                          { id: 'alyasa', pt: "Al-Yasa' (Eliseu)", ar: 'الْيَسَع', epoca: '~850 a.E.C.', missao: 'Successor de Ilias, realizou milagres', slug: 'al-yasa' },
                          { id: 'yunus', pt: 'Yunus (Jonas)', ar: 'يُونُس', epoca: '~780 a.E.C.', missao: 'Engolido pela baleia, rezou e foi salvo por Allah', slug: 'yunus' },
                          {
                            id: 'zakariya', pt: 'Zakariya (Zacarias)', ar: 'زَكَرِيَّا', epoca: '~100 a.E.C.', missao: 'Cuidou de Maryam, pediu um filho na velhice', slug: 'zakariya',
                            filhos: [
                              { id: 'yahya', pt: 'Yahya (João Batista)', ar: 'يَحْيَى', epoca: '~1 a.E.C.', missao: 'Filho milagroso de Zakariya, precursor de Isa', slug: 'yahya' },
                              { id: 'isa', pt: 'Isa (Jesus)', ar: 'عِيسَى', epoca: '~1-33 E.C.', missao: 'Nasceu de Maryam, realizou milagres, anunciou Muhammad', slug: 'isa' },
                            ],
                          },
                        ],
                      }],
                    },
                  ],
                }],
              },
            ],
          },
        ],
      }],
    }],
  },
]

function ProfetaCard({ profeta, depth = 0 }: { profeta: Profeta; depth?: number }) {
  const [open, setOpen] = useState(depth < 2)
  const hasChildren = profeta.filhos && profeta.filhos.length > 0
  const isMuhammad = profeta.id === 'muhammad'

  return (
    <div style={{ marginLeft: depth > 0 ? 24 : 0, borderLeft: depth > 0 ? `1px solid ${T.border}` : 'none', paddingLeft: depth > 0 ? 16 : 0 }}>
      <motion.div layout style={{
        backgroundColor: isMuhammad ? T.gold + '18' : T.surface,
        border: `1px solid ${isMuhammad ? T.gold + '66' : T.border}`,
        borderRadius: 10, marginBottom: 8, overflow: 'hidden',
      }}>
        <button onClick={() => hasChildren && setOpen(!open)} style={{
          width: '100%', padding: '14px 16px', backgroundColor: 'transparent', border: 'none',
          cursor: hasChildren ? 'pointer' : 'default', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <div style={{ marginTop: 2, color: T.muted, flexShrink: 0 }}>
            {isMuhammad ? <Star size={16} color={T.gold} fill={T.gold} /> : hasChildren ? (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />) : <div style={{ width: 16 }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Amiri, serif', fontSize: 18, color: T.gold, direction: 'rtl' }}>{profeta.ar}</span>
              <span style={{ fontWeight: 700, color: isMuhammad ? T.gold : T.text, fontSize: 15 }}>{profeta.pt}</span>
              <span style={{ color: T.muted, fontSize: 12 }}>{profeta.epoca}</span>
            </div>
            <p style={{ color: T.secondary, fontSize: 13, margin: '4px 0 0', lineHeight: 1.5 }}>{profeta.missao}</p>
          </div>
          <Link href={`/os-profetas/${profeta.slug}`} onClick={e => e.stopPropagation()}
            style={{ flexShrink: 0, fontSize: 11, color: T.gold, textDecoration: 'none', padding: '4px 10px', borderRadius: 6, border: `1px solid ${T.gold}44`, whiteSpace: 'nowrap' }}>
            Ver mais
          </Link>
        </button>
      </motion.div>
      <AnimatePresence>
        {open && hasChildren && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {profeta.filhos!.map(filho => (
              <ProfetaCard key={filho.id} profeta={filho} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ArvoreProfetasPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, marginBottom: 8 }}>Árvore dos Profetas</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 8 }}>
            A linhagem dos 25 profetas mencionados no Quran Sagrado, de Adão até Muhammad ﷺ.
          </p>
          <p style={{ color: T.muted, fontSize: 13, marginBottom: 32 }}>
            Clique nos nomes para expandir a linhagem. A estrela marca Muhammad ﷺ, o selo dos profetas.
          </p>
        </motion.div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 28, fontSize: 12, color: T.muted }}>
          <span>Clique para expandir</span>
          <span>|</span>
          <span style={{ color: T.gold }}>★ Muhammad ﷺ</span>
        </div>

        {ARVORE.map(profeta => (
          <ProfetaCard key={profeta.id} profeta={profeta} depth={0} />
        ))}

        <div style={{ marginTop: 40, padding: 20, backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 12 }}>
          <p style={{ color: T.muted, fontSize: 13, margin: 0, lineHeight: 1.7 }}>
            O Islam reconhece 25 profetas mencionados explicitamente no Quran, mas acredita que Allah enviou profetas a todos os povos da Terra — mais de 124.000 segundo alguns relatos. Todos trouxeram a mesma mensagem essencial: tawhid (unicidade de Allah).
          </p>
        </div>
      </div>
    </main>
  )
}
