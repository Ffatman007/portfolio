import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STORIES = [
  {
    title: 'Built a Brand from Zero',
    text: 'When Tailored2U launched, there was nothing. No website, no supply chain, no sales process, no team. I built it all. I worked with the design team to create the website, established the supply chain from scratch, and built the entire sales pipeline. Today Tailored2U generates consistent monthly revenue. Most salespeople inherit a pipeline. I built one.',
  },
  {
    title: 'Built a Sales Team from Zero',
    text: 'At Total Outsourcing I did not join an existing team. I created one. I recruited every member, wrote the scripts, designed the qualification framework, and ran the training. Within months, people who had never sold professionally were hitting targets consistently. The measure of a sales leader is not personal numbers. It is whether the people you built can perform without you watching.',
  },
  {
    title: 'Consultative Selling Across Two Continents',
    text: 'Whether it was inbound calls from US customers or cold outreach into UK healthcare and hospitality, my approach has always been the same. Understand first, sell second. On the US campaign I handled inbound service, troubleshooting, and upselling. In the UK I built relationships across healthcare, education, and uniform supply that turned cold contacts into long-term accounts. The industries changed. The method did not.',
  },
]

function StoryCard({ story, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(15, 22, 41, 0.7)',
        borderLeft: '4px solid #2563EB',
        borderTop: '1px solid rgba(37, 99, 235, 0.18)',
        borderRight: '1px solid rgba(37, 99, 235, 0.18)',
        borderBottom: '1px solid rgba(37, 99, 235, 0.18)',
        borderRadius: '12px',
        padding: '2rem',
        transition: 'transform 0.25s, box-shadow 0.25s',
        cursor: 'default',
      }}
      className="story-card"
    >
      <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem' }}>{story.title}</h3>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#C8D2E6' }}>{story.text}</p>
      <style>{`.story-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(37, 99, 235, 0.15); }`}</style>
    </motion.div>
  )
}

export default function SuccessStories() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="success-stories" style={{ padding: '7rem 2rem' }}>
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
          }}>Track Record</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>Success Stories</h2>
          <div style={{ width: '48px', height: '3px', background: '#2563EB', margin: '1rem auto 0', borderRadius: '2px' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
        }}>
          {STORIES.map((story, i) => (
            <StoryCard key={story.title} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
