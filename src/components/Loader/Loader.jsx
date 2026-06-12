import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 200)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${styles.loader} ${done ? styles.hide : ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          Pack<span>Stack</span>
        </div>
        <div className={styles.tagline}>IT Solutions & Digital Growth</div>
        <div className={styles.barWrap}>
          <div
            className={styles.bar}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className={styles.percent}>
          {Math.min(Math.floor(progress), 100)}%
        </div>
      </div>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
    </div>
  )
}