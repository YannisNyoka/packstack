import { useState } from 'react'
import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import styles from './FAQ.module.css'
import { faqs } from './faqData'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <Section id="faq">
      <Label number="04">FAQ</Label>
      <h2 className={styles.title}>Frequently asked questions</h2>
      <p className={styles.sub}>Everything you need to know about Booking Appointment, plus a few on our custom project work.</p>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(i)} aria-expanded={open === i}>
              <span>{faq.q}</span>
              <span className={styles.toggle} aria-hidden="true">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className={styles.answer}>{faq.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
