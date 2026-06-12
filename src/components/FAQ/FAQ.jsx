import { useState } from 'react'
import styles from './FAQ.module.css'
import Droplet from '../Droplet/Droplet'

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most websites take between 2 to 6 weeks depending on complexity. A simple 5-page site can be done in 2 weeks, while a full custom web app typically takes 6–12 weeks. We always agree on a timeline upfront.',
  },
  {
    q: 'Do you work with clients outside South Africa?',
    a: 'Absolutely. We work with clients across Africa, Europe, and beyond. All communication happens via video calls, email, and project management tools — location is never a barrier.',
  },
  {
    q: 'What do I need to provide to get started?',
    a: 'Just your ideas and goals! We handle everything else — design, development, content guidance, and deployment. If you have existing branding or content, we\'ll incorporate it.',
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Yes — every website and app we build is fully responsive and tested across all major devices and screen sizes including phones, tablets, laptops and desktops.',
  },
  {
    q: 'How does SEO actually help my business?',
    a: 'SEO helps your website rank higher on Google so more people find you organically — without paying for ads. Our SEO work includes technical optimisation, keyword strategy, content, and link building for long-term growth.',
  },
  {
    q: 'What happens after my website launches?',
    a: 'We offer ongoing support and maintenance packages. Every plan includes at least 3 months of post-launch support. We also offer monthly retainer packages for SEO, social media, and continuous development.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes! Redesigns are one of our specialties. We\'ll audit your current site, identify what\'s working and what isn\'t, and rebuild it with better design, performance, and conversion in mind.',
  },
  {
    q: 'How do I track results?',
    a: 'We set up Google Analytics, Search Console, and custom dashboards so you can see traffic, rankings, conversions, and social media performance all in one place. We also send monthly reports.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className={styles.section} id="faq">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>FAQ</div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.sub}>
            Everything you need to know about working with PackStack.
          </p>
        </div>
      </Droplet>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <Droplet key={i} delay={i * 60}>
            <div
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>
                  +
                </span>
              </button>
              <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          </Droplet>
        ))}
      </div>
    </section>
  )
}