import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import SalonBooking from './pages/SalonBooking'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Signup from './pages/Signup'
import OpenApp from './pages/OpenApp'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import BackToTop from './components/BackToTop/BackToTop'
import WhatsApp from './components/WhatsApp/WhatsApp'
import CookieBanner from './components/CookieBanner/CookieBanner'

// Every page navigation in this app either lands at the top or at an anchor
// within that page's own sections (e.g. Footer/Navbar links to
// "/salon-booking#pricing"). React Router doesn't scroll to hashes on its
// own, so this does it after the target page has mounted.
function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollToHash />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salon-booking" element={<SalonBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<OpenApp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <BackToTop />
      <WhatsApp />
      <CookieBanner />
    </>
  )
}

export default App
