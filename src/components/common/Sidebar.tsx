import React from 'react'

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
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
  )
}

export default Sidebar