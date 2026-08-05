import { Calendar, Users, CreditCard, Heart } from 'lucide-react'
import styles from './Services.module.css'
import Droplet from '../Droplet/Droplet'

const services = [
  {
    icon: Calendar,
    title: 'Online Booking',
    desc: 'Customers book 24/7 from a page that shows real, live availability — no back-and-forth WhatsApp messages just to find an open slot.',
    tags: ['Real-time slots', 'No login required', 'Reschedule & cancel links'],
  },
  {
    icon: Users,
    title: 'Staff & Schedules',
    desc: "Set each staff member's working hours, block a sick day or a one-off appointment, and never risk a double-booking.",
    tags: ['Working hours', 'One-off time off', 'Conflict-free'],
  },
  {
    icon: CreditCard,
    title: 'Payments & Deposits',
    desc: 'Take a deposit at booking time via Yoco so customers have skin in the game before they even walk in. Fully optional.',
    tags: ['Yoco checkout', 'Optional deposits', 'Secure'],
  },
  {
    icon: Heart,
    title: 'Customers & Loyalty',
    desc: "Every customer's booking history in one place, plus a loyalty points ledger that rewards repeat visits automatically.",
    tags: ['Booking history', 'Loyalty points', 'WhatsApp & email'],
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>The App</div>
          <h2 className={styles.title}>Everything Your Salon Needs, Built In</h2>
          <p className={styles.sub}>
            No plugins, no third-party booking widgets — just one system that handles the
            whole customer journey.
          </p>
        </div>
      </Droplet>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <Droplet key={s.title} delay={i * 100}>
            <div className={styles.card}>
              <div className={styles.cardShine} />
              <div className={styles.icon}>
                <s.icon size={24} strokeWidth={2} color="var(--blue)" />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </Droplet>
        ))}
      </div>
    </section>
  )
}
