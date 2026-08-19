import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'
import Droplet from '../Droplet/Droplet'

// One representative clip per major service category PackStack's booking
// app can serve - not just salons. Loaded one at a time (not preloaded
// together) so the page never fetches more than one multi-MB clip at once.
const slides = [
  '/hero-videos/hair.mp4',
  '/hero-videos/nails.mp4',
  '/hero-videos/skincare.mp4',
  '/hero-videos/makeup.mp4',
  '/hero-videos/massage.mp4',
]

const SLIDE_DURATION_MS = 7000

// Autoplaying video is motion some visitors have explicitly opted out of -
// skip it entirely for them rather than just hiding the controls, falling
// back to the plain navy background.
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => {
      setVideoReady(false)
      setSlideIndex((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !videoRef.current) return
    videoRef.current.load()
    videoRef.current.play().catch(() => {})
  }, [slideIndex])

  return (
    <section className={styles.hero} id="home">
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          className={`${styles.bgVideo} ${videoReady ? styles.bgVideoReady : ''}`}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          aria-hidden="true"
        >
          <source src={slides[slideIndex]} type="video/mp4" />
        </video>
      )}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <Droplet threshold={0.05}>
          <h1 className={styles.heading}>
            Everything your salon needs<br />
            to <span className={styles.highlight}>take bookings online.</span>
          </h1>
        </Droplet>

        <Droplet delay={120} threshold={0.05}>
          <p className={styles.tagline}>
            Simple to set up. Easy to run.
          </p>
        </Droplet>

        <Droplet delay={240} threshold={0.05}>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary} onClick={() => navigate('/signup')}>
              Start Free Trial
            </button>
          </div>
        </Droplet>
      </div>
    </section>
  )
}
