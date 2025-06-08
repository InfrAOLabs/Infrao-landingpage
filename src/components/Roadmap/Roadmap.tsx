import React from 'react';
import './Roadmap.css';

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  description: string;
}

const roadmapData: RoadmapItem[] = [
  {
    quarter: 'Q1',
    year: '2024',
    title: 'Join AO Testnet',
    description: 'Join AO during testnet and develop team of core contributors'
  },
  {
    quarter: 'Q2',
    year: '2024',
    title: 'CU Optimization',
    description: 'Run CUs and start optimizing them for faster performance while running at large scale'
  },
  {
    quarter: 'Q3',
    year: '2024',
    title: 'MU & SU Integration',
    description: 'Experiment with MU and SU and run processes fully on InfrAO'
  },
  {
    quarter: 'Q4',
    year: '2024',
    title: 'RandAO Migration',
    description: 'Migrate core client RandAO over to system to increase speeds'
  },
  {
    quarter: 'Q1',
    year: '2025',
    title: 'System Audit',
    description: 'Open new branch to audit and upgrade processes and assist client migration'
  },
  {
    quarter: 'Q2',
    year: '2025',
    title: 'Hyperbeam Integration',
    description: 'Deploy Hyperbeam nodes and assist clients in migrating between legacynet and Hyperbeam and open developer support/education system'
  },
  {
    quarter: 'Q3',
    year: '2025',
    title: 'Network Scaling',
    description: 'Scale to 25% of the networks total compute, and start offering public AO auditing'
  },
  {
    quarter: 'Q4',
    year: '2025',
    title: 'Developer Onboarding',
    description: 'Open AO onboarding funnel to help new developers get started on AO with all the tools and support they need'
  }
];

const Roadmap: React.FC = () => {
  // Group items by year
  const groupedByYear = roadmapData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, RoadmapItem[]>);

  const years = Object.keys(groupedByYear);

  return (
    <div className="roadmap">
      <div className="roadmap-container">
        <div className="roadmap-track">
          {years.flatMap((year, yearIndex) => {
            const items = groupedByYear[year];
            return [
              // Year marker
              <div key={`year-${year}`} className="year-marker">
                <span>{year}</span>
              </div>,
              // Items for this year
              ...items.map((item, itemIndex) => (
                <div key={`${year}-${item.quarter}`} className="roadmap-node">
                  <div className="roadmap-content">
                    <div className="roadmap-date">{item.quarter}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            ];
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
