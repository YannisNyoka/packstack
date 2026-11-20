import styles from './ScreenshotFrame.module.css'

/**
 * A thin, flat border around a real product screenshot - no fake browser
 * chrome, no reflections, no drop shadow. `chrome="browser"` adds a minimal
 * drawn top bar (three dots, no traffic-light colours) for a desktop
 * screenshot and crops it to a shared wide aspect ratio, so every desktop
 * screenshot across the site matches regardless of its native crop.
 * `chrome="phone"` renders a narrower frame with rounded corners for a
 * mobile screenshot, kept at its natural (portrait) aspect ratio instead.
 *
 * `mat` (default true) sits the image on a `--paper`-coloured inset with its
 * own thin border/radius, like a photo in a mount - this is what makes a
 * screenshot read as part of this site's system rather than a raw paste,
 * without altering a single pixel of the real screenshot itself.
 */
export function ScreenshotFrame({
  src,
  alt,
  chrome = null,
  mat = true,
  className = '',
  loading = 'lazy',
  width,
  height,
}) {
  const image = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      className={`${styles.img} ${chrome === 'browser' ? styles.cropWide : ''}`}
    />
  )

  return (
    <figure className={`${styles.frame} ${chrome === 'phone' ? styles.phone : ''} ${className}`}>
      {chrome === 'browser' && (
        <div className={styles.bar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
      {mat ? <div className={styles.mat}>{image}</div> : image}
    </figure>
  )
}
