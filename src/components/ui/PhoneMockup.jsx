import styles from './PhoneMockup.module.css'

/**
 * A modern, home-button-less iPhone-style device (thin uniform bezel,
 * Dynamic Island, no physical home button) holding a real product
 * screenshot or video as its "screen" - unlike ScreenshotFrame's
 * `chrome="phone"`, which is just a thin flat border around the raw image,
 * this is meant for a single standalone hero-ish placement where the phone
 * itself needs to read as an object, not a document. `tilt="left" |
 * "right" | null` applies a 3D perspective rotation so the device appears
 * to face that direction.
 *
 * Pass either `src` (a still image) or `video` (a short clip - autoplays
 * muted/looped/inline, same convention as every other autoplaying video on
 * this site) - never both.
 */
export function PhoneMockup({ src, video, alt, tilt = null, className = '' }) {
  return (
    <div
      className={`${styles.mockup} ${tilt === 'left' ? styles.tiltLeft : ''} ${tilt === 'right' ? styles.tiltRight : ''} ${className}`}
    >
      <div className={styles.body}>
        <div className={styles.screen}>
          {video ? (
            <video src={video} autoPlay muted loop playsInline className={styles.img} aria-label={alt} />
          ) : (
            <img src={src} alt={alt} loading="lazy" className={styles.img} />
          )}
          <span className={styles.dynamicIsland} />
        </div>
        <span className={`${styles.sideButton} ${styles.action}`} />
        <span className={`${styles.sideButton} ${styles.volumeUp}`} />
        <span className={`${styles.sideButton} ${styles.volumeDown}`} />
        <span className={`${styles.sideButton} ${styles.power}`} />
      </div>
    </div>
  )
}
