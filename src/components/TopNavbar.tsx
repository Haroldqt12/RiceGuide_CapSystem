import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BellIcon, HomeIcon, ActivitiesIcon, CalendarIcon, SettingsIcon } from "../layouts/icons";
import RiceGuideLogo from "../assets/RiceGuide.png";
import "../design/TopNavbar.css";

export const TopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <div className="logo-section" onClick={handleLogoClick}>
          <img src={RiceGuideLogo} alt="RiceGuide Logo" className="navbar-logo" />
          <span className="app-title">RiceGuide</span>
        </div>
      </div>

      <div className="navbar-center">
        <div className="nav-links">
          <a
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
            onClick={() => navigate("/dashboard")}
          >
            <HomeIcon className="nav-link-icon" />
            <span>Dashboard</span>
          </a>
          <a
            className={`nav-link ${isActive("/activities") ? "active" : ""}`}
            onClick={() => navigate("/activities")}
          >
            <ActivitiesIcon className="nav-link-icon" />
            <span>Activities</span>
          </a>
          <a
            className={`nav-link ${isActive("/calendar") ? "active" : ""}`}
            onClick={() => navigate("/calendar")}
          >
            <CalendarIcon className="nav-link-icon" />
            <span>Calendar</span>
          </a>
        </div>
      </div>

      <div className="navbar-right">
        <button className="notification-btn" onClick={handleNotificationClick}>
          <BellIcon className="bell-icon" />
          <span className="notification-badge"></span>
        </button>
        <div className="user-menu">
          <button className="settings-btn" onClick={() => navigate("/settings")}>
            <SettingsIcon className="settings-icon" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
