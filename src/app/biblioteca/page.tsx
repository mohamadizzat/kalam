'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'

// ─── DATA ───────────────────────────────────────────────────────────────────

type EntryType = {
  type: 'verse' | 'hadith'
  arabic: string
  portuguese: string
  ref: string
  note: string
}

type TopicType = {
  id: string
  label: string
  arabicLabel: string
  icon: string
  color: string
  description: string
  verseCount: number
  entries: EntryType[]
}

const LIBRARY_TOPICS: TopicType[] = [
  {
    id: 'amor',
    label: 'Amor',
    arabicLabel: 'الحُبّ',
    icon: '♥',
    color: '#C9A84C',
    description: 'O amor de Deus que vem antes de você merecer. A misericórdia que não expira.',
    verseCount: 47,
    entries: [
      {
        type: 'verse',
        arabic: 'يُحِبُّهُمْ وَيُحِبُّونَهُۥٓ',
        portuguese: 'Ele os ama e eles O amam.',
        ref: 'Al-Maidah 5:54',
        note: 'No Alcorão, Deus raramente usa a palavra "ama" sobre si mesmo. Quando usa — é definitivo.',
      },
      {
        type: 'verse',
        arabic: 'وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ',
        portuguese: 'E Allah ama os que fazem o bem.',
        ref: 'Al-Imran 3:134',
        note: 'Amor de Deus não é mérito — é resposta a caráter. Os que controlam a raiva e perdoam são amados.',
      },
      {
        type: 'verse',
        arabic: 'وَمَآ أَرْسَلْنَـٰكَ إِلَّا رَحْمَةً لِّلْعَـٰلَمِينَ',
        portuguese: 'E não te enviamos senão como misericórdia para os mundos.',
        ref: 'Al-Anbiya 21:107',
        note: 'A missão do último profeta não foi julgamento — foi misericórdia. Para todos os mundos.',
      },
      {
        type: 'hadith',
        arabic: 'إِنَّ اللَّهَ أَرْحَمُ بِعِبَادِهِ مِنْ هَذِهِ بِوَلَدِهَا',
        portuguese: 'Allah é mais misericordioso com Seus servos do que esta mãe com seu filho.',
        ref: 'Bukhari e Muslim',
        note: 'O Profeta apontou para uma mãe amamentando seu filho e disse isso. A misericórdia de Deus supera o amor materno.',
      },
    ],
  },
  {
    id: 'medo',
    label: 'Medo',
    arabicLabel: 'الخَوْف',
    icon: '☁',
    color: '#B3B0A6',
    description: 'Para quando o futuro pesa mais que o presente. Versículos que substituem ansiedade por ancoragem.',
    verseCount: 32,
    entries: [
      {
        type: 'verse',
        arabic: 'إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا',
        portuguese: 'De fato, com a dificuldade vem a facilidade.',
        ref: 'Al-Inshirah 94:6',
        note: 'Deus repetiu esta frase duas vezes seguidas. Uma dificuldade, múltiplas saídas.',
      },
      {
        type: 'verse',
        arabic: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        portuguese: 'Allah não sobrecarrega uma alma além do que ela pode suportar.',
        ref: 'Al-Baqarah 2:286',
        note: 'Deus, que te criou, conhece o seu limite. O que Ele permite na sua vida foi calculado.',
      },
      {
        type: 'verse',
        arabic: 'أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ',
        portuguese: 'Certamente, na lembrança de Allah os corações encontram paz.',
        ref: "Ar-Ra'd 13:28",
        note: 'Tatmainn — paz, quietude, estar assentado. O antídoto para a ansiedade está na presença, não na resolução.',
      },
      {
        type: 'hadith',
        arabic: 'مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً',
        portuguese: 'Allah não criou doença sem criar também a cura.',
        ref: 'Bukhari',
        note: 'Cada dificuldade — emocional, física, espiritual — tem solução embutida no design de Deus.',
      },
    ],
  },
  {
    id: 'proposito',
    label: 'Propósito',
    arabicLabel: 'الهَدَف',
    icon: '✦',
    color: '#C9A84C',
    description: 'Por que você está aqui. O que Deus pensa sobre sua existência. O design por trás da sua vida.',
    verseCount: 28,
    entries: [
      {
        type: 'verse',
        arabic: 'وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ',
        portuguese: 'Não criei os jinns e os seres humanos senão para que Me adorassem.',
        ref: 'Adh-Dhariyat 51:56',
        note: 'Ibada — adoração — no Islam não é só reza. É viver com consciência de Deus em tudo que você faz.',
      },
      {
        type: 'verse',
        arabic: 'وَلَقَدْ كَرَّمْنَا بَنِىٓ ءَادَمَ',
        portuguese: 'E certamente honramos os filhos de Adão.',
        ref: 'Al-Isra 17:70',
        note: 'Sua dignidade é herança — não conquista. Deus honrou toda a humanidade antes de qualquer mérito.',
      },
      {
        type: 'verse',
        arabic: 'لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ',
        portuguese: 'Certamente criamos o ser humano na melhor das formas.',
        ref: 'At-Tin 95:4',
        note: 'Ahsani taqweem — a mais bela estrutura. Você foi criado como a criação mais sofisticada.',
      },
      {
        type: 'hadith',
        arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
        portuguese: 'As ações valem pelas intenções.',
        ref: 'Bukhari e Muslim',
        note: 'Propósito começa antes da ação. A pergunta não é "o que você fez" — é "por que você fez".',
      },
    ],
  },
  {
    id: 'gratidao',
    label: 'Gratidão',
    arabicLabel: 'الشُّكْر',
    icon: '✿',
    color: '#D4B96A',
    description: 'Para ver o que já tem antes de pedir o que falta. A perspectiva que muda tudo.',
    verseCount: 41,
    entries: [
      {
        type: 'verse',
        arabic: 'وَإِن تَعُدُّوا۟ نِعْمَةَ ٱللَّهِ لَا تُحْصُوهَآ',
        portuguese: 'E se fordes contar as graças de Allah, não podereis enumerá-las.',
        ref: 'Ibrahim 14:34',
        note: 'Tente contar. Cada respiração, cada sentido, cada memória. A abundância é incalculável.',
      },
      {
        type: 'verse',
        arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        portuguese: 'Se fordes gratos, Eu certamente vos darei mais.',
        ref: 'Ibrahim 14:7',
        note: 'A gratidão no Islam não é só emoção — é um princípio de abundância. Reconhece o que tem, recebe mais.',
      },
      {
        type: 'verse',
        arabic: 'فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى',
        portuguese: 'Lembrai-vos de Mim, que Eu Me lembrarei de vós. E sede gratos a Mim.',
        ref: 'Al-Baqarah 2:152',
        note: 'Lembrança + gratidão = a fórmula de conexão com Deus. Simples. Direto. Funciona.',
      },
      {
        type: 'hadith',
        arabic: 'مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ',
        portuguese: 'Quem não é grato às pessoas não é grato a Allah.',
        ref: 'Abu Dawud e Tirmidhi',
        note: 'Gratidão começa no horizontal — nas pessoas ao redor — e chega ao vertical. Não é possível separar.',
      },
    ],
  },
  {
    id: 'ansiedade',
    label: 'Ansiedade',
    arabicLabel: 'القَلَق',
    icon: '〰',
    color: '#B3B0A6',
    description: 'Para quando a mente não para. Versículos que ancoram quando tudo flutua.',
    verseCount: 19,
    entries: [
      {
        type: 'verse',
        arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
        portuguese: 'E Ele está convosco onde quer que estejais.',
        ref: 'Al-Hadid 57:4',
        note: 'Deus não está em nenhum lugar especial — está onde você está. No quarto de madrugada. No carro. Na crise.',
      },
      {
        type: 'verse',
        arabic: 'إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ',
        portuguese: 'De fato, Allah está com os pacientes.',
        ref: 'Al-Baqarah 2:153',
        note: 'Sabr não é resignação — é resistência com consciência. E Deus está com quem resiste.',
      },
      {
        type: 'hadith',
        arabic: 'عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ',
        portuguese: 'Admirável é a situação do crente — tudo em sua vida é bom para ele.',
        ref: 'Muslim',
        note: 'Se algo bom acontece, agradece. Se algo difícil, tem paciência. Nos dois casos — bem. O Islam chama isso de gratidão radical.',
      },
    ],
  },
  {
    id: 'perdao',
    label: 'Perdão',
    arabicLabel: 'المَغْفِرَة',
    icon: '◎',
    color: '#C9A84C',
    description: 'Para carregar menos. O perdão de Deus que não tem limite, e o perdão humano que liberta.',
    verseCount: 35,
    entries: [
      {
        type: 'verse',
        arabic: 'لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا',
        portuguese: 'Não desespereis da misericórdia de Allah. De fato, Allah perdoa todos os pecados.',
        ref: 'Az-Zumar 39:53',
        note: 'Jamia — todos. Sem exceção. Sem limite. O versículo não tem asterisco.',
      },
      {
        type: 'verse',
        arabic: 'وَهُوَ ٱلَّذِى يَقْبَلُ ٱلتَّوْبَةَ عَنْ عِبَادِهِ',
        portuguese: 'E Ele é quem aceita o arrependimento de Seus servos.',
        ref: 'Ash-Shura 42:25',
        note: 'Yaqbalu — aceita, não apenas ouve. O arrependimento não precisa ser perfeito. Só precisa ser sincero.',
      },
      {
        type: 'hadith',
        arabic: 'كُلُّ بَنِي آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ',
        portuguese: 'Todo filho de Adão comete erros. E os melhores dos que erram são os que se arrependem.',
        ref: 'Ibn Majah e Tirmidhi',
        note: 'O erro não te define — a resposta ao erro define. E voltar é melhor do que nunca ter ido embora.',
      },
    ],
  },
  {
    id: 'morte',
    label: 'Morte',
    arabicLabel: 'المَوْت',
    icon: '◇',
    color: '#7A7870',
    description: 'A única certeza. O que o Islam diz sobre o que vem depois — sem terror, com esperança.',
    verseCount: 22,
    entries: [
      {
        type: 'verse',
        arabic: 'كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ',
        portuguese: 'Toda alma provará a morte.',
        ref: 'Al-Imran 3:185',
        note: 'A morte no Islam não é fim — é transição. O versículo continua: "E receberão suas recompensas no Dia da Ressurreição." A morte é uma porta, não uma parede.',
      },
      {
        type: 'verse',
        arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَٰجِعُونَ',
        portuguese: 'De fato, somos de Allah e a Ele retornaremos.',
        ref: 'Al-Baqarah 2:156',
        note: 'Esta frase é dita no Islam ao receber notícia de morte. Não é tristeza — é orientação. Você vem de Deus e volta para Deus.',
      },
      {
        type: 'hadith',
        arabic: 'أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ',
        portuguese: 'Lembrai-vos frequentemente do destruidor dos prazeres — a morte.',
        ref: 'Ibn Majah e Tirmidhi',
        note: 'Não como morbidez. Como perspectiva. Quem pensa na morte gasta menos tempo no que não importa.',
      },
    ],
  },
  {
    id: 'familia',
    label: 'Família',
    arabicLabel: 'الأُسْرَة',
    icon: '⌂',
    color: '#D4B96A',
    description: 'Pais, filhos, cônjuges, irmãos. O que o Islam diz sobre os vínculos mais próximos.',
    verseCount: 38,
    entries: [
      {
        type: 'verse',
        arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ وَبِٱلْوَٰلِدَيْنِ إِحْسَـٰنًا',
        portuguese: 'Teu Senhor ordenou que adorem apenas a Ele, e que tratem os pais com bondade.',
        ref: 'Al-Isra 17:23',
        note: 'O cuidado com os pais aparece logo depois do mandamento de adorar a Deus. Na hierarquia de obrigações, eles estão em segundo.',
      },
      {
        type: 'verse',
        arabic: 'وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا',
        portuguese: 'E entre Seus sinais está que criou para vós, de vós mesmos, cônjuges para que possais encontrar paz neles.',
        ref: 'Ar-Rum 30:21',
        note: 'Litaskunu — para encontrar paz, quietude, sossego. O casamento no Islam tem como propósito central a paz — não apenas a família.',
      },
      {
        type: 'hadith',
        arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ',
        portuguese: 'O melhor de vocês é o melhor para sua família.',
        ref: 'Tirmidhi',
        note: 'O caráter de uma pessoa se revela em casa — não em público. O Islam avalia pelo espaço privado.',
      },
    ],
  },
  {
    id: 'riqueza',
    label: 'Riqueza',
    arabicLabel: 'المَال',
    icon: '◈',
    color: '#C9A84C',
    description: 'Dinheiro, abundância, riqueza material. O que o Islam realmente diz — sem romantizar a pobreza.',
    verseCount: 29,
    entries: [
      {
        type: 'verse',
        arabic: 'وَٱبْتَغِ فِيمَآ ءَاتَىٰكَ ٱللَّهُ ٱلدَّارَ ٱلْـَٔاخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ ٱلدُّنْيَا',
        portuguese: 'Busca, no que Allah te deu, a morada do Além. E não esqueças tua parte nesta vida.',
        ref: 'Al-Qasas 28:77',
        note: 'O Islam não romantiza pobreza. "Não esqueças tua parte nesta vida" — sua prosperidade aqui importa.',
      },
      {
        type: 'verse',
        arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        portuguese: 'Se fordes gratos, Eu certamente vos darei mais.',
        ref: 'Ibrahim 14:7',
        note: 'Abundância e gratidão estão ligadas. Não como lei da atração — como princípio espiritual de reconhecimento.',
      },
      {
        type: 'hadith',
        arabic: 'نِعْمَ الْمَالُ الصَّالِحُ لِلرَّجُلِ الصَّالِحِ',
        portuguese: 'Que boa riqueza é a do homem bom.',
        ref: 'Ahmad',
        note: 'O Profeta elogiou explicitamente a riqueza — quando usada bem. O Islam não glorifica nem condena. Contextualiza.',
      },
    ],
  },
]

// ─── ENTRY CARD ─────────────────────────────────────────────────────────────

function EntryCard({ entry, isLast }: { entry: EntryType; isLast: boolean }) {
  return (
    <div>
      <div style={{ padding: '28px 0' }}>
        {/* Hadith badge */}
        {entry.type === 'hadith' && (
          <div style={{ marginBottom: 16 }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 9,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#7A7870',
              border: '1px solid #272230',
              borderRadius: 4,
              padding: '3px 8px',
            }}>
              HADITH
            </span>
          </div>
        )}

        {/* Arabic text */}
        <p style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: entry.type === 'verse' ? 28 : 20,
          color: '#C9A84C',
          direction: 'rtl',
          textAlign: 'right',
          lineHeight: 1.7,
          marginBottom: 14,
        }}>
          {entry.arabic}
        </p>

        {/* Portuguese */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          fontStyle: 'italic',
          color: '#F0EBE2',
          lineHeight: 1.65,
          marginBottom: 6,
        }}>
          {entry.portuguese}
        </p>

        {/* Reference */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          color: '#7A7870',
          letterSpacing: '0.5px',
          marginBottom: 14,
        }}>
          {entry.ref}
        </p>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: '#B3B0A6',
          lineHeight: 1.7,
          borderLeft: '2px solid rgba(201,168,76,0.3)',
          paddingLeft: 16,
        }}>
          {entry.note}
        </p>
      </div>

      {/* Divider */}
      {!isLast && (
        <div style={{ height: 1, background: '#272230' }} />
      )}
    </div>
  )
}

// ─── TOPIC CARD ─────────────────────────────────────────────────────────────

function TopicCard({
  topic,
  isSelected,
  onToggle,
}: {
  topic: TopicType
  isSelected: boolean
  onToggle: () => void
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        background: isSelected ? '#161220' : '#0D0B12',
        padding: 32,
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        position: 'relative',
      }}
    >
      {/* Top gold accent when selected */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
              transformOrigin: 'center',
            }}
          />
        )}
      </AnimatePresence>

      {/* Topic header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: isSelected ? 0 : 0,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Icon + Arabic row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
            <span style={{
              fontSize: 22,
              color: topic.color,
              lineHeight: 1,
            }}>
              {topic.icon}
            </span>
            <span style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 24,
              color: topic.color,
              direction: 'rtl',
              opacity: 0.8,
              lineHeight: 1.4,
            }}>
              {topic.arabicLabel}
            </span>
          </div>

          {/* Label */}
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 20,
            fontWeight: 600,
            color: '#F0EBE2',
            marginBottom: 8,
            lineHeight: 1.2,
          }}>
            {topic.label}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#B3B0A6',
            lineHeight: 1.65,
            marginBottom: 14,
          }}>
            {topic.description}
          </p>

          {/* Footer row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              color: '#7A7870',
            }}>
              {topic.verseCount} versículos
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              color: isSelected ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.5)',
              transition: 'color 0.2s ease',
            }}>
              {isSelected ? 'Fechar ↑' : 'Ver tudo →'}
            </span>
          </div>
        </div>
      </div>

      {/* Expanded entries */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              marginTop: 28,
              borderTop: '1px solid #272230',
              paddingTop: 4,
            }}>
              {topic.entries.map((entry, i) => (
                <EntryCard
                  key={i}
                  entry={entry}
                  isLast={i === topic.entries.length - 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function BibliotecaPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [inputFocused, setInputFocused] = useState(false)

  const filteredTopics = LIBRARY_TOPICS.filter(
    (t) =>
      t.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function handleToggle(id: string) {
    setSelectedTopic((prev) => (prev === id ? null : id))
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0D0B12',
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '40px 24px 48px' }}>

          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 20,
            }}>
              BIBLIOTECA
            </p>
          </BlurFade>

          {/* H1 */}
          <BlurFade delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 6vw, 52px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 16,
              maxWidth: 640,
            }}>
              Encontre o que você precisa.
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.2}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: '#B3B0A6',
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 40,
            }}>
              Versículos e sabedoria organizados pelo que você está vivendo — não pelo número da surata.
            </p>
          </BlurFade>

          {/* Search bar */}
          <BlurFade delay={0.3}>
            <div style={{
              maxWidth: 480,
              margin: '0 auto 0 0',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
              }}>
                <Search size={18} color="#7A7870" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Buscar por tema, versículo ou sentimento..."
                style={{
                  width: '100%',
                  background: '#161220',
                  border: `1px solid ${inputFocused ? 'rgba(201,168,76,0.4)' : '#272230'}`,
                  borderRadius: 12,
                  padding: '14px 20px 14px 46px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: '#F0EBE2',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
            </div>
          </BlurFade>
        </section>

        {/* ── TOPICS GRID ── */}
        <section style={{ padding: '0 0 64px' }}>

          {filteredTopics.length === 0 ? (
            <div style={{
              padding: '80px 24px',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                color: '#7A7870',
                fontStyle: 'italic',
              }}>
                Nenhum tema encontrado.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#7A7870',
                marginTop: 8,
              }}>
                Tente outro sentimento ou palavra.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 1,
              background: '#272230',
            }}>
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  isSelected={selectedTopic === topic.id}
                  onToggle={() => handleToggle(topic.id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{
          padding: '0 24px 64px',
          textAlign: 'center',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          paddingTop: 48,
          marginTop: 0,
        }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#B3B0A6',
              marginBottom: 24,
            }}>
              Quer aprofundar um tema?
            </p>
          </BlurFade>

          <BlurFade delay={0.1}>
            <Link
              href="/trilhas"
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
              Ver trilhas de aprendizado →
            </Link>
          </BlurFade>
        </section>

      </div>
    </div>
  )
}
