import React from 'react';

const Docs: React.FC = () => {
  return (
    <div className="docs-page">
      <h1>Developer Guides</h1>
      <div className="docs-container">
        <div className="docs-section">
          <h2>Getting Started</h2>
          <ul className="docs-list">
            <li><a href="#">Quick Start Guide</a></li>
            <li><a href="#">Installation</a></li>
            <li><a href="#">Basic Concepts</a></li>
          </ul>
        </div>
        
        <div className="docs-section">
          <h2>API Reference</h2>
          <ul className="docs-list">
            <li><a href="#">Core API</a></li>
            <li><a href="#">Integration Guides</a></li>
            <li><a href="#">SDK Documentation</a></li>
          </ul>
        </div>
        
        <div className="docs-section">
          <h2>Tutorials</h2>
          <ul className="docs-list">
            <li><a href="#">Building Your First Project</a></li>
            <li><a href="#">Advanced Configuration</a></li>
            <li><a href="#">Best Practices</a></li>
          </ul>
        </div>
      </div>
      
      <div className="docs-resources">
        <h2>Additional Resources</h2>
        <div className="resource-cards">
          <div className="resource-card">
            <h3>Sample Projects</h3>
            <p>Explore examples to kickstart your development</p>
            <div className="sample-links">
              <div className="sample-project">
                <h4>AO-Link</h4>
                <div className="project-links">
                  <a href="https://github.com/InfrAOLabs/ao-link" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                  <a href="https://aolink_infrao.ar.io/" target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                </div>
              </div>
              <div className="sample-project">
                <h4>Lunar</h4>
                <div className="project-links">
                  <a href="https://github.com/InfrAOLabs/lunar" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                  <a href="https://lunar_infrao.ar.io/" target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="resource-card">
            <h3>Webinars</h3>
            <p>Watch tutorials and live coding sessions</p>
            <a href="#" className="btn">View Webinars</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
