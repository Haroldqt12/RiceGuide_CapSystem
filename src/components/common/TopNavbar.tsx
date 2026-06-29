import React from 'react'

interface TopbarProps {
  onMenuClick: () => void
}

const TopNavbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="menu-toggle" onClick={onMenuClick}>
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
  )
}

export default TopNavbar