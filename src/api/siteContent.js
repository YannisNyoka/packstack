const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

// Public, unauthenticated endpoint on packstack-backend - see
// packstack-backend/src/routes/publicSiteContentRoutes.js. Returns whatever
// hero media the superadmin has configured via the superadmin console's
// "Home page content" page.
export async function getHeroContent() {
  const res = await fetch(`${API_BASE_URL}/api/public/site-content`)
  if (!res.ok) throw new Error(`Failed to load site content (${res.status})`)
  return res.json()
}
