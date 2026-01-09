import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString()
      }

      await emailjs.send(
        'service_6eigsrd', // Service ID
        'template_xprl5er', // Template ID
        templateParams,
        'gap61koQe1vvrBNGi' // User ID
      )

      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitMessage('Oops! Something went wrong. Please try again later or contact me directly at kishoresanthosh14622@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="contact-info"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="contact-details space-y-4 mb-8">
                <p className="flex items-center text-white text-lg">
                  <FaMapMarkerAlt className="mr-3 text-primary" />
                  Chennai, Tamil Nadu, India
                </p>
                <p className="flex items-center text-white text-lg">
                  <FaPhone className="mr-3 text-primary" />
                  +91 9566163816
                </p>
                <p className="flex items-center text-white text-lg">
                  <FaEnvelope className="mr-3 text-primary" />
                  kishoresathosh14622@gmail.com
                </p>
              </div>

              <div className="social flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kishore-kumar-a9652828b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/KISHORE-14622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-primary transition-colors duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 md:pl-8" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-form"
            >
              {submitMessage && (
                <div className={`mb-6 p-4 rounded ${submitMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-0 py-4 text-white bg-transparent border-0 border-b border-white border-opacity-50 focus:outline-none focus:border-primary placeholder-white"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-0 py-4 text-white bg-transparent border-0 border-b border-white border-opacity-50 focus:outline-none focus:border-primary placeholder-white"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-0 py-4 text-white bg-transparent border-0 border-b border-white border-opacity-50 focus:outline-none focus:border-primary placeholder-white"
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full px-0 py-4 text-white bg-transparent border-0 border-b border-white border-opacity-50 focus:outline-none focus:border-primary placeholder-white resize-none"
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 px-8 py-3 text-primary bg-white border-2 border-white rounded-full font-semibold tracking-wider transition-all duration-300 hover:text-white hover:bg-transparent hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: 'inset 0 0 0 50px #ffffff' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
