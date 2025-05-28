import React from "react";
import "../styles/HealthStatusCards.css";
import { healthStatusCards } from "../data/healthData";

const HealthStatusCards = () => (
    <div className="health-cards">
        {healthStatusCards.map((card, idx) => (
            <div key={idx} className="health-card">
                <h3>{card.title}</h3>
                <p className="date">{card.date}</p>


                <div className="status-bar-wrapper">
                    <div
                        className="status-bar-fill"
                        style={{
                            backgroundColor: card.color,
                            width: `${card.percentage}%`,
                        }}
                    />
                </div>
            </div>
        ))}
    </div>
);

export default HealthStatusCards;