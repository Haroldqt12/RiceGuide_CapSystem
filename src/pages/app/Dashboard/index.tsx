import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../../layouts/AppShell'
import WelcomeBanner from '../../../components/Dashboard/WelcomeBanner'
import OverviewStats from '../../../components/Dashboard/OverviewStats'
import WeatherPanel from '../../../components/Dashboard/WeatherPanel'
import CropPanel from '../../../components/Dashboard/CropPanel'
import { DailyLogModal } from '../../../components/Dashboard/DailyLogModal'
import { NewCropCycleModal } from '../../../components/FarmActivities/NewCropCycleModal'
import { useFarming } from '../../../context/FarmingContext'
import './Dashboard.css'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const { currentTask, getWeeklyGuide, cropCycle } = useFarming()

  const [logModalOpen, setLogModalOpen] = useState(false)
  const [newCropModalOpen, setNewCropModalOpen] = useState(false)
  
  const guide = getWeeklyGuide()

  return (
    <AppShell pageTitle="Dashboard">
      <div className="dashboard-page flex flex-col gap-6">
        <WelcomeBanner />
        
        {/* New Current Task Card */}
        {cropCycle && currentTask && (
          <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--color-primary-500)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--color-primary-700)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Current Farming Task
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{currentTask.name}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                {currentTask.description}
              </p>
              <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                <strong>Expected Completion:</strong> {new Date(currentTask.expectedCompletionDate!).toLocaleDateString()}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-ghost" onClick={() => navigate('/farm-activities')}>View Details</button>
              <button className="btn-primary" onClick={() => navigate('/farm-activities')} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <i className="fa-solid fa-check"></i> Manage Task
              </button>
            </div>
          </div>
        )}

        {/* Quick action buttons */}
        <div className="dashboard-quick-actions" style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setNewCropModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="fa-solid fa-seedling"></i> Start New Crop Cycle
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setLogModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="fa-solid fa-plus"></i> Daily Log
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => navigate('/ai-assistant')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <i className="fa-solid fa-book-open"></i> Full AI Guide
          </button>
        </div>

        <OverviewStats />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <WeatherPanel />
          <CropPanel />
        </div>

        
      </div>
      
      {logModalOpen && <DailyLogModal onClose={() => setLogModalOpen(false)} />}
      {newCropModalOpen && <NewCropCycleModal onClose={() => setNewCropModalOpen(false)} />}
    </AppShell>
  )
}

export default Dashboard