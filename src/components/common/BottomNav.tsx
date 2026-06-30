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
  const [popupOpen, setPopupOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isOnAiPage = location.pathname === '/ai-assistant'

  const quickPrompts = [
    { icon: 'fa-solid fa-droplet', label: 'Irrigation advice', prompt: 'Should I irrigate my field today?' },
    { icon: 'fa-solid fa-bug', label: 'Pest check', prompt: 'What pests should I watch out for this week?' },
    { icon: 'fa-solid fa-flask', label: 'Fertilizer schedule', prompt: 'When should I apply fertilizer?' },
    { icon: 'fa-solid fa-cloud-sun', label: 'Weather guidance', prompt: 'How does this week\'s weather affect my crop?' },
  ]

  const handleQuickAsk = (prompt: string) => {
    setPopupOpen(false)
    navigate('/ai-assistant', { state: { initialPrompt: prompt } })
  }

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

      {/* Floating AI Assistant trigger — hidden on AI Assistant page */}
      {!isOnAiPage && (
        <button
          type="button"
          className={`ai-fab ${popupOpen ? 'open' : ''}`}
          onClick={() => setPopupOpen((v) => !v)}
          aria-label="Open AI Rice Assistant"
          aria-expanded={popupOpen}
        >
          <i className="fa-solid fa-robot"></i>
        </button>
      )}

      {/* AI Quick-Ask Popup */}
      {popupOpen && (
        <>
          <div className="ai-popup-backdrop" onClick={() => setPopupOpen(false)} />
          <div className="ai-popup" role="dialog" aria-label="AI Assistant quick prompts">
            <div className="ai-popup__head">
              <div>
                <strong><i className="fa-solid fa-robot"></i> Ask RiceGuide</strong>
                <div className="ai-popup__sub">Pick a quick prompt or open the assistant</div>
              </div>
              <button className="ai-popup__close" onClick={() => setPopupOpen(false)} aria-label="Close">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="ai-popup__list">
              {quickPrompts.map((p) => (
                <button key={p.label} className="ai-popup__item" onClick={() => handleQuickAsk(p.prompt)}>
                  <i className={p.icon}></i>
                  <span>{p.label}</span>
                  <i className="fa-solid fa-chevron-right ai-popup__arrow"></i>
                </button>
              ))}
            </div>
            <button
              className="ai-popup__cta"
              onClick={() => { setPopupOpen(false); navigate('/ai-assistant') }}
            >
              <i className="fa-solid fa-comments"></i> Open AI Assistant
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default BottomNav