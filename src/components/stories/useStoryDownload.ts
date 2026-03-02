'use client'

import { useCallback } from 'react'
import type { RefObject } from 'react'

export function useStoryDownload() {
  const downloadStory = useCallback(async (ref: RefObject<HTMLDivElement | null>, filename: string) => {
    const el = ref.current
    if (!el) return

    const { default: html2canvas } = await import('html2canvas')
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      width: el.offsetWidth,
      height: el.offsetHeight,
    })

    const link = document.createElement('a')
    link.download = `${filename}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [])

  const shareStory = useCallback(async (ref: RefObject<HTMLDivElement | null>, text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'KALAM', text })
        return
      } catch (err) {
        if ((err as DOMException).name === 'AbortError') return
      }
    }

    // Fallback: clipboard
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
  }, [])

  return { downloadStory, shareStory }
}
