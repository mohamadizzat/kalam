#!/usr/bin/env node
'use strict';

/**
 * KALAM REELS — Wave 1 Production Pipeline
 * Generates 5 complete reels: narration + music + video + composition
 *
 * Usage: node produce-wave1.js [--step narration|music|video|compose|all]
 *        node produce-wave1.js --reel 1   (only reel 1)
 */

const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');

// Load Hub env manually (no dotenv dependency)
const envPath = '/Users/mohamadizzat/conductor/workspaces/izzat-hub-v1/atlanta/.env';
const envContent = fs.readFileSync(envPath, 'utf8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) continue;
  const key = trimmed.slice(0, eqIdx).trim();
  let val = trimmed.slice(eqIdx + 1).trim();
  // Remove quotes
  if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
    val = val.slice(1, -1);
  }
  if (!process.env[key]) process.env[key] = val;
}

// Providers
const { generateSpeech } = require('/Users/mohamadizzat/conductor/workspaces/izzat-hub-v1/atlanta/modules/partners-studio/providers/elevenlabs');
const suno = require('/Users/mohamadizzat/conductor/workspaces/izzat-hub-v1/atlanta/modules/partners-studio/providers/suno');
const kling = require('/Users/mohamadizzat/conductor/workspaces/izzat-hub-v1/atlanta/modules/partners-studio/providers/kling');

// ============================================================
// CONFIGURATION
// ============================================================

const BASE_DIR = '/Users/mohamadizzat/Desktop/kalam/reels';
const VOICE_PT = 'JBFqnCBsd6RMkjVDRZzb';  // George — Storyteller
const VOICE_AR = 'onwK4e9ZLuTAKqWW03F9';  // Daniel — Formal/Recitation

const REELS = [
  {
    id: 'reel-01-kun',
    name: 'A Palavra que Falta',
    format: 'Verso Revelado',
    duration: 20,
    narrationPt: 'Existe uma palavra... que foi dita antes do tempo. Kun. Seja. E foi. Com uma palavra, tudo que existe veio a ser. O Alcorão preservou essa palavra por mil e quatrocentos anos.',
    narrationAr: 'كُن فَيَكُونُ',
    musicPrompt: 'contemplative ambient, dark, ethereal, cinematic pad, sacred, reverb, no vocals, 30 seconds',
    musicStyle: 'ambient, cinematic, dark, ethereal, sacred',
    videoPrompt: 'Cinematic dark void with golden light particles floating slowly, sacred atmosphere, black background, golden dust particles drifting upward, divine light beams piercing darkness, ethereal glow, vertical composition 9:16, slow motion, ultra detailed, dramatic lighting',
    videoDuration: 5,
  },
  {
    id: 'reel-02-maria',
    name: 'Maria no Alcorão',
    format: 'A Ponte',
    duration: 30,
    narrationPt: 'A mulher mais citada no Alcorão... não é muçulmana. Na Bíblia: Bendita és tu entre as mulheres. No Alcorão: Ó Maria, Deus te escolheu acima de todas as mulheres dos mundos. Existe um capítulo inteiro do Alcorão dedicado a Maria. Surah Maryam. Trinta e quatro menções pelo nome. O que mais você não sabe?',
    narrationAr: 'يَا مَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَىٰ نِسَاءِ الْعَالَمِينَ',
    musicPrompt: 'cinematic tension building to resolution, orchestral strings, sacred, emotional crescendo, no vocals, 40 seconds',
    musicStyle: 'cinematic, orchestral, strings, emotional, sacred',
    videoPrompt: 'Split screen composition, left side warm sepia tones showing ancient scrolls and candlelight, right side golden warm light with ornate Islamic geometric patterns, both sides merging into unified divine light in center, sacred atmosphere, vertical 9:16, cinematic, dramatic lighting, ultra detailed',
    videoDuration: 5,
  },
  {
    id: 'reel-03-ar-rahman',
    name: 'Ar-Rahman',
    format: '99 Nomes',
    duration: 20,
    narrationPt: 'Ar-Rahman. O Misericordioso. Aquele cuja misericórdia abrange absolutamente tudo. Deus escreveu sobre Si mesmo: Minha misericórdia supera Minha ira. Dos cento e quatorze capítulos do Alcorão, cento e treze começam invocando este nome.',
    narrationAr: 'الرَّحْمَٰنُ',
    musicPrompt: 'peaceful ambient nasheed style, gentle strings, warm pad, sacred contemplative, no vocals, 25 seconds',
    musicStyle: 'ambient, peaceful, warm, sacred, contemplative',
    videoPrompt: 'Deep black background with expanding golden light wave emanating from center, golden particles forming sacred geometric patterns, divine radiance, warm gold on pure black, ethereal glow spreading outward like mercy encompassing everything, vertical 9:16, cinematic, ultra detailed',
    videoDuration: 5,
  },
  {
    id: 'reel-04-hadith',
    name: '1400 Anos Atrás',
    format: 'Hadith do Dia',
    duration: 30,
    narrationPt: 'Mil e quatrocentos anos atrás, num deserto, ele disse... Nenhum de vocês terá fé verdadeira... até desejar para seu irmão aquilo que deseja para si mesmo. Antes de qualquer constituição. Antes de qualquer declaração de direitos humanos. Isso já havia sido dito.',
    narrationAr: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    musicPrompt: 'desert ambient, warm strings, contemplative, ancient atmosphere, oud-inspired ambient, no vocals, 35 seconds',
    musicStyle: 'ambient, desert, warm, contemplative, ancient',
    videoPrompt: 'Desert landscape at golden hour sunrise, warm light rays across sand dunes, cinematic wide shot, grains of sand flowing in gentle wind, vast open desert with dramatic sky, golden warm tones, sacred solitude, vertical 9:16, ultra detailed, slow motion sand particles',
    videoDuration: 5,
  },
  {
    id: 'reel-05-abraao',
    name: 'Abraão — O Pai de Todos',
    format: 'Profeta em Foco',
    duration: 40,
    narrationPt: 'Um homem. Que quatro bilhões de pessoas chamam de pai. O Judaísmo o chama de Avraham. O Cristianismo, de Abraão. O Islam, de Ibrahim. O mesmo homem. A mesma história. A Bíblia diz que Abraão creu em Deus, e isso lhe foi creditado como justiça. O Alcorão diz que Ibrahim não era judeu nem cristão — era devotado a Deus. Antes das divisões... havia unidade.',
    narrationAr: 'إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً قَانِتًا لِلَّهِ حَنِيفًا',
    musicPrompt: 'epic cinematic ambient, slow percussion building, orchestral strings crescendo, ancient storytelling atmosphere, no vocals, 50 seconds',
    musicStyle: 'cinematic, epic, orchestral, percussion, storytelling',
    videoPrompt: 'Vast starry night sky over ancient landscape, silhouette of solitary figure standing on hilltop gazing at stars, three paths of golden light emanating from the figure into the distance, cosmic grandeur, sacred atmosphere, dramatic clouds, vertical 9:16, ultra cinematic, epic scale, ultra detailed',
    videoDuration: 10,
  },
];

// ============================================================
// UTILITIES
// ============================================================

function log(msg) {
  const ts = new Date().toLocaleTimeString('pt-BR');
  console.log(`[${ts}] ${msg}`);
}

function logCost(provider, cost) {
  console.log(`  💰 ${provider}: $${cost.toFixed(3)}`);
}

async function downloadFile(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
  log(`  ✅ Downloaded: ${path.basename(filepath)} (${(buffer.length / 1024).toFixed(0)}KB)`);
  return filepath;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getAudioDuration(filepath) {
  try {
    const result = execSync(
      `ffprobe -v quiet -show_entries format=duration -of csv=p=0 "${filepath}"`,
      { encoding: 'utf8' }
    ).trim();
    return parseFloat(result);
  } catch {
    return 0;
  }
}

// ============================================================
// STEP 1: NARRATION (ElevenLabs)
// ============================================================

async function generateNarrations(reels) {
  log('🎙️  ETAPA 1: Gerando narrações via ElevenLabs...');
  const totalCost = { pt: 0, ar: 0 };

  const tasks = reels.map(async (reel) => {
    const dir = path.join(BASE_DIR, reel.id);
    ensureDir(dir);

    // PT-BR narration
    const ptFile = path.join(dir, 'narration-pt.mp3');
    if (fs.existsSync(ptFile) && fs.statSync(ptFile).size > 1000) {
      log(`  ⏭️  ${reel.id}: narration-pt.mp3 já existe, pulando`);
    } else {
      log(`  🔊 ${reel.id}: Gerando narração PT-BR (${reel.narrationPt.length} chars)...`);
      const result = await generateSpeech({
        text: reel.narrationPt,
        voiceId: VOICE_PT,
        modelId: 'eleven_multilingual_v2',
        stability: 0.6,
        similarityBoost: 0.8,
      });
      fs.writeFileSync(ptFile, result.buffer);
      totalCost.pt += result.cost;
      logCost('ElevenLabs PT', result.cost);
      log(`  ✅ ${reel.id}: narration-pt.mp3 (${(result.buffer.length / 1024).toFixed(0)}KB)`);
    }

    // Arabic narration (if exists)
    if (reel.narrationAr) {
      const arFile = path.join(dir, 'narration-ar.mp3');
      if (fs.existsSync(arFile) && fs.statSync(arFile).size > 1000) {
        log(`  ⏭️  ${reel.id}: narration-ar.mp3 já existe, pulando`);
      } else {
        log(`  🔊 ${reel.id}: Gerando narração Árabe (${reel.narrationAr.length} chars)...`);
        const result = await generateSpeech({
          text: reel.narrationAr,
          voiceId: VOICE_AR,
          modelId: 'eleven_multilingual_v2',
          stability: 0.7,
          similarityBoost: 0.85,
        });
        fs.writeFileSync(arFile, result.buffer);
        totalCost.ar += result.cost;
        logCost('ElevenLabs AR', result.cost);
        log(`  ✅ ${reel.id}: narration-ar.mp3 (${(result.buffer.length / 1024).toFixed(0)}KB)`);
      }
    }
  });

  // Run 2-3 at a time to avoid rate limits
  for (let i = 0; i < tasks.length; i += 2) {
    await Promise.all(tasks.slice(i, i + 2));
  }

  log(`🎙️  Narrações concluídas. Custo total: $${(totalCost.pt + totalCost.ar).toFixed(3)}`);
  return totalCost;
}

// ============================================================
// STEP 2: MUSIC (Suno)
// ============================================================

async function generateMusic(reels) {
  log('🎵  ETAPA 2: Gerando músicas via Suno...');
  let totalCost = 0;

  for (const reel of reels) {
    const dir = path.join(BASE_DIR, reel.id);
    const musicFile = path.join(dir, 'music.mp3');

    if (fs.existsSync(musicFile) && fs.statSync(musicFile).size > 10000) {
      log(`  ⏭️  ${reel.id}: music.mp3 já existe, pulando`);
      continue;
    }

    log(`  🎶 ${reel.id}: Gerando música ambient...`);
    log(`     Prompt: "${reel.musicPrompt}"`);

    try {
      const { taskId } = await suno.generateMusic({
        prompt: reel.musicPrompt,
        style: reel.musicStyle,
        title: `Kalam - ${reel.name}`,
        instrumental: true,
      });

      log(`  ⏳ ${reel.id}: Suno task ${taskId}, aguardando...`);
      const result = await suno.pollUntilComplete(taskId, 180000);

      if (result.songs && result.songs.length > 0) {
        const song = result.songs[0];
        if (song.audioUrl) {
          await downloadFile(song.audioUrl, musicFile);
          totalCost += result.cost || 0.10;
          logCost('Suno', result.cost || 0.10);
        } else {
          log(`  ⚠️  ${reel.id}: Suno retornou sem URL de áudio`);
        }
      }
    } catch (err) {
      log(`  ❌ ${reel.id}: Suno falhou — ${err.message}`);
    }

    // Small delay between requests
    await new Promise(r => setTimeout(r, 2000));
  }

  log(`🎵  Músicas concluídas. Custo total: $${totalCost.toFixed(3)}`);
  return totalCost;
}

// ============================================================
// STEP 3: VIDEO (Kling V3)
// ============================================================

async function generateVideos(reels) {
  log('🎬  ETAPA 3: Gerando vídeos via Kling V3...');
  let totalCost = 0;

  for (const reel of reels) {
    const dir = path.join(BASE_DIR, reel.id);
    const videoFile = path.join(dir, 'video.mp4');

    if (fs.existsSync(videoFile) && fs.statSync(videoFile).size > 50000) {
      log(`  ⏭️  ${reel.id}: video.mp4 já existe, pulando`);
      continue;
    }

    log(`  🎥 ${reel.id}: Gerando vídeo (${reel.videoDuration}s)...`);
    log(`     Prompt: "${reel.videoPrompt.substring(0, 80)}..."`);

    try {
      const { taskId } = await kling.generateVideo({
        prompt: reel.videoPrompt,
        negativePrompt: 'text, watermark, logo, words, letters, blurry, low quality, distorted faces, human faces',
        duration: reel.videoDuration,
        aspectRatio: '9:16',
        mode: 'std',
      });

      log(`  ⏳ ${reel.id}: Kling task ${taskId}, aguardando (pode levar 2-5min)...`);
      const result = await kling.pollUntilComplete(taskId, 600000); // 10min timeout

      if (result.videoUrl) {
        await downloadFile(result.videoUrl, videoFile);
        totalCost += result.cost || 0;
        logCost('Kling', result.cost || 0);
      }
    } catch (err) {
      log(`  ❌ ${reel.id}: Kling falhou — ${err.message}`);
    }

    // Delay between video requests
    await new Promise(r => setTimeout(r, 3000));
  }

  log(`🎬  Vídeos concluídos. Custo total: $${totalCost.toFixed(3)}`);
  return totalCost;
}

// ============================================================
// STEP 4: COMPOSITION (ffmpeg)
// ============================================================

async function composeReels(reels) {
  log('🎞️  ETAPA 4: Compondo reels finais com ffmpeg...');

  for (const reel of reels) {
    const dir = path.join(BASE_DIR, reel.id);
    const finalFile = path.join(dir, 'final.mp4');

    // Check required files
    const narrationPt = path.join(dir, 'narration-pt.mp3');
    const narrationAr = path.join(dir, 'narration-ar.mp3');
    const music = path.join(dir, 'music.mp3');
    const video = path.join(dir, 'video.mp4');

    if (!fs.existsSync(narrationPt)) {
      log(`  ⚠️  ${reel.id}: narration-pt.mp3 não encontrado, pulando composição`);
      continue;
    }

    log(`  🔧 ${reel.id}: Compondo reel final...`);

    // Get narration duration to determine final length
    const narrationDuration = getAudioDuration(narrationPt);
    const targetDuration = Math.max(narrationDuration, reel.duration);
    log(`     Duração narração: ${narrationDuration.toFixed(1)}s, target: ${targetDuration.toFixed(1)}s`);

    // Build ffmpeg command
    let ffmpegCmd = 'ffmpeg -y';
    let filterComplex = '';
    let audioInputs = 0;

    // Input 0: Video (if exists)
    const hasVideo = fs.existsSync(video);
    if (hasVideo) {
      // Loop video to match target duration
      ffmpegCmd += ` -stream_loop -1 -i "${video}"`;
    } else {
      // Generate black background with golden particles (fallback)
      ffmpegCmd += ` -f lavfi -i "color=c=black:s=1080x1920:d=${targetDuration}:r=30"`;
    }

    // Input 1: PT narration
    ffmpegCmd += ` -i "${narrationPt}"`;
    audioInputs++;

    // Input 2: Arabic narration (if exists)
    const hasAr = fs.existsSync(narrationAr);
    let arInputIdx = -1;
    if (hasAr) {
      ffmpegCmd += ` -i "${narrationAr}"`;
      arInputIdx = 1 + audioInputs;
      audioInputs++;
    }

    // Input 3: Music (if exists)
    const hasMusic = fs.existsSync(music);
    let musicInputIdx = -1;
    if (hasMusic) {
      ffmpegCmd += ` -i "${music}"`;
      musicInputIdx = hasAr ? 3 : 2;
    }

    // Build filter complex for audio mixing
    const filters = [];

    // Scale video to 1080x1920
    filters.push(`[0:v]scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,setsar=1[vout]`);

    // Mix audio tracks
    if (hasMusic) {
      // Narration at full volume, music at 25%
      filters.push(`[1:a]aformat=sample_rates=44100:channel_layouts=stereo[nar]`);
      filters.push(`[${musicInputIdx}:a]aformat=sample_rates=44100:channel_layouts=stereo,volume=0.25[mus]`);

      if (hasAr) {
        // Arabic narration exists - mix all three
        filters.push(`[${arInputIdx}:a]aformat=sample_rates=44100:channel_layouts=stereo,volume=0.9[arab]`);
        // Concat Arabic first (short), then Portuguese
        filters.push(`[arab][nar]concat=n=2:v=0:a=1[voice]`);
        filters.push(`[voice][mus]amix=inputs=2:duration=longest:dropout_transition=3[aout]`);
      } else {
        filters.push(`[nar][mus]amix=inputs=2:duration=longest:dropout_transition=3[aout]`);
      }
    } else {
      // No music, just narration
      if (hasAr) {
        filters.push(`[${arInputIdx}:a]volume=0.9[arab]`);
        filters.push(`[1:a][arab]concat=n=2:v=0:a=1[aout]`);
      } else {
        filters.push(`[1:a]acopy[aout]`);
      }
    }

    filterComplex = filters.join(';');
    ffmpegCmd += ` -filter_complex "${filterComplex}"`;
    ffmpegCmd += ` -map "[vout]" -map "[aout]"`;
    ffmpegCmd += ` -t ${targetDuration}`;
    ffmpegCmd += ` -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p`;
    ffmpegCmd += ` -c:a aac -b:a 192k -ar 44100`;
    ffmpegCmd += ` -movflags +faststart`;
    ffmpegCmd += ` "${finalFile}"`;

    try {
      execSync(ffmpegCmd, { stdio: 'pipe', timeout: 120000 });
      const stats = fs.statSync(finalFile);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);
      log(`  ✅ ${reel.id}: final.mp4 (${sizeMB}MB, ${targetDuration.toFixed(1)}s)`);
    } catch (err) {
      log(`  ❌ ${reel.id}: ffmpeg falhou`);
      // Try simpler composition (just video + narration, no mixing)
      try {
        log(`  🔄 ${reel.id}: Tentando composição simplificada...`);
        const simpleCmd = `ffmpeg -y -stream_loop -1 -i "${hasVideo ? video : ''}" -i "${narrationPt}" -t ${targetDuration} -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest "${finalFile}"`;
        execSync(simpleCmd, { stdio: 'pipe', timeout: 120000 });
        log(`  ✅ ${reel.id}: final.mp4 (simplificado)`);
      } catch (err2) {
        log(`  ❌ ${reel.id}: composição simplificada também falhou — ${err2.message?.substring(0, 100)}`);
      }
    }
  }

  log('🎞️  Composição concluída.');
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const args = process.argv.slice(2);
  const step = args.find(a => a.startsWith('--step='))?.split('=')[1] || 'all';
  const reelNum = args.find(a => a.startsWith('--reel='))?.split('=')[1];

  let targetReels = REELS;
  if (reelNum) {
    const idx = parseInt(reelNum) - 1;
    if (idx >= 0 && idx < REELS.length) {
      targetReels = [REELS[idx]];
    }
  }

  console.log('');
  console.log('═══════════════════════════════════════════════');
  console.log('  KALAM REELS — Wave 1 Production Pipeline');
  console.log('═══════════════════════════════════════════════');
  console.log(`  Reels: ${targetReels.map(r => r.name).join(', ')}`);
  console.log(`  Step: ${step}`);
  console.log(`  Output: ${BASE_DIR}`);
  console.log('═══════════════════════════════════════════════');
  console.log('');

  const costs = { narration: 0, music: 0, video: 0 };
  const startTime = Date.now();

  try {
    if (step === 'all' || step === 'narration') {
      const narCost = await generateNarrations(targetReels);
      costs.narration = (narCost.pt || 0) + (narCost.ar || 0);
    }

    if (step === 'all' || step === 'music') {
      costs.music = await generateMusic(targetReels);
    }

    if (step === 'all' || step === 'video') {
      costs.video = await generateVideos(targetReels);
    }

    if (step === 'all' || step === 'compose') {
      await composeReels(targetReels);
    }

    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    const totalCost = costs.narration + costs.music + costs.video;

    console.log('');
    console.log('═══════════════════════════════════════════════');
    console.log('  RESULTADO WAVE 1');
    console.log('═══════════════════════════════════════════════');
    console.log(`  ⏱️  Tempo total: ${elapsed} min`);
    console.log(`  💰 Custo total: $${totalCost.toFixed(3)}`);
    console.log(`     Narração: $${costs.narration.toFixed(3)}`);
    console.log(`     Música: $${costs.music.toFixed(3)}`);
    console.log(`     Vídeo: $${costs.video.toFixed(3)}`);
    console.log('');

    // Check what was generated
    for (const reel of targetReels) {
      const dir = path.join(BASE_DIR, reel.id);
      const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
      const finalExists = files.includes('final.mp4');
      console.log(`  ${finalExists ? '✅' : '⚠️ '} ${reel.name}: ${files.join(', ') || 'vazio'}`);
    }

    console.log('');
    console.log('═══════════════════════════════════════════════');
  } catch (err) {
    console.error(`\n❌ ERRO FATAL: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
}

main();
