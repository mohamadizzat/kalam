'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Home, Utensils, Users, BookOpen, Moon, Sun, Globe } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

type Practice = { title: string; desc: string; basis: string }
type Section = { id: string; label: string; icon: React.ReactNode; practices: Practice[] }

const sections: Section[] = [
  {
    id: 'casa', label: 'Ao Entrar em Casa', icon: <Home size={16} />,
    practices: [
      { title: 'Dizer Bismillah ao entrar', desc: 'Ao entrar em casa, mencione o nome de Allah. Isso afasta o shaitan de passar a noite com a família.', basis: 'Sahih Muslim 2018' },
      { title: 'Saudar com Salam', desc: 'Diga "As-salamu alaykum" ao entrar, mesmo que a casa esteja vazia — os anjos respondem.', basis: 'Quran 24:61 | Tirmidhi' },
      { title: 'Entrar com o pé direito', desc: 'Sunnah do Profeta ﷺ entrar em qualquer lugar com o pé direito — símbolo de bênção e início com o bem.', basis: 'Bukhari 426' },
      { title: 'Recitar duas rakat ao chegar', desc: 'Ao retornar de viagem ou de um período longo fora, recitar duas rakat de gratidão é sunnah recomendada.', basis: 'Bukhari 3087' },
      { title: 'Remover o calçado antes de entrar', desc: 'Respeito à casa e à família. Manter o ambiente limpo é parte da higiene islâmica (Taharah).', basis: 'Princípio de Taharah' },
      { title: 'Não ficar muito tempo na porta', desc: 'Entrar ou sair com intenção clara. Ficar na soleira expõe a família e não é de bom adab.', basis: 'Hadith geral de adab' },
    ],
  },
  {
    id: 'mesa', label: 'À Mesa', icon: <Utensils size={16} />,
    practices: [
      { title: 'Dizer Bismillah antes de comer', desc: 'Obrigatório. Se esquecer no início, diga "Bismillah fi awwalihi wa akhirihi" ao lembrar.', basis: 'Abu Dawud 3767 | Tirmidhi 1858' },
      { title: 'Comer com a mão direita', desc: 'O Profeta ﷺ proibiu comer com a esquerda. A direita é associada ao bem e à honra nas tradições islâmicas.', basis: 'Sahih Muslim 2020' },
      { title: 'Comer do que está à sua frente', desc: 'Não alcançar do lado oposto do prato coletivo. Comer do que está mais próximo — adab na refeição coletiva.', basis: 'Bukhari 5376' },
      { title: 'Não criticar a comida', desc: 'O Profeta ﷺ nunca criticou comida. Se gostava, comia; se não gostava, deixava sem fazer comentário.', basis: 'Bukhari 5409' },
      { title: 'Dizer Alhamdulillah ao terminar', desc: 'Gratidão ao final é Sunnah. "Alhamdulillahilladhi atamanâ wa saqânâ wa jaʿalanâ muslimîn."', basis: 'Abu Dawud 3850' },
      { title: 'Não encher demais o estômago', desc: '"O pior recipiente que o filho de Adão enche é seu estômago. Basta ao filho de Adão algumas mordidas para manter suas costas eretas."', basis: 'Tirmidhi 2380 — hasan' },
    ],
  },
  {
    id: 'familia', label: 'Com Família e Vizinhos', icon: <Users size={16} />,
    practices: [
      { title: 'Respeitar os mais velhos', desc: 'Ceder lugar, falar com suavidade, não interrompê-los. O Profeta ﷺ disse: "Não faz parte de nós quem não respeita nossos velhos."', basis: 'Abu Dawud 4943 — sahih' },
      { title: 'Ser gentil com o cônjuge', desc: '"Os melhores entre vocês são os melhores com suas famílias — e eu sou o melhor com a minha."', basis: 'Tirmidhi 3895 — sahih' },
      { title: 'Não espreitar na casa do vizinho', desc: 'Respeito à privacidade. Quem espreita sem permissão viola um direito islâmico claro.', basis: 'Bukhari 6241' },
      { title: 'Compartilhar alimento com o vizinho', desc: 'O Profeta ﷺ recomendava ao cozinhar colocar mais caldo para poder oferecer ao vizinho.', basis: 'Sahih Muslim 2625' },
      { title: 'Visitar os doentes', desc: 'Uma das obrigações do muçulmano com o irmão. Cada passo na visita é recompensado.', basis: 'Tirmidhi 967 — sahih' },
      { title: 'Não falar mal de ausentes (Gheeba)', desc: 'Gheeba (fofoca) é comparada no Quran a comer a carne do irmão morto. Evitar é obrigação.', basis: 'Quran 49:12' },
    ],
  },
  {
    id: 'mesquita', label: 'Na Mesquita', icon: <BookOpen size={16} />,
    practices: [
      { title: 'Entrar com o pé direito e dua', desc: '"Allahumma iftah li abwaba rahmatik" — dua ao entrar. Saída com o pé esquerdo e dua diferente.', basis: 'Sahih Muslim 713' },
      { title: 'Rezar dois rakat de tahiyyat al-masjid', desc: 'Ao sentar na mesquita, primeiro faça dois rakat de saudação. Não sentar antes disso se possível.', basis: 'Bukhari 1163' },
      { title: 'Manter silêncio e foco', desc: 'A mesquita é casa de Allah. Conversas mundanas, celular e barulho desnecessário devem ser evitados.', basis: 'Adab geral da mesquita' },
      { title: 'Não passar na frente de quem ora', desc: 'É grave. Quem não tem sutra, quem ora deve proteger com sutra. Não cruzar a linha do sujud.', basis: 'Bukhari 510' },
      { title: 'Vir em estado de pureza (Wudu)', desc: 'Entrar na mesquita sem Wudu é permitido, mas orar sem é inválido. Boa prática: manter Wudu sempre.', basis: 'Regra geral de Taharah' },
      { title: 'Evitar alimentos de cheiro forte antes', desc: 'Alho, cebola crua antes da mesquita são desaconselhados. Os anjos se incomodam com o mesmo que os humanos.', basis: 'Bukhari 853' },
    ],
  },
  {
    id: 'dormir', label: 'Ao Dormir', icon: <Moon size={16} />,
    practices: [
      { title: 'Deitar sobre o lado direito', desc: 'Sunnah do Profeta ﷺ. Iniciar o sono sobre o lado direito, com a mão direita sob a bochecha.', basis: 'Bukhari 247' },
      { title: 'Recitar Ayat al-Kursi', desc: 'Recitar antes de dormir — um anjo fica guardando a noite toda. Das maiores proteções da noite.', basis: 'Bukhari 5010' },
      { title: 'Recitar as três Quls', desc: 'Surat al-Ikhlas, Falaq e Nas — soprar nas palmas e passar pelo corpo 3x. Proteção completa.', basis: 'Bukhari 5748' },
      { title: 'Fazer ablução antes de dormir (Wudu)', desc: 'Dormir com Wudu — os anjos pedem perdão por você a noite toda.', basis: 'Bukhari 247' },
      { title: 'Dizer Bismillah ao apagar a luz', desc: 'E fechar portas, janelas e cobrir vasilhas — proteção contra o shaitan durante a noite.', basis: 'Bukhari 5624' },
      { title: 'Não dormir de barriga para baixo', desc: 'O Profeta ﷺ proibiu essa posição — é a posição que Allah não gosta.', basis: 'Abu Dawud 5040 — sahih' },
    ],
  },
  {
    id: 'acordar', label: 'Ao Acordar', icon: <Sun size={16} />,
    practices: [
      { title: 'Dua ao acordar', desc: '"Alhamdulillahilladhi ahyana ba\'da ma amatana wa ilayhin-nushur" — gratidão pela vida restaurada.', basis: 'Bukhari 6325' },
      { title: 'Fazer Wudu antes de tudo', desc: 'Antes de qualquer coisa, higienizar. Wudu ao acordar traz clareza e é parte dos adhkar da manhã.', basis: 'Sunnah geral' },
      { title: 'Recitar Adhkar al-Sabah', desc: 'Dhikrs matinais — Ayat al-Kursi, al-Ikhlas 3x, al-Falaq 3x, an-Nas 3x, etc. Proteção diária.', basis: 'Abu Dawud 5082' },
      { title: 'Usar o Siwak (ou escova)', desc: 'O Profeta ﷺ usava Siwak ao acordar. Higiene oral é parte da Sunnah.', basis: 'Bukhari 887' },
      { title: 'Espreguiçar-se é permitido', desc: 'Diferente do bocejo (makruh em excesso), espreguiçar ao acordar é natural e permitido.', basis: 'Princípio fiqh geral' },
      { title: 'Não voltar a dormir após Fajr sem necessidade', desc: 'O Profeta ﷺ pedia a Allah bênção na manhã da Ummah. Acordar cedo tem baraka.', basis: 'Tirmidhi 1212' },
    ],
  },
  {
    id: 'publico', label: 'Em Público', icon: <Globe size={16} />,
    practices: [
      { title: 'Espalhar o Salam amplamente', desc: 'Cumprimentar com Salam — inclusive quem você não conhece. Um dos direitos do muçulmano.', basis: 'Bukhari 28' },
      { title: 'Guardar o olhar (Ghaddul Basar)', desc: 'Não fitar com intensidade quem não é mahram. É proteção para o coração e sinal de hayaa.', basis: 'Quran 24:30' },
      { title: 'Não ocupar mais espaço do que precisa', desc: 'Em filas, transportes e espaços públicos — ser compacto e considerar o próximo é adab.', basis: 'Princípio de bem-trato' },
      { title: 'Remover obstáculos do caminho', desc: '"Remover algo prejudicial do caminho é Sadaqah." Qualquer ato de bem em público conta.', basis: 'Bukhari 652' },
      { title: 'Falar com suavidade e clareza', desc: 'Tom elevado e grosseiro em público é contrário ao adab. O Profeta ﷺ falava claramente, nunca gritava.', basis: 'Tirmidhi 1974' },
      { title: 'Cobrir o bocejo em público', desc: 'Tapar a boca ao bocejar e evitar sons ao fazê-lo — sunnah e boa educação simultaneamente.', basis: 'Bukhari 6226' },
    ],
  },
]

export default function EtiquetaPage() {
  const [active, setActive] = useState('casa')
  const section = sections.find(s => s.id === active)!

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Etiqueta Islâmica</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>الآدَاب الإِسْلَامِيَّة — Adab: as boas práticas no dia a dia</p>

          {/* Tab nav */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
            {sections.map(s => (
              <button key={s.id} onClick={() => setActive(s.id)} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 14px', borderRadius: 20,
                border: `1px solid ${active === s.id ? T.gold : T.border}`,
                background: active === s.id ? `${T.gold}20` : 'transparent',
                color: active === s.id ? T.gold : T.muted,
                fontSize: 13, cursor: 'pointer',
              }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {section.practices.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '16px 18px' }}
                  >
                    <p style={{ color: T.gold, fontWeight: 600, fontSize: 14, margin: '0 0 6px' }}>{p.title}</p>
                    <p style={{ color: T.secondary, fontSize: 14, margin: '0 0 8px', lineHeight: 1.65 }}>{p.desc}</p>
                    <span style={{ fontSize: 11, color: T.muted, background: T.elevated, padding: '2px 8px', borderRadius: 8 }}>
                      📖 {p.basis}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
