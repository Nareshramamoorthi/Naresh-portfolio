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
      description:
        'Full-stack product website with complete shopping functionality, user authentication, and admin panel.',
      techStack: ['Java', 'HTML', 'CSS', 'React', 'MySQL', 'Spring Boot', 'Spring', 'Thymeleaf'],
      image: 'E-commerce.png',
      githubLink: 'https://github.com/Nareshramamoorthi/springboot-ecommerce',
    },
    {
      title: 'Student Risk Analysis',
      description:
        'Machine learning model that predicts student performance with 98% accuracy using supervised learning (Linear Regression).',
      techStack: ['Python', 'ML', 'Colab'],
      image: 'student.png',
      githubLink: 'https://github.com/Nareshramamoorthi/Machine_Learning_Project',
    },
    {
      title: 'ATM BANK APPLICATION',
      description:
        'A fully functional ATM Bank Application built using Java Swing and JDBC. Features include login/signup, balance inquiry, deposit/withdraw, mini statement, pin change, and fast cash functionality.',
      techStack: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
      image: 'traffic.png',
      githubLink: 'https://github.com/Nareshramamoorthi/ATM-Bank',
      deployedLink: null,
    },
    {
      title: 'COMPANY MANAGEMENT SYSTEM',
      description:
        'Management System Application built using Java Swing and AWT, designed to streamline company operations. Features include employee management (add, view, update, remove), user authentication, interactive forms, navigation, and employee information management.',
      techStack: ['Java', 'Java Swing', 'AWT', 'Java'],
      image: 'learning.png',
      githubLink: 'https://github.com/Nareshramamoorthi/Company-Management-System',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and problem-solving
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
