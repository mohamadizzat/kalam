import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{
      background: '#0D0B12',
      borderTop: '1px solid rgba(201,168,76,0.08)',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 32, color: 'rgba(201,168,76,0.3)' }}>
          كلام
        </span>
      </div>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 13,
        color: '#7A7870',
        letterSpacing: '0.5px',
        marginBottom: 16,
      }}>
        A mensagem original. Preservada por 1.400 anos.
      </p>
      <p style={{ fontSize: 11, color: '#272230', letterSpacing: '1px', textTransform: 'uppercase' }}>
        © {new Date().getFullYear()} Kalam Brasil
      </p>
    </footer>
  )
}
