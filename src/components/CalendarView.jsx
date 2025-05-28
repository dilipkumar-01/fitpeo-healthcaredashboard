import React, { useState } from "react";
import "../styles/CalendarView.css";
import { calendarAppointments, appointmentCards } from "../data/appointments";


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

    const week = [];
    for (let i = 0; i < 7; i++) {
        week.push(addDays(monday, i));
    }
    return week;
};

const formatDate = (date) => date.toISOString().split("T")[0];

const getMonthYearLabel = (weekDates) => {
    const firstDate = weekDates[0];
    return `${firstDate.toLocaleString("default", { month: "long" })} ${firstDate.getFullYear()}`;
};


const CalendarHeader = ({ label, onPrev, onNext }) => (
    <div className="calendar-header">
        <h2>{label}</h2>
        <div className="nav-buttons">
            <button className="nav-arrow" onClick={onPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a2176;"><path d="M520-200 80-480l440-280-137 240h497v80H383l137 240Z" /></svg>
            </button>
            <button className="nav-arrow" onClick={onNext}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a2176;"><path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" /></svg>
            </button>
        </div>
    </div>
);


const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const timeSlots = ["9:00", "11:00", "13:00", "15:00"];

const CalendarGrid = ({ weekDates, selectedSlots, toggleSlotSelection }) => (
    <div className="calendar-grid">
        {weekdays.map((day, i) => (
            <div key={i} className="calendar-day-header">
                {day}
            </div>
        ))}

        {weekDates.map((date, idx) => (
            <div key={idx} className="calendar-date-cell">
                {date.getDate()}
            </div>
        ))}

        {timeSlots.map((slot, slotIdx) =>
            weekDates.map((date, dateIdx) => {
                const fullDate = formatDate(date);
                const appointments = calendarAppointments.find((a) => a.date === fullDate);
                const isBooked = appointments?.times.includes(slot);
                const isSelected = selectedSlots[`${fullDate}_${slot}`];

                return (
                    <div
                        key={`${slotIdx}-${dateIdx}`}
                        className={`calendar-time-cell ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`}
                        onClick={() => !isBooked && toggleSlotSelection(fullDate, slot)}
                    >
                        {slot}
                    </div>
                );
            })
        )}
    </div>
);


const AppointmentCards = () => (
    <section className="appointment-cards">
        {appointmentCards.map((card, idx) => (
            <div key={idx} className="appt-card">
                <b>{card.type}</b>
                {/* <p>{card.date}</p> */}
                <p>{card.time}</p>
                <p>{card.doctor}</p>
            </div>
        ))}
    </section>
);


const CalendarView = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedSlots, setSelectedSlots] = useState({});

    const weekDates = getWeekDates(currentDate);

    const handlePrev = () => setCurrentDate(addDays(currentDate, -7));
    const handleNext = () => setCurrentDate(addDays(currentDate, 7));

    const toggleSlotSelection = (dateStr, time) => {
        setSelectedSlots((prev) => {
            const key = `${dateStr}_${time}`;
            const newSelected = { ...prev };
            if (newSelected[key]) {
                delete newSelected[key];
            } else {
                newSelected[key] = true;
            }
            return newSelected;
        });
    };

    return (
        <section className="calendar-section">
            <CalendarHeader
                label={getMonthYearLabel(weekDates)}
                onPrev={handlePrev}
                onNext={handleNext}
            />
            <CalendarGrid
                weekDates={weekDates}
                selectedSlots={selectedSlots}
                toggleSlotSelection={toggleSlotSelection}
            />
            <AppointmentCards />
        </section>
    );
};

export default CalendarView;
