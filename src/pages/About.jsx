import { Smartphone, Wallet, ShieldCheck, Layers } from 'lucide-react'
import styles from './About.module.css'
import Droplet from '../components/Droplet/Droplet'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

const localFit = [
  {
    icon: Smartphone,
    title: 'WhatsApp-first',
    body: 'Booking confirmations and reminders go out over WhatsApp and email, because that’s how most South Africans actually want to hear from a business.',
  },
  {
    icon: Wallet,
    title: 'Local payment rails',
    body: 'Subscriptions run on PayFast, deposits run on Yoco, and every price on this site is in Rand — no currency conversion, no surprises.',
  },
  {
    icon: ShieldCheck,
    title: 'POPIA-conscious',
    body: 'Passwords are hashed, integration credentials are encrypted at rest, and every business’s data is isolated from every other business on the platform.',
  },
  {
    icon: Layers,
    title: 'One flat price',
    body: 'A single monthly subscription per plan — no per-booking fees, no hidden charges stacked on top once you’re signed up.',
  },
]

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'PackStack builds business software for South African service companies — WhatsApp-first, local payment rails, and POPIA-aware by design. Meet the team behind Booking Appointment.',
    path: '/about',
  })

  return (
    <main>
      <section className={styles.header}>
        <Droplet>
          <div className={styles.label}>About Us</div>
          <h1 className={styles.title}>Business software, built for South Africa</h1>
          <p className={styles.intro}>
            PackStack builds software for South African service businesses — starting with
            Booking Appointment, our online scheduling platform for salons and similar
            businesses, with more apps on the way. Outside the platform, we also take on
            custom web, app, SEO, and social media projects for clients who need something
            built from scratch.
          </p>
        </Droplet>
      </section>

      <section className={styles.section}>
        <Droplet>
          <div className={styles.sectionHeader}>
            <div className={styles.label}>What we're building</div>
            <h2 className={styles.sectionTitle}>One platform, growing app by app</h2>
            <p className={styles.sectionSub}>
              Booking Appointment is live today: real-time online booking, staff scheduling,
              WhatsApp and email confirmations, deposits via Yoco, loyalty rewards, and support
              for your own custom domain. It won't be the only app on the platform for long.
            </p>
          </div>
        </Droplet>

        <div className={styles.grid}>
          {localFit.map((item, i) => {
            const Icon = item.icon
            return (
              <Droplet key={item.title} delay={i * 100}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.body}</p>
                </div>
              </Droplet>
            )
          })}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
