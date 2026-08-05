import { Link } from 'react-router-dom'
import { CalendarCheck, Sparkles } from 'lucide-react'
import styles from './AppGrid.module.css'
import Droplet from '../Droplet/Droplet'

const apps = [
  {
    icon: CalendarCheck,
    name: 'Booking Appointment',
    desc: 'Online booking, staff scheduling, deposits and loyalty for salons and service businesses.',
    to: '/salon-booking',
    live: true,
  },
]

export default function AppGrid() {
  return (
    <section className={styles.section} id="apps">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>The Apps</div>
          <h2 className={styles.title}>One Platform, Built to Grow App by App</h2>
          <p className={styles.sub}>
            Each app is a standalone tool for a specific part of your business — start with the
            one you need today.
          </p>
        </div>
      </Droplet>

      <div className={styles.grid}>
        {apps.map((app, i) => (
          <Droplet key={app.name} delay={i * 100}>
            <Link to={app.to} className={styles.card}>
              <div className={styles.icon}>
                <app.icon size={26} strokeWidth={2} color="var(--blue)" />
              </div>
              <h3 className={styles.cardTitle}>{app.name}</h3>
              <p className={styles.cardDesc}>{app.desc}</p>
              <span className={styles.openLink}>Open app →</span>
            </Link>
          </Droplet>
        ))}

        <Droplet delay={apps.length * 100}>
          <div className={`${styles.card} ${styles.cardSoon}`}>
            <div className={styles.icon}>
              <Sparkles size={26} strokeWidth={2} color="var(--text-muted)" />
            </div>
            <h3 className={styles.cardTitle}>More Apps Coming</h3>
            <p className={styles.cardDesc}>
              We're building out the platform one app at a time. Tell us what your business
              needs next.
            </p>
            <span className={styles.soonBadge}>Coming Soon</span>
          </div>
        </Droplet>
      </div>
    </section>
  )
}
