import React from "react";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import "../styles/RightSection.css";

const RightSection = () => (
    <div className="right-section">
        <div className="calendar-and-schedule">
            <CalendarView />
            <UpcomingSchedule />
        </div>
    </div>
);

export default RightSection;
