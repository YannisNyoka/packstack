import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lightbulb, Check } from 'lucide-react'
import styles from './Pricing.module.css'
import Droplet from '../Droplet/Droplet'
import { getPlans } from '../../api/plans'

function formatPrice(plan) {
  const amount = `R${plan.priceZAR.toLocaleString('en-ZA')}`
  const interval = plan.billingInterval === 'annual' ? 'year' : 'month'
  return { amount, interval }
}

function featuresFor(plan) {
  const { limits } = plan
  const list = [
    limits.maxStaff === 1 ? '1 staff member' : `Up to ${limits.maxStaff} staff members`,
    `${limits.maxAppointmentsPerMonth.toLocaleString('en-ZA')} appointments / month`,
    'Online booking page',
    'Staff scheduling',
    'Email confirmations',
    'Loyalty points',
  ]
  if (limits.whatsappMessagesPerMonth > 0) {
    list.push(`${limits.whatsappMessagesPerMonth.toLocaleString('en-ZA')} WhatsApp messages / month`)
  }
  if (limits.customDomainAllowed) {
    list.push('Your own custom domain')
  }
  return list
}

export default function Pricing() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading') // loading | ready | empty | error
  const [plans, setPlans] = useState([])

  useEffect(() => {
    let cancelled = false
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
    }
  }, [])

  const handleNav = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="pricing">
      <Droplet>
        <div className={styles.header}>
          <div className={styles.label}>Pricing</div>
          <h2 className={styles.title}>Simple, Subscription Pricing</h2>
          <p className={styles.sub}>
            One flat monthly fee per plan — no per-booking fees, no hidden charges.
          </p>
          <div className={styles.disclaimer}>
            <Lightbulb size={15} strokeWidth={2} className={styles.disclaimerIcon} />
            Prices in ZAR, billed monthly. Cancel anytime.
          </div>
        </div>
      </Droplet>

      {status === 'loading' && (
        <div className={styles.statusPanel}>
          <div className={styles.spinner} />
          <p className={styles.statusText}>Loading pricing…</p>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.statusPanel}>
          <p className={styles.statusText}>
            We couldn't load pricing right now. Reach out and we'll sort out a plan for your business directly.
          </p>
          <button className={`${styles.cta} ${styles.ctaPrimary} ${styles.statusCta}`} onClick={handleNav}>
            Contact Us
          </button>
        </div>
      )}

      {status === 'empty' && (
        <div className={styles.statusPanel}>
          <p className={styles.statusText}>
            We're finalizing our plans. Tell us about your business and we'll set you up with pricing that fits.
          </p>
          <button className={`${styles.cta} ${styles.ctaPrimary} ${styles.statusCta}`} onClick={handleNav}>
            Get in Touch
          </button>
        </div>
      )}

      {status === 'ready' && (
        <div className={styles.grid}>
          {plans.map((p, i) => {
            const { amount, interval } = formatPrice(p)
            return (
              <Droplet key={p.key} delay={i * 120}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.planName}>{p.name}</div>
                    <div className={styles.priceWrap}>
                      <div className={styles.fromLabel}>Per {interval}</div>
                      <div className={styles.price}>{amount}</div>
                    </div>
                  </div>

                  <div className={styles.divider} />

                  <ul className={styles.features}>
                    {featuresFor(p).map((f) => (
                      <li key={f} className={styles.feature}>
                        <Check size={15} strokeWidth={2.5} className={styles.check} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`${styles.cta} ${styles.ctaPrimary}`} onClick={() => navigate(`/signup?plan=${p.key}`)}>
                    Start Free Trial
                  </button>
                </div>
              </Droplet>
            )
          })}
        </div>
      )}
    </section>
  )
}
