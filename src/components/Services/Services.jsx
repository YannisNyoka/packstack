import styles from './Services.module.css'
import Droplet from '../Droplet/Droplet'

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Custom websites and web apps built for speed, scalability, and conversion. From landing pages to full-stack platforms — we ship fast and build to last.',
    tags: ['React', 'Next.js', 'Node.js', 'WordPress'],
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps that users actually love. Smooth UX, robust backend, and seamless performance on iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    icon: '🔍',
    title: 'SEO',
    desc: 'Rank higher, get found faster. We combine technical SEO, content strategy, and link building to grow your organic traffic month over month.',
    tags: ['Technical SEO', 'Content', 'Backlinks', 'Analytics'],
  },
  {
    icon: '📣',
    title: 'Social Media',
    desc: 'Build a brand people follow and trust. We manage your presence, create scroll-stopping content, and run data-driven ad campaigns that convert.',
    tags: ['Instagram', 'LinkedIn', 'TikTok', 'Paid Ads'],
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>What We Do</div>
          <h2 className={styles.title}>Services Built for Growth</h2>
          <p className={styles.sub}>
            We offer a focused stack of digital services — each one engineered
            to drive real, measurable results for your business.
          </p>
        </div>
      </Droplet>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <Droplet key={s.title} delay={i * 100}>
            <div className={styles.card}>
              <div className={styles.cardShine} />
              <div className={styles.icon}>{s.icon}</div>
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