import styles from './Pricing.module.css'
import Droplet from '../Droplet/Droplet'

const plans = [
  {
    name: 'Starter',
    from: 'R2,000',
    desc: 'Perfect for small businesses getting started online.',
    features: [
      '5-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      '3 months support',
      'Contact form',
      'Google Analytics setup',
    ],
    cta: 'Get a Quote',
    popular: false,
    note: 'Pricing varies based on project scope',
  },
  {
    name: 'Growth',
    from: 'R8,000',
    desc: 'For growing businesses that need more power and visibility.',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'Full SEO optimisation',
      'Social media setup',
      '6 months support',
      'Performance optimisation',
      'CMS integration',
      'Monthly reports',
    ],
    cta: 'Get a Quote',
    popular: true,
    note: 'Pricing varies based on project scope',
  },
  {
    name: 'Enterprise',
    from: 'R20,000',
    desc: 'Full-stack solutions for ambitious brands that want it all.',
    features: [
      'Unlimited pages',
      'Custom web or mobile app',
      'Advanced SEO & content',
      'Full social media management',
      'Paid ads management',
      '12 months support',
      'Dedicated project manager',
      'Weekly strategy calls',
      'Priority delivery',
    ],
    cta: 'Contact Us',
    popular: false,
    note: 'Custom quote based on requirements',
  },
]

export default function Pricing() {
  const handleNav = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="pricing">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>Pricing</div>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.sub}>
            Starting prices to give you an idea. Every project is unique —
            contact us for a free custom quote tailored to your needs.
          </p>
          <div className={styles.disclaimer}>
            <span className={styles.disclaimerIcon}>💡</span>
            All prices are starting from — final quote depends on your project scope.
          </div>
        </div>
      </Droplet>

      <div className={styles.grid}>
        {plans.map((p, i) => (
          <Droplet key={p.name} delay={i * 120}>
            <div className={`${styles.card} ${p.popular ? styles.popular : ''}`}>
              {p.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.cardTop}>
                <div className={styles.planName}>{p.name}</div>
                <div className={styles.priceWrap}>
                  <div className={styles.fromLabel}>Starting from</div>
                  <div className={styles.price}>
                    {p.from}
                  </div>
                </div>
                <p className={styles.planDesc}>{p.desc}</p>
              </div>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {p.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.note}>
                <span className={styles.noteIcon}>ℹ️</span>
                {p.note}
              </div>

              <button
                className={`${styles.cta} ${p.popular ? styles.ctaPrimary : styles.ctaOutline}`}
                onClick={handleNav}
              >
                {p.cta}
              </button>
            </div>
          </Droplet>
        ))}
      </div>
    </section>
  )
}