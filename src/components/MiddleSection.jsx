import React from "react";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import "../styles/MiddleSection.css";

const MiddleSection = () => (
    <div className="middle-section">
        <div>
            <DashboardOverview />
        </div>
        <section className="middle-main">
            <div className="top-grid-section">
                <div className="anatomy-health-wrap">
                    <AnatomySection />
                </div>
                <div>
                    <HealthStatusCards />
                </div>
                <div className="detail-dropdown">
                    Details <span className="rightarrow"> -&gt;</span>
                </div>
            </div>
            <div className="activities">
                <ActivityFeed /></div>
        </section>
    </div>
);

export default MiddleSection;
