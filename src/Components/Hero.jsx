import React from 'react';
import './Hero.css';

import gymLogo from '../assets/gym-logo.jpg';
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">FITNESS</h1>
          <p className="hero-subtitle">
            UNLEASH YOUR STRENGTH. JOIN THE JOURNEY TO ELITE FITNESS.
          </p>
        </div>
        <div className="hero-image-box">
          <img src={gymLogo} alt="Fitness Sports Center" className="hero-logo-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;