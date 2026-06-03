import { useEffect, useRef } from 'react';

const CTA = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" id="contact" ref={ref}>
      <div className="container">
        <div className="cta-inner fade-up">
          {/* Sketch grid dots pattern inside CTA */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice">
            <pattern id="ctaDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#ctaDots)" />
          </svg>

          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
            Start a Project
          </div>

          <h2 className="cta-title">
            Ready to Build Something<br />Extraordinary?
          </h2>

          <p className="cta-desc">
            Tell us about your project. We'll get back within 24 hours with a clear path
            forward — no fluff, no sales pitch, just solutions.
          </p>

          <div className="cta-actions">
            <a href="mailto:hello@kaarvex.com" className="btn-primary">
              <span>Send Us a Message</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z" />
              </svg>
            </a>
            <a href="https://calendly.com/kaarvex" className="btn-outline" target="_blank" rel="noopener noreferrer">
              Book a Free Call
            </a>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '⚡', text: 'Response within 24h' },
              { icon: '🔒', text: 'NDA available' },
              { icon: '🌍', text: 'Remote-first, globally' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
