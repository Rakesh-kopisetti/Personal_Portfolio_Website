import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react'
import './Contact.css'

const CONTACT_LINKS = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'rakeshkoppisetti5@gmail.com',
    href: 'https://formspree.io/f/xnjwgnbq',
    color: 'var(--accent)',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'github.com/rakeshkoppisetti',
    href: 'https://github.com/Rakesh-kopisetti/',
    color: 'var(--text-secondary)',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rakeshkoppisetti',
    href: 'https://www.linkedin.com/in/rakesh-koppisetti-8885a9317/',
    color: '#0a66c2',
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+91 9177882167',
    href: 'tel:+919177882167',
    color: 'var(--accent-2)',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: 'Andhra Pradesh, India',
    href: null,
    color: 'var(--accent-3)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <div className="contact__grid">
          {/* Left — text */}
          <motion.div
            className="contact__left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="contact__heading">
              Let's build something<br />
              <span className="contact__heading-accent">amazing together</span>
            </h3>
            <p className="contact__text">
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance work, or an exciting collaboration. Feel free to reach out through
              any of the channels below.
            </p>

            <div className="contact__links">
              {CONTACT_LINKS.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                >
                  {c.href ? (
                    <a
                      href={c.href}
                      className="contact-link"
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ '--link-color': c.color }}
                    >
                      <div className="contact-link__icon">{c.icon}</div>
                      <div>
                        <div className="contact-link__label">{c.label}</div>
                        <div className="contact-link__value">{c.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-link" style={{ '--link-color': c.color, cursor: 'default' }}>
                      <div className="contact-link__icon">{c.icon}</div>
                      <div>
                        <div className="contact-link__label">{c.label}</div>
                        <div className="contact-link__value">{c.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            className="contact__right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact__card">
              <div className="contact__card-glow" />
              <div className="contact__card-icon">
                <Send size={28} color="var(--accent)" />
              </div>
              <h4 className="contact__card-title">Ready to Connect?</h4>
              <p className="contact__card-text">
                Drop me an email and I'll get back to you as soon as possible.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <a
                href="https://formspree.io/f/xnjwgnbq"
                className="contact__card-btn"
              >
                <Mail size={18} />
                Send an Email
              </a>
              <div className="contact__card-divider">
                <span>or connect on</span>
              </div>
              <div className="contact__card-socials">
                <a
                  href="https://github.com/Rakesh-kopisetti/"
                  className="contact__card-social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rakesh-koppisetti-8885a9317/"
                  className="contact__card-social contact__card-social--linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
