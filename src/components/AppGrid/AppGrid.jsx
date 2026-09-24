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
            <Link to={app.to} className={styles.tile}>
              <div className={styles.iconBox}>
                <img src={app.iconSrc} alt="" className={styles.iconImg} />
              </div>
              <h3 className={styles.tileTitle}>{app.name}</h3>
              <p className={styles.tileDesc}>{app.desc}</p>
              <span className={styles.openLink}>Open app →</span>
            </Link>
          </Droplet>
        ))}

        <Droplet delay={apps.length * 100}>
          <div className={`${styles.tile} ${styles.tileSoon}`}>
            <div className={styles.iconBox}>
              <Sparkles size={32} strokeWidth={2} color="var(--text-muted)" />
            </div>
            <h3 className={styles.tileTitle}>More Apps Coming</h3>
            <p className={styles.tileDesc}>
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
