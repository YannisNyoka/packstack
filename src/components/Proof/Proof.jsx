import styles from './Proof.module.css'

// Only real, consented client names - see the redesign audit's note on
// invented testimonials/trust signals. NailsByMandisa was added once the
// site owner supplied a real screenshot of it directly (see AppGrid.jsx's
// header phone mockup). Glenanda Medical Centre is still not confirmed, so
// it stays out of this list until it is.
const clients = ['NXL Beauty Bar', 'Halfsec', 'NailsByMandisa']

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
