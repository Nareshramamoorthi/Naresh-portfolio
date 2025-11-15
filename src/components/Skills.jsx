import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaCode, FaPalette, FaTools, FaUsers,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
  FaFigma, FaGitAlt, FaGithub
} from 'react-icons/fa'
import { SiCplusplus, SiCanva, SiPostman } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillBoxes = [
    {
      title: 'Programming & Development',
      icon: FaCode,
      skills: [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'JavaScript Basics', icon: FaJs },
        { name: 'Python Basics', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C', icon: null },
        { name: 'C++', icon: SiCplusplus },
        { name: 'Prompting (AI Prompting)', icon: null },
      ],
    },
    {
      title: 'Designing & UI/UX',
      icon: FaPalette,
      skills: [
        { name: 'Figma', icon: FaFigma },
        { name: 'Canva', icon: SiCanva },
        { name: 'Affinity', icon: null },
        { name: 'Wireframing', icon: null },
        { name: 'Prototyping', icon: null },
        { name: 'Video Editing (CapCut, Canva)', icon: null },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'Postman', icon: SiPostman },
        { name: 'Cursor', icon: null },
        { name: 'WinSCP', icon: null },
        { name: 'VS Code', icon: null },
      ],
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      skills: [
        { name: 'Communication', icon: null },
        { name: 'Creativity', icon: null },
        { name: 'Teamwork', icon: null },
        { name: 'Problem-solving', icon: null },
        { name: 'Observation', icon: null },
        { name: 'Leadership', icon: null },
      ],
    },
  ]

  const coreProficiencies = [
    'UI/UX',
    'Problem-solving',
    'Full Stack',
  ]

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Skills & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

          {/* Four Box Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {skillBoxes.map((box, index) => {
              const IconComponent = box.icon
              return (
                <motion.div
                  key={box.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{box.title}</h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {box.skills.map((skill) => {
                      const SkillIcon = skill.icon
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          {SkillIcon && (
                            <span className="text-primary-600">
                              <SkillIcon size={20} />
                            </span>
                          )}
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Core Proficiencies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Core Proficiencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {coreProficiencies.map((proficiency) => (
                <span
                  key={proficiency}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm sm:text-base md:text-lg border-2 border-white/30"
                >
                  {proficiency}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

