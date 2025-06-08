import React from 'react';
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';
import Values from '../components/Values/Values';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ethan',
      role: 'Infrastructure Lead',
      bio: 'Kubernetes orchestrator, cyber security expert and infrastructure builder',
      image: '/team/Ethan.png',
      alt: 'Ethan'
    },
    {
      name: 'Michael Buhler',
      role: 'CEO of Marshal',
      bio: 'AO expert, assisted in building core AO functionality for Forward research, over 10 years in professional development',
      image: '/team/Michael-Buhler.png',
      alt: 'Michael Buhler'
    },
    {
      name: 'Caitlyn L',
      role: 'Crypto Expert',
      bio: 'Cryptocurrency expert, created the most AO processes and written the most code running on AO. Audits smart contracts and has touched every piece of the AO stack on the process writing/creation side',
      image: '/team/Caitlyn.png',
      alt: 'Caitlyn L'
    },
    {
      name: 'Kenny S',
      role: 'Lead Client Relations',
      bio: 'Lead problem solver and main client liaison. 5+ years in consulting and client satisfaction, working directly with clients to solve their needs',
      image: '/team/Kenny.png',
      alt: 'Kenny S'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly upgrading and using the most modern tools to keep our deployments fresh and as fast as possible'
    },
    {
      title: 'Reliability',
      description: 'Main focus is keeping online and staying online. No more AO outages and failed dry runs.'
    },
    {
      title: 'Transparency',
      description: 'All our code is open source and we will explain how it all works. If you want to copy us and also help scale the AO network we will help you do so!'
    },
    {
      title: 'Security',
      description: 'All our systems are hardened and secure to ensure that we keep our customers data private and don\'t allow for any exploits due to our system setup. We have multiple developers with security backgrounds.'
    },
    {
      title: 'Affordable',
      description: 'We aim to run at such a large scale that we can offer the cheapest prices while also providing the highest quality services possible.'
    },
    {
      title: 'White Glove Service',
      description: 'Our support team is on standby 24/7 to help you in the event something goes wrong with your project, we will help fix your code, restart your processes or optimize/audit them. We are here to help you win.'
    }
  ];

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
      
      <Team members={teamMembers} />
      
      <div className="roadmap-section">
        <h2>Roadmap</h2>
        <p>Our vision for the future of InfrAO and upcoming features</p>
        <Roadmap />
      </div>
      
      <Values values={values} />
    </div>
  );
};

export default About;
