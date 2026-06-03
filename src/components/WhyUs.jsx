import { useEffect, useRef } from 'react';
import { HudBracket } from './HudElements';

const features = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Production-Ready from Day One',
    desc: 'Every solution is built for scale, reliability and real-world load from the very first version.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Ethical & Responsible AI',
    desc: 'Every model is tested for bias, fairness, and explainability. Transparent AI is non-negotiable.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'Full-Spectrum Expertise',
    desc: 'One team that covers data science, ML, backend, frontend and DevOps. No coordination gaps.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Dedicated Collaboration',
    desc: 'Direct access to senior engineers. Weekly syncs, async updates, full transparency.',
  },
];

const WhyUs = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus-section" id="about" ref={ref}>
      <div className="container">
        <div className="whyus-grid">
          {/* Visual Side */}
          <div className="whyus-visual fade-up">
            <div className="whyus-card-stack">
              {/* Card 1 */}
              <div className="floating-card floating-card-1">
                <div className="float-card-label">Accuracy Improvement</div>
                <div className="float-card-value">+34%</div>
                <div className="float-card-trend">↑ After model optimization</div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.3rem' }}>
                  {[80, 60, 90, 70, 95, 75, 88].map((h, i) => (
                    <div key={i} style={{
                      flex: 1, height: `${h * 0.55}px`, borderRadius: '2px',
                      background: `rgba(0,212,255,${0.2 + (h / 100) * 0.4})`,
                      boxShadow: `0 0 8px rgba(0,212,255,${0.1 + (h / 100) * 0.3})`,
                      alignSelf: 'flex-end'
                    }} />
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="floating-card floating-card-2">
                <div className="float-card-label">Inference Speed</div>
                <div className="float-card-value">12ms</div>
                <div className="float-card-trend">Real-time ready</div>
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }}>
                    <div style={{ width: '78%', height: '100%', borderRadius: 2, background: 'var(--violet)', boxShadow: '0 0 8px var(--violet)' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--violet)', fontWeight: 700 }}>78%</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="floating-card floating-card-3">
                <div className="float-card-label">Models Deployed</div>
                <div className="float-card-value" style={{ fontSize: '1.25rem' }}>50+</div>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {['NLP', 'CV', 'MLOps', 'LLM'].map(t => (
                    <span key={t} style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: 2, background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', color: 'var(--cyan)', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="fade-up">
              <div className="section-label">Why Kaarvex</div>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                We Build AI That{' '}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span className="gradient-text">Actually Works</span>
                  <HudBracket color="#000000" />
                </span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Many teams talk AI. We ship it. From startups proving their concept to enterprises
                overhauling their operations — end to end.
              </p>
            </div>

            <div className="whyus-features">
              {features.map((feature, i) => (
                <div className={`feature-item fade-up fade-up-delay-${i + 1}`} key={feature.title}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <div className="feature-title">{feature.title}</div>
                    <div className="feature-desc">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
