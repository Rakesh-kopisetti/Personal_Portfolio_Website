import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          RK
          <span className="footer__logo-bracket">/&gt;</span>
        </div>
        <p className="footer__copy">
          © {year} Rakesh Koppisetti. Built with React + Vite + Framer Motion.
        </p>
        <div className="footer__socials">
          <a href="https://github.com/rakeshkoppisetti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/rakeshkoppisetti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:rakshkoppisetti5@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
