import styles from './ScreenshotFrame.module.css'

/**
 * A thin, flat border around a real product screenshot - no fake browser
 * chrome, no reflections, no drop shadow. `chrome="browser"` adds a minimal
 * drawn top bar (three dots, no traffic-light colours) for a desktop
 * screenshot; `chrome="phone"` renders a narrower frame with rounded corners
 * for a mobile screenshot. `chrome={null}` (default) is just the border.
 */
export function ScreenshotFrame({ src, alt, chrome = null, className = '', loading = 'lazy', width, height }) {
  return (
    <figure className={`${styles.frame} ${chrome === 'phone' ? styles.phone : ''} ${className}`}>
      {chrome === 'browser' && (
        <div className={styles.bar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
      <img src={src} alt={alt} loading={loading} width={width} height={height} className={styles.img} />
    </figure>
  )
}
