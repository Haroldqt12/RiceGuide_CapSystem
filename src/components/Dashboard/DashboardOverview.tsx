import React from "react";
import "../../design/DashboardOverview.css";

export const DashboardOverview = () => {
  return (
    <div className="overview-grid">
      <div className="stat-card">
        <div className="stat-card__icon icon-green">
          <i className="fa-solid fa-map"></i>
        </div>
        <div className="stat-card__label">Total Farm Area</div>
        <div className="stat-card__value">25.6 ha</div>
        <div className="stat-card__sub">+2.5% from last month</div>
      </div>
      <div className="stat-card">
        <div className="stat-card__icon icon-blue">
          <i className="fa-solid fa-table-cells"></i>
        </div>
        <div className="stat-card__label">Active Rice Fields</div>
        <div className="stat-card__value">12 Fields</div>
        <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>2 in preparation</div>
      </div>
      <div className="stat-card">
        <div className="stat-card__icon icon-gold">
          <i className="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div className="stat-card__label">Growth Progress</div>
        <div className="stat-card__value">68%</div>
        <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>Average progress</div>
      </div>
      <div className="stat-card">
        <div className="stat-card__icon icon-good">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>
        <div className="stat-card__label">Crop Health Status</div>
        <div className="stat-card__value">Good</div>
        <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>No major issues</div>
      </div>
      <div className="stat-card">
        <div className="stat-card__icon icon-purple">
          <i className="fa-solid fa-clipboard-list"></i>
        </div>
        <div className="stat-card__label">Upcoming Activities</div>
        <div className="stat-card__value">3 Tasks</div>
        <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>Due this week</div>
      </div>
    </div>
  );
};

export default DashboardOverview;