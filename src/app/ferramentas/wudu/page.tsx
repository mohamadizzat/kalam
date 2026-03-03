'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

const steps = [
  {
    number: 1,
    name: 'Intenção (Niyyah)',
    arabic: 'النِّيَّة',
    description: 'Faça a intenção sincera no coração de purificar-se para a oração. A Niyyah não precisa ser dita em voz alta — ela reside no coração. Diga internamente: "Tenho a intenção de fazer o Wudu para purificação."',
    tip: 'A intenção é o alicerce de todo ato de adoração.',
  },
  {
    number: 2,
    name: 'Bismillah',
    arabic: 'بِسْمِ اللهِ',
    description: 'Antes de começar, diga "Bismillah" (Em nome de Allah). Isso é Sunnah do Profeta ﷺ e marca o início consciente da purificação.',
    tip: 'Dizer Bismillah protege o Wudu espiritualmente.',
  },
  {
    number: 3,
    name: 'Lavar as Mãos',
    arabic: 'غَسْلُ الْيَدَيْنِ',
    description: 'Lave ambas as mãos até os pulsos três vezes. Comece pela mão direita. Passe água entre os dedos. Este ato limpa as mãos antes de usá-las para purificar o restante do corpo.',
    tip: '3x mão direita, depois 3x mão esquerda. Entre os dedos também.',
  },
  {
    number: 4,
    name: 'Bochechos e Nariz',
    arabic: 'الْمَضْمَضَةُ وَالاسْتِنْشَاق',
    description: 'Com a mão direita, leve água à boca e bocheche três vezes (Madmadah). Em seguida, inspire suavemente água pelo nariz com a mão direita e expire com a mão esquerda três vezes (Istinshaq). Limpa o interior da boca e do nariz.',
    tip: 'Use a mão esquerda apenas para expelir a água do nariz.',
  },
  {
    number: 5,
    name: 'Lavar o Rosto',
    arabic: 'غَسْلُ الْوَجْهِ',
    description: 'Lave o rosto inteiro três vezes — da testa até o queixo, de uma orelha à outra. Se houver barba, passe os dedos molhados por ela. O rosto é o centro da dignidade — lavá-lo é símbolo de humildade diante de Allah.',
    tip: 'Todo o rosto deve ser alcançado pela água, sem exceção.',
  },
  {
    number: 6,
    name: 'Lavar os Braços',
    arabic: 'غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ',
    description: 'Lave o braço direito da mão até o cotovelo inclusive, três vezes. Em seguida, o braço esquerdo da mesma forma três vezes. O cotovelo deve ser incluído. Este é um dos pilares (Fard) do Wudu.',
    tip: 'Direito primeiro, sempre. Cotovelos incluídos.',
  },
  {
    number: 7,
    name: 'Passar na Cabeça',
    arabic: 'مَسْحُ الرَّأْسِ',
    description: 'Com ambas as mãos úmidas, passe uma vez da testa até a nuca e retorne à testa. Não precisa ser lavagem — apenas umidade. Em seguida, com os indicadores, limpe o interior das orelhas e com os polegares, o exterior.',
    tip: 'Apenas uma vez, de frente pra trás e de volta.',
  },
  {
    number: 8,
    name: 'Lavar os Pés',
    arabic: 'غَسْلُ الْقَدَمَيْنِ',
    description: 'Lave o pé direito três vezes, incluindo os calcanhares e entre os dedos (use o dedo mínimo da mão esquerda). Em seguida o pé esquerdo três vezes da mesma forma. Os pés representam nossa caminhada — purificá-los é símbolo de integridade no caminho.',
    tip: 'Direito primeiro. Não esqueça entre os dedos e o calcanhar.',
  },
]

const duaAfter = {
  arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
  transliteration: "Ash-hadu allā ilāha illallāh, wa ash-hadu anna Muhammadan ʿabduhu wa rasūluh",
  translation: 'Atesto que não há divindade além de Allah, e atesto que Muhammad é Seu servo e Seu mensageiro.',
  note: 'Quem recitar esta dua após o Wudu, as oito portas do Paraíso serão abertas para ele. (Sahih Muslim)',
}

export default function WuduPage() {
  const [current, setCurrent] = useState(0)
  const [completed, setCompleted] = useState(false)

  const step = steps[current]
  const progress = ((current) / steps.length) * 100

  const handleNext = () => {
    if (current < steps.length - 1) setCurrent(c => c + 1)
    else setCompleted(true)
  }
  const handlePrev = () => {
    if (completed) { setCompleted(false); return }
    if (current > 0) setCurrent(c => c - 1)
  }

  return (
    <div style={{ background: T.bg, minHeight: '100vh', color: T.text }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <Link href="/ferramentas" style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: T.gold, marginBottom: 6 }}>Simulador de Wudu</h1>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 28 }}>Guia passo a passo da ablução islâmica — طَهَارَة</p>

          {/* Progress bar */}
          <div style={{ background: T.border, borderRadius: 4, height: 4, marginBottom: 32, overflow: 'hidden' }}>
            <motion.div
              animate={{ width: completed ? '100%' : `${progress}%` }}
              transition={{ duration: 0.4 }}
              style={{ height: '100%', background: T.gold, borderRadius: 4 }}
            />
          </div>

          {!completed ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#0D0B12' }}>
                    {step.number}
                  </div>
                  <span style={{ color: T.muted, fontSize: 13 }}>Passo {step.number} de {steps.length}</span>
                </div>

                {/* Card */}
                <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
                  {/* Arabic */}
                  <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <p style={{ fontFamily: 'Amiri, serif', fontSize: 36, color: T.gold, margin: 0, lineHeight: 1.4 }}>{step.arabic}</p>
                  </div>

                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: T.text, marginBottom: 14 }}>{step.name}</h2>
                  <p style={{ color: T.secondary, lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>{step.description}</p>

                  <div style={{ background: T.elevated, borderLeft: `3px solid ${T.gold}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                    <p style={{ color: T.gold, fontSize: 13, margin: 0 }}>💡 {step.tip}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ background: T.surface, border: `1px solid ${T.gold}40`, borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}
            >
              <CheckCircle size={48} color={T.gold} style={{ marginBottom: 16 }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: T.gold, marginBottom: 8 }}>Wudu Completo!</h2>
              <p style={{ color: T.secondary, marginBottom: 28, fontSize: 15 }}>Que Allah aceite sua purificação. Agora recite a dua:</p>

              <div style={{ background: T.elevated, borderRadius: 12, padding: '20px 24px', marginBottom: 16, textAlign: 'center' }}>
                <p style={{ fontFamily: 'Amiri, serif', fontSize: 22, color: T.gold, lineHeight: 1.8, marginBottom: 12 }}>{duaAfter.arabic}</p>
                <p style={{ color: T.muted, fontSize: 13, fontStyle: 'italic', marginBottom: 8 }}>{duaAfter.transliteration}</p>
                <p style={{ color: T.secondary, fontSize: 14, marginBottom: 0 }}>{duaAfter.translation}</p>
              </div>

              <p style={{ color: T.muted, fontSize: 13 }}>{duaAfter.note}</p>
            </motion.div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, gap: 12 }}>
            <button
              onClick={handlePrev}
              disabled={current === 0 && !completed}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: T.surface, border: `1px solid ${T.border}`,
                color: current === 0 && !completed ? T.muted : T.text,
                padding: '10px 20px', borderRadius: 8, cursor: current === 0 && !completed ? 'not-allowed' : 'pointer',
                fontSize: 14, opacity: current === 0 && !completed ? 0.4 : 1,
              }}
            >
              <ChevronLeft size={16} /> Anterior
            </button>

            {!completed && (
              <button
                onClick={handleNext}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: T.gold, border: 'none', color: '#0D0B12',
                  padding: '10px 24px', borderRadius: 8, cursor: 'pointer',
                  fontSize: 14, fontWeight: 600,
                }}
              >
                {current === steps.length - 1 ? 'Concluir' : 'Próximo'} <ChevronRight size={16} />
              </button>
            )}
            {completed && (
              <button
                onClick={() => { setCurrent(0); setCompleted(false) }}
                style={{
                  background: T.elevated, border: `1px solid ${T.border}`,
                  color: T.text, padding: '10px 20px', borderRadius: 8,
                  cursor: 'pointer', fontSize: 14,
                }}
              >
                Recomeçar
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
