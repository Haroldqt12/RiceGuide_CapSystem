import React from 'react'

interface Insight {
  icon: string
  title: string
  desc: string
}

const AIPanel: React.FC = () => {
  const insights: Insight[] = [
    { icon: 'fa-solid fa-droplet', title: 'Irrigation Advisory', desc: 'Water level is optimal. Maintain current irrigation schedule.' },
    { icon: 'fa-solid fa-flask', title: 'Fertilizer Recommendation', desc: 'Apply urea fertilizer in 3 days for better tillering.' },
    { icon: 'fa-solid fa-bug', title: 'Pest Alert', desc: 'Low risk of brown planthopper. Continue monitoring.' },
    { icon: 'fa-solid fa-triangle-exclamation', title: 'Weather Alert', desc: 'Possible rain in 2 days. Prepare drainage systems.' },
  ]

  return (
    <div className="panel">
      <h4>AI Rice Assistant <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', fontWeight: '400' }}>— Smart Insights for Your Farm</span></h4>
      {insights.map((item, idx) => (
        <div className="ai-insight" key={idx}>
          <div className="ai-insight__icon"><i className={item.icon}></i></div>
          <div>
            <p className="ai-insight__title">{item.title}</p>
            <p className="ai-insight__desc">{item.desc}</p>
          </div>
        </div>
      ))}
      <a href="#" className="btn-primary">View All Insights</a>
    </div>
  )
}

export default AIPanel