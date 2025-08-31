import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App bg-dark text-light font-montserrat">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
