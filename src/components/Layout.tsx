import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Helper to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="InfrAO Logo" />
              <span>InfrAO</span>
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li className={isActive('/')}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="https://docs_infrao.ar.io" target="_blank" rel="noopener noreferrer">Docs</a>
              </li>
              <li className={isActive('/get-started')}>
                <Link to="/get-started">Get Started</Link>
              </li>
              <li className={isActive('/about')}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive('/contact')}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logo} alt="InfrAO Logo" style={{ marginLeft: 0, height: '30px' }} />
              <p style={{ margin: 0 }}>InfrAO</p>
            </div>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} InfrAO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
