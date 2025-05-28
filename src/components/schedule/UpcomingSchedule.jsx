import React from "react";
import "../../styles/UpcomingSchedule.css";
import { upcomingAppointments } from "../../data/upcomingAppointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, idx) => (
        <div key={idx} className="schedule-group">
          <h4 className="day-label">{group.day}</h4>
          <div className="schedule-cards">
            {group.appointments.map((appointment, i) => (
              <SimpleAppointmentCard
                key={i}
                title={appointment.title}
                time={appointment.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
