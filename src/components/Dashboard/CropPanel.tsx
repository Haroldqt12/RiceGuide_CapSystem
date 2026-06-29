import React from 'react'

const CropPanel: React.FC = () => {
  return (
    <div className="panel">
      <h4>Crop Monitoring</h4>
      <div className="crop-photo"></div>
      <span className="crop-badge">Vegetative Stage <span className="day">Day 45</span></span>
      <div className="crop-detail-row"><span>Planting Date</span><span>May 08, 2025</span></div>
      <div className="crop-detail-row"><span>Expected Harvest</span><span>Sep 10, 2025</span></div>
      <div className="crop-detail-row"><span>Variety</span><span>NSIC Rc222</span></div>
      <div className="crop-detail-row"><span>Field Condition</span><span className="pill-good">Good</span></div>
      <div className="crop-detail-row" style={{ borderBottom: 'none' }}><span>Pest Risk</span><span className="pill-low">Low</span></div>
      <div className="progress-track"><div className="progress-fill" style={{ width: '68%' }}></div></div>
      <div className="progress-label"><span>Growth Progress</span><span>68%</span></div>
    </div>
  )
}

export default CropPanel