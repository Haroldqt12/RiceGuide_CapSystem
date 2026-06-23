import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeIcon, ActivitiesIcon, PlusIcon, CalendarIcon, SettingsIcon } from "../layouts/icons";
import "../design/BottomNavbar.css";

export const BottomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bottom-navbar">
      <div 
        className={`nav-item ${isActive("/dashboard") ? "active" : ""}`}
        onClick={() => navigate("/dashboard")}
      >
        <HomeIcon className="nav-icon" />
        <span className="nav-label">Home</span>
      </div>
      <div 
        className={`nav-item ${isActive("/activities") ? "active" : ""}`}
        onClick={() => navigate("/activities")}
      >
        <ActivitiesIcon className="nav-icon" />
        <span className="nav-label">Activities</span>
      </div>
      
      <div className="nav-item-center-wrapper">
        <div className="nav-item-center" onClick={() => navigate("/dashboard")}>
          <PlusIcon className="nav-icon-center" />
        </div>
        <span className="nav-label center-label">Add Logs</span>
      </div>
      
      <div 
        className={`nav-item ${isActive("/calendar") ? "active" : ""}`}
        onClick={() => navigate("/calendar")}
      >
        <CalendarIcon className="nav-icon" />
        <span className="nav-label">Calendar</span>
      </div>
      <div 
        className={`nav-item ${isActive("/settings") ? "active" : ""}`}
        onClick={() => navigate("/settings")}
      >
        <SettingsIcon className="nav-icon" />
        <span className="nav-label">Settings</span>
      </div>
    </nav>
  );
};

export default BottomNavbar;