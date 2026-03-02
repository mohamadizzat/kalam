/**
 * fetch-quran.js
 * Pulls the complete Quran from api.qurancdn.com:
 *   - Arabic text (Uthmani script)
 *   - Portuguese translation by Helmi Nasr (ID 103)
 *   - Surah metadata (name, arabic name, meaning, verses count)
 *
 * Output:
 *   src/data/quran/index.json      ← list of all 114 surahs
 *   src/data/quran/surah-{N}.json  ← verses for each surah
 *
 * Usage:
 *   node scripts/fetch-quran.js           ← all 114 surahs
 *   node scripts/fetch-quran.js 1 10      ← surahs 1 to 10
 *   node scripts/fetch-quran.js 1         ← surah 1 only
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const BASE = "https://api.qurancdn.com/api/qdc";
const PT_TRANSLATION_ID = 103; // Helmi Nasr
const OUTPUT_DIR = path.join(__dirname, "../src/data/quran");

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { Accept: "application/json" } }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error for ${url}: ${e.message}\nBody: ${data.slice(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error("Timeout: " + url)); });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function stripHtml(str) {
  return (str || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

async function fetchSurahIndex() {
  const out = path.join(OUTPUT_DIR, "index.json");
  if (fs.existsSync(out)) {
    console.log("  [cache] index.json");
    return JSON.parse(fs.readFileSync(out, "utf-8"));
  }
  console.log("  Fetching surah index...");
  const data = await get(`${BASE}/chapters?language=pt`);
  const surahs = (data.chapters || []).map((c) => ({
    number: c.chapter_number || c.id,
    name_arabic: c.name_arabic || c.name,
    name_simple: c.name_simple,
    name_complex: c.name_complex,
    translated_name: c.translated_name?.name || "",
    verses_count: c.verses_count,
    revelation_place: c.revelation_place, // makkah | madinah
    pages: c.pages,
  }));
  fs.writeFileSync(out, JSON.stringify(surahs, null, 2), "utf-8");
  console.log(`  Saved ${surahs.length} surahs to index.json`);
  return surahs;
}

async function fetchSurah(surahNumber, totalVerses) {
  const out = path.join(OUTPUT_DIR, `surah-${surahNumber}.json`);
  if (fs.existsSync(out)) {
    console.log(`  [cache] surah-${surahNumber}.json`);
    return;
  }

  const perPage = 50;
  const pages = Math.ceil(totalVerses / perPage);
  let allVerses = [];

  for (let page = 1; page <= pages; page++) {
    const url =
      `${BASE}/verses/by_chapter/${surahNumber}` +
      `?per_page=${perPage}&page=${page}` +
      `&fields=text_uthmani,transliteration` +
      `&translations=${PT_TRANSLATION_ID}`;

    const data = await get(url);
    const verses = (data.verses || []).map((v) => {
      const trans = v.translations || [];
      return {
        key: v.verse_key,
        number: v.verse_number,
        arabic: v.text_uthmani || "",
        portuguese: stripHtml(trans[0]?.text || ""),
      };
    });
    allVerses = allVerses.concat(verses);
    if (pages > 1) await sleep(300);
  }

  fs.writeFileSync(out, JSON.stringify(allVerses, null, 2), "utf-8");
}

async function main() {
  const args = process.argv.slice(2);
  let start = 1;
  let end = 114;

  if (args.length === 1) { start = end = parseInt(args[0]); }
  else if (args.length === 2) { start = parseInt(args[0]); end = parseInt(args[1]); }

  console.log(`\n=== FETCH QURAN === Surahs ${start}–${end}\n`);

  const index = await fetchSurahIndex();

  let ok = 0, errors = 0;
  for (let n = start; n <= end; n++) {
    const meta = index.find((s) => s.number === n);
    if (!meta) { console.log(`  [!] Surah ${n} not in index`); continue; }

    process.stdout.write(
      `  [${n}/114] ${meta.name_simple} (${meta.name_arabic}) — ${meta.verses_count} verses... `
    );
    try {
      await fetchSurah(n, meta.verses_count);
      console.log("✓");
      ok++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      errors++;
    }
    // Rate limit: 400ms between requests
    await sleep(400);
  }

  console.log(`\nDone. OK: ${ok}  Errors: ${errors}`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
