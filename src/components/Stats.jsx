import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaProjectDiagram, FaCode, FaAward, FaUsers } from 'react-icons/fa'

const CountUp = ({ end, duration, delay, suffix, shouldStart }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (shouldStart) {
      const timer = setTimeout(() => {
        let start = 0
        const increment = end / (duration * 60)
        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 1000 / 60)
        return () => clearInterval(counter)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [shouldStart, end, duration, delay])

  return <span>{Math.floor(count)}{suffix}</span>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: FaProjectDiagram, value: 10, suffix: '+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { icon: FaCode, value: 15, suffix: '+', label: 'Technologies Mastered', color: 'from-purple-500 to-purple-600' },
    { icon: FaAward, value: 5, suffix: '+', label: 'Certifications', color: 'from-green-500 to-green-600' },
    { icon: FaUsers, value: 2, suffix: '', label: 'Years Experience', color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <section id="stats" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r ${stat.color} mb-3 sm:mb-4`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  <CountUp end={stat.value} duration={2} delay={index * 0.1} suffix={stat.suffix} shouldStart={isInView} />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

