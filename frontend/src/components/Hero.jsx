import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ProfileCard from './ProfileCard'

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{
        background: 'transparent'
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-12 flex-col lg:flex-row">
          {/* Left side - Hero text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
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
                <p className="text-light text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">I'm</p>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider mb-3 sm:mb-4 text-glow">
                  Kishore Kumar
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 h-10 sm:h-12">
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
                    className="gradient-text font-bold"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start"
              >
                <button
                  onClick={scrollToContact}
                  className="btn-primary"
                >
                  Hire Me
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 sm:px-8 py-3 text-white bg-transparent border-2 border-primary rounded-full font-semibold tracking-wider transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-purple-glow hover:scale-105"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Profile Card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
