import styles from './Partners.module.css'

const partners = [
  'WhatsApp', 'Email', 'Yoco Payments', 'Google Calendar', 'Custom Domains',
]

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.header}>
        <div className={styles.label}>Works With the Tools You Already Use</div>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {[...partners, ...partners].map((name, i) => (
            <div key={i} className={styles.pill}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
