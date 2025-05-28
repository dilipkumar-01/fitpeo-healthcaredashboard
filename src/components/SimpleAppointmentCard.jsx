import React from "react";
import "../styles/SimpleAppointmentCard.css";
import { Calendar } from "lucide-react";

const SimpleAppointmentCard = ({ title, time }) => (
    <div className="appt-card">
        {/*<Calendar size={18} className="icon" /> */}
        <div>
            <p className="title">{title}</p>
            <p className="time">{time}</p>
        </div>
    </div>
);

export default SimpleAppointmentCard;
