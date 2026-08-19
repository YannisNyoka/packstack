import { Link } from 'react-router-dom'
import styles from './PlatformHero.module.css'
import Droplet from '../Droplet/Droplet'

export default function PlatformHero() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <Droplet threshold={0.05}>
          <h1 className={styles.heading}>
            Everything your business needs,<br />
            <span className={styles.highlight}>packed and stacked.</span>
          </h1>
        </Droplet>

        <Droplet delay={80} threshold={0.05}>
          <p className={styles.tagline}>
            One platform. Growing app by app.
          </p>
        </Droplet>

        <Droplet delay={160} threshold={0.05}>
          <div className={styles.buttons}>
            <Link to="/salon-booking" className={styles.btnPrimary}>
              Explore Booking Appointment
            </Link>
            <button className={styles.btnSecondary} onClick={() => handleNav('#apps')}>
              See All Apps
            </button>
          </div>
        </Droplet>
      </div>
    </section>
  )
}
