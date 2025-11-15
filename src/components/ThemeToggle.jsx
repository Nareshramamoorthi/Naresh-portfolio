import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <HiMoon size={20} />
        ) : (
          <HiSun size={20} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

