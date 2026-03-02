#!/usr/bin/env node
'use strict';

/**
 * Generate ambient pad music using ffmpeg synthesis
 * Creates atmospheric pads for each reel type
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE_DIR = '/Users/mohamadizzat/Desktop/kalam/reels';

const AMBIENT_CONFIGS = [
  {
    id: 'reel-01-kun',
    name: 'Contemplative Dark Pad',
    duration: 25,
    // Deep drone + high shimmer — ethereal, sacred
    filter: [
      'anoisesrc=d=25:a=0.008:c=pink',
      'highpass=f=60,lowpass=f=300',
      'aecho=0.8:0.88:600:0.4',
      'aecho=0.8:0.85:1200:0.25',
      'afade=t=in:d=3,afade=t=out:st=22:d=3',
      'volume=0.4',
    ],
  },
  {
    id: 'reel-02-maria',
    name: 'Tension to Resolution',
    duration: 35,
    // Warmer tone, slight tension building
    filter: [
      'anoisesrc=d=35:a=0.01:c=pink',
      'highpass=f=80,lowpass=f=400',
      'aecho=0.8:0.9:400:0.35',
      'aecho=0.8:0.85:800:0.2',
      'afade=t=in:d=2,afade=t=out:st=32:d=3',
      'volume=0.35',
    ],
  },
  {
    id: 'reel-03-ar-rahman',
    name: 'Peaceful Sacred Pad',
    duration: 25,
    // Warm, bright, peaceful
    filter: [
      'anoisesrc=d=25:a=0.006:c=pink',
      'highpass=f=100,lowpass=f=500',
      'aecho=0.8:0.92:700:0.45',
      'aecho=0.8:0.88:1400:0.3',
      'afade=t=in:d=3,afade=t=out:st=22:d=3',
      'volume=0.35',
    ],
  },
  {
    id: 'reel-04-hadith',
    name: 'Desert Wind Ambient',
    duration: 35,
    // Warm, airy, desert-like
    filter: [
      'anoisesrc=d=35:a=0.012:c=pink',
      'highpass=f=50,lowpass=f=250',
      'aecho=0.8:0.85:500:0.3',
      'aecho=0.8:0.82:1000:0.2',
      'afade=t=in:d=2,afade=t=out:st=32:d=3',
      'volume=0.45',
    ],
  },
  {
    id: 'reel-05-abraao',
    name: 'Epic Cinematic Pad',
    duration: 45,
    // Deeper, more dramatic
    filter: [
      'anoisesrc=d=45:a=0.015:c=pink',
      'highpass=f=40,lowpass=f=350',
      'aecho=0.8:0.9:500:0.4',
      'aecho=0.8:0.87:1000:0.3',
      'aecho=0.8:0.83:2000:0.15',
      'afade=t=in:d=3,afade=t=out:st=41:d=4',
      'volume=0.4',
    ],
  },
];

for (const cfg of AMBIENT_CONFIGS) {
  const dir = path.join(BASE_DIR, cfg.id);
  const output = path.join(dir, 'music.mp3');

  if (fs.existsSync(output) && fs.statSync(output).size > 5000) {
    console.log(`⏭️  ${cfg.id}: music.mp3 already exists`);
    continue;
  }

  console.log(`🎵 ${cfg.id}: Generating ${cfg.name} (${cfg.duration}s)...`);

  // Build ffmpeg filter chain
  const filterChain = cfg.filter.join(',');
  const cmd = `ffmpeg -y -f lavfi -i "${filterChain}" -c:a libmp3lame -b:a 192k "${output}" 2>&1`;

  try {
    execSync(cmd, { timeout: 30000 });
    const size = (fs.statSync(output).size / 1024).toFixed(0);
    console.log(`✅ ${cfg.id}: music.mp3 (${size}KB)`);
  } catch (err) {
    console.log(`❌ ${cfg.id}: Failed — trying simpler filter...`);
    // Fallback: simpler ambient
    const simpleCmd = `ffmpeg -y -f lavfi -i "anoisesrc=d=${cfg.duration}:a=0.008:c=pink,highpass=f=60,lowpass=f=300,aecho=0.8:0.9:600:0.35,afade=t=in:d=2,afade=t=out:st=${cfg.duration - 3}:d=3,volume=0.35" -c:a libmp3lame -b:a 192k "${output}" 2>&1`;
    try {
      execSync(simpleCmd, { timeout: 30000 });
      console.log(`✅ ${cfg.id}: music.mp3 (fallback)`);
    } catch (err2) {
      console.log(`❌ ${cfg.id}: Both attempts failed`);
    }
  }
}

console.log('\n🎵 Ambient generation complete.');
