'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Timer,
  X,
  Wind,
} from 'lucide-react'

// ── Types ──

type ContemplativeVerse = {
  arabic: string
  translation: string
  surahRef: string
  theme: string
}

// ── 40 Curated Contemplative Verses ──

const VERSES: ContemplativeVerse[] = [
  // Divine Beauty
  {
    arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ',
    translation: 'Deus e a Luz dos ceus e da terra.',
    surahRef: 'An-Nur 24:35',
    theme: 'luz',
  },
  {
    arabic: 'وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ',
    translation: 'A Deus pertencem o Oriente e o Ocidente. Para onde quer que vos volteis, la esta a Face de Deus.',
    surahRef: 'Al-Baqarah 2:115',
    theme: 'beleza divina',
  },
  {
    arabic: 'هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ',
    translation: 'Ele e o Primeiro e o Ultimo, o Manifesto e o Oculto.',
    surahRef: 'Al-Hadid 57:3',
    theme: 'nomes divinos',
  },
  {
    arabic: 'كُلُّ مَنْ عَلَيْهَا فَانٍ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ',
    translation: 'Tudo o que esta sobre ela perecera, mas permanecera a Face do teu Senhor, pleno de Majestade e Honra.',
    surahRef: 'Ar-Rahman 55:26-27',
    theme: 'beleza divina',
  },
  // Nature
  {
    arabic: 'وَفِي الْأَرْضِ آيَاتٌ لِلْمُوقِنِينَ وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ',
    translation: 'Na terra ha sinais para os que tem certeza, e em vos mesmos. Nao percebeis?',
    surahRef: 'Adh-Dhariyat 51:20-21',
    theme: 'natureza',
  },
  {
    arabic: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ',
    translation: 'Na criacao dos ceus e da terra e na alternancia da noite e do dia ha sinais para os dotados de entendimento.',
    surahRef: 'Ali Imran 3:190',
    theme: 'natureza',
  },
  {
    arabic: 'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',
    translation: 'E entre os Seus sinais esta a criacao dos ceus e da terra, e a diversidade de vossas linguas e cores.',
    surahRef: 'Ar-Rum 30:22',
    theme: 'natureza',
  },
  {
    arabic: 'أَلَمْ تَرَ أَنَّ اللَّهَ يُسَبِّحُ لَهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ وَالطَّيْرُ صَافَّاتٍ',
    translation: 'Nao ves que tudo nos ceus e na terra glorifica a Deus, e os passaros com asas abertas?',
    surahRef: 'An-Nur 24:41',
    theme: 'natureza',
  },
  // Cosmos
  {
    arabic: 'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ',
    translation: 'E o ceu, Nos o construimos com poder, e continuamos a expandi-lo.',
    surahRef: 'Adh-Dhariyat 51:47',
    theme: 'cosmos',
  },
  {
    arabic: 'أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا',
    translation: 'Nao olham para o ceu acima deles, como o construimos e o adornamos?',
    surahRef: 'Qaf 50:6',
    theme: 'cosmos',
  },
  {
    arabic: 'فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ',
    translation: 'Juro pelas posicoes das estrelas — e e um juramento grandioso, se soubesseis.',
    surahRef: 'Al-Waqi\'ah 56:75-76',
    theme: 'cosmos',
  },
  {
    arabic: 'وَهُوَ الَّذِي جَعَلَ لَكُمُ النُّجُومَ لِتَهْتَدُوا بِهَا فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ',
    translation: 'E Ele e quem fez as estrelas para que vos guieis por elas nas trevas da terra e do mar.',
    surahRef: 'Al-An\'am 6:97',
    theme: 'cosmos',
  },
  // Inner Peace
  {
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Nao e com a lembranca de Deus que os coracoes encontram serenidade?',
    surahRef: 'Ar-Ra\'d 13:28',
    theme: 'paz interior',
  },
  {
    arabic: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً',
    translation: 'Oh alma serena! Retorna ao teu Senhor, satisfeita e aceita.',
    surahRef: 'Al-Fajr 89:27-28',
    theme: 'paz interior',
  },
  {
    arabic: 'وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ',
    translation: 'Deus nao os castigaria enquanto estivesses entre eles, nem os castigaria enquanto pedissem perdao.',
    surahRef: 'Al-Anfal 8:33',
    theme: 'paz interior',
  },
  {
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Pois com a dificuldade vem a facilidade. Sim, com a dificuldade vem a facilidade.',
    surahRef: 'Ash-Sharh 94:5-6',
    theme: 'paz interior',
  },
  {
    arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
    translation: 'E Nos estamos mais perto dele do que sua veia jugular.',
    surahRef: 'Qaf 50:16',
    theme: 'paz interior',
  },
  // Divine Names
  {
    arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
    translation: 'Ele e Deus, alem de quem nao ha divindade, Conhecedor do invisivel e do visivel. Ele e o Misericordioso, o Compassivo.',
    surahRef: 'Al-Hashr 59:22',
    theme: 'nomes divinos',
  },
  {
    arabic: 'هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ',
    translation: 'Ele e Deus, o Criador, o Originador, o Modelador. A Ele pertencem os Mais Belos Nomes.',
    surahRef: 'Al-Hashr 59:24',
    theme: 'nomes divinos',
  },
  {
    arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
    translation: 'E a Deus pertencem os Mais Belos Nomes, entao invocai-O por eles.',
    surahRef: 'Al-A\'raf 7:180',
    theme: 'nomes divinos',
  },
  {
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    translation: 'Deus! Nao ha divindade alem Dele, o Vivo, o Sustentador de toda a existencia.',
    surahRef: 'Al-Baqarah 2:255',
    theme: 'nomes divinos',
  },
  // Light
  {
    arabic: 'مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ',
    translation: 'A parabola da Sua luz e como um nicho em que ha uma lampada.',
    surahRef: 'An-Nur 24:35',
    theme: 'luz',
  },
  {
    arabic: 'يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ',
    translation: 'Deus guia para a Sua luz quem Ele deseja.',
    surahRef: 'An-Nur 24:35',
    theme: 'luz',
  },
  {
    arabic: 'وَأَشْرَقَتِ الْأَرْضُ بِنُورِ رَبِّهَا',
    translation: 'E a terra resplandecera com a luz do seu Senhor.',
    surahRef: 'Az-Zumar 39:69',
    theme: 'luz',
  },
  {
    arabic: 'يُرِيدُونَ أَن يُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَيَأْبَى اللَّهُ إِلَّا أَن يُتِمَّ نُورَهُ',
    translation: 'Querem apagar a luz de Deus com suas bocas, mas Deus recusa-se a senao completar a Sua luz.',
    surahRef: 'At-Tawbah 9:32',
    theme: 'luz',
  },
  // Creation
  {
    arabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ',
    translation: 'Nos criamos o ser humano e sabemos o que sua alma lhe sussurra.',
    surahRef: 'Qaf 50:16',
    theme: 'criacao',
  },
  {
    arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
    translation: 'Criamos o ser humano na mais bela forma.',
    surahRef: 'At-Tin 95:4',
    theme: 'criacao',
  },
  {
    arabic: 'وَنَفَخْتُ فِيهِ مِن رُّوحِي',
    translation: 'E soprei nele do Meu espirito.',
    surahRef: 'Al-Hijr 15:29',
    theme: 'criacao',
  },
  {
    arabic: 'خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ تَعَالَىٰ عَمَّا يُشْرِكُونَ',
    translation: 'Ele criou os ceus e a terra com a verdade. Exaltado seja acima do que Lhe associam.',
    surahRef: 'An-Nahl 16:3',
    theme: 'criacao',
  },
  {
    arabic: 'أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ ثُمَّ يُعِيدُهُ',
    translation: 'Nao viram como Deus origina a criacao e depois a reproduz?',
    surahRef: 'Al-Ankabut 29:19',
    theme: 'criacao',
  },
  // Mercy
  {
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'Em nome de Deus, o Misericordioso, o Compassivo.',
    surahRef: 'Al-Fatihah 1:1',
    theme: 'misericordia',
  },
  {
    arabic: 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ',
    translation: 'E a Minha misericordia abrange todas as coisas.',
    surahRef: 'Al-A\'raf 7:156',
    theme: 'misericordia',
  },
  {
    arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
    translation: 'Dize: Oh servos Meus que excederam contra si mesmos, nao desespereis da misericordia de Deus.',
    surahRef: 'Az-Zumar 39:53',
    theme: 'misericordia',
  },
  {
    arabic: 'كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ',
    translation: 'Vosso Senhor prescreveu para Si mesmo a misericordia.',
    surahRef: 'Al-An\'am 6:54',
    theme: 'misericordia',
  },
  {
    arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
    translation: 'E quando Meus servos te perguntarem sobre Mim, dize: Estou proximo. Respondo ao apelo de quem Me invoca.',
    surahRef: 'Al-Baqarah 2:186',
    theme: 'misericordia',
  },
  // More divine beauty & spiritual depth
  {
    arabic: 'سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ',
    translation: 'Glorificado seja Aquele que criou todos os pares: do que a terra produz, de vos mesmos, e daquilo que nao conheceis.',
    surahRef: 'Ya-Sin 36:36',
    theme: 'criacao',
  },
  {
    arabic: 'وَالْفَجْرِ وَلَيَالٍ عَشْرٍ',
    translation: 'Pela aurora, e pelas dez noites.',
    surahRef: 'Al-Fajr 89:1-2',
    theme: 'cosmos',
  },
  {
    arabic: 'وَالشَّمْسِ وَضُحَاهَا وَالْقَمَرِ إِذَا تَلَاهَا',
    translation: 'Pelo sol e seu esplendor, e pela lua quando o segue.',
    surahRef: 'Ash-Shams 91:1-2',
    theme: 'cosmos',
  },
  {
    arabic: 'وَاللَّيْلِ إِذَا يَغْشَىٰ وَالنَّهَارِ إِذَا تَجَلَّىٰ',
    translation: 'Pela noite quando envolve, e pelo dia quando se revela.',
    surahRef: 'Al-Layl 92:1-2',
    theme: 'cosmos',
  },
  {
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
    translation: 'Meu Senhor, expande meu peito e facilita meu caminho.',
    surahRef: 'Ta-Ha 20:25-26',
    theme: 'paz interior',
  },
]

// ── Timer Options ──

type TimerOption = { label: string; seconds: number | null }

const TIMER_OPTIONS: TimerOption[] = [
  { label: '15s', seconds: 15 },
  { label: '30s', seconds: 30 },
  { label: '60s', seconds: 60 },
  { label: 'Manual', seconds: null },
]

// ── Breathing Phases ──

const BREATH_PHASES = [
  { label: 'Inspire', duration: 4000 },
  { label: 'Segure', duration: 4000 },
  { label: 'Expire', duration: 4000 },
]

// ── Component ──

export function ContemplativeClient() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timerOption, setTimerOption] = useState(1) // index into TIMER_OPTIONS, default 30s
  const [isPaused, setIsPaused] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showBreathing, setShowBreathing] = useState(false)
  const [showTimerPicker, setShowTimerPicker] = useState(false)
  const [sessionStart] = useState(Date.now())
  const [sessionTime, setSessionTime] = useState('0:00')
  const [breathPhase, setBreathPhase] = useState(0)
  const [breathProgress, setBreathProgress] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const verse = VERSES[currentIndex]
  const timer = TIMER_OPTIONS[timerOption]

  // ── Session Timer ──
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 1000)
      const mins = Math.floor(elapsed / 60)
      const secs = elapsed % 60
      setSessionTime(`${mins}:${secs.toString().padStart(2, '0')}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [sessionStart])

  // ── Auto-advance ──
  useEffect(() => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current)
      autoAdvanceRef.current = null
    }

    if (timer.seconds && !isPaused) {
      autoAdvanceRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex(prev => (prev + 1) % VERSES.length)
      }, timer.seconds * 1000)
    }

    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current)
    }
  }, [timer.seconds, isPaused, timerOption])

  // ── Breathing Animation ──
  useEffect(() => {
    if (!showBreathing) return

    let phase = 0
    let animFrame: number
    let startTime = Date.now()

    const tick = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const phaseDuration = BREATH_PHASES[phase].duration

      if (elapsed >= phaseDuration) {
        phase = (phase + 1) % BREATH_PHASES.length
        startTime = now
        setBreathPhase(phase)
        setBreathProgress(0)
      } else {
        setBreathProgress(elapsed / phaseDuration)
      }

      animFrame = requestAnimationFrame(tick)
    }

    setBreathPhase(0)
    setBreathProgress(0)
    animFrame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(animFrame)
  }, [showBreathing])

  // ── Hide controls after idle ──
  const scheduleHideControls = useCallback(() => {
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false)
      setShowTimerPicker(false)
    }, 4000)
  }, [])

  useEffect(() => {
    if (showControls) {
      scheduleHideControls()
    }
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    }
  }, [showControls, scheduleHideControls])

  // ── Handlers ──

  const handleTap = useCallback(() => {
    setShowControls(prev => !prev)
    setShowTimerPicker(false)
  }, [])

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + VERSES.length) % VERSES.length)
    scheduleHideControls()
  }, [scheduleHideControls])

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % VERSES.length)
    scheduleHideControls()
  }, [scheduleHideControls])

  const handleTogglePause = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPaused(prev => !prev)
    scheduleHideControls()
  }, [scheduleHideControls])

  const handleTimerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setShowTimerPicker(prev => !prev)
    scheduleHideControls()
  }, [scheduleHideControls])

  const handleTimerSelect = useCallback((index: number) => {
    setTimerOption(index)
    setShowTimerPicker(false)
    scheduleHideControls()
  }, [scheduleHideControls])

  const handleToggleBreathing = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setShowBreathing(prev => !prev)
    scheduleHideControls()
  }, [scheduleHideControls])

  // ── Breathing circle scale ──
  const getBreathScale = () => {
    if (!showBreathing) return 1
    const phase = BREATH_PHASES[breathPhase]
    if (phase.label === 'Inspire') return 1 + breathProgress * 0.3
    if (phase.label === 'Segure') return 1.3
    if (phase.label === 'Expire') return 1.3 - breathProgress * 0.3
    return 1
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        background: '#080610',
      }}
    >
      {/* ── Ambient Gradient Background ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Gradient orb 1 */}
        <div
          className="contemplative-orb-1"
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 60, 140, 0.12) 0%, transparent 70%)',
            top: '-20%',
            left: '-15%',
            filter: 'blur(80px)',
          }}
        />
        {/* Gradient orb 2 */}
        <div
          className="contemplative-orb-2"
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-10%',
            filter: 'blur(80px)',
          }}
        />
        {/* Gradient orb 3 */}
        <div
          className="contemplative-orb-3"
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(80, 50, 120, 0.08) 0%, transparent 70%)',
            top: '40%',
            right: '30%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* ── Animated gradient CSS ── */}
      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, 20px); }
          66% { transform: translate(-20px, 30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-25px, -15px); }
          66% { transform: translate(15px, -25px); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -20px); }
          66% { transform: translate(-15px, 15px); }
        }
        .contemplative-orb-1 { animation: orbFloat1 20s ease-in-out infinite; }
        .contemplative-orb-2 { animation: orbFloat2 25s ease-in-out infinite; }
        .contemplative-orb-3 { animation: orbFloat3 18s ease-in-out infinite; }
      `}</style>

      {/* ── Top bar (session time + close) ── */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              paddingTop: 'max(20px, env(safe-area-inset-top))',
              zIndex: 20,
            }}
          >
            <span style={{
              fontSize: '13px',
              color: '#7A7870',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.05em',
            }}>
              {sessionTime}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.history.back()
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#7A7870',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main tappable area ── */}
      <div
        onClick={handleTap}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '80px 32px 160px',
          zIndex: 10,
        }}
      >
        {/* ── Breathing Circle ── */}
        <AnimatePresence>
          {showBreathing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `scale(${getBreathScale()})`,
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'rgba(201, 168, 76, 0.4)',
                  }}
                />
              </div>
              <p style={{
                fontSize: '12px',
                color: '#7A7870',
                marginTop: '16px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
              }}>
                {BREATH_PHASES[breathPhase].label}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Verse Display ── */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textAlign: 'center',
              maxWidth: '640px',
              position: 'relative',
              zIndex: 5,
            }}
          >
            {/* Arabic */}
            <p style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: 'clamp(32px, 7vw, 56px)',
              lineHeight: 1.6,
              color: '#C9A84C',
              direction: 'rtl',
              marginBottom: '32px',
              textShadow: '0 0 60px rgba(201, 168, 76, 0.15)',
            }}>
              {verse.arabic}
            </p>

            {/* Translation */}
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(16px, 3vw, 22px)',
              lineHeight: 1.7,
              color: '#F0EBE2',
              opacity: 0.85,
              marginBottom: '24px',
              fontWeight: 400,
              fontStyle: 'italic',
            }}>
              {verse.translation}
            </p>

            {/* Surah Reference */}
            <p style={{
              fontSize: '13px',
              color: '#7A7870',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.04em',
            }}>
              {verse.surahRef}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Verse counter (subtle) ── */}
        <div style={{
          position: 'absolute',
          bottom: '170px',
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}>
          {Array.from({ length: Math.min(VERSES.length, 40) }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === currentIndex ? '12px' : '3px',
                height: '3px',
                borderRadius: '2px',
                background: i === currentIndex ? '#C9A84C' : 'rgba(122, 120, 112, 0.3)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Controls ── */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px',
              paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Timer Picker (popover) */}
            <AnimatePresence>
              {showTimerPicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    background: 'rgba(22, 18, 32, 0.9)',
                    border: '1px solid rgba(39, 34, 48, 0.8)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {TIMER_OPTIONS.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => handleTimerSelect(i)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: 'none',
                        background: i === timerOption ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                        color: i === timerOption ? '#C9A84C' : '#7A7870',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Control buttons */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              {/* Breathing toggle */}
              <button
                onClick={handleToggleBreathing}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: showBreathing ? '#C9A84C' : '#7A7870',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.3s ease',
                }}
                aria-label="Guia de respiracao"
              >
                <Wind size={18} />
              </button>

              {/* Previous */}
              <button
                onClick={handlePrev}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#7A7870',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Versiculo anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Play / Pause */}
              <button
                onClick={handleTogglePause}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 168, 76, 0.1)',
                  border: '1px solid rgba(201, 168, 76, 0.25)',
                  cursor: 'pointer',
                  color: '#C9A84C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                aria-label={isPaused ? 'Continuar' : 'Pausar'}
              >
                {isPaused || !timer.seconds ? <Play size={18} /> : <Pause size={18} />}
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#7A7870',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Proximo versiculo"
              >
                <ChevronRight size={20} />
              </button>

              {/* Timer selector */}
              <button
                onClick={handleTimerClick}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: showTimerPicker ? '#C9A84C' : '#7A7870',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  transition: 'color 0.3s ease',
                }}
                aria-label="Intervalo"
              >
                <Timer size={18} />
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  color: 'inherit',
                }}>
                  {timer.label}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
