import React from 'react'

export interface AlertItem {
  type: string
  message: string
}

interface AlertBannerProps {
  alerts: AlertItem[]
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null

  return (
    <div className="rag-alert-banner" role="alert">
      <i className="fa-solid fa-triangle-exclamation rag-alert-banner__icon"></i>
      <div className="rag-alert-banner__msg">
        {alerts.map((a, idx) => (
          <div key={idx}>{a.message}</div>
        ))}
      </div>
    </div>
  )
}

export default AlertBanner