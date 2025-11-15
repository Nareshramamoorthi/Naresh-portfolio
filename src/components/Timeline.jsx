import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCertificate, FaCode } from 'react-icons/fa'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedItem, setExpandedItem] = useState(null)

  const timelineItems = [
    {
      type: 'certification',
      icon: FaCertificate,
      year: '2022',
      title: 'Python Programming',
      description: 'iTech Academy',
      details: 'Python fundamentals and advanced programming concepts',
      color: 'from-orange-500 to-orange-600',
    },
    {
      type: 'experience',
      icon: FaBriefcase,
      year: '2023',
      title: 'Frontend Developer (Implant Training)',
      description: 'Astro Web Solution, Madurai',
      details: 'Private Company • May 2023 – June 2023',
      color: 'from-purple-500 to-purple-600',
    },
    {
      type: 'experience',
      icon: FaBriefcase,
      year: '2024',
      title: 'Full-Stack Development Intern',
      description: 'NSIC, Chennai',
      details: 'Government-based organization • June 2024 – July 2024',
      color: 'from-purple-500 to-purple-600',
    },
    {
      type: 'certification',
      icon: FaCertificate,
      year: '2025',
      title: 'Java Programming',
      description: 'NPTEL',
      details: 'Java programming and software development',
      color: 'from-green-500 to-green-600',
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      year: '2025',
      title: 'B.E — PSR Engineering College',
      description: 'Computer Science Engineering',
      details: 'College Degree Completion • CGPA: 8.2/10',
      color: 'from-blue-500 to-blue-600',
    },
    {
      type: 'certification',
      icon: FaCertificate,
      year: '2025',
      title: 'Full Stack Course Completion',
      description: 'Oranium Tech',
      details: 'Comprehensive full-stack development course completion',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section id="timeline" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Journey</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

            {timelineItems.map((item, index) => {
              const IconComponent = item.icon
              const isExpanded = expandedItem === index
              
              return (
                <motion.div
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-full border-2 sm:border-3 md:border-4 border-primary-600 dark:border-primary-400 shadow-lg transform md:-translate-x-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="text-white" size={12} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 sm:ml-20 md:ml-0 md:flex md:justify-${index % 2 === 0 ? 'end' : 'start'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setExpandedItem(isExpanded ? null : index)}
                      className={`md:w-5/12 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-xs sm:text-sm font-semibold`}>
                          {item.year}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {item.description}
                      </p>
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                          {item.details}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

