import React from "react";
// import "./WeeklyCalendar.css";
import "../../styles/CalendarView.css";
// import "../../styles/HealthStatusCards.css";

const days = [
  { label: "Mon", date: 25 },
  { label: "Tues", date: 26 },
  { label: "Wed", date: 27 },
  { label: "Thurs", date: 28 },
  { label: "Fri", date: 29 },
  { label: "Sat", date: 30 },
  { label: "Sun", date: 31 },
];

const selectedSlots = {
  Tues: ["09:00"],
  Thurs: ["11:00"],
  Sat: ["12:00", "14:00", "15:00"],
  Sun: ["09:00"],
};

const appointments = [
  {
    title: "Dentist",
    time: "09.00–11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    color: "#4B41F0",
    textColor: "#fff",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    color: "#E6ECF7",
    textColor: "#000",
  },
];
const CalendarView = () => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="nav-arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-days">
        {days.map((day, index) => {
          const isActive = day.label === "Tues";
          return (
            <div
              key={index}
              className={`day-column ${isActive ? "active" : ""}`}
            >
              <div className="day-top">
                <div className="day-label">{day.label}</div>
                <div className="day-number">{day.date}</div>
              </div>

              {[10, 11, 12].map((hour, i) => {
                const time = `${hour.toString().padStart(2, "0")}:00`;
                const isSelected = selectedSlots[day.label]?.includes(time);

                return (
                  <div
                    key={i}
                    className={`time-pill ${isSelected ? "selected" : ""}`}
                  >
                    {isSelected ? time : "•"}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="calendar-appointments">
        {appointments.map((appt, i) => (
          <div
            key={i}
            className="appt-card"
            style={{ backgroundColor: appt.color, color: appt.textColor }}
          >
            <div className="appt-title">
              {appt.title} <span className="appt-icon">{appt.icon}</span>
            </div>
            <div className="appt-time">{appt.time}</div>
            <div className="appt-doctor">{appt.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
