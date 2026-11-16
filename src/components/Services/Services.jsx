import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import styles from './Services.module.css'

const services = [
  {
    title: 'Online booking',
    desc: 'Customers book 24/7 from a page that shows real, live availability - no back-and-forth WhatsApp messages just to find an open slot.',
    tags: ['Real-time slots', 'No login required', 'Reschedule & cancel links'],
  },
  {
    title: 'Staff & schedules',
    desc: "Set each staff member's working hours, block a sick day or a one-off appointment, and never risk a double-booking.",
    tags: ['Working hours', 'One-off time off', 'Conflict-free'],
  },
  {
    title: 'Payments & deposits',
    desc: 'Take a deposit at booking time via Yoco so customers have skin in the game before they even walk in. Fully optional.',
    tags: ['Yoco checkout', 'Optional deposits', 'Secure'],
  },
  {
    title: 'Customers & loyalty',
    desc: "Every customer's booking history in one place, plus a loyalty points ledger that rewards repeat visits automatically.",
    tags: ['Booking history', 'Loyalty points', 'WhatsApp & email'],
  },
]

export default function Services() {
  return (
    <Section id="services">
      <Label number="01">Booking Appointment</Label>
      <h2 className={styles.title}>Everything the booking app does</h2>
      <p className={styles.sub}>
        No plugins, no third-party booking widgets - one system that handles the whole
        customer journey.
      </p>

      <div className={styles.list}>
        {services.map((s) => (
          <div key={s.title} className={styles.row}>
            <h3 className={styles.rowTitle}>{s.title}</h3>
            <div className={styles.rowBody}>
              <p className={styles.rowDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
