import React from "react";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import "../styles/DashboardMainContent.css";

const DashboardMainContent = () => (
    <div className="main-container">
        <MiddleSection />
        <RightSection />
    </div>
);

export default DashboardMainContent;