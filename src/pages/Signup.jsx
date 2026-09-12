import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Check, Loader2 } from 'lucide-react'
import styles from './Signup.module.css'
import { getPlans } from '../api/plans'
import { signup, createCheckout, SignupError } from '../api/signup'
import { useSEO } from '../hooks/useSEO'

function formatPrice(plan) {
  const amount = `R${plan.priceZAR.toLocaleString('en-ZA')}`
  const interval = plan.billingInterval === 'annual' ? 'year' : 'month'
  return { amount, interval }
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 63)
}

/** PayFast's hosted checkout expects a real form POST, not a fetch - build one and submit it. */
function redirectToPayfast(checkoutUrl, fields) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = checkoutUrl
  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()
}

export default function Signup() {
  useSEO({
    title: 'Start Your Free Trial',
    description: 'Set up your salon on PackStack — pick a plan, tell us about your business, and start taking bookings online. Add your card once, pay nothing for 14 days.',
    path: '/signup',
  })

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const preselectedPlanKey = searchParams.get('plan')

  const [step, setStep] = useState('plan') // plan | details | submitting
  const [plansStatus, setPlansStatus] = useState('loading') // loading | ready | error
  const [plans, setPlans] = useState([])
  const [selectedPlanId, setSelectedPlanId] = useState(null)

  const [slug, setSlug] = useState('')
  const [slugTouched, setSlugTouched] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [ownerPassword, setOwnerPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [fieldError, setFieldError] = useState(null)
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    let cancelled = false
    getPlans()
      .then((data) => {
        if (cancelled) return
        setPlans(data)
        setPlansStatus('ready')
        const preselected = data.find((p) => p.key === preselectedPlanKey)
        if (preselected) setSelectedPlanId(preselected._id)
        else if (data.length > 0) setSelectedPlanId(data[0]._id)
      })
      .catch(() => {
        if (cancelled) return
        setPlansStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [preselectedPlanKey])

  const selectedPlan = useMemo(() => plans.find((p) => p._id === selectedPlanId) || null, [plans, selectedPlanId])

  const handleDisplayNameChange = (value) => {
    setDisplayName(value)
    if (!slugTouched) setSlug(slugify(value))
  }

  const validateDetails = () => {
    if (!selectedPlan) return 'Pick a plan to continue.'
    if (slug.trim().length < 3) return 'Your subdomain needs to be at least 3 characters.'
    if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(slug)) return 'Subdomain can only contain lowercase letters, numbers and hyphens.'
    if (displayName.trim().length === 0) return 'Tell us your business name.'
    if (!/^\S+@\S+\.\S+$/.test(ownerEmail)) return 'Enter a valid email address.'
    if (ownerPassword.length < 12) return 'Password must be at least 12 characters.'
    if (ownerPassword !== confirmPassword) return 'Passwords don’t match.'
    return null
  }

  const handleContinueToDetails = () => {
    if (!selectedPlan) return
    setStep('details')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationMessage = validateDetails()
    if (validationMessage) {
      setFieldError(validationMessage)
      return
    }
    setFieldError(null)
    setSubmitError(null)
    setSubmitting(true)

    try {
      const { tenant, accessToken } = await signup({
        slug,
        displayName: displayName.trim(),
        ownerEmail,
        ownerPassword,
        planId: selectedPlan._id,
      })
      const { checkoutUrl, fields } = await createCheckout({ tenantSlug: tenant.slug, accessToken, planId: selectedPlan._id })
      redirectToPayfast(checkoutUrl, fields)
      // Browser is navigating away to PayFast - stay in the submitting state
      // rather than resetting it, so there's no flash of the form again.
    } catch (err) {
      if (err instanceof SignupError && err.status === 409) {
        setFieldError('That subdomain is already taken - try another one.')
      } else if (err instanceof SignupError) {
        setSubmitError(err.message)
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
      setSubmitting(false)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.label}>Start Your Free Trial</div>
        <h1 className={styles.title}>Set Up Your Salon</h1>

        <ol className={styles.steps}>
          <li className={step === 'plan' ? styles.stepActive : styles.stepDone}>1. Plan</li>
          <li className={step === 'details' ? styles.stepActive : ''}>2. Your Business</li>
        </ol>

        {step === 'plan' && (
          <div className={styles.planStep}>
            {plansStatus === 'loading' && <p className={styles.muted}>Loading plans…</p>}
            {plansStatus === 'error' && (
              <p className={styles.errorMsg}>
                We couldn't load pricing right now. Please refresh, or email us and we'll get you set up directly.
              </p>
            )}
            {plansStatus === 'ready' && (
              <>
                <div className={styles.planGrid}>
                  {plans.map((plan) => {
                    const { amount, interval } = formatPrice(plan)
                    const active = plan._id === selectedPlanId
                    return (
                      <button
                        type="button"
                        key={plan._id}
                        className={`${styles.planCard} ${active ? styles.planCardActive : ''}`}
                        onClick={() => setSelectedPlanId(plan._id)}
                      >
                        {active && <Check size={16} strokeWidth={2.5} className={styles.planCheck} />}
                        <div className={styles.planName}>{plan.name}</div>
                        <div className={styles.planPrice}>
                          {amount}
                          <span className={styles.planInterval}>/{interval}</span>
                        </div>
                        <div className={styles.planLimits}>Up to {plan.limits.maxStaff} staff</div>
                      </button>
                    )
                  })}
                </div>
                <button type="button" className={styles.submitBtn} onClick={handleContinueToDetails} disabled={!selectedPlan}>
                  Continue
                </button>
              </>
            )}
          </div>
        )}

        {step === 'details' && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Business Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="e.g. Bella Hair Studio"
                value={displayName}
                onChange={(e) => handleDisplayNameChange(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Your Subdomain</label>
              <div className={styles.slugWrap}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="bella-hair-studio"
                  value={slug}
                  onChange={(e) => {
                    setSlugTouched(true)
                    setSlug(slugify(e.target.value))
                  }}
                  required
                />
              </div>
              <p className={styles.slugPreview}>{slug || 'yourslug'}.packstack.co.za</p>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Your Email</label>
              <input
                className={styles.input}
                type="email"
                placeholder="you@yourbusiness.com"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Password</label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="At least 12 characters"
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Confirm Password</label>
                <input
                  className={styles.input}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className={styles.trialNote}>
              You'll enter your card details on the next step to secure your plan, but you won't be charged until
              your 14-day free trial ends. Cancel anytime before then from your dashboard and you'll never be billed.
            </p>

            {fieldError && <p className={styles.errorMsg}>{fieldError}</p>}
            {submitError && <p className={styles.errorMsg}>{submitError}</p>}

            <div className={styles.formActions}>
              <button type="button" className={styles.backBtn} onClick={() => setStep('plan')} disabled={submitting}>
                Back
              </button>
              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 size={16} className={styles.spinnerIcon} /> Setting up your salon…
                  </>
                ) : (
                  'Continue to Payment'
                )}
              </button>
            </div>
          </form>
        )}

        <button type="button" className={styles.cancelLink} onClick={() => navigate('/salon-booking')}>
          &larr; Back to Salon Booking
        </button>
      </div>
    </section>
  )
}
