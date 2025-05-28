import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalenderNew from "./CalenderNew"; // Adjust path if needed

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
const WeeklyCalendar = () => {
  return (
    <div>
      <div
        className="calendar-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>October 2021</h2>
        <div className="nav-arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>
      <Container>
        <Row className="justify-content-evenly g-1">
          {" "}
          {/* Reduce gutter */}
          {[
            {
              day: "Mon",
              date: 25,
              time1: "10.00",
              time2: "11.00",
              time3: "12.00",
            },
            {
              day: "Tue",
              date: 26,
              time1: "08.00",
              time2: "09.00",
              time3: "10.00",
            },
            {
              day: "Wed",
              date: 27,
              time1: "12.00",
              time2: "---",
              time3: "13.00",
            },
            {
              day: "Thurs",
              date: 28,
              time1: "10.00",
              time2: "11.00",
              time3: "---",
            },
            {
              day: "Fri",
              date: 29,
              time1: "---",
              time2: "14.00",
              time3: "16.00",
            },
            {
              day: "Sat",
              date: 30,
              time1: "12.00",
              time2: "14.00",
              time3: "15.00",
            },
            {
              day: "Sun",
              date: 31,
              time1: "09.00",
              time2: "10.00",
              time3: "11.00",
            },
          ].map((item, idx) => (
            <Col key={idx} xs="auto">
              <CalenderNew {...item} />
            </Col>
          ))}
        </Row>
      </Container>

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

export default WeeklyCalendar;
