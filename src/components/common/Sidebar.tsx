import React from 'react'
import { NavLink } from 'react-router-dom'

interface SidebarProps {
  open: boolean
  onToggle: () => void
  activePath?: string
}

interface SideItem {
  icon: string
  label: string
  path: string
}

const SIDES: SideItem[] = [
  { icon: 'fa-solid fa-house', label: 'Dashboard', path: '/dashboard' },
  { icon: 'fa-solid fa-cloud-sun', label: 'Weather Forecast', path: '/weather-forecast' },
  { icon: 'fa-solid fa-leaf', label: 'Crop Monitoring', path: '/crop-monitoring' },
  { icon: 'fa-solid fa-calendar', label: 'Calendar', path: '/calendar' },
  { icon: 'fa-solid fa-list-check', label: 'Farm Activities', path: '/farm-activities' },
  { icon: 'fa-solid fa-robot', label: 'AI Rice Assistant', path: '/ai-assistant' },
]

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__logo">
        <img src="/RiceGuide.png" alt="RiceGuide logo" />
        <span>RiceGuide</span>
      </div>

      <ul className="sidebar__nav">
        {SIDES.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <i className={`icon ${item.icon}`}></i>
              <span className="label">{item.label}</span>
            </NavLink>
          </li>
        ))}
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