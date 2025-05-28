import React from "react";
import "../styles/UpcomingSchedule.css";
import { upcomingAppointments } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => (
    <section className="upcoming-section">
        <h2>The Upcoming Schedule</h2>
        {upcomingAppointments.map((group, idx) => (
            <div key={idx} className="day-group">
                <h3>On {group.day}</h3>
                <div className="appointments">
                    {group.appointments.map((appt, i) => (
                        <SimpleAppointmentCard key={i} title={appt.title} time={appt.time} />
                    ))}
                </div>
            </div>
        ))}
    </section>


);

export default UpcomingSchedule;
