import PlatformHero from '../components/PlatformHero/PlatformHero'
import AppGrid from '../components/AppGrid/AppGrid'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'Business Apps for South African Companies',
    description:
      'PackStack is a growing platform of business apps for South African companies. Start with Booking Appointment — real-time online booking, staff scheduling, WhatsApp & email confirmations, loyalty rewards and deposit payments for salons.',
    path: '/',
  })

  return (
    <main>
      <PlatformHero />
      <AppGrid />
      <Contact />
      <Footer />
    </main>
  )
}
