import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Salon Booking', path: '/salon-booking' },
  { label: 'Custom Work', path: '/', hash: '#portfolio' },
  { label: 'Contact', path: null, hash: '#contact' }, // stays on whichever page you're on
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const handleNav = (link) => {
    setMenuOpen(false)
    const targetPath = link.path ?? location.pathname

    if (location.pathname === targetPath) {
      if (link.hash) {
        const el = document.querySelector(link.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate(`${targetPath}${link.hash || ''}`)
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.logo} onClick={goHome}>
          Pack<span>Stack</span>
        </button>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <button onClick={() => handleNav(l)} className={styles.navLink}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => { setMenuOpen(false); navigate('/signup') }}>
          Get Started
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.close} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={22} strokeWidth={2} />
          </button>
          <div className={styles.mobileLogo}>
            Pack<span>Stack</span>
          </div>
          {links.map(l => (
            <button key={l.label} onClick={() => handleNav(l)} className={styles.mobileLink}>
              {l.label}
            </button>
          ))}
          <button
            className={styles.mobileCta}
            onClick={() => { setMenuOpen(false); navigate('/signup') }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  )
}
