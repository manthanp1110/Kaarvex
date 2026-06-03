import { useEffect, useRef } from 'react';

const icons = {
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
    </svg>
  ),
  pipeline: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="6" height="6" rx="1" /><rect x="16" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M5 9v4h14V9M12 13v2" />
    </svg>
  ),
  eye: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  message: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  ),
};

const services = [
  { icon: 'brain', name: 'AI Application Development', desc: 'Custom AI-powered applications — from recommendation engines to autonomous agents.', tags: ['LLM Integration', 'RAG Systems', 'AI Agents', 'API Design'] },
  { icon: 'globe', name: 'Smart Web Development', desc: 'Blazing-fast, intelligent web experiences with embedded AI features and real-time data.', tags: ['React / Next.js', 'Performance', 'Real-time', 'AI Features'] },
  { icon: 'pipeline', name: 'MLOps & Model Deployment', desc: 'End-to-end ML pipelines — from data ingestion to model monitoring and CI/CD.', tags: ['Docker / K8s', 'Model Serving', 'Monitoring', 'Automation'] },
  { icon: 'eye', name: 'Computer Vision', desc: 'Object detection, segmentation, OCR, and real-time video analytics.', tags: ['YOLO / DETR', 'Segmentation', 'OCR', 'Edge Deploy'] },
  { icon: 'message', name: 'Natural Language Processing', desc: 'Text classification, entity extraction, sentiment analysis, and fine-tuned LLMs.', tags: ['Transformers', 'Fine-tuning', 'Embeddings', 'RAG'] },
  { icon: 'cpu', name: 'AI Strategy & Consulting', desc: 'Define your AI roadmap, evaluate build vs. buy, and accelerate adoption.', tags: ['Roadmapping', 'Audits', 'PoC', 'Architecture'] },
];

const useScrollReveal = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, [ref]);
};

const Services = () => {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section className="services-section" id="services" ref={ref} style={{ position: 'relative' }}>

      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Build</div>
          <h2 className="section-title">Services That Move the Needle</h2>
          <p className="section-desc">
            From research to production, we deliver AI solutions that create real, measurable business impact.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`service-card fade-up fade-up-delay-${(i % 3) + 1}`} key={service.name}>
              <div className="service-icon-wrap">
                <span className="service-icon">{icons[service.icon]}</span>
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map(tag => <span className="service-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
