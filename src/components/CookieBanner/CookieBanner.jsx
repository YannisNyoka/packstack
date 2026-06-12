import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('packstack_cookie_consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 2000)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('packstack_cookie_consent', 'accepted')
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
        <div className={styles.icon}>🍪</div>
        <div className={styles.text}>
          <p className={styles.title}>We use cookies</p>
          <p className={styles.desc}>
            We use cookies to improve your experience and analyse site traffic.
            By clicking "Accept" you consent to our use of cookies.{' '}
            <a href="#" className={styles.link}>Learn more</a>
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