import React from 'react';
import SupportTier from '../components/SupportTier/SupportTier';
import FeaturesComparison from '../components/FeaturesComparison/FeaturesComparison';
import Onboard from '../components/Onboard/Onboard';
import './GetStarted.css';

const GetStarted: React.FC = () => {
  return (
    <div className="get-started-page">
      <div className="page-header">
        <h1>Get Started with InfrAO</h1>
        <p className="section-intro">Everything you need to begin your journey with our infrastructure solutions</p>
        <p className="section-intro">Choose the support tier that fits your needs and budget</p></div>
      
      {/* Support Services Section */}
      <section className="support-section">        
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
            ctaText="Start Now"
            ctaLink="https://docs_infrao.ar.io"
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
              "Guaranteed 24-hour response time",
              "Priority bug fixes and feature requests"
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
        
        <Onboard />
      </section>
    </div>
  );
};

export default GetStarted;
