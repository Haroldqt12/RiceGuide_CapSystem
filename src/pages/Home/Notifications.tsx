import React from "react";
import { Layout } from "../../components/Layout";
import "../../design/Dashboard.css";

const Notifications = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <header className="dashboard-header">
            <div className="header-left">
              <h1 className="greeting">Notifications</h1>
            </div>
          </header>
          <section className="activity-section">
            <div className="activity-card">
              <div className="activity-item">
                <div className="activity-details">
                  <h3>No new notifications</h3>
                  <p>You're all caught up! Check back later for updates.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
