import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '£80K+', label: 'Monthly Team Revenue Led' },
  { value: '20+', label: 'Sales Professionals Built & Trained' },
  { value: '3', label: 'Brands Built or Grown' },
  { value: '4+', label: 'Years Across UK & US Markets' },
]

function StatItem({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', padding: '0 1.5rem' }}
    >
      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#2563EB', lineHeight: 1.1 }}>{stat.value}</div>
      <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '500', marginTop: '0.6rem', letterSpacing: '0.04em' }}>{stat.label}</div>
    </motion.div>
  )
}

export default function NumbersBanner() {
  return (
    <section style={{
      background: '#0A0E1E',
      borderTop: '2px solid #2563EB',
      borderBottom: '2px solid #2563EB',
      padding: '4.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        justifyItems: 'center',
      }} className="numbers-grid">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .numbers-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
