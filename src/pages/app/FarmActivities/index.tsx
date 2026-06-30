import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import '../../../styles/FarmActivities/FarmActivities.css'

const ACTIVITY_TYPES = [
  'Irrigation',
  'Fertilizer',
  'Pesticide',
  'Observation',
  'Harvest Prep',
  'Other',
]

const ISSUES = [
  'Yellowing',
  'Pest sighting',
  'Lodging',
  'Discoloration',
  'Water stress',
  'None',
]

const FarmActivities: React.FC = () => {
  const [activityType, setActivityType] = useState<string>(ACTIVITY_TYPES[0])
  const [notes, setNotes] = useState<string>('')
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // wire up to your backend later
    alert('Activity logged (stub). Backend integration pending.')
  }

  return (
    <AppShell pageTitle="Farm Activities">
      <section className="page-section">
        <div className="section-heading">
          <h3><i className="fa-solid fa-clipboard-list"></i> Quick Log — Today</h3>
        </div>

        <form className="card activity-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Date</label>
            <input type="text" value="Jun 30, 2026 (auto)" readOnly />
          </div>

          <div className="form-row">
            <label>Activity Type</label>
            <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
              {ACTIVITY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Notes / Description</label>
            <textarea
              rows={4}
              placeholder="What did you do or observe today?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Observed Issues</label>
            <div className="issue-grid">
              {ISSUES.map((i) => (
                <label key={i} className={`issue-chip ${selectedIssues.includes(i) ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={selectedIssues.includes(i)}
                    onChange={() => toggleIssue(i)}
                  />
                  {i}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row">
            <label>Photo (optional)</label>
            <input type="file" accept="image/*" disabled />
            <small className="muted">Photo upload coming soon</small>
          </div>

          <button type="submit" className="btn-primary">Submit Log</button>
        </form>

        <div className="section-heading">
          <h3><i className="fa-solid fa-clock-rotate-left"></i> Recent Logs</h3>
        </div>

        <div className="logs-list">
          {[
            { d: 'Jun 29, 2026', t: 'Irrigation', n: 'Field 3A — 2.5 ha, 6:00 AM' },
            { d: 'Jun 28, 2026', t: 'Fertilizer', n: 'Urea applied, 4.5 kg in Field 2B' },
            { d: 'Jun 25, 2026', t: 'Pest scouting', n: 'No issues found across fields' },
          ].map((l, idx) => (
            <div className="log-row" key={idx}>
              <div className="log-date">{l.d}</div>
              <div className="log-body">
                <div className="log-what"><strong>{l.t}</strong> — {l.n}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  )
}

export default FarmActivities