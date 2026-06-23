import React from "react";
import { IrrigationIcon, FertilizerIcon, BugIcon, RightArrowIcon } from "../../layouts/icons";
import { Weather } from "../../components/Weather";
import { Layout } from "../../components/Layout";
import "../../design/Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-content">
          
          {/* Header Section */}
          <header className="dashboard-header">
            <div className="header-left">
              <div className="user-info">
                <h1 className="greeting">Dashboard</h1>
                <p className="date">Welcome back! Here's an overview of your farm</p>
              </div>
            </div>
          </header>

          {/* Weather Section */}
          <section className="weather-section">
            <Weather />
          </section>

          {/* Today's Activity Section */}
          <section className="activity-section">
            <div className="section-header">
              <h2>Today's Activities</h2>
              <a href="#" className="see-all">View All</a>
            </div>
            
            <div className="activity-grid">
              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <IrrigationIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Irrigation</h3>
                    <p>8:00 AM - 10:00 AM</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <FertilizerIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Fertilizer Application</h3>
                    <p>10:30 AM - 12:00 PM</p>
                  </div>
                  <div className="status-badge in-progress">In Progress</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <BugIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Pest Management</h3>
                    <p>2:00 PM - 4:00 PM</p>
                  </div>
                  <div className="status-badge pending">Pending</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activities Section */}
          <section className="activity-section">
            <div className="section-header">
              <h2>Recent Activities</h2>
              <a href="#" className="see-all">View All</a>
            </div>
            
            <div className="activity-grid">
              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <IrrigationIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Irrigation Completed</h3>
                    <p>June 22, 2026 - Area North</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <FertilizerIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Fertilizer Applied</h3>
                    <p>June 21, 2026 - Area South</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <BugIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Pest Control Done</h3>
                    <p>June 20, 2026 - Area East</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <IrrigationIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Soil Preparation</h3>
                    <p>June 19, 2026 - Area West</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <FertilizerIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Nutrient Check</h3>
                    <p>June 18, 2026 - Full Farm</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-item">
                  <div className="activity-icon-wrapper">
                    <BugIcon className="activity-icon" />
                  </div>
                  <div className="activity-details">
                    <h3>Inspection Report</h3>
                    <p>June 17, 2026 - All Areas</p>
                  </div>
                  <div className="status-badge complete">Complete</div>
                  <RightArrowIcon className="arrow-icon" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
