import React from 'react';
import './Services.css';

import service1 from '../assets/personal-training.jpg';
import service2 from '../assets/group-fitness.jpg';
import service3 from '../assets/nutrition.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: service1,
      title: "personal training"
    },
    {
      id: 2,
      image: service2,
      title: "Group Fitness"
    },
    {
      id: 3,
      image: service3,
      title: "Nutrition Coaching"
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-main-title">Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;