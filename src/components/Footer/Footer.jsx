import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '../../lib/constants'
import styles from './Footer.module.css'

// Mirrors Navbar's own link list - Pricing's hash only resolves correctly
// from the salon-booking page itself (App.jsx's ScrollToHash handles the
// cross-page navigate-then-scroll case the same way Navbar's handleNav does).
const navLinks = [
  { label: 'Products', to: '/salon-booking' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Pricing', to: '/salon-booking#pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>PackStack</div>
          <p className={styles.desc}>
            Booking and business software for South African service businesses, built and
            supported from Johannesburg.
          </p>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <Link key={l.label} to={l.to} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactLine}>
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, '')}`} className={styles.contactLine}>
            {WHATSAPP_NUMBER}
          </a>
          <span className={styles.contactLine}>Johannesburg, South Africa</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} PackStack</p>
        <div className={styles.bottomLinks}>
          <Link to="/privacy">Privacy &amp; POPIA</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
