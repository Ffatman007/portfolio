import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Linkedin, Send } from 'lucide-react'

const CONTACT_CARDS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'Kazizunaid01@gmail.com',
    href: 'mailto:Kazizunaid01@gmail.com',
    external: false,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '(+880) 1316112768',
    href: 'tel:+8801316112768',
    external: false,
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'kazi-zunaid-bin-zakaria',
    href: 'https://linkedin.com/in/kazi-zunaid-bin-zakaria',
    external: true,
  },
]

function ContactCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const { Icon, label, value, href, external } = card

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'rgba(15, 22, 41, 0.7)',
        border: '1px solid rgba(37, 99, 235, 0.18)',
        borderRadius: '14px',
        padding: '2rem 1.5rem',
        textDecoration: 'none',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        cursor: 'pointer',
        flex: '1',
        minWidth: '200px',
      }}
      className="contact-card"
    >
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        background: 'rgba(37, 99, 235, 0.12)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon size={22} color="#2563EB" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</p>
        <p style={{ fontSize: '0.875rem', color: '#C8D2E6', fontWeight: '500', wordBreak: 'break-all' }}>{value}</p>
      </div>

      <style>{`.contact-card:hover { border-color: rgba(37, 99, 235, 0.5) !important; transform: translateY(-4px); box-shadow: 0 12px 40px rgba(37, 99, 235, 0.12); }`}</style>
    </motion.a>
  )
}

export default function Contact() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="contact" style={{
      padding: '7rem 2rem',
      background: 'rgba(15, 22, 41, 0.4)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <span style={{
            display: 'inline-block',
            color: '#2563EB',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Let's Talk</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>Get In Touch</h2>
          <div style={{ width: '48px', height: '3px', background: '#2563EB', margin: '1rem auto 1.5rem', borderRadius: '2px' }} />
          <p style={{ color: '#C8D2E6', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
            Open to sales roles, consulting conversations, and new ventures.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div style={{
          display: 'flex',
          gap: '1.25rem',
          marginBottom: '3.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {CONTACT_CARDS.map((card, i) => (
            <ContactCard key={card.label} card={card} index={i} />
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{
            background: 'rgba(15, 22, 41, 0.7)',
            border: '1px solid rgba(37, 99, 235, 0.18)',
            borderRadius: '16px',
            padding: '2.5rem',
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#60A5FA', marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(10, 14, 30, 0.6)',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      borderRadius: '8px',
                      padding: '0.875rem 1rem',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'inherit',
                    }}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#60A5FA', marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(10, 14, 30, 0.6)',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      borderRadius: '8px',
                      padding: '0.875rem 1rem',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'inherit',
                    }}
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#60A5FA', marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
                  MESSAGE
                </label>
                <textarea
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(10, 14, 30, 0.6)',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    fontFamily: 'inherit',
                    minHeight: '130px',
                  }}
                  className="form-input"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  style={{
                    background: submitted ? 'rgba(37, 99, 235, 0.6)' : '#2563EB',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    padding: '0.875rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s, transform 0.15s',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    minWidth: '140px',
                    justifyContent: 'center',
                  }}
                  className="send-btn"
                >
                  <Send size={16} />
                  {submitted ? 'Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .form-input:focus { border-color: rgba(37, 99, 235, 0.6) !important; }
        .form-input::placeholder { color: rgba(200, 210, 230, 0.35); }
        .send-btn:hover:not(:disabled) { background: #1d4ed8 !important; transform: translateY(-2px); }
      `}</style>
    </section>
  )
}
