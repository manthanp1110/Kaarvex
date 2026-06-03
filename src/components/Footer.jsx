
import { KaarvexLogoMark } from './Navbar';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
            <KaarvexLogoMark size={60} />
          </div>
          <p className="footer-brand-desc">
            Building the AI-powered future, one intelligent system at a time.
            Premium solutions for ambitious teams worldwide.
          </p>
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            {[
              { href: 'https://www.linkedin.com/company/kaarvex', label: 'LinkedIn',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: 'https://twitter.com/kaarvex', label: 'Twitter',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
              { href: 'https://www.instagram.com/kaarvex/', label: 'Instagram',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
              { href: 'https://github.com/kaarvex', label: 'GitHub',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} className="social-link" aria-label={label} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {['AI App Development', 'Web Development', 'MLOps', 'Computer Vision', 'NLP', 'AI Consulting'].map(s => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {['About Us', 'Portfolio', 'Blog', 'Careers', 'Press'].map(s => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:hello@kaarvex.com">hello@kaarvex.com</a></li>
            <li><a href="tel:7774954725">Book a Call</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kaarvex. All rights reserved.</span>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>Intelligence, Engineered.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
