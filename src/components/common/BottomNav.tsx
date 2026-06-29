import React from 'react'

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <a href="#" className="active"><span className="icon"><i className="fa-solid fa-house"></i></span>Home</a>
      <a href="#"><span className="icon"><i className="fa-solid fa-table-cells"></i></span>Fields</a>
      <span className="fab"><i className="fa-solid fa-plus"></i></span>
      <a href="#"><span className="icon"><i className="fa-solid fa-list-check"></i></span>Activities</a>
      <a href="#"><span className="icon"><i className="fa-solid fa-chart-line"></i></span>Reports</a>
    </nav>
  )
}

export default BottomNav