import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 14, 30, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#FFFFFF',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ color: '#2563EB' }}>K</span>azi{' '}
          <span style={{ color: '#2563EB' }}>Z</span>unaid
        </Link>

        {/* Desktop nav */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          alignItems: 'center',
        }} className="desktop-nav">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="nav-active"
                offset={-80}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#C8D2E6',
                  cursor: 'pointer',
                  padding: '0.25rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  letterSpacing: '0.03em',
                }}
                className="nav-link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="hamburger"
          style={{
            background: 'none',
            color: '#FFFFFF',
            display: 'none',
            padding: '0.5rem',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          background: 'rgba(10, 14, 30, 0.98)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(37, 99, 235, 0.2)',
          padding: '1rem 2rem 1.5rem',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#C8D2E6',
                    padding: '0.5rem 0',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(37, 99, 235, 0.1)',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: #60A5FA !important; border-bottom-color: #2563EB !important; }
        .nav-active { color: #2563EB !important; border-bottom-color: #2563EB !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
