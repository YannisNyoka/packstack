const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

export class SignupError extends Error {
  constructor(message, { status, code, details } = {}) {
    super(message)
    this.name = 'SignupError'
    this.status = status
    this.code = code
    this.details = details
  }
}

async function parseErrorResponse(res) {
  try {
    const body = await res.json()
    return new SignupError(body?.error?.message || `Request failed (${res.status})`, {
      status: res.status,
      code: body?.error?.code,
      details: body?.error?.details,
    })
  } catch {
    return new SignupError(`Request failed (${res.status})`, { status: res.status })
  }
}

// Unauthenticated, not tenant-resolved - see packstack-backend/src/routes/publicSignupRoutes.js.
// Provisions the tenant + owner and returns a session token for it in one call.
export async function signup({ slug, displayName, ownerEmail, ownerPassword, planId }) {
  const res = await fetch(`${API_BASE_URL}/api/public/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, displayName, ownerEmail, ownerPassword, planId }),
  })
  if (!res.ok) throw await parseErrorResponse(res)
  return res.json()
}

// Tenant-scoped, but reachable from this origin (backend CORS allows it) -
// takes the accessToken signup() just returned to start the plan's PayFast
// checkout immediately, before the visitor has ever logged in anywhere.
export async function createCheckout({ tenantSlug, accessToken, planId }) {
  const res = await fetch(`${API_BASE_URL}/api/t/${tenantSlug}/billing/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ planId }),
  })
  if (!res.ok) throw await parseErrorResponse(res)
  return res.json()
}
