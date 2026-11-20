import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './PlatformHero.module.css'
import { getHeroContent } from '../../api/siteContent'
import { withAutoQuality } from '../../lib/cloudinaryOptimize'

const SLIDE_INTERVAL_MS = 4500
const SLIDE_TRANSITION_MS = 800

// Caches the last-fetched hero content for the rest of this browser
// session - lets a repeat visit (navigate away and back, or open a second
// tab) render the real hero media immediately from cache instead of
// waiting on a fresh network round-trip every time, which is otherwise the
// single biggest source of "the video takes a moment to start" on this
// section (the <video>/carousel can't even begin loading its real src
// until this API call resolves). Still revalidates in the background every
// mount, so a superadmin's edit shows up on the very next page load, not
// just the next browser session.
const CONTENT_CACHE_KEY = 'packstack_hero_content_v1'

function readCachedContent() {
  try {
    const raw = sessionStorage.getItem(CONTENT_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeCachedContent(data) {
  try {
    sessionStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage unavailable (private browsing, storage full, etc.) -
    // fine, this is a pure optimization, not a correctness requirement.
  }
}

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
        src={withAutoQuality(content.heroVideoUrl)}
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
        preload="auto"
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
          <div key={url + i} className={styles.carouselSlide} style={{ backgroundImage: `url(${withAutoQuality(url)})` }} />
        ))}
      </div>
    </div>
  )
}

export default function PlatformHero() {
  const [content, setContent] = useState(readCachedContent)

  useEffect(() => {
    let cancelled = false
    getHeroContent()
      .then((data) => {
        if (cancelled) return
        setContent(data)
        writeCachedContent(data)
      })
      .catch(() => {
        // Stays whatever it already was (cached content, or null) -
        // HeroBackground's no-content branch renders the plain gradient
        // fallback if there's truly nothing to show.
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
