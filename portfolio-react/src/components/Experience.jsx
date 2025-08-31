import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const experiences = [
    {
      date: "2022 - 2026",
      title: "B.E in Computer Science Engineering",
      company: "S.A. Engineering College, Chennai",
      description: "Currently in Final year with focus on web development alongside CSE curriculum. Active participant in coding competitions and tech events.",
      side: "left"
    },
    {
      date: "2025 - Present",
      title: "Web Development Intern",
      company: "Branddict Branding Agency",
      description: "Developing an E-learning website with interactive features, content management system, and user progress tracking. Working with React and Node.js.",
      side: "right"
    },
    {
      date: "2025",
      title: "ONLINE OD APPROVAL SYSTEM",
      company: "Academic Project",
      description: "An Online OD (On Duty) Approval System for College is a web-based platform that allows students to apply for OD requests digitally for academic, cultural, Internships or sports events. Faculty and administrators can review, approve, or reject applications efficiently through the system, ensuring transparent and streamlined communication. It reduces paperwork, improves tracking, and enhances overall management of student attendance exceptions.",
      side: "left"
    },
    {
      date: "2024 - 2025",
      title: "Mini Projects",
      company: "Personal Development",
      description: "Created various applications including Tic-Tac-Toe game, stopwatch, calculator with finger detection, and other web-based tools to enhance skills.",
      side: "right"
    }
  ]

  return (
    <section id="experience" className="relative w-full py-16 bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-12"
        >
          <p className="inline-block relative px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-pink-300 section-header-line">
            My Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-accent">
            Education & Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="timeline relative w-full">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-0.5 bg-blue-300 top-0 bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`timeline-item relative bg-inherit w-full md:w-1/2 mb-8 ${
                exp.side === 'left' 
                  ? 'md:left-0 md:pr-8' 
                  : 'md:left-1/2 md:pl-8'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`timeline-dot absolute w-4 h-4 top-12 bg-gray-200 border-2 border-purple-600 rounded-full z-10 ${
                exp.side === 'left' 
                  ? 'md:-right-2 left-0 md:left-auto' 
                  : 'md:-left-2 left-0'
              }`}></div>

              {/* Timeline Arrow */}
              <div className={`absolute top-11 z-10 ${
                exp.side === 'left'
                  ? 'md:right-2.5 left-4 md:left-auto border-l-0 md:border-l-10 border-r-10 md:border-r-0 border-t-10 border-b-10 border-transparent md:border-r-gray-200 border-l-gray-200 md:border-l-transparent'
                  : 'md:left-2.5 left-4 border-r-0 md:border-r-10 border-l-10 md:border-l-0 border-t-10 border-b-10 border-transparent md:border-l-gray-200 border-r-gray-200 md:border-r-transparent'
              }`}></div>

              {/* Date */}
              <div className={`timeline-date absolute w-full top-11 text-base font-semibold text-purple-400 uppercase tracking-wider z-10 ${
                exp.side === 'left'
                  ? 'md:text-left md:left-full md:ml-14 text-left pl-8'
                  : 'md:text-right md:right-full md:mr-14 text-left pl-8'
              }`}>
                {exp.date}
              </div>

              {/* Content */}
              <div className={`timeline-text p-8 bg-white relative shadow-lg ${
                exp.side === 'left'
                  ? 'border-r-4 border-gray-300 ml-6 md:ml-0'
                  : 'border-l-4 border-gray-300 ml-6 md:ml-0'
              }`}>
                <h2 className="text-xl font-semibold text-accent mb-2">
                  {exp.title}
                </h2>
                <h4 className="text-base italic font-normal text-gray-600 mb-4">
                  {exp.company}
                </h4>
                <p className="text-base text-gray-800 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
