import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Full-Stack Development Intern',
      company: 'NSIC, Chennai',
      location: 'Chennai',
      type: 'Government-based organization',
      period: 'June 2024 – July 2024',
    },
    {
      title: 'Frontend Developer (Implant Training)',
      company: 'Astro Web Solution',
      location: 'Madurai',
      type: 'Private Company',
      period: 'May 2023 – June 2023',
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Professional <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="ml-12 md:ml-0 md:flex md:justify-center">
                    <div className="md:w-11/12 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaBriefcase className="text-white" size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300 mb-2 text-sm">
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt size={12} />
                              <span>{exp.location}</span>
                            </div>
                            <span>•</span>
                            <span>{exp.type}</span>
                          </div>
                          <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

