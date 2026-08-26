import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Partners from '../components/Partners/Partners'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

export default function SalonBooking() {
  useSEO({
    title: 'Salon Booking Software',
    description:
      'Booking Appointment is real-time online booking software for salons and service businesses: staff scheduling, WhatsApp & email confirmations, deposits via Yoco, loyalty rewards, and your own custom domain.',
    path: '/salon-booking',
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
