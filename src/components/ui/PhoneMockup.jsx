import styles from './PhoneMockup.module.css'

/**
 * A real-looking phone device (dark bezel, speaker, home button, side
 * buttons) holding a real product screenshot as its "screen" - unlike
 * ScreenshotFrame's `chrome="phone"`, which is just a thin flat border
 * around the raw image, this is meant for a single standalone hero-ish
 * placement where the phone itself needs to read as an object, not a
 * document. `tilt="left" | "right" | null` applies a 3D perspective
 * rotation so the device appears to face that direction.
 */
export function PhoneMockup({ src, alt, tilt = null, className = '' }) {
  return (
    <div
      className={`${styles.mockup} ${tilt === 'left' ? styles.tiltLeft : ''} ${tilt === 'right' ? styles.tiltRight : ''} ${className}`}
    >
      <div className={styles.body}>
        <span className={styles.speaker} />
        <div className={styles.screen}>
          <img src={src} alt={alt} loading="lazy" className={styles.img} />
        </div>
        <span className={styles.homeButton} />
        <span className={`${styles.sideButton} ${styles.volumeUp}`} />
        <span className={`${styles.sideButton} ${styles.volumeDown}`} />
        <span className={`${styles.sideButton} ${styles.power}`} />
      </div>
    </div>
  )
}
