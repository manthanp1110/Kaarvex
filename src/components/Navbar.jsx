import { useEffect, useState } from 'react';

export const KaarvexLogoMark = ({ size = 36 }) => (
  <img src="/logo.jpg" alt="Kaarvex Logo" style={{ height: size * 1.5, width: 'auto', mixBlendMode: 'multiply' }} />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a
            href="#"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <KaarvexLogoMark size={34} />
          </a>

          <ul className="nav-links">
            {[['Services', 'services'], ['Process', 'process'], ['About', 'about'], ['Technology', 'tech']].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              <span>Let's Build</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
