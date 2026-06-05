import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const clientsData = [
  {
    id: 1,
    title: 'DCPEMS',
    category: 'Web Apps',
    description: 'A comprehensive School Website & App ERP system bridging the gap between administration, teachers, students, and parents.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', // Temporary placeholder
    tags: ['Web Application', 'Mobile App', 'ERP System'],
    link: '/clients/dcpems'
  }
];

const categories = ['All', 'Web Apps', 'NLP', 'ML Ops'];

const Clients = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.fade-up').forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredClients = activeCategory === 'All' 
    ? clientsData 
    : clientsData.filter(c => c.category === activeCategory);

  return (
    <main className="client-case-study" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-0)', color: 'var(--text-primary)' }}>
      <section className="services-section" id="clients-list" ref={ref} style={{ background: 'transparent', paddingTop: '0' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Clients</div>
            <h2 className="section-title">Past Success Stories</h2>
            <p className="section-desc">
              Explore the projects we've delivered for our premium clients across different technologies.
            </p>
          </div>

          {/* Filters */}
          <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '100px',
                  border: `1px solid ${activeCategory === cat ? 'var(--cyan)' : 'var(--border-cyan)'}`,
                  background: activeCategory === cat ? 'var(--cyan)' : 'transparent',
                  color: activeCategory === cat ? '#000' : 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.background = 'var(--cyan-dim)';
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--border-cyan)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredClients.length > 0 ? (
            <div className="services-grid fade-up">
              {filteredClients.map(client => (
                <div 
                  key={client.id} 
                  className="service-card" 
                  style={{ padding: '0', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  onClick={() => navigate(client.link)}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'var(--cyan)', opacity: 0.1, zIndex: 1, pointerEvents: 'none' }}></div>
                    <img 
                      src={client.image} 
                      alt={client.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.5s ease, transform 0.5s ease' }} 
                      onMouseEnter={e => {
                        e.currentTarget.style.filter = 'grayscale(0%)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.filter = 'grayscale(100%)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '12px' }}>
                      {client.category}
                    </div>
                    <h3 className="service-name" style={{ fontSize: '1.25rem' }}>{client.title}</h3>
                    <p className="service-desc" style={{ marginBottom: '24px', flex: 1 }}>{client.description}</p>
                    <div className="service-tags">
                      {client.tags.map(tag => (
                        <span key={tag} className="service-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="fade-up" style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                No case studies available in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Clients;
