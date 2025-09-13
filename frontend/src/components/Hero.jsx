import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 45
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center bg-hero bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(161, 4, 179, 0.95), rgba(239, 35, 60, 0.95)), url(${heroBg})`
      }}
    >
      <div className="container mx-auto px-4 py-32">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-text"
              >
                <p className="text-black text-2xl font-semibold mb-4">I'm</p>
                <h1 className="text-black text-5xl md:text-6xl font-bold tracking-wider mb-4">
                  Kishore Kumar
                </h1>
                <div className="text-black text-3xl md:text-4xl font-semibold mb-8 h-12">
                  <TypeAnimation
                    sequence={[
                      'Web Developer',
                      2000,
                      'Frontend Developer',
                      2000,
                      'Backend Developer',
                      2000,
                      'Full Stack Developer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-black"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-buttons flex flex-col sm:flex-row gap-4 mt-8"
              >
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 text-black bg-white border-2 border-white rounded-full font-semibold tracking-wider transition-all duration-300 hover:text-white hover:bg-transparent hover:border-white"
                  style={{ boxShadow: 'inset 0 0 0 50px #fae9e9' }}
                >
                  Hire Me
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 text-black bg-white border-2 border-white rounded-full font-semibold tracking-wider transition-all duration-300 hover:text-white hover:bg-transparent hover:border-white"
                  style={{ boxShadow: 'inset 0 0 0 50px #fae9e9' }}
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
