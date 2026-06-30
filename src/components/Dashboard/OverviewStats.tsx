import React from 'react'
import StatCard from './StatCard'

const OverviewStats: React.FC = () => {
  const stats = [
    { iconClass: 'icon-green', label: 'Total Farm Area', value: '25.6 ha', sub: '+2.5% from last month' },
    { iconClass: 'icon-blue', label: 'Active Rice Fields', value: '12 Fields', sub: '2 in preparation', subColor: 'var(--color-text-secondary)' },
    { iconClass: 'icon-gold', label: 'Growth Progress', value: '68%', sub: 'Average progress', subColor: 'var(--color-text-secondary)' },
    { iconClass: 'icon-good', label: 'Crop Health Status', value: 'Good', sub: 'No major issues', subColor: 'var(--color-text-secondary)' },
    { iconClass: 'icon-purple', label: 'Upcoming Activities', value: '3 Tasks', sub: 'Due this week', subColor: 'var(--color-text-secondary)' },
  ]

  return (
    <>
      <div className="section-heading">
        <h3><i className="fa-solid fa-chart-simple"></i> Farm Overview</h3>
      </div>
      {/* overview-grid:
          Mobile: 2 cols
          Tablet: 3 cols
          Desktop: 5 cols
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 mb-6">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
    </>
  )
}

export default OverviewStats