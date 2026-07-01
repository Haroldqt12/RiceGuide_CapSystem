import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import { useFarming } from '../../../context/FarmingContext'
import { getForecast } from '../../../data/weatherData'
import '../../../styles/Calendar/Calendar.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface DayMark {
  day: number
  dateStr: string
  marks: Array<'log' | 'task' | 'risk'>
}

const Calendar: React.FC = () => {
  const { tasks, dailyLogs, todayDate } = useFarming()
  
  const today = new Date(todayDate)
  const [year, setYear] = useState<number>(today.getFullYear())
  const [month, setMonth] = useState<number>(today.getMonth())
  const [selectedDateStr, setSelectedDateStr] = useState<string>(todayDate)

  // Build the calendar grid
  const buildMonth = (y: number, m: number): DayMark[] => {
    const firstWeekday = new Date(y, m, 1).getDay()
    const daysInMonth = new Date(y, m + 1, 0).getDate()
    const cells: DayMark[] = []
    
    for (let i = 0; i < firstWeekday; i++) cells.push({ day: 0, dateStr: '', marks: [] })
    
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, m, d)
      // Fix timezone shift when converting to ISO string
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      const dateStr = date.toISOString().split('T')[0]
      const marks: DayMark['marks'] = []
      
      // Check logs
      if (dailyLogs.some(log => log.date === dateStr)) {
        marks.push('log')
      }
      // Check tasks
      if (tasks.some(task => {
        if (!task.startDate || !task.expectedCompletionDate) return false;
        return dateStr >= task.startDate && dateStr <= task.expectedCompletionDate;
      })) {
        marks.push('task')
      }
      
      // Check weather risks
      const forecast = getForecast(dateStr, 1)[0]
      if (forecast && forecast.rain > 50) {
        marks.push('risk')
      }
      
      cells.push({ day: d, dateStr, marks })
    }
    return cells
  }

  const cells = buildMonth(year, month)

  const move = (delta: number) => {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y -= 1 }
    if (m > 11) { m = 0; y += 1 }
    setMonth(m); setYear(y);
  }

  const legend = [
    { key: 'task', label: 'Farming Tasks', color: '#2196F3' },
    { key: 'log', label: 'Logged Activities', color: '#4CAF50' },
    { key: 'risk', label: 'Weather/Pest Risk', color: '#F44336' },
  ]

  // Get data for selected date
  const selectedLogs = dailyLogs.filter(log => log.date === selectedDateStr);
  const selectedTasks = tasks.filter(task => {
    if (!task.startDate || !task.expectedCompletionDate) return false;
    return selectedDateStr >= task.startDate && selectedDateStr <= task.expectedCompletionDate;
  });
  const selectedWeather = getForecast(selectedDateStr, 1)[0];

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
              className={`calendar-cell ${c.day === 0 ? 'empty' : ''} ${c.dateStr === selectedDateStr ? 'selected' : ''} ${c.dateStr === todayDate ? 'today' : ''}`}
              disabled={c.day === 0}
              onClick={() => c.day && setSelectedDateStr(c.dateStr)}
            >
              {c.day > 0 && (
                <>
                  <span className="calendar-day">{c.day}</span>
                  <div className="calendar-marks">
                    {c.marks.includes('task') && <span className="dot dot-task"></span>}
                    {c.marks.includes('log') && <span className="dot dot-log"></span>}
                    {c.marks.includes('risk') && <span className="dot dot-risk"></span>}
                  </div>
                </>
              )}
            </button>
          ))}
        </div>

        <div className="card day-detail">
          <div className="day-detail__head" style={{ marginBottom: '16px' }}>
            <strong style={{ fontSize: '18px' }}>
              {new Date(selectedDateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </strong>
          </div>
          
          <ul className="day-detail__list">
            {selectedTasks.length > 0 ? selectedTasks.map(t => (
              <li key={t.id}><span className="dot dot-task"></span> Scheduled: {t.name} ({t.status})</li>
            )) : <li><span className="dot" style={{ background: '#ccc' }}></span> No farming tasks scheduled for this day.</li>}
            
            {selectedLogs.map(l => (
              <li key={l.id}><span className="dot dot-log"></span> Log: {l.activityType} — {l.notes}</li>
            ))}
            
            {selectedWeather && selectedWeather.rain > 50 && (
              <li><span className="dot dot-risk"></span> Weather Risk: Heavy rain expected ({selectedWeather.rain}% chance)</li>
            )}
          </ul>
        </div>
      </section>
    </AppShell>
  )
}

export default Calendar