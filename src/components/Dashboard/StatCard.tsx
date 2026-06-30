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
    <div className="stat-card p-3 md:p-4">
      <div className={`stat-card__icon ${iconClass}`}>
        <i className={icon}></i>
      </div>
      <div className="stat-card__label text-[11px] md:text-xs">{label}</div>
      <div className="stat-card__value text-lg md:text-xl lg:text-2xl">{value}</div>
      <div className="stat-card__sub text-[10px] md:text-xs" style={{ color: subColor || 'var(--color-primary-500)' }}>
        {sub}
      </div>
    </div>
  )
}

export default StatCard