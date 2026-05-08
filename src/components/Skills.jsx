import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    color: 'var(--accent)',
    skills: [
      { name: 'Dart', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'Python', level: 70 },
      { name: 'C', level: 78 },
    ],
  },
  {
    name: 'Frameworks',
    color: 'var(--accent-2)',
    skills: [
      { name: 'Flutter', level: 92 },
    ],
  },
  {
    name: 'Databases',
    color: 'var(--accent-3)',
    skills: [
      { name: 'Firebase', level: 88 },
      { name: 'MongoDB', level: 72 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    name: 'Tools & Concepts',
    color: '#b48ead',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'REST APIs', level: 80 },
      { name: 'DSA', level: 75 },
      { name: 'OOP', level: 82 },
      { name: 'Docker', level: 60 },
      { name: 'Postman', level: 78 },
    ],
  },
]

const TECH_BADGES = [
  'Flutter', 'Firebase', 'Dart', 'Java', 'Python', 'C',
  'MongoDB', 'MySQL', 'Git', 'GitHub', 'REST APIs', 'DSA',
  'OOPs', 'Docker', 'Postman', 'VS Code', 'Android Studio', 'ZegoCloud',
]

function SkillBar({ name, level, color, inView, index }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        {/* Tech badge cloud — on-scroll animation 1 */}
        <motion.div
          className="skills__badges"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {TECH_BADGES.map((badge, i) => (
            <motion.span
              key={badge}
              className="skills__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.08, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill bars — on-scroll animation 2 */}
        <div className="skills__categories">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="skills__cat"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12 + 0.3, duration: 0.6 }}
            >
              <div className="skills__cat-header">
                <div className="skills__cat-dot" style={{ background: cat.color }} />
                <h3 className="skills__cat-name">{cat.name}</h3>
              </div>
              <div className="skills__bars">
                {cat.skills.map((sk, si) => (
                  <SkillBar
                    key={sk.name}
                    name={sk.name}
                    level={sk.level}
                    color={cat.color}
                    inView={inView}
                    index={si + ci * 3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
