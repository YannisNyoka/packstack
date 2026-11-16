import PlatformHero from '../components/PlatformHero/PlatformHero'
import Proof from '../components/Proof/Proof'
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
      '@type': 'LocalBusiness',
      name: 'PackStack',
      url: 'https://packstack.co.za',
      address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressCountry: 'ZA' },
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
    title: 'Booking Software for South African Service Businesses',
    description:
      'PackStack builds and runs the systems South African salons, clinics and small businesses use every day: online booking, payments, reminders and websites. One monthly fee, local support.',
    path: '/',
    jsonLd: HOME_JSON_LD,
  })

  return (
    <main>
      <PlatformHero />
      <Proof />
      <AppGrid />
      <Contact />
      <Footer />
    </main>
  )
}
