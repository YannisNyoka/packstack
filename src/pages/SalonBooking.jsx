import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Partners from '../components/Partners/Partners'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import { faqs } from '../components/FAQ/faqData'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

// Module-level, built from the same static faqs array FAQ.jsx itself
// renders - a stable reference (useSEO's jsonLd param requires one) that
// can never drift from what's actually shown on the page.
const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function SalonBooking() {
  useSEO({
    title: 'Salon Booking Software',
    description:
      'Booking Appointment is real-time online booking software for salons and service businesses: staff scheduling, WhatsApp & email confirmations, deposits via Yoco, loyalty rewards, and your own custom domain.',
    path: '/salon-booking',
    jsonLd: FAQ_JSON_LD,
  })

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Partners />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
