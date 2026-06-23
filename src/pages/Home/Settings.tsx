import React from "react";
import { Layout } from "../../components/Layout";
import "../../design/Dashboard.css";

const Settings = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <header className="dashboard-header">
            <div className="header-left">
              <h1 className="greeting">Settings</h1>
            </div>
          </header>
          <section className="activity-section">
            <div className="activity-card">
              <div className="activity-item">
                <div className="activity-details">
                  <h3>App Settings</h3>
                  <p>Customize your preferences and account settings here.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
