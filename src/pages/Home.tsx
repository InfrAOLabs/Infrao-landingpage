import React from 'react';
import logoFilled from '/logo-filled.png';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={logoFilled} alt="InfrAO Logo" className="hero-logo" />
        <h1>Welcome to InfrAO</h1>
        <p>Empowering the next generation of infrastructure solutions</p>
      </div>
      
      <div className="value-props" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 0'
      }}>
        <div className="value-prop" style={{ textAlign: 'center', width: '100%' }}>
          <h2>Seamless Integration</h2>
          <p>Connect and deploy with ease across our infrastructure ecosystem</p>
        </div>
        <div className="value-prop" style={{ textAlign: 'center', width: '100%' }}>
          <h2>Enterprise Ready</h2>
          <p>Built for scale with reliability and security at the core</p>
        </div>
        <div className="value-prop" style={{ textAlign: 'center', width: '100%' }}>
          <h2>Developer First</h2>
          <p>Comprehensive tools and documentation to accelerate your workflow</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to transform your infrastructure?</h2>
        <div className="cta-buttons">
          <a href="/docs" className="btn primary">Get Started</a>
          <a href="/infra" className="btn secondary">Explore Products</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
