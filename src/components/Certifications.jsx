import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'ITech Academy',
      year: '2027',
      image: 'itech python certificate.jpg',
    },
    {
      title: 'Frontend Development',
      issuer: 'Astro Web Solution',
      year: '2023',
      image: 'astroweb solution.jpg',
    },
    {
      title: 'Front-End Pathway',
      issuer: 'Scrimba',
      year: '2023',
      image: 'Scrimba.jpg',
    },
    {
      title: 'HTML, CSS and Bootstrap',
      issuer: 'Great Learning',
      year: '2023',
      image: 'full stack course completion.png',
    },
    {
      title: 'React JS',
      issuer: 'Great Learning',
      year: '2023',
      image: 'nptel.png',
    },
    {
      title: 'JavaScript',
      issuer: 'Great Learning',
      year: '2023',
      image: 'nsic.jpg',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My
            <span className="text-primary"> Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in web development
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/${cert.image}`}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FaCertificate className="text-primary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-primary">{cert.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
