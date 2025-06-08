import React from 'react';
import SupportTier from '../components/SupportTier';
import FeaturesComparison from '../components/FeaturesComparison';
import './GetStarted.css';

const GetStarted: React.FC = () => {
  return (
    <div className="get-started-page">
      <div className="page-header">
        <h1>Get Started with InfrAO</h1>
        <p className="section-intro">Everything you need to begin your journey with our infrastructure solutions</p>
      </div>
      
      {/* Support Services Section */}
      <section className="support-section">
        <h2>Support Services</h2>
        <p className="section-intro">Choose the support tier that fits your needs and budget</p>
        
        <div className="support-tiers">
          <SupportTier
            title="Basic"
            price="Free"
            description="Essential resources to get you started with InfrAO"
            features={[
              "Documentation access",
              "Community forums",
              "Basic tutorials",
              "Public issue tracker access"
            ]}
            ctaText="Get Started"
            ctaLink="#"
          />
          
          <SupportTier
            title="Team Support"
            price="$5 - $100/month"
            description="Custom support tailored to your team's needs"
            features={[
              "Basic tier included",
              "Scheduled consultation call to understand your needs",
              "Email support with 48-hour response time",
              "Priority access to new features"
            ]}
            includedTiers={["Basic tier"]}
            ctaText="Contact Us"
            ctaLink="/contact"
          />
          
          <SupportTier
            title="Developer Chat"
            price="$100 USD/month"
            description="Direct access to our expert team for all your technical questions"
            features={[
              "Team Support included",
              "Direct chat with our development team",
              "Guaranteed response within 24 hours",
              "Priority bug fixes",
              "Best practices guidance"
            ]}
            includedTiers={["Team Support"]}
            highlight={true}
            ctaText="Subscribe Now"
            ctaLink="/contact"
          />
          
          <SupportTier
            title="Technical Audit"
            price="Custom Pricing"
            description="Comprehensive review of your implementation"
            features={[
              "In-depth architecture review",
              "Performance optimization recommendations",
              "Security assessment",
              "Implementation roadmap",
              "Custom solution design"
            ]}
            ctaText="Request Quote"
            ctaLink="/contact"
          />
        </div>
      </section>

      {/* Infrastructure Products Section */}
      <section className="infrastructure-section">
        <h2>Infrastructure Products</h2>
        <p className="section-intro">Choose the right plan for your needs</p>
        
        <FeaturesComparison />
        
        <div className="product-grid">
          <div className="product-card">
            <h3>CU (Computation Unit)</h3>
            <p className="product-description">
              Optimized for dry runs and computing messages with close-coupled communication
            </p>
            <ul className="product-features">
              <li>Available in all tiers</li>
              <li>Fast and reliable computation</li>
              <li>Efficient resource utilization</li>
            </ul>
          </div>
          
          <div className="product-card">
            <h3>Hyperbeam</h3>
            <p className="product-description">
              Fleet of hyperbeam nodes for all hyperbeam activities
            </p>
            <ul className="product-features">
              <li>Exclusive to Developer Chat tier</li>
              <li>High-performance nodes</li>
              <li>Dedicated resources</li>
              <li>Reliable performance</li>
              <li>Cost-effective solutions</li>
              <li>Faster than alternative providers</li>
            </ul>
          </div>
          
          <div className="product-card">
            <h3>MU</h3>
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
            <h3>SU</h3>
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
          <h3>Seamless Integration</h3>
          <p>All InfrAO products work together in perfect harmony, providing a complete infrastructure solution</p>
          <div className="cta-buttons">
            <a href="https://cookbook_ao.arweave.net/concepts/units.html" className="btn primary" target="_blank" rel="noopener noreferrer">Learn More</a>
            <a href="/contact" className="btn primary">Request Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
