// src/components/Card.jsx
import React from 'react';
import '../Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome Icon

const Card = ({ title, value, hoverColor, icon, className }) => {
  return (
    <div className={`card ${className}`} style={{ '--hover-color': hoverColor, borderBottom: `4px solid ${hoverColor}` }}>
      <div className="card-content">
        <FontAwesomeIcon icon={icon} className="icon" style={{ backgroundColor: hoverColor }} />
        <div className="text-content">
          <h3>{title}</h3>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;








