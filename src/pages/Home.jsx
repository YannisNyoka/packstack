import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}