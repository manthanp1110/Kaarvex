
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
              { href: 'https://linkedin.com/company/kaarvex', label: 'LinkedIn',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: 'https://twitter.com/kaarvex', label: 'Twitter',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
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
            <li><a href="#">Book a Call</a></li>
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
