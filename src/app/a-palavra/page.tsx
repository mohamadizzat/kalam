import Link from 'next/link'
import { surahs } from '@/lib/data/surahs'

export default function APalavraPage() {
  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }} className="px-6 py-8">
      {/* Header */}
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: '#F0EBE2' }}>
        A Palavra
      </h1>
      <p style={{ color: '#B3B0A6', fontSize: '15px', marginTop: '8px', marginBottom: '32px' }}>
        114 suratas. 6.236 versículos. A Palavra de Deus preservada.
      </p>

      {/* Surah grid */}
      <div className="grid gap-2">
        {surahs.map(surah => (
          <Link
            href={`/a-palavra/${surah.number}`}
            key={surah.number}
            className="card-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '12px',
              background: '#161220',
              border: '1px solid #272230',
              textDecoration: 'none',
              gap: '16px',
            }}
          >
            {/* Number circle */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #272230',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#C9A84C',
              fontWeight: 600,
              flexShrink: 0,
            }}>
              {surah.number}
            </div>
            {/* Info */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '16px', color: '#F0EBE2', fontWeight: 500 }}>{surah.name}</p>
              <p style={{ fontSize: '13px', color: '#7A7870' }}>{surah.translation} · {surah.versesCount} versículos</p>
            </div>
            {/* Arabic name */}
            <p style={{ fontFamily: 'var(--font-arabic)', fontSize: '20px', color: '#C9A84C', direction: 'rtl' }}>
              {surah.arabicName}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
