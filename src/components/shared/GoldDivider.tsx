export function GoldDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: '48px 0',
    }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #C9A84C33, #C9A84C66)' }} />
      <span style={{ fontFamily: "var(--font-arabic)", color: '#C9A84C', fontSize: 18, opacity: 0.6 }}>
        ﷽
      </span>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #C9A84C33, #C9A84C66)' }} />
    </div>
  );
}
