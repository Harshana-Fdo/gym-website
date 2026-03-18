import React from 'react';
import './About.css';

import gymPic1 from '../assets/gym-1.jpg';
import gymPic2 from '../assets/gym-2.jpg';
import gymPic3 from '../assets/gym-3.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Gym</h2>
        <p className="about-text">
          EST.2023 - OUR ELITE SPORTS CENTER OFFERS PREMIUM AMENITIES
        </p>
        
        <div className="about-gallery">
          <div className="gallery-item">
            <img src={gymPic1} alt="Gym Facility 1" />
          </div>
          <div className="gallery-item">
            <img src={gymPic2} alt="Gym Facility 2" />
          </div>
          <div className="gallery-item">
            <img src={gymPic3} alt="Gym Facility 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;