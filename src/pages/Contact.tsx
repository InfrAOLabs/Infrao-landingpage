import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Schedule a Meeting</h1>
      <p className="section-intro">Book a time that works for you</p>
      
      <div style={{ 
        position: 'relative', 
        paddingBottom: '75%', 
        height: 0, 
        overflow: 'hidden',
        marginTop: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <iframe
          src="https://calendar.notion.so/meet/ethangold-steinberg/infrao"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: 'white'
          }}
          title="Book a Meeting"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Contact;
