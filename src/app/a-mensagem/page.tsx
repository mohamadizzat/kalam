export default function AMensagemPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 80,
    }}>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 11, letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.5)',
        marginBottom: 24,
      }}>
        EM BREVE
      </p>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 40, fontWeight: 600,
        color: '#F5F5F0',
        marginBottom: 16,
      }}>
        A Mensagem
      </h1>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 16, color: '#8A8A7A',
      }}>
        Esta seção está sendo construída.
      </p>
    </div>
  )
}
