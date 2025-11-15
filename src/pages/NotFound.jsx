import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaCode, FaBug, FaTrophy } from 'react-icons/fa'

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const [easterEgg, setEasterEgg] = useState(false)
  const [keySequence, setKeySequence] = useState([])
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  useEffect(() => {
    const handleKeyPress = (e) => {
      setKeySequence(prev => {
        const newSequence = [...prev, e.key].slice(-10)
        if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
          setEasterEgg(true)
        }
        return newSequence
      })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleBugClick = () => {
    setEasterEgg(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary-600 dark:text-primary-400 mb-4">
            4
            <motion.span
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Looks like you went{' '}
            <span className="text-primary-600 dark:text-primary-400">off the grid</span>...
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Floating Skills Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8 flex-wrap"
        >
          {['HTML', 'CSS', 'JS', 'React', 'Python'].map((skill, index) => (
            <motion.div
              key={skill}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + index * 0.3,
                delay: index * 0.2
              }}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-primary-600 dark:text-primary-400 font-semibold"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Broken Code Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-4">error.js</span>
          </div>
          <pre className="text-green-400 text-sm font-mono">
            <code>
              {`function findPage() {
  const page = document.getElementById('page');
  if (!page) {
    throw new Error('404: Page not found');
    // Looks like you're lost in the codebase!
  }
  return page;
}`}
            </code>
          </pre>
        </motion.div>

        {/* Easter Egg Bug */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <motion.button
            onClick={handleBugClick}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Easter egg"
          >
            <FaBug className="text-primary-600 dark:text-primary-400" size={24} />
          </motion.button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Click the bug or try the Konami code!
          </p>
        </motion.div>

        {/* Easter Egg Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={easterEgg ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-2xl">
            <FaTrophy className="text-white mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">
              🎉 Achievement Unlocked! 🎉
            </h3>
            <p className="text-white text-lg">
              Developer Achievement: Code Explorer
            </p>
            <p className="text-white/80 text-sm mt-2">
              You found the hidden easter egg!
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <FaHome size={18} />
            <span>Back to Safety</span>
          </motion.button>
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg font-semibold border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <FaCode size={18} />
            <span>Go Back</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

