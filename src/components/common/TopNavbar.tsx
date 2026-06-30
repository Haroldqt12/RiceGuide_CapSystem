import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import riceGuideLogo from '../../assets/img/RiceGuide.png'

interface TopbarProps {
  onMenuClick: () => void
  pageTitle?: string
}

const TopNavbar: React.FC<TopbarProps> = ({ onMenuClick, pageTitle = 'Dashboard' }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close dropdown on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const goProfile = () => {
    setMenuOpen(false)
    navigate('/profile')
  }

  const handleLogout = () => {
    setMenuOpen(false)
    // Prototype: route back to login (no real auth yet)
    navigate('/')
  }

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          type="button"
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* Desktop: show current page title */}
        <h1 className="topbar__title-desktop">{pageTitle}</h1>
        {/* Mobile: show brand logo + name instead of page title */}
        <div className="topbar__brand">
          <img src={riceGuideLogo} alt="RiceGuide logo" className="topbar__brand-logo" />
          <span className="topbar__brand-name">RiceGuide</span>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__datetime">
          <span><i className="fa-regular fa-calendar"></i> Monday, June 22, 2026</span>
          <span><i className="fa-regular fa-clock"></i> 08:30 AM</span>
        </div>
        <button type="button" className="topbar__bell" aria-label="Notifications">
          <i className="fa-regular fa-bell"></i>
          <span className="dot">3</span>
        </button>

        {/* User dropdown */}
        <div className="topbar__profile" ref={menuRef}>
          <button
            type="button"
            className={`topbar__profile-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <img src="https://i.pravatar.cc/72?img=47" alt="Juan Dela Cruz" />
            <div className="topbar__profile-info">
              <div className="name">Juan Dela Cruz</div>
              <div className="role">Farm Manager</div>
            </div>
            <i className={`fa-solid fa-chevron-down topbar__profile-caret ${menuOpen ? 'flip' : ''}`}></i>
          </button>

          {menuOpen && (
            <div className="topbar__dropdown" role="menu">
              <div className="topbar__dropdown-head">
                <img src="https://i.pravatar.cc/72?img=47" alt="Juan Dela Cruz" />
                <div>
                  <div className="topbar__dropdown-name">Juan Dela Cruz</div>
                  <div className="topbar__dropdown-email">juan.delacruz@riceguide.ph</div>
                </div>
              </div>
              <div className="topbar__dropdown-divider" />
              <button type="button" className="topbar__dropdown-item" role="menuitem" onClick={goProfile}>
                <i className="fa-solid fa-user"></i>
                <span>User Profile</span>
              </button>
              <button type="button" className="topbar__dropdown-item" role="menuitem">
                <i className="fa-solid fa-gear"></i>
                <span>Settings</span>
              </button>
              <div className="topbar__dropdown-divider" />
              <button
                type="button"
                className="topbar__dropdown-item topbar__dropdown-item--danger"
                role="menuitem"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopNavbar