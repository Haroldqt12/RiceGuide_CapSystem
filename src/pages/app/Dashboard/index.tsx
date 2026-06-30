import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../../layouts/AppShell'
import WelcomeBanner from '../../../components/Dashboard/WelcomeBanner'
import OverviewStats from '../../../components/Dashboard/OverviewStats'
import WeatherPanel from '../../../components/Dashboard/WeatherPanel'
import CropPanel from '../../../components/Dashboard/CropPanel'
import AIPanel from '../../../components/Dashboard/AIPanel'
import ActivitiesPanel from '../../../components/Dashboard/ActivitiesPanel'
import ReportsPanel from '../../../components/Dashboard/ReportPanel'
import { WeeklyGuideCard } from '../../../components/Dashboard/WeeklyGuideCard'
import type { WeeklyGuideData } from '../../../components/Dashboard/WeeklyGuideCard'
import './Dashboard.css'

/* ============================================
   Mock Weekly Guide data (replace with RAG fetch later)
   TODO: connect to Flask /api/weekly-guide
   ============================================ */
const MOCK_GUIDE: WeeklyGuideData = {
  week_number: 8,
  stage: 'Panicle Init',
  generated_at: '2026-06-30',
  tasks: [
    {
      type: 'water',
      title: 'Bantayan ang tubig sa uma',
      description:
        'Ipadayon ang 2–3 cm nga tubig sa uma aron malikayan ang stress sa panicle initiation.',
      priority: 'high',
    },
    {
      type: 'fertilizer',
      title: 'Ika-2 nga paabono (Urea)',
      description:
        'Ibutang ang 40 kg/ha nga Urea sulod sa 3 ka adlaw. I-aplikar sa dili pa moulan.',
      priority: 'medium',
    },
    {
      type: 'pest',
      title: 'Pest scouting alang sa brown planthopper',
      description:
        'Susiha ang ubos nga bahin sa dahon. Kon makita ang peste, ireport dayon.',
      priority: 'medium',
    },
    {
      type: 'observation',
      title: 'Timan-i ang kolor sa dahon',
      description:
        'Kon nanilaw ang mga bag-ong dahon, posibleng kulang sa nitrogen — konsultaha ang AI assistant.',
      priority: 'low',
    },
  ],
  sources: [
    'PhilRice Crop Management Guide',
    'IRRI Rice Knowledge Bank',
    'DA-Region Field Advisory',
  ],
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  // Mocked guide — no fetch needed yet
  const [guide] = useState<WeeklyGuideData>(MOCK_GUIDE)
  const [loading] = useState<boolean>(false)
  const [error] = useState<string | null>(null)

  return (
    <AppShell pageTitle="Dashboard">
      <div className="dashboard-page flex flex-col gap-6">
        <WelcomeBanner />

        <OverviewStats />

        {/* RAG-Powered Weekly Farm Guide — full width, above panels */}
        <div className="section-heading">
          <h3>
            <i className="fa-solid fa-robot"></i> Daily Farm Guide 
          </h3>
        </div>
        <WeeklyGuideCard
          guide={guide}
          loading={loading}
          error={error}
          onRetry={() => undefined}
        />

        {/* Quick action buttons */}
        <div className="dashboard-quick-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate('/ai-assistant')}
          >
            <i className="fa-solid fa-book-open"></i> Full Guide
          </button>
        </div>

        {/* Panel-row: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <WeatherPanel />
          <CropPanel />
          <AIPanel />
        </div>

        {/* Bottom-row: 2 cols on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-4">
          <ActivitiesPanel />
          <ReportsPanel />
        </div>
      </div>
    </AppShell>
  )
}

export default Dashboard