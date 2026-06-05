import { useEffect } from 'react';

const ClientDcpems = () => {
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
            DCPEMS <br/>
            <span className="gradient-text">School Website & App ERP</span>
          </h1>
          <p className="p" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            A comprehensive, all-in-one digital infrastructure for modern educational institutions. Bridging the gap between administration, teachers, students, and parents.
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', fontFamily: 'var(--font-display)', fontWeight: 800 }}><a href="https://dcpems.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>dcpems.com</a></h2>
            <p className="p" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Next-Generation Educational Management System</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Web Application</span>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Mobile App</span>
              <span className="badge" style={{ background: 'var(--bg-0)', padding: '8px 16px', borderRadius: '2px', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>ERP System</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <a href="https://dcpems.com" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', background: 'var(--cyan)', color: '#000', fontWeight: '800', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>
                DCPEMS Website
              </a>
              <a href="https://dcpems.com" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', border: '1px solid var(--cyan)', color: 'var(--cyan)', fontWeight: '800', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}>
                DCPEMS Web App
              </a>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', marginBottom: '100px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div className="section-label">Overview</div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>Transforming School Administration</h2>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              DCPEMS represents the pinnacle of educational technology. Our team developed a seamless ecosystem that not only serves as an attractive front-facing school website but deeply integrates a powerful ERP system. 
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              This system eliminates paperwork, streamlines communication, and provides real-time analytics for school administrators, while offering intuitive portals for both students and parents.
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
              { label: 'Client', value: 'DCPEMS' },
              { label: 'Industry', value: 'Education Tech' },
              { label: 'Platform', value: 'Web & Mobile' },
              { label: 'Timeline', value: '12 Weeks' }
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
                title: 'Integrated ERP',
                desc: 'A robust backbone managing admissions, fees, attendance, and examinations all in one unified dashboard.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                )
              },
              {
                title: 'Dedicated Mobile App',
                desc: 'Cross-platform mobile application allowing parents and students to track progress, homework, and notices on the go.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                )
              },
              {
                title: 'Dynamic School Portal',
                desc: 'A modern, blazing-fast public website that showcases the school\'s facilities, achievements, and news dynamically.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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

export default ClientDcpems;
