import { useEffect } from 'react'

function setMeta(selector, content) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/**
 * Unlike setMeta above (which only ever updates tags index.html already
 * ships statically), no default JSON-LD script exists anywhere - this
 * creates one on demand and removes it on unmount rather than restoring a
 * prior value, since there is no prior value.
 */
function setJsonLd(data) {
  let script = document.querySelector('script[data-seo-jsonld]')
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-jsonld', 'true')
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
  return script
}

/**
 * index.html ships one static title/description/OG/Twitter set shared by
 * every route - fine for a single-page app, not for a multi-route one (every
 * tab looks identical, and search engines index every page under the same
 * title). Called once per page component to override those tags for the
 * lifetime of that page, restoring the shared defaults on unmount so
 * client-side navigation away doesn't leave a stale title behind.
 *
 * jsonLd (optional) must be a stable reference (a module-level constant, or
 * memoized) - an inline object literal would re-create the <script> tag on
 * every render of the calling component.
 */
export function useSEO({ title, description, path = '', jsonLd = null }) {
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

    const script = jsonLd ? setJsonLd(jsonLd) : null

    return () => {
      document.title = prevTitle
      if (script) script.remove()
    }
  }, [title, description, path, jsonLd])
}
