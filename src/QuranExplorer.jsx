import { useState, useEffect, useRef, useCallback } from "react";
import { crossRefs } from "./data/cross-refs.js";

// Feature 8: Famous surahs for quick access
const FAMOUS = [
  { n: 1,   label: "Al-Fatiha",  note: "A Abertura" },
  { n: 2,   label: "Al-Baqarah", note: "A Vaca" },
  { n: 3,   label: "Âl-'Imran",  note: "Família de Imran" },
  { n: 12,  label: "Yusuf",      note: "A Mais Bela História" },
  { n: 18,  label: "Al-Kahf",    note: "A Caverna (sexta-feira)" },
  { n: 19,  label: "Maryam",     note: "Maria" },
  { n: 36,  label: "Yasin",      note: "Coração do Alcorão" },
  { n: 55,  label: "Ar-Rahman",  note: "O Misericordioso" },
  { n: 67,  label: "Al-Mulk",    note: "O Domínio" },
  { n: 112, label: "Al-Ikhlas",  note: "A Pureza (Tawhid)" },
  { n: 113, label: "Al-Falaq",   note: "O Alvorecer" },
  { n: 114, label: "An-Nas",     note: "A Humanidade" },
];

// Feature 1+2: Bookmark helpers (localStorage)
const BK_KEY = "quran-bookmarks-v2";
const RV_KEY = "quran-recently-viewed";
function loadBk() { try { return JSON.parse(localStorage.getItem(BK_KEY) || "[]"); } catch { return []; } }
function saveBk(b) { localStorage.setItem(BK_KEY, JSON.stringify(b)); }
function loadRecent() { try { return JSON.parse(localStorage.getItem(RV_KEY) || "[]"); } catch { return []; } }
function saveRecent(list) { localStorage.setItem(RV_KEY, JSON.stringify(list.slice(0, 5))); }

// Feature 5: Audio URL (Alafasy from Quran.com CDN)
function mkAudio(key) {
  const [s, a] = key.split(":").map(Number);
  return `https://verses.quran.com/Alafasy/mp3/${String(s).padStart(3, "0")}${String(a).padStart(3, "0")}.mp3`;
}

// Connection colors for cross-references (light theme)
const connColors = {
  confirms:  { bg: "rgba(45,107,79,0.1)",   border: "#2D6B4F", label: "Confirma" },
  corrects:  { bg: "rgba(160,82,45,0.1)",   border: "#A0522D", label: "Corrige" },
  expands:   { bg: "rgba(74,111,165,0.1)",  border: "#4A6FA5", label: "Expande" },
  parallels: { bg: "rgba(184,146,42,0.08)", border: "#B8922A", label: "Paralelo" },
};

function CrossRefCard({ r }) {
  const s = connColors[r.connection_type] || connColors.parallels;
  return (
    <div
      style={{ background: s.bg, borderLeft: `3px solid ${s.border}` }}
      className="my-2.5 px-[18px] py-3.5"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          style={{ color: s.border, border: `1px solid ${s.border}` }}
          className="text-[9px] font-bold tracking-[2px] uppercase px-1.5 py-0.5"
        >
          {s.label}
        </span>
        <span className="text-gold text-[13px] font-serif tracking-[1px]">
          {r.book} {r.chapter}:{r.verse}
        </span>
      </div>
      <p className="text-ink-soft text-[15px] italic leading-[1.7] mb-2 font-serif">
        &ldquo;{r.text}&rdquo;
      </p>
      <p className="text-ink-muted text-[13px] leading-[1.6] font-reading">
        {r.note}
      </p>
    </div>
  );
}

// Feature 5: Audio hook with state management
function useAudio(url) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggle = useCallback(() => {
    if (!audioRef.current) {
      const a = new Audio(url);
      a.onloadstart = () => setLoading(true);
      a.oncanplay   = () => setLoading(false);
      a.onended     = () => setPlaying(false);
      a.onerror     = () => { setError(true); setPlaying(false); setLoading(false); };
      audioRef.current = a;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      setError(false);
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setError(true));
    }
  }, [url, playing]);

  useEffect(() => () => { if (audioRef.current) audioRef.current.pause(); }, []);
  return { playing, loading, error, toggle };
}

// Feature 1+3+4+5: VerseCard with bookmarks, copy, audio, font size
function VerseCard({ verse, surahNumber, fontSize, bookmarks, setBookmarks }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const key1 = `${surahNumber}:${verse.number}`;
  const crossRef = crossRefs[key1] || crossRefs[verse.key];
  const isBookmarked = bookmarks.includes(verse.key);
  const { playing, loading, error, toggle: toggleAudio } = useAudio(mkAudio(verse.key));

  // Feature 1: Toggle bookmark
  const toggleBookmark = (e) => {
    e.stopPropagation();
    const next = isBookmarked
      ? bookmarks.filter(k => k !== verse.key)
      : [...bookmarks, verse.key];
    setBookmarks(next);
    saveBk(next);
  };

  // Feature 3: Copy verse to clipboard
  const copyVerse = (e) => {
    e.stopPropagation();
    const text = `${verse.arabic}\n\n"${verse.portuguese}"\n— Alcorão ${verse.key}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{
        border: `1px solid ${crossRef ? "rgba(184,146,42,0.3)" : isBookmarked ? "rgba(184,146,42,0.22)" : "rgba(221,208,184,1)"}`,
        cursor: crossRef ? "pointer" : "default",
      }}
      className={`my-1.5 px-5 py-[18px] transition-all duration-300 rounded-md ${isBookmarked ? "bg-gold/[0.04]" : "bg-surface"}`}
      onClick={() => crossRef && setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start gap-2.5">
        {/* Verse number */}
        <span className="text-gold text-xs font-serif font-semibold tracking-[1px] min-w-8 pt-1 flex-shrink-0">
          {verse.key}
        </span>

        <div className="flex-1 min-w-0">
          {/* Arabic text */}
          <div
            style={{ fontSize: fontSize + 6 }}
            className="font-arabic leading-[2.2] rtl text-right text-ink mb-2.5"
          >
            {verse.arabic}
          </div>
          {/* Portuguese translation */}
          <div
            style={{ fontSize }}
            className="font-reading leading-[1.75] text-ink-muted"
          >
            {verse.portuguese}
          </div>
        </div>

        {/* Action buttons column */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
          {crossRef && (
            <div
              style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
              className="text-gold text-[15px]"
            >
              ✦
            </div>
          )}
          {/* Feature 1: Bookmark button */}
          <button
            onClick={toggleBookmark}
            title={isBookmarked ? "Remover marcador" : "Salvar versículo"}
            className={`bg-transparent border-none cursor-pointer text-base p-0 leading-none transition-colors duration-200 ${isBookmarked ? "text-gold" : "text-gold/25"}`}
          >
            {isBookmarked ? "★" : "☆"}
          </button>
          {/* Feature 3: Copy button */}
          <button
            onClick={copyVerse}
            title="Copiar versículo"
            className={`bg-transparent border-none cursor-pointer text-[13px] p-0 leading-none transition-colors duration-200 ${copied ? "text-[#2D6B4F]" : "text-gold/25"}`}
          >
            {copied ? "✓" : "⧉"}
          </button>
          {/* Feature 5: Audio button */}
          <button
            onClick={(e) => { e.stopPropagation(); toggleAudio(); }}
            title="Ouvir versículo (Alafasy)"
            className={`bg-transparent border-none cursor-pointer text-[13px] p-0 leading-none transition-colors duration-200 ${error ? "text-[rgba(160,82,45,0.4)]" : playing ? "text-gold" : "text-gold/25"}`}
          >
            {loading ? "·" : playing ? "◼" : "▶"}
          </button>
        </div>
      </div>

      {/* Cross-references panel */}
      {crossRef && expanded && (
        <div className="mt-4 pt-4 border-t border-gold/15">
          <div className="text-gold text-[10px] tracking-[3px] uppercase font-reading mb-2.5">
            Referências Cruzadas — {crossRef.topic}
          </div>
          {crossRef.refs.map((r, i) => <CrossRefCard key={i} r={r} />)}
        </div>
      )}
    </div>
  );
}

// Feature 2: Bookmarked verse loader for bookmarks panel
function BookmarkItem({ verseKey }) {
  const [data, setData] = useState(null);
  const surahNum = parseInt(verseKey.split(":")[0]);

  useEffect(() => {
    fetch(`/data/quran/surah-${surahNum}.json`)
      .then(r => r.json())
      .then(verses => {
        const verseNum = parseInt(verseKey.split(":")[1]);
        setData(verses.find(v => v.number === verseNum) || null);
      })
      .catch(() => {});
  }, [verseKey, surahNum]);

  if (!data) return (
    <div className="my-1.5 p-4 bg-surface border border-border rounded-md">
      <span className="text-gold/30 text-xs">Carregando {verseKey}…</span>
    </div>
  );

  return (
    <div className="my-1.5 px-[22px] py-[18px] bg-gold/[0.04] border border-gold/20 rounded-md">
      <div className="text-gold text-[11px] tracking-[2px] mb-2">{verseKey}</div>
      <div className="font-arabic text-xl leading-[2] rtl text-right text-ink mb-2">
        {data.arabic}
      </div>
      <div className="font-reading text-[15px] leading-[1.7] text-ink-muted">
        {data.portuguese}
      </div>
    </div>
  );
}

// Feature 12: Skeleton loading component
function SkeletonVerse() {
  return (
    <div className="my-1.5 p-5 bg-surface border border-border rounded-md">
      <div className="h-3.5 bg-gold/8 rounded w-[90%] ml-auto mb-3.5" />
      <div className="h-3.5 bg-gold/[0.06] rounded w-[70%] ml-auto mb-3.5" />
      <div className="h-3 bg-gold/5 rounded w-[85%] mb-1.5" />
      <div className="h-3 bg-gold/[0.04] rounded w-[60%]" />
    </div>
  );
}

// Button style helper — returns className string for explorer buttons
function btnClass(active = false, danger = false) {
  if (danger) return "bg-transparent border border-border-soft text-[rgba(160,82,45,0.7)] cursor-pointer px-3.5 py-1.5 font-reading text-[13px] tracking-[1px] transition-all duration-200 rounded hover:border-border";
  if (active) return "bg-gold/10 border border-gold/40 text-gold cursor-pointer px-3.5 py-1.5 font-reading text-[13px] tracking-[1px] transition-all duration-200 rounded";
  return "bg-transparent border border-gold/15 text-gold/50 cursor-pointer px-3.5 py-1.5 font-reading text-[13px] tracking-[1px] transition-all duration-200 rounded hover:border-gold/30 hover:text-gold/70";
}

export default function QuranExplorer() {
  const [index, setIndex] = useState([]);
  const [selected, setSelected] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Feature 9: Filter state
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  // Feature 7: Verse search
  const [verseSearch, setVerseSearch] = useState("");
  // Feature 4: Font size
  const [fontSize, setFontSize] = useState(16);
  // Feature 1+2: Bookmarks
  const [bookmarks, setBookmarks] = useState(() => loadBk());
  // Feature 2: Active tab (explorer | bookmarks)
  const [activeTab, setActiveTab] = useState("explorer");
  // Feature 8: Famous surahs panel toggle
  const [showFamous, setShowFamous] = useState(false);
  // Feature 19: Recently viewed
  const [recentlyViewed, setRecentlyViewed] = useState(() => loadRecent());

  useEffect(() => {
    fetch("/data/quran/index.json")
      .then(r => r.json())
      .then(setIndex)
      .catch(() => setIndex([]));
  }, []);

  const selectSurah = async (surah) => {
    if (selected?.number === surah.number) {
      setSelected(null); setVerses([]); return;
    }
    setSelected(surah);
    setVerses([]);
    setLoading(true);
    setError(null);
    setVerseSearch("");
    setActiveTab("explorer");

    // Feature 19: Track recently viewed
    const updated = [surah.number, ...recentlyViewed.filter(n => n !== surah.number)].slice(0, 5);
    setRecentlyViewed(updated);
    saveRecent(updated);

    try {
      const v = await fetch(`/data/quran/surah-${surah.number}.json`).then(r => {
        if (!r.ok) throw new Error();
        return r.json();
      });
      setVerses(v);
    } catch {
      setError("Este surah ainda não está disponível. Execute npm run fetch:quran para baixar.");
    } finally {
      setLoading(false);
    }
  };

  // Feature 11: Prev / Next surah navigation
  const goToPrev = () => {
    if (!selected || selected.number <= 1) return;
    selectSurah(index.find(s => s.number === selected.number - 1));
  };
  const goToNext = () => {
    if (!selected || selected.number >= 114) return;
    selectSurah(index.find(s => s.number === selected.number + 1));
  };

  // Feature 6: Random surah
  const openRandom = () => {
    if (!index.length) return;
    const s = index[Math.floor(Math.random() * index.length)];
    setActiveTab("explorer");
    selectSurah(s);
  };

  // Feature 9: Filter surahs (All / Meccan / Medinan)
  const filtered = index.filter(s => {
    if (filter === "makkah" && s.revelation_place !== "makkah") return false;
    if (filter === "madinah" && s.revelation_place !== "madinah") return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        s.name_simple.toLowerCase().includes(q) ||
        s.translated_name?.toLowerCase().includes(q) ||
        String(s.number).includes(q)
      );
    }
    return true;
  });

  // Feature 7: Filter verses within surah
  const filteredVerses = verseSearch
    ? verses.filter(v =>
        v.portuguese.toLowerCase().includes(verseSearch.toLowerCase()) ||
        v.arabic.includes(verseSearch)
      )
    : verses;

  const withRefs = new Set(Object.keys(crossRefs).map(k => parseInt(k.split(":")[0])));
  const totalRefs = Object.keys(crossRefs).length;

  return (
    <div className="font-reading">

      {/* ── Header ── */}
      <div className="text-center mb-9">
        <div className="font-arabic text-[28px] text-gold opacity-70 mb-1.5">
          القرآن الكريم
        </div>
        <h2 className="font-serif text-[34px] font-light text-ink tracking-[3px]">
          Explorador do Alcorão
        </h2>
        <p className="text-ink-faint text-[13px] mt-2 tracking-[1px]">
          114 Suratas · 6.236 Versículos · Árabe Uthmani · Português Helmi Nasr
        </p>
        <p className="text-gold text-xs mt-1.5">
          <span className="text-sm">✦</span> {totalRefs} versículos com referências cruzadas Torah &amp; Evangelho
        </p>

        {/* Feature 4: Font size + Feature 6: Random + Feature 2: Bookmarks tab */}
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          <button onClick={() => setFontSize(f => Math.max(12, f - 1))} className={btnClass()}>A−</button>
          <span className="text-gold/35 text-[11px]">{fontSize}px</span>
          <button onClick={() => setFontSize(f => Math.min(24, f + 1))} className={btnClass()}>A+</button>

          <div className="w-px h-[18px] bg-gold/15" />

          <button onClick={openRandom} className={btnClass()}>⚡ Surata Aleatória</button>

          {bookmarks.length > 0 && (
            <button onClick={() => setActiveTab(t => t === "bookmarks" ? "explorer" : "bookmarks")} className={btnClass(activeTab === "bookmarks")}>
              ★ {bookmarks.length} Salvos
            </button>
          )}
        </div>
      </div>

      {/* ── Bookmarks Panel (Feature 2) ── */}
      {activeTab === "bookmarks" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gold text-[13px] tracking-[3px] uppercase">
              ★ Versículos Salvos ({bookmarks.length})
            </div>
            <div className="flex gap-2">
              <button onClick={() => { saveBk([]); setBookmarks([]); }} className={btnClass(false, true)}>Limpar tudo</button>
              <button onClick={() => setActiveTab("explorer")} className={btnClass()}>← Explorador</button>
            </div>
          </div>
          {bookmarks.length === 0 ? (
            <div className="text-center py-[60px] px-5 text-ink-faint text-[15px]">
              Nenhum versículo salvo ainda.<br />
              <span className="text-[13px] mt-2 block opacity-70">
                Clique em ☆ em qualquer versículo para salvar.
              </span>
            </div>
          ) : bookmarks.map(key => <BookmarkItem key={key} verseKey={key} />)}
        </div>
      )}

      {/* ── Explorer Panel ── */}
      {activeTab === "explorer" && (
        <>
          {/* Feature 8: Famous surahs quick panel */}
          <div className="mb-3.5">
            <button
              onClick={() => setShowFamous(!showFamous)}
              className={`${btnClass(showFamous)} w-full text-center`}
            >
              {showFamous ? "▲" : "▼"} Suratas Famosas — acesso rápido
            </button>
            {showFamous && (
              <div className="grid gap-1.5 mt-2" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(155px,1fr))" }}>
                {FAMOUS.map(f => {
                  const meta = index.find(s => s.number === f.n);
                  return (
                    <button
                      key={f.n}
                      onClick={() => { if (meta) { selectSurah(meta); setShowFamous(false); } }}
                      className={`px-3 py-2.5 text-left bg-surface text-ink cursor-pointer transition-colors ${selected?.number === f.n ? "border border-gold/45" : "border border-border"} rounded-md hover:border-gold/30`}
                    >
                      <div className="text-gold text-[11px] font-semibold mb-[3px]">
                        {f.n}. {f.label}
                      </div>
                      <div className="text-[11px] text-ink-faint">{f.note}</div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Surah List ── */}
          {!selected && (
            <>
              {/* Feature 10: Search + Filters */}
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar surata por nome ou número..."
                className="w-full px-[18px] py-[11px] bg-surface border border-gold/20 text-ink text-base font-reading outline-none mb-2.5 rounded-md focus:border-gold/40 placeholder:text-ink-faint"
              />

              {/* Feature 9: Meccan / Medinan filter */}
              <div className="flex gap-2 mb-4 items-center flex-wrap">
                {[["all", "Todas"], ["makkah", "Meca ●"], ["madinah", "Medina ○"]].map(([k, l]) => (
                  <button key={k} onClick={() => setFilter(k)} className={btnClass(filter === k)}>{l}</button>
                ))}
                <span className="ml-auto text-ink-faint text-xs tracking-[1px]">
                  {filtered.length} suratas
                </span>
              </div>

              {/* Feature 19: Recently viewed */}
              {recentlyViewed.length > 0 && !search && filter === "all" && (
                <div className="mb-4">
                  <div className="text-gold/35 text-[11px] tracking-[2px] uppercase mb-1.5">
                    Vistas recentemente
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {recentlyViewed.map(n => {
                      const s = index.find(x => x.number === n);
                      if (!s) return null;
                      return (
                        <button key={n} onClick={() => selectSurah(s)} className={`${btnClass()} text-xs`}>
                          {s.number}. {s.name_simple}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Surah grid */}
              <div className="grid gap-2 mb-8" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(175px,1fr))" }}>
                {filtered.map(s => {
                  const hasRef = withRefs.has(s.number);
                  const isMecca = s.revelation_place === "makkah";
                  return (
                    <button
                      key={s.number}
                      onClick={() => selectSurah(s)}
                      className={`px-[15px] py-3.5 text-left bg-surface text-ink cursor-pointer transition-all duration-300 rounded-md ${hasRef ? "border border-gold/25 hover:border-gold/40" : "border border-border hover:border-gold/30"}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gold text-xs font-semibold">{s.number}</span>
                        <div className="flex gap-1 items-center">
                          {hasRef && <span className="text-gold text-[11px]">✦</span>}
                          <span className="text-gold/30 text-[9px] tracking-[1px]">
                            {isMecca ? "MC" : "MD"}
                          </span>
                        </div>
                      </div>
                      <div className="font-serif text-base font-medium text-ink">
                        {s.name_simple}
                      </div>
                      <div className="font-arabic text-[15px] text-gold/60 mt-0.5">
                        {s.name_arabic}
                      </div>
                      <div className="text-xs text-ink-faint mt-1">
                        {s.translated_name} · {s.verses_count}v
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* ── Surah Reading View ── */}
          {selected && (
            <div>
              {/* Feature 11: Navigation bar */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <button onClick={() => { setSelected(null); setVerses([]); }} className={btnClass()}>
                  ← Todas
                </button>
                <button
                  onClick={goToPrev}
                  disabled={selected.number <= 1}
                  className={`${btnClass()} ${selected.number <= 1 ? "opacity-30 cursor-not-allowed" : ""}`}
                >
                  ‹ Anterior
                </button>
                <span className="text-gold/35 text-xs tracking-[1px]">
                  {selected.number} / 114
                </span>
                <button
                  onClick={goToNext}
                  disabled={selected.number >= 114}
                  className={`${btnClass()} ${selected.number >= 114 ? "opacity-30 cursor-not-allowed" : ""}`}
                >
                  Próxima ›
                </button>
              </div>

              {/* Surah header */}
              <div className="text-center mb-7">
                <div className="font-arabic text-[32px] text-gold opacity-65">
                  {selected.name_arabic}
                </div>
                <h3 className="font-serif text-[28px] font-normal text-ink tracking-[2px] mt-1.5">
                  {selected.name_simple} — {selected.translated_name}
                </h3>
                {/* Feature 10: Verse count display */}
                <div className="text-ink-faint text-[13px] mt-2 tracking-[2px]">
                  {selected.verses_count} versículos ·{" "}
                  {selected.revelation_place === "makkah" ? "Revelada em Meca" : "Revelada em Medina"}
                  {withRefs.has(selected.number) && (
                    <span className="text-gold ml-2">· ✦ tem referências cruzadas</span>
                  )}
                </div>
              </div>

              {/* Feature 7: Search within surah */}
              {verses.length > 0 && (
                <div className="mb-4">
                  <input
                    value={verseSearch}
                    onChange={e => setVerseSearch(e.target.value)}
                    placeholder="Buscar dentro desta surata (árabe ou português)..."
                    className="w-full px-4 py-[9px] bg-surface border border-gold/15 text-ink text-sm font-reading outline-none rounded-md focus:border-gold/30 placeholder:text-ink-faint"
                  />
                  {verseSearch && (
                    <div className="text-gold/40 text-xs mt-1 tracking-[1px]">
                      {filteredVerses.length} resultado{filteredVerses.length !== 1 ? "s" : ""}
                    </div>
                  )}
                </div>
              )}

              {/* Feature 12: Skeleton loading */}
              {loading && (
                <div>
                  {[...Array(5)].map((_, i) => <SkeletonVerse key={i} />)}
                </div>
              )}

              {error && (
                <p className="text-center text-[#A0522D] p-6">{error}</p>
              )}

              {/* Feature 13: Empty state for verse search */}
              {!loading && verseSearch && filteredVerses.length === 0 && (
                <div className="text-center py-12 px-5 text-ink-faint">
                  Nenhum versículo encontrado para &ldquo;{verseSearch}&rdquo;
                </div>
              )}

              {/* Verses list */}
              {filteredVerses.map(v => (
                <VerseCard
                  key={v.key}
                  verse={v}
                  surahNumber={selected.number}
                  fontSize={fontSize}
                  bookmarks={bookmarks}
                  setBookmarks={setBookmarks}
                />
              ))}

              {/* Feature 10: End of surah indicator with progress */}
              {!loading && filteredVerses.length > 0 && !verseSearch && (
                <div className="text-center mt-7 mb-4">
                  <div className="text-gold/30 text-[11px] tracking-[3px] uppercase">
                    ✦ Fim da Surata {selected.number} — {selected.name_simple} ✦
                  </div>
                  <div className="flex justify-center gap-3 mt-4">
                    {selected.number > 1 && (
                      <button onClick={goToPrev} className={btnClass()}>‹ Surata anterior</button>
                    )}
                    {selected.number < 114 && (
                      <button onClick={goToNext} className={`${btnClass(true)}`}>
                        Próxima surata ›
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
