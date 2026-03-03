'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const homens = {
  title: 'Vestimenta Masculina',
  arabic: 'لِبَاسُ الرَّجُل',
  intro: 'O Islam estabelece para o homem uma cobertura mínima chamada Awrah — a área entre o umbigo e o joelho. Além disso, orienta moderação, dignidade e coerência.',
  rules: [
    { title: 'Cobertura obrigatória (Awrah)', desc: 'Do umbigo até o joelho inclusive — esta é a Awrah do homem. Nenhuma roupa deve deixar essa região exposta em público.' },
    { title: 'Sem transparência', desc: 'Roupas transparentes que revelam a Awrah não cumprem a função. A roupa deve cobrir de forma efetiva, não apenas simbólica.' },
    { title: 'Sem seda pura para homens', desc: 'Homens não devem usar roupas de seda pura. Exceção: tecidos misturados ou seda em pequena proporção (menos de 50%).', basis: 'Bukhari 5635' },
    { title: 'Moderação e limpeza', desc: 'O Islam não incentiva extravagância (Israf). Roupas limpas, sem vanglória. "Coma, beba e vista-se, mas sem exagero." (Quran 7:31)' },
    { title: 'Não arrastar a roupa no chão', desc: 'Quem arrasta a roupa por orgulho — Allah não olhará para ele. Moderação na comprimento das roupas é Sunnah.', basis: 'Bukhari 3465' },
    { title: 'Imitação de gênero é proibida', desc: 'Homens não devem imitar a vestimenta feminina e vice-versa.', basis: 'Bukhari 5885' },
    { title: 'Uso de anel de ouro é proibido', desc: 'Apenas anel de prata é permitido para homens. Ouro em acessórios é proibido para o gênero masculino.', basis: 'Sahih Muslim 2090' },
    { title: 'Isbal — calça abaixo do tornozelo', desc: 'Usar calça ou roupa abaixo do tornozelo por orgulho é proibido. Se não houver orgulho, ainda assim é makruh (indesejável).', basis: 'Bukhari 3665' },
  ],
}

const mulheres = {
  title: 'Vestimenta Feminina',
  arabic: 'لِبَاسُ الْمَرْأَة',
  intro: 'O Islam convida a mulher a uma cobertura que honra sua dignidade, preserva sua privacidade e afirma sua identidade. O Hijab não é opressão — é declaração de identidade e proteção espiritual.',
  rules: [
    { title: 'O princípio da modéstia (Quran 24:31)', desc: '"Diga às crentes que baixem os olhos e guardem seus pudores, e que não mostrem seus enfeites, exceto o que normalmente aparece; e que cubram seus decotes com os véus..." — Base coránica do hijab.' },
    { title: 'Hijab — cobertura do cabelo e pescoço', desc: 'O Hijab cobre o cabelo, orelhas e pescoço. O rosto e as mãos estão permitidos para a maioria dos estudiosos. O Niqab (cobertura do rosto) é opcional (Sunnah mu\'akkadah para alguns).' },
    { title: 'Roupa não justa ao corpo', desc: 'A vestimenta não deve revelar a silhueta do corpo. Roupas largas, compridas ou camadas que não se ajustam ao contorno corporal.', basis: 'Abu Dawud 4116' },
    { title: 'Sem transparência', desc: 'Roupas que revelam a pele ou a cor da roupa de baixo não cumprem a Awrah. A cobertura deve ser efetiva.' },
    { title: 'Sem perfume forte em público', desc: 'O Profeta ﷺ disse que a mulher que passa por homens com perfume forte é como cometesse algo grave. Moderação é a chave.', basis: 'Tirmidhi 2786' },
    { title: 'Elegância e identidade, não apagamento', desc: 'O Islam não exige fealdade. Cores, padrões bonitos e elegância são permitidos — dentro da modéstia. Hijab pode ser belo e expressivo.' },
    { title: 'Diante de mahram, há liberdade', desc: 'Diante do marido e mahrams (pai, irmão, filho, tio...), a cobertura é diferente. O Hijab é para o espaço público e presença de estranhos.' },
    { title: 'Imitação de não-muçulmanas', desc: 'Vestimenta que imita modas contrárias à modéstia islâmica deve ser avaliada. A identidade muçulmana é afirmada, não apagada.' },
  ],
}

const brasilTips = [
  { title: 'Clima tropical e Hijab', text: 'Tecidos leves como viscose, chiffon e linho são ideais para o calor. Hijabs Jersey são populares por serem frescos e práticos.' },
  { title: 'Onde encontrar roupas modestas no Brasil', text: 'Lojas como Al-Medina, Islamic Store e grupos de Facebook de muçulmanas brasileiras são ótimos pontos de partida. Shein e Shopee têm filtros de modéstia.' },
  { title: 'Hijab no trabalho — seus direitos', text: 'A Constituição brasileira garante liberdade religiosa. Discriminação por Hijab é ilegal. Empresas não podem proibir sem justificativa objetiva e proporcional.' },
  { title: 'Combinando fé e estilo', text: 'Muitas muçulmanas brasileiras são referências de moda modesta. Modéstia não é ausência de estilo — é estilo com princípio.' },
  { title: 'Para homens em ambiente brasileiro', text: 'Uma calça comprida e camisa são suficientes. Não é obrigatório usar kufi (touca) ou jalabiyya — são culturais, não obrigações religiosas.' },
]

export default function VestimentaPage() {
  const [tab, setTab] = useState<'homens' | 'mulheres'>('mulheres')
  const data = tab === 'homens' ? homens : mulheres

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Vestimenta Islâmica</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>اللِّبَاس — Elegância, identidade e dignidade na fé</p>

          {/* Tab toggle */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
            {(['mulheres', 'homens'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, padding: '10px', borderRadius: 10,
                border: `1px solid ${tab === t ? T.gold : T.border}`,
                background: tab === t ? `${T.gold}20` : T.surface,
                color: tab === t ? T.gold : T.muted,
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'Playfair Display, serif',
              }}>
                {t === 'homens' ? '♂ Homens' : '♀ Mulheres'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 22px', marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: T.text, margin: 0 }}>{data.title}</h2>
                  <p style={{ fontFamily: 'Amiri, serif', fontSize: 22, color: T.gold, margin: 0 }}>{data.arabic}</p>
                </div>
                <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.65 }}>{data.intro}</p>
              </div>

              {/* Rules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {data.rules.map((rule, i) => (
                  <motion.div
                    key={rule.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: T.gold, fontSize: 14, fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                      <div>
                        <p style={{ color: T.gold, fontWeight: 600, fontSize: 14, margin: '0 0 4px' }}>{rule.title}</p>
                        <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{rule.desc}</p>
                        {'basis' in rule && rule.basis && (
                          <span style={{ display: 'inline-block', marginTop: 6, fontSize: 11, color: T.muted, background: T.elevated, padding: '2px 8px', borderRadius: 8 }}>
                            📖 {rule.basis}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Brasil section */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: T.gold, marginBottom: 14 }}>
            🇧🇷 Dicas Práticas para o Brasil
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {brasilTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px' }}
              >
                <p style={{ color: T.gold, fontWeight: 600, fontSize: 14, margin: '0 0 4px' }}>{tip.title}</p>
                <p style={{ color: T.secondary, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
