import { useState } from "react";

// ─── 1. HadithCard ────────────────────────────────────────────────────────────
// Displays a hadith with arabic text, numbered badge, category color,
// and an expandable section for story, lesson, and connection.
export function HadithCard({ hadith }) {
  const [open, setOpen] = useState(false);

  const {
    number = 1,
    arabic = "",
    transliteration = "",
    translation = "",
    title = "",
    story = "",
    lesson = "",
    connection = "",
    category = "geral",
    categoryColor = "#B8922A",
  } = hadith || {};

  const formattedNum = String(number).padStart(2, "0");
  const hasMore = !!(story || lesson || connection);

  return (
    <div
      className={`relative overflow-hidden rounded-xl mb-4 bg-surface border transition-all duration-[250ms] ${open ? "border-gold/22 shadow-[var(--shadow-hover)]" : "border-border shadow-[var(--shadow-card)]"}`}
    >
      {/* Top accent line — keep inline style for dynamic categoryColor */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${categoryColor}, transparent)`,
          opacity: open ? 0.65 : 0.22,
          transition: "opacity 0.25s",
        }}
      />

      <div className="px-7 pt-7 pb-6">
        {/* Header row: number badge + category */}
        <div className="flex items-center justify-between mb-5">
          {/* Number badge — keep inline style for dynamic categoryColor */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: `1px solid ${categoryColor}33`,
              background: `${categoryColor}10`,
              color: categoryColor,
            }}
            className="flex items-center justify-center font-serif text-lg font-medium flex-shrink-0"
          >
            {formattedNum}
          </div>

          {/* Category badge — keep inline style for dynamic categoryColor */}
          <div
            style={{
              color: categoryColor,
              background: `${categoryColor}14`,
              border: `1px solid ${categoryColor}28`,
            }}
            className="text-[10px] tracking-[1.5px] uppercase rounded-full px-3 py-[3px]"
          >
            {category}
          </div>
        </div>

        {/* Arabic text — large */}
        {arabic && (
          <div className="font-arabic text-2xl text-gold opacity-85 text-right rtl leading-[2] mb-4 px-4 py-3 bg-gold/[0.04] rounded-[5px] border-r-[3px] border-gold/30">
            {arabic}
          </div>
        )}

        {/* Title */}
        {title && (
          <div className="font-serif text-xl font-medium text-ink mb-2.5 tracking-[0.3px]">
            {title}
          </div>
        )}

        {/* Transliteration */}
        {transliteration && (
          <div className="font-serif text-[15px] italic text-gold-muted mb-2 leading-[1.6]">
            {transliteration}
          </div>
        )}

        {/* Translation */}
        {translation && (
          <div className={`text-base leading-[1.75] text-ink-soft font-reading ${hasMore ? "mb-3" : ""}`}>
            {translation}
          </div>
        )}

        {/* Expand toggle */}
        {hasMore && (
          <button
            onClick={() => setOpen(!open)}
            className={`mt-3 flex items-center gap-1.5 font-reading text-xs tracking-[1.2px] uppercase p-0 bg-transparent border-none cursor-pointer transition-colors ${open ? "text-gold" : "text-gold-muted"}`}
          >
            <span
              style={{ border: `1px solid ${open ? "#B8922A" : "rgba(200,169,81,0.35)"}` }}
              className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-[11px] transition-colors"
            >
              {open ? "−" : "+"}
            </span>
            {open ? "Ocultar detalhes" : "Ver contexto e lição"}
          </button>
        )}

        {/* Expanded content */}
        {open && (
          <div className="mt-5 pt-5 border-t border-gold/10 flex flex-col gap-4">
            {story && (
              <div>
                <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                  📖 Contexto
                </div>
                <div className="text-[15px] leading-[1.8] text-ink-muted font-reading">
                  {story}
                </div>
              </div>
            )}

            {lesson && (
              <div className="bg-gold/5 border border-gold/14 rounded-[5px] px-[18px] py-3.5">
                <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                  ✦ Lição
                </div>
                <div className="text-[15px] leading-[1.7] text-ink-soft font-reading">
                  {lesson}
                </div>
              </div>
            )}

            {connection && (
              <div className="text-sm italic text-gold-muted font-serif pl-3.5 border-l-2 border-gold/25 leading-[1.65]">
                {connection}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 2. SurpriseFactCard ──────────────────────────────────────────────────────
// Surprising Islamic fact with gold border-left, large number, category badge,
// and optional Bible connection.
const FACT_CATEGORY_CONFIG = {
  historia: { icon: "🏛", label: "História", color: "#4A6FA5" },
  ciencia: { icon: "🔭", label: "Ciência", color: "#2D6B4F" },
  quran: { icon: "📖", label: "Alcorão", color: "#B8922A" },
  profeta: { icon: "☾", label: "Profeta", color: "#7B68EE" },
  lingua: { icon: "🔤", label: "Língua", color: "#A0522D" },
  arqueologia: { icon: "⛏", label: "Arqueologia", color: "#8B7355" },
  default: { icon: "✦", label: "Fato", color: "#B8922A" },
};

export function SurpriseFactCard({ fact }) {
  const [open, setOpen] = useState(false);

  const {
    number = 1,
    fact: factText = "",
    detail = "",
    category = "default",
    bibleConnection = "",
  } = fact || {};

  const cfg = FACT_CATEGORY_CONFIG[category] || FACT_CATEGORY_CONFIG.default;
  const formattedNum = String(number).padStart(2, "0");

  return (
    <div
      style={{
        border: `1px solid ${open ? cfg.color + "40" : "rgba(221,208,184,1)"}`,
        borderLeft: `4px solid ${cfg.color}`,
        boxShadow: open ? `0 4px 24px rgba(0,0,0,0.1), 0 0 12px ${cfg.color}14` : "var(--shadow-card)",
      }}
      className="bg-surface rounded-xl px-6 py-5 mb-3.5 transition-all duration-[250ms]"
    >
      {/* Header row */}
      <div className="flex gap-4 items-start">
        {/* Large number */}
        <div
          style={{ color: `${cfg.color}22` }}
          className="font-serif text-5xl font-light leading-none flex-shrink-0 w-12 select-none"
        >
          {formattedNum}
        </div>

        <div className="flex-1 min-w-0">
          {/* Category badge */}
          <div
            style={{
              color: cfg.color,
              background: `${cfg.color}14`,
              border: `1px solid ${cfg.color}28`,
            }}
            className="inline-flex items-center gap-1.5 text-[10px] tracking-[1.5px] uppercase rounded-full px-2.5 py-0.5 mb-2.5"
          >
            <span className="text-xs">{cfg.icon}</span>
            {cfg.label}
          </div>

          {/* Fact text */}
          <div className="font-serif text-lg font-medium text-ink leading-[1.55] mb-2.5">
            {factText}
          </div>

          {/* Toggle */}
          {(detail || bibleConnection) && (
            <button
              onClick={() => setOpen(!open)}
              style={{ color: open ? cfg.color : "rgba(200,169,81,0.42)" }}
              className="bg-transparent border-none cursor-pointer font-reading text-xs tracking-[0.8px] p-0 transition-colors"
            >
              {open ? "▲ Ocultar" : "▼ Saiba mais"}
            </button>
          )}
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div
          style={{ borderTop: `1px solid ${cfg.color}18` }}
          className="mt-[18px] pt-[18px] flex flex-col gap-3.5"
        >
          {detail && (
            <div className="text-[15px] leading-[1.78] text-ink-muted font-reading">
              {detail}
            </div>
          )}

          {bibleConnection && (
            <div className="bg-[rgba(74,111,165,0.08)] border border-[rgba(74,111,165,0.2)] rounded-[5px] px-4 py-3">
              <div className="text-[10px] tracking-[1.8px] uppercase text-[#4A6FA5] mb-1.5">
                𝕿 Conexão Bíblica
              </div>
              <div className="text-sm leading-[1.7] text-ink-muted font-serif italic">
                {bibleConnection}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 3. ManuscriptCard ────────────────────────────────────────────────────────
// Historical manuscript card with date badge, preservation indicator,
// discovery story, and significance.
const PRESERVATION_LEVELS = {
  excelente: { label: "Preservação Excelente", color: "#2D6B4F", dot: "●" },
  boa: { label: "Boa Preservação", color: "#4A6FA5", dot: "●" },
  parcial: { label: "Preservação Parcial", color: "#C8A951", dot: "●" },
  fragmentada: { label: "Fragmentada", color: "#A0522D", dot: "●" },
  perdida: { label: "Perdida / Reconstruída", color: "#6B6B6B", dot: "○" },
};

export function ManuscriptCard({ manuscript }) {
  const [open, setOpen] = useState(false);

  const {
    name = "",
    date = "",
    location = "",
    language = "",
    preservation = "boa",
    discoveryStory = "",
    significance = "",
    currentLocation = "",
    icon = "📜",
  } = manuscript || {};

  const pres = PRESERVATION_LEVELS[preservation] || PRESERVATION_LEVELS.boa;

  return (
    <div
      className={`bg-surface rounded-xl mb-4 overflow-hidden transition-all duration-[250ms] ${open ? "border border-gold/20 shadow-[var(--shadow-hover)]" : "border border-border shadow-[var(--shadow-card)]"}`}
    >
      {/* Main header */}
      <div className="px-6 py-[22px]">
        <div className="flex gap-4 items-start mb-3.5">
          {/* Icon */}
          <div className="text-[28px] flex-shrink-0 leading-none mt-0.5">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Top row: date badge + preservation */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              {/* Date badge */}
              {date && (
                <div className="text-[10px] tracking-[1.5px] uppercase text-gold bg-gold/10 border border-gold/22 rounded-full px-2.5 py-0.5">
                  {date}
                </div>
              )}

              {/* Preservation indicator */}
              <div
                style={{ color: pres.color }}
                className="flex items-center gap-1.5 text-[11px] tracking-[0.5px]"
              >
                <span className="text-[10px]">{pres.dot}</span>
                {pres.label}
              </div>
            </div>

            {/* Name */}
            <div className="font-serif text-[21px] font-medium text-ink mb-1.5 leading-[1.3]">
              {name}
            </div>

            {/* Meta row: location + language */}
            <div className="flex gap-4 flex-wrap">
              {location && (
                <div className="text-[13px] text-ink-muted font-reading">
                  📍 {location}
                </div>
              )}
              {language && (
                <div className="text-[13px] text-ink-muted font-reading">
                  🗣 {language}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toggle */}
        {(discoveryStory || significance || currentLocation) && (
          <button
            onClick={() => setOpen(!open)}
            className={`bg-transparent border-none cursor-pointer font-reading text-xs tracking-[1px] uppercase p-0 transition-colors ${open ? "text-gold" : "text-gold-muted"}`}
          >
            {open ? "▲ Ocultar" : "▼ Ver história e importância"}
          </button>
        )}
      </div>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-gold/[0.07] px-6 pt-5 pb-[22px] flex flex-col gap-4">
          {discoveryStory && (
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                🔍 História da Descoberta
              </div>
              <div className="text-[15px] leading-[1.78] text-ink-muted font-reading">
                {discoveryStory}
              </div>
            </div>
          )}

          {significance && (
            <div className="bg-gold/5 border border-gold/14 rounded-[5px] px-[18px] py-3.5">
              <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                ✦ Importância
              </div>
              <div className="text-[15px] leading-[1.7] text-ink-soft font-reading">
                {significance}
              </div>
            </div>
          )}

          {currentLocation && (
            <div className="text-[13px] text-ink-muted font-reading italic">
              📍 Localização atual: {currentLocation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 4. RecognitionStoryCard ──────────────────────────────────────────────────
// Conversion story card with type badge, name, highlighted quote,
// story preview + expand button. Different style for historical vs composed.
const STORY_TYPE_CONFIG = {
  historico: { label: "Histórico", color: "#4A6FA5", icon: "◎", badge: "#4A6FA5" },
  contemporaneo: { label: "Contemporâneo", color: "#2D6B4F", icon: "◐", badge: "#2D6B4F" },
  intelectual: { label: "Intelectual", color: "#7B68EE", icon: "◇", badge: "#7B68EE" },
  espiritual: { label: "Espiritual", color: "#B8922A", icon: "☾", badge: "#B8922A" },
  default: { label: "Testemunho", color: "#B8922A", icon: "❋", badge: "#B8922A" },
};

export function RecognitionStoryCard({ story }) {
  const [expanded, setExpanded] = useState(false);

  const {
    name = "",
    origin = "",
    quote = "",
    preview = "",
    fullStory = "",
    type = "default",
    year = "",
  } = story || {};

  const cfg = STORY_TYPE_CONFIG[type] || STORY_TYPE_CONFIG.default;
  const isHistorical = type === "historico";

  return (
    <div
      style={{
        border: `1px solid ${expanded ? cfg.color + "33" : "rgba(221,208,184,1)"}`,
        boxShadow: expanded
          ? `0 4px 28px rgba(0,0,0,0.1), 0 0 14px ${cfg.color}0E`
          : "var(--shadow-card)",
      }}
      className="bg-surface rounded-xl overflow-hidden mb-5 transition-all duration-[250ms]"
    >
      {/* Top stripe for historical */}
      {isHistorical && (
        <div
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${cfg.color}99, transparent)`,
          }}
        />
      )}

      {/* Quote block — always visible */}
      {quote && (
        <div
          style={{
            background: `linear-gradient(135deg, ${cfg.color}0C 0%, ${cfg.color}04 100%)`,
            borderLeft: `3px solid ${cfg.color}AA`,
          }}
          className="px-7 pt-[26px] pb-[22px] relative"
        >
          {/* Decorative quotation mark */}
          <div
            style={{
              position: "absolute",
              top: -2,
              left: 18,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 60,
              color: cfg.color,
              opacity: 0.14,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <p className="font-serif text-[19px] italic text-ink leading-[1.65] mb-3.5">
            {quote}
          </p>

          {/* Name + badges row */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              {name && (
                <div
                  style={{ color: cfg.color }}
                  className="font-reading text-[13px] tracking-[1.5px] uppercase opacity-90"
                >
                  — {name}
                  {origin && (
                    <span className="opacity-60 italic tracking-[0.5px] normal-case ml-1.5">
                      ({origin})
                    </span>
                  )}
                </div>
              )}
              {year && (
                <div className="text-[11px] text-gold-muted mt-0.5 font-reading">
                  {year}
                </div>
              )}
            </div>

            {/* Type badge */}
            <div
              style={{
                color: cfg.color,
                background: `${cfg.color}16`,
                border: `1px solid ${cfg.color}28`,
              }}
              className="inline-flex items-center gap-1.5 text-[10px] tracking-[1.5px] uppercase rounded-full px-2.5 py-[3px]"
            >
              <span className="text-[11px]">{cfg.icon}</span>
              {cfg.label}
            </div>
          </div>
        </div>
      )}

      {/* Preview + expand */}
      {(preview || fullStory) && (
        <div className="px-6 pt-[18px] pb-5">
          {/* Preview text */}
          {preview && !expanded && (
            <div className="text-[15px] leading-[1.75] text-ink-muted font-reading mb-3.5">
              {preview}
            </div>
          )}

          {/* Full story */}
          {expanded && fullStory && (
            <div className="text-[15px] leading-[1.78] text-ink-soft font-reading mb-3.5">
              {fullStory}
            </div>
          )}

          {/* Expand button */}
          {fullStory && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ color: expanded ? cfg.color : "rgba(200,169,81,0.55)" }}
              className="bg-transparent border-none cursor-pointer font-reading text-xs tracking-[1px] uppercase p-0 transition-colors"
            >
              {expanded ? "▲ Mostrar menos" : "▼ Ler história completa"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 5. BridgeCard ────────────────────────────────────────────────────────────
// Common ground between Christianity and Islam. Split card with Christian text
// and Islamic text visually, center "bridge" section.
const CONNECTION_TYPE_CONFIG = {
  confirma: { label: "Confirma", color: "#2D6B4F" },
  corrige: { label: "Corrige", color: "#A0522D" },
  expande: { label: "Expande", color: "#4A6FA5" },
  paralelo: { label: "Paralelo", color: "#7B68EE" },
  complementa: { label: "Complementa", color: "#B8922A" },
  default: { label: "Conexão", color: "#B8922A" },
};

export function BridgeCard({ bridge }) {
  const [showBridge, setShowBridge] = useState(false);

  const {
    theme = "",
    christianText = "",
    christianRef = "",
    islamicText = "",
    islamicRef = "",
    islamicArabic = "",
    bridgeText = "",
    connectionType = "default",
  } = bridge || {};

  const cfg =
    CONNECTION_TYPE_CONFIG[connectionType] || CONNECTION_TYPE_CONFIG.default;

  return (
    <div
      style={{
        border: `1px solid ${showBridge ? cfg.color + "33" : "rgba(221,208,184,1)"}`,
      }}
      className="bg-surface rounded-xl mb-5 overflow-hidden shadow-[var(--shadow-card)] transition-colors duration-[250ms]"
    >
      {/* Theme header */}
      <div className="px-[22px] py-3.5 border-b border-gold/[0.07] flex items-center justify-between gap-3 flex-wrap">
        <div className="font-serif text-[17px] font-medium text-ink">
          {theme}
        </div>
        <div
          style={{
            color: cfg.color,
            background: `${cfg.color}16`,
            border: `1px solid ${cfg.color}30`,
          }}
          className="text-[10px] tracking-[1.5px] uppercase rounded-full px-3 py-[3px]"
        >
          {cfg.label}
        </div>
      </div>

      {/* Split: Christian left | Islamic right */}
      <div className="grid grid-cols-2">
        {/* Christian side */}
        <div className="px-5 py-5 border-r border-gold/[0.08]">
          <div className="text-[10px] tracking-[2px] uppercase text-[#4A6FA5] mb-2.5 flex items-center gap-1.5">
            <span className="text-[13px]">✝</span> Cristão
          </div>
          {christianRef && (
            <div className="text-xs text-[rgba(74,111,165,0.7)] mb-2 font-reading tracking-[0.5px]">
              {christianRef}
            </div>
          )}
          <p className="font-serif text-[15px] italic text-ink-muted leading-[1.7] m-0">
            &ldquo;{christianText}&rdquo;
          </p>
        </div>

        {/* Islamic side */}
        <div className="px-5 py-5">
          <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2.5 flex items-center gap-1.5">
            <span className="text-[13px]">☾</span> Islâmico
          </div>
          {islamicRef && (
            <div className="text-xs text-gold/65 mb-2 font-reading tracking-[0.5px]">
              {islamicRef}
            </div>
          )}
          {islamicArabic && (
            <div className="font-arabic text-base text-gold opacity-80 text-right rtl leading-[1.9] mb-2">
              {islamicArabic}
            </div>
          )}
          <p className="font-serif text-[15px] italic text-ink-soft leading-[1.7] m-0">
            &ldquo;{islamicText}&rdquo;
          </p>
        </div>
      </div>

      {/* Bridge center section */}
      {bridgeText && (
        <div className="border-t border-gold/[0.07]">
          <button
            onClick={() => setShowBridge(!showBridge)}
            style={{
              background: showBridge ? `${cfg.color}08` : "transparent",
              color: showBridge ? cfg.color : "rgba(200,169,81,0.55)",
            }}
            className="w-full border-none cursor-pointer px-[22px] py-[11px] text-center font-reading text-[11px] tracking-[1.2px] uppercase transition-colors duration-[200ms]"
          >
            {showBridge ? "▲ Ocultar ponte" : "▼ Ver ponto de encontro"}
          </button>

          {showBridge && (
            <div className="px-[22px] pt-1 pb-[18px] flex gap-3 items-start">
              <div
                style={{
                  background: `linear-gradient(180deg, ${cfg.color}60, transparent)`,
                }}
                className="w-0.5 self-stretch rounded-sm flex-shrink-0"
              />
              <div className="text-[15px] leading-[1.75] text-ink-soft font-reading">
                {bridgeText}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 6. SystemProtocolCard ────────────────────────────────────────────────────
// Islam as OS protocol. Shows icon (emoji), name, description, daily impact.
export function SystemProtocolCard({ protocol }) {
  const [open, setOpen] = useState(false);

  const {
    icon = "⚙",
    name = "",
    description = "",
    dailyImpact = "",
    systemAnalogy = "",
    frequency = "",
  } = protocol || {};

  return (
    <div
      className={`bg-surface rounded-xl mb-3 overflow-hidden transition-all duration-[250ms] ${open ? "border border-gold/20 shadow-[var(--shadow-hover)]" : "border border-border shadow-[var(--shadow-card)]"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ background: open ? "rgba(184,146,42,0.03)" : "transparent" }}
        className="w-full border-none cursor-pointer px-[22px] py-[18px] flex items-center gap-4 text-left transition-colors duration-[200ms]"
      >
        {/* Icon */}
        <div
          className={`w-[42px] h-[42px] flex-shrink-0 rounded-full flex items-center justify-center text-xl transition-all duration-[200ms] ${open ? "bg-gold/12 border border-gold/30" : "bg-gold/[0.06] border border-gold/12"}`}
        >
          {icon}
        </div>

        {/* Name + analogy */}
        <div className="flex-1 min-w-0">
          <div
            className={`font-serif text-xl font-medium mb-[3px] transition-colors duration-[200ms] ${open ? "text-ink" : "text-ink/85"}`}
          >
            {name}
          </div>
          {systemAnalogy && (
            <div
              className={`text-xs tracking-[0.4px] font-reading transition-colors duration-[200ms] ${open ? "text-gold" : "text-gold/45"}`}
            >
              {systemAnalogy}
            </div>
          )}
        </div>

        {/* Frequency badge */}
        {frequency && (
          <div className="text-[10px] tracking-[1px] uppercase text-gold/55 bg-gold/[0.07] rounded-full px-2 py-0.5 flex-shrink-0">
            {frequency}
          </div>
        )}

        {/* Chevron */}
        <span
          className={`text-[11px] transition-all duration-[200ms] inline-block flex-shrink-0 ${open ? "text-gold rotate-180" : "text-gold/32 rotate-0"}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="border-t border-gold/[0.07] px-[22px] pt-[18px] pb-[22px] flex flex-col gap-3.5">
          {description && (
            <div className="text-[15px] leading-[1.78] text-ink-muted font-reading">
              {description}
            </div>
          )}

          {dailyImpact && (
            <div className="bg-gold/5 border border-gold/14 rounded-[5px] px-4 py-3 flex gap-2.5 items-start">
              <span className="text-sm flex-shrink-0 mt-[1px]">⚡</span>
              <div>
                <div className="text-[10px] tracking-[2px] uppercase text-gold mb-[5px]">
                  Impacto Diário
                </div>
                <div className="text-sm leading-[1.65] text-ink-soft font-reading">
                  {dailyImpact}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 7. HardQuestionCard ──────────────────────────────────────────────────────
// For difficult questions. Shows question, direct answer, context.
// Expandable for full answer. No evasion — direct and honest.
export function HardQuestionCard({ question }) {
  const [open, setOpen] = useState(false);

  const {
    q = "",
    directAnswer = "",
    context = "",
    fullAnswer = "",
    difficulty = "media",
    tags = [],
  } = question || {};

  const difficultyConfig = {
    alta: { label: "Pergunta Difícil", color: "#A0522D" },
    media: { label: "Pergunta Comum", color: "#4A6FA5" },
    filosofica: { label: "Questão Filosófica", color: "#7B68EE" },
  };
  const diff = difficultyConfig[difficulty] || difficultyConfig.media;

  return (
    <div
      className={`bg-surface rounded-xl mb-4 overflow-hidden transition-all duration-[250ms] ${open ? "border border-gold/20 shadow-[var(--shadow-hover)]" : "border border-border shadow-[var(--shadow-card)]"}`}
    >
      {/* Question header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: open ? "rgba(184,146,42,0.03)" : "transparent" }}
        className="w-full border-none cursor-pointer px-[22px] py-5 text-left flex gap-3.5 items-start transition-colors duration-[200ms]"
      >
        {/* Question mark icon */}
        <div
          style={{
            background: `${diff.color}14`,
            border: `1px solid ${diff.color}30`,
            color: diff.color,
          }}
          className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center text-base mt-0.5"
        >
          ?
        </div>

        <div className="flex-1 min-w-0">
          {/* Difficulty badge */}
          <div
            style={{ color: diff.color }}
            className="text-[10px] tracking-[1.5px] uppercase mb-2"
          >
            {diff.label}
          </div>

          {/* The question */}
          <div
            className={`font-serif text-[19px] font-medium text-ink leading-[1.45] ${directAnswer && !open ? "mb-2.5" : ""}`}
          >
            {q}
          </div>

          {/* Direct answer preview — shown when collapsed */}
          {!open && directAnswer && (
            <div className="text-sm leading-[1.65] text-ink-muted font-reading mt-2">
              {directAnswer.length > 120
                ? directAnswer.slice(0, 120) + "…"
                : directAnswer}
            </div>
          )}
        </div>

        <span
          className={`text-[11px] transition-all duration-[200ms] inline-block flex-shrink-0 mt-1.5 ${open ? "text-gold rotate-180" : "text-gold/32 rotate-0"}`}
        >
          ▼
        </span>
      </button>

      {/* Expanded answer */}
      {open && (
        <div className="border-t border-gold/[0.07] px-[22px] pt-5 pb-[22px] flex flex-col gap-4">
          {/* Direct answer */}
          {directAnswer && (
            <div className="bg-gold/[0.06] border border-gold/16 rounded-[5px] px-[18px] py-3.5">
              <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                ▶ Resposta Direta
              </div>
              <div className="text-base leading-[1.75] text-ink font-reading font-medium">
                {directAnswer}
              </div>
            </div>
          )}

          {/* Context */}
          {context && (
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">
                📌 Contexto
              </div>
              <div className="text-[15px] leading-[1.78] text-ink-muted font-reading">
                {context}
              </div>
            </div>
          )}

          {/* Full answer */}
          {fullAnswer && (
            <div
              className={`text-[15px] leading-[1.78] text-ink-muted font-reading ${context ? "pt-1" : ""}`}
            >
              {fullAnswer}
            </div>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-[0.8px] uppercase text-gold/50 bg-gold/[0.06] border border-gold/14 rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── 8. ProphetCardExpanded ───────────────────────────────────────────────────
// Full prophet story. Arabic name large, era, story in paragraphs,
// Quran ref badge, Bible parallel badge.
export function ProphetCardExpanded({ prophet }) {
  const [activeSection, setActiveSection] = useState(null);

  const {
    name = "",
    arabic = "",
    role = "",
    era = "",
    story = "",
    key = "",
    color = "#B8922A",
    quranRef = "",
    biblePaallel = "",
    bibleParallel = "",
  } = prophet || {};

  const bibleRef = biblePaallel || bibleParallel;

  const sections = [
    { id: "story", label: "História", icon: "◎", content: story },
    { id: "key", label: "Ponto-Chave", icon: "✦", content: key },
  ].filter((s) => s.content);

  const toggle = (id) => setActiveSection(activeSection === id ? null : id);

  return (
    <div className="bg-surface border border-gold/12 rounded-xl overflow-hidden mb-5 shadow-[var(--shadow-card)]">
      {/* Color accent bar */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${color}AA 50%, transparent 100%)`,
        }}
      />

      {/* Header */}
      <div className="px-[26px] pt-[26px] pb-5">
        {/* Arabic name — large */}
        {arabic && (
          <div
            style={{ color, opacity: 0.8 }}
            className="font-arabic text-[42px] text-right rtl leading-[1.6] mb-2.5"
          >
            {arabic}
          </div>
        )}

        {/* Name + era row */}
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1.5">
          <h3 className="font-serif text-[28px] font-medium text-ink tracking-[0.4px] m-0">
            {name}
          </h3>

          {/* Era badge */}
          {era && (
            <div className="text-[10px] tracking-[1.5px] uppercase text-gold bg-gold/10 border border-gold/20 rounded-full px-2.5 py-0.5 flex-shrink-0">
              {era}
            </div>
          )}
        </div>

        {/* Role */}
        {role && (
          <div className="text-[13px] tracking-[1.5px] uppercase text-gold-muted mb-3.5">
            {role}
          </div>
        )}

        {/* Badges row: Quran ref + Bible parallel */}
        {(quranRef || bibleRef) && (
          <div className="flex flex-wrap gap-2 mt-1">
            {quranRef && (
              <div className="inline-flex items-center gap-1.5 text-[11px] text-gold bg-gold/10 border border-gold/22 rounded-full px-2.5 py-[3px]">
                <span className="text-xs">𝕼</span>
                {quranRef}
              </div>
            )}
            {bibleRef && (
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#4A6FA5] bg-[rgba(74,111,165,0.1)] border border-[rgba(74,111,165,0.22)] rounded-full px-2.5 py-[3px]">
                <span className="text-xs">𝕿</span>
                {bibleRef}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Accordion sections */}
      {sections.map((s) => {
        const isOpen = activeSection === s.id;
        return (
          <div key={s.id} className="border-t border-gold/[0.07]">
            <button
              onClick={() => toggle(s.id)}
              style={{ background: isOpen ? "rgba(184,146,42,0.04)" : "transparent" }}
              className="w-full border-none cursor-pointer px-[26px] py-3.5 flex items-center gap-2.5 text-left transition-colors duration-[200ms]"
            >
              <span
                style={{ color: isOpen ? color : "rgba(200,169,81,0.55)" }}
                className="text-sm flex-shrink-0 w-4 transition-colors duration-[200ms]"
              >
                {s.icon}
              </span>
              <span
                className={`font-reading text-[13px] tracking-[1px] uppercase flex-1 transition-colors duration-[200ms] ${isOpen ? "text-gold" : "text-ink/50"}`}
              >
                {s.label}
              </span>
              <span
                className={`text-[11px] transition-all duration-[200ms] inline-block ${isOpen ? "text-gold rotate-180" : "text-gold/32 rotate-0"}`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-[26px] pb-[22px] pl-[52px] pt-1 text-base leading-[1.8] text-ink-soft font-reading">
                {s.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── 9. ArabicDisplay ─────────────────────────────────────────────────────────
// Displays Arabic text beautifully with transliteration and translation.
// Props: arabic, transliteration, translation, size ('sm'|'md'|'lg').
// All three stacked with proper styling.
const ARABIC_SIZE_MAP = {
  sm: { arabic: 22, transliteration: 14, translation: 14 },
  md: { arabic: 32, transliteration: 15, translation: 15 },
  lg: { arabic: 46, transliteration: 16, translation: 16 },
};

export function ArabicDisplay({ arabic, transliteration, translation, size = "md" }) {
  const sizes = ARABIC_SIZE_MAP[size] || ARABIC_SIZE_MAP.md;
  const paddingClass = size === "lg" ? "px-6 py-7" : size === "md" ? "px-5 py-5" : "px-4 py-3.5";

  return (
    <div className={`${paddingClass} bg-gold/[0.04] border border-gold/12 rounded-xl text-center mb-4`}>
      {/* Arabic text */}
      {arabic && (
        <div
          style={{ fontSize: sizes.arabic }}
          className="font-arabic text-gold opacity-90 rtl text-center leading-[2] mb-3"
        >
          {arabic}
        </div>
      )}

      {/* Divider */}
      {arabic && (transliteration || translation) && (
        <div className="w-10 h-px bg-gold/20 mx-auto mb-3" />
      )}

      {/* Transliteration */}
      {transliteration && (
        <div
          style={{ fontSize: sizes.transliteration }}
          className={`font-serif italic text-gold-muted leading-[1.6] tracking-[0.5px] ${translation ? "mb-2" : ""}`}
        >
          {transliteration}
        </div>
      )}

      {/* Translation */}
      {translation && (
        <div
          style={{ fontSize: sizes.translation }}
          className="font-reading text-ink-muted leading-[1.65] tracking-[0.3px]"
        >
          {translation}
        </div>
      )}
    </div>
  );
}

// ─── 10. SectionHeader ────────────────────────────────────────────────────────
// Consistent section header. Props: arabic, title, subtitle.
// Arabic label small above, title large, subtitle muted.
export function SectionHeader({ arabic, title, subtitle }) {
  return (
    <div className="text-center mb-[52px] px-4">
      {/* Arabic label — small above */}
      {arabic && (
        <div className="font-arabic text-[32px] text-gold opacity-60 leading-[1.7] mb-3.5">
          {arabic}
        </div>
      )}

      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-2.5 mb-5">
        <div className="w-1 h-1 rounded-full bg-gold/30" />
        <div
          style={{ background: `linear-gradient(90deg, transparent, #B8922A, transparent)` }}
          className="w-14 h-px"
        />
        <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-50" />
        <div
          style={{ background: `linear-gradient(90deg, #B8922A, transparent)` }}
          className="w-14 h-px"
        />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </div>

      {/* Title — large */}
      {title && (
        <h2 className="font-serif text-[34px] font-light text-ink tracking-[2px] m-0 mb-3.5 leading-[1.3]">
          {title}
        </h2>
      )}

      {/* Subtitle — muted */}
      {subtitle && (
        <p className="font-reading text-[15px] text-ink-muted leading-[1.65] m-0 max-w-[520px] mx-auto tracking-[0.3px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
