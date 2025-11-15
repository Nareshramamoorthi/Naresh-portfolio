import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Full-stack product website with complete shopping functionality, user authentication, and admin panel.',
      techStack: ['Java', 'HTML', 'CSS', 'React', 'MySQL', 'Spring Boot', 'Spring', 'Thymeleaf'],
      image: 'E-commerce.png',
      githubLink: 'https://github.com/Nareshramamoorthi/springboot-ecommerce',
    },
    {
      title: 'Student Risk Analysis',
      description: 'Machine learning model that predicts student performance with 98% accuracy using supervised learning (Linear Regression).',
      techStack: ['Python', 'ML', 'Gradio'],
      image: 'student.png',
      githubLink: 'https://github.com/Nareshramamoorthi/student-risk-analyzer-ai',
    },
    {
      title: 'Traffic Violation Detection',
      description: 'AI-powered system that detects traffic rule violations (helmet detection, etc.) with 88% accuracy using computer vision.',
      techStack: ['Python', 'OpenCV', 'ML', 'Gradio'],
      image: 'traffic.png',
      githubLink: 'https://github.com/Nareshramamoorthi/traffic-violation-detection-system',
    },
    {
      title: 'Learning Management System',
      description: 'Simple frontend showcase for an educational platform with course management and user interface.',
      techStack: ['HTML', 'CSS', 'JS', 'React'],
      image: 'learning.png',
      githubLink: 'https://github.com/Nareshramamoorthi/learning-management-system-webapp',
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={`/images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      const placeholder = e.target.nextElementSibling
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 items-center justify-center text-white text-lg font-semibold">
                    {project.title}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>View on GitHub</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

