import { Section } from '../ui/Section'
import { Label } from '../ui/Label'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'We set up your account',
    desc: 'Your services, staff and working hours loaded in - your booking page and dashboard ready to go.',
  },
  {
    num: '02',
    title: 'Share your booking link',
    desc: 'On your website, your Instagram bio, or straight over WhatsApp - wherever your customers already are.',
  },
  {
    num: '03',
    title: 'Customers book themselves',
    desc: 'Real, live availability - no back-and-forth. They get a confirmation and a link to reschedule or cancel.',
  },
  {
    num: '04',
    title: 'You run the business',
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
    <Section id="process">
      <div className={styles.inner}>
        <div className={styles.left}>
          <Label number="02">Process</Label>
          <h2 className={styles.title}>Live in an afternoon, not weeks</h2>
          <p className={styles.sub}>
            No technical setup on your end - just tell us about your business and start taking
            bookings.
          </p>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.vizTitle}>What's included</div>
          <ul className={styles.checklist}>
            {included.map((item) => (
              <li key={item} className={styles.checklistItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
