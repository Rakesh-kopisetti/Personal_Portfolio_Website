import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react'
import './About.css'

const HIGHLIGHTS = [
  { icon: <GraduationCap size={18} />, label: 'B.Tech in CS', value: 'Aditya College of Engineering & Technology (CGPA: 8.6)' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Andhra Pradesh, India' },
  { icon: <Code2 size={18} />, label: 'Primary Stack', value: 'Flutter · Firebase · Dart · Java' },
  { icon: <Zap size={18} />, label: 'Currently', value: 'Learning advanced mobile architecture & DSA' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about__grid">
          {/* Avatar column */}
          <motion.div
            className="about__avatar-col"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__avatar-frame">
              <div className="about__avatar-inner">
                <span className="about__avatar-text">RK</span>
                <div className="about__avatar-decoration" />
              </div>
              <div className="about__avatar-stats">
                <div className="about__stat">
                  <span className="about__stat-num">2+</span>
                  <span className="about__stat-label">Years Coding</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-num">5+</span>
                  <span className="about__stat-label">Projects Built</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-num">3</span>
                  <span className="about__stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="about__text-col"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="about__bio">
              I'm a Flutter Developer with hands-on experience building responsive and user-friendly mobile applications.
              Skilled in Flutter, Firebase, Dart, C, and Java, I bring strong problem-solving abilities and a solid
              understanding of Data Structures and Algorithms to every project I take on.
            </p>
            <p className="about__bio">
              I possess good communication and teamwork skills, with a genuine passion for learning new technologies
              and developing impactful software solutions. Whether it's architecting scalable backends with Firebase
              or crafting smooth, accessible UIs with Flutter — I love the entire mobile development process.
            </p>
            <p className="about__bio">
              Currently pursuing my B.Tech in Computer Science at Aditya College of Engineering and Technology,
              I'm always looking to deepen my knowledge and contribute to meaningful projects.
            </p>

            <div className="about__highlights">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="about__highlight"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about__highlight-icon">{h.icon}</div>
                  <div>
                    <div className="about__highlight-label">{h.label}</div>
                    <div className="about__highlight-value">{h.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
