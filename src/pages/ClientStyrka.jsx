import { useEffect } from 'react';

const ClientStyrka = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="client-case-study" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-0)', color: 'var(--text-primary)' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', margin: '60px 0 80px' }}>
          <div className="inline-flex" style={{ 
            background: 'var(--cyan-dim)', 
            color: 'var(--text-primary)', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: '600',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            border: '1px solid var(--border-cyan)'
          }}>
            Featured Case Study
          </div>
          <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Styrka <br/>
            <span className="gradient-text">Agri-Tech Digital Ecosystem</span>
          </h1>
          <p className="p" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            A dynamic web presence and comprehensive ERP portal built for a modern fertilizer company, seamlessly connecting administration, employees, and customers.
          </p>
        </div>

        {/* Hero Image/Mockup Section */}
        <div style={{ 
          background: 'var(--bg-1)', 
          border: '1px solid var(--border)', 
          borderRadius: '4px',
          padding: '40px',
          marginBottom: '100px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)',
            opacity: 0.5,
            filter: 'blur(50px)'
          }}></div>
          
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              <a href="https://styrka-six.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>styrka-six.vercel.app</a>
            </h2>
            <p className="p" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Next-Generation Fertilizer Management Platform</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Dynamic Interface</span>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>AI Chatbot</span>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Enterprise ERP</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <a href="https://styrka-six.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', background: 'var(--cyan)', color: '#000', fontWeight: '800', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>
                Visit Styrka
              </a>
              <a href="https://styrka-six.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', border: '1px solid var(--cyan)', color: 'var(--cyan)', fontWeight: '800', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>
                Open Web App
              </a>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', marginBottom: '100px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div className="section-label">Overview</div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>Streamlining Agricultural Operations</h2>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              For Styrka, a forward-thinking fertilizer company, we built a highly interactive website coupled with an advanced employee management portal.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The platform features a customer-facing AI chatbot for instantaneous query resolution, alongside a robust administrative backend where managers can track employee attendance, monitor locations, and communicate securely.
            </p>
          </div>
          <div style={{ 
            background: 'var(--bg-1)', 
            border: '1px solid var(--border)', 
            borderRadius: '4px', 
            padding: '40px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            flex: '1 1 300px'
          }}>
            {[
              { label: 'Client', value: 'Styrka' },
              { label: 'Industry', value: 'Agriculture' },
              { label: 'Platform', value: 'Web App' },
              { label: 'Features', value: 'ERP + AI' }
            ].map((stat, i) => (
              <div key={i} style={{ flex: '1 1 120px' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '8px' }}>{stat.label}</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginBottom: '120px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Capabilities</div>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 800, textAlign: 'center', marginBottom: '64px', letterSpacing: '-0.03em' }}>Key Features Developed</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            {[
              {
                title: 'Customer Query Chatbot',
                desc: 'An intelligent, 24/7 automated assistant embedded into the dynamic interface to help visitors with product and service inquiries.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                )
              },
              {
                title: 'Employee Tracking & Attendance',
                desc: 'Geo-location tracking with seamless punch-in and punch-out functionalities, giving admins complete oversight of fieldwork operations.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                  </svg>
                )
              },
              {
                title: 'Secure Internal Messaging',
                desc: 'A personalized, private communication portal allowing direct, encrypted chatting between employees and administrative staff.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="service-card" style={{ flex: '1 1 280px', borderRadius: 0, border: 'none' }}>
                <div className="service-icon-wrap" style={{ width: '48px', height: '48px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="service-icon">{feature.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '12px', position: 'relative', zIndex: 1 }}>{feature.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default ClientStyrka;
