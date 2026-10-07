import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './OpenApp.module.css'
import { useSEO } from '../hooks/useSEO'

// Matches Signup.jsx's own slugify() exactly - kept as a separate copy
// rather than a shared import since the two pages don't otherwise share
// code and this is a one-line normalization rule, not worth a new shared
// module for.
function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 63)
}

/**
 * The marketing site (packstack.co.za) and a tenant's own dashboard
 * (<slug>.packstack.co.za) are different origins - this is the one page on
 * the marketing site that bridges them for a returning owner who doesn't
 * have their own subdomain bookmarked. Also the Play Store app's launch
 * screen (see manifest.webmanifest's start_url) - a business owner opening
 * the app needs somewhere to land that isn't a brand-new signup form.
 */
export default function OpenApp() {
  useSEO({
    title: 'Open Your Dashboard',
    description: 'Already have a PackStack account? Enter your store handle to go to your dashboard.',
    path: '/app',
  })

  const [slug, setSlug] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const normalized = slugify(slug)
    if (normalized) {
      window.location.href = `https://${normalized}.packstack.co.za/login`
    }
  }

  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>Open your dashboard</h1>
        <p className={styles.sub}>Enter your store handle to go to your PackStack dashboard.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="your-store"
              aria-label="Store handle"
              autoFocus
              required
            />
            <span className={styles.domain}>.packstack.co.za</span>
          </div>
          <button type="submit" className={styles.submit}>
            Go to my dashboard
          </button>
        </form>

        <p className={styles.footer}>
          Don't have a store yet? <Link to="/signup">Start your free trial</Link>
        </p>
      </div>
    </main>
  )
}
