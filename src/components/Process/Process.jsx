import { Check } from 'lucide-react'
import styles from './Process.module.css'
import Droplet from '../Droplet/Droplet'

const steps = [
  {
    num: '01',
    title: 'We Set Up Your Account',
    desc: 'Your services, staff and working hours loaded in - your booking page and dashboard ready to go.',
  },
  {
    num: '02',
    title: 'Share Your Booking Link',
    desc: 'On your website, your Instagram bio, or straight over WhatsApp - wherever your customers already are.',
  },
  {
    num: '03',
    title: 'Customers Book Themselves',
    desc: 'Real, live availability - no back-and-forth. They get a confirmation and a link to reschedule or cancel.',
  },
  {
    num: '04',
    title: 'You Run the Business',
    desc: 'Every booking in one dashboard. Staff manage their own day; you see the whole business at a glance.',
  },
]

const included = [
  'Online booking page',
  'Staff scheduling & time off',
  'WhatsApp & email confirmations',
  'Loyalty points',
  'Deposit payments via Yoco',
  'Your own custom domain',
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.inner}>
        <Droplet>
          <div className={styles.left}>
            <div className={styles.label}>Getting Started</div>
            <h2 className={styles.title}>Live in an Afternoon, Not Weeks</h2>
            <p className={styles.sub}>
              No technical setup on your end - just tell us about your business and start
              taking bookings.
            </p>
            <div className={styles.steps}>
              {steps.map(s => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{s.title}</h4>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Droplet>

        <Droplet delay={200}>
          <div className={styles.visual}>
            <div className={styles.vizTitle}>What's Included</div>
            <ul className={styles.checklist}>
              {included.map(item => (
                <li key={item} className={styles.checklistItem}>
                  <Check size={15} strokeWidth={2.5} className={styles.checklistCheck} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Droplet>
      </div>
    </section>
  )
}
