import React from 'react';

const Infra: React.FC = () => {
  return (
    <div className="infra-page">
      <h1>Infrastructure Products</h1>
      <p className="section-intro">Discover our comprehensive suite of infrastructure solutions</p>
      
      <div className="product-grid">
        <div className="product-card">
          <h2>CU</h2>
          <p className="product-description">
            Computation unit used for dry runs and computing messages
          </p>
          <ul className="product-features">
            <li>Optimized with close-coupled communication</li>
            <li>Spreads load for faster computation than standard hardware</li>
            <li>Hyper fast and reliable dry runs</li>
          </ul>
        </div>
        
        <div className="product-card">
          <h2>Hyperbeam</h2>
          <p className="product-description">
            Fleet of hyperbeam nodes for all hyperbeam activities
          </p>
          <ul className="product-features">
            <li>Reliable performance</li>
            <li>Cost-effective solutions</li>
            <li>Faster than alternative providers</li>
          </ul>
        </div>
        
        <div className="product-card">
          <h2>MU</h2>
          <p className="product-description">
            Messaging unit for sending messages and processing results for the CU
          </p>
          <ul className="product-features">
            <li>Specialized for cron cranking</li>
            <li>Advanced setup capabilities</li>
            <li>More reliable than standard cron solutions</li>
          </ul>
        </div>
        
        <div className="product-card">
          <h2>SU</h2>
          <p className="product-description">
            Scheduler unit that tracks process states and current status
          </p>
          <ul className="product-features">
            <li>Physically closer to CUs for maximum speed</li>
            <li>Optimized for processing efficiency</li>
            <li>Enhanced state tracking capabilities</li>
          </ul>
        </div>
      </div>
      
      <div className="integration-section">
        <h2>Seamless Integration</h2>
        <p>All InfrAO products work together in perfect harmony, providing a complete infrastructure solution</p>
        <a href="https://cookbook_ao.arweave.net/concepts/units.html" className="btn primary" target="_blank" rel="noopener noreferrer">Learn More</a>
        <a href="/contact" className="btn primary">Request Demo</a>
      </div>
    </div>
  );
};

export default Infra;
