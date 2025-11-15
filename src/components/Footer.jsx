import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg font-semibold text-white mb-1">Naresh Ramamoorthy</p>
            <p className="text-xs sm:text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/Nareshramamoorthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naresh-ramamoorthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:rn86615@gmail.com"
              className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

