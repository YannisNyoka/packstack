import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/**
 * One component, three looks: 'primary' (solid ink), 'ghost' (1px border)
 * and 'text' (underline-on-hover, for in-line CTAs like "View our work").
 * No arrow glyphs appended anywhere - per the redesign brief, buttons say
 * exactly what they do and stop there. Renders a react-router <Link> when
 * given `to`, a plain <a> when given `href`, otherwise a <button>.
 */
export function Button({ variant = 'primary', to, href, className = '', children, ...props }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
