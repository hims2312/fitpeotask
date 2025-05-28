import React from "react";
import "../styles/Sidebar.css";
import { navigationLinks } from "../data/navigationLinks";
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

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">Healthcare.</h1>
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-list">
        {navigationLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <span className="nav-icon">{iconMap[link]}</span>
            <span className="nav-label">{link}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
