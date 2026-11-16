import styles from './Label.module.css'

/**
 * Small uppercase mono label used as a section eyebrow - e.g. "01 — Products".
 * `number` is optional: only pages with a real numbered sequence of sections
 * (SalonBooking) use it; shared sections (Contact) just pass a plain label.
 */
export function Label({ number, children, tone = 'ink', className = '' }) {
  return (
    <div className={`${styles.label} ${tone === 'paper' ? styles.toneOnNight : ''} ${className}`}>
      {number && <span className={styles.number}>{number}</span>}
      {children}
    </div>
  )
}
