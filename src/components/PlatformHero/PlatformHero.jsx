import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './PlatformHero.module.css'
import { getHeroContent } from '../../api/siteContent'

const SLIDE_INTERVAL_MS = 4500
const SLIDE_TRANSITION_MS = 800

/**
 * Full-bleed background behind the hero text - either a looping, swiping
 * carousel of images or a single background video, both set by the
 * superadmin via the "Home page content" page (packstack-backend's
 * /api/public/site-content). Falls back to a plain gradient (no image at
 * all) rather than any hardcoded photo when nothing's configured yet, or if
 * the API call fails - a missing/irrelevant stock photo is worse than no
 * photo.
 */
function HeroBackground({ content }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (content?.heroMediaType === 'video' && content.heroVideoUrl) {
    return (
      <video
        className={styles.bgVideo}
        src={content.heroVideoUrl}
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
      />
    )
  }

  const images = content?.heroImageUrls || []
  if (images.length > 0) {
    return <HeroImageCarousel images={images} reducedMotion={prefersReducedMotion} />
  }

  return null
}

function HeroImageCarousel({ images, reducedMotion }) {
  // A single image needs no sliding at all. More than one: duplicate the
  // first image at the end of the track so the loop can always slide left
  // into it, then jump back to the real first slide (transition disabled
  // for that one frame) instead of ever sliding backward - see
  // handleTransitionEnd below.
  const slides = images.length > 1 ? [...images, images[0]] : images
  const [index, setIndex] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const rafRef = useRef(null)

  useEffect(() => {
    if (images.length <= 1 || reducedMotion) return undefined
    const id = setInterval(() => setIndex((i) => i + 1), SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [images.length, reducedMotion])

  function handleTransitionEnd() {
    if (index === slides.length - 1) {
      setTransitionEnabled(false)
      setIndex(0)
    }
  }

  useEffect(() => {
    if (transitionEnabled) return undefined
    // Let the browser paint the instant jump-back before re-enabling the
    // transition, or it slides backward across the whole track instead.
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setTransitionEnabled(true))
    })
    return () => cancelAnimationFrame(rafRef.current)
  }, [transitionEnabled])

  return (
    <div className={styles.carouselViewport}>
      <div
        className={styles.carouselTrack}
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transitionEnabled ? `transform ${SLIDE_TRANSITION_MS}ms ease` : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((url, i) => (
          <div key={url + i} className={styles.carouselSlide} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </div>
    </div>
  )
}

export default function PlatformHero() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    let cancelled = false
    getHeroContent()
      .then((data) => {
        if (!cancelled) setContent(data)
      })
      .catch(() => {
        // Stays null - HeroBackground's no-content branch renders the plain
        // gradient fallback, same as "nothing configured yet".
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bgLayer}>
        <HeroBackground content={content} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Everything your business needs,
          <br />
          <span className={styles.titleAccent}>packed and stacked.</span>
        </h1>
        <div className={styles.ctas}>
          <Link to="/salon-booking" className={styles.ctaPrimary}>
            Explore Booking Appointment
          </Link>
          <a href="#apps" className={styles.ctaGhost}>
            See All Apps
          </a>
        </div>
      </div>
    </section>
  )
}
