import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const KaarvexLogoMark = ({ size = 36 }) => (
  <img src="/logo.jpg" alt="Kaarvex Logo" style={{ height: size * 1.5, width: 'auto', mixBlendMode: 'multiply' }} />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link
            to="/"
            className="nav-logo"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <KaarvexLogoMark size={34} />
          </Link>

          <ul className="nav-links">
            {[
              ['Services', '/#services'], 
              ['Products', '/#products'],
              ['Process', '/#process'], 
              ['Clients', '/clients/dcpems'],
              ['Technology', '/#tech']
            ].map(([label, path]) => (
              <li key={label}>
                <Link to={path} onClick={(e) => handleNavClick(e, path)}>{label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta" style={{ transform: 'translateX(15px)' }}>
            <Link
              to="/#contact"
              className="btn-primary"
              onClick={(e) => handleNavClick(e, '/#contact')}
            >
              <span>Let's Build</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
