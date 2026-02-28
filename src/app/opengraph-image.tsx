import { ImageResponse } from 'next/og'

export const alt = 'KALAM — Deus. Todo dia.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D0B12',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial glow behind text */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Main title */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 800,
            color: '#C9A84C',
            letterSpacing: '16px',
            display: 'flex',
          }}
        >
          KALAM
        </div>

        {/* Divider line */}
        <div
          style={{
            width: '80px',
            height: '2px',
            backgroundColor: '#C9A84C',
            margin: '24px 0',
            opacity: 0.6,
            display: 'flex',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#F0EBE2',
            fontWeight: 400,
            letterSpacing: '6px',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          Deus. Todo dia.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
