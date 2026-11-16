import { Section } from '../components/ui/Section'
import { Label } from '../components/ui/Label'
import { Container } from '../components/ui/Container'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'
import styles from './About.module.css'

const localFit = [
  {
    title: 'WhatsApp-first',
    body: 'Booking confirmations and reminders go out over WhatsApp and email, because that’s how most South Africans actually want to hear from a business.',
  },
  {
    title: 'Local payment rails',
    body: 'Subscriptions run on PayFast, deposits run on Yoco, and every price on this site is in Rand - no currency conversion, no surprises.',
  },
  {
    title: 'POPIA-conscious',
    body: 'Passwords are hashed, integration credentials are encrypted at rest, and every business’s data is isolated from every other business on the platform.',
  },
  {
    title: 'One flat price',
    body: 'A single monthly subscription per plan - no per-booking fees, no hidden charges stacked on top once you’re signed up.',
  },
]

export default function About() {
  useSEO({
    title: 'About',
    description:
      'PackStack builds business software for South African service companies - WhatsApp-first, local payment rails, and POPIA-aware by design.',
    path: '/about',
  })

  return (
    <main>
      <section className={styles.header}>
        <Container>
          <Label>About</Label>
          <h1 className={styles.title}>Business software, built for South Africa</h1>
          <p className={styles.intro}>
            PackStack builds software for South African service businesses - starting with
            Booking Appointment, our online scheduling platform for salons and similar
            businesses, with more apps on the way. Outside the platform, we also take on
            custom web, app, SEO, and social media projects for clients who need something
            built from scratch.
          </p>
        </Container>
      </section>

      <Section>
        <h2 className={styles.sectionTitle}>What we're building</h2>
        <p className={styles.sectionSub}>
          Booking Appointment is live today: real-time online booking, staff scheduling,
          WhatsApp and email confirmations, deposits via Yoco, loyalty rewards, and support
          for your own custom domain. It won't be the only app on the platform for long.
        </p>

        <dl className={styles.list}>
          {localFit.map((item) => (
            <div key={item.title} className={styles.row}>
              <dt>{item.title}</dt>
              <dd>{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Contact />
      <Footer />
    </main>
  )
}
