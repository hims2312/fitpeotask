import React from "react";
import { ListGroup, Stack } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaChartBar,
  FaCogs,
  FaComments,
  FaHistory,
  FaHospital,
  FaNotesMedical,
  FaQuestionCircle,
  FaUserMd,
} from "react-icons/fa";

const iconMap = {
  Dashboard: <FaHospital />,
  History: <FaHistory />,
  Calendar: <FaCalendarAlt />,
  Appointments: <FaUserMd />,
  Statistics: <FaChartBar />,
  Tests: <FaNotesMedical />,
  Chat: <FaComments />,
  Support: <FaQuestionCircle />,
  Setting: <FaCogs />,
};

const menuItems1 = ["Dashboard", "History", "Calendar", "Appointments"];
const menuItems2 = ["Statistics", "Tests", "Chat", "Support"];

const SidebarNew = () => {
  const drawerWidth = "250px";

  return (
    <div
      style={{
        width: drawerWidth,
        height: "100vh",
        backgroundColor: "rgb(247, 250, 255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        paddingTop: "1rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      }}
    >
      {/* Top Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "fantasy",
            fontSize: "1.5rem",
            marginBottom: "1.2rem",
          }}
        >
          <span style={{ color: "#7AE2CF" }}>Health</span>
          <span style={{ marginLeft: "5px", color: "#000" }}>care</span>
        </div>

        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            margin: "0.5rem 0",
            color: "#888",
          }}
        >
          General
        </div>
        <ListGroup variant="flush">
          {menuItems1.map((item) => (
            <ListGroup.Item
              key={item}
              action
              style={{
                border: "none",
                background: "transparent",
                padding: "0.5rem 0.25rem",
              }}
            >
              <Stack direction="horizontal" gap={2}>
                {iconMap[item]}
                <span style={{ fontWeight: 500 }}>{item}</span>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            margin: "1rem 0 0.5rem",
            color: "#888",
          }}
        >
          Tools
        </div>
        <ListGroup variant="flush">
          {menuItems2.map((item) => (
            <ListGroup.Item
              key={item}
              action
              style={{
                border: "none",
                background: "transparent",
                padding: "0.5rem 0.25rem",
              }}
            >
              <Stack direction="horizontal" gap={2}>
                {iconMap[item]}
                <span style={{ fontWeight: 500 }}>{item}</span>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Bottom Section */}
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item
            action
            style={{
              border: "none",
              background: "transparent",
              padding: "0.5rem 0.25rem",
            }}
          >
            <Stack direction="horizontal" gap={2}>
              {iconMap["Setting"]}
              <span style={{ fontWeight: 500 }}>Settings</span>
            </Stack>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default SidebarNew;
