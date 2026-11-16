import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import { Button } from '../ui/Button'
import { getPlans } from '../../api/plans'
import styles from './Pricing.module.css'

function formatPrice(plan) {
  const amount = `R${plan.priceZAR.toLocaleString('en-ZA')}`
  const interval = plan.billingInterval === 'annual' ? 'year' : 'month'
  return { amount, interval }
}

export default function Pricing() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading') // loading | ready | empty | error
  const [plans, setPlans] = useState([])
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    let cancelled = false
    // The API can be a few seconds slow to respond right after being idle -
    // rather than leave a bare "loading" line up the whole time, say so once
    // it's taken long enough that a visitor would otherwise assume it's stuck.
    const slowTimer = setTimeout(() => {
      if (!cancelled) setSlow(true)
    }, 3000)

    getPlans()
      .then((data) => {
        if (cancelled) return
        setPlans(data)
        setStatus(data.length > 0 ? 'ready' : 'empty')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })
    return () => {
      cancelled = true
      clearTimeout(slowTimer)
    }
  }, [])

  const handleNav = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="pricing">
      <Label number="03">Pricing</Label>
      <h2 className={styles.title}>Straight-up rand pricing</h2>
      <p className={styles.sub}>One flat monthly fee per plan - no per-booking fees, no hidden charges. Prices in ZAR, billed monthly, cancel anytime.</p>

      {status === 'loading' && (
        <p className={styles.statusText}>{slow ? 'Waking up the server - this can take a few seconds…' : 'Loading pricing…'}</p>
      )}

      {status === 'error' && (
        <div className={styles.statusPanel}>
          <p className={styles.statusText}>We couldn't load pricing right now. Reach out and we'll sort out a plan for your business directly.</p>
          <Button onClick={handleNav}>Contact us</Button>
        </div>
      )}

      {status === 'empty' && (
        <div className={styles.statusPanel}>
          <p className={styles.statusText}>We're finalising our plans. Tell us about your business and we'll set you up with pricing that fits.</p>
          <Button onClick={handleNav}>Get in touch</Button>
        </div>
      )}

      {status === 'ready' && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Staff</th>
                <th>Appointments / mo</th>
                <th>Custom domain</th>
                <th aria-hidden="true" />
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => {
                const { amount, interval } = formatPrice(p)
                return (
                  <tr key={p.key}>
                    <td className={styles.planCell}>{p.name}</td>
                    <td className={styles.priceCell}>
                      {amount}<span>/{interval}</span>
                    </td>
                    <td>{p.limits.maxStaff}</td>
                    <td>{p.limits.maxAppointmentsPerMonth === null ? 'Unlimited' : p.limits.maxAppointmentsPerMonth.toLocaleString('en-ZA')}</td>
                    <td>{p.limits.customDomainAllowed ? 'Yes' : '—'}</td>
                    <td>
                      <Button variant="ghost" className={styles.rowCta} onClick={() => navigate(`/signup?plan=${p.key}`)}>
                        Start free trial
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p className={styles.footnote}>Every plan includes unlimited in-app messaging, booking confirmations and a 14-day free trial.</p>
        </div>
      )}
    </Section>
  )
}
