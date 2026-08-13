const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

/**
 * Loads Google Analytics only when both are true: a real measurement ID is
 * configured (VITE_GA_MEASUREMENT_ID) and the visitor has actually accepted
 * cookies. Called on boot (in case consent was already given on a previous
 * visit) and again the moment CookieBanner's Accept button is clicked - see
 * both call sites. Without this gate, analytics would load unconditionally
 * on every page view regardless of the cookie banner's own "by clicking
 * Accept you consent" copy, which would make that banner (and the privacy
 * policy describing it) inaccurate.
 */
export function loadAnalyticsIfConsented() {
  if (!GA_ID) return
  if (localStorage.getItem('packstack_cookie_consent') !== 'accepted') return
  if (document.getElementById('ga-script')) return

  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)
}
