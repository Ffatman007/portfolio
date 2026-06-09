import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXPERIENCE = [
  {
    title: 'Business Development Lead',
    company: 'Total Outsourcing (UK Market)',
    sub: 'Oakwood24 · Workforce100 · Tailored2U',
    dates: 'November 2024 – Present',
    current: true,
    bullets: [
      'Built the sales development function from zero — scripts, qualification frameworks, KPI tracking across a 20+ member team',
      'Ran structured consultative discovery calls with inbound and outbound prospects across healthcare, education, hospitality, and uniform supply sectors',
      'Managed full client lifecycle from first contact through to onboarding',
      'Trained and mentored team members individually; iterated on process in real time to improve conversion',
      'Generated consistent monthly revenue of £3,000–£4,000+ through pipeline management and relationship development',
    ],
  },
  {
    title: 'Remote Operations Executive — Inbound Sales',
    company: 'My Outsourcing Limited',
    sub: 'SonaliPay — US Campaign',
    dates: 'July 2020 – November 2021',
    current: false,
    bullets: [
      'Handled inbound customer interactions for a US-based financial services platform',
      'Developed strong active listening and conversational control in a fast-paced individual-facing environment',
    ],
  },
  {
    title: 'Consultant — Interpreter & Translator',
    company: 'Syngenta Foundation for Sustainable Agriculture',
    sub: null,
    dates: 'October 2022 – November 2023',
    current: false,
    bullets: [
      'Real-time interpretation and translation for international stakeholders across English and Bengali',
      'Built cross-cultural communication skills in a high-stakes NGO environment',
    ],
  },
]

function TimelineEntry({ entry, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', gap: '2rem', position: 'relative' }}
    >
      {/* Timeline spine + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: entry.current ? '#2563EB' : 'rgba(37, 99, 235, 0.5)',
          border: `2px solid ${entry.current ? '#60A5FA' : 'rgba(37, 99, 235, 0.3)'}`,
          boxShadow: entry.current ? '0 0 12px rgba(37, 99, 235, 0.6)' : 'none',
          flexShrink: 0,
          marginTop: '6px',
          zIndex: 1,
        }} />
        <div style={{
          width: '2px',
          flex: 1,
          background: 'linear-gradient(to bottom, rgba(37, 99, 235, 0.5), rgba(37, 99, 235, 0.05))',
          marginTop: '4px',
        }} />
      </div>

      {/* Card */}
      <div style={{
        background: 'rgba(15, 22, 41, 0.7)',
        border: '1px solid rgba(37, 99, 235, 0.18)',
        borderRadius: '12px',
        padding: '1.75rem',
        marginBottom: '2rem',
        flex: 1,
        transition: 'border-color 0.2s',
      }} className="exp-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.2rem' }}>{entry.title}</h3>
            <p style={{ color: '#60A5FA', fontSize: '0.9rem', fontWeight: '600' }}>{entry.company}</p>
            {entry.sub && <p style={{ color: '#C8D2E6', fontSize: '0.8rem', marginTop: '0.15rem' }}>{entry.sub}</p>}
          </div>
          <span style={{
            background: entry.current ? 'rgba(37, 99, 235, 0.15)' : 'rgba(200, 210, 230, 0.07)',
            border: `1px solid ${entry.current ? 'rgba(37, 99, 235, 0.35)' : 'rgba(200, 210, 230, 0.12)'}`,
            color: entry.current ? '#60A5FA' : '#C8D2E6',
            fontSize: '0.75rem',
            fontWeight: '600',
            padding: '0.3rem 0.85rem',
            borderRadius: '100px',
            whiteSpace: 'nowrap',
          }}>
            {entry.current && <span style={{ marginRight: '0.4em' }}>●</span>}{entry.dates}
          </span>
        </div>

        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '0', listStyle: 'none' }}>
          {entry.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', color: '#C8D2E6', fontSize: '0.9rem', lineHeight: '1.7' }}>
              <span style={{ color: '#2563EB', fontWeight: '700', flexShrink: 0, marginTop: '0.1em' }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <style>{`.exp-card:hover { border-color: rgba(37, 99, 235, 0.4) !important; }`}</style>
    </motion.div>
  )
}

export default function Experience() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="experience" style={{
      padding: '7rem 2rem',
      background: 'rgba(15, 22, 41, 0.4)',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            color: '#2563EB',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Career</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>Experience</h2>
          <div style={{ width: '48px', height: '3px', background: '#2563EB', margin: '1rem auto 0', borderRadius: '2px' }} />
        </motion.div>

        <div>
          {EXPERIENCE.map((entry, i) => (
            <TimelineEntry key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
