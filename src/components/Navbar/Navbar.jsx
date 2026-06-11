import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          Pack<span>Stack</span>
        </div>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <button onClick={() => handleNav(l.href)} className={styles.navLink}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => handleNav('#contact')}>
          Get a Quote
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
          <button className={styles.close} onClick={() => setMenuOpen(false)}>
            ✕
          </button>
          {links.map(l => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className={styles.mobileLink}
            >
              {l.label}
            </button>
          ))}
          <button
            className={styles.mobileCta}
            onClick={() => handleNav('#contact')}
          >
            Get a Quote
          </button>
        </div>
      )}
    </>
  )
}