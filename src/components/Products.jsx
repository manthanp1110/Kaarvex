import { useState, useRef, useEffect } from 'react';

const productsData = [
  {
    id: 1,
    title: 'Kaarvex ERP',
    category: 'Web Apps',
    description: 'A comprehensive enterprise resource planning system with real-time analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'SchoolConnect',
    category: 'Mobile Apps',
    description: 'Cross-platform mobile application for parents, students, and teachers.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    tags: ['React Native', 'Firebase']
  },
  {
    id: 3,
    title: 'VisionAI',
    category: 'AI Models',
    description: 'Computer vision model for real-time object detection and classification.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'OpenCV']
  },
  {
    id: 4,
    title: 'StoreFront',
    category: 'Web Apps',
    description: 'Next-generation headless e-commerce storefront for global brands.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    tags: ['Next.js', 'Shopify', 'Tailwind']
  },
  {
    id: 5,
    title: 'AI Agentic Works',
    category: 'AI Models',
    description: 'Autonomous AI agents capable of executing complex multi-step workflows and interacting with external systems.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    tags: ['LangChain', 'Python', 'LLMs']
  },
  {
    id: 6,
    title: 'NLP Insights',
    category: 'AI Models',
    description: 'Natural language processing tool for analyzing customer sentiment from social media.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop',
    tags: ['PyTorch', 'Hugging Face']
  }
];

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI Models'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section className="services-section" id="products" ref={ref} style={{ background: 'var(--bg-0)' }}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
          <h2 className="section-title">Our Products & Demos</h2>
          <p className="section-desc">
            Explore our curated selection of premium demo projects spanning across web applications, mobile platforms, and artificial intelligence.
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
                color: activeCategory === cat ? '#fff' : 'var(--text-primary)',
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
        <div className="services-grid fade-up">
          {filteredProducts.map(product => (
            <div key={product.id} className="service-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--cyan)', opacity: 0.1, zIndex: 1, pointerEvents: 'none' }}></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
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
                  {product.category}
                </div>
                <h3 className="service-name" style={{ fontSize: '1.25rem' }}>{product.title}</h3>
                <p className="service-desc" style={{ marginBottom: '24px', flex: 1 }}>{product.description}</p>
                <div className="service-tags">
                  {product.tags.map(tag => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
