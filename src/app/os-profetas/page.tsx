'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GitBranch } from 'lucide-react'
import { BlurFade } from '@/components/effects/BlurFade'

const prophets = [
  // ── ERA 1: PATRIARCAS ──
  {
    slug: 'adao',
    name: 'Adão',
    arabicName: 'آدم',
    episode: 1,
    era: 'Patriarcas',
    title: 'A Criação e a Queda',
    status: 'available',
    hook: 'Um homem feito do barro da terra. A primeira desobediência. E um Deus que ainda assim ensinou.',
    bibleRef: 'Gênesis 1–3',
    quranRef: 'Al-Baqarah 2:30–39',
    insight: 'No Alcorão, Adão e Eva são igualmente responsáveis. Não existe pecado original.',
  },
  {
    slug: 'nuh',
    name: 'Noé',
    arabicName: 'نوح',
    episode: 2,
    era: 'Patriarcas',
    title: 'O Construtor da Arca',
    status: 'available',
    hook: 'Pregou 950 anos. Quase ninguém ouviu. Construiu um navio no deserto enquanto o povo ria. Depois veio a água.',
    bibleRef: 'Gênesis 6–9',
    quranRef: 'Nuh 71 / Hud 11:25–49',
    insight: 'No Alcorão, o próprio filho de Noé se recusa a entrar na arca e morre afogado. A linhagem de sangue não garante salvação — a escolha pessoal sim.',
  },
  {
    slug: 'ibrahim',
    name: 'Abraão',
    arabicName: 'إبراهيم',
    episode: 3,
    era: 'Patriarcas',
    title: 'O Pai das Nações',
    status: 'available',
    hook: 'Jogado no fogo por questionar os ídolos do pai. Saiu andando. Ergueu a Kaaba com o filho que a Bíblia esqueceu.',
    bibleRef: 'Gênesis 12–22',
    quranRef: 'Al-Baqarah 2:124–132',
    insight: 'Ibrahim é o homem que encontrou Deus através da razão pura — testando estrelas, lua e sol.',
  },
  {
    slug: 'lut',
    name: 'Ló',
    arabicName: 'لوط',
    episode: 4,
    era: 'Patriarcas',
    title: 'O Estrangeiro entre Sodoma',
    status: 'available',
    hook: 'Morava numa cidade que desprezava tudo que ele representava. Ofereceu hospitalidade a anjos que vieram destruir o lugar.',
    bibleRef: 'Gênesis 19:1–29',
    quranRef: 'Hud 11:77–83 / Al-Hijr 15:58–77',
    insight: 'No Alcorão, Ló é um profeta pleno com missão divina. Na Bíblia, é sobrinho de Abraão sem status profético. A mesma pessoa, dois papéis completamente diferentes.',
  },
  {
    slug: 'ishaq',
    name: 'Isaque',
    arabicName: 'إسحاق',
    episode: 5,
    era: 'Patriarcas',
    title: 'A Promessa Cumprida',
    status: 'available',
    hook: 'Nasceu de uma mãe de noventa anos que riu quando ouviu a notícia. O próprio nome dele significa "ele ri."',
    bibleRef: 'Gênesis 21–28',
    quranRef: 'As-Saffat 37:112–113 / Hud 11:71',
    insight: 'A Bíblia diz que Isaque foi o sacrifício de Abraão. O Alcorão não nomeia — e a maioria dos estudiosos islâmicos acredita que foi Ismael. A disputa muda quem herdou a aliança.',
  },
  {
    slug: 'yaqub',
    name: 'Jacó',
    arabicName: 'يعقوب',
    episode: 6,
    era: 'Patriarcas',
    title: 'O Pai de Israel',
    status: 'available',
    hook: 'Lutou com um anjo a noite inteira. Acordou com um nome novo: Israel. Gerou doze filhos — doze tribos.',
    bibleRef: 'Gênesis 28–35',
    quranRef: 'Yusuf 12 / Al-Baqarah 2:132–133',
    insight: 'Na Bíblia, Jacó engana o pai para roubar a bênção do irmão. No Alcorão, essa história não existe. Um profeta não engana.',
  },
  {
    slug: 'yusuf',
    name: 'José',
    arabicName: 'يوسف',
    episode: 7,
    era: 'Patriarcas',
    title: 'O Traído que Perdoou',
    status: 'available',
    hook: 'Vendido pelos próprios irmãos por algumas moedas. Trinta anos depois, era o segundo mais poderoso do Egito.',
    bibleRef: 'Gênesis 37–50',
    quranRef: 'Yusuf 12:1–111',
    insight: 'A história de Yusuf é a única surata do Alcorão que conta uma única história do começo ao fim.',
  },
  // ── ERA 2: PROVAÇÕES E LIBERTAÇÃO ──
  {
    slug: 'ayyub',
    name: 'Jó',
    arabicName: 'أيوب',
    episode: 8,
    era: 'Provações e Libertação',
    title: 'A Paciência Absoluta',
    status: 'available',
    hook: 'Perdeu filhos, riqueza, saúde — tudo num dia. Todo mundo disse: "Deus te abandonou." Ele disse: "Não."',
    bibleRef: 'Jó 1–42',
    quranRef: 'Al-Anbiya 21:83–84 / Sad 38:41–44',
    insight: 'Na Bíblia, Deus e Satanás fazem uma aposta sobre Jó. No Alcorão, não há aposta. Jó sofre, clama a Deus, e Deus responde. Sem intermediário.',
  },
  {
    slug: 'musa',
    name: 'Moisés',
    arabicName: 'موسى',
    episode: 9,
    era: 'Provações e Libertação',
    title: 'O Libertador',
    status: 'available',
    hook: 'Um bebê num cesto no Nilo. Criado pelo homem que escravizava seu povo. Depois, enfrentou-o.',
    bibleRef: 'Êxodo 1–40',
    quranRef: 'Al-Qasas 28 / Ta-Ha 20',
    insight: 'Musa é o profeta mais mencionado no Alcorão — 136 vezes. Mais do que Muhammad. Mais do que qualquer outro.',
  },
  // ── ERA 3: REIS E PROFETAS ──
  {
    slug: 'dawud',
    name: 'Davi',
    arabicName: 'داوود',
    episode: 10,
    era: 'Reis e Profetas',
    title: 'O Rei que Cantava',
    status: 'available',
    hook: 'Um pastor de ovelhas que matou um gigante com uma pedra. Virou rei. Escreveu salmos que o mundo ainda canta 3.000 anos depois.',
    bibleRef: '1 Samuel 17 / 2 Samuel 11–12',
    quranRef: 'Al-Baqarah 2:251 / Sad 38:17–26',
    insight: 'Na Bíblia, Davi comete adultério com Bate-Seba e manda matar o marido dela. No Alcorão, essa história não existe. O pecado do rei é julgado de forma completamente diferente.',
  },
  {
    slug: 'suleiman',
    name: 'Salomão',
    arabicName: 'سليمان',
    episode: 11,
    era: 'Reis e Profetas',
    title: 'O Sábio dos Sábios',
    status: 'available',
    hook: 'Deus ofereceu qualquer coisa. Ele pediu sabedoria. Recebeu sabedoria, riqueza e poder sobre o vento e os jinns.',
    bibleRef: '1 Reis 3–11',
    quranRef: 'An-Naml 27:15–44 / Sad 38:30–40',
    insight: 'Na Bíblia, Salomão cai na idolatria por causa das esposas. No Alcorão, ele nunca desvia. E conversa com formigas.',
  },
  {
    slug: 'ilyas',
    name: 'Elias',
    arabicName: 'إلياس',
    episode: 12,
    era: 'Reis e Profetas',
    title: 'O Fogo do Céu',
    status: 'available',
    hook: 'Sozinho contra 450 profetas de Baal. Pediu fogo do céu. O fogo veio. Depois, fugiu com medo de uma rainha.',
    bibleRef: '1 Reis 18–19',
    quranRef: 'As-Saffat 37:123–132 / Al-An\'am 6:85',
    insight: 'Na Bíblia, Elias sobe ao céu num carro de fogo — não morre. No Alcorão, é mencionado brevemente como profeta fiel. Duas tradições, dois pesos completamente diferentes.',
  },
  {
    slug: 'alyasa',
    name: 'Eliseu',
    arabicName: 'اليسع',
    episode: 13,
    era: 'Reis e Profetas',
    title: 'O Herdeiro do Manto',
    status: 'available',
    hook: 'Pediu porção dobrada do espírito do mestre. Recebeu. Abriu o rio Jordão como primeiro milagre. O discípulo superou o profeta.',
    bibleRef: '2 Reis 2–13',
    quranRef: 'Sad 38:48 / Al-An\'am 6:86',
    insight: 'Na Bíblia, Eliseu tem milagres detalhados — cura leprosos, multiplica azeite, ressuscita mortos. No Alcorão, recebe apenas duas menções. O profeta mais extenso de um livro é quase invisível no outro.',
  },
  {
    slug: 'yunus',
    name: 'Jonas',
    arabicName: 'يونس',
    episode: 14,
    era: 'Reis e Profetas',
    title: 'O Profeta que Fugiu',
    status: 'available',
    hook: 'O único profeta que tentou escapar da missão. Acabou dentro de um peixe. No escuro do ventre, finalmente orou.',
    bibleRef: 'Jonas 1–4',
    quranRef: 'Yunus 10:98 / As-Saffat 37:139–148',
    insight: 'Na Bíblia, Jonas fica com raiva quando Deus perdoa Nínive. No Alcorão, a cidade inteira se arrepende e é salva — sem a amargura do profeta. Jonas aprende a lição.',
  },
  // ── ERA 4: OS ÚLTIMOS ──
  {
    slug: 'yahya',
    name: 'João Batista',
    arabicName: 'يحيى',
    episode: 15,
    era: 'Os Últimos',
    title: 'A Voz no Deserto',
    status: 'available',
    hook: 'Filho de um sacerdote idoso e uma mulher estéril. Viveu no deserto. Batizou o Messias. Morreu decapitado por um pedido de dança.',
    bibleRef: 'Lucas 1:13–17 / Mateus 14:1–12',
    quranRef: 'Maryam 19:7–15 / Al-Imran 3:38–41',
    insight: 'No Alcorão, Deus diz que "nunca criou alguém com esse nome antes" de Yahya. Um nome único para uma missão única: preparar o caminho para Issa.',
  },
  {
    slug: 'issa',
    name: 'Jesus',
    arabicName: 'عيسى',
    episode: 16,
    era: 'Os Últimos',
    title: 'A Palavra de Deus',
    status: 'available',
    hook: 'Nasceu sem pai. Falou no berço. Curou cegos. O Alcorão o chama de "Palavra de Deus" e "Espírito de Deus."',
    bibleRef: 'Mateus 1–28 / Lucas 1–24',
    quranRef: 'Maryam 19 / Al-Imran 3',
    insight: 'Jesus é chamado de "Kalimatullah" (Palavra de Deus) e "Ruh min Allah" (Espírito de Deus) no Alcorão — títulos que nenhum outro profeta recebe.',
  },
  {
    slug: 'muhammad',
    name: 'Muhammad ﷺ',
    arabicName: 'محمد',
    episode: 17,
    era: 'Os Últimos',
    title: 'O Selo',
    status: 'available',
    hook: 'Órfão aos 6 anos. Analfabeto. Aos 40, recebeu as primeiras palavras de um livro que 1.8 bilhão de pessoas memorizam.',
    bibleRef: 'Deuteronômio 18:18 / João 14:16',
    quranRef: 'Al-Alaq 96:1–5 / Al-Ahzab 33:40',
    insight: 'Muhammad não é adorado no Islam. Ele é "abd" (servo) primeiro, "rasul" (mensageiro) segundo. Chorou, sangrou, duvidou e morreu.',
  },
]

function ProphetCard({ prophet, index }: { prophet: typeof prophets[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isAvailable = prophet.status === 'available'

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: '#161220',
        border: hovered && isAvailable
          ? '1px solid rgba(201,168,76,0.35)'
          : '1px solid #272230',
        borderRadius: 4,
        padding: '36px 32px',
        cursor: isAvailable ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered && isAvailable ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered && isAvailable
          ? '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.04)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold gradient top border on hover */}
      {isAvailable && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)'
            : 'transparent',
          transition: 'background 0.4s ease',
        }} />
      )}

      {/* Episode number + badge row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#7A7870',
        }}>
          Episódio {String(prophet.episode).padStart(2, '0')}
        </span>
        {isAvailable ? (
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 2,
            padding: '3px 8px',
          }}>
            Disponível
          </span>
        ) : (
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#7A7870',
            background: 'rgba(90,90,80,0.08)',
            border: '1px solid rgba(90,90,80,0.2)',
            borderRadius: 2,
            padding: '3px 8px',
          }}>
            Em breve
          </span>
        )}
      </div>

      {/* Arabic name */}
      <div style={{
        fontFamily: 'var(--font-arabic)',
        fontSize: 36,
        color: isAvailable ? '#C9A84C' : '#7A7870',
        direction: 'rtl',
        textAlign: 'right',
        marginBottom: 8,
        lineHeight: 1.3,
        textShadow: hovered && isAvailable ? '0 0 20px rgba(201,168,76,0.2)' : 'none',
        transition: 'text-shadow 0.3s ease, color 0.3s ease',
      }}>
        {prophet.arabicName}
      </div>

      {/* Prophet name */}
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 24,
        fontWeight: 600,
        color: '#F0EBE2',
        marginBottom: 4,
        lineHeight: 1.2,
      }}>
        {prophet.name}
      </h3>

      {/* Episode title */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#B3B0A6',
        marginBottom: 20,
        fontStyle: 'italic',
      }}>
        {prophet.title}
      </p>

      {/* Hook */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: '#B3B0A6',
        lineHeight: 1.75,
        marginBottom: 24,
      }}>
        {prophet.hook}
      </p>

      {/* Divider */}
      <div style={{
        width: '100%',
        height: 1,
        background: '#272230',
        marginBottom: 20,
      }} />

      {/* Scripture refs */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#7A7870',
          border: '1px solid #272230',
          borderRadius: 2,
          padding: '4px 8px',
        }}>
          Bíblia: {prophet.bibleRef}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#7A7870',
          border: '1px solid #272230',
          borderRadius: 2,
          padding: '4px 8px',
        }}>
          Alcorão: {prophet.quranRef}
        </span>
      </div>

      {/* CTA row */}
      {isAvailable && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: hovered ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.4)',
          transition: 'color 0.3s ease',
        }}>
          Ler episódio →
        </p>
      )}
    </motion.div>
  )

  if (isAvailable) {
    return (
      <Link href={`/os-profetas/${prophet.slug}`} style={{ textDecoration: 'none' }}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default function OsProfetasPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D0B12',
      paddingTop: 64,
    }}>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(64px, 8vw, 100px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Ambient radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: 28,
            }}>
              OS PROFETAS — A SÉRIE
            </p>
          </BlurFade>

          {/* Arabic title with glow */}
          <BlurFade delay={0.1}>
            <div
              className="arabic-glow"
              style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(48px, 8vw, 80px)',
                color: '#C9A84C',
                direction: 'rtl',
                marginBottom: 24,
                lineHeight: 1.2,
                textShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1)',
              }}
            >
              الأنبياء
            </div>
          </BlurFade>

          {/* Main headline */}
          <BlurFade delay={0.2}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              fontWeight: 600,
              color: '#F0EBE2',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              A mesma história
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C9A84C' }}>
                contada duas vezes.
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#B3B0A6',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Dezessete profetas. Dois textos sagrados. Uma linhagem que nunca foi quebrada.
            </p>
          </BlurFade>

          {/* Gold divider */}
          <BlurFade delay={0.4}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              justifyContent: 'center',
            }}>
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
              <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── INTRO PARAGRAPH ── */}
      <section style={{
        padding: '0 24px clamp(64px, 8vw, 96px)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: '#B3B0A6',
              lineHeight: 1.9,
              textAlign: 'center',
            }}>
              A Bíblia e o Alcorão contam as histórias dos mesmos profetas — mas com diferenças fascinantes que a maioria nunca percebeu. Cada episódio desta série compara as duas fontes lado a lado: o que está em cada texto, o que diverge, e o que esses detalhes revelam sobre a mensagem por trás da mensagem.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: '#7A7870',
              lineHeight: 1.9,
              textAlign: 'center',
              marginTop: 20,
            }}>
              Esta não é uma série de conversão. É uma série de comparação — para quem quer entender de onde essas histórias vieram, o que cada tradição preservou, e por que as diferenças importam.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── A PONTE BANNER ── */}
      <section style={{ padding: '0 24px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <Link
              href="/a-ponte"
              className="card-hover"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 24px', borderRadius: 4,
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(201,168,76,0.1)', flexShrink: 0,
              }}>
                <GitBranch size={20} style={{ color: '#C9A84C' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-serif)', fontSize: 15, color: '#F0EBE2',
                  fontWeight: 500, marginBottom: 2,
                }}>
                  Veja comparações Bíblia x Alcorão em A Ponte
                </p>
                <p style={{ fontSize: 12, color: '#B3B0A6' }}>
                  Estudo comparativo lado a lado — por profeta, por tema, por versículo
                </p>
              </div>
              <ArrowRight size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* ── EPISODES GRID ── */}
      <section style={{
        padding: '0 24px clamp(80px, 10vw, 120px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section label */}
          <BlurFade delay={0}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 48,
            }}>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#7A7870',
                whiteSpace: 'nowrap',
              }}>
                EPISÓDIOS
              </p>
              <div style={{ flex: 1, height: 1, background: '#272230' }} />
            </div>
          </BlurFade>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: 16,
          }}>
            {prophets.map((prophet, i) => {
              const prevEra = i > 0 ? prophets[i - 1].era : null
              const showEraDivider = prophet.era !== prevEra
              return (
                <Fragment key={prophet.slug}>
                  {showEraDivider && (
                    <div
                      style={{
                        gridColumn: '1 / -1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        marginTop: i > 0 ? 32 : 0,
                        marginBottom: 8,
                      }}
                    >
                      <div style={{ flex: 1, height: 1, background: '#272230' }} />
                      <span style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 10,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#7A7870',
                        whiteSpace: 'nowrap',
                      }}>
                        Era {prophet.era}
                      </span>
                      <div style={{ flex: 1, height: 1, background: '#272230' }} />
                    </div>
                  )}
                  <ProphetCard prophet={prophet} index={i} />
                </Fragment>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}>
        {/* Gold divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'center',
          marginBottom: 48,
        }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(201,168,76,0.4)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))' }} />
        </div>

        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#7A7870',
            marginBottom: 16,
          }}>
            TODOS OS 17 EPISÓDIOS DISPONÍVEIS
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#B3B0A6',
            marginBottom: 32,
          }}>
            De Adão a Muhammad. Uma linhagem completa.
          </p>
        </BlurFade>

        <BlurFade delay={0.15}>
          <Link
            href="/a-mensagem"
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
            Enquanto isso, leia A Mensagem →
          </Link>
        </BlurFade>
      </section>
    </div>
  )
}
