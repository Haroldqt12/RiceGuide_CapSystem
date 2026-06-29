import React from 'react'

interface StatCardProps {
  iconClass: string
  label: string
  value: string | number
  sub: string
  subColor?: string
}

const StatCard: React.FC<StatCardProps> = ({ iconClass, label, value, sub, subColor }) => {
  // Determine icon based on the class (quick mapping)
  let icon = 'fa-solid fa-map'
  if (iconClass.includes('blue')) icon = 'fa-solid fa-table-cells'
  else if (iconClass.includes('gold')) icon = 'fa-solid fa-clock-rotate-left'
  else if (iconClass.includes('good')) icon = 'fa-solid fa-heart-pulse'
  else if (iconClass.includes('purple')) icon = 'fa-solid fa-clipboard-list'
  // green is default

  return (
    <div className="stat-card">
      <div className={`stat-card__icon ${iconClass}`}>
        <i className={icon}></i>
      </div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__sub" style={{ color: subColor || 'var(--color-primary-500)' }}>
        {sub}
      </div>
    </div>
  )
}

export default StatCard