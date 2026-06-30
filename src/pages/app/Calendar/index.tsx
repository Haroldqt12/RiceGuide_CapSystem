import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import '../../../styles/Calendar/Calendar.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface DayMark {
  day: number
  marks: Array<'log' | 'stage' | 'task' | 'risk'>
}

const buildMonth = (year: number, month: number): DayMark[] => {
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: DayMark[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push({ day: 0, marks: [] })
  for (let d = 1; d <= daysInMonth; d++) {
    const marks: DayMark['marks'] = []
    if ([5, 12, 18, 25].includes(d)) marks.push('log')
    if ([10, 22].includes(d)) marks.push('stage')
    if ([15, 28].includes(d)) marks.push('task')
    if ([3].includes(d)) marks.push('risk')
    cells.push({ day: d, marks })
  }
  return cells
}

const Calendar: React.FC = () => {
  const today = new Date()
  const [year, setYear] = useState<number>(today.getFullYear())
  const [month, setMonth] = useState<number>(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate())

  const cells = buildMonth(year, month)

  const move = (delta: number) => {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y -= 1 }
    if (m > 11) { m = 0; y += 1 }
    setMonth(m); setYear(y); setSelectedDay(null)
  }

  const legend = [
    { key: 'log', label: 'Logged activities', color: '#4CAF50' },
    { key: 'stage', label: 'Stage transition', color: '#FFC107' },
    { key: 'task', label: 'AI-scheduled task', color: '#2196F3' },
    { key: 'risk', label: 'Weather risk', color: '#F44336' },
  ]

  return (
    <AppShell pageTitle="Calendar">
      <section className="page-section">
        <div className="calendar-header">
          <button className="btn-ghost" onClick={() => move(-1)}><i className="fa-solid fa-chevron-left"></i></button>
          <h2>{MONTHS[month]} {year}</h2>
          <button className="btn-ghost" onClick={() => move(1)}><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className="calendar-legend">
          {legend.map((l) => (
            <span key={l.key} className="legend-item">
              <span className="legend-dot" style={{ background: l.color }}></span> {l.label}
            </span>
          ))}
        </div>

        <div className="calendar-grid">
          {DAYS.map((d) => <div key={d} className="calendar-weekday">{d}</div>)}
          {cells.map((c, idx) => (
            <button
              key={idx}
              className={`calendar-cell ${c.day === 0 ? 'empty' : ''} ${c.day === selectedDay ? 'selected' : ''} ${c.day === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? 'today' : ''}`}
              disabled={c.day === 0}
              onClick={() => c.day && setSelectedDay(c.day)}
            >
              {c.day > 0 && (
                <>
                  <span className="calendar-day">{c.day}</span>
                  <div className="calendar-marks">
                    {c.marks.includes('log') && <span className="dot dot-log"></span>}
                    {c.marks.includes('stage') && <span className="dot dot-stage"></span>}
                    {c.marks.includes('task') && <span className="dot dot-task"></span>}
                    {c.marks.includes('risk') && <span className="dot dot-risk"></span>}
                  </div>
                </>
              )}
            </button>
          ))}
        </div>

        {selectedDay !== null && (
          <div className="card day-detail">
            <div className="day-detail__head">
              <strong>{MONTHS[month]} {selectedDay}, {year}</strong>
            </div>
            <ul className="day-detail__list">
              <li><span className="dot dot-log"></span> Irrigation logged — Field 3A</li>
              <li><span className="dot dot-task"></span> Scheduled: Fertilizer application</li>
              <li><span className="dot dot-stage"></span> Stage transition reminder</li>
            </ul>
          </div>
        )}
      </section>
    </AppShell>
  )
}

export default Calendar