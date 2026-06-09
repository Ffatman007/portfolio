import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Users, Video, BarChart2, UserCheck, Globe } from 'lucide-react'

const SKILLS = [
  {
    Icon: Phone,
    title: 'Outbound & Cold Calling',
    description: 'High-volume outbound with strong open rates. Comfortable calling cold into UK and US markets and generating pipeline from zero.',
  },
  {
    Icon: Users,
    title: 'Inbound Conversion',
    description: 'Experienced handling warm inbound pipelines of 100+ leads. Qualify fast, build trust, close consultatively.',
  },
  {
    Icon: Video,
    title: 'Video & Chat Sales',
    description: 'Comfortable selling over Zoom, Teams, and chat. Adapted to remote-first sales environments across time zones.',
  },
  {
    Icon: BarChart2,
    title: 'Pipeline Management',
    description: 'CRM discipline across Salesforce and Apollo. Pipeline built, tracked, and reported with accuracy.',
  },
  {
    Icon: UserCheck,
    title: 'Team Building & Leadership',
    description: 'Built and led a 20+ member sales team. Designed the processes, ran the training, held the accountability.',
  },
  {
    Icon: Globe,
    title: 'UK & US Market Expertise',
    description: '4+ years working UK and US campaigns. Understand buyer behaviour, objection patterns, and communication norms in both markets.',
  },
]

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon, title, description } = skill

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(15, 22, 41, 0.7)',
        border: '1px solid rgba(37, 99, 235, 0.18)',
        borderRadius: '14px',
        padding: '2rem',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        cursor: 'default',
      }}
      className="skill-card"
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'rgba(37, 99, 235, 0.12)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        <Icon size={22} color="#2563EB" />
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', lineHeight: '1.75', color: '#C8D2E6' }}>{description}</p>

      <style>{`
        .skill-card:hover {
          border-color: rgba(37, 99, 235, 0.5) !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.12);
        }
      `}</style>
    </motion.div>
  )
}

export default function Skills() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="skills" style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          }}>Capabilities</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>What I Bring</h2>
          <div style={{ width: '48px', height: '3px', background: '#2563EB', margin: '1rem auto 0', borderRadius: '2px' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
