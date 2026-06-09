import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Team Members Led' },
  { value: 'UK · US', label: 'Markets' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
      }}
    >
      {/* Geometric background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Large faint circle top-right */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(37, 99, 235, 0.12)',
          boxShadow: 'inset 0 0 120px rgba(37, 99, 235, 0.04)',
        }} />
        <div style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(37, 99, 235, 0.08)',
        }} />
        {/* Diagonal grid lines */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="diag" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#60A5FA" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="60" y2="0" stroke="#60A5FA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center bottom, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(37, 99, 235, 0.12)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            color: '#60A5FA',
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            marginBottom: '2rem',
          }}>
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '900',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            marginBottom: '0.1em',
          }}
        >
          KAZI ZUNAID
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '900',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            color: '#2563EB',
            marginBottom: '1.5rem',
          }}
        >
          BIN ZAKARIA
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#C8D2E6',
            fontWeight: '400',
            letterSpacing: '0.04em',
            marginBottom: '3rem',
          }}
        >
          Sales Professional &nbsp;·&nbsp; B2B &amp; B2C &nbsp;·&nbsp; UK &amp; US Markets
        </motion.p>

        {/* Stat cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: 'rgba(15, 22, 41, 0.8)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: '12px',
                padding: '1.25rem 2rem',
                minWidth: '150px',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              className="stat-card"
            >
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: '#2563EB' }}>{value}</div>
              <div style={{ fontSize: '0.8rem', color: '#C8D2E6', fontWeight: '500', marginTop: '0.25rem', letterSpacing: '0.05em' }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="experience" smooth={true} duration={600} offset={-80}>
            <button
              style={{
                background: '#2563EB',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '600',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                border: '2px solid #2563EB',
                letterSpacing: '0.03em',
                transition: 'background 0.2s, transform 0.15s',
                cursor: 'pointer',
              }}
              className="btn-primary"
            >
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={600} offset={-80}>
            <button
              style={{
                background: 'transparent',
                color: '#60A5FA',
                fontSize: '0.95rem',
                fontWeight: '600',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                border: '2px solid #2563EB',
                letterSpacing: '0.03em',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
                cursor: 'pointer',
              }}
              className="btn-outline"
            >
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ marginTop: '5rem', color: '#C8D2E6', opacity: 0.6 }}
        >
          <ArrowDown size={20} style={{ margin: '0 auto' }} />
        </motion.div>
      </div>

      <style>{`
        .stat-card:hover { border-color: rgba(37, 99, 235, 0.6) !important; transform: translateY(-3px); }
        .btn-primary:hover { background: #1d4ed8 !important; transform: translateY(-2px); }
        .btn-outline:hover { background: rgba(37, 99, 235, 0.1) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  )
}
