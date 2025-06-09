import React from 'react';
import './FeaturesComparison.css';

const FeaturesComparison: React.FC = () => {
  return (
    <div className="comparison-chart">
      <div className="comparison-header">
        <div className="feature-col">Features</div>
        <div className="tier-col">Basic</div>
        <div className="tier-col">Team Support</div>
        <div className="tier-col highlight">Developer Chat</div>
      </div>
      
      {/* CU Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">Computation Units (CU)</div>
        <div className="tier-col">✓</div>
        <div className="tier-col">✓</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Dry runs per process</div>
        <div className="tier-col">10,000/mo</div>
        <div className="tier-col">100,000/mo</div>
        <div className="tier-col highlight">Unlimited</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Messages computed</div>
        <div className="tier-col">10,000/mo</div>
        <div className="tier-col">100,000/mo</div>
        <div className="tier-col highlight">Unlimited</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Speed</div>
        <div className="tier-col">Basic</div>
        <div className="tier-col">Premium</div>
        <div className="tier-col highlight">Fastest</div>
      </div>
      
      {/* MU Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">Message Units (MU)</div>
        <div className="tier-col">-</div>
        <div className="tier-col">✓</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Will crank messages</div>
        <div className="tier-col">-</div>
        <div className="tier-col">No</div>
        <div className="tier-col highlight">Yes</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Will support crons</div>
        <div className="tier-col">-</div>
        <div className="tier-col">3 crons</div>
        <div className="tier-col highlight">100 crons</div>
      </div>
      
      {/* SU Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">Scheduler Units (SU)</div>
        <div className="tier-col">-</div>
        <div className="tier-col">✓</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Processes tracked</div>
        <div className="tier-col">-</div>
        <div className="tier-col">10-100</div>
        <div className="tier-col highlight">1000+</div>
      </div>
      
      {/* Hyperbeam Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">Hyperbeam</div>
        <div className="tier-col">-</div>
        <div className="tier-col">-</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Devices supported</div>
        <div className="tier-col">Limited</div>
        <div className="tier-col">All</div>
        <div className="tier-col highlight">All + Custom builds</div>
      </div>
      
      {/* AR.IO Gateways Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">AR.IO Gateways</div>
        <div className="tier-col">✓</div>
        <div className="tier-col">✓</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Access</div>
        <div className="tier-col">Public</div>
        <div className="tier-col">Private</div>
        <div className="tier-col highlight">Private</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Speed</div>
        <div className="tier-col">Public</div>
        <div className="tier-col">Regional Datacenters</div>
        <div className="tier-col highlight">Regional Datacenters</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">GraphQL</div>
        <div className="tier-col">Public</div>
        <div className="tier-col">Goldsky Level</div>
        <div className="tier-col highlight">Goldsky Level</div>
      </div>
      
      {/* AO Localnet Section */}
      <div className="comparison-row category-header">
        <div className="feature-col">AO Localnet</div>
        <div className="tier-col">✓</div>
        <div className="tier-col">✓</div>
        <div className="tier-col highlight">✓</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Access</div>
        <div className="tier-col">Public</div>
        <div className="tier-col">Private</div>
        <div className="tier-col highlight">Private</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Support</div>
        <div className="tier-col">No</div>
        <div className="tier-col">Yes</div>
        <div className="tier-col highlight">Yes</div>
      </div>
      
      <div className="comparison-row">
        <div className="feature-col subfeature">Hosting</div>
        <div className="tier-col">Self Hosted</div>
        <div className="tier-col">Hybrid/Cloud</div>
        <div className="tier-col highlight">Hybrid/Cloud</div>
      </div>
      
      <div className="comparison-row actions">
        <div className="feature-col"></div>
        <div className="tier-col"><a href="https://docs_infrao.ar.io" className="btn start-now-btn">Start Now</a></div>
        <div className="tier-col"><a href="/contact" className="btn start-now-btn">Contact Us</a></div>
        <div className="tier-col highlight"><a href="/contact" className="btn primary start-now-btn">Subscribe Now</a></div>
      </div>
    </div>
  );
};

export default FeaturesComparison;
