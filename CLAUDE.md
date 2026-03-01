# KALAM BRASIL — Project Intelligence

## Quick Context
Kalam (كلام = "A Palavra") is a cultural/spiritual movement presenting the Quran's message to Brazilians who never heard it. NOT a religious org — a completion movement.

**Core phrase:** "Tudo que voce acredita e verdade. Mas falta o capitulo final."

**Founder:** Mohamad Izzat, 24, Brazilian-Palestinian entrepreneur, 12+ companies, 60+ countries.

## Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui + Radix UI
- **Animations:** Framer Motion + Lenis (smooth scroll)
- **Auth:** Supabase SSR (Google OAuth + email/password)
- **Audio:** Web Audio API, CDN: cdn.islamic.network (114 surahs, Mishary Alafasy)
- **Fonts:** Playfair Display (headings), Inter (body), Amiri + Noto Naskh Arabic (Arabic text)
- **Deploy:** Vercel (kalambrasil.com)
- **Dark mode:** Forced dark via next-themes (NO toggle)

## Color System
```
Background: #0D0B12 (deep black) | Surface: #111111 | Elevated: #1A1A1A
Gold: #C9A84C (primary accent) | Gold Light: #D4B96A | Gold Dim: #8A7A3A
Text: #F0EBE2 (off-white) | Secondary: #7A7870 | Muted: #5A5A50
Night Blue: #1A1A2E | Border: #272230
```

## Architecture (47 pages, 43 components)

### 5 Pillars (main navigation)
1. **A Palavra** (`/a-palavra`) — Quran reader, 114 surahs + audio + search + hadiths + hifz
2. **A Ponte** (`/a-ponte`) — Bible x Quran comparison (100+ verse mappings, 20 themes, 17 prophets)
3. **A Presenca** (`/a-presenca`) — Spiritual practice (salah, dhikr, duas, 99 names, Arabic learning)
4. **A Jornada** (`/a-jornada`) — Learning paths (seerah, companions, women, history, challenges, Ramadan)
5. **A Alma** (`/a-alma`) — Personal dev (journal, progress, routines, mental health)

### Additional sections
- **A Biblia do Kalam** (`/a-biblia-do-kalam`) — Prophets series (25 episodes)
- **Kids** (`/kids`) — 11 sections for children
- **Onboarding** (`/comecar`) — First-time experience
- **Auth** (`/entrar`) — Login/signup via Supabase

### Key Components
- `AudioPlayer.tsx` — Full Quran player (114 surahs, play/pause/skip/volume/progress)
- `BridgeScriptureView.tsx` — Bible vs Quran side-by-side (desktop: columns, mobile: tabs)
- `ScriptureCompare.tsx` — Generic scripture comparison
- `OnboardingHome.tsx` / `DashboardHome.tsx` / `StoryHome.tsx` — Home modes

## Design Rules (CRITICAL)
- NEVER use Islamic crescent as logo/icon
- NEVER use green as dominant color
- NEVER put mosque photos on hero/landing
- NEVER use words "Islam" or "Muslim" in home/titles
- NO auto-play audio, NO pop-ups, NO chat widgets
- NO pure black (#000000) or pure white (#FFFFFF)
- Islamic/Arabic elements enter GRADUALLY as user goes deeper
- The site must look like Masterclass/Apple — NOT a mosque website

## Target Audience
Brazilian men, 20-35, follow Pablo Marcal-type figures, believe in God, never read the Quran. The trigger is RECOGNITION, not theology.

## Key Data Files (lib/data/)
- `bridge-verse-map.ts` — 100+ Bible-Quran verse mappings
- `bridge-themes.ts` — 20 theological themes
- `bridge-prophets.ts` — 17 common prophets
- `surahs.ts` — 114 surahs metadata
- `companions.ts` — 60+ Sahaba
- `names-of-god.ts` — 99 Names of Allah
- `hardQuestions.js` — Difficult Q&A (Muhammad violence, hijab, Sharia, etc.)

## Session Protocol
1. Read `CLAUDE.md` (this file) for project context
2. Read `.claude/docs/SESSION_LOG.md` for latest session state
3. Check `.claude/docs/BACKLOG.md` for pending work
4. After work: update SESSION_LOG.md with what was done

## Docs Directory (.claude/docs/)
- `MANIFESTO.md` — The Law of the Original (philosophical foundation)
- `NARRATIVE.md` — Complete brand narrative, voice, tone, psychology
- `THEOLOGY.md` — Core theology (God is Love, 99 Names, anti-fear approach)
- `TECHNICAL.md` — Full technical spec, components, animation details
- `COMPETITOR_ANALYSIS.md` — Market research, app competitors, opportunities
- `SESSION_LOG.md` — Running log of development sessions
- `BACKLOG.md` — Pending features and tasks

## Git Protocol
- Deploy from `main` branch ONLY
- Commit messages in English, descriptive
- Run `pnpm build` before push
- Vercel auto-deploys from main
