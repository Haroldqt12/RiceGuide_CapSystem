import React from 'react'

interface ReportItem {
  label: string
  value: string
  sub: string
  subColor?: string
}

const ReportsPanel: React.FC = () => {
  const reports: ReportItem[] = [
    { label: 'Estimated Yield', value: '6.2 tons/ha', sub: '+8.5% vs last season' },
    { label: 'Total Production', value: '158.7 tons', sub: '+12.3% vs last season' },
    { label: 'Water Usage', value: '1,250 m³', sub: '-5.2% vs last month', subColor: 'var(--color-danger)' },
    { label: 'Fertilizer Usage', value: '320 kg/ha', sub: '-3.1% vs last month', subColor: 'var(--color-danger)' },
  ]

  return (
    <div className="panel">
      <div className="section-heading" style={{ marginBottom: '4px' }}>
        <h3>Reports &amp; Analytics</h3>
      </div>

      <div className="report-mini-grid">
        {reports.map((r, idx) => (
          <div className="report-mini" key={idx}>
            <div className="report-mini__label">{r.label}</div>
            <div className="report-mini__value">{r.value}</div>
            <div className="report-mini__sub" style={{ color: r.subColor || 'var(--color-primary-500)' }}>
              {r.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="section-heading" style={{ marginBottom: '8px' }}>
        <h3 style={{ fontSize: '13px' }}>Yield Trend (tons/ha)</h3>
      </div>
      <div className="chart-wrap">
        <svg viewBox="0 0 320 130" preserveAspectRatio="none">
          <polyline fill="none" stroke="#4CAF50" strokeWidth="2.5"
            points="0,90 27,75 54,82 80,55 107,60 134,40 160,48 187,30 214,15 240,20 267,25 293,5" />
          <circle cx="293" cy="5" r="4" fill="#2E7D32" />
        </svg>
      </div>
    </div>
  )
}

export default ReportsPanel