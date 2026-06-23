import React from "react";
import { Layout } from "../../components/Layout";
import "../../design/Dashboard.css";

const Calendar = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <header className="dashboard-header">
            <div className="header-left">
              <h1 className="greeting">Calendar</h1>
            </div>
          </header>
          <section className="activity-section">
            <div className="activity-card">
              <div className="activity-item">
                <div className="activity-details">
                  <h3>Schedule & Calendar</h3>
                  <p>View your farming schedule and upcoming tasks here.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
