import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 45
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-dark-card/80 backdrop-blur-md shadow-lg shadow-primary/20 py-3 border-b border-primary/20'
        : 'bg-transparent border-b border-white/10 py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider cursor-pointer transition-all duration-300 ${isScrolled ? 'text-white' : 'text-white'
              }`}
            onClick={() => scrollToSection('home')}
          >
            <span className="gradient-text">PORTFOLIO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 xl:px-6 py-2 xl:py-3 text-base xl:text-lg font-semibold rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 ${activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-primary to-purple-glow shadow-lg shadow-primary/50'
                  : 'gradient-text hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${isScrolled
                ? 'text-white'
                : 'text-white'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-2 bg-dark-card/95 backdrop-blur-md rounded-lg shadow-xl shadow-primary/20 overflow-hidden border border-primary/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-primary to-purple-glow shadow-md'
                    : 'gradient-text hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
