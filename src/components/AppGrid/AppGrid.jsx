import { useEffect, useState } from 'react'
import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import { Button } from '../ui/Button'
import { getPlans } from '../../api/plans'
import styles from './AppGrid.module.css'

const features = [
  ['Online booking', 'Live availability, booked in a few taps - no back-and-forth.'],
  ['WhatsApp & email reminders', 'Confirmations and reminders sent automatically.'],
  ['Deposits via Yoco', 'Optional deposit at booking time, so there’s skin in the game.'],
  ['Staff schedules', 'Working hours, time off, and conflict-free bookings.'],
  ['Loyalty rewards', 'Points earned on completed visits, redeemed automatically.'],
  ['Admin dashboard', 'Every booking, customer and payment in one place.'],
]

export default function AppGrid() {
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [startingPrice, setStartingPrice] = useState(null)

  useEffect(() => {
    let cancelled = false
    getPlans()
      .then((plans) => {
        if (cancelled) return
        if (plans.length === 0) {
          setStatus('error')
          return
        }
        const cheapest = [...plans].sort((a, b) => a.priceZAR - b.priceZAR)[0]
        setStartingPrice(cheapest.priceZAR)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Section id="apps">
      <Label number="01">Products</Label>
      <h2 className={styles.title}>PackStack Booking</h2>
      <p className={styles.intro}>
        Real-time online booking software for salons and service businesses - the system a
        client books into, and the dashboard a business runs from.
      </p>

      <div className={styles.body}>
        <dl className={styles.featureList}>
          {features.map(([term, desc]) => (
            <div key={term} className={styles.featureRow}>
              <dt>{term}</dt>
              <dd>{desc}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.aside}>
          <div className={styles.price}>
            {status === 'ready' && startingPrice !== null && (
              <>From R{startingPrice.toLocaleString('en-ZA')}<span>/month</span></>
            )}
            {status === 'loading' && <span className={styles.priceLoading}>Loading pricing…</span>}
            {status === 'error' && <span className={styles.priceLoading}>See pricing</span>}
          </div>
          <Button to="/salon-booking">See the booking app</Button>
        </div>
      </div>
    </Section>
  )
}
