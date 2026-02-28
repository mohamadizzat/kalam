'use client'

import { useEffect, useRef, useState } from 'react'

interface NumberTickerProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function NumberTicker({ value, suffix = '', prefix = '', duration = 2000, decimals = 0 }: NumberTickerProps) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()

          function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const easedProgress = easeOut(progress)
            setCurrent(easedProgress * value)
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  const display = decimals > 0
    ? current.toFixed(decimals)
    : Math.round(current).toLocaleString('pt-BR')

  return (
    <span ref={ref} style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: 48,
      fontWeight: 600,
      color: '#C9A84C',
      lineHeight: 1,
    }}>
      {prefix}{display}{suffix}
    </span>
  )
}
