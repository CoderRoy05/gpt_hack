import React, { useEffect } from 'react';
import './cta.css';

const CTA = () => {
  useEffect(() => {
    const scrollTarget = document.getElementById('scrollTarget');
    if (scrollTarget) {
      const yOffset = scrollTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="gpt3__cta" id="scrollTarget">
      <div className="gpt3__cta-content" >
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
