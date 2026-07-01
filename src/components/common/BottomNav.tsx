import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

interface NavItem {
  icon: string
  label: string
  path: string
}

interface BottomNavProps {
  activePath?: string
}

const NAV: NavItem[] = [
  { icon: 'fa-solid fa-house', label: 'Home', path: '/dashboard' },
  { icon: 'fa-solid fa-cloud-sun', label: 'Weather', path: '/weather-forecast' },
]

const FAB = { icon: 'fa-solid fa-leaf', label: 'Monitor', path: '/crop-monitoring' }

const TRAIL: NavItem[] = [
  { icon: 'fa-solid fa-calendar', label: 'Calendar', path: '/calendar' },
  { icon: 'fa-solid fa-list-check', label: 'Activities', path: '/farm-activities' },
]

const BottomNav: React.FC<BottomNavProps> = () => {

  return (
    <>
      <nav className="bottom-nav">
        {NAV.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon"><i className={item.icon}></i></span>
            {item.label}
          </NavLink>
        ))}

        <NavLink
          to={FAB.path}
          end
          className={({ isActive }) => `fab ${isActive ? 'active' : ''}`}
          aria-label={FAB.label}
          title={FAB.label}
        >
          <i className={FAB.icon}></i>
        </NavLink>

        {TRAIL.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="icon"><i className={item.icon}></i></span>
            {item.label}
          </NavLink>
        ))}
      </nav>

    </>
  )
}

export default BottomNav