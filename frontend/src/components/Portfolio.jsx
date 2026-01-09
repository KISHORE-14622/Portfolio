import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolio1 from '../assets/portfolio-1.jpg'
import portfolio2 from '../assets/portfolio-2.jpg'
import portfolio3 from '../assets/portfolio-3.jpg'
import portfolio4 from '../assets/portfolio-4.jpg'
import portfolio5 from '../assets/portfolio-5.jpg'
import portfolio6 from '../assets/portfolio-6.jpg'

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('*')

  const portfolioItems = [
    {
      id: 1,
      title: "E-learning Platform",
      category: "filter-1",
      image: portfolio1,
      link: "https://learningweb-5sih.onrender.com"
    },
    {
      id: 2,
      title: "Trading Site",
      category: "filter-1",
      image: portfolio2,
      link: "https://trading-site-701r.onrender.com"
    },
    {
      id: 3,
      title: "Restaurant Project",
      category: "filter-1",
      image: portfolio3,
      link: "https://restuarant-frontend-kjeu.onrender.com"
    },
    {
      id: 4,
      title: "Garments Management",
      category: "filter-1",
      image: portfolio4,
      link: "https://vl-garments-g2q9.onrender.com"
    }

  ]

  const filterButtons = [
    { id: '*', label: 'All' },
    { id: 'filter-1', label: 'Web Development' },
    { id: 'filter-2', label: 'Academic Projects' },
    { id: 'filter-3', label: 'Mini Projects' }
  ]

  const filteredItems = activeFilter === '*'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="relative w-full py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-12"
        >
          <p className="inline-block relative px-6 py-2 mb-4 text-sm font-semibold tracking-wider uppercase text-primary">
            My Projects
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="portfolio-filter flex flex-wrap justify-center mb-12 gap-3"
        >
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${activeFilter === button.id
                ? 'text-white bg-gradient-to-r from-primary to-purple-glow shadow-lg shadow-primary/50 scale-105'
                : 'text-light bg-dark-card border border-primary/20 hover:border-primary/50 hover:shadow-md hover:shadow-primary/30'
                }`}
            >
              {button.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div ref={ref} className="portfolio-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="portfolio-item group"
            >
              <div className="relative w-full h-full bg-dark-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2">
                {/* Portfolio Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-60"></div>
                </div>

                {/* Gradient Overlay - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/40 via-blue-glow/30 to-transparent pointer-events-none"></div>

                {/* Content */}
                <div className="relative p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white flex-1">
                      {item.title}
                    </h3>

                    {item.link !== '#' ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-glow text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    ) : (
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-glow text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
