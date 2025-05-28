import React from "react";
import "../styles/DashboardOverview.css";

const DashboardOverview = () => (
    <div>
        <div className="dashboard-overview">
            <h2 className="overviewtitle">Dashboard</h2>
            <div className="week-dropdown">
                This Week <span className="downarrow"> <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#0a2176;"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span>
            </div>
        </div>
    </div>
);

export default DashboardOverview;
