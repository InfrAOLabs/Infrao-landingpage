import React from 'react';
import './SupportTier.css';

interface SupportTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlight?: boolean;
  includedTiers?: string[];
}

const SupportTier: React.FC<SupportTierProps> = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  highlight = false,
  includedTiers = []
}) => {
  return (
    <div className={`support-tier ${highlight ? 'highlight' : ''}`}>
      <h3>{title}</h3>
      <div className="tier-badge">{price}</div>
      <p className="tier-description">{description}</p>
      
      {includedTiers.length > 0 && (
        <div className="included-tiers">
          <p className="includes-label">Includes:</p>
          <ul className="included-tiers-list">
            {includedTiers.map((tier, index) => (
              <li key={index} className="included-tier">{tier}</li>
            ))}
          </ul>
        </div>
      )}
      
      <ul className="tier-features">
        {features.map((feature, index) => (
          <li key={index} className="tier-feature">{feature}</li>
        ))}
      </ul>
      <a href={ctaLink} className={`btn ${highlight ? 'primary' : ''}`}>
        {ctaText}
      </a>
    </div>
  );
};

export default SupportTier;
