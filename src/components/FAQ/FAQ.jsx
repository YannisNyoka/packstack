import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'
import Droplet from '../Droplet/Droplet'
import { faqs } from './faqData'

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
            Everything you need to know about Booking Appointment, plus a few on our custom
            project work.
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
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}
                />
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