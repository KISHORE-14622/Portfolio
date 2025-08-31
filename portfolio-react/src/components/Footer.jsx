import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-info text-center"
        >
          <h2 className="text-3xl font-bold mb-5">Kishore Kumar</h2>
          <h3 className="text-xl font-semibold mb-6">Chennai, Tamil Nadu, India</h3>
          
          <div className="footer-menu flex flex-col sm:flex-row justify-center items-center mb-4">
            <p className="text-xl font-semibold px-4 border-r border-white border-opacity-50 mb-2 sm:mb-0">
              +91 9566163816
            </p>
            <p className="text-xl font-semibold px-4">
              kishoresanthosh14622@gmail.com
            </p>
          </div>
          
          <div className="footer-social flex justify-center space-x-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/kishore-kumar-a9652828b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-400 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/KISHORE-14622" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
        
        <div className="copyright relative text-center pt-6 border-t border-white border-opacity-20">
          <p className="text-white">
            &copy; <span className="font-semibold">2025</span>, All Rights Reserved | Designed By Kishore Kumar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
