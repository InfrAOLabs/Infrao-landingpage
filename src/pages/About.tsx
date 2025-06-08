import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About InfrAO</h1>
      
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At InfrAO, our mission is to revolutionize infrastructure management by providing 
          cutting-edge solutions that empower developers and enterprises to build, deploy, 
          and scale their applications with unprecedented ease and efficiency.
        </p>
      </div>
      
      <div className="team-section">
        <h2>Our Team</h2>
        <p>We are a team of passionate engineers, designers, and infrastructure experts committed to innovation.</p>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Jane Doe</h3>
            <p className="member-role">CEO & Founder</p>
            <p className="member-bio">15+ years of experience in cloud infrastructure and distributed systems</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>John Smith</h3>
            <p className="member-role">CTO</p>
            <p className="member-bio">Former lead architect at major cloud provider with expertise in scalable systems</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Anna Chen</h3>
            <p className="member-role">Head of Engineering</p>
            <p className="member-bio">Specialized in high-performance computing and distributed networks</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Michael Johnson</h3>
            <p className="member-role">Lead Product Designer</p>
            <p className="member-bio">Creating intuitive interfaces for complex infrastructure systems</p>
          </div>
        </div>
      </div>
      
      <div className="roadmap-section">
        <h2>Roadmap</h2>
        <p>Our vision for the future of InfrAO and upcoming features</p>
        
        <div className="roadmap-timeline">
          <div className="roadmap-item">
            <div className="roadmap-date">Q3 2025</div>
            <div className="roadmap-content">
              <h3>Enhanced MU Integration</h3>
              <p>Deeper integration between management units and third-party tools</p>
            </div>
          </div>
          
          <div className="roadmap-item">
            <div className="roadmap-date">Q4 2025</div>
            <div className="roadmap-content">
              <h3>Hyperbeam 2.0</h3>
              <p>Next-generation networking with advanced security features</p>
            </div>
          </div>
          
          <div className="roadmap-item">
            <div className="roadmap-date">Q1 2026</div>
            <div className="roadmap-content">
              <h3>Global Edge Deployment</h3>
              <p>Expanded infrastructure presence for lower latency worldwide</p>
            </div>
          </div>
          
          <div className="roadmap-item">
            <div className="roadmap-date">Q2 2026</div>
            <div className="roadmap-content">
              <h3>AI-Powered Infrastructure</h3>
              <p>Self-optimizing systems with predictive scaling capabilities</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Constantly pushing the boundaries of what's possible</p>
          </div>
          <div className="value-item">
            <h3>Reliability</h3>
            <p>Building systems you can depend on, day and night</p>
          </div>
          <div className="value-item">
            <h3>Transparency</h3>
            <p>Open communication with our team and customers</p>
          </div>
          <div className="value-item">
            <h3>Security</h3>
            <p>Putting data protection and privacy first</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
