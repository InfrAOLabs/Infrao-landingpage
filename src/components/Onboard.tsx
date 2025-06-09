import React from 'react';
import './Onboard.css';

const Onboard: React.FC = () => {
  return (
    <div className="onboard-section">
      <div className="onboard-container">
        <h2>Integrate now</h2>
        <p className="onboard-subtitle">Exceptional performance on AO or your money back!</p>
        <div className="onboard-buttons">
          <a 
            href="https://docs_infrao.ar.io" 
            className="btn primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a 
            href="/contact" 
            className="btn secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
