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
      category: "filter-2",
      image: portfolio2,
      link: "https://trading-site-701r.onrender.com"
    },
    {
      id: 3,
      title: "Restaurant project",
      category: "filter-3",
      image: portfolio3,
      link: "https://restuarant-frontend-kjeu.onrender.com"
    },
    {
      id: 4,
      title: "Smart Calculator",
      category: "filter-3",
      image: portfolio4,
      link: "#"
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
    <section id="portfolio" className="relative w-full py-16 bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-12"
        >
          <p className="inline-block relative px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-pink-300 section-header-line">
            My Projects
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-accent">
            Portfolio Showcase
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="portfolio-filter flex flex-wrap justify-center mb-8 gap-2"
        >
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-4 py-2 text-sm font-semibold border-2 rounded-none transition-all duration-300 ${
                activeFilter === button.id
                  ? 'text-primary bg-transparent border-primary'
                  : 'text-white bg-primary border-transparent hover:text-primary hover:bg-transparent hover:border-primary'
              }`}
              style={{
                boxShadow: activeFilter === button.id 
                  ? 'inset 0 0 0 0 #EF233C' 
                  : 'inset 0 0 0 50px #EF233C'
              }}
            >
              {button.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div ref={ref} className="portfolio-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="portfolio-item group"
            >
              <div className="portfolio-wrap relative w-full">
                {/* Portfolio Image */}
                <div className="portfolio-img relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transform scale-110 transition-transform duration-500 group-hover:ml-4"
                  />
                </div>

                {/* Portfolio Text */}
                <div className="portfolio-text relative h-15 w-full -mt-8 mx-4 flex items-center bg-white shadow-lg z-10">
                  <h3 className="flex-1 text-lg font-semibold text-gray-800 mx-4 whitespace-nowrap overflow-hidden">
                    {item.title}
                  </h3>
                  
                  {item.link !== '#' ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center text-4xl font-thin btn-primary group-hover:text-primary group-hover:bg-transparent group-hover:border-primary"
                    >
                      +
                    </a>
                  ) : (
                    <button className="w-12 h-12 flex items-center justify-center text-4xl font-thin btn-primary group-hover:text-primary group-hover:bg-transparent group-hover:border-primary">
                      +
                    </button>
                  )}
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
