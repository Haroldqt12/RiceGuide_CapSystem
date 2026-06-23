import React from "react";
import { Layout } from "../../components/Layout";
import "../../design/Dashboard.css";

const Activities = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <header className="dashboard-header">
            <div className="header-left">
              <h1 className="greeting">Activities</h1>
            </div>
          </header>
          <section className="activity-section">
            <div className="activity-card">
              <div className="activity-item">
                <div className="activity-details">
                  <h3>Your activity logs will appear here</h3>
                  <p>Track all your farm management activities in one place.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
