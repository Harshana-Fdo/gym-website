import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000); 
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          
          <button type="submit" className="submit-btn">Submit Button</button>
          
          {submitted && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;