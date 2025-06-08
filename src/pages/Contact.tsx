import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="section-intro">We'd love to hear from you. Reach out through any of these channels</p>
      
      <div className="contact-methods">
        <div className="contact-method">
          <h2>Chat</h2>
          <p>Get immediate assistance through our live chat support</p>
          <button className="btn primary">Start Chat</button>
        </div>
        
        <div className="contact-method">
          <h2>Email</h2>
          <p>Send us a message and we'll respond within 24 hours</p>
          <a href="mailto:support@infrao.com" className="btn">support@infrao.com</a>
        </div>
        
        <div className="contact-method">
          <h2>Discord</h2>
          <p>Join our community for discussions and real-time support</p>
          <a href="https://discord.gg/infrao" className="btn">Join Discord</a>
        </div>
      </div>
      
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject">
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales Question</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
      
      <div className="office-section">
        <h2>Our Office</h2>
        <div className="office-details">
          <div className="address">
            <h3>Headquarters</h3>
            <p>123 Tech Boulevard</p>
            <p>Innovation District</p>
            <p>San Francisco, CA 94105</p>
          </div>
          <div className="office-hours">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 6pm PT</p>
            <p>Online Support: 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
