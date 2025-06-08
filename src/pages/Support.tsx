import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="support-page">
      <h1>Support Services</h1>
      <p className="section-intro">We're here to help you succeed with our comprehensive support options</p>
      
      <div className="support-tiers">
        <div className="support-tier">
          <h2>Developer Help</h2>
          <div className="tier-badge">Basic</div>
          <p>Get started with free resources to help you implement our solutions</p>
          <ul className="tier-features">
            <li>Documentation access</li>
            <li>Community forums</li>
            <li>Starter tutorials</li>
          </ul>
          <a href="#" className="btn">Access Resources</a>
        </div>
        
        <div className="support-tier">
          <h2>Technical Audit</h2>
          <div className="tier-badge">Professional</div>
          <p>Expert review of your implementation with actionable recommendations</p>
          <ul className="tier-features">
            <li>Architecture assessment</li>
            <li>Performance optimization</li>
            <li>Security evaluation</li>
            <li>Implementation advice</li>
          </ul>
          <a href="/contact" className="btn">Request Audit</a>
        </div>
        
        <div className="support-tier highlight">
          <h2>Developer Chat</h2>
          <div className="tier-badge">Enterprise</div>
          <p>Direct access to our expert engineering team</p>
          <ul className="tier-features">
            <li>Dedicated support channel</li>
            <li>Priority response times</li>
            <li>Implementation guidance</li>
            <li>Troubleshooting assistance</li>
            <li>Custom integration support</li>
          </ul>
          <a href="/contact" className="btn primary">Contact Sales</a>
        </div>
      </div>
      
      <div className="support-resources">
        <h2>Additional Resources</h2>
        <div className="resource-grid">
          <div className="resource-item">
            <h3>Knowledge Base</h3>
            <p>Search our extensive collection of articles and guides</p>
            <a href="#">Browse Articles</a>
          </div>
          <div className="resource-item">
            <h3>Developer Community</h3>
            <p>Connect with other developers using InfrAO</p>
            <a href="#">Join Community</a>
          </div>
          <div className="resource-item">
            <h3>Webinars</h3>
            <p>Watch tutorials and demonstrations</p>
            <a href="#">View Schedule</a>
          </div>
          <div className="resource-item">
            <h3>Training</h3>
            <p>Register for online or in-person training sessions</p>
            <a href="#">Find Training</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
