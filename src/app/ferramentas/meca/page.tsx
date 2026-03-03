'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

type Step = { step: string; arabic: string; desc: string; meaning: string }

const hajjSteps: Step[] = [
  { step: 'Ihram', arabic: 'الإِحْرَام', desc: 'Vista a roupa branca de Ihram (duas folhas sem costura para homens, roupa modesta para mulheres) no Miqat. Faça a intenção do Hajj e recite o Talbiyah: "Labbayk Allahumma labbayk..."', meaning: 'Pureza e igualdade — todos são iguais diante de Allah. Sem status, sem fronteiras.' },
  { step: 'Chegada a Mina', arabic: 'مِنَى', desc: 'No 8º de Dhul Hijjah (Yawm al-Tarwiyah), vá a Mina. Passe o dia e a noite em oração, dhikr e preparação espiritual.', meaning: 'Quietude e preparação interior antes do pico espiritual do Hajj.' },
  { step: 'Arafat — O Pilar', arabic: 'عَرَفَات', desc: 'No 9º de Dhul Hijjah, fique em Arafat do meio-dia até o pôr do sol. Este é o Wuquf — o pilar central do Hajj. Sem Arafat, não há Hajj.', meaning: '"Quem não fizer Wuquf em Arafat, não fez Hajj." O momento mais próximo que um ser humano pode estar de Allah nesta vida.' },
  { step: 'Muzdalifah', arabic: 'مُزْدَلِفَة', desc: 'Após Arafat, vá a Muzdalifah durante a noite. Ore Maghrib e Isha juntos. Durma sob o céu aberto. Colete pedrinhas para o rami (apedrejamento).', meaning: 'Descanso, humildade e gratidão. Dormir ao ar livre como os primeiros muçulmanos.' },
  { step: 'Rami — Apedrejamento', arabic: 'الرَّمْي', desc: 'No 10º (Eid al-Adha), atire 7 pedrinhas na Jamarat al-Aqabah. Nos dias seguintes (11-13), atire 7 em cada uma das três Jamaraat.', meaning: 'Símbolo da rejeição do Shaitan. Ibrahim rejeitou o diabo — você repete o gesto de fé.' },
  { step: 'Sacrifício (Qurbani)', arabic: 'الأُضْحِيَّة', desc: 'Após o Rami, faça o sacrifício de um animal (ou pague por um). Hoje, pode ser feito através de organizações certificadas em qualquer lugar.', meaning: 'Memória do sacrifício de Ibrahim. Gratidão, generosidade e submissão total.' },
  { step: 'Halq ou Taqsir', arabic: 'الحَلْق أَو التَّقْصِير', desc: 'Raspe a cabeça (Halq — recomendado para homens) ou corte um mínimo de cabelo (Taqsir — para mulheres e quem prefere). Marca o fim do estado de Ihram.', meaning: 'Renovação. Saída do estado sagrado de volta ao mundo — transformado.' },
  { step: 'Tawaf al-Ifadah', arabic: 'طَوَافُ الإِفَاضَة', desc: 'Retorne à Masjid al-Haram e faça o Tawaf (7 voltas ao redor da Kaaba). Siga com o Sa\'i entre Safa e Marwa (7 vezes) se não fez antes.', meaning: 'O coração do Hajj. Girar ao redor da Casa de Allah — símbolo de que Allah é o centro de tudo.' },
]

const umraSteps: Step[] = [
  { step: 'Ihram no Miqat', arabic: 'الإِحْرَام', desc: 'Coloque o Ihram antes de cruzar o Miqat designado. Para brasileiros que chegam de avião, o Miqat é Qarn al-Manazil (sobrevoo). Faça a intenção da Umra.', meaning: 'Entrada no estado de pureza e intenção. Abandono do mundo e foco em Allah.' },
  { step: 'Tawaf — 7 voltas', arabic: 'الطَّوَاف', desc: 'Circunde a Kaaba 7 vezes no sentido anti-horário, começando e terminando na Pedra Negra (Hajr al-Aswad). Recite dhikr, faça du\'a, fale com Allah.', meaning: 'A Kaaba é a primeira casa de adoração construída para Allah. Circular é afirmar que Ele é o centro.' },
  { step: "Sa'i — Safa e Marwa", arabic: 'السَّعْي', desc: "Caminhe (ou corra levemente para homens) entre as colinas de Safa e Marwa 7 vezes. Começa em Safa, termina em Marwa. Recite du'as específicas em cada colina.", meaning: 'Memória de Hajar, mãe de Ismail, que correu entre as colinas em busca de água. Fé e ação diante do desespero.' },
  { step: 'Halq ou Taqsir', arabic: 'الحَلْق أَو التَّقْصِير', desc: 'Raspe a cabeça (homens — recomendado) ou corte um mínimo de cabelo (mulheres e quem prefere). A Umra está completa.', meaning: 'Renovação e saída do estado de Ihram. Você retorna ao mundo purificado.' },
]

const checklist = [
  { cat: 'Documentos', items: ['Passaporte válido (min. 6 meses)', 'Visto da Arábia Saudita (solicitar via agência halal)', 'Comprovante de vacina Meningococo ACWY', 'Vacina Yellow Fever (se aplicável)', 'Comprovante de compra de pacote de Hajj/Umra'] },
  { cat: 'Ihram e Vestuário', items: ['2 conjuntos de Ihram (homens)', 'Roupas modestas e largas (mulheres)', 'Sandálias que não cubram o tornozelo e dedos (homens, durante Ihram)', 'Meias', 'Cinto de dinheiro (para guardar documentos)'] },
  { cat: 'Saúde', items: ['Vacina Meningococo ACWY (obrigatória)', 'Vacina COVID-19 (verificar requisitos atuais)', 'Remédios pessoais com receita traduzida', 'Protetor solar FPS alto', 'Hidratante labial e nasal (clima seco)', 'Ibuprofeno, antidiarreico, sal de reidratação'] },
  { cat: 'Espiritualidade', items: ['Quran de bolso (pode ser app)', 'Livro de du\'as para Hajj/Umra', 'Tasbeeh (contador de dhikr)', 'Caderninho para anotações espirituais'] },
  { cat: 'Práticos', items: ['Real saudita (SAR) — câmbio no Brasil ou aeroporto', 'Carregador portátil (PowerBank)', 'Adaptador de tomada universal', 'Mochila pequena para circular', 'Roupas extras para dias em Mina (fora do Ihram)'] },
]

const brasilInfo = [
  { title: 'Visto de Hajj', text: 'O visto de Hajj é específico e emitido pela embaixada saudita via agências credenciadas. O Brasil possui cota anual de peregrinos. Procure agências certificadas pela embaixada.' },
  { title: 'Agências recomendadas', text: 'Busque agências com histórico comprovado na comunidade muçulmana. Verifique reviews em grupos de muçulmanos no Facebook e WhatsApp. Desconfie de preços muito abaixo da média.' },
  { title: 'Melhor época para Umra', text: 'A Umra pode ser feita qualquer época. Fora do Ramadan e Hajj, há menos multidão. Evitar Ramadan (lotado) e período de Hajj (8-13 Dhul Hijjah) se quiser mais tranquilidade.' },
  { title: 'Custo estimado (2024)', text: 'Pacotes de Umra saindo do Brasil: R$8.000-R$18.000 por pessoa (voo + hotel + deslocamentos). Hajj: R$25.000-R$50.000+. Planejamento de 1-2 anos é recomendado.' },
]

export default function MecaPage() {
  const [openCat, setOpenCat] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'hajj' | 'umra'>('umra')

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Guia de Meca</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 8 }}>مَكَّة الْمُكَرَّمَة — Hajj e Umra para brasileiros</p>

          {/* Difference card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.gold}40`, borderRadius: 12, padding: '14px 16px' }}>
              <p style={{ color: T.gold, fontWeight: 700, fontSize: 15, margin: '0 0 6px' }}>Hajj — الحَجّ</p>
              <p style={{ color: T.secondary, fontSize: 13, margin: 0, lineHeight: 1.6 }}>5º Pilar do Islam. Obrigatório uma vez na vida para quem tem condição física e financeira. Apenas em Dhul Hijjah (8-13).</p>
            </div>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px' }}>
              <p style={{ color: T.text, fontWeight: 700, fontSize: 15, margin: '0 0 6px' }}>Umra — العُمْرَة</p>
              <p style={{ color: T.secondary, fontSize: 13, margin: 0, lineHeight: 1.6 }}>Peregrinação voluntária (Sunnah mu\'akkadah). Pode ser feita qualquer época do ano. Menor em ritual, enorme em recompensa.</p>
            </div>
          </div>

          {/* Tab toggle */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {(['umra', 'hajj'] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                flex: 1, padding: '10px', borderRadius: 10,
                border: `1px solid ${activeTab === t ? T.gold : T.border}`,
                background: activeTab === t ? `${T.gold}20` : T.surface,
                color: activeTab === t ? T.gold : T.muted,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
              }}>
                {t === 'hajj' ? 'Passo a Passo do Hajj' : 'Passo a Passo da Umra'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {(activeTab === 'hajj' ? hajjSteps : umraSteps).map((s, i) => (
                  <motion.div key={s.step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                    style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '16px 18px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
                      <span style={{ background: T.gold, color: '#0D0B12', fontWeight: 700, fontSize: 12, borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <p style={{ color: T.gold, fontWeight: 600, fontSize: 15, margin: 0 }}>{s.step}</p>
                          <p style={{ fontFamily: 'Amiri, serif', color: T.gold, fontSize: 18, margin: 0 }}>{s.arabic}</p>
                        </div>
                        <p style={{ color: T.secondary, fontSize: 14, margin: '6px 0 6px', lineHeight: 1.65 }}>{s.desc}</p>
                        <div style={{ background: T.elevated, borderLeft: `3px solid ${T.gold}`, borderRadius: '0 6px 6px 0', padding: '6px 10px' }}>
                          <p style={{ color: T.muted, fontSize: 12, margin: 0, fontStyle: 'italic' }}>✨ {s.meaning}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Checklist */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>Checklist de Preparação</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
            {checklist.map(cat => (
              <div key={cat.cat} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
                <button onClick={() => setOpenCat(openCat === cat.cat ? null : cat.cat)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px', background: 'transparent', border: 'none',
                  color: T.text, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}>
                  <span>{cat.cat}</span>
                  {openCat === cat.cat ? <ChevronUp size={16} color={T.gold} /> : <ChevronDown size={16} color={T.muted} />}
                </button>
                <AnimatePresence>
                  {openCat === cat.cat && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 18px 14px', borderTop: `1px solid ${T.border}` }}>
                        {cat.items.map(item => (
                          <p key={item} style={{ color: T.secondary, fontSize: 13, margin: '8px 0 0', paddingLeft: 8, borderLeft: `2px solid ${T.gold}40` }}>{item}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Brasil */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>🇧🇷 Para Brasileiros</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {brasilInfo.map((info, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.06 }}
                style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px' }}
              >
                <p style={{ color: T.gold, fontWeight: 600, fontSize: 14, margin: '0 0 4px' }}>{info.title}</p>
                <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{info.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
