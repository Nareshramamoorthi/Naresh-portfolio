import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'iTech Academy',
      year: '2022',
      image: 'itech python certificate.jpg',
    },
    {
      title: 'Frontend Development',
      issuer: 'Astro Web Solution',
      year: '2023',
      image: 'astroweb solution.jpg',
    },
    {
      title: 'Full-Stack Development',
      issuer: 'NSIC Chennai',
      year: '2024',
      image: 'nsic.jpg',
    },
    {
      title: 'Java Programming',
      issuer: 'NPTEL',
      year: '2025',
      image: 'nptel.png',
    },
    {
      title: 'Full Stack Course Completion',
      issuer: 'Oranium Tech',
      year: '2025',
      image: 'full stack course completion.png',
    },
    {
      title: 'AI Prompt Engineering',
      issuer: 'MindLuster',
      year: '2024',
      image: 'ai roadmap prompter.jpg',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Certifications & <span className="text-primary-600 dark:text-primary-400">Learning</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={`/images/${cert.image}`}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      const placeholder = e.target.nextElementSibling
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 items-center justify-center text-white">
                    <div className="text-center">
                      <FaCertificate size={48} className="mb-4 mx-auto" />
                      <p className="font-semibold text-lg">{cert.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {cert.year}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

