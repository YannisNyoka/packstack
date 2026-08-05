const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

// Public, unauthenticated endpoint on packstack-backend - see
// packstack-backend/src/routes/publicPlansRoutes.js. Returns only active plans.
export async function getPlans() {
  const res = await fetch(`${API_BASE_URL}/api/public/plans`)
  if (!res.ok) throw new Error(`Failed to load plans (${res.status})`)
  return res.json()
}
