import styles from './Footer.module.css'

// lucide-react deliberately excludes brand/trademarked logos, so these three
// are hand-drawn as simple line-style outlines to match the rest of the
// site's monochrome icon system rather than pulling in a full brand-icon
// package for three glyphs.
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10" x2="11.5" y2="16.5" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const salonBookingLinks = [
  { label: 'Overview', href: '/salon-booking' },
  { label: 'Features', href: '/salon-booking#services' },
  { label: 'Pricing', href: '/salon-booking#pricing' },
  { label: 'FAQ', href: '/salon-booking#faq' },
]

const customWorkLinks = [
  'Web Development',
  'App Development',
  'SEO',
  'Social Media',
]

const contactLines = [
  { label: 'packstack36@gmail.com', href: 'mailto:packstack36@gmail.com' },
  { label: '+27 78 268 5826', href: 'tel:+27782685826' },
  { label: 'Johannesburg, SA', href: null },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            Pack<span>Stack</span>
          </div>
          <p>
            A growing suite of business apps for South African companies, starting with
            Booking Appointment for salons. We also take on custom web, app, SEO and
            social media projects.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon width={16} height={16} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="X (Twitter)">
              <XIcon width={16} height={16} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h5>Salon Booking</h5>
          <ul>
            {salonBookingLinks.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Custom Work</h5>
          <ul>
            {customWorkLinks.map(item => (
              <li key={item}>
                <a href="#contact">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Contact</h5>
          <ul>
            {contactLines.map(item => (
              <li key={item.label}>
                {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} PackStack. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
