import React from "react";
import "../styles/DashboardMainContent.css";
import DashboardOverview from "./overview/DashboardOverview";
import AnatomySection from "./anatomy/AnatomySection";
import HealthStatusCards from "./health/HealthStatusCards";
import CalendarView from "./calendar/CalendarView";
import UpcomingSchedule from "./schedule/UpcomingSchedule";
import ActivityFeed from "./activity/ActivityFeed";
import { FaBell, FaSearch, FaPlus } from "react-icons/fa";
import avatar from "../assets/avatar.png";
import "../styles/Header.css";
import CalenderNew from "./calendar/CalenderNew";
import WeeklyCalendar from "./calendar/WeeklyCalender";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-content">
      {/* <DashboardOverview /> */}
      <div className="dashboard-sections">
        <div>
          <div className="header-left">
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                readOnly
              />
            </div>
            <FaBell className="search-bell-icon" />
          </div>
          <div className="dashboard-left">
            <AnatomySection />
            <HealthStatusCards />
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <ActivityFeed />
          </div>
        </div>

        <div className="dashboard-right">
          <div className="header-right">
            <div className="user-profile">
              <img src={avatar} alt="User Avatar" className="avatar" />
            </div>
            <button className="add-button">
              <FaPlus />
            </button>
          </div>
          {/* <CalendarView /> */}
          
          <WeeklyCalendar/>
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
