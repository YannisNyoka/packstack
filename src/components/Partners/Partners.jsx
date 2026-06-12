import styles from './Partners.module.css'
import Droplet from '../Droplet/Droplet'

const partners = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Vercel', icon: '▲' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'WordPress', icon: '🔵' },
  { name: 'Flutter', icon: '💙' },
]

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>Technologies We Use</div>
        </div>
      </Droplet>

      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className={styles.pill}>
              <span className={styles.pillIcon}>{p.icon}</span>
              <span className={styles.pillName}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}