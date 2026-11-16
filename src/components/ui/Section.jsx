import { Container } from './Container'
import styles from './Section.module.css'

/**
 * Shared section shell: consistent vertical rhythm, a 1px hairline instead
 * of a card shadow to separate it from whatever comes before it, and the
 * one dark ("night") section variant the brief allows.
 */
export function Section({ id, tone = 'paper', hairline = true, children, className = '' }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tone === 'night' ? styles.night : ''} ${hairline ? styles.hairline : ''} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
