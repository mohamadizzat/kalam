# KALAM — Mapa Tecnico Completo

> Referencia tecnica REAL do codebase. Nao e resumo — e o mapa que a IA precisa
> pra codar sem explorar. Atualizar quando mudar algo estrutural.

---

## I. STACK

| Componente | Tecnologia | Versao |
|-----------|-----------|--------|
| Framework | Next.js (App Router) | 16.1.6 |
| Linguagem | TypeScript | 5 |
| Runtime | React | 19.2.3 |
| Styling | Tailwind CSS | v4 |
| UI Base | Radix UI (minimo — maioria e inline) | 1.4.3 |
| Variant Mgmt | class-variance-authority (cva) | 0.7.1 |
| Class Merge | clsx + tailwind-merge | via cn() |
| Animacoes | Framer Motion | 12.34.3 |
| Smooth Scroll | Lenis | 1.3.17 |
| Icons | Lucide React | 0.575.0 |
| Dark Mode | next-themes (forcado dark, sem toggle) | 0.4.6 |
| Auth | Supabase SSR | 0.8.0 |
| DB | Supabase JS | 2.98.0 |
| Analytics | Vercel Analytics | 1.6.1 |
| Fonts | @fontsource (Inter, Playfair, Amiri, Noto Naskh) | npm |

---

## II. SUPABASE

**Project URL:** `https://crnwmlcmmbjamncfnyry.supabase.co`

**Env vars (em .env.local):**
```
NEXT_PUBLIC_SUPABASE_URL=https://crnwmlcmmbjamncfnyry.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (public key, safe to expose)
```

**Clients:**
- `src/lib/supabase/client.ts` — Browser client (createBrowserClient)
- `src/lib/supabase/server.ts` — Server client (createServerClient + cookies)
- `src/lib/supabase/types.ts` — Generated DB types

**Schema (tables existentes):**

```sql
profiles              -- user_id, display_name, avatar_url, created_at
user_settings         -- user_id, font_size, arabic_size, updated_at
user_streaks          -- user_id, current_streak, longest_streak, last_visit
user_progress         -- id, user_id, category, item_slug, completed_at
user_bookmarks        -- id, user_id, type, reference, note, created_at
user_journal          -- id, user_id, entry_date, emotion, reflection, gratitude
user_data             -- user_id, key (string), value (JSON) — KV store generico
kids_progress         -- user_id, stars, streak, completed_*, badges[]
```

**Auth flow:**
1. `middleware.ts` → refresh session em todo request
2. `auth-provider.tsx` → Context com user, session, loading
3. Metodos: signInWithEmail, signUpWithEmail, signInWithGoogle, signOut
4. OAuth callback: `/auth/callback/route.ts`

---

## III. PADROES DE CODIGO

### cn() — Classe utility
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usar SEMPRE pra classes condicionais:
```tsx
<div className={cn('base-class', isActive && 'active-class', 'outro')}>
```

### Componente padrao
```tsx
'use client'  // OBRIGATORIO pra qualquer interatividade

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MeuComponente({ titulo }: { titulo: string }) {
  const [aberto, setAberto] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'bg-[#111111] border border-[#272230] rounded-xl p-6',
        aberto && 'border-[#C9A84C]/30'
      )}
    >
      <h3 className="font-playfair text-[#F0EBE2] text-xl">{titulo}</h3>
    </motion.div>
  )
}
```

### Convencoes de nomeacao
- Paginas: PascalCase (`HomePage`)
- Componentes: PascalCase (`AudioPlayer.tsx`)
- Utils/hooks: camelCase (`formatTime`, `useAuth`)
- Data files: kebab-case (`bridge-verse-map.ts`)
- Rotas: kebab-case (`/a-palavra/[surah]/page.tsx`)
- Path alias: `@/` → `src/`

### Importante: NAO usa shadcn extensivamente
A maioria dos componentes e inline styled com Tailwind. Excecao: `sheet.tsx` pra mobile menu. Se precisar de UI component, construir inline seguindo o padrao existente — nao importar shadcn a menos que ja exista.

---

## IV. ANIMACOES

### Framer Motion (padrao principal)
```tsx
// Entrada padrao
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}

// Scroll reveal (via SectionReveal wrapper)
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
```

### Effects (componentes reutilizaveis)
| Componente | O que faz | Onde usa |
|-----------|-----------|---------|
| `BackgroundBeams` | Feixes de luz animados (canvas) | Hero sections |
| `AtmosphericLayer` | SVG noise + aurora blobs (desktop only) | Root layout |
| `Spotlight` | Luz segue cursor (desktop only) | Cards premium |
| `BlurFade` | Fade-in com blur | Textos de entrada |
| `TextGenerate` | Typewriter character-by-character | Headlines |
| `NumberTicker` | Numeros contando com easing | Stats |

### CSS keyframes (globals.css)
```css
@keyframes shimmer { /* gradient sweep */ }
@keyframes pulseGlow { /* gold pulse */ }
@keyframes fadeUp { /* opacity + translateY */ }
```

### Classes utilitarias globais
- `.card-hover` — lift + border + shadow no hover
- `.gold-glow` — text-shadow dourado
- `.verse-arabic` — RTL + font arabic
- `.no-scrollbar` — esconde scrollbar
- `.shimmer-gold` — shimmer background animado
- `.arabic-pulse` — glow pulsante pra arabe

---

## V. CORES E TIPOGRAFIA

### Paleta (definida em globals.css via @theme)
```
Background:  #0D0B12  (deep black)
Surface:     #161220  (cards)
Elevated:    #1C1828  (hover, modais)
Gold:        #C9A84C  (accent principal — sabedoria)
Gold Light:  #D4B96A  (hover)
Gold Dim:    #8A7A3A  (bordas sutis)
Text:        #F0EBE2  (off-white — NUNCA branco puro)
Secondary:   #B3B0A6  (metadados)
Muted:       #7A7870  (desabilitado)
Border:      #272230  (separadores)
Night:       #1A1530  (darkest)
```

### Fontes
| Uso | Font | Pesos |
|-----|------|-------|
| Headlines | Playfair Display | 400, 600, 700, 800 |
| Body | Inter Variable | 300-700 |
| Arabic (decorativo) | Amiri | 400, 700 |
| Arabic (UI) | Noto Naskh Arabic | 400-700 |

Importados via `@fontsource` (npm, nao Google CDN).

---

## VI. PROVIDERS (Root Layout)

```tsx
<html>
  <body>
    <AuthProvider>           // Supabase auth context
      <ThemeProvider>        // next-themes (forced dark)
        <SidebarProvider>    // Sidebar state
          <LenisProvider>    // Smooth scrolling
            <AtmosphericLayer />  // Background effects
            <Sidebar />           // Desktop nav
            <ContentWrapper>
              <Header />          // Top nav
              <Breadcrumbs />
              <main>{children}</main>
              <Footer />
            </ContentWrapper>
            <FloatingContinue />  // Sticky CTA
            <DiscoveryOrb />      // Floating discovery
            <BottomNav />         // Mobile nav (64px)
          </LenisProvider>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
    <Analytics />             // Vercel
  </body>
</html>
```

---

## VII. MAPA DE ROTAS (App Router)

### 5 Pilares (navegacao principal)
```
/a-palavra          → Quran hub
  /[surah]          → Leitor de surah individual
  /busca            → Busca + versiculos populares
  /favoritos        → Bookmarks
  /recitacao        → Audio
  /hadiths          → Colecao hadiths
  /parabolas        → Parabolas coranicas
  /hifz             → Memorizacao
  /estudo/[slug]    → Cursos de estudo

/a-ponte            → Ponte Bible ↔ Quran
  /por-profeta/[id] → Por profeta
  /por-tema/[id]    → Por tema
  /por-versiculo    → Por versiculo
  /notas            → Anotacoes

/a-presenca         → Praticas espirituais
  /dhikr            → Lembranca
  /duas             → Suplicacoes
  /salah            → Guia de oracao
  /99-nomes         → 99 Nomes de Deus
  /arabe            → Aprender arabe
  /contemplacao     → Contemplacao
  /flashcards       → Flashcards

/a-jornada          → Caminhos de aprendizado
  /companheiros     → Sahaba
  /desafios         → Desafios
  /financas         → Financas islamicas
  /historia         → Timeline historica
  /mulheres         → Mulheres no Islam
  /plano-diario     → Plano do dia
  /seerah           → Biografia do Profeta
  /zakat            → Guia de Zakat
  /ramadan          → Ramadan

/a-alma             → Desenvolvimento pessoal
  /journal          → Diario de reflexao
  /painel           → Dashboard mental health
  /progresso        → Tracking de progresso
  /rotina           → Rotinas sugeridas
  /saude-mental     → Recursos de saude mental
```

### Secoes adicionais
```
/a-biblia-do-kalam/[slug]  → Serie de profetas (25 eps)
/os-profetas/[slug]        → Bio individual de profeta
/trilhas/[slug]            → Trilhas de aprendizado
/kids/*                    → App Kids completo (17 sub-rotas)
/comecar                   → Onboarding
/entrar                    → Login/signup
/configuracoes             → Settings (privacidade, termos)
/aya-do-dia                → Versiculo do dia
/biblioteca                → Biblioteca
/estudos                   → Estudos
/ferramentas               → Ferramentas
/manifesto                 → Manifesto
/mapa                      → Mapa do site
/o-sistema                 → Como funciona o Islam
/perguntas                 → FAQ
/sobre                     → Sobre
```

---

## VIII. INVENTARIO DE COMPONENTES (50+)

### Layout (7)
`Header`, `Sidebar`, `BottomNav`, `ContentWrapper`, `MobileMenu`, `Footer`, `Breadcrumbs`

### Home/Onboarding (7)
`StoryHome`, `DashboardHome`, `OnboardingHome`, `HeroSection`, `ClosingSection`, `PillarsSection`, `NumbersSection`, `QuestionSection`

### Shared/Features (20+)
`AudioPlayer`, `BridgeScriptureView`, `ScriptureCompare`, `SearchDialog`, `GlossaryTooltip`, `EnrichedText`, `VerseShareCard`, `ContentBadges`, `RelatedContent`, `SectionReveal`, `ReadingMode`, `ThemeSelector`, `EmptyState`, `LoadingState`, `FloatingContinue`, `DiscoveryOrb`, `PremiumCard`, `ProphetSelector`, `BackButton`, `GoldDivider`

### Effects (6)
`AtmosphericLayer`, `BackgroundBeams`, `BlurFade`, `NumberTicker`, `Spotlight`, `TextGenerate`

### Kids (7)
`KidsHeader`, `KidsCard`, `KidsQuiz`, `KidsProgressBar`, `KidsArabicWord`, `KidsStarBurst` + barrel `index.ts`

### UI (1)
`sheet.tsx` (Radix wrapper pra mobile menu)

---

## IX. DATA FILES (100+)

### Core (Quran)
- `surahs.ts` — 114 surahs metadata
- `raw/quran/surah-1.json` → `surah-114.json` — Texto completo do Alcorao
- `surah-studies.ts` — Cursos de estudo
- `searchIndex.js` — Indice de busca

### Bridge (Ponte Bible ↔ Quran)
- `bridge-verse-map.ts` — 100+ mapeamentos de versiculos
- `bridge-themes.ts` — 20 temas teologicos
- `bridge-prophets.ts` — 17 profetas comuns

### Conteudo islamico
- `hadiths.ts` + `content/hadiths.js` — Hadiths com narrativas
- `names-of-god.ts` — 99 Nomes de Allah
- `duas.ts` — Suplicacoes com traducao
- `glossary.ts` — Terminologia islamica
- `parables.ts` — Parabolas coranicas
- `companions.ts` — 60+ Sahaba
- `seerah.ts` — Biografia do Profeta
- `history-timeline.ts` — Timeline historica
- `islamic-finance.ts` — Zakat, riba, financas
- `women.ts` — Mulheres no Islam
- `ramadan.ts` — Conteudo especifico

### Experiencia do usuario
- `daily-content.ts` — Versiculo/hadith do dia
- `journal-questions.ts` — Prompts de diario
- `routines.ts` — Rotinas diarias sugeridas
- `achievements.ts` — Badges e conquistas
- `challenges.ts` — Desafios diarios/semanais
- `trails.ts` — Definicoes de trilhas de aprendizado
- `mental-health.ts` — Recursos de saude mental

### Rich content (JS — narrativa pesada)
- `content/prophetStories.js` — Narrativas de profetas
- `content/bridgeContent.js` — Conteudo da Ponte
- `content/brazilianTone.js` — Refs culturais BR
- `content/islamSystem.js` — 5 pilares explicados
- `content/hardQuestions.js` — Perguntas dificeis
- `content/quranPhenomenon.js` — Milagres do Alcorao
- `content/manuscripts.js` — Evidencia de manuscritos
- `content/recognitionStories.js` — Historias de conversao
- `content/surpriseFacts.js` — Fatos surpreendentes

### Kids (9 files em data/kids/)
`activities-kids`, `adab-kids`, `badges-kids`, `daily-duas-kids`, `five-pillars-kids`, `heroes-kids`, `islamic-calendar-kids`, `prophet-stories-kids`, `quizzes-kids`, `six-pillars-faith-kids`

---

## X. AUDIO SYSTEM

- **CDN:** `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/{surahNumber}.mp3`
- **Recitador:** Mishary Rashid Alafasy (128kbps)
- **Player:** `AudioPlayer.tsx` (~340 linhas, full-featured)
- **Features:** play/pause, skip next/prev, volume slider, progress bar, seek, minimize/fullscreen, auto-advance, loading state, error handling
- **Posicao:** fixed bottom, acima do BottomNav

---

## XI. PERSISTENCIA

| Dado | Storage | Motivo |
|------|---------|--------|
| Auth, session | Supabase Auth + cookies | SSR |
| Journal, bookmarks, notes | Supabase DB | Sync cross-device |
| Progress, streaks | Supabase DB | Persistencia |
| Kids progress | Supabase DB | Gamificacao |
| Onboarding status | localStorage | Rapido, nao critico |
| Last read position | localStorage | UX |
| Favorites (offline) | localStorage | Fallback |

---

## XII. RESPONSIVIDADE

- Mobile-first (80%+ trafego BR)
- Breakpoints: <640 mobile, 768 tablet, 1024 desktop
- Max-width: 1200px
- Touch targets: minimo 44x44px
- BottomNav em mobile (pb-20 no conteudo)
- Tipografia 10-15% maior no mobile
- ScriptureCompare: tabs no mobile, colunas no desktop
- Sidebar: collapsible no desktop, sheet no mobile

---

## XIII. BUILD & DEPLOY

```bash
pnpm dev      # Dev server (localhost:3000)
pnpm build    # Production build (RODAR ANTES DE PUSH)
pnpm start    # Run production build
pnpm lint     # ESLint check
```

**Deploy:** Vercel auto-deploy de `main` branch
**Dominio:** kalambrasil.com
**Analytics:** Vercel Analytics integrado

---

## XIV. PROIBICOES DE DESIGN

- ❌ Crescente islamico, verde dominante, mesquita no hero
- ❌ "Islam"/"Muculmano" em home/titulos
- ❌ Pop-ups, auto-play audio, chat widgets
- ❌ Pure black (#000) ou pure white (#FFF)
- ❌ Templates genericos de mesquita
- ✅ Elementos arabes/islamicos entram GRADUALMENTE (profundidade)
- ✅ Visual: Masterclass/Apple, NAO site de mesquita
