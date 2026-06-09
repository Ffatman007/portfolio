export default function Footer() {
  return (
    <footer style={{
      borderTop: '2px solid #2563EB',
      background: 'rgba(10, 14, 30, 0.95)',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <span style={{ color: '#C8D2E6', fontSize: '0.85rem' }}>
          © 2026 Kazi Zunaid Bin Zakaria
        </span>
        <span style={{ color: '#60A5FA', fontSize: '0.8rem', fontWeight: '500' }}>
          Built with React
        </span>
        <span style={{ color: '#C8D2E6', fontSize: '0.85rem' }}>
          Dhaka, Bangladesh
        </span>
      </div>
    </footer>
  )
}
