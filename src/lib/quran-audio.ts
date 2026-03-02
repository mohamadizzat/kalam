// ═══════════════════════════════════════════════════════════════
// KALAM — Quran Audio Helper (per-ayah)
// CDN: cdn.islamic.network/quran/audio/128/ar.alafasy/{globalAyahNumber}.mp3
// ═══════════════════════════════════════════════════════════════

/** Number of ayahs in each surah (1-114) */
const AYAH_COUNTS: number[] = [
  7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,
  112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,
  59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,
  52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,
  21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6,
]

/** Precomputed global offset for each surah (0-indexed) */
const SURAH_OFFSETS: number[] = (() => {
  const offsets: number[] = [0]
  for (let i = 0; i < AYAH_COUNTS.length - 1; i++) {
    offsets.push(offsets[i] + AYAH_COUNTS[i])
  }
  return offsets
})()

/** Total ayahs in the Quran */
export const TOTAL_AYAHS = 6236

/** Get the number of ayahs in a given surah (1-indexed) */
export function getAyahCount(surah: number): number {
  if (surah < 1 || surah > 114) return 0
  return AYAH_COUNTS[surah - 1]
}

/** Get the global ayah number (1-indexed) for a surah:ayah pair */
export function getGlobalAyahNumber(surah: number, ayah: number): number {
  if (surah < 1 || surah > 114) return 0
  return SURAH_OFFSETS[surah - 1] + ayah
}

/** Get per-ayah audio URL from CDN */
export function getAyahAudioUrl(surah: number, ayah: number): string {
  const global = getGlobalAyahNumber(surah, ayah)
  return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${global}.mp3`
}

/** Get full-surah audio URL from CDN */
export function getSurahAudioUrl(surah: number): string {
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surah}.mp3`
}

/** Surah names (Arabic + Portuguese) for the selector */
export const SURAH_NAMES: { number: number; arabic: string; portuguese: string; ayahs: number }[] = [
  { number: 1, arabic: 'الفاتحة', portuguese: 'A Abertura', ayahs: 7 },
  { number: 2, arabic: 'البقرة', portuguese: 'A Vaca', ayahs: 286 },
  { number: 3, arabic: 'آل عمران', portuguese: 'A Familia de Imran', ayahs: 200 },
  { number: 4, arabic: 'النساء', portuguese: 'As Mulheres', ayahs: 176 },
  { number: 5, arabic: 'المائدة', portuguese: 'A Mesa Servida', ayahs: 120 },
  { number: 6, arabic: 'الأنعام', portuguese: 'O Gado', ayahs: 165 },
  { number: 7, arabic: 'الأعراف', portuguese: 'As Alturas', ayahs: 206 },
  { number: 8, arabic: 'الأنفال', portuguese: 'Os Despojos', ayahs: 75 },
  { number: 9, arabic: 'التوبة', portuguese: 'O Arrependimento', ayahs: 129 },
  { number: 10, arabic: 'يونس', portuguese: 'Jonas', ayahs: 109 },
  { number: 11, arabic: 'هود', portuguese: 'Hud', ayahs: 123 },
  { number: 12, arabic: 'يوسف', portuguese: 'Jose', ayahs: 111 },
  { number: 13, arabic: 'الرعد', portuguese: 'O Trovao', ayahs: 43 },
  { number: 14, arabic: 'إبراهيم', portuguese: 'Abraao', ayahs: 52 },
  { number: 15, arabic: 'الحجر', portuguese: 'Al-Hijr', ayahs: 99 },
  { number: 16, arabic: 'النحل', portuguese: 'A Abelha', ayahs: 128 },
  { number: 17, arabic: 'الإسراء', portuguese: 'A Viagem Noturna', ayahs: 111 },
  { number: 18, arabic: 'الكهف', portuguese: 'A Caverna', ayahs: 110 },
  { number: 19, arabic: 'مريم', portuguese: 'Maria', ayahs: 98 },
  { number: 20, arabic: 'طه', portuguese: 'Ta-Ha', ayahs: 135 },
  { number: 21, arabic: 'الأنبياء', portuguese: 'Os Profetas', ayahs: 112 },
  { number: 22, arabic: 'الحج', portuguese: 'A Peregrinacao', ayahs: 78 },
  { number: 23, arabic: 'المؤمنون', portuguese: 'Os Crentes', ayahs: 118 },
  { number: 24, arabic: 'النور', portuguese: 'A Luz', ayahs: 64 },
  { number: 25, arabic: 'الفرقان', portuguese: 'O Criterio', ayahs: 77 },
  { number: 26, arabic: 'الشعراء', portuguese: 'Os Poetas', ayahs: 227 },
  { number: 27, arabic: 'النمل', portuguese: 'As Formigas', ayahs: 93 },
  { number: 28, arabic: 'القصص', portuguese: 'A Narrativa', ayahs: 88 },
  { number: 29, arabic: 'العنكبوت', portuguese: 'A Aranha', ayahs: 69 },
  { number: 30, arabic: 'الروم', portuguese: 'Os Romanos', ayahs: 60 },
  { number: 31, arabic: 'لقمان', portuguese: 'Luqman', ayahs: 34 },
  { number: 32, arabic: 'السجدة', portuguese: 'A Prostracao', ayahs: 30 },
  { number: 33, arabic: 'الأحزاب', portuguese: 'Os Aliados', ayahs: 73 },
  { number: 34, arabic: 'سبأ', portuguese: 'Saba', ayahs: 54 },
  { number: 35, arabic: 'فاطر', portuguese: 'O Criador', ayahs: 45 },
  { number: 36, arabic: 'يس', portuguese: 'Ya-Sin', ayahs: 83 },
  { number: 37, arabic: 'الصافات', portuguese: 'Os Enfileirados', ayahs: 182 },
  { number: 38, arabic: 'ص', portuguese: 'Sad', ayahs: 88 },
  { number: 39, arabic: 'الزمر', portuguese: 'Os Grupos', ayahs: 75 },
  { number: 40, arabic: 'غافر', portuguese: 'O Perdoador', ayahs: 85 },
  { number: 41, arabic: 'فصلت', portuguese: 'Detalhada', ayahs: 54 },
  { number: 42, arabic: 'الشورى', portuguese: 'A Consulta', ayahs: 53 },
  { number: 43, arabic: 'الزخرف', portuguese: 'Os Ornamentos', ayahs: 89 },
  { number: 44, arabic: 'الدخان', portuguese: 'A Fumaca', ayahs: 59 },
  { number: 45, arabic: 'الجاثية', portuguese: 'A Ajoelhada', ayahs: 37 },
  { number: 46, arabic: 'الأحقاف', portuguese: 'As Dunas', ayahs: 35 },
  { number: 47, arabic: 'محمد', portuguese: 'Muhammad', ayahs: 38 },
  { number: 48, arabic: 'الفتح', portuguese: 'A Vitoria', ayahs: 29 },
  { number: 49, arabic: 'الحجرات', portuguese: 'Os Aposentos', ayahs: 18 },
  { number: 50, arabic: 'ق', portuguese: 'Qaf', ayahs: 45 },
  { number: 51, arabic: 'الذاريات', portuguese: 'Os Ventos', ayahs: 60 },
  { number: 52, arabic: 'الطور', portuguese: 'O Monte', ayahs: 49 },
  { number: 53, arabic: 'النجم', portuguese: 'A Estrela', ayahs: 62 },
  { number: 54, arabic: 'القمر', portuguese: 'A Lua', ayahs: 55 },
  { number: 55, arabic: 'الرحمن', portuguese: 'O Misericordioso', ayahs: 78 },
  { number: 56, arabic: 'الواقعة', portuguese: 'O Evento', ayahs: 96 },
  { number: 57, arabic: 'الحديد', portuguese: 'O Ferro', ayahs: 29 },
  { number: 58, arabic: 'المجادلة', portuguese: 'A Discussao', ayahs: 22 },
  { number: 59, arabic: 'الحشر', portuguese: 'O Exilio', ayahs: 24 },
  { number: 60, arabic: 'الممتحنة', portuguese: 'A Examinada', ayahs: 13 },
  { number: 61, arabic: 'الصف', portuguese: 'A Fileira', ayahs: 14 },
  { number: 62, arabic: 'الجمعة', portuguese: 'A Sexta-feira', ayahs: 11 },
  { number: 63, arabic: 'المنافقون', portuguese: 'Os Hipócritas', ayahs: 11 },
  { number: 64, arabic: 'التغابن', portuguese: 'A Desilusao', ayahs: 18 },
  { number: 65, arabic: 'الطلاق', portuguese: 'O Divorcio', ayahs: 12 },
  { number: 66, arabic: 'التحريم', portuguese: 'A Proibicao', ayahs: 12 },
  { number: 67, arabic: 'الملك', portuguese: 'A Soberania', ayahs: 30 },
  { number: 68, arabic: 'القلم', portuguese: 'A Pena', ayahs: 52 },
  { number: 69, arabic: 'الحاقة', portuguese: 'A Inevitavel', ayahs: 52 },
  { number: 70, arabic: 'المعارج', portuguese: 'As Vias de Ascensao', ayahs: 44 },
  { number: 71, arabic: 'نوح', portuguese: 'Noe', ayahs: 28 },
  { number: 72, arabic: 'الجن', portuguese: 'Os Jinns', ayahs: 28 },
  { number: 73, arabic: 'المزمل', portuguese: 'O Envolto', ayahs: 20 },
  { number: 74, arabic: 'المدثر', portuguese: 'O Coberto', ayahs: 56 },
  { number: 75, arabic: 'القيامة', portuguese: 'A Ressurreicao', ayahs: 40 },
  { number: 76, arabic: 'الإنسان', portuguese: 'O Homem', ayahs: 31 },
  { number: 77, arabic: 'المرسلات', portuguese: 'Os Enviados', ayahs: 50 },
  { number: 78, arabic: 'النبأ', portuguese: 'A Noticia', ayahs: 40 },
  { number: 79, arabic: 'النازعات', portuguese: 'Os Arrancadores', ayahs: 46 },
  { number: 80, arabic: 'عبس', portuguese: 'Ele Franziu', ayahs: 42 },
  { number: 81, arabic: 'التكوير', portuguese: 'O Obscurecimento', ayahs: 29 },
  { number: 82, arabic: 'الانفطار', portuguese: 'A Fissura', ayahs: 19 },
  { number: 83, arabic: 'المطففين', portuguese: 'Os Defraudadores', ayahs: 36 },
  { number: 84, arabic: 'الانشقاق', portuguese: 'A Fenda', ayahs: 25 },
  { number: 85, arabic: 'البروج', portuguese: 'As Constelacoes', ayahs: 22 },
  { number: 86, arabic: 'الطارق', portuguese: 'O Astro Noturno', ayahs: 17 },
  { number: 87, arabic: 'الأعلى', portuguese: 'O Altissimo', ayahs: 19 },
  { number: 88, arabic: 'الغاشية', portuguese: 'A Envolvente', ayahs: 26 },
  { number: 89, arabic: 'الفجر', portuguese: 'A Aurora', ayahs: 30 },
  { number: 90, arabic: 'البلد', portuguese: 'A Cidade', ayahs: 20 },
  { number: 91, arabic: 'الشمس', portuguese: 'O Sol', ayahs: 15 },
  { number: 92, arabic: 'الليل', portuguese: 'A Noite', ayahs: 21 },
  { number: 93, arabic: 'الضحى', portuguese: 'A Manha', ayahs: 11 },
  { number: 94, arabic: 'الشرح', portuguese: 'A Expansao', ayahs: 8 },
  { number: 95, arabic: 'التين', portuguese: 'O Figo', ayahs: 8 },
  { number: 96, arabic: 'العلق', portuguese: 'O Coagulo', ayahs: 19 },
  { number: 97, arabic: 'القدر', portuguese: 'O Decreto', ayahs: 5 },
  { number: 98, arabic: 'البينة', portuguese: 'A Evidencia', ayahs: 8 },
  { number: 99, arabic: 'الزلزلة', portuguese: 'O Terremoto', ayahs: 8 },
  { number: 100, arabic: 'العاديات', portuguese: 'Os Corceis', ayahs: 11 },
  { number: 101, arabic: 'القارعة', portuguese: 'A Calamidade', ayahs: 11 },
  { number: 102, arabic: 'التكاثر', portuguese: 'A Competicao', ayahs: 8 },
  { number: 103, arabic: 'العصر', portuguese: 'O Tempo', ayahs: 3 },
  { number: 104, arabic: 'الهمزة', portuguese: 'O Difamador', ayahs: 9 },
  { number: 105, arabic: 'الفيل', portuguese: 'O Elefante', ayahs: 5 },
  { number: 106, arabic: 'قريش', portuguese: 'Quraish', ayahs: 4 },
  { number: 107, arabic: 'الماعون', portuguese: 'A Ajuda', ayahs: 7 },
  { number: 108, arabic: 'الكوثر', portuguese: 'A Abundancia', ayahs: 3 },
  { number: 109, arabic: 'الكافرون', portuguese: 'Os Descrentes', ayahs: 6 },
  { number: 110, arabic: 'النصر', portuguese: 'O Socorro', ayahs: 3 },
  { number: 111, arabic: 'المسد', portuguese: 'A Fibra', ayahs: 5 },
  { number: 112, arabic: 'الإخلاص', portuguese: 'A Sinceridade', ayahs: 4 },
  { number: 113, arabic: 'الفلق', portuguese: 'O Amanhecer', ayahs: 5 },
  { number: 114, arabic: 'الناس', portuguese: 'A Humanidade', ayahs: 6 },
]
