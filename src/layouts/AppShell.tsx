import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/global.css'
import '../styles/Dashboard/Dashboard.css'
import '../styles/Dashboard/ResponsiveDashboard.css'
import Sidebar from '../components/common/Sidebar'
import TopNavbar from '../components/common/TopNavbar'
import BottomNav from '../components/common/BottomNav'

interface AppShellProps {
  pageTitle: string
  children: React.ReactNode
}

const AppShell: React.FC<AppShellProps> = ({ pageTitle, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const location = useLocation()

  const toggleSidebar = () => setSidebarOpen(prev => !prev)

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} activePath={location.pathname} />
      <div className="main">
        <TopNavbar onMenuClick={toggleSidebar} pageTitle={pageTitle} />
        <main className="content">
          {children}
        </main>
        <BottomNav activePath={location.pathname} />
      </div>
    </div>
  )
}

export default AppShell
