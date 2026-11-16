import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IconClose } from '../ui/Icons'
import { CAL_LINK } from '../../lib/constants'
import styles from './Navbar.module.css'

const links = [
  { label: 'Products', path: '/salon-booking' },
  { label: 'Work', path: '/portfolio' },
  { label: 'Pricing', path: '/salon-booking', hash: '#pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/', hash: '#contact' },
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
          PackStack
        </button>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.label}>
              <button onClick={() => handleNav(l)} className={styles.navLink}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Book a call
        </a>

        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.close} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <IconClose size={22} />
          </button>
          <div className={styles.mobileLogo}>PackStack</div>
          {links.map((l) => (
            <button key={l.label} onClick={() => handleNav(l)} className={styles.mobileLink}>
              {l.label}
            </button>
          ))}
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>
            Book a call
          </a>
        </div>
      )}
    </>
  )
}
