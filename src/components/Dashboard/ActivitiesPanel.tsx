import React, { useState } from 'react'

interface Activity {
  icon: string
  title: string
  meta: string
  status: string
  statusClass: string
}

const ActivitiesPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabs: string[] = ['Recent Activities', 'Irrigation Logs', 'Fertilizer Applications', 'Pest Monitoring']

  const activities: Activity[] = [
    { icon: 'fa-solid fa-droplet', title: 'Irrigation', meta: 'Field 3A · 2.5 ha · May 22, 2025 — 6:00 AM', status: 'Completed', statusClass: 'status-done' },
    { icon: 'fa-solid fa-flask', title: 'Fertilizer Application', meta: 'Field 5B · 3.2 ha · May 21, 2025 — 8:00 AM', status: 'Completed', statusClass: 'status-done' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Pest Scouting', meta: 'Field 2A · 1.8 ha · May 21, 2025 — 7:00 AM', status: 'No Issues', statusClass: 'status-issue' },
    { icon: 'fa-solid fa-leaf', title: 'Weed Control', meta: 'Field 1C · 2.1 ha · May 20, 2025 — 6:30 AM', status: 'Completed', statusClass: 'status-done' },
  ]

  return (
    <div className="panel">
      <div className="section-heading" style={{ marginBottom: '4px' }}>
        <h3>Farm Activities</h3>
      </div>
      <div className="tabs">
        {tabs.map((tab, idx) => (
          <span
            key={idx}
            className={idx === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </span>
        ))}
      </div>

      {activeTab === 0 ? (
        <>
          {activities.map((act, idx) => (
            <div className="activity-row" key={idx}>
              <div className="activity-row__icon"><i className={act.icon}></i></div>
              <div>
                <div className="activity-row__title">{act.title}</div>
                <div className="activity-row__meta">{act.meta}</div>
              </div>
              <span className={`activity-row__status ${act.statusClass}`}>{act.status}</span>
            </div>
          ))}
        </>
      ) : (
        <p style={{ padding: '20px 0', color: 'var(--color-text-secondary)' }}>
          Content for "{tabs[activeTab]}" goes here.
        </p>
      )}

      <a href="#" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: 'var(--color-primary-700)', fontWeight: '600', textDecoration: 'none' }}>View All Activities</a>
    </div>
  )
}

export default ActivitiesPanel