"use client";

import { motion } from "framer-motion";
import { X, Check, MessageCircle, Mail } from "lucide-react";
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
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
        {/* Eyebrow */}
        <BlurFade delay={0}>
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
              color: "#F5F5F0",
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
            Chegou até você.
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
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
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
              O QUE É O KALAM
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 2vw, 17px)",
                color: "#8A8A7A",
                lineHeight: 1.85,
              }}
            >
              Kalam (كلام) em árabe significa{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 500 }}>
                "A Palavra"
              </span>{" "}
              ou{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 500 }}>
                "O Discurso"
              </span>
              . É o nome de um projeto cultural que acredita que a mensagem
              islâmica — completa, honesta, sem filtros — merece ser conhecida
              por todo brasileiro que já se perguntou sobre Deus, sobre os
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

/* ─────────────────────────── Is / Is Not ─────────────────────────── */
function IsIsNotSection() {
  const notList = [
    "Proselitismo disfarçado",
    "Portal de conversão",
    "Propaganda religiosa",
    "Representante de nenhuma mesquita ou organização",
  ];

  const isList = [
    "Exploração honesta de uma tradição de 1.400 anos",
    "Conteúdo para quem tem perguntas sem medo de respostas",
    "Paralelos entre Bíblia e Alcorão",
    "Informação — o que você faz com ela é sua decisão",
  ];

  return (
    <section
      style={{
        background: "#0A0A0A",
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
                border: "1px solid #2A2A2A",
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
                  color: "#5A5A50",
                  marginBottom: 28,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(90,90,80,0.4)",
                }}
              >
                O Kalam NÃO É
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
                      <X size={11} color="#5A5A50" />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        color: "#5A5A50",
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
                O Kalam É
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
                        color: "#8A8A7A",
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

/* ─────────────────────────── Numbers ─────────────────────────── */
function NumbersSection() {
  const stats = [
    { value: 1400, suffix: "", label: "anos de documentação", sublabel: "preservados sem alteração" },
    { value: 114, suffix: "", label: "suratas no Alcorão", sublabel: "capítulos do documento original" },
    { value: 25, suffix: "", label: "profetas em comum", sublabel: "com a Bíblia" },
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
            EM NÚMEROS
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "#2A2A2A",
            border: "1px solid #2A2A2A",
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
                    color: "#F5F5F0",
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
                    color: "#5A5A50",
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
        background: "#0A0A0A",
        padding: "clamp(72px, 10vw, 112px) 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal delay={0}>
          <div
            style={{
              background: "#111111",
              borderLeft: "3px solid #C9A84C",
              borderTop: "1px solid #2A2A2A",
              borderRight: "1px solid #2A2A2A",
              borderBottom: "1px solid #2A2A2A",
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
                color: "#F5F5F0",
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
                color: "#8A8A7A",
                lineHeight: 1.9,
                maxWidth: 720,
              }}
            >
              Porque{" "}
              <span style={{ color: "#F5F5F0" }}>
                1.8 bilhão de pessoas no mundo
              </span>{" "}
              seguem uma tradição que a maioria dos brasileiros nunca viu de
              dentro. Porque os mesmos profetas que o cristão brasileiro
              reverencia —{" "}
              <span style={{ color: "#C9A84C" }}>
                Abraão, Moisés, Jesus
              </span>{" "}
              — são profetas do Islam também. Porque há perguntas difíceis que
              merecem respostas honestas, não respostas fáceis. Porque{" "}
              <span style={{ color: "#F5F5F0", fontStyle: "italic" }}>
                "conhecer" não é "concordar"
              </span>
              . E porque você tem o direito de saber.
            </p>
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
        borderTop: "1px solid #2A2A2A",
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
            COMUNIDADE
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4.5vw, 40px)",
              fontWeight: 700,
              color: "#F5F5F0",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Faça parte
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "#8A8A7A",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Receba novos episódios, estudos e reflexões direto no WhatsApp ou
            email.
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
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #C9A84C, #D4B96A)",
                color: "#0A0A0A",
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
              href="#"
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
              color: "#5A5A50",
              letterSpacing: "0.5px",
            }}
          >
            Zero spam. Você sai quando quiser.
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
        background: "#0A0A0A",
        borderTop: "1px solid #2A2A2A",
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
              color: "#F5F5F0",
              marginBottom: 12,
            }}
          >
            Iqra — "Leia"
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "#5A5A50",
              letterSpacing: "0.5px",
            }}
          >
            A primeira palavra revelada ao profeta Muhammad. Há 1.400 anos.
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
      <IsIsNotSection />
      <NumbersSection />
      <PhilosophySection />
      <CommunitySection />
      <FooterQuoteSection />
    </>
  );
}
