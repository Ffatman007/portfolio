import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TAGS = ['IELTS Band 7', 'BA English — 3.80 CGPA', 'Remote-Ready', 'Night Shift / UK Hours']

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <AnimatedSection>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-block',
            color: '#2563EB',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Who I Am</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
          }}>About Me</h2>
          <div style={{ width: '48px', height: '3px', background: '#2563EB', margin: '1rem auto 0', borderRadius: '2px' }} />
        </div>
      </AnimatedSection>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Left: avatar */}
        <AnimatedSection delay={0.1}>
          <div style={{
            background: 'linear-gradient(135deg, #0F1629 0%, #111827 100%)',
            border: '1px solid rgba(37, 99, 235, 0.25)',
            borderRadius: '16px',
            aspectRatio: '1',
            maxWidth: '340px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
            }} />
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '3px solid rgba(37, 99, 235, 0.5)',
              boxShadow: '0 0 0 6px rgba(37, 99, 235, 0.1)',
              overflow: 'hidden',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1,
              flexShrink: 0,
            }}>
              <img
                src="/profile.png"
                alt="Kazi Zunaid Bin Zakaria"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <p style={{ color: '#C8D2E6', fontSize: '0.9rem', fontWeight: '500', position: 'relative', zIndex: 1 }}>Kazi Zunaid Bin Zakaria</p>
            <p style={{ color: '#60A5FA', fontSize: '0.78rem', marginTop: '0.25rem', position: 'relative', zIndex: 1 }}>Dhaka, Bangladesh</p>

            {/* Decorative corner elements */}
            <div style={{
              position: 'absolute', top: 16, left: 16, width: 30, height: 30,
              borderTop: '2px solid rgba(37, 99, 235, 0.5)', borderLeft: '2px solid rgba(37, 99, 235, 0.5)',
              borderRadius: '2px',
            }} />
            <div style={{
              position: 'absolute', bottom: 16, right: 16, width: 30, height: 30,
              borderBottom: '2px solid rgba(37, 99, 235, 0.5)', borderRight: '2px solid rgba(37, 99, 235, 0.5)',
              borderRadius: '2px',
            }} />
          </div>
        </AnimatedSection>

        {/* Right: text */}
        <AnimatedSection delay={0.2}>
          <div>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.85',
              color: '#C8D2E6',
              marginBottom: '2rem',
            }}>
              I sell. Whatever the room requires — cold outreach, warm inbound, video calls, phone, chat — I adapt and I close.
              Over 4+ years I've worked across UK and US markets running both B2B and B2C sales, leading 20+ member teams,
              and managing high-stakes consultative conversations with individuals and businesses alike.
              I work UK and European hours remotely from Dhaka, and I'm built for fast-moving, high-growth environments
              where the playbook doesn't exist yet.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {TAGS.map(tag => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(37, 99, 235, 0.12)',
                    border: '1px solid rgba(37, 99, 235, 0.3)',
                    color: '#60A5FA',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
