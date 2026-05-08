import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react'
import './Experience.css'

const TIMELINE = [
  {
    type: 'work',
    icon: <Briefcase size={18} />,
    title: 'Flutter Developer Intern',
    org: 'Technical Hub Pvt Ltd',
    period: 'May 2025 – July 2025',
    items: [
      'Developed and maintained Flutter application features with clean and scalable code practices.',
      'Integrated Firebase services and REST APIs to enable real-time data handling and seamless app functionality.',
      'Implemented responsive design techniques for better user experience across multiple devices.',
      'Worked with Flutter, Firebase, REST APIs, and Git for application development and version control.',
    ],
  },
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Bachelor of Technology in Computer Science',
    org: 'Aditya College of Engineering and Technology',
    period: '2023 – Present',
    detail: 'CGPA: 8.6 / 10',
    items: [],
  },
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Intermediate Education',
    org: 'Aditya Junior College',
    period: '2021 – 2023',
    detail: 'Percentage: 97%',
    items: [],
  },
]

const CERTS = [
  { name: 'Flutter Development Certification', link: 'https://drive.google.com/file/d/1pi-9F_TNkCTlRD9gCnyXSdhfHIfSQKzT/view' },
  { name: 'Java Programming Certification', link: '#' },
  { name: 'MongoDB Associate Developer Certificate', link: 'https://drive.google.com/file/d/1kRu5XTjfkPqe9xDeoQGhv8Ea1b9EicoR/view?usp=sharing' },
  { name: 'Postman Certificate', link: 'https://drive.google.com/file/d/1n3MgZy8lTg6leb4rWdUp-ZJHZrR3GTY2/view?usp=drive_link' },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="experience__layout">
          {/* Timeline */}
          <div className="experience__timeline">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={`${item.org}-${i}`}
                className={`timeline-item timeline-item--${item.type}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
              >
                <div className="timeline-item__dot">
                  {item.icon}
                </div>
                <div className="timeline-item__body">
                  <div className="timeline-item__header">
                    <h3 className="timeline-item__title">{item.title}</h3>
                    <span className="timeline-item__period">{item.period}</span>
                  </div>
                  <p className="timeline-item__org">{item.org}</p>
                  {item.detail && (
                    <span className="timeline-item__detail">{item.detail}</span>
                  )}
                  {item.items.length > 0 && (
                    <ul className="timeline-item__list">
                      {item.items.map(it => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="experience__certs"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="experience__certs-header">
              <Award size={20} color="var(--accent)" />
              <h3>Certifications</h3>
            </div>
            <div className="experience__certs-list">
              {CERTS.map((c, i) => (
                <motion.a
                  key={c.name}
                  href={c.link}
                  className="cert-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="cert-card__icon">
                    <Award size={16} />
                  </div>
                  <span>{c.name}</span>
                  <ExternalLink size={14} className="cert-card__arrow" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
