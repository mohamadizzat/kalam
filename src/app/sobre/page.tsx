"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Check, MessageCircle, Mail, ArrowLeft, Heart, BookOpen, Users, Globe, Code } from "lucide-react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { NumberTicker } from "@/components/effects/NumberTicker";
import { BlurFade } from "@/components/effects/BlurFade";

/* ─────────────────────────── Hero ─────────────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0D0B12",
        overflow: "hidden",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        {/* Back button */}
        <BlurFade delay={0}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#7A7870",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.5px",
              marginBottom: "40px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7870' }}
          >
            <ArrowLeft size={14} />
            Voltar ao inicio
          </Link>
        </BlurFade>

        {/* Eyebrow */}
        <BlurFade delay={0.05}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              marginBottom: 32,
            }}
          >
            SOBRE O KALAM
          </p>
        </BlurFade>

        {/* H1 */}
        <BlurFade delay={0.15}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 6vw, 52px)",
              fontWeight: 700,
              color: "#F0EBE2",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Uma Mensagem Que Atravessou 1.400 Anos.
          </h1>
        </BlurFade>

        {/* Subtitle */}
        <BlurFade delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontStyle: "italic",
              color: "#C9A84C",
              lineHeight: 1.4,
            }}
          >
            Chegou ate voce.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

/* ─────────────────────────── Mission ─────────────────────────── */
function MissionSection() {
  return (
    <section
      style={{
        background: "#111111",
        borderTop: "1px solid #272230",
        borderBottom: "1px solid #272230",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <SectionReveal delay={0}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.55)",
                marginBottom: 20,
              }}
            >
              O QUE E O KALAM
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 2vw, 17px)",
                color: "#B3B0A6",
                lineHeight: 1.85,
              }}
            >
              Kalam (<span style={{ fontFamily: "var(--font-arabic)" }}>كلام</span>) em arabe significa{" "}
              <span style={{ color: "#F0EBE2", fontWeight: 500 }}>
                &quot;A Palavra&quot;
              </span>{" "}
              ou{" "}
              <span style={{ color: "#F0EBE2", fontWeight: 500 }}>
                &quot;O Discurso&quot;
              </span>
              . E o nome de um projeto cultural que acredita que a mensagem
              islamica — completa, honesta, sem filtros — merece ser conhecida
              por todo brasileiro que ja se perguntou sobre Deus, sobre os
              profetas, sobre a origem das coisas.
            </p>
          </div>
        </SectionReveal>

        {/* Right — Large Arabic */}
        <SectionReveal delay={0.2}>
          <div style={{ textAlign: "center" }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              style={{
                fontFamily: "var(--font-arabic)",
                fontSize: "clamp(100px, 15vw, 180px)",
                fontWeight: 700,
                color: "#C9A84C",
                lineHeight: 1,
                display: "block",
                textShadow:
                  "0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(201,168,76,0.1)",
              }}
            >
              كلام
            </motion.span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Mission Statement ─────────────────────────── */
function MissionStatementSection() {
  return (
    <section
      style={{
        background: "#0D0B12",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              marginBottom: 32,
            }}
          >
            NOSSA MISSAO
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: "#F0EBE2",
              lineHeight: 1.4,
              marginBottom: 24,
              position: "relative",
            }}
          >
            <span style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-serif)",
              fontSize: "60px",
              color: "rgba(201,168,76,0.15)",
              lineHeight: 1,
            }}>
              &ldquo;
            </span>
            Tornar a mensagem do Islam acessivel, honesta e respeitosa para todo brasileiro que busca respostas.
          </blockquote>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "#B3B0A6",
              lineHeight: 1.85,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Nao queremos convencer ninguem. Queremos que as pessoas tenham acesso a uma mensagem que existe ha 14 seculos — sem distorcao, sem pressao, sem medo. O Kalam e um espaco de{" "}
            <span style={{ color: "#C9A84C" }}>conhecimento</span>, nao de conversao.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── 4 Spaces ─────────────────────────── */
function SpacesSection() {
  const spaces = [
    {
      icon: BookOpen,
      title: "A Palavra",
      arabic: "كلمة",
      description: "O Quran completo em arabe e portugues. Estudos profundos, hadiths, parabolas, recitacao e busca inteligente.",
    },
    {
      icon: Heart,
      title: "A Presenca",
      arabic: "حضور",
      description: "99 Nomes de Deus, duas, dhikr digital, flashcards, horarios de oracao e contemplacao meditativa.",
    },
    {
      icon: Users,
      title: "A Jornada",
      arabic: "رحلة",
      description: "Historias dos profetas, Seerah do Profeta Muhammad, companheiros, mulheres no Islam, trilhas de estudo e desafios.",
    },
    {
      icon: Globe,
      title: "A Alma",
      arabic: "روح",
      description: "Seu espaco mais intimo. Journal espiritual, progresso pessoal, rotina diaria e sabedoria para a mente.",
    },
  ];

  return (
    <section
      style={{
        background: "#111111",
        borderTop: "1px solid #272230",
        borderBottom: "1px solid #272230",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            4 ESPACOS, 1 JORNADA
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {spaces.map((space, i) => (
            <SectionReveal key={space.title} delay={0.1 * (i + 1)}>
              <div
                style={{
                  background: "#0D0B12",
                  border: "1px solid #272230",
                  borderRadius: 4,
                  padding: "clamp(28px, 4vw, 36px)",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 80,
                    height: 80,
                    background:
                      "radial-gradient(circle at top left, rgba(201,168,76,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <space.icon size={22} style={{ color: "#C9A84C" }} />
                  <span style={{
                    fontFamily: "var(--font-arabic)",
                    fontSize: "18px",
                    color: "rgba(201,168,76,0.4)",
                  }}>
                    {space.arabic}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#F0EBE2",
                    marginBottom: 10,
                  }}
                >
                  {space.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "#7A7870",
                    lineHeight: 1.65,
                  }}
                >
                  {space.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Is / Is Not ─────────────────────────── */
function IsIsNotSection() {
  const notList = [
    "Proselitismo disfarcado",
    "Portal de conversao",
    "Propaganda religiosa",
    "Representante de nenhuma mesquita ou organizacao",
  ];

  const isList = [
    "Exploracao honesta de uma tradicao de 1.400 anos",
    "Conteudo para quem tem perguntas sem medo de respostas",
    "Paralelos entre Biblia e Alcorao",
    "Informacao — o que voce faz com ela e sua decisao",
  ];

  return (
    <section
      style={{
        background: "#0D0B12",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            DEIXA EU SER CLARO
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {/* NOT card */}
          <SectionReveal delay={0.1}>
            <div
              style={{
                background: "#111111",
                border: "1px solid #272230",
                borderRadius: 4,
                padding: "clamp(28px, 4vw, 40px)",
                height: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 600,
                  color: "#7A7870",
                  marginBottom: 28,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(90,90,80,0.4)",
                }}
              >
                O Kalam NAO E
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {notList.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "rgba(90,90,80,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <X size={11} color="#7A7870" />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        color: "#7A7870",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* IS card */}
          <SectionReveal delay={0.2}>
            <div
              style={{
                background: "#111111",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 4,
                padding: "clamp(28px, 4vw, 40px)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gold corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background:
                    "radial-gradient(circle at top right, rgba(201,168,76,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 600,
                  color: "#C9A84C",
                  marginBottom: 28,
                }}
              >
                O Kalam E
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {isList.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "rgba(201,168,76,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <Check size={11} color="#C9A84C" />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        color: "#B3B0A6",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Para Quem ─────────────────────────── */
function ParaQuemSection() {
  const audiences = [
    {
      title: "O curioso",
      description: "Voce ja ouviu falar do Islam mas nunca teve acesso a informacao sem filtro. Aqui voce encontra.",
    },
    {
      title: "O cristao com perguntas",
      description: "Voce reverencia Abraao, Moises e Jesus. Sabia que eles sao profetas do Islam tambem? Descubra o que une as duas tradicoes.",
    },
    {
      title: "O muçulmano brasileiro",
      description: "Voce pratica mas quer aprofundar. Quran em portugues, hadiths, 99 Nomes, dhikr digital — tudo num so lugar.",
    },
    {
      title: "O buscador",
      description: "Voce nao segue nenhuma religiao mas sente que existe algo maior. O Kalam nao pede fe — pede honestidade intelectual.",
    },
  ];

  return (
    <section
      style={{
        background: "#111111",
        borderTop: "1px solid #272230",
        borderBottom: "1px solid #272230",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            PARA QUEM E O KALAM?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 700,
              color: "#F0EBE2",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Para todo brasileiro com perguntas honestas
          </h2>
        </SectionReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {audiences.map((item, i) => (
            <SectionReveal key={item.title} delay={0.1 * (i + 1)}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  background: "#0D0B12",
                  border: "1px solid #272230",
                  borderRadius: 4,
                }}
              >
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  <span style={{ color: "#C9A84C", fontSize: "14px", fontWeight: 700 }}>
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#F0EBE2",
                    marginBottom: "6px",
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "#B3B0A6",
                    lineHeight: 1.7,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Numbers ─────────────────────────── */
function NumbersSection() {
  const stats = [
    { value: 1400, suffix: "", label: "anos de documentacao", sublabel: "preservados sem alteracao" },
    { value: 114, suffix: "", label: "suratas no Alcorao", sublabel: "capitulos do documento original" },
    { value: 25, suffix: "", label: "profetas em comum", sublabel: "com a Biblia" },
  ];

  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "clamp(72px, 10vw, 112px) 24px",
        borderTop: "1px solid rgba(201,168,76,0.06)",
        borderBottom: "1px solid rgba(201,168,76,0.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              textAlign: "center",
              marginBottom: 56,
            }}
          >
            EM NUMEROS
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "#272230",
            border: "1px solid #272230",
          }}
        >
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#0D0D0D",
                  padding: "clamp(32px, 5vw, 52px) 24px",
                  textAlign: "center",
                }}
              >
                <NumberTicker value={stat.value} suffix={stat.suffix} duration={2000} />
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#F0EBE2",
                    marginTop: 16,
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "#7A7870",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.sublabel}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Philosophy ─────────────────────────── */
function PhilosophySection() {
  return (
    <section
      style={{
        background: "#0D0B12",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <div
            style={{
              background: "#111111",
              borderLeft: "3px solid #C9A84C",
              borderTop: "1px solid #272230",
              borderRight: "1px solid #272230",
              borderBottom: "1px solid #272230",
              borderRadius: "0 4px 4px 0",
              padding: "clamp(36px, 5vw, 56px) clamp(28px, 5vw, 56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 300,
                height: "100%",
                background:
                  "radial-gradient(ellipse 80% 80% at 0% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.55)",
                marginBottom: 20,
              }}
            >
              A FILOSOFIA
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: "#F0EBE2",
                marginBottom: 24,
                lineHeight: 1.3,
              }}
            >
              Por que falar de Islam para brasileiros?
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 2vw, 17px)",
                color: "#B3B0A6",
                lineHeight: 1.9,
                maxWidth: 720,
              }}
            >
              Porque{" "}
              <span style={{ color: "#F0EBE2" }}>
                1.8 bilhao de pessoas no mundo
              </span>{" "}
              seguem uma tradicao que a maioria dos brasileiros nunca viu de
              dentro. Porque os mesmos profetas que o cristao brasileiro
              reverencia —{" "}
              <span style={{ color: "#C9A84C" }}>
                Abraao, Moises, Jesus
              </span>{" "}
              — sao profetas do Islam tambem. Porque ha perguntas dificeis que
              merecem respostas honestas, nao respostas faceis. Porque{" "}
              <span style={{ color: "#F0EBE2", fontStyle: "italic" }}>
                &quot;conhecer&quot; nao e &quot;concordar&quot;
              </span>
              . E porque voce tem o direito de saber.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Credits ─────────────────────────── */
function CreditsSection() {
  return (
    <section
      style={{
        background: "#0D0B12",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              marginBottom: 32,
            }}
          >
            CREDITOS & FONTES
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div
            style={{
              background: "#111111",
              border: "1px solid #272230",
              borderRadius: 4,
              padding: "clamp(28px, 4vw, 40px)",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <Code size={18} style={{ color: "#C9A84C" }} />
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                fontWeight: 600,
                color: "#F0EBE2",
              }}>
                Projeto de codigo aberto
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Texto do Quran", value: "API quran.com (tanzil.net)" },
                { label: "Traducao", value: "King Fahd Complex (PT-BR)" },
                { label: "Recitacao", value: "Mishary Rashid Alafasy" },
                { label: "99 Nomes", value: "Fontes tradicionais islamicas" },
                { label: "Hadiths", value: "Sahih Bukhari & Muslim (selecao)" },
                { label: "Design", value: "Feito com respeito e cuidado" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#7A7870",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "#B3B0A6",
                    textAlign: "right",
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Community ─────────────────────────── */
function CommunitySection() {
  return (
    <section
      style={{
        background: "#111111",
        borderTop: "1px solid #272230",
        padding: "clamp(72px, 10vw, 112px) 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.55)",
              marginBottom: 24,
            }}
          >
            CONTATO & FEEDBACK
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4.5vw, 40px)",
              fontWeight: 700,
              color: "#F0EBE2",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Faca parte
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "#B3B0A6",
              lineHeight: 1.75,
              marginBottom: 12,
            }}
          >
            Receba novos episodios, estudos e reflexoes direto no WhatsApp ou
            email. Tem uma sugestao ou encontrou um erro? Nos mande uma mensagem.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              color: "#7A7870",
              marginBottom: 40,
            }}
          >
            Cada feedback nos ajuda a melhorar o Kalam para todos.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/?text=Assalamu%20Alaykum!%20Vim%20pelo%20Kalam"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #C9A84C, #D4B96A)",
                color: "#0D0B12",
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: 2,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </motion.a>

            {/* Email button */}
            <motion.a
              href="mailto:kalam@mensagem-unica.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "transparent",
                color: "#C9A84C",
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: 2,
                textDecoration: "none",
                border: "1px solid rgba(201,168,76,0.35)",
                cursor: "pointer",
              }}
            >
              <Mail size={15} />
              Email
            </motion.a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              color: "#7A7870",
              letterSpacing: "0.5px",
            }}
          >
            Zero spam. Voce sai quando quiser.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer Quote ─────────────────────────── */
function FooterQuoteSection() {
  return (
    <section
      style={{
        background: "#0D0B12",
        borderTop: "1px solid #272230",
        padding: "clamp(80px, 12vw, 140px) 24px",
        textAlign: "center",
      }}
    >
      <SectionReveal delay={0}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "clamp(64px, 12vw, 120px)",
              fontWeight: 700,
              color: "#C9A84C",
              display: "block",
              lineHeight: 1,
              marginBottom: 28,
              textShadow:
                "0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)",
            }}
          >
            اقْرَأْ
          </span>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#F0EBE2",
              marginBottom: 12,
            }}
          >
            Iqra — &quot;Leia&quot;
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "#7A7870",
              letterSpacing: "0.5px",
            }}
          >
            A primeira palavra revelada ao profeta Muhammad. Ha 1.400 anos.
          </p>
        </motion.div>
      </SectionReveal>
    </section>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function SobrePage() {
  return (
    <>
      <HeroSection />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <GoldDivider />
      </div>

      <MissionSection />
      <MissionStatementSection />
      <SpacesSection />
      <IsIsNotSection />
      <ParaQuemSection />
      <NumbersSection />
      <PhilosophySection />
      <CreditsSection />
      <CommunitySection />
      <FooterQuoteSection />
    </>
  );
}
