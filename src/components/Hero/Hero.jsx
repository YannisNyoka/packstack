import { Check } from 'lucide-react'
import styles from './Hero.module.css'
import Droplet from '../Droplet/Droplet'

const capabilities = [
  'Real-time online booking',
  'WhatsApp & email confirmations',
  'Deposits via Yoco',
  'Your own custom domain',
]

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      <Droplet threshold={0.05}>
        <div className={styles.eyebrow}>Booking Software for Service Businesses</div>
      </Droplet>

      <Droplet delay={80} threshold={0.05}>
        <h1 className={styles.heading}>
          Everything your salon needs<br />
          to <mark className={styles.highlight}>take bookings online.</mark>
        </h1>
      </Droplet>

      <Droplet delay={120} threshold={0.05}>
        <p className={styles.cursive}>
          Simple to set up. <span className={styles.wavy}>Easy</span> to run.
        </p>
      </Droplet>

      <Droplet delay={160} threshold={0.05}>
        <p className={styles.sub}>
          Booking Appointment is PackStack's app for South African service businesses —
          real-time online booking, staff scheduling, automatic confirmations and loyalty
          rewards, starting with salons.
        </p>
      </Droplet>

      <Droplet delay={240} threshold={0.05}>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => handleNav('#contact')}>
            Get Started
          </button>
          <button className={styles.btnSecondary} onClick={() => handleNav('#pricing')}>
            See Pricing
          </button>
        </div>
      </Droplet>

      <Droplet delay={320} threshold={0.05}>
        <div className={styles.capabilities}>
          {capabilities.map((c) => (
            <div key={c} className={styles.capabilityItem}>
              <Check size={15} strokeWidth={2.5} className={styles.capabilityCheck} />
              {c}
            </div>
          ))}
        </div>
      </Droplet>
    </section>
  )
}
