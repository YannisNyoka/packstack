import { useEffect } from 'react'

function setMeta(selector, content) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/**
 * index.html ships one static title/description/OG/Twitter set shared by
 * every route - fine for a single-page app, not for a multi-route one (every
 * tab looks identical, and search engines index every page under the same
 * title). Called once per page component to override those tags for the
 * lifetime of that page, restoring the shared defaults on unmount so
 * client-side navigation away doesn't leave a stale title behind.
 */
export function useSEO({ title, description, path = '' }) {
  useEffect(() => {
    const prevTitle = document.title
    const fullTitle = `${title} | PackStack`
    const url = `https://packstack.co.za${path}`

    document.title = fullTitle
    setMeta('meta[name="description"]', description)
    setMeta('link[rel="canonical"]', url)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', description)

    return () => {
      document.title = prevTitle
    }
  }, [title, description, path])
}
