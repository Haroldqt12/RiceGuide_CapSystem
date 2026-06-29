import React from "react";
import "../../design/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="app-shell">
      {/* ============ SIDEBAR ============ */}
      <aside className="sidebar">
        <div className="sidebar__logo">
          <img src="/RiceGuide.png" alt="RiceGuide logo" />
          <span>RiceGuide</span>
        </div>
        
        <ul className="sidebar__nav">
          <li><a href="#" className="active"><i className="icon fa-solid fa-grip"></i><span className="label">Dashboard</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-seedling"></i><span className="label">Farm Overview</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-leaf"></i><span className="label">Crop Monitoring</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-list-check"></i><span className="label">Farm Activities</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-cloud-sun"></i><span className="label">Weather Forecast</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-robot"></i><span className="label">AI Rice Assistant</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-chart-line"></i><span className="label">Reports &amp; Analytics</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-bell"></i><span className="label">Notifications</span><span className="badge">3</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-gear"></i><span className="label">Settings</span></a></li>
          <li><a href="#"><i className="icon fa-solid fa-user"></i><span className="label">User Profile</span></a></li>
        </ul>

        <div className="sidebar__weather">
          <div className="temp">28°C</div>
          <div className="desc">Partly Cloudy</div>
          <div className="loc">Brgy. San Isidro, Nueva Ecija</div>
        </div>
      </aside>

      {/* ============ MAIN ============ */}
      <div className="main">
        {/* Topbar */}
        <header className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button className="menu-toggle" id="menuToggle" onClick={() => alert("Mobile sidebar drawer goes here — wire this up once we move to React/Vite.")}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1>Dashboard</h1>
          </div>
          <div className="topbar__right">
            <div className="topbar__datetime">
              <span><i className="fa-regular fa-calendar"></i> Monday, June 22, 2025</span>
              <span><i className="fa-regular fa-clock"></i> 08:30 AM</span>
            </div>
            <div className="topbar__bell">
              <i className="fa-regular fa-bell"></i>
              <span className="dot">3</span>
            </div>
            <div className="topbar__profile">
              <img src="https://i.pravatar.cc/72?img=47" alt="Juan Dela Cruz" />
              <div>
                <div className="name">Juan Dela Cruz</div>
                <div className="role">Farm Manager</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          {/* Welcome banner */}
          <section className="welcome-banner">
            <div>
              <h2>Welcome back, Juan 👋</h2>
              <p>Here's what's happening on your farm today.</p>
            </div>
          </section>

          {/* Farm Overview */}
          <div className="section-heading">
            <h3><i className="fa-solid fa-chart-simple"></i> Farm Overview</h3>
          </div>
          <div className="overview-grid">
            <div className="stat-card">
              <div className="stat-card__icon icon-green"><i className="fa-solid fa-map"></i></div>
              <div className="stat-card__label">Total Farm Area</div>
              <div className="stat-card__value">25.6 ha</div>
              <div className="stat-card__sub">+2.5% from last month</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon icon-blue"><i className="fa-solid fa-table-cells"></i></div>
              <div className="stat-card__label">Active Rice Fields</div>
              <div className="stat-card__value">12 Fields</div>
              <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>2 in preparation</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon icon-gold"><i className="fa-solid fa-clock-rotate-left"></i></div>
              <div className="stat-card__label">Growth Progress</div>
              <div className="stat-card__value">68%</div>
              <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>Average progress</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon icon-good"><i className="fa-solid fa-heart-pulse"></i></div>
              <div className="stat-card__label">Crop Health Status</div>
              <div className="stat-card__value">Good</div>
              <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>No major issues</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon icon-purple"><i className="fa-solid fa-clipboard-list"></i></div>
              <div className="stat-card__label">Upcoming Activities</div>
              <div className="stat-card__value">3 Tasks</div>
              <div className="stat-card__sub" style={{ color: "var(--color-text-secondary)" }}>Due this week</div>
            </div>
          </div>

          {/* Weather / Crop / AI */}
          <div className="panel-row">
            {/* Weather */}
            <div className="panel">
              <h4>Weather Monitoring</h4>
              <div className="weather-now">
                <div>
                  <div className="weather-now__temp">28°C</div>
                  <div className="weather-now__desc">Partly Cloudy · Feels like 30°C</div>
                </div>
                <div className="weather-now__icon"><i className="fa-solid fa-cloud-sun"></i></div>
              </div>
              <div className="weather-meta">
                <span><i className="fa-solid fa-droplet"></i> Rain Probability: 37%</span>
                <span><i className="fa-solid fa-water"></i> Humidity: 78%</span>
                <span><i className="fa-solid fa-wind"></i> Wind Speed: 12 km/h</span>
              </div>
              <div className="forecast-row">
                <div className="forecast-day"><div className="d">Tue</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>29°/24°</div>
                <div className="forecast-day"><div className="d">Wed</div><div className="icon"><i className="fa-solid fa-cloud"></i></div>30°/25°</div>
                <div className="forecast-day"><div className="d">Thu</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>31°/24°</div>
                <div className="forecast-day"><div className="d">Fri</div><div className="icon"><i className="fa-solid fa-cloud-sun"></i></div>30°/24°</div>
                <div className="forecast-day"><div className="d">Sat</div><div className="icon"><i className="fa-solid fa-cloud-rain"></i></div>29°/23°</div>
              </div>
            </div>

            {/* Crop monitoring */}
            <div className="panel">
              <h4>Crop Monitoring</h4>
              <div className="crop-photo"></div>
              <span className="crop-badge">Vegetative Stage <span className="day">Day 45</span></span>
              <div className="crop-detail-row"><span>Planting Date</span><span>May 08, 2025</span></div>
              <div className="crop-detail-row"><span>Expected Harvest</span><span>Sep 10, 2025</span></div>
              <div className="crop-detail-row"><span>Variety</span><span>NSIC Rc222</span></div>
              <div className="crop-detail-row"><span>Field Condition</span><span className="pill-good">Good</span></div>
              <div className="crop-detail-row" style={{ borderBottom: "none" }}><span>Pest Risk</span><span className="pill-low">Low</span></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "68%" }}></div></div>
              <div className="progress-label"><span>Growth Progress</span><span>68%</span></div>
            </div>

            {/* AI assistant */}
            <div className="panel">
              <h4>AI Rice Assistant <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", fontWeight: 400 }}>— Smart Insights for Your Farm</span></h4>

              <div className="ai-insight">
                <div className="ai-insight__icon"><i className="fa-solid fa-droplet"></i></div>
                <div>
                  <p className="ai-insight__title">Irrigation Advisory</p>
                  <p className="ai-insight__desc">Water level is optimal. Maintain current irrigation schedule.</p>
                </div>
              </div>
              <div className="ai-insight">
                <div className="ai-insight__icon"><i className="fa-solid fa-flask"></i></div>
                <div>
                  <p className="ai-insight__title">Fertilizer Recommendation</p>
                  <p className="ai-insight__desc">Apply urea fertilizer in 3 days for better tillering.</p>
                </div>
              </div>
              <div className="ai-insight">
                <div className="ai-insight__icon"><i className="fa-solid fa-bug"></i></div>
                <div>
                  <p className="ai-insight__title">Pest Alert</p>
                  <p className="ai-insight__desc">Low risk of brown planthopper. Continue monitoring.</p>
                </div>
              </div>
              <div className="ai-insight">
                <div className="ai-insight__icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
                <div>
                  <p className="ai-insight__title">Weather Alert</p>
                  <p className="ai-insight__desc">Possible rain in 2 days. Prepare drainage systems.</p>
                </div>
              </div>

              <a href="#" className="btn-primary">View All Insights</a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="bottom-row">
            {/* Farm activities */}
            <div className="panel">
              <div className="section-heading" style={{ marginBottom: "4px" }}><h3>Farm Activities</h3></div>
              <div className="tabs">
                <span className="active">Recent Activities</span>
                <span>Irrigation Logs</span>
                <span>Fertilizer Applications</span>
                <span>Pest Monitoring</span>
              </div>

              <div className="activity-row">
                <div className="activity-row__icon"><i className="fa-solid fa-droplet"></i></div>
                <div>
                  <div className="activity-row__title">Irrigation</div>
                  <div className="activity-row__meta">Field 3A · 2.5 ha · May 22, 2025 — 6:00 AM</div>
                </div>
                <span className="activity-row__status status-done">Completed</span>
              </div>
              <div className="activity-row">
                <div className="activity-row__icon"><i className="fa-solid fa-flask"></i></div>
                <div>
                  <div className="activity-row__title">Fertilizer Application</div>
                  <div className="activity-row__meta">Field 5B · 3.2 ha · May 21, 2025 — 8:00 AM</div>
                </div>
                <span className="activity-row__status status-done">Completed</span>
              </div>
              <div className="activity-row">
                <div className="activity-row__icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                <div>
                  <div className="activity-row__title">Pest Scouting</div>
                  <div className="activity-row__meta">Field 2A · 1.8 ha · May 21, 2025 — 7:00 AM</div>
                </div>
                <span className="activity-row__status status-issue">No Issues</span>
              </div>
              <div className="activity-row">
                <div className="activity-row__icon"><i className="fa-solid fa-leaf"></i></div>
                <div>
                  <div className="activity-row__title">Weed Control</div>
                  <div className="activity-row__meta">Field 1C · 2.1 ha · May 20, 2025 — 6:30 AM</div>
                </div>
                <span className="activity-row__status status-done">Completed</span>
              </div>

              <a href="#" style={{ display: "block", textAlign: "center", marginTop: "12px", fontSize: "13px", color: "var(--color-primary-700)", fontWeight: 600, textDecoration: "none" }}>View All Activities</a>
            </div>

            {/* Reports */}
            <div className="panel">
              <div className="section-heading" style={{ marginBottom: "4px" }}><h3>Reports &amp; Analytics</h3></div>

              <div className="report-mini-grid">
                <div className="report-mini">
                  <div className="report-mini__label">Estimated Yield</div>
                  <div className="report-mini__value">6.2 tons/ha</div>
                  <div className="report-mini__sub">+8.5% vs last season</div>
                </div>
                <div className="report-mini">
                  <div className="report-mini__label">Total Production</div>
                  <div className="report-mini__value">158.7 tons</div>
                  <div className="report-mini__sub">+12.3% vs last season</div>
                </div>
                <div className="report-mini">
                  <div className="report-mini__label">Water Usage</div>
                  <div className="report-mini__value">1,250 m³</div>
                  <div className="report-mini__sub" style={{ color: "var(--color-danger)" }}>-5.2% vs last month</div>
                </div>
                <div className="report-mini">
                  <div className="report-mini__label">Fertilizer Usage</div>
                  <div className="report-mini__value">320 kg/ha</div>
                  <div className="report-mini__sub" style={{ color: "var(--color-danger)" }}>-3.1% vs last month</div>
                </div>
              </div>

              <div className="section-heading" style={{ marginBottom: "8px" }}><h3 style={{ fontSize: "13px" }}>Yield Trend (tons/ha)</h3></div>
              <div className="chart-wrap">
                <svg viewBox="0 0 320 130" preserveAspectRatio="none">
                  <polyline fill="none" stroke="#4CAF50" strokeWidth="2.5"
                    points="0,90 27,75 54,82 80,55 107,60 134,40 160,48 187,30 214,15 240,20 267,25 293,5" />
                  <circle cx="293" cy="5" r="4" fill="#2E7D32" />
                </svg>
              </div>
            </div>

          </div>

        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="bottom-nav">
        <a href="#" className="active"><span className="icon"><i className="fa-solid fa-house"></i></span>Home</a>
        <a href="#"><span className="icon"><i className="fa-solid fa-table-cells"></i></span>Fields</a>
        <span className="fab"><i className="fa-solid fa-plus"></i></span>
        <a href="#"><span className="icon"><i className="fa-solid fa-list-check"></i></span>Activities</a>
        <a href="#"><span className="icon"><i className="fa-solid fa-chart-line"></i></span>Reports</a>
      </nav>

    </div>
  );
};

export default Dashboard;