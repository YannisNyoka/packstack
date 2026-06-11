import { useDroplet } from '../../hooks/useDroplet'
import styles from './Droplet.module.css'

export default function Droplet({
  children,
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const { ref, triggered } = useDroplet(threshold)

  return (
    <div
      ref={ref}
      className={`
        ${styles.droplet}
        ${triggered ? styles.landed : ''}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {triggered && (
        <span className={styles.ripple} style={{ animationDelay: `${delay}ms` }} />
      )}
      {children}
    </div>
  )
}