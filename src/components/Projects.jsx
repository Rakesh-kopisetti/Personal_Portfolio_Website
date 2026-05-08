import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Grameeno',
    subtitle: 'Village Community App',
    tech: ['Flutter', 'Firebase', 'Dart'],
    desc: 'A rural community platform integrating agriculture, healthcare, local news, and digital financial services. Implemented weather alerts, crop advisory, government scheme access, and complaint reporting features.',
    features: [
      'Weather alerts & crop advisory',
      'Government scheme access',
      'Offline support & regional language accessibility',
      'Firebase Authentication & Firestore',
    ],
    github: 'https://github.com/Rakesh-kopisetti/grameeno.git',
    color: 'var(--accent)',
    number: '01',
  },
  {
    title: 'StudyMate',
    subtitle: 'Student Productivity App',
    tech: ['Flutter', 'Firebase', 'ZegoCloud', 'Dart'],
    desc: 'A student productivity app with AI-based exam preparation, collaboration, and CGPA tracking features. Built real-time group study features with video calling and screen sharing.',
    features: [
      'AI-powered note summarization & chatbot support',
      'Personalized study recommendations',
      'Real-time video calling via ZegoCloud',
      'CGPA tracking & performance analytics',
    ],
    github: 'https://github.com/Rakesh-kopisetti/study_mate.git',
    color: 'var(--accent-2)',
    number: '02',
  },
  {
    title: 'Flutter Internship Projects',
    subtitle: 'Technical Hub Pvt Ltd',
    tech: ['Flutter', 'Firebase', 'REST APIs', 'Git'],
    desc: 'Developed and maintained Flutter application features with clean and maintainable code practices during internship at Technical Hub Pvt Ltd (May 2025 – July 2025).',
    features: [
      'Integrated Firebase services & REST APIs',
      'Responsive design across multiple devices',
      'Real-time data handling & seamless app functionality',
      'Clean, scalable code architecture',
    ],
    github: 'https://github.com/Rakesh-kopisetti/',
    color: 'var(--accent-3)',
    number: '03',
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      className="project-card"
      style={{ '--card-color': project.color }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__header">
        <span className="project-card__number">{project.number}</span>
        <div className="project-card__links">
          <a
            href={project.github}
            className="project-card__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
          >
            <Github size={18} />
            <span>Source Code</span>
            <ArrowUpRight size={14} />
          </a>
          {project.live && (
            <a
              href={project.live}
              className="project-card__link project-card__link--live"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__desc">{project.desc}</p>

      <ul className="project-card__features">
        {project.features.map(f => (
          <li key={f} className="project-card__feature">
            <span className="project-card__feature-dot" />
            {f}
          </li>
        ))}
      </ul>

      <div className="project-card__tech">
        {project.tech.map(t => (
          <span key={t} className="project-card__tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-card__glow" />
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* On-scroll animation 3: staggered project cards */}
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://github.com/Rakesh-kopisetti/"
            className="projects__github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            View all projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
