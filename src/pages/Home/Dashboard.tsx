import React, { useState } from 'react'
import '../../Design/Dashboard.css'
import Sidebar from '../../components/common/Sidebar'
import TopNavbar from '../../components/common/TopNavbar'
import BottomNav from '../../components/common/BottomNav'
import WelcomeBanner from '../../components/Dashboard/WelcomeBanner'
import OverviewStats from '../../components/Dashboard/OverviewStats'
import WeatherPanel from '../../components/Dashboard/WeatherPanel'
import CropPanel from '../../components/Dashboard/CropPanel'
import AIPanel from '../../components/Dashboard/AIPanel'
import ActivitiesPanel from '../../components/Dashboard/ActivitiesPanel'
import ReportsPanel from '../../components/Dashboard/ReportPanel'


const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => setSidebarOpen(prev => !prev)

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
      <div className="main">
        <TopNavbar onMenuClick={toggleSidebar} />
        <main className="content">
          <WelcomeBanner />
          <OverviewStats />
          <div className="panel-row">
            <WeatherPanel />
            <CropPanel />
            <AIPanel />
          </div>
          <div className="bottom-row">
            <ActivitiesPanel />
            <ReportsPanel />
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default Dashboard