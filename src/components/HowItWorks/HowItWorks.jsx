import styles from './HowItWorks.module.css'

const steps = ['Set up your services', 'Clients book online', 'Manage in real-time']

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div key={step} className={styles.step}>
            <span className={styles.num}>0{i + 1}</span>
            <span className={styles.text}>{step}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
