import styles from './Hero.module.css'
import Droplet from '../Droplet/Droplet'

const stats = [
  { num: '120', suffix: '+', label: 'Projects Delivered' },
  { num: '98', suffix: '%', label: 'Client Satisfaction' },
  { num: '5', suffix: 'x', label: 'Average ROI' },
  { num: '8', suffix: '+', label: 'Years in Business' },
]

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      {/* Animated background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.grid} />

      <Droplet threshold={0.05}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          IT Solutions &amp; Digital Growth
        </div>
      </Droplet>

      <Droplet delay={100} threshold={0.05}>
        <h1 className={styles.heading}>
          We Build Digital<br />
          Products That <em>Perform</em>
        </h1>
      </Droplet>

      <Droplet delay={200} threshold={0.05}>
        <p className={styles.sub}>
          From web &amp; app development to SEO and social media — PackStack
          turns your vision into a high-performance digital presence.
        </p>
      </Droplet>

      <Droplet delay={300} threshold={0.05}>
        <div className={styles.buttons}>
          <button
            className={styles.btnPrimary}
            onClick={() => handleNav('#contact')}
          >
            Start a Project
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => handleNav('#portfolio')}
          >
            See Our Work →
          </button>
        </div>
      </Droplet>

      <Droplet delay={400} threshold={0.05}>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>
                {s.num}<span>{s.suffix}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </Droplet>

      <div className={styles.pulseLine} />
    </section>
  )
}