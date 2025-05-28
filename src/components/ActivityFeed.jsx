import React from "react";
import "../styles/ActivityFeed.css";
import { calendarAppointments } from "../data/appointments";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const addDays = (date, days) => {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
};

const getWeekDates = (currentDate) => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const mondayOffset = (day === 0 ? -6 : 1) - day;
    const monday = addDays(startOfWeek, mondayOffset);
    return Array.from({ length: 7 }, (_, i) => addDays(monday, i));
};

const formatDate = (date) => date.toISOString().split("T")[0];

const getBarColor = (count) => {
    if (count === 0) return "#ccc";
    if (count <= 2) return "#2ecc71";
    if (count <= 4) return "#f39c12";
    return "#e74c3c";
};

const ActivityFeed = () => {
    const weekDates = getWeekDates(new Date());

    const dailyAppointments = weekDates.map((date) => {
        const dateStr = formatDate(date);
        const match = calendarAppointments.find((a) => a.date === dateStr);
        return match ? match.times.length : 0;
    });

    const totalAppointments = dailyAppointments.reduce((a, b) => a + b, 0);

    return (
        <div className="activity-feed">
            <section className="activity-header">
                <h2>Activity</h2>
                <div>{totalAppointments} appointments on this week</div>
            </section>

            <div className="bar-chart">
                {dailyAppointments.map((count, idx) => (
                    <div key={idx} className="bar-wrapper" style={{ textAlign: "center" }}>
                        <div
                            className="bar"
                            title={`${count} appointment${count !== 1 ? "s" : ""}`}
                            style={{
                                height: `${count * 15}px`,
                                backgroundColor: getBarColor(count),
                            }}
                        ></div>

                        <div className="weekday-label">{weekdays[idx]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
