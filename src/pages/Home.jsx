import Hero from '../components/Hero/Hero'
import Partners from '../components/Partners/Partners'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import Pricing from '../components/Pricing/Pricing'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Process />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}