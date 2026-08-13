import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { loadAnalyticsIfConsented } from '../../lib/analytics'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('packstack_cookie_consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 2000)
    } else if (consent === 'accepted') {
      loadAnalyticsIfConsented()
    }
  }, [])

  const accept = () => {
    localStorage.setItem('packstack_cookie_consent', 'accepted')
    loadAnalyticsIfConsented()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('packstack_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Cookie size={22} strokeWidth={2} color="var(--blue)" />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>We use cookies</p>
          <p className={styles.desc}>
            We use cookies to improve your experience and analyse site traffic.
            By clicking "Accept" you consent to our use of cookies.{' '}
            <Link to="/privacy" className={styles.link}>Learn more</Link>
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={decline}>
          Decline
        </button>
        <button className={styles.accept} onClick={accept}>
          Accept All
        </button>
      </div>
    </div>
  )
}