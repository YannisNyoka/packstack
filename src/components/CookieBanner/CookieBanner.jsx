import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <p className={styles.text}>
        We use cookies to improve your experience and analyse site traffic. By clicking
        "Accept" you consent to our use of cookies.{' '}
        <Link to="/privacy" className={styles.link}>Learn more</Link>
      </p>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={decline}>Decline</button>
        <button className={styles.accept} onClick={accept}>Accept</button>
      </div>
    </div>
  )
}
