import styles from './Partners.module.css'

const partners = ['WhatsApp', 'Email', 'Yoco Payments', 'Google Calendar', 'Custom Domains']

export default function Partners() {
  return (
    <div className={styles.strip}>
      <span className={styles.label}>Works with</span>
      <ul className={styles.list}>
        {partners.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
