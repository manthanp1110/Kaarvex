
import ParticleCanvas from './ParticleCanvas';
import { HudUnderline } from './HudElements';

/* ─── Animated Logo Background ─── */
const HeroLogoAnimation = () => {
  return (
    <div className="hero-sphere-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/logo.jpg"
        alt="Kaarvex Animated Logo"
        style={{
          width: '80%',
          height: 'auto',
          mixBlendMode: 'multiply',
          animation: 'float-logo 6s ease-in-out infinite'
        }}
      />
      <style>
        {`
          @keyframes float-logo {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.02); }
            100% { transform: translateY(0px) scale(1); }
          }
        `}
      </style>
    </div>
  );
};

/* ─── Hero ─── */
const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <ParticleCanvas />

      {/* Ambient orbs */}
      <div className="orb" style={{ width: 500, height: 500, top: '5%', right: '-8%', background: 'radial-gradient(circle,rgba(0,212,255,0.1),transparent 70%)' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: '10%', left: '-8%', background: 'radial-gradient(circle,rgba(124,58,237,0.09),transparent 70%)' }} />

      <div className="container">
        <div className="hero-grid">
          {/* Left */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              AI-First Technology Partner
            </div>

            <h1 className="hero-heading">
              Intelligence,{' '}
              <span className="hero-heading-gradient" style={{ position: 'relative', display: 'inline-block' }}>
                Engineered
                <HudUnderline width={280} color="#000000" delay={0.8} />
              </span>
              <br />for Tomorrow
            </h1>

            <p className="hero-sub">
              We craft AI-powered applications, scalable MLOps pipelines, and intelligent
              systems that transform how businesses operate and compete.
            </p>

            <div className="hero-actions">
              <a href="#services" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                <span>Explore Services</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                Talk to Us
              </a>
            </div>

            <div className="hero-stats">
              {[{ value: '50+', label: 'Projects Shipped' }, { value: '98%', label: 'Client Satisfaction' }, { value: '5+', label: 'AI Domains' }].map(s => (
                <div key={s.label}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hero-visual">
            <HeroLogoAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
