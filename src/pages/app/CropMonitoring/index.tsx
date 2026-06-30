import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import '../../../styles/CropMonitoring/CropMonitoring.css'

interface Stage {
  name: string
  days: string
  status: 'done' | 'active' | 'upcoming'
}

const STAGES: Stage[] = [
  { name: 'Seedling', days: 'Day 0–14', status: 'done' },
  { name: 'Tillering', days: 'Day 15–45', status: 'done' },
  { name: 'Panicle Init', days: 'Day 46–65', status: 'active' },
  { name: 'Heading', days: 'Day 66–85', status: 'upcoming' },
  { name: 'Ripening', days: 'Day 86–110', status: 'upcoming' },
  { name: 'Harvest', days: 'Day 111+', status: 'upcoming' },
]

interface LogEntry {
  date: string
  what: string
  alert?: string
}

const LOGS: LogEntry[] = [
  { date: 'Jun 28, 2026', what: 'Yellowing observed in Field 3A north section' },
  { date: 'Jun 25, 2026', what: 'Pest scouting — no sightings' },
  { date: 'Jun 22, 2026', what: 'Water level optimal (2–3 cm)', alert: 'Water level alert resolved' },
  { date: 'Jun 19, 2026', what: 'Light brown planthopper sighted' },
]

const CropMonitoring: React.FC = () => {
  const [tab, setTab] = useState<number>(0)
  const tabs = ['Growth Stage', 'Observation Logs', 'Notifications']

  return (
    <AppShell pageTitle="Crop Monitoring">
      <section className="page-section">
        <div className="section-heading">
          <h3><i className="fa-solid fa-seedling"></i> Crop Profile</h3>
        </div>
        <div className="card crop-summary">
          <div className="crop-summary__head">
            <div>
              <div className="crop-summary__stage">Panicle Init</div>
              <div className="crop-summary__date">Planted May 08, 2026</div>
            </div>
            <span className="pill-active">Day 52</span>
          </div>
          <div className="progress-track"><div className="progress-fill" style={{ width: '47%' }}></div></div>
          <div className="progress-label">
            <span>Growth Progress</span><span>47%</span>
          </div>
        </div>

        <div className="tabs">
          {tabs.map((t, idx) => (
            <span key={t} className={idx === tab ? 'active' : ''} onClick={() => setTab(idx)}>{t}</span>
          ))}
        </div>

        {tab === 0 && (
          <div className="stage-timeline">
            {STAGES.map((s) => (
              <div key={s.name} className={`stage-item stage-${s.status}`}>
                <div className="stage-dot"></div>
                <div className="stage-meta">
                  <div className="stage-name">{s.name}</div>
                  <div className="stage-days">{s.days}</div>
                </div>
                {s.status === 'active' && <span className="pill-active-sm">Current</span>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="logs-list">
            {LOGS.map((l, idx) => (
              <div className="log-row" key={idx}>
                <div className="log-date">{l.date}</div>
                <div className="log-body">
                  <div className="log-what">{l.what}</div>
                  {l.alert && <span className="pill-warn"><i className="fa-solid fa-triangle-exclamation"></i> {l.alert}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="logs-list">
            <div className="log-row">
              <div className="log-date">Jun 28, 2026</div>
              <div className="log-body">
                <div className="log-what">Crop entered Panicle Init stage</div>
                <span className="pill-info"><i className="fa-solid fa-circle-info"></i> Stage transition</span>
              </div>
            </div>
            <div className="log-row">
              <div className="log-date">Jun 19, 2026</div>
              <div className="log-body">
                <div className="log-what">Brown planthopper risk: medium</div>
                <span className="pill-warn"><i className="fa-solid fa-bug"></i> Pest risk</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </AppShell>
  )
}

export default CropMonitoring