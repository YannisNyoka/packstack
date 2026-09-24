import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import styles from './AppGrid.module.css'
import Droplet from '../Droplet/Droplet'

const apps = [
  {
    iconSrc: '/app-icon-booking.png',
    name: 'Booking Appointment',
    desc: 'Online booking, staff scheduling, deposits and loyalty for salons and service businesses.',
    to: '/salon-booking',
    live: true,
  },
]

export default function AppGrid() {
  return (
    <section className={styles.section} id="apps">
      <div className={styles.grid}>
        {apps.map((app, i) => (
          <Droplet key={app.name} delay={i * 100}>
            <Link to={app.to} className={styles.featured}>
              <img src={app.iconSrc} alt="" className={styles.featuredLogo} />
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
