import { useEffect, useRef } from 'react';
import { HudConnector } from './HudElements';

const steps = [
  { number: '01', title: 'Discovery & Strategy', desc: 'Deep-dive into your business needs, data landscape, and define clear success metrics.' },
  { number: '02', title: 'Design & Architecture', desc: 'Craft a scalable system architecture and UX that balances speed and long-term maintainability.' },
  { number: '03', title: 'Build & Iterate', desc: 'Rapid development with continuous feedback loops. AI models trained and optimized in sync.' },
  { number: '04', title: 'Deploy & Scale', desc: 'Production-grade deployment with monitoring, alerting, and continuous improvement pipelines.' },
];

const Process = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" id="process" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="section-title">From Idea to Impact</h2>
          <p className="section-desc">A proven process that turns ambitious AI vision into production-ready solutions.</p>
        </div>

        <div className="process-steps" style={{ position: 'relative' }}>
          {/* HUD Connectors between steps */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '25%', transform: 'translateX(-50%)', zIndex: 2 }}>
            <HudConnector />
          </div>
          <div style={{ position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
            <HudConnector color="rgba(0,0,0,0.4)" />
          </div>
          <div style={{ position: 'absolute', top: '1.5rem', left: '75%', transform: 'translateX(-50%)', zIndex: 2 }}>
            <HudConnector />
          </div>

          {steps.map((step, i) => (
            <div className={`process-step fade-up fade-up-delay-${i + 1}`} key={step.number}>
              <div className="process-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
