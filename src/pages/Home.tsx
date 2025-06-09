import React from 'react';
import logoFilled from '/logo-filled.png';
import Carousel from '../components/Carousel';
import Onboard from '../components/Onboard/Onboard';

const Home: React.FC = () => {
  const features = [
    {
      title: "Seamless Integration",
      description: "Connect and deploy with ease across our infrastructure ecosystem. Our advanced CU hydration process for new deployments is industry-leading, getting your services up and running faster than anywhere else."
    },
    {
      title: "Zero Downtime",
      description: "Experience unparalleled reliability with our redundant infrastructure. Our multi-region failover and automated recovery systems ensure your services stay online, always."
    },
    {
      title: "Insane Performance",
      description: "Leverage our cutting-edge infrastructure for blazing-fast speeds. Our optimized network and compute layers deliver exceptional performance for all your workloads."
    },
    {
      title: "Enterprise Ready",
      description: "Built for scale with reliability and security at the core. Our infrastructure is battle-tested and trusted by leading organizations worldwide."
    },
    {
      title: "Developer First",
      description: "Comprehensive tools and documentation to accelerate your workflow. Our intuitive APIs and robust SDKs make development a breeze."
    },
    {
      title: "Completely Free",
      description: "Thanks to substantial backing from major investors, we're able to offer our enterprise-grade infrastructure completely free for early users. Join us now to lock in this unprecedented offer."
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <img src={logoFilled} alt="InfrAO Logo" className="hero-logo" />
        <h1>Welcome to InfrAO</h1>
        <p>Empowering the next generation of infrastructure solutions</p>
      </div>
      
      <Carousel items={features} interval={4000} />
      <Onboard />
    </div>
  );
};

export default Home;
