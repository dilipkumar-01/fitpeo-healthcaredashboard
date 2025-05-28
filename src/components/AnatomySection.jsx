import React from "react";
import "../styles/AnatomySection.css";
import anatomy from "../assets/anatomy.png";
import { healthIndicators } from "../data/healthData";

const AnatomySection = () => {

    const ScannerIcon = ({ fill = "#fff" }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill={fill}
        >
            <path d="M40-120v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720ZM160-240v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM40-640v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z" />
        </svg>
    );

    return (
        <section className="anatomy-section">
            <img src={anatomy} alt="Anatomy" className="anatomy-img" />
            {healthIndicators.map((indicator, index) => (
                <div
                    key={index}
                    className="health-indicator"
                    style={{
                        top: indicator.top,
                        left: indicator.left,
                        backgroundColor: indicator.type === "icon" ? "transparent" : indicator.color,
                        padding: indicator.type === "icon" ? 0 : "4px 8px",
                    }}
                >
                    {indicator.type === "icon" ? (
                        <ScannerIcon fill={indicator.color || "#0a2176"} />
                    ) : (
                        indicator.label
                    )}
                </div>
            ))}
        </section>
    );
};

export default AnatomySection;
