import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm a passionate developer with a strong focus on <span className="font-semibold text-primary-600">JavaScript</span>, <span className="font-semibold text-primary-600">UI/UX design</span>, and <span className="font-semibold text-primary-600">Frontend development</span>. I love creating visually appealing digital experiences that combine technical excellence with creative design thinking.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm particularly comfortable working on <span className="font-semibold text-primary-600 dark:text-primary-400">creative, AI-powered projects</span> that push the boundaries of what's possible. My approach blends coding expertise with design thinking, allowing me to build solutions that are not only functional but also intuitive and engaging.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it's crafting responsive interfaces, implementing smooth animations, or integrating AI capabilities, I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


