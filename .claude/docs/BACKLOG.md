# BACKLOG — Kalam Brasil

## P0 — Prioridade Maxima

### [COMPANION] Contemplative Player — DONE (01/03)
- Player completo com 5 modos, Web Audio API, persistencia Supabase
- Ver global BACKLOG para detalhes das 3 waves

### [SERVICE-WORKER] Offline/PWA Real — pending
- O que: Service Worker com cache de suratas para leitura offline
- Arquivos: public/sw.js, next.config.ts (PWA config)
- Dependencia: necessario para App Store (Apple + Google)
- Estimativa: 1 semana

## P1 — Alta Prioridade

### [QA-SECTION] Perguntas e Respostas — DONE (pre-existente)
- Pagina completa em /perguntas/page.tsx (780L), 12 perguntas, filtros, accordion

### [ONBOARDING] Personalizacao por Avatar — DONE (01/03, commit 90d9505)
- usePersona hook com Supabase + localStorage dual persistence
- user_preferences table com RLS
- PersonaBanner: recomendacao contextual por persona
- DashboardHome: Quick Actions + Explore Grid reordenados por persona
- StoryHome: persona salva via Supabase no click
- Arquivos: usePersona.ts, PersonaBanner.tsx, DashboardHome.tsx, StoryHome.tsx

### [SANCTUARY] Home como Experiencia — DONE (01/03, commit 90d9505)
- SanctuaryHero: Bismillah com animacao de escala, aurora blobs, verso do dia com audio 1-tap
- Audio lazy-loaded do CDN islamic.network (Mishary Alafasy)
- Sacred gold dividers, share/copy, breathing glow
- Integrado em StoryHome (full) e DashboardHome (compact)
- Arquivos: SanctuaryHero.tsx, StoryHome.tsx, DashboardHome.tsx

## P2 — Media Prioridade

### [KALAM-AI] Chat Contextual — pending
- O que: IA scholar 24h, contextual ao versiculo sendo lido
- Dependencia: API costs, prompt engineering, Supabase para historico
- Estimativa: 2-4 semanas (fase 2)

### [ARABIC-300] Quranic Arabic 300 Palavras — pending
- O que: Sistema de aprender 300 palavras que compoem 80% do Quran
- Efeito: "iluminacao progressiva" no reader (palavras conhecidas brilham)
- Volume: alto (300 palavras com audio, exemplos, quiz)
- Estimativa: 3-4 semanas

### [APP-STORES] Capacitor + Publicacao — pending
- O que: Empacotar Kalam como app nativo iOS + Android
- Dependencia: Service Worker (P0), conta Apple Developer ($99/ano), Google Play ($25)
- Stack: Capacitor (zero refactor)
- Estimativa: 2-4 semanas

## P3 — Nice to Have

### [LIVE-MECCA] Camera Kaaba + Qibla — pending
- O que: Feed ao vivo da Kaaba + bussola de Qibla
- APIs existem: YouTube Live embed + compass API
- Estimativa: 1 semana

### [COMMUNITY] Salas de Estudo — pending
- O que: Study rooms onde muculmanos focam juntos com Quran ambient
- Dependencia: WebSocket, real-time
- Estimativa: fase 3+
