import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import aboutImg from '../assets/about.jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skills = [
    { name: 'HTML/CSS/JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Node.js/Express', percentage: 80 },
    { name: 'Java', percentage: 75 }
  ]

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
    <section id="about" className="relative w-full py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <img 
                src={aboutImg} 
                alt="About Kishore Kumar" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-16" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-content"
            >
              {/* Section Header */}
              <div className="section-header text-left mb-8">
                <p className="inline-block relative px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-pink-300 section-header-line">
                  Learn About Me
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-accent">
                  Final Year Student & Web Developer
                </h2>
              </div>

              {/* About Text */}
              <div className="about-text mb-8">
                <p className="text-base mb-4 text-light">
                  I'm Kishore kumar, a passionate web developer currently pursuing my B.E in Computer Science Engineering at S.A. Engineering College (2022-2026 batch). With a creative mindset and strong technical skills, I specialize in building responsive and user-friendly web applications.
                </p>
                <p className="text-base text-light">
                  Currently, I'm developing an E-learning platform for Branddict Branding Agency as part of my internship. I thrive in IT environments and am actively seeking internship and permanent roles where I can apply my skills and continue growing as a developer.
                </p>
              </div>

              {/* Skills */}
              <div className="skills mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="skill-item mt-4"
                  >
                    <div className="skill-name flex justify-between mb-2">
                      <p className="text-base font-normal text-light">{skill.name}</p>
                      <p className="text-base font-normal text-light">{skill.percentage}%</p>
                    </div>
                    <div className="progress h-2.5 bg-blue-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 2, delay: 0.6 + index * 0.1 }}
                        className="progress-bar h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={scrollToContact}
                className="btn-primary mt-4"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
