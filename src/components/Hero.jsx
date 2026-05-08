import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react'
import './Hero.css'

const SOCIAL = [
  { href: 'https://github.com/rakeshkoppisetti', icon: <Github size={20} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/rakeshkoppisetti', icon: <Linkedin size={20} />, label: 'LinkedIn' },
  { href: 'mailto:rakshkoppisetti5@gmail.com', icon: <Mail size={20} />, label: 'Email' },
  { href: 'tel:+919177882167', icon: <Phone size={20} />, label: 'Phone' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* Parallax background orbs */}
      <Parallax speed={-20} className="hero__parallax-wrap hero__parallax-wrap--1">
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
      </Parallax>
      <Parallax speed={-12} className="hero__parallax-wrap hero__parallax-wrap--2">
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
      </Parallax>
      <Parallax speed={-8} className="hero__parallax-wrap hero__parallax-wrap--3">
        <div className="hero__orb hero__orb--3" aria-hidden="true" />
      </Parallax>

      {/* Grid background */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={item} className="hero__name">
            Rakesh
            <br />
            <span className="hero__name-accent">Koppisetti</span>
          </motion.h1>

          <motion.div variants={item} className="hero__title-wrap">
            <span className="hero__title-line" />
            <span className="hero__title">Flutter Developer</span>
          </motion.div>

          <motion.p variants={item} className="hero__desc">
            Building responsive, user-friendly mobile applications with Flutter & Firebase.
            Passionate about clean architecture and impactful software solutions.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="hero__btn hero__btn--secondary"
              download
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="hero__social"
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — animated avatar */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar">
              <div className="hero__avatar-initials">RK</div>
              <div className="hero__avatar-bg" />
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--flutter">
              Flutter
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--firebase">
              Firebase
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--dart">
              Dart
            </div>
          </div>

          {/* Code snippet decoration */}
          <motion.div
            className="hero__code-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div className="hero__code-dots">
              <span /><span /><span />
            </div>
            <pre className="hero__code">
{`class Developer {
  name = "Rakesh";
  stack = ["Flutter", "Firebase",
           "Dart", "Java"];
  passion = "Mobile Apps";
}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={18} color="var(--text-muted)" />
        </motion.div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}
