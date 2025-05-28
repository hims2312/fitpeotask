import React from "react";
import "../../styles/AnatomySection.css";
import anatomyImage from "../../assets/anaotmyimg.png";
import { healthIndicators } from "../../data/healthStatus";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="zoom-icon">🔍</div>

        <img src={anatomyImage} alt="Anatomy" className="anatomy-image" />

        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className={`health-label ${item.status}`}
            style={item.position}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
