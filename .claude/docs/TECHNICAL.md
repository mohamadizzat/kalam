# KALAM — Especificacao Tecnica Completa

## Stack
| Componente | Tecnologia | Versao |
|-----------|-----------|--------|
| Framework | Next.js (App Router) | 16.1.6 |
| Linguagem | TypeScript | 5 |
| Runtime | React | 19.2.3 |
| Styling | Tailwind CSS | v4 |
| UI Base | Radix UI (via radix-ui package) | 1.4.3 |
| Animacoes | Framer Motion | 12.34.3 |
| Smooth Scroll | Lenis | 1.3.17 |
| Icons | Lucide React | 0.575.0 |
| Dark Mode | next-themes | 0.4.6 |
| Auth | Supabase SSR | 0.8.0 |
| DB | Supabase JS | 2.98.0 |
| Analytics | Vercel Analytics | 1.6.1 |
| Class Utils | clsx + tailwind-merge + cva | latest |

## Fonts
| Uso | Font | Pesos | Tipo |
|-----|------|-------|------|
| Headlines | Playfair Display | 400, 600, 700, 800 | Serif elegante |
| Body | Inter Variable | 300-700 | Sans-serif |
| Arabic (decorativo) | Amiri | 400, 700 | Naskh classico |
| Arabic (UI) | Noto Naskh Arabic | 400-700 | Moderno |

Importados via @fontsource (npm packages, nao Google CDN).

## Cores
```
--bg-primary: #0D0B12     (fundo principal)
--bg-surface: #111111     (cards)
--bg-elevated: #1A1A1A    (hover, modais)
--gold: #C9A84C            (accent principal — sabedoria)
--gold-light: #D4B96A      (hover states)
--gold-dim: #8A7A3A        (bordas sutis)
--text: #F0EBE2            (off-white — nunca branco puro)
--text-secondary: #7A7870  (metadados)
--text-muted: #5A5A50      (desabilitado)
--night-blue: #1A1A2E      (backgrounds especiais)
--border: #272230          (separadores)
```

## Audio System
- **CDN:** `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/{surahNumber}.mp3`
- **Recitador:** Mishary Rashid Alafasy (128kbps)
- **Player:** Componente custom `AudioPlayer.tsx`
- **Features:** play/pause, skip, volume, progress bar, minimize, auto-advance
- **Posicao:** fixed bottom

## Auth Flow
1. `middleware.ts` — Refresh session em todo request (Supabase SSR)
2. `auth-provider.tsx` — Context com user, session, loading
3. Metodos: signInWithEmail, signUpWithEmail, signInWithGoogle, signOut
4. OAuth callback: `/auth/callback/route.ts`
5. Supabase clients: `client.ts` (browser), `server.ts` (SSR + cookies)

## Persistencia
- **Supabase:** Auth, journal, notes (A Ponte), user profile
- **localStorage:** Onboarding status, last read, favorites, progress, achievements, drafts

## Key Components
| Componente | Arquivo | Funcao |
|-----------|---------|--------|
| AudioPlayer | shared/AudioPlayer.tsx | Player completo 114 suratas |
| BridgeScriptureView | shared/BridgeScriptureView.tsx | Biblia x Quran (colunas/tabs) |
| ScriptureCompare | shared/ScriptureCompare.tsx | Comparador generico |
| SectionReveal | shared/SectionReveal.tsx | Wrapper de scroll animation |
| EnrichedText | shared/EnrichedText.tsx | Texto com glossario inline |
| GlossaryTooltip | shared/GlossaryTooltip.tsx | Tooltip para termos |
| FloatingContinue | shared/FloatingContinue.tsx | Continue button flutuante |
| VerseShareCard | shared/VerseShareCard.tsx | Card para compartilhamento |

## Animacoes
### SectionReveal (wrapper global)
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
/>
```

### Effects Components
- BackgroundBeams — Feixes de luz (hero)
- BlurFade — Fade com blur
- NumberTicker — Contador animado
- Spotlight — Spotlight effect
- TextGenerate — Geracao de texto

## Responsividade
- Mobile-first (80%+ trafego BR)
- Breakpoints: <640px mobile, 768px tablet, 1024px desktop
- Max-width: 1200px
- Touch targets: minimo 44x44px
- Bottom nav em mobile (pb-20)
- Tipografia 10-15% maior no mobile
- ScriptureCompare: tabs no mobile, colunas no desktop

## PWA
- manifest.json: display standalone, theme #C9A84C, bg #0D0B12
- Icons: 192x192, 512x512 (maskable)
- Shortcuts: CRM, Intel, Brain
- ⚠️ NO SERVICE WORKER (precisa implementar para offline real)

## Performance Targets
- Lighthouse: 90+ em todos os scores
- Fonts: display=swap + preload criticas
- Images: WebP, lazy loading, next/image
- Lenis: lerp 0.1 (suave sem lag)
- Bundle: code split por rota (automatico com App Router)

## Proibicoes de Design
- ❌ Crescente islamico, verde dominante, mesquita no hero
- ❌ "Islam"/"Muculmano" em home/titulos
- ❌ Pop-ups, auto-play audio, chat widgets
- ❌ Pure black (#000) ou pure white (#FFF)
- ❌ Templates genericos de mesquita
- ✅ Elementos arabes/islamicos entram GRADUALMENTE (profundidade)
- ✅ Visual: Masterclass/Apple, NAO site de mesquita
