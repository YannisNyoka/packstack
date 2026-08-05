import PlatformHero from '../components/PlatformHero/PlatformHero'
import AppGrid from '../components/AppGrid/AppGrid'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <PlatformHero />
      <AppGrid />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
