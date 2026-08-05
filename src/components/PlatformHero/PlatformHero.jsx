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
      <Droplet threshold={0.05}>
        <h1 className={styles.heading}>
          Everything your business needs,<br />
          <mark className={styles.highlight}>packed and stacked.</mark>
        </h1>
      </Droplet>

      <Droplet delay={80} threshold={0.05}>
        <p className={styles.cursive}>
          One platform. <span className={styles.wavy}>Growing</span> app by app.
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
    </section>
  )
}
