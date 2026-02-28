'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { BlurFade } from '@/components/effects/BlurFade'
import { NumberTicker } from '@/components/effects/NumberTicker'

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: '01',
    arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
    name: 'Shahada',
    analogy: 'O Boot do Sistema',
    systemAnalogy:
      'A declaração de inicialização: "Não há deus além de Allah, e Muhammad é o Mensageiro de Allah." Como fazer boot: uma única fonte de verdade governa todas as decisões. Remove o peso de ser você mesmo a fonte de todas as respostas.',
    benefit:
      'Clareza de propósito documentada. Pesquisas mostram que pessoas com clareza de propósito têm menor índice de depressão e maior resiliência ao fracasso.',
  },
  {
    number: '02',
    arabic: 'الصَّلاَة',
    name: 'Salah',
    analogy: 'O Check-in Diário',
    systemAnalogy:
      'Cinco reuniões obrigatórias com o CEO do universo por dia. Não como punição. Como alinhamento. Fajr (amanhecer), Dhuhr (meio-dia), Asr (tarde), Maghrib (pôr do sol), Isha (noite).',
    benefit:
      'Neurociência confirma: pausas estruturadas aumentam foco, reduzem cortisol e melhoram tomada de decisão. O Islam praticou isso 1.400 anos antes da ciência documentar.',
  },
  {
    number: '03',
    arabic: 'الزَّكَاة',
    name: 'Zakat',
    analogy: 'O Sistema de Redistribuição',
    systemAnalogy:
      '2.5% do patrimônio acima do nisab (mínimo tributável) redistribuído anualmente. Não caridade opcional — protocolo de sistema. Evita concentração de capital que trava o ecossistema.',
    benefit:
      'Civilizações islâmicas medievais tinham os hospitais públicos mais avançados do mundo, financiados via zakat. Um sistema econômico com redistribuição embutida no código.',
  },
  {
    number: '04',
    arabic: 'الصَّوْم',
    name: 'Sawm',
    analogy: 'O Reboot Anual',
    systemAnalogy:
      '30 dias de jejum (Ramadã) — sem comer e beber do amanhecer ao pôr do sol. Não punição: reboot completo. Reset de hábitos, recalibração de prioridades, memória de que você é mais do que seus impulsos.',
    benefit:
      'Estudos em jejum intermitente documentam melhorias em clareza mental, regeneração celular (autofagia), e controle de impulsos. O Ramadã faz isso há 1.400 anos em escala comunitária.',
  },
  {
    number: '05',
    arabic: 'الحَجّ',
    name: 'Hajj',
    analogy: 'O Deploy em Produção',
    systemAnalogy:
      'Uma vez na vida: ir a Meca com 2 milhões de pessoas de 180+ países, todos com a mesma roupa, no mesmo momento, fazendo os mesmos movimentos. O maior reset de ego voluntário da história humana.',
    benefit:
      'O maior evento de pacificação identitária do mundo. Malcolm X foi ao Hajj e saiu transformado: "Vi homens de todas as cores, raças e etnias tratando-se como irmãos."',
  },
]

const docs = [
  {
    tag: '// source.code',
    title: 'O CÓDIGO',
    name: 'Alcorão',
    description:
      'Imutável, preservado, 1.400 anos sem alteração. O único documento religioso que permanece idêntico à sua versão original. O código-fonte que nenhuma atualização corrompeu.',
  },
  {
    tag: '// changelog.md',
    title: 'O CHANGELOG',
    name: 'Sunnah',
    description:
      'Como o sistema foi executado na prática. Os hábitos, decisões e ações do Profeta Muhammad documentados como modelo de execução. Não teoria — implementação real.',
  },
  {
    tag: '// system.logs',
    title: 'OS LOGS',
    name: 'Hadith',
    description:
      'Registro detalhado de cada decisão e ação do Profeta. Coletados, verificados e classificados por confiabilidade. O sistema de logging mais rigoroso da história humana.',
  },
]

const stats = [
  { value: 1.8, suffix: 'B', label: 'usuários ativos', sublabel: 'muçulmanos ao redor do mundo', decimals: 1 },
  { value: 1400, suffix: '+', label: 'anos de execução', sublabel: 'documentados sem interrupção' },
  { value: 6236, suffix: '', label: 'versículos', sublabel: 'no código-fonte do Alcorão' },
  { value: 180, suffix: '+', label: 'países de deploy', sublabel: 'onde o sistema opera hoje' },
]

// ─── Pillar Card ─────────────────────────────────────────────────────────────

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <BlurFade delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 0 0 1px rgba(201,168,76,0.35), 0 24px 48px rgba(0,0,0,0.5)' }}
        transition={{ duration: 0.25 }}
        style={{
          background: '#111111',
          border: '1px solid #2A2A2A',
          borderRadius: 4,
          padding: 'clamp(28px, 4vw, 40px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle background shimmer */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Number badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36,
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: 2,
          marginBottom: 20,
        }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: 11, letterSpacing: '1px',
            color: '#C9A84C',
          }}>
            {pillar.number}
          </span>
        </div>

        {/* Arabic */}
        <p className="arabic-glow" style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(26px, 4vw, 36px)',
          color: '#C9A84C',
          textAlign: 'right',
          marginBottom: 16,
          direction: 'rtl',
          opacity: 0.9,
          lineHeight: 1.5,
        }}>
          {pillar.arabic}
        </p>

        {/* Name + analogy */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 24, fontWeight: 600,
            color: '#F5F5F0',
            marginBottom: 4,
          }}>
            {pillar.name}
          </h3>
          <span style={{
            fontFamily: 'monospace',
            fontSize: 11, letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)',
          }}>
            // {pillar.analogy}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#2A2A2A', marginBottom: 20 }} />

        {/* System analogy */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15, lineHeight: 1.75,
          color: '#8A8A7A',
          marginBottom: 16,
        }}>
          {pillar.systemAnalogy}
        </p>

        {/* Benefit */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13, lineHeight: 1.7,
          color: '#5A5A50',
          borderLeft: '2px solid rgba(201,168,76,0.25)',
          paddingLeft: 14,
        }}>
          {pillar.benefit}
        </p>
      </motion.div>
    </BlurFade>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OSistemaPage() {
  const router = useRouter()

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 15vw, 160px) 24px clamp(80px, 10vw, 120px)',
        overflow: 'hidden',
      }}>
        {/* Grid pattern background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          maxWidth: 860,
        }}>
          {/* Eyebrow */}
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: 11, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: 32,
            }}>
              {'// O SISTEMA'}
            </p>
          </BlurFade>

          {/* H1 */}
          <BlurFade delay={0.15}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 700,
              color: '#F5F5F0',
              lineHeight: 1.1,
              marginBottom: 12,
              letterSpacing: '-0.5px',
            }}>
              Islam Não é Religião.
            </h1>
          </BlurFade>

          {/* H2 */}
          <BlurFade delay={0.3}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#C9A84C',
              lineHeight: 1.15,
              marginBottom: 32,
            }}>
              É um Sistema Operacional.
            </h2>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.45}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              color: '#8A8A7A',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              E todo sistema operacional tem uma função: rodar a vida sem travar.
            </p>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: 40,
            left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{
            fontFamily: 'monospace', fontSize: 9,
            letterSpacing: '3px', color: 'rgba(201,168,76,0.3)',
            textTransform: 'uppercase',
          }}>scroll</span>
          <div style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)',
          }} />
        </motion.div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: 'clamp(80px, 10vw, 120px) 24px',
      }}>
        <BlurFade delay={0}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: '#8A8A7A',
            lineHeight: 1.85,
            marginBottom: 28,
          }}>
            Quando você pensa em &ldquo;religião&rdquo;, provavelmente pensa em sentimento, em vago, em algo que funciona só nos momentos difíceis.
          </p>
        </BlurFade>

        <BlurFade delay={0.15}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 3.5vw, 32px)',
            fontWeight: 600,
            color: '#F5F5F0',
            lineHeight: 1.4,
            marginBottom: 28,
          }}>
            Islam não é isso.
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: '#8A8A7A',
            lineHeight: 1.85,
          }}>
            Islam é um sistema operacional completo. Cobre finanças, relacionamentos, saúde, tempo, mente, comunidade e propósito. Não deixa nenhuma área da vida sem protocolo.
          </p>
        </BlurFade>
      </section>

      {/* ── 3. KERNEL — Tawhid ───────────────────────────────────────────── */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <BlurFade>
          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            background: '#111111',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 4,
            padding: 'clamp(40px, 6vw, 64px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 60, height: 60,
              borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 60,
              borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />

            {/* KERNEL eyebrow */}
            <p style={{
              fontFamily: 'monospace',
              fontSize: 10, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: 24,
            }}>
              {'// KERNEL'}
            </p>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 600,
              color: '#F5F5F0',
              marginBottom: 32,
              lineHeight: 1.3,
            }}>
              Tawhid — Uma Única Fonte de Verdade
            </h2>

            {/* Arabic */}
            <p className="arabic-glow" style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(40px, 7vw, 72px)',
              color: '#C9A84C',
              textAlign: 'center',
              marginBottom: 32,
              direction: 'rtl',
              lineHeight: 1.6,
            }}>
              التَّوْحِيد
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#8A8A7A',
              lineHeight: 1.8,
              maxWidth: 660,
              margin: '0 auto',
              textAlign: 'center',
            }}>
              Como todo SO precisa de um kernel — o núcleo que roda tudo — o Islam tem o Tawhid: a unicidade de Allah. Uma única fonte de verdade. Sem conflito de dependências, sem dois sistemas tentando controlar o mesmo processo.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* ── 4. FIVE PILLARS ──────────────────────────────────────────────── */}
      <section style={{
        background: '#0D0D0D',
        padding: 'clamp(80px, 10vw, 120px) 24px',
        borderTop: '1px solid rgba(201,168,76,0.06)',
        borderBottom: '1px solid rgba(201,168,76,0.06)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section header */}
          <BlurFade style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: 10, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: 16,
            }}>
              {'// OS CINCO PROTOCOLOS OBRIGATÓRIOS'}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 600,
              color: '#F5F5F0',
              lineHeight: 1.2,
            }}>
              As Cinco Funções que Estruturam Tudo
            </h2>
          </BlurFade>

          {/* Grid: 2 columns top, then 3 columns, adapted for 5 items */}
          {/* Row 1: 2 items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 20,
            marginBottom: 20,
          }}>
            {pillars.slice(0, 2).map((p, i) => (
              <PillarCard key={p.number} pillar={p} index={i} />
            ))}
          </div>

          {/* Row 2: 3 items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 20,
          }}>
            {pillars.slice(2).map((p, i) => (
              <PillarCard key={p.number} pillar={p} index={i + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DOCUMENTATION ─────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BlurFade style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: 10, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: 16,
            }}>
              {'// DOCUMENTAÇÃO DO SISTEMA'}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 600,
              color: '#F5F5F0',
            }}>
              Três Camadas de Documentação
            </h2>
          </BlurFade>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 1,
            background: '#2A2A2A',
            border: '1px solid #2A2A2A',
          }}>
            {docs.map((doc, i) => (
              <BlurFade key={i} delay={i * 0.12}>
                <div style={{
                  background: '#0D0D0D',
                  padding: 'clamp(32px, 5vw, 48px) 32px',
                  height: '100%',
                }}>
                  {/* Tag */}
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: 11, color: 'rgba(201,168,76,0.5)',
                    marginBottom: 20,
                    letterSpacing: '0.5px',
                  }}>
                    {doc.tag}
                  </p>

                  {/* Title */}
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: 10, letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    marginBottom: 8,
                  }}>
                    {doc.title}
                  </p>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 28, fontWeight: 600,
                    color: '#F5F5F0',
                    marginBottom: 20,
                  }}>
                    {doc.name}
                  </h3>

                  {/* Divider */}
                  <div style={{ height: 1, background: '#2A2A2A', marginBottom: 20 }} />

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14, lineHeight: 1.8,
                    color: '#8A8A7A',
                  }}>
                    {doc.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SYSTEM STATS ──────────────────────────────────────────────── */}
      <section style={{
        background: '#0D0D0D',
        padding: 'clamp(80px, 10vw, 120px) 24px',
        borderTop: '1px solid rgba(201,168,76,0.06)',
        borderBottom: '1px solid rgba(201,168,76,0.06)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BlurFade style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: 10, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
            }}>
              {'// STATUS DO SISTEMA'}
            </p>
          </BlurFade>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 1,
            background: '#2A2A2A',
            border: '1px solid #2A2A2A',
          }}>
            {stats.map((s, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div style={{
                  background: '#0D0D0D',
                  padding: 'clamp(32px, 5vw, 48px) 24px',
                  textAlign: 'center',
                }}>
                  <NumberTicker
                    value={s.value}
                    suffix={s.suffix}
                    duration={2200}
                    decimals={s.decimals ?? 0}
                  />
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12, fontWeight: 600,
                    color: '#F5F5F0',
                    marginTop: 14, marginBottom: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    {s.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12, color: '#5A5A50',
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

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(100px, 14vw, 160px) 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 300,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <BlurFade delay={0}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: 10, letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.4)',
              marginBottom: 32,
            }}>
              {'// PRÓXIMO MÓDULO'}
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#F5F5F0',
              lineHeight: 1.4,
              marginBottom: 16,
            }}>
              &ldquo;Sistemas são avaliados pelos resultados quando executados.&rdquo;
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: '#8A8A7A',
              marginBottom: 48,
              lineHeight: 1.75,
            }}>
              Não pelo que prometem.
            </p>
          </BlurFade>

          <BlurFade delay={0.45}>
            <motion.button
              onClick={() => router.push('/os-profetas')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(90deg, #C9A84C, #D4B96A, #C9A84C)',
                backgroundSize: '200% 100%',
                border: 'none',
                color: '#0A0A0A',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                padding: '18px 48px',
                borderRadius: 2,
                cursor: 'pointer',
              }}
            >
              EXPLORAR OS PROFETAS →
            </motion.button>
          </BlurFade>
        </div>
      </section>

    </div>
  )
}
