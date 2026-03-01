# BACKLOG — Kalam Brasil

## P0 — Prioridade Maxima

### [COMPANION] Contemplative Player — pending
- O que: Player de audio com camadas mixaveis (Quran + ambient + binaural + nasheeds)
- Arquivos: criar CompanionProvider, CompanionPlayer, MixerEngine (Web Audio API)
- Modos: Foco, Energia, Calma, Contemplacao, Sleep, Kids
- Base existente: AudioPlayer.tsx (reutilizar logica de player)
- SQL: tabela companion_preferences (user settings)
- Estimativa: 2-3 semanas

### [SERVICE-WORKER] Offline/PWA Real — pending
- O que: Service Worker com cache de suratas para leitura offline
- Arquivos: public/sw.js, next.config.ts (PWA config)
- Dependencia: necessario para App Store (Apple + Google)
- Estimativa: 1 semana

## P1 — Alta Prioridade

### [QA-SECTION] Perguntas e Respostas — pending
- O que: Secao dedicada para perguntas dificeis
- Conteudo: JA EXISTE em src/content/hardQuestions.js
- Falta: pagina UI dedicada (/perguntas ou /a-ponte/perguntas)
- Estimativa: 2-3 dias

### [ONBOARDING] Personalizacao por Avatar — partial
- O que: Flow que identifica tipo de usuario (curioso, cristao, muculmano novo, muculmano profundo)
- Existente: OnboardingHome.tsx, StoryHome.tsx, /comecar
- Falta: personalizacao real do conteudo baseado no perfil
- Estimativa: 1 semana

### [SANCTUARY] Home como Experiencia — partial
- O que: Impacto emocional na abertura (caligrafia grande, audio 1 toque, espaco sagrado)
- Existente: Home com versiculo do dia + Nome de Deus
- Falta: animacao de entrada, audio instantaneo, sensacao de "sanctuary"
- Estimativa: 3-5 dias

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
