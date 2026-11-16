import styles from './Proof.module.css'

// Only real, consented client names - see the redesign audit's note on
// invented testimonials/trust signals. NailsByMandisa and Glenanda Medical
// Centre are not yet confirmed as real, named, consenting clients, so they
// stay out of this list until they are.
const clients = ['NXL Beauty Bar', 'Halfsec']

export default function Proof() {
  return (
    <div className={styles.strip}>
      <span className={styles.label}>Live on PackStack</span>
      <ul className={styles.list}>
        {clients.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
