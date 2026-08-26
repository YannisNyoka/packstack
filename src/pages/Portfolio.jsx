import PortfolioSection from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useSEO } from '../hooks/useSEO'

export default function Portfolio() {
  useSEO({
    title: 'Portfolio',
    description:
      'Custom digital work from the PackStack team — bespoke web and app development, SEO, and social media projects for South African businesses, beyond the platform itself.',
    path: '/portfolio',
  })

  return (
    <main>
      <PortfolioSection />
      <Contact />
      <Footer />
    </main>
  )
}
