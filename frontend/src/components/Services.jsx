import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const services = [
    {
      icon: <FaLaptop className="text-6xl text-primary transition-all duration-300 group-hover:text-7xl" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.js with a focus on user experience and modern design principles."
    },
    {
      icon: <FaLaptopCode className="text-6xl text-primary transition-all duration-300 group-hover:text-7xl" />,
      title: "Backend Development",
      description: "Developing robust server-side applications using Node.js, Express, and Java, with proper database integration and API development."
    },
    {
      icon: <FaAndroid className="text-6xl text-primary transition-all duration-300 group-hover:text-7xl" />,
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment, ensuring seamless integration between frontend and backend components."
    },
    {
      icon: <FaApple className="text-6xl text-primary transition-all duration-300 group-hover:text-7xl" />,
      title: "E-learning Platforms",
      description: "Specialized in developing educational technology solutions and learning management systems with interactive features and content management."
    }
  ]

  return (
    <section id="service" className="relative w-full py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-12"
        >
          <p className="inline-block relative px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase text-primary">
            What I Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="service-item group flex items-center bg-transparent border border-transparent rounded-lg p-6 transition-all duration-500 hover:bg-primary hover:shadow-2xl cursor-pointer"
              style={{
                boxShadow: 'inset 0 0 0 0 transparent',
              }}
              whileHover={{
                boxShadow: 'inset 800px 0 0 0 #EF233C',
              }}
            >
              {/* Service Icon */}
              <div className="service-icon flex items-center justify-center w-36 min-h-36 border border-primary bg-white mr-8">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="service-text flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors duration-1000">
                  {service.title}
                </h3>
                <p className="text-base text-light group-hover:text-white transition-colors duration-1000 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
