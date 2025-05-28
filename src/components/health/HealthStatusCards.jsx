import React from "react";
import "../../styles/HealthStatusCards.css";

const healthCardData = [
  {
    title: "Lungs",
    emoji: "🫁",
    date: "26 Okt 2021",
    progressColor: "#D75A5A",
    progress: 60,
  },
  {
    title: "Teeth",
    emoji: "🦷",
    date: "26 Okt 2021",
    progressColor: "#35C2A7",
    progress: 80,
  },
  {
    title: "Bone",
    emoji: "🦴",
    date: "26 Okt 2021",
    progressColor: "#F79049",
    progress: 50,
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthCardData.map((card, idx) => (
        <div key={idx} className="health-card">
          <div className="card-header">
            <span className="emoji">{card.emoji}</span>
            <span className="title">{card.title}</span>
          </div>
          <div className="card-date">Date: {card.date}</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${card.progress}%`,
                backgroundColor: card.progressColor,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
