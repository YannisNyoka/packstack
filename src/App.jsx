import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Loader from './components/Loader/Loader'
import BackToTop from './components/BackToTop/BackToTop'
import WhatsApp from './components/WhatsApp/WhatsApp'
import CursorGlow from './components/CursorGlow/CursorGlow'
import CookieBanner from './components/CookieBanner/CookieBanner'
import SoundToggle from './components/SoundToggle/SoundToggle'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <CursorGlow />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BackToTop />
        <WhatsApp />
        <SoundToggle />
        <CookieBanner />
      </div>
    </>
  )
}

export default App