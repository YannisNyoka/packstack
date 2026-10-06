import PlatformHero from '../components/PlatformHero/PlatformHero'
import AppGrid from '../components/AppGrid/AppGrid'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

// Module-level constant, not built inline in the component - useSEO's
// jsonLd param must be a stable reference or it re-creates the <script>
// tag on every render. R99 here duplicates FAQ.jsx's own copy of the
// Starter price - no shared pricing constant exists in this codebase yet,
// so both need updating together if pricing changes.
const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'PackStack',
      url: 'https://packstack.co.za',
      logo: 'https://packstack.co.za/favicon.svg',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'PackStack Booking Appointment',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '99', priceCurrency: 'ZAR' },
      url: 'https://packstack.co.za/salon-booking',
    },
  ],
}

export default function Home() {
  useSEO({
    title: 'Business Apps for South African Companies',
    description:
      'PackStack is a growing platform of business apps for South African companies. Start with Booking Appointment — real-time online booking, staff scheduling, WhatsApp & email confirmations, loyalty rewards and deposit payments for salons.',
    path: '/',
    jsonLd: HOME_JSON_LD,
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
