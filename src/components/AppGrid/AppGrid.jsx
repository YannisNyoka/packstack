import { useEffect, useState } from 'react'
import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import { Button } from '../ui/Button'
import { ScreenshotFrame } from '../ui/ScreenshotFrame'
import { PhoneMockup } from '../ui/PhoneMockup'
import { getPlans } from '../../api/plans'
import styles from './AppGrid.module.css'

const groups = [
  {
    src: '/screenshots/booking-flow.png',
    alt: 'A customer picking a date and time on the NXL Beauty Bar online booking page',
    features: [
      ['Online booking', 'Live availability, booked in a few taps - no back-and-forth.'],
      ['WhatsApp & email reminders', 'Confirmations and reminders sent automatically.'],
      ['Deposits via Yoco', 'Optional deposit at booking time, so there’s skin in the game.'],
    ],
  },
  {
    src: '/screenshots/admin-dashboard.png',
    alt: 'The NXL Beauty Bar admin dashboard, showing bookings, revenue and a revenue trend chart',
    features: [
      ['Staff schedules', 'Working hours, time off, and conflict-free bookings.'],
      ['Loyalty rewards', 'Points earned on completed visits, redeemed automatically.'],
      ['Admin dashboard', 'Every booking, customer and payment in one place.'],
    ],
  },
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
      <div className={styles.header}>
        <div className={styles.headerText}>
          <Label number="01">Products</Label>
          <h2 className={styles.title}>PackStack Booking</h2>
          <p className={styles.intro}>
            Real-time online booking software for salons and service businesses - the system a
            client books into, and the dashboard a business runs from. Screenshots on this page
            are real businesses running on PackStack today: NXL Beauty Bar and NailsByMandisa.
          </p>
        </div>
        <PhoneMockup
          src="/screenshots/nailsbymandisa-app.jpg"
          alt="The NailsByMandisa booking page on a phone, showing its hero and 'Book an appointment' button"
          tilt="right"
          className={styles.headerPhone}
        />
      </div>

      <div className={styles.groups}>
        {groups.map((group, i) => (
          <div key={group.src} className={`${styles.group} ${i % 2 === 1 ? styles.groupReverse : ''}`}>
            <ScreenshotFrame src={group.src} alt={group.alt} chrome="browser" className={styles.shot} />
            <dl className={styles.featureList}>
              {group.features.map(([term, desc]) => (
                <div key={term} className={styles.featureRow}>
                  <dt>{term}</dt>
                  <dd>{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

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
    </Section>
  )
}
