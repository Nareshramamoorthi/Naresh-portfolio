import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Quotes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      role: "Software Developer"
    },
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      role: "Co-founder, Apple"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      role: "Management Consultant"
    }
  ]

  return (
    <section id="quotes" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
            Inspiring <span className="text-primary-200">Quotes</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto mb-8 sm:mb-12"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaQuoteLeft className="text-white/50 text-2xl sm:text-3xl mb-3 sm:mb-4" />
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 font-medium">
                  {quote.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{quote.author}</p>
                    <p className="text-primary-200 text-xs sm:text-sm">{quote.role}</p>
                  </div>
                  <FaQuoteRight className="text-white/50 text-xl sm:text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Quotes


