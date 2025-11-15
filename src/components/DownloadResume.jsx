import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

const DownloadResume = () => {
  const downloadResume = () => {
    // Create a link element to download the PDF
    const link = document.createElement('a')
    link.href = `'https://github.com/Nareshramamoorthi/Naresh-portfolio/raw/main/public/Naresh_Ramamoorthi_Resume.pdf'
    link.download = 'Naresh_Ramamoorthi_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      onClick={downloadResume}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Download Resume"
    >
      <FaFilePdf size={18} />
      <span>Download Resume</span>
      <FaDownload size={16} />
    </motion.button>
  )
}

export default DownloadResume

