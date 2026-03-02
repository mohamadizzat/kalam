'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════
// KALAM — Reusable Ambient Audio Hook (extracted from ContemplativeCompanion)
// Web Audio API noise generation for immersive experiences
// ═══════════════════════════════════════════════════════════════

export type NoiseType = 'brown' | 'pink' | 'white'

export interface AmbientPreset {
  id: string
  name: string
  icon: string
  noiseType: NoiseType
  filterFreq: number
  defaultVolume: number
}

export const AMBIENT_PRESETS: AmbientPreset[] = [
  { id: 'rain', name: 'Chuva Suave', icon: '🌧', noiseType: 'brown', filterFreq: 800, defaultVolume: 0.3 },
  { id: 'night', name: 'Noite Calma', icon: '🌙', noiseType: 'brown', filterFreq: 200, defaultVolume: 0.2 },
  { id: 'silence', name: 'Silencio', icon: '🤫', noiseType: 'brown', filterFreq: 0, defaultVolume: 0 },
  { id: 'forest', name: 'Floresta', icon: '🌿', noiseType: 'pink', filterFreq: 4000, defaultVolume: 0.25 },
]

interface NoiseNodes {
  source: AudioBufferSourceNode
  filter: BiquadFilterNode
  gain: GainNode
}

export function useAmbientAudio() {
  const ctxRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<NoiseNodes | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.3)
  const [activePreset, setActivePreset] = useState<string>('rain')

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctxRef.current = new AudioCtx()
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume()
    }
    return ctxRef.current
  }, [])

  const createNoise = useCallback((type: NoiseType, filterFreq: number): NoiseNodes => {
    const ctx = getCtx()
    const bufferSize = 2 * ctx.sampleRate
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const output = buffer.getChannelData(0)

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      if (type === 'brown') {
        output[i] = (b6 + 0.02 * white) / 1.02
        b6 = output[i]
        output[i] *= 3.5
      } else if (type === 'pink') {
        b0 = 0.99886 * b0 + white * 0.0555179
        b1 = 0.99332 * b1 + white * 0.0750759
        b2 = 0.96900 * b2 + white * 0.1538520
        b3 = 0.86650 * b3 + white * 0.3104856
        b4 = 0.55000 * b4 + white * 0.5329522
        b5 = -0.7616 * b5 - white * 0.0168980
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
        b6 = white * 0.115926
      } else {
        output[i] = white
      }
    }

    const source = ctx.createBufferSource()
    source.buffer = buffer
    source.loop = true

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = filterFreq
    filter.Q.value = 0.7

    const gain = ctx.createGain()
    gain.gain.value = 0

    source.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    source.start()

    return { source, filter, gain }
  }, [getCtx])

  const stop = useCallback(() => {
    const nodes = nodesRef.current
    if (nodes) {
      try {
        nodes.gain.gain.setTargetAtTime(0, ctxRef.current?.currentTime || 0, 0.5)
        setTimeout(() => { try { nodes.source.stop() } catch {} }, 1000)
      } catch {}
    }
    nodesRef.current = null
    setIsPlaying(false)
  }, [])

  const play = useCallback((presetId?: string) => {
    stop()
    const preset = AMBIENT_PRESETS.find(p => p.id === (presetId || activePreset))
    if (!preset || preset.filterFreq === 0) return

    const noise = createNoise(preset.noiseType, preset.filterFreq)
    const ctx = getCtx()
    const vol = presetId ? preset.defaultVolume : volume
    noise.gain.gain.setTargetAtTime(vol * 0.4, ctx.currentTime, 2)
    nodesRef.current = noise
    setActivePreset(preset.id)
    setVolumeState(vol)
    setIsPlaying(true)
  }, [stop, activePreset, volume, createNoise, getCtx])

  const setVolume = useCallback((vol: number) => {
    setVolumeState(vol)
    const ctx = ctxRef.current
    const nodes = nodesRef.current
    if (ctx && nodes) {
      nodes.gain.gain.setTargetAtTime(vol * 0.4, ctx.currentTime, 0.3)
    }
  }, [])

  const switchPreset = useCallback((presetId: string) => {
    setActivePreset(presetId)
    if (isPlaying) {
      play(presetId)
    }
  }, [isPlaying, play])

  useEffect(() => {
    return () => { stop() }
  }, [stop])

  return { isPlaying, volume, activePreset, play, stop, setVolume, switchPreset }
}
