'use client'

import { useState, useEffect } from 'react'

const SAO_PAULO = { lat: -23.5505, lng: -46.6333, city: 'São Paulo' }

interface LocationState {
  lat: number
  lng: number
  city: string
  loading: boolean
  error: string | null
}

export function useLocation() {
  const [state, setState] = useState<LocationState>({
    lat: SAO_PAULO.lat,
    lng: SAO_PAULO.lng,
    city: SAO_PAULO.city,
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((s) => ({ ...s, loading: false }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        const city = await reverseGeocode(latitude, longitude)
        setState({ lat: latitude, lng: longitude, city, loading: false, error: null })
      },
      () => {
        // Permission denied — fallback São Paulo
        setState((s) => ({ ...s, loading: false }))
      },
      { timeout: 8000 }
    )
  }, [])

  return state
}

async function reverseGeocode(lat: number, lng: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10`,
      { headers: { 'Accept-Language': 'pt-BR' } }
    )
    if (!res.ok) return SAO_PAULO.city
    const data = await res.json()
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.municipality ||
      data.address?.state ||
      SAO_PAULO.city
    )
  } catch {
    return SAO_PAULO.city
  }
}
