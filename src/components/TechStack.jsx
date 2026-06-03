import { useEffect, useRef } from 'react';

const techStack = [
  { name: 'Python', color: '#4d9fff' },
  { name: 'PyTorch', color: '#ff6b35' },
  { name: 'TensorFlow', color: '#ff9800' },
  { name: 'HuggingFace', color: '#ffd21e' },
  { name: 'LangChain', color: '#00c9a7' },
  { name: 'OpenAI', color: '#00c9a7' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Kubernetes', color: '#326ce5' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'GCP', color: '#4285f4' },
  { name: 'MLflow', color: '#0194e2' },
  { name: 'YOLO', color: '#00c9a7' },
  { name: 'OpenCV', color: '#5c3ee8' },
  { name: 'Airflow', color: '#017cee' },
  { name: 'Spark', color: '#e25a1c' },
];

const TechStack = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-section" id="tech" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Stack</div>
          <h2 className="section-title">Technology We Master</h2>
          <p className="section-desc">
            Best-in-class tools, frameworks and cloud platforms — chosen for performance, reliability, and ecosystem maturity.
          </p>
        </div>

        <div className="tech-grid fade-up fade-up-delay-2">
          {techStack.map((tech) => (
            <div className="tech-chip" key={tech.name}>
              <span className="tech-chip-dot" style={{ background: tech.color }} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
