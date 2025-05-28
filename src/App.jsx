import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import SidebarNew from "./components/SidebarNew";

function App() {
  return (
    <div className="app-layout">
      {/* <Sidebar /> */}
      <SidebarNew/>
      <div className="main-section">
        {/* <Header /> */}
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
